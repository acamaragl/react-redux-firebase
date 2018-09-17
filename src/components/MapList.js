import "./ToDoList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import MapListItem from "./MapListItem";

class MapList extends Component {
  state = {
    addFormValue: ""
  };

  onClickBlock(key,data,todoId){
    const { blockBuilding } = this.props;
    !data.blocked && blockBuilding(todoId, key)
  }


  renderMap() {
    const {map, reference, id } = this.props;
    let childrens = window.document.getElementById("edificios_"+id)

    if(map !== 'loading' && reference === map.selectedId){
      childrens && (childrens.style.display = 'block')
      const toDos = _.map(map.buildings, (value, key) => {
        return <MapListItem key={key} buildingId={key} buildingData={value} owner={map.selectedId} />;
      });
      if (!_.isEmpty(toDos)) {
        return toDos;
      }
    }else{
      childrens && (childrens.style.display = 'none')
      return (
        <div className="col s10 offset-s1 center-align">
          <img alt="Nothing was found" id="nothing-was-found" src="/img/nothing.png"/>
          <h4>You have completed all the tasks</h4>
          <p>Start by clicking add button in the bottom of the screen</p>
        </div>
      );
    }
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="to-do-list-container">
        <div className="row">
          {this.renderMap()}
        </div>
      </div>);
  }
}

const mapStateToProps = ({ map }) => {
  return {map};
};

export default connect(mapStateToProps, actions)(MapList);
