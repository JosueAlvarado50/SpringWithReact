package net.yoshuaapps.ems.controller;

import lombok.AllArgsConstructor;
import net.yoshuaapps.ems.dto.EmployeeDto;
import net.yoshuaapps.ems.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    private EmployeeService employeeService;
    @PostMapping
    // Build and Employee REST API
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
       EmployeeDto saveEmployee = employeeService.createEmployee(employeeDto);
       return  new ResponseEntity<>(saveEmployee, HttpStatus.CREATED);
    }
    // Build Get employee REST API
    @GetMapping("{id}")
    public  ResponseEntity <EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
        return  ResponseEntity.ok(employeeDto);
    }
    //Get all employees REST API
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> employeeDtoList = employeeService.getAllEmployees();
        return ResponseEntity.ok(employeeDtoList);
    }
    //Build updated employee REST API
    @PutMapping("{id}")
    public  ResponseEntity<EmployeeDto> updateEmployeById(@PathVariable("id") Long employeeId, @RequestBody EmployeeDto updatedEmployee){
        EmployeeDto employeeDto = employeeService.updateEmployeById(employeeId, updatedEmployee);
        return ResponseEntity.ok(employeeDto);
    }

    @DeleteMapping("{id}")
    public  ResponseEntity<String> deleteEmployeeById(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployeeById(employeeId);
        return ResponseEntity.ok("Empleado Eliminado de la base de datos!");
    }
    
}
