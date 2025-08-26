import { useState } from "react";
import type { person, persons } from "../types.ts";
function PeopleInfo({ persons }: persons) {
  const [personInfo, setPersonInfo] = useState<person | null>(null);

  return (
    <>
      <h1>UseState</h1>
      <h2>Change the info according to the person</h2>
      <div className="options">
        {persons.map((person) => (
          <button
            key={person.name}
            type="button"
            onClick={() => setPersonInfo(person)}
          >
            {person.name} info
          </button>
        ))}
      </div>
      {personInfo && (
        <div className="person__wrap">
          <h2 className="person__name">{personInfo.name}</h2>
          <ul className="person__info">
            <li>Edad: {personInfo.age}</li>
            <li>Ocupación: {personInfo.occupation}</li>
            <li>Locación: {personInfo.location}</li>
            <li>Hobbies: {personInfo.hobbies.join(", ")}</li>
          </ul>
        </div>
      )}
    </>
  );
}
export default PeopleInfo;
