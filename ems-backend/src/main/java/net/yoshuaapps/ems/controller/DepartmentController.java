package net.yoshuaapps.ems.controller;


import lombok.AllArgsConstructor;
import net.yoshuaapps.ems.dto.DepartmentDto;
import net.yoshuaapps.ems.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {
    private DepartmentService departmentService;

    //Build Department REST API
    //CREATE DEPARTMENT
    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto){
        DepartmentDto departmentCreated = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(departmentCreated, HttpStatus.CREATED);
    }
    //GET DEPARTMENT BY ID
    @GetMapping("{id}")
    public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") Long departmentId){
        DepartmentDto departmentDto = departmentService.getDepartmentById(departmentId);
        return  ResponseEntity.ok(departmentDto);
    }
    //GET AlL DEPARTMENTS
    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllDepartments(){
        List<DepartmentDto> departmentDtoList = departmentService.getAllDepartments();
        return  ResponseEntity.ok(departmentDtoList);
    }
    //UPDATE DEPARTMENT
    @PutMapping("{id}")
    public  ResponseEntity<DepartmentDto> updateDepartment(@PathVariable("id") Long departmentId,  @RequestBody DepartmentDto UpdatedDepartment){
        DepartmentDto departmentUpdated = departmentService.updateDepartment(departmentId, UpdatedDepartment);
        return ResponseEntity.ok(departmentUpdated);
    }
    //DELETE DEPARTMENT
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDepartmentById(@PathVariable("id") Long departmentId){
        departmentService.deleteDepartmentById(departmentId);
        return  ResponseEntity.ok("Departamento eliminado");
    }

}
