import selectedProjectReducer from '../../reducers/selected-project-reducer';
import * as c from '../../actions/ActionTypes.js';
describe('selectedProjectReducer', () => {
  let action;

  const defaultState = {
    selectedProj: null
  };

  const projList = {
    1: {
      name: "Clouds",
      image: 'clouds',
      imgDes: "an image of clouds",
      projDate: "01/01/01",
      shortDes: "Short description",
      description: "Long description",
      id: 1
    },
    2: {
      name: "Alaska",
      image: 'alaska',
      imgDes: "an image of alaska.",
      projDate: "01/01/01",
      shortDes: "Short description",
      description: "Long description",
      id: 2
    }
  }


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectedProjectReducer(defaultState, { type: null })).toEqual(
      {
        selectedProj: null
      });
  });
  test('Should successfully update selectedProject state slice to contain the id of the Project entry passed.', () => {
    action = {
      type: c.ADD_SELECTED_PROJECT,
      id: 2
    };
    expect(selectedProjectReducer(defaultState, action)).toEqual({
        selectedProj: 2
    });
  });
  test('Should successfully update selectedProject state slice to null if Project is deselected.', () => {
    action = {
      type: c.REMOVE_SELECTED_PROJECT,
    };
    expect(selectedProjectReducer(defaultState, action)).toEqual({
        selectedProj: null
    });
  });
});