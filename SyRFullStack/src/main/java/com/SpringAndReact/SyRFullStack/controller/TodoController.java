package com.SpringAndReact.SyRFullStack.controller;

import com.SpringAndReact.SyRFullStack.dto.TodoDto;
import com.SpringAndReact.SyRFullStack.service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping
    public ResponseEntity<List<TodoDto>> getAllTodos(){
        List<TodoDto> todoDtoList = todoService.getAllTodos();
        return new ResponseEntity<>(todoDtoList, HttpStatus.OK);
    }
    @PutMapping("{id}")
    public ResponseEntity<TodoDto> updateDto(@RequestBody TodoDto todoDto, @PathVariable("id") Long todoId){
        TodoDto todoDtoUpdated = todoService.updateDto(todoDto,todoId);
        return  ResponseEntity.ok(todoDtoUpdated);
    }
    @DeleteMapping("{id}")
    public  ResponseEntity<String> deleteTodo(@PathVariable("id") Long todoId){
        todoService.deleteTodo(todoId);
        return  ResponseEntity.ok("todo deleted successfully");
    }
    @PatchMapping("{id}/complete")
    public  ResponseEntity<TodoDto> completeTodo(@PathVariable("id") Long todoId){
        TodoDto todoUpdated = todoService.completeTodo(todoId);
        return  ResponseEntity.ok(todoUpdated);
    }
    @PatchMapping("{id}/incomplete")
    public  ResponseEntity<TodoDto> incompleteTodo(@PathVariable("id") Long todoId){
        TodoDto todoUpdated = todoService.inCompleteTodo(todoId);
        return  ResponseEntity.ok(todoUpdated);
    }

}
