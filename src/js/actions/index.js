// src/js/actions/index.js
import { ADD_ARTICLE } from "../constants/action-types";

//we invoke this action with object - payload as parameter
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
