const CREATE_UPDATE = 'session/SET_USER';

const create_update = (update) => {
    return {
        type: CREATE_UPDATE,
        payload: update,
    };
}


export const createUpdate = (body) => async (dispatch) => {

    const response = await fetch(`/api/updates/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    console.log(body)

    if (response.ok) {
        const data = await response.json();
        dispatch(create_update(data));
        return response
    }
};




export default function updateReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case CREATE_UPDATE:
            newState = Object.assign({}, state);
            newState = action.payload
        default:
            return state;
    }
}