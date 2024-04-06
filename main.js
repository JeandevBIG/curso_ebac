const form = document.getElementById('form-numerico');

form.addEventListener('submit',function(e){
    e.preventDefault();   
    const campoAinput = document.getElementById('campo-a');
    const campoBinput = document.getElementById('campo-b');

    const campoA = parseFloat(campoAinput.value);
    const campoB = parseFloat(campoBinput.value);

    const mensagemFalso = `Tente outra vez`;
    const mensagemVerdade = `O número está correto, ${campoB} é maior que ${campoA}`;
    
    if(campoA >= campoB){
        const containerFalso = document.querySelector('.mensagen-falso');
        containerFalso.innerHTML = mensagemFalso;
        containerFalso.style.display = 'block';
        document.querySelector('.mensagen-verdade').style.display = 'none';
    }
    else{     
        const containerVerdade = document.querySelector('.mensagen-verdade');
        containerVerdade.innerHTML = mensagemVerdade;
        containerVerdade.style.display = 'block';
        document.querySelector('.mensagen-falso').style.display = 'none';
    }
});
