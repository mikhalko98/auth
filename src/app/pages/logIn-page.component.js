import {WFMComponent} from "../../framework/index";
import {main} from "./main";

class LogInPageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }

    events() {
        return {
            'click .button_logIn': 'onClickLogIn',
            'click .forgot_pass': 'onClickForgotPass',
            'click .verification_code': 'onClickVerificationCode',
            'click .close': 'onClickClose'
        }
    }

    onClickLogIn({target}) {
        /*var form = target.parentNode.parentNode;
        console.log(form);*/
        document.getElementById("invalidlog_pass").style.display = "none";
        const login = document.forms["log_In"]["email"].value;
        const pass = document.forms["log_In"]["password"].value;
        if (main.checkEmailAndPass(login, pass))
            window.location.href = "#home";
        else
            document.getElementById("invalidlog_pass").style.display = "block";

        //console.log(main.checkEmail(login));
    }

    onClickForgotPass() {
        document.getElementById("forgot_password_window").style.display = "block";
    }

    onClickVerificationCode() {
        document.getElementById("invalidphone_number").style.display = "none";
        const phoneNumber = document.forms["verification_code"]["phone_number"].value;
        if (main.checkPhoneNumber(phoneNumber))
            document.getElementById("verification_code_window").style.display = "block";
        else
            document.getElementById("invalidphone_number").style.display = "block";
    }

    onClickClose() {
        document.getElementById("verification_code_window").style.display = "none";
    }

    onTabClick({target}) {
        alert('fuck')
        /*if(!target.classList.contains('collapsible-header')) return;

        this.el.querySelectorAll('.js-tab').forEach(e => e.classList.remove('active'))
        target.parentNode.classList.add('active')*/
    }
}

export const logInPageComponent = new LogInPageComponent({
    selector: 'app-home-page',
    template: `
<div class = "block-left">
</div>
<div class="block-right">

<div class="dropdown">
    <button id="lang" value="English" class="langbtn">English</button>
        <div class="dropdown-child">
            <a href="#en/auth/login">English</a>
            <a href="#ua/auth/login">Ukraine</a>
         </div>
</div>
        
<div class="text_mark_top">
    <div class="mark_top">
        <img src="../mystyles/mark.jpg" alt="mark">
    </div>
    <div class="text_top">
        <p>Test auth page</p>
    </div>
</div>

<div class="signUp_logIn">
    <div class="signUp">
        <p><a href="#tabs">Sign Up</a></p>
    </div>
    <div class="logIn">
        <p><a href="#">Log In</a></p>
        <hr>
    </div>
</div>
<hr>
       
<div class="forms_first">
    <form id = "forms_first" name="log_In" action="#" onSubmit="return false">
         <div class="email_form">
              <p>Email<br/><input type="text" name="email"></p>
         </div>
         <div class="pass_form">
               <p>Password<a class="forgot_pass">Forgot password?</a><br/><input type="password"
                                                                                                 name="password"></p>
         </div>
         <div id="invalidlog_pass" class="incorectlog_pass"><p>Invalid login/password</p></div>
               <div class="button_form_first">
                    <input id="sublogIn" class = "button_logIn" type="submit" name="logIn" value="Log In"/>
               </div>
    </form>
</div>

<div class="_or_">
    <p>- OR -</p>
</div>

<div class="form_clarification_below">
    <p>Sign in with your phone number. We will send you a 6-digit code to ensute that only you have access to
                your care team.</p>
</div>
<div class="forms_second">
    <form name="verification_code" action="#" onSubmit="return false">
         <div class="phone_number">
              <input id="phone_number" type="number" name="phone_number" placeholder="your phone number"/>
         </div>
         <div id="invalidphone_number" class="incorectphone_number"><p>Invalid phone number</p></div>
         <div class="button_form_second">
              <p><input type="submit" class = "verification_code" name="verification_code" value="Send verification code"/></p>
         </div>
    </form>
</div>

<div class="contact_us">
    <a href="#">Contact Us</a>
</div>
</div>


<div id="forgot_password_window" class="modalDialog">
    <div>
        <a href="#" title="Close" class="close">X</a>
        <div id="forgot_password_form" class="forgot_password_form">
            <p>Please enter your email address we'll send you a link to change the password</p>
            <form name="forgot_password_form" action="/en/auth/login.html"
                  onsubmit="return check_email_forgot_password_form()">
                <div class="email_form">
                    <p>Email<br/><input type="text" name="email"></p>
                </div>
                <div id="invalid_email" class="incorect_email"><p>Invalid email</p></div>
                <div class="send_form">
                    <p><input type="submit" name="send" value="Send"/></p>
                </div>
            </form>
        </div>
        <div id="email_was_send" class="text_email_was_send"><p>The email was send</p></div>
    </div>
</div>

<div id="verification_code_window" class="modalDialog">
    <div>
        <a href="#" title="Close" class="close">X</a>
        <p>The verification code has been sent</p>
    </div>
</div>

`
});
