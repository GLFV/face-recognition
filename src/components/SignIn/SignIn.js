import React, { useState } from 'react';
import './SignIn.css';
import { api } from '../../api';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await api.post('/sign-in', {
        email,
        password,
      });
      const user = response.data;
      if (typeof user !== 'object') {
        throw new Error(user);
      } else {
        setAuthorized(true);
        navigate('/profile');
      }
    } catch (error) {
      alert('An error had occurred:\n' + error.message);
    }
  };

  return (
    <div>
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
        <main className="pa4 black-80">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Email</label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6">Password</label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={event => setPassword(event.target.value)}
              />
            </div>
          </fieldset>
          <div className="container center">
            <div className="">
              <NavLink
                className="b ph3 no-color-change pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer left no-underline"
                type="submit"
                to={authorized ? '/profile' : '/signIn'}
                onClick={handleSubmit}
              >
                Sign In
              </NavLink>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
}
