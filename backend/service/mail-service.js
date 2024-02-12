import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

export default class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Account Activation on " + process.env.API_URL,
      text: "",
      html: `
        <div>
        <h1>Для активації акаунту перейдіть за посиланям</h1>
        <a href="${link}">${link}</a><br /><br />
        <p>Якщо ви не надавали цієї адреси для реєстрації, то проігноруйте це повідомлення.</p>
        </div>
      `,
    });
  }
}
