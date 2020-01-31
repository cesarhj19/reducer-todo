import React, { Fragment } from 'react';

const Todo = ({ todo, dispatch }) => {
	const toggleCompleted = () => {
		dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id });
	};

	return (
		<div
			style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
			onClick={toggleCompleted}
			className={`todo$(todo.completed ? 'completed)' : ''`}
		>
			{todo.completed ? (
				<Fragment>
					<p
						style={{
							textDecoration: todo.completed ? 'line-through' : ''
						}}
					>
						{todo.item}
					</p>
					<p> --> Completed: {todo.timeCompleted}</p>
				</Fragment>
			) : (
				<p>{todo.item}</p>
			)}
		</div>
	);
};

export default Todo;
