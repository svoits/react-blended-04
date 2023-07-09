import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { getTodos } from 'redux/todoSlice';

export const TodoList = () => {
  const todos = useSelector(getTodos);

  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}

      <Grid>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo
                id={todo.id}
                text={todo.text}
                counter={index + 1}
                // onClick={this.deleteTodo}
              />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};
