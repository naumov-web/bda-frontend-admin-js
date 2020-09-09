export default (items, selectItemId) => {
  const result = [];

  items.forEach((item) => {
    result.push({
      value: item.id,
      label: item.name,
      isSelected: item.id === selectItemId
    });
  });

  return result;
};