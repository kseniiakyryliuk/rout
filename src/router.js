import { createRouter, createWebHashHistory } from "vue-router";
import Accounting from "./components/Accounting";
import Clients from "./components/Clients";
import Files from "./components/Files";
import Launchpad from "./components/Launchpad";
import Setting from "./components/Setting";
import Support from "./components/Support";
import Information from "./components/Information"
import Invoices from "./components/Invoices";
import AccesControl from"./components/AccesControl";
import FilesForClients from "./components/FilesForClients"

export default createRouter({
   history: createWebHashHistory(),
   routes:[
    {path:'/launchpad', component: Launchpad},
    {path:'/files', component: Files},
    {path:'/accounting', component: Accounting},
    {path:'/setting', component: Setting},
    {path:'/support', component: Support},
    {path:'/clients', alias:'', 
    component: Clients,
 //    alias:'',
   children:[
      {path:'information', component: Information, name:'information', alias:''},
      {path:'invoices', component: Invoices, name:'invoices'},
      {path:'accessControl', component: AccesControl, name:'accessControl'},
      {path:'filesForClients', component: FilesForClients, name:'filesForClients'}

   ]
   },


    ///next router
 

   
  ]



})