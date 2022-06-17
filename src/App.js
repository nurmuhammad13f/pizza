import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { Route, Routes } from 'react-router-dom';
import Basket from './components/basket/Basket';
import { useEffect, useState } from 'react';
// import { pizzaBlock } from './data/db';
import { pizzasInBusket } from './data/db'
import { CartProvider } from 'react-use-cart';
import axios from 'axios';

// export const Appp =()=> {
// const [inc, setInc]= useState(0)
// const [decr, setDecr]= useState(0)

//   const onCount =()=> {
//     setInc(inc + 1)
//   }
//   const inCount =()=> {
//     setDecr(inc - 1)
//   }

//   return(
//     <div>
//       <h1>{count}</h1>
//       <button></button>
//     </div>
//   )
// }

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzasBusket, setPizzasBusket] = useState(pizzasInBusket);

useEffect(() => {
//   fetch('http://localhost:3000/db.json')
//   .then((response) => response.json())
//   .then((json) => setPizzas(json.pizzas));

      axios.get('http://localhost:3001/db.json').then(({ data }) => {
        setPizzas(data.pizzas);
      });

}, []);

  return (
    <div className="wrapper">
      <CartProvider>
        <Header />
        {/* <App /> */}
        <Routes>
          <Route path='/' element={<Content pizzas={pizzas} setPizzas={setPizzas} />}></Route>
          <Route path='/basket' element={<Basket pizzasBusket={pizzasBusket} setPizzasBusket={setPizzasBusket} />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
