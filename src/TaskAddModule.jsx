import React from "react";

class TaskAddModule extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {idCounter: 0, taskName: "", taskDesc: "", reminder: true};
        this.changeTaskName = this.changeTaskName.bind(this);
        this.changeTaskDesc = this.changeTaskDesc.bind(this);
        this.changeReminder = this.changeReminder.bind(this);
    }
    changeTaskName(taskName)
    {
        this.setState({taskName: taskName});
    }
    changeTaskDesc(taskDesc)
    {
        this.setState({taskDesc: taskDesc})
    }
    changeReminder(reminder)
    {
        this.setState({reminder: reminder})
    }

    render()
    {
        return this.props.isVisible ? (
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="display-4">Add task</h1>
                    <label htmlFor="taskName" className="display-5">Task Name</label>
                    <input name="taskName" className="form-control" value={this.state.taskName} onChange={name =>this.changeTaskName(name.target.value)}/> 
                    <label htmlFor="taskDesc" className="display-5">Task Description</label>
                    <input name="taskDesc" className="form-control" value={this.state.taskDesc} onChange={desc =>this.changeTaskDesc(desc.target.value)}/>
                    <label htmlFor="reminderCheckbox">Set reminder</label>
                    <input name="reminderCheckbox" type={"checkbox"} checked={this.state.reminder} onChange={cb => this.changeReminder(cb.target.checked)}/>
                    <button className="btn btn-primary mt-2" onClick={()=>
                        {
                            this.props.addTask({id:this.state.idCounter,taskName: this.state.taskName,taskDesc: this.state.taskDesc, reminder:this.state.reminder});
                            this.setState((state)=>({idCounter: state.idCounter+1}));
                        }}>Add Task</button>
                </div>) : (null);
    }
}

export default TaskAddModule;