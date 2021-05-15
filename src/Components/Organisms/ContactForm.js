// @flow
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field, Form } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

//Local Imports
//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({
  input: {
    width: 400,
    marginBottom: 8,
  },
  submitbtndiv: {
    textAlign: "center",
  },
}));

type Props = {};

export const ContactForm = (props: Props): Node => {
  const classes = useStyles();

  const ContactFormValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Check your email")
      .required("Email is a required"),
    contactnum: Yup.number().min(10).required("Contact number is required"),
    subject: Yup.string().required("subject is required"),
    message: Yup.string().required("message is required"),
  });

  return (
    <React.Fragment>
      <Formik
        // Validate and show errors for the input.
        validationSchema={ContactFormValidation}
        initialValues={{
          name: "",
          email: "",
          contactnum: "",
          subject: "",
          message: "",
        }}
        // OnSubmit: Send to props to run API
        onSubmit={(values, { setSubmitting }) =>
          // props.contact(values, setSubmitting)
          console.log(values)
        }
        render={({ submitForm, isSubmitting, values }) => (
          <Form>
            <Field
              className={classes.input}
              name="name"
              type="text"
              label="Enter Name"
              component={TextField}
            />
            <br />
            <Field
              className={classes.input}
              type="email"
              label="Enter Email"
              name="email"
              component={TextField}
            />
            <br />

            <Field
              className={classes.input}
              name="contactnum"
              type="text"
              label="Enter Contact"
              component={TextField}
            />
            <br />
            <Field
              className={classes.input}
              name="subject"
              type="text"
              label="Enter Subject"
              component={TextField}
            />
            <br />
            <Field
              className={classes.input}
              name="message"
              type="text"
              label="Enter Message"
              component={TextField}
            />
            <br />

            {/* Show progress while callin the API */}
            <br />
            {isSubmitting && <LinearProgress />}
            <div className={classes.submitbtndiv}>
              <Button
                type="submit"
                fullWidth={false}
                variant="contained"
                color="primary"
                data-testid="submit-btn"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                submit
              </Button>
            </div>
          </Form>
        )}
      />
    </React.Fragment>
  );
};
