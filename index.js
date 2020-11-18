const express = require('express')
const axios = require('axios');



//create app
const app = express();

// function myaxios(apiendpoint){
//     fetch(apiendpoint)
//     .then(response=>response.json())
// }

//create a port 
const PORT = process.env.PORT ||3000;

//create a route
app.get('/', (req,res)=>{
    // res.send('githup api express page')
    //acsess api endpoint from githup
    axios.get('https://api.github.com/users/swolepenguin')
    .then(response =>{
        //this prints in the terminal
        // console.log(response.data)
        
        const ashtonObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
            
        };
            console.log(ashtonObject);
            res.send(ashtonObject)
    })
});

app.get('/', (req,res)=>{
    axios.get('https://api.github.com/users/anonyymous1')
    .then(response =>{
        const reubenObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
            
        };
            console.log(rubenObject);
            res.send(rubenObject)
    })
});

app.get('/ruben', (req,res)=>{
    axios.get('https://api.github.com/users/anonyymous1')
    .then(response =>{
        const rubenObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
            
        };
            console.log(rubenObject);
            res.send(rubenObject)
    })
});



app.get('/jaxon', (req,res)=>{
    axios.get('https://api.github.com/users/JaxonNarramore')
    .then(response =>{
        const jaxonObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
            
        };
            console.log(jaxonObject);
            res.send(jaxonObject)
    })
});

app.get('/carolina', (req,res)=>{
    axios.get('https://api.github.com/users/canourrea23')
    .then(response =>{
        const carolinaObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
            
        };
            console.log(carolinaObject);
            res.send(carolinaObject)
    })
});

app.get('/ariel', (req,res)=>{
    axios.get('https://api.github.com/users/ajstrizzy')
    .then(response =>{
        const arielObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
            
        };
            console.log(arielObject);
            res.send(arielObject)
    })
});

app.get('/nicole', (req,res)=>{
    axios.get('https://api.github.com/users/NikkiHmltn')
    .then(response =>{
        const nicoleObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
            
        };
            console.log(nicoleObject);
            res.send(nicoleObject)
    })
});






//listen on a port 
app.listen(PORT,()=>{
    console.log(`your vibing on port ${PORT} yo` );
})