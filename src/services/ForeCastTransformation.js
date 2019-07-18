export const transformForecast = data => {
  return data.list.reduce((obj, item) => {
    const newItemKey = item.dt_txt.split(' ')[0];

    if (obj[newItemKey]) {
      obj[newItemKey].push(item);
    } else {
      obj[newItemKey] = [];
    }

    return obj;
  }, {});
};