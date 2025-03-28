<template>
  <div class="min-h-screen flex flex-col">
    <!-- NavBar at the top -->
    <NavBar />

    <!-- Main content area -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <div class="max-w-7xl mx-auto">
        <!-- Hero Section -->
        <section class="text-center py-12 md:py-20">
          <CourseContent />
          <courseReviews />
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best courses to enhance your skills and advance your
            career.
          </p>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best courses to enhance your skills and advance your
            career.
          </p>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best courses to enhance your skills and advance your
            career.
          </p>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best courses to enhance your skills and advance your
            career.
          </p>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best courses to enhance your skills and advance your
            career.
          </p>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best courses to enhance your skills and advance your
            career.
          </p>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best courses to enhance your skills and advance your
            career.
          </p>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best courses to enhance your skills and advance your
            career.
          </p>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best courses to enhance your skills and advance your
            career.
          </p>
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
    CourseContent: () => import("~/components/CourseContent.vue"),
    courseReviews: () => import("~/components/CourseReviews.vue"),
  },

  // async asyncData({ $axios }) {
  //   const courses = await $axios.$get('/api/courses')
  //   return { courses }
  // }
};
</script>

<style scoped>
.course-sidebar {
  position: fixed;
  right: 80px;
  top: 150px;
  width: 300px;
  background: #fff;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #ddd;
  z-index: 1000; /* Ensure it stays on top of other content */
}

.preview {
  text-align: center;
  margin-bottom: 20px;
}

.preview-img {
  width: 100%;
  border-radius: 8px;
}

.preview-btn {
  width: 100%;
  background: #facc15;
  border: none;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
}

.pricing {
  text-align: center;
  margin-bottom: 20px;
}

.price {
  font-size: 24px;
  font-weight: bold;
}

.old-price {
  text-decoration: line-through;
  color: #888;
}

.discount {
  color: red;
  font-weight: bold;
}

.urgent {
  color: red;
  font-weight: bold;
}

.add-to-cart,
.buy-now {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.add-to-cart {
  background: #a855f7;
  color: white;
}

.buy-now {
  background: #9333ea;
  color: white;
}

.money-back {
  font-size: 12px;
  color: #555;
  margin-top: 10px;
}

.course-details {
  margin-top: 20px;
}

.course-details h3 {
  font-size: 18px;
  font-weight: bold;
}

.course-details ul {
  list-style: none;
  padding: 0;
}

.course-details li {
  font-size: 14px;
  padding: 5px 0;
}

.coupon {
  margin-top: 20px;
}

.coupon-box {
  display: flex;
}

.coupon-box input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
}

.apply-btn {
  background: #22c55e;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
}

.business {
  margin-top: 20px;
  text-align: center;
}

.business-btn {
  background: #3b82f6;
  color: white;
  padding: 10px;
}
</style>
