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

export default function App() {
  return <Accordion />;
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordianItem faq={faq} id={i} />
      ))}
    </div>
  );
}

function AccordianItem({ faq, id }) {
  const [open, setOpen] = useState(false);
  return open ? (
    <div className="item open" onClick={() => setOpen(!open)}>
      <p className="number">{id + 1}</p>
      <p className="title">
        {faq.title} <span>-</span>
      </p>
      <p className="content-box">{faq.text}</p>
    </div>
  ) : (
    <div className="item" onClick={() => setOpen(!open)}>
      <p className="number">{id + 1}</p>
      <p className="title">
        {faq.title} <span>+</span>
      </p>
    </div>
  );
}
