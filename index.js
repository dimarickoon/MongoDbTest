const TelegramBot = require('node-telegram-bot-api');

const token = '901936923:AAFGeTaEcZtlhNCpRkJHo4zvORJmo-dHpCM';
const bot = new TelegramBot(token, {polling: true});


var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/';
res = null
var getData = async function(){
  MongoClient.connect(url, function(err, db) {
    console.log("connected");
    var dbo = db.db("test");
    dbo.collection("Employers").findOne({}, (function(err, result) {
      if (err) throw err;
      db.close();
      return result.name;
    })
  );
  //var cursor = db.collection('pogs').find   
  });
}
//}

//mess = getData();
//console.log(mess);

bot.on("text", (message) =>{
  if(message.text.toLowerCase().indexOf("hi") === 0){
    res = await getData();
    console.log("res : " + res);
    bot.sendMessage(message.chat.id, "hello");
    console.log("res : " + res);
  }
});