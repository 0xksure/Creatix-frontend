import React, { useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field, ErrorMessage, useFormik } from "formik";
import { Link, NavLink } from "react-router-dom";
import AlertBox from "../Alerts";
import { loginUser } from "../../Actions/Auth";
import { MainButton } from "../Buttons";

function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}

function LoginModal() {
  const dispatch = useDispatch();
  const authErrorMessage = useSelector(state => state.Auth.errorMessage);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      console.log(values);
      dispatch(loginUser(values.email, values.password));
    },
    validate: values => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    }
  });

  useLockBodyScroll();
  return (
    <div className="grid-x login-modal">
      <div className="cell small-4 small-offset-5 login-box">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email address </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <AlertBox alertType="error">{formik.errors.email}</AlertBox>
          )}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
          />
          <div className="grid-x">
            <div className="cell small-4">
              <MainButton buttonType="submit" size="small">
                Login
              </MainButton>
            </div>
            <div className="cell small-4">
              <MainButton size="small">
                <NavLink
                  activeClassName="nav-link_active"
                  className="nav-link"
                  exact
                  to="/signup"
                >
                  Signup
                </NavLink>
              </MainButton>
            </div>
          </div>

          {formik.status && formik.status.msg && (
            <AlertBox alertType="error">{formik.status.msg}</AlertBox>
          )}
          {authErrorMessage && (
            <AlertBox alertType="error">{authErrorMessage}</AlertBox>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
