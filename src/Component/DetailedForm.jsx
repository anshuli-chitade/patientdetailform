import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-number-input/style.css'
import SidebarData from "./SidebarData";
import "./Navbar.css";
import { useForm } from 'react-hook-form';




const DetailedForm = () => {
  const { register, handleSubmit } = useForm();



  const onSubmitButton = (data) => {
    console.log(data)
  }

 const [name, setName] = useState("");
 const [lastName, setlastName] = useState("");

 const inputEventName = (event) => {
   setName(event.target.value)
 }
 const inputEventlastName = (event) => {
  setlastName(event.target.value)
}


  return (
    <>
      <div className="row register m-3 " id="main_container" >
        <form onSubmit={handleSubmit(onSubmitButton)}>
          <div className="form-group row  py-4  " id="container" >
            <div className=" col-md d-flex ms-2 bg-white" id="section1">
              <SidebarData name={name} lastName={lastName} required />

            </div>

            <div className="col-10 bg-white ms-3 me-2" id="section2">
            
                <div className="d-flex flex-row align-items-center mt-5 ">
                  <span className="badge badge-pill rounded-circle" style={{color:"rgb(240, 9, 136)", border:"solid rgb(240, 9, 136)"}} > 1 </span>
                  <h4 style={{color:"rgb(240, 9, 136)"}}>Patient Details</h4>
                  <div style={{ backgroundColor: 'pink', height: 2, flex: 1, }} />
                </div>
                
              
              <div className="form-group row mt-2  ms-5">
                <div className="row">
                  <label htmlFor="inputtext" className="col-sm-2 col-form-label">Patient Name</label>
                  <div className="col-sm-3">
                    <input type="text" className="form-control w-75" id="firstName" placeholder="First Name" name="firstName" {...register("firstName")} required onChange={inputEventName} />
                  </div>
                  <div className="col-sm-3">
                    <input type="text" className="form-control w-75" id="lastName" placeholder="Last Name" name="lastName" {...register("lastName")} required onChange={inputEventlastName}/>
                  </div>
                </div>

                <div className="col">
                  <div className="form-group row py-3">
                    <label htmlFor="inputgender" className="col-sm-4 col-form-label">Select Gender</label>
                    <div className="col-sm-2 form-check form-check-inline">
                      <input type="radio" className="form-check-input" id="gen_male" value="male" {...register("gender")} required />
                      <label className="form-check-label" htmlFor="gen_male">Male</label>
                    </div>
                    <div className="col-sm-2 form-check form-check-inline">
                      <input type="radio" className="form-check-input" id="gen_female" value="female"  {...register("gender")} required />
                      <label className="form-check-label" htmlFor="gen_female">Female</label>
                    </div>
                    <div className="col-sm-2 form-check form-check-inline">
                      <input type="radio" className="form-check-input" id="gen_other" value="other" {...register("gender")} required />
                      <label className="form-check-label" htmlFor="gen_other">Other</label>
                    </div>
                  </div>

                  <div className="form-group row py-3">
                    <label htmlFor="Maraital_status" className="col-sm-4 col-form-label">Maraital status</label>
                    <div className="col-sm-2 form-check form-check-inline">
                      <input type="radio" className="form-check-input" id="inputMarried" value="Married" {...register("Maraital_status")} required />
                      <label className="form-check-label" htmlFor="inputMarried" >Married</label>
                    </div>
                    <div className="col-sm-2 form-check form-check-inline">
                      <input type="radio" className="form-check-input" id="inputUnmarried" value="Unmarried" {...register("Maraital_status")} required />
                      <label className="form-check-label" htmlFor="inputUnmarried" >Unmarried</label>
                    </div>
                  </div>

                  <div className="form-group row py-3">
                    <label htmlFor="phone" className="col-sm-4 col-form-label">Mobile Number</label>
                    <div className="col-sm-2">
                      <input type="tel" id="phone" {...register("Mobile_num")} required />
                    </div>
                  </div>
                </div>

                <div className="col ">
                  <div className="form-group row py-3">
                    <label htmlFor="inputdate" className="col-sm-4 col-form-label">Date of Birth</label>
                    <div className="col-sm-2 form-date form-date-inline">
                      <input type="date" className="form-date-input" id="inputdate" {...register("date")} required />
                    </div>
                  </div>

                  <div className="form-group row py-3 ">
                    <label htmlFor="occupation" className="col-sm-4 col-form-label">Ocuupation</label>
                    <div className="col-sm-2 form-check form-check-inline">
                      <select id="occupation" {...register("occupation")} required>
                        <option   >Select</option>
                        <option   >Proffesor</option>
                        <option  >Student</option>
                        <option  >Engineer</option>
                        <option >Doctor</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group row py-3">
                    <label className="col-sm-4 col-form-label" htmlFor="email">Email Address</label>
                    <div className="col-sm-2 form-check form-check-inline">
                      <input type="email" className="form-email-input" id="email" {...register("Email_id")} required />
                    </div>
                  </div>
                </div>

              </div>

              <div className="form-group row py-4 mt-4 " >
                <div className="d-flex flex-row align-items-center">
                  <span className="badge badge-pill rounded-circle" style={{color:"rgb(240, 9, 136)", border:"solid rgb(240, 9, 136)"}}> 2 </span>
                  <h4 style={{color:"rgb(240, 9, 136)"}}>Communication Details</h4>
                  <div style={{ backgroundColor: 'pink', height: 1, flex: 1, }} />
                </div>
              </div>


              <div className=" form-group d-flex flex-row  ms-5">
                <div className="col " id="com_detailcontain">
                  <div className="d-flex flex-row" >
                    <div className="col-sm-4 col-form-label" >
                      <label htmlFor="">Temporary Address</label>
                    </div>

                    <div className="  d-flex flex-column " >
                      <div className="" >
                        <input type="text" placeholder="Line 1" className="form-control w-75" id="" {...register("Temporary_add")} required />
                      </div>
                      <br></br>
                      <div className="">
                        <input type="text" placeholder="Line 2" className="form-control w-75" id="" {...register("Temporary_add")} required />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className=" d-flex flex-row" >
                    <div className="col-sm-4 col-form-label">
                      <label htmlFor="" >Permanent Address</label>
                    </div>

                    <div className="d-flex flex-column">
                      <div className="form-check">
                        <input type="text" placeholder="Line 1" className="form-control w-75" id=""  {...register("Permanent_add")} required />
                      </div>
                      <br></br>
                      <div className="form-check ">
                        <input type="text" placeholder="Line 2" className="form-control w-75" id=""  {...register("Permanent_add")} required />
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <hr></hr>
              <button type="submit" className="btn float-end m-2 me-5 w-25" style={{color:"#fff", background:" rgb(240, 9, 97)"}}>Add</button>
            </div>

          </div>


        </form>
      </div>






    </>

  );
}


export default DetailedForm;