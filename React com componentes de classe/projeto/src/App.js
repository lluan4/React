import React from 'react';
import './App.css';
import Main from './components/Main';

// Errado
// export default function App() {
//   return (
//     <h1>Hello World!</h1>
//     <p>lorem< ipsum/p>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <p>lorem</p>
//     </div>
//   );
// }

export default function App() {
  return <Main />;
}
