import React, { Component } from "react";
import { connect } from "react-redux";
import MapList from "./MapList";


import { completeToDo, blockBuilding, createRandomBuilding,fetchmap} from "../actions";

class ToDoListItem extends Component {

  onClick() {
    this.getMap()
  }

  onClickCreateNew(){
    const { createRandomBuilding, value } = this.props;
    createRandomBuilding(value)
  }

  getMap() {
    const { value } = this.props;
    this.props.fetchmap(value);
  }

  render() {
    const { todoId, value } = this.props;
    let listStyle = (this.display)? {display:this.display} : {display:'none'}
    return (
      <div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
        <h4 >
          <span onClick={this.onClick.bind(this)}>{todoId}  👁</span>
          <span style={{float:'right'}} onClick={this.onClickCreateNew.bind(this)}> + </span>
        </h4>
        <div id={"edificios_"+todoId} style={listStyle}>
          <MapList map={'load'} id={todoId} reference={value} />
        </div>
      </div>
    );
  }
}

export default connect(null, { completeToDo, blockBuilding, createRandomBuilding,fetchmap })(ToDoListItem);
