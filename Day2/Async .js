//Promise
let prom = new Promise((resolve,reject) =>{
  let x = 1 +1;
  if(x==2){
    resolve("sucess");
  }
  else{
    reject("failed");
  }
})
  prom.then((message) => alert(message)).catch((err) => alert(err))

//
var isSubcribe = false;
var sent = true;
function Subcribe(){
  return new Promise((resolve,reject) =>{
  if (!isSubcribe){
    reject("please subcribe");
  }
  else if(sent){
  reject("sent please");
  }
  else{
   resolve("sucess");
  }})
  
    

}
Subcribe().then((message) =>{
 alert(message)}).catch((error) =>{
 alert(error)})

//fetch
let url =`https://api.imgflip.com/get_memes`
const data = fetch(url)
                       .then((response) =>{ return response.json()})
                       .then((data) => {return data})
data.then((data) => {console.log(data)})

//async and await
const api = async () =>{
  let url = `https://api.imgflip.com/get_memes`;
  let res =  await fetch(url);
  let data = await res.json();
  return data;
}
api().then((data) =>{
  console.log(data)})

//promise all

const loadall = async () =>{
   let url1 = `https://api.imgflip.com/get_memes`;
   let url2 = `https://api.imgflip.com/get_memes`;
   let url3 = `https://api.imgflip.com/get_memes`;
  
  const res = await Promise.all([fetch(url1),fetch(url2),fetch(url3)]);
  const final = await res.map((result)=>result.json())
  const data = await Promise.all(final);
  return data;
}
loadall().then((data)=> {console.log(data)})
    
  //Callbacks
var isSubcribe = false;
var sent = true;
function callsback(resultback,errback){
  if(isSubcribe){
    errback("no user subscribe");
  }
  else if (sent){
    errback("not sent");
  }
  else{
    resultback("subscribed");
  }
}
  
  callsback((method) => {
    console.log("sucess" + method)},(error)=> {console.log("errors" + error)})
    
            
