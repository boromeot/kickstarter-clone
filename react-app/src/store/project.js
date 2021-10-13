import { POST_COMMENT, DELETE_COMMENT, PATCH_COMMENT } from "./comment";
import { CREATE_UPDATE, DELETE_UPDATE, PATCH_UPDATE } from "./update"
const GET_PROJECT = 'project/getProject';

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
      return newState;
    case POST_COMMENT:
      newState = Object.assign({}, state);
      newState.comments.push(action.payload);
      return newState;
    case PATCH_COMMENT:
      newState = Object.assign({}, state);
      for (let i = 0; i < newState.comments.length; i++) {
        if (newState.comments[i].id === action.payload.comment_id) {
          newState.comments[i] = action.payload.data;
          break;
        }
      }
      return newState;
    case DELETE_COMMENT:
      newState = Object.assign({}, state);
      newState.comments = newState.comments.filter(comment => {
        return comment.id !== action.payload;
      })
      return newState
    case DELETE_UPDATE:
      newState = Object.assign({}, state);
      // console.log(action.payload)
      newState.updates = action.payload
    case CREATE_UPDATE:
      newState = Object.assign({}, state);
      // console.log(action.payload)
      newState.updates = action.payload
      return newState;
    case PATCH_UPDATE:
      newState = Object.assign({}, state);
      // console.log(action.payload)
      newState.updates = newState.updates.filter((update) => update.id !== action.payload)
      return newState;
    default:
      return state;
  }
}

export default projectReducer;
