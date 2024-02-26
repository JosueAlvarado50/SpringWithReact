package net.yoshuaapps.ems.controller;

import lombok.AllArgsConstructor;
import net.yoshuaapps.ems.dto.EmployeeDto;
import net.yoshuaapps.ems.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

}
