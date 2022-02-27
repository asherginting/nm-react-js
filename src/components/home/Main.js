import React, { Component } from 'react'
import menuMakanan from './lib/Food'



class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: 'Menu Makanan',
            title2: 'Menu Minuman',
            inputValue: '',
            inputKota: '',
            // menuMakanan: [
            //     {
            //         nama: 'Mie Ayam',
            //         harga: 10000
            //     },
            //     {
            //         nama: 'Bakso',
            //         harga: 9000
            //     },
            //     {
            //         nama: 'Mie Ayam Bakso',
            //         harga: 19000
            //     },
            //     {
            //         nama: 'Bakso Biasa',
            //         harga: 12000
            //     },
            // ]
        }
        this.rubahData = this.rubahData.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    // rubahData(){
    //     this.setState({title: 'Pilih Makanan'})
    // }

    // rubahData(){
    //     this.setState((state, props)=> {
    //         return {title: 'Pilih Menu Makanan',
    //                 title2: 'Pilih Menu Minuman'
    //     }
    //     })
    // }

    rubahData(){
        this.setState((state, props)=> {
            return {
                title: state.title2,
                title2: state.title,
            }
        })
    }

    handleChange(value, e){
        this.setState({ [value]: e.target.value})
        // this.setState({inputValue: e.target.value})

        //Penulisan Arrow Function
        // const eventTarget = e.target.value
        // this.setState((state, props) => {
        //     return {
        //         inputValue: eventTarget
        //     }
        // })


        // console.log(e.target.value);
    }


    render() { 
        return (
            <div>
                <h3>{this.state.title}</h3>
                <h2>{this.state.title2}</h2>
                <button onClick={this.rubahData} >Rubah Data</button>

                <br />
                <br />
                {/* <input type='text' value={this.state.inputValue} onChange={this.handleChange} placeholder='nama' /> */}

                <input type='text' value={this.state.inputValue} onChange={e => this.handleChange('inputValue', e)} placeholder='nama' />
                
                {/* <input type='text' value={this.state.inputKota} placeholder='kota' onChange={this.handleChange} /> */}

                <input type='text' value={this.state.inputKota} placeholder='kota' onChange={e => this.handleChange('inputKota', e)} />

                {menuMakanan.map((value, index)=> {
                    console.log(value)
                    console.log(index)
                    return (
                        <div key={index}>
                            <p>No. {index + 1}</p>
                            <p>Nama Makanan : {value.nama}</p>
                            <p>Harga : {value.harga}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}
 
export default Main;
