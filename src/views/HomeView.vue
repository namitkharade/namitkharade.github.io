<template>
    <div class="text-center">
      <img 
        src="../assets/imgs/memoji.png"
        alt="Profile"
        class="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] mt-20 mx-auto"
      />
      <h1 class="mt-5 mb-4 text-5xl sm:text-6xl uppercase font-bold text-indigo-600 dark:text-[#CD0045]">
      Namit Kharade
    </h1>
      <hr class="my-8 border-t-2 border-black w-32 mx-auto dark:border-white" />
      <p class="text-lg sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
    Welcome to my corner of the web! 🌐<br>
    Currently on a mission to crack the mysteries of Data Science while enjoying the scenic filled landscapes of Germany!🇩🇪 I have got <br>
    an undeniable passion for Machine Learning, Artificial Intelligence, and the ever-evolving landscape of new technologies. Always on <br>
    the lookout for the next big thing, I am here to explore, create, and contribute to the exciting realm of tech. This portfolio is a <br>
    reflection of my academic endeavors, personal projects, and the ever-evolving skills that I bring to the table.<br>
    <br>
    Excited to connect and geek out together! 🚀
  </p>

      <div class="my-8 border-t-2 border-black w-32 mx-auto dark:border-white"></div>

      <!-- Skills Section -->
      <div class="mt-8">
        <h2 class="text-3xl mb-4 font-bold text-purple-600 dark:text-white">
          Skills
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="category in skillCategories" :key="category.name">
            <h3 class="text-xl font-bold mb-2 text-purple-600 dark:text-white">
              {{ category.name }}
            </h3>
            <div class="flex flex-wrap justify-center">
              <div v-for="skill in category.skills" :key="skill.name" class="m-4">
                <div @mouseover="hoverColor(skill, true)" @mouseout="hoverColor(skill, false)">
                  <svg
                    :xmlns="skill.svg.xmlns"
                    :height="skill.svg.height"
                    :width="skill.svg.width"
                    :viewBox="skill.svg.viewBox"
                  >
                    <path :d="skill.svg.path" :fill="skill.color" />
                  </svg>
                </div>
                <p class="mt-2 text-gray-700 dark:text-gray-300">{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const skillCategories = [
    {
      name: 'Programming',
      skills: [
        { name: 'Python', svg: { xmlns: 'http://www.w3.org/2000/svg', height: 32, width: 24, viewBox: '0 0 384 512', path: 'M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z' }, color: '#008297' },
        { name: 'Javascript', svg: { xmlns: 'http://www.w3.org/2000/svg', height: 32, width: 24, viewBox: '0 0 384 512', path: 'M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z' }, color: '#E8D44D' },
        { name: 'HTML', svg: { xmlns: 'http://www.w3.org/2000/svg', height: 32, width: 24, viewBox: '0 0 384 512', path: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z' }, color: '#DD4B25' },
        { name: 'CSS', svg: { xmlns: 'http://www.w3.org/2000/svg', height: 32, width: 24, viewBox: '0 0 384 512', path: 'M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z' }, color: '#254BDD' },
        { name: 'Vue', svg: { xmlns: 'http://www.w3.org/2000/svg', height: 32, width: 24, viewBox: '0 0 384 512', path: 'M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z' }, color: '#3FB27F' },
      ],
    },
    {
      name: 'Databases',
      skills: [
        { name: 'SQL', svg: { xmlns: 'http://www.w3.org/2000/svg', height: 32, width: 24, viewBox: '0 0 384 512', path: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z' }, color: '#27ae60' },
        { name: 'MongoDB', svg: { xmlns: 'http://www.w3.org/2000/svg', height: 32, width: 24, viewBox: '0 0 384 512', path: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z' }, color: '#27ae60' },
        { name: 'PostgreSQL', svg: { xmlns: 'http://www.w3.org/2000/svg', height: 32, width: 24, viewBox: '0 0 384 512', path: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z' }, color: '#27ae60' },
      ],
    },
    {
      name: 'Libraries',
      skills: [
        { name: 'Git', svg: { xmlns: 'http://www.w3.org/2000/svg', height: 32, width: 24, viewBox: '0 0 384 512', path: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z' }, color: '#e74c3c' },
        
      ],
    },
    {
      name: 'Cloud and Editors',
      skills: [
        { name: 'Git', svg: { xmlns: 'http://www.w3.org/2000/svg', height: 32, width: 24, viewBox: '0 0 384 512', path: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z' }, color: '#e74c3c' },
        
      ],
    },
    {
      name: 'Other',
      skills: [
        { name: 'Git', svg: { xmlns: 'http://www.w3.org/2000/svg', height: 32, width: 24, viewBox: '0 0 384 512', path: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z' }, color: '#e74c3c' },
        
      ],
    },
  ];
  </script>
  
