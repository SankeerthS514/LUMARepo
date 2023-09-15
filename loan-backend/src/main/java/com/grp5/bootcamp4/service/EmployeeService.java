package com.grp5.bootcamp4.service;

import java.util.List;

import com.grp5.bootcamp4.entity.Employee;



import java.util.*;

import javax.management.ServiceNotFoundException;

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
import com.grp5.bootcamp4.exceptions.RecordAlreadyExistsException;
import com.grp5.bootcamp4.repo.EmployeeRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

   
    public List < Employee > getAllEmployees() {
        return employeeRepository.findAll();
    }

    
    public Object getEmployeeById(Long employeeId) {
    	Object employee = employeeRepository.findById(employeeId);
    	return ResponseEntity.ok().body(employee);
	}
    

   
    public Employee createEmployee(Employee employee) throws RecordAlreadyExistsException {
    	if(employeeRepository.existsById(employee.getId()))
    	{
    		throw new RecordAlreadyExistsException("This User Already Exists");
    	} 
        return employeeRepository.save(employee);
    }
   
    public ResponseEntity < Employee > updateEmployee(Long employeeId,
        @Valid @RequestBody Employee employeeDetails) throws ServiceNotFoundException {
        Employee employee = employeeRepository.findById(employeeId)
            .orElseThrow();

        employee.setEmailId(employeeDetails.getEmailId());
    
        final Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

    public Map < String, Boolean > deleteEmployee(Long employeeId)
    {
    

        employeeRepository.deleteById(employeeId);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}

