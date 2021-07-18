package com.ec.onlineplantnursery.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ec.onlineplantnursery.entity.Product;
import com.ec.onlineplantnursery.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductRepository productRepo;
	
	
	@Override
	public List<Product> viewAllProducts() {

		return productRepo.findAll();
	}


	@Override
	public List<Product> searchProduct(String text) {
		return productRepo.searchProduct(text);
	}

}
