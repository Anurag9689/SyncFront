import React from 'react';

function ResetPassword() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header text-center">
              Reset Password
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="password">New Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter new password" />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input type="password" className="form-control" id="confirm-password" placeholder="Confirm new password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
              </form>
              <div className="text-center mt-3">
                <a href="/index">Back to Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
