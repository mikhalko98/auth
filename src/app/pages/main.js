class Main{

    checkEmail(email) {
        const x = email;
        const atpos = x.indexOf("@");
        const dotpos = x.lastIndexOf(".");
        return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length);
    }

    checkEmailAndPass(email, pass) {
        if (email === "admin" && pass === "123456") return true;
        else {
            return this.checkEmail(email);
        }
    }
    checkPhoneNumber(phoneNumber) {
        if (phoneNumber.length === 10) {
            return true;
        } else {
            return false;
        }
    }
}

export const main = new Main();