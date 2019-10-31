<template>
  <div>
    <img :src="previewImage" class="uploadingimage">
     <input type="file" accept="image/jpeg/jpg/png" @change="uploadImage">
  </div>
</template>

<script>
    export default {
        name:'ImageUpload',
        data(){
            return{
              previewImage:null,
            }
        },
        methods:{
          uploadImage(e){
              const image = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(image);
              reader.onload = e =>{
                  this.previewImage = e.target.result;
                  console.log(this.previewImage);
                  
              };
          }
        },
     }
</script>

<style>
   .uploadingimage{
     display:flex;
   }
 </style>
