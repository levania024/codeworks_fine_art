<script setup>
import { AppState } from '@/AppState.js';
import { artsService } from '@/services/ArtsService.js';
import Pop from '@/utils/Pop.js';
import { computed } from 'vue';

const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

async function changeCurrentPage(pageNum) {
    try {
        await artsService.changeCurrentPage(pageNum)
    }
    catch (error) {
        Pop.meow(error);
    }
}

</script>


<template>
    <div class="d-flex my-3">
        <i class="mdi mdi-book-open fs-2"></i>
        <span class="mx-3 fs-3"> {{ currentPage }} of {{ totalPages }} </span>
        <button @click="changeCurrentPage(currentPage - 1)" :disabled="currentPage == 1"
            class="btn btn-outline-primary mx-2 fs-3">Previous</button>
        <button @click="changeCurrentPage(currentPage + 1)" :disabled="currentPage == 35"
            class="btn btn-outline-primary mx-2 fs-3">Next</button>
    </div>
</template>


<style lang="scss" scoped></style>