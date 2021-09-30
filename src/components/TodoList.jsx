import React from 'react';
import { TodoItem } from './TodoItem';

const TodoList = ({todos, setTodos}) => {

    return (
        <div className="w-full">
            <ul>
                {todos.map((todo) => {
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
