export const fetchData = () => {
  fetch(`http://localhost:3001/api/v1/tricks`)
    .then(res => {
      if(res.ok) {
        res.json();
      } else {
        throw new Error(res);
      }
    })
}