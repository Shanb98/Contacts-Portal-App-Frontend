import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Welcome from "./pages/Welcome"
import NewContact from "./pages/NewContact"
import ViewContacts from "./pages/ViewContacts"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/contacts/new" element={<NewContact/>}/>
      <Route path="/contacts/view" element={<ViewContacts/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;