import { useState } from "react";
import { TEXT } from "./types";
import { textData } from "./data";

function App() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<TEXT[]>([]);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const amount = count;

    setText(textData.slice(0, amount));
  };

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    //! check if the count is greater or equal to 0 and count less or equal to zero
    const newValue = parseInt(e.target.value);
    //? check if the newValue is not out the the range of 0 and 8
    if (newValue >= 0 && newValue <= textData.length) {
      setCount(newValue);
    }
    // setCount((currentCount) => {
    //   // newValue
    //   let newValue = parseInt(e.target.value);
    //   // check if the newValue is not not Not a number if so return null
    //   if (isNaN(newValue)) {
    //     return 0;
    //   }
    //   // check if the newValues is greater or less than 0 of less and greater than 8
    //   if (newValue >= 0 && newValue <= 8) {
    //     return newValue;
    //   }
    //   return currentCount;
    // });
  };
  return (
    <section className="section-center">
      <h3>Tired of boring lorum Ipsum</h3>
      <form className="lorum-forum" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={handleInput}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorum-text result">
        {text.map((item) => (
          <p key={item.id}>{item.content}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
