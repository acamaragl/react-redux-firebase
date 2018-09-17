import "./ToDoList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";


class Mensajes extends Component {
  state = {
    addFormVisible: false,
    addFormValue: ""
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleFormSubmit = event => {
    const { addFormValue } = this.state;
    const { addMsg } = this.props;
    event.preventDefault();
    addMsg(addFormValue);
    this.setState({ addFormValue: "" });
  };

  renderAddForm = () => {
    const { addFormVisible, addFormValue } = this.state;
    if (addFormVisible) {
      return (
        <div id="todo-add-form" className="col s10 offset-s1">
          <form onSubmit={this.handleFormSubmit}>
            <div className="input-field">
              <i className="material-icons prefix">note_add</i>
              <input value={addFormValue} onChange={this.handleInputChange} id="toDoNext" type="text"/>
              <label htmlFor="toDoNext">Write a msg</label>
            </div>
          </form>
        </div>
      );
    }
  };

  renderMsgs() {
    const { msgs } = this.props;
    if(msgs !== 'loading'){
      const msgsHtml = _.map(msgs, (value, key) => {
        let fecha = new Date(value.date)
          return <div key={key}>
            <span style={{display:'inline-block',minWidth: '200px'}}>{value.owner}</span>
            <span >{fecha.toLocaleString()}</span>
            <span style={{marginLeft:'5em'}}>{value.message}</span>
          </div>;

      }).reverse();
      if (!_.isEmpty(msgsHtml)) {return msgsHtml;}
    }
    return (<div className="col s10 offset-s1 center-align"></div>);
  }

  componentWillMount() {
    this.props.fetchMsgs();
  }

  render() {
    const { addFormVisible } = this.state;
    return (
      <div className="to-do-list-container">
        <div><h3>Ultimas noticias</h3></div>
        <div className="row">
          {this.renderAddForm()}
          {this.renderMsgs()}
        </div>
        <div className="fixed-action-btn">
          <button onClick={() => this.setState({ addFormVisible: !addFormVisible })} className="btn-floating btn-large teal darken-4">
            {addFormVisible ? (<i className="large material-icons">close</i>) : (<i className="large material-icons">add</i>)}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ msgs }) => {
  return {msgs};
};

export default connect(mapStateToProps, actions)(Mensajes);
