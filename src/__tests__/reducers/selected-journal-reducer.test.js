import selectedJournalReducer from '../../reducers/selected-journal-reducer';
import * as c from '../../actions/ActionTypes.js';
describe('selectedJournalReducer', () => {
  let action;

  const defaultState = {
    selectedJourn: null
  };

  const journList = {
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
    expect(selectedJournalReducer(defaultState, { type: null })).toEqual(
      {
        selectedJourn: null
      });
  });
  test('Should successfully update selectedJournal state slice to contain the id of the journal entry passed.', () => {
    action = {
      type: c.ADD_SELECTED_JOURNAL,
      id: 2
    };
    expect(selectedJournalReducer(defaultState, action)).toEqual({
        selectedJourn: 2
    });
  });
  test('Should successfully update selectedJournal state slice to null if journal is deselected.', () => {
    action = {
      type: c.REMOVE_SELECTED_JOURNAL,
    };
    expect(selectedJournalReducer(defaultState, action)).toEqual({
        selectedJourn: null
    });
  });
});