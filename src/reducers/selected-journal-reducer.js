import * as c from './../actions/ActionTypes';

const initialState = {
  selectedJourn: null,
  selectedProj: null
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
      case c.ADD_SELECTED_PROJECT:
        return Object.assign({}, state, {
          selectedProj: id
        });
      case c.REMOVE_SELECTED_PROJECT:
        return Object.assign({}, state, {
          selectedProj: null
        });
      // default:
      //   return state;
  }
  return state;
};