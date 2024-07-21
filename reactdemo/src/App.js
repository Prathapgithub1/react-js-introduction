// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";

//functional Component
// let App = () => {
//     return (
//         <div>
//             <h1>Hello Prathap</h1>
//         </div>
//     )
// }

// export default App

class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>UserName</li>
                    <li>Prathap</li>
                </ul>
            </div>
        )
    }
}

export default App