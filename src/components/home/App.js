import React, { Component } from "react";
import Header from './Header';
import Top from './Top'
// import Main from './Main'
// import Form from "./form";
import CustomInput from "./CustomInput";
import Footer from './Footer';
// import List from './List'

class App extends Component {
   
  render() { 
    return (
      <div>
        <Header list='3 Terbaik'/>
        <Top/>
        <CustomInput/>
        {/* <Form/> */}
        {/* <Main menuMakanan={[
                {
                    nama: 'Mie Ayam ++',
                    harga: 10000
                },
                {
                    nama: 'Bakso',
                    harga: 9000
                },
                {
                    nama: 'Mie Ayam Bakso',
                    harga: 19000
                },
                {
                    nama: 'Bakso Biasa',
                    harga: 12000
                },
            ]}/> */}
        {/* <Main/>     */}
        {/* <List/> */}
        <Footer name='Makanan Nusantara'/>
      </div>
    );
  }
}
 
export default App;


