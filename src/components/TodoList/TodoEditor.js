import React, { Component } from "react"; // -> Component from 'react' library
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage,} from 'formik'; // -> react form library
import * as yup from 'yup'; // -> good form validation library

import { StyledField, ErrorText, FormLabelContainer, FormLabel, FormContainer, FormTitle, Button } from './Styles/TodoEditor.styled';
const priorities =  ['high', 'middle', 'low'] // ->priority list - neccessary for validation
const notify = () => toast.success('Successfully toasted!');

let schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    deadline: yup.date().min(new Date()).required(),
    priority: yup.string().required('Please select a priority').oneOf(priorities),
});


const FormError = ({ name }) => {
    return <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
    />
};

export default class TodoEditor extends Component {
    state = {
        message: '',
    };

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
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
              <FormLabelContainer>
                <FormLabel htmlFor='name'>Task name</FormLabel>
                <StyledField placeholder='Text task name' name='name' type='text' colors={colors}></StyledField>
                <FormError name='name' />
              </FormLabelContainer>
              <FormLabelContainer>
                <FormLabel htmlFor='description'>Task description</FormLabel>
                <StyledField colors={colors} placeholder='Text task description' name='description' type='text'></StyledField>
                <FormError name='description' />
              </FormLabelContainer>
              <FormLabelContainer>
                <FormLabel htmlFor='deadline'>Task deadline</FormLabel>
                <StyledField colors={colors} name='deadline' type='Date'></StyledField>
                <FormError name='deadline' />
              </FormLabelContainer>
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

TodoEditor.propTypes = {
  children: PropTypes.any.isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
};






