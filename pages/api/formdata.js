export default  async function (req, res) {
    console.log(req.body)
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {

        user: "aragonemil.webdev@gmail.com",
        pass: "vfampaowazvbgglo",
      },
      secure: true,
    });
  
    const mailData = {
      from: "<no_reply@aragonemil.com>",
      to: "aragonemil.webdev@gmail.com",
      subject: `${req.body.subject} - ${req.body.name}`,
      text: req.body.text + " | Sent from: " + req.body.email,
      // html: `<div>${req.body.message}</div>
  
      // `
      html: `
          <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                <tr>
                    <td style="padding:0;font-size:1vw;">
                        <div style="font-family:Helvetica;font-weight:400;line-height:20px;padding-left:40px;padding-top:20px;padding-bottom:20px;">
                            <p>From: ${req.body.email}</p>
                            <p>Name: ${req.body.name}</p>
                            <p>Phone: ${req.body.phone}</p>
                        </div>
                        <div style="font-family:Helvetica;font-weight:bold;line-height:20px;padding-left:40px;padding-top:20px;padding-bottom:20px;">
                        <p>Subject:<span>${req.body.subject}</span></p>    
                        </div>
                        <div style="font-family:Helvetica;fline-height:20px;padding-left:40px;padding-top:20px;padding-bottom:20px;">
                            <p>${req.body.message}</p>
                        </div>
                        <br>
                    </td>
                </tr>
                
            </table>
          `,
    };
  
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
    res.status(200).json({ status: "OK" });
  
  }