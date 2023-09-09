function receta(){
    libras = prompt("cantidad de arepas")
    var harina,maiz,agua,sal,
    harina = libras*500;
    maiz = libras*500;
    agua = libras*500;
    sal = libras*2;
    document.write("se necesita para una arepa lo siguiente <br>"+harina+"gramos de harina "+maiz+"gramos de maiz"+agua+"mililitros de agua"+sal+"cucharadas de sal");
}

function costos(){

    libras = Number(prompt(" costos de arepa"));
    var libras,maiz,harina,sal ,total;
    harina= libras*3000;
    maiz= libras*2500;
    sal= libras*2500;
    total= harina+maiz+sal;
    document.write( "los costos de  arepas son:"+ total);
}