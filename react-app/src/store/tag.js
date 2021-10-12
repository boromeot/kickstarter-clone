const GET_TAGS = 'tag/getTags'

const get_tags = (tags) => {
  return {
    type: GET_TAGS,
    payload: tags,
  };
}

export const getTags = () => async dispatch => {
  console.log("---------------665------------")
  console.log(get_tags())
  const response = await fetch('/api/tags/');
  const tags = await response.json();
  console.log(tags)
  dispatch({type: GET_TAGS, payload: tags})
}

const tagReducer = (state = {}, action) => {
  let newState;
  console.log(action)
  switch (action.type) {
    case GET_TAGS:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState
    default:
      return state;
  }
}

export default tagReducer;
