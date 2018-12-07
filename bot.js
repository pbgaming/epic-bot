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

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("شكراً لدخولك سيرفرنا" ,member.user.username )
    .setDescription('بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات والآوقات معنا')
    .setColor('RANDOM')
    .setImage('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBISExMVFhUWFxYVFxUYGBgXFhUaFhcWFxUYGBUYHiggGBolHRUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy8mHyUtLS0tLTAtLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECAwQFBwj/xABBEAACAQIEAwYDBAgFAwUAAAABAgADEQQFEiEGMUEHEyJRYZFxgaEUMlLRFRYjQlNicsEIsbLh8CQzkhc0Q8Lx/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEEAgMFBgf/xAA3EQACAQMCBAMGBAYCAwAAAAAAAQIDBBESIQUGMVETFEEWImFxkaEyQlKBFSMzNLHRYmMkU8H/2gAMAwEAAhEDEQA/APDYAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgFbQBaAIBSAIAgCAIAgCAIAgCAIAgCAIAgCAVtABEEtYKQQIAgFbQBaALQTgpBAgGbDoGYAmwJ5+UiTwjZTipTUX0M2OoqrlV5Cwve/TzmMW2ss23NOMKuI9AmXVSoYISpvv8OcjxI5xkmNnWcdajsW4nBMgUsLX5ecyjJS6GurQnT3kaxWZGprAtBA0wThldMDDKaYIGmTgC0YGBpkAqFgF74dgATyO4PnITyZunJLJb3ZteSY4a3LSsEC0AWgC0AuEBF1RiTv6fTaDJvO7MdoMRaAAIBv08IvcNUJN72Atsfn8Jqc3r0l+FtDyzrS74RozbgoMvDi4uNhsbcz/vIMk16mKSYiAXiCTu5Xhw1NSKQY33ZjtsTsAeYt0lSrPTLDZ6Dh9sqtDMaWd+rfQ7jYRGAut9vl7A2E57rTT2Z6+PDqNWCcl6FhyyiedMSVc1F6kPgtnLrAt/RFD+GPr+cnzVTuYfwKy/QP0RQ/hj6/nHmqncPgNm/wAhT9D0P4Y92/OPN1O5Hs/ZfoH6Hofwx7t+cebqdx7P2X6DBjMkpstkAU357n6TZSu5J+8yjfcv0pxxQik+5fhMppaBqQE9T69YqXM9Wz2Nljwa18H+ZFOXqXVMkoH9y3wJmMbyojdU5ds5r8OPkc/E8O7ju2+TdPaWIXqf4jjXXLE0/wCTLbszl4vLKlMEsuw6/wB7iWoVoTexwbnhte3Tc1sXZPRD1ApAPWxJsfTb4j2is9Mck8OoqrXjFrPz6EjXLELBjsfw7aR0Ftpz3dNLCPYQ4JCcvEe3wXRGOvkdJiSdVz6/7RG9kianLdvUlqbZauQUQCPFv68od7JmMeWrZLGWWHh6j5t7j8pmryb9DTPlu0i8OT+pd+r9H+b35ewmPnZdjOPLNtjdsoeHaPm3v/tJV7L1MXyzbYymzG2Q0zcAsDa+5B5/Aek2ebksMpvl+lJyim8o5qZUbVdYI0abeR33+k3ustsepyY8LmlU8RY04wZcZlCrUVFYkseVuS+d/eI1sxbZnc8KjCrGlCWXLD/Y2KnDfOz+4/vNCvV2OjV5ZksuMjZyzBt3ZSqAU/dvzHPfz9ZjVq5kpQ6m/h9m1RnSuUnBdCMYhAGYA3AJA95fi21k8hWjGM2l3MYWZGvBVEJkNhRb6FLSRgpeCEyZ5CP+mT5/6jOTdPFU+icBipWMU13N9VsAB0lRvLyd6nBQior0KyDYIIEEiCChkkOWFkqJBCepFtt/j/nNjeUVVHFXC6F01lwQRuW1aYYEEXB6TOE3F5RWuKEKsHCa2ZHcow2jFMn4QbfS1vkZ060tVHJ4rhVBUeJOD/LkkYM5TWD3lOWpZwVkGbKFvj7TJRyV3VxPTgtemp5gG0yUpRMalGnV3ayXW3vMdWxs8JOWosrVLdCd7WEzpwz1K1xXUN1FtrsYMHUcliU0+I2vsT0G021YwwkmULGpXm5zcPX16/AvxNzSe4sdJ2+UxhtUSTLFzqnbTco4eDjZniwvdVAPEU2Nzty8vn7y9ShnVFnleIXSp+FVh+LSUp8RNp3QX8+Q+MxdlDJnDmSvoxKOSykRiK5GpwNO1yAb+W21pseKMDTTa4ld41NLBmyvJhrYvYhSVA8/X4TVXufd90t8M4JmtKVXdRysdzBmuT6WDJ90ne5tp+Z6TZb3CmtMupU4vwZ289dP8L+xyaVfSDbrzB5HylprJwYzccmLVGlEeIyySYE0yD/29P5/6jOPdf1GfR+Xv7GP7/5OhKx3hBjJmrjMwp0iA5IvuNrzdToTqLKObecVoWslGo8Gt+naH4j7GbPJ1Cn7R2f6n9AM9ofiPsY8nUI9o7Pu/oYf03TDE62Kn93Ty+c3u1bjjBQjx2jCs5qTce2DKmfUSeZHqQf7TU7KZbjzLayeHlGbDZnTqNpU+oJ238gDMJW0oRyzfQ4tQuqnhw6d+hvSqd1dDBj62imzjoP72m6jDXNJnP4ncSt6EqkepxsJnx1jXYL5+Xkby9VtFp93qeXs+YqjqLxdomzhmR8WzKQQE5jzuBNc04UMMuWbpVuJudN5WOp15QPWIQhPoWVaoVdR2H+8zjBylpRUq3EKUNcvTYs+2U/4if8AkJLoz7GpcRtUtprf4lRiqf419xHgT7Gav7bGda+prYjM6S767328JB+k3Qt6kl0Obc8WtaT1atXyZfTzKkRfWo9CReYytqmehvpcXs3DLkkYsbjqZpsFdSSD+8AeUzpUJqW6KvEeI0J0HGnJPO3XcjePe9Oj4gbAi21wb73A+XOdGCxJnjLqpqpU1nOF9DXo0mbwqCbnkJm5Jbsr0qFSo1GCy2SrJct7pbt99ufp6TlXNfxHhdD3fBOGO1jrqfifodKVW2z0Cil0Rr5gmqjUH8p/yv8AlN1vLTURzuJwVW1mn2yQOds+XCAXLbrBKx6kzyIf9PT+f+ozj3X9Rn0fl9Yso/ub8rHcXQQQzm5tlnfFTq02B6e0t29wqawzzvF+ESvKiknhYIxjsE9M+IbXIB87TpwqRmspnibq0q28tM0aomZUMhpnTqsbXtfpe3KRlGbi8ZxsYpJgdHKsSEqAk7C5+YBtNVSGpYL9hXjSqqUvRfcluDr66ava1xe049SGieD6Nw+4dzQjUkZXQEEEXHlMIycXlFmrTjVi4TWzIvnGE7t7qw3O3ms69Cq6kdz55xex8pU92XX0L+GFtVf+n/7CYXn4C3yz/cv5EmnJPfIQSzUzUfsKn9Jlm2yqiOPxnErKfyIU62Np2EfNGtyySYlIAgFQIyFuXqhjJkoP0O9w3jHLd0TdbG3paUrymtOpHpeXbuoqypPoSKcv0Pdx3Eg2GLEmyOf5T/kZtorM0Ub5pW1TPZkBndPk7EGRSDEmmQH/AKZPn/qM491/VZ9H5ff/AIMf3/ydCVTvCSQzSxeYrTdVbYML38reYlmlbucMo4l7xWFtXVOa2aOFneZrVGkDk1wfSxHL2l63oOnuzynF+KQvPdS6M48tHCNk1z3Xd22DFr9eVvaY6d8m91W6fhLotzUmRXLwIJ+LJnkt+4p38tvh0nHuseJsfSeBalZR1I3pVOycnNcJrqUywHdj7x5H4E+Uv29XTFpdTynGLGVS4hOaWj1ZTA0kXEt3f3e7HI35kGTVc3S9/qOG06ML9qh00nXnPPWISSWsmDF4bWhS9gdjb+wm2lV0PLObe2Lr0nTTxk5Q4cX+I3lyEt+e+B5/2W/7PsDw2n4z7CT574D2V/5/YoeGk/GfYR574Eeyv/P7Fp4aX+IfYR574D2V/wCz7GahkCrY6rkG+4v8rTF3uTZT5Z0P8Wf2LKmVkvUQOASA3K1x8ugI+s2q491SKcuDTdWdGMkn1RtZVlQpEsTdjt6AStcXPiLCO1wjgytJOc95HSlM9CJIOfnuICUW828I+fP6S1aQcp59Dz/H7pUrVx9XsQudc+dCAIBMuHiPs6/O/uZyLxfzMn0Tl2UXZpJ9zpSoehXQSSJLJyM8y56rIUtsDe5t6iXratGCwzy3HOF17urF0sdGcVMmqliunlLnmKaXU8xHhF1KTjp6HQwORowOtXUg7bjcTTVutD93c61hwONbKqqUWjdo5FTUMNTeIWPLl7TQ7yT6I6tPlqhGLTk9/kY/1bo/if3H5R52fY1+y1v+p/YyUMgoqQfE1vM7ewEiV7JrCRto8t21OSeW8dzqCVG23k9FCnGKSXoJiZ4RZWYAG9retrfWbKablsUr2VONOSn2OPkjL3zBRay2vcEHccrAS9cpqnuea4HODu5KK6I7c5p7FCCRAEECAIAkjAgiS2NRmXvx56T7XH5/SWYpukcSdSlG+y9npNhKqtexBtzt0miUJR6nUo3NOq2oPOC+YFkwYuq6rdE1HyvabqUYN+8zncQuK9KGaMdTInm1Woz/ALS4PRSLAD0nWoxgo4gfO+JV7ipVzX2fY503HPEAQCU8NYtSgp2swub+e8517Tf4j2nLd7T0+BjdZZ25zz2EegkEgyTFxT6iMjQhIJEDCEE4QgjCEEiBk5ufuwomw22udthcS5Zpa9zznMU5q3wl+/Y0OHK13tpAsp387sJYvFiOTj8uVFK4wl0XXuSGczB7pdRIJMGNraKbP5C83UYKcsMocQupW9CVRehwanEb32VbeoP5y+rKJ5CXM9fOyX3/ANlv6yVPwp9fzjyUCPae47L7/wCx+slT8Kex/OPJQHtPcdl9/wDZUcSP+Bfr+ceRj3JXNFf9K+/+zbrZ8NIZCt7bqQb39LGa42e+GXK3MbcFKnjPZmkM2qO4JQHa1um/U3vLCoRjHBx58Vr16ynOOfTB0cnUJUqISAxsQt7259ZXuk5RTXodzgclb1505PeW6R15zj1qYgNbHPzvBd5TJH3l3Hr5iW7Wtolj0PP8e4eq9DWl7yIZadc+eC0EFIBJcgwBCpWDc7gqfK9tj8pQuayeYM9bwPh80o3VN900d+cw9vHoJIyaePzBaRGrqCee+x6Cb6Vu6iyjkX/F4Wc1Ga+//wALqGY0mFw4+ZAPsZE7acXjBnb8Yta0dSlj5lxxtP8AiJ7j848CeOhl/ErdS3qIr9sp/wARfcSPAn2Nn8Ttf1ofbKf419xHgT7E/wAStv1r6lftdP8AGv8A5CR4M+wXErZ/nX1KnEp+NfcR4M+xL4hbpZ1ooMUlidQsOZ6e8nwZ5xgx/iVu4OerZEYzrNS5KD7g5fzep/KdOhQUFl9Tw3GOKzuZOmvwL7mbhU/tW/o/uJheL+Wb+Wf7p/Ik85R79dRIJ1ZNPOP+xU/plm1/qHH43l2U/kQtUnYyfNlF9gtMk2k6kFTk9kg1MjmI1IOnJdUZBQNuY5E8/Lp8fSQ2jJU5YLO7PkYyjHw5Y6FRcecbMy0yW+5u5PqbEIb3N7nrt1mqviMHk6HClUneQxu/X5ExnEPp6QkEiZLqa6izB5IHi1AdwOQYid6H4T5LcJKrLHcw3k4K5bJJJhw5UvQUWO1/gdzynJvFipk9/wAuVG7ZRae2f8nUlM9JnKEkhbdSPcV0jdG6WI+d50rKSw0eJ5opS8WNT0wR5hL6PKNNPcpeCBeCci8EGakdmG2/mN9vKQzZHoWahBjnB1MTj1OHSmtwRe4+vTpf/KaI02pts6ta+g7SNKmsdzkMZYOQdbhzEolRixtcWB+crXUHOGEdzgN3St7hyq7JrGSTVaoUF73FvPb5Tmxg5Yjg9pVuYUouupZWOgw+ILKG0kX5KefzipTUZYMrW8lXpeI44z0RlS5HiAv5DcfWa20n7pahGc4LxUs/Yd2PIewk+JLuT5Wl+lfQBB5D2kOcn6hWlJPKivoVKg8wI1y7mTt6b6xX0KaB5D2jXLuFbUl+VfQrpHkJGuXch21J/lX0MdegGVlsNwR7iZ06klJPJVu7KlOjKKiuhZhcKiDwqBcDcdZlWqym8ZMLKxoUMShFJ46+psTSdKIkGTeChNt/nMorLwaK1RRg8kAqvck+ZJnfSwj5JOeqTl3ZZNmUaykwJJfkdYChSB/eLAbbcz1nLuoNzbR7vgd1TpWsIye7bOrKR6hNJbCDFtdSO8UYs6hS2tYMfrOpZU1p1HiOZbtyqqh6Lc4NR72ufT25S4jyzk31MckgQBAK3gFIBUGADANzK8EarFQQLC+/xt/ea6lXw1lovWFlK7qaItL13JHh8o8Ol3LAHax5fKUJ3SzmKPXW3BMw0V5t46YZ0KdOwtqP0/KVZVNR26Nq6UVFSeEZJrZcimuokE5EknIkAQMiSMiEYvfYw4qt3dNmtfSOXnNtOGueGUrqv5W2dTGcDC4haihlIPn6HykVKbhLDMrO8p3MFOD+fzM01suNpo5ue4wJSK38TbD4dTLdpS1Tyed4/fRo0HTT3lsQ2dY+elYBSAdXB5kqIqkMSp1DcWv8xNMqWps6dvfKlBLG66GzQ4hYX1C/lawA+k0ys4Mv0eYq8G3LctXiKp5L7SfKQIXMd1nfGDn5ljDVYMbXtbab6VNQWEcq+vJXVTxJdTTmwpiAIAgCAIAgCAdDJsatJ2Zhe4tb536/Caa1NzjhHS4XextKjnJZ2Ov+sifgb3EqeRfqz0T5pprpTKjiVPwN7iPI/EyXNUP0fcp+sqfgb3EeR+Jj7VRz/TKjiSn+BvpMfIS7ma5ppfoZenEVMkDS3x22jyMkuplHmejJpaWX4rPFRyukm3UEWMRsm1uya3MkKc9KhlfMxDiNL/dbn6co8jLua1zTT9YMyfp5dJYI1gbXuOvp8pHkn6s2e00NOpQZhPEqfgb3Ez8j8TS+aY/+v7mDFZ6r02TQQSPMWmyFpokpZKV3zArihKno6mHKs0WiCpUkk3O/pM69B1XkrcK4srFOLjnJvYjiFdIKDc35nl8pphZb7nUuOZkofyY7kfxOJZ2LMbn/AJyl+MVFYR5OvcTrzc6jyzXkmkQBAEAQBAEAQCqi5tAM1XCspIYFWHNW2YbX5HflvAMMApANrD4F3DMilgoBawva5C/5sIBhqUipIOxHQ7QChTrvALIBu/omvo7zuaui2rXobRbz1Wtb1gGmRAKQBALoJ+Rf3h26285GCW22WDnJMS+pUvyFv+c5GDOUsrCLGEkwKCAIBSAIAgCAIB3OEOHcRjcStDDrdiCWax001IsWcjku9vnAPWm7DCwBfGIDdTZKNrj95dZfy5G3TlANvA9h9NHdziFcEOq0qtI1FUMPCdauhLA73sPhAORnfYm+qpUo1AFXlRVWu3U92zsfY8t9+sA834k4RxGC0/aDTTWutLFjrN7Oi2GzJfxarAcrwDQ4eympisVRw1L/ALlVwo/l6sx9FALH4QD6hyDB08PTxDVLaFYG1REDoyqquSwFmDkLUBv/APJba1oBp8fZAcRhqtFcKjh1YgoUR6bL4kLEi5v6X63EA+XKqW2JHxEA+jOwbLTTy0sbBvtNW9je+lRTIuNiLqDsSNgYB6BmeDo1qVVHtYoyMeZUEb+vLe0A+Xe0TInwOOqUCdVMhKtJiAC1NgQtyoB2KlTsLlb7QDX4IyEY/H0cOfAjMWc35Iu5CnqxtpHxgH1Tl2XouFp0CoKBAuggaSLbrp5W9IBBO3LC0kykt3aj9tSuVADEXJPitzNoBC//AESfVR1YxVNXcL3OrRZQfGdYHMhSRtcjztAJHw/2WYKthlr1zZ3Z3qFdlVg7qyodgEuDtp9uUAz5t2JYA4d1w5qJXsSju+pdQ6Mtvunl5i8A8CzXKq2HqPTrU2R1YqVYW3B3seo8iNjAJ32K8H4bMa2I+0hmSiiEIGK3LsdyykHYKdvWAdTts4WweBXCnC0QhqmqrHU7fc7vSACbDcnkOpgGfhnsbxNailTEVUoFrHu2pa6gAGkarsACBe3PmIB0qfYKpAH2wggteoEBDL+6BTv4SNiTqN7nYc4Bs5x2LK6KqPSR/CO8SlUUbKuoshqsNyGNxy1W3gEB4j7LMbhlqsNLpSXWz30lludTovPQo0lr7i/XaAQPEUtLEBgw6MuoBvUagDb4gQDFAEAQD23/AA34JS2NrW8YFKmp32Da2Ybeqrz8hAM/a3x9i8JiBhcPUFOop7wsAraQ6gKo1Ei5u97qCOg3uQItl/HfEdUXpNWqhW0tpw6tuAWsQqc7f2gE04K7R8eKzLmtCpTolPDUGFrAhwyixCqbixPTa3rAI32zcV4bGUsPSw+qyVKlRi9N08TXuASu99RPPoIB0uwLIqiM2NbDlg6tTSprS6C4uQhN/EQRc22Ate8A3O3/AIhfu0wNO9mC1K9gfCAb01LAEbnxEX6L5wDrdnfajQrUsNh8TUVK4Rkd3NtToVWnuerLckm24t1gHm/bXwn9kx5rU7CliS1RRv4XuO9XyG7Bh/V6QD0bsIwXeZQdT1NPfONOshQFsbAD7oJNzbn12JBA43HPFWJwWcPQQCsK1PDXpMdKuyswUFibLcGxPWwvtAO72wcO/bsrTFpTK1qCd6EOkt3bAGqhKkgkAatifum3OAcLhnsuNPL6GKYMuMVhX0hiPAd1pWHJ7b3tza0A2uAuOauY5xRp6dFOjh6twCTqYaVDeLfkbD+o+cA2/wDEGai5d4mGh8RRVFA5EU6zMSet7cvQQCd5lVqLTq1qNMValKgvd0zYBnvrK3PL7tPfpsekA0ezn9rlGG7xbalclTva9Vza/ptAOLw7xbSfNMVgKgtXSqTSdjfvEIDaLi+4DG3moF9wYBGe2fs8rV65xuGXWzqO8W51EqqqmhbWPhHmPnAOb2C46hhnxZq1UpswpUyjkq+oM4GkEb3Zgtr3vfa1jAJN2zYJKmJyak41CpjNFuml3oBwfOASvj/P2wOCbErayjSAT4mZlIQbkG19NzufTqAPCcv7Rs8dlSlXd7nSqLSptuLeEeG5IA8+UA7uE4/4kpWNTD1ai7Nd8IwuOf3kUWgHoGfdo+B7h7d93po1FVWoVgAzjdW1JsLqN7coB8z1RbqD8L2+sAxwBAEA9x/w8UUNLFOxI0VKbbOyj7jWLKtr8zzJHPba8Ar25ZHVxONw5oo9S1Moy001kHUGNwu58DXtueQA3vAIhwrxnjcmFag9K3eqKgp1kdWSp93UQdLEFVtbcbCxFjcD2PgHjjEY9NL4KrTemqirUPgpsx2OgNv0JtvYfK4Gn2pZE+YVMvwYsl6r1XN72p01VahHqNYHxYQCW51meHy7AtVay06NMKiA2LaRZEW53Y2AgEAyvtmy4Uj3y1BUJYsFTUpubA+I9edul4Bzcsz/AIaZ6l01tXrBiK1Mk3drr42Jsim+5P72+1oBL+OMu/SuAqUkoOKlOqwXvNKlHp3UkWbdWViAf5gfKAafYP4cqKmyt39XwE+JdwLEcwdjzgHlnblc5xUvYsKdFTa4uSl7gHkNxtAPSOwvO1r4B8LUaq9VGfVr1FdBChVWpyFgbab3G/S0A6Ha3xGMDlzKtU9/XBpILj0717EGwCm3oWFrQDzH/D7YZsTfc0KotYnrTN72sBsefp5iAT3t5dKuX4RbkB8ZTsbEWGiqrEgi/U7QCeUsMlMFEQgd0WJ30jwqiqCT10E26W6XFwIb2JUan6IplXGlnfYg7WIBsfiGPzgHj/adiHpZ9jKlNijrVVlZTupCIQQYB7LwPxWc4wQtVFDGUHQuQqPy2Z1pt+66F13+6SbchcDY4W7OKWHxj42qwrVGaqw1DUEZqpZKi3OzlSb+rbWgHN7UcSpzHJ6RuLYlXDDUti2y/tNJUtqAOkXPK4FwSB3+PcEGyjFYemfEUKKCxdiwAa131E+G587QD55wmBx2XVKeMSlWpikQ61KlFlpnUdIGo3Q3U9G6kA3EA9S4b7YsTXxBU4F6tN2VKQoK2pW/eFR28J5g9Lc+UA9PzPFsMLXqPT06aVRj4gbWUkk+m14B8aGAUgCAIBIuDuK6uBepouadZQlVAdLMoNwVex0uNwDb94/EAezYLtuy4hA9DEqVsdwj2IFr6g1ybX326wDaxPaRkb1RUr0mWstrNVwx1jwgrcgE2swtAOg3bBlAAtiGO9iO6rXHruo/4YB5rxR2rYt6xrYSpTSn4kp+D9oqMVc95qZvETSAFrA77crAQfiHjTH41BTxWIaoitqClUUAi4v4FG+5gHAJgCATnCdrmbU0RBXUhQF8VNCWAFhqNrk2HOAR48T4r7TVxKVO7qVW1v3fgBbnfSPUk/EmAama5tWxFVqteoalQgAu3MhQAPoIBsZFxJi8GzNhqzUixUtYKdWm+m4YEG2o+8AzcS8UYrG1BUxNTvCBpW6p4R1A0qLb3gHMwOPq0WLUnZGKlSV2JB5j6D2EAkmdceYzGpRp4mqGWmytuqga11DvCEAJOliCORtygHseUdqmEVRSxlZe87o6qqLUNNrAFCAEFi6NqtvYkC9+QEW4Y7V8PgcBQw60nqNSZwVuqgqSWFn3I+91X0gHm3GWeDG42vilUoKrK2gnURZFU+IAX+79YBrcOZ5WweJp4iixV0PK9g63GpG81Ybf/kA9eft+5hcCPS9ew+fg2gEW4/7QfttLDHuRRqrU79Gp1e8tYsi6thpfUl7W5afOASThjtrooHbF0axquQWemysmwsNNNiO7Fulz8YBJH7VcnrUdNWjW7m4Wz0A1IGxZRzIBsCRANnL+1PI6aCnTq92g5KKFYD12CWgEd457VMPicM2Hwbg96lRKveU3HgdWUrTNx+0IO3hIuR6wDwutTsf+e0AxQBAEAQC5WsQRzHWAHck3O56nqfiYBbALrwC2AIAgCAIAgCAIAgCAVvtAKQBAEAQBAKgwC96pIAJNhyF9hfnYdIBjgFRADGAUgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAf/Z)
var channel = member.guild.channels.find('welcome', 'اسم الروم الي تبي يرحب فيه البوت')
if (!channel) return;
channel.send({embed : embed});
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
