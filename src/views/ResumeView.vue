<template>
  <div class="mt-24 max-w-6xl mx-auto px-4 relative">
    <div class="aurora-bg"></div>
    <div class="hero-spotlight"></div>
    <div class="flex flex-col md:flex-row items-start justify-between mb-12 relative z-10">
      <div class="mb-8 md:mb-0 max-w-2xl">
        <h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</h1>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full section-divider mb-6"></div>
        <div class="text-lg text-gray-700 dark:text-gray-300">
          <p class="mb-4">
            I'm <span class="font-semibold text-blue-600 dark:text-blue-400">Namit Bhalendra Kharade</span>, an AI & Software Engineer (M.Sc.) with 3+ years of experience building backend infrastructure for Generative AI.
          </p>
          <p class="mb-4">
            Proven track record of taking LLM applications from prototype to production, with expertise in GraphRAG systems, inference optimization, and automated evaluation pipelines.
          </p>
          <p>
            Currently pursuing a Master of Science in Data and Knowledge Engineering at Otto-von-Guericke University, Magdeburg while working as an AI Engineer at AIME GmbH in Berlin.
          </p>
        </div>
        <div class="mt-6">
          <a @click="downloadResume" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md cursor-pointer btn-premium">
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
                  <img src="../assets/imgs/aime.png" alt="AIME GmbH" class="w-12 h-12 object-contain rounded-lg bg-white p-1" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">AI Engineer</h3>
                  <a href="https://aime.info" target="_blank" class="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 inline-flex items-center">
                    AIME GmbH
                    <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-1 text-sm" />
                  </a>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Berlin, Germany</div>
                </div>
              </div>
              <div class="text-gray-600 dark:text-gray-300 text-sm font-medium mt-2 sm:mt-0">
                October 2024 - Present
              </div>
            </div>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Deployed scalable AI inference endpoints on AIME’s GPU Cloud, configuring the API server to manage high-concurrency model requests across distributed workers.</li>
              <li>Built a GraphRAG system using LangChain and Knowledge Graphs for multi-hop queries, backed by an evaluation pipeline with Ragas and G-Eval.</li>
              <li>Containerized Generative AI models (Stable Diffusion, Whisper) into AIME MLC for low-latency real-time inference.</li>
              <li>Documented performance metrics and research findings to streamline internal R&D workflows and knowledge sharing.</li>
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
                  <img src="../assets/imgs/aicoustics-gmbh.png" alt="ai-coustics GmbH" class="w-12 h-12 object-contain rounded-lg bg-white p-1" />
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
              <li>Orchestrated scalable ETL pipelines using Apache Airflow on Google Cloud Platform (GCP), automating ingestion into BigQuery.</li>
              <li>Developed Python automation scripts for raw audio sorting and archiving, reducing manual processing time by 50%.</li>
              <li>Integrated Yamnet and DNSMOS into the pipeline for automated tagging and audio quality scoring.</li>
              <li>Implemented automated quality checks to catch corrupted files and silence early, ensuring high-quality training data.</li>
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
              <li>Diagnosed and resolved bugs in a React and Django based web application, enhancing functionality and user experience.</li>
              <li>Integrated Large Language Models (LLMs) such as OpenAI’s GPT-3.5 and GPT-4 to improve user productivity.</li>
              <li>Enforced high code quality standards by developing comprehensive unit and system tests.</li>
              <li>Supported the development, configuration, and documentation of the project management application.</li>
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
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">Associate Software Engineer</h3>
                  <a href="https://www.accenture.com" target="_blank" class="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 inline-flex items-center">
                    Accenture
                    <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-1 text-sm" />
                  </a>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Pune, India</div>
                </div>
              </div>
              <div class="text-gray-600 dark:text-gray-300 text-sm font-medium mt-2 sm:mt-0">
                August 2021 - August 2022
              </div>
            </div>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Collaborated with cross-functional teams to create and train machine learning programs for British Telecom customer service.</li>
              <li>Analyzed and prepared data using Python and SQL for AI model training.</li>
              <li>Implemented CI/CD automation via Jenkins, reducing deployment cycles from 2 days to 4 hours.</li>
              <li>Participated in code reviews and upheld best practices to maintain code quality.</li>
            </ul>
          </div>
        </div>

        <!-- aiadventures -->
        <div class="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700">
          <div class="absolute -left-2.5 top-0 w-6 h-6 rounded-full bg-blue-600"></div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div class="flex flex-wrap justify-between items-start mb-4">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <img src="../assets/imgs/aiadv.png" alt="aiadventures" class="w-12 h-12 object-contain rounded-lg bg-white p-1" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">ML Engineer (Intern)</h3>
                  <a href="https://www.aiadventures.in/" target="_blank" class="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 inline-flex items-center">
                    aiadventures
                    <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-1 text-sm" />
                  </a>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Pune, India</div>
                </div>
              </div>
              <div class="text-gray-600 dark:text-gray-300 text-sm font-medium mt-2 sm:mt-0">
                December 2020 - May 2021
              </div>
            </div>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Developed a conversational AI agent using DialogFlow to provide real-time COVID-19 updates.</li>
              <li>Performed data augmentation and cleaning to expand training datasets for downstream AI models.</li>
              <li>Built applied ML prototypes for computer vision and NLP projects in a client-facing setting.</li>
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
          <p class="text-gray-600 dark:text-gray-400 mb-3">October 2022 - Dec 2025</p>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Master’s Thesis: Deployment and Evaluation of a Scalable GraphRAG System for MHQA using Diverse Open-Source LLMs on a CaaS Infrastructure.</li>
            <li>Focus Areas: Deep Learning, Cloud Computing, Natural Language Processing, Big Data Storage.</li>
          </ul>
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
          <p class="text-gray-600 dark:text-gray-400 mb-3">May 2017 - July 2021</p>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Key Coursework: Data Structures & Algorithms, Database Management Systems, Software Engineering.</li>
            <li>Final Grade: First Class with Distinction.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Skills Section with Visual Proficiency Bars -->
    <section class="mb-16">
      <div class="flex items-center mb-8">
        <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
          <font-awesome-icon icon="fa-solid fa-code" />
        </div>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Technical Proficiency</h2>
      </div>

      <!-- Visual Skill Bars -->
      <div class="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg mb-8 border border-blue-100 dark:border-gray-700">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Core Competencies</h3>
        <div class="space-y-6">
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-700 dark:text-gray-300 font-medium">LLM & Generative AI</span>
              <span class="text-blue-600 dark:text-blue-400 font-semibold">Expert • 95%</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 95%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-700 dark:text-gray-300 font-medium">Python & Backend Development</span>
              <span class="text-purple-600 dark:text-purple-400 font-semibold">Expert • 95%</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 95%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-700 dark:text-gray-300 font-medium">RAG & Knowledge Graphs</span>
              <span class="text-green-600 dark:text-green-400 font-semibold">Advanced • 90%</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-green-600 to-teal-600 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 90%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-700 dark:text-gray-300 font-medium">Data Engineering & ETL</span>
              <span class="text-yellow-600 dark:text-yellow-400 font-semibold">Advanced • 85%</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-yellow-600 to-orange-600 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 85%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-700 dark:text-gray-300 font-medium">MLOps & Cloud (GCP, AWS)</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-semibold">Advanced • 85%</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-indigo-600 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 85%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-700 dark:text-gray-300 font-medium">Machine Learning & Deep Learning</span>
              <span class="text-red-600 dark:text-red-400 font-semibold">Advanced • 85%</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-red-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 85%"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Generative AI & LLM Engineering</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">LLM Inference</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">RAG & GraphRAG</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">LangChain</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">LlamaIndex</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Ragas & G-Eval</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Machine Learning & Data Science</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">PyTorch</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">TensorFlow</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">Scikit-learn</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">Computer Vision</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">NLP & Speech</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">MLOps, Cloud & Infrastructure</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">GCP</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">AWS</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">Docker</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">Kubernetes</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">CI/CD (Jenkins)</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Data Engineering & Databases</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm">Apache Airflow</span>
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm">BigQuery</span>
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm">PostgreSQL (pgvector)</span>
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm">MongoDB</span>
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm">Vector DBs</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Languages & Web</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm">Python</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm">SQL</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm">JavaScript</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm">TypeScript</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm">React</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm">Vue.js</span>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Languages (Spoken)</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200 rounded-full text-sm">English (C1)</span>
            <span class="px-3 py-1 bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200 rounded-full text-sm">German (A2)</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="mb-16">
      <div class="flex items-center mb-8">
        <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
          <font-awesome-icon icon="fa-solid fa-certificate" />
        </div>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Certifications & Achievements</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
              <font-awesome-icon icon="fa-solid fa-award" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">AWS Certified Cloud Practitioner</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Amazon Web Services • 2023</p>
              <p class="text-sm text-gray-700 dark:text-gray-300">Foundational knowledge of AWS Cloud services and deployment</p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center text-white">
              <font-awesome-icon icon="fa-solid fa-star" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Best Paper Award</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">AIMV Conference 2021</p>
              <p class="text-sm text-gray-700 dark:text-gray-300">Helmet violation detection using deep learning</p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white">
              <font-awesome-icon icon="fa-solid fa-graduation-cap" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Machine Learning Specialization</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Stanford University (Coursera) • 2021</p>
              <p class="text-sm text-gray-700 dark:text-gray-300">Andrew Ng's comprehensive ML course</p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center text-white">
              <font-awesome-icon icon="fa-solid fa-code" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Deep Learning Specialization</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">DeepLearning.AI (Coursera) • 2020</p>
              <p class="text-sm text-gray-700 dark:text-gray-300">Neural networks and deep learning fundamentals</p>
            </div>
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
          <p class="text-gray-700 dark:text-gray-300 mb-4">Engineered a real-time object detection pipeline using YOLOv4 to optimize inference speed and accuracy.</p>
          <a href="https://ieeexplore.ieee.org/document/9670937" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
            View Publication
            <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-2" />
          </a>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">COVID-19 pandemic deep learning implementations of prediction of disease with data analysis and real-time face-mask detection with camera</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">Presented at the 2021 International Conference on Artificial Intelligence and Machine Vision (AIMV).</p>
          <p class="text-gray-700 dark:text-gray-300 mb-4">Implemented a hybrid system for real-time mask detection and predictive modeling, optimized for low-latency deployment.</p>
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
  try {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Namit_Bhalendra_Kharade_CV.pdf';
    link.target = '_blank';
    
    // Test if file exists before attempting download
    fetch(link.href, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // File exists, proceed with download
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // File doesn't exist
          console.error('Resume file not found');
          alert('Resume file is currently unavailable. Please contact me directly at namit.b.kharade@gmail.com');
        }
      })
      .catch(error => {
        console.error('Error checking resume file:', error);
        // Attempt download anyway as fallback
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  } catch (error) {
    console.error('Error downloading resume:', error);
    alert('Error downloading resume. Please try again or contact me directly.');
  }
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
