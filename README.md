<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SharperOdds | Data-Driven Sports Picks</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-900 text-gray-100 font-sans min-h-screen">

    <nav class="bg-gray-800 border-b border-gray-700 p-4">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold text-emerald-400 tracking-wide">SHARPERODDS</h1>
            <div id="auth-buttons">
                <button onclick="toggleModal(true)" class="px-4 py-2 text-sm font-medium hover:text-emerald-400 transition cursor-pointer">Login / Register</button>
            </div>
        </div>
    </nav>

    <main class="max-w-6xl mx-auto px-4 py-12">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-extrabold mb-3">Today's Data-Driven Betting Odds</h2>
            <p class="text-gray-400">Proprietary mathematical models for maximum edge.</p>
        </div>

        <div id="odds-container" class="grid md:grid-cols-2 gap-6">
            <p class="text-gray-500 col-span-2 text-center py-8">Loading available picks...</p>
        </div>
    </main>

    <div id="auth-modal" class="hidden fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
        <div class="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-md w-full relative">
            <button onclick="toggleModal(false)" class="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer">&times;</button>
            <h3 id="modal-title" class="text-xl font-bold mb-4">Create Your Account</h3>
            
            <form id="auth-form" class="space-y-4">
                <div>
                    <label class="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Email Address</label>
                    <input type="email" id="auth-email" required class="w-full bg-gray-900 border border-gray-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-400">
                </div>
                <div>
                    <label class="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Password</label>
                    <input type="password" id="auth-password" required class="w-full bg-gray-900 border border-gray-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-400">
                </div>
                <button type="submit" id="submit-btn" class="w-full bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold py-2.5 rounded-lg transition cursor-pointer">Sign Up</button>
            </form>
            
            <div class="mt-4 text-center text-sm">
                <button id="switch-mode-btn" onclick="switchAuthMode()" class="text-emerald-400 hover:underline cursor-pointer">Already have an account? Log In</button>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

    <script>
        // CONFIGURATION: Connects your site to your backend database
        const SUPABASE_URL = 'YOUR_SUPABASE_URL';
        const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
        const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        let isLoginMode = false; // Tracks if user is trying to login or register

        // Initialize App
        window.addEventListener('DOMContentLoaded', () => {
            checkUserStatus();
            loadPicks();
        });

        // Toggle Auth Modal Visibility
        function toggleModal(show) {
            document.getElementById('auth-modal').classList.toggle('hidden', !show);
        }

        // Switch between Registration and Login layouts inside the modal
        function switchAuthMode() {
            isLoginMode = !isLoginMode;
            document.getElementById('modal-title').innerText = isLoginMode ? 'Welcome Back' : 'Create Your Account';
            document.getElementById('submit-btn').innerText = isLoginMode ? 'Log In' : 'Sign Up';
            document.getElementById('switch-mode-btn').innerText = isLoginMode ? "Don't have an account? Sign Up" : "Already have an account? Log In";
        }

        // Check if a user is currently logged into the session
        async function checkUserStatus() {
            const { data: { user } } = await supabase.auth.getUser();
            const authContainer = document.getElementById('auth-buttons');
            
            if (user) {
                authContainer.innerHTML = `
                    <span class="text-sm text-emerald-400 mr-4 font-medium">${user.email}</span>
                    <button onclick="handleLogout()" class="bg-gray-700 hover:bg-gray-600 px-4 py-1.5 rounded-lg text-sm font-semibold transition cursor-pointer">Logout</button>
                `;
            } else {
                authContainer.innerHTML = `<button onclick="toggleModal(true)" class="px-4 py-2 text-sm font-medium hover:text-emerald-400 transition cursor-pointer">Login / Register</button>`;
            }
        }

        // Fetch picks from Supabase and render cards to the DOM
        async function loadPicks() {
            const { data: picks, error } = await supabase.from('picks').select('*').order('created_at', { ascending: false });
            const container = document.getElementById('odds-container');
            
            if (error || !picks) {
                container.innerHTML = `<p class="text-red-400 col-span-2 text-center">Failed to load data. Please check connection.</p>`;
                return;
            }

            container.innerHTML = picks.map(pick => {
                if (pick.is_premium) {
                    // Render Locked Premium Card Template
                    return `
                    <div class="bg-gray-800 border border-gray-700 rounded-xl p-6 relative overflow-hidden shadow-xl min-h-[200px] flex flex-col justify-between">
                        <div class="absolute inset-0 bg-gray-900/40 backdrop-blur-md flex flex-col justify-center items-center p-6 text-center z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-emerald-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <h4 class="text-md font-bold text-white">${pick.sport}: ${pick.matchup}</h4>
                            <p class="text-xs text-gray-400 mt-1 mb-3">Premium Unlock Required</p>
                            <button class="bg-emerald-500 hover:bg-emerald-600 text-gray-950 px-4 py-1.5 rounded-lg text-xs font-bold shadow-md transition cursor-pointer">
                                Unlock for $19/mo
                            </button>
                        </div>
                        <div class="opacity-10 select-none pointer-events-none">
                            <span class="text-xs font-semibold uppercase tracking-wider">${pick.sport}</span>
                            <h3 class="text-xl font-bold my-2">${pick.matchup}</h3>
                            <p class="text-emerald-400 font-bold">LOCKED DATA</p>
                        </div>
                    </div>`;
                } else {
                    // Render Free Unlocked Card Template
                    return `
                    <div class="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-xl border-t-4 border-t-emerald-500">
                        <div class="flex justify-between items-center mb-4">
                            <span class="bg-gray-700 text-gray-300 text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">${pick.sport}</span>
                            <span class="text-xs text-emerald-400 font-bold uppercase">Free Access</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">${pick.matchup}</h3>
                        <div class="bg-gray-900/60 p-4 rounded-lg my-3 border border-gray-700/50">
                            <p class="text-xs text-gray-400 uppercase tracking-wider">Model Pick</p>
                            <p class="text-lg font-bold text-emerald-400">${pick.pick_value}</p>
                        </div>
                        <p class="text-sm text-gray-400">${pick.analysis || 'No further analysis provided for this pick.'}</p>
                    </div>`;
                }
            }).join('');
        }

        // Handle Signup and Login form submissions
        document.getElementById('auth-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('auth-email').value;
            const password = document.getElementById('auth-password').value;
            
            let result;
            if (isLoginMode) {
                result = await supabase.auth.signInWithPassword({ email, password });
            } else {
                result = await supabase.auth.signUp({ email, password });
            }

            if (result.error) {
                alert(result.error.message);
            } else {
                alert(isLoginMode ? "Successfully logged in!" : "Signup successful! Check your email to confirm registration.");
                toggleModal(false);
                checkUserStatus();
            }
        });

        // Handle Logout action
        async function handleLogout() {
            await supabase.auth.signOut();
            checkUserStatus();
        }
    </script>
</body>
</html>
# Game Ch
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
- [ ] Payment i
