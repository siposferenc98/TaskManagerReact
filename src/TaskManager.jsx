import React from "react";
import TaskAddModule from "./TaskAddModule";
import TaskDisplayModule from "./TaskDisplayModule"


class TaskManager extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {isVisible: false, tasks:[]};
        this.ToggleAddModule = this.ToggleAddModule.bind(this);
        this.AddTask = this.AddTask.bind(this);
        this.ToggleTaskReminder = this.ToggleTaskReminder.bind(this);
        this.DeleteTask = this.DeleteTask.bind(this);
    }

    ToggleAddModule()
    {
        this.setState((state)=>({isVisible: !state.isVisible }));
    }

    AddTask(task)
    {
        this.setState({tasks:[...this.state.tasks, task]},function(){console.log(this.state.tasks)});
    }
    ToggleTaskReminder(id)
    {
        let tasks_temp = [...this.state.tasks];
        let itemToToggle = tasks_temp.find(task=>task.id === id);
        itemToToggle.reminder = !itemToToggle.reminder;
        tasks_temp[tasks_temp.indexOf(itemToToggle)] = itemToToggle;
        this.setState({tasks:tasks_temp},()=>{console.log(this.state.tasks)});
    }
    DeleteTask(id)
    {
        let tasks_temp = [...this.state.tasks];
        let taskToDelete = tasks_temp.find(task=>task.id === id);
        tasks_temp.splice(tasks_temp.indexOf(taskToDelete),1);
        this.setState({tasks:tasks_temp},()=>{console.log(this.state.tasks)});
    }

    render()
    {
        return(
            <div style={{minHeight:"100vh",flex:"1",backgroundColor:"rgba(0,0,0,0.05)"}}>
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex flex-row justify-content-between" style={{width:"70%"}}>
                        <h1>Task Manager</h1>
                        <button className="btn btn-primary" onClick={this.ToggleAddModule}>Toggle</button>
                    </div>
                    <div>
                        <TaskAddModule isVisible={this.state.isVisible} addTask={(task)=>{this.AddTask(task)}} />
                    </div>
                        <TaskDisplayModule tasks={this.state.tasks} toggle={this.ToggleTaskReminder} delete={this.DeleteTask}></TaskDisplayModule>
                </div>
            </div>
        )
    }

}

export default TaskManager;