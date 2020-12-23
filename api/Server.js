import React, { Component } from 'react';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://5fd8c0f47e05f000170d2f66.mockapi.io/react';

export async function getAllProducts(categoryId) {
  const response = await Axios.get('/products?category=' + categoryId);
  return response.data;
}

export async function getCategories() {
  const response = await Axios.get('/categories');
  return response.data;
}

export function addToOrder(products) {
  Axios.post('/orders', 
    { 
      "data" : products
    }
  )
}

export async function getAllOrders() {
  const response = await Axios.get('/orders');
  return response.data;
}