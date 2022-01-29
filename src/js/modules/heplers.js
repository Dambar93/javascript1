export function convertBytesToMb(bytes){
    bytes=(bytes / 1048576).toFixed(2) ;
    return parseFloat(bytes);

};

export function dateNow(){

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
return dateTime;
}