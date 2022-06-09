const PythonShell = require('python-shell'),
    axios = require('axios');

const register = async () => {
    const headers = {
        "Content-Type": "application/json",
    }

    let options = {
        args: ['103.231.78.36:80']
    }

    PythonShell.run('bypass.py', options, async (err, [, key]) => {
        let {data: { token }} = await axios.post('https://discord.com/api/v9/auth/register', {
            captcha_key: key,
            consent: true,
            date_of_birth: "2002-05-12",
            email: "asdfafdghfghsdf@gmail.com",
            gift_code_sku_id: null,
            invite: null,
            password: "h9udhf98weh98h90asdf",
            promotional_email_opt_in: false,
            username: "ashdjkfashjkdfh"
        }, {headers})

        console.log(token)
    })
}
register();