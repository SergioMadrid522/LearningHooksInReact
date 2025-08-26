import { useState } from "react";
import "./styles/counter.css";

function Counter() {
  const [likes, setLikes] = useState(0);
  const [active, setActive] = useState(false);

  // You can add multiple useStates, useEffect, etc
  // in a function just like this
  const handleClick = () => {
    if (active) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setActive(!active);
  };

  return (
    <>
      <h2 className="likesCounter__title">Likes</h2>
      <div className="likesCounter__wrap">
        <button
          type="button"
          className="likesCounter__button"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`bi bi-heart-fill  ${active ? "active" : "inactive"}`}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            />
          </svg>
        </button>
        <p>{likes}</p>
      </div>
    </>
  );
}

export default Counter;
