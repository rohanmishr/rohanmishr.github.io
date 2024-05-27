const badges = [
    //depth 1 (DONE)
    {id: 2124678042, name: "ToLM", fname: "Tower of Learning Mechanics", diff: 1.25},
    {id: 2124684994, name: "ToPU", fname: "Tower of Peaceful Unity", diff: 1.84},
    {id: 2124681954, name: "ToMA", fname: "Tower of Miniscule Anger", diff: 2.29},
    {id: 2124678046, name: "ToCS", fname: "Tower of Confined Sides", diff: 3.23},
    {id: 2124687766, name: "ToSaAF", fname: "Tower of Simple and Adequate Fun", diff: 4.26},
    {id: 2124685563, name: "ToPM", fname: "Tower of Prismatic Mayhem", diff: 4.37},
    {id: 2124918609, name: "ToCW", fname: "Tower of Cruel Wraparounds", diff: 5.26},
    {id: 2124687572, name: "ToLB", fname: "Tower of Leaping Back", diff: 5.69},
    {id: 2124693933, name: "ToAS", fname: "Tower of Advanced Strategy", diff: 6.12},
    {id: 2124696570, name: "ToRaCS", fname: "Tower of Risky and Challenging Sections", diff: 6.88},
    {id: 2124705869, name: "ToOHB", fname: "Tower of One Hundred Buttons", diff: 7.25},
    {id: 2124713067, name: "CoASC", fname: "Citadel of A Single Corner", diff: 7.55},
    {id: 2124706258, name: "ToMO", fname: "Tower of Mean Obstacles", diff: 9.01},
    //fogged isles
    {id: 2147096883, name: "ToGFaS", fname: "Tower of Great Falls and Stories", diff: 2.4},
    {id: 2147096896, name: "ToTF", fname: "Tower of Twisted Frames", diff: 4.29},
    {id: 2147096903, name: "ToBRB", fname: "Tower of Briskly Rising Building", diff: 3},
    {id: 2147096915, name: "ToEM", fname: "Tower of Eternal Movement", diff: 5.99},
    {id: 2147096920, name: "ToTIO", fname: "Tower of Tantrum Inducing Obstacles", diff: 6.51},
    {id: 2147112358, name: "ToPDC", fname: "Tower of Perplexing Design Choices", diff: 6.99},
    {id: 2147112366, name: "ToD", fname: "Tower of Descending", diff: 7.68},
    {id: 2147112371, name: "ToVLS", fname: "Tower of Very Little Space", diff: 7.91},
    {id: 2147112378, name: "ToDE", fname: "Tower of Drooling Erebus", diff: 7.09},
    {id: 2147112383, name: "TET", fname: "Tax Evasion Tower", diff: 8.48},
    {id: 2147176217, name: "ToHD", fname: "Tower of Hectic Division", diff: 9.7},
    {id: 2147176229, name: "CoSA", fname: "Citadel of Spiraling Ascent", diff: 5.22},
    //depth 2 (DONE)
    {id: 2125043368, name: "ToBFA", fname: "Tower of Barely Functioning Architecture", diff: 2.76},
    {id: 2125043380, name: "ToCL", fname: "Tower of Colored Lunacy", diff: 3.27},
    {id: 2125043386, name: "ToNM", fname: "Tower of Nostalgic Modernism", diff: 3.73},
    {id: 2125043394, name: "ToDaUC", fname: "Tower of Dull and Uninteresting Colors", diff: 4.26},
    {id: 2125043415, name: "ToCE", fname: "Tower of Corner Elevation", diff: 5.09},
    {id: 2125043405, name: "ToCaC", fname: "Tower of Curving and Climbing", diff: 5.69},
    {id: 2125043427, name: "ToRRR", fname: "Tower of Radiantly Raging Retrospectively", diff: 6.47},
    {id: 2125043424, name: "ToSO", fname: "Tower of Scattered Obstacles", diff: 6.72},
    {id: 2125043539, name: "ToI", fname: "Tower of Insanity", diff: 7.37},
    {id: 2125043548, name: "ToIT", fname: "Tower of Inconsistent Theming", diff: 7.43},
    {id: 2125043568, name: "ToIaI", fname: "Tower of Continuous Torment", diff: 7.99},
    {id: 2127000415, name: "ToDB", fname: "Tower of Difficulty Breezing", diff: 8.43},
    {id: 2125043557, name: "CoEaCT", fname: "Citadel of Endless and Chaotic Treachery", diff: 6.51},
    //depth 3 (DONE)
    {id: 2126964536, name: "ToCA", fname: "Tower of Complex Ascent", diff: 2.08},
    {id: 2126964538, name: "ToCM", fname: "Tower of Crate Maneuvering", diff: 3.67},
    {id: 2126964540, name: "ToQH", fname: "Tower of Quantifiable Hurdles", diff: 4.15},
    {id: 2126964545, name: "ToSTH", fname: "Tower of Scaling The Heights", diff: 4.86},
    {id: 2126964551, name: "ToSD", fname: "Tower of Slight Disappointment", diff: 5.18},
    {id: 2126964556, name: "ToBRO", fname: "Tower of Bitter Red Obstacles", diff: 5.44},
    {id: 2126979292, name: "ToAGA", fname: "Tower of A Green Adventure", diff: 5.71},
    {id: 2126979329, name: "ToRSS", fname: "Tower of Really Switching Sides", diff: 6.45},
    {id: 2126979350, name: "ToUC", fname: "Tower of Unforeseen Contraptions", diff: 6.26},
    {id: 2125043533, name: "ToEL", fname: "Tower of Expanding Layers", diff: 6.94},
    {id: 2126979382, name: "ToVS", fname: "Tower of Valiant Scaling", diff: 7.09},
    {id: 2126979393, name: "ToSC", fname: "Tower of Short Cruelty", diff: 7.37},
    {id: 2128776398, name: "ToOA", fname: "Tower of Oblique Annoyances", diff: 8.04},
    {id: 2127000418, name: "CoLF", fname: "Citadel of Looping Failure", diff: 7.99},
    // depth 4
    {id: 2128776414, name: "ToFS", fname: "Tower of Four Sections", diff: 1.85},
    {id: 2128776440, name: "ToSN", fname: "Tower of Safety Nets", diff: 2.02},
    {id: 2128776486, name: "ToSM", fname: "Tower of Simple Mechanisms", diff: 2.24},
    {id: 2128776563, name: "ToPD", fname: "Tower of Peaceful Dreams", diff: 2.71},
    {id: 2128791078, name: "ToBF", fname: "Tower of Blissful Flow", diff: 3.39},
    {id: 2128791096, name: "ToZG", fname: "Tower of Zingy Gaming", diff: 3.76},
    {id: 2128791109, name: "ToLOW", fname: "Tower of Length Over Width", diff: 4.17},
    {id: 2128791138, name: "ToBM", fname: "Tower of Blistering Malice", diff: 4.53},
    {id: 2128791158, name: "ToML", fname: "Tower of Momentary Leaping", diff: 4.92},
    {id: 2128813748, name: "ToARR", fname: "Tower of Adequately Revolutionary Rotation", diff: 5.19},
    {id: 2128813752, name: "ToSR", fname: "Tower of Stereotypical Reluctance", diff: 5.64},
    {id: 2128813766, name: "ToIP", fname: "Tower of Immense Pole", diff: 6.11},
    {id: 2128813769, name: "ToEI", fname: "Tower of Extreme Ire", diff: 6.78},
    {id: 2128813771, name: "ToOC", fname: "Tower of Obdurate Conception", diff: 9.51},
    {id: 2128830572, name: "ToUM", fname: "Tower of Umrah Market", diff: 10.35},
    {id: 2128862419, name: "CoO", fname: "Citadel of Opprobrium", diff: 5.73},
];

