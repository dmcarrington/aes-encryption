const { Safe } = require("./safe");

var safe = new Safe("safe.dat", "my-password");
var data = {
    "private_keys": [
        "9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08",
        "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8",
        "3FC9B689459D738F8C88A3A48AA9E33542016B7A4052E001AAA536FCA74813CB"
    ]
};
safe.encryptAsync(data).then(result => {
    return safe.decryptAsync();
});