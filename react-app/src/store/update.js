const CREATE_UPDATE = 'update/CREATE_USER';
const DELETE_UPDATE = 'update/DELETE_USER';

const create_update = (update) => {
    return {
        type: CREATE_UPDATE,
        payload: update,
    };
}

const delete_update = (message) => {
    return {
        type: DELETE_UPDATE,
        payload: message
    }
}


export const createUpdate = (body) => async (dispatch) => {

    const response = await fetch(`/api/updates/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(create_update(data));
        return response
    }
};

export const deleteUpdate = (body) => async (dispatch) => {
    const response = await fetch(`/api/updates/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(delete_update(data))
        return data
    }
}




export default function updateReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case CREATE_UPDATE:
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState;
        case DELETE_UPDATE:
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState;
        default:
            return state;
    }
}
