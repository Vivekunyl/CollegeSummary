const getMessage = ()=>{
    fetch('script/blog.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        document.getElementById('try').innerHTML=data;
    })
}