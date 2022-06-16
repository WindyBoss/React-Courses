import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { TailSpin } from 'react-loader-spinner'; // => spinner library

import { Controls } from '../components/Reader/Controls';
import { Progress } from '../components/Reader/Progress';
import { TextWrapper } from '../components/Reader/TextWrapper';
import * as API from '../services/publicationsApi';
import { Button, ControlContainer, LoaderContainer } from '../components/Reader/Reader.styled';
import { withApiState } from './ApiState';

 class Reader extends Component {
  state = {
    index: 0,
    items: [],
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  deleteItem = async () => {
    const { index, items } = this.state;
    const { apiState } = this.props;
    const currentPublication = items[index];

    apiState.pending();
    try { // try - catch - must be used for async functions
      await API.deletePublications(currentPublication.id);
      if (index === 0) {
        this.setState(prevState => ({
        items: prevState.items.filter(item => item.id !== currentPublication.id),
        index: prevState.index
      }))} else {
        this.setState(prevState => ({
          items: prevState.items.filter(item => item.id !== currentPublication.id),
          index: prevState.index - 1
        }));
      }
      apiState.success();
      toast.success("Publication was deleted!"); // => notification library -> hot toast
    } catch (error) {
      apiState.error();
    };
  };

   async componentDidMount() {
     const { apiState } = this.props;
    apiState.pending();
    try {
      const items = await API.getPublications();
      this.setState({ items });
      apiState.success();
    } catch (error) {
      apiState.error();
     };
   };

  render() {

    const { colors, apiState } = this.props;

    const { index, items } = this.state;

    const currentPublication = items[index];

    return (
      <>
        {apiState.isIdle() && <div>Publications did not come yet!</div>}
        {apiState.isPending() &&
          <LoaderContainer>
            <TailSpin
              ariaLabel="loading-indicator"
              height={150}
              width={150}
              strokeWidth={5}
              strokeWidthSecondary={1}
              color={colors.btnTextColor}
            />
          </LoaderContainer>
        }
        {apiState.isSuccess() && (
          <div>
            <ControlContainer>
              <Controls
                onClick={this.changeIndex}
                colors={colors}
                index={index}
                publicationsLength={items.length}>
                <Progress
                  colors={colors}
                  current={index}
                  total={items.length} />
              </Controls>
            </ControlContainer>

            <TextWrapper
              publication={currentPublication}
              colors={colors}>
              <Button
                style={{ position: 'absolute', top: '15px', right: '15px' }}
                colors={colors}
                type="button"
                onClick={() => this.deleteItem(currentPublication.id)}>
                Delete Publication
              </Button>
            </TextWrapper>
          </div>
        )}
        {apiState.isError() && <div>Oops we failed sorry </div>}
      </>
    );
  };
};

export const ReaderWrap = withApiState(Reader);

Reader.propTypes = {
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
