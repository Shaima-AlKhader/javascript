let nameInput=document.getElementById("name");
let urlInput=document.getElementById("url");
let btn=document.getElementById("btn");
let tbody=document.getElementById("tbody");
let websites=[];
if(localStorage.getItem("websiteList")==null){
    websites=[];
} else{
    websites=JSON.parse(localStorage.getItem("websiteList"));
    showWebsite();
}

function addWebsite(){
    let website={
        websiteName:nameInput.value,
        websiteUrl:urlInput.value,
      };
     
      websites.push(website);
      localStorage.setItem("websiteList", JSON.stringify(websites)); 
}

function showWebsite(){
    let data='';
    websites.forEach( function(website, index){
           data +=`<tr>
             <td>${index}</td>
             <td>${website.websiteName}</td>
             <td><a target="_blank"  href="${website.websiteUrl}">${website.websiteUrl}</a></td>
             <td><a onclick="deleteWebsite(${index})" class="btn btn-danger  text-capitalize">delete</a></td>
             </tr>`
    });
    tbody.innerHTML=data;
}
btn.onclick=function(){
    
    addWebsite();
    showWebsite();
}

function deleteWebsite(id){
   websites.splice(id, 1);
   localStorage.setItem("websiteList", JSON.stringify(websites)); 
   showWebsite();
}