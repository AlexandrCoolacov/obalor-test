<template>
<div class="container">
     <div 
     class="filteredArea"
     >
      <div class="inputValue">
        <input 
        class="input" 
        type="text"
        placeholder="Введите наименование"
        v-model="searchName"
        >
      </div>

      <div class="inputValue">
        <input 
        class="input" 
        type="text"
        placeholder="Введите номер"
        v-model="searchNumberApp"
        >
      </div>
    </div>

    <div class="wrapper">
    
        <div class="forms" 
        v-for="form in filteredBy"
        :key="form.id"
        > 
        <div class="checkinfo">
            <h1>Информация о клиенте</h1>

            <input 
              type="checkbox" 
              name="" 
              id=""
            >

        </div>
          <h2>{{ form.username }}</h2>
          <h2>{{ form.email }}</h2>
          <h2>{{ form.website }}</h2>
          <h2 >{{ form.company.name }}</h2>

          <h3
            id="elem"
            @click.stop="activateHover"
          >Адрес</h3>

          <div 
            :class="{active: isActive}"
            class="adress">
              <button class="btn">Исполнение</button>
              <button class="btn">Новая</button>
              <button class="btn">На экспертизе</button>
              <div class="clientname"><h2>{{ form.name }}</h2></div>
              <h2>{{form.address.city}}</h2>
              <h2>{{form.address.street}}</h2>
          </div>

          <div class="numberForm checkinfo">
            <h2>{{  form.id  }}</h2>
            <h2>{{ dateForm }}</h2>
          </div>
        </div>
  </div>
</div>
  
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      searchName: '',
      searchNumberApp: '',
      activeHover: false,
      dateForm: new Date().toLocaleDateString() ,
      numberApp: '',
      isActive:true
    };
  },
  methods: {
    activateHover(e) {
      if (e) {
         e.target.nextSibling.classList.toggle("active");
         e.target.offsetParent.classList.toggle("parentHeight");
      }
    }
  },
  
  computed: {
      ...mapGetters(["allForms"]),
      filteredBy() {
        return this.allForms
        .filter(form => {
          return form.company.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1 
        })
        .filter(form => {
          return form.id.toString().toLowerCase().indexOf(this.searchNumberApp) > -1 
        })
      }
    }
  }
  
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter&family=Roboto:wght@100&family=Source+Sans+Pro&display=swap");

.container{
  max-width: 100%;
  border: 7px solid black;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  
  .filteredArea{
    display: flex;
    flex-direction: row;

    .inputValue{
      &:before {
        position: relative;
        content: "";
        background-image: url('https://www.pinclipart.com/picdir/big/15-153148_search-magnifying-glass-icon-black-search-icon-png.png');
        background-size: cover;
        height: 30px;
        width: 30px;
        left: 30px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        width: 15px;
        height: 15px;
        cursor: pointer;
      }
    }
    
    .input{
      margin:  10px;
      width: 150px;
      padding: 0 0 0 20px;
    }
  }
}

.wrapper {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.forms {
  position: relative;
  margin: 10px;
  height: 220px;
  width: 150px;
  border: 1ps solid black;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  cursor: pointer;

  h1,
  h2 {
    font-size: 12px;
    font-family: "Roboto", sans-serif;
  }
  h3{
    font-size: 13px;
    font-family: "Roboto", sans-serif;
    color: rgb(102, 112, 167);
  }
  .checkinfo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .adress{
    .clientname{
      display: flex;
      position: relative;
      height: 30px;
      background-color: #C5C7DC;
      align-items: center;
      vertical-align: middle;
      justify-content: center;
    }
  }
}
.btn{
  background-color: #C5C7DC;
  color: wheat;
  border: none;
  border-radius: 5px;
  margin: 3px;
  cursor: pointer;
  &:hover{
    background-color: rgb(179, 57, 57);
  }
}
.active{
  display: none;
}
.parentHeight{
  height: 360px;
}

</style>
