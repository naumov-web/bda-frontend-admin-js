export default (items, selectedItemId) => {
  const result = [];

  items.forEach((item) => {
    result.push({
      value: item.id,
      label: item.name,
      isSelected: item.id === selectedItemId
    });
  });

  return result;
};

export const getSelectedItem = (items, selectedItemId) => {
  for(let i = 0, len = items.length; i < len; i++) {
    if (items[i].id === selectedItemId) {
      return {
        value: items[i].id,
        label: items[i].name
      };
    }
  }
};