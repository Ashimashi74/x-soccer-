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
    className={`relative w-16 h-24 rounded-md flex flex-col items-center justify-end pb-1 overflow-hidden cursor-pointer ${isGold ? 'player-card-gold' : 'player-card-bg'}`}
  >
    <div className="absolute top-1 left-1 flex flex-col items-center z-10">
      <span className="text-[10px] font-bold leading-none">{ovr}</span>
      <span className="text-[8px] opacity-80 leading-none">{pos}</span>
    </div>
    <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity" referrerPolicy="no-referrer" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    <span className="text-[9px] font-bold z-10 truncate w-full text-center px-1 uppercase tracking-tighter">{name}</span>
  </motion.div>
);

const HomeTab = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col gap-6 pb-24 pt-4 px-4 h-full overflow-y-auto no-scrollbar"
    >
      {/* Hero / Play Now */}
      <motion.div 
        whileTap={{ scale: 0.98 }}
        className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer"
      >
        <img src="https://picsum.photos/seed/stadium/800/600" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ccff00]/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-[#ccff00] text-black text-[10px] font-bold uppercase tracking-wider rounded-sm">Season 4</span>
            <span className="text-[10px] font-mono text-gray-300">ENDS IN 12D</span>
          </div>
          <h2 className="text-3xl font-black uppercase italic tracking-tight mb-1">Division Rivals</h2>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-300 font-medium">Rank: <span className="text-white font-bold">Elite III</span></p>
            <div className="w-10 h-10 rounded-full bg-[#ccff00] text-black flex items-center justify-center">
              <ChevronRight size={24} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <Activity size={20} />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Win Rate</p>
            <p className="text-xl font-mono font-bold">68.4%</p>
          </div>
        </div>
        <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
            <Flame size={20} />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Win Streak</p>
            <p className="text-xl font-mono font-bold">5</p>
          </div>
        </div>
      </div>

      {/* Live Events */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold uppercase tracking-tight">Live Events</h3>
          <span className="text-xs text-[#ccff00] font-bold cursor-pointer">VIEW ALL</span>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              whileTap={{ scale: 0.95 }}
              className="min-w-[200px] h-28 rounded-xl relative overflow-hidden flex-shrink-0 border border-white/10"
            >
              <img src={`https://picsum.photos/seed/event${i}/400/200`} className="absolute inset-0 w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs font-bold text-[#ccff00] mb-0.5">TOTW {i+12}</p>
                <p className="text-sm font-bold leading-tight">Challenge Team of the Week</p>
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
      className="flex flex-col h-full pb-24 relative"
    >
      <div className="px-4 pt-4 pb-2 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase italic tracking-tight leading-none">Active Squad</h2>
          <p className="text-sm text-gray-400">4-3-3 Attack</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-[#ccff00] leading-none">91</div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Team OVR</p>
        </div>
      </div>

      <div className="flex-1 relative mx-4 mb-4 rounded-2xl overflow-hidden pitch-bg border border-white/10 shadow-2xl">
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
      
      <div className="px-4 flex gap-2">
        <button className="flex-1 glass-panel py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">Auto Build</button>
        <button className="flex-1 bg-[#ccff00] text-black py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#b3e600] transition-colors">Tactics</button>
      </div>

      <AnimatePresence>
        {selectedPlayer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPlayer(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`w-full max-w-sm rounded-2xl p-1 ${selectedPlayer.isGold ? 'bg-gradient-to-b from-yellow-400 to-yellow-900' : 'bg-gradient-to-b from-gray-400 to-gray-800'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#0a0a0a] rounded-xl p-5 relative overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 ${selectedPlayer.isGold ? 'bg-yellow-400' : 'bg-white'}`} />
                
                <div className="flex gap-4">
                  <div className={`w-24 h-36 rounded-lg overflow-hidden relative flex-shrink-0 ${selectedPlayer.isGold ? 'player-card-gold' : 'player-card-bg'}`}>
                    <img src={selectedPlayer.img} className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-4xl font-black leading-none">{selectedPlayer.ovr}</span>
                      <span className="text-lg font-bold text-gray-400 leading-none pb-1">{selectedPlayer.pos}</span>
                    </div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">{selectedPlayer.name}</h3>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/5 rounded p-2 text-center">
                        <div className="text-[10px] text-gray-400 uppercase font-bold">Matches</div>
                        <div className="font-mono font-bold text-sm">{selectedPlayer.stats.matches}</div>
                      </div>
                      <div className="bg-white/5 rounded p-2 text-center">
                        <div className="text-[10px] text-gray-400 uppercase font-bold">Goals</div>
                        <div className="font-mono font-bold text-[#ccff00] text-sm">{selectedPlayer.stats.goals}</div>
                      </div>
                      <div className="bg-white/5 rounded p-2 text-center">
                        <div className="text-[10px] text-gray-400 uppercase font-bold">Assists</div>
                        <div className="font-mono font-bold text-[#ccff00] text-sm">{selectedPlayer.stats.assists}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                  {['pac', 'sho', 'pas', 'dri', 'def', 'phy'].map((attr) => {
                    const val = selectedPlayer.stats[attr];
                    const percentage = Math.min(100, Math.max(0, val));
                    const colorClass = val >= 90 ? 'bg-[#ccff00]' : val >= 80 ? 'bg-green-400' : val >= 70 ? 'bg-yellow-400' : 'bg-red-400';
                    
                    return (
                      <div key={attr} className="flex flex-col gap-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-gray-400 uppercase">{attr}</span>
                          <span className="font-mono font-bold text-sm">{val}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
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
                  className="w-full mt-6 bg-white/10 hover:bg-white/20 py-3 rounded-xl font-bold uppercase tracking-wider transition-colors"
                  onClick={() => setSelectedPlayer(null)}
                >
                  Close
                </button>
              </div>
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
      className="flex flex-col gap-4 pb-24 pt-4 px-4 h-full overflow-y-auto no-scrollbar"
    >
      <h2 className="text-2xl font-black uppercase italic tracking-tight">Tournaments</h2>
      
      <div className="space-y-3">
        {[
          { name: "Weekend League", status: "Active", time: "Ends in 2d 14h", color: "from-purple-600 to-indigo-900", icon: Trophy },
          { name: "Draft Mode", status: "Available", time: "Entry: 15k Coins", color: "from-blue-600 to-cyan-900", icon: Target },
          { name: "Friendly Seasons", status: "Available", time: "Play with friends", color: "from-emerald-600 to-teal-900", icon: Users },
        ].map((mode, i) => (
          <motion.div 
            key={i}
            whileTap={{ scale: 0.98 }}
            className={`relative h-32 rounded-xl overflow-hidden p-4 flex flex-col justify-between cursor-pointer bg-gradient-to-br ${mode.color}`}
          >
            <div className="absolute right-[-20px] top-[-20px] opacity-20">
              <mode.icon size={120} />
            </div>
            <div className="flex justify-between items-start relative z-10">
              <span className="px-2 py-1 bg-black/30 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded-md border border-white/10">
                {mode.status}
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-black uppercase italic">{mode.name}</h3>
              <p className="text-xs font-medium opacity-80">{mode.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <h2 className="text-xl font-black uppercase italic tracking-tight mt-4">Recent Matches</h2>
      <div className="space-y-2">
        {[
          { opp: "FC Bayern", res: "W", score: "3 - 1", time: "2h ago" },
          { opp: "Real Madrid", res: "L", score: "1 - 2", time: "5h ago" },
          { opp: "Arsenal", res: "D", score: "2 - 2", time: "1d ago" },
        ].map((match, i) => (
          <div key={i} className="glass-panel p-3 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${match.res === 'W' ? 'bg-green-500/20 text-green-400' : match.res === 'L' ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'}`}>
                {match.res}
              </div>
              <div>
                <p className="font-bold text-sm">{match.opp}</p>
                <p className="text-[10px] text-gray-400">{match.time}</p>
              </div>
            </div>
            <div className="font-mono font-bold text-lg">{match.score}</div>
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
      className="flex flex-col gap-6 pb-24 pt-4 px-4 h-full overflow-y-auto no-scrollbar"
    >
      <div className="flex justify-between items-end">
        <h2 className="text-2xl font-black uppercase italic tracking-tight">Store</h2>
        <div className="flex gap-2">
          <div className="glass-panel px-3 py-1 rounded-full flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="font-mono text-sm font-bold">12,500</span>
          </div>
          <div className="glass-panel px-3 py-1 rounded-full flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ccff00]" />
            <span className="font-mono text-sm font-bold">450</span>
          </div>
        </div>
      </div>

      {/* Featured Pack */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-[#ccff00]/30 shadow-[0_0_30px_rgba(204,255,0,0.15)] group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2000] to-[#050505]" />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/sparkle/800/600')] opacity-20 mix-blend-screen group-hover:opacity-40 transition-opacity" referrerPolicy="no-referrer" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-32 h-40 player-card-gold rounded-xl mb-4 shadow-[0_0_40px_rgba(255,215,0,0.3)] flex items-center justify-center"
          >
            <Star size={48} className="text-yellow-400 opacity-50" />
          </motion.div>
          <h3 className="text-2xl font-black uppercase italic tracking-widest text-[#ccff00] drop-shadow-md">Jumbo Rare</h3>
          <p className="text-sm font-bold text-white/80">Contains 24 Gold Items, all Rare</p>
        </div>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <button className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-white/20 transition-colors">
            <div className="w-3 h-3 rounded-full bg-yellow-400" /> 100k
          </button>
          <button className="bg-[#ccff00] text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-[#b3e600] transition-colors">
            <div className="w-3 h-3 rounded-full bg-black" /> 2k
          </button>
        </div>
      </motion.div>

      {/* Other Packs */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: "Premium Gold", price: "7.5k", pts: "150", color: "from-yellow-900/40 to-black" },
          { name: "Silver Promo", price: "3.5k", pts: "75", color: "from-gray-700/40 to-black" },
          { name: "Consumables", price: "5k", pts: "100", color: "from-blue-900/40 to-black" },
          { name: "Cosmetics", price: "2k", pts: "50", color: "from-purple-900/40 to-black" },
        ].map((pack, i) => (
          <div key={i} className={`glass-panel p-4 rounded-xl relative overflow-hidden bg-gradient-to-br ${pack.color}`}>
            <h4 className="font-bold uppercase italic mb-6">{pack.name}</h4>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs font-bold bg-black/40 px-2 py-1.5 rounded">
                <span>{pack.price}</span>
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
              </div>
              <div className="flex items-center justify-between text-xs font-bold bg-[#ccff00]/10 text-[#ccff00] px-2 py-1.5 rounded">
                <span>{pack.pts}</span>
                <div className="w-2 h-2 rounded-full bg-[#ccff00]" />
              </div>
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
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'squad', icon: Users, label: 'Squad' },
    { id: 'matches', icon: Swords, label: 'Matches' },
    { id: 'store', icon: ShoppingBag, label: 'Store' },
  ];

  return (
    <div className="w-full h-screen max-w-md mx-auto bg-[#050505] text-white relative overflow-hidden font-sans flex flex-col shadow-2xl sm:border-x sm:border-white/10">
      {/* Top Bar */}
      <header className="px-4 py-3 flex items-center justify-between z-20 bg-gradient-to-b from-[#050505] to-transparent">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src="https://picsum.photos/seed/avatar/100/100" className="w-10 h-10 rounded-full border-2 border-[#ccff00]" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-1 -right-1 bg-[#ccff00] text-black text-[9px] font-bold px-1 rounded-sm">42</div>
          </div>
          <div>
            <h1 className="font-black uppercase italic tracking-tight leading-none text-lg">X Soccer</h1>
            <p className="text-[10px] text-gray-400 font-mono">ID: 849201</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors">
            <Bell size={18} />
          </button>
          <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors">
            <Settings size={18} />
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

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full glass-panel border-t border-white/10 pb-safe pt-2 px-6 z-30">
        <div className="flex justify-between items-center pb-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex flex-col items-center justify-center w-16 h-14"
              >
                <motion.div
                  animate={{ 
                    y: isActive ? -4 : 0,
                    color: isActive ? '#ccff00' : '#888888'
                  }}
                  className="z-10"
                >
                  <tab.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>
                <motion.span 
                  animate={{ 
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 4
                  }}
                  className="text-[10px] font-bold mt-1 text-[#ccff00]"
                >
                  {tab.label}
                </motion.span>
                {isActive && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -top-2 w-8 h-1 bg-[#ccff00] rounded-b-full shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
