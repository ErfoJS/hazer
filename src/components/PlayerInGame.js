import Button from "./UI/Button";

const PlayerInGame = (props) => {
  const team2 = props.players.filter((player) => player.team === "green");
  const team1 = props.players.filter((player) => player.team === "red");
  let regroupedPlayers = [];

  for (let i = 0; i <= props.players.length; i++) {
    regroupedPlayers.push(team2[i]);
    regroupedPlayers.push(team1[i]);
  }
  regroupedPlayers = regroupedPlayers.filter((element) => element);

  return (
    <>
      <h2>Player: {regroupedPlayers[props.playerInGame].userName}</h2>
      <Button onClick={props.nextStep}>go!</Button>
    </>
  );
};

export default PlayerInGame;
