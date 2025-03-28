<template>
  <div>
    <div class="course-details">
      <h3 class="title">What you'll learn</h3>
      <div class="content">
        <ul class="list">
          <li>✔ Guadagnare 10$ (circa 8€) di Benvenuto GRATIS</li>
          <li>✔ Come Funziona Coinbase Per Comprare Altre Criptovalute</li>
        </ul>
        <ul class="list">
          <li>✔ Come Funziona Coinbase Per Comprare BITCOIN</li>
        </ul>
      </div>
    </div>
    <div class="explore-topics">
      <h3>Explore related topics</h3>
      <div class="topics">
        <span>Bitcoin</span>
        <span>Cryptocurrency & Blockchain</span>
        <span>Finance & Accounting</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.course-details {
  background-color: white;

  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-left: 30px;
  border-radius: 8px;
  border: 1px solid #ddd; /* Light gray border */
  font-family: Arial, sans-serif;
  color: #333;
  width: fit-content;
}

.title {
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 15px;
}

.content {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list li {
  font-size: 14px;
  padding: 5px 0;
  display: flex;
  align-items: center;
}

.list li::before {
  color: black;
  font-weight: bold;
  margin-right: 8px;
}

.explore-topics {
  margin-top: 20px;
  margin-left: 60px;
}

.topics {
  display: flex;
  gap: 10px;
}

.topics span {
  background: #eee;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  border: 2px solid rgb(10, 9, 9);
}
</style>
