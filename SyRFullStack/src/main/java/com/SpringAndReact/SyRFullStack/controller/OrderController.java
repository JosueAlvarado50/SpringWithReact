package com.SpringAndReact.SyRFullStack.controller;

import com.SpringAndReact.SyRFullStack.dto.OrderDto;
import com.SpringAndReact.SyRFullStack.entity.Order;
import com.SpringAndReact.SyRFullStack.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@CrossOrigin("*")
@RequestMapping("/api/food-order-app/order")
@RestController
public class OrderController {
    private OrderService orderService;
    @PostMapping
    public ResponseEntity<OrderDto> addOrder(@RequestBody OrderDto orderDto){
        OrderDto orderToCreate = orderService.addOrder(orderDto);
        return new ResponseEntity<>(orderToCreate, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<OrderDto> getOrderById(@PathVariable(name = "id") Long orderId){
        OrderDto orderDto = orderService.getOrderById(orderId);
        return new ResponseEntity<>(orderDto, HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<OrderDto>> getAllOrders(){
        List<OrderDto> orderDtoList = orderService.getAllOrders();
        return new ResponseEntity<>(orderDtoList, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<OrderDto> updateOrder(@PathVariable(name = "id") Long orderId, @RequestBody OrderDto orderDto){
        OrderDto orderToUpdate = orderService.UpdateOrder(orderId, orderDto);
        return new ResponseEntity<>(orderToUpdate, HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable(name = "id") Long orderId){
        orderService.deleteOrder(orderId);
        return ResponseEntity.ok("Order was deleted successfully");
    }

    @PostMapping("/insert-meals-to-order")
    public Order insertMealToOrder(@RequestBody OrderDto orderDto){
        return orderService.createOrderWithMeals(orderDto);
    }
}
