import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, Users, Swords, ShoppingBag, Bell, Settings, 
  ChevronRight, Trophy, Activity, Flame, Target, Star
} from 'lucide-react';

// Mock Data
const PLAYERS = [
  { id: 1, name: "Mbappé", ovr: 94, pos: "ST", isGold: true, img: "https://picsum.photos/seed/mbappe/100/150", stats: { pac: 97, sho: 90, pas: 80, dri: 92, def: 36, phy: 78, goals: 142, assists: 56, matches: 120 } },
  { id: 2, name: "Vinícius", ovr: 92, pos: "LW", isGold: true, img: "https://picsum.photos/seed/vini/100/150", stats: { pac: 95, sho: 84, pas: 81, dri: 90, def: 29, phy: 68, goals: 89, assists: 72, matches: 115 } },
  { id: 3, name: "Saka", ovr: 89, pos: "RW", isGold: false, img: "https://picsum.photos/seed/saka/100/150", stats: { pac: 87, sho: 82, pas: 80, dri: 88, def: 65, phy: 73, goals: 45, assists: 60, matches: 98 } },
  { id: 4, name: "Bellingham", ovr: 91, pos: "CM", isGold: true, img: "https://picsum.photos/seed/jude/100/150", stats: { pac: 82, sho: 84, pas: 85, dri: 88, def: 78, phy: 82, goals: 34, assists: 41, matches: 105 } },
  { id: 5, name: "Rodri", ovr: 92, pos: "CDM", isGold: true, img: "https://picsum.photos/seed/rodri/100/150", stats: { pac: 58, sho: 73, pas: 86, dri: 79, def: 85, phy: 84, goals: 12, assists: 28, matches: 130 } },
  { id: 6, name: "Pedri", ovr: 88, pos: "CM", isGold: false, img: "https://picsum.photos/seed/pedri/100/150", stats: { pac: 78, sho: 68, pas: 88, dri: 88, def: 68, phy: 64, goals: 15, assists: 45, matches: 92 } },
  { id: 7, name: "Davies", ovr: 87, pos: "LB", isGold: false, img: "https://picsum.photos/seed/davies/100/150", stats: { pac: 95, sho: 68, pas: 77, dri: 84, def: 76, phy: 77, goals: 8, assists: 32, matches: 110 } },
  { id: 8, name: "Dias", ovr: 90, pos: "CB", isGold: true, img: "https://picsum.photos/seed/dias/100/150", stats: { pac: 62, sho: 39, pas: 68, dri: 60, def: 89, phy: 87, goals: 5, assists: 4, matches: 125 } },
  { id: 9, name: "Saliba", ovr: 88, pos: "CB", isGold: false, img: "https://picsum.photos/seed/saliba/100/150", stats: { pac: 82, sho: 35, pas: 65, dri: 68, def: 88, phy: 82, goals: 3, assists: 2, matches: 85 } },
  { id: 10, name: "Hakimi", ovr: 87, pos: "RB", isGold: false, img: "https://picsum.photos/seed/hakimi/100/150", stats: { pac: 92, sho: 75, pas: 79, dri: 80, def: 75, phy: 78, goals: 14, assists: 29, matches: 102 } },
  { id: 11, name: "Alisson", ovr: 90, pos: "GK", isGold: true, img: "https://picsum.photos/seed/alisson/100/150", stats: { pac: 86, sho: 85, pas: 85, dri: 89, def: 54, phy: 90, goals: 0, assists: 1, matches: 140 } },
];

