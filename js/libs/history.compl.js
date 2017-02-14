!function(e,t){"use strict";var a=e.History=e.History||{},r=e.jQuery;if("undefined"!=typeof a.Adapter)throw new Error("History.js Adapter has already been loaded...");a.Adapter={bind:function(e,t,a){r(e).bind(t,a)},trigger:function(e,t,a){r(e).trigger(t,a)},extractEventData:function(e,a,r){var n=a&&a.originalEvent&&a.originalEvent[e]||r&&r[e]||t;return n},onDomLoad:function(e){r(e)}},"undefined"!=typeof a.init&&a.init()}(window),function(e,t){"use strict";var a=e.document,r=e.setTimeout||r,n=e.clearTimeout||n,o=e.setInterval||o,s=e.History=e.History||{};if("undefined"!=typeof s.initHtml4)throw new Error("History.js HTML4 Support has already been loaded...");s.initHtml4=function(){return"undefined"==typeof s.initHtml4.initialized&&(s.initHtml4.initialized=!0,s.enabled=!0,s.savedHashes=[],s.isLastHash=function(e){var t,a=s.getHashByIndex();return t=e===a},s.isHashEqual=function(e,t){return e=encodeURIComponent(e).replace(/%25/g,"%"),t=encodeURIComponent(t).replace(/%25/g,"%"),e===t},s.saveHash=function(e){return!s.isLastHash(e)&&(s.savedHashes.push(e),!0)},s.getHashByIndex=function(e){var t=null;return t="undefined"==typeof e?s.savedHashes[s.savedHashes.length-1]:e<0?s.savedHashes[s.savedHashes.length+e]:s.savedHashes[e]},s.discardedHashes={},s.discardedStates={},s.discardState=function(e,t,a){var r,n=s.getHashByState(e);return r={discardedState:e,backState:a,forwardState:t},s.discardedStates[n]=r,!0},s.discardHash=function(e,t,a){var r={discardedHash:e,backState:a,forwardState:t};return s.discardedHashes[e]=r,!0},s.discardedState=function(e){var t,a=s.getHashByState(e);return t=s.discardedStates[a]||!1},s.discardedHash=function(e){var t=s.discardedHashes[e]||!1;return t},s.recycleState=function(e){var t=s.getHashByState(e);return s.discardedState(e)&&delete s.discardedStates[t],!0},s.emulated.hashChange&&(s.hashChangeInit=function(){s.checkerFunction=null;var t,r,n,i,u="",l=Boolean(s.getHash());return s.isInternetExplorer()?(t="historyjs-iframe",r=a.createElement("iframe"),r.setAttribute("id",t),r.setAttribute("src","#"),r.style.display="none",a.body.appendChild(r),r.contentWindow.document.open(),r.contentWindow.document.close(),n="",i=!1,s.checkerFunction=function(){if(i)return!1;i=!0;var t=s.getHash(),a=s.getHash(r.contentWindow.document);return t!==u?(u=t,a!==t&&(n=a=t,r.contentWindow.document.open(),r.contentWindow.document.close(),r.contentWindow.document.location.hash=s.escapeHash(t)),s.Adapter.trigger(e,"hashchange")):a!==n&&(n=a,l&&""===a?s.back():s.setHash(a,!1)),i=!1,!0}):s.checkerFunction=function(){var t=s.getHash()||"";return t!==u&&(u=t,s.Adapter.trigger(e,"hashchange")),!0},s.intervalList.push(o(s.checkerFunction,s.options.hashChangeInterval)),!0},s.Adapter.onDomLoad(s.hashChangeInit)),s.emulated.pushState&&(s.onHashChange=function(t){var a,r=t&&t.newURL||s.getLocationHref(),n=s.getHashByUrl(r),o=null,i=null;return s.isLastHash(n)?(s.busy(!1),!1):(s.doubleCheckComplete(),s.saveHash(n),n&&s.isTraditionalAnchor(n)?(s.Adapter.trigger(e,"anchorchange"),s.busy(!1),!1):(o=s.extractState(s.getFullUrl(n||s.getLocationHref()),!0),s.isLastSavedState(o)?(s.busy(!1),!1):(i=s.getHashByState(o),(a=s.discardedState(o))?(s.getHashByIndex(-2)===s.getHashByState(a.forwardState)?s.back(!1):s.forward(!1),!1):(s.pushState(o.data,o.title,encodeURI(o.url),!1),!0))))},s.Adapter.bind(e,"hashchange",s.onHashChange),s.pushState=function(t,a,r,n){if(r=encodeURI(r).replace(/%25/g,"%"),s.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(n!==!1&&s.busy())return s.pushQueue({scope:s,callback:s.pushState,args:arguments,queue:n}),!1;s.busy(!0);var o=s.createStateObject(t,a,r),i=s.getHashByState(o),u=s.getState(!1),l=s.getHashByState(u),d=s.getHash(),c=s.expectedStateId==o.id;return s.storeState(o),s.expectedStateId=o.id,s.recycleState(o),s.setTitle(o),i===l?(s.busy(!1),!1):(s.saveState(o),c||s.Adapter.trigger(e,"statechange"),s.isHashEqual(i,d)||s.isHashEqual(i,s.getShortUrl(s.getLocationHref()))||s.setHash(i,!1),s.busy(!1),!0)},s.replaceState=function(t,a,r,n){if(r=encodeURI(r).replace(/%25/g,"%"),s.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(n!==!1&&s.busy())return s.pushQueue({scope:s,callback:s.replaceState,args:arguments,queue:n}),!1;s.busy(!0);var o=s.createStateObject(t,a,r),i=s.getHashByState(o),u=s.getState(!1),l=s.getHashByState(u),d=s.getStateByIndex(-2);return s.discardState(u,o,d),i===l?(s.storeState(o),s.expectedStateId=o.id,s.recycleState(o),s.setTitle(o),s.saveState(o),s.Adapter.trigger(e,"statechange"),s.busy(!1)):s.pushState(o.data,o.title,o.url,!1),!0}),void(s.emulated.pushState&&s.getHash()&&!s.emulated.hashChange&&s.Adapter.onDomLoad(function(){s.Adapter.trigger(e,"hashchange")})))},"undefined"!=typeof s.init&&s.init()}(window),function(e,t){"use strict";var a=e.console||t,r=e.document,n=e.navigator,o=!1,s=e.setTimeout,i=e.clearTimeout,u=e.setInterval,l=e.clearInterval,d=e.JSON,c=e.alert,h=e.History=e.History||{},p=e.history;try{o=e.sessionStorage,o.setItem("TEST","1"),o.removeItem("TEST")}catch(e){o=!1}if(d.stringify=d.stringify||d.encode,d.parse=d.parse||d.decode,"undefined"!=typeof h.init)throw new Error("History.js Core has already been loaded...");h.init=function(e){return"undefined"!=typeof h.Adapter&&("undefined"!=typeof h.initCore&&h.initCore(),"undefined"!=typeof h.initHtml4&&h.initHtml4(),!0)},h.initCore=function(f){if("undefined"!=typeof h.initCore.initialized)return!1;if(h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||r.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if("undefined"!=typeof t&&null!==t){for(e=0;e<t.length;e++)l(t[e]);h.intervalList=null}},h.debug=function(){h.options.debug&&h.log.apply(h,arguments)},h.log=function(){var e,t,n,o,s,i=!("undefined"==typeof a||"undefined"==typeof a.log||"undefined"==typeof a.log.apply),u=r.getElementById("log");for(i?(o=Array.prototype.slice.call(arguments),e=o.shift(),"undefined"!=typeof a.debug?a.debug.apply(a,[e,o]):a.log.apply(a,[e,o])):e="\n"+arguments[0]+"\n",t=1,n=arguments.length;t<n;++t){if(s=arguments[t],"object"==typeof s&&"undefined"!=typeof d)try{s=d.stringify(s)}catch(e){}e+="\n"+s+"\n"}return u?(u.value+=e+"\n-----\n",u.scrollTop=u.scrollHeight-u.clientHeight):i||c(e),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached="undefined"!=typeof h.getInternetExplorerMajorVersion.cached?h.getInternetExplorerMajorVersion.cached:function(){for(var e=3,t=r.createElement("div"),a=t.getElementsByTagName("i");(t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&a[0];);return e>4&&e}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached="undefined"!=typeof h.isInternetExplorer.cached?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.options.html4Mode?h.emulated={pushState:!0,hashChange:!0}:h.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(n.userAgent)||/AppleWebKit\/5([0-2]|3[0-2])/i.test(n.userAgent))),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in r)||h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&&"Apple Computer, Inc."===n.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)),safariPoll:Boolean(!h.emulated.pushState&&"Apple Computer, Inc."===n.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<7)},h.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},h.cloneObject=function(e){var t,a;return e?(t=d.stringify(e),a=d.parse(t)):a={},a},h.getRootUrl=function(){var e=r.location.protocol+"//"+(r.location.hostname||r.location.host);return r.location.port&&(e+=":"+r.location.port),e+="/"},h.getBaseHref=function(){var e=r.getElementsByTagName("base"),t=null,a="";return 1===e.length&&(t=e[0],a=t.href.replace(/[^\/]+$/,"")),a=a.replace(/\/+$/,""),a&&(a+="/"),a},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e,t=h.getState(!1,!1),a=(t||{}).url||h.getLocationHref();return e=a.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,a){return/\./.test(e)?e:e+"/"})},h.getBasePageUrl=function(){var e=h.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,a){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},h.getFullUrl=function(e,t){var a=e,r=e.substring(0,1);return t="undefined"==typeof t||t,/[a-z]+\:\/\//.test(e)||(a="/"===r?h.getRootUrl()+e.replace(/^\/+/,""):"#"===r?h.getPageUrl().replace(/#.*/,"")+e:"?"===r?h.getPageUrl().replace(/[\?#].*/,"")+e:t?h.getBaseUrl()+e.replace(/^(\.\/)+/,""):h.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),a.replace(/\#$/,"")},h.getShortUrl=function(e){var t=e,a=h.getBaseUrl(),r=h.getRootUrl();return h.emulated.pushState&&(t=t.replace(a,"")),t=t.replace(r,"/"),h.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},h.getLocationHref=function(e){return e=e||r,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:e.URL.indexOf("#")==-1&&e.location.href.indexOf("#")!=-1?e.location.href:e.URL||e.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){"undefined"==typeof e&&(e=!0),"undefined"==typeof t&&(t=!0);var a=h.getLastSavedState();return!a&&t&&(a=h.createStateObject()),e&&(a=h.cloneObject(a),a.url=a.cleanUrl||a.url),a},h.getIdByState=function(e){var t,a=h.extractId(e.url);if(!a)if(t=h.getStateString(e),"undefined"!=typeof h.stateToId[t])a=h.stateToId[t];else if("undefined"!=typeof h.store.stateToId[t])a=h.store.stateToId[t];else{for(;;)if(a=(new Date).getTime()+String(Math.random()).replace(/\D/g,""),"undefined"==typeof h.idToState[a]&&"undefined"==typeof h.store.idToState[a])break;h.stateToId[t]=a,h.idToState[a]=e}return a},h.normalizeState=function(e){var t,a;return e&&"object"==typeof e||(e={}),"undefined"!=typeof e.normalized?e:(e.data&&"object"==typeof e.data||(e.data={}),t={},t.normalized=!0,t.title=e.title||"",t.url=h.getFullUrl(e.url?e.url:h.getLocationHref()),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,a=!h.isEmptyObject(t.data),(t.title||a)&&h.options.disableSuid!==!0&&(t.hash=h.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t)},h.createStateObject=function(e,t,a){var r={data:e,title:t,url:a};return r=h.normalizeState(r)},h.getStateById=function(e){e=String(e);var a=h.idToState[e]||h.store.idToState[e]||t;return a},h.getStateString=function(e){var t,a,r;return t=h.normalizeState(e),a={data:t.data,title:e.title,url:e.url},r=d.stringify(a)},h.getStateId=function(e){var t,a;return t=h.normalizeState(e),a=t.id},h.getHashByState=function(e){var t,a;return t=h.normalizeState(e),a=t.hash},h.extractId=function(e){var t,a,r,n;return n=e.indexOf("#")!=-1?e.split("#")[0]:e,a=/(.*)\&_suid=([0-9]+)$/.exec(n),r=a?a[1]||e:e,t=a?String(a[2]||""):"",t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var a,r,n=null;return t=t||!1,a=h.extractId(e),a&&(n=h.getStateById(a)),n||(r=h.getFullUrl(e),a=h.getIdByUrl(r)||!1,a&&(n=h.getStateById(a)),n||!t||h.isTraditionalAnchor(e)||(n=h.createStateObject(null,null,r))),n},h.getIdByUrl=function(e){var a=h.urlToId[e]||h.store.urlToId[e]||t;return a},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t,a=!1;return t=h.extractState(e.url),a=t&&t.id!==e.id},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t,a,r,n=!1;return h.savedStates.length&&(t=e.id,a=h.getLastSavedState(),r=a.id,n=t===r),n},h.saveState=function(e){return!h.isLastSavedState(e)&&(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return t="undefined"==typeof e?h.savedStates[h.savedStates.length-1]:e<0?h.savedStates[h.savedStates.length+e]:h.savedStates[e]},h.getCurrentIndex=function(){var e=null;return e=h.savedStates.length<1?0:h.savedStates.length-1},h.getHash=function(e){var t,a=h.getLocationHref(e);return t=h.getHashByUrl(a)},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=decodeURIComponent(t)},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},h.setHash=function(e,t){var a,n;return t!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(h.busy(!0),a=h.extractState(e,!0),a&&!h.emulated.pushState?h.pushState(a.data,a.title,a.url,!1):h.getHash()!==e&&(h.bugs.setHash?(n=h.getPageUrl(),h.pushState(null,null,n+"#"+e,!1)):r.location.hash=e),h)},h.escapeHash=function(t){var a=h.normalizeHash(t);return a=e.encodeURIComponent(a),h.bugs.hashEscape||(a=a.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),a},h.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=h.unescapeHash(t)},h.setTitle=function(e){var t,a=e.title;a||(t=h.getStateByIndex(0),t&&t.url===e.url&&(a=t.title||h.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=a.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return r.title=a,h},h.queues=[],h.busy=function(e){if("undefined"!=typeof e?h.busy.flag=e:"undefined"==typeof h.busy.flag&&(h.busy.flag=!1),!h.busy.flag){i(h.busy.timeout);var t=function(){var e,a,r;if(!h.busy.flag)for(e=h.queues.length-1;e>=0;--e)a=h.queues[e],0!==a.length&&(r=a.shift(),h.fireQueueItem(r),h.busy.timeout=s(t,h.options.busyDelay))};h.busy.timeout=s(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return"function"==typeof e&&(e={callback:e}),"undefined"!=typeof t&&(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(i(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=s(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t,a=h.extractState(h.getLocationHref());if(!h.isLastSavedState(a))return t=a,t||(t=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h},h.back=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var a;if(e>0)for(a=1;a<=e;++a)h.forward(t);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(a=-1;a>=e;--a)h.back(t)}return h},h.emulated.pushState){var g=function(){};h.pushState=h.pushState||g,h.replaceState=h.replaceState||g}else h.onPopState=function(t,a){var r,n,o=!1,s=!1;return h.doubleCheckComplete(),(r=h.getHash())?(n=h.extractState(r||h.getLocationHref(),!0),n?h.replaceState(n.data,n.title,n.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(o=h.Adapter.extractEventData("state",t,a)||!1,s=o?h.getStateById(o):h.expectedStateId?h.getStateById(h.expectedStateId):h.extractState(h.getLocationHref()),s||(s=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(s)?(h.busy(!1),!1):(h.storeState(s),h.saveState(s),h.setTitle(s),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t,a,r,n){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(n!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:n}),!1;h.busy(!0);var o=h.createStateObject(t,a,r);return h.isLastSavedState(o)?h.busy(!1):(h.storeState(o),h.expectedStateId=o.id,p.pushState(o.id,o.title,o.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t,a,r,n){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(n!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:n}),!1;h.busy(!0);var o=h.createStateObject(t,a,r);return h.isLastSavedState(o)?h.busy(!1):(h.storeState(o),h.expectedStateId=o.id,p.replaceState(o.id,o.title,o.url),h.Adapter.trigger(e,"popstate")),!0};if(o){try{h.store=d.parse(o.getItem("History.store"))||{}}catch(e){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),o&&(h.onUnload=function(){var e,t,a;try{e=d.parse(o.getItem("History.store"))||{}}catch(t){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState)h.idToState.hasOwnProperty(t)&&(e.idToState[t]=h.idToState[t]);for(t in h.urlToId)h.urlToId.hasOwnProperty(t)&&(e.urlToId[t]=h.urlToId[t]);for(t in h.stateToId)h.stateToId.hasOwnProperty(t)&&(e.stateToId[t]=h.stateToId[t]);h.store=e,h.normalizeStore(),a=d.stringify(e);try{o.setItem("History.store",a)}catch(e){if(e.code!==DOMException.QUOTA_EXCEEDED_ERR)throw e;o.length&&(o.removeItem("History.store"),o.setItem("History.store",a))}},h.intervalList.push(u(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload)),h.emulated.pushState||(h.bugs.safariPoll&&h.intervalList.push(u(h.safariStatePoll,h.options.safariPollInterval)),"Apple Computer, Inc."!==n.vendor&&"Mozilla"!==(n.appCodeName||"")||(h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})))},h.options&&h.options.delayInit||h.init()}(window);