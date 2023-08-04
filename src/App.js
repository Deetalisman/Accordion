import "./App.css";
import { useState } from "react";

export default function App() {
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
  return (
    <div className="app">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordItems
          curOpen={curOpen}
          onOpen={setCurOpen}
          text={el.text}
          title={el.title}
          num={i}
          key={el.title}
        />
      ))}
    </div>
  );
}

function AccordItems({ title, text, num, curOpen, onOpen }) {
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(num);
  }
  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleToggle}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      <div className="content-box">{isOpen && text}</div>
    </div>
  );
}
