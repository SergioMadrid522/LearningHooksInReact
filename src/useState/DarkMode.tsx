import { useState } from "react";
import "./styles/theme.css";

function DarkMode() {
  const [light, setLight] = useState(true);

  const handleClick = () => {
    setLight(!light);
  };

  return (
    <div className={`theme__wrap ${light ? "light-theme" : "dark-theme"}`}>
      <h2>Change between light theme and dark theme</h2>
      <button type="button" className="theme__button" onClick={handleClick}>
        Theme
      </button>
      <div>
        suponiendo que dentro de esa fución llamo a una función más, cuyo flujo
        depende del valor de counter.value, puedo confiar en que el valor leído
        por la función 2 será el valor almacenado en memoria? ¿incluso si react
        no realiza el renderizado? Es decir, supongamos que realizo una peticion
        axios cuando el contador llegue a 50.
      </div>
    </div>
  );
}
export default DarkMode;
