// import React from 'react';
import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      { this.props.children }
    </div>
  );
}*/
class App extends Component{
	render(){
		return (
			<div className="App">
		      { this.props.children }
		    </div>
		);
	}
}

export default App;
