module.exports = (time) =>{
	this.addZero = (number) =>{
        if (number < 10) {
            return "0" + number
        } else {
            return number
        }
    }
    return `${this.addZero(new Date(time).getHours())}:${this.addZero(new Date(time).getMinutes())}:${this.addZero(new Date(time).getSeconds())} - ${this.addZero(new Date(time).getDate())}/${this.addZero(new Date(time).getMonth()+1)}/${this.addZero(new Date(time).getFullYear())}`
}