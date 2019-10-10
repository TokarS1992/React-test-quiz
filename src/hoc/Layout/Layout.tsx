import React, { Component } from 'react';

export default class Layout extends Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="App-layout">
                <main className="App-layout-main">
                    { this.props.children }
                </main>
            </div>
        );
    }
}