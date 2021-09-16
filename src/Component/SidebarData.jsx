import React,  { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import prof from"F:/react_mui/assignment/src/Images/prof_img.png";

class SidebarData extends Component  {
  state={
    profileImg:prof
  }
 imageHandler = (e) => {
    const reader = new FileReader();
    console.log(e.target.files)
    reader.onload = () =>{
        if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
}


render(props){
    const {profileImg} = this.state
   

return (

   
 <>
 <div className="d-flex flex-column w-100 ">
        
        <div className="d-flex  justify-content-center w-25 py-4 h-25" id="img_container">
            <label htmlFor="input_photo"><img src={profileImg} type="file"  alt="photo_upload" id="img" /> </label>
            <input type="file" name="image-upload" className="d-none visibility-hidden" id="input_photo" accept="image/*" onChange={(e)=>this.imageHandler(e)} required/>
            
        </div>
        <div className="d-flex justify-content-center "> <div> <h5>{this.props.name} {this.props.lastName}</h5></div> </div>
        <div className="d-flex justify-content-center h-50 align-items-end ">
              <button type="button" className="btn btn-outline-secondary w-75 mb-1" id="button">Secondary</button>
        </div>
  </div>
</>
 

 
)
}

}
export default SidebarData
