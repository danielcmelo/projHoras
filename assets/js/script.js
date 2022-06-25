function hora() {
    let hora = document.getElementById('hora1');
    let horaAlterada = Number(hora.value);
    let result = document.getElementById('title');
    let filtro = document.getElementById('container-filter');
    let botaoRecarregar = document.getElementById('botao');


    if (horaAlterada >= 6 && horaAlterada <= 12) {
        result.innerHTML = 'Bom dia';
        result.style.color = 'white'
        filtro.style.backgroundColor = 'rgba(238, 255, 0, 0.20)'
    } else if (horaAlterada > 12 && horaAlterada < 18) {
        result.innerHTML = 'Boa tarde';
        filtro.style.backgroundColor = 'rgba(56, 217, 223, 0.377)'
    } else if (horaAlterada >= 0 && horaAlterada < 6) {
        result.innerHTML = 'É madruga, vai dormir';
        result.style.color = 'white'
        filtro.style.backgroundColor = 'rgba(2, 5, 37, 0.596)'
    } else if (horaAlterada > 23) {
        result.innerHTML = '!!!! Este horário não exite !!!!';
        filtro.style.backgroundColor = 'red'
    } else {
        result.innerHTML = 'Boa noite';
        filtro.style.backgroundColor = 'rgba(4, 14, 100, 0.596)'
    }
}

