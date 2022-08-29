import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
import SdCardAlertTwoToneIcon from '@mui/icons-material/SdCardAlertTwoTone';

import { useSelector, useDispatch } from 'react-redux';
import { showTheme } from 'redux/theme/themeSlice';

import { toggleComplete, deleteTodo } from 'redux/todo/todoSlice';

import {
  TextContainer,
  Text,
  ButtonContainer,
  TextType,
  TaskHeader,
  TodoListContainer,
  ListEl,
} from './TodoList.styled';

import ButtonStyled from 'components/ButtonStyled';

export default function TodoList({ todos }) {
  const { theme } = useSelector(showTheme);
  const dispatch = useDispatch();

  const { colors } = theme;
  return (
    <div>
      <TodoListContainer>
        {todos.map(todo => {
          const { id, name, priority, completed, deadline, description } = todo;
          return (
            <ListEl key={id} colors={colors}>
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
                      <DoneAllTwoToneIcon
                        fontSize="large"
                        style={{ fill: 'green' }}
                      />
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
                  onClick={() => dispatch(deleteTodo(id))}
                  colors={colors}
                  endIcon={<DeleteForeverTwoToneIcon />}
                  addFeat={{ minWidth: '240px', margin: '5px' }}
                >
                  Delete task
                </ButtonStyled>

                <ButtonStyled
                  colors={colors}
                  addFeat={{ minWidth: '240px', margin: '5px' }}
                  onClick={() =>
                    dispatch(toggleComplete({ ...todo, completed: !completed }))
                  }
                  endIcon={
                    !completed ? (
                      <DoneOutlineTwoToneIcon />
                    ) : (
                      <CloseTwoToneIcon />
                    )
                  }
                >
                  {!completed ? 'Mark as Complete' : 'Mark as incomplete'}
                </ButtonStyled>
              </ButtonContainer>
            </ListEl>
          );
        })}
      </TodoListContainer>
    </div>
  );
}
