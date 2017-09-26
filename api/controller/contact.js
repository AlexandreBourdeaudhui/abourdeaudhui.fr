/*
 * Package Import
 */
import validateEmail from 'validate-email';
import nodemailer from 'nodemailer';
import config from 'config';


/*
 * Local Import
 */
const service = config.get('Nodemailer.service');
const user = config.get('Nodemailer.user');
const pass = config.get('Nodemailer.pass');


/*
 * Export
 */
export default (request, response) => {
  const { name, email, object, message, phone } = request.body;
  const errors = [];

  if (name.length < 3) {
    errors.push('Le nom doit faire au moins 3 caractères');
  }

  if (!validateEmail(email)) {
    errors.push('L\'email n\'est pas valide, le format attendu est abc@xyz.com');
  }

  if (object.length < 3) {
    errors.push('L\'objet doit faire plus de 3 caractères');
  }

  if (message.length < 10) {
    errors.push('Le message doit faire au moins 10 caractères');
  }

  return new Promise((resolve, reject) => {
    if (errors.length) return reject(errors);
    return resolve();
  }).then(() => {
    const mailOptions = {
      from: name,
      to: 'alexandre.bourdeaudhui@gmail.com',
      subject: object,
      text: `
        De ${name},
        email: ${email},
        téléphone: ${phone}.
        Message: ${message}`,
    };

    return new Promise((resolve, reject) => {
      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({ service, auth: { user, pass } });

      // Send Mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) return reject(error);
        return resolve(info);
      });
    });
  }).then(() => {
    response.status(200).json({ message: 'Votre message a bien été envoyé.' });
  }).catch((error) => {
    response.status(404).json({ error });
  });
};
