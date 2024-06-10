package com.SpringAndReact.SyRFullStack.service;

import com.SpringAndReact.SyRFullStack.dto.MealDto;
import com.SpringAndReact.SyRFullStack.entity.Meal;

import java.util.List;

public interface MealService {
MealDto addMeal(MealDto mealDto);
MealDto getMealById(Long mealId);
List<MealDto> getAllMeals();
MealDto updateMeal(Long mealId, MealDto updatedMeal);
void deleteMeal(Long mealId);
Meal getMealEntityById(Long mealId);

}
