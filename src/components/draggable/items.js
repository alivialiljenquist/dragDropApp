import React, { Component } from 'react';


export default class Container2 extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {        
        tasks: [{
          name: '',
          category: ''
        }]
      }


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

      handleChange(event) {
        this.setState({[event.target.item]: event.target.value});
        console.log(event.target.value)
      }
  
      handleSubmit(event) { //listens to event
        this.state.tasks.push({
          name: event.target.item,
          category:"todo"
        }); 

        console.log('added', this.state.tasks)
        event.preventDefault();
      }


    render () {
        var tasks = {
            todo: [],
            complete: []
        }
        this.state.tasks.forEach ((t) => {               
            [t.category].push(<div 
              key={t.name}                     
              onDragStart={(e)=>this.onDragStart(e, t.name)}                    
              draggable                    
              className="draggable">                       
                 {t.name}                
            </div>);        
          });
          
      return (
        <div className="container-drag">
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="item"
                        placeholder="Item"
                        value={this.state.item}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button type="submit">
                            Add
                        </button>
                    </div>
                </form>
            </div>

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