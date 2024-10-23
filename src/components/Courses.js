import '../styles/Courses.css';
import { ReactComponent as Image} from '../additional-stuff/Template-Image.svg';

function Courses () {
    const courses = [
        {
            number: 1,
            name: 'Digital Artist Express Course',
            description: (
                <>
                    Throughout 1 Month, Pulse will equip you with every possible piece of information you need to drastically improve your digital drawing skills. Any style, any perspective, any character, any pose, any lighting setup—we will ensure you know everything.
                </>
            ),
            time: '1 Month',
            price: '$125 US',
            open_doors_day: '12th November, 8:00 AM – 8:00 PM'
        },
        {
            number: 3,
            name: 'Sculptor Express Course',
            description: (
                <>
                    3 Months to become a digital Michelangelo! Pulse will help you with the basics and advanced features of Cinema 4D, Blender, ZBrush, and Adobe Substance Painter. Also, get your hands on the best material about sculpting, dealing with mesh, and polygons.
                </>
            ),
            time: '3 Months',
            price: '$255 US',
            open_doors_day: '1st November, 12:00 PM – 4:00 PM'
        },
        {
            number: 2,
            name: 'Designer Course',
            description: (
                <>
                    1 Year. In 1 year, Pulse will help you master software such as Figma and Adobe Illustrator. You’ll learn about expressiveness, perspective, composition, and colors.
                </>
            ),
            time: '1 Year',
            price: '$745 US',
            open_doors_day: 'TBA'
        },
        {
            number: 4,
            name: '2D/3D Animation Course',
            description: (
                <>
                    1 Year. Master the combination of 2D and 3D Animation.
                </>
            ),
            time: '1 Year',
            price: '$1245 US',
            open_doors_day: 'TBA'
        }
    ];
    return (
        <div id='coursesSection'>
        <h1 className='largeText Title'>Courses we provide</h1><br/>
        <div id='coursesElement'>
            {courses.map(course => (    
                <div key={course.number} className='coursesSectionGridElement center'>
                    <Image />
                    <h2><b>{course.name}</b></h2>
                    <p>{course.description}</p>
                    <ul>
                        <li><b>Time:</b> {course.time}</li>
                        <li><b>Price:</b> {course.price}</li>
                        <li><b>Open Doors Day:</b> {course.open_doors_day}</li>
                    </ul>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Courses;