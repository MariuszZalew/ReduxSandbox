// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

//przekazuję metodę jako props

class ConnectedForm extends Component {
  state = {
    title: ""
  };

  handleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = event => {
    //ask about this
    event.preventDefault();
    const { title } = this.state;
    //generate unique id
    const id = uuidv1();
    //get addArticle from props modified by connect(!)
    this.props.addArticle({ title, id });
    //reset local state after submit
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
