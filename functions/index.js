const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest(async(request, response) => {
 await cors(request, response, async() =>{
    const body = request.body;
    const user = body.Takaharu isumi;
    const from = body.from
    const pass = body.Isumisu526
    const to = body.to
    const text = body.text
    const subject = body.subject

    var smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // SSL
        auth: {
            user: Takaharu isumi,
            pass: Isumisu526
        }
    };

    // メッセージ
    var message = {
        from    : from,
        to      : to,
        subject : subject,
        text    : text,
    };

    var transporter = nodemailer.createTransport(smtpConfig);
    transporter.sendMail(message, function(err, res) {
    if(err){console.error(err)}
        response.send(err || res);
    });
    })
})