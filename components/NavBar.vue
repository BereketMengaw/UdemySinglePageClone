<template>
  <div class="navbar-container">
    <!-- Promo Banner -->
    <div v-if="bannerVisible" class="promo-banner">
      <span class="banner-text">
        Learn new skills from <strong>$10.99</strong> |
      </span>
      <span class="banner-text">
        Thanks for trying a free course. Now, boost your learning with this
        offer.
        <strong class="highlight-text">1 day left!</strong>
      </span>
      <button @click="closeBanner" class="close-banner">✕</button>
    </div>

    <!-- Navbar -->
    <nav class="main-navbar">
      <!-- Left Side -->
      <div class="nav-left">
        <!-- Logo -->
        <NuxtLink to="/" class="logo">
          <img
            src="@/assets/logo-udemy.svg"
            alt="Udemy Logo"
            class="logo-image"
          />
        </NuxtLink>

        <!-- Explore -->
        <button class="nav-button">Explore</button>
      </div>

      <!-- Search Bar -->
      <div class="search-container">
        <input
          type="text"
          placeholder="Search for anything"
          class="search-input"
        />
      </div>

      <!-- Right Side -->
      <div class="nav-right">
        <NuxtLink to="/" class="nav-link">Udemy Business</NuxtLink>
        <NuxtLink to="/" class="nav-link">Teach on Udemy</NuxtLink>
        <NuxtLink to="/" class="nav-link">My Learning</NuxtLink>

        <!-- Icons -->
        <button class="nav-icon">❤️</button>
        <button class="nav-icon">🛒</button>

        <!-- User Profile -->
        <div class="profile-dropdown">
          <button @click="toggleDropdown" class="profile-button">BD</button>
          <div v-if="dropdownOpen" class="dropdown-menu">
            <NuxtLink to="/" class="dropdown-item">Profile</NuxtLink>
            <NuxtLink to="/" class="dropdown-item">Logout</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dropdownOpen = ref(false);
const bannerVisible = ref(true);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const closeBanner = () => {
  bannerVisible.value = false;
};
</script>

<style scoped>
/* Container Styles */
.navbar-container {
  position: relative;
  width: 100%;
}

/* Promo Banner Styles */
.promo-banner {
  background-color: #b7f4f0;
  text-align: center;
  padding: 35px 20px;
  font-size: 14px;
  position: relative;
}

.banner-text {
  color: #333;
  margin: 0 5px;
  padding: 20px 20px;
}

.highlight-text {
  font-weight: bold;
}

.close-banner {
  position: absolute;
  right: 16px;
  top: 8px;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
}

.close-banner:hover {
  color: #333;
}

/* Main Navbar Styles */
.main-navbar {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Left Nav Styles */
.nav-left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.logo-highlight {
  color: #6a1b9a;
}

.logo-image {
  height: 40px; /* Adjust the height as needed */
  width: auto;
}

.nav-button {
  color: #555;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-button:hover {
  color: #222;
}

/* Search Bar Styles */
.search-container {
  flex: 1;
  margin: 0 16px;
  position: relative;
}

.search-input {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid #ddd;
  border-radius: 999px;
  outline: none;
}

.search-input:focus {
  border-color: #6a1b9a;
  box-shadow: 0 0 0 2px rgba(106, 27, 154, 0.2);
}

/* Right Nav Styles */
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  color: #555;
  text-decoration: none;
  font-size: 14px;
}

.nav-link:hover {
  color: #222;
}

.nav-icon {
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: 16px;
}

.nav-icon:hover {
  color: #222;
}

/* Profile Dropdown Styles */
.profile-dropdown {
  position: relative;
}

.profile-button {
  width: 32px;
  height: 32px;
  background-color: #e0e0e0;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 8px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px 0;
  min-width: 160px;
  z-index: 100;
}

.dropdown-item {
  display: block;
  padding: 8px 16px;
  color: #333;
  text-decoration: none;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .nav-link {
    display: none;
  }

  .search-container {
    margin: 0 8px;
  }
}

@media (max-width: 768px) {
  .main-navbar {
    flex-direction: column;
    padding: 12px;
  }

  .nav-left,
  .nav-right {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .search-container {
    margin: 8px 0;
    width: 100%;
  }
}
</style>
