package com.grp5.bootcamp4.controller;

import java.util.*;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grp5.bootcamp4.entity.Employee;
import com.grp5.bootcamp4.entity.User;
import com.grp5.bootcamp4.repo.EmployeeRepository;
import com.grp5.bootcamp4.repo.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v3")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user")
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public Object getUserById(@PathVariable(value = "id") Long userId) {
    	Object user = userRepository.findById(userId);
    	return ResponseEntity.ok().body(user);
	}
    

    @PostMapping("/user")
    public User createUser(@Valid @RequestBody User user) {
        return userRepository.save(user);
        
    }
    @PostMapping("/login")
    public String validateLogin(@RequestBody User user)

    {
    	User tempUser=userRepository.getReferenceById(user.getId());
    	if(tempUser.getpassword().equals(user.getpassword()))
    			{
    		return "sucess";
    			}
    	else {
    		return "Fail";
    	}
    }
}
