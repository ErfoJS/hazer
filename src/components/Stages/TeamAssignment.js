import { useEffect } from "react";
import PlayersList from "../PlayersList";
import Button from "../UI/Button";

const randomizeTeams = (players) => {
  // console.log(players);
  const teamSpread = Math.round(players.length / 2);
  const randomizedGroup = players.toSorted(() => Math.random() - 0.5);
  const team1 = randomizedGroup.splice(teamSpread, teamSpread);
  const team2 = randomizedGroup;

  return [team1, team2];
};

const TeamAssignment = (props) => {
  const [team1, team2] = randomizeTeams(props.playersData);

  team1.forEach((element) => {
    element.team = "teamRed";
  });

  team2.forEach((element) => {
    element.team = "teamGreen";
  });

  useEffect(() => {
    props.updateCharacters([...team1, ...team2]);
    // props.updateAssignment(...team1, team2);
    // console.log("useeffect ts");
  }, []);

  return (
    <>
      <h1>Team red</h1>
      <PlayersList playersData={team1}></PlayersList>
      <h1>Team blue</h1>
      <PlayersList playersData={team2}></PlayersList>
      <Button onClick={props.nextStageHandler}>Next Stage</Button>
    </>
  );
};
export default TeamAssignment;
