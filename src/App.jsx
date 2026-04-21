import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./components/Home/home.jsx";
import BookList from "./components/BookList/BookList.jsx";
import "./App.css";
import Header from "./components/Header/header.jsx";
import { useEffect, useState } from "react";
import { CircularProgress } from "react-loader-spinner";
import { CgEnter } from "react-icons/cg";

function App() {
  const [loader,setLoader]=useState(true)
  useEffect(()=>{
    const timer=setTimeout(()=>setLoader(false),1000)
    return ()=>clearTimeout(timer)
  },[])

   if (loader) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px", display:"flex", justifyContent:"center", alignItems:"center", height:"100vh" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Router>
      <div className="navbar-component">
        <Header />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          {/* <Route path="/books/:id" element={<BookDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
