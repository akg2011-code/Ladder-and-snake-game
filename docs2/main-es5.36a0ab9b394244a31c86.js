! function() {
    function t(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { var n = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]); if (null == n) return; var r, i, o = [],
                a = !0,
                s = !1; try { for (n = n.call(t); !(a = (r = n.next()).done) && (o.push(r.value), !e || o.length !== e); a = !0); } catch (u) { s = !0, i = u } finally { try { a || null == n.return || n.return() } finally { if (s) throw i } } return o }(t, e) || r(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function e(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = r(t)) || e && t && "number" == typeof t.length) { n && (t = n); var i = 0,
                    o = function() {}; return { s: o, n: function() { return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var a, s = !0,
            u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return s = t.done, t }, e: function(t) { u = !0, a = t }, f: function() { try { s || null == n.return || n.return() } finally { if (u) throw a } } } }

    function n(t) { return function(t) { if (Array.isArray(t)) return i(t) }(t) || function(t) { if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t) }(t) || r(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function r(t, e) { if (t) { if ("string" == typeof t) return i(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0 } }

    function i(t, e) {
        (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

    function o(t, e, n) { return (o = f() ? Reflect.construct : function(t, e, n) { var r = [null];
            r.push.apply(r, e); var i = new(Function.bind.apply(t, r)); return n && u(i, n.prototype), i }).apply(null, arguments) }

    function a(t, e, n) { return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) { var r = function(t, e) { for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = d(t));); return t }(t, e); if (r) { var i = Object.getOwnPropertyDescriptor(r, e); return i.get ? i.get.call(n) : i.value } })(t, e, n || t) }

    function s(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && u(t, e) }

    function u(t, e) { return (u = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

    function l(t) { var e = f(); return function() { var n, r = d(t); if (e) { var i = d(this).constructor;
                n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return c(this, n) } }

    function c(t, e) { return !e || "object" != typeof e && "function" != typeof e ? h(t) : e }

    function h(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

    function f() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }

    function d(t) { return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

    function v(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function p(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

    function y(t, e, n) { return e && p(t.prototype, e), n && p(t, n), t }(window.webpackJsonp = window.webpackJsonp || []).push([
        [1], { 0: function(t, e, n) { t.exports = n("zUnb") }, zUnb: function(r, i, u) { "use strict";

                function f(t) { return "function" == typeof t }
                u.r(i); var p = !1,
                    g = { Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) { if (t) { var e = new Error;
                                console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + e.stack) } else p && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                            p = t }, get useDeprecatedSynchronousErrorHandling() { return p } };

                function m(t) { setTimeout((function() { throw t }), 0) } var _ = { closed: !0, next: function(t) {}, error: function(t) { if (g.useDeprecatedSynchronousErrorHandling) throw t;
                            m(t) }, complete: function() {} },
                    k = Array.isArray || function(t) { return t && "number" == typeof t.length };

                function w(t) { return null !== t && "object" == typeof t } var b, S = function() {
                        function t(t) { return Error.call(this), this.message = t ? "".concat(t.length, " errors occurred during unsubscription:\n").concat(t.map((function(t, e) { return "".concat(e + 1, ") ").concat(t.toString()) })).join("\n  ")) : "", this.name = "UnsubscriptionError", this.errors = t, this } return t.prototype = Object.create(Error.prototype), t }(),
                    C = ((b = function() {
                        function t(e) { v(this, t), this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._unsubscribe = e) } return y(t, [{ key: "unsubscribe", value: function() { var e; if (!this.closed) { var n = this._parentOrParents,
                                        r = this._unsubscribe,
                                        i = this._subscriptions; if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
                                    else if (null !== n)
                                        for (var o = 0; o < n.length; ++o) n[o].remove(this); if (f(r)) try { r.call(this) } catch (l) { e = l instanceof S ? E(l.errors) : [l] }
                                    if (k(i))
                                        for (var a = -1, s = i.length; ++a < s;) { var u = i[a]; if (w(u)) try { u.unsubscribe() } catch (l) { e = e || [], l instanceof S ? e = e.concat(E(l.errors)) : e.push(l) } }
                                    if (e) throw new S(e) } } }, { key: "add", value: function(e) { var n = e; if (!e) return t.EMPTY; switch (typeof e) {
                                    case "function":
                                        n = new t(e);
                                    case "object":
                                        if (n === this || n.closed || "function" != typeof n.unsubscribe) return n; if (this.closed) return n.unsubscribe(), n; if (!(n instanceof t)) { var r = n;
                                            (n = new t)._subscriptions = [r] } break;
                                    default:
                                        throw new Error("unrecognized teardown " + e + " added to Subscription.") } var i = n._parentOrParents; if (null === i) n._parentOrParents = this;
                                else if (i instanceof t) { if (i === this) return n;
                                    n._parentOrParents = [i, this] } else { if (-1 !== i.indexOf(this)) return n;
                                    i.push(this) } var o = this._subscriptions; return null === o ? this._subscriptions = [n] : o.push(n), n } }, { key: "remove", value: function(t) { var e = this._subscriptions; if (e) { var n = e.indexOf(t); - 1 !== n && e.splice(n, 1) } } }]), t }()).EMPTY = function(t) { return t.closed = !0, t }(new b), b);

                function E(t) { return t.reduce((function(t, e) { return t.concat(e instanceof S ? e.errors : e) }), []) } var x = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
                    T = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i) { var o; switch (v(this, n), (o = e.call(this)).syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
                                case 0:
                                    o.destination = _; break;
                                case 1:
                                    if (!t) { o.destination = _; break } if ("object" == typeof t) { t instanceof n ? (o.syncErrorThrowable = t.syncErrorThrowable, o.destination = t, t.add(h(o))) : (o.syncErrorThrowable = !0, o.destination = new A(h(o), t)); break }
                                default:
                                    o.syncErrorThrowable = !0, o.destination = new A(h(o), t, r, i) } return o } return y(n, [{ key: x, value: function() { return this } }, { key: "next", value: function(t) { this.isStopped || this._next(t) } }, { key: "error", value: function(t) { this.isStopped || (this.isStopped = !0, this._error(t)) } }, { key: "complete", value: function() { this.isStopped || (this.isStopped = !0, this._complete()) } }, { key: "unsubscribe", value: function() { this.closed || (this.isStopped = !0, a(d(n.prototype), "unsubscribe", this).call(this)) } }, { key: "_next", value: function(t) { this.destination.next(t) } }, { key: "_error", value: function(t) { this.destination.error(t), this.unsubscribe() } }, { key: "_complete", value: function() { this.destination.complete(), this.unsubscribe() } }, { key: "_unsubscribeAndRecycle", value: function() { var t = this._parentOrParents; return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this } }], [{ key: "create", value: function(t, e, r) { var i = new n(t, e, r); return i.syncErrorThrowable = !1, i } }]), n }(C),
                    A = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o) { var a, s;
                            v(this, n), (a = e.call(this))._parentSubscriber = t; var u = h(a); return f(r) ? s = r : r && (s = r.next, i = r.error, o = r.complete, r !== _ && (f((u = Object.create(r)).unsubscribe) && a.add(u.unsubscribe.bind(u)), u.unsubscribe = a.unsubscribe.bind(h(a)))), a._context = u, a._next = s, a._error = i, a._complete = o, a } return y(n, [{ key: "next", value: function(t) { if (!this.isStopped && this._next) { var e = this._parentSubscriber;
                                    g.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t) } } }, { key: "error", value: function(t) { if (!this.isStopped) { var e = this._parentSubscriber,
                                        n = g.useDeprecatedSynchronousErrorHandling; if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                                    else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : m(t), this.unsubscribe();
                                    else { if (this.unsubscribe(), n) throw t;
                                        m(t) } } } }, { key: "complete", value: function() { var t = this; if (!this.isStopped) { var e = this._parentSubscriber; if (this._complete) { var n = function() { return t._complete.call(t._context) };
                                        g.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe()) } else this.unsubscribe() } } }, { key: "__tryOrUnsub", value: function(t, e) { try { t.call(this._context, e) } catch (n) { if (this.unsubscribe(), g.useDeprecatedSynchronousErrorHandling) throw n;
                                    m(n) } } }, { key: "__tryOrSetError", value: function(t, e, n) { if (!g.useDeprecatedSynchronousErrorHandling) throw new Error("bad call"); try { e.call(this._context, n) } catch (r) { return g.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (m(r), !0) } return !1 } }, { key: "_unsubscribe", value: function() { var t = this._parentSubscriber;
                                this._context = null, this._parentSubscriber = null, t.unsubscribe() } }]), n }(T),
                    O = "function" == typeof Symbol && Symbol.observable || "@@observable";

                function P(t) { return t } var R, I = ((R = function() {
                    function t(e) { v(this, t), this._isScalar = !1, e && (this._subscribe = e) } return y(t, [{ key: "lift", value: function(e) { var n = new t; return n.source = this, n.operator = e, n } }, { key: "subscribe", value: function(t, e, n) { var r = this.operator,
                                i = function(t, e, n) { if (t) { if (t instanceof T) return t; if (t[x]) return t[x]() } return t || e || n ? new T(t, e, n) : new T(_) }(t, e, n); if (i.add(r ? r.call(i, this.source) : this.source || g.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), g.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue; return i } }, { key: "_trySubscribe", value: function(t) { try { return this._subscribe(t) } catch (e) { g.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e),
                                    function(t) { for (; t;) { var e = t,
                                                n = e.closed,
                                                r = e.destination,
                                                i = e.isStopped; if (n || i) return !1;
                                            t = r && r instanceof T ? r : null } return !0 }(t) ? t.error(e) : console.warn(e) } } }, { key: "forEach", value: function(t, e) { var n = this; return new(e = D(e))((function(e, r) { var i;
                                i = n.subscribe((function(e) { try { t(e) } catch (n) { r(n), i && i.unsubscribe() } }), r, e) })) } }, { key: "_subscribe", value: function(t) { var e = this.source; return e && e.subscribe(t) } }, { key: O, value: function() { return this } }, { key: "pipe", value: function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return 0 === e.length ? this : (0 === (r = e).length ? P : 1 === r.length ? r[0] : function(t) { return r.reduce((function(t, e) { return e(t) }), t) })(this); var r } }, { key: "toPromise", value: function(t) { var e = this; return new(t = D(t))((function(t, n) { var r;
                                e.subscribe((function(t) { return r = t }), (function(t) { return n(t) }), (function() { return t(r) })) })) } }]), t }()).create = function(t) { return new R(t) }, R);

                function D(t) { if (t || (t = g.Promise || Promise), !t) throw new Error("no Promise impl found"); return t } var N, j = function() {
                        function t() { return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this } return t.prototype = Object.create(Error.prototype), t }(),
                    F = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this)).subject = t, i.subscriber = r, i.closed = !1, i } return y(n, [{ key: "unsubscribe", value: function() { if (!this.closed) { this.closed = !0; var t = this.subject,
                                        e = t.observers; if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) { var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1) } } } }]), n }(C),
                    L = function(t) { s(n, t); var e = l(n);

                        function n(t) { var r; return v(this, n), (r = e.call(this, t)).destination = t, r } return n }(T),
                    M = ((N = function(t) { s(n, t); var e = l(n);

                        function n() { var t; return v(this, n), (t = e.call(this)).observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, t } return y(n, [{ key: x, value: function() { return new L(this) } }, { key: "lift", value: function(t) { var e = new H(this, this); return e.operator = t, e } }, { key: "next", value: function(t) { if (this.closed) throw new j; if (!this.isStopped)
                                    for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++) r[i].next(t) } }, { key: "error", value: function(t) { if (this.closed) throw new j;
                                this.hasError = !0, this.thrownError = t, this.isStopped = !0; for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++) r[i].error(t);
                                this.observers.length = 0 } }, { key: "complete", value: function() { if (this.closed) throw new j;
                                this.isStopped = !0; for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                                this.observers.length = 0 } }, { key: "unsubscribe", value: function() { this.isStopped = !0, this.closed = !0, this.observers = null } }, { key: "_trySubscribe", value: function(t) { if (this.closed) throw new j; return a(d(n.prototype), "_trySubscribe", this).call(this, t) } }, { key: "_subscribe", value: function(t) { if (this.closed) throw new j; return this.hasError ? (t.error(this.thrownError), C.EMPTY) : this.isStopped ? (t.complete(), C.EMPTY) : (this.observers.push(t), new F(this, t)) } }, { key: "asObservable", value: function() { var t = new I; return t.source = this, t } }]), n }(I)).create = function(t, e) { return new H(t, e) }, N),
                    H = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this)).destination = t, i.source = r, i } return y(n, [{ key: "next", value: function(t) { var e = this.destination;
                                e && e.next && e.next(t) } }, { key: "error", value: function(t) { var e = this.destination;
                                e && e.error && this.destination.error(t) } }, { key: "complete", value: function() { var t = this.destination;
                                t && t.complete && this.destination.complete() } }, { key: "_subscribe", value: function(t) { return this.source ? this.source.subscribe(t) : C.EMPTY } }]), n }(M);

                function B(t) { return t && "function" == typeof t.schedule } var V = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i) { var o; return v(this, n), (o = e.call(this)).parent = t, o.outerValue = r, o.outerIndex = i, o.index = 0, o } return y(n, [{ key: "_next", value: function(t) { this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this) } }, { key: "_error", value: function(t) { this.parent.notifyError(t, this), this.unsubscribe() } }, { key: "_complete", value: function() { this.parent.notifyComplete(this), this.unsubscribe() } }]), n }(T),
                    U = function(t) { return function(e) { for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
                            e.complete() } }; var z = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator",
                    q = function(t) { return t && "number" == typeof t.length && "function" != typeof t };

                function W(t) { return !!t && "function" != typeof t.subscribe && "function" == typeof t.then } var Q = function(t) { if (t && "function" == typeof t[O]) return r = t,
                        function(t) { var e = r[O](); if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable"); return e.subscribe(t) }; if (q(t)) return U(t); if (W(t)) return n = t,
                        function(t) { return n.then((function(e) { t.closed || (t.next(e), t.complete()) }), (function(e) { return t.error(e) })).then(null, m), t }; if (t && "function" == typeof t[z]) return e = t,
                        function(t) { for (var n = e[z]();;) { var r = n.next(); if (r.done) { t.complete(); break } if (t.next(r.value), t.closed) break } return "function" == typeof n.return && t.add((function() { n.return && n.return() })), t }; var e, n, r, i = w(t) ? "an invalid object" : "'".concat(t, "'"); throw new TypeError("You provided ".concat(i, " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")) };

                function Z(t, e, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new V(t, n, r); if (!i.closed) return e instanceof I ? e.subscribe(i) : Q(e)(i) } var K = function(t) { s(n, t); var e = l(n);

                    function n() { return v(this, n), e.apply(this, arguments) } return y(n, [{ key: "notifyNext", value: function(t, e, n, r, i) { this.destination.next(e) } }, { key: "notifyError", value: function(t, e) { this.destination.error(t) } }, { key: "notifyComplete", value: function(t) { this.destination.complete() } }]), n }(T);

                function G(t, e) { return function(n) { if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?"); return n.lift(new Y(t, e)) } } var Y = function() {
                        function t(e, n) { v(this, t), this.project = e, this.thisArg = n } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new X(t, this.project, this.thisArg)) } }]), t }(),
                    X = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i) { var o; return v(this, n), (o = e.call(this, t)).project = r, o.count = 0, o.thisArg = i || h(o), o } return y(n, [{ key: "_next", value: function(t) { var e; try { e = this.project.call(this.thisArg, t, this.count++) } catch (n) { return void this.destination.error(n) }
                                this.destination.next(e) } }]), n }(T);

                function $(t, e) { return new I((function(n) { var r = new C,
                            i = 0; return r.add(e.schedule((function() { i !== t.length ? (n.next(t[i++]), n.closed || r.add(this.schedule())) : n.complete() }))), r })) }

                function J(t, e) { return e ? function(t, e) { if (null != t) { if (function(t) { return t && "function" == typeof t[O] }(t)) return function(t, e) { return new I((function(n) { var r = new C; return r.add(e.schedule((function() { var i = t[O]();
                                        r.add(i.subscribe({ next: function(t) { r.add(e.schedule((function() { return n.next(t) }))) }, error: function(t) { r.add(e.schedule((function() { return n.error(t) }))) }, complete: function() { r.add(e.schedule((function() { return n.complete() }))) } })) }))), r })) }(t, e); if (W(t)) return function(t, e) { return new I((function(n) { var r = new C; return r.add(e.schedule((function() { return t.then((function(t) { r.add(e.schedule((function() { n.next(t), r.add(e.schedule((function() { return n.complete() }))) }))) }), (function(t) { r.add(e.schedule((function() { return n.error(t) }))) })) }))), r })) }(t, e); if (q(t)) return $(t, e); if (function(t) { return t && "function" == typeof t[z] }(t) || "string" == typeof t) return function(t, e) { if (!t) throw new Error("Iterable cannot be null"); return new I((function(n) { var r, i = new C; return i.add((function() { r && "function" == typeof r.return && r.return() })), i.add(e.schedule((function() { r = t[z](), i.add(e.schedule((function() { if (!n.closed) { var t, e; try { var i = r.next();
                                                    t = i.value, e = i.done } catch (o) { return void n.error(o) }
                                                e ? n.complete() : (n.next(t), this.schedule()) } }))) }))), i })) }(t, e) } throw new TypeError((null !== t && typeof t || t) + " is not observable") }(t, e) : t instanceof I ? t : new I(Q(t)) }

                function tt(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY; return "function" == typeof e ? function(r) { return r.pipe(tt((function(n, r) { return J(t(n, r)).pipe(G((function(t, i) { return e(n, t, r, i) }))) }), n)) } : ("number" == typeof e && (n = e), function(e) { return e.lift(new et(t, n)) }) } var et = function() {
                        function t(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.POSITIVE_INFINITY;
                            v(this, t), this.project = e, this.concurrent = n } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new nt(t, this.project, this.concurrent)) } }]), t }(),
                    nt = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY; return v(this, n), (i = e.call(this, t)).project = r, i.concurrent = o, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i } return y(n, [{ key: "_next", value: function(t) { this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t) } }, { key: "_tryNext", value: function(t) { var e, n = this.index++; try { e = this.project(t, n) } catch (r) { return void this.destination.error(r) }
                                this.active++, this._innerSub(e, t, n) } }, { key: "_innerSub", value: function(t, e, n) { var r = new V(this, e, n),
                                    i = this.destination;
                                i.add(r); var o = Z(this, t, void 0, void 0, r);
                                o !== r && i.add(o) } }, { key: "_complete", value: function() { this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe() } }, { key: "notifyNext", value: function(t, e, n, r, i) { this.destination.next(e) } }, { key: "notifyComplete", value: function(t) { var e = this.buffer;
                                this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete() } }]), n }(K);

                function rt() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.POSITIVE_INFINITY; return tt(P, t) }

                function it(t, e) { return e ? $(t, e) : new I(U(t)) }

                function ot() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = Number.POSITIVE_INFINITY,
                        i = null,
                        o = e[e.length - 1]; return B(o) ? (i = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (r = e.pop())) : "number" == typeof o && (r = e.pop()), null === i && 1 === e.length && e[0] instanceof I ? e[0] : rt(r)(it(e, i)) }

                function at() { return function(t) { return t.lift(new ut(t)) } } var st, ut = function() {
                        function t(e) { v(this, t), this.connectable = e } return y(t, [{ key: "call", value: function(t, e) { var n = this.connectable;
                                n._refCount++; var r = new lt(t, n),
                                    i = e.subscribe(r); return r.closed || (r.connection = n.connect()), i } }]), t }(),
                    lt = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, t)).connectable = r, i } return y(n, [{ key: "_unsubscribe", value: function() { var t = this.connectable; if (t) { this.connectable = null; var e = t._refCount; if (e <= 0) this.connection = null;
                                    else if (t._refCount = e - 1, e > 1) this.connection = null;
                                    else { var n = this.connection,
                                            r = t._connection;
                                        this.connection = null, !r || n && r !== n || r.unsubscribe() } } else this.connection = null } }]), n }(T),
                    ct = { operator: { value: null }, _refCount: { value: 0, writable: !0 }, _subject: { value: null, writable: !0 }, _connection: { value: null, writable: !0 }, _subscribe: { value: (st = function(t) { s(n, t); var e = l(n);

                                function n(t, r) { var i; return v(this, n), (i = e.call(this)).source = t, i.subjectFactory = r, i._refCount = 0, i._isComplete = !1, i } return y(n, [{ key: "_subscribe", value: function(t) { return this.getSubject().subscribe(t) } }, { key: "getSubject", value: function() { var t = this._subject; return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject } }, { key: "connect", value: function() { var t = this._connection; return t || (this._isComplete = !1, (t = this._connection = new C).add(this.source.subscribe(new ht(this.getSubject(), this))), t.closed && (this._connection = null, t = C.EMPTY)), t } }, { key: "refCount", value: function() { return at()(this) } }]), n }(I).prototype)._subscribe }, _isComplete: { value: st._isComplete, writable: !0 }, getSubject: { value: st.getSubject }, connect: { value: st.connect }, refCount: { value: st.refCount } },
                    ht = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, t)).connectable = r, i } return y(n, [{ key: "_error", value: function(t) { this._unsubscribe(), a(d(n.prototype), "_error", this).call(this, t) } }, { key: "_complete", value: function() { this.connectable._isComplete = !0, this._unsubscribe(), a(d(n.prototype), "_complete", this).call(this) } }, { key: "_unsubscribe", value: function() { var t = this.connectable; if (t) { this.connectable = null; var e = t._connection;
                                    t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe() } } }]), n }(L);

                function ft() { return new M }

                function dt(t) { return { toString: t }.toString() }

                function vt(t, e, n) { return dt((function() { var r = function(t) { return function() { if (t) { var e = t.apply(void 0, arguments); for (var n in e) this[n] = e[n] } } }(e);

                        function i() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; if (this instanceof i) return r.apply(this, e), this; var a = o(i, e); return s.annotation = a, s;

                            function s(t, e, n) { for (var r = t.hasOwnProperty("__parameters__") ? t.__parameters__ : Object.defineProperty(t, "__parameters__", { value: [] }).__parameters__; r.length <= n;) r.push(null); return (r[n] = r[n] || []).push(a), t } } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = t, i.annotationCls = i, i })) } var pt = vt("Inject", (function(t) { return { token: t } })),
                    yt = vt("Optional"),
                    gt = vt("Self"),
                    mt = vt("SkipSelf"),
                    _t = function(t) { return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t }({});

                function kt(t) { for (var e in t)
                        if (t[e] === kt) return e;
                    throw Error("Could not find renamed property on target object.") }

                function wt(t, e) { for (var n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]) }

                function bt(t) { return { token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0 } }

                function St(t) { return { factory: t.factory, providers: t.providers || [], imports: t.imports || [] } }

                function Ct(t) { return Et(t, t[Tt]) || Et(t, t[Pt]) }

                function Et(t, e) { return e && e.token === t ? e : null }

                function xt(t) { return t && (t.hasOwnProperty(At) || t.hasOwnProperty(Rt)) ? t[At] : null } var Tt = kt({ "\u0275prov": kt }),
                    At = kt({ "\u0275inj": kt }),
                    Ot = kt({ "\u0275provFallback": kt }),
                    Pt = kt({ ngInjectableDef: kt }),
                    Rt = kt({ ngInjectorDef: kt });

                function It(t) { if ("string" == typeof t) return t; if (Array.isArray(t)) return "[" + t.map(It).join(", ") + "]"; if (null == t) return "" + t; if (t.overriddenName) return "" + t.overriddenName; if (t.name) return "" + t.name; var e = t.toString(); if (null == e) return "" + e; var n = e.indexOf("\n"); return -1 === n ? e : e.substring(0, n) }

                function Dt(t, e) { return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e } var Nt = kt({ __forward_ref__: kt });

                function jt(t) { return t.__forward_ref__ = jt, t.toString = function() { return It(this()) }, t }

                function Ft(t) { return Lt(t) ? t() : t }

                function Lt(t) { return "function" == typeof t && t.hasOwnProperty(Nt) && t.__forward_ref__ === jt } var Mt, Ht = "undefined" != typeof globalThis && globalThis,
                    Bt = "undefined" != typeof window && window,
                    Vt = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                    Ut = "undefined" != typeof global && global,
                    zt = Ht || Ut || Bt || Vt,
                    qt = kt({ "\u0275cmp": kt }),
                    Wt = kt({ "\u0275dir": kt }),
                    Qt = kt({ "\u0275pipe": kt }),
                    Zt = kt({ "\u0275mod": kt }),
                    Kt = kt({ "\u0275loc": kt }),
                    Gt = kt({ "\u0275fac": kt }),
                    Yt = kt({ __NG_ELEMENT_ID__: kt }),
                    Xt = function() {
                        function t(e, n) { v(this, t), this._desc = e, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = bt({ token: this, providedIn: n.providedIn || "root", factory: n.factory })) } return y(t, [{ key: "toString", value: function() { return "InjectionToken " + this._desc } }]), t }(),
                    $t = new Xt("INJECTOR", -1),
                    Jt = {},
                    te = /\n/gm,
                    ee = kt({ provide: String, useValue: kt }),
                    ne = void 0;

                function re(t) { var e = ne; return ne = t, e }

                function ie(t) { var e = Mt; return Mt = t, e }

                function oe(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _t.Default; if (void 0 === ne) throw new Error("inject() must be called from an injection context"); return null === ne ? ue(t, void 0, e) : ne.get(t, e & _t.Optional ? null : void 0, e) }

                function ae(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _t.Default; return (Mt || oe)(Ft(t), e) } var se = ae;

                function ue(t, e, n) { var r = Ct(t); if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value; if (n & _t.Optional) return null; if (void 0 !== e) return e; throw new Error("Injector: NOT_FOUND [".concat(It(t), "]")) }

                function le(t) { for (var e = [], n = 0; n < t.length; n++) { var r = Ft(t[n]); if (Array.isArray(r)) { if (0 === r.length) throw new Error("Arguments array must have arguments."); for (var i = void 0, o = _t.Default, a = 0; a < r.length; a++) { var s = r[a];
                                s instanceof yt || "Optional" === s.ngMetadataName || s === yt ? o |= _t.Optional : s instanceof mt || "SkipSelf" === s.ngMetadataName || s === mt ? o |= _t.SkipSelf : s instanceof gt || "Self" === s.ngMetadataName || s === gt ? o |= _t.Self : i = s instanceof pt || s === pt ? s.token : s }
                            e.push(ae(i, o)) } else e.push(ae(r)) } return e } var ce = function() {
                        function t() { v(this, t) } return y(t, [{ key: "get", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Jt; if (e === Jt) { var n = new Error("NullInjectorError: No provider for ".concat(It(t), "!")); throw n.name = "NullInjectorError", n } return e } }]), t }(),
                    he = function t() { v(this, t) },
                    fe = function t() { v(this, t) };

                function de(t, e) { t.forEach((function(t) { return Array.isArray(t) ? de(t, e) : e(t) })) }

                function ve(t, e, n) { e >= t.length ? t.push(n) : t.splice(e, 0, n) }

                function pe(t, e) { return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0] }

                function ye(t, e) { for (var n = [], r = 0; r < t; r++) n.push(e); return n }

                function ge(t, e) { var n = me(t, e); if (n >= 0) return t[1 | n] }

                function me(t, e) { return function(t, e, n) { for (var r = 0, i = t.length >> 1; i !== r;) { var o = r + (i - r >> 1),
                                a = t[o << 1]; if (e === a) return o << 1;
                            a > e ? i = o : r = o + 1 } return ~(i << 1) }(t, e) } var _e, ke = function(t) { return t[t.OnPush = 0] = "OnPush", t[t.Default = 1] = "Default", t }({}),
                    we = ((_e = {})[_e.Emulated = 0] = "Emulated", _e[_e.Native = 1] = "Native", _e[_e.None = 2] = "None", _e[_e.ShadowDom = 3] = "ShadowDom", _e),
                    be = {},
                    Se = [],
                    Ce = 0;

                function Ee(t) { return dt((function() { var e = {},
                            n = { type: t.type, providersResolver: null, decls: t.decls, vars: t.vars, factory: null, template: t.template || null, consts: t.consts || null, ngContentSelectors: t.ngContentSelectors, hostBindings: t.hostBindings || null, hostVars: t.hostVars || 0, hostAttrs: t.hostAttrs || null, contentQueries: t.contentQueries || null, declaredInputs: e, inputs: null, outputs: null, exportAs: t.exportAs || null, onPush: t.changeDetection === ke.OnPush, directiveDefs: null, pipeDefs: null, selectors: t.selectors || Se, viewQuery: t.viewQuery || null, features: t.features || null, data: t.data || {}, encapsulation: t.encapsulation || we.Emulated, id: "c", styles: t.styles || Se, _: null, setInput: null, schemas: t.schemas || null, tView: null },
                            r = t.directives,
                            i = t.features,
                            o = t.pipes; return n.id += Ce++, n.inputs = Pe(t.inputs, e), n.outputs = Pe(t.outputs), i && i.forEach((function(t) { return t(n) })), n.directiveDefs = r ? function() { return ("function" == typeof r ? r() : r).map(xe) } : null, n.pipeDefs = o ? function() { return ("function" == typeof o ? o() : o).map(Te) } : null, n })) }

                function xe(t) { return Ie(t) || function(t) { return t[Wt] || null }(t) }

                function Te(t) { return function(t) { return t[Qt] || null }(t) } var Ae = {};

                function Oe(t) { var e = { type: t.type, bootstrap: t.bootstrap || Se, declarations: t.declarations || Se, imports: t.imports || Se, exports: t.exports || Se, transitiveCompileScopes: null, schemas: t.schemas || null, id: t.id || null }; return null != t.id && dt((function() { Ae[t.id] = t.type })), e }

                function Pe(t, e) { if (null == t) return be; var n = {}; for (var r in t)
                        if (t.hasOwnProperty(r)) { var i = t[r],
                                o = i;
                            Array.isArray(i) && (o = i[1], i = i[0]), n[i] = r, e && (e[i] = o) }
                    return n } var Re = Ee;

                function Ie(t) { return t[qt] || null }

                function De(t, e) { return t.hasOwnProperty(Gt) ? t[Gt] : null }

                function Ne(t, e) { var n = t[Zt] || null; if (!n && !0 === e) throw new Error("Type ".concat(It(t), " does not have '\u0275mod' property.")); return n }

                function je(t) { return Array.isArray(t) && "object" == typeof t[1] }

                function Fe(t) { return Array.isArray(t) && !0 === t[1] }

                function Le(t) { return 0 != (8 & t.flags) }

                function Me(t) { return 2 == (2 & t.flags) }

                function He(t) { return 1 == (1 & t.flags) }

                function Be(t) { return null !== t.template }

                function Ve(t) { return 0 != (512 & t[2]) } var Ue = function() {
                    function t(e, n, r) { v(this, t), this.previousValue = e, this.currentValue = n, this.firstChange = r } return y(t, [{ key: "isFirstChange", value: function() { return this.firstChange } }]), t }();

                function ze() { var t = We(this),
                        e = null == t ? void 0 : t.current; if (e) { var n = t.previous; if (n === be) t.previous = e;
                        else
                            for (var r in e) n[r] = e[r];
                        t.current = null, this.ngOnChanges(e) } }

                function qe(t, e, n, r) { var i = We(t) || function(t, e) { return t.__ngSimpleChanges__ = e }(t, { previous: be, current: null }),
                        o = i.current || (i.current = {}),
                        a = i.previous,
                        s = this.declaredInputs[n],
                        u = a[s];
                    o[s] = new Ue(u && u.currentValue, e, a === be), t[r] = e }

                function We(t) { return t.__ngSimpleChanges__ || null } var Qe = void 0;

                function Ze(t) { return !!t.listen } var Ke = { createRenderer: function(t, e) { return void 0 !== Qe ? Qe : "undefined" != typeof document ? document : void 0 } };

                function Ge(t) { for (; Array.isArray(t);) t = t[0]; return t }

                function Ye(t, e) { return Ge(e[t + 20]) }

                function Xe(t, e) { return Ge(e[t.index]) }

                function $e(t, e) { return t.data[e + 20] }

                function Je(t, e) { var n = e[t]; return je(n) ? n : n[0] }

                function tn(t) { var e = function(t) { return t.__ngContext__ || null }(t); return e ? Array.isArray(e) ? e : e.lView : null }

                function en(t) { return 4 == (4 & t[2]) }

                function nn(t) { return 128 == (128 & t[2]) }

                function rn(t, e) { return null === t || null == e ? null : t[e] }

                function on(t) { t[18] = 0 }

                function an(t, e) { t[5] += e; for (var n = t, r = t[3]; null !== r && (1 === e && 1 === n[5] || -1 === e && 0 === n[5]);) r[5] += e, n = r, r = r[3] } var sn = { lFrame: xn(null), bindingsEnabled: !0, checkNoChangesMode: !1 };

                function un() { return sn.bindingsEnabled }

                function ln() { return sn.lFrame.lView }

                function cn() { return sn.lFrame.tView }

                function hn() { return sn.lFrame.previousOrParentTNode }

                function fn(t, e) { sn.lFrame.previousOrParentTNode = t, sn.lFrame.isParent = e }

                function dn() { return sn.lFrame.isParent }

                function vn() { sn.lFrame.isParent = !1 }

                function pn() { return sn.checkNoChangesMode }

                function yn(t) { sn.checkNoChangesMode = t }

                function gn() { return sn.lFrame.bindingIndex++ }

                function mn(t, e) { var n = sn.lFrame;
                    n.bindingIndex = n.bindingRootIndex = t, _n(e) }

                function _n(t) { sn.lFrame.currentDirectiveIndex = t }

                function kn(t) { var e = sn.lFrame.currentDirectiveIndex; return -1 === e ? null : t[e] }

                function wn() { return sn.lFrame.currentQueryIndex }

                function bn(t) { sn.lFrame.currentQueryIndex = t }

                function Sn(t, e) { var n = En();
                    sn.lFrame = n, n.previousOrParentTNode = e, n.lView = t }

                function Cn(t, e) { var n = En(),
                        r = t[1];
                    sn.lFrame = n, n.previousOrParentTNode = e, n.lView = t, n.tView = r, n.contextLView = t, n.bindingIndex = r.bindingStartIndex }

                function En() { var t = sn.lFrame,
                        e = null === t ? null : t.child; return null === e ? xn(t) : e }

                function xn(t) { var e = { previousOrParentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: 0, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: t, child: null }; return null !== t && (t.child = e), e }

                function Tn() { var t = sn.lFrame; return sn.lFrame = t.parent, t.previousOrParentTNode = null, t.lView = null, t } var An = Tn;

                function On() { var t = Tn();
                    t.isParent = !0, t.tView = null, t.selectedIndex = 0, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0 }

                function Pn() { return sn.lFrame.selectedIndex }

                function Rn(t) { sn.lFrame.selectedIndex = t }

                function In() { var t = sn.lFrame; return $e(t.tView, t.selectedIndex) }

                function Dn(t, e) { for (var n = e.directiveStart, r = e.directiveEnd; n < r; n++) { var i = t.data[n].type.prototype,
                            o = i.ngAfterContentInit,
                            a = i.ngAfterContentChecked,
                            s = i.ngAfterViewInit,
                            u = i.ngAfterViewChecked,
                            l = i.ngOnDestroy;
                        o && (t.contentHooks || (t.contentHooks = [])).push(-n, o), a && ((t.contentHooks || (t.contentHooks = [])).push(n, a), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, a)), s && (t.viewHooks || (t.viewHooks = [])).push(-n, s), u && ((t.viewHooks || (t.viewHooks = [])).push(n, u), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, u)), null != l && (t.destroyHooks || (t.destroyHooks = [])).push(n, l) } }

                function Nn(t, e, n) { Ln(t, e, 3, n) }

                function jn(t, e, n, r) {
                    (3 & t[2]) === n && Ln(t, e, n, r) }

                function Fn(t, e) { var n = t[2];
                    (3 & n) === e && (n &= 2047, n += 1, t[2] = n) }

                function Ln(t, e, n, r) { for (var i = null != r ? r : -1, o = 0, a = void 0 !== r ? 65535 & t[18] : 0; a < e.length; a++)
                        if ("number" == typeof e[a + 1]) { if (o = e[a], null != r && o >= r) break } else e[a] < 0 && (t[18] += 65536), (o < i || -1 == i) && (Mn(t, n, e, a), t[18] = (4294901760 & t[18]) + a + 2), a++ }

                function Mn(t, e, n, r) { var i = n[r] < 0,
                        o = n[r + 1],
                        a = t[i ? -n[r] : n[r]];
                    i ? t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e && (t[2] += 2048, o.call(a)) : o.call(a) } var Hn = function t(e, n, r) { v(this, t), this.factory = e, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r };

                function Bn(t, e, n) { for (var r = Ze(t), i = 0; i < n.length;) { var o = n[i]; if ("number" == typeof o) { if (0 !== o) break;
                            i++; var a = n[i++],
                                s = n[i++],
                                u = n[i++];
                            r ? t.setAttribute(e, s, u, a) : e.setAttributeNS(a, s, u) } else { var l = o,
                                c = n[++i];
                            Un(l) ? r && t.setProperty(e, l, c) : r ? t.setAttribute(e, l, c) : e.setAttribute(l, c), i++ } } return i }

                function Vn(t) { return 3 === t || 4 === t || 6 === t }

                function Un(t) { return 64 === t.charCodeAt(0) }

                function zn(t, e) { if (null === e || 0 === e.length);
                    else if (null === t || 0 === t.length) t = e.slice();
                    else
                        for (var n = -1, r = 0; r < e.length; r++) { var i = e[r]; "number" == typeof i ? n = i : 0 === n || qn(t, n, i, null, -1 === n || 2 === n ? e[++r] : null) }
                    return t }

                function qn(t, e, n, r, i) { var o = 0,
                        a = t.length; if (-1 === e) a = -1;
                    else
                        for (; o < t.length;) { var s = t[o++]; if ("number" == typeof s) { if (s === e) { a = -1; break } if (s > e) { a = o - 1; break } } }
                    for (; o < t.length;) { var u = t[o]; if ("number" == typeof u) break; if (u === n) { if (null === r) return void(null !== i && (t[o + 1] = i)); if (r === t[o + 1]) return void(t[o + 2] = i) }
                        o++, null !== r && o++, null !== i && o++ } - 1 !== a && (t.splice(a, 0, e), o = a + 1), t.splice(o++, 0, n), null !== r && t.splice(o++, 0, r), null !== i && t.splice(o++, 0, i) }

                function Wn(t) { return -1 !== t }

                function Qn(t) { return 32767 & t }

                function Zn(t) { return t >> 16 }

                function Kn(t, e) { for (var n = Zn(t), r = e; n > 0;) r = r[15], n--; return r }

                function Gn(t) { return "string" == typeof t ? t : null == t ? "" : "" + t }

                function Yn(t) { return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : Gn(t) } var Xn = ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(zt);

                function $n(t) { return t instanceof Function ? t() : t } var Jn = !0;

                function tr(t) { var e = Jn; return Jn = t, e } var er = 0;

                function nr(t, e) { var n = ir(t, e); if (-1 !== n) return n; var r = e[1];
                    r.firstCreatePass && (t.injectorIndex = e.length, rr(r.data, t), rr(e, null), rr(r.blueprint, null)); var i = or(t, e),
                        o = t.injectorIndex; if (Wn(i))
                        for (var a = Qn(i), s = Kn(i, e), u = s[1].data, l = 0; l < 8; l++) e[o + l] = s[a + l] | u[a + l]; return e[o + 8] = i, o }

                function rr(t, e) { t.push(0, 0, 0, 0, 0, 0, 0, 0, e) }

                function ir(t, e) { return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null == e[t.injectorIndex + 8] ? -1 : t.injectorIndex }

                function or(t, e) { if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex; for (var n = e[6], r = 1; n && -1 === n.injectorIndex;) n = (e = e[15]) ? e[6] : null, r++; return n ? n.injectorIndex | r << 16 : -1 }

                function ar(t, e, n) {! function(t, e, n) { var r; "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(Yt) && (r = n[Yt]), null == r && (r = n[Yt] = er++); var i = 255 & r,
                            o = 1 << i,
                            a = 64 & i,
                            s = 32 & i,
                            u = e.data;
                        128 & i ? a ? s ? u[t + 7] |= o : u[t + 6] |= o : s ? u[t + 5] |= o : u[t + 4] |= o : a ? s ? u[t + 3] |= o : u[t + 2] |= o : s ? u[t + 1] |= o : u[t] |= o }(t, e, n) }

                function sr(t, e, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _t.Default,
                        i = arguments.length > 4 ? arguments[4] : void 0; if (null !== t) { var o = function(t) { if ("string" == typeof t) return t.charCodeAt(0) || 0; var e = t.hasOwnProperty(Yt) ? t[Yt] : void 0; return "number" == typeof e && e > 0 ? 255 & e : e }(n); if ("function" == typeof o) { Sn(e, t); try { var a = o(); if (null != a || r & _t.Optional) return a; throw new Error("No provider for ".concat(Yn(n), "!")) } finally { An() } } else if ("number" == typeof o) { if (-1 === o) return new vr(t, e); var s = null,
                                u = ir(t, e),
                                l = -1,
                                c = r & _t.Host ? e[16][6] : null; for ((-1 === u || r & _t.SkipSelf) && (l = -1 === u ? or(t, e) : e[u + 8], dr(r, !1) ? (s = e[1], u = Qn(l), e = Kn(l, e)) : u = -1); - 1 !== u;) { l = e[u + 8]; var h = e[1]; if (fr(o, u, h.data)) { var f = lr(u, e, n, s, r, c); if (f !== ur) return f }
                                dr(r, e[1].data[u + 8] === c) && fr(o, u, e) ? (s = h, u = Qn(l), e = Kn(l, e)) : u = -1 } } } if (r & _t.Optional && void 0 === i && (i = null), 0 == (r & (_t.Self | _t.Host))) { var d = e[9],
                            v = ie(void 0); try { return d ? d.get(n, i, r & _t.Optional) : ue(n, i, r & _t.Optional) } finally { ie(v) } } if (r & _t.Optional) return i; throw new Error("NodeInjector: NOT_FOUND [".concat(Yn(n), "]")) } var ur = {};

                function lr(t, e, n, r, i, o) { var a = e[1],
                        s = a.data[t + 8],
                        u = cr(s, a, n, null == r ? Me(s) && Jn : r != a && 3 === s.type, i & _t.Host && o === s); return null !== u ? hr(e, a, u, s) : ur }

                function cr(t, e, n, r, i) { for (var o = t.providerIndexes, a = e.data, s = 1048575 & o, u = t.directiveStart, l = o >> 20, c = i ? s + l : t.directiveEnd, h = r ? s : s + l; h < c; h++) { var f = a[h]; if (h < u && n === f || h >= u && f.type === n) return h } if (i) { var d = a[u]; if (d && Be(d) && d.type === n) return u } return null }

                function hr(t, e, n, r) { var i = t[n],
                        o = e.data; if (i instanceof Hn) { var a = i; if (a.resolving) throw new Error("Circular dep for " + Yn(o[n])); var s, u = tr(a.canSeeViewProviders);
                        a.resolving = !0, a.injectImpl && (s = ie(a.injectImpl)), Sn(t, r); try { i = t[n] = a.factory(void 0, o, t, r), e.firstCreatePass && n >= r.directiveStart && function(t, e, n) { var r, i = e.type.prototype,
                                    o = i.ngOnChanges,
                                    a = i.ngOnInit,
                                    s = i.ngDoCheck; if (o) { var u = ((r = e).type.prototype.ngOnChanges && (r.setInput = qe), ze);
                                    (n.preOrderHooks || (n.preOrderHooks = [])).push(t, u), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, u) }
                                a && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, a), s && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, s), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, s)) }(n, o[n], e) } finally { a.injectImpl && ie(s), tr(u), a.resolving = !1, An() } } return i }

                function fr(t, e, n) { var r = 64 & t,
                        i = 32 & t; return !!((128 & t ? r ? i ? n[e + 7] : n[e + 6] : i ? n[e + 5] : n[e + 4] : r ? i ? n[e + 3] : n[e + 2] : i ? n[e + 1] : n[e]) & 1 << t) }

                function dr(t, e) { return !(t & _t.Self || t & _t.Host && e) } var vr = function() {
                    function t(e, n) { v(this, t), this._tNode = e, this._lView = n } return y(t, [{ key: "get", value: function(t, e) { return sr(this._tNode, this._lView, t, void 0, e) } }]), t }();

                function pr(t) { var e = t; if (Lt(t)) return function() { var t = pr(Ft(e)); return t ? t() : null }; var n = De(e); if (null === n) { var r = xt(e);
                        n = r && r.factory } return n || null }

                function yr(t) { return t.ngDebugContext }

                function gr(t) { return t.ngOriginalError }

                function mr(t) { for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    t.error.apply(t, n) } var _r = function() {
                        function t() { v(this, t), this._console = console } return y(t, [{ key: "handleError", value: function(t) { var e = this._findOriginalError(t),
                                    n = this._findContext(t),
                                    r = function(t) { return t.ngErrorLogger || mr }(t);
                                r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n) } }, { key: "_findContext", value: function(t) { return t ? yr(t) ? yr(t) : this._findContext(gr(t)) : null } }, { key: "_findOriginalError", value: function(t) { for (var e = gr(t); e && gr(e);) e = gr(e); return e } }]), t }(),
                    kr = !0,
                    wr = !1;

                function br() { return wr = !0, kr }

                function Sr(t, e) { t.__ngContext__ = e }

                function Cr(t) { throw new Error("Multiple components match node with tagname " + t.tagName) }

                function Er() { throw new Error("Cannot mix multi providers and regular providers") }

                function xr(t, e, n) { for (var r = t.length;;) { var i = t.indexOf(e, n); if (-1 === i) return i; if (0 === i || t.charCodeAt(i - 1) <= 32) { var o = e.length; if (i + o === r || t.charCodeAt(i + o) <= 32) return i }
                        n = i + 1 } }

                function Tr(t, e, n) { for (var r = 0; r < t.length;) { var i = t[r++]; if (n && "class" === i) { if (-1 !== xr((i = t[r]).toLowerCase(), e, 0)) return !0 } else if (1 === i) { for (; r < t.length && "string" == typeof(i = t[r++]);)
                                if (i.toLowerCase() === e) return !0;
                            return !1 } } return !1 }

                function Ar(t) { return 0 === t.type && "ng-template" !== t.tagName }

                function Or(t, e, n) { return e === (0 !== t.type || n ? t.tagName : "ng-template") }

                function Pr(t, e, n) { for (var r = 4, i = t.attrs || [], o = function(t) { for (var e = 0; e < t.length; e++)
                                if (Vn(t[e])) return e;
                            return t.length }(i), a = !1, s = 0; s < e.length; s++) { var u = e[s]; if ("number" != typeof u) { if (!a)
                                if (4 & r) { if (r = 2 | 1 & r, "" !== u && !Or(t, u, n) || "" === u && 1 === e.length) { if (Rr(r)) return !1;
                                        a = !0 } } else { var l = 8 & r ? u : e[++s]; if (8 & r && null !== t.attrs) { if (!Tr(t.attrs, l, n)) { if (Rr(r)) return !1;
                                            a = !0 } continue } var c = Ir(8 & r ? "class" : u, i, Ar(t), n); if (-1 === c) { if (Rr(r)) return !1;
                                        a = !0; continue } if ("" !== l) { var h;
                                        h = c > o ? "" : i[c + 1].toLowerCase(); var f = 8 & r ? h : null; if (f && -1 !== xr(f, l, 0) || 2 & r && l !== h) { if (Rr(r)) return !1;
                                            a = !0 } } } } else { if (!a && !Rr(r) && !Rr(u)) return !1; if (a && Rr(u)) continue;
                            a = !1, r = u | 1 & r } } return Rr(r) || a }

                function Rr(t) { return 0 == (1 & t) }

                function Ir(t, e, n, r) { if (null === e) return -1; var i = 0; if (r || !n) { for (var o = !1; i < e.length;) { var a = e[i]; if (a === t) return i; if (3 === a || 6 === a) o = !0;
                            else { if (1 === a || 2 === a) { for (var s = e[++i];
                                        "string" == typeof s;) s = e[++i]; continue } if (4 === a) break; if (0 === a) { i += 4; continue } }
                            i += o ? 1 : 2 } return -1 } return function(t, e) { var n = t.indexOf(4); if (n > -1)
                            for (n++; n < t.length;) { var r = t[n]; if ("number" == typeof r) return -1; if (r === e) return n;
                                n++ }
                        return -1 }(e, t) }

                function Dr(t, e) { for (var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = 0; r < e.length; r++)
                        if (Pr(t, e[r], n)) return !0;
                    return !1 }

                function Nr(t, e) { t: for (var n = 0; n < e.length; n++) { var r = e[n]; if (t.length === r.length) { for (var i = 0; i < t.length; i++)
                                if (t[i] !== r[i]) continue t;
                            return !0 } }
                    return !1 }

                function jr(t, e) { return t ? ":not(" + e.trim() + ")" : e }

                function Fr(t) { for (var e = t[0], n = 1, r = 2, i = "", o = !1; n < t.length;) { var a = t[n]; if ("string" == typeof a)
                            if (2 & r) { var s = t[++n];
                                i += "[" + a + (s.length > 0 ? '="' + s + '"' : "") + "]" } else 8 & r ? i += "." + a : 4 & r && (i += " " + a);
                        else "" === i || Rr(a) || (e += jr(o, i), i = ""), r = a, o = o || !Rr(r);
                        n++ } return "" !== i && (e += jr(o, i)), e } var Lr = {};

                function Mr(t) { var e = t[3]; return Fe(e) ? e[3] : e }

                function Hr(t) { return Vr(t[13]) }

                function Br(t) { return Vr(t[4]) }

                function Vr(t) { for (; null !== t && !Fe(t);) t = t[4]; return t }

                function Ur(t) { zr(cn(), ln(), Pn() + t, pn()) }

                function zr(t, e, n, r) { if (!r)
                        if (3 == (3 & e[2])) { var i = t.preOrderCheckHooks;
                            null !== i && Nn(e, i, n) } else { var o = t.preOrderHooks;
                            null !== o && jn(e, o, 0, n) }
                    Rn(n) }

                function qr(t, e) { return t << 17 | e << 2 }

                function Wr(t) { return t >> 17 & 32767 }

                function Qr(t) { return 2 | t }

                function Zr(t) { return (131068 & t) >> 2 }

                function Kr(t, e) { return -131069 & t | e << 2 }

                function Gr(t) { return 1 | t }

                function Yr(t, e) { var n = t.contentQueries; if (null !== n)
                        for (var r = 0; r < n.length; r += 2) { var i = n[r],
                                o = n[r + 1]; if (-1 !== o) { var a = t.data[o];
                                bn(i), a.contentQueries(2, e[o], o) } } }

                function Xr(t, e, n) { return Ze(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t) }

                function $r(t, e, n, r, i, o, a, s, u, l) { var c = e.blueprint.slice(); return c[0] = i, c[2] = 140 | r, on(c), c[3] = c[15] = t, c[8] = n, c[10] = a || t && t[10], c[11] = s || t && t[11], c[12] = u || t && t[12] || null, c[9] = l || t && t[9] || null, c[6] = o, c[16] = 2 == e.type ? t[16] : c, c }

                function Jr(t, e, n, r, i, o) { var a = n + 20,
                        s = t.data[a] || function(t, e, n, r, i, o) { var a = hn(),
                                s = dn(),
                                u = s ? a : a && a.parent,
                                l = t.data[n] = li(0, u && u !== e ? u : null, r, n, i, o); return null === t.firstChild && (t.firstChild = l), a && (!s || null != a.child || null === l.parent && 2 !== a.type ? s || (a.next = l) : a.child = l), l }(t, e, a, r, i, o); return fn(s, !0), s }

                function ti(t, e, n) { Cn(e, e[6]); try { var r = t.viewQuery;
                        null !== r && Ri(1, r, n); var i = t.template;
                        null !== i && ri(t, e, i, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && Yr(t, e), t.staticViewQueries && Ri(2, t.viewQuery, n); var o = t.components;
                        null !== o && function(t, e) { for (var n = 0; n < e.length; n++) xi(t, e[n]) }(e, o) } catch (a) { throw t.firstCreatePass && (t.incompleteFirstPass = !0), a } finally { e[2] &= -5, On() } }

                function ei(t, e, n, r) { var i = e[2]; if (256 != (256 & i)) { Cn(e, e[6]); var o = pn(); try { on(e), sn.lFrame.bindingIndex = t.bindingStartIndex, null !== n && ri(t, e, n, 2, r); var a = 3 == (3 & i); if (!o)
                                if (a) { var s = t.preOrderCheckHooks;
                                    null !== s && Nn(e, s, null) } else { var u = t.preOrderHooks;
                                    null !== u && jn(e, u, 0, null), Fn(e, 0) }
                            if (function(t) { for (var e = Hr(t); null !== e; e = Br(e))
                                        if (e[2])
                                            for (var n = e[9], r = 0; r < n.length; r++) { var i = n[r],
                                                    o = i[3];
                                                0 == (1024 & i[2]) && an(o, 1), i[2] |= 1024 } }(e), function(t) { for (var e = Hr(t); null !== e; e = Br(e))
                                        for (var n = 10; n < e.length; n++) { var r = e[n],
                                                i = r[1];
                                            nn(r) && ei(i, r, i.template, r[8]) } }(e), null !== t.contentQueries && Yr(t, e), !o)
                                if (a) { var l = t.contentCheckHooks;
                                    null !== l && Nn(e, l) } else { var c = t.contentHooks;
                                    null !== c && jn(e, c, 1), Fn(e, 1) }! function(t, e) { try { var n = t.expandoInstructions; if (null !== n)
                                        for (var r = t.expandoStartIndex, i = -1, o = 0; o < n.length; o++) { var a = n[o]; "number" == typeof a ? a <= 0 ? (Rn(0 - a), i = r += 9 + n[++o]) : r += a : (null !== a && (mn(r, i), a(2, e[i])), i++) } } finally { Rn(-1) } }(t, e); var h = t.components;
                            null !== h && function(t, e) { for (var n = 0; n < e.length; n++) Ei(t, e[n]) }(e, h); var f = t.viewQuery; if (null !== f && Ri(2, f, r), !o)
                                if (a) { var d = t.viewCheckHooks;
                                    null !== d && Nn(e, d) } else { var v = t.viewHooks;
                                    null !== v && jn(e, v, 2), Fn(e, 2) }!0 === t.firstUpdatePass && (t.firstUpdatePass = !1), o || (e[2] &= -73), 1024 & e[2] && (e[2] &= -1025, an(e[3], -1)) } finally { On() } } }

                function ni(t, e, n, r) { var i = e[10],
                        o = !pn(),
                        a = en(e); try { o && !a && i.begin && i.begin(), a && ti(t, e, r), ei(t, e, n, r) } finally { o && !a && i.end && i.end() } }

                function ri(t, e, n, r, i) { var o = Pn(); try { Rn(-1), 2 & r && e.length > 20 && zr(t, e, 0, pn()), n(r, i) } finally { Rn(o) } }

                function ii(t, e, n) { un() && (function(t, e, n, r) { var i = n.directiveStart,
                            o = n.directiveEnd;
                        t.firstCreatePass || nr(n, e), Sr(r, e); for (var a = n.initialInputs, s = i; s < o; s++) { var u = t.data[s],
                                l = Be(u);
                            l && wi(e, n, u); var c = hr(e, t, s, n);
                            Sr(c, e), null !== a && bi(0, s - i, c, u, 0, a), l && (Je(n.index, e)[8] = c) } }(t, e, n, Xe(n, e)), 128 == (128 & n.flags) && function(t, e, n) { var r = n.directiveStart,
                            i = n.directiveEnd,
                            o = t.expandoInstructions,
                            a = t.firstCreatePass,
                            s = n.index - 20,
                            u = sn.lFrame.currentDirectiveIndex; try { Rn(s); for (var l = r; l < i; l++) { var c = t.data[l],
                                    h = e[l];
                                _n(l), null !== c.hostBindings || 0 !== c.hostVars || null !== c.hostAttrs ? pi(c, h) : a && o.push(null) } } finally { Rn(-1), _n(u) } }(t, e, n)) }

                function oi(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xe,
                        r = e.localNames; if (null !== r)
                        for (var i = e.index + 1, o = 0; o < r.length; o += 2) { var a = r[o + 1],
                                s = -1 === a ? n(e, t) : t[a];
                            t[i++] = s } }

                function ai(t) { var e = t.tView; return null === e || e.incompleteFirstPass ? t.tView = si(1, -1, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts) : e }

                function si(t, e, n, r, i, o, a, s, u, l) { var c = 20 + r,
                        h = c + i,
                        f = function(t, e) { for (var n = [], r = 0; r < e; r++) n.push(r < t ? null : Lr); return n }(c, h); return f[1] = { type: t, id: e, blueprint: f, template: n, queries: null, viewQuery: s, node: null, data: f.slice().fill(null, c), bindingStartIndex: c, expandoStartIndex: h, expandoInstructions: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: "function" == typeof o ? o() : o, pipeRegistry: "function" == typeof a ? a() : a, firstChild: null, schemas: u, consts: l, incompleteFirstPass: !1 } }

                function ui(t, e, n, r) { var i = Di(e);
                    i.push(n), t.firstCreatePass && function(t) { return t.cleanup || (t.cleanup = []) }(t).push(r, i.length - 1) }

                function li(t, e, n, r, i, o) { return { type: n, index: r, injectorIndex: e ? e.injectorIndex : -1, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, propertyBindings: null, flags: 0, providerIndexes: 0, tagName: i, attrs: o, mergedAttrs: null, localNames: null, initialInputs: void 0, inputs: null, outputs: null, tViews: null, next: null, projectionNext: null, child: null, parent: e, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 } }

                function ci(t, e, n) { for (var r in t)
                        if (t.hasOwnProperty(r)) { var i = t[r];
                            (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, i) : n[r] = [e, i] }
                    return n }

                function hi(t, e, n, r, i, o, a, s) { var u, l, c = Xe(e, n),
                        h = e.inputs;!s && null != h && (u = h[r]) ? (Fi(t, n, u, r, i), Me(e) && function(t, e) { var n = Je(e, t);
                        16 & n[2] || (n[2] |= 64) }(n, e.index)) : 3 === e.type && (r = "class" === (l = r) ? "className" : "for" === l ? "htmlFor" : "formaction" === l ? "formAction" : "innerHtml" === l ? "innerHTML" : "readonly" === l ? "readOnly" : "tabindex" === l ? "tabIndex" : l, i = null != a ? a(i, e.tagName || "", r) : i, Ze(o) ? o.setProperty(c, r, i) : Un(r) || (c.setProperty ? c.setProperty(r, i) : c[r] = i)) }

                function fi(t, e, n, r) { var i = !1; if (un()) { var o = function(t, e, n) { var r = t.directiveRegistry,
                                    i = null; if (r)
                                    for (var o = 0; o < r.length; o++) { var a = r[o];
                                        Dr(n, a.selectors, !1) && (i || (i = []), ar(nr(n, e), t, a.type), Be(a) ? (2 & n.flags && Cr(n), gi(t, n), i.unshift(a)) : i.push(a)) }
                                return i }(t, e, n),
                            a = null === r ? null : { "": -1 }; if (null !== o) { var s = 0;
                            i = !0, _i(n, t.data.length, o.length); for (var u = 0; u < o.length; u++) { var l = o[u];
                                l.providersResolver && l.providersResolver(l) }
                            yi(t, n, o.length); for (var c = !1, h = !1, f = 0; f < o.length; f++) { var d = o[f];
                                n.mergedAttrs = zn(n.mergedAttrs, d.hostAttrs), ki(t, e, d), mi(t.data.length - 1, d, a), null !== d.contentQueries && (n.flags |= 8), null === d.hostBindings && null === d.hostAttrs && 0 === d.hostVars || (n.flags |= 128); var v = d.type.prototype;!c && (v.ngOnChanges || v.ngOnInit || v.ngDoCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - 20), c = !0), h || !v.ngOnChanges && !v.ngDoCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - 20), h = !0), di(t, d), s += d.hostVars }! function(t, e) { for (var n = e.directiveEnd, r = t.data, i = e.attrs, o = [], a = null, s = null, u = e.directiveStart; u < n; u++) { var l = r[u],
                                        c = l.inputs,
                                        h = null === i || Ar(e) ? null : Si(c, i);
                                    o.push(h), a = ci(c, u, a), s = ci(l.outputs, u, s) }
                                null !== a && (a.hasOwnProperty("class") && (e.flags |= 16), a.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = o, e.inputs = a, e.outputs = s }(t, n), vi(t, e, s) }
                        a && function(t, e, n) { if (e)
                                for (var r = t.localNames = [], i = 0; i < e.length; i += 2) { var o = n[e[i + 1]]; if (null == o) throw new Error("Export of name '".concat(e[i + 1], "' not found!"));
                                    r.push(e[i], o) } }(n, r, a) } return n.mergedAttrs = zn(n.mergedAttrs, n.attrs), i }

                function di(t, e) { var n = t.expandoInstructions;
                    n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars) }

                function vi(t, e, n) { for (var r = 0; r < n; r++) e.push(Lr), t.blueprint.push(Lr), t.data.push(null) }

                function pi(t, e) { null !== t.hostBindings && t.hostBindings(1, e) }

                function yi(t, e, n) { var r = 20 - e.index,
                        i = t.data.length - (1048575 & e.providerIndexes);
                    (t.expandoInstructions || (t.expandoInstructions = [])).push(r, i, n) }

                function gi(t, e) { e.flags |= 2, (t.components || (t.components = [])).push(e.index) }

                function mi(t, e, n) { if (n) { if (e.exportAs)
                            for (var r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
                        Be(e) && (n[""] = t) } }

                function _i(t, e, n) { t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e }

                function ki(t, e, n) { t.data.push(n); var r = n.factory || (n.factory = De(n.type)),
                        i = new Hn(r, Be(n), null);
                    t.blueprint.push(i), e.push(i) }

                function wi(t, e, n) { var r = Xe(e, t),
                        i = ai(n),
                        o = t[10],
                        a = Ti(t, $r(t, i, null, n.onPush ? 64 : 16, r, e, o, o.createRenderer(r, n)));
                    t[e.index] = a }

                function bi(t, e, n, r, i, o) { var a = o[e]; if (null !== a)
                        for (var s = r.setInput, u = 0; u < a.length;) { var l = a[u++],
                                c = a[u++],
                                h = a[u++];
                            null !== s ? r.setInput(n, h, l, c) : n[c] = h } }

                function Si(t, e) { for (var n = null, r = 0; r < e.length;) { var i = e[r]; if (0 !== i)
                            if (5 !== i) { if ("number" == typeof i) break;
                                t.hasOwnProperty(i) && (null === n && (n = []), n.push(i, t[i], e[r + 1])), r += 2 } else r += 2;
                        else r += 4 } return n }

                function Ci(t, e, n, r) { return new Array(t, !0, !1, e, null, 0, r, n, null, null) }

                function Ei(t, e) { var n = Je(e, t); if (nn(n)) { var r = n[1];
                        80 & n[2] ? ei(r, n, r.template, n[8]) : n[5] > 0 && function t(e) { for (var n = Hr(e); null !== n; n = Br(n))
                                for (var r = 10; r < n.length; r++) { var i = n[r]; if (1024 & i[2]) { var o = i[1];
                                        ei(o, i, o.template, i[8]) } else i[5] > 0 && t(i) }
                            var a = e[1].components; if (null !== a)
                                for (var s = 0; s < a.length; s++) { var u = Je(a[s], e);
                                    nn(u) && u[5] > 0 && t(u) } }(n) } }

                function xi(t, e) { var n = Je(e, t),
                        r = n[1];! function(t, e) { for (var n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n]) }(r, n), ti(r, n, n[8]) }

                function Ti(t, e) { return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e }

                function Ai(t) { for (; t;) { t[2] |= 64; var e = Mr(t); if (Ve(t) && !e) return t;
                        t = e } return null }

                function Oi(t, e, n) { var r = e[10];
                    r.begin && r.begin(); try { ei(t, e, t.template, n) } catch (i) { throw ji(e, i), i } finally { r.end && r.end() } }

                function Pi(t) {! function(t) { for (var e = 0; e < t.components.length; e++) { var n = t.components[e],
                                r = tn(n),
                                i = r[1];
                            ni(i, r, i.template, n) } }(t[8]) }

                function Ri(t, e, n) { bn(0), e(t, n) } var Ii = Promise.resolve(null);

                function Di(t) { return t[7] || (t[7] = []) }

                function Ni(t, e, n) { return (null === t || Be(t)) && (n = function(t) { for (; Array.isArray(t);) { if ("object" == typeof t[1]) return t;
                            t = t[0] } return null }(n[e.index])), n[11] }

                function ji(t, e) { var n = t[9],
                        r = n ? n.get(_r, null) : null;
                    r && r.handleError(e) }

                function Fi(t, e, n, r, i) { for (var o = 0; o < n.length;) { var a = n[o++],
                            s = n[o++],
                            u = e[a],
                            l = t.data[a];
                        null !== l.setInput ? l.setInput(u, i, r, s) : u[s] = i } }

                function Li(t, e) { var n = e[3]; return -1 === t.index ? Fe(n) ? n : null : n }

                function Mi(t, e) { var n = Li(t, e); return n ? Yi(e[11], n[7]) : null }

                function Hi(t, e, n, r, i) { if (null != r) { var o, a = !1;
                        Fe(r) ? o = r : je(r) && (a = !0, r = r[0]); var s = Ge(r);
                        0 === t && null !== n ? null == i ? Ki(e, n, s) : Zi(e, n, s, i || null) : 1 === t && null !== n ? Zi(e, n, s, i || null) : 2 === t ? function(t, e, n) { var r = Yi(t, e);
                            r && function(t, e, n, r) { Ze(t) ? t.removeChild(e, n, r) : e.removeChild(n) }(t, r, e, n) }(e, s, a) : 3 === t && e.destroyNode(s), null != o && function(t, e, n, r, i) { var o = n[7];
                            o !== Ge(n) && Hi(e, t, r, o, i); for (var a = 10; a < n.length; a++) { var s = n[a];
                                eo(s[1], s, t, e, r, o) } }(e, t, o, n, i) } }

                function Bi(t, e, n, r) { var i = Mi(t.node, e);
                    i && eo(t, e, e[11], n ? 1 : 2, i, r) }

                function Vi(t, e) { var n = t[9],
                        r = n.indexOf(e);
                    1024 & e[2] && an(e[3], -1), n.splice(r, 1) }

                function Ui(t, e) { if (!(t.length <= 10)) { var n = 10 + e,
                            r = t[n]; if (r) { var i = r[17];
                            null !== i && i !== t && Vi(i, r), e > 0 && (t[n - 1][4] = r[4]); var o = pe(t, 10 + e);
                            Bi(r[1], r, !1, null); var a = o[19];
                            null !== a && a.detachView(o[1]), r[3] = null, r[4] = null, r[2] &= -129 } return r } }

                function zi(t, e) { if (!(256 & e[2])) { var n = e[11];
                        Ze(n) && n.destroyNode && eo(t, e, n, 3, null, null),
                            function(t) { var e = t[13]; if (!e) return Wi(t[1], t); for (; e;) { var n = null; if (je(e)) n = e[13];
                                    else { var r = e[10];
                                        r && (n = r) } if (!n) { for (; e && !e[4] && e !== t;) je(e) && Wi(e[1], e), e = qi(e, t);
                                        null === e && (e = t), je(e) && Wi(e[1], e), n = e && e[4] }
                                    e = n } }(e) } }

                function qi(t, e) { var n; return je(t) && (n = t[6]) && 2 === n.type ? Li(n, t) : t[3] === e ? null : t[3] }

                function Wi(t, e) { if (!(256 & e[2])) { e[2] &= -129, e[2] |= 256,
                            function(t, e) { var n; if (null != t && null != (n = t.destroyHooks))
                                    for (var r = 0; r < n.length; r += 2) { var i = e[n[r]]; if (!(i instanceof Hn)) { var o = n[r + 1]; if (Array.isArray(o))
                                                for (var a = 0; a < o.length; a += 2) o[a + 1].call(i[o[a]]);
                                            else o.call(i) } } }(t, e),
                            function(t, e) { var n = t.cleanup; if (null !== n) { for (var r = e[7], i = 0; i < n.length - 1; i += 2)
                                        if ("string" == typeof n[i]) { var o = n[i + 1],
                                                a = "function" == typeof o ? o(e) : Ge(e[o]),
                                                s = r[n[i + 2]],
                                                u = n[i + 3]; "boolean" == typeof u ? a.removeEventListener(n[i], s, u) : u >= 0 ? r[u]() : r[-u].unsubscribe(), i += 2 } else n[i].call(r[n[i + 1]]);
                                    e[7] = null } }(t, e); var n = e[6];
                        n && 3 === n.type && Ze(e[11]) && e[11].destroy(); var r = e[17]; if (null !== r && Fe(e[3])) { r !== e[3] && Vi(r, e); var i = e[19];
                            null !== i && i.detachView(t) } } }

                function Qi(t, e, n) { for (var r = e.parent; null != r && (4 === r.type || 5 === r.type);) r = (e = r).parent; if (null == r) { var i = n[6]; return 2 === i.type ? Mi(i, n) : n[0] } if (e && 5 === e.type && 4 & e.flags) return Xe(e, n).parentNode; if (2 & r.flags) { var o = t.data,
                            a = o[o[r.index].directiveStart].encapsulation; if (a !== we.ShadowDom && a !== we.Native) return null } return Xe(r, n) }

                function Zi(t, e, n, r) { Ze(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0) }

                function Ki(t, e, n) { Ze(t) ? t.appendChild(e, n) : e.appendChild(n) }

                function Gi(t, e, n, r) { null !== r ? Zi(t, e, n, r) : Ki(t, e, n) }

                function Yi(t, e) { return Ze(t) ? t.parentNode(e) : e.parentNode }

                function Xi(t, e) { if (2 === t.type) { var n = Li(t, e); return null === n ? null : Ji(n.indexOf(e, 10) - 10, n) } return 4 === t.type || 5 === t.type ? Xe(t, e) : null }

                function $i(t, e, n, r) { var i = Qi(t, r, e); if (null != i) { var o = e[11],
                            a = Xi(r.parent || e[6], e); if (Array.isArray(n))
                            for (var s = 0; s < n.length; s++) Gi(o, i, n[s], a);
                        else Gi(o, i, n, a) } }

                function Ji(t, e) { var n = 10 + t + 1; if (n < e.length) { var r = e[n],
                            i = r[1].firstChild; if (null !== i) return function t(e, n) { if (null !== n) { var r = n.type; if (3 === r) return Xe(n, e); if (0 === r) return Ji(-1, e[n.index]); if (4 === r || 5 === r) { var i = n.child; if (null !== i) return t(e, i); var o = e[n.index]; return Fe(o) ? Ji(-1, o) : Ge(o) } var a = e[16],
                                    s = a[6],
                                    u = Mr(a),
                                    l = s.projection[n.projection]; return null != l ? t(u, l) : t(e, n.next) } return null }(r, i) } return e[7] }

                function to(t, e, n, r, i, o, a) { for (; null != n;) { var s = r[n.index],
                            u = n.type;
                        a && 0 === e && (s && Sr(Ge(s), r), n.flags |= 4), 64 != (64 & n.flags) && (4 === u || 5 === u ? (to(t, e, n.child, r, i, o, !1), Hi(e, t, i, s, o)) : 1 === u ? no(t, e, r, n, i, o) : Hi(e, t, i, s, o)), n = a ? n.projectionNext : n.next } }

                function eo(t, e, n, r, i, o) { to(n, r, t.node.child, e, i, o, !1) }

                function no(t, e, n, r, i, o) { var a = n[16],
                        s = a[6].projection[r.projection]; if (Array.isArray(s))
                        for (var u = 0; u < s.length; u++) Hi(e, t, i, s[u], o);
                    else to(t, e, s, a[3], i, o, !0) }

                function ro(t, e, n) { Ze(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n }

                function io(t, e, n) { Ze(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n } var oo, ao, so, uo = function() {
                        function t(e, n) { v(this, t), this._lView = e, this._cdRefInjectingView = n, this._appRef = null, this._viewContainerRef = null } return y(t, [{ key: "rootNodes", get: function() { var t = this._lView; return null == t[0] ? function t(e, r, i, o) { for (var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]; null !== i;) { var s = r[i.index]; if (null !== s && o.push(Ge(s)), Fe(s))
                                            for (var u = 10; u < s.length; u++) { var l = s[u],
                                                    c = l[1].firstChild;
                                                null !== c && t(l[1], l, c, o) }
                                        var h = i.type; if (4 === h || 5 === h) t(e, r, i.child, o);
                                        else if (1 === h) { var f = r[16],
                                                d = f[6].projection[i.projection]; if (Array.isArray(d)) o.push.apply(o, n(d));
                                            else { var v = Mr(f);
                                                t(v[1], v, d, o, !0) } }
                                        i = a ? i.projectionNext : i.next } return o }(t[1], t, t[6].child, []) : [] } }, { key: "context", get: function() { return this._lView[8] } }, { key: "destroyed", get: function() { return 256 == (256 & this._lView[2]) } }, { key: "destroy", value: function() { if (this._appRef) this._appRef.detachView(this);
                                else if (this._viewContainerRef) { var t = this._viewContainerRef.indexOf(this);
                                    t > -1 && this._viewContainerRef.detach(t), this._viewContainerRef = null }
                                zi(this._lView[1], this._lView) } }, { key: "onDestroy", value: function(t) { ui(this._lView[1], this._lView, null, t) } }, { key: "markForCheck", value: function() { Ai(this._cdRefInjectingView || this._lView) } }, { key: "detach", value: function() { this._lView[2] &= -129 } }, { key: "reattach", value: function() { this._lView[2] |= 128 } }, { key: "detectChanges", value: function() { Oi(this._lView[1], this._lView, this.context) } }, { key: "checkNoChanges", value: function() {! function(t, e, n) { yn(!0); try { Oi(t, e, n) } finally { yn(!1) } }(this._lView[1], this._lView, this.context) } }, { key: "attachToViewContainerRef", value: function(t) { if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                                this._viewContainerRef = t } }, { key: "detachFromAppRef", value: function() { var t;
                                this._appRef = null, eo(this._lView[1], t = this._lView, t[11], 2, null, null) } }, { key: "attachToAppRef", value: function(t) { if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                                this._appRef = t } }]), t }(),
                    lo = function(t) { s(n, t); var e = l(n);

                        function n(t) { var r; return v(this, n), (r = e.call(this, t))._view = t, r } return y(n, [{ key: "detectChanges", value: function() { Pi(this._view) } }, { key: "checkNoChanges", value: function() {! function(t) { yn(!0); try { Pi(t) } finally { yn(!1) } }(this._view) } }, { key: "context", get: function() { return null } }]), n }(uo);

                function co(t, e, n) { return oo || (oo = function(t) { s(n, t); var e = l(n);

                        function n() { return v(this, n), e.apply(this, arguments) } return n }(t)), new oo(Xe(e, n)) }

                function ho(t, e, n, r) { return ao || (ao = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i) { var o; return v(this, n), (o = e.call(this))._declarationView = t, o._declarationTContainer = r, o.elementRef = i, o } return y(n, [{ key: "createEmbeddedView", value: function(t) { var e = this._declarationTContainer.tViews,
                                    n = $r(this._declarationView, e, t, 16, null, e.node);
                                n[17] = this._declarationView[this._declarationTContainer.index]; var r = this._declarationView[19]; return null !== r && (n[19] = r.createEmbeddedView(e)), ti(e, n, t), new uo(n) } }]), n }(t)), 0 === n.type ? new ao(r, n, co(e, n, r)) : null }

                function fo(t, e, n, r) { var i;
                    so || (so = function(t) { s(r, t); var n = l(r);

                        function r(t, e, i) { var o; return v(this, r), (o = n.call(this))._lContainer = t, o._hostTNode = e, o._hostView = i, o } return y(r, [{ key: "element", get: function() { return co(e, this._hostTNode, this._hostView) } }, { key: "injector", get: function() { return new vr(this._hostTNode, this._hostView) } }, { key: "parentInjector", get: function() { var t = or(this._hostTNode, this._hostView),
                                    e = Kn(t, this._hostView),
                                    n = function(t, e, n) { if (n.parent && -1 !== n.parent.injectorIndex) { for (var r = n.parent.injectorIndex, i = n.parent; null != i.parent && r == i.parent.injectorIndex;) i = i.parent; return i } for (var o = Zn(t), a = e, s = e[6]; o > 1;) s = (a = a[15])[6], o--; return s }(t, this._hostView, this._hostTNode); return Wn(t) && null != n ? new vr(n, e) : new vr(null, this._hostView) } }, { key: "clear", value: function() { for (; this.length > 0;) this.remove(this.length - 1) } }, { key: "get", value: function(t) { return null !== this._lContainer[8] && this._lContainer[8][t] || null } }, { key: "length", get: function() { return this._lContainer.length - 10 } }, { key: "createEmbeddedView", value: function(t, e, n) { var r = t.createEmbeddedView(e || {}); return this.insert(r, n), r } }, { key: "createComponent", value: function(t, e, n, r, i) { var o = n || this.parentInjector; if (!i && null == t.ngModule && o) { var a = o.get(he, null);
                                    a && (i = a) } var s = t.create(o, r, void 0, i); return this.insert(s.hostView, e), s } }, { key: "insert", value: function(t, e) { var n = t._lView,
                                    r = n[1]; if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!"); if (this.allocateContainerIfNeeded(), Fe(n[3])) { var i = this.indexOf(t); if (-1 !== i) this.detach(i);
                                    else { var o = n[3],
                                            a = new so(o, o[6], o[3]);
                                        a.detach(a.indexOf(t)) } } var s = this._adjustIndex(e); return function(t, e, n, r) { var i = 10 + r,
                                        o = n.length;
                                    r > 0 && (n[i - 1][4] = e), r < o - 10 ? (e[4] = n[i], ve(n, 10 + r, e)) : (n.push(e), e[4] = null), e[3] = n; var a = e[17];
                                    null !== a && n !== a && function(t, e) { var n = t[9];
                                        e[16] !== e[3][3][16] && (t[2] = !0), null === n ? t[9] = [e] : n.push(e) }(a, e); var s = e[19];
                                    null !== s && s.insertView(t), e[2] |= 128 }(r, n, this._lContainer, s), Bi(r, n, !0, Ji(s, this._lContainer)), t.attachToViewContainerRef(this), ve(this._lContainer[8], s, t), t } }, { key: "move", value: function(t, e) { if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!"); return this.insert(t, e) } }, { key: "indexOf", value: function(t) { var e = this._lContainer[8]; return null !== e ? e.indexOf(t) : -1 } }, { key: "remove", value: function(t) { this.allocateContainerIfNeeded(); var e = this._adjustIndex(t, -1),
                                    n = Ui(this._lContainer, e);
                                n && (pe(this._lContainer[8], e), zi(n[1], n)) } }, { key: "detach", value: function(t) { this.allocateContainerIfNeeded(); var e = this._adjustIndex(t, -1),
                                    n = Ui(this._lContainer, e); return n && null != pe(this._lContainer[8], e) ? new uo(n) : null } }, { key: "_adjustIndex", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return null == t ? this.length + e : t } }, { key: "allocateContainerIfNeeded", value: function() { null === this._lContainer[8] && (this._lContainer[8] = []) } }]), r }(t)); var o = r[n.index]; if (Fe(o)) i = o;
                    else { var a; if (4 === n.type) a = Ge(o);
                        else if (a = r[11].createComment(""), Ve(r)) { var u = r[11],
                                c = Xe(n, r);
                            Zi(u, Yi(u, c), a, function(t, e) { return Ze(t) ? t.nextSibling(e) : e.nextSibling }(u, c)) } else $i(r[1], r, a, n);
                        r[n.index] = i = Ci(o, r, a, n), Ti(r, i) } return new so(i, n, r) } var vo = function() { var t = function t() { v(this, t) }; return t.__NG_ELEMENT_ID__ = function() { return po() }, t }(),
                    po = function() { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return function(t, e, n) { if (!n && Me(t)) { var r = Je(t.index, e); return new uo(r, r) } return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new uo(e[16], e) : null }(hn(), ln(), t) },
                    yo = Function,
                    go = new Xt("Set Injector scope."),
                    mo = {},
                    _o = {},
                    ko = [],
                    wo = void 0;

                function bo() { return void 0 === wo && (wo = new ce), wo }

                function So(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = arguments.length > 3 ? arguments[3] : void 0; return new Co(t, n, e || bo(), r) } var Co = function() {
                    function t(e, n, r) { var i = this,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        v(this, t), this.parent = r, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1; var a = [];
                        n && de(n, (function(t) { return i.processProvider(t, e, n) })), de([e], (function(t) { return i.processInjectorType(t, [], a) })), this.records.set($t, xo(void 0, this)); var s = this.records.get(go);
                        this.scope = null != s ? s.value : null, this.source = o || ("object" == typeof e ? null : It(e)) } return y(t, [{ key: "destroyed", get: function() { return this._destroyed } }, { key: "destroy", value: function() { this.assertNotDestroyed(), this._destroyed = !0; try { this.onDestroy.forEach((function(t) { return t.ngOnDestroy() })) } finally { this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear() } } }, { key: "get", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Jt,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _t.Default;
                            this.assertNotDestroyed(); var r, i = re(this); try { if (!(n & _t.SkipSelf)) { var o = this.records.get(t); if (void 0 === o) { var a = ("function" == typeof(r = t) || "object" == typeof r && r instanceof Xt) && Ct(t);
                                        o = a && this.injectableDefInScope(a) ? xo(Eo(t), mo) : null, this.records.set(t, o) } if (null != o) return this.hydrate(t, o) } return (n & _t.Self ? bo() : this.parent).get(t, e = n & _t.Optional && e === Jt ? null : e) } catch (s) { if ("NullInjectorError" === s.name) { if ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(It(t)), i) throw s; return function(t, e, n, r) { var i = t.ngTempTokenPath; throw e.__source && i.unshift(e.__source), t.message = function(t, e, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                            t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t; var i = It(e); if (Array.isArray(e)) i = e.map(It).join(" -> ");
                                            else if ("object" == typeof e) { var o = []; for (var a in e)
                                                    if (e.hasOwnProperty(a)) { var s = e[a];
                                                        o.push(a + ":" + ("string" == typeof s ? JSON.stringify(s) : It(s))) }
                                                i = "{".concat(o.join(", "), "}") } return "".concat(n).concat(r ? "(" + r + ")" : "", "[").concat(i, "]: ").concat(t.replace(te, "\n  ")) }("\n" + t.message, i, "R3InjectorError", r), t.ngTokenPath = i, t.ngTempTokenPath = null, t }(s, t, 0, this.source) } throw s } finally { re(i) } } }, { key: "_resolveInjectorDefTypes", value: function() { var t = this;
                            this.injectorDefTypes.forEach((function(e) { return t.get(e) })) } }, { key: "toString", value: function() { var t = []; return this.records.forEach((function(e, n) { return t.push(It(n)) })), "R3Injector[".concat(t.join(", "), "]") } }, { key: "assertNotDestroyed", value: function() { if (this._destroyed) throw new Error("Injector has already been destroyed.") } }, { key: "processInjectorType", value: function(t, e, n) { var r = this; if (!(t = Ft(t))) return !1; var i = xt(t),
                                o = null == i && t.ngModule || void 0,
                                a = void 0 === o ? t : o,
                                s = -1 !== n.indexOf(a); if (void 0 !== o && (i = xt(o)), null == i) return !1; if (null != i.imports && !s) { var u;
                                n.push(a); try { de(i.imports, (function(t) { r.processInjectorType(t, e, n) && (void 0 === u && (u = []), u.push(t)) })) } finally {} if (void 0 !== u)
                                    for (var l = function(t) { var e = u[t],
                                                n = e.ngModule,
                                                i = e.providers;
                                            de(i, (function(t) { return r.processProvider(t, n, i || ko) })) }, c = 0; c < u.length; c++) l(c) }
                            this.injectorDefTypes.add(a), this.records.set(a, xo(i.factory, mo)); var h = i.providers; if (null != h && !s) { var f = t;
                                de(h, (function(t) { return r.processProvider(t, f, h) })) } return void 0 !== o && void 0 !== t.providers } }, { key: "processProvider", value: function(t, e, r) { var i = Ao(t = Ft(t)) ? t : Ft(t && t.provide),
                                a = function(t, e, r) { return To(t) ? xo(void 0, t.useValue) : xo(function(t, e, r) { var i, a = void 0; if (Ao(t)) { var s = Ft(t); return De(s) || Eo(s) } if (To(t)) a = function() { return Ft(t.useValue) };
                                        else if ((i = t) && i.useFactory) a = function() { return t.useFactory.apply(t, n(le(t.deps || []))) };
                                        else if (function(t) { return !(!t || !t.useExisting) }(t)) a = function() { return ae(Ft(t.useExisting)) };
                                        else { var u = Ft(t && (t.useClass || t.provide)); if (u || function(t, e, n) { var r = ""; throw t && e && (r = " - only instances of Provider and Type are allowed, got: [".concat(e.map((function(t) { return t == n ? "?" + n + "?" : "..." })).join(", "), "]")), new Error("Invalid provider for the NgModule '".concat(It(t), "'") + r) }(e, r, t), ! function(t) { return !!t.deps }(t)) return De(u) || Eo(u);
                                            a = function() { return o(u, n(le(t.deps))) } } return a }(t, e, r), mo) }(t, e, r); if (Ao(t) || !0 !== t.multi) { var s = this.records.get(i);
                                s && void 0 !== s.multi && Er() } else { var u = this.records.get(i);
                                u ? void 0 === u.multi && Er() : ((u = xo(void 0, mo, !0)).factory = function() { return le(u.multi) }, this.records.set(i, u)), i = t, u.multi.push(t) }
                            this.records.set(i, a) } }, { key: "hydrate", value: function(t, e) { var n; return e.value === _o ? function(t) { throw new Error("Cannot instantiate cyclic dependency! " + t) }(It(t)) : e.value === mo && (e.value = _o, e.value = e.factory()), "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value } }, { key: "injectableDefInScope", value: function(t) { return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || t.providedIn === this.scope : this.injectorDefTypes.has(t.providedIn)) } }]), t }();

                function Eo(t) { var e = Ct(t),
                        n = null !== e ? e.factory : De(t); if (null !== n) return n; var r = xt(t); if (null !== r) return r.factory; if (t instanceof Xt) throw new Error("Token ".concat(It(t), " is missing a \u0275prov definition.")); if (t instanceof Function) return function(t) { var e = t.length; if (e > 0) { var n = ye(e, "?"); throw new Error("Can't resolve all parameters for ".concat(It(t), ": (").concat(n.join(", "), ").")) } var r = function(t) { var e = t && (t[Tt] || t[Pt] || t[Ot] && t[Ot]()); if (e) { var n = function(t) { if (t.hasOwnProperty("name")) return t.name; var e = ("" + t).match(/^function\s*([^\s(]+)/); return null === e ? "" : e[1] }(t); return console.warn('DEPRECATED: DI is instantiating a token "'.concat(n, '" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "').concat(n, '" class.')), e } return null }(t); return null !== r ? function() { return r.factory(t) } : function() { return new t } }(t); throw new Error("unreachable") }

                function xo(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; return { factory: t, value: e, multi: n ? [] : void 0 } }

                function To(t) { return null !== t && "object" == typeof t && ee in t }

                function Ao(t) { return "function" == typeof t } var Oo = function(t, e, n) { return function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                r = arguments.length > 3 ? arguments[3] : void 0,
                                i = So(t, e, n, r); return i._resolveInjectorDefTypes(), i }({ name: n }, e, t, n) },
                    Po = function() { var t = function() {
                            function t() { v(this, t) } return y(t, null, [{ key: "create", value: function(t, e) { return Array.isArray(t) ? Oo(t, e, "") : Oo(t.providers, t.parent, t.name || "") } }]), t }(); return t.THROW_IF_NOT_FOUND = Jt, t.NULL = new ce, t.\u0275prov = bt({ token: t, providedIn: "any", factory: function() { return ae($t) } }), t.__NG_ELEMENT_ID__ = -1, t }(),
                    Ro = new Xt("AnalyzeForEntryComponents");

                function Io(t, e, n) { var r = n ? t.styles : null,
                        i = n ? t.classes : null,
                        o = 0; if (null !== e)
                        for (var a = 0; a < e.length; a++) { var s = e[a]; "number" == typeof s ? o = s : 1 == o ? i = Dt(i, s) : 2 == o && (r = Dt(r, s + ": " + e[++a] + ";")) }
                    n ? t.styles = r : t.stylesWithoutHost = r, n ? t.classes = i : t.classesWithoutHost = i } var Do = null;

                function No() { if (!Do) { var t = zt.Symbol; if (t && t.iterator) Do = t.iterator;
                        else
                            for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) { var r = e[n]; "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Do = r) } } return Do }

                function jo(t) { return !!Fo(t) && (Array.isArray(t) || !(t instanceof Map) && No() in t) }

                function Fo(t) { return null !== t && ("function" == typeof t || "object" == typeof t) }

                function Lo(t, e, n) { return !Object.is(t[e], n) && (t[e] = n, !0) }

                function Mo(t, e, n, r) { var i = ln(); return Lo(i, gn(), e) && (cn(), function(t, e, n, r, i, o) { var a = Xe(t, e),
                            s = e[11]; if (null == r) Ze(s) ? s.removeAttribute(a, n, o) : a.removeAttribute(n);
                        else { var u = null == i ? Gn(r) : i(r, t.tagName || "", n);
                            Ze(s) ? s.setAttribute(a, n, u, o) : o ? a.setAttributeNS(o, n, u) : a.setAttribute(n, u) } }(In(), i, t, e, n, r)), Mo }

                function Ho(t, e, n, r, i, o, a, s) { var u = ln(),
                        l = cn(),
                        c = t + 20,
                        h = l.firstCreatePass ? function(t, e, n, r, i, o, a, s, u) { var l = e.consts,
                                c = Jr(e, n[6], t, 0, a || null, rn(l, s));
                            fi(e, n, c, rn(l, u)), Dn(e, c); var h = c.tViews = si(2, -1, r, i, o, e.directiveRegistry, e.pipeRegistry, null, e.schemas, l),
                                f = li(0, null, 2, -1, null, null); return f.injectorIndex = c.injectorIndex, h.node = f, null !== e.queries && (e.queries.template(e, c), h.queries = e.queries.embeddedTView(c)), c }(t, l, u, e, n, r, i, o, a) : l.data[c];
                    fn(h, !1); var f = u[11].createComment("");
                    $i(l, u, f, h), Sr(f, u), Ti(u, u[c] = Ci(f, u, f, h)), He(h) && ii(l, u, h), null != a && oi(u, h, s) }

                function Bo(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _t.Default,
                        n = ln(); return null == n ? ae(t, e) : sr(hn(), n, Ft(t), e) }

                function Vo(t, e, n) { var r = ln(); return Lo(r, gn(), e) && hi(cn(), In(), r, t, e, r[11], n, !1), Vo }

                function Uo(t, e, n, r, i) { var o = i ? "class" : "style";
                    Fi(t, n, e.inputs[o], o, r) }

                function zo(t, e, n, r) { var i = ln(),
                        o = cn(),
                        a = 20 + t,
                        s = i[11],
                        u = i[a] = Xr(e, s, sn.lFrame.currentNamespace),
                        l = o.firstCreatePass ? function(t, e, n, r, i, o, a) { var s = e.consts,
                                u = rn(s, o),
                                l = Jr(e, n[6], t, 3, i, u); return fi(e, n, l, rn(s, a)), null !== l.attrs && Io(l, l.attrs, !1), null !== l.mergedAttrs && Io(l, l.mergedAttrs, !0), null !== e.queries && e.queries.elementStart(e, l), l }(t, o, i, 0, e, n, r) : o.data[a];
                    fn(l, !0); var c = l.mergedAttrs;
                    null !== c && Bn(s, u, c); var h = l.classes;
                    null !== h && io(s, u, h); var f = l.styles;
                    null !== f && ro(s, u, f), $i(o, i, u, l), 0 === sn.lFrame.elementDepthCount && Sr(u, i), sn.lFrame.elementDepthCount++, He(l) && (ii(o, i, l), function(t, e, n) { if (Le(e))
                            for (var r = e.directiveEnd, i = e.directiveStart; i < r; i++) { var o = t.data[i];
                                o.contentQueries && o.contentQueries(1, n[i], i) } }(o, l, i)), null !== r && oi(i, l) }

                function qo() { var t = hn();
                    dn() ? vn() : fn(t = t.parent, !1); var e = t;
                    sn.lFrame.elementDepthCount--; var n = cn();
                    n.firstCreatePass && (Dn(n, t), Le(t) && n.queries.elementEnd(t)), null != e.classesWithoutHost && function(t) { return 0 != (16 & t.flags) }(e) && Uo(n, e, ln(), e.classesWithoutHost, !0), null != e.stylesWithoutHost && function(t) { return 0 != (32 & t.flags) }(e) && Uo(n, e, ln(), e.stylesWithoutHost, !1) }

                function Wo(t, e, n, r) { zo(t, e, n, r), qo() }

                function Qo(t) { return !!t && "function" == typeof t.then }

                function Zo(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = ln(),
                        o = cn(),
                        a = hn(); return Go(o, i, i[11], a, t, e, n, r), Zo }

                function Ko(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = hn(),
                        o = ln(),
                        a = cn(); return Go(a, o, Ni(kn(a.data), i, o), i, t, e, n, r), Ko }

                function Go(t, e, n, r, i, o) { var a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                        s = arguments.length > 7 ? arguments[7] : void 0,
                        u = He(r),
                        l = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
                        c = Di(e),
                        h = !0; if (3 === r.type) { var f = Xe(r, e),
                            d = s ? s(f) : be,
                            v = d.target || f,
                            p = c.length,
                            y = s ? function(t) { return s(Ge(t[r.index])).target } : r.index; if (Ze(n)) { var g = null; if (!s && u && (g = function(t, e, n, r) { var i = t.cleanup; if (null != i)
                                        for (var o = 0; o < i.length - 1; o += 2) { var a = i[o]; if (a === n && i[o + 1] === r) { var s = e[7],
                                                    u = i[o + 2]; return s.length > u ? s[u] : null } "string" == typeof a && (o += 2) }
                                    return null }(t, e, i, r.index)), null !== g)(g.__ngLastListenerFn__ || g).__ngNextListenerFn__ = o, g.__ngLastListenerFn__ = o, h = !1;
                            else { o = Xo(r, e, o, !1); var m = n.listen(d.name || v, i, o);
                                c.push(o, m), l && l.push(i, y, p, p + 1) } } else o = Xo(r, e, o, !0), v.addEventListener(i, o, a), c.push(o), l && l.push(i, y, p, a) } var _, k = r.outputs; if (h && null !== k && (_ = k[i])) { var w = _.length; if (w)
                            for (var b = 0; b < w; b += 2) { var S = e[_[b]][_[b + 1]].subscribe(o),
                                    C = c.length;
                                c.push(o, S), l && l.push(i, r.index, C, -(C + 1)) } } }

                function Yo(t, e, n) { try { return !1 !== e(n) } catch (r) { return ji(t, r), !1 } }

                function Xo(t, e, n, r) { return function i(o) { if (o === Function) return n; var a = 2 & t.flags ? Je(t.index, e) : e;
                        0 == (32 & e[2]) && Ai(a); for (var s = Yo(e, n, o), u = i.__ngNextListenerFn__; u;) s = Yo(e, u, o) && s, u = u.__ngNextListenerFn__; return r && !1 === s && (o.preventDefault(), o.returnValue = !1), s } }

                function $o(t, e) { for (var n = null, r = function(t) { var e = t.attrs; if (null != e) { var n = e.indexOf(5); if (0 == (1 & n)) return e[n + 1] } return null }(t), i = 0; i < e.length; i++) { var o = e[i]; if ("*" !== o) { if (null === r ? Dr(t, o, !0) : Nr(r, o)) return i } else n = i } return n }

                function Jo(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = ln(),
                        i = cn(),
                        o = Jr(i, r[6], t, 1, null, n || null);
                    null === o.projection && (o.projection = e), vn(),
                        function(t, e, n) { no(e[11], 0, e, n, Qi(t, n, e), Xi(n.parent || e[6], e)) }(i, r, o) } var ta = [];

                function ea(t, e, n, r, i) { for (var o = t[n + 1], a = null === e, s = r ? Wr(o) : Zr(o), u = !1; 0 !== s && (!1 === u || a);) { var l = t[s + 1];
                        na(t[s], e) && (u = !0, t[s + 1] = r ? Gr(l) : Qr(l)), s = r ? Wr(l) : Zr(l) }
                    u && (t[n + 1] = r ? Qr(o) : Gr(o)) }

                function na(t, e) { return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && me(t, e) >= 0 }

                function ra(t, e) { return function(t, e, n, r) { var i, o, a = ln(),
                            s = cn(),
                            u = (i = sn.lFrame, o = i.bindingIndex, i.bindingIndex = i.bindingIndex + 2, o);
                        s.firstUpdatePass && function(t, e, n, r) { var i = t.data; if (null === i[n + 1]) { var o = i[Pn() + 20],
                                    a = function(t, e) { return e >= t.expandoStartIndex }(t, n);
                                (function(t, e) { return 0 != (16 & t.flags) })(o) && null === e && !a && (e = !1), e = function(t, e, n, r) { var i = kn(t),
                                            o = e.residualClasses; if (null === i) 0 === e.classBindings && (n = oa(n = ia(null, t, e, n, !0), e.attrs, !0), o = null);
                                        else { var a = e.directiveStylingLast; if (-1 === a || t[a] !== i)
                                                if (n = ia(i, t, e, n, !0), null === o) { var s = function(t, e, n) { var r = e.classBindings; if (0 !== Zr(r)) return t[Wr(r)] }(t, e);
                                                    void 0 !== s && Array.isArray(s) && function(t, e, n, r) { t[Wr(e.classBindings)] = r }(t, e, 0, s = oa(s = ia(null, t, e, s[1], !0), e.attrs, !0)) } else o = function(t, e, n) { for (var r = void 0, i = e.directiveEnd, o = 1 + e.directiveStylingLast; o < i; o++) r = oa(r, t[o].hostAttrs, !0); return oa(r, e.attrs, !0) }(t, e) } return void 0 !== o && (e.residualClasses = o), n }(i, o, e),
                                    function(t, e, n, r, i, o) { var a = e.classBindings,
                                            s = Wr(a),
                                            u = Zr(a);
                                        t[r] = n; var l, c = !1; if (Array.isArray(n)) { var h = n;
                                            (null === (l = h[1]) || me(h, l) > 0) && (c = !0) } else l = n; if (i)
                                            if (0 !== u) { var f = Wr(t[s + 1]);
                                                t[r + 1] = qr(f, s), 0 !== f && (t[f + 1] = Kr(t[f + 1], r)), t[s + 1] = 131071 & t[s + 1] | r << 17 } else t[r + 1] = qr(s, 0), 0 !== s && (t[s + 1] = Kr(t[s + 1], r)), s = r;
                                        else t[r + 1] = qr(u, 0), 0 === s ? s = r : t[u + 1] = Kr(t[u + 1], r), u = r;
                                        c && (t[r + 1] = Qr(t[r + 1])), ea(t, l, r, !0), ea(t, l, r, !1),
                                            function(t, e, n, r, i) { var o = t.residualClasses;
                                                null != o && "string" == typeof e && me(o, e) >= 0 && (n[r + 1] = Gr(n[r + 1])) }(e, l, t, r), a = qr(s, u), e.classBindings = a }(i, o, e, n, a) } }(s, t, u), e !== Lr && Lo(a, u, e) && function(t, e, n, r, i, o, a, s) { if (3 === e.type) { var u = t.data,
                                    l = u[s + 1];
                                sa(1 == (1 & l) ? aa(u, e, n, i, Zr(l), !0) : void 0) || (sa(o) || 2 == (2 & l) && (o = aa(u, null, n, i, s, !0)), function(t, e, n, r, i) { var o = Ze(t);
                                    i ? o ? t.addClass(n, r) : n.classList.add(r) : o ? t.removeClass(n, r) : n.classList.remove(r) }(r, 0, Ye(Pn(), n), i, o)) } }(s, s.data[Pn() + 20], a, a[11], t, a[u + 1] = function(t, e) { return null == t || "object" == typeof t && (t = It(function(t) { return t instanceof
                                function() {
                                    function t(e) { v(this, t), this.changingThisBreaksApplicationSecurity = e } return y(t, [{ key: "toString", value: function() { return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)" } }]), t }() ? t.changingThisBreaksApplicationSecurity: t }(t))), t }(e), 0, u) }(t, e), ra }

                function ia(t, e, n, r, i) { var o = null,
                        a = n.directiveEnd,
                        s = n.directiveStylingLast; for (-1 === s ? s = n.directiveStart : s++; s < a && (r = oa(r, (o = e[s]).hostAttrs, i), o !== t);) s++; return null !== t && (n.directiveStylingLast = s), r }

                function oa(t, e, n) { var r, i, o, a, s = n ? 1 : 2,
                        u = -1; if (null !== e)
                        for (var l = 0; l < e.length; l++) { var c = e[l]; "number" == typeof c ? u = c : u === s && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), r = t, i = c, o = !!n || e[++l], a = void 0, (a = me(r, i)) >= 0 ? r[1 | a] = o : function(t, e, n, r) { var i = t.length; if (i == e) t.push(n, r);
                                else if (1 === i) t.push(r, t[0]), t[0] = n;
                                else { for (i--, t.push(t[i - 1], t[i]); i > e;) t[i] = t[i - 2], i--;
                                    t[e] = n, t[e + 1] = r } }(r, a = ~a, i, o)) }
                    return void 0 === t ? null : t }

                function aa(t, e, n, r, i, o) { for (var a = null === e, s = void 0; i > 0;) { var u = t[i],
                            l = Array.isArray(u),
                            c = l ? u[1] : u,
                            h = null === c,
                            f = n[i + 1];
                        f === Lr && (f = h ? ta : void 0); var d = h ? ge(f, r) : c === r ? f : void 0; if (l && !sa(d) && (d = ge(u, r)), sa(d) && (s = d, a)) return s; var v = t[i + 1];
                        i = a ? Wr(v) : Zr(v) } if (null !== e) { var p = o ? e.residualClasses : e.residualStyles;
                        null != p && (s = ge(p, r)) } return s }

                function sa(t) { return void 0 !== t }

                function ua(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = ln(),
                        r = cn(),
                        i = t + 20,
                        o = r.firstCreatePass ? Jr(r, n[6], t, 3, null, null) : r.data[i],
                        a = n[i] = function(t, e) { return Ze(e) ? e.createText(t) : e.createTextNode(t) }(e, n[11]);
                    $i(r, n, a, o), fn(o, !1) }

                function la(t) { return ca("", t, ""), la }

                function ca(t, e, n) { var r = ln(),
                        i = function(t, e, n, r) { return Lo(t, gn(), n) ? e + Gn(n) + r : Lr }(r, t, e, n); return i !== Lr && function(t, e, n) { var r = Ye(e, t),
                            i = t[11];
                        Ze(i) ? i.setValue(r, n) : r.textContent = n }(r, Pn(), i), ca }

                function ha(t, e, n) { var r = ln(); return Lo(r, gn(), e) && hi(cn(), In(), r, t, e, r[11], n, !0), ha }

                function fa(t, e, n) { var r = ln(); if (Lo(r, gn(), e)) { var i = cn(),
                            o = In();
                        hi(i, o, r, t, e, Ni(kn(i.data), o, r), n, !0) } return fa }

                function da(t, e) { var n = tn(t)[1],
                        r = n.data.length - 1;
                    Dn(n, { directiveStart: r, directiveEnd: r + 1 }) }

                function va(t) { for (var e = Object.getPrototypeOf(t.type.prototype).constructor, n = !0, r = [t]; e;) { var i = void 0; if (Be(t)) i = e.\u0275cmp || e.\u0275dir;
                        else { if (e.\u0275cmp) throw new Error("Directives cannot inherit Components");
                            i = e.\u0275dir } if (i) { if (n) { r.push(i); var o = t;
                                o.inputs = pa(t.inputs), o.declaredInputs = pa(t.declaredInputs), o.outputs = pa(t.outputs); var a = i.hostBindings;
                                a && ma(t, a); var s = i.viewQuery,
                                    u = i.contentQueries; if (s && ya(t, s), u && ga(t, u), wt(t.inputs, i.inputs), wt(t.declaredInputs, i.declaredInputs), wt(t.outputs, i.outputs), Be(i) && i.data.animation) { var l = t.data;
                                    l.animation = (l.animation || []).concat(i.data.animation) } } var c = i.features; if (c)
                                for (var h = 0; h < c.length; h++) { var f = c[h];
                                    f && f.ngInherit && f(t), f === va && (n = !1) } }
                        e = Object.getPrototypeOf(e) }! function(t) { for (var e = 0, n = null, r = t.length - 1; r >= 0; r--) { var i = t[r];
                            i.hostVars = e += i.hostVars, i.hostAttrs = zn(i.hostAttrs, n = zn(n, i.hostAttrs)) } }(r) }

                function pa(t) { return t === be ? {} : t === Se ? [] : t }

                function ya(t, e) { var n = t.viewQuery;
                    t.viewQuery = n ? function(t, r) { e(t, r), n(t, r) } : e }

                function ga(t, e) { var n = t.contentQueries;
                    t.contentQueries = n ? function(t, r, i) { e(t, r, i), n(t, r, i) } : e }

                function ma(t, e) { var n = t.hostBindings;
                    t.hostBindings = n ? function(t, r) { e(t, r), n(t, r) } : e } var _a = function t() { v(this, t) },
                    ka = function() {
                        function t() { v(this, t) } return y(t, [{ key: "resolveComponentFactory", value: function(t) { throw
                                function(t) { var e = Error("No component factory found for ".concat(It(t), ". Did you add it to @NgModule.entryComponents?")); return e.ngComponent = t, e }(t) } }]), t }(),
                    wa = function() { var t = function t() { v(this, t) }; return t.NULL = new ka, t }(),
                    ba = function() { var t = function t(e) { v(this, t), this.nativeElement = e }; return t.__NG_ELEMENT_ID__ = function() { return Sa(t) }, t }(),
                    Sa = function(t) { return co(t, hn(), ln()) },
                    Ca = function t() { v(this, t) },
                    Ea = function(t) { return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t }({}),
                    xa = function() { var t = function t() { v(this, t) }; return t.\u0275prov = bt({ token: t, providedIn: "root", factory: function() { return null } }), t }(),
                    Ta = function t(e) { v(this, t), this.full = e, this.major = e.split(".")[0], this.minor = e.split(".")[1], this.patch = e.split(".").slice(2).join(".") },
                    Aa = new Ta("10.0.14"),
                    Oa = function() {
                        function t() { v(this, t) } return y(t, [{ key: "supports", value: function(t) { return jo(t) } }, { key: "create", value: function(t) { return new Ra(t) } }]), t }(),
                    Pa = function(t, e) { return e },
                    Ra = function() {
                        function t(e) { v(this, t), this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || Pa } return y(t, [{ key: "forEachItem", value: function(t) { var e; for (e = this._itHead; null !== e; e = e._next) t(e) } }, { key: "forEachOperation", value: function(t) { for (var e = this._itHead, n = this._removalsHead, r = 0, i = null; e || n;) { var o = !n || e && e.currentIndex < ja(n, r, i) ? e : n,
                                        a = ja(o, r, i),
                                        s = o.currentIndex; if (o === n) r--, n = n._nextRemoved;
                                    else if (e = e._next, null == o.previousIndex) r++;
                                    else { i || (i = []); var u = a - r,
                                            l = s - r; if (u != l) { for (var c = 0; c < u; c++) { var h = c < i.length ? i[c] : i[c] = 0,
                                                    f = h + c;
                                                l <= f && f < u && (i[c] = h + 1) }
                                            i[o.previousIndex] = l - u } }
                                    a !== s && t(o, a, s) } } }, { key: "forEachPreviousItem", value: function(t) { var e; for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e) } }, { key: "forEachAddedItem", value: function(t) { var e; for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e) } }, { key: "forEachMovedItem", value: function(t) { var e; for (e = this._movesHead; null !== e; e = e._nextMoved) t(e) } }, { key: "forEachRemovedItem", value: function(t) { var e; for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e) } }, { key: "forEachIdentityChange", value: function(t) { var e; for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e) } }, { key: "diff", value: function(t) { if (null == t && (t = []), !jo(t)) throw new Error("Error trying to diff '".concat(It(t), "'. Only arrays and iterables are allowed")); return this.check(t) ? this : null } }, { key: "onDestroy", value: function() {} }, { key: "check", value: function(t) { var e = this;
                                this._reset(); var n, r, i, o = this._itHead,
                                    a = !1; if (Array.isArray(t)) { this.length = t.length; for (var s = 0; s < this.length; s++) r = t[s], i = this._trackByFn(s, r), null !== o && Object.is(o.trackById, i) ? (a && (o = this._verifyReinsertion(o, r, i, s)), Object.is(o.item, r) || this._addIdentityChange(o, r)) : (o = this._mismatch(o, r, i, s), a = !0), o = o._next } else n = 0,
                                    function(t, e) { if (Array.isArray(t))
                                            for (var n = 0; n < t.length; n++) e(t[n]);
                                        else
                                            for (var r, i = t[No()](); !(r = i.next()).done;) e(r.value) }(t, (function(t) { i = e._trackByFn(n, t), null !== o && Object.is(o.trackById, i) ? (a && (o = e._verifyReinsertion(o, t, i, n)), Object.is(o.item, t) || e._addIdentityChange(o, t)) : (o = e._mismatch(o, t, i, n), a = !0), o = o._next, n++ })), this.length = n; return this._truncate(o), this.collection = t, this.isDirty } }, { key: "isDirty", get: function() { return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead } }, { key: "_reset", value: function() { if (this.isDirty) { var t, e; for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next; for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex; for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
                                    this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null } } }, { key: "_mismatch", value: function(t, e, n, r) { var i; return null === t ? i = this._itTail : (i = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, i, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, i, r)) : t = this._addAfter(new Ia(e, n), i, r), t } }, { key: "_verifyReinsertion", value: function(t, e, n, r) { var i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null); return null !== i ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t } }, { key: "_truncate", value: function(t) { for (; null !== t;) { var e = t._next;
                                    this._addToRemovals(this._unlink(t)), t = e }
                                null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null) } }, { key: "_reinsertAfter", value: function(t, e, n) { null !== this._unlinkedRecords && this._unlinkedRecords.remove(t); var r = t._prevRemoved,
                                    i = t._nextRemoved; return null === r ? this._removalsHead = i : r._nextRemoved = i, null === i ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t } }, { key: "_moveAfter", value: function(t, e, n) { return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t } }, { key: "_addAfter", value: function(t, e, n) { return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t } }, { key: "_insertAfter", value: function(t, e, n) { var r = null === e ? this._itHead : e._next; return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Na), this._linkedRecords.put(t), t.currentIndex = n, t } }, { key: "_remove", value: function(t) { return this._addToRemovals(this._unlink(t)) } }, { key: "_unlink", value: function(t) { null !== this._linkedRecords && this._linkedRecords.remove(t); var e = t._prev,
                                    n = t._next; return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t } }, { key: "_addToMoves", value: function(t, e) { return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t } }, { key: "_addToRemovals", value: function(t) { return null === this._unlinkedRecords && (this._unlinkedRecords = new Na), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t } }, { key: "_addIdentityChange", value: function(t, e) { return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t } }]), t }(),
                    Ia = function t(e, n) { v(this, t), this.item = e, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null },
                    Da = function() {
                        function t() { v(this, t), this._head = null, this._tail = null } return y(t, [{ key: "add", value: function(t) { null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t) } }, { key: "get", value: function(t, e) { var n; for (n = this._head; null !== n; n = n._nextDup)
                                    if ((null === e || e <= n.currentIndex) && Object.is(n.trackById, t)) return n;
                                return null } }, { key: "remove", value: function(t) { var e = t._prevDup,
                                    n = t._nextDup; return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head } }]), t }(),
                    Na = function() {
                        function t() { v(this, t), this.map = new Map } return y(t, [{ key: "put", value: function(t) { var e = t.trackById,
                                    n = this.map.get(e);
                                n || (n = new Da, this.map.set(e, n)), n.add(t) } }, { key: "get", value: function(t, e) { var n = this.map.get(t); return n ? n.get(t, e) : null } }, { key: "remove", value: function(t) { var e = t.trackById; return this.map.get(e).remove(t) && this.map.delete(e), t } }, { key: "isEmpty", get: function() { return 0 === this.map.size } }, { key: "clear", value: function() { this.map.clear() } }]), t }();

                function ja(t, e, n) { var r = t.previousIndex; if (null === r) return r; var i = 0; return n && r < n.length && (i = n[r]), r + e + i } var Fa = function() {
                        function t() { v(this, t) } return y(t, [{ key: "supports", value: function(t) { return t instanceof Map || Fo(t) } }, { key: "create", value: function() { return new La } }]), t }(),
                    La = function() {
                        function t() { v(this, t), this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null } return y(t, [{ key: "isDirty", get: function() { return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead } }, { key: "forEachItem", value: function(t) { var e; for (e = this._mapHead; null !== e; e = e._next) t(e) } }, { key: "forEachPreviousItem", value: function(t) { var e; for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e) } }, { key: "forEachChangedItem", value: function(t) { var e; for (e = this._changesHead; null !== e; e = e._nextChanged) t(e) } }, { key: "forEachAddedItem", value: function(t) { var e; for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e) } }, { key: "forEachRemovedItem", value: function(t) { var e; for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e) } }, { key: "diff", value: function(t) { if (t) { if (!(t instanceof Map || Fo(t))) throw new Error("Error trying to diff '".concat(It(t), "'. Only maps and objects are allowed")) } else t = new Map; return this.check(t) ? this : null } }, { key: "onDestroy", value: function() {} }, { key: "check", value: function(t) { var e = this;
                                this._reset(); var n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (function(t, r) { if (n && n.key === r) e._maybeAddToChanges(n, t), e._appendAfter = n, n = n._next;
                                        else { var i = e._getOrCreateRecordForKey(r, t);
                                            n = e._insertBeforeOrAppend(n, i) } })), n) { n._prev && (n._prev._next = null), this._removalsHead = n; for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty } }, { key: "_insertBeforeOrAppend", value: function(t, e) { if (t) { var n = t._prev; return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t } return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null } }, { key: "_getOrCreateRecordForKey", value: function(t, e) { if (this._records.has(t)) { var n = this._records.get(t);
                                    this._maybeAddToChanges(n, e); var r = n._prev,
                                        i = n._next; return r && (r._next = i), i && (i._prev = r), n._next = null, n._prev = null, n } var o = new Ma(t); return this._records.set(t, o), o.currentValue = e, this._addToAdditions(o), o } }, { key: "_reset", value: function() { if (this.isDirty) { var t; for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next; for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue; for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                                    this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null } } }, { key: "_maybeAddToChanges", value: function(t, e) { Object.is(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t)) } }, { key: "_addToAdditions", value: function(t) { null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t) } }, { key: "_addToChanges", value: function(t) { null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t) } }, { key: "_forEach", value: function(t, e) { t instanceof Map ? t.forEach(e) : Object.keys(t).forEach((function(n) { return e(t[n], n) })) } }]), t }(),
                    Ma = function t(e) { v(this, t), this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null },
                    Ha = function() { var t = function() {
                            function t(e) { v(this, t), this.factories = e } return y(t, [{ key: "find", value: function(t) { var e, n = this.factories.find((function(e) { return e.supports(t) })); if (null != n) return n; throw new Error("Cannot find a differ supporting object '".concat(t, "' of type '").concat((e = t).name || typeof e, "'")) } }], [{ key: "create", value: function(e, n) { if (null != n) { var r = n.factories.slice();
                                        e = e.concat(r) } return new t(e) } }, { key: "extend", value: function(e) { return { provide: t, useFactory: function(n) { if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector"); return t.create(e, n) }, deps: [
                                            [t, new mt, new yt]
                                        ] } } }]), t }(); return t.\u0275prov = bt({ token: t, providedIn: "root", factory: function() { return new t([new Oa]) } }), t }(),
                    Ba = function() { var t = function() {
                            function t(e) { v(this, t), this.factories = e } return y(t, [{ key: "find", value: function(t) { var e = this.factories.find((function(e) { return e.supports(t) })); if (e) return e; throw new Error("Cannot find a differ supporting object '".concat(t, "'")) } }], [{ key: "create", value: function(e, n) { if (n) { var r = n.factories.slice();
                                        e = e.concat(r) } return new t(e) } }, { key: "extend", value: function(e) { return { provide: t, useFactory: function(n) { if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector"); return t.create(e, n) }, deps: [
                                            [t, new mt, new yt]
                                        ] } } }]), t }(); return t.\u0275prov = bt({ token: t, providedIn: "root", factory: function() { return new t([new Fa]) } }), t }(),
                    Va = [new Fa],
                    Ua = new Ha([new Oa]),
                    za = new Ba(Va),
                    qa = function() { var t = function t() { v(this, t) }; return t.__NG_ELEMENT_ID__ = function() { return Wa(t, ba) }, t }(),
                    Wa = function(t, e) { return ho(t, e, hn(), ln()) },
                    Qa = function() { var t = function t() { v(this, t) }; return t.__NG_ELEMENT_ID__ = function() { return Za(t, ba) }, t }(),
                    Za = function(t, e) { return fo(t, e, hn(), ln()) },
                    Ka = {},
                    Ga = function(t) { s(n, t); var e = l(n);

                        function n(t) { var r; return v(this, n), (r = e.call(this)).ngModule = t, r } return y(n, [{ key: "resolveComponentFactory", value: function(t) { var e = Ie(t); return new $a(e, this.ngModule) } }]), n }(wa);

                function Ya(t) { var e = []; for (var n in t) t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n }); return e } var Xa = new Xt("SCHEDULER_TOKEN", { providedIn: "root", factory: function() { return Xn } }),
                    $a = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this)).componentDef = t, i.ngModule = r, i.componentType = t.type, i.selector = t.selectors.map(Fr).join(","), i.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], i.isBoundToModule = !!r, i } return y(n, [{ key: "inputs", get: function() { return Ya(this.componentDef.inputs) } }, { key: "outputs", get: function() { return Ya(this.componentDef.outputs) } }, { key: "create", value: function(t, e, n, r) { var i, o, a = (r = r || this.ngModule) ? function(t, e) { return { get: function(n, r, i) { var o = t.get(n, Ka, i); return o !== Ka || r === Ka ? o : e.get(n, r, i) } } }(t, r.injector) : t,
                                    s = a.get(Ca, Ke),
                                    u = a.get(xa, null),
                                    l = s.createRenderer(null, this.componentDef),
                                    c = this.componentDef.selectors[0][0] || "div",
                                    h = n ? function(t, e, n) { if (Ze(t)) return t.selectRootElement(e, n === we.ShadowDom); var r = "string" == typeof e ? t.querySelector(e) : e; return r.textContent = "", r }(l, n, this.componentDef.encapsulation) : Xr(c, s.createRenderer(null, this.componentDef), function(t) { var e = t.toLowerCase(); return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null }(c)),
                                    f = this.componentDef.onPush ? 576 : 528,
                                    d = { components: [], scheduler: Xn, clean: Ii, playerHandler: null, flags: 0 },
                                    v = si(0, -1, null, 1, 0, null, null, null, null, null),
                                    p = $r(null, v, d, f, null, null, s, l, u, a);
                                Cn(p, null); try { var y = function(t, e, n, r, i, o) { var a = n[1];
                                        n[20] = t; var s = Jr(a, null, 0, 3, null, null),
                                            u = s.mergedAttrs = e.hostAttrs;
                                        null !== u && (Io(s, u, !0), null !== t && (Bn(i, t, u), null !== s.classes && io(i, t, s.classes), null !== s.styles && ro(i, t, s.styles))); var l = r.createRenderer(t, e),
                                            c = $r(n, ai(e), null, e.onPush ? 64 : 16, n[20], s, r, l, void 0); return a.firstCreatePass && (ar(nr(s, n), a, e.type), gi(a, s), _i(s, n.length, 1)), Ti(n, c), n[20] = c }(h, this.componentDef, p, s, l); if (h)
                                        if (n) Bn(l, h, ["ng-version", Aa.full]);
                                        else { var g = function(t) { for (var e = [], n = [], r = 1, i = 2; r < t.length;) { var o = t[r]; if ("string" == typeof o) 2 === i ? "" !== o && e.push(o, t[++r]) : 8 === i && n.push(o);
                                                        else { if (!Rr(i)) break;
                                                            i = o }
                                                        r++ } return { attrs: e, classes: n } }(this.componentDef.selectors[0]),
                                                m = g.attrs,
                                                _ = g.classes;
                                            m && Bn(l, h, m), _ && _.length > 0 && io(l, h, _.join(" ")) }
                                    if (o = $e(v, 0), void 0 !== e)
                                        for (var k = o.projection = [], w = 0; w < this.ngContentSelectors.length; w++) { var b = e[w];
                                            k.push(null != b ? Array.from(b) : null) }
                                    i = function(t, e, n, r, i) { var o = n[1],
                                            a = function(t, e, n) { var r = hn();
                                                t.firstCreatePass && (n.providersResolver && n.providersResolver(n), yi(t, r, 1), ki(t, e, n)); var i = hr(e, t, e.length - 1, r);
                                                Sr(i, e); var o = Xe(r, e); return o && Sr(o, e), i }(o, n, e);
                                        r.components.push(a), t[8] = a, i && i.forEach((function(t) { return t(a, e) })), e.contentQueries && e.contentQueries(1, a, n.length - 1); var s = hn(); if (o.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) { Rn(s.index - 20); var u = n[1];
                                            di(u, e), vi(u, n, e.hostVars), pi(e, a) } return a }(y, this.componentDef, p, d, [da]), ti(v, p, null) } finally { On() } var S = new Ja(this.componentType, i, co(ba, o, p), p, o); return v.node.child = o, S } }]), n }(_a),
                    Ja = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o, a) { var s, u, l, c; return v(this, n), (s = e.call(this)).location = i, s._rootLView = o, s._tNode = a, s.destroyCbs = [], s.instance = r, s.hostView = s.changeDetectorRef = new lo(o), u = o[1], l = o, null == (c = u.node) && (u.node = c = li(0, null, 2, -1, null, null)), l[6] = c, s.componentType = t, s } return y(n, [{ key: "injector", get: function() { return new vr(this._tNode, this._rootLView) } }, { key: "destroy", value: function() { this.destroyCbs && (this.destroyCbs.forEach((function(t) { return t() })), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy()) } }, { key: "onDestroy", value: function(t) { this.destroyCbs && this.destroyCbs.push(t) } }]), n }(function() { return function t() { v(this, t) } }()),
                    ts = void 0,
                    es = ["en", [
                            ["a", "p"],
                            ["AM", "PM"], ts
                        ],
                        [
                            ["AM", "PM"], ts, ts
                        ],
                        [
                            ["S", "M", "T", "W", "T", "F", "S"],
                            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                        ], ts, [
                            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                        ], ts, [
                            ["B", "A"],
                            ["BC", "AD"],
                            ["Before Christ", "Anno Domini"]
                        ], 0, [6, 0],
                        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                        ["{1}, {0}", ts, "{1} 'at' {0}", ts],
                        [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
                        function(t) { var e = Math.floor(Math.abs(t)),
                                n = t.toString().replace(/^[^.]*\.?/, "").length; return 1 === e && 0 === n ? 1 : 5 }
                    ],
                    ns = {};

                function rs(t) { return t in ns || (ns[t] = zt.ng && zt.ng.common && zt.ng.common.locales && zt.ng.common.locales[t]), ns[t] } var is = function(t) { return t[t.LocaleId = 0] = "LocaleId", t[t.DayPeriodsFormat = 1] = "DayPeriodsFormat", t[t.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", t[t.DaysFormat = 3] = "DaysFormat", t[t.DaysStandalone = 4] = "DaysStandalone", t[t.MonthsFormat = 5] = "MonthsFormat", t[t.MonthsStandalone = 6] = "MonthsStandalone", t[t.Eras = 7] = "Eras", t[t.FirstDayOfWeek = 8] = "FirstDayOfWeek", t[t.WeekendRange = 9] = "WeekendRange", t[t.DateFormat = 10] = "DateFormat", t[t.TimeFormat = 11] = "TimeFormat", t[t.DateTimeFormat = 12] = "DateTimeFormat", t[t.NumberSymbols = 13] = "NumberSymbols", t[t.NumberFormats = 14] = "NumberFormats", t[t.CurrencyCode = 15] = "CurrencyCode", t[t.CurrencySymbol = 16] = "CurrencySymbol", t[t.CurrencyName = 17] = "CurrencyName", t[t.Currencies = 18] = "Currencies", t[t.Directionality = 19] = "Directionality", t[t.PluralCase = 20] = "PluralCase", t[t.ExtraData = 21] = "ExtraData", t }({});

                function os(t) { var e;
                    null == (e = t) && function(t, e, n, r) { throw new Error("ASSERTION ERROR: Expected localeId to be defined" + " [Expected=> null != ".concat(e, " <=Actual]")) }(0, e), "string" == typeof t && t.toLowerCase().replace(/_/g, "-") } var as = new Map,
                    ss = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i;
                            v(this, n), (i = e.call(this))._parent = r, i._bootstrapComponents = [], i.injector = h(i), i.destroyCbs = [], i.componentFactoryResolver = new Ga(h(i)); var o = Ne(t),
                                a = t[Kt] || null; return a && os(a), i._bootstrapComponents = $n(o.bootstrap), i._r3Injector = So(t, r, [{ provide: he, useValue: h(i) }, { provide: wa, useValue: i.componentFactoryResolver }], It(t)), i._r3Injector._resolveInjectorDefTypes(), i.instance = i.get(t), i } return y(n, [{ key: "get", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Po.THROW_IF_NOT_FOUND,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _t.Default; return t === Po || t === he || t === $t ? this : this._r3Injector.get(t, e, n) } }, { key: "destroy", value: function() { var t = this._r3Injector;!t.destroyed && t.destroy(), this.destroyCbs.forEach((function(t) { return t() })), this.destroyCbs = null } }, { key: "onDestroy", value: function(t) { this.destroyCbs.push(t) } }]), n }(he),
                    us = function(t) { s(n, t); var e = l(n);

                        function n(t) { var r; return v(this, n), (r = e.call(this)).moduleType = t, null !== Ne(t) && function t(e) { if (null !== e.\u0275mod.id) { var n = e.\u0275mod.id;
                                    (function(t, e, n) { if (e && e !== n) throw new Error("Duplicate module registered for ".concat(t, " - ").concat(It(e), " vs ").concat(It(e.name))) })(n, as.get(n), e), as.set(n, e) } var r = e.\u0275mod.imports;
                                r instanceof Function && (r = r()), r && r.forEach((function(e) { return t(e) })) }(t), r } return y(n, [{ key: "create", value: function(t) { return new ss(this.moduleType, t) } }]), n }(fe),
                    ls = function(t) { s(n, t); var e = l(n);

                        function n() { var t, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return v(this, n), (t = e.call(this)).__isAsync = r, t } return y(n, [{ key: "emit", value: function(t) { a(d(n.prototype), "next", this).call(this, t) } }, { key: "subscribe", value: function(t, e, r) { var i, o = function(t) { return null },
                                    s = function() { return null };
                                t && "object" == typeof t ? (i = this.__isAsync ? function(e) { setTimeout((function() { return t.next(e) })) } : function(e) { t.next(e) }, t.error && (o = this.__isAsync ? function(e) { setTimeout((function() { return t.error(e) })) } : function(e) { t.error(e) }), t.complete && (s = this.__isAsync ? function() { setTimeout((function() { return t.complete() })) } : function() { t.complete() })) : (i = this.__isAsync ? function(e) { setTimeout((function() { return t(e) })) } : function(e) { t(e) }, e && (o = this.__isAsync ? function(t) { setTimeout((function() { return e(t) })) } : function(t) { e(t) }), r && (s = this.__isAsync ? function() { setTimeout((function() { return r() })) } : function() { r() })); var u = a(d(n.prototype), "subscribe", this).call(this, i, o, s); return t instanceof C && t.add(u), u } }]), n }(M);

                function cs() { return this._results[No()]() } var hs = function() {
                        function t() { v(this, t), this.dirty = !0, this._results = [], this.changes = new ls, this.length = 0; var e = No(),
                                n = t.prototype;
                            n[e] || (n[e] = cs) } return y(t, [{ key: "map", value: function(t) { return this._results.map(t) } }, { key: "filter", value: function(t) { return this._results.filter(t) } }, { key: "find", value: function(t) { return this._results.find(t) } }, { key: "reduce", value: function(t, e) { return this._results.reduce(t, e) } }, { key: "forEach", value: function(t) { this._results.forEach(t) } }, { key: "some", value: function(t) { return this._results.some(t) } }, { key: "toArray", value: function() { return this._results.slice() } }, { key: "toString", value: function() { return this._results.toString() } }, { key: "reset", value: function(t) { this._results = function t(e, n) { void 0 === n && (n = e); for (var r = 0; r < e.length; r++) { var i = e[r];
                                        Array.isArray(i) ? (n === e && (n = e.slice(0, r)), t(i, n)) : n !== e && n.push(i) } return n }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0] } }, { key: "notifyOnChanges", value: function() { this.changes.emit(this) } }, { key: "setDirty", value: function() { this.dirty = !0 } }, { key: "destroy", value: function() { this.changes.complete(), this.changes.unsubscribe() } }]), t }(),
                    fs = function() {
                        function t(e) { v(this, t), this.queryList = e, this.matches = null } return y(t, [{ key: "clone", value: function() { return new t(this.queryList) } }, { key: "setDirty", value: function() { this.queryList.setDirty() } }]), t }(),
                    ds = function() {
                        function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            v(this, t), this.queries = e } return y(t, [{ key: "createEmbeddedView", value: function(e) { var n = e.queries; if (null !== n) { for (var r = null !== e.contentQueries ? e.contentQueries[0] : n.length, i = [], o = 0; o < r; o++) { var a = n.getByIndex(o);
                                        i.push(this.queries[a.indexInDeclarationView].clone()) } return new t(i) } return null } }, { key: "insertView", value: function(t) { this.dirtyQueriesWithMatches(t) } }, { key: "detachView", value: function(t) { this.dirtyQueriesWithMatches(t) } }, { key: "dirtyQueriesWithMatches", value: function(t) { for (var e = 0; e < this.queries.length; e++) null !== ks(t, e).matches && this.queries[e].setDirty() } }]), t }(),
                    vs = function t(e, n, r) { var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        v(this, t), this.predicate = e, this.descendants = n, this.isStatic = r, this.read = i },
                    ps = function() {
                        function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            v(this, t), this.queries = e } return y(t, [{ key: "elementStart", value: function(t, e) { for (var n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e) } }, { key: "elementEnd", value: function(t) { for (var e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t) } }, { key: "embeddedTView", value: function(e) { for (var n = null, r = 0; r < this.length; r++) { var i = null !== n ? n.length : 0,
                                        o = this.getByIndex(r).embeddedTView(e, i);
                                    o && (o.indexInDeclarationView = r, null !== n ? n.push(o) : n = [o]) } return null !== n ? new t(n) : null } }, { key: "template", value: function(t, e) { for (var n = 0; n < this.queries.length; n++) this.queries[n].template(t, e) } }, { key: "getByIndex", value: function(t) { return this.queries[t] } }, { key: "length", get: function() { return this.queries.length } }, { key: "track", value: function(t) { this.queries.push(t) } }]), t }(),
                    ys = function() {
                        function t(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                            v(this, t), this.metadata = e, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n } return y(t, [{ key: "elementStart", value: function(t, e) { this.isApplyingToNode(e) && this.matchTNode(t, e) } }, { key: "elementEnd", value: function(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1) } }, { key: "template", value: function(t, e) { this.elementStart(t, e) } }, { key: "embeddedTView", value: function(e, n) { return this.isApplyingToNode(e) ? (this.crossesNgTemplate = !0, this.addMatch(-e.index, n), new t(this.metadata)) : null } }, { key: "isApplyingToNode", value: function(t) { if (this._appliesToNextNode && !1 === this.metadata.descendants) { for (var e = this._declarationNodeIndex, n = t.parent; null !== n && 4 === n.type && n.index !== e;) n = n.parent; return e === (null !== n ? n.index : -1) } return this._appliesToNextNode } }, { key: "matchTNode", value: function(t, e) { var n = this.metadata.predicate; if (Array.isArray(n))
                                    for (var r = 0; r < n.length; r++) { var i = n[r];
                                        this.matchTNodeWithReadOption(t, e, gs(e, i)), this.matchTNodeWithReadOption(t, e, cr(e, t, i, !1, !1)) } else n === qa ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, cr(e, t, n, !1, !1)) } }, { key: "matchTNodeWithReadOption", value: function(t, e, n) { if (null !== n) { var r = this.metadata.read; if (null !== r)
                                        if (r === ba || r === Qa || r === qa && 0 === e.type) this.addMatch(e.index, -2);
                                        else { var i = cr(e, t, r, !1, !1);
                                            null !== i && this.addMatch(e.index, i) }
                                    else this.addMatch(e.index, n) } } }, { key: "addMatch", value: function(t, e) { null === this.matches ? this.matches = [t, e] : this.matches.push(t, e) } }]), t }();

                function gs(t, e) { var n = t.localNames; if (null !== n)
                        for (var r = 0; r < n.length; r += 2)
                            if (n[r] === e) return n[r + 1];
                    return null }

                function ms(t, e, n, r) { return -1 === n ? function(t, e) { return 3 === t.type || 4 === t.type ? co(ba, t, e) : 0 === t.type ? ho(qa, ba, t, e) : null }(e, t) : -2 === n ? function(t, e, n) { return n === ba ? co(ba, e, t) : n === qa ? ho(qa, ba, e, t) : n === Qa ? fo(Qa, ba, e, t) : void 0 }(t, e, r) : hr(t, t[1], n, e) }

                function _s(t, e, n, r) { var i = e[19].queries[r]; if (null === i.matches) { for (var o = t.data, a = n.matches, s = [], u = 0; u < a.length; u += 2) { var l = a[u];
                            s.push(l < 0 ? null : ms(e, o[l], a[u + 1], n.metadata.read)) }
                        i.matches = s } return i.matches }

                function ks(t, e) { return t.queries.getByIndex(e) } var ws = new Xt("Application Initializer"),
                    bs = function() { var t = function() {
                            function t(e) { var n = this;
                                v(this, t), this.appInits = e, this.initialized = !1, this.done = !1, this.donePromise = new Promise((function(t, e) { n.resolve = t, n.reject = e })) } return y(t, [{ key: "runInitializers", value: function() { var t = this; if (!this.initialized) { var e = [],
                                            n = function() { t.done = !0, t.resolve() }; if (this.appInits)
                                            for (var r = 0; r < this.appInits.length; r++) { var i = this.appInits[r]();
                                                Qo(i) && e.push(i) }
                                        Promise.all(e).then((function() { n() })).catch((function(e) { t.reject(e) })), 0 === e.length && n(), this.initialized = !0 } } }]), t }(); return t.\u0275fac = function(e) { return new(e || t)(ae(ws, 8)) }, t.\u0275prov = bt({ token: t, factory: t.\u0275fac }), t }(),
                    Ss = new Xt("AppId"),
                    Cs = { provide: Ss, useFactory: function() { return "".concat(Es()).concat(Es()).concat(Es()) }, deps: [] };

                function Es() { return String.fromCharCode(97 + Math.floor(25 * Math.random())) } var xs = new Xt("Platform Initializer"),
                    Ts = new Xt("Platform ID"),
                    As = new Xt("appBootstrapListener"),
                    Os = function() { var t = function() {
                            function t() { v(this, t) } return y(t, [{ key: "log", value: function(t) { console.log(t) } }, { key: "warn", value: function(t) { console.warn(t) } }]), t }(); return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = bt({ token: t, factory: t.\u0275fac }), t }(),
                    Ps = new Xt("LocaleId"),
                    Rs = new Xt("DefaultCurrencyCode"),
                    Is = function t(e, n) { v(this, t), this.ngModuleFactory = e, this.componentFactories = n },
                    Ds = function(t) { return new us(t) },
                    Ns = Ds,
                    js = function(t) { return Promise.resolve(Ds(t)) },
                    Fs = function(t) { var e = Ds(t),
                            n = $n(Ne(t).declarations).reduce((function(t, e) { var n = Ie(e); return n && t.push(new $a(n)), t }), []); return new Is(e, n) },
                    Ls = Fs,
                    Ms = function(t) { return Promise.resolve(Fs(t)) },
                    Hs = function() { var t = function() {
                            function t() { v(this, t), this.compileModuleSync = Ns, this.compileModuleAsync = js, this.compileModuleAndAllComponentsSync = Ls, this.compileModuleAndAllComponentsAsync = Ms } return y(t, [{ key: "clearCache", value: function() {} }, { key: "clearCacheFor", value: function(t) {} }, { key: "getModuleId", value: function(t) {} }]), t }(); return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = bt({ token: t, factory: t.\u0275fac }), t }(),
                    Bs = Promise.resolve(0);

                function Vs(t) { "undefined" == typeof Zone ? Bs.then((function() { t && t.apply(null, null) })) : Zone.current.scheduleMicroTask("scheduleMicrotask", t) } var Us = function() {
                    function t(e) { var n, r, i = e.enableLongStackTrace,
                            o = void 0 !== i && i,
                            a = e.shouldCoalesceEventChangeDetection,
                            s = void 0 !== a && a; if (v(this, t), this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ls(!1), this.onMicrotaskEmpty = new ls(!1), this.onStable = new ls(!1), this.onError = new ls(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                        Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), o && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = s, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function() { var t = zt.requestAnimationFrame,
                                e = zt.cancelAnimationFrame; if ("undefined" != typeof Zone && t && e) { var n = t[Zone.__symbol__("OriginalDelegate")];
                                n && (t = n); var r = e[Zone.__symbol__("OriginalDelegate")];
                                r && (e = r) } return { nativeRequestAnimationFrame: t, nativeCancelAnimationFrame: e } }().nativeRequestAnimationFrame, r = !!(n = this).shouldCoalesceEventChangeDetection && n.nativeRequestAnimationFrame && function() {! function(t) {-1 === t.lastRequestAnimationFrameId && (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(zt, (function() { t.fakeTopEventTask || (t.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", (function() { t.lastRequestAnimationFrameId = -1, Qs(t), Ws(t) }), void 0, (function() {}), (function() {}))), t.fakeTopEventTask.invoke() })), Qs(t)) }(n) }, n._inner = n._inner.fork({ name: "angular", properties: { isAngularZone: !0, maybeDelayChangeDetection: r }, onInvokeTask: function(t, e, i, o, a, s) { try { return Zs(n), t.invokeTask(i, o, a, s) } finally { r && "eventTask" === o.type && r(), Ks(n) } }, onInvoke: function(t, e, r, i, o, a, s) { try { return Zs(n), t.invoke(r, i, o, a, s) } finally { Ks(n) } }, onHasTask: function(t, e, r, i) { t.hasTask(r, i), e === r && ("microTask" == i.change ? (n._hasPendingMicrotasks = i.microTask, Qs(n), Ws(n)) : "macroTask" == i.change && (n.hasPendingMacrotasks = i.macroTask)) }, onHandleError: function(t, e, r, i) { return t.handleError(r, i), n.runOutsideAngular((function() { return n.onError.emit(i) })), !1 } }) } return y(t, [{ key: "run", value: function(t, e, n) { return this._inner.run(t, e, n) } }, { key: "runTask", value: function(t, e, n, r) { var i = this._inner,
                                o = i.scheduleEventTask("NgZoneEvent: " + r, t, qs, zs, zs); try { return i.runTask(o, e, n) } finally { i.cancelTask(o) } } }, { key: "runGuarded", value: function(t, e, n) { return this._inner.runGuarded(t, e, n) } }, { key: "runOutsideAngular", value: function(t) { return this._outer.run(t) } }], [{ key: "isInAngularZone", value: function() { return !0 === Zone.current.get("isAngularZone") } }, { key: "assertInAngularZone", value: function() { if (!t.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!") } }, { key: "assertNotInAngularZone", value: function() { if (t.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!") } }]), t }();

                function zs() {} var qs = {};

                function Ws(t) { if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try { t._nesting++, t.onMicrotaskEmpty.emit(null) } finally { if (t._nesting--, !t.hasPendingMicrotasks) try { t.runOutsideAngular((function() { return t.onStable.emit(null) })) } finally { t.isStable = !0 } } }

                function Qs(t) { t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId) }

                function Zs(t) { t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null)) }

                function Ks(t) { t._nesting--, Ws(t) } var Gs, Ys = function() {
                        function t() { v(this, t), this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ls, this.onMicrotaskEmpty = new ls, this.onStable = new ls, this.onError = new ls } return y(t, [{ key: "run", value: function(t, e, n) { return t.apply(e, n) } }, { key: "runGuarded", value: function(t, e, n) { return t.apply(e, n) } }, { key: "runOutsideAngular", value: function(t) { return t() } }, { key: "runTask", value: function(t, e, n, r) { return t.apply(e, n) } }]), t }(),
                    Xs = function() { var t = function() {
                            function t(e) { var n = this;
                                v(this, t), this._ngZone = e, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), e.run((function() { n.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone") })) } return y(t, [{ key: "_watchAngularEvents", value: function() { var t = this;
                                    this._ngZone.onUnstable.subscribe({ next: function() { t._didWork = !0, t._isZoneStable = !1 } }), this._ngZone.runOutsideAngular((function() { t._ngZone.onStable.subscribe({ next: function() { Us.assertNotInAngularZone(), Vs((function() { t._isZoneStable = !0, t._runCallbacksIfReady() })) } }) })) } }, { key: "increasePendingRequestCount", value: function() { return this._pendingCount += 1, this._didWork = !0, this._pendingCount } }, { key: "decreasePendingRequestCount", value: function() { if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero"); return this._runCallbacksIfReady(), this._pendingCount } }, { key: "isStable", value: function() { return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks } }, { key: "_runCallbacksIfReady", value: function() { var t = this; if (this.isStable()) Vs((function() { for (; 0 !== t._callbacks.length;) { var e = t._callbacks.pop();
                                            clearTimeout(e.timeoutId), e.doneCb(t._didWork) }
                                        t._didWork = !1 }));
                                    else { var e = this.getPendingTasks();
                                        this._callbacks = this._callbacks.filter((function(t) { return !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1) })), this._didWork = !0 } } }, { key: "getPendingTasks", value: function() { return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map((function(t) { return { source: t.source, creationLocation: t.creationLocation, data: t.data } })) : [] } }, { key: "addCallback", value: function(t, e, n) { var r = this,
                                        i = -1;
                                    e && e > 0 && (i = setTimeout((function() { r._callbacks = r._callbacks.filter((function(t) { return t.timeoutId !== i })), t(r._didWork, r.getPendingTasks()) }), e)), this._callbacks.push({ doneCb: t, timeoutId: i, updateCb: n }) } }, { key: "whenStable", value: function(t, e, n) { if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                                    this.addCallback(t, e, n), this._runCallbacksIfReady() } }, { key: "getPendingRequestCount", value: function() { return this._pendingCount } }, { key: "findProviders", value: function(t, e, n) { return [] } }]), t }(); return t.\u0275fac = function(e) { return new(e || t)(ae(Us)) }, t.\u0275prov = bt({ token: t, factory: t.\u0275fac }), t }(),
                    $s = function() { var t = function() {
                            function t() { v(this, t), this._applications = new Map, Js.addToWindow(this) } return y(t, [{ key: "registerApplication", value: function(t, e) { this._applications.set(t, e) } }, { key: "unregisterApplication", value: function(t) { this._applications.delete(t) } }, { key: "unregisterAllApplications", value: function() { this._applications.clear() } }, { key: "getTestability", value: function(t) { return this._applications.get(t) || null } }, { key: "getAllTestabilities", value: function() { return Array.from(this._applications.values()) } }, { key: "getAllRootElements", value: function() { return Array.from(this._applications.keys()) } }, { key: "findTestabilityInTree", value: function(t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return Js.findTestabilityInTree(this, t, e) } }]), t }(); return t.\u0275fac = function(e) { return new(e || t) }, t.\u0275prov = bt({ token: t, factory: t.\u0275fac }), t }(),
                    Js = new(function() {
                        function t() { v(this, t) } return y(t, [{ key: "addToWindow", value: function(t) {} }, { key: "findTestabilityInTree", value: function(t, e, n) { return null } }]), t }()),
                    tu = new Xt("AllowMultipleToken"),
                    eu = function t(e, n) { v(this, t), this.name = e, this.token = n };

                function nu(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        r = "Platform: " + e,
                        i = new Xt(r); return function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            o = ru(); if (!o || o.injector.get(tu, !1))
                            if (t) t(n.concat(e).concat({ provide: i, useValue: !0 }));
                            else { var a = n.concat(e).concat({ provide: i, useValue: !0 }, { provide: go, useValue: "platform" });! function(t) { if (Gs && !Gs.destroyed && !Gs.injector.get(tu, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                    Gs = t.get(iu); var e = t.get(xs, null);
                                    e && e.forEach((function(t) { return t() })) }(Po.create({ providers: a, name: r })) }
                        return function(t) { var e = ru(); if (!e) throw new Error("No platform exists!"); if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first."); return e }(i) } }

                function ru() { return Gs && !Gs.destroyed ? Gs : null } var iu = function() { var t = function() {
                        function t(e) { v(this, t), this._injector = e, this._modules = [], this._destroyListeners = [], this._destroyed = !1 } return y(t, [{ key: "bootstrapModuleFactory", value: function(t, e) { var n, r, i = this,
                                    o = (n = e ? e.ngZone : void 0, r = e && e.ngZoneEventCoalescing || !1, "noop" === n ? new Ys : ("zone.js" === n ? void 0 : n) || new Us({ enableLongStackTrace: br(), shouldCoalesceEventChangeDetection: r })),
                                    a = [{ provide: Us, useValue: o }]; return o.run((function() { var e = Po.create({ providers: a, parent: i.injector, name: t.moduleType.name }),
                                        n = t.create(e),
                                        r = n.injector.get(_r, null); if (!r) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?"); return n.onDestroy((function() { return uu(i._modules, n) })), o.runOutsideAngular((function() { return o.onError.subscribe({ next: function(t) { r.handleError(t) } }) })),
                                        function(t, e, r) { try { var o = ((a = n.injector.get(bs)).runInitializers(), a.donePromise.then((function() { return os(n.injector.get(Ps, "en-US") || "en-US"), i._moduleDoBootstrap(n), n }))); return Qo(o) ? o.catch((function(n) { throw e.runOutsideAngular((function() { return t.handleError(n) })), n })) : o } catch (s) { throw e.runOutsideAngular((function() { return t.handleError(s) })), s } var a }(r, o) })) } }, { key: "bootstrapModule", value: function(t) { var e = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                    r = ou({}, n); return function(t, e, n) { var r = new us(n); return Promise.resolve(r) }(0, 0, t).then((function(t) { return e.bootstrapModuleFactory(t, r) })) } }, { key: "_moduleDoBootstrap", value: function(t) { var e = t.injector.get(su); if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach((function(t) { return e.bootstrap(t) }));
                                else { if (!t.instance.ngDoBootstrap) throw new Error("The module ".concat(It(t.instance.constructor), ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'));
                                    t.instance.ngDoBootstrap(e) }
                                this._modules.push(t) } }, { key: "onDestroy", value: function(t) { this._destroyListeners.push(t) } }, { key: "injector", get: function() { return this._injector } }, { key: "destroy", value: function() { if (this._destroyed) throw new Error("The platform has already been destroyed!");
                                this._modules.slice().forEach((function(t) { return t.destroy() })), this._destroyListeners.forEach((function(t) { return t() })), this._destroyed = !0 } }, { key: "destroyed", get: function() { return this._destroyed } }]), t }(); return t.\u0275fac = function(e) { return new(e || t)(ae(Po)) }, t.\u0275prov = bt({ token: t, factory: t.\u0275fac }), t }();

                function ou(t, e) { return Array.isArray(e) ? e.reduce(ou, t) : Object.assign(Object.assign({}, t), e) } var au, su = ((au = function() {
                    function t(e, n, r, i, o, a) { var s = this;
                        v(this, t), this._zone = e, this._console = n, this._injector = r, this._exceptionHandler = i, this._componentFactoryResolver = o, this._initStatus = a, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = br(), this._zone.onMicrotaskEmpty.subscribe({ next: function() { s._zone.run((function() { s.tick() })) } }); var u = new I((function(t) { s._stable = s._zone.isStable && !s._zone.hasPendingMacrotasks && !s._zone.hasPendingMicrotasks, s._zone.runOutsideAngular((function() { t.next(s._stable), t.complete() })) })),
                            l = new I((function(t) { var e;
                                s._zone.runOutsideAngular((function() { e = s._zone.onStable.subscribe((function() { Us.assertNotInAngularZone(), Vs((function() { s._stable || s._zone.hasPendingMacrotasks || s._zone.hasPendingMicrotasks || (s._stable = !0, t.next(!0)) })) })) })); var n = s._zone.onUnstable.subscribe((function() { Us.assertInAngularZone(), s._stable && (s._stable = !1, s._zone.runOutsideAngular((function() { t.next(!1) }))) })); return function() { e.unsubscribe(), n.unsubscribe() } }));
                        this.isStable = ot(u, l.pipe((function(t) { return at()((e = ft, function(t) { var n;
                                n = "function" == typeof e ? e : function() { return e }; var r = Object.create(t, ct); return r.source = t, r.subjectFactory = n, r })(t)); var e }))) } return y(t, [{ key: "bootstrap", value: function(t, e) { var n, r = this; if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                            n = t instanceof _a ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType); var i = n.isBoundToModule ? void 0 : this._injector.get(he),
                                o = n.create(Po.NULL, [], e || n.selector, i);
                            o.onDestroy((function() { r._unloadComponent(o) })); var a = o.injector.get(Xs, null); return a && o.injector.get($s).registerApplication(o.location.nativeElement, a), this._loadComponent(o), br() && this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."), o } }, { key: "tick", value: function() { var t = this; if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively"); try { this._runningTick = !0; var n, r = e(this._views); try { for (r.s(); !(n = r.n()).done;) n.value.detectChanges() } catch (a) { r.e(a) } finally { r.f() } if (this._enforceNoNewChanges) { var i, o = e(this._views); try { for (o.s(); !(i = o.n()).done;) i.value.checkNoChanges() } catch (a) { o.e(a) } finally { o.f() } } } catch (s) { this._zone.runOutsideAngular((function() { return t._exceptionHandler.handleError(s) })) } finally { this._runningTick = !1 } } }, { key: "attachView", value: function(t) { var e = t;
                            this._views.push(e), e.attachToAppRef(this) } }, { key: "detachView", value: function(t) { var e = t;
                            uu(this._views, e), e.detachFromAppRef() } }, { key: "_loadComponent", value: function(t) { this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(As, []).concat(this._bootstrapListeners).forEach((function(e) { return e(t) })) } }, { key: "_unloadComponent", value: function(t) { this.detachView(t.hostView), uu(this.components, t) } }, { key: "ngOnDestroy", value: function() { this._views.slice().forEach((function(t) { return t.destroy() })) } }, { key: "viewCount", get: function() { return this._views.length } }]), t }()).\u0275fac = function(t) { return new(t || au)(ae(Us), ae(Os), ae(Po), ae(_r), ae(wa), ae(bs)) }, au.\u0275prov = bt({ token: au, factory: au.\u0275fac }), au);

                function uu(t, e) { var n = t.indexOf(e);
                    n > -1 && t.splice(n, 1) } var lu = function t() { v(this, t) },
                    cu = function t() { v(this, t) },
                    hu = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" },
                    fu = function() { var e = function() {
                            function e(t, n) { v(this, e), this._compiler = t, this._config = n || hu } return y(e, [{ key: "load", value: function(t) { return this.loadAndCompile(t) } }, { key: "loadAndCompile", value: function(e) { var n = this,
                                        r = t(e.split("#"), 2),
                                        i = r[0],
                                        o = r[1]; return void 0 === o && (o = "default"), u("zn8P")(i).then((function(t) { return t[o] })).then((function(t) { return du(t, i, o) })).then((function(t) { return n._compiler.compileModuleAsync(t) })) } }, { key: "loadFactory", value: function(e) { var n = t(e.split("#"), 2),
                                        r = n[0],
                                        i = n[1],
                                        o = "NgFactory"; return void 0 === i && (i = "default", o = ""), u("zn8P")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then((function(t) { return t[i + o] })).then((function(t) { return du(t, r, i) })) } }]), e }(); return e.\u0275fac = function(t) { return new(t || e)(ae(Hs), ae(cu, 8)) }, e.\u0275prov = bt({ token: e, factory: e.\u0275fac }), e }();

                function du(t, e, n) { if (!t) throw new Error("Cannot find '".concat(n, "' in '").concat(e, "'")); return t } var vu = nu(null, "core", [{ provide: Ts, useValue: "unknown" }, { provide: iu, deps: [Po] }, { provide: $s, deps: [] }, { provide: Os, deps: [] }]),
                    pu = [{ provide: su, useClass: su, deps: [Us, Os, Po, _r, wa, bs] }, { provide: Xa, deps: [Us], useFactory: function(t) { var e = []; return t.onStable.subscribe((function() { for (; e.length;) e.pop()() })),
                                function(t) { e.push(t) } } }, { provide: bs, useClass: bs, deps: [
                            [new yt, ws]
                        ] }, { provide: Hs, useClass: Hs, deps: [] }, Cs, { provide: Ha, useFactory: function() { return Ua }, deps: [] }, { provide: Ba, useFactory: function() { return za }, deps: [] }, { provide: Ps, useFactory: function(t) { return os(t = t || "undefined" != typeof $localize && $localize.locale || "en-US"), t }, deps: [
                            [new pt(Ps), new yt, new mt]
                        ] }, { provide: Rs, useValue: "USD" }],
                    yu = function() { var t = function t(e) { v(this, t) }; return t.\u0275mod = Oe({ type: t }), t.\u0275inj = St({ factory: function(e) { return new(e || t)(ae(su)) }, providers: pu }), t }(),
                    gu = null;

                function mu() { return gu } var _u, ku = new Xt("DocumentToken"),
                    wu = ((_u = function t() { v(this, t) }).\u0275fac = function(t) { return new(t || _u) }, _u.\u0275prov = bt({ factory: bu, token: _u, providedIn: "platform" }), _u);

                function bu() { return ae(Eu) } var Su, Cu = new Xt("Location Initialized"),
                    Eu = ((Su = function(t) { s(n, t); var e = l(n);

                        function n(t) { var r; return v(this, n), (r = e.call(this))._doc = t, r._init(), r } return y(n, [{ key: "_init", value: function() { this.location = mu().getLocation(), this._history = mu().getHistory() } }, { key: "getBaseHrefFromDOM", value: function() { return mu().getBaseHref(this._doc) } }, { key: "onPopState", value: function(t) { mu().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1) } }, { key: "onHashChange", value: function(t) { mu().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1) } }, { key: "href", get: function() { return this.location.href } }, { key: "protocol", get: function() { return this.location.protocol } }, { key: "hostname", get: function() { return this.location.hostname } }, { key: "port", get: function() { return this.location.port } }, { key: "pathname", get: function() { return this.location.pathname }, set: function(t) { this.location.pathname = t } }, { key: "search", get: function() { return this.location.search } }, { key: "hash", get: function() { return this.location.hash } }, { key: "pushState", value: function(t, e, n) { xu() ? this._history.pushState(t, e, n) : this.location.hash = n } }, { key: "replaceState", value: function(t, e, n) { xu() ? this._history.replaceState(t, e, n) : this.location.hash = n } }, { key: "forward", value: function() { this._history.forward() } }, { key: "back", value: function() { this._history.back() } }, { key: "getState", value: function() { return this._history.state } }]), n }(wu)).\u0275fac = function(t) { return new(t || Su)(ae(ku)) }, Su.\u0275prov = bt({ factory: Tu, token: Su, providedIn: "platform" }), Su);

                function xu() { return !!window.history.pushState }

                function Tu() { return new Eu(ae(ku)) }

                function Au(t, e) { if (0 == t.length) return e; if (0 == e.length) return t; var n = 0; return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e }

                function Ou(t) { var e = t.match(/#|\?|$/),
                        n = e && e.index || t.length; return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n) }

                function Pu(t) { return t && "?" !== t[0] ? "?" + t : t } var Ru, Iu = ((Ru = function t() { v(this, t) }).\u0275fac = function(t) { return new(t || Ru) }, Ru.\u0275prov = bt({ factory: Du, token: Ru, providedIn: "root" }), Ru);

                function Du(t) { var e = ae(ku).location; return new Mu(ae(wu), e && e.origin || "") } var Nu, ju, Fu, Lu = new Xt("appBaseHref"),
                    Mu = ((Fu = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; if (v(this, n), (i = e.call(this))._platformLocation = t, null == r && (r = i._platformLocation.getBaseHrefFromDOM()), null == r) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."); return i._baseHref = r, c(i) } return y(n, [{ key: "onPopState", value: function(t) { this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t) } }, { key: "getBaseHref", value: function() { return this._baseHref } }, { key: "prepareExternalUrl", value: function(t) { return Au(this._baseHref, t) } }, { key: "path", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    e = this._platformLocation.pathname + Pu(this._platformLocation.search),
                                    n = this._platformLocation.hash; return n && t ? "".concat(e).concat(n) : e } }, { key: "pushState", value: function(t, e, n, r) { var i = this.prepareExternalUrl(n + Pu(r));
                                this._platformLocation.pushState(t, e, i) } }, { key: "replaceState", value: function(t, e, n, r) { var i = this.prepareExternalUrl(n + Pu(r));
                                this._platformLocation.replaceState(t, e, i) } }, { key: "forward", value: function() { this._platformLocation.forward() } }, { key: "back", value: function() { this._platformLocation.back() } }]), n }(Iu)).\u0275fac = function(t) { return new(t || Fu)(ae(wu), ae(Lu, 8)) }, Fu.\u0275prov = bt({ token: Fu, factory: Fu.\u0275fac }), Fu),
                    Hu = ((ju = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this))._platformLocation = t, i._baseHref = "", null != r && (i._baseHref = r), i } return y(n, [{ key: "onPopState", value: function(t) { this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t) } }, { key: "getBaseHref", value: function() { return this._baseHref } }, { key: "path", value: function() { var t = this._platformLocation.hash; return null == t && (t = "#"), t.length > 0 ? t.substring(1) : t } }, { key: "prepareExternalUrl", value: function(t) { var e = Au(this._baseHref, t); return e.length > 0 ? "#" + e : e } }, { key: "pushState", value: function(t, e, n, r) { var i = this.prepareExternalUrl(n + Pu(r));
                                0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.pushState(t, e, i) } }, { key: "replaceState", value: function(t, e, n, r) { var i = this.prepareExternalUrl(n + Pu(r));
                                0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, i) } }, { key: "forward", value: function() { this._platformLocation.forward() } }, { key: "back", value: function() { this._platformLocation.back() } }]), n }(Iu)).\u0275fac = function(t) { return new(t || ju)(ae(wu), ae(Lu, 8)) }, ju.\u0275prov = bt({ token: ju, factory: ju.\u0275fac }), ju),
                    Bu = ((Nu = function() {
                        function t(e, n) { var r = this;
                            v(this, t), this._subject = new ls, this._urlChangeListeners = [], this._platformStrategy = e; var i = this._platformStrategy.getBaseHref();
                            this._platformLocation = n, this._baseHref = Ou(Uu(i)), this._platformStrategy.onPopState((function(t) { r._subject.emit({ url: r.path(!0), pop: !0, state: t.state, type: t.type }) })) } return y(t, [{ key: "path", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return this.normalize(this._platformStrategy.path(t)) } }, { key: "getState", value: function() { return this._platformLocation.getState() } }, { key: "isCurrentPathEqualTo", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; return this.path() == this.normalize(t + Pu(e)) } }, { key: "normalize", value: function(e) { return t.stripTrailingSlash(function(t, e) { return t && e.startsWith(t) ? e.substring(t.length) : e }(this._baseHref, Uu(e))) } }, { key: "prepareExternalUrl", value: function(t) { return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t) } }, { key: "go", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                this._platformStrategy.pushState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Pu(e)), n) } }, { key: "replaceState", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                this._platformStrategy.replaceState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Pu(e)), n) } }, { key: "forward", value: function() { this._platformStrategy.forward() } }, { key: "back", value: function() { this._platformStrategy.back() } }, { key: "onUrlChange", value: function(t) { var e = this;
                                this._urlChangeListeners.push(t), this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe((function(t) { e._notifyUrlChangeListeners(t.url, t.state) }))) } }, { key: "_notifyUrlChangeListeners", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    e = arguments.length > 1 ? arguments[1] : void 0;
                                this._urlChangeListeners.forEach((function(n) { return n(t, e) })) } }, { key: "subscribe", value: function(t, e, n) { return this._subject.subscribe({ next: t, error: e, complete: n }) } }]), t }()).\u0275fac = function(t) { return new(t || Nu)(ae(Iu), ae(wu)) }, Nu.normalizeQueryParams = Pu, Nu.joinWithSlash = Au, Nu.stripTrailingSlash = Ou, Nu.\u0275prov = bt({ factory: Vu, token: Nu, providedIn: "root" }), Nu);

                function Vu() { return new Bu(ae(Iu), ae(wu)) }

                function Uu(t) { return t.replace(/\/index.html$/, "") } var zu, qu, Wu = function(t) { return t[t.Zero = 0] = "Zero", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Few = 3] = "Few", t[t.Many = 4] = "Many", t[t.Other = 5] = "Other", t }({}),
                    Qu = function t() { v(this, t) },
                    Zu = ((qu = function(t) { s(n, t); var e = l(n);

                        function n(t) { var r; return v(this, n), (r = e.call(this)).locale = t, r } return y(n, [{ key: "getPluralCategory", value: function(t, e) { switch (function(t) { return function(t) { var e = function(t) { return t.toLowerCase().replace(/_/g, "-") }(t),
                                            n = rs(e); if (n) return n; var r = e.split("-")[0]; if (n = rs(r)) return n; if ("en" === r) return es; throw new Error('Missing locale data for the locale "'.concat(t, '".')) }(t)[is.PluralCase] }(e || this.locale)(t)) {
                                    case Wu.Zero:
                                        return "zero";
                                    case Wu.One:
                                        return "one";
                                    case Wu.Two:
                                        return "two";
                                    case Wu.Few:
                                        return "few";
                                    case Wu.Many:
                                        return "many";
                                    default:
                                        return "other" } } }]), n }(Qu)).\u0275fac = function(t) { return new(t || qu)(ae(Ps)) }, qu.\u0275prov = bt({ token: qu, factory: qu.\u0275fac }), qu),
                    Ku = ((zu = function() {
                        function t(e, n) { v(this, t), this._viewContainer = e, this._context = new Gu, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = n } return y(t, [{ key: "ngIf", set: function(t) { this._context.$implicit = this._context.ngIf = t, this._updateView() } }, { key: "ngIfThen", set: function(t) { Yu("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView() } }, { key: "ngIfElse", set: function(t) { Yu("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView() } }, { key: "_updateView", value: function() { this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context))) } }], [{ key: "ngTemplateContextGuard", value: function(t, e) { return !0 } }]), t }()).\u0275fac = function(t) { return new(t || zu)(Bo(Qa), Bo(qa)) }, zu.\u0275dir = Re({ type: zu, selectors: [
                            ["", "ngIf", ""]
                        ], inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" } }), zu),
                    Gu = function t() { v(this, t), this.$implicit = null, this.ngIf = null };

                function Yu(t, e) { if (e && !e.createEmbeddedView) throw new Error("".concat(t, " must be a TemplateRef, but received '").concat(It(e), "'.")) } var Xu, $u, Ju = (($u = function t() { v(this, t) }).\u0275mod = Oe({ type: $u }), $u.\u0275inj = St({ factory: function(t) { return new(t || $u) }, providers: [{ provide: Qu, useClass: Zu }] }), $u),
                    tl = ((Xu = function t() { v(this, t) }).\u0275prov = bt({ token: Xu, providedIn: "root", factory: function() { return new el(ae(ku), window, ae(_r)) } }), Xu),
                    el = function() {
                        function t(e, n, r) { v(this, t), this.document = e, this.window = n, this.errorHandler = r, this.offset = function() { return [0, 0] } } return y(t, [{ key: "setOffset", value: function(t) { this.offset = Array.isArray(t) ? function() { return t } : t } }, { key: "getScrollPosition", value: function() { return this.supportsScrolling() ? [this.window.scrollX, this.window.scrollY] : [0, 0] } }, { key: "scrollToPosition", value: function(t) { this.supportsScrolling() && this.window.scrollTo(t[0], t[1]) } }, { key: "scrollToAnchor", value: function(t) { if (this.supportsScrolling()) { var e = this.document.getElementById(t) || this.document.getElementsByName(t)[0];
                                    e && this.scrollToElement(e) } } }, { key: "setHistoryScrollRestoration", value: function(t) { if (this.supportScrollRestoration()) { var e = this.window.history;
                                    e && e.scrollRestoration && (e.scrollRestoration = t) } } }, { key: "scrollToElement", value: function(t) { var e = t.getBoundingClientRect(),
                                    n = e.left + this.window.pageXOffset,
                                    r = e.top + this.window.pageYOffset,
                                    i = this.offset();
                                this.window.scrollTo(n - i[0], r - i[1]) } }, { key: "supportScrollRestoration", value: function() { try { if (!this.window || !this.window.scrollTo) return !1; var t = nl(this.window.history) || nl(Object.getPrototypeOf(this.window.history)); return !(!t || !t.writable && !t.set) } catch (e) { return !1 } } }, { key: "supportsScrolling", value: function() { try { return !!this.window.scrollTo } catch (t) { return !1 } } }]), t }();

                function nl(t) { return Object.getOwnPropertyDescriptor(t, "scrollRestoration") } var rl, il, ol, al, sl = function(n) { s(i, n); var r = l(i);

                        function i() { return v(this, i), r.apply(this, arguments) } return y(i, [{ key: "getProperty", value: function(t, e) { return t[e] } }, { key: "log", value: function(t) { window.console && window.console.log && window.console.log(t) } }, { key: "logGroup", value: function(t) { window.console && window.console.group && window.console.group(t) } }, { key: "logGroupEnd", value: function() { window.console && window.console.groupEnd && window.console.groupEnd() } }, { key: "onAndCancel", value: function(t, e, n) { return t.addEventListener(e, n, !1),
                                    function() { t.removeEventListener(e, n, !1) } } }, { key: "dispatchEvent", value: function(t, e) { t.dispatchEvent(e) } }, { key: "remove", value: function(t) { return t.parentNode && t.parentNode.removeChild(t), t } }, { key: "getValue", value: function(t) { return t.value } }, { key: "createElement", value: function(t, e) { return (e = e || this.getDefaultDocument()).createElement(t) } }, { key: "createHtmlDocument", value: function() { return document.implementation.createHTMLDocument("fakeTitle") } }, { key: "getDefaultDocument", value: function() { return document } }, { key: "isElementNode", value: function(t) { return t.nodeType === Node.ELEMENT_NODE } }, { key: "isShadowRoot", value: function(t) { return t instanceof DocumentFragment } }, { key: "getGlobalEventTarget", value: function(t, e) { return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null } }, { key: "getHistory", value: function() { return window.history } }, { key: "getLocation", value: function() { return window.location } }, { key: "getBaseHref", value: function(t) { var e, n = ul || (ul = document.querySelector("base")) ? ul.getAttribute("href") : null; return null == n ? null : (e = n, rl || (rl = document.createElement("a")), rl.setAttribute("href", e), "/" === rl.pathname.charAt(0) ? rl.pathname : "/" + rl.pathname) } }, { key: "resetBaseElement", value: function() { ul = null } }, { key: "getUserAgent", value: function() { return window.navigator.userAgent } }, { key: "performanceNow", value: function() { return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime() } }, { key: "supportsCookies", value: function() { return !0 } }, { key: "getCookie", value: function(n) { return function(n, r) { r = encodeURIComponent(r); var i, o = e(n.split(";")); try { for (o.s(); !(i = o.n()).done;) { var a = i.value,
                                                s = a.indexOf("="),
                                                u = t(-1 == s ? [a, ""] : [a.slice(0, s), a.slice(s + 1)], 2),
                                                l = u[0],
                                                c = u[1]; if (l.trim() === r) return decodeURIComponent(c) } } catch (h) { o.e(h) } finally { o.f() } return null }(document.cookie, n) } }], [{ key: "makeCurrent", value: function() { var t;
                                t = new i, gu || (gu = t) } }]), i }(function(t) { s(n, t); var e = l(n);

                        function n() { return v(this, n), e.call(this) } return y(n, [{ key: "supportsDOMEvents", value: function() { return !0 } }]), n }(function() { return function t() { v(this, t) } }())),
                    ul = null,
                    ll = new Xt("TRANSITION_ID"),
                    cl = [{ provide: ws, useFactory: function(t, e, n) { return function() { n.get(bs).donePromise.then((function() { var n = mu();
                                    Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter((function(e) { return e.getAttribute("ng-transition") === t })).forEach((function(t) { return n.remove(t) })) })) } }, deps: [ll, ku, Po], multi: !0 }],
                    hl = function() {
                        function t() { v(this, t) } return y(t, [{ key: "addToWindow", value: function(t) { zt.getAngularTestability = function(e) { var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                        r = t.findTestabilityInTree(e, n); if (null == r) throw new Error("Could not find testability for element."); return r }, zt.getAllAngularTestabilities = function() { return t.getAllTestabilities() }, zt.getAllAngularRootElements = function() { return t.getAllRootElements() }, zt.frameworkStabilizers || (zt.frameworkStabilizers = []), zt.frameworkStabilizers.push((function(t) { var e = zt.getAllAngularTestabilities(),
                                        n = e.length,
                                        r = !1,
                                        i = function(e) { r = r || e, 0 == --n && t(r) };
                                    e.forEach((function(t) { t.whenStable(i) })) })) } }, { key: "findTestabilityInTree", value: function(t, e, n) { if (null == e) return null; var r = t.getTestability(e); return null != r ? r : n ? mu().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null } }], [{ key: "init", value: function() { var e;
                                e = new t, Js = e } }]), t }(),
                    fl = new Xt("EventManagerPlugins"),
                    dl = ((il = function() {
                        function t(e, n) { var r = this;
                            v(this, t), this._zone = n, this._eventNameToPlugin = new Map, e.forEach((function(t) { return t.manager = r })), this._plugins = e.slice().reverse() } return y(t, [{ key: "addEventListener", value: function(t, e, n) { return this._findPluginFor(e).addEventListener(t, e, n) } }, { key: "addGlobalEventListener", value: function(t, e, n) { return this._findPluginFor(e).addGlobalEventListener(t, e, n) } }, { key: "getZone", value: function() { return this._zone } }, { key: "_findPluginFor", value: function(t) { var e = this._eventNameToPlugin.get(t); if (e) return e; for (var n = this._plugins, r = 0; r < n.length; r++) { var i = n[r]; if (i.supports(t)) return this._eventNameToPlugin.set(t, i), i } throw new Error("No event manager plugin found for event " + t) } }]), t }()).\u0275fac = function(t) { return new(t || il)(ae(fl), ae(Us)) }, il.\u0275prov = bt({ token: il, factory: il.\u0275fac }), il),
                    vl = function() {
                        function t(e) { v(this, t), this._doc = e } return y(t, [{ key: "addGlobalEventListener", value: function(t, e, n) { var r = mu().getGlobalEventTarget(this._doc, t); if (!r) throw new Error("Unsupported event target ".concat(r, " for event ").concat(e)); return this.addEventListener(r, e, n) } }]), t }(),
                    pl = ((al = function() {
                        function t() { v(this, t), this._stylesSet = new Set } return y(t, [{ key: "addStyles", value: function(t) { var e = this,
                                    n = new Set;
                                t.forEach((function(t) { e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t)) })), this.onStylesAdded(n) } }, { key: "onStylesAdded", value: function(t) {} }, { key: "getAllStyles", value: function() { return Array.from(this._stylesSet) } }]), t }()).\u0275fac = function(t) { return new(t || al) }, al.\u0275prov = bt({ token: al, factory: al.\u0275fac }), al),
                    yl = ((ol = function(t) { s(n, t); var e = l(n);

                        function n(t) { var r; return v(this, n), (r = e.call(this))._doc = t, r._hostNodes = new Set, r._styleNodes = new Set, r._hostNodes.add(t.head), r } return y(n, [{ key: "_addStylesToHost", value: function(t, e) { var n = this;
                                t.forEach((function(t) { var r = n._doc.createElement("style");
                                    r.textContent = t, n._styleNodes.add(e.appendChild(r)) })) } }, { key: "addHost", value: function(t) { this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t) } }, { key: "removeHost", value: function(t) { this._hostNodes.delete(t) } }, { key: "onStylesAdded", value: function(t) { var e = this;
                                this._hostNodes.forEach((function(n) { return e._addStylesToHost(t, n) })) } }, { key: "ngOnDestroy", value: function() { this._styleNodes.forEach((function(t) { return mu().remove(t) })) } }]), n }(pl)).\u0275fac = function(t) { return new(t || ol)(ae(ku)) }, ol.\u0275prov = bt({ token: ol, factory: ol.\u0275fac }), ol),
                    gl = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
                    ml = /%COMP%/g;

                function _l(t, e, n) { for (var r = 0; r < e.length; r++) { var i = e[r];
                        Array.isArray(i) ? _l(t, i, n) : (i = i.replace(ml, t), n.push(i)) } return n }

                function kl(t) { return function(e) { if ("__ngUnwrap__" === e) return t;!1 === t(e) && (e.preventDefault(), e.returnValue = !1) } } var wl, bl, Sl, Cl, El = ((wl = function() {
                        function t(e, n, r) { v(this, t), this.eventManager = e, this.sharedStylesHost = n, this.appId = r, this.rendererByCompId = new Map, this.defaultRenderer = new xl(e) } return y(t, [{ key: "createRenderer", value: function(t, e) { if (!t || !e) return this.defaultRenderer; switch (e.encapsulation) {
                                    case we.Emulated:
                                        var n = this.rendererByCompId.get(e.id); return n || (n = new Tl(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
                                    case we.Native:
                                    case we.ShadowDom:
                                        return new Al(this.eventManager, this.sharedStylesHost, t, e);
                                    default:
                                        if (!this.rendererByCompId.has(e.id)) { var r = _l(e.id, e.styles, []);
                                            this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(e.id, this.defaultRenderer) } return this.defaultRenderer } } }, { key: "begin", value: function() {} }, { key: "end", value: function() {} }]), t }()).\u0275fac = function(t) { return new(t || wl)(ae(dl), ae(yl), ae(Ss)) }, wl.\u0275prov = bt({ token: wl, factory: wl.\u0275fac }), wl),
                    xl = function() {
                        function t(e) { v(this, t), this.eventManager = e, this.data = Object.create(null) } return y(t, [{ key: "destroy", value: function() {} }, { key: "createElement", value: function(t, e) { return e ? document.createElementNS(gl[e] || e, t) : document.createElement(t) } }, { key: "createComment", value: function(t) { return document.createComment(t) } }, { key: "createText", value: function(t) { return document.createTextNode(t) } }, { key: "appendChild", value: function(t, e) { t.appendChild(e) } }, { key: "insertBefore", value: function(t, e, n) { t && t.insertBefore(e, n) } }, { key: "removeChild", value: function(t, e) { t && t.removeChild(e) } }, { key: "selectRootElement", value: function(t, e) { var n = "string" == typeof t ? document.querySelector(t) : t; if (!n) throw new Error('The selector "'.concat(t, '" did not match any elements')); return e || (n.textContent = ""), n } }, { key: "parentNode", value: function(t) { return t.parentNode } }, { key: "nextSibling", value: function(t) { return t.nextSibling } }, { key: "setAttribute", value: function(t, e, n, r) { if (r) { e = r + ":" + e; var i = gl[r];
                                    i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n) } else t.setAttribute(e, n) } }, { key: "removeAttribute", value: function(t, e, n) { if (n) { var r = gl[n];
                                    r ? t.removeAttributeNS(r, e) : t.removeAttribute("".concat(n, ":").concat(e)) } else t.removeAttribute(e) } }, { key: "addClass", value: function(t, e) { t.classList.add(e) } }, { key: "removeClass", value: function(t, e) { t.classList.remove(e) } }, { key: "setStyle", value: function(t, e, n, r) { r & Ea.DashCase ? t.style.setProperty(e, n, r & Ea.Important ? "important" : "") : t.style[e] = n } }, { key: "removeStyle", value: function(t, e, n) { n & Ea.DashCase ? t.style.removeProperty(e) : t.style[e] = "" } }, { key: "setProperty", value: function(t, e, n) { t[e] = n } }, { key: "setValue", value: function(t, e) { t.nodeValue = e } }, { key: "listen", value: function(t, e, n) { return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, kl(n)) : this.eventManager.addEventListener(t, e, kl(n)) } }]), t }(),
                    Tl = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o) { var a;
                            v(this, n), (a = e.call(this, t)).component = i; var s, u = _l(o + "-" + i.id, i.styles, []); return r.addStyles(u), a.contentAttr = "_ngcontent-%COMP%".replace(ml, o + "-" + i.id), a.hostAttr = (s = o + "-" + i.id, "_nghost-%COMP%".replace(ml, s)), a } return y(n, [{ key: "applyToHost", value: function(t) { a(d(n.prototype), "setAttribute", this).call(this, t, this.hostAttr, "") } }, { key: "createElement", value: function(t, e) { var r = a(d(n.prototype), "createElement", this).call(this, t, e); return a(d(n.prototype), "setAttribute", this).call(this, r, this.contentAttr, ""), r } }]), n }(xl),
                    Al = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o) { var a;
                            v(this, n), (a = e.call(this, t)).sharedStylesHost = r, a.hostEl = i, a.component = o, a.shadowRoot = o.encapsulation === we.ShadowDom ? i.attachShadow({ mode: "open" }) : i.createShadowRoot(), a.sharedStylesHost.addHost(a.shadowRoot); for (var s = _l(o.id, o.styles, []), u = 0; u < s.length; u++) { var l = document.createElement("style");
                                l.textContent = s[u], a.shadowRoot.appendChild(l) } return a } return y(n, [{ key: "nodeOrShadowRoot", value: function(t) { return t === this.hostEl ? this.shadowRoot : t } }, { key: "destroy", value: function() { this.sharedStylesHost.removeHost(this.shadowRoot) } }, { key: "appendChild", value: function(t, e) { return a(d(n.prototype), "appendChild", this).call(this, this.nodeOrShadowRoot(t), e) } }, { key: "insertBefore", value: function(t, e, r) { return a(d(n.prototype), "insertBefore", this).call(this, this.nodeOrShadowRoot(t), e, r) } }, { key: "removeChild", value: function(t, e) { return a(d(n.prototype), "removeChild", this).call(this, this.nodeOrShadowRoot(t), e) } }, { key: "parentNode", value: function(t) { return this.nodeOrShadowRoot(a(d(n.prototype), "parentNode", this).call(this, this.nodeOrShadowRoot(t))) } }]), n }(xl),
                    Ol = ((bl = function(t) { s(n, t); var e = l(n);

                        function n(t) { return v(this, n), e.call(this, t) } return y(n, [{ key: "supports", value: function(t) { return !0 } }, { key: "addEventListener", value: function(t, e, n) { var r = this; return t.addEventListener(e, n, !1),
                                    function() { return r.removeEventListener(t, e, n) } } }, { key: "removeEventListener", value: function(t, e, n) { return t.removeEventListener(e, n) } }]), n }(vl)).\u0275fac = function(t) { return new(t || bl)(ae(ku)) }, bl.\u0275prov = bt({ token: bl, factory: bl.\u0275fac }), bl),
                    Pl = ["alt", "control", "meta", "shift"],
                    Rl = { "\b": "Backspace", "\t": "Tab", "\x7f": "Delete", "\x1b": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" },
                    Il = { A: "1", B: "2", C: "3", D: "4", E: "5", F: "6", G: "7", H: "8", I: "9", J: "*", K: "+", M: "-", N: ".", O: "/", "`": "0", "\x90": "NumLock" },
                    Dl = { alt: function(t) { return t.altKey }, control: function(t) { return t.ctrlKey }, meta: function(t) { return t.metaKey }, shift: function(t) { return t.shiftKey } },
                    Nl = ((Sl = function(t) { s(n, t); var e = l(n);

                        function n(t) { return v(this, n), e.call(this, t) } return y(n, [{ key: "supports", value: function(t) { return null != n.parseEventName(t) } }, { key: "addEventListener", value: function(t, e, r) { var i = n.parseEventName(e),
                                    o = n.eventCallback(i.fullKey, r, this.manager.getZone()); return this.manager.getZone().runOutsideAngular((function() { return mu().onAndCancel(t, i.domEventName, o) })) } }], [{ key: "parseEventName", value: function(t) { var e = t.toLowerCase().split("."),
                                    r = e.shift(); if (0 === e.length || "keydown" !== r && "keyup" !== r) return null; var i = n._normalizeKey(e.pop()),
                                    o = ""; if (Pl.forEach((function(t) { var n = e.indexOf(t);
                                        n > -1 && (e.splice(n, 1), o += t + ".") })), o += i, 0 != e.length || 0 === i.length) return null; var a = {}; return a.domEventName = r, a.fullKey = o, a } }, { key: "getEventFullKey", value: function(t) { var e = "",
                                    n = function(t) { var e = t.key; if (null == e) { if (null == (e = t.keyIdentifier)) return "Unidentified";
                                            e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && Il.hasOwnProperty(e) && (e = Il[e])) } return Rl[e] || e }(t); return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), Pl.forEach((function(r) { r != n && (0, Dl[r])(t) && (e += r + ".") })), e += n } }, { key: "eventCallback", value: function(t, e, r) { return function(i) { n.getEventFullKey(i) === t && r.runGuarded((function() { return e(i) })) } } }, { key: "_normalizeKey", value: function(t) { switch (t) {
                                    case "esc":
                                        return "escape";
                                    default:
                                        return t } } }]), n }(vl)).\u0275fac = function(t) { return new(t || Sl)(ae(ku)) }, Sl.\u0275prov = bt({ token: Sl, factory: Sl.\u0275fac }), Sl),
                    jl = nu(vu, "browser", [{ provide: Ts, useValue: "browser" }, { provide: xs, useValue: function() { sl.makeCurrent(), hl.init() }, multi: !0 }, { provide: ku, useFactory: function() { return function(t) { Qe = t }(document), document }, deps: [] }]),
                    Fl = [
                        [], { provide: go, useValue: "root" }, { provide: _r, useFactory: function() { return new _r }, deps: [] }, { provide: fl, useClass: Ol, multi: !0, deps: [ku, Us, Ts] }, { provide: fl, useClass: Nl, multi: !0, deps: [ku] },
                        [], { provide: El, useClass: El, deps: [dl, yl, Ss] }, { provide: Ca, useExisting: El }, { provide: pl, useExisting: yl }, { provide: yl, useClass: yl, deps: [ku] }, { provide: Xs, useClass: Xs, deps: [Us] }, { provide: dl, useClass: dl, deps: [fl, Us] },
                        []
                    ],
                    Ll = ((Cl = function() {
                        function t(e) { if (v(this, t), e) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.") } return y(t, null, [{ key: "withServerTransition", value: function(e) { return { ngModule: t, providers: [{ provide: Ss, useValue: e.appId }, { provide: ll, useExisting: Ss }, cl] } } }]), t }()).\u0275mod = Oe({ type: Cl }), Cl.\u0275inj = St({ factory: function(t) { return new(t || Cl)(ae(Cl, 12)) }, providers: Fl, imports: [Ju, yu] }), Cl);

                function Ml() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = e[e.length - 1]; return B(r) ? (e.pop(), $(e, r)) : it(e) } "undefined" != typeof window && window; var Hl = function(t) { s(n, t); var e = l(n);

                        function n(t) { var r; return v(this, n), (r = e.call(this))._value = t, r } return y(n, [{ key: "value", get: function() { return this.getValue() } }, { key: "_subscribe", value: function(t) { var e = a(d(n.prototype), "_subscribe", this).call(this, t); return e && !e.closed && t.next(this._value), e } }, { key: "getValue", value: function() { if (this.hasError) throw this.thrownError; if (this.closed) throw new j; return this._value } }, { key: "next", value: function(t) { a(d(n.prototype), "next", this).call(this, this._value = t) } }]), n }(M),
                    Bl = function() {
                        function t() { return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this } return t.prototype = Object.create(Error.prototype), t }(),
                    Vl = {},
                    Ul = function() {
                        function t(e) { v(this, t), this.resultSelector = e } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new zl(t, this.resultSelector)) } }]), t }(),
                    zl = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, t)).resultSelector = r, i.active = 0, i.values = [], i.observables = [], i } return y(n, [{ key: "_next", value: function(t) { this.values.push(Vl), this.observables.push(t) } }, { key: "_complete", value: function() { var t = this.observables,
                                    e = t.length; if (0 === e) this.destination.complete();
                                else { this.active = e, this.toRespond = e; for (var n = 0; n < e; n++) { var r = t[n];
                                        this.add(Z(this, r, r, n)) } } } }, { key: "notifyComplete", value: function(t) { 0 == (this.active -= 1) && this.destination.complete() } }, { key: "notifyNext", value: function(t, e, n, r, i) { var o = this.values,
                                    a = this.toRespond ? o[n] === Vl ? --this.toRespond : this.toRespond : 0;
                                o[n] = e, 0 === a && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice())) } }, { key: "_tryResultSelector", value: function(t) { var e; try { e = this.resultSelector.apply(this, t) } catch (n) { return void this.destination.error(n) }
                                this.destination.next(e) } }]), n }(K),
                    ql = new I((function(t) { return t.complete() }));

                function Wl(t) { return t ? function(t) { return new I((function(e) { return t.schedule((function() { return e.complete() })) })) }(t) : ql }

                function Ql(t) { return new I((function(e) { var n; try { n = t() } catch (r) { return void e.error(r) } return (n ? J(n) : Wl()).subscribe(e) })) }

                function Zl() { return rt(1) }

                function Kl(t, e) { return function(n) { return n.lift(new Gl(t, e)) } } var Gl = function() {
                        function t(e, n) { v(this, t), this.predicate = e, this.thisArg = n } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new Yl(t, this.predicate, this.thisArg)) } }]), t }(),
                    Yl = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i) { var o; return v(this, n), (o = e.call(this, t)).predicate = r, o.thisArg = i, o.count = 0, o } return y(n, [{ key: "_next", value: function(t) { var e; try { e = this.predicate.call(this.thisArg, t, this.count++) } catch (n) { return void this.destination.error(n) }
                                e && this.destination.next(t) } }]), n }(T),
                    Xl = function() {
                        function t() { return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this } return t.prototype = Object.create(Error.prototype), t }();

                function $l(t) { return function(e) { return 0 === t ? Wl() : e.lift(new Jl(t)) } } var Jl = function() {
                        function t(e) { if (v(this, t), this.total = e, this.total < 0) throw new Xl } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new tc(t, this.total)) } }]), t }(),
                    tc = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, t)).total = r, i.ring = new Array, i.count = 0, i } return y(n, [{ key: "_next", value: function(t) { var e = this.ring,
                                    n = this.total,
                                    r = this.count++;
                                e.length < n ? e.push(t) : e[r % n] = t } }, { key: "_complete", value: function() { var t = this.destination,
                                    e = this.count; if (e > 0)
                                    for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; i < n; i++) { var o = e++ % n;
                                        t.next(r[o]) }
                                t.complete() } }]), n }(T);

                function ec() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ic; return function(e) { return e.lift(new nc(t)) } } var nc = function() {
                        function t(e) { v(this, t), this.errorFactory = e } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new rc(t, this.errorFactory)) } }]), t }(),
                    rc = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, t)).errorFactory = r, i.hasValue = !1, i } return y(n, [{ key: "_next", value: function(t) { this.hasValue = !0, this.destination.next(t) } }, { key: "_complete", value: function() { if (this.hasValue) return this.destination.complete(); var t; try { t = this.errorFactory() } catch (e) { t = e }
                                this.destination.error(t) } }]), n }(T);

                function ic() { return new Bl }

                function oc() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; return function(e) { return e.lift(new ac(t)) } } var ac = function() {
                        function t(e) { v(this, t), this.defaultValue = e } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new sc(t, this.defaultValue)) } }]), t }(),
                    sc = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, t)).defaultValue = r, i.isEmpty = !0, i } return y(n, [{ key: "_next", value: function(t) { this.isEmpty = !1, this.destination.next(t) } }, { key: "_complete", value: function() { this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete() } }]), n }(T);

                function uc(t) { return function(e) { var n = new lc(t),
                            r = e.lift(n); return n.caught = r } } var lc = function() {
                        function t(e) { v(this, t), this.selector = e } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new cc(t, this.selector, this.caught)) } }]), t }(),
                    cc = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i) { var o; return v(this, n), (o = e.call(this, t)).selector = r, o.caught = i, o } return y(n, [{ key: "error", value: function(t) { if (!this.isStopped) { var e; try { e = this.selector(t, this.caught) } catch (o) { return void a(d(n.prototype), "error", this).call(this, o) }
                                    this._unsubscribeAndRecycle(); var r = new V(this, void 0, void 0);
                                    this.add(r); var i = Z(this, e, void 0, void 0, r);
                                    i !== r && this.add(i) } } }]), n }(K);

                function hc(t) { return function(e) { return 0 === t ? Wl() : e.lift(new fc(t)) } } var fc = function() {
                        function t(e) { if (v(this, t), this.total = e, this.total < 0) throw new Xl } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new dc(t, this.total)) } }]), t }(),
                    dc = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, t)).total = r, i.count = 0, i } return y(n, [{ key: "_next", value: function(t) { var e = this.total,
                                    n = ++this.count;
                                n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe())) } }]), n }(T);

                function vc(t, e) { var n = arguments.length >= 2; return function(r) { return r.pipe(t ? Kl((function(e, n) { return t(e, n, r) })) : P, hc(1), n ? oc(e) : ec((function() { return new Bl }))) } }

                function pc() {}

                function yc(t, e, n) { return function(r) { return r.lift(new gc(t, e, n)) } } var gc = function() {
                        function t(e, n, r) { v(this, t), this.nextOrObserver = e, this.error = n, this.complete = r } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new mc(t, this.nextOrObserver, this.error, this.complete)) } }]), t }(),
                    mc = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o) { var a; return v(this, n), (a = e.call(this, t))._tapNext = pc, a._tapError = pc, a._tapComplete = pc, a._tapError = i || pc, a._tapComplete = o || pc, f(r) ? (a._context = h(a), a._tapNext = r) : r && (a._context = r, a._tapNext = r.next || pc, a._tapError = r.error || pc, a._tapComplete = r.complete || pc), a } return y(n, [{ key: "_next", value: function(t) { try { this._tapNext.call(this._context, t) } catch (e) { return void this.destination.error(e) }
                                this.destination.next(t) } }, { key: "_error", value: function(t) { try { this._tapError.call(this._context, t) } catch (t) { return void this.destination.error(t) }
                                this.destination.error(t) } }, { key: "_complete", value: function() { try { this._tapComplete.call(this._context) } catch (t) { return void this.destination.error(t) } return this.destination.complete() } }]), n }(T),
                    _c = function() {
                        function t(e, n, r) { v(this, t), this.predicate = e, this.thisArg = n, this.source = r } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new kc(t, this.predicate, this.thisArg, this.source)) } }]), t }(),
                    kc = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o) { var a; return v(this, n), (a = e.call(this, t)).predicate = r, a.thisArg = i, a.source = o, a.index = 0, a.thisArg = i || h(a), a } return y(n, [{ key: "notifyComplete", value: function(t) { this.destination.next(t), this.destination.complete() } }, { key: "_next", value: function(t) { var e = !1; try { e = this.predicate.call(this.thisArg, t, this.index++, this.source) } catch (n) { return void this.destination.error(n) }
                                e || this.notifyComplete(!1) } }, { key: "_complete", value: function() { this.notifyComplete(!0) } }]), n }(T);

                function wc(t, e) { return "function" == typeof e ? function(n) { return n.pipe(wc((function(n, r) { return J(t(n, r)).pipe(G((function(t, i) { return e(n, t, r, i) }))) }))) } : function(e) { return e.lift(new bc(t)) } } var bc = function() {
                        function t(e) { v(this, t), this.project = e } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new Sc(t, this.project)) } }]), t }(),
                    Sc = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, t)).project = r, i.index = 0, i } return y(n, [{ key: "_next", value: function(t) { var e, n = this.index++; try { e = this.project(t, n) } catch (r) { return void this.destination.error(r) }
                                this._innerSub(e, t, n) } }, { key: "_innerSub", value: function(t, e, n) { var r = this.innerSubscription;
                                r && r.unsubscribe(); var i = new V(this, e, n),
                                    o = this.destination;
                                o.add(i), this.innerSubscription = Z(this, t, void 0, void 0, i), this.innerSubscription !== i && o.add(this.innerSubscription) } }, { key: "_complete", value: function() { var t = this.innerSubscription;
                                t && !t.closed || a(d(n.prototype), "_complete", this).call(this), this.unsubscribe() } }, { key: "_unsubscribe", value: function() { this.innerSubscription = null } }, { key: "notifyComplete", value: function(t) { this.destination.remove(t), this.innerSubscription = null, this.isStopped && a(d(n.prototype), "_complete", this).call(this) } }, { key: "notifyNext", value: function(t, e, n, r, i) { this.destination.next(e) } }]), n }(K);

                function Cc() { return Zl()(Ml.apply(void 0, arguments)) }

                function Ec() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = e[e.length - 1]; return B(r) ? (e.pop(), function(t) { return Cc(e, t, r) }) : function(t) { return Cc(e, t) } } var xc = function() {
                        function t(e, n) { var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            v(this, t), this.accumulator = e, this.seed = n, this.hasSeed = r } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new Tc(t, this.accumulator, this.seed, this.hasSeed)) } }]), t }(),
                    Tc = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o) { var a; return v(this, n), (a = e.call(this, t)).accumulator = r, a._seed = i, a.hasSeed = o, a.index = 0, a } return y(n, [{ key: "seed", get: function() { return this._seed }, set: function(t) { this.hasSeed = !0, this._seed = t } }, { key: "_next", value: function(t) { if (this.hasSeed) return this._tryNext(t);
                                this.seed = t, this.destination.next(t) } }, { key: "_tryNext", value: function(t) { var e, n = this.index++; try { e = this.accumulator(this.seed, t, n) } catch (r) { this.destination.error(r) }
                                this.seed = e, this.destination.next(e) } }]), n }(T);

                function Ac(t, e) { return tt(t, e, 1) } var Oc = function() {
                        function t(e) { v(this, t), this.callback = e } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new Pc(t, this.callback)) } }]), t }(),
                    Pc = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, t)).add(new C(r)), i } return n }(T),
                    Rc = function t(e, n) { v(this, t), this.id = e, this.url = n },
                    Ic = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "imperative",
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null; return v(this, n), (i = e.call(this, t, r)).navigationTrigger = o, i.restoredState = a, i } return y(n, [{ key: "toString", value: function() { return "NavigationStart(id: ".concat(this.id, ", url: '").concat(this.url, "')") } }]), n }(Rc),
                    Dc = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i) { var o; return v(this, n), (o = e.call(this, t, r)).urlAfterRedirects = i, o } return y(n, [{ key: "toString", value: function() { return "NavigationEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "')") } }]), n }(Rc),
                    Nc = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i) { var o; return v(this, n), (o = e.call(this, t, r)).reason = i, o } return y(n, [{ key: "toString", value: function() { return "NavigationCancel(id: ".concat(this.id, ", url: '").concat(this.url, "')") } }]), n }(Rc),
                    jc = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i) { var o; return v(this, n), (o = e.call(this, t, r)).error = i, o } return y(n, [{ key: "toString", value: function() { return "NavigationError(id: ".concat(this.id, ", url: '").concat(this.url, "', error: ").concat(this.error, ")") } }]), n }(Rc),
                    Fc = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o) { var a; return v(this, n), (a = e.call(this, t, r)).urlAfterRedirects = i, a.state = o, a } return y(n, [{ key: "toString", value: function() { return "RoutesRecognized(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")") } }]), n }(Rc),
                    Lc = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o) { var a; return v(this, n), (a = e.call(this, t, r)).urlAfterRedirects = i, a.state = o, a } return y(n, [{ key: "toString", value: function() { return "GuardsCheckStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")") } }]), n }(Rc),
                    Mc = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o, a) { var s; return v(this, n), (s = e.call(this, t, r)).urlAfterRedirects = i, s.state = o, s.shouldActivate = a, s } return y(n, [{ key: "toString", value: function() { return "GuardsCheckEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ", shouldActivate: ").concat(this.shouldActivate, ")") } }]), n }(Rc),
                    Hc = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o) { var a; return v(this, n), (a = e.call(this, t, r)).urlAfterRedirects = i, a.state = o, a } return y(n, [{ key: "toString", value: function() { return "ResolveStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")") } }]), n }(Rc),
                    Bc = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o) { var a; return v(this, n), (a = e.call(this, t, r)).urlAfterRedirects = i, a.state = o, a } return y(n, [{ key: "toString", value: function() { return "ResolveEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")") } }]), n }(Rc),
                    Vc = function() {
                        function t(e) { v(this, t), this.route = e } return y(t, [{ key: "toString", value: function() { return "RouteConfigLoadStart(path: ".concat(this.route.path, ")") } }]), t }(),
                    Uc = function() {
                        function t(e) { v(this, t), this.route = e } return y(t, [{ key: "toString", value: function() { return "RouteConfigLoadEnd(path: ".concat(this.route.path, ")") } }]), t }(),
                    zc = function() {
                        function t(e) { v(this, t), this.snapshot = e } return y(t, [{ key: "toString", value: function() { return "ChildActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')") } }]), t }(),
                    qc = function() {
                        function t(e) { v(this, t), this.snapshot = e } return y(t, [{ key: "toString", value: function() { return "ChildActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')") } }]), t }(),
                    Wc = function() {
                        function t(e) { v(this, t), this.snapshot = e } return y(t, [{ key: "toString", value: function() { return "ActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')") } }]), t }(),
                    Qc = function() {
                        function t(e) { v(this, t), this.snapshot = e } return y(t, [{ key: "toString", value: function() { return "ActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')") } }]), t }(),
                    Zc = function() {
                        function t(e, n, r) { v(this, t), this.routerEvent = e, this.position = n, this.anchor = r } return y(t, [{ key: "toString", value: function() { return "Scroll(anchor: '".concat(this.anchor, "', position: '").concat(this.position ? "".concat(this.position[0], ", ").concat(this.position[1]) : null, "')") } }]), t }(),
                    Kc = function() {
                        function t(e) { v(this, t), this.params = e || {} } return y(t, [{ key: "has", value: function(t) { return Object.prototype.hasOwnProperty.call(this.params, t) } }, { key: "get", value: function(t) { if (this.has(t)) { var e = this.params[t]; return Array.isArray(e) ? e[0] : e } return null } }, { key: "getAll", value: function(t) { if (this.has(t)) { var e = this.params[t]; return Array.isArray(e) ? e : [e] } return [] } }, { key: "keys", get: function() { return Object.keys(this.params) } }]), t }();

                function Gc(t) { return new Kc(t) }

                function Yc(t) { var e = Error("NavigationCancelingError: " + t); return e.ngNavigationCancelingError = !0, e }

                function Xc(t, e, n) { var r = n.path.split("/"); if (r.length > t.length) return null; if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null; for (var i = {}, o = 0; o < r.length; o++) { var a = r[o],
                            s = t[o]; if (a.startsWith(":")) i[a.substring(1)] = s;
                        else if (a !== s.path) return null } return { consumed: t.slice(0, r.length), posParams: i } }

                function $c(t, e) { var n, r = Object.keys(t),
                        i = Object.keys(e); if (!r || !i || r.length != i.length) return !1; for (var o = 0; o < r.length; o++)
                        if (!Jc(t[n = r[o]], e[n])) return !1;
                    return !0 }

                function Jc(t, e) { return Array.isArray(t) && Array.isArray(e) ? t.length == e.length && t.every((function(t) { return e.indexOf(t) > -1 })) : t === e }

                function th(t) { return Array.prototype.concat.apply([], t) }

                function eh(t) { return t.length > 0 ? t[t.length - 1] : null }

                function nh(t, e) { for (var n in t) t.hasOwnProperty(n) && e(t[n], n) }

                function rh(t) { return (e = t) && "function" == typeof e.subscribe ? t : Qo(t) ? J(Promise.resolve(t)) : Ml(t); var e }

                function ih(t, e, n) { return n ? function(t, e) { return $c(t, e) }(t.queryParams, e.queryParams) && function t(e, n) { if (!uh(e.segments, n.segments)) return !1; if (e.numberOfChildren !== n.numberOfChildren) return !1; for (var r in n.children) { if (!e.children[r]) return !1; if (!t(e.children[r], n.children[r])) return !1 } return !0 }(t.root, e.root) : function(t, e) { return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every((function(n) { return Jc(t[n], e[n]) })) }(t.queryParams, e.queryParams) && function t(e, n) { return function e(n, r, i) { if (n.segments.length > i.length) return !!uh(n.segments.slice(0, i.length), i) && !r.hasChildren(); if (n.segments.length === i.length) { if (!uh(n.segments, i)) return !1; for (var o in r.children) { if (!n.children[o]) return !1; if (!t(n.children[o], r.children[o])) return !1 } return !0 } var a = i.slice(0, n.segments.length),
                                s = i.slice(n.segments.length); return !!uh(n.segments, a) && !!n.children.primary && e(n.children.primary, r, s) }(e, n, n.segments) }(t.root, e.root) } var oh = function() {
                        function t(e, n, r) { v(this, t), this.root = e, this.queryParams = n, this.fragment = r } return y(t, [{ key: "queryParamMap", get: function() { return this._queryParamMap || (this._queryParamMap = Gc(this.queryParams)), this._queryParamMap } }, { key: "toString", value: function() { return fh.serialize(this) } }]), t }(),
                    ah = function() {
                        function t(e, n) { var r = this;
                            v(this, t), this.segments = e, this.children = n, this.parent = null, nh(n, (function(t, e) { return t.parent = r })) } return y(t, [{ key: "hasChildren", value: function() { return this.numberOfChildren > 0 } }, { key: "numberOfChildren", get: function() { return Object.keys(this.children).length } }, { key: "toString", value: function() { return dh(this) } }]), t }(),
                    sh = function() {
                        function t(e, n) { v(this, t), this.path = e, this.parameters = n } return y(t, [{ key: "parameterMap", get: function() { return this._parameterMap || (this._parameterMap = Gc(this.parameters)), this._parameterMap } }, { key: "toString", value: function() { return _h(this) } }]), t }();

                function uh(t, e) { return t.length === e.length && t.every((function(t, n) { return t.path === e[n].path })) }

                function lh(t, e) { var n = []; return nh(t.children, (function(t, r) { "primary" === r && (n = n.concat(e(t, r))) })), nh(t.children, (function(t, r) { "primary" !== r && (n = n.concat(e(t, r))) })), n } var ch = function t() { v(this, t) },
                    hh = function() {
                        function t() { v(this, t) } return y(t, [{ key: "parse", value: function(t) { var e = new Ch(t); return new oh(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment()) } }, { key: "serialize", value: function(t) { return "".concat("/" + function t(e, n) { if (!e.hasChildren()) return dh(e); if (n) { var r = e.children.primary ? t(e.children.primary, !1) : "",
                                            i = []; return nh(e.children, (function(e, n) { "primary" !== n && i.push("".concat(n, ":").concat(t(e, !1))) })), i.length > 0 ? "".concat(r, "(").concat(i.join("//"), ")") : r } var o = lh(e, (function(n, r) { return "primary" === r ? [t(e.children.primary, !1)] : ["".concat(r, ":").concat(t(n, !1))] })); return "".concat(dh(e), "/(").concat(o.join("//"), ")") }(t.root, !0)).concat((e = t.queryParams, n = Object.keys(e).map((function(t) { var n = e[t]; return Array.isArray(n) ? n.map((function(e) { return "".concat(ph(t), "=").concat(ph(e)) })).join("&") : "".concat(ph(t), "=").concat(ph(n)) })), n.length ? "?" + n.join("&") : "")).concat("string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : ""); var e, n } }]), t }(),
                    fh = new hh;

                function dh(t) { return t.segments.map((function(t) { return _h(t) })).join("/") }

                function vh(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",") }

                function ph(t) { return vh(t).replace(/%3B/gi, ";") }

                function yh(t) { return vh(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&") }

                function gh(t) { return decodeURIComponent(t) }

                function mh(t) { return gh(t.replace(/\+/g, "%20")) }

                function _h(t) { return "".concat(yh(t.path)).concat((e = t.parameters, Object.keys(e).map((function(t) { return ";".concat(yh(t), "=").concat(yh(e[t])) })).join(""))); var e } var kh = /^[^\/()?;=#]+/;

                function wh(t) { var e = t.match(kh); return e ? e[0] : "" } var bh = /^[^=?&#]+/,
                    Sh = /^[^?&#]+/,
                    Ch = function() {
                        function t(e) { v(this, t), this.url = e, this.remaining = e } return y(t, [{ key: "parseRootSegment", value: function() { return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new ah([], {}) : new ah([], this.parseChildren()) } }, { key: "parseQueryParams", value: function() { var t = {}; if (this.consumeOptional("?"))
                                    do { this.parseQueryParam(t) } while (this.consumeOptional("&")); return t } }, { key: "parseFragment", value: function() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null } }, { key: "parseChildren", value: function() { if ("" === this.remaining) return {};
                                this.consumeOptional("/"); var t = []; for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment()); var e = {};
                                this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0)); var n = {}; return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new ah(t, e)), n } }, { key: "parseSegment", value: function() { var t = wh(this.remaining); if ("" === t && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '".concat(this.remaining, "'.")); return this.capture(t), new sh(gh(t), this.parseMatrixParams()) } }, { key: "parseMatrixParams", value: function() { for (var t = {}; this.consumeOptional(";");) this.parseParam(t); return t } }, { key: "parseParam", value: function(t) { var e = wh(this.remaining); if (e) { this.capture(e); var n = ""; if (this.consumeOptional("=")) { var r = wh(this.remaining);
                                        r && (n = r, this.capture(n)) }
                                    t[gh(e)] = gh(n) } } }, { key: "parseQueryParam", value: function(t) { var e = function(t) { var e = t.match(bh); return e ? e[0] : "" }(this.remaining); if (e) { this.capture(e); var n = ""; if (this.consumeOptional("=")) { var r = function(t) { var e = t.match(Sh); return e ? e[0] : "" }(this.remaining);
                                        r && (n = r, this.capture(n)) } var i = mh(e),
                                        o = mh(n); if (t.hasOwnProperty(i)) { var a = t[i];
                                        Array.isArray(a) || (a = [a], t[i] = a), a.push(o) } else t[i] = o } } }, { key: "parseParens", value: function(t) { var e = {}; for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) { var n = wh(this.remaining),
                                        r = this.remaining[n.length]; if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '".concat(this.url, "'")); var i = void 0;
                                    n.indexOf(":") > -1 ? (i = n.substr(0, n.indexOf(":")), this.capture(i), this.capture(":")) : t && (i = "primary"); var o = this.parseChildren();
                                    e[i] = 1 === Object.keys(o).length ? o.primary : new ah([], o), this.consumeOptional("//") } return e } }, { key: "peekStartsWith", value: function(t) { return this.remaining.startsWith(t) } }, { key: "consumeOptional", value: function(t) { return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0) } }, { key: "capture", value: function(t) { if (!this.consumeOptional(t)) throw new Error('Expected "'.concat(t, '".')) } }]), t }(),
                    Eh = function() {
                        function t(e) { v(this, t), this._root = e } return y(t, [{ key: "root", get: function() { return this._root.value } }, { key: "parent", value: function(t) { var e = this.pathFromRoot(t); return e.length > 1 ? e[e.length - 2] : null } }, { key: "children", value: function(t) { var e = xh(t, this._root); return e ? e.children.map((function(t) { return t.value })) : [] } }, { key: "firstChild", value: function(t) { var e = xh(t, this._root); return e && e.children.length > 0 ? e.children[0].value : null } }, { key: "siblings", value: function(t) { var e = Th(t, this._root); return e.length < 2 ? [] : e[e.length - 2].children.map((function(t) { return t.value })).filter((function(e) { return e !== t })) } }, { key: "pathFromRoot", value: function(t) { return Th(t, this._root).map((function(t) { return t.value })) } }]), t }();

                function xh(t, n) { if (t === n.value) return n; var r, i = e(n.children); try { for (i.s(); !(r = i.n()).done;) { var o = xh(t, r.value); if (o) return o } } catch (a) { i.e(a) } finally { i.f() } return null }

                function Th(t, n) { if (t === n.value) return [n]; var r, i = e(n.children); try { for (i.s(); !(r = i.n()).done;) { var o = Th(t, r.value); if (o.length) return o.unshift(n), o } } catch (a) { i.e(a) } finally { i.f() } return [] } var Ah = function() {
                    function t(e, n) { v(this, t), this.value = e, this.children = n } return y(t, [{ key: "toString", value: function() { return "TreeNode(".concat(this.value, ")") } }]), t }();

                function Oh(t) { var e = {}; return t && t.children.forEach((function(t) { return e[t.value.outlet] = t })), e } var Ph = function(t) { s(n, t); var e = l(n);

                    function n(t, r) { var i; return v(this, n), (i = e.call(this, t)).snapshot = r, Fh(h(i), t), i } return y(n, [{ key: "toString", value: function() { return this.snapshot.toString() } }]), n }(Eh);

                function Rh(t, e) { var n = function(t, e) { var n = new Nh([], {}, {}, "", {}, "primary", e, null, t.root, -1, {}); return new jh("", new Ah(n, [])) }(t, e),
                        r = new Hl([new sh("", {})]),
                        i = new Hl({}),
                        o = new Hl({}),
                        a = new Hl({}),
                        s = new Hl(""),
                        u = new Ih(r, i, a, s, o, "primary", e, n.root); return u.snapshot = n.root, new Ph(new Ah(u, []), n) } var Ih = function() {
                    function t(e, n, r, i, o, a, s, u) { v(this, t), this.url = e, this.params = n, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = a, this.component = s, this._futureSnapshot = u } return y(t, [{ key: "routeConfig", get: function() { return this._futureSnapshot.routeConfig } }, { key: "root", get: function() { return this._routerState.root } }, { key: "parent", get: function() { return this._routerState.parent(this) } }, { key: "firstChild", get: function() { return this._routerState.firstChild(this) } }, { key: "children", get: function() { return this._routerState.children(this) } }, { key: "pathFromRoot", get: function() { return this._routerState.pathFromRoot(this) } }, { key: "paramMap", get: function() { return this._paramMap || (this._paramMap = this.params.pipe(G((function(t) { return Gc(t) })))), this._paramMap } }, { key: "queryParamMap", get: function() { return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(G((function(t) { return Gc(t) })))), this._queryParamMap } }, { key: "toString", value: function() { return this.snapshot ? this.snapshot.toString() : "Future(".concat(this._futureSnapshot, ")") } }]), t }();

                function Dh(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "emptyOnly",
                        n = t.pathFromRoot,
                        r = 0; if ("always" !== e)
                        for (r = n.length - 1; r >= 1;) { var i = n[r],
                                o = n[r - 1]; if (i.routeConfig && "" === i.routeConfig.path) r--;
                            else { if (o.component) break;
                                r-- } }
                    return function(t) { return t.reduce((function(t, e) { return { params: Object.assign(Object.assign({}, t.params), e.params), data: Object.assign(Object.assign({}, t.data), e.data), resolve: Object.assign(Object.assign({}, t.resolve), e._resolvedData) } }), { params: {}, data: {}, resolve: {} }) }(n.slice(r)) } var Nh = function() {
                        function t(e, n, r, i, o, a, s, u, l, c, h) { v(this, t), this.url = e, this.params = n, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = a, this.component = s, this.routeConfig = u, this._urlSegment = l, this._lastPathIndex = c, this._resolve = h } return y(t, [{ key: "root", get: function() { return this._routerState.root } }, { key: "parent", get: function() { return this._routerState.parent(this) } }, { key: "firstChild", get: function() { return this._routerState.firstChild(this) } }, { key: "children", get: function() { return this._routerState.children(this) } }, { key: "pathFromRoot", get: function() { return this._routerState.pathFromRoot(this) } }, { key: "paramMap", get: function() { return this._paramMap || (this._paramMap = Gc(this.params)), this._paramMap } }, { key: "queryParamMap", get: function() { return this._queryParamMap || (this._queryParamMap = Gc(this.queryParams)), this._queryParamMap } }, { key: "toString", value: function() { return "Route(url:'".concat(this.url.map((function(t) { return t.toString() })).join("/"), "', path:'").concat(this.routeConfig ? this.routeConfig.path : "", "')") } }]), t }(),
                    jh = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, r)).url = t, Fh(h(i), r), i } return y(n, [{ key: "toString", value: function() { return Lh(this._root) } }]), n }(Eh);

                function Fh(t, e) { e.value._routerState = t, e.children.forEach((function(e) { return Fh(t, e) })) }

                function Lh(t) { var e = t.children.length > 0 ? " { ".concat(t.children.map(Lh).join(", "), " } ") : ""; return "".concat(t.value).concat(e) }

                function Mh(t) { if (t.snapshot) { var e = t.snapshot,
                            n = t._futureSnapshot;
                        t.snapshot = n, $c(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), $c(e.params, n.params) || t.params.next(n.params),
                            function(t, e) { if (t.length !== e.length) return !1; for (var n = 0; n < t.length; ++n)
                                    if (!$c(t[n], e[n])) return !1;
                                return !0 }(e.url, n.url) || t.url.next(n.url), $c(e.data, n.data) || t.data.next(n.data) } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data) }

                function Hh(t, e) { var n, r; return $c(t.params, e.params) && uh(n = t.url, r = e.url) && n.every((function(t, e) { return $c(t.parameters, r[e].parameters) })) && !(!t.parent != !e.parent) && (!t.parent || Hh(t.parent, e.parent)) }

                function Bh(t) { return "object" == typeof t && null != t && !t.outlets && !t.segmentPath }

                function Vh(t, e, n, r, i) { var o = {}; return r && nh(r, (function(t, e) { o[e] = Array.isArray(t) ? t.map((function(t) { return "" + t })) : "" + t })), new oh(n.root === t ? e : function t(e, n, r) { var i = {}; return nh(e.children, (function(e, o) { i[o] = e === n ? r : t(e, n, r) })), new ah(e.segments, i) }(n.root, t, e), o, i) } var Uh = function() {
                        function t(e, n, r) { if (v(this, t), this.isAbsolute = e, this.numberOfDoubleDots = n, this.commands = r, e && r.length > 0 && Bh(r[0])) throw new Error("Root segment cannot have matrix parameters"); var i = r.find((function(t) { return "object" == typeof t && null != t && t.outlets })); if (i && i !== eh(r)) throw new Error("{outlets:{}} has to be the last command") } return y(t, [{ key: "toRoot", value: function() { return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0] } }]), t }(),
                    zh = function t(e, n, r) { v(this, t), this.segmentGroup = e, this.processChildren = n, this.index = r };

                function qh(t) { return "object" == typeof t && null != t && t.outlets ? t.outlets.primary : "" + t }

                function Wh(t, e, n) { if (t || (t = new ah([], {})), 0 === t.segments.length && t.hasChildren()) return Qh(t, e, n); var r = function(t, e, n) { for (var r = 0, i = e, o = { match: !1, pathIndex: 0, commandIndex: 0 }; i < t.segments.length;) { if (r >= n.length) return o; var a = t.segments[i],
                                    s = qh(n[r]),
                                    u = r < n.length - 1 ? n[r + 1] : null; if (i > 0 && void 0 === s) break; if (s && u && "object" == typeof u && void 0 === u.outlets) { if (!Yh(s, u, a)) return o;
                                    r += 2 } else { if (!Yh(s, {}, a)) return o;
                                    r++ }
                                i++ } return { match: !0, pathIndex: i, commandIndex: r } }(t, e, n),
                        i = n.slice(r.commandIndex); if (r.match && r.pathIndex < t.segments.length) { var o = new ah(t.segments.slice(0, r.pathIndex), {}); return o.children.primary = new ah(t.segments.slice(r.pathIndex), t.children), Qh(o, 0, i) } return r.match && 0 === i.length ? new ah(t.segments, {}) : r.match && !t.hasChildren() ? Zh(t, e, n) : r.match ? Qh(t, 0, i) : Zh(t, e, n) }

                function Qh(t, e, n) { if (0 === n.length) return new ah(t.segments, {}); var r = function(t) { return "object" == typeof t[0] && null !== t[0] && t[0].outlets ? t[0].outlets : { primary: t } }(n),
                        i = {}; return nh(r, (function(n, r) { null !== n && (i[r] = Wh(t.children[r], e, n)) })), nh(t.children, (function(t, e) { void 0 === r[e] && (i[e] = t) })), new ah(t.segments, i) }

                function Zh(t, e, n) { for (var r = t.segments.slice(0, e), i = 0; i < n.length;) { if ("object" == typeof n[i] && null !== n[i] && void 0 !== n[i].outlets) { var o = Kh(n[i].outlets); return new ah(r, o) } if (0 === i && Bh(n[0])) r.push(new sh(t.segments[e].path, n[0])), i++;
                        else { var a = qh(n[i]),
                                s = i < n.length - 1 ? n[i + 1] : null;
                            a && s && Bh(s) ? (r.push(new sh(a, Gh(s))), i += 2) : (r.push(new sh(a, {})), i++) } } return new ah(r, {}) }

                function Kh(t) { var e = {}; return nh(t, (function(t, n) { null !== t && (e[n] = Zh(new ah([], {}), 0, t)) })), e }

                function Gh(t) { var e = {}; return nh(t, (function(t, n) { return e[n] = "" + t })), e }

                function Yh(t, e, n) { return t == n.path && $c(e, n.parameters) } var Xh = function() {
                    function t(e, n, r, i) { v(this, t), this.routeReuseStrategy = e, this.futureState = n, this.currState = r, this.forwardEvent = i } return y(t, [{ key: "activate", value: function(t) { var e = this.futureState._root,
                                n = this.currState ? this.currState._root : null;
                            this.deactivateChildRoutes(e, n, t), Mh(this.futureState.root), this.activateChildRoutes(e, n, t) } }, { key: "deactivateChildRoutes", value: function(t, e, n) { var r = this,
                                i = Oh(e);
                            t.children.forEach((function(t) { var e = t.value.outlet;
                                r.deactivateRoutes(t, i[e], n), delete i[e] })), nh(i, (function(t, e) { r.deactivateRouteAndItsChildren(t, n) })) } }, { key: "deactivateRoutes", value: function(t, e, n) { var r = t.value,
                                i = e ? e.value : null; if (r === i)
                                if (r.component) { var o = n.getContext(r.outlet);
                                    o && this.deactivateChildRoutes(t, e, o.children) } else this.deactivateChildRoutes(t, e, n);
                            else i && this.deactivateRouteAndItsChildren(e, n) } }, { key: "deactivateRouteAndItsChildren", value: function(t, e) { this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e) } }, { key: "detachAndStoreRouteSubtree", value: function(t, e) { var n = e.getContext(t.value.outlet); if (n && n.outlet) { var r = n.outlet.detach(),
                                    i = n.children.onOutletDeactivated();
                                this.routeReuseStrategy.store(t.value.snapshot, { componentRef: r, route: t, contexts: i }) } } }, { key: "deactivateRouteAndOutlet", value: function(t, e) { var n = this,
                                r = e.getContext(t.value.outlet); if (r) { var i = Oh(t),
                                    o = t.value.component ? r.children : e;
                                nh(i, (function(t, e) { return n.deactivateRouteAndItsChildren(t, o) })), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()) } } }, { key: "activateChildRoutes", value: function(t, e, n) { var r = this,
                                i = Oh(e);
                            t.children.forEach((function(t) { r.activateRoutes(t, i[t.value.outlet], n), r.forwardEvent(new Qc(t.value.snapshot)) })), t.children.length && this.forwardEvent(new qc(t.value.snapshot)) } }, { key: "activateRoutes", value: function(t, e, n) { var r = t.value,
                                i = e ? e.value : null; if (Mh(r), r === i)
                                if (r.component) { var o = n.getOrCreateContext(r.outlet);
                                    this.activateChildRoutes(t, e, o.children) } else this.activateChildRoutes(t, e, n);
                            else if (r.component) { var a = n.getOrCreateContext(r.outlet); if (this.routeReuseStrategy.shouldAttach(r.snapshot)) { var s = this.routeReuseStrategy.retrieve(r.snapshot);
                                    this.routeReuseStrategy.store(r.snapshot, null), a.children.onOutletReAttached(s.contexts), a.attachRef = s.componentRef, a.route = s.route.value, a.outlet && a.outlet.attach(s.componentRef, s.route.value), $h(s.route) } else { var u = function(t) { for (var e = t.parent; e; e = e.parent) { var n = e.routeConfig; if (n && n._loadedConfig) return n._loadedConfig; if (n && n.component) return null } return null }(r.snapshot),
                                        l = u ? u.module.componentFactoryResolver : null;
                                    a.attachRef = null, a.route = r, a.resolver = l, a.outlet && a.outlet.activateWith(r, l), this.activateChildRoutes(t, null, a.children) } } else this.activateChildRoutes(t, null, n) } }]), t }();

                function $h(t) { Mh(t.value), t.children.forEach($h) } var Jh = function t(e, n) { v(this, t), this.routes = e, this.module = n };

                function tf(t) { return "function" == typeof t }

                function ef(t) { return t instanceof oh } var nf = function t(e) { v(this, t), this.segmentGroup = e || null },
                    rf = function t(e) { v(this, t), this.urlTree = e };

                function of(t) { return new I((function(e) { return e.error(new nf(t)) })) }

                function af(t) { return new I((function(e) { return e.error(new rf(t)) })) }

                function sf(t) { return new I((function(e) { return e.error(new Error("Only absolute redirects can have named outlets. redirectTo: '".concat(t, "'"))) })) } var uf = function() {
                    function t(e, n, r, i, o) { v(this, t), this.configLoader = n, this.urlSerializer = r, this.urlTree = i, this.config = o, this.allowRedirects = !0, this.ngModule = e.get(he) } return y(t, [{ key: "apply", value: function() { var t = this; return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, "primary").pipe(G((function(e) { return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment) }))).pipe(uc((function(e) { if (e instanceof rf) return t.allowRedirects = !1, t.match(e.urlTree); if (e instanceof nf) throw t.noMatchError(e); throw e }))) } }, { key: "match", value: function(t) { var e = this; return this.expandSegmentGroup(this.ngModule, this.config, t.root, "primary").pipe(G((function(n) { return e.createUrlTree(n, t.queryParams, t.fragment) }))).pipe(uc((function(t) { if (t instanceof nf) throw e.noMatchError(t); throw t }))) } }, { key: "noMatchError", value: function(t) { return new Error("Cannot match any routes. URL Segment: '".concat(t.segmentGroup, "'")) } }, { key: "createUrlTree", value: function(t, e, n) { var r = t.segments.length > 0 ? new ah([], { primary: t }) : t; return new oh(r, e, n) } }, { key: "expandSegmentGroup", value: function(t, e, n, r) { return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(G((function(t) { return new ah([], t) }))) : this.expandSegment(t, n, e, n.segments, r, !0) } }, { key: "expandChildren", value: function(t, e, n) { var r = this; return function(n, i) { if (0 === Object.keys(n).length) return Ml({}); var o = [],
                                    a = [],
                                    s = {}; return nh(n, (function(n, i) { var u, l, c = (u = i, l = n, r.expandSegmentGroup(t, e, l, u)).pipe(G((function(t) { return s[i] = t }))); "primary" === i ? o.push(c) : a.push(c) })), Ml.apply(null, o.concat(a)).pipe(Zl(), function(t, e) { var n = arguments.length >= 2; return function(r) { return r.pipe(t ? Kl((function(e, n) { return t(e, n, r) })) : P, $l(1), n ? oc(e) : ec((function() { return new Bl }))) } }(), G((function() { return s }))) }(n.children) } }, { key: "expandSegment", value: function(t, e, r, i, o, a) { var s = this; return Ml.apply(void 0, n(r)).pipe(G((function(n) { return s.expandSegmentAgainstRoute(t, e, r, n, i, o, a).pipe(uc((function(t) { if (t instanceof nf) return Ml(null); throw t }))) })), Zl(), vc((function(t) { return !!t })), uc((function(t, n) { if (t instanceof Bl || "EmptyError" === t.name) { if (s.noLeftoversInUrl(e, i, o)) return Ml(new ah([], {})); throw new nf(e) } throw t }))) } }, { key: "noLeftoversInUrl", value: function(t, e, n) { return 0 === e.length && !t.children[n] } }, { key: "expandSegmentAgainstRoute", value: function(t, e, n, r, i, o, a) { return ff(r) !== o ? of(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, i) : a && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, i, o) : of(e) } }, { key: "expandSegmentAgainstRouteUsingRedirect", value: function(t, e, n, r, i, o) { return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, o) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, i, o) } }, { key: "expandWildCardWithParamsAgainstRouteUsingRedirect", value: function(t, e, n, r) { var i = this,
                                o = this.applyRedirectCommands([], n.redirectTo, {}); return n.redirectTo.startsWith("/") ? af(o) : this.lineralizeSegments(n, o).pipe(tt((function(n) { var o = new ah(n, {}); return i.expandSegment(t, o, e, n, r, !1) }))) } }, { key: "expandRegularSegmentAgainstRouteUsingRedirect", value: function(t, e, n, r, i, o) { var a = this,
                                s = lf(e, r, i),
                                u = s.matched,
                                l = s.consumedSegments,
                                c = s.lastChild,
                                h = s.positionalParamSegments; if (!u) return of(e); var f = this.applyRedirectCommands(l, r.redirectTo, h); return r.redirectTo.startsWith("/") ? af(f) : this.lineralizeSegments(r, f).pipe(tt((function(r) { return a.expandSegment(t, e, n, r.concat(i.slice(c)), o, !1) }))) } }, { key: "matchSegmentAgainstRoute", value: function(t, n, r, i) { var o = this; if ("**" === r.path) return r.loadChildren ? this.configLoader.load(t.injector, r).pipe(G((function(t) { return r._loadedConfig = t, new ah(i, {}) }))) : Ml(new ah(i, {})); var a = lf(n, r, i),
                                s = a.matched,
                                u = a.consumedSegments,
                                l = a.lastChild; if (!s) return of(n); var c = i.slice(l); return this.getChildConfig(t, r, i).pipe(tt((function(t) { var r = t.module,
                                    i = t.routes,
                                    a = function(t, n, r, i) { return r.length > 0 && function(t, e, n) { return n.some((function(n) { return hf(t, e, n) && "primary" !== ff(n) })) }(t, r, i) ? { segmentGroup: cf(new ah(n, function(t, n) { var r = {};
                                                r.primary = n; var i, o = e(t); try { for (o.s(); !(i = o.n()).done;) { var a = i.value; "" === a.path && "primary" !== ff(a) && (r[ff(a)] = new ah([], {})) } } catch (s) { o.e(s) } finally { o.f() } return r }(i, new ah(r, t.children)))), slicedSegments: [] } : 0 === r.length && function(t, e, n) { return n.some((function(n) { return hf(t, e, n) })) }(t, r, i) ? { segmentGroup: cf(new ah(t.segments, function(t, n, r, i) { var o, a = {},
                                                    s = e(r); try { for (s.s(); !(o = s.n()).done;) { var u = o.value;
                                                        hf(t, n, u) && !i[ff(u)] && (a[ff(u)] = new ah([], {})) } } catch (l) { s.e(l) } finally { s.f() } return Object.assign(Object.assign({}, i), a) }(t, r, i, t.children))), slicedSegments: r } : { segmentGroup: t, slicedSegments: r } }(n, u, c, i),
                                    s = a.segmentGroup,
                                    l = a.slicedSegments; return 0 === l.length && s.hasChildren() ? o.expandChildren(r, i, s).pipe(G((function(t) { return new ah(u, t) }))) : 0 === i.length && 0 === l.length ? Ml(new ah(u, {})) : o.expandSegment(r, s, i, l, "primary", !0).pipe(G((function(t) { return new ah(u.concat(t.segments), t.children) }))) }))) } }, { key: "getChildConfig", value: function(t, e, n) { var r = this; return e.children ? Ml(new Jh(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? Ml(e._loadedConfig) : this.runCanLoadGuards(t.injector, e, n).pipe(tt((function(n) { return n ? r.configLoader.load(t.injector, e).pipe(G((function(t) { return e._loadedConfig = t, t }))) : function(t) { return new I((function(e) { return e.error(Yc("Cannot load children because the guard of the route \"path: '".concat(t.path, "'\" returned false"))) })) }(e) }))) : Ml(new Jh([], t)) } }, { key: "runCanLoadGuards", value: function(t, e, n) { var r, i = this,
                                o = e.canLoad; return o && 0 !== o.length ? J(o).pipe(G((function(r) { var i, o = t.get(r); if (function(t) { return t && tf(t.canLoad) }(o)) i = o.canLoad(e, n);
                                else { if (!tf(o)) throw new Error("Invalid CanLoad guard");
                                    i = o(e, n) } return rh(i) }))).pipe(Zl(), yc((function(t) { if (ef(t)) { var e = Yc('Redirecting to "'.concat(i.urlSerializer.serialize(t), '"')); throw e.url = t, e } })), (r = function(t) { return !0 === t }, function(t) { return t.lift(new _c(r, void 0, t)) })) : Ml(!0) } }, { key: "lineralizeSegments", value: function(t, e) { for (var n = [], r = e.root;;) { if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Ml(n); if (r.numberOfChildren > 1 || !r.children.primary) return sf(t.redirectTo);
                                r = r.children.primary } } }, { key: "applyRedirectCommands", value: function(t, e, n) { return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n) } }, { key: "applyRedirectCreatreUrlTree", value: function(t, e, n, r) { var i = this.createSegmentGroup(t, e.root, n, r); return new oh(i, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment) } }, { key: "createQueryParams", value: function(t, e) { var n = {}; return nh(t, (function(t, r) { if ("string" == typeof t && t.startsWith(":")) { var i = t.substring(1);
                                    n[r] = e[i] } else n[r] = t })), n } }, { key: "createSegmentGroup", value: function(t, e, n, r) { var i = this,
                                o = this.createSegments(t, e.segments, n, r),
                                a = {}; return nh(e.children, (function(e, o) { a[o] = i.createSegmentGroup(t, e, n, r) })), new ah(o, a) } }, { key: "createSegments", value: function(t, e, n, r) { var i = this; return e.map((function(e) { return e.path.startsWith(":") ? i.findPosParam(t, e, r) : i.findOrReturn(e, n) })) } }, { key: "findPosParam", value: function(t, e, n) { var r = n[e.path.substring(1)]; if (!r) throw new Error("Cannot redirect to '".concat(t, "'. Cannot find '").concat(e.path, "'.")); return r } }, { key: "findOrReturn", value: function(t, n) { var r, i = 0,
                                o = e(n); try { for (o.s(); !(r = o.n()).done;) { var a = r.value; if (a.path === t.path) return n.splice(i), a;
                                    i++ } } catch (s) { o.e(s) } finally { o.f() } return t } }]), t }();

                function lf(t, e, n) { if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} } : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }; var r = (e.matcher || Xc)(n, t, e); return r ? { matched: !0, consumedSegments: r.consumed, lastChild: r.consumed.length, positionalParamSegments: r.posParams } : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} } }

                function cf(t) { if (1 === t.numberOfChildren && t.children.primary) { var e = t.children.primary; return new ah(t.segments.concat(e.segments), e.children) } return t }

                function hf(t, e, n) { return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo }

                function ff(t) { return t.outlet || "primary" } var df = function t(e) { v(this, t), this.path = e, this.route = this.path[this.path.length - 1] },
                    vf = function t(e, n) { v(this, t), this.component = e, this.route = n };

                function pf(t, e, n) { var r = function(t) { if (!t) return null; for (var e = t.parent; e; e = e.parent) { var n = e.routeConfig; if (n && n._loadedConfig) return n._loadedConfig } return null }(e); return (r ? r.module.injector : n).get(t) }

                function yf(t, e, n) { var r = Oh(t),
                        i = t.value;
                    nh(r, (function(t, r) { yf(t, i.component ? e ? e.children.getContext(r) : null : e, n) })), n.canDeactivateChecks.push(new vf(i.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, i)) } var gf = Symbol("INITIAL_VALUE");

                function mf() { return wc((function(t) { return (function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = null,
                                i = null; return B(e[e.length - 1]) && (i = e.pop()), "function" == typeof e[e.length - 1] && (r = e.pop()), 1 === e.length && k(e[0]) && (e = e[0]), it(e, i).lift(new Ul(r)) }).apply(void 0, n(t.map((function(t) { return t.pipe(hc(1), Ec(gf)) })))).pipe(function(t, e) { var n = !1; return arguments.length >= 2 && (n = !0),
                                function(r) { return r.lift(new xc(t, e, n)) } }((function(t, e) { var n = !1; return e.reduce((function(t, r, i) { if (t !== gf) return t; if (r === gf && (n = !0), !n) { if (!1 === r) return r; if (i === e.length - 1 || ef(r)) return r } return t }), t) }), gf), Kl((function(t) { return t !== gf })), G((function(t) { return ef(t) ? t : !0 === t })), hc(1)) })) }

                function _f(t, e) { return null !== t && e && e(new Wc(t)), Ml(!0) }

                function kf(t, e) { return null !== t && e && e(new zc(t)), Ml(!0) }

                function wf(t, e, n) { var r = e.routeConfig ? e.routeConfig.canActivate : null; return r && 0 !== r.length ? Ml(r.map((function(r) { return Ql((function() { var i, o = pf(r, e, n); if (function(t) { return t && tf(t.canActivate) }(o)) i = rh(o.canActivate(e, t));
                            else { if (!tf(o)) throw new Error("Invalid CanActivate guard");
                                i = rh(o(e, t)) } return i.pipe(vc()) })) }))).pipe(mf()) : Ml(!0) }

                function bf(t, e, n) { var r = e[e.length - 1],
                        i = e.slice(0, e.length - 1).reverse().map((function(t) { return function(t) { var e = t.routeConfig ? t.routeConfig.canActivateChild : null; return e && 0 !== e.length ? { node: t, guards: e } : null }(t) })).filter((function(t) { return null !== t })).map((function(e) { return Ql((function() { return Ml(e.guards.map((function(i) { var o, a = pf(i, e.node, n); if (function(t) { return t && tf(t.canActivateChild) }(a)) o = rh(a.canActivateChild(r, t));
                                    else { if (!tf(a)) throw new Error("Invalid CanActivateChild guard");
                                        o = rh(a(r, t)) } return o.pipe(vc()) }))).pipe(mf()) })) })); return Ml(i).pipe(mf()) } var Sf = function t() { v(this, t) },
                    Cf = function() {
                        function t(e, n, r, i, o, a) { v(this, t), this.rootComponentType = e, this.config = n, this.urlTree = r, this.url = i, this.paramsInheritanceStrategy = o, this.relativeLinkResolution = a } return y(t, [{ key: "recognize", value: function() { try { var t = Tf(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                                        e = this.processSegmentGroup(this.config, t, "primary"),
                                        n = new Nh([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, "primary", this.rootComponentType, null, this.urlTree.root, -1, {}),
                                        r = new Ah(n, e),
                                        i = new jh(this.url, r); return this.inheritParamsAndData(i._root), Ml(i) } catch (o) { return new I((function(t) { return t.error(o) })) } } }, { key: "inheritParamsAndData", value: function(t) { var e = this,
                                    n = t.value,
                                    r = Dh(n, this.paramsInheritanceStrategy);
                                n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), t.children.forEach((function(t) { return e.inheritParamsAndData(t) })) } }, { key: "processSegmentGroup", value: function(t, e, n) { return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n) } }, { key: "processChildren", value: function(t, e) { var n, r = this,
                                    i = lh(e, (function(e, n) { return r.processSegmentGroup(t, e, n) })); return n = {}, i.forEach((function(t) { var e = n[t.value.outlet]; if (e) { var r = e.url.map((function(t) { return t.toString() })).join("/"),
                                            i = t.value.url.map((function(t) { return t.toString() })).join("/"); throw new Error("Two segments cannot have the same outlet name: '".concat(r, "' and '").concat(i, "'.")) }
                                    n[t.value.outlet] = t.value })), i.sort((function(t, e) { return "primary" === t.value.outlet ? -1 : "primary" === e.value.outlet ? 1 : t.value.outlet.localeCompare(e.value.outlet) })), i } }, { key: "processSegment", value: function(t, n, r, i) { var o, a = e(t); try { for (a.s(); !(o = a.n()).done;) { var s = o.value; try { return this.processSegmentAgainstRoute(s, n, r, i) } catch (u) { if (!(u instanceof Sf)) throw u } } } catch (l) { a.e(l) } finally { a.f() } if (this.noLeftoversInUrl(n, r, i)) return []; throw new Sf } }, { key: "noLeftoversInUrl", value: function(t, e, n) { return 0 === e.length && !t.children[n] } }, { key: "processSegmentAgainstRoute", value: function(t, e, n, r) { if (t.redirectTo) throw new Sf; if ((t.outlet || "primary") !== r) throw new Sf; var i, o = [],
                                    a = []; if ("**" === t.path) { var s = n.length > 0 ? eh(n).parameters : {};
                                    i = new Nh(n, s, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Pf(t), r, t.component, t, Ef(e), xf(e) + n.length, Rf(t)) } else { var u = function(t, e, n) { if ("" === e.path) { if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new Sf; return { consumedSegments: [], lastChild: 0, parameters: {} } } var r = (e.matcher || Xc)(n, t, e); if (!r) throw new Sf; var i = {};
                                        nh(r.posParams, (function(t, e) { i[e] = t.path })); var o = r.consumed.length > 0 ? Object.assign(Object.assign({}, i), r.consumed[r.consumed.length - 1].parameters) : i; return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: o } }(e, t, n);
                                    o = u.consumedSegments, a = n.slice(u.lastChild), i = new Nh(o, u.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Pf(t), r, t.component, t, Ef(e), xf(e) + o.length, Rf(t)) } var l = function(t) { return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : [] }(t),
                                    c = Tf(e, o, a, l, this.relativeLinkResolution),
                                    h = c.segmentGroup,
                                    f = c.slicedSegments; if (0 === f.length && h.hasChildren()) { var d = this.processChildren(l, h); return [new Ah(i, d)] } if (0 === l.length && 0 === f.length) return [new Ah(i, [])]; var v = this.processSegment(l, h, f, "primary"); return [new Ah(i, v)] } }]), t }();

                function Ef(t) { for (var e = t; e._sourceSegment;) e = e._sourceSegment; return e }

                function xf(t) { for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment;) n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0; return n - 1 }

                function Tf(t, n, r, i, o) { if (r.length > 0 && function(t, e, n) { return n.some((function(n) { return Af(t, e, n) && "primary" !== Of(n) })) }(t, r, i)) { var a = new ah(n, function(t, n, r, i) { var o = {};
                            o.primary = i, i._sourceSegment = t, i._segmentIndexShift = n.length; var a, s = e(r); try { for (s.s(); !(a = s.n()).done;) { var u = a.value; if ("" === u.path && "primary" !== Of(u)) { var l = new ah([], {});
                                        l._sourceSegment = t, l._segmentIndexShift = n.length, o[Of(u)] = l } } } catch (c) { s.e(c) } finally { s.f() } return o }(t, n, i, new ah(r, t.children))); return a._sourceSegment = t, a._segmentIndexShift = n.length, { segmentGroup: a, slicedSegments: [] } } if (0 === r.length && function(t, e, n) { return n.some((function(n) { return Af(t, e, n) })) }(t, r, i)) { var s = new ah(t.segments, function(t, n, r, i, o, a) { var s, u = {},
                                l = e(i); try { for (l.s(); !(s = l.n()).done;) { var c = s.value; if (Af(t, r, c) && !o[Of(c)]) { var h = new ah([], {});
                                        h._sourceSegment = t, h._segmentIndexShift = "legacy" === a ? t.segments.length : n.length, u[Of(c)] = h } } } catch (f) { l.e(f) } finally { l.f() } return Object.assign(Object.assign({}, o), u) }(t, n, r, i, t.children, o)); return s._sourceSegment = t, s._segmentIndexShift = n.length, { segmentGroup: s, slicedSegments: r } } var u = new ah(t.segments, t.children); return u._sourceSegment = t, u._segmentIndexShift = n.length, { segmentGroup: u, slicedSegments: r } }

                function Af(t, e, n) { return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo }

                function Of(t) { return t.outlet || "primary" }

                function Pf(t) { return t.data || {} }

                function Rf(t) { return t.resolve || {} }

                function If(t) { return function(e) { return e.pipe(wc((function(e) { var n = t(e); return n ? J(n).pipe(G((function() { return e }))) : J([e]) }))) } } var Df, Nf = function() {
                        function t() { v(this, t) } return y(t, [{ key: "shouldDetach", value: function(t) { return !1 } }, { key: "store", value: function(t, e) {} }, { key: "shouldAttach", value: function(t) { return !1 } }, { key: "retrieve", value: function(t) { return null } }, { key: "shouldReuseRoute", value: function(t, e) { return t.routeConfig === e.routeConfig } }]), t }(),
                    jf = ((Df = function t() { v(this, t) }).\u0275fac = function(t) { return new(t || Df) }, Df.\u0275cmp = Ee({ type: Df, selectors: [
                            ["ng-component"]
                        ], decls: 1, vars: 0, template: function(t, e) { 1 & t && Wo(0, "router-outlet") }, directives: function() { return [Jf] }, encapsulation: 2 }), Df);

                function Ff(t) { for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = 0; n < t.length; n++) { var r = t[n];
                        Lf(r, Mf(e, r)) } }

                function Lf(t, e) { if (!t) throw new Error("\n      Invalid configuration of route '".concat(e, "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ")); if (Array.isArray(t)) throw new Error("Invalid configuration of route '".concat(e, "': Array cannot be specified")); if (!t.component && !t.children && !t.loadChildren && t.outlet && "primary" !== t.outlet) throw new Error("Invalid configuration of route '".concat(e, "': a componentless route without children or loadChildren cannot have a named outlet set")); if (t.redirectTo && t.children) throw new Error("Invalid configuration of route '".concat(e, "': redirectTo and children cannot be used together")); if (t.redirectTo && t.loadChildren) throw new Error("Invalid configuration of route '".concat(e, "': redirectTo and loadChildren cannot be used together")); if (t.children && t.loadChildren) throw new Error("Invalid configuration of route '".concat(e, "': children and loadChildren cannot be used together")); if (t.redirectTo && t.component) throw new Error("Invalid configuration of route '".concat(e, "': redirectTo and component cannot be used together")); if (t.path && t.matcher) throw new Error("Invalid configuration of route '".concat(e, "': path and matcher cannot be used together")); if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error("Invalid configuration of route '".concat(e, "'. One of the following must be provided: component, redirectTo, children or loadChildren")); if (void 0 === t.path && void 0 === t.matcher) throw new Error("Invalid configuration of route '".concat(e, "': routes must have either a path or a matcher specified")); if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error("Invalid configuration of route '".concat(e, "': path cannot start with a slash")); if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error("Invalid configuration of route '{path: \"".concat(e, '", redirectTo: "').concat(t.redirectTo, "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.")); if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error("Invalid configuration of route '".concat(e, "': pathMatch can only be set to 'prefix' or 'full'"));
                    t.children && Ff(t.children, e) }

                function Mf(t, e) { return e ? t || e.path ? t && !e.path ? t + "/" : !t && e.path ? e.path : "".concat(t, "/").concat(e.path) : "" : t }

                function Hf(t) { var e = t.children && t.children.map(Hf),
                        n = e ? Object.assign(Object.assign({}, t), { children: e }) : Object.assign({}, t); return !n.component && (e || n.loadChildren) && n.outlet && "primary" !== n.outlet && (n.component = jf), n } var Bf = new Xt("ROUTES"),
                    Vf = function() {
                        function t(e, n, r, i) { v(this, t), this.loader = e, this.compiler = n, this.onLoadStartListener = r, this.onLoadEndListener = i } return y(t, [{ key: "load", value: function(t, e) { var n = this; return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(G((function(r) { n.onLoadEndListener && n.onLoadEndListener(e); var i = r.create(t); return new Jh(th(i.injector.get(Bf)).map(Hf), i) }))) } }, { key: "loadModuleFactory", value: function(t) { var e = this; return "string" == typeof t ? J(this.loader.load(t)) : rh(t()).pipe(tt((function(t) { return t instanceof fe ? Ml(t) : J(e.compiler.compileModuleAsync(t)) }))) } }]), t }(),
                    Uf = function t() { v(this, t), this.outlet = null, this.route = null, this.resolver = null, this.children = new zf, this.attachRef = null },
                    zf = function() {
                        function t() { v(this, t), this.contexts = new Map } return y(t, [{ key: "onChildOutletCreated", value: function(t, e) { var n = this.getOrCreateContext(t);
                                n.outlet = e, this.contexts.set(t, n) } }, { key: "onChildOutletDestroyed", value: function(t) { var e = this.getContext(t);
                                e && (e.outlet = null) } }, { key: "onOutletDeactivated", value: function() { var t = this.contexts; return this.contexts = new Map, t } }, { key: "onOutletReAttached", value: function(t) { this.contexts = t } }, { key: "getOrCreateContext", value: function(t) { var e = this.getContext(t); return e || (e = new Uf, this.contexts.set(t, e)), e } }, { key: "getContext", value: function(t) { return this.contexts.get(t) || null } }]), t }(),
                    qf = function() {
                        function t() { v(this, t) } return y(t, [{ key: "shouldProcessUrl", value: function(t) { return !0 } }, { key: "extract", value: function(t) { return t } }, { key: "merge", value: function(t, e) { return t } }]), t }();

                function Wf(t) { throw t }

                function Qf(t, e, n) { return e.parse("/") }

                function Zf(t, e) { return Ml(null) } var Kf, Gf, Yf, Xf, $f = ((Gf = function() {
                        function t(e, n, r, i, o, a, s, u) { var l = this;
                            v(this, t), this.rootComponentType = e, this.urlSerializer = n, this.rootContexts = r, this.location = i, this.config = u, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new M, this.errorHandler = Wf, this.malformedUriErrorHandler = Qf, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = { beforePreactivation: Zf, afterPreactivation: Zf }, this.urlHandlingStrategy = new qf, this.routeReuseStrategy = new Nf, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = o.get(he), this.console = o.get(Os); var c = o.get(Us);
                            this.isNgZoneEnabled = c instanceof Us, this.resetConfig(u), this.currentUrlTree = new oh(new ah([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new Vf(a, s, (function(t) { return l.triggerEvent(new Vc(t)) }), (function(t) { return l.triggerEvent(new Uc(t)) })), this.routerState = Rh(this.currentUrlTree, this.rootComponentType), this.transitions = new Hl({ id: 0, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree), urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree), rawUrl: this.currentUrlTree, extras: {}, resolve: null, reject: null, promise: Promise.resolve(!0), source: "imperative", restoredState: null, currentSnapshot: this.routerState.snapshot, targetSnapshot: null, currentRouterState: this.routerState, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations() } return y(t, [{ key: "setupNavigations", value: function(t) { var n = this,
                                    r = this.events; return t.pipe(Kl((function(t) { return 0 !== t.id })), G((function(t) { return Object.assign(Object.assign({}, t), { extractedUrl: n.urlHandlingStrategy.extract(t.rawUrl) }) })), wc((function(t) { var i, o, a, s, u = !1,
                                        l = !1; return Ml(t).pipe(yc((function(t) { n.currentNavigation = { id: t.id, initialUrl: t.currentRawUrl, extractedUrl: t.extractedUrl, trigger: t.source, extras: t.extras, previousNavigation: n.lastSuccessfulNavigation ? Object.assign(Object.assign({}, n.lastSuccessfulNavigation), { previousNavigation: null }) : null } })), wc((function(t) { var e, i, o, a, s = !n.navigated || t.extractedUrl.toString() !== n.browserUrlTree.toString(); if (("reload" === n.onSameUrlNavigation || s) && n.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return Ml(t).pipe(wc((function(t) { var e = n.transitions.getValue(); return r.next(new Ic(t.id, n.serializeUrl(t.extractedUrl), t.source, t.restoredState)), e !== n.transitions.getValue() ? ql : [t] })), wc((function(t) { return Promise.resolve(t) })), (e = n.ngModule.injector, i = n.configLoader, o = n.urlSerializer, a = n.config, function(t) { return t.pipe(wc((function(t) { return function(t, e, n, r, i) { return new uf(t, e, n, r, i).apply() }(e, i, o, t.extractedUrl, a).pipe(G((function(e) { return Object.assign(Object.assign({}, t), { urlAfterRedirects: e }) }))) }))) }), yc((function(t) { n.currentNavigation = Object.assign(Object.assign({}, n.currentNavigation), { finalUrl: t.urlAfterRedirects }) })), function(t, e, r, i, o) { return function(r) { return r.pipe(tt((function(r) { return function(t, e, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "emptyOnly",
                                                            o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "legacy"; return new Cf(t, e, n, r, i, o).recognize() }(t, e, r.urlAfterRedirects, (a = r.urlAfterRedirects, n.serializeUrl(a)), i, o).pipe(G((function(t) { return Object.assign(Object.assign({}, r), { targetSnapshot: t }) }))); var a }))) } }(n.rootComponentType, n.config, 0, n.paramsInheritanceStrategy, n.relativeLinkResolution), yc((function(t) { "eager" === n.urlUpdateStrategy && (t.extras.skipLocationChange || n.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state), n.browserUrlTree = t.urlAfterRedirects) })), yc((function(t) { var e = new Fc(t.id, n.serializeUrl(t.extractedUrl), n.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                            r.next(e) }))); if (s && n.rawUrlTree && n.urlHandlingStrategy.shouldProcessUrl(n.rawUrlTree)) { var u = t.id,
                                                l = t.extractedUrl,
                                                c = t.source,
                                                h = t.restoredState,
                                                f = t.extras,
                                                d = new Ic(u, n.serializeUrl(l), c, h);
                                            r.next(d); var v = Rh(l, n.rootComponentType).snapshot; return Ml(Object.assign(Object.assign({}, t), { targetSnapshot: v, urlAfterRedirects: l, extras: Object.assign(Object.assign({}, f), { skipLocationChange: !1, replaceUrl: !1 }) })) } return n.rawUrlTree = t.rawUrl, n.browserUrlTree = t.urlAfterRedirects, t.resolve(null), ql })), If((function(t) { var e = t.targetSnapshot,
                                            r = t.id,
                                            i = t.extractedUrl,
                                            o = t.rawUrl,
                                            a = t.extras,
                                            s = a.skipLocationChange,
                                            u = a.replaceUrl; return n.hooks.beforePreactivation(e, { navigationId: r, appliedUrlTree: i, rawUrlTree: o, skipLocationChange: !!s, replaceUrl: !!u }) })), yc((function(t) { var e = new Lc(t.id, n.serializeUrl(t.extractedUrl), n.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                        n.triggerEvent(e) })), G((function(t) { return Object.assign(Object.assign({}, t), { guards: (e = t.targetSnapshot, r = t.currentSnapshot, i = n.rootContexts, o = e._root, function t(e, n, r, i) { var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { canDeactivateChecks: [], canActivateChecks: [] },
                                                    a = Oh(n); return e.children.forEach((function(e) {! function(e, n, r, i) { var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { canDeactivateChecks: [], canActivateChecks: [] },
                                                            a = e.value,
                                                            s = n ? n.value : null,
                                                            u = r ? r.getContext(e.value.outlet) : null; if (s && a.routeConfig === s.routeConfig) { var l = function(t, e, n) { if ("function" == typeof n) return n(t, e); switch (n) {
                                                                    case "pathParamsChange":
                                                                        return !uh(t.url, e.url);
                                                                    case "pathParamsOrQueryParamsChange":
                                                                        return !uh(t.url, e.url) || !$c(t.queryParams, e.queryParams);
                                                                    case "always":
                                                                        return !0;
                                                                    case "paramsOrQueryParamsChange":
                                                                        return !Hh(t, e) || !$c(t.queryParams, e.queryParams);
                                                                    case "paramsChange":
                                                                    default:
                                                                        return !Hh(t, e) } }(s, a, a.routeConfig.runGuardsAndResolvers);
                                                            l ? o.canActivateChecks.push(new df(i)) : (a.data = s.data, a._resolvedData = s._resolvedData), t(e, n, a.component ? u ? u.children : null : r, i, o), l && o.canDeactivateChecks.push(new vf(u && u.outlet && u.outlet.component || null, s)) } else s && yf(n, u, o), o.canActivateChecks.push(new df(i)), t(e, null, a.component ? u ? u.children : null : r, i, o) }(e, a[e.value.outlet], r, i.concat([e.value]), o), delete a[e.value.outlet] })), nh(a, (function(t, e) { return yf(t, r.getContext(e), o) })), o }(o, r ? r._root : null, i, [o.value])) }); var e, r, i, o })), function(t, e) { return function(n) { return n.pipe(tt((function(n) { var r = n.targetSnapshot,
                                                    i = n.currentSnapshot,
                                                    o = n.guards,
                                                    a = o.canActivateChecks,
                                                    s = o.canDeactivateChecks; return 0 === s.length && 0 === a.length ? Ml(Object.assign(Object.assign({}, n), { guardsResult: !0 })) : function(t, e, n, r) { return J(t).pipe(tt((function(t) { return function(t, e, n, r, i) { var o = e && e.routeConfig ? e.routeConfig.canDeactivate : null; return o && 0 !== o.length ? Ml(o.map((function(o) { var a, s = pf(o, e, i); if (function(t) { return t && tf(t.canDeactivate) }(s)) a = rh(s.canDeactivate(t, e, n, r));
                                                                else { if (!tf(s)) throw new Error("Invalid CanDeactivate guard");
                                                                    a = rh(s(t, e, n, r)) } return a.pipe(vc()) }))).pipe(mf()) : Ml(!0) }(t.component, t.route, n, e, r) })), vc((function(t) { return !0 !== t }), !0)) }(s, r, i, t).pipe(tt((function(n) { return n && "boolean" == typeof n ? function(t, e, n, r) { return J(e).pipe(Ac((function(e) { return J([kf(e.route.parent, r), _f(e.route, r), bf(t, e.path, n), wf(t, e.route, n)]).pipe(Zl(), vc((function(t) { return !0 !== t }), !0)) })), vc((function(t) { return !0 !== t }), !0)) }(r, a, t, e) : Ml(n) })), G((function(t) { return Object.assign(Object.assign({}, n), { guardsResult: t }) }))) }))) } }(n.ngModule.injector, (function(t) { return n.triggerEvent(t) })), yc((function(t) { if (ef(t.guardsResult)) { var e = Yc('Redirecting to "'.concat(n.serializeUrl(t.guardsResult), '"')); throw e.url = t.guardsResult, e } })), yc((function(t) { var e = new Mc(t.id, n.serializeUrl(t.extractedUrl), n.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
                                        n.triggerEvent(e) })), Kl((function(t) { if (!t.guardsResult) { n.resetUrlToCurrentUrlTree(); var e = new Nc(t.id, n.serializeUrl(t.extractedUrl), ""); return r.next(e), t.resolve(!1), !1 } return !0 })), If((function(t) { if (t.guards.canActivateChecks.length) return Ml(t).pipe(yc((function(t) { var e = new Hc(t.id, n.serializeUrl(t.extractedUrl), n.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                            n.triggerEvent(e) })), wc((function(t) { var e, i, o = !1; return Ml(t).pipe((e = n.paramsInheritanceStrategy, i = n.ngModule.injector, function(t) { return t.pipe(tt((function(t) { var n = t.targetSnapshot,
                                                        r = t.guards.canActivateChecks; if (!r.length) return Ml(t); var o = 0; return J(r).pipe(Ac((function(t) { return function(t, e, n, r) { return function(t, e, n, r) { var i = Object.keys(t); if (0 === i.length) return Ml({}); var o = {}; return J(i).pipe(tt((function(i) { return function(t, e, n, r) { var i = pf(t, e, r); return rh(i.resolve ? i.resolve(e, n) : i(e, n)) }(t[i], e, n, r).pipe(yc((function(t) { o[i] = t }))) })), $l(1), tt((function() { return Object.keys(o).length === i.length ? Ml(o) : ql }))) }(t._resolve, t, e, r).pipe(G((function(e) { return t._resolvedData = e, t.data = Object.assign(Object.assign({}, t.data), Dh(t, n).resolve), null }))) }(t.route, n, e, i) })), yc((function() { return o++ })), $l(1), tt((function(e) { return o === r.length ? Ml(t) : ql }))) }))) }), yc({ next: function() { return o = !0 }, complete: function() { if (!o) { var e = new Nc(t.id, n.serializeUrl(t.extractedUrl), "At least one route resolver didn't emit any value.");
                                                        r.next(e), t.resolve(!1) } } })) })), yc((function(t) { var e = new Bc(t.id, n.serializeUrl(t.extractedUrl), n.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                            n.triggerEvent(e) }))) })), If((function(t) { var e = t.targetSnapshot,
                                            r = t.id,
                                            i = t.extractedUrl,
                                            o = t.rawUrl,
                                            a = t.extras,
                                            s = a.skipLocationChange,
                                            u = a.replaceUrl; return n.hooks.afterPreactivation(e, { navigationId: r, appliedUrlTree: i, rawUrlTree: o, skipLocationChange: !!s, replaceUrl: !!u }) })), G((function(t) { var r = function(t, n, r) { var i = function t(n, r, i) { if (i && n.shouldReuseRoute(r.value, i.value.snapshot)) { var o = i.value;
                                                    o._futureSnapshot = r.value; var a = function(n, r, i) { return r.children.map((function(r) { var o, a = e(i.children); try { for (a.s(); !(o = a.n()).done;) { var s = o.value; if (n.shouldReuseRoute(s.value.snapshot, r.value)) return t(n, r, s) } } catch (u) { a.e(u) } finally { a.f() } return t(n, r) })) }(n, r, i); return new Ah(o, a) } var s = n.retrieve(r.value); if (s) { var u = s.route; return function t(e, n) { if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route"); if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                                        n.value._futureSnapshot = e.value; for (var r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r]) }(r, u), u } var l, c = new Ih(new Hl((l = r.value).url), new Hl(l.params), new Hl(l.queryParams), new Hl(l.fragment), new Hl(l.data), l.outlet, l.component, l),
                                                    h = r.children.map((function(e) { return t(n, e) })); return new Ah(c, h) }(t, n._root, r ? r._root : void 0); return new Ph(i, n) }(n.routeReuseStrategy, t.targetSnapshot, t.currentRouterState); return Object.assign(Object.assign({}, t), { targetRouterState: r }) })), yc((function(t) { n.currentUrlTree = t.urlAfterRedirects, n.rawUrlTree = n.urlHandlingStrategy.merge(n.currentUrlTree, t.rawUrl), n.routerState = t.targetRouterState, "deferred" === n.urlUpdateStrategy && (t.extras.skipLocationChange || n.setBrowserUrl(n.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), n.browserUrlTree = t.urlAfterRedirects) })), (o = n.rootContexts, a = n.routeReuseStrategy, s = function(t) { return n.triggerEvent(t) }, G((function(t) { return new Xh(a, t.targetRouterState, t.currentRouterState, s).activate(o), t }))), yc({ next: function() { u = !0 }, complete: function() { u = !0 } }), (i = function() { if (!u && !l) { n.resetUrlToCurrentUrlTree(); var e = new Nc(t.id, n.serializeUrl(t.extractedUrl), "Navigation ID ".concat(t.id, " is not equal to the current navigation id ").concat(n.navigationId));
                                            r.next(e), t.resolve(!1) }
                                        n.currentNavigation = null }, function(t) { return t.lift(new Oc(i)) }), uc((function(e) { if (l = !0, (s = e) && s.ngNavigationCancelingError) { var i = ef(e.url);
                                            i || (n.navigated = !0, n.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl)); var o = new Nc(t.id, n.serializeUrl(t.extractedUrl), e.message);
                                            r.next(o), i ? setTimeout((function() { var r = n.urlHandlingStrategy.merge(e.url, n.rawUrlTree); return n.scheduleNavigation(r, "imperative", null, { skipLocationChange: t.extras.skipLocationChange, replaceUrl: "eager" === n.urlUpdateStrategy }, { resolve: t.resolve, reject: t.reject, promise: t.promise }) }), 0) : t.resolve(!1) } else { n.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl); var a = new jc(t.id, n.serializeUrl(t.extractedUrl), e);
                                            r.next(a); try { t.resolve(n.errorHandler(e)) } catch (u) { t.reject(u) } } var s; return ql }))) }))) } }, { key: "resetRootComponentType", value: function(t) { this.rootComponentType = t, this.routerState.root.component = this.rootComponentType } }, { key: "getTransition", value: function() { var t = this.transitions.value; return t.urlAfterRedirects = this.browserUrlTree, t } }, { key: "setTransition", value: function(t) { this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), t)) } }, { key: "initialNavigation", value: function() { this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 }) } }, { key: "setUpLocationChangeListener", value: function() { var t = this;
                                this.locationSubscription || (this.locationSubscription = this.location.subscribe((function(e) { var n = t.parseUrl(e.url),
                                        r = "popstate" === e.type ? "popstate" : "hashchange",
                                        i = e.state && e.state.navigationId ? e.state : null;
                                    setTimeout((function() { t.scheduleNavigation(n, r, i, { replaceUrl: !0 }) }), 0) }))) } }, { key: "url", get: function() { return this.serializeUrl(this.currentUrlTree) } }, { key: "getCurrentNavigation", value: function() { return this.currentNavigation } }, { key: "triggerEvent", value: function(t) { this.events.next(t) } }, { key: "resetConfig", value: function(t) { Ff(t), this.config = t.map(Hf), this.navigated = !1, this.lastSuccessfulId = -1 } }, { key: "ngOnDestroy", value: function() { this.dispose() } }, { key: "dispose", value: function() { this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null) } }, { key: "createUrlTree", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = e.relativeTo,
                                    i = e.queryParams,
                                    o = e.fragment,
                                    a = e.preserveQueryParams,
                                    s = e.queryParamsHandling,
                                    u = e.preserveFragment;
                                br() && a && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."); var l = r || this.routerState.root,
                                    c = u ? this.currentUrlTree.fragment : o,
                                    h = null; if (s) switch (s) {
                                    case "merge":
                                        h = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), i); break;
                                    case "preserve":
                                        h = this.currentUrlTree.queryParams; break;
                                    default:
                                        h = i || null } else h = a ? this.currentUrlTree.queryParams : i || null; return null !== h && (h = this.removeEmptyProps(h)),
                                    function(t, e, r, i, o) { if (0 === r.length) return Vh(e.root, e.root, e, i, o); var a = function(t) { if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new Uh(!0, 0, t); var e = 0,
                                                r = !1,
                                                i = t.reduce((function(t, i, o) { if ("object" == typeof i && null != i) { if (i.outlets) { var a = {}; return nh(i.outlets, (function(t, e) { a[e] = "string" == typeof t ? t.split("/") : t })), [].concat(n(t), [{ outlets: a }]) } if (i.segmentPath) return [].concat(n(t), [i.segmentPath]) } return "string" != typeof i ? [].concat(n(t), [i]) : 0 === o ? (i.split("/").forEach((function(n, i) { 0 == i && "." === n || (0 == i && "" === n ? r = !0 : ".." === n ? e++ : "" != n && t.push(n)) })), t) : [].concat(n(t), [i]) }), []); return new Uh(r, e, i) }(r); if (a.toRoot()) return Vh(e.root, new ah([], {}), e, i, o); var s = function(t, e, n) { if (t.isAbsolute) return new zh(e.root, !0, 0); if (-1 === n.snapshot._lastPathIndex) { var r = n.snapshot._urlSegment; return new zh(r, r === e.root, 0) } var i = Bh(t.commands[0]) ? 0 : 1; return function(t, e, n) { for (var r = t, i = e, o = n; o > i;) { if (o -= i, !(r = r.parent)) throw new Error("Invalid number of '../'");
                                                        i = r.segments.length } return new zh(r, !1, i - o) }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + i, t.numberOfDoubleDots) }(a, e, t),
                                            u = s.processChildren ? Qh(s.segmentGroup, s.index, a.commands) : Wh(s.segmentGroup, s.index, a.commands); return Vh(s.segmentGroup, u, e, i, o) }(l, this.currentUrlTree, t, h, c) } }, { key: "navigateByUrl", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { skipLocationChange: !1 };
                                br() && this.isNgZoneEnabled && !Us.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"); var n = ef(t) ? t : this.parseUrl(t),
                                    r = this.urlHandlingStrategy.merge(n, this.rawUrlTree); return this.scheduleNavigation(r, "imperative", null, e) } }, { key: "navigate", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { skipLocationChange: !1 }; return function(t) { for (var e = 0; e < t.length; e++) { var n = t[e]; if (null == n) throw new Error("The requested path contains ".concat(n, " segment at index ").concat(e)) } }(t), this.navigateByUrl(this.createUrlTree(t, e), e) } }, { key: "serializeUrl", value: function(t) { return this.urlSerializer.serialize(t) } }, { key: "parseUrl", value: function(t) { var e; try { e = this.urlSerializer.parse(t) } catch (n) { e = this.malformedUriErrorHandler(n, this.urlSerializer, t) } return e } }, { key: "isActive", value: function(t, e) { if (ef(t)) return ih(this.currentUrlTree, t, e); var n = this.parseUrl(t); return ih(this.currentUrlTree, n, e) } }, { key: "removeEmptyProps", value: function(t) { return Object.keys(t).reduce((function(e, n) { var r = t[n]; return null != r && (e[n] = r), e }), {}) } }, { key: "processNavigations", value: function() { var t = this;
                                this.navigations.subscribe((function(e) { t.navigated = !0, t.lastSuccessfulId = e.id, t.events.next(new Dc(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(t.currentUrlTree))), t.lastSuccessfulNavigation = t.currentNavigation, t.currentNavigation = null, e.resolve(!0) }), (function(e) { t.console.warn("Unhandled Navigation Error: ") })) } }, { key: "scheduleNavigation", value: function(t, e, n, r, i) { var o, a, s, u = this.getTransition(); if (u && "imperative" !== e && "imperative" === u.source && u.rawUrl.toString() === t.toString()) return Promise.resolve(!0); if (u && "hashchange" == e && "popstate" === u.source && u.rawUrl.toString() === t.toString()) return Promise.resolve(!0); if (u && "popstate" == e && "hashchange" === u.source && u.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                                i ? (o = i.resolve, a = i.reject, s = i.promise) : s = new Promise((function(t, e) { o = t, a = e })); var l = ++this.navigationId; return this.setTransition({ id: l, source: e, restoredState: n, currentUrlTree: this.currentUrlTree, currentRawUrl: this.rawUrlTree, rawUrl: t, extras: r, resolve: o, reject: a, promise: s, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), s.catch((function(t) { return Promise.reject(t) })) } }, { key: "setBrowserUrl", value: function(t, e, n, r) { var i = this.urlSerializer.serialize(t);
                                r = r || {}, this.location.isCurrentPathEqualTo(i) || e ? this.location.replaceState(i, "", Object.assign(Object.assign({}, r), { navigationId: n })) : this.location.go(i, "", Object.assign(Object.assign({}, r), { navigationId: n })) } }, { key: "resetStateAndUrl", value: function(t, e, n) { this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree() } }, { key: "resetUrlToCurrentUrlTree", value: function() { this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", { navigationId: this.lastSuccessfulId }) } }]), t }()).\u0275fac = function(t) { return new(t || Gf)(ae(yo), ae(ch), ae(zf), ae(Bu), ae(Po), ae(lu), ae(Hs), ae(void 0)) }, Gf.\u0275prov = bt({ token: Gf, factory: Gf.\u0275fac }), Gf),
                    Jf = ((Kf = function() {
                        function t(e, n, r, i, o) { v(this, t), this.parentContexts = e, this.location = n, this.resolver = r, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new ls, this.deactivateEvents = new ls, this.name = i || "primary", e.onChildOutletCreated(this.name, this) } return y(t, [{ key: "ngOnDestroy", value: function() { this.parentContexts.onChildOutletDestroyed(this.name) } }, { key: "ngOnInit", value: function() { if (!this.activated) { var t = this.parentContexts.getContext(this.name);
                                    t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null)) } } }, { key: "isActivated", get: function() { return !!this.activated } }, { key: "component", get: function() { if (!this.activated) throw new Error("Outlet is not activated"); return this.activated.instance } }, { key: "activatedRoute", get: function() { if (!this.activated) throw new Error("Outlet is not activated"); return this._activatedRoute } }, { key: "activatedRouteData", get: function() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {} } }, { key: "detach", value: function() { if (!this.activated) throw new Error("Outlet is not activated");
                                this.location.detach(); var t = this.activated; return this.activated = null, this._activatedRoute = null, t } }, { key: "attach", value: function(t, e) { this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView) } }, { key: "deactivate", value: function() { if (this.activated) { var t = this.component;
                                    this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t) } } }, { key: "activateWith", value: function(t, e) { if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                                this._activatedRoute = t; var n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
                                    r = this.parentContexts.getOrCreateContext(this.name).children,
                                    i = new td(t, r, this.location.injector);
                                this.activated = this.location.createComponent(n, this.location.length, i), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance) } }]), t }()).\u0275fac = function(t) { return new(t || Kf)(Bo(zf), Bo(Qa), Bo(wa), function(t, e) { var n = t.attrs; if (n)
                                for (var r = n.length, i = 0; i < r;) { var o = n[i]; if (Vn(o)) break; if (0 === o) i += 2;
                                    else if ("number" == typeof o)
                                        for (i++; i < r && "string" == typeof n[i];) i++;
                                    else { if ("name" === o) return n[i + 1];
                                        i += 2 } }
                            return null }(hn()), Bo(vo)) }, Kf.\u0275dir = Re({ type: Kf, selectors: [
                            ["router-outlet"]
                        ], outputs: { activateEvents: "activate", deactivateEvents: "deactivate" }, exportAs: ["outlet"] }), Kf),
                    td = function() {
                        function t(e, n, r) { v(this, t), this.route = e, this.childContexts = n, this.parent = r } return y(t, [{ key: "get", value: function(t, e) { return t === Ih ? this.route : t === zf ? this.childContexts : this.parent.get(t, e) } }]), t }(),
                    ed = function t() { v(this, t) },
                    nd = function() {
                        function t() { v(this, t) } return y(t, [{ key: "preload", value: function(t, e) { return Ml(null) } }]), t }(),
                    rd = ((Xf = function() {
                        function t(e, n, r, i, o) { v(this, t), this.router = e, this.injector = i, this.preloadingStrategy = o, this.loader = new Vf(n, r, (function(t) { return e.triggerEvent(new Vc(t)) }), (function(t) { return e.triggerEvent(new Uc(t)) })) } return y(t, [{ key: "setUpPreloading", value: function() { var t = this;
                                this.subscription = this.router.events.pipe(Kl((function(t) { return t instanceof Dc })), Ac((function() { return t.preload() }))).subscribe((function() {})) } }, { key: "preload", value: function() { var t = this.injector.get(he); return this.processRoutes(t, this.router.config) } }, { key: "ngOnDestroy", value: function() { this.subscription && this.subscription.unsubscribe() } }, { key: "processRoutes", value: function(t, n) { var r, i = [],
                                    o = e(n); try { for (o.s(); !(r = o.n()).done;) { var a = r.value; if (a.loadChildren && !a.canLoad && a._loadedConfig) { var s = a._loadedConfig;
                                            i.push(this.processRoutes(s.module, s.routes)) } else a.loadChildren && !a.canLoad ? i.push(this.preloadConfig(t, a)) : a.children && i.push(this.processRoutes(t, a.children)) } } catch (u) { o.e(u) } finally { o.f() } return J(i).pipe(rt(), G((function(t) {}))) } }, { key: "preloadConfig", value: function(t, e) { var n = this; return this.preloadingStrategy.preload(e, (function() { return n.loader.load(t.injector, e).pipe(tt((function(t) { return e._loadedConfig = t, n.processRoutes(t.module, t.routes) }))) })) } }]), t }()).\u0275fac = function(t) { return new(t || Xf)(ae($f), ae(lu), ae(Hs), ae(Po), ae(ed)) }, Xf.\u0275prov = bt({ token: Xf, factory: Xf.\u0275fac }), Xf),
                    id = ((Yf = function() {
                        function t(e, n) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            v(this, t), this.router = e, this.viewportScroller = n, this.options = r, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, r.scrollPositionRestoration = r.scrollPositionRestoration || "disabled", r.anchorScrolling = r.anchorScrolling || "disabled" } return y(t, [{ key: "init", value: function() { "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents() } }, { key: "createScrollEvents", value: function() { var t = this; return this.router.events.subscribe((function(e) { e instanceof Ic ? (t.store[t.lastId] = t.viewportScroller.getScrollPosition(), t.lastSource = e.navigationTrigger, t.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof Dc && (t.lastId = e.id, t.scheduleScrollEvent(e, t.router.parseUrl(e.urlAfterRedirects).fragment)) })) } }, { key: "consumeScrollEvents", value: function() { var t = this; return this.router.events.subscribe((function(e) { e instanceof Zc && (e.position ? "top" === t.options.scrollPositionRestoration ? t.viewportScroller.scrollToPosition([0, 0]) : "enabled" === t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition(e.position) : e.anchor && "enabled" === t.options.anchorScrolling ? t.viewportScroller.scrollToAnchor(e.anchor) : "disabled" !== t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition([0, 0])) })) } }, { key: "scheduleScrollEvent", value: function(t, e) { this.router.triggerEvent(new Zc(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e)) } }, { key: "ngOnDestroy", value: function() { this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe() } }]), t }()).\u0275fac = function(t) { return new(t || Yf)(ae($f), ae(tl), ae(void 0)) }, Yf.\u0275prov = bt({ token: Yf, factory: Yf.\u0275fac }), Yf),
                    od = new Xt("ROUTER_CONFIGURATION"),
                    ad = new Xt("ROUTER_FORROOT_GUARD"),
                    sd = [Bu, { provide: ch, useClass: hh }, { provide: $f, useFactory: function(t, e, n, r, i, o, a) { var s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {},
                                u = arguments.length > 8 ? arguments[8] : void 0,
                                l = arguments.length > 9 ? arguments[9] : void 0,
                                c = new $f(null, t, e, n, r, i, o, th(a)); if (u && (c.urlHandlingStrategy = u), l && (c.routeReuseStrategy = l), s.errorHandler && (c.errorHandler = s.errorHandler), s.malformedUriErrorHandler && (c.malformedUriErrorHandler = s.malformedUriErrorHandler), s.enableTracing) { var h = mu();
                                c.events.subscribe((function(t) { h.logGroup("Router Event: " + t.constructor.name), h.log(t.toString()), h.log(t), h.logGroupEnd() })) } return s.onSameUrlNavigation && (c.onSameUrlNavigation = s.onSameUrlNavigation), s.paramsInheritanceStrategy && (c.paramsInheritanceStrategy = s.paramsInheritanceStrategy), s.urlUpdateStrategy && (c.urlUpdateStrategy = s.urlUpdateStrategy), s.relativeLinkResolution && (c.relativeLinkResolution = s.relativeLinkResolution), c }, deps: [ch, zf, Bu, Po, lu, Hs, Bf, od, [function() { return function t() { v(this, t) } }(), new yt],
                            [function() { return function t() { v(this, t) } }(), new yt]
                        ] }, zf, { provide: Ih, useFactory: function(t) { return t.routerState.root }, deps: [$f] }, { provide: lu, useClass: fu }, rd, nd, function() {
                        function t() { v(this, t) } return y(t, [{ key: "preload", value: function(t, e) { return e().pipe(uc((function() { return Ml(null) }))) } }]), t }(), { provide: od, useValue: { enableTracing: !1 } }];

                function ud() { return new eu("Router", $f) } var ld, cd = ((ld = function() {
                    function t(e, n) { v(this, t) } return y(t, null, [{ key: "forRoot", value: function(e, n) { return { ngModule: t, providers: [sd, vd(e), { provide: ad, useFactory: dd, deps: [
                                            [$f, new yt, new mt]
                                        ] }, { provide: od, useValue: n || {} }, { provide: Iu, useFactory: fd, deps: [wu, [new pt(Lu), new yt], od] }, { provide: id, useFactory: hd, deps: [$f, tl, od] }, { provide: ed, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : nd }, { provide: eu, multi: !0, useFactory: ud },
                                    [yd, { provide: ws, multi: !0, useFactory: gd, deps: [yd] }, { provide: kd, useFactory: md, deps: [yd] }, { provide: As, multi: !0, useExisting: kd }]
                                ] } } }, { key: "forChild", value: function(e) { return { ngModule: t, providers: [vd(e)] } } }]), t }()).\u0275mod = Oe({ type: ld }), ld.\u0275inj = St({ factory: function(t) { return new(t || ld)(ae(ad, 8), ae($f, 8)) } }), ld);

                function hd(t, e, n) { return n.scrollOffset && e.setOffset(n.scrollOffset), new id(t, e, n) }

                function fd(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; return n.useHash ? new Hu(t, e) : new Mu(t, e) }

                function dd(t) { if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."); return "guarded" }

                function vd(t) { return [{ provide: Ro, multi: !0, useValue: t }, { provide: Bf, multi: !0, useValue: t }] } var pd, yd = ((pd = function() {
                    function t(e) { v(this, t), this.injector = e, this.initNavigation = !1, this.resultOfPreactivationDone = new M } return y(t, [{ key: "appInitializer", value: function() { var t = this; return this.injector.get(Cu, Promise.resolve(null)).then((function() { var e = null,
                                    n = new Promise((function(t) { return e = t })),
                                    r = t.injector.get($f),
                                    i = t.injector.get(od); if (t.isLegacyDisabled(i) || t.isLegacyEnabled(i)) e(!0);
                                else if ("disabled" === i.initialNavigation) r.setUpLocationChangeListener(), e(!0);
                                else { if ("enabled" !== i.initialNavigation) throw new Error("Invalid initialNavigation options: '".concat(i.initialNavigation, "'"));
                                    r.hooks.afterPreactivation = function() { return t.initNavigation ? Ml(null) : (t.initNavigation = !0, e(!0), t.resultOfPreactivationDone) }, r.initialNavigation() } return n })) } }, { key: "bootstrapListener", value: function(t) { var e = this.injector.get(od),
                                n = this.injector.get(rd),
                                r = this.injector.get(id),
                                i = this.injector.get($f),
                                o = this.injector.get(su);
                            t === o.components[0] && (this.isLegacyEnabled(e) ? i.initialNavigation() : this.isLegacyDisabled(e) && i.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), i.resetRootComponentType(o.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete()) } }, { key: "isLegacyEnabled", value: function(t) { return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation } }, { key: "isLegacyDisabled", value: function(t) { return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation } }]), t }()).\u0275fac = function(t) { return new(t || pd)(ae(Po)) }, pd.\u0275prov = bt({ token: pd, factory: pd.\u0275fac }), pd);

                function gd(t) { return t.appInitializer.bind(t) }

                function md(t) { return t.bootstrapListener.bind(t) } var _d, kd = new Xt("Router Initializer"),
                    wd = [],
                    bd = ((_d = function t() { v(this, t) }).\u0275mod = Oe({ type: _d }), _d.\u0275inj = St({ factory: function(t) { return new(t || _d) }, imports: [
                            [cd.forRoot(wd)], cd
                        ] }), _d);

                function Sd(t) { return Array.isArray(t) ? t : [t] }

                function Cd(t) { return null == t ? "" : "string" == typeof t ? t : t + "px" }

                function Ed(t) { return t instanceof ba ? t.nativeElement : t } var xd = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, t, r)).scheduler = t, i.work = r, i.pending = !1, i } return y(n, [{ key: "schedule", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; if (this.closed) return this;
                                this.state = t; var n = this.id,
                                    r = this.scheduler; return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this } }, { key: "requestAsyncId", value: function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return setInterval(t.flush.bind(t, this), n) } }, { key: "recycleAsyncId", value: function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; if (null !== n && this.delay === n && !1 === this.pending) return e;
                                clearInterval(e) } }, { key: "execute", value: function(t, e) { if (this.closed) return new Error("executing a cancelled action");
                                this.pending = !1; var n = this._execute(t, e); if (n) return n;!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)) } }, { key: "_execute", value: function(t, e) { var n = !1,
                                    r = void 0; try { this.work(t) } catch (i) { n = !0, r = !!i && i || new Error(i) } if (n) return this.unsubscribe(), r } }, { key: "_unsubscribe", value: function() { var t = this.id,
                                    e = this.scheduler,
                                    n = e.actions,
                                    r = n.indexOf(this);
                                this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null } }]), n }(function(t) { s(n, t); var e = l(n);

                        function n(t, r) { return v(this, n), e.call(this) } return y(n, [{ key: "schedule", value: function(t) { return this } }]), n }(C)),
                    Td = function() { var t = function() {
                            function t(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.now;
                                v(this, t), this.SchedulerAction = e, this.now = n } return y(t, [{ key: "schedule", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        n = arguments.length > 2 ? arguments[2] : void 0; return new this.SchedulerAction(this, t).schedule(n, e) } }]), t }(); return t.now = function() { return Date.now() }, t }(),
                    Ad = new(function(t) { s(n, t); var e = l(n);

                        function n(t) { var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Td.now; return v(this, n), (r = e.call(this, t, (function() { return n.delegate && n.delegate !== h(r) ? n.delegate.now() : i() }))).actions = [], r.active = !1, r.scheduled = void 0, r } return y(n, [{ key: "schedule", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    r = arguments.length > 2 ? arguments[2] : void 0; return n.delegate && n.delegate !== this ? n.delegate.schedule(t, e, r) : a(d(n.prototype), "schedule", this).call(this, t, e, r) } }, { key: "flush", value: function(t) { var e = this.actions; if (this.active) e.push(t);
                                else { var n;
                                    this.active = !0;
                                    do { if (n = t.execute(t.state, t.delay)) break } while (t = e.shift()); if (this.active = !1, n) { for (; t = e.shift();) t.unsubscribe(); throw n } } } }]), n }(Td))(xd),
                    Od = function() {
                        function t(e) { v(this, t), this.durationSelector = e } return y(t, [{ key: "call", value: function(t, e) { return e.subscribe(new Pd(t, this.durationSelector)) } }]), t }(),
                    Pd = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, t)).durationSelector = r, i.hasValue = !1, i } return y(n, [{ key: "_next", value: function(t) { if (this.value = t, this.hasValue = !0, !this.throttled) { var e; try { e = (0, this.durationSelector)(t) } catch (r) { return this.destination.error(r) } var n = Z(this, e);!n || n.closed ? this.clearThrottle() : this.add(this.throttled = n) } } }, { key: "clearThrottle", value: function() { var t = this.value,
                                    e = this.hasValue,
                                    n = this.throttled;
                                n && (this.remove(n), this.throttled = null, n.unsubscribe()), e && (this.value = null, this.hasValue = !1, this.destination.next(t)) } }, { key: "notifyNext", value: function(t, e, n, r) { this.clearThrottle() } }, { key: "notifyComplete", value: function() { this.clearThrottle() } }]), n }(K);

                function Rd(t) { return !k(t) && t - parseFloat(t) + 1 >= 0 }

                function Id(t) { var e = t.index,
                        n = t.period,
                        r = t.subscriber; if (r.next(e), !r.closed) { if (-1 === n) return r.complete();
                        t.index = e + 1, this.schedule(t, n) } }

                function Dd(t) { var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ad; return e = function() { return function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    e = arguments.length > 1 ? arguments[1] : void 0,
                                    n = arguments.length > 2 ? arguments[2] : void 0,
                                    r = -1; return Rd(e) ? r = Number(e) < 1 ? 1 : Number(e) : B(e) && (n = e), B(n) || (n = Ad), new I((function(e) { var i = Rd(t) ? t : +t - n.now(); return n.schedule(Id, i, { index: 0, period: r, subscriber: e }) })) }(t, n) },
                        function(t) { return t.lift(new Od(e)) } } var Nd, jd = function() {
                        function t(e) { v(this, t), this.notifier = e } return y(t, [{ key: "call", value: function(t, e) { var n = new Fd(t),
                                    r = Z(n, this.notifier); return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n } }]), t }(),
                    Fd = function(t) { s(n, t); var e = l(n);

                        function n(t) { var r; return v(this, n), (r = e.call(this, t)).seenValue = !1, r } return y(n, [{ key: "notifyNext", value: function(t, e, n, r, i) { this.seenValue = !0, this.complete() } }, { key: "notifyComplete", value: function() {} }]), n }(K); try { Nd = "undefined" != typeof Intl && Intl.v8BreakIterator } catch (Am) { Nd = !1 } var Ld, Md, Hd, Bd, Vd = ((Bd = function t(e) { v(this, t), this._platformId = e, this.isBrowser = this._platformId ? "browser" === this._platformId : "object" == typeof document && !!document, this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent), this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent), this.BLINK = this.isBrowser && !(!window.chrome && !Nd) && "undefined" != typeof CSS && !this.EDGE && !this.TRIDENT, this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT, this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window), this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent), this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT, this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT }).\u0275fac = function(t) { return new(t || Bd)(ae(Ts)) }, Bd.\u0275prov = bt({ factory: function() { return new Bd(ae(Ts)) }, token: Bd, providedIn: "root" }), Bd),
                    Ud = ((Hd = function t() { v(this, t) }).\u0275mod = Oe({ type: Hd }), Hd.\u0275inj = St({ factory: function(t) { return new(t || Hd) } }), Hd); var zd, qd, Wd, Qd, Zd, Kd, Gd, Yd, Xd = new Xt("cdk-dir-doc", { providedIn: "root", factory: function() { return se(ku) } }),
                    $d = ((Kd = function() {
                        function t(e) { if (v(this, t), this.value = "ltr", this.change = new ls, e) { var n = e.documentElement ? e.documentElement.dir : null,
                                    r = (e.body ? e.body.dir : null) || n;
                                this.value = "ltr" === r || "rtl" === r ? r : "ltr" } } return y(t, [{ key: "ngOnDestroy", value: function() { this.change.complete() } }]), t }()).\u0275fac = function(t) { return new(t || Kd)(ae(Xd, 8)) }, Kd.\u0275prov = bt({ factory: function() { return new Kd(ae(Xd, 8)) }, token: Kd, providedIn: "root" }), Kd),
                    Jd = ((Zd = function t() { v(this, t) }).\u0275mod = Oe({ type: Zd }), Zd.\u0275inj = St({ factory: function(t) { return new(t || Zd) } }), Zd),
                    tv = ((Qd = function() {
                        function t(e, n, r) { v(this, t), this._ngZone = e, this._platform = n, this._scrolled = new M, this._globalSubscription = null, this._scrolledCount = 0, this.scrollContainers = new Map, this._document = r } return y(t, [{ key: "register", value: function(t) { var e = this;
                                this.scrollContainers.has(t) || this.scrollContainers.set(t, t.elementScrolled().subscribe((function() { return e._scrolled.next(t) }))) } }, { key: "deregister", value: function(t) { var e = this.scrollContainers.get(t);
                                e && (e.unsubscribe(), this.scrollContainers.delete(t)) } }, { key: "scrolled", value: function() { var t = this,
                                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20; return this._platform.isBrowser ? new I((function(n) { t._globalSubscription || t._addGlobalListener(); var r = e > 0 ? t._scrolled.pipe(Dd(e)).subscribe(n) : t._scrolled.subscribe(n); return t._scrolledCount++,
                                        function() { r.unsubscribe(), t._scrolledCount--, t._scrolledCount || t._removeGlobalListener() } })) : Ml() } }, { key: "ngOnDestroy", value: function() { var t = this;
                                this._removeGlobalListener(), this.scrollContainers.forEach((function(e, n) { return t.deregister(n) })), this._scrolled.complete() } }, { key: "ancestorScrolled", value: function(t, e) { var n = this.getAncestorScrollContainers(t); return this.scrolled(e).pipe(Kl((function(t) { return !t || n.indexOf(t) > -1 }))) } }, { key: "getAncestorScrollContainers", value: function(t) { var e = this,
                                    n = []; return this.scrollContainers.forEach((function(r, i) { e._scrollableContainsElement(i, t) && n.push(i) })), n } }, { key: "_getDocument", value: function() { return this._document || document } }, { key: "_getWindow", value: function() { return this._getDocument().defaultView || window } }, { key: "_scrollableContainsElement", value: function(t, e) { var n = e.nativeElement,
                                    r = t.getElementRef().nativeElement;
                                do { if (n == r) return !0 } while (n = n.parentElement); return !1 } }, { key: "_addGlobalListener", value: function() { var t = this;
                                this._globalSubscription = this._ngZone.runOutsideAngular((function() { return function t(e, r, i, o) { return f(i) && (o = i, i = void 0), o ? t(e, r, i).pipe(G((function(t) { return k(t) ? o.apply(void 0, n(t)) : o(t) }))) : new I((function(t) {! function t(e, n, r, i, o) { var a; if (function(t) { return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener }(e)) { var s = e;
                                                    e.addEventListener(n, r, o), a = function() { return s.removeEventListener(n, r, o) } } else if (function(t) { return t && "function" == typeof t.on && "function" == typeof t.off }(e)) { var u = e;
                                                    e.on(n, r), a = function() { return u.off(n, r) } } else if (function(t) { return t && "function" == typeof t.addListener && "function" == typeof t.removeListener }(e)) { var l = e;
                                                    e.addListener(n, r), a = function() { return l.removeListener(n, r) } } else { if (!e || !e.length) throw new TypeError("Invalid event target"); for (var c = 0, h = e.length; c < h; c++) t(e[c], n, r, i, o) }
                                                i.add(a) }(e, r, (function(e) { t.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : e) }), t, i) })) }(t._getWindow().document, "scroll").subscribe((function() { return t._scrolled.next() })) })) } }, { key: "_removeGlobalListener", value: function() { this._globalSubscription && (this._globalSubscription.unsubscribe(), this._globalSubscription = null) } }]), t }()).\u0275fac = function(t) { return new(t || Qd)(ae(Us), ae(Vd), ae(ku, 8)) }, Qd.\u0275prov = bt({ factory: function() { return new Qd(ae(Us), ae(Vd), ae(ku, 8)) }, token: Qd, providedIn: "root" }), Qd),
                    ev = ((Wd = function() {
                        function t(e, n, r) { var i = this;
                            v(this, t), this._platform = e, this._change = new M, this._changeListener = function(t) { i._change.next(t) }, this._document = r, n.runOutsideAngular((function() { if (e.isBrowser) { var t = i._getWindow();
                                    t.addEventListener("resize", i._changeListener), t.addEventListener("orientationchange", i._changeListener) }
                                i.change().subscribe((function() { return i._updateViewportSize() })) })) } return y(t, [{ key: "ngOnDestroy", value: function() { if (this._platform.isBrowser) { var t = this._getWindow();
                                    t.removeEventListener("resize", this._changeListener), t.removeEventListener("orientationchange", this._changeListener) }
                                this._change.complete() } }, { key: "getViewportSize", value: function() { this._viewportSize || this._updateViewportSize(); var t = { width: this._viewportSize.width, height: this._viewportSize.height }; return this._platform.isBrowser || (this._viewportSize = null), t } }, { key: "getViewportRect", value: function() { var t = this.getViewportScrollPosition(),
                                    e = this.getViewportSize(),
                                    n = e.width,
                                    r = e.height; return { top: t.top, left: t.left, bottom: t.top + r, right: t.left + n, height: r, width: n } } }, { key: "getViewportScrollPosition", value: function() { if (!this._platform.isBrowser) return { top: 0, left: 0 }; var t = this._getDocument(),
                                    e = this._getWindow(),
                                    n = t.documentElement,
                                    r = n.getBoundingClientRect(); return { top: -r.top || t.body.scrollTop || e.scrollY || n.scrollTop || 0, left: -r.left || t.body.scrollLeft || e.scrollX || n.scrollLeft || 0 } } }, { key: "change", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20; return t > 0 ? this._change.pipe(Dd(t)) : this._change } }, { key: "_getDocument", value: function() { return this._document || document } }, { key: "_getWindow", value: function() { return this._getDocument().defaultView || window } }, { key: "_updateViewportSize", value: function() { var t = this._getWindow();
                                this._viewportSize = this._platform.isBrowser ? { width: t.innerWidth, height: t.innerHeight } : { width: 0, height: 0 } } }]), t }()).\u0275fac = function(t) { return new(t || Wd)(ae(Vd), ae(Us), ae(ku, 8)) }, Wd.\u0275prov = bt({ factory: function() { return new Wd(ae(Vd), ae(Us), ae(ku, 8)) }, token: Wd, providedIn: "root" }), Wd),
                    nv = ((qd = function t() { v(this, t) }).\u0275mod = Oe({ type: qd }), qd.\u0275inj = St({ factory: function(t) { return new(t || qd) } }), qd),
                    rv = ((zd = function t() { v(this, t) }).\u0275mod = Oe({ type: zd }), zd.\u0275inj = St({ factory: function(t) { return new(t || zd) }, imports: [
                            [Jd, Ud, nv], Jd, nv
                        ] }), zd),
                    iv = function() {
                        function t() { v(this, t) } return y(t, [{ key: "attach", value: function(t) { return this._attachedHost = t, t.attach(this) } }, { key: "detach", value: function() { var t = this._attachedHost;
                                null != t && (this._attachedHost = null, t.detach()) } }, { key: "isAttached", get: function() { return null != this._attachedHost } }, { key: "setAttachedHost", value: function(t) { this._attachedHost = t } }]), t }(),
                    ov = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o) { var a; return v(this, n), (a = e.call(this)).component = t, a.viewContainerRef = r, a.injector = i, a.componentFactoryResolver = o, a } return n }(iv),
                    av = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i) { var o; return v(this, n), (o = e.call(this)).templateRef = t, o.viewContainerRef = r, o.context = i, o } return y(n, [{ key: "origin", get: function() { return this.templateRef.elementRef } }, { key: "attach", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.context; return this.context = e, a(d(n.prototype), "attach", this).call(this, t) } }, { key: "detach", value: function() { return this.context = void 0, a(d(n.prototype), "detach", this).call(this) } }]), n }(iv),
                    sv = function(t) { s(n, t); var e = l(n);

                        function n(t) { var r; return v(this, n), (r = e.call(this)).element = t instanceof ba ? t.nativeElement : t, r } return n }(iv),
                    uv = function() {
                        function t() { v(this, t), this._isDisposed = !1, this.attachDomPortal = null } return y(t, [{ key: "hasAttached", value: function() { return !!this._attachedPortal } }, { key: "attach", value: function(t) { return t instanceof ov ? (this._attachedPortal = t, this.attachComponentPortal(t)) : t instanceof av ? (this._attachedPortal = t, this.attachTemplatePortal(t)) : this.attachDomPortal && t instanceof sv ? (this._attachedPortal = t, this.attachDomPortal(t)) : void 0 } }, { key: "detach", value: function() { this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn() } }, { key: "dispose", value: function() { this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0 } }, { key: "setDisposeFn", value: function(t) { this._disposeFn = t } }, { key: "_invokeDisposeFn", value: function() { this._disposeFn && (this._disposeFn(), this._disposeFn = null) } }]), t }(),
                    lv = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o, s) { var u, l; return v(this, n), (l = e.call(this)).outletElement = t, l._componentFactoryResolver = r, l._appRef = i, l._defaultInjector = o, l.attachDomPortal = function(t) { var e = t.element,
                                    r = l._document.createComment("dom-portal");
                                e.parentNode.insertBefore(r, e), l.outletElement.appendChild(e), a((u = h(l), d(n.prototype)), "setDisposeFn", u).call(u, (function() { r.parentNode && r.parentNode.replaceChild(e, r) })) }, l._document = s, l } return y(n, [{ key: "attachComponentPortal", value: function(t) { var e, n = this,
                                    r = (t.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(t.component); return t.viewContainerRef ? (e = t.viewContainerRef.createComponent(r, t.viewContainerRef.length, t.injector || t.viewContainerRef.injector), this.setDisposeFn((function() { return e.destroy() }))) : (e = r.create(t.injector || this._defaultInjector), this._appRef.attachView(e.hostView), this.setDisposeFn((function() { n._appRef.detachView(e.hostView), e.destroy() }))), this.outletElement.appendChild(this._getComponentRootNode(e)), e } }, { key: "attachTemplatePortal", value: function(t) { var e = this,
                                    n = t.viewContainerRef,
                                    r = n.createEmbeddedView(t.templateRef, t.context); return r.rootNodes.forEach((function(t) { return e.outletElement.appendChild(t) })), r.detectChanges(), this.setDisposeFn((function() { var t = n.indexOf(r); - 1 !== t && n.remove(t) })), r } }, { key: "dispose", value: function() { a(d(n.prototype), "dispose", this).call(this), null != this.outletElement.parentNode && this.outletElement.parentNode.removeChild(this.outletElement) } }, { key: "_getComponentRootNode", value: function(t) { return t.hostView.rootNodes[0] } }]), n }(uv),
                    cv = ((Yd = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i) { var o, s; return v(this, n), (s = e.call(this))._componentFactoryResolver = t, s._viewContainerRef = r, s._isInitialized = !1, s.attached = new ls, s.attachDomPortal = function(t) { var e = t.element,
                                    r = s._document.createComment("dom-portal");
                                t.setAttachedHost(h(s)), e.parentNode.insertBefore(r, e), s._getRootNode().appendChild(e), a((o = h(s), d(n.prototype)), "setDisposeFn", o).call(o, (function() { r.parentNode && r.parentNode.replaceChild(e, r) })) }, s._document = i, s } return y(n, [{ key: "portal", get: function() { return this._attachedPortal }, set: function(t) {
                                (!this.hasAttached() || t || this._isInitialized) && (this.hasAttached() && a(d(n.prototype), "detach", this).call(this), t && a(d(n.prototype), "attach", this).call(this, t), this._attachedPortal = t) } }, { key: "attachedRef", get: function() { return this._attachedRef } }, { key: "ngOnInit", value: function() { this._isInitialized = !0 } }, { key: "ngOnDestroy", value: function() { a(d(n.prototype), "dispose", this).call(this), this._attachedPortal = null, this._attachedRef = null } }, { key: "attachComponentPortal", value: function(t) { t.setAttachedHost(this); var e = null != t.viewContainerRef ? t.viewContainerRef : this._viewContainerRef,
                                    r = (t.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(t.component),
                                    i = e.createComponent(r, e.length, t.injector || e.injector); return e !== this._viewContainerRef && this._getRootNode().appendChild(i.hostView.rootNodes[0]), a(d(n.prototype), "setDisposeFn", this).call(this, (function() { return i.destroy() })), this._attachedPortal = t, this._attachedRef = i, this.attached.emit(i), i } }, { key: "attachTemplatePortal", value: function(t) { var e = this;
                                t.setAttachedHost(this); var r = this._viewContainerRef.createEmbeddedView(t.templateRef, t.context); return a(d(n.prototype), "setDisposeFn", this).call(this, (function() { return e._viewContainerRef.clear() })), this._attachedPortal = t, this._attachedRef = r, this.attached.emit(r), r } }, { key: "_getRootNode", value: function() { var t = this._viewContainerRef.element.nativeElement; return t.nodeType === t.ELEMENT_NODE ? t : t.parentNode } }]), n }(uv)).\u0275fac = function(t) { return new(t || Yd)(Bo(wa), Bo(Qa), Bo(ku)) }, Yd.\u0275dir = Re({ type: Yd, selectors: [
                            ["", "cdkPortalOutlet", ""]
                        ], inputs: { portal: ["cdkPortalOutlet", "portal"] }, outputs: { attached: "attached" }, exportAs: ["cdkPortalOutlet"], features: [va] }), Yd),
                    hv = ((Gd = function t() { v(this, t) }).\u0275mod = Oe({ type: Gd }), Gd.\u0275inj = St({ factory: function(t) { return new(t || Gd) } }), Gd),
                    fv = function() {
                        function t(e, n) { v(this, t), this._viewportRuler = e, this._previousHTMLStyles = { top: "", left: "" }, this._isEnabled = !1, this._document = n } return y(t, [{ key: "attach", value: function() {} }, { key: "enable", value: function() { if (this._canBeEnabled()) { var t = this._document.documentElement;
                                    this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(), this._previousHTMLStyles.left = t.style.left || "", this._previousHTMLStyles.top = t.style.top || "", t.style.left = Cd(-this._previousScrollPosition.left), t.style.top = Cd(-this._previousScrollPosition.top), t.classList.add("cdk-global-scrollblock"), this._isEnabled = !0 } } }, { key: "disable", value: function() { if (this._isEnabled) { var t = this._document.documentElement,
                                        e = t.style,
                                        n = this._document.body.style,
                                        r = e.scrollBehavior || "",
                                        i = n.scrollBehavior || "";
                                    this._isEnabled = !1, e.left = this._previousHTMLStyles.left, e.top = this._previousHTMLStyles.top, t.classList.remove("cdk-global-scrollblock"), e.scrollBehavior = n.scrollBehavior = "auto", window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top), e.scrollBehavior = r, n.scrollBehavior = i } } }, { key: "_canBeEnabled", value: function() { if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled) return !1; var t = this._document.body,
                                    e = this._viewportRuler.getViewportSize(); return t.scrollHeight > e.height || t.scrollWidth > e.width } }]), t }(),
                    dv = function() {
                        function t(e, n, r, i) { var o = this;
                            v(this, t), this._scrollDispatcher = e, this._ngZone = n, this._viewportRuler = r, this._config = i, this._scrollSubscription = null, this._detach = function() { o.disable(), o._overlayRef.hasAttached() && o._ngZone.run((function() { return o._overlayRef.detach() })) } } return y(t, [{ key: "attach", value: function(t) { this._overlayRef = t } }, { key: "enable", value: function() { var t = this; if (!this._scrollSubscription) { var e = this._scrollDispatcher.scrolled(0);
                                    this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top, this._scrollSubscription = e.subscribe((function() { var e = t._viewportRuler.getViewportScrollPosition().top;
                                        Math.abs(e - t._initialScrollPosition) > t._config.threshold ? t._detach() : t._overlayRef.updatePosition() }))) : this._scrollSubscription = e.subscribe(this._detach) } } }, { key: "disable", value: function() { this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null) } }, { key: "detach", value: function() { this.disable(), this._overlayRef = null } }]), t }(),
                    vv = function() {
                        function t() { v(this, t) } return y(t, [{ key: "enable", value: function() {} }, { key: "disable", value: function() {} }, { key: "attach", value: function() {} }]), t }();

                function pv(t, e) { return e.some((function(e) { return t.bottom < e.top || t.top > e.bottom || t.right < e.left || t.left > e.right })) }

                function yv(t, e) { return e.some((function(e) { return t.top < e.top || t.bottom > e.bottom || t.left < e.left || t.right > e.right })) } var gv, mv, _v, kv, wv, bv = function() {
                        function t(e, n, r, i) { v(this, t), this._scrollDispatcher = e, this._viewportRuler = n, this._ngZone = r, this._config = i, this._scrollSubscription = null } return y(t, [{ key: "attach", value: function(t) { this._overlayRef = t } }, { key: "enable", value: function() { var t = this;
                                this._scrollSubscription || (this._scrollSubscription = this._scrollDispatcher.scrolled(this._config ? this._config.scrollThrottle : 0).subscribe((function() { if (t._overlayRef.updatePosition(), t._config && t._config.autoClose) { var e = t._overlayRef.overlayElement.getBoundingClientRect(),
                                            n = t._viewportRuler.getViewportSize(),
                                            r = n.width,
                                            i = n.height;
                                        pv(e, [{ width: r, height: i, bottom: i, right: r, top: 0, left: 0 }]) && (t.disable(), t._ngZone.run((function() { return t._overlayRef.detach() }))) } }))) } }, { key: "disable", value: function() { this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null) } }, { key: "detach", value: function() { this.disable(), this._overlayRef = null } }]), t }(),
                    Sv = ((gv = function t(e, n, r, i) { var o = this;
                        v(this, t), this._scrollDispatcher = e, this._viewportRuler = n, this._ngZone = r, this.noop = function() { return new vv }, this.close = function(t) { return new dv(o._scrollDispatcher, o._ngZone, o._viewportRuler, t) }, this.block = function() { return new fv(o._viewportRuler, o._document) }, this.reposition = function(t) { return new bv(o._scrollDispatcher, o._viewportRuler, o._ngZone, t) }, this._document = i }).\u0275fac = function(t) { return new(t || gv)(ae(tv), ae(ev), ae(Us), ae(ku)) }, gv.\u0275prov = bt({ factory: function() { return new gv(ae(tv), ae(ev), ae(Us), ae(ku)) }, token: gv, providedIn: "root" }), gv),
                    Cv = function t(e) { if (v(this, t), this.scrollStrategy = new vv, this.panelClass = "", this.hasBackdrop = !1, this.backdropClass = "cdk-overlay-dark-backdrop", this.disposeOnNavigation = !1, e)
                            for (var n = 0, r = Object.keys(e); n < r.length; n++) { var i = r[n];
                                void 0 !== e[i] && (this[i] = e[i]) } },
                    Ev = function t(e, n, r, i, o) { v(this, t), this.offsetX = r, this.offsetY = i, this.panelClass = o, this.originX = e.originX, this.originY = e.originY, this.overlayX = n.overlayX, this.overlayY = n.overlayY },
                    xv = function t(e, n) { v(this, t), this.connectionPair = e, this.scrollableViewProperties = n },
                    Tv = ((kv = function() {
                        function t(e) { v(this, t), this._attachedOverlays = [], this._document = e } return y(t, [{ key: "ngOnDestroy", value: function() { this.detach() } }, { key: "add", value: function(t) { this.remove(t), this._attachedOverlays.push(t) } }, { key: "remove", value: function(t) { var e = this._attachedOverlays.indexOf(t);
                                e > -1 && this._attachedOverlays.splice(e, 1), 0 === this._attachedOverlays.length && this.detach() } }]), t }()).\u0275fac = function(t) { return new(t || kv)(ae(ku)) }, kv.\u0275prov = bt({ factory: function() { return new kv(ae(ku)) }, token: kv, providedIn: "root" }), kv),
                    Av = ((_v = function(t) { s(n, t); var e = l(n);

                        function n(t) { var r; return v(this, n), (r = e.call(this, t))._keydownListener = function(t) { for (var e = r._attachedOverlays, n = e.length - 1; n > -1; n--)
                                    if (e[n]._keydownEvents.observers.length > 0) { e[n]._keydownEvents.next(t); break } }, r } return y(n, [{ key: "add", value: function(t) { a(d(n.prototype), "add", this).call(this, t), this._isAttached || (this._document.body.addEventListener("keydown", this._keydownListener), this._isAttached = !0) } }, { key: "detach", value: function() { this._isAttached && (this._document.body.removeEventListener("keydown", this._keydownListener), this._isAttached = !1) } }]), n }(Tv)).\u0275fac = function(t) { return new(t || _v)(ae(ku)) }, _v.\u0275prov = bt({ factory: function() { return new _v(ae(ku)) }, token: _v, providedIn: "root" }), _v),
                    Ov = ((mv = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this, t))._platform = r, i._cursorStyleIsSet = !1, i._clickListener = function(t) { for (var e = t.composedPath ? t.composedPath()[0] : t.target, n = i._attachedOverlays.slice(), r = n.length - 1; r > -1; r--) { var o = n[r]; if (!(o._outsidePointerEvents.observers.length < 1) && o.hasAttached()) { if (o.overlayElement.contains(e)) break;
                                        o._outsidePointerEvents.next(t) } } }, i } return y(n, [{ key: "add", value: function(t) { a(d(n.prototype), "add", this).call(this, t), this._isAttached || (this._document.body.addEventListener("click", this._clickListener, !0), this._document.body.addEventListener("contextmenu", this._clickListener, !0), this._platform.IOS && !this._cursorStyleIsSet && (this._cursorOriginalValue = this._document.body.style.cursor, this._document.body.style.cursor = "pointer", this._cursorStyleIsSet = !0), this._isAttached = !0) } }, { key: "detach", value: function() { this._isAttached && (this._document.body.removeEventListener("click", this._clickListener, !0), this._document.body.removeEventListener("contextmenu", this._clickListener, !0), this._platform.IOS && this._cursorStyleIsSet && (this._document.body.style.cursor = this._cursorOriginalValue, this._cursorStyleIsSet = !1), this._isAttached = !1) } }]), n }(Tv)).\u0275fac = function(t) { return new(t || mv)(ae(ku), ae(Vd)) }, mv.\u0275prov = bt({ factory: function() { return new mv(ae(ku), ae(Vd)) }, token: mv, providedIn: "root" }), mv),
                    Pv = !("undefined" == typeof window || !window || !window.__karma__ && !window.jasmine),
                    Rv = ((wv = function() {
                        function t(e, n) { v(this, t), this._platform = n, this._document = e } return y(t, [{ key: "ngOnDestroy", value: function() { var t = this._containerElement;
                                t && t.parentNode && t.parentNode.removeChild(t) } }, { key: "getContainerElement", value: function() { return this._containerElement || this._createContainer(), this._containerElement } }, { key: "_createContainer", value: function() { var t = this._platform ? this._platform.isBrowser : "undefined" != typeof window; if (t || Pv)
                                    for (var e = this._document.querySelectorAll('.cdk-overlay-container[platform="server"], .cdk-overlay-container[platform="test"]'), n = 0; n < e.length; n++) e[n].parentNode.removeChild(e[n]); var r = this._document.createElement("div");
                                r.classList.add("cdk-overlay-container"), Pv ? r.setAttribute("platform", "test") : t || r.setAttribute("platform", "server"), this._document.body.appendChild(r), this._containerElement = r } }]), t }()).\u0275fac = function(t) { return new(t || wv)(ae(ku), ae(Vd)) }, wv.\u0275prov = bt({ factory: function() { return new wv(ae(ku), ae(Vd)) }, token: wv, providedIn: "root" }), wv),
                    Iv = function() {
                        function t(e, n, r, i, o, a, s, u, l) { var c = this;
                            v(this, t), this._portalOutlet = e, this._host = n, this._pane = r, this._config = i, this._ngZone = o, this._keyboardDispatcher = a, this._document = s, this._location = u, this._outsideClickDispatcher = l, this._backdropElement = null, this._backdropClick = new M, this._attachments = new M, this._detachments = new M, this._locationChanges = C.EMPTY, this._backdropClickHandler = function(t) { return c._backdropClick.next(t) }, this._keydownEvents = new M, this._outsidePointerEvents = new M, i.scrollStrategy && (this._scrollStrategy = i.scrollStrategy, this._scrollStrategy.attach(this)), this._positionStrategy = i.positionStrategy } return y(t, [{ key: "overlayElement", get: function() { return this._pane } }, { key: "backdropElement", get: function() { return this._backdropElement } }, { key: "hostElement", get: function() { return this._host } }, { key: "attach", value: function(t) { var e = this,
                                    n = this._portalOutlet.attach(t); return !this._host.parentElement && this._previousHostParent && this._previousHostParent.appendChild(this._host), this._positionStrategy && this._positionStrategy.attach(this), this._updateStackingOrder(), this._updateElementSize(), this._updateElementDirection(), this._scrollStrategy && this._scrollStrategy.enable(), this._ngZone.onStable.pipe(hc(1)).subscribe((function() { e.hasAttached() && e.updatePosition() })), this._togglePointerEvents(!0), this._config.hasBackdrop && this._attachBackdrop(), this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0), this._attachments.next(), this._keyboardDispatcher.add(this), this._config.disposeOnNavigation && this._location && (this._locationChanges = this._location.subscribe((function() { return e.dispose() }))), this._outsideClickDispatcher && this._outsideClickDispatcher.add(this), n } }, { key: "detach", value: function() { if (this.hasAttached()) { this.detachBackdrop(), this._togglePointerEvents(!1), this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(), this._scrollStrategy && this._scrollStrategy.disable(); var t = this._portalOutlet.detach(); return this._detachments.next(), this._keyboardDispatcher.remove(this), this._detachContentWhenStable(), this._locationChanges.unsubscribe(), this._outsideClickDispatcher && this._outsideClickDispatcher.remove(this), t } } }, { key: "dispose", value: function() { var t = this.hasAttached();
                                this._positionStrategy && this._positionStrategy.dispose(), this._disposeScrollStrategy(), this.detachBackdrop(), this._locationChanges.unsubscribe(), this._keyboardDispatcher.remove(this), this._portalOutlet.dispose(), this._attachments.complete(), this._backdropClick.complete(), this._keydownEvents.complete(), this._outsidePointerEvents.complete(), this._outsideClickDispatcher && this._outsideClickDispatcher.remove(this), this._host && this._host.parentNode && (this._host.parentNode.removeChild(this._host), this._host = null), this._previousHostParent = this._pane = null, t && this._detachments.next(), this._detachments.complete() } }, { key: "hasAttached", value: function() { return this._portalOutlet.hasAttached() } }, { key: "backdropClick", value: function() { return this._backdropClick } }, { key: "attachments", value: function() { return this._attachments } }, { key: "detachments", value: function() { return this._detachments } }, { key: "keydownEvents", value: function() { return this._keydownEvents } }, { key: "outsidePointerEvents", value: function() { return this._outsidePointerEvents } }, { key: "getConfig", value: function() { return this._config } }, { key: "updatePosition", value: function() { this._positionStrategy && this._positionStrategy.apply() } }, { key: "updatePositionStrategy", value: function(t) { t !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(), this._positionStrategy = t, this.hasAttached() && (t.attach(this), this.updatePosition())) } }, { key: "updateSize", value: function(t) { this._config = Object.assign(Object.assign({}, this._config), t), this._updateElementSize() } }, { key: "setDirection", value: function(t) { this._config = Object.assign(Object.assign({}, this._config), { direction: t }), this._updateElementDirection() } }, { key: "addPanelClass", value: function(t) { this._pane && this._toggleClasses(this._pane, t, !0) } }, { key: "removePanelClass", value: function(t) { this._pane && this._toggleClasses(this._pane, t, !1) } }, { key: "getDirection", value: function() { var t = this._config.direction; return t ? "string" == typeof t ? t : t.value : "ltr" } }, { key: "updateScrollStrategy", value: function(t) { t !== this._scrollStrategy && (this._disposeScrollStrategy(), this._scrollStrategy = t, this.hasAttached() && (t.attach(this), t.enable())) } }, { key: "_updateElementDirection", value: function() { this._host.setAttribute("dir", this.getDirection()) } }, { key: "_updateElementSize", value: function() { if (this._pane) { var t = this._pane.style;
                                    t.width = Cd(this._config.width), t.height = Cd(this._config.height), t.minWidth = Cd(this._config.minWidth), t.minHeight = Cd(this._config.minHeight), t.maxWidth = Cd(this._config.maxWidth), t.maxHeight = Cd(this._config.maxHeight) } } }, { key: "_togglePointerEvents", value: function(t) { this._pane.style.pointerEvents = t ? "auto" : "none" } }, { key: "_attachBackdrop", value: function() { var t = this;
                                this._backdropElement = this._document.createElement("div"), this._backdropElement.classList.add("cdk-overlay-backdrop"), this._config.backdropClass && this._toggleClasses(this._backdropElement, this._config.backdropClass, !0), this._host.parentElement.insertBefore(this._backdropElement, this._host), this._backdropElement.addEventListener("click", this._backdropClickHandler), "undefined" != typeof requestAnimationFrame ? this._ngZone.runOutsideAngular((function() { requestAnimationFrame((function() { t._backdropElement && t._backdropElement.classList.add("cdk-overlay-backdrop-showing") })) })) : this._backdropElement.classList.add("cdk-overlay-backdrop-showing") } }, { key: "_updateStackingOrder", value: function() { this._host.nextSibling && this._host.parentNode.appendChild(this._host) } }, { key: "detachBackdrop", value: function() { var t, e = this,
                                    n = this._backdropElement; if (n) { var r = function r() { n && (n.removeEventListener("click", e._backdropClickHandler), n.removeEventListener("transitionend", r), n.parentNode && n.parentNode.removeChild(n)), e._backdropElement == n && (e._backdropElement = null), e._config.backdropClass && e._toggleClasses(n, e._config.backdropClass, !1), clearTimeout(t) };
                                    n.classList.remove("cdk-overlay-backdrop-showing"), this._ngZone.runOutsideAngular((function() { n.addEventListener("transitionend", r) })), n.style.pointerEvents = "none", t = this._ngZone.runOutsideAngular((function() { return setTimeout(r, 500) })) } } }, { key: "_toggleClasses", value: function(t, e, n) { var r = t.classList;
                                Sd(e).forEach((function(t) { t && (n ? r.add(t) : r.remove(t)) })) } }, { key: "_detachContentWhenStable", value: function() { var t = this;
                                this._ngZone.runOutsideAngular((function() { var e, n = t._ngZone.onStable.pipe((e = ot(t._attachments, t._detachments), function(t) { return t.lift(new jd(e)) })).subscribe((function() { t._pane && t._host && 0 !== t._pane.children.length || (t._pane && t._config.panelClass && t._toggleClasses(t._pane, t._config.panelClass, !1), t._host && t._host.parentElement && (t._previousHostParent = t._host.parentElement, t._previousHostParent.removeChild(t._host)), n.unsubscribe()) })) })) } }, { key: "_disposeScrollStrategy", value: function() { var t = this._scrollStrategy;
                                t && (t.disable(), t.detach && t.detach()) } }]), t }(),
                    Dv = /([A-Za-z%]+)$/,
                    Nv = function() {
                        function t(e, n, r, i, o) { v(this, t), this._viewportRuler = n, this._document = r, this._platform = i, this._overlayContainer = o, this._lastBoundingBoxSize = { width: 0, height: 0 }, this._isPushed = !1, this._canPush = !0, this._growAfterOpen = !1, this._hasFlexibleDimensions = !0, this._positionLocked = !1, this._viewportMargin = 0, this._scrollables = [], this._preferredPositions = [], this._positionChanges = new M, this._resizeSubscription = C.EMPTY, this._offsetX = 0, this._offsetY = 0, this._appliedPanelClasses = [], this.positionChanges = this._positionChanges, this.setOrigin(e) } return y(t, [{ key: "positions", get: function() { return this._preferredPositions } }, { key: "attach", value: function(t) { var e = this;
                                this._validatePositions(), t.hostElement.classList.add("cdk-overlay-connected-position-bounding-box"), this._overlayRef = t, this._boundingBox = t.hostElement, this._pane = t.overlayElement, this._isDisposed = !1, this._isInitialRender = !0, this._lastPosition = null, this._resizeSubscription.unsubscribe(), this._resizeSubscription = this._viewportRuler.change().subscribe((function() { e._isInitialRender = !0, e.apply() })) } }, { key: "apply", value: function() { if (!this._isDisposed && this._platform.isBrowser)
                                    if (!this._isInitialRender && this._positionLocked && this._lastPosition) this.reapplyLastPosition();
                                    else { this._clearPanelClasses(), this._resetOverlayElementStyles(), this._resetBoundingBoxStyles(), this._viewportRect = this._getNarrowedViewportRect(), this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(); var t, n, r = this._originRect,
                                            i = this._overlayRect,
                                            o = this._viewportRect,
                                            a = [],
                                            s = e(this._preferredPositions); try { for (s.s(); !(n = s.n()).done;) { var u = n.value,
                                                    l = this._getOriginPoint(r, u),
                                                    c = this._getOverlayPoint(l, i, u),
                                                    h = this._getOverlayFit(c, i, o, u); if (h.isCompletelyWithinViewport) return this._isPushed = !1, void this._applyPosition(u, l);
                                                this._canFitWithFlexibleDimensions(h, c, o) ? a.push({ position: u, origin: l, overlayRect: i, boundingBoxRect: this._calculateBoundingBoxRect(l, u) }) : (!t || t.overlayFit.visibleArea < h.visibleArea) && (t = { overlayFit: h, overlayPoint: c, originPoint: l, position: u, overlayRect: i }) } } catch (m) { s.e(m) } finally { s.f() } if (a.length) { var f, d = null,
                                                v = -1,
                                                p = e(a); try { for (p.s(); !(f = p.n()).done;) { var y = f.value,
                                                        g = y.boundingBoxRect.width * y.boundingBoxRect.height * (y.position.weight || 1);
                                                    g > v && (v = g, d = y) } } catch (m) { p.e(m) } finally { p.f() } return this._isPushed = !1, void this._applyPosition(d.position, d.origin) } if (this._canPush) return this._isPushed = !0, void this._applyPosition(t.position, t.originPoint);
                                        this._applyPosition(t.position, t.originPoint) } } }, { key: "detach", value: function() { this._clearPanelClasses(), this._lastPosition = null, this._previousPushAmount = null, this._resizeSubscription.unsubscribe() } }, { key: "dispose", value: function() { this._isDisposed || (this._boundingBox && jv(this._boundingBox.style, { top: "", left: "", right: "", bottom: "", height: "", width: "", alignItems: "", justifyContent: "" }), this._pane && this._resetOverlayElementStyles(), this._overlayRef && this._overlayRef.hostElement.classList.remove("cdk-overlay-connected-position-bounding-box"), this.detach(), this._positionChanges.complete(), this._overlayRef = this._boundingBox = null, this._isDisposed = !0) } }, { key: "reapplyLastPosition", value: function() { if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) { this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._viewportRect = this._getNarrowedViewportRect(); var t = this._lastPosition || this._preferredPositions[0],
                                        e = this._getOriginPoint(this._originRect, t);
                                    this._applyPosition(t, e) } } }, { key: "withScrollableContainers", value: function(t) { return this._scrollables = t, this } }, { key: "withPositions", value: function(t) { return this._preferredPositions = t, -1 === t.indexOf(this._lastPosition) && (this._lastPosition = null), this._validatePositions(), this } }, { key: "withViewportMargin", value: function(t) { return this._viewportMargin = t, this } }, { key: "withFlexibleDimensions", value: function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return this._hasFlexibleDimensions = t, this } }, { key: "withGrowAfterOpen", value: function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return this._growAfterOpen = t, this } }, { key: "withPush", value: function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return this._canPush = t, this } }, { key: "withLockedPosition", value: function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return this._positionLocked = t, this } }, { key: "setOrigin", value: function(t) { return this._origin = t, this } }, { key: "withDefaultOffsetX", value: function(t) { return this._offsetX = t, this } }, { key: "withDefaultOffsetY", value: function(t) { return this._offsetY = t, this } }, { key: "withTransformOriginOn", value: function(t) { return this._transformOriginSelector = t, this } }, { key: "_getOriginPoint", value: function(t, e) { var n; if ("center" == e.originX) n = t.left + t.width / 2;
                                else { var r = this._isRtl() ? t.right : t.left,
                                        i = this._isRtl() ? t.left : t.right;
                                    n = "start" == e.originX ? r : i } return { x: n, y: "center" == e.originY ? t.top + t.height / 2 : "top" == e.originY ? t.top : t.bottom } } }, { key: "_getOverlayPoint", value: function(t, e, n) { var r, i; return r = "center" == n.overlayX ? -e.width / 2 : "start" === n.overlayX ? this._isRtl() ? -e.width : 0 : this._isRtl() ? 0 : -e.width, i = "center" == n.overlayY ? -e.height / 2 : "top" == n.overlayY ? 0 : -e.height, { x: t.x + r, y: t.y + i } } }, { key: "_getOverlayFit", value: function(t, e, n, r) { var i = t.x,
                                    o = t.y,
                                    a = this._getOffset(r, "x"),
                                    s = this._getOffset(r, "y");
                                a && (i += a), s && (o += s); var u = 0 - o,
                                    l = o + e.height - n.height,
                                    c = this._subtractOverflows(e.width, 0 - i, i + e.width - n.width),
                                    h = this._subtractOverflows(e.height, u, l),
                                    f = c * h; return { visibleArea: f, isCompletelyWithinViewport: e.width * e.height === f, fitsInViewportVertically: h === e.height, fitsInViewportHorizontally: c == e.width } } }, { key: "_canFitWithFlexibleDimensions", value: function(t, e, n) { if (this._hasFlexibleDimensions) { var r = n.bottom - e.y,
                                        i = n.right - e.x,
                                        o = Fv(this._overlayRef.getConfig().minHeight),
                                        a = Fv(this._overlayRef.getConfig().minWidth),
                                        s = t.fitsInViewportHorizontally || null != a && a <= i; return (t.fitsInViewportVertically || null != o && o <= r) && s } return !1 } }, { key: "_pushOverlayOnScreen", value: function(t, e, n) { if (this._previousPushAmount && this._positionLocked) return { x: t.x + this._previousPushAmount.x, y: t.y + this._previousPushAmount.y }; var r, i, o = this._viewportRect,
                                    a = Math.max(t.x + e.width - o.width, 0),
                                    s = Math.max(t.y + e.height - o.height, 0),
                                    u = Math.max(o.top - n.top - t.y, 0),
                                    l = Math.max(o.left - n.left - t.x, 0); return r = e.width <= o.width ? l || -a : t.x < this._viewportMargin ? o.left - n.left - t.x : 0, i = e.height <= o.height ? u || -s : t.y < this._viewportMargin ? o.top - n.top - t.y : 0, this._previousPushAmount = { x: r, y: i }, { x: t.x + r, y: t.y + i } } }, { key: "_applyPosition", value: function(t, e) { if (this._setTransformOrigin(t), this._setOverlayElementStyles(e, t), this._setBoundingBoxStyles(e, t), t.panelClass && this._addPanelClasses(t.panelClass), this._lastPosition = t, this._positionChanges.observers.length) { var n = this._getScrollVisibility(),
                                        r = new xv(t, n);
                                    this._positionChanges.next(r) }
                                this._isInitialRender = !1 } }, { key: "_setTransformOrigin", value: function(t) { if (this._transformOriginSelector) { var e, n = this._boundingBox.querySelectorAll(this._transformOriginSelector),
                                        r = t.overlayY;
                                    e = "center" === t.overlayX ? "center" : this._isRtl() ? "start" === t.overlayX ? "right" : "left" : "start" === t.overlayX ? "left" : "right"; for (var i = 0; i < n.length; i++) n[i].style.transformOrigin = "".concat(e, " ").concat(r) } } }, { key: "_calculateBoundingBoxRect", value: function(t, e) { var n, r, i, o, a, s, u = this._viewportRect,
                                    l = this._isRtl(); if ("top" === e.overlayY) r = t.y, n = u.height - r + this._viewportMargin;
                                else if ("bottom" === e.overlayY) i = u.height - t.y + 2 * this._viewportMargin, n = u.height - i + this._viewportMargin;
                                else { var c = Math.min(u.bottom - t.y + u.top, t.y),
                                        h = this._lastBoundingBoxSize.height;
                                    n = 2 * c, r = t.y - c, n > h && !this._isInitialRender && !this._growAfterOpen && (r = t.y - h / 2) } if ("end" === e.overlayX && !l || "start" === e.overlayX && l) s = u.width - t.x + this._viewportMargin, o = t.x - this._viewportMargin;
                                else if ("start" === e.overlayX && !l || "end" === e.overlayX && l) a = t.x, o = u.right - t.x;
                                else { var f = Math.min(u.right - t.x + u.left, t.x),
                                        d = this._lastBoundingBoxSize.width;
                                    o = 2 * f, a = t.x - f, o > d && !this._isInitialRender && !this._growAfterOpen && (a = t.x - d / 2) } return { top: r, left: a, bottom: i, right: s, width: o, height: n } } }, { key: "_setBoundingBoxStyles", value: function(t, e) { var n = this._calculateBoundingBoxRect(t, e);
                                this._isInitialRender || this._growAfterOpen || (n.height = Math.min(n.height, this._lastBoundingBoxSize.height), n.width = Math.min(n.width, this._lastBoundingBoxSize.width)); var r = {}; if (this._hasExactPosition()) r.top = r.left = "0", r.bottom = r.right = r.maxHeight = r.maxWidth = "", r.width = r.height = "100%";
                                else { var i = this._overlayRef.getConfig().maxHeight,
                                        o = this._overlayRef.getConfig().maxWidth;
                                    r.height = Cd(n.height), r.top = Cd(n.top), r.bottom = Cd(n.bottom), r.width = Cd(n.width), r.left = Cd(n.left), r.right = Cd(n.right), r.alignItems = "center" === e.overlayX ? "center" : "end" === e.overlayX ? "flex-end" : "flex-start", r.justifyContent = "center" === e.overlayY ? "center" : "bottom" === e.overlayY ? "flex-end" : "flex-start", i && (r.maxHeight = Cd(i)), o && (r.maxWidth = Cd(o)) }
                                this._lastBoundingBoxSize = n, jv(this._boundingBox.style, r) } }, { key: "_resetBoundingBoxStyles", value: function() { jv(this._boundingBox.style, { top: "0", left: "0", right: "0", bottom: "0", height: "", width: "", alignItems: "", justifyContent: "" }) } }, { key: "_resetOverlayElementStyles", value: function() { jv(this._pane.style, { top: "", left: "", bottom: "", right: "", position: "", transform: "" }) } }, { key: "_setOverlayElementStyles", value: function(t, e) { var n = {},
                                    r = this._hasExactPosition(),
                                    i = this._hasFlexibleDimensions,
                                    o = this._overlayRef.getConfig(); if (r) { var a = this._viewportRuler.getViewportScrollPosition();
                                    jv(n, this._getExactOverlayY(e, t, a)), jv(n, this._getExactOverlayX(e, t, a)) } else n.position = "static"; var s = "",
                                    u = this._getOffset(e, "x"),
                                    l = this._getOffset(e, "y");
                                u && (s += "translateX(".concat(u, "px) ")), l && (s += "translateY(".concat(l, "px)")), n.transform = s.trim(), o.maxHeight && (r ? n.maxHeight = Cd(o.maxHeight) : i && (n.maxHeight = "")), o.maxWidth && (r ? n.maxWidth = Cd(o.maxWidth) : i && (n.maxWidth = "")), jv(this._pane.style, n) } }, { key: "_getExactOverlayY", value: function(t, e, n) { var r = { top: "", bottom: "" },
                                    i = this._getOverlayPoint(e, this._overlayRect, t);
                                this._isPushed && (i = this._pushOverlayOnScreen(i, this._overlayRect, n)); var o = this._overlayContainer.getContainerElement().getBoundingClientRect().top; return i.y -= o, "bottom" === t.overlayY ? r.bottom = this._document.documentElement.clientHeight - (i.y + this._overlayRect.height) + "px" : r.top = Cd(i.y), r } }, { key: "_getExactOverlayX", value: function(t, e, n) { var r = { left: "", right: "" },
                                    i = this._getOverlayPoint(e, this._overlayRect, t); return this._isPushed && (i = this._pushOverlayOnScreen(i, this._overlayRect, n)), "right" === (this._isRtl() ? "end" === t.overlayX ? "left" : "right" : "end" === t.overlayX ? "right" : "left") ? r.right = this._document.documentElement.clientWidth - (i.x + this._overlayRect.width) + "px" : r.left = Cd(i.x), r } }, { key: "_getScrollVisibility", value: function() { var t = this._getOriginRect(),
                                    e = this._pane.getBoundingClientRect(),
                                    n = this._scrollables.map((function(t) { return t.getElementRef().nativeElement.getBoundingClientRect() })); return { isOriginClipped: yv(t, n), isOriginOutsideView: pv(t, n), isOverlayClipped: yv(e, n), isOverlayOutsideView: pv(e, n) } } }, { key: "_subtractOverflows", value: function(t) { for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r]; return n.reduce((function(t, e) { return t - Math.max(e, 0) }), t) } }, { key: "_getNarrowedViewportRect", value: function() { var t = this._document.documentElement.clientWidth,
                                    e = this._document.documentElement.clientHeight,
                                    n = this._viewportRuler.getViewportScrollPosition(); return { top: n.top + this._viewportMargin, left: n.left + this._viewportMargin, right: n.left + t - this._viewportMargin, bottom: n.top + e - this._viewportMargin, width: t - 2 * this._viewportMargin, height: e - 2 * this._viewportMargin } } }, { key: "_isRtl", value: function() { return "rtl" === this._overlayRef.getDirection() } }, { key: "_hasExactPosition", value: function() { return !this._hasFlexibleDimensions || this._isPushed } }, { key: "_getOffset", value: function(t, e) { return "x" === e ? null == t.offsetX ? this._offsetX : t.offsetX : null == t.offsetY ? this._offsetY : t.offsetY } }, { key: "_validatePositions", value: function() {} }, { key: "_addPanelClasses", value: function(t) { var e = this;
                                this._pane && Sd(t).forEach((function(t) { "" !== t && -1 === e._appliedPanelClasses.indexOf(t) && (e._appliedPanelClasses.push(t), e._pane.classList.add(t)) })) } }, { key: "_clearPanelClasses", value: function() { var t = this;
                                this._pane && (this._appliedPanelClasses.forEach((function(e) { t._pane.classList.remove(e) })), this._appliedPanelClasses = []) } }, { key: "_getOriginRect", value: function() { var t = this._origin; if (t instanceof ba) return t.nativeElement.getBoundingClientRect(); if (t instanceof Element) return t.getBoundingClientRect(); var e = t.width || 0,
                                    n = t.height || 0; return { top: t.y, bottom: t.y + n, left: t.x, right: t.x + e, height: n, width: e } } }]), t }();

                function jv(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]); return t }

                function Fv(e) { if ("number" != typeof e && null != e) { var n = t(e.split(Dv), 2),
                            r = n[0],
                            i = n[1]; return i && "px" !== i ? null : parseFloat(r) } return e || null } var Lv, Mv, Hv, Bv, Vv = function() {
                        function t(e, n, r, i, o, a, s) { v(this, t), this._preferredPositions = [], this._positionStrategy = new Nv(r, i, o, a, s).withFlexibleDimensions(!1).withPush(!1).withViewportMargin(0), this.withFallbackPosition(e, n), this.onPositionChange = this._positionStrategy.positionChanges } return y(t, [{ key: "positions", get: function() { return this._preferredPositions } }, { key: "attach", value: function(t) { this._overlayRef = t, this._positionStrategy.attach(t), this._direction && (t.setDirection(this._direction), this._direction = null) } }, { key: "dispose", value: function() { this._positionStrategy.dispose() } }, { key: "detach", value: function() { this._positionStrategy.detach() } }, { key: "apply", value: function() { this._positionStrategy.apply() } }, { key: "recalculateLastPosition", value: function() { this._positionStrategy.reapplyLastPosition() } }, { key: "withScrollableContainers", value: function(t) { this._positionStrategy.withScrollableContainers(t) } }, { key: "withFallbackPosition", value: function(t, e, n, r) { var i = new Ev(t, e, n, r); return this._preferredPositions.push(i), this._positionStrategy.withPositions(this._preferredPositions), this } }, { key: "withDirection", value: function(t) { return this._overlayRef ? this._overlayRef.setDirection(t) : this._direction = t, this } }, { key: "withOffsetX", value: function(t) { return this._positionStrategy.withDefaultOffsetX(t), this } }, { key: "withOffsetY", value: function(t) { return this._positionStrategy.withDefaultOffsetY(t), this } }, { key: "withLockedPosition", value: function(t) { return this._positionStrategy.withLockedPosition(t), this } }, { key: "withPositions", value: function(t) { return this._preferredPositions = t.slice(), this._positionStrategy.withPositions(this._preferredPositions), this } }, { key: "setOrigin", value: function(t) { return this._positionStrategy.setOrigin(t), this } }]), t }(),
                    Uv = function() {
                        function t() { v(this, t), this._cssPosition = "static", this._topOffset = "", this._bottomOffset = "", this._leftOffset = "", this._rightOffset = "", this._alignItems = "", this._justifyContent = "", this._width = "", this._height = "" } return y(t, [{ key: "attach", value: function(t) { var e = t.getConfig();
                                this._overlayRef = t, this._width && !e.width && t.updateSize({ width: this._width }), this._height && !e.height && t.updateSize({ height: this._height }), t.hostElement.classList.add("cdk-global-overlay-wrapper"), this._isDisposed = !1 } }, { key: "top", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return this._bottomOffset = "", this._topOffset = t, this._alignItems = "flex-start", this } }, { key: "left", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return this._rightOffset = "", this._leftOffset = t, this._justifyContent = "flex-start", this } }, { key: "bottom", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return this._topOffset = "", this._bottomOffset = t, this._alignItems = "flex-end", this } }, { key: "right", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return this._leftOffset = "", this._rightOffset = t, this._justifyContent = "flex-end", this } }, { key: "width", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return this._overlayRef ? this._overlayRef.updateSize({ width: t }) : this._width = t, this } }, { key: "height", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return this._overlayRef ? this._overlayRef.updateSize({ height: t }) : this._height = t, this } }, { key: "centerHorizontally", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return this.left(t), this._justifyContent = "center", this } }, { key: "centerVertically", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return this.top(t), this._alignItems = "center", this } }, { key: "apply", value: function() { if (this._overlayRef && this._overlayRef.hasAttached()) { var t = this._overlayRef.overlayElement.style,
                                        e = this._overlayRef.hostElement.style,
                                        n = this._overlayRef.getConfig(),
                                        r = n.width,
                                        i = n.height,
                                        o = n.maxWidth,
                                        a = n.maxHeight,
                                        s = !("100%" !== r && "100vw" !== r || o && "100%" !== o && "100vw" !== o),
                                        u = !("100%" !== i && "100vh" !== i || a && "100%" !== a && "100vh" !== a);
                                    t.position = this._cssPosition, t.marginLeft = s ? "0" : this._leftOffset, t.marginTop = u ? "0" : this._topOffset, t.marginBottom = this._bottomOffset, t.marginRight = this._rightOffset, s ? e.justifyContent = "flex-start" : "center" === this._justifyContent ? e.justifyContent = "center" : "rtl" === this._overlayRef.getConfig().direction ? "flex-start" === this._justifyContent ? e.justifyContent = "flex-end" : "flex-end" === this._justifyContent && (e.justifyContent = "flex-start") : e.justifyContent = this._justifyContent, e.alignItems = u ? "flex-start" : this._alignItems } } }, { key: "dispose", value: function() { if (!this._isDisposed && this._overlayRef) { var t = this._overlayRef.overlayElement.style,
                                        e = this._overlayRef.hostElement,
                                        n = e.style;
                                    e.classList.remove("cdk-global-overlay-wrapper"), n.justifyContent = n.alignItems = t.marginTop = t.marginBottom = t.marginLeft = t.marginRight = t.position = "", this._overlayRef = null, this._isDisposed = !0 } } }]), t }(),
                    zv = ((Mv = function() {
                        function t(e, n, r, i) { v(this, t), this._viewportRuler = e, this._document = n, this._platform = r, this._overlayContainer = i } return y(t, [{ key: "global", value: function() { return new Uv } }, { key: "connectedTo", value: function(t, e, n) { return new Vv(e, n, t, this._viewportRuler, this._document, this._platform, this._overlayContainer) } }, { key: "flexibleConnectedTo", value: function(t) { return new Nv(t, this._viewportRuler, this._document, this._platform, this._overlayContainer) } }]), t }()).\u0275fac = function(t) { return new(t || Mv)(ae(ev), ae(ku), ae(Vd), ae(Rv)) }, Mv.\u0275prov = bt({ factory: function() { return new Mv(ae(ev), ae(ku), ae(Vd), ae(Rv)) }, token: Mv, providedIn: "root" }), Mv),
                    qv = 0,
                    Wv = ((Lv = function() {
                        function t(e, n, r, i, o, a, s, u, l, c, h) { v(this, t), this.scrollStrategies = e, this._overlayContainer = n, this._componentFactoryResolver = r, this._positionBuilder = i, this._keyboardDispatcher = o, this._injector = a, this._ngZone = s, this._document = u, this._directionality = l, this._location = c, this._outsideClickDispatcher = h } return y(t, [{ key: "create", value: function(t) { var e = this._createHostElement(),
                                    n = this._createPaneElement(e),
                                    r = this._createPortalOutlet(n),
                                    i = new Cv(t); return i.direction = i.direction || this._directionality.value, new Iv(r, e, n, i, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher) } }, { key: "position", value: function() { return this._positionBuilder } }, { key: "_createPaneElement", value: function(t) { var e = this._document.createElement("div"); return e.id = "cdk-overlay-" + qv++, e.classList.add("cdk-overlay-pane"), t.appendChild(e), e } }, { key: "_createHostElement", value: function() { var t = this._document.createElement("div"); return this._overlayContainer.getContainerElement().appendChild(t), t } }, { key: "_createPortalOutlet", value: function(t) { return this._appRef || (this._appRef = this._injector.get(su)), new lv(t, this._componentFactoryResolver, this._appRef, this._injector, this._document) } }]), t }()).\u0275fac = function(t) { return new(t || Lv)(ae(Sv), ae(Rv), ae(wa), ae(zv), ae(Av), ae(Po), ae(Us), ae(ku), ae($d), ae(Bu), ae(Ov)) }, Lv.\u0275prov = bt({ token: Lv, factory: Lv.\u0275fac }), Lv),
                    Qv = { provide: new Xt("cdk-connected-overlay-scroll-strategy"), deps: [Wv], useFactory: function(t) { return function() { return t.scrollStrategies.reposition() } } },
                    Zv = ((Bv = function t() { v(this, t) }).\u0275mod = Oe({ type: Bv }), Bv.\u0275inj = St({ factory: function(t) { return new(t || Bv) }, providers: [Wv, Qv], imports: [
                            [Jd, hv, rv], rv
                        ] }), Bv),
                    Kv = ((Hv = function() {
                        function t(e) { v(this, t), this._platform = e } return y(t, [{ key: "isDisabled", value: function(t) { return t.hasAttribute("disabled") } }, { key: "isVisible", value: function(t) { return function(t) { return !!(t.offsetWidth || t.offsetHeight || "function" == typeof t.getClientRects && t.getClientRects().length) }(t) && "visible" === getComputedStyle(t).visibility } }, { key: "isTabbable", value: function(t) { if (!this._platform.isBrowser) return !1; var e, n = function(t) { try { return t.frameElement } catch (Am) { return null } }((e = t).ownerDocument && e.ownerDocument.defaultView || window); if (n) { if (-1 === Yv(n)) return !1; if (!this.isVisible(n)) return !1 } var r = t.nodeName.toLowerCase(),
                                    i = Yv(t); return t.hasAttribute("contenteditable") ? -1 !== i : "iframe" !== r && "object" !== r && !(this._platform.WEBKIT && this._platform.IOS && ! function(t) { var e = t.nodeName.toLowerCase(),
                                        n = "input" === e && t.type; return "text" === n || "password" === n || "select" === e || "textarea" === e }(t)) && ("audio" === r ? !!t.hasAttribute("controls") && -1 !== i : "video" === r ? -1 !== i && (null !== i || this._platform.FIREFOX || t.hasAttribute("controls")) : t.tabIndex >= 0) } }, { key: "isFocusable", value: function(t, e) { return function(t) { return ! function(t) { return function(t) { return "input" == t.nodeName.toLowerCase() }(t) && "hidden" == t.type }(t) && (function(t) { var e = t.nodeName.toLowerCase(); return "input" === e || "select" === e || "button" === e || "textarea" === e }(t) || function(t) { return function(t) { return "a" == t.nodeName.toLowerCase() }(t) && t.hasAttribute("href") }(t) || t.hasAttribute("contenteditable") || Gv(t)) }(t) && !this.isDisabled(t) && ((null == e ? void 0 : e.ignoreVisibility) || this.isVisible(t)) } }]), t }()).\u0275fac = function(t) { return new(t || Hv)(ae(Vd)) }, Hv.\u0275prov = bt({ factory: function() { return new Hv(ae(Vd)) }, token: Hv, providedIn: "root" }), Hv);

                function Gv(t) { if (!t.hasAttribute("tabindex") || void 0 === t.tabIndex) return !1; var e = t.getAttribute("tabindex"); return "-32768" != e && !(!e || isNaN(parseInt(e, 10))) }

                function Yv(t) { if (!Gv(t)) return null; var e = parseInt(t.getAttribute("tabindex") || "", 10); return isNaN(e) ? -1 : e } var Xv, $v = function() {
                        function t(e, n, r, i) { var o = this,
                                a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                            v(this, t), this._element = e, this._checker = n, this._ngZone = r, this._document = i, this._hasAttached = !1, this.startAnchorListener = function() { return o.focusLastTabbableElement() }, this.endAnchorListener = function() { return o.focusFirstTabbableElement() }, this._enabled = !0, a || this.attachAnchors() } return y(t, [{ key: "enabled", get: function() { return this._enabled }, set: function(t) { this._enabled = t, this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(t, this._startAnchor), this._toggleAnchorTabIndex(t, this._endAnchor)) } }, { key: "destroy", value: function() { var t = this._startAnchor,
                                    e = this._endAnchor;
                                t && (t.removeEventListener("focus", this.startAnchorListener), t.parentNode && t.parentNode.removeChild(t)), e && (e.removeEventListener("focus", this.endAnchorListener), e.parentNode && e.parentNode.removeChild(e)), this._startAnchor = this._endAnchor = null, this._hasAttached = !1 } }, { key: "attachAnchors", value: function() { var t = this; return !!this._hasAttached || (this._ngZone.runOutsideAngular((function() { t._startAnchor || (t._startAnchor = t._createAnchor(), t._startAnchor.addEventListener("focus", t.startAnchorListener)), t._endAnchor || (t._endAnchor = t._createAnchor(), t._endAnchor.addEventListener("focus", t.endAnchorListener)) })), this._element.parentNode && (this._element.parentNode.insertBefore(this._startAnchor, this._element), this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling), this._hasAttached = !0), this._hasAttached) } }, { key: "focusInitialElementWhenReady", value: function() { var t = this; return new Promise((function(e) { t._executeOnStable((function() { return e(t.focusInitialElement()) })) })) } }, { key: "focusFirstTabbableElementWhenReady", value: function() { var t = this; return new Promise((function(e) { t._executeOnStable((function() { return e(t.focusFirstTabbableElement()) })) })) } }, { key: "focusLastTabbableElementWhenReady", value: function() { var t = this; return new Promise((function(e) { t._executeOnStable((function() { return e(t.focusLastTabbableElement()) })) })) } }, { key: "_getRegionBoundary", value: function(t) { for (var e = this._element.querySelectorAll("[cdk-focus-region-".concat(t, "], [cdkFocusRegion").concat(t, "], [cdk-focus-").concat(t, "]")), n = 0; n < e.length; n++) e[n].hasAttribute("cdk-focus-" + t) ? console.warn("Found use of deprecated attribute 'cdk-focus-".concat(t, "', use 'cdkFocusRegion").concat(t, "' instead. The deprecated attribute will be removed in 8.0.0."), e[n]) : e[n].hasAttribute("cdk-focus-region-" + t) && console.warn("Found use of deprecated attribute 'cdk-focus-region-".concat(t, "', use 'cdkFocusRegion").concat(t, "' instead. The deprecated attribute will be removed in 8.0.0."), e[n]); return "start" == t ? e.length ? e[0] : this._getFirstTabbableElement(this._element) : e.length ? e[e.length - 1] : this._getLastTabbableElement(this._element) } }, { key: "focusInitialElement", value: function() { var t = this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]"); return t ? (t.hasAttribute("cdk-focus-initial") && console.warn("Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0", t), t.focus(), !0) : this.focusFirstTabbableElement() } }, { key: "focusFirstTabbableElement", value: function() { var t = this._getRegionBoundary("start"); return t && t.focus(), !!t } }, { key: "focusLastTabbableElement", value: function() { var t = this._getRegionBoundary("end"); return t && t.focus(), !!t } }, { key: "hasAttached", value: function() { return this._hasAttached } }, { key: "_getFirstTabbableElement", value: function(t) { if (this._checker.isFocusable(t) && this._checker.isTabbable(t)) return t; for (var e = t.children || t.childNodes, n = 0; n < e.length; n++) { var r = e[n].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(e[n]) : null; if (r) return r } return null } }, { key: "_getLastTabbableElement", value: function(t) { if (this._checker.isFocusable(t) && this._checker.isTabbable(t)) return t; for (var e = t.children || t.childNodes, n = e.length - 1; n >= 0; n--) { var r = e[n].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(e[n]) : null; if (r) return r } return null } }, { key: "_createAnchor", value: function() { var t = this._document.createElement("div"); return this._toggleAnchorTabIndex(this._enabled, t), t.classList.add("cdk-visually-hidden"), t.classList.add("cdk-focus-trap-anchor"), t.setAttribute("aria-hidden", "true"), t } }, { key: "_toggleAnchorTabIndex", value: function(t, e) { t ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex") } }, { key: "toggleAnchors", value: function(t) { this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(t, this._startAnchor), this._toggleAnchorTabIndex(t, this._endAnchor)) } }, { key: "_executeOnStable", value: function(t) { this._ngZone.isStable ? t() : this._ngZone.onStable.pipe(hc(1)).subscribe(t) } }]), t }(),
                    Jv = ((Xv = function() {
                        function t(e, n, r) { v(this, t), this._checker = e, this._ngZone = n, this._document = r } return y(t, [{ key: "create", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return new $v(t, this._checker, this._ngZone, this._document, e) } }]), t }()).\u0275fac = function(t) { return new(t || Xv)(ae(Kv), ae(Us), ae(ku)) }, Xv.\u0275prov = bt({ factory: function() { return new Xv(ae(Kv), ae(Us), ae(ku)) }, token: Xv, providedIn: "root" }), Xv); "undefined" != typeof Element && Element; var tp, ep, np = new Xt("cdk-focus-monitor-default-options"),
                    rp = (tp = { passive: !0, capture: !0 }, function() { if (null == Ld && "undefined" != typeof window) try { window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function() { return Ld = !0 } })) } finally { Ld = Ld || !1 }
                        return Ld }() ? tp : !!tp.capture),
                    ip = ((ep = function() {
                        function t(e, n, r, i) { var o = this;
                            v(this, t), this._ngZone = e, this._platform = n, this._origin = null, this._windowFocused = !1, this._elementInfo = new Map, this._monitoredElementCount = 0, this._rootNodeFocusListenerCount = new Map, this._documentKeydownListener = function() { o._lastTouchTarget = null, o._setOriginForCurrentEventQueue("keyboard") }, this._documentMousedownListener = function(t) { if (!o._lastTouchTarget) { var e = function(t) { return 0 === t.buttons }(t) ? "keyboard" : "mouse";
                                    o._setOriginForCurrentEventQueue(e) } }, this._documentTouchstartListener = function(t) { null != o._touchTimeoutId && clearTimeout(o._touchTimeoutId), o._lastTouchTarget = op(t), o._touchTimeoutId = setTimeout((function() { return o._lastTouchTarget = null }), 650) }, this._windowFocusListener = function() { o._windowFocused = !0, o._windowFocusTimeoutId = setTimeout((function() { return o._windowFocused = !1 })) }, this._rootNodeFocusAndBlurListener = function(t) { for (var e = op(t), n = "focus" === t.type ? o._onFocus : o._onBlur, r = e; r; r = r.parentElement) n.call(o, t, r) }, this._document = r, this._detectionMode = (null == i ? void 0 : i.detectionMode) || 0 } return y(t, [{ key: "monitor", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = Ed(t); if (!this._platform.isBrowser || 1 !== n.nodeType) return Ml(null); var r = function(t) { if (function() { if (null == Md) { var t = "undefined" != typeof document ? document.head : null;
                                                    Md = !(!t || !t.createShadowRoot && !t.attachShadow) } return Md }()) { var e = t.getRootNode ? t.getRootNode() : null; if ("undefined" != typeof ShadowRoot && ShadowRoot && e instanceof ShadowRoot) return e } return null }(n) || this._getDocument(),
                                    i = this._elementInfo.get(n); if (i) return e && (i.checkChildren = !0), i.subject; var o = { checkChildren: e, subject: new M, rootNode: r }; return this._elementInfo.set(n, o), this._registerGlobalListeners(o), o.subject } }, { key: "stopMonitoring", value: function(t) { var e = Ed(t),
                                    n = this._elementInfo.get(e);
                                n && (n.subject.complete(), this._setClasses(e), this._elementInfo.delete(e), this._removeGlobalListeners(n)) } }, { key: "focusVia", value: function(t, e, n) { var r = Ed(t);
                                this._setOriginForCurrentEventQueue(e), "function" == typeof r.focus && r.focus(n) } }, { key: "ngOnDestroy", value: function() { var t = this;
                                this._elementInfo.forEach((function(e, n) { return t.stopMonitoring(n) })) } }, { key: "_getDocument", value: function() { return this._document || document } }, { key: "_getWindow", value: function() { return this._getDocument().defaultView || window } }, { key: "_toggleClass", value: function(t, e, n) { n ? t.classList.add(e) : t.classList.remove(e) } }, { key: "_getFocusOrigin", value: function(t) { return this._origin ? this._origin : this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : this._wasCausedByTouch(t) ? "touch" : "program" } }, { key: "_setClasses", value: function(t, e) { this._toggleClass(t, "cdk-focused", !!e), this._toggleClass(t, "cdk-touch-focused", "touch" === e), this._toggleClass(t, "cdk-keyboard-focused", "keyboard" === e), this._toggleClass(t, "cdk-mouse-focused", "mouse" === e), this._toggleClass(t, "cdk-program-focused", "program" === e) } }, { key: "_setOriginForCurrentEventQueue", value: function(t) { var e = this;
                                this._ngZone.runOutsideAngular((function() { e._origin = t, 0 === e._detectionMode && (e._originTimeoutId = setTimeout((function() { return e._origin = null }), 1)) })) } }, { key: "_wasCausedByTouch", value: function(t) { var e = op(t); return this._lastTouchTarget instanceof Node && e instanceof Node && (e === this._lastTouchTarget || e.contains(this._lastTouchTarget)) } }, { key: "_onFocus", value: function(t, e) { var n = this._elementInfo.get(e); if (n && (n.checkChildren || e === op(t))) { var r = this._getFocusOrigin(t);
                                    this._setClasses(e, r), this._emitOrigin(n.subject, r), this._lastFocusOrigin = r } } }, { key: "_onBlur", value: function(t, e) { var n = this._elementInfo.get(e);!n || n.checkChildren && t.relatedTarget instanceof Node && e.contains(t.relatedTarget) || (this._setClasses(e), this._emitOrigin(n.subject, null)) } }, { key: "_emitOrigin", value: function(t, e) { this._ngZone.run((function() { return t.next(e) })) } }, { key: "_registerGlobalListeners", value: function(t) { var e = this; if (this._platform.isBrowser) { var n = t.rootNode,
                                        r = this._rootNodeFocusListenerCount.get(n) || 0;
                                    r || this._ngZone.runOutsideAngular((function() { n.addEventListener("focus", e._rootNodeFocusAndBlurListener, rp), n.addEventListener("blur", e._rootNodeFocusAndBlurListener, rp) })), this._rootNodeFocusListenerCount.set(n, r + 1), 1 == ++this._monitoredElementCount && this._ngZone.runOutsideAngular((function() { var t = e._getDocument(),
                                            n = e._getWindow();
                                        t.addEventListener("keydown", e._documentKeydownListener, rp), t.addEventListener("mousedown", e._documentMousedownListener, rp), t.addEventListener("touchstart", e._documentTouchstartListener, rp), n.addEventListener("focus", e._windowFocusListener) })) } } }, { key: "_removeGlobalListeners", value: function(t) { var e = t.rootNode; if (this._rootNodeFocusListenerCount.has(e)) { var n = this._rootNodeFocusListenerCount.get(e);
                                    n > 1 ? this._rootNodeFocusListenerCount.set(e, n - 1) : (e.removeEventListener("focus", this._rootNodeFocusAndBlurListener, rp), e.removeEventListener("blur", this._rootNodeFocusAndBlurListener, rp), this._rootNodeFocusListenerCount.delete(e)) } if (!--this._monitoredElementCount) { var r = this._getDocument(),
                                        i = this._getWindow();
                                    r.removeEventListener("keydown", this._documentKeydownListener, rp), r.removeEventListener("mousedown", this._documentMousedownListener, rp), r.removeEventListener("touchstart", this._documentTouchstartListener, rp), i.removeEventListener("focus", this._windowFocusListener), clearTimeout(this._windowFocusTimeoutId), clearTimeout(this._touchTimeoutId), clearTimeout(this._originTimeoutId) } } }]), t }()).\u0275fac = function(t) { return new(t || ep)(ae(Us), ae(Vd), ae(ku, 8), ae(np, 8)) }, ep.\u0275prov = bt({ factory: function() { return new ep(ae(Us), ae(Vd), ae(ku, 8), ae(np, 8)) }, token: ep, providedIn: "root" }), ep);

                function op(t) { return t.composedPath ? t.composedPath()[0] : t.target } var ap, sp = ((ap = function() {
                        function t(e, n) { v(this, t), this._platform = e, this._document = n } return y(t, [{ key: "getHighContrastMode", value: function() { if (!this._platform.isBrowser) return 0; var t = this._document.createElement("div");
                                t.style.backgroundColor = "rgb(1,2,3)", t.style.position = "absolute", this._document.body.appendChild(t); var e = this._document.defaultView || window,
                                    n = e && e.getComputedStyle ? e.getComputedStyle(t) : null,
                                    r = (n && n.backgroundColor || "").replace(/ /g, ""); switch (this._document.body.removeChild(t), r) {
                                    case "rgb(0,0,0)":
                                        return 2;
                                    case "rgb(255,255,255)":
                                        return 1 } return 0 } }, { key: "_applyBodyHighContrastModeCssClasses", value: function() { if (this._platform.isBrowser && this._document.body) { var t = this._document.body.classList;
                                    t.remove("cdk-high-contrast-active"), t.remove("cdk-high-contrast-black-on-white"), t.remove("cdk-high-contrast-white-on-black"); var e = this.getHighContrastMode();
                                    1 === e ? (t.add("cdk-high-contrast-active"), t.add("cdk-high-contrast-black-on-white")) : 2 === e && (t.add("cdk-high-contrast-active"), t.add("cdk-high-contrast-white-on-black")) } } }]), t }()).\u0275fac = function(t) { return new(t || ap)(ae(Vd), ae(ku)) }, ap.\u0275prov = bt({ factory: function() { return new ap(ae(Vd), ae(ku)) }, token: ap, providedIn: "root" }), ap),
                    up = new Ta("10.2.7"),
                    lp = function t() { v(this, t) };

                function cp(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; return { type: 4, styles: e, timings: t } }

                function hp(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; return { type: 2, steps: t, options: e } }

                function fp(t) { return { type: 6, styles: t, offset: null } }

                function dp(t, e, n) { return { type: 0, name: t, styles: e, options: n } }

                function vp(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; return { type: 1, expr: t, animation: e, options: n } }

                function pp(t) { Promise.resolve(null).then(t) } var yp = function() {
                        function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            v(this, t), this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this.parentPlayer = null, this.totalTime = e + n } return y(t, [{ key: "_onFinish", value: function() { this._finished || (this._finished = !0, this._onDoneFns.forEach((function(t) { return t() })), this._onDoneFns = []) } }, { key: "onStart", value: function(t) { this._onStartFns.push(t) } }, { key: "onDone", value: function(t) { this._onDoneFns.push(t) } }, { key: "onDestroy", value: function(t) { this._onDestroyFns.push(t) } }, { key: "hasStarted", value: function() { return this._started } }, { key: "init", value: function() {} }, { key: "play", value: function() { this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0 } }, { key: "triggerMicrotask", value: function() { var t = this;
                                pp((function() { return t._onFinish() })) } }, { key: "_onStart", value: function() { this._onStartFns.forEach((function(t) { return t() })), this._onStartFns = [] } }, { key: "pause", value: function() {} }, { key: "restart", value: function() {} }, { key: "finish", value: function() { this._onFinish() } }, { key: "destroy", value: function() { this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach((function(t) { return t() })), this._onDestroyFns = []) } }, { key: "reset", value: function() {} }, { key: "setPosition", value: function(t) {} }, { key: "getPosition", value: function() { return 0 } }, { key: "triggerCallback", value: function(t) { var e = "start" == t ? this._onStartFns : this._onDoneFns;
                                e.forEach((function(t) { return t() })), e.length = 0 } }]), t }(),
                    gp = function() {
                        function t(e) { var n = this;
                            v(this, t), this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = e; var r = 0,
                                i = 0,
                                o = 0,
                                a = this.players.length;
                            0 == a ? pp((function() { return n._onFinish() })) : this.players.forEach((function(t) { t.onDone((function() {++r == a && n._onFinish() })), t.onDestroy((function() {++i == a && n._onDestroy() })), t.onStart((function() {++o == a && n._onStart() })) })), this.totalTime = this.players.reduce((function(t, e) { return Math.max(t, e.totalTime) }), 0) } return y(t, [{ key: "_onFinish", value: function() { this._finished || (this._finished = !0, this._onDoneFns.forEach((function(t) { return t() })), this._onDoneFns = []) } }, { key: "init", value: function() { this.players.forEach((function(t) { return t.init() })) } }, { key: "onStart", value: function(t) { this._onStartFns.push(t) } }, { key: "_onStart", value: function() { this.hasStarted() || (this._started = !0, this._onStartFns.forEach((function(t) { return t() })), this._onStartFns = []) } }, { key: "onDone", value: function(t) { this._onDoneFns.push(t) } }, { key: "onDestroy", value: function(t) { this._onDestroyFns.push(t) } }, { key: "hasStarted", value: function() { return this._started } }, { key: "play", value: function() { this.parentPlayer || this.init(), this._onStart(), this.players.forEach((function(t) { return t.play() })) } }, { key: "pause", value: function() { this.players.forEach((function(t) { return t.pause() })) } }, { key: "restart", value: function() { this.players.forEach((function(t) { return t.restart() })) } }, { key: "finish", value: function() { this._onFinish(), this.players.forEach((function(t) { return t.finish() })) } }, { key: "destroy", value: function() { this._onDestroy() } }, { key: "_onDestroy", value: function() { this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach((function(t) { return t.destroy() })), this._onDestroyFns.forEach((function(t) { return t() })), this._onDestroyFns = []) } }, { key: "reset", value: function() { this.players.forEach((function(t) { return t.reset() })), this._destroyed = !1, this._finished = !1, this._started = !1 } }, { key: "setPosition", value: function(t) { var e = t * this.totalTime;
                                this.players.forEach((function(t) { var n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
                                    t.setPosition(n) })) } }, { key: "getPosition", value: function() { var t = 0; return this.players.forEach((function(e) { var n = e.getPosition();
                                    t = Math.min(n, t) })), t } }, { key: "beforeDestroy", value: function() { this.players.forEach((function(t) { t.beforeDestroy && t.beforeDestroy() })) } }, { key: "triggerCallback", value: function(t) { var e = "start" == t ? this._onStartFns : this._onDoneFns;
                                e.forEach((function(t) { return t() })), e.length = 0 } }]), t }();

                function mp() { return "undefined" != typeof process && "[object process]" === {}.toString.call(process) }

                function _p(t) { switch (t.length) {
                        case 0:
                            return new yp;
                        case 1:
                            return t[0];
                        default:
                            return new gp(t) } }

                function kp(t, e, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                        a = [],
                        s = [],
                        u = -1,
                        l = null; if (r.forEach((function(t) { var n = t.offset,
                                r = n == u,
                                c = r && l || {};
                            Object.keys(t).forEach((function(n) { var r = n,
                                    s = t[n]; if ("offset" !== n) switch (r = e.normalizePropertyName(r, a), s) {
                                    case "!":
                                        s = i[n]; break;
                                    case "*":
                                        s = o[n]; break;
                                    default:
                                        s = e.normalizeStyleValue(n, r, s, a) }
                                c[r] = s })), r || s.push(c), l = c, u = n })), a.length) { var c = "\n - "; throw new Error("Unable to animate due to the following errors:".concat(c).concat(a.join(c))) } return s }

                function wp(t, e, n, r) { switch (e) {
                        case "start":
                            t.onStart((function() { return r(n && bp(n, "start", t)) })); break;
                        case "done":
                            t.onDone((function() { return r(n && bp(n, "done", t)) })); break;
                        case "destroy":
                            t.onDestroy((function() { return r(n && bp(n, "destroy", t)) })) } }

                function bp(t, e, n) { var r = n.totalTime,
                        i = Sp(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, null == r ? t.totalTime : r, !!n.disabled),
                        o = t._data; return null != o && (i._data = o), i }

                function Sp(t, e, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                        a = arguments.length > 6 ? arguments[6] : void 0; return { element: t, triggerName: e, fromState: n, toState: r, phaseName: i, totalTime: o, disabled: !!a } }

                function Cp(t, e, n) { var r; return t instanceof Map ? (r = t.get(e)) || t.set(e, r = n) : (r = t[e]) || (r = t[e] = n), r }

                function Ep(t) { var e = t.indexOf(":"); return [t.substring(1, e), t.substr(e + 1)] } var xp = function(t, e) { return !1 },
                    Tp = function(t, e) { return !1 },
                    Ap = function(t, e, n) { return [] },
                    Op = mp();
                (Op || "undefined" != typeof Element) && (xp = function(t, e) { return t.contains(e) }, Tp = function() { if (Op || Element.prototype.matches) return function(t, e) { return t.matches(e) }; var t = Element.prototype,
                        e = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector; return e ? function(t, n) { return e.apply(t, [n]) } : Tp }(), Ap = function(t, e, r) { var i = []; if (r) i.push.apply(i, n(t.querySelectorAll(e)));
                    else { var o = t.querySelector(e);
                        o && i.push(o) } return i }); var Pp = null,
                    Rp = !1;

                function Ip(t) { Pp || (Pp = ("undefined" != typeof document ? document.body : null) || {}, Rp = !!Pp.style && "WebkitAppearance" in Pp.style); var e = !0; return Pp.style && ! function(t) { return "ebkit" == t.substring(1, 6) }(t) && (!(e = t in Pp.style) && Rp) && (e = "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in Pp.style), e } var Dp = Tp,
                    Np = xp,
                    jp = Ap;

                function Fp(t) { var e = {}; return Object.keys(t).forEach((function(n) { var r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
                        e[r] = t[n] })), e } var Lp, Mp = ((Lp = function() {
                        function t() { v(this, t) } return y(t, [{ key: "validateStyleProperty", value: function(t) { return Ip(t) } }, { key: "matchesElement", value: function(t, e) { return Dp(t, e) } }, { key: "containsElement", value: function(t, e) { return Np(t, e) } }, { key: "query", value: function(t, e, n) { return jp(t, e, n) } }, { key: "computeStyle", value: function(t, e, n) { return n || "" } }, { key: "animate", value: function(t, e, n, r, i) { return new yp(n, r) } }]), t }()).\u0275fac = function(t) { return new(t || Lp) }, Lp.\u0275prov = bt({ token: Lp, factory: Lp.\u0275fac }), Lp),
                    Hp = function() { var t = function t() { v(this, t) }; return t.NOOP = new Mp, t }();

                function Bp(t) { if ("number" == typeof t) return t; var e = t.match(/^(-?[\.\d]+)(m?s)/); return !e || e.length < 2 ? 0 : Vp(parseFloat(e[1]), e[2]) }

                function Vp(t, e) { switch (e) {
                        case "s":
                            return 1e3 * t;
                        default:
                            return t } }

                function Up(t, e, n) { return t.hasOwnProperty("duration") ? t : function(t, e, n) { var r, i = 0,
                            o = ""; if ("string" == typeof t) { var a = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i); if (null === a) return e.push('The provided timing value "'.concat(t, '" is invalid.')), { duration: 0, delay: 0, easing: "" };
                            r = Vp(parseFloat(a[1]), a[2]); var s = a[3];
                            null != s && (i = Vp(parseFloat(s), a[4])); var u = a[5];
                            u && (o = u) } else r = t; if (!n) { var l = !1,
                                c = e.length;
                            r < 0 && (e.push("Duration values below 0 are not allowed for this animation step."), l = !0), i < 0 && (e.push("Delay values below 0 are not allowed for this animation step."), l = !0), l && e.splice(c, 0, 'The provided timing value "'.concat(t, '" is invalid.')) } return { duration: r, delay: i, easing: o } }(t, e, n) }

                function zp(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return Object.keys(t).forEach((function(n) { e[n] = t[n] })), e }

                function qp(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; if (e)
                        for (var r in t) n[r] = t[r];
                    else zp(t, n); return n }

                function Wp(t, e, n) { return n ? e + ":" + n + ";" : "" }

                function Qp(t) { for (var e = "", n = 0; n < t.style.length; n++) { var r = t.style.item(n);
                        e += Wp(0, r, t.style.getPropertyValue(r)) } for (var i in t.style) t.style.hasOwnProperty(i) && !i.startsWith("_") && (e += Wp(0, i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), t.style[i]));
                    t.setAttribute("style", e) }

                function Zp(t, e, n) { t.style && (Object.keys(e).forEach((function(r) { var i = ey(r);
                        n && !n.hasOwnProperty(r) && (n[r] = t.style[i]), t.style[i] = e[r] })), mp() && Qp(t)) }

                function Kp(t, e) { t.style && (Object.keys(e).forEach((function(e) { var n = ey(e);
                        t.style[n] = "" })), mp() && Qp(t)) }

                function Gp(t) { return Array.isArray(t) ? 1 == t.length ? t[0] : hp(t) : t } var Yp = new RegExp("{{\\s*(.+?)\\s*}}", "g");

                function Xp(t) { var e = []; if ("string" == typeof t) { for (var n; n = Yp.exec(t);) e.push(n[1]);
                        Yp.lastIndex = 0 } return e }

                function $p(t, e, n) { var r = t.toString(),
                        i = r.replace(Yp, (function(t, r) { var i = e[r]; return e.hasOwnProperty(r) || (n.push("Please provide a value for the animation param " + r), i = ""), i.toString() })); return i == r ? t : i }

                function Jp(t) { for (var e = [], n = t.next(); !n.done;) e.push(n.value), n = t.next(); return e } var ty = /-+([a-z0-9])/g;

                function ey(t) { return t.replace(ty, (function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return e[1].toUpperCase() })) }

                function ny(t, e) { return 0 === t || 0 === e }

                function ry(t, e, n) { var r = Object.keys(n); if (r.length && e.length) { var i = e[0],
                            o = []; if (r.forEach((function(t) { i.hasOwnProperty(t) || o.push(t), i[t] = n[t] })), o.length)
                            for (var a = function() { var n = e[s];
                                    o.forEach((function(e) { n[e] = oy(t, e) })) }, s = 1; s < e.length; s++) a() } return e }

                function iy(t, e, n) { switch (e.type) {
                        case 7:
                            return t.visitTrigger(e, n);
                        case 0:
                            return t.visitState(e, n);
                        case 1:
                            return t.visitTransition(e, n);
                        case 2:
                            return t.visitSequence(e, n);
                        case 3:
                            return t.visitGroup(e, n);
                        case 4:
                            return t.visitAnimate(e, n);
                        case 5:
                            return t.visitKeyframes(e, n);
                        case 6:
                            return t.visitStyle(e, n);
                        case 8:
                            return t.visitReference(e, n);
                        case 9:
                            return t.visitAnimateChild(e, n);
                        case 10:
                            return t.visitAnimateRef(e, n);
                        case 11:
                            return t.visitQuery(e, n);
                        case 12:
                            return t.visitStagger(e, n);
                        default:
                            throw new Error("Unable to resolve animation metadata node #" + e.type) } }

                function oy(t, e) { return window.getComputedStyle(t)[e] } var ay = new Set(["true", "1"]),
                    sy = new Set(["false", "0"]);

                function uy(t, e) { var n = ay.has(t) || sy.has(t),
                        r = ay.has(e) || sy.has(e); return function(i, o) { var a = "*" == t || t == i,
                            s = "*" == e || e == o; return !a && n && "boolean" == typeof i && (a = i ? ay.has(t) : sy.has(t)), !s && r && "boolean" == typeof o && (s = o ? ay.has(e) : sy.has(e)), a && s } } var ly = new RegExp("s*:selfs*,?", "g");

                function cy(t, e, n) { return new hy(t).build(e, n) } var hy = function() {
                        function e(t) { v(this, e), this._driver = t } return y(e, [{ key: "build", value: function(t, e) { var n = new fy(e); return this._resetContextStyleTimingState(n), iy(this, Gp(t), n) } }, { key: "_resetContextStyleTimingState", value: function(t) { t.currentQuerySelector = "", t.collectedStyles = {}, t.collectedStyles[""] = {}, t.currentTime = 0 } }, { key: "visitTrigger", value: function(t, e) { var n = this,
                                    r = e.queryCount = 0,
                                    i = e.depCount = 0,
                                    o = [],
                                    a = []; return "@" == t.name.charAt(0) && e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), t.definitions.forEach((function(t) { if (n._resetContextStyleTimingState(e), 0 == t.type) { var s = t,
                                            u = s.name;
                                        u.toString().split(/\s*,\s*/).forEach((function(t) { s.name = t, o.push(n.visitState(s, e)) })), s.name = u } else if (1 == t.type) { var l = n.visitTransition(t, e);
                                        r += l.queryCount, i += l.depCount, a.push(l) } else e.errors.push("only state() and transition() definitions can sit inside of a trigger()") })), { type: 7, name: t.name, states: o, transitions: a, queryCount: r, depCount: i, options: null } } }, { key: "visitState", value: function(t, e) { var n = this.visitStyle(t.styles, e),
                                    r = t.options && t.options.params || null; if (n.containsDynamicStyles) { var i = new Set,
                                        o = r || {}; if (n.styles.forEach((function(t) { if (dy(t)) { var e = t;
                                                Object.keys(e).forEach((function(t) { Xp(e[t]).forEach((function(t) { o.hasOwnProperty(t) || i.add(t) })) })) } })), i.size) { var a = Jp(i.values());
                                        e.errors.push('state("'.concat(t.name, '", ...) must define default values for all the following style substitutions: ').concat(a.join(", "))) } } return { type: 0, name: t.name, style: n, options: r ? { params: r } : null } } }, { key: "visitTransition", value: function(t, e) { e.queryCount = 0, e.depCount = 0; var n, r, i, o = iy(this, Gp(t.animation), e); return { type: 1, matchers: (n = t.expr, r = e.errors, i = [], "string" == typeof n ? n.split(/\s*,\s*/).forEach((function(t) { return function(t, e, n) { if (":" == t[0]) { var r = function(t, e) { switch (t) {
                                                        case ":enter":
                                                            return "void => *";
                                                        case ":leave":
                                                            return "* => void";
                                                        case ":increment":
                                                            return function(t, e) { return parseFloat(e) > parseFloat(t) };
                                                        case ":decrement":
                                                            return function(t, e) { return parseFloat(e) < parseFloat(t) };
                                                        default:
                                                            return e.push('The transition alias value "'.concat(t, '" is not supported')), "* => *" } }(t, n); if ("function" == typeof r) return void e.push(r);
                                                t = r } var i = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/); if (null == i || i.length < 4) return n.push('The provided transition expression "'.concat(t, '" is not supported')), e; var o = i[1],
                                                a = i[2],
                                                s = i[3];
                                            e.push(uy(o, s)), "<" != a[0] || "*" == o && "*" == s || e.push(uy(s, o)) }(t, i, r) })) : i.push(n), i), animation: o, queryCount: e.queryCount, depCount: e.depCount, options: vy(t.options) } } }, { key: "visitSequence", value: function(t, e) { var n = this; return { type: 2, steps: t.steps.map((function(t) { return iy(n, t, e) })), options: vy(t.options) } } }, { key: "visitGroup", value: function(t, e) { var n = this,
                                    r = e.currentTime,
                                    i = 0,
                                    o = t.steps.map((function(t) { e.currentTime = r; var o = iy(n, t, e); return i = Math.max(i, e.currentTime), o })); return e.currentTime = i, { type: 3, steps: o, options: vy(t.options) } } }, { key: "visitAnimate", value: function(t, e) { var n, r = function(t, e) { var n = null; if (t.hasOwnProperty("duration")) n = t;
                                    else if ("number" == typeof t) return py(Up(t, e).duration, 0, ""); var r = t; if (r.split(/\s+/).some((function(t) { return "{" == t.charAt(0) && "{" == t.charAt(1) }))) { var i = py(0, 0, ""); return i.dynamic = !0, i.strValue = r, i } return py((n = n || Up(r, e)).duration, n.delay, n.easing) }(t.timings, e.errors);
                                e.currentAnimateTimings = r; var i = t.styles ? t.styles : fp({}); if (5 == i.type) n = this.visitKeyframes(i, e);
                                else { var o = t.styles,
                                        a = !1; if (!o) { a = !0; var s = {};
                                        r.easing && (s.easing = r.easing), o = fp(s) }
                                    e.currentTime += r.duration + r.delay; var u = this.visitStyle(o, e);
                                    u.isEmptyStep = a, n = u } return e.currentAnimateTimings = null, { type: 4, timings: r, style: n, options: null } } }, { key: "visitStyle", value: function(t, e) { var n = this._makeStyleAst(t, e); return this._validateStyleAst(n, e), n } }, { key: "_makeStyleAst", value: function(t, e) { var n = [];
                                Array.isArray(t.styles) ? t.styles.forEach((function(t) { "string" == typeof t ? "*" == t ? n.push(t) : e.errors.push("The provided style string value ".concat(t, " is not allowed.")) : n.push(t) })) : n.push(t.styles); var r = !1,
                                    i = null; return n.forEach((function(t) { if (dy(t)) { var e = t,
                                            n = e.easing; if (n && (i = n, delete e.easing), !r)
                                            for (var o in e)
                                                if (e[o].toString().indexOf("{{") >= 0) { r = !0; break } } })), { type: 6, styles: n, easing: i, offset: t.offset, containsDynamicStyles: r, options: null } } }, { key: "_validateStyleAst", value: function(t, e) { var n = this,
                                    r = e.currentAnimateTimings,
                                    i = e.currentTime,
                                    o = e.currentTime;
                                r && o > 0 && (o -= r.duration + r.delay), t.styles.forEach((function(t) { "string" != typeof t && Object.keys(t).forEach((function(r) { if (n._driver.validateStyleProperty(r)) { var a = e.collectedStyles[e.currentQuerySelector],
                                                s = a[r],
                                                u = !0;
                                            s && (o != i && o >= s.startTime && i <= s.endTime && (e.errors.push('The CSS property "'.concat(r, '" that exists between the times of "').concat(s.startTime, 'ms" and "').concat(s.endTime, 'ms" is also being animated in a parallel animation between the times of "').concat(o, 'ms" and "').concat(i, 'ms"')), u = !1), o = s.startTime), u && (a[r] = { startTime: o, endTime: i }), e.options && function(t, e, n) { var r = e.params || {},
                                                    i = Xp(t);
                                                i.length && i.forEach((function(t) { r.hasOwnProperty(t) || n.push("Unable to resolve the local animation param ".concat(t, " in the given list of values")) })) }(t[r], e.options, e.errors) } else e.errors.push('The provided animation property "'.concat(r, '" is not a supported CSS property for animations')) })) })) } }, { key: "visitKeyframes", value: function(t, e) { var n = this,
                                    r = { type: 5, styles: [], options: null }; if (!e.currentAnimateTimings) return e.errors.push("keyframes() must be placed inside of a call to animate()"), r; var i = 0,
                                    o = [],
                                    a = !1,
                                    s = !1,
                                    u = 0,
                                    l = t.steps.map((function(t) { var r = n._makeStyleAst(t, e),
                                            l = null != r.offset ? r.offset : function(t) { if ("string" == typeof t) return null; var e = null; if (Array.isArray(t)) t.forEach((function(t) { if (dy(t) && t.hasOwnProperty("offset")) { var n = t;
                                                        e = parseFloat(n.offset), delete n.offset } }));
                                                else if (dy(t) && t.hasOwnProperty("offset")) { var n = t;
                                                    e = parseFloat(n.offset), delete n.offset } return e }(r.styles),
                                            c = 0; return null != l && (i++, c = r.offset = l), s = s || c < 0 || c > 1, a = a || c < u, u = c, o.push(c), r }));
                                s && e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), a && e.errors.push("Please ensure that all keyframe offsets are in order"); var c = t.steps.length,
                                    h = 0;
                                i > 0 && i < c ? e.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == i && (h = 1 / (c - 1)); var f = c - 1,
                                    d = e.currentTime,
                                    v = e.currentAnimateTimings,
                                    p = v.duration; return l.forEach((function(t, i) { var a = h > 0 ? i == f ? 1 : h * i : o[i],
                                        s = a * p;
                                    e.currentTime = d + v.delay + s, v.duration = s, n._validateStyleAst(t, e), t.offset = a, r.styles.push(t) })), r } }, { key: "visitReference", value: function(t, e) { return { type: 8, animation: iy(this, Gp(t.animation), e), options: vy(t.options) } } }, { key: "visitAnimateChild", value: function(t, e) { return e.depCount++, { type: 9, options: vy(t.options) } } }, { key: "visitAnimateRef", value: function(t, e) { return { type: 10, animation: this.visitReference(t.animation, e), options: vy(t.options) } } }, { key: "visitQuery", value: function(e, n) { var r = n.currentQuerySelector,
                                    i = e.options || {};
                                n.queryCount++, n.currentQuery = e; var o = t(function(t) { var e = !!t.split(/\s*,\s*/).find((function(t) { return ":self" == t })); return e && (t = t.replace(ly, "")), [t = t.replace(/@\*/g, ".ng-trigger").replace(/@\w+/g, (function(t) { return ".ng-trigger-" + t.substr(1) })).replace(/:animating/g, ".ng-animating"), e] }(e.selector), 2),
                                    a = o[0],
                                    s = o[1];
                                n.currentQuerySelector = r.length ? r + " " + a : a, Cp(n.collectedStyles, n.currentQuerySelector, {}); var u = iy(this, Gp(e.animation), n); return n.currentQuery = null, n.currentQuerySelector = r, { type: 11, selector: a, limit: i.limit || 0, optional: !!i.optional, includeSelf: s, animation: u, originalSelector: e.selector, options: vy(e.options) } } }, { key: "visitStagger", value: function(t, e) { e.currentQuery || e.errors.push("stagger() can only be used inside of query()"); var n = "full" === t.timings ? { duration: 0, delay: 0, easing: "full" } : Up(t.timings, e.errors, !0); return { type: 12, animation: iy(this, Gp(t.animation), e), timings: n, options: null } } }]), e }(),
                    fy = function t(e) { v(this, t), this.errors = e, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null };

                function dy(t) { return !Array.isArray(t) && "object" == typeof t }

                function vy(t) { var e; return t ? (t = zp(t)).params && (t.params = (e = t.params) ? zp(e) : null) : t = {}, t }

                function py(t, e, n) { return { duration: t, delay: e, easing: n } }

                function yy(t, e, n, r, i, o) { var a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                        s = arguments.length > 7 && void 0 !== arguments[7] && arguments[7]; return { type: 1, element: t, keyframes: e, preStyleProps: n, postStyleProps: r, duration: i, delay: o, totalTime: i + o, easing: a, subTimeline: s } } var gy = function() {
                        function t() { v(this, t), this._map = new Map } return y(t, [{ key: "consume", value: function(t) { var e = this._map.get(t); return e ? this._map.delete(t) : e = [], e } }, { key: "append", value: function(t, e) { var r, i = this._map.get(t);
                                i || this._map.set(t, i = []), (r = i).push.apply(r, n(e)) } }, { key: "has", value: function(t) { return this._map.has(t) } }, { key: "clear", value: function() { this._map.clear() } }]), t }(),
                    my = new RegExp(":enter", "g"),
                    _y = new RegExp(":leave", "g");

                function ky(t, e, n, r, i) { var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                        a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {},
                        s = arguments.length > 7 ? arguments[7] : void 0,
                        u = arguments.length > 8 ? arguments[8] : void 0,
                        l = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : []; return (new wy).buildKeyframes(t, e, n, r, i, o, a, s, u, l) } var wy = function() {
                        function t() { v(this, t) } return y(t, [{ key: "buildKeyframes", value: function(t, e, n, r, i, o, a, s, u) { var l = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [];
                                u = u || new gy; var c = new Sy(t, e, u, r, i, l, []);
                                c.options = s, c.currentTimeline.setStyles([o], null, c.errors, s), iy(this, n, c); var h = c.timelines.filter((function(t) { return t.containsAnimation() })); if (h.length && Object.keys(a).length) { var f = h[h.length - 1];
                                    f.allowOnlyTimelineStyles() || f.setStyles([a], null, c.errors, s) } return h.length ? h.map((function(t) { return t.buildKeyframes() })) : [yy(e, [], [], [], 0, 0, "", !1)] } }, { key: "visitTrigger", value: function(t, e) {} }, { key: "visitState", value: function(t, e) {} }, { key: "visitTransition", value: function(t, e) {} }, { key: "visitAnimateChild", value: function(t, e) { var n = e.subInstructions.consume(e.element); if (n) { var r = e.createSubContext(t.options),
                                        i = e.currentTimeline.currentTime,
                                        o = this._visitSubInstructions(n, r, r.options);
                                    i != o && e.transformIntoNewTimeline(o) }
                                e.previousNode = t } }, { key: "visitAnimateRef", value: function(t, e) { var n = e.createSubContext(t.options);
                                n.transformIntoNewTimeline(), this.visitReference(t.animation, n), e.transformIntoNewTimeline(n.currentTimeline.currentTime), e.previousNode = t } }, { key: "_visitSubInstructions", value: function(t, e, n) { var r = e.currentTimeline.currentTime,
                                    i = null != n.duration ? Bp(n.duration) : null,
                                    o = null != n.delay ? Bp(n.delay) : null; return 0 !== i && t.forEach((function(t) { var n = e.appendInstructionToTimeline(t, i, o);
                                    r = Math.max(r, n.duration + n.delay) })), r } }, { key: "visitReference", value: function(t, e) { e.updateOptions(t.options, !0), iy(this, t.animation, e), e.previousNode = t } }, { key: "visitSequence", value: function(t, e) { var n = this,
                                    r = e.subContextCount,
                                    i = e,
                                    o = t.options; if (o && (o.params || o.delay) && ((i = e.createSubContext(o)).transformIntoNewTimeline(), null != o.delay)) { 6 == i.previousNode.type && (i.currentTimeline.snapshotCurrentStyles(), i.previousNode = by); var a = Bp(o.delay);
                                    i.delayNextStep(a) }
                                t.steps.length && (t.steps.forEach((function(t) { return iy(n, t, i) })), i.currentTimeline.applyStylesToKeyframe(), i.subContextCount > r && i.transformIntoNewTimeline()), e.previousNode = t } }, { key: "visitGroup", value: function(t, e) { var n = this,
                                    r = [],
                                    i = e.currentTimeline.currentTime,
                                    o = t.options && t.options.delay ? Bp(t.options.delay) : 0;
                                t.steps.forEach((function(a) { var s = e.createSubContext(t.options);
                                    o && s.delayNextStep(o), iy(n, a, s), i = Math.max(i, s.currentTimeline.currentTime), r.push(s.currentTimeline) })), r.forEach((function(t) { return e.currentTimeline.mergeTimelineCollectedStyles(t) })), e.transformIntoNewTimeline(i), e.previousNode = t } }, { key: "_visitTiming", value: function(t, e) { if (t.dynamic) { var n = t.strValue; return Up(e.params ? $p(n, e.params, e.errors) : n, e.errors) } return { duration: t.duration, delay: t.delay, easing: t.easing } } }, { key: "visitAnimate", value: function(t, e) { var n = e.currentAnimateTimings = this._visitTiming(t.timings, e),
                                    r = e.currentTimeline;
                                n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles()); var i = t.style;
                                5 == i.type ? this.visitKeyframes(i, e) : (e.incrementTime(n.duration), this.visitStyle(i, e), r.applyStylesToKeyframe()), e.currentAnimateTimings = null, e.previousNode = t } }, { key: "visitStyle", value: function(t, e) { var n = e.currentTimeline,
                                    r = e.currentAnimateTimings;!r && n.getCurrentStyleProperties().length && n.forwardFrame(); var i = r && r.easing || t.easing;
                                t.isEmptyStep ? n.applyEmptyStep(i) : n.setStyles(t.styles, i, e.errors, e.options), e.previousNode = t } }, { key: "visitKeyframes", value: function(t, e) { var n = e.currentAnimateTimings,
                                    r = e.currentTimeline.duration,
                                    i = n.duration,
                                    o = e.createSubContext().currentTimeline;
                                o.easing = n.easing, t.styles.forEach((function(t) { o.forwardTime((t.offset || 0) * i), o.setStyles(t.styles, t.easing, e.errors, e.options), o.applyStylesToKeyframe() })), e.currentTimeline.mergeTimelineCollectedStyles(o), e.transformIntoNewTimeline(r + i), e.previousNode = t } }, { key: "visitQuery", value: function(t, e) { var n = this,
                                    r = e.currentTimeline.currentTime,
                                    i = t.options || {},
                                    o = i.delay ? Bp(i.delay) : 0;
                                o && (6 === e.previousNode.type || 0 == r && e.currentTimeline.getCurrentStyleProperties().length) && (e.currentTimeline.snapshotCurrentStyles(), e.previousNode = by); var a = r,
                                    s = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !!i.optional, e.errors);
                                e.currentQueryTotal = s.length; var u = null;
                                s.forEach((function(r, i) { e.currentQueryIndex = i; var s = e.createSubContext(t.options, r);
                                    o && s.delayNextStep(o), r === e.element && (u = s.currentTimeline), iy(n, t.animation, s), s.currentTimeline.applyStylesToKeyframe(), a = Math.max(a, s.currentTimeline.currentTime) })), e.currentQueryIndex = 0, e.currentQueryTotal = 0, e.transformIntoNewTimeline(a), u && (e.currentTimeline.mergeTimelineCollectedStyles(u), e.currentTimeline.snapshotCurrentStyles()), e.previousNode = t } }, { key: "visitStagger", value: function(t, e) { var n = e.parentContext,
                                    r = e.currentTimeline,
                                    i = t.timings,
                                    o = Math.abs(i.duration),
                                    a = o * (e.currentQueryTotal - 1),
                                    s = o * e.currentQueryIndex; switch (i.duration < 0 ? "reverse" : i.easing) {
                                    case "reverse":
                                        s = a - s; break;
                                    case "full":
                                        s = n.currentStaggerTime } var u = e.currentTimeline;
                                s && u.delayNextStep(s); var l = u.currentTime;
                                iy(this, t.animation, e), e.previousNode = t, n.currentStaggerTime = r.currentTime - l + (r.startTime - n.currentTimeline.startTime) } }]), t }(),
                    by = {},
                    Sy = function() {
                        function t(e, n, r, i, o, a, s, u) { v(this, t), this._driver = e, this.element = n, this.subInstructions = r, this._enterClassName = i, this._leaveClassName = o, this.errors = a, this.timelines = s, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = by, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = u || new Cy(this._driver, n, 0), s.push(this.currentTimeline) } return y(t, [{ key: "params", get: function() { return this.options.params } }, { key: "updateOptions", value: function(t, e) { var n = this; if (t) { var r = t,
                                        i = this.options;
                                    null != r.duration && (i.duration = Bp(r.duration)), null != r.delay && (i.delay = Bp(r.delay)); var o = r.params; if (o) { var a = i.params;
                                        a || (a = this.options.params = {}), Object.keys(o).forEach((function(t) { e && a.hasOwnProperty(t) || (a[t] = $p(o[t], a, n.errors)) })) } } } }, { key: "_copyOptions", value: function() { var t = {}; if (this.options) { var e = this.options.params; if (e) { var n = t.params = {};
                                        Object.keys(e).forEach((function(t) { n[t] = e[t] })) } } return t } }, { key: "createSubContext", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    n = arguments.length > 1 ? arguments[1] : void 0,
                                    r = arguments.length > 2 ? arguments[2] : void 0,
                                    i = n || this.element,
                                    o = new t(this._driver, i, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(i, r || 0)); return o.previousNode = this.previousNode, o.currentAnimateTimings = this.currentAnimateTimings, o.options = this._copyOptions(), o.updateOptions(e), o.currentQueryIndex = this.currentQueryIndex, o.currentQueryTotal = this.currentQueryTotal, o.parentContext = this, this.subContextCount++, o } }, { key: "transformIntoNewTimeline", value: function(t) { return this.previousNode = by, this.currentTimeline = this.currentTimeline.fork(this.element, t), this.timelines.push(this.currentTimeline), this.currentTimeline } }, { key: "appendInstructionToTimeline", value: function(t, e, n) { var r = { duration: null != e ? e : t.duration, delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay, easing: "" },
                                    i = new Ey(this._driver, t.element, t.keyframes, t.preStyleProps, t.postStyleProps, r, t.stretchStartingKeyframe); return this.timelines.push(i), r } }, { key: "incrementTime", value: function(t) { this.currentTimeline.forwardTime(this.currentTimeline.duration + t) } }, { key: "delayNextStep", value: function(t) { t > 0 && this.currentTimeline.delayNextStep(t) } }, { key: "invokeQuery", value: function(t, e, r, i, o, a) { var s = []; if (i && s.push(this.element), t.length > 0) { t = (t = t.replace(my, "." + this._enterClassName)).replace(_y, "." + this._leaveClassName); var u = this._driver.query(this.element, t, 1 != r);
                                    0 !== r && (u = r < 0 ? u.slice(u.length + r, u.length) : u.slice(0, r)), s.push.apply(s, n(u)) } return o || 0 != s.length || a.push('`query("'.concat(e, '")` returned zero elements. (Use `query("').concat(e, '", { optional: true })` if you wish to allow this.)')), s } }]), t }(),
                    Cy = function() {
                        function t(e, n, r, i) { v(this, t), this._driver = e, this.element = n, this.startTime = r, this._elementTimelineStylesLookup = i, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(n), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(n, this._localTimelineStyles)), this._loadKeyframe() } return y(t, [{ key: "containsAnimation", value: function() { switch (this._keyframes.size) {
                                    case 0:
                                        return !1;
                                    case 1:
                                        return this.getCurrentStyleProperties().length > 0;
                                    default:
                                        return !0 } } }, { key: "getCurrentStyleProperties", value: function() { return Object.keys(this._currentKeyframe) } }, { key: "currentTime", get: function() { return this.startTime + this.duration } }, { key: "delayNextStep", value: function(t) { var e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
                                this.duration || e ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles()) : this.startTime += t } }, { key: "fork", value: function(e, n) { return this.applyStylesToKeyframe(), new t(this._driver, e, n || this.currentTime, this._elementTimelineStylesLookup) } }, { key: "_loadKeyframe", value: function() { this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe)) } }, { key: "forwardFrame", value: function() { this.duration += 1, this._loadKeyframe() } }, { key: "forwardTime", value: function(t) { this.applyStylesToKeyframe(), this.duration = t, this._loadKeyframe() } }, { key: "_updateStyle", value: function(t, e) { this._localTimelineStyles[t] = e, this._globalTimelineStyles[t] = e, this._styleSummary[t] = { time: this.currentTime, value: e } } }, { key: "allowOnlyTimelineStyles", value: function() { return this._currentEmptyStepKeyframe !== this._currentKeyframe } }, { key: "applyEmptyStep", value: function(t) { var e = this;
                                t && (this._previousKeyframe.easing = t), Object.keys(this._globalTimelineStyles).forEach((function(t) { e._backFill[t] = e._globalTimelineStyles[t] || "*", e._currentKeyframe[t] = "*" })), this._currentEmptyStepKeyframe = this._currentKeyframe } }, { key: "setStyles", value: function(t, e, n, r) { var i = this;
                                e && (this._previousKeyframe.easing = e); var o = r && r.params || {},
                                    a = function(t, e) { var n, r = {}; return t.forEach((function(t) { "*" === t ? (n = n || Object.keys(e)).forEach((function(t) { r[t] = "*" })) : qp(t, !1, r) })), r }(t, this._globalTimelineStyles);
                                Object.keys(a).forEach((function(t) { var e = $p(a[t], o, n);
                                    i._pendingStyles[t] = e, i._localTimelineStyles.hasOwnProperty(t) || (i._backFill[t] = i._globalTimelineStyles.hasOwnProperty(t) ? i._globalTimelineStyles[t] : "*"), i._updateStyle(t, e) })) } }, { key: "applyStylesToKeyframe", value: function() { var t = this,
                                    e = this._pendingStyles,
                                    n = Object.keys(e);
                                0 != n.length && (this._pendingStyles = {}, n.forEach((function(n) { t._currentKeyframe[n] = e[n] })), Object.keys(this._localTimelineStyles).forEach((function(e) { t._currentKeyframe.hasOwnProperty(e) || (t._currentKeyframe[e] = t._localTimelineStyles[e]) }))) } }, { key: "snapshotCurrentStyles", value: function() { var t = this;
                                Object.keys(this._localTimelineStyles).forEach((function(e) { var n = t._localTimelineStyles[e];
                                    t._pendingStyles[e] = n, t._updateStyle(e, n) })) } }, { key: "getFinalKeyframe", value: function() { return this._keyframes.get(this.duration) } }, { key: "properties", get: function() { var t = []; for (var e in this._currentKeyframe) t.push(e); return t } }, { key: "mergeTimelineCollectedStyles", value: function(t) { var e = this;
                                Object.keys(t._styleSummary).forEach((function(n) { var r = e._styleSummary[n],
                                        i = t._styleSummary[n];
                                    (!r || i.time > r.time) && e._updateStyle(n, i.value) })) } }, { key: "buildKeyframes", value: function() { var t = this;
                                this.applyStylesToKeyframe(); var e = new Set,
                                    n = new Set,
                                    r = 1 === this._keyframes.size && 0 === this.duration,
                                    i = [];
                                this._keyframes.forEach((function(o, a) { var s = qp(o, !0);
                                    Object.keys(s).forEach((function(t) { var r = s[t]; "!" == r ? e.add(t) : "*" == r && n.add(t) })), r || (s.offset = a / t.duration), i.push(s) })); var o = e.size ? Jp(e.values()) : [],
                                    a = n.size ? Jp(n.values()) : []; if (r) { var s = i[0],
                                        u = zp(s);
                                    s.offset = 0, u.offset = 1, i = [s, u] } return yy(this.element, i, o, a, this.duration, this.startTime, this.easing, !1) } }]), t }(),
                    Ey = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o, a, s) { var u, l = arguments.length > 6 && void 0 !== arguments[6] && arguments[6]; return v(this, n), (u = e.call(this, t, r, s.delay)).element = r, u.keyframes = i, u.preStyleProps = o, u.postStyleProps = a, u._stretchStartingKeyframe = l, u.timings = { duration: s.duration, delay: s.delay, easing: s.easing }, u } return y(n, [{ key: "containsAnimation", value: function() { return this.keyframes.length > 1 } }, { key: "buildKeyframes", value: function() { var t = this.keyframes,
                                    e = this.timings,
                                    n = e.delay,
                                    r = e.duration,
                                    i = e.easing; if (this._stretchStartingKeyframe && n) { var o = [],
                                        a = r + n,
                                        s = n / a,
                                        u = qp(t[0], !1);
                                    u.offset = 0, o.push(u); var l = qp(t[0], !1);
                                    l.offset = xy(s), o.push(l); for (var c = t.length - 1, h = 1; h <= c; h++) { var f = qp(t[h], !1);
                                        f.offset = xy((n + f.offset * r) / a), o.push(f) }
                                    r = a, n = 0, i = "", t = o } return yy(this.element, t, this.preStyleProps, this.postStyleProps, r, n, i, !0) } }]), n }(Cy);

                function xy(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                        n = Math.pow(10, e - 1); return Math.round(t * n) / n } var Ty = function t() { v(this, t) },
                    Ay = function(t) { s(n, t); var e = l(n);

                        function n() { return v(this, n), e.apply(this, arguments) } return y(n, [{ key: "normalizePropertyName", value: function(t, e) { return ey(t) } }, { key: "normalizeStyleValue", value: function(t, e, n, r) { var i = "",
                                    o = n.toString().trim(); if (Oy[e] && 0 !== n && "0" !== n)
                                    if ("number" == typeof n) i = "px";
                                    else { var a = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                                        a && 0 == a[1].length && r.push("Please provide a CSS unit value for ".concat(t, ":").concat(n)) }
                                return o + i } }]), n }(Ty),
                    Oy = function(t) { var e = {}; return t.forEach((function(t) { return e[t] = !0 })), e }("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(","));

                function Py(t, e, n, r, i, o, a, s, u, l, c, h, f) { return { type: 0, element: t, triggerName: e, isRemovalTransition: i, fromState: n, fromStyles: o, toState: r, toStyles: a, timelines: s, queriedElements: u, preStyleProps: l, postStyleProps: c, totalTime: h, errors: f } } var Ry = {},
                    Iy = function() {
                        function t(e, n, r) { v(this, t), this._triggerName = e, this.ast = n, this._stateStyles = r } return y(t, [{ key: "match", value: function(t, e, n, r) { return function(t, e, n, r, i) { return t.some((function(t) { return t(e, n, r, i) })) }(this.ast.matchers, t, e, n, r) } }, { key: "buildStyles", value: function(t, e, n) { var r = this._stateStyles["*"],
                                    i = this._stateStyles[t],
                                    o = r ? r.buildStyles(e, n) : {}; return i ? i.buildStyles(e, n) : o } }, { key: "build", value: function(t, e, n, r, i, o, a, s, u, l) { var c = [],
                                    h = this.ast.options && this.ast.options.params || Ry,
                                    f = this.buildStyles(n, a && a.params || Ry, c),
                                    d = s && s.params || Ry,
                                    v = this.buildStyles(r, d, c),
                                    p = new Set,
                                    y = new Map,
                                    g = new Map,
                                    m = "void" === r,
                                    _ = { params: Object.assign(Object.assign({}, h), d) },
                                    k = l ? [] : ky(t, e, this.ast.animation, i, o, f, v, _, u, c),
                                    w = 0; if (k.forEach((function(t) { w = Math.max(t.duration + t.delay, w) })), c.length) return Py(e, this._triggerName, n, r, m, f, v, [], [], y, g, w, c);
                                k.forEach((function(t) { var n = t.element,
                                        r = Cp(y, n, {});
                                    t.preStyleProps.forEach((function(t) { return r[t] = !0 })); var i = Cp(g, n, {});
                                    t.postStyleProps.forEach((function(t) { return i[t] = !0 })), n !== e && p.add(n) })); var b = Jp(p.values()); return Py(e, this._triggerName, n, r, m, f, v, k, b, y, g, w) } }]), t }(),
                    Dy = function() {
                        function t(e, n) { v(this, t), this.styles = e, this.defaultParams = n } return y(t, [{ key: "buildStyles", value: function(t, e) { var n = {},
                                    r = zp(this.defaultParams); return Object.keys(t).forEach((function(e) { var n = t[e];
                                    null != n && (r[e] = n) })), this.styles.styles.forEach((function(t) { if ("string" != typeof t) { var i = t;
                                        Object.keys(i).forEach((function(t) { var o = i[t];
                                            o.length > 1 && (o = $p(o, r, e)), n[t] = o })) } })), n } }]), t }(),
                    Ny = function() {
                        function t(e, n) { var r = this;
                            v(this, t), this.name = e, this.ast = n, this.transitionFactories = [], this.states = {}, n.states.forEach((function(t) { r.states[t.name] = new Dy(t.style, t.options && t.options.params || {}) })), jy(this.states, "true", "1"), jy(this.states, "false", "0"), n.transitions.forEach((function(t) { r.transitionFactories.push(new Iy(e, t, r.states)) })), this.fallbackTransition = new Iy(e, { type: 1, animation: { type: 2, steps: [], options: null }, matchers: [function(t, e) { return !0 }], options: null, queryCount: 0, depCount: 0 }, this.states) } return y(t, [{ key: "containsQueries", get: function() { return this.ast.queryCount > 0 } }, { key: "matchTransition", value: function(t, e, n, r) { return this.transitionFactories.find((function(i) { return i.match(t, e, n, r) })) || null } }, { key: "matchStyles", value: function(t, e, n) { return this.fallbackTransition.buildStyles(t, e, n) } }]), t }();

                function jy(t, e, n) { t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n]) } var Fy = new gy,
                    Ly = function() {
                        function t(e, n, r) { v(this, t), this.bodyNode = e, this._driver = n, this._normalizer = r, this._animations = {}, this._playersById = {}, this.players = [] } return y(t, [{ key: "register", value: function(t, e) { var n = [],
                                    r = cy(this._driver, e, n); if (n.length) throw new Error("Unable to build the animation due to the following errors: " + n.join("\n"));
                                this._animations[t] = r } }, { key: "_buildPlayer", value: function(t, e, n) { var r = t.element,
                                    i = kp(0, this._normalizer, 0, t.keyframes, e, n); return this._driver.animate(r, i, t.duration, t.delay, t.easing, [], !0) } }, { key: "create", value: function(t, e) { var n, r = this,
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    o = [],
                                    a = this._animations[t],
                                    s = new Map; if (a ? (n = ky(this._driver, e, a, "ng-enter", "ng-leave", {}, {}, i, Fy, o)).forEach((function(t) { var e = Cp(s, t.element, {});
                                        t.postStyleProps.forEach((function(t) { return e[t] = null })) })) : (o.push("The requested animation doesn't exist or has already been destroyed"), n = []), o.length) throw new Error("Unable to create the animation due to the following errors: " + o.join("\n"));
                                s.forEach((function(t, e) { Object.keys(t).forEach((function(n) { t[n] = r._driver.computeStyle(e, n, "*") })) })); var u = _p(n.map((function(t) { var e = s.get(t.element); return r._buildPlayer(t, {}, e) }))); return this._playersById[t] = u, u.onDestroy((function() { return r.destroy(t) })), this.players.push(u), u } }, { key: "destroy", value: function(t) { var e = this._getPlayer(t);
                                e.destroy(), delete this._playersById[t]; var n = this.players.indexOf(e);
                                n >= 0 && this.players.splice(n, 1) } }, { key: "_getPlayer", value: function(t) { var e = this._playersById[t]; if (!e) throw new Error("Unable to find the timeline player referenced by " + t); return e } }, { key: "listen", value: function(t, e, n, r) { var i = Sp(e, "", "", ""); return wp(this._getPlayer(t), n, i, r),
                                    function() {} } }, { key: "command", value: function(t, e, n, r) { if ("register" != n)
                                    if ("create" != n) { var i = this._getPlayer(t); switch (n) {
                                            case "play":
                                                i.play(); break;
                                            case "pause":
                                                i.pause(); break;
                                            case "reset":
                                                i.reset(); break;
                                            case "restart":
                                                i.restart(); break;
                                            case "finish":
                                                i.finish(); break;
                                            case "init":
                                                i.init(); break;
                                            case "setPosition":
                                                i.setPosition(parseFloat(r[0])); break;
                                            case "destroy":
                                                this.destroy(t) } } else this.create(t, e, r[0] || {});
                                else this.register(t, r[0]) } }]), t }(),
                    My = [],
                    Hy = { namespaceId: "", setForRemoval: !1, setForMove: !1, hasAnimation: !1, removedBeforeQueried: !1 },
                    By = { namespaceId: "", setForMove: !1, setForRemoval: !1, hasAnimation: !1, removedBeforeQueried: !0 },
                    Vy = function() {
                        function t(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            v(this, t), this.namespaceId = n; var r, i = e && e.hasOwnProperty("value"); if (this.value = null != (r = i ? e.value : e) ? r : null, i) { var o = zp(e);
                                delete o.value, this.options = o } else this.options = {};
                            this.options.params || (this.options.params = {}) } return y(t, [{ key: "params", get: function() { return this.options.params } }, { key: "absorbOptions", value: function(t) { var e = t.params; if (e) { var n = this.options.params;
                                    Object.keys(e).forEach((function(t) { null == n[t] && (n[t] = e[t]) })) } } }]), t }(),
                    Uy = new Vy("void"),
                    zy = function() {
                        function t(e, n, r) { v(this, t), this.id = e, this.hostElement = n, this._engine = r, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + e, Yy(n, this._hostClassName) } return y(t, [{ key: "listen", value: function(t, e, n, r) { var i, o = this; if (!this._triggers.hasOwnProperty(e)) throw new Error('Unable to listen on the animation trigger event "'.concat(n, '" because the animation trigger "').concat(e, "\" doesn't exist!")); if (null == n || 0 == n.length) throw new Error('Unable to listen on the animation trigger "'.concat(e, '" because the provided event is undefined!')); if ("start" != (i = n) && "done" != i) throw new Error('The provided animation trigger event "'.concat(n, '" for the animation trigger "').concat(e, '" is not supported!')); var a = Cp(this._elementListeners, t, []),
                                    s = { name: e, phase: n, callback: r };
                                a.push(s); var u = Cp(this._engine.statesByElement, t, {}); return u.hasOwnProperty(e) || (Yy(t, "ng-trigger"), Yy(t, "ng-trigger-" + e), u[e] = Uy),
                                    function() { o._engine.afterFlush((function() { var t = a.indexOf(s);
                                            t >= 0 && a.splice(t, 1), o._triggers[e] || delete u[e] })) } } }, { key: "register", value: function(t, e) { return !this._triggers[t] && (this._triggers[t] = e, !0) } }, { key: "_getTrigger", value: function(t) { var e = this._triggers[t]; if (!e) throw new Error('The provided animation trigger "'.concat(t, '" has not been registered!')); return e } }, { key: "trigger", value: function(t, e, n) { var r = this,
                                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                                    o = this._getTrigger(e),
                                    a = new Wy(this.id, e, t),
                                    s = this._engine.statesByElement.get(t);
                                s || (Yy(t, "ng-trigger"), Yy(t, "ng-trigger-" + e), this._engine.statesByElement.set(t, s = {})); var u = s[e],
                                    l = new Vy(n, this.id); if (!(n && n.hasOwnProperty("value")) && u && l.absorbOptions(u.options), s[e] = l, u || (u = Uy), "void" === l.value || u.value !== l.value) { var c = Cp(this._engine.playersByElement, t, []);
                                    c.forEach((function(t) { t.namespaceId == r.id && t.triggerName == e && t.queued && t.destroy() })); var h = o.matchTransition(u.value, l.value, t, l.params),
                                        f = !1; if (!h) { if (!i) return;
                                        h = o.fallbackTransition, f = !0 } return this._engine.totalQueuedPlayers++, this._queue.push({ element: t, triggerName: e, transition: h, fromState: u, toState: l, player: a, isFallbackTransition: f }), f || (Yy(t, "ng-animate-queued"), a.onStart((function() { Xy(t, "ng-animate-queued") }))), a.onDone((function() { var e = r.players.indexOf(a);
                                        e >= 0 && r.players.splice(e, 1); var n = r._engine.playersByElement.get(t); if (n) { var i = n.indexOf(a);
                                            i >= 0 && n.splice(i, 1) } })), this.players.push(a), c.push(a), a } if (! function(t, e) { var n = Object.keys(t),
                                            r = Object.keys(e); if (n.length != r.length) return !1; for (var i = 0; i < n.length; i++) { var o = n[i]; if (!e.hasOwnProperty(o) || t[o] !== e[o]) return !1 } return !0 }(u.params, l.params)) { var d = [],
                                        v = o.matchStyles(u.value, u.params, d),
                                        p = o.matchStyles(l.value, l.params, d);
                                    d.length ? this._engine.reportError(d) : this._engine.afterFlush((function() { Kp(t, v), Zp(t, p) })) } } }, { key: "deregister", value: function(t) { var e = this;
                                delete this._triggers[t], this._engine.statesByElement.forEach((function(e, n) { delete e[t] })), this._elementListeners.forEach((function(n, r) { e._elementListeners.set(r, n.filter((function(e) { return e.name != t }))) })) } }, { key: "clearElementCache", value: function(t) { this._engine.statesByElement.delete(t), this._elementListeners.delete(t); var e = this._engine.playersByElement.get(t);
                                e && (e.forEach((function(t) { return t.destroy() })), this._engine.playersByElement.delete(t)) } }, { key: "_signalRemovalForInnerTriggers", value: function(t, e) { var n = this,
                                    r = this._engine.driver.query(t, ".ng-trigger", !0);
                                r.forEach((function(t) { if (!t.__ng_removed) { var r = n._engine.fetchNamespacesByElement(t);
                                        r.size ? r.forEach((function(n) { return n.triggerLeaveAnimation(t, e, !1, !0) })) : n.clearElementCache(t) } })), this._engine.afterFlushAnimationsDone((function() { return r.forEach((function(t) { return n.clearElementCache(t) })) })) } }, { key: "triggerLeaveAnimation", value: function(t, e, n, r) { var i = this,
                                    o = this._engine.statesByElement.get(t); if (o) { var a = []; if (Object.keys(o).forEach((function(e) { if (i._triggers[e]) { var n = i.trigger(t, e, "void", r);
                                                n && a.push(n) } })), a.length) return this._engine.markElementAsRemoved(this.id, t, !0, e), n && _p(a).onDone((function() { return i._engine.processLeaveNode(t) })), !0 } return !1 } }, { key: "prepareLeaveAnimationListeners", value: function(t) { var e = this,
                                    n = this._elementListeners.get(t); if (n) { var r = new Set;
                                    n.forEach((function(n) { var i = n.name; if (!r.has(i)) { r.add(i); var o = e._triggers[i].fallbackTransition,
                                                a = e._engine.statesByElement.get(t)[i] || Uy,
                                                s = new Vy("void"),
                                                u = new Wy(e.id, i, t);
                                            e._engine.totalQueuedPlayers++, e._queue.push({ element: t, triggerName: i, transition: o, fromState: a, toState: s, player: u, isFallbackTransition: !0 }) } })) } } }, { key: "removeNode", value: function(t, e) { var n = this,
                                    r = this._engine; if (t.childElementCount && this._signalRemovalForInnerTriggers(t, e), !this.triggerLeaveAnimation(t, e, !0)) { var i = !1; if (r.totalAnimations) { var o = r.players.length ? r.playersByQueriedElement.get(t) : []; if (o && o.length) i = !0;
                                        else
                                            for (var a = t; a = a.parentNode;)
                                                if (r.statesByElement.get(a)) { i = !0; break } } if (this.prepareLeaveAnimationListeners(t), i) r.markElementAsRemoved(this.id, t, !1, e);
                                    else { var s = t.__ng_removed;
                                        s && s !== Hy || (r.afterFlush((function() { return n.clearElementCache(t) })), r.destroyInnerAnimations(t), r._onRemovalComplete(t, e)) } } } }, { key: "insertNode", value: function(t, e) { Yy(t, this._hostClassName) } }, { key: "drainQueuedTransitions", value: function(t) { var e = this,
                                    n = []; return this._queue.forEach((function(r) { var i = r.player; if (!i.destroyed) { var o = r.element,
                                            a = e._elementListeners.get(o);
                                        a && a.forEach((function(e) { if (e.name == r.triggerName) { var n = Sp(o, r.triggerName, r.fromState.value, r.toState.value);
                                                n._data = t, wp(r.player, e.phase, n, e.callback) } })), i.markedForDestroy ? e._engine.afterFlush((function() { i.destroy() })) : n.push(r) } })), this._queue = [], n.sort((function(t, n) { var r = t.transition.ast.depCount,
                                        i = n.transition.ast.depCount; return 0 == r || 0 == i ? r - i : e._engine.driver.containsElement(t.element, n.element) ? 1 : -1 })) } }, { key: "destroy", value: function(t) { this.players.forEach((function(t) { return t.destroy() })), this._signalRemovalForInnerTriggers(this.hostElement, t) } }, { key: "elementContainsData", value: function(t) { var e = !1; return this._elementListeners.has(t) && (e = !0), e = !!this._queue.find((function(e) { return e.element === t })) || e } }]), t }(),
                    qy = function() {
                        function t(e, n, r) { v(this, t), this.bodyNode = e, this.driver = n, this._normalizer = r, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = function(t, e) {} } return y(t, [{ key: "_onRemovalComplete", value: function(t, e) { this.onRemovalComplete(t, e) } }, { key: "queuedPlayers", get: function() { var t = []; return this._namespaceList.forEach((function(e) { e.players.forEach((function(e) { e.queued && t.push(e) })) })), t } }, { key: "createNamespace", value: function(t, e) { var n = new zy(t, e, this); return e.parentNode ? this._balanceNamespaceList(n, e) : (this.newHostElements.set(e, n), this.collectEnterElement(e)), this._namespaceLookup[t] = n } }, { key: "_balanceNamespaceList", value: function(t, e) { var n = this._namespaceList.length - 1; if (n >= 0) { for (var r = !1, i = n; i >= 0; i--)
                                        if (this.driver.containsElement(this._namespaceList[i].hostElement, e)) { this._namespaceList.splice(i + 1, 0, t), r = !0; break }
                                    r || this._namespaceList.splice(0, 0, t) } else this._namespaceList.push(t); return this.namespacesByHostElement.set(e, t), t } }, { key: "register", value: function(t, e) { var n = this._namespaceLookup[t]; return n || (n = this.createNamespace(t, e)), n } }, { key: "registerTrigger", value: function(t, e, n) { var r = this._namespaceLookup[t];
                                r && r.register(e, n) && this.totalAnimations++ } }, { key: "destroy", value: function(t, e) { var n = this; if (t) { var r = this._fetchNamespace(t);
                                    this.afterFlush((function() { n.namespacesByHostElement.delete(r.hostElement), delete n._namespaceLookup[t]; var e = n._namespaceList.indexOf(r);
                                        e >= 0 && n._namespaceList.splice(e, 1) })), this.afterFlushAnimationsDone((function() { return r.destroy(e) })) } } }, { key: "_fetchNamespace", value: function(t) { return this._namespaceLookup[t] } }, { key: "fetchNamespacesByElement", value: function(t) { var e = new Set,
                                    n = this.statesByElement.get(t); if (n)
                                    for (var r = Object.keys(n), i = 0; i < r.length; i++) { var o = n[r[i]].namespaceId; if (o) { var a = this._fetchNamespace(o);
                                            a && e.add(a) } }
                                return e } }, { key: "trigger", value: function(t, e, n, r) { if (Qy(e)) { var i = this._fetchNamespace(t); if (i) return i.trigger(e, n, r), !0 } return !1 } }, { key: "insertNode", value: function(t, e, n, r) { if (Qy(e)) { var i = e.__ng_removed; if (i && i.setForRemoval) { i.setForRemoval = !1, i.setForMove = !0; var o = this.collectedLeaveElements.indexOf(e);
                                        o >= 0 && this.collectedLeaveElements.splice(o, 1) } if (t) { var a = this._fetchNamespace(t);
                                        a && a.insertNode(e, n) }
                                    r && this.collectEnterElement(e) } } }, { key: "collectEnterElement", value: function(t) { this.collectedEnterElements.push(t) } }, { key: "markElementAsDisabled", value: function(t, e) { e ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), Yy(t, "ng-animate-disabled")) : this.disabledNodes.has(t) && (this.disabledNodes.delete(t), Xy(t, "ng-animate-disabled")) } }, { key: "removeNode", value: function(t, e, n, r) { if (Qy(e)) { var i = t ? this._fetchNamespace(t) : null; if (i ? i.removeNode(e, r) : this.markElementAsRemoved(t, e, !1, r), n) { var o = this.namespacesByHostElement.get(e);
                                        o && o.id !== t && o.removeNode(e, r) } } else this._onRemovalComplete(e, r) } }, { key: "markElementAsRemoved", value: function(t, e, n, r) { this.collectedLeaveElements.push(e), e.__ng_removed = { namespaceId: t, setForRemoval: r, hasAnimation: n, removedBeforeQueried: !1 } } }, { key: "listen", value: function(t, e, n, r, i) { return Qy(e) ? this._fetchNamespace(t).listen(e, n, r, i) : function() {} } }, { key: "_buildInstruction", value: function(t, e, n, r, i) { return t.transition.build(this.driver, t.element, t.fromState.value, t.toState.value, n, r, t.fromState.options, t.toState.options, e, i) } }, { key: "destroyInnerAnimations", value: function(t) { var e = this,
                                    n = this.driver.query(t, ".ng-trigger", !0);
                                n.forEach((function(t) { return e.destroyActiveAnimationsForElement(t) })), 0 != this.playersByQueriedElement.size && (n = this.driver.query(t, ".ng-animating", !0)).forEach((function(t) { return e.finishActiveQueriedAnimationOnElement(t) })) } }, { key: "destroyActiveAnimationsForElement", value: function(t) { var e = this.playersByElement.get(t);
                                e && e.forEach((function(t) { t.queued ? t.markedForDestroy = !0 : t.destroy() })) } }, { key: "finishActiveQueriedAnimationOnElement", value: function(t) { var e = this.playersByQueriedElement.get(t);
                                e && e.forEach((function(t) { return t.finish() })) } }, { key: "whenRenderingDone", value: function() { var t = this; return new Promise((function(e) { if (t.players.length) return _p(t.players).onDone((function() { return e() }));
                                    e() })) } }, { key: "processLeaveNode", value: function(t) { var e = this,
                                    n = t.__ng_removed; if (n && n.setForRemoval) { if (t.__ng_removed = Hy, n.namespaceId) { this.destroyInnerAnimations(t); var r = this._fetchNamespace(n.namespaceId);
                                        r && r.clearElementCache(t) }
                                    this._onRemovalComplete(t, n.setForRemoval) }
                                this.driver.matchesElement(t, ".ng-animate-disabled") && this.markElementAsDisabled(t, !1), this.driver.query(t, ".ng-animate-disabled", !0).forEach((function(t) { e.markElementAsDisabled(t, !1) })) } }, { key: "flush", value: function() { var t = this,
                                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
                                    n = []; if (this.newHostElements.size && (this.newHostElements.forEach((function(e, n) { return t._balanceNamespaceList(e, n) })), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length)
                                    for (var r = 0; r < this.collectedEnterElements.length; r++) Yy(this.collectedEnterElements[r], "ng-star-inserted"); if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) { var i = []; try { n = this._flushAnimations(i, e) } finally { for (var o = 0; o < i.length; o++) i[o]() } } else
                                    for (var a = 0; a < this.collectedLeaveElements.length; a++) this.processLeaveNode(this.collectedLeaveElements[a]); if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach((function(t) { return t() })), this._flushFns = [], this._whenQuietFns.length) { var s = this._whenQuietFns;
                                    this._whenQuietFns = [], n.length ? _p(n).onDone((function() { s.forEach((function(t) { return t() })) })) : s.forEach((function(t) { return t() })) } } }, { key: "reportError", value: function(t) { throw new Error("Unable to process animations due to the following failed trigger transitions\n " + t.join("\n")) } }, { key: "_flushAnimations", value: function(t, e) { var r = this,
                                    i = new gy,
                                    o = [],
                                    a = new Map,
                                    s = [],
                                    u = new Map,
                                    l = new Map,
                                    c = new Map,
                                    h = new Set;
                                this.disabledNodes.forEach((function(t) { h.add(t); for (var e = r.driver.query(t, ".ng-animate-queued", !0), n = 0; n < e.length; n++) h.add(e[n]) })); var f = this.bodyNode,
                                    d = Array.from(this.statesByElement.keys()),
                                    v = Gy(d, this.collectedEnterElements),
                                    p = new Map,
                                    y = 0;
                                v.forEach((function(t, e) { var n = "ng-enter" + y++;
                                    p.set(e, n), t.forEach((function(t) { return Yy(t, n) })) })); for (var g = [], m = new Set, _ = new Set, k = 0; k < this.collectedLeaveElements.length; k++) { var w = this.collectedLeaveElements[k],
                                        b = w.__ng_removed;
                                    b && b.setForRemoval && (g.push(w), m.add(w), b.hasAnimation ? this.driver.query(w, ".ng-star-inserted", !0).forEach((function(t) { return m.add(t) })) : _.add(w)) } var S = new Map,
                                    C = Gy(d, Array.from(m));
                                C.forEach((function(t, e) { var n = "ng-leave" + y++;
                                    S.set(e, n), t.forEach((function(t) { return Yy(t, n) })) })), t.push((function() { v.forEach((function(t, e) { var n = p.get(e);
                                        t.forEach((function(t) { return Xy(t, n) })) })), C.forEach((function(t, e) { var n = S.get(e);
                                        t.forEach((function(t) { return Xy(t, n) })) })), g.forEach((function(t) { r.processLeaveNode(t) })) })); for (var E = [], x = [], T = this._namespaceList.length - 1; T >= 0; T--) this._namespaceList[T].drainQueuedTransitions(e).forEach((function(t) { var e = t.player,
                                        n = t.element; if (E.push(e), r.collectedEnterElements.length) { var a = n.__ng_removed; if (a && a.setForMove) return void e.destroy() } var h = !f || !r.driver.containsElement(f, n),
                                        d = S.get(n),
                                        v = p.get(n),
                                        y = r._buildInstruction(t, i, v, d, h); if (y.errors && y.errors.length) x.push(y);
                                    else { if (h) return e.onStart((function() { return Kp(n, y.fromStyles) })), e.onDestroy((function() { return Zp(n, y.toStyles) })), void o.push(e); if (t.isFallbackTransition) return e.onStart((function() { return Kp(n, y.fromStyles) })), e.onDestroy((function() { return Zp(n, y.toStyles) })), void o.push(e);
                                        y.timelines.forEach((function(t) { return t.stretchStartingKeyframe = !0 })), i.append(n, y.timelines), s.push({ instruction: y, player: e, element: n }), y.queriedElements.forEach((function(t) { return Cp(u, t, []).push(e) })), y.preStyleProps.forEach((function(t, e) { var n = Object.keys(t); if (n.length) { var r = l.get(e);
                                                r || l.set(e, r = new Set), n.forEach((function(t) { return r.add(t) })) } })), y.postStyleProps.forEach((function(t, e) { var n = Object.keys(t),
                                                r = c.get(e);
                                            r || c.set(e, r = new Set), n.forEach((function(t) { return r.add(t) })) })) } })); if (x.length) { var A = [];
                                    x.forEach((function(t) { A.push("@".concat(t.triggerName, " has failed due to:\n")), t.errors.forEach((function(t) { return A.push("- ".concat(t, "\n")) })) })), E.forEach((function(t) { return t.destroy() })), this.reportError(A) } var O = new Map,
                                    P = new Map;
                                s.forEach((function(t) { var e = t.element;
                                    i.has(e) && (P.set(e, e), r._beforeAnimationBuild(t.player.namespaceId, t.instruction, O)) })), o.forEach((function(t) { var e = t.element;
                                    r._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach((function(t) { Cp(O, e, []).push(t), t.destroy() })) })); var R = g.filter((function(t) { return Jy(t, l, c) })),
                                    I = new Map;
                                Ky(I, this.driver, _, c, "*").forEach((function(t) { Jy(t, l, c) && R.push(t) })); var D = new Map;
                                v.forEach((function(t, e) { Ky(D, r.driver, new Set(t), l, "!") })), R.forEach((function(t) { var e = I.get(t),
                                        n = D.get(t);
                                    I.set(t, Object.assign(Object.assign({}, e), n)) })); var N = [],
                                    j = [],
                                    F = {};
                                s.forEach((function(t) { var e = t.element,
                                        n = t.player,
                                        s = t.instruction; if (i.has(e)) { if (h.has(e)) return n.onDestroy((function() { return Zp(e, s.toStyles) })), n.disabled = !0, n.overrideTotalTime(s.totalTime), void o.push(n); var u = F; if (P.size > 1) { for (var l = e, c = []; l = l.parentNode;) { var f = P.get(l); if (f) { u = f; break }
                                                c.push(l) }
                                            c.forEach((function(t) { return P.set(t, u) })) } var d = r._buildAnimation(n.namespaceId, s, O, a, D, I); if (n.setRealPlayer(d), u === F) N.push(n);
                                        else { var v = r.playersByElement.get(u);
                                            v && v.length && (n.parentPlayer = _p(v)), o.push(n) } } else Kp(e, s.fromStyles), n.onDestroy((function() { return Zp(e, s.toStyles) })), j.push(n), h.has(e) && o.push(n) })), j.forEach((function(t) { var e = a.get(t.element); if (e && e.length) { var n = _p(e);
                                        t.setRealPlayer(n) } })), o.forEach((function(t) { t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy() })); for (var L = 0; L < g.length; L++) { var M = g[L],
                                        H = M.__ng_removed; if (Xy(M, "ng-leave"), !H || !H.hasAnimation) { var B = []; if (u.size) { var V = u.get(M);
                                            V && V.length && B.push.apply(B, n(V)); for (var U = this.driver.query(M, ".ng-animating", !0), z = 0; z < U.length; z++) { var q = u.get(U[z]);
                                                q && q.length && B.push.apply(B, n(q)) } } var W = B.filter((function(t) { return !t.destroyed }));
                                        W.length ? $y(this, M, W) : this.processLeaveNode(M) } } return g.length = 0, N.forEach((function(t) { r.players.push(t), t.onDone((function() { t.destroy(); var e = r.players.indexOf(t);
                                        r.players.splice(e, 1) })), t.play() })), N } }, { key: "elementContainsData", value: function(t, e) { var n = !1,
                                    r = e.__ng_removed; return r && r.setForRemoval && (n = !0), this.playersByElement.has(e) && (n = !0), this.playersByQueriedElement.has(e) && (n = !0), this.statesByElement.has(e) && (n = !0), this._fetchNamespace(t).elementContainsData(e) || n } }, { key: "afterFlush", value: function(t) { this._flushFns.push(t) } }, { key: "afterFlushAnimationsDone", value: function(t) { this._whenQuietFns.push(t) } }, { key: "_getPreviousPlayers", value: function(t, e, n, r, i) { var o = []; if (e) { var a = this.playersByQueriedElement.get(t);
                                    a && (o = a) } else { var s = this.playersByElement.get(t); if (s) { var u = !i || "void" == i;
                                        s.forEach((function(t) { t.queued || (u || t.triggerName == r) && o.push(t) })) } } return (n || r) && (o = o.filter((function(t) { return !(n && n != t.namespaceId || r && r != t.triggerName) }))), o } }, { key: "_beforeAnimationBuild", value: function(t, n, r) { var i, o = this,
                                    a = n.element,
                                    s = n.isRemovalTransition ? void 0 : t,
                                    u = n.isRemovalTransition ? void 0 : n.triggerName,
                                    l = e(n.timelines); try { var c = function() { var t = i.value.element,
                                            e = t !== a,
                                            l = Cp(r, t, []);
                                        o._getPreviousPlayers(t, e, s, u, n.toState).forEach((function(t) { var e = t.getRealPlayer();
                                            e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t) })) }; for (l.s(); !(i = l.n()).done;) c() } catch (h) { l.e(h) } finally { l.f() }
                                Kp(a, n.fromStyles) } }, { key: "_buildAnimation", value: function(t, e, n, r, i, o) { var a = this,
                                    s = e.triggerName,
                                    u = e.element,
                                    l = [],
                                    c = new Set,
                                    h = new Set,
                                    f = e.timelines.map((function(e) { var f = e.element;
                                        c.add(f); var d = f.__ng_removed; if (d && d.removedBeforeQueried) return new yp(e.duration, e.delay); var v, p, y = f !== u,
                                            g = (v = (n.get(f) || My).map((function(t) { return t.getRealPlayer() })), p = [], function t(e, n) { for (var r = 0; r < e.length; r++) { var i = e[r];
                                                    i instanceof gp ? t(i.players, n) : n.push(i) } }(v, p), p).filter((function(t) { return !!t.element && t.element === f })),
                                            m = i.get(f),
                                            _ = o.get(f),
                                            k = kp(0, a._normalizer, 0, e.keyframes, m, _),
                                            w = a._buildPlayer(e, k, g); if (e.subTimeline && r && h.add(f), y) { var b = new Wy(t, s, f);
                                            b.setRealPlayer(w), l.push(b) } return w }));
                                l.forEach((function(t) { Cp(a.playersByQueriedElement, t.element, []).push(t), t.onDone((function() { return function(t, e, n) { var r; if (t instanceof Map) { if (r = t.get(e)) { if (r.length) { var i = r.indexOf(n);
                                                        r.splice(i, 1) }
                                                    0 == r.length && t.delete(e) } } else if (r = t[e]) { if (r.length) { var o = r.indexOf(n);
                                                    r.splice(o, 1) }
                                                0 == r.length && delete t[e] } return r }(a.playersByQueriedElement, t.element, t) })) })), c.forEach((function(t) { return Yy(t, "ng-animating") })); var d = _p(f); return d.onDestroy((function() { c.forEach((function(t) { return Xy(t, "ng-animating") })), Zp(u, e.toStyles) })), h.forEach((function(t) { Cp(r, t, []).push(d) })), d } }, { key: "_buildPlayer", value: function(t, e, n) { return e.length > 0 ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n) : new yp(t.duration, t.delay) } }]), t }(),
                    Wy = function() {
                        function t(e, n, r) { v(this, t), this.namespaceId = e, this.triggerName = n, this.element = r, this._player = new yp, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0 } return y(t, [{ key: "setRealPlayer", value: function(t) { var e = this;
                                this._containsRealPlayer || (this._player = t, Object.keys(this._queuedCallbacks).forEach((function(n) { e._queuedCallbacks[n].forEach((function(e) { return wp(t, n, void 0, e) })) })), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(t.totalTime), this.queued = !1) } }, { key: "getRealPlayer", value: function() { return this._player } }, { key: "overrideTotalTime", value: function(t) { this.totalTime = t } }, { key: "syncPlayerEvents", value: function(t) { var e = this,
                                    n = this._player;
                                n.triggerCallback && t.onStart((function() { return n.triggerCallback("start") })), t.onDone((function() { return e.finish() })), t.onDestroy((function() { return e.destroy() })) } }, { key: "_queueEvent", value: function(t, e) { Cp(this._queuedCallbacks, t, []).push(e) } }, { key: "onDone", value: function(t) { this.queued && this._queueEvent("done", t), this._player.onDone(t) } }, { key: "onStart", value: function(t) { this.queued && this._queueEvent("start", t), this._player.onStart(t) } }, { key: "onDestroy", value: function(t) { this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t) } }, { key: "init", value: function() { this._player.init() } }, { key: "hasStarted", value: function() { return !this.queued && this._player.hasStarted() } }, { key: "play", value: function() {!this.queued && this._player.play() } }, { key: "pause", value: function() {!this.queued && this._player.pause() } }, { key: "restart", value: function() {!this.queued && this._player.restart() } }, { key: "finish", value: function() { this._player.finish() } }, { key: "destroy", value: function() { this.destroyed = !0, this._player.destroy() } }, { key: "reset", value: function() {!this.queued && this._player.reset() } }, { key: "setPosition", value: function(t) { this.queued || this._player.setPosition(t) } }, { key: "getPosition", value: function() { return this.queued ? 0 : this._player.getPosition() } }, { key: "triggerCallback", value: function(t) { var e = this._player;
                                e.triggerCallback && e.triggerCallback(t) } }]), t }();

                function Qy(t) { return t && 1 === t.nodeType }

                function Zy(t, e) { var n = t.style.display; return t.style.display = null != e ? e : "none", n }

                function Ky(t, e, n, r, i) { var o = [];
                    n.forEach((function(t) { return o.push(Zy(t)) })); var a = [];
                    r.forEach((function(n, r) { var o = {};
                        n.forEach((function(t) { var n = o[t] = e.computeStyle(r, t, i);
                            n && 0 != n.length || (r.__ng_removed = By, a.push(r)) })), t.set(r, o) })); var s = 0; return n.forEach((function(t) { return Zy(t, o[s++]) })), a }

                function Gy(t, e) { var n = new Map; if (t.forEach((function(t) { return n.set(t, []) })), 0 == e.length) return n; var r = new Set(e),
                        i = new Map; return e.forEach((function(t) { var e = function t(e) { if (!e) return 1; var o = i.get(e); if (o) return o; var a = e.parentNode; return o = n.has(a) ? a : r.has(a) ? 1 : t(a), i.set(e, o), o }(t);
                        1 !== e && n.get(e).push(t) })), n }

                function Yy(t, e) { if (t.classList) t.classList.add(e);
                    else { var n = t.$$classes;
                        n || (n = t.$$classes = {}), n[e] = !0 } }

                function Xy(t, e) { if (t.classList) t.classList.remove(e);
                    else { var n = t.$$classes;
                        n && delete n[e] } }

                function $y(t, e, n) { _p(n).onDone((function() { return t.processLeaveNode(e) })) }

                function Jy(t, e, n) { var r = n.get(t); if (!r) return !1; var i = e.get(t); return i ? r.forEach((function(t) { return i.add(t) })) : e.set(t, r), n.delete(t), !0 } var tg = function() {
                    function e(t, n, r) { var i = this;
                        v(this, e), this.bodyNode = t, this._driver = n, this._triggerCache = {}, this.onRemovalComplete = function(t, e) {}, this._transitionEngine = new qy(t, n, r), this._timelineEngine = new Ly(t, n, r), this._transitionEngine.onRemovalComplete = function(t, e) { return i.onRemovalComplete(t, e) } } return y(e, [{ key: "registerTrigger", value: function(t, e, n, r, i) { var o = t + "-" + r,
                                a = this._triggerCache[o]; if (!a) { var s = [],
                                    u = cy(this._driver, i, s); if (s.length) throw new Error('The animation trigger "'.concat(r, '" has failed to build due to the following errors:\n - ').concat(s.join("\n - ")));
                                a = function(t, e) { return new Ny(t, e) }(r, u), this._triggerCache[o] = a }
                            this._transitionEngine.registerTrigger(e, r, a) } }, { key: "register", value: function(t, e) { this._transitionEngine.register(t, e) } }, { key: "destroy", value: function(t, e) { this._transitionEngine.destroy(t, e) } }, { key: "onInsert", value: function(t, e, n, r) { this._transitionEngine.insertNode(t, e, n, r) } }, { key: "onRemove", value: function(t, e, n, r) { this._transitionEngine.removeNode(t, e, r || !1, n) } }, { key: "disableAnimations", value: function(t, e) { this._transitionEngine.markElementAsDisabled(t, e) } }, { key: "process", value: function(e, n, r, i) { if ("@" == r.charAt(0)) { var o = t(Ep(r), 2),
                                    a = o[0],
                                    s = o[1];
                                this._timelineEngine.command(a, n, s, i) } else this._transitionEngine.trigger(e, n, r, i) } }, { key: "listen", value: function(e, n, r, i, o) { if ("@" == r.charAt(0)) { var a = t(Ep(r), 2),
                                    s = a[0],
                                    u = a[1]; return this._timelineEngine.listen(s, n, u, o) } return this._transitionEngine.listen(e, n, r, i, o) } }, { key: "flush", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                            this._transitionEngine.flush(t) } }, { key: "players", get: function() { return this._transitionEngine.players.concat(this._timelineEngine.players) } }, { key: "whenRenderingDone", value: function() { return this._transitionEngine.whenRenderingDone() } }]), e }();

                function eg(t, e) { var n = null,
                        r = null; return Array.isArray(e) && e.length ? (n = rg(e[0]), e.length > 1 && (r = rg(e[e.length - 1]))) : e && (n = rg(e)), n || r ? new ng(t, n, r) : null } var ng = function() { var t = function() {
                        function t(e, n, r) { v(this, t), this._element = e, this._startStyles = n, this._endStyles = r, this._state = 0; var i = t.initialStylesByElement.get(e);
                            i || t.initialStylesByElement.set(e, i = {}), this._initialStyles = i } return y(t, [{ key: "start", value: function() { this._state < 1 && (this._startStyles && Zp(this._element, this._startStyles, this._initialStyles), this._state = 1) } }, { key: "finish", value: function() { this.start(), this._state < 2 && (Zp(this._element, this._initialStyles), this._endStyles && (Zp(this._element, this._endStyles), this._endStyles = null), this._state = 1) } }, { key: "destroy", value: function() { this.finish(), this._state < 3 && (t.initialStylesByElement.delete(this._element), this._startStyles && (Kp(this._element, this._startStyles), this._endStyles = null), this._endStyles && (Kp(this._element, this._endStyles), this._endStyles = null), Zp(this._element, this._initialStyles), this._state = 3) } }]), t }(); return t.initialStylesByElement = new WeakMap, t }();

                function rg(t) { for (var e = null, n = Object.keys(t), r = 0; r < n.length; r++) { var i = n[r];
                        ig(i) && ((e = e || {})[i] = t[i]) } return e }

                function ig(t) { return "display" === t || "position" === t } var og = function() {
                    function t(e, n, r, i, o, a, s) { var u = this;
                        v(this, t), this._element = e, this._name = n, this._duration = r, this._delay = i, this._easing = o, this._fillMode = a, this._onDoneFn = s, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = function(t) { return u._handleCallback(t) } } return y(t, [{ key: "apply", value: function() { var t, e, n;
                            t = this._element, e = "".concat(this._duration, "ms ").concat(this._easing, " ").concat(this._delay, "ms 1 normal ").concat(this._fillMode, " ").concat(this._name), (n = hg(t, "").trim()).length && (function(t, e) { for (var n = 0; n < t.length; n++) t.charAt(n) }(n), e = "".concat(n, ", ").concat(e)), cg(t, "", e), lg(this._element, this._eventFn, !1), this._startTime = Date.now() } }, { key: "pause", value: function() { ag(this._element, this._name, "paused") } }, { key: "resume", value: function() { ag(this._element, this._name, "running") } }, { key: "setPosition", value: function(t) { var e = sg(this._element, this._name);
                            this._position = t * this._duration, cg(this._element, "Delay", "-".concat(this._position, "ms"), e) } }, { key: "getPosition", value: function() { return this._position } }, { key: "_handleCallback", value: function(t) { var e = t._ngTestManualTimestamp || Date.now(),
                                n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
                            t.animationName == this._name && Math.max(e - this._startTime, 0) >= this._delay && n >= this._duration && this.finish() } }, { key: "finish", value: function() { this._finished || (this._finished = !0, this._onDoneFn(), lg(this._element, this._eventFn, !0)) } }, { key: "destroy", value: function() { var t, e, n, r;
                            this._destroyed || (this._destroyed = !0, this.finish(), t = this._element, e = this._name, n = hg(t, "").split(","), (r = ug(n, e)) >= 0 && (n.splice(r, 1), cg(t, "", n.join(",")))) } }]), t }();

                function ag(t, e, n) { cg(t, "PlayState", n, sg(t, e)) }

                function sg(t, e) { var n = hg(t, ""); return n.indexOf(",") > 0 ? ug(n.split(","), e) : ug([n], e) }

                function ug(t, e) { for (var n = 0; n < t.length; n++)
                        if (t[n].indexOf(e) >= 0) return n;
                    return -1 }

                function lg(t, e, n) { n ? t.removeEventListener("animationend", e) : t.addEventListener("animationend", e) }

                function cg(t, e, n, r) { var i = "animation" + e; if (null != r) { var o = t.style[i]; if (o.length) { var a = o.split(",");
                            a[r] = n, n = a.join(",") } }
                    t.style[i] = n }

                function hg(t, e) { return t.style["animation" + e] } var fg = function() {
                        function t(e, n, r, i, o, a, s, u) { v(this, t), this.element = e, this.keyframes = n, this.animationName = r, this._duration = i, this._delay = o, this._finalStyles = s, this._specialStyles = u, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this.currentSnapshot = {}, this._state = 0, this.easing = a || "linear", this.totalTime = i + o, this._buildStyler() } return y(t, [{ key: "onStart", value: function(t) { this._onStartFns.push(t) } }, { key: "onDone", value: function(t) { this._onDoneFns.push(t) } }, { key: "onDestroy", value: function(t) { this._onDestroyFns.push(t) } }, { key: "destroy", value: function() { this.init(), this._state >= 4 || (this._state = 4, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach((function(t) { return t() })), this._onDestroyFns = []) } }, { key: "_flushDoneFns", value: function() { this._onDoneFns.forEach((function(t) { return t() })), this._onDoneFns = [] } }, { key: "_flushStartFns", value: function() { this._onStartFns.forEach((function(t) { return t() })), this._onStartFns = [] } }, { key: "finish", value: function() { this.init(), this._state >= 3 || (this._state = 3, this._styler.finish(), this._flushStartFns(), this._specialStyles && this._specialStyles.finish(), this._flushDoneFns()) } }, { key: "setPosition", value: function(t) { this._styler.setPosition(t) } }, { key: "getPosition", value: function() { return this._styler.getPosition() } }, { key: "hasStarted", value: function() { return this._state >= 2 } }, { key: "init", value: function() { this._state >= 1 || (this._state = 1, this._styler.apply(), this._delay && this._styler.pause()) } }, { key: "play", value: function() { this.init(), this.hasStarted() || (this._flushStartFns(), this._state = 2, this._specialStyles && this._specialStyles.start()), this._styler.resume() } }, { key: "pause", value: function() { this.init(), this._styler.pause() } }, { key: "restart", value: function() { this.reset(), this.play() } }, { key: "reset", value: function() { this._styler.destroy(), this._buildStyler(), this._styler.apply() } }, { key: "_buildStyler", value: function() { var t = this;
                                this._styler = new og(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", (function() { return t.finish() })) } }, { key: "triggerCallback", value: function(t) { var e = "start" == t ? this._onStartFns : this._onDoneFns;
                                e.forEach((function(t) { return t() })), e.length = 0 } }, { key: "beforeDestroy", value: function() { var t = this;
                                this.init(); var e = {}; if (this.hasStarted()) { var n = this._state >= 3;
                                    Object.keys(this._finalStyles).forEach((function(r) { "offset" != r && (e[r] = n ? t._finalStyles[r] : oy(t.element, r)) })) }
                                this.currentSnapshot = e } }]), t }(),
                    dg = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this)).element = t, i._startingStyles = {}, i.__initialized = !1, i._styles = Fp(r), i } return y(n, [{ key: "init", value: function() { var t = this;!this.__initialized && this._startingStyles && (this.__initialized = !0, Object.keys(this._styles).forEach((function(e) { t._startingStyles[e] = t.element.style[e] })), a(d(n.prototype), "init", this).call(this)) } }, { key: "play", value: function() { var t = this;
                                this._startingStyles && (this.init(), Object.keys(this._styles).forEach((function(e) { return t.element.style.setProperty(e, t._styles[e]) })), a(d(n.prototype), "play", this).call(this)) } }, { key: "destroy", value: function() { var t = this;
                                this._startingStyles && (Object.keys(this._startingStyles).forEach((function(e) { var n = t._startingStyles[e];
                                    n ? t.element.style.setProperty(e, n) : t.element.style.removeProperty(e) })), this._startingStyles = null, a(d(n.prototype), "destroy", this).call(this)) } }]), n }(yp),
                    vg = function() {
                        function t() { v(this, t), this._count = 0, this._head = document.querySelector("head"), this._warningIssued = !1 } return y(t, [{ key: "validateStyleProperty", value: function(t) { return Ip(t) } }, { key: "matchesElement", value: function(t, e) { return Dp(t, e) } }, { key: "containsElement", value: function(t, e) { return Np(t, e) } }, { key: "query", value: function(t, e, n) { return jp(t, e, n) } }, { key: "computeStyle", value: function(t, e, n) { return window.getComputedStyle(t)[e] } }, { key: "buildKeyframeElement", value: function(t, e, n) { n = n.map((function(t) { return Fp(t) })); var r = "@keyframes ".concat(e, " {\n"),
                                    i = "";
                                n.forEach((function(t) { i = " "; var e = parseFloat(t.offset);
                                    r += "".concat(i).concat(100 * e, "% {\n"), i += " ", Object.keys(t).forEach((function(e) { var n = t[e]; switch (e) {
                                            case "offset":
                                                return;
                                            case "easing":
                                                return void(n && (r += "".concat(i, "animation-timing-function: ").concat(n, ";\n")));
                                            default:
                                                return void(r += "".concat(i).concat(e, ": ").concat(n, ";\n")) } })), r += i + "}\n" })), r += "}\n"; var o = document.createElement("style"); return o.innerHTML = r, o } }, { key: "animate", value: function(t, e, n, r, i) { var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
                                    a = arguments.length > 6 ? arguments[6] : void 0;
                                a && this._notifyFaultyScrubber(); var s = o.filter((function(t) { return t instanceof fg })),
                                    u = {};
                                ny(n, r) && s.forEach((function(t) { var e = t.currentSnapshot;
                                    Object.keys(e).forEach((function(t) { return u[t] = e[t] })) })); var l = function(t) { var e = {}; return t && (Array.isArray(t) ? t : [t]).forEach((function(t) { Object.keys(t).forEach((function(n) { "offset" != n && "easing" != n && (e[n] = t[n]) })) })), e }(e = ry(t, e, u)); if (0 == n) return new dg(t, l); var c = "gen_css_kf_" + this._count++,
                                    h = this.buildKeyframeElement(t, c, e);
                                document.querySelector("head").appendChild(h); var f = eg(t, e),
                                    d = new fg(t, e, c, n, r, i, l, f); return d.onDestroy((function() { var t;
                                    (t = h).parentNode.removeChild(t) })), d } }, { key: "_notifyFaultyScrubber", value: function() { this._warningIssued || (console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n", "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."), this._warningIssued = !0) } }]), t }(),
                    pg = function() {
                        function t(e, n, r, i) { v(this, t), this.element = e, this.keyframes = n, this.options = r, this._specialStyles = i, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = r.duration, this._delay = r.delay || 0, this.time = this._duration + this._delay } return y(t, [{ key: "_onFinish", value: function() { this._finished || (this._finished = !0, this._onDoneFns.forEach((function(t) { return t() })), this._onDoneFns = []) } }, { key: "init", value: function() { this._buildPlayer(), this._preparePlayerBeforeStart() } }, { key: "_buildPlayer", value: function() { var t = this; if (!this._initialized) { this._initialized = !0; var e = this.keyframes;
                                    this.domPlayer = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : {}, this.domPlayer.addEventListener("finish", (function() { return t._onFinish() })) } } }, { key: "_preparePlayerBeforeStart", value: function() { this._delay ? this._resetDomPlayerState() : this.domPlayer.pause() } }, { key: "_triggerWebAnimation", value: function(t, e, n) { return t.animate(e, n) } }, { key: "onStart", value: function(t) { this._onStartFns.push(t) } }, { key: "onDone", value: function(t) { this._onDoneFns.push(t) } }, { key: "onDestroy", value: function(t) { this._onDestroyFns.push(t) } }, { key: "play", value: function() { this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach((function(t) { return t() })), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play() } }, { key: "pause", value: function() { this.init(), this.domPlayer.pause() } }, { key: "finish", value: function() { this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish() } }, { key: "reset", value: function() { this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1 } }, { key: "_resetDomPlayerState", value: function() { this.domPlayer && this.domPlayer.cancel() } }, { key: "restart", value: function() { this.reset(), this.play() } }, { key: "hasStarted", value: function() { return this._started } }, { key: "destroy", value: function() { this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach((function(t) { return t() })), this._onDestroyFns = []) } }, { key: "setPosition", value: function(t) { this.domPlayer.currentTime = t * this.time } }, { key: "getPosition", value: function() { return this.domPlayer.currentTime / this.time } }, { key: "totalTime", get: function() { return this._delay + this._duration } }, { key: "beforeDestroy", value: function() { var t = this,
                                    e = {};
                                this.hasStarted() && Object.keys(this._finalKeyframe).forEach((function(n) { "offset" != n && (e[n] = t._finished ? t._finalKeyframe[n] : oy(t.element, n)) })), this.currentSnapshot = e } }, { key: "triggerCallback", value: function(t) { var e = "start" == t ? this._onStartFns : this._onDoneFns;
                                e.forEach((function(t) { return t() })), e.length = 0 } }]), t }(),
                    yg = function() {
                        function t() { v(this, t), this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(gg().toString()), this._cssKeyframesDriver = new vg } return y(t, [{ key: "validateStyleProperty", value: function(t) { return Ip(t) } }, { key: "matchesElement", value: function(t, e) { return Dp(t, e) } }, { key: "containsElement", value: function(t, e) { return Np(t, e) } }, { key: "query", value: function(t, e, n) { return jp(t, e, n) } }, { key: "computeStyle", value: function(t, e, n) { return window.getComputedStyle(t)[e] } }, { key: "overrideWebAnimationsSupport", value: function(t) { this._isNativeImpl = t } }, { key: "animate", value: function(t, e, n, r, i) { var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
                                    a = arguments.length > 6 ? arguments[6] : void 0; if (!a && !this._isNativeImpl) return this._cssKeyframesDriver.animate(t, e, n, r, i, o); var s = { duration: n, delay: r, fill: 0 == r ? "both" : "forwards" };
                                i && (s.easing = i); var u = {},
                                    l = o.filter((function(t) { return t instanceof pg }));
                                ny(n, r) && l.forEach((function(t) { var e = t.currentSnapshot;
                                    Object.keys(e).forEach((function(t) { return u[t] = e[t] })) })); var c = eg(t, e = ry(t, e = e.map((function(t) { return qp(t, !1) })), u)); return new pg(t, e, s, c) } }]), t }();

                function gg() { return "undefined" != typeof window && void 0 !== window.document && Element.prototype.animate || {} } var mg, _g = ((mg = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this))._nextAnimationId = 0, i._renderer = t.createRenderer(r.body, { id: "0", encapsulation: we.None, styles: [], data: { animation: [] } }), i } return y(n, [{ key: "build", value: function(t) { var e = this._nextAnimationId.toString();
                                this._nextAnimationId++; var n = Array.isArray(t) ? hp(t) : t; return bg(this._renderer, null, e, "register", [n]), new kg(e, this._renderer) } }]), n }(lp)).\u0275fac = function(t) { return new(t || mg)(ae(Ca), ae(ku)) }, mg.\u0275prov = bt({ token: mg, factory: mg.\u0275fac }), mg),
                    kg = function(t) { s(n, t); var e = l(n);

                        function n(t, r) { var i; return v(this, n), (i = e.call(this))._id = t, i._renderer = r, i } return y(n, [{ key: "create", value: function(t, e) { return new wg(this._id, t, e || {}, this._renderer) } }]), n }(function() { return function t() { v(this, t) } }()),
                    wg = function() {
                        function t(e, n, r, i) { v(this, t), this.id = e, this.element = n, this._renderer = i, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", r) } return y(t, [{ key: "_listen", value: function(t, e) { return this._renderer.listen(this.element, "@@".concat(this.id, ":").concat(t), e) } }, { key: "_command", value: function(t) { for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r]; return bg(this._renderer, this.element, this.id, t, n) } }, { key: "onDone", value: function(t) { this._listen("done", t) } }, { key: "onStart", value: function(t) { this._listen("start", t) } }, { key: "onDestroy", value: function(t) { this._listen("destroy", t) } }, { key: "init", value: function() { this._command("init") } }, { key: "hasStarted", value: function() { return this._started } }, { key: "play", value: function() { this._command("play"), this._started = !0 } }, { key: "pause", value: function() { this._command("pause") } }, { key: "restart", value: function() { this._command("restart") } }, { key: "finish", value: function() { this._command("finish") } }, { key: "destroy", value: function() { this._command("destroy") } }, { key: "reset", value: function() { this._command("reset") } }, { key: "setPosition", value: function(t) { this._command("setPosition", t) } }, { key: "getPosition", value: function() { return 0 } }]), t }();

                function bg(t, e, n, r, i) { return t.setProperty(e, "@@".concat(n, ":").concat(r), i) } var Sg, Cg, Eg, xg, Tg = ((Sg = function() {
                        function e(t, n, r) { v(this, e), this.delegate = t, this.engine = n, this._zone = r, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), n.onRemovalComplete = function(t, e) { e && e.parentNode(t) && e.removeChild(t.parentNode, t) } } return y(e, [{ key: "createRenderer", value: function(t, e) { var n = this,
                                    r = this.delegate.createRenderer(t, e); if (!(t && e && e.data && e.data.animation)) { var i = this._rendererCache.get(r); return i || (i = new Ag("", r, this.engine), this._rendererCache.set(r, i)), i } var o = e.id,
                                    a = e.id + "-" + this._currentId; return this._currentId++, this.engine.register(a, t), e.data.animation.forEach((function e(r) { Array.isArray(r) ? r.forEach(e) : n.engine.registerTrigger(o, a, t, r.name, r) })), new Og(this, a, r, this.engine) } }, { key: "begin", value: function() { this._cdRecurDepth++, this.delegate.begin && this.delegate.begin() } }, { key: "_scheduleCountTask", value: function() { var t = this;
                                this.promise.then((function() { t._microtaskId++ })) } }, { key: "scheduleListenerCallback", value: function(e, n, r) { var i = this;
                                e >= 0 && e < this._microtaskId ? this._zone.run((function() { return n(r) })) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then((function() { i._zone.run((function() { i._animationCallbacksBuffer.forEach((function(e) { var n = t(e, 2);
                                            (0, n[0])(n[1]) })), i._animationCallbacksBuffer = [] })) })), this._animationCallbacksBuffer.push([n, r])) } }, { key: "end", value: function() { var t = this;
                                this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular((function() { t._scheduleCountTask(), t.engine.flush(t._microtaskId) })), this.delegate.end && this.delegate.end() } }, { key: "whenRenderingDone", value: function() { return this.engine.whenRenderingDone() } }]), e }()).\u0275fac = function(t) { return new(t || Sg)(ae(Ca), ae(tg), ae(Us)) }, Sg.\u0275prov = bt({ token: Sg, factory: Sg.\u0275fac }), Sg),
                    Ag = function() {
                        function t(e, n, r) { v(this, t), this.namespaceId = e, this.delegate = n, this.engine = r, this.destroyNode = this.delegate.destroyNode ? function(t) { return n.destroyNode(t) } : null } return y(t, [{ key: "data", get: function() { return this.delegate.data } }, { key: "destroy", value: function() { this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy() } }, { key: "createElement", value: function(t, e) { return this.delegate.createElement(t, e) } }, { key: "createComment", value: function(t) { return this.delegate.createComment(t) } }, { key: "createText", value: function(t) { return this.delegate.createText(t) } }, { key: "appendChild", value: function(t, e) { this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1) } }, { key: "insertBefore", value: function(t, e, n) { this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, !0) } }, { key: "removeChild", value: function(t, e, n) { this.engine.onRemove(this.namespaceId, e, this.delegate, n) } }, { key: "selectRootElement", value: function(t, e) { return this.delegate.selectRootElement(t, e) } }, { key: "parentNode", value: function(t) { return this.delegate.parentNode(t) } }, { key: "nextSibling", value: function(t) { return this.delegate.nextSibling(t) } }, { key: "setAttribute", value: function(t, e, n, r) { this.delegate.setAttribute(t, e, n, r) } }, { key: "removeAttribute", value: function(t, e, n) { this.delegate.removeAttribute(t, e, n) } }, { key: "addClass", value: function(t, e) { this.delegate.addClass(t, e) } }, { key: "removeClass", value: function(t, e) { this.delegate.removeClass(t, e) } }, { key: "setStyle", value: function(t, e, n, r) { this.delegate.setStyle(t, e, n, r) } }, { key: "removeStyle", value: function(t, e, n) { this.delegate.removeStyle(t, e, n) } }, { key: "setProperty", value: function(t, e, n) { "@" == e.charAt(0) && "@.disabled" == e ? this.disableAnimations(t, !!n) : this.delegate.setProperty(t, e, n) } }, { key: "setValue", value: function(t, e) { this.delegate.setValue(t, e) } }, { key: "listen", value: function(t, e, n) { return this.delegate.listen(t, e, n) } }, { key: "disableAnimations", value: function(t, e) { this.engine.disableAnimations(t, e) } }]), t }(),
                    Og = function(e) { s(r, e); var n = l(r);

                        function r(t, e, i, o) { var a; return v(this, r), (a = n.call(this, e, i, o)).factory = t, a.namespaceId = e, a } return y(r, [{ key: "setProperty", value: function(t, e, n) { "@" == e.charAt(0) ? "." == e.charAt(1) && "@.disabled" == e ? this.disableAnimations(t, n = void 0 === n || !!n) : this.engine.process(this.namespaceId, t, e.substr(1), n) : this.delegate.setProperty(t, e, n) } }, { key: "listen", value: function(e, n, r) { var i, o, a = this; if ("@" == n.charAt(0)) { var s, u = function(t) { switch (t) {
                                                case "body":
                                                    return document.body;
                                                case "document":
                                                    return document;
                                                case "window":
                                                    return window;
                                                default:
                                                    return t } }(e),
                                        l = n.substr(1),
                                        c = ""; return "@" != l.charAt(0) && (o = (i = l).indexOf("."), l = (s = t([i.substring(0, o), i.substr(o + 1)], 2))[0], c = s[1]), this.engine.listen(this.namespaceId, u, l, c, (function(t) { a.factory.scheduleListenerCallback(t._data || -1, r, t) })) } return this.delegate.listen(e, n, r) } }]), r }(Ag),
                    Pg = ((Cg = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i) { return v(this, n), e.call(this, t.body, r, i) } return n }(tg)).\u0275fac = function(t) { return new(t || Cg)(ae(ku), ae(Hp), ae(Ty)) }, Cg.\u0275prov = bt({ token: Cg, factory: Cg.\u0275fac }), Cg),
                    Rg = new Xt("AnimationModuleType"),
                    Ig = [{ provide: Hp, useFactory: function() { return "function" == typeof gg() ? new yg : new vg } }, { provide: Rg, useValue: "BrowserAnimations" }, { provide: lp, useClass: _g }, { provide: Ty, useFactory: function() { return new Ay } }, { provide: tg, useClass: Pg }, { provide: Ca, useFactory: function(t, e, n) { return new Tg(t, e, n) }, deps: [El, tg, Us] }],
                    Dg = ((Eg = function t() { v(this, t) }).\u0275mod = Oe({ type: Eg }), Eg.\u0275inj = St({ factory: function(t) { return new(t || Eg) }, providers: Ig, imports: [Ll] }), Eg),
                    Ng = new Ta("10.2.7"),
                    jg = new Xt("mat-sanity-checks", { providedIn: "root", factory: function() { return !0 } }),
                    Fg = ((xg = function() {
                        function t(e, n, r) { v(this, t), this._hasDoneGlobalChecks = !1, this._document = r, e._applyBodyHighContrastModeCssClasses(), this._sanityChecks = n, this._hasDoneGlobalChecks || (this._checkDoctypeIsDefined(), this._checkThemeIsPresent(), this._checkCdkVersionMatch(), this._hasDoneGlobalChecks = !0) } return y(t, [{ key: "_getDocument", value: function() { var t = this._document || document; return "object" == typeof t && t ? t : null } }, { key: "_getWindow", value: function() { var t = this._getDocument(),
                                    e = (null == t ? void 0 : t.defaultView) || window; return "object" == typeof e && e ? e : null } }, { key: "_checksAreEnabled", value: function() { return br() && !this._isTestEnv() } }, { key: "_isTestEnv", value: function() { var t = this._getWindow(); return t && (t.__karma__ || t.jasmine) } }, { key: "_checkDoctypeIsDefined", value: function() { var t = this._checksAreEnabled() && (!0 === this._sanityChecks || this._sanityChecks.doctype),
                                    e = this._getDocument();
                                t && e && !e.doctype && console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.") } }, { key: "_checkThemeIsPresent", value: function() { var t = !this._checksAreEnabled() || !1 === this._sanityChecks || !this._sanityChecks.theme,
                                    e = this._getDocument(); if (!t && e && e.body && "function" == typeof getComputedStyle) { var n = e.createElement("div");
                                    n.classList.add("mat-theme-loaded-marker"), e.body.appendChild(n); var r = getComputedStyle(n);
                                    r && "none" !== r.display && console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"), e.body.removeChild(n) } } }, { key: "_checkCdkVersionMatch", value: function() { this._checksAreEnabled() && (!0 === this._sanityChecks || this._sanityChecks.version) && Ng.full !== up.full && console.warn("The Angular Material version (" + Ng.full + ") does not match the Angular CDK version (" + up.full + ").\nPlease ensure the versions of these two packages exactly match.") } }]), t }()).\u0275mod = Oe({ type: xg }), xg.\u0275inj = St({ factory: function(t) { return new(t || xg)(ae(sp), ae(jg, 8), ae(ku, 8)) }, imports: [
                            [Jd], Jd
                        ] }), xg); try { "undefined" != typeof Intl } catch (Am) {!1 }

                function Lg(t, e) {} var Mg, Hg, Bg, Vg, Ug, zg = function t() { v(this, t), this.role = "dialog", this.panelClass = "", this.hasBackdrop = !0, this.backdropClass = "", this.disableClose = !1, this.width = "", this.height = "", this.maxWidth = "80vw", this.data = null, this.ariaDescribedBy = null, this.ariaLabelledBy = null, this.ariaLabel = null, this.autoFocus = !0, this.restoreFocus = !0, this.closeOnNavigation = !0 },
                    qg = { dialogContainer: (Mg = "dialogContainer", Hg = [dp("void, exit", fp({ opacity: 0, transform: "scale(0.7)" })), dp("enter", fp({ transform: "none" })), vp("* => enter", cp("150ms cubic-bezier(0, 0, 0.2, 1)", fp({ transform: "none", opacity: 1 }))), vp("* => void, * => exit", cp("75ms cubic-bezier(0.4, 0.0, 0.2, 1)", fp({ opacity: 0 })))], { type: 7, name: Mg, definitions: Hg, options: {} }) },
                    Wg = ((Vg = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o, a, s) { var u; return v(this, n), (u = e.call(this))._elementRef = t, u._focusTrapFactory = r, u._changeDetectorRef = i, u._config = a, u._focusMonitor = s, u._animationStateChanged = new ls, u._elementFocusedBeforeDialogWasOpened = null, u._closeInteractionType = null, u.attachDomPortal = function(t) { return u._portalOutlet.hasAttached(), u._portalOutlet.attachDomPortal(t) }, u._ariaLabelledBy = a.ariaLabelledBy || null, u._document = o, u } return y(n, [{ key: "_initializeWithAttachedContent", value: function() { this._setupFocusTrap(), this._capturePreviouslyFocusedElement(), this._focusDialogContainer() } }, { key: "attachComponentPortal", value: function(t) { return this._portalOutlet.hasAttached(), this._portalOutlet.attachComponentPortal(t) } }, { key: "attachTemplatePortal", value: function(t) { return this._portalOutlet.hasAttached(), this._portalOutlet.attachTemplatePortal(t) } }, { key: "_recaptureFocus", value: function() { this._containsFocus() || (!this._config.autoFocus || !this._focusTrap.focusInitialElement()) && this._elementRef.nativeElement.focus() } }, { key: "_trapFocus", value: function() { this._config.autoFocus ? this._focusTrap.focusInitialElementWhenReady() : this._containsFocus() || this._elementRef.nativeElement.focus() } }, { key: "_restoreFocus", value: function() { var t = this._elementFocusedBeforeDialogWasOpened; if (this._config.restoreFocus && t && "function" == typeof t.focus) { var e = this._document.activeElement,
                                        n = this._elementRef.nativeElement;
                                    e && e !== this._document.body && e !== n && !n.contains(e) || (this._focusMonitor ? (this._focusMonitor.focusVia(t, this._closeInteractionType), this._closeInteractionType = null) : t.focus()) }
                                this._focusTrap && this._focusTrap.destroy() } }, { key: "_setupFocusTrap", value: function() { this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement) } }, { key: "_capturePreviouslyFocusedElement", value: function() { this._document && (this._elementFocusedBeforeDialogWasOpened = this._document.activeElement) } }, { key: "_focusDialogContainer", value: function() { this._elementRef.nativeElement.focus && this._elementRef.nativeElement.focus() } }, { key: "_containsFocus", value: function() { var t = this._elementRef.nativeElement,
                                    e = this._document.activeElement; return t === e || t.contains(e) } }]), n }(uv)).\u0275fac = function(t) { return new(t || Vg)(Bo(ba), Bo(Jv), Bo(vo), Bo(ku, 8), Bo(zg), Bo(ip)) }, Vg.\u0275dir = Re({ type: Vg, viewQuery: function(t, e) { var n, r, i, o;
                            1 & t && (o = cv, function(t, e, n, r, i, o) { t.firstCreatePass && (function(t, e, n) { null === t.queries && (t.queries = new ps), t.queries.track(new ys(e, -1)) }(t, new vs(n, !0, !0, void 0)), t.staticViewQueries = !0),
                                    function(t, e) { var n = new hs;
                                        ui(t, e, n, n.destroy), null === e[19] && (e[19] = new ds), e[19].queries.push(new fs(n)) }(t, e) }(cn(), ln(), o)), 2 & t && function(t) { var e = ln(),
                                    n = cn(),
                                    r = wn();
                                bn(r + 1); var i = ks(n, r); if (t.dirty && en(e) === i.metadata.isStatic) { if (null === i.matches) t.reset([]);
                                    else { var o = i.crossesNgTemplate ? function t(e, n, r, i) { var o = e.queries.getByIndex(r),
                                                a = o.matches; if (null !== a)
                                                for (var s = _s(e, n, o, r), u = 0; u < a.length; u += 2) { var l = a[u]; if (l > 0) i.push(s[u / 2]);
                                                    else { for (var c = a[u + 1], h = n[-l], f = 10; f < h.length; f++) { var d = h[f];
                                                            d[17] === d[3] && t(d[1], d, c, i) } if (null !== h[9])
                                                            for (var v = h[9], p = 0; p < v.length; p++) { var y = v[p];
                                                                t(y[1], y, c, i) } } }
                                            return i }(n, e, r, []) : _s(n, e, i, r);
                                        t.reset(o), t.notifyOnChanges() } return !0 } return !1 }((r = ln(), i = wn(), n = r[19].queries[i].queryList)) && (e._portalOutlet = n.first) }, features: [va] }), Vg),
                    Qg = ((Bg = function(t) { s(n, t); var e = l(n);

                        function n() { var t; return v(this, n), (t = e.apply(this, arguments))._state = "enter", t } return y(n, [{ key: "_onAnimationDone", value: function(t) { var e = t.toState,
                                    n = t.totalTime; "enter" === e ? (this._trapFocus(), this._animationStateChanged.next({ state: "opened", totalTime: n })) : "exit" === e && (this._restoreFocus(), this._animationStateChanged.next({ state: "closed", totalTime: n })) } }, { key: "_onAnimationStart", value: function(t) { var e = t.toState,
                                    n = t.totalTime; "enter" === e ? this._animationStateChanged.next({ state: "opening", totalTime: n }) : "exit" !== e && "void" !== e || this._animationStateChanged.next({ state: "closing", totalTime: n }) } }, { key: "_startExitAnimation", value: function() { this._state = "exit", this._changeDetectorRef.markForCheck() } }]), n }(Wg)).\u0275fac = function(t) { return Zg(t || Bg) }, Bg.\u0275cmp = Ee({ type: Bg, selectors: [
                            ["mat-dialog-container"]
                        ], hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"], hostVars: 6, hostBindings: function(t, e) { 1 & t && Ko("@dialogContainer.start", (function(t) { return e._onAnimationStart(t) }))("@dialogContainer.done", (function(t) { return e._onAnimationDone(t) })), 2 & t && (ha("id", e._id), Mo("role", e._config.role)("aria-labelledby", e._config.ariaLabel ? null : e._ariaLabelledBy)("aria-label", e._config.ariaLabel)("aria-describedby", e._config.ariaDescribedBy || null), fa("@dialogContainer", e._state)) }, features: [va], decls: 1, vars: 0, consts: [
                            ["cdkPortalOutlet", ""]
                        ], template: function(t, e) { 1 & t && Ho(0, Lg, 0, 0, "ng-template", 0) }, directives: [cv], styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"], encapsulation: 2, data: { animation: [qg.dialogContainer] } }), Bg),
                    Zg = (Ug = Qg, dt((function() { for (var t = Ug.prototype.constructor, e = t[Gt] || pr(t), n = Object.prototype, r = Object.getPrototypeOf(Ug.prototype).constructor; r && r !== n;) { var i = r[Gt] || pr(r); if (i && i !== e) return i;
                            r = Object.getPrototypeOf(r) } return function(t) { return new t } }))),
                    Kg = 0,
                    Gg = function() {
                        function t(e, n) { var r = this,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "mat-dialog-" + Kg++;
                            v(this, t), this._overlayRef = e, this._containerInstance = n, this.id = i, this.disableClose = this._containerInstance._config.disableClose, this._afterOpened = new M, this._afterClosed = new M, this._beforeClosed = new M, this._state = 0, n._id = i, n._animationStateChanged.pipe(Kl((function(t) { return "opened" === t.state })), hc(1)).subscribe((function() { r._afterOpened.next(), r._afterOpened.complete() })), n._animationStateChanged.pipe(Kl((function(t) { return "closed" === t.state })), hc(1)).subscribe((function() { clearTimeout(r._closeFallbackTimeout), r._finishDialogClose() })), e.detachments().subscribe((function() { r._beforeClosed.next(r._result), r._beforeClosed.complete(), r._afterClosed.next(r._result), r._afterClosed.complete(), r.componentInstance = null, r._overlayRef.dispose() })), e.keydownEvents().pipe(Kl((function(t) { return 27 === t.keyCode && !r.disableClose && ! function(t) { for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r]; return n.length ? n.some((function(e) { return t[e] })) : t.altKey || t.shiftKey || t.ctrlKey || t.metaKey }(t) }))).subscribe((function(t) { t.preventDefault(), Yg(r, "keyboard") })), e.backdropClick().subscribe((function() { r.disableClose ? r._containerInstance._recaptureFocus() : Yg(r, "mouse") })) } return y(t, [{ key: "close", value: function(t) { var e = this;
                                this._result = t, this._containerInstance._animationStateChanged.pipe(Kl((function(t) { return "closing" === t.state })), hc(1)).subscribe((function(n) { e._beforeClosed.next(t), e._beforeClosed.complete(), e._overlayRef.detachBackdrop(), e._closeFallbackTimeout = setTimeout((function() { return e._finishDialogClose() }), n.totalTime + 100) })), this._state = 1, this._containerInstance._startExitAnimation() } }, { key: "afterOpened", value: function() { return this._afterOpened } }, { key: "afterClosed", value: function() { return this._afterClosed } }, { key: "beforeClosed", value: function() { return this._beforeClosed } }, { key: "backdropClick", value: function() { return this._overlayRef.backdropClick() } }, { key: "keydownEvents", value: function() { return this._overlayRef.keydownEvents() } }, { key: "updatePosition", value: function(t) { var e = this._getPositionStrategy(); return t && (t.left || t.right) ? t.left ? e.left(t.left) : e.right(t.right) : e.centerHorizontally(), t && (t.top || t.bottom) ? t.top ? e.top(t.top) : e.bottom(t.bottom) : e.centerVertically(), this._overlayRef.updatePosition(), this } }, { key: "updateSize", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; return this._getPositionStrategy().width(t).height(e), this._overlayRef.updatePosition(), this } }, { key: "addPanelClass", value: function(t) { return this._overlayRef.addPanelClass(t), this } }, { key: "removePanelClass", value: function(t) { return this._overlayRef.removePanelClass(t), this } }, { key: "getState", value: function() { return this._state } }, { key: "_finishDialogClose", value: function() { this._state = 2, this._overlayRef.dispose() } }, { key: "_getPositionStrategy", value: function() { return this._overlayRef.getConfig().positionStrategy } }]), t }();

                function Yg(t, e, n) { return void 0 !== t._containerInstance && (t._containerInstance._closeInteractionType = e), t.close(n) } var Xg, $g, Jg, tm, em, nm, rm = new Xt("MatDialogData"),
                    im = new Xt("mat-dialog-default-options"),
                    om = new Xt("mat-dialog-scroll-strategy"),
                    am = { provide: om, deps: [Wv], useFactory: function(t) { return function() { return t.scrollStrategies.block() } } },
                    sm = ((tm = function() {
                        function t(e, n, r, i, o, a, s, u, l) { var c = this;
                            v(this, t), this._overlay = e, this._injector = n, this._defaultOptions = r, this._parentDialog = i, this._overlayContainer = o, this._dialogRefConstructor = s, this._dialogContainerType = u, this._dialogDataToken = l, this._openDialogsAtThisLevel = [], this._afterAllClosedAtThisLevel = new M, this._afterOpenedAtThisLevel = new M, this._ariaHiddenElements = new Map, this.afterAllClosed = Ql((function() { return c.openDialogs.length ? c._getAfterAllClosed() : c._getAfterAllClosed().pipe(Ec(void 0)) })), this._scrollStrategy = a } return y(t, [{ key: "openDialogs", get: function() { return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel } }, { key: "afterOpened", get: function() { return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel } }, { key: "_getAfterAllClosed", value: function() { var t = this._parentDialog; return t ? t._getAfterAllClosed() : this._afterAllClosedAtThisLevel } }, { key: "open", value: function(t, e) { var n = this;
                                (e = function(t, e) { return Object.assign(Object.assign({}, e), t) }(e, this._defaultOptions || new zg)).id && this.getDialogById(e.id); var r = this._createOverlay(e),
                                    i = this._attachDialogContainer(r, e),
                                    o = this._attachDialogContent(t, i, r, e); return this.openDialogs.length || this._hideNonDialogContentFromAssistiveTechnology(), this.openDialogs.push(o), o.afterClosed().subscribe((function() { return n._removeOpenDialog(o) })), this.afterOpened.next(o), i._initializeWithAttachedContent(), o } }, { key: "closeAll", value: function() { this._closeDialogs(this.openDialogs) } }, { key: "getDialogById", value: function(t) { return this.openDialogs.find((function(e) { return e.id === t })) } }, { key: "ngOnDestroy", value: function() { this._closeDialogs(this._openDialogsAtThisLevel), this._afterAllClosedAtThisLevel.complete(), this._afterOpenedAtThisLevel.complete() } }, { key: "_createOverlay", value: function(t) { var e = this._getOverlayConfig(t); return this._overlay.create(e) } }, { key: "_getOverlayConfig", value: function(t) { var e = new Cv({ positionStrategy: this._overlay.position().global(), scrollStrategy: t.scrollStrategy || this._scrollStrategy(), panelClass: t.panelClass, hasBackdrop: t.hasBackdrop, direction: t.direction, minWidth: t.minWidth, minHeight: t.minHeight, maxWidth: t.maxWidth, maxHeight: t.maxHeight, disposeOnNavigation: t.closeOnNavigation }); return t.backdropClass && (e.backdropClass = t.backdropClass), e } }, { key: "_attachDialogContainer", value: function(t, e) { var n = Po.create({ parent: e && e.viewContainerRef && e.viewContainerRef.injector || this._injector, providers: [{ provide: zg, useValue: e }] }),
                                    r = new ov(this._dialogContainerType, e.viewContainerRef, n, e.componentFactoryResolver); return t.attach(r).instance } }, { key: "_attachDialogContent", value: function(t, e, n, r) { var i = new this._dialogRefConstructor(n, e, r.id); if (t instanceof qa) e.attachTemplatePortal(new av(t, null, { $implicit: r.data, dialogRef: i }));
                                else { var o = this._createInjector(r, i, e),
                                        a = e.attachComponentPortal(new ov(t, r.viewContainerRef, o));
                                    i.componentInstance = a.instance } return i.updateSize(r.width, r.height).updatePosition(r.position), i } }, { key: "_createInjector", value: function(t, e, n) { var r = t && t.viewContainerRef && t.viewContainerRef.injector,
                                    i = [{ provide: this._dialogContainerType, useValue: n }, { provide: this._dialogDataToken, useValue: t.data }, { provide: this._dialogRefConstructor, useValue: e }]; return !t.direction || r && r.get($d, null) || i.push({ provide: $d, useValue: { value: t.direction, change: Ml() } }), Po.create({ parent: r || this._injector, providers: i }) } }, { key: "_removeOpenDialog", value: function(t) { var e = this.openDialogs.indexOf(t);
                                e > -1 && (this.openDialogs.splice(e, 1), this.openDialogs.length || (this._ariaHiddenElements.forEach((function(t, e) { t ? e.setAttribute("aria-hidden", t) : e.removeAttribute("aria-hidden") })), this._ariaHiddenElements.clear(), this._getAfterAllClosed().next())) } }, { key: "_hideNonDialogContentFromAssistiveTechnology", value: function() { var t = this._overlayContainer.getContainerElement(); if (t.parentElement)
                                    for (var e = t.parentElement.children, n = e.length - 1; n > -1; n--) { var r = e[n];
                                        r === t || "SCRIPT" === r.nodeName || "STYLE" === r.nodeName || r.hasAttribute("aria-live") || (this._ariaHiddenElements.set(r, r.getAttribute("aria-hidden")), r.setAttribute("aria-hidden", "true")) } } }, { key: "_closeDialogs", value: function(t) { for (var e = t.length; e--;) t[e].close() } }]), t }()).\u0275fac = function(t) { return new(t || tm)(Bo(Wv), Bo(Po), Bo(void 0), Bo(void 0), Bo(Rv), Bo(void 0), Bo(yo), Bo(yo), Bo(Xt)) }, tm.\u0275dir = Re({ type: tm }), tm),
                    um = ((Jg = function(t) { s(n, t); var e = l(n);

                        function n(t, r, i, o, a, s, u) { return v(this, n), e.call(this, t, r, o, s, u, a, Gg, Qg, rm) } return n }(sm)).\u0275fac = function(t) { return new(t || Jg)(ae(Wv), ae(Po), ae(Bu, 8), ae(im, 8), ae(om), ae(Jg, 12), ae(Rv)) }, Jg.\u0275prov = bt({ token: Jg, factory: Jg.\u0275fac }), Jg),
                    lm = (($g = function t() { v(this, t) }).\u0275mod = Oe({ type: $g }), $g.\u0275inj = St({ factory: function(t) { return new(t || $g) }, providers: [um, am], imports: [
                            [Zv, hv, Fg], Fg
                        ] }), $g),
                    cm = ((Xg = function() {
                        function t(e) { v(this, t), this.data = e } return y(t, [{ key: "ngOnInit", value: function() { console.log("objectRes :>> ", this.data.dataKey) } }]), t }()).\u0275fac = function(t) { return new(t || Xg)(Bo(rm)) }, Xg.\u0275cmp = Ee({ type: Xg, selectors: [
                            ["app-final-results"]
                        ], decls: 2, vars: 1, template: function(t, e) { 1 & t && (zo(0, "p"), ua(1), qo()), 2 & t && (Ur(1), ca("\u0645\u0628\u0631\u0648\u0643 \u0627\u0644\u0646\u062a\u064a\u062c\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064a\u0629: ", e.data.dataKey, "")) }, styles: ["p[_ngcontent-%COMP%]{text-align:center}"] }), Xg),
                    hm = ["*", [
                        ["mat-card-footer"]
                    ]],
                    fm = ["*", "mat-card-footer"],
                    dm = ((nm = function t(e) { v(this, t), this._animationMode = e }).\u0275fac = function(t) { return new(t || nm)(Bo(Rg, 8)) }, nm.\u0275cmp = Ee({ type: nm, selectors: [
                            ["mat-card"]
                        ], hostAttrs: [1, "mat-card", "mat-focus-indicator"], hostVars: 2, hostBindings: function(t, e) { 2 & t && ra("_mat-animation-noopable", "NoopAnimations" === e._animationMode) }, exportAs: ["matCard"], ngContentSelectors: fm, decls: 2, vars: 0, template: function(t, e) { 1 & t && (function(t) { var e = ln()[16][6]; if (!e.projection)
                                    for (var n = e.projection = ye(t ? t.length : 1, null), r = n.slice(), i = e.child; null !== i;) { var o = t ? $o(i, t) : 0;
                                        null !== o && (r[o] ? r[o].projectionNext = i : n[o] = i, r[o] = i), i = i.next } }(hm), Jo(0), Jo(1, 1)) }, styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"], encapsulation: 2, changeDetection: 0 }), nm),
                    vm = ((em = function t() { v(this, t) }).\u0275mod = Oe({ type: em }), em.\u0275inj = St({ factory: function(t) { return new(t || em) }, imports: [
                            [Fg], Fg
                        ] }), em);

                function pm(t, e) { 1 & t && (zo(0, "div", 9), Wo(1, "img", 10), zo(2, "p"), ua(3, "\u0645\u062d\u0645\u062f \u0645\u062d\u0645\u0648\u062f"), qo(), qo()) }

                function ym(t, e) { 1 & t && (zo(0, "div", 11), Wo(1, "img", 12), qo()) }

                function gm(t, e) { 1 & t && (zo(0, "div", 11), Wo(1, "img", 13), qo()) }

                function mm(t, e) { 1 & t && (zo(0, "div", 9), Wo(1, "img", 10), zo(2, "p"), ua(3, "\u0645\u062d\u0645\u062f \u0645\u062d\u0645\u0648\u062f"), qo(), qo()) }

                function _m(t, e) { 1 & t && (zo(0, "div", 11), Wo(1, "img", 12), qo()) }

                function km(t, e) { 1 & t && (zo(0, "div", 11), Wo(1, "img", 13), qo()) }

                function wm(t, e) { 1 & t && (zo(0, "div", 9), Wo(1, "img", 10), zo(2, "p"), ua(3, "\u0645\u062d\u0645\u062f \u0645\u062d\u0645\u0648\u062f"), qo(), qo()) }

                function bm(t, e) { 1 & t && (zo(0, "div", 11), Wo(1, "img", 12), qo()) }

                function Sm(t, e) { 1 & t && (zo(0, "div", 11), Wo(1, "img", 13), qo()) } var Cm, Em, xm = ((Em = function() {
                        function t(e) { v(this, t), this.dialogDisplayResults = e, this.numQes = 0, this.results = 0, this.myAns = [], this.fakeData = [{ id: 1, title: "\u0647\u0644 \u0645\u0635\u0631 \u062c\u0645\u064a\u0644\u0629\u061f", ans: !0 }, { id: 2, title: " \u0647\u0644 \u0645\u0635\u0631 \u0648\u062d\u0634\u0647\u061f", ans: !1 }, { id: 3, title: "\u0647\u0644 \u0645\u0635\u0631 \u062c\u0645\u064a\u0644\u0629 \u062c\u062f\u0627\u061f", ans: !0 }, { id: 4 }] } return y(t, [{ key: "ngOnInit", value: function() {} }, { key: "trueAns", value: function() { this.fakeData[this.numQes].ans ? (this.results = this.results + 10, this.myAns.push(!0)) : this.fakeData[this.numQes].ans && 0 != this.results && (this.results = this.results - 10, this.myAns.push(!1)), this.numQes = this.numQes + 1, console.log("object :>> ", this.results), console.log("object :>> ", this.myAns), 3 === this.numQes && this.openDialog(this.results) } }, { key: "falseAns", value: function() { this.fakeData[this.numQes].ans && 0 === this.results ? (this.results = 0, this.myAns.push(!1)) : this.fakeData[this.numQes].ans && 0 != this.results ? (this.results = this.results - 10, this.myAns.push(!1)) : this.fakeData[this.numQes].ans ? (this.results = this.results + 10, this.myAns.push(!0)) : (this.results = this.results + 10, this.myAns.push(!1)), this.numQes = this.numQes + 1, console.log("object :>> ", this.results), console.log("object :>> ", this.myAns), 3 === this.numQes && this.openDialog(this.results) } }, { key: "openDialog", value: function(t) { this.dialogDisplayResults.open(cm, { height: "auto", width: "300px", data: { dataKey: t } }) } }]), t }()).\u0275fac = function(t) { return new(t || Em)(Bo(um)) }, Em.\u0275cmp = Ee({ type: Em, selectors: [
                            ["app-root"]
                        ], decls: 40, vars: 10, consts: [
                            [1, "Qes"],
                            [1, "container"],
                            [1, "gridContainer"],
                            [1, "item"],
                            ["class", "userAvatar", 4, "ngIf"],
                            ["class", "result", 4, "ngIf"],
                            [1, "cards"],
                            [1, "falseCard", 3, "click"],
                            [1, "trueCard", 3, "click"],
                            [1, "userAvatar"],
                            ["src", "../TaskElham/assets/user.png"],
                            [1, "result"],
                            ["src", "../TaskElham/assets/check.png"],
                            ["src", "../TaskElham/assets/x.png"]
                        ], template: function(t, e) { 1 & t && (zo(0, "div", 0), zo(1, "h3"), ua(2), qo(), qo(), zo(3, "div", 1), zo(4, "div", 2), Wo(5, "div", 3), Wo(6, "div", 3), Wo(7, "div", 3), Wo(8, "div", 3), zo(9, "div", 3), zo(10, "b"), ua(11, "3"), qo(), Ho(12, pm, 4, 0, "div", 4), Ho(13, ym, 2, 0, "div", 5), Ho(14, gm, 2, 0, "div", 5), qo(), Wo(15, "div", 3), zo(16, "div", 3), zo(17, "b"), ua(18, "2"), qo(), Ho(19, mm, 4, 0, "div", 4), Ho(20, _m, 2, 0, "div", 5), Ho(21, km, 2, 0, "div", 5), qo(), Wo(22, "div", 3), Wo(23, "div", 3), Wo(24, "div", 3), Wo(25, "div", 3), Wo(26, "div", 3), Wo(27, "div", 3), Wo(28, "div", 3), zo(29, "div", 3), zo(30, "b"), ua(31, "1"), qo(), Ho(32, wm, 4, 0, "div", 4), Ho(33, bm, 2, 0, "div", 5), Ho(34, Sm, 2, 0, "div", 5), qo(), qo(), qo(), zo(35, "div", 6), zo(36, "mat-card", 7), Zo("click", (function() { return e.falseAns() })), ua(37, "\u062e\u0637\u0623"), qo(), zo(38, "mat-card", 8), Zo("click", (function() { return e.trueAns() })), ua(39, "\u0635\u062d"), qo(), qo()), 2 & t && (Ur(2), la(e.fakeData[e.numQes].title), Ur(10), Vo("ngIf", 2 === e.numQes), Ur(1), Vo("ngIf", e.numQes > 2 && e.fakeData[2].ans == e.myAns[2]), Ur(1), Vo("ngIf", e.numQes > 2 && e.fakeData[2].ans != e.myAns[2]), Ur(5), Vo("ngIf", 1 === e.numQes), Ur(1), Vo("ngIf", e.numQes > 1 && e.fakeData[1].ans == e.myAns[1]), Ur(1), Vo("ngIf", e.numQes > 1 && e.fakeData[1].ans != e.myAns[1]), Ur(11), Vo("ngIf", 0 === e.numQes), Ur(1), Vo("ngIf", 0 != e.numQes && e.fakeData[0].ans == e.myAns[0]), Ur(1), Vo("ngIf", 0 != e.numQes && e.fakeData[0].ans != e.myAns[0])) }, directives: [Ku, dm], styles: [".Qes[_ngcontent-%COMP%]{margin-top:2rem;justify-content:center;align-items:center;display:grid}.Qes[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem}.container[_ngcontent-%COMP%]{height:25rem;display:flex;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto auto auto}.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:7rem;height:7rem}.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{-webkit-margin-start:.2rem;margin-inline-start:.2rem;color:#fff;font-size:larger}.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .userAvatar[_ngcontent-%COMP%]{display:grid;justify-content:center}.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .userAvatar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-weight:700}.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(odd){background-color:#79e8d8}.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2n){background-color:#cbfffb}.cards[_ngcontent-%COMP%]{grid-template-columns:auto auto;grid-gap:10rem}.cards[_ngcontent-%COMP%], .cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{justify-content:center;align-items:center;display:grid}.cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{font-size:1.5rem;width:120px;height:120px;color:#79e8d8;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;border:3px solid #79e8d8;cursor:pointer}.cards[_ngcontent-%COMP%]   .trueCard[_ngcontent-%COMP%]:hover{border:none;background-color:#0b4d3d;filter:drop-shadow(19.799px 19.799px 11.5px rgba(61,207,71,.16));color:#fff;-webkit-filter:drop-shadow(19.799px 19.799px 11.5px rgba(61,207,71,.16))}.cards[_ngcontent-%COMP%]   .falseCard[_ngcontent-%COMP%]:hover{border:none;color:#fff;background-color:#b53a57}"] }), Em),
                    Tm = ((Cm = function t() { v(this, t) }).\u0275mod = Oe({ type: Cm, bootstrap: [xm] }), Cm.\u0275inj = St({ factory: function(t) { return new(t || Cm) }, providers: [], imports: [
                            [Ll, bd, Dg, vm, lm]
                        ] }), Cm);
                (function() { if (wr) throw new Error("Cannot enable prod mode after platform setup.");
                    kr = !1 })(), jl().bootstrapModule(Tm).catch((function(t) { return console.error(t) })) }, zn8P: function(t, e) {
                function n(t) { return Promise.resolve().then((function() { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e })) }
                n.keys = function() { return [] }, n.resolve = n, t.exports = n, n.id = "zn8P" } },
        [
            [0, 0]
        ]
    ]) }();