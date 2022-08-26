import PropTypes from 'prop-types';
import {
  TextContainer,
  Text,
  ButtonContainer,
  TextType,
  TaskHeader,
} from '../styles/TodoList.styled';

import {
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useGetTodoQuery,
} from 'service/apiService';

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
import SdCardAlertTwoToneIcon from '@mui/icons-material/SdCardAlertTwoTone';

import { ButtonStyled } from 'components/CommonComponents';

export default function TodoEl({ todo, colors }) {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const { name, priority, completed, id, deadline, description } = todo;
  console.log(id);

  const d = useGetTodoQuery(id);
  console.log(d);
  return (
    <>
      <TextContainer colors={colors}>
        <TaskHeader>
          <p style={{ marginRight: '5px' }}>{name}</p>
          {priority === 'high' && !completed && (
            <>
              <SdCardAlertTwoToneIcon
                fontSize="large"
                style={{ fill: 'red' }}
              />
            </>
          )}
          {completed && (
            <>
              <DoneAllTwoToneIcon fontSize="large" style={{ fill: 'green' }} />{' '}
            </>
          )}
        </TaskHeader>
        <Text>
          <TextType>Deadline:</TextType> {deadline}
        </Text>
        <Text>
          <TextType>Description:</TextType> {description}
        </Text>
        <Text>
          <TextType>Priority: </TextType>
          {priority}
        </Text>
      </TextContainer>
      <ButtonContainer>
        <ButtonStyled
          onClick={() => deleteTodo(id)}
          colors={colors}
          endIcon={<DeleteForeverTwoToneIcon />}
          addFeat={{ minWidth: '240px', margin: '5px' }}
        >
          Delete task
        </ButtonStyled>

        <ButtonStyled
          colors={colors}
          addFeat={{ minWidth: '240px', margin: '5px' }}
          onClick={() => {
            updateTodo(todo);
          }}
          endIcon={
            !completed ? <DoneOutlineTwoToneIcon /> : <CloseTwoToneIcon />
          }
        >
          {!completed ? 'Mark as Complete' : 'Mark as incomplete'}
        </ButtonStyled>
      </ButtonContainer>
    </>
  );
}

TodoEl.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  deadline: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  priority: PropTypes.string.isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};
