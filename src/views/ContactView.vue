<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-4xl font-bold mb-10 mt-20 dark:text-white">Let's get in touch!</h1>

    <div class="container mx-auto mb-10">
      Feel free to contact me about any opportunity, or just to chat about cats, trips or anything else.
    </div>

    <form @submit.prevent="submitForm" class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
        <input v-model="firstName" type="text" id="firstName" name="firstName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>

      <div class="mb-4">
        <label for="surname" class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
        <input v-model="surname" type="text" id="surname" name="surname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>

      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input v-model="email" type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>

      <div class="mb-4">
        <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea v-model="message" id="message" name="message" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
      </div>

      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      surname: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      const formspreeURL = 'https://formspree.io/f/meqyjqyr';

      const formData = {
        firstName: this.firstName,
        surname: this.surname,
        email: this.email,
        message: this.message,
      };

      this.$axios.post(formspreeURL, formData)
        .then(response => {
          console.log('Form submitted successfully', response);
          // You can also redirect or show a success message here
        })
        .catch(error => {
          console.error('Error submitting form', error);
          // Handle error, show a failure message, etc.
        });
    },
  },
};
</script>

<style scoped>
</style>
