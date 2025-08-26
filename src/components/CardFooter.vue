<template>
    <footer class="py-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div class="container mx-auto px-4">
            <div class="flex flex-col items-center">
                <div class="flex items-center space-x-6 mb-6">
                    <a href="https://www.linkedin.com/in/namit-k/" target="_blank"
                        class="text-gray-600 text-2xl hover:text-[#0A66C2] dark:text-gray-400 dark:hover:text-[#0A66C2] transition-colors duration-300 hover:scale-110 transform">
                        <font-awesome-icon icon="fa-brands fa-linkedin" />
                    </a>
                    <a href="https://www.instagram.com/namit_nk/" target="_blank"
                        class="text-gray-600 text-2xl hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500 transition-colors duration-300 hover:scale-110 transform">
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </a>
                    <a href="https://github.com/namitkharade" target="_blank"
                        class="text-gray-600 text-2xl hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300 hover:scale-110 transform">
                        <font-awesome-icon icon="fa-brands fa-github" />
                    </a>
                    <a href="mailto:namit.b.kharade@gmail.com"
                        class="text-gray-600 text-2xl hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors duration-300 hover:scale-110 transform">
                        <font-awesome-icon icon="fa-solid fa-envelope" />
                    </a>
                </div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">
                    <p>© {{ new Date().getFullYear() }} Namit Kharade. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
// Current year will be automatically added to the copyright notice
</script>