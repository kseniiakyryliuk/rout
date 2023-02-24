<template>
  <div class="" id="app">
<section class="n">
<nav>
  <ul>
   
                <li ><a href="#/launchpad" class="main-link" :class="{active: $route.path === '/launchpad'}">Launchpad</a></li>
                <li><a href="#/clients" class="main-link" exact :class="{active: $route.path === '/clients'}">Clients</a></li>
                <li> <a href="#/files" class="main-link" :class="{active: $route.path === '/files'}">Files</a></li>
                <li><a href="#/accounting" class="main-link" :class="{active: $route.path === '/accounting'}">Accounting</a></li>
             </ul>



  <ul>
               <li> <a href="#/setting" class="main-link" :class="{active: $route.path === '/setting'}">Setting</a></li>
                <li><a href="#/support" class="main-link" :class="{active: $route.path === '/support'}">Support</a></li>
  </ul>
</nav>
    <div class="main-section">
    
     <router-view></router-view>

    </div>

  </section>
  </div>


</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
.main-link.active{
  background-color: rgb(211, 211, 211);
  padding: 10px;
  width: 150px;
 }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
   
}
.n{
  display: flex;
  justify-content: space-between;
}
nav{
  height: 100%;
  width: 20%;
  position: fixed;
top: 0;
left: 0;

  background-color: rgb(245, 249, 247);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
nav ul{
  list-style-type: none;
  text-align: left;
}
nav ul li{
  padding: 7px;
}
 .main-section{
  position: fixed;
display: inline-block;
right: 0px;
top: 0px;
margin: 0;
width: 80%;

border: 1px solid black;
}
a{
  text-decoration: none;
  color: black;
  width: 400px;
}

</style>
