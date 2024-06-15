<template>
    <AppHeader/>
    <div class="my-bookings-container">
      <h1>History of all my Bookings</h1>
      
  
      <!-- New section for Camps Information -->
      <div class="camps-container">
        
        <div v-if="loading" class="loading">Loading...</div>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="camps.length" class="camps-list">
          <div v-for="camp in camps" :key="camp.id" class="camp-card">
            <h3>{{ camp.name }}</h3>
            <p><strong>Location:</strong> {{ camp.location }}</p>
            <p><strong>Description:</strong> {{ camp.description }}</p>
            <p><strong>Rating:</strong> {{ camp.ratings }}</p>
            <p><strong>Cost:</strong> {{ camp.price }}</p>
            
            <div v-if="camp.details">
              <h4>Additional Information</h4>
              
              <!-- Add more fields as necessary -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import AppHeader from './AppHeader.vue'
  export default {
    components: {
    AppHeader
  },
    data() {
      return {
        camps: [],
        loading: true,
        error: null
      };
    },
    created() {
      this.fetchCamps();
    },
    methods: {
      async fetchCamps() {
        const username = localStorage.getItem('user_name');
        if (!username) {
          this.error = 'Username not found in local storage';
          this.loading = false;
          return;
        }
        try {
          const response = await axios.get(`https://localhost:5001/Booking/byUsername?username=${username}`);
          const bookings = response.data;
          await Promise.all(bookings.map(async (booking) => {
            const campResponse = await axios.get(`https://localhost:5001/CampSpots/${booking.campId}`);
            this.camps.push(campResponse.data);
          }));
        } catch (error) {
          this.error = 'Nothing Booked Yet';
        } finally {
          this.loading = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .my-bookings-container {
    padding: 20px;
    
  }
  
  .loading {
    font-size: 1.2em;
    color: #333;
  }
  
  .error {
    color: red;
  }
  
  .camps-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .camp-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    margin: 10px;
    width: calc(33% - 20px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
  
  .camp-card h3 {
    margin-top: 0;
  }
  
  .camp-card h4 {
    margin-top: 15px;
  }
  </style>
  