$(document).ready(function() {

    const elemenTeks = $('#text')[0]
    const elemenPilihan = $('#choices')[0]
    var chapterPlay = JSON.parse($('#variableJSON').text());

    let state = {}
    const namaUser = playerName;
    
    function mulaiGame() {
        //halamanAwal()
        state = {}
        cetakNode(1, 0)
    }
    
    function halamanAwal() {
    
    }
    
    function cetakNode(idNode, iArrayTeks) {
        $('#container-display').children().hide();
        $('#choices').hide()
        $('.box-chara, .box-name, #text, #choices, #container-display').removeClass().off('click')
    
        const thisNode = chapterPlay.find(thisNode => thisNode.id === idNode)
        let isArray = $.isArray(thisNode.text);

        
        while (elemenPilihan.firstChild){
            elemenPilihan.removeChild(elemenPilihan.firstChild)
        }
    
        $('.btn-choices').remove()
    
        if(thisNode.background){
            $('#container-display').css('background-image', 'url("' + thisNode.background+ '")');
        }
    
        if((!isArray && thisNode.text !== '') || (isArray && thisNode.text[iArrayTeks] !== '')  || thisNode.pilihan !== undefined){
            $('#text').show();
            if(thisNode.charaImg){
                $('.box-chara').show().css('background-image', 'url("' + thisNode.charaImg + '")')
                if(thisNode.type === 'user-dialog'){
                    $('.box-chara').addClass('user')
                }
                else {
                    $('.box-chara').addClass('character')
                }
            }
            if(thisNode.nama || thisNode.tipe === 'dialog-user'){
                $('#text').addClass('dialog')
                if(thisNode.tipe === 'dialog-user'){
                    $('.box-name').show().text(namaUser).addClass('user')
                }
                else {
                    $('.box-name').show().text(thisNode.nama).addClass('karakter')
                }
            }
            if(isArray){
                $('#tulisan').text(thisNode.text[iArrayTeks]) 
            }
            else{
                $('#tulisan').text(thisNode.text)
            }  
        }
    
        if(thisNode.pilihan === undefined) {
            $('#container-display').click(function() {
                pindahNodeorIndeks(thisNode, iArrayTeks)
            })
        }
        else {
            $('#choices').show()
            thisNode.pilihan.forEach(option => {
                if (validasiPilihan(option)) {
                    const button = document.createElement('button')
                    button.innerText = option.text
                    button.classList.add('btn-pilihan')
                    button.addEventListener('click', () => prosesPilihan(option))
                    elemenPilihan.appendChild(button)
                }
            })
        }
    
    }
    
    //fungsi ini buat ngakses indeks array text node cerita
    function pindahNodeorIndeks(thisNode, iArrayTeks) {
        let isArray = $.isArray(thisNode.text)
        let i = iArrayTeks
        i++
        if(isArray && i < thisNode.text.length){
            cetakNode(thisNode.id, i)
        }
        else{
            if(thisNode.next === undefined){
                thisNode.next = thisNode.id + 1
            }
            cetakNode(thisNode.next, 0)
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