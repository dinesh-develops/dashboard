window.addEventListener('load',()=>{
    const api="https://api.kanye.rest/";
    const text=document.querySelector('.quote');
    fetch(api)
                .then(response=>{
                    return response.json();
            })
                .then(data=>{
                    console.log(data);
                    text.textContent=data.quote;
                })
                var button=document.getElementById('btn');
               
})
function clicked() {
        const api="https://api.kanye.rest/";
        const text=document.querySelector('.quote');
        fetch(api)
                    .then(response=>{
                        return response.json();
                })
                    .then(data=>{
                        console.log(data);
                        text.textContent=data.quote;
                    })   
}
