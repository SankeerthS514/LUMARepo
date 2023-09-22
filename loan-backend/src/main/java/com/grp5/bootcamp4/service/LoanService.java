package com.grp5.bootcamp4.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.grp5.bootcamp4.entity.Master;
import com.grp5.bootcamp4.exceptions.RecordAlreadyExistsException;
import com.grp5.bootcamp4.repo.LoanRepository;
import com.grp5.bootcamp4.repo.MasterRepository;

public class LoanService {
	
	@Autowired
    private LoanRepository loanRepository;
    
//	public Master createMaster(Master master) throws RecordAlreadyExistsException {
//    	if(masterRepository.existsById(master.getId()))
//    	{
//    		throw new RecordAlreadyExistsException("This User Already Exists");
//    	} 
//        return masterRepository.save(master);
//    }
}
