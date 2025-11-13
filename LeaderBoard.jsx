// import React, { useEffect, useState } from "react";
// import LeaderBoardPlayerCardTitle from "../components/LeaderBoardPlayerCardTitle.jsx";
// import LeaderBoardPlayerCard from "../components/LeaderBoardPlayerCard.jsx";
// import WinnerCard from "../components/WinnerCard.jsx";
// import avatar1 from "../assets/images/avatars/avatar1.jpg";
// import avatar2 from "../assets/images/avatars/avatar2.jpg";
// import avatar3 from "../assets/images/avatars/avatar3.jpg";
// import avatar4 from "../assets/images/avatars/avatar4.jpg";
// import axios from "axios";
// import ErrorDisplay from "../components/ErrorDisplay"; // ErrorDisplay import kiya

// function LeaderBoard() {
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchLeaderboard = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:8000/api/v1/contest-leaderboard");

//         // Raw leaderboard from backend
//         const rawData = response.data.message;

//         // Merge scores by user_id
//         const mergedData = Object.values(
//           rawData.reduce((acc, player) => {
//             if (!acc[player.user_id]) {
//               acc[player.user_id] = { ...player };
//             } else {
//               acc[player.user_id].total_score += player.total_score; // add score
//             }
//             return acc;
//           }, {})
//         );

//         // Sort by total_score descending
//         const sortedData = mergedData.sort((a, b) => b.total_score - a.total_score);

//         // Add rank property
//         sortedData.forEach((p, idx) => {
//           p.rank = idx + 1;
//         });

//         setLeaderboard(sortedData);
//       } catch (err) {
//         setError(err.message || "Failed to fetch leaderboard.");
//         console.error("Error fetching contest leaderboard:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLeaderboard();
//   }, []);

//   if (loading) {
//     return (
//       <div className="w-full max-w-[1920px] mx-auto pt-24 flex flex-col items-center bg-black min-h-screen text-white">
//         Loading Leaderboard...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full max-w-[1920px] mx-auto pt-24 flex flex-col items-center bg-black min-h-screen text-white p-4">
//         <ErrorDisplay message={error} onRetry={() => window.location.reload()} />
//       </div>
//     );
//   }

//   const topThree = leaderboard.slice(0, 3);
//   const otherPlayers = leaderboard.slice(3);

//   // avatars fallback
//   const avatars = {
//     first_winner: avatar1,
//     second_winner: avatar2,
//     third_winner: avatar3,
//   };

//   return (
//     <div className="w-full max-w-[1920px] mx-auto pt-24 flex flex-col items-center bg-black min-h-screen text-white font-sans relative overflow-hidden">
//       {/* Background Gradients/Effects */}
//       <div
//         className="absolute inset-0 z-0 opacity-20"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(147,112,219,0.1) 0%, rgba(0,0,0,0) 70%)",
//         }}
//       ></div>
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-5 filter blur-3xl"></div>
//       <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500 to-red-500 rounded-full opacity-5 filter blur-3xl"></div>

//       {/* Page Heading */}
//       <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10 mt-2 tracking-tightest drop-shadow-lg z-10">
//         Contest Leaderboard
//       </h1>

//       {/* Main Leaderboard Container */}
//       <div
//         className="
//           relative w-[70%] max-w-3xl mx-auto
//           bg-gradient-to-br from-neutral-800 to-neutral-950 rounded-3xl p-6 shadow-2xl border border-purple-900 z-10
//           flex flex-col items-center
//         "
//       >
//         {/* Top 3 Winners */}
//         <div className="w-full mb-8 relative">
//           <div className="absolute inset-0 z-20 w-full h-full bg-[rgba(0,0,0,0.4)] rounded-3xl" />

//           <div className="relative z-30 w-full flex items-end justify-center pt-8 pb-6">
//             <WinnerCard
//               winner1={topThree[0]?.name || "N/A"}
//               first_winner={topThree[0]?.avatar || avatar1}
//               first_winner_score={topThree[0]?.total_score || "0"}
//               winner2={topThree[1]?.name || "N/A"}
//               second_winner={topThree[1]?.avatar || avatar2}
//               second_winner_score={topThree[1]?.total_score || "0"}
//               winner3={topThree[2]?.name || "N/A"}
//               third_winner={topThree[2]?.avatar || avatar3}
//               third_winner_score={topThree[2]?.total_score || "0"}
//             />
//           </div>
//         </div>

