// import Image from 'next/image';

// export default function Header() {
//   return (
//     <header className="bg-white border-b border-gray-300 px-4 md:px-8 py-2 overflow-hidden">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Left Side - Logo */}
//         <div className="flex items-center">
//           <Image
//             src="/images/header.png" 
//             alt="Logo"
//             width={40}
//             height={40}
//             className="rounded-full"
//           />
//         </div>

//         {/* Center - Skip to main content */}
//         <div className="hidden sm:block">
//           <a
//             href="#main-content"
//             className="text-xs md:text-sm  text-black hover:text-gray-800 focus:text-gray-800"
//           >
//             Skip to main content
//           </a>
//         </div>

//         {/* Right Side - Links */}
//         <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-black">
//           <a
//             href="#"
//             className="hover:text-gray-800 focus:text-gray-800 transition"
//           >
//             Find a Store
//           </a>
//           <span className="hidden sm:block">|</span>
//           <a
//             href="#"
//             className="hover:text-gray-800 focus:text-gray-800 transition"
//           >
//             Help
//           </a>
//           <span className="hidden sm:block">|</span>
//           <a
//             href="#"
//             className="hover:text-gray-800 focus:text-gray-800 transition"
//           >
//             Join Us
//           </a>
//           <span className="hidden sm:block">|</span>
//           <a
//             href="#"
//             className="hover:text-gray-800 focus:text-gray-800 transition"
//           >
//             Sign In
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }