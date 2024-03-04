package net.yoshuaapps.ems.service.impl;

import lombok.AllArgsConstructor;
import net.yoshuaapps.ems.dto.DepartmentDto;
import net.yoshuaapps.ems.entity.Department;
import net.yoshuaapps.ems.exception.ResourceNotFoundException;
import net.yoshuaapps.ems.mapper.DepartmentMapper;
import net.yoshuaapps.ems.repository.DepartmentRepository;
import net.yoshuaapps.ems.service.DepartmentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {
    private DepartmentRepository departmentRepository;
    @Override
    public DepartmentDto getDepartmentById(Long departmentId) {
        Department department = departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department is not exist with given id " + departmentId)
        );
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departmentDtoList = departmentRepository.findAll();
        return departmentDtoList.stream().map((departmentDto) -> DepartmentMapper.mapToDepartmentDto(departmentDto)).collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto updatedDepartment) {
        Department departmentToUpdate = departmentRepository.findById(departmentId).orElseThrow(() -> new ResourceNotFoundException("Department no exist with Id given " + departmentId));
        departmentToUpdate.setDepartmentName(updatedDepartment.getDepartmentName());
        departmentToUpdate.setDepartmentDescription(updatedDepartment.getDepartmentDescription());
        Department departmentSaved = departmentRepository.save(departmentToUpdate);
        return DepartmentMapper.mapToDepartmentDto(departmentSaved);
    }

    @Override
    public void deleteDepartmentById(Long departmentId) {
        departmentRepository.findById(departmentId).orElseThrow(()-> new ResourceNotFoundException("Department not exist with that Id given "+ departmentId ));
        departmentRepository.deleteById(departmentId);
        System.out.println("Department deleted");
    }

    @Override
    public DepartmentDto createDepartment (DepartmentDto departmentDto){
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }
}
