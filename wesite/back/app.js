import express from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import userdt from './signindata';
import nodemailer from "nodemailer";
import send from "./sendmail";
import Comment from "./problemtext";
import multer from "multer";
import product from "./product";
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://sasivardhan11:219O6aMhhexcA4XT@mywebsite1.snflh1e.mongodb.net/Mywebsite1?retryWrites=true&w=majority')
    .then(() => app.listen(4000))
    .then(() => console.log("Connected to Database & Listening to localhost 4000"))
    .catch((err) => console.log(err));
    const storage = multer.diskStorage({
      destination: function (req, file, callback) {
        callback(null, './images');
      },
      filename: function (req, file, callback) {
        callback(null, Date.now() + '_' + file.originalname);
      }
    });
// ... (remaining code)
const upload = multer({ storage: storage });
// Now, you can use the 'upload' object in your route handlers
// Example route using 'upload'
app.post("/addproduct", upload.single("myfile"), async (req, res, next) => {
  try { 
    const productpic = req.file ? req.file.filename : null;
    const { name, email, password } = req.body.data;
    // Assuming you have a Mongoose model named "Data" for your schema
    const prod = new product({
      name,
      email,
      password,
      productpic
    });

    await prod.save();
    return res.status(200).json({ message: 'Image added successfully' });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: 'Error adding image', error: err.message });
  }
});


app.post("/addForm", async (req, res, next) => {
    const { name, email, comments } = req.body.formdata;
    const smail = new send({
        name,
        email,
        comments,
    });

    try { 
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kushalvuppala@gmail.com',
                pass: 'jgzw eeoq iuxe tmyg',
            },
        });

        var mailOptions = {
            from: 'kushalvuppala@gmail.com',
            to: email,
            subject: 'sending mails to rectify problems to be solved',
            text: 'Thanks ' + name + ' for your valuable Feedback we will soon rectify your problem. ' + comments,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "error", error: err.message });
    }

    return res.status(200).send({ msg: "Inserted", result: smail });
});
