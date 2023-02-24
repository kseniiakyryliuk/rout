<template>
    <div>
           <h1>info</h1>

<div>
  <p>Company information</p>
<form class="company-info">
<div class="primary">
  <span>Primary Contact</span>
 <select name="" id="Primary Contact">
 <option value="1">1</option>
<option value="2">2</option>
</select>
</div>

<div class="primary">
  <span>Company Website</span>
 <select name="" id="Company Website">
 <option value="1">1</option>
<option value="2">2</option>
</select>
</div>


<div class="primary">
  <span>Phone</span>
<select id="country" v-model="selectedCountry">
      <option v-for="(country, index) in countries" :key="index" :value="country.code">
     (+{{ country.code }})
      </option>
</select>
<input type="text" id="phone" v-model="phoneNumber">
 </div>
<div class="primary">
  <span> Icon</span>
 <div class="photo" @click="showFileInput">
    <input type="file" ref="fileInput" @change="uploadPhoto" style="display: none"/>   
     <img v-if="imageUrl==''" src="../assets/gallery.png" id="choosenimage">
     <img v-else-if="imageUrl!==''" :src="imageUrl" id="choosenimage">
    
  </div>
</div>

</form>
</div>

<form class="legal-info">
  <p>Legal information</p>
<div class="primary">
  <span> Recipients</span>
<select id="recipients">
  <option value="user1">user1@gmail.com</option>
  <option value="user2">user2@gmail.com</option>
  <option value="user3">user3@gmail.com</option>
</select>
</div>
<div class="primary">
  <span>Adress #1</span>
<input type="text" placeholder="Adress #1"></div>

<div class="primary">
  <span>Adress #2</span>
<input type="text" placeholder="Adress #2"></div>


<div class="primary">
  <span>City, State, Zip</span>
  <input type="text" placeholder="City">
<input type="text" :disabled="country.toLocaleLowerCase() !== 'usa'" placeholder="State">
<input type="text" placeholder="Zip">
</div>
<div class="primary">
  <span>Country</span>
<input type="text" placeholder="Country" v-model="this.country">
</div>
</form>



    </div>    

      </template>
      <script>
     
          export default {
            
  name: 'information-1',
data(){
  return{
       isUsa:true,
    country:'',
    imageUrl:'',
    selectedCountry: '380',
      phoneNumber: '',
        countries: [
  { name: "Austria", code: "43" },  { name: "Belgium", code: "32" },  { name: "Bulgaria", code: "359" },  { name: "Croatia", code: "385" },
  { name: "Cyprus", code: "357" },  { name: "Czech Republic", code: "420" },  { name: "Denmark", code: "45" },  { name: "Estonia", code: "372" },
  { name: "Finland", code: "358" },  { name: "France", code: "33" },  { name: "Germany", code: "49" },  { name: "Greece", code: "30" },
  { name: "Hungary", code: "36" },  { name: "Iceland", code: "354" },  { name: "Ireland", code: "353" },  { name: "Italy", code: "39" },
  { name: "Latvia", code: "371" },  { name: "Liechtenstein", code: "423" },  { name: "Lithuania", code: "370" },  { name: "Luxembourg", code: "352" },
  { name: "Malta", code: "356" },  { name: "Netherlands", code: "31" },  { name: "Norway", code: "47" },  { name: "Poland", code: "48" },
  { name: "Portugal", code: "351" },  { name: "Romania", code: "40" },  { name: "Slovakia", code: "421" },  { name: "Slovenia", code: "386" },
  { name: "Spain", code: "34" },  { name: "Sweden", code: "46" },  { name: "Switzerland", code: "41" },  { name: "United Kingdom", code: "44" },
  { name: "Ukraine", code: "380" },
],
  }
},
methods:{

  showFileInput() {
      this.$refs.fileInput.click();
    },
    uploadPhoto(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      }}
   /*
   onChange(){
                   const image = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = event =>{
                    this.imageUrl = event.target.result;
                    //console.log(this.previewImage);
                };},*/
}}
      </script>
      
      <style scoped>
p{
  text-align: left;
font-weight: 700;
padding: 10px;
} 
#country{
  width: 65px;
}
#choosenimage{
  border-radius: 50px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 0;
}
.address{
  display: flex;
         justify-content: left; 
}
.legal-info{
          display: flex;
          flex-direction: column;
          justify-content: left;
        }
input{
  width: 200px;
}
.container-2{
  width: 400px;
  height: 100px;
}
.primary span{
  width: 200px;
  text-align: left;
  padding: 5px;
}
.primary select{width: 200px;}
.primary{
  margin-bottom: 7px ;
  display: flex;
  justify-content: left;
}
.recipients select{
  width: 50%;
}

.photo {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 50px;
  background-image: url(../assets/gallery.png);
  background-size: cover;
}
      </style>
      