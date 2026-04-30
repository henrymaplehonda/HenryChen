// ═══════════════════════════════════════════════════════════════════════
//  MODELS — Shared between qt.html and compare.html
//  Selling prices from Maple Honda internal sheet, April 25, 2026
//  Lease & finance RATES confirmed from April 2026 Honda Programs (NAS081-26)
//  Residuals: Official Honda Canada 2026 Residual Values sheet
//  Residual basis: % of MSRP · KM basis: 24,000 km/yr
//  km adjustment: ±2% of MSRP per 4,000 km/yr from 24k base
// ═══════════════════════════════════════════════════════════════════════

const M = [

// ── CIVIC SEDAN (4D) ──────────────────────────────────────────────────────
{id:'cs-lx', cat:'Civic Sedan', name:'Civic Sedan', trim:'LX',
 msrp:28340, price:31306, otd:35376, engine:'2.0L 150hp', drive:'FWD',
 lr:{36:3.49,60:4.49}, rv:{24:.70,30:.66,36:.58,42:.54,48:.47,54:.44,60:.40}, fr:{60:4.49,84:4.99}},

{id:'cs-sp', cat:'Civic Sedan', name:'Civic Sedan', trim:'Sport',
 msrp:32200, price:35175, otd:39748, engine:'2.0L 150hp', drive:'FWD',
 lr:{36:3.49,60:4.49}, rv:{24:.70,30:.66,36:.58,42:.54,48:.47,54:.44,60:.40}, fr:{60:4.49,84:4.99},
 // Confirmed residuals honda.ca Apr 26 2026 (60mo, 4.49%, cap $34,675.50 after $500 Lease Bonus):
 // Dollar values ÷ MSRP $32,200 → percentages
 resKm:{12000:.44,16000:.43,20000:.42,24000:.40,32000:.36,40000:.32}},

// rv60=43% of MSRP @ 24k confirmed: $34,100×43%=$14,663 ✓ honda.ca Apr 25
// rv60=45% of MSRP @ 20k confirmed: $34,100×45%=$15,345 ✓ honda.ca Apr 25
{id:'cs-sh', cat:'Civic Sedan', name:'Civic Sedan', trim:'Sport Hybrid',
 msrp:34100, price:37071, otd:41879, engine:'2.0L Hybrid 200hp', drive:'FWD',
 lr:{36:3.49,60:4.49}, rv:{24:.73,30:.69,36:.61,42:.57,48:.50,54:.47,60:.43}, fr:{60:4.49,84:4.99},
 resKm:{12000:.47,16000:.45,20000:.45,24000:.43,40000:.35}},

{id:'cs-sth', cat:'Civic Sedan', name:'Civic Sedan', trim:'Sport Touring Hybrid',
 msrp:37600, price:40561, otd:45834, engine:'2.0L Hybrid 200hp', drive:'FWD',
 lr:{36:3.49,60:4.49}, rv:{24:.73,30:.69,36:.61,42:.57,48:.50,54:.47,60:.43}, fr:{60:4.49,84:4.99}},

{id:'cs-si', cat:'Civic Sedan', name:'Civic Sedan', trim:'Si',
 msrp:36600, price:39566, otd:44710, engine:'1.5T 200hp', drive:'FWD',
 lr:{36:null,60:null}, rv:{24:.68,30:.65,36:.58,42:.54,48:.46,54:.43,60:.39}, fr:{60:6.99,84:6.99}},

// ── CIVIC HATCHBACK (5D) ──────────────────────────────────────────────────
{id:'ch-sp', cat:'Civic Hatchback', name:'Civic Hatchback', trim:'Sport',
 msrp:32195, price:35166, otd:39738, engine:'2.0L 150hp', drive:'FWD',
 lr:{36:3.99,60:4.99}, rv:{24:.70,30:.66,36:.58,42:.54,48:.47,54:.44,60:.40}, fr:{60:4.99,84:5.49}},

{id:'ch-sh', cat:'Civic Hatchback', name:'Civic Hatchback', trim:'Sport Hybrid',
 msrp:35991, price:38962, otd:44027, engine:'2.0L Hybrid 200hp', drive:'FWD',
 lr:{36:4.49,60:5.49}, rv:{24:.73,30:.69,36:.61,42:.57,48:.50,54:.47,60:.43}, fr:{60:5.49,84:5.99}},

{id:'ch-sth', cat:'Civic Hatchback', name:'Civic Hatchback', trim:'Sport Touring Hybrid',
 msrp:39491, price:42462, otd:47982, engine:'2.0L Hybrid 200hp', drive:'FWD',
 lr:{36:4.49,60:5.49}, rv:{24:.73,30:.69,36:.61,42:.57,48:.50,54:.47,60:.43}, fr:{60:5.49,84:5.99}},

// ── PRELUDE ───────────────────────────────────────────────────────────────
{id:'pre', cat:'Prelude', name:'Prelude', trim:'Hybrid',
 msrp:49990, price:52961, otd:59846, engine:'2.0L Hybrid 200hp', drive:'FWD',
 lr:{36:null,60:null}, rv:{24:.74,30:.70,36:.62,42:.58,48:.51,54:.48,60:.44}, fr:{60:null,84:null}},

// ── ACCORD ───────────────────────────────────────────────────────────────
{id:'ac-se', cat:'Accord', name:'Accord', trim:'SE',
 msrp:38500, price:41475, otd:46867, engine:'1.5T 192hp', drive:'FWD',
 lr:{36:3.99,60:4.99}, rv:{24:.65,30:.62,36:.56,42:.53,48:.46,54:.43,60:.39}, fr:{60:4.99,84:5.99}},

{id:'ac-sl', cat:'Accord', name:'Accord', trim:'Sport-L Hybrid',
 msrp:43700, price:46671, otd:52738, engine:'2.0L Hybrid 204hp', drive:'FWD',
 lr:{36:3.49,60:4.49}, rv:{24:.66,30:.64,36:.59,42:.55,48:.48,54:.44,60:.39}, fr:{60:3.99,84:4.49}},

{id:'ac-tr', cat:'Accord', name:'Accord', trim:'Touring Hybrid',
 msrp:46200, price:49171, otd:55563, engine:'2.0L Hybrid 204hp', drive:'FWD',
 lr:{36:3.49,60:4.49}, rv:{24:.66,30:.64,36:.59,42:.55,48:.48,54:.44,60:.39}, fr:{60:3.99,84:4.49}},

// ── HR-V (2026) ───────────────────────────────────────────────────────────
{id:'hv-lf', cat:'HR-V', name:'HR-V', trim:'LX FWD',
 msrp:30465, price:33436, otd:37783, engine:'2.0L 158hp', drive:'FWD',
 lr:{36:4.49,60:5.49}, rv:{24:.68,30:.65,36:.59,42:.56,48:.50,54:.46,60:.42}, fr:{60:5.99,84:5.99}},

{id:'hv-la', cat:'HR-V', name:'HR-V', trim:'LX AWD',
 msrp:32591, price:35736, otd:40382, engine:'2.0L 158hp', drive:'AWD',
 lr:{36:4.49,60:5.49}, rv:{24:.67,30:.64,36:.58,42:.55,48:.49,54:.45,60:.41}, fr:{60:5.99,84:5.99}},

{id:'hv-sp', cat:'HR-V', name:'HR-V', trim:'Sport AWD',
 msrp:35891, price:39036, otd:44111, engine:'2.0L 158hp', drive:'AWD',
 lr:{36:4.49,60:5.49}, rv:{24:.66,30:.63,36:.57,42:.54,48:.48,54:.44,60:.39}, fr:{60:5.99,84:5.99}},

{id:'hv-el', cat:'HR-V', name:'HR-V', trim:'EX-L AWD',
 msrp:38691, price:41836, otd:47275, engine:'2.0L 158hp', drive:'AWD',
 lr:{36:4.49,60:5.49}, rv:{24:.65,30:.62,36:.56,42:.53,48:.47,54:.43,60:.38}, fr:{60:5.99,84:5.99}},

// ── CR-V ─────────────────────────────────────────────────────────────────
{id:'cv-lf', cat:'CR-V', name:'CR-V', trim:'LX 2WD',
 msrp:36966, price:40111, otd:45325, engine:'1.5T 190hp', drive:'FWD',
 lr:{36:3.99,60:4.99}, rv:{24:.69,30:.65,36:.58,42:.54,48:.47,54:.44,60:.41}, fr:{60:5.19,84:5.19}},

{id:'cv-la', cat:'CR-V', name:'CR-V', trim:'LX AWD',
 msrp:39766, price:42911, otd:48489, engine:'1.5T 190hp', drive:'AWD',
 lr:{36:3.99,60:4.99}, rv:{24:.69,30:.65,36:.58,42:.54,48:.47,54:.44,60:.41}, fr:{60:5.19,84:5.19}},

{id:'cv-sp', cat:'CR-V', name:'CR-V', trim:'Sport AWD',
 msrp:43366, price:46511, otd:52557, engine:'1.5T 190hp', drive:'AWD',
 lr:{36:3.99,60:4.99}, rv:{24:.69,30:.65,36:.58,42:.54,48:.47,54:.44,60:.41}, fr:{60:5.19,84:5.19}},

// CR-V Sport Hybrid 60mo confirmed: $49,032(sell) vs $45,887(MSRP)×43%=$19,731
// honda.ca Apr 25: residual $20,655 → $20,655/$45,887=45% of MSRP at 20k
{id:'cv-sh', cat:'CR-V', name:'CR-V', trim:'Sport Hybrid AWD',
 msrp:45887, price:49032, otd:55406, engine:'2.0L Hybrid 204hp', drive:'AWD',
 lr:{36:3.99,60:4.99}, rv:{24:.70,30:.67,36:.60,42:.56,48:.49,54:.46,60:.43}, fr:{60:5.19,84:5.19},
 resKm:{12000:.47,16000:.46,20000:.45,24000:.43,40000:.35}},

{id:'cv-ts', cat:'CR-V', name:'CR-V', trim:'TrailSport Hybrid AWD',
 msrp:47287, price:50432, otd:56988, engine:'2.0L Hybrid 204hp', drive:'AWD',
 lr:{36:3.99,60:4.99}, rv:{24:.70,30:.67,36:.60,42:.56,48:.49,54:.46,60:.43}, fr:{60:5.19,84:5.19}},

{id:'cv-ex', cat:'CR-V', name:'CR-V', trim:'EX-L Hybrid AWD',
 msrp:48687, price:51832, otd:58570, engine:'2.0L Hybrid 204hp', drive:'AWD',
 lr:{36:3.99,60:4.99}, rv:{24:.70,30:.67,36:.60,42:.56,48:.49,54:.46,60:.43}, fr:{60:5.19,84:5.19}},

{id:'cv-th', cat:'CR-V', name:'CR-V', trim:'Touring Hybrid AWD',
 msrp:51187, price:54332, otd:61395, engine:'2.0L Hybrid 204hp', drive:'AWD',
 lr:{36:3.99,60:4.99}, rv:{24:.70,30:.67,36:.60,42:.56,48:.49,54:.46,60:.43}, fr:{60:5.19,84:5.19}},

// ── PASSPORT ─────────────────────────────────────────────────────────────
// Confirmed km grid (% of MSRP $56,990): 12k=44%($25,076) 20k=42%($23,936) 24k=40%($22,796)
{id:'pp-ts', cat:'Passport', name:'Passport', trim:'TrailSport',
 msrp:56990, price:60126, otd:67942, engine:'3.5L V6 285hp', drive:'i-VTM4 AWD',
 lr:{36:5.69,60:5.69}, rv:{24:.65,30:.62,36:.56,42:.53,48:.47,54:.44,60:.40},
 resKm:{12000:.44,16000:.43,20000:.42,24000:.40,40000:.33},
 fr:{60:5.79,84:5.79}},

{id:'pp-tb', cat:'Passport', name:'Passport', trim:'TrailSport Blackout',
 msrp:58181, price:61326, otd:69298, engine:'3.5L V6 285hp', drive:'i-VTM4 AWD',
 lr:{36:5.69,60:5.69}, rv:{24:.65,30:.62,36:.56,42:.53,48:.47,54:.44,60:.40},
 resKm:{12000:.44,16000:.43,20000:.42,24000:.40,40000:.33},
 fr:{60:5.79,84:5.79}},

{id:'pp-tr', cat:'Passport', name:'Passport', trim:'Touring',
 msrp:60531, price:63676, otd:71954, engine:'3.5L V6 285hp', drive:'i-VTM4 AWD',
 lr:{36:5.69,60:5.69}, rv:{24:.65,30:.62,36:.56,42:.53,48:.47,54:.44,60:.40},
 resKm:{12000:.44,16000:.43,20000:.42,24000:.40,40000:.33},
 fr:{60:5.79,84:5.79}},

{id:'pp-trb', cat:'Passport', name:'Passport', trim:'Touring Blackout',
 msrp:61731, price:64876, otd:73310, engine:'3.5L V6 285hp', drive:'i-VTM4 AWD',
 lr:{36:5.69,60:5.69}, rv:{24:.65,30:.62,36:.56,42:.53,48:.47,54:.44,60:.40},
 resKm:{12000:.44,16000:.43,20000:.42,24000:.40,40000:.33},
 fr:{60:5.79,84:5.79}},

// ── PILOT ─────────────────────────────────────────────────────────────────
{id:'pl-sp', cat:'Pilot', name:'Pilot', trim:'Sport',
 msrp:55550, price:58695, otd:66325, engine:'3.5L V6 285hp', drive:'i-VTM4 AWD',
 lr:{36:5.69,60:5.69}, rv:{24:.67,30:.64,36:.58,42:.55,48:.49,54:.46,60:.42}, fr:{60:5.79,84:5.79}},

{id:'pl-el', cat:'Pilot', name:'Pilot', trim:'EX-L',
 msrp:58150, price:61295, otd:69263, engine:'3.5L V6 285hp', drive:'i-VTM4 AWD',
 lr:{36:5.69,60:5.69}, rv:{24:.67,30:.64,36:.58,42:.55,48:.49,54:.46,60:.42}, fr:{60:5.79,84:5.79}},

{id:'pl-ts', cat:'Pilot', name:'Pilot', trim:'TrailSport',
 msrp:61650, price:64795, otd:73218, engine:'3.5L V6 285hp', drive:'i-VTM4 AWD',
 lr:{36:5.69,60:5.69}, rv:{24:.67,30:.64,36:.58,42:.55,48:.49,54:.46,60:.42}, fr:{60:5.79,84:5.79}},

{id:'pl-tr', cat:'Pilot', name:'Pilot', trim:'Touring',
 msrp:64900, price:68045, otd:76891, engine:'3.5L V6 285hp', drive:'i-VTM4 AWD',
 lr:{36:5.69,60:5.69}, rv:{24:.67,30:.64,36:.58,42:.55,48:.49,54:.46,60:.42}, fr:{60:5.79,84:5.79}},

{id:'pl-be', cat:'Pilot', name:'Pilot', trim:'Black Edition',
 msrp:66400, price:69545, otd:78586, engine:'3.5L V6 285hp', drive:'i-VTM4 AWD',
 lr:{36:5.69,60:5.69}, rv:{24:.67,30:.64,36:.58,42:.55,48:.49,54:.46,60:.42}, fr:{60:5.79,84:5.79}},

// ── ODYSSEY ───────────────────────────────────────────────────────────────
{id:'od-sp', cat:'Odyssey', name:'Odyssey', trim:'Sport',
 msrp:51411, price:54556, otd:61648, engine:'3.5L V6 280hp', drive:'FWD',
 lr:{36:5.69,60:5.69}, rv:{24:.68,30:.64,36:.56,42:.53,48:.46,54:.43,60:.39}, fr:{60:5.79,84:5.79}},

{id:'od-sl', cat:'Odyssey', name:'Odyssey', trim:'Sport-L',
 msrp:54411, price:57556, otd:65038, engine:'3.5L V6 280hp', drive:'FWD',
 lr:{36:5.69,60:5.69}, rv:{24:.68,30:.64,36:.56,42:.53,48:.46,54:.43,60:.39}, fr:{60:5.79,84:5.79}},

{id:'od-tr', cat:'Odyssey', name:'Odyssey', trim:'Touring',
 msrp:59811, price:62956, otd:71140, engine:'3.5L V6 280hp', drive:'FWD',
 lr:{36:5.69,60:5.69}, rv:{24:.68,30:.64,36:.56,42:.53,48:.46,54:.43,60:.39}, fr:{60:5.79,84:5.79}},

{id:'od-be', cat:'Odyssey', name:'Odyssey', trim:'Black Edition',
 msrp:61611, price:64756, otd:73174, engine:'3.5L V6 280hp', drive:'FWD',
 lr:{36:5.69,60:5.69}, rv:{24:.68,30:.64,36:.56,42:.53,48:.46,54:.43,60:.39}, fr:{60:5.79,84:5.79}},

// ── RIDGELINE ─────────────────────────────────────────────────────────────
{id:'rl-sp', cat:'Ridgeline', name:'Ridgeline', trim:'Sport',
 msrp:52900, price:56135, otd:63433, engine:'3.5L V6 280hp', drive:'i-VTM4 AWD',
 lr:{36:5.69,60:5.69}, rv:{24:.65,30:.63,36:.59,42:.57,48:.52,54:.49,60:.45}, fr:{60:5.79,84:5.79}},

{id:'rl-ts', cat:'Ridgeline', name:'Ridgeline', trim:'TrailSport',
 msrp:56490, price:59635, otd:67388, engine:'3.5L V6 280hp', drive:'i-VTM4 AWD',
 lr:{36:5.69,60:5.69}, rv:{24:.65,30:.63,36:.59,42:.57,48:.52,54:.49,60:.45}, fr:{60:5.79,84:5.79}},

{id:'rl-be', cat:'Ridgeline', name:'Ridgeline', trim:'Black Edition',
 msrp:58990, price:62135, otd:70213, engine:'3.5L V6 280hp', drive:'i-VTM4 AWD',
 lr:{36:5.69,60:5.69}, rv:{24:.65,30:.63,36:.59,42:.57,48:.52,54:.49,60:.45}, fr:{60:5.79,84:5.79}},

// ── PROLOGUE (EV) ─────────────────────────────────────────────────────────
{id:'pr-ex', cat:'Prologue', name:'Prologue', trim:'EX',
 msrp:54990, price:58131, otd:66338, engine:'Electric / Single Motor', drive:'FWD',
 lr:{36:null,60:null}, rv:{24:.57,30:.54,36:.49,42:.45,48:.38,54:.35,60:.31}, fr:{60:1.99,84:1.99,96:1.99}},

{id:'pr-el', cat:'Prologue', name:'Prologue', trim:'EX-L',
 msrp:59990, price:63131, otd:71988, engine:'Electric / Dual Motor', drive:'AWD',
 lr:{36:null,60:null}, rv:{24:.55,30:.52,36:.47,42:.44,48:.37,54:.34,60:.30}, fr:{60:1.99,84:1.99,96:1.99}},

{id:'pr-tr', cat:'Prologue', name:'Prologue', trim:'Touring',
 msrp:64990, price:68131, otd:77638, engine:'Electric / Dual Motor', drive:'AWD',
 lr:{36:null,60:null}, rv:{24:.53,30:.50,36:.45,42:.42,48:.36,54:.33,60:.29}, fr:{60:1.99,84:1.99,96:1.99}},

// ══════════════════════════════════════════════════════════════════════════
//  2027 Model Year · Added Apr 28 2026
//  Source: Maple Honda internal pricing sheet
//  Rates/residuals: TBD — using 2026 programs as placeholder until 2027 programs release
// ══════════════════════════════════════════════════════════════════════════

// ── HR-V (2027) ───────────────────────────────────────────────────────────
// Pricing from Maple Honda Apr 28 2026 · fees: fpdi $2,000 + $1,145 gov/dealer = $3,145
{id:'hv27-lf', cat:'HR-V', name:'HR-V', trim:'LX FWD', year:2027,
 msrp:30800, price:33945, otd:38358, engine:'2.0L 158hp', drive:'FWD',
 lr:{36:4.49,60:5.49}, rv:{24:.68,30:.65,36:.59,42:.56,48:.50,54:.46,60:.42}, fr:{60:5.99,84:5.99}},

{id:'hv27-la', cat:'HR-V', name:'HR-V', trim:'LX AWD', year:2027,
 msrp:33100, price:36245, otd:40957, engine:'2.0L 158hp', drive:'AWD',
 lr:{36:4.49,60:5.49}, rv:{24:.67,30:.64,36:.58,42:.55,48:.49,54:.45,60:.41}, fr:{60:5.99,84:5.99}},

{id:'hv27-sp', cat:'HR-V', name:'HR-V', trim:'Sport AWD', year:2027,
 msrp:36400, price:39545, otd:44686, engine:'2.0L 158hp', drive:'AWD',
 lr:{36:4.49,60:5.49}, rv:{24:.66,30:.63,36:.57,42:.54,48:.48,54:.44,60:.39}, fr:{60:5.99,84:5.99}},

{id:'hv27-el', cat:'HR-V', name:'HR-V', trim:'EX-L AWD', year:2027,
 msrp:39200, price:42345, otd:47850, engine:'2.0L 158hp', drive:'AWD',
 lr:{36:4.49,60:5.49}, rv:{24:.65,30:.62,36:.56,42:.53,48:.47,54:.43,60:.38}, fr:{60:5.99,84:5.99}},

];
M.forEach(m => { if (!m.year) m.year = 2026; });
