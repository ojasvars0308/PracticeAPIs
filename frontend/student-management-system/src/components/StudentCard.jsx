function StudentCard() {
  // ============================================
  // STATIC STUDENT DATA
  // ============================================

  const student = {
    name: "Ojas Varshney",
    age: 25,
    email: "ojas.varshney@example.com",
    course: "MERN Stack Development",

    address: {
      city: "Greater Noida",
      state: "Uttar Pradesh",
      country: "India",
    },

    academicRating: 4.7,

    status: "Active",

    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  };

  return (
    <article className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* ============================================
          COVER / HEADER
      ============================================ */}

      <div className="relative h-28 bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600">

        {/* Status Badge */}

        <div className="absolute right-4 top-4">

          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-emerald-600 shadow-sm">

            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

            {student.status}

          </span>

        </div>

      </div>


      {/* ============================================
          PROFILE IMAGE
      ============================================ */}

      <div className="relative px-6">

        <div className="-mt-14 h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-lg">

          <img
            src={student.image}
            alt={`${student.name} profile`}
            className="h-full w-full object-cover"
          />

        </div>

      </div>


      {/* ============================================
          STUDENT INFORMATION
      ============================================ */}

      <div className="px-6 pb-6 pt-4">

        {/* Name */}

        <div className="flex items-start justify-between gap-4">

          <div>

            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              {student.name}
            </h2>

            <p className="mt-1 text-sm font-medium text-indigo-600">
              {student.course}
            </p>

          </div>


          {/* Student ID Placeholder */}

          <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
            STU-001
          </span>

        </div>


        {/* ============================================
            BASIC INFORMATION
        ============================================ */}

        <div className="mt-6 space-y-3">

          {/* Age */}

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">

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
                  d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                />
              </svg>

            </div>

            <div>

              <p className="text-xs font-medium text-slate-400">
                Age
              </p>

              <p className="text-sm font-medium text-slate-700">
                {student.age} years
              </p>

            </div>

          </div>


          {/* Email */}

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">

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
                  d="M3 7.5 12 13l9-5.5"
                />

                <rect
                  width="18"
                  height="13.5"
                  x="3"
                  y="5.25"
                  rx="2"
                />
              </svg>

            </div>

            <div className="min-w-0">

              <p className="text-xs font-medium text-slate-400">
                Email
              </p>

              <p className="truncate text-sm font-medium text-slate-700">
                {student.email}
              </p>

            </div>

          </div>


          {/* Address */}

          <div className="flex items-start gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">

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
                  d="M12 21s7-5.686 7-12a7 7 0 1 0-14 0c0 6.314 7 12 7 12Z"
                />

                <circle
                  cx="12"
                  cy="9"
                  r="2.25"
                />
              </svg>

            </div>

            <div>

              <p className="text-xs font-medium text-slate-400">
                Address
              </p>

              <p className="text-sm font-medium text-slate-700">
                {student.address.city},{" "}
                {student.address.state}
              </p>

              <p className="text-xs text-slate-500">
                {student.address.country}
              </p>

            </div>

          </div>

        </div>


        {/* ============================================
            DIVIDER
        ============================================ */}

        <div className="my-6 border-t border-slate-100"></div>


        {/* ============================================
            ACADEMIC RATING
        ============================================ */}

        <div>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-semibold text-slate-900">
                Academic Rating
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Overall academic performance
              </p>

            </div>


            <div className="flex items-center gap-1.5">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-amber-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.312 2.306-1.312 2.754 0l.569 1.664a2.75 2.75 0 0 0 2.61 1.856h1.759c1.386 0 1.963 1.777.841 2.601l-1.423 1.035a2.75 2.75 0 0 0-.999 3.077l.546 1.686c.444 1.372-1.13 2.507-2.237 1.686l-1.48-1.068a2.75 2.75 0 0 0-3.254 0l-1.48 1.068c-1.107.821-2.681-.314-2.237-1.686l.546-1.686a2.75 2.75 0 0 0-.999-3.077L4.5 9.331c-1.122-.824-.545-2.601.841-2.601H7.1a2.75 2.75 0 0 0 2.61-1.856l.569-1.664Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-lg font-bold text-slate-900">
                {student.academicRating}
              </span>

              <span className="text-xs text-slate-400">
                / 5.0
              </span>

            </div>

          </div>


          {/* Rating Progress */}

          <div className="mt-3">

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">

              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                style={{
                  width: `${(student.academicRating / 5) * 100}%`,
                }}
              ></div>

            </div>

          </div>

        </div>


        {/* ============================================
            ACTION BUTTONS
        ============================================ */}

        <div className="mt-6 grid grid-cols-2 gap-3">

          <button
            type="button"
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
          >
            View Profile
          </button>

          <button
            type="button"
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.98]"
          >
            Edit Student
          </button>

        </div>

      </div>

    </article>
  );
}

export default StudentCard;