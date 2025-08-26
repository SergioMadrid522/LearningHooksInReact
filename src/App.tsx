import "./App.css";
import { data } from "./data.ts";
import PeopleInfo from "./useState/PeopleInfo";
import Counter from "./useState/Counter.tsx";
import DarkMode from "./useState/DarkMode.tsx";
import Cart from "./useState/Cart.tsx";
import { cartData } from "./useState/data/cartData.ts";
/* 

Slider o Carrusel simple
  Estado currentIndex para saber qué imagen mostrar.
  Botones “Siguiente” y “Anterior” que cambian el valor del estado.

*/

function App() {
  return (
    <>
      <PeopleInfo persons={data} />
      <Counter />
      <DarkMode />
      <Cart items={cartData} />
    </>
  );
}

export default App;
