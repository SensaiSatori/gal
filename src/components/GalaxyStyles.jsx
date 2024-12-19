export const PREFIXES = [
  'Aurora', 'Nebula', 'Cosmo', 'Galactica', 'Stellar', 'Lunar', 'Solar', 'Astral', 'Celestial', 'Ecliptica',
  'Quasar', 'Supernova', 'Pulsar', 'Meteor', 'Comet', 'Asteroid', 'Orbitron', 'Nova', 'Eon', 'Radiant',
  'Andromeda', 'Orion', 'Vega', 'Sirius', 'Lyra', 'Arcturus', 'Betelgeuse', 'Polaris', 'Proxima', 'Centauri',
  'Deneb', 'Rigel', 'Altair', 'Antares', 'Alcor', 'Mizar', 'Capella', 'Draco', 'Hercules', 'Phoenix',
  'Taurus', 'Virgo', 'Libra', 'Gemini', 'Leo', 'Pisces', 'Sagitta', 'Perseus', 'Hydra', 'Pegasus',
  'Zenith', 'Apex', 'Equinox', 'Solstice', 'Auriga', 'Cassiopeia', 'Cygnus', 'Ursa', 'Corvus', 'Crux',
  'Volans', 'Pavo', 'Carina', 'Horologium', 'Octans', 'Reticulum', 'Telescopium', 'Microscopium', 'Apus', 'Indus',
  'Lycaon', 'Sagittarius', 'Scorpio', 'Lupus', 'Camelopardalis', 'Eridanus', 'Fornax', 'Hydrus', 'Lynx', 'Monoceros'
];

