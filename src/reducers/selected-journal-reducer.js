import * as c from './../actions/ActionTypes';

const initialState = {
  selectedJourn: null,
  selectedProj: null,
  selectedNav: null,
  navClicked: false
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
      case c.ADD_SELECTED_NAV:
        return Object.assign({}, state, {
          selectedNav: id
        })
      case c.TOGGLE_NAV_CLICK:
        return Object.assign({}, state, {
          selectedNav: id,
          navClicked: !state.navClicked
        })
      // default:
      //   return state;
  }
  return state;
};