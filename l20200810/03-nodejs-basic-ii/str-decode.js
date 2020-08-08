// const { StringDecoder } = require('string_decoder');
// const decoder = new StringDecoder('utf8');

// const cent = Buffer.from([0xC2, 0xA2]);
// console.log(decoder.write(cent));

// const euro = Buffer.from([0xE2, 0x82, 0xAC]);
// console.log(decoder.write(euro));


//const data = Buffer.from([65, 65, 43 , 66,66,66])
//let data = decodeURIComponent("%21%20%21")
//console.log(data);


// encode take ! convert to %21
// encodeUri    not encoded ; , / ? : @ & = + $ # (can be use for url addresses)


// encodeUriComponent    all but not encoded A-Z a-z 0-9 - _ . ! ~ * ' ()
// decode tale %21 convert to !

// var uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
// console.log(uri)
// var uri_enc = encodeURIComponent(uri);
// console.log(uri_enc)
// console.log("\n\n")
// var uri_dec = decodeURIComponent(uri_enc);
// var res = uri_enc + "<br>" + uri_dec;
// console.log(uri_dec)
// https://gist.github.com/prof3ssorSt3v3/f156d86175c9ddd1b230c170830b55a4








// https://www.w3schools.com/tags/ref_urlencode.ASP#:~:text=In%20JavaScript%20you%20can%20use,function%20encodes%20space%20as%20%20.