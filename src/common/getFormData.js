const getFormData = (data) => {
  const formData = new FormData();

  for (let key in data) {
    formData.append(key, data[key]);
  }

  return formData;
};

export default getFormData;
