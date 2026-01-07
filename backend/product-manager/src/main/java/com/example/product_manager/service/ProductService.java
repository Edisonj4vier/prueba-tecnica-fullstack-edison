package com.example.product_manager.service;

import com.example.product_manager.model.Product;
import com.example.product_manager.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    @Transactional
    public Product createProduct(Product product){
        return productRepository.save(product);
    }

    @Transactional(readOnly = true)
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
}
