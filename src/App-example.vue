<template>
  <!--  example #1 
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>Hello! This is from App.vue</h2>
    <MyComponent msg="Welcome to MyComponeny.vue Vue.js App"/>
    <HelloWorld msg="Welcome to App.vue Vue.js App"/>
  -->
  <!-- example #2
    <div class="hello">
		<h1>Vue App Component</h1>
		<div id="my-data">Name {{ myName }} : {{ getName() }} Age {{ age }} </div>
        <div> {{ getFullName() }} </div>
	</div>
  -->  
    <div class="container mt-4">
      <button type="button" class="btn btn-primary mr-2">
        <i class="fas fa-home fa-3x"></i>
      </button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">
        <i class="fas fa-trash fa-3x"></i>
      </button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <button type="button" class="btn btn-link">Link</button>
    </div>
</template>

<script>
//  example #1
//import HelloWorld from './components/HelloWorld.vue'
//import MyComponent from './components/MyComponent.vue'
/*
export default {
  name: 'App',
  components: {
    //HelloWorld,
    MyComponent
  }
};
*/

export default {
  name: 'App',
  data: function () {
    return {
      myName: "aNANdA",
      myLastName: "kHAMKULA",
      age: 50
    }
  },
  methods: {
    getName: function () {
      return (this.myName.charAt(0).toUpperCase() + this.myName.slice(1).toLowerCase());
    },
    getLastName:function () {
      return (this.myLastName.charAt(0).toUpperCase() + this.myLastName.slice(1).toLowerCase());
    },
    getFullName: function () {
      return  `${this.getName()} ${this.getLastName()}`;
    }
  }
};

</script>

<style>
<!-- example #1 -->
<!--
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
-->
.hello {
  text-align: center;
}
#my-data {
  color: gray;
  font-size: 1.5em;
}


</style>
