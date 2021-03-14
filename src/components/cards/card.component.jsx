import React,{Component} from 'react';
import './card.css'

const card =({data})=> {
   
    
   
   
 
       
        return(
            <div className="card-container">
                <div className="image-container"
                    style={{
                        backgroundImage: `url("${data.links.mission_patch}")` 
                }}
                
                >  </div>
    
             
                <h1 className="card-heading"> { data.mission_name}</h1>
                <h2 className="sub-heading">
                    mission ids <br/>
                    <span className="sub-heading">  { data.mission_id.length==!0 ?  data.mission_id: 'no mission id' }</span>
                </h2>
                <h2 className="sub-heading"> Launch year :  <span className="text"> {data.launch_year }</span>   </h2>
                <h2 className="sub-heading"> Successfull launch :  <span className="text"> {data.launch_success.toString()} </span>   </h2>
                <h2 className="sub-heading"> Land success :  <span className="text"> { data.rocket.first_stage.cores[0].land_success==null?'false':'true'}</span>   </h2>
            </div>
        )


   
}

export default card
