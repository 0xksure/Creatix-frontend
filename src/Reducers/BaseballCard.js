const initialState = {
  baseballStats: [
    {
      keyId: 1212,
      name: "Some name",
      title: "Some title",
      skills: [
        {
          skill: "Figma",
          level: 3
        },
        {
          skill: "UI",
          level: 2
        },
        {
          skill: "CSS",
          level: 1
        }
      ],
      interests: ["Some", "Thing"]
    }
  ]
};

export default function BaseballCard(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
