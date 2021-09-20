import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import selectedProjectReducer from '../../reducers/selected-project-reducer';
import selectedJournalReducer from '../../reducers/selected-journal-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      selectedProj: null,
      selectedJourn: null
    });
  });
  test('Check that initial state of selectedProjectReducer matches root reducer', () => {
    expect(store.getState().selectedProj).toEqual(selectedProjectReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of selectedJournalReducer matches root reducer', () => {
    expect(store.getState().selectedJourn).toEqual(selectedJournalReducer(undefined, { type: null }));
  });

});