export const SUFFIXES = [
  'Prime', 'Major', 'Minor', 'X', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta',
  'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi',
  'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'Hyperion', 'Ethereal',
  'Void', 'Matrix', 'Cluster', 'Nebula', 'Vortex', 'Cloud', 'System', 'Vanguard', 'Horizon', 'Eclipse',
  'Pioneer', 'Voyager', 'Endeavor', 'Discovery', 'Odyssey', 'Frontier', 'Infinity', 'Chronos', 'Spectra', 'Nexus',
  'Etherea', 'Genesis', 'Helix', 'Paradox', 'Zenith', 'Abyss', 'Beacon', 'Catalyst', 'Haven', 'Pinnacle',
  'Eon', 'Nova', 'Radiance', 'Vesper', 'Momentum', 'Nebulon', 'Astralis', 'Aurion', 'Celest', 'Equinox',
  'Solara', 'Eventide', 'Aether', 'Dominion', 'Apex', 'Celerity', 'Eminence', 'Vortex', 'Arcadia', 'Elysium'
];
export const GALAXY_COLORS = [
  { core: '#1e3799', arms: ['#0c2461', '#0a3d62', '#3c6382', '#60a3bc'], dust: '#0a3d62' },
  { core: '#341f97', arms: ['#5f27cd', '#341f97', '#222f3e', '#4834d4'], dust: '#2c2c54' },
  { core: '#b71540', arms: ['#6F1E51', '#833471', '#eb2f06', '#4c0525'], dust: '#6F1E51' },
  { core: '#006266', arms: ['#01a3a4', '#00464a', '#204969', '#25CCF7'], dust: '#004445' },
  { core: '#5758BB', arms: ['#2c003e', '#512b58', '#2c003e', '#482980'], dust: '#2c003e' },
  { core: '#FF5733', arms: ['#C70039', '#900C3F', '#FFC300', '#DAF7A6'], dust: '#581845' },
  { core: '#34495E', arms: ['#2C3E50', '#BDC3C7', '#E74C3C', '#9B59B6'], dust: '#1C2833' },
  { core: '#F39C12', arms: ['#D35400', '#E67E22', '#F1C40F', '#FDEBD0'], dust: '#BA4A00' },
  { core: '#16A085', arms: ['#1ABC9C', '#27AE60', '#2ECC71', '#A2D9CE'], dust: '#0E6655' },
  { core: '#2980B9', arms: ['#3498DB', '#5DADE2', '#85C1E9', '#AED6F1'], dust: '#154360' },
  { core: '#7D3C98', arms: ['#8E44AD', '#9B59B6', '#C39BD3', '#E8DAEF'], dust: '#512E5F' },
  { core: '#2ECC71', arms: ['#27AE60', '#229954', '#1E8449', '#D5F5E3'], dust: '#145A32' },
  { core: '#E74C3C', arms: ['#C0392B', '#A93226', '#922B21', '#FADBD8'], dust: '#641E16' },
  { core: '#F1C40F', arms: ['#F7DC6F', '#F8C471', '#F39C12', '#FDEBD0'], dust: '#7E5109' },
  { core: '#48C9B0', arms: ['#1ABC9C', '#16A085', '#148F77', '#D1F2EB'], dust: '#0E6251' },
  { core: '#5DADE2', arms: ['#3498DB', '#2874A6', '#21618C', '#D6EAF8'], dust: '#154360' },
  { core: '#AF7AC5', arms: ['#9B59B6', '#884EA0', '#76448A', '#EBDEF0'], dust: '#512E5F' },
  { core: '#52BE80', arms: ['#27AE60', '#229954', '#1E8449', '#D5F5E3'], dust: '#145A32' },
  { core: '#EC7063', arms: ['#E74C3C', '#C0392B', '#A93226', '#FADBD8'], dust: '#641E16' },
  { core: '#F4D03F', arms: ['#F1C40F', '#D4AC0D', '#B7950B', '#FCF3CF'], dust: '#7D6608' },
  { core: '#5499C7', arms: ['#2980B9', '#2471A3', '#1F618D', '#D6EAF8'], dust: '#154360' },
  { core: '#45B39D', arms: ['#16A085', '#138D75', '#117A65', '#A3E4D7'], dust: '#0E6251' },
  { core: '#58D68D', arms: ['#28B463', '#239B56', '#1D8348', '#ABEBC6'], dust: '#145A32' },
  { core: '#E59866', arms: ['#DC7633', '#CA6F1E', '#AF601A', '#FAD7A0'], dust: '#784212' },
  { core: '#5D6D7E', arms: ['#34495E', '#2E4053', '#283747', '#D5D8DC'], dust: '#1B2631' },
  { core: '#F1948A', arms: ['#EC7063', '#CD6155', '#AF601A', '#FADBD8'], dust: '#641E16' },
  { core: '#B03A2E', arms: ['#943126', '#78281F', '#641E16', '#F5B7B1'], dust: '#4A235A' },{ core: '#4B0082', arms: ['#6A0DAD', '#8A2BE2', '#9400D3', '#7B68EE'], dust: '#483D8B' },
  { core: '#800020', arms: ['#A52A2A', '#B22222', '#FF4500', '#DC143C'], dust: '#8B0000' },
  { core: '#104E8B', arms: ['#1E90FF', '#4682B4', '#5F9EA0', '#6495ED'], dust: '#003366' },
  { core: '#556B2F', arms: ['#6B8E23', '#808000', '#9ACD32', '#ADFF2F'], dust: '#4F7942' },
  { core: '#483C32', arms: ['#5C4033', '#8B4513', '#A0522D', '#CD853F'], dust: '#8B5742' },
  { core: '#2F4F4F', arms: ['#2E8B57', '#3CB371', '#66CDAA', '#8FBC8F'], dust: '#228B22' },
  { core: '#191970', arms: ['#000080', '#00008B', '#0000CD', '#4169E1'], dust: '#27408B' },
  { core: '#6A5ACD', arms: ['#7B68EE', '#9370DB', '#8A2BE2', '#BA55D3'], dust: '#4B0082' },
  { core: '#8B0000', arms: ['#B22222', '#FF6347', '#FA8072', '#FF4500'], dust: '#A52A2A' },
  { core: '#4C4CFF', arms: ['#0000FF', '#1E90FF', '#4682B4', '#87CEFA'], dust: '#0047AB' },
  { core: '#A52A2A', arms: ['#B22222', '#8B4513', '#CD853F', '#F4A460'], dust: '#5E2612' },
  { core: '#FFD700', arms: ['#FFA500', '#FF8C00', '#FF7F50', '#FFDAB9'], dust: '#E9967A' },
  { core: '#5F9EA0', arms: ['#4682B4', '#00CED1', '#48D1CC', '#40E0D0'], dust: '#2F4F4F' },
  { core: '#2E8B57', arms: ['#3CB371', '#20B2AA', '#00FA9A', '#7FFFD4'], dust: '#006400' },
];