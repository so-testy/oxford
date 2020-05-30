import { connect } from 'react-redux';
import { changeConstructor } from '../../../../store/actions/index';

const withRedux = Component => {
	const mapStateToProps = ({ constructor }) => ({
		constructor,
	});

	const mapDispatchToProps = dispatch => ({
		changeConstructor: data => dispatch(changeConstructor(data)),
	});

	return connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Component);
};

export default withRedux;
