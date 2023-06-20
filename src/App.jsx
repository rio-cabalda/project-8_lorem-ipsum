import { useState } from "react";
import text from "./data";
import Lorem from "./components/Lorem";

const App = () => {
  const [numberValue, setNumberValue] = useState(1);
  const [shuffleData, setShuffleData] = useState(text);
  const [paragraphs, setParagraphs] = useState([]);

  const shuffleArray = () => {
    const shuffledArray = [...shuffleData]; // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setShuffleData(shuffledArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputNumber =parseInt(formData.get('number'));
    const numParagraph = shuffleData.slice(0, inputNumber);
    setParagraphs(numParagraph);
    shuffleArray();
    e.currentTarget.reset(); //reset the input. empty the input when submit.
  }
  
  // console.log(shuffleData);
  return (
    <section className="section-center">

     <h4>Tired of boring lorem ipsum</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number">paragraph</label>
        <input type="number" 
          id="number" 
          name="number" 
          value={numberValue} 
          min='1'
          step='1'
          max={text.length}
          onChange={(e)=>setNumberValue(e.target.value)}
        />
        <button type="submit" className="btn">generate</button>
      </form>

      <Lorem paragraphs = {paragraphs} />

    </section>
   
  );
};
export default App;
