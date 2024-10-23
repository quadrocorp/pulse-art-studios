import '../styles/Speakers.css';
import { ReactComponent as Image} from '../additional-stuff/Template-Image-Circle.svg';
import { ReactComponent as TelegramIcon} from '../additional-stuff/telegram_app.svg';



function TGButton(props) {
    return (
        <button className='tgButton flexCenter'><div><TelegramIcon /></div><a href={props.href}>Visit Channel</a></button>
    )
}


function Speakers () {
    const speakers = [
        {
            'number': 1,
            'name': 'RoadyKluuutz',
            'image': <Image/>,
            'description': <>A famous web-designer, worked on such projects as ZooTube and PawFlix.</>,
            'li1': 'The guy we give the most difficult cases to.',
            'li2': '8 Years of professional teamwork experience.',
            'href': 'https://t.me/qc_fb'
        },
        {
            'number': 2,
            'name': 'soma',
            'image': <Image/>,
            'description': <>Our new shiny star. She’ll tell how exactly to work with colors, composition, shadows, light and… a lot… a lot more! She’s a professional digital artist for a reason.</>,
            'li1': 'Drawn academy drawings for ages.',
            'li2': '12 Years as a digital artist.',
            'href': 'https://t.me/qc_fb'
        },
        {
            'number': 3,
            'name': 'P1xel',
            'image': <Image/>,
            'description': <>A renowned animator known for bringing characters to life with fluid motion and captivating storytelling.</>,
            'li1': 'Created award-winning animations for major studios.',
            'li2': '10 Years of experience in animation and motion graphics.',
            'href': 'https://t.me/qc_fb'
        },
        {
            'number': 4,
            'name': 'VoxelVirtuoso',
            'image': <Image/>,
            'description': <>A master 3D artist who can turn any concept into a stunning, lifelike 3D model.</>,
            'li1': 'Worked on high-profile video games and films.',
            'li2': '9 Years of experience in 3D modeling and texturing.',
            'href': 'https://t.me/qc_fb'
        },
        {
            'number': 5,
            'name': 'ClayER',
            'image': <Image/>,
            'description': <>An exceptional 3D sculptor who can mold digital clay into breathtaking art.</>,
            'li1': 'Sculpted iconic characters for popular franchises.',
            'li2': '11 Years of experience in digital sculpting.',
            'href': 'https://t.me/qc_fb'
        },
        {
            'number': 6,
            'name': 'DiDynamo',
            'image': <Image/>,
            'description': <>A versatile 3D designer who specializes in creating immersive environments and detailed objects.</>,
            'li1': 'Contributed to groundbreaking VR and AR projects.',
            'li2': '7 Years of experience in 3D design and visualization.',
            'href': 'https://t.me/qc_fb'
        }
    ]
    
    return (
        <div id='speakersSection'>
        <h1 className='largeText Title'>Our Speakers</h1><br/>
        <div id='speakersElement'>
            {speakers.map(speaker => (    
                <div key={speaker.number} className='speakersSectionGridElement center'>
                    {speaker.image}
                    <h2><b>{speaker.name}</b></h2>
                    <p>{speaker.description}</p>
                    <ul>
                        <li>{speaker.li1}</li>
                        <li>{speaker.li2}</li>
                    </ul>
                    <TGButton href={speaker.href}/>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Speakers;