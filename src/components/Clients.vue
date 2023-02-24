<template>
    <div>
        <p>Google CLI</p>
       
        <ul>
          <li><router-link class="link" to="/clients/information"  :class="{active: $route.path === '/clients/information'}">  Information </router-link></li>
          <li> <router-link to="/clients/invoices"  class="link" :class="{active: $route.path === '/clients/invoices'}">  Invoices </router-link>   </li>
        <li> <router-link to="/clients/accessControl" class="link" :class="{active: $route.path === '/clients/accessControl'}">Access - Control </router-link></li>
          <li> <router-link to="/clients/filesForClients" class="link" :class="{active: $route.path === '/clients/filesForClients'}">Files</router-link>   </li>
        </ul>
<router-view> </router-view>

    </div>    
      
      </template>
      
      <script>
          export default {
  name: 'Clients-2',
}
      </script>
      
      <style scoped>
      .link.active{
        color: rgb(16, 0, 243);
        border-bottom: 2px solid blue;
        padding: 10px;
      }
      p{
        padding: 10px;
        text-align: left;
        font-size: 20px;
         margin: 0;
      }
      ul{
        text-align: left;
      list-style-type: none;
      display: flex;
       }
ul li{
  padding: 10px;
}

           div{
            height: 100vh;
           background-color: rgb(241, 239, 239)
        }
        
      </style>
      