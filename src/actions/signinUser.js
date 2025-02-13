export const signinUser = (userInput) => {
    let user = {
        username: userInput
    }

    let obj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
        body: JSON.stringify(user)
    }

    return (dispatch) => {
        fetch('https://kutabbackenddeploy-production.up.railway.app/api/v1/users/', obj)
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'ADD_USER', user: data })
        })
    }

}