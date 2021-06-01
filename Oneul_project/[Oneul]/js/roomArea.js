//  클래스 on 일 때 하나만 on. 초기 상태 3번 on.  2배크기
const roomArea = document.getElementById("intro_room")


function showRoom() {
    for (let i = 0; i < roomArea.children.length; i++) {
        roomArea.children[i].children[0].classList.add("on")
        roomArea.children[i].children[1].classList.remove("on")
        roomArea.children[i].children[2].classList.remove("room_floor_on")
        roomArea.children[i].children[3].classList.remove("room_name_on")
        roomArea.children[i].children[4].classList.remove("on")
        roomArea.children[i].children[5].classList.remove("on")
    }
    this.children[0].classList.remove("on")
    this.children[0].classList.add("off")
    this.children[1].classList.add("on")
    this.children[2].classList.add("room_floor_on")
    this.children[3].classList.add("room_name_on")
    this.children[4].classList.add("on")
    this.children[5].classList.add("on")
}


for (let i = 0; i < roomArea.children.length; i++) {
    roomArea.children[i].addEventListener("click", showRoom)
}