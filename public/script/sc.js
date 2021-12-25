// const getMessage = ()=>{
//     fetch('script/blog.txt')
//     .then(function(response){
//         return response.text();
//     })
//     .then(function(data){
//         document.getElementById('blogcontent').innerHTML=data;
//     })
// }

getText("script/blog.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("blogcontent").innerHTML = myText;
}