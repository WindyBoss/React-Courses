import React, { useContext } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';

import { themeContext } from '../../../context/authContext';
import { FormContainer, FormLabel, LabelName } from '../styles/SignupForm.styled';

import { ButtonStyled } from 'components/CommonComponents';

const SignupSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export const FormElement = ({ onSubmit }) => {
  const { mainTheme } = useContext(themeContext);

  return (
    <div>
      <Formik
        autocomplete="off"
        validationSchema={SignupSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormContainer colors={mainTheme.colors}>
              <FormLabel className="label-hover">
                <LabelName colors={mainTheme.colors}>Email</LabelName>
                <Field type="email" name="email"></Field>
              </FormLabel>

              <FormLabel className="label-hover">
                <LabelName colors={mainTheme.colors}>Password</LabelName>
                <Field type="text" name="password"></Field>
              </FormLabel>
              <ButtonStyled
                colors={mainTheme.colors}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </ButtonStyled>
            </FormContainer>
          </Form>
        )}
      </Formik>
    </div>
  );
};

FormElement.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
