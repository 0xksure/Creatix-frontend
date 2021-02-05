import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';

interface Props {
  combo: string[];
}

const useKeyListener = (props: Props): boolean => {
  const { combo } = props;
  const [keyPresses, setKeyPresses] = useState([]);
  const [comboSuccess, setComboSuccess] = useState(false);

  useEffect(() => {
    function onKeyup(e) {
      setKeyPresses(keyPresses.concat(e.key));
      if (isEqual(combo, keyPresses)) {
        setComboSuccess(true);
      }
    }
    window.addEventListener('keyup', onKeyup);
  });

  setTimeout(function () {
    setKeyPresses([]);
    setComboSuccess(false);
  }, 5000);

  return comboSuccess;
};

export default useKeyListener;
