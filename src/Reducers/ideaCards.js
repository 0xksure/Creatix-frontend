import { SET_ACTIVE_CARD } from './Actions';

const INITIAL_STATE = {};

export function setActiveCard(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ACTIVE_CARD':
      return {
        ...state,
        activeIdeaCardName: action.ideaCardName
      };
    default:
      return state;
  }
}
