<template>
  <div class="mt-24 max-w-4xl mx-auto px-4 relative">
    <div class="aurora-bg"></div>
    <div class="hero-spotlight"></div>
    <div class="text-center mb-12 relative z-10">
      <h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Let's Connect!
      </h1>
      <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full section-divider mb-6"></div>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Open to AI engineering roles, research collaborations, and production-ready LLM projects. Let’s build something impactful.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
      <!-- Contact Information -->
      <div class="space-y-8">
        <div class="glass-panel p-6 rounded-2xl">
          <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Get in Touch</h2>
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <font-awesome-icon icon="fa-solid fa-envelope" />
              </div>
              <div>
                <p class="font-medium text-gray-800 dark:text-white">Email</p>
                <a href="mailto:namit.b.kharade@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline">
                  namit.b.kharade@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                <font-awesome-icon icon="fa-solid fa-phone" />
              </div>
              <div>
                <p class="font-medium text-gray-800 dark:text-white">Phone</p>
                <a href="tel:+4917637249426" class="text-emerald-600 dark:text-emerald-400 hover:underline">
                  +49 176 37249426
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
              </div>
              <div>
                <p class="font-medium text-gray-800 dark:text-white">Location</p>
                <p class="text-gray-600 dark:text-gray-300">Berlin, Germany</p>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white">
                <font-awesome-icon icon="fa-solid fa-globe" />
              </div>
              <div>
                <p class="font-medium text-gray-800 dark:text-white">Portfolio</p>
                <a href="https://namitkharade.github.io" target="_blank" class="text-cyan-600 dark:text-cyan-400 hover:underline">
                  namitkharade.github.io
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="glass-panel p-6 rounded-2xl">
          <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Connect on Social Media</h3>
          <div class="flex space-x-4">
            <a href="https://www.linkedin.com/in/namit-k/" target="_blank" 
               class="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300">
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
            <a href="https://github.com/namitkharade" target="_blank"
               class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors duration-300">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
            <a href="https://www.instagram.com/namit_nk/" target="_blank"
               class="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-300">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
          </div>
        </div>

        <!-- Quick Info -->
        <div class="glass-panel p-6 rounded-2xl">
          <h3 class="text-lg font-bold mb-3 text-gray-800 dark:text-white">Quick Info</h3>
          <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p><span class="font-medium">Current Role:</span> AI Engineer at AIME GmbH</p>
            <p><span class="font-medium">Focus:</span> GraphRAG, LLM Inference, Evaluation Pipelines</p>
            <p><span class="font-medium">Education:</span> M.Sc. Data & Knowledge Engineering (Otto-von-Guericke University)</p>
            <p><span class="font-medium">Languages:</span> English (C1), German (A2)</p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="glass-panel p-8 rounded-2xl shadow-lg">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send me a Message</h2>
        
        <!-- Success/Error Messages -->
        <div v-if="showSuccess" class="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <div class="flex items-center">
            <font-awesome-icon icon="fa-solid fa-check-circle" class="mr-2" />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        </div>

        <div v-if="showError" class="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <div class="flex items-center">
            <font-awesome-icon icon="fa-solid fa-exclamation-circle" class="mr-2" />
            <span>{{ errorMessage }}</span>
          </div>
        </div>

        <form @submit.prevent="sendEmail" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Name *
            </label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
              placeholder="Enter your full name"
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
              placeholder="your.email@example.com"
            >
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject
            </label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject" 
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
              placeholder="What's this about?"
            >
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message *
            </label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required 
              rows="5"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300 resize-none"
              placeholder="Tell me about your project, opportunity, or just say hello!"
            ></textarea>
          </div>

          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center btn-premium"
          >
            <font-awesome-icon v-if="isLoading" icon="fa-solid fa-spinner" class="animate-spin mr-2" />
            <font-awesome-icon v-else icon="fa-solid fa-paper-plane" class="mr-2" />
            {{ isLoading ? 'Sending...' : 'Send Message' }}
          </button>
        </form>

        <p class="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
          Your information is secure and will only be used to respond to your message.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import emailConfig from '../config/email.js';

export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isLoading: false,
      showSuccess: false,
      showError: false,
      errorMessage: ''
    };
  },
  methods: {
    validateEmail(email) {
      // RFC 5322 compliant email validation
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return emailRegex.test(email);
    },
    
    async sendEmail() {
      this.isLoading = true;
      this.showSuccess = false;
      this.showError = false;
      this.errorMessage = '';

      try {
        // Validate email format
        if (!this.validateEmail(this.form.email)) {
          throw new Error('Please enter a valid email address.');
        }
        
        // Validate required fields
        if (!this.form.name || !this.form.name.trim()) {
          throw new Error('Please enter your name.');
        }
        
        if (!this.form.message || !this.form.message.trim()) {
          throw new Error('Please enter a message.');
        }
        
        // Check if EmailJS is configured
        if (emailConfig.serviceID === 'YOUR_SERVICE_ID' || 
            emailConfig.templateID === 'YOUR_TEMPLATE_ID' || 
            emailConfig.publicKey === 'YOUR_PUBLIC_KEY') {
          throw new Error('EmailJS not configured. Please update src/config/email.js with your EmailJS credentials.');
        }

        const templateParams = {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject || 'New message from portfolio contact form',
          message: this.form.message,
          to_email: 'namit.b.kharade@gmail.com'
        };

        await emailjs.send(
          emailConfig.serviceID, 
          emailConfig.templateID, 
          templateParams, 
          emailConfig.publicKey
        );
        
        this.showSuccess = true;
        this.resetForm();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);

      } catch (error) {
        console.error('Error sending email:', error);
        this.showError = true;
        
        if (error.message.includes('EmailJS not configured')) {
          this.errorMessage = 'Email service not configured yet. Please contact me directly at namit.b.kharade@gmail.com';
        } else {
          this.errorMessage = 'Failed to send message. Please try again or contact me directly via email.';
        }
        
        // Hide error message after 8 seconds
        setTimeout(() => {
          this.showError = false;
        }, 8000);
      } finally {
        this.isLoading = false;
      }
    },
    
    resetForm() {
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
/* Custom animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.3s ease-out;
}

/* Custom gradient background */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>

