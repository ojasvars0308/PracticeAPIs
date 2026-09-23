import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      href: "#",
      active: true,
    },
    {
      name: "Students",
      href: "#students",
    },
    {
      name: "Courses",
      href: "#courses",
    },
    {
      name: "Reports",
      href: "#reports",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-16 items-center justify-between">

          {/* ========================================
              LOGO
          ======================================== */}

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 6h8"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h6"
                />
              </svg>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-bold tracking-tight text-slate-900">
                StudentHub
              </h1>

              <p className="text-xs text-slate-500">
                Student Management System
              </p>
            </div>

          </div>


          {/* ========================================
              DESKTOP NAVIGATION
          ======================================== */}

          <nav className="hidden items-center gap-1 md:flex">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  item.active
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.name}
              </a>
            ))}

          </nav>


          {/* ========================================
              RIGHT SIDE ACTIONS
          ======================================== */}

          <div className="hidden items-center gap-2 md:flex">

            {/* Search */}

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>


            {/* Notifications */}

            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Notifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 1-5.714 0A2.996 2.996 0 0 1 6 14.17V11a6 6 0 1 1 12 0v3.17a2.996 2.996 0 0 1-3.143 2.912Z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 20a2.25 2.25 0 0 0 4.5 0"
                />
              </svg>

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>


            {/* Divider */}

            <div className="mx-2 h-8 w-px bg-slate-200" />


            {/* User Profile */}

            <button
              type="button"
              className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition hover:bg-slate-100"
            >

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
                OV
              </div>

              <div className="hidden text-left lg:block">

                <p className="text-sm font-semibold text-slate-900">
                  Ojas Varshney
                </p>

                <p className="text-xs text-slate-500">
                  Administrator
                </p>

              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-4 w-4 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19 9-7 7-7-7"
                />
              </svg>

            </button>

          </div>


          {/* ========================================
              MOBILE MENU BUTTON
          ======================================== */}

          <button
            type="button"
            onClick={() =>
              setIsMenuOpen(!isMenuOpen)
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >

            {isMenuOpen ? (

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>

            ) : (

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

            )}

          </button>

        </div>


        {/* ========================================
            MOBILE NAVIGATION
        ======================================== */}

        {isMenuOpen && (

          <div className="border-t border-slate-200 py-4 md:hidden">

            <nav className="space-y-1">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() =>
                    setIsMenuOpen(false)
                  }
                  className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                    item.active
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </a>
              ))}

            </nav>


            {/* Mobile User Profile */}

            <div className="mt-4 flex items-center gap-3 border-t border-slate-200 pt-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
                OV
              </div>

              <div>

                <p className="text-sm font-semibold text-slate-900">
                  Ojas Varshney
                </p>

                <p className="text-xs text-slate-500">
                  Administrator
                </p>

              </div>

            </div>

          </div>

        )}

      </div>

    </header>
  );
}

export default Navbar;