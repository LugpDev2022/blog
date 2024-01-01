import { connect, connection } from 'mongoose';

const conn: {
  isConnected: boolean | number;
} = {
  isConnected: false,
};

export const connectDB = async () => {
  if (conn.isConnected) return;

  const db = await connect(process.env.MONGODB_URL || '');
  conn.isConnected = db.connections[0].readyState;
};

connection.on('connected', () => {
  console.log('Mongoose connected');
});

connection.on('error', (err) => {
  console.log('Mongoose connection error', err);
});