//         {/* Divider Line */}
//         <div className="w-[95%] h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent my-10 relative z-10">
//           <div className="absolute inset-0 bg-purple-500 opacity-20 blur-sm"></div>
//         </div>

//         {/* Players List */}
//         <div className="w-full px-2 py-4 text-white flex flex-col gap-3">
//           <h3 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">
//             Top Players
//           </h3>

//           <LeaderBoardPlayerCardTitle />
//           {otherPlayers.map((player) => (
//             <LeaderBoardPlayerCard
//               key={player.user_id}
//               rank={`#${player.rank}`}
//               name={player.name}
//               scores={player.total_score}
//               avatar={player.avatar || avatar4}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeaderBoard;

// import React, { useEffect, useState } from "react";
// import LeaderBoardPlayerCardTitle from "../components/LeaderBoardPlayerCardTitle.jsx";
// import LeaderBoardPlayerCard from "../components/LeaderBoardPlayerCard.jsx";
// import WinnerCard from "../components/WinnerCard.jsx";
// import ErrorDisplay from "../components/ErrorDisplay";

// function LeaderBoard() {
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error] = useState(null);

//   useEffect(() => {

//     const mockData = [
//       {
//         user_id: 1,
//         name: "Alice Johnson",
//         total_score: 250,
//         avatar: "/22.jpg",
//       },
//       {
//         user_id: 2,
//         name: "Bob Smith",
//         total_score: 220,
//         avatar: "/2.j.jpg",
//       },
//       {
//         user_id: 3,
//         name: "Charlie Brown",
//         total_score: 200,
//         avatar: "https://i.pravatar.cc/150?img=3",
//       },
//       {
//         user_id: 4,
//         name: "David Lee",
//         total_score: 180,
//         avatar: "https://i.pravatar.cc/150?img=4",
//       },
//       {
//         user_id: 5,
//         name: "Eva Green",
//         total_score: 160,
//         avatar: "https://i.pravatar.cc/150?img=5",
//       },
//       {
//         user_id: 6,
//         name: "Frank Miller",
//         total_score: 140,
//         avatar: "https://i.pravatar.cc/150?img=6",
//       },
//       {
//         user_id: 7,
//         name: "Grace Hopper",
//         total_score: 120,
//         avatar: "https://i.pravatar.cc/150?img=7",
//       },
//       {
//         user_id: 8,
//         name: "Henry Ford",
//         total_score: 100,
//         avatar: "https://i.pravatar.cc/150?img=8",
//       },
//     ];

//     const sortedData = mockData.sort((a, b) => b.total_score - a.total_score);
//     sortedData.forEach((p, idx) => {
//       p.rank = idx + 1;
//     });

