<template>
    <p class="text-4xl font-bold mb-20 ml-20 mt-20 dark:text-blue-300">Projects from <font-awesome-icon icon="fa-brands fa-github" />
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
        <Loader v-if="loading" />
        <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
        <div v-for="(project) in projects" :key="project.id">
            <a :href="project.html_url" target="_blank">
                <div class="bg-blue-300 p-10 rounded-md shadow-md">
                    <h2 class="font-bold text-xl"> {{ project.name }}</h2>
                    <p>{{ project.description }}</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Loader from '../components/Loader.vue';

const projects = ref([]);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
    try {
        loading.value = true;
        const res = await fetch('https://api.github.com/users/namitkharade/repos');
        projects.value = await res.json();
        loading.value = false;
    } catch (ex) {
        error.value = ex;
        loading.value = false;
    }
});

</script>