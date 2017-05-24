'use strict';

const amqp = require('./amqp');
const QUEUE = 'queue';

amqp.channel(QUEUE, (err, channel, conn) => {
  if (err) throw err;
  channel.consume(QUEUE, (msg) => {
    const content = amqp.decode(msg.content);
    console.log(`Menssage: [${content}]`);
  }, { noAck: true });
});
