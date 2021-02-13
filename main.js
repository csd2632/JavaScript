function addImage2Body(charact) {
    let item = new Item(charact);
    document.body.appendChild(item.element);

}
addImage2Body(['name','decription','year']);