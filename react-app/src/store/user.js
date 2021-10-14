export const GET_USER = 'update/PATCH_UPDATE';


const get_user = (user) => {
    return {
        type: GET_USER,
        payload: user
    }
}


export const getUser = (id) => async (dispatch) => {

    const response = await fetch(`/api/updates/${id}`);


    if (response.ok) {
        const data = await response.json();
        dispatch(get_user(data));
        return response
    }
};

const initialState = {}
const userReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case GET_USER:
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState;
        default:
            return state;
    }
}

export default userReducer;