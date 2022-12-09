export const addNote = (noteInput) => {

    let obj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
        body: JSON.stringify(noteInput)
    }


    return (dispatch) => {
        fetch('https://kutabbackenddeploy-production.up.railway.app/api/v1/notes/', obj)
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'ADD_NOTE', note: data })
        })
    }

}