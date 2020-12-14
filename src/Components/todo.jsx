import React, { Component, } from 'react';
import "./Assets/style.css";

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = { todos: [], text: '' };
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(e){
        e.preventDefault();
        this.setState({
            todos : [this.state.text, ...this.state.todos],
            text :''
        });
    }

    updateTodo(e){
        this.setState({text : e.target.value})
    }

    deleteTodo(name,i){
        let todos= this.state.todos.slice();
        todos.splice(i,1);
        this.setState({todos});
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={(e)=>this.addTodo(e)}>
                <input className="text" value={this.state.text} onChange={(e)=>this.updateTodo(e)} placeholder="Todo"></input>
                <button type="submit" className="btn btn-info m-2 add">Click to Add TODO</button>
                <br/>
                <p className="delinfo">To delete any todo, just Double Click on it</p>
                <p className="text"> <b>No of Tasks : {this.state.todos.length}</b></p>
                </form>
                <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
         );
    }
}


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = { box:[], checked : false};
    }

    changeCheck(e){
        
        this.setState({checked : !e.target.value})
    };

    deleteTodo(item, i) {
        this.props.deleteTodo(item, i);
    };


    render() { 
        return (
            <>
            <p className="text"><b>Completed : {this.state.box.filter(e=>e.target.value===true).length}</b></p>
            <ul className="text" style={{listStyleType:"none"}}>
                {this.props.todos.map((todo,i) => {
                    return( <b><li onDoubleClick={() => {this.deleteTodo(todo,i)}} key={i}>
                        <input type="checkbox" value={this.state.checked} onClick={(e) => this.changeCheck(e)} aria-label="check" className="checkbox m-4" />
                        {todo}
                        </li></b>)
                })}
            </ul>
            </>
         );
    
}
 
export default Todo;
