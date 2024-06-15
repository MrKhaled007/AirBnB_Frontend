<template>
    <NavBar/>
    <div class="container">
      <h1>Camp Spots</h1>
      <table class="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Pets Allowance</th>
            <th>Ratings</th>
            <th>Price</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="spot in campSpots" :key="spot.id">
            <td>{{ spot.id }}</td>
            <td>{{ spot.name }}</td>
            <td>{{ spot.location }}</td>
            <td>{{ spot.description }}</td>
            <td>{{ spot.pets }}</td>
            <td>{{ spot.ratings }}</td>
            <td>{{ spot.price }}</td>
            <td><img :src="spot.picture" alt="Camp Spot Image" class="camp-image"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import NavBar from "./NavBar.vue";
  export default {
    data() {
      return {
        campSpots: [],
      };
    },
    mounted() {
      this.fetchCampSpots();
    },
    methods: {
      async fetchCampSpots() {
        try {
          const response = await axios.get('https://localhost:5001/CampSpots');
          this.campSpots = response.data;
        } catch (error) {
          console.error('Error fetching camp spots:', error);
        }
      },
    },
    components: {
        NavBar
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    color: #4caf50;
  }
  
  .styled-table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  
  .styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
  
  .styled-table th,
  .styled-table td {
    padding: 12px 15px;
  }
  
  .styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  
  .styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  
  .styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  
  .styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }
  
  .camp-image {
    max-width: 150px;
    border-radius: 8px;
  }
  </style>
  