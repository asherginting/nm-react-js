import React, { Component } from 'react'

class Image extends Component {
    state = {  } 
    render() { 
        return (
            <img src={this.props.linkgambar} alt='gambar-makanan' width='500' />
        );
    }
}
 
export default Image;