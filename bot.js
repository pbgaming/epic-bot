const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
    var prefix = "$";
   
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'epicbc') {
        if (!args[1]) {
    message.channel.send("$epicbc <message>");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });


client.on('message', msg => {
	var prefix = "$";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});




client.on('message', function(message) {
var prefix = "$" // هنا البريفكس
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ للعقوبة")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام و رحمة الله و بركاته');
  }
});

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('ولكم');
  }
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا');
  }
});

client.on('message', msg => {
  if (msg.content === 'اهلا') {
    msg.reply('اهلا وسهلا');
  }
});

client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "close") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **:no_entry_sign:تم اغلاق الروم**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**:no_entry_sign:تم اغلاق الروم**")
              });
                }
//FIRE BOT
    if(message.content === prefix + "open") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**:o: تم فتح الروم**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**:o: تم فتح الروم**")
              });
    }
       
});

client.on('message', message => {
 var prefix = "$"
 
if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`\`Support Team\` **لا توجد رتبة بأسم**`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`**لديك تذكرة مفتوحة بالفعل**`);
    message.guild.createChannel(`ticket`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: تم انشاء التذكرة`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`${message.author.username} **مرحبا بك**`, `
يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم ** ** هنا قريباً لمساعدتك`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket`)) return message.channel.send(`لا يمكنك استخدام أمر الإغلاق خارج قناة التذاكر`);
 
    message.channel.send(`**$close** : هل انت متأكد من اغلاق التذكرة ؟ اذا انت متأكد اكتب`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '$close', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('انتهي وقت اغلاق التذكرة').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
 
});


client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('$all')){
    if(!message.author.id === '') return;
    message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
    client.users.forEach(m =>{
    m.sendMessage(args)
    })
    }
    });

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("EPIC","اسم الرتبه"));
    });

client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "hide") {
                           if(!message.channel.guild) return message.reply(' This command only for servers');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: false

              }).then(() => {
                  message.reply("تم اخفاء الشات :white_check_mark: ")
              });
                }

    if(message.content === prefix + "show") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: true

              }).then(() => {
                  message.reply("تم اظهار الشات:white_check_mark:")
              });
    }

});

client.on('message', message => {
    var args = message.content.toLowerCase().split(' ');
    var command = args[0];
    var prefix = '$';
    var wordsSay = message.content.split(' ').slice(1).join(' ');
   
    if(command == prefix + 'say') {
        var sayRole = message.guild.roles.find(r => r.name === 'say');
        if(!sayRole) return message.channel.send('لا استطيع ايجاد رتبة `say` ');
        if(!message.member.roles.has(sayRole.id)) return message.channel.send('يجب ان تتوفر لديك رتبة `say`');
        if(!wordsSay) return message.channel.send(`***EX :*** ${prefix}say Hello World! `);
       
        message.delete();
        let sayE = new Discord.RichEmbed()  
        .setColor('RANDOM')
        .setDescription(`**${wordsSay}**`)  
       
        message.channel.send(sayE);
    }
});     

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {
     if (message.content === "g!bot") {////////////////By:Mal,Team
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")////////////////By:Mal,,Team
  .addField("Servers:" , client.guilds.size)
  .addField("Users:", client.users.size)////////////////By:Mal,Team
  .addField("channels:", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});

var antispam = require("anti-spam");//npm i anti-spam
 
antispam(client, {
  warnBuffer: 3, //الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على تحذير.
  maxBuffer: 5, // الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على ميوت.
  interval: 1000, // مقدار الوقت قبل حصول باند
  warningMessage: "stop spamming.", // رسالة تحذير اذا سوا سبام!
  roleMessage: "Muted!!", // الرسالة الي تجي اذا شخص اخذ ميوت
  roleName: "Muted", // اسم رتبة الميوت
  maxDuplicatesWarning: 7, // عدد الرسايل الي قبل التحذيرات
  maxDuplicatesBan: 10, // عدد الرسايل الي يقدر المستخدم يرسلها قبل الميوت
  time: 10, // عدد الوقت الي يجلس لين تسحب رتبة الميوت من الشخص الحسبة برمجية وليست كتابية 
});

client.on('message', message => {
var prefix = "$";
  if(message.author.bot) return;
if (message.content.startsWith(prefix + 'points')) {
if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
let userData = points[message.author.id];
let embed = new Discord.RichEmbed()
.setAuthor(`${message.author.tag}`, message.author.avatarURL)
.setColor('#000000')
.setDescription(`نقاطك: \`${userData.points}\``)
message.channel.sendEmbed(embed)
}
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Epic Shop`,"http://twitch.tv/YouTube")
client.user.setStatus("dnd")
});


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
