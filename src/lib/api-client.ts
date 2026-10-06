/* eslint-disable @typescript-eslint/no-explicit-any */
type RequestConfig = Omit<RequestInit, 'body'> & {
  params?: Record<string, string | number | boolean | undefined>;
  body?: any;
  timeout?: number;
};

type RequestInterceptor = (config: RequestConfig) => RequestConfig | Promise<RequestConfig>;
type ResponseInterceptor = (response: Response) => Response | Promise<Response>;

type HttpResponse<T = any> = {
  statusCode: number;
  message: string;
  data: T;
};

export class HttpClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;
  private requestInterceptors: RequestInterceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];

  constructor(options: { baseUrl?: string; headers?: Record<string, string> } = {}) {
    this.baseUrl = options.baseUrl || '';
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
  }

  // Interceptors setup
  public interceptors = {
    request: {
      use: (fn: RequestInterceptor) => this.requestInterceptors.push(fn),
    },
    response: {
      use: (fn: ResponseInterceptor) => this.responseInterceptors.push(fn),
    },
  };

  // Hàm core thực thi fetch
  private async request<T = any>(endpoint: string, config: RequestConfig = {}): Promise<T> {
    let finalConfig = { ...config };

    // 1. Chạy danh sách Request Interceptors
    for (const interceptor of this.requestInterceptors) {
      finalConfig = await interceptor(finalConfig);
    }

    // 2. Cấu hình Query Parameters
    let url = `${this.baseUrl}${endpoint}`;
    if (finalConfig.params) {
      const searchParams = new URLSearchParams();
      Object.entries(finalConfig.params).forEach(([key, value]) => {
        if (value !== undefined) searchParams.append(key, String(value));
      });
      const queryString = searchParams.toString();
      if (queryString) url += `?${queryString}`;
    }

    // 3. Cấu hình Headers & Timeout
    const headers = { ...this.defaultHeaders, ...finalConfig.headers };
    const timeout = finalConfig.timeout || 10000;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    // 4. Xử lý Request Body (Auto Stringify nếu là Object)
    let body = finalConfig.body;
    if (body && typeof body === 'object' && !(body instanceof FormData)) {
      body = JSON.stringify(body);
    }

    try {
      let response = await fetch(url, {
        ...finalConfig,
        headers,
        body,
        signal: controller.signal,
      });

      clearTimeout(id);

      // 5. Chạy Response Interceptors
      for (const interceptor of this.responseInterceptors) {
        response = await interceptor(response);
      }

      // 6. Xử lý HTTP Error Status (Axios tự throw khi status không nằm trong 2xx)
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          status: response.status,
          statusText: response.statusText,
          data: errorData,
        };
      }

      // 7. Auto JSON parsing
      if (response.status === 204) return {} as T;
      return (await response.json()) as T;
    } catch (error: any) {
      clearTimeout(id);
      if (error.name === 'AbortError') {
        throw new Error(`Request timeout sau ${timeout}ms`);
      }
      throw error;
    }
  }

  // Shorthand methods giống Axios
  public get<T = any>(endpoint: string, config?: RequestConfig) {
    return this.request<HttpResponse<T>>(endpoint, { ...config, method: 'GET' });
  }

  public post<T = any>(endpoint: string, body?: any, config?: RequestConfig) {
    return this.request<HttpResponse<T>>(endpoint, { ...config, method: 'POST', body });
  }

  public put<T = any>(endpoint: string, body?: any, config?: RequestConfig) {
    return this.request<HttpResponse<T>>(endpoint, { ...config, method: 'PUT', body });
  }

  public patch<T = any>(endpoint: string, body?: any, config?: RequestConfig) {
    return this.request<HttpResponse<T>>(endpoint, { ...config, method: 'PATCH', body });
  }

  public delete<T = any>(endpoint: string, config?: RequestConfig) {
    return this.request<HttpResponse<T>>(endpoint, { ...config, method: 'DELETE' });
  }
}
