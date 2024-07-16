<template>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Nombre" label-for="productName">
        <b-form-input id="productName" v-model="product.name" required></b-form-input>
      </b-form-group>
  
      <b-form-group label="Descripción" label-for="productDescription">
        <b-form-textarea id="productDescription" v-model="product.description" required></b-form-textarea>
      </b-form-group>
  
      <b-form-group label="Categoría" label-for="productCategory">
        <b-form-select id="productCategory" v-model="product.category" :options="categories" required></b-form-select>
      </b-form-group>
  
      <b-form-group label="Precio" label-for="productPrice">
        <b-form-input id="productPrice" type="number" v-model="product.price" required></b-form-input>
      </b-form-group>
  
      <b-form-group label="Imagen URL" label-for="productImage">
        <b-form-input id="productImage" v-model="product.image" required></b-form-input>
      </b-form-group>
  
      <b-button type="submit" variant="success">Guardar</b-button>
    </b-form>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        default: () => ({
          name: '',
          description: '',
          category: '',
          price: 0,
          image: ''
        })
      }
    },
    data() {
      return {
        categories: ['Hogar', 'Cocina', 'Dormitorio']
      };
    },
    methods: {
      onSubmit() {
        this.$emit('submit', { ...this.product });
      }
    }
  };
  </script>
  
  