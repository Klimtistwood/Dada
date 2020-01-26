import React from 'react';
import Scheme from './Scheme';

class Recipe extends React.Component {
    state = {
        content: [
            { id: 1, name: "Spaghetti", background: 'linear-gradient(180deg, #E0D222, #DB770A)', comment: "A l'italienne", duree: "3:41" },
            { id: 2, name: "Burger", background: "linear-gradient(180deg, #A3231A, #6A1A14)", comment: "Fait maison", duree: "4:11" },
            { id: 3, name: "Donuts", background: "linear-gradient(180deg, #F37D7D, #FF5E5E)", comment: "Bien sucré", duree: "3:41" },
            { id: 4, name: "Pain", background: "linear-gradient(180deg, #836147, #A8734A)", comment: "Croustillant", duree: "3:41" },
            { id: 5, name: "Cupcakes", background: "linear-gradient(180deg, #836147, #A8734A)", comment: "Cuisine un Cupcake", duree: "3:41" }
        ] ,
        top: [
            { id: 1, name: "Cupcakes", background: 'linear-gradient(180deg, #E0D222, #DB770A)', comment: "Cuisine un Cupcake!", img: "https://i.pinimg.com/originals/5e/5d/03/5e5d032d5068f312df9df406d2b17df3.png" },
            { id: 2, name: "Spaghetti", background: 'linear-gradient(180deg, #E0D222, #DB770A)', comment: "A l'italienne", img: "https://www.marie.fr/content/uploads/TC_SPAGHETTI_BOLO_600X225.png" },
            { id: 3, name: "Burger", background: "linear-gradient(180deg, #A3231A, #6A1A14)", comment: "Fait maison", img: 'https://www.espacepizza51.fr/produit/1125_228.png' },
        ],
        categorie : "Recette"
    }
 
    render() {

        return (
            <Scheme content = {this.state.content} top = {this.state.top} categorie = {this.state.categorie}/>
        )
    }
}

export default Recipe;