function checkBoxTemplate() {
    return`
    <h1>Custom Checkboxes</h1>
    <label class="container">One
      <input type="checkbox" >
      <span class="checkmark"></span>
    </label>
    <label class="container">Two
      <input type="checkbox"  id="myCheck" onclick="check_function(2)">
      <span class="checkmark"></span>
    </label>
    <label class="container">Three
      <input type="checkbox" >
      <span class="checkmark"></span>
    </label>
    <label class="container">Four
      <input type="checkbox" id="myCheck" onclick="check_function()">
      <p id="text" style="display:none">Checkbox is CHECKED!</p>
      <span class="checkmark"></span>
    </label>`
}
function imageTemplate(paint) {
    return `
    <div class="paintings_header">
    <h1>PROJECT REPORT</h1>
    </div>
    <div class="paintings">
        <img class="paint-img" src="${paint.img}">
        <section>
        <h2 class="NAME">TITLE</h2>
        <h3 class="paint-name_left">${paint.name}   </h3>
        <h2 class="NAME">DATE</h2>
        <h3 class="paint-name_left">${paint.date}   </h3>
        <h2 class="NAME">MATERIALS</h2>
        <h3 class="paint-name_left">${paint.materials}  </h3>
        <h2 class="NAME">INSTITUTION</h2>
        <h3 class="paint-name_left">${paint.institution}</h3>
        <h2 class="NAME">DESCRIPTION</h2>
        <h3 class="paint-name_left">${paint.description}</h3>
        </section>
        <section>
        <h2 class="NAME">DESCRIPTION</h2>
        <h3 class="paint-name_right">${paint.inv}</h3>
        <h2 class="NAME">DESIGNATION</h2>
        <h3 class="paint-name_right">${paint.designation}</h3>
        <h2 class="NAME">DIMENSION</h2>
        <h3 class="paint-name_right">${paint.dimention}</h3>
        <h2 class="NAME">PERSON</h2>
        <h3 class="paint-name_right">${paint.person}</h3>
        </section>
    </div>
    `
}
function mappingTemplate(paint) {
    return `
    <div class="paintings_header">
    <h1>MAPPING IMAGE</h1>
    </div>
    <div class="paintings">
        <img class="mapped-paint-img" src="${paint.img1}" width="${calculate_mapped_img_size(4)}"><img class="mapped-paint-img" src="${paint.img2}" width="${calculate_mapped_img_size(4)}"><img class="mapped-paint-img" src="${paint.img3}" width="${calculate_mapped_img_size(4)}"><img class="mapped-paint-img" src="${paint.img4}" width="${calculate_mapped_img_size(4)}">    
    </div>
    `
}
function pigmentTemplate(paint) {
    return `
    <div class="paintings_header">
    <h1>PIGMENT IDENTIFICATION</h1>
    <div class="paintings">
        <div class="charts">
        <div class="charts__chart chart--p100 chart--default" data-percent></div><!-- /.charts__chart -->
        <div class="charts__chart chart--p80 chart--blue" data-percent></div><!-- /.charts__chart -->
        <div class="charts__chart chart--p60 chart--green" data-percent></div><!-- /.charts__chart -->
        <div class="charts__chart chart--p40 chart--red" data-percent></div><!-- /.charts__chart -->
        <div class="charts__chart chart--p20 chart--yellow" data-percent></div><!-- /.charts__chart -->
        <div class="charts__chart chart--p5 chart--grey" data-percent></div><!-- /.charts__chart -->
        
    <div class="paintings">
        <img class="center_paint-img" src="${paint.img}">
    </div>
    </div>
    </div>
    `
}
function similiarTemplate(paint) {
    return `
    <div class="paintings_header">
    <h1>SIMILIAR SURFACE</h1>
    </div>
    <div class="paintings">
        <img class="mapped-paint-img" src="${paint.img}" width="${calculate_mapped_img_size(2)}"><img class="mapped-paint-img" src="${paint.img}" width="${calculate_mapped_img_size(2)}">
    </div>
    `
}
function underlyingTemplate(paint) {
    return `
    <div class="paintings_header">
    <h1>UNDERLYING SURFACE</h1>
    </div>
    <div class="paintings">
        <img class="center_paint-img" style = "orizontal-align:middle" src="${paint.img}" >
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