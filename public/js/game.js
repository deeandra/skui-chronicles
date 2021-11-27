$(document).ready(function() {

    const elemenTeks = $('#tulisan')[0]
    const elemenPilihan = $('#pilihan')[0]
    
    let state = {}
    const namaUser = 'didi'
    
    function mulaiGame() {
        //halamanAwal()
        state = {}
        cetakNode(1, 0)
    }
    
    function halamanAwal() {
    
    }
    
    function cetakNode(idNode, iArrayTeks) {
        $('#container-game').children().hide()
        $('#pilihan').hide()
        $('#gambar, #nama, #teks, #pilihan, #container-game').removeClass().off('click')
    
        const nodeIni = cerita.find(nodeIni => nodeIni.id === idNode)
        let iniArray = $.isArray(nodeIni.teks)
        
        // while (elemenPilihan.firstChild){
        //     elemenPilihan.removeChild(elemenPilihan.firstChild)
        // }
    
        $('.btn-pilihan').remove()
    
        if(nodeIni.bg){
            $('#container-game').css('background-image', 'url("' + nodeIni.bg + '")')
        }
    
        if((!iniArray && nodeIni.teks !== '') || (iniArray && nodeIni.teks[iArrayTeks] !== '')  || nodeIni.pilihan !== undefined){
            $('#teks').show()
            if(nodeIni.gambar){
                $('#gambar').show().css('background-image', 'url("' + nodeIni.gambar + '")')
                if(nodeIni.tipe === 'dialog-user'){
                    $('#gambar').addClass('user')
                }
                else {
                    $('#gambar').addClass('karakter')
                }
            }
            if(nodeIni.nama || nodeIni.tipe === 'dialog-user'){
                $('#teks').addClass('dialog')
                if(nodeIni.tipe === 'dialog-user'){
                    $('#nama').show().text(namaUser).addClass('user')
                }
                else {
                    $('#nama').show().text(nodeIni.nama).addClass('karakter')
                }
            }
            if(iniArray){
                $('#tulisan').text(nodeIni.teks[iArrayTeks]) 
            }
            else{
                $('#tulisan').text(nodeIni.teks)
            }  
        }
    
        if(nodeIni.pilihan === undefined) {
            $('#container-game').click(function() {
                pindahNodeorIndeks(nodeIni, iArrayTeks)
            })
        }
        else {
            $('#pilihan').show()
            nodeIni.pilihan.forEach(option => {
                if (validasiPilihan(option)) {
                    const button = document.createElement('button')
                    button.innerText = option.teks
                    button.classList.add('btn-pilihan')
                    button.addEventListener('click', () => prosesPilihan(option))
                    elemenPilihan.appendChild(button)
                }
            })
        }
    
    }
    
    //fungsi ini buat ngakses indeks array teks node cerita
    function pindahNodeorIndeks(nodeIni, iArrayTeks) {
        let iniArray = $.isArray(nodeIni.teks)
        let i = iArrayTeks
        i++
        if(iniArray && i < nodeIni.teks.length){
            cetakNode(nodeIni.id, i)
        }
        else{
            if(nodeIni.next === undefined){
                nodeIni.next = nodeIni.id + 1
            }
            cetakNode(nodeIni.next, 0)
        }
    }
    
    function validasiPilihan (option) {
        if(option.butuh) {
            
        }
        else {
            return true
        }
    }
    
    function prosesPilihan (option) {
        //set state akibat pilihan ini
        cetakNode(option.next)
    }
    
});