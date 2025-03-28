<script setup>
const courses = [
  {
    title: "Crypto Condensed: The Complete Guide To Bitcoin",
    image: "/two.jpg", // Replace with actual image path
    hours: "7 total hours",
    updated: "Updated 2/2024",
    rating: 4.3,
    students: "31,376",
    price: "$12.99",
    oldPrice: "$54.99",
  },
  {
    title: "Blockchain and Bitcoin Fundamentals",
    image: "/five.jpg",
    hours: "3 total hours",
    updated: "Updated 3/2025",
    rating: 4.6,
    students: "132,402",
    price: "$12.99",
    oldPrice: "$74.99",
  },
  {
    title: "Bitcoin Advanced Level: Transactions",
    image: "/three.webp",
    hours: "1.5 total hours",
    updated: "Updated 3/2025",
    rating: 4.7,
    students: "5,900",
    price: "$12.99",
    oldPrice: "$59.99",
  },
  {
    title: "Bitcoin and Cryptocurrency Bootcamp",
    image: "/four.jpg",
    hours: "8.5 total hours",
    updated: "Updated 6/2018",
    rating: 4.4,
    students: "10,664",
    price: "$13.99",
    oldPrice: "$69.99",
  },
];
</script>

<template>
  <div class="students-bought-section">
    <h2 class="section-title">Students also bought</h2>
    <div class="courses-list">
      <div v-for="(course, index) in courses" :key="index" class="course-card">
        <img :src="course.image" alt="Course Image" class="course-image" />
        <div class="course-info">
          <h3 class="course-title">{{ course.title }}</h3>
          <p class="course-meta">
            <span class="course-hours">{{ course.hours }}</span> •
            <span class="course-updated">{{ course.updated }}</span>
          </p>
          <div class="course-rating">
            <span class="rating-value">{{ course.rating }}</span>
            <span class="stars">
              <i class="fas fa-star"></i>
            </span>
            <span class="students-count">({{ course.students }})</span>
          </div>
          <div class="course-pricing">
            <span class="current-price">{{ course.price }}</span>
            <span class="old-price" v-if="course.oldPrice">{{
              course.oldPrice
            }}</span>
          </div>
        </div>
        <button class="wishlist-btn">
          <i class="far fa-heart"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.students-bought-section {
  width: 100%;
  max-width: 900px;
  margin: 0 80px;
  font-family: "Udemy Sans", sans-serif;
  padding: 20px 0;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1c1d1f;
}

.courses-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.course-card {
  display: flex;
  align-items: center;
  border: 1px solid #d1d7dc;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  transition: background 0.2s;
  position: relative;
}

.course-card:hover {
  background: #f9f9f9;
}

.course-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.course-info {
  flex: 1;
  padding-left: 12px;
}

.course-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1c1d1f;
  margin-bottom: 4px;
}

.course-meta {
  font-size: 0.75rem;
  color: #6a6f73;
}

.course-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
  margin-top: 6px;
}

.rating-value {
  font-weight: bold;
  color: #b4690e;
}

.stars {
  color: #e59819;
}

.students-count {
  font-size: 0.75rem;
  color: #6a6f73;
}

.course-pricing {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
}

.current-price {
  font-size: 1rem;
  font-weight: bold;
  color: #1c1d1f;
}

.old-price {
  font-size: 0.875rem;
  color: #6a6f73;
  text-decoration: line-through;
}

.wishlist-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #6a6f73;
  position: absolute;
  right: 10px;
  top: 10px;
}

.wishlist-btn:hover {
  color: #b4690e;
}
</style>
