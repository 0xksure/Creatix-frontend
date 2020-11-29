import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import HomeStatement from './Elements/HomeStatement';
import Features from './Elements/Features';
import FeatureCard from 'Components/Elements/FeatureCard';
import { content } from 'Components/textContent';
const Home: React.FC = () => {
  const modalIsOpen = useSelector((state) => state.Modal.modalIsOpen, shallowEqual);
  const blurClass = modalIsOpen ? 'blur-on-modal' : '';
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  });
  return (
    <div className={`grid-container-full ${blurClass}`}>
      <HomeStatement statement={content.statement} subStatement={content.subStatement} />
      <Features />
      <FeatureCard />
    </div>
  );
};

export default Home;
