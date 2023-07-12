import { useState } from "react";
import "./form.css";

const Form = () => {
  const handleClick = (buttonName) => {
    console.log(`${buttonName} clicked`);
  };

  return (
    <div>
      <button onClick={() => handleClick("Button 1")}>Button 1</button>
      <button onClick={() => handleClick("Button 2")}>Button 2</button>
      <button onClick={() => handleClick("Button 3")}>Button 3</button>
    </div>
  );
    


  // const [name, setName] = useState("");
  // const [summary, setSummary] = useState("");
  // const [achievement, setachievement] = useState("");

  // return (
  //   <div className="success_stories_form" >
  //     <input
  //       type="text"
  //       className="name"
  //       placeholder="Name"
  //       value={name}
  //       onChange={(e) => {
  //         setName(e.target.value);
  //       }}
  //     />
  //     <br />
  //     <input
  //       type="text"
  //       className="summary"
  //       placeholder="Summary"
  //       value={summary}
  //       onChange={(e) => {
  //         setSummary(e.target.value);
  //       }}
  //     />
  //     <br />
  //     <input
  //       type="text"
  //       className="achievement"
  //       placeholder="Achievement"
  //       value={achievement}
  //       onChange={(e) => {
  //         setachievement(e.target.value);
  //       }}
  //     />
  //     <br />
  //     <button>submit</button>
  //   </div>
  // );
};

export default Form;
