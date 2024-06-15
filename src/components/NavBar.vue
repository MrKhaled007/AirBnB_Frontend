<template>
    <div>
      <nav>
        <ul>
          <li @click="goToAddCamp">Add Camps</li>
          <li @click="goToDeleteCAmp">Delete a Camp</li>
          <li @click="goToUserInfo">See User Informations</li>
          <li @click="goToCampInfo">See Camp Informations</li>
          <li @click="goToLogOut">Log Out</li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToAddCamp() {
        console.log('Navigating to Home');
        this.$router.push({name:'AdminPage'});
        // Logic to navigate to the Home page
      },
      goToDeleteCAmp() {
        console.log('Navigating to About');
        this.$router.push({name:'DeleteCampSpot'});
        // Logic to navigate to the About page
      },
      goToUserInfo() {
        console.log('Navigating to Services');
        this.$router.push({name:'UserInfo'});
        // Logic to navigate to the Services page
      },
      goToCampInfo() {
        console.log('Navigating to Contact');
        this.$router.push({name:'CampInfo'});
        // Logic to navigate to the Contact page
      },
      goToLogOut() {
        console.log('Navigating to Contact');
        this.$router.push({name:'LogIn'});
        // Logic to navigate to the Contact page
      }
    }
  };
  </script>
  
  <style>
  nav {
    background-color: #333;
    padding: 1em;
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
  
  li {
    color: white;
    cursor: pointer;
    font-size: 1.2em;
    transition: color 0.3s;
  }
  
  li:hover {
    color: #007BFF;
  }
  </style>
  