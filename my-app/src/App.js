import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Header"
// import Footer from "./Footer"
import Main from "./Main"
// import NavbarInstance from './NavbarInstance';
import Search from "./Search"


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
