import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../context/alert/alertContext';
import AuthContext from '../context/auth/AuthContext';

const Register = (props) => {
  const { setAlert } = useContext(AlertContext);
  const { register, clearError, error, isAuthenticated } = useContext(
    AuthContext
  );

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error !== null) {
      setAlert(error, 'danger');
      clearError();
    }
  }, [error, props, isAuthenticated]);

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (user.password !== user.password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Accout <span className="text-primary">Register</span>
      </h1>

      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            required
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            required
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            required
            minLength="6"
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={user.password2}
            required
            onChange={onChangeHandler}
          />
        </div>

        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
