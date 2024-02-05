<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    
    <div class="wrapper">
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <RouterLink class="navbar-brand" to="/students">Navbar</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 gap-4 me-3  mb-lg-0 ">
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/home">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About us</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/students">Student us </RouterLink>
        </li>
         <li  class="nav-item">
                <span class="nav-link">Papai Kumar Paul</span>
              </li>
      </ul>
    </div>
</div>
</nav>
  
    </div>
  </header>

  <RouterView />
</template>

