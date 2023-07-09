import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import {
  DeleteButton,
  TodoWrapper,
  LikeButton,
  EditButton,
  InputEdit,
} from './Todo.styled';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  incrementLike,
  decrementLike,
  editTodo,
} from 'redux/todoSlice';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineSave,
  AiOutlineEdit,
} from 'react-icons/ai';
import { useState } from 'react';

export const Todo = ({ text, counter, id, likes }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [textValue, setTextValue] = useState(text);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    setIsEdit(false);
    dispatch(editTodo({ id, text: textValue }));
  };

  const handleChange = e => {
    setTextValue(e.target.value);
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>
          {isEdit ? (
            <InputEdit value={textValue} onChange={handleChange} />
          ) : (
            text
          )}
        </Text>
        <Text>
          {likes}

          <LikeButton type="button" onClick={() => dispatch(incrementLike(id))}>
            <AiOutlineLike size={24} />
          </LikeButton>
          <LikeButton type="button" onClick={() => dispatch(decrementLike(id))}>
            <AiOutlineDislike size={24} />
          </LikeButton>
        </Text>

        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        {!isEdit ? (
          <EditButton onClick={handleEdit}>
            <AiOutlineEdit size={24} />
          </EditButton>
        ) : (
          <EditButton onClick={handleSave}>
            <AiOutlineSave size={24} />
          </EditButton>
        )}
      </TodoWrapper>
    </>
  );
};
//AiOutlineLike
