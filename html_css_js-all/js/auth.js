class Auth{
    constructor(){
        this.users = [];
        this.login_users = [];
    }

    validate(keys){
        for(var key in keys){
            var value = keys[key];
            if(key == "email"){
                if(!value) return "Email is required";
                if(!/^([a-z0-9_\-\.]+)@gmail\.com$/g.test(value)) return "Invalid Email";
            }
            if(key == "password"){
                if(!value) return "Password is required";
                if(!/^[0-9_\-\.@]{6,12}$/g.test(value)) return "Invalid Password";
            }
            if(key == "full_name"){
                if(!value) return "Full name is required";
            }
        }
    }

    is_email_exists(email){
        var is_email_exists = this.users.filter((value) => {
            return value.email == email
        });
        return is_email_exists.length ? true : false;
    }

    // email should be valid
    // password length should be atleast 6 to atmost 12 and only alphanumeric
    // full_name should be max 20 char
    register(email, password, full_name){
        try{
            var error = this.validate({
                email: email,
                password: password,
                full_name: full_name
            });
            if(error) throw error;

            if(this.is_email_exists(email)) throw "This email is already exists";

            this.users.push({
                email: email,
                password: password,
                full_name: full_name
            });

            console.log("Successfully register " + email);
            // console.log(this.users);
        }catch(e){
            console.log(e)
        }
    }

    // email should be valid
    // password length should be atleast 6 to atmost 12 and only alphanumeric
    login(email, password){
        try{
            var error = this.validate({
                email: email,
                password: password
            });
            if(error) throw error;

            if(!this.is_email_exists(email)) throw "Email does not exist. please register"

            var user = this.users.filter((value) => {
                return value.email == email && value.password == password
            });
            
            if(!user.length) throw "Incorrect Password";

            this.login_users.push(user[0]["email"]);
            console.log("Login successfull as "+email);
        }catch(e){
            console.log(e)
        }
    }
    

    // password length should be atleast 6 to atmost 12 and only alphanumeric
    change_password(email, old_password, new_password){
        try{
            var error = this.validate({
                password: new_password
            });
            if(error) throw error;

            if(this.login_users.indexOf(email) == -1) throw "User is not logged in";
            
            var login_user_index;
            var user = this.users.filter((value, index) => {
                if(value.email == email && value.password == old_password) login_user_index = index;
                return value.email == email && value.password == old_password
            });
            if(!user.length) throw "Old password is incorrect";
            if(user[0].password == new_password) throw "Old password and new password cannot be same";

            this.users[login_user_index]["password"] = new_password;
            console.log("Password changed");
        }catch(e){
            console.log(e);
        }
    }

    logout(email){
        this.login_users = this.login_users.filter((value) => {
            return value != email
        });
        console.log("Successfully logged out as "+email);
    }
}

var auth = new Auth();
auth.login("", "");
// // email is required
auth.login("nfraz007@gmail.com", "123456");
// // user does not exist
auth.change_password("nfraz007@gmail.com", "123456", "12345678");
// // user is not logged in
auth.register("nfraz007@gmail.com", "123456", "Nazish Fraz");
// // successfully registered
auth.register("aaqibgouher@gmail.com", "123456", "Aaqib Gouher"); 
// // successfully registered
auth.login("nfraz007@gmail.com", "12345678");
// // incorrect password
auth.login("nfraz007@gmail.com", "123456");
// // successfully logged in
auth.change_password("nfraz007@gmail.com", "123456", "123456");
// // successfully changed the password
auth.login("aaqibgouher@gmail.com", "123456");
auth.logout("nfraz007@gmail.com");
// // successfully logged out