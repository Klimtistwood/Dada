import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header'

class HomePage extends React.Component {
    state = {
        cat : [
            { id : 1, category : "Sport", url: "https://www.saintcyr78.fr/wp-content/uploads/2018/12/Sports-e1544731833709.png"},
            { id : 2, category : "Musique", url: "https://www.johanna-awakening.com/wp-content/uploads/2016/05/intro-musique.jpg"},
            { id : 3, category : "Recette", url: "https://static.cuisineaz.com/400x320/i148291-gateau-licorne-au-thermomix.jpeg"},
            { id : 4, category : "Histoire", url: "https://www.bcc63.fr/wp-content/uploads/2017/09/Histoire-Interclubs.jpg"},
            { id : 5, category : "Science", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1fza5RLK9A4EFrSJ8xkBt0r-5In56T2CH3XpwKSutVTJr0c0Y"},
            { id : 6, category : "Animaux", url: "https://www.creavea.com/produits/56604-p/tampon-animaux-empreintes-de-pas-75-x-26-cm-p.jpg"}
        ]
    }
    render() {
        return (

            <div style={{ backgroundColor: "#FDA213" }}>
                <Header />
                <div className="Home">
                    <Home categories={this.state.cat}/>
                </div>
                <div className="Top-Listen">
                    <h1>Les plus écoutés</h1>
                    <Home categories={['Essai', 'Terst', 'terztz']} />
                </div>
            </div>
        );
    }
}

export default HomePage;