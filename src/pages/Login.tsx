import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import TextInputGroup from '../components/layout/TextInputGroup';

import brand from '../assets/brand.png';
import app from '../assets/app-name.png';
import bg from '../assets/bg.jpg';

import { useFirebase } from 'react-redux-firebase';

const emptyState = {
  email: '',
  password: '',
  errors: { email: '', password: '' }
};

const Login = (): JSX.Element => {
  const [state, setState] = useState(emptyState);
  const { email, password, errors } = state;

  const history = useHistory();

  const firebase = useFirebase();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state.email === '') {
      setState({
        ...state,
        errors: { ...emptyState.errors, email: '*Email is required.' }
      });
      return;
    }

    if (state.password === '') {
      setState({
        ...state,
        errors: { ...emptyState.errors, password: '*Password is required.' }
      });
      return;
    }

    try {
      (async () => {
        await firebase.login({
          email,
          password
        });

        setState(emptyState);
        history.push('/');
      })();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex flex-wrap sm:flex-no-wrap h-screen">
      <form className="form h-screen order-2 sm:order-1" onSubmit={onSubmit}>
        <img
          src={brand}
          alt="Contact Manager Brand"
          className="mx-auto mb-10"
        />
        <fieldset>
          <TextInputGroup
            label="Email"
            name="email"
            value={email}
            placeholder="Enter email..."
            onChange={onChange}
            error={errors.email}
          />
          <TextInputGroup
            label="Password"
            name="password"
            value={password}
            placeholder="Enter password..."
            type="password"
            onChange={onChange}
            error={errors.password}
          />
          <button className="btn btn-blue">LOG IN</button>
        </fieldset>
      </form>
      <div
        className="layout-section h-screen order-1 sm:order-2 flex-1"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="title">
          Welcome to <img className="inline-block" src={app} alt="Contapp" />
        </h1>
        <h2 className="subtitle">Log in to access your account</h2>
      </div>
    </main>
  );
};

export default Login;
