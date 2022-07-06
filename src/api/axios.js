const axios = require('axios');
const { URL } = require('../config')

module.exports = {

    AXIOS_POST: {
        register: function (namePARAM, surnamePARAM, emailPARAM, passPARAM) {
            axios({
                method: "post",
                url: URL.dev_register,
                data: {
                    firstName: namePARAM,
                    surname: surnamePARAM,
                    email: emailPARAM,
                    pass: passPARAM
                }
            })
        },
        
        login: function(emailPARAM, passPARAM){
            axios({
                method: "post",
                url: URL.dev_login,
                data: {
                    email: emailPARAM,
                    pass: passPARAM
                }
            })
        }
    }
}