'use strict';

const amqp = require('./amqp');
const QUEUE = 'queue';

amqp.channel(QUEUE, (err, channel, conn) => {
  if (err) throw err;
  const work = 'queue';
  channel.sendToQueue(QUEUE, amqp.encode(work), { persistent: true });
  setTimeout(() => { channel.close(); process.exit(0); }, 500);
});
