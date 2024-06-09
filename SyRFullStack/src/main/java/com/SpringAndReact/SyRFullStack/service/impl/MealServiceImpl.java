package com.SpringAndReact.SyRFullStack.service.impl;

import com.SpringAndReact.SyRFullStack.Mapper.MealMapper;
import com.SpringAndReact.SyRFullStack.dto.MealDto;
import com.SpringAndReact.SyRFullStack.entity.Meal;
import com.SpringAndReact.SyRFullStack.exception.ResourceNotFoundException;
import com.SpringAndReact.SyRFullStack.repository.MealRepository;
import com.SpringAndReact.SyRFullStack.service.MealService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MealServiceImpl implements MealService {
    private MealRepository mealRepository;


    @Override
    public MealDto addMeal(MealDto mealDto) {
        Meal meal = MealMapper.mapToMeal(mealDto);
        Meal savedMeal = mealRepository.save(meal);
        return MealMapper.mapToMealDto(savedMeal);
    }

    @Override
    public MealDto getMealById(Long mealId) {
        Meal meal = mealRepository.findById(mealId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Meal not found with that id given: " +mealId)
                );
        return MealMapper.mapToMealDto(meal);
    }

    @Override
    public List<MealDto> getAllMeals() {
        List<Meal> mealDtoList = mealRepository.findAll();
        return mealDtoList.stream()
                .map((mealDto) -> MealMapper.mapToMealDto(mealDto))
                .collect(Collectors.toList());
    }

    @Override
    public MealDto updateMeal(Long mealId, MealDto updatedMeal) {
        Meal mealToUpdate = mealRepository.findById(mealId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Meal not found with that id given: "+ mealId)
                );
        mealToUpdate.setName(updatedMeal.getName());
        mealToUpdate.setDescription(updatedMeal.getDescription());
        mealToUpdate.setPrice(updatedMeal.getPrice());
        Meal mealSaved = mealRepository.save(mealToUpdate);
        return MealMapper.mapToMealDto(mealSaved);
    }

    @Override
    public void deleteMeal(Long mealId) {
        mealRepository.findById(mealId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Meal not found with that id given: "+ mealId)
        );
    mealRepository.deleteById(mealId);
        System.out.println("Meal deleted successfully!");
    }
}
