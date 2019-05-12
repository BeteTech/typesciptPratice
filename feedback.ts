interface encrypt{
    (key:string,value:string):string
}

let md5:encrypt=function (key:string):string{
    return key
}





let sha1:encrypt=function(key:string,value:string,id:string):string{
    return key+value+id
}


alert(md5('ok','OK'))