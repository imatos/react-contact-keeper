import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/auth/AuthContext';
import AlertContext from '../context/alert/alertContext';

const Login = (props) => {
  const { login, clearError, error, isAuthenticated } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);

  const [user, setUser] = useState({
    email: '',
    password: '',
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

    if (user.email === '' || user.password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({ email: user.email, password: user.password });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Accout <span className="text-primary">Login</span>
      </h1>

      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={onChangeHandler}
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
