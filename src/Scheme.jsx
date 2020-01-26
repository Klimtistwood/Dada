import React from 'react';
import "./Content.css";
import Content from './Content'
import SlideShow from './Slideshow';
import { Link } from 'react-router-dom';


class Scheme extends React.Component {
    state = {
        content: this.props.content ,
        top: this.props.top ,
        categorie : this.props.categorie        
    }
 
    render() {

        return (
            <div className="App-Content">
                <p>
                    <Link to="/">
                    <img className="arrow" src="https://image.flaticon.com/icons/png/512/271/271218.png" alt="" />
                    </Link>
                    {this.state.categorie}
                    <img className="gear" src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Gear-icon.png" alt=""/>
                </p>
                <div>
                    <SlideShow data={this.state.top}/>
                </div>
                <div className="Style-Flex">
                    <Content data={this.state.content} />
                </div>
            </div>
        )

    }
}

export default Scheme;
