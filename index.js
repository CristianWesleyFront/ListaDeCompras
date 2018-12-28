const express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');
const _ = require('lodash');
const app = express();
const val = require('./public/js/validar');

let produto = (nome,quantidade,value)=>{
    return {
        nome:nome,
        quantidade:quantidade,
        value:value
    }
}

let lista = [];

app.set('view engine','pug')
app.use(express.static(__dirname+'/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post("/geraItem",function(req,res){
    console.log(req.body);
    let newProduto = produto(req.body.nome,req.body.quantidade,req.body.value)
    let valido = val.validar(newProduto);
    
    if(valido == true){
        res.render('erro',{})
    }
    else{
        lista.push(newProduto);
        val.capsLook(lista);
        val.set2Fixed(lista);
        console.log(lista);
        let tamanho = lista.length;
        res.render('table',{ 
            lista: lista, 
            tamanho : tamanho
        });
    }
   
    
});

app.post("/geratotal",function(req,res){
    let total = val.getTotal(lista);
    console.log(total);
    res.render('total',{
        total: total
    })
})

app.get('/', function(req,res){
    res.sendfile(__dirname+'/views/index.html');
});

app.listen(3000, function(){
    console.log('Server started!');
});