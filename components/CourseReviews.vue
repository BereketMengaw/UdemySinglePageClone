<template>
  <div class="course-sidebar review-container">
    <div class="preview">
      <!-- Corrected img tag -->
      <img
        src="@/assets/course-preview.jpg"
        alt="Course Preview"
        class="preview-img"
      />
      <button class="preview-btn">▶ Preview this course</button>
    </div>

    <div class="pricing">
      <p class="price">
        $9.99 <span class="old-price">$19.99</span>
        <span class="discount">50% off</span>
      </p>
      <p class="urgent">⏳ 1 day left at this price!</p>
      <div><button class="add-to-cart">Add to cart</button></div>

      <button class="buy-now">Buy now</button>
      <p class="money-back">30-Day Money-Back Guarantee</p>
    </div>

    <div class="course-details">
      <h3>This course includes:</h3>
      <ul>
        <li>📹 2 hours on-demand video</li>
        <li>📄 1 article</li>
        <li>📥 2 downloadable resources</li>
        <li>📱 Access on mobile and TV</li>
        <li>♾️ Full lifetime access</li>
        <li>📜 Certificate of completion</li>
      </ul>
    </div>

    <div class="coupon">
      <h4>Apply Coupon</h4>
      <div class="coupon-box">
        <input type="text" placeholder="Enter Coupon" />
        <button class="apply-btn">Apply</button>
      </div>
    </div>

    <div class="business">
      <h4>Training 5 or more people?</h4>
      <p>Get your team access to 27,000+ top courses anytime, anywhere.</p>
      <button class="business-btn">Try Udemy Business</button>
    </div>
  </div>
</template>

<style scoped>
.course-sidebar {
  right: 40px;
  width: 300px;
  height: 100vh;
  z-index: 1000;
  background: #fff;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  border-right: 1px solid #ddd;
}
.review-container {
  overflow-y: hidden; /* Hides the scrollbar */
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
  border-radius: 10px;
  border-color: #9333ea;
  border-width: 10px;
  color: #9333ea;
  border: #9333ea;
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
  border: none;
  width: 100%;
  cursor: pointer;
}
</style>
