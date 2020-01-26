import React from 'react';

class Home extends React.Component {
    state = {
        x : this.props.categories
    };

    handleSetPage = cat => {
        window.location.assign(cat);
    }

    render() {
        const catStyle = {
            backgroundImage : "url('https://picsum.photos/144/100/')",
            backgroundSize : 'cover',
            backgroundRepeat : 'no-repeat'
        }
        const state = this.state.x.slice();
        const category = state.map((cat, id) =>
            <div style={catStyle} className={"Category " + cat} key={id} onClick={() => this.handleSetPage(cat)}>
                {cat}
            </div>
        );
        return (
            <div className="Home">
                {category}
            </div>
        );
    }
}

export default Home;