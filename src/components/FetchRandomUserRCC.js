// import React, { Component } from 'react';

// export default class FetchRandomUser extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isLoading: true,
//             person: null,
//         };
//     }


//     async componentDidMount() {
//         const url = 'https://api.randomuser.me/';
//         const response = await fetch(url);
//         const data = await response.json();
//         this.setState({ person: data.results[0], isLoading: false });
//         console.log(data)
//     }

//     render() {
//         return (
//             <div>
//             {this.state.isLoading || !this.state.person ? (
//                 <div>loading...</div> 
//             ) : (
//                 <div>
//                     <div>Name: {this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</div>
//                     <img src={this.state.person.picture.large} alt='' />
//                 </div>
//             )}
//             </div>
//         );
//     }
// }
