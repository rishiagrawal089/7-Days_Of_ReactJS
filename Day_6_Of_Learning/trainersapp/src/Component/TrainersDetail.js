import { useParams } from "react-router-dom";
import trainersMock from "./trainersmock";

function TrainersDetail() {
  const { Id } = useParams();
  console.log(Id);
  let trainer;
  for (let x of trainersMock) {
    if (x.trainerId === Id) trainer = x;
  }
  console.log(trainer);
  return (
    <>
      <h2>Trainers Details</h2>
      <h3>
        {trainer.name} ({trainer.technology})
      </h3>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>
      <ul>
        {trainer.skills.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </ul>
    </>
  );
}

export default TrainersDetail;
