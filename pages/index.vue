<template>
  <div class="min-h-screen flex flex-col">
    <!-- NavBar at the top -->
    <NavBar />

    <!-- Main content area -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <div class="max-w-7xl mx-auto">
        <!-- Hero Section -->
        <section class="text-center py-12 md:py-20">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to Our Courses
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best courses to enhance your skills and advance your
            career.
          </p>
        </section>

        <!-- Featured Courses Section -->
        <section class="py-12">
          <h2 class="text-3xl font-semibold text-gray-800 mb-8">
            Featured Courses
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Course cards would go here -->
            <div
              v-for="i in 3"
              :key="i"
              class="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div class="h-48 bg-gray-200"></div>
              <div class="p-6">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Course Title {{ i }}
                </h3>
                <p class="text-gray-600 mb-4">
                  Brief course description goes here.
                </p>
                <button
                  class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2023 Your Course Platform. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("~/components/NavBar.vue"),
  },
  // You could add data fetching here if needed
  // async asyncData({ $axios }) {
  //   const courses = await $axios.$get('/api/courses')
  //   return { courses }
  // }
};
</script>

<style>
/* You can keep your existing styles or remove them if using Tailwind */
/* The Tailwind classes above handle most styling */
</style>
