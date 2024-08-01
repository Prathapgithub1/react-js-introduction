// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// //functional Component
// let App = () => {
//     let s1 = {
//         backgroundColor: "blue",
//         color: "black"
//     }
//     return (
//         <div>
//             <h1 style={s1}>Hello Prathap</h1>
//         </div>
//     )
// }

//export default App

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ul>
//                     <li>UserName</li>
//                     <li>Prathap</li>
//                 </ul>
//             </div>
//         )
//     }
// }

// export default App

import Home from './Home'
import React, { Component } from 'react'

class App extends Component {
    render() {
        let Names = ["prathap", "raju", "sampath", "Kraju", "ERaju"]
        return (
            <>
                {
                    Names.map(
                        (n) => {
                            return <Home user={n} />
                        }
                    )
                }
            </>
        )
    }
}

export default App