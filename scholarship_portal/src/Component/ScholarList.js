import React, { useEffect, useState } from "react";
import { PencilFill, PersonPlusFill, TrashFill ,FastForwardFill} from "react-bootstrap-icons";
import { useNavigate ,Link} from "react-router-dom";

function ScholarList() {
  const [schData, setSchData] = useState(null);
  const navigate = useNavigate();


  const LoadUpdate=(id)=>
  {
    navigate("/scholar/update/" + id);
  }

  const LoadDelete=(id)=>
  {
    if (window.confirm('Do you really want to Remove the Record ? ')) {
      fetch("http://localhost:8000/scholar/" + id, {
          method: "DELETE"
      }).then((res) => {
          alert('Removed successfully.');
          window.location.reload();
      }).catch((err) => {
          console.log(err.message);
          alert("Error !!!");
      })
    }
  }

  useEffect(() => {
    fetch("http://localhost:8000/scholar").then((res)=>{
        return res.json();
    }).then((resp)=>{
        //console.log(resp);
        setSchData(resp);
    }).catch((err)=>{
        console.log(err.message);
        alert("Some Error Occured.Please Check Console for the Error !!!");
    })
  },[]);

  return (
    
    <div className="container mt-4" >
      <div className="card">
        <div className="card-title">
          <h1>Scholar Lists</h1>
        </div>

        <div className="card-body">
          <div className="divbtn">
            <Link to="/scholar/create/" className="btn btn-success other"><PersonPlusFill/> Add New Scholar </Link>
            <Link to="../process/" className="btn btn-primary" style={{float:"right", fontWeight:700}}>Process Scholarship   <FastForwardFill/> </Link>
          </div>
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
                <td>Actions </td>
              </tr>
            </thead>

            <tbody>
              {schData &&
                schData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.course}</td>
                    <td>{item.branch}</td>
                    <td>{item.income}</td>
                    <td>{item.aadhaar}</td>
                    <td>
                      <a onClick={() => { LoadUpdate(item.id);}} className="btn btn-warning">
                        Update  <PencilFill/>
                      </a>
                      <a onClick={() => {LoadDelete(item.id);}} className="btn btn-danger">
                        Delete   <TrashFill/>
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default ScholarList;
