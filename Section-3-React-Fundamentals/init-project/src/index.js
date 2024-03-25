import React from "react";
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return (
    <section>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image/>
      <Title/>
      <Author/>
    </article>
  )
};

const Image = () => <img
  src="https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UL320_.jpg"
  alt=""
/>;
const Title = () => <h2>The Lost Bookshop: The most charming and uplifting novel for 2024 and the perfect gift for book
  lovers!</h2>;
const Author = () => {
  return <h4>Evie Woods</h4>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);