$(document).ready(function() {

    const elemenTeks = $('#text')[0]
    const elemenPilihan = $('#choices')[0]
    //const chapterData = JSON.parse($('#variableJSON').text());
    const chapterData = dynamite[1];
    const nodes = chapterData['content'];
    console.log(nodes);

    function dbStartStory(){
        $.ajax({  
            url:'/db/startStory',  
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
                    console.log('penyesuaian db untuk memulai game berhasil');  
                    userProgress = JSON.parse(response);
                    userCurrentNode = userProgress.currentNode;
                    console.log("CURRENT NODE"+userCurrentNode);
                    states = userProgress.states;
                    cetakNode(parseInt(userCurrentNode), 0);
    
                }else{  
                    console.log('some error occurred try again');  
                }  
            },  
            error:function(response){  
                console.log('server error occured')  
            }  
        });
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
        halamanAwal();
        state = {}
        dbStartStory();
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
        getFlashcards();
        return;
    }
    
    function cetakNode(idNode, iArrayTeks) {
        $('#container-display').children().hide();
        $('#choices').hide()
        
        const thisNode = nodes.find(node => node.id == idNode)
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
        }
        else if(thisNode.tipe == "cs"){
            $('.sm-location').text(thisNode.location);
            $('.sm-year').text(thisNode.year);
            cetakNode(thisNode.next, 0);
        }

        if(thisNode.background){
            $('#container-display').css('background-image', 'url("' + thisNode.background+ '")');
        }else{
            let checkNodeBg = nodes.find(node => node.next == idNode);
            while(!checkNodeBg.background){
                checkNodeBg = nodes.find(node => node.next == checkNodeBg.id);
            }
            $('#container-display').css('background-image', 'url("' + checkNodeBg.background+ '")');
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
            userCurrentNode = thisNode.next;
            cetakNode(thisNode.next, 0);
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
        userCurrentNode = option.next;
        cetakNode(option.next, 0)
    }
    
  mulaiGame();  
});