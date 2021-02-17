function imageTemplate(paint) {
    return `
    <div class="paintings_header">
    <h1>PROJECT REPORT</h1>
    </div>
    <div class="paintings">
        <img class="paint-img" src="${paint.img}">
        <h2 class="NAME">NAME</h1>
        <h3 class="paint-name">${paint.name}</h3>
        <h2 class="NAME">NAME</h1>
        <h3 class="paint-name">${paint.name}</h3>
    </div>
    `
}
function mappingTemplate(paint){
    return `
    <div class="paintings_header">
    <h1>MAPPING IMAGE</h1>
    </div>
    <div class="paintings">
        <img class="mapped-paint-img" src="${paint.img1}" width="${calculate_mapped_img_size(4)}">
        <img class="mapped-paint-img" src="${paint.img2}" width="${calculate_mapped_img_size(4)}">
        <img class="mapped-paint-img" src="${paint.img3}" width="${calculate_mapped_img_size(4)}">
        <img class="mapped-paint-img" src="${paint.img4}" width="${calculate_mapped_img_size(4)}">
    </div>
    `
}
function pigmentTemplate(paint) {
    return `
    <div class="paintings_header">
    <h1>PIGMENT IDENTIFICATION</h1>
    </div>
    <div class="paintings">
        <img class="center_paint-img" src="${paint.img}">
    </div>
    `
}
function similiarTemplate(paint) {
    return `
    <div class="paintings_header">
    <h1>SIMILIAR SURFACE</h1>
    </div>
    <div class="paintings">
        <img class="mapped-paint-img" src="${paint.img}" width="${calculate_mapped_img_size(2)}">
        <img class="mapped-paint-img" src="${paint.img}" width="${calculate_mapped_img_size(2)}">
    </div>
    `
}
function underlyingTemplate(paint) {
    return `
    <div class="paintings_header">
    <h1>UNDERLYING SURFACE</h1>
    </div>
    <div class="paintings">
        <img class="center_paint-img" src="${paint.img}">
    </div>
    `
}
function visibleTemplate(paint) {
    return `
    <div class="paintings_header">
    <h1>VISIBLE VARNISH</h1>
    </div>
    <div class="paintings">
        <img class="center_paint-img" src="${paint.img}">
    </div>
    `
}
function uvTemplate(paint) {
    return `
    <div class="paintings_header">
    <h1>UV IMAGE</h1>
    </div>
    <div class="paintings">
        <img class="center_paint-img" src="${paint.img}">
    </div>
    `
}