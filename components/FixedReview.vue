<template>
  <div class="fixed-review">
    <div class="content">
      <h2 class="title">Coinbase Come Comprare Bitcoin e Guadagnare™?</h2>
      <div class="details">
        <span class="rating">4.7 ⭐</span>
        <a href="#" class="ratings-link">(50 ratings)</a>
        <span class="students">1,127 students</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fixed-review {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #0d0d12; /* Dark background */
  color: white;
  padding: 10px 35px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 500;
  font-family: Arial, sans-serif;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Align content to the left */
}

.title {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 4px; /* Adds a little spacing between title and details */
}

.details {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rating {
  color: #ffc107; /* Yellow for star rating */
  font-weight: bold;
}

.ratings-link {
  color: #1e90ff; /* Blue color for link */
  text-decoration: none;
  font-size: 12px;
}

.ratings-link:hover {
  text-decoration: underline;
}

.students {
  font-size: 12px;
  color: #ccc; /* Light gray */
}
</style>
