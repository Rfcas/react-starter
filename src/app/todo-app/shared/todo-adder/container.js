import { connect } from 'react-redux';

import { actions } from '@state';
import TodoAdder from './presentational';


const mapDispatchToProps = {
    addTodo: actions.todoListActions.AddTodo,
    // toggleTodo: actions.todoListActions.ToggleTodo
};

export default connect(
    undefined,
    mapDispatchToProps
)(TodoAdder);