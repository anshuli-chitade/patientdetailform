import React, { Component } from 'react';

import "./Navbar.css";
import img from "F:/react_mui/assignment/src/Images/p.jpg";

import { Badge } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';




 class Navbar extends Component {
    state={
        profileImg:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }
     imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                this.setState({profileImg: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    render(){
        const {profileImg} = this.state

  return (
    <div className="main_nav">
        
      <div className="nav">
            <div className="img-holder">
                <img src={profileImg} type="file" name="picture" alt="photo_upload" id="img" />
            </div>
            <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler}/>

      </div>

     
        <div className="container" >
<div  class="row register">
    <div class="col-sm-3">
       </div>
       <div class="col-sm-6 reg">

       <form class="form-horizontal hr">
          <div class="form-group">
          <label class="control-label col-sm-4"> name</label>
          <div class="col-sm-8">
              <input type="text" class="form-control" id="uname"/>
          </div>
          </div>
       </form>
       </div>
       </div>
      

 
<div class="row">
<div class="col">
<label for="html">Select gender</label>
</div>
<div class="col form-check form-check-inline">

  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">male</label>
</div>
<div class="col form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">female</label>
</div>
<div class="col form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label class="form-check-label" for="inlineRadio3">other</label>
</div>
<div class="col">
<label for="birthday" id="birth">Date</label>
</div>
<div class="col">
<input type="date" id="birthday" class="css" name="birthday"></input>
</div>
</div><br></br>

<div class="row">
<div class="col">
<label for="html">Mariatal status</label>
</div>
<div class="col form-check form-check-inline">

  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Married</label>
</div>
<div class="col form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Unmarried</label>
</div>

</div><br></br>




  <label for="cars" class="cars">Occupation:</label>
  <select name="cars" id="cars">
    <option value="volvo">Proffesor</option>
    <option value="saab">Student</option>
    <option value="opel">Engineer</option>
    <option value="audi">Doctor</option>
  </select><br></br>

  <label for="css"> Mobile Number</label>
    <input type="mobile" id="javascript" class="css" name="fav_language" />

  <label for="css" id="javas"> Email</label>
    <input type="email" id="javascr" class="css"  name="fav_language" />
  
  <div style={{display:"flex",flexDirection: 'row', alignItems:'center'}}>
    <Badge style={{background:"red", borderRadius:"10px", width:"20px", textAlign:"center", alignItems:"center"}}>2 </Badge>
    <h3>Communication Details </h3>
    <div style={{backgroundColor: 'black', height: 2, flex: 1, }} />
</div>

  <label for="html">Temporary Address</label>
  <input type="text" class="css" name="fav_language" /><br></br>
  <input type="text" class="css" name="fav_language" /> 

  <label for="html">Permanent Address</label>
  <input type="text" class="css" name="fav_language" /><br></br>
  <input type="text" class="css" name="fav_language" /> 
     
        
      </div>
     
    </div>
  );
    }
}

export default Navbar;