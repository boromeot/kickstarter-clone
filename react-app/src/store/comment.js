export const postComment = (project_id, user_id, description) => async dispatch => {
  const response = await fetch('/api/comments/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      project_id,
      user_id,
      description,
    })
  });

  if (response.ok) {
    const data = await response.json();
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}
