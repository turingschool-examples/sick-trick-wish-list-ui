export const fetchData = () => {
  return fetch(`http://localhost:3001/api/v1/tricks`)
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error(res);
      }
    })
}