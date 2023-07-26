import { Telegraf } from 'telegraf'

const bot = new Telegraf('6545548439:AAGzoqXEPID3A_sAr_UkPJRv0KwCVviLbKs');

bot.start((ctx) => {
    const message = 'Выберите время:';
    const keyboard = {
        inline_keyboard: [
            [
                { text: 'Открыть WebApp', url: 'https://webapppp.onrender.com' },
            ],
        ],
    };

    ctx.reply(message, { reply_markup: JSON.stringify(keyboard) });
});

bot.launch();
