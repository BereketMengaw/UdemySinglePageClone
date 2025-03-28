<template>
  <div>
    <div class="container">
      <div class="left">
        <p class="breadcrumb text-sm text-white">
          Finance & Accounting > Cryptocurrency & Blockchain > Bitcoin
        </p>
        <h1 class="title">Coinbase Come Comprare Bitcoin e Guadagnare™?</h1>
        <p class="subtitle">
          Come Acquistare e Guadagnare Facilmente Bitcoin Su Coinbase Corso
          Online Completo In Italiano
        </p>
        <p class="rating">⭐⭐⭐⭐ (50 ratings) | 1,127 students</p>
        <p class="author">
          Created by <span class="highlight">ACI69 | Trading™</span>
        </p>
        <p class="updated">📅 Last updated 3/2025 | 🌍 Italian [Auto]</p>
      </div>
      <div class="right">
        <courseReviews />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    courseReviews: () => import("~/components/CourseReviews.vue"),
  },
};
</script>

<style scoped>
.text-white {
  color: #fff;
}
.container {
  display: flex;
  background-color: #070715; /* Almost black with a hint of blue */
  z-index: 700;
  color: white;
  padding: 20px;
  padding-left: 140px;
  height: 45vh;
}

.left {
  width: 60%;
}

.breadcrumb {
  font-size: 12px;
  color: #bbb;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}

.subtitle {
  font-size: 16px;
  margin-top: 5px;
  padding: 10px 0;
}

.rating {
  font-size: 14px;
  margin-top: 10px;
  padding: 10px 0;
}

.author,
.updated {
  font-size: 14px;
  color: #aaa;
  padding: 10px 0;
}

.highlight {
  color: #facc15; /* Yellowish color */
}

.right {
  width: 30%;
  color: black;
}
</style>
