<template>
    <div class="container">
		<div class="row mt-3">
			<div class="col-sm-4">
				<form @submit.prevent="loginFormSubmit">
					<div class="form-goup">
						<label for="username">User Name</label>
						<input type="text" class="form-control" id="username" name="username" v-model="username" />
					</div>
					<div class="form-goup">
						<label for="password">Password</label>
						<input type="password" class="form-control" id="password" name="password" v-model="password" />
					</div>
					<button type="submit" class="btn btn-primary my-1" >Login</button>
				</form>
			</div>
		</div>
		<div class="row mt-3">
			username: <span class="text-info ml-1">{{ username }}</span>
		</div>
		<div class="row mt-3">
			password: <span class="text-info ml-1">{{ password }}</span>
		</div>
    </div>
</template>
<script>
export default {
  name: 'LoginForm',
  data() {
    return { 
		username: null,
		password: null
	};
  },
  methods: {
	loginFormSubmit() {
		console.log("Here are ", `${this.username} ${this.password}`);
		let hash = this.genHash("UKNOWWELL.COM");
		let atob = this.encodeStringBtoA("UKNOWWELL.COM");
		let btoa = this.encodeStringAtoB(atob);
		window.$cookies.set("hash", hash);
		window.$cookies.set("atob", atob);
		window.$cookies.set("btoa", btoa);
		console.log("Hash is:", hash);
		console.log("A to B is:", atob);
		console.log("B to A is:", btoa);
		
		let cookie_atob = window.$cookies.get("atob");
		let cookie_global_theme = window.$cookies.get('theme');

		console.log("cookies atob:", cookie_atob);
		console.log("cookies global theme:", cookie_global_theme);

	},
	genHash(str) {
		let hash = 0, i, chr;
		if (str.length === 0) return hash;
		for (i = 0; i < str.length; i++) {
			chr   = str.charCodeAt(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0;
		}
		return hash;
	},
	encodeStringBtoA(decodedStringBtoA) {
		return btoa(decodedStringBtoA);
	},
	encodeStringAtoB(encodedStringAtoB) {
		return atob(encodedStringAtoB);
	}	
  }
};
//console.log("Test console.log");
</script>

<style>

</style>
