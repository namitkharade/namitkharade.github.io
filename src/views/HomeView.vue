<template>
  <div class="text-center">
    <img
      :src="isHovered ? 'src/assets/imgs/Animoji_1.gif' : 'src/assets/imgs/memoji.png'"
      alt="Profile"
      class="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] mt-20 mx-auto"
      @mouseover="handleMouseOver"
      @mouseout="handleMouseOut"
    />
    <h1 class="mt-5 mb-4 text-5xl sm:text-6xl uppercase font-bold text-indigo-600 dark:text-[#CD0045]">
      Namit Kharade
    </h1>
    <hr class="my-8 border-t-2 border-black w-32 mx-auto dark:border-white" />
    <p class="text-lg sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
      Welcome to my corner of the web! 🌐<br />
      Currently on a mission to crack the mysteries of Data Science while enjoying the scenic filled landscapes of Germany!🇩🇪 I have got <br />
      an undeniable passion for Machine Learning, Artificial Intelligence, and the ever-evolving landscape of new technologies. Always on <br />
      the lookout for the next big thing, I am here to explore, create, and contribute to the exciting realm of tech. This portfolio is a <br />
      reflection of my academic endeavors, personal projects, and the ever-evolving skills that I bring to the table.<br />
      <br />
      Excited to connect and geek out together! 🚀
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseOut() {
      this.isHovered = false;
    },
  },
};
</script>
