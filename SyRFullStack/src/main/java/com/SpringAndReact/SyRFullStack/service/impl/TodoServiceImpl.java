package com.SpringAndReact.SyRFullStack.service.impl;

import com.SpringAndReact.SyRFullStack.dto.TodoDto;
import com.SpringAndReact.SyRFullStack.entity.Todo;
import com.SpringAndReact.SyRFullStack.repository.TodoRepository;
import com.SpringAndReact.SyRFullStack.service.TodoService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {
    private TodoRepository todoRepository;
    // Esta libreria nos permite hacer el Mapping mas limpio
    private ModelMapper modelMapper;
    @Override
    public TodoDto addTodo(TodoDto todoDto) {
      /*Convert TodoDto into Todo Jpa entity

        Todo Jpa entity
        Todo todo = new Todo();
        todo.setTitle(todoDto.getTitle());
        todo.setDescription(todoDto.getDescription());
        todo.setCompleted(todo.isCompleted());
         */
        Todo todo = modelMapper.map(todoDto, Todo.class);
        // Todo Jpa entity
        Todo savedTodo = todoRepository.save(todo);
       /*convert saved Todo Jpa entity object into todoDto object

        TodoDto savedTodoDto = new TodoDto();
        savedTodoDto.setId(savedTodo.getId());
        savedTodoDto.setTitle(savedTodo.getTitle());
        savedTodoDto.setDescription(savedTodo.getDescription());
        savedTodoDto.setCompleted(savedTodo.isCompleted());
        */
        TodoDto savedTodoDto = modelMapper.map(savedTodo, TodoDto.class);
        return savedTodoDto;
    }

    @Override
    public TodoDto getTodo(Long id) {
        Todo todo = todoRepository.findById(id).get();
        return modelMapper.map(todo, TodoDto.class);
    }

    @Override
    public TodoDto deleteTodo(Long id) {
        todoRepository.deleteById(id);

        return null;
    }
}
