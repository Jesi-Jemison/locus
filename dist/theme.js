'use strict';
const LOCUS_THEMES={
 clean:{palette:['#377d72','#dc7955','#839d51','#7488a9','#b29853','#a57d92','#5f9ca1','#cfaa85'],colour:'#173e3b'},
 synthwave:{palette:['#5de4df','#ff87c7','#9d9cff','#ffbe86','#95d3ff','#c89aff','#a8e4a0','#e5a0bb'],colour:'#18132e'},
 galaxy:{palette:['#9caaff','#85d9f0','#e1aedc','#90ceb3','#e6c791','#acc8eb','#d1bbef','#e8b8a4'],colour:'#0d1528'},
 gothic:{palette:['#d2b878','#b3c69d','#d5a5bd','#94bdb1','#ccc3a5','#aca1c4','#b7c9c6','#dfb199'],colour:'#111b17'},
 modern:{palette:['#087f8c','#5466a7','#ad547b','#7d892d','#bb7937','#438478','#805ca3','#547b9e'],colour:'#ffffff'}
};
function applyLocusTheme(name){if(!LOCUS_THEMES[name])name='synthwave';document.documentElement.dataset.theme=name;$('synthwaveStyles').disabled=name!=='synthwave';$('themeSelect').value=name;PALETTE=LOCUS_THEMES[name].palette;document.querySelector('meta[name="theme-color"]').content=LOCUS_THEMES[name].colour;try{localStorage.setItem('locus-theme',name);}catch(e){}baseGroup.eachLayer(l=>l.setStyle?.(themeMapStyle()));if(atlas){renderResults();renderLegend();drawMarkers();renderBoundaries();}document.dispatchEvent(new CustomEvent('locus:theme',{detail:name}));}
$('themeSelect').onchange=()=>applyLocusTheme($('themeSelect').value);applyLocusTheme(document.documentElement.dataset.theme||'synthwave');
