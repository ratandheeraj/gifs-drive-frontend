import React from "react"

function Header() {
  return (
    <nav
    class="w-full bg-slate-800 flex items-center justify-between py-2 px-8"
  >
    <div>
      <h1 class="text-3xl text-white">
        <a href="#">Gifs Drive</a>
      </h1>
    </div>
    <div class="flex gap-4 text-white text-lg">
      <a href="./login.html">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </a>
    </div>
  </nav>
  )
}

export default Header
