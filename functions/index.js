const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.emailSend = functions.https.onRequest((request, response) => {
var mailer = require('nodemailer');

//SMTPの設定
var setting = {
    //SMTPサーバーを使う場合
    host: 'SMTPホスト',
    auth: {
        user: 'ユーザ名',
        pass: 'パスワード',
        port: 'SMTPポート番号'
    }

    /*
    //Webサービスを使う場合
    service: 'サービス名', //'Gmail'、'Hotmail'、'Yahoo Mail'など
    auth: {
        user: 'アカンと名',
        pass: 'パスワード',
        port: 'ポート番号' //'25'など
    }
    */
};

//メールの内容
var mailOptions = {
    from: '送信者のメールアドレス',
    to: '送信先メールアドレス',
    subject: 'メールの件名',
    html: 'メールの内容' //HTMLタグが使えます
};

//SMTPの接続
var smtp = mailer.createTransport('SMTP', setting);

//メールの送信
smtp.sendMail(mailOptions, function(err, res){
    //送信に失敗したとき
    if(err){
        console.log(err);
    //送信に成功したとき
    }else{
        console.log('Message sent: ' + res.message);
    }
    //SMTPの切断
    smtp.close();
});
  response.send("Hello from Firebase!");
});