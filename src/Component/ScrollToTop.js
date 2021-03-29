import React, { 
  useState, 
  useEffect, 
} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const ScrollToTop = (props) => {
  useEffect(()=>{
    document.addEventListener("scroll", function(e) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          setVisible(true)
      } else {
          setVisible(false)
      }
    })
  })
  const [is_visible, setVisible] = useState(false)
  const scrollToTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className="scroll-to-top pointer">
      {is_visible && (
        <div onClick={() => scrollToTop()} className="border border-light bg-primary scrollTopBtn">
          <FontAwesomeIcon icon={faChevronUp} className="text-light"/>
        </div>
      )}
    </div>
  );
}

export default ScrollToTop