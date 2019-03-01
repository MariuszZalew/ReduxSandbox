// @ts-check
import React from "react";
/**
 * @param {Object} param0
 * @param {Object} param0.el
 * @param {number} param0.el.id
 * @param {string} param0.el.title
 */

const ConnectedListItem = ({ el }) => (
  <li className="list-group-item" key={el.id}>
    {el.title}
  </li>
);
console.log(ConnectedListItem);
/**
 * Function calculating the sum of two given numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} Sum of two numbers
 */
// function add(a, b) {
//   return a + b;
// }

/** @type {boolean} */
let isSomething;

// isSomething = 10;
