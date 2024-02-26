package net.yoshuaapps.ems.service.impl;

import lombok.AllArgsConstructor;
import net.yoshuaapps.ems.dto.EmployeeDto;
import net.yoshuaapps.ems.entity.Employee;
import net.yoshuaapps.ems.exception.ResourceNotFoundException;
import net.yoshuaapps.ems.mapper.EmployeeMapper;
import net.yoshuaapps.ems.repository.EmployeeRepository;
import net.yoshuaapps.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
    public EmployeeDto getEmployeeById(Long employeeId){
       Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee is not exist with given id: " + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
