import "./binaryTree.css";
import words from "./wordsData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ComponentBlogReadMore from "./component-read-more";

const BinaryTree = () => {
  const [suggestedWord, setSuggestedWord] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
    const target = e.target.value;

    function recursiveBinarySearchTree(words, target, start, end) {
      const pivot = Math.floor((end + start) / 2);

      if (start > end) {
        return -1;
      }

      if (words[pivot].startsWith(target)) {
        return pivot;
      }

      if (target < words[pivot]) {
        return recursiveBinarySearchTree(words, target, start, pivot - 1);
      }

      if (target > words[pivot]) {
        return recursiveBinarySearchTree(words, target, pivot + 1, end);
      }
    }

    const result = recursiveBinarySearchTree(
      words,
      target,
      0,
      words.length - 1
    );
    setSuggestedWord(words[result]);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setInputValue(suggestedWord);
    }
  };

  const code = `
    const array = [1, 7, 8, 13, 17, 21, 26, 31];
    const target = 21; 
    function recursiveBinarySearchTree(array, target, start, end) {
        const pivot = Math.floor((end + start) / 2);
        if (target === array[pivot]) {
          return pivot;
        }
        if (target < array[pivot]) {
          return recursiveBinarySearchTree(array, target, start, pivot - 1);
        }  
        if (target > array[pivot]) {
          return recursiveBinarySearchTree(array, target, pivot + 1, end);
        }
    }     
    const result = recursiveBinarySearchTree(array, target, 0, array.length - 1);
    console.log(result);

    // Output: 5 (the index of '21')
          `;

  const codeAutocomplete = `
  const target = e.target.value;
    function recursiveBinarySearchTree(words, target, start, end) {
      const pivot = Math.floor((end + start) / 2);
      if (start > end) {
        return -1;
      }
      if (words[pivot].startsWith(target)) {
        return pivot;
      }
      if (target < words[pivot]) {
        return recursiveBinarySearchTree(words, target, start, pivot - 1);
      }
      if (target > words[pivot]) {
        return recursiveBinarySearchTree(words, target, pivot + 1, end);
      }
    }
    const result = recursiveBinarySearchTree(
      words,
      target,
      0,
      words.length - 1
    );
    setSuggestedWord(words[result]);
    `;

  return (
    <>
      <div className="binary-heading">
        <div className="heading-image">
          <img src="./images/binary-tree-sm.jpg" />
        </div>
        <div className="heading-text">
          <h1>How to run a Binary Search Tree?</h1>
          <p>
            <Link to="/">Blog</Link> by by{" "}
            <a href="https://nchernysheva.com">Natalia Chernysheva</a>
          </p>
          <div className="photo">
            <img src="./images/chernysheva_photo_11.jpg" alt="photo" />{" "}
          </div>
        </div>
      </div>
      <div className="binary-main">
        <div className="w-100 my-4">
          <h4 className="mt-5">What is a binary tree?</h4>
          <p>
            What is a binary tree? A binary tree is a non-linear data structure
            that represents an hierarchy with nodes which can have up to two
            children. In a binary tree, the values on the left from the node are
            smaller than the node value and the values on the right of the node
            are greater than the node value.{" "}
          </p>
          <p>
            <div className="tree-svg">
              <img src="./images/binary-search-tree.svg" />
            </div>
          </p>
          <p>
            {" "}
            We can run a Binary Search Tree (BST) on sorted arrays (numerical
            and alphabetical). Let's see how it works! If we have an array{" "}
            <strong>[1, 7, 8, 13, 17, 21, 26, 31]</strong> and we want to find
            the target value <strong>'21'</strong>, we should first find the
            pivot -- typically, in the middle of the array. We divide the sum of
            the start and the end indeces by 2, round it with Math.floor(), and
            get the pivot at the index <strong>'3'</strong> with the value{" "}
            <strong> of '13'</strong>:
            <strong>
              {" "}
              [1, 7, 8, <span className="bg-danger text-white">13</span>, 17,
              21, 26, 31]
            </strong>
            . Then, we compare our target value '21' to the pivot value. If the
            target value is smaller than the pivot value, we recursively run the
            search again on the part of the array preceeding the pivot. If the
            target value is greater than the pivot value, we recucively run the
            search on the part of the array after the pivot. Our target value
            '21' is greater than the pivot value '13', so we will now run the
            search on the part of the array following the pivot:{" "}
            <strong>
              [<span style={{ color: "lightgrey" }}>1, 7, 8, 13,</span> 17, 21,
              26, 31]
            </strong>
            . We will then identify a new pivot in the middle of the part of the
            array. The new pivot is the index '1' with the value of '21':{" "}
            <strong>
              [17, <span className="bg-danger text-white">21</span>, 26, 31].
            </strong>{" "}
            Since our target value '21' is equal to the pivot value, we can
            conclude the search and return the target element!
          </p>

          <pre className="bg-dark text-white w-100 p-3">{code}</pre>

          <h4 className="mt-5">What about a real life application?</h4>
          <p>
            Let's imagine we want to develop an autocomplete function for an
            input field. As an example, we'll take a sorted array consisting of
            fifty words starting with the letter 'a'. When we start typing a
            word starting with the 'a', we'll get real-time suggestions! Just
            hit "Enter" to autocomplete the input with the suggested word and
            ... voilà!{" "}
          </p>

          <pre className="bg-dark text-white w-100 p-3">
            {" "}
            {codeAutocomplete}{" "}
          </pre>

          <h4 className="mt-5">Autocomplete the input field:</h4>
          <p>
            {" "}
            Start typing a word starting with an 'a'. Hit 'Enter' to
            autocomplete the input with the suggested word:
          </p>
          <p>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                handleInput(e);
              }}
              onKeyDown={handleSubmit}
            />
            <div>
              Suggested word: <strong> {inputValue && suggestedWord} </strong>
            </div>
          </p>
        </div>
        <ComponentBlogReadMore />
      </div>
    </>
  );
};

export default BinaryTree;
