import React, { Component } from 'react'
import './header.css'

const judul = {
  color: 'orange',
  backgroundColor: 'blue',
  marginTop: '100px'
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daftar: 'Daftar Makanan Nusantara',
            dataList: this.props.list,
            statusRendering: true
        }
        this.handlePesan = this.handlePesan.bind(this)
        this.handleElement = this.handleElement.bind(this)
    }
    
    handlePesan(value, e){
        e.preventDefault() //tidak melakukan reload di browser
        alert('halaman header')
        alert(value)
    }

    componentDidMount(){
        console.log('Jalan: ComponentdidMount') //akan dijalankan setelah render
    }

    handleElement(){
        this.setState((state, props)=> {
            return {statusRendering: !state.statusRendering}
        })
    }

    render() { 
        console.log('Jalan: Render')
        console.log(this.state.statusRendering)

        return (
            <div>
                {this.state.statusRendering === true ? (
                    <div>
                        <h1 style = {{color: 'red', backgroundColor: 'orange', marginTop: '100px'}}>Selamat Datang</h1>
                        <h2 style={judul} >Silahkan pilih Makanan</h2>
                    </div>
                    
                ) : (
                    <div>
                        <h1 id='judulkedua'>Selamat Tinggal</h1>
                        <h2 className='judulinfo'>Jangan lupa datang kembali</h2>
                    </div>
                    
                )}
                <button onClick={this.handleElement}>change</button>
            </div>
        )
        // return (
        //     <div>
        //         <h2>Makanan Khas Indonesia</h2>
        //         <p>{this.state.daftar}</p>
        //         {/* <p>{this.props.list}</p> */}
        //         <p>{this.state.dataList}</p>
        //         <a href='/' onClick={(e)=> this.handlePesan('Pesan dari Header', e)}>Halaman Header</a>
        //     </div>
        // );
    }
}
 
export default Header;