const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on("message", (message) => {
 
   if (message.content.startsWith("snew")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "@everyone")) return message.channel.send(`لازم تسوي رتبة اسمها \`Helpers Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "@everyone");
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
            message.channel.send(`:white_check_mark: Has Been, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`**الرجاء عدم المنشن و انتظار الأداره لحين يرد احد منهم عليك** ${message.author.username}!`, `**تم انشاء تذكرتك**`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("sclose")) {
        if (!message.channel.name.startsWith(`sclose`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`**انت متأكد انك تريد الاغلاق اكتب `/confirm` **`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '/confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })  
                   .catch(() => {
                       m.edit('لقد إنتهت مدة التأكيد, التذكرة لم تنقفل').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});


client.on('message', message => {
    if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
   let embed = new Discord.RichEmbed()
   let args = message.content.split(' ').slice(1).join(' ');
if(message.content.startsWith('1bc')) {
       message.guild.members.forEach(member => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
           member.send(` ${args}`);

        });
    }
    

});

								   client.on('message', msg => {
            if (msg.author.bot) return;
            let args = msg.content.split(" ").slice(1);
              if(msg.content.startsWith('y!clear')) {
              let textxt = args.slice(0).join("");
              if(msg.member.hasPermission("MANAGE_MESSAGES")) {
              if (textxt == ""){ return msg.channel.bulkDelete(50).then (msg.channel.send("**Done Delete Messages | ?**"))
          } else {
              msg.delete().then
              msg.delete().then
              msg.channel.bulkDelete(textxt);
                  msg.channel.send(`**Done Delete ${textxt} Messages | :white_check_mark:**`).then(m => m.delete(3000));
                  }    
              }
          }
          });
		  
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**__W__**`e`**lcome** `T`**o** `S`**ene**`r`**gy** :heart: **Ha**`v`**e** **F`u`**n** :large_blue_circle:
 **اسم العضو**${member}  
 `) 
}).catch(console.error)
})

client.on('message', message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == '2bc') {
        if (!args[1]) {
    message.channel.send("**.bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField('** Server**', `${message.guild.name}`,true)
                .addField(' **Send By **', `${message.author.username}#${message.author.discriminator}`,true)
                .addField(' **Text** ', args)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                m.send(`${m}`,{embed: bc});
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('Done ') 
            .addBlankField(true)
            .addField('Members', message.guild.memberCount , true)        
            .addField('Text ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء