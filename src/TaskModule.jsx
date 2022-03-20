import React from "react";
import "./TaskModule.css";

class TaskModule extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(props.toggle);
    }

    render()
    {
        return(
        <li className="task" onDoubleClick={()=>{this.props.toggle(this.props.id)}}>
            <div className="innerTaskContent">
                <div className="reminder" style={{backgroundColor:this.props.task.reminder? "green" : "transparent"}}></div>
                <div className="taskText">
                    <h4>{this.props.task.taskName}</h4>
                    <h5>{this.props.task.taskDesc}</h5>
                </div>
                <button onClick={()=>this.props.delete(this.props.id)} className="btn btn-danger removebtn">Remove</button>
            </div>
        </li>)
    }
}

export default TaskModule;