$(document).ready(function(){
    var uname= document.getElementById('email') //$('input#email').val()
    var pass= document.getElementById('pass') //$('#pass').val()
    $('form#login').submit(function(){
        if(uname.value ==''){
            $('#error1').show()
            return false;

        }else
        $('#error1').hide()

        if(uname.value.length!==2){
            $('#error2').show()
            return false;
        }
        else
        $('#error2').hide()
        if(pass.value=='' || pass.value!=='pass'){
            $('#error3').show()
            return false;
        }else
        return window.location=("../dashboard.html")

       
    })
    $('#dummy').click(function(){
        
    })

})