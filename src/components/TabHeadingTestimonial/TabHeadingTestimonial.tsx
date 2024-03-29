
import {
    StyledTestimonialContent, /*StyledTestimonialContentContainer,*/ StyledTestimonialDescription,

} from "./TabHeadingTestimonial.styles.ts";
import {StyledTab, StyledTabTitle} from "../TabPage/TabPage.styles.ts";


const TabHeadingTestimonialTab=()=>{
    return (
       <>
           <StyledTab>
<StyledTabTitle>TESTIMONIAL FROM OUR CLIENT
</StyledTabTitle>
     {/*      <StyledTestimonialContentContainer>*/}
               <StyledTestimonialContent>
                   <StyledTestimonialDescription>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   </StyledTestimonialDescription>
                   </StyledTestimonialContent>
     {/*      </StyledTestimonialContentContainer>*/}
               </StyledTab>

       </>
    )
};

export default TabHeadingTestimonialTab;
