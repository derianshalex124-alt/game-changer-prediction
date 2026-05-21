# Game Changer - Football Predictions Website

A modern, sleek football prediction website built with **Next.js** and **Tailwind CSS**.

## Features

✅ Daily football predictions  
✅ VIP membership system  
✅ Match predictions with odds  
✅ Results tracking  
✅ Responsive design  
✅ Dark mode UI  
✅ Mobile-friendly  

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/derianshalex124-alt/game-changer-prediction.git
cd game-changer-prediction
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### 4. Build for production

```bash
npm run build
npm start
```

## Deployment

Deploy to **Vercel** with one click:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

## Project Structure

```
├── app/
│   ├── page.js           # Main homepage
│   ├── layout.js         # Root layout
│   └── globals.css       # Global styles
├── public/               # Static files
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
└── README.md            # This file
```

## Customization

### Add more matches

Edit the `matches` array in `app/page.js`:

```javascript
const matches = [
  { home: 'Team A', away: 'Team B', tip: 'Prediction', odds: '1.50', status: 'FREE' },
  // Add more matches...
];
```

### Change colors

Modify Tailwind color classes in `app/page.js`. Default theme uses:
- `bg-black` for background
- `text-green-400` for primary text
- `bg-green-500` for buttons

### Add a database

Integrate a backend API:

1. Create API routes in `app/api/`
2. Connect to a database (MongoDB, PostgreSQL, etc.)
3. Fetch live match data and predictions

## Future Enhancements

- [ ] User authentication & accounts
- [ ] Payment integration (Stripe, M-Pesa)
- [ ] Real-time match updates
- [ ] Email notifications
- [ ] Mobile app
- [ ] API integration with sports data providers
- [ ] Admin dashboard

## License

MIT License - feel free to use this project for personal or commercial use.

## Support

For questions or issues, open an issue on GitHub or contact us.

---

**Made with ❤️ by Game Changer Team**
