import React,{component} from 'react';

class Home extends React.Component{
 render(){
     return(
         <div>

          <br/><br/><br/><br/>
	 
   <section id="s-team" class="section"/>
      
     <br/><br/><br/>

     <div class="b-skills">
       <div class="container">
         <h2>SCORE CARD</h2>
       
           

         <div class="row">
           <div class="col-xs-15 col-sm-6 col-md-2">
             <div class="skill-item center-block">
               <div class="chart-container">
                 <div class="chart " data-percent="92" data-bar-color="#23afe3">
                   <span class="percent" data-after="%">92</span>
                 </div>
               </div>	
               

               <p>MATHS</p>
             </div>
           </div>
           
         


           <div class="col-xs-15 col-sm-6 col-md-2">
             <div class="skill-item center-block">
               <div class="chart-container">
                 

                 
                 <div class="chart " data-percent="20" data-bar-color=" #00ffff">
                   <span class="percent" data-after="%">20</span>
                 </div>
               </div>
             

               <p>SCIENCE</p>
             </div>
           </div>

           <div class="col-xs-15 col-sm-6 col-md-2">
             <div class="skill-item center-block">
               <div class="chart-container">
                 <div class="chart " data-percent="78" data-bar-color="#a7d212">
                   <span class="percent" data-after="%">78</span>
                 </div>
               </div>

               <p>PHYSSICS</p>
             </div>
           </div>

           <div class="col-xs-15 col-sm-6 col-md-2">
             <div class="skill-item center-block">
               <div class="chart-container">
                 <div class="chart " data-percent="95" data-bar-color="#ff4241">
                   <span class="percent" data-after="%">95</span>
                 </div>
               </div>

               <p>CHEMISTRY</p>
             </div>
           </div>

           <div class="col-xs-15 col-sm-6 col-md-2">
             <div class="skill-item center-block">
               <div class="chart-container">
                 <div class="chart " data-percent="65" data-bar-color="#edc214">
                   <span class="percent" data-after="%">65</span>
                 </div>
               </div>

               <p>BIOLOGY</p>
             </div>
           </div>
         </div>
       </div>
     </div>
  
      
   


 <br/><br/><br/>
 
 
         </div>
         
     )
 }

}
export default Home;