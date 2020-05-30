import { connect } from 'react-redux';
import { changeTrainer } from '../../store/actions/index';

const withRedux = Component => {
	const mapStateToProps = ({ trainer }) => ({
		trainer,
	});

	const mapDispatchToProps = dispatch => ({
		changeTrainer: data => dispatch(changeTrainer(data)),
	});

	return connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Component);
};

export default withRedux;
