import { HttpStatus } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { EmailDto } from './email.dto';

export class Mailer {
    async sendMail(emailDto: EmailDto) {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.sendgrid.net",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "apikey",//process.env.SENDGRID_USERNAME, // generated ethereal user
                pass: "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"//process.env.SENDGRID_PASSWORD, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: emailDto.from, // sender address
            to: emailDto.to, // list of receivers
            subject: emailDto.subject, // Subject line
            text: emailDto.text, // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        return { code: HttpStatus.OK, status: "Ok", respone: { message: "Email Sent", MessageId: info.messageId } }
    }

    //sendMail().catch(console.error); --> to log errors
}