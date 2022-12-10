export const fetchBooks = () => {
    return (dispatch) => {
        fetch('https://kutabbackenddeploy-production.up.railway.app/api/v1/books')
        .then(resp => resp.json())
        .then(data => {
          dispatch({ type: 'ADD_ALL_BOOKS', books: data })
        })
    }
}