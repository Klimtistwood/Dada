import React from 'react';
import { Player, ControlBar, PlayToggle } from 'video-react';
import { createPortal } from 'react-dom';
import YouTube from 'react-youtube';

import Scheme from './Scheme';

class Animals extends React.Component {
    state = {
        content: [
            { id: 1, name: "Les animaux d'afrique", background: 'linear-gradient(180deg, #5a5f5d, #062c1c)', comment: "Pourquoi sont-ils si gros?", duree: "3:41" },
            { id: 2, name: "Les serpents", background: "linear-gradient(180deg, #1e6246, #0efb98)", comment: "Comment se déplacent-ils?", duree: "4:11" },
            { id: 3, name: "Les oiseaux", background: "linear-gradient(135deg, #217d99, #09c2fa)", comment: "Comment volent-ils", duree: "3:41" },
            { id: 4, name: "Les félins", background:"linear-gradient(180deg, #e6a467, #e75050)", comment: "Existe-t-il d'autres catégories de chat", duree: "3:41" },
        ] ,
        top: [
            { id: 1, name: "Les félins", background: "linear-gradient(180deg, #e6a467, #e75050)", comment: "Existe-t-il d'autres catégories de chat", img: "https://i.pinimg.com/originals/d2/f6/ad/d2f6ad532391fd9750ef337a71690bc8.png" },
            { id: 2, name: "Les animaux d'afrique", background: 'linear-gradient(180deg,#5a5f5d, #062c1c)', comment: "Pourquoi sont-ils si gros?", img: "http://purplefolie.p.u.pic.centerblog.net/9k9ortsi.png" },
            { id: 3, name: "Les oiseaux", background: "linear-gradient(135deg, #217d99, #09c2fa)", comment: "Comment volent-ils", img: "http://zezete2.z.e.pic.centerblog.net/fed66b2f.png" },
        ],
        categorie : "Animaux"
    }
 
    render() {

        return (
            <Scheme content = {this.state.content} top = {this.state.top} categorie = {this.state.categorie}/>
        )
    }
}

export default Animals;