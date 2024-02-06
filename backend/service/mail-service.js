import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();
export default class MailService {
  constructor() {
    this.transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST,
        port:  Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
            user :process.env.SMTP_USER,
            pass :process.env.SMTP_PASSWORD,
        },
    })
  }
  async sendActivationMail(to,link) => {
      
  }
}
