import { Formik } from "formik";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

function Form(props) {
  const history = useHistory();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(_values) => {
        history.push("/launches");
      }}
      validate={(values) => {
        const errors = {};

        if (values.email.trim() === "") {
          errors.email = "Email field can't be empty";
        }

        if (values.password.trim() === "") {
          errors.password = "Password field can't be empty";
        }

        return errors;
      }}
    >
      {({ errors, handleChange, handleSubmit, handleBlur, touched, isSubmitting, dirty, isValid, values }) => {
        return (
          <form className={props.className} onSubmit={handleSubmit}>
            <h1 id="login-header">
              <span className="orange">Log</span>in
            </h1>

            <label id="email-label"> Email</label>
            <input id="email" className="effect-8" type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.userName} />
            {errors.email && touched.email && <span className="error">{errors.email}</span>}

            <label id="pass-label">Password </label>
            <input id="pass" className="effect-8" type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
            {errors.password && touched.password && <span className="error">{errors.password}</span>}

            <button className="btn" disabled={!dirty || isSubmitting || !isValid} type="submit">
              Login
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

export default styled(Form)`
  max-width: 500px;
  height: calc(80vh - 5.5rem);
  margin: 0 auto;

  span.orange {
    color: $orange-color;
  }

  input#email,
  input#pass {
    font-size: 1rem;
    font-family: "Lato";
    color: #333;
    width: 100%;
    border: 2px solid #aaa;
    border-radius: 4px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    transition: 0.3s;
    letter-spacing: 1px;
  }

  input#email:focus,
  input#pass:focus {
    border-color: #818181;
  }

  span.error {
    display: block;
    margin: 0 0 0.8rem 0;
    color: $danger-color;
  }

  button.btn {
    background: $orange-color;
    color: $white-color;
    margin-top: 0.5rem;
    padding: 12px 24px;
    border: 0 none;
    border-radius: 0.2rem;
    font-weight: 600;
    line-height: 1.3;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: 2px 0px 10px #e4e4e4;
    cursor: pointer;
    transition: all 150ms linear;
    text-decoration: none;
  }

  button.btn:hover {
    transition: all 150ms linear;
    opacity: 0.85;
  }

  button.btn:active {
    transition: all 150ms linear;
    opacity: 0.75;
  }

  button.btn:focus {
    outline: 1px dotted #959595;
    outline-offset: -4px;
  }
`;
