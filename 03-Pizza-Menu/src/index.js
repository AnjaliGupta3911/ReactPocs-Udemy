import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";

function Header() {
  return (
    <header className="header">
      <h1>Fast react Pizza Co.</h1>
    </header>
  );
}

function Order() {
  return (
    <div className="order">
      <p>We're currently open</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Footer() {
  const openingHour = 10;
  const closingHour = 22;
  const currentTime = new Date().getHours();
  const isOpen = openingHour <= currentTime && closingHour >= currentTime;
  return <footer>{isOpen ? <Order /> : <p>Sorry, we are closed</p>}</footer>;
}

function Pizza({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} />
      <h3>{pizza.name}</h3>
      <div>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizza={pizza} />
          ))}
        </ul>
      )}
    </main>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);
