<template>
    <NavBar/>
    <div>
      <h1>Delete Camp Spot</h1>
      <form @submit.prevent="deleteCampSpot">
        <div>
          <label for="id">Camp Spot ID:</label>
          <input type="text" id="id" v-model="id" required>
        </div>
        <button type="submit">Delete</button>
      </form>
      <div v-if="message" :class="messageClass">{{ message }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import NavBar from "./NavBar.vue";
  
  export default {
    data() {
      return {
        id: '',
        message: '',
        messageClass: ''
      };
    },
    methods: {
      async deleteCampSpot() {
        try {
          await axios.delete(`https://localhost:5001/CampSpots?id=${this.id}`);
          this.message = 'Camp spot deleted successfully!';
          this.messageClass = 'success';
          this.id = ''; 
        } catch (error) {
          this.message = 'Error deleting camp spot. Please try again.';
          this.messageClass = 'error';
        }
      }
    },
    components: {
        NavBar
    },
  };
  </script>
  
  <style>
  /* some copy pasted style */
  form {
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background: #f9f9f9;
  }
  
  h1 {
    text-align: center;
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
  }
  
  div {
    margin-bottom: 1.5em;
  }
  
  label {
    display: block;
    margin-bottom: 0.5em;
    font-weight: bold;
    color: #555;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    transition: border-color 0.3s;
  }
  
  input:focus {
    border-color: #007BFF;
    outline: none;
  }
  
  button {
    width: 100%;
    padding: 15px;
    font-size: 1.2em;
    color: #fff;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .success {
    color: green;
    text-align: center;
    margin-top: 20px;
  }
  
  .error {
    color: red;
    text-align: center;
    margin-top: 20px;
  }
  </style>
  