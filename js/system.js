function parcelamentos()
{
    let a = window.document.getElementById("res")

    a.innerHTML = `
    
    <p class="tit">
        Controle de Parcelamentos 
    </p>

    <table>
    
        <tr>
            <td class="head"> Nº </td> <td class="head">MÊS/ANO</td> <td class="head"> VENCIMENTO </td> <td class="head"> VALOR </td> <td class="head"> SITUAÇÃO </td> <td class="head"> REPASSE </td> <td class="head"> ARQUIVO </td>
        </tr>

        <tr>
            <td> 41/60 </td> <td> mai/23 </td> <td> 19/06/23 </td> <td> R$ 73 824,36 </td> <td class="loss"> ABERTO </td> <td class="loss"> falta </td> <td> ver </td> 
        </tr>

        <tr>
            <td> 40/60 </td> <td> abr/23 </td> <td> 17/05/23 </td> <td> R$ 72 867,07 </td> <td class="win"> PAGO </td> <td> 10/05/23 </td>
        </tr>

        <tr>
            <td> 39/60 </td> <td> mar/23 </td> <td> 17/04/23 </td> <td> R$ 72 100,42 </td> <td class="win"> PAGO </td> <td> 10/04/23 </td>
        </tr>

        <tr>
            <td> 38/60 </td> <td> fev/23 </td> <td> 17/03/23 </td> <td> R$ 71 251,19 </td> <td class="win"> PAGO </td> <td> 10/03/23 </td>
        </tr>

        <tr>
            <td> 37/60 </td> <td> jan/23 </td> <td> 17/02/23 </td> <td> R$ 70 624,66 </td> <td class="win"> PAGO </td> <td> 10/02/23 </td>
        </tr>

        <tr>
            <td> 36/60 </td> <td> dez/22 </td> <td> 17/01/23 </td> <td> R$ 70 326,67 </td> <td class="loss"> ABERTO </td> <td class="loss"> falta </td>
        </tr>

    </table>
    
    
    
    
    `
}

function reload()
{
    location.reload()
}

function guias()
{
    window.alert("Em Breve")
}