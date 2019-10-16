import { SET_ACTIVE_CARD } from "../Constants";

export function setActiveIdeaCard(ideaCardName) {
  return {
    type: SET_ACTIVE_CARD,
    ideaCardName
  };
}
