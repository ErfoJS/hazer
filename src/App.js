import { useState } from "react";
import PlayersSetup from "./components/Stages/PlayersSetup";
import Header from "./components/Header";
import TeamAssignment from "./components/Stages/TeamAssignment";
import Instructions from "./components/Stages/Instructions";
import PlayStage from "./components/Stages/PlayStage";
import Score from "./components/Score";

function App() {
  const [playersData, setPlayersData] = useState([]);
  const [stage, setStage] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [score, setScore] = useState({ teamRed: 0, teamGreen: 0 });

  const playerDataFormHandler = (playerData) => {
    setPlayersData((prevData) => [...prevData, playerData]);
  };

  const nextStageHandler = () => {
    setStage((prevStage) => prevStage + 1);
  };

  const playersAssignmentUpdateHandler = (assignedPlayers) => {
    setPlayersData(assignedPlayers);
  };

  const scoreHandler = (actualPlayer) => {
    setScore(() =>
      actualPlayer % 2
        ? { teamGreen: score.teamGreen, teamRed: score.teamRed + 1 }
        : { teamGreen: score.teamGreen + 1, teamRed: score.teamRed }
    );
  };

  const charactersHandler = (playersData) => {
    const characters = [];
    playersData.forEach((element) => {
      characters.push(element.character1);
      characters.push(element.character2);
    });
    setCharacters(characters);
  };

  let content = (
    <PlayersSetup
      playerDataFormHandler={playerDataFormHandler}
      players={playersData}
      startGameHandler={nextStageHandler}
    />
  );

  if (stage === 1) {
    content = (
      <TeamAssignment
        playersData={playersData}
        nextStageHandler={nextStageHandler}
        updateAssignment={playersAssignmentUpdateHandler}
        updateCharacters={charactersHandler}
        playersAssignmentUpdateHandler={playersAssignmentUpdateHandler}
      />
    );
  }
  if (stage === 2) {
    content = <Instructions stage={stage} nextStage={nextStageHandler} />;
  }
  if (stage === 3) {
    content = (
      <PlayStage
        players={playersData}
        characters={characters}
        score={score}
        scoreHandler={scoreHandler}
        nextStageHandler={nextStageHandler}
        playersAssignmentUpdateHandler={playersAssignmentUpdateHandler}
      />
    );
  }
  if (stage === 4) {
    content = <Score score={score} nextStageHandler={nextStageHandler} />;
  }
  if (stage === 5) {
    content = <Instructions stage={stage} nextStage={nextStageHandler} />;
  }
  if (stage === 6) {
    content = (
      <PlayStage
        players={playersData}
        characters={characters}
        score={score}
        scoreHandler={scoreHandler}
        nextStageHandler={nextStageHandler}
      />
    );
  }
  if (stage === 7) {
    content = <Score score={score} nextStageHandler={nextStageHandler} />;
  }
  if (stage === 8) {
    content = <Instructions stage={stage} nextStage={nextStageHandler} />;
  }
  if (stage === 9) {
    content = (
      <PlayStage
        players={playersData}
        characters={characters}
        score={score}
        scoreHandler={scoreHandler}
        nextStageHandler={nextStageHandler}
      />
    );
  }
  if (stage === 10) {
    content = <Score score={score} nextStageHandler={nextStageHandler} />;
  }

  console.log(score);

  return (
    <div>
      <Header name="HAZER" />
      {content}
    </div>
  );
}

export default App;
