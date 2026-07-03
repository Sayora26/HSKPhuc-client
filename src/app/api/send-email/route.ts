import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, course } = body;

    if (!name || !phone || !email || !course) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      // Lưu ý: Gmail sẽ luôn ép email gửi đi là chính email đăng nhập của bạn (SMTP_USER)
      // Nhưng bạn có thể dùng thuộc tính replyTo để nếu bạn bấm "Trả lời", nó sẽ gửi thẳng đến mail học viên.
      from: `"Tiếng Trung Afú" <${process.env.SMTP_USER}>`,
      to: process.env.TEACHER_EMAIL,
      replyTo: email || undefined,
      subject: `[Đăng ký nhận tư vấn] - ${name} - Khóa ${course}`,
      html: `<table style="width: 100%; max-width: 600px; border-collapse: collapse; font-family: Arial, sans-serif;">
        <thead>
          <tr style="background-color: #11264f; color: white;">
            <th colspan="2" style="padding: 15px; text-align: center; font-size: 18px;">
              THÔNG TIN ĐĂNG KÝ HỌC VIÊN MỚI
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color: #f9f8f6;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 35%;">Họ và tên:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Số điện thoại:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr style="background-color: #f9f8f6;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Khóa học quan tâm:</td>
            <td style="padding: 10px; border: 1px solid #ddd; color: #aa8845; font-weight: bold;">${course}</td>
          </tr>
        </tbody>
      </table>
      <p><em>Hệ thống thông báo tự động từ Website Tiếng Trung Afú.</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
