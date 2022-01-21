import React, { Component } from 'react';
import AttributeItem from './AttributeItem';
import ButtonsWrapper from '../styled/ButtonsWrapper';
import AttributeName from '../styled/AttributeName';

export default class Attribute extends Component {
  render() {
    const { attribute, activeAttributes, handleClick } = this.props;
    return (
      <div>
        <AttributeName>
          {attribute.name}
          :
        </AttributeName>
        <ButtonsWrapper>
          {attribute.items.map((attributeItem) => (
            <AttributeItem
              activeAttributes={activeAttributes}
              handleClick={handleClick}
              attributeItem={attributeItem}
              attribute={attribute}
              key={attributeItem.id}
            />
          ))}
        </ButtonsWrapper>
      </div>
    );
  }
}
