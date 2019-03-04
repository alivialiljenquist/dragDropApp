import React, { Component } from 'react';

export default class Container2 extends Component {
    state = {        
        tasks: [{name:"Walk the dog",
                 category:"todo", 
                 bgcolor: "lightGrey"},  
              
                {name:"Do the dishes", 
                 category:"todo", 
                 bgcolor:"lightGrey"},  
              
                {name:"Take out the trash", 
                 category:"todo", 
                 bgcolor:"lightGrey"}          
          ]}

        onDragOver = (ev) => {
            ev.preventDefault();
        }

        onDragStart = (ev, id) => {
            console.log('dragstart:', id);
            ev.dataTransfer.setData("id", id);
        }

        onDrop = (ev, cat) => {       
            let id = ev.dataTransfer.getData("id");
            let tasks = this.state.tasks.filter((task) => {
                if (task.name == id) {
                    task.category = cat;           
                }              
                 return task;       
             });        
             this.setState({           
                ...this.state,           
                tasks       
             });    
        }

    render () {
        var tasks = {
            todo: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {               
            tasks[t.category].push(<div 
              key={t.name}                     
              onDragStart={(e)=>this.onDragStart(e, t.name)}                    
              draggable                    
              className="draggable">                       
                 {t.name}                
            </div>);        
          });

          

      return (
        <div className="container-drag">
          <div className="todo" onDrop={(e)=> {this.onDrop(e, 'todo')}}>
            <span className="task-header">To Do</span>
            {tasks.todo}
          </div>
          <div className="droppable" onDragOver={(e) =>this.onDragOver(e)}  
          onDrop={(e)=> {this.onDrop(e, 'complete')}}>
            <span className="task-header">Completed</span>
            {tasks.complete}
          </div>
        </div>
      );
    }
  }