/** @format */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import withRouter from 'helpers/withRouter';

import { getCategory } from 'service/apolloClient';

import MainContainer from 'components/MainContainer';
import ErrorBoundary from 'components/ErrorBoundary';

import { CategoryTitle } from './CategoryPage.styled';
import ProductList from './components/ProductList';

import { getCurrency } from 'redux/currency/currencySelectors';
class CategoryPage extends PureComponent {
  state = {
    chosenCategory: null,
    error: false,
  };

  async componentDidUpdate(prevProps) {
    const { params } = this.props;

    if (prevProps.params.categoryId !== params.categoryId) {
      await this.makeFetch();
    }
  }

  async componentDidMount() {
    this.setState({ error: false });
    await this.makeFetch();
  }

  async makeFetch() {
    const { params } = this.props;
    const { category } = await getCategory(params.categoryId);

    category
      ? this.setState({
          chosenCategory: category,
        })
      : this.setState({ error: true });
  }

  render() {
    const { currency, setProduct } = this.props;
    const { chosenCategory, error } = this.state;

    return (
      <MainContainer>
        {chosenCategory && (
          <>
            <CategoryTitle>{chosenCategory.name}</CategoryTitle>
            <ProductList
              category={chosenCategory}
              currency={currency}
              setProduct={setProduct}
            />
          </>
        )}
        {error && <ErrorBoundary />}
        <Outlet />
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    currency: getCurrency(state),
  };
};

export default connect(mapStateToProps)(withRouter(CategoryPage));
