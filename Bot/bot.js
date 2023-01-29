const { Telegraf } = require("telegraf");
const TOKEN = "5785712770:AAHP-0a2Qw-G2yoddsWR0cwAp2mtaYu7qws";
const bot = new Telegraf(TOKEN);

const web_link_1 = "https://frolicking-zuccutto-fbd623.netlify.app/";
const web_link_2 = "https://captain-sal.github.io/Castor-website/";
const web_link_3 = "https://captain-sal.github.io/Chatbot/";

bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.start((ctx) =>
  ctx.reply("Welcome to Hamara Saathi application. We are very happy to see you.", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link_1 } }]],
    },
  })
);

bot.help((ctx) =>
  ctx.reply("Scroll our website and find interesting things to eat on any day of the week.", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link_2 } }]],
    },
  })
);

bot.command((ctx) =>
  ctx.reply("Talk to our chatbot and book your table at our restaurant in advance", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link_3 } }]],
    },
  })
);

bot.launch();
