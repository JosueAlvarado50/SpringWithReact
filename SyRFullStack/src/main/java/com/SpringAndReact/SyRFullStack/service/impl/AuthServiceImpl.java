package com.SpringAndReact.SyRFullStack.service.impl;

import com.SpringAndReact.SyRFullStack.dto.RegisterDto;
import com.SpringAndReact.SyRFullStack.entity.Role;
import com.SpringAndReact.SyRFullStack.entity.User;
import com.SpringAndReact.SyRFullStack.exception.TodoAPIException;
import com.SpringAndReact.SyRFullStack.repository.RoleRepository;
import com.SpringAndReact.SyRFullStack.repository.UserRepository;
import com.SpringAndReact.SyRFullStack.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

/**
 * Authentication service implementation for user register
 */
@AllArgsConstructor
@Service
public class AuthServiceImpl implements AuthService  {
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    /**
     *
     * @param registerDto - is a dto object that help us at register a user
     * @return - when the user is registered return a message success
     */
    @Override
    public String register(RegisterDto registerDto) {
        //Check username is already in database
        if (userRepository.existsByEmail(registerDto.getUsername())){
            throw new TodoAPIException(HttpStatus.BAD_REQUEST, "USername already exist");
        }
        //Check email is already exist in database
        if (userRepository.existsByEmail(registerDto.getEmail())){
            throw new TodoAPIException(HttpStatus.BAD_REQUEST, "Email is already exist!");
        }
        User user = new User();
        user.setName(registerDto.getName());
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
                            //HashSet no permite duplicados en la coleccion
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName("ROLE_USER");
        roles.add(userRole);
        user.setRoles(roles);
        userRepository.save(user);
        return "User registered succesfully!.";
    }
}
