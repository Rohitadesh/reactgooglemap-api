// let url="https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
// let response= await fetch(url)
// if(response.ok){
//     let json= await response.json()
// }
// else{
//     alert(console.error("its error");)
// }

// using then
// let url="https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
// let c=fetch(url).then(response=>response.json())
// console.log(c)



// let new_fun= async ()=>{
//     let joke_set={
//         headers:{
//             authentication:'secret'
//         }
//     }

//     let url="https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
//     let response= await fetch(url,headers);
//     let data=await response.json();
// let elem=document.querySelector('#formElem')

// async function submit_one(){
//     let url='/function';
//     let response= await fetch(url,{
//         method:'POST',
//         body:new FormData(elem)
//     })
//     let result= await response.json();
//     alert(result.message)
// }
// document.querySelector('.submit').addEventListener('click',submit_one)

