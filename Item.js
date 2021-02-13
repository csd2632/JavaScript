class Item {
    constructor(charact) {
        let el_name = document.createElement('div');
        el_name.innerHTML='Name: '+ charact[0];
        let el_descr = document.createElement('div');
        el_descr.innerHTML='Description: '+ charact[1];
        let el_year = document.createElement('div');
        el_year.innerHTML='Year: '+ charact[2];
        let el_img = document.createElement('img');
        el_img.src = './img/'+ charact[0]+'.bmp';

   
   
        this.element=document.createElement('div');  
        this.element.appendChild(el_name);
        this.element.appendChild(el_descr);
        this.element.appendChild(el_year);
        this.element.appendChild(el_img);
    }
    
}
 
    //const testFolder = "/";
    //const fs = require("fs");
//
    //fs.readdir(testFolder, (err, files) => {
    //    files.forEach(file => {
    //    console.log(file);
    //    });
    //});
    
    <input type="file" multiple onchange="processSelectedFiles(this)">
    let list = [];
    function processSelectedFiles(fileInput) {
    var files = fileInput.files;
    for (var i = 0; i < files.length; i++) {
        list.push(files[i].name);
    }
    for (var i = 0; i < files.length; i++) {
        console.log(files[i].name);
    }
}
