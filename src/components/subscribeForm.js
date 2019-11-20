import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import useForm from 'react-hook-form';

const handleChange = () => {

};

export default function SubscribeForm() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values.email_address);
    const formData = new FormData();
    fetch('/.netlify/functions/mailchimp-test',{
      method: 'POST',
      body: formData,
    })
    .then(response=>response)
      .then(data =>({
        body:data,
      }).then(console.log(data))
      .catch(error=>{
      console.error(error);
    }))
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
          placeholder="you@your-email.com"
          ref={register({
            required: 'We need an email address',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "This doesn't look like a proper email address",
            },
          })}
        />
        {errors.email_address && errors.email_address.message}
      </p>
      <p>
        <label>
          By signing up I agree that I have read our terms and conditions.
        </label>
      </p>
      <button type="submit" value="Submit">sign me up</button>
    </form>
  );
}
