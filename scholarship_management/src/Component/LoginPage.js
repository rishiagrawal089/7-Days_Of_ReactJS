import React, { useState } from "react";
import "../App.css";

import { useNavigate } from "react-router-dom";

function LoginPage() {
  const imagesrc =
    "https://static.vecteezy.com/system/resources/previews/003/316/526/non_2x/scholarship-concept-with-modern-isometric-or-3d-style-free-vector.jpg";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(email === "admin@gmail.com")) {
      alert("Enter Correct Email");
    } else if (!(password === "admin123")) {
      alert("Enter Correct Password");
    } else {
      navigate("/scholar");
    }
  };
  return (
    <section className="Form ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-5">
            <img src={imagesrc} alt="scholar-icon" className="img-fluid" />
          </div>
          <div className="col-lg-6 px-5 pt-5">
            <h1 className="py-5"> Admin Login</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="offset-lg-2 col-lg-8">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter Email-Address"
                    className="form-control my-3 p-2"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="offset-lg-2 col-lg-8">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="********"
                    className="form-control my-3 p-2"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="offset-lg-2 col-lg-8">
                  <button
                    type="submit"
                    className="form-control btn btn-outline-dark my-3 p-2"
                  >
                    <b>Login</b>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
