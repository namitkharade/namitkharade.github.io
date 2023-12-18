<template>
  <div class="max-w-md mt-8 p-4 ml-8">
    <h1 class="text-4xl font-bold mb-10 dark:text-white">Let's get in touch!</h1>

    <div class="container mx-auto mb-10 dark:text-white">
      Feel free to contact me about any opportunity, or just to chat about cats, trips or anything else.
    </div>

    <form accept-charset="UTF-8" action="https://www.formbackend.com/f/b47ae1103a302d18" method="POST">
      <div class="mb-4  dark:text-white">
        <label for="name" class="block text-sm font-bold mb-1">Name</label>
        <input type="text" id="name" name="name" required class="w-full border border-gray-300 px-3 py-2 rounded">
      </div>

      <div class="mb-4 dark:text-white">
        <label for="email" class="block text-sm font-bold mb-1">Email</label>
        <input type="email" id="email" name="email" required class="w-full border border-gray-300 px-3 py-2 rounded">
      </div>

      <div class="mb-4 dark:text-white">
        <label for="message" class="block text-sm font-bold mb-1">Message</label>
        <textarea id="message" name="message" required class="w-full border border-gray-300 px-3 py-2 rounded"></textarea>
      </div>

      <button type="submit" class="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded">Send message</button>
    </form>
  </div>
</template>

