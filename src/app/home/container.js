import { connect } from 'react-redux';

import { actions } from '@state';
import presentational from './presentational';           // we import the presentational component here

const mapStateToProps = (state, ownProps) => ({
    counter: state.counter,
});

const mapDispatchToProps = {
    decrement: actions.counterActions.Decrement,
    increment: actions.counterActions.Increment
};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(presentational);

export default Home