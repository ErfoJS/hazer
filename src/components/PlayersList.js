import Player from "./Player";
import classes from "./PlayersList.module.css";

const PlayersList = (props) => {
  return (
    <ul className={classes.list}>
      {props.playersData.map((player) => (
        <Player key={Math.random(100)} userName={player.userName} />
      ))}
    </ul>
  );
};
export default PlayersList;
