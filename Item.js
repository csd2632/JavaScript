class Item {
    constructor(charact) {
        let el_name = document.createElement('div');
        el_name.innerHTML='Name: '+ charact[0];
        let el_descr = document.createElement('div');
        el_descr.innerHTML='Description: '+ charact[1];
        let el_year = document.createElement('div');
        el_year.innerHTML='Year: '+ charact[2];
   
   
        this.element=document.createElement('div');  
        this.element.appendChild(el_name);
        this.element.appendChild(el_descr);
        this.element.appendChild(el_year);
        
    }
}
