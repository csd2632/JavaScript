paintings_names=[];
paintings_mapping=[];
var user_set_name=false;

let names = [
    {name:"first_img",img:"./img/0380_00800S.bmp",descr:"description",date:'2001',materials:"first image",inv:"first image",institution:"first image",designation:"first image",dimension:"10*10*20 cm",person:"first image"},
    {name:"second_img",img:"./img/0390_01000S.bmp",descr:"two",date:'2002',materials:"second image",inv:"second image",institution:"second image",designation:"second image",dimension:"10*10*20 cm",person:"second image"},
    {name:"third_img",img:"./img/0400_01726S.bmp",descr:"three",date:'2003',materials:"third image",inv:"third image",institution:"third image",designation:"third image",dimension:"10*10*20 cm",person:"third image"},
    {name:"forth_img",img:"./img/0390_01000S.bmp",descr:"forth",date:'2004',materials:"forth image",inv:"forth image",institution:"forth image",designation:"forth image",dimension:"10*10*20 cm",person:"forth image"}
];
let mapping = [
    {name:"firs_img",img1:"./img/0380_00800S.bmp",img2:"./img/0380_00800S.bmp",img3:"./img/0380_00800S.bmp",img4:"./img/0380_00800S.bmp"},
    {name:"second_img",img1:"./img/0390_01000S.bmp",img2:"./img/0390_01000S.bmp",img3:"./img/0390_01000S.bmp",img4:"./img/0390_01000S.bmp"},
    {name:"third_img",img1:"./img/0400_01726S.bmp",img2:"./img/0400_01726S.bmp",img3:"./img/0400_01726S.bmp",img4:"./img/0400_01726S.bmp"},
    {name:"forth_img",img1:"./img/0390_01000S.bmp",img2:"./img/0390_01000S.bmp",img3:"./img/0390_01000S.bmp",img4:"./img/0390_01000S.bmp"}
];
paintings_names.push(names[1]);
paintings_mapping.push(mapping[1]);


$.getJSON("https://bioinfobot.github.io/data/2017-05.json")
.done(function( data ) {
   console.log(data)
});



var functions = {
    image: async function() {document.getElementById("templates").innerHTML =`${paintings_names.map(imageTemplate).join('')}`},
    mapping: function(){ document.getElementById("templates").innerHTML =`${paintings_names.map(mappingTemplate).join('')}`}
};

async function async_func(){
    autocomplete(document.getElementById("myInput"), names).then((message) => {
        document.getElementById("templates").innerHTML = ` 
        ${paintings_names.map(imageTemplate).join('')}
        ${paintings_names.map(imageTemplate).join('')}
        ${paintings_mapping.map(mappingTemplate).join('')}
        ${paintings_names.map(pigmentTemplate).join('')}
        ${paintings_names.map(similiarTemplate).join('')}
        ${paintings_names.map(underlyingTemplate).join('')}
        ${paintings_names.map(visibleTemplate).join('')}
        ${paintings_names.map(uvTemplate).join('')}
        `
    })
}
async_func();



