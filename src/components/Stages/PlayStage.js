import { useState } from "react";
import PlayerInGame from "../PlayerInGame";
import Turn from "../Turn";

const PlayStage = (props) => {
  const [stageFlow, setStageFlow] = useState(0);
  const [playerInGame, setPlayerInGame] = useState(0);
  const [charToPlay, setCharToPlay] = useState(0);

  const charToPlayHandler = () => {
    setCharToPlay((prevChar) => prevChar + 1);
    props.scoreHandler(playerInGame);
  };

  const playerInGameHandler = () => {
    setPlayerInGame((piervousPlayer) => piervousPlayer + 1);
  };

  const stageFlowHandler = () => {
    setStageFlow((piervousStageFlow) => piervousStageFlow + 1);
  };
  let content;
  if (stageFlow % 2) {
    content = (
      <Turn
        characters={props.characters}
        playerInGameHandler={playerInGameHandler}
        stageFlowHandler={stageFlowHandler}
        charToPlayHandler={charToPlayHandler}
        charToPlay={charToPlay}
        scoreHandler={props.scoreHandler}
        nextStageHandler={props.nextStageHandler}
        players={props.players}
        playerInGame={playerInGame}
      ></Turn>
    );
  } else {
    content = (
      <PlayerInGame
        nextStep={stageFlowHandler}
        players={props.players}
        stageFlow={stageFlow}
        playerInGame={playerInGame}
      />
    );
  }
  return <>{content}</>;
};
export default PlayStage;
