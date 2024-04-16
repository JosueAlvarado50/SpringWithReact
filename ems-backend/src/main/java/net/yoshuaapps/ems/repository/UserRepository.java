package net.yoshuaapps.ems.repository;

import net.yoshuaapps.ems.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Boolean existByEmail(String username);
    Optional<User> findByUsernameOrEmail(String username, String email);

}
