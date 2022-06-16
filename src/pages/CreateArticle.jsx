import { Formik } from 'formik';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

import * as API from '../services/publicationsApi';
import { withApiState } from './ApiState';
import { Button, FormContainer, FieldContainer } from '../components/Reader/Reader.styled';

export const CreateArticle = ({colors, apiState}) => {

  const handleSubmit = (values, { resetForm }) => {
    handleAdd(values);
    resetForm(); // => function of formik, which clear fields' values
  };

  const handleAdd = async (data) => { // must async await, as promise
     apiState.pending(); // => using example of wrapper state machine
    try {
      await API.createPublications(data);
      apiState.success();
      toast.success("Publication was added!");
    } catch (error) {
      apiState.error();
     };
  }
  return (
    <Formik initialValues={{ title: '', text: '' }}
      onSubmit={handleSubmit}>
       {/* isSubmitting - function of Formik, which means the process of submitting the form */}
      {({ isSubmitting }) => (
        <FormContainer colors={colors}>
          <FieldContainer colors={colors} name='title' placeholder='Enter title' />
          <FieldContainer colors={colors} name='text' placeholder='Enter text' />
          <Button colors={colors} type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Adding' : 'Add Publication'}
          </Button>
        </FormContainer>
      )}
    </Formik>
  );
};


export const CreateArticleWrap = withApiState(CreateArticle); // => wrapping of component by state machine

CreateArticle.propTypes = {
  apiState: PropTypes.shape({
    error: PropTypes.func.isRequired,
    idle: PropTypes.func.isRequired,
    isError: PropTypes.func.isRequired,
    isIdle: PropTypes.func.isRequired,
    isPending: PropTypes.func.isRequired,
    isSuccess: PropTypes.func.isRequired,
    pending: PropTypes.func.isRequired,
    success: PropTypes.func.isRequired,
  }).isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};
