package com.SpringAndReact.SyRFullStack.controller;

import com.SpringAndReact.SyRFullStack.dto.TodoDto;
import com.SpringAndReact.SyRFullStack.service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/todos")
@AllArgsConstructor
public class TodoController {
    private TodoService todoService;
    //Build Add todo REST API
    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto){
        TodoDto savedDto = todoService.addTodo(todoDto);
        return new ResponseEntity<>(savedDto, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public  ResponseEntity<TodoDto> getTodo(@PathVariable("id") Long todoId){
        TodoDto todoDto = todoService.getTodo(todoId);
        return new ResponseEntity<>(todoDto, HttpStatus.OK);
    }

}
