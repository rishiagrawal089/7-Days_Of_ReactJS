import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    <div>
      <div>
        {name.length < 5 ? alert("Name must be  5 character long") : null}
      </div>
      <div>
        {!email.includes("@") && !email.includes(".")
          ? alert("Email is not valid")
          : null}
      </div>
      <div>
        {password.length < 8
          ? alert("Password must be 8 character long")
          : null}
      </div>
    </div>;
  };

  return (
    <div>
      <h1 style={{color:"red"}}>Register Here  !!!</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </td>
          </tr>

          <tr>
            <td>Email:</td>
            <td>
              <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </td>
          </tr>

          <tr>
            <td>Password:</td>
            <td>
              <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <button>Submit</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Register;
