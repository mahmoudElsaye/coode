let no = 6;
let msgInterval = setInterval(() => {
    if(!no) clearInterval(msgInterval);
    no--;
    
    send('msg', {
      "msg" : "بسم الله"
    });
});
