export const deleteNote = (noteId) => {

    return (dispatch) => {
        fetch(`https://kutabbackenddeploy-production.up.railway.app/api/v1/notes/${noteId}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'DELETE_NOTE', note: data })
        })
    }

}