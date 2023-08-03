import PlayersList from "../PlayersList";
import PlayerDataForm from "../PlayerDataForm";
import Button from "../../components/UI/Button";
import classes from "./PlayersSetup.module.css";

const PlayersSetup = (props) => {
  return (
    <div className={classes.content}>
      <PlayerDataForm onPlayerFormSubmit={props.playerDataFormHandler} />
      <PlayersList playersData={props.players} />
      <Button onClick={props.startGameHandler}>Start Game</Button>
    </div>
  );
};
export default PlayersSetup;
