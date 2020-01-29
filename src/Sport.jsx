import React from 'react';
import Scheme from './Scheme';

class Sport extends React.Component {
    state = {
        content: [
            { id: 1, name: "Badminton", background: 'linear-gradient(180deg,#8fe667, #a5f8c1)', comment: "Ca se mange ?", duree: "13:59" },
            { id: 2, name: "Basketball", background: "linear-gradient(180deg, #e6a467, #e75050)", comment: "Faire un dunk comme les pros", duree: "9:20" },
            { id: 3, name: "Football", background: "linear-gradient(135deg, #217d99, #09c2fa)", comment: "Droit au but!", duree: "7:51" },
            { id: 4, name: "Natation", background: "linear-gradient(145deg, #679ae6, #e6ce67)", comment: "Nager comme un poisson", duree: "3:41" }
        ] ,
        top: [
            { id: 1, name: "Football", background: "linear-gradient(135deg, #217d99, #09c2fa)", comment: "Droit au but!", img: "https://www.italgreen.fr/computedimage/calcio.i5602-kvdTPTG-w400-l1-n1.png"},
            { id: 2, name: "Basketball", background:  "linear-gradient(180deg, #e6a467, #e75050)", comment: "Faire un dunk comme les pros", img: "https://www.bimago.fr/mediacache/catalog/product/cache/9/4/90749/small_image/370x315/56147ab7d6466a61229698d0ab376dcd/90749_1.png" },
            { id: 3, name: "Natation", background:"linear-gradient(145deg, #679ae6, #e6ce67)", comment: "Nager comme un poisson", img: 'http://nslacydon.fr/v1/wp-content/uploads/2014/01/1.png' },
        ],
        categorie : "Sport"
    }
    
    render() {

        return (
            <Scheme content = {this.state.content} top = {this.state.top} categorie = {this.state.categorie}/>
        )

    }
}

export default Sport;