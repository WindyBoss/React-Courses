import React from 'react';
import toast from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { showTheme } from 'redux/theme/themeSlice';

import { addNewTodo } from 'redux/todo/todoReducer';

import ButtonStyled from 'components/ButtonStyled';

import {
  StyledField,
  ErrorText,
  FormLabelContainer,
  FormLabel,
  FormContainer,
  FormTitle,
} from './TodoForm.styled';

const priorities = ['high', 'middle', 'low'];
const notify = () => toast.success('The task was added successfully!');

let schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  deadline: yup.date().min(new Date()).required(),
  priority: yup.string().required('Please select a priority').oneOf(priorities),
});

const FormError = ({ name, colors }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText colors={colors}>{message}</ErrorText>}
    />
  );
};

const FormField = ({ colors, name, type, placeholder, htmlFor }) => {
  return (
    <FormLabelContainer>
      <FormLabel htmlFor={htmlFor}>Task deadline</FormLabel>
      <StyledField
        colors={colors}
        name={name}
        type={type}
        placeholder={placeholder}
      ></StyledField>
      <FormError colors={colors} name={name} />
    </FormLabelContainer>
  );
};

export default function TodoForm() {
  const { theme } = useSelector(showTheme);

  console.log(theme);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addNewTodo(values));
    resetForm();
    notify();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          description: '',
          deadline: '',
          priority: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer colors={theme.colors}>
          <Form autoComplete="off">
            <FormTitle>Add new task</FormTitle>
            <FormField
              colors={theme.colors}
              placeholder="Text task name"
              htmlFor="name"
              name="name"
              type="text"
            />
            <FormField
              colors={theme.colors}
              placeholder="Text task description"
              htmlFor="description"
              name="description"
              type="text"
            />
            <FormField
              colors={theme.colors}
              placeholder="Text task deadline"
              htmlFor="deadline"
              name="deadline"
              type="Date"
            />

            <FormLabelContainer>
              <FormLabel htmlFor="priority">Task deadline</FormLabel>
              <Field
                style={{
                  fontSize: '16px',
                  width: '50%',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  color: `${theme.colors.btnBgColor}`,
                  border: `1px solid ${theme.colors.counterColor}`,
                }}
                colors={theme.colors}
                name="priority"
                as="select"
              >
                <option value="">Select priority</option>
                {priorities.map((priority, idx) => (
                  <option value={priority} key={idx}>
                    {priority}
                  </option>
                ))}
              </Field>
              <FormError colors={theme.colors} name="priority" />
            </FormLabelContainer>
            <ButtonStyled colors={theme.colors} type="submit">
              Add Task
            </ButtonStyled>
          </Form>
        </FormContainer>
      </Formik>
    </>
  );
}
