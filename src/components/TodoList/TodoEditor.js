import { Component } from "react"; // -> Component from 'react' library
import toast, { Toaster } from 'react-hot-toast';

/*
* Formik -> library for servicing forms in JS
* npm install formik
*/

import { Formik, Form, Field, ErrorMessage } from 'formik';

/*
* Yup -> library for validation
* npm i yup
*/
import * as yup from 'yup';

import { ErrorText, FormLabelContainer, FormLabel, FormContainer, FormTitle, Button } from './Styles/TodoEditor.styled';
const priorities =  ['high', 'middle', 'low']
const notify = () => toast.success('Successfully toasted!');

// schema -> validation variable from Yup library
let schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    deadline: yup.date().min(new Date()).required(),
    priority: yup.string().required('Please select a priority').oneOf(priorities),
});


// variable function, which helps to style Components, which is served by library
const FormError = ({ name }) => {
    return <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
    />
};

/*
* The next variable can be used for table reset
const initialValues = {
    name: '',
    description: '',
    deadline: '',
    priority: ''
};
*/

export default class TodoEditor extends Component {
    state = {
        message: '',
    };


    handleSubmit = (values, { resetForm }) => {
        this.props.onSubmit(values);
    // resetForm => function from library 'Formik' 
        resetForm();
        notify();
    };

    render() {

        const { colors } = this.props;
        /* 
        * <Formik ... /> -> instead of ... is used attributes from Formik library  
        * Formik allow to serve Errors
        */

        /*
        * Working with checkboxes only can be added to state attribute 'checked' with boolean value
       state = {
       ----: checked {true || false}
       value: ---
       }
        */

        /*
        * Radio btn example code
        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <button type="submit" disabled={!agreed}>
        */
        return (
            <Formik
                initialValues={{ name: '', description: '', deadline: '', priority: '' }}
                validationSchema={schema}
                onSubmit={this.handleSubmit}
            >
                <FormContainer colors={colors}>
                
                    <Form autoComplete='off'>
                        <FormTitle>Add new task</FormTitle>
                        <FormLabelContainer>
                            <FormLabel htmlFor='name'>Task name</FormLabel>
                            <Field placeholder='Text task name' name='name' type='text'></Field>
                            <FormError name='name' />
                        </FormLabelContainer>
                        <FormLabelContainer>
                            <FormLabel htmlFor='description'>Task description</FormLabel>
                            <Field placeholder='Text task description' name='description' type='text'></Field>
                            <FormError name='description' />
                        </FormLabelContainer>
                        <FormLabelContainer>
                            <FormLabel htmlFor='deadline'>Task deadline</FormLabel>
                            <Field name='deadline' type='Date'></Field>
                            <FormError name='deadline' />
                        </FormLabelContainer>
                        <FormLabelContainer>
                            <FormLabel htmlFor='priority'>Task deadline</FormLabel>
                            <Field name='priority' as='select'>
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
        );
    };
};