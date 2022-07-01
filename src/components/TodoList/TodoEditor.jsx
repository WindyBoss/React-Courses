import React from "react";
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage,} from 'formik';
import * as yup from 'yup';

import { themeContext } from "context/authContext";

import { ButtonStyled } from '../globalStyles';

import { StyledField, ErrorText, FormLabelContainer, FormLabel, FormContainer, FormTitle } from './Styles/TodoList.styled';
const priorities =  ['high', 'middle', 'low']
const notify = () => toast.success('The task was added successfully!');

let schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    deadline: yup.date().min(new Date()).required(),
    priority: yup.string().required('Please select a priority').oneOf(priorities),
});

const FormError = ({ name, colors }) => {
  return <ErrorMessage
      name={name}
      render={message => <ErrorText colors={colors}>{message}</ErrorText>}
    />
};

const FormField = ({colors, name, type, placeholder, htmlFor}) => {
  return (
    <FormLabelContainer>
      <FormLabel htmlFor={htmlFor}>Task deadline</FormLabel>
      <StyledField colors={colors} name={name} type={type} placeholder={placeholder}></StyledField>
      <FormError colors={colors} name={name} />
    </FormLabelContainer>
  )
};

export default function TodoEditor ({onClick, onSubmit, colors}) {

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    onClick();
    resetForm();
    notify();
  };  

  return (
    <themeContext.Consumer>
    {({mainTheme}) => (
    <>
      <Formik
        initialValues={{ name: '', description: '', deadline: '', priority: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}>
        <FormContainer colors={mainTheme.colors}>
          <Form autoComplete='off'>
            <FormTitle>Add new task</FormTitle>
            <FormField colors={mainTheme.colors} placeholder='Text task name' htmlFor='name' name='name' type='text'/>
            <FormField colors={mainTheme.colors} placeholder='Text task description' htmlFor='description' name='description' type='text'/>
            <FormField colors={mainTheme.colors} placeholder='Text task deadline' htmlFor='deadline' name='deadline' type='Date'/>

            <FormLabelContainer>
              <FormLabel htmlFor='priority'>Task deadline</FormLabel>
              <Field style={{
                fontSize: '16px',
                width: '50%',
                padding: '5px 10px',
                borderRadius: '4px',
                color: `${mainTheme.colors.btnBgColor}`,
                border: `1px solid ${colors.counterColor}`}} 
                colors={mainTheme.colors} name='priority' as='select'>
                <option value=''>Select priority</option>
                {priorities.map((priority, idx) => (
                  <option value={priority} key={idx}>
                    {priority}
                  </option>
                ))}
              </Field>
              <FormError colors={mainTheme.colors} name='priority' />
            </FormLabelContainer>
            <ButtonStyled colors={mainTheme.colors} type='submit'>Add Task</ButtonStyled>
          </Form>
        </FormContainer>
      </Formik>
    </>
    )}
    </themeContext.Consumer>          
  );
};

TodoEditor.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
};


/*
export default class TodoEditor extends Component {
    state = {
        message: '',
    };

  handleSubmit = (values, { resetForm }) => {
    const {onSubmit, onClick} = this.props;
    console.log(values);
    onSubmit(values);
    onClick();
    resetForm();
    notify();
  };

  render() {
      const { colors, children } = this.props;
    return (
      <>
        <Formik
          initialValues={{ name: '', description: '', deadline: '', priority: '' }}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          <FormContainer colors={colors}>
            {children}
            <Form autoComplete='off'>
              <FormTitle>Add new task</FormTitle>
              <FormField colors={mainTheme.colors} placeholder='Text task name' htmlFor='name' name='name' type='text'/>
              <FormField colors={mainTheme.colors} placeholder='Text task description' htmlFor='description' name='description' type='text'/>
              <FormField colors={mainTheme.colors} placeholder='Text task deadline' htmlFor='deadline' name='deadline' type='Date'/>

              <FormLabelContainer>
                <FormLabel htmlFor='priority'>Task deadline</FormLabel>
                <Field style={{
                  fontSize: '16px',
                  width: '50%',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  color: `${colors.placeHolderText}`,
                  border: `1px solid ${colors.counterColor}`,
                }} colors={colors} name='priority' as='select'>
                  <option value=''>Select priority</option>
                  {priorities.map((priority, idx) => (
                    <option value={priority} key={idx}>
                      {priority}
                    </option>
                  ))}
                </Field>
                <FormError name='priority' />
              </FormLabelContainer>
              <Button colors={colors} type='submit'>Add Task</Button>
              <Toaster />
            </Form>
          </FormContainer>
        </Formik>
      </>
    );
  };
};
*/