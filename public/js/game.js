$(document).ready(function() {

    const elemenTeks = $('#text')[0]
    const elemenPilihan = $('#choices')[0]
    //const chapterData = JSON.parse($('#variableJSON').text());
    const chapterData = chapter;
    const nodes = chapterData['content'];
    console.log(nodes);

    let state = {}
    
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
    
        const thisNode = nodes.find(node => node.id === idNode)
        let isArray = $.isArray(thisNode.text);

        while (elemenPilihan.firstChild){
            elemenPilihan.removeChild(elemenPilihan.firstChild)
        }
    
        $('.btn-choices').remove()
    
        if(thisNode.background){
            $('#container-display').css('background-image', 'url("' + thisNode.background+ '")');
        }
    
        if((!isArray && thisNode.text !== '') || (isArray && thisNode.text[iArrayTeks] !== '')  || thisNode.pilihan !== undefined){
            $('.box-bubble').show();
            $('#text').show();
            if(thisNode.charaImg){
                $('.box-chara').show().css('background-image', 'url("' + thisNode.charaImg + '")')
                $('.box-bubble').css("top", "0");
                $('.box-bubble').css("transform", "translateY(0)");
            }
            if(thisNode.tipe == "narasi" || !thisNode.nama){
                $('.box-bubble').css("top", "50%");
                $('.box-bubble').css("transform", "translateY(-50%)");
            }
            if(thisNode.nama){
                $(".box-name").show();
                $("#nama").text(thisNode.nama);
            }
            if(isArray){
                $('#text').text(thisNode.text[iArrayTeks]) 
            }
            else{
                $('#text').text(thisNode.text)
            }  
        }
    
        if(thisNode.pilihan === undefined) {
            $('.next-button').show()
            $('.next-button').click(function() {
                pindahNodeorIndeks(thisNode, iArrayTeks)
            })
        }
        else {
            $('.next-button').hide()
            $('.next-button').off('click')
            $('#section-choices').show()
            $('#choices').show()
            thisNode.pilihan.forEach(option => {
                if (validasiPilihan(option)) {
                    const button = document.createElement('button')
                    button.innerText = option.text
                    console.log("create button")
                    button.classList.add('menu-chap')
                    button.addEventListener('click', () => prosesPilihan(option))
                    $('#choices').append(button)
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
        cetakNode(option.next, 0)
    }
    
  mulaiGame();  
});