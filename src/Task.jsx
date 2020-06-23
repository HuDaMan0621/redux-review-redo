import React, { Component } from 'react';
import './Task.css';
import { connect } from 'react-redux';

class Task extends Component {
  render() {
    const { task, toggleCompleteStatus, deleteTask } = this.props;

    return (
      <div className="Task">
        <div className={`Task__name ${task.complete ? 'is-complete' : ''}`}>{task.name}</div>
        <button onClick={toggleCompleteStatus} className="Task__button Task__button--toggle">
          {!task.complete ? (
            <span role="img" aria-label="Complete">
              ✅
            </span>
          ) : (
            <span role="img" aria-label="Incomplete">
              ⤴️
            </span>
          )}
        </button>
        <button onClick={deleteTask} className="Task__button Task__button--delete">
          <span role="img" aria-label="Delete">
          🗑
          </span>
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = {
  toggleCompleteStatus: '',
  deleteTask: ''
}

export default connect(
  null,
  mapDispatchToProps
)(Task);