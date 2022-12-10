export const fetchUser = () => {
    return (dispatch) => {
        fetch('https://kutabbackenddeploy-production.up.railway.app/api/v1/users')
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'ADD_USER', user: data })
        })
    }
}