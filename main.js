paintings_names=[];
paintings_mapping=[];
var user_set_name=false;

//
//function addImage2Body(charact) {
//    let item = new Item(charact);
//    document.body.appendChild(item.element);
//
//}
//function addImages(){
//    let i;
//    let data = [
//        {name:'0380_00800S',descr:"one",year:'2001'},
//        {name:'0390_01000S',descr:"two",year:'2003'},
//        {name:'0400_01726S',descr:"three",year:'2002'}
//    ];
//    for(i=0;i<data.length;i++){
//        let charact = [data[i].name,data[i].descr,data[i].year]
//        addImage2Body(charact);
//
//    }
//}


let names = [
    {name:"first_img",img:"./img/0380_00800S.bmp",descr:"one",year:'2001'},
    {name:"second_img",img:"./img/0390_01000S.bmp",descr:"two",year:'2003'},
    {name:"third_img",img:"./img/0400_01726S.bmp",descr:"three",year:'2002'},
    {name:"forth_img",img:"./img/0390_01000S.bmp",descr:"forth",year:'2004'}
];
let mapping = [
    {name:"firs_img",img1:"./img/0380_00800S.bmp",img2:"./img/0380_00800S.bmp",img3:"./img/0380_00800S.bmp",img4:"./img/0380_00800S.bmp"},
    {name:"second_img",img1:"./img/0390_01000S.bmp",img2:"./img/0390_01000S.bmp",img3:"./img/0390_01000S.bmp",img4:"./img/0390_01000S.bmp"},
    {name:"third_img",img1:"./img/0400_01726S.bmp",img2:"./img/0400_01726S.bmp",img3:"./img/0400_01726S.bmp",img4:"./img/0400_01726S.bmp"},
    {name:"forth_img",img1:"./img/0390_01000S.bmp",img2:"./img/0390_01000S.bmp",img3:"./img/0390_01000S.bmp",img4:"./img/0390_01000S.bmp"}
];






paintings_names.push(names[1]);
paintings_mapping.push(mapping[1]);

async function async_func(){
autocomplete(document.getElementById("myInput"), names).then((message) =>
{
    document.getElementById("templates").innerHTML = `
    <h1 class="app-title">Paintings(${paintings_names.length} results )</h1>
    ${paintings_names.map(imageTemplate).join('')}
    ${paintings_mapping.map(mappingTemplate).join('')}
    ${paintings_names.map(pigmentTemplate).join('')}
    ${paintings_names.map(similiarTemplate).join('')}
    ${paintings_names.map(underlyingTemplate).join('')}
    <p class="footer> These ${paintings_names.length} paintings were added recently.</p>
    `
    })
}
async_func();

//addImages();
//var x = document.querySelectorAll('div');
//console.log(x);