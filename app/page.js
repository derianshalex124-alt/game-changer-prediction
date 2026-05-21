export default function GameChangerWebsite() {
  const matches = [
    { home: 'Chelsea', away: 'Arsenal', tip: 'Over 2.5 Goals', odds: '2.10', status: 'FREE' },
    { home: 'Man City', away: 'Liverpool', tip: 'Both Teams To Score', odds: '1.85', status: 'VIP' },
    { home: 'Barcelona', away: 'Real Madrid', tip: 'Correct Score 2-1', odds: '8.50', status: 'VIP' }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-green-500">
        <h1 className="text-3xl font-bold text-green-400">GAME CHANGER</h1>

        <div className="hidden md:flex gap-6 text-lg">
          <a href="#home" className="hover:text-green-400">Home</a>
          <a href="#predictions" className="hover:text-green-400">Predictions</a>
          <a href="#vip" className="hover:text-green-400">VIP Tips</a>
          <a href="#results" className="hover:text-green-400">Results</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-20"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold text-green-400 mb-6">
          WIN WITH SMART PREDICTIONS
        </h2>

        <p className="max-w-2xl text-gray-300 text-lg md:text-xl mb-8">
          Daily football predictions, VIP tips, correct scores, over/under odds,
          and expert match analysis.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-2xl font-bold text-black">
            Join VIP
          </button>

          <button className="border border-green-500 px-8 py-3 rounded-2xl hover:bg-green-500 hover:text-black">
            View Predictions
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 py-10">
        <div className="bg-zinc-900 rounded-3xl p-6 shadow-lg border border-zinc-800 text-center">
          <h3 className="text-4xl font-bold text-green-400">96%</h3>
          <p className="text-gray-400 mt-2">Win Rate</p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 shadow-lg border border-zinc-800 text-center">
          <h3 className="text-4xl font-bold text-green-400">500+</h3>
          <p className="text-gray-400 mt-2">Daily Users</p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 shadow-lg border border-zinc-800 text-center">
          <h3 className="text-4xl font-bold text-green-400">10+</h3>
          <p className="text-gray-400 mt-2">VIP Matches</p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 shadow-lg border border-zinc-800 text-center">
          <h3 className="text-4xl font-bold text-green-400">24/7</h3>
          <p className="text-gray-400 mt-2">Predictions</p>
        </div>
      </section>

      {/* Predictions Section */}
      <section id="predictions" className="px-8 py-16">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-4xl font-bold text-green-400">Today's Predictions</h2>

          <input
            type="text"
            placeholder="Search match..."
            className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white w-full md:w-72"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matches.map((match, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl hover:scale-105 transition"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="bg-green-500 text-black text-sm px-3 py-1 rounded-full font-bold">
                  {match.status}
                </span>

                <span className="text-green-400 font-bold">Odds {match.odds}</span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {match.home} vs {match.away}
              </h3>

              <p className="text-gray-300 mb-6">Prediction: {match.tip}</p>

              <button className="w-full bg-green-500 text-black py-3 rounded-2xl font-bold hover:bg-green-600">
                View Tip
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* VIP Section */}
      <section id="vip" className="px-8 py-16 bg-zinc-950">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-3xl p-10 border border-green-500 shadow-2xl text-center">
          <h2 className="text-5xl font-bold text-green-400 mb-6">VIP MEMBERSHIP</h2>

          <p className="text-gray-300 text-lg mb-8">
            Get access to premium football predictions, jackpot tips, and expert analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-2xl font-bold mb-3">Daily VIP</h3>
              <p className="text-green-400 text-4xl font-bold mb-4">KSh 100</p>
              <p className="text-gray-400">24 hours access</p>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-green-500 scale-105">
              <h3 className="text-2xl font-bold mb-3">Weekly VIP</h3>
              <p className="text-green-400 text-4xl font-bold mb-4">KSh 500</p>
              <p className="text-gray-400">7 days access</p>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-2xl font-bold mb-3">Monthly VIP</h3>
              <p className="text-green-400 text-4xl font-bold mb-4">KSh 1500</p>
              <p className="text-gray-400">30 days access</p>
            </div>
          </div>

          <button className="bg-green-500 hover:bg-green-600 text-black px-10 py-4 rounded-2xl font-bold text-xl">
            Subscribe Now
          </button>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="px-8 py-16">
        <h2 className="text-4xl font-bold text-green-400 mb-10 text-center">
          Recent Results
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-zinc-900 rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-green-500 text-black">
                <th className="p-4 text-left">Match</th>
                <th className="p-4 text-left">Prediction</th>
                <th className="p-4 text-left">Result</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-zinc-800">
                <td className="p-4">Chelsea vs Tottenham</td>
                <td className="p-4">Over 2.5</td>
                <td className="p-4">3-1</td>
                <td className="p-4 text-green-400 font-bold">WON</td>
              </tr>

              <tr className="border-b border-zinc-800">
                <td className="p-4">PSG vs Lyon</td>
                <td className="p-4">BTTS</td>
                <td className="p-4">2-2</td>
                <td className="p-4 text-green-400 font-bold">WON</td>
              </tr>

              <tr>
                <td className="p-4">Juventus vs Milan</td>
                <td className="p-4">Correct Score 2-1</td>
                <td className="p-4">1-0</td>
                <td className="p-4 text-red-400 font-bold">LOST</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-16 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-400 mb-6">Join Our Community</h2>

          <p className="text-gray-300 mb-10 text-lg">
            Get daily football predictions directly on WhatsApp and Telegram.
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-2xl font-bold">
              WhatsApp Channel
            </button>

            <button className="border border-green-500 px-8 py-4 rounded-2xl hover:bg-green-500 hover:text-black">
              Telegram Group
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center text-gray-500">
        © 2026 Game Changer Predictions. All rights reserved.
      </footer>
    </div>
  );
}
