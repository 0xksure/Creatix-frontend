import { SET_ACTIVE_CARD } from "../Constants";

export default function setActiveIdeaCard(ideaCardName) {
  return {
    type: SET_ACTIVE_CARD,
    ideaCardName
  };
}
