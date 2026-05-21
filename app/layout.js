import './globals.css';

export const metadata = {
  title: 'Game Changer - Football Predictions',
  description: 'Daily football predictions, VIP tips, and expert match analysis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
