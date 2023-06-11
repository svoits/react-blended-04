import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

const KEYTodos = 'todos';
export class Todos extends Component {
  state = {
    todos: [],
  }
  componentDidMount(){
    const todosLS = localStorage.getItem(KEYTodos);
    if(todosLS !== null){
      const todos = JSON.parse(todosLS);
      this.setState({todos});
    }
    
  }
  componentDidUpdate(_,prevState){
    const {todos} = this.state;
    if(prevState.todos !== todos){
      localStorage.setItem(KEYTodos, JSON.stringify(todos));
    }
  }
  addTodo = (text) => {
    const newTodo = {
      id: nanoid(),
      text,
    }
    console.log(text);
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }))

  }
  
  deleteTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter( ({id: idTodo}) => idTodo !== id )
    }))
  }
  render() {
    const { todos } = this.state;

    return (
      <>
      <SearchForm onSubmit={this.addTodo} />
      <Grid>{todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <Todo text={text} id={id} onDelete={this.deleteTodo} count={index+1}/>
        </GridItem>
      ))}</Grid>
      </> 
    );
  }
}
