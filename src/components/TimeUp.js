import Button from "./UI/Button";
import classes from "./TimeUp.module.css";

const TimeUp = (props) => {
  const handler = () => {
    props.playerInGameHandler();
    props.stageFlowHandler();
  };

  return (
    <>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <h1>Time's up!</h1>
        {props.playerInGame === props.players.length - 1 ? (
          <Button onClick={props.nextStage}>End Round</Button>
        ) : (
          <Button onClick={handler}>next</Button>
        )}
      </div>
    </>
  );
};

export default TimeUp;
