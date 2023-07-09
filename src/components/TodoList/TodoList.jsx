import { Grid, GridItem, Text, Todo } from 'components';

export const TodoList = () => {
  const todos = [{ id: 5, text: 'kkjkjekj' }];
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
