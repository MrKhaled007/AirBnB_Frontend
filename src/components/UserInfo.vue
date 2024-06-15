<template>
    <NavBar/>
    <div class="user-info">
      <h1>User Information</h1>
      <table v-if="users.length" class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>Loading...</p>
    </div>
  </template>
  
  <script>
  import NavBar from "./NavBar.vue";
  export default {
    name: 'UserInfo',
    data() {
      return {
        users: [],
      };
    },
    mounted() {
      this.fetchUserData();
    },
    methods: {
      async fetchUserData() {
        try {
          const response = await fetch('https://localhost:5001/User');
          if (response.ok) {
            const data = await response.json();
            this.users = Array.isArray(data) ? data : [data];
          } else {
            console.error('Failed to fetch user data');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      },
    },
    components: {
        NavBar
    }
  };
  </script>
  
  <style scoped>
  .user-info {
    padding: 20px;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 18px;
    text-align: left;
  }
  
  .table th, .table td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }
  
  .table th {
    background-color: #f2f2f2;
  }
  
  .table tr:hover {
    background-color: #f1f1f1;
  }
  
  .table th, .table td {
    text-align: center;
  }
  
  .table {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  </style>
  