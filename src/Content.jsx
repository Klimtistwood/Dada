import React from 'react';
// import "./css";

class Content extends React.Component {
    state = {
        contents: this.props.data,
    }
    render() {

        const elements = this.state.contents.map((content) =>
            <div className="Display-Articles" key={content.id}>
                <div className="Display-Above"  style={{ backgroundImage: content.background }}>
                    <div className="Style-Name">
                        {content.name}
                    </div>
                    <div className="Style-Comment">
                        {content.comment}
                    </div>
                </div>
                <div className="Display-Under">
                    <div className="Under-Name">
                        {content.name}
                    </div>

                    <div className="Under-Duree">
                       | Durée {content.duree}
                    </div>
                </div>
                
            </div>
            
        )
        return (
            elements
        )
    }
}

export default Content;
