<template>
    <div>

    <button class="pushable" v-on:click="gohome">
      <span class="shadow"></span>
      <span class="edge"></span>
      <span class="front">
        Home
      </span>
    </button>

    

    

    <button class="pushable" v-on:click="gobookings">
      <span class="shadow"></span>
      <span class="edge"></span>
      <span class="front">
        My Bookings
      </span>
    </button>

    <button class="pushable" v-on:click="goprofile">
      <span class="shadow"></span>
      <span class="edge"></span>
      <span class="front">
        My Profile
      </span>
    </button>

    <button class="pushable" v-on:click="logout">
      <span class="shadow"></span>
      <span class="edge"></span>
      <span class="front">
        Log Out
      </span>
    </button>

    

    </div>
</template>

<script>
    export default {
        name: 'AppHeader',
        methods:{
            logout(){
                localStorage.clear();
                this.$router.push({name:'LogIn'})
            },
            gohome(){
              this.$router.push({name:'Home'})
            },
            gosearch(){
              this.$router.push({name:'Home'})
            },
            
            gobookings(){
              this.$router.push({name:'MyBookings'})
            },
            goprofile(){
              this.$router.push({name:'MyProfile'})
            },

        }
    }
</script>


<style>


.pushable {
  position: relative;
  background: transparent;
  
  padding: 0px;
  border: none;
  cursor: pointer;
  outline-offset: 4px;
  outline-color: deeppink;
  transition: filter 250ms;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin-right: 70px;
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: hsl(226, 25%, 69%);
  border-radius: 8px;
  filter: blur(2px);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.edge {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(
    to right,
    hsl(248, 39%, 39%) 0%,
    hsl(248, 39%, 49%) 8%,
    hsl(248, 39%, 39%) 92%,
    hsl(248, 39%, 29%) 100%
  );
}

.front {
  display: block;
  position: relative;
  border-radius: 8px;
  background: hsl(248, 53%, 58%);
  padding: 16px 32px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1rem;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  
}

.pushable:hover {
  filter: brightness(110%);
}

.pushable:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.pushable:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.pushable:hover .shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.pushable:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.pushable:focus:not(:focus-visible) {
  outline: none;
}



</style>