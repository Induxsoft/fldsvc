document.addEventListener("DOMContentLoaded",()=>{ucfinal.init();});

var ucfinal=
{
    init()
    {
        this.direccion=document.getElementById("direccion");
        this.lat=document.getElementById("lat");
        this.long=document.getElementById("long");

        if(this.direccion)this.direccion.addEventListener("blur",()=>
        {
            buscarDireccion(); 
        });

    }
}