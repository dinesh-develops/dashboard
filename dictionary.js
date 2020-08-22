window.addEventListener('load',()=>{
    var mean=document.getElementById("meaning");
    var ex=document.getElementById("ex");
    var audio=document.getElementById("audio");
    //var word='hello';
    document.getElementById('btn1').onclick=function search(){
        var word = document.getElementById("word").value.toLowerCase();
        const proxy=``;
        const api=`https://api.dictionaryapi.dev/api/v1/entries/en/${word}`;
        fetch(api)
            .then(response=>{
            return response.json();
            })
            .then(data=>{
               /* mean.textContent=data[0].meaning.exclamation[0].definition;
                ex.textContent=data[0].meaning.exclamation[0].example;*/
                console.log(data);
                audio.src=data[0].phonetics[0].audio;
                //document.getElementById('audio').src=#;
                mean.textContent=data[0].meaning.noun[0].definition;
                ex.textContent=data[0].meaning.noun[0].example;
            })
    }
});