import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SideNavLeftComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

      return (
        <div className="popoutmenu leftpopmenu">
          <a className="poplefthome" href="/ehrv8/main/doctor/home.aspx">RxNT Home</a>
          <ul>
            <li className="menu1"><span className="glyphicons glyphicons-calendar"></span><a target="_blank" href="#">Menu 1</a></li>
            <li className="menu2"><span className="glyphicons glyphicons-family"></span><a href="#">Menu 2</a></li>
       </ul>
      </div>
    );
  }
}

SideNavLeftComponent.propTypes = {
  pmUrl: PropTypes.string,
  schedulerUrl: PropTypes.string
};

const mapStateToProps = (store) => {
  return {
    pmUrl: store.auth.pmUrl,
    schedulerUrl: store.auth.schedulerUrl
  };
};

export default connect(mapStateToProps)(SideNavLeftComponent);
