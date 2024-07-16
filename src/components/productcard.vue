<template>
    <b-card :title="product.name" img-src="product.image" img-alt="product.name" img-top>
      <b-card-text>
        {{ product.description }}
      </b-card-text>
      <b-button variant="primary" @click="$emit('viewDetails', product.id)">Ver más</b-button>
    </b-card>
  </template>
  
  <script>
  export default {
    props: {
      product: Object
    }
  };
  </script>
  