import amqp from 'amqplib';

let channel: amqp.Channel;
export async function createConnection() {
  const connection = await amqp.connect('amqp://localhost:5673');
  channel = await connection.createChannel();
  const bookingQueue = 'bookings';
  await channel.assertQueue(bookingQueue)
  await channel.assertQueue('bookings-response');
}

export async function sendToBookingQueue(message: any) {
  channel.sendToQueue('bookings', Buffer.from(message), {replyTo: 'bookings-response'});
}

export async function consumeBookingsResponse(callback) {
  channel.consume('bookings-response', (msg)=> {
    channel.ack(msg);
    callback(msg.content.toString());
  })
}
