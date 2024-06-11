package com.SpringAndReact.SyRFullStack.dto;

import com.SpringAndReact.SyRFullStack.entity.Meal;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {
    private Long id;
    private Date orderDateIn;
    private Set<Long> mealIds;
}
