/** @format */
import { Link } from "react-router-dom";
import { NavLink } from "./Navigation.styled";
import { ReactComponent as ReactLogo } from "images/mainLogo.svg";
import { PureComponent } from "react";

export default class Navigation extends PureComponent {
  render() {
    const { categories } = this.props;
    return (
      <>
        <nav>
          {categories.map((category) => {
            return (
              <NavLink key={category.name} to={`category/${category.name}`}>
                {category.name.toUpperCase()}
              </NavLink>
            );
          })}
        </nav>
        <Link to="cart">
          <ReactLogo width="2.5vw" height="2.5vw" />
        </Link>
      </>
    );
  }
}
