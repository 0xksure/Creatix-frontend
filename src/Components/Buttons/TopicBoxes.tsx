import React from 'react';

interface Props {
  topics: string[];
  color: string;
}

const TopicBoxes: React.FC<Props> = ({ topics, color = 'gray' }) => {
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
