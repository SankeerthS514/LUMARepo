package com.grp5.bootcamp4.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grp5.bootcamp4.entity.Item;
import com.grp5.bootcamp4.entity.Loan;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long>{

	
}
