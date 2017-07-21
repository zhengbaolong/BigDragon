import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './header'
import ComponentFooter from './footer'
import './header.css'
import './footer.css'


class Index extends React.Component{
  render(){
    return(
      <div>
        <ComponentHeader/>
        <ComponentFooter/>
      </div>
    );
  }
}
ReactDOM.render(<Index/>,document.getElementById('example'));
