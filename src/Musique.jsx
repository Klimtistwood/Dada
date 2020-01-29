import React from 'react';
import Scheme from './Scheme';

class Musique extends React.Component {
    state = {
        content: [
            { id: 1, name: "Rap", background: 'linear-gradient(180deg, #b64a1f, #705f59)', comment: "Pourquoi est-il si populaire?", duree: "3:41" },
            { id: 2, name: "Rock", background: "linear-gradient(180deg, #e6a467, #e75050)", comment: "Comment jouer de la guitare", duree: "4:11" },
            { id: 3, name: "Electro", background: "linear-gradient(180deg, #680362, #d112c4)", comment: "Comment faire ces sons avec des machines", duree: "3:41" },
            { id: 4, name: "Classique", background: "linear-gradient(180deg, #ffffff, #000000)", comment: "Jouer du piano", duree: "3:41" },
            { id: 5, name: "Blues", background: "linear-gradient(180deg, #f55c1f,#62311e)", comment: "Ou est-ce apparu?", duree: "3:41" }
        ] ,
        top: [
            { id: 1, name: "Rap", background: 'linear-gradient(180deg, #b64a1f, #705f59)', comment: "Pourquoi est-il si populaire?", img: "https://pngimage.net/wp-content/uploads/2018/06/micro-dessin-png-3.png" },
            { id: 2, name: "Electro", background: 'linear-gradient(180deg, #680362, #d112c4)', comment: "Comment faire ces sons avec des machines", img: "https://i.pinimg.com/originals/09/40/7c/09407cd4dcfd63f26f0106508e766542.png" },
            { id: 3, name: "Rock", background:  "linear-gradient(180deg, #e6a467, #e75050)", comment: "Comment jouer de la guitare", img: "http://bilette70.b.i.pic.centerblog.net/0_f3cd5_5d9ad182_L.png" },
        ],
        categorie : "Musique"
    }
 
    render() {

        return (
            <Scheme content = {this.state.content} top = {this.state.top} categorie = {this.state.categorie}/>
        )
    }
}

export default Musique;