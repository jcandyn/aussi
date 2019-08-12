import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
// import Footer from "./Footer"
import Main from "./components/Main"
// import NavbarInstance from './NavbarInstance';
import Search from "./components/Search"


class App extends React.Component {
  render() {
    return (
      <div className="entire_div container">
        {/* <NavbarInstance/> */}
        <Search/>
    <Header />
    <Main />
    {/* <Footer /> */}
    </div>
    )
  }
}

export default App;
