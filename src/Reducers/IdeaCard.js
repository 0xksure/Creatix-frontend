import { SET_ACTIVE_CARD } from "../Constants";

const INITIAL_STATE = {};

export default function IdeaCard(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ACTIVE_CARD:
      return {
        ...state,
        activeIdeaCardName: action.ideaCardName
      };
    default:
      return state;
  }
}
