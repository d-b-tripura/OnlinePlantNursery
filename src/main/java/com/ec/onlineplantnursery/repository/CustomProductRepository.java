package com.ec.onlineplantnursery.repository;

import java.util.List;

import com.ec.onlineplantnursery.entity.Product;
import com.ec.onlineplantnursery.responseDto.ProductResponseDto;

public interface CustomProductRepository {

	List<Product> searchProduct(String text);

}
