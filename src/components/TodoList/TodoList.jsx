import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { getTodos } from 'redux/todoSlice';

export const TodoList = () => {
  const todos = useSelector(getTodos);

  const filter = useSelector(getFilter);

  const visibleTodos = () => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}

      <Grid>
        {todos.length > 0 &&
          visibleTodos().map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo
                id={todo.id}
                text={todo.text}
                counter={index + 1}
                likes={todo.likes}
                // onClick={this.deleteTodo}
              />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};
