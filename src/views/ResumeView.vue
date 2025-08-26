<template>
  <div class="mt-24 max-w-6xl mx-auto px-4">
    <div class="flex flex-col md:flex-row items-start justify-between mb-12">
      <div class="mb-8 md:mb-0 max-w-2xl">
        <h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</h1>
        <div class="text-lg text-gray-700 dark:text-gray-300">
          <p class="mb-4">
            I'm <span class="font-semibold text-blue-600 dark:text-blue-400">Namit Bhalendra Kharade</span>, an AI Engineer with expertise in Data Science, Machine Learning, and Data Engineering.
          </p>
          <p>
            Currently pursuing a Master of Science in Data and Knowledge Engineering at Otto-von-Guericke University, Magdeburg while working as an AI Engineer at AIME GmbH in Berlin.
          </p>
        </div>
        <div class="mt-6">
          <a @click="downloadResume" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md cursor-pointer">
            <font-awesome-icon icon="fa-solid fa-download" class="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
      <div class="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
        <img src="../assets/imgs/profile.jpg" alt="Namit Kharade" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Experience Section -->
    <section class="mb-16">
      <div class="flex items-center mb-8">
        <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
          <font-awesome-icon icon="fa-solid fa-briefcase" />
        </div>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Professional Experience</h2>
      </div>

      <!-- AIME GmbH -->
      <div class="mb-10 ml-14">
        <div class="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700">
          <div class="absolute -left-2.5 top-0 w-6 h-6 rounded-full bg-blue-600"></div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div class="flex flex-wrap justify-between items-start mb-4">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <img src="../assets/imgs/aiadv.png" alt="AIME GmbH" class="w-12 h-12 object-contain rounded-lg bg-white p-1" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">AI Engineer (part-time)</h3>
                  <a href="https://aime.info" target="_blank" class="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 inline-flex items-center">
                    AIME GmbH
                    <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-1 text-sm" />
                  </a>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Berlin, Germany</div>
                </div>
              </div>
              <div class="text-gray-600 dark:text-gray-300 text-sm font-medium mt-2 sm:mt-0">
                November 2024 - Present
              </div>
            </div>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Conducted benchmarking for various AI models on AIME's servers, improving computational efficiency.</li>
              <li>Implemented demonstrations of AI models (e.g., Whisper, Llama Chat, Stable Diffusion) to demonstrate AIME's cloud capabilities for real-time applications.</li>
              <li>Document findings and performance metrics, providing comprehensive documentation to enhance knowledge sharing and streamline future research and development.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ai-coustics GmbH -->
      <div class="mb-10 ml-14">
        <div class="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700">
          <div class="absolute -left-2.5 top-0 w-6 h-6 rounded-full bg-blue-600"></div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div class="flex flex-wrap justify-between items-start mb-4">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    ai
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">Data Engineer</h3>
                  <a href="https://ai-coustics.com" target="_blank" class="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 inline-flex items-center">
                    ai-coustics GmbH
                    <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-1 text-sm" />
                  </a>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Berlin, Germany</div>
                </div>
              </div>
              <div class="text-gray-600 dark:text-gray-300 text-sm font-medium mt-2 sm:mt-0">
                February 2024 - August 2024
              </div>
            </div>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Developed and maintained Python scripts to sort and archive audio files into a cloud-based database system on Google Cloud Platform (GCP), achieving a 50% reduction in file processing time.</li>
              <li>Designed, built, and managed robust data pipeline using Apache Airflow, ensuring efficient ETL processes for data collection, transformation, and loading into BigQuery.</li>
              <li>Implemented automatic labeling plugins (Yamnet, DNSMOS) for efficient categorization and tagging of audio files to improve data organization and accessibility.</li>
              <li>Ensured data accuracy, consistency, and integrity by implementing rigorous data quality checks and cleaning processes.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- aiio GmbH -->
      <div class="mb-10 ml-14">
        <div class="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700">
          <div class="absolute -left-2.5 top-0 w-6 h-6 rounded-full bg-blue-600"></div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div class="flex flex-wrap justify-between items-start mb-4">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <img src="../assets/imgs/aiio-gmbh.png" alt="aiio GmbH" class="w-12 h-12 object-contain rounded-lg bg-white p-1" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">Software Engineer</h3>
                  <a href="https://aiio.de" target="_blank" class="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 inline-flex items-center">
                    aiio GmbH
                    <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-1 text-sm" />
                  </a>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Magdeburg, Germany</div>
                </div>
              </div>
              <div class="text-gray-600 dark:text-gray-300 text-sm font-medium mt-2 sm:mt-0">
                March 2023 - January 2024
              </div>
            </div>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Diagnosed and resolved bugs in a React and Django based web application, enhancing functionality and improving the overall user experience.</li>
              <li>Integrated Large Language Models (LLMs) such as OpenAI's GPT-3.5 and GPT-4 models, applying AI to improve user productivity and ease of use.</li>
              <li>Developed and executed comprehensive unit tests and conducted rigorous system testing to ensure high software quality.</li>
              <li>Supported the development, configuration, and documentation of the Project Management application, contributing to increased project efficiency and collaboration.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Additional Experiences (Hidden by default) -->
      <div v-show="showMoreExperience" class="space-y-10 ml-14">
        <!-- Accenture -->
        <div class="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700">
          <div class="absolute -left-2.5 top-0 w-6 h-6 rounded-full bg-blue-600"></div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div class="flex flex-wrap justify-between items-start mb-4">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <img src="../assets/imgs/accenture.png" alt="Accenture" class="w-12 h-12 object-contain rounded-lg bg-white p-1" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">Application Development Associate</h3>
                  <a href="https://www.accenture.com" target="_blank" class="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 inline-flex items-center">
                    Accenture
                    <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-1 text-sm" />
                  </a>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Pune, India</div>
                </div>
              </div>
              <div class="text-gray-600 dark:text-gray-300 text-sm font-medium mt-2 sm:mt-0">
                August 2021 - September 2022
              </div>
            </div>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Worked as part of an agile development team to design, develop, and maintain enterprise-level applications.</li>
              <li>Collaborated with cross-functional teams to gather requirements and implement business solutions.</li>
              <li>Participated in code reviews, testing, and deployment processes to ensure high-quality deliverables.</li>
              <li>Gained experience in software development lifecycle and enterprise application architecture.</li>
            </ul>
          </div>
        </div>

        <!-- Freelance/Projects -->
        <div class="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700">
          <div class="absolute -left-2.5 top-0 w-6 h-6 rounded-full bg-blue-600"></div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div class="flex flex-wrap justify-between items-start mb-4">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    F
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">Freelance Developer & Researcher</h3>
                  <h4 class="text-lg font-medium text-blue-600 dark:text-blue-400">Independent</h4>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Remote</div>
                </div>
              </div>
              <div class="text-gray-600 dark:text-gray-300 text-sm font-medium mt-2 sm:mt-0">
                2020 - 2022
              </div>
            </div>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Developed machine learning projects including helmet violation detection and COVID-19 mask detection systems.</li>
              <li>Published research papers in IEEE conferences on computer vision and deep learning applications.</li>
              <li>Built web applications using modern frameworks and collaborated with clients on custom solutions.</li>
              <li>Contributed to open-source projects and maintained personal GitHub portfolio with 20+ repositories.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- View more experiences button -->
      <div class="text-center mt-8">
        <button @click="toggleExperience" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-flex items-center shadow-md">
          <font-awesome-icon :icon="showMoreExperience ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" class="mr-2" />
          {{ showMoreExperience ? 'Show Less Experience' : 'View More Experience' }}
        </button>
      </div>
    </section>

    <!-- Education Section -->
    <section class="mb-16">
      <div class="flex items-center mb-8">
        <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
          <font-awesome-icon icon="fa-solid fa-graduation-cap" />
        </div>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Education</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Otto-von-Guericke University -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div class="flex items-center mb-4">
            <img src="../assets/imgs/OVGU.png" alt="OVGU" class="w-12 h-12 mr-4 object-contain" />
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Otto-von-Guericke University</h3>
              <p class="text-gray-600 dark:text-gray-400">Magdeburg, Germany</p>
            </div>
          </div>
          <p class="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Master of Science</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2">Data and Knowledge Engineering (Data Science)</p>
          <p class="text-gray-600 dark:text-gray-400">October 2022 - Present</p>
        </div>

        <!-- Savitribai Phule Pune University -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div class="flex items-center mb-4">
            <img src="../assets/imgs/Savitribai_Phule_Pune_University_Logo.png" alt="SPPU" class="w-12 h-12 mr-4 object-contain" />
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Savitribai Phule Pune University</h3>
              <p class="text-gray-600 dark:text-gray-400">Pune, India</p>
            </div>
          </div>
          <p class="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Bachelor of Engineering</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2">Computer Engineering</p>
          <p class="text-gray-600 dark:text-gray-400">May 2017 - July 2021</p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="mb-16">
      <div class="flex items-center mb-8">
        <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
          <font-awesome-icon icon="fa-solid fa-code" />
        </div>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Skills</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Data Engineering & Analysis</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">SQL</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Python (Pandas, NumPy)</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">BigQuery</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Apache Airflow</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Docker</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Databricks</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Machine Learning & AI</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">TensorFlow</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">PyTorch</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">Scikit-learn</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">NLP</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">Generative AI</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">Computer Vision</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Programming Languages</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">Python</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">JavaScript</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">TypeScript</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">C++</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">C</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Cloud & Web Development</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm">GCP</span>
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm">AIME GPU Cloud</span>
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm">HTML/CSS</span>
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm">Vue.js</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Publications Section -->
    <section class="mb-16">
      <div class="flex items-center mb-8">
        <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
          <font-awesome-icon icon="fa-solid fa-book" />
        </div>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Publications</h2>
      </div>

      <div class="space-y-8">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Deep-learning based helmet violation detection system</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">Presented at the 2021 International Conference on Artificial Intelligence and Machine Vision (AIMV).</p>
          <a href="https://ieeexplore.ieee.org/document/9670937" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
            View Publication
            <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-2" />
          </a>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">COVID-19 pandemic deep learning implementations of prediction of disease with data analysis and real-time face-mask detection with camera</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">Presented at the 2021 International Conference on Artificial Intelligence and Machine Vision (AIMV).</p>
          <a href="https://ieeexplore.ieee.org/document/9670960" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
            View Publication
            <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-2" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showMoreExperience = ref(false);

const downloadResume = () => {
  // Create a link element and trigger download
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'Namit_Kharade_Resume.pdf';
  link.target = '_blank';
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const toggleExperience = () => {
  showMoreExperience.value = !showMoreExperience.value;
};
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
