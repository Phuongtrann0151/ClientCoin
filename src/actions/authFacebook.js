export const authFacebook = user =>{
	console.log("login", user)
	return {
		type: "add",
		user
	}
}