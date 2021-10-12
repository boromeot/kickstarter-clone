import

const GET_PROJECT = 'project/getProject'

const get_project = (project) => {
  return {
    type: GET_PROJECT,
    payload: project,
  };
}

export const getProject = (projectId) => async dispatch => {
  const response = await fetch(`/api/projects/${projectId}`);
  const data = await response.json();
  dispatch(get_project(data));
  return response
}

const projectReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_PROJECT:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState
    default:
      return state;
  }
}

export default projectReducer;
