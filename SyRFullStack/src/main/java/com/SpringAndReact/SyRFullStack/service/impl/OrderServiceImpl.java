package com.SpringAndReact.SyRFullStack.service.impl;

import com.SpringAndReact.SyRFullStack.dto.OrderDto;
import com.SpringAndReact.SyRFullStack.entity.Client;
import com.SpringAndReact.SyRFullStack.entity.Meal;
import com.SpringAndReact.SyRFullStack.entity.Order;
import com.SpringAndReact.SyRFullStack.exception.ResourceNotFoundException;
import com.SpringAndReact.SyRFullStack.repository.OrderRepository;
import com.SpringAndReact.SyRFullStack.service.ClientService;
import com.SpringAndReact.SyRFullStack.service.MealService;
import com.SpringAndReact.SyRFullStack.service.OrderService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService {
    private OrderRepository orderRepository;
    private ModelMapper modelMapper;
    private ClientService clientService;
    private MealService mealService;
    @Override
    public OrderDto addOrder(OrderDto orderDto) {
        Order order = modelMapper.map(orderDto, Order.class);
        Order savedOrder = orderRepository.save(order);
        return modelMapper.map(savedOrder, OrderDto.class);
    }

    @Override
    public OrderDto getOrderById(Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Order not found:" +orderId)
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
    public OrderDto updateOrder(Long orderId, OrderDto updatedOrder) {
        Order orderToUpdate = orderRepository.findById(orderId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Order Not Found: " + orderId)
                );
        Client client = clientService.getClientEntityById(updatedOrder.getClient().getId());
        List<Meal> mealList = new ArrayList<>();
        for (Meal mealDto : orderToUpdate.getMealList()){
            Meal meal = mealService.getMealEntityById(mealDto.getId());
            mealList.add(meal);
        }
        orderToUpdate.setClient(client);
        orderToUpdate.setMealList(mealList);
        orderToUpdate.setTotalAmount(updatedOrder.getTotalAmount());
        Order orderUpdated = orderRepository.save(orderToUpdate);
        return modelMapper.map(orderUpdated, OrderDto.class);
    }

    @Override
    public void deleteOrder(Long orderId) {
        Order orderToDelete = orderRepository.findById(orderId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Order not found: " + orderId)
                );
        orderRepository.deleteById(orderId);
    }
}
