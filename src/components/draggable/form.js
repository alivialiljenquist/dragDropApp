import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';

export default class Login extends Component {
    constructor(props) {
        super(props);
        state = {        
            tasks: [{name: "", category: "todo"}]
          }

        this.handleChange = this.handleChange.bind(this)
        this.handleLog = this.handleLog.bind(this)
    }


    handleSubmit(event) { 
        this.setState({
            task: this.tasks + {
                name: event.target.value,
                category: "todo"
            }
        })
    }

    handleLog(event) {
        tasks.push(<div 
            key={event.target.value}                     
            onDragStart={(e)=>this.onDragStart(e, event.target.value)}                    
            draggable                    
            className="draggable">                       
               {event.target.value}                
          </div>);
    }


    render() {
        return(
            <div>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Add Item"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    
                    <div>
                        <button >
                            Add
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}