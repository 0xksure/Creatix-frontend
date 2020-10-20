import { useState } from 'react';

function useScrollToElement(elementId: string) {
  const [eid, setEid] = useState(elementId);
  function scrollIntoView() {
    var element = document.getElementById(eid);
    element?.scrollIntoView;
  }

  return [scrollIntoView];
}

export default useScrollToElement;
