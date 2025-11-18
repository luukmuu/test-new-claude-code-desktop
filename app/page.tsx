export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-zinc-200/50 dark:border-zinc-800/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Stray Dog
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
              About
            </a>
            <a href="#directory" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
              Directory
            </a>
            <a href="#contact" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
              Contact
            </a>
          </div>
          <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium rounded-full hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full mb-4">
              Welcome to Stray Dog Directory
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100">
                Your Modern
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Web Directory
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Discover, explore, and connect with amazing resources. Built with modern technology for a seamless experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                Explore Directory
              </button>
              <button className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold rounded-full border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-24">
            {/* Feature Card 1 */}
            <div className="group relative p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center text-white text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
                Fast & Modern
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Built with Next.js and React for lightning-fast performance and smooth user experience.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center text-white text-2xl">
                ✨
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
                Clean Design
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Minimalist and intuitive interface that puts your content first with beautiful aesthetics.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl mb-6 flex items-center justify-center text-white text-2xl">
                📱
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
                Fully Responsive
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Perfect experience on any device, from mobile phones to desktop computers.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-24 p-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Resources Listed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50K+</div>
                <div className="text-blue-100">Monthly Visits</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  Stray Dog
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-md">
                Your modern web directory built with Next.js, React, and Tailwind CSS. Making web navigation simple and beautiful.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Links</h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Directory</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Social</h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
            © 2026 Stray Dog Directory. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
