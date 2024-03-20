package com.SpringAndReact.SyRFullStack.service;

import com.SpringAndReact.SyRFullStack.dto.TodoDto;

public interface TodoService {
    TodoDto addTodo(TodoDto todoDto);
    TodoDto getTodo(Long id);

    TodoDto deleteTodo(Long id);
}
