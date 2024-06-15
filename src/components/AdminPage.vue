<template>
    <NavBar/>
    <div>
      <h1>Add a New Camp Spot</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        <div>
          <label for="location">Location:</label>
          <input type="text" id="location" v-model="form.location" required>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" v-model="form.description" required></textarea>
        </div>
        <div>
          <label for="pets">Pets:</label>
          <input type="text" id="pets" v-model="form.pets" required>
        </div>
        <div>
          <label for="ratings">Ratings:</label>
          <input type="number" id="ratings" v-model.number="form.ratings" required>
        </div>
        <div>
          <label for="price">Price:</label>
          <input type="number" id="price" v-model.number="form.price" required>
        </div>
        <div>
          <label for="picture">Picture URL:</label>
          <input type="text" id="picture" v-model="form.picture" required>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import NavBar from "./NavBar.vue";
  
  export default {
    name: "AdminPage",

    components: {
        NavBar

    },

    data() {
      return {
        form: {
          name: '',
          location: '',
          description: '',
          pets: '',
          ratings: 0,
          price: 0,
          picture: ''
        }
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post('https://localhost:5001/CampSpots/AddNewSpot', this.form);
          console.log('Form submitted successfully', response.data);
          //handle the successful form submission 
        } catch (error) {
          console.error('Error submitting form', error);
          //handle error 
        }
      }
    }
  };
  </script>
  
  <style>
/* Copy Pasted Styles from the internet */
form {
  max-width: 600px;
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

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  transition: border-color 0.3s;
}

input:focus, textarea:focus {
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

@media (max-width: 600px) {
  form {
    padding: 15px;
  }

  h1 {
    font-size: 1.5em;
  }

  button {
    padding: 10px;
    font-size: 1em;
  }
}

  </style>
  