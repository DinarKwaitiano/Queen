const Discord = require('discord.js')


module.exports = {
    name: 'embed',
    aliases: ["criarembed"],
    description: 'crie embeds personalizadas em seu servidor!',

    run: async(client, message, args) => {
        const description = args.join(' ')
        let channel = message.mentions.channels.first()

        if(!description) return message.channel.send('<:desativado:898580474664992848> | Digite a descrição da sua embed!')
        if(!channel) return message.reply('<:desativado:898580474664992848> | Defina um canal para eu enviar a embed!')
        
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setDescription(description)
        .setTimestamp()
        .setFooter(`Mensagem definida por ${message.author.tag}`)
        .setColor('PINK') 
        .setThumbnail(message.guild.iconURL())

        channel.send(embed)
        message.channel.send(`<:ativado:898580400677474314> | Embed enviado pro canal: ${channel}!`).then(msg => msg.react('🍪'))
        console.log(message)
        }
    }
    
    
    
/*
*
* Caso queira testar um bot que estou fazendo, acesse: 
* 
*   https://discord.gg/Dxxm6xmXeT
*  
*  
*/
