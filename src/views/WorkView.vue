<template>
    <div id="work">
      <h1 class="text-4xl font-bold text-green-600">Work Experience</h1>
      <div v-for="(workItem, index) in workData" :key="index" class="flex mt-8 mb-8 pl-8 border-l-2 border-green-600">
        <div class="w-32 font-bold text-green-600">
          <img :src="workItem.logo" alt="Company Logo" class="w-12 h-12 mb-2 object-contain">
          {{ workItem.date }}
        </div>
        <div class="ml-8">
          <div class="flex items-center mb-2">
            <h2 class="text-black text-xl mr-2">{{ workItem.company }}</h2>
            <span class="text-gray-500">{{ workItem.location }}</span>
          </div>
          <p class="text-gray-700 mb-2">{{ workItem.position }}</p>
          <p class="text-gray-500">{{ workItem.responsibilities }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        workData: [
          {
            date: "March 2023 – July 2023",
            company: "aiio GmbH",
            location: "Magdeburg, DE",
            logo: "src/assets/imgs/aiio-gmbh.png",
            position: "Working student",
            responsibilities: "Developing and maintaining software solutions."
          },
          {
            date: "August 2021 – August 2022",
            company: "Accenture Solutions",
            location: "Pune, IN",
            logo: "src/assets/imgs/accenture.png",
            position: "Associate Software Engineer",
            responsibilities: "Assisting in the development of web applications."
          },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  #work {
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
  }
  </style>
  