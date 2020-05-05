import React, { useState } from 'react';
import classes from './Contact.module.css';
import LetterMan from '../../img/LetterMan.svg';
import axios from 'axios';

const Contact = (props) => {
  const [formData, setFormData] = useState({
    text: '',
    name: '',
    email: '',
  });

  const { text, name, email } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('/email', formData);
    props.history.push('/');
  };

  return (
    <div className={`${classes.ContainerForMobile} container container-flex`}>
      <div className={classes.MessageWindow}>
        <div className={classes.MessageWindowLeft}>
          <img src={LetterMan} alt='Obrazek' />
        </div>
        <div className={classes.MessageWindowRight}>
          <h1>Wyślij wiadomość</h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className={classes.FormGroup}>
              <label htmlFor='text'>Tekst</label>
              <textarea
                value={text}
                onChange={(e) => onChange(e)}
                name='text'
                id='text'
                required
              ></textarea>
            </div>
            <div className={classes.MessageInfo}>
              <div className={classes.FormGroup}>
                <label htmlFor='name'>Imię i nazwisko</label>
                <input
                  value={name}
                  onChange={(e) => onChange(e)}
                  name='name'
                  id='name'
                  type='text'
                  required
                />
              </div>
              <div className={classes.FormGroup}>
                <label htmlFor='email'>Twój adres email</label>
                <input
                  value={email}
                  onChange={(e) => onChange(e)}
                  name='email'
                  id='email'
                  type='email'
                  required
                />
              </div>
            </div>
            <button type='submit'>
              WYŚLIJ <i className='far fa-paper-plane'></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
