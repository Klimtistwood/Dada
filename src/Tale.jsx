import React from 'react';
import Scheme from './Scheme';

class Tale extends React.Component {
    state = {
        content: [
            { id: 1, name: "Le petit prince", background: 'linear-gradient(180deg,#29ABE2, #70AFCA)', comment: "Pour les petits et les grands", duree: "13:41" },
            { id: 2, name: "Babar", background: "linear-gradient(180deg, #70D743, #7FDD63)", comment: "L'éléphant", duree: "8:21" },
            { id: 3, name: "Barbapapa", background: "linear-gradient(135deg, #F35555, #322F2F)", comment: "De toutes les couleurs", duree: "7:51" },
            { id: 4, name: "Lapinou", background: "linear-gradient(180deg, #806047, #514F4E)", comment: "Saute! Saute", duree: "3:41" }
        ] ,
        top: [
            { id: 1, name: "Babar", background: "linear-gradient(180deg, #70D743, #7FDD63)", comment: "L'éléphant", img: "https://vignette.wikia.nocookie.net/disneyjuniorpedia/images/2/2a/Babar_2.png/revision/latest/scale-to-width-down/340?cb=20170322173800" },
            { id: 2, name: "Lapinou", background: "linear-gradient(180deg, #806047, #514F4E)", comment: "Saute ! Saute !", img: "http://bilette70.b.i.pic.centerblog.net/656.png" },
            { id: 3, name: "Le petit prince", background: 'linear-gradient(180deg,#29ABE2, #70AFCA)', comment: "Pour les petits et les grands", img: 'https://www.leostickers.fr/prod_imgs/[SchedaProdotto@2x]Prod_1701__stickers-muraux-enfant-Le-Petit-Prince-et-le-renard.png.aspx' },
        ], 
        categorie : "Histoire"  
    }
 
    render() {

        return (
            <Scheme content = {this.state.content} top = {this.state.top} categorie = {this.state.categorie}/>
        )

    }
}

export default Tale;
