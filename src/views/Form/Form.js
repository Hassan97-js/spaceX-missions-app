import { Formik } from "formik";

import { useHistory } from "react-router-dom";

import "./Form.css";

function Form() {
  const history = useHistory();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={_values => {
        history.push("/launches");
        /*  setTimeout(() => { */
        /* setSubmitting(false); isSubmitting set back to false after handleSubmit get executed! */
        /*   }, 1000); */
      }}
      validate={values => {
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
          <form onSubmit={handleSubmit}>
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

export default Form;
