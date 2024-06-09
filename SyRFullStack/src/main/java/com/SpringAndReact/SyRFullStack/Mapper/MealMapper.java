package com.SpringAndReact.SyRFullStack.Mapper;

import com.SpringAndReact.SyRFullStack.dto.MealDto;
import com.SpringAndReact.SyRFullStack.entity.Meal;

public class MealMapper {
    public static MealDto mapToMealDto(Meal meal){
        return new MealDto(
                meal.getId(),
                meal.getName(),
                meal.getDescription(),
                meal.getPrice()
        );
    }
    public static Meal mapToMeal(MealDto mealDto){
        return  new Meal(
                mealDto.getId(),
                mealDto.getName(),
                mealDto.getDescription(),
                mealDto.getPrice()
        );
    }
}
