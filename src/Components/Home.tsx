import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import HomeStatement from './Elements/HomeStatement';
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
    </div>
  );
};

export default Home;
