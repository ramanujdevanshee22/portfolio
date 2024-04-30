import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const {name, email,  number,  message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'zoho',
            host: 'smtpro.zoho.in',
            port: 465,
            secure: true,
            auth: {
                user: 'dhabu2212@gmail.com',
                pass: process.env.NEXT_PUBLIC_PASSWORD
            }
        })

        const mailOption = {
            from: `${email}`,
            to: "ramanujdevanshee22@gmail.com",
            subject:`From ${name}`,
            html: `
        
            <li> Message: ${message}</li> 
            <span>Phone Number: ${number}</span>
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email", error: `${error}` }, { status: 500 })
    }
}