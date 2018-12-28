function getTotal(lista){
    var total = 0;
    
    for (var i = 0; i<lista.length ; i++){
      total += (parseFloat(lista[i].value) * lista[i].quantidade) ;
    }
 
    total = total.toFixed(2).toString();
    total = total.replace(".",",");
    return total;
 }
 
 function set2Fixed (lista){
     for(var j = 0; j < lista.length ; j++){
         var num = lista[j].value ;
         num = parseFloat(num).toFixed(2);    
         lista[j].value = num ;
     }
 }
 
 function capsLook (lista){
     for( var i = 0; i < lista.length ; i++){
         let str = lista[i].nome ; 
         str = str.toLowerCase();
         str = str.charAt(0).toUpperCase() + str.slice(1);
         lista[i].nome = str;
     }
 }
 
 function validar (obj){
         let str = obj.quantidade;
         let str2 = obj.value;  
         let str3 = obj.nome;
        
         if(str === "" || str2 == "" || str3 == ""){
            return true;
         }

        str3 = parseFloat(str3);
      
         if(isNaN(str3) == true){
             return true
         }
       
         else{
            return false;
         }
 }

 module.exports = {
     getTotal,
     set2Fixed,
     capsLook,
     validar
 }