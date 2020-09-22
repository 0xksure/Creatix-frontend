import React from "react";

const TopicBoxes = ({ topics, color = "gray" }) => {
  return (
    <div className="topic-boxes">
      {topics.map((topic, idx) => {
        return (
          <div className={`topic-box ${color} `} key={idx}>
            <div className="p topic-content">{topic}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TopicBoxes;
