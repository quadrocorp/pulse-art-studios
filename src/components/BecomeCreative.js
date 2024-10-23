import '../styles/BecomeCreative.css';
import { ReactComponent as Icon } from '../additional-stuff/Icon-Full.svg';

function BecomeCreative () {
    return (
        <div id='becomeCreativeSection' className='flexCenter row'>
            <div className='becomeCreativeElement flexCenter alignLeft column'>
                <Icon />
                <h1 className='largeText'>We are your way into <br/> proffesional digital art!</h1>
                <p>Just share your name/nickname and your email <br/>
                Our team will send you the information you may require.</p>
            </div>
            <div className='becomeCreativeElement flexCenter alignCenter column'>
                <input type="text" className="input" name='name' placeholder='Your name/username'/>
                <input type="text" className="input" name='email' placeholder='john@example.com'/>
                
                <label className='container'>
                    <input type='checkbox'/>
                    You agree with our <b>Terms of Service</b> and <b>EULA</b>
                    <span className="checkmark"></span>
                </label>
                <button type='submit'>Send</button>
            </div>
        </div>
    )
}

export default BecomeCreative;