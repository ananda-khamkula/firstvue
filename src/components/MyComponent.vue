<template>
	<div id="content">
		<h1>This is from MyComponent.vue</h1>
		<p>Hello My Name is {{ myPropertyName }}</p>
	</div>
</template>
<script>
export default {
	name: "MyComponent",
	data() {
		return {
			myPropertyName: "Ananda Khamkula"
		}
	}
};
</script>
<style>
#content {
	text-align: center;
	color: red;
}
</style>