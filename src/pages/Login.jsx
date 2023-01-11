import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import PasswordShowHide from "../components/PasswordShowHide";
import { Link } from "react-router-dom";

const Login = () => {
  //   const validateEmail = (value) => {
  //     let error;
  //     if (!value) {
  //       error = "Required";
  //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
  //       error = "Wrong email format!";
  //     }
  //     return error;
  //   };

  const checkPasword = () => {
    var value = document.getElementById("password").value;
  };
  return (
    <Wrapper>
      <div className="box">
        <span className="head">
          <h1>Log in</h1>
          <p>
            If you have no account, <Link to="/sign-up">Sign up</Link>
          </p>
        </span>

        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
            dirty,
          }) => (
            <Form>
              <div className="em-box">
                <div>
                  <label htmlFor="email">Email Address</label>
                </div>
                <div>
                  <Field
                    name="email"
                    placeholder="Type here"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <div className="err">{errors.email}</div>
                  )}
                </div>
              </div>
              <div className="ps-box">
                <div>
                  <label htmlFor="password">password</label>
                </div>
                <div>
                  <Field
                    placeholder="Type your password here"
                    name="password"
                    type="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    component={PasswordShowHide}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  //   disabled={}
                  //   disabled={isSubmitting}
                  disabled={!(isValid && dirty)}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;

  .box {
    width: 720px;
    height: 373px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 32px 40px;
    gap: 40px;

    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    form {
      width: 100%;
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      .ps-box {
        margin-top: 16px;
        input {
          border-right: none;
          border-top-right-radius: unset;
          border-bottom-right-radius: unset;
        }
      }
      .err {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */

        color: #f41e10;
      }
      button {
        width: 100%;
        height: 36px;
        background: #555658;
        border-radius: 4px;
        border: none;
        outline: none;
        margin-top: 40px;

        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */

        color: #ffffff;
      }
      button:disabled,
      button[disabled] {
        background: #b7bcc4;
      }
      #password {
      }
    }
    input {
      width: calc(100% - 26px);
      background: #ffffff;
      border: 1px solid #e1e1e1;
      padding: 10px 12px;
      border-radius: 4px;
    }
    input:focus {
      background: #fafafa;
      color: #000000;
    }

    label {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 4px;
      color: #1a1a1a;
    }
    .head {
      h1 {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-align: center;

        color: #000000;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */

        text-align: center;

        color: #777777;
      }
    }

    input::placeholder {
      color: #cacaca;
      opacity: 1;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }

    input:-ms-input-placeholder {
      color: #cacaca;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }

    input::-ms-input-placeholder {
      color: #cacaca;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
