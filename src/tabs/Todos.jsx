import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
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

  render() {
    const { todos } = this.state;

    return (
      <>
      <SearchForm onSubmit={this.addTodo} />
      <Grid>{todos.map(({ id, text }) => (
        <GridItem key={id}>
          <Todo text={text} />
        </GridItem>
      ))}</Grid>
      </> 
    );
  }
}
