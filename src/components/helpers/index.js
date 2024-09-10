export const saveStorage = (key, data) => {
  const dataArray = Array.isArray(data) ? data : [data];
  localStorage.setItem(key, JSON.stringify(dataArray));
};

export const getStorage = (key) => {
  const data = localStorage.getItem(key);
  const parsedData = JSON.parse(data);
  return Array.isArray(parsedData) ? parsedData : [];
};
