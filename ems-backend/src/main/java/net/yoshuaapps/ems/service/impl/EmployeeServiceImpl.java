package net.yoshuaapps.ems.service.impl;

import lombok.AllArgsConstructor;
import net.yoshuaapps.ems.dto.EmployeeDto;
import net.yoshuaapps.ems.entity.Employee;
import net.yoshuaapps.ems.exception.ResourceNotFoundException;
import net.yoshuaapps.ems.mapper.EmployeeMapper;
import net.yoshuaapps.ems.repository.EmployeeRepository;
import net.yoshuaapps.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
    @Override
    public List<EmployeeDto> getAllEmployees(){
        List<Employee> employeeDtoList = employeeRepository.findAll();
        return employeeDtoList.stream().map((employeeDto) -> EmployeeMapper.mapToEmployeeDto(employeeDto))
                .collect(Collectors.toList());
    }
    @Override
    public EmployeeDto updateEmployeById(Long employeeId, EmployeeDto updatedEmployee){
        Employee employeeToUpdate = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee is not exist with given id: " +employeeId)
        );
        employeeToUpdate.setFirstName(updatedEmployee.getFirstName());
        employeeToUpdate.setLastName(updatedEmployee.getLastName());
        employeeToUpdate.setEmail(updatedEmployee.getEmail());
        Employee employeeSaved = employeeRepository.save(employeeToUpdate);
        return EmployeeMapper.mapToEmployeeDto(employeeSaved);
    }
    @Override
    public void deleteEmployeeById(Long employeeId){
        employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee not found with that Id:" + employeeId)
        );
        employeeRepository.deleteById(employeeId);
        System.out.println("Employe deleted with the id: " +employeeId );
    }
}
