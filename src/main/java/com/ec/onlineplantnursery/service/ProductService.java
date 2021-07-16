package com.ec.onlineplantnursery.service;

import java.util.Collection;
import java.util.List;

import com.ec.onlineplantnursery.entity.Product;
import com.ec.onlineplantnursery.responseDto.ProductResponseDto;

public interface ProductService {
	List<Product> viewAllProducts();

	List<Product> searchProduct(String text);

}
