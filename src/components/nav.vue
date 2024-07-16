<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">TodoHogar</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Inicio</b-nav-item>
        <b-nav-item to="/productos">Productos</b-nav-item>
        <b-nav-item v-if="!isAuthenticated" to="/login">Login</b-nav-item>
        <b-nav-item v-if="isAuthenticated" to="/admin">Administración</b-nav-item>
        <b-nav-item v-if="isAuthenticated" @click="logout">Logout</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('auth', ['isAuthenticated'])
    },
    methods: {
      ...mapActions('auth', ['logout'])
    }
  };
  </script>
  