const PlayerCard = ({ name, ovr, pos, img, isGold = false, onClick }: any) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative w-16 h-24 rounded-xl flex flex-col items-center justify-end pb-1 overflow-hidden cursor-pointer ${isGold ? 'player-card-gold' : 'player-card-bg'}`}
  >
    <div className="absolute top-1 left-1 flex flex-col items-center z-10 text-white">
      <span className="text-[10px] font-bold leading-none">{ovr}</span>
      <span className="text-[8px] opacity-80 leading-none">{pos}</span>
    </div>
    <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity" referrerPolicy="no-referrer" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    <span className="text-[9px] font-bold z-10 truncate w-full text-center px-1 uppercase tracking-tighter text-white">{name}</span>
  </motion.div>
);

const HomeTab = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-5 pb-32 pt-2 px-6 h-full overflow-y-auto no-scrollbar"
    >
      {/* Hero / Play Now */}
      <motion.div 
        whileTap={{ scale: 0.98 }}
        className="floating-card p-5 relative overflow-hidden group cursor-pointer text-[#0f172a]"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-[#0f172a] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">Season 4</span>
            <span className="text-[10px] font-mono text-slate-500 font-bold">ENDS IN 12D</span>
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-1">Division Rivals</h2>
          <p className="text-sm text-slate-500 font-medium mb-4">Rank: <span className="text-[#0f172a] font-bold">Elite III</span></p>
          <button className="bg-[#0f172a] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
            Play Now <ChevronRight size={16} />
          </button>
        </div>
        <img src="https://picsum.photos/seed/stadium/800/600" className="absolute right-[-40px] bottom-[-40px] w-48 h-48 object-cover opacity-20 group-hover:scale-110 transition-transform duration-700 rounded-full mix-blend-multiply" referrerPolicy="no-referrer" />
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="floating-card p-5 flex flex-col gap-2 text-[#0f172a]">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
            <Activity size={20} />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Win Rate</p>
            <p className="text-2xl font-black">68.4%</p>
          </div>
        </div>
        <div className="floating-card p-5 flex flex-col gap-2 text-[#0f172a]">
          <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shadow-inner">
            <Flame size={20} />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Win Streak</p>
            <p className="text-2xl font-black">5</p>
          </div>
        </div>
      </div>

      {/* Live Events */}
      <div>
        <div className="flex items-center justify-between mb-3 px-2">
          <h3 className="text-lg font-black uppercase tracking-tight text-white">Live Events</h3>
          <span className="text-xs text-blue-300 font-bold cursor-pointer">VIEW ALL</span>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 px-2 -mx-2">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              whileTap={{ scale: 0.95 }}
              className="floating-card min-w-[220px] h-32 relative overflow-hidden flex-shrink-0 cursor-pointer"
            >
              <img src={`https://picsum.photos/seed/event${i}/400/200`} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-[#0f172a]">
                <p className="text-[10px] font-bold text-blue-600 mb-0.5 uppercase tracking-wider">TOTW {i+12}</p>
                <p className="text-sm font-black leading-tight uppercase">Challenge Team of the Week</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SquadTab = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col h-full pb-32 px-6 relative"
    >
      <div className="floating-card p-5 mb-5 text-[#0f172a] flex justify-between items-center">
        <div>
          <h2 className="text-xl font-black uppercase tracking-tight leading-none">Active Squad</h2>
          <p className="text-xs text-slate-500 font-medium mt-1">4-3-3 Attack</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-[#0f172a] leading-none">91</div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Team OVR</p>
        </div>
      </div>

      <div className="flex-1 relative rounded-[32px] overflow-hidden pitch-bg shadow-[0_12px_36px_-12px_rgba(15,23,42,0.4)] border-4 border-white mb-4">
        <div className="pitch-lines" />
        <div className="pitch-center-circle" />
        <div className="pitch-center-line" />
        <div className="pitch-penalty-area-top" />
        <div className="pitch-penalty-area-bottom" />
        
        {/* Formation 4-3-3 */}
        <div className="absolute inset-0 flex flex-col justify-around py-6">
          {/* Attackers */}
          <div className="flex justify-center gap-6">
            <PlayerCard {...PLAYERS[1]} onClick={() => setSelectedPlayer(PLAYERS[1])} />
            <PlayerCard {...PLAYERS[0]} onClick={() => setSelectedPlayer(PLAYERS[0])} />
            <PlayerCard {...PLAYERS[2]} onClick={() => setSelectedPlayer(PLAYERS[2])} />
          </div>
          {/* Midfielders */}
          <div className="flex justify-center gap-4">
            <PlayerCard {...PLAYERS[5]} onClick={() => setSelectedPlayer(PLAYERS[5])} />
            <PlayerCard {...PLAYERS[4]} onClick={() => setSelectedPlayer(PLAYERS[4])} />
            <PlayerCard {...PLAYERS[3]} onClick={() => setSelectedPlayer(PLAYERS[3])} />
          </div>
          {/* Defenders */}
          <div className="flex justify-center gap-2">
            <PlayerCard {...PLAYERS[6]} onClick={() => setSelectedPlayer(PLAYERS[6])} />
            <PlayerCard {...PLAYERS[8]} onClick={() => setSelectedPlayer(PLAYERS[8])} />
            <PlayerCard {...PLAYERS[7]} onClick={() => setSelectedPlayer(PLAYERS[7])} />
            <PlayerCard {...PLAYERS[9]} onClick={() => setSelectedPlayer(PLAYERS[9])} />
          </div>
          {/* Goalkeeper */}
          <div className="flex justify-center">
            <PlayerCard {...PLAYERS[10]} onClick={() => setSelectedPlayer(PLAYERS[10])} />
          </div>
        </div>
      </div>
      
      <div className="flex gap-3">
        <button className="flex-1 floating-card py-3.5 font-bold text-sm uppercase tracking-wider text-[#0f172a] hover:bg-slate-50 transition-colors">Auto Build</button>
        <button className="flex-1 bg-[#0f172a] text-white py-3.5 rounded-3xl font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-slate-800 transition-colors">Tactics</button>
      </div>

      <AnimatePresence>
        {selectedPlayer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-[#0f172a]/60 backdrop-blur-md"
            onClick={() => setSelectedPlayer(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-sm rounded-[32px] p-6 bg-white text-[#0f172a] shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-5">
                <div className={`w-28 h-40 rounded-2xl overflow-hidden relative flex-shrink-0 shadow-lg ${selectedPlayer.isGold ? 'player-card-gold' : 'player-card-bg'}`}>
                  <img src={selectedPlayer.img} className="w-full h-full object-cover opacity-90 mix-blend-luminosity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-5xl font-black leading-none">{selectedPlayer.ovr}</span>
                    <span className="text-xl font-bold text-slate-400 leading-none pb-1">{selectedPlayer.pos}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{selectedPlayer.name}</h3>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-slate-50 rounded-xl p-2 text-center border border-slate-100">
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Matches</div>
                      <div className="font-mono font-bold text-sm">{selectedPlayer.stats.matches}</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2 text-center border border-slate-100">
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Goals</div>
                      <div className="font-mono font-bold text-blue-600 text-sm">{selectedPlayer.stats.goals}</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2 text-center border border-slate-100">
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Assists</div>
                      <div className="font-mono font-bold text-blue-600 text-sm">{selectedPlayer.stats.assists}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4">
                {['pac', 'sho', 'pas', 'dri', 'def', 'phy'].map((attr) => {
                  const val = selectedPlayer.stats[attr];
                  const percentage = Math.min(100, Math.max(0, val));
                  const colorClass = val >= 90 ? 'bg-[#0f172a]' : val >= 80 ? 'bg-slate-600' : val >= 70 ? 'bg-slate-400' : 'bg-slate-300';
                  
                  return (
                    <div key={attr} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400 uppercase">{attr}</span>
                        <span className="font-mono font-bold text-sm">{val}</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                          className={`h-full rounded-full ${colorClass}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <button 
                className="w-full mt-8 bg-[#0f172a] text-white hover:bg-slate-800 py-4 rounded-2xl font-bold uppercase tracking-wider transition-colors shadow-lg"
                onClick={() => setSelectedPlayer(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MatchesTab = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col gap-5 pb-32 pt-2 px-6 h-full overflow-y-auto no-scrollbar"
    >
      <h2 className="text-xl font-black uppercase tracking-tight text-white ml-2">Tournaments</h2>
      
      <div className="space-y-4">
        {[
          { name: "Weekend League", status: "Active", time: "Ends in 2d 14h", icon: Trophy, color: "text-indigo-600", bg: "bg-indigo-50" },
          { name: "Draft Mode", status: "Available", time: "Entry: 15k Coins", icon: Target, color: "text-blue-600", bg: "bg-blue-50" },
          { name: "Friendly Seasons", status: "Available", time: "Play with friends", icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
        ].map((mode, i) => (
          <motion.div 
            key={i}
            whileTap={{ scale: 0.98 }}
            className="floating-card p-5 text-[#0f172a] flex items-center justify-between cursor-pointer"
          >
            <div>
              <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md mb-2 inline-block">
                {mode.status}
              </span>
              <h3 className="text-lg font-black uppercase">{mode.name}</h3>
              <p className="text-xs font-medium text-slate-500">{mode.time}</p>
            </div>
            <div className={`w-14 h-14 rounded-full ${mode.bg} ${mode.color} flex items-center justify-center shadow-inner`}>
              <mode.icon size={28} />
            </div>
          </motion.div>
        ))}
      </div>
      
      <h2 className="text-xl font-black uppercase tracking-tight text-white ml-2 mt-2">Recent Matches</h2>
      <div className="space-y-3">
        {[
          { opp: "FC Bayern", res: "W", score: "3 - 1", time: "2h ago" },
          { opp: "Real Madrid", res: "L", score: "1 - 2", time: "5h ago" },
          { opp: "Arsenal", res: "D", score: "2 - 2", time: "1d ago" },
        ].map((match, i) => (
          <div key={i} className="floating-card p-4 flex items-center justify-between text-[#0f172a]">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-inner ${match.res === 'W' ? 'bg-green-50 text-green-600' : match.res === 'L' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-600'}`}>
                {match.res}
              </div>
              <div>
                <p className="font-bold text-sm">{match.opp}</p>
                <p className="text-[10px] text-slate-400 font-medium">{match.time}</p>
              </div>
            </div>
            <div className="font-mono font-black text-lg">{match.score}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const StoreTab = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-5 pb-32 pt-2 px-6 h-full overflow-y-auto no-scrollbar"
    >
      <div className="floating-card p-4 flex justify-between items-center text-[#0f172a]">
        <h2 className="text-xl font-black uppercase tracking-tight ml-2">Store</h2>
        <div className="flex gap-3">
          <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
            <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm" />
            <span className="font-mono text-sm font-bold">12.5k</span>
          </div>
        </div>
      </div>

      {/* Featured Pack */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="floating-card p-6 text-center text-[#0f172a] relative overflow-hidden cursor-pointer"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600" />
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-50" />
        
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-32 h-40 player-card-gold rounded-2xl mx-auto mb-6 shadow-[0_10px_30px_rgba(245,158,11,0.3)] flex items-center justify-center relative z-10"
        >
          <Star size={48} className="text-yellow-400 opacity-80" />
        </motion.div>
        
        <h3 className="text-2xl font-black uppercase tracking-widest mt-2">Jumbo Rare</h3>
        <p className="text-sm text-slate-500 font-medium mb-6">Contains 24 Gold Items, all Rare</p>
        
        <button className="bg-[#0f172a] text-white w-full py-3.5 rounded-2xl font-bold uppercase tracking-wider shadow-lg hover:bg-slate-800 transition-colors flex justify-center items-center gap-2">
          Buy Pack <div className="w-2 h-2 rounded-full bg-yellow-400 ml-1" />
        </button>
      </motion.div>

      {/* Other Packs */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: "Premium Gold", price: "7.5k", color: "bg-yellow-50 text-yellow-800 border-yellow-100" },
          { name: "Silver Promo", price: "3.5k", color: "bg-slate-50 text-slate-800 border-slate-200" },
          { name: "Consumables", price: "5k", color: "bg-blue-50 text-blue-800 border-blue-100" },
          { name: "Cosmetics", price: "2k", color: "bg-purple-50 text-purple-800 border-purple-100" },
        ].map((pack, i) => (
          <div key={i} className={`floating-card p-4 flex flex-col justify-between h-32 ${pack.color}`}>
            <h4 className="font-bold uppercase text-sm">{pack.name}</h4>
            <div className="flex items-center justify-between bg-white/50 backdrop-blur-sm px-3 py-2 rounded-xl">
              <span className="font-bold text-sm">{pack.price}</span>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-sm" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: Home },
    { id: 'squad', icon: Users },
    { id: 'matches', icon: Swords },
    { id: 'store', icon: ShoppingBag },
  ];

  return (
    <div className="w-full h-screen max-w-md mx-auto bg-[#0f172a] text-white relative overflow-hidden font-sans flex flex-col shadow-2xl sm:rounded-[40px] sm:h-[90vh] sm:my-[5vh] border-[8px] border-[#1e293b]">
      {/* Top Bar */}
      <header className="px-6 py-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="relative floating-card p-1 rounded-full">
            <img src="https://picsum.photos/seed/avatar/100/100" className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h1 className="font-black uppercase tracking-tight leading-none text-xl">X Soccer</h1>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-full floating-card text-[#0f172a] flex items-center justify-center hover:scale-105 transition-transform">
            <Bell size={20} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <HomeTab key="home" />}
          {activeTab === 'squad' && <SquadTab key="squad" />}
          {activeTab === 'matches' && <MatchesTab key="matches" />}
          {activeTab === 'store' && <StoreTab key="store" />}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation - Connected Floating Pill */}
      <nav className="absolute bottom-8 left-6 right-6 bg-white rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-50 p-2 flex justify-between items-center">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${isActive ? 'bg-[#0f172a] text-white shadow-lg scale-105' : 'text-slate-400 hover:bg-slate-50'}`}
            >
              <tab.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
