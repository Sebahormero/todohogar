<template>
    <div>
      <Header :title="'Bienvenido a TodoHogar'" />
      <div class="featured-products">
        <h2>Productos Destacados</h2>
        <div class="product-grid">
          <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" @viewDetails="viewDetails"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import ProductCard from '../components/ProductCard.vue';
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    components: {
      Header,
      ProductCard
    },
    computed: {
      ...mapGetters('products', ['allProducts']),
      featuredProducts() {
        return this.allProducts.slice(0, 3);
      }
    },
    methods: {
      ...mapActions('products', ['fetchProducts']),
      viewDetails(id) {
        this.$router.push({ name: 'DetalleProducto', params: { id } });
      }
    },
    created() {
      this.fetchProducts();
    }
  };
  </script>
  
  <style scoped>
  .featured-products {
    text-align: center;
  }
  .product-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  </style>
  