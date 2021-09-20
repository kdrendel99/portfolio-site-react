import * as c from './../actions/ActionTypes';

const initialState = {
  selectedJourn: null
}

export default (state = initialState, action) => {
  const { id } = action;
  switch (action.type){
    case c.ADD_SELECTED_JOURNAL:
      return Object.assign({}, state, {
        selectedJourn: id
      })
    case c.REMOVE_SELECTED_JOURNAL:
      return Object.assign({}, state, {
        selectedJourn: null
      })
  }
  return state;
};