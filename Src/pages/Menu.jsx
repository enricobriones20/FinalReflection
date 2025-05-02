import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const sampleMenu = [
  { id: 1, name: 'Burger', price: 5.99 },
  { id: 2, name: 'Pizza', price: 8.99 },
  { id: 3, name: 'Fries', price: 2.99 },
];

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="menu">
      <h2>Menu</h2>
      <ul>
        {sampleMenu.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;