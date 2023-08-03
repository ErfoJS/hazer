import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes["main-text"]}>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Header;
