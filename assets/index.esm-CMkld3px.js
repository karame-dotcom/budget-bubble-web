import{$ as ie,K as se,e as P,x as ae,n as ce,O as k,L as le,W as ue,a0 as de,l as L,X as z,a1 as he,i as H,R as O,r as fe}from"./index.esm-D26K7ylu.js";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Map,q={activated:!1,tokenObservers:[]},pe={initialized:!1,enabled:!1};function l(e){return y.get(e)||{...q}}function ge(e,t){return y.set(e,t),y.get(e)}function _(){return pe}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I="https://content-firebaseappcheck.googleapis.com/v1",ke="exchangeRecaptchaV3Token",Te="exchangeRecaptchaEnterpriseToken",me="exchangeDebugToken",F={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},we=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,r,n,o,i){if(this.operation=t,this.retryPolicy=r,this.getWaitDuration=n,this.lowerBound=o,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=o,o>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new k,this.pending.promise.catch(r=>{}),await be(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new k,this.pending.promise.catch(r=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(r){this.retryPolicy(r)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const r=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),r}}}function be(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},d=new se("appCheck","AppCheck",Ae);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e=!1){var t;return e?(t=self.grecaptcha)==null?void 0:t.enterprise:self.grecaptcha}function D(e){if(!l(e).activated)throw d.create("use-before-activation",{appName:e.name})}function S(e){const t=Math.round(e/1e3),r=Math.floor(t/(3600*24)),n=Math.floor((t-r*3600*24)/3600),o=Math.floor((t-r*3600*24-n*3600)/60),i=t-r*3600*24-n*3600-o*60;let s="";return r&&(s+=m(r)+"d:"),n&&(s+=m(n)+"h:"),s+=m(o)+"m:"+m(i)+"s",s}function m(e){return e===0?"00":e>=10?e.toString():"0"+e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C({url:e,body:t},r){const n={"Content-Type":"application/json"},o=r.getImmediate({optional:!0});if(o){const h=await o.getHeartbeatsHeader();h&&(n["X-Firebase-Client"]=h)}const i={method:"POST",body:JSON.stringify(t),headers:n};let s;try{s=await fetch(e,i)}catch(h){throw d.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(s.status!==200)throw d.create("fetch-status-error",{httpStatus:s.status});let a;try{a=await s.json()}catch(h){throw d.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const u=a.ttl.match(/^([\d.]+)(s)$/);if(!u||!u[2]||isNaN(Number(u[1])))throw d.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const c=Number(u[1])*1e3,p=Date.now();return{token:a.token,expireTimeMillis:p+c,issuedAtTimeMillis:p}}function _e(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${I}/projects/${r}/apps/${n}:${ke}?key=${o}`,body:{recaptcha_v3_token:t}}}function Ce(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${I}/projects/${r}/apps/${n}:${Te}?key=${o}`,body:{recaptcha_enterprise_token:t}}}function j(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${I}/projects/${r}/apps/${n}:${me}?key=${o}`,body:{debug_token:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="firebase-app-check-database",ve=1,T="firebase-app-check-store",W="debug-token";let w=null;function U(){return w||(w=new Promise((e,t)=>{try{const r=indexedDB.open(Re,ve);r.onsuccess=n=>{e(n.target.result)},r.onerror=n=>{var o;t(d.create("storage-open",{originalErrorMessage:(o=n.target.error)==null?void 0:o.message}))},r.onupgradeneeded=n=>{const o=n.target.result;switch(n.oldVersion){case 0:o.createObjectStore(T,{keyPath:"compositeKey"})}}}catch(r){t(d.create("storage-open",{originalErrorMessage:r==null?void 0:r.message}))}}),w)}function ye(e){return X(V(e))}function Pe(e,t){return G(V(e),t)}function Ie(e){return G(W,e)}function De(){return X(W)}async function G(e,t){const n=(await U()).transaction(T,"readwrite"),i=n.objectStore(T).put({compositeKey:e,value:t});return new Promise((s,a)=>{i.onsuccess=u=>{s()},n.onerror=u=>{var c;a(d.create("storage-set",{originalErrorMessage:(c=u.target.error)==null?void 0:c.message}))}})}async function X(e){const r=(await U()).transaction(T,"readonly"),o=r.objectStore(T).get(e);return new Promise((i,s)=>{o.onsuccess=a=>{const u=a.target.result;i(u?u.value:void 0)},r.onerror=a=>{var u;s(d.create("storage-get",{originalErrorMessage:(u=a.target.error)==null?void 0:u.message}))}})}function V(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=new le("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(e){if(z()){let t;try{t=await ye(e)}catch(r){f.warn(`Failed to read token from IndexedDB. Error: ${r}`)}return t}}function R(e,t){return z()?Pe(e,t).catch(r=>{f.warn(`Failed to write token to IndexedDB. Error: ${r}`)}):Promise.resolve()}async function $e(e){let t;try{t=await De()}catch{}if(t)return t;{const r=crypto.randomUUID();let n=`To use this token for app debugging, register it with your project.

Firebase App Check debug token: ${r}

`;const o=e==null?void 0:e.options.appId,i=e==null?void 0:e.options.projectId;return i&&o?n+=`You can do so in the Firebase Console:
https://console.firebase.google.com/project/${i}/appcheck/apps?selectedAppId=${o}

Or using the Firebase CLI:
firebase appcheck:debugtokens:create ${r} --project ${i} --app ${o}

`:n+=`You will need to add it to your app's App Check settings in the Firebase Console for it to work.

`,n+=`Note: To keep your project secure, please revoke and delete this token using the
Firebase Console or the CLI (\`firebase appcheck:debugtokens:delete\`) when you finish debugging.

Warning: This debug token is a secret and should not be shared or uploaded to source code.

Debug Token Guide: https://firebase.google.com/docs/app-check/web/debug-provider
Firebase CLI install instructions: https://firebase.google.com/docs/cli
`,console.log(n),Ie(r).catch(s=>f.warn(`Failed to persist debug token to IndexedDB. Error: ${s}`)),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return _().enabled}async function x(){const e=_();if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function xe(e){const t=ue(),r=_();if(r.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;r.enabled=!0;const n=new k;r.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve($e(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me={error:"UNKNOWN_ERROR"};function Ne(e){return he.encodeString(JSON.stringify(e),!1)}async function b(e,t=!1,r=!1){const n=e.app;D(n);const o=l(n);let i=o.token,s;if(i&&!g(i)&&(o.token=void 0,i=void 0),!i){const c=await o.cachedTokenPromise;c&&(g(c)?i=c:await R(n,void 0))}if(!t&&i&&g(i))return{token:i.token};let a=!1;if($())try{const c=await x();o.exchangeTokenPromise||(o.exchangeTokenPromise=C(j(n,c),e.heartbeatServiceProvider).finally(()=>{o.exchangeTokenPromise=void 0}),a=!0);const p=await o.exchangeTokenPromise;return await R(n,p),o.token=p,{token:p.token}}catch(c){return c.code==="appCheck/throttled"||c.code==="appCheck/initial-throttle"?f.warn(c.message):r&&f.error(c),v(c)}try{o.exchangeTokenPromise||(o.exchangeTokenPromise=o.provider.getToken().finally(()=>{o.exchangeTokenPromise=void 0}),a=!0),i=await l(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"||c.code==="appCheck/initial-throttle"?f.warn(c.message):r&&f.error(c),s=c}let u;return i?s?g(i)?u={token:i.token,internalError:s}:u=v(s):(u={token:i.token},o.token=i,await R(n,i)):u=v(s),a&&J(n,u),u}async function Y(e){const t=e.app;D(t);const{provider:r}=l(t);if($()){const n=await x(),o=j(t,n);o.body.limited_use=!0;const{token:i}=await C(o,e.heartbeatServiceProvider);return{token:i}}else{const{token:n}=await r.getToken(!0);return{token:n}}}function M(e,t,r,n){const{app:o}=e,i=l(o),s={next:r,error:n,type:t};if(i.tokenObservers=[...i.tokenObservers,s],i.token&&g(i.token)){const a=i.token;Promise.resolve().then(()=>{r({token:a.token}),B(e)}).catch(()=>{})}i.cachedTokenPromise.then(()=>B(e))}function N(e,t){const r=l(e),n=r.tokenObservers.filter(o=>o.next!==t);n.length===0&&r.tokenRefresher&&r.tokenRefresher.isRunning()&&r.tokenRefresher.stop(),r.tokenObservers=n}function B(e){const{app:t}=e,r=l(t);let n=r.tokenRefresher;n||(n=He(e),r.tokenRefresher=n),!n.isRunning()&&r.isTokenAutoRefreshEnabled&&n.start()}function He(e){const{app:t}=e;return new Ee(async()=>{const r=l(t);let n;if(r.token?n=await b(e,!0):n=await b(e),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const r=l(t);if(r.token){let n=r.token.issuedAtTimeMillis+(r.token.expireTimeMillis-r.token.issuedAtTimeMillis)*.5+3e5;const o=r.token.expireTimeMillis-5*60*1e3;return n=Math.min(n,o),Math.max(0,n-Date.now())}else return 0},F.RETRIAL_MIN_WAIT,F.RETRIAL_MAX_WAIT)}function J(e,t){const r=l(e).tokenObservers;for(const n of r)try{n.type==="EXTERNAL"&&t.error!=null?n.error(t.error):n.next(t)}catch{}}function g(e){return e.expireTimeMillis-Date.now()>0}function v(e){return{token:Ne(Me),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,r){this.app=t,this.heartbeatServiceProvider=r}_delete(){const{tokenObservers:t}=l(this.app);for(const r of t)N(this.app,r.next);return Promise.resolve()}}function Fe(e,t){return new Oe(e,t)}function Be(e){return{getToken:t=>b(e,t),getLimitedUseToken:()=>Y(e),addTokenListener:t=>M(e,"INTERNAL",t),removeTokenListener:t=>N(e.app,t)}}const Ke="@firebase/app-check",Le="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="https://www.google.com/recaptcha/api.js",qe="https://www.google.com/recaptcha/enterprise.js";function je(e,t){const r=new k,n=l(e);n.reCAPTCHAState={initialized:r};const o=Q(e),i=E(!1);return i?A(e,t,i,o,r):Ge(()=>{const s=E(!1);if(!s)throw new Error("no recaptcha");A(e,t,s,o,r)}),r.promise}function We(e,t){const r=new k,n=l(e);n.reCAPTCHAState={initialized:r};const o=Q(e),i=E(!0);return i?A(e,t,i,o,r):Xe(()=>{const s=E(!0);if(!s)throw new Error("no recaptcha");A(e,t,s,o,r)}),r.promise}function A(e,t,r,n,o){r.ready(()=>{Ue(e,t,r,n),o.resolve(r)})}function Q(e){const t=`fire_app_check_${e.name}`,r=document.createElement("div");return r.id=t,r.style.display="none",document.body.appendChild(r),t}async function Z(e){D(e);const r=await l(e).reCAPTCHAState.initialized.promise;return new Promise((n,o)=>{const i=l(e).reCAPTCHAState;r.ready(()=>{n(r.execute(i.widgetId,{action:"fire_app_check"}))})})}function Ue(e,t,r,n){const o=r.render(n,{sitekey:t,size:"invisible",callback:()=>{l(e).reCAPTCHAState.succeeded=!0},"error-callback":()=>{l(e).reCAPTCHAState.succeeded=!1}}),i=l(e);i.reCAPTCHAState={...i.reCAPTCHAState,widgetId:o}}function Ge(e){const t=document.createElement("script");L(t,ze),t.onload=e,document.head.appendChild(t)}function Xe(e){const t=document.createElement("script");L(t,qe+"?render=explicit"),t.onload=e,document.head.appendChild(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(t=!1){var o,i,s;oe(this._throttleData);const r=await Z(this._app).catch(a=>{throw d.create("recaptcha-error")});if(!((o=l(this._app).reCAPTCHAState)!=null&&o.succeeded))throw d.create("recaptcha-error");let n;try{const a=_e(this._app,r);t&&(a.body.limited_use=!0),n=await C(a,this._heartbeatServiceProvider)}catch(a){throw(i=a.code)!=null&&i.includes("fetch-status-error")?(this._throttleData=ne(Number((s=a.customData)==null?void 0:s.httpStatus),this._throttleData),d.create("initial-throttle",{time:S(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):a}return this._throttleData=null,n}initialize(t){this._app=t,this._heartbeatServiceProvider=P(t,"heartbeat"),je(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof ee?this._siteKey===t._siteKey:!1}}class te{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(t=!1){var o,i,s;oe(this._throttleData);const r=await Z(this._app).catch(a=>{throw d.create("recaptcha-error")});if(!((o=l(this._app).reCAPTCHAState)!=null&&o.succeeded))throw d.create("recaptcha-error");let n;try{const a=Ce(this._app,r);t&&(a.body.limited_use=!0),n=await C(a,this._heartbeatServiceProvider)}catch(a){throw(i=a.code)!=null&&i.includes("fetch-status-error")?(this._throttleData=ne(Number((s=a.customData)==null?void 0:s.httpStatus),this._throttleData),d.create("initial-throttle",{time:S(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):a}return this._throttleData=null,n}initialize(t){this._app=t,this._heartbeatServiceProvider=P(t,"heartbeat"),We(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof te?this._siteKey===t._siteKey:!1}}class re{constructor(t){this._customProviderOptions=t}async getToken(){const t=await this._customProviderOptions.getToken(),r=ie(t.token),n=r!==null&&r<Date.now()&&r>0?r*1e3:Date.now();return{...t,issuedAtTimeMillis:n}}initialize(t){this._app=t}isEqual(t){return t instanceof re?this._customProviderOptions.getToken.toString()===t._customProviderOptions.getToken.toString():!1}}function ne(e,t){if(e===404||e===403)return{backoffCount:1,allowRequestsAfter:Date.now()+we,httpStatus:e};{const r=t?t.backoffCount:0,n=de(r,1e3,2);return{backoffCount:r+1,allowRequestsAfter:Date.now()+n,httpStatus:e}}}function oe(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw d.create("throttled",{time:S(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e=ce(),t){var o;e=ae(e);const r=P(e,"app-check");if(_().initialized||xe(e),$()&&x().then(i=>{console.log(`Firebase App Check debug token: ${i}`)}),r.isInitialized()){const i=r.getImmediate(),s=r.getOptions();if(s&&!!s.isTokenAutoRefreshEnabled==!!t.isTokenAutoRefreshEnabled&&((o=s.provider)!=null&&o.isEqual(t.provider)))return i;throw d.create("already-initialized",{appName:e.name})}const n=r.initialize({options:t});return Ve(e,t.provider,t.isTokenAutoRefreshEnabled),l(e).isTokenAutoRefreshEnabled&&M(n,"INTERNAL",()=>{}),n}function Ve(e,t,r=!1){const n=ge(e,{...q});n.activated=!0,n.provider=t,n.cachedTokenPromise=Se(e).then(o=>(o&&g(o)&&(n.token=o,J(e,{token:o.token})),o)),n.isTokenAutoRefreshEnabled=r&&e.automaticDataCollectionEnabled,!e.automaticDataCollectionEnabled&&r&&f.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),n.provider.initialize(e)}function et(e,t){const r=e.app,n=l(r);n.tokenRefresher&&(t===!0?n.tokenRefresher.start():n.tokenRefresher.stop()),n.isTokenAutoRefreshEnabled=t}async function tt(e,t){const r=await b(e,t);if(r.error)throw r.error;if(r.internalError)throw r.internalError;return{token:r.token}}function rt(e){return Y(e)}function nt(e,t,r,n){let o=()=>{},i=()=>{};return t.next!=null?o=t.next.bind(t):o=t,t.error!=null?i=t.error.bind(t):r&&(i=r),M(e,"EXTERNAL",o,i),()=>N(e.app,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="app-check",K="app-check-internal";function Je(){H(new O(Ye,e=>{const t=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat");return Fe(t,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider(K).initialize()})),H(new O(K,e=>{const t=e.getProvider("app-check").getImmediate();return Be(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),fe(Ke,Le)}Je();export{re as CustomProvider,te as ReCaptchaEnterpriseProvider,ee as ReCaptchaV3Provider,rt as getLimitedUseToken,tt as getToken,Ze as initializeAppCheck,nt as onTokenChanged,et as setTokenAutoRefreshEnabled};
