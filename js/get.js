var element;

// element =document.title;


//element=document.getElementById("a").innerText;
//element=document.getElementById("b").innerHTML;
//element=document.getElementById("a").getAttribute("style");
element=document.getElementById("a").getAttributeNode("style");

console.log(element);
