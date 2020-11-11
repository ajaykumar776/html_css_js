class Auth{
    
    constructor(){
        this.info = [];
        this.obj = {};
        this.check_id = "";
        this.check_password = "";
        this.check_name = "";
    }

    change(pass1,pass2){
        for(var i of this.info){
            if(i.user_id == this.check_id && i.user_password == pass1){
                i.user_password = pass2;
            }
        }
    }

    is_logged(email){
        var flag = 0;
        for(var i of this.info){
            if(i.user_id == email){
                if(i.is_login == 1){
                    flag = 1;
                }
            }
        }

        if(flag) return true;
        else return false;
    }

    is_match(email,password){
        var flag = 0;
        for(var i of this.info){
            
            if(i.user_id == email && i.user_password == password){
                flag = 1;

            }
        }

        if(flag) return true;
        else return false;
    }

    is_registered(email){
        var flag = 0;
        for(var i of this.info){
            if(i.user_id == email) flag = 1;
        }

        if(flag) return true;
        else return false;
    }

    is_email(id){
        var pattern = /^([a-z0-9_\-\.]+)@gmail\.com$/g;
        return pattern.test(id);
    }

    is_password(password){
        var pattern = /^[0-9_\-\.@]{6,12}$/g;
        return pattern.test(password);
    }
    // email should be valid
    // password length should be atleast 6 to atmost 12 and only alphanumeric
    // full_name should be max 20 char
    register(email, password, full_name){
        this.check_id = email;
        this.check_password = password;
        this.check_name = full_name;

        if(this.is_email(this.check_id)){
            if(this.is_password(this.check_password)){
                if(this.is_registered(this.check_id)){
                    console.log("user has already registered.");
                }
                else{
                    this.obj = {
                    user_id : email,
                    user_password : password,
                    user_name : full_name,
                    is_login : 0
                    };
                    this.info.push(this.obj);
                    console.log("Successfully registered..");
                    // console.log(this.info);
                }
            }
            else{
                console.log("Correct password is required for registration..");
            }
        }
        else{
            console.log("Correct email is required for registration.");
        }
    }

    // email should be valid
    // password length should be atleast 6 to atmost 12 and only alphanumeric
    login(email, password){

        this.check_id = email;
        this.check_password = password;

        if(this.is_email(this.check_id)){
            if(this.is_password(this.check_password)){
                if(this.is_registered(this.check_id)){
                    if(this.is_match(this.check_id,this.check_password)){
                        console.log("Successfully logged in.");
                        for(var i of this.info){
                            if(i.user_id == email && i.user_password == password){
                                i.is_login = 1;
                            }
                        }
                        // console.log(this.info);
                    }
                    else{
                        console.log("Incorrect email or password..");
                    }
                }
                else{
                    console.log("User does not exist.");
                }
            }
            else{
                console.log("Correct password is required..");
            }
        }
        else{
            console.log("Correct email is required.");
        }

    }
    

    // password length should be atleast 6 to atmost 12 and only alphanumeric
    change_password(old_password, new_password){
        // console.log(`${this.check_id} = ${this.check_password}`);
        if(this.is_logged(this.check_id)){
            if(this.is_match(this.check_id,old_password)){
                this.change(old_password,new_password);
                console.log("Successfully changed..");
            }
            else{
                console.log("Incorrect password..");
            }
        }
        else{
            console.log("user is not logged in. hence cant change the password.");
        }
    }

    logout(){
        for(var i of this.info){
            if(i.user_id == this.check_id && i.user_password == this.change_password){
                i.is_login = 0;
            }
        }

        console.log("Successfully logged out..");
    }
}

var auth = new Auth();
auth.login("", "");
// email is required
auth.login("nfraz007@gmail.com", "123456");
// user does not exist
auth.change_password("123456", "12345678");
// user is not logged in
auth.register("nfraz007@gmail.com", "123456", "Nazish Fraz");
// successfully registered
// auth.register("nfraz007@gmail.com", "123456", "Nazish Fraz");  
auth.register("aaqibgouher@gmail.com", "123456", "Aaqib Gouher"); 
// successfully registered
auth.login("nfraz007@gmail.com", "12345678");
// incorrect password
auth.login("nfraz007@gmail.com", "123456");
// successfully logged in
auth.change_password("123456", "1234567_");
// successfully changed the password
auth.logout();
// successfully logged out
auth.login("aaqibgouher@gmail.com", "123456");