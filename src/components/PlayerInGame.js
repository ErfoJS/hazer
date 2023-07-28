import Button from "./UI/Button";

const PlayerInGame = (props) => {
  const team2 = props.players.filter((player) => player.team === "teamGreen");
  const team1 = props.players.filter((player) => player.team === "teamRed");
  let regroupedPlayers = [];

  for (let i = 0; i <= props.players.length; i++) {
    regroupedPlayers.push(team2[i]);
    regroupedPlayers.push(team1[i]);
  }
  regroupedPlayers = regroupedPlayers.filter((element) => element);
  // console.log(regroupedPlayers);

  return (
    <>
      <h2>Player: {regroupedPlayers[props.playerInGame].userName}</h2>
      <Button onClick={props.nextStep}>Start</Button>
    </>
  );
};

export default PlayerInGame;
