package com.SpringAndReact.SyRFullStack.dto;

import com.SpringAndReact.SyRFullStack.entity.Client;
import com.SpringAndReact.SyRFullStack.entity.Meal;

import java.util.List;

public class OrderDto {
    private  Long id;
    private Client client;
    private List<Meal> mealList;
    private Double totalAmount;
}
