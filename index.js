const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('PLAYING')
        .setURL('https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .setState('Join my Discord Server')
        .setName('Apgr.')
        .setDetails('Check my SocialMedia')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1176952548545003660/1197972798476406854/channels4_profile.jpg?ex=65bd361c&is=65aac11c&hm=6a3eb90e3585c88141635fd224360f2af8c31e28d6800981fc90daa825079172&')
        .setAssetsLargeText('APGR')
        .addButton('Youtube', 'https://youtube.com/@apgr.?si=2TSMO7joLCtaaG70')
        .addButton('Youtube FortniteAPGR', 'https://youtube.com/@FortniteAPGR?si=i81KOfaB9Mib3gCT');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












