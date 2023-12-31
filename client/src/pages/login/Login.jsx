import React from 'react'
import './Login.css'
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from '../../state';
import { useNavigate } from 'react-router-dom';

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state);

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      // navigate("/home");
      console.log(token)
    }
  }

  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log('submitting form');
    await login(values, onSubmitProps);
  };
  return (
    <div className='auth-wrapper'>
            <div className='auth-form'>
                <div className='auth-navigation'>
                    <div className='register-navigation' style={{ backgroundColor: "rgba(242, 62, 77, 0.57)", fontWeight: 300 }} onClick={() => navigate('/register')}>
                        REGISTER
                    </div>
                    <div className='login-navigation' style={{ backgroundColor: "#F23E4D", fontWeight: 700 }}>
                        LOG IN
                    </div>
                </div>
                <div className='foods-icon'>
                    <img  src='/assets/images/Food.png' alt="dumplings"/>
                </div>
                <Formik
                  onSubmit={handleFormSubmit}
                  initialValues={initialValuesLogin}
                  validationSchema={loginSchema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className='login-form'>
                        <div className='google-login-btn'>Log in with Google account</div>
                        <div className='or'>
                          <div className='line'></div>
                          <div className='quote'>Or enter your account</div>
                          <div className='line'></div>
                        </div>
                        <div className='field'>
                          <div className='label'>
                            Email
                          </div>
                          <input
                            type='text'
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            className={errors.email && touched.email ? "input-error" : ""}
                          />
                          {errors.email && touched.email && <p className='error-login'>{errors.email}</p>}
                        </div>
                        <div className='field'>
                          <div className='label'>
                            Password
                          </div>
                          <input 
                            type='password'
                            label="Password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            className={errors.password && touched.password ? "input-error" : ""}
                          />
                          {errors.password && touched.password && <p className='error-login'>{errors.password}</p>}
                        </div>
                        <div className='space-between'>
                          <div className='remember'>
                            <input type="checkbox"></input>
                            <span>Remember me</span>
                          </div>

                          <a href='/'>Forgot password?</a>
                        </div>
                        <button type='submit' className='login-btn'>
                          LOG IN
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
            </div>
        </div>
    
  )
}

