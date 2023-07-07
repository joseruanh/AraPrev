function parcelamentos()
{
    let a = window.document.getElementById("res")

    a.innerHTML = `
    
    <p class="tit">
        Controle de Parcelamentos 
    </p>

    <table>
    
        <tr>
            <td class="head"> Nº </td> <td class="head">MÊS/ANO</td> <td class="head"> VENCIMENTO </td> <td class="head"> VALOR </td> <td class="head"> SITUAÇÃO </td> <td class="head"> REPASSE </td>
        </tr>

        <tr>
            <td> 41/60 </td> <td> mai/23 </td> <td> 19/06/23 </td> <td> R$ 73 824,36 </td> <td class="loss"> ABERTO </td> <td> falta </td>
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

    </table>
    
    
    
    
    `
}

function reload()
{
    window.alert("ok")
}