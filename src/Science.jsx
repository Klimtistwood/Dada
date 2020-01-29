import React from 'react';
import Scheme from './Scheme';

class Science extends React.Component {
    state = {
        content: [
            { id: 1, name: "Système Solaire", background: 'linear-gradient(180deg,#3c1d55, #70AFCA)', comment: "La grandeur de l'espace", duree: "13:00+" },
            { id: 2, name: "Les bonbons", background: "linear-gradient(180deg, #db23cc, #7FDD63)", comment: "Le sucre c'est bon mais pas trop", duree: "9:20" },
            { id: 3, name: "Le ciel", background: "linear-gradient(135deg, #217d99, #09c2fa)", comment: "Pourquoi le ciel est bleu", duree: "7:51" },
            { id: 4, name: "La croissance", background: "linear-gradient(145deg, #2D5C5B, #e6ce67)", comment: "Pourquoi grandit on ?", duree: "3:41" }
        ] ,
        top: [
            { id: 1, name: "La croissance", background: "linear-gradient(145deg, #2D5C5B, #e6ce67)", comment: "Pourquoi grandit-on?", img: "https://www.stickpng.com/assets/images/5a5539f8edcceab89d2a2ddc.png"},
            { id: 2, name: "Les bonbons", background: "linear-gradient(180deg, #db23cc, #7FDD63)", comment: "Le sucre c'est bon mais pas trop", img: "https://www.stickpng.com/assets/images/580b57fbd9996e24bc43c0c6.png" },
            { id: 3, name: "Système Solaire", background: 'linear-gradient(180deg,#3c1d55, #70AFCA)', comment: "La grandeur de l'espace", img: 'https://cdn.pixabay.com/photo/2017/09/12/21/07/solar-system-2743669_960_720.png' },
        ],
        categorie : "Science"
    }
    
    render() {

        return (
            <Scheme content = {this.state.content} top = {this.state.top} categorie = {this.state.categorie}/>
        )

    }
}

export default Science;