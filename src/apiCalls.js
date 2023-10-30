function getAllTricks() {
    return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
        if(!response.ok) {
            throw new Error("Oops! Something went wrong, please try again.")
        } else {
            return response.json()
        }
    }  
    )
}

export { getAllTricks }