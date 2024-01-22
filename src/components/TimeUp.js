import Button from "./UI/Button";
import classes from "./TimeUp.module.css";

const TimeUp = (props) => {
  const handler = () => {
    if (props.playerInGame === props.players.length - 1) {
      props.playerInGameHandler(0);
    } else {
      props.playerInGameHandler();
    }
    props.stageFlowHandler();
  };

  return (
    <>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <h1>Time's up!</h1>
        {props.charToPlay === props.characters.length ? (
          <Button onClick={props.nextStage}>end round</Button>
        ) : (
          <Button onClick={handler}>next player</Button>
        )}
      </div>
    </>
  );
};

export default TimeUp;
