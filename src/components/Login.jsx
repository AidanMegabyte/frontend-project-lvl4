import React from 'react';
import { Formik } from 'formik';

const Login = () => {
  return (
    <div className='row h-100 align-items-center justify-content-center'>
      <div className='card col-4'>
        <div className='card-body'>
          <Formik
            initialValues={{ username: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.username) {
                errors.username = 'Required';
              }
              if (!values.password) {
                errors.password = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              // TODO
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className='form-floating form-group'>
                  <input
                    className='form-control'
                    type="text"
                    name="username"
                    required
                    placeholder='Ваш ник'
                    onChange={handleChange}
                    value={values.username}
                  />
                  {errors.username && touched.username && errors.username}
                </div>
                <div className='form-floating form-group'>
                  <input
                    className='form-control'
                    type="password"
                    name="password"
                    required
                    placeholder='Пароль'
                    onChange={handleChange}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                </div>
                <button
                  className='w-100 btn btn-outline-primary'
                  type="submit"
                  disabled={isSubmitting}
                >
                  Войти
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;