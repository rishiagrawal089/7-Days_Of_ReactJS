import React, { useState } from "react";
import { ArrowLeftCircleFill, Save2Fill } from "react-bootstrap-icons";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function ScholarCreate() {
  const [id, idchange] = useState();
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [course, coursechange] = useState("");
  const [branch, branchchange] = useState("");
  const [income, incomechange] = useState("");
  const [aadhaar, aadhaarchange] = useState("");
  const status = "Pending";
  const paidamount = 0;
  const [validation, valchange] = useState();

  const navigate = useNavigate();

  const validatedForm = () => {
    if (
      name.length < 5 ||
      !email.includes("@") ||
      phone < 1000000000 ||
      income < 30000 ||
      (aadhaar < 100000000000 && aadhaar > 99999999999)
    ) {
      valchange(true);
    } else {
      valchange(false);
    }

    return { validation };
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(validatedForm());

    if (validatedForm()) {
      if (validation === false) {
        const scholarData = {
          name,
          email,
          phone,
          course,
          branch,
          income,
          aadhaar,
          status,
          paidamount,
        };

        fetch("http://localhost:8000/scholar", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(scholarData),
        })
          .then((res) => {
            alert("Saved Successfully.");
            navigate("/scholar");
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    } else {
      alert("Fill the Details Correctly and Re-Submit the Form");
    }
  };

  return (
    <div>
      <div className="row" style={{ textAlign: "left", marginTop: 30 }}>
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title text-center">
                <h2>Scholar Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {(name.length === 0 || name.length < 5) && validation && (
                        <span className="text-danger">
                          Enter atleast 5 character name
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                        required
                      ></input>
                      {!email.includes("@") &&
                        validation &&
                        !email.includes(".") && (
                          <span className="text-danger">
                            Enter valid Email Address{" "}
                          </span>
                        )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="number"
                        value={phone}
                        onChange={(e) => phonechange(e.target.value)}
                        className="form-control"
                        required
                      ></input>
                      {phone < 1000000000 && validation && (
                        <span className="text-danger">
                          Enter Correct Phone Number{" "}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Course</label>
                      <select
                        onChange={(e) => coursechange(e.target.value)}
                        className="form-control"
                        required
                      >
                        <option value="">Select Course</option>
                        <option value="BTech">
                          Bachelor of Technology (B.Tech)
                        </option>
                        <option value="MTech">
                          Master of Technology (B.Tech)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Branch</label>
                      <select
                        onChange={(e) => branchchange(e.target.value)}
                        className="form-control"
                        required
                      >
                        <option value="">Select Branch</option>
                        <option value="Computer Science">
                          Computer Science (C.S)
                        </option>
                        <option value="Information Technology">
                          Information Technology (I.T)
                        </option>
                        <option value="Electronic and Communication">
                          Electronic and Communication (E.C)
                        </option>
                        <option value="Electrical and Electronic">
                          Electrical and Electronic (E.X)
                        </option>
                        <option value="Mechanical Engineering">
                          Mechanical Engineering (M.E)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Family Annual Income</label>
                      <input
                        type="number"
                        value={income}
                        onChange={(e) => incomechange(e.target.value)}
                        className="form-control"
                        required
                      ></input>
                      {income < 30000 && validation && (
                        <span className="text-danger">
                          Income Should be Greater Than 300000
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Aadhaar Number </label>
                      <span className="text-success">
                        <b> (Must be Linked to your Bank Account)</b>
                      </span>
                      <input
                        type="number"
                        value={aadhaar}
                        onChange={(e) => aadhaarchange(e.target.value)}
                        className="form-control"
                        required
                      ></input>
                      {aadhaar < 100000000000 && validation && (
                        <span className="text-danger">
                          Enter valid Aadhaar Address{" "}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group" style={{ marginTop: 10 }}>
                      <button className="btn btn-success" type="submit">
                        <Save2Fill/>     Save
                      </button>
                      <Link to="/scholar" className="btn btn-danger">
                      <ArrowLeftCircleFill/>   Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ScholarCreate;