//     setLeaderboard(sortedData);
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return (
//       <div className="w-full max-w-[1920px] mx-auto pt-24 flex flex-col items-center bg-black min-h-screen text-white">
//         Loading Leaderboard...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full max-w-[1920px] mx-auto pt-24 flex flex-col items-center bg-black min-h-screen text-white p-4">
//         <ErrorDisplay message={error} onRetry={() => window.location.reload()} />
//       </div>
//     );
//   }

//   const topThree = leaderboard.slice(0, 3);
//   const otherPlayers = leaderboard.slice(3);

//   return (
//     <div className="w-full max-w-[1920px] mx-auto pt-24 flex flex-col items-center bg-black min-h-screen text-white font-sans relative overflow-hidden">

//       <div
//         className="absolute inset-0 z-0 opacity-20"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(147,112,219,0.1) 0%, rgba(0,0,0,0) 70%)",
//         }}
//       />
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-5 filter blur-3xl"></div>
//       <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500 to-red-500 rounded-full opacity-5 filter blur-3xl"></div>

//       <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10 mt-2 tracking-tightest drop-shadow-lg z-10">
//         Contest Leaderboard
//       </h1>

//       <div
//         className="
//           relative w-[70%] max-w-3xl mx-auto
//           bg-gradient-to-br from-neutral-800 to-neutral-950 rounded-3xl p-6 shadow-2xl border border-purple-900 z-10
//           flex flex-col items-center
//         "
//       >

//         <div className="w-full mb-8 relative">
//           <div className="absolute inset-0 z-20 w-full h-full bg-[rgba(0,0,0,0.4)] rounded-3xl" />
//           <div className="relative z-30 w-full flex items-end justify-center pt-8 pb-6">
//             <WinnerCard
//               winner1={topThree[0]?.name || "N/A"}
//               first_winner={topThree[0]?.avatar}
//               first_winner_score={topThree[0]?.total_score || "0"}
//               winner2={topThree[1]?.name || "N/A"}
//               second_winner={topThree[1]?.avatar}
//               second_winner_score={topThree[1]?.total_score || "0"}
//               winner3={topThree[2]?.name || "N/A"}
//               third_winner={topThree[2]?.avatar}
//               third_winner_score={topThree[2]?.total_score || "0"}
//             />
//           </div>
//         </div>

//         <div className="w-[95%] h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent my-10 relative z-10">
//           <div className="absolute inset-0 bg-purple-500 opacity-20 blur-sm"></div>
//         </div>

//         <div className="w-full px-2 py-4 text-white flex flex-col gap-3">
//           <h3 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">
//             Top Players
//           </h3>

//           <LeaderBoardPlayerCardTitle />
//           {otherPlayers.map((player) => (
//             <LeaderBoardPlayerCard
//               key={player.user_id}
//               rank={`#${player.rank}`}
//               name={player.name}
//               scores={player.total_score}
//               avatar={player.avatar}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeaderBoard;

// import React, { useEffect, useState } from "react";
// import LeaderBoardPlayerCardTitle from "../components/LeaderBoardPlayerCardTitle.jsx";
// import LeaderBoardPlayerCard from "../components/LeaderBoardPlayerCard.jsx";
// import WinnerCard from "../components/WinnerCard.jsx";
// import ErrorDisplay from "../components/ErrorDisplay";

// function LeaderBoard() {
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error] = useState(null);

//   useEffect(() => {
//     const mockData = [
//       { user_id: 1, name: "Alice Johnson", total_score: 250, avatar: "/22.jpg" },
//       { user_id: 2, name: "Bob Smith", total_score: 220, avatar: "/2.j.jpg" },
//       { user_id: 3, name: "Charlie Brown", total_score: 200, avatar: "https://i.pravatar.cc/150?img=3" },
//       { user_id: 4, name: "David Lee", total_score: 180, avatar: "https://i.pravatar.cc/150?img=4" },
//       { user_id: 5, name: "Eva Green", total_score: 160, avatar: "https://i.pravatar.cc/150?img=5" },
//       { user_id: 6, name: "Frank Miller", total_score: 140, avatar: "https://i.pravatar.cc/150?img=6" },
//       { user_id: 7, name: "Grace Hopper", total_score: 120, avatar: "https://i.pravatar.cc/150?img=7" },
//       { user_id: 8, name: "Henry Ford", total_score: 100, avatar: "https://i.pravatar.cc/150?img=8" },
//     ];

//     const sortedData = mockData.sort((a, b) => b.total_score - a.total_score);
//     sortedData.forEach((p, idx) => (p.rank = idx + 1));

//     setLeaderboard(sortedData);
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-white dark:from-black/90 dark:to-blue-950 text-sky-700 dark:text-blue-200 text-lg font-semibold">
//         Loading Leaderboard...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-white dark:from-black/90 dark:to-blue-950 text-sky-700 dark:text-blue-200 p-4">
//         <ErrorDisplay message={error} onRetry={() => window.location.reload()} />
//       </div>
//     );
//   }

//   const topThree = leaderboard.slice(0, 3);
//   const otherPlayers = leaderboard.slice(3);

//   return (
//     <div className="w-full max-w-[1920px] mx-auto pt-24 flex flex-col items-center
//       bg-gradient-to-b from-white via-sky-50 to-sky-100
//       dark:from-blue-950 dark:via-black/80 dark:to-black/90
//       min-h-screen text-sky-900 dark:text-blue-100 font-sans relative overflow-hidden transition-all duration-500">

//       {/* Decorative background glows */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-sky-300 dark:bg-blue-800 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

//       {/* Title */}
//       <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-700
//         dark:from-blue-400 dark:to-sky-300 mb-12 mt-4 tracking-tight drop-shadow-lg z-10 animate-fadeIn">
//         Contest Leaderboard
//       </h1>

