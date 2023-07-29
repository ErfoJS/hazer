import { useState } from "react";
import TimeUp from "./TimeUp";
import Button from "./UI/Button";

const Turn = (props) => {
  const [timer, setTimer] = useState(4);

  const playersTime = setTimeout(() => {
    setTimer((prevTimer) =>
      prevTimer > 0 ? prevTimer - 1 : clearTimeout(playersTime)
    );
  }, 1000);

  let buttonChange =
    props.charToPlay === props.characters.length ? (
      <Button onClick={props.nextStageHandler}>End round</Button>
    ) : (
      <Button onClick={props.charToPlayHandler}>Next</Button>
    );

  return (
    <>
      {timer}
      <div>{props.characters[props.charToPlay]}</div>
      {buttonChange}
      {!timer && (
        <TimeUp
          playerInGameHandler={props.playerInGameHandler}
          stageFlowHandler={props.stageFlowHandler}
          playerInGame={props.playerInGame}
          nextStage={props.nextStageHandler}
          players={props.players}
          characters={props.characters}
        />
      )}
    </>
  );
};
export default Turn;
