<template>
  <AppHeader/>
  <h1>Welcome To CampNest</h1>

  <div class="home">
    <!-- My search and filter section -->
    <div class="search-filter">
      <input type="text" v-model="searchQuery" placeholder="Search by camp name">
      
      <label for="location">Location:</label>
      <select v-model="selectedLocation">
        <option value="">All</option>
        <option v-for="location in uniqueLocations" :key="location" :value="location">{{ location }}</option>
      </select>

      <label for="petsAllowed">Pets Allowed:</label>
      <select v-model="petsAllowed">
        <option value="">All</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label for="rating">Rating:</label>
      <select v-model="selectedRating">
        <option value="">All</option>
        <option v-for="rating in uniqueRatings" :key="rating" :value="rating">{{ rating }}</option>
      </select>
    </div>
    <!-- Upto this was the filtering-->

    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="loading" class="loading">Loading...</div>
    <div v-else class="camp-spots">
      <div v-for="spot in filteredCampSpots" :key="spot.id" class="spot">
        <h2>{{ spot.name }}</h2>
        <p><strong>Location:</strong> {{ spot.location }}</p>
        <p><strong>Description:</strong> {{ spot.description }}</p>
        <p><strong>Pets Allowed:</strong> {{ spot.pets }}</p>
        <p><strong>Ratings:</strong> {{ spot.ratings }}</p>
        <img :src="spot.picture">
        
        <p><strong>Cost:</strong> {{ spot.price }}</p>

        <router-link :to="{ name: 'CampBooking', params: { campId: spot.id } }" class="book-button">
          <button class="learn-more"> Book This Camp </button>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'

export default {
  name: 'HomePage',
  components: {
    AppHeader
  },
  data() {
    return {
      campSpots: [],
      loading: true,
      error: null,
      searchQuery: '',
      selectedLocation: '',
      petsAllowed: '',
      selectedRating: '',
    };
  },
  computed: {
    uniqueLocations() {
      return [...new Set(this.campSpots.map(spot => spot.location))];
    },
    uniqueRatings() {
      return [...new Set(this.campSpots.map(spot => spot.ratings))];
    },
    filteredCampSpots() {
      return this.campSpots.filter(spot => {
        const matchesSearch = spot.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesLocation = this.selectedLocation ? spot.location === this.selectedLocation : true;
        const matchesPets = this.petsAllowed ? spot.pets === this.petsAllowed : true;
        const matchesRating = this.selectedRating ? spot.ratings === this.selectedRating : true;
        return matchesSearch && matchesLocation && matchesPets && matchesRating;
      });
    }
  },
  created() {
    this.fetchCampSpots();
  },
  methods: {
    async fetchCampSpots() {
      try {
        const response = await fetch('https://localhost:5001/CampSpots');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        this.campSpots = data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>
<style scoped>

.home {
  padding: 20px;
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  background-image: linear-gradient(
      90deg,
      transparent 50px,
      #ffb4b8 50px,
      #ffb4b8 52px,
      transparent 52px
    ),
    linear-gradient(#e1e1e1 0.1em, transparent 0.1em);
  background-size: 100% 30px;
}
.search-filter {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.search-filter input,
.search-filter select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
.search-filter label {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-right: 10px;
}
.camp-spots {
  display: flex;
  flex-wrap: wrap;
}
.spot {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: calc(33% - 20px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.spot img {
  max-width: 100%;
  height: auto;
}
.book-button button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
.book-button button:hover {
  background-color: #45a049;
}


button {
 position: relative;
 display: inline-block;
 cursor: pointer;
 outline: none;
 border: 0;
 vertical-align: middle;
 text-decoration: none;
 font-family: inherit;
 font-size: 15px;
}

button.learn-more {
 font-weight: 600;
 color: #382b22;
 text-transform: uppercase;
 padding: 1.25em 2em;
 background: #fff0f0;
 border: 2px solid #b18597;
 border-radius: 0.75em;
 -webkit-transform-style: preserve-3d;
 transform-style: preserve-3d;
 -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
 transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.learn-more::before {
 position: absolute;
 content: '';
 width: 100%;
 height: 100%;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: #f9c4d2;
 border-radius: inherit;
 -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
 box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
 -webkit-transform: translate3d(0, 0.75em, -1em);
 transform: translate3d(0, 0.75em, -1em);
 transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.learn-more:hover {
 background: #ffe9e9;
 -webkit-transform: translate(0, 0.25em);
 transform: translate(0, 0.25em);
}

button.learn-more:hover::before {
 -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
 box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
 -webkit-transform: translate3d(0, 0.5em, -1em);
 transform: translate3d(0, 0.5em, -1em);
}

button.learn-more:active {
 background: #ffe9e9;
 -webkit-transform: translate(0em, 0.75em);
 transform: translate(0em, 0.75em);
}

button.learn-more:active::before {
 -webkit-box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
 box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
 -webkit-transform: translate3d(0, 0, -1em);
 transform: translate3d(0, 0, -1em);
}
</style>