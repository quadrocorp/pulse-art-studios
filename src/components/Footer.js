import { ReactComponent as Icon } from '../additional-stuff/Icon-Full.svg';
import '../styles/Footer.css';

function Footer () {
    return (
        <div id="Footer" className="flexCenter row">
            <Icon />
            <div className='spacer'></div>
            Pulse LLC 2020-2024
        </div>
    )
}

export default Footer;