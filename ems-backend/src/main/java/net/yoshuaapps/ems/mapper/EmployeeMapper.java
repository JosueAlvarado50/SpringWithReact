package net.yoshuaapps.ems.mapper;

import net.yoshuaapps.ems.dto.EmployeeDto;
import net.yoshuaapps.ems.entity.Employee;

public class EmployeeMapper {
    public  static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
               employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }
    public static Employee mapToEmployee(EmployeeDto employeeDto){
      return new Employee(
              employeeDto.getId(),
              employeeDto.getFirstName(),
              employeeDto.getLastName(),
              employeeDto.getEmail()
      );
    }
}
