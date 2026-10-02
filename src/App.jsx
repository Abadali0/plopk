import { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (!formData.email || !formData.password) {
        alert("Please fill in all fields");
        return;
      }

      alert("Login successful!");
    } else {
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        alert("Please fill in all fields");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      alert("Account created successfully!");
    }
  };

  return (
    <div className="page">

      <div className="auth-container">

        {/* Left Side */}
        <div className="welcome-section">
          <div className="logo">A</div>

          <h1>Welcome!</h1>

          <p>
            {isLogin
              ? "Login to continue your journey with us."
              : "Create your account and start your journey with us."}
          </p>

          <div className="welcome-decoration">
            <span>✦</span>
            <span>✧</span>
            <span>✦</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="form-section">

          {/* Login / Signup Switch */}
          <div className="tabs">
            <button
              className={isLogin ? "tab active" : "tab"}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>

            <button
              className={!isLogin ? "tab active" : "tab"}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          <div className="form-heading">
            <h2>
              {isLogin ? "Welcome Back!" : "Create Account"}
            </h2>

            <p>
              {isLogin
                ? "Please enter your details to login."
                : "Fill in the information to create your account."}
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Name only for Signup */}
            {!isLogin && (
              <div className="input-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* Email */}
            <div className="input-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Password</label>

              <div className="password-wrapper">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="show-btn"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            {/* Confirm Password only for Signup */}
            {!isLogin && (
              <div className="input-group">
                <label>Confirm Password</label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* Remember me only Login */}
            {isLogin && (
              <div className="remember-row">

                <label>
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="#forgot">
                  Forgot Password?
                </a>

              </div>
            )}

            <button className="submit-btn" type="submit">
              {isLogin ? "Login" : "Create Account"}
            </button>

          </form>

          <div className="bottom-text">

            {isLogin ? (
              <>
                Don't have an account?
                <button onClick={() => setIsLogin(false)}>
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?
                <button onClick={() => setIsLogin(true)}>
                  Login
                </button>
              </>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;