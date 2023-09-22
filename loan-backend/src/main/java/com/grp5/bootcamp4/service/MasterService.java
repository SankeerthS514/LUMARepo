package com.grp5.bootcamp4.service;

import java.util.List;

import com.grp5.bootcamp4.entity.Employee;
import com.grp5.bootcamp4.entity.Item;
import com.grp5.bootcamp4.entity.Loan;
import com.grp5.bootcamp4.entity.Master;

import java.util.*;

import javax.management.ServiceNotFoundException;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
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
import com.grp5.bootcamp4.exceptions.ItemIsNotAvailableException;
import com.grp5.bootcamp4.exceptions.RecordAlreadyExistsException;
import com.grp5.bootcamp4.repo.EmployeeRepository;
import com.grp5.bootcamp4.repo.ItemRepository;
import com.grp5.bootcamp4.repo.LoanRepository;
import com.grp5.bootcamp4.repo.MasterRepository;

@Service
public class MasterService {
    @Autowired
    private MasterRepository masterRepository;
    @Autowired
    private LoanRepository loanRepository;
    @Autowired
    private ItemRepository itemRepository;

   
    public List < Master > getAllMaster() {
        return masterRepository.findAll();
    }
    
    
    public List<Master> getMasterId(Long masterId) {
    	
    	return  masterRepository.findAllByEmpid(masterId);
	}
    
    public Master createMaster(Master master) throws RecordAlreadyExistsException, ItemIsNotAvailableException {
    	if(masterRepository.existsById(master.getId()))
    	{
    		throw new RecordAlreadyExistsException("This User Already Exists");
    	}
    	
    	List <Item> item = itemRepository.findByitemcatAndItemmakeAndItemdescAndStatus(master.getItem_cat(), master.getItem_make(), master.getItem_desc(),"Available");
    	if(item.isEmpty()) {
    		throw new ItemIsNotAvailableException("This Item Is Not Available");
    	}
    	Item issuedItem = item.get(0);
    	issuedItem.setStatus("Reserved");
    	itemRepository.save(issuedItem);
        return masterRepository.save(master);
    }
    public ResponseEntity < Master > updateMaster(Long masterId,
            @Valid @RequestBody Master masterDetails) throws ServiceNotFoundException {
        	    Master master = masterRepository.findById(masterId)
                    .orElseThrow();
                master.setStatus(masterDetails.getStatus());
                
                
                final Master updatedMaster = masterRepository.save(master);
                
                switch(masterDetails.getStatus()) {
                case "Approved":
                  Loan loancard = new Loan(masterId,masterDetails.getItem_cat(),masterDetails.getduration_in_years());
                  List <Item> item = itemRepository.findByitemcatAndItemmakeAndItemdescAndStatus(master.getItem_cat(), master.getItem_make(), master.getItem_desc(),"Available");
                  
                  loanRepository.save(loancard);
                  break;
                case "Rejected":
                  // code block
                  break;
                case "Closed":
                  // code block
              }
                
                
                
                return ResponseEntity.ok(updatedMaster);
        }
}