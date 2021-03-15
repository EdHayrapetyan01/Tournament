
export const getDataFromStorage = () => {
  const arrayOfData = localStorage.getItem('tournament');
  return arrayOfData !== null ? JSON.parse(arrayOfData) : []
}

export const setDataToStorage = (value) => {

  const storageArr = getDataFromStorage();
  if (!storageArr.some((item) => item.id === value.id)) {
    storageArr.push(value)
  }
  localStorage.setItem('tournament', JSON.stringify(storageArr));

};
