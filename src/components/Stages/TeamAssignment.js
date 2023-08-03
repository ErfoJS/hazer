import { useEffect } from "react";
import PlayersList from "../PlayersList";
import Button from "../UI/Button";

const playersListConvert = (team, teamName) =>
  team.map((player) => ({ ...player, team: teamName }));

const randomizeTeams = (players) => {
  const teamSpread = Math.round(players.length / 2);
  const randomizedGroup = players.toSorted(() => Math.random() - 0.5);
  const team1 = playersListConvert(
    randomizedGroup.splice(teamSpread, teamSpread),
    "red"
  );
  const team2 = playersListConvert(randomizedGroup, "green");

  return [team1, team2];
};

const TeamAssignment = (props) => {
  const [team1, team2] = randomizeTeams(props.playersData);

  useEffect(() => {
    props.updateAssignment([...team1, ...team2]);
  }, []);

  return (
    <>
      <h1>Team green</h1>
      <PlayersList playersData={team1}></PlayersList>
      <h1>Team red</h1>
      <PlayersList playersData={team2}></PlayersList>
      <Button onClick={props.nextStageHandler}>Next Stage</Button>
    </>
  );
};
export default TeamAssignment;
