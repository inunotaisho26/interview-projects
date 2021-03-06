import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import SpinnerComponent from '../../uicomponents/spinner/spinner.component';
import SearchMasterComponent from '../../components/search-master/search-master.component';

class SearchMasterContainerComponent extends Component {
	constructor(props) {
		super(props);
		this.addNewPatient = this.addNewPatient.bind(this);
	}

	addNewPatient() {
    alert('Developement in progress');
  }

	render(){
		return(
			<div>
					{this.props.loading && <SpinnerComponent/>}
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12 tdTopAlign">
							<Link to="/new">
								<div className="pull-right mainHeaderButtons">
									<input type="button" className="btnSearch pull-right" value="New" />
									<span className="glyphicon glyphicon-plus glyPhiconPlusColor pull-right"></span>
								</div>
							</Link>
						</div>
					</div>
					<section>
						<SearchMasterComponent />
					</section>
			</div>
		);
	}
}

SearchMasterContainerComponent.propTypes = {
	loading: PropTypes.bool
};

SearchMasterContainerComponent.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = (store) => {
  return {
		loading: store.applicationReducer.loading
  };
};

export default connect(mapStateToProps)(SearchMasterContainerComponent);
