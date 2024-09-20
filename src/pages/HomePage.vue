<script setup>
import { AppState } from '@/AppState.js';
import { artsService } from '@/services/ArtsService.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import PageNum from './PageNum.vue';

const artworks = computed(() => AppState.artworks)

onMounted(() => {
  getArtworks()
})

async function getArtworks() {
  try {
    await artsService.getArtworks()
  }
  catch (error) {
    Pop.meow(error);
  }
}
</script>

<template>
  <div class="container">
    <section class="row">
      <div class="col-lg-12">
        <PageNum />
      </div>

      <div class="d-flex">
        <h5 class="text-center">CodeWorks Fine Art Institute</h5>
      </div>
      <div v-for="artwork in artworks" :key="artwork.id" class=" col-6 col-lg-4">
        <img :src="artwork.imgUrl" alt="image of a art painting" class="img-fluid art-image">
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.art-image {
  position: relative;
  height: 30vh;
  width: 100%;
  box-shadow: 5px 5px 5px black;
}
</style>
