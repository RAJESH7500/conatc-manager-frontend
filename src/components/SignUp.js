import axios from 'axios';
import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    info: '',
    agreement: false,
  });
  const [error, setError] = useState(null);

  const handleOnChange = (event) => {
    const { name } = event.target;
    let { value } = event.target;
    if (name === 'agreement') {
      value = event.target.checked;
    }
    setFormData({ ...formData, [name]: value });
    setError(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.agreement) {
      setError('Please accept the terms and condition');
      return;
    }
    await axios.post('http://localhost:8080/register', formData);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      info: '',
      checked: false,
    });
  };

  return (
    <section className="signup-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="my-card">
              {error && <div className="alert alert-danger">{error}</div>}
              <h1 className="text-center">Register Here!!</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="info">About</label>
                  <textarea
                    type="info"
                    name="info"
                    id="info"
                    className="form-control"
                    placeholder="Tell about yourself"
                    value={formData.info}
                    rows="5"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    name="agreement"
                    className="form-check-input"
                    id="agreement"
                    checked={formData.agreement}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="agreement">Accecpt terms & conditions</label>
                </div>
                <div className="container text-center">
                  <button type="submit" className="btn btn-primary ">
                    Submit
                  </button>
                  <button
                    onClick={resetForm}
                    type="reset"
                    className="btn btn-warning ml-2"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
