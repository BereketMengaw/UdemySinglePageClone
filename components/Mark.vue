<script setup>
const instructor = {
  name: "ACI69 | Trading™",
  title: "Ingegnere Informatico Best Seller – Impara e Guadagna!",
  profileImage: "/trading.webp", // Replace with actual image path
  rating: 4.5,
  reviews: "3,024",
  students: "14,311",
  courses: "53",
  bio: [
    "★ Impara, Applica, Guadagna!",
    "Mi occupo di formazione online da 18 anni",
    "✔ senza fronzoli",
    "✔ senza piedistalli del cavolo",
    "✔ senza perdite di tempo",
  ],
};
</script>

<template>
  <div class="instructor-section">
    <h2 class="instructor-title">Instructor</h2>
    <div class="instructor-profile">
      <img
        :src="instructor.profileImage"
        alt="Instructor Image"
        class="profile-img"
      />
      <div class="profile-info">
        <h3 class="name">{{ instructor.name }}</h3>
        <p class="title">{{ instructor.title }}</p>
        <ul class="stats">
          <li>
            <i class="fas fa-star"></i> {{ instructor.rating }} Instructor
            Rating
          </li>
          <li>
            <i class="fas fa-comment"></i> {{ instructor.reviews }} Reviews
          </li>
          <li>
            <i class="fas fa-user"></i> {{ instructor.students }} Students
          </li>
          <li>
            <i class="fas fa-play-circle"></i> {{ instructor.courses }} Courses
          </li>
        </ul>
      </div>
    </div>
    <div class="bio">
      <ul>
        <li
          v-for="(line, index) in instructor.bio"
          :key="index"
          v-html="line"
        ></li>
      </ul>
    </div>
    <button class="show-more">Show more</button>
  </div>
</template>

<style scoped>
.instructor-section {
  width: 100%;
  max-width: 600px;
  margin-left: 80px;
  font-family: "Udemy Sans", sans-serif;
  color: #1c1d1f;
  padding: 20px 0;
}

.instructor-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.instructor-profile {
  display: flex;
  align-items: center;
  gap: 16px;
}

.profile-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.profile-info {
  flex: 1;
}

.name {
  font-size: 1.2rem;
  font-weight: bold;
}

.title {
  font-size: 0.9rem;
  color: #6a6f73;
  margin-bottom: 6px;
}

.stats {
  list-style: none;
  padding: 0;
  font-size: 0.9rem;
}

.stats li {
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #6a6f73;
}

.bio {
  margin-top: 10px;
  font-size: 0.9rem;
}

.bio ul {
  padding-left: 0;
  list-style: none;
}

.bio li {
  margin-bottom: 6px;
}

.show-more {
  background: none;
  border: none;
  color: #5624d0;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 6px;
}

.show-more:hover {
  text-decoration: underline;
}
</style>
