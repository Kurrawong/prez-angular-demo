import {
  __async,
  __asyncGenerator,
  __await,
  __forAwait,
  __spreadProps,
  __spreadValues,
  __yieldStar
} from "./chunk-5LSHCRNN.js";

// node_modules/prez-lib/dist/prez-lib.js
var Qs = Object.defineProperty;
var Vs = (t, e, r) => e in t ? Qs(t, e, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: r
}) : t[e] = r;
var Ze = (t, e, r) => Vs(t, typeof e != "symbol" ? e + "" : e, r);
function Mu(t) {
  return t.value !== void 0;
}
function Ks(t) {
  const e = {
    value: typeof t == "string" ? t : t.value,
    termType: "NamedNode",
    equals: (r) => !!r && e.termType === r.termType && e.value === r.value
  };
  return typeof t != "string" && Object.assign(e, t), e;
}
function Ln(t) {
  const e = {
    value: typeof t == "string" ? t : t.value,
    termType: "Literal",
    equals: (r) => r && e.termType === r.termType && e.value === r.value ? e.language !== r.language ? false : e.datatype === r.datatype : false
  };
  return typeof t != "string" && Object.assign(e, t), e;
}
function $n(t) {
  const e = {
    value: typeof t == "string" ? t : t.value,
    properties: {},
    termType: "BlankNode",
    equals: (r) => !!r && e.termType === r.termType && e.value === r.value && e.properties === r.properties
  };
  return typeof t != "string" && Object.assign(e, t), e;
}
var De = {};
var or = {};
or.byteLength = Zs;
or.toByteArray = eo;
or.fromByteArray = no;
var Ce = [];
var Ne = [];
var Ys = typeof Uint8Array < "u" ? Uint8Array : Array;
var Ir = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (bt = 0, Xs = Ir.length; bt < Xs; ++bt) Ce[bt] = Ir[bt], Ne[Ir.charCodeAt(bt)] = bt;
var bt;
var Xs;
Ne[45] = 62;
Ne[95] = 63;
function ji(t) {
  var e = t.length;
  if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  r === -1 && (r = e);
  var n = r === e ? 0 : 4 - r % 4;
  return [r, n];
}
function Zs(t) {
  var e = ji(t), r = e[0], n = e[1];
  return (r + n) * 3 / 4 - n;
}
function Js(t, e, r) {
  return (e + r) * 3 / 4 - r;
}
function eo(t) {
  var e, r = ji(t), n = r[0], i = r[1], a = new Ys(Js(t, n, i)), l = 0, u = i > 0 ? n - 4 : n, p;
  for (p = 0; p < u; p += 4) e = Ne[t.charCodeAt(p)] << 18 | Ne[t.charCodeAt(p + 1)] << 12 | Ne[t.charCodeAt(p + 2)] << 6 | Ne[t.charCodeAt(p + 3)], a[l++] = e >> 16 & 255, a[l++] = e >> 8 & 255, a[l++] = e & 255;
  return i === 2 && (e = Ne[t.charCodeAt(p)] << 2 | Ne[t.charCodeAt(p + 1)] >> 4, a[l++] = e & 255), i === 1 && (e = Ne[t.charCodeAt(p)] << 10 | Ne[t.charCodeAt(p + 1)] << 4 | Ne[t.charCodeAt(p + 2)] >> 2, a[l++] = e >> 8 & 255, a[l++] = e & 255), a;
}
function to(t) {
  return Ce[t >> 18 & 63] + Ce[t >> 12 & 63] + Ce[t >> 6 & 63] + Ce[t & 63];
}
function ro(t, e, r) {
  for (var n, i = [], a = e; a < r; a += 3) n = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (t[a + 2] & 255), i.push(to(n));
  return i.join("");
}
function no(t) {
  for (var e, r = t.length, n = r % 3, i = [], a = 16383, l = 0, u = r - n; l < u; l += a) i.push(ro(t, l, l + a > u ? u : l + a));
  return n === 1 ? (e = t[r - 1], i.push(Ce[e >> 2] + Ce[e << 4 & 63] + "==")) : n === 2 && (e = (t[r - 2] << 8) + t[r - 1], i.push(Ce[e >> 10] + Ce[e >> 4 & 63] + Ce[e << 2 & 63] + "=")), i.join("");
}
var ln = {};
ln.read = function(t, e, r, n, i) {
  var a, l, u = i * 8 - n - 1, p = (1 << u) - 1, _ = p >> 1, y = -7, x = r ? i - 1 : 0, I = r ? -1 : 1, S = t[e + x];
  for (x += I, a = S & (1 << -y) - 1, S >>= -y, y += u; y > 0; a = a * 256 + t[e + x], x += I, y -= 8) ;
  for (l = a & (1 << -y) - 1, a >>= -y, y += n; y > 0; l = l * 256 + t[e + x], x += I, y -= 8) ;
  if (a === 0) a = 1 - _;
  else {
    if (a === p) return l ? NaN : (S ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, n), a = a - _;
  }
  return (S ? -1 : 1) * l * Math.pow(2, a - n);
};
ln.write = function(t, e, r, n, i, a) {
  var l, u, p, _ = a * 8 - i - 1, y = (1 << _) - 1, x = y >> 1, I = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, S = n ? 0 : a - 1, R = n ? 1 : -1, m = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, l = y) : (l = Math.floor(Math.log(e) / Math.LN2), e * (p = Math.pow(2, -l)) < 1 && (l--, p *= 2), l + x >= 1 ? e += I / p : e += I * Math.pow(2, 1 - x), e * p >= 2 && (l++, p /= 2), l + x >= y ? (u = 0, l = y) : l + x >= 1 ? (u = (e * p - 1) * Math.pow(2, i), l = l + x) : (u = e * Math.pow(2, x - 1) * Math.pow(2, i), l = 0)); i >= 8; t[r + S] = u & 255, S += R, u /= 256, i -= 8) ;
  for (l = l << i | u, _ += i; _ > 0; t[r + S] = l & 255, S += R, l /= 256, _ -= 8) ;
  t[r + S - R] |= m * 128;
};
(function(t) {
  const e = or, r = ln, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = u, t.SlowBuffer = B, t.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  t.kMaxLength = i, u.TYPED_ARRAY_SUPPORT = a(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function a() {
    try {
      const f = new Uint8Array(1), s = {
        foo: function() {
          return 42;
        }
      };
      return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(f, s), f.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: true,
    get: function() {
      if (u.isBuffer(this)) return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: true,
    get: function() {
      if (u.isBuffer(this)) return this.byteOffset;
    }
  });
  function l(f) {
    if (f > i) throw new RangeError('The value "' + f + '" is invalid for option "size"');
    const s = new Uint8Array(f);
    return Object.setPrototypeOf(s, u.prototype), s;
  }
  function u(f, s, o) {
    if (typeof f == "number") {
      if (typeof s == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
      return x(f);
    }
    return p(f, s, o);
  }
  u.poolSize = 8192;
  function p(f, s, o) {
    if (typeof f == "string") return I(f, s);
    if (ArrayBuffer.isView(f)) return R(f);
    if (f == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f);
    if (O(f, ArrayBuffer) || f && O(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (O(f, SharedArrayBuffer) || f && O(f.buffer, SharedArrayBuffer))) return m(f, s, o);
    if (typeof f == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const d = f.valueOf && f.valueOf();
    if (d != null && d !== f) return u.from(d, s, o);
    const b = v(f);
    if (b) return b;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof f[Symbol.toPrimitive] == "function") return u.from(f[Symbol.toPrimitive]("string"), s, o);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f);
  }
  u.from = function(f, s, o) {
    return p(f, s, o);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function _(f) {
    if (typeof f != "number") throw new TypeError('"size" argument must be of type number');
    if (f < 0) throw new RangeError('The value "' + f + '" is invalid for option "size"');
  }
  function y(f, s, o) {
    return _(f), f <= 0 ? l(f) : s !== void 0 ? typeof o == "string" ? l(f).fill(s, o) : l(f).fill(s) : l(f);
  }
  u.alloc = function(f, s, o) {
    return y(f, s, o);
  };
  function x(f) {
    return _(f), l(f < 0 ? 0 : $(f) | 0);
  }
  u.allocUnsafe = function(f) {
    return x(f);
  }, u.allocUnsafeSlow = function(f) {
    return x(f);
  };
  function I(f, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !u.isEncoding(s)) throw new TypeError("Unknown encoding: " + s);
    const o = A(f, s) | 0;
    let d = l(o);
    const b = d.write(f, s);
    return b !== o && (d = d.slice(0, b)), d;
  }
  function S(f) {
    const s = f.length < 0 ? 0 : $(f.length) | 0, o = l(s);
    for (let d = 0; d < s; d += 1) o[d] = f[d] & 255;
    return o;
  }
  function R(f) {
    if (O(f, Uint8Array)) {
      const s = new Uint8Array(f);
      return m(s.buffer, s.byteOffset, s.byteLength);
    }
    return S(f);
  }
  function m(f, s, o) {
    if (s < 0 || f.byteLength < s) throw new RangeError('"offset" is outside of buffer bounds');
    if (f.byteLength < s + (o || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let d;
    return s === void 0 && o === void 0 ? d = new Uint8Array(f) : o === void 0 ? d = new Uint8Array(f, s) : d = new Uint8Array(f, s, o), Object.setPrototypeOf(d, u.prototype), d;
  }
  function v(f) {
    if (u.isBuffer(f)) {
      const s = $(f.length) | 0, o = l(s);
      return o.length === 0 || f.copy(o, 0, 0, s), o;
    }
    if (f.length !== void 0) return typeof f.length != "number" || Te(f.length) ? l(0) : S(f);
    if (f.type === "Buffer" && Array.isArray(f.data)) return S(f.data);
  }
  function $(f) {
    if (f >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return f | 0;
  }
  function B(f) {
    return +f != f && (f = 0), u.alloc(+f);
  }
  u.isBuffer = function(s) {
    return s != null && s._isBuffer === true && s !== u.prototype;
  }, u.compare = function(s, o) {
    if (O(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), O(o, Uint8Array) && (o = u.from(o, o.offset, o.byteLength)), !u.isBuffer(s) || !u.isBuffer(o)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (s === o) return 0;
    let d = s.length, b = o.length;
    for (let E = 0, T = Math.min(d, b); E < T; ++E) if (s[E] !== o[E]) {
      d = s[E], b = o[E];
      break;
    }
    return d < b ? -1 : b < d ? 1 : 0;
  }, u.isEncoding = function(s) {
    switch (String(s).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  }, u.concat = function(s, o) {
    if (!Array.isArray(s)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (s.length === 0) return u.alloc(0);
    let d;
    if (o === void 0) for (o = 0, d = 0; d < s.length; ++d) o += s[d].length;
    const b = u.allocUnsafe(o);
    let E = 0;
    for (d = 0; d < s.length; ++d) {
      let T = s[d];
      if (O(T, Uint8Array)) E + T.length > b.length ? (u.isBuffer(T) || (T = u.from(T)), T.copy(b, E)) : Uint8Array.prototype.set.call(b, T, E);
      else if (u.isBuffer(T)) T.copy(b, E);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      E += T.length;
    }
    return b;
  };
  function A(f, s) {
    if (u.isBuffer(f)) return f.length;
    if (ArrayBuffer.isView(f) || O(f, ArrayBuffer)) return f.byteLength;
    if (typeof f != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f);
    const o = f.length, d = arguments.length > 2 && arguments[2] === true;
    if (!d && o === 0) return 0;
    let b = false;
    for (; ; ) switch (s) {
      case "ascii":
      case "latin1":
      case "binary":
        return o;
      case "utf8":
      case "utf-8":
        return F(f).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return o * 2;
      case "hex":
        return o >>> 1;
      case "base64":
        return K(f).length;
      default:
        if (b) return d ? -1 : F(f).length;
        s = ("" + s).toLowerCase(), b = true;
    }
  }
  u.byteLength = A;
  function z(f, s, o) {
    let d = false;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((o === void 0 || o > this.length) && (o = this.length), o <= 0) || (o >>>= 0, s >>>= 0, o <= s)) return "";
    for (f || (f = "utf8"); ; ) switch (f) {
      case "hex":
        return te(this, s, o);
      case "utf8":
      case "utf-8":
        return V(this, s, o);
      case "ascii":
        return ae(this, s, o);
      case "latin1":
      case "binary":
        return le(this, s, o);
      case "base64":
        return P(this, s, o);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ue(this, s, o);
      default:
        if (d) throw new TypeError("Unknown encoding: " + f);
        f = (f + "").toLowerCase(), d = true;
    }
  }
  u.prototype._isBuffer = true;
  function U(f, s, o) {
    const d = f[s];
    f[s] = f[o], f[o] = d;
  }
  u.prototype.swap16 = function() {
    const s = this.length;
    if (s % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let o = 0; o < s; o += 2) U(this, o, o + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const s = this.length;
    if (s % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let o = 0; o < s; o += 4) U(this, o, o + 3), U(this, o + 1, o + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const s = this.length;
    if (s % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let o = 0; o < s; o += 8) U(this, o, o + 7), U(this, o + 1, o + 6), U(this, o + 2, o + 5), U(this, o + 3, o + 4);
    return this;
  }, u.prototype.toString = function() {
    const s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? V(this, 0, s) : z.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(s) {
    if (!u.isBuffer(s)) throw new TypeError("Argument must be a Buffer");
    return this === s ? true : u.compare(this, s) === 0;
  }, u.prototype.inspect = function() {
    let s = "";
    const o = t.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, o).replace(/(.{2})/g, "$1 ").trim(), this.length > o && (s += " ... "), "<Buffer " + s + ">";
  }, n && (u.prototype[n] = u.prototype.inspect), u.prototype.compare = function(s, o, d, b, E) {
    if (O(s, Uint8Array) && (s = u.from(s, s.offset, s.byteLength)), !u.isBuffer(s)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s);
    if (o === void 0 && (o = 0), d === void 0 && (d = s ? s.length : 0), b === void 0 && (b = 0), E === void 0 && (E = this.length), o < 0 || d > s.length || b < 0 || E > this.length) throw new RangeError("out of range index");
    if (b >= E && o >= d) return 0;
    if (b >= E) return -1;
    if (o >= d) return 1;
    if (o >>>= 0, d >>>= 0, b >>>= 0, E >>>= 0, this === s) return 0;
    let T = E - b, W = d - o;
    const ne = Math.min(T, W), Z = this.slice(b, E), ie = s.slice(o, d);
    for (let Q = 0; Q < ne; ++Q) if (Z[Q] !== ie[Q]) {
      T = Z[Q], W = ie[Q];
      break;
    }
    return T < W ? -1 : W < T ? 1 : 0;
  };
  function se(f, s, o, d, b) {
    if (f.length === 0) return -1;
    if (typeof o == "string" ? (d = o, o = 0) : o > 2147483647 ? o = 2147483647 : o < -2147483648 && (o = -2147483648), o = +o, Te(o) && (o = b ? 0 : f.length - 1), o < 0 && (o = f.length + o), o >= f.length) {
      if (b) return -1;
      o = f.length - 1;
    } else if (o < 0) if (b) o = 0;
    else return -1;
    if (typeof s == "string" && (s = u.from(s, d)), u.isBuffer(s)) return s.length === 0 ? -1 : me(f, s, o, d, b);
    if (typeof s == "number") return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? b ? Uint8Array.prototype.indexOf.call(f, s, o) : Uint8Array.prototype.lastIndexOf.call(f, s, o) : me(f, [s], o, d, b);
    throw new TypeError("val must be string, number or Buffer");
  }
  function me(f, s, o, d, b) {
    let E = 1, T = f.length, W = s.length;
    if (d !== void 0 && (d = String(d).toLowerCase(), d === "ucs2" || d === "ucs-2" || d === "utf16le" || d === "utf-16le")) {
      if (f.length < 2 || s.length < 2) return -1;
      E = 2, T /= 2, W /= 2, o /= 2;
    }
    function ne(ie, Q) {
      return E === 1 ? ie[Q] : ie.readUInt16BE(Q * E);
    }
    let Z;
    if (b) {
      let ie = -1;
      for (Z = o; Z < T; Z++) if (ne(f, Z) === ne(s, ie === -1 ? 0 : Z - ie)) {
        if (ie === -1 && (ie = Z), Z - ie + 1 === W) return ie * E;
      } else ie !== -1 && (Z -= Z - ie), ie = -1;
    } else for (o + W > T && (o = T - W), Z = o; Z >= 0; Z--) {
      let ie = true;
      for (let Q = 0; Q < W; Q++) if (ne(f, Z + Q) !== ne(s, Q)) {
        ie = false;
        break;
      }
      if (ie) return Z;
    }
    return -1;
  }
  u.prototype.includes = function(s, o, d) {
    return this.indexOf(s, o, d) !== -1;
  }, u.prototype.indexOf = function(s, o, d) {
    return se(this, s, o, d, true);
  }, u.prototype.lastIndexOf = function(s, o, d) {
    return se(this, s, o, d, false);
  };
  function J(f, s, o, d) {
    o = Number(o) || 0;
    const b = f.length - o;
    d ? (d = Number(d), d > b && (d = b)) : d = b;
    const E = s.length;
    d > E / 2 && (d = E / 2);
    let T;
    for (T = 0; T < d; ++T) {
      const W = parseInt(s.substr(T * 2, 2), 16);
      if (Te(W)) return T;
      f[o + T] = W;
    }
    return T;
  }
  function oe(f, s, o, d) {
    return Ee(F(s, f.length - o), f, o, d);
  }
  function ye(f, s, o, d) {
    return Ee(X(s), f, o, d);
  }
  function ge(f, s, o, d) {
    return Ee(K(s), f, o, d);
  }
  function H(f, s, o, d) {
    return Ee(ee(s, f.length - o), f, o, d);
  }
  u.prototype.write = function(s, o, d, b) {
    if (o === void 0) b = "utf8", d = this.length, o = 0;
    else if (d === void 0 && typeof o == "string") b = o, d = this.length, o = 0;
    else if (isFinite(o)) o = o >>> 0, isFinite(d) ? (d = d >>> 0, b === void 0 && (b = "utf8")) : (b = d, d = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const E = this.length - o;
    if ((d === void 0 || d > E) && (d = E), s.length > 0 && (d < 0 || o < 0) || o > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    b || (b = "utf8");
    let T = false;
    for (; ; ) switch (b) {
      case "hex":
        return J(this, s, o, d);
      case "utf8":
      case "utf-8":
        return oe(this, s, o, d);
      case "ascii":
      case "latin1":
      case "binary":
        return ye(this, s, o, d);
      case "base64":
        return ge(this, s, o, d);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return H(this, s, o, d);
      default:
        if (T) throw new TypeError("Unknown encoding: " + b);
        b = ("" + b).toLowerCase(), T = true;
    }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function P(f, s, o) {
    return s === 0 && o === f.length ? e.fromByteArray(f) : e.fromByteArray(f.slice(s, o));
  }
  function V(f, s, o) {
    o = Math.min(f.length, o);
    const d = [];
    let b = s;
    for (; b < o; ) {
      const E = f[b];
      let T = null, W = E > 239 ? 4 : E > 223 ? 3 : E > 191 ? 2 : 1;
      if (b + W <= o) {
        let ne, Z, ie, Q;
        switch (W) {
          case 1:
            E < 128 && (T = E);
            break;
          case 2:
            ne = f[b + 1], (ne & 192) === 128 && (Q = (E & 31) << 6 | ne & 63, Q > 127 && (T = Q));
            break;
          case 3:
            ne = f[b + 1], Z = f[b + 2], (ne & 192) === 128 && (Z & 192) === 128 && (Q = (E & 15) << 12 | (ne & 63) << 6 | Z & 63, Q > 2047 && (Q < 55296 || Q > 57343) && (T = Q));
            break;
          case 4:
            ne = f[b + 1], Z = f[b + 2], ie = f[b + 3], (ne & 192) === 128 && (Z & 192) === 128 && (ie & 192) === 128 && (Q = (E & 15) << 18 | (ne & 63) << 12 | (Z & 63) << 6 | ie & 63, Q > 65535 && Q < 1114112 && (T = Q));
        }
      }
      T === null ? (T = 65533, W = 1) : T > 65535 && (T -= 65536, d.push(T >>> 10 & 1023 | 55296), T = 56320 | T & 1023), d.push(T), b += W;
    }
    return q(d);
  }
  const G = 4096;
  function q(f) {
    const s = f.length;
    if (s <= G) return String.fromCharCode.apply(String, f);
    let o = "", d = 0;
    for (; d < s; ) o += String.fromCharCode.apply(String, f.slice(d, d += G));
    return o;
  }
  function ae(f, s, o) {
    let d = "";
    o = Math.min(f.length, o);
    for (let b = s; b < o; ++b) d += String.fromCharCode(f[b] & 127);
    return d;
  }
  function le(f, s, o) {
    let d = "";
    o = Math.min(f.length, o);
    for (let b = s; b < o; ++b) d += String.fromCharCode(f[b]);
    return d;
  }
  function te(f, s, o) {
    const d = f.length;
    (!s || s < 0) && (s = 0), (!o || o < 0 || o > d) && (o = d);
    let b = "";
    for (let E = s; E < o; ++E) b += vt[f[E]];
    return b;
  }
  function ue(f, s, o) {
    const d = f.slice(s, o);
    let b = "";
    for (let E = 0; E < d.length - 1; E += 2) b += String.fromCharCode(d[E] + d[E + 1] * 256);
    return b;
  }
  u.prototype.slice = function(s, o) {
    const d = this.length;
    s = ~~s, o = o === void 0 ? d : ~~o, s < 0 ? (s += d, s < 0 && (s = 0)) : s > d && (s = d), o < 0 ? (o += d, o < 0 && (o = 0)) : o > d && (o = d), o < s && (o = s);
    const b = this.subarray(s, o);
    return Object.setPrototypeOf(b, u.prototype), b;
  };
  function D(f, s, o) {
    if (f % 1 !== 0 || f < 0) throw new RangeError("offset is not uint");
    if (f + s > o) throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(s, o, d) {
    s = s >>> 0, o = o >>> 0, d || D(s, o, this.length);
    let b = this[s], E = 1, T = 0;
    for (; ++T < o && (E *= 256); ) b += this[s + T] * E;
    return b;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(s, o, d) {
    s = s >>> 0, o = o >>> 0, d || D(s, o, this.length);
    let b = this[s + --o], E = 1;
    for (; o > 0 && (E *= 256); ) b += this[s + --o] * E;
    return b;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(s, o) {
    return s = s >>> 0, o || D(s, 1, this.length), this[s];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(s, o) {
    return s = s >>> 0, o || D(s, 2, this.length), this[s] | this[s + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(s, o) {
    return s = s >>> 0, o || D(s, 2, this.length), this[s] << 8 | this[s + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(s, o) {
    return s = s >>> 0, o || D(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(s, o) {
    return s = s >>> 0, o || D(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
  }, u.prototype.readBigUInt64LE = $e(function(s) {
    s = s >>> 0, g(s, "offset");
    const o = this[s], d = this[s + 7];
    (o === void 0 || d === void 0) && w(s, this.length - 8);
    const b = o + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, E = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + d * 2 ** 24;
    return BigInt(b) + (BigInt(E) << BigInt(32));
  }), u.prototype.readBigUInt64BE = $e(function(s) {
    s = s >>> 0, g(s, "offset");
    const o = this[s], d = this[s + 7];
    (o === void 0 || d === void 0) && w(s, this.length - 8);
    const b = o * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], E = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + d;
    return (BigInt(b) << BigInt(32)) + BigInt(E);
  }), u.prototype.readIntLE = function(s, o, d) {
    s = s >>> 0, o = o >>> 0, d || D(s, o, this.length);
    let b = this[s], E = 1, T = 0;
    for (; ++T < o && (E *= 256); ) b += this[s + T] * E;
    return E *= 128, b >= E && (b -= Math.pow(2, 8 * o)), b;
  }, u.prototype.readIntBE = function(s, o, d) {
    s = s >>> 0, o = o >>> 0, d || D(s, o, this.length);
    let b = o, E = 1, T = this[s + --b];
    for (; b > 0 && (E *= 256); ) T += this[s + --b] * E;
    return E *= 128, T >= E && (T -= Math.pow(2, 8 * o)), T;
  }, u.prototype.readInt8 = function(s, o) {
    return s = s >>> 0, o || D(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, u.prototype.readInt16LE = function(s, o) {
    s = s >>> 0, o || D(s, 2, this.length);
    const d = this[s] | this[s + 1] << 8;
    return d & 32768 ? d | 4294901760 : d;
  }, u.prototype.readInt16BE = function(s, o) {
    s = s >>> 0, o || D(s, 2, this.length);
    const d = this[s + 1] | this[s] << 8;
    return d & 32768 ? d | 4294901760 : d;
  }, u.prototype.readInt32LE = function(s, o) {
    return s = s >>> 0, o || D(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, u.prototype.readInt32BE = function(s, o) {
    return s = s >>> 0, o || D(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, u.prototype.readBigInt64LE = $e(function(s) {
    s = s >>> 0, g(s, "offset");
    const o = this[s], d = this[s + 7];
    (o === void 0 || d === void 0) && w(s, this.length - 8);
    const b = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (d << 24);
    return (BigInt(b) << BigInt(32)) + BigInt(o + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
  }), u.prototype.readBigInt64BE = $e(function(s) {
    s = s >>> 0, g(s, "offset");
    const o = this[s], d = this[s + 7];
    (o === void 0 || d === void 0) && w(s, this.length - 8);
    const b = (o << 24) + // Overflow
    this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s];
    return (BigInt(b) << BigInt(32)) + BigInt(this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + d);
  }), u.prototype.readFloatLE = function(s, o) {
    return s = s >>> 0, o || D(s, 4, this.length), r.read(this, s, true, 23, 4);
  }, u.prototype.readFloatBE = function(s, o) {
    return s = s >>> 0, o || D(s, 4, this.length), r.read(this, s, false, 23, 4);
  }, u.prototype.readDoubleLE = function(s, o) {
    return s = s >>> 0, o || D(s, 8, this.length), r.read(this, s, true, 52, 8);
  }, u.prototype.readDoubleBE = function(s, o) {
    return s = s >>> 0, o || D(s, 8, this.length), r.read(this, s, false, 52, 8);
  };
  function re(f, s, o, d, b, E) {
    if (!u.isBuffer(f)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > b || s < E) throw new RangeError('"value" argument is out of bounds');
    if (o + d > f.length) throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(s, o, d, b) {
    if (s = +s, o = o >>> 0, d = d >>> 0, !b) {
      const W = Math.pow(2, 8 * d) - 1;
      re(this, s, o, d, W, 0);
    }
    let E = 1, T = 0;
    for (this[o] = s & 255; ++T < d && (E *= 256); ) this[o + T] = s / E & 255;
    return o + d;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(s, o, d, b) {
    if (s = +s, o = o >>> 0, d = d >>> 0, !b) {
      const W = Math.pow(2, 8 * d) - 1;
      re(this, s, o, d, W, 0);
    }
    let E = d - 1, T = 1;
    for (this[o + E] = s & 255; --E >= 0 && (T *= 256); ) this[o + E] = s / T & 255;
    return o + d;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(s, o, d) {
    return s = +s, o = o >>> 0, d || re(this, s, o, 1, 255, 0), this[o] = s & 255, o + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(s, o, d) {
    return s = +s, o = o >>> 0, d || re(this, s, o, 2, 65535, 0), this[o] = s & 255, this[o + 1] = s >>> 8, o + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(s, o, d) {
    return s = +s, o = o >>> 0, d || re(this, s, o, 2, 65535, 0), this[o] = s >>> 8, this[o + 1] = s & 255, o + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(s, o, d) {
    return s = +s, o = o >>> 0, d || re(this, s, o, 4, 4294967295, 0), this[o + 3] = s >>> 24, this[o + 2] = s >>> 16, this[o + 1] = s >>> 8, this[o] = s & 255, o + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(s, o, d) {
    return s = +s, o = o >>> 0, d || re(this, s, o, 4, 4294967295, 0), this[o] = s >>> 24, this[o + 1] = s >>> 16, this[o + 2] = s >>> 8, this[o + 3] = s & 255, o + 4;
  };
  function M(f, s, o, d, b) {
    Xe(s, d, b, f, o, 7);
    let E = Number(s & BigInt(4294967295));
    f[o++] = E, E = E >> 8, f[o++] = E, E = E >> 8, f[o++] = E, E = E >> 8, f[o++] = E;
    let T = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[o++] = T, T = T >> 8, f[o++] = T, T = T >> 8, f[o++] = T, T = T >> 8, f[o++] = T, o;
  }
  function he(f, s, o, d, b) {
    Xe(s, d, b, f, o, 7);
    let E = Number(s & BigInt(4294967295));
    f[o + 7] = E, E = E >> 8, f[o + 6] = E, E = E >> 8, f[o + 5] = E, E = E >> 8, f[o + 4] = E;
    let T = Number(s >> BigInt(32) & BigInt(4294967295));
    return f[o + 3] = T, T = T >> 8, f[o + 2] = T, T = T >> 8, f[o + 1] = T, T = T >> 8, f[o] = T, o + 8;
  }
  u.prototype.writeBigUInt64LE = $e(function(s, o = 0) {
    return M(this, s, o, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = $e(function(s, o = 0) {
    return he(this, s, o, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(s, o, d, b) {
    if (s = +s, o = o >>> 0, !b) {
      const ne = Math.pow(2, 8 * d - 1);
      re(this, s, o, d, ne - 1, -ne);
    }
    let E = 0, T = 1, W = 0;
    for (this[o] = s & 255; ++E < d && (T *= 256); ) s < 0 && W === 0 && this[o + E - 1] !== 0 && (W = 1), this[o + E] = (s / T >> 0) - W & 255;
    return o + d;
  }, u.prototype.writeIntBE = function(s, o, d, b) {
    if (s = +s, o = o >>> 0, !b) {
      const ne = Math.pow(2, 8 * d - 1);
      re(this, s, o, d, ne - 1, -ne);
    }
    let E = d - 1, T = 1, W = 0;
    for (this[o + E] = s & 255; --E >= 0 && (T *= 256); ) s < 0 && W === 0 && this[o + E + 1] !== 0 && (W = 1), this[o + E] = (s / T >> 0) - W & 255;
    return o + d;
  }, u.prototype.writeInt8 = function(s, o, d) {
    return s = +s, o = o >>> 0, d || re(this, s, o, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[o] = s & 255, o + 1;
  }, u.prototype.writeInt16LE = function(s, o, d) {
    return s = +s, o = o >>> 0, d || re(this, s, o, 2, 32767, -32768), this[o] = s & 255, this[o + 1] = s >>> 8, o + 2;
  }, u.prototype.writeInt16BE = function(s, o, d) {
    return s = +s, o = o >>> 0, d || re(this, s, o, 2, 32767, -32768), this[o] = s >>> 8, this[o + 1] = s & 255, o + 2;
  }, u.prototype.writeInt32LE = function(s, o, d) {
    return s = +s, o = o >>> 0, d || re(this, s, o, 4, 2147483647, -2147483648), this[o] = s & 255, this[o + 1] = s >>> 8, this[o + 2] = s >>> 16, this[o + 3] = s >>> 24, o + 4;
  }, u.prototype.writeInt32BE = function(s, o, d) {
    return s = +s, o = o >>> 0, d || re(this, s, o, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[o] = s >>> 24, this[o + 1] = s >>> 16, this[o + 2] = s >>> 8, this[o + 3] = s & 255, o + 4;
  }, u.prototype.writeBigInt64LE = $e(function(s, o = 0) {
    return M(this, s, o, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = $e(function(s, o = 0) {
    return he(this, s, o, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Re(f, s, o, d, b, E) {
    if (o + d > f.length) throw new RangeError("Index out of range");
    if (o < 0) throw new RangeError("Index out of range");
  }
  function Ye(f, s, o, d, b) {
    return s = +s, o = o >>> 0, b || Re(f, s, o, 4), r.write(f, s, o, d, 23, 4), o + 4;
  }
  u.prototype.writeFloatLE = function(s, o, d) {
    return Ye(this, s, o, true, d);
  }, u.prototype.writeFloatBE = function(s, o, d) {
    return Ye(this, s, o, false, d);
  };
  function We(f, s, o, d, b) {
    return s = +s, o = o >>> 0, b || Re(f, s, o, 8), r.write(f, s, o, d, 52, 8), o + 8;
  }
  u.prototype.writeDoubleLE = function(s, o, d) {
    return We(this, s, o, true, d);
  }, u.prototype.writeDoubleBE = function(s, o, d) {
    return We(this, s, o, false, d);
  }, u.prototype.copy = function(s, o, d, b) {
    if (!u.isBuffer(s)) throw new TypeError("argument should be a Buffer");
    if (d || (d = 0), !b && b !== 0 && (b = this.length), o >= s.length && (o = s.length), o || (o = 0), b > 0 && b < d && (b = d), b === d || s.length === 0 || this.length === 0) return 0;
    if (o < 0) throw new RangeError("targetStart out of bounds");
    if (d < 0 || d >= this.length) throw new RangeError("Index out of range");
    if (b < 0) throw new RangeError("sourceEnd out of bounds");
    b > this.length && (b = this.length), s.length - o < b - d && (b = s.length - o + d);
    const E = b - d;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(o, d, b) : Uint8Array.prototype.set.call(s, this.subarray(d, b), o), E;
  }, u.prototype.fill = function(s, o, d, b) {
    if (typeof s == "string") {
      if (typeof o == "string" ? (b = o, o = 0, d = this.length) : typeof d == "string" && (b = d, d = this.length), b !== void 0 && typeof b != "string") throw new TypeError("encoding must be a string");
      if (typeof b == "string" && !u.isEncoding(b)) throw new TypeError("Unknown encoding: " + b);
      if (s.length === 1) {
        const T = s.charCodeAt(0);
        (b === "utf8" && T < 128 || b === "latin1") && (s = T);
      }
    } else typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (o < 0 || this.length < o || this.length < d) throw new RangeError("Out of range index");
    if (d <= o) return this;
    o = o >>> 0, d = d === void 0 ? this.length : d >>> 0, s || (s = 0);
    let E;
    if (typeof s == "number") for (E = o; E < d; ++E) this[E] = s;
    else {
      const T = u.isBuffer(s) ? s : u.from(s, b), W = T.length;
      if (W === 0) throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (E = 0; E < d - o; ++E) this[E + o] = T[E % W];
    }
    return this;
  };
  const Ae = {};
  function Ge(f, s, o) {
    Ae[f] = class extends o {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: s.apply(this, arguments),
          writable: true,
          configurable: true
        }), this.name = `${this.name} [${f}]`, this.stack, delete this.name;
      }
      get code() {
        return f;
      }
      set code(b) {
        Object.defineProperty(this, "code", {
          configurable: true,
          enumerable: true,
          value: b,
          writable: true
        });
      }
      toString() {
        return `${this.name} [${f}]: ${this.message}`;
      }
    };
  }
  Ge("ERR_BUFFER_OUT_OF_BOUNDS", function(f) {
    return f ? `${f} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), Ge("ERR_INVALID_ARG_TYPE", function(f, s) {
    return `The "${f}" argument must be of type number. Received type ${typeof s}`;
  }, TypeError), Ge("ERR_OUT_OF_RANGE", function(f, s, o) {
    let d = `The value of "${f}" is out of range.`, b = o;
    return Number.isInteger(o) && Math.abs(o) > 2 ** 32 ? b = _t(String(o)) : typeof o == "bigint" && (b = String(o), (o > BigInt(2) ** BigInt(32) || o < -(BigInt(2) ** BigInt(32))) && (b = _t(b)), b += "n"), d += ` It must be ${s}. Received ${b}`, d;
  }, RangeError);
  function _t(f) {
    let s = "", o = f.length;
    const d = f[0] === "-" ? 1 : 0;
    for (; o >= d + 4; o -= 3) s = `_${f.slice(o - 3, o)}${s}`;
    return `${f.slice(0, o)}${s}`;
  }
  function rt(f, s, o) {
    g(s, "offset"), (f[s] === void 0 || f[s + o] === void 0) && w(s, f.length - (o + 1));
  }
  function Xe(f, s, o, d, b, E) {
    if (f > o || f < s) {
      const T = typeof s == "bigint" ? "n" : "";
      let W;
      throw s === 0 || s === BigInt(0) ? W = `>= 0${T} and < 2${T} ** ${(E + 1) * 8}${T}` : W = `>= -(2${T} ** ${(E + 1) * 8 - 1}${T}) and < 2 ** ${(E + 1) * 8 - 1}${T}`, new Ae.ERR_OUT_OF_RANGE("value", W, f);
    }
    rt(d, b, E);
  }
  function g(f, s) {
    if (typeof f != "number") throw new Ae.ERR_INVALID_ARG_TYPE(s, "number", f);
  }
  function w(f, s, o) {
    throw Math.floor(f) !== f ? (g(f, o), new Ae.ERR_OUT_OF_RANGE("offset", "an integer", f)) : s < 0 ? new Ae.ERR_BUFFER_OUT_OF_BOUNDS() : new Ae.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${s}`, f);
  }
  const N = /[^+/0-9A-Za-z-_]/g;
  function C(f) {
    if (f = f.split("=")[0], f = f.trim().replace(N, ""), f.length < 2) return "";
    for (; f.length % 4 !== 0; ) f = f + "=";
    return f;
  }
  function F(f, s) {
    s = s || 1 / 0;
    let o;
    const d = f.length;
    let b = null;
    const E = [];
    for (let T = 0; T < d; ++T) {
      if (o = f.charCodeAt(T), o > 55295 && o < 57344) {
        if (!b) {
          if (o > 56319) {
            (s -= 3) > -1 && E.push(239, 191, 189);
            continue;
          } else if (T + 1 === d) {
            (s -= 3) > -1 && E.push(239, 191, 189);
            continue;
          }
          b = o;
          continue;
        }
        if (o < 56320) {
          (s -= 3) > -1 && E.push(239, 191, 189), b = o;
          continue;
        }
        o = (b - 55296 << 10 | o - 56320) + 65536;
      } else b && (s -= 3) > -1 && E.push(239, 191, 189);
      if (b = null, o < 128) {
        if ((s -= 1) < 0) break;
        E.push(o);
      } else if (o < 2048) {
        if ((s -= 2) < 0) break;
        E.push(o >> 6 | 192, o & 63 | 128);
      } else if (o < 65536) {
        if ((s -= 3) < 0) break;
        E.push(o >> 12 | 224, o >> 6 & 63 | 128, o & 63 | 128);
      } else if (o < 1114112) {
        if ((s -= 4) < 0) break;
        E.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, o & 63 | 128);
      } else throw new Error("Invalid code point");
    }
    return E;
  }
  function X(f) {
    const s = [];
    for (let o = 0; o < f.length; ++o) s.push(f.charCodeAt(o) & 255);
    return s;
  }
  function ee(f, s) {
    let o, d, b;
    const E = [];
    for (let T = 0; T < f.length && !((s -= 2) < 0); ++T) o = f.charCodeAt(T), d = o >> 8, b = o % 256, E.push(b), E.push(d);
    return E;
  }
  function K(f) {
    return e.toByteArray(C(f));
  }
  function Ee(f, s, o, d) {
    let b;
    for (b = 0; b < d && !(b + o >= s.length || b >= f.length); ++b) s[b + o] = f[b];
    return b;
  }
  function O(f, s) {
    return f instanceof s || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === s.name;
  }
  function Te(f) {
    return f !== f;
  }
  const vt = function() {
    const f = "0123456789abcdef", s = new Array(256);
    for (let o = 0; o < 16; ++o) {
      const d = o * 16;
      for (let b = 0; b < 16; ++b) s[d + b] = f[o] + f[b];
    }
    return s;
  }();
  function $e(f) {
    return typeof BigInt > "u" ? gr : f;
  }
  function gr() {
    throw new Error("BigInt not supported");
  }
})(De);
var Pt = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
var jt = "http://www.w3.org/2001/XMLSchema#";
var qt = "http://www.w3.org/2000/10/swap/";
var pe = {
  xsd: {
    decimal: `${jt}decimal`,
    boolean: `${jt}boolean`,
    double: `${jt}double`,
    integer: `${jt}integer`,
    string: `${jt}string`
  },
  rdf: {
    type: `${Pt}type`,
    nil: `${Pt}nil`,
    first: `${Pt}first`,
    rest: `${Pt}rest`,
    langString: `${Pt}langString`
  },
  owl: {
    sameAs: "http://www.w3.org/2002/07/owl#sameAs"
  },
  r: {
    forSome: `${qt}reify#forSome`,
    forAll: `${qt}reify#forAll`
  },
  log: {
    implies: `${qt}log#implies`,
    isImpliedBy: `${qt}log#isImpliedBy`
  }
};
var {
  xsd: Ht
} = pe;
var io = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\([^])/g;
var Bn = {
  "\\": "\\",
  "'": "'",
  '"': '"',
  n: `
`,
  r: "\r",
  t: "	",
  f: "\f",
  b: "\b",
  _: "_",
  "~": "~",
  ".": ".",
  "-": "-",
  "!": "!",
  $: "$",
  "&": "&",
  "(": "(",
  ")": ")",
  "*": "*",
  "+": "+",
  ",": ",",
  ";": ";",
  "=": "=",
  "/": "/",
  "?": "?",
  "#": "#",
  "@": "@",
  "%": "%"
};
var so = /[\x00-\x20<>\\"\{\}\|\^\`]/;
var oo = {
  _iri: true,
  _unescapedIri: true,
  _simpleQuotedString: true,
  _langcode: true,
  _blank: true,
  _newline: true,
  _comment: true,
  _whitespace: true,
  _endOfFile: true
};
var ao = /$0^/;
var lo = class {
  constructor(e) {
    if (this._iri = /^<((?:[^ <>{}\\]|\\[uU])+)>[ \t]*/, this._unescapedIri = /^<([^\x00-\x20<>\\"\{\}\|\^\`]*)>[ \t]*/, this._simpleQuotedString = /^"([^"\\\r\n]*)"(?=[^"])/, this._simpleApostropheString = /^'([^'\\\r\n]*)'(?=[^'])/, this._langcode = /^@([a-z]+(?:-[a-z0-9]+)*)(?=[^a-z0-9\-])/i, this._prefix = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:(?=[#\s<])/, this._prefixed = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:((?:(?:[0-:A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])(?:(?:[\.\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])*(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~]))?)?)(?:[ \t]+|(?=\.?[,;!\^\s#()\[\]\{\}"'<>]))/, this._variable = /^\?(?:(?:[A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?=[.,;!\^\s#()\[\]\{\}"'<>])/, this._blank = /^_:((?:[0-9A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?:[ \t]+|(?=\.?[,;:\s#()\[\]\{\}"'<>]))/, this._number = /^[\-+]?(?:(\d+\.\d*|\.?\d+)[eE][\-+]?|\d*(\.)?)\d+(?=\.?[,;:\s#()\[\]\{\}"'<>])/, this._boolean = /^(?:true|false)(?=[.,;\s#()\[\]\{\}"'<>])/, this._keyword = /^@[a-z]+(?=[\s#<:])/i, this._sparqlKeyword = /^(?:PREFIX|BASE|GRAPH)(?=[\s#<])/i, this._shortPredicates = /^a(?=[\s#()\[\]\{\}"'<>])/, this._newline = /^[ \t]*(?:#[^\n\r]*)?(?:\r\n|\n|\r)[ \t]*/, this._comment = /#([^\n\r]*)/, this._whitespace = /^[ \t]+/, this._endOfFile = /^(?:#[^\n\r]*)?$/, e = e || {}, this._isImpliedBy = e.isImpliedBy, this._lineMode = !!e.lineMode) {
      this._n3Mode = false;
      for (const r in this) !(r in oo) && this[r] instanceof RegExp && (this[r] = ao);
    } else this._n3Mode = e.n3 !== false;
    this.comments = !!e.comments, this._literalClosingPos = 0;
  }
  // ## Private methods
  // ### `_tokenizeToEnd` tokenizes as for as possible, emitting tokens through the callback
  _tokenizeToEnd(e, r) {
    let n = this._input, i = n.length;
    for (; ; ) {
      let u, p;
      for (; u = this._newline.exec(n); ) this.comments && (p = this._comment.exec(u[0])) && a("comment", p[1], "", this._line, u[0].length), n = n.substr(u[0].length, n.length), i = n.length, this._line++;
      if (!u && (u = this._whitespace.exec(n)) && (n = n.substr(u[0].length, n.length)), this._endOfFile.test(n)) return r && (this.comments && (p = this._comment.exec(n)) && a("comment", p[1], "", this._line, n.length), n = null, a("eof", "", "", this._line, 0)), this._input = n;
      const _ = this._line, y = n[0];
      let x = "", I = "", S = "", R = null, m = 0, v = false;
      switch (y) {
        case "^":
          if (n.length < 3) break;
          if (n[1] === "^") {
            if (this._previousMarker = "^^", n = n.substr(2), n[0] !== "<") {
              v = true;
              break;
            }
          } else {
            this._n3Mode && (m = 1, x = "^");
            break;
          }
        case "<":
          if (R = this._unescapedIri.exec(n)) x = "IRI", I = R[1];
          else if (R = this._iri.exec(n)) {
            if (I = this._unescape(R[1]), I === null || so.test(I)) return l(this);
            x = "IRI";
          } else n.length > 1 && n[1] === "<" ? (x = "<<", m = 2) : this._n3Mode && n.length > 1 && n[1] === "=" && (m = 2, this._isImpliedBy ? (x = "abbreviation", I = "<") : (x = "inverse", I = ">"));
          break;
        case ">":
          n.length > 1 && n[1] === ">" && (x = ">>", m = 2);
          break;
        case "_":
          ((R = this._blank.exec(n)) || r && (R = this._blank.exec(`${n} `))) && (x = "blank", S = "_", I = R[1]);
          break;
        case '"':
          if (R = this._simpleQuotedString.exec(n)) I = R[1];
          else if ({
            value: I,
            matchLength: m
          } = this._parseLiteral(n), I === null) return l(this);
          (R !== null || m !== 0) && (x = "literal", this._literalClosingPos = 0);
          break;
        case "'":
          if (!this._lineMode) {
            if (R = this._simpleApostropheString.exec(n)) I = R[1];
            else if ({
              value: I,
              matchLength: m
            } = this._parseLiteral(n), I === null) return l(this);
            (R !== null || m !== 0) && (x = "literal", this._literalClosingPos = 0);
          }
          break;
        case "?":
          this._n3Mode && (R = this._variable.exec(n)) && (x = "var", I = R[0]);
          break;
        case "@":
          this._previousMarker === "literal" && (R = this._langcode.exec(n)) ? (x = "langcode", I = R[1]) : (R = this._keyword.exec(n)) && (x = R[0]);
          break;
        case ".":
          if (n.length === 1 ? r : n[1] < "0" || n[1] > "9") {
            x = ".", m = 1;
            break;
          }
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "+":
        case "-":
          (R = this._number.exec(n) || r && (R = this._number.exec(`${n} `))) && (x = "literal", I = R[0], S = typeof R[1] == "string" ? Ht.double : typeof R[2] == "string" ? Ht.decimal : Ht.integer);
          break;
        case "B":
        case "b":
        case "p":
        case "P":
        case "G":
        case "g":
          (R = this._sparqlKeyword.exec(n)) ? x = R[0].toUpperCase() : v = true;
          break;
        case "f":
        case "t":
          (R = this._boolean.exec(n)) ? (x = "literal", I = R[0], S = Ht.boolean) : v = true;
          break;
        case "a":
          (R = this._shortPredicates.exec(n)) ? (x = "abbreviation", I = "a") : v = true;
          break;
        case "=":
          this._n3Mode && n.length > 1 && (x = "abbreviation", n[1] !== ">" ? (m = 1, I = "=") : (m = 2, I = ">"));
          break;
        case "!":
          if (!this._n3Mode) break;
        case ",":
        case ";":
        case "[":
        case "]":
        case "(":
        case ")":
        case "}":
          this._lineMode || (m = 1, x = y);
          break;
        case "{":
          !this._lineMode && n.length >= 2 && (n[1] === "|" ? (x = "{|", m = 2) : (x = y, m = 1));
          break;
        case "|":
          n.length >= 2 && n[1] === "}" && (x = "|}", m = 2);
          break;
        default:
          v = true;
      }
      if (v && ((this._previousMarker === "@prefix" || this._previousMarker === "PREFIX") && (R = this._prefix.exec(n)) ? (x = "prefix", I = R[1] || "") : ((R = this._prefixed.exec(n)) || r && (R = this._prefixed.exec(`${n} `))) && (x = "prefixed", S = R[1] || "", I = this._unescape(R[2]))), this._previousMarker === "^^") switch (x) {
        case "prefixed":
          x = "type";
          break;
        case "IRI":
          x = "typeIRI";
          break;
        default:
          x = "";
      }
      if (!x) return r || !/^'''|^"""/.test(n) && /\n|\r/.test(n) ? l(this) : this._input = n;
      const $ = m || R[0].length, B = a(x, I, S, _, $);
      this.previousToken = B, this._previousMarker = x, n = n.substr($, n.length);
    }
    function a(u, p, _, y, x) {
      const I = n ? i - n.length : i, S = I + x, R = {
        type: u,
        value: p,
        prefix: _,
        line: y,
        start: I,
        end: S
      };
      return e(null, R), R;
    }
    function l(u) {
      e(u._syntaxError(/^\S*/.exec(n)[0]));
    }
  }
  // ### `_unescape` replaces N3 escape codes by their corresponding characters
  _unescape(e) {
    let r = false;
    const n = e.replace(io, (i, a, l, u) => {
      if (typeof a == "string") return String.fromCharCode(Number.parseInt(a, 16));
      if (typeof l == "string") {
        let p = Number.parseInt(l, 16);
        return p <= 65535 ? String.fromCharCode(Number.parseInt(l, 16)) : String.fromCharCode(55296 + ((p -= 65536) >> 10), 56320 + (p & 1023));
      }
      return u in Bn ? Bn[u] : (r = true, "");
    });
    return r ? null : n;
  }
  // ### `_parseLiteral` parses a literal into an unescaped value
  _parseLiteral(e) {
    if (e.length >= 3) {
      const r = e.match(/^(?:"""|"|'''|'|)/)[0], n = r.length;
      let i = Math.max(this._literalClosingPos, n);
      for (; (i = e.indexOf(r, i)) > 0; ) {
        let a = 0;
        for (; e[i - a - 1] === "\\"; ) a++;
        if (a % 2 === 0) {
          const l = e.substring(n, i), u = l.split(/\r\n|\r|\n/).length - 1, p = i + n;
          if (n === 1 && u !== 0 || n === 3 && this._lineMode) break;
          return this._line += u, {
            value: this._unescape(l),
            matchLength: p
          };
        }
        i++;
      }
      this._literalClosingPos = e.length - n + 1;
    }
    return {
      value: "",
      matchLength: 0
    };
  }
  // ### `_syntaxError` creates a syntax error for the given issue
  _syntaxError(e) {
    this._input = null;
    const r = new Error(`Unexpected "${e}" on line ${this._line}.`);
    return r.context = {
      token: void 0,
      line: this._line,
      previousToken: this.previousToken
    }, r;
  }
  // ### Strips off any starting UTF BOM mark.
  _readStartingBom(e) {
    return e.startsWith("\uFEFF") ? e.substr(1) : e;
  }
  // ## Public methods
  // ### `tokenize` starts the transformation of an N3 document into an array of tokens.
  // The input can be a string or a stream.
  tokenize(e, r) {
    if (this._line = 1, typeof e == "string") {
      if (this._input = this._readStartingBom(e), typeof r == "function") queueMicrotask(() => this._tokenizeToEnd(r, true));
      else {
        const n = [];
        let i;
        if (this._tokenizeToEnd((a, l) => a ? i = a : n.push(l), true), i) throw i;
        return n;
      }
    } else this._pendingBuffer = null, typeof e.setEncoding == "function" && e.setEncoding("utf8"), e.on("data", (n) => {
      this._input !== null && n.length !== 0 && (this._pendingBuffer && (n = De.Buffer.concat([this._pendingBuffer, n]), this._pendingBuffer = null), n[n.length - 1] & 128 ? this._pendingBuffer = n : (typeof this._input > "u" ? this._input = this._readStartingBom(typeof n == "string" ? n : n.toString()) : this._input += n, this._tokenizeToEnd(r, false)));
    }), e.on("end", () => {
      typeof this._input == "string" && this._tokenizeToEnd(r, true);
    }), e.on("error", r);
  }
};
var {
  rdf: uo,
  xsd: at
} = pe;
var At;
var fo = 0;
var ft = {
  namedNode: Bi,
  blankNode: Fi,
  variable: Ci,
  literal: ki,
  defaultGraph: _o,
  quad: Hr,
  triple: Hr,
  fromTerm: Ct,
  fromQuad: Oi
};
var Le = class _Le {
  constructor(e) {
    this.id = e;
  }
  // ### The value of this term
  get value() {
    return this.id;
  }
  // ### Returns whether this object represents the same term as the other
  equals(e) {
    return e instanceof _Le ? this.id === e.id : !!e && this.termType === e.termType && this.value === e.value;
  }
  // ### Implement hashCode for Immutable.js, since we implement `equals`
  // https://immutable-js.com/docs/v4.0.0/ValueObject/#hashCode()
  hashCode() {
    return 0;
  }
  // ### Returns a plain object representation of this term
  toJSON() {
    return {
      termType: this.termType,
      value: this.value
    };
  }
};
var Li = class extends Le {
  // ### The term type of this term
  get termType() {
    return "NamedNode";
  }
};
var mt = class _mt extends Le {
  // ### The term type of this term
  get termType() {
    return "Literal";
  }
  // ### The text value of this literal
  get value() {
    return this.id.substring(1, this.id.lastIndexOf('"'));
  }
  // ### The language of this literal
  get language() {
    const e = this.id;
    let r = e.lastIndexOf('"') + 1;
    return r < e.length && e[r++] === "@" ? e.substr(r).toLowerCase() : "";
  }
  // ### The datatype IRI of this literal
  get datatype() {
    return new Li(this.datatypeString);
  }
  // ### The datatype string of this literal
  get datatypeString() {
    const e = this.id, r = e.lastIndexOf('"') + 1, n = r < e.length ? e[r] : "";
    return n === "^" ? e.substr(r + 2) : (
      // If "@" follows, return rdf:langString; xsd:string otherwise
      n !== "@" ? at.string : uo.langString
    );
  }
  // ### Returns whether this object represents the same term as the other
  equals(e) {
    return e instanceof _mt ? this.id === e.id : !!e && !!e.datatype && this.termType === e.termType && this.value === e.value && this.language === e.language && this.datatype.value === e.datatype.value;
  }
  toJSON() {
    return {
      termType: this.termType,
      value: this.value,
      language: this.language,
      datatype: {
        termType: "NamedNode",
        value: this.datatypeString
      }
    };
  }
};
var co = class extends Le {
  constructor(e) {
    super(`_:${e}`);
  }
  // ### The term type of this term
  get termType() {
    return "BlankNode";
  }
  // ### The name of this blank node
  get value() {
    return this.id.substr(2);
  }
};
var ho = class extends Le {
  constructor(e) {
    super(`?${e}`);
  }
  // ### The term type of this term
  get termType() {
    return "Variable";
  }
  // ### The name of this variable
  get value() {
    return this.id.substr(1);
  }
};
var po = class extends Le {
  constructor() {
    return super(""), At || this;
  }
  // ### The term type of this term
  get termType() {
    return "DefaultGraph";
  }
  // ### Returns whether this object represents the same term as the other
  equals(e) {
    return this === e || !!e && this.termType === e.termType;
  }
};
At = new po();
function kt(t, e, r) {
  if (e = e || ft, !t) return e.defaultGraph();
  switch (t[0]) {
    case "?":
      return e.variable(t.substr(1));
    case "_":
      return e.blankNode(t.substr(2));
    case '"':
      if (e === ft) return new mt(t);
      if (t[t.length - 1] === '"') return e.literal(t.substr(1, t.length - 2));
      const n = t.lastIndexOf('"', t.length - 1);
      return e.literal(t.substr(1, n - 1), t[n + 1] === "@" ? t.substr(n + 2) : e.namedNode(t.substr(n + 3)));
    case "[":
      t = JSON.parse(t);
      break;
    default:
      if (!r || !Array.isArray(t)) return e.namedNode(t);
  }
  return e.quad(kt(t[0], e, true), kt(t[1], e, true), kt(t[2], e, true), t[3] && kt(t[3], e, true));
}
function wt(t, e) {
  if (typeof t == "string") return t;
  if (t instanceof Le && t.termType !== "Quad") return t.id;
  if (!t) return At.id;
  switch (t.termType) {
    case "NamedNode":
      return t.value;
    case "BlankNode":
      return `_:${t.value}`;
    case "Variable":
      return `?${t.value}`;
    case "DefaultGraph":
      return "";
    case "Literal":
      return `"${t.value}"${t.language ? `@${t.language}` : t.datatype && t.datatype.value !== at.string ? `^^${t.datatype.value}` : ""}`;
    case "Quad":
      const r = [wt(t.subject, true), wt(t.predicate, true), wt(t.object, true)];
      return t.graph && t.graph.termType !== "DefaultGraph" && r.push(wt(t.graph, true)), e ? r : JSON.stringify(r);
    default:
      throw new Error(`Unexpected termType: ${t.termType}`);
  }
}
var $i = class extends Le {
  constructor(e, r, n, i) {
    super(""), this._subject = e, this._predicate = r, this._object = n, this._graph = i || At;
  }
  // ### The term type of this term
  get termType() {
    return "Quad";
  }
  get subject() {
    return this._subject;
  }
  get predicate() {
    return this._predicate;
  }
  get object() {
    return this._object;
  }
  get graph() {
    return this._graph;
  }
  // ### Returns a plain object representation of this quad
  toJSON() {
    return {
      termType: this.termType,
      subject: this._subject.toJSON(),
      predicate: this._predicate.toJSON(),
      object: this._object.toJSON(),
      graph: this._graph.toJSON()
    };
  }
  // ### Returns whether this object represents the same quad as the other
  equals(e) {
    return !!e && this._subject.equals(e.subject) && this._predicate.equals(e.predicate) && this._object.equals(e.object) && this._graph.equals(e.graph);
  }
};
function Bi(t) {
  return new Li(t);
}
function Fi(t) {
  return new co(t || `n3-${fo++}`);
}
function ki(t, e) {
  if (typeof e == "string") return new mt(`"${t}"@${e.toLowerCase()}`);
  let r = e ? e.value : "";
  return r === "" && (typeof t == "boolean" ? r = at.boolean : typeof t == "number" && (Number.isFinite(t) ? r = Number.isInteger(t) ? at.integer : at.double : (r = at.double, Number.isNaN(t) || (t = t > 0 ? "INF" : "-INF")))), r === "" || r === at.string ? new mt(`"${t}"`) : new mt(`"${t}"^^${r}`);
}
function Ci(t) {
  return new ho(t);
}
function _o() {
  return At;
}
function Hr(t, e, r, n) {
  return new $i(t, e, r, n);
}
function Ct(t) {
  if (t instanceof Le) return t;
  switch (t.termType) {
    case "NamedNode":
      return Bi(t.value);
    case "BlankNode":
      return Fi(t.value);
    case "Variable":
      return Ci(t.value);
    case "DefaultGraph":
      return At;
    case "Literal":
      return ki(t.value, t.language || t.datatype);
    case "Quad":
      return Oi(t);
    default:
      throw new Error(`Unexpected termType: ${t.termType}`);
  }
}
function Oi(t) {
  if (t instanceof $i) return t;
  if (t.termType !== "Quad") throw new Error(`Unexpected termType: ${t.termType}`);
  return Hr(Ct(t.subject), Ct(t.predicate), Ct(t.object), Ct(t.graph));
}
var Fn = 0;
var Mi = class {
  constructor(e) {
    this._contextStack = [], this._graph = null, e = e || {}, this._setBase(e.baseIRI), e.factory && Di(this, e.factory);
    const r = typeof e.format == "string" ? e.format.match(/\w*$/)[0].toLowerCase() : "", n = /turtle/.test(r), i = /trig/.test(r), a = /triple/.test(r), l = /quad/.test(r), u = this._n3Mode = /n3/.test(r), p = a || l;
    (this._supportsNamedGraphs = !(n || u)) || (this._readPredicateOrNamedGraph = this._readPredicate), this._supportsQuads = !(n || i || a || u), this._isImpliedBy = e.isImpliedBy, this._supportsRDFStar = r === "" || /star|\*$/.test(r), p && (this._resolveRelativeIRI = (_) => null), this._blankNodePrefix = typeof e.blankNodePrefix != "string" ? "" : e.blankNodePrefix.replace(/^(?!_:)/, "_:"), this._lexer = e.lexer || new lo({
      lineMode: p,
      n3: u,
      isImpliedBy: this._isImpliedBy
    }), this._explicitQuantifiers = !!e.explicitQuantifiers;
  }
  // ## Static class methods
  // ### `_resetBlankNodePrefix` restarts blank node prefix identification
  static _resetBlankNodePrefix() {
    Fn = 0;
  }
  // ## Private methods
  // ### `_setBase` sets the base IRI to resolve relative IRIs
  _setBase(e) {
    if (!e) this._base = "", this._basePath = "";
    else {
      const r = e.indexOf("#");
      r >= 0 && (e = e.substr(0, r)), this._base = e, this._basePath = e.indexOf("/") < 0 ? e : e.replace(/[^\/?]*(?:\?.*)?$/, ""), e = e.match(/^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i), this._baseRoot = e[0], this._baseScheme = e[1];
    }
  }
  // ### `_saveContext` stores the current parsing context
  // when entering a new scope (list, blank node, formula)
  _saveContext(e, r, n, i, a) {
    const l = this._n3Mode;
    this._contextStack.push({
      type: e,
      subject: n,
      predicate: i,
      object: a,
      graph: r,
      inverse: l ? this._inversePredicate : false,
      blankPrefix: l ? this._prefixes._ : "",
      quantified: l ? this._quantified : null
    }), l && (this._inversePredicate = false, this._prefixes._ = this._graph ? `${this._graph.value}.` : ".", this._quantified = Object.create(this._quantified));
  }
  // ### `_restoreContext` restores the parent context
  // when leaving a scope (list, blank node, formula)
  _restoreContext(e, r) {
    const n = this._contextStack.pop();
    if (!n || n.type !== e) return this._error(`Unexpected ${r.type}`, r);
    this._subject = n.subject, this._predicate = n.predicate, this._object = n.object, this._graph = n.graph, this._n3Mode && (this._inversePredicate = n.inverse, this._prefixes._ = n.blankPrefix, this._quantified = n.quantified);
  }
  // ### `_readInTopContext` reads a token when in the top context
  _readInTopContext(e) {
    switch (e.type) {
      case "eof":
        return this._graph !== null ? this._error("Unclosed graph", e) : (delete this._prefixes._, this._callback(null, null, this._prefixes));
      case "PREFIX":
        this._sparqlStyle = true;
      case "@prefix":
        return this._readPrefix;
      case "BASE":
        this._sparqlStyle = true;
      case "@base":
        return this._readBaseIRI;
      case "{":
        if (this._supportsNamedGraphs) return this._graph = "", this._subject = null, this._readSubject;
      case "GRAPH":
        if (this._supportsNamedGraphs) return this._readNamedGraphLabel;
      default:
        return this._readSubject(e);
    }
  }
  // ### `_readEntity` reads an IRI, prefixed name, blank node, or variable
  _readEntity(e, r) {
    let n;
    switch (e.type) {
      case "IRI":
      case "typeIRI":
        const i = this._resolveIRI(e.value);
        if (i === null) return this._error("Invalid IRI", e);
        n = this._factory.namedNode(i);
        break;
      case "type":
      case "prefixed":
        const a = this._prefixes[e.prefix];
        if (a === void 0) return this._error(`Undefined prefix "${e.prefix}:"`, e);
        n = this._factory.namedNode(a + e.value);
        break;
      case "blank":
        n = this._factory.blankNode(this._prefixes[e.prefix] + e.value);
        break;
      case "var":
        n = this._factory.variable(e.value.substr(1));
        break;
      default:
        return this._error(`Expected entity but got ${e.type}`, e);
    }
    return !r && this._n3Mode && n.id in this._quantified && (n = this._quantified[n.id]), n;
  }
  // ### `_readSubject` reads a quad's subject
  _readSubject(e) {
    switch (this._predicate = null, e.type) {
      case "[":
        return this._saveContext("blank", this._graph, this._subject = this._factory.blankNode(), null, null), this._readBlankNodeHead;
      case "(":
        return this._saveContext("list", this._graph, this.RDF_NIL, null, null), this._subject = null, this._readListItem;
      case "{":
        return this._n3Mode ? (this._saveContext("formula", this._graph, this._graph = this._factory.blankNode(), null, null), this._readSubject) : this._error("Unexpected graph", e);
      case "}":
        return this._readPunctuation(e);
      case "@forSome":
        return this._n3Mode ? (this._subject = null, this._predicate = this.N3_FORSOME, this._quantifier = "blankNode", this._readQuantifierList) : this._error('Unexpected "@forSome"', e);
      case "@forAll":
        return this._n3Mode ? (this._subject = null, this._predicate = this.N3_FORALL, this._quantifier = "variable", this._readQuantifierList) : this._error('Unexpected "@forAll"', e);
      case "literal":
        if (!this._n3Mode) return this._error("Unexpected literal", e);
        if (e.prefix.length === 0) return this._literalValue = e.value, this._completeSubjectLiteral;
        this._subject = this._factory.literal(e.value, this._factory.namedNode(e.prefix));
        break;
      case "<<":
        return this._supportsRDFStar ? (this._saveContext("<<", this._graph, null, null, null), this._graph = null, this._readSubject) : this._error("Unexpected RDF-star syntax", e);
      default:
        if ((this._subject = this._readEntity(e)) === void 0) return;
        if (this._n3Mode) return this._getPathReader(this._readPredicateOrNamedGraph);
    }
    return this._readPredicateOrNamedGraph;
  }
  // ### `_readPredicate` reads a quad's predicate
  _readPredicate(e) {
    const r = e.type;
    switch (r) {
      case "inverse":
        this._inversePredicate = true;
      case "abbreviation":
        this._predicate = this.ABBREVIATIONS[e.value];
        break;
      case ".":
      case "]":
      case "}":
        return this._predicate === null ? this._error(`Unexpected ${r}`, e) : (this._subject = null, r === "]" ? this._readBlankNodeTail(e) : this._readPunctuation(e));
      case ";":
        return this._predicate !== null ? this._readPredicate : this._error("Expected predicate but got ;", e);
      case "[":
        if (this._n3Mode) return this._saveContext("blank", this._graph, this._subject, this._subject = this._factory.blankNode(), null), this._readBlankNodeHead;
      case "blank":
        if (!this._n3Mode) return this._error("Disallowed blank node as predicate", e);
      default:
        if ((this._predicate = this._readEntity(e)) === void 0) return;
    }
    return this._readObject;
  }
  // ### `_readObject` reads a quad's object
  _readObject(e) {
    switch (e.type) {
      case "literal":
        if (e.prefix.length === 0) return this._literalValue = e.value, this._readDataTypeOrLang;
        this._object = this._factory.literal(e.value, this._factory.namedNode(e.prefix));
        break;
      case "[":
        return this._saveContext("blank", this._graph, this._subject, this._predicate, this._subject = this._factory.blankNode()), this._readBlankNodeHead;
      case "(":
        return this._saveContext("list", this._graph, this._subject, this._predicate, this.RDF_NIL), this._subject = null, this._readListItem;
      case "{":
        return this._n3Mode ? (this._saveContext("formula", this._graph, this._subject, this._predicate, this._graph = this._factory.blankNode()), this._readSubject) : this._error("Unexpected graph", e);
      case "<<":
        return this._supportsRDFStar ? (this._saveContext("<<", this._graph, this._subject, this._predicate, null), this._graph = null, this._readSubject) : this._error("Unexpected RDF-star syntax", e);
      default:
        if ((this._object = this._readEntity(e)) === void 0) return;
        if (this._n3Mode) return this._getPathReader(this._getContextEndReader());
    }
    return this._getContextEndReader();
  }
  // ### `_readPredicateOrNamedGraph` reads a quad's predicate, or a named graph
  _readPredicateOrNamedGraph(e) {
    return e.type === "{" ? this._readGraph(e) : this._readPredicate(e);
  }
  // ### `_readGraph` reads a graph
  _readGraph(e) {
    return e.type !== "{" ? this._error(`Expected graph but got ${e.type}`, e) : (this._graph = this._subject, this._subject = null, this._readSubject);
  }
  // ### `_readBlankNodeHead` reads the head of a blank node
  _readBlankNodeHead(e) {
    return e.type === "]" ? (this._subject = null, this._readBlankNodeTail(e)) : (this._predicate = null, this._readPredicate(e));
  }
  // ### `_readBlankNodeTail` reads the end of a blank node
  _readBlankNodeTail(e) {
    if (e.type !== "]") return this._readBlankNodePunctuation(e);
    this._subject !== null && this._emit(this._subject, this._predicate, this._object, this._graph);
    const r = this._predicate === null;
    return this._restoreContext("blank", e), this._object !== null ? this._getContextEndReader() : this._predicate !== null ? this._readObject : r ? this._readPredicateOrNamedGraph : this._readPredicateAfterBlank;
  }
  // ### `_readPredicateAfterBlank` reads a predicate after an anonymous blank node
  _readPredicateAfterBlank(e) {
    switch (e.type) {
      case ".":
      case "}":
        return this._subject = null, this._readPunctuation(e);
      default:
        return this._readPredicate(e);
    }
  }
  // ### `_readListItem` reads items from a list
  _readListItem(e) {
    let r = null, n = null, i = this._readListItem;
    const a = this._subject, l = this._contextStack, u = l[l.length - 1];
    switch (e.type) {
      case "[":
        this._saveContext("blank", this._graph, n = this._factory.blankNode(), this.RDF_FIRST, this._subject = r = this._factory.blankNode()), i = this._readBlankNodeHead;
        break;
      case "(":
        this._saveContext("list", this._graph, n = this._factory.blankNode(), this.RDF_FIRST, this.RDF_NIL), this._subject = null;
        break;
      case ")":
        if (this._restoreContext("list", e), l.length !== 0 && l[l.length - 1].type === "list" && this._emit(this._subject, this._predicate, this._object, this._graph), this._predicate === null) {
          if (i = this._readPredicate, this._subject === this.RDF_NIL) return i;
        } else if (i = this._getContextEndReader(), this._object === this.RDF_NIL) return i;
        n = this.RDF_NIL;
        break;
      case "literal":
        e.prefix.length === 0 ? (this._literalValue = e.value, i = this._readListItemDataTypeOrLang) : (r = this._factory.literal(e.value, this._factory.namedNode(e.prefix)), i = this._getContextEndReader());
        break;
      case "{":
        return this._n3Mode ? (this._saveContext("formula", this._graph, this._subject, this._predicate, this._graph = this._factory.blankNode()), this._readSubject) : this._error("Unexpected graph", e);
      default:
        if ((r = this._readEntity(e)) === void 0) return;
    }
    if (n === null && (this._subject = n = this._factory.blankNode()), a === null ? u.predicate === null ? u.subject = n : u.object = n : this._emit(a, this.RDF_REST, n, this._graph), r !== null) {
      if (this._n3Mode && (e.type === "IRI" || e.type === "prefixed")) return this._saveContext("item", this._graph, n, this.RDF_FIRST, r), this._subject = r, this._predicate = null, this._getPathReader(this._readListItem);
      this._emit(n, this.RDF_FIRST, r, this._graph);
    }
    return i;
  }
  // ### `_readDataTypeOrLang` reads an _optional_ datatype or language
  _readDataTypeOrLang(e) {
    return this._completeObjectLiteral(e, false);
  }
  // ### `_readListItemDataTypeOrLang` reads an _optional_ datatype or language in a list
  _readListItemDataTypeOrLang(e) {
    return this._completeObjectLiteral(e, true);
  }
  // ### `_completeLiteral` completes a literal with an optional datatype or language
  _completeLiteral(e) {
    let r = this._factory.literal(this._literalValue);
    switch (e.type) {
      case "type":
      case "typeIRI":
        const n = this._readEntity(e);
        if (n === void 0) return;
        r = this._factory.literal(this._literalValue, n), e = null;
        break;
      case "langcode":
        r = this._factory.literal(this._literalValue, e.value), e = null;
        break;
    }
    return {
      token: e,
      literal: r
    };
  }
  // Completes a literal in subject position
  _completeSubjectLiteral(e) {
    return this._subject = this._completeLiteral(e).literal, this._readPredicateOrNamedGraph;
  }
  // Completes a literal in object position
  _completeObjectLiteral(e, r) {
    const n = this._completeLiteral(e);
    if (n) return this._object = n.literal, r && this._emit(this._subject, this.RDF_FIRST, this._object, this._graph), n.token === null ? this._getContextEndReader() : (this._readCallback = this._getContextEndReader(), this._readCallback(n.token));
  }
  // ### `_readFormulaTail` reads the end of a formula
  _readFormulaTail(e) {
    return e.type !== "}" ? this._readPunctuation(e) : (this._subject !== null && this._emit(this._subject, this._predicate, this._object, this._graph), this._restoreContext("formula", e), this._object === null ? this._readPredicate : this._getContextEndReader());
  }
  // ### `_readPunctuation` reads punctuation between quads or quad parts
  _readPunctuation(e) {
    let r, n = this._graph;
    const i = this._subject, a = this._inversePredicate;
    switch (e.type) {
      case "}":
        if (this._graph === null) return this._error("Unexpected graph closing", e);
        if (this._n3Mode) return this._readFormulaTail(e);
        this._graph = null;
      case ".":
        this._subject = null, r = this._contextStack.length ? this._readSubject : this._readInTopContext, a && (this._inversePredicate = false);
        break;
      case ";":
        r = this._readPredicate;
        break;
      case ",":
        r = this._readObject;
        break;
      case "{|":
        if (!this._supportsRDFStar) return this._error("Unexpected RDF-star syntax", e);
        const l = this._predicate, u = this._object;
        this._subject = this._factory.quad(i, l, u, this.DEFAULTGRAPH), r = this._readPredicate;
        break;
      case "|}":
        if (this._subject.termType !== "Quad") return this._error("Unexpected asserted triple closing", e);
        this._subject = null, r = this._readPunctuation;
        break;
      default:
        if (this._supportsQuads && this._graph === null && (n = this._readEntity(e)) !== void 0) {
          r = this._readQuadPunctuation;
          break;
        }
        return this._error(`Expected punctuation to follow "${this._object.id}"`, e);
    }
    if (i !== null) {
      const l = this._predicate, u = this._object;
      a ? this._emit(u, l, i, n) : this._emit(i, l, u, n);
    }
    return r;
  }
  // ### `_readBlankNodePunctuation` reads punctuation in a blank node
  _readBlankNodePunctuation(e) {
    let r;
    switch (e.type) {
      case ";":
        r = this._readPredicate;
        break;
      case ",":
        r = this._readObject;
        break;
      default:
        return this._error(`Expected punctuation to follow "${this._object.id}"`, e);
    }
    return this._emit(this._subject, this._predicate, this._object, this._graph), r;
  }
  // ### `_readQuadPunctuation` reads punctuation after a quad
  _readQuadPunctuation(e) {
    return e.type !== "." ? this._error("Expected dot to follow quad", e) : this._readInTopContext;
  }
  // ### `_readPrefix` reads the prefix of a prefix declaration
  _readPrefix(e) {
    return e.type !== "prefix" ? this._error("Expected prefix to follow @prefix", e) : (this._prefix = e.value, this._readPrefixIRI);
  }
  // ### `_readPrefixIRI` reads the IRI of a prefix declaration
  _readPrefixIRI(e) {
    if (e.type !== "IRI") return this._error(`Expected IRI to follow prefix "${this._prefix}:"`, e);
    const r = this._readEntity(e);
    return this._prefixes[this._prefix] = r.value, this._prefixCallback(this._prefix, r), this._readDeclarationPunctuation;
  }
  // ### `_readBaseIRI` reads the IRI of a base declaration
  _readBaseIRI(e) {
    const r = e.type === "IRI" && this._resolveIRI(e.value);
    return r ? (this._setBase(r), this._readDeclarationPunctuation) : this._error("Expected valid IRI to follow base declaration", e);
  }
  // ### `_readNamedGraphLabel` reads the label of a named graph
  _readNamedGraphLabel(e) {
    switch (e.type) {
      case "IRI":
      case "blank":
      case "prefixed":
        return this._readSubject(e), this._readGraph;
      case "[":
        return this._readNamedGraphBlankLabel;
      default:
        return this._error("Invalid graph label", e);
    }
  }
  // ### `_readNamedGraphLabel` reads a blank node label of a named graph
  _readNamedGraphBlankLabel(e) {
    return e.type !== "]" ? this._error("Invalid graph label", e) : (this._subject = this._factory.blankNode(), this._readGraph);
  }
  // ### `_readDeclarationPunctuation` reads the punctuation of a declaration
  _readDeclarationPunctuation(e) {
    return this._sparqlStyle ? (this._sparqlStyle = false, this._readInTopContext(e)) : e.type !== "." ? this._error("Expected declaration to end with a dot", e) : this._readInTopContext;
  }
  // Reads a list of quantified symbols from a @forSome or @forAll statement
  _readQuantifierList(e) {
    let r;
    switch (e.type) {
      case "IRI":
      case "prefixed":
        if ((r = this._readEntity(e, true)) !== void 0) break;
      default:
        return this._error(`Unexpected ${e.type}`, e);
    }
    return this._explicitQuantifiers ? (this._subject === null ? this._emit(this._graph || this.DEFAULTGRAPH, this._predicate, this._subject = this._factory.blankNode(), this.QUANTIFIERS_GRAPH) : this._emit(this._subject, this.RDF_REST, this._subject = this._factory.blankNode(), this.QUANTIFIERS_GRAPH), this._emit(this._subject, this.RDF_FIRST, r, this.QUANTIFIERS_GRAPH)) : this._quantified[r.id] = this._factory[this._quantifier](this._factory.blankNode().value), this._readQuantifierPunctuation;
  }
  // Reads punctuation from a @forSome or @forAll statement
  _readQuantifierPunctuation(e) {
    return e.type === "," ? this._readQuantifierList : (this._explicitQuantifiers && (this._emit(this._subject, this.RDF_REST, this.RDF_NIL, this.QUANTIFIERS_GRAPH), this._subject = null), this._readCallback = this._getContextEndReader(), this._readCallback(e));
  }
  // ### `_getPathReader` reads a potential path and then resumes with the given function
  _getPathReader(e) {
    return this._afterPath = e, this._readPath;
  }
  // ### `_readPath` reads a potential path
  _readPath(e) {
    switch (e.type) {
      case "!":
        return this._readForwardPath;
      case "^":
        return this._readBackwardPath;
      default:
        const r = this._contextStack, n = r.length && r[r.length - 1];
        if (n && n.type === "item") {
          const i = this._subject;
          this._restoreContext("item", e), this._emit(this._subject, this.RDF_FIRST, i, this._graph);
        }
        return this._afterPath(e);
    }
  }
  // ### `_readForwardPath` reads a '!' path
  _readForwardPath(e) {
    let r, n;
    const i = this._factory.blankNode();
    if ((n = this._readEntity(e)) !== void 0) return this._predicate === null ? (r = this._subject, this._subject = i) : (r = this._object, this._object = i), this._emit(r, n, i, this._graph), this._readPath;
  }
  // ### `_readBackwardPath` reads a '^' path
  _readBackwardPath(e) {
    const r = this._factory.blankNode();
    let n, i;
    if ((n = this._readEntity(e)) !== void 0) return this._predicate === null ? (i = this._subject, this._subject = r) : (i = this._object, this._object = r), this._emit(r, n, i, this._graph), this._readPath;
  }
  // ### `_readRDFStarTailOrGraph` reads the graph of a nested RDF-star quad or the end of a nested RDF-star triple
  _readRDFStarTailOrGraph(e) {
    return e.type !== ">>" ? this._supportsQuads && this._graph === null && (this._graph = this._readEntity(e)) !== void 0 ? this._readRDFStarTail : this._error(`Expected >> to follow "${this._object.id}"`, e) : this._readRDFStarTail(e);
  }
  // ### `_readRDFStarTail` reads the end of a nested RDF-star triple
  _readRDFStarTail(e) {
    if (e.type !== ">>") return this._error(`Expected >> but got ${e.type}`, e);
    const r = this._factory.quad(this._subject, this._predicate, this._object, this._graph || this.DEFAULTGRAPH);
    return this._restoreContext("<<", e), this._subject === null ? (this._subject = r, this._readPredicate) : (this._object = r, this._getContextEndReader());
  }
  // ### `_getContextEndReader` gets the next reader function at the end of a context
  _getContextEndReader() {
    const e = this._contextStack;
    if (!e.length) return this._readPunctuation;
    switch (e[e.length - 1].type) {
      case "blank":
        return this._readBlankNodeTail;
      case "list":
        return this._readListItem;
      case "formula":
        return this._readFormulaTail;
      case "<<":
        return this._readRDFStarTailOrGraph;
    }
  }
  // ### `_emit` sends a quad through the callback
  _emit(e, r, n, i) {
    this._callback(null, this._factory.quad(e, r, n, i || this.DEFAULTGRAPH));
  }
  // ### `_error` emits an error message through the callback
  _error(e, r) {
    const n = new Error(`${e} on line ${r.line}.`);
    n.context = {
      token: r,
      line: r.line,
      previousToken: this._lexer.previousToken
    }, this._callback(n), this._callback = Qt;
  }
  // ### `_resolveIRI` resolves an IRI against the base path
  _resolveIRI(e) {
    return /^[a-z][a-z0-9+.-]*:/i.test(e) ? e : this._resolveRelativeIRI(e);
  }
  // ### `_resolveRelativeIRI` resolves an IRI against the base path,
  // assuming that a base path has been set and that the IRI is indeed relative
  _resolveRelativeIRI(e) {
    if (!e.length) return this._base;
    switch (e[0]) {
      case "#":
        return this._base + e;
      case "?":
        return this._base.replace(/(?:\?.*)?$/, e);
      case "/":
        return (e[1] === "/" ? this._baseScheme : this._baseRoot) + this._removeDotSegments(e);
      default:
        return /^[^/:]*:/.test(e) ? null : this._removeDotSegments(this._basePath + e);
    }
  }
  // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986
  _removeDotSegments(e) {
    if (!/(^|\/)\.\.?($|[/#?])/.test(e)) return e;
    const r = e.length;
    let n = "", i = -1, a = -1, l = 0, u = "/";
    for (; i < r; ) {
      switch (u) {
        case ":":
          if (a < 0 && e[++i] === "/" && e[++i] === "/") for (; (a = i + 1) < r && e[a] !== "/"; ) i = a;
          break;
        case "?":
        case "#":
          i = r;
          break;
        case "/":
          if (e[i + 1] === ".") switch (u = e[++i + 1], u) {
            case "/":
              n += e.substring(l, i - 1), l = i + 1;
              break;
            case void 0:
            case "?":
            case "#":
              return n + e.substring(l, i) + e.substr(i + 1);
            case ".":
              if (u = e[++i + 1], u === void 0 || u === "/" || u === "?" || u === "#") {
                if (n += e.substring(l, i - 2), (l = n.lastIndexOf("/")) >= a && (n = n.substr(0, l)), u !== "/") return `${n}/${e.substr(i + 1)}`;
                l = i + 1;
              }
          }
      }
      u = e[++i];
    }
    return n + e.substring(l);
  }
  // ## Public methods
  // ### `parse` parses the N3 input and emits each parsed quad through the onQuad callback.
  parse(e, r, n) {
    let i, a, l;
    if (r && (r.onQuad || r.onPrefix || r.onComment) ? (i = r.onQuad, a = r.onPrefix, l = r.onComment) : (i = r, a = n), this._readCallback = this._readInTopContext, this._sparqlStyle = false, this._prefixes = /* @__PURE__ */ Object.create(null), this._prefixes._ = this._blankNodePrefix ? this._blankNodePrefix.substr(2) : `b${Fn++}_`, this._prefixCallback = a || Qt, this._inversePredicate = false, this._quantified = /* @__PURE__ */ Object.create(null), !i) {
      const p = [];
      let _;
      if (this._callback = (y, x) => {
        y ? _ = y : x && p.push(x);
      }, this._lexer.tokenize(e).every((y) => this._readCallback = this._readCallback(y)), _) throw _;
      return p;
    }
    let u = (p, _) => {
      p !== null ? (this._callback(p), this._callback = Qt) : this._readCallback && (this._readCallback = this._readCallback(_));
    };
    l && (this._lexer.comments = true, u = (p, _) => {
      p !== null ? (this._callback(p), this._callback = Qt) : this._readCallback && (_.type === "comment" ? l(_.value) : this._readCallback = this._readCallback(_));
    }), this._callback = i, this._lexer.tokenize(e, u);
  }
};
function Qt() {
}
function Di(t, e) {
  t._factory = e, t.DEFAULTGRAPH = e.defaultGraph(), t.RDF_FIRST = e.namedNode(pe.rdf.first), t.RDF_REST = e.namedNode(pe.rdf.rest), t.RDF_NIL = e.namedNode(pe.rdf.nil), t.N3_FORALL = e.namedNode(pe.r.forAll), t.N3_FORSOME = e.namedNode(pe.r.forSome), t.ABBREVIATIONS = {
    a: e.namedNode(pe.rdf.type),
    "=": e.namedNode(pe.owl.sameAs),
    ">": e.namedNode(pe.log.implies),
    "<": e.namedNode(pe.log.isImpliedBy)
  }, t.QUANTIFIERS_GRAPH = e.namedNode("urn:n3:quantifiers");
}
Di(Mi.prototype, ft);
function Qr(t) {
  return !!t && t.termType === "DefaultGraph";
}
function Zt(t) {
  return t.replace(/[\]\/\(\)\*\+\?\.\\\$]/g, "\\$&");
}
var bo = /^:?[^:?#]*(?:[?#]|$)|^file:|^[^:]*:\/*[^?#]+?\/(?:\.\.?(?:\/|$)|\/)/i;
var kn = "./";
var yo = "../";
var Rr = "?";
var Cn = "#";
var un = class _un {
  constructor(e) {
    this.base = e, this._baseLength = 0, this._baseMatcher = null, this._pathReplacements = new Array(e.length + 1);
  }
  static supports(e) {
    return !bo.test(e);
  }
  _getBaseMatcher() {
    if (this._baseMatcher) return this._baseMatcher;
    if (!_un.supports(this.base)) return this._baseMatcher = /.^/;
    const e = /^[^:]*:\/*/.exec(this.base)[0], r = ["^", Zt(e)], n = [], i = [], a = /[^/?#]*([/?#])/y;
    let l, u = 0, p = 0, _ = a.lastIndex = e.length;
    for (; !u && !p && (l = a.exec(this.base)); ) l[1] === Cn ? p = a.lastIndex - 1 : (r.push(Zt(l[0]), "(?:"), n.push(")?"), l[1] !== Rr ? i.push(_ = a.lastIndex) : (u = _ = a.lastIndex, p = this.base.indexOf(Cn, u), this._pathReplacements[u] = Rr));
    for (let y = 0; y < i.length; y++) this._pathReplacements[i[y]] = yo.repeat(i.length - y - 1);
    return this._pathReplacements[i[i.length - 1]] = kn, this._baseLength = p > 0 ? p : this.base.length, r.push(Zt(this.base.substring(_, this._baseLength)), u ? "(?:#|$)" : "(?:[?#]|$)"), this._baseMatcher = new RegExp([...r, ...n].join(""));
  }
  toRelative(e) {
    const r = this._getBaseMatcher().exec(e);
    if (!r) return e;
    const n = r[0].length;
    if (n === this._baseLength && n === e.length) return "";
    const i = this._pathReplacements[n];
    if (i) {
      const a = e.substring(n);
      return i !== Rr && /(?:^|\/)(?:\/|..?(?:[/#?]|$))/.test(a) && // fast test
      /^(?:[^#?]*?\/)?(?:\/|\.\.?(?:[/#?]|$))/.test(a) ? e : i === kn && /^[^?#]/.test(a) ? a : i + a;
    }
    return e.substring(n - 1);
  }
};
var Lt = ft.defaultGraph();
var {
  rdf: go,
  xsd: yt
} = pe;
var On = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/;
var Mn = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g;
var wo = {
  "\\": "\\\\",
  '"': '\\"',
  "	": "\\t",
  "\n": "\\n",
  "\r": "\\r",
  "\b": "\\b",
  "\f": "\\f"
};
var $t = class extends Le {
  // Pretty-printed nodes are not equal to any other node
  // (e.g., [] does not equal [])
  equals(e) {
    return e === this;
  }
};
var Ui = class {
  constructor(e, r) {
    if (this._prefixRegex = /$0^/, e && typeof e.write != "function" && (r = e, e = null), r = r || {}, this._lists = r.lists, e) this._outputStream = e, this._endStream = r.end === void 0 ? true : !!r.end;
    else {
      let n = "";
      this._outputStream = {
        write(i, a, l) {
          n += i, l && l();
        },
        end: (i) => {
          i && i(null, n);
        }
      }, this._endStream = true;
    }
    this._subject = null, /triple|quad/i.test(r.format) ? (this._lineMode = true, this._writeQuad = this._writeQuadLine) : (this._lineMode = false, this._graph = Lt, this._prefixIRIs = /* @__PURE__ */ Object.create(null), r.prefixes && this.addPrefixes(r.prefixes), r.baseIRI && (this._baseIri = new un(r.baseIRI)));
  }
  // ## Private methods
  // ### Whether the current graph is the default graph
  get _inDefaultGraph() {
    return Lt.equals(this._graph);
  }
  // ### `_write` writes the argument to the output stream
  _write(e, r) {
    this._outputStream.write(e, "utf8", r);
  }
  // ### `_writeQuad` writes the quad to the output stream
  _writeQuad(e, r, n, i, a) {
    try {
      i.equals(this._graph) || (this._write((this._subject === null ? "" : this._inDefaultGraph ? `.
` : `
}
`) + (Lt.equals(i) ? "" : `${this._encodeIriOrBlank(i)} {
`)), this._graph = i, this._subject = null), e.equals(this._subject) ? r.equals(this._predicate) ? this._write(`, ${this._encodeObject(n)}`, a) : this._write(`;
    ${this._encodePredicate(this._predicate = r)} ${this._encodeObject(n)}`, a) : this._write(`${(this._subject === null ? "" : `.
`) + this._encodeSubject(this._subject = e)} ${this._encodePredicate(this._predicate = r)} ${this._encodeObject(n)}`, a);
    } catch (l) {
      a && a(l);
    }
  }
  // ### `_writeQuadLine` writes the quad to the output stream as a single line
  _writeQuadLine(e, r, n, i, a) {
    delete this._prefixMatch, this._write(this.quadToString(e, r, n, i), a);
  }
  // ### `quadToString` serializes a quad as a string
  quadToString(e, r, n, i) {
    return `${this._encodeSubject(e)} ${this._encodeIriOrBlank(r)} ${this._encodeObject(n)}${i && i.value ? ` ${this._encodeIriOrBlank(i)} .
` : ` .
`}`;
  }
  // ### `quadsToString` serializes an array of quads as a string
  quadsToString(e) {
    let r = "";
    for (const n of e) r += this.quadToString(n.subject, n.predicate, n.object, n.graph);
    return r;
  }
  // ### `_encodeSubject` represents a subject
  _encodeSubject(e) {
    return e.termType === "Quad" ? this._encodeQuad(e) : this._encodeIriOrBlank(e);
  }
  // ### `_encodeIriOrBlank` represents an IRI or blank node
  _encodeIriOrBlank(e) {
    if (e.termType !== "NamedNode") return this._lists && e.value in this._lists && (e = this.list(this._lists[e.value])), "id" in e ? e.id : `_:${e.value}`;
    let r = e.value;
    this._baseIri && (r = this._baseIri.toRelative(r)), On.test(r) && (r = r.replace(Mn, Dn));
    const n = this._prefixRegex.exec(r);
    return n ? n[1] ? this._prefixIRIs[n[1]] + n[2] : r : `<${r}>`;
  }
  // ### `_encodeLiteral` represents a literal
  _encodeLiteral(e) {
    let r = e.value;
    if (On.test(r) && (r = r.replace(Mn, Dn)), e.language) return `"${r}"@${e.language}`;
    if (this._lineMode) {
      if (e.datatype.value === yt.string) return `"${r}"`;
    } else switch (e.datatype.value) {
      case yt.string:
        return `"${r}"`;
      case yt.boolean:
        if (r === "true" || r === "false") return r;
        break;
      case yt.integer:
        if (/^[+-]?\d+$/.test(r)) return r;
        break;
      case yt.decimal:
        if (/^[+-]?\d*\.\d+$/.test(r)) return r;
        break;
      case yt.double:
        if (/^[+-]?(?:\d+\.\d*|\.?\d+)[eE][+-]?\d+$/.test(r)) return r;
        break;
    }
    return `"${r}"^^${this._encodeIriOrBlank(e.datatype)}`;
  }
  // ### `_encodePredicate` represents a predicate
  _encodePredicate(e) {
    return e.value === go.type ? "a" : this._encodeIriOrBlank(e);
  }
  // ### `_encodeObject` represents an object
  _encodeObject(e) {
    switch (e.termType) {
      case "Quad":
        return this._encodeQuad(e);
      case "Literal":
        return this._encodeLiteral(e);
      default:
        return this._encodeIriOrBlank(e);
    }
  }
  // ### `_encodeQuad` encodes an RDF-star quad
  _encodeQuad({
    subject: e,
    predicate: r,
    object: n,
    graph: i
  }) {
    return `<<${this._encodeSubject(e)} ${this._encodePredicate(r)} ${this._encodeObject(n)}${Qr(i) ? "" : ` ${this._encodeIriOrBlank(i)}`}>>`;
  }
  // ### `_blockedWrite` replaces `_write` after the writer has been closed
  _blockedWrite() {
    throw new Error("Cannot write because the writer has been closed.");
  }
  // ### `addQuad` adds the quad to the output stream
  addQuad(e, r, n, i, a) {
    n === void 0 ? this._writeQuad(e.subject, e.predicate, e.object, e.graph, r) : typeof i == "function" ? this._writeQuad(e, r, n, Lt, i) : this._writeQuad(e, r, n, i || Lt, a);
  }
  // ### `addQuads` adds the quads to the output stream
  addQuads(e) {
    for (let r = 0; r < e.length; r++) this.addQuad(e[r]);
  }
  // ### `addPrefix` adds the prefix to the output stream
  addPrefix(e, r, n) {
    const i = {};
    i[e] = r, this.addPrefixes(i, n);
  }
  // ### `addPrefixes` adds the prefixes to the output stream
  addPrefixes(e, r) {
    if (!this._prefixIRIs) return r && r();
    let n = false;
    for (let i in e) {
      let a = e[i];
      typeof a != "string" && (a = a.value), n = true, this._subject !== null && (this._write(this._inDefaultGraph ? `.
` : `
}
`), this._subject = null, this._graph = ""), this._prefixIRIs[a] = i += ":", this._write(`@prefix ${i} <${a}>.
`);
    }
    if (n) {
      let i = "", a = "";
      for (const l in this._prefixIRIs) i += i ? `|${l}` : l, a += (a ? "|" : "") + this._prefixIRIs[l];
      i = Zt(i), this._prefixRegex = new RegExp(`^(?:${a})[^/]*$|^(${i})([_a-zA-Z0-9][\\-_a-zA-Z0-9]*)$`);
    }
    this._write(n ? `
` : "", r);
  }
  // ### `blank` creates a blank node with the given content
  blank(e, r) {
    let n = e, i, a;
    switch (e === void 0 ? n = [] : e.termType ? n = [{
      predicate: e,
      object: r
    }] : "length" in e || (n = [e]), a = n.length) {
      case 0:
        return new $t("[]");
      case 1:
        if (i = n[0], !(i.object instanceof $t)) return new $t(`[ ${this._encodePredicate(i.predicate)} ${this._encodeObject(i.object)} ]`);
      default:
        let l = "[";
        for (let u = 0; u < a; u++) i = n[u], i.predicate.equals(e) ? l += `, ${this._encodeObject(i.object)}` : (l += `${(u ? `;
  ` : `
  `) + this._encodePredicate(i.predicate)} ${this._encodeObject(i.object)}`, e = i.predicate);
        return new $t(`${l}
]`);
    }
  }
  // ### `list` creates a list node with the given content
  list(e) {
    const r = e && e.length || 0, n = new Array(r);
    for (let i = 0; i < r; i++) n[i] = this._encodeObject(e[i]);
    return new $t(`(${n.join(" ")})`);
  }
  // ### `end` signals the end of the output stream
  end(e) {
    this._subject !== null && (this._write(this._inDefaultGraph ? `.
` : `
}
`), this._subject = null), this._write = this._blockedWrite;
    let r = e && ((n, i) => {
      r = null, e(n, i);
    });
    if (this._endStream) try {
      return this._outputStream.end(r);
    } catch {
    }
    r && r();
  }
};
function Dn(t) {
  let e = wo[t];
  return e === void 0 && (t.length === 1 ? (e = t.charCodeAt(0).toString(16), e = "\\u0000".substr(0, 6 - e.length) + e) : (e = ((t.charCodeAt(0) - 55296) * 1024 + t.charCodeAt(1) + 9216).toString(16), e = "\\U00000000".substr(0, 10 - e.length) + e)), e;
}
var Wi = {
  exports: {}
};
var Ar = {
  exports: {}
};
var mo = class extends Error {
  constructor(e) {
    if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
    let r = "";
    for (let n = 0; n < e.length; n++) r += `    ${e[n].stack}
`;
    super(r), this.name = "AggregateError", this.errors = e;
  }
};
var fe = {
  AggregateError: mo,
  ArrayIsArray(t) {
    return Array.isArray(t);
  },
  ArrayPrototypeIncludes(t, e) {
    return t.includes(e);
  },
  ArrayPrototypeIndexOf(t, e) {
    return t.indexOf(e);
  },
  ArrayPrototypeJoin(t, e) {
    return t.join(e);
  },
  ArrayPrototypeMap(t, e) {
    return t.map(e);
  },
  ArrayPrototypePop(t, e) {
    return t.pop(e);
  },
  ArrayPrototypePush(t, e) {
    return t.push(e);
  },
  ArrayPrototypeSlice(t, e, r) {
    return t.slice(e, r);
  },
  Error,
  FunctionPrototypeCall(t, e, ...r) {
    return t.call(e, ...r);
  },
  FunctionPrototypeSymbolHasInstance(t, e) {
    return Function.prototype[Symbol.hasInstance].call(t, e);
  },
  MathFloor: Math.floor,
  Number,
  NumberIsInteger: Number.isInteger,
  NumberIsNaN: Number.isNaN,
  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  NumberParseInt: Number.parseInt,
  ObjectDefineProperties(t, e) {
    return Object.defineProperties(t, e);
  },
  ObjectDefineProperty(t, e, r) {
    return Object.defineProperty(t, e, r);
  },
  ObjectGetOwnPropertyDescriptor(t, e) {
    return Object.getOwnPropertyDescriptor(t, e);
  },
  ObjectKeys(t) {
    return Object.keys(t);
  },
  ObjectSetPrototypeOf(t, e) {
    return Object.setPrototypeOf(t, e);
  },
  Promise,
  PromisePrototypeCatch(t, e) {
    return t.catch(e);
  },
  PromisePrototypeThen(t, e, r) {
    return t.then(e, r);
  },
  PromiseReject(t) {
    return Promise.reject(t);
  },
  PromiseResolve(t) {
    return Promise.resolve(t);
  },
  ReflectApply: Reflect.apply,
  RegExpPrototypeTest(t, e) {
    return t.test(e);
  },
  SafeSet: Set,
  String,
  StringPrototypeSlice(t, e, r) {
    return t.slice(e, r);
  },
  StringPrototypeToLowerCase(t) {
    return t.toLowerCase();
  },
  StringPrototypeToUpperCase(t) {
    return t.toUpperCase();
  },
  StringPrototypeTrim(t) {
    return t.trim();
  },
  Symbol,
  SymbolFor: Symbol.for,
  SymbolAsyncIterator: Symbol.asyncIterator,
  SymbolHasInstance: Symbol.hasInstance,
  SymbolIterator: Symbol.iterator,
  SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
  SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
  TypedArrayPrototypeSet(t, e, r) {
    return t.set(e, r);
  },
  Boolean,
  Uint8Array
};
var Gi = {
  exports: {}
};
var zi = {
  format(t, ...e) {
    return t.replace(/%([sdifj])/g, function(...[r, n]) {
      const i = e.shift();
      return n === "f" ? i.toFixed(6) : n === "j" ? JSON.stringify(i) : n === "s" && typeof i == "object" ? `${i.constructor !== Object ? i.constructor.name : ""} {}`.trim() : i.toString();
    });
  },
  inspect(t) {
    switch (typeof t) {
      case "string":
        if (t.includes("'")) if (t.includes('"')) {
          if (!t.includes("`") && !t.includes("${")) return `\`${t}\``;
        } else return `"${t}"`;
        return `'${t}'`;
      case "number":
        return isNaN(t) ? "NaN" : Object.is(t, -0) ? String(t) : t;
      case "bigint":
        return `${String(t)}n`;
      case "boolean":
      case "undefined":
        return String(t);
      case "object":
        return "{}";
    }
  }
};
var {
  format: xo,
  inspect: nr
} = zi;
var {
  AggregateError: Eo
} = fe;
var So = globalThis.AggregateError || Eo;
var Io = Symbol("kIsNodeError");
var Ro = [
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
];
var Ao = /^([A-Z][a-z0-9]*)+$/;
var To = "__node_internal_";
var ar = {};
function ut(t, e) {
  if (!t) throw new ar.ERR_INTERNAL_ASSERTION(e);
}
function Un(t) {
  let e = "", r = t.length;
  const n = t[0] === "-" ? 1 : 0;
  for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
  return `${t.slice(0, r)}${e}`;
}
function vo(t, e, r) {
  if (typeof e == "function") return ut(
    e.length <= r.length,
    // Default options do not count.
    `Code: ${t}; The provided arguments length (${r.length}) does not match the required ones (${e.length}).`
  ), e(...r);
  const n = (e.match(/%[dfijoOs]/g) || []).length;
  return ut(n === r.length, `Code: ${t}; The provided arguments length (${r.length}) does not match the required ones (${n}).`), r.length === 0 ? e : xo(e, ...r);
}
function be(t, e, r) {
  r || (r = Error);
  class n extends r {
    constructor(...a) {
      super(vo(t, e, a));
    }
    toString() {
      return `${this.name} [${t}]: ${this.message}`;
    }
  }
  Object.defineProperties(n.prototype, {
    name: {
      value: r.name,
      writable: true,
      enumerable: false,
      configurable: true
    },
    toString: {
      value() {
        return `${this.name} [${t}]: ${this.message}`;
      },
      writable: true,
      enumerable: false,
      configurable: true
    }
  }), n.prototype.code = t, n.prototype[Io] = true, ar[t] = n;
}
function Wn(t) {
  const e = To + t.name;
  return Object.defineProperty(t, "name", {
    value: e
  }), t;
}
function No(t, e) {
  if (t && e && t !== e) {
    if (Array.isArray(e.errors)) return e.errors.push(t), e;
    const r = new So([e, t], e.message);
    return r.code = e.code, r;
  }
  return t || e;
}
var Po = class extends Error {
  constructor(e = "The operation was aborted", r = void 0) {
    if (r !== void 0 && typeof r != "object") throw new ar.ERR_INVALID_ARG_TYPE("options", "Object", r);
    super(e, r), this.code = "ABORT_ERR", this.name = "AbortError";
  }
};
be("ERR_ASSERTION", "%s", Error);
be("ERR_INVALID_ARG_TYPE", (t, e, r) => {
  ut(typeof t == "string", "'name' must be a string"), Array.isArray(e) || (e = [e]);
  let n = "The ";
  t.endsWith(" argument") ? n += `${t} ` : n += `"${t}" ${t.includes(".") ? "property" : "argument"} `, n += "must be ";
  const i = [], a = [], l = [];
  for (const p of e) ut(typeof p == "string", "All expected entries have to be of type string"), Ro.includes(p) ? i.push(p.toLowerCase()) : Ao.test(p) ? a.push(p) : (ut(p !== "object", 'The value "object" should be written as "Object"'), l.push(p));
  if (a.length > 0) {
    const p = i.indexOf("object");
    p !== -1 && (i.splice(i, p, 1), a.push("Object"));
  }
  if (i.length > 0) {
    switch (i.length) {
      case 1:
        n += `of type ${i[0]}`;
        break;
      case 2:
        n += `one of type ${i[0]} or ${i[1]}`;
        break;
      default: {
        const p = i.pop();
        n += `one of type ${i.join(", ")}, or ${p}`;
      }
    }
    (a.length > 0 || l.length > 0) && (n += " or ");
  }
  if (a.length > 0) {
    switch (a.length) {
      case 1:
        n += `an instance of ${a[0]}`;
        break;
      case 2:
        n += `an instance of ${a[0]} or ${a[1]}`;
        break;
      default: {
        const p = a.pop();
        n += `an instance of ${a.join(", ")}, or ${p}`;
      }
    }
    l.length > 0 && (n += " or ");
  }
  switch (l.length) {
    case 0:
      break;
    case 1:
      l[0].toLowerCase() !== l[0] && (n += "an "), n += `${l[0]}`;
      break;
    case 2:
      n += `one of ${l[0]} or ${l[1]}`;
      break;
    default: {
      const p = l.pop();
      n += `one of ${l.join(", ")}, or ${p}`;
    }
  }
  if (r == null) n += `. Received ${r}`;
  else if (typeof r == "function" && r.name) n += `. Received function ${r.name}`;
  else if (typeof r == "object") {
    var u;
    if ((u = r.constructor) !== null && u !== void 0 && u.name) n += `. Received an instance of ${r.constructor.name}`;
    else {
      const p = nr(r, {
        depth: -1
      });
      n += `. Received ${p}`;
    }
  } else {
    let p = nr(r, {
      colors: false
    });
    p.length > 25 && (p = `${p.slice(0, 25)}...`), n += `. Received type ${typeof r} (${p})`;
  }
  return n;
}, TypeError);
be("ERR_INVALID_ARG_VALUE", (t, e, r = "is invalid") => {
  let n = nr(e);
  return n.length > 128 && (n = n.slice(0, 128) + "..."), `The ${t.includes(".") ? "property" : "argument"} '${t}' ${r}. Received ${n}`;
}, TypeError);
be("ERR_INVALID_RETURN_VALUE", (t, e, r) => {
  var n;
  const i = r != null && (n = r.constructor) !== null && n !== void 0 && n.name ? `instance of ${r.constructor.name}` : `type ${typeof r}`;
  return `Expected ${t} to be returned from the "${e}" function but got ${i}.`;
}, TypeError);
be("ERR_MISSING_ARGS", (...t) => {
  ut(t.length > 0, "At least one arg needs to be specified");
  let e;
  const r = t.length;
  switch (t = (Array.isArray(t) ? t : [t]).map((n) => `"${n}"`).join(" or "), r) {
    case 1:
      e += `The ${t[0]} argument`;
      break;
    case 2:
      e += `The ${t[0]} and ${t[1]} arguments`;
      break;
    default:
      {
        const n = t.pop();
        e += `The ${t.join(", ")}, and ${n} arguments`;
      }
      break;
  }
  return `${e} must be specified`;
}, TypeError);
be("ERR_OUT_OF_RANGE", (t, e, r) => {
  ut(e, 'Missing "range" argument');
  let n;
  if (Number.isInteger(r) && Math.abs(r) > 2 ** 32) n = Un(String(r));
  else if (typeof r == "bigint") {
    n = String(r);
    const i = BigInt(2) ** BigInt(32);
    (r > i || r < -i) && (n = Un(n)), n += "n";
  } else n = nr(r);
  return `The value of "${t}" is out of range. It must be ${e}. Received ${n}`;
}, RangeError);
be("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
be("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
be("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
be("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
be("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
be("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
be("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
be("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
be("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
be("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
be("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
var xe = {
  AbortError: Po,
  aggregateTwoErrors: Wn(No),
  hideStackFrames: Wn,
  codes: ar
};
var Bt = {
  exports: {}
};
var Gn;
function Ut() {
  if (Gn) return Bt.exports;
  Gn = 1;
  const {
    AbortController: t,
    AbortSignal: e
  } = typeof self < "u" ? self : typeof window < "u" ? window : (
    /* otherwise */
    void 0
  );
  return Bt.exports = t, Bt.exports.AbortSignal = e, Bt.exports.default = t, Bt.exports;
}
var fn = {
  exports: {}
};
var xt = typeof Reflect == "object" ? Reflect : null;
var zn = xt && typeof xt.apply == "function" ? xt.apply : function(e, r, n) {
  return Function.prototype.apply.call(e, r, n);
};
var Jt;
xt && typeof xt.ownKeys == "function" ? Jt = xt.ownKeys : Object.getOwnPropertySymbols ? Jt = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Jt = function(e) {
  return Object.getOwnPropertyNames(e);
};
function jo(t) {
  console && console.warn && console.warn(t);
}
var qi = Number.isNaN || function(e) {
  return e !== e;
};
function Y() {
  Y.init.call(this);
}
fn.exports = Y;
fn.exports.once = Fo;
Y.EventEmitter = Y;
Y.prototype._events = void 0;
Y.prototype._eventsCount = 0;
Y.prototype._maxListeners = void 0;
var qn = 10;
function lr(t) {
  if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Y, "defaultMaxListeners", {
  enumerable: true,
  get: function() {
    return qn;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || qi(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    qn = t;
  }
});
Y.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Y.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || qi(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Hi(t) {
  return t._maxListeners === void 0 ? Y.defaultMaxListeners : t._maxListeners;
}
Y.prototype.getMaxListeners = function() {
  return Hi(this);
};
Y.prototype.emit = function(e) {
  for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
  var i = e === "error", a = this._events;
  if (a !== void 0) i = i && a.error === void 0;
  else if (!i) return false;
  if (i) {
    var l;
    if (r.length > 0 && (l = r[0]), l instanceof Error) throw l;
    var u = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
    throw u.context = l, u;
  }
  var p = a[e];
  if (p === void 0) return false;
  if (typeof p == "function") zn(p, this, r);
  else for (var _ = p.length, y = Xi(p, _), n = 0; n < _; ++n) zn(y[n], this, r);
  return true;
};
function Qi(t, e, r, n) {
  var i, a, l;
  if (lr(r), a = t._events, a === void 0 ? (a = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (a.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), a = t._events), l = a[e]), l === void 0) l = a[e] = r, ++t._eventsCount;
  else if (typeof l == "function" ? l = a[e] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), i = Hi(t), i > 0 && l.length > i && !l.warned) {
    l.warned = true;
    var u = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = l.length, jo(u);
  }
  return t;
}
Y.prototype.addListener = function(e, r) {
  return Qi(this, e, r, false);
};
Y.prototype.on = Y.prototype.addListener;
Y.prototype.prependListener = function(e, r) {
  return Qi(this, e, r, true);
};
function Lo() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Vi(t, e, r) {
  var n = {
    fired: false,
    wrapFn: void 0,
    target: t,
    type: e,
    listener: r
  }, i = Lo.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
Y.prototype.once = function(e, r) {
  return lr(r), this.on(e, Vi(this, e, r)), this;
};
Y.prototype.prependOnceListener = function(e, r) {
  return lr(r), this.prependListener(e, Vi(this, e, r)), this;
};
Y.prototype.removeListener = function(e, r) {
  var n, i, a, l, u;
  if (lr(r), i = this._events, i === void 0) return this;
  if (n = i[e], n === void 0) return this;
  if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
  else if (typeof n != "function") {
    for (a = -1, l = n.length - 1; l >= 0; l--) if (n[l] === r || n[l].listener === r) {
      u = n[l].listener, a = l;
      break;
    }
    if (a < 0) return this;
    a === 0 ? n.shift() : $o(n, a), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, u || r);
  }
  return this;
};
Y.prototype.off = Y.prototype.removeListener;
Y.prototype.removeAllListeners = function(e) {
  var r, n, i;
  if (n = this._events, n === void 0) return this;
  if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var a = Object.keys(n), l;
    for (i = 0; i < a.length; ++i) l = a[i], l !== "removeListener" && this.removeAllListeners(l);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[e], typeof r == "function") this.removeListener(e, r);
  else if (r !== void 0) for (i = r.length - 1; i >= 0; i--) this.removeListener(e, r[i]);
  return this;
};
function Ki(t, e, r) {
  var n = t._events;
  if (n === void 0) return [];
  var i = n[e];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Bo(i) : Xi(i, i.length);
}
Y.prototype.listeners = function(e) {
  return Ki(this, e, true);
};
Y.prototype.rawListeners = function(e) {
  return Ki(this, e, false);
};
Y.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Yi.call(t, e);
};
Y.prototype.listenerCount = Yi;
function Yi(t) {
  var e = this._events;
  if (e !== void 0) {
    var r = e[t];
    if (typeof r == "function") return 1;
    if (r !== void 0) return r.length;
  }
  return 0;
}
Y.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Jt(this._events) : [];
};
function Xi(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
  return r;
}
function $o(t, e) {
  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
  t.pop();
}
function Bo(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
  return e;
}
function Fo(t, e) {
  return new Promise(function(r, n) {
    function i(l) {
      t.removeListener(e, a), n(l);
    }
    function a() {
      typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments));
    }
    Zi(t, e, a, {
      once: true
    }), e !== "error" && ko(t, i, {
      once: true
    });
  });
}
function ko(t, e, r) {
  typeof t.on == "function" && Zi(t, "error", e, r);
}
function Zi(t, e, r, n) {
  if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function") t.addEventListener(e, function i(a) {
    n.once && t.removeEventListener(e, i), r(a);
  });
  else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var ur = fn.exports;
(function(t) {
  const e = De, {
    format: r,
    inspect: n
  } = zi, {
    codes: {
      ERR_INVALID_ARG_TYPE: i
    }
  } = xe, {
    kResistStopPropagation: a,
    AggregateError: l,
    SymbolDispose: u
  } = fe, p = globalThis.AbortSignal || Ut().AbortSignal, _ = globalThis.AbortController || Ut().AbortController, y = Object.getPrototypeOf(function() {
    return __async(this, null, function* () {
    });
  }).constructor, x = globalThis.Blob || e.Blob, I = typeof x < "u" ? function(v) {
    return v instanceof x;
  } : function(v) {
    return false;
  }, S = (m, v) => {
    if (m !== void 0 && (m === null || typeof m != "object" || !("aborted" in m))) throw new i(v, "AbortSignal", m);
  }, R = (m, v) => {
    if (typeof m != "function") throw new i(v, "Function", m);
  };
  t.exports = {
    AggregateError: l,
    kEmptyObject: Object.freeze({}),
    once(m) {
      let v = false;
      return function(...$) {
        v || (v = true, m.apply(this, $));
      };
    },
    createDeferredPromise: function() {
      let m, v;
      return {
        promise: new Promise((B, A) => {
          m = B, v = A;
        }),
        resolve: m,
        reject: v
      };
    },
    promisify(m) {
      return new Promise((v, $) => {
        m((B, ...A) => B ? $(B) : v(...A));
      });
    },
    debuglog() {
      return function() {
      };
    },
    format: r,
    inspect: n,
    types: {
      isAsyncFunction(m) {
        return m instanceof y;
      },
      isArrayBufferView(m) {
        return ArrayBuffer.isView(m);
      }
    },
    isBlob: I,
    deprecate(m, v) {
      return m;
    },
    addAbortListener: ur.addAbortListener || function(v, $) {
      if (v === void 0) throw new i("signal", "AbortSignal", v);
      S(v, "signal"), R($, "listener");
      let B;
      return v.aborted ? queueMicrotask(() => $()) : (v.addEventListener("abort", $, {
        __proto__: null,
        once: true,
        [a]: true
      }), B = () => {
        v.removeEventListener("abort", $);
      }), {
        __proto__: null,
        [u]() {
          var A;
          (A = B) === null || A === void 0 || A();
        }
      };
    },
    AbortSignalAny: p.any || function(v) {
      if (v.length === 1) return v[0];
      const $ = new _(), B = () => $.abort();
      return v.forEach((A) => {
        S(A, "signals"), A.addEventListener("abort", B, {
          once: true
        });
      }), $.signal.addEventListener("abort", () => {
        v.forEach((A) => A.removeEventListener("abort", B));
      }, {
        once: true
      }), $.signal;
    }
  }, t.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
})(Gi);
var Ie = Gi.exports;
var cn = {};
var {
  ArrayIsArray: Ji,
  ArrayPrototypeIncludes: Co,
  ArrayPrototypeJoin: Oo,
  ArrayPrototypeMap: Mo,
  NumberIsInteger: dn,
  NumberMAX_SAFE_INTEGER: Do,
  NumberMIN_SAFE_INTEGER: Uo,
  ObjectPrototypeHasOwnProperty: Wo,
  String: Go
} = fe;
var {
  hideStackFrames: Pe,
  codes: {
    ERR_INVALID_ARG_TYPE: je,
    ERR_INVALID_ARG_VALUE: es,
    ERR_OUT_OF_RANGE: It
  }
} = xe;
var {
  normalizeEncoding: Gu
} = Ie;
var {
  isAsyncFunction: zo,
  isArrayBufferView: qo
} = Ie.types;
var Ho = Pe((t, e, r = Uo, n = Do) => {
  if (typeof t != "number") throw new je(e, "number", t);
  if (!dn(t)) throw new It(e, "an integer", t);
  if (t < r || t > n) throw new It(e, `>= ${r} && <= ${n}`, t);
});
Pe((t, e, r = -2147483648, n = 2147483647) => {
  if (typeof t != "number") throw new je(e, "number", t);
  if (!dn(t)) throw new It(e, "an integer", t);
  if (t < r || t > n) throw new It(e, `>= ${r} && <= ${n}`, t);
});
Pe((t, e, r = false) => {
  if (typeof t != "number") throw new je(e, "number", t);
  if (!dn(t)) throw new It(e, "an integer", t);
  const n = r ? 1 : 0, i = 4294967295;
  if (t < n || t > i) throw new It(e, `>= ${n} && <= ${i}`, t);
});
Pe((t, e, r) => {
  if (!Co(r, t)) {
    const i = "must be one of: " + Oo(Mo(r, (a) => typeof a == "string" ? `'${a}'` : Go(a)), ", ");
    throw new es(e, t, i);
  }
});
function Qo(t, e) {
  if (typeof t != "boolean") throw new je(e, "boolean", t);
}
function Tr(t, e, r) {
  return t == null || !Wo(t, e) ? r : t[e];
}
var Vo = Pe((t, e, r = null) => {
  const n = Tr(r, "allowArray", false), i = Tr(r, "allowFunction", false);
  if (!Tr(r, "nullable", false) && t === null || !n && Ji(t) || typeof t != "object" && (!i || typeof t != "function")) throw new je(e, "Object", t);
});
Pe((t, e) => {
  if (t != null && typeof t != "object" && typeof t != "function") throw new je(e, "a dictionary", t);
});
Pe((t, e, r = 0) => {
  if (!Ji(t)) throw new je(e, "Array", t);
  if (t.length < r) {
    const n = `must be longer than ${r}`;
    throw new es(e, t, n);
  }
});
Pe((t, e = "buffer") => {
  if (!qo(t)) throw new je(e, ["Buffer", "TypedArray", "DataView"], t);
});
var Ko = Pe((t, e) => {
  if (t !== void 0 && (t === null || typeof t != "object" || !("aborted" in t))) throw new je(e, "AbortSignal", t);
});
var Yo = Pe((t, e) => {
  if (typeof t != "function") throw new je(e, "Function", t);
});
Pe((t, e) => {
  if (typeof t != "function" || zo(t)) throw new je(e, "Function", t);
});
Pe((t, e) => {
  if (t !== void 0) throw new je(e, "undefined", t);
});
var Wt = {
  validateBoolean: Qo,
  validateFunction: Yo,
  validateInteger: Ho,
  validateObject: Vo,
  validateAbortSignal: Ko
};
var hn = {
  exports: {}
};
var ts = {
  exports: {}
};
var de = ts.exports = {};
var Fe;
var ke;
function Vr() {
  throw new Error("setTimeout has not been defined");
}
function Kr() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Fe = setTimeout : Fe = Vr;
  } catch {
    Fe = Vr;
  }
  try {
    typeof clearTimeout == "function" ? ke = clearTimeout : ke = Kr;
  } catch {
    ke = Kr;
  }
})();
function rs(t) {
  if (Fe === setTimeout) return setTimeout(t, 0);
  if ((Fe === Vr || !Fe) && setTimeout) return Fe = setTimeout, setTimeout(t, 0);
  try {
    return Fe(t, 0);
  } catch {
    try {
      return Fe.call(null, t, 0);
    } catch {
      return Fe.call(this, t, 0);
    }
  }
}
function Xo(t) {
  if (ke === clearTimeout) return clearTimeout(t);
  if ((ke === Kr || !ke) && clearTimeout) return ke = clearTimeout, clearTimeout(t);
  try {
    return ke(t);
  } catch {
    try {
      return ke.call(null, t);
    } catch {
      return ke.call(this, t);
    }
  }
}
var qe = [];
var Et = false;
var lt;
var er = -1;
function Zo() {
  !Et || !lt || (Et = false, lt.length ? qe = lt.concat(qe) : er = -1, qe.length && ns());
}
function ns() {
  if (!Et) {
    var t = rs(Zo);
    Et = true;
    for (var e = qe.length; e; ) {
      for (lt = qe, qe = []; ++er < e; ) lt && lt[er].run();
      er = -1, e = qe.length;
    }
    lt = null, Et = false, Xo(t);
  }
}
de.nextTick = function(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  qe.push(new is(t, e)), qe.length === 1 && !Et && rs(ns);
};
function is(t, e) {
  this.fun = t, this.array = e;
}
is.prototype.run = function() {
  this.fun.apply(null, this.array);
};
de.title = "browser";
de.browser = true;
de.env = {};
de.argv = [];
de.version = "";
de.versions = {};
function Ve() {
}
de.on = Ve;
de.addListener = Ve;
de.once = Ve;
de.off = Ve;
de.removeListener = Ve;
de.removeAllListeners = Ve;
de.emit = Ve;
de.prependListener = Ve;
de.prependOnceListener = Ve;
de.listeners = function(t) {
  return [];
};
de.binding = function(t) {
  throw new Error("process.binding is not supported");
};
de.cwd = function() {
  return "/";
};
de.chdir = function(t) {
  throw new Error("process.chdir is not supported");
};
de.umask = function() {
  return 0;
};
var ct = ts.exports;
var {
  SymbolAsyncIterator: Hn,
  SymbolIterator: Qn,
  SymbolFor: dt
} = fe;
var ss = dt("nodejs.stream.destroyed");
var Jo = dt("nodejs.stream.errored");
var Vn = dt("nodejs.stream.readable");
var Kn = dt("nodejs.stream.writable");
var ea = dt("nodejs.stream.disturbed");
var ta = dt("nodejs.webstream.isClosedPromise");
var ra = dt("nodejs.webstream.controllerErrorFunction");
function pn(t, e = false) {
  var r;
  return !!(t && typeof t.pipe == "function" && typeof t.on == "function" && (!e || typeof t.pause == "function" && typeof t.resume == "function") && (!t._writableState || ((r = t._readableState) === null || r === void 0 ? void 0 : r.readable) !== false) && // Duplex
  (!t._writableState || t._readableState));
}
function fr(t) {
  var e;
  return !!(t && typeof t.write == "function" && typeof t.on == "function" && (!t._readableState || ((e = t._writableState) === null || e === void 0 ? void 0 : e.writable) !== false));
}
function na(t) {
  return !!(t && typeof t.pipe == "function" && t._readableState && typeof t.on == "function" && typeof t.write == "function");
}
function Ue(t) {
  return t && (t._readableState || t._writableState || typeof t.write == "function" && typeof t.on == "function" || typeof t.pipe == "function" && typeof t.on == "function");
}
function os(t) {
  return !!(t && !Ue(t) && typeof t.pipeThrough == "function" && typeof t.getReader == "function" && typeof t.cancel == "function");
}
function as(t) {
  return !!(t && !Ue(t) && typeof t.getWriter == "function" && typeof t.abort == "function");
}
function ls(t) {
  return !!(t && !Ue(t) && typeof t.readable == "object" && typeof t.writable == "object");
}
function ia(t) {
  return os(t) || as(t) || ls(t);
}
function sa(t, e) {
  return t == null ? false : e === true ? typeof t[Hn] == "function" : e === false ? typeof t[Qn] == "function" : typeof t[Hn] == "function" || typeof t[Qn] == "function";
}
function cr(t) {
  if (!Ue(t)) return null;
  const e = t._writableState, r = t._readableState, n = e || r;
  return !!(t.destroyed || t[ss] || n != null && n.destroyed);
}
function oa(t) {
  if (!fr(t)) return null;
  if (t.writableEnded === true) return true;
  const e = t._writableState;
  return e != null && e.errored ? false : typeof (e == null ? void 0 : e.ended) != "boolean" ? null : e.ended;
}
function aa(t, e) {
  if (!fr(t)) return null;
  if (t.writableFinished === true) return true;
  const r = t._writableState;
  return r != null && r.errored ? false : typeof (r == null ? void 0 : r.finished) != "boolean" ? null : !!(r.finished || e === false && r.ended === true && r.length === 0);
}
function us(t, e) {
  if (!pn(t)) return null;
  const r = t._readableState;
  return r != null && r.errored ? false : typeof (r == null ? void 0 : r.endEmitted) != "boolean" ? null : !!(r.endEmitted || e === false && r.ended === true && r.length === 0);
}
function fs(t) {
  return t && t[Vn] != null ? t[Vn] : typeof (t == null ? void 0 : t.readable) != "boolean" ? null : cr(t) ? false : pn(t) && t.readable && !us(t);
}
function cs(t) {
  return t && t[Kn] != null ? t[Kn] : typeof (t == null ? void 0 : t.writable) != "boolean" ? null : cr(t) ? false : fr(t) && t.writable && !oa(t);
}
function la(t, e) {
  return Ue(t) ? cr(t) ? true : !((e == null ? void 0 : e.readable) !== false && fs(t) || (e == null ? void 0 : e.writable) !== false && cs(t)) : null;
}
function ua(t) {
  var e, r;
  return Ue(t) ? t.writableErrored ? t.writableErrored : (e = (r = t._writableState) === null || r === void 0 ? void 0 : r.errored) !== null && e !== void 0 ? e : null : null;
}
function fa(t) {
  var e, r;
  return Ue(t) ? t.readableErrored ? t.readableErrored : (e = (r = t._readableState) === null || r === void 0 ? void 0 : r.errored) !== null && e !== void 0 ? e : null : null;
}
function ca(t) {
  if (!Ue(t)) return null;
  if (typeof t.closed == "boolean") return t.closed;
  const e = t._writableState, r = t._readableState;
  return typeof (e == null ? void 0 : e.closed) == "boolean" || typeof (r == null ? void 0 : r.closed) == "boolean" ? (e == null ? void 0 : e.closed) || (r == null ? void 0 : r.closed) : typeof t._closed == "boolean" && ds(t) ? t._closed : null;
}
function ds(t) {
  return typeof t._closed == "boolean" && typeof t._defaultKeepAlive == "boolean" && typeof t._removedConnection == "boolean" && typeof t._removedContLen == "boolean";
}
function da(t) {
  return typeof t._sent100 == "boolean" && ds(t);
}
function ha(t) {
  var e;
  return typeof t._consuming == "boolean" && typeof t._dumped == "boolean" && ((e = t.req) === null || e === void 0 ? void 0 : e.upgradeOrConnect) === void 0;
}
function pa(t) {
  if (!Ue(t)) return null;
  const e = t._writableState, r = t._readableState, n = e || r;
  return !n && da(t) || !!(n && n.autoDestroy && n.emitClose && n.closed === false);
}
function _a(t) {
  var e;
  return !!(t && ((e = t[ea]) !== null && e !== void 0 ? e : t.readableDidRead || t.readableAborted));
}
function ba(t) {
  var e, r, n, i, a, l, u, p, _, y;
  return !!(t && ((e = (r = (n = (i = (a = (l = t[Jo]) !== null && l !== void 0 ? l : t.readableErrored) !== null && a !== void 0 ? a : t.writableErrored) !== null && i !== void 0 ? i : (u = t._readableState) === null || u === void 0 ? void 0 : u.errorEmitted) !== null && n !== void 0 ? n : (p = t._writableState) === null || p === void 0 ? void 0 : p.errorEmitted) !== null && r !== void 0 ? r : (_ = t._readableState) === null || _ === void 0 ? void 0 : _.errored) !== null && e !== void 0 ? e : !((y = t._writableState) === null || y === void 0) && y.errored));
}
var Ke = {
  isDestroyed: cr,
  kIsDestroyed: ss,
  isDisturbed: _a,
  isErrored: ba,
  isReadable: fs,
  kIsClosedPromise: ta,
  kControllerErrorFunction: ra,
  isClosed: ca,
  isDuplexNodeStream: na,
  isFinished: la,
  isIterable: sa,
  isReadableNodeStream: pn,
  isReadableStream: os,
  isReadableFinished: us,
  isReadableErrored: fa,
  isNodeStream: Ue,
  isWebStream: ia,
  isWritable: cs,
  isWritableNodeStream: fr,
  isWritableStream: as,
  isWritableFinished: aa,
  isWritableErrored: ua,
  isServerRequest: ha,
  willEmitClose: pa,
  isTransformStream: ls
};
var Je = ct;
var {
  AbortError: hs,
  codes: ya
} = xe;
var {
  ERR_INVALID_ARG_TYPE: ga,
  ERR_STREAM_PREMATURE_CLOSE: Yn
} = ya;
var {
  kEmptyObject: Yr,
  once: Xr
} = Ie;
var {
  validateAbortSignal: wa,
  validateFunction: ma,
  validateObject: xa,
  validateBoolean: Ea
} = Wt;
var {
  Promise: Sa,
  PromisePrototypeThen: Ia,
  SymbolDispose: ps
} = fe;
var {
  isClosed: Ra,
  isReadable: Xn,
  isReadableNodeStream: vr,
  isReadableStream: Aa,
  isReadableFinished: Zn,
  isReadableErrored: Jn,
  isWritable: ei,
  isWritableNodeStream: ti,
  isWritableStream: Ta,
  isWritableFinished: ri,
  isWritableErrored: ni,
  isNodeStream: va,
  willEmitClose: Na,
  kIsClosedPromise: Pa
} = Ke;
var St;
function ja(t) {
  return t.setHeader && typeof t.abort == "function";
}
var Zr = () => {
};
function _s(t, e, r) {
  var n, i;
  if (arguments.length === 2 ? (r = e, e = Yr) : e == null ? e = Yr : xa(e, "options"), ma(r, "callback"), wa(e.signal, "options.signal"), r = Xr(r), Aa(t) || Ta(t)) return La(t, e, r);
  if (!va(t)) throw new ga("stream", ["ReadableStream", "WritableStream", "Stream"], t);
  const a = (n = e.readable) !== null && n !== void 0 ? n : vr(t), l = (i = e.writable) !== null && i !== void 0 ? i : ti(t), u = t._writableState, p = t._readableState, _ = () => {
    t.writable || I();
  };
  let y = Na(t) && vr(t) === a && ti(t) === l, x = ri(t, false);
  const I = () => {
    x = true, t.destroyed && (y = false), !(y && (!t.readable || a)) && (!a || S) && r.call(t);
  };
  let S = Zn(t, false);
  const R = () => {
    S = true, t.destroyed && (y = false), !(y && (!t.writable || l)) && (!l || x) && r.call(t);
  }, m = (U) => {
    r.call(t, U);
  };
  let v = Ra(t);
  const $ = () => {
    v = true;
    const U = ni(t) || Jn(t);
    if (U && typeof U != "boolean") return r.call(t, U);
    if (a && !S && vr(t, true) && !Zn(t, false)) return r.call(t, new Yn());
    if (l && !x && !ri(t, false)) return r.call(t, new Yn());
    r.call(t);
  }, B = () => {
    v = true;
    const U = ni(t) || Jn(t);
    if (U && typeof U != "boolean") return r.call(t, U);
    r.call(t);
  }, A = () => {
    t.req.on("finish", I);
  };
  ja(t) ? (t.on("complete", I), y || t.on("abort", $), t.req ? A() : t.on("request", A)) : l && !u && (t.on("end", _), t.on("close", _)), !y && typeof t.aborted == "boolean" && t.on("aborted", $), t.on("end", R), t.on("finish", I), e.error !== false && t.on("error", m), t.on("close", $), v ? Je.nextTick($) : u != null && u.errorEmitted || p != null && p.errorEmitted ? y || Je.nextTick(B) : (!a && (!y || Xn(t)) && (x || ei(t) === false) || !l && (!y || ei(t)) && (S || Xn(t) === false) || p && t.req && t.aborted) && Je.nextTick(B);
  const z = () => {
    r = Zr, t.removeListener("aborted", $), t.removeListener("complete", I), t.removeListener("abort", $), t.removeListener("request", A), t.req && t.req.removeListener("finish", I), t.removeListener("end", _), t.removeListener("close", _), t.removeListener("finish", I), t.removeListener("end", R), t.removeListener("error", m), t.removeListener("close", $);
  };
  if (e.signal && !v) {
    const U = () => {
      const se = r;
      z(), se.call(t, new hs(void 0, {
        cause: e.signal.reason
      }));
    };
    if (e.signal.aborted) Je.nextTick(U);
    else {
      St = St || Ie.addAbortListener;
      const se = St(e.signal, U), me = r;
      r = Xr((...J) => {
        se[ps](), me.apply(t, J);
      });
    }
  }
  return z;
}
function La(t, e, r) {
  let n = false, i = Zr;
  if (e.signal) if (i = () => {
    n = true, r.call(t, new hs(void 0, {
      cause: e.signal.reason
    }));
  }, e.signal.aborted) Je.nextTick(i);
  else {
    St = St || Ie.addAbortListener;
    const l = St(e.signal, i), u = r;
    r = Xr((...p) => {
      l[ps](), u.apply(t, p);
    });
  }
  const a = (...l) => {
    n || Je.nextTick(() => r.apply(t, l));
  };
  return Ia(t[Pa].promise, a, a), Zr;
}
function $a(t, e) {
  var r;
  let n = false;
  return e === null && (e = Yr), (r = e) !== null && r !== void 0 && r.cleanup && (Ea(e.cleanup, "cleanup"), n = e.cleanup), new Sa((i, a) => {
    const l = _s(t, e, (u) => {
      n && l(), u ? a(u) : i();
    });
  });
}
hn.exports = _s;
hn.exports.finished = $a;
var tt = hn.exports;
var Oe = ct;
var {
  aggregateTwoErrors: Ba,
  codes: {
    ERR_MULTIPLE_CALLBACK: Fa
  },
  AbortError: ka
} = xe;
var {
  Symbol: bs
} = fe;
var {
  kIsDestroyed: Ca,
  isDestroyed: Oa,
  isFinished: Ma,
  isServerRequest: Da
} = Ke;
var ys = bs("kDestroy");
var Jr = bs("kConstruct");
function gs(t, e, r) {
  t && (t.stack, e && !e.errored && (e.errored = t), r && !r.errored && (r.errored = t));
}
function Ua(t, e) {
  const r = this._readableState, n = this._writableState, i = n || r;
  return n != null && n.destroyed || r != null && r.destroyed ? (typeof e == "function" && e(), this) : (gs(t, n, r), n && (n.destroyed = true), r && (r.destroyed = true), i.constructed ? ii(this, t, e) : this.once(ys, function(a) {
    ii(this, Ba(a, t), e);
  }), this);
}
function ii(t, e, r) {
  let n = false;
  function i(a) {
    if (n) return;
    n = true;
    const l = t._readableState, u = t._writableState;
    gs(a, u, l), u && (u.closed = true), l && (l.closed = true), typeof r == "function" && r(a), a ? Oe.nextTick(Wa, t, a) : Oe.nextTick(ws, t);
  }
  try {
    t._destroy(e || null, i);
  } catch (a) {
    i(a);
  }
}
function Wa(t, e) {
  en(t, e), ws(t);
}
function ws(t) {
  const e = t._readableState, r = t._writableState;
  r && (r.closeEmitted = true), e && (e.closeEmitted = true), (r != null && r.emitClose || e != null && e.emitClose) && t.emit("close");
}
function en(t, e) {
  const r = t._readableState, n = t._writableState;
  n != null && n.errorEmitted || r != null && r.errorEmitted || (n && (n.errorEmitted = true), r && (r.errorEmitted = true), t.emit("error", e));
}
function Ga() {
  const t = this._readableState, e = this._writableState;
  t && (t.constructed = true, t.closed = false, t.closeEmitted = false, t.destroyed = false, t.errored = null, t.errorEmitted = false, t.reading = false, t.ended = t.readable === false, t.endEmitted = t.readable === false), e && (e.constructed = true, e.destroyed = false, e.closed = false, e.closeEmitted = false, e.errored = null, e.errorEmitted = false, e.finalCalled = false, e.prefinished = false, e.ended = e.writable === false, e.ending = e.writable === false, e.finished = e.writable === false);
}
function tn(t, e, r) {
  const n = t._readableState, i = t._writableState;
  if (i != null && i.destroyed || n != null && n.destroyed) return this;
  n != null && n.autoDestroy || i != null && i.autoDestroy ? t.destroy(e) : e && (e.stack, i && !i.errored && (i.errored = e), n && !n.errored && (n.errored = e), r ? Oe.nextTick(en, t, e) : en(t, e));
}
function za(t, e) {
  if (typeof t._construct != "function") return;
  const r = t._readableState, n = t._writableState;
  r && (r.constructed = false), n && (n.constructed = false), t.once(Jr, e), !(t.listenerCount(Jr) > 1) && Oe.nextTick(qa, t);
}
function qa(t) {
  let e = false;
  function r(n) {
    if (e) {
      tn(t, n ?? new Fa());
      return;
    }
    e = true;
    const i = t._readableState, a = t._writableState, l = a || i;
    i && (i.constructed = true), a && (a.constructed = true), l.destroyed ? t.emit(ys, n) : n ? tn(t, n, true) : Oe.nextTick(Ha, t);
  }
  try {
    t._construct((n) => {
      Oe.nextTick(r, n);
    });
  } catch (n) {
    Oe.nextTick(r, n);
  }
}
function Ha(t) {
  t.emit(Jr);
}
function si(t) {
  return (t == null ? void 0 : t.setHeader) && typeof t.abort == "function";
}
function ms(t) {
  t.emit("close");
}
function Qa(t, e) {
  t.emit("error", e), Oe.nextTick(ms, t);
}
function Va(t, e) {
  !t || Oa(t) || (!e && !Ma(t) && (e = new ka()), Da(t) ? (t.socket = null, t.destroy(e)) : si(t) ? t.abort() : si(t.req) ? t.req.abort() : typeof t.destroy == "function" ? t.destroy(e) : typeof t.close == "function" ? t.close() : e ? Oe.nextTick(Qa, t, e) : Oe.nextTick(ms, t), t.destroyed || (t[Ca] = true));
}
var Tt = {
  construct: za,
  destroyer: Va,
  destroy: Ua,
  undestroy: Ga,
  errorOrDestroy: tn
};
var {
  ArrayIsArray: Ka,
  ObjectSetPrototypeOf: xs
} = fe;
var {
  EventEmitter: dr
} = ur;
function hr(t) {
  dr.call(this, t);
}
xs(hr.prototype, dr.prototype);
xs(hr, dr);
hr.prototype.pipe = function(t, e) {
  const r = this;
  function n(y) {
    t.writable && t.write(y) === false && r.pause && r.pause();
  }
  r.on("data", n);
  function i() {
    r.readable && r.resume && r.resume();
  }
  t.on("drain", i), !t._isStdio && (!e || e.end !== false) && (r.on("end", l), r.on("close", u));
  let a = false;
  function l() {
    a || (a = true, t.end());
  }
  function u() {
    a || (a = true, typeof t.destroy == "function" && t.destroy());
  }
  function p(y) {
    _(), dr.listenerCount(this, "error") === 0 && this.emit("error", y);
  }
  rn(r, "error", p), rn(t, "error", p);
  function _() {
    r.removeListener("data", n), t.removeListener("drain", i), r.removeListener("end", l), r.removeListener("close", u), r.removeListener("error", p), t.removeListener("error", p), r.removeListener("end", _), r.removeListener("close", _), t.removeListener("close", _);
  }
  return r.on("end", _), r.on("close", _), t.on("close", _), t.emit("pipe", r), t;
};
function rn(t, e, r) {
  if (typeof t.prependListener == "function") return t.prependListener(e, r);
  !t._events || !t._events[e] ? t.on(e, r) : Ka(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]];
}
var _n = {
  Stream: hr,
  prependListener: rn
};
var Es = {
  exports: {}
};
(function(t) {
  const {
    SymbolDispose: e
  } = fe, {
    AbortError: r,
    codes: n
  } = xe, {
    isNodeStream: i,
    isWebStream: a,
    kControllerErrorFunction: l
  } = Ke, u = tt, {
    ERR_INVALID_ARG_TYPE: p
  } = n;
  let _;
  const y = (x, I) => {
    if (typeof x != "object" || !("aborted" in x)) throw new p(I, "AbortSignal", x);
  };
  t.exports.addAbortSignal = function(I, S) {
    if (y(I, "signal"), !i(S) && !a(S)) throw new p("stream", ["ReadableStream", "WritableStream", "Stream"], S);
    return t.exports.addAbortSignalNoValidate(I, S);
  }, t.exports.addAbortSignalNoValidate = function(x, I) {
    if (typeof x != "object" || !("aborted" in x)) return I;
    const S = i(I) ? () => {
      I.destroy(new r(void 0, {
        cause: x.reason
      }));
    } : () => {
      I[l](new r(void 0, {
        cause: x.reason
      }));
    };
    if (x.aborted) S();
    else {
      _ = _ || Ie.addAbortListener;
      const R = _(x, S);
      u(I, R[e]);
    }
    return I;
  };
})(Es);
var pr = Es.exports;
var {
  StringPrototypeSlice: oi,
  SymbolIterator: Ya,
  TypedArrayPrototypeSet: Vt,
  Uint8Array: Xa
} = fe;
var {
  Buffer: Nr
} = De;
var {
  inspect: Za
} = Ie;
var Ja = class {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  push(e) {
    const r = {
      data: e,
      next: null
    };
    this.length > 0 ? this.tail.next = r : this.head = r, this.tail = r, ++this.length;
  }
  unshift(e) {
    const r = {
      data: e,
      next: this.head
    };
    this.length === 0 && (this.tail = r), this.head = r, ++this.length;
  }
  shift() {
    if (this.length === 0) return;
    const e = this.head.data;
    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
  }
  clear() {
    this.head = this.tail = null, this.length = 0;
  }
  join(e) {
    if (this.length === 0) return "";
    let r = this.head, n = "" + r.data;
    for (; (r = r.next) !== null; ) n += e + r.data;
    return n;
  }
  concat(e) {
    if (this.length === 0) return Nr.alloc(0);
    const r = Nr.allocUnsafe(e >>> 0);
    let n = this.head, i = 0;
    for (; n; ) Vt(r, n.data, i), i += n.data.length, n = n.next;
    return r;
  }
  // Consumes a specified amount of bytes or characters from the buffered data.
  consume(e, r) {
    const n = this.head.data;
    if (e < n.length) {
      const i = n.slice(0, e);
      return this.head.data = n.slice(e), i;
    }
    return e === n.length ? this.shift() : r ? this._getString(e) : this._getBuffer(e);
  }
  first() {
    return this.head.data;
  }
  *[Ya]() {
    for (let e = this.head; e; e = e.next) yield e.data;
  }
  // Consumes a specified amount of characters from the buffered data.
  _getString(e) {
    let r = "", n = this.head, i = 0;
    do {
      const a = n.data;
      if (e > a.length) r += a, e -= a.length;
      else {
        e === a.length ? (r += a, ++i, n.next ? this.head = n.next : this.head = this.tail = null) : (r += oi(a, 0, e), this.head = n, n.data = oi(a, e));
        break;
      }
      ++i;
    } while ((n = n.next) !== null);
    return this.length -= i, r;
  }
  // Consumes a specified amount of bytes from the buffered data.
  _getBuffer(e) {
    const r = Nr.allocUnsafe(e), n = e;
    let i = this.head, a = 0;
    do {
      const l = i.data;
      if (e > l.length) Vt(r, l, n - e), e -= l.length;
      else {
        e === l.length ? (Vt(r, l, n - e), ++a, i.next ? this.head = i.next : this.head = this.tail = null) : (Vt(r, new Xa(l.buffer, l.byteOffset, e), n - e), this.head = i, i.data = l.slice(e));
        break;
      }
      ++a;
    } while ((i = i.next) !== null);
    return this.length -= a, r;
  }
  // Make sure the linked list only shows the minimal necessary information.
  [Symbol.for("nodejs.util.inspect.custom")](e, r) {
    return Za(this, __spreadProps(__spreadValues({}, r), {
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: false
    }));
  }
};
var {
  MathFloor: el,
  NumberIsInteger: tl
} = fe;
var {
  validateInteger: rl
} = Wt;
var {
  ERR_INVALID_ARG_VALUE: nl
} = xe.codes;
var Ss = 16 * 1024;
var Is = 16;
function il(t, e, r) {
  return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
}
function Rs(t) {
  return t ? Is : Ss;
}
function sl(t, e) {
  rl(e, "value", 0), t ? Is = e : Ss = e;
}
function ol(t, e, r, n) {
  const i = il(e, n, r);
  if (i != null) {
    if (!tl(i) || i < 0) {
      const a = n ? `options.${r}` : "options.highWaterMark";
      throw new nl(a, i);
    }
    return el(i);
  }
  return Rs(t.objectMode);
}
var _r = {
  getHighWaterMark: ol,
  getDefaultHighWaterMark: Rs,
  setDefaultHighWaterMark: sl
};
var As = {};
var nn = {
  exports: {}
};
(function(t, e) {
  var r = De, n = r.Buffer;
  function i(l, u) {
    for (var p in l) u[p] = l[p];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? t.exports = r : (i(r, e), e.Buffer = a);
  function a(l, u, p) {
    return n(l, u, p);
  }
  a.prototype = Object.create(n.prototype), i(n, a), a.from = function(l, u, p) {
    if (typeof l == "number") throw new TypeError("Argument must not be a number");
    return n(l, u, p);
  }, a.alloc = function(l, u, p) {
    if (typeof l != "number") throw new TypeError("Argument must be a number");
    var _ = n(l);
    return u !== void 0 ? typeof p == "string" ? _.fill(u, p) : _.fill(u) : _.fill(0), _;
  }, a.allocUnsafe = function(l) {
    if (typeof l != "number") throw new TypeError("Argument must be a number");
    return n(l);
  }, a.allocUnsafeSlow = function(l) {
    if (typeof l != "number") throw new TypeError("Argument must be a number");
    return r.SlowBuffer(l);
  };
})(nn, nn.exports);
var al = nn.exports;
var bn = al.Buffer;
var ai = bn.isEncoding || function(t) {
  switch (t = "" + t, t && t.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true;
    default:
      return false;
  }
};
function ll(t) {
  if (!t) return "utf8";
  for (var e; ; ) switch (t) {
    case "utf8":
    case "utf-8":
      return "utf8";
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return "utf16le";
    case "latin1":
    case "binary":
      return "latin1";
    case "base64":
    case "ascii":
    case "hex":
      return t;
    default:
      if (e) return;
      t = ("" + t).toLowerCase(), e = true;
  }
}
function ul(t) {
  var e = ll(t);
  if (typeof e != "string" && (bn.isEncoding === ai || !ai(t))) throw new Error("Unknown encoding: " + t);
  return e || t;
}
As.StringDecoder = Gt;
function Gt(t) {
  this.encoding = ul(t);
  var e;
  switch (this.encoding) {
    case "utf16le":
      this.text = _l, this.end = bl, e = 4;
      break;
    case "utf8":
      this.fillLast = dl, e = 4;
      break;
    case "base64":
      this.text = yl, this.end = gl, e = 3;
      break;
    default:
      this.write = wl, this.end = ml;
      return;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = bn.allocUnsafe(e);
}
Gt.prototype.write = function(t) {
  if (t.length === 0) return "";
  var e, r;
  if (this.lastNeed) {
    if (e = this.fillLast(t), e === void 0) return "";
    r = this.lastNeed, this.lastNeed = 0;
  } else r = 0;
  return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || "";
};
Gt.prototype.end = pl;
Gt.prototype.text = hl;
Gt.prototype.fillLast = function(t) {
  if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
};
function Pr(t) {
  return t <= 127 ? 0 : t >> 5 === 6 ? 2 : t >> 4 === 14 ? 3 : t >> 3 === 30 ? 4 : t >> 6 === 2 ? -1 : -2;
}
function fl(t, e, r) {
  var n = e.length - 1;
  if (n < r) return 0;
  var i = Pr(e[n]);
  return i >= 0 ? (i > 0 && (t.lastNeed = i - 1), i) : --n < r || i === -2 ? 0 : (i = Pr(e[n]), i >= 0 ? (i > 0 && (t.lastNeed = i - 2), i) : --n < r || i === -2 ? 0 : (i = Pr(e[n]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : t.lastNeed = i - 3), i) : 0));
}
function cl(t, e, r) {
  if ((e[0] & 192) !== 128) return t.lastNeed = 0, "�";
  if (t.lastNeed > 1 && e.length > 1) {
    if ((e[1] & 192) !== 128) return t.lastNeed = 1, "�";
    if (t.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128) return t.lastNeed = 2, "�";
  }
}
function dl(t) {
  var e = this.lastTotal - this.lastNeed, r = cl(this, t);
  if (r !== void 0) return r;
  if (this.lastNeed <= t.length) return t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  t.copy(this.lastChar, e, 0, t.length), this.lastNeed -= t.length;
}
function hl(t, e) {
  var r = fl(this, t, e);
  if (!this.lastNeed) return t.toString("utf8", e);
  this.lastTotal = r;
  var n = t.length - (r - this.lastNeed);
  return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
}
function pl(t) {
  var e = t && t.length ? this.write(t) : "";
  return this.lastNeed ? e + "�" : e;
}
function _l(t, e) {
  if ((t.length - e) % 2 === 0) {
    var r = t.toString("utf16le", e);
    if (r) {
      var n = r.charCodeAt(r.length - 1);
      if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], r.slice(0, -1);
    }
    return r;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1);
}
function bl(t) {
  var e = t && t.length ? this.write(t) : "";
  if (this.lastNeed) {
    var r = this.lastTotal - this.lastNeed;
    return e + this.lastChar.toString("utf16le", 0, r);
  }
  return e;
}
function yl(t, e) {
  var r = (t.length - e) % 3;
  return r === 0 ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r));
}
function gl(t) {
  var e = t && t.length ? this.write(t) : "";
  return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
}
function wl(t) {
  return t.toString(this.encoding);
}
function ml(t) {
  return t && t.length ? this.write(t) : "";
}
var li = ct;
var {
  PromisePrototypeThen: xl,
  SymbolAsyncIterator: ui,
  SymbolIterator: fi
} = fe;
var {
  Buffer: El
} = De;
var {
  ERR_INVALID_ARG_TYPE: Sl,
  ERR_STREAM_NULL_VALUES: Il
} = xe.codes;
function Rl(t, e, r) {
  let n;
  if (typeof e == "string" || e instanceof El) return new t(__spreadProps(__spreadValues({
    objectMode: true
  }, r), {
    read() {
      this.push(e), this.push(null);
    }
  }));
  let i;
  if (e && e[ui]) i = true, n = e[ui]();
  else if (e && e[fi]) i = false, n = e[fi]();
  else throw new Sl("iterable", ["Iterable"], e);
  const a = new t(__spreadValues({
    objectMode: true,
    highWaterMark: 1
  }, r));
  let l = false;
  a._read = function() {
    l || (l = true, p());
  }, a._destroy = function(_, y) {
    xl(
      u(_),
      () => li.nextTick(y, _),
      // nextTick is here in case cb throws
      (x) => li.nextTick(y, x || _)
    );
  };
  function u(_) {
    return __async(this, null, function* () {
      const y = _ != null, x = typeof n.throw == "function";
      if (y && x) {
        const {
          value: I,
          done: S
        } = yield n.throw(_);
        if (yield I, S) return;
      }
      if (typeof n.return == "function") {
        const {
          value: I
        } = yield n.return();
        yield I;
      }
    });
  }
  function p() {
    return __async(this, null, function* () {
      for (; ; ) {
        try {
          const {
            value: _,
            done: y
          } = i ? yield n.next() : n.next();
          if (y) a.push(null);
          else {
            const x = _ && typeof _.then == "function" ? yield _ : _;
            if (x === null) throw l = false, new Il();
            if (a.push(x)) continue;
            l = false;
          }
        } catch (_) {
          a.destroy(_);
        }
        break;
      }
    });
  }
  return a;
}
var Ts = Rl;
var jr;
var ci;
function br() {
  if (ci) return jr;
  ci = 1;
  const t = ct, {
    ArrayPrototypeIndexOf: e,
    NumberIsInteger: r,
    NumberIsNaN: n,
    NumberParseInt: i,
    ObjectDefineProperties: a,
    ObjectKeys: l,
    ObjectSetPrototypeOf: u,
    Promise: p,
    SafeSet: _,
    SymbolAsyncDispose: y,
    SymbolAsyncIterator: x,
    Symbol: I
  } = fe;
  jr = O, O.ReadableState = Ee;
  const {
    EventEmitter: S
  } = ur, {
    Stream: R,
    prependListener: m
  } = _n, {
    Buffer: v
  } = De, {
    addAbortSignal: $
  } = pr, B = tt;
  let A = Ie.debuglog("stream", (c) => {
    A = c;
  });
  const z = Ja, U = Tt, {
    getHighWaterMark: se,
    getDefaultHighWaterMark: me
  } = _r, {
    aggregateTwoErrors: J,
    codes: {
      ERR_INVALID_ARG_TYPE: oe,
      ERR_METHOD_NOT_IMPLEMENTED: ye,
      ERR_OUT_OF_RANGE: ge,
      ERR_STREAM_PUSH_AFTER_EOF: H,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: P
    },
    AbortError: V
  } = xe, {
    validateObject: G
  } = Wt, q = I("kPaused"), {
    StringDecoder: ae
  } = As, le = Ts;
  u(O.prototype, R.prototype), u(O, R);
  const te = () => {
  }, {
    errorOrDestroy: ue
  } = U, D = 1, re = 2, M = 4, he = 8, Re = 16, Ye = 32, We = 64, Ae = 128, Ge = 256, _t = 512, rt = 1024, Xe = 2048, g = 4096, w = 8192, N = 16384, C = 32768, F = 65536, X = 1 << 17, ee = 1 << 18;
  function K(c) {
    return {
      enumerable: false,
      get() {
        return (this.state & c) !== 0;
      },
      set(h) {
        h ? this.state |= c : this.state &= ~c;
      }
    };
  }
  a(Ee.prototype, {
    objectMode: K(D),
    ended: K(re),
    endEmitted: K(M),
    reading: K(he),
    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    constructed: K(Re),
    // A flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    sync: K(Ye),
    // Whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    needReadable: K(We),
    emittedReadable: K(Ae),
    readableListening: K(Ge),
    resumeScheduled: K(_t),
    // True if the error was already emitted and should not be thrown again.
    errorEmitted: K(rt),
    emitClose: K(Xe),
    autoDestroy: K(g),
    // Has it been destroyed.
    destroyed: K(w),
    // Indicates whether the stream has finished destroying.
    closed: K(N),
    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    closeEmitted: K(C),
    multiAwaitDrain: K(F),
    // If true, a maybeReadMore has been scheduled.
    readingMore: K(X),
    dataEmitted: K(ee)
  });
  function Ee(c, h, j) {
    typeof j != "boolean" && (j = h instanceof He()), this.state = Xe | g | Re | Ye, c && c.objectMode && (this.state |= D), j && c && c.readableObjectMode && (this.state |= D), this.highWaterMark = c ? se(this, c, "readableHighWaterMark", j) : me(false), this.buffer = new z(), this.length = 0, this.pipes = [], this.flowing = null, this[q] = null, c && c.emitClose === false && (this.state &= -2049), c && c.autoDestroy === false && (this.state &= -4097), this.errored = null, this.defaultEncoding = c && c.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, c && c.encoding && (this.decoder = new ae(c.encoding), this.encoding = c.encoding);
  }
  function O(c) {
    if (!(this instanceof O)) return new O(c);
    const h = this instanceof He();
    this._readableState = new Ee(c, this, h), c && (typeof c.read == "function" && (this._read = c.read), typeof c.destroy == "function" && (this._destroy = c.destroy), typeof c.construct == "function" && (this._construct = c.construct), c.signal && !h && $(c.signal, this)), R.call(this, c), U.construct(this, () => {
      this._readableState.needReadable && b(this, this._readableState);
    });
  }
  O.prototype.destroy = U.destroy, O.prototype._undestroy = U.undestroy, O.prototype._destroy = function(c, h) {
    h(c);
  }, O.prototype[S.captureRejectionSymbol] = function(c) {
    this.destroy(c);
  }, O.prototype[y] = function() {
    let c;
    return this.destroyed || (c = this.readableEnded ? null : new V(), this.destroy(c)), new p((h, j) => B(this, (L) => L && L !== c ? j(L) : h(null)));
  }, O.prototype.push = function(c, h) {
    return Te(this, c, h, false);
  }, O.prototype.unshift = function(c, h) {
    return Te(this, c, h, true);
  };
  function Te(c, h, j, L) {
    A("readableAddChunk", h);
    const k = c._readableState;
    let we;
    if ((k.state & D) === 0 && (typeof h == "string" ? (j = j || k.defaultEncoding, k.encoding !== j && (L && k.encoding ? h = v.from(h, j).toString(k.encoding) : (h = v.from(h, j), j = ""))) : h instanceof v ? j = "" : R._isUint8Array(h) ? (h = R._uint8ArrayToBuffer(h), j = "") : h != null && (we = new oe("chunk", ["string", "Buffer", "Uint8Array"], h))), we) ue(c, we);
    else if (h === null) k.state &= -9, s(c, k);
    else if ((k.state & D) !== 0 || h && h.length > 0) {
      if (L) {
        if ((k.state & M) !== 0) ue(c, new P());
        else {
          if (k.destroyed || k.errored) return false;
          vt(c, k, h, true);
        }
      } else if (k.ended) ue(c, new H());
      else {
        if (k.destroyed || k.errored) return false;
        k.state &= -9, k.decoder && !j ? (h = k.decoder.write(h), k.objectMode || h.length !== 0 ? vt(c, k, h, false) : b(c, k)) : vt(c, k, h, false);
      }
    } else L || (k.state &= -9, b(c, k));
    return !k.ended && (k.length < k.highWaterMark || k.length === 0);
  }
  function vt(c, h, j, L) {
    h.flowing && h.length === 0 && !h.sync && c.listenerCount("data") > 0 ? ((h.state & F) !== 0 ? h.awaitDrainWriters.clear() : h.awaitDrainWriters = null, h.dataEmitted = true, c.emit("data", j)) : (h.length += h.objectMode ? 1 : j.length, L ? h.buffer.unshift(j) : h.buffer.push(j), (h.state & We) !== 0 && o(c)), b(c, h);
  }
  O.prototype.isPaused = function() {
    const c = this._readableState;
    return c[q] === true || c.flowing === false;
  }, O.prototype.setEncoding = function(c) {
    const h = new ae(c);
    this._readableState.decoder = h, this._readableState.encoding = this._readableState.decoder.encoding;
    const j = this._readableState.buffer;
    let L = "";
    for (const k of j) L += h.write(k);
    return j.clear(), L !== "" && j.push(L), this._readableState.length = L.length, this;
  };
  const $e = 1073741824;
  function gr(c) {
    if (c > $e) throw new ge("size", "<= 1GiB", c);
    return c--, c |= c >>> 1, c |= c >>> 2, c |= c >>> 4, c |= c >>> 8, c |= c >>> 16, c++, c;
  }
  function f(c, h) {
    return c <= 0 || h.length === 0 && h.ended ? 0 : (h.state & D) !== 0 ? 1 : n(c) ? h.flowing && h.length ? h.buffer.first().length : h.length : c <= h.length ? c : h.ended ? h.length : 0;
  }
  O.prototype.read = function(c) {
    A("read", c), c === void 0 ? c = NaN : r(c) || (c = i(c, 10));
    const h = this._readableState, j = c;
    if (c > h.highWaterMark && (h.highWaterMark = gr(c)), c !== 0 && (h.state &= -129), c === 0 && h.needReadable && ((h.highWaterMark !== 0 ? h.length >= h.highWaterMark : h.length > 0) || h.ended)) return A("read: emitReadable", h.length, h.ended), h.length === 0 && h.ended ? wr(this) : o(this), null;
    if (c = f(c, h), c === 0 && h.ended) return h.length === 0 && wr(this), null;
    let L = (h.state & We) !== 0;
    if (A("need readable", L), (h.length === 0 || h.length - c < h.highWaterMark) && (L = true, A("length less than watermark", L)), h.ended || h.reading || h.destroyed || h.errored || !h.constructed) L = false, A("reading, ended or constructing", L);
    else if (L) {
      A("do read"), h.state |= he | Ye, h.length === 0 && (h.state |= We);
      try {
        this._read(h.highWaterMark);
      } catch (we) {
        ue(this, we);
      }
      h.state &= -33, h.reading || (c = f(j, h));
    }
    let k;
    return c > 0 ? k = An(c, h) : k = null, k === null ? (h.needReadable = h.length <= h.highWaterMark, c = 0) : (h.length -= c, h.multiAwaitDrain ? h.awaitDrainWriters.clear() : h.awaitDrainWriters = null), h.length === 0 && (h.ended || (h.needReadable = true), j !== c && h.ended && wr(this)), k !== null && !h.errorEmitted && !h.closeEmitted && (h.dataEmitted = true, this.emit("data", k)), k;
  };
  function s(c, h) {
    if (A("onEofChunk"), !h.ended) {
      if (h.decoder) {
        const j = h.decoder.end();
        j && j.length && (h.buffer.push(j), h.length += h.objectMode ? 1 : j.length);
      }
      h.ended = true, h.sync ? o(c) : (h.needReadable = false, h.emittedReadable = true, d(c));
    }
  }
  function o(c) {
    const h = c._readableState;
    A("emitReadable", h.needReadable, h.emittedReadable), h.needReadable = false, h.emittedReadable || (A("emitReadable", h.flowing), h.emittedReadable = true, t.nextTick(d, c));
  }
  function d(c) {
    const h = c._readableState;
    A("emitReadable_", h.destroyed, h.length, h.ended), !h.destroyed && !h.errored && (h.length || h.ended) && (c.emit("readable"), h.emittedReadable = false), h.needReadable = !h.flowing && !h.ended && h.length <= h.highWaterMark, Q(c);
  }
  function b(c, h) {
    !h.readingMore && h.constructed && (h.readingMore = true, t.nextTick(E, c, h));
  }
  function E(c, h) {
    for (; !h.reading && !h.ended && (h.length < h.highWaterMark || h.flowing && h.length === 0); ) {
      const j = h.length;
      if (A("maybeReadMore read 0"), c.read(0), j === h.length) break;
    }
    h.readingMore = false;
  }
  O.prototype._read = function(c) {
    throw new ye("_read()");
  }, O.prototype.pipe = function(c, h) {
    const j = this, L = this._readableState;
    L.pipes.length === 1 && (L.multiAwaitDrain || (L.multiAwaitDrain = true, L.awaitDrainWriters = new _(L.awaitDrainWriters ? [L.awaitDrainWriters] : []))), L.pipes.push(c), A("pipe count=%d opts=%j", L.pipes.length, h);
    const we = (!h || h.end !== false) && c !== t.stdout && c !== t.stderr ? vn : Nt;
    L.endEmitted ? t.nextTick(we) : j.once("end", we), c.on("unpipe", ve);
    function ve(it, ze) {
      A("onunpipe"), it === j && ze && ze.hasUnpiped === false && (ze.hasUnpiped = true, Hs());
    }
    function vn() {
      A("onend"), c.end();
    }
    let nt, Nn = false;
    function Hs() {
      A("cleanup"), c.removeListener("close", Er), c.removeListener("finish", Sr), nt && c.removeListener("drain", nt), c.removeListener("error", xr), c.removeListener("unpipe", ve), j.removeListener("end", vn), j.removeListener("end", Nt), j.removeListener("data", jn), Nn = true, nt && L.awaitDrainWriters && (!c._writableState || c._writableState.needDrain) && nt();
    }
    function Pn() {
      Nn || (L.pipes.length === 1 && L.pipes[0] === c ? (A("false write response, pause", 0), L.awaitDrainWriters = c, L.multiAwaitDrain = false) : L.pipes.length > 1 && L.pipes.includes(c) && (A("false write response, pause", L.awaitDrainWriters.size), L.awaitDrainWriters.add(c)), j.pause()), nt || (nt = T(j, c), c.on("drain", nt));
    }
    j.on("data", jn);
    function jn(it) {
      A("ondata");
      const ze = c.write(it);
      A("dest.write", ze), ze === false && Pn();
    }
    function xr(it) {
      if (A("onerror", it), Nt(), c.removeListener("error", xr), c.listenerCount("error") === 0) {
        const ze = c._writableState || c._readableState;
        ze && !ze.errorEmitted ? ue(c, it) : c.emit("error", it);
      }
    }
    m(c, "error", xr);
    function Er() {
      c.removeListener("finish", Sr), Nt();
    }
    c.once("close", Er);
    function Sr() {
      A("onfinish"), c.removeListener("close", Er), Nt();
    }
    c.once("finish", Sr);
    function Nt() {
      A("unpipe"), j.unpipe(c);
    }
    return c.emit("pipe", j), c.writableNeedDrain === true ? Pn() : L.flowing || (A("pipe resume"), j.resume()), c;
  };
  function T(c, h) {
    return function() {
      const L = c._readableState;
      L.awaitDrainWriters === h ? (A("pipeOnDrain", 1), L.awaitDrainWriters = null) : L.multiAwaitDrain && (A("pipeOnDrain", L.awaitDrainWriters.size), L.awaitDrainWriters.delete(h)), (!L.awaitDrainWriters || L.awaitDrainWriters.size === 0) && c.listenerCount("data") && c.resume();
    };
  }
  O.prototype.unpipe = function(c) {
    const h = this._readableState, j = {
      hasUnpiped: false
    };
    if (h.pipes.length === 0) return this;
    if (!c) {
      const k = h.pipes;
      h.pipes = [], this.pause();
      for (let we = 0; we < k.length; we++) k[we].emit("unpipe", this, {
        hasUnpiped: false
      });
      return this;
    }
    const L = e(h.pipes, c);
    return L === -1 ? this : (h.pipes.splice(L, 1), h.pipes.length === 0 && this.pause(), c.emit("unpipe", this, j), this);
  }, O.prototype.on = function(c, h) {
    const j = R.prototype.on.call(this, c, h), L = this._readableState;
    return c === "data" ? (L.readableListening = this.listenerCount("readable") > 0, L.flowing !== false && this.resume()) : c === "readable" && !L.endEmitted && !L.readableListening && (L.readableListening = L.needReadable = true, L.flowing = false, L.emittedReadable = false, A("on readable", L.length, L.reading), L.length ? o(this) : L.reading || t.nextTick(ne, this)), j;
  }, O.prototype.addListener = O.prototype.on, O.prototype.removeListener = function(c, h) {
    const j = R.prototype.removeListener.call(this, c, h);
    return c === "readable" && t.nextTick(W, this), j;
  }, O.prototype.off = O.prototype.removeListener, O.prototype.removeAllListeners = function(c) {
    const h = R.prototype.removeAllListeners.apply(this, arguments);
    return (c === "readable" || c === void 0) && t.nextTick(W, this), h;
  };
  function W(c) {
    const h = c._readableState;
    h.readableListening = c.listenerCount("readable") > 0, h.resumeScheduled && h[q] === false ? h.flowing = true : c.listenerCount("data") > 0 ? c.resume() : h.readableListening || (h.flowing = null);
  }
  function ne(c) {
    A("readable nexttick read 0"), c.read(0);
  }
  O.prototype.resume = function() {
    const c = this._readableState;
    return c.flowing || (A("resume"), c.flowing = !c.readableListening, Z(this, c)), c[q] = false, this;
  };
  function Z(c, h) {
    h.resumeScheduled || (h.resumeScheduled = true, t.nextTick(ie, c, h));
  }
  function ie(c, h) {
    A("resume", h.reading), h.reading || c.read(0), h.resumeScheduled = false, c.emit("resume"), Q(c), h.flowing && !h.reading && c.read(0);
  }
  O.prototype.pause = function() {
    return A("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (A("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState[q] = true, this;
  };
  function Q(c) {
    const h = c._readableState;
    for (A("flow", h.flowing); h.flowing && c.read() !== null; ) ;
  }
  O.prototype.wrap = function(c) {
    let h = false;
    c.on("data", (L) => {
      !this.push(L) && c.pause && (h = true, c.pause());
    }), c.on("end", () => {
      this.push(null);
    }), c.on("error", (L) => {
      ue(this, L);
    }), c.on("close", () => {
      this.destroy();
    }), c.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      h && c.resume && (h = false, c.resume());
    };
    const j = l(c);
    for (let L = 1; L < j.length; L++) {
      const k = j[L];
      this[k] === void 0 && typeof c[k] == "function" && (this[k] = c[k].bind(c));
    }
    return this;
  }, O.prototype[x] = function() {
    return Rn(this);
  }, O.prototype.iterator = function(c) {
    return c !== void 0 && G(c, "options"), Rn(this, c);
  };
  function Rn(c, h) {
    typeof c.read != "function" && (c = O.wrap(c, {
      objectMode: true
    }));
    const j = Gs(c, h);
    return j.stream = c, j;
  }
  function Gs(c, h) {
    return __asyncGenerator(this, null, function* () {
      let j = te;
      function L(ve) {
        this === c ? (j(), j = te) : j = ve;
      }
      c.on("readable", L);
      let k;
      const we = B(c, {
        writable: false
      }, (ve) => {
        k = ve ? J(k, ve) : null, j(), j = te;
      });
      try {
        for (; ; ) {
          const ve = c.destroyed ? null : c.read();
          if (ve !== null) yield ve;
          else {
            if (k) throw k;
            if (k === null) return;
            yield new __await(new p(L));
          }
        }
      } catch (ve) {
        throw k = J(k, ve), k;
      } finally {
        (k || (h == null ? void 0 : h.destroyOnReturn) !== false) && (k === void 0 || c._readableState.autoDestroy) ? U.destroyer(c, null) : (c.off("readable", L), we());
      }
    });
  }
  a(O.prototype, {
    readable: {
      __proto__: null,
      get() {
        const c = this._readableState;
        return !!c && c.readable !== false && !c.destroyed && !c.errorEmitted && !c.endEmitted;
      },
      set(c) {
        this._readableState && (this._readableState.readable = !!c);
      }
    },
    readableDidRead: {
      __proto__: null,
      enumerable: false,
      get: function() {
        return this._readableState.dataEmitted;
      }
    },
    readableAborted: {
      __proto__: null,
      enumerable: false,
      get: function() {
        return !!(this._readableState.readable !== false && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
      }
    },
    readableHighWaterMark: {
      __proto__: null,
      enumerable: false,
      get: function() {
        return this._readableState.highWaterMark;
      }
    },
    readableBuffer: {
      __proto__: null,
      enumerable: false,
      get: function() {
        return this._readableState && this._readableState.buffer;
      }
    },
    readableFlowing: {
      __proto__: null,
      enumerable: false,
      get: function() {
        return this._readableState.flowing;
      },
      set: function(c) {
        this._readableState && (this._readableState.flowing = c);
      }
    },
    readableLength: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._readableState.length;
      }
    },
    readableObjectMode: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._readableState ? this._readableState.objectMode : false;
      }
    },
    readableEncoding: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._readableState ? this._readableState.encoding : null;
      }
    },
    errored: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._readableState ? this._readableState.errored : null;
      }
    },
    closed: {
      __proto__: null,
      get() {
        return this._readableState ? this._readableState.closed : false;
      }
    },
    destroyed: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._readableState ? this._readableState.destroyed : false;
      },
      set(c) {
        this._readableState && (this._readableState.destroyed = c);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._readableState ? this._readableState.endEmitted : false;
      }
    }
  }), a(Ee.prototype, {
    // Legacy getter for `pipesCount`.
    pipesCount: {
      __proto__: null,
      get() {
        return this.pipes.length;
      }
    },
    // Legacy property for `paused`.
    paused: {
      __proto__: null,
      get() {
        return this[q] !== false;
      },
      set(c) {
        this[q] = !!c;
      }
    }
  }), O._fromList = An;
  function An(c, h) {
    if (h.length === 0) return null;
    let j;
    return h.objectMode ? j = h.buffer.shift() : !c || c >= h.length ? (h.decoder ? j = h.buffer.join("") : h.buffer.length === 1 ? j = h.buffer.first() : j = h.buffer.concat(h.length), h.buffer.clear()) : j = h.buffer.consume(c, h.decoder), j;
  }
  function wr(c) {
    const h = c._readableState;
    A("endReadable", h.endEmitted), h.endEmitted || (h.ended = true, t.nextTick(zs, h, c));
  }
  function zs(c, h) {
    if (A("endReadableNT", c.endEmitted, c.length), !c.errored && !c.closeEmitted && !c.endEmitted && c.length === 0) {
      if (c.endEmitted = true, h.emit("end"), h.writable && h.allowHalfOpen === false) t.nextTick(qs, h);
      else if (c.autoDestroy) {
        const j = h._writableState;
        (!j || j.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (j.finished || j.writable === false)) && h.destroy();
      }
    }
  }
  function qs(c) {
    c.writable && !c.writableEnded && !c.destroyed && c.end();
  }
  O.from = function(c, h) {
    return le(O, c, h);
  };
  let mr;
  function Tn() {
    return mr === void 0 && (mr = {}), mr;
  }
  return O.fromWeb = function(c, h) {
    return Tn().newStreamReadableFromReadableStream(c, h);
  }, O.toWeb = function(c, h) {
    return Tn().newReadableStreamFromStreamReadable(c, h);
  }, O.wrap = function(c, h) {
    var j, L;
    return new O(__spreadProps(__spreadValues({
      objectMode: (j = (L = c.readableObjectMode) !== null && L !== void 0 ? L : c.objectMode) !== null && j !== void 0 ? j : true
    }, h), {
      destroy(k, we) {
        U.destroyer(c, k), we(k);
      }
    })).wrap(c);
  }, jr;
}
var Lr;
var di;
function yn() {
  if (di) return Lr;
  di = 1;
  const t = ct, {
    ArrayPrototypeSlice: e,
    Error: r,
    FunctionPrototypeSymbolHasInstance: n,
    ObjectDefineProperty: i,
    ObjectDefineProperties: a,
    ObjectSetPrototypeOf: l,
    StringPrototypeToLowerCase: u,
    Symbol: p,
    SymbolHasInstance: _
  } = fe;
  Lr = G, G.WritableState = P;
  const {
    EventEmitter: y
  } = ur, x = _n.Stream, {
    Buffer: I
  } = De, S = Tt, {
    addAbortSignal: R
  } = pr, {
    getHighWaterMark: m,
    getDefaultHighWaterMark: v
  } = _r, {
    ERR_INVALID_ARG_TYPE: $,
    ERR_METHOD_NOT_IMPLEMENTED: B,
    ERR_MULTIPLE_CALLBACK: A,
    ERR_STREAM_CANNOT_PIPE: z,
    ERR_STREAM_DESTROYED: U,
    ERR_STREAM_ALREADY_FINISHED: se,
    ERR_STREAM_NULL_VALUES: me,
    ERR_STREAM_WRITE_AFTER_END: J,
    ERR_UNKNOWN_ENCODING: oe
  } = xe.codes, {
    errorOrDestroy: ye
  } = S;
  l(G.prototype, x.prototype), l(G, x);
  function ge() {
  }
  const H = p("kOnFinished");
  function P(g, w, N) {
    typeof N != "boolean" && (N = w instanceof He()), this.objectMode = !!(g && g.objectMode), N && (this.objectMode = this.objectMode || !!(g && g.writableObjectMode)), this.highWaterMark = g ? m(this, g, "writableHighWaterMark", N) : v(false), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
    const C = !!(g && g.decodeStrings === false);
    this.decodeStrings = !C, this.defaultEncoding = g && g.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = ue.bind(void 0, w), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, V(this), this.pendingcb = 0, this.constructed = true, this.prefinished = false, this.errorEmitted = false, this.emitClose = !g || g.emitClose !== false, this.autoDestroy = !g || g.autoDestroy !== false, this.errored = null, this.closed = false, this.closeEmitted = false, this[H] = [];
  }
  function V(g) {
    g.buffered = [], g.bufferedIndex = 0, g.allBuffers = true, g.allNoop = true;
  }
  P.prototype.getBuffer = function() {
    return e(this.buffered, this.bufferedIndex);
  }, i(P.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function G(g) {
    const w = this instanceof He();
    if (!w && !n(G, this)) return new G(g);
    this._writableState = new P(g, this, w), g && (typeof g.write == "function" && (this._write = g.write), typeof g.writev == "function" && (this._writev = g.writev), typeof g.destroy == "function" && (this._destroy = g.destroy), typeof g.final == "function" && (this._final = g.final), typeof g.construct == "function" && (this._construct = g.construct), g.signal && R(g.signal, this)), x.call(this, g), S.construct(this, () => {
      const N = this._writableState;
      N.writing || he(this, N), Ae(this, N);
    });
  }
  i(G, _, {
    __proto__: null,
    value: function(g) {
      return n(this, g) ? true : this !== G ? false : g && g._writableState instanceof P;
    }
  }), G.prototype.pipe = function() {
    ye(this, new z());
  };
  function q(g, w, N, C) {
    const F = g._writableState;
    if (typeof N == "function") C = N, N = F.defaultEncoding;
    else {
      if (!N) N = F.defaultEncoding;
      else if (N !== "buffer" && !I.isEncoding(N)) throw new oe(N);
      typeof C != "function" && (C = ge);
    }
    if (w === null) throw new me();
    if (!F.objectMode) if (typeof w == "string") F.decodeStrings !== false && (w = I.from(w, N), N = "buffer");
    else if (w instanceof I) N = "buffer";
    else if (x._isUint8Array(w)) w = x._uint8ArrayToBuffer(w), N = "buffer";
    else throw new $("chunk", ["string", "Buffer", "Uint8Array"], w);
    let X;
    return F.ending ? X = new J() : F.destroyed && (X = new U("write")), X ? (t.nextTick(C, X), ye(g, X, true), X) : (F.pendingcb++, ae(g, F, w, N, C));
  }
  G.prototype.write = function(g, w, N) {
    return q(this, g, w, N) === true;
  }, G.prototype.cork = function() {
    this._writableState.corked++;
  }, G.prototype.uncork = function() {
    const g = this._writableState;
    g.corked && (g.corked--, g.writing || he(this, g));
  }, G.prototype.setDefaultEncoding = function(w) {
    if (typeof w == "string" && (w = u(w)), !I.isEncoding(w)) throw new oe(w);
    return this._writableState.defaultEncoding = w, this;
  };
  function ae(g, w, N, C, F) {
    const X = w.objectMode ? 1 : N.length;
    w.length += X;
    const ee = w.length < w.highWaterMark;
    return ee || (w.needDrain = true), w.writing || w.corked || w.errored || !w.constructed ? (w.buffered.push({
      chunk: N,
      encoding: C,
      callback: F
    }), w.allBuffers && C !== "buffer" && (w.allBuffers = false), w.allNoop && F !== ge && (w.allNoop = false)) : (w.writelen = X, w.writecb = F, w.writing = true, w.sync = true, g._write(N, C, w.onwrite), w.sync = false), ee && !w.errored && !w.destroyed;
  }
  function le(g, w, N, C, F, X, ee) {
    w.writelen = C, w.writecb = ee, w.writing = true, w.sync = true, w.destroyed ? w.onwrite(new U("write")) : N ? g._writev(F, w.onwrite) : g._write(F, X, w.onwrite), w.sync = false;
  }
  function te(g, w, N, C) {
    --w.pendingcb, C(N), M(w), ye(g, N);
  }
  function ue(g, w) {
    const N = g._writableState, C = N.sync, F = N.writecb;
    if (typeof F != "function") {
      ye(g, new A());
      return;
    }
    N.writing = false, N.writecb = null, N.length -= N.writelen, N.writelen = 0, w ? (w.stack, N.errored || (N.errored = w), g._readableState && !g._readableState.errored && (g._readableState.errored = w), C ? t.nextTick(te, g, N, w, F) : te(g, N, w, F)) : (N.buffered.length > N.bufferedIndex && he(g, N), C ? N.afterWriteTickInfo !== null && N.afterWriteTickInfo.cb === F ? N.afterWriteTickInfo.count++ : (N.afterWriteTickInfo = {
      count: 1,
      cb: F,
      stream: g,
      state: N
    }, t.nextTick(D, N.afterWriteTickInfo)) : re(g, N, 1, F));
  }
  function D({
    stream: g,
    state: w,
    count: N,
    cb: C
  }) {
    return w.afterWriteTickInfo = null, re(g, w, N, C);
  }
  function re(g, w, N, C) {
    for (!w.ending && !g.destroyed && w.length === 0 && w.needDrain && (w.needDrain = false, g.emit("drain")); N-- > 0; ) w.pendingcb--, C();
    w.destroyed && M(w), Ae(g, w);
  }
  function M(g) {
    if (g.writing) return;
    for (let F = g.bufferedIndex; F < g.buffered.length; ++F) {
      var w;
      const {
        chunk: X,
        callback: ee
      } = g.buffered[F], K = g.objectMode ? 1 : X.length;
      g.length -= K, ee((w = g.errored) !== null && w !== void 0 ? w : new U("write"));
    }
    const N = g[H].splice(0);
    for (let F = 0; F < N.length; F++) {
      var C;
      N[F]((C = g.errored) !== null && C !== void 0 ? C : new U("end"));
    }
    V(g);
  }
  function he(g, w) {
    if (w.corked || w.bufferProcessing || w.destroyed || !w.constructed) return;
    const {
      buffered: N,
      bufferedIndex: C,
      objectMode: F
    } = w, X = N.length - C;
    if (!X) return;
    let ee = C;
    if (w.bufferProcessing = true, X > 1 && g._writev) {
      w.pendingcb -= X - 1;
      const K = w.allNoop ? ge : (O) => {
        for (let Te = ee; Te < N.length; ++Te) N[Te].callback(O);
      }, Ee = w.allNoop && ee === 0 ? N : e(N, ee);
      Ee.allBuffers = w.allBuffers, le(g, w, true, w.length, Ee, "", K), V(w);
    } else {
      do {
        const {
          chunk: K,
          encoding: Ee,
          callback: O
        } = N[ee];
        N[ee++] = null;
        const Te = F ? 1 : K.length;
        le(g, w, false, Te, K, Ee, O);
      } while (ee < N.length && !w.writing);
      ee === N.length ? V(w) : ee > 256 ? (N.splice(0, ee), w.bufferedIndex = 0) : w.bufferedIndex = ee;
    }
    w.bufferProcessing = false;
  }
  G.prototype._write = function(g, w, N) {
    if (this._writev) this._writev([{
      chunk: g,
      encoding: w
    }], N);
    else throw new B("_write()");
  }, G.prototype._writev = null, G.prototype.end = function(g, w, N) {
    const C = this._writableState;
    typeof g == "function" ? (N = g, g = null, w = null) : typeof w == "function" && (N = w, w = null);
    let F;
    if (g != null) {
      const X = q(this, g, w);
      X instanceof r && (F = X);
    }
    return C.corked && (C.corked = 1, this.uncork()), F || (!C.errored && !C.ending ? (C.ending = true, Ae(this, C, true), C.ended = true) : C.finished ? F = new se("end") : C.destroyed && (F = new U("end"))), typeof N == "function" && (F || C.finished ? t.nextTick(N, F) : C[H].push(N)), this;
  };
  function Re(g) {
    return g.ending && !g.destroyed && g.constructed && g.length === 0 && !g.errored && g.buffered.length === 0 && !g.finished && !g.writing && !g.errorEmitted && !g.closeEmitted;
  }
  function Ye(g, w) {
    let N = false;
    function C(F) {
      if (N) {
        ye(g, F ?? A());
        return;
      }
      if (N = true, w.pendingcb--, F) {
        const X = w[H].splice(0);
        for (let ee = 0; ee < X.length; ee++) X[ee](F);
        ye(g, F, w.sync);
      } else Re(w) && (w.prefinished = true, g.emit("prefinish"), w.pendingcb++, t.nextTick(Ge, g, w));
    }
    w.sync = true, w.pendingcb++;
    try {
      g._final(C);
    } catch (F) {
      C(F);
    }
    w.sync = false;
  }
  function We(g, w) {
    !w.prefinished && !w.finalCalled && (typeof g._final == "function" && !w.destroyed ? (w.finalCalled = true, Ye(g, w)) : (w.prefinished = true, g.emit("prefinish")));
  }
  function Ae(g, w, N) {
    Re(w) && (We(g, w), w.pendingcb === 0 && (N ? (w.pendingcb++, t.nextTick((C, F) => {
      Re(F) ? Ge(C, F) : F.pendingcb--;
    }, g, w)) : Re(w) && (w.pendingcb++, Ge(g, w))));
  }
  function Ge(g, w) {
    w.pendingcb--, w.finished = true;
    const N = w[H].splice(0);
    for (let C = 0; C < N.length; C++) N[C]();
    if (g.emit("finish"), w.autoDestroy) {
      const C = g._readableState;
      (!C || C.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      (C.endEmitted || C.readable === false)) && g.destroy();
    }
  }
  a(G.prototype, {
    closed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.closed : false;
      }
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.destroyed : false;
      },
      set(g) {
        this._writableState && (this._writableState.destroyed = g);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const g = this._writableState;
        return !!g && g.writable !== false && !g.destroyed && !g.errored && !g.ending && !g.ended;
      },
      set(g) {
        this._writableState && (this._writableState.writable = !!g);
      }
    },
    writableFinished: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.finished : false;
      }
    },
    writableObjectMode: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.objectMode : false;
      }
    },
    writableBuffer: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.getBuffer();
      }
    },
    writableEnded: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.ending : false;
      }
    },
    writableNeedDrain: {
      __proto__: null,
      get() {
        const g = this._writableState;
        return g ? !g.destroyed && !g.ending && g.needDrain : false;
      }
    },
    writableHighWaterMark: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.highWaterMark;
      }
    },
    writableCorked: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.corked : 0;
      }
    },
    writableLength: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.length;
      }
    },
    errored: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._writableState ? this._writableState.errored : null;
      }
    },
    writableAborted: {
      __proto__: null,
      enumerable: false,
      get: function() {
        return !!(this._writableState.writable !== false && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
      }
    }
  });
  const _t = S.destroy;
  G.prototype.destroy = function(g, w) {
    const N = this._writableState;
    return !N.destroyed && (N.bufferedIndex < N.buffered.length || N[H].length) && t.nextTick(M, N), _t.call(this, g, w), this;
  }, G.prototype._undestroy = S.undestroy, G.prototype._destroy = function(g, w) {
    w(g);
  }, G.prototype[y.captureRejectionSymbol] = function(g) {
    this.destroy(g);
  };
  let rt;
  function Xe() {
    return rt === void 0 && (rt = {}), rt;
  }
  return G.fromWeb = function(g, w) {
    return Xe().newStreamWritableFromWritableStream(g, w);
  }, G.toWeb = function(g) {
    return Xe().newWritableStreamFromStreamWritable(g);
  }, Lr;
}
var $r;
var hi;
function Al() {
  if (hi) return $r;
  hi = 1;
  const t = ct, e = De, {
    isReadable: r,
    isWritable: n,
    isIterable: i,
    isNodeStream: a,
    isReadableNodeStream: l,
    isWritableNodeStream: u,
    isDuplexNodeStream: p,
    isReadableStream: _,
    isWritableStream: y
  } = Ke, x = tt, {
    AbortError: I,
    codes: {
      ERR_INVALID_ARG_TYPE: S,
      ERR_INVALID_RETURN_VALUE: R
    }
  } = xe, {
    destroyer: m
  } = Tt, v = He(), $ = br(), B = yn(), {
    createDeferredPromise: A
  } = Ie, z = Ts, U = globalThis.Blob || e.Blob, se = typeof U < "u" ? function(P) {
    return P instanceof U;
  } : function(P) {
    return false;
  }, me = globalThis.AbortController || Ut().AbortController, {
    FunctionPrototypeCall: J
  } = fe;
  class oe extends v {
    constructor(P) {
      super(P), (P == null ? void 0 : P.readable) === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), (P == null ? void 0 : P.writable) === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true);
    }
  }
  $r = function H(P, V) {
    if (p(P)) return P;
    if (l(P)) return ge({
      readable: P
    });
    if (u(P)) return ge({
      writable: P
    });
    if (a(P)) return ge({
      writable: false,
      readable: false
    });
    if (_(P)) return ge({
      readable: $.fromWeb(P)
    });
    if (y(P)) return ge({
      writable: B.fromWeb(P)
    });
    if (typeof P == "function") {
      const {
        value: q,
        write: ae,
        final: le,
        destroy: te
      } = ye(P);
      if (i(q)) return z(oe, q, {
        // TODO (ronag): highWaterMark?
        objectMode: true,
        write: ae,
        final: le,
        destroy: te
      });
      const ue = q == null ? void 0 : q.then;
      if (typeof ue == "function") {
        let D;
        const re = J(ue, q, (M) => {
          if (M != null) throw new R("nully", "body", M);
        }, (M) => {
          m(D, M);
        });
        return D = new oe({
          // TODO (ronag): highWaterMark?
          objectMode: true,
          readable: false,
          write: ae,
          final(M) {
            le(() => __async(this, null, function* () {
              try {
                yield re, t.nextTick(M, null);
              } catch (he) {
                t.nextTick(M, he);
              }
            }));
          },
          destroy: te
        });
      }
      throw new R("Iterable, AsyncIterable or AsyncFunction", V, q);
    }
    if (se(P)) return H(P.arrayBuffer());
    if (i(P)) return z(oe, P, {
      // TODO (ronag): highWaterMark?
      objectMode: true,
      writable: false
    });
    if (_(P == null ? void 0 : P.readable) && y(P == null ? void 0 : P.writable)) return oe.fromWeb(P);
    if (typeof (P == null ? void 0 : P.writable) == "object" || typeof (P == null ? void 0 : P.readable) == "object") {
      const q = P != null && P.readable ? l(P == null ? void 0 : P.readable) ? P == null ? void 0 : P.readable : H(P.readable) : void 0, ae = P != null && P.writable ? u(P == null ? void 0 : P.writable) ? P == null ? void 0 : P.writable : H(P.writable) : void 0;
      return ge({
        readable: q,
        writable: ae
      });
    }
    const G = P == null ? void 0 : P.then;
    if (typeof G == "function") {
      let q;
      return J(G, P, (ae) => {
        ae != null && q.push(ae), q.push(null);
      }, (ae) => {
        m(q, ae);
      }), q = new oe({
        objectMode: true,
        writable: false,
        read() {
        }
      });
    }
    throw new S(V, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], P);
  };
  function ye(H) {
    let {
      promise: P,
      resolve: V
    } = A();
    const G = new me(), q = G.signal;
    return {
      value: H(function() {
        return __asyncGenerator(this, null, function* () {
          for (; ; ) {
            const le = P;
            P = null;
            const {
              chunk: te,
              done: ue,
              cb: D
            } = yield new __await(le);
            if (t.nextTick(D), ue) return;
            if (q.aborted) throw new I(void 0, {
              cause: q.reason
            });
            ({
              promise: P,
              resolve: V
            } = A()), yield te;
          }
        });
      }(), {
        signal: q
      }),
      write(le, te, ue) {
        const D = V;
        V = null, D({
          chunk: le,
          done: false,
          cb: ue
        });
      },
      final(le) {
        const te = V;
        V = null, te({
          done: true,
          cb: le
        });
      },
      destroy(le, te) {
        G.abort(), te(le);
      }
    };
  }
  function ge(H) {
    const P = H.readable && typeof H.readable.read != "function" ? $.wrap(H.readable) : H.readable, V = H.writable;
    let G = !!r(P), q = !!n(V), ae, le, te, ue, D;
    function re(M) {
      const he = ue;
      ue = null, he ? he(M) : M && D.destroy(M);
    }
    return D = new oe({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(P != null && P.readableObjectMode),
      writableObjectMode: !!(V != null && V.writableObjectMode),
      readable: G,
      writable: q
    }), q && (x(V, (M) => {
      q = false, M && m(P, M), re(M);
    }), D._write = function(M, he, Re) {
      V.write(M, he) ? Re() : ae = Re;
    }, D._final = function(M) {
      V.end(), le = M;
    }, V.on("drain", function() {
      if (ae) {
        const M = ae;
        ae = null, M();
      }
    }), V.on("finish", function() {
      if (le) {
        const M = le;
        le = null, M();
      }
    })), G && (x(P, (M) => {
      G = false, M && m(P, M), re(M);
    }), P.on("readable", function() {
      if (te) {
        const M = te;
        te = null, M();
      }
    }), P.on("end", function() {
      D.push(null);
    }), D._read = function() {
      for (; ; ) {
        const M = P.read();
        if (M === null) {
          te = D._read;
          return;
        }
        if (!D.push(M)) return;
      }
    }), D._destroy = function(M, he) {
      !M && ue !== null && (M = new I()), te = null, ae = null, le = null, ue === null ? he(M) : (ue = he, m(V, M), m(P, M));
    }, D;
  }
  return $r;
}
var Br;
var pi;
function He() {
  if (pi) return Br;
  pi = 1;
  const {
    ObjectDefineProperties: t,
    ObjectGetOwnPropertyDescriptor: e,
    ObjectKeys: r,
    ObjectSetPrototypeOf: n
  } = fe;
  Br = l;
  const i = br(), a = yn();
  n(l.prototype, i.prototype), n(l, i);
  {
    const y = r(a.prototype);
    for (let x = 0; x < y.length; x++) {
      const I = y[x];
      l.prototype[I] || (l.prototype[I] = a.prototype[I]);
    }
  }
  function l(y) {
    if (!(this instanceof l)) return new l(y);
    i.call(this, y), a.call(this, y), y ? (this.allowHalfOpen = y.allowHalfOpen !== false, y.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), y.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true)) : this.allowHalfOpen = true;
  }
  t(l.prototype, {
    writable: __spreadValues({
      __proto__: null
    }, e(a.prototype, "writable")),
    writableHighWaterMark: __spreadValues({
      __proto__: null
    }, e(a.prototype, "writableHighWaterMark")),
    writableObjectMode: __spreadValues({
      __proto__: null
    }, e(a.prototype, "writableObjectMode")),
    writableBuffer: __spreadValues({
      __proto__: null
    }, e(a.prototype, "writableBuffer")),
    writableLength: __spreadValues({
      __proto__: null
    }, e(a.prototype, "writableLength")),
    writableFinished: __spreadValues({
      __proto__: null
    }, e(a.prototype, "writableFinished")),
    writableCorked: __spreadValues({
      __proto__: null
    }, e(a.prototype, "writableCorked")),
    writableEnded: __spreadValues({
      __proto__: null
    }, e(a.prototype, "writableEnded")),
    writableNeedDrain: __spreadValues({
      __proto__: null
    }, e(a.prototype, "writableNeedDrain")),
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0 ? false : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(y) {
        this._readableState && this._writableState && (this._readableState.destroyed = y, this._writableState.destroyed = y);
      }
    }
  });
  let u;
  function p() {
    return u === void 0 && (u = {}), u;
  }
  l.fromWeb = function(y, x) {
    return p().newStreamDuplexFromReadableWritablePair(y, x);
  }, l.toWeb = function(y) {
    return p().newReadableWritablePairFromDuplex(y);
  };
  let _;
  return l.from = function(y) {
    return _ || (_ = Al()), _(y, "body");
  }, Br;
}
var {
  ObjectSetPrototypeOf: vs,
  Symbol: Tl
} = fe;
var Ns = Qe;
var {
  ERR_METHOD_NOT_IMPLEMENTED: vl
} = xe.codes;
var gn = He();
var {
  getHighWaterMark: Nl
} = _r;
vs(Qe.prototype, gn.prototype);
vs(Qe, gn);
var Mt = Tl("kCallback");
function Qe(t) {
  if (!(this instanceof Qe)) return new Qe(t);
  const e = t ? Nl(this, t, "readableHighWaterMark", true) : null;
  e === 0 && (t = __spreadProps(__spreadValues({}, t), {
    highWaterMark: null,
    readableHighWaterMark: e,
    // TODO (ronag): 0 is not optimal since we have
    // a "bug" where we check needDrain before calling _write and not after.
    // Refs: https://github.com/nodejs/node/pull/32887
    // Refs: https://github.com/nodejs/node/pull/35941
    writableHighWaterMark: t.writableHighWaterMark || 0
  })), gn.call(this, t), this._readableState.sync = false, this[Mt] = null, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", Pl);
}
function sn(t) {
  typeof this._flush == "function" && !this.destroyed ? this._flush((e, r) => {
    if (e) {
      t ? t(e) : this.destroy(e);
      return;
    }
    r != null && this.push(r), this.push(null), t && t();
  }) : (this.push(null), t && t());
}
function Pl() {
  this._final !== sn && sn.call(this);
}
Qe.prototype._final = sn;
Qe.prototype._transform = function(t, e, r) {
  throw new vl("_transform()");
};
Qe.prototype._write = function(t, e, r) {
  const n = this._readableState, i = this._writableState, a = n.length;
  this._transform(t, e, (l, u) => {
    if (l) {
      r(l);
      return;
    }
    u != null && this.push(u), i.ended || // Backwards compat.
    a === n.length || // Backwards compat.
    n.length < n.highWaterMark ? r() : this[Mt] = r;
  });
};
Qe.prototype._read = function() {
  if (this[Mt]) {
    const t = this[Mt];
    this[Mt] = null, t();
  }
};
var {
  ObjectSetPrototypeOf: Ps
} = fe;
var js = Rt;
var wn = Ns;
Ps(Rt.prototype, wn.prototype);
Ps(Rt, wn);
function Rt(t) {
  if (!(this instanceof Rt)) return new Rt(t);
  wn.call(this, t);
}
Rt.prototype._transform = function(t, e, r) {
  r(null, t);
};
var Ot = ct;
var {
  ArrayIsArray: jl,
  Promise: Ll,
  SymbolAsyncIterator: $l,
  SymbolDispose: Bl
} = fe;
var ir = tt;
var {
  once: Fl
} = Ie;
var kl = Tt;
var _i = He();
var {
  aggregateTwoErrors: Cl,
  codes: {
    ERR_INVALID_ARG_TYPE: on,
    ERR_INVALID_RETURN_VALUE: Fr,
    ERR_MISSING_ARGS: Ol,
    ERR_STREAM_DESTROYED: Ml,
    ERR_STREAM_PREMATURE_CLOSE: Dl
  },
  AbortError: Ul
} = xe;
var {
  validateFunction: Wl,
  validateAbortSignal: Gl
} = Wt;
var {
  isIterable: ot,
  isReadable: kr,
  isReadableNodeStream: tr,
  isNodeStream: bi,
  isTransformStream: gt,
  isWebStream: zl,
  isReadableStream: Cr,
  isReadableFinished: ql
} = Ke;
var Hl = globalThis.AbortController || Ut().AbortController;
var Or;
var Mr;
var Dr;
function yi(t, e, r) {
  let n = false;
  t.on("close", () => {
    n = true;
  });
  const i = ir(t, {
    readable: e,
    writable: r
  }, (a) => {
    n = !a;
  });
  return {
    destroy: (a) => {
      n || (n = true, kl.destroyer(t, a || new Ml("pipe")));
    },
    cleanup: i
  };
}
function Ql(t) {
  return Wl(t[t.length - 1], "streams[stream.length - 1]"), t.pop();
}
function Ur(t) {
  if (ot(t)) return t;
  if (tr(t)) return Vl(t);
  throw new on("val", ["Readable", "Iterable", "AsyncIterable"], t);
}
function Vl(t) {
  return __asyncGenerator(this, null, function* () {
    Mr || (Mr = br()), yield* __yieldStar(Mr.prototype[$l].call(t));
  });
}
function Kt(_0, _1, _2, _3) {
  return __async(this, arguments, function* (t, e, r, {
    end: n
  }) {
    let i, a = null;
    const l = (_) => {
      if (_ && (i = _), a) {
        const y = a;
        a = null, y();
      }
    }, u = () => new Ll((_, y) => {
      i ? y(i) : a = () => {
        i ? y(i) : _();
      };
    });
    e.on("drain", l);
    const p = ir(e, {
      readable: false
    }, l);
    try {
      e.writableNeedDrain && (yield u());
      try {
        for (var iter = __forAwait(t), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
          const _ = temp.value;
          e.write(_) || (yield u());
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield temp.call(iter));
        } finally {
          if (error)
            throw error[0];
        }
      }
      n && (e.end(), yield u()), r();
    } catch (_) {
      r(i !== _ ? Cl(i, _) : _);
    } finally {
      p(), e.off("drain", l);
    }
  });
}
function Wr(_0, _1, _2, _3) {
  return __async(this, arguments, function* (t, e, r, {
    end: n
  }) {
    gt(e) && (e = e.writable);
    const i = e.getWriter();
    try {
      try {
        for (var iter = __forAwait(t), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
          const a = temp.value;
          yield i.ready, i.write(a).catch(() => {
          });
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield temp.call(iter));
        } finally {
          if (error)
            throw error[0];
        }
      }
      yield i.ready, n && (yield i.close()), r();
    } catch (a) {
      try {
        yield i.abort(a), r(a);
      } catch (l) {
        r(l);
      }
    }
  });
}
function Kl(...t) {
  return Ls(t, Fl(Ql(t)));
}
function Ls(t, e, r) {
  if (t.length === 1 && jl(t[0]) && (t = t[0]), t.length < 2) throw new Ol("streams");
  const n = new Hl(), i = n.signal, a = r == null ? void 0 : r.signal, l = [];
  Gl(a, "options.signal");
  function u() {
    R(new Ul());
  }
  Dr = Dr || Ie.addAbortListener;
  let p;
  a && (p = Dr(a, u));
  let _, y;
  const x = [];
  let I = 0;
  function S(B) {
    R(B, --I === 0);
  }
  function R(B, A) {
    var z;
    if (B && (!_ || _.code === "ERR_STREAM_PREMATURE_CLOSE") && (_ = B), !(!_ && !A)) {
      for (; x.length; ) x.shift()(_);
      (z = p) === null || z === void 0 || z[Bl](), n.abort(), A && (_ || l.forEach((U) => U()), Ot.nextTick(e, _, y));
    }
  }
  let m;
  for (let B = 0; B < t.length; B++) {
    const A = t[B], z = B < t.length - 1, U = B > 0, se = z || (r == null ? void 0 : r.end) !== false, me = B === t.length - 1;
    if (bi(A)) {
      let J = function(oe) {
        oe && oe.name !== "AbortError" && oe.code !== "ERR_STREAM_PREMATURE_CLOSE" && S(oe);
      };
      if (se) {
        const {
          destroy: oe,
          cleanup: ye
        } = yi(A, z, U);
        x.push(oe), kr(A) && me && l.push(ye);
      }
      A.on("error", J), kr(A) && me && l.push(() => {
        A.removeListener("error", J);
      });
    }
    if (B === 0) {
      if (typeof A == "function") {
        if (m = A({
          signal: i
        }), !ot(m)) throw new Fr("Iterable, AsyncIterable or Stream", "source", m);
      } else ot(A) || tr(A) || gt(A) ? m = A : m = _i.from(A);
    } else if (typeof A == "function") {
      if (gt(m)) {
        var v;
        m = Ur((v = m) === null || v === void 0 ? void 0 : v.readable);
      } else m = Ur(m);
      if (m = A(m, {
        signal: i
      }), z) {
        if (!ot(m, true)) throw new Fr("AsyncIterable", `transform[${B - 1}]`, m);
      } else {
        var $;
        Or || (Or = js);
        const J = new Or({
          objectMode: true
        }), oe = ($ = m) === null || $ === void 0 ? void 0 : $.then;
        if (typeof oe == "function") I++, oe.call(m, (H) => {
          y = H, H != null && J.write(H), se && J.end(), Ot.nextTick(S);
        }, (H) => {
          J.destroy(H), Ot.nextTick(S, H);
        });
        else if (ot(m, true)) I++, Kt(m, J, S, {
          end: se
        });
        else if (Cr(m) || gt(m)) {
          const H = m.readable || m;
          I++, Kt(H, J, S, {
            end: se
          });
        } else throw new Fr("AsyncIterable or Promise", "destination", m);
        m = J;
        const {
          destroy: ye,
          cleanup: ge
        } = yi(m, false, true);
        x.push(ye), me && l.push(ge);
      }
    } else if (bi(A)) {
      if (tr(m)) {
        I += 2;
        const J = Yl(m, A, S, {
          end: se
        });
        kr(A) && me && l.push(J);
      } else if (gt(m) || Cr(m)) {
        const J = m.readable || m;
        I++, Kt(J, A, S, {
          end: se
        });
      } else if (ot(m)) I++, Kt(m, A, S, {
        end: se
      });
      else throw new on("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], m);
      m = A;
    } else if (zl(A)) {
      if (tr(m)) I++, Wr(Ur(m), A, S, {
        end: se
      });
      else if (Cr(m) || ot(m)) I++, Wr(m, A, S, {
        end: se
      });
      else if (gt(m)) I++, Wr(m.readable, A, S, {
        end: se
      });
      else throw new on("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], m);
      m = A;
    } else m = _i.from(A);
  }
  return (i != null && i.aborted || a != null && a.aborted) && Ot.nextTick(u), m;
}
function Yl(t, e, r, {
  end: n
}) {
  let i = false;
  if (e.on("close", () => {
    i || r(new Dl());
  }), t.pipe(e, {
    end: false
  }), n) {
    let a = function() {
      i = true, e.end();
    };
    ql(t) ? Ot.nextTick(a) : t.once("end", a);
  } else r();
  return ir(t, {
    readable: true,
    writable: false
  }, (a) => {
    const l = t._readableState;
    a && a.code === "ERR_STREAM_PREMATURE_CLOSE" && l && l.ended && !l.errored && !l.errorEmitted ? t.once("end", r).once("error", r) : r(a);
  }), ir(e, {
    readable: false,
    writable: true
  }, r);
}
var mn = {
  pipelineImpl: Ls,
  pipeline: Kl
};
var {
  pipeline: Xl
} = mn;
var Yt = He();
var {
  destroyer: Zl
} = Tt;
var {
  isNodeStream: Xt,
  isReadable: gi,
  isWritable: wi,
  isWebStream: Gr,
  isTransformStream: st,
  isWritableStream: mi,
  isReadableStream: xi
} = Ke;
var {
  AbortError: Jl,
  codes: {
    ERR_INVALID_ARG_VALUE: Ei,
    ERR_MISSING_ARGS: eu
  }
} = xe;
var tu = tt;
var $s = function(...e) {
  if (e.length === 0) throw new eu("streams");
  if (e.length === 1) return Yt.from(e[0]);
  const r = [...e];
  if (typeof e[0] == "function" && (e[0] = Yt.from(e[0])), typeof e[e.length - 1] == "function") {
    const S = e.length - 1;
    e[S] = Yt.from(e[S]);
  }
  for (let S = 0; S < e.length; ++S) if (!(!Xt(e[S]) && !Gr(e[S]))) {
    if (S < e.length - 1 && !(gi(e[S]) || xi(e[S]) || st(e[S]))) throw new Ei(`streams[${S}]`, r[S], "must be readable");
    if (S > 0 && !(wi(e[S]) || mi(e[S]) || st(e[S]))) throw new Ei(`streams[${S}]`, r[S], "must be writable");
  }
  let n, i, a, l, u;
  function p(S) {
    const R = l;
    l = null, R ? R(S) : S ? u.destroy(S) : !I && !x && u.destroy();
  }
  const _ = e[0], y = Xl(e, p), x = !!(wi(_) || mi(_) || st(_)), I = !!(gi(y) || xi(y) || st(y));
  if (u = new Yt({
    // TODO (ronag): highWaterMark?
    writableObjectMode: !!(_ != null && _.writableObjectMode),
    readableObjectMode: !!(y != null && y.readableObjectMode),
    writable: x,
    readable: I
  }), x) {
    if (Xt(_)) u._write = function(R, m, v) {
      _.write(R, m) ? v() : n = v;
    }, u._final = function(R) {
      _.end(), i = R;
    }, _.on("drain", function() {
      if (n) {
        const R = n;
        n = null, R();
      }
    });
    else if (Gr(_)) {
      const m = (st(_) ? _.writable : _).getWriter();
      u._write = function(v, $, B) {
        return __async(this, null, function* () {
          try {
            yield m.ready, m.write(v).catch(() => {
            }), B();
          } catch (A) {
            B(A);
          }
        });
      }, u._final = function(v) {
        return __async(this, null, function* () {
          try {
            yield m.ready, m.close().catch(() => {
            }), i = v;
          } catch ($) {
            v($);
          }
        });
      };
    }
    const S = st(y) ? y.readable : y;
    tu(S, () => {
      if (i) {
        const R = i;
        i = null, R();
      }
    });
  }
  if (I) {
    if (Xt(y)) y.on("readable", function() {
      if (a) {
        const S = a;
        a = null, S();
      }
    }), y.on("end", function() {
      u.push(null);
    }), u._read = function() {
      for (; ; ) {
        const S = y.read();
        if (S === null) {
          a = u._read;
          return;
        }
        if (!u.push(S)) return;
      }
    };
    else if (Gr(y)) {
      const R = (st(y) ? y.readable : y).getReader();
      u._read = function() {
        return __async(this, null, function* () {
          for (; ; ) try {
            const {
              value: m,
              done: v
            } = yield R.read();
            if (!u.push(m)) return;
            if (v) {
              u.push(null);
              return;
            }
          } catch {
            return;
          }
        });
      };
    }
  }
  return u._destroy = function(S, R) {
    !S && l !== null && (S = new Jl()), a = null, n = null, i = null, l === null ? R(S) : (l = R, Xt(y) && Zl(y, S));
  }, u;
};
var ru = globalThis.AbortController || Ut().AbortController;
var {
  codes: {
    ERR_INVALID_ARG_VALUE: nu,
    ERR_INVALID_ARG_TYPE: zt,
    ERR_MISSING_ARGS: iu,
    ERR_OUT_OF_RANGE: su
  },
  AbortError: Me
} = xe;
var {
  validateAbortSignal: ht,
  validateInteger: Si,
  validateObject: pt
} = Wt;
var ou = fe.Symbol("kWeak");
var au = fe.Symbol("kResistStopPropagation");
var {
  finished: lu
} = tt;
var uu = $s;
var {
  addAbortSignalNoValidate: fu
} = pr;
var {
  isWritable: cu,
  isNodeStream: du
} = Ke;
var {
  deprecate: hu
} = Ie;
var {
  ArrayPrototypePush: pu,
  Boolean: _u,
  MathFloor: Ii,
  Number: bu,
  NumberIsNaN: yu,
  Promise: Ri,
  PromiseReject: Ai,
  PromiseResolve: gu,
  PromisePrototypeThen: Ti,
  Symbol: Bs
} = fe;
var sr = Bs("kEmpty");
var vi = Bs("kEof");
function wu(t, e) {
  if (e != null && pt(e, "options"), (e == null ? void 0 : e.signal) != null && ht(e.signal, "options.signal"), du(t) && !cu(t)) throw new nu("stream", t, "must be writable");
  const r = uu(this, t);
  return e != null && e.signal && fu(e.signal, r), r;
}
function yr(t, e) {
  if (typeof t != "function") throw new zt("fn", ["Function", "AsyncFunction"], t);
  e != null && pt(e, "options"), (e == null ? void 0 : e.signal) != null && ht(e.signal, "options.signal");
  let r = 1;
  (e == null ? void 0 : e.concurrency) != null && (r = Ii(e.concurrency));
  let n = r - 1;
  return (e == null ? void 0 : e.highWaterMark) != null && (n = Ii(e.highWaterMark)), Si(r, "options.concurrency", 1), Si(n, "options.highWaterMark", 0), n += r, function() {
    return __asyncGenerator(this, null, function* () {
      const a = Ie.AbortSignalAny([e == null ? void 0 : e.signal].filter(_u)), l = this, u = [], p = {
        signal: a
      };
      let _, y, x = false, I = 0;
      function S() {
        x = true, R();
      }
      function R() {
        I -= 1, m();
      }
      function m() {
        y && !x && I < r && u.length < n && (y(), y = null);
      }
      function v() {
        return __async(this, null, function* () {
          try {
            try {
              for (var iter = __forAwait(l), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
                let $ = temp.value;
                if (x) return;
                if (a.aborted) throw new Me();
                try {
                  if ($ = t($, p), $ === sr) continue;
                  $ = gu($);
                } catch (B) {
                  $ = Ai(B);
                }
                I += 1, Ti($, R, S), u.push($), _ && (_(), _ = null), !x && (u.length >= n || I >= r) && (yield new Ri((B) => {
                  y = B;
                }));
              }
            } catch (temp) {
              error = [temp];
            } finally {
              try {
                more && (temp = iter.return) && (yield temp.call(iter));
              } finally {
                if (error)
                  throw error[0];
              }
            }
            u.push(vi);
          } catch ($) {
            const B = Ai($);
            Ti(B, R, S), u.push(B);
          } finally {
            x = true, _ && (_(), _ = null);
          }
        });
      }
      v();
      try {
        for (; ; ) {
          for (; u.length > 0; ) {
            const $ = yield new __await(u[0]);
            if ($ === vi) return;
            if (a.aborted) throw new Me();
            $ !== sr && (yield $), u.shift(), m();
          }
          yield new __await(new Ri(($) => {
            _ = $;
          }));
        }
      } finally {
        x = true, y && (y(), y = null);
      }
    });
  }.call(this);
}
function mu(t = void 0) {
  return t != null && pt(t, "options"), (t == null ? void 0 : t.signal) != null && ht(t.signal, "options.signal"), function() {
    return __asyncGenerator(this, null, function* () {
      let r = 0;
      try {
        for (var iter = __forAwait(this), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
          const i = temp.value;
          var n;
          if (t != null && (n = t.signal) !== null && n !== void 0 && n.aborted) throw new Me({
            cause: t.signal.reason
          });
          yield [r++, i];
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield new __await(temp.call(iter)));
        } finally {
          if (error)
            throw error[0];
        }
      }
    });
  }.call(this);
}
function Fs(t, e = void 0) {
  return __async(this, null, function* () {
    try {
      for (var iter = __forAwait(xn.call(this, t, e)), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
        const r = temp.value;
        return true;
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield temp.call(iter));
      } finally {
        if (error)
          throw error[0];
      }
    }
    return false;
  });
}
function xu(t, e = void 0) {
  return __async(this, null, function* () {
    if (typeof t != "function") throw new zt("fn", ["Function", "AsyncFunction"], t);
    return !(yield Fs.call(this, (...r) => __async(this, null, function* () {
      return !(yield t(...r));
    }), e));
  });
}
function Eu(t, e) {
  return __async(this, null, function* () {
    try {
      for (var iter = __forAwait(xn.call(this, t, e)), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
        const r = temp.value;
        return r;
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield temp.call(iter));
      } finally {
        if (error)
          throw error[0];
      }
    }
  });
}
function Su(t, e) {
  return __async(this, null, function* () {
    if (typeof t != "function") throw new zt("fn", ["Function", "AsyncFunction"], t);
    function r(n, i) {
      return __async(this, null, function* () {
        return yield t(n, i), sr;
      });
    }
    try {
      for (var iter = __forAwait(yr.call(this, r, e)), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
        const n = temp.value;
        ;
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield temp.call(iter));
      } finally {
        if (error)
          throw error[0];
      }
    }
  });
}
function xn(t, e) {
  if (typeof t != "function") throw new zt("fn", ["Function", "AsyncFunction"], t);
  function r(n, i) {
    return __async(this, null, function* () {
      return (yield t(n, i)) ? n : sr;
    });
  }
  return yr.call(this, r, e);
}
var Iu = class extends iu {
  constructor() {
    super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
  }
};
function Ru(_0, _1, _2) {
  return __async(this, arguments, function* (t, e, r) {
    var n;
    if (typeof t != "function") throw new zt("reducer", ["Function", "AsyncFunction"], t);
    r != null && pt(r, "options"), (r == null ? void 0 : r.signal) != null && ht(r.signal, "options.signal");
    let i = arguments.length > 1;
    if (r != null && (n = r.signal) !== null && n !== void 0 && n.aborted) {
      const _ = new Me(void 0, {
        cause: r.signal.reason
      });
      throw this.once("error", () => {
      }), yield lu(this.destroy(_)), _;
    }
    const a = new ru(), l = a.signal;
    if (r != null && r.signal) {
      const _ = {
        once: true,
        [ou]: this,
        [au]: true
      };
      r.signal.addEventListener("abort", () => a.abort(), _);
    }
    let u = false;
    try {
      try {
        for (var iter = __forAwait(this), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
          const _ = temp.value;
          var p;
          if (u = true, r != null && (p = r.signal) !== null && p !== void 0 && p.aborted) throw new Me();
          i ? e = yield t(e, _, {
            signal: l
          }) : (e = _, i = true);
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield temp.call(iter));
        } finally {
          if (error)
            throw error[0];
        }
      }
      if (!u && !i) throw new Iu();
    } finally {
      a.abort();
    }
    return e;
  });
}
function Au(t) {
  return __async(this, null, function* () {
    t != null && pt(t, "options"), (t == null ? void 0 : t.signal) != null && ht(t.signal, "options.signal");
    const e = [];
    try {
      for (var iter = __forAwait(this), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
        const n = temp.value;
        var r;
        if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted) throw new Me(void 0, {
          cause: t.signal.reason
        });
        pu(e, n);
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield temp.call(iter));
      } finally {
        if (error)
          throw error[0];
      }
    }
    return e;
  });
}
function Tu(t, e) {
  const r = yr.call(this, t, e);
  return function() {
    return __asyncGenerator(this, null, function* () {
      try {
        for (var iter = __forAwait(r), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
          const i = temp.value;
          yield* __yieldStar(i);
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield new __await(temp.call(iter)));
        } finally {
          if (error)
            throw error[0];
        }
      }
    });
  }.call(this);
}
function ks(t) {
  if (t = bu(t), yu(t)) return 0;
  if (t < 0) throw new su("number", ">= 0", t);
  return t;
}
function vu(t, e = void 0) {
  return e != null && pt(e, "options"), (e == null ? void 0 : e.signal) != null && ht(e.signal, "options.signal"), t = ks(t), function() {
    return __asyncGenerator(this, null, function* () {
      var n;
      if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted) throw new Me();
      try {
        for (var iter = __forAwait(this), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
          const a = temp.value;
          var i;
          if (e != null && (i = e.signal) !== null && i !== void 0 && i.aborted) throw new Me();
          t-- <= 0 && (yield a);
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield new __await(temp.call(iter)));
        } finally {
          if (error)
            throw error[0];
        }
      }
    });
  }.call(this);
}
function Nu(t, e = void 0) {
  return e != null && pt(e, "options"), (e == null ? void 0 : e.signal) != null && ht(e.signal, "options.signal"), t = ks(t), function() {
    return __asyncGenerator(this, null, function* () {
      var n;
      if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted) throw new Me();
      try {
        for (var iter = __forAwait(this), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
          const a = temp.value;
          var i;
          if (e != null && (i = e.signal) !== null && i !== void 0 && i.aborted) throw new Me();
          if (t-- > 0 && (yield a), t <= 0) return;
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield new __await(temp.call(iter)));
        } finally {
          if (error)
            throw error[0];
        }
      }
    });
  }.call(this);
}
cn.streamReturningOperators = {
  asIndexedPairs: hu(mu, "readable.asIndexedPairs will be removed in a future version."),
  drop: vu,
  filter: xn,
  flatMap: Tu,
  map: yr,
  take: Nu,
  compose: wu
};
cn.promiseReturningOperators = {
  every: xu,
  forEach: Su,
  reduce: Ru,
  toArray: Au,
  some: Fs,
  find: Eu
};
var zr;
var Ni;
function Cs() {
  if (Ni) return zr;
  Ni = 1;
  const {
    ArrayPrototypePop: t,
    Promise: e
  } = fe, {
    isIterable: r,
    isNodeStream: n,
    isWebStream: i
  } = Ke, {
    pipelineImpl: a
  } = mn, {
    finished: l
  } = tt;
  Os();
  function u(...p) {
    return new e((_, y) => {
      let x, I;
      const S = p[p.length - 1];
      if (S && typeof S == "object" && !n(S) && !r(S) && !i(S)) {
        const R = t(p);
        x = R.signal, I = R.end;
      }
      a(p, (R, m) => {
        R ? y(R) : _(m);
      }, {
        signal: x,
        end: I
      });
    });
  }
  return zr = {
    finished: l,
    pipeline: u
  }, zr;
}
var Pi;
function Os() {
  if (Pi) return Ar.exports;
  Pi = 1;
  const {
    Buffer: t
  } = De, {
    ObjectDefineProperty: e,
    ObjectKeys: r,
    ReflectApply: n
  } = fe, {
    promisify: {
      custom: i
    }
  } = Ie, {
    streamReturningOperators: a,
    promiseReturningOperators: l
  } = cn, {
    codes: {
      ERR_ILLEGAL_CONSTRUCTOR: u
    }
  } = xe, p = $s, {
    setDefaultHighWaterMark: _,
    getDefaultHighWaterMark: y
  } = _r, {
    pipeline: x
  } = mn, {
    destroyer: I
  } = Tt, S = tt, R = Cs(), m = Ke, v = Ar.exports = _n.Stream;
  v.isDestroyed = m.isDestroyed, v.isDisturbed = m.isDisturbed, v.isErrored = m.isErrored, v.isReadable = m.isReadable, v.isWritable = m.isWritable, v.Readable = br();
  for (const B of r(a)) {
    let z = function(...U) {
      if (new.target) throw u();
      return v.Readable.from(n(A, this, U));
    };
    const A = a[B];
    e(z, "name", {
      __proto__: null,
      value: A.name
    }), e(z, "length", {
      __proto__: null,
      value: A.length
    }), e(v.Readable.prototype, B, {
      __proto__: null,
      value: z,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }
  for (const B of r(l)) {
    let z = function(...U) {
      if (new.target) throw u();
      return n(A, this, U);
    };
    const A = l[B];
    e(z, "name", {
      __proto__: null,
      value: A.name
    }), e(z, "length", {
      __proto__: null,
      value: A.length
    }), e(v.Readable.prototype, B, {
      __proto__: null,
      value: z,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }
  v.Writable = yn(), v.Duplex = He(), v.Transform = Ns, v.PassThrough = js, v.pipeline = x;
  const {
    addAbortSignal: $
  } = pr;
  return v.addAbortSignal = $, v.finished = S, v.destroy = I, v.compose = p, v.setDefaultHighWaterMark = _, v.getDefaultHighWaterMark = y, e(v, "promises", {
    __proto__: null,
    configurable: true,
    enumerable: true,
    get() {
      return R;
    }
  }), e(x, i, {
    __proto__: null,
    enumerable: true,
    get() {
      return R.pipeline;
    }
  }), e(S, i, {
    __proto__: null,
    enumerable: true,
    get() {
      return R.finished;
    }
  }), v.Stream = v, v._isUint8Array = function(A) {
    return A instanceof Uint8Array;
  }, v._uint8ArrayToBuffer = function(A) {
    return t.from(A.buffer, A.byteOffset, A.byteLength);
  }, Ar.exports;
}
(function(t) {
  const e = Os(), r = Cs(), n = e.Readable.destroy;
  t.exports = e.Readable, t.exports._uint8ArrayToBuffer = e._uint8ArrayToBuffer, t.exports._isUint8Array = e._isUint8Array, t.exports.isDisturbed = e.isDisturbed, t.exports.isErrored = e.isErrored, t.exports.isReadable = e.isReadable, t.exports.Readable = e.Readable, t.exports.Writable = e.Writable, t.exports.Duplex = e.Duplex, t.exports.Transform = e.Transform, t.exports.PassThrough = e.PassThrough, t.exports.addAbortSignal = e.addAbortSignal, t.exports.finished = e.finished, t.exports.destroy = e.destroy, t.exports.destroy = n, t.exports.pipeline = e.pipeline, t.exports.compose = e.compose, Object.defineProperty(e, "promises", {
    configurable: true,
    enumerable: true,
    get() {
      return r;
    }
  }), t.exports.Stream = e.Stream, t.exports.default = t.exports;
})(Wi);
var Ms = Wi.exports;
var qr = Symbol("iter");
function Dt(t, e, r = 4) {
  if (r === 0) return Object.assign(t, e);
  for (const n in e) t[n] = Dt(t[n] || /* @__PURE__ */ Object.create(null), e[n], r - 1);
  return t;
}
function Ds(t, e, r = 4) {
  let n = false;
  for (const i in t) if (i in e) {
    const a = r === 0 ? null : Ds(t[i], e[i], r - 1);
    if (a !== false) n = n || /* @__PURE__ */ Object.create(null), n[i] = a;
    else if (r === 3) return false;
  }
  return n;
}
function Us(t, e, r = 4) {
  let n = false;
  for (const i in t) if (!(i in e)) n = n || /* @__PURE__ */ Object.create(null), n[i] = r === 0 ? null : Dt({}, t[i], r - 1);
  else if (r !== 0) {
    const a = Us(t[i], e[i], r - 1);
    if (a !== false) n = n || /* @__PURE__ */ Object.create(null), n[i] = a;
    else if (r === 3) return false;
  }
  return n;
}
var Pu = class {
  constructor(e = {}) {
    this._id = 1, this._ids = /* @__PURE__ */ Object.create(null), this._ids[""] = 1, this._entities = /* @__PURE__ */ Object.create(null), this._entities[1] = "", this._blankNodeIndex = 0, this._factory = e.factory || ft;
  }
  _termFromId(e) {
    if (e[0] === ".") {
      const r = this._entities, n = e.split(".");
      return this._factory.quad(this._termFromId(r[n[1]]), this._termFromId(r[n[2]]), this._termFromId(r[n[3]]), n[4] && this._termFromId(r[n[4]]));
    }
    return kt(e, this._factory);
  }
  _termToNumericId(e) {
    if (e.termType === "Quad") {
      const r = this._termToNumericId(e.subject), n = this._termToNumericId(e.predicate), i = this._termToNumericId(e.object);
      let a;
      return r && n && i && (Qr(e.graph) || (a = this._termToNumericId(e.graph))) && this._ids[a ? `.${r}.${n}.${i}.${a}` : `.${r}.${n}.${i}`];
    }
    return this._ids[wt(e)];
  }
  _termToNewNumericId(e) {
    const r = e && e.termType === "Quad" ? `.${this._termToNewNumericId(e.subject)}.${this._termToNewNumericId(e.predicate)}.${this._termToNewNumericId(e.object)}${Qr(e.graph) ? "" : `.${this._termToNewNumericId(e.graph)}`}` : wt(e);
    return this._ids[r] || (this._ids[this._entities[++this._id] = r] = this._id);
  }
  createBlankNode(e) {
    let r, n;
    if (e) for (r = e = `_:${e}`, n = 1; this._ids[r]; ) r = e + n++;
    else do
      r = `_:b${this._blankNodeIndex++}`;
    while (this._ids[r]);
    return this._ids[r] = ++this._id, this._entities[this._id] = r, this._factory.blankNode(r.substr(2));
  }
};
var Se = class _Se {
  constructor(e, r) {
    this._size = 0, this._graphs = /* @__PURE__ */ Object.create(null), !r && e && !e[0] && typeof e.match != "function" && (r = e, e = null), r = r || {}, this._factory = r.factory || ft, this._entityIndex = r.entityIndex || new Pu({
      factory: this._factory
    }), this._entities = this._entityIndex._entities, this._termFromId = this._entityIndex._termFromId.bind(this._entityIndex), this._termToNumericId = this._entityIndex._termToNumericId.bind(this._entityIndex), this._termToNewNumericId = this._entityIndex._termToNewNumericId.bind(this._entityIndex), e && this.addAll(e);
  }
  // ## Public properties
  // ### `size` returns the number of quads in the store
  get size() {
    let e = this._size;
    if (e !== null) return e;
    e = 0;
    const r = this._graphs;
    let n, i;
    for (const a in r) for (const l in n = r[a].subjects) for (const u in i = n[l]) e += Object.keys(i[u]).length;
    return this._size = e;
  }
  // ## Private methods
  // ### `_addToIndex` adds a quad to a three-layered index.
  // Returns if the index has changed, if the entry did not already exist.
  _addToIndex(e, r, n, i) {
    const a = e[r] || (e[r] = {}), l = a[n] || (a[n] = {}), u = i in l;
    return u || (l[i] = null), !u;
  }
  // ### `_removeFromIndex` removes a quad from a three-layered index
  _removeFromIndex(e, r, n, i) {
    const a = e[r], l = a[n];
    delete l[i];
    for (const u in l) return;
    delete a[n];
    for (const u in a) return;
    delete e[r];
  }
  // ### `_findInIndex` finds a set of quads in a three-layered index.
  // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
  // Any of these keys can be undefined, which is interpreted as a wildcard.
  // `name0`, `name1`, and `name2` are the names of the keys at each level,
  // used when reconstructing the resulting quad
  // (for instance: _subject_, _predicate_, and _object_).
  // Finally, `graphId` will be the graph of the created quads.
  *_findInIndex(e, r, n, i, a, l, u, p) {
    let _, y, x;
    const I = this._entities, S = this._termFromId(I[p]), R = {
      subject: null,
      predicate: null,
      object: null
    };
    r && ((_ = e, e = {})[r] = _[r]);
    for (const m in e) if (y = e[m]) {
      R[a] = this._termFromId(I[m]), n && ((_ = y, y = {})[n] = _[n]);
      for (const v in y) if (x = y[v]) {
        R[l] = this._termFromId(I[v]);
        const $ = i ? i in x ? [i] : [] : Object.keys(x);
        for (let B = 0; B < $.length; B++) R[u] = this._termFromId(I[$[B]]), yield this._factory.quad(R.subject, R.predicate, R.object, S);
      }
    }
  }
  // ### `_loop` executes the callback on all keys of index 0
  _loop(e, r) {
    for (const n in e) r(n);
  }
  // ### `_loopByKey0` executes the callback on all keys of a certain entry in index 0
  _loopByKey0(e, r, n) {
    let i, a;
    if (i = e[r]) for (a in i) n(a);
  }
  // ### `_loopByKey1` executes the callback on given keys of all entries in index 0
  _loopByKey1(e, r, n) {
    let i, a;
    for (i in e) a = e[i], a[r] && n(i);
  }
  // ### `_loopBy2Keys` executes the callback on given keys of certain entries in index 2
  _loopBy2Keys(e, r, n, i) {
    let a, l, u;
    if ((a = e[r]) && (l = a[n])) for (u in l) i(u);
  }
  // ### `_countInIndex` counts matching quads in a three-layered index.
  // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
  // Any of these keys can be undefined, which is interpreted as a wildcard.
  _countInIndex(e, r, n, i) {
    let a = 0, l, u, p;
    r && ((l = e, e = {})[r] = l[r]);
    for (const _ in e) if (u = e[_]) {
      n && ((l = u, u = {})[n] = l[n]);
      for (const y in u) (p = u[y]) && (i ? i in p && a++ : a += Object.keys(p).length);
    }
    return a;
  }
  // ### `_getGraphs` returns an array with the given graph,
  // or all graphs if the argument is null or undefined.
  _getGraphs(e) {
    return e = e === "" ? 1 : e && (this._termToNumericId(e) || -1), typeof e != "number" ? this._graphs : {
      [e]: this._graphs[e]
    };
  }
  // ### `_uniqueEntities` returns a function that accepts an entity ID
  // and passes the corresponding entity to callback if it hasn't occurred before.
  _uniqueEntities(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return (n) => {
      n in r || (r[n] = true, e(this._termFromId(this._entities[n], this._factory)));
    };
  }
  // ## Public methods
  // ### `add` adds the specified quad to the dataset.
  // Returns the dataset instance it was called on.
  // Existing quads, as defined in Quad.equals, will be ignored.
  add(e) {
    return this.addQuad(e), this;
  }
  // ### `addQuad` adds a new quad to the store.
  // Returns if the quad index has changed, if the quad did not already exist.
  addQuad(e, r, n, i) {
    r || (i = e.graph, n = e.object, r = e.predicate, e = e.subject), i = i ? this._termToNewNumericId(i) : 1;
    let a = this._graphs[i];
    return a || (a = this._graphs[i] = {
      subjects: {},
      predicates: {},
      objects: {}
    }, Object.freeze(a)), e = this._termToNewNumericId(e), r = this._termToNewNumericId(r), n = this._termToNewNumericId(n), this._addToIndex(a.subjects, e, r, n) ? (this._addToIndex(a.predicates, r, n, e), this._addToIndex(a.objects, n, e, r), this._size = null, true) : false;
  }
  // ### `addQuads` adds multiple quads to the store
  addQuads(e) {
    for (let r = 0; r < e.length; r++) this.addQuad(e[r]);
  }
  // ### `delete` removes the specified quad from the dataset.
  // Returns the dataset instance it was called on.
  delete(e) {
    return this.removeQuad(e), this;
  }
  // ### `has` determines whether a dataset includes a certain quad or quad pattern.
  has(e, r, n, i) {
    return e && e.subject && ({
      subject: e,
      predicate: r,
      object: n,
      graph: i
    } = e), !this.readQuads(e, r, n, i).next().done;
  }
  // ### `import` adds a stream of quads to the store
  import(e) {
    return e.on("data", (r) => {
      this.addQuad(r);
    }), e;
  }
  // ### `removeQuad` removes a quad from the store if it exists
  removeQuad(e, r, n, i) {
    r || ({
      subject: e,
      predicate: r,
      object: n,
      graph: i
    } = e), i = i ? this._termToNumericId(i) : 1;
    const a = this._graphs;
    let l, u, p;
    if (!(e = e && this._termToNumericId(e)) || !(r = r && this._termToNumericId(r)) || !(n = n && this._termToNumericId(n)) || !(l = a[i]) || !(u = l.subjects[e]) || !(p = u[r]) || !(n in p)) return false;
    this._removeFromIndex(l.subjects, e, r, n), this._removeFromIndex(l.predicates, r, n, e), this._removeFromIndex(l.objects, n, e, r), this._size !== null && this._size--;
    for (e in l.subjects) return true;
    return delete a[i], true;
  }
  // ### `removeQuads` removes multiple quads from the store
  removeQuads(e) {
    for (let r = 0; r < e.length; r++) this.removeQuad(e[r]);
  }
  // ### `remove` removes a stream of quads from the store
  remove(e) {
    return e.on("data", (r) => {
      this.removeQuad(r);
    }), e;
  }
  // ### `removeMatches` removes all matching quads from the store
  // Setting any field to `undefined` or `null` indicates a wildcard.
  removeMatches(e, r, n, i) {
    const a = new Ms.Readable({
      objectMode: true
    }), l = this.readQuads(e, r, n, i);
    return a._read = (u) => {
      for (; --u >= 0; ) {
        const {
          done: p,
          value: _
        } = l.next();
        if (p) {
          a.push(null);
          return;
        }
        a.push(_);
      }
    }, this.remove(a);
  }
  // ### `deleteGraph` removes all triples with the given graph from the store
  deleteGraph(e) {
    return this.removeMatches(null, null, null, e);
  }
  // ### `getQuads` returns an array of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getQuads(e, r, n, i) {
    return [...this.readQuads(e, r, n, i)];
  }
  /**
   * `readQuads` returns a generator of quads matching a pattern.
   * Setting any field to `undefined` or `null` indicates a wildcard.
   * @deprecated Use `match` instead.
   */
  *readQuads(e, r, n, i) {
    const a = this._getGraphs(i);
    let l, u, p, _;
    if (!(e && !(u = this._termToNumericId(e)) || r && !(p = this._termToNumericId(r)) || n && !(_ = this._termToNumericId(n)))) for (const y in a) (l = a[y]) && (u ? _ ? yield* __yieldStar(this._findInIndex(l.objects, _, u, p, "object", "subject", "predicate", y)) : yield* __yieldStar(this._findInIndex(l.subjects, u, p, null, "subject", "predicate", "object", y)) : p ? yield* __yieldStar(this._findInIndex(l.predicates, p, _, null, "predicate", "object", "subject", y)) : _ ? yield* __yieldStar(this._findInIndex(l.objects, _, null, null, "object", "subject", "predicate", y)) : yield* __yieldStar(this._findInIndex(l.subjects, null, null, null, "subject", "predicate", "object", y)));
  }
  // ### `match` returns a new dataset that is comprised of all quads in the current instance matching the given arguments.
  // The logic described in Quad Matching is applied for each quad in this dataset to check if it should be included in the output dataset.
  // Note: This method always returns a new DatasetCore, even if that dataset contains no quads.
  // Note: Since a DatasetCore is an unordered set, the order of the quads within the returned sequence is arbitrary.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  // For backwards compatibility, the object return also implements the Readable stream interface.
  match(e, r, n, i) {
    return new et(this, e, r, n, i, {
      entityIndex: this._entityIndex
    });
  }
  // ### `countQuads` returns the number of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  countQuads(e, r, n, i) {
    const a = this._getGraphs(i);
    let l = 0, u, p, _, y;
    if (e && !(p = this._termToNumericId(e)) || r && !(_ = this._termToNumericId(r)) || n && !(y = this._termToNumericId(n))) return 0;
    for (const x in a) (u = a[x]) && (e ? n ? l += this._countInIndex(u.objects, y, p, _) : l += this._countInIndex(u.subjects, p, _, y) : r ? l += this._countInIndex(u.predicates, _, y, p) : l += this._countInIndex(u.objects, y, p, _));
    return l;
  }
  // ### `forEach` executes the callback on all quads.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forEach(e, r, n, i, a) {
    this.some((l) => (e(l, this), false), r, n, i, a);
  }
  // ### `every` executes the callback on all quads,
  // and returns `true` if it returns truthy for all them.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  every(e, r, n, i, a) {
    return !this.some((l) => !e(l, this), r, n, i, a);
  }
  // ### `some` executes the callback on all quads,
  // and returns `true` if it returns truthy for any of them.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  some(e, r, n, i, a) {
    for (const l of this.readQuads(r, n, i, a)) if (e(l, this)) return true;
    return false;
  }
  // ### `getSubjects` returns all subjects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getSubjects(e, r, n) {
    const i = [];
    return this.forSubjects((a) => {
      i.push(a);
    }, e, r, n), i;
  }
  // ### `forSubjects` executes the callback on all subjects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forSubjects(e, r, n, i) {
    const a = this._getGraphs(i);
    let l, u, p;
    if (e = this._uniqueEntities(e), !(r && !(u = this._termToNumericId(r)) || n && !(p = this._termToNumericId(n)))) for (i in a) (l = a[i]) && (u ? p ? this._loopBy2Keys(l.predicates, u, p, e) : this._loopByKey1(l.subjects, u, e) : p ? this._loopByKey0(l.objects, p, e) : this._loop(l.subjects, e));
  }
  // ### `getPredicates` returns all predicates that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getPredicates(e, r, n) {
    const i = [];
    return this.forPredicates((a) => {
      i.push(a);
    }, e, r, n), i;
  }
  // ### `forPredicates` executes the callback on all predicates that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forPredicates(e, r, n, i) {
    const a = this._getGraphs(i);
    let l, u, p;
    if (e = this._uniqueEntities(e), !(r && !(u = this._termToNumericId(r)) || n && !(p = this._termToNumericId(n)))) for (i in a) (l = a[i]) && (u ? p ? this._loopBy2Keys(l.objects, p, u, e) : this._loopByKey0(l.subjects, u, e) : p ? this._loopByKey1(l.predicates, p, e) : this._loop(l.predicates, e));
  }
  // ### `getObjects` returns all objects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getObjects(e, r, n) {
    const i = [];
    return this.forObjects((a) => {
      i.push(a);
    }, e, r, n), i;
  }
  // ### `forObjects` executes the callback on all objects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forObjects(e, r, n, i) {
    const a = this._getGraphs(i);
    let l, u, p;
    if (e = this._uniqueEntities(e), !(r && !(u = this._termToNumericId(r)) || n && !(p = this._termToNumericId(n)))) for (i in a) (l = a[i]) && (u ? p ? this._loopBy2Keys(l.subjects, u, p, e) : this._loopByKey1(l.objects, u, e) : p ? this._loopByKey0(l.predicates, p, e) : this._loop(l.objects, e));
  }
  // ### `getGraphs` returns all graphs that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getGraphs(e, r, n) {
    const i = [];
    return this.forGraphs((a) => {
      i.push(a);
    }, e, r, n), i;
  }
  // ### `forGraphs` executes the callback on all graphs that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forGraphs(e, r, n, i) {
    for (const a in this._graphs) this.some((l) => (e(l.graph), true), r, n, i, this._termFromId(this._entities[a]));
  }
  // ### `createBlankNode` creates a new blank node, returning its name
  createBlankNode(e) {
    return this._entityIndex.createBlankNode(e);
  }
  // ### `extractLists` finds and removes all list triples
  // and returns the items per list.
  extractLists({
    remove: e = false,
    ignoreErrors: r = false
  } = {}) {
    const n = {}, i = r ? () => true : (u, p) => {
      throw new Error(`${u.value} ${p}`);
    }, a = this.getQuads(null, pe.rdf.rest, pe.rdf.nil, null), l = e ? [...a] : [];
    return a.forEach((u) => {
      const p = [];
      let _ = false, y, x;
      const I = u.graph;
      let S = u.subject;
      for (; S && !_; ) {
        const R = this.getQuads(null, null, S, null), m = this.getQuads(S, null, null, null);
        let v, $ = null, B = null, A = null;
        for (let z = 0; z < m.length && !_; z++) v = m[z], v.graph.equals(I) ? y ? _ = i(S, "has non-list arcs out") : v.predicate.value === pe.rdf.first ? $ ? _ = i(S, "has multiple rdf:first arcs") : l.push($ = v) : v.predicate.value === pe.rdf.rest ? B ? _ = i(S, "has multiple rdf:rest arcs") : l.push(B = v) : R.length ? _ = i(S, "can't be subject and object") : (y = v, x = "subject") : _ = i(S, "not confined to single graph");
        for (let z = 0; z < R.length && !_; ++z) v = R[z], y ? _ = i(S, "can't have coreferences") : v.predicate.value === pe.rdf.rest ? A ? _ = i(S, "has incoming rdf:rest arcs") : A = v : (y = v, x = "object");
        $ ? p.unshift($.object) : _ = i(S, "has no list head"), S = A && A.subject;
      }
      _ ? e = false : y && (n[y[x].value] = p);
    }), e && this.removeQuads(l), n;
  }
  /**
   * Returns `true` if the current dataset is a superset of the given dataset; in other words, returns `true` if
   * the given dataset is a subset of, i.e., is contained within, the current dataset.
   *
   * Blank Nodes will be normalized.
   */
  addAll(e) {
    if (e instanceof et && (e = e.filtered), Array.isArray(e)) this.addQuads(e);
    else if (e instanceof _Se && e._entityIndex === this._entityIndex) e._size !== 0 && (this._graphs = Dt(this._graphs, e._graphs), this._size = null);
    else for (const r of e) this.add(r);
    return this;
  }
  /**
   * Returns `true` if the current dataset is a superset of the given dataset; in other words, returns `true` if
   * the given dataset is a subset of, i.e., is contained within, the current dataset.
   *
   * Blank Nodes will be normalized.
   */
  contains(e) {
    if (e instanceof et && (e = e.filtered), e === this) return true;
    if (!(e instanceof _Se) || this._entityIndex !== e._entityIndex) return e.every((_) => this.has(_));
    const r = this._graphs, n = e._graphs;
    let i, a, l, u, p;
    for (const _ in n) {
      if (!(i = r[_])) return false;
      i = i.subjects;
      for (const y in a = n[_].subjects) {
        if (!(l = i[y])) return false;
        for (const x in u = a[y]) {
          if (!(p = l[x])) return false;
          for (const I in u[x]) if (!(I in p)) return false;
        }
      }
    }
    return true;
  }
  /**
   * This method removes the quads in the current dataset that match the given arguments.
   *
   * The logic described in {@link https://rdf.js.org/dataset-spec/#quad-matching|Quad Matching} is applied for each
   * quad in this dataset, to select the quads which will be deleted.
   *
   * @param subject   The optional exact subject to match.
   * @param predicate The optional exact predicate to match.
   * @param object    The optional exact object to match.
   * @param graph     The optional exact graph to match.
   */
  deleteMatches(e, r, n, i) {
    for (const a of this.match(e, r, n, i)) this.removeQuad(a);
    return this;
  }
  /**
   * Returns a new dataset that contains all quads from the current dataset that are not included in the given dataset.
   */
  difference(e) {
    if (e && e instanceof et && (e = e.filtered), e === this) return new _Se({
      entityIndex: this._entityIndex
    });
    if (e instanceof _Se && e._entityIndex === this._entityIndex) {
      const r = new _Se({
        entityIndex: this._entityIndex
      }), n = Us(this._graphs, e._graphs);
      return n && (r._graphs = n, r._size = null), r;
    }
    return this.filter((r) => !e.has(r));
  }
  /**
   * Returns true if the current dataset contains the same graph structure as the given dataset.
   *
   * Blank Nodes will be normalized.
   */
  equals(e) {
    return e instanceof et && (e = e.filtered), e === this || this.size === e.size && this.contains(e);
  }
  /**
   * Creates a new dataset with all the quads that pass the test implemented by the provided `iteratee`.
   *
   * This method is aligned with Array.prototype.filter() in ECMAScript-262.
   */
  filter(e) {
    const r = new _Se({
      entityIndex: this._entityIndex
    });
    for (const n of this) e(n, this) && r.add(n);
    return r;
  }
  /**
   * Returns a new dataset containing all quads from the current dataset that are also included in the given dataset.
   */
  intersection(e) {
    if (e instanceof et && (e = e.filtered), e === this) {
      const r = new _Se({
        entityIndex: this._entityIndex
      });
      return r._graphs = Dt(/* @__PURE__ */ Object.create(null), this._graphs), r._size = this._size, r;
    } else if (e instanceof _Se && this._entityIndex === e._entityIndex) {
      const r = new _Se({
        entityIndex: this._entityIndex
      }), n = Ds(e._graphs, this._graphs);
      return n && (r._graphs = n, r._size = null), r;
    }
    return this.filter((r) => e.has(r));
  }
  /**
   * Returns a new dataset containing all quads returned by applying `iteratee` to each quad in the current dataset.
   */
  map(e) {
    const r = new _Se({
      entityIndex: this._entityIndex
    });
    for (const n of this) r.add(e(n, this));
    return r;
  }
  /**
   * This method calls the `iteratee` method on each `quad` of the `Dataset`. The first time the `iteratee` method
   * is called, the `accumulator` value is the `initialValue`, or, if not given, equals the first quad of the `Dataset`.
   * The return value of each call to the `iteratee` method is used as the `accumulator` value for the next call.
   *
   * This method returns the return value of the last `iteratee` call.
   *
   * This method is aligned with `Array.prototype.reduce()` in ECMAScript-262.
   */
  reduce(e, r) {
    const n = this.readQuads();
    let i = r === void 0 ? n.next().value : r;
    for (const a of n) i = e(i, a, this);
    return i;
  }
  /**
   * Returns the set of quads within the dataset as a host-language-native sequence, for example an `Array` in
   * ECMAScript-262.
   *
   * Since a `Dataset` is an unordered set, the order of the quads within the returned sequence is arbitrary.
   */
  toArray() {
    return this.getQuads();
  }
  /**
   * Returns an N-Quads string representation of the dataset, preprocessed with the
   * {@link https://json-ld.github.io/normalization/spec/|RDF Dataset Normalization} algorithm.
   */
  toCanonical() {
    throw new Error("not implemented");
  }
  /**
   * Returns a stream that contains all quads of the dataset.
   */
  toStream() {
    return this.match();
  }
  /**
   * Returns an N-Quads string representation of the dataset.
   *
   * No prior normalization is required, therefore the results for the same quads may vary depending on the `Dataset`
   * implementation.
   */
  toString() {
    return new Ui().quadsToString(this);
  }
  /**
   * Returns a new `Dataset` that is a concatenation of this dataset and the quads given as an argument.
   */
  union(e) {
    const r = new _Se({
      entityIndex: this._entityIndex
    });
    return r._graphs = Dt(/* @__PURE__ */ Object.create(null), this._graphs), r._size = this._size, r.addAll(e), r;
  }
  // ### Store is an iterable.
  // Can be used where iterables are expected: for...of loops, array spread operator,
  // `yield*`, and destructuring assignment (order is not guaranteed).
  *[Symbol.iterator]() {
    yield* __yieldStar(this.readQuads());
  }
};
function Be(t, e, r = 0) {
  const n = e[r];
  if (n && !(n in t)) return false;
  let i = false;
  for (const a in n ? {
    [n]: t[n]
  } : t) {
    const l = r === 2 ? null : Be(t[a], e, r + 1);
    l !== false && (i = i || /* @__PURE__ */ Object.create(null), i[a] = l);
  }
  return i;
}
var et = class _et extends Ms.Readable {
  constructor(e, r, n, i, a, l) {
    super({
      objectMode: true
    }), Object.assign(this, {
      n3Store: e,
      subject: r,
      predicate: n,
      object: i,
      graph: a,
      options: l
    });
  }
  get filtered() {
    if (!this._filtered) {
      const {
        n3Store: e,
        graph: r,
        object: n,
        predicate: i,
        subject: a
      } = this, l = this._filtered = new Se({
        factory: e._factory,
        entityIndex: this.options.entityIndex
      });
      let u, p, _;
      if (a && !(u = l._termToNumericId(a)) || i && !(p = l._termToNumericId(i)) || n && !(_ = l._termToNumericId(n))) return l;
      const y = e._getGraphs(r);
      for (const x in y) {
        let I, S, R, m;
        (m = y[x]) && (!u && p ? (S = Be(m.predicates, [p, _, u])) && (I = Be(m.subjects, [u, p, _]), R = Be(m.objects, [_, u, p])) : _ ? (R = Be(m.objects, [_, u, p])) && (I = Be(m.subjects, [u, p, _]), S = Be(m.predicates, [p, _, u])) : (I = Be(m.subjects, [u, p, _])) && (S = Be(m.predicates, [p, _, u]), R = Be(m.objects, [_, u, p])), I && (l._graphs[x] = {
          subjects: I,
          predicates: S,
          objects: R
        }));
      }
      l._size = null;
    }
    return this._filtered;
  }
  get size() {
    return this.filtered.size;
  }
  _read(e) {
    e > 0 && !this[qr] && (this[qr] = this[Symbol.iterator]());
    const r = this[qr];
    for (; --e >= 0; ) {
      const {
        done: n,
        value: i
      } = r.next();
      if (n) {
        this.push(null);
        return;
      }
      this.push(i);
    }
  }
  addAll(e) {
    return this.filtered.addAll(e);
  }
  contains(e) {
    return this.filtered.contains(e);
  }
  deleteMatches(e, r, n, i) {
    return this.filtered.deleteMatches(e, r, n, i);
  }
  difference(e) {
    return this.filtered.difference(e);
  }
  equals(e) {
    return this.filtered.equals(e);
  }
  every(e, r, n, i, a) {
    return this.filtered.every(e, r, n, i, a);
  }
  filter(e) {
    return this.filtered.filter(e);
  }
  forEach(e, r, n, i, a) {
    return this.filtered.forEach(e, r, n, i, a);
  }
  import(e) {
    return this.filtered.import(e);
  }
  intersection(e) {
    return this.filtered.intersection(e);
  }
  map(e) {
    return this.filtered.map(e);
  }
  some(e, r, n, i, a) {
    return this.filtered.some(e, r, n, i, a);
  }
  toCanonical() {
    return this.filtered.toCanonical();
  }
  toStream() {
    return this._filtered ? this._filtered.toStream() : this.n3Store.match(this.subject, this.predicate, this.object, this.graph);
  }
  union(e) {
    return this._filtered ? this._filtered.union(e) : this.n3Store.match(this.subject, this.predicate, this.object, this.graph).addAll(e);
  }
  toArray() {
    return this._filtered ? this._filtered.toArray() : this.n3Store.getQuads(this.subject, this.predicate, this.object, this.graph);
  }
  reduce(e, r) {
    return this.filtered.reduce(e, r);
  }
  toString() {
    return new Ui().quadsToString(this);
  }
  add(e) {
    return this.filtered.add(e);
  }
  delete(e) {
    return this.filtered.delete(e);
  }
  has(e) {
    return this.filtered.has(e);
  }
  match(e, r, n, i) {
    return new _et(this.filtered, e, r, n, i, this.options);
  }
  *[Symbol.iterator]() {
    yield* __yieldStar(this._filtered || this.n3Store.readQuads(this.subject, this.predicate, this.object, this.graph));
  }
};
var En = {
  rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
};
var ce = {
  namespace: "https://prez.dev/",
  label: "https://prez.dev/label",
  description: "https://prez.dev/description",
  provenance: "https://prez.dev/provenance",
  focusNode: "https://prez.dev/FocusNode",
  link: "https://prez.dev/link",
  members: "https://prez.dev/members",
  identifier: "https://prez.dev/identifier",
  count: "https://prez.dev/count",
  searchResult: "https://prez.dev/SearchResult",
  searchResultWeight: "https://prez.dev/searchResultWeight",
  searchResultPredicate: "https://prez.dev/searchResultPredicate",
  searchResultURI: "https://prez.dev/searchResultURI",
  searchResultMatch: "https://prez.dev/searchResultMatch",
  hasChildren: "https://prez.dev/hasChildren",
  facetCount: "https://prez.dev/facetCount",
  facetName: "https://prez.dev/facetName",
  facetValue: "https://prez.dev/facetValue",
  profile: "https://prez.dev/profile"
};
var _e = {
  skosConceptScheme: "http://www.w3.org/2004/02/skos/core#ConceptScheme",
  skosConcept: "http://www.w3.org/2004/02/skos/core#Concept",
  a: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
  rdfLangString: "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
  xmlString: "http://www.w3.org/2001/XMLSchema#string",
  w3Html: "http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML",
  w3Markdown: "https://www.w3.org/ns/iana/media-types/text/markdown",
  shaclAllPredicates: "http://example.com/shacl-extension#allPredicateValues",
  shaclProperty: "http://www.w3.org/ns/shacl#property",
  shaclPath: "http://www.w3.org/ns/shacl#path",
  shaclUnion: "http://www.w3.org/ns/shacl#union"
};
var qu = {
  label: [
    // "http://www.w3.org/2000/01/rdf-schema#label",
    // "http://purl.org/dc/terms/title",
    // "http://www.w3.org/2004/02/skos/core#prefLabel",
    // "https://schema.org/name",
    "https://prez.dev/label"
  ],
  description: [
    // "http://purl.org/dc/terms/description",
    // "http://www.w3.org/2004/02/skos/core#definition",
    // "https://schema.org/description",
    "https://prez.dev/description"
  ],
  provenance: [
    // "http://purl.org/dc/terms/provenance",
    "https://prez.dev/provenance"
  ]
};
function ju(t, e = En) {
  if (t === "a") return e.rdf + "type";
  {
    const [r, n] = t.split(":");
    return r ? [r] + n : t;
  }
}
function Lu(t, e = En) {
  let r = "";
  return Object.entries(e).forEach(([n, i]) => {
    t.startsWith(i) && (r = n + ":" + t.split(i)[1]);
  }), r;
}
var $u = (t) => {
  const e = new URL(t);
  return `${e.protocol}//${e.hostname}`;
};
var Hu = (t) => new URL(t).pathname;
var Qu = (t, e) => {
  var n, i;
  const r = (i = (n = e.identifiers) == null ? void 0 : n.find((a) => a.value)) == null ? void 0 : i.value;
  return r ? t + `/concept-hierarchy/${r}/narrowers` : "";
};
var Vu = (t, e) => {
  var l;
  const r = e ? $u(e) : "", n = (l = t.identifiers) == null ? void 0 : l.find((u) => u.value), i = n ? n.value : "";
  return i ? r + `/concept-hierarchy/${i}/top-concepts` : "";
};
var an = (t) => t.flatMap((e) => {
  var r;
  if (e["@id"]) return e["@id"];
  if (e["@list"] && e["@list"].length > 0) {
    const n = e["@list"][0];
    return (n == null ? void 0 : n["@id"]) === _e.shaclUnion ? an(((r = e["@list"][1]) == null ? void 0 : r["@list"]) || []).filter(Boolean) : an(e["@list"]).flat();
  }
  return [];
}).filter((e) => !!e);
var Ku = (t) => t.reduce((e, r) => {
  if (_e.shaclProperty in r) for (const n of r[_e.shaclProperty]) {
    const i = t.find((a) => a["@id"] === n["@id"]);
    i && _e.shaclPath in i && (e[r["@id"]] = an(i[_e.shaclPath]).filter((a) => a !== _e.shaclAllPredicates));
  }
  return e;
}, {});
function rr(t) {
  if (Array.isArray(t)) return t.reduce((e, r) => {
    const n = rr(r);
    return typeof n == "object" && !Array.isArray(n) && Object.assign(e, n), e;
  }, {});
  if (typeof t == "object" && t !== null) {
    if (t.hasOwnProperty("value")) return t.value;
    if (t.hasOwnProperty("node") && t.hasOwnProperty("list")) {
      const e = {};
      return e[t.node.value] = t.list.length > 0 ? rr(t.list) : "", e;
    } else {
      const e = {};
      for (const r in t) e[r] = rr(t[r]);
      return e;
    }
  }
  return t;
}
function Ws(t, e = "") {
  let r = "";
  const n = Object.entries(t), i = n.length;
  return n.forEach(([a, l], u) => {
    const p = a.replace(/https?:\/\/(www\.)?/, ""), [_, y] = p.split("#"), x = _.split("/"), I = x[x.length - 1], S = y ? `(${x[0]})/${I}#${y}` : `(${x[0]})/${I}`, R = u === i - 1;
    r += `${e}${R ? "└── " : "├── "}${S}
`, typeof l == "object" && l !== null && (r += Ws(l, e + (R ? "    " : "│   ")));
  }), r;
}
function Yu(t) {
  return t ? Ws(rr(t)) : "";
}
var {
  namedNode: Ft
} = ft;
var Sn = class {
  constructor() {
    Ze(this, "store");
    Ze(this, "parser");
    Ze(this, "prefixes");
    Ze(this, "basePath");
    Ze(this, "baseUrl");
    Ze(this, "linkedLists");
    Ze(this, "lists");
    this.store = new Se(), this.baseUrl = "", this.basePath = "", this.parser = new Mi(), this.prefixes = En, this.linkedLists = {}, this.lists = {};
  }
  /**
   * Parses an RDF string in Turtle format into a store
   * 
   * @param s RDF Turtle string
   */
  load(e) {
    e = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
` + e;
    const r = this.parser.parse(e, null, (n, i) => {
      this.prefixes[n] = i.value;
    });
    this.store.addQuads(r), this.linkedLists = this.store.extractLists(), this.buildLists();
  }
  /** build the top level node array from a linked list */
  buildLists() {
    this.lists = {};
    const e = this.linkedLists;
    this.store.getQuads(null, _e.shaclPath, null, null).forEach((r) => {
      const n = r.object;
      if (n.termType === "BlankNode") {
        const i = this.store.getQuads(n, _e.shaclUnion, null, null);
        if (i.length > 0) {
          const a = i[0].object;
          if (a.termType === "BlankNode" && a.value in e) {
            const l = e[a.value], u = n.value;
            this.lists[u] = this.buildSubList(l);
          } else console.warn(`[buildLists] Found sh:union for ${n.value}, but its object ${a.value} is not a valid list head in linkedLists.`);
        }
      }
    });
  }
  /** build sub linked lists */
  buildSubList(e) {
    const r = [];
    for (const n of e) if (n.termType == "BlankNode") {
      const i = n.value;
      if (i in this.linkedLists) {
        const a = this.buildSubList(this.linkedLists[i]);
        if (a.length > 1) {
          const l = r.find((u) => u.node.value == a[0].node.value);
          l ? (l.list ?? (l.list = [])).push(...a.slice(1)) : r.push({
            node: a[0].node,
            list: a.slice(1)
          });
        } else r.push(...a);
      }
    } else if (n.termType == "NamedNode" && n.value != _e.shaclUnion) {
      const i = this.toPrezTerm(n);
      r.push({
        node: i,
        list: []
      });
    }
    return r;
  }
  /**
   * getParents uses the base path to remove the base path from the parent URL (for breadcrumbs)
   * 
   * @param url
   */
  setBaseUrl(e) {
    this.baseUrl = e, this.basePath = new URL(e).pathname;
  }
  /**
   * Interprets a predicate curie into its full IRI
   * 
   * Note: must be called after `load()`
   * 
   * @param s curie string
   * @returns Predicate IRI string
   */
  toIri(e) {
    return ju(e, this.prefixes);
  }
  /**
   * Generates a curie from a IRI
   * 
   * Note: must be called after `load()`
   * 
   * @param iri the IRI string
   * @returns Generated curie
   */
  fromIri(e) {
    return Lu(e, this.prefixes);
  }
  // private traverseRdfList() { }
  // public getRdfList() { }
  getObjectLiteral(e, r) {
    return this.getObjects(e, r).map((n) => this.toPrezTerm(n))[0] || void 0;
  }
  getProperties(e, r) {
    const n = {};
    return this.store.forEach((i) => {
      var a;
      r != null && r.excludePrefix && i.predicate.value.startsWith(r.excludePrefix) || r != null && r.includePrefix && !i.predicate.value.startsWith(r.includePrefix) || (n[a = i.predicate.value] ?? (n[a] = {
        predicate: this.toPrezTerm(i.predicate),
        objects: []
      }), n[i.predicate.value].objects.push(this.toPrezTerm(i.object)));
    }, e, null, null, null), e.termType, n;
  }
  getParents(e) {
    e.startsWith(this.basePath) && (e = e.substring(this.basePath.length));
    const r = e.split("/"), n = [];
    let i = "";
    for (const a of r) {
      if (a == "") continue;
      i += "/" + a;
      const l = {
        url: i,
        segment: a
      };
      if (a.includes(":")) {
        const u = a.split(":"), p = this.prefixes[u[0]];
        if (p) {
          const _ = this.getObjects(p + u[1], ce.label);
          _.length > 0 && (l.label = Ln(_[0].value));
        }
      }
      n.push(l);
    }
    return n;
  }
  toPrezTerm(e) {
    switch (e.termType) {
      case "NamedNode":
        const r = Ks(e.value);
        r.label = this.getObjectLiteral(e.value, ce.label), r.description = this.getObjectLiteral(e.value, ce.description), r.provenance = this.getObjectLiteral(e.value, ce.provenance);
        const n = this.getObjects(e.value, ce.identifier);
        n.length > 0 && (r.identifiers = n.map((_) => this.toPrezTerm(_)));
        const i = this.getObjects(e.value, ce.link);
        i.length > 0 && (r.links = i.map((_) => ({
          value: _.value,
          parents: this.getParents(_.value)
        })));
        const a = this.getObjects(e.value, ce.members);
        a.length > 0 && (r.members = {
          value: a[0].value,
          parents: this.getParents(a[0].value)
        });
        const l = this.getObjects(e.value, _e.a);
        return l.length > 0 && (r.rdfTypes = l.map((_) => this.toPrezTerm(_))), r;
      case "Literal":
        const u = Ln(e.value);
        return e.datatype && (u.datatype = this.toPrezTerm(e.datatype)), e.language && (u.language = e.language), u;
      case "BlankNode":
        const p = $n(e.value);
        return p.properties = this.getProperties(e), e.value in this.lists && (p.list = this.lists[e.value]), p;
      default:
        throw "Invalid n3 Term object";
    }
  }
  /**
   * Creates a PrezFocusNode object
   * 
   * @param obj 
   * @returns 
   */
  toPrezFocusNode(e) {
    var n, i, a, l, u;
    const r = this.toPrezTerm(e);
    return r.properties = this.getProperties(e, {
      excludePrefix: ce.namespace
    }), r.systemProperties = this.getProperties(e, {
      includePrefix: ce.namespace
    }), (n = r.rdfTypes) != null && n.map((p) => p.value).includes(_e.skosConcept) && (r.hasChildren = ((u = (l = (a = (i = r.systemProperties) == null ? void 0 : i[ce.hasChildren]) == null ? void 0 : a.objects) == null ? void 0 : l[0]) == null ? void 0 : u.value) == "true"), r;
  }
  /**
   * Gets an array of N3 `Quad_Objects` from a `Store` by providing a predicate or an array of predicates
   * 
   * @param predicate a string or string array of predicate IRIs
   * @param object the object IRI
   * @returns the array of objects
   */
  getSubjects(e, r) {
    return this.store.getSubjects(e, r, null);
  }
  /**
   * Gets an array of N3 `Quad_Objects` from a `Store` by providing a predicate or an array of predicates
   * 
   * @param subject the subject IRI
   * @param predicate a string or string array of predicate IRIs
   * @returns the array of objects
   */
  getObjects(e, r) {
    if (typeof r == "string") return this.store.getObjects(Ft(e), Ft(r), null);
    {
      const n = [];
      return r.forEach((i) => {
        n.push(...this.store.getObjects(Ft(e), Ft(i), null));
      }), n;
    }
  }
  getMembers(e) {
    this.getObjects(e, this.toIri("prez:members")).forEach((n) => ({
      value: n.value,
      parents: []
    }));
  }
  /**
   * Returns the concept hierarchy for a vocab
   * 
   * @param vocab 
   * @return the concept hierarchy
   */
  getConcepts(e) {
    const r = this.getSubjects(this.toIri("skos:inScheme"), e.value);
    function n(_) {
      return r.map((y) => y.value).includes(_.value);
    }
    const i = this.getObjects(e.value, this.toIri("skos:hasTopConcept")), a = this.getObjects(e.value, this.toIri("skos:topConceptOf")), l = {}, u = [...i, ...a].filter((_) => n(_));
    r.forEach((_) => {
      l[_.value] = [];
    }), r.forEach((_) => {
      this.getObjects(_.value, this.toIri("skos:broader")).forEach((I) => {
        n(I) && l[I.value].push(_);
      }), this.getObjects(_.value, this.toIri("skos:narrower")).forEach((I) => {
        n(I) && l[_.value].push(I);
      });
    });
    const p = [];
    return u.forEach((_) => {
      p.push(this.createHierarchy(_, l));
    }), p;
  }
  createHierarchy(e, r) {
    const n = r[e.value].map((i) => this.createHierarchy(i, r));
    return __spreadProps(__spreadValues({}, this.toPrezTerm(e)), {
      hasChildren: n.length > 0,
      narrowers: n
    });
  }
  getByPrezId(e) {
    const r = [];
    return this.store.forEach((n) => {
      r.push(n);
    }, null, null, Ft("https://prez.dev/FocusNode"), null), e ? r.find((n) => n.object.value === e).subject : r.map((n) => n.subject);
  }
  getCount() {
    const e = this.store.getObjects(null, ce.count, null);
    return e.length > 0 ? Number(e[0].value.replace(">", "")) : 0;
  }
  getMaxReached() {
    const e = this.store.getObjects(null, ce.count, null);
    return e.length > 0 ? e[0].value.includes(">") : false;
  }
  /**
   * Returns a list of item objects
   * 
   * @returns a list of item objects
   */
  getList() {
    const e = [];
    return this.getByPrezId().forEach((n) => {
      e.push(this.toPrezFocusNode(n));
    }), e;
  }
  /**
   * Returns an item object
   * 
   * @param id the id of the object to return
   * @returns the item object
   */
  getItem() {
    var n;
    const e = this.getByPrezId();
    if (e.length == 0) throw new Error("Unable to find item");
    const r = this.toPrezFocusNode(e[0]);
    if ((n = r.rdfTypes) != null && n.map((i) => i.value).includes(_e.skosConcept)) {
      const i = this.getConcepts(e[0]);
      return __spreadProps(__spreadValues({}, r), {
        topConcepts: {
          narrowers: i,
          hasChildren: i.length > 0
        }
      });
    }
    return r;
  }
  /**
   * Return nested subitems for a given predicate
   * 
   * @param predicate Predicate IRI to lookup
   * @returns 
   */
  getSubItems(e) {
    const r = this.store.getQuads(null, e, null, null), n = [];
    return r.forEach((i) => {
      const a = this.toPrezFocusNode(i.object);
      a && n.push(a);
    }), n;
  }
  /**
   * Returns search results
   */
  search() {
    return this.getSubjects(_e.a, ce.searchResult).map((n) => ({
      hash: n.value.split("urn:hash:").slice(-1)[0],
      weight: Number(this.getObjects(n.value, ce.searchResultWeight)[0].value),
      predicate: this.toPrezTerm(this.getObjects(n.value, ce.searchResultPredicate)[0]),
      match: this.toPrezTerm(this.getObjects(n.value, ce.searchResultMatch)[0]),
      resource: this.toPrezFocusNode(this.getObjects(n.value, ce.searchResultURI)[0])
    }));
  }
  /**
   * Returns a list of facets
   * 
   * @returns a list of facets
   */
  getFacets() {
    const e = [];
    return this.store.getQuads(null, ce.facetName, null, null).forEach((r) => {
      var n, i, a, l, u, p, _, y, x;
      if (r.subject.termType == "BlankNode") {
        const I = $n(r.subject.value);
        I.properties = this.getProperties(r.subject);
        const S = Number((a = (i = (n = I.properties) == null ? void 0 : n[ce.facetCount]) == null ? void 0 : i.objects) == null ? void 0 : a[0].value) || 0, R = (p = (u = (l = I.properties) == null ? void 0 : l[ce.facetName]) == null ? void 0 : u.objects) == null ? void 0 : p[0], m = (x = (y = (_ = I.properties) == null ? void 0 : _[ce.facetValue]) == null ? void 0 : y.objects) == null ? void 0 : x[0], v = R, $ = e.find((B) => B.facetName.value == (v == null ? void 0 : v.value));
        if (S > 0 && v !== void 0 && m !== void 0) {
          const B = this.toPrezTerm(m);
          if (B.termType === "Literal" || B.termType === "NamedNode") {
            const A = {
              // Now prezTerm is guaranteed to be PrezLiteral | PrezNode
              term: B,
              count: S
            };
            $ ? $.facetValues.push(A) : e.push({
              facetName: v,
              // Asserting it's a PrezNode based on usage
              facetValues: [A]
              // Type matches PrezFacetValue
            });
          }
        }
      }
    }), e;
  }
};
var Bu = class extends Error {
  constructor(e) {
    super(e), this.name = "NetworkError";
  }
};
function Fu(t) {
  let e = {};
  const r = t.split(",").map((i) => {
    const [, a, l] = i.trim().match(/<(.+)>; (.+)/), u = {
      uri: a
    };
    return l.split("; ").forEach((p) => {
      const [, _, y] = p.match(/(.+)=[\"<](.+)[\">]/);
      u[_] = y;
    }), u;
  });
  r.filter((i) => i.rel === "type").forEach((i) => {
    e[i.anchor] = {
      default: false,
      current: false,
      token: i.token,
      mediatypes: [],
      title: i.title,
      description: "",
      uri: i.anchor
    };
  });
  const n = r.find((i) => i.rel === "self");
  return n.format in e && (e[n.format].current = true), r.filter((i) => i.rel === "alternate" && i.format).forEach((i) => {
    e[i.format].mediatypes.map((a) => a.mediatype).includes(i.type) || e[i.format].mediatypes.push({
      title: "",
      mediatype: i.type,
      default: false
    });
  }), Object.values(e);
}
function In(t) {
  return __async(this, null, function* () {
    const e = yield fetch(t, {
      method: "GET",
      headers: {
        Accept: "text/anot+turtle"
      }
    });
    if (!e.ok) throw new Bu(`Network error - status code ${e.status}: ${e.statusText}`);
    const r = e.headers.get("link") || e.headers.get("Link"), n = r ? Fu(r) : [];
    return {
      data: yield e.text(),
      profiles: n
    };
  });
}
function ku(t, e) {
  return __async(this, null, function* () {
    const r = t + e, n = new URL(r).pathname, {
      data: i,
      profiles: a
    } = yield In(r), l = new Sn();
    return l.setBaseUrl(t), l.load(i), {
      type: "list",
      data: l.getList(),
      profiles: a,
      maxReached: l.getMaxReached(),
      count: l.getCount(),
      parents: l.getParents(n),
      facets: l.getFacets()
    };
  });
}
function Xu(t, e) {
  return __async(this, null, function* () {
    const r = t + e, n = new URL(r).pathname, {
      data: i,
      profiles: a
    } = yield In(r), l = new Sn();
    return l.setBaseUrl(t), l.load(i), {
      type: "item",
      data: l.getItem(),
      profiles: a,
      parents: l.getParents(n),
      store: l,
      facets: l.getFacets()
    };
  });
}
function Zu(t, e) {
  return __async(this, null, function* () {
    const r = t + e, n = new URL(r).pathname, {
      data: i,
      profiles: a
    } = yield In(r), l = new Sn();
    return l.setBaseUrl(t), l.load(i), {
      type: "search",
      data: l.search(),
      profiles: a,
      maxReached: l.getMaxReached(),
      count: l.getCount(),
      parents: l.getParents(n),
      facets: l.getFacets()
    };
  });
}
function Ju(t) {
  return __async(this, null, function* () {
    var i, a;
    const e = "/profiles?page=1&limit=999&_mediatype=application/anot%2Bturtle", {
      data: r
    } = yield ku(t, e), n = {};
    for (const l of r) if (n[l.value] = [], l.properties && (a = (i = l.properties) == null ? void 0 : i[_e.shaclProperty]) != null && a.objects) {
      const u = l.properties[_e.shaclProperty].objects;
      for (const p of u) {
        const _ = p;
        if (_.properties && _.properties[_e.shaclPath]) for (const y of _.properties[_e.shaclPath].objects) {
          const x = y.list;
          x && (n[l.value] = x);
        }
      }
    }
    return n;
  });
}
function Cu(t, e) {
  const r = {}, n = Object.keys(t), i = [
    ...(e || []).filter((a) => n.includes(a.node.value)).map((a) => a.node.value),
    // add fields that are in the list
    ...n.filter((a) => !(e || []).find((l) => l.node.value == a))
    // add the rest of the fields that are not in the list
  ].filter((a) => a in (t || {})).map((a) => t[a]);
  for (const a of i) e.find((l) => l.node.value == a.predicate.value && l.list && l.list.length > 0), r[a.predicate.value] = t[a.predicate.value];
  return r;
}
function ef(t, e) {
  t.data.properties = Cu(t.data.properties || {}, e);
}
export {
  qu as ANNOTATION_PREDICATES,
  En as DEFAULT_PREFIXES,
  ce as PREZ_PREDICATES,
  Sn as RDFStore,
  _e as SYSTEM_PREDICATES,
  In as apiGet,
  ef as applyProfileToItem,
  $n as bnode,
  Ku as buildProfiles,
  Lu as defaultFromIri,
  ju as defaultToIri,
  Yu as dumpNodeArray,
  $u as getBaseUrl,
  Xu as getItem,
  ku as getList,
  Qu as getNarrowersUrl,
  Ju as getProfiles,
  Vu as getTopConceptsUrl,
  Hu as getUrlPath,
  Mu as isTypePrezTerm,
  Ln as literal,
  Ks as node,
  Ws as nodeArrayToTree,
  an as processShaclPath,
  Zu as search,
  rr as simplifyNodeArray
};
/*! Bundled license information:

prez-lib/dist/prez-lib.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=prez-lib.js.map
