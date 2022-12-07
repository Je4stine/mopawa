import './About.css';
import Charger from '../../assets/charger.jpg';
import Icon1 from '../../assets/icon-1.png';
import Icon2 from '../../assets/icon-2.png';

const About =()=>{
    return(
        <div>
            <div className='power' style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <h1 >ALWAYS POWERED</h1>
                <img src={Charger} alt="chargers"/>
                <p style={{ fontSize:22, }}>IOS/Micro/Type-C</p>
            </div>

            <div className='rect' style={{ margin:'auto', width:"40%", height:80, borderColor:'#000', borderWidth:1, borderStyle:'solid', borderRadius:20, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:10 }}>
                <h3 style={{ textAlign:'center'}}>Portable PowerBank Rental Services</h3>
                </div>
                <div className='how' style={{ margin:'auto', display:'flex', flexDirection:'column', width:"40%", justifyContent:'center', alignItems:'center', marginTop:10}}>
                    <h3 style={{ textAlign:'center'}} >How To Access Always Powered By Mopawa</h3>
            </div>

            <div className='depo'>
            <div>
                <div style={{ display:'flex', flex:1 }}>
                    <img src={Icon1} alt="Phone Icon" style={{ height:70 }}/>
                    <div className='howto'>
                        <p style={{ fontSize:18, }}>First make a refundable DEPOSIT of Kes <br/> 999 via M-Pesa</p>
                        <hr className=' line'/>
                        <p style={{ fontSize:18, }}>Service Access is Kes 100 for 1.5 Hrs.</p>
                        <hr/>
                        <p style={{ fontSize:18,}}>Additional use will cost you Kes 30 for half <br/> an hour Your balance will be remitted <br/> automatically once you return the<br/> Powerbank</p>
                    </div>
                </div>
                

                </div>
                <div style={{display: 'flex'}}>
                    <img src={Icon2} alt="Phone Icon" style={{ height:70 }}/>
                    <div className='howto2'>
                        <p style={{ fontSize:18, }}>Go to Lipa Mpesa Select PAYBILL option <br/> and enter Business No 444333</p>
                        <hr/>
                        <p style={{ fontSize:18,}}>Enter the No placed on any of the <br/> powerbanks as Account Number.</p>
                    </div>

                </div>
            </div>



        </div>
    )
};

export default About;