export const SET_ACTIVE_CARD = 'SET_ACTIVE CARD';

export function setActiveIdeaCard(ideaCardName) {
  return {
    type: SET_ACTIVE_CARD,
    ideaCardName
  };
}
