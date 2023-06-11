import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({ text, count, id, onDelete }) => {
  
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{count}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={() => onDelete(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};
