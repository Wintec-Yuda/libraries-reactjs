import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormicExample = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Initial values for the form
  const initialValues = {
    email: "",
    password: "",
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form submitted with values:", values);
    setSubmitting(false);
    resetForm(); // Reset the form fields
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h1>Login Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                }}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", fontSize: "0.875rem" }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.25rem",
                }}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red", fontSize: "0.875rem" }}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormicExample;
