import React from 'react';

class Searchbar extends React.Component {
    state = {
        toggleSearchBar: this.props.data
    }

    onClickAddHandle = () => {
        this.setState({ toggleSearchBar : !this.state.toggleSearchBar });
        console.log(this.state.toggleSearchBar)
    }

    render() {
        const searchStyle = {
            padding: "6px 10px",
            marginTop: "8px",
            marginRight: "16px",
            marginBottom: '10px',
            background: "white",
            fontSize: "17px",
            border: "none",
            cursor: "pointer",
            borderRadius: "25px",
            textAlign: "center",
            boxShadow: "box-shadow: 0px -2px 11px -1px rgba(23,18,18,0.75)"
        }

        if (this.state.toggleSearchBar === true) {
            return (
                <div>
                    <button onClick={this.onClickAddHandle}>ISSI</button>
                    <form id="search-bar" action="">
                        <input style={searchStyle} type="text" placeholder="Rechercher un podcast" />
                    </form>
                </div>
            )
        } else if(this.state.toggleSearchBar === false){
            return <button onClick={this.onClickAddHandle}>ISSI</button>
        }

    }
}

export default Searchbar;