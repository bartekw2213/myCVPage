const express = require('express');
const { sendClientMail, sendWelcomeMail } = require('../utils/sgMail');

const router = express.Router();

// @route   POST /email
// @desc    Posting an email message
// @access  Public
router.post('/', async (req, res) => {
  const { name, emailAdress, text } = req.body;

  try {
    sendClientMail(name, emailAdress, text);
    sendWelcomeMail(name, emailAdress);
    res.send('OK');
  } catch (error) {
    console.error(error);
    res.send('Error');
  }
});

module.exports = router;
