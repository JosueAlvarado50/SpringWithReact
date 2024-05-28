package com.SpringAndReact.SyRFullStack.controller;

import com.SpringAndReact.SyRFullStack.dto.RegisterDto;
import com.SpringAndReact.SyRFullStack.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 *
 */
@AllArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private AuthService authService;

    //Build Register REST API

    /**
     *
     * @param registerDto - is the object that it will be registered
     * @return -response with http status
     */
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto){
        String response = authService.register(registerDto);
        return  new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
