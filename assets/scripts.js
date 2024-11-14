(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials" ? (o.credentials = "include") : l.crossOrigin === "anonymous" ? (o.credentials = "omit") : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var Wu = { exports: {} },
  tl = {},
  Qu = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xn = Symbol.for("react.element"),
  oc = Symbol.for("react.portal"),
  ic = Symbol.for("react.fragment"),
  uc = Symbol.for("react.strict_mode"),
  sc = Symbol.for("react.profiler"),
  ac = Symbol.for("react.provider"),
  cc = Symbol.for("react.context"),
  fc = Symbol.for("react.forward_ref"),
  dc = Symbol.for("react.suspense"),
  pc = Symbol.for("react.memo"),
  mc = Symbol.for("react.lazy"),
  Oi = Symbol.iterator;
function hc(e) {
  return e === null || typeof e != "object" ? null : ((e = (Oi && e[Oi]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Ku = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yu = Object.assign,
  Gu = {};
function on(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Gu), (this.updater = n || Ku);
}
on.prototype.isReactComponent = {};
on.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
on.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xu() {}
Xu.prototype = on.prototype;
function $o(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Gu), (this.updater = n || Ku);
}
var Ao = ($o.prototype = new Xu());
Ao.constructor = $o;
Yu(Ao, on.prototype);
Ao.isPureReactComponent = !0;
var Di = Array.isArray,
  Zu = Object.prototype.hasOwnProperty,
  Vo = { current: null },
  Ju = { key: !0, ref: !0, __self: !0, __source: !0 };
function qu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null) for (r in (t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)) Zu.call(t, r) && !Ju.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Xn, type: e, key: o, ref: i, props: l, _owner: Vo.current };
}
function vc(e, t) {
  return { $$typeof: Xn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ho(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xn;
}
function gc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ii = /\/+/g;
function kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? gc("" + e.key) : t.toString(36);
}
function wr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xn:
          case oc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + kl(i, 0) : r),
      Di(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ii, "$&/") + "/"),
          wr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null && (Ho(l) && (l = vc(l, n + (!l.key || (i && i.key === l.key) ? "" : ("" + l.key).replace(Ii, "$&/") + "/") + e)), t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Di(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + kl(o, u);
      i += wr(o, t, n, s, l);
    }
  else if (((s = hc(e)), typeof s == "function")) for (e = s.call(e), u = 0; !(o = e.next()).done; ) (o = o.value), (s = r + kl(o, u++)), (i += wr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."))
    );
  return i;
}
function nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function yc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  kr = { transition: null },
  wc = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: kr, ReactCurrentOwner: Vo };
