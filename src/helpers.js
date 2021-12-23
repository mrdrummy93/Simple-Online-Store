export const getDefaultAttributesValues = (product) => {
  const defaultAttributeValues = {};
  product.attributes.forEach(attribute => {
    defaultAttributeValues[attribute.id] = attribute.items[0].value;
  });
  return defaultAttributeValues;
};

export const getUniqId = (product) => {
  const activeAttributeValues = Object.values(product.activeAttributes);
  return `${product.id}_${activeAttributeValues.join('_')}`;
};
