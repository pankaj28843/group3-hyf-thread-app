import React from 'react';
import Flip from 'react-reveal/Flip';

class SideBar extends React.Component {


  render() {
    return (
      <div>
        <Flip left>
        {this.props.text}
        </Flip>
      </div>
    );
  }
}

export default SideBar;
