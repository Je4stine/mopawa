import React from 'react';
import './Homepage.css';
import Logo from '../assets/MOPAWA.png';
import Charger from '../assets/charger.jpg';
import Icon1 from '../assets/icon-1.png';
import Icon2 from '../assets/icon-2.png';
import { BsWhatsapp, BsGlobe, BsInstagram, BsTwitter} from 'react-icons/bs';
import { FaFacebookF, FaTiktok} from 'react-icons/fa'


function HomePage() {
  return (
    <div className='background'>
        <div className=' Nav' style={{ display:'flex', alignItems:'center'}}>
            <div className='header'>
                <img className='logo' src={Logo} alt="Logo" style={{ height:150}}/>
            </div>
            <div className='power' style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <h1 style={{color:"yellow" }}>ALWAYS POWERED</h1>
                <img src={Charger} alt="chargers"/>
                <p style={{ fontSize:22, color:'#fff' }}>IOS/Micro/Type-C</p>
            </div>
        </div>
        <div className='rect' style={{ margin:'auto', width:"40%", height:80, borderColor:'#fff', borderWidth:1, borderStyle:'solid', borderRadius:20, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:10 }}>
            <h2 style={{color:'#fff'}}>Portable PowerBank Rental Services</h2>
        </div>
        <div className='how' style={{ margin:'auto', display:'flex', flexDirection:'column', width:"40%", justifyContent:'center', alignItems:'center'}}>
            <h2 style={{color:'yellow'}} >How To Access Always Powered By Mopawa</h2>
        </div>

        <div className='depo'>
            <div>
                <div style={{ display:'flex', flex:1 }}>
                    <img src={Icon1} alt="Phone Icon" style={{ height:70 }}/>
                    <div className='howto'>
                        <p style={{ fontSize:18,color:'#fff' }}>First make a refundable DEPOSIT of Kes <br/> 999 via M-Pesa</p>
                        <hr className=' line'/>
                        <p style={{ fontSize:18,color:'#fff' }}>Service Access is Kes 100 for 1.5 Hrs.</p>
                        <hr/>
                        <p style={{ fontSize:18,color:'#fff' }}>Additional use will cost you Kes 30 for half <br/> an hour Your balance will be remitted <br/> automatically once you return the<br/> Powerbank</p>
                    </div>
                </div>
                

            </div>
            <div style={{display: 'flex'}}>
                <img src={Icon2} alt="Phone Icon" style={{ height:70 }}/>
                <div className='howto2'>
                    <p style={{ fontSize:18,color:'#fff' }}>Go to Lipa Mpesa Select PAYBILL option <br/> and enter Business No 444333</p>
                    <hr/>
                    <p style={{ fontSize:18,color:'#fff' }}>Enter the No placed on any of the <br/> powerbanks as Account Number.</p>
                </div>

            </div>
        </div>
        <div  className='details'>
            <p className='contact' > Mopawa Software Limited</p>
            <div className='contactSection'>
                <BsWhatsapp color='green'/>
                <p  className='contact'> WhatsApp/Call: 0708999666</p>
            </div>
        </div>
        <hr/>
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
  )
};

export default HomePage;