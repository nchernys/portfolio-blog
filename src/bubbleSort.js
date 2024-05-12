import "./bubbleSort.css";
import { useState, useEffect, useRef } from "react";
import books from "./booksData";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import ComponentBlogReadMore from "./component-read-more";

function BubbleSort() {
  const [booksList, setBooksList] = useState([...books]);

  const handleBubbleSort = () => {
    function recursiveBubbleSort(list, n) {
      if (n === 1) {
        return list;
      }

      for (let i = 0; i < n - 1; i++) {
        if (list[i].year > list[i + 1].year) {
          const transition = list[i];
          list[i] = list[i + 1];
          list[i + 1] = transition;
        }
      }
      return recursiveBubbleSort(list, n - 1);
    }

    const updatedBooks = [...recursiveBubbleSort(booksList, booksList.length)];
    setBooksList(updatedBooks);
  };

  const handleUnsort = () => {
    setBooksList([...books]);
  };

  const code = `
  function recursiveBubbleSort(list, n) {
    
    // Stop recursion when the function has run 'n' times   
      if (n === 1) {
          return list;  // Return the sorted array
      }
    
    // Iterate through the array
      for (let i = 0; i < n - 1; i++) {
        // Compare adjacent elements and swap if necessary
          if (list[i].year > list[i + 1].year) {
              const transition = list[i];
              list[i] = list[i + 1];
              list[i + 1] = transition;
          }
      }

      // Recursively invoke the function with 'n-1' to sort the 
      // remaining unsorted pairs
      return recursiveBubbleSort(list, n - 1);
  }
  
  // Pass the array of books and the number of times to 
  // run the function to the function 
  const updatedBooks = [...recursiveBubbleSort(booksList, booksList.length)];
      `;

  return (
    <>
      <div className="bubble-heading">
        <h1 className="px-3">Bubble Sort: How does it work?</h1>
        <p>
          <Link to="/">Blog</Link> by{" "}
          <a href="https://nchernysheva.com">Natalia Chernysheva</a>
        </p>
        <div className="photo">
          <img src="./images/chernysheva_photo_3.jpg" alt="photo" />{" "}
        </div>
      </div>
      <div className="bubble-main">
        <div className="w-100 my-4">
          <p>
            What is Bubble Sort? The Bubble Sort algorithm efficiently sorts an
            array by repeatedly comparing adjacent elements and swapping them if
            they are in the wrong order. It starts with the first two elements,
            compares them, and arranges them in ascending or descending order.
            Then, it moves to the next pair of adjacent elements and continues
            this process until the entire array is sorted.
          </p>{" "}
          <p>
            Essentially, Bubble Sort sorts the array by 'bubbling up' the
            largest or smallest elements to their correct positions.
          </p>
          <p>
            {" "}
            For example, with the array [<strong>24, 12, 1, 56, 4 </strong>] to
            sort in ascending order, Bubble Sort compares <strong>24</strong>{" "}
            and <strong>12</strong>, swapping them to get [
            <strong>12, 24,</strong> 1, 56, 4]. Next, it compares and swaps{" "}
            <strong>24</strong> and <strong>1</strong> to get [
            <strong>12, 1, 24,</strong> 56, 4]. <strong>24</strong> and{" "}
            <strong>56</strong> stay in order. Finally, it swaps{" "}
            <strong>56</strong> and <strong>4</strong> for [
            <strong>12, 1, 24, 4, 56</strong>].
          </p>
          <p>Is it the end of the story? Of course, not! </p>
          <p>
            The Bubble Sort algorithm continues to iterate through the array
            until all elements are sorted in ascending order: [
            <strong>1, 4, 12, 24, 56</strong>] . Introducing recursion allows
            the sorting process to repeat a number of times equal to the number
            of elements in the array.
          </p>
          <p>
            <strong>Where can we use it in real life?</strong>
          </p>
          <p>
            The Bubble Sort algorithm has numerous applications! Consider a
            scenario where we're developing a <strong>library catalog</strong>.
            We want to offer an option to sort books
            <strong> by publication year</strong>, from the oldest to the
            newest. We can achieve this by passing the array of books (title,
            author, publication year) to the{" "}
            <strong>recursiveBubbleSort function</strong> and running it
            <strong> 'n' times</strong>, where 'n' is the number of books in our
            catalog.
          </p>
        </div>
        <pre className="bg-dark text-white w-100">{code}</pre>

        <button className="btn btn-danger m-2" onClick={handleBubbleSort}>
          Test Bubble Sort
        </button>

        <button className="btn btn-warning m-2" onClick={handleUnsort}>
          Unsort
        </button>

        <ol className="book-list d-flex flex-wrap w-100">
          {booksList.map((book, index) => (
            <li key={index} className="p-3 col-12 col-md-6 col-lg-4">
              <div className="word-wrap">
                <i>
                  <b>{book.title}</b>
                </i>
              </div>
              <div>{book.author}</div>
              <div>{book.year}</div>
            </li>
          ))}
        </ol>
        <ComponentBlogReadMore />
      </div>
    </>
  );
}

export default BubbleSort;
