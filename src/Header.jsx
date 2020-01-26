import React from 'react';
import Searchbar from './Searchbar';

class Header extends React.Component {

    state = {
        toggleSearchBar: true
    }
    
    render() {
        const profilStyle = {
            margin: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "60vw"
        }

        return (
            <header className="App-header" >
                <div style={profilStyle}>
                    <img style={{ borderRadius: '26px', height: '50px', border: "white solid 2px" }} src="https://picsum.photos/50/50" alt="" />
                    <div >
                        <h1 >Maturin Dupuis</h1>
                        <p style={{ fontSize: "10px", padding: "5px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis. </p>
                    </div>
                    <img className="Header-gear" src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Gear-icon.png" style={{ width: "20px", height: "20px", position: "absolute", top: "20px", right: "10px" }} alt="" />
                </div>
                <Searchbar data={this.state.toggleSearchBar}  />
            </header>
        )
    }
}
export default Header;
