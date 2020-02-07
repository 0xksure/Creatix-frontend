import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Redirect } from "react-router";
import { MainButton } from "./Buttons";
import { resetPassword } from "../Actions/Auth";
import { NavLink } from "react-router-dom";
import { AlertBox } from "./Alerts"
import Logo from "./Icons/Logo"


function ForgotPassword() {
    const dispatch = useDispatch();

    return (
        <div className="horizontal-center margin-top-l">
            <div className="grid-x content-card padding-horizontal-l horizontal-left">
                <div className="cell horizontal-center padding-vertical-m">
                    <Logo className="svg-logo icon-m " />
                </div>
                <div className="cell horizontal-center small-12">
                    <h3>
                        Reset password
            </h3>
                    <p>
                        Enter you email to reset your password.
            </p>
                </div>
                <div className="cell login-form">
                    <Formik
                        initialValues={{
                            email: "",
                            error: "",
                        }}
                        validate={values => {
                            const errors = {};
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting, setStatus, setErrors }) => {
                            dispatch(resetPassword(values.email))
                                .then(res => {
                                    setSubmitting(false);
                                    setErrors({ error: "If you have an account you should have received an email about resetting you password." })
                                    props.history.push(`/${res.ID}/login`);
                                })
                                .catch(err => {
                                    console.log("Catch!!! ");
                                    setSubmitting(false);
                                    setErrors({ error: "If you have an account you should have received an email about resetting you password." })
                                    setStatus({ error: "Not able to sign up" });
                                });
                            <Redirect to="/login" />;
                        }}
                    >
                        {({ values, isSubmitting, setFieldValue, errors }) => (
                            <Form>
                                <div className="grid-x grid-margin-x align-center ">
                                    <div className="cell small-12">
                                        <label htmlFor="email">Email</label>
                                        <Field type="email" className="input-field" name="email" />
                                        <ErrorMessage name="email" component="div" />
                                    </div>
                                    <div className="cell small-12">
                                        {
                                            errors.error &&
                                            <AlertBox alertType="success">{errors.error}</AlertBox>
                                        }
                                    </div>
                                    <div className="cell small-12 horizontal-center ">
                                        <MainButton
                                            id="submitLogin"
                                            buttonType="submit"
                                            round={'round'}
                                            size=""
                                            disabled={isSubmitting}
                                        >
                                            <p className="p margin-zero">Send reset instruction</p>
                                        </MainButton>
                                    </div>


                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;