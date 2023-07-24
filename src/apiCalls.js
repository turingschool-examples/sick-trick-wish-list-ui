export const getTricks = async () => {
  const response = await fetch('http://localhost:3001/api/v1/tricks');
  const data = await handleError(response);
  console.log(data);
  return data;
};

const handleError = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error(`HTTP Error: ${response.status} -- Please try again`);
  }
};