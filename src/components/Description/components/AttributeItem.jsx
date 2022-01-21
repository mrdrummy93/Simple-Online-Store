import React, { Component } from 'react';
import SizeProductButton from '../styled/SizeProductButton';
import ColorProductButton from '../styled/ColorProductButton';

export default class AttributeItem extends Component {
  render() {
    const {
      attributeItem, activeAttributes, attribute, handleClick,
    } = this.props;
    const isCurrentAttributeActive = activeAttributes[attribute.id] === attributeItem.value;
    const isColorAttribute = attribute.id === 'Color';
    const WrapperComponent = isColorAttribute ? ColorProductButton : SizeProductButton;
    return (
      <WrapperComponent
        attributeItem={attributeItem.value}
        isCurrentAttributeActive={isCurrentAttributeActive}
        onClick={handleClick(attribute.id, attributeItem.value)}
      >
        {!isColorAttribute && attributeItem.value}
      </WrapperComponent>
    );
  }
}
