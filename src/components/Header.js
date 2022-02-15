import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import AOS from 'aos';
function Header() {
      
    const [burgerState, SetBurgerState] = useState(false);
    const cars = useSelector(selectCars);
   
    AOS.init();
    return (
        <div data-aos = {"fade-down"}  data-aos-delay="4000" data-aos-duration="4000">
       <Container>
       
       <a>
           <img src="/images/logo.svg" alt="" /> 
       </a>
       <Menu>
           {cars && cars.map((car,index) => (
               <a key={index} href="#"> {car}</a>  
           ))}
          
            
       </Menu>
       <RightMenu>
           <a href="#">Shop</a>
           <a href="#">Tesla Account</a>
           <CustomMenu onClick={() => SetBurgerState(true)} />
       </RightMenu>
    <BurgerNav show={burgerState} >
        <CloseWrapper>
        <CustomClose onClick={() => SetBurgerState(false)}/>
        </CloseWrapper>
        
        {cars && cars.map((car,index) => (
              <li key={index}> <a  href="#"> {car}</a> </li> 
           ))}

       <li><a>Existing Inventory</a></li> 
       <li><a>Used Inventory</a></li>    
       <li><a>Trade-in </a></li> 
       <li><a>Cybertruck</a></li> 
       <li><a>Roadmaster</a></li> 
       <li><a>Semi</a></li> 
       <li><a>Charging</a></li> 
       <li><a>Power</a></li> 
       <li><a>Utillities</a></li> 
       <li><a>Test Drive</a></li> 
      
       
    </BurgerNav>
       </Container>
       </div>
    )
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
      font-weight: 600;
       text-transform: uppercase;
       padding: 0 10px;
       flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
      display: none;
  }
`
const RightMenu = styled.div`
   display: flex;
   align-items: center;
  a{
      font-weight: 600;
       text-transform: uppercase;
       margin-right: 10px;
      
  }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer ;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
  transition: transform 0.2s ease-in ease-out;

  li{
      padding: 15px 0 ;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      a{
          font-weight: 600;
      }
  }
`
const CustomClose = styled(CloseIcon)`
 cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
 
`
export default Header;
