function addImage2Body(charact) {
    let item = new Item(charact);
    document.body.appendChild(item.element);

}
function addImages(){
    let i;
    let data = [
        {name:'0380_00800S',descr:"one",year:'2001'},
        {name:'0390_01000S',descr:"two",year:'2003'},
        {name:'0400_01726S',descr:"three",year:'2002'}
    ];
    for(i=0;i<data.length;i++){
        addImage2Body([data[i].name,data[i].descr,data[i].year]);

    }
}
addImages();