function bu() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = {
  map: nr,
  forEach: function (e, t, n) {
    nr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ho(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
j.Component = on;
j.Fragment = ic;
j.Profiler = sc;
j.PureComponent = $o;
j.StrictMode = uc;
j.Suspense = dc;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wc;
j.act = bu;
j.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Yu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((o = t.ref), (i = Vo.current)), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)) var u = e.type.defaultProps;
    for (s in t) Zu.call(t, s) && !Ju.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Xn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
j.createContext = function (e) {
  return (e = { $$typeof: cc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: ac, _context: e }), (e.Consumer = e);
};
j.createElement = qu;
j.createFactory = function (e) {
  var t = qu.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: fc, render: e };
};
j.isValidElement = Ho;
j.lazy = function (e) {
  return { $$typeof: mc, _payload: { _status: -1, _result: e }, _init: yc };
};
j.memo = function (e, t) {
  return { $$typeof: pc, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = t;
  }
};
j.unstable_act = bu;
j.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
j.useContext = function (e) {
  return ue.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
j.useId = function () {
  return ue.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return ue.current.useRef(e);
};
j.useState = function (e) {
  return ue.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return ue.current.useTransition();
};
j.version = "18.3.1";
Qu.exports = j;
var Se = Qu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kc = Se,
  xc = Symbol.for("react.element"),
  Sc = Symbol.for("react.fragment"),
  Ec = Object.prototype.hasOwnProperty,
  Cc = kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Ec.call(t, r) && !Nc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: xc, type: e, key: o, ref: i, props: l, _owner: Cc.current };
}
tl.Fragment = Sc;
tl.jsx = es;
tl.jsxs = es;
Wu.exports = tl;
var y = Wu.exports,
  ts = { exports: {} },
  ye = {},
  ns = { exports: {} },
  rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, z) {
    var L = C.length;
    C.push(z);
    e: for (; 0 < L; ) {
      var W = (L - 1) >>> 1,
        X = C[W];
      if (0 < l(X, z)) (C[W] = z), (C[L] = X), (L = W);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var z = C[0],
      L = C.pop();
    if (L !== z) {
      C[0] = L;
      e: for (var W = 0, X = C.length, er = X >>> 1; W < er; ) {
        var gt = 2 * (W + 1) - 1,
          wl = C[gt],
          yt = gt + 1,
          tr = C[yt];
        if (0 > l(wl, L)) yt < X && 0 > l(tr, wl) ? ((C[W] = tr), (C[yt] = L), (W = yt)) : ((C[W] = wl), (C[gt] = L), (W = gt));
        else if (yt < X && 0 > l(tr, L)) (C[W] = tr), (C[yt] = L), (W = yt);
        else break e;
      }
    }
    return z;
  }
  function l(C, z) {
    var L = C.sortIndex - z.sortIndex;
    return L !== 0 ? L : C.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    w = !1,
    k = !1,
    x = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= C) r(c), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(c);
    }
  }
  function v(C) {
    if (((x = !1), d(C), !k))
      if (n(s) !== null) (k = !0), gl(E);
      else {
        var z = n(c);
        z !== null && yl(v, z.startTime - C);
      }
  }
  function E(C, z) {
    (k = !1), x && ((x = !1), f(P), (P = -1)), (w = !0);
    var L = p;
    try {
      for (d(z), m = n(s); m !== null && (!(m.expirationTime > z) || (C && !Pe())); ) {
        var W = m.callback;
        if (typeof W == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var X = W(m.expirationTime <= z);
          (z = e.unstable_now()), typeof X == "function" ? (m.callback = X) : m === n(s) && r(s), d(z);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var er = !0;
      else {
        var gt = n(c);
        gt !== null && yl(v, gt.startTime - z), (er = !1);
      }
      return er;
    } finally {
      (m = null), (p = L), (w = !1);
    }
  }
  var N = !1,
    _ = null,
    P = -1,
    B = 5,
    T = -1;
  function Pe() {
    return !(e.unstable_now() - T < B);
  }
  function an() {
    if (_ !== null) {
      var C = e.unstable_now();
      T = C;
      var z = !0;
      try {
        z = _(!0, C);
      } finally {
        z ? cn() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var cn;
  if (typeof a == "function")
    cn = function () {
      a(an);
    };
  else if (typeof MessageChannel < "u") {
    var Ri = new MessageChannel(),
      lc = Ri.port2;
    (Ri.port1.onmessage = an),
      (cn = function () {
        lc.postMessage(null);
      });
  } else
    cn = function () {
      F(an, 0);
    };
  function gl(C) {
    (_ = C), N || ((N = !0), cn());
  }
  function yl(C, z) {
    P = F(function () {
      C(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || w || ((k = !0), gl(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (B = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var L = p;
      p = z;
      try {
        return C();
      } finally {
        p = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, z) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var L = p;
      p = C;
      try {
        return z();
      } finally {
        p = L;
      }
    }),
    (e.unstable_scheduleCallback = function (C, z, L) {
      var W = e.unstable_now();
      switch ((typeof L == "object" && L !== null ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? W + L : W)) : (L = W), C)) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = L + X),
        (C = { id: h++, callback: z, priorityLevel: C, startTime: L, expirationTime: X, sortIndex: -1 }),
        L > W ? ((C.sortIndex = L), t(c, C), n(s) === null && C === n(c) && (x ? (f(P), (P = -1)) : (x = !0), yl(v, L - W))) : ((C.sortIndex = X), t(s, C), k || w || ((k = !0), gl(E))),
        C
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (C) {
      var z = p;
      return function () {
        var L = p;
        p = z;
        try {
          return C.apply(this, arguments);
        } finally {
          p = L;
        }
      };
    });
})(rs);
ns.exports = rs;
var _c = ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pc = Se,
  ge = _c;
function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ls = new Set(),
  Mn = {};
function Tt(e, t) {
  qt(e, t), qt(e + "Capture", t);
}
function qt(e, t) {
  for (Mn[e] = t, e = 0; e < t.length; e++) ls.add(t[e]);
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Kl = Object.prototype.hasOwnProperty,
  zc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fi = {},
  Ui = {};
function Lc(e) {
  return Kl.call(Ui, e) ? !0 : Kl.call(Fi, e) ? !1 : zc.test(e) ? (Ui[e] = !0) : ((Fi[e] = !0), !1);
}
function jc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Tc(e, t, n, r) {
  if (t === null || typeof t > "u" || jc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = r), (this.attributeNamespace = l), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = o), (this.removeEmptyString = i);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  ee[e] = new se(e, 0, !1, e, null, !1, !1);
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bo = /[\-:]([a-z])/g;
function Wo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bo, Wo);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Bo, Wo);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bo, Wo);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qo(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (Tc(t, n, l, r) && (n = null),
    r || l === null
      ? Lc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName), (r = l.attributeNamespace), n === null ? e.removeAttribute(t) : ((l = l.type), (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for("react.element"),
  Ot = Symbol.for("react.portal"),
  Dt = Symbol.for("react.fragment"),
  Ko = Symbol.for("react.strict_mode"),
  Yl = Symbol.for("react.profiler"),
  os = Symbol.for("react.provider"),
  is = Symbol.for("react.context"),
  Yo = Symbol.for("react.forward_ref"),
  Gl = Symbol.for("react.suspense"),
  Xl = Symbol.for("react.suspense_list"),
  Go = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  us = Symbol.for("react.offscreen"),
  $i = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object" ? null : ((e = ($i && e[$i]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var V = Object.assign,
  xl;
function wn(e) {
  if (xl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xl = (t && t[1]) || "";
    }
  return (
    `
` +
    xl +
    e
  );
}
var Sl = !1;
function El(e, t) {
  if (!e || Sl) return "";
  Sl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Sl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wn(e) : "";
}
function Mc(e) {
  switch (e.tag) {
    case 5:
      return wn(e.type);
    case 16:
      return wn("Lazy");
    case 13:
      return wn("Suspense");
    case 19:
      return wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = El(e.type, !1)), e;
    case 11:
      return (e = El(e.type.render, !1)), e;
    case 1:
      return (e = El(e.type, !0)), e;
    default:
      return "";
  }
}
function Zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dt:
      return "Fragment";
    case Ot:
      return "Portal";
    case Yl:
      return "Profiler";
    case Ko:
      return "StrictMode";
    case Gl:
      return "Suspense";
    case Xl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case is:
        return (e.displayName || "Context") + ".Consumer";
      case os:
        return (e._context.displayName || "Context") + ".Provider";
      case Yo:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case Go:
        return (t = e.displayName || null), t !== null ? t : Zl(e.type) || "Memo";
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return Zl(e(t));
        } catch {}
    }
  return null;
}
function Rc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zl(t);
    case 8:
      return t === Ko ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ss(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Oc(e) {
  var t = ss(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = Oc(e));
}
function as(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = ss(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Tr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Jl(e, t) {
  var n = t.checked;
  return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ai(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dt(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function cs(e, t) {
  (t = t.checked), t != null && Qo(e, "checked", t, !1);
}
function ql(e, t) {
  cs(e, t);
  var n = dt(t.value),
    r = t.type;
  if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? bl(e, t.type, n) : t.hasOwnProperty("defaultValue") && bl(e, t.type, dt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Vi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function bl(e, t, n) {
  (t !== "number" || Tr(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var kn = Array.isArray;
function Kt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) (l = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function eo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Hi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (kn(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dt(n) };
}
function fs(e, t) {
  var n = dt(t.value),
    r = dt(t.defaultValue);
  n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Bi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ds(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function to(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ds(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var or,
  ps = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (or = or || document.createElement("div"), or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = or.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Dc = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function (e) {
  Dc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (En[t] = En[e]);
  });
});
function ms(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || (En.hasOwnProperty(e) && En[e]) ? ("" + t).trim() : t + "px";
}
function hs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ms(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Ic = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function no(e, t) {
  if (t) {
    if (Ic[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function ro(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var lo = null;
function Xo(e) {
  return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var oo = null,
  Yt = null,
  Gt = null;
function Wi(e) {
  if ((e = qn(e))) {
    if (typeof oo != "function") throw Error(g(280));
    var t = e.stateNode;
    t && ((t = il(t)), oo(e.stateNode, e.type, t));
  }
}
function vs(e) {
  Yt ? (Gt ? Gt.push(e) : (Gt = [e])) : (Yt = e);
}
function gs() {
  if (Yt) {
    var e = Yt,
      t = Gt;
    if (((Gt = Yt = null), Wi(e), t)) for (e = 0; e < t.length; e++) Wi(t[e]);
  }
}
function ys(e, t) {
  return e(t);
}
function ws() {}
var Cl = !1;
function ks(e, t, n) {
  if (Cl) return e(t, n);
  Cl = !0;
  try {
    return ys(e, t, n);
  } finally {
    (Cl = !1), (Yt !== null || Gt !== null) && (ws(), gs());
  }
}
function On(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = il(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var io = !1;
if (Ke)
  try {
    var dn = {};
    Object.defineProperty(dn, "passive", {
      get: function () {
        io = !0;
      },
    }),
      window.addEventListener("test", dn, dn),
      window.removeEventListener("test", dn, dn);
  } catch {
    io = !1;
  }
function Fc(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Cn = !1,
  Mr = null,
  Rr = !1,
  uo = null,
  Uc = {
    onError: function (e) {
      (Cn = !0), (Mr = e);
    },
  };
function $c(e, t, n, r, l, o, i, u, s) {
  (Cn = !1), (Mr = null), Fc.apply(Uc, arguments);
}
function Ac(e, t, n, r, l, o, i, u, s) {
  if (($c.apply(this, arguments), Cn)) {
    if (Cn) {
      var c = Mr;
      (Cn = !1), (Mr = null);
    } else throw Error(g(198));
    Rr || ((Rr = !0), (uo = c));
  }
}
function Mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Qi(e) {
  if (Mt(e) !== e) throw Error(g(188));
}
function Vc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Qi(l), e;
        if (o === r) return Qi(l), t;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Ss(e) {
  return (e = Vc(e)), e !== null ? Es(e) : null;
}
function Es(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Es(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cs = ge.unstable_scheduleCallback,
  Ki = ge.unstable_cancelCallback,
  Hc = ge.unstable_shouldYield,
  Bc = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  Wc = ge.unstable_getCurrentPriorityLevel,
  Zo = ge.unstable_ImmediatePriority,
  Ns = ge.unstable_UserBlockingPriority,
  Or = ge.unstable_NormalPriority,
  Qc = ge.unstable_LowPriority,
  _s = ge.unstable_IdlePriority,
  nl = null,
  $e = null;
function Kc(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : Xc,
  Yc = Math.log,
  Gc = Math.LN2;
function Xc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yc(e) / Gc) | 0)) | 0;
}
var ir = 64,
  ur = 4194304;
function xn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Dr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = xn(u)) : ((o &= i), o !== 0 && (r = xn(o)));
  } else (i = n & ~l), i !== 0 ? (r = xn(i)) : o !== 0 && (r = xn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))) return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Zc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Jc(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Me(o),
      u = 1 << i,
      s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Zc(u, t)) : s <= t && (e.expiredLanes |= u), (o &= ~u);
  }
}
function so(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ps() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Nl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zn(e, t, n) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - Me(t)), (e[t] = n);
}
function qc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Jo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function zs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ls,
  qo,
  js,
  Ts,
  Ms,
  ao = !1,
  sr = [],
  lt = null,
  ot = null,
  it = null,
  Dn = new Map(),
  In = new Map(),
  et = [],
  bc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Yi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      it = null;
      break;
    case "pointerover":
    case "pointerout":
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      In.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }), t !== null && ((t = qn(t)), t !== null && qo(t)), e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function ef(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (lt = pn(lt, e, t, n, r, l)), !0;
    case "dragenter":
      return (ot = pn(ot, e, t, n, r, l)), !0;
    case "mouseover":
      return (it = pn(it, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Dn.set(o, pn(Dn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (o = l.pointerId), In.set(o, pn(In.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Rs(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xs(n)), t !== null)) {
          (e.blockedOn = t),
            Ms(e.priority, function () {
              js(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (lo = r), n.target.dispatchEvent(r), (lo = null);
    } else return (t = qn(n)), t !== null && qo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Gi(e, t, n) {
  xr(e) && n.delete(t);
}
function tf() {
  (ao = !1), lt !== null && xr(lt) && (lt = null), ot !== null && xr(ot) && (ot = null), it !== null && xr(it) && (it = null), Dn.forEach(Gi), In.forEach(Gi);
}
function mn(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), ao || ((ao = !0), ge.unstable_scheduleCallback(ge.unstable_NormalPriority, tf)));
}
function Fn(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < sr.length) {
    mn(sr[0], e);
    for (var n = 1; n < sr.length; n++) {
      var r = sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (lt !== null && mn(lt, e), ot !== null && mn(ot, e), it !== null && mn(it, e), Dn.forEach(t), In.forEach(t), n = 0; n < et.length; n++) (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); ) Rs(n), n.blockedOn === null && et.shift();
}
var Xt = Ze.ReactCurrentBatchConfig,
  Ir = !0;
function nf(e, t, n, r) {
  var l = R,
    o = Xt.transition;
  Xt.transition = null;
  try {
    (R = 1), bo(e, t, n, r);
  } finally {
    (R = l), (Xt.transition = o);
  }
}
function rf(e, t, n, r) {
  var l = R,
    o = Xt.transition;
  Xt.transition = null;
  try {
    (R = 4), bo(e, t, n, r);
  } finally {
    (R = l), (Xt.transition = o);
  }
}
function bo(e, t, n, r) {
  if (Ir) {
    var l = co(e, t, n, r);
    if (l === null) Dl(e, t, r, Fr, n), Yi(e, r);
    else if (ef(l, e, t, n, r)) r.stopPropagation();
    else if ((Yi(e, r), t & 4 && -1 < bc.indexOf(e))) {
      for (; l !== null; ) {
        var o = qn(l);
        if ((o !== null && Ls(o), (o = co(e, t, n, r)), o === null && Dl(e, t, r, Fr, n), o === l)) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Dl(e, t, r, null, n);
  }
}
var Fr = null;
function co(e, t, n, r) {
  if (((Fr = null), (e = Xo(r)), (e = xt(e)), e !== null))
    if (((t = Mt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Fr = e), null;
}
function Os(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Wc()) {
        case Zo:
          return 1;
        case Ns:
          return 4;
        case Or:
        case Qc:
          return 16;
        case _s:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  ei = null,
  Sr = null;
function Ds() {
  if (Sr) return Sr;
  var e,
    t = ei,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ar() {
  return !0;
}
function Xi() {
  return !1;
}
function we(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n), (this._targetInst = l), (this.type = r), (this.nativeEvent = o), (this.target = i), (this.currentTarget = null);
    for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ar : Xi), (this.isPropagationStopped = Xi), this;
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    t
  );
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ti = we(un),
  Jn = V({}, un, { view: 0, detail: 0 }),
  lf = we(Jn),
  _l,
  Pl,
  hn,
  rl = V({}, Jn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ni,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e ? e.movementX : (e !== hn && (hn && e.type === "mousemove" ? ((_l = e.screenX - hn.screenX), (Pl = e.screenY - hn.screenY)) : (Pl = _l = 0), (hn = e)), _l);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pl;
    },
  }),
  Zi = we(rl),
  of = V({}, rl, { dataTransfer: 0 }),
  uf = we(of),
  sf = V({}, Jn, { relatedTarget: 0 }),
  zl = we(sf),
  af = V({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cf = we(af),
  ff = V({}, un, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  df = we(ff),
  pf = V({}, un, { data: 0 }),
  Ji = we(pf),
  mf = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
  hf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function gf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vf[e]) ? !!t[e] : !1;
}
function ni() {
  return gf;
}
var yf = V({}, Jn, {
    key: function (e) {
      if (e.key) {
        var t = mf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? ((e = Er(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hf[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ni,
    charCode: function (e) {
      return e.type === "keypress" ? Er(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Er(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  wf = we(yf),
  kf = V({}, rl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
  qi = we(kf),
  xf = V({}, Jn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ni }),
  Sf = we(xf),
  Ef = V({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cf = we(Ef),
  Nf = V({}, rl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _f = we(Nf),
  Pf = [9, 13, 27, 32],
  ri = Ke && "CompositionEvent" in window,
  Nn = null;
Ke && "documentMode" in document && (Nn = document.documentMode);
var zf = Ke && "TextEvent" in window && !Nn,
  Is = Ke && (!ri || (Nn && 8 < Nn && 11 >= Nn)),
  bi = " ",
  eu = !1;
function Fs(e, t) {
  switch (e) {
    case "keyup":
      return Pf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Us(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var It = !1;
function Lf(e, t) {
  switch (e) {
    case "compositionend":
      return Us(t);
    case "keypress":
      return t.which !== 32 ? null : ((eu = !0), bi);
    case "textInput":
      return (e = t.data), e === bi && eu ? null : e;
    default:
      return null;
  }
}
function jf(e, t) {
  if (It) return e === "compositionend" || (!ri && Fs(e, t)) ? ((e = Ds()), (Sr = ei = nt = null), (It = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Is && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Tf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Tf[e.type] : t === "textarea";
}
function $s(e, t, n, r) {
  vs(r), (t = Ur(t, "onChange")), 0 < t.length && ((n = new ti("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var _n = null,
  Un = null;
function Mf(e) {
  Zs(e, 0);
}
function ll(e) {
  var t = $t(e);
  if (as(t)) return e;
}
function Rf(e, t) {
  if (e === "change") return t;
}
var As = !1;
if (Ke) {
  var Ll;
  if (Ke) {
    var jl = "oninput" in document;
    if (!jl) {
      var nu = document.createElement("div");
      nu.setAttribute("oninput", "return;"), (jl = typeof nu.oninput == "function");
    }
    Ll = jl;
  } else Ll = !1;
  As = Ll && (!document.documentMode || 9 < document.documentMode);
}
function ru() {
  _n && (_n.detachEvent("onpropertychange", Vs), (Un = _n = null));
}
function Vs(e) {
  if (e.propertyName === "value" && ll(Un)) {
    var t = [];
    $s(t, Un, e, Xo(e)), ks(Mf, t);
  }
}
function Of(e, t, n) {
  e === "focusin" ? (ru(), (_n = t), (Un = n), _n.attachEvent("onpropertychange", Vs)) : e === "focusout" && ru();
}
function Df(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ll(Un);
}
function If(e, t) {
  if (e === "click") return ll(t);
}
function Ff(e, t) {
  if (e === "input" || e === "change") return ll(t);
}
function Uf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Oe = typeof Object.is == "function" ? Object.is : Uf;
function $n(e, t) {
  if (Oe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Kl.call(t, l) || !Oe(e[l], t[l])) return !1;
  }
  return !0;
}
function lu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ou(e, t) {
  var n = lu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = lu(n);
  }
}
function Hs(e, t) {
  return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function Bs() {
  for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Tr(e.document);
  }
  return t;
}
function li(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
}
function $f(e) {
  var t = Bs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Hs(n.ownerDocument.documentElement, n)) {
    if (r !== null && li(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)), !e.extend && o > r && ((l = r), (r = o), (o = l)), (l = ou(n, o));
        var i = ou(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) &&
          ((t = t.createRange()), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Af = Ke && "documentMode" in document && 11 >= document.documentMode,
  Ft = null,
  fo = null,
  Pn = null,
  po = !1;
function iu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  po ||
    Ft == null ||
    Ft !== Tr(r) ||
    ((r = Ft),
    "selectionStart" in r && li(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
    (Pn && $n(Pn, r)) || ((Pn = r), (r = Ur(fo, "onSelect")), 0 < r.length && ((t = new ti("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Ft))));
}
function cr(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Ut = { animationend: cr("Animation", "AnimationEnd"), animationiteration: cr("Animation", "AnimationIteration"), animationstart: cr("Animation", "AnimationStart"), transitionend: cr("Transition", "TransitionEnd") },
  Tl = {},
  Ws = {};
Ke &&
  ((Ws = document.createElement("div").style),
  "AnimationEvent" in window || (delete Ut.animationend.animation, delete Ut.animationiteration.animation, delete Ut.animationstart.animation),
  "TransitionEvent" in window || delete Ut.transitionend.transition);
function ol(e) {
  if (Tl[e]) return Tl[e];
  if (!Ut[e]) return e;
  var t = Ut[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ws) return (Tl[e] = t[n]);
  return e;
}
var Qs = ol("animationend"),
  Ks = ol("animationiteration"),
  Ys = ol("animationstart"),
  Gs = ol("transitionend"),
  Xs = new Map(),
  uu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mt(e, t) {
  Xs.set(e, t), Tt(t, [e]);
}
for (var Ml = 0; Ml < uu.length; Ml++) {
  var Rl = uu[Ml],
    Vf = Rl.toLowerCase(),
    Hf = Rl[0].toUpperCase() + Rl.slice(1);
  mt(Vf, "on" + Hf);
}
mt(Qs, "onAnimationEnd");
mt(Ks, "onAnimationIteration");
mt(Ys, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Gs, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ),
  Bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));
function su(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ac(r, t, void 0, e), (e.currentTarget = null);
}
function Zs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          su(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (((u = r[i]), (s = u.instance), (c = u.currentTarget), (u = u.listener), s !== o && l.isPropagationStopped())) break e;
          su(l, u, c), (o = s);
        }
    }
  }
  if (Rr) throw ((e = uo), (Rr = !1), (uo = null), e);
}
function D(e, t) {
  var n = t[yo];
  n === void 0 && (n = t[yo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Js(t, e, 2, !1), n.add(r));
}
function Ol(e, t, n) {
  var r = 0;
  t && (r |= 4), Js(n, e, r, t);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function An(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      ls.forEach(function (n) {
        n !== "selectionchange" && (Bf.has(n) || Ol(n, !1, e), Ol(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fr] || ((t[fr] = !0), Ol("selectionchange", !1, t));
  }
}
function Js(e, t, n, r) {
  switch (Os(t)) {
    case 1:
      var l = nf;
      break;
    case 4:
      l = rf;
      break;
    default:
      l = bo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !io || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
    r ? (l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0)) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Dl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if ((s === 3 || s === 4) && ((s = i.stateNode.containerInfo), s === l || (s.nodeType === 8 && s.parentNode === l))) return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = xt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ks(function () {
    var c = o,
      h = Xo(n),
      m = [];
    e: {
      var p = Xs.get(e);
      if (p !== void 0) {
        var w = ti,
          k = e;
        switch (e) {
          case "keypress":
            if (Er(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = wf;
            break;
          case "focusin":
            (k = "focus"), (w = zl);
            break;
          case "focusout":
            (k = "blur"), (w = zl);
            break;
          case "beforeblur":
          case "afterblur":
            w = zl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Zi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = uf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Sf;
            break;
          case Qs:
          case Ks:
          case Ys:
            w = cf;
            break;
          case Gs:
            w = Cf;
            break;
          case "scroll":
            w = lf;
            break;
          case "wheel":
            w = _f;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = df;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = qi;
        }
        var x = (t & 4) !== 0,
          F = !x && e === "scroll",
          f = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if ((d.tag === 5 && v !== null && ((d = v), f !== null && ((v = On(a, f)), v != null && x.push(Vn(a, v, d)))), F)) break;
          a = a.return;
        }
        0 < x.length && ((p = new w(p, k, null, n, h)), m.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (((p = e === "mouseover" || e === "pointerover"), (w = e === "mouseout" || e === "pointerout"), p && n !== lo && (k = n.relatedTarget || n.fromElement) && (xt(k) || k[Ye]))) break e;
        if (
          (w || p) &&
          ((p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window),
          w ? ((k = n.relatedTarget || n.toElement), (w = c), (k = k ? xt(k) : null), k !== null && ((F = Mt(k)), k !== F || (k.tag !== 5 && k.tag !== 6)) && (k = null)) : ((w = null), (k = c)),
          w !== k)
        ) {
          if (
            ((x = Zi),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") && ((x = qi), (v = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
            (F = w == null ? p : $t(w)),
            (d = k == null ? p : $t(k)),
            (p = new x(v, a + "leave", w, n, h)),
            (p.target = F),
            (p.relatedTarget = d),
            (v = null),
            xt(h) === c && ((x = new x(f, a + "enter", k, n, h)), (x.target = d), (x.relatedTarget = F), (v = x)),
            (F = v),
            w && k)
          )
            t: {
              for (x = w, f = k, a = 0, d = x; d; d = Rt(d)) a++;
              for (d = 0, v = f; v; v = Rt(v)) d++;
              for (; 0 < a - d; ) (x = Rt(x)), a--;
              for (; 0 < d - a; ) (f = Rt(f)), d--;
              for (; a--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                (x = Rt(x)), (f = Rt(f));
              }
              x = null;
            }
          else x = null;
          w !== null && au(m, p, w, x, !1), k !== null && F !== null && au(m, F, k, x, !0);
        }
      }
      e: {
        if (((p = c ? $t(c) : window), (w = p.nodeName && p.nodeName.toLowerCase()), w === "select" || (w === "input" && p.type === "file"))) var E = Rf;
        else if (tu(p))
          if (As) E = Ff;
          else {
            E = Df;
            var N = Of;
          }
        else (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = If);
        if (E && (E = E(e, c))) {
          $s(m, E, n, h);
          break e;
        }
        N && N(e, p, c), e === "focusout" && (N = p._wrapperState) && N.controlled && p.type === "number" && bl(p, "number", p.value);
      }
      switch (((N = c ? $t(c) : window), e)) {
        case "focusin":
          (tu(N) || N.contentEditable === "true") && ((Ft = N), (fo = c), (Pn = null));
          break;
        case "focusout":
          Pn = fo = Ft = null;
          break;
        case "mousedown":
          po = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (po = !1), iu(m, n, h);
          break;
        case "selectionchange":
          if (Af) break;
        case "keydown":
        case "keyup":
          iu(m, n, h);
      }
      var _;
      if (ri)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else It ? Fs(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Is && n.locale !== "ko" && (It || P !== "onCompositionStart" ? P === "onCompositionEnd" && It && (_ = Ds()) : ((nt = h), (ei = "value" in nt ? nt.value : nt.textContent), (It = !0))),
        (N = Ur(c, P)),
        0 < N.length && ((P = new Ji(P, e, null, n, h)), m.push({ event: P, listeners: N }), _ ? (P.data = _) : ((_ = Us(n)), _ !== null && (P.data = _)))),
        (_ = zf ? Lf(e, n) : jf(e, n)) && ((c = Ur(c, "onBeforeInput")), 0 < c.length && ((h = new Ji("onBeforeInput", "beforeinput", null, n, h)), m.push({ event: h, listeners: c }), (h.data = _)));
    }
    Zs(m, t);
  });
}
function Vn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ur(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 && o !== null && ((l = o), (o = On(e, n)), o != null && r.unshift(Vn(e, o, l)), (o = On(e, t)), o != null && r.push(Vn(e, o, l))), (e = e.return);
  }
  return r;
}
function Rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function au(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && ((u = c), l ? ((s = On(n, o)), s != null && i.unshift(Vn(n, s, u))) : l || ((s = On(n, o)), s != null && i.push(Vn(n, s, u)))), (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Wf = /\r\n?/g,
  Qf = /\u0000|\uFFFD/g;
function cu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Wf,
      `
`
    )
    .replace(Qf, "");
}
function dr(e, t, n) {
  if (((t = cu(t)), cu(e) !== t && n)) throw Error(g(425));
}
function $r() {}
var mo = null,
  ho = null;
function vo(e, t) {
  return (
    e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  );
}
var go = typeof setTimeout == "function" ? setTimeout : void 0,
  Kf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fu = typeof Promise == "function" ? Promise : void 0,
  Yf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fu < "u"
      ? function (e) {
          return fu.resolve(null).then(e).catch(Gf);
        }
      : go;
function Gf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Il(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Fn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Fn(t);
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function du(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + sn,
  Hn = "__reactProps$" + sn,
  Ye = "__reactContainer$" + sn,
  yo = "__reactEvents$" + sn,
  Xf = "__reactListeners$" + sn,
  Zf = "__reactHandles$" + sn;
function xt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ue])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = du(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = du(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qn(e) {
  return (e = e[Ue] || e[Ye]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function $t(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function il(e) {
  return e[Hn] || null;
}
var wo = [],
  At = -1;
function ht(e) {
  return { current: e };
}
function I(e) {
  0 > At || ((e.current = wo[At]), (wo[At] = null), At--);
}
function O(e, t) {
  At++, (wo[At] = e.current), (e.current = t);
}
var pt = {},
  le = ht(pt),
  fe = ht(!1),
  _t = pt;
function bt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = l)), l;
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function Ar() {
  I(fe), I(le);
}
function pu(e, t, n) {
  if (le.current !== pt) throw Error(g(168));
  O(le, t), O(fe, n);
}
function qs(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, Rc(e) || "Unknown", l));
  return V({}, n, r);
}
function Vr(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pt), (_t = le.current), O(le, e), O(fe, fe.current), !0;
}
function mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n ? ((e = qs(e, t, _t)), (r.__reactInternalMemoizedMergedChildContext = e), I(fe), I(le), O(le, e)) : I(fe), O(fe, n);
}
var He = null,
  ul = !1,
  Fl = !1;
function bs(e) {
  He === null ? (He = [e]) : He.push(e);
}
function Jf(e) {
  (ul = !0), bs(e);
}
function vt() {
  if (!Fl && He !== null) {
    Fl = !0;
    var e = 0,
      t = R;
    try {
      var n = He;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (ul = !1);
    } catch (l) {
      throw (He !== null && (He = He.slice(e + 1)), Cs(Zo, vt), l);
    } finally {
      (R = t), (Fl = !1);
    }
  }
  return null;
}
var Vt = [],
  Ht = 0,
  Hr = null,
  Br = 0,
  ke = [],
  xe = 0,
  Pt = null,
  Be = 1,
  We = "";
function wt(e, t) {
  (Vt[Ht++] = Br), (Vt[Ht++] = Hr), (Hr = e), (Br = t);
}
function ea(e, t, n) {
  (ke[xe++] = Be), (ke[xe++] = We), (ke[xe++] = Pt), (Pt = e);
  var r = Be;
  e = We;
  var l = 32 - Me(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Me(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)), (r >>= i), (l -= i), (Be = (1 << (32 - Me(t) + l)) | (n << l) | r), (We = o + e);
  } else (Be = (1 << o) | (n << l) | r), (We = e);
}
function oi(e) {
  e.return !== null && (wt(e, 1), ea(e, 1, 0));
}
function ii(e) {
  for (; e === Hr; ) (Hr = Vt[--Ht]), (Vt[Ht] = null), (Br = Vt[--Ht]), (Vt[Ht] = null);
  for (; e === Pt; ) (Pt = ke[--xe]), (ke[xe] = null), (We = ke[--xe]), (ke[xe] = null), (Be = ke[--xe]), (ke[xe] = null);
}
var ve = null,
  he = null,
  U = !1,
  Te = null;
function ta(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (ve = e), (he = ut(t.firstChild)), !0) : !1;
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (ve = e), (he = null), !0) : !1;
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pt !== null ? { id: Be, overflow: We } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xo(e) {
  if (U) {
    var t = he;
    if (t) {
      var n = t;
      if (!hu(e, t)) {
        if (ko(e)) throw Error(g(418));
        t = ut(n.nextSibling);
        var r = ve;
        t && hu(e, t) ? ta(r, n) : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e));
      }
    } else {
      if (ko(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e);
    }
  }
}
function vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ve = e;
}
function pr(e) {
  if (e !== ve) return !1;
  if (!U) return vu(e), (U = !0), !1;
  var t;
  if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !vo(e.type, e.memoizedProps))), t && (t = he))) {
    if (ko(e)) throw (na(), Error(g(418)));
    for (; t; ) ta(e, t), (t = ut(t.nextSibling));
  }
  if ((vu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              he = ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function na() {
  for (var e = he; e; ) e = ut(e.nextSibling);
}
function en() {
  (he = ve = null), (U = !1);
}
function ui(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var qf = Ze.ReactCurrentBatchConfig;
function vn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function mr(e, t) {
  throw ((e = Object.prototype.toString.call(t)), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function gu(e) {
  var t = e._init;
  return t(e._payload);
}
function ra(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ft(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (f.index = d), e ? ((d = f.alternate), d !== null ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d) : ((f.flags |= 2), a)) : ((f.flags |= 1048576), a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? ((a = Wl(d, f.mode, v)), (a.return = f), a) : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Dt
      ? h(f, a, d.props.children, v, d.key)
      : a !== null && (a.elementType === E || (typeof E == "object" && E !== null && E.$$typeof === qe && gu(E) === a.type))
      ? ((v = l(a, d.props)), (v.ref = vn(f, a, d)), (v.return = f), v)
      : ((v = jr(d.type, d.key, d.props, null, f.mode, v)), (v.ref = vn(f, a, d)), (v.return = f), v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? ((a = Ql(d, f.mode, v)), (a.return = f), a) : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? ((a = Nt(d, f.mode, v, E)), (a.return = f), a) : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number") return (a = Wl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return (d = jr(a.type, a.key, a.props, null, f.mode, d)), (d.ref = vn(f, null, a)), (d.return = f), d;
        case Ot:
          return (a = Ql(a, f.mode, d)), (a.return = f), a;
        case qe:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (kn(a) || fn(a)) return (a = Nt(a, f.mode, d, null)), (a.return = f), a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number") return E !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === E ? s(f, a, d, v) : null;
        case Ot:
          return d.key === E ? c(f, a, d, v) : null;
        case qe:
          return (E = d._init), p(f, a, E(d._payload), v);
      }
      if (kn(d) || fn(d)) return E !== null ? null : h(f, a, d, v, null);
      mr(f, d);
    }
    return null;
  }
  function w(f, a, d, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number") return (f = f.get(d) || null), u(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case rr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, E);
        case Ot:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, E);
        case qe:
          var N = v._init;
          return w(f, a, d, N(v._payload), E);
      }
      if (kn(v) || fn(v)) return (f = f.get(d) || null), h(a, f, v, E, null);
      mr(a, v);
    }
    return null;
  }
  function k(f, a, d, v) {
    for (var E = null, N = null, _ = a, P = (a = 0), B = null; _ !== null && P < d.length; P++) {
      _.index > P ? ((B = _), (_ = null)) : (B = _.sibling);
      var T = p(f, _, d[P], v);
      if (T === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && T.alternate === null && t(f, _), (a = o(T, a, P)), N === null ? (E = T) : (N.sibling = T), (N = T), (_ = B);
    }
    if (P === d.length) return n(f, _), U && wt(f, P), E;
    if (_ === null) {
      for (; P < d.length; P++) (_ = m(f, d[P], v)), _ !== null && ((a = o(_, a, P)), N === null ? (E = _) : (N.sibling = _), (N = _));
      return U && wt(f, P), E;
    }
    for (_ = r(f, _); P < d.length; P++) (B = w(_, f, P, d[P], v)), B !== null && (e && B.alternate !== null && _.delete(B.key === null ? P : B.key), (a = o(B, a, P)), N === null ? (E = B) : (N.sibling = B), (N = B));
    return (
      e &&
        _.forEach(function (Pe) {
          return t(f, Pe);
        }),
      U && wt(f, P),
      E
    );
  }
  function x(f, a, d, v) {
    var E = fn(d);
    if (typeof E != "function") throw Error(g(150));
    if (((d = E.call(d)), d == null)) throw Error(g(151));
    for (var N = (E = null), _ = a, P = (a = 0), B = null, T = d.next(); _ !== null && !T.done; P++, T = d.next()) {
      _.index > P ? ((B = _), (_ = null)) : (B = _.sibling);
      var Pe = p(f, _, T.value, v);
      if (Pe === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && Pe.alternate === null && t(f, _), (a = o(Pe, a, P)), N === null ? (E = Pe) : (N.sibling = Pe), (N = Pe), (_ = B);
    }
    if (T.done) return n(f, _), U && wt(f, P), E;
    if (_ === null) {
      for (; !T.done; P++, T = d.next()) (T = m(f, T.value, v)), T !== null && ((a = o(T, a, P)), N === null ? (E = T) : (N.sibling = T), (N = T));
      return U && wt(f, P), E;
    }
    for (_ = r(f, _); !T.done; P++, T = d.next()) (T = w(_, f, P, T.value, v)), T !== null && (e && T.alternate !== null && _.delete(T.key === null ? P : T.key), (a = o(T, a, P)), N === null ? (E = T) : (N.sibling = T), (N = T));
    return (
      e &&
        _.forEach(function (an) {
          return t(f, an);
        }),
      U && wt(f, P),
      E
    );
  }
  function F(f, a, d, v) {
    if ((typeof d == "object" && d !== null && d.type === Dt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null)) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var E = d.key, N = a; N !== null; ) {
              if (N.key === E) {
                if (((E = d.type), E === Dt)) {
                  if (N.tag === 7) {
                    n(f, N.sibling), (a = l(N, d.props.children)), (a.return = f), (f = a);
                    break e;
                  }
                } else if (N.elementType === E || (typeof E == "object" && E !== null && E.$$typeof === qe && gu(E) === N.type)) {
                  n(f, N.sibling), (a = l(N, d.props)), (a.ref = vn(f, N, d)), (a.return = f), (f = a);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === Dt ? ((a = Nt(d.props.children, f.mode, v, d.key)), (a.return = f), (f = a)) : ((v = jr(d.type, d.key, d.props, null, f.mode, v)), (v.ref = vn(f, a, d)), (v.return = f), (f = v));
          }
          return i(f);
        case Ot:
          e: {
            for (N = d.key; a !== null; ) {
              if (a.key === N)
                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), (a = l(a, d.children || [])), (a.return = f), (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Ql(d, f.mode, v)), (a.return = f), (f = a);
          }
          return i(f);
        case qe:
          return (N = d._init), F(f, a, N(d._payload), v);
      }
      if (kn(d)) return k(f, a, d, v);
      if (fn(d)) return x(f, a, d, v);
      mr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d), a !== null && a.tag === 6 ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a)) : (n(f, a), (a = Wl(d, f.mode, v)), (a.return = f), (f = a)), i(f))
      : n(f, a);
  }
  return F;
}
var tn = ra(!0),
  la = ra(!1),
  Wr = ht(null),
  Qr = null,
  Bt = null,
  si = null;
function ai() {
  si = Bt = Qr = null;
}
function ci(e) {
  var t = Wr.current;
  I(Wr), (e._currentValue = t);
}
function So(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
    e = e.return;
  }
}
function Zt(e, t) {
  (Qr = e), (si = Bt = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (si !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bt === null)) {
      if (Qr === null) throw Error(g(308));
      (Bt = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else Bt = Bt.next = e;
  return t;
}
var St = null;
function fi(e) {
  St === null ? (St = [e]) : St.push(e);
}
function oa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? ((n.next = n), fi(t)) : ((n.next = l.next), (l.next = n)), (t.interleaved = n), Ge(e, r);
}
function Ge(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function di(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ia(e, t) {
  (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Qe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function st(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), Ge(e, n);
  }
  return (l = r.interleaved), l === null ? ((t.next = t), fi(r)) : ((t.next = l.next), (l.next = t)), (r.interleaved = t), Ge(e, n);
}
function Cr(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jo(e, n);
  }
}
function yu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Kr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var h = e.alternate;
    h !== null && ((h = h.updateQueue), (u = h.lastBaseUpdate), u !== i && (u === null ? (h.firstBaseUpdate = c) : (u.next = c), (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (h = c = s = null), (u = o);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = { eventTime: w, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
        e: {
          var k = e,
            x = u;
          switch (((p = t), (w = n), x.tag)) {
            case 1:
              if (((k = x.payload), typeof k == "function")) {
                m = k.call(w, m, p);
                break e;
              }
              m = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (((k = x.payload), (p = typeof k == "function" ? k.call(w, m, p) : k), p == null)) break e;
              m = V({}, m, p);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && ((e.flags |= 64), (p = l.effects), p === null ? (l.effects = [u]) : p.push(u));
      } else (w = { eventTime: w, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }), h === null ? ((c = h = w), (s = m)) : (h = h.next = w), (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u), (u = p.next), (p.next = null), (l.lastBaseUpdate = p), (l.shared.pending = null);
      }
    } while (!0);
    if ((h === null && (s = m), (l.baseState = s), (l.firstBaseUpdate = c), (l.lastBaseUpdate = h), (t = l.shared.interleaved), t !== null)) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Lt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function wu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function")) throw Error(g(191, l));
        l.call(r);
      }
    }
}
var bn = {},
  Ae = ht(bn),
  Bn = ht(bn),
  Wn = ht(bn);
function Et(e) {
  if (e === bn) throw Error(g(174));
  return e;
}
function pi(e, t) {
  switch ((O(Wn, t), O(Bn, e), O(Ae, bn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : to(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = to(t, e));
  }
  I(Ae), O(Ae, t);
}
function nn() {
  I(Ae), I(Bn), I(Wn);
}
function ua(e) {
  Et(Wn.current);
  var t = Et(Ae.current),
    n = to(t, e.type);
  t !== n && (O(Bn, e), O(Ae, n));
}
function mi(e) {
  Bn.current === e && (I(Ae), I(Bn));
}
var $ = ht(0);
function Yr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ul = [];
function hi() {
  for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var Nr = Ze.ReactCurrentDispatcher,
  $l = Ze.ReactCurrentBatchConfig,
  zt = 0,
  A = null,
  Y = null,
  Z = null,
  Gr = !1,
  zn = !1,
  Qn = 0,
  bf = 0;
function te() {
  throw Error(g(321));
}
function vi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Oe(e[n], t[n])) return !1;
  return !0;
}
function gi(e, t, n, r, l, o) {
  if (((zt = o), (A = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (Nr.current = e === null || e.memoizedState === null ? rd : ld), (e = n(r, l)), zn)) {
    o = 0;
    do {
      if (((zn = !1), (Qn = 0), 25 <= o)) throw Error(g(301));
      (o += 1), (Z = Y = null), (t.updateQueue = null), (Nr.current = od), (e = n(r, l));
    } while (zn);
  }
  if (((Nr.current = Xr), (t = Y !== null && Y.next !== null), (zt = 0), (Z = Y = A = null), (Gr = !1), t)) throw Error(g(300));
  return e;
}
function yi() {
  var e = Qn !== 0;
  return (Qn = 0), e;
}
function Fe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function _e() {
  if (Y === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? A.memoizedState : Z.next;
  if (t !== null) (Z = t), (Y = e);
  else {
    if (e === null) throw Error(g(310));
    (Y = e), (e = { memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null }), Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Kn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Al(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var h = c.lane;
      if ((zt & h) === h) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = { lane: h, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m), (A.lanes |= h), (Lt |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u), Oe(r, t.memoizedState) || (ce = !0), (t.memoizedState = r), (t.baseState = i), (t.baseQueue = s), (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (A.lanes |= o), (Lt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Oe(o, t.memoizedState) || (ce = !0), (t.memoizedState = o), t.baseQueue === null && (t.baseState = o), (n.lastRenderedState = o);
  }
  return [o, r];
}
function sa() {}
function aa(e, t) {
  var n = A,
    r = _e(),
    l = t(),
    o = !Oe(r.memoizedState, l);
  if ((o && ((r.memoizedState = l), (ce = !0)), (r = r.queue), wi(da.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || (Z !== null && Z.memoizedState.tag & 1))) {
    if (((n.flags |= 2048), Yn(9, fa.bind(null, n, r, l, t), void 0, null), J === null)) throw Error(g(349));
    zt & 30 || ca(n, t, l);
  }
  return l;
}
function ca(e, t, n) {
  (e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = A.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (A.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), pa(t) && ma(e);
}
function da(e, t, n) {
  return n(function () {
    pa(t) && ma(e);
  });
}
function pa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Oe(e, n);
  } catch {
    return !0;
  }
}
function ma(e) {
  var t = Ge(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function ku(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kn, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = nd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function Yn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null ? ((t = { lastEffect: null, stores: null }), (A.updateQueue = t), (t.lastEffect = e.next = e)) : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ha() {
  return _e().memoizedState;
}
function _r(e, t, n, r) {
  var l = Fe();
  (A.flags |= e), (l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r));
}
function sl(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (((o = i.destroy), r !== null && vi(r, i.deps))) {
      l.memoizedState = Yn(t, n, o, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Yn(1 | t, n, o, r));
}
function xu(e, t) {
  return _r(8390656, 8, e, t);
}
function wi(e, t) {
  return sl(2048, 8, e, t);
}
function va(e, t) {
  return sl(4, 2, e, t);
}
function ga(e, t) {
  return sl(4, 4, e, t);
}
function ya(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function wa(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), sl(4, 4, ya.bind(null, t, e), n);
}
function ki() {}
function ka(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function xa(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vi(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sa(e, t, n) {
  return zt & 21 ? (Oe(n, t) || ((n = Ps()), (A.lanes |= n), (Lt |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function ed(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), ($l.transition = r);
  }
}
function Ea() {
  return _e().memoizedState;
}
function td(e, t, n) {
  var r = ct(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ca(e))) Na(t, n);
  else if (((n = oa(e, t, n, r)), n !== null)) {
    var l = ie();
    Re(n, e, r, l), _a(n, t, r);
  }
}
function nd(e, t, n) {
  var r = ct(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ca(e)) Na(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Oe(u, i))) {
          var s = t.interleaved;
          s === null ? ((l.next = l), fi(t)) : ((l.next = s.next), (s.next = l)), (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = oa(e, t, l, r)), n !== null && ((l = ie()), Re(n, e, r, l), _a(n, t, r));
  }
}
function Ca(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function Na(e, t) {
  zn = Gr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function _a(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jo(e, n);
  }
}
var Xr = {
    readContext: Ne,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  rd = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: xu,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), _r(4194308, 4, ya.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return _r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
        (r.queue = e),
        (e = e.dispatch = td.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ku,
    useDebugValue: ki,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = ku(!1),
        t = e[0];
      return (e = ed.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Fe();
      if (U) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(g(349));
        zt & 30 || ca(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (l.queue = o), xu(da.bind(null, r, o, e), [e]), (r.flags |= 2048), Yn(9, fa.bind(null, r, o, n, t), void 0, null), n;
    },
    useId: function () {
      var e = Fe(),
        t = J.identifierPrefix;
      if (U) {
        var n = We,
          r = Be;
        (n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = Qn++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
      } else (n = bf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ld = {
    readContext: Ne,
    useCallback: ka,
    useContext: Ne,
    useEffect: wi,
    useImperativeHandle: wa,
    useInsertionEffect: va,
    useLayoutEffect: ga,
    useMemo: xa,
    useReducer: Al,
    useRef: ha,
    useState: function () {
      return Al(Kn);
    },
    useDebugValue: ki,
    useDeferredValue: function (e) {
      var t = _e();
      return Sa(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Kn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: sa,
    useSyncExternalStore: aa,
    useId: Ea,
    unstable_isNewReconciler: !1,
  },
  od = {
    readContext: Ne,
    useCallback: ka,
    useContext: Ne,
    useEffect: wi,
    useImperativeHandle: wa,
    useInsertionEffect: va,
    useLayoutEffect: ga,
    useMemo: xa,
    useReducer: Vl,
    useRef: ha,
    useState: function () {
      return Vl(Kn);
    },
    useDebugValue: ki,
    useDeferredValue: function (e) {
      var t = _e();
      return Y === null ? (t.memoizedState = e) : Sa(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Kn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: sa,
    useSyncExternalStore: aa,
    useId: Ea,
    unstable_isNewReconciler: !1,
  };
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Eo(e, t, n, r) {
  (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : V({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = ct(e),
      o = Qe(r, l);
    (o.payload = t), n != null && (o.callback = n), (t = st(e, o, l)), t !== null && (Re(t, e, l, r), Cr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = ct(e),
      o = Qe(r, l);
    (o.tag = 1), (o.payload = t), n != null && (o.callback = n), (t = st(e, o, l)), t !== null && (Re(t, e, l, r), Cr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ie(),
      r = ct(e),
      l = Qe(n, r);
    (l.tag = 2), t != null && (l.callback = t), (t = st(e, l, r)), t !== null && (Re(t, e, r, n), Cr(t, e, r));
  },
};
function Su(e, t, n, r, l, o, i) {
  return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !$n(n, r) || !$n(l, o) : !0;
}
function Pa(e, t, n) {
  var r = !1,
    l = pt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null ? (o = Ne(o)) : ((l = de(t) ? _t : le.current), (r = t.contextTypes), (o = (r = r != null) ? bt(e, l) : pt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = l), (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Eu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function Co(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), di(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? (l.context = Ne(o)) : ((o = de(t) ? _t : le.current), (l.context = bt(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Eo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
      t !== l.state && al.enqueueReplaceState(l, l.state, null),
      Kr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Mc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Hl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function No(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var id = typeof WeakMap == "function" ? WeakMap : Map;
function za(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jr || ((Jr = !0), (Do = r)), No(e, t);
    }),
    n
  );
}
function La(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        No(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        No(e, t), typeof r != "function" && (at === null ? (at = new Set([this])) : at.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
      }),
    n
  );
}
function Cu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new id();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = kd.bind(null, e, t, n)), t.then(e, e));
}
function Nu(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _u(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Qe(-1, 1)), (t.tag = 2), st(n, t, 1))), (n.lanes |= 1)), e);
}
var ud = Ze.ReactCurrentOwner,
  ce = !1;
function oe(e, t, n, r) {
  t.child = e === null ? la(t, null, n, r) : tn(t, e.child, n, r);
}
function Pu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Zt(t, l), (r = gi(e, t, n, r, o, l)), (n = yi()), e !== null && !ce ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Xe(e, t, l)) : (U && n && oi(t), (t.flags |= 1), oe(e, t, r, l), t.child);
}
function zu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !zi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ja(e, t, o, r, l))
      : ((e = jr(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : $n), n(i, r) && e.ref === t.ref)) return Xe(e, t, l);
  }
  return (t.flags |= 1), (e = ft(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function ja(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($n(o, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0)) e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return _o(e, t, n, r, l);
}
function Ta(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), O(Qt, me), (me |= n);
    else {
      if (!(n & 1073741824)) return (e = o !== null ? o.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), O(Qt, me), (me |= e), null;
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = o !== null ? o.baseLanes : n), O(Qt, me), (me |= r);
    }
  else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), O(Qt, me), (me |= r);
  return oe(e, t, l, n), t.child;
}
function Ma(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function _o(e, t, n, r, l) {
  var o = de(n) ? _t : le.current;
  return (o = bt(t, o)), Zt(t, l), (n = gi(e, t, n, r, o, l)), (r = yi()), e !== null && !ce ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Xe(e, t, l)) : (U && r && oi(t), (t.flags |= 1), oe(e, t, n, l), t.child);
}
function Lu(e, t, n, r, l) {
  if (de(n)) {
    var o = !0;
    Vr(t);
  } else o = !1;
  if ((Zt(t, l), t.stateNode === null)) Pr(e, t), Pa(t, n, r), Co(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null ? (c = Ne(c)) : ((c = de(n) ? _t : le.current), (c = bt(t, c)));
    var h = n.getDerivedStateFromProps,
      m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || (typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function") || ((u !== r || s !== c) && Eu(t, i, r, c)), (be = !1);
    var p = t.memoizedState;
    (i.state = p),
      Kr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || p !== s || fe.current || be
        ? (typeof h == "function" && (Eo(t, n, h, r), (s = t.memoizedState)),
          (u = be || Su(t, n, u, r, p, s, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (i = t.stateNode),
      ia(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Le(t.type, u)),
      (i.props = c),
      (m = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null ? (s = Ne(s)) : ((s = de(n) ? _t : le.current), (s = bt(t, s)));
    var w = n.getDerivedStateFromProps;
    (h = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || (typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function") || ((u !== m || p !== s) && Eu(t, i, r, s)),
      (be = !1),
      (p = t.memoizedState),
      (i.state = p),
      Kr(t, r, i, l);
    var k = t.memoizedState;
    u !== m || p !== k || fe.current || be
      ? (typeof w == "function" && (Eo(t, n, w, r), (k = t.memoizedState)),
        (c = be || Su(t, n, c, r, p, k, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" || (u === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" || (u === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (i.props = r),
        (i.state = k),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" || (u === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || (u === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024),
        (r = !1));
  }
  return Po(e, t, n, r, o, l);
}
function Po(e, t, n, r, l, o) {
  Ma(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && mu(t, n, !1), Xe(e, t, o);
  (r = t.stateNode), (ud.current = t);
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (t.flags |= 1), e !== null && i ? ((t.child = tn(t, e.child, null, o)), (t.child = tn(t, null, u, o))) : oe(e, t, u, o), (t.memoizedState = r.state), l && mu(t, n, !0), t.child;
}
function Ra(e) {
  var t = e.stateNode;
  t.pendingContext ? pu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && pu(e, t.context, !1), pi(e, t.containerInfo);
}
function ju(e, t, n, r, l) {
  return en(), ui(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var zo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Oa(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1), O($, l & 1), e === null))
    return (
      xo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = i)) : (o = dl(i, r, 0, null)),
              (e = Nt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Lo(n)),
              (t.memoizedState = zo),
              e)
            : xi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null))) return sd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null)) : ((r = ft(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ft(u, o)) : ((o = Nt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i = i === null ? Lo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = zo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ft(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function xi(e, t) {
  return (t = dl({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function hr(e, t, n, r) {
  return r !== null && ui(r), tn(t, e.child, null, n), (e = xi(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function sd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Hl(Error(g(422)))), hr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = dl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Nt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && tn(t, e.child, null, i),
        (t.child.memoizedState = Lo(i)),
        (t.memoizedState = zo),
        o);
  if (!(t.mode & 1)) return hr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(g(419))), (r = Hl(o, r, void 0)), hr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l), l !== 0 && l !== o.retryLane && ((o.retryLane = l), Ge(e, l), Re(r, e, l, -1));
    }
    return Pi(), (r = Hl(Error(g(421)))), hr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = xd.bind(null, e)), (l._reactRetry = t), null)
    : ((e = o.treeContext),
      (he = ut(l.nextSibling)),
      (ve = t),
      (U = !0),
      (Te = null),
      e !== null && ((ke[xe++] = Be), (ke[xe++] = We), (ke[xe++] = Pt), (Be = e.id), (We = e.overflow), (Pt = t)),
      (t = xi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Tu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), So(e.return, t, n);
}
function Bl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l })
    : ((o.isBackwards = t), (o.rendering = null), (o.renderingStartTime = 0), (o.last = r), (o.tail = n), (o.tailMode = l));
}
function Da(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((oe(e, t, r.children, n), (r = $.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tu(e, n, t);
        else if (e.tag === 19) Tu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((O($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) (e = n.alternate), e !== null && Yr(e) === null && (l = n), (n = n.sibling);
        (n = l), n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)), Bl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Yr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Bl(t, !0, n, null, o);
        break;
      case "together":
        Bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pr(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Lt |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (e = t.child, n = ft(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ad(e, t, n) {
  switch (t.tag) {
    case 3:
      Ra(t), en();
      break;
    case 5:
      ua(t);
      break;
    case 1:
      de(t.type) && Vr(t);
      break;
    case 4:
      pi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      O(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null)) return r.dehydrated !== null ? (O($, $.current & 1), (t.flags |= 128), null) : n & t.child.childLanes ? Oa(e, t, n) : (O($, $.current & 1), (e = Xe(e, t, n)), e !== null ? e.sibling : null);
      O($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Da(e, t, n);
        t.flags |= 128;
      }
      if (((l = t.memoizedState), l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), O($, $.current), r)) break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ta(e, t, n);
  }
  return Xe(e, t, n);
}
var Ia, jo, Fa, Ua;
Ia = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
jo = function () {};
Fa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Et(Ae.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Jl(e, l)), (r = Jl(e, r)), (o = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })), (r = V({}, r, { value: void 0 })), (o = []);
        break;
      case "textarea":
        (l = eo(e, l)), (r = eo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
    }
    no(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Mn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (((u = l != null ? l[c] : void 0), r.hasOwnProperty(c) && s !== u && (s != null || u != null)))
        if (c === "style")
          if (u) {
            for (i in u) !u.hasOwnProperty(i) || (s && s.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ""));
            for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0), (u = u ? u.__html : void 0), s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") || (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Mn.hasOwnProperty(c) ? (s != null && c === "onScroll" && D("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ua = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t) for (var l = e.child; l !== null; ) (n |= l.lanes | l.childLanes), (r |= l.subtreeFlags & 14680064), (r |= l.flags & 14680064), (l.return = e), (l = l.sibling);
  else for (l = e.child; l !== null; ) (n |= l.lanes | l.childLanes), (r |= l.subtreeFlags), (r |= l.flags), (l.return = e), (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function cd(e, t, n) {
  var r = t.pendingProps;
  switch ((ii(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return de(t.type) && Ar(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nn(),
        I(fe),
        I(le),
        hi(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) && (pr(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), Te !== null && (Uo(Te), (Te = null)))),
        jo(e, t),
        ne(t),
        null
      );
    case 5:
      mi(t);
      var l = Et(Wn.current);
      if (((n = t.type), e !== null && t.stateNode != null)) Fa(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return ne(t), null;
        }
        if (((e = Et(Ae.current)), pr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ue] = t), (r[Hn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Sn.length; l++) D(Sn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Ai(r, o), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }), D("invalid", r);
              break;
            case "textarea":
              Hi(r, o), D("invalid", r);
          }
          no(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && dr(r.textContent, u, e), (l = ["children", u]))
                  : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && dr(r.textContent, u, e), (l = ["children", "" + u]))
                : Mn.hasOwnProperty(i) && u != null && i === "onScroll" && D("scroll", r);
            }
          switch (n) {
            case "input":
              lr(r), Vi(r, o, !0);
              break;
            case "textarea":
              lr(r), Bi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = $r);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ds(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)), n === "select" && ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Hn] = r),
            Ia(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ro(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Sn.length; l++) D(Sn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                Ai(e, r), (l = Jl(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (l = V({}, r, { value: void 0 })), D("invalid", e);
                break;
              case "textarea":
                Hi(e, r), (l = eo(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            no(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? hs(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ps(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Rn(e, s)
                    : typeof s == "number" && Rn(e, "" + s)
                  : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Mn.hasOwnProperty(o) ? s != null && o === "onScroll" && D("scroll", e) : s != null && Qo(e, o, s, i));
              }
            switch (n) {
              case "input":
                lr(e), Vi(e, r, !1);
                break;
              case "textarea":
                lr(e), Bi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple), (o = r.value), o != null ? Kt(e, !!r.multiple, o, !1) : r.defaultValue != null && Kt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $r);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Ua(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (((n = Et(Wn.current)), Et(Ae.current), pr(t))) {
          if (((r = t.stateNode), (n = t.memoizedProps), (r[Ue] = t), (o = r.nodeValue !== n) && ((e = ve), e !== null)))
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Ue] = t), (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if ((I($), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (U && he !== null && t.mode & 1 && !(t.flags & 128)) na(), en(), (t.flags |= 98560), (o = !1);
        else if (((o = pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(g(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(g(317));
            o[Ue] = t;
          } else en(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (o = !1);
        } else Te !== null && (Uo(Te), (Te = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null), r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || $.current & 1 ? G === 0 && (G = 3) : Pi())), t.updateQueue !== null && (t.flags |= 4), ne(t), null);
    case 4:
      return nn(), jo(e, t), e === null && An(t.stateNode.containerInfo), ne(t), null;
    case 10:
      return ci(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && Ar(), ne(t), null;
    case 19:
      if ((I($), (o = t.memoizedState), o === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) gn(o, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Yr(e)), i !== null)) {
                for (t.flags |= 128, gn(o, !1), r = i.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0), (o.lanes = e), (o.child = null), (o.subtreeFlags = 0), (o.memoizedProps = null), (o.memoizedState = null), (o.updateQueue = null), (o.dependencies = null), (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return O($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && Q() > ln && ((t.flags |= 128), (r = !0), gn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yr(i)), e !== null)) {
            if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), gn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)) return ne(t), null;
          } else 2 * Q() - o.renderingStartTime > ln && n !== 1073741824 && ((t.flags |= 128), (r = !0), gn(o, !1), (t.lanes = 4194304));
        o.isBackwards ? ((i.sibling = t.child), (t.child = i)) : ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i));
      }
      return o.tail !== null ? ((t = o.tail), (o.rendering = t), (o.tail = t.sibling), (o.renderingStartTime = Q()), (t.sibling = null), (n = $.current), O($, r ? (n & 1) | 2 : n & 1), t) : (ne(t), null);
    case 22:
    case 23:
      return _i(), (r = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192), r && t.mode & 1 ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ne(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function fd(e, t) {
  switch ((ii(t), t.tag)) {
    case 1:
      return de(t.type) && Ar(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return nn(), I(fe), I(le), hi(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return mi(t), null;
    case 13:
      if ((I($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        en();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return I($), null;
    case 4:
      return nn(), null;
    case 10:
      return ci(t.type._context), null;
    case 22:
    case 23:
      return _i(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  re = !1,
  dd = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Wt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function To(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Mu = !1;
function pd(e, t) {
  if (((mo = Ir), (e = Bs()), li(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (var w; m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l), m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (w = m.firstChild) !== null; ) (p = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if ((p === n && ++c === l && (u = i), p === o && ++h === r && (s = i), (w = m.nextSibling) !== null)) break;
              (m = p), (p = m.parentNode);
            }
            m = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ho = { focusedElem: e, selectionRange: n }, Ir = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var x = k.memoizedProps,
                    F = k.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Le(t.type, x), F);
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1 ? (d.textContent = "") : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (v) {
          H(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (k = Mu), (Mu = !1), k;
}
function Ln(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && To(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Mo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $a(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $a(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Ue], delete t[Hn], delete t[yo], delete t[Xf], delete t[Zf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Aa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ru(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Aa(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ro(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = $r));
  else if (r !== 4 && ((e = e.child), e !== null)) for (Ro(e, t, n), e = e.sibling; e !== null; ) Ro(e, t, n), (e = e.sibling);
}
function Oo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null)) for (Oo(e, t, n), e = e.sibling; e !== null; ) Oo(e, t, n), (e = e.sibling);
}
var q = null,
  je = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) Va(e, t, n), (n = n.sibling);
}
function Va(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Wt(n, t);
    case 6:
      var r = q,
        l = je;
      (q = null), Je(e, t, n), (q = r), (je = l), q !== null && (je ? ((e = q), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null && (je ? ((e = q), (n = n.stateNode), e.nodeType === 8 ? Il(e.parentNode, n) : e.nodeType === 1 && Il(e, n), Fn(e)) : Il(q, n.stateNode));
      break;
    case 4:
      (r = q), (l = je), (q = n.stateNode.containerInfo), (je = !0), Je(e, t, n), (q = r), (je = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!re && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag), i !== void 0 && (o & 2 || o & 4) && To(n, t, i), (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (!re && (Wt(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (u) {
          H(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((re = (r = re) || n.memoizedState !== null), Je(e, t, n), (re = r)) : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Ou(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dd()),
      t.forEach(function (r) {
        var l = Sd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (je = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (je = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (je = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(g(160));
        Va(o, i, l), (q = null), (je = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        H(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ha(t, e), (t = t.sibling);
}
function Ha(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Ie(e), r & 4)) {
        try {
          Ln(3, e, e.return), cl(3, e);
        } catch (x) {
          H(e, e.return, x);
        }
        try {
          Ln(5, e, e.return);
        } catch (x) {
          H(e, e.return, x);
        }
      }
      break;
    case 1:
      ze(t, e), Ie(e), r & 512 && n !== null && Wt(n, n.return);
      break;
    case 5:
      if ((ze(t, e), Ie(e), r & 512 && n !== null && Wt(n, n.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (x) {
          H(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && cs(l, o), ro(u, i);
            var c = ro(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                m = s[i + 1];
              h === "style" ? hs(l, m) : h === "dangerouslySetInnerHTML" ? ps(l, m) : h === "children" ? Rn(l, m) : Qo(l, h, m, c);
            }
            switch (u) {
              case "input":
                ql(l, o);
                break;
              case "textarea":
                fs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null ? Kt(l, !!o.multiple, w, !1) : p !== !!o.multiple && (o.defaultValue != null ? Kt(l, !!o.multiple, o.defaultValue, !0) : Kt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Hn] = o;
          } catch (x) {
            H(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Ie(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (x) {
          H(e, e.return, x);
        }
      }
      break;
    case 3:
      if ((ze(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Fn(t.containerInfo);
        } catch (x) {
          H(e, e.return, x);
        }
      break;
    case 4:
      ze(t, e), Ie(e);
      break;
    case 13:
      ze(t, e), Ie(e), (l = e.child), l.flags & 8192 && ((o = l.memoizedState !== null), (l.stateNode.isHidden = o), !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Ci = Q())), r & 4 && Ou(e);
      break;
    case 22:
      if (((h = n !== null && n.memoizedState !== null), e.mode & 1 ? ((re = (c = re) || h), ze(t, e), (re = c)) : ze(t, e), Ie(e), r & 8192)) {
        if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !h && e.mode & 1))
          for (S = e, h = e.child; h !== null; ) {
            for (m = S = h; S !== null; ) {
              switch (((p = S), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ln(4, p, p.return);
                  break;
                case 1:
                  Wt(p, p.return);
                  var k = p.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r), (k.props = t.memoizedProps), (k.state = t.memoizedState), k.componentWillUnmount();
                    } catch (x) {
                      H(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Wt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Iu(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (S = w)) : Iu(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style), typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : (o.display = "none"))
                    : ((u = m.stateNode), (s = m.memoizedProps.style), (i = s != null && s.hasOwnProperty("display") ? s.display : null), (u.style.display = ms("display", i)));
              } catch (x) {
                H(e, e.return, x);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (x) {
                H(e, e.return, x);
              }
          } else if (((m.tag !== 22 && m.tag !== 23) || m.memoizedState === null || m === e) && m.child !== null) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Ie(e), r & 4 && Ou(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Ie(e);
  }
}
function Ie(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Aa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var o = Ru(e);
          Oo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Ru(e);
          Ro(e, u, i);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function md(e, t, n) {
  (S = e), Ba(e);
}
function Ba(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || vr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = vr;
        var c = re;
        if (((vr = i), (re = s) && !c)) for (S = l; S !== null; ) (i = S), (s = i.child), i.tag === 22 && i.memoizedState !== null ? Fu(l) : s !== null ? ((s.return = i), (S = s)) : Fu(l);
        for (; o !== null; ) (S = o), Ba(o), (o = o.sibling);
        (S = l), (vr = u), (re = c);
      }
      Du(e);
    } else l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (S = o)) : Du(e);
  }
}
function Du(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && wu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                wu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Fn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        re || (t.flags & 512 && Mo(t));
      } catch (p) {
        H(t, t.return, p);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Iu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Fu(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            cl(4, t);
          } catch (s) {
            H(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(t, l, s);
            }
          }
          var o = t.return;
          try {
            Mo(t);
          } catch (s) {
            H(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Mo(t);
          } catch (s) {
            H(t, i, s);
          }
      }
    } catch (s) {
      H(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (S = u);
      break;
    }
    S = t.return;
  }
}
var hd = Math.ceil,
  Zr = Ze.ReactCurrentDispatcher,
  Si = Ze.ReactCurrentOwner,
  Ce = Ze.ReactCurrentBatchConfig,
  M = 0,
  J = null,
  K = null,
  b = 0,
  me = 0,
  Qt = ht(0),
  G = 0,
  Gn = null,
  Lt = 0,
  fl = 0,
  Ei = 0,
  jn = null,
  ae = null,
  Ci = 0,
  ln = 1 / 0,
  Ve = null,
  Jr = !1,
  Do = null,
  at = null,
  gr = !1,
  rt = null,
  qr = 0,
  Tn = 0,
  Io = null,
  zr = -1,
  Lr = 0;
function ie() {
  return M & 6 ? Q() : zr !== -1 ? zr : (zr = Q());
}
function ct(e) {
  return e.mode & 1 ? (M & 2 && b !== 0 ? b & -b : qf.transition !== null ? (Lr === 0 && (Lr = Ps()), Lr) : ((e = R), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Os(e.type))), e)) : 1;
}
function Re(e, t, n, r) {
  if (50 < Tn) throw ((Tn = 0), (Io = null), Error(g(185)));
  Zn(e, n, r), (!(M & 2) || e !== J) && (e === J && (!(M & 2) && (fl |= n), G === 4 && tt(e, b)), pe(e, r), n === 1 && M === 0 && !(t.mode & 1) && ((ln = Q() + 500), ul && vt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  Jc(e, t);
  var r = Dr(e, e === J ? b : 0);
  if (r === 0) n !== null && Ki(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ki(n), t === 1))
      e.tag === 0 ? Jf(Uu.bind(null, e)) : bs(Uu.bind(null, e)),
        Yf(function () {
          !(M & 6) && vt();
        }),
        (n = null);
    else {
      switch (zs(r)) {
        case 1:
          n = Zo;
          break;
        case 4:
          n = Ns;
          break;
        case 16:
          n = Or;
          break;
        case 536870912:
          n = _s;
          break;
        default:
          n = Or;
      }
      n = Ja(n, Wa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Wa(e, t) {
  if (((zr = -1), (Lr = 0), M & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (Jt() && e.callbackNode !== n) return null;
  var r = Dr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var o = Ka();
    (J !== e || b !== t) && ((Ve = null), (ln = Q() + 500), Ct(e, t));
    do
      try {
        yd();
        break;
      } catch (u) {
        Qa(e, u);
      }
    while (!0);
    ai(), (Zr.current = o), (M = l), K !== null ? (t = 0) : ((J = null), (b = 0), (t = G));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = so(e)), l !== 0 && ((r = l), (t = Fo(e, l)))), t === 1)) throw ((n = Gn), Ct(e, 0), tt(e, r), pe(e, Q()), n);
    if (t === 6) tt(e, r);
    else {
      if (((l = e.current.alternate), !(r & 30) && !vd(l) && ((t = br(e, r)), t === 2 && ((o = so(e)), o !== 0 && ((r = o), (t = Fo(e, o)))), t === 1))) throw ((n = Gn), Ct(e, 0), tt(e, r), pe(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          kt(e, ae, Ve);
          break;
        case 3:
          if ((tt(e, r), (r & 130023424) === r && ((t = Ci + 500 - Q()), 10 < t))) {
            if (Dr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ie(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = go(kt.bind(null, e, ae, Ve), t);
            break;
          }
          kt(e, ae, Ve);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Me(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (((r = l), (r = Q() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * hd(r / 1960)) - r), 10 < r)) {
            e.timeoutHandle = go(kt.bind(null, e, ae, Ve), r);
            break;
          }
          kt(e, ae, Ve);
          break;
        case 5:
          kt(e, ae, Ve);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Wa.bind(null, e) : null;
}
function Fo(e, t) {
  var n = jn;
  return e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256), (e = br(e, t)), e !== 2 && ((t = ae), (ae = n), t !== null && Uo(t)), e;
}
function Uo(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function vd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Oe(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (t &= ~Ei, t &= ~fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Me(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Uu(e) {
  if (M & 6) throw Error(g(327));
  Jt();
  var t = Dr(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = br(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = so(e);
    r !== 0 && ((t = r), (n = Fo(e, r)));
  }
  if (n === 1) throw ((n = Gn), Ct(e, 0), tt(e, t), pe(e, Q()), n);
  if (n === 6) throw Error(g(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), kt(e, ae, Ve), pe(e, Q()), null;
}
function Ni(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((ln = Q() + 500), ul && vt());
  }
}
function jt(e) {
  rt !== null && rt.tag === 0 && !(M & 6) && Jt();
  var t = M;
  M |= 1;
  var n = Ce.transition,
    r = R;
  try {
    if (((Ce.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (Ce.transition = n), (M = t), !(M & 6) && vt();
  }
}
function _i() {
  (me = Qt.current), I(Qt);
}
function Ct(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Kf(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((ii(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ar();
          break;
        case 3:
          nn(), I(fe), I(le), hi();
          break;
        case 5:
          mi(r);
          break;
        case 4:
          nn();
          break;
        case 13:
          I($);
          break;
        case 19:
          I($);
          break;
        case 10:
          ci(r.type._context);
          break;
        case 22:
        case 23:
          _i();
      }
      n = n.return;
    }
  if (((J = e), (K = e = ft(e.current, null)), (b = me = t), (G = 0), (Gn = null), (Ei = fl = Lt = 0), (ae = jn = null), St !== null)) {
    for (t = 0; t < St.length; t++)
      if (((n = St[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    St = null;
  }
  return e;
}
function Qa(e, t) {
  do {
    var n = K;
    try {
      if ((ai(), (Nr.current = Xr), Gr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Gr = !1;
      }
      if (((zt = 0), (Z = Y = A = null), (zn = !1), (Qn = 0), (Si.current = null), n === null || n.return === null)) {
        (G = 1), (Gn = t), (K = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (((t = b), (u.flags |= 32768), s !== null && typeof s == "object" && typeof s.then == "function")) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? ((h.updateQueue = p.updateQueue), (h.memoizedState = p.memoizedState), (h.lanes = p.lanes)) : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = Nu(i);
          if (w !== null) {
            (w.flags &= -257), _u(w, i, u, o, t), w.mode & 1 && Cu(o, c, t), (t = w), (s = c);
            var k = t.updateQueue;
            if (k === null) {
              var x = new Set();
              x.add(s), (t.updateQueue = x);
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Cu(o, c, t), Pi();
              break e;
            }
            s = Error(g(426));
          }
        } else if (U && u.mode & 1) {
          var F = Nu(i);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), _u(F, i, u, o, t), ui(rn(s, u));
            break e;
          }
        }
        (o = s = rn(s, u)), G !== 4 && (G = 2), jn === null ? (jn = [o]) : jn.push(o), (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = za(o, s, t);
              yu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || (d !== null && typeof d.componentDidCatch == "function" && (at === null || !at.has(d))))) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = La(o, u, t);
                yu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ga(n);
    } catch (E) {
      (t = E), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ka() {
  var e = Zr.current;
  return (Zr.current = Xr), e === null ? Xr : e;
}
function Pi() {
  (G === 0 || G === 3 || G === 2) && (G = 4), J === null || (!(Lt & 268435455) && !(fl & 268435455)) || tt(J, b);
}
function br(e, t) {
  var n = M;
  M |= 2;
  var r = Ka();
  (J !== e || b !== t) && ((Ve = null), Ct(e, t));
  do
    try {
      gd();
      break;
    } catch (l) {
      Qa(e, l);
    }
  while (!0);
  if ((ai(), (M = n), (Zr.current = r), K !== null)) throw Error(g(261));
  return (J = null), (b = 0), G;
}
function gd() {
  for (; K !== null; ) Ya(K);
}
function yd() {
  for (; K !== null && !Hc(); ) Ya(K);
}
function Ya(e) {
  var t = Za(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps), t === null ? Ga(e) : (K = t), (Si.current = null);
}
function Ga(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = fd(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (K = null);
        return;
      }
    } else if (((n = cd(n, t, me)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function kt(e, t, n) {
  var r = R,
    l = Ce.transition;
  try {
    (Ce.transition = null), (R = 1), wd(e, t, n, r);
  } finally {
    (Ce.transition = l), (R = r);
  }
  return null;
}
function wd(e, t, n, r) {
  do Jt();
  while (rt !== null);
  if (M & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (qc(e, o),
    e === J && ((K = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gr ||
      ((gr = !0),
      Ja(Or, function () {
        return Jt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ce.transition), (Ce.transition = null);
    var i = R;
    R = 1;
    var u = M;
    (M |= 4), (Si.current = null), pd(e, n), Ha(n, e), $f(ho), (Ir = !!mo), (ho = mo = null), (e.current = n), md(n), Bc(), (M = u), (R = i), (Ce.transition = o);
  } else e.current = n;
  if ((gr && ((gr = !1), (rt = e), (qr = l)), (o = e.pendingLanes), o === 0 && (at = null), Kc(n.stateNode), pe(e, Q()), t !== null))
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw ((Jr = !1), (e = Do), (Do = null), e);
  return qr & 1 && e.tag !== 0 && Jt(), (o = e.pendingLanes), o & 1 ? (e === Io ? Tn++ : ((Tn = 0), (Io = e))) : (Tn = 0), vt(), null;
}
function Jt() {
  if (rt !== null) {
    var e = zs(qr),
      t = Ce.transition,
      n = R;
    try {
      if (((Ce.transition = null), (R = 16 > e ? 16 : e), rt === null)) var r = !1;
      else {
        if (((e = rt), (rt = null), (qr = 0), M & 6)) throw Error(g(331));
        var l = M;
        for (M |= 4, S = e.current; S !== null; ) {
          var o = S,
            i = o.child;
          if (S.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ln(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (S = m);
                  else
                    for (; S !== null; ) {
                      h = S;
                      var p = h.sibling,
                        w = h.return;
                      if (($a(h), h === c)) {
                        S = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (S = p);
                        break;
                      }
                      S = w;
                    }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var x = k.child;
                if (x !== null) {
                  k.child = null;
                  do {
                    var F = x.sibling;
                    (x.sibling = null), (x = F);
                  } while (x !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (S = i);
          else
            e: for (; S !== null; ) {
              if (((o = S), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ln(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (S = f);
                break e;
              }
              S = o.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          i = S;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (S = d);
          else
            e: for (i = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cl(9, u);
                  }
                } catch (E) {
                  H(u, u.return, E);
                }
              if (u === i) {
                S = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (S = v);
                break e;
              }
              S = u.return;
            }
        }
        if (((M = l), vt(), $e && typeof $e.onPostCommitFiberRoot == "function"))
          try {
            $e.onPostCommitFiberRoot(nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (Ce.transition = t);
    }
  }
  return !1;
}
function $u(e, t, n) {
  (t = rn(n, t)), (t = za(e, t, 1)), (e = st(e, t, 1)), (t = ie()), e !== null && (Zn(e, 1, t), pe(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) $u(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $u(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (at === null || !at.has(r)))) {
          (e = rn(n, e)), (e = La(t, e, 1)), (t = st(t, e, 1)), (e = ie()), t !== null && (Zn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function kd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), (t = ie()), (e.pingedLanes |= e.suspendedLanes & n), J === e && (b & n) === n && (G === 4 || (G === 3 && (b & 130023424) === b && 500 > Q() - Ci) ? Ct(e, 0) : (Ei |= n)), pe(e, t);
}
function Xa(e, t) {
  t === 0 && (e.mode & 1 ? ((t = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304)) : (t = 1));
  var n = ie();
  (e = Ge(e, t)), e !== null && (Zn(e, t, n), pe(e, n));
}
function xd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Xa(e, n);
}
function Sd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), Xa(e, n);
}
var Za;
Za = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), ad(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), U && t.flags & 1048576 && ea(t, Br, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pr(e, t), (e = t.pendingProps);
      var l = bt(t, le.current);
      Zt(t, n), (l = gi(null, t, r, e, l, n));
      var o = yi();
      return (
        (t.flags |= 1),
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            de(r) ? ((o = !0), Vr(t)) : (o = !1),
            (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
            di(t),
            (l.updater = al),
            (t.stateNode = l),
            (l._reactInternals = t),
            Co(t, r, e, n),
            (t = Po(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && oi(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch ((Pr(e, t), (e = t.pendingProps), (l = r._init), (r = l(r._payload)), (t.type = r), (l = t.tag = Cd(r)), (e = Le(r, e)), l)) {
          case 0:
            t = _o(null, t, r, e, n);
            break e;
          case 1:
            t = Lu(null, t, r, e, n);
            break e;
          case 11:
            t = Pu(null, t, r, e, n);
            break e;
          case 14:
            t = zu(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Le(r, l)), _o(e, t, r, l, n);
    case 1:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Le(r, l)), Lu(e, t, r, l, n);
    case 3:
      e: {
        if ((Ra(t), e === null)) throw Error(g(387));
        (r = t.pendingProps), (o = t.memoizedState), (l = o.element), ia(e, t), Kr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (((o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }), (t.updateQueue.baseState = o), (t.memoizedState = o), t.flags & 256)) {
            (l = rn(Error(g(423)), t)), (t = ju(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rn(Error(g(424)), t)), (t = ju(e, t, r, n, l));
            break e;
          } else for (he = ut(t.stateNode.containerInfo.firstChild), ve = t, U = !0, Te = null, n = la(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((en(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ua(t), e === null && xo(t), (r = t.type), (l = t.pendingProps), (o = e !== null ? e.memoizedProps : null), (i = l.children), vo(r, l) ? (i = null) : o !== null && vo(r, o) && (t.flags |= 32), Ma(e, t), oe(e, t, i, n), t.child;
    case 6:
      return e === null && xo(t), null;
    case 13:
      return Oa(e, t, n);
    case 4:
      return pi(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = tn(t, null, r, n)) : oe(e, t, r, n), t.child;
    case 11:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Le(r, l)), Pu(e, t, r, l, n);
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (((r = t.type._context), (l = t.pendingProps), (o = t.memoizedProps), (i = l.value), O(Wr, r._currentValue), (r._currentValue = i), o !== null))
          if (Oe(o.value, i)) {
            if (o.children === l.children && !fe.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null ? (s.next = s) : ((s.next = h.next), (h.next = s)), (c.pending = s);
                      }
                    }
                    (o.lanes |= n), (s = o.alternate), s !== null && (s.lanes |= n), So(o.return, n, t), (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(g(341));
                (i.lanes |= n), (u = i.alternate), u !== null && (u.lanes |= n), So(i, n, t), (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (l = t.type), (r = t.pendingProps.children), Zt(t, n), (l = Ne(l)), (r = r(l)), (t.flags |= 1), oe(e, t, r, n), t.child;
    case 14:
      return (r = t.type), (l = Le(r, t.pendingProps)), (l = Le(r.type, l)), zu(e, t, r, l, n);
    case 15:
      return ja(e, t, t.type, t.pendingProps, n);
    case 17:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Le(r, l)), Pr(e, t), (t.tag = 1), de(r) ? ((e = !0), Vr(t)) : (e = !1), Zt(t, n), Pa(t, r, l), Co(t, r, l, n), Po(null, t, r, !0, e, n);
    case 19:
      return Da(e, t, n);
    case 22:
      return Ta(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function Ja(e, t) {
  return Cs(e, t);
}
function Ed(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new Ed(e, t, n, r);
}
function zi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Cd(e) {
  if (typeof e == "function") return zi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yo)) return 11;
    if (e === Go) return 14;
  }
  return 2;
}
function ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function jr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) zi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Dt:
        return Nt(n.children, l, o, t);
      case Ko:
        (i = 8), (l |= 8);
        break;
      case Yl:
        return (e = Ee(12, n, t, l | 2)), (e.elementType = Yl), (e.lanes = o), e;
      case Gl:
        return (e = Ee(13, n, t, l)), (e.elementType = Gl), (e.lanes = o), e;
      case Xl:
        return (e = Ee(19, n, t, l)), (e.elementType = Xl), (e.lanes = o), e;
      case us:
        return dl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case os:
              i = 10;
              break e;
            case is:
              i = 9;
              break e;
            case Yo:
              i = 11;
              break e;
            case Go:
              i = 14;
              break e;
            case qe:
              (i = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (t = Ee(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function Nt(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function dl(e, t, n, r) {
  return (e = Ee(22, e, r, t)), (e.elementType = us), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Wl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function Ql(e, t, n) {
  return (t = Ee(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function Nd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Li(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Nd(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ee(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
    di(o),
    e
  );
}
function _d(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ot, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function qa(e) {
  if (!e) return pt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return qs(e, n, t);
  }
  return t;
}
function ba(e, t, n, r, l, o, i, u, s) {
  return (e = Li(n, r, !0, e, l, o, i, u, s)), (e.context = qa(null)), (n = e.current), (r = ie()), (l = ct(n)), (o = Qe(r, l)), (o.callback = t ?? null), st(n, o, l), (e.current.lanes = l), Zn(e, l, r), pe(e, r), e;
}
function pl(e, t, n, r) {
  var l = t.current,
    o = ie(),
    i = ct(l);
  return (
    (n = qa(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = st(l, t, i)),
    e !== null && (Re(e, l, i, o), Cr(e, l, i)),
    i
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Au(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ji(e, t) {
  Au(e, t), (e = e.alternate) && Au(e, t);
}
function Pd() {
  return null;
}
var ec =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ti(e) {
  this._internalRoot = e;
}
ml.prototype.render = Ti.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  pl(e, t, null, null);
};
ml.prototype.unmount = Ti.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jt(function () {
      pl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ts();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && Rs(e);
  }
};
function Mi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function Vu() {}
function zd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = el(i);
        o.call(c);
      };
    }
    var i = ba(t, r, e, 0, null, !1, !1, "", Vu);
    return (e._reactRootContainer = i), (e[Ye] = i.current), An(e.nodeType === 8 ? e.parentNode : e), jt(), i;
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = el(s);
      u.call(c);
    };
  }
  var s = Li(e, 0, !1, null, null, !1, !1, "", Vu);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    jt(function () {
      pl(t, s, n, r);
    }),
    s
  );
}
function vl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = el(i);
        u.call(s);
      };
    }
    pl(t, i, e, l);
  } else i = zd(n, t, e, l, r);
  return el(i);
}
Ls = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes);
        n !== 0 && (Jo(t, n | 1), pe(t, Q()), !(M & 6) && ((ln = Q() + 500), vt()));
      }
      break;
    case 13:
      jt(function () {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ie();
          Re(r, e, 1, l);
        }
      }),
        ji(e, 1);
  }
};
qo = function (e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = ie();
      Re(t, e, 134217728, n);
    }
    ji(e, 134217728);
  }
};
js = function (e) {
  if (e.tag === 13) {
    var t = ct(e),
      n = Ge(e, t);
    if (n !== null) {
      var r = ie();
      Re(n, e, t, r);
    }
    ji(e, t);
  }
};
Ts = function () {
  return R;
};
Ms = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
oo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l) throw Error(g(90));
            as(r), ql(r, l);
          }
        }
      }
      break;
    case "textarea":
      fs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kt(e, !!n.multiple, t, !1);
  }
};
ys = Ni;
ws = jt;
var Ld = { usingClientEntryPoint: !1, Events: [qn, $t, il, vs, gs, Ni] },
  yn = { findFiberByHostInstance: xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
  jd = {
    bundleType: yn.bundleType,
    version: yn.version,
    rendererPackageName: yn.rendererPackageName,
    rendererConfig: yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ss(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yn.findFiberByHostInstance || Pd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber)
    try {
      (nl = yr.inject(jd)), ($e = yr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld;
ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mi(t)) throw Error(g(200));
  return _d(e, t, null, n);
};
ye.createRoot = function (e, t) {
  if (!Mi(e)) throw Error(g(299));
  var n = !1,
    r = "",
    l = ec;
  return (
    t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Li(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    new Ti(t)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(g(188)) : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = Ss(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return jt(e);
};
ye.hydrate = function (e, t, n) {
  if (!hl(t)) throw Error(g(200));
  return vl(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
  if (!Mi(e)) throw Error(g(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = ec;
  if (
    (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = ba(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ye] = t.current),
    An(e),
    r)
  )
    for (e = 0; e < r.length; e++) (n = r[e]), (l = n._getVersion), (l = l(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, l]) : t.mutableSourceEagerHydrationData.push(n, l);
  return new ml(t);
};
ye.render = function (e, t, n) {
  if (!hl(t)) throw Error(g(200));
  return vl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (jt(function () {
        vl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = Ni;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return vl(e, t, n, !1, r);
};
ye.version = "18.3.1-next-f1338f8080-20240426";
function tc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc);
    } catch (e) {
      console.error(e);
    }
}
tc(), (ts.exports = ye);
var Td = ts.exports,
  nc,
  Hu = Td;
(nc = Hu.createRoot), Hu.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Md = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rd = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  De = (e, t) => {
    const n = Se.forwardRef(({ color: r = "currentColor", size: l = 24, strokeWidth: o = 2, absoluteStrokeWidth: i, className: u = "", children: s, ...c }, h) =>
      Se.createElement("svg", { ref: h, ...Md, width: l, height: l, stroke: r, strokeWidth: i ? (Number(o) * 24) / Number(l) : o, className: ["lucide", `lucide-${Rd(e)}`, u].join(" "), ...c }, [
        ...t.map(([m, p]) => Se.createElement(m, p)),
        ...(Array.isArray(s) ? s : [s]),
      ])
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Od = De("Book", [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dd = De("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Id = De("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rc = De("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fd = De("Linkedin", [
  ["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", key: "c2jq9f" }],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ud = De("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $d = De("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ad = De("MoveRight", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vd = De("Sparkles", [
  ["path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z", key: "17u4zn" }],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hd = De("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bd = De("Document", [
  [
    "path",
    {
      d: "M6 2C5.4 2 5 2.4 5 3v18c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V8l-5-6H6zm7 7V3.5L18.5 9H13zm-5 4h8v2H8v-2zm0 4h8v2H8v-2z",
      key: "documentIcon",
    },
  ],
]);
function Wd() {
  const [e, t] = Se.useState(!1);
  Se.useEffect(() => {
    typeof window < "u" &&
      (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? (t(!0), document.documentElement.classList.add("dark"))
        : (t(!1), document.documentElement.classList.remove("dark")));
  }, []);
  const n = () => {
    e ? ((localStorage.theme = "light"), document.documentElement.classList.remove("dark"), t(!1)) : ((localStorage.theme = "dark"), document.documentElement.classList.add("dark"), t(!0));
  };
  return y.jsx("button", {
    onClick: n,
    className: "p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
    "aria-label": "Toggle theme",
    children: e ? y.jsx(Hd, { className: "w-5 h-5" }) : y.jsx($d, { className: "w-5 h-5" }),
  });
}
function Bu({ title: e, description: t, image: n, technologies: r, liveUrl: l, githubUrl: o }) {
  return y.jsxs("div", {
    className: "group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800",
    children: [
      y.jsx("img", { src: n, alt: e, className: "w-full h-[300px] object-cover transition-transform group-hover:scale-105" }),
      y.jsxs("div", {
        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6",
        children: [
          y.jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: e }),
          y.jsx("p", { className: "text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity", children: t }),
          y.jsx("p", { className: "text-gray-300 mb-4", children: r }),
          y.jsxs("div", {
            className: "flex gap-4",
            children: [
              y.jsxs("a", {
                href: l,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors",
                children: [y.jsx(Id, { className: "w-4 h-4" }), "Live Demo"],
              }),
              y.jsxs("a", {
                href: o,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors",
                children: [y.jsx(rc, { className: "w-4 h-4" }), "Code"],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Qd(e, t = 150, n = 100, r = 2e3) {
  const [l, o] = Se.useState(""),
    [i, u] = Se.useState(0),
    [s, c] = Se.useState(!1);
  return (
    Se.useEffect(() => {
      const h = setTimeout(
        () => {
          const m = e[i];
          s ? (o(m.substring(0, l.length - 1)), l.length === 0 && (c(!1), u((p) => (p + 1) % e.length))) : (o(m.substring(0, l.length + 1)), l.length === m.length && setTimeout(() => c(!0), r));
        },
        s ? n : t
      );
      return () => clearTimeout(h);
    }, [l, i, s, e, t, n, r]),
    l
  );
}
const Kd = ["Hello", "Olá", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요", "你好", "Hej", "Γεια σας"];
function Yd() {
  const e = Qd(Kd, 150, 100, 2e3);
  return y.jsxs("span", { className: "text-3xl text-teal-600 dark:text-teal-400 font-medium", children: [e, y.jsx("span", { className: "animate-pulse", children: "|" })] });
}
function Gd() {
  return y.jsxs("div", {
    className: "min-h-screen bg-white dark:bg-gray-900 transition-colors",
    children: [
      y.jsx("div", { className: "fixed top-4 right-4 z-50", children: y.jsx(Wd, {}) }),
      y.jsxs("header", {
        className: "min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8",
        children: [
          y.jsx("div", { className: "absolute inset-0 bg-[url(/images/background.jpg)] bg-cover bg-center opacity-40 dark:opacity-10" }),
          y.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-teal-500/30 via-transparent to-purple-500/30 backdrop-blur-[2px] animate-gradient" }),
          y.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-white/80 via-transparent to-white/80 dark:from-transparent dark:to-transparent" }),
          y.jsx("div", {
            className: "max-w-7xl mx-auto relative z-10",
            children: y.jsxs("div", {
              className: "max-w-3xl space-y-8",
              children: [
                y.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    y.jsxs("div", { className: "flex items-center gap-2 text-teal-600 dark:text-teal-400", children: [y.jsx(Vd, { className: "w-5 h-5" }), y.jsx(Yd, {})] }),
                    y.jsxs("h1", {
                      className: "text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white space-y-2",
                      children: [
                        y.jsx("span", { className: "block", children: "my name is" }),
                        y.jsx("span", { className: "block text-transparent capitalize bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400", children: "Rifky Andigta Al-Fathir" }),
                      ],
                    }),
                    y.jsxs("p", {
                      className: "text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mt-6",
                      children: ["I'm a front-end developer based in the beautiful city of", y.jsxs("span", { className: "text-teal-600 dark:text-teal-400 font-medium", children: [" ", "Yogyakarta, Indonesia"] }), "."],
                    }),
                  ],
                }),
                y.jsxs("div", {
                  className: "flex flex-wrap gap-4",
                  children: [
                    y.jsxs("a", {
                      href: "#contact",
                      className: "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl",
                      children: ["Get in touch ", y.jsx(Ad, { className: "w-4 h-4" })],
                    }),
                    y.jsx("a", {
                      href: "#projects",
                      className:
                        "inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 dark:text-white",
                      children: "View projects",
                    }),
                  ],
                }),
                y.jsxs("div", {
                  className: "flex gap-6 text-gray-600 dark:text-gray-400",
                  children: [
                    y.jsxs("div", { className: "flex items-center gap-2", children: [y.jsx(Dd, { className: "w-5 h-5 text-teal-600 dark:text-teal-400" }), y.jsx("span", { children: "Software Engineer" })] }),
                    y.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [y.jsx(Od, { className: "w-5 h-5 text-purple-600 dark:text-purple-400" }), y.jsx("span", { children: y.jsx("a", { target: "_blank", children: "Hardware Engineer" }) })],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      y.jsx("section", {
        id: "about",
        className: "py-16 bg-gray-50 dark:bg-gray-800 transition-colors",
        children: y.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            y.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-12", children: "About Me" }),
            y.jsxs("div", {
              className: "flex flex-col md:flex-row gap-12 items-center",
              children: [
                y.jsx("div", { className: "w-90 h-80 rounded", children: y.jsx("img", { src: "/images/mm_info.jpg", alt: "rifky andigta al-fathir", className: "w-full h-full object-cover" }) }),
                y.jsxs("div", {
                  className: "flex-1 space-y-4 text-center md:text-left",
                  children: [
                    y.jsx("p", {
                      className: "text-lg text-gray-600 dark:text-gray-300 leading-relaxed",
                      children:
                        "A motivated Electrical Engineering Education student with a robust foundation in robotics, specializing in humanoid robot development and programming for soccer competitions. With over three years of experience at Universitas Negeri Yogyakarta, I have led my team to 2nd place in the 2024 and 3rd place in the 2023 KRSBI-Humanoid national competitions as Programming Coordinator",
                    }),
                    y.jsxs("p", {
                      className: "text-lg text-gray-600 dark:text-gray-300 leading-relaxed",
                      children: [
                        "Recognized for innovation, I’ve also received funding in the Student Creativity Program and National Student Scientific Week. My expertise spans microcontroller programming, digital logic design, control systems, and power electronics, driving my commitment to advancing electrical engineering education.",
                        y.jsx("br", {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      y.jsx("section", {
        id: "projects",
        className: "py-16 dark:bg-gray-900",
        children: y.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            y.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-12", children: "Featured Projects" }),
            y.jsxs("div", {
              className: "grid md:grid-cols-2 gap-8",
              children: [
                y.jsx(Bu, {
                  title: "My-Lestari",
                  description: "Responsive personal/portfolio website. The source code is available at both Codepen and Github and has been used by over 300 people.",
                  image: "/images/my-lestari.png",
                  technologies: "Javascript, jQuery, HTML, CSS",
                  liveUrl: "https://marinamarques.netlify.app/",
                  githubUrl: "https://github.com/shvvffle/marinamarques.pt",
                }),
                y.jsx(Bu, {
                  title: "Are You Feeling Low?",
                  description: `For those rough days - a compliment per click.
Landing page with a compliment generator.`,
                  image: "/images/work-areyoufeelinglow.png",
                  technologies: "Javascript, jQuery, HTML, CSS",
                  liveUrl: "https://shvvffle.github.io/areyoufeelinglow/",
                  githubUrl: "https://github.com/shvvffle/areyoufeelinglow",
                }),
                y.jsx(Bu, {
                  title: "Personal Website",
                  description: "Responsive personal/portfolio website. The source code is available at both Codepen and Github and has been used by over 300 people.",
                  image: "/images/work-personalWebsite.png",
                  technologies: "Javascript, jQuery, HTML, CSS",
                  liveUrl: "https://marinamarques.netlify.app/",
                  githubUrl: "https://github.com/shvvffle/marinamarques.pt",
                }),
              ],
            }),
          ],
        }),
      }),
      y.jsx("section", {
        id: "contact",
        className: "py-16 bg-gray-50 dark:bg-gray-800 transition-colors",
        children: y.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            y.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-12", children: "Get in Touch" }),
            y.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-6 justify-center",
              children: [
                y.jsxs("a", {
                  href: "digtaalfathir36@gmail.com",
                  className: "inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-white",
                  children: [y.jsx(Ud, { className: "w-5 h-5" }), "digtaalfathir36@gmail.com"],
                }),
                y.jsxs("a", {
                  href: "https://github.com/digtaalfathir",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-white",
                  children: [y.jsx(rc, { className: "w-5 h-5" }), "GitHub"],
                }),
                y.jsxs("a", {
                  href: "https://pt.linkedin.com/in/rifky-andigta-alfathir-5b2228159/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-white",
                  children: [y.jsx(Fd, { className: "w-5 h-5" }), "LinkedIn"],
                }),
                y.jsxs("a", {
                  href: "https://digtaalfathir.github.io/webcv/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-white",
                  children: [y.jsx(Bd, { className: "w-5 h-5" }), "CV"],
                }),
              ],
            }),
          ],
        }),
      }),
      y.jsx("footer", {
        className: "py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800",
        children: y.jsxs("p", { children: ["© ", new Date().getFullYear(), " Rifky Andigta Al-Fathir. All rights reserved."] }),
      }),
    ],
  });
}
nc(document.getElementById("root")).render(y.jsx(Se.StrictMode, { children: y.jsx(Gd, {}) }));
