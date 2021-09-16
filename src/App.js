import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Nav from "./Component/Navbar";
import DetailedForm from "./Component/DetailedForm.jsx";

const App = () =>{

return(
 
        <BrowserRouter>
            <DetailedForm/>
            <Switch>
                <Route path="/" />
            </Switch>
        </BrowserRouter>

);
}

export default App;