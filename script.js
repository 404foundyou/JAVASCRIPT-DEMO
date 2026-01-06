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
    console.log(citylist.firstElementChild);
});

