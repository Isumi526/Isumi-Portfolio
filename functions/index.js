const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.emailSend = functions.https.onRequest(async(request, response) => {
 await cors(request, response, async() =>{
    // const body = request.body;
    // const user = body.ismsn526@gmail.com;
    // const from = body.ismsn526@gmail.com
    // const pass = body.Isumisu526
    // const to = body.ismsn526@gmail.com
    // const text = body.text
    // const subject = body.subject

    var smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // SSL
        auth: {
            user: "ismsn526@gmail.com",
            pass: "Isumisu526"
        }
    };

    // メッセージ
    var message = {
        from    : "ismsn526@gmail.com",
        to      : "ismsn526@gmail.com",
        subject : "subject",
        text    : "text",
    };

    var transporter = nodemailer.createTransport(smtpConfig);
    transporter.emailSend(message, function(err, res) {
    if(err){console.error(err)}
        response.send(err || res);
    });
    })
})