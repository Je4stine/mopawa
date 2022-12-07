import "./Footer.css";
import { BsWhatsapp, BsGlobe, BsInstagram, BsTwitter} from 'react-icons/bs';
import { FaFacebookF, FaTiktok} from 'react-icons/fa'

const Footer =()=>{
    return (
        <div className="FootCont">
            <div className=" Contact1">
                <div className="Address">
                    <p>Mopawa Software Limited</p>
                    <p>P.O Box 413-00100</p>
                    <p>Nairobi, Kenya</p>
                </div>
                <div className="Whatsapp">
                    <BsWhatsapp color='green' style={{marginRight:10}}/>
                    <p > WhatsApp/Call: 0708999666</p>
                </div>
            </div>
            <hr className=' line'/>
            <div>
                <div className='social'>
                    <BsGlobe color='#fff'/>
                    <p> <a style={{color:'#fff'}} href='https://www.mopawa.co.ke'>www.mopawa.co.ke</a></p>
                    <BsInstagram  color='#fff'/>
                    <p> <a style={{color:'#fff'}} href='https://www.instagram.com/mopawasoftwareke/?igshid=YmMyMTA2M2Y='>mopawasoftwareke</a></p>
                    <FaFacebookF  color='#fff'/>
                    <p> <a style={{color:'#fff'}} href='https://m.facebook.com/Mopawa-Software-Limited-102802029341937/'>Mopawa Software Limited</a></p>
                    <BsTwitter  color='#fff'/>
                    <p> <a style={{color:'#fff'}} href='https://twitter.com/MopawaLtd?t=wZh6LonehCHnxYoKx_EzKw&s=09'>MopawaLtd</a></p>
                    <FaTiktok  color='#fff'/>
                    <p><a style={{color:'#fff'}} href='https://www.mopawa.co.ke'>Mopawa Software Limited</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;