package com.grp5.bootcamp4.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grp5.bootcamp4.entity.Employee;
import com.grp5.bootcamp4.entity.Issued;
import com.grp5.bootcamp4.repo.EmployeeRepository;
import com.grp5.bootcamp4.repo.IssuedRepository;

@Service
public class IssuedService {
    @Autowired
    private IssuedRepository issuedRepository;

   
    public List < Issued > getAllIssued() {
        return issuedRepository.findAll();
    }

    
    public Issued getIssuedById(Long IssuedId) {
    	return issuedRepository.findById(IssuedId).get();
	}
}
