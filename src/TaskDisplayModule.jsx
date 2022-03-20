import React from "react";
import TaskModule from "./TaskModule";


class TaskDisplayModule extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }

    render()
    {
        return(
            <div style={{width:"50%",border:"1px solid black",minHeight:"100px",marginTop:"10px"}}>
                <ul style={{listStyle:"none", padding:0, margin:0}}>
                    {this.props.tasks.map(element => {
                        return(<TaskModule key={element.id} id={element.id} task={element} toggle={this.props.toggle} delete={this.props.delete}></TaskModule>)
                    })}
                </ul>
            </div>
        )
    }

}

export default TaskDisplayModule;