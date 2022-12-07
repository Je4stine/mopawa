import './NavBar.css';
import Logo from '../../assets/MOPAWA.png';

const NavBar =()=>{
    return(
        <div className='NavContainer'>
            <div>
               <a href='/'> <img src={Logo} alt="Logo" className='Logo'/></a>
            </div>
            <div className='title'><h1><a href='/'>MOPAWA SOFTWARE LIMITED</a></h1></div>
            <div style={{ display:"flex"}} className="Links" >
                <a href='/contacts'>Product</a>
                <a href='/'>About Us</a>
                <a href='/contacts'>Contact us</a>
            </div>
           
        </div>
    );
};
export default NavBar;