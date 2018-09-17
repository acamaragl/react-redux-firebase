import React, { Component } from "react";
import { connect } from "react-redux";
import { blockBuilding} from "../actions";

class MapListItem extends Component {
  onClickBlock(key,data,owner){
    const { blockBuilding } = this.props;
    !data.blocked && blockBuilding(owner, key)
  }

  render() {
    const { buildingId, buildingData, owner } = this.props;

    return (
      <div key={buildingId}>
        <span style={{marginLeft:'5em'}}> {buildingData.name} </span>
        <span style={{marginLeft:'5em'}}> tipo: {buildingData.tipo} </span>
        <span style={{marginLeft:'5em'}}> nivel: {buildingData.level} </span>
        <span onClick={this.onClickBlock.bind(this,buildingId,buildingData,owner)}
          style={{float:'right'}} disabled={buildingData.blocked? true:false}> {buildingData.blocked? 'BLOCKED': 'Bloqueame'} </span>
      </div>
    );
  }
}

export default connect(null, {  blockBuilding })(MapListItem);
