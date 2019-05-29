!(function (t) {
    const n = {}; function e(o) {
        if (n[o]) { return n[o].exports; } const r = n[o] = {
            i: o, l: !1, exports: {}
        }; return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }e.m = t, e.c = n, e.d = function (t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0, get: o
        });
    }, e.r = function (t) {
        typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: 'Module'
        }), Object.defineProperty(t, '__esModule', {
            value: !0
        });
    }, e.t = function (t, n) {
        if (1 & n && (t = e(t)), 8 & n) { return t; } if (4 & n && typeof t === 'object' && t && t.__esModule) { return t; } const o = Object.create(null); if (e.r(o), Object.defineProperty(o, 'default', {
            enumerable: !0, value: t
        }), 2 & n && typeof t !== 'string') { for (const r in t) { e.d(o, r, ((n) => t[n]).bind(null, r)); } } return o;
    }, e.n = function (t) { const n = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return e.d(n, 'a', n), n; }, e.o = function (t, n) { return Object.prototype.hasOwnProperty.call(t, n); }, e.p = '/', e(e.s = 32);
}([
    function (t, n, e) {
        t.exports = e(21);
    },
    function (t, n, e) { t.exports = e(23)(); },
    function (t, n) { t.exports = function (t) { if (void 0 === t) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return t; }; },
    function (t, n) {
        t.exports = function (t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e, enumerable: !0, configurable: !0, writable: !0
            }) : t[n] = e, t;
        };
    },
    function (t, n, e) { const o = e(16); const r = e(17); const i = e(18); t.exports = function (t, n) { return o(t) || r(t, n) || i(); }; },
    function (t, n, e) {
        t.exports = function (t) {
            const n = []; return n.toString = function () {
                return this.map((n) => {
                    const e = (function (t, n) {
                        const e = t[1] || ''; const o = t[3]; if (!o) { return e; } if (n && typeof btoa === 'function') {
                            const r = (a = o, `/*# sourceMappingURL=data:application/json;charset=utf-8;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(a))))} */`); const i = o.sources.map((t) => `/*# sourceURL=${o.sourceRoot}${t} */`); return [
                                e
                            ].concat(i).concat([
                                r
                            ]).join('\n');
                        } let a; return [
                            e
                        ].join('\n');
                    }(n, t)); return n[2] ? `@media ${n[2]}{${e}}` : e;
                }).join('');
            }, n.i = function (t, e) {
                typeof t === 'string' && (t = [
                    [
                        null,
                        t,
                        ''
                    ]
                ]); for (var o = {}, r = 0; r < this.length; r++) { const i = this[r][0]; i != null && (o[i] = !0); } for (r = 0; r < t.length; r++) { const a = t[r]; a[0] != null && o[a[0]] || (e && !a[2] ? a[2] = e : e && (a[2] = `(${a[2]}) and (${e})`), n.push(a)); }
            }, n;
        };
    },
    function (t, n, e) {
        let o; let r; const i = {}; const a = (o = function () { return window && document && document.all && !window.atob; }, function () { return void 0 === r && (r = o.apply(this, arguments)), r; }); const A = (function (t) { const n = {}; return function (t, e) { if (typeof t === 'function') { return t(); } if (void 0 === n[t]) { let o = function (t, n) { return n ? n.querySelector(t) : document.querySelector(t); }.call(this, t, e); if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) { try { o = o.contentDocument.head; } catch (t) { o = null; } }n[t] = o; } return n[t]; }; }()); let E = null; let u = 0; const c = []; const l = e(27); function f(t, n) {
            for (let e = 0; e < t.length; e++) {
                const o = t[e]; const r = i[o.id]; if (r) { r.refs++; for (var a = 0; a < r.parts.length; a++) { r.parts[a](o.parts[a]); } for (;a < o.parts.length; a++) { r.parts.push(p(o.parts[a], n)); } } else {
                    const A = []; for (a = 0; a < o.parts.length; a++) { A.push(p(o.parts[a], n)); }i[o.id] = {
                        id: o.id, refs: 1, parts: A
                    };
                }
            }
        } function s(t, n) {
            for (var e = [], o = {}, r = 0; r < t.length; r++) {
                const i = t[r]; const a = n.base ? i[0] + n.base : i[0]; const A = {
                    css: i[1], media: i[2], sourceMap: i[3]
                }; o[a] ? o[a].parts.push(A) : e.push(o[a] = {
                    id: a,
                    parts: [
                        A
                    ]
                });
            } return e;
        } function T(t, n) { const e = A(t.insertInto); if (!e) { throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."); } const o = c[c.length - 1]; if (t.insertAt === 'top') { o ? o.nextSibling ? e.insertBefore(n, o.nextSibling) : e.appendChild(n) : e.insertBefore(n, e.firstChild), c.push(n); } else if (t.insertAt === 'bottom') { e.appendChild(n); } else { if (typeof t.insertAt !== 'object' || !t.insertAt.before) { throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"); } const r = A(t.insertAt.before, e); e.insertBefore(n, r); } } function I(t) { if (t.parentNode === null) { return !1; } t.parentNode.removeChild(t); const n = c.indexOf(t); n >= 0 && c.splice(n, 1); } function L(t) {
            const n = document.createElement('style'); if (void 0 === t.attrs.type && (t.attrs.type = 'text/css'), void 0 === t.attrs.nonce) {
                const o = (function () {
                    0;

                    return e.nc;
                }()); o && (t.attrs.nonce = o);
            } return R(n, t.attrs), T(t, n), n;
        } function R(t, n) { Object.keys(n).forEach((e) => { t.setAttribute(e, n[e]); }); } function p(t, n) {
            let e; let o; let r; let i; if (n.transform && t.css) { if (!(i = typeof n.transform === 'function' ? n.transform(t.css) : n.transform.default(t.css))) { return function () {}; } t.css = i; } if (n.singleton) { const a = u++; e = E || (E = L(n)), o = y.bind(null, e, a, !1), r = y.bind(null, e, a, !0); } else {
                t.sourceMap && typeof URL === 'function' && typeof URL.createObjectURL === 'function' && typeof URL.revokeObjectURL === 'function' && typeof Blob === 'function' && typeof btoa === 'function' ? (e = (function (t) { const n = document.createElement('link'); return void 0 === t.attrs.type && (t.attrs.type = 'text/css'), t.attrs.rel = 'stylesheet', R(n, t.attrs), T(t, n), n; }(n)), o = function (t, n, e) {
                    let o = e.css; const r = e.sourceMap; const i = void 0 === n.convertToAbsoluteUrls && r; (n.convertToAbsoluteUrls || i) && (o = l(o)); r && (o += `\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(r))))} */`); const a = new Blob([
                        o
                    ], {
                        type: 'text/css'
                    }); const A = t.href; t.href = URL.createObjectURL(a), A && URL.revokeObjectURL(A);
                }.bind(null, e, n), r = function () { I(e), e.href && URL.revokeObjectURL(e.href); }) : (e = L(n), o = function (t, n) { const e = n.css; const o = n.media; o && t.setAttribute('media', o); if (t.styleSheet) { t.styleSheet.cssText = e; } else { for (;t.firstChild;) { t.removeChild(t.firstChild); }t.appendChild(document.createTextNode(e)); } }.bind(null, e), r = function () { I(e); });
            } return o(t), function (n) { if (n) { if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) { return; } o(t = n); } else { r(); } };
        }t.exports = function (t, n) { if (typeof DEBUG !== 'undefined' && DEBUG && typeof document !== 'object') { throw new Error('The style-loader cannot be used in a non-browser environment'); } (n = n || {}).attrs = typeof n.attrs === 'object' ? n.attrs : {}, n.singleton || typeof n.singleton === 'boolean' || (n.singleton = a()), n.insertInto || (n.insertInto = 'head'), n.insertAt || (n.insertAt = 'bottom'); const e = s(t, n); return f(e, n), function (t) { for (var o = [], r = 0; r < e.length; r++) { const a = e[r]; (A = i[a.id]).refs--, o.push(A); }t && f(s(t, n), n); for (r = 0; r < o.length; r++) { var A; if ((A = o[r]).refs === 0) { for (let E = 0; E < A.parts.length; E++) { A.parts[E](); } delete i[A.id]; } } }; }; let d; const N = (d = [], function (t, n) { return d[t] = n, d.filter(Boolean).join('\n'); }); function y(t, n, e, o) { const r = e ? '' : o.css; if (t.styleSheet) { t.styleSheet.cssText = N(n, r); } else { const i = document.createTextNode(r); const a = t.childNodes; a[n] && t.removeChild(a[n]), a.length ? t.insertBefore(i, a[n]) : t.appendChild(i); } }
    },
    function (t, n, e) { const o = e(13); const r = e(14); const i = e(15); t.exports = function (t) { return o(t) || r(t) || i(); }; },
    function (t, n) { t.exports = function (t, n) { if (!(t instanceof n)) { throw new TypeError('Cannot call a class as a function'); } }; },
    function (t, n) { function e(t, n) { for (let e = 0; e < n.length; e++) { const o = n[e]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(t, o.key, o); } }t.exports = function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t; }; },
    function (t, n, e) { const o = e(19); const r = e(2); t.exports = function (t, n) { return !n || o(n) !== 'object' && typeof n !== 'function' ? r(t) : n; }; },
    function (t, n) { function e(n) { return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, e(n); }t.exports = e; },
    function (t, n, e) {
        const o = e(20); t.exports = function (t, n) {
            if (typeof n !== 'function' && n !== null) { throw new TypeError('Super expression must either be null or a function'); } t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t, writable: !0, configurable: !0
                }
            }), n && o(t, n);
        };
    },
    function (t, n) { t.exports = function (t) { if (Array.isArray(t)) { for (var n = 0, e = new Array(t.length); n < t.length; n++) { e[n] = t[n]; } return e; } }; },
    function (t, n) { t.exports = function (t) { if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === '[object Arguments]') { return Array.from(t); } }; },
    function (t, n) { t.exports = function () { throw new TypeError('Invalid attempt to spread non-iterable instance'); }; },
    function (t, n) { t.exports = function (t) { if (Array.isArray(t)) { return t; } }; },
    function (t, n) { t.exports = function (t, n) { const e = []; let o = !0; let r = !1; let i = void 0; try { for (var a, A = t[Symbol.iterator](); !(o = (a = A.next()).done) && (e.push(a.value), !n || e.length !== n); o = !0) { } } catch (t) { r = !0, i = t; } finally { try { o || A.return == null || A.return(); } finally { if (r) { throw i; } } } return e; }; },
    function (t, n) { t.exports = function () { throw new TypeError('Invalid attempt to destructure non-iterable instance'); }; },
    function (t, n) { function e(t) { return (e = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; })(t); } function o(n) { return typeof Symbol === 'function' && e(Symbol.iterator) === 'symbol' ? t.exports = o = function (t) { return e(t); } : t.exports = o = function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : e(t); }, o(n); }t.exports = o; },
    function (t, n) { function e(n, o) { return t.exports = e = Object.setPrototypeOf || function (t, n) { return t.__proto__ = n, t; }, e(n, o); }t.exports = e; },
    function (t, n, e) {
        /** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const o = e(22); const r = typeof Symbol === 'function' && Symbol.for; const i = r ? Symbol.for('react.element') : 60103; const a = r ? Symbol.for('react.portal') : 60106; const A = r ? Symbol.for('react.fragment') : 60107; const E = r ? Symbol.for('react.strict_mode') : 60108; const u = r ? Symbol.for('react.profiler') : 60114; const c = r ? Symbol.for('react.provider') : 60109; const l = r ? Symbol.for('react.context') : 60110; const f = r ? Symbol.for('react.concurrent_mode') : 60111; const s = r ? Symbol.for('react.forward_ref') : 60112; const T = r ? Symbol.for('react.suspense') : 60113; const I = r ? Symbol.for('react.memo') : 60115; const L = r ? Symbol.for('react.lazy') : 60116; const R = typeof Symbol === 'function' && Symbol.iterator; function p(t) {
            for (var n = arguments.length - 1, e = `https://reactjs.org/docs/error-decoder.html?invariant=${t}`, o = 0; o < n; o++) { e += `&args[]=${encodeURIComponent(arguments[o + 1])}`; }!(function (t, n, e, o, r, i, a, A) {
                if (!t) {
                    if (t = void 0, void 0 === n) { t = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'); } else {
                        const E = [
                            e,
                            o,
                            r,
                            i,
                            a,
                            A
                        ]; let u = 0; (t = Error(n.replace(/%s/g, () => E[u++]))).name = 'Invariant Violation';
                    } throw t.framesToPop = 1, t;
                }
            }(!1, `Minified React error #${t}; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. `, e));
        } const d = {
            isMounted() { return !1; }, enqueueForceUpdate() {}, enqueueReplaceState() {}, enqueueSetState() {}
        }; const N = {}; function y(t, n, e) { this.props = t, this.context = n, this.refs = N, this.updater = e || d; } function S() {} function m(t, n, e) { this.props = t, this.context = n, this.refs = N, this.updater = e || d; }y.prototype.isReactComponent = {}, y.prototype.setState = function (t, n) { typeof t !== 'object' && typeof t !== 'function' && t != null && p('85'), this.updater.enqueueSetState(this, t, n, 'setState'); }, y.prototype.forceUpdate = function (t) { this.updater.enqueueForceUpdate(this, t, 'forceUpdate'); }, S.prototype = y.prototype; const b = m.prototype = new S(); b.constructor = m, o(b, y.prototype), b.isPureReactComponent = !0; const C = {
            current: null
        }; const O = {
            current: null
        }; const D = Object.prototype.hasOwnProperty; const h = {
            key: !0, ref: !0, __self: !0, __source: !0
        }; function G(t, n, e) {
            let o = void 0; const r = {}; let a = null; let A = null; if (n != null) { for (o in void 0 !== n.ref && (A = n.ref), void 0 !== n.key && (a = `${n.key}`), n) { D.call(n, o) && !h.hasOwnProperty(o) && (r[o] = n[o]); } } let E = arguments.length - 2; if (E === 1) { r.children = e; } else if (E > 1) { for (var u = Array(E), c = 0; c < E; c++) { u[c] = arguments[c + 2]; }r.children = u; } if (t && t.defaultProps) { for (o in E = t.defaultProps) { void 0 === r[o] && (r[o] = E[o]); } } return {
                $$typeof: i, type: t, key: a, ref: A, props: r, _owner: O.current
            };
        } function v(t) { return typeof t === 'object' && t !== null && t.$$typeof === i; } const M = /\/+/g; const V = []; function g(t, n, e, o) {
            if (V.length) { const r = V.pop(); return r.result = t, r.keyPrefix = n, r.func = e, r.context = o, r.count = 0, r; } return {
                result: t, keyPrefix: n, func: e, context: o, count: 0
            };
        } function P(t) { t.result = null, t.keyPrefix = null, t.func = null, t.context = null, t.count = 0, V.length < 10 && V.push(t); } function x(t, n, e) { return t == null ? 0 : (function t(n, e, o, r) { let A = typeof n; A !== 'undefined' && A !== 'boolean' || (n = null); let E = !1; if (n === null) { E = !0; } else { switch (A) { case 'string': case 'number': E = !0; break; case 'object': switch (n.$$typeof) { case i: case a: E = !0; } } } if (E) { return o(r, n, e === '' ? `.${U(n, 0)}` : e), 1; } if (E = 0, e = e === '' ? '.' : `${e}:`, Array.isArray(n)) { for (var u = 0; u < n.length; u++) { var c = e + U(A = n[u], u); E += t(A, c, o, r); } } else if (c = n === null || typeof n !== 'object' ? null : typeof (c = R && n[R] || n['@@iterator']) === 'function' ? c : null, typeof c === 'function') { for (n = c.call(n), u = 0; !(A = n.next()).done;) { E += t(A = A.value, c = e + U(A, u++), o, r); } } else { A === 'object' && p('31', (o = `${n}`) == '[object Object]' ? `object with keys {${Object.keys(n).join(', ')}}` : o, ''); } return E; }(t, '', n, e)); } function U(t, n) {
            return typeof t === 'object' && t !== null && t.key != null ? (function (t) {
                const n = {
                    '=': '=0', ':': '=2'
                }; return `$${(`${t}`).replace(/[=:]/g, (t) => n[t])}`;
            }(t.key)) : n.toString(36);
        } function w(t, n) { t.func.call(t.context, n, t.count++); } function K(t, n, e) {
            const o = t.result; const r = t.keyPrefix; t = t.func.call(t.context, n, t.count++), Array.isArray(t) ? F(t, o, e, (t) => t) : t != null && (v(t) && (t = (function (t, n) {
                return {
                    $$typeof: i, type: t.type, key: n, ref: t.ref, props: t.props, _owner: t._owner
                };
            }(t, r + (!t.key || n && n.key === t.key ? '' : `${(`${t.key}`).replace(M, '$&/')}/`) + e))), o.push(t));
        } function F(t, n, e, o, r) { let i = ''; e != null && (i = `${(`${e}`).replace(M, '$&/')}/`), x(t, K, n = g(n, i, o, r)), P(n); } function _() { const t = C.current; return t === null && p('321'), t; } const k = {
            Children: {
                map(t, n, e) { if (t == null) { return t; } const o = []; return F(t, o, null, n, e), o; }, forEach(t, n, e) { if (t == null) { return t; } x(t, w, n = g(null, null, n, e)), P(n); }, count(t) { return x(t, () => null, null); }, toArray(t) { const n = []; return F(t, n, null, (t) => t), n; }, only(t) { return v(t) || p('143'), t; }
            },
            createRef() {
                return {
                    current: null
                };
            },
            Component: y,
            PureComponent: m,
            createContext(t, n) {
                return void 0 === n && (n = null), (t = {
                    $$typeof: l, _calculateChangedBits: n, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null
                }).Provider = {
                    $$typeof: c, _context: t
                }, t.Consumer = t;
            },
            forwardRef(t) {
                return {
                    $$typeof: s, render: t
                };
            },
            lazy(t) {
                return {
                    $$typeof: L, _ctor: t, _status: -1, _result: null
                };
            },
            memo(t, n) {
                return {
                    $$typeof: I, type: t, compare: void 0 === n ? null : n
                };
            },
            useCallback(t, n) { return _().useCallback(t, n); },
            useContext(t, n) { return _().useContext(t, n); },
            useEffect(t, n) { return _().useEffect(t, n); },
            useImperativeHandle(t, n, e) { return _().useImperativeHandle(t, n, e); },
            useDebugValue() {},
            useLayoutEffect(t, n) { return _().useLayoutEffect(t, n); },
            useMemo(t, n) { return _().useMemo(t, n); },
            useReducer(t, n, e) { return _().useReducer(t, n, e); },
            useRef(t) { return _().useRef(t); },
            useState(t) { return _().useState(t); },
            Fragment: A,
            StrictMode: E,
            Suspense: T,
            createElement: G,
            cloneElement(t, n, e) {
                t == null && p('267', t); let r = void 0; const a = o({}, t.props); let A = t.key; let E = t.ref; let u = t._owner; if (n != null) { void 0 !== n.ref && (E = n.ref, u = O.current), void 0 !== n.key && (A = `${n.key}`); var c = void 0; for (r in t.type && t.type.defaultProps && (c = t.type.defaultProps), n) { D.call(n, r) && !h.hasOwnProperty(r) && (a[r] = void 0 === n[r] && void 0 !== c ? c[r] : n[r]); } } if ((r = arguments.length - 2) === 1) { a.children = e; } else if (r > 1) { c = Array(r); for (let l = 0; l < r; l++) { c[l] = arguments[l + 2]; }a.children = c; } return {
                    $$typeof: i, type: t.type, key: A, ref: E, props: a, _owner: u
                };
            },
            createFactory(t) { const n = G.bind(null, t); return n.type = t, n; },
            isValidElement: v,
            version: '16.8.6',
            unstable_ConcurrentMode: f,
            unstable_Profiler: u,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: C, ReactCurrentOwner: O, assign: o
            }
        }; const H = {
            default: k
        }; const j = H && k || H; t.exports = j.default || j;
    },
    function (t, n, e) {
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/const o = Object.getOwnPropertySymbols; const r = Object.prototype.hasOwnProperty; const i = Object.prototype.propertyIsEnumerable; t.exports = (function () { try { if (!Object.assign) { return !1; } const t = new String('abc'); if (t[5] = 'de', Object.getOwnPropertyNames(t)[0] === '5') { return !1; } for (var n = {}, e = 0; e < 10; e++) { n[`_${String.fromCharCode(e)}`] = e; } if (Object.getOwnPropertyNames(n).map((t) => n[t]).join('') !== '0123456789') { return !1; } const o = {}; return 'abcdefghijklmnopqrst'.split('').forEach((t) => { o[t] = t; }), Object.keys(Object.assign({}, o)).join('') === 'abcdefghijklmnopqrst'; } catch (t) { return !1; } }()) ? Object.assign : function (t, n) { for (var e, a, A = (function (t) { if (t == null) { throw new TypeError('Object.assign cannot be called with null or undefined'); } return Object(t); }(t)), E = 1; E < arguments.length; E++) { for (const u in e = Object(arguments[E])) { r.call(e, u) && (A[u] = e[u]); } if (o) { a = o(e); for (let c = 0; c < a.length; c++) { i.call(e, a[c]) && (A[a[c]] = e[a[c]]); } } } return A; };
    },
    function (t, n, e) {
        const o = e(24); function r() {} function i() {}i.resetWarningCache = r, t.exports = function () {
            function t(t, n, e, r, i, a) { if (a !== o) { const A = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'); throw A.name = 'Invariant Violation', A; } } function n() { return t; }t.isRequired = t; const e = {
                array: t, bool: t, func: t, number: t, object: t, string: t, symbol: t, any: t, arrayOf: n, element: t, elementType: t, instanceOf: n, node: t, objectOf: n, oneOf: n, oneOfType: n, shape: n, exact: n, checkPropTypes: i, resetWarningCache: r
            }; return e.PropTypes = e, e;
        };
    },
    function (t, n, e) {
        t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function (t, n, e) {
        let o = e(26); typeof o === 'string' && (o = [
            [
                t.i,
                o,
                ''
            ]
        ]); const r = {
            hmr: !0, transform: void 0, insertInto: void 0
        }; e(6)(o, r); o.locals && (t.exports = o.locals);
    },
    function (t, n, e) {
        (t.exports = e(5)(!1)).push([
            t.i,
            '.KeyComponent {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 50px;\n  margin: 0 7px;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  background-color: #eee; }\n  .KeyComponent:hover {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  .KeyComponent:first-of-type {\n    margin-left: 0; }\n  .KeyComponent:last-of-type {\n    margin-right: 0; }\n  .KeyComponent__symbol {\n    color: #333; }\n',
            ''
        ]);
    },
    function (t, n) { t.exports = function (t) { const n = typeof window !== 'undefined' && window.location; if (!n) { throw new Error('fixUrls requires window.location'); } if (!t || typeof t !== 'string') { return t; } const e = `${n.protocol}//${n.host}`; const o = e + n.pathname.replace(/\/[^\/]*$/, '/'); return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (t, n) => { let r; const i = n.trim().replace(/^"(.*)"$/, (t, n) => n).replace(/^'(.*)'$/, (t, n) => n); return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (r = i.indexOf('//') === 0 ? i : i.indexOf('/') === 0 ? e + i : o + i.replace(/^\.\//, ''), `url(${JSON.stringify(r)})`); }); }; },
    function (t, n, e) {
        let o = e(29); typeof o === 'string' && (o = [
            [
                t.i,
                o,
                ''
            ]
        ]); const r = {
            hmr: !0, transform: void 0, insertInto: void 0
        }; e(6)(o, r); o.locals && (t.exports = o.locals);
    },
    function (t, n, e) {
        (t.exports = e(5)(!1)).push([
            t.i,
            '.RowComponent {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 15px; }\n  .RowComponent:last-of-type {\n    padding-bottom: 0; }\n',
            ''
        ]);
    },
    function (t, n, e) {
        let o = e(31); typeof o === 'string' && (o = [
            [
                t.i,
                o,
                ''
            ]
        ]); const r = {
            hmr: !0, transform: void 0, insertInto: void 0
        }; e(6)(o, r); o.locals && (t.exports = o.locals);
    },
    function (t, n, e) {
        (t.exports = e(5)(!1)).push([
            t.i,
            '.Keyboard {\n  position: fixed;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  padding: 40px;\n  background-color: rgba(0, 0, 0, 0.75); }\n',
            ''
        ]);
    },
    function (t, n, e) {
        e.r(n); const o = e(7); const r = e.n(o); const i = e(4); const a = e.n(i); const A = e(8); const E = e.n(A); const u = e(9); const c = e.n(u); const l = e(10); const f = e.n(l); const s = e(11); const T = e.n(s); const I = e(2); const L = e.n(I); const R = e(12); const p = e.n(R); const d = e(3); const N = e.n(d); const y = e(0); const S = e.n(y); const m = e(1); const b = e.n(m); const C = (e(25), function t(n) {
            const e = n.flexGrow; const o = n.handleKeyPress; const r = n.isAuxiliaryKey; const i = n.keySymbol; const a = {
                flexGrow: e
            }; let A = ''; return A = r || i !== '-1' ? r || i.length !== 4 ? i : '&#x'.concat(i, ';') : '', S.a.createElement('button', {
                className: t.displayName, onClick: o, style: a, type: 'button'
            }, S.a.createElement('span', {
                className: ''.concat(t.displayName, '__symbol'),
                dangerouslySetInnerHTML: {
                    __html: A
                }
            }));
        }); C.displayName = 'KeyComponent', C.propTypes = {
            flexGrow: b.a.number, handleKeyPress: b.a.func, isAuxiliaryKey: b.a.bool, keySymbol: b.a.string
        }, C.defaultProps = {
            flexGrow: 1, handleKeyPress() {}, isAuxiliaryKey: !1, keySymbol: ''
        }; const O = C; const D = (e(28), function t(n) {
            const e = n.children; return S.a.createElement('div', {
                className: t.displayName
            }, e);
        }); D.displayName = 'RowComponent', D.propTypes = {
            children: b.a.node.isRequired
        }; const h = D; const G = {
            '29': 0, '02': 1, '03': 2, '04': 3, '05': 4, '06': 5, '07': 6, '08': 7, '09': 8, '0a': 9, '0b': 10, '0c': 11, '0d': 12, '10': 13, '11': 14, '12': 15, '13': 16, '14': 17, '15': 18, '16': 19, '17': 20, '18': 21, '19': 22, '1a': 23, '1b': 24, '2b': 25, '1e': 26, '1f': 27, '20': 28, '21': 29, '22': 30, '23': 31, '24': 32, '25': 33, '26': 34, '27': 35, '28': 36, '2c': 37, '2d': 38, '2e': 39, '2f': 40, '30': 41, '31': 42, '32': 43, '33': 44, '34': 45, '35': 46
        }; const v = [
            'ar-SA',
            'fa-IR',
            'he-IL',
            'ur-PK'
        ]; const M = {
            albanian: '\nKBD\tLayout02\t"Albanian - Custom"\n\nCOPYRIGHT\t"(c) 2017 Company"\n\nCOMPANY\t"Company"\n\nLOCALENAME\t"sq-AL"\n\nLOCALEID\t"0000041c"\n\nVERSION\t1.0\n\nSHIFTSTATE\n\n0\t//Column 4\n1\t//Column 5 : Shft\n2\t//Column 6 :       Ctrl\n6\t//Column 7 :       Ctrl Alt\n\nLAYOUT\t\t;an extra \'@\' at the end is a dead key\n\n//SC\tVK_\t\tCap\t0\t1\t2\t6\n//--\t----\t\t----\t----\t----\t----\t----\n\n02\t1\t\t0\t1\t0021\t-1\t007e\t\t// DIGIT ONE, EXCLAMATION MARK, <none>, TILDE\n03\t2\t\t0\t2\t0022\t-1\t02c7@\t\t// DIGIT TWO, QUOTATION MARK, <none>, CARON (Mandarin Chinese third tone)\n04\t3\t\t0\t3\t0023\t-1\t005e@\t\t// DIGIT THREE, NUMBER SIGN, <none>, CIRCUMFLEX ACCENT\n05\t4\t\t0\t4\t0024\t-1\t02d8@\t\t// DIGIT FOUR, DOLLAR SIGN, <none>, BREVE\n06\t5\t\t0\t5\t0025\t-1\t00b0@\t\t// DIGIT FIVE, PERCENT SIGN, <none>, DEGREE SIGN\n07\t6\t\t0\t6\t005e\t-1\t02db@\t\t// DIGIT SIX, CIRCUMFLEX ACCENT, <none>, OGONEK\n08\t7\t\t0\t7\t0026\t-1\t0060\t\t// DIGIT SEVEN, AMPERSAND, <none>, GRAVE ACCENT\n09\t8\t\t0\t8\t002a\t-1\t02d9@\t\t// DIGIT EIGHT, ASTERISK, <none>, DOT ABOVE (Mandarin Chinese light tone)\n0a\t9\t\t0\t9\t0028\t-1\t00b4@\t\t// DIGIT NINE, LEFT PARENTHESIS, <none>, ACUTE ACCENT\n0b\t0\t\t0\t0\t0029\t-1\t02dd@\t\t// DIGIT ZERO, RIGHT PARENTHESIS, <none>, DOUBLE ACUTE ACCENT\n0c\tOEM_MINUS\t0\t002d\t005f\t-1\t00a8@\t\t// HYPHEN-MINUS, LOW LINE, <none>, DIAERESIS\n0d\tOEM_PLUS\t0\t003d\t002b\t-1\t00b8@\t\t// EQUALS SIGN, PLUS SIGN, <none>, CEDILLA\n10\tQ\t\t1\tq\tQ\t-1\t005c\t\t// LATIN SMALL LETTER Q, LATIN CAPITAL LETTER Q, <none>, REVERSE SOLIDUS\n11\tW\t\t1\tw\tW\t-1\t007c\t\t// LATIN SMALL LETTER W, LATIN CAPITAL LETTER W, <none>, VERTICAL LINE\n12\tE\t\t1\te\tE\t-1\t-1\t\t// LATIN SMALL LETTER E, LATIN CAPITAL LETTER E, <none>, <none>\n13\tR\t\t1\tr\tR\t-1\t-1\t\t// LATIN SMALL LETTER R, LATIN CAPITAL LETTER R, <none>, <none>\n14\tT\t\t1\tt\tT\t-1\t-1\t\t// LATIN SMALL LETTER T, LATIN CAPITAL LETTER T, <none>, <none>\n15\tZ\t\t1\tz\tZ\t-1\t-1\t\t// LATIN SMALL LETTER Z, LATIN CAPITAL LETTER Z, <none>, <none>\n16\tU\t\t1\tu\tU\t-1\t-1\t\t// LATIN SMALL LETTER U, LATIN CAPITAL LETTER U, <none>, <none>\n17\tI\t\t1\ti\tI\t-1\t-1\t\t// LATIN SMALL LETTER I, LATIN CAPITAL LETTER I, <none>, <none>\n18\tO\t\t1\to\tO\t-1\t-1\t\t// LATIN SMALL LETTER O, LATIN CAPITAL LETTER O, <none>, <none>\n19\tP\t\t1\tp\tP\t-1\t-1\t\t// LATIN SMALL LETTER P, LATIN CAPITAL LETTER P, <none>, <none>\n1a\tOEM_4\t\t1\t00e7\t00c7\t-1\t00f7\t\t// LATIN SMALL LETTER C WITH CEDILLA, LATIN CAPITAL LETTER C WITH CEDILLA, <none>, DIVISION SIGN\n1b\tOEM_6\t\t0\t0040\t0027\t001b\t00d7\t\t// COMMERCIAL AT, APOSTROPHE, ESCAPE, MULTIPLICATION SIGN\n1e\tA\t\t1\ta\tA\t-1\t-1\t\t// LATIN SMALL LETTER A, LATIN CAPITAL LETTER A, <none>, <none>\n1f\tS\t\t1\ts\tS\t-1\t0111\t\t// LATIN SMALL LETTER S, LATIN CAPITAL LETTER S, <none>, LATIN SMALL LETTER D WITH STROKE\n20\tD\t\t1\td\tD\t-1\t0110\t\t// LATIN SMALL LETTER D, LATIN CAPITAL LETTER D, <none>, LATIN CAPITAL LETTER D WITH STROKE\n21\tF\t\t1\tf\tF\t-1\t005b\t\t// LATIN SMALL LETTER F, LATIN CAPITAL LETTER F, <none>, LEFT SQUARE BRACKET\n22\tG\t\t1\tg\tG\t-1\t005d\t\t// LATIN SMALL LETTER G, LATIN CAPITAL LETTER G, <none>, RIGHT SQUARE BRACKET\n23\tH\t\t1\th\tH\t-1\t-1\t\t// LATIN SMALL LETTER H, LATIN CAPITAL LETTER H, <none>, <none>\n24\tJ\t\t1\tj\tJ\t-1\t-1\t\t// LATIN SMALL LETTER J, LATIN CAPITAL LETTER J, <none>, <none>\n25\tK\t\t1\tk\tK\t-1\t0142\t\t// LATIN SMALL LETTER K, LATIN CAPITAL LETTER K, <none>, LATIN SMALL LETTER L WITH STROKE\n26\tL\t\t1\tl\tL\t-1\t0141\t\t// LATIN SMALL LETTER L, LATIN CAPITAL LETTER L, <none>, LATIN CAPITAL LETTER L WITH STROKE\n27\tOEM_1\t\t1\t00eb\t00cb\t001d\t0024\t\t// LATIN SMALL LETTER E WITH DIAERESIS, LATIN CAPITAL LETTER E WITH DIAERESIS, INFORMATION SEPARATOR THREE, DOLLAR SIGN\n28\tOEM_7\t\t0\t005b\t007b\t-1\t00df\t\t// LEFT SQUARE BRACKET, LEFT CURLY BRACKET, <none>, LATIN SMALL LETTER SHARP S (German)\n29\tOEM_3\t\t0\t005c\t007c\t-1\t-1\t\t// REVERSE SOLIDUS, VERTICAL LINE, <none>, <none>\n2b\tOEM_5\t\t0\t005d\t007d\t001c\t00a4\t\t// RIGHT SQUARE BRACKET, RIGHT CURLY BRACKET, INFORMATION SEPARATOR FOUR, CURRENCY SIGN\n2c\tY\t\t1\ty\tY\t-1\t-1\t\t// LATIN SMALL LETTER Y, LATIN CAPITAL LETTER Y, <none>, <none>\n2d\tX\t\t1\tx\tX\t-1\t-1\t\t// LATIN SMALL LETTER X, LATIN CAPITAL LETTER X, <none>, <none>\n2e\tC\t\t1\tc\tC\t-1\t-1\t\t// LATIN SMALL LETTER C, LATIN CAPITAL LETTER C, <none>, <none>\n2f\tV\t\t1\tv\tV\t-1\t0040\t\t// LATIN SMALL LETTER V, LATIN CAPITAL LETTER V, <none>, COMMERCIAL AT\n30\tB\t\t1\tb\tB\t-1\t007b\t\t// LATIN SMALL LETTER B, LATIN CAPITAL LETTER B, <none>, LEFT CURLY BRACKET\n31\tN\t\t1\tn\tN\t-1\t007d\t\t// LATIN SMALL LETTER N, LATIN CAPITAL LETTER N, <none>, RIGHT CURLY BRACKET\n32\tM\t\t1\tm\tM\t-1\t00a7\t\t// LATIN SMALL LETTER M, LATIN CAPITAL LETTER M, <none>, SECTION SIGN\n33\tOEM_COMMA\t0\t002c\t003b\t-1\t003c\t\t// COMMA, SEMICOLON, <none>, LESS-THAN SIGN\n34\tOEM_PERIOD\t0\t002e\t003a\t-1\t003e\t\t// FULL STOP, COLON, <none>, GREATER-THAN SIGN\n35\tOEM_2\t\t0\t002f\t003f\t-1\t-1\t\t// SOLIDUS, QUESTION MARK, <none>, <none>\n39\tSPACE\t\t0\t0020\t0020\t0020\t-1\t\t// SPACE, SPACE, SPACE, <none>\n56\tOEM_102\t0\t003c\t003e\t001c\t-1\t\t// LESS-THAN SIGN, GREATER-THAN SIGN, INFORMATION SEPARATOR FOUR, <none>\n53\tDECIMAL\t0\t002c\t002c\t-1\t-1\t\t// COMMA, COMMA, ,\n\n\nDEADKEY\t02c7\n\n006e\t0148\t// n -> ň\n0063\t010d\t// c -> č\n0064\t010f\t// d -> ď\n0073\t0161\t// s -> š\n006c\t013e\t// l -> ľ\n0065\t011b\t// e -> ě\n0072\t0159\t// r -> ř\n0074\t0165\t// t -> ť\n007a\t017e\t// z -> ž\n004e\t0147\t// N -> Ň\n0043\t010c\t// C -> Č\n0044\t010e\t// D -> Ď\n0053\t0160\t// S -> Š\n004c\t013d\t// L -> Ľ\n0045\t011a\t// E -> Ě\n0052\t0158\t// R -> Ř\n0054\t0164\t// T -> Ť\n005a\t017d\t// Z -> Ž\n0020\t02c7\t//   -> ˇ\n\nDEADKEY\t005e\n\n0061\t00e2\t// a -> â\n0069\t00ee\t// i -> î\n006f\t00f4\t// o -> ô\n0041\t00c2\t// A -> Â\n0049\t00ce\t// I -> Î\n004f\t00d4\t// O -> Ô\n0020\t005e\t//   -> ^\n\nDEADKEY\t02d8\n\n0061\t0103\t// a -> ă\n0041\t0102\t// A -> Ă\n0020\t02d8\t//   -> ˘\n\nDEADKEY\t00b0\n\n0075\t016f\t// u -> ů\n0055\t016e\t// U -> Ů\n0020\t00b0\t//   -> °\n\nDEADKEY\t02db\n\n0061\t0105\t// a -> ą\n0065\t0119\t// e -> ę\n0041\t0104\t// A -> Ą\n0045\t0118\t// E -> Ę\n0020\t02db\t//   -> ˛\n\nDEADKEY\t02d9\n\n007a\t017c\t// z -> ż\n005a\t017b\t// Z -> Ż\n0020\t02d9\t//   -> ˙\n\nDEADKEY\t00b4\n\n006e\t0144\t// n -> ń\n0063\t0107\t// c -> ć\n0079\t00fd\t// y -> ý\n0061\t00e1\t// a -> á\n0073\t015b\t// s -> ś\n006c\t013a\t// l -> ĺ\n0065\t00e9\t// e -> é\n0072\t0155\t// r -> ŕ\n0075\t00fa\t// u -> ú\n0069\t00ed\t// i -> í\n007a\t017a\t// z -> ź\n006f\t00f3\t// o -> ó\n004e\t0143\t// N -> Ń\n0043\t0106\t// C -> Ć\n0059\t00dd\t// Y -> Ý\n0041\t00c1\t// A -> Á\n0053\t015a\t// S -> Ś\n004c\t0139\t// L -> Ĺ\n0045\t00c9\t// E -> É\n0052\t0154\t// R -> Ŕ\n0055\t00da\t// U -> Ú\n0049\t00cd\t// I -> Í\n005a\t0179\t// Z -> Ź\n004f\t00d3\t// O -> Ó\n0020\t00b4\t//   -> ´\n\nDEADKEY\t02dd\n\n0075\t0171\t// u -> ű\n006f\t0151\t// o -> ő\n0055\t0170\t// U -> Ű\n004f\t0150\t// O -> Ő\n0020\t02dd\t//   -> ˝\n\nDEADKEY\t00a8\n\n0061\t00e4\t// a -> ä\n0065\t00eb\t// e -> ë\n0075\t00fc\t// u -> ü\n006f\t00f6\t// o -> ö\n0041\t00c4\t// A -> Ä\n0045\t00cb\t// E -> Ë\n0055\t00dc\t// U -> Ü\n004f\t00d6\t// O -> Ö\n0020\t00a8\t//   -> ¨\n\nDEADKEY\t00b8\n\n0063\t00e7\t// c -> ç\n0073\t015f\t// s -> ş\n0074\t0163\t// t -> ţ\n0043\t00c7\t// C -> Ç\n0053\t015e\t// S -> Ş\n0054\t0162\t// T -> Ţ\n0020\t00b8\t//   -> ¸\n\n\nKEYNAME\n\n01\tEsc\n0e\tBackspace\n0f\tTab\n1c\tEnter\n1d\tCtrl\n2a\tShift\n36\t"Right Shift"\n37\t"Num *"\n38\tAlt\n39\tSpace\n3a\t"Caps Lock"\n3b\tF1\n3c\tF2\n3d\tF3\n3e\tF4\n3f\tF5\n40\tF6\n41\tF7\n42\tF8\n43\tF9\n44\tF10\n45\tPause\n46\t"Scroll Lock"\n47\t"Num 7"\n48\t"Num 8"\n49\t"Num 9"\n4a\t"Num -"\n4b\t"Num 4"\n4c\t"Num 5"\n4d\t"Num 6"\n4e\t"Num +"\n4f\t"Num 1"\n50\t"Num 2"\n51\t"Num 3"\n52\t"Num 0"\n53\t"Num Del"\n54\t"Sys Req"\n57\tF11\n58\tF12\n7c\tF13\n7d\tF14\n7e\tF15\n7f\tF16\n80\tF17\n81\tF18\n82\tF19\n83\tF20\n84\tF21\n85\tF22\n86\tF23\n87\tF24\n\nKEYNAME_EXT\n\n1c\t"Num Enter"\n1d\t"Right Ctrl"\n35\t"Num /"\n37\t"Prnt Scrn"\n38\t"Right Alt"\n45\t"Num Lock"\n46\tBreak\n47\tHome\n48\tUp\n49\t"Page Up"\n4b\tLeft\n4d\tRight\n4f\tEnd\n50\tDown\n51\t"Page Down"\n52\tInsert\n53\tDelete\n54\t<00>\n56\tHelp\n5b\t"Left Windows"\n5c\t"Right Windows"\n5d\tApplication\n\nKEYNAME_DEAD\n\n02c7\t"CARON (Mandarin Chinese third tone)"\n005e\t"CIRCUMFLEX ACCENT"\n02d8\t"BREVE"\n00b0\t"DEGREE SIGN"\n02db\t"OGONEK"\n02d9\t"DOT ABOVE (Mandarin Chinese light tone)"\n00b4\t"ACUTE ACCENT"\n02dd\t"DOUBLE ACUTE ACCENT"\n00a8\t"DIAERESIS"\n00b8\t"CEDILLA"\n\n\nDESCRIPTIONS\n\n0409\tAlbanian - Custom\nLANGUAGENAMES\n\n0409\tAlbanian (Albania)\nENDKBD\n', hindi: '\nKBD\tLayout02\t"Hindi Traditional - Custom"\n\nLOCALENAME\t"hi-IN"\n\nLOCALEID\t"00010439"\n\nVERSION\t1.0\n\nSHIFTSTATE\n\n0\t//Column 4\n1\t//Column 5 : Shft\n2\t//Column 6 :       Ctrl\n3\t//Column 7 : Shft  Ctrl\n6\t//Column 8 :       Ctrl Alt\n7\t//Column 9 : Shft  Ctrl Alt\n\nLAYOUT\t\t;an extra \'@\' at the end is a dead key\n\n//SC\tVK_\t\tCap\t0\t1\t2\t3\t6\t7\n//--\t----\t\t----\t----\t----\t----\t----\t----\t----\n\n02\t1\t\t0\t1\t090d\t-1\t200d\t0967\t0021\t\t// DIGIT ONE, DEVANAGARI LETTER CANDRA E, <none>, ZERO WIDTH JOINER, DEVANAGARI DIGIT ONE, EXCLAMATION MARK\n03\t2\t\t0\t2\t0945\t-1\t200c\t0968\t0040\t\t// DIGIT TWO, DEVANAGARI VOWEL SIGN CANDRA E, <none>, ZERO WIDTH NON-JOINER, DEVANAGARI DIGIT TWO, COMMERCIAL AT\n04\t3\t\t0\t3\t%%\t-1\t-1\t0969\t0023\t\t// DIGIT THREE, <null>, <none>, <none>, DEVANAGARI DIGIT THREE, NUMBER SIGN\n05\t4\t\t0\t4\t%%\t-1\t-1\t096a\t0024\t\t// DIGIT FOUR, <null>, <none>, <none>, DEVANAGARI DIGIT FOUR, DOLLAR SIGN\n06\t5\t\t0\t5\t%%\t-1\t-1\t096b\t0025\t\t// DIGIT FIVE, <null>, <none>, <none>, DEVANAGARI DIGIT FIVE, PERCENT SIGN\n07\t6\t\t0\t6\t%%\t-1\t-1\t096c\t005e\t\t// DIGIT SIX, <null>, <none>, <none>, DEVANAGARI DIGIT SIX, CIRCUMFLEX ACCENT\n08\t7\t\t0\t7\t%%\t-1\t-1\t096d\t0026\t\t// DIGIT SEVEN, <null>, <none>, <none>, DEVANAGARI DIGIT SEVEN, AMPERSAND\n09\t8\t\t0\t8\t%%\t-1\t-1\t096e\t002a\t\t// DIGIT EIGHT, <null>, <none>, <none>, DEVANAGARI DIGIT EIGHT, ASTERISK\n0a\t9\t\t0\t9\t0028\t-1\t-1\t096f\t0028\t\t// DIGIT NINE, LEFT PARENTHESIS, <none>, <none>, DEVANAGARI DIGIT NINE, LEFT PARENTHESIS\n0b\t0\t\t0\t0\t0029\t-1\t-1\t0966\t0029\t\t// DIGIT ZERO, RIGHT PARENTHESIS, <none>, <none>, DEVANAGARI DIGIT ZERO, RIGHT PARENTHESIS\n0c\tOEM_MINUS\t0\t002d\t0903\t-1\t-1\t002d\t005f\t\t// HYPHEN-MINUS, DEVANAGARI SIGN VISARGA, <none>, <none>, HYPHEN-MINUS, LOW LINE\n0d\tOEM_PLUS\t0\t0943\t090b\t-1\t-1\t003d\t002b\t\t// DEVANAGARI VOWEL SIGN VOCALIC R, DEVANAGARI LETTER VOCALIC R, <none>, <none>, EQUALS SIGN, PLUS SIGN\n10\tQ\t\t0\t094c\t0914\t-1\t-1\t-1\t-1\t\t// DEVANAGARI VOWEL SIGN AU, DEVANAGARI LETTER AU, <none>, <none>, <none>, <none>\n11\tW\t\t0\t0948\t0910\t-1\t-1\t-1\t-1\t\t// DEVANAGARI VOWEL SIGN AI, DEVANAGARI LETTER AI, <none>, <none>, <none>, <none>\n12\tE\t\t0\t093e\t0906\t-1\t-1\t-1\t-1\t\t// DEVANAGARI VOWEL SIGN AA, DEVANAGARI LETTER AA, <none>, <none>, <none>, <none>\n13\tR\t\t0\t0940\t0908\t-1\t-1\t-1\t-1\t\t// DEVANAGARI VOWEL SIGN II, DEVANAGARI LETTER II, <none>, <none>, <none>, <none>\n14\tT\t\t0\t0942\t090a\t-1\t-1\t-1\t-1\t\t// DEVANAGARI VOWEL SIGN UU, DEVANAGARI LETTER UU, <none>, <none>, <none>, <none>\n15\tY\t\t0\t092c\t092d\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER BA, DEVANAGARI LETTER BHA, <none>, <none>, <none>, <none>\n16\tU\t\t0\t0939\t0919\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER HA, DEVANAGARI LETTER NGA, <none>, <none>, <none>, <none>\n17\tI\t\t0\t0917\t0918\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER GA, DEVANAGARI LETTER GHA, <none>, <none>, <none>, <none>\n18\tO\t\t0\t0926\t0927\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER DA, DEVANAGARI LETTER DHA, <none>, <none>, <none>, <none>\n19\tP\t\t0\t091c\t091d\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER JA, DEVANAGARI LETTER JHA, <none>, <none>, <none>, <none>\n1a\tOEM_4\t\t0\t0921\t0922\t-1\t-1\t005b\t007b\t\t// DEVANAGARI LETTER DDA, DEVANAGARI LETTER DDHA, <none>, <none>, LEFT SQUARE BRACKET, LEFT CURLY BRACKET\n1b\tOEM_6\t\t0\t093c\t091e\t-1\t-1\t005d\t007d\t\t// DEVANAGARI SIGN NUKTA, DEVANAGARI LETTER NYA, <none>, <none>, RIGHT SQUARE BRACKET, RIGHT CURLY BRACKET\n1e\tA\t\t0\t094b\t0913\t-1\t-1\t-1\t-1\t\t// DEVANAGARI VOWEL SIGN O, DEVANAGARI LETTER O, <none>, <none>, <none>, <none>\n1f\tS\t\t0\t0947\t090f\t-1\t-1\t-1\t-1\t\t// DEVANAGARI VOWEL SIGN E, DEVANAGARI LETTER E, <none>, <none>, <none>, <none>\n20\tD\t\t0\t094d\t0905\t-1\t-1\t-1\t-1\t\t// DEVANAGARI SIGN VIRAMA, DEVANAGARI LETTER A, <none>, <none>, <none>, <none>\n21\tF\t\t0\t093f\t0907\t-1\t-1\t-1\t-1\t\t// DEVANAGARI VOWEL SIGN I, DEVANAGARI LETTER I, <none>, <none>, <none>, <none>\n22\tG\t\t0\t0941\t0909\t-1\t-1\t-1\t-1\t\t// DEVANAGARI VOWEL SIGN U, DEVANAGARI LETTER U, <none>, <none>, <none>, <none>\n23\tH\t\t0\t092a\t092b\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER PA, DEVANAGARI LETTER PHA, <none>, <none>, <none>, <none>\n24\tJ\t\t0\t0930\t0931\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER RA, DEVANAGARI LETTER RRA, <none>, <none>, <none>, <none>\n25\tK\t\t0\t0915\t0916\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER KA, DEVANAGARI LETTER KHA, <none>, <none>, <none>, <none>\n26\tL\t\t0\t0924\t0925\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER TA, DEVANAGARI LETTER THA, <none>, <none>, <none>, <none>\n27\tOEM_1\t\t0\t091a\t091b\t-1\t-1\t003b\t003a\t\t// DEVANAGARI LETTER CA, DEVANAGARI LETTER CHA, <none>, <none>, SEMICOLON, COLON\n28\tOEM_7\t\t0\t091f\t0920\t-1\t-1\t0027\t0022\t\t// DEVANAGARI LETTER TTA, DEVANAGARI LETTER TTHA, <none>, <none>, APOSTROPHE, QUOTATION MARK\n29\tOEM_3\t\t0\t-1\t-1\t-1\t-1\t0060\t007e\t\t// <none>, <none>, <none>, <none>, GRAVE ACCENT, TILDE\n2b\tOEM_5\t\t0\t0949\t0911\t-1\t-1\t005c\t007c\t\t// DEVANAGARI VOWEL SIGN CANDRA O, DEVANAGARI LETTER CANDRA O, <none>, <none>, REVERSE SOLIDUS, VERTICAL LINE\n2d\tX\t\t0\t0902\t0901\t-1\t-1\t-1\t0950\t\t// DEVANAGARI SIGN ANUSVARA, DEVANAGARI SIGN CANDRABINDU, <none>, <none>, <none>, DEVANAGARI OM\n2e\tC\t\t0\t092e\t0923\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER MA, DEVANAGARI LETTER NNA, <none>, <none>, <none>, <none>\n2f\tV\t\t0\t0928\t-1\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER NA, <none>, <none>, <none>, <none>, <none>\n30\tB\t\t0\t0935\t-1\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER VA, <none>, <none>, <none>, <none>, <none>\n31\tN\t\t0\t0932\t0933\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER LA, DEVANAGARI LETTER LLA, <none>, <none>, <none>, <none>\n32\tM\t\t0\t0938\t0936\t-1\t-1\t-1\t-1\t\t// DEVANAGARI LETTER SA, DEVANAGARI LETTER SHA, <none>, <none>, <none>, <none>\n33\tOEM_COMMA\t0\t002c\t0937\t-1\t-1\t002c\t003c\t\t// COMMA, DEVANAGARI LETTER SSA, <none>, <none>, COMMA, LESS-THAN SIGN\n34\tOEM_PERIOD\t0\t002e\t0964\t-1\t-1\t002e\t003e\t\t// FULL STOP, DEVANAGARI DANDA, <none>, <none>, FULL STOP, GREATER-THAN SIGN\n35\tOEM_2\t\t0\t092f\t095f\t-1\t-1\t002f\t003f\t\t// DEVANAGARI LETTER YA, DEVANAGARI LETTER YYA, <none>, <none>, SOLIDUS, QUESTION MARK\n39\tSPACE\t\t0\t0020\t0020\t0020\t-1\t-1\t-1\t\t// SPACE, SPACE, SPACE, <none>, <none>, <none>\n56\tOEM_102\t0\t0949\t0911\t-1\t-1\t-1\t-1\t\t// DEVANAGARI VOWEL SIGN CANDRA O, DEVANAGARI LETTER CANDRA O, <none>, <none>, <none>, <none>\n53\tDECIMAL\t0\t002e\t002e\t-1\t-1\t-1\t-1\t\t// FULL STOP, FULL STOP, , , ,\n\nLIGATURE\n\n//VK_\tMod#\tChar0\tChar1\tChar2\tChar3\n//----\t\t----\t----\t----\t----\t----\n\n3\t\t1\t094d\t0930\t\t// DEVANAGARI SIGN VIRAMA + DEVANAGARI LETTER RA\n4\t\t1\t0930\t094d\t\t// DEVANAGARI LETTER RA + DEVANAGARI SIGN VIRAMA\n5\t\t1\t091c\t094d\t091e\t\t// DEVANAGARI LETTER JA + DEVANAGARI SIGN VIRAMA + DEVANAGARI LETTER NYA\n6\t\t1\t0924\t094d\t0930\t\t// DEVANAGARI LETTER TA + DEVANAGARI SIGN VIRAMA + DEVANAGARI LETTER RA\n7\t\t1\t0915\t094d\t0937\t\t// DEVANAGARI LETTER KA + DEVANAGARI SIGN VIRAMA + DEVANAGARI LETTER SSA\n8\t\t1\t0936\t094d\t0930\t\t// DEVANAGARI LETTER SHA + DEVANAGARI SIGN VIRAMA + DEVANAGARI LETTER RA\n\nKEYNAME\n\n01\tEsc\n0e\tBackspace\n0f\tTab\n1c\tEnter\n1d\tCtrl\n2a\tShift\n36\t"Right Shift"\n37\t"Num *"\n38\tAlt\n39\tSpace\n3a\t"Caps Lock"\n3b\tF1\n3c\tF2\n3d\tF3\n3e\tF4\n3f\tF5\n40\tF6\n41\tF7\n42\tF8\n43\tF9\n44\tF10\n45\tPause\n46\t"Scroll Lock"\n47\t"Num 7"\n48\t"Num 8"\n49\t"Num 9"\n4a\t"Num -"\n4b\t"Num 4"\n4c\t"Num 5"\n4d\t"Num 6"\n4e\t"Num +"\n4f\t"Num 1"\n50\t"Num 2"\n51\t"Num 3"\n52\t"Num 0"\n53\t"Num Del"\n54\t"Sys Req"\n57\tF11\n58\tF12\n7c\tF13\n7d\tF14\n7e\tF15\n7f\tF16\n80\tF17\n81\tF18\n82\tF19\n83\tF20\n84\tF21\n85\tF22\n86\tF23\n87\tF24\n\nKEYNAME_EXT\n\n1c\t"Num Enter"\n1d\t"Right Ctrl"\n35\t"Num /"\n37\t"Prnt Scrn"\n38\t"Right Alt"\n45\t"Num Lock"\n46\tBreak\n47\tHome\n48\tUp\n49\t"Page Up"\n4b\tLeft\n4d\tRight\n4f\tEnd\n50\tDown\n51\t"Page Down"\n52\tInsert\n53\tDelete\n54\t<00>\n56\tHelp\n5b\t"Left Windows"\n5c\t"Right Windows"\n5d\tApplication\n\nDESCRIPTIONS\n\n0409\tHindi Traditional - Custom\nLANGUAGENAMES\n\n0409\tHindi (India)\nENDKBD\n'
        }; const V = (e(30), (function (t) {
            function n(t) {
                let e; return E()(this, n), e = f()(this, T()(n).call(this, t)), N()(L()(e), 'parseKeyboardFile', () => {
                    const t = e.state.selectedLanguage; const n = new RegExp('\\u0000', 'g'); const o = new RegExp('\\d(\\w)?\\s+\\w+\\s+\\d\\s+(-1|\\w+@?|%%)\\s+(-1|\\w+@?|%%)\\s+(-1|\\w+@?|%%)(\\s+(-1|\\w+@?|%%))?(\\s+(-1|\\w+@?|%%))?(\\s+(-1|\\w+@?|%%))?\\s+\\/\\/', 'g'); const i = M[t].replace(n, ''); const A = i.match(/LOCALENAME\s+".*"/); const E = a()(A, 1)[0].replace(/LOCALENAME\s+"(.*)"/, '$1'); const u = new Array(47).fill([]); const c = i.indexOf('DEADKEY'); const l = i.indexOf('KEYNAME'); const f = i.indexOf('LAYOUT'); const s = i.indexOf('LIGATURE'); const T = i.indexOf('SHIFTSTATE'); const I = {}; const L = {}; const R = {}; let p = 'LTR'; if (i.match(o).forEach((t) => { const n = t.replace(/(\t+|\s+)/g, ' ').split(' '); const e = a()(n, 1)[0]; const o = G[e]; void 0 !== o && (u[o] = n); }), T > 0) { const d = i.slice(T, f).trim().split(/\n/g).slice(2); const N = function (t) { return t.match(/\w{6}\s[0-9]/).toString().slice(-1) - 1; }; d.forEach((t) => { t.indexOf(':') === -1 ? R.default = N(t) : t.indexOf('Shft  Ctrl Alt') !== -1 ? R.shiftAltGrp = N(t) : t.indexOf('Shft  Ctrl') !== -1 ? R.ctrlShift = N(t) : t.indexOf('Ctrl Alt') !== -1 ? R.altGrp = N(t) : t.indexOf('Ctrl') !== -1 ? R.ctrl = N(t) : t.indexOf('Shft') !== -1 && (R.shift = N(t)); }); }c > 0 && i.slice(c, l).trim().split('DEADKEY').slice(1)
                        .forEach((t) => { const n = t.split(/\n/g).slice(2); const e = t.trim().slice(0, 4); I[e] = {}, n.forEach((t) => { const n = t.trim().slice(0, 4); const o = t.trim().slice(5, 9); I[e][n] = o; }); }); s > 0 && i.slice(s, l).trim().split(/\n/g).slice(5)
                        .forEach((t) => { if (t.indexOf('//') > 0) { const n = t.trim().split('//')[0].trim().replace(/\t/g, ' ').replace(/\s+/g, ' ').split(' '); n.splice(1, 1); const e = n.splice(0, 1); L[e] = r()(n); } }); v.includes(E) && (p = 'RTL'), e.setState({
                        deadkeyLookup: I, ligatureLookup: L, localeName: E, preparedKeyDataList: u, shiftStateLookup: R, textFlowDirection: p
                    });
                }), N()(L()(e), 'renderKeyboardKey', (t) => {
                    const n = a()(t, 4); const e = n[0]; const o = n[3]; return S.a.createElement(O, {
                        key: e, keySymbol: o
                    });
                }), N()(L()(e), 'renderControlsRow', () => {
                    const t = e.state.selectedLanguage; return S.a.createElement(h, null, S.a.createElement(O, {
                        keySymbol: 'Ctrl', isAuxiliaryKey: !0
                    }), S.a.createElement(O, {
                        keySymbol: t, isAuxiliaryKey: !0
                    }), S.a.createElement(O, {
                        keySymbol: 'Alt', isAuxiliaryKey: !0
                    }), S.a.createElement(O, {
                        flexGrow: 4, isAuxiliaryKey: !0
                    }), S.a.createElement(O, {
                        keySymbol: 'Alt Grp', isAuxiliaryKey: !0
                    }), S.a.createElement(O, {
                        keySymbol: '', isAuxiliaryKey: !0
                    }), S.a.createElement(O, {
                        keySymbol: 'Ctrl', isAuxiliaryKey: !0
                    }));
                }), N()(L()(e), 'renderKeyboardRows', () => {
                    const t = e.state.preparedKeyDataList; const n = []; const o = t.slice(0, 13).map((t) => e.renderKeyboardKey(t)); o.push(S.a.createElement(O, {
                        flexGrow: 4, keySymbol: 'Backspace', isAuxiliaryKey: !0
                    })), n.push(S.a.createElement(h, null, o)); const r = t.slice(13, 26).map((t) => e.renderKeyboardKey(t)); r.unshift(S.a.createElement(O, {
                        flexGrow: 4, keySymbol: 'Tab', isAuxiliaryKey: !0
                    })), n.push(S.a.createElement(h, null, r)); const i = t.slice(26, 37).map((t) => e.renderKeyboardKey(t)); i.unshift(S.a.createElement(O, {
                        flexGrow: 5, keySymbol: 'Caps Lock', isAuxiliaryKey: !0
                    })), i.push(S.a.createElement(O, {
                        flexGrow: 5, keySymbol: 'Enter', isAuxiliaryKey: !0
                    })), n.push(S.a.createElement(h, null, i)); const a = t.slice(37, 47).map((t) => e.renderKeyboardKey(t)); return a.unshift(S.a.createElement(O, {
                        flexGrow: 7, keySymbol: 'Shift', isAuxiliaryKey: !0
                    })), a.push(S.a.createElement(O, {
                        flexGrow: 7, keySymbol: 'Shift', isAuxiliaryKey: !0
                    })), n.push(S.a.createElement(h, null, a)), n.push(e.renderControlsRow()), n;
                }), e.state = {
                    deadkeyLookup: {}, ligatureLookup: {}, localeName: '', preparedKeyDataList: [], selectedLanguage: 'hindi', shiftStateLookup: {}, textFlowDirection: 'RTL'
                }, e;
            } return p()(n, t), c()(n, [
                {
                    key: 'componentDidMount', value() { this.parseKeyboardFile(); }
                },
                {
                    key: 'render',
                    value() {
                        return console.log('state:', this.state), S.a.createElement('div', {
                            className: n.displayName
                        }, this.renderKeyboardRows());
                    }
                }
            ]), n;
        }(S.a.PureComponent))); N()(V, 'displayName', 'Keyboard'); n.default = V;
    }
]));
