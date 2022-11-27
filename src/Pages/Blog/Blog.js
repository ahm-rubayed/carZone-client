import React from "react";

const Blog = () => {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto pt-32 mb-16">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
        <div className="collapse-title md:text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>
            When we talk about state in our applications, it’s important to be
            clear about what types of state actually matter. There are four main
            types of state you need to properly manage in your React apps:
            <ul className="mt-3 ml-6 list-decimal">
                <li className="font-semibold">Local state</li>
                <li className="font-semibold">Global state</li>
                <li className="font-semibold">Server state</li>
                <li className="font-semibold">URL state</li>
            </ul>
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
        <div className="collapse-title md:text-xl font-medium">How does prototypical inheritance work?</div>
        <div className="collapse-content">
          <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
        <div className="collapse-title md:text-xl font-medium">What is a unit test? Why should we write unit tests?</div>
        <div className="collapse-content">
          <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
        <div className="collapse-title md:text-xl font-medium"> React vs. Angular vs. Vue?</div>
        <div className="collapse-content">
          <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue. js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they're not 100 percent the same, so it makes sense to compare them and understand their differences.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
