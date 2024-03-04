package net.yoshuaapps.ems.repository;

import net.yoshuaapps.ems.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
