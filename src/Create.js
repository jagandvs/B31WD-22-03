import React from "react";
import { useFormik } from "formik";
export default function Create() {
  const formik = useFormik({
    initialValues: {
      username: "",
      emailid: "",
      mobileNumber: "",
      age: 0,
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "please enter username";
      }
      if (values.mobileNumber.length !== 10) {
        errors.mobileNumber = "please enter valid mobile number";
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">username</label>
      <input
        id="username"
        name="username"
        type="text"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      <label htmlFor="emailid">email Id</label>
      <input
        id="emailid"
        name="emailid"
        type="email"
        value={formik.values.emailid}
        onChange={formik.handleChange}
      />

      <label htmlFor="mobileNumber">Mobile Number</label>
      <input
        id="mobileNumber"
        name="mobileNumber"
        type="tel"
        value={formik.values.mobileNumber}
        onChange={formik.handleChange}
      />
      {formik.errors.mobileNumber ? (
        <div>{formik.errors.mobileNumber}</div>
      ) : null}
      <label htmlFor="age">age</label>
      <input
        id="age"
        name="age"
        type="number"
        value={formik.values.age}
        onChange={formik.handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
