package com.ec.onlineplantnursery.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ec.onlineplantnursery.entity.Product;
import com.ec.onlineplantnursery.responseDto.ProductResponseDto;

public interface ProductRepo extends JpaRepository<Product, Integer>, CustomProductRepository{


}
