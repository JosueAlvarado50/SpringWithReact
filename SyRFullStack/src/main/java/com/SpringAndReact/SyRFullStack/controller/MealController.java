package com.SpringAndReact.SyRFullStack.controller;

import com.SpringAndReact.SyRFullStack.dto.MealDto;
import com.SpringAndReact.SyRFullStack.service.MealService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/foodorderapp/meals")
public class MealController {
    MealService mealService;
    //Build Meal REST API

    //ADD MEAL
    @PostMapping
    public ResponseEntity<MealDto> addMeal(@RequestBody MealDto mealDto){
        MealDto mealCreated = mealService.addMeal(mealDto);
        return  new ResponseEntity<>(mealCreated, HttpStatus.CREATED);
    }

    //GER MEAL BY ID
    @GetMapping("{id}")
    public ResponseEntity<MealDto> getMealById(@PathVariable("id") Long mealId){
        MealDto mealDto = mealService.getMealById(mealId);
        return ResponseEntity.ok(mealDto);
    }

    //GET ALL MEALS
    @GetMapping
    public ResponseEntity<List<MealDto>> getAllMeals(){
        List<MealDto> mealDtoList = mealService.getAllMeals();
        return ResponseEntity.ok(mealDtoList);
    }

    //UPDATE MEAL
    @PutMapping("{id}")
    public ResponseEntity<MealDto> updateMeal(@PathVariable("id") Long mealId, @RequestBody MealDto updatedMeal){
        MealDto mealDto = mealService.updateMeal(mealId, updatedMeal);
        return  ResponseEntity.ok(mealDto);
    }
    //DELETE MEAL
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteMeal(@PathVariable("id") Long mealId){
        mealService.deleteMeal(mealId);
        return ResponseEntity.ok("Meal deleted successfully");
    }
}
