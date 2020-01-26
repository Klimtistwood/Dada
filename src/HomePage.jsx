import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header'

class HomePage extends React.Component {
    render() {
    const cat = ['Sport', 'Musique', 'Recette', 'Histoire', 'Science', 'Animaux'];

        return (
            
            <div style={{backgroundColor : "#FDA213"}}>
                <Header/>
                <div className="Home">
                    <Home categories={cat} cName='Category' state={this.props.page} />
                </div>
                <div className="Top-Listen">
                    <h1>Les plus écoutés</h1>
                    <Home categories={['Essai', 'Terst', 'terztz']} cName='Category' />
                </div>
            </div>
        );
    }
}

export default HomePage;