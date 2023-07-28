import PlayersList from "../PlayersList";
import PlayerDataForm from "../PlayerDataForm";
import Button from "../../components/UI/Button";

const PlayersSetup = (props) => {
  return (
    <>
      <PlayerDataForm onPlayerFormSubmit={props.playerDataFormHandler} />
      <PlayersList playersData={props.players} />
      <Button onClick={props.startGameHandler}>Start Game</Button>
    </>
  );
};
export default PlayersSetup;
