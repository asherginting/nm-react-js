import React from 'react'

// const Top = () => {
//     function handlePesan(){
//         alert('Halaman Top Tampil')
//     }
//     return <a href='/' onClick={handlePesan}> Halaman Top </a>
// }

// const Top = () => {
//     const handlePesan = () => {
//         alert('Halaman Top Tampil')
//     }

//     return (
//         <a href='/' onClick={handlePesan}>
//             Halaman Top
//         </a>
//     )
// }
// export default Top

// Parameters
const Top = () => {
    const handlePesan = (value, e) => {
        e.preventDefault() //tidak melakukan reload di browser
        alert('Halaman Top Tampil')
        alert(value)
    }

    return (
        <a href='/' onClick={(e)=> handlePesan('Pesan dari Top', e)}>
            Halaman Top
        </a>
    )
}
export default Top
