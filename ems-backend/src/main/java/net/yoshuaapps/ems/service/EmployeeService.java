package net.yoshuaapps.ems.service;

import net.yoshuaapps.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployeById(Long employeeId, EmployeeDto updatedEmployee);

    void deleteEmployeeById(Long employeeId);
}