const depths = [
    {name: "Depth 1", req: 0, towers: [2124678042, 2124684994, 2124681954, 2124678046, 2124687766, 2124685563, 2124918609, 2124687572, 2124693933, 2124696570, 2124705869, 2124706258, 2124713067]},
    {name: "Depth 2", req: 4, towers: [2125043368, 2125043380, 2125043386, 2125043394, 2125043405, 2125043415, 2125043424, 2125043427, 2125043548, 2125043568, 2125043539, 2127000415, 2125043557]},
    {name: "Depth 3", req: 9, towers: [2126964536, 2126964538, 2126964540, 2126964545, 2126964551, 2126964556, 2126979292, 2126979329, 2126979350, 2125043533, 2126979382, 2126979393, 2128776398, 2127000418]},
    {name: "Depth 4", req: 14, towers: [2128776414, 2128776440, 2128776486, 2128776563, 2128791078, 2128791096, 2128791109, 2128791138, 2128791158, 2128813748, 2128813752, 2128813766, 2128813769, 2128813771, 2128830572, 2128862419]}
];

const subrealms = [
    {name: "Fogged Isles", towers: [2147096883, 2147096903, 2147096896, 2147096915, 2147096920, 2147112358, 2147112366, 2147112371, 2147112378, 2147112383, 2147176217, 2147176229]},
];

var easy = [];
var medium = [];
var hard = [];
var difficult = [];
var challenging = [];
var intense = [];
var remorseless = [];
var insane = [];
var extreme = [];
var terrifying = [];
var catastrophic = [];
var horrific = [];

const hex_map = {
    "Easy": "#00a808",
    "Medium": "#fcdb03",
    "Hard": "#fc8803",
    "Difficult": "#fc0303",
    "Challenging": "#570000",
    "Intense": "#121212",
    "Remorseless": "#ea00ff",
    "Insane": "#0011ff",
    "Extreme": "#0051ff",
    "Terrifying": "#00fffb",
    "Catastrophic": "#ffffff",
    "Horrific": "#f1abff"
}