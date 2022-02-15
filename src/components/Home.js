import React from 'react'
import styled from 'styled-components';
import Section from './Section';
function Home() {
    return ( 
        <Container>
            <Section 
             title = "Model S"
             description = "Order Online for Touchless Delivery"
             backgroundImg = "model-s.jpg" 
             leftBtnText= "Custom order"
             rightBtnText = "Existing Inventory"
            />
             <Section
            title = "Model X"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-x.jpg"
            leftBtnText= "Custom order"
            rightBtnText = "Existing Inventory"
            />
            <Section
            title = "Model 3"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-3.jpg"
            leftBtnText= "Custom order"
            rightBtnText = "Existing Inventory"
            />
           
            <Section
            title= "Model Y"
              description = "Order Online for Touchless Delivery"
            backgroundImg = "model-y.jpg"
            leftBtnText= "Custom order"
            rightBtnText = "Existing Inventory"
            />
             <Section
            title = "Loewst Cost Solar Panels in America"
            description = "Monkey-black guarantee"
            backgroundImg = "solar-panel.jpg"
            leftBtnText= "Order Now"
            rightBtnText = "Learn more"
            />
             <Section
            title = " Solar for New Roofs"
            description = "Solar Roof Costs Less Than a New Roof Plus Solar Pannels"
            backgroundImg = "solar-roof.jpg"
            leftBtnText= "Order Now"
            rightBtnText = "Learn more"
            />
            <Section
            title = "Accessories" 
            backgroundImg = "accessories.jpg"
            leftBtnText= "Shop Now"
            
            />
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
`

export default Home;

