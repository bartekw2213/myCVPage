const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.sendGridAPIKey);

const sendClientMail = (name, emailAdress, text) => {
  sgMail.send({
    to: 'bartekw2213@gmail.com',
    from: 'bartekw2213@gmail.com',
    subject: `Wiadomość od: ${emailAdress}`,
    html: `
        <h2>Wiadmość od: <strong>${name}</strong></h2>
        <h4>Tekst:</h4>
        <p>${text}</p>
    `,
  });
};

const sendWelcomeMail = (name, emailAdress) => {
  sgMail.send({
    to: emailAdress,
    from: 'bartekw2213@gmail.com',
    subject: `Cześć ${name}`,
    html: `
        <h2>Otrzymałem twoją wiadomość 📨👋</h2>
        <p>Super, że zechciałeś do mnie napisać 🙂. Twoja wiadomość do mnie dotarła i już niedługo Ci odpiszę. Do usłyszenia🙌!</p>
        <h3><strong>Bartłomiej Wilczyński - zamow-strone-www.pl </strong></h3>
    `,
  });
};

module.exports = {
  sendClientMail,
  sendWelcomeMail,
};
