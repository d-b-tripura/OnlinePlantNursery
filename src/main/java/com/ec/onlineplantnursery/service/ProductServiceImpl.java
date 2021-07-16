package com.ec.onlineplantnursery.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ec.onlineplantnursery.entity.Product;
import com.ec.onlineplantnursery.repository.IPlanterRepository;
import com.ec.onlineplantnursery.repository.ProductRepo;
import com.ec.onlineplantnursery.responseDto.ProductResponseDto;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductRepo productRepo;
	
	
	@Override
	public List<Product> viewAllProducts() {

		return productRepo.findAll();
	}


	@Override
	public List<Product> searchProduct(String text) {
		return productRepo.searchProduct(text);
	}

}
