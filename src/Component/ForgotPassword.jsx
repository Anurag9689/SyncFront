import React from 'react';

function ForgotPassword() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header text-center">
              Forgot Password
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Password Reset Link</button>
              </form>
              <div className="text-center mt-3">
                <a href="/login">Back to Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
