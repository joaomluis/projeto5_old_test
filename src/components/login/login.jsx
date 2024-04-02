import './login.css';

function Login() {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-transparent">
      <div className=" form_container p-5 rounded bg-white">
        <form action="">
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
         
          <div className="d-grid">
            <button className="btn btn-primary">Sign in</button>
          </div>
          <p className="text-right">
            Forgot <a href="">Password?</a> <a href="/register">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
