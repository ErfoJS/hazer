import Button from "./UI/Button";

const TimeUp = (props) => {
  const handler = () => {
    props.playerInGameHandler();
    props.stageFlowHandler();
  };

  return (
    <>
      <p>Time's up!</p>
      {props.playerInGame === props.players.length - 1 ? (
        <Button onClick={props.nextStage}>End Round</Button>
      ) : (
        <Button onClick={handler}>next</Button>
      )}
    </>
  );
};

export default TimeUp;
