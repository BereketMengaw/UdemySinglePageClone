<script setup>
const courses = [
  {
    title: "Crypto Condensed: The Complete Guide To Bitcoin",
    hours: "7 total hours",
    updated: "Updated 2/2024",
    rating: 4.3,
    students: "31,376",
    price: "$12.99",
    oldPrice: "$54.99",
    badge: "Bestseller",
  },
  {
    title: "Blockchain and Bitcoin Fundamentals",
    hours: "3 total hours",
    updated: "Updated 3/2025",
    rating: 4.6,
    students: "132,402",
    price: "$12.99",
    oldPrice: "$74.99",
    badge: "Bestseller",
  },
  {
    title: "Bitcoin Advanced Level: Transactions",
    hours: "1.5 total hours",
    updated: "Updated 3/2025",
    rating: 4.7,
    students: "5,900",
    price: "$12.99",
    oldPrice: "$59.99",
    badge: "Hot & New",
  },
  {
    title: "Bitcoin and Cryptocurrency Bootcamp",
    hours: "8.5 total hours",
    updated: "Updated 6/2018",
    rating: 4.4,
    students: "10,664",
    price: "$13.99",
    oldPrice: "$69.99",
  },
  {
    title: "Introduction to Bitcoin & Crypto Assets",
    hours: "1.5 total hours",
    updated: "Updated 12/2021",
    rating: 4.5,
    students: "3,881",
    price: "$9.99",
    oldPrice: "$34.99",
  },
];
</script>

<template>
  <div class="recommendations-container">
    <h2 class="recommendations-title">Students also bought</h2>
    <div class="courses-grid">
      <div v-for="(course, index) in courses" :key="index" class="course-card">
        <div class="course-badge" v-if="course.badge">{{ course.badge }}</div>
        <h3 class="course-title">{{ course.title }}</h3>
        <p class="course-details">
          <span class="course-hours">{{ course.hours }}</span>
          <span class="course-updated">{{ course.updated }}</span>
        </p>
        <div class="course-rating">
          <span class="rating-stars">★★★★★</span>
          <span class="rating-value">{{ course.rating }}</span>
          <span class="rating-count">({{ course.students }})</span>
        </div>
        <div class="course-pricing">
          <span class="current-price">{{ course.price }}</span>
          <span class="original-price">{{ course.oldPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recommendations-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-family: "Udemy Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 20px 0;
}

.recommendations-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1c1d1f;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.course-card {
  position: relative;
  padding: 16px;
  border: 1px solid #d1d7dc;
  border-radius: 4px;
  transition: box-shadow 0.2s ease;
}

.course-card:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.course-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #eceb98;
  color: #3d3c0a;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
}

.course-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  margin: 0 0 8px 0;
  color: #1c1d1f;
  min-height: 44px;
}

.course-details {
  font-size: 0.75rem;
  color: #6a6f73;
  margin: 0 0 8px 0;
  display: flex;
  gap: 8px;
}

.course-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
}

.rating-stars {
  color: #e59819;
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.rating-value {
  font-size: 0.875rem;
  font-weight: 700;
  color: #b4690e;
}

.rating-count {
  font-size: 0.75rem;
  color: #6a6f73;
}

.course-pricing {
  display: flex;
  align-items: center;
  gap: 8px;
}

.current-price {
  font-size: 1rem;
  font-weight: 700;
  color: #1c1d1f;
}

.original-price {
  font-size: 0.875rem;
  color: #6a6f73;
  text-decoration: line-through;
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }
}
</style>
