let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    if (count == 7 ){
        alert(" Beke le Beke mchana โโโ")
    }
    if (count == 14){
        alert("ehhh ehhh ehh, 2 weeks o sa bo tinti๐๐๐")
    }
    if (count == 21){
        alert("Areye mchana")
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    alert("Ahh , you relaps my man, Im disapointed๐ฉ๐ฉ๐ฉ๐ " )
}
