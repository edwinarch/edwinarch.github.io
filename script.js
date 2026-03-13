const lotteryData = [
    // { date: "2025-mm-dd", mediodia: "--", tarde: "--", noche: "--" },
    /*
    { date: "2025-01-31", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-30", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-29", mediodia: "--", tarde: "--", noche: "--" },   
    { date: "2025-01-28", mediodia: "--", tarde: "--", noche: "--" },  
    { date: "2025-01-27", mediodia: "--", tarde: "--", noche: "--" },   
    { date: "2025-01-26", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-25", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-24", mediodia: "--", tarde: "--", noche: "--" },
    { date: "2025-01-23", mediodia: "--", tarde: "--", noche: "--" },*/
    { date: "2025-01-22", mediodia: "44", tarde: "--", noche: "--" },
    { date: "2025-01-21", mediodia: "14", tarde: "23", noche: "95" },
    { date: "2025-01-20", mediodia: "36", tarde: "07", noche: "45" },
    { date: "2025-01-19", mediodia: "39", tarde: "69", noche: "36" },
    { date: "2025-01-18", mediodia: "20", tarde: "32", noche: "76" },
    { date: "2025-01-17", mediodia: "65", tarde: "13", noche: "27" },
    { date: "2025-01-16", mediodia: "16", tarde: "45", noche: "83" },
    { date: "2025-01-15", mediodia: "19", tarde: "34", noche: "09" },
    { date: "2025-01-14", mediodia: "76", tarde: "61", noche: "42" },
    { date: "2025-01-13", mediodia: "00", tarde: "24", noche: "95" },
    { date: "2025-01-12", mediodia: "41", tarde: "85", noche: "13" },
    { date: "2025-01-11", mediodia: "18", tarde: "44", noche: "13" },
    { date: "2025-01-10", mediodia: "71", tarde: "57", noche: "46" },
    { date: "2025-01-09", mediodia: "05", tarde: "37", noche: "21" },
    { date: "2025-01-08", mediodia: "08", tarde: "21", noche: "51" },
    { date: "2025-01-07", mediodia: "70", tarde: "34", noche: "42" },
    { date: "2025-01-06", mediodia: "63", tarde: "02", noche: "70" },
    { date: "2025-01-05", mediodia: "51", tarde: "43", noche: "90" },
    { date: "2025-01-04", mediodia: "97", tarde: "40", noche: "97" },
    { date: "2025-01-03", mediodia: "48", tarde: "32", noche: "63" },
    { date: "2025-01-02", mediodia: "33", tarde: "42", noche: "76" }
    // 更多数据 Create more data
];
//datas
function _0x411e(_0xf8bf0c,_0x4bc2e4){const _0x3001cc=_0x3001();return _0x411e=function(_0x411e72,_0x1043b7){_0x411e72=_0x411e72-0x128;let _0x54ecf0=_0x3001cc[_0x411e72];return _0x54ecf0;},_0x411e(_0xf8bf0c,_0x4bc2e4);}const _0x3c14e4=_0x411e;(function(_0x5b1cba,_0x5890e8){const _0x26505c=_0x411e,_0x5de62d=_0x5b1cba();while(!![]){try{const _0x33c2f3=parseInt(_0x26505c(0x151))/0x1*(parseInt(_0x26505c(0x143))/0x2)+parseInt(_0x26505c(0x147))/0x3*(parseInt(_0x26505c(0x152))/0x4)+-parseInt(_0x26505c(0x12a))/0x5+-parseInt(_0x26505c(0x14d))/0x6+-parseInt(_0x26505c(0x12f))/0x7*(parseInt(_0x26505c(0x13d))/0x8)+parseInt(_0x26505c(0x149))/0x9*(-parseInt(_0x26505c(0x154))/0xa)+parseInt(_0x26505c(0x144))/0xb*(parseInt(_0x26505c(0x141))/0xc);if(_0x33c2f3===_0x5890e8)break;else _0x5de62d['push'](_0x5de62d['shift']());}catch(_0x502013){_0x5de62d['push'](_0x5de62d['shift']());}}}(_0x3001,0xe255d));const daySelector=document[_0x3c14e4(0x134)]('daySelector'),monthSelector=document[_0x3c14e4(0x134)]('monthSelector'),searchButton=document[_0x3c14e4(0x134)](_0x3c14e4(0x133)),resultsDiv=document[_0x3c14e4(0x13e)]('.results');function init(){const _0xd003e=_0x3c14e4,_0x497005=0x1f;for(let _0x46f86c=0x1;_0x46f86c<=_0x497005;_0x46f86c++){const _0x3ed359=document[_0xd003e(0x135)](_0xd003e(0x13b));_0x3ed359[_0xd003e(0x153)]=_0x46f86c[_0xd003e(0x142)]()['padStart'](0x2,'0'),_0x3ed359[_0xd003e(0x132)]=_0x46f86c,daySelector[_0xd003e(0x13f)](_0x3ed359);}displayResults(lotteryData);}function displayResults(_0x526608){const _0x1fc89e=_0x3c14e4;resultsDiv[_0x1fc89e(0x14e)]='';if(_0x526608[_0x1fc89e(0x14c)]===0x0){resultsDiv[_0x1fc89e(0x14e)]='<p>No\x20hay\x20resultados\x20disponibles.</p>';return;}_0x526608[_0x1fc89e(0x155)](_0x19e5a8=>{const _0xa7ff40=_0x1fc89e,_0xd09c6=document[_0xa7ff40(0x135)](_0xa7ff40(0x145));_0xd09c6[_0xa7ff40(0x12c)]='result-item';const [_0x282791,_0xabfd63,_0x2d6913]=_0x19e5a8[_0xa7ff40(0x139)][_0xa7ff40(0x156)]('-'),_0x5a7345=_0x2d6913+'/'+_0xabfd63+'/'+_0x282791;_0xd09c6[_0xa7ff40(0x14e)]=_0xa7ff40(0x130)+_0x5a7345+'</strong></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Mediodía:\x20'+_0x19e5a8['mediodia']+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Tarde:\x20'+_0x19e5a8['tarde']+_0xa7ff40(0x14a)+_0x19e5a8[_0xa7ff40(0x129)]+_0xa7ff40(0x14f),resultsDiv['appendChild'](_0xd09c6);});}function _0x3001(){const _0x3df9d1=['date','https://carlosw-sky.github.io/Historial/2019/','option','href','166672oDgGbR','querySelector','appendChild','click','12VnurpN','toString','2zDozvA','18110081FFOykM','div','https://carlosw-sky.github.io/Historial/2024/','1900677rmHMDe','filter','1356777hPuIer','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Noche:\x20','https://carlosw-sky.github.io/Historial/2016/','length','8823768WhhclR','innerHTML','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','change','1231831wYjSmb','4QbvLxA','value','60UfKIBU','forEach','split','location','noche','631050WNmQLx','https://carlosw-sky.github.io','className','https://carlosw-sky.github.io/Historial/2013/','padStart','28OilMhX','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><strong>','addEventListener','textContent','searchButton','getElementById','createElement','2025-','https://carlosw-sky.github.io/Historial/2017/','https://carlosw-sky.github.io/Historial/2015/'];_0x3001=function(){return _0x3df9d1;};return _0x3001();}function filterResults(){const _0x5865ed=_0x3c14e4,_0x47caf5=monthSelector['value'][_0x5865ed(0x12e)](0x2,'0'),_0x286969=daySelector[_0x5865ed(0x153)][_0x5865ed(0x12e)](0x2,'0'),_0x3f623b=_0x5865ed(0x136)+_0x47caf5+'-'+_0x286969,_0x3d86f7=lotteryData[_0x5865ed(0x148)](_0x48824e=>_0x48824e['date']<=_0x3f623b);displayResults(_0x3d86f7);}init(),searchButton['addEventListener'](_0x3c14e4(0x140),filterResults),document['getElementById']('yearSelector')[_0x3c14e4(0x131)](_0x3c14e4(0x150),function(){const _0x542576=_0x3c14e4,_0x3a82f8=this[_0x542576(0x153)],_0x223899={'2025':_0x542576(0x12b),'2024':_0x542576(0x146),'2023':'https://carlosw-sky.github.io/Historial/2023/','2022':'https://carlosw-sky.github.io/Historial/2022/','2021':'https://carlosw-sky.github.io/Historial/2021/','2020':'https://carlosw-sky.github.io/Historial/2020/','2019':_0x542576(0x13a),'2018':'https://carlosw-sky.github.io/Historial/2018/','2017':_0x542576(0x137),'2016':_0x542576(0x14b),'2015':_0x542576(0x138),'2014':'https://carlosw-sky.github.io/Historial/2014/','2013':_0x542576(0x12d)};_0x223899[_0x3a82f8]?window[_0x542576(0x128)][_0x542576(0x13c)]=_0x223899[_0x3a82f8]:alert('URL\x20no\x20está\x20configurada\x20para\x20el\x20año\x20seleccionado.');});