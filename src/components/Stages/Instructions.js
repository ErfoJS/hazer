import Button from "../UI/Button";
const Instructions = (props) => {
  let content;

  if (props.stage === 2) {
    content = (
      <>
        <h1>
          Pokazuj, opisuj, tańcz... Nie ważne jak, po prostu przekaż drużynie co
          jest na ekranie. Pamiętaj nie wolno Ci użyć słów, występujących w
          haśle..
        </h1>
      </>
    );
  }

  if (props.stage === 5) {
    content = (
      <>
        <h1>
          Ręce, nogi, pufa. Pokaż mową ciała co trzeba, żeby Twoja drużyna
          rozszyfrowała hasło. Pamiętaj, nie możesz wydawać z siebie dźwięków.
        </h1>
      </>
    );
  }

  if (props.stage === 8) {
    content = (
      <>
        <h1>
          Kojarz, myśl, odpamiętaj. Użyj TYLKO jednego słowa do opisania hasła.
          Pamiętaj, nie możesz użyć słów występujących w haśle.
        </h1>
      </>
    );
  }

  return (
    <>
      {content}
      <Button onClick={props.nextStage}>start</Button>
    </>
  );
};

export default Instructions;
