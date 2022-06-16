import PropTypes from 'prop-types';
import {
    TextContainer,
    Text,
    ButtonContainer,
    Button,
    TextType,
    TaskHeader,
    ButtonText
} from './Styles/TodoEl.styled';


export default function TodoEl({
  id,
  name,
  deadline,
  description,
  completed,
  deleteTask,
  toggleCompleted,
  priority,
  colors,
  DeleteIcon,
  CompleteIcon,
  UnMarkIcon,
  AlertIcon,
  DoneIcon,
}) {
    // the callback function can be used in onClick
  return (
    <>
      <TextContainer>
        <TaskHeader>
          {(priority === 'high' && !completed) && <><AlertIcon style={{ fill: 'red' }} />   </>}
          {completed && <><DoneIcon style={{ fill: 'green' }}/>  </>}
          {name}
        </TaskHeader>
        <Text><TextType>Deadline:</TextType> {deadline}</Text>
        <Text><TextType>Description:</TextType> {description}</Text>
        <Text>
          <TextType>Priority: </TextType>
          {priority}
        </Text>

      </TextContainer>
      <ButtonContainer>
        <Button colors={colors} onClick={() => deleteTask(id)}>
          <DeleteIcon fill={colors.btnTextColor} />
          Delete task
        </Button>
        <Button colors={colors} onClick={() => toggleCompleted(id)}>

          {!completed ?
            <>
            <CompleteIcon fill={colors.btnTextColor} />
            <ButtonText>Mark as Complete</ButtonText>
            </>
            :
            <>
            <UnMarkIcon fill={colors.btnTextColor} />
            <ButtonText>Unmark as Complete</ButtonText>
            </>
          }
        </Button>
      </ButtonContainer>
    </>
  )
};

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
  DeleteIcon: PropTypes.func.isRequired,
  CompleteIcon: PropTypes.func.isRequired,
  UnMarkIcon: PropTypes.func.isRequired,
  AlertIcon: PropTypes.func.isRequired,
  DoneIcon: PropTypes.func.isRequired,
};
