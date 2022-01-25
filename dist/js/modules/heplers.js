export function convertBytesToMb(bytes){
    bytes=(bytes / 1048576).toFixed(2) ;
    return parseFloat(bytes);

};