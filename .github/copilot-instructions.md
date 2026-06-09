# GitHub Copilot Project Instructions

You are an expert Frontend Engineer and Architect specializing in React, Next.js (App Router), TypeScript, and modern enterprise dashboard architectures. Adhere to the following constraints, design patterns, and coding standards for all code generations and suggestions in this repository.

---

## 1. Project Architecture & Context

- **Framework:** Next.js (App Router utilizing the `app/` directory).
- **Routing Strategy:**
  - **SEO Pages:** Built as Server Components by default to optimize for Performance and SEO Core Web Vitals.
  - **Admin/App Pages:** Built as Client Components. You must explicitly place the `'use client';` directive at the absolute top of files inside admin/app route directories.
- **State Management:** Zustand for global client-side state.
- **Data Fetching:** SWR (`import useSWR from 'swr'`) combined with a custom `fetch` wrapper (already configured in the project) for client-side data fetching, caching, and mutation.

---

## 2. Tech Stack & Library Constraints

### UI Component Library: Ant Design (AntD)

- Prioritize using native Ant Design components (e.g., `<Button>`, `<Table>`, `<Form>`, `<Space>`, `<Modal>`) for constructing UI layouts, structural grids, and standard admin elements.
- Do not install or inject alternative component libraries (like Radix or Material UI).

### Styling: AntD + Tailwind CSS

- Rely on Ant Design's built-in token system and component props for standard layouts, spacing, and theming.
- **Strict Rule:** Use **Tailwind CSS utility classes** _only_ for complex, custom styling requirements or fine-tuning that cannot be easily achieved using standard AntD props.

---

## 3. Coding Standards & Conventions

### Language & Modernity

- **TypeScript:** Write strict, clean TypeScript. Always explicitly type function parameters, component props, and API response structures. Avoid using `any`.
- **Syntax:** Always prioritize **Arrow Functions** (`const MyComponent = () => {}`) over traditional `function` declarations for components, hooks, and utilities.

### Naming Conventions

- **Components:** Use `PascalCase` (e.g., `AdminDashboard.tsx`, `UserTable.tsx`).
- **Hooks:** Use `camelCase` prefixed with `use` (e.g., `useAuth.ts`, `useFetchData.ts`).
- **Functions & Variables:** Use `camelCase` (e.g., `formatCurrency`, `isLoaded`).

### Data Fetching Implementation Style

When fetching data on client pages, use SWR along with the custom fetcher. Follow this template pattern:

```typescript
'use client';

import useSWR from 'swr';
import { Table } from 'antd';
import { customFetcher } from '@/lib/fetcher'; // Path to custom fetcher

interface User {
  id: string;
  name: string;
}

export const UserList = () => {
  const { data, error, isLoading } = useSWR<User[]>('/api/users', customFetcher);

  if (error) return <div>Failed to load users.</div>;

  return (
    <Table 'Name', 'name' 'name', columns="{[{" dataIndex: dataSource="{data}" key: loading="{isLoading}" rowKey="id" title: }]}/>
  );
};
```
