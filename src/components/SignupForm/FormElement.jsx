import React from "react";
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';

import { FormContainer, FormLabel, LabelName, SubmitButton } from './SignupForm.styled';

const SignupSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export const FormElement = ({ onSubmit }) => {
  return (
    <div>
      <Formik autocomplete="off"
        validationSchema={SignupSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormContainer>
              <FormLabel className='label-hover'>
                <LabelName>Email</LabelName>
                <Field type="email" name="email"></Field>
              </FormLabel>

              <FormLabel className='label-hover'>
                <LabelName>Password</LabelName>
                <Field type='text' name="password"></Field>
              </FormLabel>

              <SubmitButton type="submit" variant="contained" style={{marginLeft: 'auto'}} disabled={isSubmitting}>Submit</SubmitButton>
            </FormContainer>
          </Form>
        )}
      </Formik>
    </div>
  );
 }

 FormElement.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
