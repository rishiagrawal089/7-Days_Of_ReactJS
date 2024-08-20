import React, { useEffect, useState } from "react";
import { ArrowLeftCircleFill, BoxArrowRight } from "react-bootstrap-icons";
import { useNavigate, Link } from "react-router-dom";

function ProcessList() {
  const [schData, setSchData] = useState(null);
  const navigate = useNavigate();

  const LoadProcessed = (id) => {
    navigate("paymentDetails/" + id);
  };

  useEffect(() => {
    fetch("http://localhost:8000/scholar")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        //console.log(resp);
        setSchData(resp);
      })
      .catch((err) => {
        console.log(err.message);
        alert("Some Error Check Console for the Error !!!");
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
      <div className="col my-4">
      <Link className="btn btn-danger" to="/scholar" style={{float:'left'}}><ArrowLeftCircleFill/>  Back to Scholar List</Link>
      </div>
      </div>

      <div className="container mt-2">
        <div className="card border-dark">
          <div className="card-title text-warning">
            <h2>Payment Pending Lists</h2>
          </div>

          <div className="card-body">
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Phone</td>
                  <td>Course</td>
                  <td>Branch</td>
                  <td>Income</td>
                  <td>Aadhaar No.</td>
                  <td>Status</td>
                  <td>Actions </td>
                </tr>
              </thead>

              <tbody>
                {schData &&
                  schData.map((item) =>
                    item.status === "Pending" ? (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.course}</td>
                        <td>{item.branch}</td>
                        <td>{item.income}</td>
                        <td>{item.aadhaar}</td>
                        <td className="text-warning">
                          <b>{item.status}</b>
                        </td>
                        <td>
                          <a
                            onClick={() => {
                              LoadProcessed(item.id);
                            }}
                            className="btn btn-info"
                          >
                            Processed <BoxArrowRight />
                          </a>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------------------- */}
      <div className="container my-5">
        <div className="card border-dark">
          <div className="card-title text-success">
            <h2>Payment Success Lists</h2>
          </div>

          <div className="card-body">
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Phone</td>
                  <td>Course</td>
                  <td>Branch</td>
                  <td>Income</td>
                  <td>Aadhaar No.</td>
                  <td>Status</td>
                  <td>Paid Amount</td>
                </tr>
              </thead>

              <tbody>
                {schData &&
                  schData.map((item) =>
                    item.status === "Success" ? (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.course}</td>
                        <td>{item.branch}</td>
                        <td>{item.income}</td>
                        <td>{item.aadhaar}</td>
                        <td className="text-success">
                          <b>{item.status}</b>
                        </td>
                        <td>{item.paidamount}</td>
                      </tr>
                    ) : (
                      ""
                    )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ProcessList;
