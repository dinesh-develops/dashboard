var button=document.getElementById("btn");
var close=document.getElementById("close");
button.addEventListener('click',()=>{
   var text=document.getElementById("textpred");
   var x=document.getElementById("opt");
   var sign=x.options[x.selectedIndex].text;
   var y=document.getElementById("opt1");
   var type=y.options[y.selectedIndex].text.toLowerCase();
   console.log(type);
   const proxy="https://cors-anywhere.herokuapp.com/";
   const api=`${proxy}https://horoscope-api.herokuapp.com/horoscope/${type}/${sign}`;
   fetch(api)
      .then(response=>{
         return response.json();
      })
      .then(data=>{
         var prediction=data.horoscope;
         console.log(prediction);
         text.innerText=data.horoscope;
      })
})
close.addEventListener('click',()=>{
   var text=document.getElementById("textpred");
   text.innerText="Choose the Sign and the type of Horoscope and click the Find Button!";
})