//       {/* Main Leaderboard Card */}
//       <div className="
//         relative w-[85%] max-w-4xl mx-auto rounded-3xl
//         bg-gradient-to-br from-white to-sky-50
//         dark:from-blue-950 dark:to-black/60
//         shadow-2xl border border-sky-200 dark:border-blue-800
//         p-8 backdrop-blur-lg transition-all duration-300 hover:scale-[1.01]
//       ">
//         {/* Winner Podium Section */}
//         <div className="relative mb-10 z-20">
//           <div className="absolute inset-0 rounded-3xl bg-sky-100/40 dark:bg-black/30 backdrop-blur-sm"></div>
//           <div className="relative z-30 pt-6 pb-8 flex items-end justify-center">
//             <WinnerCard
//               winner1={topThree[0]?.name || "N/A"}
//               first_winner={topThree[0]?.avatar}
//               first_winner_score={topThree[0]?.total_score || "0"}
//               winner2={topThree[1]?.name || "N/A"}
//               second_winner={topThree[1]?.avatar}
//               second_winner_score={topThree[1]?.total_score || "0"}
//               winner3={topThree[2]?.name || "N/A"}
//               third_winner={topThree[2]?.avatar}
//               third_winner_score={topThree[2]?.total_score || "0"}
//             />
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent my-8">
//           <div className="absolute inset-0 bg-sky-300 dark:bg-blue-600 opacity-20 blur-sm"></div>
//         </div>

//         {/* Player List */}
//         <div className="w-full py-4 flex flex-col gap-3">
//           <h3 className="mb-4 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600
//             dark:from-blue-300 dark:to-sky-400">
//             Top Players
//           </h3>

//           <LeaderBoardPlayerCardTitle />
//           {otherPlayers.map((player) => (
//             <LeaderBoardPlayerCard
//               key={player.user_id}
//               rank={`#${player.rank}`}
//               name={player.name}
//               scores={player.total_score}
//               avatar={player.avatar}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeaderBoard;

// import React, { useEffect, useState } from "react";
// import LeaderBoardPlayerCardTitle from "../components/LeaderBoardPlayerCardTitle.jsx";
// import LeaderBoardPlayerCard from "../components/LeaderBoardPlayerCard.jsx";
// import ErrorDisplay from "../components/ErrorDisplay";

// function LeaderBoard() {
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error] = useState(null);

//   useEffect(() => {
//     const mockData = [
//       { user_id: 1, name: "Alice Johnson", total_score: 250, avatar: "https://i.pravatar.cc/150?img=1" },
//       { user_id: 2, name: "Bob Smith", total_score: 220, avatar: "https://i.pravatar.cc/150?img=2" },
//       { user_id: 3, name: "Charlie Brown", total_score: 200, avatar: "https://i.pravatar.cc/150?img=3" },
//       { user_id: 4, name: "David Lee", total_score: 180 },
//       { user_id: 5, name: "Eva Green", total_score: 160 },
//       { user_id: 6, name: "Frank Miller", total_score: 140 },
//       { user_id: 7, name: "Grace Hopper", total_score: 120 },
//       { user_id: 8, name: "Henry Ford", total_score: 100 },
//     ];

//     const sortedData = mockData.sort((a, b) => b.total_score - a.total_score);
//     sortedData.forEach((p, idx) => (p.rank = idx + 1));

//     setLeaderboard(sortedData);
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-white dark:from-black/90 dark:to-blue-950 text-sky-700 dark:text-blue-200 text-lg font-semibold">
//         Loading Leaderboard...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-white dark:from-black/90 dark:to-blue-950 text-sky-700 dark:text-blue-200 p-4">
//         <ErrorDisplay message={error} onRetry={() => window.location.reload()} />
//       </div>
//     );
//   }

//   const topThree = leaderboard.slice(0, 3);
//   const otherPlayers = leaderboard.slice(3);

//   return (
//     <div className="w-full max-w-[1920px] mx-auto pt-24 flex flex-col items-center
//       bg-gradient-to-b from-white via-sky-50 to-sky-100
//       dark:from-blue-950 dark:via-black/80 dark:to-black/90
//       min-h-screen text-sky-900 dark:text-blue-100 font-sans relative overflow-hidden transition-all duration-500">

