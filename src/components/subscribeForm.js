import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import useForm from 'react-hook-form';
import { idText } from 'typescript';

const handleChange = () => {};

export default function SubscribeForm() {

  const [message, changeMessage] = useState('');
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data, e) => {
    fetch('.netlify/functions/mailchimp-interface', {
      headers: {
        // Accept: 'application/json',
        // Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body: new URLSearchParams(data),
    })
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
      })
      .catch(error => {
        console.warn(error);
      })
  };

  return (
    <form
      className="SubscribeForm"
      onSubmit={handleSubmit(onSubmit)}
      name="subscribe"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input aria-hidden="true" type="hidden" name="form-name" value="contact" />
      <p hidden>
        <input name="bot-field" onChange={handleChange} />
      </p>

      <p>
        <label>Your Email:</label>
        <input
          name="email_address"
          id="email_address"
          placeholder="you@your-email.com"
          ref={register({
            required: 'We need an email address',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "This doesn't look like a proper email address",
            },
          })}
        />
      </p>
      <h4>
        {errors.email_address && errors.email_address.message}
      </h4>
      <p>
        <label>
          By signing up I agree that I have read our terms and conditions.
        </label>
      </p>
      <h4>{message}</h4>
      <button type="submit" value="Submit">sign me up</button>
    </form>
  );
}
