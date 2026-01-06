// dom manipulation consist of 
// 1.get the element
// 2.event listening


//example 1
document
.getElementById("changetextbutton")
.addEventListener('click', function (){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The Paragraph is changed";
});

// .addEventListener('click',  () =>{ This will give you the window obj
//     console.log(this)
// }) 


//example-2
document
.getElementById("highlightFirstCity")
.addEventListener('click' , function(){
    let citylist = document.getElementById("citiesList");
    citylist.firstElementChild.classList.add("highlight");
});


//example-3
document.getElementById("changeOrder")
.addEventListener('click' , function(){
    let temp = document.getElementById("coffeeType");
    temp.textContent = "Espresso";
    temp.style.backgroundColor = "pink";
    temp.style.padding = "5px";
    temp.style.borderRadius = "5px";
    temp.style.color = "black";
})


//example-4
document.getElementById("addNewItem")
.addEventListener('click', function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs";
    document.getElementById("shoppingList").appendChild(newItem);
})


//example-5
document.getElementById("removeLastTask")
.addEventListener('click' , function(){
    let hold = document.getElementById("taskList");
    hold.lastChild.remove();
})

//example-6
document
.getElementById("clickMeButton")
.addEventListener('dblclick' , function(){
    alert("Le Re Lund Ke");
})

//example-7
document
.getElementById("teaList")
.addEventListener('click',function(event){
    if(event.target){
        alert("You Selected : " + event.target.textContent);
    }
})

//example-8
document
.getElementById("feedbackForm")
.addEventListener('submit', function(event){
    event.preventDefault();
    let feedback  = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = feedback;
})

//example-9
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContent = "DOM FULLY LOADED";
})

//example-9
document
.getElementById("toggleHighlight")
.addEventListener('click',function(){
    let hold = document.getElementById("descriptionText");
    hold.classList.toggle('highlight');
})




















    
        