//       <div className="absolute top-0 left-0 w-72 h-72 bg-sky-300 dark:bg-blue-800 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

//       <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-700
//         dark:from-blue-400 dark:to-sky-300 mb-12 mt-4 tracking-tight drop-shadow-lg z-10 animate-fadeIn">
//         Contest Leaderboard
//       </h1>

//       <div className="
//         relative w-[85%] max-w-4xl mx-auto rounded-3xl
//         bg-gradient-to-br from-white to-sky-50
//         dark:from-blue-950 dark:to-black/60
//         shadow-2xl border border-sky-500 dark:border-blue-800
//         p-8 backdrop-blur-lg transition-all duration-300 hover:scale-[1.01]
//       ">

//         <div className="relative mb-14 z-20 h-[380px] flex items-center justify-center">
//           <div className="absolute inset-0 rounded-3xl bg-sky-100/40 dark:bg-black/30 backdrop-blur-sm"></div>

//           <div className="relative z-30 flex items-end justify-between text-center w-full px-10 pb-6">

//             <div className="flex flex-col items-center transform translate-y-10">
//               <img
//                 src={topThree[1]?.avatar}
//                 alt={topThree[1]?.name}
//                 className="w-24 h-24 rounded-full border-4 border-sky-400 dark:border-blue-500 shadow-lg object-cover"
//               />
//               <p className="mt-4 font-semibold text-lg">{topThree[1]?.name}</p>
//               <div className="mt-2 px-4 py-1 border-2 border-sky-400 dark:border-blue-500 rounded-full text-sky-700 dark:text-blue-300 font-semibold text-sm bg-sky-100/60 dark:bg-blue-900/40 shadow-sm">
//                 {topThree[1]?.total_score} pts
//               </div>
//             </div>

//             <div className="flex flex-col items-center transform -translate-y-6">
//               <img
//                 src={topThree[0]?.avatar}
//                 alt={topThree[0]?.name}
//                 className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-xl object-cover"
//               />
//               <p className="mt-5 font-bold text-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
//                 {topThree[0]?.name}
//               </p>
//               <div className="mt-3 px-5 py-1.5 border-2 border-yellow-400 rounded-full text-yellow-600 font-bold text-base bg-yellow-100/50 dark:bg-yellow-900/40 shadow-md">
//                 {topThree[0]?.total_score} pts
//               </div>
//             </div>

//             <div className="flex flex-col items-center transform translate-y-14">
//               <img
//                 src={topThree[2]?.avatar}
//                 alt={topThree[2]?.name}
//                 className="w-24 h-24 rounded-full border-4 border-amber-600 dark:border-amber-500 shadow-lg object-cover"
//               />
//               <p className="mt-4 font-semibold text-lg">{topThree[2]?.name}</p>
//               <div className="mt-2 px-4 py-1 border-2 border-amber-200 dark:border-amber-500 rounded-full text-amber-700 dark:text-amber-400 font-semibold text-sm bg-amber-100/60 dark:bg-amber-900/40 shadow-sm">
//                 {topThree[2]?.total_score} pts
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent my-10">
//           <div className="absolute inset-0 bg-sky-300 dark:bg-blue-600 opacity-20 blur-sm"></div>
//         </div>

//         <div className="w-full py-4 flex flex-col gap-3">
//           <h3 className="mb-4 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600
//             dark:from-blue-300 dark:to-sky-400">
//             Top Players
//           </h3>

//           <LeaderBoardPlayerCardTitle />
//           {otherPlayers.map((player) => (
//             <LeaderBoardPlayerCard
//               key={player.user_id}
//               rank={`#${player.rank}`}
//               name={player.name}
//               scores={player.total_score}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeaderBoard;

import React, { useEffect, useState } from "react";
import LeaderBoardPlayerCardTitle from "../components/LeaderBoardPlayerCardTitle.jsx";
import LeaderBoardPlayerCard from "../components/LeaderBoardPlayerCard.jsx";
import ErrorDisplay from "../components/ErrorDisplay";

