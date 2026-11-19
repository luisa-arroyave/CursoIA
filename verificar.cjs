const fs=require('node:fs/promises'),cp=require('node:child_process'),assert=require('node:assert/strict'),path=require('node:path');
(async()=>{
const dir=__dirname,profile=path.join(dir,'.qa-profile');await fs.mkdir(profile,{recursive:true});
const browser=cp.spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check','--remote-debugging-port=9227','--user-data-dir='+profile,'about:blank'],{windowsHide:true,stdio:'ignore'});
let ws;
try{
let targets;for(let i=0;i<60;i++){try{targets=await(await fetch('http://127.0.0.1:9227/json/list')).json();if(targets.length)break}catch{}await new Promise(r=>setTimeout(r,150))}
if(!targets?.length)throw Error('Chrome did not start');
ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j});
let id=0;const pending=new Map();ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);if(p){pending.delete(m.id);m.error?p.reject(Error(JSON.stringify(m.error))):p.resolve(m.result)}}};
function send(method,params={}){return new Promise((resolve,reject)=>{const n=++id;pending.set(n,{resolve,reject});ws.send(JSON.stringify({id:n,method,params}));setTimeout(()=>{if(pending.delete(n))reject(Error('Timeout: '+method))},30000).unref()})}
async function ev(expression){const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.text+': '+JSON.stringify(r.exceptionDetails.exception));return r.result.value}
async function click(s){return ev('document.querySelector('+JSON.stringify(s)+').click()')}
async function set(s,value,event='change'){return ev('(()=>{const e=document.querySelector('+JSON.stringify(s)+');e.value='+JSON.stringify(value)+';e.dispatchEvent(new Event('+JSON.stringify(event)+',{bubbles:true}));})()')}
let passed=[];async function check(name,expression,expected){assert.deepEqual(await ev(expression),expected,name);passed.push(name)}
await send('Page.enable');await send('Runtime.enable');await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1100,deviceScaleFactor:1,mobile:false});
await send('Page.navigate',{url:'http://127.0.0.1:8765/'});await new Promise(r=>setTimeout(r,1000));
await check('Six platform cards','document.querySelectorAll(".card").length',6);
await check('No horizontal overflow on desktop','document.documentElement.scrollWidth<=innerWidth',true);
await set('#search','reservas','input');await check('Search by solution','document.querySelectorAll(".card").length',1);
await click('[data-action="clear"]');await click('[data-select="chatgpt_sites"]');await click('[data-select="lovable"]');await click('[data-select="vercel"]');await click('[data-select="github_pages"]');
await check('Selection capped at three','state.selected.size',3);await check('Fourth selection visibly refused','document.querySelector("#toast").hidden',false);await check('Fourth checkbox reset','document.querySelector("[data-select=github_pages]").checked',false);
await click('[data-view="compare"]');await check('Detailed comparison has at most three platforms','document.querySelectorAll(".compare-detail thead th").length',4);
await check('Matrix has all eleven capabilities','document.querySelectorAll(".table-wrap:not(.compare-detail) tbody tr").length',11);
await click('[data-cell="vercel:database"]');await check('Matrix cell opens explanation','document.querySelector("#detail-dialog").open',true);await check('Cell has official source','document.querySelectorAll("#detail-body a[href^=https]").length',1);await click('[data-close="detail-dialog"]');
await set('#project','global');await check('Shared filters reduce chart rows','document.querySelectorAll(".stack-row").length',2);
await check('Selection survives filtering','state.selected.size',3);await click('[data-remove="lovable"]');await check('Removing preserves filter','state.project','global');
await click('[data-action="clear"]');await click('[data-action="clear-selection"]');await click('[data-view="explore"]');
await click('[data-need="user_accounts"]');await check('Login requirement excludes native-unavailable Pages','document.querySelectorAll(".card").length',5);
await click('[data-action="clear"]');await set('#project','light');await set('#cost','free');await check('Empty state','document.querySelectorAll(".empty").length',1);
await click('[data-action="clear"]');await click('[data-view="costs"]');await check('Six cost cards','document.querySelectorAll(".price-card").length',6);
await click('[data-view="sources"]');await check('All 25 official sources','document.querySelectorAll(".source-links a").length',25);
await click('[data-action="assistant"]');await click('[data-answer="3"]');await click('[data-wizard="next"]');await click('[data-answer="0"]');await click('[data-wizard="next"]');await click('[data-answer="1"]');await click('[data-wizard="next"]');await check('Global recommendation and alternative','document.querySelectorAll(".result-card").length',2);await click('[data-wizard="compare"]');await check('Assistant transfers selection','[...state.selected]',['cloudflare','vercel']);
await click('[data-action="assistant"]');await click('[data-answer="2"]');await click('[data-wizard="next"]');await click('[data-answer="3"]');await click('[data-wizard="next"]');await click('[data-answer="0"]');await click('[data-wizard="next"]');await check('Enterprise requirements block automatic recommendation','document.querySelectorAll(".result-card").length',0);await check('Enterprise warning is visible','document.querySelector("#assistant-body").textContent.includes("Antes de publicar, valida el plan")',true);
await click('[data-wizard="restart"]');await click('[data-answer="0"]');await click('[data-wizard="next"]');await click('[data-answer="0"]');await click('[data-wizard="next"]');await click('[data-answer="0"]');await click('#sensitive');await click('[data-wizard="next"]');await check('Sensitive data block automatic recommendation','document.querySelectorAll(".result-card").length',0);await click('[data-close="assistant-dialog"]');
await click('[data-action="clear-selection"]');await click('[data-view="explore"]');await click('[data-action="clear"]');
await ev('document.querySelector("#toast").hidden=true;window.scrollTo(0,0)');await new Promise(r=>setTimeout(r,400));let shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});await fs.writeFile(path.join(dir,'vista-escritorio.png'),Buffer.from(shot.data,'base64'));
await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await new Promise(r=>setTimeout(r,150));
await check('No horizontal overflow on mobile','document.documentElement.scrollWidth<=innerWidth',true);await click('#filter-toggle');await check('Mobile filters expand','document.querySelector("#filters").classList.contains("open")',true);await click('#filter-toggle');
await ev('window.scrollTo(0,0)');await new Promise(r=>setTimeout(r,400));shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});await fs.writeFile(path.join(dir,'vista-movil.png'),Buffer.from(shot.data,'base64'));
await fs.writeFile(path.join(dir,'verificacion.json'),JSON.stringify({passed:passed.length,checks:passed},null,2));console.log(JSON.stringify({passed:passed.length,checks:passed},null,2));
await send('Browser.close');
}catch(e){console.error(e);process.exitCode=1}finally{ws?.close();browser.kill()}
})();