<template>
    <div id="education">
      <h1>Education</h1>
      <div v-for="(educationItem, index) in educationData" :key="index" class="timeline-item">
        <div class="timeline-date">{{ educationItem.date }}</div>
        <div class="timeline-content">
          <h2>{{ educationItem.institution }}</h2>
          <p class="degree">{{ educationItem.degree }}</p>
          <p class="major">{{ educationItem.major }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        educationData: [
        {
            date: "2022 - 2024",
            institution: "Otto von Guericke University",
            degree: "Masters of Science",
            major: "Data and Knowledge Engineering"
          },
          {
            date: "2017 - 2021",
            institution: "Savitribai PhulePune University",
            degree: "Bachelors of Engineering",
            major: "Computer Engineering"
          },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  #education {
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
  }
  
  .timeline-item {
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    border-left: 2px solid #3498db; /* Timeline line color */
    padding-left: 20px;
    position: relative;
    font-weight: bold;
  }
  
  .timeline-date {
    width: 120px;
    font-weight: bold;
    font-size: 16px;
    color: #3498db; /* Date color */
  }
  
  .timeline-content {
    margin-left: 20px;
  }
  
  h2 {
    color: #000000; /* Institution name color */
    margin-bottom: 5px;
  }
  
  .degree, .major {
    color: #555; /* Degree and major color */
  }
  
h1 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #3498db; /* Header color */
  }
  </style>
  