function LeaderBoard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    const mockData = [
      {
        user_id: 1,
        name: "Alice Johnson",
        total_score: 250,
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        user_id: 2,
        name: "Bob Smith",
        total_score: 220,
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      {
        user_id: 3,
        name: "Charlie Brown",
        total_score: 200,
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      {
        user_id: 4,
        name: "David Lee",
        total_score: 180,
        avatar: "https://i.pravatar.cc/150?img=4",
      },
      {
        user_id: 5,
        name: "Eva Green",
        total_score: 160,
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      {
        user_id: 6,
        name: "Frank Miller",
        total_score: 140,
        avatar: "https://i.pravatar.cc/150?img=6",
      },
      {
        user_id: 7,
        name: "Grace Hopper",
        total_score: 120,
        avatar: "https://i.pravatar.cc/150?img=7",
      },
      {
        user_id: 8,
        name: "Henry Ford",
        total_score: 100,
        avatar: "https://i.pravatar.cc/150?img=8",
      },
    ];

    const sortedData = mockData.sort((a, b) => b.total_score - a.total_score);
    sortedData.forEach((p, idx) => (p.rank = idx + 1));
    setLeaderboard(sortedData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black text-gray-700 dark:text-blue-200">
        Loading Leaderboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black text-gray-700 dark:text-blue-200">
        <ErrorDisplay
          message={error}
          onRetry={() => window.location.reload()}
        />
      </div>
    );
  }

  const topThree = leaderboard.slice(0, 3);
  const otherPlayers = leaderboard.slice(3);

  return (
    <div
      className="
      w-full max-w-[1920px] mx-auto pt-24 flex flex-col items-center
      bg-white dark:bg-black/90
      text-[#333333] dark:text-[#AEDDFF]
      min-h-screen
    "
    >
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-[#4AA8FF] dark:text-[#8CCBFF] mb-12 mt-4">
        Contest Leaderboard
      </h1>

      {/* Main box */}
      <div
        className="
        w-[85%] max-w-4xl mx-auto rounded-3xl 
        bg-[#E6F3FF] dark:bg-[#1A2A40] 
        shadow-xl border border-[#ADD8FF] 
        p-8
      "
      >
        {/* Top 3 */}
        <div className="w-full flex justify-around items-end mb-10">
          {/* Rank 2 */}
          <div className="flex flex-col items-center relative">
            <span className="absolute -top-3 bg-[#C0C0C0] text-black text-xs px-2 py-1 rounded-full shadow font-bold">
              # 2<sup>nd</sup> 
            </span>
            <img
              src={topThree[1].avatar}
              className="w-24 h-24 rounded-full border-4 border-[#ADD8FF]"
            />
            <p className="mt-3 font-semibold">{topThree[1].name}</p>
            <p className="text-sm mt-1">{topThree[1].total_score} pts</p>
          </div>

          {/* Rank 1 */}
          <div className="flex flex-col items-center relative -translate-y-4">
            <span className="absolute -top-4 bg-[#FFD700] text-black text-xs px-3 py-1 rounded-full shadow font-bold">
              # 1<sup>st</sup> 
            </span>
            <img
              src={topThree[0].avatar}
              className="w-28 h-28 rounded-full border-4 border-[#4AA8FF]"
            />
            <p className="mt-3 font-bold text-lg">{topThree[0].name}</p>
            <p className="text-base mt-1">{topThree[0].total_score} pts</p>
          </div>

          {/* Rank 3 */}
          <div className="flex flex-col items-center relative">
            <span className="absolute -top-3 bg-[#CD7F32] text-white text-xs px-2 py-1 rounded-full shadow">
              # 3<sup>rd</sup> 
            </span>
            <img
              src={topThree[2].avatar}
              className="w-24 h-24 rounded-full border-4 border-[#87BFFF]"
            />
            <p className="mt-3 font-semibold">{topThree[2].name}</p>
            <p className="text-sm mt-1">{topThree[2].total_score} pts</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#ADD8FF] my-6 opacity-60"></div>

        {/* Other Players */}
        <h3 className="text-3xl font-bold text-[#4AA8FF] dark:text-[#8CCBFF] mb-4">
          Top Players
        </h3>

        <LeaderBoardPlayerCardTitle />

        {otherPlayers.map((player) => (
          <LeaderBoardPlayerCard
            key={player.user_id}
            rank={`#${player.rank}`}
            name={player.name}
            scores={player.total_score}
            avatar={player.avatar} // ✅ avatar added
          />
        ))}
      </div>
    </div>
  );
}

export default LeaderBoard;
