// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

document.addEventListener('DOMContentLoaded', function(){ 
    const page_location = window.document.location.href;

    gtag('event', 'page_view', {
        page_title: window.document.title,
        page_location: page_location,
      });

    document.querySelector('a[href*="/contato/"]').addEventListener('click', function(){

        gtag('event', 'click', {
            page_location: page_location,
            element_name: 'entre_em_contato',
            element_group: 'menu'
        });
    });

    document.querySelector('a[class*="download"]').addEventListener('click', function(){

        gtag('event', 'file_download', {
            page_location: page_location,
            element_name: 'download_pdf',
            element_group: 'menu'
        });
    });

    if (page_location.includes('analise')){

        const cards = document.querySelectorAll('[class*="card-montadoras"]');

        cards.forEach(function(card){

            card.addEventListener("click", function(){

                const cardData = card.getAttribute('data-id');

                gtag('event', 'click', {
                    page_location: page_location,
                    element_name: cardData,
                    element_group: 'ver_mais'
                });
            });
        });
    } 

    else if (page_location.includes('sobre')){

        const inputList = Array.from(document.querySelectorAll('form[class="contato"] li input')).slice(0,4);

        inputList.forEach(function(input){
            const form_id = input.id;
            const form_name = document.querySelector('form').getAttribute('name'); // name="Formulario de Contato" no HTML foi criado por mim, antes não existia a tag name

            input.addEventListener("click", function(){
                
                gtag('event', 'form_start', {
                    page_location : page_location,
                    form_id: form_id,
                    form_name: form_name
                });
            });
        });

        const submit_button = document.querySelector('[type="submit"]');

        submit_button.addEventListener("click", function(){
            inputList.forEach(function(input){
                const form_id = input.id;
                const form_name = document.querySelector('form').getAttribute('name');

                gtag('event', 'form_submit', {
                    page_location : page_location,
                    form_id: form_id,
                    form_name: form_name,
                    form_submit_text: submit_button.textContent
                });
            });
        });

        const formMessage = "Obrigado pelo seu contato";
        
        (function formValidation(){

            if(document.body.innerText.includes(formMessage)){
                const form_id = document.querySelector('[id="formulario-de-contato"]').getAttribute("id");
                const form_name = document.querySelector('form').getAttribute('name');

                gtag('event', 'view_form_success', {
                    page_location : page_location,
                    form_id: form_id,
                    form_name: form_name
                });

            } else {
                setTimeout(formValidation, 1000);
            }
        })();
    }
});