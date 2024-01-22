import Button from "./UI/Button";

const Score = (props) => {
  return (
    <div>
      <h3>Team red: {props.score.teamRed}</h3>
      <h3>Team green: {props.score.teamGreen}</h3>
      <Button onClick={props.nextStageHandler}>next round</Button>
    </div>
  );
};
export default Score;
