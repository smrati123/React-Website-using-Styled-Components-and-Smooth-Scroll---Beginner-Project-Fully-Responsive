import React from 'react';
import Icon1 from '../../images/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-2542.jpg';
import Icon2 from '../../images/istockphoto-1096969570-612x612.jpg';
import Icon3 from '../../images/download.jpeg';
import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard
    ,ServicesIcon,ServicesH2,ServicesP } from './ServicesElements';

const Services = () => {
    return (
       <ServicesContainer id= "services">
           <ServicesH1>Our Services</ServicesH1>
           <ServicesWrapper>
               <ServicesCard>
                   <ServicesIcon src = {Icon1}/>
                   <ServicesH2>Reduce Expences</ServicesH2>
                   <ServicesP>
                       We Help reduse ypur fees and increase your overall revenue.
                   </ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src = {Icon2}/>
                   <ServicesH2>Virtual Offices</ServicesH2>
                   <ServicesP>
                       You can access our platfoem any time any where.
                   </ServicesP>
               </ServicesCard>
               <ServicesCard>
                   <ServicesIcon src = {Icon3}/>
                   <ServicesH2>Premium Benefits</ServicesH2>
                   <ServicesP>
                      Unlock our special members card that returns 5% cash back.
                   </ServicesP>
               </ServicesCard>
           </ServicesWrapper>
       </ServicesContainer>
    )
}

export default Services
