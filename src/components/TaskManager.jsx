import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './TaskManager.css'; // Optional CSS for styling

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Learn React.js', completed: false },
        { id: 2, text: 'Build a Task Manager', completed: false },
      ],
    };
  }

  addTask = (newTask) => {
    const updatedTasks = [
      ...this.state.tasks,
      { id: Date.now(), text: newTask, completed: false },
    ];
    this.setState({ tasks: updatedTasks });
  };

  toggleTaskCompletion = (id) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.setState({ tasks: updatedTasks });
  };

  deleteTask = (id) => {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    return (
      <div className="task-manager">
        <h1>Task Manager</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          toggleTaskCompletion={this.toggleTaskCompletion}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskManager;
