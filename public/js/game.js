$(document).ready(function() {

    const elemenTeks = $('#text')[0]
    const elemenPilihan = $('#choices')[0]
    //const chapterData = JSON.parse($('#variableJSON').text());
    var chapterData = {};
    switch(urlName){
        case 'prologue':
            chapterData = prologue[parseInt(chapterNumber)];
            break;
        
        case 'dynamite':
            chapterData = dynamite[parseInt(chapterNumber)];
            break;

        default:
            chapterData = prologue[parseInt(chapterNumber)];
            break;
    }
    const nodes = chapterData['content'];

    function dbStartStory(){
        $.ajax({  
            url:'/db/startStory',  
            method:'post',  
            dataType:'json',  
            data:{
                user: JSON.stringify(loggedUser),
                storyId: storyId,
                urlName: urlName,
                chapterNumber: chapterNumber,
                lastBg: lastBg
            },  
            success:function(response){  
                if(response){  
                    console.log('penyesuaian db untuk memulai game berhasil');  
                    userProgress = JSON.parse(response);
                    userCurrentNode = userProgress.currentNode;
                    console.log("CURRENT NODE="+userCurrentNode);
                    states = userProgress.states;
                    $('#container-display').css('background-image', 'url("' + userProgress.lastBg+ '")');
                    getFlashcards();
                    halamanAwal();
                    cetakNode(parseInt(userCurrentNode), 0);
    
                }else{  
                    console.log('some error occurred try again');  
                }  
            },  
            error:function(response){  
                console.log('server error occured')  
            }  
        });
        return;
    }
      

    function getFlashcards(){
        flashcards=[];
        for(let i=0; i<nodes.length; i++){
            if(nodes[i].id <= userCurrentNode){
                if(nodes[i].tipe == "fc"){
                    flashcards.push({
                        title: nodes[i].title,
                        answer: nodes[i].answer
                    });
                }
            }
        }
        updateFlashcards();
        return;
    }
    
    function mulaiGame() {
        dbStartStory();
        return;
    }
    
    function halamanAwal() {
        $('.sm-location').text("---");
        $('.sm-year').text("---");
        for(let i=0; i<nodes.length; i++){
            if(nodes[i].id <= userCurrentNode){
                if(nodes[i].tipe == "cs"){
                    $('.sm-location').text(nodes[i].location);
                    $('.sm-year').text(nodes[i].year);
                }
            }
        }
        $('.sm-topic').text(chapterData.storyTitle);
        $('.sm-chapter').text(chapterData.title);
        $('.sm-chp-num').text("Chapter: "+ chapterData.chapterNumber);
        
        return;
    }
    
    function cetakNode(idNode, iArrayTeks) {
        $('#container-display').children().hide();
        $('#choices').hide();
        
        const thisNode = nodes[idNode-1];
        let isArray = $.isArray(thisNode.text);
        

        while (elemenPilihan.firstChild){
            elemenPilihan.removeChild(elemenPilihan.firstChild)
        }
    
        $('.btn-choices').remove();

        if(thisNode.tipe == "fin"){
            //disini set last completed chapter jadi chapter ini
            $.ajax({  
                url:'/db/finishChapter',  
                method:'post',  
                dataType:'json',  
                data:{
                    user: JSON.stringify(loggedUser),
                    storyId: storyId,
                    urlName: urlName,
                    chapterNumber: chapterNumber
                },  
                success:function(response){  
                    if(response){  
                        console.log('pindah chapter selanjutnya berhasil');  
                        userProgress = JSON.parse(response);
                    }else{  
                        console.log('some error occurred try again');  
                    }  
                },  
                error:function(response){  
                    console.log('server error occured')  
                }  
            });
           window.location.href = "/stories"; 
        }
        else if(thisNode.tipe == "fc"){
            flashcards.push({
                title: thisNode.title,
                answer: thisNode.answer
            });
            updateFlashcards();
            cetakNode(thisNode.next, 0);
            return;
        }
        else if(thisNode.tipe == "cs"){
            $('.sm-location').text(thisNode.location);
            $('.sm-year').text(thisNode.year);
            cetakNode(thisNode.next, 0);
            return;
        }

        if(thisNode.background){
            $('#container-display').css('background-image', 'url("' + thisNode.background+ '")');
            lastBg = thisNode.background;
        }
    
        if((!isArray && thisNode.text !== '') || (isArray && thisNode.text[iArrayTeks] !== '')  || thisNode.pilihan !== undefined){
            $('.box-bubble').show();
            $('#text').show();
            if(thisNode.charaImg){
                $('.box-chara').show().css('background-image', 'url("' + thisNode.charaImg + '")');
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
    
        if(thisNode.pilihan == undefined) {
            $('.next-button').show()
            $('.next-button').click(function() {
                pindahNodeorIndeks(thisNode, iArrayTeks);
                return;
            })
        }
        else {
            $('.next-button').hide()
            $('.next-button').off('click')
            $('#section-choices').show()
            $('#choices').show()
            thisNode.pilihan.forEach(option => {
                if (validasiPilihan(option)) {
                    const button = document.createElement('button');
                    button.innerText = option.text;
                    button.classList.add('menu-chap');
                    button.addEventListener('click', () => prosesPilihan(option));
                    $('#choices').append(button);
                }
            })
        }
        return;
    }
    
    //fungsi ini buat ngakses indeks array text node cerita
    function pindahNodeorIndeks(thisNode, iArrayTeks) {
        let isArray = $.isArray(thisNode.text);
        let i = iArrayTeks;
        i++;
        if(isArray && i < thisNode.text.length){
            cetakNode(thisNode.id, i);
            return;
        }
        else{
            if(thisNode.next == undefined){
                thisNode.next = thisNode.id + 1
            }
            userCurrentNode = thisNode.next;
            cetakNode(thisNode.next, 0);
            return;
        }
        return;
    }
    
    function validasiPilihan (option) {
        if(option.butuh) {
            return false;
        }
        else {
            return true;
        }
    }
    
    function prosesPilihan (option) {
        //set state akibat pilihan ini
        userCurrentNode = option.next;
        cetakNode(option.next, 0)
        return;
    }
    
  mulaiGame();  
});