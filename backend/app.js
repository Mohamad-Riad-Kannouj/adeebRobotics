const express = require("express");

var cors = require("cors");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
const fetch = require("node-fetch");

const data = require("./data.js");

const app = express();

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200
}

app.use(bodyParser.urlencoded({ limit: "5mb", extended: false }));
app.use(bodyParser.json({ limit: "5mb" }));

let transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

app.get("/backend/data", cors(corsOptions), (req, res) => {
  res.json(data);
});

app.post("/backend/send", cors(corsOptions), (req, res) => {
  const response_key = req.body["token"];
  const secret_key = process.env.SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

  fetch(url, {
    method: "post",
  })
    .then((response) => response.json())
    .then((google_response) => {
      if (google_response.success == true) {
        let mailOptions = {
          from: process.env.MAIL_USERNAME,
          to: process.env.MAIL_USERNAME,
          subject: req.body.subject,
          html: `<h3>From:</h3><ul><li><strong>Name: </strong>${req.body.name}</li><li><strong>Email: </strong>${req.body.email}</li></ul><hfe2>Message:</h2><p>${req.body.message}</p>`,
        };

        let files = req.body.attachments;
        if (files) {
          mailOptions["attachments"] = files;
        }

        transporter.sendMail(mailOptions, function (err, data) {
          if (err) {
            return res.status(500).end();
          } else {
            return res.status(200).end();
          }
        });
      } else {
        return res.status(500).end();
      }
    })
    .catch((error) => {
      return res.status(500).end();
    });
});

app.listen();