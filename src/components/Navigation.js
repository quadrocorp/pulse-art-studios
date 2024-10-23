import { useEffect, useState } from 'react';
import { ReactComponent as Icon } from '../additional-stuff/Icon-Full.svg';
import '../styles/Navigation.css';

function Navigation () {
    const [heights, setHeights] = useState([]);
    
    useEffect(() => {
      const calculateHeights = () => {
        const sectionIds = ['aboutUsSection', 'coursesSection', 'speakersSection', 'becomeCreativeSection'];
        const heights = sectionIds.map(id => {
          const element = document.getElementById(id);
          return element ? element.offsetTop : 0;
        });
        setHeights(heights);
      };
  
      calculateHeights();
      window.addEventListener('resize', calculateHeights);
  
      return () => {
        window.removeEventListener('resize', calculateHeights);
      };
    }, []);
  
    const jumpTo = (id) => {
      const index = ['aboutUsSection', 'coursesSection', 'speakersSection', 'becomeCreativeSection'].indexOf(id);
      if (index !== -1) {
        const targetPosition = heights[index] - 150;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    };

    return (
        <div className='flexCenter' id='navPan'>
            <span className='flexCenter' id='icon-wrapper'><Icon /></span>
            <span className='spacer'></span>
            <button className="navBtn" onClick={() => jumpTo('aboutUsSection')}><span>About Pulse</span></button>
            <button className="navBtn" onClick={() => jumpTo('coursesSection')}><span>Lessons</span></button>
            <button className="navBtn" onClick={() => jumpTo('speakersSection')}><span>Speakers</span></button>
            <span id='contactButton' onClick={() => jumpTo('becomeCreativeSection')}>BECOME CREATIVE!</span>
        </div>
    )
}

export default Navigation;