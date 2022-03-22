import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
export default function Create() {
  const [userData, setUserData] = useState([]);
  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     emailid: "",
  //     mobileNumber: "",
  //     age: 0,
  //   },
  //   validate: (values) => {
  //     const errors = {};
  //     if (!values.username) {
  //       errors.username = "please enter username";
  //     }
  //     if (values.mobileNumber.length !== 10) {
  //       errors.mobileNumber = "please enter valid mobile number";
  //     }
  //     return errors;
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //     if (values.id) {
  //       fetch(
  //         "https://62398c5863fdd477ac146911.mockapi.io/api/users/users/" +
  //           values.id,
  //         {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(values),
  //         }
  //       )
  //         .then((data) => data.json())
  //         .then((users) => getUserDetails());
  //     } else {
  //       fetch("https://62398c5863fdd477ac146911.mockapi.io/api/users/users", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(values),
  //       })
  //         .then((data) => data.json())
  //         .then((users) => getUserDetails());
  //     }
  //   },
  // });

  const getUserDetails = () => {
    fetch("https://62398c5863fdd477ac146911.mockapi.io/api/users/users")
      .then((data) => data.json())
      .then((users) => setUserData(users));
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleDelete = (id) => {
    fetch("https://62398c5863fdd477ac146911.mockapi.io/api/users/users/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((users) => getUserDetails());
  };

  const handleEdit = (id) => {
    fetch("https://62398c5863fdd477ac146911.mockapi.io/api/users/users/" + id)
      .then((data) => data.json())
      .then((users) => setValues(users));
  };
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          emailid: "",
          mobileNumber: "",
          age: 0,
        }}
        validate={(values) => {}}
        onSubmit={(values) => {}}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username ? <div>{errors.username}</div> : null}
            <label htmlFor="emailid">email Id</label>
            <input
              id="emailid"
              name="emailid"
              type="email"
              value={values.emailid}
              onChange={handleChange}
            />

            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              id="mobileNumber"
              name="mobileNumber"
              type="tel"
              value={values.mobileNumber}
              onChange={handleChange}
            />
            {errors.mobileNumber ? (
              <div className="error">{errors.mobileNumber}</div>
            ) : null}
            <label htmlFor="age">age</label>
            <input
              id="age"
              name="age"
              type="number"
              value={values.age}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>;
        }}
      </Formik>

      <table>
        <thead>
          <tr>
            <th>S NO</th>
            <th>Username</th>
            <th>emailid</th>
            <th>MObile Number</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.emailid}</td>
                  <td>{user.mobileNumber}</td>
                  <td>{user.age}</td>
                  <td>
                    <button onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                    <button onClick={() => handleEdit(user.id)}>Edit</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
