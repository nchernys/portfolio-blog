import "./queueDataStructure.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iceCream from "./iceCreamData";
import ComponentBlogReadMore from "./component-read-more";
import QueueClass from "./queueDataStructureConstructor";

const Queue = () => {
  const [iceCreamItems, setIceCreamItems] = useState([...iceCream]);
  const [queue, setQueue] = useState(new QueueClass());
  const [inProgress, setInProgress] = useState([]);
  const [pickUpIceCream, setPickUpIceCream] = useState("");

  const codeQueueClass = `class QueueClass {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "";
    }
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) {
      return "";
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  printQueue() {
    let list = [];
    for (let i = 0; i < this.items.length; i++) {
      list.push(this.items[i]);
    }
    return list;
  }
}
`;

  const queueVariables = `const [iceCreamItems, setIceCreamItems] = useState([...iceCream]); 
const [queue, setQueue] = useState(new QueueClass()); 
const [inProgress, setInProgress] = useState([]); 
const [pickUpIceCream, setPickUpIceCream] = useState(""); 
`;

  const handleEnQueue = `  const handleSelectIceCream = (item) => {
    if (queue.items.length <= 0) {
      queue.enqueue(item);
      setInProgress(queue.printQueue());
    } else {
      queue.enqueue(item);
      if (queue.items.length === 2 && inProgress.length === 1) {
        setInProgress(queue.printQueue());
      } else {
        const allQueue = queue.printQueue();
        const waiting = allQueue.filter((item, index) => index > 0);
        setInProgress(waiting);
      }
    }
    setTimeout(() => {
      const allQueue = queue.printQueue();
      const waiting = allQueue.filter((item, index) => index > 0);
      setInProgress(waiting);
      setPickUpIceCream(queue.front());
    }, 2000);
  };
`;

  const handlePickUpQueue = `const handlePickUp = () => {
    queue.dequeue();
    setPickUpIceCream(queue.front());
    const allQueue = queue.printQueue();
    const waiting = allQueue.filter((item, index) => index > 0);
    setInProgress(waiting);
  };`;

  const handleSelectIceCream = (item) => {
    if (queue.items.length <= 0) {
      queue.enqueue(item);
      setInProgress(queue.printQueue());
    } else {
      queue.enqueue(item);
      if (queue.items.length === 2 && inProgress.length === 1) {
        setInProgress(queue.printQueue());
      } else {
        const allQueue = queue.printQueue();
        const waiting = allQueue.filter((item, index) => index > 0);
        setInProgress(waiting);
      }
    }

    setTimeout(() => {
      const allQueue = queue.printQueue();
      const waiting = allQueue.filter((item, index) => index > 0);
      setInProgress(waiting);
      setPickUpIceCream(queue.front());
    }, 2000);
  };

  const handlePickUp = () => {
    queue.dequeue();
    setPickUpIceCream(queue.front());
    const allQueue = queue.printQueue();
    const waiting = allQueue.filter((item, index) => index > 0);
    setInProgress(waiting);
  };

  return (
    <>
      <div className="queue-heading">
        <div className="overlay">
          <div className="heading-text">
            <h1>Queue Data Structure: how to code an ice-cream shop?</h1>
            <p>
              <Link to="/">Blog</Link> by by{" "}
              <a href="https://nchernysheva.com">Natalia Chernysheva</a>
            </p>
            <div className="photo">
              <img src="./images/chernysheva_photo_12.jpg" alt="photo" />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="queue-main">
        <div className="w-100 my-4">
          <h4 className="mt-5">What is a queue?</h4>
          <p>
            Queue is a linear data structure that follows the principle
            First-In-First-Out (FIFO). Just like in an ice-cream shop - the
            person at the head of the line gets the ice-cream first and the
            person at the tail of the line gets the ice-cream last!{" "}
          </p>
          <p className="graph">
            <img width="600" src="./images/queue-graph-2.svg" alt="" />
          </p>
          <p></p>

          <p>
            JavaScript does not have a native Queue class so we will need to
            create it to enable the queue methods. We use the method .enqueue()
            to add an element to the tail of the queue and .dequeue() to remove
            the element at the head of the queue. To look up the element at the
            head of the queue without deleting it, we can use .front() method.
            The method .isEmpty() checks if the queue is empty and .size()
            checks the number of the elements in the queue.
          </p>

          <pre className="bg-dark text-white w-100 py-3 p-5">
            {codeQueueClass}
          </pre>

          <p>
            Once we create the Queue class, we can start coding an ice-cream
            dashboard!
          </p>

          <h4>Let's build an ice-cream order dashboard!</h4>
          <p>
            To build an ice-cream dashboard, we will need four variables: (1) an
            array of ice-cream flavors, (2) a queue to store flavors selected by
            customers, (3) an array to store the items ordered and being made,
            and finally a variable for the ice-cream ready to pick up!
          </p>

          <pre className="bg-dark text-white w-100 py-3 p-5">
            {queueVariables}
          </pre>
          <p>
            Our dashboard will have three screens: flavors, waiting list, and
            pick up. When a customer selects a flavor it is being added to the
            queue with the .enqueue() method, displayed on the waiting list
            screen for two seconds, and finally is displayed on the pick up
            screen with the .front() method!
          </p>

          <pre className="bg-dark text-white w-100 py-3 p-5">
            {handleEnQueue}
          </pre>
          <p>
            Finally, when the customer picks up the order, we delete the first
            item of the queue using the .dequeue() method. Once we delete the
            first item of the queue, the next item of the queue becomes the
            first one. The screens reflect the change as the top item from the
            waiting list moves to the pick up screen. That's it! Enjoy!
          </p>

          <pre className="bg-dark text-white w-100 py-3 p-5">
            {handlePickUpQueue}
          </pre>

          <h2 className="fw-bold mt-5 mb-0 text-center text-primary">
            Ice Cream Shop dashboard!{" "}
          </h2>

          <div className="d-flex dashboard">
            <div className="illustration">
              <img src="./images/shop.jpg" alt="" />
            </div>
            <div className="board">
              <div className="bg-light p-3 text-black screen">
                <p className="fw-bold">Pick your flavor!</p>
                {iceCreamItems.map((item) => (
                  <button
                    className="btn btn-primary my-2 w-100"
                    onClick={() => handleSelectIceCream(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="bg-light p-3 text-black screen">
                <p className="fw-bold">In progress... </p>
                <div>
                  {queue &&
                    inProgress.map((item) => (
                      <div className="d-flex align-items-center justify-center">
                        <div className="bullet"></div>
                        <div>{item}</div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="bg-light p-3 text-black screen">
                <p className="fw-bold">Pick up and enjoy! </p>
                <div className="d-flex align-items-center justify-center">
                  {pickUpIceCream && (
                    <>
                      <div className="bullet"></div>
                      {pickUpIceCream}
                    </>
                  )}
                </div>
                <button className="btn btn-primary my-4" onClick={handlePickUp}>
                  Pick up!
                </button>
              </div>
            </div>
          </div>
        </div>
        <ComponentBlogReadMore />
      </div>
    </>
  );
};

export default Queue;
