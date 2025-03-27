<template>
  <div class="course-page">
    <h1>{{ course.title }}</h1>
    <img :src="course.image" alt="Course Image" />
    <p>{{ course.description }}</p>
    
    <div class="course-details">
      <h2>Details</h2>
      <ul>
        <li><strong>Instructor:</strong> {{ course.instructor }}</li>
        <li><strong>Duration:</strong> {{ course.duration }}</li>
        <li><strong>Price:</strong> {{ course.price }}</li>
      </ul>
    </div>

    <div class="course-reviews">
      <h2>Reviews</h2>
      <ul>
        <li v-for="review in course.reviews" :key="review.id">
          <strong>{{ review.user }}:</strong> {{ review.comment }} (Rating: {{ review.rating }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: {
        title: 'Sample Course Title',
        image: '/path/to/course-image.jpg',
        description: 'This is a sample description of the course.',
        instructor: 'Instructor Name',
        duration: '10 hours',
        price: '$99',
        reviews: [
          { id: 1, user: 'User1', comment: 'Great course!', rating: 5 },
          { id: 2, user: 'User2', comment: 'Very informative.', rating: 4 },
        ],
      },
    };
  },
};
</script>

<style scoped>
.course-page {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.course-details, .course-reviews {
  margin-top: 20px;
}
</style>