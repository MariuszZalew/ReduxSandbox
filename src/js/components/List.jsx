// src/js/components/List.jsx
import React from "react";
import { connect } from "react-redux";

//gets 'state' from connect and chops few pieces from it ^^
const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedListItem = ({ el }) => (
  <li className="list-group-item" key={el.id}>
    {el.title}
  </li>
);

//our component with brand new connected state from 'connect'
const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <ConnectedListItem el={el} key={el.id} />
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
