const key = document.getElementById("key")
const newdivq = document.createElement("div")
const newdivw = document.createElement("div")
const newdive = document.createElement("div")

document.addEventListener('keydown', function(event){
    if(event.key === 'a'){
        key.style.backgroundColor = 'pink'
    }
    if(event.key === 's'){
        key.style.backgroundColor = 'orange'
    }
    if(event.key === 'd'){
        key.style.backgroundColor = 'cyan'
    }
    if(event.key === 'q'){  
        newdivq.style.width = "200px";
        newdivq.style.height = "200px";
        newdivq.style.border = "solid 2px black";
        newdivq.style.backgroundColor = 'purple'
        document.body.appendChild(newdivq)
    }

    if(event.key === 'w'){  
        newdivw.style.width = "200px";
        newdivw.style.height = "200px";
        newdivw.style.border = "solid 2px black";
        newdivw.style.backgroundColor = 'gray'
        document.body.appendChild(newdivw)
    }

    if(event.key === 'e'){  
        newdive.style.width = "200px";
        newdive.style.height = "200px";
        newdive.style.border = "solid 2px black";
        newdive.style.backgroundColor = 'brown'
        document.body.appendChild(newdive)
    }
    
})