export default(state = [], payload)=>{
	switch(payload) {
		case "add":
			return [...state, payload.status]	
			// break;
		default :
			return state;
			// break;
	}
}