package com.grp5.bootcamp4.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.grp5.bootcamp4.entity.Loan;
import com.grp5.bootcamp4.entity.Master;
import com.grp5.bootcamp4.exceptions.RecordAlreadyExistsException;
import com.grp5.bootcamp4.repo.LoanRepository;
import com.grp5.bootcamp4.repo.MasterRepository;

@Service
public class LoanService {
	
	@Autowired
    private LoanRepository loanRepository;
	@Autowired
	private MasterRepository masterRepository;
	@Autowired
	private MasterService masterService;
    
	
	public List < Loan > getAllLoan() {
        return loanRepository.findAll();
    }


    public Loan getLoanById(@PathVariable(value = "id") Long loanId) {
    	return loanRepository.findById(loanId).get();
    	
	}
    
	public List < Loan > getAllActiveLoan(Long empid) {
		List<Master> allLoan = masterService.getApprovedMasterId(empid);
		List<Loan> allActiveLoan = new ArrayList<Loan>();
    	for(Master loan:allLoan) {
    		allActiveLoan.add(loanRepository.findById(loan.getId()).get());
    	}
    	return allActiveLoan;
	}
	
	
	
}
