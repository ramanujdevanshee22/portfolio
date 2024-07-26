'use server'
import nodemailer from 'nodemailer'


const MAIL_HOST_CONFIG = {
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_KEY,
  },
};
const TRANSPORTER = nodemailer.createTransport(MAIL_HOST_CONFIG);
export async function sendMail(data) {
    console.log(data);
    const formDataObj = Object.fromEntries(data.entries());
    const { username, number, email, message} = formDataObj;
    try {
        const msg = {
          from: process.env.MAIL_USER,
          to: "dhabu2212@gmail.com",
          subject: "New message from " + username,
          html: `<h3>🔔 Ting Ting...</h3><h5 style="white-space: pre-line;">${message}</h5><p>${email} | ${number}</p>`,
        };
        await TRANSPORTER.sendMail(msg);
        console.log(`Mail sent successfully to: ${msg.to}`);
        return  true;
      } catch (error) {
        console.log(error);
        throw new Error('Failed to send email');
      }
   
}