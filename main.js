/* document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn-cep-search').addEventListener('click', function(){
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;

        const endpoint = `https:\\viacep.com.br/ws/${cep}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();
    })
}) //esse jeito aqui é usando o DOM  */

$(document).ready(function(){ //esse jeito é usando o jquery
    $('#cep').mask('00000-000');

    $('#btn-cep-search').click(function(){
        const cep = $('#cep').val();
        const endpoint = `https:\\viacep.com.br/ws/${cep}/json`;
        const btn = $(this)
        $(btn).find('i').addClass('d-none');
        $(btn).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(res){

            const street = res.logradouro;
            const neighborhood = res.bairro;
            const city = res.localidade;
            const state = res.uf;
            const address = `${street}, ${neighborhood} - ${city} - ${state}`;
            
            $('#address').val(address);

            $(btn).find('i').removeClass('d-none');
            $(btn).find('span').addClass('d-none');
        })
    })
})