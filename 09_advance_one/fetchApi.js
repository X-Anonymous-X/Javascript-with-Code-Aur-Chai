// fetch method
// 1st
async function fetchingData() {
    try {
        const response = await fetch('https://api.github.com/users/X-Anonymous-X')
        const data = response.json();
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
fetchingData()

// 2nd
async function fetchingData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
fetchingData()

// using .then and .catch method

fetch('https://api.github.com/users/X-Anonymous-X')
    .then((response) => {
        if(!response.ok || response.status === 404){
            throw new Error('Failed to fetch')
        }
        else{
            return response.json()
        }
    })
    .then((jsonData) => {
        console.log(jsonData)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => console.log('Promise Completed'))