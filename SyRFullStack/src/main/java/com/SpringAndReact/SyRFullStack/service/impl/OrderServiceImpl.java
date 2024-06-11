package com.SpringAndReact.SyRFullStack.service.impl;

import com.SpringAndReact.SyRFullStack.dto.OrderDto;
import com.SpringAndReact.SyRFullStack.entity.Meal;
import com.SpringAndReact.SyRFullStack.entity.Order;
import com.SpringAndReact.SyRFullStack.exception.ResourceNotFoundException;
import com.SpringAndReact.SyRFullStack.repository.MealRepository;
import com.SpringAndReact.SyRFullStack.repository.OrderRepository;
import com.SpringAndReact.SyRFullStack.service.OrderService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class OrderServiceImpl implements OrderService {
    private ModelMapper modelMapper;
    private OrderRepository orderRepository;
    private MealRepository mealRepository;

    @Override
    public OrderDto addOrder(OrderDto orderDto) {
        Order orderToCreate = modelMapper.map(orderDto, Order.class);
        Order createdOrder = orderRepository.save(orderToCreate);
        return modelMapper.map(createdOrder, OrderDto.class);
    }

    @Override
    public OrderDto getOrderById(Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Order not found: "+orderId)
                );

        return modelMapper.map(order, OrderDto.class);
    }

    @Override
    public List<OrderDto> getAllOrders() {
        List<Order> orderList = orderRepository.findAll();
        return orderList.stream()
                .map((order)-> modelMapper
                        .map(order, OrderDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public OrderDto UpdateOrder(Long orderId, OrderDto orderDto) {
        Order orderToUpdate = orderRepository.findById(orderId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Order not found: "+orderId)
                );
        orderToUpdate.setOrderDateIn(orderDto.getOrderDateIn());
        Set<Meal> meals = new HashSet<>();
        for (Long mealId : orderDto.getMealIds()){
            Meal meal = mealRepository.findById(mealId)
                    .orElseThrow(
                            () -> new ResourceNotFoundException("meal not found: " + mealId)
                    );
            meals.add(meal);
        }
        orderToUpdate.setMeals(meals);

        Order savedOrder = orderRepository.save(orderToUpdate);
        return modelMapper.map(savedOrder, OrderDto.class);
    }

    @Override
    public void deleteOrder(Long orderId) {
        Order orderToDelete = orderRepository.findById(orderId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Order Not found: "+orderId)
                );
        orderRepository.deleteById(orderId);
    }

    @Override
    public Order createOrderWithMeals(OrderDto orderDto) {
        Set<Meal> meals = new HashSet<>();
        for (Long mealId : orderDto.getMealIds()){
            Meal meal = mealRepository.findById(mealId)
                    .orElseThrow(
                            () -> new ResourceNotFoundException("Meal not found: "+ mealId)
                    );
            meals.add(meal);
        }
        Order order = new Order();
        order.setOrderDateIn(orderDto.getOrderDateIn());
        order.setMeals(meals);
        return orderRepository.save(order);
    }
}
