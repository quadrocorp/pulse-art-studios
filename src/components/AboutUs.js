import { ReactComponent as Icon1 } from '../additional-stuff/Sphere.svg';
import { ReactComponent as Icon2 } from '../additional-stuff/Conference.svg';
import { ReactComponent as Icon3 } from '../additional-stuff/Brainstorm.svg';
import '../styles/AboutUs.css';




function Block (props) {
    if (props.number % 2 === 0) {
        return (
            <div className='aboutUsFlexElement flexCenter'>
                <div className='aboutUsImage flexCenter'>{props.image}</div>
                <div className='aboutUsContent flexCenter alignLeft'>
                    <h1 className='largeText'>{props.title}</h1><br/>
                    {props.content}
                </div>
        </div>
        )
    } else {
        return (
            <div className='aboutUsFlexElement flexCenter'>
                <div className='aboutUsContent flexCenter alignRight'>
                    <h1 className='largeText'>{props.title}</h1><br/>
                    {props.content}
                </div>
                <div className='aboutUsImage flexCenter'>{props.image}</div>
        </div>
        )
    }
}

function AboutUs() {
    const AboutUsContent = [
      {
        'number' : 1,
        'image' : <Icon1 />,
        'title' : <>Welcome to the world <br/> full of wonders!</>,
        'content' : <>
            <h3>Here, at <b>Pulse Art Studios</b> we will start/continue your journey as an artist.</h3>
            <br/>
            <ul>
                <li>We founded <b>Pulse</b> to help people become creative and explore their imagination through digital art.</li>
                <li>Whether you are an <b>artist</b>, a <b>designer</b>, or an <b>animator</b>, Pulse will ensure your experience and abilities aren't wasted.</li>
            </ul>
            </>
      },
      {
        'number': 2,
        'image': <Icon2 height='200'/>,
        'title': <>We provide lessons and conferences for people of artistic nature!</>,
        'content': <>
        <p>Wanna improve your knowledge of digital art? Wanna animate, design, sculpt, etc? Here you can get yourself a professional course led by people with 10+ years of practice.</p>
        </>
      },
      {
        'number': 3,
        'image': <Icon3 height='250'/>,
        'title': <>Attend our brainstorms!</>,
        'content': <>Help others or ask for advice to improve an idea!</>
      }
    ];
  
    return (
      <div id='aboutUsSection' className='flexCenter'>
        {AboutUsContent.map((item) => (
          <Block number={item.number} key={item.number} image={item.image} title={item.title} content={item.content} />
        ))}
      </div>
    );
  }

export default AboutUs;