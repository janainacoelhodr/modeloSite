function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i<arr.length; i++) {
        split = arr[i].price.split('$');
        console.log(split);
        var vezes = split[1]/2;
        out += '<li class="item-produto"> ' +
            '<div class="borda">' +
            '<div class="tamanho">' +
            '<div class="imagemproduto">'+
            ' <a class="produto" href="#">' +
            '<img src="' + arr[i].picture + '" alt="imagem-produto"></a>'+
            '</div>' +
            '<div class="produto-info">' +
            '<h4>'+ arr[i].name+'</h4>'+
            '<p>'+ arr[i].description +'</p>' +
            '<p>De: '+ arr[i].oldPrice + '</p>' +
            '<p style="font-weight: bold; font-size: 15px; color: #562668;">Por: ' + arr[i].price + '</p>' +
            '<p>ou 2x de $'+ vezes +'</p>' +
            '<button type="button" class="botao-produto" href="#">Comprar</button>' +
            '</div></div> </div> </li>'


    }
    document.getElementById("id01").innerHTML = out;
}
