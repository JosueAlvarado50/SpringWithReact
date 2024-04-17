package net.yoshuaapps.ems.repository;

import net.yoshuaapps.ems.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
