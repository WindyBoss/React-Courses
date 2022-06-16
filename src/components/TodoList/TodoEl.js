import PropTypes from 'prop-types';
import { 
    TextContainer, 
    Text, 
    ButtonContainer, 
    Button, 
    TextType,
    TaskHeader
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
}) {
    // the callback function can be used in onClick
    return (
        <>
            <TextContainer>
                <TaskHeader>{name}</TaskHeader>
                <Text><TextType>Deadline:</TextType> {deadline}</Text>
                <Text><TextType>Description:</TextType> {description}</Text>
                <Text><TextType>Priority:</TextType> {priority}</Text>

            </TextContainer>
            <ButtonContainer>
                <Button colors={colors} onClick={() => deleteTask(id)}>Delete task</Button>
                <Button colors={colors} onClick={() => toggleCompleted(id)}>
                    {completed ? 'Unmark as Complete' : 'Mark as Complete'}
                </Button>
            </ButtonContainer>
        </>
    )
}

/*
* Synthetic events
* onClick, onChange, onSubmit, onMouseEnter, onToggle
*/

TodoEl.propTypes = {
    id: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    completed: PropTypes.bool.isRequired, 
    deadline: PropTypes.string.isRequired,
}