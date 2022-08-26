/** @format */

import { PureComponent } from "react";
import {
  AttributionList,
  VariationList,
  VariationBtn,
  AttributeName,
  VariationEl,
} from "./ProductAttributions.styled";

export default class ProductAttributions extends PureComponent {
  
  filterAttributions(chosenAttributes, item, attribute) {
    return chosenAttributes.filter(
      (attr) => attr.value === item.value && attr.name === attribute.name
    );
  };

  render() {
    const { attributes, chosenAttributes, onClick, size, page } = this.props;
    return (
      <AttributionList>
        {attributes.map((attribute) => (
          <li key={attribute.id}>
            <AttributeName size={size}>{attribute.name}:</AttributeName>
            <VariationList>
              {attribute.items.map((item) => (
                <VariationEl
                  key={item.id}
                  attType={attribute.type}
                  chosenAttributes={this.filterAttributions(
                    chosenAttributes,
                    item,
                    attribute
                  )}
                >
                  <VariationBtn
                    attType={attribute.type}
                    type="button"
                    value={item.value}
                    chosenAttributes={this.filterAttributions(
                      chosenAttributes,
                      item,
                      attribute
                    )}
                    size={size}
                    onClick={() => {
                      page === "product"
                        ? onClick({
                            name: attribute.name,
                            value: item.value,
                          })
                        : onClick(item, attribute);
                    }}
                  >
                    {attribute.type !== "swatch" && item.value}
                  </VariationBtn>
                </VariationEl>
              ))}
            </VariationList>
          </li>
        ))}
      </AttributionList>
    );
  }
}
