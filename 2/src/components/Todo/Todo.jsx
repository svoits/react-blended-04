import { InputSearch, Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line, RiSave3Fill } from 'react-icons/ri';
import { Component } from 'react';

export class Todo extends Component {
  state = {
    isEdit: false,
    newText: this.props.text,
  };

  handleSaveEditToggle = () => {
    if (this.state.isEdit) {
      this.props.onEdit(this.props.id, this.state.newText);
    }

    this.setState(prevState => ({
      isEdit: !prevState.isEdit,
    }));
  };

  handleInputChange = e => {
    this.setState({ newText: e.target.value });
  };

  render() {
    const { isEdit, newText } = this.state;
    const { text, count, id, onDelete } = this.props;

    return (
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{count}
        </Text>
        {isEdit ? (
          <InputSearch
            placeholder="What do you want to write?"
            name="edit"
            required
            autoFocus
            value={newText}
            onChange={this.handleInputChange}
          />
        ) : (
          <Text>{text}</Text>
        )}

        <DeleteButton type="button" onClick={() => onDelete(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <EditButton type="button" onClick={this.handleSaveEditToggle}>
          {isEdit ? <RiSave3Fill /> : <RiEdit2Line />}
        </EditButton>
      </TodoWrapper>
    );
  }
}
