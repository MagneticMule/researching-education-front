import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import useForm from 'react-hook-form';


  const {handleSubmit, register, errors} = useForm();
  const onSubmit = values => {
    console.log(values);


  const SubscribeForm = ()=>
  (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="subscribe"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <input
        name="email"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      />
      {errors.email && errors.email.message}

      <input
        name="username"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.username && errors.username.message}

      <button type="submit">Submit</button>
    </form>
);

export default SubscribeForm;