import React, { Component } from 'react';

export default class FetchRandomUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            person: null,
        };
    }


    async componentDidMount() {
        const url = 'https://api.randomuser.me/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], isLoading: false });
    }

    render() {
        return (
            <div>
            {this.state.isLoading || !this.state.person ? (
                <div>loading...</div> 
            ) : (
                <div>
                    <div>{this.state.person.name.first}</div>
                </div>
            )}
            </div>
        );
    }
}
