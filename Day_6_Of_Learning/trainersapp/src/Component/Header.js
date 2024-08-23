import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1> My Trainers App</h1>
      <br></br>
     <Link to="/">Home</Link> <span>  |  </span>
     <Link to="/trainers">Show Trainers</Link>
    </div>
  );
}
export default Header;
