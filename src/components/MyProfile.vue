<template>
    <AppHeader/>
    <div class="profile-container">
      <h1>My Profile</h1>
      <div v-if="user" class="user-details">
        
        <p><strong>Your Current Username:</strong> {{ user.username }}</p>
        <p><strong>Your Current Email:</strong> {{ user.email }}</p>
      </div>
      <form @submit.prevent="updateUser" class="update-form">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="formData.username" id="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="formData.email" id="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="formData.password" id="password" required />
        </div>
        <button type="submit" class="submit-button">I am a New Person Now</button>
      </form>
    </div>
  </template>
  
  <script>
  import AppHeader from './AppHeader.vue'
  export default {
    name: "MyProfile",
    components: {
    AppHeader
  },
    data() {
      return {
        user: null,
        formData: {
          username: '',
          email: '',
          password: ''
        }
      };
    },
    created() {
      this.fetchUserData();
    },
    methods: {
      async fetchUserData() {
        const userId = localStorage.getItem('user_id');
        try {
          const response = await fetch(`https://localhost:5001/User/${userId}`);
          const data = await response.json();
          this.user = data;
          this.formData.username = data.username;
          this.formData.email = data.email;
          this.formData.password = data.password;
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      },
      async updateUser() {
        const userId = localStorage.getItem('user_id');
        try {
          const response = await fetch(`https://localhost:5001/User/Update${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.formData)
          });
          if (response.ok) {
            const updatedData = await response.json();
            this.user = updatedData;
            localStorage.setItem('username', updatedData.username);
            localStorage.setItem('email', updatedData.email);
            localStorage.setItem('password', updatedData.password); // Note: Storing passwords in local storage is not recommended for security reasons.
            alert('User profile updated successfully!');
          } else {
            alert('Failed to update user profile.');
          }
        } catch (error) {
          console.error('Error updating user data:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>

  
  .profile-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 50px;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  .user-details {
    margin-bottom: 20px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .user-details p {
    margin: 5px 0;
    color: #555;
  }
  
  .update-form .form-group {
    margin-bottom: 15px;
  }
  
  .update-form label {
    display: block;
    margin-bottom: 5px;
    color: #333;
  }
  
  .update-form input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .submit-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  </style>
  