var Bw = Object.defineProperty;
var jd = (e) => {
  throw TypeError(e);
};
var Gw = (e, t, n) => t in e ? Bw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Qt = (e, t, n) => Gw(e, typeof t != "symbol" ? t + "" : t, n), Ra = (e, t, n) => t.has(e) || jd("Cannot " + n);
var M = (e, t, n) => (Ra(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ge = (e, t, n) => t.has(e) ? jd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ie = (e, t, n, r) => (Ra(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ne = (e, t, n) => (Ra(e, t, "access private method"), n);
var ir = (e, t, n, r) => ({
  set _(o) {
    ie(e, t, o, n);
  },
  get _() {
    return M(e, t, r);
  }
});
import hy, { ipcMain as mn, app as lo, dialog as Hw, BrowserWindow as yy } from "electron";
import { fileURLToPath as Xw } from "node:url";
import de from "node:path";
import Hi from "http";
import Xi from "https";
import Kw, { EventEmitter as Ww } from "events";
import Jw from "timers";
import fs from "url";
import Se from "node:process";
import { promisify as Ze, isDeepStrictEqual as Ld } from "node:util";
import ae from "node:fs";
import ko from "node:crypto";
import qd from "node:assert";
import gy from "node:os";
import "node:events";
import "node:stream";
import er from "util";
import lt, { Readable as Yw } from "stream";
import Ye from "path";
import Xl from "fs";
import vy from "crypto";
import by from "http2";
import wy from "assert";
import xy from "tty";
import Qw from "os";
import Jn from "zlib";
import Zw from "constants";
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bn = {}, Aa = {}, Fd;
function Kl() {
  return Fd || (Fd = 1, (function() {
    Aa.defaults = {
      "0.1": {
        explicitCharkey: !1,
        trim: !0,
        normalize: !0,
        normalizeTags: !1,
        attrkey: "@",
        charkey: "#",
        explicitArray: !1,
        ignoreAttrs: !1,
        mergeAttrs: !1,
        explicitRoot: !1,
        validator: null,
        xmlns: !1,
        explicitChildren: !1,
        childkey: "@@",
        charsAsChildren: !1,
        includeWhiteChars: !1,
        async: !1,
        strict: !0,
        attrNameProcessors: null,
        attrValueProcessors: null,
        tagNameProcessors: null,
        valueProcessors: null,
        emptyTag: ""
      },
      "0.2": {
        explicitCharkey: !1,
        trim: !1,
        normalize: !1,
        normalizeTags: !1,
        attrkey: "$",
        charkey: "_",
        explicitArray: !0,
        ignoreAttrs: !1,
        mergeAttrs: !1,
        explicitRoot: !0,
        validator: null,
        xmlns: !1,
        explicitChildren: !1,
        preserveChildrenOrder: !1,
        childkey: "$$",
        charsAsChildren: !1,
        includeWhiteChars: !1,
        async: !1,
        strict: !0,
        attrNameProcessors: null,
        attrValueProcessors: null,
        tagNameProcessors: null,
        valueProcessors: null,
        rootName: "root",
        xmldec: {
          version: "1.0",
          encoding: "UTF-8",
          standalone: !0
        },
        doctype: null,
        renderOpts: {
          pretty: !0,
          indent: "  ",
          newline: `
`
        },
        headless: !1,
        chunkSize: 1e4,
        emptyTag: "",
        cdata: !1
      }
    };
  }).call(re)), Aa;
}
var Da = {}, hn = {}, yn = {}, Md;
function An() {
  return Md || (Md = 1, (function() {
    var e, t, n, r, o, s, i, a = [].slice, c = {}.hasOwnProperty;
    e = function() {
      var p, l, u, d, m, f;
      if (f = arguments[0], m = 2 <= arguments.length ? a.call(arguments, 1) : [], o(Object.assign))
        Object.assign.apply(null, arguments);
      else
        for (p = 0, u = m.length; p < u; p++)
          if (d = m[p], d != null)
            for (l in d)
              c.call(d, l) && (f[l] = d[l]);
      return f;
    }, o = function(p) {
      return !!p && Object.prototype.toString.call(p) === "[object Function]";
    }, s = function(p) {
      var l;
      return !!p && ((l = typeof p) == "function" || l === "object");
    }, n = function(p) {
      return o(Array.isArray) ? Array.isArray(p) : Object.prototype.toString.call(p) === "[object Array]";
    }, r = function(p) {
      var l;
      if (n(p))
        return !p.length;
      for (l in p)
        if (c.call(p, l))
          return !1;
      return !0;
    }, i = function(p) {
      var l, u;
      return s(p) && (u = Object.getPrototypeOf(p)) && (l = u.constructor) && typeof l == "function" && l instanceof l && Function.prototype.toString.call(l) === Function.prototype.toString.call(Object);
    }, t = function(p) {
      return o(p.valueOf) ? p.valueOf() : p;
    }, yn.assign = e, yn.isFunction = o, yn.isObject = s, yn.isArray = n, yn.isEmpty = r, yn.isPlainObject = i, yn.getValue = t;
  }).call(re)), yn;
}
var Ia = { exports: {} }, Ud;
function _y() {
  return Ud || (Ud = 1, (function() {
    Ia.exports = function() {
      function e() {
      }
      return e.prototype.hasFeature = function(t, n) {
        return !0;
      }, e.prototype.createDocumentType = function(t, n, r) {
        throw new Error("This DOM method is not implemented.");
      }, e.prototype.createDocument = function(t, n, r) {
        throw new Error("This DOM method is not implemented.");
      }, e.prototype.createHTMLDocument = function(t) {
        throw new Error("This DOM method is not implemented.");
      }, e.prototype.getFeature = function(t, n) {
        throw new Error("This DOM method is not implemented.");
      }, e;
    }();
  }).call(re)), Ia.exports;
}
var ka = { exports: {} }, Ca = { exports: {} }, ja = { exports: {} }, Vd;
function e0() {
  return Vd || (Vd = 1, (function() {
    ja.exports = function() {
      function e() {
      }
      return e.prototype.handleError = function(t) {
        throw new Error(t);
      }, e;
    }();
  }).call(re)), ja.exports;
}
var La = { exports: {} }, zd;
function t0() {
  return zd || (zd = 1, (function() {
    La.exports = function() {
      function e(t) {
        this.arr = t || [];
      }
      return Object.defineProperty(e.prototype, "length", {
        get: function() {
          return this.arr.length;
        }
      }), e.prototype.item = function(t) {
        return this.arr[t] || null;
      }, e.prototype.contains = function(t) {
        return this.arr.indexOf(t) !== -1;
      }, e;
    }();
  }).call(re)), La.exports;
}
var Bd;
function n0() {
  return Bd || (Bd = 1, (function() {
    var e, t;
    e = e0(), t = t0(), Ca.exports = function() {
      function n() {
        this.defaultParams = {
          "canonical-form": !1,
          "cdata-sections": !1,
          comments: !1,
          "datatype-normalization": !1,
          "element-content-whitespace": !0,
          entities: !0,
          "error-handler": new e(),
          infoset: !0,
          "validate-if-schema": !1,
          namespaces: !0,
          "namespace-declarations": !0,
          "normalize-characters": !1,
          "schema-location": "",
          "schema-type": "",
          "split-cdata-sections": !0,
          validate: !1,
          "well-formed": !0
        }, this.params = Object.create(this.defaultParams);
      }
      return Object.defineProperty(n.prototype, "parameterNames", {
        get: function() {
          return new t(Object.keys(this.defaultParams));
        }
      }), n.prototype.getParameter = function(r) {
        return this.params.hasOwnProperty(r) ? this.params[r] : null;
      }, n.prototype.canSetParameter = function(r, o) {
        return !0;
      }, n.prototype.setParameter = function(r, o) {
        return o != null ? this.params[r] = o : delete this.params[r];
      }, n;
    }();
  }).call(re)), Ca.exports;
}
var qa = { exports: {} }, Fa = { exports: {} }, Ma = { exports: {} }, Gd;
function Ce() {
  return Gd || (Gd = 1, (function() {
    Ma.exports = {
      Element: 1,
      Attribute: 2,
      Text: 3,
      CData: 4,
      EntityReference: 5,
      EntityDeclaration: 6,
      ProcessingInstruction: 7,
      Comment: 8,
      Document: 9,
      DocType: 10,
      DocumentFragment: 11,
      NotationDeclaration: 12,
      Declaration: 201,
      Raw: 202,
      AttributeDeclaration: 203,
      ElementDeclaration: 204,
      Dummy: 205
    };
  }).call(re)), Ma.exports;
}
var Ua = { exports: {} }, Hd;
function $y() {
  return Hd || (Hd = 1, (function() {
    var e;
    e = Ce(), It(), Ua.exports = function() {
      function t(n, r, o) {
        if (this.parent = n, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), r == null)
          throw new Error("Missing attribute name. " + this.debugInfo(r));
        this.name = this.stringify.name(r), this.value = this.stringify.attValue(o), this.type = e.Attribute, this.isId = !1, this.schemaTypeInfo = null;
      }
      return Object.defineProperty(t.prototype, "nodeType", {
        get: function() {
          return this.type;
        }
      }), Object.defineProperty(t.prototype, "ownerElement", {
        get: function() {
          return this.parent;
        }
      }), Object.defineProperty(t.prototype, "textContent", {
        get: function() {
          return this.value;
        },
        set: function(n) {
          return this.value = n || "";
        }
      }), Object.defineProperty(t.prototype, "namespaceURI", {
        get: function() {
          return "";
        }
      }), Object.defineProperty(t.prototype, "prefix", {
        get: function() {
          return "";
        }
      }), Object.defineProperty(t.prototype, "localName", {
        get: function() {
          return this.name;
        }
      }), Object.defineProperty(t.prototype, "specified", {
        get: function() {
          return !0;
        }
      }), t.prototype.clone = function() {
        return Object.create(this);
      }, t.prototype.toString = function(n) {
        return this.options.writer.attribute(this, this.options.writer.filterOptions(n));
      }, t.prototype.debugInfo = function(n) {
        return n = n || this.name, n == null ? "parent: <" + this.parent.name + ">" : "attribute: {" + n + "}, parent: <" + this.parent.name + ">";
      }, t.prototype.isEqualNode = function(n) {
        return !(n.namespaceURI !== this.namespaceURI || n.prefix !== this.prefix || n.localName !== this.localName || n.value !== this.value);
      }, t;
    }();
  }).call(re)), Ua.exports;
}
var Va = { exports: {} }, Xd;
function Wl() {
  return Xd || (Xd = 1, (function() {
    Va.exports = function() {
      function e(t) {
        this.nodes = t;
      }
      return Object.defineProperty(e.prototype, "length", {
        get: function() {
          return Object.keys(this.nodes).length || 0;
        }
      }), e.prototype.clone = function() {
        return this.nodes = null;
      }, e.prototype.getNamedItem = function(t) {
        return this.nodes[t];
      }, e.prototype.setNamedItem = function(t) {
        var n;
        return n = this.nodes[t.nodeName], this.nodes[t.nodeName] = t, n || null;
      }, e.prototype.removeNamedItem = function(t) {
        var n;
        return n = this.nodes[t], delete this.nodes[t], n || null;
      }, e.prototype.item = function(t) {
        return this.nodes[Object.keys(this.nodes)[t]] || null;
      }, e.prototype.getNamedItemNS = function(t, n) {
        throw new Error("This DOM method is not implemented.");
      }, e.prototype.setNamedItemNS = function(t) {
        throw new Error("This DOM method is not implemented.");
      }, e.prototype.removeNamedItemNS = function(t, n) {
        throw new Error("This DOM method is not implemented.");
      }, e;
    }();
  }).call(re)), Va.exports;
}
var Kd;
function Jl() {
  return Kd || (Kd = 1, (function() {
    var e, t, n, r, o, s, i, a, c = function(l, u) {
      for (var d in u)
        p.call(u, d) && (l[d] = u[d]);
      function m() {
        this.constructor = l;
      }
      return m.prototype = u.prototype, l.prototype = new m(), l.__super__ = u.prototype, l;
    }, p = {}.hasOwnProperty;
    a = An(), i = a.isObject, s = a.isFunction, o = a.getValue, r = It(), e = Ce(), t = $y(), n = Wl(), Fa.exports = function(l) {
      c(u, l);
      function u(d, m, f) {
        var g, y, v, b;
        if (u.__super__.constructor.call(this, d), m == null)
          throw new Error("Missing element name. " + this.debugInfo());
        if (this.name = this.stringify.name(m), this.type = e.Element, this.attribs = {}, this.schemaTypeInfo = null, f != null && this.attribute(f), d.type === e.Document && (this.isRoot = !0, this.documentObject = d, d.rootObject = this, d.children)) {
          for (b = d.children, y = 0, v = b.length; y < v; y++)
            if (g = b[y], g.type === e.DocType) {
              g.name = this.name;
              break;
            }
        }
      }
      return Object.defineProperty(u.prototype, "tagName", {
        get: function() {
          return this.name;
        }
      }), Object.defineProperty(u.prototype, "namespaceURI", {
        get: function() {
          return "";
        }
      }), Object.defineProperty(u.prototype, "prefix", {
        get: function() {
          return "";
        }
      }), Object.defineProperty(u.prototype, "localName", {
        get: function() {
          return this.name;
        }
      }), Object.defineProperty(u.prototype, "id", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(u.prototype, "className", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(u.prototype, "classList", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(u.prototype, "attributes", {
        get: function() {
          return (!this.attributeMap || !this.attributeMap.nodes) && (this.attributeMap = new n(this.attribs)), this.attributeMap;
        }
      }), u.prototype.clone = function() {
        var d, m, f, g;
        f = Object.create(this), f.isRoot && (f.documentObject = null), f.attribs = {}, g = this.attribs;
        for (m in g)
          p.call(g, m) && (d = g[m], f.attribs[m] = d.clone());
        return f.children = [], this.children.forEach(function(y) {
          var v;
          return v = y.clone(), v.parent = f, f.children.push(v);
        }), f;
      }, u.prototype.attribute = function(d, m) {
        var f, g;
        if (d != null && (d = o(d)), i(d))
          for (f in d)
            p.call(d, f) && (g = d[f], this.attribute(f, g));
        else
          s(m) && (m = m.apply()), this.options.keepNullAttributes && m == null ? this.attribs[d] = new t(this, d, "") : m != null && (this.attribs[d] = new t(this, d, m));
        return this;
      }, u.prototype.removeAttribute = function(d) {
        var m, f, g;
        if (d == null)
          throw new Error("Missing attribute name. " + this.debugInfo());
        if (d = o(d), Array.isArray(d))
          for (f = 0, g = d.length; f < g; f++)
            m = d[f], delete this.attribs[m];
        else
          delete this.attribs[d];
        return this;
      }, u.prototype.toString = function(d) {
        return this.options.writer.element(this, this.options.writer.filterOptions(d));
      }, u.prototype.att = function(d, m) {
        return this.attribute(d, m);
      }, u.prototype.a = function(d, m) {
        return this.attribute(d, m);
      }, u.prototype.getAttribute = function(d) {
        return this.attribs.hasOwnProperty(d) ? this.attribs[d].value : null;
      }, u.prototype.setAttribute = function(d, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getAttributeNode = function(d) {
        return this.attribs.hasOwnProperty(d) ? this.attribs[d] : null;
      }, u.prototype.setAttributeNode = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.removeAttributeNode = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagName = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getAttributeNS = function(d, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.setAttributeNS = function(d, m, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.removeAttributeNS = function(d, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getAttributeNodeNS = function(d, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.setAttributeNodeNS = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagNameNS = function(d, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.hasAttribute = function(d) {
        return this.attribs.hasOwnProperty(d);
      }, u.prototype.hasAttributeNS = function(d, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.setIdAttribute = function(d, m) {
        return this.attribs.hasOwnProperty(d) ? this.attribs[d].isId : m;
      }, u.prototype.setIdAttributeNS = function(d, m, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.setIdAttributeNode = function(d, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagName = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagNameNS = function(d, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByClassName = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.isEqualNode = function(d) {
        var m, f, g;
        if (!u.__super__.isEqualNode.apply(this, arguments).isEqualNode(d) || d.namespaceURI !== this.namespaceURI || d.prefix !== this.prefix || d.localName !== this.localName || d.attribs.length !== this.attribs.length)
          return !1;
        for (m = f = 0, g = this.attribs.length - 1; 0 <= g ? f <= g : f >= g; m = 0 <= g ? ++f : --f)
          if (!this.attribs[m].isEqualNode(d.attribs[m]))
            return !1;
        return !0;
      }, u;
    }(r);
  }).call(re)), Fa.exports;
}
var za = { exports: {} }, Ba = { exports: {} }, Wd;
function Ki() {
  return Wd || (Wd = 1, (function() {
    var e, t = function(r, o) {
      for (var s in o)
        n.call(o, s) && (r[s] = o[s]);
      function i() {
        this.constructor = r;
      }
      return i.prototype = o.prototype, r.prototype = new i(), r.__super__ = o.prototype, r;
    }, n = {}.hasOwnProperty;
    e = It(), Ba.exports = function(r) {
      t(o, r);
      function o(s) {
        o.__super__.constructor.call(this, s), this.value = "";
      }
      return Object.defineProperty(o.prototype, "data", {
        get: function() {
          return this.value;
        },
        set: function(s) {
          return this.value = s || "";
        }
      }), Object.defineProperty(o.prototype, "length", {
        get: function() {
          return this.value.length;
        }
      }), Object.defineProperty(o.prototype, "textContent", {
        get: function() {
          return this.value;
        },
        set: function(s) {
          return this.value = s || "";
        }
      }), o.prototype.clone = function() {
        return Object.create(this);
      }, o.prototype.substringData = function(s, i) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, o.prototype.appendData = function(s) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, o.prototype.insertData = function(s, i) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, o.prototype.deleteData = function(s, i) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, o.prototype.replaceData = function(s, i, a) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, o.prototype.isEqualNode = function(s) {
        return !(!o.__super__.isEqualNode.apply(this, arguments).isEqualNode(s) || s.data !== this.data);
      }, o;
    }(e);
  }).call(re)), Ba.exports;
}
var Jd;
function Yl() {
  return Jd || (Jd = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    e = Ce(), t = Ki(), za.exports = function(o) {
      n(s, o);
      function s(i, a) {
        if (s.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing CDATA text. " + this.debugInfo());
        this.name = "#cdata-section", this.type = e.CData, this.value = this.stringify.cdata(a);
      }
      return s.prototype.clone = function() {
        return Object.create(this);
      }, s.prototype.toString = function(i) {
        return this.options.writer.cdata(this, this.options.writer.filterOptions(i));
      }, s;
    }(t);
  }).call(re)), za.exports;
}
var Ga = { exports: {} }, Yd;
function Ql() {
  return Yd || (Yd = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    e = Ce(), t = Ki(), Ga.exports = function(o) {
      n(s, o);
      function s(i, a) {
        if (s.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing comment text. " + this.debugInfo());
        this.name = "#comment", this.type = e.Comment, this.value = this.stringify.comment(a);
      }
      return s.prototype.clone = function() {
        return Object.create(this);
      }, s.prototype.toString = function(i) {
        return this.options.writer.comment(this, this.options.writer.filterOptions(i));
      }, s;
    }(t);
  }).call(re)), Ga.exports;
}
var Ha = { exports: {} }, Qd;
function Zl() {
  return Qd || (Qd = 1, (function() {
    var e, t, n, r = function(s, i) {
      for (var a in i)
        o.call(i, a) && (s[a] = i[a]);
      function c() {
        this.constructor = s;
      }
      return c.prototype = i.prototype, s.prototype = new c(), s.__super__ = i.prototype, s;
    }, o = {}.hasOwnProperty;
    n = An().isObject, t = It(), e = Ce(), Ha.exports = function(s) {
      r(i, s);
      function i(a, c, p, l) {
        var u;
        i.__super__.constructor.call(this, a), n(c) && (u = c, c = u.version, p = u.encoding, l = u.standalone), c || (c = "1.0"), this.type = e.Declaration, this.version = this.stringify.xmlVersion(c), p != null && (this.encoding = this.stringify.xmlEncoding(p)), l != null && (this.standalone = this.stringify.xmlStandalone(l));
      }
      return i.prototype.toString = function(a) {
        return this.options.writer.declaration(this, this.options.writer.filterOptions(a));
      }, i;
    }(t);
  }).call(re)), Ha.exports;
}
var Xa = { exports: {} }, Ka = { exports: {} }, Zd;
function eu() {
  return Zd || (Zd = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    t = It(), e = Ce(), Ka.exports = function(o) {
      n(s, o);
      function s(i, a, c, p, l, u) {
        if (s.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing DTD element name. " + this.debugInfo());
        if (c == null)
          throw new Error("Missing DTD attribute name. " + this.debugInfo(a));
        if (!p)
          throw new Error("Missing DTD attribute type. " + this.debugInfo(a));
        if (!l)
          throw new Error("Missing DTD attribute default. " + this.debugInfo(a));
        if (l.indexOf("#") !== 0 && (l = "#" + l), !l.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(a));
        if (u && !l.match(/^(#FIXED|#DEFAULT)$/))
          throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(a));
        this.elementName = this.stringify.name(a), this.type = e.AttributeDeclaration, this.attributeName = this.stringify.name(c), this.attributeType = this.stringify.dtdAttType(p), u && (this.defaultValue = this.stringify.dtdAttDefault(u)), this.defaultValueType = l;
      }
      return s.prototype.toString = function(i) {
        return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(i));
      }, s;
    }(t);
  }).call(re)), Ka.exports;
}
var Wa = { exports: {} }, ef;
function tu() {
  return ef || (ef = 1, (function() {
    var e, t, n, r = function(s, i) {
      for (var a in i)
        o.call(i, a) && (s[a] = i[a]);
      function c() {
        this.constructor = s;
      }
      return c.prototype = i.prototype, s.prototype = new c(), s.__super__ = i.prototype, s;
    }, o = {}.hasOwnProperty;
    n = An().isObject, t = It(), e = Ce(), Wa.exports = function(s) {
      r(i, s);
      function i(a, c, p, l) {
        if (i.__super__.constructor.call(this, a), p == null)
          throw new Error("Missing DTD entity name. " + this.debugInfo(p));
        if (l == null)
          throw new Error("Missing DTD entity value. " + this.debugInfo(p));
        if (this.pe = !!c, this.name = this.stringify.name(p), this.type = e.EntityDeclaration, !n(l))
          this.value = this.stringify.dtdEntityValue(l), this.internal = !0;
        else {
          if (!l.pubID && !l.sysID)
            throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(p));
          if (l.pubID && !l.sysID)
            throw new Error("System identifier is required for a public external entity. " + this.debugInfo(p));
          if (this.internal = !1, l.pubID != null && (this.pubID = this.stringify.dtdPubID(l.pubID)), l.sysID != null && (this.sysID = this.stringify.dtdSysID(l.sysID)), l.nData != null && (this.nData = this.stringify.dtdNData(l.nData)), this.pe && this.nData)
            throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(p));
        }
      }
      return Object.defineProperty(i.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      }), Object.defineProperty(i.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      }), Object.defineProperty(i.prototype, "notationName", {
        get: function() {
          return this.nData || null;
        }
      }), Object.defineProperty(i.prototype, "inputEncoding", {
        get: function() {
          return null;
        }
      }), Object.defineProperty(i.prototype, "xmlEncoding", {
        get: function() {
          return null;
        }
      }), Object.defineProperty(i.prototype, "xmlVersion", {
        get: function() {
          return null;
        }
      }), i.prototype.toString = function(a) {
        return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(a));
      }, i;
    }(t);
  }).call(re)), Wa.exports;
}
var Ja = { exports: {} }, tf;
function nu() {
  return tf || (tf = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    t = It(), e = Ce(), Ja.exports = function(o) {
      n(s, o);
      function s(i, a, c) {
        if (s.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing DTD element name. " + this.debugInfo());
        c || (c = "(#PCDATA)"), Array.isArray(c) && (c = "(" + c.join(",") + ")"), this.name = this.stringify.name(a), this.type = e.ElementDeclaration, this.value = this.stringify.dtdElementValue(c);
      }
      return s.prototype.toString = function(i) {
        return this.options.writer.dtdElement(this, this.options.writer.filterOptions(i));
      }, s;
    }(t);
  }).call(re)), Ja.exports;
}
var Ya = { exports: {} }, nf;
function ru() {
  return nf || (nf = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    t = It(), e = Ce(), Ya.exports = function(o) {
      n(s, o);
      function s(i, a, c) {
        if (s.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing DTD notation name. " + this.debugInfo(a));
        if (!c.pubID && !c.sysID)
          throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(a));
        this.name = this.stringify.name(a), this.type = e.NotationDeclaration, c.pubID != null && (this.pubID = this.stringify.dtdPubID(c.pubID)), c.sysID != null && (this.sysID = this.stringify.dtdSysID(c.sysID));
      }
      return Object.defineProperty(s.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      }), Object.defineProperty(s.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      }), s.prototype.toString = function(i) {
        return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(i));
      }, s;
    }(t);
  }).call(re)), Ya.exports;
}
var rf;
function ou() {
  return rf || (rf = 1, (function() {
    var e, t, n, r, o, s, i, a, c = function(l, u) {
      for (var d in u)
        p.call(u, d) && (l[d] = u[d]);
      function m() {
        this.constructor = l;
      }
      return m.prototype = u.prototype, l.prototype = new m(), l.__super__ = u.prototype, l;
    }, p = {}.hasOwnProperty;
    a = An().isObject, i = It(), e = Ce(), t = eu(), r = tu(), n = nu(), o = ru(), s = Wl(), Xa.exports = function(l) {
      c(u, l);
      function u(d, m, f) {
        var g, y, v, b, w, T;
        if (u.__super__.constructor.call(this, d), this.type = e.DocType, d.children) {
          for (b = d.children, y = 0, v = b.length; y < v; y++)
            if (g = b[y], g.type === e.Element) {
              this.name = g.name;
              break;
            }
        }
        this.documentObject = d, a(m) && (w = m, m = w.pubID, f = w.sysID), f == null && (T = [m, f], f = T[0], m = T[1]), m != null && (this.pubID = this.stringify.dtdPubID(m)), f != null && (this.sysID = this.stringify.dtdSysID(f));
      }
      return Object.defineProperty(u.prototype, "entities", {
        get: function() {
          var d, m, f, g, y;
          for (g = {}, y = this.children, m = 0, f = y.length; m < f; m++)
            d = y[m], d.type === e.EntityDeclaration && !d.pe && (g[d.name] = d);
          return new s(g);
        }
      }), Object.defineProperty(u.prototype, "notations", {
        get: function() {
          var d, m, f, g, y;
          for (g = {}, y = this.children, m = 0, f = y.length; m < f; m++)
            d = y[m], d.type === e.NotationDeclaration && (g[d.name] = d);
          return new s(g);
        }
      }), Object.defineProperty(u.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      }), Object.defineProperty(u.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      }), Object.defineProperty(u.prototype, "internalSubset", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), u.prototype.element = function(d, m) {
        var f;
        return f = new n(this, d, m), this.children.push(f), this;
      }, u.prototype.attList = function(d, m, f, g, y) {
        var v;
        return v = new t(this, d, m, f, g, y), this.children.push(v), this;
      }, u.prototype.entity = function(d, m) {
        var f;
        return f = new r(this, !1, d, m), this.children.push(f), this;
      }, u.prototype.pEntity = function(d, m) {
        var f;
        return f = new r(this, !0, d, m), this.children.push(f), this;
      }, u.prototype.notation = function(d, m) {
        var f;
        return f = new o(this, d, m), this.children.push(f), this;
      }, u.prototype.toString = function(d) {
        return this.options.writer.docType(this, this.options.writer.filterOptions(d));
      }, u.prototype.ele = function(d, m) {
        return this.element(d, m);
      }, u.prototype.att = function(d, m, f, g, y) {
        return this.attList(d, m, f, g, y);
      }, u.prototype.ent = function(d, m) {
        return this.entity(d, m);
      }, u.prototype.pent = function(d, m) {
        return this.pEntity(d, m);
      }, u.prototype.not = function(d, m) {
        return this.notation(d, m);
      }, u.prototype.up = function() {
        return this.root() || this.documentObject;
      }, u.prototype.isEqualNode = function(d) {
        return !(!u.__super__.isEqualNode.apply(this, arguments).isEqualNode(d) || d.name !== this.name || d.publicId !== this.publicId || d.systemId !== this.systemId);
      }, u;
    }(i);
  }).call(re)), Xa.exports;
}
var Qa = { exports: {} }, of;
function su() {
  return of || (of = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    e = Ce(), t = It(), Qa.exports = function(o) {
      n(s, o);
      function s(i, a) {
        if (s.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing raw text. " + this.debugInfo());
        this.type = e.Raw, this.value = this.stringify.raw(a);
      }
      return s.prototype.clone = function() {
        return Object.create(this);
      }, s.prototype.toString = function(i) {
        return this.options.writer.raw(this, this.options.writer.filterOptions(i));
      }, s;
    }(t);
  }).call(re)), Qa.exports;
}
var Za = { exports: {} }, sf;
function iu() {
  return sf || (sf = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    e = Ce(), t = Ki(), Za.exports = function(o) {
      n(s, o);
      function s(i, a) {
        if (s.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing element text. " + this.debugInfo());
        this.name = "#text", this.type = e.Text, this.value = this.stringify.text(a);
      }
      return Object.defineProperty(s.prototype, "isElementContentWhitespace", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(s.prototype, "wholeText", {
        get: function() {
          var i, a, c;
          for (c = "", a = this.previousSibling; a; )
            c = a.data + c, a = a.previousSibling;
          for (c += this.data, i = this.nextSibling; i; )
            c = c + i.data, i = i.nextSibling;
          return c;
        }
      }), s.prototype.clone = function() {
        return Object.create(this);
      }, s.prototype.toString = function(i) {
        return this.options.writer.text(this, this.options.writer.filterOptions(i));
      }, s.prototype.splitText = function(i) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, s.prototype.replaceWholeText = function(i) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, s;
    }(t);
  }).call(re)), Za.exports;
}
var ec = { exports: {} }, af;
function au() {
  return af || (af = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    e = Ce(), t = Ki(), ec.exports = function(o) {
      n(s, o);
      function s(i, a, c) {
        if (s.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing instruction target. " + this.debugInfo());
        this.type = e.ProcessingInstruction, this.target = this.stringify.insTarget(a), this.name = this.target, c && (this.value = this.stringify.insValue(c));
      }
      return s.prototype.clone = function() {
        return Object.create(this);
      }, s.prototype.toString = function(i) {
        return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(i));
      }, s.prototype.isEqualNode = function(i) {
        return !(!s.__super__.isEqualNode.apply(this, arguments).isEqualNode(i) || i.target !== this.target);
      }, s;
    }(t);
  }).call(re)), ec.exports;
}
var tc = { exports: {} }, cf;
function Ey() {
  return cf || (cf = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    t = It(), e = Ce(), tc.exports = function(o) {
      n(s, o);
      function s(i) {
        s.__super__.constructor.call(this, i), this.type = e.Dummy;
      }
      return s.prototype.clone = function() {
        return Object.create(this);
      }, s.prototype.toString = function(i) {
        return "";
      }, s;
    }(t);
  }).call(re)), tc.exports;
}
var nc = { exports: {} }, lf;
function r0() {
  return lf || (lf = 1, (function() {
    nc.exports = function() {
      function e(t) {
        this.nodes = t;
      }
      return Object.defineProperty(e.prototype, "length", {
        get: function() {
          return this.nodes.length || 0;
        }
      }), e.prototype.clone = function() {
        return this.nodes = null;
      }, e.prototype.item = function(t) {
        return this.nodes[t] || null;
      }, e;
    }();
  }).call(re)), nc.exports;
}
var rc = { exports: {} }, uf;
function o0() {
  return uf || (uf = 1, (function() {
    rc.exports = {
      Disconnected: 1,
      Preceding: 2,
      Following: 4,
      Contains: 8,
      ContainedBy: 16,
      ImplementationSpecific: 32
    };
  }).call(re)), rc.exports;
}
var pf;
function It() {
  return pf || (pf = 1, (function() {
    var e, t, n, r, o, s, i, a, c, p, l, u, d, m, f, g, y, v = {}.hasOwnProperty;
    y = An(), g = y.isObject, f = y.isFunction, m = y.isEmpty, d = y.getValue, a = null, n = null, r = null, o = null, s = null, l = null, u = null, p = null, i = null, t = null, c = null, e = null, qa.exports = function() {
      function b(w) {
        this.parent = w, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.value = null, this.children = [], this.baseURI = null, a || (a = Jl(), n = Yl(), r = Ql(), o = Zl(), s = ou(), l = su(), u = iu(), p = au(), i = Ey(), t = Ce(), c = r0(), Wl(), e = o0());
      }
      return Object.defineProperty(b.prototype, "nodeName", {
        get: function() {
          return this.name;
        }
      }), Object.defineProperty(b.prototype, "nodeType", {
        get: function() {
          return this.type;
        }
      }), Object.defineProperty(b.prototype, "nodeValue", {
        get: function() {
          return this.value;
        }
      }), Object.defineProperty(b.prototype, "parentNode", {
        get: function() {
          return this.parent;
        }
      }), Object.defineProperty(b.prototype, "childNodes", {
        get: function() {
          return (!this.childNodeList || !this.childNodeList.nodes) && (this.childNodeList = new c(this.children)), this.childNodeList;
        }
      }), Object.defineProperty(b.prototype, "firstChild", {
        get: function() {
          return this.children[0] || null;
        }
      }), Object.defineProperty(b.prototype, "lastChild", {
        get: function() {
          return this.children[this.children.length - 1] || null;
        }
      }), Object.defineProperty(b.prototype, "previousSibling", {
        get: function() {
          var w;
          return w = this.parent.children.indexOf(this), this.parent.children[w - 1] || null;
        }
      }), Object.defineProperty(b.prototype, "nextSibling", {
        get: function() {
          var w;
          return w = this.parent.children.indexOf(this), this.parent.children[w + 1] || null;
        }
      }), Object.defineProperty(b.prototype, "ownerDocument", {
        get: function() {
          return this.document() || null;
        }
      }), Object.defineProperty(b.prototype, "textContent", {
        get: function() {
          var w, T, P, C, B;
          if (this.nodeType === t.Element || this.nodeType === t.DocumentFragment) {
            for (B = "", C = this.children, T = 0, P = C.length; T < P; T++)
              w = C[T], w.textContent && (B += w.textContent);
            return B;
          } else
            return null;
        },
        set: function(w) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), b.prototype.setParent = function(w) {
        var T, P, C, B, k;
        for (this.parent = w, w && (this.options = w.options, this.stringify = w.stringify), B = this.children, k = [], P = 0, C = B.length; P < C; P++)
          T = B[P], k.push(T.setParent(this));
        return k;
      }, b.prototype.element = function(w, T, P) {
        var C, B, k, E, q, I, z, H, F, U, G;
        if (I = null, T === null && P == null && (F = [{}, null], T = F[0], P = F[1]), T == null && (T = {}), T = d(T), g(T) || (U = [T, P], P = U[0], T = U[1]), w != null && (w = d(w)), Array.isArray(w))
          for (k = 0, z = w.length; k < z; k++)
            B = w[k], I = this.element(B);
        else if (f(w))
          I = this.element(w.apply());
        else if (g(w)) {
          for (q in w)
            if (v.call(w, q))
              if (G = w[q], f(G) && (G = G.apply()), !this.options.ignoreDecorators && this.stringify.convertAttKey && q.indexOf(this.stringify.convertAttKey) === 0)
                I = this.attribute(q.substr(this.stringify.convertAttKey.length), G);
              else if (!this.options.separateArrayItems && Array.isArray(G) && m(G))
                I = this.dummy();
              else if (g(G) && m(G))
                I = this.element(q);
              else if (!this.options.keepNullNodes && G == null)
                I = this.dummy();
              else if (!this.options.separateArrayItems && Array.isArray(G))
                for (E = 0, H = G.length; E < H; E++)
                  B = G[E], C = {}, C[q] = B, I = this.element(C);
              else g(G) ? !this.options.ignoreDecorators && this.stringify.convertTextKey && q.indexOf(this.stringify.convertTextKey) === 0 ? I = this.element(G) : (I = this.element(q), I.element(G)) : I = this.element(q, G);
        } else !this.options.keepNullNodes && P === null ? I = this.dummy() : !this.options.ignoreDecorators && this.stringify.convertTextKey && w.indexOf(this.stringify.convertTextKey) === 0 ? I = this.text(P) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && w.indexOf(this.stringify.convertCDataKey) === 0 ? I = this.cdata(P) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && w.indexOf(this.stringify.convertCommentKey) === 0 ? I = this.comment(P) : !this.options.ignoreDecorators && this.stringify.convertRawKey && w.indexOf(this.stringify.convertRawKey) === 0 ? I = this.raw(P) : !this.options.ignoreDecorators && this.stringify.convertPIKey && w.indexOf(this.stringify.convertPIKey) === 0 ? I = this.instruction(w.substr(this.stringify.convertPIKey.length), P) : I = this.node(w, T, P);
        if (I == null)
          throw new Error("Could not create any elements with: " + w + ". " + this.debugInfo());
        return I;
      }, b.prototype.insertBefore = function(w, T, P) {
        var C, B, k, E, q;
        if (w != null && w.type)
          return k = w, E = T, k.setParent(this), E ? (B = children.indexOf(E), q = children.splice(B), children.push(k), Array.prototype.push.apply(children, q)) : children.push(k), k;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(w));
        return B = this.parent.children.indexOf(this), q = this.parent.children.splice(B), C = this.parent.element(w, T, P), Array.prototype.push.apply(this.parent.children, q), C;
      }, b.prototype.insertAfter = function(w, T, P) {
        var C, B, k;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(w));
        return B = this.parent.children.indexOf(this), k = this.parent.children.splice(B + 1), C = this.parent.element(w, T, P), Array.prototype.push.apply(this.parent.children, k), C;
      }, b.prototype.remove = function() {
        var w;
        if (this.isRoot)
          throw new Error("Cannot remove the root element. " + this.debugInfo());
        return w = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [w, w - w + 1].concat([])), this.parent;
      }, b.prototype.node = function(w, T, P) {
        var C, B;
        return w != null && (w = d(w)), T || (T = {}), T = d(T), g(T) || (B = [T, P], P = B[0], T = B[1]), C = new a(this, w, T), P != null && C.text(P), this.children.push(C), C;
      }, b.prototype.text = function(w) {
        var T;
        return g(w) && this.element(w), T = new u(this, w), this.children.push(T), this;
      }, b.prototype.cdata = function(w) {
        var T;
        return T = new n(this, w), this.children.push(T), this;
      }, b.prototype.comment = function(w) {
        var T;
        return T = new r(this, w), this.children.push(T), this;
      }, b.prototype.commentBefore = function(w) {
        var T, P;
        return T = this.parent.children.indexOf(this), P = this.parent.children.splice(T), this.parent.comment(w), Array.prototype.push.apply(this.parent.children, P), this;
      }, b.prototype.commentAfter = function(w) {
        var T, P;
        return T = this.parent.children.indexOf(this), P = this.parent.children.splice(T + 1), this.parent.comment(w), Array.prototype.push.apply(this.parent.children, P), this;
      }, b.prototype.raw = function(w) {
        var T;
        return T = new l(this, w), this.children.push(T), this;
      }, b.prototype.dummy = function() {
        var w;
        return w = new i(this), w;
      }, b.prototype.instruction = function(w, T) {
        var P, C, B, k, E;
        if (w != null && (w = d(w)), T != null && (T = d(T)), Array.isArray(w))
          for (k = 0, E = w.length; k < E; k++)
            P = w[k], this.instruction(P);
        else if (g(w))
          for (P in w)
            v.call(w, P) && (C = w[P], this.instruction(P, C));
        else
          f(T) && (T = T.apply()), B = new p(this, w, T), this.children.push(B);
        return this;
      }, b.prototype.instructionBefore = function(w, T) {
        var P, C;
        return P = this.parent.children.indexOf(this), C = this.parent.children.splice(P), this.parent.instruction(w, T), Array.prototype.push.apply(this.parent.children, C), this;
      }, b.prototype.instructionAfter = function(w, T) {
        var P, C;
        return P = this.parent.children.indexOf(this), C = this.parent.children.splice(P + 1), this.parent.instruction(w, T), Array.prototype.push.apply(this.parent.children, C), this;
      }, b.prototype.declaration = function(w, T, P) {
        var C, B;
        return C = this.document(), B = new o(C, w, T, P), C.children.length === 0 ? C.children.unshift(B) : C.children[0].type === t.Declaration ? C.children[0] = B : C.children.unshift(B), C.root() || C;
      }, b.prototype.dtd = function(w, T) {
        var P, C, B, k, E, q, I, z, H, F;
        for (C = this.document(), B = new s(C, w, T), H = C.children, k = E = 0, I = H.length; E < I; k = ++E)
          if (P = H[k], P.type === t.DocType)
            return C.children[k] = B, B;
        for (F = C.children, k = q = 0, z = F.length; q < z; k = ++q)
          if (P = F[k], P.isRoot)
            return C.children.splice(k, 0, B), B;
        return C.children.push(B), B;
      }, b.prototype.up = function() {
        if (this.isRoot)
          throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
        return this.parent;
      }, b.prototype.root = function() {
        var w;
        for (w = this; w; ) {
          if (w.type === t.Document)
            return w.rootObject;
          if (w.isRoot)
            return w;
          w = w.parent;
        }
      }, b.prototype.document = function() {
        var w;
        for (w = this; w; ) {
          if (w.type === t.Document)
            return w;
          w = w.parent;
        }
      }, b.prototype.end = function(w) {
        return this.document().end(w);
      }, b.prototype.prev = function() {
        var w;
        if (w = this.parent.children.indexOf(this), w < 1)
          throw new Error("Already at the first node. " + this.debugInfo());
        return this.parent.children[w - 1];
      }, b.prototype.next = function() {
        var w;
        if (w = this.parent.children.indexOf(this), w === -1 || w === this.parent.children.length - 1)
          throw new Error("Already at the last node. " + this.debugInfo());
        return this.parent.children[w + 1];
      }, b.prototype.importDocument = function(w) {
        var T;
        return T = w.root().clone(), T.parent = this, T.isRoot = !1, this.children.push(T), this;
      }, b.prototype.debugInfo = function(w) {
        var T, P;
        return w = w || this.name, w == null && !((T = this.parent) != null && T.name) ? "" : w == null ? "parent: <" + this.parent.name + ">" : (P = this.parent) != null && P.name ? "node: <" + w + ">, parent: <" + this.parent.name + ">" : "node: <" + w + ">";
      }, b.prototype.ele = function(w, T, P) {
        return this.element(w, T, P);
      }, b.prototype.nod = function(w, T, P) {
        return this.node(w, T, P);
      }, b.prototype.txt = function(w) {
        return this.text(w);
      }, b.prototype.dat = function(w) {
        return this.cdata(w);
      }, b.prototype.com = function(w) {
        return this.comment(w);
      }, b.prototype.ins = function(w, T) {
        return this.instruction(w, T);
      }, b.prototype.doc = function() {
        return this.document();
      }, b.prototype.dec = function(w, T, P) {
        return this.declaration(w, T, P);
      }, b.prototype.e = function(w, T, P) {
        return this.element(w, T, P);
      }, b.prototype.n = function(w, T, P) {
        return this.node(w, T, P);
      }, b.prototype.t = function(w) {
        return this.text(w);
      }, b.prototype.d = function(w) {
        return this.cdata(w);
      }, b.prototype.c = function(w) {
        return this.comment(w);
      }, b.prototype.r = function(w) {
        return this.raw(w);
      }, b.prototype.i = function(w, T) {
        return this.instruction(w, T);
      }, b.prototype.u = function() {
        return this.up();
      }, b.prototype.importXMLBuilder = function(w) {
        return this.importDocument(w);
      }, b.prototype.replaceChild = function(w, T) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.removeChild = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.appendChild = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.hasChildNodes = function() {
        return this.children.length !== 0;
      }, b.prototype.cloneNode = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.normalize = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.isSupported = function(w, T) {
        return !0;
      }, b.prototype.hasAttributes = function() {
        return this.attribs.length !== 0;
      }, b.prototype.compareDocumentPosition = function(w) {
        var T, P;
        return T = this, T === w ? 0 : this.document() !== w.document() ? (P = e.Disconnected | e.ImplementationSpecific, Math.random() < 0.5 ? P |= e.Preceding : P |= e.Following, P) : T.isAncestor(w) ? e.Contains | e.Preceding : T.isDescendant(w) ? e.Contains | e.Following : T.isPreceding(w) ? e.Preceding : e.Following;
      }, b.prototype.isSameNode = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.lookupPrefix = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.isDefaultNamespace = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.lookupNamespaceURI = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.isEqualNode = function(w) {
        var T, P, C;
        if (w.nodeType !== this.nodeType || w.children.length !== this.children.length)
          return !1;
        for (T = P = 0, C = this.children.length - 1; 0 <= C ? P <= C : P >= C; T = 0 <= C ? ++P : --P)
          if (!this.children[T].isEqualNode(w.children[T]))
            return !1;
        return !0;
      }, b.prototype.getFeature = function(w, T) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.setUserData = function(w, T, P) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.getUserData = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.contains = function(w) {
        return w ? w === this || this.isDescendant(w) : !1;
      }, b.prototype.isDescendant = function(w) {
        var T, P, C, B, k;
        for (k = this.children, C = 0, B = k.length; C < B; C++)
          if (T = k[C], w === T || (P = T.isDescendant(w), P))
            return !0;
        return !1;
      }, b.prototype.isAncestor = function(w) {
        return w.isDescendant(this);
      }, b.prototype.isPreceding = function(w) {
        var T, P;
        return T = this.treePosition(w), P = this.treePosition(this), T === -1 || P === -1 ? !1 : T < P;
      }, b.prototype.isFollowing = function(w) {
        var T, P;
        return T = this.treePosition(w), P = this.treePosition(this), T === -1 || P === -1 ? !1 : T > P;
      }, b.prototype.treePosition = function(w) {
        var T, P;
        return P = 0, T = !1, this.foreachTreeNode(this.document(), function(C) {
          if (P++, !T && C === w)
            return T = !0;
        }), T ? P : -1;
      }, b.prototype.foreachTreeNode = function(w, T) {
        var P, C, B, k, E;
        for (w || (w = this.document()), k = w.children, C = 0, B = k.length; C < B; C++) {
          if (P = k[C], E = T(P))
            return E;
          if (E = this.foreachTreeNode(P, T), E)
            return E;
        }
      }, b;
    }();
  }).call(re)), qa.exports;
}
var oc = { exports: {} }, df;
function Sy() {
  return df || (df = 1, (function() {
    var e = function(n, r) {
      return function() {
        return n.apply(r, arguments);
      };
    }, t = {}.hasOwnProperty;
    oc.exports = function() {
      function n(r) {
        this.assertLegalName = e(this.assertLegalName, this), this.assertLegalChar = e(this.assertLegalChar, this);
        var o, s, i;
        r || (r = {}), this.options = r, this.options.version || (this.options.version = "1.0"), s = r.stringify || {};
        for (o in s)
          t.call(s, o) && (i = s[o], this[o] = i);
      }
      return n.prototype.name = function(r) {
        return this.options.noValidation ? r : this.assertLegalName("" + r || "");
      }, n.prototype.text = function(r) {
        return this.options.noValidation ? r : this.assertLegalChar(this.textEscape("" + r || ""));
      }, n.prototype.cdata = function(r) {
        return this.options.noValidation ? r : (r = "" + r || "", r = r.replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(r));
      }, n.prototype.comment = function(r) {
        if (this.options.noValidation)
          return r;
        if (r = "" + r || "", r.match(/--/))
          throw new Error("Comment text cannot contain double-hypen: " + r);
        return this.assertLegalChar(r);
      }, n.prototype.raw = function(r) {
        return this.options.noValidation ? r : "" + r || "";
      }, n.prototype.attValue = function(r) {
        return this.options.noValidation ? r : this.assertLegalChar(this.attEscape(r = "" + r || ""));
      }, n.prototype.insTarget = function(r) {
        return this.options.noValidation ? r : this.assertLegalChar("" + r || "");
      }, n.prototype.insValue = function(r) {
        if (this.options.noValidation)
          return r;
        if (r = "" + r || "", r.match(/\?>/))
          throw new Error("Invalid processing instruction value: " + r);
        return this.assertLegalChar(r);
      }, n.prototype.xmlVersion = function(r) {
        if (this.options.noValidation)
          return r;
        if (r = "" + r || "", !r.match(/1\.[0-9]+/))
          throw new Error("Invalid version number: " + r);
        return r;
      }, n.prototype.xmlEncoding = function(r) {
        if (this.options.noValidation)
          return r;
        if (r = "" + r || "", !r.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))
          throw new Error("Invalid encoding: " + r);
        return this.assertLegalChar(r);
      }, n.prototype.xmlStandalone = function(r) {
        return this.options.noValidation ? r : r ? "yes" : "no";
      }, n.prototype.dtdPubID = function(r) {
        return this.options.noValidation ? r : this.assertLegalChar("" + r || "");
      }, n.prototype.dtdSysID = function(r) {
        return this.options.noValidation ? r : this.assertLegalChar("" + r || "");
      }, n.prototype.dtdElementValue = function(r) {
        return this.options.noValidation ? r : this.assertLegalChar("" + r || "");
      }, n.prototype.dtdAttType = function(r) {
        return this.options.noValidation ? r : this.assertLegalChar("" + r || "");
      }, n.prototype.dtdAttDefault = function(r) {
        return this.options.noValidation ? r : this.assertLegalChar("" + r || "");
      }, n.prototype.dtdEntityValue = function(r) {
        return this.options.noValidation ? r : this.assertLegalChar("" + r || "");
      }, n.prototype.dtdNData = function(r) {
        return this.options.noValidation ? r : this.assertLegalChar("" + r || "");
      }, n.prototype.convertAttKey = "@", n.prototype.convertPIKey = "?", n.prototype.convertTextKey = "#text", n.prototype.convertCDataKey = "#cdata", n.prototype.convertCommentKey = "#comment", n.prototype.convertRawKey = "#raw", n.prototype.assertLegalChar = function(r) {
        var o, s;
        if (this.options.noValidation)
          return r;
        if (o = "", this.options.version === "1.0") {
          if (o = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, s = r.match(o))
            throw new Error("Invalid character in string: " + r + " at index " + s.index);
        } else if (this.options.version === "1.1" && (o = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, s = r.match(o)))
          throw new Error("Invalid character in string: " + r + " at index " + s.index);
        return r;
      }, n.prototype.assertLegalName = function(r) {
        var o;
        if (this.options.noValidation)
          return r;
        if (this.assertLegalChar(r), o = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/, !r.match(o))
          throw new Error("Invalid character in name");
        return r;
      }, n.prototype.textEscape = function(r) {
        var o;
        return this.options.noValidation ? r : (o = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, r.replace(o, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;"));
      }, n.prototype.attEscape = function(r) {
        var o;
        return this.options.noValidation ? r : (o = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, r.replace(o, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;"));
      }, n;
    }();
  }).call(re)), oc.exports;
}
var sc = { exports: {} }, ic = { exports: {} }, ac = { exports: {} }, ff;
function Wi() {
  return ff || (ff = 1, (function() {
    ac.exports = {
      None: 0,
      OpenTag: 1,
      InsideTag: 2,
      CloseTag: 3
    };
  }).call(re)), ac.exports;
}
var mf;
function Ty() {
  return mf || (mf = 1, (function() {
    var e, t, n, r = {}.hasOwnProperty;
    n = An().assign, e = Ce(), Zl(), ou(), Yl(), Ql(), Jl(), su(), iu(), au(), Ey(), eu(), nu(), tu(), ru(), t = Wi(), ic.exports = function() {
      function o(s) {
        var i, a, c;
        s || (s = {}), this.options = s, a = s.writer || {};
        for (i in a)
          r.call(a, i) && (c = a[i], this["_" + i] = this[i], this[i] = c);
      }
      return o.prototype.filterOptions = function(s) {
        var i, a, c, p, l, u, d, m;
        return s || (s = {}), s = n({}, this.options, s), i = {
          writer: this
        }, i.pretty = s.pretty || !1, i.allowEmpty = s.allowEmpty || !1, i.indent = (a = s.indent) != null ? a : "  ", i.newline = (c = s.newline) != null ? c : `
`, i.offset = (p = s.offset) != null ? p : 0, i.dontPrettyTextNodes = (l = (u = s.dontPrettyTextNodes) != null ? u : s.dontprettytextnodes) != null ? l : 0, i.spaceBeforeSlash = (d = (m = s.spaceBeforeSlash) != null ? m : s.spacebeforeslash) != null ? d : "", i.spaceBeforeSlash === !0 && (i.spaceBeforeSlash = " "), i.suppressPrettyCount = 0, i.user = {}, i.state = t.None, i;
      }, o.prototype.indent = function(s, i, a) {
        var c;
        return !i.pretty || i.suppressPrettyCount ? "" : i.pretty && (c = (a || 0) + i.offset + 1, c > 0) ? new Array(c).join(i.indent) : "";
      }, o.prototype.endline = function(s, i, a) {
        return !i.pretty || i.suppressPrettyCount ? "" : i.newline;
      }, o.prototype.attribute = function(s, i, a) {
        var c;
        return this.openAttribute(s, i, a), c = " " + s.name + '="' + s.value + '"', this.closeAttribute(s, i, a), c;
      }, o.prototype.cdata = function(s, i, a) {
        var c;
        return this.openNode(s, i, a), i.state = t.OpenTag, c = this.indent(s, i, a) + "<![CDATA[", i.state = t.InsideTag, c += s.value, i.state = t.CloseTag, c += "]]>" + this.endline(s, i, a), i.state = t.None, this.closeNode(s, i, a), c;
      }, o.prototype.comment = function(s, i, a) {
        var c;
        return this.openNode(s, i, a), i.state = t.OpenTag, c = this.indent(s, i, a) + "<!-- ", i.state = t.InsideTag, c += s.value, i.state = t.CloseTag, c += " -->" + this.endline(s, i, a), i.state = t.None, this.closeNode(s, i, a), c;
      }, o.prototype.declaration = function(s, i, a) {
        var c;
        return this.openNode(s, i, a), i.state = t.OpenTag, c = this.indent(s, i, a) + "<?xml", i.state = t.InsideTag, c += ' version="' + s.version + '"', s.encoding != null && (c += ' encoding="' + s.encoding + '"'), s.standalone != null && (c += ' standalone="' + s.standalone + '"'), i.state = t.CloseTag, c += i.spaceBeforeSlash + "?>", c += this.endline(s, i, a), i.state = t.None, this.closeNode(s, i, a), c;
      }, o.prototype.docType = function(s, i, a) {
        var c, p, l, u, d;
        if (a || (a = 0), this.openNode(s, i, a), i.state = t.OpenTag, u = this.indent(s, i, a), u += "<!DOCTYPE " + s.root().name, s.pubID && s.sysID ? u += ' PUBLIC "' + s.pubID + '" "' + s.sysID + '"' : s.sysID && (u += ' SYSTEM "' + s.sysID + '"'), s.children.length > 0) {
          for (u += " [", u += this.endline(s, i, a), i.state = t.InsideTag, d = s.children, p = 0, l = d.length; p < l; p++)
            c = d[p], u += this.writeChildNode(c, i, a + 1);
          i.state = t.CloseTag, u += "]";
        }
        return i.state = t.CloseTag, u += i.spaceBeforeSlash + ">", u += this.endline(s, i, a), i.state = t.None, this.closeNode(s, i, a), u;
      }, o.prototype.element = function(s, i, a) {
        var c, p, l, u, d, m, f, g, y, v, b, w, T, P;
        a || (a = 0), v = !1, b = "", this.openNode(s, i, a), i.state = t.OpenTag, b += this.indent(s, i, a) + "<" + s.name, w = s.attribs;
        for (y in w)
          r.call(w, y) && (c = w[y], b += this.attribute(c, i, a));
        if (l = s.children.length, u = l === 0 ? null : s.children[0], l === 0 || s.children.every(function(C) {
          return (C.type === e.Text || C.type === e.Raw) && C.value === "";
        }))
          i.allowEmpty ? (b += ">", i.state = t.CloseTag, b += "</" + s.name + ">" + this.endline(s, i, a)) : (i.state = t.CloseTag, b += i.spaceBeforeSlash + "/>" + this.endline(s, i, a));
        else if (i.pretty && l === 1 && (u.type === e.Text || u.type === e.Raw) && u.value != null)
          b += ">", i.state = t.InsideTag, i.suppressPrettyCount++, v = !0, b += this.writeChildNode(u, i, a + 1), i.suppressPrettyCount--, v = !1, i.state = t.CloseTag, b += "</" + s.name + ">" + this.endline(s, i, a);
        else {
          if (i.dontPrettyTextNodes) {
            for (T = s.children, d = 0, f = T.length; d < f; d++)
              if (p = T[d], (p.type === e.Text || p.type === e.Raw) && p.value != null) {
                i.suppressPrettyCount++, v = !0;
                break;
              }
          }
          for (b += ">" + this.endline(s, i, a), i.state = t.InsideTag, P = s.children, m = 0, g = P.length; m < g; m++)
            p = P[m], b += this.writeChildNode(p, i, a + 1);
          i.state = t.CloseTag, b += this.indent(s, i, a) + "</" + s.name + ">", v && i.suppressPrettyCount--, b += this.endline(s, i, a), i.state = t.None;
        }
        return this.closeNode(s, i, a), b;
      }, o.prototype.writeChildNode = function(s, i, a) {
        switch (s.type) {
          case e.CData:
            return this.cdata(s, i, a);
          case e.Comment:
            return this.comment(s, i, a);
          case e.Element:
            return this.element(s, i, a);
          case e.Raw:
            return this.raw(s, i, a);
          case e.Text:
            return this.text(s, i, a);
          case e.ProcessingInstruction:
            return this.processingInstruction(s, i, a);
          case e.Dummy:
            return "";
          case e.Declaration:
            return this.declaration(s, i, a);
          case e.DocType:
            return this.docType(s, i, a);
          case e.AttributeDeclaration:
            return this.dtdAttList(s, i, a);
          case e.ElementDeclaration:
            return this.dtdElement(s, i, a);
          case e.EntityDeclaration:
            return this.dtdEntity(s, i, a);
          case e.NotationDeclaration:
            return this.dtdNotation(s, i, a);
          default:
            throw new Error("Unknown XML node type: " + s.constructor.name);
        }
      }, o.prototype.processingInstruction = function(s, i, a) {
        var c;
        return this.openNode(s, i, a), i.state = t.OpenTag, c = this.indent(s, i, a) + "<?", i.state = t.InsideTag, c += s.target, s.value && (c += " " + s.value), i.state = t.CloseTag, c += i.spaceBeforeSlash + "?>", c += this.endline(s, i, a), i.state = t.None, this.closeNode(s, i, a), c;
      }, o.prototype.raw = function(s, i, a) {
        var c;
        return this.openNode(s, i, a), i.state = t.OpenTag, c = this.indent(s, i, a), i.state = t.InsideTag, c += s.value, i.state = t.CloseTag, c += this.endline(s, i, a), i.state = t.None, this.closeNode(s, i, a), c;
      }, o.prototype.text = function(s, i, a) {
        var c;
        return this.openNode(s, i, a), i.state = t.OpenTag, c = this.indent(s, i, a), i.state = t.InsideTag, c += s.value, i.state = t.CloseTag, c += this.endline(s, i, a), i.state = t.None, this.closeNode(s, i, a), c;
      }, o.prototype.dtdAttList = function(s, i, a) {
        var c;
        return this.openNode(s, i, a), i.state = t.OpenTag, c = this.indent(s, i, a) + "<!ATTLIST", i.state = t.InsideTag, c += " " + s.elementName + " " + s.attributeName + " " + s.attributeType, s.defaultValueType !== "#DEFAULT" && (c += " " + s.defaultValueType), s.defaultValue && (c += ' "' + s.defaultValue + '"'), i.state = t.CloseTag, c += i.spaceBeforeSlash + ">" + this.endline(s, i, a), i.state = t.None, this.closeNode(s, i, a), c;
      }, o.prototype.dtdElement = function(s, i, a) {
        var c;
        return this.openNode(s, i, a), i.state = t.OpenTag, c = this.indent(s, i, a) + "<!ELEMENT", i.state = t.InsideTag, c += " " + s.name + " " + s.value, i.state = t.CloseTag, c += i.spaceBeforeSlash + ">" + this.endline(s, i, a), i.state = t.None, this.closeNode(s, i, a), c;
      }, o.prototype.dtdEntity = function(s, i, a) {
        var c;
        return this.openNode(s, i, a), i.state = t.OpenTag, c = this.indent(s, i, a) + "<!ENTITY", i.state = t.InsideTag, s.pe && (c += " %"), c += " " + s.name, s.value ? c += ' "' + s.value + '"' : (s.pubID && s.sysID ? c += ' PUBLIC "' + s.pubID + '" "' + s.sysID + '"' : s.sysID && (c += ' SYSTEM "' + s.sysID + '"'), s.nData && (c += " NDATA " + s.nData)), i.state = t.CloseTag, c += i.spaceBeforeSlash + ">" + this.endline(s, i, a), i.state = t.None, this.closeNode(s, i, a), c;
      }, o.prototype.dtdNotation = function(s, i, a) {
        var c;
        return this.openNode(s, i, a), i.state = t.OpenTag, c = this.indent(s, i, a) + "<!NOTATION", i.state = t.InsideTag, c += " " + s.name, s.pubID && s.sysID ? c += ' PUBLIC "' + s.pubID + '" "' + s.sysID + '"' : s.pubID ? c += ' PUBLIC "' + s.pubID + '"' : s.sysID && (c += ' SYSTEM "' + s.sysID + '"'), i.state = t.CloseTag, c += i.spaceBeforeSlash + ">" + this.endline(s, i, a), i.state = t.None, this.closeNode(s, i, a), c;
      }, o.prototype.openNode = function(s, i, a) {
      }, o.prototype.closeNode = function(s, i, a) {
      }, o.prototype.openAttribute = function(s, i, a) {
      }, o.prototype.closeAttribute = function(s, i, a) {
      }, o;
    }();
  }).call(re)), ic.exports;
}
var hf;
function cu() {
  return hf || (hf = 1, (function() {
    var e, t = function(r, o) {
      for (var s in o)
        n.call(o, s) && (r[s] = o[s]);
      function i() {
        this.constructor = r;
      }
      return i.prototype = o.prototype, r.prototype = new i(), r.__super__ = o.prototype, r;
    }, n = {}.hasOwnProperty;
    e = Ty(), sc.exports = function(r) {
      t(o, r);
      function o(s) {
        o.__super__.constructor.call(this, s);
      }
      return o.prototype.document = function(s, i) {
        var a, c, p, l, u;
        for (i = this.filterOptions(i), l = "", u = s.children, c = 0, p = u.length; c < p; c++)
          a = u[c], l += this.writeChildNode(a, i, 0);
        return i.pretty && l.slice(-i.newline.length) === i.newline && (l = l.slice(0, -i.newline.length)), l;
      }, o;
    }(e);
  }).call(re)), sc.exports;
}
var yf;
function Oy() {
  return yf || (yf = 1, (function() {
    var e, t, n, r, o, s, i, a = function(p, l) {
      for (var u in l)
        c.call(l, u) && (p[u] = l[u]);
      function d() {
        this.constructor = p;
      }
      return d.prototype = l.prototype, p.prototype = new d(), p.__super__ = l.prototype, p;
    }, c = {}.hasOwnProperty;
    i = An().isPlainObject, n = _y(), t = n0(), r = It(), e = Ce(), s = Sy(), o = cu(), ka.exports = function(p) {
      a(l, p);
      function l(u) {
        l.__super__.constructor.call(this, null), this.name = "#document", this.type = e.Document, this.documentURI = null, this.domConfig = new t(), u || (u = {}), u.writer || (u.writer = new o()), this.options = u, this.stringify = new s(u);
      }
      return Object.defineProperty(l.prototype, "implementation", {
        value: new n()
      }), Object.defineProperty(l.prototype, "doctype", {
        get: function() {
          var u, d, m, f;
          for (f = this.children, d = 0, m = f.length; d < m; d++)
            if (u = f[d], u.type === e.DocType)
              return u;
          return null;
        }
      }), Object.defineProperty(l.prototype, "documentElement", {
        get: function() {
          return this.rootObject || null;
        }
      }), Object.defineProperty(l.prototype, "inputEncoding", {
        get: function() {
          return null;
        }
      }), Object.defineProperty(l.prototype, "strictErrorChecking", {
        get: function() {
          return !1;
        }
      }), Object.defineProperty(l.prototype, "xmlEncoding", {
        get: function() {
          return this.children.length !== 0 && this.children[0].type === e.Declaration ? this.children[0].encoding : null;
        }
      }), Object.defineProperty(l.prototype, "xmlStandalone", {
        get: function() {
          return this.children.length !== 0 && this.children[0].type === e.Declaration ? this.children[0].standalone === "yes" : !1;
        }
      }), Object.defineProperty(l.prototype, "xmlVersion", {
        get: function() {
          return this.children.length !== 0 && this.children[0].type === e.Declaration ? this.children[0].version : "1.0";
        }
      }), Object.defineProperty(l.prototype, "URL", {
        get: function() {
          return this.documentURI;
        }
      }), Object.defineProperty(l.prototype, "origin", {
        get: function() {
          return null;
        }
      }), Object.defineProperty(l.prototype, "compatMode", {
        get: function() {
          return null;
        }
      }), Object.defineProperty(l.prototype, "characterSet", {
        get: function() {
          return null;
        }
      }), Object.defineProperty(l.prototype, "contentType", {
        get: function() {
          return null;
        }
      }), l.prototype.end = function(u) {
        var d;
        return d = {}, u ? i(u) && (d = u, u = this.options.writer) : u = this.options.writer, u.document(this, u.filterOptions(d));
      }, l.prototype.toString = function(u) {
        return this.options.writer.document(this, this.options.writer.filterOptions(u));
      }, l.prototype.createElement = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createDocumentFragment = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createTextNode = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createComment = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createCDATASection = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createProcessingInstruction = function(u, d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createAttribute = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createEntityReference = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.getElementsByTagName = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.importNode = function(u, d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createElementNS = function(u, d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createAttributeNS = function(u, d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.getElementsByTagNameNS = function(u, d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.getElementById = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.adoptNode = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.normalizeDocument = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.renameNode = function(u, d, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.getElementsByClassName = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createEvent = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createRange = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createNodeIterator = function(u, d, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createTreeWalker = function(u, d, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l;
    }(r);
  }).call(re)), ka.exports;
}
var cc = { exports: {} }, gf;
function s0() {
  return gf || (gf = 1, (function() {
    var e, t, n, r, o, s, i, a, c, p, l, u, d, m, f, g, y, v, b, w, T, P, C, B = {}.hasOwnProperty;
    C = An(), T = C.isObject, w = C.isFunction, P = C.isPlainObject, b = C.getValue, e = Ce(), u = Oy(), d = Jl(), r = Yl(), o = Ql(), f = su(), v = iu(), m = au(), p = Zl(), l = ou(), s = eu(), a = tu(), i = nu(), c = ru(), n = $y(), y = Sy(), g = cu(), t = Wi(), cc.exports = function() {
      function k(E, q, I) {
        var z;
        this.name = "?xml", this.type = e.Document, E || (E = {}), z = {}, E.writer ? P(E.writer) && (z = E.writer, E.writer = new g()) : E.writer = new g(), this.options = E, this.writer = E.writer, this.writerOptions = this.writer.filterOptions(z), this.stringify = new y(E), this.onDataCallback = q || function() {
        }, this.onEndCallback = I || function() {
        }, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null;
      }
      return k.prototype.createChildNode = function(E) {
        var q, I, z, H, F, U, G, V;
        switch (E.type) {
          case e.CData:
            this.cdata(E.value);
            break;
          case e.Comment:
            this.comment(E.value);
            break;
          case e.Element:
            z = {}, G = E.attribs;
            for (I in G)
              B.call(G, I) && (q = G[I], z[I] = q.value);
            this.node(E.name, z);
            break;
          case e.Dummy:
            this.dummy();
            break;
          case e.Raw:
            this.raw(E.value);
            break;
          case e.Text:
            this.text(E.value);
            break;
          case e.ProcessingInstruction:
            this.instruction(E.target, E.value);
            break;
          default:
            throw new Error("This XML node type is not supported in a JS object: " + E.constructor.name);
        }
        for (V = E.children, F = 0, U = V.length; F < U; F++)
          H = V[F], this.createChildNode(H), H.type === e.Element && this.up();
        return this;
      }, k.prototype.dummy = function() {
        return this;
      }, k.prototype.node = function(E, q, I) {
        var z;
        if (E == null)
          throw new Error("Missing node name.");
        if (this.root && this.currentLevel === -1)
          throw new Error("Document can only have one root node. " + this.debugInfo(E));
        return this.openCurrent(), E = b(E), q == null && (q = {}), q = b(q), T(q) || (z = [q, I], I = z[0], q = z[1]), this.currentNode = new d(this, E, q), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, I != null && this.text(I), this;
      }, k.prototype.element = function(E, q, I) {
        var z, H, F, U, G, V;
        if (this.currentNode && this.currentNode.type === e.DocType)
          this.dtdElement.apply(this, arguments);
        else if (Array.isArray(E) || T(E) || w(E))
          for (U = this.options.noValidation, this.options.noValidation = !0, V = new u(this.options).element("TEMP_ROOT"), V.element(E), this.options.noValidation = U, G = V.children, H = 0, F = G.length; H < F; H++)
            z = G[H], this.createChildNode(z), z.type === e.Element && this.up();
        else
          this.node(E, q, I);
        return this;
      }, k.prototype.attribute = function(E, q) {
        var I, z;
        if (!this.currentNode || this.currentNode.children)
          throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(E));
        if (E != null && (E = b(E)), T(E))
          for (I in E)
            B.call(E, I) && (z = E[I], this.attribute(I, z));
        else
          w(q) && (q = q.apply()), this.options.keepNullAttributes && q == null ? this.currentNode.attribs[E] = new n(this, E, "") : q != null && (this.currentNode.attribs[E] = new n(this, E, q));
        return this;
      }, k.prototype.text = function(E) {
        var q;
        return this.openCurrent(), q = new v(this, E), this.onData(this.writer.text(q, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, k.prototype.cdata = function(E) {
        var q;
        return this.openCurrent(), q = new r(this, E), this.onData(this.writer.cdata(q, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, k.prototype.comment = function(E) {
        var q;
        return this.openCurrent(), q = new o(this, E), this.onData(this.writer.comment(q, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, k.prototype.raw = function(E) {
        var q;
        return this.openCurrent(), q = new f(this, E), this.onData(this.writer.raw(q, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, k.prototype.instruction = function(E, q) {
        var I, z, H, F, U;
        if (this.openCurrent(), E != null && (E = b(E)), q != null && (q = b(q)), Array.isArray(E))
          for (I = 0, F = E.length; I < F; I++)
            z = E[I], this.instruction(z);
        else if (T(E))
          for (z in E)
            B.call(E, z) && (H = E[z], this.instruction(z, H));
        else
          w(q) && (q = q.apply()), U = new m(this, E, q), this.onData(this.writer.processingInstruction(U, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }, k.prototype.declaration = function(E, q, I) {
        var z;
        if (this.openCurrent(), this.documentStarted)
          throw new Error("declaration() must be the first node.");
        return z = new p(this, E, q, I), this.onData(this.writer.declaration(z, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, k.prototype.doctype = function(E, q, I) {
        if (this.openCurrent(), E == null)
          throw new Error("Missing root node name.");
        if (this.root)
          throw new Error("dtd() must come before the root node.");
        return this.currentNode = new l(this, q, I), this.currentNode.rootNodeName = E, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this;
      }, k.prototype.dtdElement = function(E, q) {
        var I;
        return this.openCurrent(), I = new i(this, E, q), this.onData(this.writer.dtdElement(I, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, k.prototype.attList = function(E, q, I, z, H) {
        var F;
        return this.openCurrent(), F = new s(this, E, q, I, z, H), this.onData(this.writer.dtdAttList(F, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, k.prototype.entity = function(E, q) {
        var I;
        return this.openCurrent(), I = new a(this, !1, E, q), this.onData(this.writer.dtdEntity(I, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, k.prototype.pEntity = function(E, q) {
        var I;
        return this.openCurrent(), I = new a(this, !0, E, q), this.onData(this.writer.dtdEntity(I, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, k.prototype.notation = function(E, q) {
        var I;
        return this.openCurrent(), I = new c(this, E, q), this.onData(this.writer.dtdNotation(I, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, k.prototype.up = function() {
        if (this.currentLevel < 0)
          throw new Error("The document node has no parent.");
        return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this;
      }, k.prototype.end = function() {
        for (; this.currentLevel >= 0; )
          this.up();
        return this.onEnd();
      }, k.prototype.openCurrent = function() {
        if (this.currentNode)
          return this.currentNode.children = !0, this.openNode(this.currentNode);
      }, k.prototype.openNode = function(E) {
        var q, I, z, H;
        if (!E.isOpen) {
          if (!this.root && this.currentLevel === 0 && E.type === e.Element && (this.root = E), I = "", E.type === e.Element) {
            this.writerOptions.state = t.OpenTag, I = this.writer.indent(E, this.writerOptions, this.currentLevel) + "<" + E.name, H = E.attribs;
            for (z in H)
              B.call(H, z) && (q = H[z], I += this.writer.attribute(q, this.writerOptions, this.currentLevel));
            I += (E.children ? ">" : "/>") + this.writer.endline(E, this.writerOptions, this.currentLevel), this.writerOptions.state = t.InsideTag;
          } else
            this.writerOptions.state = t.OpenTag, I = this.writer.indent(E, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + E.rootNodeName, E.pubID && E.sysID ? I += ' PUBLIC "' + E.pubID + '" "' + E.sysID + '"' : E.sysID && (I += ' SYSTEM "' + E.sysID + '"'), E.children ? (I += " [", this.writerOptions.state = t.InsideTag) : (this.writerOptions.state = t.CloseTag, I += ">"), I += this.writer.endline(E, this.writerOptions, this.currentLevel);
          return this.onData(I, this.currentLevel), E.isOpen = !0;
        }
      }, k.prototype.closeNode = function(E) {
        var q;
        if (!E.isClosed)
          return q = "", this.writerOptions.state = t.CloseTag, E.type === e.Element ? q = this.writer.indent(E, this.writerOptions, this.currentLevel) + "</" + E.name + ">" + this.writer.endline(E, this.writerOptions, this.currentLevel) : q = this.writer.indent(E, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(E, this.writerOptions, this.currentLevel), this.writerOptions.state = t.None, this.onData(q, this.currentLevel), E.isClosed = !0;
      }, k.prototype.onData = function(E, q) {
        return this.documentStarted = !0, this.onDataCallback(E, q + 1);
      }, k.prototype.onEnd = function() {
        return this.documentCompleted = !0, this.onEndCallback();
      }, k.prototype.debugInfo = function(E) {
        return E == null ? "" : "node: <" + E + ">";
      }, k.prototype.ele = function() {
        return this.element.apply(this, arguments);
      }, k.prototype.nod = function(E, q, I) {
        return this.node(E, q, I);
      }, k.prototype.txt = function(E) {
        return this.text(E);
      }, k.prototype.dat = function(E) {
        return this.cdata(E);
      }, k.prototype.com = function(E) {
        return this.comment(E);
      }, k.prototype.ins = function(E, q) {
        return this.instruction(E, q);
      }, k.prototype.dec = function(E, q, I) {
        return this.declaration(E, q, I);
      }, k.prototype.dtd = function(E, q, I) {
        return this.doctype(E, q, I);
      }, k.prototype.e = function(E, q, I) {
        return this.element(E, q, I);
      }, k.prototype.n = function(E, q, I) {
        return this.node(E, q, I);
      }, k.prototype.t = function(E) {
        return this.text(E);
      }, k.prototype.d = function(E) {
        return this.cdata(E);
      }, k.prototype.c = function(E) {
        return this.comment(E);
      }, k.prototype.r = function(E) {
        return this.raw(E);
      }, k.prototype.i = function(E, q) {
        return this.instruction(E, q);
      }, k.prototype.att = function() {
        return this.currentNode && this.currentNode.type === e.DocType ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
      }, k.prototype.a = function() {
        return this.currentNode && this.currentNode.type === e.DocType ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
      }, k.prototype.ent = function(E, q) {
        return this.entity(E, q);
      }, k.prototype.pent = function(E, q) {
        return this.pEntity(E, q);
      }, k.prototype.not = function(E, q) {
        return this.notation(E, q);
      }, k;
    }();
  }).call(re)), cc.exports;
}
var lc = { exports: {} }, vf;
function i0() {
  return vf || (vf = 1, (function() {
    var e, t, n, r = function(s, i) {
      for (var a in i)
        o.call(i, a) && (s[a] = i[a]);
      function c() {
        this.constructor = s;
      }
      return c.prototype = i.prototype, s.prototype = new c(), s.__super__ = i.prototype, s;
    }, o = {}.hasOwnProperty;
    e = Ce(), n = Ty(), t = Wi(), lc.exports = function(s) {
      r(i, s);
      function i(a, c) {
        this.stream = a, i.__super__.constructor.call(this, c);
      }
      return i.prototype.endline = function(a, c, p) {
        return a.isLastRootNode && c.state === t.CloseTag ? "" : i.__super__.endline.call(this, a, c, p);
      }, i.prototype.document = function(a, c) {
        var p, l, u, d, m, f, g, y, v;
        for (g = a.children, l = u = 0, m = g.length; u < m; l = ++u)
          p = g[l], p.isLastRootNode = l === a.children.length - 1;
        for (c = this.filterOptions(c), y = a.children, v = [], d = 0, f = y.length; d < f; d++)
          p = y[d], v.push(this.writeChildNode(p, c, 0));
        return v;
      }, i.prototype.attribute = function(a, c, p) {
        return this.stream.write(i.__super__.attribute.call(this, a, c, p));
      }, i.prototype.cdata = function(a, c, p) {
        return this.stream.write(i.__super__.cdata.call(this, a, c, p));
      }, i.prototype.comment = function(a, c, p) {
        return this.stream.write(i.__super__.comment.call(this, a, c, p));
      }, i.prototype.declaration = function(a, c, p) {
        return this.stream.write(i.__super__.declaration.call(this, a, c, p));
      }, i.prototype.docType = function(a, c, p) {
        var l, u, d, m;
        if (p || (p = 0), this.openNode(a, c, p), c.state = t.OpenTag, this.stream.write(this.indent(a, c, p)), this.stream.write("<!DOCTYPE " + a.root().name), a.pubID && a.sysID ? this.stream.write(' PUBLIC "' + a.pubID + '" "' + a.sysID + '"') : a.sysID && this.stream.write(' SYSTEM "' + a.sysID + '"'), a.children.length > 0) {
          for (this.stream.write(" ["), this.stream.write(this.endline(a, c, p)), c.state = t.InsideTag, m = a.children, u = 0, d = m.length; u < d; u++)
            l = m[u], this.writeChildNode(l, c, p + 1);
          c.state = t.CloseTag, this.stream.write("]");
        }
        return c.state = t.CloseTag, this.stream.write(c.spaceBeforeSlash + ">"), this.stream.write(this.endline(a, c, p)), c.state = t.None, this.closeNode(a, c, p);
      }, i.prototype.element = function(a, c, p) {
        var l, u, d, m, f, g, y, v, b;
        p || (p = 0), this.openNode(a, c, p), c.state = t.OpenTag, this.stream.write(this.indent(a, c, p) + "<" + a.name), v = a.attribs;
        for (y in v)
          o.call(v, y) && (l = v[y], this.attribute(l, c, p));
        if (d = a.children.length, m = d === 0 ? null : a.children[0], d === 0 || a.children.every(function(w) {
          return (w.type === e.Text || w.type === e.Raw) && w.value === "";
        }))
          c.allowEmpty ? (this.stream.write(">"), c.state = t.CloseTag, this.stream.write("</" + a.name + ">")) : (c.state = t.CloseTag, this.stream.write(c.spaceBeforeSlash + "/>"));
        else if (c.pretty && d === 1 && (m.type === e.Text || m.type === e.Raw) && m.value != null)
          this.stream.write(">"), c.state = t.InsideTag, c.suppressPrettyCount++, this.writeChildNode(m, c, p + 1), c.suppressPrettyCount--, c.state = t.CloseTag, this.stream.write("</" + a.name + ">");
        else {
          for (this.stream.write(">" + this.endline(a, c, p)), c.state = t.InsideTag, b = a.children, f = 0, g = b.length; f < g; f++)
            u = b[f], this.writeChildNode(u, c, p + 1);
          c.state = t.CloseTag, this.stream.write(this.indent(a, c, p) + "</" + a.name + ">");
        }
        return this.stream.write(this.endline(a, c, p)), c.state = t.None, this.closeNode(a, c, p);
      }, i.prototype.processingInstruction = function(a, c, p) {
        return this.stream.write(i.__super__.processingInstruction.call(this, a, c, p));
      }, i.prototype.raw = function(a, c, p) {
        return this.stream.write(i.__super__.raw.call(this, a, c, p));
      }, i.prototype.text = function(a, c, p) {
        return this.stream.write(i.__super__.text.call(this, a, c, p));
      }, i.prototype.dtdAttList = function(a, c, p) {
        return this.stream.write(i.__super__.dtdAttList.call(this, a, c, p));
      }, i.prototype.dtdElement = function(a, c, p) {
        return this.stream.write(i.__super__.dtdElement.call(this, a, c, p));
      }, i.prototype.dtdEntity = function(a, c, p) {
        return this.stream.write(i.__super__.dtdEntity.call(this, a, c, p));
      }, i.prototype.dtdNotation = function(a, c, p) {
        return this.stream.write(i.__super__.dtdNotation.call(this, a, c, p));
      }, i;
    }(n);
  }).call(re)), lc.exports;
}
var bf;
function a0() {
  return bf || (bf = 1, (function() {
    var e, t, n, r, o, s, i, a, c, p;
    p = An(), a = p.assign, c = p.isFunction, n = _y(), r = Oy(), o = s0(), i = cu(), s = i0(), e = Ce(), t = Wi(), hn.create = function(l, u, d, m) {
      var f, g;
      if (l == null)
        throw new Error("Root element needs a name.");
      return m = a({}, u, d, m), f = new r(m), g = f.element(l), m.headless || (f.declaration(m), (m.pubID != null || m.sysID != null) && f.dtd(m)), g;
    }, hn.begin = function(l, u, d) {
      var m;
      return c(l) && (m = [l, u], u = m[0], d = m[1], l = {}), u ? new o(l, u, d) : new r(l);
    }, hn.stringWriter = function(l) {
      return new i(l);
    }, hn.streamWriter = function(l, u) {
      return new s(l, u);
    }, hn.implementation = new n(), hn.nodeType = e, hn.writerState = t;
  }).call(re)), hn;
}
var wf;
function c0() {
  return wf || (wf = 1, (function() {
    var e, t, n, r, o, s = {}.hasOwnProperty;
    e = a0(), t = Kl().defaults, r = function(i) {
      return typeof i == "string" && (i.indexOf("&") >= 0 || i.indexOf(">") >= 0 || i.indexOf("<") >= 0);
    }, o = function(i) {
      return "<![CDATA[" + n(i) + "]]>";
    }, n = function(i) {
      return i.replace("]]>", "]]]]><![CDATA[>");
    }, Da.Builder = function() {
      function i(a) {
        var c, p, l;
        this.options = {}, p = t["0.2"];
        for (c in p)
          s.call(p, c) && (l = p[c], this.options[c] = l);
        for (c in a)
          s.call(a, c) && (l = a[c], this.options[c] = l);
      }
      return i.prototype.buildObject = function(a) {
        var c, p, l, u, d;
        return c = this.options.attrkey, p = this.options.charkey, Object.keys(a).length === 1 && this.options.rootName === t["0.2"].rootName ? (d = Object.keys(a)[0], a = a[d]) : d = this.options.rootName, l = /* @__PURE__ */ function(m) {
          return function(f, g) {
            var y, v, b, w, T, P;
            if (typeof g != "object")
              m.options.cdata && r(g) ? f.raw(o(g)) : f.txt(g);
            else if (Array.isArray(g)) {
              for (w in g)
                if (s.call(g, w)) {
                  v = g[w];
                  for (T in v)
                    b = v[T], f = l(f.ele(T), b).up();
                }
            } else
              for (T in g)
                if (s.call(g, T))
                  if (v = g[T], T === c) {
                    if (typeof v == "object")
                      for (y in v)
                        P = v[y], f = f.att(y, P);
                  } else if (T === p)
                    m.options.cdata && r(v) ? f = f.raw(o(v)) : f = f.txt(v);
                  else if (Array.isArray(v))
                    for (w in v)
                      s.call(v, w) && (b = v[w], typeof b == "string" ? m.options.cdata && r(b) ? f = f.ele(T).raw(o(b)).up() : f = f.ele(T, b).up() : f = l(f.ele(T), b).up());
                  else typeof v == "object" ? f = l(f.ele(T), v).up() : typeof v == "string" && m.options.cdata && r(v) ? f = f.ele(T).raw(o(v)).up() : (v == null && (v = ""), f = f.ele(T, v.toString()).up());
            return f;
          };
        }(this), u = e.create(d, this.options.xmldec, this.options.doctype, {
          headless: this.options.headless,
          allowSurrogateChars: this.options.allowSurrogateChars
        }), l(u, a).end(this.options.renderOpts);
      }, i;
    }();
  }).call(re)), Da;
}
var uc = {}, pc = {}, xf;
function l0() {
  return xf || (xf = 1, function(e) {
    (function(t) {
      t.parser = function($, x) {
        return new r($, x);
      }, t.SAXParser = r, t.SAXStream = l, t.createStream = p, t.MAX_BUFFER_LENGTH = 64 * 1024;
      var n = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      t.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function r($, x) {
        if (!(this instanceof r))
          return new r($, x);
        var j = this;
        s(j), j.q = j.c = "", j.bufferCheckPosition = t.MAX_BUFFER_LENGTH, j.opt = x || {}, j.opt.lowercase = j.opt.lowercase || j.opt.lowercasetags, j.looseCase = j.opt.lowercase ? "toLowerCase" : "toUpperCase", j.tags = [], j.closed = j.closedRoot = j.sawRoot = !1, j.tag = j.error = null, j.strict = !!$, j.noscript = !!($ || j.opt.noscript), j.state = E.BEGIN, j.strictEntities = j.opt.strictEntities, j.ENTITIES = j.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), j.attribList = [], j.opt.xmlns && (j.ns = Object.create(g)), j.opt.unquotedAttributeValues === void 0 && (j.opt.unquotedAttributeValues = !$), j.trackPosition = j.opt.position !== !1, j.trackPosition && (j.position = j.line = j.column = 0), I(j, "onready");
      }
      Object.create || (Object.create = function($) {
        function x() {
        }
        x.prototype = $;
        var j = new x();
        return j;
      }), Object.keys || (Object.keys = function($) {
        var x = [];
        for (var j in $) $.hasOwnProperty(j) && x.push(j);
        return x;
      });
      function o($) {
        for (var x = Math.max(t.MAX_BUFFER_LENGTH, 10), j = 0, R = 0, Z = n.length; R < Z; R++) {
          var ye = $[n[R]].length;
          if (ye > x)
            switch (n[R]) {
              case "textNode":
                H($);
                break;
              case "cdata":
                z($, "oncdata", $.cdata), $.cdata = "";
                break;
              case "script":
                z($, "onscript", $.script), $.script = "";
                break;
              default:
                U($, "Max buffer length exceeded: " + n[R]);
            }
          j = Math.max(j, ye);
        }
        var be = t.MAX_BUFFER_LENGTH - j;
        $.bufferCheckPosition = be + $.position;
      }
      function s($) {
        for (var x = 0, j = n.length; x < j; x++)
          $[n[x]] = "";
      }
      function i($) {
        H($), $.cdata !== "" && (z($, "oncdata", $.cdata), $.cdata = ""), $.script !== "" && (z($, "onscript", $.script), $.script = "");
      }
      r.prototype = {
        end: function() {
          G(this);
        },
        write: A,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          i(this);
        }
      };
      var a;
      try {
        a = require("stream").Stream;
      } catch {
        a = function() {
        };
      }
      a || (a = function() {
      });
      var c = t.EVENTS.filter(function($) {
        return $ !== "error" && $ !== "end";
      });
      function p($, x) {
        return new l($, x);
      }
      function l($, x) {
        if (!(this instanceof l))
          return new l($, x);
        a.apply(this), this._parser = new r($, x), this.writable = !0, this.readable = !0;
        var j = this;
        this._parser.onend = function() {
          j.emit("end");
        }, this._parser.onerror = function(R) {
          j.emit("error", R), j._parser.error = null;
        }, this._decoder = null, c.forEach(function(R) {
          Object.defineProperty(j, "on" + R, {
            get: function() {
              return j._parser["on" + R];
            },
            set: function(Z) {
              if (!Z)
                return j.removeAllListeners(R), j._parser["on" + R] = Z, Z;
              j.on(R, Z);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      l.prototype = Object.create(a.prototype, {
        constructor: {
          value: l
        }
      }), l.prototype.write = function($) {
        return typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer($) && (this._decoder || (this._decoder = new TextDecoder("utf8")), $ = this._decoder.decode($, { stream: !0 })), this._parser.write($.toString()), this.emit("data", $), !0;
      }, l.prototype.end = function($) {
        if ($ && $.length && this.write($), this._decoder) {
          var x = this._decoder.decode();
          x && (this._parser.write(x), this.emit("data", x));
        }
        return this._parser.end(), !0;
      }, l.prototype.on = function($, x) {
        var j = this;
        return !j._parser["on" + $] && c.indexOf($) !== -1 && (j._parser["on" + $] = function() {
          var R = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          R.splice(0, 0, $), j.emit.apply(j, R);
        }), a.prototype.on.call(j, $, x);
      };
      var u = "[CDATA[", d = "DOCTYPE", m = "http://www.w3.org/XML/1998/namespace", f = "http://www.w3.org/2000/xmlns/", g = { xml: m, xmlns: f }, y = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, v = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, b = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, w = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function T($) {
        return $ === " " || $ === `
` || $ === "\r" || $ === "	";
      }
      function P($) {
        return $ === '"' || $ === "'";
      }
      function C($) {
        return $ === ">" || T($);
      }
      function B($, x) {
        return $.test(x);
      }
      function k($, x) {
        return !B($, x);
      }
      var E = 0;
      t.STATE = {
        BEGIN: E++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: E++,
        // leading whitespace
        TEXT: E++,
        // general stuff
        TEXT_ENTITY: E++,
        // &amp and such.
        OPEN_WAKA: E++,
        // <
        SGML_DECL: E++,
        // <!BLARG
        SGML_DECL_QUOTED: E++,
        // <!BLARG foo "bar
        DOCTYPE: E++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: E++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: E++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: E++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: E++,
        // <!-
        COMMENT: E++,
        // <!--
        COMMENT_ENDING: E++,
        // <!-- blah -
        COMMENT_ENDED: E++,
        // <!-- blah --
        CDATA: E++,
        // <![CDATA[ something
        CDATA_ENDING: E++,
        // ]
        CDATA_ENDING_2: E++,
        // ]]
        PROC_INST: E++,
        // <?hi
        PROC_INST_BODY: E++,
        // <?hi there
        PROC_INST_ENDING: E++,
        // <?hi "there" ?
        OPEN_TAG: E++,
        // <strong
        OPEN_TAG_SLASH: E++,
        // <strong /
        ATTRIB: E++,
        // <a
        ATTRIB_NAME: E++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: E++,
        // <a foo _
        ATTRIB_VALUE: E++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: E++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: E++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: E++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: E++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: E++,
        // <foo bar=&quot
        CLOSE_TAG: E++,
        // </a
        CLOSE_TAG_SAW_WHITE: E++,
        // </a   >
        SCRIPT: E++,
        // <script> ...
        SCRIPT_ENDING: E++
        // <script> ... <
      }, t.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, t.ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830
      }, Object.keys(t.ENTITIES).forEach(function($) {
        var x = t.ENTITIES[$], j = typeof x == "number" ? String.fromCharCode(x) : x;
        t.ENTITIES[$] = j;
      });
      for (var q in t.STATE)
        t.STATE[t.STATE[q]] = q;
      E = t.STATE;
      function I($, x, j) {
        $[x] && $[x](j);
      }
      function z($, x, j) {
        $.textNode && H($), I($, x, j);
      }
      function H($) {
        $.textNode = F($.opt, $.textNode), $.textNode && I($, "ontext", $.textNode), $.textNode = "";
      }
      function F($, x) {
        return $.trim && (x = x.trim()), $.normalize && (x = x.replace(/\s+/g, " ")), x;
      }
      function U($, x) {
        return H($), $.trackPosition && (x += `
Line: ` + $.line + `
Column: ` + $.column + `
Char: ` + $.c), x = new Error(x), $.error = x, I($, "onerror", x), $;
      }
      function G($) {
        return $.sawRoot && !$.closedRoot && V($, "Unclosed root tag"), $.state !== E.BEGIN && $.state !== E.BEGIN_WHITESPACE && $.state !== E.TEXT && U($, "Unexpected end"), H($), $.c = "", $.closed = !0, I($, "onend"), r.call($, $.strict, $.opt), $;
      }
      function V($, x) {
        if (typeof $ != "object" || !($ instanceof r))
          throw new Error("bad call to strictFail");
        $.strict && U($, x);
      }
      function K($) {
        $.strict || ($.tagName = $.tagName[$.looseCase]());
        var x = $.tags[$.tags.length - 1] || $, j = $.tag = { name: $.tagName, attributes: {} };
        $.opt.xmlns && (j.ns = x.ns), $.attribList.length = 0, z($, "onopentagstart", j);
      }
      function X($, x) {
        var j = $.indexOf(":"), R = j < 0 ? ["", $] : $.split(":"), Z = R[0], ye = R[1];
        return x && $ === "xmlns" && (Z = "xmlns", ye = ""), { prefix: Z, local: ye };
      }
      function D($) {
        if ($.strict || ($.attribName = $.attribName[$.looseCase]()), $.attribList.indexOf($.attribName) !== -1 || $.tag.attributes.hasOwnProperty($.attribName)) {
          $.attribName = $.attribValue = "";
          return;
        }
        if ($.opt.xmlns) {
          var x = X($.attribName, !0), j = x.prefix, R = x.local;
          if (j === "xmlns")
            if (R === "xml" && $.attribValue !== m)
              V(
                $,
                "xml: prefix must be bound to " + m + `
Actual: ` + $.attribValue
              );
            else if (R === "xmlns" && $.attribValue !== f)
              V(
                $,
                "xmlns: prefix must be bound to " + f + `
Actual: ` + $.attribValue
              );
            else {
              var Z = $.tag, ye = $.tags[$.tags.length - 1] || $;
              Z.ns === ye.ns && (Z.ns = Object.create(ye.ns)), Z.ns[R] = $.attribValue;
            }
          $.attribList.push([$.attribName, $.attribValue]);
        } else
          $.tag.attributes[$.attribName] = $.attribValue, z($, "onattribute", {
            name: $.attribName,
            value: $.attribValue
          });
        $.attribName = $.attribValue = "";
      }
      function S($, x) {
        if ($.opt.xmlns) {
          var j = $.tag, R = X($.tagName);
          j.prefix = R.prefix, j.local = R.local, j.uri = j.ns[R.prefix] || "", j.prefix && !j.uri && (V(
            $,
            "Unbound namespace prefix: " + JSON.stringify($.tagName)
          ), j.uri = R.prefix);
          var Z = $.tags[$.tags.length - 1] || $;
          j.ns && Z.ns !== j.ns && Object.keys(j.ns).forEach(function(Yt) {
            z($, "onopennamespace", {
              prefix: Yt,
              uri: j.ns[Yt]
            });
          });
          for (var ye = 0, be = $.attribList.length; ye < be; ye++) {
            var Oe = $.attribList[ye], Pe = Oe[0], ht = Oe[1], _e = X(Pe, !0), Ve = _e.prefix, fn = _e.local, Jt = Ve === "" ? "" : j.ns[Ve] || "", kt = {
              name: Pe,
              value: ht,
              prefix: Ve,
              local: fn,
              uri: Jt
            };
            Ve && Ve !== "xmlns" && !Jt && (V(
              $,
              "Unbound namespace prefix: " + JSON.stringify(Ve)
            ), kt.uri = Ve), $.tag.attributes[Pe] = kt, z($, "onattribute", kt);
          }
          $.attribList.length = 0;
        }
        $.tag.isSelfClosing = !!x, $.sawRoot = !0, $.tags.push($.tag), z($, "onopentag", $.tag), x || (!$.noscript && $.tagName.toLowerCase() === "script" ? $.state = E.SCRIPT : $.state = E.TEXT, $.tag = null, $.tagName = ""), $.attribName = $.attribValue = "", $.attribList.length = 0;
      }
      function N($) {
        if (!$.tagName) {
          V($, "Weird empty close tag."), $.textNode += "</>", $.state = E.TEXT;
          return;
        }
        if ($.script) {
          if ($.tagName !== "script") {
            $.script += "</" + $.tagName + ">", $.tagName = "", $.state = E.SCRIPT;
            return;
          }
          z($, "onscript", $.script), $.script = "";
        }
        var x = $.tags.length, j = $.tagName;
        $.strict || (j = j[$.looseCase]());
        for (var R = j; x--; ) {
          var Z = $.tags[x];
          if (Z.name !== R)
            V($, "Unexpected close tag");
          else
            break;
        }
        if (x < 0) {
          V($, "Unmatched closing tag: " + $.tagName), $.textNode += "</" + $.tagName + ">", $.state = E.TEXT;
          return;
        }
        $.tagName = j;
        for (var ye = $.tags.length; ye-- > x; ) {
          var be = $.tag = $.tags.pop();
          $.tagName = $.tag.name, z($, "onclosetag", $.tagName);
          var Oe = {};
          for (var Pe in be.ns)
            Oe[Pe] = be.ns[Pe];
          var ht = $.tags[$.tags.length - 1] || $;
          $.opt.xmlns && be.ns !== ht.ns && Object.keys(be.ns).forEach(function(_e) {
            var Ve = be.ns[_e];
            z($, "onclosenamespace", { prefix: _e, uri: Ve });
          });
        }
        x === 0 && ($.closedRoot = !0), $.tagName = $.attribValue = $.attribName = "", $.attribList.length = 0, $.state = E.TEXT;
      }
      function O($) {
        var x = $.entity, j = x.toLowerCase(), R, Z = "";
        return $.ENTITIES[x] ? $.ENTITIES[x] : $.ENTITIES[j] ? $.ENTITIES[j] : (x = j, x.charAt(0) === "#" && (x.charAt(1) === "x" ? (x = x.slice(2), R = parseInt(x, 16), Z = R.toString(16)) : (x = x.slice(1), R = parseInt(x, 10), Z = R.toString(10))), x = x.replace(/^0+/, ""), isNaN(R) || Z.toLowerCase() !== x || R < 0 || R > 1114111 ? (V($, "Invalid character entity"), "&" + $.entity + ";") : String.fromCodePoint(R));
      }
      function h($, x) {
        x === "<" ? ($.state = E.OPEN_WAKA, $.startTagPosition = $.position) : T(x) || (V($, "Non-whitespace before first tag."), $.textNode = x, $.state = E.TEXT);
      }
      function _($, x) {
        var j = "";
        return x < $.length && (j = $.charAt(x)), j;
      }
      function A($) {
        var x = this;
        if (this.error)
          throw this.error;
        if (x.closed)
          return U(
            x,
            "Cannot write after close. Assign an onready handler."
          );
        if ($ === null)
          return G(x);
        typeof $ == "object" && ($ = $.toString());
        for (var j = 0, R = ""; R = _($, j++), x.c = R, !!R; )
          switch (x.trackPosition && (x.position++, R === `
` ? (x.line++, x.column = 0) : x.column++), x.state) {
            case E.BEGIN:
              if (x.state = E.BEGIN_WHITESPACE, R === "\uFEFF")
                continue;
              h(x, R);
              continue;
            case E.BEGIN_WHITESPACE:
              h(x, R);
              continue;
            case E.TEXT:
              if (x.sawRoot && !x.closedRoot) {
                for (var ye = j - 1; R && R !== "<" && R !== "&"; )
                  R = _($, j++), R && x.trackPosition && (x.position++, R === `
` ? (x.line++, x.column = 0) : x.column++);
                x.textNode += $.substring(ye, j - 1);
              }
              R === "<" && !(x.sawRoot && x.closedRoot && !x.strict) ? (x.state = E.OPEN_WAKA, x.startTagPosition = x.position) : (!T(R) && (!x.sawRoot || x.closedRoot) && V(x, "Text data outside of root node."), R === "&" ? x.state = E.TEXT_ENTITY : x.textNode += R);
              continue;
            case E.SCRIPT:
              R === "<" ? x.state = E.SCRIPT_ENDING : x.script += R;
              continue;
            case E.SCRIPT_ENDING:
              R === "/" ? x.state = E.CLOSE_TAG : (x.script += "<" + R, x.state = E.SCRIPT);
              continue;
            case E.OPEN_WAKA:
              if (R === "!")
                x.state = E.SGML_DECL, x.sgmlDecl = "";
              else if (!T(R)) if (B(y, R))
                x.state = E.OPEN_TAG, x.tagName = R;
              else if (R === "/")
                x.state = E.CLOSE_TAG, x.tagName = "";
              else if (R === "?")
                x.state = E.PROC_INST, x.procInstName = x.procInstBody = "";
              else {
                if (V(x, "Unencoded <"), x.startTagPosition + 1 < x.position) {
                  var Z = x.position - x.startTagPosition;
                  R = new Array(Z).join(" ") + R;
                }
                x.textNode += "<" + R, x.state = E.TEXT;
              }
              continue;
            case E.SGML_DECL:
              if (x.sgmlDecl + R === "--") {
                x.state = E.COMMENT, x.comment = "", x.sgmlDecl = "";
                continue;
              }
              x.doctype && x.doctype !== !0 && x.sgmlDecl ? (x.state = E.DOCTYPE_DTD, x.doctype += "<!" + x.sgmlDecl + R, x.sgmlDecl = "") : (x.sgmlDecl + R).toUpperCase() === u ? (z(x, "onopencdata"), x.state = E.CDATA, x.sgmlDecl = "", x.cdata = "") : (x.sgmlDecl + R).toUpperCase() === d ? (x.state = E.DOCTYPE, (x.doctype || x.sawRoot) && V(
                x,
                "Inappropriately located doctype declaration"
              ), x.doctype = "", x.sgmlDecl = "") : R === ">" ? (z(x, "onsgmldeclaration", x.sgmlDecl), x.sgmlDecl = "", x.state = E.TEXT) : (P(R) && (x.state = E.SGML_DECL_QUOTED), x.sgmlDecl += R);
              continue;
            case E.SGML_DECL_QUOTED:
              R === x.q && (x.state = E.SGML_DECL, x.q = ""), x.sgmlDecl += R;
              continue;
            case E.DOCTYPE:
              R === ">" ? (x.state = E.TEXT, z(x, "ondoctype", x.doctype), x.doctype = !0) : (x.doctype += R, R === "[" ? x.state = E.DOCTYPE_DTD : P(R) && (x.state = E.DOCTYPE_QUOTED, x.q = R));
              continue;
            case E.DOCTYPE_QUOTED:
              x.doctype += R, R === x.q && (x.q = "", x.state = E.DOCTYPE);
              continue;
            case E.DOCTYPE_DTD:
              R === "]" ? (x.doctype += R, x.state = E.DOCTYPE) : R === "<" ? (x.state = E.OPEN_WAKA, x.startTagPosition = x.position) : P(R) ? (x.doctype += R, x.state = E.DOCTYPE_DTD_QUOTED, x.q = R) : x.doctype += R;
              continue;
            case E.DOCTYPE_DTD_QUOTED:
              x.doctype += R, R === x.q && (x.state = E.DOCTYPE_DTD, x.q = "");
              continue;
            case E.COMMENT:
              R === "-" ? x.state = E.COMMENT_ENDING : x.comment += R;
              continue;
            case E.COMMENT_ENDING:
              R === "-" ? (x.state = E.COMMENT_ENDED, x.comment = F(x.opt, x.comment), x.comment && z(x, "oncomment", x.comment), x.comment = "") : (x.comment += "-" + R, x.state = E.COMMENT);
              continue;
            case E.COMMENT_ENDED:
              R !== ">" ? (V(x, "Malformed comment"), x.comment += "--" + R, x.state = E.COMMENT) : x.doctype && x.doctype !== !0 ? x.state = E.DOCTYPE_DTD : x.state = E.TEXT;
              continue;
            case E.CDATA:
              for (var ye = j - 1; R && R !== "]"; )
                R = _($, j++), R && x.trackPosition && (x.position++, R === `
` ? (x.line++, x.column = 0) : x.column++);
              x.cdata += $.substring(ye, j - 1), R === "]" && (x.state = E.CDATA_ENDING);
              continue;
            case E.CDATA_ENDING:
              R === "]" ? x.state = E.CDATA_ENDING_2 : (x.cdata += "]" + R, x.state = E.CDATA);
              continue;
            case E.CDATA_ENDING_2:
              R === ">" ? (x.cdata && z(x, "oncdata", x.cdata), z(x, "onclosecdata"), x.cdata = "", x.state = E.TEXT) : R === "]" ? x.cdata += "]" : (x.cdata += "]]" + R, x.state = E.CDATA);
              continue;
            case E.PROC_INST:
              R === "?" ? x.state = E.PROC_INST_ENDING : T(R) ? x.state = E.PROC_INST_BODY : x.procInstName += R;
              continue;
            case E.PROC_INST_BODY:
              if (!x.procInstBody && T(R))
                continue;
              R === "?" ? x.state = E.PROC_INST_ENDING : x.procInstBody += R;
              continue;
            case E.PROC_INST_ENDING:
              R === ">" ? (z(x, "onprocessinginstruction", {
                name: x.procInstName,
                body: x.procInstBody
              }), x.procInstName = x.procInstBody = "", x.state = E.TEXT) : (x.procInstBody += "?" + R, x.state = E.PROC_INST_BODY);
              continue;
            case E.OPEN_TAG:
              B(v, R) ? x.tagName += R : (K(x), R === ">" ? S(x) : R === "/" ? x.state = E.OPEN_TAG_SLASH : (T(R) || V(x, "Invalid character in tag name"), x.state = E.ATTRIB));
              continue;
            case E.OPEN_TAG_SLASH:
              R === ">" ? (S(x, !0), N(x)) : (V(
                x,
                "Forward-slash in opening tag not followed by >"
              ), x.state = E.ATTRIB);
              continue;
            case E.ATTRIB:
              if (T(R))
                continue;
              R === ">" ? S(x) : R === "/" ? x.state = E.OPEN_TAG_SLASH : B(y, R) ? (x.attribName = R, x.attribValue = "", x.state = E.ATTRIB_NAME) : V(x, "Invalid attribute name");
              continue;
            case E.ATTRIB_NAME:
              R === "=" ? x.state = E.ATTRIB_VALUE : R === ">" ? (V(x, "Attribute without value"), x.attribValue = x.attribName, D(x), S(x)) : T(R) ? x.state = E.ATTRIB_NAME_SAW_WHITE : B(v, R) ? x.attribName += R : V(x, "Invalid attribute name");
              continue;
            case E.ATTRIB_NAME_SAW_WHITE:
              if (R === "=")
                x.state = E.ATTRIB_VALUE;
              else {
                if (T(R))
                  continue;
                V(x, "Attribute without value"), x.tag.attributes[x.attribName] = "", x.attribValue = "", z(x, "onattribute", {
                  name: x.attribName,
                  value: ""
                }), x.attribName = "", R === ">" ? S(x) : B(y, R) ? (x.attribName = R, x.state = E.ATTRIB_NAME) : (V(x, "Invalid attribute name"), x.state = E.ATTRIB);
              }
              continue;
            case E.ATTRIB_VALUE:
              if (T(R))
                continue;
              P(R) ? (x.q = R, x.state = E.ATTRIB_VALUE_QUOTED) : (x.opt.unquotedAttributeValues || U(x, "Unquoted attribute value"), x.state = E.ATTRIB_VALUE_UNQUOTED, x.attribValue = R);
              continue;
            case E.ATTRIB_VALUE_QUOTED:
              if (R !== x.q) {
                R === "&" ? x.state = E.ATTRIB_VALUE_ENTITY_Q : x.attribValue += R;
                continue;
              }
              D(x), x.q = "", x.state = E.ATTRIB_VALUE_CLOSED;
              continue;
            case E.ATTRIB_VALUE_CLOSED:
              T(R) ? x.state = E.ATTRIB : R === ">" ? S(x) : R === "/" ? x.state = E.OPEN_TAG_SLASH : B(y, R) ? (V(x, "No whitespace between attributes"), x.attribName = R, x.attribValue = "", x.state = E.ATTRIB_NAME) : V(x, "Invalid attribute name");
              continue;
            case E.ATTRIB_VALUE_UNQUOTED:
              if (!C(R)) {
                R === "&" ? x.state = E.ATTRIB_VALUE_ENTITY_U : x.attribValue += R;
                continue;
              }
              D(x), R === ">" ? S(x) : x.state = E.ATTRIB;
              continue;
            case E.CLOSE_TAG:
              if (x.tagName)
                R === ">" ? N(x) : B(v, R) ? x.tagName += R : x.script ? (x.script += "</" + x.tagName + R, x.tagName = "", x.state = E.SCRIPT) : (T(R) || V(x, "Invalid tagname in closing tag"), x.state = E.CLOSE_TAG_SAW_WHITE);
              else {
                if (T(R))
                  continue;
                k(y, R) ? x.script ? (x.script += "</" + R, x.state = E.SCRIPT) : V(x, "Invalid tagname in closing tag.") : x.tagName = R;
              }
              continue;
            case E.CLOSE_TAG_SAW_WHITE:
              if (T(R))
                continue;
              R === ">" ? N(x) : V(x, "Invalid characters in closing tag");
              continue;
            case E.TEXT_ENTITY:
            case E.ATTRIB_VALUE_ENTITY_Q:
            case E.ATTRIB_VALUE_ENTITY_U:
              var be, Oe;
              switch (x.state) {
                case E.TEXT_ENTITY:
                  be = E.TEXT, Oe = "textNode";
                  break;
                case E.ATTRIB_VALUE_ENTITY_Q:
                  be = E.ATTRIB_VALUE_QUOTED, Oe = "attribValue";
                  break;
                case E.ATTRIB_VALUE_ENTITY_U:
                  be = E.ATTRIB_VALUE_UNQUOTED, Oe = "attribValue";
                  break;
              }
              if (R === ";") {
                var Pe = O(x);
                x.opt.unparsedEntities && !Object.values(t.XML_ENTITIES).includes(Pe) ? (x.entity = "", x.state = be, x.write(Pe)) : (x[Oe] += Pe, x.entity = "", x.state = be);
              } else B(x.entity.length ? w : b, R) ? x.entity += R : (V(x, "Invalid character in entity name"), x[Oe] += "&" + x.entity + R, x.entity = "", x.state = be);
              continue;
            default:
              throw new Error(x, "Unknown state: " + x.state);
          }
        return x.position >= x.bufferCheckPosition && o(x), x;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var $ = String.fromCharCode, x = Math.floor, j = function() {
          var R = 16384, Z = [], ye, be, Oe = -1, Pe = arguments.length;
          if (!Pe)
            return "";
          for (var ht = ""; ++Oe < Pe; ) {
            var _e = Number(arguments[Oe]);
            if (!isFinite(_e) || // `NaN`, `+Infinity`, or `-Infinity`
            _e < 0 || // not a valid Unicode code point
            _e > 1114111 || // not a valid Unicode code point
            x(_e) !== _e)
              throw RangeError("Invalid code point: " + _e);
            _e <= 65535 ? Z.push(_e) : (_e -= 65536, ye = (_e >> 10) + 55296, be = _e % 1024 + 56320, Z.push(ye, be)), (Oe + 1 === Pe || Z.length > R) && (ht += $.apply(null, Z), Z.length = 0);
          }
          return ht;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: j,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = j;
      }();
    })(e);
  }(pc)), pc;
}
var dc = {}, _f;
function u0() {
  return _f || (_f = 1, (function() {
    dc.stripBOM = function(e) {
      return e[0] === "\uFEFF" ? e.substring(1) : e;
    };
  }).call(re)), dc;
}
var ar = {}, $f;
function Py() {
  return $f || ($f = 1, (function() {
    var e;
    e = new RegExp(/(?!xmlns)^.*:/), ar.normalize = function(t) {
      return t.toLowerCase();
    }, ar.firstCharLowerCase = function(t) {
      return t.charAt(0).toLowerCase() + t.slice(1);
    }, ar.stripPrefix = function(t) {
      return t.replace(e, "");
    }, ar.parseNumbers = function(t) {
      return isNaN(t) || (t = t % 1 === 0 ? parseInt(t, 10) : parseFloat(t)), t;
    }, ar.parseBooleans = function(t) {
      return /^(?:true|false)$/i.test(t) && (t = t.toLowerCase() === "true"), t;
    };
  }).call(re)), ar;
}
var Ef;
function p0() {
  return Ef || (Ef = 1, function(e) {
    (function() {
      var t, n, r, o, s, i, a, c, p = function(d, m) {
        return function() {
          return d.apply(m, arguments);
        };
      }, l = function(d, m) {
        for (var f in m)
          u.call(m, f) && (d[f] = m[f]);
        function g() {
          this.constructor = d;
        }
        return g.prototype = m.prototype, d.prototype = new g(), d.__super__ = m.prototype, d;
      }, u = {}.hasOwnProperty;
      a = l0(), r = Kw, t = u0(), i = Py(), c = Jw.setImmediate, n = Kl().defaults, o = function(d) {
        return typeof d == "object" && d != null && Object.keys(d).length === 0;
      }, s = function(d, m, f) {
        var g, y, v;
        for (g = 0, y = d.length; g < y; g++)
          v = d[g], m = v(m, f);
        return m;
      }, e.Parser = function(d) {
        l(m, d);
        function m(f) {
          this.parseStringPromise = p(this.parseStringPromise, this), this.parseString = p(this.parseString, this), this.reset = p(this.reset, this), this.assignOrPush = p(this.assignOrPush, this), this.processAsync = p(this.processAsync, this);
          var g, y, v;
          if (!(this instanceof e.Parser))
            return new e.Parser(f);
          this.options = {}, y = n["0.2"];
          for (g in y)
            u.call(y, g) && (v = y[g], this.options[g] = v);
          for (g in f)
            u.call(f, g) && (v = f[g], this.options[g] = v);
          this.options.xmlns && (this.options.xmlnskey = this.options.attrkey + "ns"), this.options.normalizeTags && (this.options.tagNameProcessors || (this.options.tagNameProcessors = []), this.options.tagNameProcessors.unshift(i.normalize)), this.reset();
        }
        return m.prototype.processAsync = function() {
          var f, g;
          try {
            return this.remaining.length <= this.options.chunkSize ? (f = this.remaining, this.remaining = "", this.saxParser = this.saxParser.write(f), this.saxParser.close()) : (f = this.remaining.substr(0, this.options.chunkSize), this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length), this.saxParser = this.saxParser.write(f), c(this.processAsync));
          } catch (y) {
            if (g = y, !this.saxParser.errThrown)
              return this.saxParser.errThrown = !0, this.emit(g);
          }
        }, m.prototype.assignOrPush = function(f, g, y) {
          return g in f ? (f[g] instanceof Array || (f[g] = [f[g]]), f[g].push(y)) : this.options.explicitArray ? f[g] = [y] : f[g] = y;
        }, m.prototype.reset = function() {
          var f, g, y, v;
          return this.removeAllListeners(), this.saxParser = a.parser(this.options.strict, {
            trim: !1,
            normalize: !1,
            xmlns: this.options.xmlns
          }), this.saxParser.errThrown = !1, this.saxParser.onerror = /* @__PURE__ */ function(b) {
            return function(w) {
              if (b.saxParser.resume(), !b.saxParser.errThrown)
                return b.saxParser.errThrown = !0, b.emit("error", w);
            };
          }(this), this.saxParser.onend = /* @__PURE__ */ function(b) {
            return function() {
              if (!b.saxParser.ended)
                return b.saxParser.ended = !0, b.emit("end", b.resultObject);
            };
          }(this), this.saxParser.ended = !1, this.EXPLICIT_CHARKEY = this.options.explicitCharkey, this.resultObject = null, v = [], f = this.options.attrkey, g = this.options.charkey, this.saxParser.onopentag = /* @__PURE__ */ function(b) {
            return function(w) {
              var T, P, C, B, k;
              if (C = /* @__PURE__ */ Object.create(null), C[g] = "", !b.options.ignoreAttrs) {
                k = w.attributes;
                for (T in k)
                  u.call(k, T) && (!(f in C) && !b.options.mergeAttrs && (C[f] = /* @__PURE__ */ Object.create(null)), P = b.options.attrValueProcessors ? s(b.options.attrValueProcessors, w.attributes[T], T) : w.attributes[T], B = b.options.attrNameProcessors ? s(b.options.attrNameProcessors, T) : T, b.options.mergeAttrs ? b.assignOrPush(C, B, P) : C[f][B] = P);
              }
              return C["#name"] = b.options.tagNameProcessors ? s(b.options.tagNameProcessors, w.name) : w.name, b.options.xmlns && (C[b.options.xmlnskey] = {
                uri: w.uri,
                local: w.local
              }), v.push(C);
            };
          }(this), this.saxParser.onclosetag = /* @__PURE__ */ function(b) {
            return function() {
              var w, T, P, C, B, k, E, q, I, z;
              if (k = v.pop(), B = k["#name"], (!b.options.explicitChildren || !b.options.preserveChildrenOrder) && delete k["#name"], k.cdata === !0 && (w = k.cdata, delete k.cdata), I = v[v.length - 1], k[g].match(/^\s*$/) && !w ? (T = k[g], delete k[g]) : (b.options.trim && (k[g] = k[g].trim()), b.options.normalize && (k[g] = k[g].replace(/\s{2,}/g, " ").trim()), k[g] = b.options.valueProcessors ? s(b.options.valueProcessors, k[g], B) : k[g], Object.keys(k).length === 1 && g in k && !b.EXPLICIT_CHARKEY && (k = k[g])), o(k) && (typeof b.options.emptyTag == "function" ? k = b.options.emptyTag() : k = b.options.emptyTag !== "" ? b.options.emptyTag : T), b.options.validator != null && (z = "/" + function() {
                var H, F, U;
                for (U = [], H = 0, F = v.length; H < F; H++)
                  C = v[H], U.push(C["#name"]);
                return U;
              }().concat(B).join("/"), function() {
                var H;
                try {
                  return k = b.options.validator(z, I && I[B], k);
                } catch (F) {
                  return H = F, b.emit("error", H);
                }
              }()), b.options.explicitChildren && !b.options.mergeAttrs && typeof k == "object") {
                if (!b.options.preserveChildrenOrder)
                  C = /* @__PURE__ */ Object.create(null), b.options.attrkey in k && (C[b.options.attrkey] = k[b.options.attrkey], delete k[b.options.attrkey]), !b.options.charsAsChildren && b.options.charkey in k && (C[b.options.charkey] = k[b.options.charkey], delete k[b.options.charkey]), Object.getOwnPropertyNames(k).length > 0 && (C[b.options.childkey] = k), k = C;
                else if (I) {
                  I[b.options.childkey] = I[b.options.childkey] || [], E = /* @__PURE__ */ Object.create(null);
                  for (P in k)
                    u.call(k, P) && (E[P] = k[P]);
                  I[b.options.childkey].push(E), delete k["#name"], Object.keys(k).length === 1 && g in k && !b.EXPLICIT_CHARKEY && (k = k[g]);
                }
              }
              return v.length > 0 ? b.assignOrPush(I, B, k) : (b.options.explicitRoot && (q = k, k = /* @__PURE__ */ Object.create(null), k[B] = q), b.resultObject = k, b.saxParser.ended = !0, b.emit("end", b.resultObject));
            };
          }(this), y = /* @__PURE__ */ function(b) {
            return function(w) {
              var T, P;
              if (P = v[v.length - 1], P)
                return P[g] += w, b.options.explicitChildren && b.options.preserveChildrenOrder && b.options.charsAsChildren && (b.options.includeWhiteChars || w.replace(/\\n/g, "").trim() !== "") && (P[b.options.childkey] = P[b.options.childkey] || [], T = {
                  "#name": "__text__"
                }, T[g] = w, b.options.normalize && (T[g] = T[g].replace(/\s{2,}/g, " ").trim()), P[b.options.childkey].push(T)), P;
            };
          }(this), this.saxParser.ontext = y, this.saxParser.oncdata = /* @__PURE__ */ function(b) {
            return function(w) {
              var T;
              if (T = y(w), T)
                return T.cdata = !0;
            };
          }();
        }, m.prototype.parseString = function(f, g) {
          var y;
          g != null && typeof g == "function" && (this.on("end", function(v) {
            return this.reset(), g(null, v);
          }), this.on("error", function(v) {
            return this.reset(), g(v);
          }));
          try {
            return f = f.toString(), f.trim() === "" ? (this.emit("end", null), !0) : (f = t.stripBOM(f), this.options.async ? (this.remaining = f, c(this.processAsync), this.saxParser) : this.saxParser.write(f).close());
          } catch (v) {
            if (y = v, this.saxParser.errThrown || this.saxParser.ended) {
              if (this.saxParser.ended)
                throw y;
            } else return this.emit("error", y), this.saxParser.errThrown = !0;
          }
        }, m.prototype.parseStringPromise = function(f) {
          return new Promise(/* @__PURE__ */ function(g) {
            return function(y, v) {
              return g.parseString(f, function(b, w) {
                return b ? v(b) : y(w);
              });
            };
          }(this));
        }, m;
      }(r), e.parseString = function(d, m, f) {
        var g, y, v;
        return f != null ? (typeof f == "function" && (g = f), typeof m == "object" && (y = m)) : (typeof m == "function" && (g = m), y = {}), v = new e.Parser(y), v.parseString(d, g);
      }, e.parseStringPromise = function(d, m) {
        var f, g;
        return typeof m == "object" && (f = m), g = new e.Parser(f), g.parseStringPromise(d);
      };
    }).call(re);
  }(uc)), uc;
}
(function() {
  var e, t, n, r, o = function(i, a) {
    for (var c in a)
      s.call(a, c) && (i[c] = a[c]);
    function p() {
      this.constructor = i;
    }
    return p.prototype = a.prototype, i.prototype = new p(), i.__super__ = a.prototype, i;
  }, s = {}.hasOwnProperty;
  t = Kl(), e = c0(), n = p0(), r = Py(), bn.defaults = t.defaults, bn.processors = r, bn.ValidationError = function(i) {
    o(a, i);
    function a(c) {
      this.message = c;
    }
    return a;
  }(Error), bn.Builder = e.Builder, bn.Parser = n.Parser, bn.parseString = n.parseString, bn.parseStringPromise = n.parseStringPromise;
}).call(re);
var Ny = { exports: {} };
const Ji = Ny.exports = {};
Ji.feed = [
  ["author", "creator"],
  ["dc:publisher", "publisher"],
  ["dc:creator", "creator"],
  ["dc:source", "source"],
  ["dc:title", "title"],
  ["dc:type", "type"],
  "title",
  "description",
  "author",
  "pubDate",
  "webMaster",
  "managingEditor",
  "generator",
  "link",
  "language",
  "copyright",
  "lastBuildDate",
  "docs",
  "generator",
  "ttl",
  "rating",
  "skipHours",
  "skipDays"
];
Ji.item = [
  ["author", "creator"],
  ["dc:creator", "creator"],
  ["dc:date", "date"],
  ["dc:language", "language"],
  ["dc:rights", "rights"],
  ["dc:source", "source"],
  ["dc:title", "title"],
  "title",
  "link",
  "pubDate",
  "author",
  "summary",
  ["content:encoded", "content:encoded", { includeSnippet: !0 }],
  "enclosure",
  "dc:creator",
  "dc:date",
  "comments"
];
var Ry = function(e) {
  return ["itunes:" + e, e];
};
Ji.podcastFeed = [
  "author",
  "subtitle",
  "summary",
  "explicit"
].map(Ry);
Ji.podcastItem = [
  "author",
  "subtitle",
  "summary",
  "explicit",
  "duration",
  "image",
  "episode",
  "image",
  "season",
  "keywords",
  "episodeType"
].map(Ry);
var d0 = Ny.exports, Ay = { exports: {} }, Dy = {}, $n = {};
const f0 = "Á", m0 = "á", h0 = "Ă", y0 = "ă", g0 = "∾", v0 = "∿", b0 = "∾̳", w0 = "Â", x0 = "â", _0 = "´", $0 = "А", E0 = "а", S0 = "Æ", T0 = "æ", O0 = "⁡", P0 = "𝔄", N0 = "𝔞", R0 = "À", A0 = "à", D0 = "ℵ", I0 = "ℵ", k0 = "Α", C0 = "α", j0 = "Ā", L0 = "ā", q0 = "⨿", F0 = "&", M0 = "&", U0 = "⩕", V0 = "⩓", z0 = "∧", B0 = "⩜", G0 = "⩘", H0 = "⩚", X0 = "∠", K0 = "⦤", W0 = "∠", J0 = "⦨", Y0 = "⦩", Q0 = "⦪", Z0 = "⦫", ex = "⦬", tx = "⦭", nx = "⦮", rx = "⦯", ox = "∡", sx = "∟", ix = "⊾", ax = "⦝", cx = "∢", lx = "Å", ux = "⍼", px = "Ą", dx = "ą", fx = "𝔸", mx = "𝕒", hx = "⩯", yx = "≈", gx = "⩰", vx = "≊", bx = "≋", wx = "'", xx = "⁡", _x = "≈", $x = "≊", Ex = "Å", Sx = "å", Tx = "𝒜", Ox = "𝒶", Px = "≔", Nx = "*", Rx = "≈", Ax = "≍", Dx = "Ã", Ix = "ã", kx = "Ä", Cx = "ä", jx = "∳", Lx = "⨑", qx = "≌", Fx = "϶", Mx = "‵", Ux = "∽", Vx = "⋍", zx = "∖", Bx = "⫧", Gx = "⊽", Hx = "⌅", Xx = "⌆", Kx = "⌅", Wx = "⎵", Jx = "⎶", Yx = "≌", Qx = "Б", Zx = "б", e_ = "„", t_ = "∵", n_ = "∵", r_ = "∵", o_ = "⦰", s_ = "϶", i_ = "ℬ", a_ = "ℬ", c_ = "Β", l_ = "β", u_ = "ℶ", p_ = "≬", d_ = "𝔅", f_ = "𝔟", m_ = "⋂", h_ = "◯", y_ = "⋃", g_ = "⨀", v_ = "⨁", b_ = "⨂", w_ = "⨆", x_ = "★", __ = "▽", $_ = "△", E_ = "⨄", S_ = "⋁", T_ = "⋀", O_ = "⤍", P_ = "⧫", N_ = "▪", R_ = "▴", A_ = "▾", D_ = "◂", I_ = "▸", k_ = "␣", C_ = "▒", j_ = "░", L_ = "▓", q_ = "█", F_ = "=⃥", M_ = "≡⃥", U_ = "⫭", V_ = "⌐", z_ = "𝔹", B_ = "𝕓", G_ = "⊥", H_ = "⊥", X_ = "⋈", K_ = "⧉", W_ = "┐", J_ = "╕", Y_ = "╖", Q_ = "╗", Z_ = "┌", e$ = "╒", t$ = "╓", n$ = "╔", r$ = "─", o$ = "═", s$ = "┬", i$ = "╤", a$ = "╥", c$ = "╦", l$ = "┴", u$ = "╧", p$ = "╨", d$ = "╩", f$ = "⊟", m$ = "⊞", h$ = "⊠", y$ = "┘", g$ = "╛", v$ = "╜", b$ = "╝", w$ = "└", x$ = "╘", _$ = "╙", $$ = "╚", E$ = "│", S$ = "║", T$ = "┼", O$ = "╪", P$ = "╫", N$ = "╬", R$ = "┤", A$ = "╡", D$ = "╢", I$ = "╣", k$ = "├", C$ = "╞", j$ = "╟", L$ = "╠", q$ = "‵", F$ = "˘", M$ = "˘", U$ = "¦", V$ = "𝒷", z$ = "ℬ", B$ = "⁏", G$ = "∽", H$ = "⋍", X$ = "⧅", K$ = "\\", W$ = "⟈", J$ = "•", Y$ = "•", Q$ = "≎", Z$ = "⪮", eE = "≏", tE = "≎", nE = "≏", rE = "Ć", oE = "ć", sE = "⩄", iE = "⩉", aE = "⩋", cE = "∩", lE = "⋒", uE = "⩇", pE = "⩀", dE = "ⅅ", fE = "∩︀", mE = "⁁", hE = "ˇ", yE = "ℭ", gE = "⩍", vE = "Č", bE = "č", wE = "Ç", xE = "ç", _E = "Ĉ", $E = "ĉ", EE = "∰", SE = "⩌", TE = "⩐", OE = "Ċ", PE = "ċ", NE = "¸", RE = "¸", AE = "⦲", DE = "¢", IE = "·", kE = "·", CE = "𝔠", jE = "ℭ", LE = "Ч", qE = "ч", FE = "✓", ME = "✓", UE = "Χ", VE = "χ", zE = "ˆ", BE = "≗", GE = "↺", HE = "↻", XE = "⊛", KE = "⊚", WE = "⊝", JE = "⊙", YE = "®", QE = "Ⓢ", ZE = "⊖", eS = "⊕", tS = "⊗", nS = "○", rS = "⧃", oS = "≗", sS = "⨐", iS = "⫯", aS = "⧂", cS = "∲", lS = "”", uS = "’", pS = "♣", dS = "♣", fS = ":", mS = "∷", hS = "⩴", yS = "≔", gS = "≔", vS = ",", bS = "@", wS = "∁", xS = "∘", _S = "∁", $S = "ℂ", ES = "≅", SS = "⩭", TS = "≡", OS = "∮", PS = "∯", NS = "∮", RS = "𝕔", AS = "ℂ", DS = "∐", IS = "∐", kS = "©", CS = "©", jS = "℗", LS = "∳", qS = "↵", FS = "✗", MS = "⨯", US = "𝒞", VS = "𝒸", zS = "⫏", BS = "⫑", GS = "⫐", HS = "⫒", XS = "⋯", KS = "⤸", WS = "⤵", JS = "⋞", YS = "⋟", QS = "↶", ZS = "⤽", eT = "⩈", tT = "⩆", nT = "≍", rT = "∪", oT = "⋓", sT = "⩊", iT = "⊍", aT = "⩅", cT = "∪︀", lT = "↷", uT = "⤼", pT = "⋞", dT = "⋟", fT = "⋎", mT = "⋏", hT = "¤", yT = "↶", gT = "↷", vT = "⋎", bT = "⋏", wT = "∲", xT = "∱", _T = "⌭", $T = "†", ET = "‡", ST = "ℸ", TT = "↓", OT = "↡", PT = "⇓", NT = "‐", RT = "⫤", AT = "⊣", DT = "⤏", IT = "˝", kT = "Ď", CT = "ď", jT = "Д", LT = "д", qT = "‡", FT = "⇊", MT = "ⅅ", UT = "ⅆ", VT = "⤑", zT = "⩷", BT = "°", GT = "∇", HT = "Δ", XT = "δ", KT = "⦱", WT = "⥿", JT = "𝔇", YT = "𝔡", QT = "⥥", ZT = "⇃", e1 = "⇂", t1 = "´", n1 = "˙", r1 = "˝", o1 = "`", s1 = "˜", i1 = "⋄", a1 = "⋄", c1 = "⋄", l1 = "♦", u1 = "♦", p1 = "¨", d1 = "ⅆ", f1 = "ϝ", m1 = "⋲", h1 = "÷", y1 = "÷", g1 = "⋇", v1 = "⋇", b1 = "Ђ", w1 = "ђ", x1 = "⌞", _1 = "⌍", $1 = "$", E1 = "𝔻", S1 = "𝕕", T1 = "¨", O1 = "˙", P1 = "⃜", N1 = "≐", R1 = "≑", A1 = "≐", D1 = "∸", I1 = "∔", k1 = "⊡", C1 = "⌆", j1 = "∯", L1 = "¨", q1 = "⇓", F1 = "⇐", M1 = "⇔", U1 = "⫤", V1 = "⟸", z1 = "⟺", B1 = "⟹", G1 = "⇒", H1 = "⊨", X1 = "⇑", K1 = "⇕", W1 = "∥", J1 = "⤓", Y1 = "↓", Q1 = "↓", Z1 = "⇓", eO = "⇵", tO = "̑", nO = "⇊", rO = "⇃", oO = "⇂", sO = "⥐", iO = "⥞", aO = "⥖", cO = "↽", lO = "⥟", uO = "⥗", pO = "⇁", dO = "↧", fO = "⊤", mO = "⤐", hO = "⌟", yO = "⌌", gO = "𝒟", vO = "𝒹", bO = "Ѕ", wO = "ѕ", xO = "⧶", _O = "Đ", $O = "đ", EO = "⋱", SO = "▿", TO = "▾", OO = "⇵", PO = "⥯", NO = "⦦", RO = "Џ", AO = "џ", DO = "⟿", IO = "É", kO = "é", CO = "⩮", jO = "Ě", LO = "ě", qO = "Ê", FO = "ê", MO = "≖", UO = "≕", VO = "Э", zO = "э", BO = "⩷", GO = "Ė", HO = "ė", XO = "≑", KO = "ⅇ", WO = "≒", JO = "𝔈", YO = "𝔢", QO = "⪚", ZO = "È", eP = "è", tP = "⪖", nP = "⪘", rP = "⪙", oP = "∈", sP = "⏧", iP = "ℓ", aP = "⪕", cP = "⪗", lP = "Ē", uP = "ē", pP = "∅", dP = "∅", fP = "◻", mP = "∅", hP = "▫", yP = " ", gP = " ", vP = " ", bP = "Ŋ", wP = "ŋ", xP = " ", _P = "Ę", $P = "ę", EP = "𝔼", SP = "𝕖", TP = "⋕", OP = "⧣", PP = "⩱", NP = "ε", RP = "Ε", AP = "ε", DP = "ϵ", IP = "≖", kP = "≕", CP = "≂", jP = "⪖", LP = "⪕", qP = "⩵", FP = "=", MP = "≂", UP = "≟", VP = "⇌", zP = "≡", BP = "⩸", GP = "⧥", HP = "⥱", XP = "≓", KP = "ℯ", WP = "ℰ", JP = "≐", YP = "⩳", QP = "≂", ZP = "Η", eN = "η", tN = "Ð", nN = "ð", rN = "Ë", oN = "ë", sN = "€", iN = "!", aN = "∃", cN = "∃", lN = "ℰ", uN = "ⅇ", pN = "ⅇ", dN = "≒", fN = "Ф", mN = "ф", hN = "♀", yN = "ﬃ", gN = "ﬀ", vN = "ﬄ", bN = "𝔉", wN = "𝔣", xN = "ﬁ", _N = "◼", $N = "▪", EN = "fj", SN = "♭", TN = "ﬂ", ON = "▱", PN = "ƒ", NN = "𝔽", RN = "𝕗", AN = "∀", DN = "∀", IN = "⋔", kN = "⫙", CN = "ℱ", jN = "⨍", LN = "½", qN = "⅓", FN = "¼", MN = "⅕", UN = "⅙", VN = "⅛", zN = "⅔", BN = "⅖", GN = "¾", HN = "⅗", XN = "⅜", KN = "⅘", WN = "⅚", JN = "⅝", YN = "⅞", QN = "⁄", ZN = "⌢", eR = "𝒻", tR = "ℱ", nR = "ǵ", rR = "Γ", oR = "γ", sR = "Ϝ", iR = "ϝ", aR = "⪆", cR = "Ğ", lR = "ğ", uR = "Ģ", pR = "Ĝ", dR = "ĝ", fR = "Г", mR = "г", hR = "Ġ", yR = "ġ", gR = "≥", vR = "≧", bR = "⪌", wR = "⋛", xR = "≥", _R = "≧", $R = "⩾", ER = "⪩", SR = "⩾", TR = "⪀", OR = "⪂", PR = "⪄", NR = "⋛︀", RR = "⪔", AR = "𝔊", DR = "𝔤", IR = "≫", kR = "⋙", CR = "⋙", jR = "ℷ", LR = "Ѓ", qR = "ѓ", FR = "⪥", MR = "≷", UR = "⪒", VR = "⪤", zR = "⪊", BR = "⪊", GR = "⪈", HR = "≩", XR = "⪈", KR = "≩", WR = "⋧", JR = "𝔾", YR = "𝕘", QR = "`", ZR = "≥", eA = "⋛", tA = "≧", nA = "⪢", rA = "≷", oA = "⩾", sA = "≳", iA = "𝒢", aA = "ℊ", cA = "≳", lA = "⪎", uA = "⪐", pA = "⪧", dA = "⩺", fA = ">", mA = ">", hA = "≫", yA = "⋗", gA = "⦕", vA = "⩼", bA = "⪆", wA = "⥸", xA = "⋗", _A = "⋛", $A = "⪌", EA = "≷", SA = "≳", TA = "≩︀", OA = "≩︀", PA = "ˇ", NA = " ", RA = "½", AA = "ℋ", DA = "Ъ", IA = "ъ", kA = "⥈", CA = "↔", jA = "⇔", LA = "↭", qA = "^", FA = "ℏ", MA = "Ĥ", UA = "ĥ", VA = "♥", zA = "♥", BA = "…", GA = "⊹", HA = "𝔥", XA = "ℌ", KA = "ℋ", WA = "⤥", JA = "⤦", YA = "⇿", QA = "∻", ZA = "↩", eD = "↪", tD = "𝕙", nD = "ℍ", rD = "―", oD = "─", sD = "𝒽", iD = "ℋ", aD = "ℏ", cD = "Ħ", lD = "ħ", uD = "≎", pD = "≏", dD = "⁃", fD = "‐", mD = "Í", hD = "í", yD = "⁣", gD = "Î", vD = "î", bD = "И", wD = "и", xD = "İ", _D = "Е", $D = "е", ED = "¡", SD = "⇔", TD = "𝔦", OD = "ℑ", PD = "Ì", ND = "ì", RD = "ⅈ", AD = "⨌", DD = "∭", ID = "⧜", kD = "℩", CD = "Ĳ", jD = "ĳ", LD = "Ī", qD = "ī", FD = "ℑ", MD = "ⅈ", UD = "ℐ", VD = "ℑ", zD = "ı", BD = "ℑ", GD = "⊷", HD = "Ƶ", XD = "⇒", KD = "℅", WD = "∞", JD = "⧝", YD = "ı", QD = "⊺", ZD = "∫", eI = "∬", tI = "ℤ", nI = "∫", rI = "⊺", oI = "⋂", sI = "⨗", iI = "⨼", aI = "⁣", cI = "⁢", lI = "Ё", uI = "ё", pI = "Į", dI = "į", fI = "𝕀", mI = "𝕚", hI = "Ι", yI = "ι", gI = "⨼", vI = "¿", bI = "𝒾", wI = "ℐ", xI = "∈", _I = "⋵", $I = "⋹", EI = "⋴", SI = "⋳", TI = "∈", OI = "⁢", PI = "Ĩ", NI = "ĩ", RI = "І", AI = "і", DI = "Ï", II = "ï", kI = "Ĵ", CI = "ĵ", jI = "Й", LI = "й", qI = "𝔍", FI = "𝔧", MI = "ȷ", UI = "𝕁", VI = "𝕛", zI = "𝒥", BI = "𝒿", GI = "Ј", HI = "ј", XI = "Є", KI = "є", WI = "Κ", JI = "κ", YI = "ϰ", QI = "Ķ", ZI = "ķ", ek = "К", tk = "к", nk = "𝔎", rk = "𝔨", ok = "ĸ", sk = "Х", ik = "х", ak = "Ќ", ck = "ќ", lk = "𝕂", uk = "𝕜", pk = "𝒦", dk = "𝓀", fk = "⇚", mk = "Ĺ", hk = "ĺ", yk = "⦴", gk = "ℒ", vk = "Λ", bk = "λ", wk = "⟨", xk = "⟪", _k = "⦑", $k = "⟨", Ek = "⪅", Sk = "ℒ", Tk = "«", Ok = "⇤", Pk = "⤟", Nk = "←", Rk = "↞", Ak = "⇐", Dk = "⤝", Ik = "↩", kk = "↫", Ck = "⤹", jk = "⥳", Lk = "↢", qk = "⤙", Fk = "⤛", Mk = "⪫", Uk = "⪭", Vk = "⪭︀", zk = "⤌", Bk = "⤎", Gk = "❲", Hk = "{", Xk = "[", Kk = "⦋", Wk = "⦏", Jk = "⦍", Yk = "Ľ", Qk = "ľ", Zk = "Ļ", eC = "ļ", tC = "⌈", nC = "{", rC = "Л", oC = "л", sC = "⤶", iC = "“", aC = "„", cC = "⥧", lC = "⥋", uC = "↲", pC = "≤", dC = "≦", fC = "⟨", mC = "⇤", hC = "←", yC = "←", gC = "⇐", vC = "⇆", bC = "↢", wC = "⌈", xC = "⟦", _C = "⥡", $C = "⥙", EC = "⇃", SC = "⌊", TC = "↽", OC = "↼", PC = "⇇", NC = "↔", RC = "↔", AC = "⇔", DC = "⇆", IC = "⇋", kC = "↭", CC = "⥎", jC = "↤", LC = "⊣", qC = "⥚", FC = "⋋", MC = "⧏", UC = "⊲", VC = "⊴", zC = "⥑", BC = "⥠", GC = "⥘", HC = "↿", XC = "⥒", KC = "↼", WC = "⪋", JC = "⋚", YC = "≤", QC = "≦", ZC = "⩽", ej = "⪨", tj = "⩽", nj = "⩿", rj = "⪁", oj = "⪃", sj = "⋚︀", ij = "⪓", aj = "⪅", cj = "⋖", lj = "⋚", uj = "⪋", pj = "⋚", dj = "≦", fj = "≶", mj = "≶", hj = "⪡", yj = "≲", gj = "⩽", vj = "≲", bj = "⥼", wj = "⌊", xj = "𝔏", _j = "𝔩", $j = "≶", Ej = "⪑", Sj = "⥢", Tj = "↽", Oj = "↼", Pj = "⥪", Nj = "▄", Rj = "Љ", Aj = "љ", Dj = "⇇", Ij = "≪", kj = "⋘", Cj = "⌞", jj = "⇚", Lj = "⥫", qj = "◺", Fj = "Ŀ", Mj = "ŀ", Uj = "⎰", Vj = "⎰", zj = "⪉", Bj = "⪉", Gj = "⪇", Hj = "≨", Xj = "⪇", Kj = "≨", Wj = "⋦", Jj = "⟬", Yj = "⇽", Qj = "⟦", Zj = "⟵", eL = "⟵", tL = "⟸", nL = "⟷", rL = "⟷", oL = "⟺", sL = "⟼", iL = "⟶", aL = "⟶", cL = "⟹", lL = "↫", uL = "↬", pL = "⦅", dL = "𝕃", fL = "𝕝", mL = "⨭", hL = "⨴", yL = "∗", gL = "_", vL = "↙", bL = "↘", wL = "◊", xL = "◊", _L = "⧫", $L = "(", EL = "⦓", SL = "⇆", TL = "⌟", OL = "⇋", PL = "⥭", NL = "‎", RL = "⊿", AL = "‹", DL = "𝓁", IL = "ℒ", kL = "↰", CL = "↰", jL = "≲", LL = "⪍", qL = "⪏", FL = "[", ML = "‘", UL = "‚", VL = "Ł", zL = "ł", BL = "⪦", GL = "⩹", HL = "<", XL = "<", KL = "≪", WL = "⋖", JL = "⋋", YL = "⋉", QL = "⥶", ZL = "⩻", eq = "◃", tq = "⊴", nq = "◂", rq = "⦖", oq = "⥊", sq = "⥦", iq = "≨︀", aq = "≨︀", cq = "¯", lq = "♂", uq = "✠", pq = "✠", dq = "↦", fq = "↦", mq = "↧", hq = "↤", yq = "↥", gq = "▮", vq = "⨩", bq = "М", wq = "м", xq = "—", _q = "∺", $q = "∡", Eq = " ", Sq = "ℳ", Tq = "𝔐", Oq = "𝔪", Pq = "℧", Nq = "µ", Rq = "*", Aq = "⫰", Dq = "∣", Iq = "·", kq = "⊟", Cq = "−", jq = "∸", Lq = "⨪", qq = "∓", Fq = "⫛", Mq = "…", Uq = "∓", Vq = "⊧", zq = "𝕄", Bq = "𝕞", Gq = "∓", Hq = "𝓂", Xq = "ℳ", Kq = "∾", Wq = "Μ", Jq = "μ", Yq = "⊸", Qq = "⊸", Zq = "∇", eF = "Ń", tF = "ń", nF = "∠⃒", rF = "≉", oF = "⩰̸", sF = "≋̸", iF = "ŉ", aF = "≉", cF = "♮", lF = "ℕ", uF = "♮", pF = " ", dF = "≎̸", fF = "≏̸", mF = "⩃", hF = "Ň", yF = "ň", gF = "Ņ", vF = "ņ", bF = "≇", wF = "⩭̸", xF = "⩂", _F = "Н", $F = "н", EF = "–", SF = "⤤", TF = "↗", OF = "⇗", PF = "↗", NF = "≠", RF = "≐̸", AF = "​", DF = "​", IF = "​", kF = "​", CF = "≢", jF = "⤨", LF = "≂̸", qF = "≫", FF = "≪", MF = `
`, UF = "∄", VF = "∄", zF = "𝔑", BF = "𝔫", GF = "≧̸", HF = "≱", XF = "≱", KF = "≧̸", WF = "⩾̸", JF = "⩾̸", YF = "⋙̸", QF = "≵", ZF = "≫⃒", eM = "≯", tM = "≯", nM = "≫̸", rM = "↮", oM = "⇎", sM = "⫲", iM = "∋", aM = "⋼", cM = "⋺", lM = "∋", uM = "Њ", pM = "њ", dM = "↚", fM = "⇍", mM = "‥", hM = "≦̸", yM = "≰", gM = "↚", vM = "⇍", bM = "↮", wM = "⇎", xM = "≰", _M = "≦̸", $M = "⩽̸", EM = "⩽̸", SM = "≮", TM = "⋘̸", OM = "≴", PM = "≪⃒", NM = "≮", RM = "⋪", AM = "⋬", DM = "≪̸", IM = "∤", kM = "⁠", CM = " ", jM = "𝕟", LM = "ℕ", qM = "⫬", FM = "¬", MM = "≢", UM = "≭", VM = "∦", zM = "∉", BM = "≠", GM = "≂̸", HM = "∄", XM = "≯", KM = "≱", WM = "≧̸", JM = "≫̸", YM = "≹", QM = "⩾̸", ZM = "≵", e2 = "≎̸", t2 = "≏̸", n2 = "∉", r2 = "⋵̸", o2 = "⋹̸", s2 = "∉", i2 = "⋷", a2 = "⋶", c2 = "⧏̸", l2 = "⋪", u2 = "⋬", p2 = "≮", d2 = "≰", f2 = "≸", m2 = "≪̸", h2 = "⩽̸", y2 = "≴", g2 = "⪢̸", v2 = "⪡̸", b2 = "∌", w2 = "∌", x2 = "⋾", _2 = "⋽", $2 = "⊀", E2 = "⪯̸", S2 = "⋠", T2 = "∌", O2 = "⧐̸", P2 = "⋫", N2 = "⋭", R2 = "⊏̸", A2 = "⋢", D2 = "⊐̸", I2 = "⋣", k2 = "⊂⃒", C2 = "⊈", j2 = "⊁", L2 = "⪰̸", q2 = "⋡", F2 = "≿̸", M2 = "⊃⃒", U2 = "⊉", V2 = "≁", z2 = "≄", B2 = "≇", G2 = "≉", H2 = "∤", X2 = "∦", K2 = "∦", W2 = "⫽⃥", J2 = "∂̸", Y2 = "⨔", Q2 = "⊀", Z2 = "⋠", eU = "⊀", tU = "⪯̸", nU = "⪯̸", rU = "⤳̸", oU = "↛", sU = "⇏", iU = "↝̸", aU = "↛", cU = "⇏", lU = "⋫", uU = "⋭", pU = "⊁", dU = "⋡", fU = "⪰̸", mU = "𝒩", hU = "𝓃", yU = "∤", gU = "∦", vU = "≁", bU = "≄", wU = "≄", xU = "∤", _U = "∦", $U = "⋢", EU = "⋣", SU = "⊄", TU = "⫅̸", OU = "⊈", PU = "⊂⃒", NU = "⊈", RU = "⫅̸", AU = "⊁", DU = "⪰̸", IU = "⊅", kU = "⫆̸", CU = "⊉", jU = "⊃⃒", LU = "⊉", qU = "⫆̸", FU = "≹", MU = "Ñ", UU = "ñ", VU = "≸", zU = "⋪", BU = "⋬", GU = "⋫", HU = "⋭", XU = "Ν", KU = "ν", WU = "#", JU = "№", YU = " ", QU = "≍⃒", ZU = "⊬", e3 = "⊭", t3 = "⊮", n3 = "⊯", r3 = "≥⃒", o3 = ">⃒", s3 = "⤄", i3 = "⧞", a3 = "⤂", c3 = "≤⃒", l3 = "<⃒", u3 = "⊴⃒", p3 = "⤃", d3 = "⊵⃒", f3 = "∼⃒", m3 = "⤣", h3 = "↖", y3 = "⇖", g3 = "↖", v3 = "⤧", b3 = "Ó", w3 = "ó", x3 = "⊛", _3 = "Ô", $3 = "ô", E3 = "⊚", S3 = "О", T3 = "о", O3 = "⊝", P3 = "Ő", N3 = "ő", R3 = "⨸", A3 = "⊙", D3 = "⦼", I3 = "Œ", k3 = "œ", C3 = "⦿", j3 = "𝔒", L3 = "𝔬", q3 = "˛", F3 = "Ò", M3 = "ò", U3 = "⧁", V3 = "⦵", z3 = "Ω", B3 = "∮", G3 = "↺", H3 = "⦾", X3 = "⦻", K3 = "‾", W3 = "⧀", J3 = "Ō", Y3 = "ō", Q3 = "Ω", Z3 = "ω", eV = "Ο", tV = "ο", nV = "⦶", rV = "⊖", oV = "𝕆", sV = "𝕠", iV = "⦷", aV = "“", cV = "‘", lV = "⦹", uV = "⊕", pV = "↻", dV = "⩔", fV = "∨", mV = "⩝", hV = "ℴ", yV = "ℴ", gV = "ª", vV = "º", bV = "⊶", wV = "⩖", xV = "⩗", _V = "⩛", $V = "Ⓢ", EV = "𝒪", SV = "ℴ", TV = "Ø", OV = "ø", PV = "⊘", NV = "Õ", RV = "õ", AV = "⨶", DV = "⨷", IV = "⊗", kV = "Ö", CV = "ö", jV = "⌽", LV = "‾", qV = "⏞", FV = "⎴", MV = "⏜", UV = "¶", VV = "∥", zV = "∥", BV = "⫳", GV = "⫽", HV = "∂", XV = "∂", KV = "П", WV = "п", JV = "%", YV = ".", QV = "‰", ZV = "⊥", ez = "‱", tz = "𝔓", nz = "𝔭", rz = "Φ", oz = "φ", sz = "ϕ", iz = "ℳ", az = "☎", cz = "Π", lz = "π", uz = "⋔", pz = "ϖ", dz = "ℏ", fz = "ℎ", mz = "ℏ", hz = "⨣", yz = "⊞", gz = "⨢", vz = "+", bz = "∔", wz = "⨥", xz = "⩲", _z = "±", $z = "±", Ez = "⨦", Sz = "⨧", Tz = "±", Oz = "ℌ", Pz = "⨕", Nz = "𝕡", Rz = "ℙ", Az = "£", Dz = "⪷", Iz = "⪻", kz = "≺", Cz = "≼", jz = "⪷", Lz = "≺", qz = "≼", Fz = "≺", Mz = "⪯", Uz = "≼", Vz = "≾", zz = "⪯", Bz = "⪹", Gz = "⪵", Hz = "⋨", Xz = "⪯", Kz = "⪳", Wz = "≾", Jz = "′", Yz = "″", Qz = "ℙ", Zz = "⪹", eB = "⪵", tB = "⋨", nB = "∏", rB = "∏", oB = "⌮", sB = "⌒", iB = "⌓", aB = "∝", cB = "∝", lB = "∷", uB = "∝", pB = "≾", dB = "⊰", fB = "𝒫", mB = "𝓅", hB = "Ψ", yB = "ψ", gB = " ", vB = "𝔔", bB = "𝔮", wB = "⨌", xB = "𝕢", _B = "ℚ", $B = "⁗", EB = "𝒬", SB = "𝓆", TB = "ℍ", OB = "⨖", PB = "?", NB = "≟", RB = '"', AB = '"', DB = "⇛", IB = "∽̱", kB = "Ŕ", CB = "ŕ", jB = "√", LB = "⦳", qB = "⟩", FB = "⟫", MB = "⦒", UB = "⦥", VB = "⟩", zB = "»", BB = "⥵", GB = "⇥", HB = "⤠", XB = "⤳", KB = "→", WB = "↠", JB = "⇒", YB = "⤞", QB = "↪", ZB = "↬", e4 = "⥅", t4 = "⥴", n4 = "⤖", r4 = "↣", o4 = "↝", s4 = "⤚", i4 = "⤜", a4 = "∶", c4 = "ℚ", l4 = "⤍", u4 = "⤏", p4 = "⤐", d4 = "❳", f4 = "}", m4 = "]", h4 = "⦌", y4 = "⦎", g4 = "⦐", v4 = "Ř", b4 = "ř", w4 = "Ŗ", x4 = "ŗ", _4 = "⌉", $4 = "}", E4 = "Р", S4 = "р", T4 = "⤷", O4 = "⥩", P4 = "”", N4 = "”", R4 = "↳", A4 = "ℜ", D4 = "ℛ", I4 = "ℜ", k4 = "ℝ", C4 = "ℜ", j4 = "▭", L4 = "®", q4 = "®", F4 = "∋", M4 = "⇋", U4 = "⥯", V4 = "⥽", z4 = "⌋", B4 = "𝔯", G4 = "ℜ", H4 = "⥤", X4 = "⇁", K4 = "⇀", W4 = "⥬", J4 = "Ρ", Y4 = "ρ", Q4 = "ϱ", Z4 = "⟩", e9 = "⇥", t9 = "→", n9 = "→", r9 = "⇒", o9 = "⇄", s9 = "↣", i9 = "⌉", a9 = "⟧", c9 = "⥝", l9 = "⥕", u9 = "⇂", p9 = "⌋", d9 = "⇁", f9 = "⇀", m9 = "⇄", h9 = "⇌", y9 = "⇉", g9 = "↝", v9 = "↦", b9 = "⊢", w9 = "⥛", x9 = "⋌", _9 = "⧐", $9 = "⊳", E9 = "⊵", S9 = "⥏", T9 = "⥜", O9 = "⥔", P9 = "↾", N9 = "⥓", R9 = "⇀", A9 = "˚", D9 = "≓", I9 = "⇄", k9 = "⇌", C9 = "‏", j9 = "⎱", L9 = "⎱", q9 = "⫮", F9 = "⟭", M9 = "⇾", U9 = "⟧", V9 = "⦆", z9 = "𝕣", B9 = "ℝ", G9 = "⨮", H9 = "⨵", X9 = "⥰", K9 = ")", W9 = "⦔", J9 = "⨒", Y9 = "⇉", Q9 = "⇛", Z9 = "›", e8 = "𝓇", t8 = "ℛ", n8 = "↱", r8 = "↱", o8 = "]", s8 = "’", i8 = "’", a8 = "⋌", c8 = "⋊", l8 = "▹", u8 = "⊵", p8 = "▸", d8 = "⧎", f8 = "⧴", m8 = "⥨", h8 = "℞", y8 = "Ś", g8 = "ś", v8 = "‚", b8 = "⪸", w8 = "Š", x8 = "š", _8 = "⪼", $8 = "≻", E8 = "≽", S8 = "⪰", T8 = "⪴", O8 = "Ş", P8 = "ş", N8 = "Ŝ", R8 = "ŝ", A8 = "⪺", D8 = "⪶", I8 = "⋩", k8 = "⨓", C8 = "≿", j8 = "С", L8 = "с", q8 = "⊡", F8 = "⋅", M8 = "⩦", U8 = "⤥", V8 = "↘", z8 = "⇘", B8 = "↘", G8 = "§", H8 = ";", X8 = "⤩", K8 = "∖", W8 = "∖", J8 = "✶", Y8 = "𝔖", Q8 = "𝔰", Z8 = "⌢", eG = "♯", tG = "Щ", nG = "щ", rG = "Ш", oG = "ш", sG = "↓", iG = "←", aG = "∣", cG = "∥", lG = "→", uG = "↑", pG = "­", dG = "Σ", fG = "σ", mG = "ς", hG = "ς", yG = "∼", gG = "⩪", vG = "≃", bG = "≃", wG = "⪞", xG = "⪠", _G = "⪝", $G = "⪟", EG = "≆", SG = "⨤", TG = "⥲", OG = "←", PG = "∘", NG = "∖", RG = "⨳", AG = "⧤", DG = "∣", IG = "⌣", kG = "⪪", CG = "⪬", jG = "⪬︀", LG = "Ь", qG = "ь", FG = "⌿", MG = "⧄", UG = "/", VG = "𝕊", zG = "𝕤", BG = "♠", GG = "♠", HG = "∥", XG = "⊓", KG = "⊓︀", WG = "⊔", JG = "⊔︀", YG = "√", QG = "⊏", ZG = "⊑", eH = "⊏", tH = "⊑", nH = "⊐", rH = "⊒", oH = "⊐", sH = "⊒", iH = "□", aH = "□", cH = "⊓", lH = "⊏", uH = "⊑", pH = "⊐", dH = "⊒", fH = "⊔", mH = "▪", hH = "□", yH = "▪", gH = "→", vH = "𝒮", bH = "𝓈", wH = "∖", xH = "⌣", _H = "⋆", $H = "⋆", EH = "☆", SH = "★", TH = "ϵ", OH = "ϕ", PH = "¯", NH = "⊂", RH = "⋐", AH = "⪽", DH = "⫅", IH = "⊆", kH = "⫃", CH = "⫁", jH = "⫋", LH = "⊊", qH = "⪿", FH = "⥹", MH = "⊂", UH = "⋐", VH = "⊆", zH = "⫅", BH = "⊆", GH = "⊊", HH = "⫋", XH = "⫇", KH = "⫕", WH = "⫓", JH = "⪸", YH = "≻", QH = "≽", ZH = "≻", e6 = "⪰", t6 = "≽", n6 = "≿", r6 = "⪰", o6 = "⪺", s6 = "⪶", i6 = "⋩", a6 = "≿", c6 = "∋", l6 = "∑", u6 = "∑", p6 = "♪", d6 = "¹", f6 = "²", m6 = "³", h6 = "⊃", y6 = "⋑", g6 = "⪾", v6 = "⫘", b6 = "⫆", w6 = "⊇", x6 = "⫄", _6 = "⊃", $6 = "⊇", E6 = "⟉", S6 = "⫗", T6 = "⥻", O6 = "⫂", P6 = "⫌", N6 = "⊋", R6 = "⫀", A6 = "⊃", D6 = "⋑", I6 = "⊇", k6 = "⫆", C6 = "⊋", j6 = "⫌", L6 = "⫈", q6 = "⫔", F6 = "⫖", M6 = "⤦", U6 = "↙", V6 = "⇙", z6 = "↙", B6 = "⤪", G6 = "ß", H6 = "	", X6 = "⌖", K6 = "Τ", W6 = "τ", J6 = "⎴", Y6 = "Ť", Q6 = "ť", Z6 = "Ţ", e5 = "ţ", t5 = "Т", n5 = "т", r5 = "⃛", o5 = "⌕", s5 = "𝔗", i5 = "𝔱", a5 = "∴", c5 = "∴", l5 = "∴", u5 = "Θ", p5 = "θ", d5 = "ϑ", f5 = "ϑ", m5 = "≈", h5 = "∼", y5 = "  ", g5 = " ", v5 = " ", b5 = "≈", w5 = "∼", x5 = "Þ", _5 = "þ", $5 = "˜", E5 = "∼", S5 = "≃", T5 = "≅", O5 = "≈", P5 = "⨱", N5 = "⊠", R5 = "×", A5 = "⨰", D5 = "∭", I5 = "⤨", k5 = "⌶", C5 = "⫱", j5 = "⊤", L5 = "𝕋", q5 = "𝕥", F5 = "⫚", M5 = "⤩", U5 = "‴", V5 = "™", z5 = "™", B5 = "▵", G5 = "▿", H5 = "◃", X5 = "⊴", K5 = "≜", W5 = "▹", J5 = "⊵", Y5 = "◬", Q5 = "≜", Z5 = "⨺", eX = "⃛", tX = "⨹", nX = "⧍", rX = "⨻", oX = "⏢", sX = "𝒯", iX = "𝓉", aX = "Ц", cX = "ц", lX = "Ћ", uX = "ћ", pX = "Ŧ", dX = "ŧ", fX = "≬", mX = "↞", hX = "↠", yX = "Ú", gX = "ú", vX = "↑", bX = "↟", wX = "⇑", xX = "⥉", _X = "Ў", $X = "ў", EX = "Ŭ", SX = "ŭ", TX = "Û", OX = "û", PX = "У", NX = "у", RX = "⇅", AX = "Ű", DX = "ű", IX = "⥮", kX = "⥾", CX = "𝔘", jX = "𝔲", LX = "Ù", qX = "ù", FX = "⥣", MX = "↿", UX = "↾", VX = "▀", zX = "⌜", BX = "⌜", GX = "⌏", HX = "◸", XX = "Ū", KX = "ū", WX = "¨", JX = "_", YX = "⏟", QX = "⎵", ZX = "⏝", eK = "⋃", tK = "⊎", nK = "Ų", rK = "ų", oK = "𝕌", sK = "𝕦", iK = "⤒", aK = "↑", cK = "↑", lK = "⇑", uK = "⇅", pK = "↕", dK = "↕", fK = "⇕", mK = "⥮", hK = "↿", yK = "↾", gK = "⊎", vK = "↖", bK = "↗", wK = "υ", xK = "ϒ", _K = "ϒ", $K = "Υ", EK = "υ", SK = "↥", TK = "⊥", OK = "⇈", PK = "⌝", NK = "⌝", RK = "⌎", AK = "Ů", DK = "ů", IK = "◹", kK = "𝒰", CK = "𝓊", jK = "⋰", LK = "Ũ", qK = "ũ", FK = "▵", MK = "▴", UK = "⇈", VK = "Ü", zK = "ü", BK = "⦧", GK = "⦜", HK = "ϵ", XK = "ϰ", KK = "∅", WK = "ϕ", JK = "ϖ", YK = "∝", QK = "↕", ZK = "⇕", e7 = "ϱ", t7 = "ς", n7 = "⊊︀", r7 = "⫋︀", o7 = "⊋︀", s7 = "⫌︀", i7 = "ϑ", a7 = "⊲", c7 = "⊳", l7 = "⫨", u7 = "⫫", p7 = "⫩", d7 = "В", f7 = "в", m7 = "⊢", h7 = "⊨", y7 = "⊩", g7 = "⊫", v7 = "⫦", b7 = "⊻", w7 = "∨", x7 = "⋁", _7 = "≚", $7 = "⋮", E7 = "|", S7 = "‖", T7 = "|", O7 = "‖", P7 = "∣", N7 = "|", R7 = "❘", A7 = "≀", D7 = " ", I7 = "𝔙", k7 = "𝔳", C7 = "⊲", j7 = "⊂⃒", L7 = "⊃⃒", q7 = "𝕍", F7 = "𝕧", M7 = "∝", U7 = "⊳", V7 = "𝒱", z7 = "𝓋", B7 = "⫋︀", G7 = "⊊︀", H7 = "⫌︀", X7 = "⊋︀", K7 = "⊪", W7 = "⦚", J7 = "Ŵ", Y7 = "ŵ", Q7 = "⩟", Z7 = "∧", eW = "⋀", tW = "≙", nW = "℘", rW = "𝔚", oW = "𝔴", sW = "𝕎", iW = "𝕨", aW = "℘", cW = "≀", lW = "≀", uW = "𝒲", pW = "𝓌", dW = "⋂", fW = "◯", mW = "⋃", hW = "▽", yW = "𝔛", gW = "𝔵", vW = "⟷", bW = "⟺", wW = "Ξ", xW = "ξ", _W = "⟵", $W = "⟸", EW = "⟼", SW = "⋻", TW = "⨀", OW = "𝕏", PW = "𝕩", NW = "⨁", RW = "⨂", AW = "⟶", DW = "⟹", IW = "𝒳", kW = "𝓍", CW = "⨆", jW = "⨄", LW = "△", qW = "⋁", FW = "⋀", MW = "Ý", UW = "ý", VW = "Я", zW = "я", BW = "Ŷ", GW = "ŷ", HW = "Ы", XW = "ы", KW = "¥", WW = "𝔜", JW = "𝔶", YW = "Ї", QW = "ї", ZW = "𝕐", eJ = "𝕪", tJ = "𝒴", nJ = "𝓎", rJ = "Ю", oJ = "ю", sJ = "ÿ", iJ = "Ÿ", aJ = "Ź", cJ = "ź", lJ = "Ž", uJ = "ž", pJ = "З", dJ = "з", fJ = "Ż", mJ = "ż", hJ = "ℨ", yJ = "​", gJ = "Ζ", vJ = "ζ", bJ = "𝔷", wJ = "ℨ", xJ = "Ж", _J = "ж", $J = "⇝", EJ = "𝕫", SJ = "ℤ", TJ = "𝒵", OJ = "𝓏", PJ = "‍", NJ = "‌", Iy = {
  Aacute: f0,
  aacute: m0,
  Abreve: h0,
  abreve: y0,
  ac: g0,
  acd: v0,
  acE: b0,
  Acirc: w0,
  acirc: x0,
  acute: _0,
  Acy: $0,
  acy: E0,
  AElig: S0,
  aelig: T0,
  af: O0,
  Afr: P0,
  afr: N0,
  Agrave: R0,
  agrave: A0,
  alefsym: D0,
  aleph: I0,
  Alpha: k0,
  alpha: C0,
  Amacr: j0,
  amacr: L0,
  amalg: q0,
  amp: F0,
  AMP: M0,
  andand: U0,
  And: V0,
  and: z0,
  andd: B0,
  andslope: G0,
  andv: H0,
  ang: X0,
  ange: K0,
  angle: W0,
  angmsdaa: J0,
  angmsdab: Y0,
  angmsdac: Q0,
  angmsdad: Z0,
  angmsdae: ex,
  angmsdaf: tx,
  angmsdag: nx,
  angmsdah: rx,
  angmsd: ox,
  angrt: sx,
  angrtvb: ix,
  angrtvbd: ax,
  angsph: cx,
  angst: lx,
  angzarr: ux,
  Aogon: px,
  aogon: dx,
  Aopf: fx,
  aopf: mx,
  apacir: hx,
  ap: yx,
  apE: gx,
  ape: vx,
  apid: bx,
  apos: wx,
  ApplyFunction: xx,
  approx: _x,
  approxeq: $x,
  Aring: Ex,
  aring: Sx,
  Ascr: Tx,
  ascr: Ox,
  Assign: Px,
  ast: Nx,
  asymp: Rx,
  asympeq: Ax,
  Atilde: Dx,
  atilde: Ix,
  Auml: kx,
  auml: Cx,
  awconint: jx,
  awint: Lx,
  backcong: qx,
  backepsilon: Fx,
  backprime: Mx,
  backsim: Ux,
  backsimeq: Vx,
  Backslash: zx,
  Barv: Bx,
  barvee: Gx,
  barwed: Hx,
  Barwed: Xx,
  barwedge: Kx,
  bbrk: Wx,
  bbrktbrk: Jx,
  bcong: Yx,
  Bcy: Qx,
  bcy: Zx,
  bdquo: e_,
  becaus: t_,
  because: n_,
  Because: r_,
  bemptyv: o_,
  bepsi: s_,
  bernou: i_,
  Bernoullis: a_,
  Beta: c_,
  beta: l_,
  beth: u_,
  between: p_,
  Bfr: d_,
  bfr: f_,
  bigcap: m_,
  bigcirc: h_,
  bigcup: y_,
  bigodot: g_,
  bigoplus: v_,
  bigotimes: b_,
  bigsqcup: w_,
  bigstar: x_,
  bigtriangledown: __,
  bigtriangleup: $_,
  biguplus: E_,
  bigvee: S_,
  bigwedge: T_,
  bkarow: O_,
  blacklozenge: P_,
  blacksquare: N_,
  blacktriangle: R_,
  blacktriangledown: A_,
  blacktriangleleft: D_,
  blacktriangleright: I_,
  blank: k_,
  blk12: C_,
  blk14: j_,
  blk34: L_,
  block: q_,
  bne: F_,
  bnequiv: M_,
  bNot: U_,
  bnot: V_,
  Bopf: z_,
  bopf: B_,
  bot: G_,
  bottom: H_,
  bowtie: X_,
  boxbox: K_,
  boxdl: W_,
  boxdL: J_,
  boxDl: Y_,
  boxDL: Q_,
  boxdr: Z_,
  boxdR: e$,
  boxDr: t$,
  boxDR: n$,
  boxh: r$,
  boxH: o$,
  boxhd: s$,
  boxHd: i$,
  boxhD: a$,
  boxHD: c$,
  boxhu: l$,
  boxHu: u$,
  boxhU: p$,
  boxHU: d$,
  boxminus: f$,
  boxplus: m$,
  boxtimes: h$,
  boxul: y$,
  boxuL: g$,
  boxUl: v$,
  boxUL: b$,
  boxur: w$,
  boxuR: x$,
  boxUr: _$,
  boxUR: $$,
  boxv: E$,
  boxV: S$,
  boxvh: T$,
  boxvH: O$,
  boxVh: P$,
  boxVH: N$,
  boxvl: R$,
  boxvL: A$,
  boxVl: D$,
  boxVL: I$,
  boxvr: k$,
  boxvR: C$,
  boxVr: j$,
  boxVR: L$,
  bprime: q$,
  breve: F$,
  Breve: M$,
  brvbar: U$,
  bscr: V$,
  Bscr: z$,
  bsemi: B$,
  bsim: G$,
  bsime: H$,
  bsolb: X$,
  bsol: K$,
  bsolhsub: W$,
  bull: J$,
  bullet: Y$,
  bump: Q$,
  bumpE: Z$,
  bumpe: eE,
  Bumpeq: tE,
  bumpeq: nE,
  Cacute: rE,
  cacute: oE,
  capand: sE,
  capbrcup: iE,
  capcap: aE,
  cap: cE,
  Cap: lE,
  capcup: uE,
  capdot: pE,
  CapitalDifferentialD: dE,
  caps: fE,
  caret: mE,
  caron: hE,
  Cayleys: yE,
  ccaps: gE,
  Ccaron: vE,
  ccaron: bE,
  Ccedil: wE,
  ccedil: xE,
  Ccirc: _E,
  ccirc: $E,
  Cconint: EE,
  ccups: SE,
  ccupssm: TE,
  Cdot: OE,
  cdot: PE,
  cedil: NE,
  Cedilla: RE,
  cemptyv: AE,
  cent: DE,
  centerdot: IE,
  CenterDot: kE,
  cfr: CE,
  Cfr: jE,
  CHcy: LE,
  chcy: qE,
  check: FE,
  checkmark: ME,
  Chi: UE,
  chi: VE,
  circ: zE,
  circeq: BE,
  circlearrowleft: GE,
  circlearrowright: HE,
  circledast: XE,
  circledcirc: KE,
  circleddash: WE,
  CircleDot: JE,
  circledR: YE,
  circledS: QE,
  CircleMinus: ZE,
  CirclePlus: eS,
  CircleTimes: tS,
  cir: nS,
  cirE: rS,
  cire: oS,
  cirfnint: sS,
  cirmid: iS,
  cirscir: aS,
  ClockwiseContourIntegral: cS,
  CloseCurlyDoubleQuote: lS,
  CloseCurlyQuote: uS,
  clubs: pS,
  clubsuit: dS,
  colon: fS,
  Colon: mS,
  Colone: hS,
  colone: yS,
  coloneq: gS,
  comma: vS,
  commat: bS,
  comp: wS,
  compfn: xS,
  complement: _S,
  complexes: $S,
  cong: ES,
  congdot: SS,
  Congruent: TS,
  conint: OS,
  Conint: PS,
  ContourIntegral: NS,
  copf: RS,
  Copf: AS,
  coprod: DS,
  Coproduct: IS,
  copy: kS,
  COPY: CS,
  copysr: jS,
  CounterClockwiseContourIntegral: LS,
  crarr: qS,
  cross: FS,
  Cross: MS,
  Cscr: US,
  cscr: VS,
  csub: zS,
  csube: BS,
  csup: GS,
  csupe: HS,
  ctdot: XS,
  cudarrl: KS,
  cudarrr: WS,
  cuepr: JS,
  cuesc: YS,
  cularr: QS,
  cularrp: ZS,
  cupbrcap: eT,
  cupcap: tT,
  CupCap: nT,
  cup: rT,
  Cup: oT,
  cupcup: sT,
  cupdot: iT,
  cupor: aT,
  cups: cT,
  curarr: lT,
  curarrm: uT,
  curlyeqprec: pT,
  curlyeqsucc: dT,
  curlyvee: fT,
  curlywedge: mT,
  curren: hT,
  curvearrowleft: yT,
  curvearrowright: gT,
  cuvee: vT,
  cuwed: bT,
  cwconint: wT,
  cwint: xT,
  cylcty: _T,
  dagger: $T,
  Dagger: ET,
  daleth: ST,
  darr: TT,
  Darr: OT,
  dArr: PT,
  dash: NT,
  Dashv: RT,
  dashv: AT,
  dbkarow: DT,
  dblac: IT,
  Dcaron: kT,
  dcaron: CT,
  Dcy: jT,
  dcy: LT,
  ddagger: qT,
  ddarr: FT,
  DD: MT,
  dd: UT,
  DDotrahd: VT,
  ddotseq: zT,
  deg: BT,
  Del: GT,
  Delta: HT,
  delta: XT,
  demptyv: KT,
  dfisht: WT,
  Dfr: JT,
  dfr: YT,
  dHar: QT,
  dharl: ZT,
  dharr: e1,
  DiacriticalAcute: t1,
  DiacriticalDot: n1,
  DiacriticalDoubleAcute: r1,
  DiacriticalGrave: o1,
  DiacriticalTilde: s1,
  diam: i1,
  diamond: a1,
  Diamond: c1,
  diamondsuit: l1,
  diams: u1,
  die: p1,
  DifferentialD: d1,
  digamma: f1,
  disin: m1,
  div: h1,
  divide: y1,
  divideontimes: g1,
  divonx: v1,
  DJcy: b1,
  djcy: w1,
  dlcorn: x1,
  dlcrop: _1,
  dollar: $1,
  Dopf: E1,
  dopf: S1,
  Dot: T1,
  dot: O1,
  DotDot: P1,
  doteq: N1,
  doteqdot: R1,
  DotEqual: A1,
  dotminus: D1,
  dotplus: I1,
  dotsquare: k1,
  doublebarwedge: C1,
  DoubleContourIntegral: j1,
  DoubleDot: L1,
  DoubleDownArrow: q1,
  DoubleLeftArrow: F1,
  DoubleLeftRightArrow: M1,
  DoubleLeftTee: U1,
  DoubleLongLeftArrow: V1,
  DoubleLongLeftRightArrow: z1,
  DoubleLongRightArrow: B1,
  DoubleRightArrow: G1,
  DoubleRightTee: H1,
  DoubleUpArrow: X1,
  DoubleUpDownArrow: K1,
  DoubleVerticalBar: W1,
  DownArrowBar: J1,
  downarrow: Y1,
  DownArrow: Q1,
  Downarrow: Z1,
  DownArrowUpArrow: eO,
  DownBreve: tO,
  downdownarrows: nO,
  downharpoonleft: rO,
  downharpoonright: oO,
  DownLeftRightVector: sO,
  DownLeftTeeVector: iO,
  DownLeftVectorBar: aO,
  DownLeftVector: cO,
  DownRightTeeVector: lO,
  DownRightVectorBar: uO,
  DownRightVector: pO,
  DownTeeArrow: dO,
  DownTee: fO,
  drbkarow: mO,
  drcorn: hO,
  drcrop: yO,
  Dscr: gO,
  dscr: vO,
  DScy: bO,
  dscy: wO,
  dsol: xO,
  Dstrok: _O,
  dstrok: $O,
  dtdot: EO,
  dtri: SO,
  dtrif: TO,
  duarr: OO,
  duhar: PO,
  dwangle: NO,
  DZcy: RO,
  dzcy: AO,
  dzigrarr: DO,
  Eacute: IO,
  eacute: kO,
  easter: CO,
  Ecaron: jO,
  ecaron: LO,
  Ecirc: qO,
  ecirc: FO,
  ecir: MO,
  ecolon: UO,
  Ecy: VO,
  ecy: zO,
  eDDot: BO,
  Edot: GO,
  edot: HO,
  eDot: XO,
  ee: KO,
  efDot: WO,
  Efr: JO,
  efr: YO,
  eg: QO,
  Egrave: ZO,
  egrave: eP,
  egs: tP,
  egsdot: nP,
  el: rP,
  Element: oP,
  elinters: sP,
  ell: iP,
  els: aP,
  elsdot: cP,
  Emacr: lP,
  emacr: uP,
  empty: pP,
  emptyset: dP,
  EmptySmallSquare: fP,
  emptyv: mP,
  EmptyVerySmallSquare: hP,
  emsp13: yP,
  emsp14: gP,
  emsp: vP,
  ENG: bP,
  eng: wP,
  ensp: xP,
  Eogon: _P,
  eogon: $P,
  Eopf: EP,
  eopf: SP,
  epar: TP,
  eparsl: OP,
  eplus: PP,
  epsi: NP,
  Epsilon: RP,
  epsilon: AP,
  epsiv: DP,
  eqcirc: IP,
  eqcolon: kP,
  eqsim: CP,
  eqslantgtr: jP,
  eqslantless: LP,
  Equal: qP,
  equals: FP,
  EqualTilde: MP,
  equest: UP,
  Equilibrium: VP,
  equiv: zP,
  equivDD: BP,
  eqvparsl: GP,
  erarr: HP,
  erDot: XP,
  escr: KP,
  Escr: WP,
  esdot: JP,
  Esim: YP,
  esim: QP,
  Eta: ZP,
  eta: eN,
  ETH: tN,
  eth: nN,
  Euml: rN,
  euml: oN,
  euro: sN,
  excl: iN,
  exist: aN,
  Exists: cN,
  expectation: lN,
  exponentiale: uN,
  ExponentialE: pN,
  fallingdotseq: dN,
  Fcy: fN,
  fcy: mN,
  female: hN,
  ffilig: yN,
  fflig: gN,
  ffllig: vN,
  Ffr: bN,
  ffr: wN,
  filig: xN,
  FilledSmallSquare: _N,
  FilledVerySmallSquare: $N,
  fjlig: EN,
  flat: SN,
  fllig: TN,
  fltns: ON,
  fnof: PN,
  Fopf: NN,
  fopf: RN,
  forall: AN,
  ForAll: DN,
  fork: IN,
  forkv: kN,
  Fouriertrf: CN,
  fpartint: jN,
  frac12: LN,
  frac13: qN,
  frac14: FN,
  frac15: MN,
  frac16: UN,
  frac18: VN,
  frac23: zN,
  frac25: BN,
  frac34: GN,
  frac35: HN,
  frac38: XN,
  frac45: KN,
  frac56: WN,
  frac58: JN,
  frac78: YN,
  frasl: QN,
  frown: ZN,
  fscr: eR,
  Fscr: tR,
  gacute: nR,
  Gamma: rR,
  gamma: oR,
  Gammad: sR,
  gammad: iR,
  gap: aR,
  Gbreve: cR,
  gbreve: lR,
  Gcedil: uR,
  Gcirc: pR,
  gcirc: dR,
  Gcy: fR,
  gcy: mR,
  Gdot: hR,
  gdot: yR,
  ge: gR,
  gE: vR,
  gEl: bR,
  gel: wR,
  geq: xR,
  geqq: _R,
  geqslant: $R,
  gescc: ER,
  ges: SR,
  gesdot: TR,
  gesdoto: OR,
  gesdotol: PR,
  gesl: NR,
  gesles: RR,
  Gfr: AR,
  gfr: DR,
  gg: IR,
  Gg: kR,
  ggg: CR,
  gimel: jR,
  GJcy: LR,
  gjcy: qR,
  gla: FR,
  gl: MR,
  glE: UR,
  glj: VR,
  gnap: zR,
  gnapprox: BR,
  gne: GR,
  gnE: HR,
  gneq: XR,
  gneqq: KR,
  gnsim: WR,
  Gopf: JR,
  gopf: YR,
  grave: QR,
  GreaterEqual: ZR,
  GreaterEqualLess: eA,
  GreaterFullEqual: tA,
  GreaterGreater: nA,
  GreaterLess: rA,
  GreaterSlantEqual: oA,
  GreaterTilde: sA,
  Gscr: iA,
  gscr: aA,
  gsim: cA,
  gsime: lA,
  gsiml: uA,
  gtcc: pA,
  gtcir: dA,
  gt: fA,
  GT: mA,
  Gt: hA,
  gtdot: yA,
  gtlPar: gA,
  gtquest: vA,
  gtrapprox: bA,
  gtrarr: wA,
  gtrdot: xA,
  gtreqless: _A,
  gtreqqless: $A,
  gtrless: EA,
  gtrsim: SA,
  gvertneqq: TA,
  gvnE: OA,
  Hacek: PA,
  hairsp: NA,
  half: RA,
  hamilt: AA,
  HARDcy: DA,
  hardcy: IA,
  harrcir: kA,
  harr: CA,
  hArr: jA,
  harrw: LA,
  Hat: qA,
  hbar: FA,
  Hcirc: MA,
  hcirc: UA,
  hearts: VA,
  heartsuit: zA,
  hellip: BA,
  hercon: GA,
  hfr: HA,
  Hfr: XA,
  HilbertSpace: KA,
  hksearow: WA,
  hkswarow: JA,
  hoarr: YA,
  homtht: QA,
  hookleftarrow: ZA,
  hookrightarrow: eD,
  hopf: tD,
  Hopf: nD,
  horbar: rD,
  HorizontalLine: oD,
  hscr: sD,
  Hscr: iD,
  hslash: aD,
  Hstrok: cD,
  hstrok: lD,
  HumpDownHump: uD,
  HumpEqual: pD,
  hybull: dD,
  hyphen: fD,
  Iacute: mD,
  iacute: hD,
  ic: yD,
  Icirc: gD,
  icirc: vD,
  Icy: bD,
  icy: wD,
  Idot: xD,
  IEcy: _D,
  iecy: $D,
  iexcl: ED,
  iff: SD,
  ifr: TD,
  Ifr: OD,
  Igrave: PD,
  igrave: ND,
  ii: RD,
  iiiint: AD,
  iiint: DD,
  iinfin: ID,
  iiota: kD,
  IJlig: CD,
  ijlig: jD,
  Imacr: LD,
  imacr: qD,
  image: FD,
  ImaginaryI: MD,
  imagline: UD,
  imagpart: VD,
  imath: zD,
  Im: BD,
  imof: GD,
  imped: HD,
  Implies: XD,
  incare: KD,
  in: "∈",
  infin: WD,
  infintie: JD,
  inodot: YD,
  intcal: QD,
  int: ZD,
  Int: eI,
  integers: tI,
  Integral: nI,
  intercal: rI,
  Intersection: oI,
  intlarhk: sI,
  intprod: iI,
  InvisibleComma: aI,
  InvisibleTimes: cI,
  IOcy: lI,
  iocy: uI,
  Iogon: pI,
  iogon: dI,
  Iopf: fI,
  iopf: mI,
  Iota: hI,
  iota: yI,
  iprod: gI,
  iquest: vI,
  iscr: bI,
  Iscr: wI,
  isin: xI,
  isindot: _I,
  isinE: $I,
  isins: EI,
  isinsv: SI,
  isinv: TI,
  it: OI,
  Itilde: PI,
  itilde: NI,
  Iukcy: RI,
  iukcy: AI,
  Iuml: DI,
  iuml: II,
  Jcirc: kI,
  jcirc: CI,
  Jcy: jI,
  jcy: LI,
  Jfr: qI,
  jfr: FI,
  jmath: MI,
  Jopf: UI,
  jopf: VI,
  Jscr: zI,
  jscr: BI,
  Jsercy: GI,
  jsercy: HI,
  Jukcy: XI,
  jukcy: KI,
  Kappa: WI,
  kappa: JI,
  kappav: YI,
  Kcedil: QI,
  kcedil: ZI,
  Kcy: ek,
  kcy: tk,
  Kfr: nk,
  kfr: rk,
  kgreen: ok,
  KHcy: sk,
  khcy: ik,
  KJcy: ak,
  kjcy: ck,
  Kopf: lk,
  kopf: uk,
  Kscr: pk,
  kscr: dk,
  lAarr: fk,
  Lacute: mk,
  lacute: hk,
  laemptyv: yk,
  lagran: gk,
  Lambda: vk,
  lambda: bk,
  lang: wk,
  Lang: xk,
  langd: _k,
  langle: $k,
  lap: Ek,
  Laplacetrf: Sk,
  laquo: Tk,
  larrb: Ok,
  larrbfs: Pk,
  larr: Nk,
  Larr: Rk,
  lArr: Ak,
  larrfs: Dk,
  larrhk: Ik,
  larrlp: kk,
  larrpl: Ck,
  larrsim: jk,
  larrtl: Lk,
  latail: qk,
  lAtail: Fk,
  lat: Mk,
  late: Uk,
  lates: Vk,
  lbarr: zk,
  lBarr: Bk,
  lbbrk: Gk,
  lbrace: Hk,
  lbrack: Xk,
  lbrke: Kk,
  lbrksld: Wk,
  lbrkslu: Jk,
  Lcaron: Yk,
  lcaron: Qk,
  Lcedil: Zk,
  lcedil: eC,
  lceil: tC,
  lcub: nC,
  Lcy: rC,
  lcy: oC,
  ldca: sC,
  ldquo: iC,
  ldquor: aC,
  ldrdhar: cC,
  ldrushar: lC,
  ldsh: uC,
  le: pC,
  lE: dC,
  LeftAngleBracket: fC,
  LeftArrowBar: mC,
  leftarrow: hC,
  LeftArrow: yC,
  Leftarrow: gC,
  LeftArrowRightArrow: vC,
  leftarrowtail: bC,
  LeftCeiling: wC,
  LeftDoubleBracket: xC,
  LeftDownTeeVector: _C,
  LeftDownVectorBar: $C,
  LeftDownVector: EC,
  LeftFloor: SC,
  leftharpoondown: TC,
  leftharpoonup: OC,
  leftleftarrows: PC,
  leftrightarrow: NC,
  LeftRightArrow: RC,
  Leftrightarrow: AC,
  leftrightarrows: DC,
  leftrightharpoons: IC,
  leftrightsquigarrow: kC,
  LeftRightVector: CC,
  LeftTeeArrow: jC,
  LeftTee: LC,
  LeftTeeVector: qC,
  leftthreetimes: FC,
  LeftTriangleBar: MC,
  LeftTriangle: UC,
  LeftTriangleEqual: VC,
  LeftUpDownVector: zC,
  LeftUpTeeVector: BC,
  LeftUpVectorBar: GC,
  LeftUpVector: HC,
  LeftVectorBar: XC,
  LeftVector: KC,
  lEg: WC,
  leg: JC,
  leq: YC,
  leqq: QC,
  leqslant: ZC,
  lescc: ej,
  les: tj,
  lesdot: nj,
  lesdoto: rj,
  lesdotor: oj,
  lesg: sj,
  lesges: ij,
  lessapprox: aj,
  lessdot: cj,
  lesseqgtr: lj,
  lesseqqgtr: uj,
  LessEqualGreater: pj,
  LessFullEqual: dj,
  LessGreater: fj,
  lessgtr: mj,
  LessLess: hj,
  lesssim: yj,
  LessSlantEqual: gj,
  LessTilde: vj,
  lfisht: bj,
  lfloor: wj,
  Lfr: xj,
  lfr: _j,
  lg: $j,
  lgE: Ej,
  lHar: Sj,
  lhard: Tj,
  lharu: Oj,
  lharul: Pj,
  lhblk: Nj,
  LJcy: Rj,
  ljcy: Aj,
  llarr: Dj,
  ll: Ij,
  Ll: kj,
  llcorner: Cj,
  Lleftarrow: jj,
  llhard: Lj,
  lltri: qj,
  Lmidot: Fj,
  lmidot: Mj,
  lmoustache: Uj,
  lmoust: Vj,
  lnap: zj,
  lnapprox: Bj,
  lne: Gj,
  lnE: Hj,
  lneq: Xj,
  lneqq: Kj,
  lnsim: Wj,
  loang: Jj,
  loarr: Yj,
  lobrk: Qj,
  longleftarrow: Zj,
  LongLeftArrow: eL,
  Longleftarrow: tL,
  longleftrightarrow: nL,
  LongLeftRightArrow: rL,
  Longleftrightarrow: oL,
  longmapsto: sL,
  longrightarrow: iL,
  LongRightArrow: aL,
  Longrightarrow: cL,
  looparrowleft: lL,
  looparrowright: uL,
  lopar: pL,
  Lopf: dL,
  lopf: fL,
  loplus: mL,
  lotimes: hL,
  lowast: yL,
  lowbar: gL,
  LowerLeftArrow: vL,
  LowerRightArrow: bL,
  loz: wL,
  lozenge: xL,
  lozf: _L,
  lpar: $L,
  lparlt: EL,
  lrarr: SL,
  lrcorner: TL,
  lrhar: OL,
  lrhard: PL,
  lrm: NL,
  lrtri: RL,
  lsaquo: AL,
  lscr: DL,
  Lscr: IL,
  lsh: kL,
  Lsh: CL,
  lsim: jL,
  lsime: LL,
  lsimg: qL,
  lsqb: FL,
  lsquo: ML,
  lsquor: UL,
  Lstrok: VL,
  lstrok: zL,
  ltcc: BL,
  ltcir: GL,
  lt: HL,
  LT: XL,
  Lt: KL,
  ltdot: WL,
  lthree: JL,
  ltimes: YL,
  ltlarr: QL,
  ltquest: ZL,
  ltri: eq,
  ltrie: tq,
  ltrif: nq,
  ltrPar: rq,
  lurdshar: oq,
  luruhar: sq,
  lvertneqq: iq,
  lvnE: aq,
  macr: cq,
  male: lq,
  malt: uq,
  maltese: pq,
  Map: "⤅",
  map: dq,
  mapsto: fq,
  mapstodown: mq,
  mapstoleft: hq,
  mapstoup: yq,
  marker: gq,
  mcomma: vq,
  Mcy: bq,
  mcy: wq,
  mdash: xq,
  mDDot: _q,
  measuredangle: $q,
  MediumSpace: Eq,
  Mellintrf: Sq,
  Mfr: Tq,
  mfr: Oq,
  mho: Pq,
  micro: Nq,
  midast: Rq,
  midcir: Aq,
  mid: Dq,
  middot: Iq,
  minusb: kq,
  minus: Cq,
  minusd: jq,
  minusdu: Lq,
  MinusPlus: qq,
  mlcp: Fq,
  mldr: Mq,
  mnplus: Uq,
  models: Vq,
  Mopf: zq,
  mopf: Bq,
  mp: Gq,
  mscr: Hq,
  Mscr: Xq,
  mstpos: Kq,
  Mu: Wq,
  mu: Jq,
  multimap: Yq,
  mumap: Qq,
  nabla: Zq,
  Nacute: eF,
  nacute: tF,
  nang: nF,
  nap: rF,
  napE: oF,
  napid: sF,
  napos: iF,
  napprox: aF,
  natural: cF,
  naturals: lF,
  natur: uF,
  nbsp: pF,
  nbump: dF,
  nbumpe: fF,
  ncap: mF,
  Ncaron: hF,
  ncaron: yF,
  Ncedil: gF,
  ncedil: vF,
  ncong: bF,
  ncongdot: wF,
  ncup: xF,
  Ncy: _F,
  ncy: $F,
  ndash: EF,
  nearhk: SF,
  nearr: TF,
  neArr: OF,
  nearrow: PF,
  ne: NF,
  nedot: RF,
  NegativeMediumSpace: AF,
  NegativeThickSpace: DF,
  NegativeThinSpace: IF,
  NegativeVeryThinSpace: kF,
  nequiv: CF,
  nesear: jF,
  nesim: LF,
  NestedGreaterGreater: qF,
  NestedLessLess: FF,
  NewLine: MF,
  nexist: UF,
  nexists: VF,
  Nfr: zF,
  nfr: BF,
  ngE: GF,
  nge: HF,
  ngeq: XF,
  ngeqq: KF,
  ngeqslant: WF,
  nges: JF,
  nGg: YF,
  ngsim: QF,
  nGt: ZF,
  ngt: eM,
  ngtr: tM,
  nGtv: nM,
  nharr: rM,
  nhArr: oM,
  nhpar: sM,
  ni: iM,
  nis: aM,
  nisd: cM,
  niv: lM,
  NJcy: uM,
  njcy: pM,
  nlarr: dM,
  nlArr: fM,
  nldr: mM,
  nlE: hM,
  nle: yM,
  nleftarrow: gM,
  nLeftarrow: vM,
  nleftrightarrow: bM,
  nLeftrightarrow: wM,
  nleq: xM,
  nleqq: _M,
  nleqslant: $M,
  nles: EM,
  nless: SM,
  nLl: TM,
  nlsim: OM,
  nLt: PM,
  nlt: NM,
  nltri: RM,
  nltrie: AM,
  nLtv: DM,
  nmid: IM,
  NoBreak: kM,
  NonBreakingSpace: CM,
  nopf: jM,
  Nopf: LM,
  Not: qM,
  not: FM,
  NotCongruent: MM,
  NotCupCap: UM,
  NotDoubleVerticalBar: VM,
  NotElement: zM,
  NotEqual: BM,
  NotEqualTilde: GM,
  NotExists: HM,
  NotGreater: XM,
  NotGreaterEqual: KM,
  NotGreaterFullEqual: WM,
  NotGreaterGreater: JM,
  NotGreaterLess: YM,
  NotGreaterSlantEqual: QM,
  NotGreaterTilde: ZM,
  NotHumpDownHump: e2,
  NotHumpEqual: t2,
  notin: n2,
  notindot: r2,
  notinE: o2,
  notinva: s2,
  notinvb: i2,
  notinvc: a2,
  NotLeftTriangleBar: c2,
  NotLeftTriangle: l2,
  NotLeftTriangleEqual: u2,
  NotLess: p2,
  NotLessEqual: d2,
  NotLessGreater: f2,
  NotLessLess: m2,
  NotLessSlantEqual: h2,
  NotLessTilde: y2,
  NotNestedGreaterGreater: g2,
  NotNestedLessLess: v2,
  notni: b2,
  notniva: w2,
  notnivb: x2,
  notnivc: _2,
  NotPrecedes: $2,
  NotPrecedesEqual: E2,
  NotPrecedesSlantEqual: S2,
  NotReverseElement: T2,
  NotRightTriangleBar: O2,
  NotRightTriangle: P2,
  NotRightTriangleEqual: N2,
  NotSquareSubset: R2,
  NotSquareSubsetEqual: A2,
  NotSquareSuperset: D2,
  NotSquareSupersetEqual: I2,
  NotSubset: k2,
  NotSubsetEqual: C2,
  NotSucceeds: j2,
  NotSucceedsEqual: L2,
  NotSucceedsSlantEqual: q2,
  NotSucceedsTilde: F2,
  NotSuperset: M2,
  NotSupersetEqual: U2,
  NotTilde: V2,
  NotTildeEqual: z2,
  NotTildeFullEqual: B2,
  NotTildeTilde: G2,
  NotVerticalBar: H2,
  nparallel: X2,
  npar: K2,
  nparsl: W2,
  npart: J2,
  npolint: Y2,
  npr: Q2,
  nprcue: Z2,
  nprec: eU,
  npreceq: tU,
  npre: nU,
  nrarrc: rU,
  nrarr: oU,
  nrArr: sU,
  nrarrw: iU,
  nrightarrow: aU,
  nRightarrow: cU,
  nrtri: lU,
  nrtrie: uU,
  nsc: pU,
  nsccue: dU,
  nsce: fU,
  Nscr: mU,
  nscr: hU,
  nshortmid: yU,
  nshortparallel: gU,
  nsim: vU,
  nsime: bU,
  nsimeq: wU,
  nsmid: xU,
  nspar: _U,
  nsqsube: $U,
  nsqsupe: EU,
  nsub: SU,
  nsubE: TU,
  nsube: OU,
  nsubset: PU,
  nsubseteq: NU,
  nsubseteqq: RU,
  nsucc: AU,
  nsucceq: DU,
  nsup: IU,
  nsupE: kU,
  nsupe: CU,
  nsupset: jU,
  nsupseteq: LU,
  nsupseteqq: qU,
  ntgl: FU,
  Ntilde: MU,
  ntilde: UU,
  ntlg: VU,
  ntriangleleft: zU,
  ntrianglelefteq: BU,
  ntriangleright: GU,
  ntrianglerighteq: HU,
  Nu: XU,
  nu: KU,
  num: WU,
  numero: JU,
  numsp: YU,
  nvap: QU,
  nvdash: ZU,
  nvDash: e3,
  nVdash: t3,
  nVDash: n3,
  nvge: r3,
  nvgt: o3,
  nvHarr: s3,
  nvinfin: i3,
  nvlArr: a3,
  nvle: c3,
  nvlt: l3,
  nvltrie: u3,
  nvrArr: p3,
  nvrtrie: d3,
  nvsim: f3,
  nwarhk: m3,
  nwarr: h3,
  nwArr: y3,
  nwarrow: g3,
  nwnear: v3,
  Oacute: b3,
  oacute: w3,
  oast: x3,
  Ocirc: _3,
  ocirc: $3,
  ocir: E3,
  Ocy: S3,
  ocy: T3,
  odash: O3,
  Odblac: P3,
  odblac: N3,
  odiv: R3,
  odot: A3,
  odsold: D3,
  OElig: I3,
  oelig: k3,
  ofcir: C3,
  Ofr: j3,
  ofr: L3,
  ogon: q3,
  Ograve: F3,
  ograve: M3,
  ogt: U3,
  ohbar: V3,
  ohm: z3,
  oint: B3,
  olarr: G3,
  olcir: H3,
  olcross: X3,
  oline: K3,
  olt: W3,
  Omacr: J3,
  omacr: Y3,
  Omega: Q3,
  omega: Z3,
  Omicron: eV,
  omicron: tV,
  omid: nV,
  ominus: rV,
  Oopf: oV,
  oopf: sV,
  opar: iV,
  OpenCurlyDoubleQuote: aV,
  OpenCurlyQuote: cV,
  operp: lV,
  oplus: uV,
  orarr: pV,
  Or: dV,
  or: fV,
  ord: mV,
  order: hV,
  orderof: yV,
  ordf: gV,
  ordm: vV,
  origof: bV,
  oror: wV,
  orslope: xV,
  orv: _V,
  oS: $V,
  Oscr: EV,
  oscr: SV,
  Oslash: TV,
  oslash: OV,
  osol: PV,
  Otilde: NV,
  otilde: RV,
  otimesas: AV,
  Otimes: DV,
  otimes: IV,
  Ouml: kV,
  ouml: CV,
  ovbar: jV,
  OverBar: LV,
  OverBrace: qV,
  OverBracket: FV,
  OverParenthesis: MV,
  para: UV,
  parallel: VV,
  par: zV,
  parsim: BV,
  parsl: GV,
  part: HV,
  PartialD: XV,
  Pcy: KV,
  pcy: WV,
  percnt: JV,
  period: YV,
  permil: QV,
  perp: ZV,
  pertenk: ez,
  Pfr: tz,
  pfr: nz,
  Phi: rz,
  phi: oz,
  phiv: sz,
  phmmat: iz,
  phone: az,
  Pi: cz,
  pi: lz,
  pitchfork: uz,
  piv: pz,
  planck: dz,
  planckh: fz,
  plankv: mz,
  plusacir: hz,
  plusb: yz,
  pluscir: gz,
  plus: vz,
  plusdo: bz,
  plusdu: wz,
  pluse: xz,
  PlusMinus: _z,
  plusmn: $z,
  plussim: Ez,
  plustwo: Sz,
  pm: Tz,
  Poincareplane: Oz,
  pointint: Pz,
  popf: Nz,
  Popf: Rz,
  pound: Az,
  prap: Dz,
  Pr: Iz,
  pr: kz,
  prcue: Cz,
  precapprox: jz,
  prec: Lz,
  preccurlyeq: qz,
  Precedes: Fz,
  PrecedesEqual: Mz,
  PrecedesSlantEqual: Uz,
  PrecedesTilde: Vz,
  preceq: zz,
  precnapprox: Bz,
  precneqq: Gz,
  precnsim: Hz,
  pre: Xz,
  prE: Kz,
  precsim: Wz,
  prime: Jz,
  Prime: Yz,
  primes: Qz,
  prnap: Zz,
  prnE: eB,
  prnsim: tB,
  prod: nB,
  Product: rB,
  profalar: oB,
  profline: sB,
  profsurf: iB,
  prop: aB,
  Proportional: cB,
  Proportion: lB,
  propto: uB,
  prsim: pB,
  prurel: dB,
  Pscr: fB,
  pscr: mB,
  Psi: hB,
  psi: yB,
  puncsp: gB,
  Qfr: vB,
  qfr: bB,
  qint: wB,
  qopf: xB,
  Qopf: _B,
  qprime: $B,
  Qscr: EB,
  qscr: SB,
  quaternions: TB,
  quatint: OB,
  quest: PB,
  questeq: NB,
  quot: RB,
  QUOT: AB,
  rAarr: DB,
  race: IB,
  Racute: kB,
  racute: CB,
  radic: jB,
  raemptyv: LB,
  rang: qB,
  Rang: FB,
  rangd: MB,
  range: UB,
  rangle: VB,
  raquo: zB,
  rarrap: BB,
  rarrb: GB,
  rarrbfs: HB,
  rarrc: XB,
  rarr: KB,
  Rarr: WB,
  rArr: JB,
  rarrfs: YB,
  rarrhk: QB,
  rarrlp: ZB,
  rarrpl: e4,
  rarrsim: t4,
  Rarrtl: n4,
  rarrtl: r4,
  rarrw: o4,
  ratail: s4,
  rAtail: i4,
  ratio: a4,
  rationals: c4,
  rbarr: l4,
  rBarr: u4,
  RBarr: p4,
  rbbrk: d4,
  rbrace: f4,
  rbrack: m4,
  rbrke: h4,
  rbrksld: y4,
  rbrkslu: g4,
  Rcaron: v4,
  rcaron: b4,
  Rcedil: w4,
  rcedil: x4,
  rceil: _4,
  rcub: $4,
  Rcy: E4,
  rcy: S4,
  rdca: T4,
  rdldhar: O4,
  rdquo: P4,
  rdquor: N4,
  rdsh: R4,
  real: A4,
  realine: D4,
  realpart: I4,
  reals: k4,
  Re: C4,
  rect: j4,
  reg: L4,
  REG: q4,
  ReverseElement: F4,
  ReverseEquilibrium: M4,
  ReverseUpEquilibrium: U4,
  rfisht: V4,
  rfloor: z4,
  rfr: B4,
  Rfr: G4,
  rHar: H4,
  rhard: X4,
  rharu: K4,
  rharul: W4,
  Rho: J4,
  rho: Y4,
  rhov: Q4,
  RightAngleBracket: Z4,
  RightArrowBar: e9,
  rightarrow: t9,
  RightArrow: n9,
  Rightarrow: r9,
  RightArrowLeftArrow: o9,
  rightarrowtail: s9,
  RightCeiling: i9,
  RightDoubleBracket: a9,
  RightDownTeeVector: c9,
  RightDownVectorBar: l9,
  RightDownVector: u9,
  RightFloor: p9,
  rightharpoondown: d9,
  rightharpoonup: f9,
  rightleftarrows: m9,
  rightleftharpoons: h9,
  rightrightarrows: y9,
  rightsquigarrow: g9,
  RightTeeArrow: v9,
  RightTee: b9,
  RightTeeVector: w9,
  rightthreetimes: x9,
  RightTriangleBar: _9,
  RightTriangle: $9,
  RightTriangleEqual: E9,
  RightUpDownVector: S9,
  RightUpTeeVector: T9,
  RightUpVectorBar: O9,
  RightUpVector: P9,
  RightVectorBar: N9,
  RightVector: R9,
  ring: A9,
  risingdotseq: D9,
  rlarr: I9,
  rlhar: k9,
  rlm: C9,
  rmoustache: j9,
  rmoust: L9,
  rnmid: q9,
  roang: F9,
  roarr: M9,
  robrk: U9,
  ropar: V9,
  ropf: z9,
  Ropf: B9,
  roplus: G9,
  rotimes: H9,
  RoundImplies: X9,
  rpar: K9,
  rpargt: W9,
  rppolint: J9,
  rrarr: Y9,
  Rrightarrow: Q9,
  rsaquo: Z9,
  rscr: e8,
  Rscr: t8,
  rsh: n8,
  Rsh: r8,
  rsqb: o8,
  rsquo: s8,
  rsquor: i8,
  rthree: a8,
  rtimes: c8,
  rtri: l8,
  rtrie: u8,
  rtrif: p8,
  rtriltri: d8,
  RuleDelayed: f8,
  ruluhar: m8,
  rx: h8,
  Sacute: y8,
  sacute: g8,
  sbquo: v8,
  scap: b8,
  Scaron: w8,
  scaron: x8,
  Sc: _8,
  sc: $8,
  sccue: E8,
  sce: S8,
  scE: T8,
  Scedil: O8,
  scedil: P8,
  Scirc: N8,
  scirc: R8,
  scnap: A8,
  scnE: D8,
  scnsim: I8,
  scpolint: k8,
  scsim: C8,
  Scy: j8,
  scy: L8,
  sdotb: q8,
  sdot: F8,
  sdote: M8,
  searhk: U8,
  searr: V8,
  seArr: z8,
  searrow: B8,
  sect: G8,
  semi: H8,
  seswar: X8,
  setminus: K8,
  setmn: W8,
  sext: J8,
  Sfr: Y8,
  sfr: Q8,
  sfrown: Z8,
  sharp: eG,
  SHCHcy: tG,
  shchcy: nG,
  SHcy: rG,
  shcy: oG,
  ShortDownArrow: sG,
  ShortLeftArrow: iG,
  shortmid: aG,
  shortparallel: cG,
  ShortRightArrow: lG,
  ShortUpArrow: uG,
  shy: pG,
  Sigma: dG,
  sigma: fG,
  sigmaf: mG,
  sigmav: hG,
  sim: yG,
  simdot: gG,
  sime: vG,
  simeq: bG,
  simg: wG,
  simgE: xG,
  siml: _G,
  simlE: $G,
  simne: EG,
  simplus: SG,
  simrarr: TG,
  slarr: OG,
  SmallCircle: PG,
  smallsetminus: NG,
  smashp: RG,
  smeparsl: AG,
  smid: DG,
  smile: IG,
  smt: kG,
  smte: CG,
  smtes: jG,
  SOFTcy: LG,
  softcy: qG,
  solbar: FG,
  solb: MG,
  sol: UG,
  Sopf: VG,
  sopf: zG,
  spades: BG,
  spadesuit: GG,
  spar: HG,
  sqcap: XG,
  sqcaps: KG,
  sqcup: WG,
  sqcups: JG,
  Sqrt: YG,
  sqsub: QG,
  sqsube: ZG,
  sqsubset: eH,
  sqsubseteq: tH,
  sqsup: nH,
  sqsupe: rH,
  sqsupset: oH,
  sqsupseteq: sH,
  square: iH,
  Square: aH,
  SquareIntersection: cH,
  SquareSubset: lH,
  SquareSubsetEqual: uH,
  SquareSuperset: pH,
  SquareSupersetEqual: dH,
  SquareUnion: fH,
  squarf: mH,
  squ: hH,
  squf: yH,
  srarr: gH,
  Sscr: vH,
  sscr: bH,
  ssetmn: wH,
  ssmile: xH,
  sstarf: _H,
  Star: $H,
  star: EH,
  starf: SH,
  straightepsilon: TH,
  straightphi: OH,
  strns: PH,
  sub: NH,
  Sub: RH,
  subdot: AH,
  subE: DH,
  sube: IH,
  subedot: kH,
  submult: CH,
  subnE: jH,
  subne: LH,
  subplus: qH,
  subrarr: FH,
  subset: MH,
  Subset: UH,
  subseteq: VH,
  subseteqq: zH,
  SubsetEqual: BH,
  subsetneq: GH,
  subsetneqq: HH,
  subsim: XH,
  subsub: KH,
  subsup: WH,
  succapprox: JH,
  succ: YH,
  succcurlyeq: QH,
  Succeeds: ZH,
  SucceedsEqual: e6,
  SucceedsSlantEqual: t6,
  SucceedsTilde: n6,
  succeq: r6,
  succnapprox: o6,
  succneqq: s6,
  succnsim: i6,
  succsim: a6,
  SuchThat: c6,
  sum: l6,
  Sum: u6,
  sung: p6,
  sup1: d6,
  sup2: f6,
  sup3: m6,
  sup: h6,
  Sup: y6,
  supdot: g6,
  supdsub: v6,
  supE: b6,
  supe: w6,
  supedot: x6,
  Superset: _6,
  SupersetEqual: $6,
  suphsol: E6,
  suphsub: S6,
  suplarr: T6,
  supmult: O6,
  supnE: P6,
  supne: N6,
  supplus: R6,
  supset: A6,
  Supset: D6,
  supseteq: I6,
  supseteqq: k6,
  supsetneq: C6,
  supsetneqq: j6,
  supsim: L6,
  supsub: q6,
  supsup: F6,
  swarhk: M6,
  swarr: U6,
  swArr: V6,
  swarrow: z6,
  swnwar: B6,
  szlig: G6,
  Tab: H6,
  target: X6,
  Tau: K6,
  tau: W6,
  tbrk: J6,
  Tcaron: Y6,
  tcaron: Q6,
  Tcedil: Z6,
  tcedil: e5,
  Tcy: t5,
  tcy: n5,
  tdot: r5,
  telrec: o5,
  Tfr: s5,
  tfr: i5,
  there4: a5,
  therefore: c5,
  Therefore: l5,
  Theta: u5,
  theta: p5,
  thetasym: d5,
  thetav: f5,
  thickapprox: m5,
  thicksim: h5,
  ThickSpace: y5,
  ThinSpace: g5,
  thinsp: v5,
  thkap: b5,
  thksim: w5,
  THORN: x5,
  thorn: _5,
  tilde: $5,
  Tilde: E5,
  TildeEqual: S5,
  TildeFullEqual: T5,
  TildeTilde: O5,
  timesbar: P5,
  timesb: N5,
  times: R5,
  timesd: A5,
  tint: D5,
  toea: I5,
  topbot: k5,
  topcir: C5,
  top: j5,
  Topf: L5,
  topf: q5,
  topfork: F5,
  tosa: M5,
  tprime: U5,
  trade: V5,
  TRADE: z5,
  triangle: B5,
  triangledown: G5,
  triangleleft: H5,
  trianglelefteq: X5,
  triangleq: K5,
  triangleright: W5,
  trianglerighteq: J5,
  tridot: Y5,
  trie: Q5,
  triminus: Z5,
  TripleDot: eX,
  triplus: tX,
  trisb: nX,
  tritime: rX,
  trpezium: oX,
  Tscr: sX,
  tscr: iX,
  TScy: aX,
  tscy: cX,
  TSHcy: lX,
  tshcy: uX,
  Tstrok: pX,
  tstrok: dX,
  twixt: fX,
  twoheadleftarrow: mX,
  twoheadrightarrow: hX,
  Uacute: yX,
  uacute: gX,
  uarr: vX,
  Uarr: bX,
  uArr: wX,
  Uarrocir: xX,
  Ubrcy: _X,
  ubrcy: $X,
  Ubreve: EX,
  ubreve: SX,
  Ucirc: TX,
  ucirc: OX,
  Ucy: PX,
  ucy: NX,
  udarr: RX,
  Udblac: AX,
  udblac: DX,
  udhar: IX,
  ufisht: kX,
  Ufr: CX,
  ufr: jX,
  Ugrave: LX,
  ugrave: qX,
  uHar: FX,
  uharl: MX,
  uharr: UX,
  uhblk: VX,
  ulcorn: zX,
  ulcorner: BX,
  ulcrop: GX,
  ultri: HX,
  Umacr: XX,
  umacr: KX,
  uml: WX,
  UnderBar: JX,
  UnderBrace: YX,
  UnderBracket: QX,
  UnderParenthesis: ZX,
  Union: eK,
  UnionPlus: tK,
  Uogon: nK,
  uogon: rK,
  Uopf: oK,
  uopf: sK,
  UpArrowBar: iK,
  uparrow: aK,
  UpArrow: cK,
  Uparrow: lK,
  UpArrowDownArrow: uK,
  updownarrow: pK,
  UpDownArrow: dK,
  Updownarrow: fK,
  UpEquilibrium: mK,
  upharpoonleft: hK,
  upharpoonright: yK,
  uplus: gK,
  UpperLeftArrow: vK,
  UpperRightArrow: bK,
  upsi: wK,
  Upsi: xK,
  upsih: _K,
  Upsilon: $K,
  upsilon: EK,
  UpTeeArrow: SK,
  UpTee: TK,
  upuparrows: OK,
  urcorn: PK,
  urcorner: NK,
  urcrop: RK,
  Uring: AK,
  uring: DK,
  urtri: IK,
  Uscr: kK,
  uscr: CK,
  utdot: jK,
  Utilde: LK,
  utilde: qK,
  utri: FK,
  utrif: MK,
  uuarr: UK,
  Uuml: VK,
  uuml: zK,
  uwangle: BK,
  vangrt: GK,
  varepsilon: HK,
  varkappa: XK,
  varnothing: KK,
  varphi: WK,
  varpi: JK,
  varpropto: YK,
  varr: QK,
  vArr: ZK,
  varrho: e7,
  varsigma: t7,
  varsubsetneq: n7,
  varsubsetneqq: r7,
  varsupsetneq: o7,
  varsupsetneqq: s7,
  vartheta: i7,
  vartriangleleft: a7,
  vartriangleright: c7,
  vBar: l7,
  Vbar: u7,
  vBarv: p7,
  Vcy: d7,
  vcy: f7,
  vdash: m7,
  vDash: h7,
  Vdash: y7,
  VDash: g7,
  Vdashl: v7,
  veebar: b7,
  vee: w7,
  Vee: x7,
  veeeq: _7,
  vellip: $7,
  verbar: E7,
  Verbar: S7,
  vert: T7,
  Vert: O7,
  VerticalBar: P7,
  VerticalLine: N7,
  VerticalSeparator: R7,
  VerticalTilde: A7,
  VeryThinSpace: D7,
  Vfr: I7,
  vfr: k7,
  vltri: C7,
  vnsub: j7,
  vnsup: L7,
  Vopf: q7,
  vopf: F7,
  vprop: M7,
  vrtri: U7,
  Vscr: V7,
  vscr: z7,
  vsubnE: B7,
  vsubne: G7,
  vsupnE: H7,
  vsupne: X7,
  Vvdash: K7,
  vzigzag: W7,
  Wcirc: J7,
  wcirc: Y7,
  wedbar: Q7,
  wedge: Z7,
  Wedge: eW,
  wedgeq: tW,
  weierp: nW,
  Wfr: rW,
  wfr: oW,
  Wopf: sW,
  wopf: iW,
  wp: aW,
  wr: cW,
  wreath: lW,
  Wscr: uW,
  wscr: pW,
  xcap: dW,
  xcirc: fW,
  xcup: mW,
  xdtri: hW,
  Xfr: yW,
  xfr: gW,
  xharr: vW,
  xhArr: bW,
  Xi: wW,
  xi: xW,
  xlarr: _W,
  xlArr: $W,
  xmap: EW,
  xnis: SW,
  xodot: TW,
  Xopf: OW,
  xopf: PW,
  xoplus: NW,
  xotime: RW,
  xrarr: AW,
  xrArr: DW,
  Xscr: IW,
  xscr: kW,
  xsqcup: CW,
  xuplus: jW,
  xutri: LW,
  xvee: qW,
  xwedge: FW,
  Yacute: MW,
  yacute: UW,
  YAcy: VW,
  yacy: zW,
  Ycirc: BW,
  ycirc: GW,
  Ycy: HW,
  ycy: XW,
  yen: KW,
  Yfr: WW,
  yfr: JW,
  YIcy: YW,
  yicy: QW,
  Yopf: ZW,
  yopf: eJ,
  Yscr: tJ,
  yscr: nJ,
  YUcy: rJ,
  yucy: oJ,
  yuml: sJ,
  Yuml: iJ,
  Zacute: aJ,
  zacute: cJ,
  Zcaron: lJ,
  zcaron: uJ,
  Zcy: pJ,
  zcy: dJ,
  Zdot: fJ,
  zdot: mJ,
  zeetrf: hJ,
  ZeroWidthSpace: yJ,
  Zeta: gJ,
  zeta: vJ,
  zfr: bJ,
  Zfr: wJ,
  ZHcy: xJ,
  zhcy: _J,
  zigrarr: $J,
  zopf: EJ,
  Zopf: SJ,
  Zscr: TJ,
  zscr: OJ,
  zwj: PJ,
  zwnj: NJ
}, RJ = "Á", AJ = "á", DJ = "Â", IJ = "â", kJ = "´", CJ = "Æ", jJ = "æ", LJ = "À", qJ = "à", FJ = "&", MJ = "&", UJ = "Å", VJ = "å", zJ = "Ã", BJ = "ã", GJ = "Ä", HJ = "ä", XJ = "¦", KJ = "Ç", WJ = "ç", JJ = "¸", YJ = "¢", QJ = "©", ZJ = "©", eY = "¤", tY = "°", nY = "÷", rY = "É", oY = "é", sY = "Ê", iY = "ê", aY = "È", cY = "è", lY = "Ð", uY = "ð", pY = "Ë", dY = "ë", fY = "½", mY = "¼", hY = "¾", yY = ">", gY = ">", vY = "Í", bY = "í", wY = "Î", xY = "î", _Y = "¡", $Y = "Ì", EY = "ì", SY = "¿", TY = "Ï", OY = "ï", PY = "«", NY = "<", RY = "<", AY = "¯", DY = "µ", IY = "·", kY = " ", CY = "¬", jY = "Ñ", LY = "ñ", qY = "Ó", FY = "ó", MY = "Ô", UY = "ô", VY = "Ò", zY = "ò", BY = "ª", GY = "º", HY = "Ø", XY = "ø", KY = "Õ", WY = "õ", JY = "Ö", YY = "ö", QY = "¶", ZY = "±", eQ = "£", tQ = '"', nQ = '"', rQ = "»", oQ = "®", sQ = "®", iQ = "§", aQ = "­", cQ = "¹", lQ = "²", uQ = "³", pQ = "ß", dQ = "Þ", fQ = "þ", mQ = "×", hQ = "Ú", yQ = "ú", gQ = "Û", vQ = "û", bQ = "Ù", wQ = "ù", xQ = "¨", _Q = "Ü", $Q = "ü", EQ = "Ý", SQ = "ý", TQ = "¥", OQ = "ÿ", PQ = {
  Aacute: RJ,
  aacute: AJ,
  Acirc: DJ,
  acirc: IJ,
  acute: kJ,
  AElig: CJ,
  aelig: jJ,
  Agrave: LJ,
  agrave: qJ,
  amp: FJ,
  AMP: MJ,
  Aring: UJ,
  aring: VJ,
  Atilde: zJ,
  atilde: BJ,
  Auml: GJ,
  auml: HJ,
  brvbar: XJ,
  Ccedil: KJ,
  ccedil: WJ,
  cedil: JJ,
  cent: YJ,
  copy: QJ,
  COPY: ZJ,
  curren: eY,
  deg: tY,
  divide: nY,
  Eacute: rY,
  eacute: oY,
  Ecirc: sY,
  ecirc: iY,
  Egrave: aY,
  egrave: cY,
  ETH: lY,
  eth: uY,
  Euml: pY,
  euml: dY,
  frac12: fY,
  frac14: mY,
  frac34: hY,
  gt: yY,
  GT: gY,
  Iacute: vY,
  iacute: bY,
  Icirc: wY,
  icirc: xY,
  iexcl: _Y,
  Igrave: $Y,
  igrave: EY,
  iquest: SY,
  Iuml: TY,
  iuml: OY,
  laquo: PY,
  lt: NY,
  LT: RY,
  macr: AY,
  micro: DY,
  middot: IY,
  nbsp: kY,
  not: CY,
  Ntilde: jY,
  ntilde: LY,
  Oacute: qY,
  oacute: FY,
  Ocirc: MY,
  ocirc: UY,
  Ograve: VY,
  ograve: zY,
  ordf: BY,
  ordm: GY,
  Oslash: HY,
  oslash: XY,
  Otilde: KY,
  otilde: WY,
  Ouml: JY,
  ouml: YY,
  para: QY,
  plusmn: ZY,
  pound: eQ,
  quot: tQ,
  QUOT: nQ,
  raquo: rQ,
  reg: oQ,
  REG: sQ,
  sect: iQ,
  shy: aQ,
  sup1: cQ,
  sup2: lQ,
  sup3: uQ,
  szlig: pQ,
  THORN: dQ,
  thorn: fQ,
  times: mQ,
  Uacute: hQ,
  uacute: yQ,
  Ucirc: gQ,
  ucirc: vQ,
  Ugrave: bQ,
  ugrave: wQ,
  uml: xQ,
  Uuml: _Q,
  uuml: $Q,
  Yacute: EQ,
  yacute: SQ,
  yen: TQ,
  yuml: OQ
}, NQ = "&", RQ = "'", AQ = ">", DQ = "<", IQ = '"', ky = {
  amp: NQ,
  apos: RQ,
  gt: AQ,
  lt: DQ,
  quot: IQ
};
var lu = {};
const kQ = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};
var CQ = re && re.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(lu, "__esModule", { value: !0 });
var Sf = CQ(kQ), jQ = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.fromCodePoint || function(e) {
    var t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function LQ(e) {
  return e >= 55296 && e <= 57343 || e > 1114111 ? "�" : (e in Sf.default && (e = Sf.default[e]), jQ(e));
}
lu.default = LQ;
var Yi = re && re.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.decodeHTML = $n.decodeHTMLStrict = $n.decodeXML = void 0;
var dl = Yi(Iy), qQ = Yi(PQ), FQ = Yi(ky), Tf = Yi(lu), MQ = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
$n.decodeXML = Cy(FQ.default);
$n.decodeHTMLStrict = Cy(dl.default);
function Cy(e) {
  var t = jy(e);
  return function(n) {
    return String(n).replace(MQ, t);
  };
}
var Of = function(e, t) {
  return e < t ? 1 : -1;
};
$n.decodeHTML = function() {
  for (var e = Object.keys(qQ.default).sort(Of), t = Object.keys(dl.default).sort(Of), n = 0, r = 0; n < t.length; n++)
    e[r] === t[n] ? (t[n] += ";?", r++) : t[n] += ";";
  var o = new RegExp("&(?:" + t.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), s = jy(dl.default);
  function i(a) {
    return a.substr(-1) !== ";" && (a += ";"), s(a);
  }
  return function(a) {
    return String(a).replace(o, i);
  };
}();
function jy(e) {
  return function(n) {
    if (n.charAt(1) === "#") {
      var r = n.charAt(2);
      return r === "X" || r === "x" ? Tf.default(parseInt(n.substr(3), 16)) : Tf.default(parseInt(n.substr(2), 10));
    }
    return e[n.slice(1, -1)] || n;
  };
}
var Et = {}, Ly = re && re.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Et, "__esModule", { value: !0 });
Et.escapeUTF8 = Et.escape = Et.encodeNonAsciiHTML = Et.encodeHTML = Et.encodeXML = void 0;
var UQ = Ly(ky), qy = My(UQ.default), Fy = Uy(qy);
Et.encodeXML = By(qy);
var VQ = Ly(Iy), uu = My(VQ.default), zQ = Uy(uu);
Et.encodeHTML = GQ(uu, zQ);
Et.encodeNonAsciiHTML = By(uu);
function My(e) {
  return Object.keys(e).sort().reduce(function(t, n) {
    return t[e[n]] = "&" + n + ";", t;
  }, {});
}
function Uy(e) {
  for (var t = [], n = [], r = 0, o = Object.keys(e); r < o.length; r++) {
    var s = o[r];
    s.length === 1 ? t.push("\\" + s) : n.push(s);
  }
  t.sort();
  for (var i = 0; i < t.length - 1; i++) {
    for (var a = i; a < t.length - 1 && t[a].charCodeAt(1) + 1 === t[a + 1].charCodeAt(1); )
      a += 1;
    var c = 1 + a - i;
    c < 3 || t.splice(i, c, t[i] + "-" + t[a]);
  }
  return n.unshift("[" + t.join("") + "]"), new RegExp(n.join("|"), "g");
}
var Vy = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, BQ = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    function(e) {
      return e.codePointAt(0);
    }
  ) : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(e) {
      return (e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536;
    }
  )
);
function Qi(e) {
  return "&#x" + (e.length > 1 ? BQ(e) : e.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function GQ(e, t) {
  return function(n) {
    return n.replace(t, function(r) {
      return e[r];
    }).replace(Vy, Qi);
  };
}
var zy = new RegExp(Fy.source + "|" + Vy.source, "g");
function HQ(e) {
  return e.replace(zy, Qi);
}
Et.escape = HQ;
function XQ(e) {
  return e.replace(Fy, Qi);
}
Et.escapeUTF8 = XQ;
function By(e) {
  return function(t) {
    return t.replace(zy, function(n) {
      return e[n] || Qi(n);
    });
  };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXMLStrict = e.decodeHTML5Strict = e.decodeHTML4Strict = e.decodeHTML5 = e.decodeHTML4 = e.decodeHTMLStrict = e.decodeHTML = e.decodeXML = e.encodeHTML5 = e.encodeHTML4 = e.escapeUTF8 = e.escape = e.encodeNonAsciiHTML = e.encodeHTML = e.encodeXML = e.encode = e.decodeStrict = e.decode = void 0;
  var t = $n, n = Et;
  function r(c, p) {
    return (!p || p <= 0 ? t.decodeXML : t.decodeHTML)(c);
  }
  e.decode = r;
  function o(c, p) {
    return (!p || p <= 0 ? t.decodeXML : t.decodeHTMLStrict)(c);
  }
  e.decodeStrict = o;
  function s(c, p) {
    return (!p || p <= 0 ? n.encodeXML : n.encodeHTML)(c);
  }
  e.encode = s;
  var i = Et;
  Object.defineProperty(e, "encodeXML", { enumerable: !0, get: function() {
    return i.encodeXML;
  } }), Object.defineProperty(e, "encodeHTML", { enumerable: !0, get: function() {
    return i.encodeHTML;
  } }), Object.defineProperty(e, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return i.encodeNonAsciiHTML;
  } }), Object.defineProperty(e, "escape", { enumerable: !0, get: function() {
    return i.escape;
  } }), Object.defineProperty(e, "escapeUTF8", { enumerable: !0, get: function() {
    return i.escapeUTF8;
  } }), Object.defineProperty(e, "encodeHTML4", { enumerable: !0, get: function() {
    return i.encodeHTML;
  } }), Object.defineProperty(e, "encodeHTML5", { enumerable: !0, get: function() {
    return i.encodeHTML;
  } });
  var a = $n;
  Object.defineProperty(e, "decodeXML", { enumerable: !0, get: function() {
    return a.decodeXML;
  } }), Object.defineProperty(e, "decodeHTML", { enumerable: !0, get: function() {
    return a.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return a.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTML4", { enumerable: !0, get: function() {
    return a.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML5", { enumerable: !0, get: function() {
    return a.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return a.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return a.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeXMLStrict", { enumerable: !0, get: function() {
    return a.decodeXML;
  } });
})(Dy);
const Pn = Ay.exports = {}, KQ = Dy, WQ = bn;
Pn.stripHtml = function(e) {
  return e = e.replace(/([^\n])<\/?(h|br|p|ul|ol|li|blockquote|section|table|tr|div)(?:.|\n)*?>([^\n])/gm, `$1
$3`), e = e.replace(/<(?:.|\n)*?>/gm, ""), e;
};
Pn.getSnippet = function(e) {
  return KQ.decodeHTML(Pn.stripHtml(e)).trim();
};
Pn.getLink = function(e, t, n) {
  if (e) {
    for (let r = 0; r < e.length; ++r)
      if (e[r].$.rel === t) return e[r].$.href;
    if (e[n]) return e[n].$.href;
  }
};
Pn.getContent = function(e) {
  return typeof e._ == "string" ? e._ : typeof e == "object" ? new WQ.Builder({ headless: !0, explicitRoot: !0, rootName: "div", renderOpts: { pretty: !1 } }).buildObject(e) : e;
};
Pn.copyFromXML = function(e, t, n) {
  n.forEach(function(r) {
    let o = r, s = r, i = {};
    Array.isArray(r) && (o = r[0], s = r[1], r.length > 2 && (i = r[2]));
    const { keepArray: a, includeSnippet: c } = i;
    e[o] !== void 0 && (t[s] = a ? e[o] : e[o][0]), t[s] && typeof t[s]._ == "string" && (t[s] = t[s]._), c && t[s] && typeof t[s] == "string" && (t[s + "Snippet"] = Pn.getSnippet(t[s]));
  });
};
Pn.maybePromisify = function(e, t) {
  return e ? t.then(
    (n) => setTimeout(() => e(null, n)),
    (n) => setTimeout(() => e(n))
  ) : t;
};
const JQ = "utf8", YQ = /(encoding|charset)\s*=\s*(\S+)/, QQ = ["ascii", "utf8", "utf16le", "ucs2", "base64", "latin1", "binary", "hex"], ZQ = {
  "utf-8": "utf8",
  "iso-8859-1": "latin1"
};
Pn.getEncodingFromContentType = function(e) {
  e = e || "";
  let n = (e.match(YQ) || [])[2] || "";
  return n = n.toLowerCase(), n = ZQ[n] || n, (!n || QQ.indexOf(n) === -1) && (n = JQ), n;
};
var eZ = Ay.exports;
const tZ = Hi, nZ = Xi, rZ = bn, Pf = fs, Rs = d0, ze = eZ, oZ = {
  "User-Agent": "rss-parser",
  Accept: "application/rss+xml"
}, sZ = 5, iZ = 6e4;
let aZ = class {
  constructor(t = {}) {
    t.headers = t.headers || {}, t.xml2js = t.xml2js || {}, t.customFields = t.customFields || {}, t.customFields.item = t.customFields.item || [], t.customFields.feed = t.customFields.feed || [], t.requestOptions = t.requestOptions || {}, t.maxRedirects || (t.maxRedirects = sZ), t.timeout || (t.timeout = iZ), this.options = t, this.xmlParser = new rZ.Parser(this.options.xml2js);
  }
  parseString(t, n) {
    let r = new Promise((o, s) => {
      this.xmlParser.parseString(t, (i, a) => {
        if (i) return s(i);
        if (!a)
          return s(new Error("Unable to parse XML."));
        let c = null;
        if (a.feed)
          c = this.buildAtomFeed(a);
        else if (a.rss && a.rss.$ && a.rss.$.version && a.rss.$.version.match(/^2/))
          c = this.buildRSS2(a);
        else if (a["rdf:RDF"])
          c = this.buildRSS1(a);
        else if (a.rss && a.rss.$ && a.rss.$.version && a.rss.$.version.match(/0\.9/))
          c = this.buildRSS0_9(a);
        else if (a.rss && this.options.defaultRSS)
          switch (this.options.defaultRSS) {
            case 0.9:
              c = this.buildRSS0_9(a);
              break;
            case 1:
              c = this.buildRSS1(a);
              break;
            case 2:
              c = this.buildRSS2(a);
              break;
            default:
              return s(new Error("default RSS version not recognized."));
          }
        else
          return s(new Error("Feed not recognized as RSS 1 or 2."));
        o(c);
      });
    });
    return r = ze.maybePromisify(n, r), r;
  }
  parseURL(t, n, r = 0) {
    let o = "", s = t.indexOf("https") === 0 ? nZ.get : tZ.get, i = Pf.parse(t), a = Object.assign({}, oZ, this.options.headers), c = null, p = new Promise((l, u) => {
      const d = Object.assign({ headers: a }, i, this.options.requestOptions);
      s(d, (f) => {
        if (this.options.maxRedirects && f.statusCode >= 300 && f.statusCode < 400 && f.headers.location) {
          if (r === this.options.maxRedirects)
            return u(new Error("Too many redirects"));
          {
            const y = Pf.resolve(t, f.headers.location);
            return this.parseURL(y, null, r + 1).then(l, u);
          }
        } else if (f.statusCode >= 300)
          return u(new Error("Status code " + f.statusCode));
        let g = ze.getEncodingFromContentType(f.headers["content-type"]);
        f.setEncoding(g), f.on("data", (y) => {
          o += y;
        }), f.on("end", () => this.parseString(o).then(l, u));
      }).on("error", u), c = setTimeout(() => u(new Error("Request timed out after " + this.options.timeout + "ms")), this.options.timeout);
    }).then((l) => (clearTimeout(c), Promise.resolve(l)), (l) => (clearTimeout(c), Promise.reject(l)));
    return p = ze.maybePromisify(n, p), p;
  }
  buildAtomFeed(t) {
    let n = { items: [] };
    if (ze.copyFromXML(t.feed, n, this.options.customFields.feed), t.feed.link && (n.link = ze.getLink(t.feed.link, "alternate", 0), n.feedUrl = ze.getLink(t.feed.link, "self", 1)), t.feed.title) {
      let r = t.feed.title[0] || "";
      r._ && (r = r._), r && (n.title = r);
    }
    return t.feed.updated && (n.lastBuildDate = t.feed.updated[0]), n.items = (t.feed.entry || []).map((r) => this.parseItemAtom(r)), n;
  }
  parseItemAtom(t) {
    let n = {};
    if (ze.copyFromXML(t, n, this.options.customFields.item), t.title) {
      let r = t.title[0] || "";
      r._ && (r = r._), r && (n.title = r);
    }
    return t.link && t.link.length && (n.link = ze.getLink(t.link, "alternate", 0)), t.published && t.published.length && t.published[0].length && (n.pubDate = new Date(t.published[0]).toISOString()), !n.pubDate && t.updated && t.updated.length && t.updated[0].length && (n.pubDate = new Date(t.updated[0]).toISOString()), t.author && t.author.length && t.author[0].name && t.author[0].name.length && (n.author = t.author[0].name[0]), t.content && t.content.length && (n.content = ze.getContent(t.content[0]), n.contentSnippet = ze.getSnippet(n.content)), t.summary && t.summary.length && (n.summary = ze.getContent(t.summary[0])), t.id && (n.id = t.id[0]), this.setISODate(n), n;
  }
  buildRSS0_9(t) {
    var n = t.rss.channel[0], r = n.item;
    return this.buildRSS(n, r);
  }
  buildRSS1(t) {
    t = t["rdf:RDF"];
    let n = t.channel[0], r = t.item;
    return this.buildRSS(n, r);
  }
  buildRSS2(t) {
    let n = t.rss.channel[0], r = n.item, o = this.buildRSS(n, r);
    return t.rss.$ && t.rss.$["xmlns:itunes"] && this.decorateItunes(o, n), o;
  }
  buildRSS(t, n) {
    n = n || [];
    let r = { items: [] }, o = Rs.feed.concat(this.options.customFields.feed), s = Rs.item.concat(this.options.customFields.item);
    if (t["atom:link"] && t["atom:link"][0] && t["atom:link"][0].$ && (r.feedUrl = t["atom:link"][0].$.href), t.image && t.image[0] && t.image[0].url) {
      r.image = {};
      let a = t.image[0];
      a.link && (r.image.link = a.link[0]), a.url && (r.image.url = a.url[0]), a.title && (r.image.title = a.title[0]), a.width && (r.image.width = a.width[0]), a.height && (r.image.height = a.height[0]);
    }
    const i = this.generatePaginationLinks(t);
    return Object.keys(i).length && (r.paginationLinks = i), ze.copyFromXML(t, r, o), r.items = n.map((a) => this.parseItemRss(a, s)), r;
  }
  parseItemRss(t, n) {
    let r = {};
    return ze.copyFromXML(t, r, n), t.enclosure && (r.enclosure = t.enclosure[0].$), t.description && (r.content = ze.getContent(t.description[0]), r.contentSnippet = ze.getSnippet(r.content)), t.guid && (r.guid = t.guid[0], r.guid._ && (r.guid = r.guid._)), t.$ && t.$["rdf:about"] && (r["rdf:about"] = t.$["rdf:about"]), t.category && (r.categories = t.category), this.setISODate(r), r;
  }
  /**
   * Add iTunes specific fields from XML to extracted JSON
   *
   * @access public
   * @param {object} feed extracted
   * @param {object} channel parsed XML
   */
  decorateItunes(t, n) {
    let r = n.item || [];
    if (t.itunes = {}, n["itunes:owner"]) {
      let o = {};
      n["itunes:owner"][0]["itunes:name"] && (o.name = n["itunes:owner"][0]["itunes:name"][0]), n["itunes:owner"][0]["itunes:email"] && (o.email = n["itunes:owner"][0]["itunes:email"][0]), t.itunes.owner = o;
    }
    if (n["itunes:image"]) {
      let o;
      o = n["itunes:image"][0] && n["itunes:image"][0].$ && n["itunes:image"][0].$.href ? n["itunes:image"][0].$.href : null, o && (t.itunes.image = o);
    }
    if (n["itunes:category"]) {
      const o = n["itunes:category"].map((s) => ({
        name: s && s.$ && s.$.text,
        subs: s["itunes:category"] ? s["itunes:category"].map((i) => ({
          name: i && i.$ && i.$.text
        })) : null
      }));
      t.itunes.categories = o.map((s) => s.name), t.itunes.categoriesWithSubs = o;
    }
    if (n["itunes:keywords"])
      if (n["itunes:keywords"].length > 1)
        t.itunes.keywords = n["itunes:keywords"].map(
          (o) => o && o.$ && o.$.text
        );
      else {
        let o = n["itunes:keywords"][0];
        o && typeof o._ == "string" && (o = o._), o && o.$ && o.$.text ? t.itunes.keywords = o.$.text.split(",") : typeof o == "string" && (t.itunes.keywords = o.split(","));
      }
    ze.copyFromXML(n, t.itunes, Rs.podcastFeed), r.forEach((o, s) => {
      let i = t.items[s];
      i.itunes = {}, ze.copyFromXML(o, i.itunes, Rs.podcastItem);
      let a = o["itunes:image"];
      a && a[0] && a[0].$ && a[0].$.href && (i.itunes.image = a[0].$.href);
    });
  }
  setISODate(t) {
    let n = t.pubDate || t.date;
    if (n)
      try {
        t.isoDate = new Date(n.trim()).toISOString();
      } catch {
      }
  }
  /**
   * Generates a pagination object where the rel attribute is the key and href attribute is the value
   *  { self: 'self-url', first: 'first-url', ...  }
   *
   * @access private
   * @param {Object} channel parsed XML
   * @returns {Object}
   */
  generatePaginationLinks(t) {
    if (!t["atom:link"])
      return {};
    const n = ["self", "first", "next", "prev", "last"];
    return t["atom:link"].reduce((r, o) => (!o.$ || !n.includes(o.$.rel) || (r[o.$.rel] = o.$.href), r), {});
  }
};
var cZ = aZ, lZ = cZ;
const uZ = /* @__PURE__ */ tr(lZ);
class pZ {
  constructor() {
    Qt(this, "parser");
    this.parser = new uZ();
  }
  async parseFeed(t) {
    try {
      const n = await this.parser.parseURL(t);
      return n.episodes = n.items.map((r) => ({
        title: r.title,
        pubDate: r.pubDate,
        link: r.link,
        enclosure: r.enclosure,
        enclosures: r.enclosures,
        content: r.content,
        contentSnippet: r.contentSnippet,
        guid: r.guid,
        isoDate: r.isoDate
      })), n;
    } catch (n) {
      throw console.error("Error parsing feed:", n), n;
    }
  }
}
const Rr = (e) => {
  const t = typeof e;
  return e !== null && (t === "object" || t === "function");
}, Gy = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), Hy = 1e6, dZ = (e) => e >= "0" && e <= "9";
function Xy(e) {
  if (e === "0")
    return !0;
  if (/^[1-9]\d*$/.test(e)) {
    const t = Number.parseInt(e, 10);
    return t <= Number.MAX_SAFE_INTEGER && t <= Hy;
  }
  return !1;
}
function fc(e, t) {
  return Gy.has(e) ? !1 : (e && Xy(e) ? t.push(Number.parseInt(e, 10)) : t.push(e), !0);
}
function fZ(e) {
  if (typeof e != "string")
    throw new TypeError(`Expected a string, got ${typeof e}`);
  const t = [];
  let n = "", r = "start", o = !1, s = 0;
  for (const i of e) {
    if (s++, o) {
      n += i, o = !1;
      continue;
    }
    if (i === "\\") {
      if (r === "index")
        throw new Error(`Invalid character '${i}' in an index at position ${s}`);
      if (r === "indexEnd")
        throw new Error(`Invalid character '${i}' after an index at position ${s}`);
      o = !0, r = r === "start" ? "property" : r;
      continue;
    }
    switch (i) {
      case ".": {
        if (r === "index")
          throw new Error(`Invalid character '${i}' in an index at position ${s}`);
        if (r === "indexEnd") {
          r = "property";
          break;
        }
        if (!fc(n, t))
          return [];
        n = "", r = "property";
        break;
      }
      case "[": {
        if (r === "index")
          throw new Error(`Invalid character '${i}' in an index at position ${s}`);
        if (r === "indexEnd") {
          r = "index";
          break;
        }
        if (r === "property" || r === "start") {
          if ((n || r === "property") && !fc(n, t))
            return [];
          n = "";
        }
        r = "index";
        break;
      }
      case "]": {
        if (r === "index") {
          if (n === "")
            n = (t.pop() || "") + "[]", r = "property";
          else {
            const a = Number.parseInt(n, 10);
            !Number.isNaN(a) && Number.isFinite(a) && a >= 0 && a <= Number.MAX_SAFE_INTEGER && a <= Hy && n === String(a) ? t.push(a) : t.push(n), n = "", r = "indexEnd";
          }
          break;
        }
        if (r === "indexEnd")
          throw new Error(`Invalid character '${i}' after an index at position ${s}`);
        n += i;
        break;
      }
      default: {
        if (r === "index" && !dZ(i))
          throw new Error(`Invalid character '${i}' in an index at position ${s}`);
        if (r === "indexEnd")
          throw new Error(`Invalid character '${i}' after an index at position ${s}`);
        r === "start" && (r = "property"), n += i;
      }
    }
  }
  switch (o && (n += "\\"), r) {
    case "property": {
      if (!fc(n, t))
        return [];
      break;
    }
    case "index":
      throw new Error("Index was not closed");
    case "start": {
      t.push("");
      break;
    }
  }
  return t;
}
function Zi(e) {
  if (typeof e == "string")
    return fZ(e);
  if (Array.isArray(e)) {
    const t = [];
    for (const [n, r] of e.entries()) {
      if (typeof r != "string" && typeof r != "number")
        throw new TypeError(`Expected a string or number for path segment at index ${n}, got ${typeof r}`);
      if (typeof r == "number" && !Number.isFinite(r))
        throw new TypeError(`Path segment at index ${n} must be a finite number, got ${r}`);
      if (Gy.has(r))
        return [];
      typeof r == "string" && Xy(r) ? t.push(Number.parseInt(r, 10)) : t.push(r);
    }
    return t;
  }
  return [];
}
function Nf(e, t, n) {
  if (!Rr(e) || typeof t != "string" && !Array.isArray(t))
    return n === void 0 ? e : n;
  const r = Zi(t);
  if (r.length === 0)
    return n;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (e = e[s], e == null) {
      if (o !== r.length - 1)
        return n;
      break;
    }
  }
  return e === void 0 ? n : e;
}
function As(e, t, n) {
  if (!Rr(e) || typeof t != "string" && !Array.isArray(t))
    return e;
  const r = e, o = Zi(t);
  if (o.length === 0)
    return e;
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    if (s === o.length - 1)
      e[i] = n;
    else if (!Rr(e[i])) {
      const c = typeof o[s + 1] == "number";
      e[i] = c ? [] : {};
    }
    e = e[i];
  }
  return r;
}
function mZ(e, t) {
  if (!Rr(e) || typeof t != "string" && !Array.isArray(t))
    return !1;
  const n = Zi(t);
  if (n.length === 0)
    return !1;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (r === n.length - 1)
      return Object.hasOwn(e, o) ? (delete e[o], !0) : !1;
    if (e = e[o], !Rr(e))
      return !1;
  }
}
function mc(e, t) {
  if (!Rr(e) || typeof t != "string" && !Array.isArray(t))
    return !1;
  const n = Zi(t);
  if (n.length === 0)
    return !1;
  for (const r of n) {
    if (!Rr(e) || !(r in e))
      return !1;
    e = e[r];
  }
  return !0;
}
const Vn = gy.homedir(), pu = gy.tmpdir(), { env: Wr } = Se, hZ = (e) => {
  const t = de.join(Vn, "Library");
  return {
    data: de.join(t, "Application Support", e),
    config: de.join(t, "Preferences", e),
    cache: de.join(t, "Caches", e),
    log: de.join(t, "Logs", e),
    temp: de.join(pu, e)
  };
}, yZ = (e) => {
  const t = Wr.APPDATA || de.join(Vn, "AppData", "Roaming"), n = Wr.LOCALAPPDATA || de.join(Vn, "AppData", "Local");
  return {
    // Data/config/cache/log are invented by me as Windows isn't opinionated about this
    data: de.join(n, e, "Data"),
    config: de.join(t, e, "Config"),
    cache: de.join(n, e, "Cache"),
    log: de.join(n, e, "Log"),
    temp: de.join(pu, e)
  };
}, gZ = (e) => {
  const t = de.basename(Vn);
  return {
    data: de.join(Wr.XDG_DATA_HOME || de.join(Vn, ".local", "share"), e),
    config: de.join(Wr.XDG_CONFIG_HOME || de.join(Vn, ".config"), e),
    cache: de.join(Wr.XDG_CACHE_HOME || de.join(Vn, ".cache"), e),
    // https://wiki.debian.org/XDGBaseDirectorySpecification#state
    log: de.join(Wr.XDG_STATE_HOME || de.join(Vn, ".local", "state"), e),
    temp: de.join(pu, t, e)
  };
};
function vZ(e, { suffix: t = "nodejs" } = {}) {
  if (typeof e != "string")
    throw new TypeError(`Expected a string, got ${typeof e}`);
  return t && (e += `-${t}`), Se.platform === "darwin" ? hZ(e) : Se.platform === "win32" ? yZ(e) : gZ(e);
}
const Dn = (e, t) => {
  const { onError: n } = t;
  return function(...o) {
    return e.apply(void 0, o).catch(n);
  };
}, gn = (e, t) => {
  const { onError: n } = t;
  return function(...o) {
    try {
      return e.apply(void 0, o);
    } catch (s) {
      return n(s);
    }
  };
}, bZ = 250, In = (e, t) => {
  const { isRetriable: n } = t;
  return function(o) {
    const { timeout: s } = o, i = o.interval ?? bZ, a = Date.now() + s;
    return function c(...p) {
      return e.apply(void 0, p).catch((l) => {
        if (!n(l) || Date.now() >= a)
          throw l;
        const u = Math.round(i * Math.random());
        return u > 0 ? new Promise((m) => setTimeout(m, u)).then(() => c.apply(void 0, p)) : c.apply(void 0, p);
      });
    };
  };
}, kn = (e, t) => {
  const { isRetriable: n } = t;
  return function(o) {
    const { timeout: s } = o, i = Date.now() + s;
    return function(...c) {
      for (; ; )
        try {
          return e.apply(void 0, c);
        } catch (p) {
          if (!n(p) || Date.now() >= i)
            throw p;
          continue;
        }
    };
  };
}, Jr = {
  /* API */
  isChangeErrorOk: (e) => {
    if (!Jr.isNodeError(e))
      return !1;
    const { code: t } = e;
    return t === "ENOSYS" || !wZ && (t === "EINVAL" || t === "EPERM");
  },
  isNodeError: (e) => e instanceof Error,
  isRetriableError: (e) => {
    if (!Jr.isNodeError(e))
      return !1;
    const { code: t } = e;
    return t === "EMFILE" || t === "ENFILE" || t === "EAGAIN" || t === "EBUSY" || t === "EACCESS" || t === "EACCES" || t === "EACCS" || t === "EPERM";
  },
  onChangeError: (e) => {
    if (!Jr.isNodeError(e))
      throw e;
    if (!Jr.isChangeErrorOk(e))
      throw e;
  }
}, Ds = {
  onError: Jr.onChangeError
}, $t = {
  onError: () => {
  }
}, wZ = Se.getuid ? !Se.getuid() : !1, et = {
  isRetriable: Jr.isRetriableError
}, rt = {
  attempt: {
    /* ASYNC */
    chmod: Dn(Ze(ae.chmod), Ds),
    chown: Dn(Ze(ae.chown), Ds),
    close: Dn(Ze(ae.close), $t),
    fsync: Dn(Ze(ae.fsync), $t),
    mkdir: Dn(Ze(ae.mkdir), $t),
    realpath: Dn(Ze(ae.realpath), $t),
    stat: Dn(Ze(ae.stat), $t),
    unlink: Dn(Ze(ae.unlink), $t),
    /* SYNC */
    chmodSync: gn(ae.chmodSync, Ds),
    chownSync: gn(ae.chownSync, Ds),
    closeSync: gn(ae.closeSync, $t),
    existsSync: gn(ae.existsSync, $t),
    fsyncSync: gn(ae.fsync, $t),
    mkdirSync: gn(ae.mkdirSync, $t),
    realpathSync: gn(ae.realpathSync, $t),
    statSync: gn(ae.statSync, $t),
    unlinkSync: gn(ae.unlinkSync, $t)
  },
  retry: {
    /* ASYNC */
    close: In(Ze(ae.close), et),
    fsync: In(Ze(ae.fsync), et),
    open: In(Ze(ae.open), et),
    readFile: In(Ze(ae.readFile), et),
    rename: In(Ze(ae.rename), et),
    stat: In(Ze(ae.stat), et),
    write: In(Ze(ae.write), et),
    writeFile: In(Ze(ae.writeFile), et),
    /* SYNC */
    closeSync: kn(ae.closeSync, et),
    fsyncSync: kn(ae.fsyncSync, et),
    openSync: kn(ae.openSync, et),
    readFileSync: kn(ae.readFileSync, et),
    renameSync: kn(ae.renameSync, et),
    statSync: kn(ae.statSync, et),
    writeSync: kn(ae.writeSync, et),
    writeFileSync: kn(ae.writeFileSync, et)
  }
}, xZ = "utf8", Rf = 438, _Z = 511, $Z = {}, EZ = Se.geteuid ? Se.geteuid() : -1, SZ = Se.getegid ? Se.getegid() : -1, TZ = 1e3, OZ = !!Se.getuid;
Se.getuid && Se.getuid();
const Af = 128, PZ = (e) => e instanceof Error && "code" in e, Df = (e) => typeof e == "string", hc = (e) => e === void 0, NZ = Se.platform === "linux", Ky = Se.platform === "win32", du = ["SIGHUP", "SIGINT", "SIGTERM"];
Ky || du.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
NZ && du.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
class RZ {
  /* CONSTRUCTOR */
  constructor() {
    this.callbacks = /* @__PURE__ */ new Set(), this.exited = !1, this.exit = (t) => {
      if (!this.exited) {
        this.exited = !0;
        for (const n of this.callbacks)
          n();
        t && (Ky && t !== "SIGINT" && t !== "SIGTERM" && t !== "SIGKILL" ? Se.kill(Se.pid, "SIGTERM") : Se.kill(Se.pid, t));
      }
    }, this.hook = () => {
      Se.once("exit", () => this.exit());
      for (const t of du)
        try {
          Se.once(t, () => this.exit(t));
        } catch {
        }
    }, this.register = (t) => (this.callbacks.add(t), () => {
      this.callbacks.delete(t);
    }), this.hook();
  }
}
const AZ = new RZ(), DZ = AZ.register, ot = {
  /* VARIABLES */
  store: {},
  // filePath => purge
  /* API */
  create: (e) => {
    const t = `000000${Math.floor(Math.random() * 16777215).toString(16)}`.slice(-6), o = `.tmp-${Date.now().toString().slice(-10)}${t}`;
    return `${e}${o}`;
  },
  get: (e, t, n = !0) => {
    const r = ot.truncate(t(e));
    return r in ot.store ? ot.get(e, t, n) : (ot.store[r] = n, [r, () => delete ot.store[r]]);
  },
  purge: (e) => {
    ot.store[e] && (delete ot.store[e], rt.attempt.unlink(e));
  },
  purgeSync: (e) => {
    ot.store[e] && (delete ot.store[e], rt.attempt.unlinkSync(e));
  },
  purgeSyncAll: () => {
    for (const e in ot.store)
      ot.purgeSync(e);
  },
  truncate: (e) => {
    const t = de.basename(e);
    if (t.length <= Af)
      return e;
    const n = /^(\.?)(.*?)((?:\.[^.]+)?(?:\.tmp-\d{10}[a-f0-9]{6})?)$/.exec(t);
    if (!n)
      return e;
    const r = t.length - Af;
    return `${e.slice(0, -t.length)}${n[1]}${n[2].slice(0, -r)}${n[3]}`;
  }
};
DZ(ot.purgeSyncAll);
function Wy(e, t, n = $Z) {
  if (Df(n))
    return Wy(e, t, { encoding: n });
  const o = { timeout: n.timeout ?? TZ };
  let s = null, i = null, a = null;
  try {
    const c = rt.attempt.realpathSync(e), p = !!c;
    e = c || e, [i, s] = ot.get(e, n.tmpCreate || ot.create, n.tmpPurge !== !1);
    const l = OZ && hc(n.chown), u = hc(n.mode);
    if (p && (l || u)) {
      const d = rt.attempt.statSync(e);
      d && (n = { ...n }, l && (n.chown = { uid: d.uid, gid: d.gid }), u && (n.mode = d.mode));
    }
    if (!p) {
      const d = de.dirname(e);
      rt.attempt.mkdirSync(d, {
        mode: _Z,
        recursive: !0
      });
    }
    a = rt.retry.openSync(o)(i, "w", n.mode || Rf), n.tmpCreated && n.tmpCreated(i), Df(t) ? rt.retry.writeSync(o)(a, t, 0, n.encoding || xZ) : hc(t) || rt.retry.writeSync(o)(a, t, 0, t.length, 0), n.fsync !== !1 && (n.fsyncWait !== !1 ? rt.retry.fsyncSync(o)(a) : rt.attempt.fsync(a)), rt.retry.closeSync(o)(a), a = null, n.chown && (n.chown.uid !== EZ || n.chown.gid !== SZ) && rt.attempt.chownSync(i, n.chown.uid, n.chown.gid), n.mode && n.mode !== Rf && rt.attempt.chmodSync(i, n.mode);
    try {
      rt.retry.renameSync(o)(i, e);
    } catch (d) {
      if (!PZ(d) || d.code !== "ENAMETOOLONG")
        throw d;
      rt.retry.renameSync(o)(i, ot.truncate(e));
    }
    s(), i = null;
  } finally {
    a && rt.attempt.closeSync(a), i && ot.purge(i);
  }
}
var fl = { exports: {} }, Jy = {}, Bt = {}, uo = {}, ms = {}, ce = {}, ns = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
  class t {
  }
  e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class n extends t {
    constructor(b) {
      if (super(), !e.IDENTIFIER.test(b))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = b;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  e.Name = n;
  class r extends t {
    constructor(b) {
      super(), this._items = typeof b == "string" ? [b] : b;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const b = this._items[0];
      return b === "" || b === '""';
    }
    get str() {
      var b;
      return (b = this._str) !== null && b !== void 0 ? b : this._str = this._items.reduce((w, T) => `${w}${T}`, "");
    }
    get names() {
      var b;
      return (b = this._names) !== null && b !== void 0 ? b : this._names = this._items.reduce((w, T) => (T instanceof n && (w[T.str] = (w[T.str] || 0) + 1), w), {});
    }
  }
  e._Code = r, e.nil = new r("");
  function o(v, ...b) {
    const w = [v[0]];
    let T = 0;
    for (; T < b.length; )
      a(w, b[T]), w.push(v[++T]);
    return new r(w);
  }
  e._ = o;
  const s = new r("+");
  function i(v, ...b) {
    const w = [m(v[0])];
    let T = 0;
    for (; T < b.length; )
      w.push(s), a(w, b[T]), w.push(s, m(v[++T]));
    return c(w), new r(w);
  }
  e.str = i;
  function a(v, b) {
    b instanceof r ? v.push(...b._items) : b instanceof n ? v.push(b) : v.push(u(b));
  }
  e.addCodeArg = a;
  function c(v) {
    let b = 1;
    for (; b < v.length - 1; ) {
      if (v[b] === s) {
        const w = p(v[b - 1], v[b + 1]);
        if (w !== void 0) {
          v.splice(b - 1, 3, w);
          continue;
        }
        v[b++] = "+";
      }
      b++;
    }
  }
  function p(v, b) {
    if (b === '""')
      return v;
    if (v === '""')
      return b;
    if (typeof v == "string")
      return b instanceof n || v[v.length - 1] !== '"' ? void 0 : typeof b != "string" ? `${v.slice(0, -1)}${b}"` : b[0] === '"' ? v.slice(0, -1) + b.slice(1) : void 0;
    if (typeof b == "string" && b[0] === '"' && !(v instanceof n))
      return `"${v}${b.slice(1)}`;
  }
  function l(v, b) {
    return b.emptyStr() ? v : v.emptyStr() ? b : i`${v}${b}`;
  }
  e.strConcat = l;
  function u(v) {
    return typeof v == "number" || typeof v == "boolean" || v === null ? v : m(Array.isArray(v) ? v.join(",") : v);
  }
  function d(v) {
    return new r(m(v));
  }
  e.stringify = d;
  function m(v) {
    return JSON.stringify(v).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = m;
  function f(v) {
    return typeof v == "string" && e.IDENTIFIER.test(v) ? new r(`.${v}`) : o`[${v}]`;
  }
  e.getProperty = f;
  function g(v) {
    if (typeof v == "string" && e.IDENTIFIER.test(v))
      return new r(`${v}`);
    throw new Error(`CodeGen: invalid export name: ${v}, use explicit $id name mapping`);
  }
  e.getEsmExportName = g;
  function y(v) {
    return new r(v.toString());
  }
  e.regexpCode = y;
})(ns);
var ml = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const t = ns;
  class n extends Error {
    constructor(p) {
      super(`CodeGen: "code" for ${p} not defined`), this.value = p.value;
    }
  }
  var r;
  (function(c) {
    c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
  })(r || (e.UsedValueState = r = {})), e.varKinds = {
    const: new t.Name("const"),
    let: new t.Name("let"),
    var: new t.Name("var")
  };
  class o {
    constructor({ prefixes: p, parent: l } = {}) {
      this._names = {}, this._prefixes = p, this._parent = l;
    }
    toName(p) {
      return p instanceof t.Name ? p : this.name(p);
    }
    name(p) {
      return new t.Name(this._newName(p));
    }
    _newName(p) {
      const l = this._names[p] || this._nameGroup(p);
      return `${p}${l.index++}`;
    }
    _nameGroup(p) {
      var l, u;
      if (!((u = (l = this._parent) === null || l === void 0 ? void 0 : l._prefixes) === null || u === void 0) && u.has(p) || this._prefixes && !this._prefixes.has(p))
        throw new Error(`CodeGen: prefix "${p}" is not allowed in this scope`);
      return this._names[p] = { prefix: p, index: 0 };
    }
  }
  e.Scope = o;
  class s extends t.Name {
    constructor(p, l) {
      super(l), this.prefix = p;
    }
    setValue(p, { property: l, itemIndex: u }) {
      this.value = p, this.scopePath = (0, t._)`.${new t.Name(l)}[${u}]`;
    }
  }
  e.ValueScopeName = s;
  const i = (0, t._)`\n`;
  class a extends o {
    constructor(p) {
      super(p), this._values = {}, this._scope = p.scope, this.opts = { ...p, _n: p.lines ? i : t.nil };
    }
    get() {
      return this._scope;
    }
    name(p) {
      return new s(p, this._newName(p));
    }
    value(p, l) {
      var u;
      if (l.ref === void 0)
        throw new Error("CodeGen: ref must be passed in value");
      const d = this.toName(p), { prefix: m } = d, f = (u = l.key) !== null && u !== void 0 ? u : l.ref;
      let g = this._values[m];
      if (g) {
        const b = g.get(f);
        if (b)
          return b;
      } else
        g = this._values[m] = /* @__PURE__ */ new Map();
      g.set(f, d);
      const y = this._scope[m] || (this._scope[m] = []), v = y.length;
      return y[v] = l.ref, d.setValue(l, { property: m, itemIndex: v }), d;
    }
    getValue(p, l) {
      const u = this._values[p];
      if (u)
        return u.get(l);
    }
    scopeRefs(p, l = this._values) {
      return this._reduceValues(l, (u) => {
        if (u.scopePath === void 0)
          throw new Error(`CodeGen: name "${u}" has no value`);
        return (0, t._)`${p}${u.scopePath}`;
      });
    }
    scopeCode(p = this._values, l, u) {
      return this._reduceValues(p, (d) => {
        if (d.value === void 0)
          throw new Error(`CodeGen: name "${d}" has no value`);
        return d.value.code;
      }, l, u);
    }
    _reduceValues(p, l, u = {}, d) {
      let m = t.nil;
      for (const f in p) {
        const g = p[f];
        if (!g)
          continue;
        const y = u[f] = u[f] || /* @__PURE__ */ new Map();
        g.forEach((v) => {
          if (y.has(v))
            return;
          y.set(v, r.Started);
          let b = l(v);
          if (b) {
            const w = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            m = (0, t._)`${m}${w} ${v} = ${b};${this.opts._n}`;
          } else if (b = d == null ? void 0 : d(v))
            m = (0, t._)`${m}${b}${this.opts._n}`;
          else
            throw new n(v);
          y.set(v, r.Completed);
        });
      }
      return m;
    }
  }
  e.ValueScope = a;
})(ml);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const t = ns, n = ml;
  var r = ns;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return r._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return r.str;
  } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
    return r.strConcat;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return r.nil;
  } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
    return r.getProperty;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return r.stringify;
  } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
    return r.regexpCode;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return r.Name;
  } });
  var o = ml;
  Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
    return o.Scope;
  } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
    return o.ValueScope;
  } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
    return o.ValueScopeName;
  } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
    return o.varKinds;
  } }), e.operators = {
    GT: new t._Code(">"),
    GTE: new t._Code(">="),
    LT: new t._Code("<"),
    LTE: new t._Code("<="),
    EQ: new t._Code("==="),
    NEQ: new t._Code("!=="),
    NOT: new t._Code("!"),
    OR: new t._Code("||"),
    AND: new t._Code("&&"),
    ADD: new t._Code("+")
  };
  class s {
    optimizeNodes() {
      return this;
    }
    optimizeNames(h, _) {
      return this;
    }
  }
  class i extends s {
    constructor(h, _, A) {
      super(), this.varKind = h, this.name = _, this.rhs = A;
    }
    render({ es5: h, _n: _ }) {
      const A = h ? n.varKinds.var : this.varKind, $ = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${A} ${this.name}${$};` + _;
    }
    optimizeNames(h, _) {
      if (h[this.name.str])
        return this.rhs && (this.rhs = F(this.rhs, h, _)), this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }
  class a extends s {
    constructor(h, _, A) {
      super(), this.lhs = h, this.rhs = _, this.sideEffects = A;
    }
    render({ _n: h }) {
      return `${this.lhs} = ${this.rhs};` + h;
    }
    optimizeNames(h, _) {
      if (!(this.lhs instanceof t.Name && !h[this.lhs.str] && !this.sideEffects))
        return this.rhs = F(this.rhs, h, _), this;
    }
    get names() {
      const h = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
      return H(h, this.rhs);
    }
  }
  class c extends a {
    constructor(h, _, A, $) {
      super(h, A, $), this.op = _;
    }
    render({ _n: h }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + h;
    }
  }
  class p extends s {
    constructor(h) {
      super(), this.label = h, this.names = {};
    }
    render({ _n: h }) {
      return `${this.label}:` + h;
    }
  }
  class l extends s {
    constructor(h) {
      super(), this.label = h, this.names = {};
    }
    render({ _n: h }) {
      return `break${this.label ? ` ${this.label}` : ""};` + h;
    }
  }
  class u extends s {
    constructor(h) {
      super(), this.error = h;
    }
    render({ _n: h }) {
      return `throw ${this.error};` + h;
    }
    get names() {
      return this.error.names;
    }
  }
  class d extends s {
    constructor(h) {
      super(), this.code = h;
    }
    render({ _n: h }) {
      return `${this.code};` + h;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(h, _) {
      return this.code = F(this.code, h, _), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }
  class m extends s {
    constructor(h = []) {
      super(), this.nodes = h;
    }
    render(h) {
      return this.nodes.reduce((_, A) => _ + A.render(h), "");
    }
    optimizeNodes() {
      const { nodes: h } = this;
      let _ = h.length;
      for (; _--; ) {
        const A = h[_].optimizeNodes();
        Array.isArray(A) ? h.splice(_, 1, ...A) : A ? h[_] = A : h.splice(_, 1);
      }
      return h.length > 0 ? this : void 0;
    }
    optimizeNames(h, _) {
      const { nodes: A } = this;
      let $ = A.length;
      for (; $--; ) {
        const x = A[$];
        x.optimizeNames(h, _) || (U(h, x.names), A.splice($, 1));
      }
      return A.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((h, _) => z(h, _.names), {});
    }
  }
  class f extends m {
    render(h) {
      return "{" + h._n + super.render(h) + "}" + h._n;
    }
  }
  class g extends m {
  }
  class y extends f {
  }
  y.kind = "else";
  class v extends f {
    constructor(h, _) {
      super(_), this.condition = h;
    }
    render(h) {
      let _ = `if(${this.condition})` + super.render(h);
      return this.else && (_ += "else " + this.else.render(h)), _;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const h = this.condition;
      if (h === !0)
        return this.nodes;
      let _ = this.else;
      if (_) {
        const A = _.optimizeNodes();
        _ = this.else = Array.isArray(A) ? new y(A) : A;
      }
      if (_)
        return h === !1 ? _ instanceof v ? _ : _.nodes : this.nodes.length ? this : new v(G(h), _ instanceof v ? [_] : _.nodes);
      if (!(h === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(h, _) {
      var A;
      if (this.else = (A = this.else) === null || A === void 0 ? void 0 : A.optimizeNames(h, _), !!(super.optimizeNames(h, _) || this.else))
        return this.condition = F(this.condition, h, _), this;
    }
    get names() {
      const h = super.names;
      return H(h, this.condition), this.else && z(h, this.else.names), h;
    }
  }
  v.kind = "if";
  class b extends f {
  }
  b.kind = "for";
  class w extends b {
    constructor(h) {
      super(), this.iteration = h;
    }
    render(h) {
      return `for(${this.iteration})` + super.render(h);
    }
    optimizeNames(h, _) {
      if (super.optimizeNames(h, _))
        return this.iteration = F(this.iteration, h, _), this;
    }
    get names() {
      return z(super.names, this.iteration.names);
    }
  }
  class T extends b {
    constructor(h, _, A, $) {
      super(), this.varKind = h, this.name = _, this.from = A, this.to = $;
    }
    render(h) {
      const _ = h.es5 ? n.varKinds.var : this.varKind, { name: A, from: $, to: x } = this;
      return `for(${_} ${A}=${$}; ${A}<${x}; ${A}++)` + super.render(h);
    }
    get names() {
      const h = H(super.names, this.from);
      return H(h, this.to);
    }
  }
  class P extends b {
    constructor(h, _, A, $) {
      super(), this.loop = h, this.varKind = _, this.name = A, this.iterable = $;
    }
    render(h) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(h);
    }
    optimizeNames(h, _) {
      if (super.optimizeNames(h, _))
        return this.iterable = F(this.iterable, h, _), this;
    }
    get names() {
      return z(super.names, this.iterable.names);
    }
  }
  class C extends f {
    constructor(h, _, A) {
      super(), this.name = h, this.args = _, this.async = A;
    }
    render(h) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(h);
    }
  }
  C.kind = "func";
  class B extends m {
    render(h) {
      return "return " + super.render(h);
    }
  }
  B.kind = "return";
  class k extends f {
    render(h) {
      let _ = "try" + super.render(h);
      return this.catch && (_ += this.catch.render(h)), this.finally && (_ += this.finally.render(h)), _;
    }
    optimizeNodes() {
      var h, _;
      return super.optimizeNodes(), (h = this.catch) === null || h === void 0 || h.optimizeNodes(), (_ = this.finally) === null || _ === void 0 || _.optimizeNodes(), this;
    }
    optimizeNames(h, _) {
      var A, $;
      return super.optimizeNames(h, _), (A = this.catch) === null || A === void 0 || A.optimizeNames(h, _), ($ = this.finally) === null || $ === void 0 || $.optimizeNames(h, _), this;
    }
    get names() {
      const h = super.names;
      return this.catch && z(h, this.catch.names), this.finally && z(h, this.finally.names), h;
    }
  }
  class E extends f {
    constructor(h) {
      super(), this.error = h;
    }
    render(h) {
      return `catch(${this.error})` + super.render(h);
    }
  }
  E.kind = "catch";
  class q extends f {
    render(h) {
      return "finally" + super.render(h);
    }
  }
  q.kind = "finally";
  class I {
    constructor(h, _ = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ..._, _n: _.lines ? `
` : "" }, this._extScope = h, this._scope = new n.Scope({ parent: h }), this._nodes = [new g()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    // returns unique name in the internal scope
    name(h) {
      return this._scope.name(h);
    }
    // reserves unique name in the external scope
    scopeName(h) {
      return this._extScope.name(h);
    }
    // reserves unique name in the external scope and assigns value to it
    scopeValue(h, _) {
      const A = this._extScope.value(h, _);
      return (this._values[A.prefix] || (this._values[A.prefix] = /* @__PURE__ */ new Set())).add(A), A;
    }
    getScopeValue(h, _) {
      return this._extScope.getValue(h, _);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(h) {
      return this._extScope.scopeRefs(h, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(h, _, A, $) {
      const x = this._scope.toName(_);
      return A !== void 0 && $ && (this._constants[x.str] = A), this._leafNode(new i(h, x, A)), x;
    }
    // `const` declaration (`var` in es5 mode)
    const(h, _, A) {
      return this._def(n.varKinds.const, h, _, A);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(h, _, A) {
      return this._def(n.varKinds.let, h, _, A);
    }
    // `var` declaration with optional assignment
    var(h, _, A) {
      return this._def(n.varKinds.var, h, _, A);
    }
    // assignment code
    assign(h, _, A) {
      return this._leafNode(new a(h, _, A));
    }
    // `+=` code
    add(h, _) {
      return this._leafNode(new c(h, e.operators.ADD, _));
    }
    // appends passed SafeExpr to code or executes Block
    code(h) {
      return typeof h == "function" ? h() : h !== t.nil && this._leafNode(new d(h)), this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...h) {
      const _ = ["{"];
      for (const [A, $] of h)
        _.length > 1 && _.push(","), _.push(A), (A !== $ || this.opts.es5) && (_.push(":"), (0, t.addCodeArg)(_, $));
      return _.push("}"), new t._Code(_);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(h, _, A) {
      if (this._blockNode(new v(h)), _ && A)
        this.code(_).else().code(A).endIf();
      else if (_)
        this.code(_).endIf();
      else if (A)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(h) {
      return this._elseNode(new v(h));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new y());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(v, y);
    }
    _for(h, _) {
      return this._blockNode(h), _ && this.code(_).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(h, _) {
      return this._for(new w(h), _);
    }
    // `for` statement for a range of values
    forRange(h, _, A, $, x = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
      const j = this._scope.toName(h);
      return this._for(new T(x, j, _, A), () => $(j));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(h, _, A, $ = n.varKinds.const) {
      const x = this._scope.toName(h);
      if (this.opts.es5) {
        const j = _ instanceof t.Name ? _ : this.var("_arr", _);
        return this.forRange("_i", 0, (0, t._)`${j}.length`, (R) => {
          this.var(x, (0, t._)`${j}[${R}]`), A(x);
        });
      }
      return this._for(new P("of", $, x, _), () => A(x));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(h, _, A, $ = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(h, (0, t._)`Object.keys(${_})`, A);
      const x = this._scope.toName(h);
      return this._for(new P("in", $, x, _), () => A(x));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode(b);
    }
    // `label` statement
    label(h) {
      return this._leafNode(new p(h));
    }
    // `break` statement
    break(h) {
      return this._leafNode(new l(h));
    }
    // `return` statement
    return(h) {
      const _ = new B();
      if (this._blockNode(_), this.code(h), _.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(B);
    }
    // `try` statement
    try(h, _, A) {
      if (!_ && !A)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const $ = new k();
      if (this._blockNode($), this.code(h), _) {
        const x = this.name("e");
        this._currNode = $.catch = new E(x), _(x);
      }
      return A && (this._currNode = $.finally = new q(), this.code(A)), this._endBlockNode(E, q);
    }
    // `throw` statement
    throw(h) {
      return this._leafNode(new u(h));
    }
    // start self-balancing block
    block(h, _) {
      return this._blockStarts.push(this._nodes.length), h && this.code(h).endBlock(_), this;
    }
    // end the current self-balancing block
    endBlock(h) {
      const _ = this._blockStarts.pop();
      if (_ === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const A = this._nodes.length - _;
      if (A < 0 || h !== void 0 && A !== h)
        throw new Error(`CodeGen: wrong number of nodes: ${A} vs ${h} expected`);
      return this._nodes.length = _, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(h, _ = t.nil, A, $) {
      return this._blockNode(new C(h, _, A)), $ && this.code($).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(C);
    }
    optimize(h = 1) {
      for (; h-- > 0; )
        this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(h) {
      return this._currNode.nodes.push(h), this;
    }
    _blockNode(h) {
      this._currNode.nodes.push(h), this._nodes.push(h);
    }
    _endBlockNode(h, _) {
      const A = this._currNode;
      if (A instanceof h || _ && A instanceof _)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${_ ? `${h.kind}/${_.kind}` : h.kind}"`);
    }
    _elseNode(h) {
      const _ = this._currNode;
      if (!(_ instanceof v))
        throw new Error('CodeGen: "else" without "if"');
      return this._currNode = _.else = h, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const h = this._nodes;
      return h[h.length - 1];
    }
    set _currNode(h) {
      const _ = this._nodes;
      _[_.length - 1] = h;
    }
  }
  e.CodeGen = I;
  function z(O, h) {
    for (const _ in h)
      O[_] = (O[_] || 0) + (h[_] || 0);
    return O;
  }
  function H(O, h) {
    return h instanceof t._CodeOrName ? z(O, h.names) : O;
  }
  function F(O, h, _) {
    if (O instanceof t.Name)
      return A(O);
    if (!$(O))
      return O;
    return new t._Code(O._items.reduce((x, j) => (j instanceof t.Name && (j = A(j)), j instanceof t._Code ? x.push(...j._items) : x.push(j), x), []));
    function A(x) {
      const j = _[x.str];
      return j === void 0 || h[x.str] !== 1 ? x : (delete h[x.str], j);
    }
    function $(x) {
      return x instanceof t._Code && x._items.some((j) => j instanceof t.Name && h[j.str] === 1 && _[j.str] !== void 0);
    }
  }
  function U(O, h) {
    for (const _ in h)
      O[_] = (O[_] || 0) - (h[_] || 0);
  }
  function G(O) {
    return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${N(O)}`;
  }
  e.not = G;
  const V = S(e.operators.AND);
  function K(...O) {
    return O.reduce(V);
  }
  e.and = K;
  const X = S(e.operators.OR);
  function D(...O) {
    return O.reduce(X);
  }
  e.or = D;
  function S(O) {
    return (h, _) => h === t.nil ? _ : _ === t.nil ? h : (0, t._)`${N(h)} ${O} ${N(_)}`;
  }
  function N(O) {
    return O instanceof t.Name ? O : (0, t._)`(${O})`;
  }
})(ce);
var J = {};
Object.defineProperty(J, "__esModule", { value: !0 });
J.checkStrictMode = J.getErrorPath = J.Type = J.useFunc = J.setEvaluated = J.evaluatedPropsToName = J.mergeEvaluated = J.eachItem = J.unescapeJsonPointer = J.escapeJsonPointer = J.escapeFragment = J.unescapeFragment = J.schemaRefOrVal = J.schemaHasRulesButRef = J.schemaHasRules = J.checkUnknownRules = J.alwaysValidSchema = J.toHash = void 0;
const we = ce, IZ = ns;
function kZ(e) {
  const t = {};
  for (const n of e)
    t[n] = !0;
  return t;
}
J.toHash = kZ;
function CZ(e, t) {
  return typeof t == "boolean" ? t : Object.keys(t).length === 0 ? !0 : (Yy(e, t), !Qy(t, e.self.RULES.all));
}
J.alwaysValidSchema = CZ;
function Yy(e, t = e.schema) {
  const { opts: n, self: r } = e;
  if (!n.strictSchema || typeof t == "boolean")
    return;
  const o = r.RULES.keywords;
  for (const s in t)
    o[s] || tg(e, `unknown keyword: "${s}"`);
}
J.checkUnknownRules = Yy;
function Qy(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t[n])
      return !0;
  return !1;
}
J.schemaHasRules = Qy;
function jZ(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (n !== "$ref" && t.all[n])
      return !0;
  return !1;
}
J.schemaHasRulesButRef = jZ;
function LZ({ topSchemaRef: e, schemaPath: t }, n, r, o) {
  if (!o) {
    if (typeof n == "number" || typeof n == "boolean")
      return n;
    if (typeof n == "string")
      return (0, we._)`${n}`;
  }
  return (0, we._)`${e}${t}${(0, we.getProperty)(r)}`;
}
J.schemaRefOrVal = LZ;
function qZ(e) {
  return Zy(decodeURIComponent(e));
}
J.unescapeFragment = qZ;
function FZ(e) {
  return encodeURIComponent(fu(e));
}
J.escapeFragment = FZ;
function fu(e) {
  return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
J.escapeJsonPointer = fu;
function Zy(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
J.unescapeJsonPointer = Zy;
function MZ(e, t) {
  if (Array.isArray(e))
    for (const n of e)
      t(n);
  else
    t(e);
}
J.eachItem = MZ;
function If({ mergeNames: e, mergeToName: t, mergeValues: n, resultToName: r }) {
  return (o, s, i, a) => {
    const c = i === void 0 ? s : i instanceof we.Name ? (s instanceof we.Name ? e(o, s, i) : t(o, s, i), i) : s instanceof we.Name ? (t(o, i, s), s) : n(s, i);
    return a === we.Name && !(c instanceof we.Name) ? r(o, c) : c;
  };
}
J.mergeEvaluated = {
  props: If({
    mergeNames: (e, t, n) => e.if((0, we._)`${n} !== true && ${t} !== undefined`, () => {
      e.if((0, we._)`${t} === true`, () => e.assign(n, !0), () => e.assign(n, (0, we._)`${n} || {}`).code((0, we._)`Object.assign(${n}, ${t})`));
    }),
    mergeToName: (e, t, n) => e.if((0, we._)`${n} !== true`, () => {
      t === !0 ? e.assign(n, !0) : (e.assign(n, (0, we._)`${n} || {}`), mu(e, n, t));
    }),
    mergeValues: (e, t) => e === !0 ? !0 : { ...e, ...t },
    resultToName: eg
  }),
  items: If({
    mergeNames: (e, t, n) => e.if((0, we._)`${n} !== true && ${t} !== undefined`, () => e.assign(n, (0, we._)`${t} === true ? true : ${n} > ${t} ? ${n} : ${t}`)),
    mergeToName: (e, t, n) => e.if((0, we._)`${n} !== true`, () => e.assign(n, t === !0 ? !0 : (0, we._)`${n} > ${t} ? ${n} : ${t}`)),
    mergeValues: (e, t) => e === !0 ? !0 : Math.max(e, t),
    resultToName: (e, t) => e.var("items", t)
  })
};
function eg(e, t) {
  if (t === !0)
    return e.var("props", !0);
  const n = e.var("props", (0, we._)`{}`);
  return t !== void 0 && mu(e, n, t), n;
}
J.evaluatedPropsToName = eg;
function mu(e, t, n) {
  Object.keys(n).forEach((r) => e.assign((0, we._)`${t}${(0, we.getProperty)(r)}`, !0));
}
J.setEvaluated = mu;
const kf = {};
function UZ(e, t) {
  return e.scopeValue("func", {
    ref: t,
    code: kf[t.code] || (kf[t.code] = new IZ._Code(t.code))
  });
}
J.useFunc = UZ;
var hl;
(function(e) {
  e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
})(hl || (J.Type = hl = {}));
function VZ(e, t, n) {
  if (e instanceof we.Name) {
    const r = t === hl.Num;
    return n ? r ? (0, we._)`"[" + ${e} + "]"` : (0, we._)`"['" + ${e} + "']"` : r ? (0, we._)`"/" + ${e}` : (0, we._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
  }
  return n ? (0, we.getProperty)(e).toString() : "/" + fu(e);
}
J.getErrorPath = VZ;
function tg(e, t, n = e.opts.strictSchema) {
  if (n) {
    if (t = `strict mode: ${t}`, n === !0)
      throw new Error(t);
    e.self.logger.warn(t);
  }
}
J.checkStrictMode = tg;
var St = {};
Object.defineProperty(St, "__esModule", { value: !0 });
const tt = ce, zZ = {
  // validation function arguments
  data: new tt.Name("data"),
  // data passed to validation function
  // args passed from referencing schema
  valCxt: new tt.Name("valCxt"),
  // validation/data context - should not be used directly, it is destructured to the names below
  instancePath: new tt.Name("instancePath"),
  parentData: new tt.Name("parentData"),
  parentDataProperty: new tt.Name("parentDataProperty"),
  rootData: new tt.Name("rootData"),
  // root data - same as the data passed to the first/top validation function
  dynamicAnchors: new tt.Name("dynamicAnchors"),
  // used to support recursiveRef and dynamicRef
  // function scoped variables
  vErrors: new tt.Name("vErrors"),
  // null or array of validation errors
  errors: new tt.Name("errors"),
  // counter of validation errors
  this: new tt.Name("this"),
  // "globals"
  self: new tt.Name("self"),
  scope: new tt.Name("scope"),
  // JTD serialize/parse name for JSON string and position
  json: new tt.Name("json"),
  jsonPos: new tt.Name("jsonPos"),
  jsonLen: new tt.Name("jsonLen"),
  jsonPart: new tt.Name("jsonPart")
};
St.default = zZ;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
  const t = ce, n = J, r = St;
  e.keywordError = {
    message: ({ keyword: y }) => (0, t.str)`must pass "${y}" keyword validation`
  }, e.keyword$DataError = {
    message: ({ keyword: y, schemaType: v }) => v ? (0, t.str)`"${y}" keyword must be ${v} ($data)` : (0, t.str)`"${y}" keyword is invalid ($data)`
  };
  function o(y, v = e.keywordError, b, w) {
    const { it: T } = y, { gen: P, compositeRule: C, allErrors: B } = T, k = u(y, v, b);
    w ?? (C || B) ? c(P, k) : p(T, (0, t._)`[${k}]`);
  }
  e.reportError = o;
  function s(y, v = e.keywordError, b) {
    const { it: w } = y, { gen: T, compositeRule: P, allErrors: C } = w, B = u(y, v, b);
    c(T, B), P || C || p(w, r.default.vErrors);
  }
  e.reportExtraError = s;
  function i(y, v) {
    y.assign(r.default.errors, v), y.if((0, t._)`${r.default.vErrors} !== null`, () => y.if(v, () => y.assign((0, t._)`${r.default.vErrors}.length`, v), () => y.assign(r.default.vErrors, null)));
  }
  e.resetErrorsCount = i;
  function a({ gen: y, keyword: v, schemaValue: b, data: w, errsCount: T, it: P }) {
    if (T === void 0)
      throw new Error("ajv implementation error");
    const C = y.name("err");
    y.forRange("i", T, r.default.errors, (B) => {
      y.const(C, (0, t._)`${r.default.vErrors}[${B}]`), y.if((0, t._)`${C}.instancePath === undefined`, () => y.assign((0, t._)`${C}.instancePath`, (0, t.strConcat)(r.default.instancePath, P.errorPath))), y.assign((0, t._)`${C}.schemaPath`, (0, t.str)`${P.errSchemaPath}/${v}`), P.opts.verbose && (y.assign((0, t._)`${C}.schema`, b), y.assign((0, t._)`${C}.data`, w));
    });
  }
  e.extendErrors = a;
  function c(y, v) {
    const b = y.const("err", v);
    y.if((0, t._)`${r.default.vErrors} === null`, () => y.assign(r.default.vErrors, (0, t._)`[${b}]`), (0, t._)`${r.default.vErrors}.push(${b})`), y.code((0, t._)`${r.default.errors}++`);
  }
  function p(y, v) {
    const { gen: b, validateName: w, schemaEnv: T } = y;
    T.$async ? b.throw((0, t._)`new ${y.ValidationError}(${v})`) : (b.assign((0, t._)`${w}.errors`, v), b.return(!1));
  }
  const l = {
    keyword: new t.Name("keyword"),
    schemaPath: new t.Name("schemaPath"),
    // also used in JTD errors
    params: new t.Name("params"),
    propertyName: new t.Name("propertyName"),
    message: new t.Name("message"),
    schema: new t.Name("schema"),
    parentSchema: new t.Name("parentSchema")
  };
  function u(y, v, b) {
    const { createErrors: w } = y.it;
    return w === !1 ? (0, t._)`{}` : d(y, v, b);
  }
  function d(y, v, b = {}) {
    const { gen: w, it: T } = y, P = [
      m(T, b),
      f(y, b)
    ];
    return g(y, v, P), w.object(...P);
  }
  function m({ errorPath: y }, { instancePath: v }) {
    const b = v ? (0, t.str)`${y}${(0, n.getErrorPath)(v, n.Type.Str)}` : y;
    return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, b)];
  }
  function f({ keyword: y, it: { errSchemaPath: v } }, { schemaPath: b, parentSchema: w }) {
    let T = w ? v : (0, t.str)`${v}/${y}`;
    return b && (T = (0, t.str)`${T}${(0, n.getErrorPath)(b, n.Type.Str)}`), [l.schemaPath, T];
  }
  function g(y, { params: v, message: b }, w) {
    const { keyword: T, data: P, schemaValue: C, it: B } = y, { opts: k, propertyName: E, topSchemaRef: q, schemaPath: I } = B;
    w.push([l.keyword, T], [l.params, typeof v == "function" ? v(y) : v || (0, t._)`{}`]), k.messages && w.push([l.message, typeof b == "function" ? b(y) : b]), k.verbose && w.push([l.schema, C], [l.parentSchema, (0, t._)`${q}${I}`], [r.default.data, P]), E && w.push([l.propertyName, E]);
  }
})(ms);
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.boolOrEmptySchema = uo.topBoolOrEmptySchema = void 0;
const BZ = ms, GZ = ce, HZ = St, XZ = {
  message: "boolean schema is false"
};
function KZ(e) {
  const { gen: t, schema: n, validateName: r } = e;
  n === !1 ? ng(e, !1) : typeof n == "object" && n.$async === !0 ? t.return(HZ.default.data) : (t.assign((0, GZ._)`${r}.errors`, null), t.return(!0));
}
uo.topBoolOrEmptySchema = KZ;
function WZ(e, t) {
  const { gen: n, schema: r } = e;
  r === !1 ? (n.var(t, !1), ng(e)) : n.var(t, !0);
}
uo.boolOrEmptySchema = WZ;
function ng(e, t) {
  const { gen: n, data: r } = e, o = {
    gen: n,
    keyword: "false schema",
    data: r,
    schema: !1,
    schemaCode: !1,
    schemaValue: !1,
    params: {},
    it: e
  };
  (0, BZ.reportError)(o, XZ, void 0, t);
}
var je = {}, Ar = {};
Object.defineProperty(Ar, "__esModule", { value: !0 });
Ar.getRules = Ar.isJSONType = void 0;
const JZ = ["string", "number", "integer", "boolean", "null", "object", "array"], YZ = new Set(JZ);
function QZ(e) {
  return typeof e == "string" && YZ.has(e);
}
Ar.isJSONType = QZ;
function ZZ() {
  const e = {
    number: { type: "number", rules: [] },
    string: { type: "string", rules: [] },
    array: { type: "array", rules: [] },
    object: { type: "object", rules: [] }
  };
  return {
    types: { ...e, integer: !0, boolean: !0, null: !0 },
    rules: [{ rules: [] }, e.number, e.string, e.array, e.object],
    post: { rules: [] },
    all: {},
    keywords: {}
  };
}
Ar.getRules = ZZ;
var En = {};
Object.defineProperty(En, "__esModule", { value: !0 });
En.shouldUseRule = En.shouldUseGroup = En.schemaHasRulesForType = void 0;
function eee({ schema: e, self: t }, n) {
  const r = t.RULES.types[n];
  return r && r !== !0 && rg(e, r);
}
En.schemaHasRulesForType = eee;
function rg(e, t) {
  return t.rules.some((n) => og(e, n));
}
En.shouldUseGroup = rg;
function og(e, t) {
  var n;
  return e[t.keyword] !== void 0 || ((n = t.definition.implements) === null || n === void 0 ? void 0 : n.some((r) => e[r] !== void 0));
}
En.shouldUseRule = og;
Object.defineProperty(je, "__esModule", { value: !0 });
je.reportTypeError = je.checkDataTypes = je.checkDataType = je.coerceAndCheckDataType = je.getJSONTypes = je.getSchemaTypes = je.DataType = void 0;
const tee = Ar, nee = En, ree = ms, le = ce, sg = J;
var Zr;
(function(e) {
  e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
})(Zr || (je.DataType = Zr = {}));
function oee(e) {
  const t = ig(e.type);
  if (t.includes("null")) {
    if (e.nullable === !1)
      throw new Error("type: null contradicts nullable: false");
  } else {
    if (!t.length && e.nullable !== void 0)
      throw new Error('"nullable" cannot be used without "type"');
    e.nullable === !0 && t.push("null");
  }
  return t;
}
je.getSchemaTypes = oee;
function ig(e) {
  const t = Array.isArray(e) ? e : e ? [e] : [];
  if (t.every(tee.isJSONType))
    return t;
  throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
}
je.getJSONTypes = ig;
function see(e, t) {
  const { gen: n, data: r, opts: o } = e, s = iee(t, o.coerceTypes), i = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, nee.schemaHasRulesForType)(e, t[0]));
  if (i) {
    const a = hu(t, r, o.strictNumbers, Zr.Wrong);
    n.if(a, () => {
      s.length ? aee(e, t, s) : yu(e);
    });
  }
  return i;
}
je.coerceAndCheckDataType = see;
const ag = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
function iee(e, t) {
  return t ? e.filter((n) => ag.has(n) || t === "array" && n === "array") : [];
}
function aee(e, t, n) {
  const { gen: r, data: o, opts: s } = e, i = r.let("dataType", (0, le._)`typeof ${o}`), a = r.let("coerced", (0, le._)`undefined`);
  s.coerceTypes === "array" && r.if((0, le._)`${i} == 'object' && Array.isArray(${o}) && ${o}.length == 1`, () => r.assign(o, (0, le._)`${o}[0]`).assign(i, (0, le._)`typeof ${o}`).if(hu(t, o, s.strictNumbers), () => r.assign(a, o))), r.if((0, le._)`${a} !== undefined`);
  for (const p of n)
    (ag.has(p) || p === "array" && s.coerceTypes === "array") && c(p);
  r.else(), yu(e), r.endIf(), r.if((0, le._)`${a} !== undefined`, () => {
    r.assign(o, a), cee(e, a);
  });
  function c(p) {
    switch (p) {
      case "string":
        r.elseIf((0, le._)`${i} == "number" || ${i} == "boolean"`).assign(a, (0, le._)`"" + ${o}`).elseIf((0, le._)`${o} === null`).assign(a, (0, le._)`""`);
        return;
      case "number":
        r.elseIf((0, le._)`${i} == "boolean" || ${o} === null
              || (${i} == "string" && ${o} && ${o} == +${o})`).assign(a, (0, le._)`+${o}`);
        return;
      case "integer":
        r.elseIf((0, le._)`${i} === "boolean" || ${o} === null
              || (${i} === "string" && ${o} && ${o} == +${o} && !(${o} % 1))`).assign(a, (0, le._)`+${o}`);
        return;
      case "boolean":
        r.elseIf((0, le._)`${o} === "false" || ${o} === 0 || ${o} === null`).assign(a, !1).elseIf((0, le._)`${o} === "true" || ${o} === 1`).assign(a, !0);
        return;
      case "null":
        r.elseIf((0, le._)`${o} === "" || ${o} === 0 || ${o} === false`), r.assign(a, null);
        return;
      case "array":
        r.elseIf((0, le._)`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${o} === null`).assign(a, (0, le._)`[${o}]`);
    }
  }
}
function cee({ gen: e, parentData: t, parentDataProperty: n }, r) {
  e.if((0, le._)`${t} !== undefined`, () => e.assign((0, le._)`${t}[${n}]`, r));
}
function yl(e, t, n, r = Zr.Correct) {
  const o = r === Zr.Correct ? le.operators.EQ : le.operators.NEQ;
  let s;
  switch (e) {
    case "null":
      return (0, le._)`${t} ${o} null`;
    case "array":
      s = (0, le._)`Array.isArray(${t})`;
      break;
    case "object":
      s = (0, le._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
      break;
    case "integer":
      s = i((0, le._)`!(${t} % 1) && !isNaN(${t})`);
      break;
    case "number":
      s = i();
      break;
    default:
      return (0, le._)`typeof ${t} ${o} ${e}`;
  }
  return r === Zr.Correct ? s : (0, le.not)(s);
  function i(a = le.nil) {
    return (0, le.and)((0, le._)`typeof ${t} == "number"`, a, n ? (0, le._)`isFinite(${t})` : le.nil);
  }
}
je.checkDataType = yl;
function hu(e, t, n, r) {
  if (e.length === 1)
    return yl(e[0], t, n, r);
  let o;
  const s = (0, sg.toHash)(e);
  if (s.array && s.object) {
    const i = (0, le._)`typeof ${t} != "object"`;
    o = s.null ? i : (0, le._)`!${t} || ${i}`, delete s.null, delete s.array, delete s.object;
  } else
    o = le.nil;
  s.number && delete s.integer;
  for (const i in s)
    o = (0, le.and)(o, yl(i, t, n, r));
  return o;
}
je.checkDataTypes = hu;
const lee = {
  message: ({ schema: e }) => `must be ${e}`,
  params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, le._)`{type: ${e}}` : (0, le._)`{type: ${t}}`
};
function yu(e) {
  const t = uee(e);
  (0, ree.reportError)(t, lee);
}
je.reportTypeError = yu;
function uee(e) {
  const { gen: t, data: n, schema: r } = e, o = (0, sg.schemaRefOrVal)(e, r, "type");
  return {
    gen: t,
    keyword: "type",
    data: n,
    schema: r.type,
    schemaCode: o,
    schemaValue: o,
    parentSchema: r,
    params: {},
    it: e
  };
}
var ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.assignDefaults = void 0;
const qr = ce, pee = J;
function dee(e, t) {
  const { properties: n, items: r } = e.schema;
  if (t === "object" && n)
    for (const o in n)
      Cf(e, o, n[o].default);
  else t === "array" && Array.isArray(r) && r.forEach((o, s) => Cf(e, s, o.default));
}
ea.assignDefaults = dee;
function Cf(e, t, n) {
  const { gen: r, compositeRule: o, data: s, opts: i } = e;
  if (n === void 0)
    return;
  const a = (0, qr._)`${s}${(0, qr.getProperty)(t)}`;
  if (o) {
    (0, pee.checkStrictMode)(e, `default is ignored for: ${a}`);
    return;
  }
  let c = (0, qr._)`${a} === undefined`;
  i.useDefaults === "empty" && (c = (0, qr._)`${c} || ${a} === null || ${a} === ""`), r.if(c, (0, qr._)`${a} = ${(0, qr.stringify)(n)}`);
}
var cn = {}, fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.validateUnion = fe.validateArray = fe.usePattern = fe.callValidateCode = fe.schemaProperties = fe.allSchemaProperties = fe.noPropertyInData = fe.propertyInData = fe.isOwnProperty = fe.hasPropFunc = fe.reportMissingProp = fe.checkMissingProp = fe.checkReportMissingProp = void 0;
const $e = ce, gu = J, Cn = St, fee = J;
function mee(e, t) {
  const { gen: n, data: r, it: o } = e;
  n.if(bu(n, r, t, o.opts.ownProperties), () => {
    e.setParams({ missingProperty: (0, $e._)`${t}` }, !0), e.error();
  });
}
fe.checkReportMissingProp = mee;
function hee({ gen: e, data: t, it: { opts: n } }, r, o) {
  return (0, $e.or)(...r.map((s) => (0, $e.and)(bu(e, t, s, n.ownProperties), (0, $e._)`${o} = ${s}`)));
}
fe.checkMissingProp = hee;
function yee(e, t) {
  e.setParams({ missingProperty: t }, !0), e.error();
}
fe.reportMissingProp = yee;
function cg(e) {
  return e.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, $e._)`Object.prototype.hasOwnProperty`
  });
}
fe.hasPropFunc = cg;
function vu(e, t, n) {
  return (0, $e._)`${cg(e)}.call(${t}, ${n})`;
}
fe.isOwnProperty = vu;
function gee(e, t, n, r) {
  const o = (0, $e._)`${t}${(0, $e.getProperty)(n)} !== undefined`;
  return r ? (0, $e._)`${o} && ${vu(e, t, n)}` : o;
}
fe.propertyInData = gee;
function bu(e, t, n, r) {
  const o = (0, $e._)`${t}${(0, $e.getProperty)(n)} === undefined`;
  return r ? (0, $e.or)(o, (0, $e.not)(vu(e, t, n))) : o;
}
fe.noPropertyInData = bu;
function lg(e) {
  return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
}
fe.allSchemaProperties = lg;
function vee(e, t) {
  return lg(t).filter((n) => !(0, gu.alwaysValidSchema)(e, t[n]));
}
fe.schemaProperties = vee;
function bee({ schemaCode: e, data: t, it: { gen: n, topSchemaRef: r, schemaPath: o, errorPath: s }, it: i }, a, c, p) {
  const l = p ? (0, $e._)`${e}, ${t}, ${r}${o}` : t, u = [
    [Cn.default.instancePath, (0, $e.strConcat)(Cn.default.instancePath, s)],
    [Cn.default.parentData, i.parentData],
    [Cn.default.parentDataProperty, i.parentDataProperty],
    [Cn.default.rootData, Cn.default.rootData]
  ];
  i.opts.dynamicRef && u.push([Cn.default.dynamicAnchors, Cn.default.dynamicAnchors]);
  const d = (0, $e._)`${l}, ${n.object(...u)}`;
  return c !== $e.nil ? (0, $e._)`${a}.call(${c}, ${d})` : (0, $e._)`${a}(${d})`;
}
fe.callValidateCode = bee;
const wee = (0, $e._)`new RegExp`;
function xee({ gen: e, it: { opts: t } }, n) {
  const r = t.unicodeRegExp ? "u" : "", { regExp: o } = t.code, s = o(n, r);
  return e.scopeValue("pattern", {
    key: s.toString(),
    ref: s,
    code: (0, $e._)`${o.code === "new RegExp" ? wee : (0, fee.useFunc)(e, o)}(${n}, ${r})`
  });
}
fe.usePattern = xee;
function _ee(e) {
  const { gen: t, data: n, keyword: r, it: o } = e, s = t.name("valid");
  if (o.allErrors) {
    const a = t.let("valid", !0);
    return i(() => t.assign(a, !1)), a;
  }
  return t.var(s, !0), i(() => t.break()), s;
  function i(a) {
    const c = t.const("len", (0, $e._)`${n}.length`);
    t.forRange("i", 0, c, (p) => {
      e.subschema({
        keyword: r,
        dataProp: p,
        dataPropType: gu.Type.Num
      }, s), t.if((0, $e.not)(s), a);
    });
  }
}
fe.validateArray = _ee;
function $ee(e) {
  const { gen: t, schema: n, keyword: r, it: o } = e;
  if (!Array.isArray(n))
    throw new Error("ajv implementation error");
  if (n.some((c) => (0, gu.alwaysValidSchema)(o, c)) && !o.opts.unevaluated)
    return;
  const i = t.let("valid", !1), a = t.name("_valid");
  t.block(() => n.forEach((c, p) => {
    const l = e.subschema({
      keyword: r,
      schemaProp: p,
      compositeRule: !0
    }, a);
    t.assign(i, (0, $e._)`${i} || ${a}`), e.mergeValidEvaluated(l, a) || t.if((0, $e.not)(i));
  })), e.result(i, () => e.reset(), () => e.error(!0));
}
fe.validateUnion = $ee;
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.validateKeywordUsage = cn.validSchemaType = cn.funcKeywordCode = cn.macroKeywordCode = void 0;
const at = ce, pr = St, Eee = fe, See = ms;
function Tee(e, t) {
  const { gen: n, keyword: r, schema: o, parentSchema: s, it: i } = e, a = t.macro.call(i.self, o, s, i), c = ug(n, r, a);
  i.opts.validateSchema !== !1 && i.self.validateSchema(a, !0);
  const p = n.name("valid");
  e.subschema({
    schema: a,
    schemaPath: at.nil,
    errSchemaPath: `${i.errSchemaPath}/${r}`,
    topSchemaRef: c,
    compositeRule: !0
  }, p), e.pass(p, () => e.error(!0));
}
cn.macroKeywordCode = Tee;
function Oee(e, t) {
  var n;
  const { gen: r, keyword: o, schema: s, parentSchema: i, $data: a, it: c } = e;
  Nee(c, t);
  const p = !a && t.compile ? t.compile.call(c.self, s, i, c) : t.validate, l = ug(r, o, p), u = r.let("valid");
  e.block$data(u, d), e.ok((n = t.valid) !== null && n !== void 0 ? n : u);
  function d() {
    if (t.errors === !1)
      g(), t.modifying && jf(e), y(() => e.error());
    else {
      const v = t.async ? m() : f();
      t.modifying && jf(e), y(() => Pee(e, v));
    }
  }
  function m() {
    const v = r.let("ruleErrs", null);
    return r.try(() => g((0, at._)`await `), (b) => r.assign(u, !1).if((0, at._)`${b} instanceof ${c.ValidationError}`, () => r.assign(v, (0, at._)`${b}.errors`), () => r.throw(b))), v;
  }
  function f() {
    const v = (0, at._)`${l}.errors`;
    return r.assign(v, null), g(at.nil), v;
  }
  function g(v = t.async ? (0, at._)`await ` : at.nil) {
    const b = c.opts.passContext ? pr.default.this : pr.default.self, w = !("compile" in t && !a || t.schema === !1);
    r.assign(u, (0, at._)`${v}${(0, Eee.callValidateCode)(e, l, b, w)}`, t.modifying);
  }
  function y(v) {
    var b;
    r.if((0, at.not)((b = t.valid) !== null && b !== void 0 ? b : u), v);
  }
}
cn.funcKeywordCode = Oee;
function jf(e) {
  const { gen: t, data: n, it: r } = e;
  t.if(r.parentData, () => t.assign(n, (0, at._)`${r.parentData}[${r.parentDataProperty}]`));
}
function Pee(e, t) {
  const { gen: n } = e;
  n.if((0, at._)`Array.isArray(${t})`, () => {
    n.assign(pr.default.vErrors, (0, at._)`${pr.default.vErrors} === null ? ${t} : ${pr.default.vErrors}.concat(${t})`).assign(pr.default.errors, (0, at._)`${pr.default.vErrors}.length`), (0, See.extendErrors)(e);
  }, () => e.error());
}
function Nee({ schemaEnv: e }, t) {
  if (t.async && !e.$async)
    throw new Error("async keyword in sync schema");
}
function ug(e, t, n) {
  if (n === void 0)
    throw new Error(`keyword "${t}" failed to compile`);
  return e.scopeValue("keyword", typeof n == "function" ? { ref: n } : { ref: n, code: (0, at.stringify)(n) });
}
function Ree(e, t, n = !1) {
  return !t.length || t.some((r) => r === "array" ? Array.isArray(e) : r === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == r || n && typeof e > "u");
}
cn.validSchemaType = Ree;
function Aee({ schema: e, opts: t, self: n, errSchemaPath: r }, o, s) {
  if (Array.isArray(o.keyword) ? !o.keyword.includes(s) : o.keyword !== s)
    throw new Error("ajv implementation error");
  const i = o.dependencies;
  if (i != null && i.some((a) => !Object.prototype.hasOwnProperty.call(e, a)))
    throw new Error(`parent schema must have dependencies of ${s}: ${i.join(",")}`);
  if (o.validateSchema && !o.validateSchema(e[s])) {
    const c = `keyword "${s}" value is invalid at path "${r}": ` + n.errorsText(o.validateSchema.errors);
    if (t.validateSchema === "log")
      n.logger.error(c);
    else
      throw new Error(c);
  }
}
cn.validateKeywordUsage = Aee;
var Yn = {};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.extendSubschemaMode = Yn.extendSubschemaData = Yn.getSubschema = void 0;
const sn = ce, pg = J;
function Dee(e, { keyword: t, schemaProp: n, schema: r, schemaPath: o, errSchemaPath: s, topSchemaRef: i }) {
  if (t !== void 0 && r !== void 0)
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  if (t !== void 0) {
    const a = e.schema[t];
    return n === void 0 ? {
      schema: a,
      schemaPath: (0, sn._)`${e.schemaPath}${(0, sn.getProperty)(t)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}`
    } : {
      schema: a[n],
      schemaPath: (0, sn._)`${e.schemaPath}${(0, sn.getProperty)(t)}${(0, sn.getProperty)(n)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}/${(0, pg.escapeFragment)(n)}`
    };
  }
  if (r !== void 0) {
    if (o === void 0 || s === void 0 || i === void 0)
      throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
    return {
      schema: r,
      schemaPath: o,
      topSchemaRef: i,
      errSchemaPath: s
    };
  }
  throw new Error('either "keyword" or "schema" must be passed');
}
Yn.getSubschema = Dee;
function Iee(e, t, { dataProp: n, dataPropType: r, data: o, dataTypes: s, propertyName: i }) {
  if (o !== void 0 && n !== void 0)
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  const { gen: a } = t;
  if (n !== void 0) {
    const { errorPath: p, dataPathArr: l, opts: u } = t, d = a.let("data", (0, sn._)`${t.data}${(0, sn.getProperty)(n)}`, !0);
    c(d), e.errorPath = (0, sn.str)`${p}${(0, pg.getErrorPath)(n, r, u.jsPropertySyntax)}`, e.parentDataProperty = (0, sn._)`${n}`, e.dataPathArr = [...l, e.parentDataProperty];
  }
  if (o !== void 0) {
    const p = o instanceof sn.Name ? o : a.let("data", o, !0);
    c(p), i !== void 0 && (e.propertyName = i);
  }
  s && (e.dataTypes = s);
  function c(p) {
    e.data = p, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = /* @__PURE__ */ new Set(), e.parentData = t.data, e.dataNames = [...t.dataNames, p];
  }
}
Yn.extendSubschemaData = Iee;
function kee(e, { jtdDiscriminator: t, jtdMetadata: n, compositeRule: r, createErrors: o, allErrors: s }) {
  r !== void 0 && (e.compositeRule = r), o !== void 0 && (e.createErrors = o), s !== void 0 && (e.allErrors = s), e.jtdDiscriminator = t, e.jtdMetadata = n;
}
Yn.extendSubschemaMode = kee;
var Ke = {}, ta = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var r, o, s;
    if (Array.isArray(t)) {
      if (r = t.length, r != n.length) return !1;
      for (o = r; o-- !== 0; )
        if (!e(t[o], n[o])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if (s = Object.keys(t), r = s.length, r !== Object.keys(n).length) return !1;
    for (o = r; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, s[o])) return !1;
    for (o = r; o-- !== 0; ) {
      var i = s[o];
      if (!e(t[i], n[i])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
}, dg = { exports: {} }, Xn = dg.exports = function(e, t, n) {
  typeof t == "function" && (n = t, t = {}), n = t.cb || n;
  var r = typeof n == "function" ? n : n.pre || function() {
  }, o = n.post || function() {
  };
  ii(t, r, o, e, "", e);
};
Xn.keywords = {
  additionalItems: !0,
  items: !0,
  contains: !0,
  additionalProperties: !0,
  propertyNames: !0,
  not: !0,
  if: !0,
  then: !0,
  else: !0
};
Xn.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
Xn.propsKeywords = {
  $defs: !0,
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
Xn.skipKeywords = {
  default: !0,
  enum: !0,
  const: !0,
  required: !0,
  maximum: !0,
  minimum: !0,
  exclusiveMaximum: !0,
  exclusiveMinimum: !0,
  multipleOf: !0,
  maxLength: !0,
  minLength: !0,
  pattern: !0,
  format: !0,
  maxItems: !0,
  minItems: !0,
  uniqueItems: !0,
  maxProperties: !0,
  minProperties: !0
};
function ii(e, t, n, r, o, s, i, a, c, p) {
  if (r && typeof r == "object" && !Array.isArray(r)) {
    t(r, o, s, i, a, c, p);
    for (var l in r) {
      var u = r[l];
      if (Array.isArray(u)) {
        if (l in Xn.arrayKeywords)
          for (var d = 0; d < u.length; d++)
            ii(e, t, n, u[d], o + "/" + l + "/" + d, s, o, l, r, d);
      } else if (l in Xn.propsKeywords) {
        if (u && typeof u == "object")
          for (var m in u)
            ii(e, t, n, u[m], o + "/" + l + "/" + Cee(m), s, o, l, r, m);
      } else (l in Xn.keywords || e.allKeys && !(l in Xn.skipKeywords)) && ii(e, t, n, u, o + "/" + l, s, o, l, r);
    }
    n(r, o, s, i, a, c, p);
  }
}
function Cee(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
var jee = dg.exports;
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.getSchemaRefs = Ke.resolveUrl = Ke.normalizeId = Ke._getFullPath = Ke.getFullPath = Ke.inlineRef = void 0;
const Lee = J, qee = ta, Fee = jee, Mee = /* @__PURE__ */ new Set([
  "type",
  "format",
  "pattern",
  "maxLength",
  "minLength",
  "maxProperties",
  "minProperties",
  "maxItems",
  "minItems",
  "maximum",
  "minimum",
  "uniqueItems",
  "multipleOf",
  "required",
  "enum",
  "const"
]);
function Uee(e, t = !0) {
  return typeof e == "boolean" ? !0 : t === !0 ? !gl(e) : t ? fg(e) <= t : !1;
}
Ke.inlineRef = Uee;
const Vee = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function gl(e) {
  for (const t in e) {
    if (Vee.has(t))
      return !0;
    const n = e[t];
    if (Array.isArray(n) && n.some(gl) || typeof n == "object" && gl(n))
      return !0;
  }
  return !1;
}
function fg(e) {
  let t = 0;
  for (const n in e) {
    if (n === "$ref")
      return 1 / 0;
    if (t++, !Mee.has(n) && (typeof e[n] == "object" && (0, Lee.eachItem)(e[n], (r) => t += fg(r)), t === 1 / 0))
      return 1 / 0;
  }
  return t;
}
function mg(e, t = "", n) {
  n !== !1 && (t = eo(t));
  const r = e.parse(t);
  return hg(e, r);
}
Ke.getFullPath = mg;
function hg(e, t) {
  return e.serialize(t).split("#")[0] + "#";
}
Ke._getFullPath = hg;
const zee = /#\/?$/;
function eo(e) {
  return e ? e.replace(zee, "") : "";
}
Ke.normalizeId = eo;
function Bee(e, t, n) {
  return n = eo(n), e.resolve(t, n);
}
Ke.resolveUrl = Bee;
const Gee = /^[a-z_][-a-z0-9._]*$/i;
function Hee(e, t) {
  if (typeof e == "boolean")
    return {};
  const { schemaId: n, uriResolver: r } = this.opts, o = eo(e[n] || t), s = { "": o }, i = mg(r, o, !1), a = {}, c = /* @__PURE__ */ new Set();
  return Fee(e, { allKeys: !0 }, (u, d, m, f) => {
    if (f === void 0)
      return;
    const g = i + d;
    let y = s[f];
    typeof u[n] == "string" && (y = v.call(this, u[n])), b.call(this, u.$anchor), b.call(this, u.$dynamicAnchor), s[d] = y;
    function v(w) {
      const T = this.opts.uriResolver.resolve;
      if (w = eo(y ? T(y, w) : w), c.has(w))
        throw l(w);
      c.add(w);
      let P = this.refs[w];
      return typeof P == "string" && (P = this.refs[P]), typeof P == "object" ? p(u, P.schema, w) : w !== eo(g) && (w[0] === "#" ? (p(u, a[w], w), a[w] = u) : this.refs[w] = g), w;
    }
    function b(w) {
      if (typeof w == "string") {
        if (!Gee.test(w))
          throw new Error(`invalid anchor "${w}"`);
        v.call(this, `#${w}`);
      }
    }
  }), a;
  function p(u, d, m) {
    if (d !== void 0 && !qee(u, d))
      throw l(m);
  }
  function l(u) {
    return new Error(`reference "${u}" resolves to more than one schema`);
  }
}
Ke.getSchemaRefs = Hee;
Object.defineProperty(Bt, "__esModule", { value: !0 });
Bt.getData = Bt.KeywordCxt = Bt.validateFunctionCode = void 0;
const yg = uo, Lf = je, wu = En, Pi = je, Xee = ea, Go = cn, yc = Yn, ee = ce, oe = St, Kee = Ke, Sn = J, Co = ms;
function Wee(e) {
  if (bg(e) && (wg(e), vg(e))) {
    Qee(e);
    return;
  }
  gg(e, () => (0, yg.topBoolOrEmptySchema)(e));
}
Bt.validateFunctionCode = Wee;
function gg({ gen: e, validateName: t, schema: n, schemaEnv: r, opts: o }, s) {
  o.code.es5 ? e.func(t, (0, ee._)`${oe.default.data}, ${oe.default.valCxt}`, r.$async, () => {
    e.code((0, ee._)`"use strict"; ${qf(n, o)}`), Yee(e, o), e.code(s);
  }) : e.func(t, (0, ee._)`${oe.default.data}, ${Jee(o)}`, r.$async, () => e.code(qf(n, o)).code(s));
}
function Jee(e) {
  return (0, ee._)`{${oe.default.instancePath}="", ${oe.default.parentData}, ${oe.default.parentDataProperty}, ${oe.default.rootData}=${oe.default.data}${e.dynamicRef ? (0, ee._)`, ${oe.default.dynamicAnchors}={}` : ee.nil}}={}`;
}
function Yee(e, t) {
  e.if(oe.default.valCxt, () => {
    e.var(oe.default.instancePath, (0, ee._)`${oe.default.valCxt}.${oe.default.instancePath}`), e.var(oe.default.parentData, (0, ee._)`${oe.default.valCxt}.${oe.default.parentData}`), e.var(oe.default.parentDataProperty, (0, ee._)`${oe.default.valCxt}.${oe.default.parentDataProperty}`), e.var(oe.default.rootData, (0, ee._)`${oe.default.valCxt}.${oe.default.rootData}`), t.dynamicRef && e.var(oe.default.dynamicAnchors, (0, ee._)`${oe.default.valCxt}.${oe.default.dynamicAnchors}`);
  }, () => {
    e.var(oe.default.instancePath, (0, ee._)`""`), e.var(oe.default.parentData, (0, ee._)`undefined`), e.var(oe.default.parentDataProperty, (0, ee._)`undefined`), e.var(oe.default.rootData, oe.default.data), t.dynamicRef && e.var(oe.default.dynamicAnchors, (0, ee._)`{}`);
  });
}
function Qee(e) {
  const { schema: t, opts: n, gen: r } = e;
  gg(e, () => {
    n.$comment && t.$comment && _g(e), rte(e), r.let(oe.default.vErrors, null), r.let(oe.default.errors, 0), n.unevaluated && Zee(e), xg(e), ite(e);
  });
}
function Zee(e) {
  const { gen: t, validateName: n } = e;
  e.evaluated = t.const("evaluated", (0, ee._)`${n}.evaluated`), t.if((0, ee._)`${e.evaluated}.dynamicProps`, () => t.assign((0, ee._)`${e.evaluated}.props`, (0, ee._)`undefined`)), t.if((0, ee._)`${e.evaluated}.dynamicItems`, () => t.assign((0, ee._)`${e.evaluated}.items`, (0, ee._)`undefined`));
}
function qf(e, t) {
  const n = typeof e == "object" && e[t.schemaId];
  return n && (t.code.source || t.code.process) ? (0, ee._)`/*# sourceURL=${n} */` : ee.nil;
}
function ete(e, t) {
  if (bg(e) && (wg(e), vg(e))) {
    tte(e, t);
    return;
  }
  (0, yg.boolOrEmptySchema)(e, t);
}
function vg({ schema: e, self: t }) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t.RULES.all[n])
      return !0;
  return !1;
}
function bg(e) {
  return typeof e.schema != "boolean";
}
function tte(e, t) {
  const { schema: n, gen: r, opts: o } = e;
  o.$comment && n.$comment && _g(e), ote(e), ste(e);
  const s = r.const("_errs", oe.default.errors);
  xg(e, s), r.var(t, (0, ee._)`${s} === ${oe.default.errors}`);
}
function wg(e) {
  (0, Sn.checkUnknownRules)(e), nte(e);
}
function xg(e, t) {
  if (e.opts.jtd)
    return Ff(e, [], !1, t);
  const n = (0, Lf.getSchemaTypes)(e.schema), r = (0, Lf.coerceAndCheckDataType)(e, n);
  Ff(e, n, !r, t);
}
function nte(e) {
  const { schema: t, errSchemaPath: n, opts: r, self: o } = e;
  t.$ref && r.ignoreKeywordsWithRef && (0, Sn.schemaHasRulesButRef)(t, o.RULES) && o.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
}
function rte(e) {
  const { schema: t, opts: n } = e;
  t.default !== void 0 && n.useDefaults && n.strictSchema && (0, Sn.checkStrictMode)(e, "default is ignored in the schema root");
}
function ote(e) {
  const t = e.schema[e.opts.schemaId];
  t && (e.baseId = (0, Kee.resolveUrl)(e.opts.uriResolver, e.baseId, t));
}
function ste(e) {
  if (e.schema.$async && !e.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function _g({ gen: e, schemaEnv: t, schema: n, errSchemaPath: r, opts: o }) {
  const s = n.$comment;
  if (o.$comment === !0)
    e.code((0, ee._)`${oe.default.self}.logger.log(${s})`);
  else if (typeof o.$comment == "function") {
    const i = (0, ee.str)`${r}/$comment`, a = e.scopeValue("root", { ref: t.root });
    e.code((0, ee._)`${oe.default.self}.opts.$comment(${s}, ${i}, ${a}.schema)`);
  }
}
function ite(e) {
  const { gen: t, schemaEnv: n, validateName: r, ValidationError: o, opts: s } = e;
  n.$async ? t.if((0, ee._)`${oe.default.errors} === 0`, () => t.return(oe.default.data), () => t.throw((0, ee._)`new ${o}(${oe.default.vErrors})`)) : (t.assign((0, ee._)`${r}.errors`, oe.default.vErrors), s.unevaluated && ate(e), t.return((0, ee._)`${oe.default.errors} === 0`));
}
function ate({ gen: e, evaluated: t, props: n, items: r }) {
  n instanceof ee.Name && e.assign((0, ee._)`${t}.props`, n), r instanceof ee.Name && e.assign((0, ee._)`${t}.items`, r);
}
function Ff(e, t, n, r) {
  const { gen: o, schema: s, data: i, allErrors: a, opts: c, self: p } = e, { RULES: l } = p;
  if (s.$ref && (c.ignoreKeywordsWithRef || !(0, Sn.schemaHasRulesButRef)(s, l))) {
    o.block(() => Sg(e, "$ref", l.all.$ref.definition));
    return;
  }
  c.jtd || cte(e, t), o.block(() => {
    for (const d of l.rules)
      u(d);
    u(l.post);
  });
  function u(d) {
    (0, wu.shouldUseGroup)(s, d) && (d.type ? (o.if((0, Pi.checkDataType)(d.type, i, c.strictNumbers)), Mf(e, d), t.length === 1 && t[0] === d.type && n && (o.else(), (0, Pi.reportTypeError)(e)), o.endIf()) : Mf(e, d), a || o.if((0, ee._)`${oe.default.errors} === ${r || 0}`));
  }
}
function Mf(e, t) {
  const { gen: n, schema: r, opts: { useDefaults: o } } = e;
  o && (0, Xee.assignDefaults)(e, t.type), n.block(() => {
    for (const s of t.rules)
      (0, wu.shouldUseRule)(r, s) && Sg(e, s.keyword, s.definition, t.type);
  });
}
function cte(e, t) {
  e.schemaEnv.meta || !e.opts.strictTypes || (lte(e, t), e.opts.allowUnionTypes || ute(e, t), pte(e, e.dataTypes));
}
function lte(e, t) {
  if (t.length) {
    if (!e.dataTypes.length) {
      e.dataTypes = t;
      return;
    }
    t.forEach((n) => {
      $g(e.dataTypes, n) || xu(e, `type "${n}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), fte(e, t);
  }
}
function ute(e, t) {
  t.length > 1 && !(t.length === 2 && t.includes("null")) && xu(e, "use allowUnionTypes to allow union type keyword");
}
function pte(e, t) {
  const n = e.self.RULES.all;
  for (const r in n) {
    const o = n[r];
    if (typeof o == "object" && (0, wu.shouldUseRule)(e.schema, o)) {
      const { type: s } = o.definition;
      s.length && !s.some((i) => dte(t, i)) && xu(e, `missing type "${s.join(",")}" for keyword "${r}"`);
    }
  }
}
function dte(e, t) {
  return e.includes(t) || t === "number" && e.includes("integer");
}
function $g(e, t) {
  return e.includes(t) || t === "integer" && e.includes("number");
}
function fte(e, t) {
  const n = [];
  for (const r of e.dataTypes)
    $g(t, r) ? n.push(r) : t.includes("integer") && r === "number" && n.push("integer");
  e.dataTypes = n;
}
function xu(e, t) {
  const n = e.schemaEnv.baseId + e.errSchemaPath;
  t += ` at "${n}" (strictTypes)`, (0, Sn.checkStrictMode)(e, t, e.opts.strictTypes);
}
let Eg = class {
  constructor(t, n, r) {
    if ((0, Go.validateKeywordUsage)(t, n, r), this.gen = t.gen, this.allErrors = t.allErrors, this.keyword = r, this.data = t.data, this.schema = t.schema[r], this.$data = n.$data && t.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, Sn.schemaRefOrVal)(t, this.schema, r, this.$data), this.schemaType = n.schemaType, this.parentSchema = t.schema, this.params = {}, this.it = t, this.def = n, this.$data)
      this.schemaCode = t.gen.const("vSchema", Tg(this.$data, t));
    else if (this.schemaCode = this.schemaValue, !(0, Go.validSchemaType)(this.schema, n.schemaType, n.allowUndefined))
      throw new Error(`${r} value must be ${JSON.stringify(n.schemaType)}`);
    ("code" in n ? n.trackErrors : n.errors !== !1) && (this.errsCount = t.gen.const("_errs", oe.default.errors));
  }
  result(t, n, r) {
    this.failResult((0, ee.not)(t), n, r);
  }
  failResult(t, n, r) {
    this.gen.if(t), r ? r() : this.error(), n ? (this.gen.else(), n(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  pass(t, n) {
    this.failResult((0, ee.not)(t), void 0, n);
  }
  fail(t) {
    if (t === void 0) {
      this.error(), this.allErrors || this.gen.if(!1);
      return;
    }
    this.gen.if(t), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  fail$data(t) {
    if (!this.$data)
      return this.fail(t);
    const { schemaCode: n } = this;
    this.fail((0, ee._)`${n} !== undefined && (${(0, ee.or)(this.invalid$data(), t)})`);
  }
  error(t, n, r) {
    if (n) {
      this.setParams(n), this._error(t, r), this.setParams({});
      return;
    }
    this._error(t, r);
  }
  _error(t, n) {
    (t ? Co.reportExtraError : Co.reportError)(this, this.def.error, n);
  }
  $dataError() {
    (0, Co.reportError)(this, this.def.$dataError || Co.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, Co.resetErrorsCount)(this.gen, this.errsCount);
  }
  ok(t) {
    this.allErrors || this.gen.if(t);
  }
  setParams(t, n) {
    n ? Object.assign(this.params, t) : this.params = t;
  }
  block$data(t, n, r = ee.nil) {
    this.gen.block(() => {
      this.check$data(t, r), n();
    });
  }
  check$data(t = ee.nil, n = ee.nil) {
    if (!this.$data)
      return;
    const { gen: r, schemaCode: o, schemaType: s, def: i } = this;
    r.if((0, ee.or)((0, ee._)`${o} === undefined`, n)), t !== ee.nil && r.assign(t, !0), (s.length || i.validateSchema) && (r.elseIf(this.invalid$data()), this.$dataError(), t !== ee.nil && r.assign(t, !1)), r.else();
  }
  invalid$data() {
    const { gen: t, schemaCode: n, schemaType: r, def: o, it: s } = this;
    return (0, ee.or)(i(), a());
    function i() {
      if (r.length) {
        if (!(n instanceof ee.Name))
          throw new Error("ajv implementation error");
        const c = Array.isArray(r) ? r : [r];
        return (0, ee._)`${(0, Pi.checkDataTypes)(c, n, s.opts.strictNumbers, Pi.DataType.Wrong)}`;
      }
      return ee.nil;
    }
    function a() {
      if (o.validateSchema) {
        const c = t.scopeValue("validate$data", { ref: o.validateSchema });
        return (0, ee._)`!${c}(${n})`;
      }
      return ee.nil;
    }
  }
  subschema(t, n) {
    const r = (0, yc.getSubschema)(this.it, t);
    (0, yc.extendSubschemaData)(r, this.it, t), (0, yc.extendSubschemaMode)(r, t);
    const o = { ...this.it, ...r, items: void 0, props: void 0 };
    return ete(o, n), o;
  }
  mergeEvaluated(t, n) {
    const { it: r, gen: o } = this;
    r.opts.unevaluated && (r.props !== !0 && t.props !== void 0 && (r.props = Sn.mergeEvaluated.props(o, t.props, r.props, n)), r.items !== !0 && t.items !== void 0 && (r.items = Sn.mergeEvaluated.items(o, t.items, r.items, n)));
  }
  mergeValidEvaluated(t, n) {
    const { it: r, gen: o } = this;
    if (r.opts.unevaluated && (r.props !== !0 || r.items !== !0))
      return o.if(n, () => this.mergeEvaluated(t, ee.Name)), !0;
  }
};
Bt.KeywordCxt = Eg;
function Sg(e, t, n, r) {
  const o = new Eg(e, n, t);
  "code" in n ? n.code(o, r) : o.$data && n.validate ? (0, Go.funcKeywordCode)(o, n) : "macro" in n ? (0, Go.macroKeywordCode)(o, n) : (n.compile || n.validate) && (0, Go.funcKeywordCode)(o, n);
}
const mte = /^\/(?:[^~]|~0|~1)*$/, hte = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function Tg(e, { dataLevel: t, dataNames: n, dataPathArr: r }) {
  let o, s;
  if (e === "")
    return oe.default.rootData;
  if (e[0] === "/") {
    if (!mte.test(e))
      throw new Error(`Invalid JSON-pointer: ${e}`);
    o = e, s = oe.default.rootData;
  } else {
    const p = hte.exec(e);
    if (!p)
      throw new Error(`Invalid JSON-pointer: ${e}`);
    const l = +p[1];
    if (o = p[2], o === "#") {
      if (l >= t)
        throw new Error(c("property/index", l));
      return r[t - l];
    }
    if (l > t)
      throw new Error(c("data", l));
    if (s = n[t - l], !o)
      return s;
  }
  let i = s;
  const a = o.split("/");
  for (const p of a)
    p && (s = (0, ee._)`${s}${(0, ee.getProperty)((0, Sn.unescapeJsonPointer)(p))}`, i = (0, ee._)`${i} && ${s}`);
  return i;
  function c(p, l) {
    return `Cannot access ${p} ${l} levels up, current level is ${t}`;
  }
}
Bt.getData = Tg;
var hs = {};
Object.defineProperty(hs, "__esModule", { value: !0 });
let yte = class extends Error {
  constructor(t) {
    super("validation failed"), this.errors = t, this.ajv = this.validation = !0;
  }
};
hs.default = yte;
var wo = {};
Object.defineProperty(wo, "__esModule", { value: !0 });
const gc = Ke;
let gte = class extends Error {
  constructor(t, n, r, o) {
    super(o || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, gc.resolveUrl)(t, n, r), this.missingSchema = (0, gc.normalizeId)((0, gc.getFullPath)(t, this.missingRef));
  }
};
wo.default = gte;
var ut = {};
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.resolveSchema = ut.getCompilingSchema = ut.resolveRef = ut.compileSchema = ut.SchemaEnv = void 0;
const jt = ce, vte = hs, cr = St, Vt = Ke, Uf = J, bte = Bt;
let na = class {
  constructor(t) {
    var n;
    this.refs = {}, this.dynamicAnchors = {};
    let r;
    typeof t.schema == "object" && (r = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (n = t.baseId) !== null && n !== void 0 ? n : (0, Vt.normalizeId)(r == null ? void 0 : r[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = r == null ? void 0 : r.$async, this.refs = {};
  }
};
ut.SchemaEnv = na;
function _u(e) {
  const t = Og.call(this, e);
  if (t)
    return t;
  const n = (0, Vt.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: r, lines: o } = this.opts.code, { ownProperties: s } = this.opts, i = new jt.CodeGen(this.scope, { es5: r, lines: o, ownProperties: s });
  let a;
  e.$async && (a = i.scopeValue("Error", {
    ref: vte.default,
    code: (0, jt._)`require("ajv/dist/runtime/validation_error").default`
  }));
  const c = i.scopeName("validate");
  e.validateName = c;
  const p = {
    gen: i,
    allErrors: this.opts.allErrors,
    data: cr.default.data,
    parentData: cr.default.parentData,
    parentDataProperty: cr.default.parentDataProperty,
    dataNames: [cr.default.data],
    dataPathArr: [jt.nil],
    // TODO can its length be used as dataLevel if nil is removed?
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: i.scopeValue("schema", this.opts.code.source === !0 ? { ref: e.schema, code: (0, jt.stringify)(e.schema) } : { ref: e.schema }),
    validateName: c,
    ValidationError: a,
    schema: e.schema,
    schemaEnv: e,
    rootId: n,
    baseId: e.baseId || n,
    schemaPath: jt.nil,
    errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, jt._)`""`,
    opts: this.opts,
    self: this
  };
  let l;
  try {
    this._compilations.add(e), (0, bte.validateFunctionCode)(p), i.optimize(this.opts.code.optimize);
    const u = i.toString();
    l = `${i.scopeRefs(cr.default.scope)}return ${u}`, this.opts.code.process && (l = this.opts.code.process(l, e));
    const m = new Function(`${cr.default.self}`, `${cr.default.scope}`, l)(this, this.scope.get());
    if (this.scope.value(c, { ref: m }), m.errors = null, m.schema = e.schema, m.schemaEnv = e, e.$async && (m.$async = !0), this.opts.code.source === !0 && (m.source = { validateName: c, validateCode: u, scopeValues: i._values }), this.opts.unevaluated) {
      const { props: f, items: g } = p;
      m.evaluated = {
        props: f instanceof jt.Name ? void 0 : f,
        items: g instanceof jt.Name ? void 0 : g,
        dynamicProps: f instanceof jt.Name,
        dynamicItems: g instanceof jt.Name
      }, m.source && (m.source.evaluated = (0, jt.stringify)(m.evaluated));
    }
    return e.validate = m, e;
  } catch (u) {
    throw delete e.validate, delete e.validateName, l && this.logger.error("Error compiling schema, function code:", l), u;
  } finally {
    this._compilations.delete(e);
  }
}
ut.compileSchema = _u;
function wte(e, t, n) {
  var r;
  n = (0, Vt.resolveUrl)(this.opts.uriResolver, t, n);
  const o = e.refs[n];
  if (o)
    return o;
  let s = $te.call(this, e, n);
  if (s === void 0) {
    const i = (r = e.localRefs) === null || r === void 0 ? void 0 : r[n], { schemaId: a } = this.opts;
    i && (s = new na({ schema: i, schemaId: a, root: e, baseId: t }));
  }
  if (s !== void 0)
    return e.refs[n] = xte.call(this, s);
}
ut.resolveRef = wte;
function xte(e) {
  return (0, Vt.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : _u.call(this, e);
}
function Og(e) {
  for (const t of this._compilations)
    if (_te(t, e))
      return t;
}
ut.getCompilingSchema = Og;
function _te(e, t) {
  return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
}
function $te(e, t) {
  let n;
  for (; typeof (n = this.refs[t]) == "string"; )
    t = n;
  return n || this.schemas[t] || ra.call(this, e, t);
}
function ra(e, t) {
  const n = this.opts.uriResolver.parse(t), r = (0, Vt._getFullPath)(this.opts.uriResolver, n);
  let o = (0, Vt.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
  if (Object.keys(e.schema).length > 0 && r === o)
    return vc.call(this, n, e);
  const s = (0, Vt.normalizeId)(r), i = this.refs[s] || this.schemas[s];
  if (typeof i == "string") {
    const a = ra.call(this, e, i);
    return typeof (a == null ? void 0 : a.schema) != "object" ? void 0 : vc.call(this, n, a);
  }
  if (typeof (i == null ? void 0 : i.schema) == "object") {
    if (i.validate || _u.call(this, i), s === (0, Vt.normalizeId)(t)) {
      const { schema: a } = i, { schemaId: c } = this.opts, p = a[c];
      return p && (o = (0, Vt.resolveUrl)(this.opts.uriResolver, o, p)), new na({ schema: a, schemaId: c, root: e, baseId: o });
    }
    return vc.call(this, n, i);
  }
}
ut.resolveSchema = ra;
const Ete = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function vc(e, { baseId: t, schema: n, root: r }) {
  var o;
  if (((o = e.fragment) === null || o === void 0 ? void 0 : o[0]) !== "/")
    return;
  for (const a of e.fragment.slice(1).split("/")) {
    if (typeof n == "boolean")
      return;
    const c = n[(0, Uf.unescapeFragment)(a)];
    if (c === void 0)
      return;
    n = c;
    const p = typeof n == "object" && n[this.opts.schemaId];
    !Ete.has(a) && p && (t = (0, Vt.resolveUrl)(this.opts.uriResolver, t, p));
  }
  let s;
  if (typeof n != "boolean" && n.$ref && !(0, Uf.schemaHasRulesButRef)(n, this.RULES)) {
    const a = (0, Vt.resolveUrl)(this.opts.uriResolver, t, n.$ref);
    s = ra.call(this, r, a);
  }
  const { schemaId: i } = this.opts;
  if (s = s || new na({ schema: n, schemaId: i, root: r, baseId: t }), s.schema !== s.root.schema)
    return s;
}
const Ste = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Tte = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ote = "object", Pte = [
  "$data"
], Nte = {
  $data: {
    type: "string",
    anyOf: [
      {
        format: "relative-json-pointer"
      },
      {
        format: "json-pointer"
      }
    ]
  }
}, Rte = !1, Ate = {
  $id: Ste,
  description: Tte,
  type: Ote,
  required: Pte,
  properties: Nte,
  additionalProperties: Rte
};
var $u = {}, oa = { exports: {} };
const Dte = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), Pg = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
function Ng(e) {
  let t = "", n = 0, r = 0;
  for (r = 0; r < e.length; r++)
    if (n = e[r].charCodeAt(0), n !== 48) {
      if (!(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102))
        return "";
      t += e[r];
      break;
    }
  for (r += 1; r < e.length; r++) {
    if (n = e[r].charCodeAt(0), !(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102))
      return "";
    t += e[r];
  }
  return t;
}
const Ite = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
function Vf(e) {
  return e.length = 0, !0;
}
function kte(e, t, n) {
  if (e.length) {
    const r = Ng(e);
    if (r !== "")
      t.push(r);
    else
      return n.error = !0, !1;
    e.length = 0;
  }
  return !0;
}
function Cte(e) {
  let t = 0;
  const n = { error: !1, address: "", zone: "" }, r = [], o = [];
  let s = !1, i = !1, a = kte;
  for (let c = 0; c < e.length; c++) {
    const p = e[c];
    if (!(p === "[" || p === "]"))
      if (p === ":") {
        if (s === !0 && (i = !0), !a(o, r, n))
          break;
        if (++t > 7) {
          n.error = !0;
          break;
        }
        c > 0 && e[c - 1] === ":" && (s = !0), r.push(":");
        continue;
      } else if (p === "%") {
        if (!a(o, r, n))
          break;
        a = Vf;
      } else {
        o.push(p);
        continue;
      }
  }
  return o.length && (a === Vf ? n.zone = o.join("") : i ? r.push(o.join("")) : r.push(Ng(o))), n.address = r.join(""), n;
}
function Rg(e) {
  if (jte(e, ":") < 2)
    return { host: e, isIPV6: !1 };
  const t = Cte(e);
  if (t.error)
    return { host: e, isIPV6: !1 };
  {
    let n = t.address, r = t.address;
    return t.zone && (n += "%" + t.zone, r += "%25" + t.zone), { host: n, isIPV6: !0, escapedHost: r };
  }
}
function jte(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++)
    e[r] === t && n++;
  return n;
}
function Lte(e) {
  let t = e;
  const n = [];
  let r = -1, o = 0;
  for (; o = t.length; ) {
    if (o === 1) {
      if (t === ".")
        break;
      if (t === "/") {
        n.push("/");
        break;
      } else {
        n.push(t);
        break;
      }
    } else if (o === 2) {
      if (t[0] === ".") {
        if (t[1] === ".")
          break;
        if (t[1] === "/") {
          t = t.slice(2);
          continue;
        }
      } else if (t[0] === "/" && (t[1] === "." || t[1] === "/")) {
        n.push("/");
        break;
      }
    } else if (o === 3 && t === "/..") {
      n.length !== 0 && n.pop(), n.push("/");
      break;
    }
    if (t[0] === ".") {
      if (t[1] === ".") {
        if (t[2] === "/") {
          t = t.slice(3);
          continue;
        }
      } else if (t[1] === "/") {
        t = t.slice(2);
        continue;
      }
    } else if (t[0] === "/" && t[1] === ".") {
      if (t[2] === "/") {
        t = t.slice(2);
        continue;
      } else if (t[2] === "." && t[3] === "/") {
        t = t.slice(3), n.length !== 0 && n.pop();
        continue;
      }
    }
    if ((r = t.indexOf("/", 1)) === -1) {
      n.push(t);
      break;
    } else
      n.push(t.slice(0, r)), t = t.slice(r);
  }
  return n.join("");
}
function qte(e, t) {
  const n = t !== !0 ? escape : unescape;
  return e.scheme !== void 0 && (e.scheme = n(e.scheme)), e.userinfo !== void 0 && (e.userinfo = n(e.userinfo)), e.host !== void 0 && (e.host = n(e.host)), e.path !== void 0 && (e.path = n(e.path)), e.query !== void 0 && (e.query = n(e.query)), e.fragment !== void 0 && (e.fragment = n(e.fragment)), e;
}
function Fte(e) {
  const t = [];
  if (e.userinfo !== void 0 && (t.push(e.userinfo), t.push("@")), e.host !== void 0) {
    let n = unescape(e.host);
    if (!Pg(n)) {
      const r = Rg(n);
      r.isIPV6 === !0 ? n = `[${r.escapedHost}]` : n = e.host;
    }
    t.push(n);
  }
  return (typeof e.port == "number" || typeof e.port == "string") && (t.push(":"), t.push(String(e.port))), t.length ? t.join("") : void 0;
}
var Ag = {
  nonSimpleDomain: Ite,
  recomposeAuthority: Fte,
  normalizeComponentEncoding: qte,
  removeDotSegments: Lte,
  isIPv4: Pg,
  isUUID: Dte,
  normalizeIPv6: Rg
};
const { isUUID: Mte } = Ag, Ute = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
function Dg(e) {
  return e.secure === !0 ? !0 : e.secure === !1 ? !1 : e.scheme ? e.scheme.length === 3 && (e.scheme[0] === "w" || e.scheme[0] === "W") && (e.scheme[1] === "s" || e.scheme[1] === "S") && (e.scheme[2] === "s" || e.scheme[2] === "S") : !1;
}
function Ig(e) {
  return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
}
function kg(e) {
  const t = String(e.scheme).toLowerCase() === "https";
  return (e.port === (t ? 443 : 80) || e.port === "") && (e.port = void 0), e.path || (e.path = "/"), e;
}
function Vte(e) {
  return e.secure = Dg(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
}
function zte(e) {
  if ((e.port === (Dg(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
    const [t, n] = e.resourceName.split("?");
    e.path = t && t !== "/" ? t : void 0, e.query = n, e.resourceName = void 0;
  }
  return e.fragment = void 0, e;
}
function Bte(e, t) {
  if (!e.path)
    return e.error = "URN can not be parsed", e;
  const n = e.path.match(Ute);
  if (n) {
    const r = t.scheme || e.scheme || "urn";
    e.nid = n[1].toLowerCase(), e.nss = n[2];
    const o = `${r}:${t.nid || e.nid}`, s = Eu(o);
    e.path = void 0, s && (e = s.parse(e, t));
  } else
    e.error = e.error || "URN can not be parsed.";
  return e;
}
function Gte(e, t) {
  if (e.nid === void 0)
    throw new Error("URN without nid cannot be serialized");
  const n = t.scheme || e.scheme || "urn", r = e.nid.toLowerCase(), o = `${n}:${t.nid || r}`, s = Eu(o);
  s && (e = s.serialize(e, t));
  const i = e, a = e.nss;
  return i.path = `${r || t.nid}:${a}`, t.skipEscape = !0, i;
}
function Hte(e, t) {
  const n = e;
  return n.uuid = n.nss, n.nss = void 0, !t.tolerant && (!n.uuid || !Mte(n.uuid)) && (n.error = n.error || "UUID is not valid."), n;
}
function Xte(e) {
  const t = e;
  return t.nss = (e.uuid || "").toLowerCase(), t;
}
const Cg = (
  /** @type {SchemeHandler} */
  {
    scheme: "http",
    domainHost: !0,
    parse: Ig,
    serialize: kg
  }
), Kte = (
  /** @type {SchemeHandler} */
  {
    scheme: "https",
    domainHost: Cg.domainHost,
    parse: Ig,
    serialize: kg
  }
), ai = (
  /** @type {SchemeHandler} */
  {
    scheme: "ws",
    domainHost: !0,
    parse: Vte,
    serialize: zte
  }
), Wte = (
  /** @type {SchemeHandler} */
  {
    scheme: "wss",
    domainHost: ai.domainHost,
    parse: ai.parse,
    serialize: ai.serialize
  }
), Jte = (
  /** @type {SchemeHandler} */
  {
    scheme: "urn",
    parse: Bte,
    serialize: Gte,
    skipNormalize: !0
  }
), Yte = (
  /** @type {SchemeHandler} */
  {
    scheme: "urn:uuid",
    parse: Hte,
    serialize: Xte,
    skipNormalize: !0
  }
), Ni = (
  /** @type {Record<SchemeName, SchemeHandler>} */
  {
    http: Cg,
    https: Kte,
    ws: ai,
    wss: Wte,
    urn: Jte,
    "urn:uuid": Yte
  }
);
Object.setPrototypeOf(Ni, null);
function Eu(e) {
  return e && (Ni[
    /** @type {SchemeName} */
    e
  ] || Ni[
    /** @type {SchemeName} */
    e.toLowerCase()
  ]) || void 0;
}
var Qte = {
  SCHEMES: Ni,
  getSchemeHandler: Eu
};
const { normalizeIPv6: Zte, removeDotSegments: Vo, recomposeAuthority: ene, normalizeComponentEncoding: Is, isIPv4: tne, nonSimpleDomain: nne } = Ag, { SCHEMES: rne, getSchemeHandler: jg } = Qte;
function one(e, t) {
  return typeof e == "string" ? e = /** @type {T} */
  ln(Nn(e, t), t) : typeof e == "object" && (e = /** @type {T} */
  Nn(ln(e, t), t)), e;
}
function sne(e, t, n) {
  const r = n ? Object.assign({ scheme: "null" }, n) : { scheme: "null" }, o = Lg(Nn(e, r), Nn(t, r), r, !0);
  return r.skipEscape = !0, ln(o, r);
}
function Lg(e, t, n, r) {
  const o = {};
  return r || (e = Nn(ln(e, n), n), t = Nn(ln(t, n), n)), n = n || {}, !n.tolerant && t.scheme ? (o.scheme = t.scheme, o.userinfo = t.userinfo, o.host = t.host, o.port = t.port, o.path = Vo(t.path || ""), o.query = t.query) : (t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0 ? (o.userinfo = t.userinfo, o.host = t.host, o.port = t.port, o.path = Vo(t.path || ""), o.query = t.query) : (t.path ? (t.path[0] === "/" ? o.path = Vo(t.path) : ((e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0) && !e.path ? o.path = "/" + t.path : e.path ? o.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : o.path = t.path, o.path = Vo(o.path)), o.query = t.query) : (o.path = e.path, t.query !== void 0 ? o.query = t.query : o.query = e.query), o.userinfo = e.userinfo, o.host = e.host, o.port = e.port), o.scheme = e.scheme), o.fragment = t.fragment, o;
}
function ine(e, t, n) {
  return typeof e == "string" ? (e = unescape(e), e = ln(Is(Nn(e, n), !0), { ...n, skipEscape: !0 })) : typeof e == "object" && (e = ln(Is(e, !0), { ...n, skipEscape: !0 })), typeof t == "string" ? (t = unescape(t), t = ln(Is(Nn(t, n), !0), { ...n, skipEscape: !0 })) : typeof t == "object" && (t = ln(Is(t, !0), { ...n, skipEscape: !0 })), e.toLowerCase() === t.toLowerCase();
}
function ln(e, t) {
  const n = {
    host: e.host,
    scheme: e.scheme,
    userinfo: e.userinfo,
    port: e.port,
    path: e.path,
    query: e.query,
    nid: e.nid,
    nss: e.nss,
    uuid: e.uuid,
    fragment: e.fragment,
    reference: e.reference,
    resourceName: e.resourceName,
    secure: e.secure,
    error: ""
  }, r = Object.assign({}, t), o = [], s = jg(r.scheme || n.scheme);
  s && s.serialize && s.serialize(n, r), n.path !== void 0 && (r.skipEscape ? n.path = unescape(n.path) : (n.path = escape(n.path), n.scheme !== void 0 && (n.path = n.path.split("%3A").join(":")))), r.reference !== "suffix" && n.scheme && o.push(n.scheme, ":");
  const i = ene(n);
  if (i !== void 0 && (r.reference !== "suffix" && o.push("//"), o.push(i), n.path && n.path[0] !== "/" && o.push("/")), n.path !== void 0) {
    let a = n.path;
    !r.absolutePath && (!s || !s.absolutePath) && (a = Vo(a)), i === void 0 && a[0] === "/" && a[1] === "/" && (a = "/%2F" + a.slice(2)), o.push(a);
  }
  return n.query !== void 0 && o.push("?", n.query), n.fragment !== void 0 && o.push("#", n.fragment), o.join("");
}
const ane = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
function Nn(e, t) {
  const n = Object.assign({}, t), r = {
    scheme: void 0,
    userinfo: void 0,
    host: "",
    port: void 0,
    path: "",
    query: void 0,
    fragment: void 0
  };
  let o = !1;
  n.reference === "suffix" && (n.scheme ? e = n.scheme + ":" + e : e = "//" + e);
  const s = e.match(ane);
  if (s) {
    if (r.scheme = s[1], r.userinfo = s[3], r.host = s[4], r.port = parseInt(s[5], 10), r.path = s[6] || "", r.query = s[7], r.fragment = s[8], isNaN(r.port) && (r.port = s[5]), r.host)
      if (tne(r.host) === !1) {
        const c = Zte(r.host);
        r.host = c.host.toLowerCase(), o = c.isIPV6;
      } else
        o = !0;
    r.scheme === void 0 && r.userinfo === void 0 && r.host === void 0 && r.port === void 0 && r.query === void 0 && !r.path ? r.reference = "same-document" : r.scheme === void 0 ? r.reference = "relative" : r.fragment === void 0 ? r.reference = "absolute" : r.reference = "uri", n.reference && n.reference !== "suffix" && n.reference !== r.reference && (r.error = r.error || "URI is not a " + n.reference + " reference.");
    const i = jg(n.scheme || r.scheme);
    if (!n.unicodeSupport && (!i || !i.unicodeSupport) && r.host && (n.domainHost || i && i.domainHost) && o === !1 && nne(r.host))
      try {
        r.host = URL.domainToASCII(r.host.toLowerCase());
      } catch (a) {
        r.error = r.error || "Host's domain name can not be converted to ASCII: " + a;
      }
    (!i || i && !i.skipNormalize) && (e.indexOf("%") !== -1 && (r.scheme !== void 0 && (r.scheme = unescape(r.scheme)), r.host !== void 0 && (r.host = unescape(r.host))), r.path && (r.path = escape(unescape(r.path))), r.fragment && (r.fragment = encodeURI(decodeURIComponent(r.fragment)))), i && i.parse && i.parse(r, n);
  } else
    r.error = r.error || "URI can not be parsed.";
  return r;
}
const Su = {
  SCHEMES: rne,
  normalize: one,
  resolve: sne,
  resolveComponent: Lg,
  equal: ine,
  serialize: ln,
  parse: Nn
};
oa.exports = Su;
oa.exports.default = Su;
oa.exports.fastUri = Su;
var qg = oa.exports;
Object.defineProperty($u, "__esModule", { value: !0 });
const Fg = qg;
Fg.code = 'require("ajv/dist/runtime/uri").default';
$u.default = Fg;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
  var t = Bt;
  Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
    return t.KeywordCxt;
  } });
  var n = ce;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return n._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return n.str;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return n.stringify;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return n.nil;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return n.Name;
  } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
    return n.CodeGen;
  } });
  const r = hs, o = wo, s = Ar, i = ut, a = ce, c = Ke, p = je, l = J, u = Ate, d = $u, m = (D, S) => new RegExp(D, S);
  m.code = "new RegExp";
  const f = ["removeAdditional", "useDefaults", "coerceTypes"], g = /* @__PURE__ */ new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error"
  ]), y = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
  }, v = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  }, b = 200;
  function w(D) {
    var S, N, O, h, _, A, $, x, j, R, Z, ye, be, Oe, Pe, ht, _e, Ve, fn, Jt, kt, Yt, nr, rr, or;
    const Ct = D.strict, sr = (S = D.code) === null || S === void 0 ? void 0 : S.optimize, Do = sr === !0 || sr === void 0 ? 1 : sr || 0, Io = (O = (N = D.code) === null || N === void 0 ? void 0 : N.regExp) !== null && O !== void 0 ? O : m, Na = (h = D.uriResolver) !== null && h !== void 0 ? h : d.default;
    return {
      strictSchema: (A = (_ = D.strictSchema) !== null && _ !== void 0 ? _ : Ct) !== null && A !== void 0 ? A : !0,
      strictNumbers: (x = ($ = D.strictNumbers) !== null && $ !== void 0 ? $ : Ct) !== null && x !== void 0 ? x : !0,
      strictTypes: (R = (j = D.strictTypes) !== null && j !== void 0 ? j : Ct) !== null && R !== void 0 ? R : "log",
      strictTuples: (ye = (Z = D.strictTuples) !== null && Z !== void 0 ? Z : Ct) !== null && ye !== void 0 ? ye : "log",
      strictRequired: (Oe = (be = D.strictRequired) !== null && be !== void 0 ? be : Ct) !== null && Oe !== void 0 ? Oe : !1,
      code: D.code ? { ...D.code, optimize: Do, regExp: Io } : { optimize: Do, regExp: Io },
      loopRequired: (Pe = D.loopRequired) !== null && Pe !== void 0 ? Pe : b,
      loopEnum: (ht = D.loopEnum) !== null && ht !== void 0 ? ht : b,
      meta: (_e = D.meta) !== null && _e !== void 0 ? _e : !0,
      messages: (Ve = D.messages) !== null && Ve !== void 0 ? Ve : !0,
      inlineRefs: (fn = D.inlineRefs) !== null && fn !== void 0 ? fn : !0,
      schemaId: (Jt = D.schemaId) !== null && Jt !== void 0 ? Jt : "$id",
      addUsedSchema: (kt = D.addUsedSchema) !== null && kt !== void 0 ? kt : !0,
      validateSchema: (Yt = D.validateSchema) !== null && Yt !== void 0 ? Yt : !0,
      validateFormats: (nr = D.validateFormats) !== null && nr !== void 0 ? nr : !0,
      unicodeRegExp: (rr = D.unicodeRegExp) !== null && rr !== void 0 ? rr : !0,
      int32range: (or = D.int32range) !== null && or !== void 0 ? or : !0,
      uriResolver: Na
    };
  }
  class T {
    constructor(S = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), S = this.opts = { ...S, ...w(S) };
      const { es5: N, lines: O } = this.opts.code;
      this.scope = new a.ValueScope({ scope: {}, prefixes: g, es5: N, lines: O }), this.logger = z(S.logger);
      const h = S.validateFormats;
      S.validateFormats = !1, this.RULES = (0, s.getRules)(), P.call(this, y, S, "NOT SUPPORTED"), P.call(this, v, S, "DEPRECATED", "warn"), this._metaOpts = q.call(this), S.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), S.keywords && E.call(this, S.keywords), typeof S.meta == "object" && this.addMetaSchema(S.meta), B.call(this), S.validateFormats = h;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: S, meta: N, schemaId: O } = this.opts;
      let h = u;
      O === "id" && (h = { ...u }, h.id = h.$id, delete h.$id), N && S && this.addMetaSchema(h, h[O], !1);
    }
    defaultMeta() {
      const { meta: S, schemaId: N } = this.opts;
      return this.opts.defaultMeta = typeof S == "object" ? S[N] || S : void 0;
    }
    validate(S, N) {
      let O;
      if (typeof S == "string") {
        if (O = this.getSchema(S), !O)
          throw new Error(`no schema with key or ref "${S}"`);
      } else
        O = this.compile(S);
      const h = O(N);
      return "$async" in O || (this.errors = O.errors), h;
    }
    compile(S, N) {
      const O = this._addSchema(S, N);
      return O.validate || this._compileSchemaEnv(O);
    }
    compileAsync(S, N) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: O } = this.opts;
      return h.call(this, S, N);
      async function h(R, Z) {
        await _.call(this, R.$schema);
        const ye = this._addSchema(R, Z);
        return ye.validate || A.call(this, ye);
      }
      async function _(R) {
        R && !this.getSchema(R) && await h.call(this, { $ref: R }, !0);
      }
      async function A(R) {
        try {
          return this._compileSchemaEnv(R);
        } catch (Z) {
          if (!(Z instanceof o.default))
            throw Z;
          return $.call(this, Z), await x.call(this, Z.missingSchema), A.call(this, R);
        }
      }
      function $({ missingSchema: R, missingRef: Z }) {
        if (this.refs[R])
          throw new Error(`AnySchema ${R} is loaded but ${Z} cannot be resolved`);
      }
      async function x(R) {
        const Z = await j.call(this, R);
        this.refs[R] || await _.call(this, Z.$schema), this.refs[R] || this.addSchema(Z, R, N);
      }
      async function j(R) {
        const Z = this._loading[R];
        if (Z)
          return Z;
        try {
          return await (this._loading[R] = O(R));
        } finally {
          delete this._loading[R];
        }
      }
    }
    // Adds schema to the instance
    addSchema(S, N, O, h = this.opts.validateSchema) {
      if (Array.isArray(S)) {
        for (const A of S)
          this.addSchema(A, void 0, O, h);
        return this;
      }
      let _;
      if (typeof S == "object") {
        const { schemaId: A } = this.opts;
        if (_ = S[A], _ !== void 0 && typeof _ != "string")
          throw new Error(`schema ${A} must be string`);
      }
      return N = (0, c.normalizeId)(N || _), this._checkUnique(N), this.schemas[N] = this._addSchema(S, O, N, h, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(S, N, O = this.opts.validateSchema) {
      return this.addSchema(S, N, !0, O), this;
    }
    //  Validate schema against its meta-schema
    validateSchema(S, N) {
      if (typeof S == "boolean")
        return !0;
      let O;
      if (O = S.$schema, O !== void 0 && typeof O != "string")
        throw new Error("$schema must be a string");
      if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const h = this.validate(O, S);
      if (!h && N) {
        const _ = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log")
          this.logger.error(_);
        else
          throw new Error(_);
      }
      return h;
    }
    // Get compiled schema by `key` or `ref`.
    // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
    getSchema(S) {
      let N;
      for (; typeof (N = C.call(this, S)) == "string"; )
        S = N;
      if (N === void 0) {
        const { schemaId: O } = this.opts, h = new i.SchemaEnv({ schema: {}, schemaId: O });
        if (N = i.resolveSchema.call(this, h, S), !N)
          return;
        this.refs[S] = N;
      }
      return N.validate || this._compileSchemaEnv(N);
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema(S) {
      if (S instanceof RegExp)
        return this._removeAllSchemas(this.schemas, S), this._removeAllSchemas(this.refs, S), this;
      switch (typeof S) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          const N = C.call(this, S);
          return typeof N == "object" && this._cache.delete(N.schema), delete this.schemas[S], delete this.refs[S], this;
        }
        case "object": {
          const N = S;
          this._cache.delete(N);
          let O = S[this.opts.schemaId];
          return O && (O = (0, c.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary(S) {
      for (const N of S)
        this.addKeyword(N);
      return this;
    }
    addKeyword(S, N) {
      let O;
      if (typeof S == "string")
        O = S, typeof N == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), N.keyword = O);
      else if (typeof S == "object" && N === void 0) {
        if (N = S, O = N.keyword, Array.isArray(O) && !O.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (F.call(this, O, N), !N)
        return (0, l.eachItem)(O, (_) => U.call(this, _)), this;
      V.call(this, N);
      const h = {
        ...N,
        type: (0, p.getJSONTypes)(N.type),
        schemaType: (0, p.getJSONTypes)(N.schemaType)
      };
      return (0, l.eachItem)(O, h.type.length === 0 ? (_) => U.call(this, _, h) : (_) => h.type.forEach((A) => U.call(this, _, h, A))), this;
    }
    getKeyword(S) {
      const N = this.RULES.all[S];
      return typeof N == "object" ? N.definition : !!N;
    }
    // Remove keyword
    removeKeyword(S) {
      const { RULES: N } = this;
      delete N.keywords[S], delete N.all[S];
      for (const O of N.rules) {
        const h = O.rules.findIndex((_) => _.keyword === S);
        h >= 0 && O.rules.splice(h, 1);
      }
      return this;
    }
    // Add format
    addFormat(S, N) {
      return typeof N == "string" && (N = new RegExp(N)), this.formats[S] = N, this;
    }
    errorsText(S = this.errors, { separator: N = ", ", dataVar: O = "data" } = {}) {
      return !S || S.length === 0 ? "No errors" : S.map((h) => `${O}${h.instancePath} ${h.message}`).reduce((h, _) => h + N + _);
    }
    $dataMetaSchema(S, N) {
      const O = this.RULES.all;
      S = JSON.parse(JSON.stringify(S));
      for (const h of N) {
        const _ = h.split("/").slice(1);
        let A = S;
        for (const $ of _)
          A = A[$];
        for (const $ in O) {
          const x = O[$];
          if (typeof x != "object")
            continue;
          const { $data: j } = x.definition, R = A[$];
          j && R && (A[$] = X(R));
        }
      }
      return S;
    }
    _removeAllSchemas(S, N) {
      for (const O in S) {
        const h = S[O];
        (!N || N.test(O)) && (typeof h == "string" ? delete S[O] : h && !h.meta && (this._cache.delete(h.schema), delete S[O]));
      }
    }
    _addSchema(S, N, O, h = this.opts.validateSchema, _ = this.opts.addUsedSchema) {
      let A;
      const { schemaId: $ } = this.opts;
      if (typeof S == "object")
        A = S[$];
      else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        if (typeof S != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let x = this._cache.get(S);
      if (x !== void 0)
        return x;
      O = (0, c.normalizeId)(A || O);
      const j = c.getSchemaRefs.call(this, S, O);
      return x = new i.SchemaEnv({ schema: S, schemaId: $, meta: N, baseId: O, localRefs: j }), this._cache.set(x.schema, x), _ && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = x), h && this.validateSchema(S, !0), x;
    }
    _checkUnique(S) {
      if (this.schemas[S] || this.refs[S])
        throw new Error(`schema with key or id "${S}" already exists`);
    }
    _compileSchemaEnv(S) {
      if (S.meta ? this._compileMetaSchema(S) : i.compileSchema.call(this, S), !S.validate)
        throw new Error("ajv implementation error");
      return S.validate;
    }
    _compileMetaSchema(S) {
      const N = this.opts;
      this.opts = this._metaOpts;
      try {
        i.compileSchema.call(this, S);
      } finally {
        this.opts = N;
      }
    }
  }
  T.ValidationError = r.default, T.MissingRefError = o.default, e.default = T;
  function P(D, S, N, O = "error") {
    for (const h in D) {
      const _ = h;
      _ in S && this.logger[O](`${N}: option ${h}. ${D[_]}`);
    }
  }
  function C(D) {
    return D = (0, c.normalizeId)(D), this.schemas[D] || this.refs[D];
  }
  function B() {
    const D = this.opts.schemas;
    if (D)
      if (Array.isArray(D))
        this.addSchema(D);
      else
        for (const S in D)
          this.addSchema(D[S], S);
  }
  function k() {
    for (const D in this.opts.formats) {
      const S = this.opts.formats[D];
      S && this.addFormat(D, S);
    }
  }
  function E(D) {
    if (Array.isArray(D)) {
      this.addVocabulary(D);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const S in D) {
      const N = D[S];
      N.keyword || (N.keyword = S), this.addKeyword(N);
    }
  }
  function q() {
    const D = { ...this.opts };
    for (const S of f)
      delete D[S];
    return D;
  }
  const I = { log() {
  }, warn() {
  }, error() {
  } };
  function z(D) {
    if (D === !1)
      return I;
    if (D === void 0)
      return console;
    if (D.log && D.warn && D.error)
      return D;
    throw new Error("logger must implement log, warn and error methods");
  }
  const H = /^[a-z_$][a-z0-9_$:-]*$/i;
  function F(D, S) {
    const { RULES: N } = this;
    if ((0, l.eachItem)(D, (O) => {
      if (N.keywords[O])
        throw new Error(`Keyword ${O} is already defined`);
      if (!H.test(O))
        throw new Error(`Keyword ${O} has invalid name`);
    }), !!S && S.$data && !("code" in S || "validate" in S))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function U(D, S, N) {
    var O;
    const h = S == null ? void 0 : S.post;
    if (N && h)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: _ } = this;
    let A = h ? _.post : _.rules.find(({ type: x }) => x === N);
    if (A || (A = { type: N, rules: [] }, _.rules.push(A)), _.keywords[D] = !0, !S)
      return;
    const $ = {
      keyword: D,
      definition: {
        ...S,
        type: (0, p.getJSONTypes)(S.type),
        schemaType: (0, p.getJSONTypes)(S.schemaType)
      }
    };
    S.before ? G.call(this, A, $, S.before) : A.rules.push($), _.all[D] = $, (O = S.implements) === null || O === void 0 || O.forEach((x) => this.addKeyword(x));
  }
  function G(D, S, N) {
    const O = D.rules.findIndex((h) => h.keyword === N);
    O >= 0 ? D.rules.splice(O, 0, S) : (D.rules.push(S), this.logger.warn(`rule ${N} is not defined`));
  }
  function V(D) {
    let { metaSchema: S } = D;
    S !== void 0 && (D.$data && this.opts.$data && (S = X(S)), D.validateSchema = this.compile(S, !0));
  }
  const K = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function X(D) {
    return { anyOf: [D, K] };
  }
})(Jy);
var Tu = {}, Ou = {}, Pu = {};
Object.defineProperty(Pu, "__esModule", { value: !0 });
const cne = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
Pu.default = cne;
var Rn = {};
Object.defineProperty(Rn, "__esModule", { value: !0 });
Rn.callRef = Rn.getValidate = void 0;
const lne = wo, zf = fe, vt = ce, Fr = St, Bf = ut, ks = J, une = {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    const { gen: t, schema: n, it: r } = e, { baseId: o, schemaEnv: s, validateName: i, opts: a, self: c } = r, { root: p } = s;
    if ((n === "#" || n === "#/") && o === p.baseId)
      return u();
    const l = Bf.resolveRef.call(c, p, o, n);
    if (l === void 0)
      throw new lne.default(r.opts.uriResolver, o, n);
    if (l instanceof Bf.SchemaEnv)
      return d(l);
    return m(l);
    function u() {
      if (s === p)
        return ci(e, i, s, s.$async);
      const f = t.scopeValue("root", { ref: p });
      return ci(e, (0, vt._)`${f}.validate`, p, p.$async);
    }
    function d(f) {
      const g = Mg(e, f);
      ci(e, g, f, f.$async);
    }
    function m(f) {
      const g = t.scopeValue("schema", a.code.source === !0 ? { ref: f, code: (0, vt.stringify)(f) } : { ref: f }), y = t.name("valid"), v = e.subschema({
        schema: f,
        dataTypes: [],
        schemaPath: vt.nil,
        topSchemaRef: g,
        errSchemaPath: n
      }, y);
      e.mergeEvaluated(v), e.ok(y);
    }
  }
};
function Mg(e, t) {
  const { gen: n } = e;
  return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, vt._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
}
Rn.getValidate = Mg;
function ci(e, t, n, r) {
  const { gen: o, it: s } = e, { allErrors: i, schemaEnv: a, opts: c } = s, p = c.passContext ? Fr.default.this : vt.nil;
  r ? l() : u();
  function l() {
    if (!a.$async)
      throw new Error("async schema referenced by sync schema");
    const f = o.let("valid");
    o.try(() => {
      o.code((0, vt._)`await ${(0, zf.callValidateCode)(e, t, p)}`), m(t), i || o.assign(f, !0);
    }, (g) => {
      o.if((0, vt._)`!(${g} instanceof ${s.ValidationError})`, () => o.throw(g)), d(g), i || o.assign(f, !1);
    }), e.ok(f);
  }
  function u() {
    e.result((0, zf.callValidateCode)(e, t, p), () => m(t), () => d(t));
  }
  function d(f) {
    const g = (0, vt._)`${f}.errors`;
    o.assign(Fr.default.vErrors, (0, vt._)`${Fr.default.vErrors} === null ? ${g} : ${Fr.default.vErrors}.concat(${g})`), o.assign(Fr.default.errors, (0, vt._)`${Fr.default.vErrors}.length`);
  }
  function m(f) {
    var g;
    if (!s.opts.unevaluated)
      return;
    const y = (g = n == null ? void 0 : n.validate) === null || g === void 0 ? void 0 : g.evaluated;
    if (s.props !== !0)
      if (y && !y.dynamicProps)
        y.props !== void 0 && (s.props = ks.mergeEvaluated.props(o, y.props, s.props));
      else {
        const v = o.var("props", (0, vt._)`${f}.evaluated.props`);
        s.props = ks.mergeEvaluated.props(o, v, s.props, vt.Name);
      }
    if (s.items !== !0)
      if (y && !y.dynamicItems)
        y.items !== void 0 && (s.items = ks.mergeEvaluated.items(o, y.items, s.items));
      else {
        const v = o.var("items", (0, vt._)`${f}.evaluated.items`);
        s.items = ks.mergeEvaluated.items(o, v, s.items, vt.Name);
      }
  }
}
Rn.callRef = ci;
Rn.default = une;
Object.defineProperty(Ou, "__esModule", { value: !0 });
const pne = Pu, dne = Rn, fne = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  pne.default,
  dne.default
];
Ou.default = fne;
var Nu = {}, Ru = {};
Object.defineProperty(Ru, "__esModule", { value: !0 });
const Ri = ce, jn = Ri.operators, Ai = {
  maximum: { okStr: "<=", ok: jn.LTE, fail: jn.GT },
  minimum: { okStr: ">=", ok: jn.GTE, fail: jn.LT },
  exclusiveMaximum: { okStr: "<", ok: jn.LT, fail: jn.GTE },
  exclusiveMinimum: { okStr: ">", ok: jn.GT, fail: jn.LTE }
}, mne = {
  message: ({ keyword: e, schemaCode: t }) => (0, Ri.str)`must be ${Ai[e].okStr} ${t}`,
  params: ({ keyword: e, schemaCode: t }) => (0, Ri._)`{comparison: ${Ai[e].okStr}, limit: ${t}}`
}, hne = {
  keyword: Object.keys(Ai),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: mne,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e;
    e.fail$data((0, Ri._)`${n} ${Ai[t].fail} ${r} || isNaN(${n})`);
  }
};
Ru.default = hne;
var Au = {};
Object.defineProperty(Au, "__esModule", { value: !0 });
const Ho = ce, yne = {
  message: ({ schemaCode: e }) => (0, Ho.str)`must be multiple of ${e}`,
  params: ({ schemaCode: e }) => (0, Ho._)`{multipleOf: ${e}}`
}, gne = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: yne,
  code(e) {
    const { gen: t, data: n, schemaCode: r, it: o } = e, s = o.opts.multipleOfPrecision, i = t.let("res"), a = s ? (0, Ho._)`Math.abs(Math.round(${i}) - ${i}) > 1e-${s}` : (0, Ho._)`${i} !== parseInt(${i})`;
    e.fail$data((0, Ho._)`(${r} === 0 || (${i} = ${n}/${r}, ${a}))`);
  }
};
Au.default = gne;
var Du = {}, Iu = {};
Object.defineProperty(Iu, "__esModule", { value: !0 });
function Ug(e) {
  const t = e.length;
  let n = 0, r = 0, o;
  for (; r < t; )
    n++, o = e.charCodeAt(r++), o >= 55296 && o <= 56319 && r < t && (o = e.charCodeAt(r), (o & 64512) === 56320 && r++);
  return n;
}
Iu.default = Ug;
Ug.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(Du, "__esModule", { value: !0 });
const dr = ce, vne = J, bne = Iu, wne = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxLength" ? "more" : "fewer";
    return (0, dr.str)`must NOT have ${n} than ${t} characters`;
  },
  params: ({ schemaCode: e }) => (0, dr._)`{limit: ${e}}`
}, xne = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: wne,
  code(e) {
    const { keyword: t, data: n, schemaCode: r, it: o } = e, s = t === "maxLength" ? dr.operators.GT : dr.operators.LT, i = o.opts.unicode === !1 ? (0, dr._)`${n}.length` : (0, dr._)`${(0, vne.useFunc)(e.gen, bne.default)}(${n})`;
    e.fail$data((0, dr._)`${i} ${s} ${r}`);
  }
};
Du.default = xne;
var ku = {};
Object.defineProperty(ku, "__esModule", { value: !0 });
const _ne = fe, Di = ce, $ne = {
  message: ({ schemaCode: e }) => (0, Di.str)`must match pattern "${e}"`,
  params: ({ schemaCode: e }) => (0, Di._)`{pattern: ${e}}`
}, Ene = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: $ne,
  code(e) {
    const { data: t, $data: n, schema: r, schemaCode: o, it: s } = e, i = s.opts.unicodeRegExp ? "u" : "", a = n ? (0, Di._)`(new RegExp(${o}, ${i}))` : (0, _ne.usePattern)(e, r);
    e.fail$data((0, Di._)`!${a}.test(${t})`);
  }
};
ku.default = Ene;
var Cu = {};
Object.defineProperty(Cu, "__esModule", { value: !0 });
const Xo = ce, Sne = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxProperties" ? "more" : "fewer";
    return (0, Xo.str)`must NOT have ${n} than ${t} properties`;
  },
  params: ({ schemaCode: e }) => (0, Xo._)`{limit: ${e}}`
}, Tne = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: Sne,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, o = t === "maxProperties" ? Xo.operators.GT : Xo.operators.LT;
    e.fail$data((0, Xo._)`Object.keys(${n}).length ${o} ${r}`);
  }
};
Cu.default = Tne;
var ju = {};
Object.defineProperty(ju, "__esModule", { value: !0 });
const jo = fe, Ko = ce, One = J, Pne = {
  message: ({ params: { missingProperty: e } }) => (0, Ko.str)`must have required property '${e}'`,
  params: ({ params: { missingProperty: e } }) => (0, Ko._)`{missingProperty: ${e}}`
}, Nne = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: Pne,
  code(e) {
    const { gen: t, schema: n, schemaCode: r, data: o, $data: s, it: i } = e, { opts: a } = i;
    if (!s && n.length === 0)
      return;
    const c = n.length >= a.loopRequired;
    if (i.allErrors ? p() : l(), a.strictRequired) {
      const m = e.parentSchema.properties, { definedProperties: f } = e.it;
      for (const g of n)
        if ((m == null ? void 0 : m[g]) === void 0 && !f.has(g)) {
          const y = i.schemaEnv.baseId + i.errSchemaPath, v = `required property "${g}" is not defined at "${y}" (strictRequired)`;
          (0, One.checkStrictMode)(i, v, i.opts.strictRequired);
        }
    }
    function p() {
      if (c || s)
        e.block$data(Ko.nil, u);
      else
        for (const m of n)
          (0, jo.checkReportMissingProp)(e, m);
    }
    function l() {
      const m = t.let("missing");
      if (c || s) {
        const f = t.let("valid", !0);
        e.block$data(f, () => d(m, f)), e.ok(f);
      } else
        t.if((0, jo.checkMissingProp)(e, n, m)), (0, jo.reportMissingProp)(e, m), t.else();
    }
    function u() {
      t.forOf("prop", r, (m) => {
        e.setParams({ missingProperty: m }), t.if((0, jo.noPropertyInData)(t, o, m, a.ownProperties), () => e.error());
      });
    }
    function d(m, f) {
      e.setParams({ missingProperty: m }), t.forOf(m, r, () => {
        t.assign(f, (0, jo.propertyInData)(t, o, m, a.ownProperties)), t.if((0, Ko.not)(f), () => {
          e.error(), t.break();
        });
      }, Ko.nil);
    }
  }
};
ju.default = Nne;
var Lu = {};
Object.defineProperty(Lu, "__esModule", { value: !0 });
const Wo = ce, Rne = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxItems" ? "more" : "fewer";
    return (0, Wo.str)`must NOT have ${n} than ${t} items`;
  },
  params: ({ schemaCode: e }) => (0, Wo._)`{limit: ${e}}`
}, Ane = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: Rne,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, o = t === "maxItems" ? Wo.operators.GT : Wo.operators.LT;
    e.fail$data((0, Wo._)`${n}.length ${o} ${r}`);
  }
};
Lu.default = Ane;
var qu = {}, ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
const Vg = ta;
Vg.code = 'require("ajv/dist/runtime/equal").default';
ys.default = Vg;
Object.defineProperty(qu, "__esModule", { value: !0 });
const bc = je, Ge = ce, Dne = J, Ine = ys, kne = {
  message: ({ params: { i: e, j: t } }) => (0, Ge.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
  params: ({ params: { i: e, j: t } }) => (0, Ge._)`{i: ${e}, j: ${t}}`
}, Cne = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: kne,
  code(e) {
    const { gen: t, data: n, $data: r, schema: o, parentSchema: s, schemaCode: i, it: a } = e;
    if (!r && !o)
      return;
    const c = t.let("valid"), p = s.items ? (0, bc.getSchemaTypes)(s.items) : [];
    e.block$data(c, l, (0, Ge._)`${i} === false`), e.ok(c);
    function l() {
      const f = t.let("i", (0, Ge._)`${n}.length`), g = t.let("j");
      e.setParams({ i: f, j: g }), t.assign(c, !0), t.if((0, Ge._)`${f} > 1`, () => (u() ? d : m)(f, g));
    }
    function u() {
      return p.length > 0 && !p.some((f) => f === "object" || f === "array");
    }
    function d(f, g) {
      const y = t.name("item"), v = (0, bc.checkDataTypes)(p, y, a.opts.strictNumbers, bc.DataType.Wrong), b = t.const("indices", (0, Ge._)`{}`);
      t.for((0, Ge._)`;${f}--;`, () => {
        t.let(y, (0, Ge._)`${n}[${f}]`), t.if(v, (0, Ge._)`continue`), p.length > 1 && t.if((0, Ge._)`typeof ${y} == "string"`, (0, Ge._)`${y} += "_"`), t.if((0, Ge._)`typeof ${b}[${y}] == "number"`, () => {
          t.assign(g, (0, Ge._)`${b}[${y}]`), e.error(), t.assign(c, !1).break();
        }).code((0, Ge._)`${b}[${y}] = ${f}`);
      });
    }
    function m(f, g) {
      const y = (0, Dne.useFunc)(t, Ine.default), v = t.name("outer");
      t.label(v).for((0, Ge._)`;${f}--;`, () => t.for((0, Ge._)`${g} = ${f}; ${g}--;`, () => t.if((0, Ge._)`${y}(${n}[${f}], ${n}[${g}])`, () => {
        e.error(), t.assign(c, !1).break(v);
      })));
    }
  }
};
qu.default = Cne;
var Fu = {};
Object.defineProperty(Fu, "__esModule", { value: !0 });
const vl = ce, jne = J, Lne = ys, qne = {
  message: "must be equal to constant",
  params: ({ schemaCode: e }) => (0, vl._)`{allowedValue: ${e}}`
}, Fne = {
  keyword: "const",
  $data: !0,
  error: qne,
  code(e) {
    const { gen: t, data: n, $data: r, schemaCode: o, schema: s } = e;
    r || s && typeof s == "object" ? e.fail$data((0, vl._)`!${(0, jne.useFunc)(t, Lne.default)}(${n}, ${o})`) : e.fail((0, vl._)`${s} !== ${n}`);
  }
};
Fu.default = Fne;
var Mu = {};
Object.defineProperty(Mu, "__esModule", { value: !0 });
const zo = ce, Mne = J, Une = ys, Vne = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: e }) => (0, zo._)`{allowedValues: ${e}}`
}, zne = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: Vne,
  code(e) {
    const { gen: t, data: n, $data: r, schema: o, schemaCode: s, it: i } = e;
    if (!r && o.length === 0)
      throw new Error("enum must have non-empty array");
    const a = o.length >= i.opts.loopEnum;
    let c;
    const p = () => c ?? (c = (0, Mne.useFunc)(t, Une.default));
    let l;
    if (a || r)
      l = t.let("valid"), e.block$data(l, u);
    else {
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      const m = t.const("vSchema", s);
      l = (0, zo.or)(...o.map((f, g) => d(m, g)));
    }
    e.pass(l);
    function u() {
      t.assign(l, !1), t.forOf("v", s, (m) => t.if((0, zo._)`${p()}(${n}, ${m})`, () => t.assign(l, !0).break()));
    }
    function d(m, f) {
      const g = o[f];
      return typeof g == "object" && g !== null ? (0, zo._)`${p()}(${n}, ${m}[${f}])` : (0, zo._)`${n} === ${g}`;
    }
  }
};
Mu.default = zne;
Object.defineProperty(Nu, "__esModule", { value: !0 });
const Bne = Ru, Gne = Au, Hne = Du, Xne = ku, Kne = Cu, Wne = ju, Jne = Lu, Yne = qu, Qne = Fu, Zne = Mu, ere = [
  // number
  Bne.default,
  Gne.default,
  // string
  Hne.default,
  Xne.default,
  // object
  Kne.default,
  Wne.default,
  // array
  Jne.default,
  Yne.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  Qne.default,
  Zne.default
];
Nu.default = ere;
var Uu = {}, xo = {};
Object.defineProperty(xo, "__esModule", { value: !0 });
xo.validateAdditionalItems = void 0;
const fr = ce, bl = J, tre = {
  message: ({ params: { len: e } }) => (0, fr.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, fr._)`{limit: ${e}}`
}, nre = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: tre,
  code(e) {
    const { parentSchema: t, it: n } = e, { items: r } = t;
    if (!Array.isArray(r)) {
      (0, bl.checkStrictMode)(n, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    zg(e, r);
  }
};
function zg(e, t) {
  const { gen: n, schema: r, data: o, keyword: s, it: i } = e;
  i.items = !0;
  const a = n.const("len", (0, fr._)`${o}.length`);
  if (r === !1)
    e.setParams({ len: t.length }), e.pass((0, fr._)`${a} <= ${t.length}`);
  else if (typeof r == "object" && !(0, bl.alwaysValidSchema)(i, r)) {
    const p = n.var("valid", (0, fr._)`${a} <= ${t.length}`);
    n.if((0, fr.not)(p), () => c(p)), e.ok(p);
  }
  function c(p) {
    n.forRange("i", t.length, a, (l) => {
      e.subschema({ keyword: s, dataProp: l, dataPropType: bl.Type.Num }, p), i.allErrors || n.if((0, fr.not)(p), () => n.break());
    });
  }
}
xo.validateAdditionalItems = zg;
xo.default = nre;
var Vu = {}, _o = {};
Object.defineProperty(_o, "__esModule", { value: !0 });
_o.validateTuple = void 0;
const Gf = ce, li = J, rre = fe, ore = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    const { schema: t, it: n } = e;
    if (Array.isArray(t))
      return Bg(e, "additionalItems", t);
    n.items = !0, !(0, li.alwaysValidSchema)(n, t) && e.ok((0, rre.validateArray)(e));
  }
};
function Bg(e, t, n = e.schema) {
  const { gen: r, parentSchema: o, data: s, keyword: i, it: a } = e;
  l(o), a.opts.unevaluated && n.length && a.items !== !0 && (a.items = li.mergeEvaluated.items(r, n.length, a.items));
  const c = r.name("valid"), p = r.const("len", (0, Gf._)`${s}.length`);
  n.forEach((u, d) => {
    (0, li.alwaysValidSchema)(a, u) || (r.if((0, Gf._)`${p} > ${d}`, () => e.subschema({
      keyword: i,
      schemaProp: d,
      dataProp: d
    }, c)), e.ok(c));
  });
  function l(u) {
    const { opts: d, errSchemaPath: m } = a, f = n.length, g = f === u.minItems && (f === u.maxItems || u[t] === !1);
    if (d.strictTuples && !g) {
      const y = `"${i}" is ${f}-tuple, but minItems or maxItems/${t} are not specified or different at path "${m}"`;
      (0, li.checkStrictMode)(a, y, d.strictTuples);
    }
  }
}
_o.validateTuple = Bg;
_o.default = ore;
Object.defineProperty(Vu, "__esModule", { value: !0 });
const sre = _o, ire = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => (0, sre.validateTuple)(e, "items")
};
Vu.default = ire;
var zu = {};
Object.defineProperty(zu, "__esModule", { value: !0 });
const Hf = ce, are = J, cre = fe, lre = xo, ure = {
  message: ({ params: { len: e } }) => (0, Hf.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, Hf._)`{limit: ${e}}`
}, pre = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: ure,
  code(e) {
    const { schema: t, parentSchema: n, it: r } = e, { prefixItems: o } = n;
    r.items = !0, !(0, are.alwaysValidSchema)(r, t) && (o ? (0, lre.validateAdditionalItems)(e, o) : e.ok((0, cre.validateArray)(e)));
  }
};
zu.default = pre;
var Bu = {};
Object.defineProperty(Bu, "__esModule", { value: !0 });
const At = ce, Cs = J, dre = {
  message: ({ params: { min: e, max: t } }) => t === void 0 ? (0, At.str)`must contain at least ${e} valid item(s)` : (0, At.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
  params: ({ params: { min: e, max: t } }) => t === void 0 ? (0, At._)`{minContains: ${e}}` : (0, At._)`{minContains: ${e}, maxContains: ${t}}`
}, fre = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: dre,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: o, it: s } = e;
    let i, a;
    const { minContains: c, maxContains: p } = r;
    s.opts.next ? (i = c === void 0 ? 1 : c, a = p) : i = 1;
    const l = t.const("len", (0, At._)`${o}.length`);
    if (e.setParams({ min: i, max: a }), a === void 0 && i === 0) {
      (0, Cs.checkStrictMode)(s, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (a !== void 0 && i > a) {
      (0, Cs.checkStrictMode)(s, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, Cs.alwaysValidSchema)(s, n)) {
      let g = (0, At._)`${l} >= ${i}`;
      a !== void 0 && (g = (0, At._)`${g} && ${l} <= ${a}`), e.pass(g);
      return;
    }
    s.items = !0;
    const u = t.name("valid");
    a === void 0 && i === 1 ? m(u, () => t.if(u, () => t.break())) : i === 0 ? (t.let(u, !0), a !== void 0 && t.if((0, At._)`${o}.length > 0`, d)) : (t.let(u, !1), d()), e.result(u, () => e.reset());
    function d() {
      const g = t.name("_valid"), y = t.let("count", 0);
      m(g, () => t.if(g, () => f(y)));
    }
    function m(g, y) {
      t.forRange("i", 0, l, (v) => {
        e.subschema({
          keyword: "contains",
          dataProp: v,
          dataPropType: Cs.Type.Num,
          compositeRule: !0
        }, g), y();
      });
    }
    function f(g) {
      t.code((0, At._)`${g}++`), a === void 0 ? t.if((0, At._)`${g} >= ${i}`, () => t.assign(u, !0).break()) : (t.if((0, At._)`${g} > ${a}`, () => t.assign(u, !1).break()), i === 1 ? t.assign(u, !0) : t.if((0, At._)`${g} >= ${i}`, () => t.assign(u, !0)));
    }
  }
};
Bu.default = fre;
var sa = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
  const t = ce, n = J, r = fe;
  e.error = {
    message: ({ params: { property: c, depsCount: p, deps: l } }) => {
      const u = p === 1 ? "property" : "properties";
      return (0, t.str)`must have ${u} ${l} when property ${c} is present`;
    },
    params: ({ params: { property: c, depsCount: p, deps: l, missingProperty: u } }) => (0, t._)`{property: ${c},
    missingProperty: ${u},
    depsCount: ${p},
    deps: ${l}}`
    // TODO change to reference
  };
  const o = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: e.error,
    code(c) {
      const [p, l] = s(c);
      i(c, p), a(c, l);
    }
  };
  function s({ schema: c }) {
    const p = {}, l = {};
    for (const u in c) {
      if (u === "__proto__")
        continue;
      const d = Array.isArray(c[u]) ? p : l;
      d[u] = c[u];
    }
    return [p, l];
  }
  function i(c, p = c.schema) {
    const { gen: l, data: u, it: d } = c;
    if (Object.keys(p).length === 0)
      return;
    const m = l.let("missing");
    for (const f in p) {
      const g = p[f];
      if (g.length === 0)
        continue;
      const y = (0, r.propertyInData)(l, u, f, d.opts.ownProperties);
      c.setParams({
        property: f,
        depsCount: g.length,
        deps: g.join(", ")
      }), d.allErrors ? l.if(y, () => {
        for (const v of g)
          (0, r.checkReportMissingProp)(c, v);
      }) : (l.if((0, t._)`${y} && (${(0, r.checkMissingProp)(c, g, m)})`), (0, r.reportMissingProp)(c, m), l.else());
    }
  }
  e.validatePropertyDeps = i;
  function a(c, p = c.schema) {
    const { gen: l, data: u, keyword: d, it: m } = c, f = l.name("valid");
    for (const g in p)
      (0, n.alwaysValidSchema)(m, p[g]) || (l.if(
        (0, r.propertyInData)(l, u, g, m.opts.ownProperties),
        () => {
          const y = c.subschema({ keyword: d, schemaProp: g }, f);
          c.mergeValidEvaluated(y, f);
        },
        () => l.var(f, !0)
        // TODO var
      ), c.ok(f));
  }
  e.validateSchemaDeps = a, e.default = o;
})(sa);
var Gu = {};
Object.defineProperty(Gu, "__esModule", { value: !0 });
const Gg = ce, mre = J, hre = {
  message: "property name must be valid",
  params: ({ params: e }) => (0, Gg._)`{propertyName: ${e.propertyName}}`
}, yre = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: hre,
  code(e) {
    const { gen: t, schema: n, data: r, it: o } = e;
    if ((0, mre.alwaysValidSchema)(o, n))
      return;
    const s = t.name("valid");
    t.forIn("key", r, (i) => {
      e.setParams({ propertyName: i }), e.subschema({
        keyword: "propertyNames",
        data: i,
        dataTypes: ["string"],
        propertyName: i,
        compositeRule: !0
      }, s), t.if((0, Gg.not)(s), () => {
        e.error(!0), o.allErrors || t.break();
      });
    }), e.ok(s);
  }
};
Gu.default = yre;
var ia = {};
Object.defineProperty(ia, "__esModule", { value: !0 });
const js = fe, qt = ce, gre = St, Ls = J, vre = {
  message: "must NOT have additional properties",
  params: ({ params: e }) => (0, qt._)`{additionalProperty: ${e.additionalProperty}}`
}, bre = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: vre,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: o, errsCount: s, it: i } = e;
    if (!s)
      throw new Error("ajv implementation error");
    const { allErrors: a, opts: c } = i;
    if (i.props = !0, c.removeAdditional !== "all" && (0, Ls.alwaysValidSchema)(i, n))
      return;
    const p = (0, js.allSchemaProperties)(r.properties), l = (0, js.allSchemaProperties)(r.patternProperties);
    u(), e.ok((0, qt._)`${s} === ${gre.default.errors}`);
    function u() {
      t.forIn("key", o, (y) => {
        !p.length && !l.length ? f(y) : t.if(d(y), () => f(y));
      });
    }
    function d(y) {
      let v;
      if (p.length > 8) {
        const b = (0, Ls.schemaRefOrVal)(i, r.properties, "properties");
        v = (0, js.isOwnProperty)(t, b, y);
      } else p.length ? v = (0, qt.or)(...p.map((b) => (0, qt._)`${y} === ${b}`)) : v = qt.nil;
      return l.length && (v = (0, qt.or)(v, ...l.map((b) => (0, qt._)`${(0, js.usePattern)(e, b)}.test(${y})`))), (0, qt.not)(v);
    }
    function m(y) {
      t.code((0, qt._)`delete ${o}[${y}]`);
    }
    function f(y) {
      if (c.removeAdditional === "all" || c.removeAdditional && n === !1) {
        m(y);
        return;
      }
      if (n === !1) {
        e.setParams({ additionalProperty: y }), e.error(), a || t.break();
        return;
      }
      if (typeof n == "object" && !(0, Ls.alwaysValidSchema)(i, n)) {
        const v = t.name("valid");
        c.removeAdditional === "failing" ? (g(y, v, !1), t.if((0, qt.not)(v), () => {
          e.reset(), m(y);
        })) : (g(y, v), a || t.if((0, qt.not)(v), () => t.break()));
      }
    }
    function g(y, v, b) {
      const w = {
        keyword: "additionalProperties",
        dataProp: y,
        dataPropType: Ls.Type.Str
      };
      b === !1 && Object.assign(w, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), e.subschema(w, v);
    }
  }
};
ia.default = bre;
var Hu = {};
Object.defineProperty(Hu, "__esModule", { value: !0 });
const wre = Bt, Xf = fe, wc = J, Kf = ia, xre = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: o, it: s } = e;
    s.opts.removeAdditional === "all" && r.additionalProperties === void 0 && Kf.default.code(new wre.KeywordCxt(s, Kf.default, "additionalProperties"));
    const i = (0, Xf.allSchemaProperties)(n);
    for (const u of i)
      s.definedProperties.add(u);
    s.opts.unevaluated && i.length && s.props !== !0 && (s.props = wc.mergeEvaluated.props(t, (0, wc.toHash)(i), s.props));
    const a = i.filter((u) => !(0, wc.alwaysValidSchema)(s, n[u]));
    if (a.length === 0)
      return;
    const c = t.name("valid");
    for (const u of a)
      p(u) ? l(u) : (t.if((0, Xf.propertyInData)(t, o, u, s.opts.ownProperties)), l(u), s.allErrors || t.else().var(c, !0), t.endIf()), e.it.definedProperties.add(u), e.ok(c);
    function p(u) {
      return s.opts.useDefaults && !s.compositeRule && n[u].default !== void 0;
    }
    function l(u) {
      e.subschema({
        keyword: "properties",
        schemaProp: u,
        dataProp: u
      }, c);
    }
  }
};
Hu.default = xre;
var Xu = {};
Object.defineProperty(Xu, "__esModule", { value: !0 });
const Wf = fe, qs = ce, Jf = J, Yf = J, _re = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, data: r, parentSchema: o, it: s } = e, { opts: i } = s, a = (0, Wf.allSchemaProperties)(n), c = a.filter((g) => (0, Jf.alwaysValidSchema)(s, n[g]));
    if (a.length === 0 || c.length === a.length && (!s.opts.unevaluated || s.props === !0))
      return;
    const p = i.strictSchema && !i.allowMatchingProperties && o.properties, l = t.name("valid");
    s.props !== !0 && !(s.props instanceof qs.Name) && (s.props = (0, Yf.evaluatedPropsToName)(t, s.props));
    const { props: u } = s;
    d();
    function d() {
      for (const g of a)
        p && m(g), s.allErrors ? f(g) : (t.var(l, !0), f(g), t.if(l));
    }
    function m(g) {
      for (const y in p)
        new RegExp(g).test(y) && (0, Jf.checkStrictMode)(s, `property ${y} matches pattern ${g} (use allowMatchingProperties)`);
    }
    function f(g) {
      t.forIn("key", r, (y) => {
        t.if((0, qs._)`${(0, Wf.usePattern)(e, g)}.test(${y})`, () => {
          const v = c.includes(g);
          v || e.subschema({
            keyword: "patternProperties",
            schemaProp: g,
            dataProp: y,
            dataPropType: Yf.Type.Str
          }, l), s.opts.unevaluated && u !== !0 ? t.assign((0, qs._)`${u}[${y}]`, !0) : !v && !s.allErrors && t.if((0, qs.not)(l), () => t.break());
        });
      });
    }
  }
};
Xu.default = _re;
var Ku = {};
Object.defineProperty(Ku, "__esModule", { value: !0 });
const $re = J, Ere = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if ((0, $re.alwaysValidSchema)(r, n)) {
      e.fail();
      return;
    }
    const o = t.name("valid");
    e.subschema({
      keyword: "not",
      compositeRule: !0,
      createErrors: !1,
      allErrors: !1
    }, o), e.failResult(o, () => e.reset(), () => e.error());
  },
  error: { message: "must NOT be valid" }
};
Ku.default = Ere;
var Wu = {};
Object.defineProperty(Wu, "__esModule", { value: !0 });
const Sre = fe, Tre = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: Sre.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
Wu.default = Tre;
var Ju = {};
Object.defineProperty(Ju, "__esModule", { value: !0 });
const ui = ce, Ore = J, Pre = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: e }) => (0, ui._)`{passingSchemas: ${e.passing}}`
}, Nre = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: Pre,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, it: o } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    if (o.opts.discriminator && r.discriminator)
      return;
    const s = n, i = t.let("valid", !1), a = t.let("passing", null), c = t.name("_valid");
    e.setParams({ passing: a }), t.block(p), e.result(i, () => e.reset(), () => e.error(!0));
    function p() {
      s.forEach((l, u) => {
        let d;
        (0, Ore.alwaysValidSchema)(o, l) ? t.var(c, !0) : d = e.subschema({
          keyword: "oneOf",
          schemaProp: u,
          compositeRule: !0
        }, c), u > 0 && t.if((0, ui._)`${c} && ${i}`).assign(i, !1).assign(a, (0, ui._)`[${a}, ${u}]`).else(), t.if(c, () => {
          t.assign(i, !0), t.assign(a, u), d && e.mergeEvaluated(d, ui.Name);
        });
      });
    }
  }
};
Ju.default = Nre;
var Yu = {};
Object.defineProperty(Yu, "__esModule", { value: !0 });
const Rre = J, Are = {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    const o = t.name("valid");
    n.forEach((s, i) => {
      if ((0, Rre.alwaysValidSchema)(r, s))
        return;
      const a = e.subschema({ keyword: "allOf", schemaProp: i }, o);
      e.ok(o), e.mergeEvaluated(a);
    });
  }
};
Yu.default = Are;
var Qu = {};
Object.defineProperty(Qu, "__esModule", { value: !0 });
const Ii = ce, Hg = J, Dre = {
  message: ({ params: e }) => (0, Ii.str)`must match "${e.ifClause}" schema`,
  params: ({ params: e }) => (0, Ii._)`{failingKeyword: ${e.ifClause}}`
}, Ire = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: Dre,
  code(e) {
    const { gen: t, parentSchema: n, it: r } = e;
    n.then === void 0 && n.else === void 0 && (0, Hg.checkStrictMode)(r, '"if" without "then" and "else" is ignored');
    const o = Qf(r, "then"), s = Qf(r, "else");
    if (!o && !s)
      return;
    const i = t.let("valid", !0), a = t.name("_valid");
    if (c(), e.reset(), o && s) {
      const l = t.let("ifClause");
      e.setParams({ ifClause: l }), t.if(a, p("then", l), p("else", l));
    } else o ? t.if(a, p("then")) : t.if((0, Ii.not)(a), p("else"));
    e.pass(i, () => e.error(!0));
    function c() {
      const l = e.subschema({
        keyword: "if",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, a);
      e.mergeEvaluated(l);
    }
    function p(l, u) {
      return () => {
        const d = e.subschema({ keyword: l }, a);
        t.assign(i, a), e.mergeValidEvaluated(d, i), u ? t.assign(u, (0, Ii._)`${l}`) : e.setParams({ ifClause: l });
      };
    }
  }
};
function Qf(e, t) {
  const n = e.schema[t];
  return n !== void 0 && !(0, Hg.alwaysValidSchema)(e, n);
}
Qu.default = Ire;
var Zu = {};
Object.defineProperty(Zu, "__esModule", { value: !0 });
const kre = J, Cre = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: e, parentSchema: t, it: n }) {
    t.if === void 0 && (0, kre.checkStrictMode)(n, `"${e}" without "if" is ignored`);
  }
};
Zu.default = Cre;
Object.defineProperty(Uu, "__esModule", { value: !0 });
const jre = xo, Lre = Vu, qre = _o, Fre = zu, Mre = Bu, Ure = sa, Vre = Gu, zre = ia, Bre = Hu, Gre = Xu, Hre = Ku, Xre = Wu, Kre = Ju, Wre = Yu, Jre = Qu, Yre = Zu;
function Qre(e = !1) {
  const t = [
    // any
    Hre.default,
    Xre.default,
    Kre.default,
    Wre.default,
    Jre.default,
    Yre.default,
    // object
    Vre.default,
    zre.default,
    Ure.default,
    Bre.default,
    Gre.default
  ];
  return e ? t.push(Lre.default, Fre.default) : t.push(jre.default, qre.default), t.push(Mre.default), t;
}
Uu.default = Qre;
var ep = {}, $o = {};
Object.defineProperty($o, "__esModule", { value: !0 });
$o.dynamicAnchor = void 0;
const xc = ce, Zre = St, Zf = ut, eoe = Rn, toe = {
  keyword: "$dynamicAnchor",
  schemaType: "string",
  code: (e) => Xg(e, e.schema)
};
function Xg(e, t) {
  const { gen: n, it: r } = e;
  r.schemaEnv.root.dynamicAnchors[t] = !0;
  const o = (0, xc._)`${Zre.default.dynamicAnchors}${(0, xc.getProperty)(t)}`, s = r.errSchemaPath === "#" ? r.validateName : noe(e);
  n.if((0, xc._)`!${o}`, () => n.assign(o, s));
}
$o.dynamicAnchor = Xg;
function noe(e) {
  const { schemaEnv: t, schema: n, self: r } = e.it, { root: o, baseId: s, localRefs: i, meta: a } = t.root, { schemaId: c } = r.opts, p = new Zf.SchemaEnv({ schema: n, schemaId: c, root: o, baseId: s, localRefs: i, meta: a });
  return Zf.compileSchema.call(r, p), (0, eoe.getValidate)(e, p);
}
$o.default = toe;
var Eo = {};
Object.defineProperty(Eo, "__esModule", { value: !0 });
Eo.dynamicRef = void 0;
const em = ce, roe = St, tm = Rn, ooe = {
  keyword: "$dynamicRef",
  schemaType: "string",
  code: (e) => Kg(e, e.schema)
};
function Kg(e, t) {
  const { gen: n, keyword: r, it: o } = e;
  if (t[0] !== "#")
    throw new Error(`"${r}" only supports hash fragment reference`);
  const s = t.slice(1);
  if (o.allErrors)
    i();
  else {
    const c = n.let("valid", !1);
    i(c), e.ok(c);
  }
  function i(c) {
    if (o.schemaEnv.root.dynamicAnchors[s]) {
      const p = n.let("_v", (0, em._)`${roe.default.dynamicAnchors}${(0, em.getProperty)(s)}`);
      n.if(p, a(p, c), a(o.validateName, c));
    } else
      a(o.validateName, c)();
  }
  function a(c, p) {
    return p ? () => n.block(() => {
      (0, tm.callRef)(e, c), n.let(p, !0);
    }) : () => (0, tm.callRef)(e, c);
  }
}
Eo.dynamicRef = Kg;
Eo.default = ooe;
var tp = {};
Object.defineProperty(tp, "__esModule", { value: !0 });
const soe = $o, ioe = J, aoe = {
  keyword: "$recursiveAnchor",
  schemaType: "boolean",
  code(e) {
    e.schema ? (0, soe.dynamicAnchor)(e, "") : (0, ioe.checkStrictMode)(e.it, "$recursiveAnchor: false is ignored");
  }
};
tp.default = aoe;
var np = {};
Object.defineProperty(np, "__esModule", { value: !0 });
const coe = Eo, loe = {
  keyword: "$recursiveRef",
  schemaType: "string",
  code: (e) => (0, coe.dynamicRef)(e, e.schema)
};
np.default = loe;
Object.defineProperty(ep, "__esModule", { value: !0 });
const uoe = $o, poe = Eo, doe = tp, foe = np, moe = [uoe.default, poe.default, doe.default, foe.default];
ep.default = moe;
var rp = {}, op = {};
Object.defineProperty(op, "__esModule", { value: !0 });
const nm = sa, hoe = {
  keyword: "dependentRequired",
  type: "object",
  schemaType: "object",
  error: nm.error,
  code: (e) => (0, nm.validatePropertyDeps)(e)
};
op.default = hoe;
var sp = {};
Object.defineProperty(sp, "__esModule", { value: !0 });
const yoe = sa, goe = {
  keyword: "dependentSchemas",
  type: "object",
  schemaType: "object",
  code: (e) => (0, yoe.validateSchemaDeps)(e)
};
sp.default = goe;
var ip = {};
Object.defineProperty(ip, "__esModule", { value: !0 });
const voe = J, boe = {
  keyword: ["maxContains", "minContains"],
  type: "array",
  schemaType: "number",
  code({ keyword: e, parentSchema: t, it: n }) {
    t.contains === void 0 && (0, voe.checkStrictMode)(n, `"${e}" without "contains" is ignored`);
  }
};
ip.default = boe;
Object.defineProperty(rp, "__esModule", { value: !0 });
const woe = op, xoe = sp, _oe = ip, $oe = [woe.default, xoe.default, _oe.default];
rp.default = $oe;
var ap = {}, cp = {};
Object.defineProperty(cp, "__esModule", { value: !0 });
const Mn = ce, rm = J, Eoe = St, Soe = {
  message: "must NOT have unevaluated properties",
  params: ({ params: e }) => (0, Mn._)`{unevaluatedProperty: ${e.unevaluatedProperty}}`
}, Toe = {
  keyword: "unevaluatedProperties",
  type: "object",
  schemaType: ["boolean", "object"],
  trackErrors: !0,
  error: Soe,
  code(e) {
    const { gen: t, schema: n, data: r, errsCount: o, it: s } = e;
    if (!o)
      throw new Error("ajv implementation error");
    const { allErrors: i, props: a } = s;
    a instanceof Mn.Name ? t.if((0, Mn._)`${a} !== true`, () => t.forIn("key", r, (u) => t.if(p(a, u), () => c(u)))) : a !== !0 && t.forIn("key", r, (u) => a === void 0 ? c(u) : t.if(l(a, u), () => c(u))), s.props = !0, e.ok((0, Mn._)`${o} === ${Eoe.default.errors}`);
    function c(u) {
      if (n === !1) {
        e.setParams({ unevaluatedProperty: u }), e.error(), i || t.break();
        return;
      }
      if (!(0, rm.alwaysValidSchema)(s, n)) {
        const d = t.name("valid");
        e.subschema({
          keyword: "unevaluatedProperties",
          dataProp: u,
          dataPropType: rm.Type.Str
        }, d), i || t.if((0, Mn.not)(d), () => t.break());
      }
    }
    function p(u, d) {
      return (0, Mn._)`!${u} || !${u}[${d}]`;
    }
    function l(u, d) {
      const m = [];
      for (const f in u)
        u[f] === !0 && m.push((0, Mn._)`${d} !== ${f}`);
      return (0, Mn.and)(...m);
    }
  }
};
cp.default = Toe;
var lp = {};
Object.defineProperty(lp, "__esModule", { value: !0 });
const mr = ce, om = J, Ooe = {
  message: ({ params: { len: e } }) => (0, mr.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, mr._)`{limit: ${e}}`
}, Poe = {
  keyword: "unevaluatedItems",
  type: "array",
  schemaType: ["boolean", "object"],
  error: Ooe,
  code(e) {
    const { gen: t, schema: n, data: r, it: o } = e, s = o.items || 0;
    if (s === !0)
      return;
    const i = t.const("len", (0, mr._)`${r}.length`);
    if (n === !1)
      e.setParams({ len: s }), e.fail((0, mr._)`${i} > ${s}`);
    else if (typeof n == "object" && !(0, om.alwaysValidSchema)(o, n)) {
      const c = t.var("valid", (0, mr._)`${i} <= ${s}`);
      t.if((0, mr.not)(c), () => a(c, s)), e.ok(c);
    }
    o.items = !0;
    function a(c, p) {
      t.forRange("i", p, i, (l) => {
        e.subschema({ keyword: "unevaluatedItems", dataProp: l, dataPropType: om.Type.Num }, c), o.allErrors || t.if((0, mr.not)(c), () => t.break());
      });
    }
  }
};
lp.default = Poe;
Object.defineProperty(ap, "__esModule", { value: !0 });
const Noe = cp, Roe = lp, Aoe = [Noe.default, Roe.default];
ap.default = Aoe;
var up = {}, pp = {};
Object.defineProperty(pp, "__esModule", { value: !0 });
const Ae = ce, Doe = {
  message: ({ schemaCode: e }) => (0, Ae.str)`must match format "${e}"`,
  params: ({ schemaCode: e }) => (0, Ae._)`{format: ${e}}`
}, Ioe = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: Doe,
  code(e, t) {
    const { gen: n, data: r, $data: o, schema: s, schemaCode: i, it: a } = e, { opts: c, errSchemaPath: p, schemaEnv: l, self: u } = a;
    if (!c.validateFormats)
      return;
    o ? d() : m();
    function d() {
      const f = n.scopeValue("formats", {
        ref: u.formats,
        code: c.code.formats
      }), g = n.const("fDef", (0, Ae._)`${f}[${i}]`), y = n.let("fType"), v = n.let("format");
      n.if((0, Ae._)`typeof ${g} == "object" && !(${g} instanceof RegExp)`, () => n.assign(y, (0, Ae._)`${g}.type || "string"`).assign(v, (0, Ae._)`${g}.validate`), () => n.assign(y, (0, Ae._)`"string"`).assign(v, g)), e.fail$data((0, Ae.or)(b(), w()));
      function b() {
        return c.strictSchema === !1 ? Ae.nil : (0, Ae._)`${i} && !${v}`;
      }
      function w() {
        const T = l.$async ? (0, Ae._)`(${g}.async ? await ${v}(${r}) : ${v}(${r}))` : (0, Ae._)`${v}(${r})`, P = (0, Ae._)`(typeof ${v} == "function" ? ${T} : ${v}.test(${r}))`;
        return (0, Ae._)`${v} && ${v} !== true && ${y} === ${t} && !${P}`;
      }
    }
    function m() {
      const f = u.formats[s];
      if (!f) {
        b();
        return;
      }
      if (f === !0)
        return;
      const [g, y, v] = w(f);
      g === t && e.pass(T());
      function b() {
        if (c.strictSchema === !1) {
          u.logger.warn(P());
          return;
        }
        throw new Error(P());
        function P() {
          return `unknown format "${s}" ignored in schema at path "${p}"`;
        }
      }
      function w(P) {
        const C = P instanceof RegExp ? (0, Ae.regexpCode)(P) : c.code.formats ? (0, Ae._)`${c.code.formats}${(0, Ae.getProperty)(s)}` : void 0, B = n.scopeValue("formats", { key: s, ref: P, code: C });
        return typeof P == "object" && !(P instanceof RegExp) ? [P.type || "string", P.validate, (0, Ae._)`${B}.validate`] : ["string", P, B];
      }
      function T() {
        if (typeof f == "object" && !(f instanceof RegExp) && f.async) {
          if (!l.$async)
            throw new Error("async format in sync schema");
          return (0, Ae._)`await ${v}(${r})`;
        }
        return typeof y == "function" ? (0, Ae._)`${v}(${r})` : (0, Ae._)`${v}.test(${r})`;
      }
    }
  }
};
pp.default = Ioe;
Object.defineProperty(up, "__esModule", { value: !0 });
const koe = pp, Coe = [koe.default];
up.default = Coe;
var po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.contentVocabulary = po.metadataVocabulary = void 0;
po.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
po.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(Tu, "__esModule", { value: !0 });
const joe = Ou, Loe = Nu, qoe = Uu, Foe = ep, Moe = rp, Uoe = ap, Voe = up, sm = po, zoe = [
  Foe.default,
  joe.default,
  Loe.default,
  (0, qoe.default)(!0),
  Voe.default,
  sm.metadataVocabulary,
  sm.contentVocabulary,
  Moe.default,
  Uoe.default
];
Tu.default = zoe;
var dp = {}, aa = {};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.DiscrError = void 0;
var im;
(function(e) {
  e.Tag = "tag", e.Mapping = "mapping";
})(im || (aa.DiscrError = im = {}));
Object.defineProperty(dp, "__esModule", { value: !0 });
const Gr = ce, wl = aa, am = ut, Boe = wo, Goe = J, Hoe = {
  message: ({ params: { discrError: e, tagName: t } }) => e === wl.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
  params: ({ params: { discrError: e, tag: t, tagName: n } }) => (0, Gr._)`{error: ${e}, tag: ${n}, tagValue: ${t}}`
}, Xoe = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: Hoe,
  code(e) {
    const { gen: t, data: n, schema: r, parentSchema: o, it: s } = e, { oneOf: i } = o;
    if (!s.opts.discriminator)
      throw new Error("discriminator: requires discriminator option");
    const a = r.propertyName;
    if (typeof a != "string")
      throw new Error("discriminator: requires propertyName");
    if (r.mapping)
      throw new Error("discriminator: mapping is not supported");
    if (!i)
      throw new Error("discriminator: requires oneOf keyword");
    const c = t.let("valid", !1), p = t.const("tag", (0, Gr._)`${n}${(0, Gr.getProperty)(a)}`);
    t.if((0, Gr._)`typeof ${p} == "string"`, () => l(), () => e.error(!1, { discrError: wl.DiscrError.Tag, tag: p, tagName: a })), e.ok(c);
    function l() {
      const m = d();
      t.if(!1);
      for (const f in m)
        t.elseIf((0, Gr._)`${p} === ${f}`), t.assign(c, u(m[f]));
      t.else(), e.error(!1, { discrError: wl.DiscrError.Mapping, tag: p, tagName: a }), t.endIf();
    }
    function u(m) {
      const f = t.name("valid"), g = e.subschema({ keyword: "oneOf", schemaProp: m }, f);
      return e.mergeEvaluated(g, Gr.Name), f;
    }
    function d() {
      var m;
      const f = {}, g = v(o);
      let y = !0;
      for (let T = 0; T < i.length; T++) {
        let P = i[T];
        if (P != null && P.$ref && !(0, Goe.schemaHasRulesButRef)(P, s.self.RULES)) {
          const B = P.$ref;
          if (P = am.resolveRef.call(s.self, s.schemaEnv.root, s.baseId, B), P instanceof am.SchemaEnv && (P = P.schema), P === void 0)
            throw new Boe.default(s.opts.uriResolver, s.baseId, B);
        }
        const C = (m = P == null ? void 0 : P.properties) === null || m === void 0 ? void 0 : m[a];
        if (typeof C != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${a}"`);
        y = y && (g || v(P)), b(C, T);
      }
      if (!y)
        throw new Error(`discriminator: "${a}" must be required`);
      return f;
      function v({ required: T }) {
        return Array.isArray(T) && T.includes(a);
      }
      function b(T, P) {
        if (T.const)
          w(T.const, P);
        else if (T.enum)
          for (const C of T.enum)
            w(C, P);
        else
          throw new Error(`discriminator: "properties/${a}" must have "const" or "enum"`);
      }
      function w(T, P) {
        if (typeof T != "string" || T in f)
          throw new Error(`discriminator: "${a}" values must be unique strings`);
        f[T] = P;
      }
    }
  }
};
dp.default = Xoe;
var fp = {};
const Koe = "https://json-schema.org/draft/2020-12/schema", Woe = "https://json-schema.org/draft/2020-12/schema", Joe = {
  "https://json-schema.org/draft/2020-12/vocab/core": !0,
  "https://json-schema.org/draft/2020-12/vocab/applicator": !0,
  "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
  "https://json-schema.org/draft/2020-12/vocab/validation": !0,
  "https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
  "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
  "https://json-schema.org/draft/2020-12/vocab/content": !0
}, Yoe = "meta", Qoe = "Core and Validation specifications meta-schema", Zoe = [
  {
    $ref: "meta/core"
  },
  {
    $ref: "meta/applicator"
  },
  {
    $ref: "meta/unevaluated"
  },
  {
    $ref: "meta/validation"
  },
  {
    $ref: "meta/meta-data"
  },
  {
    $ref: "meta/format-annotation"
  },
  {
    $ref: "meta/content"
  }
], ese = [
  "object",
  "boolean"
], tse = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", nse = {
  definitions: {
    $comment: '"definitions" has been replaced by "$defs".',
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    },
    deprecated: !0,
    default: {}
  },
  dependencies: {
    $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $dynamicRef: "#meta"
        },
        {
          $ref: "meta/validation#/$defs/stringArray"
        }
      ]
    },
    deprecated: !0,
    default: {}
  },
  $recursiveAnchor: {
    $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
    $ref: "meta/core#/$defs/anchorString",
    deprecated: !0
  },
  $recursiveRef: {
    $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
    $ref: "meta/core#/$defs/uriReferenceString",
    deprecated: !0
  }
}, rse = {
  $schema: Koe,
  $id: Woe,
  $vocabulary: Joe,
  $dynamicAnchor: Yoe,
  title: Qoe,
  allOf: Zoe,
  type: ese,
  $comment: tse,
  properties: nse
}, ose = "https://json-schema.org/draft/2020-12/schema", sse = "https://json-schema.org/draft/2020-12/meta/applicator", ise = {
  "https://json-schema.org/draft/2020-12/vocab/applicator": !0
}, ase = "meta", cse = "Applicator vocabulary meta-schema", lse = [
  "object",
  "boolean"
], use = {
  prefixItems: {
    $ref: "#/$defs/schemaArray"
  },
  items: {
    $dynamicRef: "#meta"
  },
  contains: {
    $dynamicRef: "#meta"
  },
  additionalProperties: {
    $dynamicRef: "#meta"
  },
  properties: {
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    },
    default: {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    },
    propertyNames: {
      format: "regex"
    },
    default: {}
  },
  dependentSchemas: {
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    },
    default: {}
  },
  propertyNames: {
    $dynamicRef: "#meta"
  },
  if: {
    $dynamicRef: "#meta"
  },
  then: {
    $dynamicRef: "#meta"
  },
  else: {
    $dynamicRef: "#meta"
  },
  allOf: {
    $ref: "#/$defs/schemaArray"
  },
  anyOf: {
    $ref: "#/$defs/schemaArray"
  },
  oneOf: {
    $ref: "#/$defs/schemaArray"
  },
  not: {
    $dynamicRef: "#meta"
  }
}, pse = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $dynamicRef: "#meta"
    }
  }
}, dse = {
  $schema: ose,
  $id: sse,
  $vocabulary: ise,
  $dynamicAnchor: ase,
  title: cse,
  type: lse,
  properties: use,
  $defs: pse
}, fse = "https://json-schema.org/draft/2020-12/schema", mse = "https://json-schema.org/draft/2020-12/meta/unevaluated", hse = {
  "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0
}, yse = "meta", gse = "Unevaluated applicator vocabulary meta-schema", vse = [
  "object",
  "boolean"
], bse = {
  unevaluatedItems: {
    $dynamicRef: "#meta"
  },
  unevaluatedProperties: {
    $dynamicRef: "#meta"
  }
}, wse = {
  $schema: fse,
  $id: mse,
  $vocabulary: hse,
  $dynamicAnchor: yse,
  title: gse,
  type: vse,
  properties: bse
}, xse = "https://json-schema.org/draft/2020-12/schema", _se = "https://json-schema.org/draft/2020-12/meta/content", $se = {
  "https://json-schema.org/draft/2020-12/vocab/content": !0
}, Ese = "meta", Sse = "Content vocabulary meta-schema", Tse = [
  "object",
  "boolean"
], Ose = {
  contentEncoding: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentSchema: {
    $dynamicRef: "#meta"
  }
}, Pse = {
  $schema: xse,
  $id: _se,
  $vocabulary: $se,
  $dynamicAnchor: Ese,
  title: Sse,
  type: Tse,
  properties: Ose
}, Nse = "https://json-schema.org/draft/2020-12/schema", Rse = "https://json-schema.org/draft/2020-12/meta/core", Ase = {
  "https://json-schema.org/draft/2020-12/vocab/core": !0
}, Dse = "meta", Ise = "Core vocabulary meta-schema", kse = [
  "object",
  "boolean"
], Cse = {
  $id: {
    $ref: "#/$defs/uriReferenceString",
    $comment: "Non-empty fragments not allowed.",
    pattern: "^[^#]*#?$"
  },
  $schema: {
    $ref: "#/$defs/uriString"
  },
  $ref: {
    $ref: "#/$defs/uriReferenceString"
  },
  $anchor: {
    $ref: "#/$defs/anchorString"
  },
  $dynamicRef: {
    $ref: "#/$defs/uriReferenceString"
  },
  $dynamicAnchor: {
    $ref: "#/$defs/anchorString"
  },
  $vocabulary: {
    type: "object",
    propertyNames: {
      $ref: "#/$defs/uriString"
    },
    additionalProperties: {
      type: "boolean"
    }
  },
  $comment: {
    type: "string"
  },
  $defs: {
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    }
  }
}, jse = {
  anchorString: {
    type: "string",
    pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
  },
  uriString: {
    type: "string",
    format: "uri"
  },
  uriReferenceString: {
    type: "string",
    format: "uri-reference"
  }
}, Lse = {
  $schema: Nse,
  $id: Rse,
  $vocabulary: Ase,
  $dynamicAnchor: Dse,
  title: Ise,
  type: kse,
  properties: Cse,
  $defs: jse
}, qse = "https://json-schema.org/draft/2020-12/schema", Fse = "https://json-schema.org/draft/2020-12/meta/format-annotation", Mse = {
  "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0
}, Use = "meta", Vse = "Format vocabulary meta-schema for annotation results", zse = [
  "object",
  "boolean"
], Bse = {
  format: {
    type: "string"
  }
}, Gse = {
  $schema: qse,
  $id: Fse,
  $vocabulary: Mse,
  $dynamicAnchor: Use,
  title: Vse,
  type: zse,
  properties: Bse
}, Hse = "https://json-schema.org/draft/2020-12/schema", Xse = "https://json-schema.org/draft/2020-12/meta/meta-data", Kse = {
  "https://json-schema.org/draft/2020-12/vocab/meta-data": !0
}, Wse = "meta", Jse = "Meta-data vocabulary meta-schema", Yse = [
  "object",
  "boolean"
], Qse = {
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  default: !0,
  deprecated: {
    type: "boolean",
    default: !1
  },
  readOnly: {
    type: "boolean",
    default: !1
  },
  writeOnly: {
    type: "boolean",
    default: !1
  },
  examples: {
    type: "array",
    items: !0
  }
}, Zse = {
  $schema: Hse,
  $id: Xse,
  $vocabulary: Kse,
  $dynamicAnchor: Wse,
  title: Jse,
  type: Yse,
  properties: Qse
}, eie = "https://json-schema.org/draft/2020-12/schema", tie = "https://json-schema.org/draft/2020-12/meta/validation", nie = {
  "https://json-schema.org/draft/2020-12/vocab/validation": !0
}, rie = "meta", oie = "Validation vocabulary meta-schema", sie = [
  "object",
  "boolean"
], iie = {
  type: {
    anyOf: [
      {
        $ref: "#/$defs/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/$defs/simpleTypes"
        },
        minItems: 1,
        uniqueItems: !0
      }
    ]
  },
  const: !0,
  enum: {
    type: "array",
    items: !0
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/$defs/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/$defs/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  maxItems: {
    $ref: "#/$defs/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/$defs/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    default: !1
  },
  maxContains: {
    $ref: "#/$defs/nonNegativeInteger"
  },
  minContains: {
    $ref: "#/$defs/nonNegativeInteger",
    default: 1
  },
  maxProperties: {
    $ref: "#/$defs/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/$defs/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/$defs/stringArray"
  },
  dependentRequired: {
    type: "object",
    additionalProperties: {
      $ref: "#/$defs/stringArray"
    }
  }
}, aie = {
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    $ref: "#/$defs/nonNegativeInteger",
    default: 0
  },
  simpleTypes: {
    enum: [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: !0,
    default: []
  }
}, cie = {
  $schema: eie,
  $id: tie,
  $vocabulary: nie,
  $dynamicAnchor: rie,
  title: oie,
  type: sie,
  properties: iie,
  $defs: aie
};
Object.defineProperty(fp, "__esModule", { value: !0 });
const lie = rse, uie = dse, pie = wse, die = Pse, fie = Lse, mie = Gse, hie = Zse, yie = cie, gie = ["/properties"];
function vie(e) {
  return [
    lie,
    uie,
    pie,
    die,
    fie,
    t(this, mie),
    hie,
    t(this, yie)
  ].forEach((n) => this.addMetaSchema(n, void 0, !1)), this;
  function t(n, r) {
    return e ? n.$dataMetaSchema(r, gie) : r;
  }
}
fp.default = vie;
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
  const n = Jy, r = Tu, o = dp, s = fp, i = "https://json-schema.org/draft/2020-12/schema";
  class a extends n.default {
    constructor(m = {}) {
      super({
        ...m,
        dynamicRef: !0,
        next: !0,
        unevaluated: !0
      });
    }
    _addVocabularies() {
      super._addVocabularies(), r.default.forEach((m) => this.addVocabulary(m)), this.opts.discriminator && this.addKeyword(o.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      const { $data: m, meta: f } = this.opts;
      f && (s.default.call(this, m), this.refs["http://json-schema.org/schema"] = i);
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
    }
  }
  t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
  var c = Bt;
  Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
    return c.KeywordCxt;
  } });
  var p = ce;
  Object.defineProperty(t, "_", { enumerable: !0, get: function() {
    return p._;
  } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
    return p.str;
  } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
    return p.stringify;
  } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
    return p.nil;
  } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
    return p.Name;
  } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
    return p.CodeGen;
  } });
  var l = hs;
  Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
    return l.default;
  } });
  var u = wo;
  Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
    return u.default;
  } });
})(fl, fl.exports);
var bie = fl.exports, xl = { exports: {} }, Wg = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
  function t(I, z) {
    return { validate: I, compare: z };
  }
  e.fullFormats = {
    // date: http://tools.ietf.org/html/rfc3339#section-5.6
    date: t(s, i),
    // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
    time: t(c(!0), p),
    "date-time": t(d(!0), m),
    "iso-time": t(c(), l),
    "iso-date-time": t(d(), f),
    // duration: https://tools.ietf.org/html/rfc3339#appendix-A
    duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
    uri: v,
    "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
    // uri-template: https://tools.ietf.org/html/rfc6570
    "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    // For the source: https://gist.github.com/dperini/729294
    // For test cases: https://mathiasbynens.be/demo/url-regex
    url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
    // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
    ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
    regex: q,
    // uuid: http://tools.ietf.org/html/rfc4122
    uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    // JSON-pointer: https://tools.ietf.org/html/rfc6901
    // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
    "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
    "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
    "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
    // byte: https://github.com/miguelmota/is-base64
    byte: w,
    // signed 32 bit integer
    int32: { type: "number", validate: C },
    // signed 64 bit integer
    int64: { type: "number", validate: B },
    // C-type float
    float: { type: "number", validate: k },
    // C-type double
    double: { type: "number", validate: k },
    // hint to the UI to hide input strings
    password: !0,
    // unchecked string payload
    binary: !0
  }, e.fastFormats = {
    ...e.fullFormats,
    date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, i),
    time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, p),
    "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, m),
    "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, l),
    "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, f),
    // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    // email (sources from jsen validator):
    // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
  }, e.formatNames = Object.keys(e.fullFormats);
  function n(I) {
    return I % 4 === 0 && (I % 100 !== 0 || I % 400 === 0);
  }
  const r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function s(I) {
    const z = r.exec(I);
    if (!z)
      return !1;
    const H = +z[1], F = +z[2], U = +z[3];
    return F >= 1 && F <= 12 && U >= 1 && U <= (F === 2 && n(H) ? 29 : o[F]);
  }
  function i(I, z) {
    if (I && z)
      return I > z ? 1 : I < z ? -1 : 0;
  }
  const a = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function c(I) {
    return function(H) {
      const F = a.exec(H);
      if (!F)
        return !1;
      const U = +F[1], G = +F[2], V = +F[3], K = F[4], X = F[5] === "-" ? -1 : 1, D = +(F[6] || 0), S = +(F[7] || 0);
      if (D > 23 || S > 59 || I && !K)
        return !1;
      if (U <= 23 && G <= 59 && V < 60)
        return !0;
      const N = G - S * X, O = U - D * X - (N < 0 ? 1 : 0);
      return (O === 23 || O === -1) && (N === 59 || N === -1) && V < 61;
    };
  }
  function p(I, z) {
    if (!(I && z))
      return;
    const H = (/* @__PURE__ */ new Date("2020-01-01T" + I)).valueOf(), F = (/* @__PURE__ */ new Date("2020-01-01T" + z)).valueOf();
    if (H && F)
      return H - F;
  }
  function l(I, z) {
    if (!(I && z))
      return;
    const H = a.exec(I), F = a.exec(z);
    if (H && F)
      return I = H[1] + H[2] + H[3], z = F[1] + F[2] + F[3], I > z ? 1 : I < z ? -1 : 0;
  }
  const u = /t|\s/i;
  function d(I) {
    const z = c(I);
    return function(F) {
      const U = F.split(u);
      return U.length === 2 && s(U[0]) && z(U[1]);
    };
  }
  function m(I, z) {
    if (!(I && z))
      return;
    const H = new Date(I).valueOf(), F = new Date(z).valueOf();
    if (H && F)
      return H - F;
  }
  function f(I, z) {
    if (!(I && z))
      return;
    const [H, F] = I.split(u), [U, G] = z.split(u), V = i(H, U);
    if (V !== void 0)
      return V || p(F, G);
  }
  const g = /\/|:/, y = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function v(I) {
    return g.test(I) && y.test(I);
  }
  const b = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function w(I) {
    return b.lastIndex = 0, b.test(I);
  }
  const T = -2147483648, P = 2 ** 31 - 1;
  function C(I) {
    return Number.isInteger(I) && I <= P && I >= T;
  }
  function B(I) {
    return Number.isInteger(I);
  }
  function k() {
    return !0;
  }
  const E = /[^\\]\\Z/;
  function q(I) {
    if (E.test(I))
      return !1;
    try {
      return new RegExp(I), !0;
    } catch {
      return !1;
    }
  }
})(Wg);
var Jg = {}, _l = { exports: {} }, Yg = {}, Gt = {}, fo = {}, gs = {}, pe = {}, rs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
  class t {
  }
  e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class n extends t {
    constructor(b) {
      if (super(), !e.IDENTIFIER.test(b))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = b;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  e.Name = n;
  class r extends t {
    constructor(b) {
      super(), this._items = typeof b == "string" ? [b] : b;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const b = this._items[0];
      return b === "" || b === '""';
    }
    get str() {
      var b;
      return (b = this._str) !== null && b !== void 0 ? b : this._str = this._items.reduce((w, T) => `${w}${T}`, "");
    }
    get names() {
      var b;
      return (b = this._names) !== null && b !== void 0 ? b : this._names = this._items.reduce((w, T) => (T instanceof n && (w[T.str] = (w[T.str] || 0) + 1), w), {});
    }
  }
  e._Code = r, e.nil = new r("");
  function o(v, ...b) {
    const w = [v[0]];
    let T = 0;
    for (; T < b.length; )
      a(w, b[T]), w.push(v[++T]);
    return new r(w);
  }
  e._ = o;
  const s = new r("+");
  function i(v, ...b) {
    const w = [m(v[0])];
    let T = 0;
    for (; T < b.length; )
      w.push(s), a(w, b[T]), w.push(s, m(v[++T]));
    return c(w), new r(w);
  }
  e.str = i;
  function a(v, b) {
    b instanceof r ? v.push(...b._items) : b instanceof n ? v.push(b) : v.push(u(b));
  }
  e.addCodeArg = a;
  function c(v) {
    let b = 1;
    for (; b < v.length - 1; ) {
      if (v[b] === s) {
        const w = p(v[b - 1], v[b + 1]);
        if (w !== void 0) {
          v.splice(b - 1, 3, w);
          continue;
        }
        v[b++] = "+";
      }
      b++;
    }
  }
  function p(v, b) {
    if (b === '""')
      return v;
    if (v === '""')
      return b;
    if (typeof v == "string")
      return b instanceof n || v[v.length - 1] !== '"' ? void 0 : typeof b != "string" ? `${v.slice(0, -1)}${b}"` : b[0] === '"' ? v.slice(0, -1) + b.slice(1) : void 0;
    if (typeof b == "string" && b[0] === '"' && !(v instanceof n))
      return `"${v}${b.slice(1)}`;
  }
  function l(v, b) {
    return b.emptyStr() ? v : v.emptyStr() ? b : i`${v}${b}`;
  }
  e.strConcat = l;
  function u(v) {
    return typeof v == "number" || typeof v == "boolean" || v === null ? v : m(Array.isArray(v) ? v.join(",") : v);
  }
  function d(v) {
    return new r(m(v));
  }
  e.stringify = d;
  function m(v) {
    return JSON.stringify(v).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = m;
  function f(v) {
    return typeof v == "string" && e.IDENTIFIER.test(v) ? new r(`.${v}`) : o`[${v}]`;
  }
  e.getProperty = f;
  function g(v) {
    if (typeof v == "string" && e.IDENTIFIER.test(v))
      return new r(`${v}`);
    throw new Error(`CodeGen: invalid export name: ${v}, use explicit $id name mapping`);
  }
  e.getEsmExportName = g;
  function y(v) {
    return new r(v.toString());
  }
  e.regexpCode = y;
})(rs);
var $l = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const t = rs;
  class n extends Error {
    constructor(p) {
      super(`CodeGen: "code" for ${p} not defined`), this.value = p.value;
    }
  }
  var r;
  (function(c) {
    c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
  })(r || (e.UsedValueState = r = {})), e.varKinds = {
    const: new t.Name("const"),
    let: new t.Name("let"),
    var: new t.Name("var")
  };
  class o {
    constructor({ prefixes: p, parent: l } = {}) {
      this._names = {}, this._prefixes = p, this._parent = l;
    }
    toName(p) {
      return p instanceof t.Name ? p : this.name(p);
    }
    name(p) {
      return new t.Name(this._newName(p));
    }
    _newName(p) {
      const l = this._names[p] || this._nameGroup(p);
      return `${p}${l.index++}`;
    }
    _nameGroup(p) {
      var l, u;
      if (!((u = (l = this._parent) === null || l === void 0 ? void 0 : l._prefixes) === null || u === void 0) && u.has(p) || this._prefixes && !this._prefixes.has(p))
        throw new Error(`CodeGen: prefix "${p}" is not allowed in this scope`);
      return this._names[p] = { prefix: p, index: 0 };
    }
  }
  e.Scope = o;
  class s extends t.Name {
    constructor(p, l) {
      super(l), this.prefix = p;
    }
    setValue(p, { property: l, itemIndex: u }) {
      this.value = p, this.scopePath = (0, t._)`.${new t.Name(l)}[${u}]`;
    }
  }
  e.ValueScopeName = s;
  const i = (0, t._)`\n`;
  class a extends o {
    constructor(p) {
      super(p), this._values = {}, this._scope = p.scope, this.opts = { ...p, _n: p.lines ? i : t.nil };
    }
    get() {
      return this._scope;
    }
    name(p) {
      return new s(p, this._newName(p));
    }
    value(p, l) {
      var u;
      if (l.ref === void 0)
        throw new Error("CodeGen: ref must be passed in value");
      const d = this.toName(p), { prefix: m } = d, f = (u = l.key) !== null && u !== void 0 ? u : l.ref;
      let g = this._values[m];
      if (g) {
        const b = g.get(f);
        if (b)
          return b;
      } else
        g = this._values[m] = /* @__PURE__ */ new Map();
      g.set(f, d);
      const y = this._scope[m] || (this._scope[m] = []), v = y.length;
      return y[v] = l.ref, d.setValue(l, { property: m, itemIndex: v }), d;
    }
    getValue(p, l) {
      const u = this._values[p];
      if (u)
        return u.get(l);
    }
    scopeRefs(p, l = this._values) {
      return this._reduceValues(l, (u) => {
        if (u.scopePath === void 0)
          throw new Error(`CodeGen: name "${u}" has no value`);
        return (0, t._)`${p}${u.scopePath}`;
      });
    }
    scopeCode(p = this._values, l, u) {
      return this._reduceValues(p, (d) => {
        if (d.value === void 0)
          throw new Error(`CodeGen: name "${d}" has no value`);
        return d.value.code;
      }, l, u);
    }
    _reduceValues(p, l, u = {}, d) {
      let m = t.nil;
      for (const f in p) {
        const g = p[f];
        if (!g)
          continue;
        const y = u[f] = u[f] || /* @__PURE__ */ new Map();
        g.forEach((v) => {
          if (y.has(v))
            return;
          y.set(v, r.Started);
          let b = l(v);
          if (b) {
            const w = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            m = (0, t._)`${m}${w} ${v} = ${b};${this.opts._n}`;
          } else if (b = d == null ? void 0 : d(v))
            m = (0, t._)`${m}${b}${this.opts._n}`;
          else
            throw new n(v);
          y.set(v, r.Completed);
        });
      }
      return m;
    }
  }
  e.ValueScope = a;
})($l);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const t = rs, n = $l;
  var r = rs;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return r._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return r.str;
  } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
    return r.strConcat;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return r.nil;
  } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
    return r.getProperty;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return r.stringify;
  } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
    return r.regexpCode;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return r.Name;
  } });
  var o = $l;
  Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
    return o.Scope;
  } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
    return o.ValueScope;
  } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
    return o.ValueScopeName;
  } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
    return o.varKinds;
  } }), e.operators = {
    GT: new t._Code(">"),
    GTE: new t._Code(">="),
    LT: new t._Code("<"),
    LTE: new t._Code("<="),
    EQ: new t._Code("==="),
    NEQ: new t._Code("!=="),
    NOT: new t._Code("!"),
    OR: new t._Code("||"),
    AND: new t._Code("&&"),
    ADD: new t._Code("+")
  };
  class s {
    optimizeNodes() {
      return this;
    }
    optimizeNames(h, _) {
      return this;
    }
  }
  class i extends s {
    constructor(h, _, A) {
      super(), this.varKind = h, this.name = _, this.rhs = A;
    }
    render({ es5: h, _n: _ }) {
      const A = h ? n.varKinds.var : this.varKind, $ = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${A} ${this.name}${$};` + _;
    }
    optimizeNames(h, _) {
      if (h[this.name.str])
        return this.rhs && (this.rhs = F(this.rhs, h, _)), this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }
  class a extends s {
    constructor(h, _, A) {
      super(), this.lhs = h, this.rhs = _, this.sideEffects = A;
    }
    render({ _n: h }) {
      return `${this.lhs} = ${this.rhs};` + h;
    }
    optimizeNames(h, _) {
      if (!(this.lhs instanceof t.Name && !h[this.lhs.str] && !this.sideEffects))
        return this.rhs = F(this.rhs, h, _), this;
    }
    get names() {
      const h = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
      return H(h, this.rhs);
    }
  }
  class c extends a {
    constructor(h, _, A, $) {
      super(h, A, $), this.op = _;
    }
    render({ _n: h }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + h;
    }
  }
  class p extends s {
    constructor(h) {
      super(), this.label = h, this.names = {};
    }
    render({ _n: h }) {
      return `${this.label}:` + h;
    }
  }
  class l extends s {
    constructor(h) {
      super(), this.label = h, this.names = {};
    }
    render({ _n: h }) {
      return `break${this.label ? ` ${this.label}` : ""};` + h;
    }
  }
  class u extends s {
    constructor(h) {
      super(), this.error = h;
    }
    render({ _n: h }) {
      return `throw ${this.error};` + h;
    }
    get names() {
      return this.error.names;
    }
  }
  class d extends s {
    constructor(h) {
      super(), this.code = h;
    }
    render({ _n: h }) {
      return `${this.code};` + h;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(h, _) {
      return this.code = F(this.code, h, _), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }
  class m extends s {
    constructor(h = []) {
      super(), this.nodes = h;
    }
    render(h) {
      return this.nodes.reduce((_, A) => _ + A.render(h), "");
    }
    optimizeNodes() {
      const { nodes: h } = this;
      let _ = h.length;
      for (; _--; ) {
        const A = h[_].optimizeNodes();
        Array.isArray(A) ? h.splice(_, 1, ...A) : A ? h[_] = A : h.splice(_, 1);
      }
      return h.length > 0 ? this : void 0;
    }
    optimizeNames(h, _) {
      const { nodes: A } = this;
      let $ = A.length;
      for (; $--; ) {
        const x = A[$];
        x.optimizeNames(h, _) || (U(h, x.names), A.splice($, 1));
      }
      return A.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((h, _) => z(h, _.names), {});
    }
  }
  class f extends m {
    render(h) {
      return "{" + h._n + super.render(h) + "}" + h._n;
    }
  }
  class g extends m {
  }
  class y extends f {
  }
  y.kind = "else";
  class v extends f {
    constructor(h, _) {
      super(_), this.condition = h;
    }
    render(h) {
      let _ = `if(${this.condition})` + super.render(h);
      return this.else && (_ += "else " + this.else.render(h)), _;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const h = this.condition;
      if (h === !0)
        return this.nodes;
      let _ = this.else;
      if (_) {
        const A = _.optimizeNodes();
        _ = this.else = Array.isArray(A) ? new y(A) : A;
      }
      if (_)
        return h === !1 ? _ instanceof v ? _ : _.nodes : this.nodes.length ? this : new v(G(h), _ instanceof v ? [_] : _.nodes);
      if (!(h === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(h, _) {
      var A;
      if (this.else = (A = this.else) === null || A === void 0 ? void 0 : A.optimizeNames(h, _), !!(super.optimizeNames(h, _) || this.else))
        return this.condition = F(this.condition, h, _), this;
    }
    get names() {
      const h = super.names;
      return H(h, this.condition), this.else && z(h, this.else.names), h;
    }
  }
  v.kind = "if";
  class b extends f {
  }
  b.kind = "for";
  class w extends b {
    constructor(h) {
      super(), this.iteration = h;
    }
    render(h) {
      return `for(${this.iteration})` + super.render(h);
    }
    optimizeNames(h, _) {
      if (super.optimizeNames(h, _))
        return this.iteration = F(this.iteration, h, _), this;
    }
    get names() {
      return z(super.names, this.iteration.names);
    }
  }
  class T extends b {
    constructor(h, _, A, $) {
      super(), this.varKind = h, this.name = _, this.from = A, this.to = $;
    }
    render(h) {
      const _ = h.es5 ? n.varKinds.var : this.varKind, { name: A, from: $, to: x } = this;
      return `for(${_} ${A}=${$}; ${A}<${x}; ${A}++)` + super.render(h);
    }
    get names() {
      const h = H(super.names, this.from);
      return H(h, this.to);
    }
  }
  class P extends b {
    constructor(h, _, A, $) {
      super(), this.loop = h, this.varKind = _, this.name = A, this.iterable = $;
    }
    render(h) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(h);
    }
    optimizeNames(h, _) {
      if (super.optimizeNames(h, _))
        return this.iterable = F(this.iterable, h, _), this;
    }
    get names() {
      return z(super.names, this.iterable.names);
    }
  }
  class C extends f {
    constructor(h, _, A) {
      super(), this.name = h, this.args = _, this.async = A;
    }
    render(h) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(h);
    }
  }
  C.kind = "func";
  class B extends m {
    render(h) {
      return "return " + super.render(h);
    }
  }
  B.kind = "return";
  class k extends f {
    render(h) {
      let _ = "try" + super.render(h);
      return this.catch && (_ += this.catch.render(h)), this.finally && (_ += this.finally.render(h)), _;
    }
    optimizeNodes() {
      var h, _;
      return super.optimizeNodes(), (h = this.catch) === null || h === void 0 || h.optimizeNodes(), (_ = this.finally) === null || _ === void 0 || _.optimizeNodes(), this;
    }
    optimizeNames(h, _) {
      var A, $;
      return super.optimizeNames(h, _), (A = this.catch) === null || A === void 0 || A.optimizeNames(h, _), ($ = this.finally) === null || $ === void 0 || $.optimizeNames(h, _), this;
    }
    get names() {
      const h = super.names;
      return this.catch && z(h, this.catch.names), this.finally && z(h, this.finally.names), h;
    }
  }
  class E extends f {
    constructor(h) {
      super(), this.error = h;
    }
    render(h) {
      return `catch(${this.error})` + super.render(h);
    }
  }
  E.kind = "catch";
  class q extends f {
    render(h) {
      return "finally" + super.render(h);
    }
  }
  q.kind = "finally";
  class I {
    constructor(h, _ = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ..._, _n: _.lines ? `
` : "" }, this._extScope = h, this._scope = new n.Scope({ parent: h }), this._nodes = [new g()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    // returns unique name in the internal scope
    name(h) {
      return this._scope.name(h);
    }
    // reserves unique name in the external scope
    scopeName(h) {
      return this._extScope.name(h);
    }
    // reserves unique name in the external scope and assigns value to it
    scopeValue(h, _) {
      const A = this._extScope.value(h, _);
      return (this._values[A.prefix] || (this._values[A.prefix] = /* @__PURE__ */ new Set())).add(A), A;
    }
    getScopeValue(h, _) {
      return this._extScope.getValue(h, _);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(h) {
      return this._extScope.scopeRefs(h, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(h, _, A, $) {
      const x = this._scope.toName(_);
      return A !== void 0 && $ && (this._constants[x.str] = A), this._leafNode(new i(h, x, A)), x;
    }
    // `const` declaration (`var` in es5 mode)
    const(h, _, A) {
      return this._def(n.varKinds.const, h, _, A);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(h, _, A) {
      return this._def(n.varKinds.let, h, _, A);
    }
    // `var` declaration with optional assignment
    var(h, _, A) {
      return this._def(n.varKinds.var, h, _, A);
    }
    // assignment code
    assign(h, _, A) {
      return this._leafNode(new a(h, _, A));
    }
    // `+=` code
    add(h, _) {
      return this._leafNode(new c(h, e.operators.ADD, _));
    }
    // appends passed SafeExpr to code or executes Block
    code(h) {
      return typeof h == "function" ? h() : h !== t.nil && this._leafNode(new d(h)), this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...h) {
      const _ = ["{"];
      for (const [A, $] of h)
        _.length > 1 && _.push(","), _.push(A), (A !== $ || this.opts.es5) && (_.push(":"), (0, t.addCodeArg)(_, $));
      return _.push("}"), new t._Code(_);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(h, _, A) {
      if (this._blockNode(new v(h)), _ && A)
        this.code(_).else().code(A).endIf();
      else if (_)
        this.code(_).endIf();
      else if (A)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(h) {
      return this._elseNode(new v(h));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new y());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(v, y);
    }
    _for(h, _) {
      return this._blockNode(h), _ && this.code(_).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(h, _) {
      return this._for(new w(h), _);
    }
    // `for` statement for a range of values
    forRange(h, _, A, $, x = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
      const j = this._scope.toName(h);
      return this._for(new T(x, j, _, A), () => $(j));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(h, _, A, $ = n.varKinds.const) {
      const x = this._scope.toName(h);
      if (this.opts.es5) {
        const j = _ instanceof t.Name ? _ : this.var("_arr", _);
        return this.forRange("_i", 0, (0, t._)`${j}.length`, (R) => {
          this.var(x, (0, t._)`${j}[${R}]`), A(x);
        });
      }
      return this._for(new P("of", $, x, _), () => A(x));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(h, _, A, $ = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(h, (0, t._)`Object.keys(${_})`, A);
      const x = this._scope.toName(h);
      return this._for(new P("in", $, x, _), () => A(x));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode(b);
    }
    // `label` statement
    label(h) {
      return this._leafNode(new p(h));
    }
    // `break` statement
    break(h) {
      return this._leafNode(new l(h));
    }
    // `return` statement
    return(h) {
      const _ = new B();
      if (this._blockNode(_), this.code(h), _.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(B);
    }
    // `try` statement
    try(h, _, A) {
      if (!_ && !A)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const $ = new k();
      if (this._blockNode($), this.code(h), _) {
        const x = this.name("e");
        this._currNode = $.catch = new E(x), _(x);
      }
      return A && (this._currNode = $.finally = new q(), this.code(A)), this._endBlockNode(E, q);
    }
    // `throw` statement
    throw(h) {
      return this._leafNode(new u(h));
    }
    // start self-balancing block
    block(h, _) {
      return this._blockStarts.push(this._nodes.length), h && this.code(h).endBlock(_), this;
    }
    // end the current self-balancing block
    endBlock(h) {
      const _ = this._blockStarts.pop();
      if (_ === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const A = this._nodes.length - _;
      if (A < 0 || h !== void 0 && A !== h)
        throw new Error(`CodeGen: wrong number of nodes: ${A} vs ${h} expected`);
      return this._nodes.length = _, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(h, _ = t.nil, A, $) {
      return this._blockNode(new C(h, _, A)), $ && this.code($).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(C);
    }
    optimize(h = 1) {
      for (; h-- > 0; )
        this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(h) {
      return this._currNode.nodes.push(h), this;
    }
    _blockNode(h) {
      this._currNode.nodes.push(h), this._nodes.push(h);
    }
    _endBlockNode(h, _) {
      const A = this._currNode;
      if (A instanceof h || _ && A instanceof _)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${_ ? `${h.kind}/${_.kind}` : h.kind}"`);
    }
    _elseNode(h) {
      const _ = this._currNode;
      if (!(_ instanceof v))
        throw new Error('CodeGen: "else" without "if"');
      return this._currNode = _.else = h, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const h = this._nodes;
      return h[h.length - 1];
    }
    set _currNode(h) {
      const _ = this._nodes;
      _[_.length - 1] = h;
    }
  }
  e.CodeGen = I;
  function z(O, h) {
    for (const _ in h)
      O[_] = (O[_] || 0) + (h[_] || 0);
    return O;
  }
  function H(O, h) {
    return h instanceof t._CodeOrName ? z(O, h.names) : O;
  }
  function F(O, h, _) {
    if (O instanceof t.Name)
      return A(O);
    if (!$(O))
      return O;
    return new t._Code(O._items.reduce((x, j) => (j instanceof t.Name && (j = A(j)), j instanceof t._Code ? x.push(...j._items) : x.push(j), x), []));
    function A(x) {
      const j = _[x.str];
      return j === void 0 || h[x.str] !== 1 ? x : (delete h[x.str], j);
    }
    function $(x) {
      return x instanceof t._Code && x._items.some((j) => j instanceof t.Name && h[j.str] === 1 && _[j.str] !== void 0);
    }
  }
  function U(O, h) {
    for (const _ in h)
      O[_] = (O[_] || 0) - (h[_] || 0);
  }
  function G(O) {
    return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${N(O)}`;
  }
  e.not = G;
  const V = S(e.operators.AND);
  function K(...O) {
    return O.reduce(V);
  }
  e.and = K;
  const X = S(e.operators.OR);
  function D(...O) {
    return O.reduce(X);
  }
  e.or = D;
  function S(O) {
    return (h, _) => h === t.nil ? _ : _ === t.nil ? h : (0, t._)`${N(h)} ${O} ${N(_)}`;
  }
  function N(O) {
    return O instanceof t.Name ? O : (0, t._)`(${O})`;
  }
})(pe);
var Y = {};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.checkStrictMode = Y.getErrorPath = Y.Type = Y.useFunc = Y.setEvaluated = Y.evaluatedPropsToName = Y.mergeEvaluated = Y.eachItem = Y.unescapeJsonPointer = Y.escapeJsonPointer = Y.escapeFragment = Y.unescapeFragment = Y.schemaRefOrVal = Y.schemaHasRulesButRef = Y.schemaHasRules = Y.checkUnknownRules = Y.alwaysValidSchema = Y.toHash = void 0;
const xe = pe, wie = rs;
function xie(e) {
  const t = {};
  for (const n of e)
    t[n] = !0;
  return t;
}
Y.toHash = xie;
function _ie(e, t) {
  return typeof t == "boolean" ? t : Object.keys(t).length === 0 ? !0 : (Qg(e, t), !Zg(t, e.self.RULES.all));
}
Y.alwaysValidSchema = _ie;
function Qg(e, t = e.schema) {
  const { opts: n, self: r } = e;
  if (!n.strictSchema || typeof t == "boolean")
    return;
  const o = r.RULES.keywords;
  for (const s in t)
    o[s] || nv(e, `unknown keyword: "${s}"`);
}
Y.checkUnknownRules = Qg;
function Zg(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t[n])
      return !0;
  return !1;
}
Y.schemaHasRules = Zg;
function $ie(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (n !== "$ref" && t.all[n])
      return !0;
  return !1;
}
Y.schemaHasRulesButRef = $ie;
function Eie({ topSchemaRef: e, schemaPath: t }, n, r, o) {
  if (!o) {
    if (typeof n == "number" || typeof n == "boolean")
      return n;
    if (typeof n == "string")
      return (0, xe._)`${n}`;
  }
  return (0, xe._)`${e}${t}${(0, xe.getProperty)(r)}`;
}
Y.schemaRefOrVal = Eie;
function Sie(e) {
  return ev(decodeURIComponent(e));
}
Y.unescapeFragment = Sie;
function Tie(e) {
  return encodeURIComponent(mp(e));
}
Y.escapeFragment = Tie;
function mp(e) {
  return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
Y.escapeJsonPointer = mp;
function ev(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
Y.unescapeJsonPointer = ev;
function Oie(e, t) {
  if (Array.isArray(e))
    for (const n of e)
      t(n);
  else
    t(e);
}
Y.eachItem = Oie;
function cm({ mergeNames: e, mergeToName: t, mergeValues: n, resultToName: r }) {
  return (o, s, i, a) => {
    const c = i === void 0 ? s : i instanceof xe.Name ? (s instanceof xe.Name ? e(o, s, i) : t(o, s, i), i) : s instanceof xe.Name ? (t(o, i, s), s) : n(s, i);
    return a === xe.Name && !(c instanceof xe.Name) ? r(o, c) : c;
  };
}
Y.mergeEvaluated = {
  props: cm({
    mergeNames: (e, t, n) => e.if((0, xe._)`${n} !== true && ${t} !== undefined`, () => {
      e.if((0, xe._)`${t} === true`, () => e.assign(n, !0), () => e.assign(n, (0, xe._)`${n} || {}`).code((0, xe._)`Object.assign(${n}, ${t})`));
    }),
    mergeToName: (e, t, n) => e.if((0, xe._)`${n} !== true`, () => {
      t === !0 ? e.assign(n, !0) : (e.assign(n, (0, xe._)`${n} || {}`), hp(e, n, t));
    }),
    mergeValues: (e, t) => e === !0 ? !0 : { ...e, ...t },
    resultToName: tv
  }),
  items: cm({
    mergeNames: (e, t, n) => e.if((0, xe._)`${n} !== true && ${t} !== undefined`, () => e.assign(n, (0, xe._)`${t} === true ? true : ${n} > ${t} ? ${n} : ${t}`)),
    mergeToName: (e, t, n) => e.if((0, xe._)`${n} !== true`, () => e.assign(n, t === !0 ? !0 : (0, xe._)`${n} > ${t} ? ${n} : ${t}`)),
    mergeValues: (e, t) => e === !0 ? !0 : Math.max(e, t),
    resultToName: (e, t) => e.var("items", t)
  })
};
function tv(e, t) {
  if (t === !0)
    return e.var("props", !0);
  const n = e.var("props", (0, xe._)`{}`);
  return t !== void 0 && hp(e, n, t), n;
}
Y.evaluatedPropsToName = tv;
function hp(e, t, n) {
  Object.keys(n).forEach((r) => e.assign((0, xe._)`${t}${(0, xe.getProperty)(r)}`, !0));
}
Y.setEvaluated = hp;
const lm = {};
function Pie(e, t) {
  return e.scopeValue("func", {
    ref: t,
    code: lm[t.code] || (lm[t.code] = new wie._Code(t.code))
  });
}
Y.useFunc = Pie;
var El;
(function(e) {
  e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
})(El || (Y.Type = El = {}));
function Nie(e, t, n) {
  if (e instanceof xe.Name) {
    const r = t === El.Num;
    return n ? r ? (0, xe._)`"[" + ${e} + "]"` : (0, xe._)`"['" + ${e} + "']"` : r ? (0, xe._)`"/" + ${e}` : (0, xe._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
  }
  return n ? (0, xe.getProperty)(e).toString() : "/" + mp(e);
}
Y.getErrorPath = Nie;
function nv(e, t, n = e.opts.strictSchema) {
  if (n) {
    if (t = `strict mode: ${t}`, n === !0)
      throw new Error(t);
    e.self.logger.warn(t);
  }
}
Y.checkStrictMode = nv;
var pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
const nt = pe, Rie = {
  // validation function arguments
  data: new nt.Name("data"),
  // data passed to validation function
  // args passed from referencing schema
  valCxt: new nt.Name("valCxt"),
  // validation/data context - should not be used directly, it is destructured to the names below
  instancePath: new nt.Name("instancePath"),
  parentData: new nt.Name("parentData"),
  parentDataProperty: new nt.Name("parentDataProperty"),
  rootData: new nt.Name("rootData"),
  // root data - same as the data passed to the first/top validation function
  dynamicAnchors: new nt.Name("dynamicAnchors"),
  // used to support recursiveRef and dynamicRef
  // function scoped variables
  vErrors: new nt.Name("vErrors"),
  // null or array of validation errors
  errors: new nt.Name("errors"),
  // counter of validation errors
  this: new nt.Name("this"),
  // "globals"
  self: new nt.Name("self"),
  scope: new nt.Name("scope"),
  // JTD serialize/parse name for JSON string and position
  json: new nt.Name("json"),
  jsonPos: new nt.Name("jsonPos"),
  jsonLen: new nt.Name("jsonLen"),
  jsonPart: new nt.Name("jsonPart")
};
pn.default = Rie;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
  const t = pe, n = Y, r = pn;
  e.keywordError = {
    message: ({ keyword: y }) => (0, t.str)`must pass "${y}" keyword validation`
  }, e.keyword$DataError = {
    message: ({ keyword: y, schemaType: v }) => v ? (0, t.str)`"${y}" keyword must be ${v} ($data)` : (0, t.str)`"${y}" keyword is invalid ($data)`
  };
  function o(y, v = e.keywordError, b, w) {
    const { it: T } = y, { gen: P, compositeRule: C, allErrors: B } = T, k = u(y, v, b);
    w ?? (C || B) ? c(P, k) : p(T, (0, t._)`[${k}]`);
  }
  e.reportError = o;
  function s(y, v = e.keywordError, b) {
    const { it: w } = y, { gen: T, compositeRule: P, allErrors: C } = w, B = u(y, v, b);
    c(T, B), P || C || p(w, r.default.vErrors);
  }
  e.reportExtraError = s;
  function i(y, v) {
    y.assign(r.default.errors, v), y.if((0, t._)`${r.default.vErrors} !== null`, () => y.if(v, () => y.assign((0, t._)`${r.default.vErrors}.length`, v), () => y.assign(r.default.vErrors, null)));
  }
  e.resetErrorsCount = i;
  function a({ gen: y, keyword: v, schemaValue: b, data: w, errsCount: T, it: P }) {
    if (T === void 0)
      throw new Error("ajv implementation error");
    const C = y.name("err");
    y.forRange("i", T, r.default.errors, (B) => {
      y.const(C, (0, t._)`${r.default.vErrors}[${B}]`), y.if((0, t._)`${C}.instancePath === undefined`, () => y.assign((0, t._)`${C}.instancePath`, (0, t.strConcat)(r.default.instancePath, P.errorPath))), y.assign((0, t._)`${C}.schemaPath`, (0, t.str)`${P.errSchemaPath}/${v}`), P.opts.verbose && (y.assign((0, t._)`${C}.schema`, b), y.assign((0, t._)`${C}.data`, w));
    });
  }
  e.extendErrors = a;
  function c(y, v) {
    const b = y.const("err", v);
    y.if((0, t._)`${r.default.vErrors} === null`, () => y.assign(r.default.vErrors, (0, t._)`[${b}]`), (0, t._)`${r.default.vErrors}.push(${b})`), y.code((0, t._)`${r.default.errors}++`);
  }
  function p(y, v) {
    const { gen: b, validateName: w, schemaEnv: T } = y;
    T.$async ? b.throw((0, t._)`new ${y.ValidationError}(${v})`) : (b.assign((0, t._)`${w}.errors`, v), b.return(!1));
  }
  const l = {
    keyword: new t.Name("keyword"),
    schemaPath: new t.Name("schemaPath"),
    // also used in JTD errors
    params: new t.Name("params"),
    propertyName: new t.Name("propertyName"),
    message: new t.Name("message"),
    schema: new t.Name("schema"),
    parentSchema: new t.Name("parentSchema")
  };
  function u(y, v, b) {
    const { createErrors: w } = y.it;
    return w === !1 ? (0, t._)`{}` : d(y, v, b);
  }
  function d(y, v, b = {}) {
    const { gen: w, it: T } = y, P = [
      m(T, b),
      f(y, b)
    ];
    return g(y, v, P), w.object(...P);
  }
  function m({ errorPath: y }, { instancePath: v }) {
    const b = v ? (0, t.str)`${y}${(0, n.getErrorPath)(v, n.Type.Str)}` : y;
    return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, b)];
  }
  function f({ keyword: y, it: { errSchemaPath: v } }, { schemaPath: b, parentSchema: w }) {
    let T = w ? v : (0, t.str)`${v}/${y}`;
    return b && (T = (0, t.str)`${T}${(0, n.getErrorPath)(b, n.Type.Str)}`), [l.schemaPath, T];
  }
  function g(y, { params: v, message: b }, w) {
    const { keyword: T, data: P, schemaValue: C, it: B } = y, { opts: k, propertyName: E, topSchemaRef: q, schemaPath: I } = B;
    w.push([l.keyword, T], [l.params, typeof v == "function" ? v(y) : v || (0, t._)`{}`]), k.messages && w.push([l.message, typeof b == "function" ? b(y) : b]), k.verbose && w.push([l.schema, C], [l.parentSchema, (0, t._)`${q}${I}`], [r.default.data, P]), E && w.push([l.propertyName, E]);
  }
})(gs);
Object.defineProperty(fo, "__esModule", { value: !0 });
fo.boolOrEmptySchema = fo.topBoolOrEmptySchema = void 0;
const Aie = gs, Die = pe, Iie = pn, kie = {
  message: "boolean schema is false"
};
function Cie(e) {
  const { gen: t, schema: n, validateName: r } = e;
  n === !1 ? rv(e, !1) : typeof n == "object" && n.$async === !0 ? t.return(Iie.default.data) : (t.assign((0, Die._)`${r}.errors`, null), t.return(!0));
}
fo.topBoolOrEmptySchema = Cie;
function jie(e, t) {
  const { gen: n, schema: r } = e;
  r === !1 ? (n.var(t, !1), rv(e)) : n.var(t, !0);
}
fo.boolOrEmptySchema = jie;
function rv(e, t) {
  const { gen: n, data: r } = e, o = {
    gen: n,
    keyword: "false schema",
    data: r,
    schema: !1,
    schemaCode: !1,
    schemaValue: !1,
    params: {},
    it: e
  };
  (0, Aie.reportError)(o, kie, void 0, t);
}
var Le = {}, Dr = {};
Object.defineProperty(Dr, "__esModule", { value: !0 });
Dr.getRules = Dr.isJSONType = void 0;
const Lie = ["string", "number", "integer", "boolean", "null", "object", "array"], qie = new Set(Lie);
function Fie(e) {
  return typeof e == "string" && qie.has(e);
}
Dr.isJSONType = Fie;
function Mie() {
  const e = {
    number: { type: "number", rules: [] },
    string: { type: "string", rules: [] },
    array: { type: "array", rules: [] },
    object: { type: "object", rules: [] }
  };
  return {
    types: { ...e, integer: !0, boolean: !0, null: !0 },
    rules: [{ rules: [] }, e.number, e.string, e.array, e.object],
    post: { rules: [] },
    all: {},
    keywords: {}
  };
}
Dr.getRules = Mie;
var Tn = {};
Object.defineProperty(Tn, "__esModule", { value: !0 });
Tn.shouldUseRule = Tn.shouldUseGroup = Tn.schemaHasRulesForType = void 0;
function Uie({ schema: e, self: t }, n) {
  const r = t.RULES.types[n];
  return r && r !== !0 && ov(e, r);
}
Tn.schemaHasRulesForType = Uie;
function ov(e, t) {
  return t.rules.some((n) => sv(e, n));
}
Tn.shouldUseGroup = ov;
function sv(e, t) {
  var n;
  return e[t.keyword] !== void 0 || ((n = t.definition.implements) === null || n === void 0 ? void 0 : n.some((r) => e[r] !== void 0));
}
Tn.shouldUseRule = sv;
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.reportTypeError = Le.checkDataTypes = Le.checkDataType = Le.coerceAndCheckDataType = Le.getJSONTypes = Le.getSchemaTypes = Le.DataType = void 0;
const Vie = Dr, zie = Tn, Bie = gs, ue = pe, iv = Y;
var to;
(function(e) {
  e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
})(to || (Le.DataType = to = {}));
function Gie(e) {
  const t = av(e.type);
  if (t.includes("null")) {
    if (e.nullable === !1)
      throw new Error("type: null contradicts nullable: false");
  } else {
    if (!t.length && e.nullable !== void 0)
      throw new Error('"nullable" cannot be used without "type"');
    e.nullable === !0 && t.push("null");
  }
  return t;
}
Le.getSchemaTypes = Gie;
function av(e) {
  const t = Array.isArray(e) ? e : e ? [e] : [];
  if (t.every(Vie.isJSONType))
    return t;
  throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
}
Le.getJSONTypes = av;
function Hie(e, t) {
  const { gen: n, data: r, opts: o } = e, s = Xie(t, o.coerceTypes), i = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, zie.schemaHasRulesForType)(e, t[0]));
  if (i) {
    const a = yp(t, r, o.strictNumbers, to.Wrong);
    n.if(a, () => {
      s.length ? Kie(e, t, s) : gp(e);
    });
  }
  return i;
}
Le.coerceAndCheckDataType = Hie;
const cv = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
function Xie(e, t) {
  return t ? e.filter((n) => cv.has(n) || t === "array" && n === "array") : [];
}
function Kie(e, t, n) {
  const { gen: r, data: o, opts: s } = e, i = r.let("dataType", (0, ue._)`typeof ${o}`), a = r.let("coerced", (0, ue._)`undefined`);
  s.coerceTypes === "array" && r.if((0, ue._)`${i} == 'object' && Array.isArray(${o}) && ${o}.length == 1`, () => r.assign(o, (0, ue._)`${o}[0]`).assign(i, (0, ue._)`typeof ${o}`).if(yp(t, o, s.strictNumbers), () => r.assign(a, o))), r.if((0, ue._)`${a} !== undefined`);
  for (const p of n)
    (cv.has(p) || p === "array" && s.coerceTypes === "array") && c(p);
  r.else(), gp(e), r.endIf(), r.if((0, ue._)`${a} !== undefined`, () => {
    r.assign(o, a), Wie(e, a);
  });
  function c(p) {
    switch (p) {
      case "string":
        r.elseIf((0, ue._)`${i} == "number" || ${i} == "boolean"`).assign(a, (0, ue._)`"" + ${o}`).elseIf((0, ue._)`${o} === null`).assign(a, (0, ue._)`""`);
        return;
      case "number":
        r.elseIf((0, ue._)`${i} == "boolean" || ${o} === null
              || (${i} == "string" && ${o} && ${o} == +${o})`).assign(a, (0, ue._)`+${o}`);
        return;
      case "integer":
        r.elseIf((0, ue._)`${i} === "boolean" || ${o} === null
              || (${i} === "string" && ${o} && ${o} == +${o} && !(${o} % 1))`).assign(a, (0, ue._)`+${o}`);
        return;
      case "boolean":
        r.elseIf((0, ue._)`${o} === "false" || ${o} === 0 || ${o} === null`).assign(a, !1).elseIf((0, ue._)`${o} === "true" || ${o} === 1`).assign(a, !0);
        return;
      case "null":
        r.elseIf((0, ue._)`${o} === "" || ${o} === 0 || ${o} === false`), r.assign(a, null);
        return;
      case "array":
        r.elseIf((0, ue._)`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${o} === null`).assign(a, (0, ue._)`[${o}]`);
    }
  }
}
function Wie({ gen: e, parentData: t, parentDataProperty: n }, r) {
  e.if((0, ue._)`${t} !== undefined`, () => e.assign((0, ue._)`${t}[${n}]`, r));
}
function Sl(e, t, n, r = to.Correct) {
  const o = r === to.Correct ? ue.operators.EQ : ue.operators.NEQ;
  let s;
  switch (e) {
    case "null":
      return (0, ue._)`${t} ${o} null`;
    case "array":
      s = (0, ue._)`Array.isArray(${t})`;
      break;
    case "object":
      s = (0, ue._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
      break;
    case "integer":
      s = i((0, ue._)`!(${t} % 1) && !isNaN(${t})`);
      break;
    case "number":
      s = i();
      break;
    default:
      return (0, ue._)`typeof ${t} ${o} ${e}`;
  }
  return r === to.Correct ? s : (0, ue.not)(s);
  function i(a = ue.nil) {
    return (0, ue.and)((0, ue._)`typeof ${t} == "number"`, a, n ? (0, ue._)`isFinite(${t})` : ue.nil);
  }
}
Le.checkDataType = Sl;
function yp(e, t, n, r) {
  if (e.length === 1)
    return Sl(e[0], t, n, r);
  let o;
  const s = (0, iv.toHash)(e);
  if (s.array && s.object) {
    const i = (0, ue._)`typeof ${t} != "object"`;
    o = s.null ? i : (0, ue._)`!${t} || ${i}`, delete s.null, delete s.array, delete s.object;
  } else
    o = ue.nil;
  s.number && delete s.integer;
  for (const i in s)
    o = (0, ue.and)(o, Sl(i, t, n, r));
  return o;
}
Le.checkDataTypes = yp;
const Jie = {
  message: ({ schema: e }) => `must be ${e}`,
  params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, ue._)`{type: ${e}}` : (0, ue._)`{type: ${t}}`
};
function gp(e) {
  const t = Yie(e);
  (0, Bie.reportError)(t, Jie);
}
Le.reportTypeError = gp;
function Yie(e) {
  const { gen: t, data: n, schema: r } = e, o = (0, iv.schemaRefOrVal)(e, r, "type");
  return {
    gen: t,
    keyword: "type",
    data: n,
    schema: r.type,
    schemaCode: o,
    schemaValue: o,
    parentSchema: r,
    params: {},
    it: e
  };
}
var ca = {};
Object.defineProperty(ca, "__esModule", { value: !0 });
ca.assignDefaults = void 0;
const Mr = pe, Qie = Y;
function Zie(e, t) {
  const { properties: n, items: r } = e.schema;
  if (t === "object" && n)
    for (const o in n)
      um(e, o, n[o].default);
  else t === "array" && Array.isArray(r) && r.forEach((o, s) => um(e, s, o.default));
}
ca.assignDefaults = Zie;
function um(e, t, n) {
  const { gen: r, compositeRule: o, data: s, opts: i } = e;
  if (n === void 0)
    return;
  const a = (0, Mr._)`${s}${(0, Mr.getProperty)(t)}`;
  if (o) {
    (0, Qie.checkStrictMode)(e, `default is ignored for: ${a}`);
    return;
  }
  let c = (0, Mr._)`${a} === undefined`;
  i.useDefaults === "empty" && (c = (0, Mr._)`${c} || ${a} === null || ${a} === ""`), r.if(c, (0, Mr._)`${a} = ${(0, Mr.stringify)(n)}`);
}
var un = {}, me = {};
Object.defineProperty(me, "__esModule", { value: !0 });
me.validateUnion = me.validateArray = me.usePattern = me.callValidateCode = me.schemaProperties = me.allSchemaProperties = me.noPropertyInData = me.propertyInData = me.isOwnProperty = me.hasPropFunc = me.reportMissingProp = me.checkMissingProp = me.checkReportMissingProp = void 0;
const Ee = pe, vp = Y, Ln = pn, eae = Y;
function tae(e, t) {
  const { gen: n, data: r, it: o } = e;
  n.if(wp(n, r, t, o.opts.ownProperties), () => {
    e.setParams({ missingProperty: (0, Ee._)`${t}` }, !0), e.error();
  });
}
me.checkReportMissingProp = tae;
function nae({ gen: e, data: t, it: { opts: n } }, r, o) {
  return (0, Ee.or)(...r.map((s) => (0, Ee.and)(wp(e, t, s, n.ownProperties), (0, Ee._)`${o} = ${s}`)));
}
me.checkMissingProp = nae;
function rae(e, t) {
  e.setParams({ missingProperty: t }, !0), e.error();
}
me.reportMissingProp = rae;
function lv(e) {
  return e.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, Ee._)`Object.prototype.hasOwnProperty`
  });
}
me.hasPropFunc = lv;
function bp(e, t, n) {
  return (0, Ee._)`${lv(e)}.call(${t}, ${n})`;
}
me.isOwnProperty = bp;
function oae(e, t, n, r) {
  const o = (0, Ee._)`${t}${(0, Ee.getProperty)(n)} !== undefined`;
  return r ? (0, Ee._)`${o} && ${bp(e, t, n)}` : o;
}
me.propertyInData = oae;
function wp(e, t, n, r) {
  const o = (0, Ee._)`${t}${(0, Ee.getProperty)(n)} === undefined`;
  return r ? (0, Ee.or)(o, (0, Ee.not)(bp(e, t, n))) : o;
}
me.noPropertyInData = wp;
function uv(e) {
  return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
}
me.allSchemaProperties = uv;
function sae(e, t) {
  return uv(t).filter((n) => !(0, vp.alwaysValidSchema)(e, t[n]));
}
me.schemaProperties = sae;
function iae({ schemaCode: e, data: t, it: { gen: n, topSchemaRef: r, schemaPath: o, errorPath: s }, it: i }, a, c, p) {
  const l = p ? (0, Ee._)`${e}, ${t}, ${r}${o}` : t, u = [
    [Ln.default.instancePath, (0, Ee.strConcat)(Ln.default.instancePath, s)],
    [Ln.default.parentData, i.parentData],
    [Ln.default.parentDataProperty, i.parentDataProperty],
    [Ln.default.rootData, Ln.default.rootData]
  ];
  i.opts.dynamicRef && u.push([Ln.default.dynamicAnchors, Ln.default.dynamicAnchors]);
  const d = (0, Ee._)`${l}, ${n.object(...u)}`;
  return c !== Ee.nil ? (0, Ee._)`${a}.call(${c}, ${d})` : (0, Ee._)`${a}(${d})`;
}
me.callValidateCode = iae;
const aae = (0, Ee._)`new RegExp`;
function cae({ gen: e, it: { opts: t } }, n) {
  const r = t.unicodeRegExp ? "u" : "", { regExp: o } = t.code, s = o(n, r);
  return e.scopeValue("pattern", {
    key: s.toString(),
    ref: s,
    code: (0, Ee._)`${o.code === "new RegExp" ? aae : (0, eae.useFunc)(e, o)}(${n}, ${r})`
  });
}
me.usePattern = cae;
function lae(e) {
  const { gen: t, data: n, keyword: r, it: o } = e, s = t.name("valid");
  if (o.allErrors) {
    const a = t.let("valid", !0);
    return i(() => t.assign(a, !1)), a;
  }
  return t.var(s, !0), i(() => t.break()), s;
  function i(a) {
    const c = t.const("len", (0, Ee._)`${n}.length`);
    t.forRange("i", 0, c, (p) => {
      e.subschema({
        keyword: r,
        dataProp: p,
        dataPropType: vp.Type.Num
      }, s), t.if((0, Ee.not)(s), a);
    });
  }
}
me.validateArray = lae;
function uae(e) {
  const { gen: t, schema: n, keyword: r, it: o } = e;
  if (!Array.isArray(n))
    throw new Error("ajv implementation error");
  if (n.some((c) => (0, vp.alwaysValidSchema)(o, c)) && !o.opts.unevaluated)
    return;
  const i = t.let("valid", !1), a = t.name("_valid");
  t.block(() => n.forEach((c, p) => {
    const l = e.subschema({
      keyword: r,
      schemaProp: p,
      compositeRule: !0
    }, a);
    t.assign(i, (0, Ee._)`${i} || ${a}`), e.mergeValidEvaluated(l, a) || t.if((0, Ee.not)(i));
  })), e.result(i, () => e.reset(), () => e.error(!0));
}
me.validateUnion = uae;
Object.defineProperty(un, "__esModule", { value: !0 });
un.validateKeywordUsage = un.validSchemaType = un.funcKeywordCode = un.macroKeywordCode = void 0;
const ct = pe, hr = pn, pae = me, dae = gs;
function fae(e, t) {
  const { gen: n, keyword: r, schema: o, parentSchema: s, it: i } = e, a = t.macro.call(i.self, o, s, i), c = pv(n, r, a);
  i.opts.validateSchema !== !1 && i.self.validateSchema(a, !0);
  const p = n.name("valid");
  e.subschema({
    schema: a,
    schemaPath: ct.nil,
    errSchemaPath: `${i.errSchemaPath}/${r}`,
    topSchemaRef: c,
    compositeRule: !0
  }, p), e.pass(p, () => e.error(!0));
}
un.macroKeywordCode = fae;
function mae(e, t) {
  var n;
  const { gen: r, keyword: o, schema: s, parentSchema: i, $data: a, it: c } = e;
  yae(c, t);
  const p = !a && t.compile ? t.compile.call(c.self, s, i, c) : t.validate, l = pv(r, o, p), u = r.let("valid");
  e.block$data(u, d), e.ok((n = t.valid) !== null && n !== void 0 ? n : u);
  function d() {
    if (t.errors === !1)
      g(), t.modifying && pm(e), y(() => e.error());
    else {
      const v = t.async ? m() : f();
      t.modifying && pm(e), y(() => hae(e, v));
    }
  }
  function m() {
    const v = r.let("ruleErrs", null);
    return r.try(() => g((0, ct._)`await `), (b) => r.assign(u, !1).if((0, ct._)`${b} instanceof ${c.ValidationError}`, () => r.assign(v, (0, ct._)`${b}.errors`), () => r.throw(b))), v;
  }
  function f() {
    const v = (0, ct._)`${l}.errors`;
    return r.assign(v, null), g(ct.nil), v;
  }
  function g(v = t.async ? (0, ct._)`await ` : ct.nil) {
    const b = c.opts.passContext ? hr.default.this : hr.default.self, w = !("compile" in t && !a || t.schema === !1);
    r.assign(u, (0, ct._)`${v}${(0, pae.callValidateCode)(e, l, b, w)}`, t.modifying);
  }
  function y(v) {
    var b;
    r.if((0, ct.not)((b = t.valid) !== null && b !== void 0 ? b : u), v);
  }
}
un.funcKeywordCode = mae;
function pm(e) {
  const { gen: t, data: n, it: r } = e;
  t.if(r.parentData, () => t.assign(n, (0, ct._)`${r.parentData}[${r.parentDataProperty}]`));
}
function hae(e, t) {
  const { gen: n } = e;
  n.if((0, ct._)`Array.isArray(${t})`, () => {
    n.assign(hr.default.vErrors, (0, ct._)`${hr.default.vErrors} === null ? ${t} : ${hr.default.vErrors}.concat(${t})`).assign(hr.default.errors, (0, ct._)`${hr.default.vErrors}.length`), (0, dae.extendErrors)(e);
  }, () => e.error());
}
function yae({ schemaEnv: e }, t) {
  if (t.async && !e.$async)
    throw new Error("async keyword in sync schema");
}
function pv(e, t, n) {
  if (n === void 0)
    throw new Error(`keyword "${t}" failed to compile`);
  return e.scopeValue("keyword", typeof n == "function" ? { ref: n } : { ref: n, code: (0, ct.stringify)(n) });
}
function gae(e, t, n = !1) {
  return !t.length || t.some((r) => r === "array" ? Array.isArray(e) : r === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == r || n && typeof e > "u");
}
un.validSchemaType = gae;
function vae({ schema: e, opts: t, self: n, errSchemaPath: r }, o, s) {
  if (Array.isArray(o.keyword) ? !o.keyword.includes(s) : o.keyword !== s)
    throw new Error("ajv implementation error");
  const i = o.dependencies;
  if (i != null && i.some((a) => !Object.prototype.hasOwnProperty.call(e, a)))
    throw new Error(`parent schema must have dependencies of ${s}: ${i.join(",")}`);
  if (o.validateSchema && !o.validateSchema(e[s])) {
    const c = `keyword "${s}" value is invalid at path "${r}": ` + n.errorsText(o.validateSchema.errors);
    if (t.validateSchema === "log")
      n.logger.error(c);
    else
      throw new Error(c);
  }
}
un.validateKeywordUsage = vae;
var Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.extendSubschemaMode = Qn.extendSubschemaData = Qn.getSubschema = void 0;
const an = pe, dv = Y;
function bae(e, { keyword: t, schemaProp: n, schema: r, schemaPath: o, errSchemaPath: s, topSchemaRef: i }) {
  if (t !== void 0 && r !== void 0)
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  if (t !== void 0) {
    const a = e.schema[t];
    return n === void 0 ? {
      schema: a,
      schemaPath: (0, an._)`${e.schemaPath}${(0, an.getProperty)(t)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}`
    } : {
      schema: a[n],
      schemaPath: (0, an._)`${e.schemaPath}${(0, an.getProperty)(t)}${(0, an.getProperty)(n)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}/${(0, dv.escapeFragment)(n)}`
    };
  }
  if (r !== void 0) {
    if (o === void 0 || s === void 0 || i === void 0)
      throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
    return {
      schema: r,
      schemaPath: o,
      topSchemaRef: i,
      errSchemaPath: s
    };
  }
  throw new Error('either "keyword" or "schema" must be passed');
}
Qn.getSubschema = bae;
function wae(e, t, { dataProp: n, dataPropType: r, data: o, dataTypes: s, propertyName: i }) {
  if (o !== void 0 && n !== void 0)
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  const { gen: a } = t;
  if (n !== void 0) {
    const { errorPath: p, dataPathArr: l, opts: u } = t, d = a.let("data", (0, an._)`${t.data}${(0, an.getProperty)(n)}`, !0);
    c(d), e.errorPath = (0, an.str)`${p}${(0, dv.getErrorPath)(n, r, u.jsPropertySyntax)}`, e.parentDataProperty = (0, an._)`${n}`, e.dataPathArr = [...l, e.parentDataProperty];
  }
  if (o !== void 0) {
    const p = o instanceof an.Name ? o : a.let("data", o, !0);
    c(p), i !== void 0 && (e.propertyName = i);
  }
  s && (e.dataTypes = s);
  function c(p) {
    e.data = p, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = /* @__PURE__ */ new Set(), e.parentData = t.data, e.dataNames = [...t.dataNames, p];
  }
}
Qn.extendSubschemaData = wae;
function xae(e, { jtdDiscriminator: t, jtdMetadata: n, compositeRule: r, createErrors: o, allErrors: s }) {
  r !== void 0 && (e.compositeRule = r), o !== void 0 && (e.createErrors = o), s !== void 0 && (e.allErrors = s), e.jtdDiscriminator = t, e.jtdMetadata = n;
}
Qn.extendSubschemaMode = xae;
var We = {}, fv = { exports: {} }, Kn = fv.exports = function(e, t, n) {
  typeof t == "function" && (n = t, t = {}), n = t.cb || n;
  var r = typeof n == "function" ? n : n.pre || function() {
  }, o = n.post || function() {
  };
  pi(t, r, o, e, "", e);
};
Kn.keywords = {
  additionalItems: !0,
  items: !0,
  contains: !0,
  additionalProperties: !0,
  propertyNames: !0,
  not: !0,
  if: !0,
  then: !0,
  else: !0
};
Kn.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
Kn.propsKeywords = {
  $defs: !0,
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
Kn.skipKeywords = {
  default: !0,
  enum: !0,
  const: !0,
  required: !0,
  maximum: !0,
  minimum: !0,
  exclusiveMaximum: !0,
  exclusiveMinimum: !0,
  multipleOf: !0,
  maxLength: !0,
  minLength: !0,
  pattern: !0,
  format: !0,
  maxItems: !0,
  minItems: !0,
  uniqueItems: !0,
  maxProperties: !0,
  minProperties: !0
};
function pi(e, t, n, r, o, s, i, a, c, p) {
  if (r && typeof r == "object" && !Array.isArray(r)) {
    t(r, o, s, i, a, c, p);
    for (var l in r) {
      var u = r[l];
      if (Array.isArray(u)) {
        if (l in Kn.arrayKeywords)
          for (var d = 0; d < u.length; d++)
            pi(e, t, n, u[d], o + "/" + l + "/" + d, s, o, l, r, d);
      } else if (l in Kn.propsKeywords) {
        if (u && typeof u == "object")
          for (var m in u)
            pi(e, t, n, u[m], o + "/" + l + "/" + _ae(m), s, o, l, r, m);
      } else (l in Kn.keywords || e.allKeys && !(l in Kn.skipKeywords)) && pi(e, t, n, u, o + "/" + l, s, o, l, r);
    }
    n(r, o, s, i, a, c, p);
  }
}
function _ae(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
var $ae = fv.exports;
Object.defineProperty(We, "__esModule", { value: !0 });
We.getSchemaRefs = We.resolveUrl = We.normalizeId = We._getFullPath = We.getFullPath = We.inlineRef = void 0;
const Eae = Y, Sae = ta, Tae = $ae, Oae = /* @__PURE__ */ new Set([
  "type",
  "format",
  "pattern",
  "maxLength",
  "minLength",
  "maxProperties",
  "minProperties",
  "maxItems",
  "minItems",
  "maximum",
  "minimum",
  "uniqueItems",
  "multipleOf",
  "required",
  "enum",
  "const"
]);
function Pae(e, t = !0) {
  return typeof e == "boolean" ? !0 : t === !0 ? !Tl(e) : t ? mv(e) <= t : !1;
}
We.inlineRef = Pae;
const Nae = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function Tl(e) {
  for (const t in e) {
    if (Nae.has(t))
      return !0;
    const n = e[t];
    if (Array.isArray(n) && n.some(Tl) || typeof n == "object" && Tl(n))
      return !0;
  }
  return !1;
}
function mv(e) {
  let t = 0;
  for (const n in e) {
    if (n === "$ref")
      return 1 / 0;
    if (t++, !Oae.has(n) && (typeof e[n] == "object" && (0, Eae.eachItem)(e[n], (r) => t += mv(r)), t === 1 / 0))
      return 1 / 0;
  }
  return t;
}
function hv(e, t = "", n) {
  n !== !1 && (t = no(t));
  const r = e.parse(t);
  return yv(e, r);
}
We.getFullPath = hv;
function yv(e, t) {
  return e.serialize(t).split("#")[0] + "#";
}
We._getFullPath = yv;
const Rae = /#\/?$/;
function no(e) {
  return e ? e.replace(Rae, "") : "";
}
We.normalizeId = no;
function Aae(e, t, n) {
  return n = no(n), e.resolve(t, n);
}
We.resolveUrl = Aae;
const Dae = /^[a-z_][-a-z0-9._]*$/i;
function Iae(e, t) {
  if (typeof e == "boolean")
    return {};
  const { schemaId: n, uriResolver: r } = this.opts, o = no(e[n] || t), s = { "": o }, i = hv(r, o, !1), a = {}, c = /* @__PURE__ */ new Set();
  return Tae(e, { allKeys: !0 }, (u, d, m, f) => {
    if (f === void 0)
      return;
    const g = i + d;
    let y = s[f];
    typeof u[n] == "string" && (y = v.call(this, u[n])), b.call(this, u.$anchor), b.call(this, u.$dynamicAnchor), s[d] = y;
    function v(w) {
      const T = this.opts.uriResolver.resolve;
      if (w = no(y ? T(y, w) : w), c.has(w))
        throw l(w);
      c.add(w);
      let P = this.refs[w];
      return typeof P == "string" && (P = this.refs[P]), typeof P == "object" ? p(u, P.schema, w) : w !== no(g) && (w[0] === "#" ? (p(u, a[w], w), a[w] = u) : this.refs[w] = g), w;
    }
    function b(w) {
      if (typeof w == "string") {
        if (!Dae.test(w))
          throw new Error(`invalid anchor "${w}"`);
        v.call(this, `#${w}`);
      }
    }
  }), a;
  function p(u, d, m) {
    if (d !== void 0 && !Sae(u, d))
      throw l(m);
  }
  function l(u) {
    return new Error(`reference "${u}" resolves to more than one schema`);
  }
}
We.getSchemaRefs = Iae;
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.getData = Gt.KeywordCxt = Gt.validateFunctionCode = void 0;
const gv = fo, dm = Le, xp = Tn, ki = Le, kae = ca, Jo = un, _c = Qn, te = pe, se = pn, Cae = We, On = Y, Lo = gs;
function jae(e) {
  if (wv(e) && (xv(e), bv(e))) {
    Fae(e);
    return;
  }
  vv(e, () => (0, gv.topBoolOrEmptySchema)(e));
}
Gt.validateFunctionCode = jae;
function vv({ gen: e, validateName: t, schema: n, schemaEnv: r, opts: o }, s) {
  o.code.es5 ? e.func(t, (0, te._)`${se.default.data}, ${se.default.valCxt}`, r.$async, () => {
    e.code((0, te._)`"use strict"; ${fm(n, o)}`), qae(e, o), e.code(s);
  }) : e.func(t, (0, te._)`${se.default.data}, ${Lae(o)}`, r.$async, () => e.code(fm(n, o)).code(s));
}
function Lae(e) {
  return (0, te._)`{${se.default.instancePath}="", ${se.default.parentData}, ${se.default.parentDataProperty}, ${se.default.rootData}=${se.default.data}${e.dynamicRef ? (0, te._)`, ${se.default.dynamicAnchors}={}` : te.nil}}={}`;
}
function qae(e, t) {
  e.if(se.default.valCxt, () => {
    e.var(se.default.instancePath, (0, te._)`${se.default.valCxt}.${se.default.instancePath}`), e.var(se.default.parentData, (0, te._)`${se.default.valCxt}.${se.default.parentData}`), e.var(se.default.parentDataProperty, (0, te._)`${se.default.valCxt}.${se.default.parentDataProperty}`), e.var(se.default.rootData, (0, te._)`${se.default.valCxt}.${se.default.rootData}`), t.dynamicRef && e.var(se.default.dynamicAnchors, (0, te._)`${se.default.valCxt}.${se.default.dynamicAnchors}`);
  }, () => {
    e.var(se.default.instancePath, (0, te._)`""`), e.var(se.default.parentData, (0, te._)`undefined`), e.var(se.default.parentDataProperty, (0, te._)`undefined`), e.var(se.default.rootData, se.default.data), t.dynamicRef && e.var(se.default.dynamicAnchors, (0, te._)`{}`);
  });
}
function Fae(e) {
  const { schema: t, opts: n, gen: r } = e;
  vv(e, () => {
    n.$comment && t.$comment && $v(e), Bae(e), r.let(se.default.vErrors, null), r.let(se.default.errors, 0), n.unevaluated && Mae(e), _v(e), Xae(e);
  });
}
function Mae(e) {
  const { gen: t, validateName: n } = e;
  e.evaluated = t.const("evaluated", (0, te._)`${n}.evaluated`), t.if((0, te._)`${e.evaluated}.dynamicProps`, () => t.assign((0, te._)`${e.evaluated}.props`, (0, te._)`undefined`)), t.if((0, te._)`${e.evaluated}.dynamicItems`, () => t.assign((0, te._)`${e.evaluated}.items`, (0, te._)`undefined`));
}
function fm(e, t) {
  const n = typeof e == "object" && e[t.schemaId];
  return n && (t.code.source || t.code.process) ? (0, te._)`/*# sourceURL=${n} */` : te.nil;
}
function Uae(e, t) {
  if (wv(e) && (xv(e), bv(e))) {
    Vae(e, t);
    return;
  }
  (0, gv.boolOrEmptySchema)(e, t);
}
function bv({ schema: e, self: t }) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t.RULES.all[n])
      return !0;
  return !1;
}
function wv(e) {
  return typeof e.schema != "boolean";
}
function Vae(e, t) {
  const { schema: n, gen: r, opts: o } = e;
  o.$comment && n.$comment && $v(e), Gae(e), Hae(e);
  const s = r.const("_errs", se.default.errors);
  _v(e, s), r.var(t, (0, te._)`${s} === ${se.default.errors}`);
}
function xv(e) {
  (0, On.checkUnknownRules)(e), zae(e);
}
function _v(e, t) {
  if (e.opts.jtd)
    return mm(e, [], !1, t);
  const n = (0, dm.getSchemaTypes)(e.schema), r = (0, dm.coerceAndCheckDataType)(e, n);
  mm(e, n, !r, t);
}
function zae(e) {
  const { schema: t, errSchemaPath: n, opts: r, self: o } = e;
  t.$ref && r.ignoreKeywordsWithRef && (0, On.schemaHasRulesButRef)(t, o.RULES) && o.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
}
function Bae(e) {
  const { schema: t, opts: n } = e;
  t.default !== void 0 && n.useDefaults && n.strictSchema && (0, On.checkStrictMode)(e, "default is ignored in the schema root");
}
function Gae(e) {
  const t = e.schema[e.opts.schemaId];
  t && (e.baseId = (0, Cae.resolveUrl)(e.opts.uriResolver, e.baseId, t));
}
function Hae(e) {
  if (e.schema.$async && !e.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function $v({ gen: e, schemaEnv: t, schema: n, errSchemaPath: r, opts: o }) {
  const s = n.$comment;
  if (o.$comment === !0)
    e.code((0, te._)`${se.default.self}.logger.log(${s})`);
  else if (typeof o.$comment == "function") {
    const i = (0, te.str)`${r}/$comment`, a = e.scopeValue("root", { ref: t.root });
    e.code((0, te._)`${se.default.self}.opts.$comment(${s}, ${i}, ${a}.schema)`);
  }
}
function Xae(e) {
  const { gen: t, schemaEnv: n, validateName: r, ValidationError: o, opts: s } = e;
  n.$async ? t.if((0, te._)`${se.default.errors} === 0`, () => t.return(se.default.data), () => t.throw((0, te._)`new ${o}(${se.default.vErrors})`)) : (t.assign((0, te._)`${r}.errors`, se.default.vErrors), s.unevaluated && Kae(e), t.return((0, te._)`${se.default.errors} === 0`));
}
function Kae({ gen: e, evaluated: t, props: n, items: r }) {
  n instanceof te.Name && e.assign((0, te._)`${t}.props`, n), r instanceof te.Name && e.assign((0, te._)`${t}.items`, r);
}
function mm(e, t, n, r) {
  const { gen: o, schema: s, data: i, allErrors: a, opts: c, self: p } = e, { RULES: l } = p;
  if (s.$ref && (c.ignoreKeywordsWithRef || !(0, On.schemaHasRulesButRef)(s, l))) {
    o.block(() => Tv(e, "$ref", l.all.$ref.definition));
    return;
  }
  c.jtd || Wae(e, t), o.block(() => {
    for (const d of l.rules)
      u(d);
    u(l.post);
  });
  function u(d) {
    (0, xp.shouldUseGroup)(s, d) && (d.type ? (o.if((0, ki.checkDataType)(d.type, i, c.strictNumbers)), hm(e, d), t.length === 1 && t[0] === d.type && n && (o.else(), (0, ki.reportTypeError)(e)), o.endIf()) : hm(e, d), a || o.if((0, te._)`${se.default.errors} === ${r || 0}`));
  }
}
function hm(e, t) {
  const { gen: n, schema: r, opts: { useDefaults: o } } = e;
  o && (0, kae.assignDefaults)(e, t.type), n.block(() => {
    for (const s of t.rules)
      (0, xp.shouldUseRule)(r, s) && Tv(e, s.keyword, s.definition, t.type);
  });
}
function Wae(e, t) {
  e.schemaEnv.meta || !e.opts.strictTypes || (Jae(e, t), e.opts.allowUnionTypes || Yae(e, t), Qae(e, e.dataTypes));
}
function Jae(e, t) {
  if (t.length) {
    if (!e.dataTypes.length) {
      e.dataTypes = t;
      return;
    }
    t.forEach((n) => {
      Ev(e.dataTypes, n) || _p(e, `type "${n}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), ece(e, t);
  }
}
function Yae(e, t) {
  t.length > 1 && !(t.length === 2 && t.includes("null")) && _p(e, "use allowUnionTypes to allow union type keyword");
}
function Qae(e, t) {
  const n = e.self.RULES.all;
  for (const r in n) {
    const o = n[r];
    if (typeof o == "object" && (0, xp.shouldUseRule)(e.schema, o)) {
      const { type: s } = o.definition;
      s.length && !s.some((i) => Zae(t, i)) && _p(e, `missing type "${s.join(",")}" for keyword "${r}"`);
    }
  }
}
function Zae(e, t) {
  return e.includes(t) || t === "number" && e.includes("integer");
}
function Ev(e, t) {
  return e.includes(t) || t === "integer" && e.includes("number");
}
function ece(e, t) {
  const n = [];
  for (const r of e.dataTypes)
    Ev(t, r) ? n.push(r) : t.includes("integer") && r === "number" && n.push("integer");
  e.dataTypes = n;
}
function _p(e, t) {
  const n = e.schemaEnv.baseId + e.errSchemaPath;
  t += ` at "${n}" (strictTypes)`, (0, On.checkStrictMode)(e, t, e.opts.strictTypes);
}
class Sv {
  constructor(t, n, r) {
    if ((0, Jo.validateKeywordUsage)(t, n, r), this.gen = t.gen, this.allErrors = t.allErrors, this.keyword = r, this.data = t.data, this.schema = t.schema[r], this.$data = n.$data && t.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, On.schemaRefOrVal)(t, this.schema, r, this.$data), this.schemaType = n.schemaType, this.parentSchema = t.schema, this.params = {}, this.it = t, this.def = n, this.$data)
      this.schemaCode = t.gen.const("vSchema", Ov(this.$data, t));
    else if (this.schemaCode = this.schemaValue, !(0, Jo.validSchemaType)(this.schema, n.schemaType, n.allowUndefined))
      throw new Error(`${r} value must be ${JSON.stringify(n.schemaType)}`);
    ("code" in n ? n.trackErrors : n.errors !== !1) && (this.errsCount = t.gen.const("_errs", se.default.errors));
  }
  result(t, n, r) {
    this.failResult((0, te.not)(t), n, r);
  }
  failResult(t, n, r) {
    this.gen.if(t), r ? r() : this.error(), n ? (this.gen.else(), n(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  pass(t, n) {
    this.failResult((0, te.not)(t), void 0, n);
  }
  fail(t) {
    if (t === void 0) {
      this.error(), this.allErrors || this.gen.if(!1);
      return;
    }
    this.gen.if(t), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  fail$data(t) {
    if (!this.$data)
      return this.fail(t);
    const { schemaCode: n } = this;
    this.fail((0, te._)`${n} !== undefined && (${(0, te.or)(this.invalid$data(), t)})`);
  }
  error(t, n, r) {
    if (n) {
      this.setParams(n), this._error(t, r), this.setParams({});
      return;
    }
    this._error(t, r);
  }
  _error(t, n) {
    (t ? Lo.reportExtraError : Lo.reportError)(this, this.def.error, n);
  }
  $dataError() {
    (0, Lo.reportError)(this, this.def.$dataError || Lo.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, Lo.resetErrorsCount)(this.gen, this.errsCount);
  }
  ok(t) {
    this.allErrors || this.gen.if(t);
  }
  setParams(t, n) {
    n ? Object.assign(this.params, t) : this.params = t;
  }
  block$data(t, n, r = te.nil) {
    this.gen.block(() => {
      this.check$data(t, r), n();
    });
  }
  check$data(t = te.nil, n = te.nil) {
    if (!this.$data)
      return;
    const { gen: r, schemaCode: o, schemaType: s, def: i } = this;
    r.if((0, te.or)((0, te._)`${o} === undefined`, n)), t !== te.nil && r.assign(t, !0), (s.length || i.validateSchema) && (r.elseIf(this.invalid$data()), this.$dataError(), t !== te.nil && r.assign(t, !1)), r.else();
  }
  invalid$data() {
    const { gen: t, schemaCode: n, schemaType: r, def: o, it: s } = this;
    return (0, te.or)(i(), a());
    function i() {
      if (r.length) {
        if (!(n instanceof te.Name))
          throw new Error("ajv implementation error");
        const c = Array.isArray(r) ? r : [r];
        return (0, te._)`${(0, ki.checkDataTypes)(c, n, s.opts.strictNumbers, ki.DataType.Wrong)}`;
      }
      return te.nil;
    }
    function a() {
      if (o.validateSchema) {
        const c = t.scopeValue("validate$data", { ref: o.validateSchema });
        return (0, te._)`!${c}(${n})`;
      }
      return te.nil;
    }
  }
  subschema(t, n) {
    const r = (0, _c.getSubschema)(this.it, t);
    (0, _c.extendSubschemaData)(r, this.it, t), (0, _c.extendSubschemaMode)(r, t);
    const o = { ...this.it, ...r, items: void 0, props: void 0 };
    return Uae(o, n), o;
  }
  mergeEvaluated(t, n) {
    const { it: r, gen: o } = this;
    r.opts.unevaluated && (r.props !== !0 && t.props !== void 0 && (r.props = On.mergeEvaluated.props(o, t.props, r.props, n)), r.items !== !0 && t.items !== void 0 && (r.items = On.mergeEvaluated.items(o, t.items, r.items, n)));
  }
  mergeValidEvaluated(t, n) {
    const { it: r, gen: o } = this;
    if (r.opts.unevaluated && (r.props !== !0 || r.items !== !0))
      return o.if(n, () => this.mergeEvaluated(t, te.Name)), !0;
  }
}
Gt.KeywordCxt = Sv;
function Tv(e, t, n, r) {
  const o = new Sv(e, n, t);
  "code" in n ? n.code(o, r) : o.$data && n.validate ? (0, Jo.funcKeywordCode)(o, n) : "macro" in n ? (0, Jo.macroKeywordCode)(o, n) : (n.compile || n.validate) && (0, Jo.funcKeywordCode)(o, n);
}
const tce = /^\/(?:[^~]|~0|~1)*$/, nce = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function Ov(e, { dataLevel: t, dataNames: n, dataPathArr: r }) {
  let o, s;
  if (e === "")
    return se.default.rootData;
  if (e[0] === "/") {
    if (!tce.test(e))
      throw new Error(`Invalid JSON-pointer: ${e}`);
    o = e, s = se.default.rootData;
  } else {
    const p = nce.exec(e);
    if (!p)
      throw new Error(`Invalid JSON-pointer: ${e}`);
    const l = +p[1];
    if (o = p[2], o === "#") {
      if (l >= t)
        throw new Error(c("property/index", l));
      return r[t - l];
    }
    if (l > t)
      throw new Error(c("data", l));
    if (s = n[t - l], !o)
      return s;
  }
  let i = s;
  const a = o.split("/");
  for (const p of a)
    p && (s = (0, te._)`${s}${(0, te.getProperty)((0, On.unescapeJsonPointer)(p))}`, i = (0, te._)`${i} && ${s}`);
  return i;
  function c(p, l) {
    return `Cannot access ${p} ${l} levels up, current level is ${t}`;
  }
}
Gt.getData = Ov;
var vs = {};
Object.defineProperty(vs, "__esModule", { value: !0 });
class rce extends Error {
  constructor(t) {
    super("validation failed"), this.errors = t, this.ajv = this.validation = !0;
  }
}
vs.default = rce;
var So = {};
Object.defineProperty(So, "__esModule", { value: !0 });
const $c = We;
class oce extends Error {
  constructor(t, n, r, o) {
    super(o || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, $c.resolveUrl)(t, n, r), this.missingSchema = (0, $c.normalizeId)((0, $c.getFullPath)(t, this.missingRef));
  }
}
So.default = oce;
var wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.resolveSchema = wt.getCompilingSchema = wt.resolveRef = wt.compileSchema = wt.SchemaEnv = void 0;
const Lt = pe, sce = vs, lr = pn, zt = We, ym = Y, ice = Gt;
class la {
  constructor(t) {
    var n;
    this.refs = {}, this.dynamicAnchors = {};
    let r;
    typeof t.schema == "object" && (r = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (n = t.baseId) !== null && n !== void 0 ? n : (0, zt.normalizeId)(r == null ? void 0 : r[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = r == null ? void 0 : r.$async, this.refs = {};
  }
}
wt.SchemaEnv = la;
function $p(e) {
  const t = Pv.call(this, e);
  if (t)
    return t;
  const n = (0, zt.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: r, lines: o } = this.opts.code, { ownProperties: s } = this.opts, i = new Lt.CodeGen(this.scope, { es5: r, lines: o, ownProperties: s });
  let a;
  e.$async && (a = i.scopeValue("Error", {
    ref: sce.default,
    code: (0, Lt._)`require("ajv/dist/runtime/validation_error").default`
  }));
  const c = i.scopeName("validate");
  e.validateName = c;
  const p = {
    gen: i,
    allErrors: this.opts.allErrors,
    data: lr.default.data,
    parentData: lr.default.parentData,
    parentDataProperty: lr.default.parentDataProperty,
    dataNames: [lr.default.data],
    dataPathArr: [Lt.nil],
    // TODO can its length be used as dataLevel if nil is removed?
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: i.scopeValue("schema", this.opts.code.source === !0 ? { ref: e.schema, code: (0, Lt.stringify)(e.schema) } : { ref: e.schema }),
    validateName: c,
    ValidationError: a,
    schema: e.schema,
    schemaEnv: e,
    rootId: n,
    baseId: e.baseId || n,
    schemaPath: Lt.nil,
    errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, Lt._)`""`,
    opts: this.opts,
    self: this
  };
  let l;
  try {
    this._compilations.add(e), (0, ice.validateFunctionCode)(p), i.optimize(this.opts.code.optimize);
    const u = i.toString();
    l = `${i.scopeRefs(lr.default.scope)}return ${u}`, this.opts.code.process && (l = this.opts.code.process(l, e));
    const m = new Function(`${lr.default.self}`, `${lr.default.scope}`, l)(this, this.scope.get());
    if (this.scope.value(c, { ref: m }), m.errors = null, m.schema = e.schema, m.schemaEnv = e, e.$async && (m.$async = !0), this.opts.code.source === !0 && (m.source = { validateName: c, validateCode: u, scopeValues: i._values }), this.opts.unevaluated) {
      const { props: f, items: g } = p;
      m.evaluated = {
        props: f instanceof Lt.Name ? void 0 : f,
        items: g instanceof Lt.Name ? void 0 : g,
        dynamicProps: f instanceof Lt.Name,
        dynamicItems: g instanceof Lt.Name
      }, m.source && (m.source.evaluated = (0, Lt.stringify)(m.evaluated));
    }
    return e.validate = m, e;
  } catch (u) {
    throw delete e.validate, delete e.validateName, l && this.logger.error("Error compiling schema, function code:", l), u;
  } finally {
    this._compilations.delete(e);
  }
}
wt.compileSchema = $p;
function ace(e, t, n) {
  var r;
  n = (0, zt.resolveUrl)(this.opts.uriResolver, t, n);
  const o = e.refs[n];
  if (o)
    return o;
  let s = uce.call(this, e, n);
  if (s === void 0) {
    const i = (r = e.localRefs) === null || r === void 0 ? void 0 : r[n], { schemaId: a } = this.opts;
    i && (s = new la({ schema: i, schemaId: a, root: e, baseId: t }));
  }
  if (s !== void 0)
    return e.refs[n] = cce.call(this, s);
}
wt.resolveRef = ace;
function cce(e) {
  return (0, zt.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : $p.call(this, e);
}
function Pv(e) {
  for (const t of this._compilations)
    if (lce(t, e))
      return t;
}
wt.getCompilingSchema = Pv;
function lce(e, t) {
  return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
}
function uce(e, t) {
  let n;
  for (; typeof (n = this.refs[t]) == "string"; )
    t = n;
  return n || this.schemas[t] || ua.call(this, e, t);
}
function ua(e, t) {
  const n = this.opts.uriResolver.parse(t), r = (0, zt._getFullPath)(this.opts.uriResolver, n);
  let o = (0, zt.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
  if (Object.keys(e.schema).length > 0 && r === o)
    return Ec.call(this, n, e);
  const s = (0, zt.normalizeId)(r), i = this.refs[s] || this.schemas[s];
  if (typeof i == "string") {
    const a = ua.call(this, e, i);
    return typeof (a == null ? void 0 : a.schema) != "object" ? void 0 : Ec.call(this, n, a);
  }
  if (typeof (i == null ? void 0 : i.schema) == "object") {
    if (i.validate || $p.call(this, i), s === (0, zt.normalizeId)(t)) {
      const { schema: a } = i, { schemaId: c } = this.opts, p = a[c];
      return p && (o = (0, zt.resolveUrl)(this.opts.uriResolver, o, p)), new la({ schema: a, schemaId: c, root: e, baseId: o });
    }
    return Ec.call(this, n, i);
  }
}
wt.resolveSchema = ua;
const pce = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function Ec(e, { baseId: t, schema: n, root: r }) {
  var o;
  if (((o = e.fragment) === null || o === void 0 ? void 0 : o[0]) !== "/")
    return;
  for (const a of e.fragment.slice(1).split("/")) {
    if (typeof n == "boolean")
      return;
    const c = n[(0, ym.unescapeFragment)(a)];
    if (c === void 0)
      return;
    n = c;
    const p = typeof n == "object" && n[this.opts.schemaId];
    !pce.has(a) && p && (t = (0, zt.resolveUrl)(this.opts.uriResolver, t, p));
  }
  let s;
  if (typeof n != "boolean" && n.$ref && !(0, ym.schemaHasRulesButRef)(n, this.RULES)) {
    const a = (0, zt.resolveUrl)(this.opts.uriResolver, t, n.$ref);
    s = ua.call(this, r, a);
  }
  const { schemaId: i } = this.opts;
  if (s = s || new la({ schema: n, schemaId: i, root: r, baseId: t }), s.schema !== s.root.schema)
    return s;
}
const dce = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", fce = "Meta-schema for $data reference (JSON AnySchema extension proposal)", mce = "object", hce = [
  "$data"
], yce = {
  $data: {
    type: "string",
    anyOf: [
      {
        format: "relative-json-pointer"
      },
      {
        format: "json-pointer"
      }
    ]
  }
}, gce = !1, vce = {
  $id: dce,
  description: fce,
  type: mce,
  required: hce,
  properties: yce,
  additionalProperties: gce
};
var Ep = {};
Object.defineProperty(Ep, "__esModule", { value: !0 });
const Nv = qg;
Nv.code = 'require("ajv/dist/runtime/uri").default';
Ep.default = Nv;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
  var t = Gt;
  Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
    return t.KeywordCxt;
  } });
  var n = pe;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return n._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return n.str;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return n.stringify;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return n.nil;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return n.Name;
  } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
    return n.CodeGen;
  } });
  const r = vs, o = So, s = Dr, i = wt, a = pe, c = We, p = Le, l = Y, u = vce, d = Ep, m = (D, S) => new RegExp(D, S);
  m.code = "new RegExp";
  const f = ["removeAdditional", "useDefaults", "coerceTypes"], g = /* @__PURE__ */ new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error"
  ]), y = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
  }, v = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  }, b = 200;
  function w(D) {
    var S, N, O, h, _, A, $, x, j, R, Z, ye, be, Oe, Pe, ht, _e, Ve, fn, Jt, kt, Yt, nr, rr, or;
    const Ct = D.strict, sr = (S = D.code) === null || S === void 0 ? void 0 : S.optimize, Do = sr === !0 || sr === void 0 ? 1 : sr || 0, Io = (O = (N = D.code) === null || N === void 0 ? void 0 : N.regExp) !== null && O !== void 0 ? O : m, Na = (h = D.uriResolver) !== null && h !== void 0 ? h : d.default;
    return {
      strictSchema: (A = (_ = D.strictSchema) !== null && _ !== void 0 ? _ : Ct) !== null && A !== void 0 ? A : !0,
      strictNumbers: (x = ($ = D.strictNumbers) !== null && $ !== void 0 ? $ : Ct) !== null && x !== void 0 ? x : !0,
      strictTypes: (R = (j = D.strictTypes) !== null && j !== void 0 ? j : Ct) !== null && R !== void 0 ? R : "log",
      strictTuples: (ye = (Z = D.strictTuples) !== null && Z !== void 0 ? Z : Ct) !== null && ye !== void 0 ? ye : "log",
      strictRequired: (Oe = (be = D.strictRequired) !== null && be !== void 0 ? be : Ct) !== null && Oe !== void 0 ? Oe : !1,
      code: D.code ? { ...D.code, optimize: Do, regExp: Io } : { optimize: Do, regExp: Io },
      loopRequired: (Pe = D.loopRequired) !== null && Pe !== void 0 ? Pe : b,
      loopEnum: (ht = D.loopEnum) !== null && ht !== void 0 ? ht : b,
      meta: (_e = D.meta) !== null && _e !== void 0 ? _e : !0,
      messages: (Ve = D.messages) !== null && Ve !== void 0 ? Ve : !0,
      inlineRefs: (fn = D.inlineRefs) !== null && fn !== void 0 ? fn : !0,
      schemaId: (Jt = D.schemaId) !== null && Jt !== void 0 ? Jt : "$id",
      addUsedSchema: (kt = D.addUsedSchema) !== null && kt !== void 0 ? kt : !0,
      validateSchema: (Yt = D.validateSchema) !== null && Yt !== void 0 ? Yt : !0,
      validateFormats: (nr = D.validateFormats) !== null && nr !== void 0 ? nr : !0,
      unicodeRegExp: (rr = D.unicodeRegExp) !== null && rr !== void 0 ? rr : !0,
      int32range: (or = D.int32range) !== null && or !== void 0 ? or : !0,
      uriResolver: Na
    };
  }
  class T {
    constructor(S = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), S = this.opts = { ...S, ...w(S) };
      const { es5: N, lines: O } = this.opts.code;
      this.scope = new a.ValueScope({ scope: {}, prefixes: g, es5: N, lines: O }), this.logger = z(S.logger);
      const h = S.validateFormats;
      S.validateFormats = !1, this.RULES = (0, s.getRules)(), P.call(this, y, S, "NOT SUPPORTED"), P.call(this, v, S, "DEPRECATED", "warn"), this._metaOpts = q.call(this), S.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), S.keywords && E.call(this, S.keywords), typeof S.meta == "object" && this.addMetaSchema(S.meta), B.call(this), S.validateFormats = h;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: S, meta: N, schemaId: O } = this.opts;
      let h = u;
      O === "id" && (h = { ...u }, h.id = h.$id, delete h.$id), N && S && this.addMetaSchema(h, h[O], !1);
    }
    defaultMeta() {
      const { meta: S, schemaId: N } = this.opts;
      return this.opts.defaultMeta = typeof S == "object" ? S[N] || S : void 0;
    }
    validate(S, N) {
      let O;
      if (typeof S == "string") {
        if (O = this.getSchema(S), !O)
          throw new Error(`no schema with key or ref "${S}"`);
      } else
        O = this.compile(S);
      const h = O(N);
      return "$async" in O || (this.errors = O.errors), h;
    }
    compile(S, N) {
      const O = this._addSchema(S, N);
      return O.validate || this._compileSchemaEnv(O);
    }
    compileAsync(S, N) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: O } = this.opts;
      return h.call(this, S, N);
      async function h(R, Z) {
        await _.call(this, R.$schema);
        const ye = this._addSchema(R, Z);
        return ye.validate || A.call(this, ye);
      }
      async function _(R) {
        R && !this.getSchema(R) && await h.call(this, { $ref: R }, !0);
      }
      async function A(R) {
        try {
          return this._compileSchemaEnv(R);
        } catch (Z) {
          if (!(Z instanceof o.default))
            throw Z;
          return $.call(this, Z), await x.call(this, Z.missingSchema), A.call(this, R);
        }
      }
      function $({ missingSchema: R, missingRef: Z }) {
        if (this.refs[R])
          throw new Error(`AnySchema ${R} is loaded but ${Z} cannot be resolved`);
      }
      async function x(R) {
        const Z = await j.call(this, R);
        this.refs[R] || await _.call(this, Z.$schema), this.refs[R] || this.addSchema(Z, R, N);
      }
      async function j(R) {
        const Z = this._loading[R];
        if (Z)
          return Z;
        try {
          return await (this._loading[R] = O(R));
        } finally {
          delete this._loading[R];
        }
      }
    }
    // Adds schema to the instance
    addSchema(S, N, O, h = this.opts.validateSchema) {
      if (Array.isArray(S)) {
        for (const A of S)
          this.addSchema(A, void 0, O, h);
        return this;
      }
      let _;
      if (typeof S == "object") {
        const { schemaId: A } = this.opts;
        if (_ = S[A], _ !== void 0 && typeof _ != "string")
          throw new Error(`schema ${A} must be string`);
      }
      return N = (0, c.normalizeId)(N || _), this._checkUnique(N), this.schemas[N] = this._addSchema(S, O, N, h, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(S, N, O = this.opts.validateSchema) {
      return this.addSchema(S, N, !0, O), this;
    }
    //  Validate schema against its meta-schema
    validateSchema(S, N) {
      if (typeof S == "boolean")
        return !0;
      let O;
      if (O = S.$schema, O !== void 0 && typeof O != "string")
        throw new Error("$schema must be a string");
      if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const h = this.validate(O, S);
      if (!h && N) {
        const _ = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log")
          this.logger.error(_);
        else
          throw new Error(_);
      }
      return h;
    }
    // Get compiled schema by `key` or `ref`.
    // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
    getSchema(S) {
      let N;
      for (; typeof (N = C.call(this, S)) == "string"; )
        S = N;
      if (N === void 0) {
        const { schemaId: O } = this.opts, h = new i.SchemaEnv({ schema: {}, schemaId: O });
        if (N = i.resolveSchema.call(this, h, S), !N)
          return;
        this.refs[S] = N;
      }
      return N.validate || this._compileSchemaEnv(N);
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema(S) {
      if (S instanceof RegExp)
        return this._removeAllSchemas(this.schemas, S), this._removeAllSchemas(this.refs, S), this;
      switch (typeof S) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          const N = C.call(this, S);
          return typeof N == "object" && this._cache.delete(N.schema), delete this.schemas[S], delete this.refs[S], this;
        }
        case "object": {
          const N = S;
          this._cache.delete(N);
          let O = S[this.opts.schemaId];
          return O && (O = (0, c.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary(S) {
      for (const N of S)
        this.addKeyword(N);
      return this;
    }
    addKeyword(S, N) {
      let O;
      if (typeof S == "string")
        O = S, typeof N == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), N.keyword = O);
      else if (typeof S == "object" && N === void 0) {
        if (N = S, O = N.keyword, Array.isArray(O) && !O.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (F.call(this, O, N), !N)
        return (0, l.eachItem)(O, (_) => U.call(this, _)), this;
      V.call(this, N);
      const h = {
        ...N,
        type: (0, p.getJSONTypes)(N.type),
        schemaType: (0, p.getJSONTypes)(N.schemaType)
      };
      return (0, l.eachItem)(O, h.type.length === 0 ? (_) => U.call(this, _, h) : (_) => h.type.forEach((A) => U.call(this, _, h, A))), this;
    }
    getKeyword(S) {
      const N = this.RULES.all[S];
      return typeof N == "object" ? N.definition : !!N;
    }
    // Remove keyword
    removeKeyword(S) {
      const { RULES: N } = this;
      delete N.keywords[S], delete N.all[S];
      for (const O of N.rules) {
        const h = O.rules.findIndex((_) => _.keyword === S);
        h >= 0 && O.rules.splice(h, 1);
      }
      return this;
    }
    // Add format
    addFormat(S, N) {
      return typeof N == "string" && (N = new RegExp(N)), this.formats[S] = N, this;
    }
    errorsText(S = this.errors, { separator: N = ", ", dataVar: O = "data" } = {}) {
      return !S || S.length === 0 ? "No errors" : S.map((h) => `${O}${h.instancePath} ${h.message}`).reduce((h, _) => h + N + _);
    }
    $dataMetaSchema(S, N) {
      const O = this.RULES.all;
      S = JSON.parse(JSON.stringify(S));
      for (const h of N) {
        const _ = h.split("/").slice(1);
        let A = S;
        for (const $ of _)
          A = A[$];
        for (const $ in O) {
          const x = O[$];
          if (typeof x != "object")
            continue;
          const { $data: j } = x.definition, R = A[$];
          j && R && (A[$] = X(R));
        }
      }
      return S;
    }
    _removeAllSchemas(S, N) {
      for (const O in S) {
        const h = S[O];
        (!N || N.test(O)) && (typeof h == "string" ? delete S[O] : h && !h.meta && (this._cache.delete(h.schema), delete S[O]));
      }
    }
    _addSchema(S, N, O, h = this.opts.validateSchema, _ = this.opts.addUsedSchema) {
      let A;
      const { schemaId: $ } = this.opts;
      if (typeof S == "object")
        A = S[$];
      else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        if (typeof S != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let x = this._cache.get(S);
      if (x !== void 0)
        return x;
      O = (0, c.normalizeId)(A || O);
      const j = c.getSchemaRefs.call(this, S, O);
      return x = new i.SchemaEnv({ schema: S, schemaId: $, meta: N, baseId: O, localRefs: j }), this._cache.set(x.schema, x), _ && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = x), h && this.validateSchema(S, !0), x;
    }
    _checkUnique(S) {
      if (this.schemas[S] || this.refs[S])
        throw new Error(`schema with key or id "${S}" already exists`);
    }
    _compileSchemaEnv(S) {
      if (S.meta ? this._compileMetaSchema(S) : i.compileSchema.call(this, S), !S.validate)
        throw new Error("ajv implementation error");
      return S.validate;
    }
    _compileMetaSchema(S) {
      const N = this.opts;
      this.opts = this._metaOpts;
      try {
        i.compileSchema.call(this, S);
      } finally {
        this.opts = N;
      }
    }
  }
  T.ValidationError = r.default, T.MissingRefError = o.default, e.default = T;
  function P(D, S, N, O = "error") {
    for (const h in D) {
      const _ = h;
      _ in S && this.logger[O](`${N}: option ${h}. ${D[_]}`);
    }
  }
  function C(D) {
    return D = (0, c.normalizeId)(D), this.schemas[D] || this.refs[D];
  }
  function B() {
    const D = this.opts.schemas;
    if (D)
      if (Array.isArray(D))
        this.addSchema(D);
      else
        for (const S in D)
          this.addSchema(D[S], S);
  }
  function k() {
    for (const D in this.opts.formats) {
      const S = this.opts.formats[D];
      S && this.addFormat(D, S);
    }
  }
  function E(D) {
    if (Array.isArray(D)) {
      this.addVocabulary(D);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const S in D) {
      const N = D[S];
      N.keyword || (N.keyword = S), this.addKeyword(N);
    }
  }
  function q() {
    const D = { ...this.opts };
    for (const S of f)
      delete D[S];
    return D;
  }
  const I = { log() {
  }, warn() {
  }, error() {
  } };
  function z(D) {
    if (D === !1)
      return I;
    if (D === void 0)
      return console;
    if (D.log && D.warn && D.error)
      return D;
    throw new Error("logger must implement log, warn and error methods");
  }
  const H = /^[a-z_$][a-z0-9_$:-]*$/i;
  function F(D, S) {
    const { RULES: N } = this;
    if ((0, l.eachItem)(D, (O) => {
      if (N.keywords[O])
        throw new Error(`Keyword ${O} is already defined`);
      if (!H.test(O))
        throw new Error(`Keyword ${O} has invalid name`);
    }), !!S && S.$data && !("code" in S || "validate" in S))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function U(D, S, N) {
    var O;
    const h = S == null ? void 0 : S.post;
    if (N && h)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: _ } = this;
    let A = h ? _.post : _.rules.find(({ type: x }) => x === N);
    if (A || (A = { type: N, rules: [] }, _.rules.push(A)), _.keywords[D] = !0, !S)
      return;
    const $ = {
      keyword: D,
      definition: {
        ...S,
        type: (0, p.getJSONTypes)(S.type),
        schemaType: (0, p.getJSONTypes)(S.schemaType)
      }
    };
    S.before ? G.call(this, A, $, S.before) : A.rules.push($), _.all[D] = $, (O = S.implements) === null || O === void 0 || O.forEach((x) => this.addKeyword(x));
  }
  function G(D, S, N) {
    const O = D.rules.findIndex((h) => h.keyword === N);
    O >= 0 ? D.rules.splice(O, 0, S) : (D.rules.push(S), this.logger.warn(`rule ${N} is not defined`));
  }
  function V(D) {
    let { metaSchema: S } = D;
    S !== void 0 && (D.$data && this.opts.$data && (S = X(S)), D.validateSchema = this.compile(S, !0));
  }
  const K = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function X(D) {
    return { anyOf: [D, K] };
  }
})(Yg);
var Sp = {}, Tp = {}, Op = {};
Object.defineProperty(Op, "__esModule", { value: !0 });
const bce = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
Op.default = bce;
var Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
Ir.callRef = Ir.getValidate = void 0;
const wce = So, gm = me, bt = pe, Ur = pn, vm = wt, Fs = Y, xce = {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    const { gen: t, schema: n, it: r } = e, { baseId: o, schemaEnv: s, validateName: i, opts: a, self: c } = r, { root: p } = s;
    if ((n === "#" || n === "#/") && o === p.baseId)
      return u();
    const l = vm.resolveRef.call(c, p, o, n);
    if (l === void 0)
      throw new wce.default(r.opts.uriResolver, o, n);
    if (l instanceof vm.SchemaEnv)
      return d(l);
    return m(l);
    function u() {
      if (s === p)
        return di(e, i, s, s.$async);
      const f = t.scopeValue("root", { ref: p });
      return di(e, (0, bt._)`${f}.validate`, p, p.$async);
    }
    function d(f) {
      const g = Rv(e, f);
      di(e, g, f, f.$async);
    }
    function m(f) {
      const g = t.scopeValue("schema", a.code.source === !0 ? { ref: f, code: (0, bt.stringify)(f) } : { ref: f }), y = t.name("valid"), v = e.subschema({
        schema: f,
        dataTypes: [],
        schemaPath: bt.nil,
        topSchemaRef: g,
        errSchemaPath: n
      }, y);
      e.mergeEvaluated(v), e.ok(y);
    }
  }
};
function Rv(e, t) {
  const { gen: n } = e;
  return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, bt._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
}
Ir.getValidate = Rv;
function di(e, t, n, r) {
  const { gen: o, it: s } = e, { allErrors: i, schemaEnv: a, opts: c } = s, p = c.passContext ? Ur.default.this : bt.nil;
  r ? l() : u();
  function l() {
    if (!a.$async)
      throw new Error("async schema referenced by sync schema");
    const f = o.let("valid");
    o.try(() => {
      o.code((0, bt._)`await ${(0, gm.callValidateCode)(e, t, p)}`), m(t), i || o.assign(f, !0);
    }, (g) => {
      o.if((0, bt._)`!(${g} instanceof ${s.ValidationError})`, () => o.throw(g)), d(g), i || o.assign(f, !1);
    }), e.ok(f);
  }
  function u() {
    e.result((0, gm.callValidateCode)(e, t, p), () => m(t), () => d(t));
  }
  function d(f) {
    const g = (0, bt._)`${f}.errors`;
    o.assign(Ur.default.vErrors, (0, bt._)`${Ur.default.vErrors} === null ? ${g} : ${Ur.default.vErrors}.concat(${g})`), o.assign(Ur.default.errors, (0, bt._)`${Ur.default.vErrors}.length`);
  }
  function m(f) {
    var g;
    if (!s.opts.unevaluated)
      return;
    const y = (g = n == null ? void 0 : n.validate) === null || g === void 0 ? void 0 : g.evaluated;
    if (s.props !== !0)
      if (y && !y.dynamicProps)
        y.props !== void 0 && (s.props = Fs.mergeEvaluated.props(o, y.props, s.props));
      else {
        const v = o.var("props", (0, bt._)`${f}.evaluated.props`);
        s.props = Fs.mergeEvaluated.props(o, v, s.props, bt.Name);
      }
    if (s.items !== !0)
      if (y && !y.dynamicItems)
        y.items !== void 0 && (s.items = Fs.mergeEvaluated.items(o, y.items, s.items));
      else {
        const v = o.var("items", (0, bt._)`${f}.evaluated.items`);
        s.items = Fs.mergeEvaluated.items(o, v, s.items, bt.Name);
      }
  }
}
Ir.callRef = di;
Ir.default = xce;
Object.defineProperty(Tp, "__esModule", { value: !0 });
const _ce = Op, $ce = Ir, Ece = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  _ce.default,
  $ce.default
];
Tp.default = Ece;
var Pp = {}, Np = {};
Object.defineProperty(Np, "__esModule", { value: !0 });
const Ci = pe, qn = Ci.operators, ji = {
  maximum: { okStr: "<=", ok: qn.LTE, fail: qn.GT },
  minimum: { okStr: ">=", ok: qn.GTE, fail: qn.LT },
  exclusiveMaximum: { okStr: "<", ok: qn.LT, fail: qn.GTE },
  exclusiveMinimum: { okStr: ">", ok: qn.GT, fail: qn.LTE }
}, Sce = {
  message: ({ keyword: e, schemaCode: t }) => (0, Ci.str)`must be ${ji[e].okStr} ${t}`,
  params: ({ keyword: e, schemaCode: t }) => (0, Ci._)`{comparison: ${ji[e].okStr}, limit: ${t}}`
}, Tce = {
  keyword: Object.keys(ji),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: Sce,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e;
    e.fail$data((0, Ci._)`${n} ${ji[t].fail} ${r} || isNaN(${n})`);
  }
};
Np.default = Tce;
var Rp = {};
Object.defineProperty(Rp, "__esModule", { value: !0 });
const Yo = pe, Oce = {
  message: ({ schemaCode: e }) => (0, Yo.str)`must be multiple of ${e}`,
  params: ({ schemaCode: e }) => (0, Yo._)`{multipleOf: ${e}}`
}, Pce = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: Oce,
  code(e) {
    const { gen: t, data: n, schemaCode: r, it: o } = e, s = o.opts.multipleOfPrecision, i = t.let("res"), a = s ? (0, Yo._)`Math.abs(Math.round(${i}) - ${i}) > 1e-${s}` : (0, Yo._)`${i} !== parseInt(${i})`;
    e.fail$data((0, Yo._)`(${r} === 0 || (${i} = ${n}/${r}, ${a}))`);
  }
};
Rp.default = Pce;
var Ap = {}, Dp = {};
Object.defineProperty(Dp, "__esModule", { value: !0 });
function Av(e) {
  const t = e.length;
  let n = 0, r = 0, o;
  for (; r < t; )
    n++, o = e.charCodeAt(r++), o >= 55296 && o <= 56319 && r < t && (o = e.charCodeAt(r), (o & 64512) === 56320 && r++);
  return n;
}
Dp.default = Av;
Av.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(Ap, "__esModule", { value: !0 });
const yr = pe, Nce = Y, Rce = Dp, Ace = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxLength" ? "more" : "fewer";
    return (0, yr.str)`must NOT have ${n} than ${t} characters`;
  },
  params: ({ schemaCode: e }) => (0, yr._)`{limit: ${e}}`
}, Dce = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: Ace,
  code(e) {
    const { keyword: t, data: n, schemaCode: r, it: o } = e, s = t === "maxLength" ? yr.operators.GT : yr.operators.LT, i = o.opts.unicode === !1 ? (0, yr._)`${n}.length` : (0, yr._)`${(0, Nce.useFunc)(e.gen, Rce.default)}(${n})`;
    e.fail$data((0, yr._)`${i} ${s} ${r}`);
  }
};
Ap.default = Dce;
var Ip = {};
Object.defineProperty(Ip, "__esModule", { value: !0 });
const Ice = me, Li = pe, kce = {
  message: ({ schemaCode: e }) => (0, Li.str)`must match pattern "${e}"`,
  params: ({ schemaCode: e }) => (0, Li._)`{pattern: ${e}}`
}, Cce = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: kce,
  code(e) {
    const { data: t, $data: n, schema: r, schemaCode: o, it: s } = e, i = s.opts.unicodeRegExp ? "u" : "", a = n ? (0, Li._)`(new RegExp(${o}, ${i}))` : (0, Ice.usePattern)(e, r);
    e.fail$data((0, Li._)`!${a}.test(${t})`);
  }
};
Ip.default = Cce;
var kp = {};
Object.defineProperty(kp, "__esModule", { value: !0 });
const Qo = pe, jce = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxProperties" ? "more" : "fewer";
    return (0, Qo.str)`must NOT have ${n} than ${t} properties`;
  },
  params: ({ schemaCode: e }) => (0, Qo._)`{limit: ${e}}`
}, Lce = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: jce,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, o = t === "maxProperties" ? Qo.operators.GT : Qo.operators.LT;
    e.fail$data((0, Qo._)`Object.keys(${n}).length ${o} ${r}`);
  }
};
kp.default = Lce;
var Cp = {};
Object.defineProperty(Cp, "__esModule", { value: !0 });
const qo = me, Zo = pe, qce = Y, Fce = {
  message: ({ params: { missingProperty: e } }) => (0, Zo.str)`must have required property '${e}'`,
  params: ({ params: { missingProperty: e } }) => (0, Zo._)`{missingProperty: ${e}}`
}, Mce = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: Fce,
  code(e) {
    const { gen: t, schema: n, schemaCode: r, data: o, $data: s, it: i } = e, { opts: a } = i;
    if (!s && n.length === 0)
      return;
    const c = n.length >= a.loopRequired;
    if (i.allErrors ? p() : l(), a.strictRequired) {
      const m = e.parentSchema.properties, { definedProperties: f } = e.it;
      for (const g of n)
        if ((m == null ? void 0 : m[g]) === void 0 && !f.has(g)) {
          const y = i.schemaEnv.baseId + i.errSchemaPath, v = `required property "${g}" is not defined at "${y}" (strictRequired)`;
          (0, qce.checkStrictMode)(i, v, i.opts.strictRequired);
        }
    }
    function p() {
      if (c || s)
        e.block$data(Zo.nil, u);
      else
        for (const m of n)
          (0, qo.checkReportMissingProp)(e, m);
    }
    function l() {
      const m = t.let("missing");
      if (c || s) {
        const f = t.let("valid", !0);
        e.block$data(f, () => d(m, f)), e.ok(f);
      } else
        t.if((0, qo.checkMissingProp)(e, n, m)), (0, qo.reportMissingProp)(e, m), t.else();
    }
    function u() {
      t.forOf("prop", r, (m) => {
        e.setParams({ missingProperty: m }), t.if((0, qo.noPropertyInData)(t, o, m, a.ownProperties), () => e.error());
      });
    }
    function d(m, f) {
      e.setParams({ missingProperty: m }), t.forOf(m, r, () => {
        t.assign(f, (0, qo.propertyInData)(t, o, m, a.ownProperties)), t.if((0, Zo.not)(f), () => {
          e.error(), t.break();
        });
      }, Zo.nil);
    }
  }
};
Cp.default = Mce;
var jp = {};
Object.defineProperty(jp, "__esModule", { value: !0 });
const es = pe, Uce = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxItems" ? "more" : "fewer";
    return (0, es.str)`must NOT have ${n} than ${t} items`;
  },
  params: ({ schemaCode: e }) => (0, es._)`{limit: ${e}}`
}, Vce = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: Uce,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, o = t === "maxItems" ? es.operators.GT : es.operators.LT;
    e.fail$data((0, es._)`${n}.length ${o} ${r}`);
  }
};
jp.default = Vce;
var Lp = {}, bs = {};
Object.defineProperty(bs, "__esModule", { value: !0 });
const Dv = ta;
Dv.code = 'require("ajv/dist/runtime/equal").default';
bs.default = Dv;
Object.defineProperty(Lp, "__esModule", { value: !0 });
const Sc = Le, He = pe, zce = Y, Bce = bs, Gce = {
  message: ({ params: { i: e, j: t } }) => (0, He.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
  params: ({ params: { i: e, j: t } }) => (0, He._)`{i: ${e}, j: ${t}}`
}, Hce = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: Gce,
  code(e) {
    const { gen: t, data: n, $data: r, schema: o, parentSchema: s, schemaCode: i, it: a } = e;
    if (!r && !o)
      return;
    const c = t.let("valid"), p = s.items ? (0, Sc.getSchemaTypes)(s.items) : [];
    e.block$data(c, l, (0, He._)`${i} === false`), e.ok(c);
    function l() {
      const f = t.let("i", (0, He._)`${n}.length`), g = t.let("j");
      e.setParams({ i: f, j: g }), t.assign(c, !0), t.if((0, He._)`${f} > 1`, () => (u() ? d : m)(f, g));
    }
    function u() {
      return p.length > 0 && !p.some((f) => f === "object" || f === "array");
    }
    function d(f, g) {
      const y = t.name("item"), v = (0, Sc.checkDataTypes)(p, y, a.opts.strictNumbers, Sc.DataType.Wrong), b = t.const("indices", (0, He._)`{}`);
      t.for((0, He._)`;${f}--;`, () => {
        t.let(y, (0, He._)`${n}[${f}]`), t.if(v, (0, He._)`continue`), p.length > 1 && t.if((0, He._)`typeof ${y} == "string"`, (0, He._)`${y} += "_"`), t.if((0, He._)`typeof ${b}[${y}] == "number"`, () => {
          t.assign(g, (0, He._)`${b}[${y}]`), e.error(), t.assign(c, !1).break();
        }).code((0, He._)`${b}[${y}] = ${f}`);
      });
    }
    function m(f, g) {
      const y = (0, zce.useFunc)(t, Bce.default), v = t.name("outer");
      t.label(v).for((0, He._)`;${f}--;`, () => t.for((0, He._)`${g} = ${f}; ${g}--;`, () => t.if((0, He._)`${y}(${n}[${f}], ${n}[${g}])`, () => {
        e.error(), t.assign(c, !1).break(v);
      })));
    }
  }
};
Lp.default = Hce;
var qp = {};
Object.defineProperty(qp, "__esModule", { value: !0 });
const Ol = pe, Xce = Y, Kce = bs, Wce = {
  message: "must be equal to constant",
  params: ({ schemaCode: e }) => (0, Ol._)`{allowedValue: ${e}}`
}, Jce = {
  keyword: "const",
  $data: !0,
  error: Wce,
  code(e) {
    const { gen: t, data: n, $data: r, schemaCode: o, schema: s } = e;
    r || s && typeof s == "object" ? e.fail$data((0, Ol._)`!${(0, Xce.useFunc)(t, Kce.default)}(${n}, ${o})`) : e.fail((0, Ol._)`${s} !== ${n}`);
  }
};
qp.default = Jce;
var Fp = {};
Object.defineProperty(Fp, "__esModule", { value: !0 });
const Bo = pe, Yce = Y, Qce = bs, Zce = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: e }) => (0, Bo._)`{allowedValues: ${e}}`
}, ele = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: Zce,
  code(e) {
    const { gen: t, data: n, $data: r, schema: o, schemaCode: s, it: i } = e;
    if (!r && o.length === 0)
      throw new Error("enum must have non-empty array");
    const a = o.length >= i.opts.loopEnum;
    let c;
    const p = () => c ?? (c = (0, Yce.useFunc)(t, Qce.default));
    let l;
    if (a || r)
      l = t.let("valid"), e.block$data(l, u);
    else {
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      const m = t.const("vSchema", s);
      l = (0, Bo.or)(...o.map((f, g) => d(m, g)));
    }
    e.pass(l);
    function u() {
      t.assign(l, !1), t.forOf("v", s, (m) => t.if((0, Bo._)`${p()}(${n}, ${m})`, () => t.assign(l, !0).break()));
    }
    function d(m, f) {
      const g = o[f];
      return typeof g == "object" && g !== null ? (0, Bo._)`${p()}(${n}, ${m}[${f}])` : (0, Bo._)`${n} === ${g}`;
    }
  }
};
Fp.default = ele;
Object.defineProperty(Pp, "__esModule", { value: !0 });
const tle = Np, nle = Rp, rle = Ap, ole = Ip, sle = kp, ile = Cp, ale = jp, cle = Lp, lle = qp, ule = Fp, ple = [
  // number
  tle.default,
  nle.default,
  // string
  rle.default,
  ole.default,
  // object
  sle.default,
  ile.default,
  // array
  ale.default,
  cle.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  lle.default,
  ule.default
];
Pp.default = ple;
var Mp = {}, To = {};
Object.defineProperty(To, "__esModule", { value: !0 });
To.validateAdditionalItems = void 0;
const gr = pe, Pl = Y, dle = {
  message: ({ params: { len: e } }) => (0, gr.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, gr._)`{limit: ${e}}`
}, fle = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: dle,
  code(e) {
    const { parentSchema: t, it: n } = e, { items: r } = t;
    if (!Array.isArray(r)) {
      (0, Pl.checkStrictMode)(n, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    Iv(e, r);
  }
};
function Iv(e, t) {
  const { gen: n, schema: r, data: o, keyword: s, it: i } = e;
  i.items = !0;
  const a = n.const("len", (0, gr._)`${o}.length`);
  if (r === !1)
    e.setParams({ len: t.length }), e.pass((0, gr._)`${a} <= ${t.length}`);
  else if (typeof r == "object" && !(0, Pl.alwaysValidSchema)(i, r)) {
    const p = n.var("valid", (0, gr._)`${a} <= ${t.length}`);
    n.if((0, gr.not)(p), () => c(p)), e.ok(p);
  }
  function c(p) {
    n.forRange("i", t.length, a, (l) => {
      e.subschema({ keyword: s, dataProp: l, dataPropType: Pl.Type.Num }, p), i.allErrors || n.if((0, gr.not)(p), () => n.break());
    });
  }
}
To.validateAdditionalItems = Iv;
To.default = fle;
var Up = {}, Oo = {};
Object.defineProperty(Oo, "__esModule", { value: !0 });
Oo.validateTuple = void 0;
const bm = pe, fi = Y, mle = me, hle = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    const { schema: t, it: n } = e;
    if (Array.isArray(t))
      return kv(e, "additionalItems", t);
    n.items = !0, !(0, fi.alwaysValidSchema)(n, t) && e.ok((0, mle.validateArray)(e));
  }
};
function kv(e, t, n = e.schema) {
  const { gen: r, parentSchema: o, data: s, keyword: i, it: a } = e;
  l(o), a.opts.unevaluated && n.length && a.items !== !0 && (a.items = fi.mergeEvaluated.items(r, n.length, a.items));
  const c = r.name("valid"), p = r.const("len", (0, bm._)`${s}.length`);
  n.forEach((u, d) => {
    (0, fi.alwaysValidSchema)(a, u) || (r.if((0, bm._)`${p} > ${d}`, () => e.subschema({
      keyword: i,
      schemaProp: d,
      dataProp: d
    }, c)), e.ok(c));
  });
  function l(u) {
    const { opts: d, errSchemaPath: m } = a, f = n.length, g = f === u.minItems && (f === u.maxItems || u[t] === !1);
    if (d.strictTuples && !g) {
      const y = `"${i}" is ${f}-tuple, but minItems or maxItems/${t} are not specified or different at path "${m}"`;
      (0, fi.checkStrictMode)(a, y, d.strictTuples);
    }
  }
}
Oo.validateTuple = kv;
Oo.default = hle;
Object.defineProperty(Up, "__esModule", { value: !0 });
const yle = Oo, gle = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => (0, yle.validateTuple)(e, "items")
};
Up.default = gle;
var Vp = {};
Object.defineProperty(Vp, "__esModule", { value: !0 });
const wm = pe, vle = Y, ble = me, wle = To, xle = {
  message: ({ params: { len: e } }) => (0, wm.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, wm._)`{limit: ${e}}`
}, _le = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: xle,
  code(e) {
    const { schema: t, parentSchema: n, it: r } = e, { prefixItems: o } = n;
    r.items = !0, !(0, vle.alwaysValidSchema)(r, t) && (o ? (0, wle.validateAdditionalItems)(e, o) : e.ok((0, ble.validateArray)(e)));
  }
};
Vp.default = _le;
var zp = {};
Object.defineProperty(zp, "__esModule", { value: !0 });
const Dt = pe, Ms = Y, $le = {
  message: ({ params: { min: e, max: t } }) => t === void 0 ? (0, Dt.str)`must contain at least ${e} valid item(s)` : (0, Dt.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
  params: ({ params: { min: e, max: t } }) => t === void 0 ? (0, Dt._)`{minContains: ${e}}` : (0, Dt._)`{minContains: ${e}, maxContains: ${t}}`
}, Ele = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: $le,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: o, it: s } = e;
    let i, a;
    const { minContains: c, maxContains: p } = r;
    s.opts.next ? (i = c === void 0 ? 1 : c, a = p) : i = 1;
    const l = t.const("len", (0, Dt._)`${o}.length`);
    if (e.setParams({ min: i, max: a }), a === void 0 && i === 0) {
      (0, Ms.checkStrictMode)(s, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (a !== void 0 && i > a) {
      (0, Ms.checkStrictMode)(s, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, Ms.alwaysValidSchema)(s, n)) {
      let g = (0, Dt._)`${l} >= ${i}`;
      a !== void 0 && (g = (0, Dt._)`${g} && ${l} <= ${a}`), e.pass(g);
      return;
    }
    s.items = !0;
    const u = t.name("valid");
    a === void 0 && i === 1 ? m(u, () => t.if(u, () => t.break())) : i === 0 ? (t.let(u, !0), a !== void 0 && t.if((0, Dt._)`${o}.length > 0`, d)) : (t.let(u, !1), d()), e.result(u, () => e.reset());
    function d() {
      const g = t.name("_valid"), y = t.let("count", 0);
      m(g, () => t.if(g, () => f(y)));
    }
    function m(g, y) {
      t.forRange("i", 0, l, (v) => {
        e.subschema({
          keyword: "contains",
          dataProp: v,
          dataPropType: Ms.Type.Num,
          compositeRule: !0
        }, g), y();
      });
    }
    function f(g) {
      t.code((0, Dt._)`${g}++`), a === void 0 ? t.if((0, Dt._)`${g} >= ${i}`, () => t.assign(u, !0).break()) : (t.if((0, Dt._)`${g} > ${a}`, () => t.assign(u, !1).break()), i === 1 ? t.assign(u, !0) : t.if((0, Dt._)`${g} >= ${i}`, () => t.assign(u, !0)));
    }
  }
};
zp.default = Ele;
var Cv = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
  const t = pe, n = Y, r = me;
  e.error = {
    message: ({ params: { property: c, depsCount: p, deps: l } }) => {
      const u = p === 1 ? "property" : "properties";
      return (0, t.str)`must have ${u} ${l} when property ${c} is present`;
    },
    params: ({ params: { property: c, depsCount: p, deps: l, missingProperty: u } }) => (0, t._)`{property: ${c},
    missingProperty: ${u},
    depsCount: ${p},
    deps: ${l}}`
    // TODO change to reference
  };
  const o = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: e.error,
    code(c) {
      const [p, l] = s(c);
      i(c, p), a(c, l);
    }
  };
  function s({ schema: c }) {
    const p = {}, l = {};
    for (const u in c) {
      if (u === "__proto__")
        continue;
      const d = Array.isArray(c[u]) ? p : l;
      d[u] = c[u];
    }
    return [p, l];
  }
  function i(c, p = c.schema) {
    const { gen: l, data: u, it: d } = c;
    if (Object.keys(p).length === 0)
      return;
    const m = l.let("missing");
    for (const f in p) {
      const g = p[f];
      if (g.length === 0)
        continue;
      const y = (0, r.propertyInData)(l, u, f, d.opts.ownProperties);
      c.setParams({
        property: f,
        depsCount: g.length,
        deps: g.join(", ")
      }), d.allErrors ? l.if(y, () => {
        for (const v of g)
          (0, r.checkReportMissingProp)(c, v);
      }) : (l.if((0, t._)`${y} && (${(0, r.checkMissingProp)(c, g, m)})`), (0, r.reportMissingProp)(c, m), l.else());
    }
  }
  e.validatePropertyDeps = i;
  function a(c, p = c.schema) {
    const { gen: l, data: u, keyword: d, it: m } = c, f = l.name("valid");
    for (const g in p)
      (0, n.alwaysValidSchema)(m, p[g]) || (l.if(
        (0, r.propertyInData)(l, u, g, m.opts.ownProperties),
        () => {
          const y = c.subschema({ keyword: d, schemaProp: g }, f);
          c.mergeValidEvaluated(y, f);
        },
        () => l.var(f, !0)
        // TODO var
      ), c.ok(f));
  }
  e.validateSchemaDeps = a, e.default = o;
})(Cv);
var Bp = {};
Object.defineProperty(Bp, "__esModule", { value: !0 });
const jv = pe, Sle = Y, Tle = {
  message: "property name must be valid",
  params: ({ params: e }) => (0, jv._)`{propertyName: ${e.propertyName}}`
}, Ole = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: Tle,
  code(e) {
    const { gen: t, schema: n, data: r, it: o } = e;
    if ((0, Sle.alwaysValidSchema)(o, n))
      return;
    const s = t.name("valid");
    t.forIn("key", r, (i) => {
      e.setParams({ propertyName: i }), e.subschema({
        keyword: "propertyNames",
        data: i,
        dataTypes: ["string"],
        propertyName: i,
        compositeRule: !0
      }, s), t.if((0, jv.not)(s), () => {
        e.error(!0), o.allErrors || t.break();
      });
    }), e.ok(s);
  }
};
Bp.default = Ole;
var pa = {};
Object.defineProperty(pa, "__esModule", { value: !0 });
const Us = me, Ft = pe, Ple = pn, Vs = Y, Nle = {
  message: "must NOT have additional properties",
  params: ({ params: e }) => (0, Ft._)`{additionalProperty: ${e.additionalProperty}}`
}, Rle = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: Nle,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: o, errsCount: s, it: i } = e;
    if (!s)
      throw new Error("ajv implementation error");
    const { allErrors: a, opts: c } = i;
    if (i.props = !0, c.removeAdditional !== "all" && (0, Vs.alwaysValidSchema)(i, n))
      return;
    const p = (0, Us.allSchemaProperties)(r.properties), l = (0, Us.allSchemaProperties)(r.patternProperties);
    u(), e.ok((0, Ft._)`${s} === ${Ple.default.errors}`);
    function u() {
      t.forIn("key", o, (y) => {
        !p.length && !l.length ? f(y) : t.if(d(y), () => f(y));
      });
    }
    function d(y) {
      let v;
      if (p.length > 8) {
        const b = (0, Vs.schemaRefOrVal)(i, r.properties, "properties");
        v = (0, Us.isOwnProperty)(t, b, y);
      } else p.length ? v = (0, Ft.or)(...p.map((b) => (0, Ft._)`${y} === ${b}`)) : v = Ft.nil;
      return l.length && (v = (0, Ft.or)(v, ...l.map((b) => (0, Ft._)`${(0, Us.usePattern)(e, b)}.test(${y})`))), (0, Ft.not)(v);
    }
    function m(y) {
      t.code((0, Ft._)`delete ${o}[${y}]`);
    }
    function f(y) {
      if (c.removeAdditional === "all" || c.removeAdditional && n === !1) {
        m(y);
        return;
      }
      if (n === !1) {
        e.setParams({ additionalProperty: y }), e.error(), a || t.break();
        return;
      }
      if (typeof n == "object" && !(0, Vs.alwaysValidSchema)(i, n)) {
        const v = t.name("valid");
        c.removeAdditional === "failing" ? (g(y, v, !1), t.if((0, Ft.not)(v), () => {
          e.reset(), m(y);
        })) : (g(y, v), a || t.if((0, Ft.not)(v), () => t.break()));
      }
    }
    function g(y, v, b) {
      const w = {
        keyword: "additionalProperties",
        dataProp: y,
        dataPropType: Vs.Type.Str
      };
      b === !1 && Object.assign(w, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), e.subschema(w, v);
    }
  }
};
pa.default = Rle;
var Gp = {};
Object.defineProperty(Gp, "__esModule", { value: !0 });
const Ale = Gt, xm = me, Tc = Y, _m = pa, Dle = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: o, it: s } = e;
    s.opts.removeAdditional === "all" && r.additionalProperties === void 0 && _m.default.code(new Ale.KeywordCxt(s, _m.default, "additionalProperties"));
    const i = (0, xm.allSchemaProperties)(n);
    for (const u of i)
      s.definedProperties.add(u);
    s.opts.unevaluated && i.length && s.props !== !0 && (s.props = Tc.mergeEvaluated.props(t, (0, Tc.toHash)(i), s.props));
    const a = i.filter((u) => !(0, Tc.alwaysValidSchema)(s, n[u]));
    if (a.length === 0)
      return;
    const c = t.name("valid");
    for (const u of a)
      p(u) ? l(u) : (t.if((0, xm.propertyInData)(t, o, u, s.opts.ownProperties)), l(u), s.allErrors || t.else().var(c, !0), t.endIf()), e.it.definedProperties.add(u), e.ok(c);
    function p(u) {
      return s.opts.useDefaults && !s.compositeRule && n[u].default !== void 0;
    }
    function l(u) {
      e.subschema({
        keyword: "properties",
        schemaProp: u,
        dataProp: u
      }, c);
    }
  }
};
Gp.default = Dle;
var Hp = {};
Object.defineProperty(Hp, "__esModule", { value: !0 });
const $m = me, zs = pe, Em = Y, Sm = Y, Ile = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, data: r, parentSchema: o, it: s } = e, { opts: i } = s, a = (0, $m.allSchemaProperties)(n), c = a.filter((g) => (0, Em.alwaysValidSchema)(s, n[g]));
    if (a.length === 0 || c.length === a.length && (!s.opts.unevaluated || s.props === !0))
      return;
    const p = i.strictSchema && !i.allowMatchingProperties && o.properties, l = t.name("valid");
    s.props !== !0 && !(s.props instanceof zs.Name) && (s.props = (0, Sm.evaluatedPropsToName)(t, s.props));
    const { props: u } = s;
    d();
    function d() {
      for (const g of a)
        p && m(g), s.allErrors ? f(g) : (t.var(l, !0), f(g), t.if(l));
    }
    function m(g) {
      for (const y in p)
        new RegExp(g).test(y) && (0, Em.checkStrictMode)(s, `property ${y} matches pattern ${g} (use allowMatchingProperties)`);
    }
    function f(g) {
      t.forIn("key", r, (y) => {
        t.if((0, zs._)`${(0, $m.usePattern)(e, g)}.test(${y})`, () => {
          const v = c.includes(g);
          v || e.subschema({
            keyword: "patternProperties",
            schemaProp: g,
            dataProp: y,
            dataPropType: Sm.Type.Str
          }, l), s.opts.unevaluated && u !== !0 ? t.assign((0, zs._)`${u}[${y}]`, !0) : !v && !s.allErrors && t.if((0, zs.not)(l), () => t.break());
        });
      });
    }
  }
};
Hp.default = Ile;
var Xp = {};
Object.defineProperty(Xp, "__esModule", { value: !0 });
const kle = Y, Cle = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if ((0, kle.alwaysValidSchema)(r, n)) {
      e.fail();
      return;
    }
    const o = t.name("valid");
    e.subschema({
      keyword: "not",
      compositeRule: !0,
      createErrors: !1,
      allErrors: !1
    }, o), e.failResult(o, () => e.reset(), () => e.error());
  },
  error: { message: "must NOT be valid" }
};
Xp.default = Cle;
var Kp = {};
Object.defineProperty(Kp, "__esModule", { value: !0 });
const jle = me, Lle = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: jle.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
Kp.default = Lle;
var Wp = {};
Object.defineProperty(Wp, "__esModule", { value: !0 });
const mi = pe, qle = Y, Fle = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: e }) => (0, mi._)`{passingSchemas: ${e.passing}}`
}, Mle = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: Fle,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, it: o } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    if (o.opts.discriminator && r.discriminator)
      return;
    const s = n, i = t.let("valid", !1), a = t.let("passing", null), c = t.name("_valid");
    e.setParams({ passing: a }), t.block(p), e.result(i, () => e.reset(), () => e.error(!0));
    function p() {
      s.forEach((l, u) => {
        let d;
        (0, qle.alwaysValidSchema)(o, l) ? t.var(c, !0) : d = e.subschema({
          keyword: "oneOf",
          schemaProp: u,
          compositeRule: !0
        }, c), u > 0 && t.if((0, mi._)`${c} && ${i}`).assign(i, !1).assign(a, (0, mi._)`[${a}, ${u}]`).else(), t.if(c, () => {
          t.assign(i, !0), t.assign(a, u), d && e.mergeEvaluated(d, mi.Name);
        });
      });
    }
  }
};
Wp.default = Mle;
var Jp = {};
Object.defineProperty(Jp, "__esModule", { value: !0 });
const Ule = Y, Vle = {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    const o = t.name("valid");
    n.forEach((s, i) => {
      if ((0, Ule.alwaysValidSchema)(r, s))
        return;
      const a = e.subschema({ keyword: "allOf", schemaProp: i }, o);
      e.ok(o), e.mergeEvaluated(a);
    });
  }
};
Jp.default = Vle;
var Yp = {};
Object.defineProperty(Yp, "__esModule", { value: !0 });
const qi = pe, Lv = Y, zle = {
  message: ({ params: e }) => (0, qi.str)`must match "${e.ifClause}" schema`,
  params: ({ params: e }) => (0, qi._)`{failingKeyword: ${e.ifClause}}`
}, Ble = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: zle,
  code(e) {
    const { gen: t, parentSchema: n, it: r } = e;
    n.then === void 0 && n.else === void 0 && (0, Lv.checkStrictMode)(r, '"if" without "then" and "else" is ignored');
    const o = Tm(r, "then"), s = Tm(r, "else");
    if (!o && !s)
      return;
    const i = t.let("valid", !0), a = t.name("_valid");
    if (c(), e.reset(), o && s) {
      const l = t.let("ifClause");
      e.setParams({ ifClause: l }), t.if(a, p("then", l), p("else", l));
    } else o ? t.if(a, p("then")) : t.if((0, qi.not)(a), p("else"));
    e.pass(i, () => e.error(!0));
    function c() {
      const l = e.subschema({
        keyword: "if",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, a);
      e.mergeEvaluated(l);
    }
    function p(l, u) {
      return () => {
        const d = e.subschema({ keyword: l }, a);
        t.assign(i, a), e.mergeValidEvaluated(d, i), u ? t.assign(u, (0, qi._)`${l}`) : e.setParams({ ifClause: l });
      };
    }
  }
};
function Tm(e, t) {
  const n = e.schema[t];
  return n !== void 0 && !(0, Lv.alwaysValidSchema)(e, n);
}
Yp.default = Ble;
var Qp = {};
Object.defineProperty(Qp, "__esModule", { value: !0 });
const Gle = Y, Hle = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: e, parentSchema: t, it: n }) {
    t.if === void 0 && (0, Gle.checkStrictMode)(n, `"${e}" without "if" is ignored`);
  }
};
Qp.default = Hle;
Object.defineProperty(Mp, "__esModule", { value: !0 });
const Xle = To, Kle = Up, Wle = Oo, Jle = Vp, Yle = zp, Qle = Cv, Zle = Bp, eue = pa, tue = Gp, nue = Hp, rue = Xp, oue = Kp, sue = Wp, iue = Jp, aue = Yp, cue = Qp;
function lue(e = !1) {
  const t = [
    // any
    rue.default,
    oue.default,
    sue.default,
    iue.default,
    aue.default,
    cue.default,
    // object
    Zle.default,
    eue.default,
    Qle.default,
    tue.default,
    nue.default
  ];
  return e ? t.push(Kle.default, Jle.default) : t.push(Xle.default, Wle.default), t.push(Yle.default), t;
}
Mp.default = lue;
var Zp = {}, ed = {};
Object.defineProperty(ed, "__esModule", { value: !0 });
const De = pe, uue = {
  message: ({ schemaCode: e }) => (0, De.str)`must match format "${e}"`,
  params: ({ schemaCode: e }) => (0, De._)`{format: ${e}}`
}, pue = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: uue,
  code(e, t) {
    const { gen: n, data: r, $data: o, schema: s, schemaCode: i, it: a } = e, { opts: c, errSchemaPath: p, schemaEnv: l, self: u } = a;
    if (!c.validateFormats)
      return;
    o ? d() : m();
    function d() {
      const f = n.scopeValue("formats", {
        ref: u.formats,
        code: c.code.formats
      }), g = n.const("fDef", (0, De._)`${f}[${i}]`), y = n.let("fType"), v = n.let("format");
      n.if((0, De._)`typeof ${g} == "object" && !(${g} instanceof RegExp)`, () => n.assign(y, (0, De._)`${g}.type || "string"`).assign(v, (0, De._)`${g}.validate`), () => n.assign(y, (0, De._)`"string"`).assign(v, g)), e.fail$data((0, De.or)(b(), w()));
      function b() {
        return c.strictSchema === !1 ? De.nil : (0, De._)`${i} && !${v}`;
      }
      function w() {
        const T = l.$async ? (0, De._)`(${g}.async ? await ${v}(${r}) : ${v}(${r}))` : (0, De._)`${v}(${r})`, P = (0, De._)`(typeof ${v} == "function" ? ${T} : ${v}.test(${r}))`;
        return (0, De._)`${v} && ${v} !== true && ${y} === ${t} && !${P}`;
      }
    }
    function m() {
      const f = u.formats[s];
      if (!f) {
        b();
        return;
      }
      if (f === !0)
        return;
      const [g, y, v] = w(f);
      g === t && e.pass(T());
      function b() {
        if (c.strictSchema === !1) {
          u.logger.warn(P());
          return;
        }
        throw new Error(P());
        function P() {
          return `unknown format "${s}" ignored in schema at path "${p}"`;
        }
      }
      function w(P) {
        const C = P instanceof RegExp ? (0, De.regexpCode)(P) : c.code.formats ? (0, De._)`${c.code.formats}${(0, De.getProperty)(s)}` : void 0, B = n.scopeValue("formats", { key: s, ref: P, code: C });
        return typeof P == "object" && !(P instanceof RegExp) ? [P.type || "string", P.validate, (0, De._)`${B}.validate`] : ["string", P, B];
      }
      function T() {
        if (typeof f == "object" && !(f instanceof RegExp) && f.async) {
          if (!l.$async)
            throw new Error("async format in sync schema");
          return (0, De._)`await ${v}(${r})`;
        }
        return typeof y == "function" ? (0, De._)`${v}(${r})` : (0, De._)`${v}.test(${r})`;
      }
    }
  }
};
ed.default = pue;
Object.defineProperty(Zp, "__esModule", { value: !0 });
const due = ed, fue = [due.default];
Zp.default = fue;
var mo = {};
Object.defineProperty(mo, "__esModule", { value: !0 });
mo.contentVocabulary = mo.metadataVocabulary = void 0;
mo.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
mo.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(Sp, "__esModule", { value: !0 });
const mue = Tp, hue = Pp, yue = Mp, gue = Zp, Om = mo, vue = [
  mue.default,
  hue.default,
  (0, yue.default)(),
  gue.default,
  Om.metadataVocabulary,
  Om.contentVocabulary
];
Sp.default = vue;
var td = {}, da = {};
Object.defineProperty(da, "__esModule", { value: !0 });
da.DiscrError = void 0;
var Pm;
(function(e) {
  e.Tag = "tag", e.Mapping = "mapping";
})(Pm || (da.DiscrError = Pm = {}));
Object.defineProperty(td, "__esModule", { value: !0 });
const Hr = pe, Nl = da, Nm = wt, bue = So, wue = Y, xue = {
  message: ({ params: { discrError: e, tagName: t } }) => e === Nl.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
  params: ({ params: { discrError: e, tag: t, tagName: n } }) => (0, Hr._)`{error: ${e}, tag: ${n}, tagValue: ${t}}`
}, _ue = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: xue,
  code(e) {
    const { gen: t, data: n, schema: r, parentSchema: o, it: s } = e, { oneOf: i } = o;
    if (!s.opts.discriminator)
      throw new Error("discriminator: requires discriminator option");
    const a = r.propertyName;
    if (typeof a != "string")
      throw new Error("discriminator: requires propertyName");
    if (r.mapping)
      throw new Error("discriminator: mapping is not supported");
    if (!i)
      throw new Error("discriminator: requires oneOf keyword");
    const c = t.let("valid", !1), p = t.const("tag", (0, Hr._)`${n}${(0, Hr.getProperty)(a)}`);
    t.if((0, Hr._)`typeof ${p} == "string"`, () => l(), () => e.error(!1, { discrError: Nl.DiscrError.Tag, tag: p, tagName: a })), e.ok(c);
    function l() {
      const m = d();
      t.if(!1);
      for (const f in m)
        t.elseIf((0, Hr._)`${p} === ${f}`), t.assign(c, u(m[f]));
      t.else(), e.error(!1, { discrError: Nl.DiscrError.Mapping, tag: p, tagName: a }), t.endIf();
    }
    function u(m) {
      const f = t.name("valid"), g = e.subschema({ keyword: "oneOf", schemaProp: m }, f);
      return e.mergeEvaluated(g, Hr.Name), f;
    }
    function d() {
      var m;
      const f = {}, g = v(o);
      let y = !0;
      for (let T = 0; T < i.length; T++) {
        let P = i[T];
        if (P != null && P.$ref && !(0, wue.schemaHasRulesButRef)(P, s.self.RULES)) {
          const B = P.$ref;
          if (P = Nm.resolveRef.call(s.self, s.schemaEnv.root, s.baseId, B), P instanceof Nm.SchemaEnv && (P = P.schema), P === void 0)
            throw new bue.default(s.opts.uriResolver, s.baseId, B);
        }
        const C = (m = P == null ? void 0 : P.properties) === null || m === void 0 ? void 0 : m[a];
        if (typeof C != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${a}"`);
        y = y && (g || v(P)), b(C, T);
      }
      if (!y)
        throw new Error(`discriminator: "${a}" must be required`);
      return f;
      function v({ required: T }) {
        return Array.isArray(T) && T.includes(a);
      }
      function b(T, P) {
        if (T.const)
          w(T.const, P);
        else if (T.enum)
          for (const C of T.enum)
            w(C, P);
        else
          throw new Error(`discriminator: "properties/${a}" must have "const" or "enum"`);
      }
      function w(T, P) {
        if (typeof T != "string" || T in f)
          throw new Error(`discriminator: "${a}" values must be unique strings`);
        f[T] = P;
      }
    }
  }
};
td.default = _ue;
const $ue = "http://json-schema.org/draft-07/schema#", Eue = "http://json-schema.org/draft-07/schema#", Sue = "Core schema meta-schema", Tue = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $ref: "#"
    }
  },
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    allOf: [
      {
        $ref: "#/definitions/nonNegativeInteger"
      },
      {
        default: 0
      }
    ]
  },
  simpleTypes: {
    enum: [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: !0,
    default: []
  }
}, Oue = [
  "object",
  "boolean"
], Pue = {
  $id: {
    type: "string",
    format: "uri-reference"
  },
  $schema: {
    type: "string",
    format: "uri"
  },
  $ref: {
    type: "string",
    format: "uri-reference"
  },
  $comment: {
    type: "string"
  },
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  default: !0,
  readOnly: {
    type: "boolean",
    default: !1
  },
  examples: {
    type: "array",
    items: !0
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  additionalItems: {
    $ref: "#"
  },
  items: {
    anyOf: [
      {
        $ref: "#"
      },
      {
        $ref: "#/definitions/schemaArray"
      }
    ],
    default: !0
  },
  maxItems: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    default: !1
  },
  contains: {
    $ref: "#"
  },
  maxProperties: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/definitions/stringArray"
  },
  additionalProperties: {
    $ref: "#"
  },
  definitions: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  properties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    propertyNames: {
      format: "regex"
    },
    default: {}
  },
  dependencies: {
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $ref: "#"
        },
        {
          $ref: "#/definitions/stringArray"
        }
      ]
    }
  },
  propertyNames: {
    $ref: "#"
  },
  const: !0,
  enum: {
    type: "array",
    items: !0,
    minItems: 1,
    uniqueItems: !0
  },
  type: {
    anyOf: [
      {
        $ref: "#/definitions/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/definitions/simpleTypes"
        },
        minItems: 1,
        uniqueItems: !0
      }
    ]
  },
  format: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentEncoding: {
    type: "string"
  },
  if: {
    $ref: "#"
  },
  then: {
    $ref: "#"
  },
  else: {
    $ref: "#"
  },
  allOf: {
    $ref: "#/definitions/schemaArray"
  },
  anyOf: {
    $ref: "#/definitions/schemaArray"
  },
  oneOf: {
    $ref: "#/definitions/schemaArray"
  },
  not: {
    $ref: "#"
  }
}, Nue = {
  $schema: $ue,
  $id: Eue,
  title: Sue,
  definitions: Tue,
  type: Oue,
  properties: Pue,
  default: !0
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
  const n = Yg, r = Sp, o = td, s = Nue, i = ["/properties"], a = "http://json-schema.org/draft-07/schema";
  class c extends n.default {
    _addVocabularies() {
      super._addVocabularies(), r.default.forEach((f) => this.addVocabulary(f)), this.opts.discriminator && this.addKeyword(o.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta)
        return;
      const f = this.opts.$data ? this.$dataMetaSchema(s, i) : s;
      this.addMetaSchema(f, a, !1), this.refs["http://json-schema.org/schema"] = a;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(a) ? a : void 0);
    }
  }
  t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
  var p = Gt;
  Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
    return p.KeywordCxt;
  } });
  var l = pe;
  Object.defineProperty(t, "_", { enumerable: !0, get: function() {
    return l._;
  } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
    return l.str;
  } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
    return l.stringify;
  } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
    return l.nil;
  } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
    return l.Name;
  } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
    return l.CodeGen;
  } });
  var u = vs;
  Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
    return u.default;
  } });
  var d = So;
  Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
    return d.default;
  } });
})(_l, _l.exports);
var Rue = _l.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
  const t = Rue, n = pe, r = n.operators, o = {
    formatMaximum: { okStr: "<=", ok: r.LTE, fail: r.GT },
    formatMinimum: { okStr: ">=", ok: r.GTE, fail: r.LT },
    formatExclusiveMaximum: { okStr: "<", ok: r.LT, fail: r.GTE },
    formatExclusiveMinimum: { okStr: ">", ok: r.GT, fail: r.LTE }
  }, s = {
    message: ({ keyword: a, schemaCode: c }) => (0, n.str)`should be ${o[a].okStr} ${c}`,
    params: ({ keyword: a, schemaCode: c }) => (0, n._)`{comparison: ${o[a].okStr}, limit: ${c}}`
  };
  e.formatLimitDefinition = {
    keyword: Object.keys(o),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: s,
    code(a) {
      const { gen: c, data: p, schemaCode: l, keyword: u, it: d } = a, { opts: m, self: f } = d;
      if (!m.validateFormats)
        return;
      const g = new t.KeywordCxt(d, f.RULES.all.format.definition, "format");
      g.$data ? y() : v();
      function y() {
        const w = c.scopeValue("formats", {
          ref: f.formats,
          code: m.code.formats
        }), T = c.const("fmt", (0, n._)`${w}[${g.schemaCode}]`);
        a.fail$data((0, n.or)((0, n._)`typeof ${T} != "object"`, (0, n._)`${T} instanceof RegExp`, (0, n._)`typeof ${T}.compare != "function"`, b(T)));
      }
      function v() {
        const w = g.schema, T = f.formats[w];
        if (!T || T === !0)
          return;
        if (typeof T != "object" || T instanceof RegExp || typeof T.compare != "function")
          throw new Error(`"${u}": format "${w}" does not define "compare" function`);
        const P = c.scopeValue("formats", {
          key: w,
          ref: T,
          code: m.code.formats ? (0, n._)`${m.code.formats}${(0, n.getProperty)(w)}` : void 0
        });
        a.fail$data(b(P));
      }
      function b(w) {
        return (0, n._)`${w}.compare(${p}, ${l}) ${o[u].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  const i = (a) => (a.addKeyword(e.formatLimitDefinition), a);
  e.default = i;
})(Jg);
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const n = Wg, r = Jg, o = pe, s = new o.Name("fullFormats"), i = new o.Name("fastFormats"), a = (p, l = { keywords: !0 }) => {
    if (Array.isArray(l))
      return c(p, l, n.fullFormats, s), p;
    const [u, d] = l.mode === "fast" ? [n.fastFormats, i] : [n.fullFormats, s], m = l.formats || n.formatNames;
    return c(p, m, u, d), l.keywords && (0, r.default)(p), p;
  };
  a.get = (p, l = "full") => {
    const d = (l === "fast" ? n.fastFormats : n.fullFormats)[p];
    if (!d)
      throw new Error(`Unknown format "${p}"`);
    return d;
  };
  function c(p, l, u, d) {
    var m, f;
    (m = (f = p.opts.code).formats) !== null && m !== void 0 || (f.formats = (0, o._)`require("ajv-formats/dist/formats").${d}`);
    for (const g of l)
      p.addFormat(g, u[g]);
  }
  e.exports = t = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
})(xl, xl.exports);
var Aue = xl.exports;
const Due = /* @__PURE__ */ tr(Aue), Iue = (e, t, n, r) => {
  if (n === "length" || n === "prototype" || n === "arguments" || n === "caller")
    return;
  const o = Object.getOwnPropertyDescriptor(e, n), s = Object.getOwnPropertyDescriptor(t, n);
  !kue(o, s) && r || Object.defineProperty(e, n, s);
}, kue = function(e, t) {
  return e === void 0 || e.configurable || e.writable === t.writable && e.enumerable === t.enumerable && e.configurable === t.configurable && (e.writable || e.value === t.value);
}, Cue = (e, t) => {
  const n = Object.getPrototypeOf(t);
  n !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, n);
}, jue = (e, t) => `/* Wrapped ${e}*/
${t}`, Lue = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), que = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"), Fue = (e, t, n) => {
  const r = n === "" ? "" : `with ${n.trim()}() `, o = jue.bind(null, r, t.toString());
  Object.defineProperty(o, "name", que);
  const { writable: s, enumerable: i, configurable: a } = Lue;
  Object.defineProperty(e, "toString", { value: o, writable: s, enumerable: i, configurable: a });
};
function Mue(e, t, { ignoreNonConfigurable: n = !1 } = {}) {
  const { name: r } = e;
  for (const o of Reflect.ownKeys(t))
    Iue(e, t, o, n);
  return Cue(e, t), Fue(e, t, r), e;
}
const Rm = (e, t = {}) => {
  if (typeof e != "function")
    throw new TypeError(`Expected the first argument to be a function, got \`${typeof e}\``);
  const {
    wait: n = 0,
    maxWait: r = Number.POSITIVE_INFINITY,
    before: o = !1,
    after: s = !0
  } = t;
  if (n < 0 || r < 0)
    throw new RangeError("`wait` and `maxWait` must not be negative.");
  if (!o && !s)
    throw new Error("Both `before` and `after` are false, function wouldn't be called.");
  let i, a, c;
  const p = function(...l) {
    const u = this, d = () => {
      i = void 0, a && (clearTimeout(a), a = void 0), s && (c = e.apply(u, l));
    }, m = () => {
      a = void 0, i && (clearTimeout(i), i = void 0), s && (c = e.apply(u, l));
    }, f = o && !i;
    return clearTimeout(i), i = setTimeout(d, n), r > 0 && r !== Number.POSITIVE_INFINITY && !a && (a = setTimeout(m, r)), f && (c = e.apply(u, l)), c;
  };
  return Mue(p, e), p.cancel = () => {
    i && (clearTimeout(i), i = void 0), a && (clearTimeout(a), a = void 0);
  }, p;
};
var Rl = { exports: {} };
const Uue = "2.0.0", qv = 256, Vue = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, zue = 16, Bue = qv - 6, Gue = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var fa = {
  MAX_LENGTH: qv,
  MAX_SAFE_COMPONENT_LENGTH: zue,
  MAX_SAFE_BUILD_LENGTH: Bue,
  MAX_SAFE_INTEGER: Vue,
  RELEASE_TYPES: Gue,
  SEMVER_SPEC_VERSION: Uue,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const Hue = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var ma = Hue;
(function(e, t) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: r,
    MAX_LENGTH: o
  } = fa, s = ma;
  t = e.exports = {};
  const i = t.re = [], a = t.safeRe = [], c = t.src = [], p = t.safeSrc = [], l = t.t = {};
  let u = 0;
  const d = "[a-zA-Z0-9-]", m = [
    ["\\s", 1],
    ["\\d", o],
    [d, r]
  ], f = (y) => {
    for (const [v, b] of m)
      y = y.split(`${v}*`).join(`${v}{0,${b}}`).split(`${v}+`).join(`${v}{1,${b}}`);
    return y;
  }, g = (y, v, b) => {
    const w = f(v), T = u++;
    s(y, T, v), l[y] = T, c[T] = v, p[T] = w, i[T] = new RegExp(v, b ? "g" : void 0), a[T] = new RegExp(w, b ? "g" : void 0);
  };
  g("NUMERICIDENTIFIER", "0|[1-9]\\d*"), g("NUMERICIDENTIFIERLOOSE", "\\d+"), g("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${d}*`), g("MAINVERSION", `(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})`), g("MAINVERSIONLOOSE", `(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})`), g("PRERELEASEIDENTIFIER", `(?:${c[l.NONNUMERICIDENTIFIER]}|${c[l.NUMERICIDENTIFIER]})`), g("PRERELEASEIDENTIFIERLOOSE", `(?:${c[l.NONNUMERICIDENTIFIER]}|${c[l.NUMERICIDENTIFIERLOOSE]})`), g("PRERELEASE", `(?:-(${c[l.PRERELEASEIDENTIFIER]}(?:\\.${c[l.PRERELEASEIDENTIFIER]})*))`), g("PRERELEASELOOSE", `(?:-?(${c[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[l.PRERELEASEIDENTIFIERLOOSE]})*))`), g("BUILDIDENTIFIER", `${d}+`), g("BUILD", `(?:\\+(${c[l.BUILDIDENTIFIER]}(?:\\.${c[l.BUILDIDENTIFIER]})*))`), g("FULLPLAIN", `v?${c[l.MAINVERSION]}${c[l.PRERELEASE]}?${c[l.BUILD]}?`), g("FULL", `^${c[l.FULLPLAIN]}$`), g("LOOSEPLAIN", `[v=\\s]*${c[l.MAINVERSIONLOOSE]}${c[l.PRERELEASELOOSE]}?${c[l.BUILD]}?`), g("LOOSE", `^${c[l.LOOSEPLAIN]}$`), g("GTLT", "((?:<|>)?=?)"), g("XRANGEIDENTIFIERLOOSE", `${c[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), g("XRANGEIDENTIFIER", `${c[l.NUMERICIDENTIFIER]}|x|X|\\*`), g("XRANGEPLAIN", `[v=\\s]*(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:${c[l.PRERELEASE]})?${c[l.BUILD]}?)?)?`), g("XRANGEPLAINLOOSE", `[v=\\s]*(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:${c[l.PRERELEASELOOSE]})?${c[l.BUILD]}?)?)?`), g("XRANGE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAIN]}$`), g("XRANGELOOSE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAINLOOSE]}$`), g("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), g("COERCE", `${c[l.COERCEPLAIN]}(?:$|[^\\d])`), g("COERCEFULL", c[l.COERCEPLAIN] + `(?:${c[l.PRERELEASE]})?(?:${c[l.BUILD]})?(?:$|[^\\d])`), g("COERCERTL", c[l.COERCE], !0), g("COERCERTLFULL", c[l.COERCEFULL], !0), g("LONETILDE", "(?:~>?)"), g("TILDETRIM", `(\\s*)${c[l.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", g("TILDE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAIN]}$`), g("TILDELOOSE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAINLOOSE]}$`), g("LONECARET", "(?:\\^)"), g("CARETTRIM", `(\\s*)${c[l.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", g("CARET", `^${c[l.LONECARET]}${c[l.XRANGEPLAIN]}$`), g("CARETLOOSE", `^${c[l.LONECARET]}${c[l.XRANGEPLAINLOOSE]}$`), g("COMPARATORLOOSE", `^${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]})$|^$`), g("COMPARATOR", `^${c[l.GTLT]}\\s*(${c[l.FULLPLAIN]})$|^$`), g("COMPARATORTRIM", `(\\s*)${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]}|${c[l.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", g("HYPHENRANGE", `^\\s*(${c[l.XRANGEPLAIN]})\\s+-\\s+(${c[l.XRANGEPLAIN]})\\s*$`), g("HYPHENRANGELOOSE", `^\\s*(${c[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[l.XRANGEPLAINLOOSE]})\\s*$`), g("STAR", "(<|>)?=?\\s*\\*"), g("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), g("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Rl, Rl.exports);
var ws = Rl.exports;
const Xue = Object.freeze({ loose: !0 }), Kue = Object.freeze({}), Wue = (e) => e ? typeof e != "object" ? Xue : e : Kue;
var nd = Wue;
const Am = /^[0-9]+$/, Fv = (e, t) => {
  if (typeof e == "number" && typeof t == "number")
    return e === t ? 0 : e < t ? -1 : 1;
  const n = Am.test(e), r = Am.test(t);
  return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
}, Jue = (e, t) => Fv(t, e);
var Mv = {
  compareIdentifiers: Fv,
  rcompareIdentifiers: Jue
};
const Bs = ma, { MAX_LENGTH: Dm, MAX_SAFE_INTEGER: Gs } = fa, { safeRe: Hs, t: Xs } = ws, Yue = nd, { compareIdentifiers: Oc } = Mv;
let Que = class en {
  constructor(t, n) {
    if (n = Yue(n), t instanceof en) {
      if (t.loose === !!n.loose && t.includePrerelease === !!n.includePrerelease)
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    if (t.length > Dm)
      throw new TypeError(
        `version is longer than ${Dm} characters`
      );
    Bs("SemVer", t, n), this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease;
    const r = t.trim().match(n.loose ? Hs[Xs.LOOSE] : Hs[Xs.FULL]);
    if (!r)
      throw new TypeError(`Invalid Version: ${t}`);
    if (this.raw = t, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > Gs || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Gs || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Gs || this.patch < 0)
      throw new TypeError("Invalid patch version");
    r[4] ? this.prerelease = r[4].split(".").map((o) => {
      if (/^[0-9]+$/.test(o)) {
        const s = +o;
        if (s >= 0 && s < Gs)
          return s;
      }
      return o;
    }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (Bs("SemVer.compare", this.version, this.options, t), !(t instanceof en)) {
      if (typeof t == "string" && t === this.version)
        return 0;
      t = new en(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return t instanceof en || (t = new en(t, this.options)), this.major < t.major ? -1 : this.major > t.major ? 1 : this.minor < t.minor ? -1 : this.minor > t.minor ? 1 : this.patch < t.patch ? -1 : this.patch > t.patch ? 1 : 0;
  }
  comparePre(t) {
    if (t instanceof en || (t = new en(t, this.options)), this.prerelease.length && !t.prerelease.length)
      return -1;
    if (!this.prerelease.length && t.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t.prerelease.length)
      return 0;
    let n = 0;
    do {
      const r = this.prerelease[n], o = t.prerelease[n];
      if (Bs("prerelease compare", n, r, o), r === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (r === void 0)
        return -1;
      if (r === o)
        continue;
      return Oc(r, o);
    } while (++n);
  }
  compareBuild(t) {
    t instanceof en || (t = new en(t, this.options));
    let n = 0;
    do {
      const r = this.build[n], o = t.build[n];
      if (Bs("build compare", n, r, o), r === void 0 && o === void 0)
        return 0;
      if (o === void 0)
        return 1;
      if (r === void 0)
        return -1;
      if (r === o)
        continue;
      return Oc(r, o);
    } while (++n);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(t, n, r) {
    if (t.startsWith("pre")) {
      if (!n && r === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (n) {
        const o = `-${n}`.match(this.options.loose ? Hs[Xs.PRERELEASELOOSE] : Hs[Xs.PRERELEASE]);
        if (!o || o[1] !== n)
          throw new Error(`invalid identifier: ${n}`);
      }
    }
    switch (t) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", n, r);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", n, r);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", n, r), this.inc("pre", n, r);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", n, r), this.inc("pre", n, r);
        break;
      case "release":
        if (this.prerelease.length === 0)
          throw new Error(`version ${this.raw} is not a prerelease`);
        this.prerelease.length = 0;
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const o = Number(r) ? 1 : 0;
        if (this.prerelease.length === 0)
          this.prerelease = [o];
        else {
          let s = this.prerelease.length;
          for (; --s >= 0; )
            typeof this.prerelease[s] == "number" && (this.prerelease[s]++, s = -2);
          if (s === -1) {
            if (n === this.prerelease.join(".") && r === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(o);
          }
        }
        if (n) {
          let s = [n, o];
          r === !1 && (s = [n]), Oc(this.prerelease[0], n) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = s) : this.prerelease = s;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var ft = Que;
const Im = ft, Zue = (e, t, n = !1) => {
  if (e instanceof Im)
    return e;
  try {
    return new Im(e, t);
  } catch (r) {
    if (!n)
      return null;
    throw r;
  }
};
var Po = Zue;
const epe = Po, tpe = (e, t) => {
  const n = epe(e, t);
  return n ? n.version : null;
};
var npe = tpe;
const rpe = Po, ope = (e, t) => {
  const n = rpe(e.trim().replace(/^[=v]+/, ""), t);
  return n ? n.version : null;
};
var spe = ope;
const km = ft, ipe = (e, t, n, r, o) => {
  typeof n == "string" && (o = r, r = n, n = void 0);
  try {
    return new km(
      e instanceof km ? e.version : e,
      n
    ).inc(t, r, o).version;
  } catch {
    return null;
  }
};
var ape = ipe;
const Cm = Po, cpe = (e, t) => {
  const n = Cm(e, null, !0), r = Cm(t, null, !0), o = n.compare(r);
  if (o === 0)
    return null;
  const s = o > 0, i = s ? n : r, a = s ? r : n, c = !!i.prerelease.length;
  if (!!a.prerelease.length && !c) {
    if (!a.patch && !a.minor)
      return "major";
    if (a.compareMain(i) === 0)
      return a.minor && !a.patch ? "minor" : "patch";
  }
  const l = c ? "pre" : "";
  return n.major !== r.major ? l + "major" : n.minor !== r.minor ? l + "minor" : n.patch !== r.patch ? l + "patch" : "prerelease";
};
var lpe = cpe;
const upe = ft, ppe = (e, t) => new upe(e, t).major;
var dpe = ppe;
const fpe = ft, mpe = (e, t) => new fpe(e, t).minor;
var hpe = mpe;
const ype = ft, gpe = (e, t) => new ype(e, t).patch;
var vpe = gpe;
const bpe = Po, wpe = (e, t) => {
  const n = bpe(e, t);
  return n && n.prerelease.length ? n.prerelease : null;
};
var xpe = wpe;
const jm = ft, _pe = (e, t, n) => new jm(e, n).compare(new jm(t, n));
var Ht = _pe;
const $pe = Ht, Epe = (e, t, n) => $pe(t, e, n);
var Spe = Epe;
const Tpe = Ht, Ope = (e, t) => Tpe(e, t, !0);
var Ppe = Ope;
const Lm = ft, Npe = (e, t, n) => {
  const r = new Lm(e, n), o = new Lm(t, n);
  return r.compare(o) || r.compareBuild(o);
};
var rd = Npe;
const Rpe = rd, Ape = (e, t) => e.sort((n, r) => Rpe(n, r, t));
var Dpe = Ape;
const Ipe = rd, kpe = (e, t) => e.sort((n, r) => Ipe(r, n, t));
var Cpe = kpe;
const jpe = Ht, Lpe = (e, t, n) => jpe(e, t, n) > 0;
var ha = Lpe;
const qpe = Ht, Fpe = (e, t, n) => qpe(e, t, n) < 0;
var od = Fpe;
const Mpe = Ht, Upe = (e, t, n) => Mpe(e, t, n) === 0;
var Uv = Upe;
const Vpe = Ht, zpe = (e, t, n) => Vpe(e, t, n) !== 0;
var Vv = zpe;
const Bpe = Ht, Gpe = (e, t, n) => Bpe(e, t, n) >= 0;
var sd = Gpe;
const Hpe = Ht, Xpe = (e, t, n) => Hpe(e, t, n) <= 0;
var id = Xpe;
const Kpe = Uv, Wpe = Vv, Jpe = ha, Ype = sd, Qpe = od, Zpe = id, ede = (e, t, n, r) => {
  switch (t) {
    case "===":
      return typeof e == "object" && (e = e.version), typeof n == "object" && (n = n.version), e === n;
    case "!==":
      return typeof e == "object" && (e = e.version), typeof n == "object" && (n = n.version), e !== n;
    case "":
    case "=":
    case "==":
      return Kpe(e, n, r);
    case "!=":
      return Wpe(e, n, r);
    case ">":
      return Jpe(e, n, r);
    case ">=":
      return Ype(e, n, r);
    case "<":
      return Qpe(e, n, r);
    case "<=":
      return Zpe(e, n, r);
    default:
      throw new TypeError(`Invalid operator: ${t}`);
  }
};
var zv = ede;
const tde = ft, nde = Po, { safeRe: Ks, t: Ws } = ws, rde = (e, t) => {
  if (e instanceof tde)
    return e;
  if (typeof e == "number" && (e = String(e)), typeof e != "string")
    return null;
  t = t || {};
  let n = null;
  if (!t.rtl)
    n = e.match(t.includePrerelease ? Ks[Ws.COERCEFULL] : Ks[Ws.COERCE]);
  else {
    const c = t.includePrerelease ? Ks[Ws.COERCERTLFULL] : Ks[Ws.COERCERTL];
    let p;
    for (; (p = c.exec(e)) && (!n || n.index + n[0].length !== e.length); )
      (!n || p.index + p[0].length !== n.index + n[0].length) && (n = p), c.lastIndex = p.index + p[1].length + p[2].length;
    c.lastIndex = -1;
  }
  if (n === null)
    return null;
  const r = n[2], o = n[3] || "0", s = n[4] || "0", i = t.includePrerelease && n[5] ? `-${n[5]}` : "", a = t.includePrerelease && n[6] ? `+${n[6]}` : "";
  return nde(`${r}.${o}.${s}${i}${a}`, t);
};
var ode = rde;
class sde {
  constructor() {
    this.max = 1e3, this.map = /* @__PURE__ */ new Map();
  }
  get(t) {
    const n = this.map.get(t);
    if (n !== void 0)
      return this.map.delete(t), this.map.set(t, n), n;
  }
  delete(t) {
    return this.map.delete(t);
  }
  set(t, n) {
    if (!this.delete(t) && n !== void 0) {
      if (this.map.size >= this.max) {
        const o = this.map.keys().next().value;
        this.delete(o);
      }
      this.map.set(t, n);
    }
    return this;
  }
}
var ide = sde, Pc, qm;
function Xt() {
  if (qm) return Pc;
  qm = 1;
  const e = /\s+/g;
  class t {
    constructor(U, G) {
      if (G = o(G), U instanceof t)
        return U.loose === !!G.loose && U.includePrerelease === !!G.includePrerelease ? U : new t(U.raw, G);
      if (U instanceof s)
        return this.raw = U.value, this.set = [[U]], this.formatted = void 0, this;
      if (this.options = G, this.loose = !!G.loose, this.includePrerelease = !!G.includePrerelease, this.raw = U.trim().replace(e, " "), this.set = this.raw.split("||").map((V) => this.parseRange(V.trim())).filter((V) => V.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const V = this.set[0];
        if (this.set = this.set.filter((K) => !g(K[0])), this.set.length === 0)
          this.set = [V];
        else if (this.set.length > 1) {
          for (const K of this.set)
            if (K.length === 1 && y(K[0])) {
              this.set = [K];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let U = 0; U < this.set.length; U++) {
          U > 0 && (this.formatted += "||");
          const G = this.set[U];
          for (let V = 0; V < G.length; V++)
            V > 0 && (this.formatted += " "), this.formatted += G[V].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(U) {
      const V = ((this.options.includePrerelease && m) | (this.options.loose && f)) + ":" + U, K = r.get(V);
      if (K)
        return K;
      const X = this.options.loose, D = X ? c[p.HYPHENRANGELOOSE] : c[p.HYPHENRANGE];
      U = U.replace(D, z(this.options.includePrerelease)), i("hyphen replace", U), U = U.replace(c[p.COMPARATORTRIM], l), i("comparator trim", U), U = U.replace(c[p.TILDETRIM], u), i("tilde trim", U), U = U.replace(c[p.CARETTRIM], d), i("caret trim", U);
      let S = U.split(" ").map((_) => b(_, this.options)).join(" ").split(/\s+/).map((_) => I(_, this.options));
      X && (S = S.filter((_) => (i("loose invalid filter", _, this.options), !!_.match(c[p.COMPARATORLOOSE])))), i("range list", S);
      const N = /* @__PURE__ */ new Map(), O = S.map((_) => new s(_, this.options));
      for (const _ of O) {
        if (g(_))
          return [_];
        N.set(_.value, _);
      }
      N.size > 1 && N.has("") && N.delete("");
      const h = [...N.values()];
      return r.set(V, h), h;
    }
    intersects(U, G) {
      if (!(U instanceof t))
        throw new TypeError("a Range is required");
      return this.set.some((V) => v(V, G) && U.set.some((K) => v(K, G) && V.every((X) => K.every((D) => X.intersects(D, G)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(U) {
      if (!U)
        return !1;
      if (typeof U == "string")
        try {
          U = new a(U, this.options);
        } catch {
          return !1;
        }
      for (let G = 0; G < this.set.length; G++)
        if (H(this.set[G], U, this.options))
          return !0;
      return !1;
    }
  }
  Pc = t;
  const n = ide, r = new n(), o = nd, s = ya(), i = ma, a = ft, {
    safeRe: c,
    t: p,
    comparatorTrimReplace: l,
    tildeTrimReplace: u,
    caretTrimReplace: d
  } = ws, { FLAG_INCLUDE_PRERELEASE: m, FLAG_LOOSE: f } = fa, g = (F) => F.value === "<0.0.0-0", y = (F) => F.value === "", v = (F, U) => {
    let G = !0;
    const V = F.slice();
    let K = V.pop();
    for (; G && V.length; )
      G = V.every((X) => K.intersects(X, U)), K = V.pop();
    return G;
  }, b = (F, U) => (F = F.replace(c[p.BUILD], ""), i("comp", F, U), F = C(F, U), i("caret", F), F = T(F, U), i("tildes", F), F = k(F, U), i("xrange", F), F = q(F, U), i("stars", F), F), w = (F) => !F || F.toLowerCase() === "x" || F === "*", T = (F, U) => F.trim().split(/\s+/).map((G) => P(G, U)).join(" "), P = (F, U) => {
    const G = U.loose ? c[p.TILDELOOSE] : c[p.TILDE];
    return F.replace(G, (V, K, X, D, S) => {
      i("tilde", F, V, K, X, D, S);
      let N;
      return w(K) ? N = "" : w(X) ? N = `>=${K}.0.0 <${+K + 1}.0.0-0` : w(D) ? N = `>=${K}.${X}.0 <${K}.${+X + 1}.0-0` : S ? (i("replaceTilde pr", S), N = `>=${K}.${X}.${D}-${S} <${K}.${+X + 1}.0-0`) : N = `>=${K}.${X}.${D} <${K}.${+X + 1}.0-0`, i("tilde return", N), N;
    });
  }, C = (F, U) => F.trim().split(/\s+/).map((G) => B(G, U)).join(" "), B = (F, U) => {
    i("caret", F, U);
    const G = U.loose ? c[p.CARETLOOSE] : c[p.CARET], V = U.includePrerelease ? "-0" : "";
    return F.replace(G, (K, X, D, S, N) => {
      i("caret", F, K, X, D, S, N);
      let O;
      return w(X) ? O = "" : w(D) ? O = `>=${X}.0.0${V} <${+X + 1}.0.0-0` : w(S) ? X === "0" ? O = `>=${X}.${D}.0${V} <${X}.${+D + 1}.0-0` : O = `>=${X}.${D}.0${V} <${+X + 1}.0.0-0` : N ? (i("replaceCaret pr", N), X === "0" ? D === "0" ? O = `>=${X}.${D}.${S}-${N} <${X}.${D}.${+S + 1}-0` : O = `>=${X}.${D}.${S}-${N} <${X}.${+D + 1}.0-0` : O = `>=${X}.${D}.${S}-${N} <${+X + 1}.0.0-0`) : (i("no pr"), X === "0" ? D === "0" ? O = `>=${X}.${D}.${S}${V} <${X}.${D}.${+S + 1}-0` : O = `>=${X}.${D}.${S}${V} <${X}.${+D + 1}.0-0` : O = `>=${X}.${D}.${S} <${+X + 1}.0.0-0`), i("caret return", O), O;
    });
  }, k = (F, U) => (i("replaceXRanges", F, U), F.split(/\s+/).map((G) => E(G, U)).join(" ")), E = (F, U) => {
    F = F.trim();
    const G = U.loose ? c[p.XRANGELOOSE] : c[p.XRANGE];
    return F.replace(G, (V, K, X, D, S, N) => {
      i("xRange", F, V, K, X, D, S, N);
      const O = w(X), h = O || w(D), _ = h || w(S), A = _;
      return K === "=" && A && (K = ""), N = U.includePrerelease ? "-0" : "", O ? K === ">" || K === "<" ? V = "<0.0.0-0" : V = "*" : K && A ? (h && (D = 0), S = 0, K === ">" ? (K = ">=", h ? (X = +X + 1, D = 0, S = 0) : (D = +D + 1, S = 0)) : K === "<=" && (K = "<", h ? X = +X + 1 : D = +D + 1), K === "<" && (N = "-0"), V = `${K + X}.${D}.${S}${N}`) : h ? V = `>=${X}.0.0${N} <${+X + 1}.0.0-0` : _ && (V = `>=${X}.${D}.0${N} <${X}.${+D + 1}.0-0`), i("xRange return", V), V;
    });
  }, q = (F, U) => (i("replaceStars", F, U), F.trim().replace(c[p.STAR], "")), I = (F, U) => (i("replaceGTE0", F, U), F.trim().replace(c[U.includePrerelease ? p.GTE0PRE : p.GTE0], "")), z = (F) => (U, G, V, K, X, D, S, N, O, h, _, A) => (w(V) ? G = "" : w(K) ? G = `>=${V}.0.0${F ? "-0" : ""}` : w(X) ? G = `>=${V}.${K}.0${F ? "-0" : ""}` : D ? G = `>=${G}` : G = `>=${G}${F ? "-0" : ""}`, w(O) ? N = "" : w(h) ? N = `<${+O + 1}.0.0-0` : w(_) ? N = `<${O}.${+h + 1}.0-0` : A ? N = `<=${O}.${h}.${_}-${A}` : F ? N = `<${O}.${h}.${+_ + 1}-0` : N = `<=${N}`, `${G} ${N}`.trim()), H = (F, U, G) => {
    for (let V = 0; V < F.length; V++)
      if (!F[V].test(U))
        return !1;
    if (U.prerelease.length && !G.includePrerelease) {
      for (let V = 0; V < F.length; V++)
        if (i(F[V].semver), F[V].semver !== s.ANY && F[V].semver.prerelease.length > 0) {
          const K = F[V].semver;
          if (K.major === U.major && K.minor === U.minor && K.patch === U.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return Pc;
}
var Nc, Fm;
function ya() {
  if (Fm) return Nc;
  Fm = 1;
  const e = Symbol("SemVer ANY");
  class t {
    static get ANY() {
      return e;
    }
    constructor(l, u) {
      if (u = n(u), l instanceof t) {
        if (l.loose === !!u.loose)
          return l;
        l = l.value;
      }
      l = l.trim().split(/\s+/).join(" "), i("comparator", l, u), this.options = u, this.loose = !!u.loose, this.parse(l), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, i("comp", this);
    }
    parse(l) {
      const u = this.options.loose ? r[o.COMPARATORLOOSE] : r[o.COMPARATOR], d = l.match(u);
      if (!d)
        throw new TypeError(`Invalid comparator: ${l}`);
      this.operator = d[1] !== void 0 ? d[1] : "", this.operator === "=" && (this.operator = ""), d[2] ? this.semver = new a(d[2], this.options.loose) : this.semver = e;
    }
    toString() {
      return this.value;
    }
    test(l) {
      if (i("Comparator.test", l, this.options.loose), this.semver === e || l === e)
        return !0;
      if (typeof l == "string")
        try {
          l = new a(l, this.options);
        } catch {
          return !1;
        }
      return s(l, this.operator, this.semver, this.options);
    }
    intersects(l, u) {
      if (!(l instanceof t))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new c(l.value, u).test(this.value) : l.operator === "" ? l.value === "" ? !0 : new c(this.value, u).test(l.semver) : (u = n(u), u.includePrerelease && (this.value === "<0.0.0-0" || l.value === "<0.0.0-0") || !u.includePrerelease && (this.value.startsWith("<0.0.0") || l.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && l.operator.startsWith(">") || this.operator.startsWith("<") && l.operator.startsWith("<") || this.semver.version === l.semver.version && this.operator.includes("=") && l.operator.includes("=") || s(this.semver, "<", l.semver, u) && this.operator.startsWith(">") && l.operator.startsWith("<") || s(this.semver, ">", l.semver, u) && this.operator.startsWith("<") && l.operator.startsWith(">")));
    }
  }
  Nc = t;
  const n = nd, { safeRe: r, t: o } = ws, s = zv, i = ma, a = ft, c = Xt();
  return Nc;
}
const ade = Xt(), cde = (e, t, n) => {
  try {
    t = new ade(t, n);
  } catch {
    return !1;
  }
  return t.test(e);
};
var ga = cde;
const lde = Xt(), ude = (e, t) => new lde(e, t).set.map((n) => n.map((r) => r.value).join(" ").trim().split(" "));
var pde = ude;
const dde = ft, fde = Xt(), mde = (e, t, n) => {
  let r = null, o = null, s = null;
  try {
    s = new fde(t, n);
  } catch {
    return null;
  }
  return e.forEach((i) => {
    s.test(i) && (!r || o.compare(i) === -1) && (r = i, o = new dde(r, n));
  }), r;
};
var hde = mde;
const yde = ft, gde = Xt(), vde = (e, t, n) => {
  let r = null, o = null, s = null;
  try {
    s = new gde(t, n);
  } catch {
    return null;
  }
  return e.forEach((i) => {
    s.test(i) && (!r || o.compare(i) === 1) && (r = i, o = new yde(r, n));
  }), r;
};
var bde = vde;
const Rc = ft, wde = Xt(), Mm = ha, xde = (e, t) => {
  e = new wde(e, t);
  let n = new Rc("0.0.0");
  if (e.test(n) || (n = new Rc("0.0.0-0"), e.test(n)))
    return n;
  n = null;
  for (let r = 0; r < e.set.length; ++r) {
    const o = e.set[r];
    let s = null;
    o.forEach((i) => {
      const a = new Rc(i.semver.version);
      switch (i.operator) {
        case ">":
          a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0), a.raw = a.format();
        case "":
        case ">=":
          (!s || Mm(a, s)) && (s = a);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${i.operator}`);
      }
    }), s && (!n || Mm(n, s)) && (n = s);
  }
  return n && e.test(n) ? n : null;
};
var _de = xde;
const $de = Xt(), Ede = (e, t) => {
  try {
    return new $de(e, t).range || "*";
  } catch {
    return null;
  }
};
var Sde = Ede;
const Tde = ft, Bv = ya(), { ANY: Ode } = Bv, Pde = Xt(), Nde = ga, Um = ha, Vm = od, Rde = id, Ade = sd, Dde = (e, t, n, r) => {
  e = new Tde(e, r), t = new Pde(t, r);
  let o, s, i, a, c;
  switch (n) {
    case ">":
      o = Um, s = Rde, i = Vm, a = ">", c = ">=";
      break;
    case "<":
      o = Vm, s = Ade, i = Um, a = "<", c = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (Nde(e, t, r))
    return !1;
  for (let p = 0; p < t.set.length; ++p) {
    const l = t.set[p];
    let u = null, d = null;
    if (l.forEach((m) => {
      m.semver === Ode && (m = new Bv(">=0.0.0")), u = u || m, d = d || m, o(m.semver, u.semver, r) ? u = m : i(m.semver, d.semver, r) && (d = m);
    }), u.operator === a || u.operator === c || (!d.operator || d.operator === a) && s(e, d.semver))
      return !1;
    if (d.operator === c && i(e, d.semver))
      return !1;
  }
  return !0;
};
var ad = Dde;
const Ide = ad, kde = (e, t, n) => Ide(e, t, ">", n);
var Cde = kde;
const jde = ad, Lde = (e, t, n) => jde(e, t, "<", n);
var qde = Lde;
const zm = Xt(), Fde = (e, t, n) => (e = new zm(e, n), t = new zm(t, n), e.intersects(t, n));
var Mde = Fde;
const Ude = ga, Vde = Ht;
var zde = (e, t, n) => {
  const r = [];
  let o = null, s = null;
  const i = e.sort((l, u) => Vde(l, u, n));
  for (const l of i)
    Ude(l, t, n) ? (s = l, o || (o = l)) : (s && r.push([o, s]), s = null, o = null);
  o && r.push([o, null]);
  const a = [];
  for (const [l, u] of r)
    l === u ? a.push(l) : !u && l === i[0] ? a.push("*") : u ? l === i[0] ? a.push(`<=${u}`) : a.push(`${l} - ${u}`) : a.push(`>=${l}`);
  const c = a.join(" || "), p = typeof t.raw == "string" ? t.raw : String(t);
  return c.length < p.length ? c : t;
};
const Bm = Xt(), cd = ya(), { ANY: Ac } = cd, Fo = ga, ld = Ht, Bde = (e, t, n = {}) => {
  if (e === t)
    return !0;
  e = new Bm(e, n), t = new Bm(t, n);
  let r = !1;
  e: for (const o of e.set) {
    for (const s of t.set) {
      const i = Hde(o, s, n);
      if (r = r || i !== null, i)
        continue e;
    }
    if (r)
      return !1;
  }
  return !0;
}, Gde = [new cd(">=0.0.0-0")], Gm = [new cd(">=0.0.0")], Hde = (e, t, n) => {
  if (e === t)
    return !0;
  if (e.length === 1 && e[0].semver === Ac) {
    if (t.length === 1 && t[0].semver === Ac)
      return !0;
    n.includePrerelease ? e = Gde : e = Gm;
  }
  if (t.length === 1 && t[0].semver === Ac) {
    if (n.includePrerelease)
      return !0;
    t = Gm;
  }
  const r = /* @__PURE__ */ new Set();
  let o, s;
  for (const m of e)
    m.operator === ">" || m.operator === ">=" ? o = Hm(o, m, n) : m.operator === "<" || m.operator === "<=" ? s = Xm(s, m, n) : r.add(m.semver);
  if (r.size > 1)
    return null;
  let i;
  if (o && s) {
    if (i = ld(o.semver, s.semver, n), i > 0)
      return null;
    if (i === 0 && (o.operator !== ">=" || s.operator !== "<="))
      return null;
  }
  for (const m of r) {
    if (o && !Fo(m, String(o), n) || s && !Fo(m, String(s), n))
      return null;
    for (const f of t)
      if (!Fo(m, String(f), n))
        return !1;
    return !0;
  }
  let a, c, p, l, u = s && !n.includePrerelease && s.semver.prerelease.length ? s.semver : !1, d = o && !n.includePrerelease && o.semver.prerelease.length ? o.semver : !1;
  u && u.prerelease.length === 1 && s.operator === "<" && u.prerelease[0] === 0 && (u = !1);
  for (const m of t) {
    if (l = l || m.operator === ">" || m.operator === ">=", p = p || m.operator === "<" || m.operator === "<=", o) {
      if (d && m.semver.prerelease && m.semver.prerelease.length && m.semver.major === d.major && m.semver.minor === d.minor && m.semver.patch === d.patch && (d = !1), m.operator === ">" || m.operator === ">=") {
        if (a = Hm(o, m, n), a === m && a !== o)
          return !1;
      } else if (o.operator === ">=" && !Fo(o.semver, String(m), n))
        return !1;
    }
    if (s) {
      if (u && m.semver.prerelease && m.semver.prerelease.length && m.semver.major === u.major && m.semver.minor === u.minor && m.semver.patch === u.patch && (u = !1), m.operator === "<" || m.operator === "<=") {
        if (c = Xm(s, m, n), c === m && c !== s)
          return !1;
      } else if (s.operator === "<=" && !Fo(s.semver, String(m), n))
        return !1;
    }
    if (!m.operator && (s || o) && i !== 0)
      return !1;
  }
  return !(o && p && !s && i !== 0 || s && l && !o && i !== 0 || d || u);
}, Hm = (e, t, n) => {
  if (!e)
    return t;
  const r = ld(e.semver, t.semver, n);
  return r > 0 ? e : r < 0 || t.operator === ">" && e.operator === ">=" ? t : e;
}, Xm = (e, t, n) => {
  if (!e)
    return t;
  const r = ld(e.semver, t.semver, n);
  return r < 0 ? e : r > 0 || t.operator === "<" && e.operator === "<=" ? t : e;
};
var Xde = Bde;
const Dc = ws, Km = fa, Kde = ft, Wm = Mv, Wde = Po, Jde = npe, Yde = spe, Qde = ape, Zde = lpe, efe = dpe, tfe = hpe, nfe = vpe, rfe = xpe, ofe = Ht, sfe = Spe, ife = Ppe, afe = rd, cfe = Dpe, lfe = Cpe, ufe = ha, pfe = od, dfe = Uv, ffe = Vv, mfe = sd, hfe = id, yfe = zv, gfe = ode, vfe = ya(), bfe = Xt(), wfe = ga, xfe = pde, _fe = hde, $fe = bde, Efe = _de, Sfe = Sde, Tfe = ad, Ofe = Cde, Pfe = qde, Nfe = Mde, Rfe = zde, Afe = Xde;
var Dfe = {
  parse: Wde,
  valid: Jde,
  clean: Yde,
  inc: Qde,
  diff: Zde,
  major: efe,
  minor: tfe,
  patch: nfe,
  prerelease: rfe,
  compare: ofe,
  rcompare: sfe,
  compareLoose: ife,
  compareBuild: afe,
  sort: cfe,
  rsort: lfe,
  gt: ufe,
  lt: pfe,
  eq: dfe,
  neq: ffe,
  gte: mfe,
  lte: hfe,
  cmp: yfe,
  coerce: gfe,
  Comparator: vfe,
  Range: bfe,
  satisfies: wfe,
  toComparators: xfe,
  maxSatisfying: _fe,
  minSatisfying: $fe,
  minVersion: Efe,
  validRange: Sfe,
  outside: Tfe,
  gtr: Ofe,
  ltr: Pfe,
  intersects: Nfe,
  simplifyRange: Rfe,
  subset: Afe,
  SemVer: Kde,
  re: Dc.re,
  src: Dc.src,
  tokens: Dc.t,
  SEMVER_SPEC_VERSION: Km.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: Km.RELEASE_TYPES,
  compareIdentifiers: Wm.compareIdentifiers,
  rcompareIdentifiers: Wm.rcompareIdentifiers
};
const Vr = /* @__PURE__ */ tr(Dfe), Ife = Object.prototype.toString, kfe = "[object Uint8Array]", Cfe = "[object ArrayBuffer]";
function Gv(e, t, n) {
  return e ? e.constructor === t ? !0 : Ife.call(e) === n : !1;
}
function Hv(e) {
  return Gv(e, Uint8Array, kfe);
}
function jfe(e) {
  return Gv(e, ArrayBuffer, Cfe);
}
function Lfe(e) {
  return Hv(e) || jfe(e);
}
function qfe(e) {
  if (!Hv(e))
    throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof e}\``);
}
function Ffe(e) {
  if (!Lfe(e))
    throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e}\``);
}
function Ic(e, t) {
  if (e.length === 0)
    return new Uint8Array(0);
  t ?? (t = e.reduce((o, s) => o + s.length, 0));
  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e)
    qfe(o), n.set(o, r), r += o.length;
  return n;
}
const Js = {
  utf8: new globalThis.TextDecoder("utf8")
};
function Ys(e, t = "utf8") {
  return Ffe(e), Js[t] ?? (Js[t] = new globalThis.TextDecoder(t)), Js[t].decode(e);
}
function Mfe(e) {
  if (typeof e != "string")
    throw new TypeError(`Expected \`string\`, got \`${typeof e}\``);
}
const Ufe = new globalThis.TextEncoder();
function kc(e) {
  return Mfe(e), Ufe.encode(e);
}
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
const Jm = "aes-256-cbc", Xv = /* @__PURE__ */ new Set([
  "aes-256-cbc",
  "aes-256-gcm",
  "aes-256-ctr"
]), Vfe = (e) => typeof e == "string" && Xv.has(e), vn = () => /* @__PURE__ */ Object.create(null), Ym = (e) => e !== void 0, Cc = (e, t) => {
  const n = /* @__PURE__ */ new Set([
    "undefined",
    "symbol",
    "function"
  ]), r = typeof t;
  if (n.has(r))
    throw new TypeError(`Setting a value of type \`${r}\` for key \`${e}\` is not allowed as it's not supported by JSON`);
}, Un = "__internal__", jc = `${Un}.migrations.version`;
var Bn, Gn, wr, yt, Pt, xr, _r, so, tn, Ue, Kv, Wv, Jv, Yv, Qv, Zv, eb, tb;
class zfe {
  constructor(t = {}) {
    ge(this, Ue);
    Qt(this, "path");
    Qt(this, "events");
    ge(this, Bn);
    ge(this, Gn);
    ge(this, wr);
    ge(this, yt);
    ge(this, Pt, {});
    ge(this, xr, !1);
    ge(this, _r);
    ge(this, so);
    ge(this, tn);
    Qt(this, "_deserialize", (t) => JSON.parse(t));
    Qt(this, "_serialize", (t) => JSON.stringify(t, void 0, "	"));
    const n = ne(this, Ue, Kv).call(this, t);
    ie(this, yt, n), ne(this, Ue, Wv).call(this, n), ne(this, Ue, Yv).call(this, n), ne(this, Ue, Qv).call(this, n), this.events = new EventTarget(), ie(this, Gn, n.encryptionKey), ie(this, wr, n.encryptionAlgorithm ?? Jm), this.path = ne(this, Ue, Zv).call(this, n), ne(this, Ue, eb).call(this, n), n.watch && this._watch();
  }
  get(t, n) {
    if (M(this, yt).accessPropertiesByDotNotation)
      return this._get(t, n);
    const { store: r } = this;
    return t in r ? r[t] : n;
  }
  set(t, n) {
    if (typeof t != "string" && typeof t != "object")
      throw new TypeError(`Expected \`key\` to be of type \`string\` or \`object\`, got ${typeof t}`);
    if (typeof t != "object" && n === void 0)
      throw new TypeError("Use `delete()` to clear values");
    if (this._containsReservedKey(t))
      throw new TypeError(`Please don't use the ${Un} key, as it's used to manage this module internal operations.`);
    const { store: r } = this, o = (s, i) => {
      if (Cc(s, i), M(this, yt).accessPropertiesByDotNotation)
        As(r, s, i);
      else {
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return;
        r[s] = i;
      }
    };
    if (typeof t == "object") {
      const s = t;
      for (const [i, a] of Object.entries(s))
        o(i, a);
    } else
      o(t, n);
    this.store = r;
  }
  has(t) {
    return M(this, yt).accessPropertiesByDotNotation ? mc(this.store, t) : t in this.store;
  }
  appendToArray(t, n) {
    Cc(t, n);
    const r = M(this, yt).accessPropertiesByDotNotation ? this._get(t, []) : t in this.store ? this.store[t] : [];
    if (!Array.isArray(r))
      throw new TypeError(`The key \`${t}\` is already set to a non-array value`);
    this.set(t, [...r, n]);
  }
  /**
      Reset items to their default values, as defined by the `defaults` or `schema` option.
  
      @see `clear()` to reset all items.
  
      @param keys - The keys of the items to reset.
      */
  reset(...t) {
    for (const n of t)
      Ym(M(this, Pt)[n]) && this.set(n, M(this, Pt)[n]);
  }
  delete(t) {
    const { store: n } = this;
    M(this, yt).accessPropertiesByDotNotation ? mZ(n, t) : delete n[t], this.store = n;
  }
  /**
      Delete all items.
  
      This resets known items to their default values, if defined by the `defaults` or `schema` option.
      */
  clear() {
    const t = vn();
    for (const n of Object.keys(M(this, Pt)))
      Ym(M(this, Pt)[n]) && (Cc(n, M(this, Pt)[n]), M(this, yt).accessPropertiesByDotNotation ? As(t, n, M(this, Pt)[n]) : t[n] = M(this, Pt)[n]);
    this.store = t;
  }
  onDidChange(t, n) {
    if (typeof t != "string")
      throw new TypeError(`Expected \`key\` to be of type \`string\`, got ${typeof t}`);
    if (typeof n != "function")
      throw new TypeError(`Expected \`callback\` to be of type \`function\`, got ${typeof n}`);
    return this._handleValueChange(() => this.get(t), n);
  }
  /**
      Watches the whole config object, calling `callback` on any changes.
  
      @param callback - A callback function that is called on any changes. When a `key` is first set `oldValue` will be `undefined`, and when a key is deleted `newValue` will be `undefined`.
      @returns A function, that when called, will unsubscribe.
      */
  onDidAnyChange(t) {
    if (typeof t != "function")
      throw new TypeError(`Expected \`callback\` to be of type \`function\`, got ${typeof t}`);
    return this._handleStoreChange(t);
  }
  get size() {
    return Object.keys(this.store).filter((n) => !this._isReservedKeyPath(n)).length;
  }
  /**
      Get all the config as an object or replace the current config with an object.
  
      @example
      ```
      console.log(config.store);
      //=> {name: 'John', age: 30}
      ```
  
      @example
      ```
      config.store = {
          hello: 'world'
      };
      ```
      */
  get store() {
    var t;
    try {
      const n = ae.readFileSync(this.path, M(this, Gn) ? null : "utf8"), r = this._decryptData(n);
      return ((s) => {
        const i = this._deserialize(s);
        return M(this, xr) || this._validate(i), Object.assign(vn(), i);
      })(r);
    } catch (n) {
      if ((n == null ? void 0 : n.code) === "ENOENT")
        return this._ensureDirectory(), vn();
      if (M(this, yt).clearInvalidConfig) {
        const r = n;
        if (r.name === "SyntaxError" || (t = r.message) != null && t.startsWith("Config schema violation:") || r.message === "Failed to decrypt config data.")
          return vn();
      }
      throw n;
    }
  }
  set store(t) {
    if (this._ensureDirectory(), !mc(t, Un))
      try {
        const n = ae.readFileSync(this.path, M(this, Gn) ? null : "utf8"), r = this._decryptData(n), o = this._deserialize(r);
        mc(o, Un) && As(t, Un, Nf(o, Un));
      } catch {
      }
    M(this, xr) || this._validate(t), this._write(t), this.events.dispatchEvent(new Event("change"));
  }
  *[Symbol.iterator]() {
    for (const [t, n] of Object.entries(this.store))
      this._isReservedKeyPath(t) || (yield [t, n]);
  }
  /**
  Close the file watcher if one exists. This is useful in tests to prevent the process from hanging.
  */
  _closeWatcher() {
    M(this, _r) && (M(this, _r).close(), ie(this, _r, void 0)), M(this, so) && (ae.unwatchFile(this.path), ie(this, so, !1)), ie(this, tn, void 0);
  }
  _decryptData(t) {
    const n = M(this, Gn);
    if (!n)
      return typeof t == "string" ? t : Ys(t);
    const r = M(this, wr), o = r === "aes-256-gcm" ? 16 : 0, s = ":".codePointAt(0), i = typeof t == "string" ? t.codePointAt(16) : t[16];
    if (!(s !== void 0 && i === s)) {
      if (r === "aes-256-cbc")
        return typeof t == "string" ? t : Ys(t);
      throw new Error("Failed to decrypt config data.");
    }
    const c = (m) => {
      if (o === 0)
        return { ciphertext: m };
      const f = m.length - o;
      if (f < 0)
        throw new Error("Invalid authentication tag length.");
      return {
        ciphertext: m.slice(0, f),
        authenticationTag: m.slice(f)
      };
    }, p = t.slice(0, 16), l = t.slice(17), u = typeof l == "string" ? kc(l) : l, d = (m) => {
      const { ciphertext: f, authenticationTag: g } = c(u), y = ko.pbkdf2Sync(n, m, 1e4, 32, "sha512"), v = ko.createDecipheriv(r, y, p);
      return g && v.setAuthTag(g), Ys(Ic([v.update(f), v.final()]));
    };
    try {
      return d(p);
    } catch {
      try {
        return d(p.toString());
      } catch {
      }
    }
    if (r === "aes-256-cbc")
      return typeof t == "string" ? t : Ys(t);
    throw new Error("Failed to decrypt config data.");
  }
  _handleStoreChange(t) {
    let n = this.store;
    const r = () => {
      const o = n, s = this.store;
      Ld(s, o) || (n = s, t.call(this, s, o));
    };
    return this.events.addEventListener("change", r), () => {
      this.events.removeEventListener("change", r);
    };
  }
  _handleValueChange(t, n) {
    let r = t();
    const o = () => {
      const s = r, i = t();
      Ld(i, s) || (r = i, n.call(this, i, s));
    };
    return this.events.addEventListener("change", o), () => {
      this.events.removeEventListener("change", o);
    };
  }
  _validate(t) {
    if (!M(this, Bn) || M(this, Bn).call(this, t) || !M(this, Bn).errors)
      return;
    const r = M(this, Bn).errors.map(({ instancePath: o, message: s = "" }) => `\`${o.slice(1)}\` ${s}`);
    throw new Error("Config schema violation: " + r.join("; "));
  }
  _ensureDirectory() {
    ae.mkdirSync(de.dirname(this.path), { recursive: !0 });
  }
  _write(t) {
    let n = this._serialize(t);
    const r = M(this, Gn);
    if (r) {
      const o = ko.randomBytes(16), s = ko.pbkdf2Sync(r, o, 1e4, 32, "sha512"), i = ko.createCipheriv(M(this, wr), s, o), a = Ic([i.update(kc(n)), i.final()]), c = [o, kc(":"), a];
      M(this, wr) === "aes-256-gcm" && c.push(i.getAuthTag()), n = Ic(c);
    }
    if (Se.env.SNAP)
      ae.writeFileSync(this.path, n, { mode: M(this, yt).configFileMode });
    else
      try {
        Wy(this.path, n, { mode: M(this, yt).configFileMode });
      } catch (o) {
        if ((o == null ? void 0 : o.code) === "EXDEV") {
          ae.writeFileSync(this.path, n, { mode: M(this, yt).configFileMode });
          return;
        }
        throw o;
      }
  }
  _watch() {
    if (this._ensureDirectory(), ae.existsSync(this.path) || this._write(vn()), Se.platform === "win32" || Se.platform === "darwin") {
      M(this, tn) ?? ie(this, tn, Rm(() => {
        this.events.dispatchEvent(new Event("change"));
      }, { wait: 100 }));
      const t = de.dirname(this.path), n = de.basename(this.path);
      ie(this, _r, ae.watch(t, { persistent: !1, encoding: "utf8" }, (r, o) => {
        o && o !== n || typeof M(this, tn) == "function" && M(this, tn).call(this);
      }));
    } else
      M(this, tn) ?? ie(this, tn, Rm(() => {
        this.events.dispatchEvent(new Event("change"));
      }, { wait: 1e3 })), ae.watchFile(this.path, { persistent: !1 }, (t, n) => {
        typeof M(this, tn) == "function" && M(this, tn).call(this);
      }), ie(this, so, !0);
  }
  _migrate(t, n, r) {
    let o = this._get(jc, "0.0.0");
    const s = Object.keys(t).filter((a) => this._shouldPerformMigration(a, o, n));
    let i = structuredClone(this.store);
    for (const a of s)
      try {
        r && r(this, {
          fromVersion: o,
          toVersion: a,
          finalVersion: n,
          versions: s
        });
        const c = t[a];
        c == null || c(this), this._set(jc, a), o = a, i = structuredClone(this.store);
      } catch (c) {
        this.store = i;
        const p = c instanceof Error ? c.message : String(c);
        throw new Error(`Something went wrong during the migration! Changes applied to the store until this failed migration will be restored. ${p}`);
      }
    (this._isVersionInRangeFormat(o) || !Vr.eq(o, n)) && this._set(jc, n);
  }
  _containsReservedKey(t) {
    return typeof t == "string" ? this._isReservedKeyPath(t) : !t || typeof t != "object" ? !1 : this._objectContainsReservedKey(t);
  }
  _objectContainsReservedKey(t) {
    if (!t || typeof t != "object")
      return !1;
    for (const [n, r] of Object.entries(t))
      if (this._isReservedKeyPath(n) || this._objectContainsReservedKey(r))
        return !0;
    return !1;
  }
  _isReservedKeyPath(t) {
    return t === Un || t.startsWith(`${Un}.`);
  }
  _isVersionInRangeFormat(t) {
    return Vr.clean(t) === null;
  }
  _shouldPerformMigration(t, n, r) {
    return this._isVersionInRangeFormat(t) ? n !== "0.0.0" && Vr.satisfies(n, t) ? !1 : Vr.satisfies(r, t) : !(Vr.lte(t, n) || Vr.gt(t, r));
  }
  _get(t, n) {
    return Nf(this.store, t, n);
  }
  _set(t, n) {
    const { store: r } = this;
    As(r, t, n), this.store = r;
  }
}
Bn = new WeakMap(), Gn = new WeakMap(), wr = new WeakMap(), yt = new WeakMap(), Pt = new WeakMap(), xr = new WeakMap(), _r = new WeakMap(), so = new WeakMap(), tn = new WeakMap(), Ue = new WeakSet(), Kv = function(t) {
  const n = {
    configName: "config",
    fileExtension: "json",
    projectSuffix: "nodejs",
    clearInvalidConfig: !1,
    accessPropertiesByDotNotation: !0,
    configFileMode: 438,
    ...t
  };
  if (n.encryptionAlgorithm ?? (n.encryptionAlgorithm = Jm), !Vfe(n.encryptionAlgorithm))
    throw new TypeError(`The \`encryptionAlgorithm\` option must be one of: ${[...Xv].join(", ")}`);
  if (!n.cwd) {
    if (!n.projectName)
      throw new Error("Please specify the `projectName` option.");
    n.cwd = vZ(n.projectName, { suffix: n.projectSuffix }).config;
  }
  return typeof n.fileExtension == "string" && (n.fileExtension = n.fileExtension.replace(/^\.+/, "")), n;
}, Wv = function(t) {
  if (!(t.schema ?? t.ajvOptions ?? t.rootSchema))
    return;
  if (t.schema && typeof t.schema != "object")
    throw new TypeError("The `schema` option must be an object.");
  const n = Due.default, r = new bie.Ajv2020({
    allErrors: !0,
    useDefaults: !0,
    ...t.ajvOptions
  });
  n(r);
  const o = {
    ...t.rootSchema,
    type: "object",
    properties: t.schema
  };
  ie(this, Bn, r.compile(o)), ne(this, Ue, Jv).call(this, t.schema);
}, Jv = function(t) {
  const n = Object.entries(t ?? {});
  for (const [r, o] of n) {
    if (!o || typeof o != "object" || !Object.hasOwn(o, "default"))
      continue;
    const { default: s } = o;
    s !== void 0 && (M(this, Pt)[r] = s);
  }
}, Yv = function(t) {
  t.defaults && Object.assign(M(this, Pt), t.defaults);
}, Qv = function(t) {
  t.serialize && (this._serialize = t.serialize), t.deserialize && (this._deserialize = t.deserialize);
}, Zv = function(t) {
  const n = typeof t.fileExtension == "string" ? t.fileExtension : void 0, r = n ? `.${n}` : "";
  return de.resolve(t.cwd, `${t.configName ?? "config"}${r}`);
}, eb = function(t) {
  if (t.migrations) {
    ne(this, Ue, tb).call(this, t), this._validate(this.store);
    return;
  }
  const n = this.store, r = Object.assign(vn(), t.defaults ?? {}, n);
  this._validate(r);
  try {
    qd.deepEqual(n, r);
  } catch {
    this.store = r;
  }
}, tb = function(t) {
  const { migrations: n, projectVersion: r } = t;
  if (n) {
    if (!r)
      throw new Error("Please specify the `projectVersion` option.");
    ie(this, xr, !0);
    try {
      const o = this.store, s = Object.assign(vn(), t.defaults ?? {}, o);
      try {
        qd.deepEqual(o, s);
      } catch {
        this._write(s);
      }
      this._migrate(n, r, t.beforeEachMigration);
    } finally {
      ie(this, xr, !1);
    }
  }
};
const { app: hi, ipcMain: Al, shell: Bfe } = hy;
let Qm = !1;
const Zm = () => {
  if (!Al || !hi)
    throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
  const e = {
    defaultCwd: hi.getPath("userData"),
    appVersion: hi.getVersion()
  };
  return Qm || (Al.on("electron-store-get-data", (t) => {
    t.returnValue = e;
  }), Qm = !0), e;
};
class Gfe extends zfe {
  constructor(t) {
    let n, r;
    if (Se.type === "renderer") {
      const o = hy.ipcRenderer.sendSync("electron-store-get-data");
      if (!o)
        throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
      ({ defaultCwd: n, appVersion: r } = o);
    } else Al && hi && ({ defaultCwd: n, appVersion: r } = Zm());
    t = {
      name: "config",
      ...t
    }, t.projectVersion || (t.projectVersion = r), t.cwd ? t.cwd = de.isAbsolute(t.cwd) ? t.cwd : de.join(n, t.cwd) : t.cwd = n, t.configName = t.name, delete t.name, super(t);
  }
  static initRenderer() {
    Zm();
  }
  async openInEditor() {
    const t = await Bfe.openPath(this.path);
    if (t)
      throw new Error(t);
  }
}
class Hfe {
  constructor() {
    Qt(this, "store");
    this.store = new Gfe();
  }
  getFeeds() {
    return this.store.get("feeds") || [];
  }
  addFeed(t) {
    const n = this.getFeeds();
    n.find((r) => r.url === t.url) || (n.push(t), this.store.set("feeds", n));
  }
  removeFeed(t) {
    const n = this.getFeeds().filter((r) => r.url !== t);
    this.store.set("feeds", n);
  }
  getDownloadPath() {
    return this.store.get("downloadPath") || "";
  }
  setDownloadPath(t) {
    this.store.set("downloadPath", t);
  }
  markAsDownloaded(t) {
    const n = this.store.get("downloads") || [];
    n.includes(t) || (n.push(t), this.store.set("downloads", n));
  }
  isDownloaded(t) {
    return (this.store.get("downloads") || []).includes(t);
  }
  getDownloadedEpisodes() {
    return this.store.get("downloads") || [];
  }
}
function nb(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Xfe } = Object.prototype, { getPrototypeOf: ud } = Object, { iterator: va, toStringTag: rb } = Symbol, ba = /* @__PURE__ */ ((e) => (t) => {
  const n = Xfe.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Kt = (e) => (e = e.toLowerCase(), (t) => ba(t) === e), wa = (e) => (t) => typeof t === e, { isArray: No } = Array, ho = wa("undefined");
function xs(e) {
  return e !== null && !ho(e) && e.constructor !== null && !ho(e.constructor) && xt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ob = Kt("ArrayBuffer");
function Kfe(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ob(e.buffer), t;
}
const Wfe = wa("string"), xt = wa("function"), sb = wa("number"), _s = (e) => e !== null && typeof e == "object", Jfe = (e) => e === !0 || e === !1, yi = (e) => {
  if (ba(e) !== "object")
    return !1;
  const t = ud(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(rb in e) && !(va in e);
}, Yfe = (e) => {
  if (!_s(e) || xs(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Qfe = Kt("Date"), Zfe = Kt("File"), eme = Kt("Blob"), tme = Kt("FileList"), nme = (e) => _s(e) && xt(e.pipe), rme = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || xt(e.append) && ((t = ba(e)) === "formdata" || // detect form-data instance
  t === "object" && xt(e.toString) && e.toString() === "[object FormData]"));
}, ome = Kt("URLSearchParams"), [sme, ime, ame, cme] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Kt), lme = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $s(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), No(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (xs(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function ib(e, t) {
  if (xs(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const vr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ab = (e) => !ho(e) && e !== vr;
function Dl() {
  const { caseless: e, skipUndefined: t } = ab(this) && this || {}, n = {}, r = (o, s) => {
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    const i = e && ib(n, s) || s;
    yi(n[i]) && yi(o) ? n[i] = Dl(n[i], o) : yi(o) ? n[i] = Dl({}, o) : No(o) ? n[i] = o.slice() : (!t || !ho(o)) && (n[i] = o);
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && $s(arguments[o], r);
  return n;
}
const ume = (e, t, n, { allOwnKeys: r } = {}) => ($s(
  t,
  (o, s) => {
    n && xt(o) ? Object.defineProperty(e, s, {
      value: nb(o, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, s, {
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), pme = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), dme = (e, t, n, r) => {
  e.prototype = Object.create(
    t.prototype,
    r
  ), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, fme = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && ud(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, mme = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, hme = (e) => {
  if (!e) return null;
  if (No(e)) return e;
  let t = e.length;
  if (!sb(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, yme = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ud(Uint8Array)), gme = (e, t) => {
  const r = (e && e[va]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, vme = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, bme = Kt("HTMLFormElement"), wme = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), eh = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), xme = Kt("RegExp"), cb = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  $s(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, _me = (e) => {
  cb(e, (t, n) => {
    if (xt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (xt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, $me = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return No(e) ? r(e) : r(String(e).split(t)), n;
}, Eme = () => {
}, Sme = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Tme(e) {
  return !!(e && xt(e.append) && e[rb] === "FormData" && e[va]);
}
const Ome = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (_s(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (xs(r))
        return r;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = No(r) ? [] : {};
        return $s(r, (i, a) => {
          const c = n(i, o + 1);
          !ho(c) && (s[a] = c);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, Pme = Kt("AsyncFunction"), Nme = (e) => e && (_s(e) || xt(e)) && xt(e.then) && xt(e.catch), lb = ((e, t) => e ? setImmediate : t ? ((n, r) => (vr.addEventListener(
  "message",
  ({ source: o, data: s }) => {
    o === vr && s === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), vr.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", xt(vr.postMessage)), Rme = typeof queueMicrotask < "u" ? queueMicrotask.bind(vr) : typeof process < "u" && process.nextTick || lb, Ame = (e) => e != null && xt(e[va]), L = {
  isArray: No,
  isArrayBuffer: ob,
  isBuffer: xs,
  isFormData: rme,
  isArrayBufferView: Kfe,
  isString: Wfe,
  isNumber: sb,
  isBoolean: Jfe,
  isObject: _s,
  isPlainObject: yi,
  isEmptyObject: Yfe,
  isReadableStream: sme,
  isRequest: ime,
  isResponse: ame,
  isHeaders: cme,
  isUndefined: ho,
  isDate: Qfe,
  isFile: Zfe,
  isBlob: eme,
  isRegExp: xme,
  isFunction: xt,
  isStream: nme,
  isURLSearchParams: ome,
  isTypedArray: yme,
  isFileList: tme,
  forEach: $s,
  merge: Dl,
  extend: ume,
  trim: lme,
  stripBOM: pme,
  inherits: dme,
  toFlatObject: fme,
  kindOf: ba,
  kindOfTest: Kt,
  endsWith: mme,
  toArray: hme,
  forEachEntry: gme,
  matchAll: vme,
  isHTMLForm: bme,
  hasOwnProperty: eh,
  hasOwnProp: eh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: cb,
  freezeMethods: _me,
  toObjectSet: $me,
  toCamelCase: wme,
  noop: Eme,
  toFiniteNumber: Sme,
  findKey: ib,
  global: vr,
  isContextDefined: ab,
  isSpecCompliantForm: Tme,
  toJSONObject: Ome,
  isAsyncFn: Pme,
  isThenable: Nme,
  setImmediate: lb,
  asap: Rme,
  isIterable: Ame
};
let W = class ub extends Error {
  static from(t, n, r, o, s, i) {
    const a = new ub(t.message, n || t.code, r, o, s);
    return a.cause = t, a.name = t.name, i && Object.assign(a, i), a;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, r, o, s) {
    super(t), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), o && (this.request = o), s && (this.response = s, this.status = s.status);
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: L.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
W.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
W.ERR_BAD_OPTION = "ERR_BAD_OPTION";
W.ECONNABORTED = "ECONNABORTED";
W.ETIMEDOUT = "ETIMEDOUT";
W.ERR_NETWORK = "ERR_NETWORK";
W.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
W.ERR_DEPRECATED = "ERR_DEPRECATED";
W.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
W.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
W.ERR_CANCELED = "ERR_CANCELED";
W.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
W.ERR_INVALID_URL = "ERR_INVALID_URL";
var pb = lt.Stream, Dme = er, Ime = Wt;
function Wt() {
  this.source = null, this.dataSize = 0, this.maxDataSize = 1024 * 1024, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
}
Dme.inherits(Wt, pb);
Wt.create = function(e, t) {
  var n = new this();
  t = t || {};
  for (var r in t)
    n[r] = t[r];
  n.source = e;
  var o = e.emit;
  return e.emit = function() {
    return n._handleEmit(arguments), o.apply(e, arguments);
  }, e.on("error", function() {
  }), n.pauseStream && e.pause(), n;
};
Object.defineProperty(Wt.prototype, "readable", {
  configurable: !0,
  enumerable: !0,
  get: function() {
    return this.source.readable;
  }
});
Wt.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};
Wt.prototype.resume = function() {
  this._released || this.release(), this.source.resume();
};
Wt.prototype.pause = function() {
  this.source.pause();
};
Wt.prototype.release = function() {
  this._released = !0, this._bufferedEvents.forEach((function(e) {
    this.emit.apply(this, e);
  }).bind(this)), this._bufferedEvents = [];
};
Wt.prototype.pipe = function() {
  var e = pb.prototype.pipe.apply(this, arguments);
  return this.resume(), e;
};
Wt.prototype._handleEmit = function(e) {
  if (this._released) {
    this.emit.apply(this, e);
    return;
  }
  e[0] === "data" && (this.dataSize += e[1].length, this._checkIfMaxDataSizeExceeded()), this._bufferedEvents.push(e);
};
Wt.prototype._checkIfMaxDataSizeExceeded = function() {
  if (!this._maxDataSizeExceeded && !(this.dataSize <= this.maxDataSize)) {
    this._maxDataSizeExceeded = !0;
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", new Error(e));
  }
};
var kme = er, db = lt.Stream, th = Ime, Cme = Re;
function Re() {
  this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2 * 1024 * 1024, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
}
kme.inherits(Re, db);
Re.create = function(e) {
  var t = new this();
  e = e || {};
  for (var n in e)
    t[n] = e[n];
  return t;
};
Re.isStreamLike = function(e) {
  return typeof e != "function" && typeof e != "string" && typeof e != "boolean" && typeof e != "number" && !Buffer.isBuffer(e);
};
Re.prototype.append = function(e) {
  var t = Re.isStreamLike(e);
  if (t) {
    if (!(e instanceof th)) {
      var n = th.create(e, {
        maxDataSize: 1 / 0,
        pauseStream: this.pauseStreams
      });
      e.on("data", this._checkDataSize.bind(this)), e = n;
    }
    this._handleErrors(e), this.pauseStreams && e.pause();
  }
  return this._streams.push(e), this;
};
Re.prototype.pipe = function(e, t) {
  return db.prototype.pipe.call(this, e, t), this.resume(), e;
};
Re.prototype._getNext = function() {
  if (this._currentStream = null, this._insideLoop) {
    this._pendingNext = !0;
    return;
  }
  this._insideLoop = !0;
  try {
    do
      this._pendingNext = !1, this._realGetNext();
    while (this._pendingNext);
  } finally {
    this._insideLoop = !1;
  }
};
Re.prototype._realGetNext = function() {
  var e = this._streams.shift();
  if (typeof e > "u") {
    this.end();
    return;
  }
  if (typeof e != "function") {
    this._pipeNext(e);
    return;
  }
  var t = e;
  t((function(n) {
    var r = Re.isStreamLike(n);
    r && (n.on("data", this._checkDataSize.bind(this)), this._handleErrors(n)), this._pipeNext(n);
  }).bind(this));
};
Re.prototype._pipeNext = function(e) {
  this._currentStream = e;
  var t = Re.isStreamLike(e);
  if (t) {
    e.on("end", this._getNext.bind(this)), e.pipe(this, { end: !1 });
    return;
  }
  var n = e;
  this.write(n), this._getNext();
};
Re.prototype._handleErrors = function(e) {
  var t = this;
  e.on("error", function(n) {
    t._emitError(n);
  });
};
Re.prototype.write = function(e) {
  this.emit("data", e);
};
Re.prototype.pause = function() {
  this.pauseStreams && (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function" && this._currentStream.pause(), this.emit("pause"));
};
Re.prototype.resume = function() {
  this._released || (this._released = !0, this.writable = !0, this._getNext()), this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function" && this._currentStream.resume(), this.emit("resume");
};
Re.prototype.end = function() {
  this._reset(), this.emit("end");
};
Re.prototype.destroy = function() {
  this._reset(), this.emit("close");
};
Re.prototype._reset = function() {
  this.writable = !1, this._streams = [], this._currentStream = null;
};
Re.prototype._checkDataSize = function() {
  if (this._updateDataSize(), !(this.dataSize <= this.maxDataSize)) {
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(new Error(e));
  }
};
Re.prototype._updateDataSize = function() {
  this.dataSize = 0;
  var e = this;
  this._streams.forEach(function(t) {
    t.dataSize && (e.dataSize += t.dataSize);
  }), this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize);
};
Re.prototype._emitError = function(e) {
  this._reset(), this.emit("error", e);
};
var fb = {};
const jme = {
  "application/1d-interleaved-parityfec": {
    source: "iana"
  },
  "application/3gpdash-qoe-report+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/3gpp-ims+xml": {
    source: "iana",
    compressible: !0
  },
  "application/3gpphal+json": {
    source: "iana",
    compressible: !0
  },
  "application/3gpphalforms+json": {
    source: "iana",
    compressible: !0
  },
  "application/a2l": {
    source: "iana"
  },
  "application/ace+cbor": {
    source: "iana"
  },
  "application/activemessage": {
    source: "iana"
  },
  "application/activity+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-costmap+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-costmapfilter+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-directory+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointcost+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointcostparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointprop+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointpropparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-error+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-networkmap+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-networkmapfilter+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-updatestreamcontrol+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-updatestreamparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/aml": {
    source: "iana"
  },
  "application/andrew-inset": {
    source: "iana",
    extensions: [
      "ez"
    ]
  },
  "application/applefile": {
    source: "iana"
  },
  "application/applixware": {
    source: "apache",
    extensions: [
      "aw"
    ]
  },
  "application/at+jwt": {
    source: "iana"
  },
  "application/atf": {
    source: "iana"
  },
  "application/atfx": {
    source: "iana"
  },
  "application/atom+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atom"
    ]
  },
  "application/atomcat+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomcat"
    ]
  },
  "application/atomdeleted+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomdeleted"
    ]
  },
  "application/atomicmail": {
    source: "iana"
  },
  "application/atomsvc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomsvc"
    ]
  },
  "application/atsc-dwd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dwd"
    ]
  },
  "application/atsc-dynamic-event-message": {
    source: "iana"
  },
  "application/atsc-held+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "held"
    ]
  },
  "application/atsc-rdt+json": {
    source: "iana",
    compressible: !0
  },
  "application/atsc-rsat+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rsat"
    ]
  },
  "application/atxml": {
    source: "iana"
  },
  "application/auth-policy+xml": {
    source: "iana",
    compressible: !0
  },
  "application/bacnet-xdd+zip": {
    source: "iana",
    compressible: !1
  },
  "application/batch-smtp": {
    source: "iana"
  },
  "application/bdoc": {
    compressible: !1,
    extensions: [
      "bdoc"
    ]
  },
  "application/beep+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/calendar+json": {
    source: "iana",
    compressible: !0
  },
  "application/calendar+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xcs"
    ]
  },
  "application/call-completion": {
    source: "iana"
  },
  "application/cals-1840": {
    source: "iana"
  },
  "application/captive+json": {
    source: "iana",
    compressible: !0
  },
  "application/cbor": {
    source: "iana"
  },
  "application/cbor-seq": {
    source: "iana"
  },
  "application/cccex": {
    source: "iana"
  },
  "application/ccmp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ccxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ccxml"
    ]
  },
  "application/cdfx+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cdfx"
    ]
  },
  "application/cdmi-capability": {
    source: "iana",
    extensions: [
      "cdmia"
    ]
  },
  "application/cdmi-container": {
    source: "iana",
    extensions: [
      "cdmic"
    ]
  },
  "application/cdmi-domain": {
    source: "iana",
    extensions: [
      "cdmid"
    ]
  },
  "application/cdmi-object": {
    source: "iana",
    extensions: [
      "cdmio"
    ]
  },
  "application/cdmi-queue": {
    source: "iana",
    extensions: [
      "cdmiq"
    ]
  },
  "application/cdni": {
    source: "iana"
  },
  "application/cea": {
    source: "iana"
  },
  "application/cea-2018+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cellml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cfw": {
    source: "iana"
  },
  "application/city+json": {
    source: "iana",
    compressible: !0
  },
  "application/clr": {
    source: "iana"
  },
  "application/clue+xml": {
    source: "iana",
    compressible: !0
  },
  "application/clue_info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cms": {
    source: "iana"
  },
  "application/cnrp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/coap-group+json": {
    source: "iana",
    compressible: !0
  },
  "application/coap-payload": {
    source: "iana"
  },
  "application/commonground": {
    source: "iana"
  },
  "application/conference-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cose": {
    source: "iana"
  },
  "application/cose-key": {
    source: "iana"
  },
  "application/cose-key-set": {
    source: "iana"
  },
  "application/cpl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cpl"
    ]
  },
  "application/csrattrs": {
    source: "iana"
  },
  "application/csta+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cstadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/csvm+json": {
    source: "iana",
    compressible: !0
  },
  "application/cu-seeme": {
    source: "apache",
    extensions: [
      "cu"
    ]
  },
  "application/cwt": {
    source: "iana"
  },
  "application/cybercash": {
    source: "iana"
  },
  "application/dart": {
    compressible: !0
  },
  "application/dash+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpd"
    ]
  },
  "application/dash-patch+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpp"
    ]
  },
  "application/dashdelta": {
    source: "iana"
  },
  "application/davmount+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "davmount"
    ]
  },
  "application/dca-rft": {
    source: "iana"
  },
  "application/dcd": {
    source: "iana"
  },
  "application/dec-dx": {
    source: "iana"
  },
  "application/dialog-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dicom": {
    source: "iana"
  },
  "application/dicom+json": {
    source: "iana",
    compressible: !0
  },
  "application/dicom+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dii": {
    source: "iana"
  },
  "application/dit": {
    source: "iana"
  },
  "application/dns": {
    source: "iana"
  },
  "application/dns+json": {
    source: "iana",
    compressible: !0
  },
  "application/dns-message": {
    source: "iana"
  },
  "application/docbook+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "dbk"
    ]
  },
  "application/dots+cbor": {
    source: "iana"
  },
  "application/dskpp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dssc+der": {
    source: "iana",
    extensions: [
      "dssc"
    ]
  },
  "application/dssc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdssc"
    ]
  },
  "application/dvcs": {
    source: "iana"
  },
  "application/ecmascript": {
    source: "iana",
    compressible: !0,
    extensions: [
      "es",
      "ecma"
    ]
  },
  "application/edi-consent": {
    source: "iana"
  },
  "application/edi-x12": {
    source: "iana",
    compressible: !1
  },
  "application/edifact": {
    source: "iana",
    compressible: !1
  },
  "application/efi": {
    source: "iana"
  },
  "application/elm+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/elm+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.cap+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/emergencycalldata.comment+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.deviceinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.ecall.msd": {
    source: "iana"
  },
  "application/emergencycalldata.providerinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.serviceinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.subscriberinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.veds+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emma+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "emma"
    ]
  },
  "application/emotionml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "emotionml"
    ]
  },
  "application/encaprtp": {
    source: "iana"
  },
  "application/epp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/epub+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "epub"
    ]
  },
  "application/eshop": {
    source: "iana"
  },
  "application/exi": {
    source: "iana",
    extensions: [
      "exi"
    ]
  },
  "application/expect-ct-report+json": {
    source: "iana",
    compressible: !0
  },
  "application/express": {
    source: "iana",
    extensions: [
      "exp"
    ]
  },
  "application/fastinfoset": {
    source: "iana"
  },
  "application/fastsoap": {
    source: "iana"
  },
  "application/fdt+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "fdt"
    ]
  },
  "application/fhir+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/fhir+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/fido.trusted-apps+json": {
    compressible: !0
  },
  "application/fits": {
    source: "iana"
  },
  "application/flexfec": {
    source: "iana"
  },
  "application/font-sfnt": {
    source: "iana"
  },
  "application/font-tdpfr": {
    source: "iana",
    extensions: [
      "pfr"
    ]
  },
  "application/font-woff": {
    source: "iana",
    compressible: !1
  },
  "application/framework-attributes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/geo+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "geojson"
    ]
  },
  "application/geo+json-seq": {
    source: "iana"
  },
  "application/geopackage+sqlite3": {
    source: "iana"
  },
  "application/geoxacml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/gltf-buffer": {
    source: "iana"
  },
  "application/gml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "gml"
    ]
  },
  "application/gpx+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "gpx"
    ]
  },
  "application/gxf": {
    source: "apache",
    extensions: [
      "gxf"
    ]
  },
  "application/gzip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "gz"
    ]
  },
  "application/h224": {
    source: "iana"
  },
  "application/held+xml": {
    source: "iana",
    compressible: !0
  },
  "application/hjson": {
    extensions: [
      "hjson"
    ]
  },
  "application/http": {
    source: "iana"
  },
  "application/hyperstudio": {
    source: "iana",
    extensions: [
      "stk"
    ]
  },
  "application/ibe-key-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ibe-pkg-reply+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ibe-pp-data": {
    source: "iana"
  },
  "application/iges": {
    source: "iana"
  },
  "application/im-iscomposing+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/index": {
    source: "iana"
  },
  "application/index.cmd": {
    source: "iana"
  },
  "application/index.obj": {
    source: "iana"
  },
  "application/index.response": {
    source: "iana"
  },
  "application/index.vnd": {
    source: "iana"
  },
  "application/inkml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ink",
      "inkml"
    ]
  },
  "application/iotp": {
    source: "iana"
  },
  "application/ipfix": {
    source: "iana",
    extensions: [
      "ipfix"
    ]
  },
  "application/ipp": {
    source: "iana"
  },
  "application/isup": {
    source: "iana"
  },
  "application/its+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "its"
    ]
  },
  "application/java-archive": {
    source: "apache",
    compressible: !1,
    extensions: [
      "jar",
      "war",
      "ear"
    ]
  },
  "application/java-serialized-object": {
    source: "apache",
    compressible: !1,
    extensions: [
      "ser"
    ]
  },
  "application/java-vm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "class"
    ]
  },
  "application/javascript": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "js",
      "mjs"
    ]
  },
  "application/jf2feed+json": {
    source: "iana",
    compressible: !0
  },
  "application/jose": {
    source: "iana"
  },
  "application/jose+json": {
    source: "iana",
    compressible: !0
  },
  "application/jrd+json": {
    source: "iana",
    compressible: !0
  },
  "application/jscalendar+json": {
    source: "iana",
    compressible: !0
  },
  "application/json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "json",
      "map"
    ]
  },
  "application/json-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/json-seq": {
    source: "iana"
  },
  "application/json5": {
    extensions: [
      "json5"
    ]
  },
  "application/jsonml+json": {
    source: "apache",
    compressible: !0,
    extensions: [
      "jsonml"
    ]
  },
  "application/jwk+json": {
    source: "iana",
    compressible: !0
  },
  "application/jwk-set+json": {
    source: "iana",
    compressible: !0
  },
  "application/jwt": {
    source: "iana"
  },
  "application/kpml-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/kpml-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ld+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "jsonld"
    ]
  },
  "application/lgr+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lgr"
    ]
  },
  "application/link-format": {
    source: "iana"
  },
  "application/load-control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/lost+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lostxml"
    ]
  },
  "application/lostsync+xml": {
    source: "iana",
    compressible: !0
  },
  "application/lpf+zip": {
    source: "iana",
    compressible: !1
  },
  "application/lxf": {
    source: "iana"
  },
  "application/mac-binhex40": {
    source: "iana",
    extensions: [
      "hqx"
    ]
  },
  "application/mac-compactpro": {
    source: "apache",
    extensions: [
      "cpt"
    ]
  },
  "application/macwriteii": {
    source: "iana"
  },
  "application/mads+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mads"
    ]
  },
  "application/manifest+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "webmanifest"
    ]
  },
  "application/marc": {
    source: "iana",
    extensions: [
      "mrc"
    ]
  },
  "application/marcxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mrcx"
    ]
  },
  "application/mathematica": {
    source: "iana",
    extensions: [
      "ma",
      "nb",
      "mb"
    ]
  },
  "application/mathml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mathml"
    ]
  },
  "application/mathml-content+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mathml-presentation+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-associated-procedure-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-deregister+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-envelope+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-msk+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-msk-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-protection-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-reception-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-register+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-register-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-schedule+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-user-service-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbox": {
    source: "iana",
    extensions: [
      "mbox"
    ]
  },
  "application/media-policy-dataset+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpf"
    ]
  },
  "application/media_control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mediaservercontrol+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mscml"
    ]
  },
  "application/merge-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/metalink+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "metalink"
    ]
  },
  "application/metalink4+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "meta4"
    ]
  },
  "application/mets+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mets"
    ]
  },
  "application/mf4": {
    source: "iana"
  },
  "application/mikey": {
    source: "iana"
  },
  "application/mipc": {
    source: "iana"
  },
  "application/missing-blocks+cbor-seq": {
    source: "iana"
  },
  "application/mmt-aei+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "maei"
    ]
  },
  "application/mmt-usd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "musd"
    ]
  },
  "application/mods+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mods"
    ]
  },
  "application/moss-keys": {
    source: "iana"
  },
  "application/moss-signature": {
    source: "iana"
  },
  "application/mosskey-data": {
    source: "iana"
  },
  "application/mosskey-request": {
    source: "iana"
  },
  "application/mp21": {
    source: "iana",
    extensions: [
      "m21",
      "mp21"
    ]
  },
  "application/mp4": {
    source: "iana",
    extensions: [
      "mp4s",
      "m4p"
    ]
  },
  "application/mpeg4-generic": {
    source: "iana"
  },
  "application/mpeg4-iod": {
    source: "iana"
  },
  "application/mpeg4-iod-xmt": {
    source: "iana"
  },
  "application/mrb-consumer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mrb-publish+xml": {
    source: "iana",
    compressible: !0
  },
  "application/msc-ivr+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/msc-mixer+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/msword": {
    source: "iana",
    compressible: !1,
    extensions: [
      "doc",
      "dot"
    ]
  },
  "application/mud+json": {
    source: "iana",
    compressible: !0
  },
  "application/multipart-core": {
    source: "iana"
  },
  "application/mxf": {
    source: "iana",
    extensions: [
      "mxf"
    ]
  },
  "application/n-quads": {
    source: "iana",
    extensions: [
      "nq"
    ]
  },
  "application/n-triples": {
    source: "iana",
    extensions: [
      "nt"
    ]
  },
  "application/nasdata": {
    source: "iana"
  },
  "application/news-checkgroups": {
    source: "iana",
    charset: "US-ASCII"
  },
  "application/news-groupinfo": {
    source: "iana",
    charset: "US-ASCII"
  },
  "application/news-transmission": {
    source: "iana"
  },
  "application/nlsml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/node": {
    source: "iana",
    extensions: [
      "cjs"
    ]
  },
  "application/nss": {
    source: "iana"
  },
  "application/oauth-authz-req+jwt": {
    source: "iana"
  },
  "application/oblivious-dns-message": {
    source: "iana"
  },
  "application/ocsp-request": {
    source: "iana"
  },
  "application/ocsp-response": {
    source: "iana"
  },
  "application/octet-stream": {
    source: "iana",
    compressible: !1,
    extensions: [
      "bin",
      "dms",
      "lrf",
      "mar",
      "so",
      "dist",
      "distz",
      "pkg",
      "bpk",
      "dump",
      "elc",
      "deploy",
      "exe",
      "dll",
      "deb",
      "dmg",
      "iso",
      "img",
      "msi",
      "msp",
      "msm",
      "buffer"
    ]
  },
  "application/oda": {
    source: "iana",
    extensions: [
      "oda"
    ]
  },
  "application/odm+xml": {
    source: "iana",
    compressible: !0
  },
  "application/odx": {
    source: "iana"
  },
  "application/oebps-package+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "opf"
    ]
  },
  "application/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ogx"
    ]
  },
  "application/omdoc+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "omdoc"
    ]
  },
  "application/onenote": {
    source: "apache",
    extensions: [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg"
    ]
  },
  "application/opc-nodeset+xml": {
    source: "iana",
    compressible: !0
  },
  "application/oscore": {
    source: "iana"
  },
  "application/oxps": {
    source: "iana",
    extensions: [
      "oxps"
    ]
  },
  "application/p21": {
    source: "iana"
  },
  "application/p21+zip": {
    source: "iana",
    compressible: !1
  },
  "application/p2p-overlay+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "relo"
    ]
  },
  "application/parityfec": {
    source: "iana"
  },
  "application/passport": {
    source: "iana"
  },
  "application/patch-ops-error+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xer"
    ]
  },
  "application/pdf": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pdf"
    ]
  },
  "application/pdx": {
    source: "iana"
  },
  "application/pem-certificate-chain": {
    source: "iana"
  },
  "application/pgp-encrypted": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pgp"
    ]
  },
  "application/pgp-keys": {
    source: "iana",
    extensions: [
      "asc"
    ]
  },
  "application/pgp-signature": {
    source: "iana",
    extensions: [
      "asc",
      "sig"
    ]
  },
  "application/pics-rules": {
    source: "apache",
    extensions: [
      "prf"
    ]
  },
  "application/pidf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/pidf-diff+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/pkcs10": {
    source: "iana",
    extensions: [
      "p10"
    ]
  },
  "application/pkcs12": {
    source: "iana"
  },
  "application/pkcs7-mime": {
    source: "iana",
    extensions: [
      "p7m",
      "p7c"
    ]
  },
  "application/pkcs7-signature": {
    source: "iana",
    extensions: [
      "p7s"
    ]
  },
  "application/pkcs8": {
    source: "iana",
    extensions: [
      "p8"
    ]
  },
  "application/pkcs8-encrypted": {
    source: "iana"
  },
  "application/pkix-attr-cert": {
    source: "iana",
    extensions: [
      "ac"
    ]
  },
  "application/pkix-cert": {
    source: "iana",
    extensions: [
      "cer"
    ]
  },
  "application/pkix-crl": {
    source: "iana",
    extensions: [
      "crl"
    ]
  },
  "application/pkix-pkipath": {
    source: "iana",
    extensions: [
      "pkipath"
    ]
  },
  "application/pkixcmp": {
    source: "iana",
    extensions: [
      "pki"
    ]
  },
  "application/pls+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "pls"
    ]
  },
  "application/poc-settings+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/postscript": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ai",
      "eps",
      "ps"
    ]
  },
  "application/ppsp-tracker+json": {
    source: "iana",
    compressible: !0
  },
  "application/problem+json": {
    source: "iana",
    compressible: !0
  },
  "application/problem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/provenance+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "provx"
    ]
  },
  "application/prs.alvestrand.titrax-sheet": {
    source: "iana"
  },
  "application/prs.cww": {
    source: "iana",
    extensions: [
      "cww"
    ]
  },
  "application/prs.cyn": {
    source: "iana",
    charset: "7-BIT"
  },
  "application/prs.hpub+zip": {
    source: "iana",
    compressible: !1
  },
  "application/prs.nprend": {
    source: "iana"
  },
  "application/prs.plucker": {
    source: "iana"
  },
  "application/prs.rdf-xml-crypt": {
    source: "iana"
  },
  "application/prs.xsf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/pskc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "pskcxml"
    ]
  },
  "application/pvd+json": {
    source: "iana",
    compressible: !0
  },
  "application/qsig": {
    source: "iana"
  },
  "application/raml+yaml": {
    compressible: !0,
    extensions: [
      "raml"
    ]
  },
  "application/raptorfec": {
    source: "iana"
  },
  "application/rdap+json": {
    source: "iana",
    compressible: !0
  },
  "application/rdf+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rdf",
      "owl"
    ]
  },
  "application/reginfo+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rif"
    ]
  },
  "application/relax-ng-compact-syntax": {
    source: "iana",
    extensions: [
      "rnc"
    ]
  },
  "application/remote-printing": {
    source: "iana"
  },
  "application/reputon+json": {
    source: "iana",
    compressible: !0
  },
  "application/resource-lists+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rl"
    ]
  },
  "application/resource-lists-diff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rld"
    ]
  },
  "application/rfc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/riscos": {
    source: "iana"
  },
  "application/rlmi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/rls-services+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rs"
    ]
  },
  "application/route-apd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rapd"
    ]
  },
  "application/route-s-tsid+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sls"
    ]
  },
  "application/route-usd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rusd"
    ]
  },
  "application/rpki-ghostbusters": {
    source: "iana",
    extensions: [
      "gbr"
    ]
  },
  "application/rpki-manifest": {
    source: "iana",
    extensions: [
      "mft"
    ]
  },
  "application/rpki-publication": {
    source: "iana"
  },
  "application/rpki-roa": {
    source: "iana",
    extensions: [
      "roa"
    ]
  },
  "application/rpki-updown": {
    source: "iana"
  },
  "application/rsd+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "rsd"
    ]
  },
  "application/rss+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "rss"
    ]
  },
  "application/rtf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtf"
    ]
  },
  "application/rtploopback": {
    source: "iana"
  },
  "application/rtx": {
    source: "iana"
  },
  "application/samlassertion+xml": {
    source: "iana",
    compressible: !0
  },
  "application/samlmetadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sarif+json": {
    source: "iana",
    compressible: !0
  },
  "application/sarif-external-properties+json": {
    source: "iana",
    compressible: !0
  },
  "application/sbe": {
    source: "iana"
  },
  "application/sbml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sbml"
    ]
  },
  "application/scaip+xml": {
    source: "iana",
    compressible: !0
  },
  "application/scim+json": {
    source: "iana",
    compressible: !0
  },
  "application/scvp-cv-request": {
    source: "iana",
    extensions: [
      "scq"
    ]
  },
  "application/scvp-cv-response": {
    source: "iana",
    extensions: [
      "scs"
    ]
  },
  "application/scvp-vp-request": {
    source: "iana",
    extensions: [
      "spq"
    ]
  },
  "application/scvp-vp-response": {
    source: "iana",
    extensions: [
      "spp"
    ]
  },
  "application/sdp": {
    source: "iana",
    extensions: [
      "sdp"
    ]
  },
  "application/secevent+jwt": {
    source: "iana"
  },
  "application/senml+cbor": {
    source: "iana"
  },
  "application/senml+json": {
    source: "iana",
    compressible: !0
  },
  "application/senml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "senmlx"
    ]
  },
  "application/senml-etch+cbor": {
    source: "iana"
  },
  "application/senml-etch+json": {
    source: "iana",
    compressible: !0
  },
  "application/senml-exi": {
    source: "iana"
  },
  "application/sensml+cbor": {
    source: "iana"
  },
  "application/sensml+json": {
    source: "iana",
    compressible: !0
  },
  "application/sensml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sensmlx"
    ]
  },
  "application/sensml-exi": {
    source: "iana"
  },
  "application/sep+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sep-exi": {
    source: "iana"
  },
  "application/session-info": {
    source: "iana"
  },
  "application/set-payment": {
    source: "iana"
  },
  "application/set-payment-initiation": {
    source: "iana",
    extensions: [
      "setpay"
    ]
  },
  "application/set-registration": {
    source: "iana"
  },
  "application/set-registration-initiation": {
    source: "iana",
    extensions: [
      "setreg"
    ]
  },
  "application/sgml": {
    source: "iana"
  },
  "application/sgml-open-catalog": {
    source: "iana"
  },
  "application/shf+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "shf"
    ]
  },
  "application/sieve": {
    source: "iana",
    extensions: [
      "siv",
      "sieve"
    ]
  },
  "application/simple-filter+xml": {
    source: "iana",
    compressible: !0
  },
  "application/simple-message-summary": {
    source: "iana"
  },
  "application/simplesymbolcontainer": {
    source: "iana"
  },
  "application/sipc": {
    source: "iana"
  },
  "application/slate": {
    source: "iana"
  },
  "application/smil": {
    source: "iana"
  },
  "application/smil+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "smi",
      "smil"
    ]
  },
  "application/smpte336m": {
    source: "iana"
  },
  "application/soap+fastinfoset": {
    source: "iana"
  },
  "application/soap+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sparql-query": {
    source: "iana",
    extensions: [
      "rq"
    ]
  },
  "application/sparql-results+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "srx"
    ]
  },
  "application/spdx+json": {
    source: "iana",
    compressible: !0
  },
  "application/spirits-event+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sql": {
    source: "iana"
  },
  "application/srgs": {
    source: "iana",
    extensions: [
      "gram"
    ]
  },
  "application/srgs+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "grxml"
    ]
  },
  "application/sru+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sru"
    ]
  },
  "application/ssdl+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ssdl"
    ]
  },
  "application/ssml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ssml"
    ]
  },
  "application/stix+json": {
    source: "iana",
    compressible: !0
  },
  "application/swid+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "swidtag"
    ]
  },
  "application/tamp-apex-update": {
    source: "iana"
  },
  "application/tamp-apex-update-confirm": {
    source: "iana"
  },
  "application/tamp-community-update": {
    source: "iana"
  },
  "application/tamp-community-update-confirm": {
    source: "iana"
  },
  "application/tamp-error": {
    source: "iana"
  },
  "application/tamp-sequence-adjust": {
    source: "iana"
  },
  "application/tamp-sequence-adjust-confirm": {
    source: "iana"
  },
  "application/tamp-status-query": {
    source: "iana"
  },
  "application/tamp-status-response": {
    source: "iana"
  },
  "application/tamp-update": {
    source: "iana"
  },
  "application/tamp-update-confirm": {
    source: "iana"
  },
  "application/tar": {
    compressible: !0
  },
  "application/taxii+json": {
    source: "iana",
    compressible: !0
  },
  "application/td+json": {
    source: "iana",
    compressible: !0
  },
  "application/tei+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tei",
      "teicorpus"
    ]
  },
  "application/tetra_isi": {
    source: "iana"
  },
  "application/thraud+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tfi"
    ]
  },
  "application/timestamp-query": {
    source: "iana"
  },
  "application/timestamp-reply": {
    source: "iana"
  },
  "application/timestamped-data": {
    source: "iana",
    extensions: [
      "tsd"
    ]
  },
  "application/tlsrpt+gzip": {
    source: "iana"
  },
  "application/tlsrpt+json": {
    source: "iana",
    compressible: !0
  },
  "application/tnauthlist": {
    source: "iana"
  },
  "application/token-introspection+jwt": {
    source: "iana"
  },
  "application/toml": {
    compressible: !0,
    extensions: [
      "toml"
    ]
  },
  "application/trickle-ice-sdpfrag": {
    source: "iana"
  },
  "application/trig": {
    source: "iana",
    extensions: [
      "trig"
    ]
  },
  "application/ttml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ttml"
    ]
  },
  "application/tve-trigger": {
    source: "iana"
  },
  "application/tzif": {
    source: "iana"
  },
  "application/tzif-leap": {
    source: "iana"
  },
  "application/ubjson": {
    compressible: !1,
    extensions: [
      "ubj"
    ]
  },
  "application/ulpfec": {
    source: "iana"
  },
  "application/urc-grpsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/urc-ressheet+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rsheet"
    ]
  },
  "application/urc-targetdesc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "td"
    ]
  },
  "application/urc-uisocketdesc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vcard+json": {
    source: "iana",
    compressible: !0
  },
  "application/vcard+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vemmi": {
    source: "iana"
  },
  "application/vividence.scriptfile": {
    source: "apache"
  },
  "application/vnd.1000minds.decision-model+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "1km"
    ]
  },
  "application/vnd.3gpp-prose+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp-prose-pc3ch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp-v2x-local-service-information": {
    source: "iana"
  },
  "application/vnd.3gpp.5gnas": {
    source: "iana"
  },
  "application/vnd.3gpp.access-transfer-events+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.bsf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.gmop+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.gtpc": {
    source: "iana"
  },
  "application/vnd.3gpp.interworking-data": {
    source: "iana"
  },
  "application/vnd.3gpp.lpp": {
    source: "iana"
  },
  "application/vnd.3gpp.mc-signalling-ear": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-payload": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-signalling": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-floor-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-location-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-signed+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-ue-init-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-location-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-transmission-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mid-call+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.ngap": {
    source: "iana"
  },
  "application/vnd.3gpp.pfcp": {
    source: "iana"
  },
  "application/vnd.3gpp.pic-bw-large": {
    source: "iana",
    extensions: [
      "plb"
    ]
  },
  "application/vnd.3gpp.pic-bw-small": {
    source: "iana",
    extensions: [
      "psb"
    ]
  },
  "application/vnd.3gpp.pic-bw-var": {
    source: "iana",
    extensions: [
      "pvb"
    ]
  },
  "application/vnd.3gpp.s1ap": {
    source: "iana"
  },
  "application/vnd.3gpp.sms": {
    source: "iana"
  },
  "application/vnd.3gpp.sms+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.srvcc-ext+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.srvcc-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.state-and-event-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.ussd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp2.bcmcsinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp2.sms": {
    source: "iana"
  },
  "application/vnd.3gpp2.tcap": {
    source: "iana",
    extensions: [
      "tcap"
    ]
  },
  "application/vnd.3lightssoftware.imagescal": {
    source: "iana"
  },
  "application/vnd.3m.post-it-notes": {
    source: "iana",
    extensions: [
      "pwn"
    ]
  },
  "application/vnd.accpac.simply.aso": {
    source: "iana",
    extensions: [
      "aso"
    ]
  },
  "application/vnd.accpac.simply.imp": {
    source: "iana",
    extensions: [
      "imp"
    ]
  },
  "application/vnd.acucobol": {
    source: "iana",
    extensions: [
      "acu"
    ]
  },
  "application/vnd.acucorp": {
    source: "iana",
    extensions: [
      "atc",
      "acutc"
    ]
  },
  "application/vnd.adobe.air-application-installer-package+zip": {
    source: "apache",
    compressible: !1,
    extensions: [
      "air"
    ]
  },
  "application/vnd.adobe.flash.movie": {
    source: "iana"
  },
  "application/vnd.adobe.formscentral.fcdt": {
    source: "iana",
    extensions: [
      "fcdt"
    ]
  },
  "application/vnd.adobe.fxp": {
    source: "iana",
    extensions: [
      "fxp",
      "fxpl"
    ]
  },
  "application/vnd.adobe.partial-upload": {
    source: "iana"
  },
  "application/vnd.adobe.xdp+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdp"
    ]
  },
  "application/vnd.adobe.xfdf": {
    source: "iana",
    extensions: [
      "xfdf"
    ]
  },
  "application/vnd.aether.imp": {
    source: "iana"
  },
  "application/vnd.afpc.afplinedata": {
    source: "iana"
  },
  "application/vnd.afpc.afplinedata-pagedef": {
    source: "iana"
  },
  "application/vnd.afpc.cmoca-cmresource": {
    source: "iana"
  },
  "application/vnd.afpc.foca-charset": {
    source: "iana"
  },
  "application/vnd.afpc.foca-codedfont": {
    source: "iana"
  },
  "application/vnd.afpc.foca-codepage": {
    source: "iana"
  },
  "application/vnd.afpc.modca": {
    source: "iana"
  },
  "application/vnd.afpc.modca-cmtable": {
    source: "iana"
  },
  "application/vnd.afpc.modca-formdef": {
    source: "iana"
  },
  "application/vnd.afpc.modca-mediummap": {
    source: "iana"
  },
  "application/vnd.afpc.modca-objectcontainer": {
    source: "iana"
  },
  "application/vnd.afpc.modca-overlay": {
    source: "iana"
  },
  "application/vnd.afpc.modca-pagesegment": {
    source: "iana"
  },
  "application/vnd.age": {
    source: "iana",
    extensions: [
      "age"
    ]
  },
  "application/vnd.ah-barcode": {
    source: "iana"
  },
  "application/vnd.ahead.space": {
    source: "iana",
    extensions: [
      "ahead"
    ]
  },
  "application/vnd.airzip.filesecure.azf": {
    source: "iana",
    extensions: [
      "azf"
    ]
  },
  "application/vnd.airzip.filesecure.azs": {
    source: "iana",
    extensions: [
      "azs"
    ]
  },
  "application/vnd.amadeus+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.amazon.ebook": {
    source: "apache",
    extensions: [
      "azw"
    ]
  },
  "application/vnd.amazon.mobi8-ebook": {
    source: "iana"
  },
  "application/vnd.americandynamics.acc": {
    source: "iana",
    extensions: [
      "acc"
    ]
  },
  "application/vnd.amiga.ami": {
    source: "iana",
    extensions: [
      "ami"
    ]
  },
  "application/vnd.amundsen.maze+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.android.ota": {
    source: "iana"
  },
  "application/vnd.android.package-archive": {
    source: "apache",
    compressible: !1,
    extensions: [
      "apk"
    ]
  },
  "application/vnd.anki": {
    source: "iana"
  },
  "application/vnd.anser-web-certificate-issue-initiation": {
    source: "iana",
    extensions: [
      "cii"
    ]
  },
  "application/vnd.anser-web-funds-transfer-initiation": {
    source: "apache",
    extensions: [
      "fti"
    ]
  },
  "application/vnd.antix.game-component": {
    source: "iana",
    extensions: [
      "atx"
    ]
  },
  "application/vnd.apache.arrow.file": {
    source: "iana"
  },
  "application/vnd.apache.arrow.stream": {
    source: "iana"
  },
  "application/vnd.apache.thrift.binary": {
    source: "iana"
  },
  "application/vnd.apache.thrift.compact": {
    source: "iana"
  },
  "application/vnd.apache.thrift.json": {
    source: "iana"
  },
  "application/vnd.api+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.aplextor.warrp+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.apothekende.reservation+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.apple.installer+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpkg"
    ]
  },
  "application/vnd.apple.keynote": {
    source: "iana",
    extensions: [
      "key"
    ]
  },
  "application/vnd.apple.mpegurl": {
    source: "iana",
    extensions: [
      "m3u8"
    ]
  },
  "application/vnd.apple.numbers": {
    source: "iana",
    extensions: [
      "numbers"
    ]
  },
  "application/vnd.apple.pages": {
    source: "iana",
    extensions: [
      "pages"
    ]
  },
  "application/vnd.apple.pkpass": {
    compressible: !1,
    extensions: [
      "pkpass"
    ]
  },
  "application/vnd.arastra.swi": {
    source: "iana"
  },
  "application/vnd.aristanetworks.swi": {
    source: "iana",
    extensions: [
      "swi"
    ]
  },
  "application/vnd.artisan+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.artsquare": {
    source: "iana"
  },
  "application/vnd.astraea-software.iota": {
    source: "iana",
    extensions: [
      "iota"
    ]
  },
  "application/vnd.audiograph": {
    source: "iana",
    extensions: [
      "aep"
    ]
  },
  "application/vnd.autopackage": {
    source: "iana"
  },
  "application/vnd.avalon+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.avistar+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.balsamiq.bmml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "bmml"
    ]
  },
  "application/vnd.balsamiq.bmpr": {
    source: "iana"
  },
  "application/vnd.banana-accounting": {
    source: "iana"
  },
  "application/vnd.bbf.usp.error": {
    source: "iana"
  },
  "application/vnd.bbf.usp.msg": {
    source: "iana"
  },
  "application/vnd.bbf.usp.msg+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.bekitzur-stech+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.bint.med-content": {
    source: "iana"
  },
  "application/vnd.biopax.rdf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.blink-idb-value-wrapper": {
    source: "iana"
  },
  "application/vnd.blueice.multipass": {
    source: "iana",
    extensions: [
      "mpm"
    ]
  },
  "application/vnd.bluetooth.ep.oob": {
    source: "iana"
  },
  "application/vnd.bluetooth.le.oob": {
    source: "iana"
  },
  "application/vnd.bmi": {
    source: "iana",
    extensions: [
      "bmi"
    ]
  },
  "application/vnd.bpf": {
    source: "iana"
  },
  "application/vnd.bpf3": {
    source: "iana"
  },
  "application/vnd.businessobjects": {
    source: "iana",
    extensions: [
      "rep"
    ]
  },
  "application/vnd.byu.uapi+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cab-jscript": {
    source: "iana"
  },
  "application/vnd.canon-cpdl": {
    source: "iana"
  },
  "application/vnd.canon-lips": {
    source: "iana"
  },
  "application/vnd.capasystems-pg+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cendio.thinlinc.clientconf": {
    source: "iana"
  },
  "application/vnd.century-systems.tcp_stream": {
    source: "iana"
  },
  "application/vnd.chemdraw+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cdxml"
    ]
  },
  "application/vnd.chess-pgn": {
    source: "iana"
  },
  "application/vnd.chipnuts.karaoke-mmd": {
    source: "iana",
    extensions: [
      "mmd"
    ]
  },
  "application/vnd.ciedi": {
    source: "iana"
  },
  "application/vnd.cinderella": {
    source: "iana",
    extensions: [
      "cdy"
    ]
  },
  "application/vnd.cirpack.isdn-ext": {
    source: "iana"
  },
  "application/vnd.citationstyles.style+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "csl"
    ]
  },
  "application/vnd.claymore": {
    source: "iana",
    extensions: [
      "cla"
    ]
  },
  "application/vnd.cloanto.rp9": {
    source: "iana",
    extensions: [
      "rp9"
    ]
  },
  "application/vnd.clonk.c4group": {
    source: "iana",
    extensions: [
      "c4g",
      "c4d",
      "c4f",
      "c4p",
      "c4u"
    ]
  },
  "application/vnd.cluetrust.cartomobile-config": {
    source: "iana",
    extensions: [
      "c11amc"
    ]
  },
  "application/vnd.cluetrust.cartomobile-config-pkg": {
    source: "iana",
    extensions: [
      "c11amz"
    ]
  },
  "application/vnd.coffeescript": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.document": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.document-template": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.presentation": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.presentation-template": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet-template": {
    source: "iana"
  },
  "application/vnd.collection+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.collection.doc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.collection.next+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.comicbook+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.comicbook-rar": {
    source: "iana"
  },
  "application/vnd.commerce-battelle": {
    source: "iana"
  },
  "application/vnd.commonspace": {
    source: "iana",
    extensions: [
      "csp"
    ]
  },
  "application/vnd.contact.cmsg": {
    source: "iana",
    extensions: [
      "cdbcmsg"
    ]
  },
  "application/vnd.coreos.ignition+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cosmocaller": {
    source: "iana",
    extensions: [
      "cmc"
    ]
  },
  "application/vnd.crick.clicker": {
    source: "iana",
    extensions: [
      "clkx"
    ]
  },
  "application/vnd.crick.clicker.keyboard": {
    source: "iana",
    extensions: [
      "clkk"
    ]
  },
  "application/vnd.crick.clicker.palette": {
    source: "iana",
    extensions: [
      "clkp"
    ]
  },
  "application/vnd.crick.clicker.template": {
    source: "iana",
    extensions: [
      "clkt"
    ]
  },
  "application/vnd.crick.clicker.wordbank": {
    source: "iana",
    extensions: [
      "clkw"
    ]
  },
  "application/vnd.criticaltools.wbs+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wbs"
    ]
  },
  "application/vnd.cryptii.pipe+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.crypto-shade-file": {
    source: "iana"
  },
  "application/vnd.cryptomator.encrypted": {
    source: "iana"
  },
  "application/vnd.cryptomator.vault": {
    source: "iana"
  },
  "application/vnd.ctc-posml": {
    source: "iana",
    extensions: [
      "pml"
    ]
  },
  "application/vnd.ctct.ws+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cups-pdf": {
    source: "iana"
  },
  "application/vnd.cups-postscript": {
    source: "iana"
  },
  "application/vnd.cups-ppd": {
    source: "iana",
    extensions: [
      "ppd"
    ]
  },
  "application/vnd.cups-raster": {
    source: "iana"
  },
  "application/vnd.cups-raw": {
    source: "iana"
  },
  "application/vnd.curl": {
    source: "iana"
  },
  "application/vnd.curl.car": {
    source: "apache",
    extensions: [
      "car"
    ]
  },
  "application/vnd.curl.pcurl": {
    source: "apache",
    extensions: [
      "pcurl"
    ]
  },
  "application/vnd.cyan.dean.root+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cybank": {
    source: "iana"
  },
  "application/vnd.cyclonedx+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cyclonedx+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.d2l.coursepackage1p0+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.d3m-dataset": {
    source: "iana"
  },
  "application/vnd.d3m-problem": {
    source: "iana"
  },
  "application/vnd.dart": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dart"
    ]
  },
  "application/vnd.data-vision.rdz": {
    source: "iana",
    extensions: [
      "rdz"
    ]
  },
  "application/vnd.datapackage+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dataresource+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dbf": {
    source: "iana",
    extensions: [
      "dbf"
    ]
  },
  "application/vnd.debian.binary-package": {
    source: "iana"
  },
  "application/vnd.dece.data": {
    source: "iana",
    extensions: [
      "uvf",
      "uvvf",
      "uvd",
      "uvvd"
    ]
  },
  "application/vnd.dece.ttml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uvt",
      "uvvt"
    ]
  },
  "application/vnd.dece.unspecified": {
    source: "iana",
    extensions: [
      "uvx",
      "uvvx"
    ]
  },
  "application/vnd.dece.zip": {
    source: "iana",
    extensions: [
      "uvz",
      "uvvz"
    ]
  },
  "application/vnd.denovo.fcselayout-link": {
    source: "iana",
    extensions: [
      "fe_launch"
    ]
  },
  "application/vnd.desmume.movie": {
    source: "iana"
  },
  "application/vnd.dir-bi.plate-dl-nosuffix": {
    source: "iana"
  },
  "application/vnd.dm.delegation+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dna": {
    source: "iana",
    extensions: [
      "dna"
    ]
  },
  "application/vnd.document+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dolby.mlp": {
    source: "apache",
    extensions: [
      "mlp"
    ]
  },
  "application/vnd.dolby.mobile.1": {
    source: "iana"
  },
  "application/vnd.dolby.mobile.2": {
    source: "iana"
  },
  "application/vnd.doremir.scorecloud-binary-document": {
    source: "iana"
  },
  "application/vnd.dpgraph": {
    source: "iana",
    extensions: [
      "dpg"
    ]
  },
  "application/vnd.dreamfactory": {
    source: "iana",
    extensions: [
      "dfac"
    ]
  },
  "application/vnd.drive+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ds-keypoint": {
    source: "apache",
    extensions: [
      "kpxx"
    ]
  },
  "application/vnd.dtg.local": {
    source: "iana"
  },
  "application/vnd.dtg.local.flash": {
    source: "iana"
  },
  "application/vnd.dtg.local.html": {
    source: "iana"
  },
  "application/vnd.dvb.ait": {
    source: "iana",
    extensions: [
      "ait"
    ]
  },
  "application/vnd.dvb.dvbisl+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.dvbj": {
    source: "iana"
  },
  "application/vnd.dvb.esgcontainer": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcdftnotifaccess": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgaccess": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgaccess2": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgpdd": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcroaming": {
    source: "iana"
  },
  "application/vnd.dvb.iptv.alfec-base": {
    source: "iana"
  },
  "application/vnd.dvb.iptv.alfec-enhancement": {
    source: "iana"
  },
  "application/vnd.dvb.notif-aggregate-root+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-container+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-generic+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-msglist+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-registration-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-registration-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-init+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.pfr": {
    source: "iana"
  },
  "application/vnd.dvb.service": {
    source: "iana",
    extensions: [
      "svc"
    ]
  },
  "application/vnd.dxr": {
    source: "iana"
  },
  "application/vnd.dynageo": {
    source: "iana",
    extensions: [
      "geo"
    ]
  },
  "application/vnd.dzr": {
    source: "iana"
  },
  "application/vnd.easykaraoke.cdgdownload": {
    source: "iana"
  },
  "application/vnd.ecdis-update": {
    source: "iana"
  },
  "application/vnd.ecip.rlp": {
    source: "iana"
  },
  "application/vnd.eclipse.ditto+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ecowin.chart": {
    source: "iana",
    extensions: [
      "mag"
    ]
  },
  "application/vnd.ecowin.filerequest": {
    source: "iana"
  },
  "application/vnd.ecowin.fileupdate": {
    source: "iana"
  },
  "application/vnd.ecowin.series": {
    source: "iana"
  },
  "application/vnd.ecowin.seriesrequest": {
    source: "iana"
  },
  "application/vnd.ecowin.seriesupdate": {
    source: "iana"
  },
  "application/vnd.efi.img": {
    source: "iana"
  },
  "application/vnd.efi.iso": {
    source: "iana"
  },
  "application/vnd.emclient.accessrequest+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.enliven": {
    source: "iana",
    extensions: [
      "nml"
    ]
  },
  "application/vnd.enphase.envoy": {
    source: "iana"
  },
  "application/vnd.eprints.data+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.epson.esf": {
    source: "iana",
    extensions: [
      "esf"
    ]
  },
  "application/vnd.epson.msf": {
    source: "iana",
    extensions: [
      "msf"
    ]
  },
  "application/vnd.epson.quickanime": {
    source: "iana",
    extensions: [
      "qam"
    ]
  },
  "application/vnd.epson.salt": {
    source: "iana",
    extensions: [
      "slt"
    ]
  },
  "application/vnd.epson.ssf": {
    source: "iana",
    extensions: [
      "ssf"
    ]
  },
  "application/vnd.ericsson.quickcall": {
    source: "iana"
  },
  "application/vnd.espass-espass+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.eszigno3+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "es3",
      "et3"
    ]
  },
  "application/vnd.etsi.aoc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.asic-e+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.etsi.asic-s+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.etsi.cug+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvcommand+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvdiscovery+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-bc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-cod+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-npvr+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvservice+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsync+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvueprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.mcid+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.mheg5": {
    source: "iana"
  },
  "application/vnd.etsi.overload-control-policy-dataset+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.pstn+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.sci+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.simservs+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.timestamp-token": {
    source: "iana"
  },
  "application/vnd.etsi.tsl+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.tsl.der": {
    source: "iana"
  },
  "application/vnd.eu.kasparian.car+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.eudora.data": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.profile": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.settings": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.theme": {
    source: "iana"
  },
  "application/vnd.exstream-empower+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.exstream-package": {
    source: "iana"
  },
  "application/vnd.ezpix-album": {
    source: "iana",
    extensions: [
      "ez2"
    ]
  },
  "application/vnd.ezpix-package": {
    source: "iana",
    extensions: [
      "ez3"
    ]
  },
  "application/vnd.f-secure.mobile": {
    source: "iana"
  },
  "application/vnd.familysearch.gedcom+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.fastcopy-disk-image": {
    source: "iana"
  },
  "application/vnd.fdf": {
    source: "iana",
    extensions: [
      "fdf"
    ]
  },
  "application/vnd.fdsn.mseed": {
    source: "iana",
    extensions: [
      "mseed"
    ]
  },
  "application/vnd.fdsn.seed": {
    source: "iana",
    extensions: [
      "seed",
      "dataless"
    ]
  },
  "application/vnd.ffsns": {
    source: "iana"
  },
  "application/vnd.ficlab.flb+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.filmit.zfc": {
    source: "iana"
  },
  "application/vnd.fints": {
    source: "iana"
  },
  "application/vnd.firemonkeys.cloudcell": {
    source: "iana"
  },
  "application/vnd.flographit": {
    source: "iana",
    extensions: [
      "gph"
    ]
  },
  "application/vnd.fluxtime.clip": {
    source: "iana",
    extensions: [
      "ftc"
    ]
  },
  "application/vnd.font-fontforge-sfd": {
    source: "iana"
  },
  "application/vnd.framemaker": {
    source: "iana",
    extensions: [
      "fm",
      "frame",
      "maker",
      "book"
    ]
  },
  "application/vnd.frogans.fnc": {
    source: "iana",
    extensions: [
      "fnc"
    ]
  },
  "application/vnd.frogans.ltf": {
    source: "iana",
    extensions: [
      "ltf"
    ]
  },
  "application/vnd.fsc.weblaunch": {
    source: "iana",
    extensions: [
      "fsc"
    ]
  },
  "application/vnd.fujifilm.fb.docuworks": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.binder": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.container": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.jfi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.fujitsu.oasys": {
    source: "iana",
    extensions: [
      "oas"
    ]
  },
  "application/vnd.fujitsu.oasys2": {
    source: "iana",
    extensions: [
      "oa2"
    ]
  },
  "application/vnd.fujitsu.oasys3": {
    source: "iana",
    extensions: [
      "oa3"
    ]
  },
  "application/vnd.fujitsu.oasysgp": {
    source: "iana",
    extensions: [
      "fg5"
    ]
  },
  "application/vnd.fujitsu.oasysprs": {
    source: "iana",
    extensions: [
      "bh2"
    ]
  },
  "application/vnd.fujixerox.art-ex": {
    source: "iana"
  },
  "application/vnd.fujixerox.art4": {
    source: "iana"
  },
  "application/vnd.fujixerox.ddd": {
    source: "iana",
    extensions: [
      "ddd"
    ]
  },
  "application/vnd.fujixerox.docuworks": {
    source: "iana",
    extensions: [
      "xdw"
    ]
  },
  "application/vnd.fujixerox.docuworks.binder": {
    source: "iana",
    extensions: [
      "xbd"
    ]
  },
  "application/vnd.fujixerox.docuworks.container": {
    source: "iana"
  },
  "application/vnd.fujixerox.hbpl": {
    source: "iana"
  },
  "application/vnd.fut-misnet": {
    source: "iana"
  },
  "application/vnd.futoin+cbor": {
    source: "iana"
  },
  "application/vnd.futoin+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.fuzzysheet": {
    source: "iana",
    extensions: [
      "fzs"
    ]
  },
  "application/vnd.genomatix.tuxedo": {
    source: "iana",
    extensions: [
      "txd"
    ]
  },
  "application/vnd.gentics.grd+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geo+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geocube+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geogebra.file": {
    source: "iana",
    extensions: [
      "ggb"
    ]
  },
  "application/vnd.geogebra.slides": {
    source: "iana"
  },
  "application/vnd.geogebra.tool": {
    source: "iana",
    extensions: [
      "ggt"
    ]
  },
  "application/vnd.geometry-explorer": {
    source: "iana",
    extensions: [
      "gex",
      "gre"
    ]
  },
  "application/vnd.geonext": {
    source: "iana",
    extensions: [
      "gxt"
    ]
  },
  "application/vnd.geoplan": {
    source: "iana",
    extensions: [
      "g2w"
    ]
  },
  "application/vnd.geospace": {
    source: "iana",
    extensions: [
      "g3w"
    ]
  },
  "application/vnd.gerber": {
    source: "iana"
  },
  "application/vnd.globalplatform.card-content-mgt": {
    source: "iana"
  },
  "application/vnd.globalplatform.card-content-mgt-response": {
    source: "iana"
  },
  "application/vnd.gmx": {
    source: "iana",
    extensions: [
      "gmx"
    ]
  },
  "application/vnd.google-apps.document": {
    compressible: !1,
    extensions: [
      "gdoc"
    ]
  },
  "application/vnd.google-apps.presentation": {
    compressible: !1,
    extensions: [
      "gslides"
    ]
  },
  "application/vnd.google-apps.spreadsheet": {
    compressible: !1,
    extensions: [
      "gsheet"
    ]
  },
  "application/vnd.google-earth.kml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "kml"
    ]
  },
  "application/vnd.google-earth.kmz": {
    source: "iana",
    compressible: !1,
    extensions: [
      "kmz"
    ]
  },
  "application/vnd.gov.sk.e-form+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.gov.sk.e-form+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.gov.sk.xmldatacontainer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.grafeq": {
    source: "iana",
    extensions: [
      "gqf",
      "gqs"
    ]
  },
  "application/vnd.gridmp": {
    source: "iana"
  },
  "application/vnd.groove-account": {
    source: "iana",
    extensions: [
      "gac"
    ]
  },
  "application/vnd.groove-help": {
    source: "iana",
    extensions: [
      "ghf"
    ]
  },
  "application/vnd.groove-identity-message": {
    source: "iana",
    extensions: [
      "gim"
    ]
  },
  "application/vnd.groove-injector": {
    source: "iana",
    extensions: [
      "grv"
    ]
  },
  "application/vnd.groove-tool-message": {
    source: "iana",
    extensions: [
      "gtm"
    ]
  },
  "application/vnd.groove-tool-template": {
    source: "iana",
    extensions: [
      "tpl"
    ]
  },
  "application/vnd.groove-vcard": {
    source: "iana",
    extensions: [
      "vcg"
    ]
  },
  "application/vnd.hal+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hal+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "hal"
    ]
  },
  "application/vnd.handheld-entertainment+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "zmm"
    ]
  },
  "application/vnd.hbci": {
    source: "iana",
    extensions: [
      "hbci"
    ]
  },
  "application/vnd.hc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hcl-bireports": {
    source: "iana"
  },
  "application/vnd.hdt": {
    source: "iana"
  },
  "application/vnd.heroku+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hhe.lesson-player": {
    source: "iana",
    extensions: [
      "les"
    ]
  },
  "application/vnd.hl7cda+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.hl7v2+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.hp-hpgl": {
    source: "iana",
    extensions: [
      "hpgl"
    ]
  },
  "application/vnd.hp-hpid": {
    source: "iana",
    extensions: [
      "hpid"
    ]
  },
  "application/vnd.hp-hps": {
    source: "iana",
    extensions: [
      "hps"
    ]
  },
  "application/vnd.hp-jlyt": {
    source: "iana",
    extensions: [
      "jlt"
    ]
  },
  "application/vnd.hp-pcl": {
    source: "iana",
    extensions: [
      "pcl"
    ]
  },
  "application/vnd.hp-pclxl": {
    source: "iana",
    extensions: [
      "pclxl"
    ]
  },
  "application/vnd.httphone": {
    source: "iana"
  },
  "application/vnd.hydrostatix.sof-data": {
    source: "iana",
    extensions: [
      "sfd-hdstx"
    ]
  },
  "application/vnd.hyper+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hyper-item+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hyperdrive+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hzn-3d-crossword": {
    source: "iana"
  },
  "application/vnd.ibm.afplinedata": {
    source: "iana"
  },
  "application/vnd.ibm.electronic-media": {
    source: "iana"
  },
  "application/vnd.ibm.minipay": {
    source: "iana",
    extensions: [
      "mpy"
    ]
  },
  "application/vnd.ibm.modcap": {
    source: "iana",
    extensions: [
      "afp",
      "listafp",
      "list3820"
    ]
  },
  "application/vnd.ibm.rights-management": {
    source: "iana",
    extensions: [
      "irm"
    ]
  },
  "application/vnd.ibm.secure-container": {
    source: "iana",
    extensions: [
      "sc"
    ]
  },
  "application/vnd.iccprofile": {
    source: "iana",
    extensions: [
      "icc",
      "icm"
    ]
  },
  "application/vnd.ieee.1905": {
    source: "iana"
  },
  "application/vnd.igloader": {
    source: "iana",
    extensions: [
      "igl"
    ]
  },
  "application/vnd.imagemeter.folder+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.imagemeter.image+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.immervision-ivp": {
    source: "iana",
    extensions: [
      "ivp"
    ]
  },
  "application/vnd.immervision-ivu": {
    source: "iana",
    extensions: [
      "ivu"
    ]
  },
  "application/vnd.ims.imsccv1p1": {
    source: "iana"
  },
  "application/vnd.ims.imsccv1p2": {
    source: "iana"
  },
  "application/vnd.ims.imsccv1p3": {
    source: "iana"
  },
  "application/vnd.ims.lis.v2.result+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolproxy+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolproxy.id+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolsettings+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolsettings.simple+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.informedcontrol.rms+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.informix-visionary": {
    source: "iana"
  },
  "application/vnd.infotech.project": {
    source: "iana"
  },
  "application/vnd.infotech.project+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.innopath.wamp.notification": {
    source: "iana"
  },
  "application/vnd.insors.igm": {
    source: "iana",
    extensions: [
      "igm"
    ]
  },
  "application/vnd.intercon.formnet": {
    source: "iana",
    extensions: [
      "xpw",
      "xpx"
    ]
  },
  "application/vnd.intergeo": {
    source: "iana",
    extensions: [
      "i2g"
    ]
  },
  "application/vnd.intertrust.digibox": {
    source: "iana"
  },
  "application/vnd.intertrust.nncp": {
    source: "iana"
  },
  "application/vnd.intu.qbo": {
    source: "iana",
    extensions: [
      "qbo"
    ]
  },
  "application/vnd.intu.qfx": {
    source: "iana",
    extensions: [
      "qfx"
    ]
  },
  "application/vnd.iptc.g2.catalogitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.conceptitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.knowledgeitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.newsitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.newsmessage+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.packageitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.planningitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ipunplugged.rcprofile": {
    source: "iana",
    extensions: [
      "rcprofile"
    ]
  },
  "application/vnd.irepository.package+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "irp"
    ]
  },
  "application/vnd.is-xpr": {
    source: "iana",
    extensions: [
      "xpr"
    ]
  },
  "application/vnd.isac.fcs": {
    source: "iana",
    extensions: [
      "fcs"
    ]
  },
  "application/vnd.iso11783-10+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.jam": {
    source: "iana",
    extensions: [
      "jam"
    ]
  },
  "application/vnd.japannet-directory-service": {
    source: "iana"
  },
  "application/vnd.japannet-jpnstore-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-payment-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-registration": {
    source: "iana"
  },
  "application/vnd.japannet-registration-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-setstore-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-verification": {
    source: "iana"
  },
  "application/vnd.japannet-verification-wakeup": {
    source: "iana"
  },
  "application/vnd.jcp.javame.midlet-rms": {
    source: "iana",
    extensions: [
      "rms"
    ]
  },
  "application/vnd.jisp": {
    source: "iana",
    extensions: [
      "jisp"
    ]
  },
  "application/vnd.joost.joda-archive": {
    source: "iana",
    extensions: [
      "joda"
    ]
  },
  "application/vnd.jsk.isdn-ngn": {
    source: "iana"
  },
  "application/vnd.kahootz": {
    source: "iana",
    extensions: [
      "ktz",
      "ktr"
    ]
  },
  "application/vnd.kde.karbon": {
    source: "iana",
    extensions: [
      "karbon"
    ]
  },
  "application/vnd.kde.kchart": {
    source: "iana",
    extensions: [
      "chrt"
    ]
  },
  "application/vnd.kde.kformula": {
    source: "iana",
    extensions: [
      "kfo"
    ]
  },
  "application/vnd.kde.kivio": {
    source: "iana",
    extensions: [
      "flw"
    ]
  },
  "application/vnd.kde.kontour": {
    source: "iana",
    extensions: [
      "kon"
    ]
  },
  "application/vnd.kde.kpresenter": {
    source: "iana",
    extensions: [
      "kpr",
      "kpt"
    ]
  },
  "application/vnd.kde.kspread": {
    source: "iana",
    extensions: [
      "ksp"
    ]
  },
  "application/vnd.kde.kword": {
    source: "iana",
    extensions: [
      "kwd",
      "kwt"
    ]
  },
  "application/vnd.kenameaapp": {
    source: "iana",
    extensions: [
      "htke"
    ]
  },
  "application/vnd.kidspiration": {
    source: "iana",
    extensions: [
      "kia"
    ]
  },
  "application/vnd.kinar": {
    source: "iana",
    extensions: [
      "kne",
      "knp"
    ]
  },
  "application/vnd.koan": {
    source: "iana",
    extensions: [
      "skp",
      "skd",
      "skt",
      "skm"
    ]
  },
  "application/vnd.kodak-descriptor": {
    source: "iana",
    extensions: [
      "sse"
    ]
  },
  "application/vnd.las": {
    source: "iana"
  },
  "application/vnd.las.las+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.las.las+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lasxml"
    ]
  },
  "application/vnd.laszip": {
    source: "iana"
  },
  "application/vnd.leap+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.liberty-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.llamagraphics.life-balance.desktop": {
    source: "iana",
    extensions: [
      "lbd"
    ]
  },
  "application/vnd.llamagraphics.life-balance.exchange+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lbe"
    ]
  },
  "application/vnd.logipipe.circuit+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.loom": {
    source: "iana"
  },
  "application/vnd.lotus-1-2-3": {
    source: "iana",
    extensions: [
      "123"
    ]
  },
  "application/vnd.lotus-approach": {
    source: "iana",
    extensions: [
      "apr"
    ]
  },
  "application/vnd.lotus-freelance": {
    source: "iana",
    extensions: [
      "pre"
    ]
  },
  "application/vnd.lotus-notes": {
    source: "iana",
    extensions: [
      "nsf"
    ]
  },
  "application/vnd.lotus-organizer": {
    source: "iana",
    extensions: [
      "org"
    ]
  },
  "application/vnd.lotus-screencam": {
    source: "iana",
    extensions: [
      "scm"
    ]
  },
  "application/vnd.lotus-wordpro": {
    source: "iana",
    extensions: [
      "lwp"
    ]
  },
  "application/vnd.macports.portpkg": {
    source: "iana",
    extensions: [
      "portpkg"
    ]
  },
  "application/vnd.mapbox-vector-tile": {
    source: "iana",
    extensions: [
      "mvt"
    ]
  },
  "application/vnd.marlin.drm.actiontoken+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.conftoken+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.license+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.mdcf": {
    source: "iana"
  },
  "application/vnd.mason+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.maxar.archive.3tz+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.maxmind.maxmind-db": {
    source: "iana"
  },
  "application/vnd.mcd": {
    source: "iana",
    extensions: [
      "mcd"
    ]
  },
  "application/vnd.medcalcdata": {
    source: "iana",
    extensions: [
      "mc1"
    ]
  },
  "application/vnd.mediastation.cdkey": {
    source: "iana",
    extensions: [
      "cdkey"
    ]
  },
  "application/vnd.meridian-slingshot": {
    source: "iana"
  },
  "application/vnd.mfer": {
    source: "iana",
    extensions: [
      "mwf"
    ]
  },
  "application/vnd.mfmp": {
    source: "iana",
    extensions: [
      "mfm"
    ]
  },
  "application/vnd.micro+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.micrografx.flo": {
    source: "iana",
    extensions: [
      "flo"
    ]
  },
  "application/vnd.micrografx.igx": {
    source: "iana",
    extensions: [
      "igx"
    ]
  },
  "application/vnd.microsoft.portable-executable": {
    source: "iana"
  },
  "application/vnd.microsoft.windows.thumbnail-cache": {
    source: "iana"
  },
  "application/vnd.miele+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.mif": {
    source: "iana",
    extensions: [
      "mif"
    ]
  },
  "application/vnd.minisoft-hp3000-save": {
    source: "iana"
  },
  "application/vnd.mitsubishi.misty-guard.trustweb": {
    source: "iana"
  },
  "application/vnd.mobius.daf": {
    source: "iana",
    extensions: [
      "daf"
    ]
  },
  "application/vnd.mobius.dis": {
    source: "iana",
    extensions: [
      "dis"
    ]
  },
  "application/vnd.mobius.mbk": {
    source: "iana",
    extensions: [
      "mbk"
    ]
  },
  "application/vnd.mobius.mqy": {
    source: "iana",
    extensions: [
      "mqy"
    ]
  },
  "application/vnd.mobius.msl": {
    source: "iana",
    extensions: [
      "msl"
    ]
  },
  "application/vnd.mobius.plc": {
    source: "iana",
    extensions: [
      "plc"
    ]
  },
  "application/vnd.mobius.txf": {
    source: "iana",
    extensions: [
      "txf"
    ]
  },
  "application/vnd.mophun.application": {
    source: "iana",
    extensions: [
      "mpn"
    ]
  },
  "application/vnd.mophun.certificate": {
    source: "iana",
    extensions: [
      "mpc"
    ]
  },
  "application/vnd.motorola.flexsuite": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.adsi": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.fis": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.gotap": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.kmr": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.ttc": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.wem": {
    source: "iana"
  },
  "application/vnd.motorola.iprm": {
    source: "iana"
  },
  "application/vnd.mozilla.xul+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xul"
    ]
  },
  "application/vnd.ms-3mfdocument": {
    source: "iana"
  },
  "application/vnd.ms-artgalry": {
    source: "iana",
    extensions: [
      "cil"
    ]
  },
  "application/vnd.ms-asf": {
    source: "iana"
  },
  "application/vnd.ms-cab-compressed": {
    source: "iana",
    extensions: [
      "cab"
    ]
  },
  "application/vnd.ms-color.iccprofile": {
    source: "apache"
  },
  "application/vnd.ms-excel": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xls",
      "xlm",
      "xla",
      "xlc",
      "xlt",
      "xlw"
    ]
  },
  "application/vnd.ms-excel.addin.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlam"
    ]
  },
  "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlsb"
    ]
  },
  "application/vnd.ms-excel.sheet.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlsm"
    ]
  },
  "application/vnd.ms-excel.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "xltm"
    ]
  },
  "application/vnd.ms-fontobject": {
    source: "iana",
    compressible: !0,
    extensions: [
      "eot"
    ]
  },
  "application/vnd.ms-htmlhelp": {
    source: "iana",
    extensions: [
      "chm"
    ]
  },
  "application/vnd.ms-ims": {
    source: "iana",
    extensions: [
      "ims"
    ]
  },
  "application/vnd.ms-lrm": {
    source: "iana",
    extensions: [
      "lrm"
    ]
  },
  "application/vnd.ms-office.activex+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-officetheme": {
    source: "iana",
    extensions: [
      "thmx"
    ]
  },
  "application/vnd.ms-opentype": {
    source: "apache",
    compressible: !0
  },
  "application/vnd.ms-outlook": {
    compressible: !1,
    extensions: [
      "msg"
    ]
  },
  "application/vnd.ms-package.obfuscated-opentype": {
    source: "apache"
  },
  "application/vnd.ms-pki.seccat": {
    source: "apache",
    extensions: [
      "cat"
    ]
  },
  "application/vnd.ms-pki.stl": {
    source: "apache",
    extensions: [
      "stl"
    ]
  },
  "application/vnd.ms-playready.initiator+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-powerpoint": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ppt",
      "pps",
      "pot"
    ]
  },
  "application/vnd.ms-powerpoint.addin.macroenabled.12": {
    source: "iana",
    extensions: [
      "ppam"
    ]
  },
  "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
    source: "iana",
    extensions: [
      "pptm"
    ]
  },
  "application/vnd.ms-powerpoint.slide.macroenabled.12": {
    source: "iana",
    extensions: [
      "sldm"
    ]
  },
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
    source: "iana",
    extensions: [
      "ppsm"
    ]
  },
  "application/vnd.ms-powerpoint.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "potm"
    ]
  },
  "application/vnd.ms-printdevicecapabilities+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-printing.printticket+xml": {
    source: "apache",
    compressible: !0
  },
  "application/vnd.ms-printschematicket+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-project": {
    source: "iana",
    extensions: [
      "mpp",
      "mpt"
    ]
  },
  "application/vnd.ms-tnef": {
    source: "iana"
  },
  "application/vnd.ms-windows.devicepairing": {
    source: "iana"
  },
  "application/vnd.ms-windows.nwprinting.oob": {
    source: "iana"
  },
  "application/vnd.ms-windows.printerpairing": {
    source: "iana"
  },
  "application/vnd.ms-windows.wsd.oob": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.lic-chlg-req": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.lic-resp": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.meter-chlg-req": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.meter-resp": {
    source: "iana"
  },
  "application/vnd.ms-word.document.macroenabled.12": {
    source: "iana",
    extensions: [
      "docm"
    ]
  },
  "application/vnd.ms-word.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "dotm"
    ]
  },
  "application/vnd.ms-works": {
    source: "iana",
    extensions: [
      "wps",
      "wks",
      "wcm",
      "wdb"
    ]
  },
  "application/vnd.ms-wpl": {
    source: "iana",
    extensions: [
      "wpl"
    ]
  },
  "application/vnd.ms-xpsdocument": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xps"
    ]
  },
  "application/vnd.msa-disk-image": {
    source: "iana"
  },
  "application/vnd.mseq": {
    source: "iana",
    extensions: [
      "mseq"
    ]
  },
  "application/vnd.msign": {
    source: "iana"
  },
  "application/vnd.multiad.creator": {
    source: "iana"
  },
  "application/vnd.multiad.creator.cif": {
    source: "iana"
  },
  "application/vnd.music-niff": {
    source: "iana"
  },
  "application/vnd.musician": {
    source: "iana",
    extensions: [
      "mus"
    ]
  },
  "application/vnd.muvee.style": {
    source: "iana",
    extensions: [
      "msty"
    ]
  },
  "application/vnd.mynfc": {
    source: "iana",
    extensions: [
      "taglet"
    ]
  },
  "application/vnd.nacamar.ybrid+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ncd.control": {
    source: "iana"
  },
  "application/vnd.ncd.reference": {
    source: "iana"
  },
  "application/vnd.nearst.inv+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nebumind.line": {
    source: "iana"
  },
  "application/vnd.nervana": {
    source: "iana"
  },
  "application/vnd.netfpx": {
    source: "iana"
  },
  "application/vnd.neurolanguage.nlu": {
    source: "iana",
    extensions: [
      "nlu"
    ]
  },
  "application/vnd.nimn": {
    source: "iana"
  },
  "application/vnd.nintendo.nitro.rom": {
    source: "iana"
  },
  "application/vnd.nintendo.snes.rom": {
    source: "iana"
  },
  "application/vnd.nitf": {
    source: "iana",
    extensions: [
      "ntf",
      "nitf"
    ]
  },
  "application/vnd.noblenet-directory": {
    source: "iana",
    extensions: [
      "nnd"
    ]
  },
  "application/vnd.noblenet-sealer": {
    source: "iana",
    extensions: [
      "nns"
    ]
  },
  "application/vnd.noblenet-web": {
    source: "iana",
    extensions: [
      "nnw"
    ]
  },
  "application/vnd.nokia.catalogs": {
    source: "iana"
  },
  "application/vnd.nokia.conml+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.conml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.iptv.config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.isds-radio-presets": {
    source: "iana"
  },
  "application/vnd.nokia.landmark+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.landmark+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.landmarkcollection+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.n-gage.ac+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ac"
    ]
  },
  "application/vnd.nokia.n-gage.data": {
    source: "iana",
    extensions: [
      "ngdat"
    ]
  },
  "application/vnd.nokia.n-gage.symbian.install": {
    source: "iana",
    extensions: [
      "n-gage"
    ]
  },
  "application/vnd.nokia.ncd": {
    source: "iana"
  },
  "application/vnd.nokia.pcd+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.pcd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.radio-preset": {
    source: "iana",
    extensions: [
      "rpst"
    ]
  },
  "application/vnd.nokia.radio-presets": {
    source: "iana",
    extensions: [
      "rpss"
    ]
  },
  "application/vnd.novadigm.edm": {
    source: "iana",
    extensions: [
      "edm"
    ]
  },
  "application/vnd.novadigm.edx": {
    source: "iana",
    extensions: [
      "edx"
    ]
  },
  "application/vnd.novadigm.ext": {
    source: "iana",
    extensions: [
      "ext"
    ]
  },
  "application/vnd.ntt-local.content-share": {
    source: "iana"
  },
  "application/vnd.ntt-local.file-transfer": {
    source: "iana"
  },
  "application/vnd.ntt-local.ogw_remote-access": {
    source: "iana"
  },
  "application/vnd.ntt-local.sip-ta_remote": {
    source: "iana"
  },
  "application/vnd.ntt-local.sip-ta_tcp_stream": {
    source: "iana"
  },
  "application/vnd.oasis.opendocument.chart": {
    source: "iana",
    extensions: [
      "odc"
    ]
  },
  "application/vnd.oasis.opendocument.chart-template": {
    source: "iana",
    extensions: [
      "otc"
    ]
  },
  "application/vnd.oasis.opendocument.database": {
    source: "iana",
    extensions: [
      "odb"
    ]
  },
  "application/vnd.oasis.opendocument.formula": {
    source: "iana",
    extensions: [
      "odf"
    ]
  },
  "application/vnd.oasis.opendocument.formula-template": {
    source: "iana",
    extensions: [
      "odft"
    ]
  },
  "application/vnd.oasis.opendocument.graphics": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odg"
    ]
  },
  "application/vnd.oasis.opendocument.graphics-template": {
    source: "iana",
    extensions: [
      "otg"
    ]
  },
  "application/vnd.oasis.opendocument.image": {
    source: "iana",
    extensions: [
      "odi"
    ]
  },
  "application/vnd.oasis.opendocument.image-template": {
    source: "iana",
    extensions: [
      "oti"
    ]
  },
  "application/vnd.oasis.opendocument.presentation": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odp"
    ]
  },
  "application/vnd.oasis.opendocument.presentation-template": {
    source: "iana",
    extensions: [
      "otp"
    ]
  },
  "application/vnd.oasis.opendocument.spreadsheet": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ods"
    ]
  },
  "application/vnd.oasis.opendocument.spreadsheet-template": {
    source: "iana",
    extensions: [
      "ots"
    ]
  },
  "application/vnd.oasis.opendocument.text": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odt"
    ]
  },
  "application/vnd.oasis.opendocument.text-master": {
    source: "iana",
    extensions: [
      "odm"
    ]
  },
  "application/vnd.oasis.opendocument.text-template": {
    source: "iana",
    extensions: [
      "ott"
    ]
  },
  "application/vnd.oasis.opendocument.text-web": {
    source: "iana",
    extensions: [
      "oth"
    ]
  },
  "application/vnd.obn": {
    source: "iana"
  },
  "application/vnd.ocf+cbor": {
    source: "iana"
  },
  "application/vnd.oci.image.manifest.v1+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oftn.l10n+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.contentaccessdownload+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.contentaccessstreaming+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.cspg-hexbinary": {
    source: "iana"
  },
  "application/vnd.oipf.dae.svg+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.dae.xhtml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.mippvcontrolmessage+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.pae.gem": {
    source: "iana"
  },
  "application/vnd.oipf.spdiscovery+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.spdlist+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.ueprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.userprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.olpc-sugar": {
    source: "iana",
    extensions: [
      "xo"
    ]
  },
  "application/vnd.oma-scws-config": {
    source: "iana"
  },
  "application/vnd.oma-scws-http-request": {
    source: "iana"
  },
  "application/vnd.oma-scws-http-response": {
    source: "iana"
  },
  "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.drm-trigger+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.imd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.ltkm": {
    source: "iana"
  },
  "application/vnd.oma.bcast.notification+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.provisioningtrigger": {
    source: "iana"
  },
  "application/vnd.oma.bcast.sgboot": {
    source: "iana"
  },
  "application/vnd.oma.bcast.sgdd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.sgdu": {
    source: "iana"
  },
  "application/vnd.oma.bcast.simple-symbol-container": {
    source: "iana"
  },
  "application/vnd.oma.bcast.smartcard-trigger+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.sprov+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.stkm": {
    source: "iana"
  },
  "application/vnd.oma.cab-address-book+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-feature-handler+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-pcc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-subs-invite+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-user-prefs+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.dcd": {
    source: "iana"
  },
  "application/vnd.oma.dcdc": {
    source: "iana"
  },
  "application/vnd.oma.dd2+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dd2"
    ]
  },
  "application/vnd.oma.drm.risd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.group-usage-list+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.lwm2m+cbor": {
    source: "iana"
  },
  "application/vnd.oma.lwm2m+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.lwm2m+tlv": {
    source: "iana"
  },
  "application/vnd.oma.pal+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.detailed-progress-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.final-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.groups+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.invocation-descriptor+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.optimized-progress-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.push": {
    source: "iana"
  },
  "application/vnd.oma.scidm.messages+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.xcap-directory+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.omads-email+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omads-file+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omads-folder+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omaloc-supl-init": {
    source: "iana"
  },
  "application/vnd.onepager": {
    source: "iana"
  },
  "application/vnd.onepagertamp": {
    source: "iana"
  },
  "application/vnd.onepagertamx": {
    source: "iana"
  },
  "application/vnd.onepagertat": {
    source: "iana"
  },
  "application/vnd.onepagertatp": {
    source: "iana"
  },
  "application/vnd.onepagertatx": {
    source: "iana"
  },
  "application/vnd.openblox.game+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "obgx"
    ]
  },
  "application/vnd.openblox.game-binary": {
    source: "iana"
  },
  "application/vnd.openeye.oeb": {
    source: "iana"
  },
  "application/vnd.openofficeorg.extension": {
    source: "apache",
    extensions: [
      "oxt"
    ]
  },
  "application/vnd.openstreetmap.data+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "osm"
    ]
  },
  "application/vnd.opentimestamps.ots": {
    source: "iana"
  },
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawing+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pptx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide": {
    source: "iana",
    extensions: [
      "sldx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
    source: "iana",
    extensions: [
      "ppsx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template": {
    source: "iana",
    extensions: [
      "potx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xlsx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
    source: "iana",
    extensions: [
      "xltx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.theme+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.vmldrawing": {
    source: "iana"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    source: "iana",
    compressible: !1,
    extensions: [
      "docx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
    source: "iana",
    extensions: [
      "dotx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.core-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.relationships+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oracle.resource+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.orange.indata": {
    source: "iana"
  },
  "application/vnd.osa.netdeploy": {
    source: "iana"
  },
  "application/vnd.osgeo.mapguide.package": {
    source: "iana",
    extensions: [
      "mgp"
    ]
  },
  "application/vnd.osgi.bundle": {
    source: "iana"
  },
  "application/vnd.osgi.dp": {
    source: "iana",
    extensions: [
      "dp"
    ]
  },
  "application/vnd.osgi.subsystem": {
    source: "iana",
    extensions: [
      "esa"
    ]
  },
  "application/vnd.otps.ct-kip+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oxli.countgraph": {
    source: "iana"
  },
  "application/vnd.pagerduty+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.palm": {
    source: "iana",
    extensions: [
      "pdb",
      "pqa",
      "oprc"
    ]
  },
  "application/vnd.panoply": {
    source: "iana"
  },
  "application/vnd.paos.xml": {
    source: "iana"
  },
  "application/vnd.patentdive": {
    source: "iana"
  },
  "application/vnd.patientecommsdoc": {
    source: "iana"
  },
  "application/vnd.pawaafile": {
    source: "iana",
    extensions: [
      "paw"
    ]
  },
  "application/vnd.pcos": {
    source: "iana"
  },
  "application/vnd.pg.format": {
    source: "iana",
    extensions: [
      "str"
    ]
  },
  "application/vnd.pg.osasli": {
    source: "iana",
    extensions: [
      "ei6"
    ]
  },
  "application/vnd.piaccess.application-licence": {
    source: "iana"
  },
  "application/vnd.picsel": {
    source: "iana",
    extensions: [
      "efif"
    ]
  },
  "application/vnd.pmi.widget": {
    source: "iana",
    extensions: [
      "wg"
    ]
  },
  "application/vnd.poc.group-advertisement+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.pocketlearn": {
    source: "iana",
    extensions: [
      "plf"
    ]
  },
  "application/vnd.powerbuilder6": {
    source: "iana",
    extensions: [
      "pbd"
    ]
  },
  "application/vnd.powerbuilder6-s": {
    source: "iana"
  },
  "application/vnd.powerbuilder7": {
    source: "iana"
  },
  "application/vnd.powerbuilder7-s": {
    source: "iana"
  },
  "application/vnd.powerbuilder75": {
    source: "iana"
  },
  "application/vnd.powerbuilder75-s": {
    source: "iana"
  },
  "application/vnd.preminet": {
    source: "iana"
  },
  "application/vnd.previewsystems.box": {
    source: "iana",
    extensions: [
      "box"
    ]
  },
  "application/vnd.proteus.magazine": {
    source: "iana",
    extensions: [
      "mgz"
    ]
  },
  "application/vnd.psfs": {
    source: "iana"
  },
  "application/vnd.publishare-delta-tree": {
    source: "iana",
    extensions: [
      "qps"
    ]
  },
  "application/vnd.pvi.ptid1": {
    source: "iana",
    extensions: [
      "ptid"
    ]
  },
  "application/vnd.pwg-multiplexed": {
    source: "iana"
  },
  "application/vnd.pwg-xhtml-print+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.qualcomm.brew-app-res": {
    source: "iana"
  },
  "application/vnd.quarantainenet": {
    source: "iana"
  },
  "application/vnd.quark.quarkxpress": {
    source: "iana",
    extensions: [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ]
  },
  "application/vnd.quobject-quoxdocument": {
    source: "iana"
  },
  "application/vnd.radisys.moml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-conf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-conn+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-dialog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-stream+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-conf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-base+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-fax-detect+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-group+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-speech+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-transform+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.rainstor.data": {
    source: "iana"
  },
  "application/vnd.rapid": {
    source: "iana"
  },
  "application/vnd.rar": {
    source: "iana",
    extensions: [
      "rar"
    ]
  },
  "application/vnd.realvnc.bed": {
    source: "iana",
    extensions: [
      "bed"
    ]
  },
  "application/vnd.recordare.musicxml": {
    source: "iana",
    extensions: [
      "mxl"
    ]
  },
  "application/vnd.recordare.musicxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "musicxml"
    ]
  },
  "application/vnd.renlearn.rlprint": {
    source: "iana"
  },
  "application/vnd.resilient.logic": {
    source: "iana"
  },
  "application/vnd.restful+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.rig.cryptonote": {
    source: "iana",
    extensions: [
      "cryptonote"
    ]
  },
  "application/vnd.rim.cod": {
    source: "apache",
    extensions: [
      "cod"
    ]
  },
  "application/vnd.rn-realmedia": {
    source: "apache",
    extensions: [
      "rm"
    ]
  },
  "application/vnd.rn-realmedia-vbr": {
    source: "apache",
    extensions: [
      "rmvb"
    ]
  },
  "application/vnd.route66.link66+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "link66"
    ]
  },
  "application/vnd.rs-274x": {
    source: "iana"
  },
  "application/vnd.ruckus.download": {
    source: "iana"
  },
  "application/vnd.s3sms": {
    source: "iana"
  },
  "application/vnd.sailingtracker.track": {
    source: "iana",
    extensions: [
      "st"
    ]
  },
  "application/vnd.sar": {
    source: "iana"
  },
  "application/vnd.sbm.cid": {
    source: "iana"
  },
  "application/vnd.sbm.mid2": {
    source: "iana"
  },
  "application/vnd.scribus": {
    source: "iana"
  },
  "application/vnd.sealed.3df": {
    source: "iana"
  },
  "application/vnd.sealed.csf": {
    source: "iana"
  },
  "application/vnd.sealed.doc": {
    source: "iana"
  },
  "application/vnd.sealed.eml": {
    source: "iana"
  },
  "application/vnd.sealed.mht": {
    source: "iana"
  },
  "application/vnd.sealed.net": {
    source: "iana"
  },
  "application/vnd.sealed.ppt": {
    source: "iana"
  },
  "application/vnd.sealed.tiff": {
    source: "iana"
  },
  "application/vnd.sealed.xls": {
    source: "iana"
  },
  "application/vnd.sealedmedia.softseal.html": {
    source: "iana"
  },
  "application/vnd.sealedmedia.softseal.pdf": {
    source: "iana"
  },
  "application/vnd.seemail": {
    source: "iana",
    extensions: [
      "see"
    ]
  },
  "application/vnd.seis+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.sema": {
    source: "iana",
    extensions: [
      "sema"
    ]
  },
  "application/vnd.semd": {
    source: "iana",
    extensions: [
      "semd"
    ]
  },
  "application/vnd.semf": {
    source: "iana",
    extensions: [
      "semf"
    ]
  },
  "application/vnd.shade-save-file": {
    source: "iana"
  },
  "application/vnd.shana.informed.formdata": {
    source: "iana",
    extensions: [
      "ifm"
    ]
  },
  "application/vnd.shana.informed.formtemplate": {
    source: "iana",
    extensions: [
      "itp"
    ]
  },
  "application/vnd.shana.informed.interchange": {
    source: "iana",
    extensions: [
      "iif"
    ]
  },
  "application/vnd.shana.informed.package": {
    source: "iana",
    extensions: [
      "ipk"
    ]
  },
  "application/vnd.shootproof+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.shopkick+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.shp": {
    source: "iana"
  },
  "application/vnd.shx": {
    source: "iana"
  },
  "application/vnd.sigrok.session": {
    source: "iana"
  },
  "application/vnd.simtech-mindmapper": {
    source: "iana",
    extensions: [
      "twd",
      "twds"
    ]
  },
  "application/vnd.siren+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.smaf": {
    source: "iana",
    extensions: [
      "mmf"
    ]
  },
  "application/vnd.smart.notebook": {
    source: "iana"
  },
  "application/vnd.smart.teacher": {
    source: "iana",
    extensions: [
      "teacher"
    ]
  },
  "application/vnd.snesdev-page-table": {
    source: "iana"
  },
  "application/vnd.software602.filler.form+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "fo"
    ]
  },
  "application/vnd.software602.filler.form-xml-zip": {
    source: "iana"
  },
  "application/vnd.solent.sdkm+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sdkm",
      "sdkd"
    ]
  },
  "application/vnd.spotfire.dxp": {
    source: "iana",
    extensions: [
      "dxp"
    ]
  },
  "application/vnd.spotfire.sfs": {
    source: "iana",
    extensions: [
      "sfs"
    ]
  },
  "application/vnd.sqlite3": {
    source: "iana"
  },
  "application/vnd.sss-cod": {
    source: "iana"
  },
  "application/vnd.sss-dtf": {
    source: "iana"
  },
  "application/vnd.sss-ntf": {
    source: "iana"
  },
  "application/vnd.stardivision.calc": {
    source: "apache",
    extensions: [
      "sdc"
    ]
  },
  "application/vnd.stardivision.draw": {
    source: "apache",
    extensions: [
      "sda"
    ]
  },
  "application/vnd.stardivision.impress": {
    source: "apache",
    extensions: [
      "sdd"
    ]
  },
  "application/vnd.stardivision.math": {
    source: "apache",
    extensions: [
      "smf"
    ]
  },
  "application/vnd.stardivision.writer": {
    source: "apache",
    extensions: [
      "sdw",
      "vor"
    ]
  },
  "application/vnd.stardivision.writer-global": {
    source: "apache",
    extensions: [
      "sgl"
    ]
  },
  "application/vnd.stepmania.package": {
    source: "iana",
    extensions: [
      "smzip"
    ]
  },
  "application/vnd.stepmania.stepchart": {
    source: "iana",
    extensions: [
      "sm"
    ]
  },
  "application/vnd.street-stream": {
    source: "iana"
  },
  "application/vnd.sun.wadl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wadl"
    ]
  },
  "application/vnd.sun.xml.calc": {
    source: "apache",
    extensions: [
      "sxc"
    ]
  },
  "application/vnd.sun.xml.calc.template": {
    source: "apache",
    extensions: [
      "stc"
    ]
  },
  "application/vnd.sun.xml.draw": {
    source: "apache",
    extensions: [
      "sxd"
    ]
  },
  "application/vnd.sun.xml.draw.template": {
    source: "apache",
    extensions: [
      "std"
    ]
  },
  "application/vnd.sun.xml.impress": {
    source: "apache",
    extensions: [
      "sxi"
    ]
  },
  "application/vnd.sun.xml.impress.template": {
    source: "apache",
    extensions: [
      "sti"
    ]
  },
  "application/vnd.sun.xml.math": {
    source: "apache",
    extensions: [
      "sxm"
    ]
  },
  "application/vnd.sun.xml.writer": {
    source: "apache",
    extensions: [
      "sxw"
    ]
  },
  "application/vnd.sun.xml.writer.global": {
    source: "apache",
    extensions: [
      "sxg"
    ]
  },
  "application/vnd.sun.xml.writer.template": {
    source: "apache",
    extensions: [
      "stw"
    ]
  },
  "application/vnd.sus-calendar": {
    source: "iana",
    extensions: [
      "sus",
      "susp"
    ]
  },
  "application/vnd.svd": {
    source: "iana",
    extensions: [
      "svd"
    ]
  },
  "application/vnd.swiftview-ics": {
    source: "iana"
  },
  "application/vnd.sycle+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.syft+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.symbian.install": {
    source: "apache",
    extensions: [
      "sis",
      "sisx"
    ]
  },
  "application/vnd.syncml+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "xsm"
    ]
  },
  "application/vnd.syncml.dm+wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "bdm"
    ]
  },
  "application/vnd.syncml.dm+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "xdm"
    ]
  },
  "application/vnd.syncml.dm.notification": {
    source: "iana"
  },
  "application/vnd.syncml.dmddf+wbxml": {
    source: "iana"
  },
  "application/vnd.syncml.dmddf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "ddf"
    ]
  },
  "application/vnd.syncml.dmtnds+wbxml": {
    source: "iana"
  },
  "application/vnd.syncml.dmtnds+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.syncml.ds.notification": {
    source: "iana"
  },
  "application/vnd.tableschema+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tao.intent-module-archive": {
    source: "iana",
    extensions: [
      "tao"
    ]
  },
  "application/vnd.tcpdump.pcap": {
    source: "iana",
    extensions: [
      "pcap",
      "cap",
      "dmp"
    ]
  },
  "application/vnd.think-cell.ppttc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tmd.mediaflex.api+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tml": {
    source: "iana"
  },
  "application/vnd.tmobile-livetv": {
    source: "iana",
    extensions: [
      "tmo"
    ]
  },
  "application/vnd.tri.onesource": {
    source: "iana"
  },
  "application/vnd.trid.tpt": {
    source: "iana",
    extensions: [
      "tpt"
    ]
  },
  "application/vnd.triscape.mxs": {
    source: "iana",
    extensions: [
      "mxs"
    ]
  },
  "application/vnd.trueapp": {
    source: "iana",
    extensions: [
      "tra"
    ]
  },
  "application/vnd.truedoc": {
    source: "iana"
  },
  "application/vnd.ubisoft.webplayer": {
    source: "iana"
  },
  "application/vnd.ufdl": {
    source: "iana",
    extensions: [
      "ufd",
      "ufdl"
    ]
  },
  "application/vnd.uiq.theme": {
    source: "iana",
    extensions: [
      "utz"
    ]
  },
  "application/vnd.umajin": {
    source: "iana",
    extensions: [
      "umj"
    ]
  },
  "application/vnd.unity": {
    source: "iana",
    extensions: [
      "unityweb"
    ]
  },
  "application/vnd.uoml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uoml"
    ]
  },
  "application/vnd.uplanet.alert": {
    source: "iana"
  },
  "application/vnd.uplanet.alert-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.bearer-choice": {
    source: "iana"
  },
  "application/vnd.uplanet.bearer-choice-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.cacheop": {
    source: "iana"
  },
  "application/vnd.uplanet.cacheop-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.channel": {
    source: "iana"
  },
  "application/vnd.uplanet.channel-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.list": {
    source: "iana"
  },
  "application/vnd.uplanet.list-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.listcmd": {
    source: "iana"
  },
  "application/vnd.uplanet.listcmd-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.signal": {
    source: "iana"
  },
  "application/vnd.uri-map": {
    source: "iana"
  },
  "application/vnd.valve.source.material": {
    source: "iana"
  },
  "application/vnd.vcx": {
    source: "iana",
    extensions: [
      "vcx"
    ]
  },
  "application/vnd.vd-study": {
    source: "iana"
  },
  "application/vnd.vectorworks": {
    source: "iana"
  },
  "application/vnd.vel+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.verimatrix.vcas": {
    source: "iana"
  },
  "application/vnd.veritone.aion+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.veryant.thin": {
    source: "iana"
  },
  "application/vnd.ves.encrypted": {
    source: "iana"
  },
  "application/vnd.vidsoft.vidconference": {
    source: "iana"
  },
  "application/vnd.visio": {
    source: "iana",
    extensions: [
      "vsd",
      "vst",
      "vss",
      "vsw"
    ]
  },
  "application/vnd.visionary": {
    source: "iana",
    extensions: [
      "vis"
    ]
  },
  "application/vnd.vividence.scriptfile": {
    source: "iana"
  },
  "application/vnd.vsf": {
    source: "iana",
    extensions: [
      "vsf"
    ]
  },
  "application/vnd.wap.sic": {
    source: "iana"
  },
  "application/vnd.wap.slc": {
    source: "iana"
  },
  "application/vnd.wap.wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "wbxml"
    ]
  },
  "application/vnd.wap.wmlc": {
    source: "iana",
    extensions: [
      "wmlc"
    ]
  },
  "application/vnd.wap.wmlscriptc": {
    source: "iana",
    extensions: [
      "wmlsc"
    ]
  },
  "application/vnd.webturbo": {
    source: "iana",
    extensions: [
      "wtb"
    ]
  },
  "application/vnd.wfa.dpp": {
    source: "iana"
  },
  "application/vnd.wfa.p2p": {
    source: "iana"
  },
  "application/vnd.wfa.wsc": {
    source: "iana"
  },
  "application/vnd.windows.devicepairing": {
    source: "iana"
  },
  "application/vnd.wmc": {
    source: "iana"
  },
  "application/vnd.wmf.bootstrap": {
    source: "iana"
  },
  "application/vnd.wolfram.mathematica": {
    source: "iana"
  },
  "application/vnd.wolfram.mathematica.package": {
    source: "iana"
  },
  "application/vnd.wolfram.player": {
    source: "iana",
    extensions: [
      "nbp"
    ]
  },
  "application/vnd.wordperfect": {
    source: "iana",
    extensions: [
      "wpd"
    ]
  },
  "application/vnd.wqd": {
    source: "iana",
    extensions: [
      "wqd"
    ]
  },
  "application/vnd.wrq-hp3000-labelled": {
    source: "iana"
  },
  "application/vnd.wt.stf": {
    source: "iana",
    extensions: [
      "stf"
    ]
  },
  "application/vnd.wv.csp+wbxml": {
    source: "iana"
  },
  "application/vnd.wv.csp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.wv.ssp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xacml+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xara": {
    source: "iana",
    extensions: [
      "xar"
    ]
  },
  "application/vnd.xfdl": {
    source: "iana",
    extensions: [
      "xfdl"
    ]
  },
  "application/vnd.xfdl.webform": {
    source: "iana"
  },
  "application/vnd.xmi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xmpie.cpkg": {
    source: "iana"
  },
  "application/vnd.xmpie.dpkg": {
    source: "iana"
  },
  "application/vnd.xmpie.plan": {
    source: "iana"
  },
  "application/vnd.xmpie.ppkg": {
    source: "iana"
  },
  "application/vnd.xmpie.xlim": {
    source: "iana"
  },
  "application/vnd.yamaha.hv-dic": {
    source: "iana",
    extensions: [
      "hvd"
    ]
  },
  "application/vnd.yamaha.hv-script": {
    source: "iana",
    extensions: [
      "hvs"
    ]
  },
  "application/vnd.yamaha.hv-voice": {
    source: "iana",
    extensions: [
      "hvp"
    ]
  },
  "application/vnd.yamaha.openscoreformat": {
    source: "iana",
    extensions: [
      "osf"
    ]
  },
  "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "osfpvg"
    ]
  },
  "application/vnd.yamaha.remote-setup": {
    source: "iana"
  },
  "application/vnd.yamaha.smaf-audio": {
    source: "iana",
    extensions: [
      "saf"
    ]
  },
  "application/vnd.yamaha.smaf-phrase": {
    source: "iana",
    extensions: [
      "spf"
    ]
  },
  "application/vnd.yamaha.through-ngn": {
    source: "iana"
  },
  "application/vnd.yamaha.tunnel-udpencap": {
    source: "iana"
  },
  "application/vnd.yaoweme": {
    source: "iana"
  },
  "application/vnd.yellowriver-custom-menu": {
    source: "iana",
    extensions: [
      "cmp"
    ]
  },
  "application/vnd.youtube.yt": {
    source: "iana"
  },
  "application/vnd.zul": {
    source: "iana",
    extensions: [
      "zir",
      "zirz"
    ]
  },
  "application/vnd.zzazz.deck+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "zaz"
    ]
  },
  "application/voicexml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "vxml"
    ]
  },
  "application/voucher-cms+json": {
    source: "iana",
    compressible: !0
  },
  "application/vq-rtcpxr": {
    source: "iana"
  },
  "application/wasm": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wasm"
    ]
  },
  "application/watcherinfo+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wif"
    ]
  },
  "application/webpush-options+json": {
    source: "iana",
    compressible: !0
  },
  "application/whoispp-query": {
    source: "iana"
  },
  "application/whoispp-response": {
    source: "iana"
  },
  "application/widget": {
    source: "iana",
    extensions: [
      "wgt"
    ]
  },
  "application/winhlp": {
    source: "apache",
    extensions: [
      "hlp"
    ]
  },
  "application/wita": {
    source: "iana"
  },
  "application/wordperfect5.1": {
    source: "iana"
  },
  "application/wsdl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wsdl"
    ]
  },
  "application/wspolicy+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wspolicy"
    ]
  },
  "application/x-7z-compressed": {
    source: "apache",
    compressible: !1,
    extensions: [
      "7z"
    ]
  },
  "application/x-abiword": {
    source: "apache",
    extensions: [
      "abw"
    ]
  },
  "application/x-ace-compressed": {
    source: "apache",
    extensions: [
      "ace"
    ]
  },
  "application/x-amf": {
    source: "apache"
  },
  "application/x-apple-diskimage": {
    source: "apache",
    extensions: [
      "dmg"
    ]
  },
  "application/x-arj": {
    compressible: !1,
    extensions: [
      "arj"
    ]
  },
  "application/x-authorware-bin": {
    source: "apache",
    extensions: [
      "aab",
      "x32",
      "u32",
      "vox"
    ]
  },
  "application/x-authorware-map": {
    source: "apache",
    extensions: [
      "aam"
    ]
  },
  "application/x-authorware-seg": {
    source: "apache",
    extensions: [
      "aas"
    ]
  },
  "application/x-bcpio": {
    source: "apache",
    extensions: [
      "bcpio"
    ]
  },
  "application/x-bdoc": {
    compressible: !1,
    extensions: [
      "bdoc"
    ]
  },
  "application/x-bittorrent": {
    source: "apache",
    extensions: [
      "torrent"
    ]
  },
  "application/x-blorb": {
    source: "apache",
    extensions: [
      "blb",
      "blorb"
    ]
  },
  "application/x-bzip": {
    source: "apache",
    compressible: !1,
    extensions: [
      "bz"
    ]
  },
  "application/x-bzip2": {
    source: "apache",
    compressible: !1,
    extensions: [
      "bz2",
      "boz"
    ]
  },
  "application/x-cbr": {
    source: "apache",
    extensions: [
      "cbr",
      "cba",
      "cbt",
      "cbz",
      "cb7"
    ]
  },
  "application/x-cdlink": {
    source: "apache",
    extensions: [
      "vcd"
    ]
  },
  "application/x-cfs-compressed": {
    source: "apache",
    extensions: [
      "cfs"
    ]
  },
  "application/x-chat": {
    source: "apache",
    extensions: [
      "chat"
    ]
  },
  "application/x-chess-pgn": {
    source: "apache",
    extensions: [
      "pgn"
    ]
  },
  "application/x-chrome-extension": {
    extensions: [
      "crx"
    ]
  },
  "application/x-cocoa": {
    source: "nginx",
    extensions: [
      "cco"
    ]
  },
  "application/x-compress": {
    source: "apache"
  },
  "application/x-conference": {
    source: "apache",
    extensions: [
      "nsc"
    ]
  },
  "application/x-cpio": {
    source: "apache",
    extensions: [
      "cpio"
    ]
  },
  "application/x-csh": {
    source: "apache",
    extensions: [
      "csh"
    ]
  },
  "application/x-deb": {
    compressible: !1
  },
  "application/x-debian-package": {
    source: "apache",
    extensions: [
      "deb",
      "udeb"
    ]
  },
  "application/x-dgc-compressed": {
    source: "apache",
    extensions: [
      "dgc"
    ]
  },
  "application/x-director": {
    source: "apache",
    extensions: [
      "dir",
      "dcr",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ]
  },
  "application/x-doom": {
    source: "apache",
    extensions: [
      "wad"
    ]
  },
  "application/x-dtbncx+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ncx"
    ]
  },
  "application/x-dtbook+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "dtb"
    ]
  },
  "application/x-dtbresource+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "res"
    ]
  },
  "application/x-dvi": {
    source: "apache",
    compressible: !1,
    extensions: [
      "dvi"
    ]
  },
  "application/x-envoy": {
    source: "apache",
    extensions: [
      "evy"
    ]
  },
  "application/x-eva": {
    source: "apache",
    extensions: [
      "eva"
    ]
  },
  "application/x-font-bdf": {
    source: "apache",
    extensions: [
      "bdf"
    ]
  },
  "application/x-font-dos": {
    source: "apache"
  },
  "application/x-font-framemaker": {
    source: "apache"
  },
  "application/x-font-ghostscript": {
    source: "apache",
    extensions: [
      "gsf"
    ]
  },
  "application/x-font-libgrx": {
    source: "apache"
  },
  "application/x-font-linux-psf": {
    source: "apache",
    extensions: [
      "psf"
    ]
  },
  "application/x-font-pcf": {
    source: "apache",
    extensions: [
      "pcf"
    ]
  },
  "application/x-font-snf": {
    source: "apache",
    extensions: [
      "snf"
    ]
  },
  "application/x-font-speedo": {
    source: "apache"
  },
  "application/x-font-sunos-news": {
    source: "apache"
  },
  "application/x-font-type1": {
    source: "apache",
    extensions: [
      "pfa",
      "pfb",
      "pfm",
      "afm"
    ]
  },
  "application/x-font-vfont": {
    source: "apache"
  },
  "application/x-freearc": {
    source: "apache",
    extensions: [
      "arc"
    ]
  },
  "application/x-futuresplash": {
    source: "apache",
    extensions: [
      "spl"
    ]
  },
  "application/x-gca-compressed": {
    source: "apache",
    extensions: [
      "gca"
    ]
  },
  "application/x-glulx": {
    source: "apache",
    extensions: [
      "ulx"
    ]
  },
  "application/x-gnumeric": {
    source: "apache",
    extensions: [
      "gnumeric"
    ]
  },
  "application/x-gramps-xml": {
    source: "apache",
    extensions: [
      "gramps"
    ]
  },
  "application/x-gtar": {
    source: "apache",
    extensions: [
      "gtar"
    ]
  },
  "application/x-gzip": {
    source: "apache"
  },
  "application/x-hdf": {
    source: "apache",
    extensions: [
      "hdf"
    ]
  },
  "application/x-httpd-php": {
    compressible: !0,
    extensions: [
      "php"
    ]
  },
  "application/x-install-instructions": {
    source: "apache",
    extensions: [
      "install"
    ]
  },
  "application/x-iso9660-image": {
    source: "apache",
    extensions: [
      "iso"
    ]
  },
  "application/x-iwork-keynote-sffkey": {
    extensions: [
      "key"
    ]
  },
  "application/x-iwork-numbers-sffnumbers": {
    extensions: [
      "numbers"
    ]
  },
  "application/x-iwork-pages-sffpages": {
    extensions: [
      "pages"
    ]
  },
  "application/x-java-archive-diff": {
    source: "nginx",
    extensions: [
      "jardiff"
    ]
  },
  "application/x-java-jnlp-file": {
    source: "apache",
    compressible: !1,
    extensions: [
      "jnlp"
    ]
  },
  "application/x-javascript": {
    compressible: !0
  },
  "application/x-keepass2": {
    extensions: [
      "kdbx"
    ]
  },
  "application/x-latex": {
    source: "apache",
    compressible: !1,
    extensions: [
      "latex"
    ]
  },
  "application/x-lua-bytecode": {
    extensions: [
      "luac"
    ]
  },
  "application/x-lzh-compressed": {
    source: "apache",
    extensions: [
      "lzh",
      "lha"
    ]
  },
  "application/x-makeself": {
    source: "nginx",
    extensions: [
      "run"
    ]
  },
  "application/x-mie": {
    source: "apache",
    extensions: [
      "mie"
    ]
  },
  "application/x-mobipocket-ebook": {
    source: "apache",
    extensions: [
      "prc",
      "mobi"
    ]
  },
  "application/x-mpegurl": {
    compressible: !1
  },
  "application/x-ms-application": {
    source: "apache",
    extensions: [
      "application"
    ]
  },
  "application/x-ms-shortcut": {
    source: "apache",
    extensions: [
      "lnk"
    ]
  },
  "application/x-ms-wmd": {
    source: "apache",
    extensions: [
      "wmd"
    ]
  },
  "application/x-ms-wmz": {
    source: "apache",
    extensions: [
      "wmz"
    ]
  },
  "application/x-ms-xbap": {
    source: "apache",
    extensions: [
      "xbap"
    ]
  },
  "application/x-msaccess": {
    source: "apache",
    extensions: [
      "mdb"
    ]
  },
  "application/x-msbinder": {
    source: "apache",
    extensions: [
      "obd"
    ]
  },
  "application/x-mscardfile": {
    source: "apache",
    extensions: [
      "crd"
    ]
  },
  "application/x-msclip": {
    source: "apache",
    extensions: [
      "clp"
    ]
  },
  "application/x-msdos-program": {
    extensions: [
      "exe"
    ]
  },
  "application/x-msdownload": {
    source: "apache",
    extensions: [
      "exe",
      "dll",
      "com",
      "bat",
      "msi"
    ]
  },
  "application/x-msmediaview": {
    source: "apache",
    extensions: [
      "mvb",
      "m13",
      "m14"
    ]
  },
  "application/x-msmetafile": {
    source: "apache",
    extensions: [
      "wmf",
      "wmz",
      "emf",
      "emz"
    ]
  },
  "application/x-msmoney": {
    source: "apache",
    extensions: [
      "mny"
    ]
  },
  "application/x-mspublisher": {
    source: "apache",
    extensions: [
      "pub"
    ]
  },
  "application/x-msschedule": {
    source: "apache",
    extensions: [
      "scd"
    ]
  },
  "application/x-msterminal": {
    source: "apache",
    extensions: [
      "trm"
    ]
  },
  "application/x-mswrite": {
    source: "apache",
    extensions: [
      "wri"
    ]
  },
  "application/x-netcdf": {
    source: "apache",
    extensions: [
      "nc",
      "cdf"
    ]
  },
  "application/x-ns-proxy-autoconfig": {
    compressible: !0,
    extensions: [
      "pac"
    ]
  },
  "application/x-nzb": {
    source: "apache",
    extensions: [
      "nzb"
    ]
  },
  "application/x-perl": {
    source: "nginx",
    extensions: [
      "pl",
      "pm"
    ]
  },
  "application/x-pilot": {
    source: "nginx",
    extensions: [
      "prc",
      "pdb"
    ]
  },
  "application/x-pkcs12": {
    source: "apache",
    compressible: !1,
    extensions: [
      "p12",
      "pfx"
    ]
  },
  "application/x-pkcs7-certificates": {
    source: "apache",
    extensions: [
      "p7b",
      "spc"
    ]
  },
  "application/x-pkcs7-certreqresp": {
    source: "apache",
    extensions: [
      "p7r"
    ]
  },
  "application/x-pki-message": {
    source: "iana"
  },
  "application/x-rar-compressed": {
    source: "apache",
    compressible: !1,
    extensions: [
      "rar"
    ]
  },
  "application/x-redhat-package-manager": {
    source: "nginx",
    extensions: [
      "rpm"
    ]
  },
  "application/x-research-info-systems": {
    source: "apache",
    extensions: [
      "ris"
    ]
  },
  "application/x-sea": {
    source: "nginx",
    extensions: [
      "sea"
    ]
  },
  "application/x-sh": {
    source: "apache",
    compressible: !0,
    extensions: [
      "sh"
    ]
  },
  "application/x-shar": {
    source: "apache",
    extensions: [
      "shar"
    ]
  },
  "application/x-shockwave-flash": {
    source: "apache",
    compressible: !1,
    extensions: [
      "swf"
    ]
  },
  "application/x-silverlight-app": {
    source: "apache",
    extensions: [
      "xap"
    ]
  },
  "application/x-sql": {
    source: "apache",
    extensions: [
      "sql"
    ]
  },
  "application/x-stuffit": {
    source: "apache",
    compressible: !1,
    extensions: [
      "sit"
    ]
  },
  "application/x-stuffitx": {
    source: "apache",
    extensions: [
      "sitx"
    ]
  },
  "application/x-subrip": {
    source: "apache",
    extensions: [
      "srt"
    ]
  },
  "application/x-sv4cpio": {
    source: "apache",
    extensions: [
      "sv4cpio"
    ]
  },
  "application/x-sv4crc": {
    source: "apache",
    extensions: [
      "sv4crc"
    ]
  },
  "application/x-t3vm-image": {
    source: "apache",
    extensions: [
      "t3"
    ]
  },
  "application/x-tads": {
    source: "apache",
    extensions: [
      "gam"
    ]
  },
  "application/x-tar": {
    source: "apache",
    compressible: !0,
    extensions: [
      "tar"
    ]
  },
  "application/x-tcl": {
    source: "apache",
    extensions: [
      "tcl",
      "tk"
    ]
  },
  "application/x-tex": {
    source: "apache",
    extensions: [
      "tex"
    ]
  },
  "application/x-tex-tfm": {
    source: "apache",
    extensions: [
      "tfm"
    ]
  },
  "application/x-texinfo": {
    source: "apache",
    extensions: [
      "texinfo",
      "texi"
    ]
  },
  "application/x-tgif": {
    source: "apache",
    extensions: [
      "obj"
    ]
  },
  "application/x-ustar": {
    source: "apache",
    extensions: [
      "ustar"
    ]
  },
  "application/x-virtualbox-hdd": {
    compressible: !0,
    extensions: [
      "hdd"
    ]
  },
  "application/x-virtualbox-ova": {
    compressible: !0,
    extensions: [
      "ova"
    ]
  },
  "application/x-virtualbox-ovf": {
    compressible: !0,
    extensions: [
      "ovf"
    ]
  },
  "application/x-virtualbox-vbox": {
    compressible: !0,
    extensions: [
      "vbox"
    ]
  },
  "application/x-virtualbox-vbox-extpack": {
    compressible: !1,
    extensions: [
      "vbox-extpack"
    ]
  },
  "application/x-virtualbox-vdi": {
    compressible: !0,
    extensions: [
      "vdi"
    ]
  },
  "application/x-virtualbox-vhd": {
    compressible: !0,
    extensions: [
      "vhd"
    ]
  },
  "application/x-virtualbox-vmdk": {
    compressible: !0,
    extensions: [
      "vmdk"
    ]
  },
  "application/x-wais-source": {
    source: "apache",
    extensions: [
      "src"
    ]
  },
  "application/x-web-app-manifest+json": {
    compressible: !0,
    extensions: [
      "webapp"
    ]
  },
  "application/x-www-form-urlencoded": {
    source: "iana",
    compressible: !0
  },
  "application/x-x509-ca-cert": {
    source: "iana",
    extensions: [
      "der",
      "crt",
      "pem"
    ]
  },
  "application/x-x509-ca-ra-cert": {
    source: "iana"
  },
  "application/x-x509-next-ca-cert": {
    source: "iana"
  },
  "application/x-xfig": {
    source: "apache",
    extensions: [
      "fig"
    ]
  },
  "application/x-xliff+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xlf"
    ]
  },
  "application/x-xpinstall": {
    source: "apache",
    compressible: !1,
    extensions: [
      "xpi"
    ]
  },
  "application/x-xz": {
    source: "apache",
    extensions: [
      "xz"
    ]
  },
  "application/x-zmachine": {
    source: "apache",
    extensions: [
      "z1",
      "z2",
      "z3",
      "z4",
      "z5",
      "z6",
      "z7",
      "z8"
    ]
  },
  "application/x400-bp": {
    source: "iana"
  },
  "application/xacml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xaml+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xaml"
    ]
  },
  "application/xcap-att+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xav"
    ]
  },
  "application/xcap-caps+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xca"
    ]
  },
  "application/xcap-diff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdf"
    ]
  },
  "application/xcap-el+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xel"
    ]
  },
  "application/xcap-error+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xcap-ns+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xns"
    ]
  },
  "application/xcon-conference-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xcon-conference-info-diff+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xenc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xenc"
    ]
  },
  "application/xhtml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xhtml",
      "xht"
    ]
  },
  "application/xhtml-voice+xml": {
    source: "apache",
    compressible: !0
  },
  "application/xliff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xlf"
    ]
  },
  "application/xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xml",
      "xsl",
      "xsd",
      "rng"
    ]
  },
  "application/xml-dtd": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dtd"
    ]
  },
  "application/xml-external-parsed-entity": {
    source: "iana"
  },
  "application/xml-patch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xmpp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xop+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xop"
    ]
  },
  "application/xproc+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xpl"
    ]
  },
  "application/xslt+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xsl",
      "xslt"
    ]
  },
  "application/xspf+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xspf"
    ]
  },
  "application/xv+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mxml",
      "xhvml",
      "xvml",
      "xvm"
    ]
  },
  "application/yang": {
    source: "iana",
    extensions: [
      "yang"
    ]
  },
  "application/yang-data+json": {
    source: "iana",
    compressible: !0
  },
  "application/yang-data+xml": {
    source: "iana",
    compressible: !0
  },
  "application/yang-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/yang-patch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/yin+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "yin"
    ]
  },
  "application/zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "zip"
    ]
  },
  "application/zlib": {
    source: "iana"
  },
  "application/zstd": {
    source: "iana"
  },
  "audio/1d-interleaved-parityfec": {
    source: "iana"
  },
  "audio/32kadpcm": {
    source: "iana"
  },
  "audio/3gpp": {
    source: "iana",
    compressible: !1,
    extensions: [
      "3gpp"
    ]
  },
  "audio/3gpp2": {
    source: "iana"
  },
  "audio/aac": {
    source: "iana"
  },
  "audio/ac3": {
    source: "iana"
  },
  "audio/adpcm": {
    source: "apache",
    extensions: [
      "adp"
    ]
  },
  "audio/amr": {
    source: "iana",
    extensions: [
      "amr"
    ]
  },
  "audio/amr-wb": {
    source: "iana"
  },
  "audio/amr-wb+": {
    source: "iana"
  },
  "audio/aptx": {
    source: "iana"
  },
  "audio/asc": {
    source: "iana"
  },
  "audio/atrac-advanced-lossless": {
    source: "iana"
  },
  "audio/atrac-x": {
    source: "iana"
  },
  "audio/atrac3": {
    source: "iana"
  },
  "audio/basic": {
    source: "iana",
    compressible: !1,
    extensions: [
      "au",
      "snd"
    ]
  },
  "audio/bv16": {
    source: "iana"
  },
  "audio/bv32": {
    source: "iana"
  },
  "audio/clearmode": {
    source: "iana"
  },
  "audio/cn": {
    source: "iana"
  },
  "audio/dat12": {
    source: "iana"
  },
  "audio/dls": {
    source: "iana"
  },
  "audio/dsr-es201108": {
    source: "iana"
  },
  "audio/dsr-es202050": {
    source: "iana"
  },
  "audio/dsr-es202211": {
    source: "iana"
  },
  "audio/dsr-es202212": {
    source: "iana"
  },
  "audio/dv": {
    source: "iana"
  },
  "audio/dvi4": {
    source: "iana"
  },
  "audio/eac3": {
    source: "iana"
  },
  "audio/encaprtp": {
    source: "iana"
  },
  "audio/evrc": {
    source: "iana"
  },
  "audio/evrc-qcp": {
    source: "iana"
  },
  "audio/evrc0": {
    source: "iana"
  },
  "audio/evrc1": {
    source: "iana"
  },
  "audio/evrcb": {
    source: "iana"
  },
  "audio/evrcb0": {
    source: "iana"
  },
  "audio/evrcb1": {
    source: "iana"
  },
  "audio/evrcnw": {
    source: "iana"
  },
  "audio/evrcnw0": {
    source: "iana"
  },
  "audio/evrcnw1": {
    source: "iana"
  },
  "audio/evrcwb": {
    source: "iana"
  },
  "audio/evrcwb0": {
    source: "iana"
  },
  "audio/evrcwb1": {
    source: "iana"
  },
  "audio/evs": {
    source: "iana"
  },
  "audio/flexfec": {
    source: "iana"
  },
  "audio/fwdred": {
    source: "iana"
  },
  "audio/g711-0": {
    source: "iana"
  },
  "audio/g719": {
    source: "iana"
  },
  "audio/g722": {
    source: "iana"
  },
  "audio/g7221": {
    source: "iana"
  },
  "audio/g723": {
    source: "iana"
  },
  "audio/g726-16": {
    source: "iana"
  },
  "audio/g726-24": {
    source: "iana"
  },
  "audio/g726-32": {
    source: "iana"
  },
  "audio/g726-40": {
    source: "iana"
  },
  "audio/g728": {
    source: "iana"
  },
  "audio/g729": {
    source: "iana"
  },
  "audio/g7291": {
    source: "iana"
  },
  "audio/g729d": {
    source: "iana"
  },
  "audio/g729e": {
    source: "iana"
  },
  "audio/gsm": {
    source: "iana"
  },
  "audio/gsm-efr": {
    source: "iana"
  },
  "audio/gsm-hr-08": {
    source: "iana"
  },
  "audio/ilbc": {
    source: "iana"
  },
  "audio/ip-mr_v2.5": {
    source: "iana"
  },
  "audio/isac": {
    source: "apache"
  },
  "audio/l16": {
    source: "iana"
  },
  "audio/l20": {
    source: "iana"
  },
  "audio/l24": {
    source: "iana",
    compressible: !1
  },
  "audio/l8": {
    source: "iana"
  },
  "audio/lpc": {
    source: "iana"
  },
  "audio/melp": {
    source: "iana"
  },
  "audio/melp1200": {
    source: "iana"
  },
  "audio/melp2400": {
    source: "iana"
  },
  "audio/melp600": {
    source: "iana"
  },
  "audio/mhas": {
    source: "iana"
  },
  "audio/midi": {
    source: "apache",
    extensions: [
      "mid",
      "midi",
      "kar",
      "rmi"
    ]
  },
  "audio/mobile-xmf": {
    source: "iana",
    extensions: [
      "mxmf"
    ]
  },
  "audio/mp3": {
    compressible: !1,
    extensions: [
      "mp3"
    ]
  },
  "audio/mp4": {
    source: "iana",
    compressible: !1,
    extensions: [
      "m4a",
      "mp4a"
    ]
  },
  "audio/mp4a-latm": {
    source: "iana"
  },
  "audio/mpa": {
    source: "iana"
  },
  "audio/mpa-robust": {
    source: "iana"
  },
  "audio/mpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mpga",
      "mp2",
      "mp2a",
      "mp3",
      "m2a",
      "m3a"
    ]
  },
  "audio/mpeg4-generic": {
    source: "iana"
  },
  "audio/musepack": {
    source: "apache"
  },
  "audio/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "oga",
      "ogg",
      "spx",
      "opus"
    ]
  },
  "audio/opus": {
    source: "iana"
  },
  "audio/parityfec": {
    source: "iana"
  },
  "audio/pcma": {
    source: "iana"
  },
  "audio/pcma-wb": {
    source: "iana"
  },
  "audio/pcmu": {
    source: "iana"
  },
  "audio/pcmu-wb": {
    source: "iana"
  },
  "audio/prs.sid": {
    source: "iana"
  },
  "audio/qcelp": {
    source: "iana"
  },
  "audio/raptorfec": {
    source: "iana"
  },
  "audio/red": {
    source: "iana"
  },
  "audio/rtp-enc-aescm128": {
    source: "iana"
  },
  "audio/rtp-midi": {
    source: "iana"
  },
  "audio/rtploopback": {
    source: "iana"
  },
  "audio/rtx": {
    source: "iana"
  },
  "audio/s3m": {
    source: "apache",
    extensions: [
      "s3m"
    ]
  },
  "audio/scip": {
    source: "iana"
  },
  "audio/silk": {
    source: "apache",
    extensions: [
      "sil"
    ]
  },
  "audio/smv": {
    source: "iana"
  },
  "audio/smv-qcp": {
    source: "iana"
  },
  "audio/smv0": {
    source: "iana"
  },
  "audio/sofa": {
    source: "iana"
  },
  "audio/sp-midi": {
    source: "iana"
  },
  "audio/speex": {
    source: "iana"
  },
  "audio/t140c": {
    source: "iana"
  },
  "audio/t38": {
    source: "iana"
  },
  "audio/telephone-event": {
    source: "iana"
  },
  "audio/tetra_acelp": {
    source: "iana"
  },
  "audio/tetra_acelp_bb": {
    source: "iana"
  },
  "audio/tone": {
    source: "iana"
  },
  "audio/tsvcis": {
    source: "iana"
  },
  "audio/uemclip": {
    source: "iana"
  },
  "audio/ulpfec": {
    source: "iana"
  },
  "audio/usac": {
    source: "iana"
  },
  "audio/vdvi": {
    source: "iana"
  },
  "audio/vmr-wb": {
    source: "iana"
  },
  "audio/vnd.3gpp.iufp": {
    source: "iana"
  },
  "audio/vnd.4sb": {
    source: "iana"
  },
  "audio/vnd.audiokoz": {
    source: "iana"
  },
  "audio/vnd.celp": {
    source: "iana"
  },
  "audio/vnd.cisco.nse": {
    source: "iana"
  },
  "audio/vnd.cmles.radio-events": {
    source: "iana"
  },
  "audio/vnd.cns.anp1": {
    source: "iana"
  },
  "audio/vnd.cns.inf1": {
    source: "iana"
  },
  "audio/vnd.dece.audio": {
    source: "iana",
    extensions: [
      "uva",
      "uvva"
    ]
  },
  "audio/vnd.digital-winds": {
    source: "iana",
    extensions: [
      "eol"
    ]
  },
  "audio/vnd.dlna.adts": {
    source: "iana"
  },
  "audio/vnd.dolby.heaac.1": {
    source: "iana"
  },
  "audio/vnd.dolby.heaac.2": {
    source: "iana"
  },
  "audio/vnd.dolby.mlp": {
    source: "iana"
  },
  "audio/vnd.dolby.mps": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2x": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2z": {
    source: "iana"
  },
  "audio/vnd.dolby.pulse.1": {
    source: "iana"
  },
  "audio/vnd.dra": {
    source: "iana",
    extensions: [
      "dra"
    ]
  },
  "audio/vnd.dts": {
    source: "iana",
    extensions: [
      "dts"
    ]
  },
  "audio/vnd.dts.hd": {
    source: "iana",
    extensions: [
      "dtshd"
    ]
  },
  "audio/vnd.dts.uhd": {
    source: "iana"
  },
  "audio/vnd.dvb.file": {
    source: "iana"
  },
  "audio/vnd.everad.plj": {
    source: "iana"
  },
  "audio/vnd.hns.audio": {
    source: "iana"
  },
  "audio/vnd.lucent.voice": {
    source: "iana",
    extensions: [
      "lvp"
    ]
  },
  "audio/vnd.ms-playready.media.pya": {
    source: "iana",
    extensions: [
      "pya"
    ]
  },
  "audio/vnd.nokia.mobile-xmf": {
    source: "iana"
  },
  "audio/vnd.nortel.vbk": {
    source: "iana"
  },
  "audio/vnd.nuera.ecelp4800": {
    source: "iana",
    extensions: [
      "ecelp4800"
    ]
  },
  "audio/vnd.nuera.ecelp7470": {
    source: "iana",
    extensions: [
      "ecelp7470"
    ]
  },
  "audio/vnd.nuera.ecelp9600": {
    source: "iana",
    extensions: [
      "ecelp9600"
    ]
  },
  "audio/vnd.octel.sbc": {
    source: "iana"
  },
  "audio/vnd.presonus.multitrack": {
    source: "iana"
  },
  "audio/vnd.qcelp": {
    source: "iana"
  },
  "audio/vnd.rhetorex.32kadpcm": {
    source: "iana"
  },
  "audio/vnd.rip": {
    source: "iana",
    extensions: [
      "rip"
    ]
  },
  "audio/vnd.rn-realaudio": {
    compressible: !1
  },
  "audio/vnd.sealedmedia.softseal.mpeg": {
    source: "iana"
  },
  "audio/vnd.vmx.cvsd": {
    source: "iana"
  },
  "audio/vnd.wave": {
    compressible: !1
  },
  "audio/vorbis": {
    source: "iana",
    compressible: !1
  },
  "audio/vorbis-config": {
    source: "iana"
  },
  "audio/wav": {
    compressible: !1,
    extensions: [
      "wav"
    ]
  },
  "audio/wave": {
    compressible: !1,
    extensions: [
      "wav"
    ]
  },
  "audio/webm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "weba"
    ]
  },
  "audio/x-aac": {
    source: "apache",
    compressible: !1,
    extensions: [
      "aac"
    ]
  },
  "audio/x-aiff": {
    source: "apache",
    extensions: [
      "aif",
      "aiff",
      "aifc"
    ]
  },
  "audio/x-caf": {
    source: "apache",
    compressible: !1,
    extensions: [
      "caf"
    ]
  },
  "audio/x-flac": {
    source: "apache",
    extensions: [
      "flac"
    ]
  },
  "audio/x-m4a": {
    source: "nginx",
    extensions: [
      "m4a"
    ]
  },
  "audio/x-matroska": {
    source: "apache",
    extensions: [
      "mka"
    ]
  },
  "audio/x-mpegurl": {
    source: "apache",
    extensions: [
      "m3u"
    ]
  },
  "audio/x-ms-wax": {
    source: "apache",
    extensions: [
      "wax"
    ]
  },
  "audio/x-ms-wma": {
    source: "apache",
    extensions: [
      "wma"
    ]
  },
  "audio/x-pn-realaudio": {
    source: "apache",
    extensions: [
      "ram",
      "ra"
    ]
  },
  "audio/x-pn-realaudio-plugin": {
    source: "apache",
    extensions: [
      "rmp"
    ]
  },
  "audio/x-realaudio": {
    source: "nginx",
    extensions: [
      "ra"
    ]
  },
  "audio/x-tta": {
    source: "apache"
  },
  "audio/x-wav": {
    source: "apache",
    extensions: [
      "wav"
    ]
  },
  "audio/xm": {
    source: "apache",
    extensions: [
      "xm"
    ]
  },
  "chemical/x-cdx": {
    source: "apache",
    extensions: [
      "cdx"
    ]
  },
  "chemical/x-cif": {
    source: "apache",
    extensions: [
      "cif"
    ]
  },
  "chemical/x-cmdf": {
    source: "apache",
    extensions: [
      "cmdf"
    ]
  },
  "chemical/x-cml": {
    source: "apache",
    extensions: [
      "cml"
    ]
  },
  "chemical/x-csml": {
    source: "apache",
    extensions: [
      "csml"
    ]
  },
  "chemical/x-pdb": {
    source: "apache"
  },
  "chemical/x-xyz": {
    source: "apache",
    extensions: [
      "xyz"
    ]
  },
  "font/collection": {
    source: "iana",
    extensions: [
      "ttc"
    ]
  },
  "font/otf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "otf"
    ]
  },
  "font/sfnt": {
    source: "iana"
  },
  "font/ttf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ttf"
    ]
  },
  "font/woff": {
    source: "iana",
    extensions: [
      "woff"
    ]
  },
  "font/woff2": {
    source: "iana",
    extensions: [
      "woff2"
    ]
  },
  "image/aces": {
    source: "iana",
    extensions: [
      "exr"
    ]
  },
  "image/apng": {
    compressible: !1,
    extensions: [
      "apng"
    ]
  },
  "image/avci": {
    source: "iana",
    extensions: [
      "avci"
    ]
  },
  "image/avcs": {
    source: "iana",
    extensions: [
      "avcs"
    ]
  },
  "image/avif": {
    source: "iana",
    compressible: !1,
    extensions: [
      "avif"
    ]
  },
  "image/bmp": {
    source: "iana",
    compressible: !0,
    extensions: [
      "bmp"
    ]
  },
  "image/cgm": {
    source: "iana",
    extensions: [
      "cgm"
    ]
  },
  "image/dicom-rle": {
    source: "iana",
    extensions: [
      "drle"
    ]
  },
  "image/emf": {
    source: "iana",
    extensions: [
      "emf"
    ]
  },
  "image/fits": {
    source: "iana",
    extensions: [
      "fits"
    ]
  },
  "image/g3fax": {
    source: "iana",
    extensions: [
      "g3"
    ]
  },
  "image/gif": {
    source: "iana",
    compressible: !1,
    extensions: [
      "gif"
    ]
  },
  "image/heic": {
    source: "iana",
    extensions: [
      "heic"
    ]
  },
  "image/heic-sequence": {
    source: "iana",
    extensions: [
      "heics"
    ]
  },
  "image/heif": {
    source: "iana",
    extensions: [
      "heif"
    ]
  },
  "image/heif-sequence": {
    source: "iana",
    extensions: [
      "heifs"
    ]
  },
  "image/hej2k": {
    source: "iana",
    extensions: [
      "hej2"
    ]
  },
  "image/hsj2": {
    source: "iana",
    extensions: [
      "hsj2"
    ]
  },
  "image/ief": {
    source: "iana",
    extensions: [
      "ief"
    ]
  },
  "image/jls": {
    source: "iana",
    extensions: [
      "jls"
    ]
  },
  "image/jp2": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jp2",
      "jpg2"
    ]
  },
  "image/jpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpeg",
      "jpg",
      "jpe"
    ]
  },
  "image/jph": {
    source: "iana",
    extensions: [
      "jph"
    ]
  },
  "image/jphc": {
    source: "iana",
    extensions: [
      "jhc"
    ]
  },
  "image/jpm": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpm"
    ]
  },
  "image/jpx": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpx",
      "jpf"
    ]
  },
  "image/jxr": {
    source: "iana",
    extensions: [
      "jxr"
    ]
  },
  "image/jxra": {
    source: "iana",
    extensions: [
      "jxra"
    ]
  },
  "image/jxrs": {
    source: "iana",
    extensions: [
      "jxrs"
    ]
  },
  "image/jxs": {
    source: "iana",
    extensions: [
      "jxs"
    ]
  },
  "image/jxsc": {
    source: "iana",
    extensions: [
      "jxsc"
    ]
  },
  "image/jxsi": {
    source: "iana",
    extensions: [
      "jxsi"
    ]
  },
  "image/jxss": {
    source: "iana",
    extensions: [
      "jxss"
    ]
  },
  "image/ktx": {
    source: "iana",
    extensions: [
      "ktx"
    ]
  },
  "image/ktx2": {
    source: "iana",
    extensions: [
      "ktx2"
    ]
  },
  "image/naplps": {
    source: "iana"
  },
  "image/pjpeg": {
    compressible: !1
  },
  "image/png": {
    source: "iana",
    compressible: !1,
    extensions: [
      "png"
    ]
  },
  "image/prs.btif": {
    source: "iana",
    extensions: [
      "btif"
    ]
  },
  "image/prs.pti": {
    source: "iana",
    extensions: [
      "pti"
    ]
  },
  "image/pwg-raster": {
    source: "iana"
  },
  "image/sgi": {
    source: "apache",
    extensions: [
      "sgi"
    ]
  },
  "image/svg+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "svg",
      "svgz"
    ]
  },
  "image/t38": {
    source: "iana",
    extensions: [
      "t38"
    ]
  },
  "image/tiff": {
    source: "iana",
    compressible: !1,
    extensions: [
      "tif",
      "tiff"
    ]
  },
  "image/tiff-fx": {
    source: "iana",
    extensions: [
      "tfx"
    ]
  },
  "image/vnd.adobe.photoshop": {
    source: "iana",
    compressible: !0,
    extensions: [
      "psd"
    ]
  },
  "image/vnd.airzip.accelerator.azv": {
    source: "iana",
    extensions: [
      "azv"
    ]
  },
  "image/vnd.cns.inf2": {
    source: "iana"
  },
  "image/vnd.dece.graphic": {
    source: "iana",
    extensions: [
      "uvi",
      "uvvi",
      "uvg",
      "uvvg"
    ]
  },
  "image/vnd.djvu": {
    source: "iana",
    extensions: [
      "djvu",
      "djv"
    ]
  },
  "image/vnd.dvb.subtitle": {
    source: "iana",
    extensions: [
      "sub"
    ]
  },
  "image/vnd.dwg": {
    source: "iana",
    extensions: [
      "dwg"
    ]
  },
  "image/vnd.dxf": {
    source: "iana",
    extensions: [
      "dxf"
    ]
  },
  "image/vnd.fastbidsheet": {
    source: "iana",
    extensions: [
      "fbs"
    ]
  },
  "image/vnd.fpx": {
    source: "iana",
    extensions: [
      "fpx"
    ]
  },
  "image/vnd.fst": {
    source: "iana",
    extensions: [
      "fst"
    ]
  },
  "image/vnd.fujixerox.edmics-mmr": {
    source: "iana",
    extensions: [
      "mmr"
    ]
  },
  "image/vnd.fujixerox.edmics-rlc": {
    source: "iana",
    extensions: [
      "rlc"
    ]
  },
  "image/vnd.globalgraphics.pgb": {
    source: "iana"
  },
  "image/vnd.microsoft.icon": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ico"
    ]
  },
  "image/vnd.mix": {
    source: "iana"
  },
  "image/vnd.mozilla.apng": {
    source: "iana"
  },
  "image/vnd.ms-dds": {
    compressible: !0,
    extensions: [
      "dds"
    ]
  },
  "image/vnd.ms-modi": {
    source: "iana",
    extensions: [
      "mdi"
    ]
  },
  "image/vnd.ms-photo": {
    source: "apache",
    extensions: [
      "wdp"
    ]
  },
  "image/vnd.net-fpx": {
    source: "iana",
    extensions: [
      "npx"
    ]
  },
  "image/vnd.pco.b16": {
    source: "iana",
    extensions: [
      "b16"
    ]
  },
  "image/vnd.radiance": {
    source: "iana"
  },
  "image/vnd.sealed.png": {
    source: "iana"
  },
  "image/vnd.sealedmedia.softseal.gif": {
    source: "iana"
  },
  "image/vnd.sealedmedia.softseal.jpg": {
    source: "iana"
  },
  "image/vnd.svf": {
    source: "iana"
  },
  "image/vnd.tencent.tap": {
    source: "iana",
    extensions: [
      "tap"
    ]
  },
  "image/vnd.valve.source.texture": {
    source: "iana",
    extensions: [
      "vtf"
    ]
  },
  "image/vnd.wap.wbmp": {
    source: "iana",
    extensions: [
      "wbmp"
    ]
  },
  "image/vnd.xiff": {
    source: "iana",
    extensions: [
      "xif"
    ]
  },
  "image/vnd.zbrush.pcx": {
    source: "iana",
    extensions: [
      "pcx"
    ]
  },
  "image/webp": {
    source: "apache",
    extensions: [
      "webp"
    ]
  },
  "image/wmf": {
    source: "iana",
    extensions: [
      "wmf"
    ]
  },
  "image/x-3ds": {
    source: "apache",
    extensions: [
      "3ds"
    ]
  },
  "image/x-cmu-raster": {
    source: "apache",
    extensions: [
      "ras"
    ]
  },
  "image/x-cmx": {
    source: "apache",
    extensions: [
      "cmx"
    ]
  },
  "image/x-freehand": {
    source: "apache",
    extensions: [
      "fh",
      "fhc",
      "fh4",
      "fh5",
      "fh7"
    ]
  },
  "image/x-icon": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ico"
    ]
  },
  "image/x-jng": {
    source: "nginx",
    extensions: [
      "jng"
    ]
  },
  "image/x-mrsid-image": {
    source: "apache",
    extensions: [
      "sid"
    ]
  },
  "image/x-ms-bmp": {
    source: "nginx",
    compressible: !0,
    extensions: [
      "bmp"
    ]
  },
  "image/x-pcx": {
    source: "apache",
    extensions: [
      "pcx"
    ]
  },
  "image/x-pict": {
    source: "apache",
    extensions: [
      "pic",
      "pct"
    ]
  },
  "image/x-portable-anymap": {
    source: "apache",
    extensions: [
      "pnm"
    ]
  },
  "image/x-portable-bitmap": {
    source: "apache",
    extensions: [
      "pbm"
    ]
  },
  "image/x-portable-graymap": {
    source: "apache",
    extensions: [
      "pgm"
    ]
  },
  "image/x-portable-pixmap": {
    source: "apache",
    extensions: [
      "ppm"
    ]
  },
  "image/x-rgb": {
    source: "apache",
    extensions: [
      "rgb"
    ]
  },
  "image/x-tga": {
    source: "apache",
    extensions: [
      "tga"
    ]
  },
  "image/x-xbitmap": {
    source: "apache",
    extensions: [
      "xbm"
    ]
  },
  "image/x-xcf": {
    compressible: !1
  },
  "image/x-xpixmap": {
    source: "apache",
    extensions: [
      "xpm"
    ]
  },
  "image/x-xwindowdump": {
    source: "apache",
    extensions: [
      "xwd"
    ]
  },
  "message/cpim": {
    source: "iana"
  },
  "message/delivery-status": {
    source: "iana"
  },
  "message/disposition-notification": {
    source: "iana",
    extensions: [
      "disposition-notification"
    ]
  },
  "message/external-body": {
    source: "iana"
  },
  "message/feedback-report": {
    source: "iana"
  },
  "message/global": {
    source: "iana",
    extensions: [
      "u8msg"
    ]
  },
  "message/global-delivery-status": {
    source: "iana",
    extensions: [
      "u8dsn"
    ]
  },
  "message/global-disposition-notification": {
    source: "iana",
    extensions: [
      "u8mdn"
    ]
  },
  "message/global-headers": {
    source: "iana",
    extensions: [
      "u8hdr"
    ]
  },
  "message/http": {
    source: "iana",
    compressible: !1
  },
  "message/imdn+xml": {
    source: "iana",
    compressible: !0
  },
  "message/news": {
    source: "iana"
  },
  "message/partial": {
    source: "iana",
    compressible: !1
  },
  "message/rfc822": {
    source: "iana",
    compressible: !0,
    extensions: [
      "eml",
      "mime"
    ]
  },
  "message/s-http": {
    source: "iana"
  },
  "message/sip": {
    source: "iana"
  },
  "message/sipfrag": {
    source: "iana"
  },
  "message/tracking-status": {
    source: "iana"
  },
  "message/vnd.si.simp": {
    source: "iana"
  },
  "message/vnd.wfa.wsc": {
    source: "iana",
    extensions: [
      "wsc"
    ]
  },
  "model/3mf": {
    source: "iana",
    extensions: [
      "3mf"
    ]
  },
  "model/e57": {
    source: "iana"
  },
  "model/gltf+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "gltf"
    ]
  },
  "model/gltf-binary": {
    source: "iana",
    compressible: !0,
    extensions: [
      "glb"
    ]
  },
  "model/iges": {
    source: "iana",
    compressible: !1,
    extensions: [
      "igs",
      "iges"
    ]
  },
  "model/mesh": {
    source: "iana",
    compressible: !1,
    extensions: [
      "msh",
      "mesh",
      "silo"
    ]
  },
  "model/mtl": {
    source: "iana",
    extensions: [
      "mtl"
    ]
  },
  "model/obj": {
    source: "iana",
    extensions: [
      "obj"
    ]
  },
  "model/step": {
    source: "iana"
  },
  "model/step+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "stpx"
    ]
  },
  "model/step+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "stpz"
    ]
  },
  "model/step-xml+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "stpxz"
    ]
  },
  "model/stl": {
    source: "iana",
    extensions: [
      "stl"
    ]
  },
  "model/vnd.collada+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dae"
    ]
  },
  "model/vnd.dwf": {
    source: "iana",
    extensions: [
      "dwf"
    ]
  },
  "model/vnd.flatland.3dml": {
    source: "iana"
  },
  "model/vnd.gdl": {
    source: "iana",
    extensions: [
      "gdl"
    ]
  },
  "model/vnd.gs-gdl": {
    source: "apache"
  },
  "model/vnd.gs.gdl": {
    source: "iana"
  },
  "model/vnd.gtw": {
    source: "iana",
    extensions: [
      "gtw"
    ]
  },
  "model/vnd.moml+xml": {
    source: "iana",
    compressible: !0
  },
  "model/vnd.mts": {
    source: "iana",
    extensions: [
      "mts"
    ]
  },
  "model/vnd.opengex": {
    source: "iana",
    extensions: [
      "ogex"
    ]
  },
  "model/vnd.parasolid.transmit.binary": {
    source: "iana",
    extensions: [
      "x_b"
    ]
  },
  "model/vnd.parasolid.transmit.text": {
    source: "iana",
    extensions: [
      "x_t"
    ]
  },
  "model/vnd.pytha.pyox": {
    source: "iana"
  },
  "model/vnd.rosette.annotated-data-model": {
    source: "iana"
  },
  "model/vnd.sap.vds": {
    source: "iana",
    extensions: [
      "vds"
    ]
  },
  "model/vnd.usdz+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "usdz"
    ]
  },
  "model/vnd.valve.source.compiled-map": {
    source: "iana",
    extensions: [
      "bsp"
    ]
  },
  "model/vnd.vtu": {
    source: "iana",
    extensions: [
      "vtu"
    ]
  },
  "model/vrml": {
    source: "iana",
    compressible: !1,
    extensions: [
      "wrl",
      "vrml"
    ]
  },
  "model/x3d+binary": {
    source: "apache",
    compressible: !1,
    extensions: [
      "x3db",
      "x3dbz"
    ]
  },
  "model/x3d+fastinfoset": {
    source: "iana",
    extensions: [
      "x3db"
    ]
  },
  "model/x3d+vrml": {
    source: "apache",
    compressible: !1,
    extensions: [
      "x3dv",
      "x3dvz"
    ]
  },
  "model/x3d+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "x3d",
      "x3dz"
    ]
  },
  "model/x3d-vrml": {
    source: "iana",
    extensions: [
      "x3dv"
    ]
  },
  "multipart/alternative": {
    source: "iana",
    compressible: !1
  },
  "multipart/appledouble": {
    source: "iana"
  },
  "multipart/byteranges": {
    source: "iana"
  },
  "multipart/digest": {
    source: "iana"
  },
  "multipart/encrypted": {
    source: "iana",
    compressible: !1
  },
  "multipart/form-data": {
    source: "iana",
    compressible: !1
  },
  "multipart/header-set": {
    source: "iana"
  },
  "multipart/mixed": {
    source: "iana"
  },
  "multipart/multilingual": {
    source: "iana"
  },
  "multipart/parallel": {
    source: "iana"
  },
  "multipart/related": {
    source: "iana",
    compressible: !1
  },
  "multipart/report": {
    source: "iana"
  },
  "multipart/signed": {
    source: "iana",
    compressible: !1
  },
  "multipart/vnd.bint.med-plus": {
    source: "iana"
  },
  "multipart/voice-message": {
    source: "iana"
  },
  "multipart/x-mixed-replace": {
    source: "iana"
  },
  "text/1d-interleaved-parityfec": {
    source: "iana"
  },
  "text/cache-manifest": {
    source: "iana",
    compressible: !0,
    extensions: [
      "appcache",
      "manifest"
    ]
  },
  "text/calendar": {
    source: "iana",
    extensions: [
      "ics",
      "ifb"
    ]
  },
  "text/calender": {
    compressible: !0
  },
  "text/cmd": {
    compressible: !0
  },
  "text/coffeescript": {
    extensions: [
      "coffee",
      "litcoffee"
    ]
  },
  "text/cql": {
    source: "iana"
  },
  "text/cql-expression": {
    source: "iana"
  },
  "text/cql-identifier": {
    source: "iana"
  },
  "text/css": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "css"
    ]
  },
  "text/csv": {
    source: "iana",
    compressible: !0,
    extensions: [
      "csv"
    ]
  },
  "text/csv-schema": {
    source: "iana"
  },
  "text/directory": {
    source: "iana"
  },
  "text/dns": {
    source: "iana"
  },
  "text/ecmascript": {
    source: "iana"
  },
  "text/encaprtp": {
    source: "iana"
  },
  "text/enriched": {
    source: "iana"
  },
  "text/fhirpath": {
    source: "iana"
  },
  "text/flexfec": {
    source: "iana"
  },
  "text/fwdred": {
    source: "iana"
  },
  "text/gff3": {
    source: "iana"
  },
  "text/grammar-ref-list": {
    source: "iana"
  },
  "text/html": {
    source: "iana",
    compressible: !0,
    extensions: [
      "html",
      "htm",
      "shtml"
    ]
  },
  "text/jade": {
    extensions: [
      "jade"
    ]
  },
  "text/javascript": {
    source: "iana",
    compressible: !0
  },
  "text/jcr-cnd": {
    source: "iana"
  },
  "text/jsx": {
    compressible: !0,
    extensions: [
      "jsx"
    ]
  },
  "text/less": {
    compressible: !0,
    extensions: [
      "less"
    ]
  },
  "text/markdown": {
    source: "iana",
    compressible: !0,
    extensions: [
      "markdown",
      "md"
    ]
  },
  "text/mathml": {
    source: "nginx",
    extensions: [
      "mml"
    ]
  },
  "text/mdx": {
    compressible: !0,
    extensions: [
      "mdx"
    ]
  },
  "text/mizar": {
    source: "iana"
  },
  "text/n3": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "n3"
    ]
  },
  "text/parameters": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/parityfec": {
    source: "iana"
  },
  "text/plain": {
    source: "iana",
    compressible: !0,
    extensions: [
      "txt",
      "text",
      "conf",
      "def",
      "list",
      "log",
      "in",
      "ini"
    ]
  },
  "text/provenance-notation": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/prs.fallenstein.rst": {
    source: "iana"
  },
  "text/prs.lines.tag": {
    source: "iana",
    extensions: [
      "dsc"
    ]
  },
  "text/prs.prop.logic": {
    source: "iana"
  },
  "text/raptorfec": {
    source: "iana"
  },
  "text/red": {
    source: "iana"
  },
  "text/rfc822-headers": {
    source: "iana"
  },
  "text/richtext": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtx"
    ]
  },
  "text/rtf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtf"
    ]
  },
  "text/rtp-enc-aescm128": {
    source: "iana"
  },
  "text/rtploopback": {
    source: "iana"
  },
  "text/rtx": {
    source: "iana"
  },
  "text/sgml": {
    source: "iana",
    extensions: [
      "sgml",
      "sgm"
    ]
  },
  "text/shaclc": {
    source: "iana"
  },
  "text/shex": {
    source: "iana",
    extensions: [
      "shex"
    ]
  },
  "text/slim": {
    extensions: [
      "slim",
      "slm"
    ]
  },
  "text/spdx": {
    source: "iana",
    extensions: [
      "spdx"
    ]
  },
  "text/strings": {
    source: "iana"
  },
  "text/stylus": {
    extensions: [
      "stylus",
      "styl"
    ]
  },
  "text/t140": {
    source: "iana"
  },
  "text/tab-separated-values": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tsv"
    ]
  },
  "text/troff": {
    source: "iana",
    extensions: [
      "t",
      "tr",
      "roff",
      "man",
      "me",
      "ms"
    ]
  },
  "text/turtle": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "ttl"
    ]
  },
  "text/ulpfec": {
    source: "iana"
  },
  "text/uri-list": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uri",
      "uris",
      "urls"
    ]
  },
  "text/vcard": {
    source: "iana",
    compressible: !0,
    extensions: [
      "vcard"
    ]
  },
  "text/vnd.a": {
    source: "iana"
  },
  "text/vnd.abc": {
    source: "iana"
  },
  "text/vnd.ascii-art": {
    source: "iana"
  },
  "text/vnd.curl": {
    source: "iana",
    extensions: [
      "curl"
    ]
  },
  "text/vnd.curl.dcurl": {
    source: "apache",
    extensions: [
      "dcurl"
    ]
  },
  "text/vnd.curl.mcurl": {
    source: "apache",
    extensions: [
      "mcurl"
    ]
  },
  "text/vnd.curl.scurl": {
    source: "apache",
    extensions: [
      "scurl"
    ]
  },
  "text/vnd.debian.copyright": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.dmclientscript": {
    source: "iana"
  },
  "text/vnd.dvb.subtitle": {
    source: "iana",
    extensions: [
      "sub"
    ]
  },
  "text/vnd.esmertec.theme-descriptor": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.familysearch.gedcom": {
    source: "iana",
    extensions: [
      "ged"
    ]
  },
  "text/vnd.ficlab.flt": {
    source: "iana"
  },
  "text/vnd.fly": {
    source: "iana",
    extensions: [
      "fly"
    ]
  },
  "text/vnd.fmi.flexstor": {
    source: "iana",
    extensions: [
      "flx"
    ]
  },
  "text/vnd.gml": {
    source: "iana"
  },
  "text/vnd.graphviz": {
    source: "iana",
    extensions: [
      "gv"
    ]
  },
  "text/vnd.hans": {
    source: "iana"
  },
  "text/vnd.hgl": {
    source: "iana"
  },
  "text/vnd.in3d.3dml": {
    source: "iana",
    extensions: [
      "3dml"
    ]
  },
  "text/vnd.in3d.spot": {
    source: "iana",
    extensions: [
      "spot"
    ]
  },
  "text/vnd.iptc.newsml": {
    source: "iana"
  },
  "text/vnd.iptc.nitf": {
    source: "iana"
  },
  "text/vnd.latex-z": {
    source: "iana"
  },
  "text/vnd.motorola.reflex": {
    source: "iana"
  },
  "text/vnd.ms-mediapackage": {
    source: "iana"
  },
  "text/vnd.net2phone.commcenter.command": {
    source: "iana"
  },
  "text/vnd.radisys.msml-basic-layout": {
    source: "iana"
  },
  "text/vnd.senx.warpscript": {
    source: "iana"
  },
  "text/vnd.si.uricatalogue": {
    source: "iana"
  },
  "text/vnd.sosi": {
    source: "iana"
  },
  "text/vnd.sun.j2me.app-descriptor": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "jad"
    ]
  },
  "text/vnd.trolltech.linguist": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.wap.si": {
    source: "iana"
  },
  "text/vnd.wap.sl": {
    source: "iana"
  },
  "text/vnd.wap.wml": {
    source: "iana",
    extensions: [
      "wml"
    ]
  },
  "text/vnd.wap.wmlscript": {
    source: "iana",
    extensions: [
      "wmls"
    ]
  },
  "text/vtt": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "vtt"
    ]
  },
  "text/x-asm": {
    source: "apache",
    extensions: [
      "s",
      "asm"
    ]
  },
  "text/x-c": {
    source: "apache",
    extensions: [
      "c",
      "cc",
      "cxx",
      "cpp",
      "h",
      "hh",
      "dic"
    ]
  },
  "text/x-component": {
    source: "nginx",
    extensions: [
      "htc"
    ]
  },
  "text/x-fortran": {
    source: "apache",
    extensions: [
      "f",
      "for",
      "f77",
      "f90"
    ]
  },
  "text/x-gwt-rpc": {
    compressible: !0
  },
  "text/x-handlebars-template": {
    extensions: [
      "hbs"
    ]
  },
  "text/x-java-source": {
    source: "apache",
    extensions: [
      "java"
    ]
  },
  "text/x-jquery-tmpl": {
    compressible: !0
  },
  "text/x-lua": {
    extensions: [
      "lua"
    ]
  },
  "text/x-markdown": {
    compressible: !0,
    extensions: [
      "mkd"
    ]
  },
  "text/x-nfo": {
    source: "apache",
    extensions: [
      "nfo"
    ]
  },
  "text/x-opml": {
    source: "apache",
    extensions: [
      "opml"
    ]
  },
  "text/x-org": {
    compressible: !0,
    extensions: [
      "org"
    ]
  },
  "text/x-pascal": {
    source: "apache",
    extensions: [
      "p",
      "pas"
    ]
  },
  "text/x-processing": {
    compressible: !0,
    extensions: [
      "pde"
    ]
  },
  "text/x-sass": {
    extensions: [
      "sass"
    ]
  },
  "text/x-scss": {
    extensions: [
      "scss"
    ]
  },
  "text/x-setext": {
    source: "apache",
    extensions: [
      "etx"
    ]
  },
  "text/x-sfv": {
    source: "apache",
    extensions: [
      "sfv"
    ]
  },
  "text/x-suse-ymp": {
    compressible: !0,
    extensions: [
      "ymp"
    ]
  },
  "text/x-uuencode": {
    source: "apache",
    extensions: [
      "uu"
    ]
  },
  "text/x-vcalendar": {
    source: "apache",
    extensions: [
      "vcs"
    ]
  },
  "text/x-vcard": {
    source: "apache",
    extensions: [
      "vcf"
    ]
  },
  "text/xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xml"
    ]
  },
  "text/xml-external-parsed-entity": {
    source: "iana"
  },
  "text/yaml": {
    compressible: !0,
    extensions: [
      "yaml",
      "yml"
    ]
  },
  "video/1d-interleaved-parityfec": {
    source: "iana"
  },
  "video/3gpp": {
    source: "iana",
    extensions: [
      "3gp",
      "3gpp"
    ]
  },
  "video/3gpp-tt": {
    source: "iana"
  },
  "video/3gpp2": {
    source: "iana",
    extensions: [
      "3g2"
    ]
  },
  "video/av1": {
    source: "iana"
  },
  "video/bmpeg": {
    source: "iana"
  },
  "video/bt656": {
    source: "iana"
  },
  "video/celb": {
    source: "iana"
  },
  "video/dv": {
    source: "iana"
  },
  "video/encaprtp": {
    source: "iana"
  },
  "video/ffv1": {
    source: "iana"
  },
  "video/flexfec": {
    source: "iana"
  },
  "video/h261": {
    source: "iana",
    extensions: [
      "h261"
    ]
  },
  "video/h263": {
    source: "iana",
    extensions: [
      "h263"
    ]
  },
  "video/h263-1998": {
    source: "iana"
  },
  "video/h263-2000": {
    source: "iana"
  },
  "video/h264": {
    source: "iana",
    extensions: [
      "h264"
    ]
  },
  "video/h264-rcdo": {
    source: "iana"
  },
  "video/h264-svc": {
    source: "iana"
  },
  "video/h265": {
    source: "iana"
  },
  "video/iso.segment": {
    source: "iana",
    extensions: [
      "m4s"
    ]
  },
  "video/jpeg": {
    source: "iana",
    extensions: [
      "jpgv"
    ]
  },
  "video/jpeg2000": {
    source: "iana"
  },
  "video/jpm": {
    source: "apache",
    extensions: [
      "jpm",
      "jpgm"
    ]
  },
  "video/jxsv": {
    source: "iana"
  },
  "video/mj2": {
    source: "iana",
    extensions: [
      "mj2",
      "mjp2"
    ]
  },
  "video/mp1s": {
    source: "iana"
  },
  "video/mp2p": {
    source: "iana"
  },
  "video/mp2t": {
    source: "iana",
    extensions: [
      "ts"
    ]
  },
  "video/mp4": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mp4",
      "mp4v",
      "mpg4"
    ]
  },
  "video/mp4v-es": {
    source: "iana"
  },
  "video/mpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mpeg",
      "mpg",
      "mpe",
      "m1v",
      "m2v"
    ]
  },
  "video/mpeg4-generic": {
    source: "iana"
  },
  "video/mpv": {
    source: "iana"
  },
  "video/nv": {
    source: "iana"
  },
  "video/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ogv"
    ]
  },
  "video/parityfec": {
    source: "iana"
  },
  "video/pointer": {
    source: "iana"
  },
  "video/quicktime": {
    source: "iana",
    compressible: !1,
    extensions: [
      "qt",
      "mov"
    ]
  },
  "video/raptorfec": {
    source: "iana"
  },
  "video/raw": {
    source: "iana"
  },
  "video/rtp-enc-aescm128": {
    source: "iana"
  },
  "video/rtploopback": {
    source: "iana"
  },
  "video/rtx": {
    source: "iana"
  },
  "video/scip": {
    source: "iana"
  },
  "video/smpte291": {
    source: "iana"
  },
  "video/smpte292m": {
    source: "iana"
  },
  "video/ulpfec": {
    source: "iana"
  },
  "video/vc1": {
    source: "iana"
  },
  "video/vc2": {
    source: "iana"
  },
  "video/vnd.cctv": {
    source: "iana"
  },
  "video/vnd.dece.hd": {
    source: "iana",
    extensions: [
      "uvh",
      "uvvh"
    ]
  },
  "video/vnd.dece.mobile": {
    source: "iana",
    extensions: [
      "uvm",
      "uvvm"
    ]
  },
  "video/vnd.dece.mp4": {
    source: "iana"
  },
  "video/vnd.dece.pd": {
    source: "iana",
    extensions: [
      "uvp",
      "uvvp"
    ]
  },
  "video/vnd.dece.sd": {
    source: "iana",
    extensions: [
      "uvs",
      "uvvs"
    ]
  },
  "video/vnd.dece.video": {
    source: "iana",
    extensions: [
      "uvv",
      "uvvv"
    ]
  },
  "video/vnd.directv.mpeg": {
    source: "iana"
  },
  "video/vnd.directv.mpeg-tts": {
    source: "iana"
  },
  "video/vnd.dlna.mpeg-tts": {
    source: "iana"
  },
  "video/vnd.dvb.file": {
    source: "iana",
    extensions: [
      "dvb"
    ]
  },
  "video/vnd.fvt": {
    source: "iana",
    extensions: [
      "fvt"
    ]
  },
  "video/vnd.hns.video": {
    source: "iana"
  },
  "video/vnd.iptvforum.1dparityfec-1010": {
    source: "iana"
  },
  "video/vnd.iptvforum.1dparityfec-2005": {
    source: "iana"
  },
  "video/vnd.iptvforum.2dparityfec-1010": {
    source: "iana"
  },
  "video/vnd.iptvforum.2dparityfec-2005": {
    source: "iana"
  },
  "video/vnd.iptvforum.ttsavc": {
    source: "iana"
  },
  "video/vnd.iptvforum.ttsmpeg2": {
    source: "iana"
  },
  "video/vnd.motorola.video": {
    source: "iana"
  },
  "video/vnd.motorola.videop": {
    source: "iana"
  },
  "video/vnd.mpegurl": {
    source: "iana",
    extensions: [
      "mxu",
      "m4u"
    ]
  },
  "video/vnd.ms-playready.media.pyv": {
    source: "iana",
    extensions: [
      "pyv"
    ]
  },
  "video/vnd.nokia.interleaved-multimedia": {
    source: "iana"
  },
  "video/vnd.nokia.mp4vr": {
    source: "iana"
  },
  "video/vnd.nokia.videovoip": {
    source: "iana"
  },
  "video/vnd.objectvideo": {
    source: "iana"
  },
  "video/vnd.radgamettools.bink": {
    source: "iana"
  },
  "video/vnd.radgamettools.smacker": {
    source: "iana"
  },
  "video/vnd.sealed.mpeg1": {
    source: "iana"
  },
  "video/vnd.sealed.mpeg4": {
    source: "iana"
  },
  "video/vnd.sealed.swf": {
    source: "iana"
  },
  "video/vnd.sealedmedia.softseal.mov": {
    source: "iana"
  },
  "video/vnd.uvvu.mp4": {
    source: "iana",
    extensions: [
      "uvu",
      "uvvu"
    ]
  },
  "video/vnd.vivo": {
    source: "iana",
    extensions: [
      "viv"
    ]
  },
  "video/vnd.youtube.yt": {
    source: "iana"
  },
  "video/vp8": {
    source: "iana"
  },
  "video/vp9": {
    source: "iana"
  },
  "video/webm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "webm"
    ]
  },
  "video/x-f4v": {
    source: "apache",
    extensions: [
      "f4v"
    ]
  },
  "video/x-fli": {
    source: "apache",
    extensions: [
      "fli"
    ]
  },
  "video/x-flv": {
    source: "apache",
    compressible: !1,
    extensions: [
      "flv"
    ]
  },
  "video/x-m4v": {
    source: "apache",
    extensions: [
      "m4v"
    ]
  },
  "video/x-matroska": {
    source: "apache",
    compressible: !1,
    extensions: [
      "mkv",
      "mk3d",
      "mks"
    ]
  },
  "video/x-mng": {
    source: "apache",
    extensions: [
      "mng"
    ]
  },
  "video/x-ms-asf": {
    source: "apache",
    extensions: [
      "asf",
      "asx"
    ]
  },
  "video/x-ms-vob": {
    source: "apache",
    extensions: [
      "vob"
    ]
  },
  "video/x-ms-wm": {
    source: "apache",
    extensions: [
      "wm"
    ]
  },
  "video/x-ms-wmv": {
    source: "apache",
    compressible: !1,
    extensions: [
      "wmv"
    ]
  },
  "video/x-ms-wmx": {
    source: "apache",
    extensions: [
      "wmx"
    ]
  },
  "video/x-ms-wvx": {
    source: "apache",
    extensions: [
      "wvx"
    ]
  },
  "video/x-msvideo": {
    source: "apache",
    extensions: [
      "avi"
    ]
  },
  "video/x-sgi-movie": {
    source: "apache",
    extensions: [
      "movie"
    ]
  },
  "video/x-smv": {
    source: "apache",
    extensions: [
      "smv"
    ]
  },
  "x-conference/x-cooltalk": {
    source: "apache",
    extensions: [
      "ice"
    ]
  },
  "x-shader/x-fragment": {
    compressible: !0
  },
  "x-shader/x-vertex": {
    compressible: !0
  }
};
/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
var Lme = jme;
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(e) {
  var t = Lme, n = Ye.extname, r = /^\s*([^;\s]*)(?:;|\s|$)/, o = /^text\//i;
  e.charset = s, e.charsets = { lookup: s }, e.contentType = i, e.extension = a, e.extensions = /* @__PURE__ */ Object.create(null), e.lookup = c, e.types = /* @__PURE__ */ Object.create(null), p(e.extensions, e.types);
  function s(l) {
    if (!l || typeof l != "string")
      return !1;
    var u = r.exec(l), d = u && t[u[1].toLowerCase()];
    return d && d.charset ? d.charset : u && o.test(u[1]) ? "UTF-8" : !1;
  }
  function i(l) {
    if (!l || typeof l != "string")
      return !1;
    var u = l.indexOf("/") === -1 ? e.lookup(l) : l;
    if (!u)
      return !1;
    if (u.indexOf("charset") === -1) {
      var d = e.charset(u);
      d && (u += "; charset=" + d.toLowerCase());
    }
    return u;
  }
  function a(l) {
    if (!l || typeof l != "string")
      return !1;
    var u = r.exec(l), d = u && e.extensions[u[1].toLowerCase()];
    return !d || !d.length ? !1 : d[0];
  }
  function c(l) {
    if (!l || typeof l != "string")
      return !1;
    var u = n("x." + l).toLowerCase().substr(1);
    return u && e.types[u] || !1;
  }
  function p(l, u) {
    var d = ["nginx", "apache", void 0, "iana"];
    Object.keys(t).forEach(function(f) {
      var g = t[f], y = g.extensions;
      if (!(!y || !y.length)) {
        l[f] = y;
        for (var v = 0; v < y.length; v++) {
          var b = y[v];
          if (u[b]) {
            var w = d.indexOf(t[u[b]].source), T = d.indexOf(g.source);
            if (u[b] !== "application/octet-stream" && (w > T || w === T && u[b].substr(0, 12) === "application/"))
              continue;
          }
          u[b] = f;
        }
      }
    });
  }
})(fb);
var qme = Fme;
function Fme(e) {
  var t = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
  t ? t(e) : setTimeout(e, 0);
}
var nh = qme, mb = Mme;
function Mme(e) {
  var t = !1;
  return nh(function() {
    t = !0;
  }), function(r, o) {
    t ? e(r, o) : nh(function() {
      e(r, o);
    });
  };
}
var hb = Ume;
function Ume(e) {
  Object.keys(e.jobs).forEach(Vme.bind(e)), e.jobs = {};
}
function Vme(e) {
  typeof this.jobs[e] == "function" && this.jobs[e]();
}
var rh = mb, zme = hb, yb = Bme;
function Bme(e, t, n, r) {
  var o = n.keyedList ? n.keyedList[n.index] : n.index;
  n.jobs[o] = Gme(t, o, e[o], function(s, i) {
    o in n.jobs && (delete n.jobs[o], s ? zme(n) : n.results[o] = i, r(s, n.results));
  });
}
function Gme(e, t, n, r) {
  var o;
  return e.length == 2 ? o = e(n, rh(r)) : o = e(n, t, rh(r)), o;
}
var gb = Hme;
function Hme(e, t) {
  var n = !Array.isArray(e), r = {
    index: 0,
    keyedList: n || t ? Object.keys(e) : null,
    jobs: {},
    results: n ? {} : [],
    size: n ? Object.keys(e).length : e.length
  };
  return t && r.keyedList.sort(n ? t : function(o, s) {
    return t(e[o], e[s]);
  }), r;
}
var Xme = hb, Kme = mb, vb = Wme;
function Wme(e) {
  Object.keys(this.jobs).length && (this.index = this.size, Xme(this), Kme(e)(null, this.results));
}
var Jme = yb, Yme = gb, Qme = vb, Zme = ehe;
function ehe(e, t, n) {
  for (var r = Yme(e); r.index < (r.keyedList || e).length; )
    Jme(e, t, r, function(o, s) {
      if (o) {
        n(o, s);
        return;
      }
      if (Object.keys(r.jobs).length === 0) {
        n(null, r.results);
        return;
      }
    }), r.index++;
  return Qme.bind(r, n);
}
var xa = { exports: {} }, oh = yb, the = gb, nhe = vb;
xa.exports = rhe;
xa.exports.ascending = bb;
xa.exports.descending = ohe;
function rhe(e, t, n, r) {
  var o = the(e, n);
  return oh(e, t, o, function s(i, a) {
    if (i) {
      r(i, a);
      return;
    }
    if (o.index++, o.index < (o.keyedList || e).length) {
      oh(e, t, o, s);
      return;
    }
    r(null, o.results);
  }), nhe.bind(o, r);
}
function bb(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function ohe(e, t) {
  return -1 * bb(e, t);
}
var wb = xa.exports, she = wb, ihe = ahe;
function ahe(e, t, n) {
  return she(e, t, null, n);
}
var che = {
  parallel: Zme,
  serial: ihe,
  serialOrdered: wb
}, xb = Object, lhe = Error, uhe = EvalError, phe = RangeError, dhe = ReferenceError, fhe = SyntaxError, pd = TypeError, mhe = URIError, hhe = Math.abs, yhe = Math.floor, ghe = Math.max, vhe = Math.min, bhe = Math.pow, whe = Math.round, xhe = Number.isNaN || function(t) {
  return t !== t;
}, _he = xhe, $he = function(t) {
  return _he(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, Ehe = Object.getOwnPropertyDescriptor, gi = Ehe;
if (gi)
  try {
    gi([], "length");
  } catch {
    gi = null;
  }
var _b = gi, vi = Object.defineProperty || !1;
if (vi)
  try {
    vi({}, "a", { value: 1 });
  } catch {
    vi = !1;
  }
var She = vi, Lc, sh;
function $b() {
  return sh || (sh = 1, Lc = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, n = Symbol("test"), r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[n] = o;
    for (var s in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var i = Object.getOwnPropertySymbols(t);
    if (i.length !== 1 || i[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, n)
      );
      if (a.value !== o || a.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Lc;
}
var qc, ih;
function The() {
  if (ih) return qc;
  ih = 1;
  var e = typeof Symbol < "u" && Symbol, t = $b();
  return qc = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, qc;
}
var Fc, ah;
function Eb() {
  return ah || (ah = 1, Fc = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Fc;
}
var Mc, ch;
function Sb() {
  if (ch) return Mc;
  ch = 1;
  var e = xb;
  return Mc = e.getPrototypeOf || null, Mc;
}
var Ohe = "Function.prototype.bind called on incompatible ", Phe = Object.prototype.toString, Nhe = Math.max, Rhe = "[object Function]", lh = function(t, n) {
  for (var r = [], o = 0; o < t.length; o += 1)
    r[o] = t[o];
  for (var s = 0; s < n.length; s += 1)
    r[s + t.length] = n[s];
  return r;
}, Ahe = function(t, n) {
  for (var r = [], o = n, s = 0; o < t.length; o += 1, s += 1)
    r[s] = t[o];
  return r;
}, Dhe = function(e, t) {
  for (var n = "", r = 0; r < e.length; r += 1)
    n += e[r], r + 1 < e.length && (n += t);
  return n;
}, Ihe = function(t) {
  var n = this;
  if (typeof n != "function" || Phe.apply(n) !== Rhe)
    throw new TypeError(Ohe + n);
  for (var r = Ahe(arguments, 1), o, s = function() {
    if (this instanceof o) {
      var l = n.apply(
        this,
        lh(r, arguments)
      );
      return Object(l) === l ? l : this;
    }
    return n.apply(
      t,
      lh(r, arguments)
    );
  }, i = Nhe(0, n.length - r.length), a = [], c = 0; c < i; c++)
    a[c] = "$" + c;
  if (o = Function("binder", "return function (" + Dhe(a, ",") + "){ return binder.apply(this,arguments); }")(s), n.prototype) {
    var p = function() {
    };
    p.prototype = n.prototype, o.prototype = new p(), p.prototype = null;
  }
  return o;
}, khe = Ihe, _a = Function.prototype.bind || khe, Uc, uh;
function dd() {
  return uh || (uh = 1, Uc = Function.prototype.call), Uc;
}
var Vc, ph;
function Tb() {
  return ph || (ph = 1, Vc = Function.prototype.apply), Vc;
}
var zc, dh;
function Che() {
  return dh || (dh = 1, zc = typeof Reflect < "u" && Reflect && Reflect.apply), zc;
}
var Bc, fh;
function jhe() {
  if (fh) return Bc;
  fh = 1;
  var e = _a, t = Tb(), n = dd(), r = Che();
  return Bc = r || e.call(n, t), Bc;
}
var Gc, mh;
function Lhe() {
  if (mh) return Gc;
  mh = 1;
  var e = _a, t = pd, n = dd(), r = jhe();
  return Gc = function(s) {
    if (s.length < 1 || typeof s[0] != "function")
      throw new t("a function is required");
    return r(e, n, s);
  }, Gc;
}
var Hc, hh;
function qhe() {
  if (hh) return Hc;
  hh = 1;
  var e = Lhe(), t = _b, n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (i) {
    if (!i || typeof i != "object" || !("code" in i) || i.code !== "ERR_PROTO_ACCESS")
      throw i;
  }
  var r = !!n && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, s = o.getPrototypeOf;
  return Hc = r && typeof r.get == "function" ? e([r.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(a) {
      return s(a == null ? a : o(a));
    }
  ) : !1, Hc;
}
var Xc, yh;
function Fhe() {
  if (yh) return Xc;
  yh = 1;
  var e = Eb(), t = Sb(), n = qhe();
  return Xc = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, Xc;
}
var Mhe = Function.prototype.call, Uhe = Object.prototype.hasOwnProperty, Vhe = _a, fd = Vhe.call(Mhe, Uhe), he, zhe = xb, Bhe = lhe, Ghe = uhe, Hhe = phe, Xhe = dhe, yo = fhe, ro = pd, Khe = mhe, Whe = hhe, Jhe = yhe, Yhe = ghe, Qhe = vhe, Zhe = bhe, eye = whe, tye = $he, Ob = Function, Kc = function(e) {
  try {
    return Ob('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, os = _b, nye = She, Wc = function() {
  throw new ro();
}, rye = os ? function() {
  try {
    return arguments.callee, Wc;
  } catch {
    try {
      return os(arguments, "callee").get;
    } catch {
      return Wc;
    }
  }
}() : Wc, zr = The()(), Fe = Fhe(), oye = Sb(), sye = Eb(), Pb = Tb(), Es = dd(), Xr = {}, iye = typeof Uint8Array > "u" || !Fe ? he : Fe(Uint8Array), Tr = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? he : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? he : ArrayBuffer,
  "%ArrayIteratorPrototype%": zr && Fe ? Fe([][Symbol.iterator]()) : he,
  "%AsyncFromSyncIteratorPrototype%": he,
  "%AsyncFunction%": Xr,
  "%AsyncGenerator%": Xr,
  "%AsyncGeneratorFunction%": Xr,
  "%AsyncIteratorPrototype%": Xr,
  "%Atomics%": typeof Atomics > "u" ? he : Atomics,
  "%BigInt%": typeof BigInt > "u" ? he : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? he : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? he : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? he : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Bhe,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Ghe,
  "%Float16Array%": typeof Float16Array > "u" ? he : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? he : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? he : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? he : FinalizationRegistry,
  "%Function%": Ob,
  "%GeneratorFunction%": Xr,
  "%Int8Array%": typeof Int8Array > "u" ? he : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? he : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? he : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": zr && Fe ? Fe(Fe([][Symbol.iterator]())) : he,
  "%JSON%": typeof JSON == "object" ? JSON : he,
  "%Map%": typeof Map > "u" ? he : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !zr || !Fe ? he : Fe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": zhe,
  "%Object.getOwnPropertyDescriptor%": os,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? he : Promise,
  "%Proxy%": typeof Proxy > "u" ? he : Proxy,
  "%RangeError%": Hhe,
  "%ReferenceError%": Xhe,
  "%Reflect%": typeof Reflect > "u" ? he : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? he : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !zr || !Fe ? he : Fe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? he : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": zr && Fe ? Fe(""[Symbol.iterator]()) : he,
  "%Symbol%": zr ? Symbol : he,
  "%SyntaxError%": yo,
  "%ThrowTypeError%": rye,
  "%TypedArray%": iye,
  "%TypeError%": ro,
  "%Uint8Array%": typeof Uint8Array > "u" ? he : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? he : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? he : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? he : Uint32Array,
  "%URIError%": Khe,
  "%WeakMap%": typeof WeakMap > "u" ? he : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? he : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? he : WeakSet,
  "%Function.prototype.call%": Es,
  "%Function.prototype.apply%": Pb,
  "%Object.defineProperty%": nye,
  "%Object.getPrototypeOf%": oye,
  "%Math.abs%": Whe,
  "%Math.floor%": Jhe,
  "%Math.max%": Yhe,
  "%Math.min%": Qhe,
  "%Math.pow%": Zhe,
  "%Math.round%": eye,
  "%Math.sign%": tye,
  "%Reflect.getPrototypeOf%": sye
};
if (Fe)
  try {
    null.error;
  } catch (e) {
    var aye = Fe(Fe(e));
    Tr["%Error.prototype%"] = aye;
  }
var cye = function e(t) {
  var n;
  if (t === "%AsyncFunction%")
    n = Kc("async function () {}");
  else if (t === "%GeneratorFunction%")
    n = Kc("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    n = Kc("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var r = e("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var o = e("%AsyncGenerator%");
    o && Fe && (n = Fe(o.prototype));
  }
  return Tr[t] = n, n;
}, gh = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Ss = _a, Fi = fd, lye = Ss.call(Es, Array.prototype.concat), uye = Ss.call(Pb, Array.prototype.splice), vh = Ss.call(Es, String.prototype.replace), Mi = Ss.call(Es, String.prototype.slice), pye = Ss.call(Es, RegExp.prototype.exec), dye = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, fye = /\\(\\)?/g, mye = function(t) {
  var n = Mi(t, 0, 1), r = Mi(t, -1);
  if (n === "%" && r !== "%")
    throw new yo("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new yo("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return vh(t, dye, function(s, i, a, c) {
    o[o.length] = a ? vh(c, fye, "$1") : i || s;
  }), o;
}, hye = function(t, n) {
  var r = t, o;
  if (Fi(gh, r) && (o = gh[r], r = "%" + o[0] + "%"), Fi(Tr, r)) {
    var s = Tr[r];
    if (s === Xr && (s = cye(r)), typeof s > "u" && !n)
      throw new ro("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: s
    };
  }
  throw new yo("intrinsic " + t + " does not exist!");
}, yye = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new ro("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new ro('"allowMissing" argument must be a boolean');
  if (pye(/^%?[^%]*%?$/, t) === null)
    throw new yo("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = mye(t), o = r.length > 0 ? r[0] : "", s = hye("%" + o + "%", n), i = s.name, a = s.value, c = !1, p = s.alias;
  p && (o = p[0], uye(r, lye([0, 1], p)));
  for (var l = 1, u = !0; l < r.length; l += 1) {
    var d = r[l], m = Mi(d, 0, 1), f = Mi(d, -1);
    if ((m === '"' || m === "'" || m === "`" || f === '"' || f === "'" || f === "`") && m !== f)
      throw new yo("property names with quotes must have matching quotes");
    if ((d === "constructor" || !u) && (c = !0), o += "." + d, i = "%" + o + "%", Fi(Tr, i))
      a = Tr[i];
    else if (a != null) {
      if (!(d in a)) {
        if (!n)
          throw new ro("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (os && l + 1 >= r.length) {
        var g = os(a, d);
        u = !!g, u && "get" in g && !("originalValue" in g.get) ? a = g.get : a = a[d];
      } else
        u = Fi(a, d), a = a[d];
      u && !c && (Tr[i] = a);
    }
  }
  return a;
}, Jc, bh;
function gye() {
  if (bh) return Jc;
  bh = 1;
  var e = $b();
  return Jc = function() {
    return e() && !!Symbol.toStringTag;
  }, Jc;
}
var vye = yye, wh = vye("%Object.defineProperty%", !0), bye = gye()(), wye = fd, xye = pd, Qs = bye ? Symbol.toStringTag : null, _ye = function(t, n) {
  var r = arguments.length > 2 && !!arguments[2] && arguments[2].force, o = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
  if (typeof r < "u" && typeof r != "boolean" || typeof o < "u" && typeof o != "boolean")
    throw new xye("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
  Qs && (r || !wye(t, Qs)) && (wh ? wh(t, Qs, {
    configurable: !o,
    enumerable: !1,
    value: n,
    writable: !1
  }) : t[Qs] = n);
}, $ye = function(e, t) {
  return Object.keys(t).forEach(function(n) {
    e[n] = e[n] || t[n];
  }), e;
}, md = Cme, Eye = er, Yc = Ye, Sye = Hi, Tye = Xi, Oye = fs.parse, Pye = Xl, Nye = lt.Stream, Rye = vy, Qc = fb, Aye = che, Dye = _ye, Zn = fd, Il = $ye;
function ve(e) {
  if (!(this instanceof ve))
    return new ve(e);
  this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], md.call(this), e = e || {};
  for (var t in e)
    this[t] = e[t];
}
Eye.inherits(ve, md);
ve.LINE_BREAK = `\r
`;
ve.DEFAULT_CONTENT_TYPE = "application/octet-stream";
ve.prototype.append = function(e, t, n) {
  n = n || {}, typeof n == "string" && (n = { filename: n });
  var r = md.prototype.append.bind(this);
  if ((typeof t == "number" || t == null) && (t = String(t)), Array.isArray(t)) {
    this._error(new Error("Arrays are not supported."));
    return;
  }
  var o = this._multiPartHeader(e, t, n), s = this._multiPartFooter();
  r(o), r(t), r(s), this._trackLength(o, t, n);
};
ve.prototype._trackLength = function(e, t, n) {
  var r = 0;
  n.knownLength != null ? r += Number(n.knownLength) : Buffer.isBuffer(t) ? r = t.length : typeof t == "string" && (r = Buffer.byteLength(t)), this._valueLength += r, this._overheadLength += Buffer.byteLength(e) + ve.LINE_BREAK.length, !(!t || !t.path && !(t.readable && Zn(t, "httpVersion")) && !(t instanceof Nye)) && (n.knownLength || this._valuesToMeasure.push(t));
};
ve.prototype._lengthRetriever = function(e, t) {
  Zn(e, "fd") ? e.end != null && e.end != 1 / 0 && e.start != null ? t(null, e.end + 1 - (e.start ? e.start : 0)) : Pye.stat(e.path, function(n, r) {
    if (n) {
      t(n);
      return;
    }
    var o = r.size - (e.start ? e.start : 0);
    t(null, o);
  }) : Zn(e, "httpVersion") ? t(null, Number(e.headers["content-length"])) : Zn(e, "httpModule") ? (e.on("response", function(n) {
    e.pause(), t(null, Number(n.headers["content-length"]));
  }), e.resume()) : t("Unknown stream");
};
ve.prototype._multiPartHeader = function(e, t, n) {
  if (typeof n.header == "string")
    return n.header;
  var r = this._getContentDisposition(t, n), o = this._getContentType(t, n), s = "", i = {
    // add custom disposition as third element or keep it two elements if not
    "Content-Disposition": ["form-data", 'name="' + e + '"'].concat(r || []),
    // if no content type. allow it to be empty array
    "Content-Type": [].concat(o || [])
  };
  typeof n.header == "object" && Il(i, n.header);
  var a;
  for (var c in i)
    if (Zn(i, c)) {
      if (a = i[c], a == null)
        continue;
      Array.isArray(a) || (a = [a]), a.length && (s += c + ": " + a.join("; ") + ve.LINE_BREAK);
    }
  return "--" + this.getBoundary() + ve.LINE_BREAK + s + ve.LINE_BREAK;
};
ve.prototype._getContentDisposition = function(e, t) {
  var n;
  if (typeof t.filepath == "string" ? n = Yc.normalize(t.filepath).replace(/\\/g, "/") : t.filename || e && (e.name || e.path) ? n = Yc.basename(t.filename || e && (e.name || e.path)) : e && e.readable && Zn(e, "httpVersion") && (n = Yc.basename(e.client._httpMessage.path || "")), n)
    return 'filename="' + n + '"';
};
ve.prototype._getContentType = function(e, t) {
  var n = t.contentType;
  return !n && e && e.name && (n = Qc.lookup(e.name)), !n && e && e.path && (n = Qc.lookup(e.path)), !n && e && e.readable && Zn(e, "httpVersion") && (n = e.headers["content-type"]), !n && (t.filepath || t.filename) && (n = Qc.lookup(t.filepath || t.filename)), !n && e && typeof e == "object" && (n = ve.DEFAULT_CONTENT_TYPE), n;
};
ve.prototype._multiPartFooter = function() {
  return (function(e) {
    var t = ve.LINE_BREAK, n = this._streams.length === 0;
    n && (t += this._lastBoundary()), e(t);
  }).bind(this);
};
ve.prototype._lastBoundary = function() {
  return "--" + this.getBoundary() + "--" + ve.LINE_BREAK;
};
ve.prototype.getHeaders = function(e) {
  var t, n = {
    "content-type": "multipart/form-data; boundary=" + this.getBoundary()
  };
  for (t in e)
    Zn(e, t) && (n[t.toLowerCase()] = e[t]);
  return n;
};
ve.prototype.setBoundary = function(e) {
  if (typeof e != "string")
    throw new TypeError("FormData boundary must be a string");
  this._boundary = e;
};
ve.prototype.getBoundary = function() {
  return this._boundary || this._generateBoundary(), this._boundary;
};
ve.prototype.getBuffer = function() {
  for (var e = new Buffer.alloc(0), t = this.getBoundary(), n = 0, r = this._streams.length; n < r; n++)
    typeof this._streams[n] != "function" && (Buffer.isBuffer(this._streams[n]) ? e = Buffer.concat([e, this._streams[n]]) : e = Buffer.concat([e, Buffer.from(this._streams[n])]), (typeof this._streams[n] != "string" || this._streams[n].substring(2, t.length + 2) !== t) && (e = Buffer.concat([e, Buffer.from(ve.LINE_BREAK)])));
  return Buffer.concat([e, Buffer.from(this._lastBoundary())]);
};
ve.prototype._generateBoundary = function() {
  this._boundary = "--------------------------" + Rye.randomBytes(12).toString("hex");
};
ve.prototype.getLengthSync = function() {
  var e = this._overheadLength + this._valueLength;
  return this._streams.length && (e += this._lastBoundary().length), this.hasKnownLength() || this._error(new Error("Cannot calculate proper length in synchronous way.")), e;
};
ve.prototype.hasKnownLength = function() {
  var e = !0;
  return this._valuesToMeasure.length && (e = !1), e;
};
ve.prototype.getLength = function(e) {
  var t = this._overheadLength + this._valueLength;
  if (this._streams.length && (t += this._lastBoundary().length), !this._valuesToMeasure.length) {
    process.nextTick(e.bind(this, null, t));
    return;
  }
  Aye.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, r) {
    if (n) {
      e(n);
      return;
    }
    r.forEach(function(o) {
      t += o;
    }), e(null, t);
  });
};
ve.prototype.submit = function(e, t) {
  var n, r, o = { method: "post" };
  return typeof e == "string" ? (e = Oye(e), r = Il({
    port: e.port,
    path: e.pathname,
    host: e.hostname,
    protocol: e.protocol
  }, o)) : (r = Il(e, o), r.port || (r.port = r.protocol === "https:" ? 443 : 80)), r.headers = this.getHeaders(e.headers), r.protocol === "https:" ? n = Tye.request(r) : n = Sye.request(r), this.getLength((function(s, i) {
    if (s && s !== "Unknown stream") {
      this._error(s);
      return;
    }
    if (i && n.setHeader("Content-Length", i), this.pipe(n), t) {
      var a, c = function(p, l) {
        return n.removeListener("error", c), n.removeListener("response", a), t.call(this, p, l);
      };
      a = c.bind(this, null), n.on("error", c), n.on("response", a);
    }
  }).bind(this)), n;
};
ve.prototype._error = function(e) {
  this.error || (this.error = e, this.pause(), this.emit("error", e));
};
ve.prototype.toString = function() {
  return "[object FormData]";
};
Dye(ve.prototype, "FormData");
var Iye = ve;
const Nb = /* @__PURE__ */ tr(Iye);
function kl(e) {
  return L.isPlainObject(e) || L.isArray(e);
}
function Rb(e) {
  return L.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function xh(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Rb(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function kye(e) {
  return L.isArray(e) && !e.some(kl);
}
const Cye = L.toFlatObject(L, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function $a(e, t, n) {
  if (!L.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (Nb || FormData)(), n = L.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, y) {
    return !L.isUndefined(y[g]);
  });
  const r = n.metaTokens, o = n.visitor || l, s = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(t);
  if (!L.isFunction(o))
    throw new TypeError("visitor must be a function");
  function p(f) {
    if (f === null) return "";
    if (L.isDate(f))
      return f.toISOString();
    if (L.isBoolean(f))
      return f.toString();
    if (!c && L.isBlob(f))
      throw new W("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(f) || L.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, g, y) {
    let v = f;
    if (f && !y && typeof f == "object") {
      if (L.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), f = JSON.stringify(f);
      else if (L.isArray(f) && kye(f) || (L.isFileList(f) || L.endsWith(g, "[]")) && (v = L.toArray(f)))
        return g = Rb(g), v.forEach(function(w, T) {
          !(L.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? xh([g], T, s) : i === null ? g : g + "[]",
            p(w)
          );
        }), !1;
    }
    return kl(f) ? !0 : (t.append(xh(y, g, s), p(f)), !1);
  }
  const u = [], d = Object.assign(Cye, {
    defaultVisitor: l,
    convertValue: p,
    isVisitable: kl
  });
  function m(f, g) {
    if (!L.isUndefined(f)) {
      if (u.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      u.push(f), L.forEach(f, function(v, b) {
        (!(L.isUndefined(v) || v === null) && o.call(
          t,
          v,
          L.isString(b) ? b.trim() : b,
          g,
          d
        )) === !0 && m(v, g ? g.concat(b) : [b]);
      }), u.pop();
    }
  }
  if (!L.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function _h(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Ab(e, t) {
  this._pairs = [], e && $a(e, this, t);
}
const Db = Ab.prototype;
Db.append = function(t, n) {
  this._pairs.push([t, n]);
};
Db.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, _h);
  } : _h;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function jye(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function hd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || jye, o = L.isFunction(n) ? {
    serialize: n
  } : n, s = o && o.serialize;
  let i;
  if (s ? i = s(t, o) : i = L.isURLSearchParams(t) ? t.toString() : new Ab(t, o).toString(r), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class $h {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    L.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ea = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Lye = fs.URLSearchParams, Zc = "abcdefghijklmnopqrstuvwxyz", Eh = "0123456789", Ib = {
  DIGIT: Eh,
  ALPHA: Zc,
  ALPHA_DIGIT: Zc + Zc.toUpperCase() + Eh
}, qye = (e = 16, t = Ib.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t, o = new Uint32Array(e);
  vy.randomFillSync(o);
  for (let s = 0; s < e; s++)
    n += t[o[s] % r];
  return n;
}, Fye = {
  isNode: !0,
  classes: {
    URLSearchParams: Lye,
    FormData: Nb,
    Blob: typeof Blob < "u" && Blob || null
  },
  ALPHABET: Ib,
  generateString: qye,
  protocols: ["http", "https", "file", "data"]
}, yd = typeof window < "u" && typeof document < "u", Cl = typeof navigator == "object" && navigator || void 0, Mye = yd && (!Cl || ["ReactNative", "NativeScript", "NS"].indexOf(Cl.product) < 0), Uye = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Vye = yd && window.location.href || "http://localhost", zye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: yd,
  hasStandardBrowserEnv: Mye,
  hasStandardBrowserWebWorkerEnv: Uye,
  navigator: Cl,
  origin: Vye
}, Symbol.toStringTag, { value: "Module" })), Ne = {
  ...zye,
  ...Fye
};
function Bye(e, t) {
  return $a(e, new Ne.classes.URLSearchParams(), {
    visitor: function(n, r, o, s) {
      return Ne.isNode && L.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Gye(e) {
  return L.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Hye(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function kb(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), c = s >= n.length;
    return i = !i && L.isArray(o) ? o.length : i, c ? (L.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !L.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && L.isArray(o[i]) && (o[i] = Hye(o[i])), !a);
  }
  if (L.isFormData(e) && L.isFunction(e.entries)) {
    const n = {};
    return L.forEachEntry(e, (r, o) => {
      t(Gye(r), o, n, 0);
    }), n;
  }
  return null;
}
function Xye(e, t, n) {
  if (L.isString(e))
    try {
      return (t || JSON.parse)(e), L.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ts = {
  transitional: Ea,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = L.isObject(t);
    if (s && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t))
      return o ? JSON.stringify(kb(t)) : t;
    if (L.isArrayBuffer(t) || L.isBuffer(t) || L.isStream(t) || L.isFile(t) || L.isBlob(t) || L.isReadableStream(t))
      return t;
    if (L.isArrayBufferView(t))
      return t.buffer;
    if (L.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Bye(t, this.formSerializer).toString();
      if ((a = L.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return $a(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), Xye(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ts.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (L.isResponse(t) || L.isReadableStream(t))
      return t;
    if (t && L.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? W.from(a, W.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ne.classes.FormData,
    Blob: Ne.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
L.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ts.headers[e] = {};
});
const Kye = L.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Wye = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && Kye[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Sh = Symbol("internals");
function Mo(e) {
  return e && String(e).trim().toLowerCase();
}
function bi(e) {
  return e === !1 || e == null ? e : L.isArray(e) ? e.map(bi) : String(e);
}
function Jye(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Yye = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function el(e, t, n, r, o) {
  if (L.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!L.isString(t)) {
    if (L.isString(r))
      return t.indexOf(r) !== -1;
    if (L.isRegExp(r))
      return r.test(t);
  }
}
function Qye(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Zye(e, t) {
  const n = L.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
let Qe = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, c, p) {
      const l = Mo(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const u = L.findKey(o, l);
      (!u || o[u] === void 0 || p === !0 || p === void 0 && o[u] !== !1) && (o[u || c] = bi(a));
    }
    const i = (a, c) => L.forEach(a, (p, l) => s(p, l, c));
    if (L.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (L.isString(t) && (t = t.trim()) && !Yye(t))
      i(Wye(t), n);
    else if (L.isObject(t) && L.isIterable(t)) {
      let a = {}, c, p;
      for (const l of t) {
        if (!L.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[p = l[0]] = (c = a[p]) ? L.isArray(c) ? [...c, l[1]] : [c, l[1]] : l[1];
      }
      i(a, n);
    } else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Mo(t), t) {
      const r = L.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Jye(o);
        if (L.isFunction(n))
          return n.call(this, o, r);
        if (L.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Mo(t), t) {
      const r = L.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || el(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = Mo(i), i) {
        const a = L.findKey(r, i);
        a && (!n || el(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return L.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || el(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return L.forEach(this, (o, s) => {
      const i = L.findKey(r, s);
      if (i) {
        n[i] = bi(o), delete n[s];
        return;
      }
      const a = t ? Qye(s) : String(s).trim();
      a !== s && delete n[s], n[a] = bi(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return L.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && L.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Sh] = this[Sh] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = Mo(i);
      r[a] || (Zye(o, i), r[a] = !0);
    }
    return L.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
Qe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(Qe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
L.freezeMethods(Qe);
function tl(e, t) {
  const n = this || Ts, r = t || n, o = Qe.from(r.headers);
  let s = r.data;
  return L.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Cb(e) {
  return !!(e && e.__CANCEL__);
}
let kr = class extends W {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", W.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Yr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new W(
    "Request failed with status code " + n.status,
    [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function ege(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function tge(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function gd(e, t, n) {
  let r = !ege(t);
  return e && (r || n == !1) ? tge(e, t) : t;
}
var jb = {}, nge = fs.parse, rge = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}, oge = String.prototype.endsWith || function(e) {
  return e.length <= this.length && this.indexOf(e, this.length - e.length) !== -1;
};
function sge(e) {
  var t = typeof e == "string" ? nge(e) : e || {}, n = t.protocol, r = t.host, o = t.port;
  if (typeof r != "string" || !r || typeof n != "string" || (n = n.split(":", 1)[0], r = r.replace(/:\d*$/, ""), o = parseInt(o) || rge[n] || 0, !ige(r, o)))
    return "";
  var s = Qr("npm_config_" + n + "_proxy") || Qr(n + "_proxy") || Qr("npm_config_proxy") || Qr("all_proxy");
  return s && s.indexOf("://") === -1 && (s = n + "://" + s), s;
}
function ige(e, t) {
  var n = (Qr("npm_config_no_proxy") || Qr("no_proxy")).toLowerCase();
  return n ? n === "*" ? !1 : n.split(/[,\s]/).every(function(r) {
    if (!r)
      return !0;
    var o = r.match(/^(.+):(\d+)$/), s = o ? o[1] : r, i = o ? parseInt(o[2]) : 0;
    return i && i !== t ? !0 : /^[.*]/.test(s) ? (s.charAt(0) === "*" && (s = s.slice(1)), !oge.call(e, s)) : e !== s;
  }) : !0;
}
function Qr(e) {
  return process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || "";
}
jb.getProxyForUrl = sge;
var vd = { exports: {} }, Zs = { exports: {} }, ei = { exports: {} }, nl, Th;
function age() {
  if (Th) return nl;
  Th = 1;
  var e = 1e3, t = e * 60, n = t * 60, r = n * 24, o = r * 7, s = r * 365.25;
  nl = function(l, u) {
    u = u || {};
    var d = typeof l;
    if (d === "string" && l.length > 0)
      return i(l);
    if (d === "number" && isFinite(l))
      return u.long ? c(l) : a(l);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(l)
    );
  };
  function i(l) {
    if (l = String(l), !(l.length > 100)) {
      var u = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        l
      );
      if (u) {
        var d = parseFloat(u[1]), m = (u[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * s;
          case "weeks":
          case "week":
          case "w":
            return d * o;
          case "days":
          case "day":
          case "d":
            return d * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;
          default:
            return;
        }
      }
    }
  }
  function a(l) {
    var u = Math.abs(l);
    return u >= r ? Math.round(l / r) + "d" : u >= n ? Math.round(l / n) + "h" : u >= t ? Math.round(l / t) + "m" : u >= e ? Math.round(l / e) + "s" : l + "ms";
  }
  function c(l) {
    var u = Math.abs(l);
    return u >= r ? p(l, u, r, "day") : u >= n ? p(l, u, n, "hour") : u >= t ? p(l, u, t, "minute") : u >= e ? p(l, u, e, "second") : l + " ms";
  }
  function p(l, u, d, m) {
    var f = u >= d * 1.5;
    return Math.round(l / d) + " " + m + (f ? "s" : "");
  }
  return nl;
}
var rl, Oh;
function Lb() {
  if (Oh) return rl;
  Oh = 1;
  function e(t) {
    r.debug = r, r.default = r, r.coerce = p, r.disable = a, r.enable = s, r.enabled = c, r.humanize = age(), r.destroy = l, Object.keys(t).forEach((u) => {
      r[u] = t[u];
    }), r.names = [], r.skips = [], r.formatters = {};
    function n(u) {
      let d = 0;
      for (let m = 0; m < u.length; m++)
        d = (d << 5) - d + u.charCodeAt(m), d |= 0;
      return r.colors[Math.abs(d) % r.colors.length];
    }
    r.selectColor = n;
    function r(u) {
      let d, m = null, f, g;
      function y(...v) {
        if (!y.enabled)
          return;
        const b = y, w = Number(/* @__PURE__ */ new Date()), T = w - (d || w);
        b.diff = T, b.prev = d, b.curr = w, d = w, v[0] = r.coerce(v[0]), typeof v[0] != "string" && v.unshift("%O");
        let P = 0;
        v[0] = v[0].replace(/%([a-zA-Z%])/g, (B, k) => {
          if (B === "%%")
            return "%";
          P++;
          const E = r.formatters[k];
          if (typeof E == "function") {
            const q = v[P];
            B = E.call(b, q), v.splice(P, 1), P--;
          }
          return B;
        }), r.formatArgs.call(b, v), (b.log || r.log).apply(b, v);
      }
      return y.namespace = u, y.useColors = r.useColors(), y.color = r.selectColor(u), y.extend = o, y.destroy = r.destroy, Object.defineProperty(y, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => m !== null ? m : (f !== r.namespaces && (f = r.namespaces, g = r.enabled(u)), g),
        set: (v) => {
          m = v;
        }
      }), typeof r.init == "function" && r.init(y), y;
    }
    function o(u, d) {
      const m = r(this.namespace + (typeof d > "u" ? ":" : d) + u);
      return m.log = this.log, m;
    }
    function s(u) {
      r.save(u), r.namespaces = u, r.names = [], r.skips = [];
      const d = (typeof u == "string" ? u : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const m of d)
        m[0] === "-" ? r.skips.push(m.slice(1)) : r.names.push(m);
    }
    function i(u, d) {
      let m = 0, f = 0, g = -1, y = 0;
      for (; m < u.length; )
        if (f < d.length && (d[f] === u[m] || d[f] === "*"))
          d[f] === "*" ? (g = f, y = m, f++) : (m++, f++);
        else if (g !== -1)
          f = g + 1, y++, m = y;
        else
          return !1;
      for (; f < d.length && d[f] === "*"; )
        f++;
      return f === d.length;
    }
    function a() {
      const u = [
        ...r.names,
        ...r.skips.map((d) => "-" + d)
      ].join(",");
      return r.enable(""), u;
    }
    function c(u) {
      for (const d of r.skips)
        if (i(u, d))
          return !1;
      for (const d of r.names)
        if (i(u, d))
          return !0;
      return !1;
    }
    function p(u) {
      return u instanceof Error ? u.stack || u.message : u;
    }
    function l() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  return rl = e, rl;
}
var Ph;
function cge() {
  return Ph || (Ph = 1, function(e, t) {
    t.formatArgs = r, t.save = o, t.load = s, t.useColors = n, t.storage = i(), t.destroy = /* @__PURE__ */ (() => {
      let c = !1;
      return () => {
        c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), t.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function n() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let c;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (c = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(c[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function r(c) {
      if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
        return;
      const p = "color: " + this.color;
      c.splice(1, 0, p, "color: inherit");
      let l = 0, u = 0;
      c[0].replace(/%[a-zA-Z%]/g, (d) => {
        d !== "%%" && (l++, d === "%c" && (u = l));
      }), c.splice(u, 0, p);
    }
    t.log = console.debug || console.log || (() => {
    });
    function o(c) {
      try {
        c ? t.storage.setItem("debug", c) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function s() {
      let c;
      try {
        c = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !c && typeof process < "u" && "env" in process && (c = process.env.DEBUG), c;
    }
    function i() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = Lb()(t);
    const { formatters: a } = e.exports;
    a.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (p) {
        return "[UnexpectedJSONParseError]: " + p.message;
      }
    };
  }(ei, ei.exports)), ei.exports;
}
var ti = { exports: {} }, ol, Nh;
function lge() {
  return Nh || (Nh = 1, ol = (e, t = process.argv) => {
    const n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", r = t.indexOf(n + e), o = t.indexOf("--");
    return r !== -1 && (o === -1 || r < o);
  }), ol;
}
var sl, Rh;
function uge() {
  if (Rh) return sl;
  Rh = 1;
  const e = Qw, t = xy, n = lge(), { env: r } = process;
  let o;
  n("no-color") || n("no-colors") || n("color=false") || n("color=never") ? o = 0 : (n("color") || n("colors") || n("color=true") || n("color=always")) && (o = 1), "FORCE_COLOR" in r && (r.FORCE_COLOR === "true" ? o = 1 : r.FORCE_COLOR === "false" ? o = 0 : o = r.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(r.FORCE_COLOR, 10), 3));
  function s(c) {
    return c === 0 ? !1 : {
      level: c,
      hasBasic: !0,
      has256: c >= 2,
      has16m: c >= 3
    };
  }
  function i(c, p) {
    if (o === 0)
      return 0;
    if (n("color=16m") || n("color=full") || n("color=truecolor"))
      return 3;
    if (n("color=256"))
      return 2;
    if (c && !p && o === void 0)
      return 0;
    const l = o || 0;
    if (r.TERM === "dumb")
      return l;
    if (process.platform === "win32") {
      const u = e.release().split(".");
      return Number(u[0]) >= 10 && Number(u[2]) >= 10586 ? Number(u[2]) >= 14931 ? 3 : 2 : 1;
    }
    if ("CI" in r)
      return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((u) => u in r) || r.CI_NAME === "codeship" ? 1 : l;
    if ("TEAMCITY_VERSION" in r)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(r.TEAMCITY_VERSION) ? 1 : 0;
    if (r.COLORTERM === "truecolor")
      return 3;
    if ("TERM_PROGRAM" in r) {
      const u = parseInt((r.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (r.TERM_PROGRAM) {
        case "iTerm.app":
          return u >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(r.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(r.TERM) || "COLORTERM" in r ? 1 : l;
  }
  function a(c) {
    const p = i(c, c && c.isTTY);
    return s(p);
  }
  return sl = {
    supportsColor: a,
    stdout: s(i(!0, t.isatty(1))),
    stderr: s(i(!0, t.isatty(2)))
  }, sl;
}
var Ah;
function pge() {
  return Ah || (Ah = 1, function(e, t) {
    const n = xy, r = er;
    t.init = l, t.log = a, t.formatArgs = s, t.save = c, t.load = p, t.useColors = o, t.destroy = r.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), t.colors = [6, 2, 3, 4, 5, 1];
    try {
      const d = uge();
      d && (d.stderr || d).level >= 2 && (t.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221
      ]);
    } catch {
    }
    t.inspectOpts = Object.keys(process.env).filter((d) => /^debug_/i.test(d)).reduce((d, m) => {
      const f = m.substring(6).toLowerCase().replace(/_([a-z])/g, (y, v) => v.toUpperCase());
      let g = process.env[m];
      return /^(yes|on|true|enabled)$/i.test(g) ? g = !0 : /^(no|off|false|disabled)$/i.test(g) ? g = !1 : g === "null" ? g = null : g = Number(g), d[f] = g, d;
    }, {});
    function o() {
      return "colors" in t.inspectOpts ? !!t.inspectOpts.colors : n.isatty(process.stderr.fd);
    }
    function s(d) {
      const { namespace: m, useColors: f } = this;
      if (f) {
        const g = this.color, y = "\x1B[3" + (g < 8 ? g : "8;5;" + g), v = `  ${y};1m${m} \x1B[0m`;
        d[0] = v + d[0].split(`
`).join(`
` + v), d.push(y + "m+" + e.exports.humanize(this.diff) + "\x1B[0m");
      } else
        d[0] = i() + m + " " + d[0];
    }
    function i() {
      return t.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function a(...d) {
      return process.stderr.write(r.formatWithOptions(t.inspectOpts, ...d) + `
`);
    }
    function c(d) {
      d ? process.env.DEBUG = d : delete process.env.DEBUG;
    }
    function p() {
      return process.env.DEBUG;
    }
    function l(d) {
      d.inspectOpts = {};
      const m = Object.keys(t.inspectOpts);
      for (let f = 0; f < m.length; f++)
        d.inspectOpts[m[f]] = t.inspectOpts[m[f]];
    }
    e.exports = Lb()(t);
    const { formatters: u } = e.exports;
    u.o = function(d) {
      return this.inspectOpts.colors = this.useColors, r.inspect(d, this.inspectOpts).split(`
`).map((m) => m.trim()).join(" ");
    }, u.O = function(d) {
      return this.inspectOpts.colors = this.useColors, r.inspect(d, this.inspectOpts);
    };
  }(ti, ti.exports)), ti.exports;
}
var Dh;
function dge() {
  return Dh || (Dh = 1, typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? Zs.exports = cge() : Zs.exports = pge()), Zs.exports;
}
var Uo, fge = function() {
  if (!Uo) {
    try {
      Uo = dge()("follow-redirects");
    } catch {
    }
    typeof Uo != "function" && (Uo = function() {
    });
  }
  Uo.apply(null, arguments);
}, Os = fs, ss = Os.URL, mge = Hi, hge = Xi, bd = lt.Writable, wd = wy, qb = fge;
(function() {
  var t = typeof process < "u", n = typeof window < "u" && typeof document < "u", r = Cr(Error.captureStackTrace);
  !t && (n || !r) && console.warn("The follow-redirects package should be excluded from browser builds.");
})();
var xd = !1;
try {
  wd(new ss(""));
} catch (e) {
  xd = e.code === "ERR_INVALID_URL";
}
var yge = [
  "auth",
  "host",
  "hostname",
  "href",
  "path",
  "pathname",
  "port",
  "protocol",
  "query",
  "search",
  "hash"
], _d = ["abort", "aborted", "connect", "error", "socket", "timeout"], $d = /* @__PURE__ */ Object.create(null);
_d.forEach(function(e) {
  $d[e] = function(t, n, r) {
    this._redirectable.emit(e, t, n, r);
  };
});
var jl = Ps(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
), Ll = Ps(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
), gge = Ps(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  Ll
), vge = Ps(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
), bge = Ps(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
), wge = bd.prototype.destroy || Mb;
function _t(e, t) {
  bd.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
  var n = this;
  this._onNativeResponse = function(r) {
    try {
      n._processResponse(r);
    } catch (o) {
      n.emit("error", o instanceof Ll ? o : new Ll({ cause: o }));
    }
  }, this._performRequest();
}
_t.prototype = Object.create(bd.prototype);
_t.prototype.abort = function() {
  Sd(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
};
_t.prototype.destroy = function(e) {
  return Sd(this._currentRequest, e), wge.call(this, e), this;
};
_t.prototype.write = function(e, t, n) {
  if (this._ending)
    throw new bge();
  if (!Or(e) && !$ge(e))
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  if (Cr(t) && (n = t, t = null), e.length === 0) {
    n && n();
    return;
  }
  this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({ data: e, encoding: t }), this._currentRequest.write(e, t, n)) : (this.emit("error", new vge()), this.abort());
};
_t.prototype.end = function(e, t, n) {
  if (Cr(e) ? (n = e, e = t = null) : Cr(t) && (n = t, t = null), !e)
    this._ended = this._ending = !0, this._currentRequest.end(null, null, n);
  else {
    var r = this, o = this._currentRequest;
    this.write(e, t, function() {
      r._ended = !0, o.end(null, null, n);
    }), this._ending = !0;
  }
};
_t.prototype.setHeader = function(e, t) {
  this._options.headers[e] = t, this._currentRequest.setHeader(e, t);
};
_t.prototype.removeHeader = function(e) {
  delete this._options.headers[e], this._currentRequest.removeHeader(e);
};
_t.prototype.setTimeout = function(e, t) {
  var n = this;
  function r(i) {
    i.setTimeout(e), i.removeListener("timeout", i.destroy), i.addListener("timeout", i.destroy);
  }
  function o(i) {
    n._timeout && clearTimeout(n._timeout), n._timeout = setTimeout(function() {
      n.emit("timeout"), s();
    }, e), r(i);
  }
  function s() {
    n._timeout && (clearTimeout(n._timeout), n._timeout = null), n.removeListener("abort", s), n.removeListener("error", s), n.removeListener("response", s), n.removeListener("close", s), t && n.removeListener("timeout", t), n.socket || n._currentRequest.removeListener("socket", o);
  }
  return t && this.on("timeout", t), this.socket ? o(this.socket) : this._currentRequest.once("socket", o), this.on("socket", r), this.on("abort", s), this.on("error", s), this.on("response", s), this.on("close", s), this;
};
[
  "flushHeaders",
  "getHeader",
  "setNoDelay",
  "setSocketKeepAlive"
].forEach(function(e) {
  _t.prototype[e] = function(t, n) {
    return this._currentRequest[e](t, n);
  };
});
["aborted", "connection", "socket"].forEach(function(e) {
  Object.defineProperty(_t.prototype, e, {
    get: function() {
      return this._currentRequest[e];
    }
  });
});
_t.prototype._sanitizeOptions = function(e) {
  if (e.headers || (e.headers = {}), e.host && (e.hostname || (e.hostname = e.host), delete e.host), !e.pathname && e.path) {
    var t = e.path.indexOf("?");
    t < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, t), e.search = e.path.substring(t));
  }
};
_t.prototype._performRequest = function() {
  var e = this._options.protocol, t = this._options.nativeProtocols[e];
  if (!t)
    throw new TypeError("Unsupported protocol " + e);
  if (this._options.agents) {
    var n = e.slice(0, -1);
    this._options.agent = this._options.agents[n];
  }
  var r = this._currentRequest = t.request(this._options, this._onNativeResponse);
  r._redirectable = this;
  for (var o of _d)
    r.on(o, $d[o]);
  if (this._currentUrl = /^\//.test(this._options.path) ? Os.format(this._options) : (
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path
  ), this._isRedirect) {
    var s = 0, i = this, a = this._requestBodyBuffers;
    (function c(p) {
      if (r === i._currentRequest)
        if (p)
          i.emit("error", p);
        else if (s < a.length) {
          var l = a[s++];
          r.finished || r.write(l.data, l.encoding, c);
        } else i._ended && r.end();
    })();
  }
};
_t.prototype._processResponse = function(e) {
  var t = e.statusCode;
  this._options.trackRedirects && this._redirects.push({
    url: this._currentUrl,
    headers: e.headers,
    statusCode: t
  });
  var n = e.headers.location;
  if (!n || this._options.followRedirects === !1 || t < 300 || t >= 400) {
    e.responseUrl = this._currentUrl, e.redirects = this._redirects, this.emit("response", e), this._requestBodyBuffers = [];
    return;
  }
  if (Sd(this._currentRequest), e.destroy(), ++this._redirectCount > this._options.maxRedirects)
    throw new gge();
  var r, o = this._options.beforeRedirect;
  o && (r = Object.assign({
    // The Host header was set by nativeProtocol.request
    Host: e.req.getHeader("host")
  }, this._options.headers));
  var s = this._options.method;
  ((t === 301 || t === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
  // the server is redirecting the user agent to a different resource […]
  // A user agent can perform a retrieval request targeting that URI
  // (a GET or HEAD request if using HTTP) […]
  t === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], il(/^content-/i, this._options.headers));
  var i = il(/^host$/i, this._options.headers), a = Ed(this._currentUrl), c = i || a.host, p = /^\w+:/.test(n) ? this._currentUrl : Os.format(Object.assign(a, { host: c })), l = xge(n, p);
  if (qb("redirecting to", l.href), this._isRedirect = !0, ql(l, this._options), (l.protocol !== a.protocol && l.protocol !== "https:" || l.host !== c && !_ge(l.host, c)) && il(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers), Cr(o)) {
    var u = {
      headers: e.headers,
      statusCode: t
    }, d = {
      url: p,
      method: s,
      headers: r
    };
    o(this._options, u, d), this._sanitizeOptions(this._options);
  }
  this._performRequest();
};
function Fb(e) {
  var t = {
    maxRedirects: 21,
    maxBodyLength: 10485760
  }, n = {};
  return Object.keys(e).forEach(function(r) {
    var o = r + ":", s = n[o] = e[r], i = t[r] = Object.create(s);
    function a(p, l, u) {
      return Ege(p) ? p = ql(p) : Or(p) ? p = ql(Ed(p)) : (u = l, l = Ub(p), p = { protocol: o }), Cr(l) && (u = l, l = null), l = Object.assign({
        maxRedirects: t.maxRedirects,
        maxBodyLength: t.maxBodyLength
      }, p, l), l.nativeProtocols = n, !Or(l.host) && !Or(l.hostname) && (l.hostname = "::1"), wd.equal(l.protocol, o, "protocol mismatch"), qb("options", l), new _t(l, u);
    }
    function c(p, l, u) {
      var d = i.request(p, l, u);
      return d.end(), d;
    }
    Object.defineProperties(i, {
      request: { value: a, configurable: !0, enumerable: !0, writable: !0 },
      get: { value: c, configurable: !0, enumerable: !0, writable: !0 }
    });
  }), t;
}
function Mb() {
}
function Ed(e) {
  var t;
  if (xd)
    t = new ss(e);
  else if (t = Ub(Os.parse(e)), !Or(t.protocol))
    throw new jl({ input: e });
  return t;
}
function xge(e, t) {
  return xd ? new ss(e, t) : Ed(Os.resolve(t, e));
}
function Ub(e) {
  if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname))
    throw new jl({ input: e.href || e });
  if (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host))
    throw new jl({ input: e.href || e });
  return e;
}
function ql(e, t) {
  var n = t || {};
  for (var r of yge)
    n[r] = e[r];
  return n.hostname.startsWith("[") && (n.hostname = n.hostname.slice(1, -1)), n.port !== "" && (n.port = Number(n.port)), n.path = n.search ? n.pathname + n.search : n.pathname, n;
}
function il(e, t) {
  var n;
  for (var r in t)
    e.test(r) && (n = t[r], delete t[r]);
  return n === null || typeof n > "u" ? void 0 : String(n).trim();
}
function Ps(e, t, n) {
  function r(o) {
    Cr(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, o || {}), this.code = e, this.message = this.cause ? t + ": " + this.cause.message : t;
  }
  return r.prototype = new (n || Error)(), Object.defineProperties(r.prototype, {
    constructor: {
      value: r,
      enumerable: !1
    },
    name: {
      value: "Error [" + e + "]",
      enumerable: !1
    }
  }), r;
}
function Sd(e, t) {
  for (var n of _d)
    e.removeListener(n, $d[n]);
  e.on("error", Mb), e.destroy(t);
}
function _ge(e, t) {
  wd(Or(e) && Or(t));
  var n = e.length - t.length - 1;
  return n > 0 && e[n] === "." && e.endsWith(t);
}
function Or(e) {
  return typeof e == "string" || e instanceof String;
}
function Cr(e) {
  return typeof e == "function";
}
function $ge(e) {
  return typeof e == "object" && "length" in e;
}
function Ege(e) {
  return ss && e instanceof ss;
}
vd.exports = Fb({ http: mge, https: hge });
vd.exports.wrap = Fb;
var Sge = vd.exports;
const Tge = /* @__PURE__ */ tr(Sge), Ui = "1.13.5";
function Vb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
const Oge = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function Pge(e, t, n) {
  const r = n && n.Blob || Ne.classes.Blob, o = Vb(e);
  if (t === void 0 && r && (t = !0), o === "data") {
    e = o.length ? e.slice(o.length + 1) : e;
    const s = Oge.exec(e);
    if (!s)
      throw new W("Invalid URL", W.ERR_INVALID_URL);
    const i = s[1], a = s[2], c = s[3], p = Buffer.from(decodeURIComponent(c), a ? "base64" : "utf8");
    if (t) {
      if (!r)
        throw new W("Blob is not supported", W.ERR_NOT_SUPPORT);
      return new r([p], { type: i });
    }
    return p;
  }
  throw new W("Unsupported protocol " + o, W.ERR_NOT_SUPPORT);
}
const al = Symbol("internals");
class Ih extends lt.Transform {
  constructor(t) {
    t = L.toFlatObject(t, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (r, o) => !L.isUndefined(o[r])), super({
      readableHighWaterMark: t.chunkSize
    });
    const n = this[al] = {
      timeWindow: t.timeWindow,
      chunkSize: t.chunkSize,
      maxRate: t.maxRate,
      minChunkSize: t.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    this.on("newListener", (r) => {
      r === "progress" && (n.isCaptured || (n.isCaptured = !0));
    });
  }
  _read(t) {
    const n = this[al];
    return n.onReadCallback && n.onReadCallback(), super._read(t);
  }
  _transform(t, n, r) {
    const o = this[al], s = o.maxRate, i = this.readableHighWaterMark, a = o.timeWindow, c = 1e3 / a, p = s / c, l = o.minChunkSize !== !1 ? Math.max(o.minChunkSize, p * 0.01) : 0, u = (m, f) => {
      const g = Buffer.byteLength(m);
      o.bytesSeen += g, o.bytes += g, o.isCaptured && this.emit("progress", o.bytesSeen), this.push(m) ? process.nextTick(f) : o.onReadCallback = () => {
        o.onReadCallback = null, process.nextTick(f);
      };
    }, d = (m, f) => {
      const g = Buffer.byteLength(m);
      let y = null, v = i, b, w = 0;
      if (s) {
        const T = Date.now();
        (!o.ts || (w = T - o.ts) >= a) && (o.ts = T, b = p - o.bytes, o.bytes = b < 0 ? -b : 0, w = 0), b = p - o.bytes;
      }
      if (s) {
        if (b <= 0)
          return setTimeout(() => {
            f(null, m);
          }, a - w);
        b < v && (v = b);
      }
      v && g > v && g - v > l && (y = m.subarray(v), m = m.subarray(0, v)), u(m, y ? () => {
        process.nextTick(f, null, y);
      } : f);
    };
    d(t, function m(f, g) {
      if (f)
        return r(f);
      g ? d(g, m) : r(null);
    });
  }
}
const { asyncIterator: kh } = Symbol, zb = async function* (e) {
  e.stream ? yield* e.stream() : e.arrayBuffer ? yield await e.arrayBuffer() : e[kh] ? yield* e[kh]() : yield e;
}, Nge = Ne.ALPHABET.ALPHA_DIGIT + "-_", is = typeof TextEncoder == "function" ? new TextEncoder() : new er.TextEncoder(), br = `\r
`, Rge = is.encode(br), Age = 2;
class Dge {
  constructor(t, n) {
    const { escapeName: r } = this.constructor, o = L.isString(n);
    let s = `Content-Disposition: form-data; name="${r(t)}"${!o && n.name ? `; filename="${r(n.name)}"` : ""}${br}`;
    o ? n = is.encode(String(n).replace(/\r?\n|\r\n?/g, br)) : s += `Content-Type: ${n.type || "application/octet-stream"}${br}`, this.headers = is.encode(s + br), this.contentLength = o ? n.byteLength : n.size, this.size = this.headers.byteLength + this.contentLength + Age, this.name = t, this.value = n;
  }
  async *encode() {
    yield this.headers;
    const { value: t } = this;
    L.isTypedArray(t) ? yield t : yield* zb(t), yield Rge;
  }
  static escapeName(t) {
    return String(t).replace(/[\r\n"]/g, (n) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[n]);
  }
}
const Ige = (e, t, n) => {
  const {
    tag: r = "form-data-boundary",
    size: o = 25,
    boundary: s = r + "-" + Ne.generateString(o, Nge)
  } = n || {};
  if (!L.isFormData(e))
    throw TypeError("FormData instance required");
  if (s.length < 1 || s.length > 70)
    throw Error("boundary must be 10-70 characters long");
  const i = is.encode("--" + s + br), a = is.encode("--" + s + "--" + br);
  let c = a.byteLength;
  const p = Array.from(e.entries()).map(([u, d]) => {
    const m = new Dge(u, d);
    return c += m.size, m;
  });
  c += i.byteLength * p.length, c = L.toFiniteNumber(c);
  const l = {
    "Content-Type": `multipart/form-data; boundary=${s}`
  };
  return Number.isFinite(c) && (l["Content-Length"] = c), t && t(l), Yw.from(async function* () {
    for (const u of p)
      yield i, yield* u.encode();
    yield a;
  }());
};
class kge extends lt.Transform {
  __transform(t, n, r) {
    this.push(t), r();
  }
  _transform(t, n, r) {
    if (t.length !== 0 && (this._transform = this.__transform, t[0] !== 120)) {
      const o = Buffer.alloc(2);
      o[0] = 120, o[1] = 156, this.push(o, n);
    }
    this.__transform(t, n, r);
  }
}
const Cge = (e, t) => L.isAsyncFn(e) ? function(...n) {
  const r = n.pop();
  e.apply(this, n).then((o) => {
    try {
      t ? r(null, ...t(o)) : r(null, o);
    } catch (s) {
      r(s);
    }
  }, r);
} : e;
function jge(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const p = Date.now(), l = r[s];
    i || (i = p), n[o] = c, r[o] = p;
    let u = s, d = 0;
    for (; u !== o; )
      d += n[u++], u = u % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), p - i < t)
      return;
    const m = l && p - l;
    return m ? Math.round(d * 1e3 / m) : void 0;
  };
}
function Lge(e, t) {
  let n = 0, r = 1e3 / t, o, s;
  const i = (p, l = Date.now()) => {
    n = l, o = null, s && (clearTimeout(s), s = null), e(...p);
  };
  return [(...p) => {
    const l = Date.now(), u = l - n;
    u >= r ? i(p, l) : (o = p, s || (s = setTimeout(() => {
      s = null, i(o);
    }, r - u)));
  }, () => o && i(o)];
}
const go = (e, t, n = 3) => {
  let r = 0;
  const o = jge(50, 250);
  return Lge((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, c = i - r, p = o(c), l = i <= a;
    r = i;
    const u = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: c,
      rate: p || void 0,
      estimated: p && a && l ? (a - i) / p : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(u);
  }, n);
}, Vi = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, zi = (e) => (...t) => L.asap(() => e(...t));
function qge(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let s = r.length;
    const i = r.length;
    for (let d = 0; d < i; d++)
      if (r.charCodeAt(d) === 37 && d + 2 < i) {
        const m = r.charCodeAt(d + 1), f = r.charCodeAt(d + 2);
        (m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102) && (f >= 48 && f <= 57 || f >= 65 && f <= 70 || f >= 97 && f <= 102) && (s -= 2, d += 2);
      }
    let a = 0, c = i - 1;
    const p = (d) => d >= 2 && r.charCodeAt(d - 2) === 37 && // '%'
    r.charCodeAt(d - 1) === 51 && // '3'
    (r.charCodeAt(d) === 68 || r.charCodeAt(d) === 100);
    c >= 0 && (r.charCodeAt(c) === 61 ? (a++, c--) : p(c) && (a++, c -= 3)), a === 1 && c >= 0 && (r.charCodeAt(c) === 61 || p(c)) && a++;
    const u = Math.floor(s / 4) * 3 - (a || 0);
    return u > 0 ? u : 0;
  }
  return Buffer.byteLength(r, "utf8");
}
const Ch = {
  flush: Jn.constants.Z_SYNC_FLUSH,
  finishFlush: Jn.constants.Z_SYNC_FLUSH
}, Fge = {
  flush: Jn.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: Jn.constants.BROTLI_OPERATION_FLUSH
}, jh = L.isFunction(Jn.createBrotliDecompress), { http: Mge, https: Uge } = Tge, Vge = /https:?/, Lh = Ne.protocols.map((e) => e + ":"), qh = (e, [t, n]) => (e.on("end", n).on("error", n), t);
class zge {
  constructor() {
    this.sessions = /* @__PURE__ */ Object.create(null);
  }
  getSession(t, n) {
    n = Object.assign({
      sessionTimeout: 1e3
    }, n);
    let r = this.sessions[t];
    if (r) {
      let l = r.length;
      for (let u = 0; u < l; u++) {
        const [d, m] = r[u];
        if (!d.destroyed && !d.closed && er.isDeepStrictEqual(m, n))
          return d;
      }
    }
    const o = by.connect(t, n);
    let s;
    const i = () => {
      if (s)
        return;
      s = !0;
      let l = r, u = l.length, d = u;
      for (; d--; )
        if (l[d][0] === o) {
          u === 1 ? delete this.sessions[t] : l.splice(d, 1);
          return;
        }
    }, a = o.request, { sessionTimeout: c } = n;
    if (c != null) {
      let l, u = 0;
      o.request = function() {
        const d = a.apply(this, arguments);
        return u++, l && (clearTimeout(l), l = null), d.once("close", () => {
          --u || (l = setTimeout(() => {
            l = null, i();
          }, c));
        }), d;
      };
    }
    o.once("close", i);
    let p = [
      o,
      n
    ];
    return r ? r.push(p) : r = this.sessions[t] = [p], o;
  }
}
const Bge = new zge();
function Gge(e, t) {
  e.beforeRedirects.proxy && e.beforeRedirects.proxy(e), e.beforeRedirects.config && e.beforeRedirects.config(e, t);
}
function Bb(e, t, n) {
  let r = t;
  if (!r && r !== !1) {
    const o = jb.getProxyForUrl(n);
    o && (r = new URL(o));
  }
  if (r) {
    if (r.username && (r.auth = (r.username || "") + ":" + (r.password || "")), r.auth) {
      if (!!(r.auth.username || r.auth.password))
        r.auth = (r.auth.username || "") + ":" + (r.auth.password || "");
      else if (typeof r.auth == "object")
        throw new W("Invalid proxy authorization", W.ERR_BAD_OPTION, { proxy: r });
      const i = Buffer.from(r.auth, "utf8").toString("base64");
      e.headers["Proxy-Authorization"] = "Basic " + i;
    }
    e.headers.host = e.hostname + (e.port ? ":" + e.port : "");
    const o = r.hostname || r.host;
    e.hostname = o, e.host = o, e.port = r.port, e.path = n, r.protocol && (e.protocol = r.protocol.includes(":") ? r.protocol : `${r.protocol}:`);
  }
  e.beforeRedirects.proxy = function(s) {
    Bb(s, t, s.href);
  };
}
const Hge = typeof process < "u" && L.kindOf(process) === "process", Xge = (e) => new Promise((t, n) => {
  let r, o;
  const s = (c, p) => {
    o || (o = !0, r && r(c, p));
  }, i = (c) => {
    s(c), t(c);
  }, a = (c) => {
    s(c, !0), n(c);
  };
  e(i, a, (c) => r = c).catch(a);
}), Kge = ({ address: e, family: t }) => {
  if (!L.isString(e))
    throw TypeError("address must be a string");
  return {
    address: e,
    family: t || (e.indexOf(".") < 0 ? 6 : 4)
  };
}, Fh = (e, t) => Kge(L.isObject(e) ? e : { address: e, family: t }), Wge = {
  request(e, t) {
    const n = e.protocol + "//" + e.hostname + ":" + (e.port || (e.protocol === "https:" ? 443 : 80)), { http2Options: r, headers: o } = e, s = Bge.getSession(n, r), {
      HTTP2_HEADER_SCHEME: i,
      HTTP2_HEADER_METHOD: a,
      HTTP2_HEADER_PATH: c,
      HTTP2_HEADER_STATUS: p
    } = by.constants, l = {
      [i]: e.protocol.replace(":", ""),
      [a]: e.method,
      [c]: e.path
    };
    L.forEach(o, (d, m) => {
      m.charAt(0) !== ":" && (l[m] = d);
    });
    const u = s.request(l);
    return u.once("response", (d) => {
      const m = u;
      d = Object.assign({}, d);
      const f = d[p];
      delete d[p], m.headers = d, m.statusCode = +f, t(m);
    }), u;
  }
}, Jge = Hge && function(t) {
  return Xge(async function(r, o, s) {
    let { data: i, lookup: a, family: c, httpVersion: p = 1, http2Options: l } = t;
    const { responseType: u, responseEncoding: d } = t, m = t.method.toUpperCase();
    let f, g = !1, y;
    if (p = +p, Number.isNaN(p))
      throw TypeError(`Invalid protocol version: '${t.httpVersion}' is not a number`);
    if (p !== 1 && p !== 2)
      throw TypeError(`Unsupported protocol version '${p}'`);
    const v = p === 2;
    if (a) {
      const D = Cge(a, (S) => L.isArray(S) ? S : [S]);
      a = (S, N, O) => {
        D(S, N, (h, _, A) => {
          if (h)
            return O(h);
          const $ = L.isArray(_) ? _.map((x) => Fh(x)) : [Fh(_, A)];
          N.all ? O(h, $) : O(h, $[0].address, $[0].family);
        });
      };
    }
    const b = new Ww();
    function w(D) {
      try {
        b.emit("abort", !D || D.type ? new kr(null, t, y) : D);
      } catch (S) {
        console.warn("emit error", S);
      }
    }
    b.once("abort", o);
    const T = () => {
      t.cancelToken && t.cancelToken.unsubscribe(w), t.signal && t.signal.removeEventListener("abort", w), b.removeAllListeners();
    };
    (t.cancelToken || t.signal) && (t.cancelToken && t.cancelToken.subscribe(w), t.signal && (t.signal.aborted ? w() : t.signal.addEventListener("abort", w))), s((D, S) => {
      if (f = !0, S) {
        g = !0, T();
        return;
      }
      const { data: N } = D;
      if (N instanceof lt.Readable || N instanceof lt.Duplex) {
        const O = lt.finished(N, () => {
          O(), T();
        });
      } else
        T();
    });
    const P = gd(t.baseURL, t.url, t.allowAbsoluteUrls), C = new URL(P, Ne.hasBrowserEnv ? Ne.origin : void 0), B = C.protocol || Lh[0];
    if (B === "data:") {
      if (t.maxContentLength > -1) {
        const S = String(t.url || P || "");
        if (qge(S) > t.maxContentLength)
          return o(new W(
            "maxContentLength size of " + t.maxContentLength + " exceeded",
            W.ERR_BAD_RESPONSE,
            t
          ));
      }
      let D;
      if (m !== "GET")
        return Yr(r, o, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: t
        });
      try {
        D = Pge(t.url, u === "blob", {
          Blob: t.env && t.env.Blob
        });
      } catch (S) {
        throw W.from(S, W.ERR_BAD_REQUEST, t);
      }
      return u === "text" ? (D = D.toString(d), (!d || d === "utf8") && (D = L.stripBOM(D))) : u === "stream" && (D = lt.Readable.from(D)), Yr(r, o, {
        data: D,
        status: 200,
        statusText: "OK",
        headers: new Qe(),
        config: t
      });
    }
    if (Lh.indexOf(B) === -1)
      return o(new W(
        "Unsupported protocol " + B,
        W.ERR_BAD_REQUEST,
        t
      ));
    const k = Qe.from(t.headers).normalize();
    k.set("User-Agent", "axios/" + Ui, !1);
    const { onUploadProgress: E, onDownloadProgress: q } = t, I = t.maxRate;
    let z, H;
    if (L.isSpecCompliantForm(i)) {
      const D = k.getContentType(/boundary=([-_\w\d]{10,70})/i);
      i = Ige(i, (S) => {
        k.set(S);
      }, {
        tag: `axios-${Ui}-boundary`,
        boundary: D && D[1] || void 0
      });
    } else if (L.isFormData(i) && L.isFunction(i.getHeaders)) {
      if (k.set(i.getHeaders()), !k.hasContentLength())
        try {
          const D = await er.promisify(i.getLength).call(i);
          Number.isFinite(D) && D >= 0 && k.setContentLength(D);
        } catch {
        }
    } else if (L.isBlob(i) || L.isFile(i))
      i.size && k.setContentType(i.type || "application/octet-stream"), k.setContentLength(i.size || 0), i = lt.Readable.from(zb(i));
    else if (i && !L.isStream(i)) {
      if (!Buffer.isBuffer(i)) if (L.isArrayBuffer(i))
        i = Buffer.from(new Uint8Array(i));
      else if (L.isString(i))
        i = Buffer.from(i, "utf-8");
      else
        return o(new W(
          "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
          W.ERR_BAD_REQUEST,
          t
        ));
      if (k.setContentLength(i.length, !1), t.maxBodyLength > -1 && i.length > t.maxBodyLength)
        return o(new W(
          "Request body larger than maxBodyLength limit",
          W.ERR_BAD_REQUEST,
          t
        ));
    }
    const F = L.toFiniteNumber(k.getContentLength());
    L.isArray(I) ? (z = I[0], H = I[1]) : z = H = I, i && (E || z) && (L.isStream(i) || (i = lt.Readable.from(i, { objectMode: !1 })), i = lt.pipeline([i, new Ih({
      maxRate: L.toFiniteNumber(z)
    })], L.noop), E && i.on("progress", qh(
      i,
      Vi(
        F,
        go(zi(E), !1, 3)
      )
    )));
    let U;
    if (t.auth) {
      const D = t.auth.username || "", S = t.auth.password || "";
      U = D + ":" + S;
    }
    if (!U && C.username) {
      const D = C.username, S = C.password;
      U = D + ":" + S;
    }
    U && k.delete("authorization");
    let G;
    try {
      G = hd(
        C.pathname + C.search,
        t.params,
        t.paramsSerializer
      ).replace(/^\?/, "");
    } catch (D) {
      const S = new Error(D.message);
      return S.config = t, S.url = t.url, S.exists = !0, o(S);
    }
    k.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (jh ? ", br" : ""),
      !1
    );
    const V = {
      path: G,
      method: m,
      headers: k.toJSON(),
      agents: { http: t.httpAgent, https: t.httpsAgent },
      auth: U,
      protocol: B,
      family: c,
      beforeRedirect: Gge,
      beforeRedirects: {},
      http2Options: l
    };
    !L.isUndefined(a) && (V.lookup = a), t.socketPath ? V.socketPath = t.socketPath : (V.hostname = C.hostname.startsWith("[") ? C.hostname.slice(1, -1) : C.hostname, V.port = C.port, Bb(V, t.proxy, B + "//" + C.hostname + (C.port ? ":" + C.port : "") + V.path));
    let K;
    const X = Vge.test(V.protocol);
    if (V.agent = X ? t.httpsAgent : t.httpAgent, v ? K = Wge : t.transport ? K = t.transport : t.maxRedirects === 0 ? K = X ? Xi : Hi : (t.maxRedirects && (V.maxRedirects = t.maxRedirects), t.beforeRedirect && (V.beforeRedirects.config = t.beforeRedirect), K = X ? Uge : Mge), t.maxBodyLength > -1 ? V.maxBodyLength = t.maxBodyLength : V.maxBodyLength = 1 / 0, t.insecureHTTPParser && (V.insecureHTTPParser = t.insecureHTTPParser), y = K.request(V, function(S) {
      if (y.destroyed) return;
      const N = [S], O = L.toFiniteNumber(S.headers["content-length"]);
      if (q || H) {
        const $ = new Ih({
          maxRate: L.toFiniteNumber(H)
        });
        q && $.on("progress", qh(
          $,
          Vi(
            O,
            go(zi(q), !0, 3)
          )
        )), N.push($);
      }
      let h = S;
      const _ = S.req || y;
      if (t.decompress !== !1 && S.headers["content-encoding"])
        switch ((m === "HEAD" || S.statusCode === 204) && delete S.headers["content-encoding"], (S.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            N.push(Jn.createUnzip(Ch)), delete S.headers["content-encoding"];
            break;
          case "deflate":
            N.push(new kge()), N.push(Jn.createUnzip(Ch)), delete S.headers["content-encoding"];
            break;
          case "br":
            jh && (N.push(Jn.createBrotliDecompress(Fge)), delete S.headers["content-encoding"]);
        }
      h = N.length > 1 ? lt.pipeline(N, L.noop) : N[0];
      const A = {
        status: S.statusCode,
        statusText: S.statusMessage,
        headers: new Qe(S.headers),
        config: t,
        request: _
      };
      if (u === "stream")
        A.data = h, Yr(r, o, A);
      else {
        const $ = [];
        let x = 0;
        h.on("data", function(R) {
          $.push(R), x += R.length, t.maxContentLength > -1 && x > t.maxContentLength && (g = !0, h.destroy(), w(new W(
            "maxContentLength size of " + t.maxContentLength + " exceeded",
            W.ERR_BAD_RESPONSE,
            t,
            _
          )));
        }), h.on("aborted", function() {
          if (g)
            return;
          const R = new W(
            "stream has been aborted",
            W.ERR_BAD_RESPONSE,
            t,
            _
          );
          h.destroy(R), o(R);
        }), h.on("error", function(R) {
          y.destroyed || o(W.from(R, null, t, _));
        }), h.on("end", function() {
          try {
            let R = $.length === 1 ? $[0] : Buffer.concat($);
            u !== "arraybuffer" && (R = R.toString(d), (!d || d === "utf8") && (R = L.stripBOM(R))), A.data = R;
          } catch (R) {
            return o(W.from(R, null, t, A.request, A));
          }
          Yr(r, o, A);
        });
      }
      b.once("abort", ($) => {
        h.destroyed || (h.emit("error", $), h.destroy());
      });
    }), b.once("abort", (D) => {
      y.close ? y.close() : y.destroy(D);
    }), y.on("error", function(S) {
      o(W.from(S, null, t, y));
    }), y.on("socket", function(S) {
      S.setKeepAlive(!0, 1e3 * 60);
    }), t.timeout) {
      const D = parseInt(t.timeout, 10);
      if (Number.isNaN(D)) {
        w(new W(
          "error trying to parse `config.timeout` to int",
          W.ERR_BAD_OPTION_VALUE,
          t,
          y
        ));
        return;
      }
      y.setTimeout(D, function() {
        if (f) return;
        let N = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
        const O = t.transitional || Ea;
        t.timeoutErrorMessage && (N = t.timeoutErrorMessage), w(new W(
          N,
          O.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
          t,
          y
        ));
      });
    } else
      y.setTimeout(0);
    if (L.isStream(i)) {
      let D = !1, S = !1;
      i.on("end", () => {
        D = !0;
      }), i.once("error", (N) => {
        S = !0, y.destroy(N);
      }), i.on("close", () => {
        !D && !S && w(new kr("Request stream has been aborted", t, y));
      }), i.pipe(y);
    } else
      i && y.write(i), y.end();
  });
}, Yge = Ne.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Ne.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Ne.origin),
  Ne.navigator && /(msie|trident)/i.test(Ne.navigator.userAgent)
) : () => !0, Qge = Ne.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, s, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      L.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), L.isString(r) && a.push(`path=${r}`), L.isString(o) && a.push(`domain=${o}`), s === !0 && a.push("secure"), L.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
), Mh = (e) => e instanceof Qe ? { ...e } : e;
function jr(e, t) {
  t = t || {};
  const n = {};
  function r(p, l, u, d) {
    return L.isPlainObject(p) && L.isPlainObject(l) ? L.merge.call({ caseless: d }, p, l) : L.isPlainObject(l) ? L.merge({}, l) : L.isArray(l) ? l.slice() : l;
  }
  function o(p, l, u, d) {
    if (L.isUndefined(l)) {
      if (!L.isUndefined(p))
        return r(void 0, p, u, d);
    } else return r(p, l, u, d);
  }
  function s(p, l) {
    if (!L.isUndefined(l))
      return r(void 0, l);
  }
  function i(p, l) {
    if (L.isUndefined(l)) {
      if (!L.isUndefined(p))
        return r(void 0, p);
    } else return r(void 0, l);
  }
  function a(p, l, u) {
    if (u in t)
      return r(p, l);
    if (u in e)
      return r(void 0, p);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (p, l, u) => o(Mh(p), Mh(l), u, !0)
  };
  return L.forEach(
    Object.keys({ ...e, ...t }),
    function(l) {
      if (l === "__proto__" || l === "constructor" || l === "prototype")
        return;
      const u = L.hasOwnProp(c, l) ? c[l] : o, d = u(e[l], t[l], l);
      L.isUndefined(d) && u !== a || (n[l] = d);
    }
  ), n;
}
const Gb = (e) => {
  const t = jr({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  if (t.headers = i = Qe.from(i), t.url = hd(gd(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), L.isFormData(n)) {
    if (Ne.hasStandardBrowserEnv || Ne.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (L.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), p = ["content-type", "content-length"];
      Object.entries(c).forEach(([l, u]) => {
        p.includes(l.toLowerCase()) && i.set(l, u);
      });
    }
  }
  if (Ne.hasStandardBrowserEnv && (r && L.isFunction(r) && (r = r(t)), r || r !== !1 && Yge(t.url))) {
    const c = o && s && Qge.read(s);
    c && i.set(o, c);
  }
  return t;
}, Zge = typeof XMLHttpRequest < "u", eve = Zge && function(e) {
  return new Promise(function(n, r) {
    const o = Gb(e);
    let s = o.data;
    const i = Qe.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: p } = o, l, u, d, m, f;
    function g() {
      m && m(), f && f(), o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l);
    }
    let y = new XMLHttpRequest();
    y.open(o.method.toUpperCase(), o.url, !0), y.timeout = o.timeout;
    function v() {
      if (!y)
        return;
      const w = Qe.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), P = {
        data: !a || a === "text" || a === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: w,
        config: e,
        request: y
      };
      Yr(function(B) {
        n(B), g();
      }, function(B) {
        r(B), g();
      }, P), y = null;
    }
    "onloadend" in y ? y.onloadend = v : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, y.onabort = function() {
      y && (r(new W("Request aborted", W.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(T) {
      const P = T && T.message ? T.message : "Network Error", C = new W(P, W.ERR_NETWORK, e, y);
      C.event = T || null, r(C), y = null;
    }, y.ontimeout = function() {
      let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const P = o.transitional || Ea;
      o.timeoutErrorMessage && (T = o.timeoutErrorMessage), r(new W(
        T,
        P.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
        e,
        y
      )), y = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in y && L.forEach(i.toJSON(), function(T, P) {
      y.setRequestHeader(P, T);
    }), L.isUndefined(o.withCredentials) || (y.withCredentials = !!o.withCredentials), a && a !== "json" && (y.responseType = o.responseType), p && ([d, f] = go(p, !0), y.addEventListener("progress", d)), c && y.upload && ([u, m] = go(c), y.upload.addEventListener("progress", u), y.upload.addEventListener("loadend", m)), (o.cancelToken || o.signal) && (l = (w) => {
      y && (r(!w || w.type ? new kr(null, e, y) : w), y.abort(), y = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const b = Vb(o.url);
    if (b && Ne.protocols.indexOf(b) === -1) {
      r(new W("Unsupported protocol " + b + ":", W.ERR_BAD_REQUEST, e));
      return;
    }
    y.send(s || null);
  });
}, tve = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const s = function(p) {
      if (!o) {
        o = !0, a();
        const l = p instanceof Error ? p : this.reason;
        r.abort(l instanceof W ? l : new kr(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new W(`timeout of ${t}ms exceeded`, W.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(s) : p.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((p) => p.addEventListener("abort", s));
    const { signal: c } = r;
    return c.unsubscribe = () => L.asap(a), c;
  }
}, nve = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, rve = async function* (e, t) {
  for await (const n of ove(e))
    yield* nve(n, t);
}, ove = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Uh = (e, t, n, r) => {
  const o = rve(e, t);
  let s = 0, i, a = (c) => {
    i || (i = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: p, value: l } = await o.next();
        if (p) {
          a(), c.close();
          return;
        }
        let u = l.byteLength;
        if (n) {
          let d = s += u;
          n(d);
        }
        c.enqueue(new Uint8Array(l));
      } catch (p) {
        throw a(p), p;
      }
    },
    cancel(c) {
      return a(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Vh = 64 * 1024, { isFunction: ni } = L, sve = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(L.global), {
  ReadableStream: zh,
  TextEncoder: Bh
} = L.global, Gh = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ive = (e) => {
  e = L.merge.call({
    skipUndefined: !0
  }, sve, e);
  const { fetch: t, Request: n, Response: r } = e, o = t ? ni(t) : typeof fetch == "function", s = ni(n), i = ni(r);
  if (!o)
    return !1;
  const a = o && ni(zh), c = o && (typeof Bh == "function" ? /* @__PURE__ */ ((f) => (g) => f.encode(g))(new Bh()) : async (f) => new Uint8Array(await new n(f).arrayBuffer())), p = s && a && Gh(() => {
    let f = !1;
    const g = new n(Ne.origin, {
      body: new zh(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !g;
  }), l = i && a && Gh(() => L.isReadableStream(new r("").body)), u = {
    stream: l && ((f) => f.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !u[f] && (u[f] = (g, y) => {
      let v = g && g[f];
      if (v)
        return v.call(g);
      throw new W(`Response type '${f}' is not supported`, W.ERR_NOT_SUPPORT, y);
    });
  });
  const d = async (f) => {
    if (f == null)
      return 0;
    if (L.isBlob(f))
      return f.size;
    if (L.isSpecCompliantForm(f))
      return (await new n(Ne.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (L.isArrayBufferView(f) || L.isArrayBuffer(f))
      return f.byteLength;
    if (L.isURLSearchParams(f) && (f = f + ""), L.isString(f))
      return (await c(f)).byteLength;
  }, m = async (f, g) => {
    const y = L.toFiniteNumber(f.getContentLength());
    return y ?? d(g);
  };
  return async (f) => {
    let {
      url: g,
      method: y,
      data: v,
      signal: b,
      cancelToken: w,
      timeout: T,
      onDownloadProgress: P,
      onUploadProgress: C,
      responseType: B,
      headers: k,
      withCredentials: E = "same-origin",
      fetchOptions: q
    } = Gb(f), I = t || fetch;
    B = B ? (B + "").toLowerCase() : "text";
    let z = tve([b, w && w.toAbortSignal()], T), H = null;
    const F = z && z.unsubscribe && (() => {
      z.unsubscribe();
    });
    let U;
    try {
      if (C && p && y !== "get" && y !== "head" && (U = await m(k, v)) !== 0) {
        let S = new n(g, {
          method: "POST",
          body: v,
          duplex: "half"
        }), N;
        if (L.isFormData(v) && (N = S.headers.get("content-type")) && k.setContentType(N), S.body) {
          const [O, h] = Vi(
            U,
            go(zi(C))
          );
          v = Uh(S.body, Vh, O, h);
        }
      }
      L.isString(E) || (E = E ? "include" : "omit");
      const G = s && "credentials" in n.prototype, V = {
        ...q,
        signal: z,
        method: y.toUpperCase(),
        headers: k.normalize().toJSON(),
        body: v,
        duplex: "half",
        credentials: G ? E : void 0
      };
      H = s && new n(g, V);
      let K = await (s ? I(H, q) : I(g, V));
      const X = l && (B === "stream" || B === "response");
      if (l && (P || X && F)) {
        const S = {};
        ["status", "statusText", "headers"].forEach((_) => {
          S[_] = K[_];
        });
        const N = L.toFiniteNumber(K.headers.get("content-length")), [O, h] = P && Vi(
          N,
          go(zi(P), !0)
        ) || [];
        K = new r(
          Uh(K.body, Vh, O, () => {
            h && h(), F && F();
          }),
          S
        );
      }
      B = B || "text";
      let D = await u[L.findKey(u, B) || "text"](K, f);
      return !X && F && F(), await new Promise((S, N) => {
        Yr(S, N, {
          data: D,
          headers: Qe.from(K.headers),
          status: K.status,
          statusText: K.statusText,
          config: f,
          request: H
        });
      });
    } catch (G) {
      throw F && F(), G && G.name === "TypeError" && /Load failed|fetch/i.test(G.message) ? Object.assign(
        new W("Network Error", W.ERR_NETWORK, f, H, G && G.response),
        {
          cause: G.cause || G
        }
      ) : W.from(G, G && G.code, f, H, G && G.response);
    }
  };
}, ave = /* @__PURE__ */ new Map(), Hb = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, s = [
    r,
    o,
    n
  ];
  let i = s.length, a = i, c, p, l = ave;
  for (; a--; )
    c = s[a], p = l.get(c), p === void 0 && l.set(c, p = a ? /* @__PURE__ */ new Map() : ive(t)), l = p;
  return p;
};
Hb();
const Td = {
  http: Jge,
  xhr: eve,
  fetch: {
    get: Hb
  }
};
L.forEach(Td, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Hh = (e) => `- ${e}`, cve = (e) => L.isFunction(e) || e === null || e === !1;
function lve(e, t) {
  e = L.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const s = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (o = r, !cve(r) && (o = Td[(a = String(r)).toLowerCase()], o === void 0))
      throw new W(`Unknown adapter '${a}'`);
    if (o && (L.isFunction(o) || (o = o.get(t))))
      break;
    s[a || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(s).map(
      ([c, p]) => `adapter ${c} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? i.length > 1 ? `since :
` + i.map(Hh).join(`
`) : " " + Hh(i[0]) : "as no adapter specified";
    throw new W(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Xb = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: lve,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Td
};
function cl(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new kr(null, e);
}
function Xh(e) {
  return cl(e), e.headers = Qe.from(e.headers), e.data = tl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Xb.getAdapter(e.adapter || Ts.adapter, e)(e).then(function(r) {
    return cl(e), r.data = tl.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Qe.from(r.headers), r;
  }, function(r) {
    return Cb(r) || (cl(e), r && r.response && (r.response.data = tl.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Qe.from(r.response.headers))), Promise.reject(r);
  });
}
const Sa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Sa[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Kh = {};
Sa.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + Ui + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new W(
        o(i, " has been removed" + (n ? " in " + n : "")),
        W.ERR_DEPRECATED
      );
    return n && !Kh[i] && (Kh[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
Sa.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function uve(e, t, n) {
  if (typeof e != "object")
    throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const a = e[s], c = a === void 0 || i(a, s, e);
      if (c !== !0)
        throw new W("option " + s + " must be " + c, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new W("Unknown option " + s, W.ERR_BAD_OPTION);
  }
}
const wi = {
  assertOptions: uve,
  validators: Sa
}, Tt = wi.validators;
let Pr = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new $h(),
      response: new $h()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = jr(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && wi.assertOptions(r, {
      silentJSONParsing: Tt.transitional(Tt.boolean),
      forcedJSONParsing: Tt.transitional(Tt.boolean),
      clarifyTimeoutError: Tt.transitional(Tt.boolean),
      legacyInterceptorReqResOrdering: Tt.transitional(Tt.boolean)
    }, !1), o != null && (L.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : wi.assertOptions(o, {
      encode: Tt.function,
      serialize: Tt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), wi.assertOptions(n, {
      baseUrl: Tt.spelling("baseURL"),
      withXsrfToken: Tt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && L.merge(
      s.common,
      s[n.method]
    );
    s && L.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete s[f];
      }
    ), n.headers = Qe.concat(i, s);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      if (typeof g.runWhen == "function" && g.runWhen(n) === !1)
        return;
      c = c && g.synchronous;
      const y = n.transitional || Ea;
      y && y.legacyInterceptorReqResOrdering ? a.unshift(g.fulfilled, g.rejected) : a.push(g.fulfilled, g.rejected);
    });
    const p = [];
    this.interceptors.response.forEach(function(g) {
      p.push(g.fulfilled, g.rejected);
    });
    let l, u = 0, d;
    if (!c) {
      const f = [Xh.bind(this), void 0];
      for (f.unshift(...a), f.push(...p), d = f.length, l = Promise.resolve(n); u < d; )
        l = l.then(f[u++], f[u++]);
      return l;
    }
    d = a.length;
    let m = n;
    for (; u < d; ) {
      const f = a[u++], g = a[u++];
      try {
        m = f(m);
      } catch (y) {
        g.call(this, y);
        break;
      }
    }
    try {
      l = Xh.call(this, m);
    } catch (f) {
      return Promise.reject(f);
    }
    for (u = 0, d = p.length; u < d; )
      l = l.then(p[u++], p[u++]);
    return l;
  }
  getUri(t) {
    t = jr(this.defaults, t);
    const n = gd(t.baseURL, t.url, t.allowAbsoluteUrls);
    return hd(n, t.params, t.paramsSerializer);
  }
};
L.forEach(["delete", "get", "head", "options"], function(t) {
  Pr.prototype[t] = function(n, r) {
    return this.request(jr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
L.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, a) {
      return this.request(jr(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Pr.prototype[t] = n(), Pr.prototype[t + "Form"] = n(!0);
});
let pve = class Kb {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      r.reason || (r.reason = new kr(s, i, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Kb(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function dve(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function fve(e) {
  return L.isObject(e) && e.isAxiosError === !0;
}
const Fl = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Fl).forEach(([e, t]) => {
  Fl[t] = e;
});
function Wb(e) {
  const t = new Pr(e), n = nb(Pr.prototype.request, t);
  return L.extend(n, Pr.prototype, t, { allOwnKeys: !0 }), L.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Wb(jr(e, o));
  }, n;
}
const Ie = Wb(Ts);
Ie.Axios = Pr;
Ie.CanceledError = kr;
Ie.CancelToken = pve;
Ie.isCancel = Cb;
Ie.VERSION = Ui;
Ie.toFormData = $a;
Ie.AxiosError = W;
Ie.Cancel = Ie.CanceledError;
Ie.all = function(t) {
  return Promise.all(t);
};
Ie.spread = dve;
Ie.isAxiosError = fve;
Ie.mergeConfig = jr;
Ie.AxiosHeaders = Qe;
Ie.formToJSON = (e) => kb(L.isHTMLForm(e) ? new FormData(e) : e);
Ie.getAdapter = Xb.getAdapter;
Ie.HttpStatusCode = Fl;
Ie.default = Ie;
const {
  Axios: G0e,
  AxiosError: H0e,
  CanceledError: X0e,
  isCancel: K0e,
  CancelToken: W0e,
  VERSION: J0e,
  all: Y0e,
  Cancel: Q0e,
  isAxiosError: Z0e,
  spread: exe,
  toFormData: txe,
  AxiosHeaders: nxe,
  HttpStatusCode: rxe,
  formToJSON: oxe,
  getAdapter: sxe,
  mergeConfig: ixe
} = Ie;
var mt = {}, qe = {};
qe.fromCallback = function(e) {
  return Object.defineProperty(function(...t) {
    if (typeof t[t.length - 1] == "function") e.apply(this, t);
    else
      return new Promise((n, r) => {
        t.push((o, s) => o != null ? r(o) : n(s)), e.apply(this, t);
      });
  }, "name", { value: e.name });
};
qe.fromPromise = function(e) {
  return Object.defineProperty(function(...t) {
    const n = t[t.length - 1];
    if (typeof n != "function") return e.apply(this, t);
    t.pop(), e.apply(this, t).then((r) => n(null, r), n);
  }, "name", { value: e.name });
};
var Fn = Zw, mve = process.cwd, xi = null, hve = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function() {
  return xi || (xi = mve.call(process)), xi;
};
try {
  process.cwd();
} catch {
}
if (typeof process.chdir == "function") {
  var Wh = process.chdir;
  process.chdir = function(e) {
    xi = null, Wh.call(process, e);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, Wh);
}
var yve = gve;
function gve(e) {
  Fn.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && t(e), e.lutimes || n(e), e.chown = s(e.chown), e.fchown = s(e.fchown), e.lchown = s(e.lchown), e.chmod = r(e.chmod), e.fchmod = r(e.fchmod), e.lchmod = r(e.lchmod), e.chownSync = i(e.chownSync), e.fchownSync = i(e.fchownSync), e.lchownSync = i(e.lchownSync), e.chmodSync = o(e.chmodSync), e.fchmodSync = o(e.fchmodSync), e.lchmodSync = o(e.lchmodSync), e.stat = a(e.stat), e.fstat = a(e.fstat), e.lstat = a(e.lstat), e.statSync = c(e.statSync), e.fstatSync = c(e.fstatSync), e.lstatSync = c(e.lstatSync), e.chmod && !e.lchmod && (e.lchmod = function(l, u, d) {
    d && process.nextTick(d);
  }, e.lchmodSync = function() {
  }), e.chown && !e.lchown && (e.lchown = function(l, u, d, m) {
    m && process.nextTick(m);
  }, e.lchownSync = function() {
  }), hve === "win32" && (e.rename = typeof e.rename != "function" ? e.rename : function(l) {
    function u(d, m, f) {
      var g = Date.now(), y = 0;
      l(d, m, function v(b) {
        if (b && (b.code === "EACCES" || b.code === "EPERM" || b.code === "EBUSY") && Date.now() - g < 6e4) {
          setTimeout(function() {
            e.stat(m, function(w, T) {
              w && w.code === "ENOENT" ? l(d, m, v) : f(b);
            });
          }, y), y < 100 && (y += 10);
          return;
        }
        f && f(b);
      });
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(u, l), u;
  }(e.rename)), e.read = typeof e.read != "function" ? e.read : function(l) {
    function u(d, m, f, g, y, v) {
      var b;
      if (v && typeof v == "function") {
        var w = 0;
        b = function(T, P, C) {
          if (T && T.code === "EAGAIN" && w < 10)
            return w++, l.call(e, d, m, f, g, y, b);
          v.apply(this, arguments);
        };
      }
      return l.call(e, d, m, f, g, y, b);
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(u, l), u;
  }(e.read), e.readSync = typeof e.readSync != "function" ? e.readSync : /* @__PURE__ */ function(l) {
    return function(u, d, m, f, g) {
      for (var y = 0; ; )
        try {
          return l.call(e, u, d, m, f, g);
        } catch (v) {
          if (v.code === "EAGAIN" && y < 10) {
            y++;
            continue;
          }
          throw v;
        }
    };
  }(e.readSync);
  function t(l) {
    l.lchmod = function(u, d, m) {
      l.open(
        u,
        Fn.O_WRONLY | Fn.O_SYMLINK,
        d,
        function(f, g) {
          if (f) {
            m && m(f);
            return;
          }
          l.fchmod(g, d, function(y) {
            l.close(g, function(v) {
              m && m(y || v);
            });
          });
        }
      );
    }, l.lchmodSync = function(u, d) {
      var m = l.openSync(u, Fn.O_WRONLY | Fn.O_SYMLINK, d), f = !0, g;
      try {
        g = l.fchmodSync(m, d), f = !1;
      } finally {
        if (f)
          try {
            l.closeSync(m);
          } catch {
          }
        else
          l.closeSync(m);
      }
      return g;
    };
  }
  function n(l) {
    Fn.hasOwnProperty("O_SYMLINK") && l.futimes ? (l.lutimes = function(u, d, m, f) {
      l.open(u, Fn.O_SYMLINK, function(g, y) {
        if (g) {
          f && f(g);
          return;
        }
        l.futimes(y, d, m, function(v) {
          l.close(y, function(b) {
            f && f(v || b);
          });
        });
      });
    }, l.lutimesSync = function(u, d, m) {
      var f = l.openSync(u, Fn.O_SYMLINK), g, y = !0;
      try {
        g = l.futimesSync(f, d, m), y = !1;
      } finally {
        if (y)
          try {
            l.closeSync(f);
          } catch {
          }
        else
          l.closeSync(f);
      }
      return g;
    }) : l.futimes && (l.lutimes = function(u, d, m, f) {
      f && process.nextTick(f);
    }, l.lutimesSync = function() {
    });
  }
  function r(l) {
    return l && function(u, d, m) {
      return l.call(e, u, d, function(f) {
        p(f) && (f = null), m && m.apply(this, arguments);
      });
    };
  }
  function o(l) {
    return l && function(u, d) {
      try {
        return l.call(e, u, d);
      } catch (m) {
        if (!p(m)) throw m;
      }
    };
  }
  function s(l) {
    return l && function(u, d, m, f) {
      return l.call(e, u, d, m, function(g) {
        p(g) && (g = null), f && f.apply(this, arguments);
      });
    };
  }
  function i(l) {
    return l && function(u, d, m) {
      try {
        return l.call(e, u, d, m);
      } catch (f) {
        if (!p(f)) throw f;
      }
    };
  }
  function a(l) {
    return l && function(u, d, m) {
      typeof d == "function" && (m = d, d = null);
      function f(g, y) {
        y && (y.uid < 0 && (y.uid += 4294967296), y.gid < 0 && (y.gid += 4294967296)), m && m.apply(this, arguments);
      }
      return d ? l.call(e, u, d, f) : l.call(e, u, f);
    };
  }
  function c(l) {
    return l && function(u, d) {
      var m = d ? l.call(e, u, d) : l.call(e, u);
      return m && (m.uid < 0 && (m.uid += 4294967296), m.gid < 0 && (m.gid += 4294967296)), m;
    };
  }
  function p(l) {
    if (!l || l.code === "ENOSYS")
      return !0;
    var u = !process.getuid || process.getuid() !== 0;
    return !!(u && (l.code === "EINVAL" || l.code === "EPERM"));
  }
}
var Jh = lt.Stream, vve = bve;
function bve(e) {
  return {
    ReadStream: t,
    WriteStream: n
  };
  function t(r, o) {
    if (!(this instanceof t)) return new t(r, o);
    Jh.call(this);
    var s = this;
    this.path = r, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 64 * 1024, o = o || {};
    for (var i = Object.keys(o), a = 0, c = i.length; a < c; a++) {
      var p = i[a];
      this[p] = o[p];
    }
    if (this.encoding && this.setEncoding(this.encoding), this.start !== void 0) {
      if (typeof this.start != "number")
        throw TypeError("start must be a Number");
      if (this.end === void 0)
        this.end = 1 / 0;
      else if (typeof this.end != "number")
        throw TypeError("end must be a Number");
      if (this.start > this.end)
        throw new Error("start must be <= end");
      this.pos = this.start;
    }
    if (this.fd !== null) {
      process.nextTick(function() {
        s._read();
      });
      return;
    }
    e.open(this.path, this.flags, this.mode, function(l, u) {
      if (l) {
        s.emit("error", l), s.readable = !1;
        return;
      }
      s.fd = u, s.emit("open", u), s._read();
    });
  }
  function n(r, o) {
    if (!(this instanceof n)) return new n(r, o);
    Jh.call(this), this.path = r, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, o = o || {};
    for (var s = Object.keys(o), i = 0, a = s.length; i < a; i++) {
      var c = s[i];
      this[c] = o[c];
    }
    if (this.start !== void 0) {
      if (typeof this.start != "number")
        throw TypeError("start must be a Number");
      if (this.start < 0)
        throw new Error("start must be >= zero");
      this.pos = this.start;
    }
    this.busy = !1, this._queue = [], this.fd === null && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush());
  }
}
var wve = _ve, xve = Object.getPrototypeOf || function(e) {
  return e.__proto__;
};
function _ve(e) {
  if (e === null || typeof e != "object")
    return e;
  if (e instanceof Object)
    var t = { __proto__: xve(e) };
  else
    var t = /* @__PURE__ */ Object.create(null);
  return Object.getOwnPropertyNames(e).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  }), t;
}
var Te = Xl, $ve = yve, Eve = vve, Sve = wve, ri = er, Je, Bi;
typeof Symbol == "function" && typeof Symbol.for == "function" ? (Je = Symbol.for("graceful-fs.queue"), Bi = Symbol.for("graceful-fs.previous")) : (Je = "___graceful-fs.queue", Bi = "___graceful-fs.previous");
function Tve() {
}
function Jb(e, t) {
  Object.defineProperty(e, Je, {
    get: function() {
      return t;
    }
  });
}
var Nr = Tve;
ri.debuglog ? Nr = ri.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (Nr = function() {
  var e = ri.format.apply(ri, arguments);
  e = "GFS4: " + e.split(/\n/).join(`
GFS4: `), console.error(e);
});
if (!Te[Je]) {
  var Ove = re[Je] || [];
  Jb(Te, Ove), Te.close = function(e) {
    function t(n, r) {
      return e.call(Te, n, function(o) {
        o || Yh(), typeof r == "function" && r.apply(this, arguments);
      });
    }
    return Object.defineProperty(t, Bi, {
      value: e
    }), t;
  }(Te.close), Te.closeSync = function(e) {
    function t(n) {
      e.apply(Te, arguments), Yh();
    }
    return Object.defineProperty(t, Bi, {
      value: e
    }), t;
  }(Te.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    Nr(Te[Je]), wy.equal(Te[Je].length, 0);
  });
}
re[Je] || Jb(re, Te[Je]);
var Ro = Od(Sve(Te));
process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !Te.__patched && (Ro = Od(Te), Te.__patched = !0);
function Od(e) {
  $ve(e), e.gracefulify = Od, e.createReadStream = P, e.createWriteStream = C;
  var t = e.readFile;
  e.readFile = n;
  function n(E, q, I) {
    return typeof q == "function" && (I = q, q = null), z(E, q, I);
    function z(H, F, U, G) {
      return t(H, F, function(V) {
        V && (V.code === "EMFILE" || V.code === "ENFILE") ? Br([z, [H, F, U], V, G || Date.now(), Date.now()]) : typeof U == "function" && U.apply(this, arguments);
      });
    }
  }
  var r = e.writeFile;
  e.writeFile = o;
  function o(E, q, I, z) {
    return typeof I == "function" && (z = I, I = null), H(E, q, I, z);
    function H(F, U, G, V, K) {
      return r(F, U, G, function(X) {
        X && (X.code === "EMFILE" || X.code === "ENFILE") ? Br([H, [F, U, G, V], X, K || Date.now(), Date.now()]) : typeof V == "function" && V.apply(this, arguments);
      });
    }
  }
  var s = e.appendFile;
  s && (e.appendFile = i);
  function i(E, q, I, z) {
    return typeof I == "function" && (z = I, I = null), H(E, q, I, z);
    function H(F, U, G, V, K) {
      return s(F, U, G, function(X) {
        X && (X.code === "EMFILE" || X.code === "ENFILE") ? Br([H, [F, U, G, V], X, K || Date.now(), Date.now()]) : typeof V == "function" && V.apply(this, arguments);
      });
    }
  }
  var a = e.copyFile;
  a && (e.copyFile = c);
  function c(E, q, I, z) {
    return typeof I == "function" && (z = I, I = 0), H(E, q, I, z);
    function H(F, U, G, V, K) {
      return a(F, U, G, function(X) {
        X && (X.code === "EMFILE" || X.code === "ENFILE") ? Br([H, [F, U, G, V], X, K || Date.now(), Date.now()]) : typeof V == "function" && V.apply(this, arguments);
      });
    }
  }
  var p = e.readdir;
  e.readdir = u;
  var l = /^v[0-5]\./;
  function u(E, q, I) {
    typeof q == "function" && (I = q, q = null);
    var z = l.test(process.version) ? function(U, G, V, K) {
      return p(U, H(
        U,
        G,
        V,
        K
      ));
    } : function(U, G, V, K) {
      return p(U, G, H(
        U,
        G,
        V,
        K
      ));
    };
    return z(E, q, I);
    function H(F, U, G, V) {
      return function(K, X) {
        K && (K.code === "EMFILE" || K.code === "ENFILE") ? Br([
          z,
          [F, U, G],
          K,
          V || Date.now(),
          Date.now()
        ]) : (X && X.sort && X.sort(), typeof G == "function" && G.call(this, K, X));
      };
    }
  }
  if (process.version.substr(0, 4) === "v0.8") {
    var d = Eve(e);
    v = d.ReadStream, w = d.WriteStream;
  }
  var m = e.ReadStream;
  m && (v.prototype = Object.create(m.prototype), v.prototype.open = b);
  var f = e.WriteStream;
  f && (w.prototype = Object.create(f.prototype), w.prototype.open = T), Object.defineProperty(e, "ReadStream", {
    get: function() {
      return v;
    },
    set: function(E) {
      v = E;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "WriteStream", {
    get: function() {
      return w;
    },
    set: function(E) {
      w = E;
    },
    enumerable: !0,
    configurable: !0
  });
  var g = v;
  Object.defineProperty(e, "FileReadStream", {
    get: function() {
      return g;
    },
    set: function(E) {
      g = E;
    },
    enumerable: !0,
    configurable: !0
  });
  var y = w;
  Object.defineProperty(e, "FileWriteStream", {
    get: function() {
      return y;
    },
    set: function(E) {
      y = E;
    },
    enumerable: !0,
    configurable: !0
  });
  function v(E, q) {
    return this instanceof v ? (m.apply(this, arguments), this) : v.apply(Object.create(v.prototype), arguments);
  }
  function b() {
    var E = this;
    k(E.path, E.flags, E.mode, function(q, I) {
      q ? (E.autoClose && E.destroy(), E.emit("error", q)) : (E.fd = I, E.emit("open", I), E.read());
    });
  }
  function w(E, q) {
    return this instanceof w ? (f.apply(this, arguments), this) : w.apply(Object.create(w.prototype), arguments);
  }
  function T() {
    var E = this;
    k(E.path, E.flags, E.mode, function(q, I) {
      q ? (E.destroy(), E.emit("error", q)) : (E.fd = I, E.emit("open", I));
    });
  }
  function P(E, q) {
    return new e.ReadStream(E, q);
  }
  function C(E, q) {
    return new e.WriteStream(E, q);
  }
  var B = e.open;
  e.open = k;
  function k(E, q, I, z) {
    return typeof I == "function" && (z = I, I = null), H(E, q, I, z);
    function H(F, U, G, V, K) {
      return B(F, U, G, function(X, D) {
        X && (X.code === "EMFILE" || X.code === "ENFILE") ? Br([H, [F, U, G, V], X, K || Date.now(), Date.now()]) : typeof V == "function" && V.apply(this, arguments);
      });
    }
  }
  return e;
}
function Br(e) {
  Nr("ENQUEUE", e[0].name, e[1]), Te[Je].push(e), Pd();
}
var oi;
function Yh() {
  for (var e = Date.now(), t = 0; t < Te[Je].length; ++t)
    Te[Je][t].length > 2 && (Te[Je][t][3] = e, Te[Je][t][4] = e);
  Pd();
}
function Pd() {
  if (clearTimeout(oi), oi = void 0, Te[Je].length !== 0) {
    var e = Te[Je].shift(), t = e[0], n = e[1], r = e[2], o = e[3], s = e[4];
    if (o === void 0)
      Nr("RETRY", t.name, n), t.apply(null, n);
    else if (Date.now() - o >= 6e4) {
      Nr("TIMEOUT", t.name, n);
      var i = n.pop();
      typeof i == "function" && i.call(null, r);
    } else {
      var a = Date.now() - s, c = Math.max(s - o, 1), p = Math.min(c * 1.2, 100);
      a >= p ? (Nr("RETRY", t.name, n), t.apply(null, n.concat([o]))) : Te[Je].push(e);
    }
    oi === void 0 && (oi = setTimeout(Pd, 0));
  }
}
(function(e) {
  const t = qe.fromCallback, n = Ro, r = [
    "access",
    "appendFile",
    "chmod",
    "chown",
    "close",
    "copyFile",
    "cp",
    "fchmod",
    "fchown",
    "fdatasync",
    "fstat",
    "fsync",
    "ftruncate",
    "futimes",
    "glob",
    "lchmod",
    "lchown",
    "lutimes",
    "link",
    "lstat",
    "mkdir",
    "mkdtemp",
    "open",
    "opendir",
    "readdir",
    "readFile",
    "readlink",
    "realpath",
    "rename",
    "rm",
    "rmdir",
    "stat",
    "statfs",
    "symlink",
    "truncate",
    "unlink",
    "utimes",
    "writeFile"
  ].filter((o) => typeof n[o] == "function");
  Object.assign(e, n), r.forEach((o) => {
    e[o] = t(n[o]);
  }), e.exists = function(o, s) {
    return typeof s == "function" ? n.exists(o, s) : new Promise((i) => n.exists(o, i));
  }, e.read = function(o, s, i, a, c, p) {
    return typeof p == "function" ? n.read(o, s, i, a, c, p) : new Promise((l, u) => {
      n.read(o, s, i, a, c, (d, m, f) => {
        if (d) return u(d);
        l({ bytesRead: m, buffer: f });
      });
    });
  }, e.write = function(o, s, ...i) {
    return typeof i[i.length - 1] == "function" ? n.write(o, s, ...i) : new Promise((a, c) => {
      n.write(o, s, ...i, (p, l, u) => {
        if (p) return c(p);
        a({ bytesWritten: l, buffer: u });
      });
    });
  }, e.readv = function(o, s, ...i) {
    return typeof i[i.length - 1] == "function" ? n.readv(o, s, ...i) : new Promise((a, c) => {
      n.readv(o, s, ...i, (p, l, u) => {
        if (p) return c(p);
        a({ bytesRead: l, buffers: u });
      });
    });
  }, e.writev = function(o, s, ...i) {
    return typeof i[i.length - 1] == "function" ? n.writev(o, s, ...i) : new Promise((a, c) => {
      n.writev(o, s, ...i, (p, l, u) => {
        if (p) return c(p);
        a({ bytesWritten: l, buffers: u });
      });
    });
  }, typeof n.realpath.native == "function" ? e.realpath.native = t(n.realpath.native) : process.emitWarning(
    "fs.realpath.native is not a function. Is fs being monkey-patched?",
    "Warning",
    "fs-extra-WARN0003"
  );
})(mt);
var Nd = {}, Yb = {};
const Pve = Ye;
Yb.checkPath = function(t) {
  if (process.platform === "win32" && /[<>:"|?*]/.test(t.replace(Pve.parse(t).root, ""))) {
    const r = new Error(`Path contains invalid characters: ${t}`);
    throw r.code = "EINVAL", r;
  }
};
const Qb = mt, { checkPath: Zb } = Yb, ew = (e) => {
  const t = { mode: 511 };
  return typeof e == "number" ? e : { ...t, ...e }.mode;
};
Nd.makeDir = async (e, t) => (Zb(e), Qb.mkdir(e, {
  mode: ew(t),
  recursive: !0
}));
Nd.makeDirSync = (e, t) => (Zb(e), Qb.mkdirSync(e, {
  mode: ew(t),
  recursive: !0
}));
const Nve = qe.fromPromise, { makeDir: Rve, makeDirSync: ll } = Nd, ul = Nve(Rve);
var dn = {
  mkdirs: ul,
  mkdirsSync: ll,
  // alias
  mkdirp: ul,
  mkdirpSync: ll,
  ensureDir: ul,
  ensureDirSync: ll
};
const Ave = qe.fromPromise, tw = mt;
function Dve(e) {
  return tw.access(e).then(() => !0).catch(() => !1);
}
var Lr = {
  pathExists: Ave(Dve),
  pathExistsSync: tw.existsSync
};
const oo = mt, Ive = qe.fromPromise;
async function kve(e, t, n) {
  const r = await oo.open(e, "r+");
  let o = null;
  try {
    await oo.futimes(r, t, n);
  } finally {
    try {
      await oo.close(r);
    } catch (s) {
      o = s;
    }
  }
  if (o)
    throw o;
}
function Cve(e, t, n) {
  const r = oo.openSync(e, "r+");
  return oo.futimesSync(r, t, n), oo.closeSync(r);
}
var nw = {
  utimesMillis: Ive(kve),
  utimesMillisSync: Cve
};
const vo = mt, Me = Ye, Qh = qe.fromPromise;
function jve(e, t, n) {
  const r = n.dereference ? (o) => vo.stat(o, { bigint: !0 }) : (o) => vo.lstat(o, { bigint: !0 });
  return Promise.all([
    r(e),
    r(t).catch((o) => {
      if (o.code === "ENOENT") return null;
      throw o;
    })
  ]).then(([o, s]) => ({ srcStat: o, destStat: s }));
}
function Lve(e, t, n) {
  let r;
  const o = n.dereference ? (i) => vo.statSync(i, { bigint: !0 }) : (i) => vo.lstatSync(i, { bigint: !0 }), s = o(e);
  try {
    r = o(t);
  } catch (i) {
    if (i.code === "ENOENT") return { srcStat: s, destStat: null };
    throw i;
  }
  return { srcStat: s, destStat: r };
}
async function qve(e, t, n, r) {
  const { srcStat: o, destStat: s } = await jve(e, t, r);
  if (s) {
    if (Ns(o, s)) {
      const i = Me.basename(e), a = Me.basename(t);
      if (n === "move" && i !== a && i.toLowerCase() === a.toLowerCase())
        return { srcStat: o, destStat: s, isChangingCase: !0 };
      throw new Error("Source and destination must not be the same.");
    }
    if (o.isDirectory() && !s.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
    if (!o.isDirectory() && s.isDirectory())
      throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`);
  }
  if (o.isDirectory() && Rd(e, t))
    throw new Error(Ta(e, t, n));
  return { srcStat: o, destStat: s };
}
function Fve(e, t, n, r) {
  const { srcStat: o, destStat: s } = Lve(e, t, r);
  if (s) {
    if (Ns(o, s)) {
      const i = Me.basename(e), a = Me.basename(t);
      if (n === "move" && i !== a && i.toLowerCase() === a.toLowerCase())
        return { srcStat: o, destStat: s, isChangingCase: !0 };
      throw new Error("Source and destination must not be the same.");
    }
    if (o.isDirectory() && !s.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
    if (!o.isDirectory() && s.isDirectory())
      throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`);
  }
  if (o.isDirectory() && Rd(e, t))
    throw new Error(Ta(e, t, n));
  return { srcStat: o, destStat: s };
}
async function rw(e, t, n, r) {
  const o = Me.resolve(Me.dirname(e)), s = Me.resolve(Me.dirname(n));
  if (s === o || s === Me.parse(s).root) return;
  let i;
  try {
    i = await vo.stat(s, { bigint: !0 });
  } catch (a) {
    if (a.code === "ENOENT") return;
    throw a;
  }
  if (Ns(t, i))
    throw new Error(Ta(e, n, r));
  return rw(e, t, s, r);
}
function ow(e, t, n, r) {
  const o = Me.resolve(Me.dirname(e)), s = Me.resolve(Me.dirname(n));
  if (s === o || s === Me.parse(s).root) return;
  let i;
  try {
    i = vo.statSync(s, { bigint: !0 });
  } catch (a) {
    if (a.code === "ENOENT") return;
    throw a;
  }
  if (Ns(t, i))
    throw new Error(Ta(e, n, r));
  return ow(e, t, s, r);
}
function Ns(e, t) {
  return t.ino !== void 0 && t.dev !== void 0 && t.ino === e.ino && t.dev === e.dev;
}
function Rd(e, t) {
  const n = Me.resolve(e).split(Me.sep).filter((o) => o), r = Me.resolve(t).split(Me.sep).filter((o) => o);
  return n.every((o, s) => r[s] === o);
}
function Ta(e, t, n) {
  return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`;
}
var Ao = {
  // checkPaths
  checkPaths: Qh(qve),
  checkPathsSync: Fve,
  // checkParent
  checkParentPaths: Qh(rw),
  checkParentPathsSync: ow,
  // Misc
  isSrcSubdir: Rd,
  areIdentical: Ns
};
async function Mve(e, t) {
  const n = [];
  for await (const r of e)
    n.push(
      t(r).then(
        () => null,
        (o) => o ?? new Error("unknown error")
      )
    );
  await Promise.all(
    n.map(
      (r) => r.then((o) => {
        if (o !== null) throw o;
      })
    )
  );
}
var Uve = {
  asyncIteratorConcurrentProcess: Mve
};
const st = mt, as = Ye, { mkdirs: Vve } = dn, { pathExists: zve } = Lr, { utimesMillis: Bve } = nw, cs = Ao, { asyncIteratorConcurrentProcess: Gve } = Uve;
async function Hve(e, t, n = {}) {
  typeof n == "function" && (n = { filter: n }), n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0001"
  );
  const { srcStat: r, destStat: o } = await cs.checkPaths(e, t, "copy", n);
  if (await cs.checkParentPaths(e, r, t, "copy"), !await sw(e, t, n)) return;
  const i = as.dirname(t);
  await zve(i) || await Vve(i), await iw(o, e, t, n);
}
async function sw(e, t, n) {
  return n.filter ? n.filter(e, t) : !0;
}
async function iw(e, t, n, r) {
  const s = await (r.dereference ? st.stat : st.lstat)(t);
  if (s.isDirectory()) return Jve(s, e, t, n, r);
  if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return Xve(s, e, t, n, r);
  if (s.isSymbolicLink()) return Yve(e, t, n, r);
  throw s.isSocket() ? new Error(`Cannot copy a socket file: ${t}`) : s.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${t}`) : new Error(`Unknown file: ${t}`);
}
async function Xve(e, t, n, r, o) {
  if (!t) return Zh(e, n, r, o);
  if (o.overwrite)
    return await st.unlink(r), Zh(e, n, r, o);
  if (o.errorOnExist)
    throw new Error(`'${r}' already exists`);
}
async function Zh(e, t, n, r) {
  if (await st.copyFile(t, n), r.preserveTimestamps) {
    Kve(e.mode) && await Wve(n, e.mode);
    const o = await st.stat(t);
    await Bve(n, o.atime, o.mtime);
  }
  return st.chmod(n, e.mode);
}
function Kve(e) {
  return (e & 128) === 0;
}
function Wve(e, t) {
  return st.chmod(e, t | 128);
}
async function Jve(e, t, n, r, o) {
  t || await st.mkdir(r), await Gve(await st.opendir(n), async (s) => {
    const i = as.join(n, s.name), a = as.join(r, s.name);
    if (await sw(i, a, o)) {
      const { destStat: p } = await cs.checkPaths(i, a, "copy", o);
      await iw(p, i, a, o);
    }
  }), t || await st.chmod(r, e.mode);
}
async function Yve(e, t, n, r) {
  let o = await st.readlink(t);
  if (r.dereference && (o = as.resolve(process.cwd(), o)), !e)
    return st.symlink(o, n);
  let s = null;
  try {
    s = await st.readlink(n);
  } catch (i) {
    if (i.code === "EINVAL" || i.code === "UNKNOWN") return st.symlink(o, n);
    throw i;
  }
  if (r.dereference && (s = as.resolve(process.cwd(), s)), o !== s) {
    if (cs.isSrcSubdir(o, s))
      throw new Error(`Cannot copy '${o}' to a subdirectory of itself, '${s}'.`);
    if (cs.isSrcSubdir(s, o))
      throw new Error(`Cannot overwrite '${s}' with '${o}'.`);
  }
  return await st.unlink(n), st.symlink(o, n);
}
var Qve = Hve;
const pt = Ro, ls = Ye, Zve = dn.mkdirsSync, ebe = nw.utimesMillisSync, us = Ao;
function tbe(e, t, n) {
  typeof n == "function" && (n = { filter: n }), n = n || {}, n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0002"
  );
  const { srcStat: r, destStat: o } = us.checkPathsSync(e, t, "copy", n);
  if (us.checkParentPathsSync(e, r, t, "copy"), n.filter && !n.filter(e, t)) return;
  const s = ls.dirname(t);
  return pt.existsSync(s) || Zve(s), aw(o, e, t, n);
}
function aw(e, t, n, r) {
  const s = (r.dereference ? pt.statSync : pt.lstatSync)(t);
  if (s.isDirectory()) return cbe(s, e, t, n, r);
  if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return nbe(s, e, t, n, r);
  if (s.isSymbolicLink()) return pbe(e, t, n, r);
  throw s.isSocket() ? new Error(`Cannot copy a socket file: ${t}`) : s.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${t}`) : new Error(`Unknown file: ${t}`);
}
function nbe(e, t, n, r, o) {
  return t ? rbe(e, n, r, o) : cw(e, n, r, o);
}
function rbe(e, t, n, r) {
  if (r.overwrite)
    return pt.unlinkSync(n), cw(e, t, n, r);
  if (r.errorOnExist)
    throw new Error(`'${n}' already exists`);
}
function cw(e, t, n, r) {
  return pt.copyFileSync(t, n), r.preserveTimestamps && obe(e.mode, t, n), Ad(n, e.mode);
}
function obe(e, t, n) {
  return sbe(e) && ibe(n, e), abe(t, n);
}
function sbe(e) {
  return (e & 128) === 0;
}
function ibe(e, t) {
  return Ad(e, t | 128);
}
function Ad(e, t) {
  return pt.chmodSync(e, t);
}
function abe(e, t) {
  const n = pt.statSync(e);
  return ebe(t, n.atime, n.mtime);
}
function cbe(e, t, n, r, o) {
  return t ? lw(n, r, o) : lbe(e.mode, n, r, o);
}
function lbe(e, t, n, r) {
  return pt.mkdirSync(n), lw(t, n, r), Ad(n, e);
}
function lw(e, t, n) {
  const r = pt.opendirSync(e);
  try {
    let o;
    for (; (o = r.readSync()) !== null; )
      ube(o.name, e, t, n);
  } finally {
    r.closeSync();
  }
}
function ube(e, t, n, r) {
  const o = ls.join(t, e), s = ls.join(n, e);
  if (r.filter && !r.filter(o, s)) return;
  const { destStat: i } = us.checkPathsSync(o, s, "copy", r);
  return aw(i, o, s, r);
}
function pbe(e, t, n, r) {
  let o = pt.readlinkSync(t);
  if (r.dereference && (o = ls.resolve(process.cwd(), o)), e) {
    let s;
    try {
      s = pt.readlinkSync(n);
    } catch (i) {
      if (i.code === "EINVAL" || i.code === "UNKNOWN") return pt.symlinkSync(o, n);
      throw i;
    }
    if (r.dereference && (s = ls.resolve(process.cwd(), s)), o !== s) {
      if (us.isSrcSubdir(o, s))
        throw new Error(`Cannot copy '${o}' to a subdirectory of itself, '${s}'.`);
      if (us.isSrcSubdir(s, o))
        throw new Error(`Cannot overwrite '${s}' with '${o}'.`);
    }
    return dbe(o, n);
  } else
    return pt.symlinkSync(o, n);
}
function dbe(e, t) {
  return pt.unlinkSync(t), pt.symlinkSync(e, t);
}
var fbe = tbe;
const mbe = qe.fromPromise;
var Dd = {
  copy: mbe(Qve),
  copySync: fbe
};
const uw = Ro, hbe = qe.fromCallback;
function ybe(e, t) {
  uw.rm(e, { recursive: !0, force: !0 }, t);
}
function gbe(e) {
  uw.rmSync(e, { recursive: !0, force: !0 });
}
var Oa = {
  remove: hbe(ybe),
  removeSync: gbe
};
const vbe = qe.fromPromise, pw = mt, dw = Ye, fw = dn, mw = Oa, ey = vbe(async function(t) {
  let n;
  try {
    n = await pw.readdir(t);
  } catch {
    return fw.mkdirs(t);
  }
  return Promise.all(n.map((r) => mw.remove(dw.join(t, r))));
});
function ty(e) {
  let t;
  try {
    t = pw.readdirSync(e);
  } catch {
    return fw.mkdirsSync(e);
  }
  t.forEach((n) => {
    n = dw.join(e, n), mw.removeSync(n);
  });
}
var bbe = {
  emptyDirSync: ty,
  emptydirSync: ty,
  emptyDir: ey,
  emptydir: ey
};
const wbe = qe.fromPromise, hw = Ye, _n = mt, yw = dn;
async function xbe(e) {
  let t;
  try {
    t = await _n.stat(e);
  } catch {
  }
  if (t && t.isFile()) return;
  const n = hw.dirname(e);
  let r = null;
  try {
    r = await _n.stat(n);
  } catch (o) {
    if (o.code === "ENOENT") {
      await yw.mkdirs(n), await _n.writeFile(e, "");
      return;
    } else
      throw o;
  }
  r.isDirectory() ? await _n.writeFile(e, "") : await _n.readdir(n);
}
function _be(e) {
  let t;
  try {
    t = _n.statSync(e);
  } catch {
  }
  if (t && t.isFile()) return;
  const n = hw.dirname(e);
  try {
    _n.statSync(n).isDirectory() || _n.readdirSync(n);
  } catch (r) {
    if (r && r.code === "ENOENT") yw.mkdirsSync(n);
    else throw r;
  }
  _n.writeFileSync(e, "");
}
var $be = {
  createFile: wbe(xbe),
  createFileSync: _be
};
const Ebe = qe.fromPromise, gw = Ye, zn = mt, vw = dn, { pathExists: Sbe } = Lr, { areIdentical: bw } = Ao;
async function Tbe(e, t) {
  let n;
  try {
    n = await zn.lstat(t);
  } catch {
  }
  let r;
  try {
    r = await zn.lstat(e);
  } catch (i) {
    throw i.message = i.message.replace("lstat", "ensureLink"), i;
  }
  if (n && bw(r, n)) return;
  const o = gw.dirname(t);
  await Sbe(o) || await vw.mkdirs(o), await zn.link(e, t);
}
function Obe(e, t) {
  let n;
  try {
    n = zn.lstatSync(t);
  } catch {
  }
  try {
    const s = zn.lstatSync(e);
    if (n && bw(s, n)) return;
  } catch (s) {
    throw s.message = s.message.replace("lstat", "ensureLink"), s;
  }
  const r = gw.dirname(t);
  return zn.existsSync(r) || vw.mkdirsSync(r), zn.linkSync(e, t);
}
var Pbe = {
  createLink: Ebe(Tbe),
  createLinkSync: Obe
};
const Wn = Ye, ts = mt, { pathExists: Nbe } = Lr, Rbe = qe.fromPromise;
async function Abe(e, t) {
  if (Wn.isAbsolute(e)) {
    try {
      await ts.lstat(e);
    } catch (s) {
      throw s.message = s.message.replace("lstat", "ensureSymlink"), s;
    }
    return {
      toCwd: e,
      toDst: e
    };
  }
  const n = Wn.dirname(t), r = Wn.join(n, e);
  if (await Nbe(r))
    return {
      toCwd: r,
      toDst: e
    };
  try {
    await ts.lstat(e);
  } catch (s) {
    throw s.message = s.message.replace("lstat", "ensureSymlink"), s;
  }
  return {
    toCwd: e,
    toDst: Wn.relative(n, e)
  };
}
function Dbe(e, t) {
  if (Wn.isAbsolute(e)) {
    if (!ts.existsSync(e)) throw new Error("absolute srcpath does not exist");
    return {
      toCwd: e,
      toDst: e
    };
  }
  const n = Wn.dirname(t), r = Wn.join(n, e);
  if (ts.existsSync(r))
    return {
      toCwd: r,
      toDst: e
    };
  if (!ts.existsSync(e)) throw new Error("relative srcpath does not exist");
  return {
    toCwd: e,
    toDst: Wn.relative(n, e)
  };
}
var Ibe = {
  symlinkPaths: Rbe(Abe),
  symlinkPathsSync: Dbe
};
const ww = mt, kbe = qe.fromPromise;
async function Cbe(e, t) {
  if (t) return t;
  let n;
  try {
    n = await ww.lstat(e);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
function jbe(e, t) {
  if (t) return t;
  let n;
  try {
    n = ww.lstatSync(e);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
var Lbe = {
  symlinkType: kbe(Cbe),
  symlinkTypeSync: jbe
};
const qbe = qe.fromPromise, xw = Ye, on = mt, { mkdirs: Fbe, mkdirsSync: Mbe } = dn, { symlinkPaths: Ube, symlinkPathsSync: Vbe } = Ibe, { symlinkType: zbe, symlinkTypeSync: Bbe } = Lbe, { pathExists: Gbe } = Lr, { areIdentical: _w } = Ao;
async function Hbe(e, t, n) {
  let r;
  try {
    r = await on.lstat(t);
  } catch {
  }
  if (r && r.isSymbolicLink()) {
    const [a, c] = await Promise.all([
      on.stat(e),
      on.stat(t)
    ]);
    if (_w(a, c)) return;
  }
  const o = await Ube(e, t);
  e = o.toDst;
  const s = await zbe(o.toCwd, n), i = xw.dirname(t);
  return await Gbe(i) || await Fbe(i), on.symlink(e, t, s);
}
function Xbe(e, t, n) {
  let r;
  try {
    r = on.lstatSync(t);
  } catch {
  }
  if (r && r.isSymbolicLink()) {
    const a = on.statSync(e), c = on.statSync(t);
    if (_w(a, c)) return;
  }
  const o = Vbe(e, t);
  e = o.toDst, n = Bbe(o.toCwd, n);
  const s = xw.dirname(t);
  return on.existsSync(s) || Mbe(s), on.symlinkSync(e, t, n);
}
var Kbe = {
  createSymlink: qbe(Hbe),
  createSymlinkSync: Xbe
};
const { createFile: ny, createFileSync: ry } = $be, { createLink: oy, createLinkSync: sy } = Pbe, { createSymlink: iy, createSymlinkSync: ay } = Kbe;
var Wbe = {
  // file
  createFile: ny,
  createFileSync: ry,
  ensureFile: ny,
  ensureFileSync: ry,
  // link
  createLink: oy,
  createLinkSync: sy,
  ensureLink: oy,
  ensureLinkSync: sy,
  // symlink
  createSymlink: iy,
  createSymlinkSync: ay,
  ensureSymlink: iy,
  ensureSymlinkSync: ay
};
function Jbe(e, { EOL: t = `
`, finalEOL: n = !0, replacer: r = null, spaces: o } = {}) {
  const s = n ? t : "";
  return JSON.stringify(e, r, o).replace(/\n/g, t) + s;
}
function Ybe(e) {
  return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "");
}
var Id = { stringify: Jbe, stripBom: Ybe };
let bo;
try {
  bo = Ro;
} catch {
  bo = Xl;
}
const Pa = qe, { stringify: $w, stripBom: Ew } = Id;
async function Qbe(e, t = {}) {
  typeof t == "string" && (t = { encoding: t });
  const n = t.fs || bo, r = "throws" in t ? t.throws : !0;
  let o = await Pa.fromCallback(n.readFile)(e, t);
  o = Ew(o);
  let s;
  try {
    s = JSON.parse(o, t ? t.reviver : null);
  } catch (i) {
    if (r)
      throw i.message = `${e}: ${i.message}`, i;
    return null;
  }
  return s;
}
const Zbe = Pa.fromPromise(Qbe);
function ewe(e, t = {}) {
  typeof t == "string" && (t = { encoding: t });
  const n = t.fs || bo, r = "throws" in t ? t.throws : !0;
  try {
    let o = n.readFileSync(e, t);
    return o = Ew(o), JSON.parse(o, t.reviver);
  } catch (o) {
    if (r)
      throw o.message = `${e}: ${o.message}`, o;
    return null;
  }
}
async function twe(e, t, n = {}) {
  const r = n.fs || bo, o = $w(t, n);
  await Pa.fromCallback(r.writeFile)(e, o, n);
}
const nwe = Pa.fromPromise(twe);
function rwe(e, t, n = {}) {
  const r = n.fs || bo, o = $w(t, n);
  return r.writeFileSync(e, o, n);
}
var owe = {
  readFile: Zbe,
  readFileSync: ewe,
  writeFile: nwe,
  writeFileSync: rwe
};
const si = owe;
var swe = {
  // jsonfile exports
  readJson: si.readFile,
  readJsonSync: si.readFileSync,
  writeJson: si.writeFile,
  writeJsonSync: si.writeFileSync
};
const iwe = qe.fromPromise, Ml = mt, Sw = Ye, Tw = dn, awe = Lr.pathExists;
async function cwe(e, t, n = "utf-8") {
  const r = Sw.dirname(e);
  return await awe(r) || await Tw.mkdirs(r), Ml.writeFile(e, t, n);
}
function lwe(e, ...t) {
  const n = Sw.dirname(e);
  Ml.existsSync(n) || Tw.mkdirsSync(n), Ml.writeFileSync(e, ...t);
}
var kd = {
  outputFile: iwe(cwe),
  outputFileSync: lwe
};
const { stringify: uwe } = Id, { outputFile: pwe } = kd;
async function dwe(e, t, n = {}) {
  const r = uwe(t, n);
  await pwe(e, r, n);
}
var fwe = dwe;
const { stringify: mwe } = Id, { outputFileSync: hwe } = kd;
function ywe(e, t, n) {
  const r = mwe(t, n);
  hwe(e, r, n);
}
var gwe = ywe;
const vwe = qe.fromPromise, dt = swe;
dt.outputJson = vwe(fwe);
dt.outputJsonSync = gwe;
dt.outputJSON = dt.outputJson;
dt.outputJSONSync = dt.outputJsonSync;
dt.writeJSON = dt.writeJson;
dt.writeJSONSync = dt.writeJsonSync;
dt.readJSON = dt.readJson;
dt.readJSONSync = dt.readJsonSync;
var bwe = dt;
const wwe = mt, cy = Ye, { copy: xwe } = Dd, { remove: Ow } = Oa, { mkdirp: _we } = dn, { pathExists: $we } = Lr, ly = Ao;
async function Ewe(e, t, n = {}) {
  const r = n.overwrite || n.clobber || !1, { srcStat: o, isChangingCase: s = !1 } = await ly.checkPaths(e, t, "move", n);
  await ly.checkParentPaths(e, o, t, "move");
  const i = cy.dirname(t);
  return cy.parse(i).root !== i && await _we(i), Swe(e, t, r, s);
}
async function Swe(e, t, n, r) {
  if (!r) {
    if (n)
      await Ow(t);
    else if (await $we(t))
      throw new Error("dest already exists.");
  }
  try {
    await wwe.rename(e, t);
  } catch (o) {
    if (o.code !== "EXDEV")
      throw o;
    await Twe(e, t, n);
  }
}
async function Twe(e, t, n) {
  return await xwe(e, t, {
    overwrite: n,
    errorOnExist: !0,
    preserveTimestamps: !0
  }), Ow(e);
}
var Owe = Ewe;
const Pw = Ro, Ul = Ye, Pwe = Dd.copySync, Nw = Oa.removeSync, Nwe = dn.mkdirpSync, uy = Ao;
function Rwe(e, t, n) {
  n = n || {};
  const r = n.overwrite || n.clobber || !1, { srcStat: o, isChangingCase: s = !1 } = uy.checkPathsSync(e, t, "move", n);
  return uy.checkParentPathsSync(e, o, t, "move"), Awe(t) || Nwe(Ul.dirname(t)), Dwe(e, t, r, s);
}
function Awe(e) {
  const t = Ul.dirname(e);
  return Ul.parse(t).root === t;
}
function Dwe(e, t, n, r) {
  if (r) return pl(e, t, n);
  if (n)
    return Nw(t), pl(e, t, n);
  if (Pw.existsSync(t)) throw new Error("dest already exists.");
  return pl(e, t, n);
}
function pl(e, t, n) {
  try {
    Pw.renameSync(e, t);
  } catch (r) {
    if (r.code !== "EXDEV") throw r;
    return Iwe(e, t, n);
  }
}
function Iwe(e, t, n) {
  return Pwe(e, t, {
    overwrite: n,
    errorOnExist: !0,
    preserveTimestamps: !0
  }), Nw(e);
}
var kwe = Rwe;
const Cwe = qe.fromPromise;
var jwe = {
  move: Cwe(Owe),
  moveSync: kwe
}, Lwe = {
  // Export promiseified graceful-fs:
  ...mt,
  // Export extra methods:
  ...Dd,
  ...bbe,
  ...Wbe,
  ...bwe,
  ...dn,
  ...jwe,
  ...kd,
  ...Lr,
  ...Oa
};
const Rw = /* @__PURE__ */ tr(Lwe);
class qwe {
  async downloadFile(t, n, r) {
    const o = Rw.createWriteStream(n);
    try {
      const s = await Ie({
        url: t,
        method: "GET",
        responseType: "stream"
      }), i = s.headers["content-length"];
      let a = 0;
      return s.data.on("data", (c) => {
        a += c.length, i && r(a, parseInt(i));
      }), s.data.pipe(o), new Promise((c, p) => {
        o.on("finish", () => c()), o.on("error", p);
      });
    } catch (s) {
      throw console.error("Download failed:", s), s;
    }
  }
}
var Aw = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, n = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (n = !1));
  function o(c, p, l) {
    this.fn = c, this.context = p, this.once = l || !1;
  }
  function s(c, p, l, u, d) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var m = new o(l, u || c, d), f = n ? n + p : p;
    return c._events[f] ? c._events[f].fn ? c._events[f] = [c._events[f], m] : c._events[f].push(m) : (c._events[f] = m, c._eventsCount++), c;
  }
  function i(c, p) {
    --c._eventsCount === 0 ? c._events = new r() : delete c._events[p];
  }
  function a() {
    this._events = new r(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var p = [], l, u;
    if (this._eventsCount === 0) return p;
    for (u in l = this._events)
      t.call(l, u) && p.push(n ? u.slice(1) : u);
    return Object.getOwnPropertySymbols ? p.concat(Object.getOwnPropertySymbols(l)) : p;
  }, a.prototype.listeners = function(p) {
    var l = n ? n + p : p, u = this._events[l];
    if (!u) return [];
    if (u.fn) return [u.fn];
    for (var d = 0, m = u.length, f = new Array(m); d < m; d++)
      f[d] = u[d].fn;
    return f;
  }, a.prototype.listenerCount = function(p) {
    var l = n ? n + p : p, u = this._events[l];
    return u ? u.fn ? 1 : u.length : 0;
  }, a.prototype.emit = function(p, l, u, d, m, f) {
    var g = n ? n + p : p;
    if (!this._events[g]) return !1;
    var y = this._events[g], v = arguments.length, b, w;
    if (y.fn) {
      switch (y.once && this.removeListener(p, y.fn, void 0, !0), v) {
        case 1:
          return y.fn.call(y.context), !0;
        case 2:
          return y.fn.call(y.context, l), !0;
        case 3:
          return y.fn.call(y.context, l, u), !0;
        case 4:
          return y.fn.call(y.context, l, u, d), !0;
        case 5:
          return y.fn.call(y.context, l, u, d, m), !0;
        case 6:
          return y.fn.call(y.context, l, u, d, m, f), !0;
      }
      for (w = 1, b = new Array(v - 1); w < v; w++)
        b[w - 1] = arguments[w];
      y.fn.apply(y.context, b);
    } else {
      var T = y.length, P;
      for (w = 0; w < T; w++)
        switch (y[w].once && this.removeListener(p, y[w].fn, void 0, !0), v) {
          case 1:
            y[w].fn.call(y[w].context);
            break;
          case 2:
            y[w].fn.call(y[w].context, l);
            break;
          case 3:
            y[w].fn.call(y[w].context, l, u);
            break;
          case 4:
            y[w].fn.call(y[w].context, l, u, d);
            break;
          default:
            if (!b) for (P = 1, b = new Array(v - 1); P < v; P++)
              b[P - 1] = arguments[P];
            y[w].fn.apply(y[w].context, b);
        }
    }
    return !0;
  }, a.prototype.on = function(p, l, u) {
    return s(this, p, l, u, !1);
  }, a.prototype.once = function(p, l, u) {
    return s(this, p, l, u, !0);
  }, a.prototype.removeListener = function(p, l, u, d) {
    var m = n ? n + p : p;
    if (!this._events[m]) return this;
    if (!l)
      return i(this, m), this;
    var f = this._events[m];
    if (f.fn)
      f.fn === l && (!d || f.once) && (!u || f.context === u) && i(this, m);
    else {
      for (var g = 0, y = [], v = f.length; g < v; g++)
        (f[g].fn !== l || d && !f[g].once || u && f[g].context !== u) && y.push(f[g]);
      y.length ? this._events[m] = y.length === 1 ? y[0] : y : i(this, m);
    }
    return this;
  }, a.prototype.removeAllListeners = function(p) {
    var l;
    return p ? (l = n ? n + p : p, this._events[l] && i(this, l)) : (this._events = new r(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, e.exports = a;
})(Aw);
var Fwe = Aw.exports;
const Mwe = /* @__PURE__ */ tr(Fwe);
class Cd extends Error {
  constructor(n, r) {
    var o;
    super(n, r);
    Qt(this, "name", "TimeoutError");
    (o = Error.captureStackTrace) == null || o.call(Error, this, Cd);
  }
}
const py = (e) => e.reason ?? new DOMException("This operation was aborted.", "AbortError");
function Uwe(e, t) {
  const {
    milliseconds: n,
    fallback: r,
    message: o,
    customTimers: s = { setTimeout, clearTimeout },
    signal: i
  } = t;
  let a, c;
  const l = new Promise((u, d) => {
    if (typeof n != "number" || Math.sign(n) !== 1)
      throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${n}\``);
    if (i != null && i.aborted) {
      d(py(i));
      return;
    }
    if (i && (c = () => {
      d(py(i));
    }, i.addEventListener("abort", c, { once: !0 })), e.then(u, d), n === Number.POSITIVE_INFINITY)
      return;
    const m = new Cd();
    a = s.setTimeout.call(void 0, () => {
      if (r) {
        try {
          u(r());
        } catch (f) {
          d(f);
        }
        return;
      }
      typeof e.cancel == "function" && e.cancel(), o === !1 ? u() : o instanceof Error ? d(o) : (m.message = o ?? `Promise timed out after ${n} milliseconds`, d(m));
    }, n);
  }).finally(() => {
    l.clear(), c && i && i.removeEventListener("abort", c);
  });
  return l.clear = () => {
    s.clearTimeout.call(void 0, a), a = void 0;
  }, l;
}
function Vwe(e, t, n) {
  let r = 0, o = e.length;
  for (; o > 0; ) {
    const s = Math.trunc(o / 2);
    let i = r + s;
    n(e[i], t) <= 0 ? (r = ++i, o -= s + 1) : o = s;
  }
  return r;
}
var Nt;
class zwe {
  constructor() {
    ge(this, Nt, []);
  }
  enqueue(t, n) {
    const { priority: r = 0, id: o } = n ?? {}, s = {
      priority: r,
      id: o,
      run: t
    };
    if (this.size === 0 || M(this, Nt)[this.size - 1].priority >= r) {
      M(this, Nt).push(s);
      return;
    }
    const i = Vwe(M(this, Nt), s, (a, c) => c.priority - a.priority);
    M(this, Nt).splice(i, 0, s);
  }
  setPriority(t, n) {
    const r = M(this, Nt).findIndex((s) => s.id === t);
    if (r === -1)
      throw new ReferenceError(`No promise function with the id "${t}" exists in the queue.`);
    const [o] = M(this, Nt).splice(r, 1);
    this.enqueue(o.run, { priority: n, id: t });
  }
  dequeue() {
    const t = M(this, Nt).shift();
    return t == null ? void 0 : t.run;
  }
  filter(t) {
    return M(this, Nt).filter((n) => n.priority === t.priority).map((n) => n.run);
  }
  get size() {
    return M(this, Nt).length;
  }
}
Nt = new WeakMap();
var io, Mt, Ut, Hn, $r, ao, nn, ps, co, rn, wn, Rt, gt, it, ke, ds, Xe, Er, xn, Gi, Sr, Q, _i, Dw, Iw, $i, kw, Cw, jw, Lw, qw, Ei, Si, Vl, Ti, zl, Bl, Oi, ur, Fw, Kr, Mw, Gl;
class Bwe extends Mwe {
  constructor(n) {
    var r, o;
    super();
    ge(this, Q);
    ge(this, io);
    ge(this, Mt);
    ge(this, Ut, 0);
    ge(this, Hn);
    ge(this, $r, !1);
    ge(this, ao, !1);
    ge(this, nn);
    ge(this, ps, 0);
    ge(this, co, 0);
    ge(this, rn);
    ge(this, wn);
    ge(this, Rt);
    // Circular buffer implementation for better performance
    ge(this, gt, []);
    ge(this, it, 0);
    ge(this, ke);
    ge(this, ds);
    ge(this, Xe, 0);
    // The `!` is needed because of https://github.com/microsoft/TypeScript/issues/32194
    ge(this, Er);
    ge(this, xn);
    // Use to assign a unique identifier to a promise function, if not explicitly specified
    ge(this, Gi, 1n);
    // Track currently running tasks for debugging
    ge(this, Sr, /* @__PURE__ */ new Map());
    /**
        Get or set the default timeout for all tasks. Can be changed at runtime.
    
        Operations will throw a `TimeoutError` if they don't complete within the specified time.
    
        The timeout begins when the operation is dequeued and starts execution, not while it's waiting in the queue.
    
        @example
        ```
        const queue = new PQueue({timeout: 5000});
    
        // Change timeout for all future tasks
        queue.timeout = 10000;
        ```
        */
    Qt(this, "timeout");
    if (n = {
      carryoverIntervalCount: !1,
      intervalCap: Number.POSITIVE_INFINITY,
      interval: 0,
      concurrency: Number.POSITIVE_INFINITY,
      autoStart: !0,
      queueClass: zwe,
      strict: !1,
      ...n
    }, !(typeof n.intervalCap == "number" && n.intervalCap >= 1))
      throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${((r = n.intervalCap) == null ? void 0 : r.toString()) ?? ""}\` (${typeof n.intervalCap})`);
    if (n.interval === void 0 || !(Number.isFinite(n.interval) && n.interval >= 0))
      throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${((o = n.interval) == null ? void 0 : o.toString()) ?? ""}\` (${typeof n.interval})`);
    if (n.strict && n.interval === 0)
      throw new TypeError("The `strict` option requires a non-zero `interval`");
    if (n.strict && n.intervalCap === Number.POSITIVE_INFINITY)
      throw new TypeError("The `strict` option requires a finite `intervalCap`");
    if (ie(this, io, n.carryoverIntervalCount ?? n.carryoverConcurrencyCount ?? !1), ie(this, Mt, n.intervalCap === Number.POSITIVE_INFINITY || n.interval === 0), ie(this, Hn, n.intervalCap), ie(this, nn, n.interval), ie(this, Rt, n.strict), ie(this, ke, new n.queueClass()), ie(this, ds, n.queueClass), this.concurrency = n.concurrency, n.timeout !== void 0 && !(Number.isFinite(n.timeout) && n.timeout > 0))
      throw new TypeError(`Expected \`timeout\` to be a positive finite number, got \`${n.timeout}\` (${typeof n.timeout})`);
    this.timeout = n.timeout, ie(this, xn, n.autoStart === !1), ne(this, Q, Fw).call(this);
  }
  get concurrency() {
    return M(this, Er);
  }
  set concurrency(n) {
    if (!(typeof n == "number" && n >= 1))
      throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${n}\` (${typeof n})`);
    ie(this, Er, n), ne(this, Q, Oi).call(this);
  }
  /**
      Updates the priority of a promise function by its id, affecting its execution order. Requires a defined concurrency limit to take effect.
  
      For example, this can be used to prioritize a promise function to run earlier.
  
      ```js
      import PQueue from 'p-queue';
  
      const queue = new PQueue({concurrency: 1});
  
      queue.add(async () => '🦄', {priority: 1});
      queue.add(async () => '🦀', {priority: 0, id: '🦀'});
      queue.add(async () => '🦄', {priority: 1});
      queue.add(async () => '🦄', {priority: 1});
  
      queue.setPriority('🦀', 2);
      ```
  
      In this case, the promise function with `id: '🦀'` runs second.
  
      You can also deprioritize a promise function to delay its execution:
  
      ```js
      import PQueue from 'p-queue';
  
      const queue = new PQueue({concurrency: 1});
  
      queue.add(async () => '🦄', {priority: 1});
      queue.add(async () => '🦀', {priority: 1, id: '🦀'});
      queue.add(async () => '🦄');
      queue.add(async () => '🦄', {priority: 0});
  
      queue.setPriority('🦀', -1);
      ```
      Here, the promise function with `id: '🦀'` executes last.
      */
  setPriority(n, r) {
    if (typeof r != "number" || !Number.isFinite(r))
      throw new TypeError(`Expected \`priority\` to be a finite number, got \`${r}\` (${typeof r})`);
    M(this, ke).setPriority(n, r);
  }
  async add(n, r = {}) {
    return r = {
      timeout: this.timeout,
      ...r,
      // Assign unique ID if not provided
      id: r.id ?? (ir(this, Gi)._++).toString()
    }, new Promise((o, s) => {
      const i = Symbol(`task-${r.id}`);
      M(this, ke).enqueue(async () => {
        var c, p;
        ir(this, Xe)._++, M(this, Sr).set(i, {
          id: r.id,
          priority: r.priority ?? 0,
          // Match priority-queue default
          startTime: Date.now(),
          timeout: r.timeout
        });
        let a;
        try {
          try {
            (c = r.signal) == null || c.throwIfAborted();
          } catch (d) {
            throw ne(this, Q, Mw).call(this), M(this, Sr).delete(i), d;
          }
          ie(this, co, Date.now());
          let l = n({ signal: r.signal });
          if (r.timeout && (l = Uwe(Promise.resolve(l), {
            milliseconds: r.timeout,
            message: `Task timed out after ${r.timeout}ms (queue has ${M(this, Xe)} running, ${M(this, ke).size} waiting)`
          })), r.signal) {
            const { signal: d } = r;
            l = Promise.race([l, new Promise((m, f) => {
              a = () => {
                f(d.reason);
              }, d.addEventListener("abort", a, { once: !0 });
            })]);
          }
          const u = await l;
          o(u), this.emit("completed", u);
        } catch (l) {
          s(l), this.emit("error", l);
        } finally {
          a && ((p = r.signal) == null || p.removeEventListener("abort", a)), M(this, Sr).delete(i), queueMicrotask(() => {
            ne(this, Q, jw).call(this);
          });
        }
      }, r), this.emit("add"), ne(this, Q, Ti).call(this);
    });
  }
  async addAll(n, r) {
    return Promise.all(n.map(async (o) => this.add(o, r)));
  }
  /**
  Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
  */
  start() {
    return M(this, xn) ? (ie(this, xn, !1), ne(this, Q, Oi).call(this), this) : this;
  }
  /**
  Put queue execution on hold.
  */
  pause() {
    ie(this, xn, !0);
  }
  /**
  Clear the queue.
  */
  clear() {
    ie(this, ke, new (M(this, ds))()), ne(this, Q, Si).call(this), ne(this, Q, Gl).call(this), this.emit("empty"), M(this, Xe) === 0 && (ne(this, Q, Vl).call(this), this.emit("idle")), this.emit("next");
  }
  /**
      Can be called multiple times. Useful if you for example add additional items at a later time.
  
      @returns A promise that settles when the queue becomes empty.
      */
  async onEmpty() {
    M(this, ke).size !== 0 && await ne(this, Q, ur).call(this, "empty");
  }
  /**
      @returns A promise that settles when the queue size is less than the given limit: `queue.size < limit`.
  
      If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.
  
      Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.
      */
  async onSizeLessThan(n) {
    M(this, ke).size < n || await ne(this, Q, ur).call(this, "next", () => M(this, ke).size < n);
  }
  /**
      The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
  
      @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
      */
  async onIdle() {
    M(this, Xe) === 0 && M(this, ke).size === 0 || await ne(this, Q, ur).call(this, "idle");
  }
  /**
      The difference with `.onIdle` is that `.onPendingZero` only waits for currently running tasks to finish, ignoring queued tasks.
  
      @returns A promise that settles when all currently running tasks have completed; `queue.pending === 0`.
      */
  async onPendingZero() {
    M(this, Xe) !== 0 && await ne(this, Q, ur).call(this, "pendingZero");
  }
  /**
  @returns A promise that settles when the queue becomes rate-limited due to intervalCap.
  */
  async onRateLimit() {
    this.isRateLimited || await ne(this, Q, ur).call(this, "rateLimit");
  }
  /**
  @returns A promise that settles when the queue is no longer rate-limited.
  */
  async onRateLimitCleared() {
    this.isRateLimited && await ne(this, Q, ur).call(this, "rateLimitCleared");
  }
  /**
      @returns A promise that rejects when any task in the queue errors.
  
      Use with `Promise.race([queue.onError(), queue.onIdle()])` to fail fast on the first error while still resolving normally when the queue goes idle.
  
      Important: The promise returned by `add()` still rejects. You must handle each `add()` promise (for example, `.catch(() => {})`) to avoid unhandled rejections.
  
      @example
      ```
      import PQueue from 'p-queue';
  
      const queue = new PQueue({concurrency: 2});
  
      queue.add(() => fetchData(1)).catch(() => {});
      queue.add(() => fetchData(2)).catch(() => {});
      queue.add(() => fetchData(3)).catch(() => {});
  
      // Stop processing on first error
      try {
          await Promise.race([
              queue.onError(),
              queue.onIdle()
          ]);
      } catch (error) {
          queue.pause(); // Stop processing remaining tasks
          console.error('Queue failed:', error);
      }
      ```
      */
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  onError() {
    return new Promise((n, r) => {
      const o = (s) => {
        this.off("error", o), r(s);
      };
      this.on("error", o);
    });
  }
  /**
  Size of the queue, the number of queued items waiting to run.
  */
  get size() {
    return M(this, ke).size;
  }
  /**
      Size of the queue, filtered by the given options.
  
      For example, this can be used to find the number of items remaining in the queue with a specific priority level.
      */
  sizeBy(n) {
    return M(this, ke).filter(n).length;
  }
  /**
  Number of running items (no longer in the queue).
  */
  get pending() {
    return M(this, Xe);
  }
  /**
  Whether the queue is currently paused.
  */
  get isPaused() {
    return M(this, xn);
  }
  /**
  Whether the queue is currently rate-limited due to intervalCap.
  */
  get isRateLimited() {
    return M(this, $r);
  }
  /**
      Whether the queue is saturated. Returns `true` when:
      - All concurrency slots are occupied and tasks are waiting, OR
      - The queue is rate-limited and tasks are waiting
  
      Useful for detecting backpressure and potential hanging tasks.
  
      ```js
      import PQueue from 'p-queue';
  
      const queue = new PQueue({concurrency: 2});
  
      // Backpressure handling
      if (queue.isSaturated) {
          console.log('Queue is saturated, waiting for capacity...');
          await queue.onSizeLessThan(queue.concurrency);
      }
  
      // Monitoring for stuck tasks
      setInterval(() => {
          if (queue.isSaturated) {
              console.warn(`Queue saturated: ${queue.pending} running, ${queue.size} waiting`);
          }
      }, 60000);
      ```
      */
  get isSaturated() {
    return M(this, Xe) === M(this, Er) && M(this, ke).size > 0 || this.isRateLimited && M(this, ke).size > 0;
  }
  /**
      The tasks currently being executed. Each task includes its `id`, `priority`, `startTime`, and `timeout` (if set).
  
      Returns an array of task info objects.
  
      ```js
      import PQueue from 'p-queue';
  
      const queue = new PQueue({concurrency: 2});
  
      // Add tasks with IDs for better debugging
      queue.add(() => fetchUser(123), {id: 'user-123'});
      queue.add(() => fetchPosts(456), {id: 'posts-456', priority: 1});
  
      // Check what's running
      console.log(queue.runningTasks);
      // => [{
      //   id: 'user-123',
      //   priority: 0,
      //   startTime: 1759253001716,
      //   timeout: undefined
      // }, {
      //   id: 'posts-456',
      //   priority: 1,
      //   startTime: 1759253001916,
      //   timeout: undefined
      // }]
      ```
      */
  get runningTasks() {
    return [...M(this, Sr).values()].map((n) => ({ ...n }));
  }
}
io = new WeakMap(), Mt = new WeakMap(), Ut = new WeakMap(), Hn = new WeakMap(), $r = new WeakMap(), ao = new WeakMap(), nn = new WeakMap(), ps = new WeakMap(), co = new WeakMap(), rn = new WeakMap(), wn = new WeakMap(), Rt = new WeakMap(), gt = new WeakMap(), it = new WeakMap(), ke = new WeakMap(), ds = new WeakMap(), Xe = new WeakMap(), Er = new WeakMap(), xn = new WeakMap(), Gi = new WeakMap(), Sr = new WeakMap(), Q = new WeakSet(), _i = function(n) {
  for (; M(this, it) < M(this, gt).length; ) {
    const o = M(this, gt)[M(this, it)];
    if (o !== void 0 && n - o >= M(this, nn))
      ir(this, it)._++;
    else
      break;
  }
  (M(this, it) > 100 && M(this, it) > M(this, gt).length / 2 || M(this, it) === M(this, gt).length) && (ie(this, gt, M(this, gt).slice(M(this, it))), ie(this, it, 0));
}, // Helper methods for interval consumption
Dw = function(n) {
  M(this, Rt) ? M(this, gt).push(n) : ir(this, Ut)._++;
}, Iw = function() {
  M(this, Rt) ? M(this, gt).length > M(this, it) && M(this, gt).pop() : M(this, Ut) > 0 && ir(this, Ut)._--;
}, $i = function() {
  return M(this, gt).length - M(this, it);
}, kw = function() {
  return M(this, Mt) ? !0 : M(this, Rt) ? ne(this, Q, $i).call(this) < M(this, Hn) : M(this, Ut) < M(this, Hn);
}, Cw = function() {
  return M(this, Xe) < M(this, Er);
}, jw = function() {
  ir(this, Xe)._--, M(this, Xe) === 0 && this.emit("pendingZero"), ne(this, Q, Ti).call(this), this.emit("next");
}, Lw = function() {
  ie(this, wn, void 0), ne(this, Q, Bl).call(this), ne(this, Q, zl).call(this);
}, qw = function(n) {
  if (M(this, Rt)) {
    if (ne(this, Q, _i).call(this, n), ne(this, Q, $i).call(this) >= M(this, Hn)) {
      const o = M(this, gt)[M(this, it)], s = M(this, nn) - (n - o);
      return ne(this, Q, Ei).call(this, s), !0;
    }
    return !1;
  }
  if (M(this, rn) === void 0) {
    const r = M(this, ps) - n;
    if (r < 0) {
      if (M(this, co) > 0) {
        const o = n - M(this, co);
        if (o < M(this, nn))
          return ne(this, Q, Ei).call(this, M(this, nn) - o), !0;
      }
      ie(this, Ut, M(this, io) ? M(this, Xe) : 0);
    } else
      return ne(this, Q, Ei).call(this, r), !0;
  }
  return !1;
}, Ei = function(n) {
  M(this, wn) === void 0 && ie(this, wn, setTimeout(() => {
    ne(this, Q, Lw).call(this);
  }, n));
}, Si = function() {
  M(this, rn) && (clearInterval(M(this, rn)), ie(this, rn, void 0));
}, Vl = function() {
  M(this, wn) && (clearTimeout(M(this, wn)), ie(this, wn, void 0));
}, Ti = function() {
  if (M(this, ke).size === 0) {
    if (ne(this, Q, Si).call(this), this.emit("empty"), M(this, Xe) === 0) {
      if (ne(this, Q, Vl).call(this), M(this, Rt) && M(this, it) > 0) {
        const r = Date.now();
        ne(this, Q, _i).call(this, r);
      }
      this.emit("idle");
    }
    return !1;
  }
  let n = !1;
  if (!M(this, xn)) {
    const r = Date.now(), o = !ne(this, Q, qw).call(this, r);
    if (M(this, Q, kw) && M(this, Q, Cw)) {
      const s = M(this, ke).dequeue();
      M(this, Mt) || (ne(this, Q, Dw).call(this, r), ne(this, Q, Kr).call(this)), this.emit("active"), s(), o && ne(this, Q, zl).call(this), n = !0;
    }
  }
  return n;
}, zl = function() {
  M(this, Mt) || M(this, rn) !== void 0 || M(this, Rt) || (ie(this, rn, setInterval(() => {
    ne(this, Q, Bl).call(this);
  }, M(this, nn))), ie(this, ps, Date.now() + M(this, nn)));
}, Bl = function() {
  M(this, Rt) || (M(this, Ut) === 0 && M(this, Xe) === 0 && M(this, rn) && ne(this, Q, Si).call(this), ie(this, Ut, M(this, io) ? M(this, Xe) : 0)), ne(this, Q, Oi).call(this), ne(this, Q, Kr).call(this);
}, /**
Executes all queued functions until it reaches the limit.
*/
Oi = function() {
  for (; ne(this, Q, Ti).call(this); )
    ;
}, ur = async function(n, r) {
  return new Promise((o) => {
    const s = () => {
      r && !r() || (this.off(n, s), o());
    };
    this.on(n, s);
  });
}, Fw = function() {
  M(this, Mt) || (this.on("add", () => {
    M(this, ke).size > 0 && ne(this, Q, Kr).call(this);
  }), this.on("next", () => {
    ne(this, Q, Kr).call(this);
  }));
}, Kr = function() {
  M(this, Mt) || M(this, ao) || (ie(this, ao, !0), queueMicrotask(() => {
    ie(this, ao, !1), ne(this, Q, Gl).call(this);
  }));
}, Mw = function() {
  M(this, Mt) || (ne(this, Q, Iw).call(this), ne(this, Q, Kr).call(this));
}, Gl = function() {
  const n = M(this, $r);
  if (M(this, Mt) || M(this, ke).size === 0) {
    n && (ie(this, $r, !1), this.emit("rateLimitCleared"));
    return;
  }
  let r;
  if (M(this, Rt)) {
    const s = Date.now();
    ne(this, Q, _i).call(this, s), r = ne(this, Q, $i).call(this);
  } else
    r = M(this, Ut);
  const o = r >= M(this, Hn);
  o !== n && (ie(this, $r, o), this.emit(o ? "rateLimit" : "rateLimitCleared"));
};
class Gwe {
  constructor(t = 3) {
    Qt(this, "queue");
    this.queue = new Bwe({ concurrency: t });
  }
  add(t) {
    return this.queue.add(t);
  }
  get pending() {
    return this.queue.pending;
  }
  get size() {
    return this.queue.size;
  }
}
function Hwe(e) {
  return e >= 55296 && e <= 56319;
}
function Xwe(e) {
  return e >= 56320 && e <= 57343;
}
var Kwe = function(t, n, r) {
  if (typeof n != "string")
    throw new Error("Input must be string");
  for (var o = n.length, s = 0, i, a, c = 0; c < o; c += 1) {
    if (i = n.charCodeAt(c), a = n[c], Hwe(i) && Xwe(n.charCodeAt(c + 1)) && (c += 1, a += n[c]), s += t(a), s === r)
      return n.slice(0, c + 1);
    if (s > r)
      return n.slice(0, c - a.length + 1);
  }
  return n;
}, Wwe = Kwe, Jwe = Buffer.byteLength.bind(Buffer), Ywe = Wwe.bind(null, Jwe), Qwe = Ywe, Zwe = /[\/\?<>\\:\*\|"]/g, e0e = /[\x00-\x1f\x80-\x9f]/g, t0e = /^\.+$/, n0e = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i, r0e = /[\. ]+$/;
function dy(e, t) {
  if (typeof e != "string")
    throw new Error("Input must be string");
  var n = e.replace(Zwe, t).replace(e0e, t).replace(t0e, t).replace(n0e, t).replace(r0e, t);
  return Qwe(n, 255);
}
var o0e = function(e, t) {
  var n = t && t.replacement || "", r = dy(e, n);
  return n === "" ? r : dy(r, "");
};
const fy = /* @__PURE__ */ tr(o0e), Ot = {
  PARSE_FEED: "parse-feed",
  GET_FEEDS: "get-feeds",
  ADD_FEED: "add-feed",
  REMOVE_FEED: "remove-feed",
  START_DOWNLOAD: "start-download",
  DOWNLOAD_PROGRESS: "download-progress",
  CHOOSE_FOLDER: "choose-folder",
  GET_DOWNLOAD_PATH: "get-download-path",
  SET_DOWNLOAD_PATH: "set-download-path",
  GET_DOWNLOADED_EPISODES: "get-downloaded-episodes"
}, s0e = new pZ(), Zt = new Hfe(), i0e = new qwe(), a0e = new Gwe(3);
function c0e(e) {
  mn.handle(Ot.PARSE_FEED, async (t, n) => await s0e.parseFeed(n)), mn.handle(Ot.GET_FEEDS, async () => Zt.getFeeds()), mn.handle(Ot.ADD_FEED, async (t, n) => (Zt.addFeed(n), Zt.getFeeds())), mn.handle(Ot.REMOVE_FEED, async (t, n) => (Zt.removeFeed(n), Zt.getFeeds())), mn.handle(Ot.GET_DOWNLOADED_EPISODES, async () => Zt.getDownloadedEpisodes()), mn.handle(Ot.START_DOWNLOAD, async (t, { url: n, title: r, podcastTitle: o, guid: s }) => {
    let i = Zt.getDownloadPath();
    i || (i = Ye.join(lo.getPath("documents"), "FeedDownloader", "downloads"));
    const a = fy(o), c = fy(r), p = Ye.join(i, a), l = Ye.join(p, `${c}.mp3`);
    return await Rw.ensureDir(p), a0e.add(async () => {
      try {
        await i0e.downloadFile(n, l, (u, d) => {
          e && !e.isDestroyed() && e.webContents.send(Ot.DOWNLOAD_PROGRESS, {
            url: n,
            loaded: u,
            total: d
          });
        }), s && Zt.markAsDownloaded(s), e && !e.isDestroyed() && e.webContents.send(Ot.DOWNLOAD_PROGRESS, {
          url: n,
          loaded: 100,
          total: 100,
          completed: !0
        });
      } catch (u) {
        console.error("Download error:", u), e && !e.isDestroyed() && e.webContents.send(Ot.DOWNLOAD_PROGRESS, {
          url: n,
          error: !0
        });
      }
    }), { status: "queued" };
  }), mn.handle(Ot.CHOOSE_FOLDER, async () => {
    const t = await Hw.showOpenDialog(e, {
      properties: ["openDirectory"]
    });
    return t.canceled ? null : t.filePaths[0];
  }), mn.handle(Ot.GET_DOWNLOAD_PATH, async () => Zt.getDownloadPath()), mn.handle(Ot.SET_DOWNLOAD_PATH, async (t, n) => (Zt.setDownloadPath(n), !0));
}
const Uw = de.dirname(Xw(import.meta.url));
process.env.APP_ROOT = de.join(Uw, "..");
const Hl = process.env.VITE_DEV_SERVER_URL, axe = de.join(process.env.APP_ROOT, "dist-electron"), Vw = de.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = Hl ? de.join(process.env.APP_ROOT, "public") : Vw;
let Be;
const my = de.join(process.env.VITE_PUBLIC, "logo.png");
process.platform === "win32" && lo.setAppUserModelId("com.runtime.feeddownloader.pro");
function zw() {
  Be = new yy({
    title: "Runtime FeedDownloader Pro",
    icon: my,
    backgroundColor: "#0b1120",
    // Matches Tailwind bg-background (approx)
    show: !1,
    autoHideMenuBar: !0,
    ...process.platform === "linux" ? { icon: my } : {},
    webPreferences: {
      preload: de.join(Uw, "preload.mjs")
    }
  }), Be.webContents.session.setPermissionRequestHandler((e, t, n) => (console.log(`Blocked permission request: ${t}`), n(!1))), c0e(Be), Be.webContents.on("did-finish-load", () => {
    Be == null || Be.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), Be.once("ready-to-show", () => {
    Be == null || Be.maximize(), Be == null || Be.show();
  }), Hl ? Be.loadURL(Hl) : Be.loadFile(de.join(Vw, "index.html"));
}
lo.on("window-all-closed", () => {
  process.platform !== "darwin" && (lo.quit(), Be = null);
});
lo.on("activate", () => {
  yy.getAllWindows().length === 0 && zw();
});
lo.whenReady().then(zw);
export {
  axe as MAIN_DIST,
  Vw as RENDERER_DIST,
  Hl as VITE_DEV_SERVER_URL
};
