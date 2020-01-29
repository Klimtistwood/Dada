import React from 'react';

class Home extends React.Component {
    state = {
        x: this.props.categories,
    };

    handleSetPage = content => {
        window.location.assign(content);
    }

    render() {
        const element = this.state.x.map((content) =>
            <div key={content.id} className={"Category"} style={{ backgroundImage: 'url("' + content.url + '"', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                onClick={() => this.handleSetPage(content.category)} >
                {content.category}
            </div>

        );

        return (
            <div className="Home">
                {element}
            </div>
        );
    }
}

export default Home;