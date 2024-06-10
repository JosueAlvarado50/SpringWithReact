package com.SpringAndReact.SyRFullStack.dto;

import com.SpringAndReact.SyRFullStack.entity.Client;
import com.SpringAndReact.SyRFullStack.entity.Meal;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {
    private  Long id;
    private Client client;
    private List<Meal> mealList;
    private Double totalAmount;
}
