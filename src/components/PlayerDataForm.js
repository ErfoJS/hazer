import { useRef } from "react";

const PlayerDataForm = (props) => {
  const userNameRef = useRef("");
  const character1Ref = useRef("");
  const character2Ref = useRef("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const playerData = {
      userName: userNameRef.current.value,
      character1: character1Ref.current.value,
      character2: character2Ref.current.value,
    };
    props.onPlayerFormSubmit(playerData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input ref={userNameRef} type="text" id="username" />
      </div>
      <div>
        <label htmlFor="character1">Character 1</label>
        <input ref={character1Ref} type="text" id="character1" />
      </div>
      <div>
        <label htmlFor="character2">Character 2</label>
        <input ref={character2Ref} type="text" id="character2" />
      </div>
      <button>Add player</button>
    </form>
  );
};
export default PlayerDataForm;
