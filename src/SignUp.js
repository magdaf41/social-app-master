import React from "react";
import './Login.css'

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';

export default function SignUp() {
    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .trim('The contact name cannot include leading and trailing spaces')
                .min(4, "Mininum 4 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .trim('The contact name cannot include leading and trailing spaces')
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .trim('The contact name cannot include leading and trailing spaces')
                .min(6, "Minimum 6 characters")
                .matches(
                    /^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Number and One Special Case Character"
                )
                .required("Required!"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Password's not match")
                .required("Required!")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

axios.post(
        'http://akademia108.pl/api/social-app/user/signup',
        JSON.stringify(),
        { 'headers': headers })
    .then((req) => {

        // your code :)

        console.log(req.data);
    }).catch((error) => {
        console.error(error);
    })
        }
    });

    return (
        <div className="SignupContent">
            <h1>Sign Up</h1>

            <form className="FormFields" onSubmit={formik.handleSubmit}>
                <div className="FormField">
                    <label className="SignUpLabel">User name</label>
                    <input className="SignUpInput"
                        type="text"
                        name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.userName && formik.touched.userName && (
                        <p>{formik.errors.userName}</p>
                    )}
                </div>
                <div className="FormField">
                    <label className="SignUpLabel">Email</label>
                    <input className="SignUpInput"
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p>{formik.errors.email}</p>
                    )}
                </div>
                <div className="FormField">
                    <label className="SignUpLabel">Password</label>
                    <input className="SignUpInput"
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password && formik.touched.password && (
                        <p>{formik.errors.password}</p>
                    )}
                </div>
                <div className="FormField">
                    <label className="SignUpLabel">Confirm Password</label>
                    <input className="SignUpInput"
                        type="password"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                        <p>{formik.errors.confirmPassword}</p>
                    )}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
