// select popu and popupbox and button
var pop = document.querySelector(".popup")
var popup = document.querySelector(".popup-box")
var add = document.getElementById("add")

// add Function
add.addEventListener("click",function(){
    pop.style.display= "block"
    popup.style.display = "block"
})

// select cancel function
var cancel = document.getElementById("cancel")

cancel.addEventListener("click",function(){
    event.preventDefault()
    pop.style.display= "none"
    popup.style.display = "none"

})

// select container,title,author,description and update
var container=document.querySelector(".container")
var title=document.getElementById("title")
var author = document.getElementById("author")
var description= document.getElementById("description")
var update=document.getElementById("update")

update.addEventListener("click",function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2> ${title.value} </h2>
    <h4> ${author.value} </h4>
    <p>${description.value}<p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    pop.style.display="none"
    popup.style.display="none"
})


function deletebook(event)
{
    event.target.parentElement.remove()
}

