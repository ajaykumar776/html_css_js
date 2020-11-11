$(document).ready(function(){

    my_arr = [];
    my_obj = {};

    function is_email(id){
        var pattern = /^([a-z0-9_\-\.]+)@gmail\.com$/g;
        return pattern.test(id);
    }

    function is_password(password){
        var pattern = /^[0-9_\-\.@]{6,12}$/g;
        return pattern.test(password);
    }

    function is_registered(email){
        var flag = 0;
        for(var i of my_arr){
            if(i.user_email == email) flag = 1;
        }

        if(flag) return true;
        else return false;
    }

    function is_pass_same(id,pass){
        var flag = 0;
        for(var i of my_arr){
            if(i.user_email == id && i.user_pass == pass) flag = 1;
        }

        if(flag) return true;
        else return false;
    }

    $("#btn4").click(function(){

        try{
            // console.log(my_arr)
            var id = $("#input2").val();
            var pass = $("#input4").val();
            var name = $("#input6").val();
            if(!id) throw "Email is Required.";
            if(!is_email(id)) throw "Correct Email is Required."
            if(is_registered(id)) throw "Email Id has already taken."
            if(!pass) throw "Passwors is Requried.";
            if(!is_password(pass)) throw "Correct Password is Required."
            if(!name) throw "Name is also requried.";
            if(id && pass && name){
                my_obj = {
                    user_email  : id,
                    user_pass : pass,
                    user_name : name,
                    // is_logg_in : false
                }
                my_arr.push(my_obj)
                console.log(my_obj)
                console.log(my_arr)
                $("#input2").val("");
                $("#input4").val("");
                $("#input6").val("");   
                throw "Successfully Registered.";           
            }
            // console.log(my_obj)
            // if(id && pass && name) throw "Successfully Logged-In.";
            
        }
        catch(e){
            alert(e)
        }
    })

    $("#btn5").click(function(){

        var id = $("#input9").val();
        var pass = $("#input11").val();

        try{
            if(!id) throw "Email is required.";
            if(! is_email(id)) throw "Correct Email is required.";
            if(! is_registered(id)) throw "Unable to Logg-in, User is not registered.";
            if(!pass) throw "Password is required.";
            if(! is_pass_same(id,pass)) throw "Correct Password is required.";
            if(id && pass){

                $("#input9").val("");
                $("#input11").val("");
                throw "Successfully Logged-in.";
            }
             
        }
        catch(e){
            alert(e)
        }
    })
})


