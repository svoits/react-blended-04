import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper, LikeButton } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo, incrementLike, decrementLike } from 'redux/todoSlice';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

export const Todo = ({ text, counter, id, likes }) => {
  const dispatch = useDispatch();

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <Text>{likes}
   
        <LikeButton type="button" onClick={() => dispatch(incrementLike(id))}><AiOutlineLike size={24} /></LikeButton>
        <LikeButton type="button"  onClick={() => dispatch(decrementLike(id))}><AiOutlineDislike size={24}/></LikeButton>


        </Text>
      
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
//AiOutlineLike