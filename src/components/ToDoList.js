import "./ToDoList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import ToDoListItem from "./ToDoListItem";

class ToDoList extends Component {
  state = {
    addFormValue: ""
  };


  renderToDos() {
    const { data } = this.props;
    if(data !== 'loading'){
      const toDos = _.map(data, (value, key) => {
        return <ToDoListItem key={key} todoId={key} value={value} todo={key} />;
      });
      if (!_.isEmpty(toDos)) {
        return toDos;
      }
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <img alt="Nothing was found" id="nothing-was-found" src="/img/nothing.png"/>
        <h4>You have completed all the tasks</h4>
        <p>Start by clicking add button in the bottom of the screen</p>
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchgrupo17Ref();
  }

  render() {
    return (
      <div className="to-do-list-container">
        <div className="row">
          {this.renderToDos()}
        </div>
      </div>);
  }
}

const mapStateToProps = ({ data }) => {
  return {data};
};

export default connect(mapStateToProps, actions)(ToDoList);
