import "./styles.css";
import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function AppUpdated() {
  return <Accordion />;
}

function Accordion() {
  const [idOpened, setOpenedId] = useState(-1);

  function handleToggle(id) {
    setOpenedId(id);
  }

  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordianItem
          faq={faq}
          id={i}
          isOpen={idOpened === i ? true : false}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}

function AccordianItem({ faq, id, isOpen, handleToggle }) {
  return isOpen ? (
    <div className="item open" onClick={() => handleToggle(-1)}>
      <p className="number">{id + 1}</p>
      <p className="title">
        {faq.title} <span>-</span>
      </p>
      <p className="content-box">{faq.text}</p>
    </div>
  ) : (
    <div className="item" onClick={() => handleToggle(id)}>
      <p className="number">{id + 1}</p>
      <p className="title">
        {faq.title} <span>+</span>
      </p>
    </div>
  );
}
