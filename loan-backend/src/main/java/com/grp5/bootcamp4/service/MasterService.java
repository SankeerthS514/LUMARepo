package com.grp5.bootcamp4.service;

import java.util.List;

import com.grp5.bootcamp4.entity.Employee;
import com.grp5.bootcamp4.entity.Master;

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
import com.grp5.bootcamp4.repo.MasterRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v5")
public class MasterService {
    @Autowired
    private MasterRepository masterRepository;

   
    public List < Master > getAllMaster() {
        return masterRepository.findAll();
    }
    
    
    public List<Master> getMasterId(Long masterId) {
    	
    	return  masterRepository.findAllByEmpid(masterId);
	}
    
    public Master createMaster(Master master) throws RecordAlreadyExistsException {
    	if(masterRepository.existsById(master.getId()))
    	{
    		throw new RecordAlreadyExistsException("This User Already Exists");
    	} 
        return masterRepository.save(master);
    }
//    public ResponseEntity < Master > updateMaster(Long masterId,
//            @Valid @RequestBody Master masterDetails) throws ServiceNotFoundException {
//        	    Master master = masterRepository.findById(masterId)
//                    .orElseThrow();
//                master.setStatus(masterDetails.getStatus());
//                
//            
//               
//                return ResponseEntity.ok(updatedMaster);
//        }
}