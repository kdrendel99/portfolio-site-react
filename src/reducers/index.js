import journalReducer from "./selected-journal-reducer";
import projectReducer from "./selected-project-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  selectedJourn: journalReducer,
  selectedProj: projectReducer
});

export default rootReducer;