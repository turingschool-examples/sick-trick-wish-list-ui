export const fetchData = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error(res);
      }
    })
}

export const postData = (newTrick) => {
  return fetch('http://localhost:3001/api/v1/tricks', {
    method: "POST",
    body: JSON.stringify({
      stance: newTrick.stance, 
      name: newTrick.name, 
      obstacle: newTrick.obstacle, 
      tutorial: newTrick.tutorial
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(res.ok) {
      return res.json()
    } else {
      console.log(res)
      throw new Error(res)
    }
  })
  .then(data => console.log(data))
  .catch(error =>  console.log(error));
}