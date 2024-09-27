export default function Navbar() {
  return (
    /* navbar container */
    <nav className="bg-white text-black flex sm:px-4 justify-between text-center gap-2 bg-clip-padding px-5 shadow ">
      {/* This is the Brand name  */}

      <a
        href="/"
        className="block cursor-pointer mt-4 mr-3 h-6 sm:h-6 py-7 px-4 text-xs uppercase leading-6 tracking-widest text-black hover:text-slate-400"
      >
        Raffinato Club{" "}
      </a>

      {/* Mobile Btn */}

      <button
        type="button"
        className="md:hidden ml-3 inline-flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Navbar Items */}
      <div className="hidden md:block md:w-auto">
        <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
          <li>
            <a
              href="/products"
              className="block cursor-pointer py-4 px-4 text-xs uppercase leading-6 tracking-widest text-black hover:text-slate-400"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/orders"
              className="block cursor-pointer py-4 px-4 text-xs uppercase leading-6 tracking-widest text-black hover:text-slate-400"
            >
              Contact US
            </a>
          </li>
          <li>
            <a
              href="/cart"
              className="block cursor-pointer py-4 px-4 text-xs uppercase leading-6 tracking-widest text-black hover:text-slate-400"
            >
              Bag
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden">
        <div className="space-y-1 px-2 pb-3">
          <a
            href="/products"
            className="text-black-400 uppercase block rounded-md px-3 py-2 font-medium"
          >
            Shop
          </a>

          <a
            href="/orders"
            className="text-black-400 uppercase block rounded-md px-3 py-2 font-medium"
          >
            Contact Us
          </a>

          <a
            href="/cart"
            className="text-black-400 uppercase block rounded-md px-3 py-2 font-medium"
          >
            Bag
          </a>
        </div>
      </div>
    </nav>
  );
}
