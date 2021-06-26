require("dotenv").config();

const nodeMailer = require("nodemailer");

function sendMail(smtpData, mailData) {

	// SMTPサーバの情報をまとめる
	const transporter = nodeMailer.createTransport(smtpData);

	// メール送信
	transporter.sendMail(mailData, function(error, info) {
		if(error) {
			// console.log(process.env.MAILADDRESS);
			// console.log(process.env.PASSWORD);
			// エラー
			console.log(error);
		} else {
			// 送信成功
			console.log("Email sent: " + info.responce);
		}
	});
}

function senderMain() {
	// SMTP情報を格納(Gmailの場合)
	const smtpData = {
		host: "smtp.gmail.com",	// Gmailサーバ
		port: "465", 			// Gmailの場合 SSL: 465 / TLS: 587
		secure: true,			// true > SSL
		auth: {
			user: process.env.MAILADDRESS,		// メールアドレス
			pass: process.env.PASSWORD			// パスワード
		}
	};

	// メール内容の設定
	const mailData = {
		from: smtpData.auth.user,			// 送信元
		to: process.env.MAILADDRESS,			// 送信先
		subject: "Hello",					// 件名
		text: "テストメール",					// 通常のメール本文
		html: "<b>htmlテストメール</b>"			// HTMLメール
	}

	// メール送信
	sendMail(smtpData, mailData);
}

senderMain();