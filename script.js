const dtrbtn=document.getElementById("dtrbtn");
dtrbtn.addEventListener("click",function(){
let dtrvalue=parseInt(document.getElementById("dtrinput").value);
   let rupees=dtrvalue*82;
   document.getElementById("rupees").textContent=`The value of ${dtrvalue}$ in rupees is ${rupees}`;
});
const rupbtn=document.getElementById("rupbtn");
// const rupvalue=parseInt(document.getElementById("rupvalue").value);
rupbtn.addEventListener("click",function(){
    let rupvalue=parseInt(document.getElementById("rupinput").value);
   let dollors=rupvalue/82;
  alert(`the value of RS.${rupvalue} in dollors is ${dollors.toFixed(2)}$`);
});
