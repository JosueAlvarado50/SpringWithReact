package com.SpringAndReact.SyRFullStack.service;

import com.SpringAndReact.SyRFullStack.dto.OrderDto;

import java.util.List;

public interface OrderService {
    OrderDto addOrder(OrderDto orderDto);
    OrderDto getOrderById(Long orderId);
    List<OrderDto> getAllOrders();
    OrderDto updateOrder(Long id, OrderDto updatedOrder);
    void deleteOrder(Long orderId);
}
