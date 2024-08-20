import React, { useEffect, useState } from "react";
import {ArrowLeftCircleFill,HandIndexFill,Wallet2,} from "react-bootstrap-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import ScholarService from "../service/ScholarService";

function PaymentDetails() {
  const { schId } = useParams();

  const navigate = useNavigate();

  const [id, idchange] = useState();
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [course, coursechange] = useState("");
  const [branch, branchchange] = useState("");
  const [income, incomechange] = useState("");
  const [aadhaar, aadhaarchange] = useState("");
  const [status, setStatus] = useState("");
  const [paidamount, setPaidAmount] = useState();

  const handleScholar = () => {
    const value = ScholarService.getScholarship(course, branch, income);
    // console.log(value);
    setPaidAmount(value);
  };

  const handlePay = (e) => {
    e.preventDefault();
    const status = "Success";

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
  

    fetch("http://localhost:8000/scholar/" + schId, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(scholarData),
    })
      .then((res) => {
        alert(
          "Payment Done Successfully . \n \n Redirecting to Process List ......."
        );
        navigate("/process");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8000/scholar/" + schId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        emailchange(resp.email);
        phonechange(resp.phone);
        coursechange(resp.course);
        branchchange(resp.branch);
        incomechange(resp.income);
        aadhaarchange(resp.aadhaar);
        setStatus(resp.status);
        setPaidAmount(resp.paidamount);
      });
  },[]);

  return (
    <div>
      <div className="container my-5">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-header">
            <h2 className="text-center">
              <b>Scholar Details </b>
            </h2>
          </div>
          <div className="card-body mx-3 mt-3">
            {
              <div>
                <h4>
                  Scholar Name :- <b>{name}</b>
                </h4>
                <h5> Course :- {course}</h5>
                <h5> Branch :- {branch}</h5>
                <h5> Family Annual Income :- {income}</h5>
                <h5>
                  {" "}
                  Aadhaar Number{" "}
                  <b className="text-success">
                    {" "}
                    (Linked to Student Bank Account ){" "}
                  </b>{" "}
                  :- {aadhaar}{" "}
                </h5>
                <div className="container my-4">
                  <span>
                    <label className="mx-4">
                      <b>
                        <h3>Scholar Amount</h3>
                      </b>
                    </label>
                    <input
                      className="mx-4 border-dark rounded"
                      value={paidamount || 0}
                      disabled="disabled"
                    />
                    <a
                      className="btn btn-outline-success"
                      onClick={handleScholar}
                    >
                      <b>
                        Click Here to Calculate The Scholarship{" "}
                        <HandIndexFill />{" "}
                      </b>
                    </a>
                  </span>
                </div>
              </div>
            }
          </div>
          <div className="card-footer text-center">
            <button
              type="button"
              className="btn btn-warning mx-3"
              disabled={paidamount === 0 ? true : false}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <b>
                {" "}
                <Wallet2 /> Pay Amount{" "}
              </b>
            </button>
            <Link className="btn btn-danger " to="/process">
              <ArrowLeftCircleFill /> Back to Process List
            </Link>
          </div>
        </div>
      </div>

      {/* -----------------------Modal Start Here  ------------ */}

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title" id="exampleModalLabel">
                Pay Amount
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4>
                Do You Really Want To Pay the <b>Rs.{paidamount} /-</b> Amount
                ???
              </h4>
              <h5>
                The Scholar Amount will be transferred to an Student{" "}
                <i>Bank Account Linked</i> to{" "}
              </h5>
              <h6>
                <u>
                  Aadharr Number -- <b>{aadhaar}</b>
                </u>
              </h6>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={handlePay}
                data-bs-dismiss="modal"
              >
                Confirm{" "}
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------ Modal End Here -------------------- */}
    </div>
  );
}

export default PaymentDetails;
