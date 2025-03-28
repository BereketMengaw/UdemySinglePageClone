<template>
  <div class="min-h-screen flex flex-col">
    <!-- NavBar at the top -->
    <NavBar />
    <FixedReview />

    <!-- Main content area -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <div class="max-w-7xl mx-auto">
        <!-- Hero Section -->
        <section class="text-center py-12 md:py-20">
          <CourseContent />
          <InstructorDetails />
          <ChapterList />
          <Requirment />
          <Students />
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
    FixedReview: () => import("~/components/FixedReview.vue"),
    CourseReviewTwo: () => import("~/components/CourseReviewTwo.vue"),
    InstructorDetails: () => import("~/components/InstructorDetails.vue"),
    ChapterList: () => import("~/components/ChapterList.vue"),
    Requirment: () => import("~/components/Requirment.vue"),
    Students: () => import("~/components/Students.vue"),
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
