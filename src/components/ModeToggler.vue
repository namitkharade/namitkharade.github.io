<template>
    <div class="bg-transparent fixed top-3 right-3 sm:top-6 sm:right-6 text-blue-600 dark:text-[#f7f700] text-3xl">
        <font-awesome-icon :icon="props.class" />
    </div>
</template>

<script setup>
const props = defineProps({
    class: {
        type: String,
        default: 'fa-solid fa-moon'
    }
})
</script>