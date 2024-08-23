import { Link } from "react-router-dom";

function TrainersList(props)
{
  const trainer=props.trainers;
  return(
    <div>
      <h2>Trainers List</h2>
      <ul>
        {trainer.map((e)=>{
          return(
          <li key={e.trainerId}>
            <Link to={`/trainers/${e.trainerId}`}>{e.name}</Link>
          </li>);
        })}
      </ul>
    </div>
  );
}
export default TrainersList;