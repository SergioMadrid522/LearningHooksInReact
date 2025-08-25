import { useState } from "react";
import "./App.css";
import type { person, persons } from "./types.ts";

function App({ persons }: persons) {
  const [personInfo, setPersonInfo] = useState<person | null>(null);
  return (
    <>
      {persons.map((person) => (
        <button
          key={person.name}
          type="button"
          onClick={() => setPersonInfo(person)}
        >
          {person.name} info
        </button>
      ))}
      {personInfo && (
        <div className="person__wrap">
          <h2 className="person__name">{personInfo.name} info</h2>
          <ul className="person__info">
            <li>Edad: {personInfo.age}</li>
            <li>Ocupación: {personInfo.occupation}</li>
            <li>Locación: {personInfo.location}</li>
            <li>Hobbies: {personInfo.hobbies.join(", ")}</li>
          </ul>
        </div>
      )}
      ;
    </>
  );
}

export default App;
