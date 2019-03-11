import React, {Component} from 'react';

import '../../styles/main/main.css';
import '../../styles/main/main-menu.css';

class Main extends Component {

  render() {
    return (
      <div className='container'>
        <div className='content'>
          <ul>
            <li>
              <div> <a id='main' href='/login'>Entrar</a> </div>
            </li>
            <li>
              <div> <a href='#news'>News</a> </div>
            </li>
            <li id='li_logo'> <div> <a id='logo' href='/'></a> </div> </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Main;