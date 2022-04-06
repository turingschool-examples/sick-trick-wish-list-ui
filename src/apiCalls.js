const fetchTricks = {
    getTrickData() {
        return fetch('http://localhost:3001/api/v1/tricks')
            .then(response => {
                if(!response.ok) {
                    throw new Error("Unable to retrieve data")
                } else {
                    return response.json()
                }
            });
    }
}

export default fetchTricks;