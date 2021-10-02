import React from 'react';
import { TodoItem } from './TodoItem';

const TodoList = ({todos, setTodos, filteredTodos}) => {

    return (
        <div className="w-full overflow-auto">
            <ul>
                {filteredTodos.map((todo) => {
                   return (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                   )
                })}
            </ul>
        </div>
    )
}

export {TodoList};
