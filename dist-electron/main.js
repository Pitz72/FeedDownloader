var Kw = Object.defineProperty;
var qd = (e) => {
  throw TypeError(e);
};
var Ww = (e, t, n) => t in e ? Kw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var tn = (e, t, n) => Ww(e, typeof t != "symbol" ? t + "" : t, n), Aa = (e, t, n) => t.has(e) || qd("Cannot " + n);
var M = (e, t, n) => (Aa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ge = (e, t, n) => t.has(e) ? qd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ie = (e, t, n, r) => (Aa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ne = (e, t, n) => (Aa(e, t, "access private method"), n);
var ar = (e, t, n, r) => ({
  set _(o) {
    ie(e, t, o, n);
  },
  get _() {
    return M(e, t, r);
  }
});
import wy, { ipcMain as Tt, app as Bt, dialog as Jw, BrowserWindow as xy } from "electron";
import { fileURLToPath as Yw } from "node:url";
import de from "node:path";
import Xi from "http";
import Ki from "https";
import Qw, { EventEmitter as Zw } from "events";
import e0 from "timers";
import ms from "url";
import Se from "node:process";
import { promisify as Ze, isDeepStrictEqual as Fd } from "node:util";
import ae from "node:fs";
import Co from "node:crypto";
import Md from "node:assert";
import _y from "node:os";
import "node:events";
import "node:stream";
import tr from "util";
import lt, { Readable as t0 } from "stream";
import Pe from "path";
import Wl from "fs";
import $y from "crypto";
import Ey from "http2";
import Sy from "assert";
import Ty from "tty";
import n0 from "os";
import Yn from "zlib";
import r0 from "constants";
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wn = {}, Da = {}, Ud;
function Jl() {
  return Ud || (Ud = 1, (function() {
    Da.defaults = {
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
  }).call(re)), Da;
}
var Ia = {}, yn = {}, gn = {}, Vd;
function Dn() {
  return Vd || (Vd = 1, (function() {
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
    }, gn.assign = e, gn.isFunction = o, gn.isObject = s, gn.isArray = n, gn.isEmpty = r, gn.isPlainObject = i, gn.getValue = t;
  }).call(re)), gn;
}
var ka = { exports: {} }, zd;
function Py() {
  return zd || (zd = 1, (function() {
    ka.exports = function() {
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
  }).call(re)), ka.exports;
}
var Ca = { exports: {} }, ja = { exports: {} }, La = { exports: {} }, Bd;
function o0() {
  return Bd || (Bd = 1, (function() {
    La.exports = function() {
      function e() {
      }
      return e.prototype.handleError = function(t) {
        throw new Error(t);
      }, e;
    }();
  }).call(re)), La.exports;
}
var qa = { exports: {} }, Gd;
function s0() {
  return Gd || (Gd = 1, (function() {
    qa.exports = function() {
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
  }).call(re)), qa.exports;
}
var Hd;
function i0() {
  return Hd || (Hd = 1, (function() {
    var e, t;
    e = o0(), t = s0(), ja.exports = function() {
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
  }).call(re)), ja.exports;
}
var Fa = { exports: {} }, Ma = { exports: {} }, Ua = { exports: {} }, Xd;
function je() {
  return Xd || (Xd = 1, (function() {
    Ua.exports = {
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
  }).call(re)), Ua.exports;
}
var Va = { exports: {} }, Kd;
function Oy() {
  return Kd || (Kd = 1, (function() {
    var e;
    e = je(), kt(), Va.exports = function() {
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
  }).call(re)), Va.exports;
}
var za = { exports: {} }, Wd;
function Yl() {
  return Wd || (Wd = 1, (function() {
    za.exports = function() {
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
  }).call(re)), za.exports;
}
var Jd;
function Ql() {
  return Jd || (Jd = 1, (function() {
    var e, t, n, r, o, s, i, a, c = function(l, u) {
      for (var d in u)
        p.call(u, d) && (l[d] = u[d]);
      function m() {
        this.constructor = l;
      }
      return m.prototype = u.prototype, l.prototype = new m(), l.__super__ = u.prototype, l;
    }, p = {}.hasOwnProperty;
    a = Dn(), i = a.isObject, s = a.isFunction, o = a.getValue, r = kt(), e = je(), t = Oy(), n = Yl(), Ma.exports = function(l) {
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
  }).call(re)), Ma.exports;
}
var Ba = { exports: {} }, Ga = { exports: {} }, Yd;
function Wi() {
  return Yd || (Yd = 1, (function() {
    var e, t = function(r, o) {
      for (var s in o)
        n.call(o, s) && (r[s] = o[s]);
      function i() {
        this.constructor = r;
      }
      return i.prototype = o.prototype, r.prototype = new i(), r.__super__ = o.prototype, r;
    }, n = {}.hasOwnProperty;
    e = kt(), Ga.exports = function(r) {
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
  }).call(re)), Ga.exports;
}
var Qd;
function Zl() {
  return Qd || (Qd = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    e = je(), t = Wi(), Ba.exports = function(o) {
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
  }).call(re)), Ba.exports;
}
var Ha = { exports: {} }, Zd;
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
    e = je(), t = Wi(), Ha.exports = function(o) {
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
  }).call(re)), Ha.exports;
}
var Xa = { exports: {} }, ef;
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
    n = Dn().isObject, t = kt(), e = je(), Xa.exports = function(s) {
      r(i, s);
      function i(a, c, p, l) {
        var u;
        i.__super__.constructor.call(this, a), n(c) && (u = c, c = u.version, p = u.encoding, l = u.standalone), c || (c = "1.0"), this.type = e.Declaration, this.version = this.stringify.xmlVersion(c), p != null && (this.encoding = this.stringify.xmlEncoding(p)), l != null && (this.standalone = this.stringify.xmlStandalone(l));
      }
      return i.prototype.toString = function(a) {
        return this.options.writer.declaration(this, this.options.writer.filterOptions(a));
      }, i;
    }(t);
  }).call(re)), Xa.exports;
}
var Ka = { exports: {} }, Wa = { exports: {} }, tf;
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
    t = kt(), e = je(), Wa.exports = function(o) {
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
  }).call(re)), Wa.exports;
}
var Ja = { exports: {} }, nf;
function ru() {
  return nf || (nf = 1, (function() {
    var e, t, n, r = function(s, i) {
      for (var a in i)
        o.call(i, a) && (s[a] = i[a]);
      function c() {
        this.constructor = s;
      }
      return c.prototype = i.prototype, s.prototype = new c(), s.__super__ = i.prototype, s;
    }, o = {}.hasOwnProperty;
    n = Dn().isObject, t = kt(), e = je(), Ja.exports = function(s) {
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
  }).call(re)), Ja.exports;
}
var Ya = { exports: {} }, rf;
function ou() {
  return rf || (rf = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    t = kt(), e = je(), Ya.exports = function(o) {
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
  }).call(re)), Ya.exports;
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
    t = kt(), e = je(), Qa.exports = function(o) {
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
  }).call(re)), Qa.exports;
}
var sf;
function iu() {
  return sf || (sf = 1, (function() {
    var e, t, n, r, o, s, i, a, c = function(l, u) {
      for (var d in u)
        p.call(u, d) && (l[d] = u[d]);
      function m() {
        this.constructor = l;
      }
      return m.prototype = u.prototype, l.prototype = new m(), l.__super__ = u.prototype, l;
    }, p = {}.hasOwnProperty;
    a = Dn().isObject, i = kt(), e = je(), t = nu(), r = ru(), n = ou(), o = su(), s = Yl(), Ka.exports = function(l) {
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
  }).call(re)), Ka.exports;
}
var Za = { exports: {} }, af;
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
    e = je(), t = kt(), Za.exports = function(o) {
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
  }).call(re)), Za.exports;
}
var ec = { exports: {} }, cf;
function cu() {
  return cf || (cf = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    e = je(), t = Wi(), ec.exports = function(o) {
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
  }).call(re)), ec.exports;
}
var tc = { exports: {} }, lf;
function lu() {
  return lf || (lf = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    e = je(), t = Wi(), tc.exports = function(o) {
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
  }).call(re)), tc.exports;
}
var nc = { exports: {} }, uf;
function Ny() {
  return uf || (uf = 1, (function() {
    var e, t, n = function(o, s) {
      for (var i in s)
        r.call(s, i) && (o[i] = s[i]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = s.prototype, o.prototype = new a(), o.__super__ = s.prototype, o;
    }, r = {}.hasOwnProperty;
    t = kt(), e = je(), nc.exports = function(o) {
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
  }).call(re)), nc.exports;
}
var rc = { exports: {} }, pf;
function a0() {
  return pf || (pf = 1, (function() {
    rc.exports = function() {
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
  }).call(re)), rc.exports;
}
var oc = { exports: {} }, df;
function c0() {
  return df || (df = 1, (function() {
    oc.exports = {
      Disconnected: 1,
      Preceding: 2,
      Following: 4,
      Contains: 8,
      ContainedBy: 16,
      ImplementationSpecific: 32
    };
  }).call(re)), oc.exports;
}
var ff;
function kt() {
  return ff || (ff = 1, (function() {
    var e, t, n, r, o, s, i, a, c, p, l, u, d, m, f, g, y, v = {}.hasOwnProperty;
    y = Dn(), g = y.isObject, f = y.isFunction, m = y.isEmpty, d = y.getValue, a = null, n = null, r = null, o = null, s = null, l = null, u = null, p = null, i = null, t = null, c = null, e = null, Fa.exports = function() {
      function b(w) {
        this.parent = w, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.value = null, this.children = [], this.baseURI = null, a || (a = Ql(), n = Zl(), r = eu(), o = tu(), s = iu(), l = au(), u = cu(), p = lu(), i = Ny(), t = je(), c = a0(), Yl(), e = c0());
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
          var w, T, O, C, B;
          if (this.nodeType === t.Element || this.nodeType === t.DocumentFragment) {
            for (B = "", C = this.children, T = 0, O = C.length; T < O; T++)
              w = C[T], w.textContent && (B += w.textContent);
            return B;
          } else
            return null;
        },
        set: function(w) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), b.prototype.setParent = function(w) {
        var T, O, C, B, k;
        for (this.parent = w, w && (this.options = w.options, this.stringify = w.stringify), B = this.children, k = [], O = 0, C = B.length; O < C; O++)
          T = B[O], k.push(T.setParent(this));
        return k;
      }, b.prototype.element = function(w, T, O) {
        var C, B, k, E, q, I, z, H, F, U, G;
        if (I = null, T === null && O == null && (F = [{}, null], T = F[0], O = F[1]), T == null && (T = {}), T = d(T), g(T) || (U = [T, O], O = U[0], T = U[1]), w != null && (w = d(w)), Array.isArray(w))
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
        } else !this.options.keepNullNodes && O === null ? I = this.dummy() : !this.options.ignoreDecorators && this.stringify.convertTextKey && w.indexOf(this.stringify.convertTextKey) === 0 ? I = this.text(O) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && w.indexOf(this.stringify.convertCDataKey) === 0 ? I = this.cdata(O) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && w.indexOf(this.stringify.convertCommentKey) === 0 ? I = this.comment(O) : !this.options.ignoreDecorators && this.stringify.convertRawKey && w.indexOf(this.stringify.convertRawKey) === 0 ? I = this.raw(O) : !this.options.ignoreDecorators && this.stringify.convertPIKey && w.indexOf(this.stringify.convertPIKey) === 0 ? I = this.instruction(w.substr(this.stringify.convertPIKey.length), O) : I = this.node(w, T, O);
        if (I == null)
          throw new Error("Could not create any elements with: " + w + ". " + this.debugInfo());
        return I;
      }, b.prototype.insertBefore = function(w, T, O) {
        var C, B, k, E, q;
        if (w != null && w.type)
          return k = w, E = T, k.setParent(this), E ? (B = children.indexOf(E), q = children.splice(B), children.push(k), Array.prototype.push.apply(children, q)) : children.push(k), k;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(w));
        return B = this.parent.children.indexOf(this), q = this.parent.children.splice(B), C = this.parent.element(w, T, O), Array.prototype.push.apply(this.parent.children, q), C;
      }, b.prototype.insertAfter = function(w, T, O) {
        var C, B, k;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(w));
        return B = this.parent.children.indexOf(this), k = this.parent.children.splice(B + 1), C = this.parent.element(w, T, O), Array.prototype.push.apply(this.parent.children, k), C;
      }, b.prototype.remove = function() {
        var w;
        if (this.isRoot)
          throw new Error("Cannot remove the root element. " + this.debugInfo());
        return w = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [w, w - w + 1].concat([])), this.parent;
      }, b.prototype.node = function(w, T, O) {
        var C, B;
        return w != null && (w = d(w)), T || (T = {}), T = d(T), g(T) || (B = [T, O], O = B[0], T = B[1]), C = new a(this, w, T), O != null && C.text(O), this.children.push(C), C;
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
        var T, O;
        return T = this.parent.children.indexOf(this), O = this.parent.children.splice(T), this.parent.comment(w), Array.prototype.push.apply(this.parent.children, O), this;
      }, b.prototype.commentAfter = function(w) {
        var T, O;
        return T = this.parent.children.indexOf(this), O = this.parent.children.splice(T + 1), this.parent.comment(w), Array.prototype.push.apply(this.parent.children, O), this;
      }, b.prototype.raw = function(w) {
        var T;
        return T = new l(this, w), this.children.push(T), this;
      }, b.prototype.dummy = function() {
        var w;
        return w = new i(this), w;
      }, b.prototype.instruction = function(w, T) {
        var O, C, B, k, E;
        if (w != null && (w = d(w)), T != null && (T = d(T)), Array.isArray(w))
          for (k = 0, E = w.length; k < E; k++)
            O = w[k], this.instruction(O);
        else if (g(w))
          for (O in w)
            v.call(w, O) && (C = w[O], this.instruction(O, C));
        else
          f(T) && (T = T.apply()), B = new p(this, w, T), this.children.push(B);
        return this;
      }, b.prototype.instructionBefore = function(w, T) {
        var O, C;
        return O = this.parent.children.indexOf(this), C = this.parent.children.splice(O), this.parent.instruction(w, T), Array.prototype.push.apply(this.parent.children, C), this;
      }, b.prototype.instructionAfter = function(w, T) {
        var O, C;
        return O = this.parent.children.indexOf(this), C = this.parent.children.splice(O + 1), this.parent.instruction(w, T), Array.prototype.push.apply(this.parent.children, C), this;
      }, b.prototype.declaration = function(w, T, O) {
        var C, B;
        return C = this.document(), B = new o(C, w, T, O), C.children.length === 0 ? C.children.unshift(B) : C.children[0].type === t.Declaration ? C.children[0] = B : C.children.unshift(B), C.root() || C;
      }, b.prototype.dtd = function(w, T) {
        var O, C, B, k, E, q, I, z, H, F;
        for (C = this.document(), B = new s(C, w, T), H = C.children, k = E = 0, I = H.length; E < I; k = ++E)
          if (O = H[k], O.type === t.DocType)
            return C.children[k] = B, B;
        for (F = C.children, k = q = 0, z = F.length; q < z; k = ++q)
          if (O = F[k], O.isRoot)
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
        var T, O;
        return w = w || this.name, w == null && !((T = this.parent) != null && T.name) ? "" : w == null ? "parent: <" + this.parent.name + ">" : (O = this.parent) != null && O.name ? "node: <" + w + ">, parent: <" + this.parent.name + ">" : "node: <" + w + ">";
      }, b.prototype.ele = function(w, T, O) {
        return this.element(w, T, O);
      }, b.prototype.nod = function(w, T, O) {
        return this.node(w, T, O);
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
      }, b.prototype.dec = function(w, T, O) {
        return this.declaration(w, T, O);
      }, b.prototype.e = function(w, T, O) {
        return this.element(w, T, O);
      }, b.prototype.n = function(w, T, O) {
        return this.node(w, T, O);
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
        var T, O;
        return T = this, T === w ? 0 : this.document() !== w.document() ? (O = e.Disconnected | e.ImplementationSpecific, Math.random() < 0.5 ? O |= e.Preceding : O |= e.Following, O) : T.isAncestor(w) ? e.Contains | e.Preceding : T.isDescendant(w) ? e.Contains | e.Following : T.isPreceding(w) ? e.Preceding : e.Following;
      }, b.prototype.isSameNode = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.lookupPrefix = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.isDefaultNamespace = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.lookupNamespaceURI = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.isEqualNode = function(w) {
        var T, O, C;
        if (w.nodeType !== this.nodeType || w.children.length !== this.children.length)
          return !1;
        for (T = O = 0, C = this.children.length - 1; 0 <= C ? O <= C : O >= C; T = 0 <= C ? ++O : --O)
          if (!this.children[T].isEqualNode(w.children[T]))
            return !1;
        return !0;
      }, b.prototype.getFeature = function(w, T) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.setUserData = function(w, T, O) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.getUserData = function(w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, b.prototype.contains = function(w) {
        return w ? w === this || this.isDescendant(w) : !1;
      }, b.prototype.isDescendant = function(w) {
        var T, O, C, B, k;
        for (k = this.children, C = 0, B = k.length; C < B; C++)
          if (T = k[C], w === T || (O = T.isDescendant(w), O))
            return !0;
        return !1;
      }, b.prototype.isAncestor = function(w) {
        return w.isDescendant(this);
      }, b.prototype.isPreceding = function(w) {
        var T, O;
        return T = this.treePosition(w), O = this.treePosition(this), T === -1 || O === -1 ? !1 : T < O;
      }, b.prototype.isFollowing = function(w) {
        var T, O;
        return T = this.treePosition(w), O = this.treePosition(this), T === -1 || O === -1 ? !1 : T > O;
      }, b.prototype.treePosition = function(w) {
        var T, O;
        return O = 0, T = !1, this.foreachTreeNode(this.document(), function(C) {
          if (O++, !T && C === w)
            return T = !0;
        }), T ? O : -1;
      }, b.prototype.foreachTreeNode = function(w, T) {
        var O, C, B, k, E;
        for (w || (w = this.document()), k = w.children, C = 0, B = k.length; C < B; C++) {
          if (O = k[C], E = T(O))
            return E;
          if (E = this.foreachTreeNode(O, T), E)
            return E;
        }
      }, b;
    }();
  }).call(re)), Fa.exports;
}
var sc = { exports: {} }, mf;
function Ry() {
  return mf || (mf = 1, (function() {
    var e = function(n, r) {
      return function() {
        return n.apply(r, arguments);
      };
    }, t = {}.hasOwnProperty;
    sc.exports = function() {
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
  }).call(re)), sc.exports;
}
var ic = { exports: {} }, ac = { exports: {} }, cc = { exports: {} }, hf;
function Ji() {
  return hf || (hf = 1, (function() {
    cc.exports = {
      None: 0,
      OpenTag: 1,
      InsideTag: 2,
      CloseTag: 3
    };
  }).call(re)), cc.exports;
}
var yf;
function Ay() {
  return yf || (yf = 1, (function() {
    var e, t, n, r = {}.hasOwnProperty;
    n = Dn().assign, e = je(), tu(), iu(), Zl(), eu(), Ql(), au(), cu(), lu(), Ny(), nu(), ou(), ru(), su(), t = Ji(), ac.exports = function() {
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
        var c, p, l, u, d, m, f, g, y, v, b, w, T, O;
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
          for (b += ">" + this.endline(s, i, a), i.state = t.InsideTag, O = s.children, m = 0, g = O.length; m < g; m++)
            p = O[m], b += this.writeChildNode(p, i, a + 1);
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
  }).call(re)), ac.exports;
}
var gf;
function uu() {
  return gf || (gf = 1, (function() {
    var e, t = function(r, o) {
      for (var s in o)
        n.call(o, s) && (r[s] = o[s]);
      function i() {
        this.constructor = r;
      }
      return i.prototype = o.prototype, r.prototype = new i(), r.__super__ = o.prototype, r;
    }, n = {}.hasOwnProperty;
    e = Ay(), ic.exports = function(r) {
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
  }).call(re)), ic.exports;
}
var vf;
function Dy() {
  return vf || (vf = 1, (function() {
    var e, t, n, r, o, s, i, a = function(p, l) {
      for (var u in l)
        c.call(l, u) && (p[u] = l[u]);
      function d() {
        this.constructor = p;
      }
      return d.prototype = l.prototype, p.prototype = new d(), p.__super__ = l.prototype, p;
    }, c = {}.hasOwnProperty;
    i = Dn().isPlainObject, n = Py(), t = i0(), r = kt(), e = je(), s = Ry(), o = uu(), Ca.exports = function(p) {
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
  }).call(re)), Ca.exports;
}
var lc = { exports: {} }, bf;
function l0() {
  return bf || (bf = 1, (function() {
    var e, t, n, r, o, s, i, a, c, p, l, u, d, m, f, g, y, v, b, w, T, O, C, B = {}.hasOwnProperty;
    C = Dn(), T = C.isObject, w = C.isFunction, O = C.isPlainObject, b = C.getValue, e = je(), u = Dy(), d = Ql(), r = Zl(), o = eu(), f = au(), v = cu(), m = lu(), p = tu(), l = iu(), s = nu(), a = ru(), i = ou(), c = su(), n = Oy(), y = Ry(), g = uu(), t = Ji(), lc.exports = function() {
      function k(E, q, I) {
        var z;
        this.name = "?xml", this.type = e.Document, E || (E = {}), z = {}, E.writer ? O(E.writer) && (z = E.writer, E.writer = new g()) : E.writer = new g(), this.options = E, this.writer = E.writer, this.writerOptions = this.writer.filterOptions(z), this.stringify = new y(E), this.onDataCallback = q || function() {
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
  }).call(re)), lc.exports;
}
var uc = { exports: {} }, wf;
function u0() {
  return wf || (wf = 1, (function() {
    var e, t, n, r = function(s, i) {
      for (var a in i)
        o.call(i, a) && (s[a] = i[a]);
      function c() {
        this.constructor = s;
      }
      return c.prototype = i.prototype, s.prototype = new c(), s.__super__ = i.prototype, s;
    }, o = {}.hasOwnProperty;
    e = je(), n = Ay(), t = Ji(), uc.exports = function(s) {
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
  }).call(re)), uc.exports;
}
var xf;
function p0() {
  return xf || (xf = 1, (function() {
    var e, t, n, r, o, s, i, a, c, p;
    p = Dn(), a = p.assign, c = p.isFunction, n = Py(), r = Dy(), o = l0(), i = uu(), s = u0(), e = je(), t = Ji(), yn.create = function(l, u, d, m) {
      var f, g;
      if (l == null)
        throw new Error("Root element needs a name.");
      return m = a({}, u, d, m), f = new r(m), g = f.element(l), m.headless || (f.declaration(m), (m.pubID != null || m.sysID != null) && f.dtd(m)), g;
    }, yn.begin = function(l, u, d) {
      var m;
      return c(l) && (m = [l, u], u = m[0], d = m[1], l = {}), u ? new o(l, u, d) : new r(l);
    }, yn.stringWriter = function(l) {
      return new i(l);
    }, yn.streamWriter = function(l, u) {
      return new s(l, u);
    }, yn.implementation = new n(), yn.nodeType = e, yn.writerState = t;
  }).call(re)), yn;
}
var _f;
function d0() {
  return _f || (_f = 1, (function() {
    var e, t, n, r, o, s = {}.hasOwnProperty;
    e = p0(), t = Jl().defaults, r = function(i) {
      return typeof i == "string" && (i.indexOf("&") >= 0 || i.indexOf(">") >= 0 || i.indexOf("<") >= 0);
    }, o = function(i) {
      return "<![CDATA[" + n(i) + "]]>";
    }, n = function(i) {
      return i.replace("]]>", "]]]]><![CDATA[>");
    }, Ia.Builder = function() {
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
            var y, v, b, w, T, O;
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
                        O = v[y], f = f.att(y, O);
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
  }).call(re)), Ia;
}
var pc = {}, dc = {}, $f;
function f0() {
  return $f || ($f = 1, function(e) {
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
      function O($) {
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
          j.ns && Z.ns !== j.ns && Object.keys(j.ns).forEach(function(en) {
            z($, "onopennamespace", {
              prefix: en,
              uri: j.ns[en]
            });
          });
          for (var ye = 0, be = $.attribList.length; ye < be; ye++) {
            var Oe = $.attribList[ye], Ne = Oe[0], ht = Oe[1], _e = X(Ne, !0), ze = _e.prefix, hn = _e.local, Zt = ze === "" ? "" : j.ns[ze] || "", Ct = {
              name: Ne,
              value: ht,
              prefix: ze,
              local: hn,
              uri: Zt
            };
            ze && ze !== "xmlns" && !Zt && (V(
              $,
              "Unbound namespace prefix: " + JSON.stringify(ze)
            ), Ct.uri = ze), $.tag.attributes[Ne] = Ct, z($, "onattribute", Ct);
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
          for (var Ne in be.ns)
            Oe[Ne] = be.ns[Ne];
          var ht = $.tags[$.tags.length - 1] || $;
          $.opt.xmlns && be.ns !== ht.ns && Object.keys(be.ns).forEach(function(_e) {
            var ze = be.ns[_e];
            z($, "onclosenamespace", { prefix: _e, uri: ze });
          });
        }
        x === 0 && ($.closedRoot = !0), $.tagName = $.attribValue = $.attribName = "", $.attribList.length = 0, $.state = E.TEXT;
      }
      function P($) {
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
              ), x.doctype = "", x.sgmlDecl = "") : R === ">" ? (z(x, "onsgmldeclaration", x.sgmlDecl), x.sgmlDecl = "", x.state = E.TEXT) : (O(R) && (x.state = E.SGML_DECL_QUOTED), x.sgmlDecl += R);
              continue;
            case E.SGML_DECL_QUOTED:
              R === x.q && (x.state = E.SGML_DECL, x.q = ""), x.sgmlDecl += R;
              continue;
            case E.DOCTYPE:
              R === ">" ? (x.state = E.TEXT, z(x, "ondoctype", x.doctype), x.doctype = !0) : (x.doctype += R, R === "[" ? x.state = E.DOCTYPE_DTD : O(R) && (x.state = E.DOCTYPE_QUOTED, x.q = R));
              continue;
            case E.DOCTYPE_QUOTED:
              x.doctype += R, R === x.q && (x.q = "", x.state = E.DOCTYPE);
              continue;
            case E.DOCTYPE_DTD:
              R === "]" ? (x.doctype += R, x.state = E.DOCTYPE) : R === "<" ? (x.state = E.OPEN_WAKA, x.startTagPosition = x.position) : O(R) ? (x.doctype += R, x.state = E.DOCTYPE_DTD_QUOTED, x.q = R) : x.doctype += R;
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
              O(R) ? (x.q = R, x.state = E.ATTRIB_VALUE_QUOTED) : (x.opt.unquotedAttributeValues || U(x, "Unquoted attribute value"), x.state = E.ATTRIB_VALUE_UNQUOTED, x.attribValue = R);
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
                var Ne = P(x);
                x.opt.unparsedEntities && !Object.values(t.XML_ENTITIES).includes(Ne) ? (x.entity = "", x.state = be, x.write(Ne)) : (x[Oe] += Ne, x.entity = "", x.state = be);
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
          var R = 16384, Z = [], ye, be, Oe = -1, Ne = arguments.length;
          if (!Ne)
            return "";
          for (var ht = ""; ++Oe < Ne; ) {
            var _e = Number(arguments[Oe]);
            if (!isFinite(_e) || // `NaN`, `+Infinity`, or `-Infinity`
            _e < 0 || // not a valid Unicode code point
            _e > 1114111 || // not a valid Unicode code point
            x(_e) !== _e)
              throw RangeError("Invalid code point: " + _e);
            _e <= 65535 ? Z.push(_e) : (_e -= 65536, ye = (_e >> 10) + 55296, be = _e % 1024 + 56320, Z.push(ye, be)), (Oe + 1 === Ne || Z.length > R) && (ht += $.apply(null, Z), Z.length = 0);
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
  }(dc)), dc;
}
var fc = {}, Ef;
function m0() {
  return Ef || (Ef = 1, (function() {
    fc.stripBOM = function(e) {
      return e[0] === "\uFEFF" ? e.substring(1) : e;
    };
  }).call(re)), fc;
}
var cr = {}, Sf;
function Iy() {
  return Sf || (Sf = 1, (function() {
    var e;
    e = new RegExp(/(?!xmlns)^.*:/), cr.normalize = function(t) {
      return t.toLowerCase();
    }, cr.firstCharLowerCase = function(t) {
      return t.charAt(0).toLowerCase() + t.slice(1);
    }, cr.stripPrefix = function(t) {
      return t.replace(e, "");
    }, cr.parseNumbers = function(t) {
      return isNaN(t) || (t = t % 1 === 0 ? parseInt(t, 10) : parseFloat(t)), t;
    }, cr.parseBooleans = function(t) {
      return /^(?:true|false)$/i.test(t) && (t = t.toLowerCase() === "true"), t;
    };
  }).call(re)), cr;
}
var Tf;
function h0() {
  return Tf || (Tf = 1, function(e) {
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
      a = f0(), r = Qw, t = m0(), i = Iy(), c = e0.setImmediate, n = Jl().defaults, o = function(d) {
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
              var T, O, C, B, k;
              if (C = /* @__PURE__ */ Object.create(null), C[g] = "", !b.options.ignoreAttrs) {
                k = w.attributes;
                for (T in k)
                  u.call(k, T) && (!(f in C) && !b.options.mergeAttrs && (C[f] = /* @__PURE__ */ Object.create(null)), O = b.options.attrValueProcessors ? s(b.options.attrValueProcessors, w.attributes[T], T) : w.attributes[T], B = b.options.attrNameProcessors ? s(b.options.attrNameProcessors, T) : T, b.options.mergeAttrs ? b.assignOrPush(C, B, O) : C[f][B] = O);
              }
              return C["#name"] = b.options.tagNameProcessors ? s(b.options.tagNameProcessors, w.name) : w.name, b.options.xmlns && (C[b.options.xmlnskey] = {
                uri: w.uri,
                local: w.local
              }), v.push(C);
            };
          }(this), this.saxParser.onclosetag = /* @__PURE__ */ function(b) {
            return function() {
              var w, T, O, C, B, k, E, q, I, z;
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
                  for (O in k)
                    u.call(k, O) && (E[O] = k[O]);
                  I[b.options.childkey].push(E), delete k["#name"], Object.keys(k).length === 1 && g in k && !b.EXPLICIT_CHARKEY && (k = k[g]);
                }
              }
              return v.length > 0 ? b.assignOrPush(I, B, k) : (b.options.explicitRoot && (q = k, k = /* @__PURE__ */ Object.create(null), k[B] = q), b.resultObject = k, b.saxParser.ended = !0, b.emit("end", b.resultObject));
            };
          }(this), y = /* @__PURE__ */ function(b) {
            return function(w) {
              var T, O;
              if (O = v[v.length - 1], O)
                return O[g] += w, b.options.explicitChildren && b.options.preserveChildrenOrder && b.options.charsAsChildren && (b.options.includeWhiteChars || w.replace(/\\n/g, "").trim() !== "") && (O[b.options.childkey] = O[b.options.childkey] || [], T = {
                  "#name": "__text__"
                }, T[g] = w, b.options.normalize && (T[g] = T[g].replace(/\s{2,}/g, " ").trim()), O[b.options.childkey].push(T)), O;
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
  }(pc)), pc;
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
  t = Jl(), e = d0(), n = h0(), r = Iy(), wn.defaults = t.defaults, wn.processors = r, wn.ValidationError = function(i) {
    o(a, i);
    function a(c) {
      this.message = c;
    }
    return a;
  }(Error), wn.Builder = e.Builder, wn.Parser = n.Parser, wn.parseString = n.parseString, wn.parseStringPromise = n.parseStringPromise;
}).call(re);
var ky = { exports: {} };
const Yi = ky.exports = {};
Yi.feed = [
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
Yi.item = [
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
var Cy = function(e) {
  return ["itunes:" + e, e];
};
Yi.podcastFeed = [
  "author",
  "subtitle",
  "summary",
  "explicit"
].map(Cy);
Yi.podcastItem = [
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
].map(Cy);
var y0 = ky.exports, jy = { exports: {} }, Ly = {}, En = {};
const g0 = "Á", v0 = "á", b0 = "Ă", w0 = "ă", x0 = "∾", _0 = "∿", $0 = "∾̳", E0 = "Â", S0 = "â", T0 = "´", P0 = "А", O0 = "а", N0 = "Æ", R0 = "æ", A0 = "⁡", D0 = "𝔄", I0 = "𝔞", k0 = "À", C0 = "à", j0 = "ℵ", L0 = "ℵ", q0 = "Α", F0 = "α", M0 = "Ā", U0 = "ā", V0 = "⨿", z0 = "&", B0 = "&", G0 = "⩕", H0 = "⩓", X0 = "∧", K0 = "⩜", W0 = "⩘", J0 = "⩚", Y0 = "∠", Q0 = "⦤", Z0 = "∠", ex = "⦨", tx = "⦩", nx = "⦪", rx = "⦫", ox = "⦬", sx = "⦭", ix = "⦮", ax = "⦯", cx = "∡", lx = "∟", ux = "⊾", px = "⦝", dx = "∢", fx = "Å", mx = "⍼", hx = "Ą", yx = "ą", gx = "𝔸", vx = "𝕒", bx = "⩯", wx = "≈", xx = "⩰", _x = "≊", $x = "≋", Ex = "'", Sx = "⁡", Tx = "≈", Px = "≊", Ox = "Å", Nx = "å", Rx = "𝒜", Ax = "𝒶", Dx = "≔", Ix = "*", kx = "≈", Cx = "≍", jx = "Ã", Lx = "ã", qx = "Ä", Fx = "ä", Mx = "∳", Ux = "⨑", Vx = "≌", zx = "϶", Bx = "‵", Gx = "∽", Hx = "⋍", Xx = "∖", Kx = "⫧", Wx = "⊽", Jx = "⌅", Yx = "⌆", Qx = "⌅", Zx = "⎵", e_ = "⎶", t_ = "≌", n_ = "Б", r_ = "б", o_ = "„", s_ = "∵", i_ = "∵", a_ = "∵", c_ = "⦰", l_ = "϶", u_ = "ℬ", p_ = "ℬ", d_ = "Β", f_ = "β", m_ = "ℶ", h_ = "≬", y_ = "𝔅", g_ = "𝔟", v_ = "⋂", b_ = "◯", w_ = "⋃", x_ = "⨀", __ = "⨁", $_ = "⨂", E_ = "⨆", S_ = "★", T_ = "▽", P_ = "△", O_ = "⨄", N_ = "⋁", R_ = "⋀", A_ = "⤍", D_ = "⧫", I_ = "▪", k_ = "▴", C_ = "▾", j_ = "◂", L_ = "▸", q_ = "␣", F_ = "▒", M_ = "░", U_ = "▓", V_ = "█", z_ = "=⃥", B_ = "≡⃥", G_ = "⫭", H_ = "⌐", X_ = "𝔹", K_ = "𝕓", W_ = "⊥", J_ = "⊥", Y_ = "⋈", Q_ = "⧉", Z_ = "┐", e$ = "╕", t$ = "╖", n$ = "╗", r$ = "┌", o$ = "╒", s$ = "╓", i$ = "╔", a$ = "─", c$ = "═", l$ = "┬", u$ = "╤", p$ = "╥", d$ = "╦", f$ = "┴", m$ = "╧", h$ = "╨", y$ = "╩", g$ = "⊟", v$ = "⊞", b$ = "⊠", w$ = "┘", x$ = "╛", _$ = "╜", $$ = "╝", E$ = "└", S$ = "╘", T$ = "╙", P$ = "╚", O$ = "│", N$ = "║", R$ = "┼", A$ = "╪", D$ = "╫", I$ = "╬", k$ = "┤", C$ = "╡", j$ = "╢", L$ = "╣", q$ = "├", F$ = "╞", M$ = "╟", U$ = "╠", V$ = "‵", z$ = "˘", B$ = "˘", G$ = "¦", H$ = "𝒷", X$ = "ℬ", K$ = "⁏", W$ = "∽", J$ = "⋍", Y$ = "⧅", Q$ = "\\", Z$ = "⟈", eE = "•", tE = "•", nE = "≎", rE = "⪮", oE = "≏", sE = "≎", iE = "≏", aE = "Ć", cE = "ć", lE = "⩄", uE = "⩉", pE = "⩋", dE = "∩", fE = "⋒", mE = "⩇", hE = "⩀", yE = "ⅅ", gE = "∩︀", vE = "⁁", bE = "ˇ", wE = "ℭ", xE = "⩍", _E = "Č", $E = "č", EE = "Ç", SE = "ç", TE = "Ĉ", PE = "ĉ", OE = "∰", NE = "⩌", RE = "⩐", AE = "Ċ", DE = "ċ", IE = "¸", kE = "¸", CE = "⦲", jE = "¢", LE = "·", qE = "·", FE = "𝔠", ME = "ℭ", UE = "Ч", VE = "ч", zE = "✓", BE = "✓", GE = "Χ", HE = "χ", XE = "ˆ", KE = "≗", WE = "↺", JE = "↻", YE = "⊛", QE = "⊚", ZE = "⊝", eS = "⊙", tS = "®", nS = "Ⓢ", rS = "⊖", oS = "⊕", sS = "⊗", iS = "○", aS = "⧃", cS = "≗", lS = "⨐", uS = "⫯", pS = "⧂", dS = "∲", fS = "”", mS = "’", hS = "♣", yS = "♣", gS = ":", vS = "∷", bS = "⩴", wS = "≔", xS = "≔", _S = ",", $S = "@", ES = "∁", SS = "∘", TS = "∁", PS = "ℂ", OS = "≅", NS = "⩭", RS = "≡", AS = "∮", DS = "∯", IS = "∮", kS = "𝕔", CS = "ℂ", jS = "∐", LS = "∐", qS = "©", FS = "©", MS = "℗", US = "∳", VS = "↵", zS = "✗", BS = "⨯", GS = "𝒞", HS = "𝒸", XS = "⫏", KS = "⫑", WS = "⫐", JS = "⫒", YS = "⋯", QS = "⤸", ZS = "⤵", eT = "⋞", tT = "⋟", nT = "↶", rT = "⤽", oT = "⩈", sT = "⩆", iT = "≍", aT = "∪", cT = "⋓", lT = "⩊", uT = "⊍", pT = "⩅", dT = "∪︀", fT = "↷", mT = "⤼", hT = "⋞", yT = "⋟", gT = "⋎", vT = "⋏", bT = "¤", wT = "↶", xT = "↷", _T = "⋎", $T = "⋏", ET = "∲", ST = "∱", TT = "⌭", PT = "†", OT = "‡", NT = "ℸ", RT = "↓", AT = "↡", DT = "⇓", IT = "‐", kT = "⫤", CT = "⊣", jT = "⤏", LT = "˝", qT = "Ď", FT = "ď", MT = "Д", UT = "д", VT = "‡", zT = "⇊", BT = "ⅅ", GT = "ⅆ", HT = "⤑", XT = "⩷", KT = "°", WT = "∇", JT = "Δ", YT = "δ", QT = "⦱", ZT = "⥿", eP = "𝔇", tP = "𝔡", nP = "⥥", rP = "⇃", oP = "⇂", sP = "´", iP = "˙", aP = "˝", cP = "`", lP = "˜", uP = "⋄", pP = "⋄", dP = "⋄", fP = "♦", mP = "♦", hP = "¨", yP = "ⅆ", gP = "ϝ", vP = "⋲", bP = "÷", wP = "÷", xP = "⋇", _P = "⋇", $P = "Ђ", EP = "ђ", SP = "⌞", TP = "⌍", PP = "$", OP = "𝔻", NP = "𝕕", RP = "¨", AP = "˙", DP = "⃜", IP = "≐", kP = "≑", CP = "≐", jP = "∸", LP = "∔", qP = "⊡", FP = "⌆", MP = "∯", UP = "¨", VP = "⇓", zP = "⇐", BP = "⇔", GP = "⫤", HP = "⟸", XP = "⟺", KP = "⟹", WP = "⇒", JP = "⊨", YP = "⇑", QP = "⇕", ZP = "∥", e1 = "⤓", t1 = "↓", n1 = "↓", r1 = "⇓", o1 = "⇵", s1 = "̑", i1 = "⇊", a1 = "⇃", c1 = "⇂", l1 = "⥐", u1 = "⥞", p1 = "⥖", d1 = "↽", f1 = "⥟", m1 = "⥗", h1 = "⇁", y1 = "↧", g1 = "⊤", v1 = "⤐", b1 = "⌟", w1 = "⌌", x1 = "𝒟", _1 = "𝒹", $1 = "Ѕ", E1 = "ѕ", S1 = "⧶", T1 = "Đ", P1 = "đ", O1 = "⋱", N1 = "▿", R1 = "▾", A1 = "⇵", D1 = "⥯", I1 = "⦦", k1 = "Џ", C1 = "џ", j1 = "⟿", L1 = "É", q1 = "é", F1 = "⩮", M1 = "Ě", U1 = "ě", V1 = "Ê", z1 = "ê", B1 = "≖", G1 = "≕", H1 = "Э", X1 = "э", K1 = "⩷", W1 = "Ė", J1 = "ė", Y1 = "≑", Q1 = "ⅇ", Z1 = "≒", eO = "𝔈", tO = "𝔢", nO = "⪚", rO = "È", oO = "è", sO = "⪖", iO = "⪘", aO = "⪙", cO = "∈", lO = "⏧", uO = "ℓ", pO = "⪕", dO = "⪗", fO = "Ē", mO = "ē", hO = "∅", yO = "∅", gO = "◻", vO = "∅", bO = "▫", wO = " ", xO = " ", _O = " ", $O = "Ŋ", EO = "ŋ", SO = " ", TO = "Ę", PO = "ę", OO = "𝔼", NO = "𝕖", RO = "⋕", AO = "⧣", DO = "⩱", IO = "ε", kO = "Ε", CO = "ε", jO = "ϵ", LO = "≖", qO = "≕", FO = "≂", MO = "⪖", UO = "⪕", VO = "⩵", zO = "=", BO = "≂", GO = "≟", HO = "⇌", XO = "≡", KO = "⩸", WO = "⧥", JO = "⥱", YO = "≓", QO = "ℯ", ZO = "ℰ", eN = "≐", tN = "⩳", nN = "≂", rN = "Η", oN = "η", sN = "Ð", iN = "ð", aN = "Ë", cN = "ë", lN = "€", uN = "!", pN = "∃", dN = "∃", fN = "ℰ", mN = "ⅇ", hN = "ⅇ", yN = "≒", gN = "Ф", vN = "ф", bN = "♀", wN = "ﬃ", xN = "ﬀ", _N = "ﬄ", $N = "𝔉", EN = "𝔣", SN = "ﬁ", TN = "◼", PN = "▪", ON = "fj", NN = "♭", RN = "ﬂ", AN = "▱", DN = "ƒ", IN = "𝔽", kN = "𝕗", CN = "∀", jN = "∀", LN = "⋔", qN = "⫙", FN = "ℱ", MN = "⨍", UN = "½", VN = "⅓", zN = "¼", BN = "⅕", GN = "⅙", HN = "⅛", XN = "⅔", KN = "⅖", WN = "¾", JN = "⅗", YN = "⅜", QN = "⅘", ZN = "⅚", eR = "⅝", tR = "⅞", nR = "⁄", rR = "⌢", oR = "𝒻", sR = "ℱ", iR = "ǵ", aR = "Γ", cR = "γ", lR = "Ϝ", uR = "ϝ", pR = "⪆", dR = "Ğ", fR = "ğ", mR = "Ģ", hR = "Ĝ", yR = "ĝ", gR = "Г", vR = "г", bR = "Ġ", wR = "ġ", xR = "≥", _R = "≧", $R = "⪌", ER = "⋛", SR = "≥", TR = "≧", PR = "⩾", OR = "⪩", NR = "⩾", RR = "⪀", AR = "⪂", DR = "⪄", IR = "⋛︀", kR = "⪔", CR = "𝔊", jR = "𝔤", LR = "≫", qR = "⋙", FR = "⋙", MR = "ℷ", UR = "Ѓ", VR = "ѓ", zR = "⪥", BR = "≷", GR = "⪒", HR = "⪤", XR = "⪊", KR = "⪊", WR = "⪈", JR = "≩", YR = "⪈", QR = "≩", ZR = "⋧", eA = "𝔾", tA = "𝕘", nA = "`", rA = "≥", oA = "⋛", sA = "≧", iA = "⪢", aA = "≷", cA = "⩾", lA = "≳", uA = "𝒢", pA = "ℊ", dA = "≳", fA = "⪎", mA = "⪐", hA = "⪧", yA = "⩺", gA = ">", vA = ">", bA = "≫", wA = "⋗", xA = "⦕", _A = "⩼", $A = "⪆", EA = "⥸", SA = "⋗", TA = "⋛", PA = "⪌", OA = "≷", NA = "≳", RA = "≩︀", AA = "≩︀", DA = "ˇ", IA = " ", kA = "½", CA = "ℋ", jA = "Ъ", LA = "ъ", qA = "⥈", FA = "↔", MA = "⇔", UA = "↭", VA = "^", zA = "ℏ", BA = "Ĥ", GA = "ĥ", HA = "♥", XA = "♥", KA = "…", WA = "⊹", JA = "𝔥", YA = "ℌ", QA = "ℋ", ZA = "⤥", eD = "⤦", tD = "⇿", nD = "∻", rD = "↩", oD = "↪", sD = "𝕙", iD = "ℍ", aD = "―", cD = "─", lD = "𝒽", uD = "ℋ", pD = "ℏ", dD = "Ħ", fD = "ħ", mD = "≎", hD = "≏", yD = "⁃", gD = "‐", vD = "Í", bD = "í", wD = "⁣", xD = "Î", _D = "î", $D = "И", ED = "и", SD = "İ", TD = "Е", PD = "е", OD = "¡", ND = "⇔", RD = "𝔦", AD = "ℑ", DD = "Ì", ID = "ì", kD = "ⅈ", CD = "⨌", jD = "∭", LD = "⧜", qD = "℩", FD = "Ĳ", MD = "ĳ", UD = "Ī", VD = "ī", zD = "ℑ", BD = "ⅈ", GD = "ℐ", HD = "ℑ", XD = "ı", KD = "ℑ", WD = "⊷", JD = "Ƶ", YD = "⇒", QD = "℅", ZD = "∞", eI = "⧝", tI = "ı", nI = "⊺", rI = "∫", oI = "∬", sI = "ℤ", iI = "∫", aI = "⊺", cI = "⋂", lI = "⨗", uI = "⨼", pI = "⁣", dI = "⁢", fI = "Ё", mI = "ё", hI = "Į", yI = "į", gI = "𝕀", vI = "𝕚", bI = "Ι", wI = "ι", xI = "⨼", _I = "¿", $I = "𝒾", EI = "ℐ", SI = "∈", TI = "⋵", PI = "⋹", OI = "⋴", NI = "⋳", RI = "∈", AI = "⁢", DI = "Ĩ", II = "ĩ", kI = "І", CI = "і", jI = "Ï", LI = "ï", qI = "Ĵ", FI = "ĵ", MI = "Й", UI = "й", VI = "𝔍", zI = "𝔧", BI = "ȷ", GI = "𝕁", HI = "𝕛", XI = "𝒥", KI = "𝒿", WI = "Ј", JI = "ј", YI = "Є", QI = "є", ZI = "Κ", ek = "κ", tk = "ϰ", nk = "Ķ", rk = "ķ", ok = "К", sk = "к", ik = "𝔎", ak = "𝔨", ck = "ĸ", lk = "Х", uk = "х", pk = "Ќ", dk = "ќ", fk = "𝕂", mk = "𝕜", hk = "𝒦", yk = "𝓀", gk = "⇚", vk = "Ĺ", bk = "ĺ", wk = "⦴", xk = "ℒ", _k = "Λ", $k = "λ", Ek = "⟨", Sk = "⟪", Tk = "⦑", Pk = "⟨", Ok = "⪅", Nk = "ℒ", Rk = "«", Ak = "⇤", Dk = "⤟", Ik = "←", kk = "↞", Ck = "⇐", jk = "⤝", Lk = "↩", qk = "↫", Fk = "⤹", Mk = "⥳", Uk = "↢", Vk = "⤙", zk = "⤛", Bk = "⪫", Gk = "⪭", Hk = "⪭︀", Xk = "⤌", Kk = "⤎", Wk = "❲", Jk = "{", Yk = "[", Qk = "⦋", Zk = "⦏", eC = "⦍", tC = "Ľ", nC = "ľ", rC = "Ļ", oC = "ļ", sC = "⌈", iC = "{", aC = "Л", cC = "л", lC = "⤶", uC = "“", pC = "„", dC = "⥧", fC = "⥋", mC = "↲", hC = "≤", yC = "≦", gC = "⟨", vC = "⇤", bC = "←", wC = "←", xC = "⇐", _C = "⇆", $C = "↢", EC = "⌈", SC = "⟦", TC = "⥡", PC = "⥙", OC = "⇃", NC = "⌊", RC = "↽", AC = "↼", DC = "⇇", IC = "↔", kC = "↔", CC = "⇔", jC = "⇆", LC = "⇋", qC = "↭", FC = "⥎", MC = "↤", UC = "⊣", VC = "⥚", zC = "⋋", BC = "⧏", GC = "⊲", HC = "⊴", XC = "⥑", KC = "⥠", WC = "⥘", JC = "↿", YC = "⥒", QC = "↼", ZC = "⪋", ej = "⋚", tj = "≤", nj = "≦", rj = "⩽", oj = "⪨", sj = "⩽", ij = "⩿", aj = "⪁", cj = "⪃", lj = "⋚︀", uj = "⪓", pj = "⪅", dj = "⋖", fj = "⋚", mj = "⪋", hj = "⋚", yj = "≦", gj = "≶", vj = "≶", bj = "⪡", wj = "≲", xj = "⩽", _j = "≲", $j = "⥼", Ej = "⌊", Sj = "𝔏", Tj = "𝔩", Pj = "≶", Oj = "⪑", Nj = "⥢", Rj = "↽", Aj = "↼", Dj = "⥪", Ij = "▄", kj = "Љ", Cj = "љ", jj = "⇇", Lj = "≪", qj = "⋘", Fj = "⌞", Mj = "⇚", Uj = "⥫", Vj = "◺", zj = "Ŀ", Bj = "ŀ", Gj = "⎰", Hj = "⎰", Xj = "⪉", Kj = "⪉", Wj = "⪇", Jj = "≨", Yj = "⪇", Qj = "≨", Zj = "⋦", eL = "⟬", tL = "⇽", nL = "⟦", rL = "⟵", oL = "⟵", sL = "⟸", iL = "⟷", aL = "⟷", cL = "⟺", lL = "⟼", uL = "⟶", pL = "⟶", dL = "⟹", fL = "↫", mL = "↬", hL = "⦅", yL = "𝕃", gL = "𝕝", vL = "⨭", bL = "⨴", wL = "∗", xL = "_", _L = "↙", $L = "↘", EL = "◊", SL = "◊", TL = "⧫", PL = "(", OL = "⦓", NL = "⇆", RL = "⌟", AL = "⇋", DL = "⥭", IL = "‎", kL = "⊿", CL = "‹", jL = "𝓁", LL = "ℒ", qL = "↰", FL = "↰", ML = "≲", UL = "⪍", VL = "⪏", zL = "[", BL = "‘", GL = "‚", HL = "Ł", XL = "ł", KL = "⪦", WL = "⩹", JL = "<", YL = "<", QL = "≪", ZL = "⋖", eq = "⋋", tq = "⋉", nq = "⥶", rq = "⩻", oq = "◃", sq = "⊴", iq = "◂", aq = "⦖", cq = "⥊", lq = "⥦", uq = "≨︀", pq = "≨︀", dq = "¯", fq = "♂", mq = "✠", hq = "✠", yq = "↦", gq = "↦", vq = "↧", bq = "↤", wq = "↥", xq = "▮", _q = "⨩", $q = "М", Eq = "м", Sq = "—", Tq = "∺", Pq = "∡", Oq = " ", Nq = "ℳ", Rq = "𝔐", Aq = "𝔪", Dq = "℧", Iq = "µ", kq = "*", Cq = "⫰", jq = "∣", Lq = "·", qq = "⊟", Fq = "−", Mq = "∸", Uq = "⨪", Vq = "∓", zq = "⫛", Bq = "…", Gq = "∓", Hq = "⊧", Xq = "𝕄", Kq = "𝕞", Wq = "∓", Jq = "𝓂", Yq = "ℳ", Qq = "∾", Zq = "Μ", eF = "μ", tF = "⊸", nF = "⊸", rF = "∇", oF = "Ń", sF = "ń", iF = "∠⃒", aF = "≉", cF = "⩰̸", lF = "≋̸", uF = "ŉ", pF = "≉", dF = "♮", fF = "ℕ", mF = "♮", hF = " ", yF = "≎̸", gF = "≏̸", vF = "⩃", bF = "Ň", wF = "ň", xF = "Ņ", _F = "ņ", $F = "≇", EF = "⩭̸", SF = "⩂", TF = "Н", PF = "н", OF = "–", NF = "⤤", RF = "↗", AF = "⇗", DF = "↗", IF = "≠", kF = "≐̸", CF = "​", jF = "​", LF = "​", qF = "​", FF = "≢", MF = "⤨", UF = "≂̸", VF = "≫", zF = "≪", BF = `
`, GF = "∄", HF = "∄", XF = "𝔑", KF = "𝔫", WF = "≧̸", JF = "≱", YF = "≱", QF = "≧̸", ZF = "⩾̸", eM = "⩾̸", tM = "⋙̸", nM = "≵", rM = "≫⃒", oM = "≯", sM = "≯", iM = "≫̸", aM = "↮", cM = "⇎", lM = "⫲", uM = "∋", pM = "⋼", dM = "⋺", fM = "∋", mM = "Њ", hM = "њ", yM = "↚", gM = "⇍", vM = "‥", bM = "≦̸", wM = "≰", xM = "↚", _M = "⇍", $M = "↮", EM = "⇎", SM = "≰", TM = "≦̸", PM = "⩽̸", OM = "⩽̸", NM = "≮", RM = "⋘̸", AM = "≴", DM = "≪⃒", IM = "≮", kM = "⋪", CM = "⋬", jM = "≪̸", LM = "∤", qM = "⁠", FM = " ", MM = "𝕟", UM = "ℕ", VM = "⫬", zM = "¬", BM = "≢", GM = "≭", HM = "∦", XM = "∉", KM = "≠", WM = "≂̸", JM = "∄", YM = "≯", QM = "≱", ZM = "≧̸", e2 = "≫̸", t2 = "≹", n2 = "⩾̸", r2 = "≵", o2 = "≎̸", s2 = "≏̸", i2 = "∉", a2 = "⋵̸", c2 = "⋹̸", l2 = "∉", u2 = "⋷", p2 = "⋶", d2 = "⧏̸", f2 = "⋪", m2 = "⋬", h2 = "≮", y2 = "≰", g2 = "≸", v2 = "≪̸", b2 = "⩽̸", w2 = "≴", x2 = "⪢̸", _2 = "⪡̸", $2 = "∌", E2 = "∌", S2 = "⋾", T2 = "⋽", P2 = "⊀", O2 = "⪯̸", N2 = "⋠", R2 = "∌", A2 = "⧐̸", D2 = "⋫", I2 = "⋭", k2 = "⊏̸", C2 = "⋢", j2 = "⊐̸", L2 = "⋣", q2 = "⊂⃒", F2 = "⊈", M2 = "⊁", U2 = "⪰̸", V2 = "⋡", z2 = "≿̸", B2 = "⊃⃒", G2 = "⊉", H2 = "≁", X2 = "≄", K2 = "≇", W2 = "≉", J2 = "∤", Y2 = "∦", Q2 = "∦", Z2 = "⫽⃥", eU = "∂̸", tU = "⨔", nU = "⊀", rU = "⋠", oU = "⊀", sU = "⪯̸", iU = "⪯̸", aU = "⤳̸", cU = "↛", lU = "⇏", uU = "↝̸", pU = "↛", dU = "⇏", fU = "⋫", mU = "⋭", hU = "⊁", yU = "⋡", gU = "⪰̸", vU = "𝒩", bU = "𝓃", wU = "∤", xU = "∦", _U = "≁", $U = "≄", EU = "≄", SU = "∤", TU = "∦", PU = "⋢", OU = "⋣", NU = "⊄", RU = "⫅̸", AU = "⊈", DU = "⊂⃒", IU = "⊈", kU = "⫅̸", CU = "⊁", jU = "⪰̸", LU = "⊅", qU = "⫆̸", FU = "⊉", MU = "⊃⃒", UU = "⊉", VU = "⫆̸", zU = "≹", BU = "Ñ", GU = "ñ", HU = "≸", XU = "⋪", KU = "⋬", WU = "⋫", JU = "⋭", YU = "Ν", QU = "ν", ZU = "#", e3 = "№", t3 = " ", n3 = "≍⃒", r3 = "⊬", o3 = "⊭", s3 = "⊮", i3 = "⊯", a3 = "≥⃒", c3 = ">⃒", l3 = "⤄", u3 = "⧞", p3 = "⤂", d3 = "≤⃒", f3 = "<⃒", m3 = "⊴⃒", h3 = "⤃", y3 = "⊵⃒", g3 = "∼⃒", v3 = "⤣", b3 = "↖", w3 = "⇖", x3 = "↖", _3 = "⤧", $3 = "Ó", E3 = "ó", S3 = "⊛", T3 = "Ô", P3 = "ô", O3 = "⊚", N3 = "О", R3 = "о", A3 = "⊝", D3 = "Ő", I3 = "ő", k3 = "⨸", C3 = "⊙", j3 = "⦼", L3 = "Œ", q3 = "œ", F3 = "⦿", M3 = "𝔒", U3 = "𝔬", V3 = "˛", z3 = "Ò", B3 = "ò", G3 = "⧁", H3 = "⦵", X3 = "Ω", K3 = "∮", W3 = "↺", J3 = "⦾", Y3 = "⦻", Q3 = "‾", Z3 = "⧀", eV = "Ō", tV = "ō", nV = "Ω", rV = "ω", oV = "Ο", sV = "ο", iV = "⦶", aV = "⊖", cV = "𝕆", lV = "𝕠", uV = "⦷", pV = "“", dV = "‘", fV = "⦹", mV = "⊕", hV = "↻", yV = "⩔", gV = "∨", vV = "⩝", bV = "ℴ", wV = "ℴ", xV = "ª", _V = "º", $V = "⊶", EV = "⩖", SV = "⩗", TV = "⩛", PV = "Ⓢ", OV = "𝒪", NV = "ℴ", RV = "Ø", AV = "ø", DV = "⊘", IV = "Õ", kV = "õ", CV = "⨶", jV = "⨷", LV = "⊗", qV = "Ö", FV = "ö", MV = "⌽", UV = "‾", VV = "⏞", zV = "⎴", BV = "⏜", GV = "¶", HV = "∥", XV = "∥", KV = "⫳", WV = "⫽", JV = "∂", YV = "∂", QV = "П", ZV = "п", ez = "%", tz = ".", nz = "‰", rz = "⊥", oz = "‱", sz = "𝔓", iz = "𝔭", az = "Φ", cz = "φ", lz = "ϕ", uz = "ℳ", pz = "☎", dz = "Π", fz = "π", mz = "⋔", hz = "ϖ", yz = "ℏ", gz = "ℎ", vz = "ℏ", bz = "⨣", wz = "⊞", xz = "⨢", _z = "+", $z = "∔", Ez = "⨥", Sz = "⩲", Tz = "±", Pz = "±", Oz = "⨦", Nz = "⨧", Rz = "±", Az = "ℌ", Dz = "⨕", Iz = "𝕡", kz = "ℙ", Cz = "£", jz = "⪷", Lz = "⪻", qz = "≺", Fz = "≼", Mz = "⪷", Uz = "≺", Vz = "≼", zz = "≺", Bz = "⪯", Gz = "≼", Hz = "≾", Xz = "⪯", Kz = "⪹", Wz = "⪵", Jz = "⋨", Yz = "⪯", Qz = "⪳", Zz = "≾", eB = "′", tB = "″", nB = "ℙ", rB = "⪹", oB = "⪵", sB = "⋨", iB = "∏", aB = "∏", cB = "⌮", lB = "⌒", uB = "⌓", pB = "∝", dB = "∝", fB = "∷", mB = "∝", hB = "≾", yB = "⊰", gB = "𝒫", vB = "𝓅", bB = "Ψ", wB = "ψ", xB = " ", _B = "𝔔", $B = "𝔮", EB = "⨌", SB = "𝕢", TB = "ℚ", PB = "⁗", OB = "𝒬", NB = "𝓆", RB = "ℍ", AB = "⨖", DB = "?", IB = "≟", kB = '"', CB = '"', jB = "⇛", LB = "∽̱", qB = "Ŕ", FB = "ŕ", MB = "√", UB = "⦳", VB = "⟩", zB = "⟫", BB = "⦒", GB = "⦥", HB = "⟩", XB = "»", KB = "⥵", WB = "⇥", JB = "⤠", YB = "⤳", QB = "→", ZB = "↠", e4 = "⇒", t4 = "⤞", n4 = "↪", r4 = "↬", o4 = "⥅", s4 = "⥴", i4 = "⤖", a4 = "↣", c4 = "↝", l4 = "⤚", u4 = "⤜", p4 = "∶", d4 = "ℚ", f4 = "⤍", m4 = "⤏", h4 = "⤐", y4 = "❳", g4 = "}", v4 = "]", b4 = "⦌", w4 = "⦎", x4 = "⦐", _4 = "Ř", $4 = "ř", E4 = "Ŗ", S4 = "ŗ", T4 = "⌉", P4 = "}", O4 = "Р", N4 = "р", R4 = "⤷", A4 = "⥩", D4 = "”", I4 = "”", k4 = "↳", C4 = "ℜ", j4 = "ℛ", L4 = "ℜ", q4 = "ℝ", F4 = "ℜ", M4 = "▭", U4 = "®", V4 = "®", z4 = "∋", B4 = "⇋", G4 = "⥯", H4 = "⥽", X4 = "⌋", K4 = "𝔯", W4 = "ℜ", J4 = "⥤", Y4 = "⇁", Q4 = "⇀", Z4 = "⥬", e9 = "Ρ", t9 = "ρ", n9 = "ϱ", r9 = "⟩", o9 = "⇥", s9 = "→", i9 = "→", a9 = "⇒", c9 = "⇄", l9 = "↣", u9 = "⌉", p9 = "⟧", d9 = "⥝", f9 = "⥕", m9 = "⇂", h9 = "⌋", y9 = "⇁", g9 = "⇀", v9 = "⇄", b9 = "⇌", w9 = "⇉", x9 = "↝", _9 = "↦", $9 = "⊢", E9 = "⥛", S9 = "⋌", T9 = "⧐", P9 = "⊳", O9 = "⊵", N9 = "⥏", R9 = "⥜", A9 = "⥔", D9 = "↾", I9 = "⥓", k9 = "⇀", C9 = "˚", j9 = "≓", L9 = "⇄", q9 = "⇌", F9 = "‏", M9 = "⎱", U9 = "⎱", V9 = "⫮", z9 = "⟭", B9 = "⇾", G9 = "⟧", H9 = "⦆", X9 = "𝕣", K9 = "ℝ", W9 = "⨮", J9 = "⨵", Y9 = "⥰", Q9 = ")", Z9 = "⦔", e8 = "⨒", t8 = "⇉", n8 = "⇛", r8 = "›", o8 = "𝓇", s8 = "ℛ", i8 = "↱", a8 = "↱", c8 = "]", l8 = "’", u8 = "’", p8 = "⋌", d8 = "⋊", f8 = "▹", m8 = "⊵", h8 = "▸", y8 = "⧎", g8 = "⧴", v8 = "⥨", b8 = "℞", w8 = "Ś", x8 = "ś", _8 = "‚", $8 = "⪸", E8 = "Š", S8 = "š", T8 = "⪼", P8 = "≻", O8 = "≽", N8 = "⪰", R8 = "⪴", A8 = "Ş", D8 = "ş", I8 = "Ŝ", k8 = "ŝ", C8 = "⪺", j8 = "⪶", L8 = "⋩", q8 = "⨓", F8 = "≿", M8 = "С", U8 = "с", V8 = "⊡", z8 = "⋅", B8 = "⩦", G8 = "⤥", H8 = "↘", X8 = "⇘", K8 = "↘", W8 = "§", J8 = ";", Y8 = "⤩", Q8 = "∖", Z8 = "∖", eG = "✶", tG = "𝔖", nG = "𝔰", rG = "⌢", oG = "♯", sG = "Щ", iG = "щ", aG = "Ш", cG = "ш", lG = "↓", uG = "←", pG = "∣", dG = "∥", fG = "→", mG = "↑", hG = "­", yG = "Σ", gG = "σ", vG = "ς", bG = "ς", wG = "∼", xG = "⩪", _G = "≃", $G = "≃", EG = "⪞", SG = "⪠", TG = "⪝", PG = "⪟", OG = "≆", NG = "⨤", RG = "⥲", AG = "←", DG = "∘", IG = "∖", kG = "⨳", CG = "⧤", jG = "∣", LG = "⌣", qG = "⪪", FG = "⪬", MG = "⪬︀", UG = "Ь", VG = "ь", zG = "⌿", BG = "⧄", GG = "/", HG = "𝕊", XG = "𝕤", KG = "♠", WG = "♠", JG = "∥", YG = "⊓", QG = "⊓︀", ZG = "⊔", eH = "⊔︀", tH = "√", nH = "⊏", rH = "⊑", oH = "⊏", sH = "⊑", iH = "⊐", aH = "⊒", cH = "⊐", lH = "⊒", uH = "□", pH = "□", dH = "⊓", fH = "⊏", mH = "⊑", hH = "⊐", yH = "⊒", gH = "⊔", vH = "▪", bH = "□", wH = "▪", xH = "→", _H = "𝒮", $H = "𝓈", EH = "∖", SH = "⌣", TH = "⋆", PH = "⋆", OH = "☆", NH = "★", RH = "ϵ", AH = "ϕ", DH = "¯", IH = "⊂", kH = "⋐", CH = "⪽", jH = "⫅", LH = "⊆", qH = "⫃", FH = "⫁", MH = "⫋", UH = "⊊", VH = "⪿", zH = "⥹", BH = "⊂", GH = "⋐", HH = "⊆", XH = "⫅", KH = "⊆", WH = "⊊", JH = "⫋", YH = "⫇", QH = "⫕", ZH = "⫓", e6 = "⪸", t6 = "≻", n6 = "≽", r6 = "≻", o6 = "⪰", s6 = "≽", i6 = "≿", a6 = "⪰", c6 = "⪺", l6 = "⪶", u6 = "⋩", p6 = "≿", d6 = "∋", f6 = "∑", m6 = "∑", h6 = "♪", y6 = "¹", g6 = "²", v6 = "³", b6 = "⊃", w6 = "⋑", x6 = "⪾", _6 = "⫘", $6 = "⫆", E6 = "⊇", S6 = "⫄", T6 = "⊃", P6 = "⊇", O6 = "⟉", N6 = "⫗", R6 = "⥻", A6 = "⫂", D6 = "⫌", I6 = "⊋", k6 = "⫀", C6 = "⊃", j6 = "⋑", L6 = "⊇", q6 = "⫆", F6 = "⊋", M6 = "⫌", U6 = "⫈", V6 = "⫔", z6 = "⫖", B6 = "⤦", G6 = "↙", H6 = "⇙", X6 = "↙", K6 = "⤪", W6 = "ß", J6 = "	", Y6 = "⌖", Q6 = "Τ", Z6 = "τ", e5 = "⎴", t5 = "Ť", n5 = "ť", r5 = "Ţ", o5 = "ţ", s5 = "Т", i5 = "т", a5 = "⃛", c5 = "⌕", l5 = "𝔗", u5 = "𝔱", p5 = "∴", d5 = "∴", f5 = "∴", m5 = "Θ", h5 = "θ", y5 = "ϑ", g5 = "ϑ", v5 = "≈", b5 = "∼", w5 = "  ", x5 = " ", _5 = " ", $5 = "≈", E5 = "∼", S5 = "Þ", T5 = "þ", P5 = "˜", O5 = "∼", N5 = "≃", R5 = "≅", A5 = "≈", D5 = "⨱", I5 = "⊠", k5 = "×", C5 = "⨰", j5 = "∭", L5 = "⤨", q5 = "⌶", F5 = "⫱", M5 = "⊤", U5 = "𝕋", V5 = "𝕥", z5 = "⫚", B5 = "⤩", G5 = "‴", H5 = "™", X5 = "™", K5 = "▵", W5 = "▿", J5 = "◃", Y5 = "⊴", Q5 = "≜", Z5 = "▹", eX = "⊵", tX = "◬", nX = "≜", rX = "⨺", oX = "⃛", sX = "⨹", iX = "⧍", aX = "⨻", cX = "⏢", lX = "𝒯", uX = "𝓉", pX = "Ц", dX = "ц", fX = "Ћ", mX = "ћ", hX = "Ŧ", yX = "ŧ", gX = "≬", vX = "↞", bX = "↠", wX = "Ú", xX = "ú", _X = "↑", $X = "↟", EX = "⇑", SX = "⥉", TX = "Ў", PX = "ў", OX = "Ŭ", NX = "ŭ", RX = "Û", AX = "û", DX = "У", IX = "у", kX = "⇅", CX = "Ű", jX = "ű", LX = "⥮", qX = "⥾", FX = "𝔘", MX = "𝔲", UX = "Ù", VX = "ù", zX = "⥣", BX = "↿", GX = "↾", HX = "▀", XX = "⌜", KX = "⌜", WX = "⌏", JX = "◸", YX = "Ū", QX = "ū", ZX = "¨", eK = "_", tK = "⏟", nK = "⎵", rK = "⏝", oK = "⋃", sK = "⊎", iK = "Ų", aK = "ų", cK = "𝕌", lK = "𝕦", uK = "⤒", pK = "↑", dK = "↑", fK = "⇑", mK = "⇅", hK = "↕", yK = "↕", gK = "⇕", vK = "⥮", bK = "↿", wK = "↾", xK = "⊎", _K = "↖", $K = "↗", EK = "υ", SK = "ϒ", TK = "ϒ", PK = "Υ", OK = "υ", NK = "↥", RK = "⊥", AK = "⇈", DK = "⌝", IK = "⌝", kK = "⌎", CK = "Ů", jK = "ů", LK = "◹", qK = "𝒰", FK = "𝓊", MK = "⋰", UK = "Ũ", VK = "ũ", zK = "▵", BK = "▴", GK = "⇈", HK = "Ü", XK = "ü", KK = "⦧", WK = "⦜", JK = "ϵ", YK = "ϰ", QK = "∅", ZK = "ϕ", e7 = "ϖ", t7 = "∝", n7 = "↕", r7 = "⇕", o7 = "ϱ", s7 = "ς", i7 = "⊊︀", a7 = "⫋︀", c7 = "⊋︀", l7 = "⫌︀", u7 = "ϑ", p7 = "⊲", d7 = "⊳", f7 = "⫨", m7 = "⫫", h7 = "⫩", y7 = "В", g7 = "в", v7 = "⊢", b7 = "⊨", w7 = "⊩", x7 = "⊫", _7 = "⫦", $7 = "⊻", E7 = "∨", S7 = "⋁", T7 = "≚", P7 = "⋮", O7 = "|", N7 = "‖", R7 = "|", A7 = "‖", D7 = "∣", I7 = "|", k7 = "❘", C7 = "≀", j7 = " ", L7 = "𝔙", q7 = "𝔳", F7 = "⊲", M7 = "⊂⃒", U7 = "⊃⃒", V7 = "𝕍", z7 = "𝕧", B7 = "∝", G7 = "⊳", H7 = "𝒱", X7 = "𝓋", K7 = "⫋︀", W7 = "⊊︀", J7 = "⫌︀", Y7 = "⊋︀", Q7 = "⊪", Z7 = "⦚", eW = "Ŵ", tW = "ŵ", nW = "⩟", rW = "∧", oW = "⋀", sW = "≙", iW = "℘", aW = "𝔚", cW = "𝔴", lW = "𝕎", uW = "𝕨", pW = "℘", dW = "≀", fW = "≀", mW = "𝒲", hW = "𝓌", yW = "⋂", gW = "◯", vW = "⋃", bW = "▽", wW = "𝔛", xW = "𝔵", _W = "⟷", $W = "⟺", EW = "Ξ", SW = "ξ", TW = "⟵", PW = "⟸", OW = "⟼", NW = "⋻", RW = "⨀", AW = "𝕏", DW = "𝕩", IW = "⨁", kW = "⨂", CW = "⟶", jW = "⟹", LW = "𝒳", qW = "𝓍", FW = "⨆", MW = "⨄", UW = "△", VW = "⋁", zW = "⋀", BW = "Ý", GW = "ý", HW = "Я", XW = "я", KW = "Ŷ", WW = "ŷ", JW = "Ы", YW = "ы", QW = "¥", ZW = "𝔜", eJ = "𝔶", tJ = "Ї", nJ = "ї", rJ = "𝕐", oJ = "𝕪", sJ = "𝒴", iJ = "𝓎", aJ = "Ю", cJ = "ю", lJ = "ÿ", uJ = "Ÿ", pJ = "Ź", dJ = "ź", fJ = "Ž", mJ = "ž", hJ = "З", yJ = "з", gJ = "Ż", vJ = "ż", bJ = "ℨ", wJ = "​", xJ = "Ζ", _J = "ζ", $J = "𝔷", EJ = "ℨ", SJ = "Ж", TJ = "ж", PJ = "⇝", OJ = "𝕫", NJ = "ℤ", RJ = "𝒵", AJ = "𝓏", DJ = "‍", IJ = "‌", qy = {
  Aacute: g0,
  aacute: v0,
  Abreve: b0,
  abreve: w0,
  ac: x0,
  acd: _0,
  acE: $0,
  Acirc: E0,
  acirc: S0,
  acute: T0,
  Acy: P0,
  acy: O0,
  AElig: N0,
  aelig: R0,
  af: A0,
  Afr: D0,
  afr: I0,
  Agrave: k0,
  agrave: C0,
  alefsym: j0,
  aleph: L0,
  Alpha: q0,
  alpha: F0,
  Amacr: M0,
  amacr: U0,
  amalg: V0,
  amp: z0,
  AMP: B0,
  andand: G0,
  And: H0,
  and: X0,
  andd: K0,
  andslope: W0,
  andv: J0,
  ang: Y0,
  ange: Q0,
  angle: Z0,
  angmsdaa: ex,
  angmsdab: tx,
  angmsdac: nx,
  angmsdad: rx,
  angmsdae: ox,
  angmsdaf: sx,
  angmsdag: ix,
  angmsdah: ax,
  angmsd: cx,
  angrt: lx,
  angrtvb: ux,
  angrtvbd: px,
  angsph: dx,
  angst: fx,
  angzarr: mx,
  Aogon: hx,
  aogon: yx,
  Aopf: gx,
  aopf: vx,
  apacir: bx,
  ap: wx,
  apE: xx,
  ape: _x,
  apid: $x,
  apos: Ex,
  ApplyFunction: Sx,
  approx: Tx,
  approxeq: Px,
  Aring: Ox,
  aring: Nx,
  Ascr: Rx,
  ascr: Ax,
  Assign: Dx,
  ast: Ix,
  asymp: kx,
  asympeq: Cx,
  Atilde: jx,
  atilde: Lx,
  Auml: qx,
  auml: Fx,
  awconint: Mx,
  awint: Ux,
  backcong: Vx,
  backepsilon: zx,
  backprime: Bx,
  backsim: Gx,
  backsimeq: Hx,
  Backslash: Xx,
  Barv: Kx,
  barvee: Wx,
  barwed: Jx,
  Barwed: Yx,
  barwedge: Qx,
  bbrk: Zx,
  bbrktbrk: e_,
  bcong: t_,
  Bcy: n_,
  bcy: r_,
  bdquo: o_,
  becaus: s_,
  because: i_,
  Because: a_,
  bemptyv: c_,
  bepsi: l_,
  bernou: u_,
  Bernoullis: p_,
  Beta: d_,
  beta: f_,
  beth: m_,
  between: h_,
  Bfr: y_,
  bfr: g_,
  bigcap: v_,
  bigcirc: b_,
  bigcup: w_,
  bigodot: x_,
  bigoplus: __,
  bigotimes: $_,
  bigsqcup: E_,
  bigstar: S_,
  bigtriangledown: T_,
  bigtriangleup: P_,
  biguplus: O_,
  bigvee: N_,
  bigwedge: R_,
  bkarow: A_,
  blacklozenge: D_,
  blacksquare: I_,
  blacktriangle: k_,
  blacktriangledown: C_,
  blacktriangleleft: j_,
  blacktriangleright: L_,
  blank: q_,
  blk12: F_,
  blk14: M_,
  blk34: U_,
  block: V_,
  bne: z_,
  bnequiv: B_,
  bNot: G_,
  bnot: H_,
  Bopf: X_,
  bopf: K_,
  bot: W_,
  bottom: J_,
  bowtie: Y_,
  boxbox: Q_,
  boxdl: Z_,
  boxdL: e$,
  boxDl: t$,
  boxDL: n$,
  boxdr: r$,
  boxdR: o$,
  boxDr: s$,
  boxDR: i$,
  boxh: a$,
  boxH: c$,
  boxhd: l$,
  boxHd: u$,
  boxhD: p$,
  boxHD: d$,
  boxhu: f$,
  boxHu: m$,
  boxhU: h$,
  boxHU: y$,
  boxminus: g$,
  boxplus: v$,
  boxtimes: b$,
  boxul: w$,
  boxuL: x$,
  boxUl: _$,
  boxUL: $$,
  boxur: E$,
  boxuR: S$,
  boxUr: T$,
  boxUR: P$,
  boxv: O$,
  boxV: N$,
  boxvh: R$,
  boxvH: A$,
  boxVh: D$,
  boxVH: I$,
  boxvl: k$,
  boxvL: C$,
  boxVl: j$,
  boxVL: L$,
  boxvr: q$,
  boxvR: F$,
  boxVr: M$,
  boxVR: U$,
  bprime: V$,
  breve: z$,
  Breve: B$,
  brvbar: G$,
  bscr: H$,
  Bscr: X$,
  bsemi: K$,
  bsim: W$,
  bsime: J$,
  bsolb: Y$,
  bsol: Q$,
  bsolhsub: Z$,
  bull: eE,
  bullet: tE,
  bump: nE,
  bumpE: rE,
  bumpe: oE,
  Bumpeq: sE,
  bumpeq: iE,
  Cacute: aE,
  cacute: cE,
  capand: lE,
  capbrcup: uE,
  capcap: pE,
  cap: dE,
  Cap: fE,
  capcup: mE,
  capdot: hE,
  CapitalDifferentialD: yE,
  caps: gE,
  caret: vE,
  caron: bE,
  Cayleys: wE,
  ccaps: xE,
  Ccaron: _E,
  ccaron: $E,
  Ccedil: EE,
  ccedil: SE,
  Ccirc: TE,
  ccirc: PE,
  Cconint: OE,
  ccups: NE,
  ccupssm: RE,
  Cdot: AE,
  cdot: DE,
  cedil: IE,
  Cedilla: kE,
  cemptyv: CE,
  cent: jE,
  centerdot: LE,
  CenterDot: qE,
  cfr: FE,
  Cfr: ME,
  CHcy: UE,
  chcy: VE,
  check: zE,
  checkmark: BE,
  Chi: GE,
  chi: HE,
  circ: XE,
  circeq: KE,
  circlearrowleft: WE,
  circlearrowright: JE,
  circledast: YE,
  circledcirc: QE,
  circleddash: ZE,
  CircleDot: eS,
  circledR: tS,
  circledS: nS,
  CircleMinus: rS,
  CirclePlus: oS,
  CircleTimes: sS,
  cir: iS,
  cirE: aS,
  cire: cS,
  cirfnint: lS,
  cirmid: uS,
  cirscir: pS,
  ClockwiseContourIntegral: dS,
  CloseCurlyDoubleQuote: fS,
  CloseCurlyQuote: mS,
  clubs: hS,
  clubsuit: yS,
  colon: gS,
  Colon: vS,
  Colone: bS,
  colone: wS,
  coloneq: xS,
  comma: _S,
  commat: $S,
  comp: ES,
  compfn: SS,
  complement: TS,
  complexes: PS,
  cong: OS,
  congdot: NS,
  Congruent: RS,
  conint: AS,
  Conint: DS,
  ContourIntegral: IS,
  copf: kS,
  Copf: CS,
  coprod: jS,
  Coproduct: LS,
  copy: qS,
  COPY: FS,
  copysr: MS,
  CounterClockwiseContourIntegral: US,
  crarr: VS,
  cross: zS,
  Cross: BS,
  Cscr: GS,
  cscr: HS,
  csub: XS,
  csube: KS,
  csup: WS,
  csupe: JS,
  ctdot: YS,
  cudarrl: QS,
  cudarrr: ZS,
  cuepr: eT,
  cuesc: tT,
  cularr: nT,
  cularrp: rT,
  cupbrcap: oT,
  cupcap: sT,
  CupCap: iT,
  cup: aT,
  Cup: cT,
  cupcup: lT,
  cupdot: uT,
  cupor: pT,
  cups: dT,
  curarr: fT,
  curarrm: mT,
  curlyeqprec: hT,
  curlyeqsucc: yT,
  curlyvee: gT,
  curlywedge: vT,
  curren: bT,
  curvearrowleft: wT,
  curvearrowright: xT,
  cuvee: _T,
  cuwed: $T,
  cwconint: ET,
  cwint: ST,
  cylcty: TT,
  dagger: PT,
  Dagger: OT,
  daleth: NT,
  darr: RT,
  Darr: AT,
  dArr: DT,
  dash: IT,
  Dashv: kT,
  dashv: CT,
  dbkarow: jT,
  dblac: LT,
  Dcaron: qT,
  dcaron: FT,
  Dcy: MT,
  dcy: UT,
  ddagger: VT,
  ddarr: zT,
  DD: BT,
  dd: GT,
  DDotrahd: HT,
  ddotseq: XT,
  deg: KT,
  Del: WT,
  Delta: JT,
  delta: YT,
  demptyv: QT,
  dfisht: ZT,
  Dfr: eP,
  dfr: tP,
  dHar: nP,
  dharl: rP,
  dharr: oP,
  DiacriticalAcute: sP,
  DiacriticalDot: iP,
  DiacriticalDoubleAcute: aP,
  DiacriticalGrave: cP,
  DiacriticalTilde: lP,
  diam: uP,
  diamond: pP,
  Diamond: dP,
  diamondsuit: fP,
  diams: mP,
  die: hP,
  DifferentialD: yP,
  digamma: gP,
  disin: vP,
  div: bP,
  divide: wP,
  divideontimes: xP,
  divonx: _P,
  DJcy: $P,
  djcy: EP,
  dlcorn: SP,
  dlcrop: TP,
  dollar: PP,
  Dopf: OP,
  dopf: NP,
  Dot: RP,
  dot: AP,
  DotDot: DP,
  doteq: IP,
  doteqdot: kP,
  DotEqual: CP,
  dotminus: jP,
  dotplus: LP,
  dotsquare: qP,
  doublebarwedge: FP,
  DoubleContourIntegral: MP,
  DoubleDot: UP,
  DoubleDownArrow: VP,
  DoubleLeftArrow: zP,
  DoubleLeftRightArrow: BP,
  DoubleLeftTee: GP,
  DoubleLongLeftArrow: HP,
  DoubleLongLeftRightArrow: XP,
  DoubleLongRightArrow: KP,
  DoubleRightArrow: WP,
  DoubleRightTee: JP,
  DoubleUpArrow: YP,
  DoubleUpDownArrow: QP,
  DoubleVerticalBar: ZP,
  DownArrowBar: e1,
  downarrow: t1,
  DownArrow: n1,
  Downarrow: r1,
  DownArrowUpArrow: o1,
  DownBreve: s1,
  downdownarrows: i1,
  downharpoonleft: a1,
  downharpoonright: c1,
  DownLeftRightVector: l1,
  DownLeftTeeVector: u1,
  DownLeftVectorBar: p1,
  DownLeftVector: d1,
  DownRightTeeVector: f1,
  DownRightVectorBar: m1,
  DownRightVector: h1,
  DownTeeArrow: y1,
  DownTee: g1,
  drbkarow: v1,
  drcorn: b1,
  drcrop: w1,
  Dscr: x1,
  dscr: _1,
  DScy: $1,
  dscy: E1,
  dsol: S1,
  Dstrok: T1,
  dstrok: P1,
  dtdot: O1,
  dtri: N1,
  dtrif: R1,
  duarr: A1,
  duhar: D1,
  dwangle: I1,
  DZcy: k1,
  dzcy: C1,
  dzigrarr: j1,
  Eacute: L1,
  eacute: q1,
  easter: F1,
  Ecaron: M1,
  ecaron: U1,
  Ecirc: V1,
  ecirc: z1,
  ecir: B1,
  ecolon: G1,
  Ecy: H1,
  ecy: X1,
  eDDot: K1,
  Edot: W1,
  edot: J1,
  eDot: Y1,
  ee: Q1,
  efDot: Z1,
  Efr: eO,
  efr: tO,
  eg: nO,
  Egrave: rO,
  egrave: oO,
  egs: sO,
  egsdot: iO,
  el: aO,
  Element: cO,
  elinters: lO,
  ell: uO,
  els: pO,
  elsdot: dO,
  Emacr: fO,
  emacr: mO,
  empty: hO,
  emptyset: yO,
  EmptySmallSquare: gO,
  emptyv: vO,
  EmptyVerySmallSquare: bO,
  emsp13: wO,
  emsp14: xO,
  emsp: _O,
  ENG: $O,
  eng: EO,
  ensp: SO,
  Eogon: TO,
  eogon: PO,
  Eopf: OO,
  eopf: NO,
  epar: RO,
  eparsl: AO,
  eplus: DO,
  epsi: IO,
  Epsilon: kO,
  epsilon: CO,
  epsiv: jO,
  eqcirc: LO,
  eqcolon: qO,
  eqsim: FO,
  eqslantgtr: MO,
  eqslantless: UO,
  Equal: VO,
  equals: zO,
  EqualTilde: BO,
  equest: GO,
  Equilibrium: HO,
  equiv: XO,
  equivDD: KO,
  eqvparsl: WO,
  erarr: JO,
  erDot: YO,
  escr: QO,
  Escr: ZO,
  esdot: eN,
  Esim: tN,
  esim: nN,
  Eta: rN,
  eta: oN,
  ETH: sN,
  eth: iN,
  Euml: aN,
  euml: cN,
  euro: lN,
  excl: uN,
  exist: pN,
  Exists: dN,
  expectation: fN,
  exponentiale: mN,
  ExponentialE: hN,
  fallingdotseq: yN,
  Fcy: gN,
  fcy: vN,
  female: bN,
  ffilig: wN,
  fflig: xN,
  ffllig: _N,
  Ffr: $N,
  ffr: EN,
  filig: SN,
  FilledSmallSquare: TN,
  FilledVerySmallSquare: PN,
  fjlig: ON,
  flat: NN,
  fllig: RN,
  fltns: AN,
  fnof: DN,
  Fopf: IN,
  fopf: kN,
  forall: CN,
  ForAll: jN,
  fork: LN,
  forkv: qN,
  Fouriertrf: FN,
  fpartint: MN,
  frac12: UN,
  frac13: VN,
  frac14: zN,
  frac15: BN,
  frac16: GN,
  frac18: HN,
  frac23: XN,
  frac25: KN,
  frac34: WN,
  frac35: JN,
  frac38: YN,
  frac45: QN,
  frac56: ZN,
  frac58: eR,
  frac78: tR,
  frasl: nR,
  frown: rR,
  fscr: oR,
  Fscr: sR,
  gacute: iR,
  Gamma: aR,
  gamma: cR,
  Gammad: lR,
  gammad: uR,
  gap: pR,
  Gbreve: dR,
  gbreve: fR,
  Gcedil: mR,
  Gcirc: hR,
  gcirc: yR,
  Gcy: gR,
  gcy: vR,
  Gdot: bR,
  gdot: wR,
  ge: xR,
  gE: _R,
  gEl: $R,
  gel: ER,
  geq: SR,
  geqq: TR,
  geqslant: PR,
  gescc: OR,
  ges: NR,
  gesdot: RR,
  gesdoto: AR,
  gesdotol: DR,
  gesl: IR,
  gesles: kR,
  Gfr: CR,
  gfr: jR,
  gg: LR,
  Gg: qR,
  ggg: FR,
  gimel: MR,
  GJcy: UR,
  gjcy: VR,
  gla: zR,
  gl: BR,
  glE: GR,
  glj: HR,
  gnap: XR,
  gnapprox: KR,
  gne: WR,
  gnE: JR,
  gneq: YR,
  gneqq: QR,
  gnsim: ZR,
  Gopf: eA,
  gopf: tA,
  grave: nA,
  GreaterEqual: rA,
  GreaterEqualLess: oA,
  GreaterFullEqual: sA,
  GreaterGreater: iA,
  GreaterLess: aA,
  GreaterSlantEqual: cA,
  GreaterTilde: lA,
  Gscr: uA,
  gscr: pA,
  gsim: dA,
  gsime: fA,
  gsiml: mA,
  gtcc: hA,
  gtcir: yA,
  gt: gA,
  GT: vA,
  Gt: bA,
  gtdot: wA,
  gtlPar: xA,
  gtquest: _A,
  gtrapprox: $A,
  gtrarr: EA,
  gtrdot: SA,
  gtreqless: TA,
  gtreqqless: PA,
  gtrless: OA,
  gtrsim: NA,
  gvertneqq: RA,
  gvnE: AA,
  Hacek: DA,
  hairsp: IA,
  half: kA,
  hamilt: CA,
  HARDcy: jA,
  hardcy: LA,
  harrcir: qA,
  harr: FA,
  hArr: MA,
  harrw: UA,
  Hat: VA,
  hbar: zA,
  Hcirc: BA,
  hcirc: GA,
  hearts: HA,
  heartsuit: XA,
  hellip: KA,
  hercon: WA,
  hfr: JA,
  Hfr: YA,
  HilbertSpace: QA,
  hksearow: ZA,
  hkswarow: eD,
  hoarr: tD,
  homtht: nD,
  hookleftarrow: rD,
  hookrightarrow: oD,
  hopf: sD,
  Hopf: iD,
  horbar: aD,
  HorizontalLine: cD,
  hscr: lD,
  Hscr: uD,
  hslash: pD,
  Hstrok: dD,
  hstrok: fD,
  HumpDownHump: mD,
  HumpEqual: hD,
  hybull: yD,
  hyphen: gD,
  Iacute: vD,
  iacute: bD,
  ic: wD,
  Icirc: xD,
  icirc: _D,
  Icy: $D,
  icy: ED,
  Idot: SD,
  IEcy: TD,
  iecy: PD,
  iexcl: OD,
  iff: ND,
  ifr: RD,
  Ifr: AD,
  Igrave: DD,
  igrave: ID,
  ii: kD,
  iiiint: CD,
  iiint: jD,
  iinfin: LD,
  iiota: qD,
  IJlig: FD,
  ijlig: MD,
  Imacr: UD,
  imacr: VD,
  image: zD,
  ImaginaryI: BD,
  imagline: GD,
  imagpart: HD,
  imath: XD,
  Im: KD,
  imof: WD,
  imped: JD,
  Implies: YD,
  incare: QD,
  in: "∈",
  infin: ZD,
  infintie: eI,
  inodot: tI,
  intcal: nI,
  int: rI,
  Int: oI,
  integers: sI,
  Integral: iI,
  intercal: aI,
  Intersection: cI,
  intlarhk: lI,
  intprod: uI,
  InvisibleComma: pI,
  InvisibleTimes: dI,
  IOcy: fI,
  iocy: mI,
  Iogon: hI,
  iogon: yI,
  Iopf: gI,
  iopf: vI,
  Iota: bI,
  iota: wI,
  iprod: xI,
  iquest: _I,
  iscr: $I,
  Iscr: EI,
  isin: SI,
  isindot: TI,
  isinE: PI,
  isins: OI,
  isinsv: NI,
  isinv: RI,
  it: AI,
  Itilde: DI,
  itilde: II,
  Iukcy: kI,
  iukcy: CI,
  Iuml: jI,
  iuml: LI,
  Jcirc: qI,
  jcirc: FI,
  Jcy: MI,
  jcy: UI,
  Jfr: VI,
  jfr: zI,
  jmath: BI,
  Jopf: GI,
  jopf: HI,
  Jscr: XI,
  jscr: KI,
  Jsercy: WI,
  jsercy: JI,
  Jukcy: YI,
  jukcy: QI,
  Kappa: ZI,
  kappa: ek,
  kappav: tk,
  Kcedil: nk,
  kcedil: rk,
  Kcy: ok,
  kcy: sk,
  Kfr: ik,
  kfr: ak,
  kgreen: ck,
  KHcy: lk,
  khcy: uk,
  KJcy: pk,
  kjcy: dk,
  Kopf: fk,
  kopf: mk,
  Kscr: hk,
  kscr: yk,
  lAarr: gk,
  Lacute: vk,
  lacute: bk,
  laemptyv: wk,
  lagran: xk,
  Lambda: _k,
  lambda: $k,
  lang: Ek,
  Lang: Sk,
  langd: Tk,
  langle: Pk,
  lap: Ok,
  Laplacetrf: Nk,
  laquo: Rk,
  larrb: Ak,
  larrbfs: Dk,
  larr: Ik,
  Larr: kk,
  lArr: Ck,
  larrfs: jk,
  larrhk: Lk,
  larrlp: qk,
  larrpl: Fk,
  larrsim: Mk,
  larrtl: Uk,
  latail: Vk,
  lAtail: zk,
  lat: Bk,
  late: Gk,
  lates: Hk,
  lbarr: Xk,
  lBarr: Kk,
  lbbrk: Wk,
  lbrace: Jk,
  lbrack: Yk,
  lbrke: Qk,
  lbrksld: Zk,
  lbrkslu: eC,
  Lcaron: tC,
  lcaron: nC,
  Lcedil: rC,
  lcedil: oC,
  lceil: sC,
  lcub: iC,
  Lcy: aC,
  lcy: cC,
  ldca: lC,
  ldquo: uC,
  ldquor: pC,
  ldrdhar: dC,
  ldrushar: fC,
  ldsh: mC,
  le: hC,
  lE: yC,
  LeftAngleBracket: gC,
  LeftArrowBar: vC,
  leftarrow: bC,
  LeftArrow: wC,
  Leftarrow: xC,
  LeftArrowRightArrow: _C,
  leftarrowtail: $C,
  LeftCeiling: EC,
  LeftDoubleBracket: SC,
  LeftDownTeeVector: TC,
  LeftDownVectorBar: PC,
  LeftDownVector: OC,
  LeftFloor: NC,
  leftharpoondown: RC,
  leftharpoonup: AC,
  leftleftarrows: DC,
  leftrightarrow: IC,
  LeftRightArrow: kC,
  Leftrightarrow: CC,
  leftrightarrows: jC,
  leftrightharpoons: LC,
  leftrightsquigarrow: qC,
  LeftRightVector: FC,
  LeftTeeArrow: MC,
  LeftTee: UC,
  LeftTeeVector: VC,
  leftthreetimes: zC,
  LeftTriangleBar: BC,
  LeftTriangle: GC,
  LeftTriangleEqual: HC,
  LeftUpDownVector: XC,
  LeftUpTeeVector: KC,
  LeftUpVectorBar: WC,
  LeftUpVector: JC,
  LeftVectorBar: YC,
  LeftVector: QC,
  lEg: ZC,
  leg: ej,
  leq: tj,
  leqq: nj,
  leqslant: rj,
  lescc: oj,
  les: sj,
  lesdot: ij,
  lesdoto: aj,
  lesdotor: cj,
  lesg: lj,
  lesges: uj,
  lessapprox: pj,
  lessdot: dj,
  lesseqgtr: fj,
  lesseqqgtr: mj,
  LessEqualGreater: hj,
  LessFullEqual: yj,
  LessGreater: gj,
  lessgtr: vj,
  LessLess: bj,
  lesssim: wj,
  LessSlantEqual: xj,
  LessTilde: _j,
  lfisht: $j,
  lfloor: Ej,
  Lfr: Sj,
  lfr: Tj,
  lg: Pj,
  lgE: Oj,
  lHar: Nj,
  lhard: Rj,
  lharu: Aj,
  lharul: Dj,
  lhblk: Ij,
  LJcy: kj,
  ljcy: Cj,
  llarr: jj,
  ll: Lj,
  Ll: qj,
  llcorner: Fj,
  Lleftarrow: Mj,
  llhard: Uj,
  lltri: Vj,
  Lmidot: zj,
  lmidot: Bj,
  lmoustache: Gj,
  lmoust: Hj,
  lnap: Xj,
  lnapprox: Kj,
  lne: Wj,
  lnE: Jj,
  lneq: Yj,
  lneqq: Qj,
  lnsim: Zj,
  loang: eL,
  loarr: tL,
  lobrk: nL,
  longleftarrow: rL,
  LongLeftArrow: oL,
  Longleftarrow: sL,
  longleftrightarrow: iL,
  LongLeftRightArrow: aL,
  Longleftrightarrow: cL,
  longmapsto: lL,
  longrightarrow: uL,
  LongRightArrow: pL,
  Longrightarrow: dL,
  looparrowleft: fL,
  looparrowright: mL,
  lopar: hL,
  Lopf: yL,
  lopf: gL,
  loplus: vL,
  lotimes: bL,
  lowast: wL,
  lowbar: xL,
  LowerLeftArrow: _L,
  LowerRightArrow: $L,
  loz: EL,
  lozenge: SL,
  lozf: TL,
  lpar: PL,
  lparlt: OL,
  lrarr: NL,
  lrcorner: RL,
  lrhar: AL,
  lrhard: DL,
  lrm: IL,
  lrtri: kL,
  lsaquo: CL,
  lscr: jL,
  Lscr: LL,
  lsh: qL,
  Lsh: FL,
  lsim: ML,
  lsime: UL,
  lsimg: VL,
  lsqb: zL,
  lsquo: BL,
  lsquor: GL,
  Lstrok: HL,
  lstrok: XL,
  ltcc: KL,
  ltcir: WL,
  lt: JL,
  LT: YL,
  Lt: QL,
  ltdot: ZL,
  lthree: eq,
  ltimes: tq,
  ltlarr: nq,
  ltquest: rq,
  ltri: oq,
  ltrie: sq,
  ltrif: iq,
  ltrPar: aq,
  lurdshar: cq,
  luruhar: lq,
  lvertneqq: uq,
  lvnE: pq,
  macr: dq,
  male: fq,
  malt: mq,
  maltese: hq,
  Map: "⤅",
  map: yq,
  mapsto: gq,
  mapstodown: vq,
  mapstoleft: bq,
  mapstoup: wq,
  marker: xq,
  mcomma: _q,
  Mcy: $q,
  mcy: Eq,
  mdash: Sq,
  mDDot: Tq,
  measuredangle: Pq,
  MediumSpace: Oq,
  Mellintrf: Nq,
  Mfr: Rq,
  mfr: Aq,
  mho: Dq,
  micro: Iq,
  midast: kq,
  midcir: Cq,
  mid: jq,
  middot: Lq,
  minusb: qq,
  minus: Fq,
  minusd: Mq,
  minusdu: Uq,
  MinusPlus: Vq,
  mlcp: zq,
  mldr: Bq,
  mnplus: Gq,
  models: Hq,
  Mopf: Xq,
  mopf: Kq,
  mp: Wq,
  mscr: Jq,
  Mscr: Yq,
  mstpos: Qq,
  Mu: Zq,
  mu: eF,
  multimap: tF,
  mumap: nF,
  nabla: rF,
  Nacute: oF,
  nacute: sF,
  nang: iF,
  nap: aF,
  napE: cF,
  napid: lF,
  napos: uF,
  napprox: pF,
  natural: dF,
  naturals: fF,
  natur: mF,
  nbsp: hF,
  nbump: yF,
  nbumpe: gF,
  ncap: vF,
  Ncaron: bF,
  ncaron: wF,
  Ncedil: xF,
  ncedil: _F,
  ncong: $F,
  ncongdot: EF,
  ncup: SF,
  Ncy: TF,
  ncy: PF,
  ndash: OF,
  nearhk: NF,
  nearr: RF,
  neArr: AF,
  nearrow: DF,
  ne: IF,
  nedot: kF,
  NegativeMediumSpace: CF,
  NegativeThickSpace: jF,
  NegativeThinSpace: LF,
  NegativeVeryThinSpace: qF,
  nequiv: FF,
  nesear: MF,
  nesim: UF,
  NestedGreaterGreater: VF,
  NestedLessLess: zF,
  NewLine: BF,
  nexist: GF,
  nexists: HF,
  Nfr: XF,
  nfr: KF,
  ngE: WF,
  nge: JF,
  ngeq: YF,
  ngeqq: QF,
  ngeqslant: ZF,
  nges: eM,
  nGg: tM,
  ngsim: nM,
  nGt: rM,
  ngt: oM,
  ngtr: sM,
  nGtv: iM,
  nharr: aM,
  nhArr: cM,
  nhpar: lM,
  ni: uM,
  nis: pM,
  nisd: dM,
  niv: fM,
  NJcy: mM,
  njcy: hM,
  nlarr: yM,
  nlArr: gM,
  nldr: vM,
  nlE: bM,
  nle: wM,
  nleftarrow: xM,
  nLeftarrow: _M,
  nleftrightarrow: $M,
  nLeftrightarrow: EM,
  nleq: SM,
  nleqq: TM,
  nleqslant: PM,
  nles: OM,
  nless: NM,
  nLl: RM,
  nlsim: AM,
  nLt: DM,
  nlt: IM,
  nltri: kM,
  nltrie: CM,
  nLtv: jM,
  nmid: LM,
  NoBreak: qM,
  NonBreakingSpace: FM,
  nopf: MM,
  Nopf: UM,
  Not: VM,
  not: zM,
  NotCongruent: BM,
  NotCupCap: GM,
  NotDoubleVerticalBar: HM,
  NotElement: XM,
  NotEqual: KM,
  NotEqualTilde: WM,
  NotExists: JM,
  NotGreater: YM,
  NotGreaterEqual: QM,
  NotGreaterFullEqual: ZM,
  NotGreaterGreater: e2,
  NotGreaterLess: t2,
  NotGreaterSlantEqual: n2,
  NotGreaterTilde: r2,
  NotHumpDownHump: o2,
  NotHumpEqual: s2,
  notin: i2,
  notindot: a2,
  notinE: c2,
  notinva: l2,
  notinvb: u2,
  notinvc: p2,
  NotLeftTriangleBar: d2,
  NotLeftTriangle: f2,
  NotLeftTriangleEqual: m2,
  NotLess: h2,
  NotLessEqual: y2,
  NotLessGreater: g2,
  NotLessLess: v2,
  NotLessSlantEqual: b2,
  NotLessTilde: w2,
  NotNestedGreaterGreater: x2,
  NotNestedLessLess: _2,
  notni: $2,
  notniva: E2,
  notnivb: S2,
  notnivc: T2,
  NotPrecedes: P2,
  NotPrecedesEqual: O2,
  NotPrecedesSlantEqual: N2,
  NotReverseElement: R2,
  NotRightTriangleBar: A2,
  NotRightTriangle: D2,
  NotRightTriangleEqual: I2,
  NotSquareSubset: k2,
  NotSquareSubsetEqual: C2,
  NotSquareSuperset: j2,
  NotSquareSupersetEqual: L2,
  NotSubset: q2,
  NotSubsetEqual: F2,
  NotSucceeds: M2,
  NotSucceedsEqual: U2,
  NotSucceedsSlantEqual: V2,
  NotSucceedsTilde: z2,
  NotSuperset: B2,
  NotSupersetEqual: G2,
  NotTilde: H2,
  NotTildeEqual: X2,
  NotTildeFullEqual: K2,
  NotTildeTilde: W2,
  NotVerticalBar: J2,
  nparallel: Y2,
  npar: Q2,
  nparsl: Z2,
  npart: eU,
  npolint: tU,
  npr: nU,
  nprcue: rU,
  nprec: oU,
  npreceq: sU,
  npre: iU,
  nrarrc: aU,
  nrarr: cU,
  nrArr: lU,
  nrarrw: uU,
  nrightarrow: pU,
  nRightarrow: dU,
  nrtri: fU,
  nrtrie: mU,
  nsc: hU,
  nsccue: yU,
  nsce: gU,
  Nscr: vU,
  nscr: bU,
  nshortmid: wU,
  nshortparallel: xU,
  nsim: _U,
  nsime: $U,
  nsimeq: EU,
  nsmid: SU,
  nspar: TU,
  nsqsube: PU,
  nsqsupe: OU,
  nsub: NU,
  nsubE: RU,
  nsube: AU,
  nsubset: DU,
  nsubseteq: IU,
  nsubseteqq: kU,
  nsucc: CU,
  nsucceq: jU,
  nsup: LU,
  nsupE: qU,
  nsupe: FU,
  nsupset: MU,
  nsupseteq: UU,
  nsupseteqq: VU,
  ntgl: zU,
  Ntilde: BU,
  ntilde: GU,
  ntlg: HU,
  ntriangleleft: XU,
  ntrianglelefteq: KU,
  ntriangleright: WU,
  ntrianglerighteq: JU,
  Nu: YU,
  nu: QU,
  num: ZU,
  numero: e3,
  numsp: t3,
  nvap: n3,
  nvdash: r3,
  nvDash: o3,
  nVdash: s3,
  nVDash: i3,
  nvge: a3,
  nvgt: c3,
  nvHarr: l3,
  nvinfin: u3,
  nvlArr: p3,
  nvle: d3,
  nvlt: f3,
  nvltrie: m3,
  nvrArr: h3,
  nvrtrie: y3,
  nvsim: g3,
  nwarhk: v3,
  nwarr: b3,
  nwArr: w3,
  nwarrow: x3,
  nwnear: _3,
  Oacute: $3,
  oacute: E3,
  oast: S3,
  Ocirc: T3,
  ocirc: P3,
  ocir: O3,
  Ocy: N3,
  ocy: R3,
  odash: A3,
  Odblac: D3,
  odblac: I3,
  odiv: k3,
  odot: C3,
  odsold: j3,
  OElig: L3,
  oelig: q3,
  ofcir: F3,
  Ofr: M3,
  ofr: U3,
  ogon: V3,
  Ograve: z3,
  ograve: B3,
  ogt: G3,
  ohbar: H3,
  ohm: X3,
  oint: K3,
  olarr: W3,
  olcir: J3,
  olcross: Y3,
  oline: Q3,
  olt: Z3,
  Omacr: eV,
  omacr: tV,
  Omega: nV,
  omega: rV,
  Omicron: oV,
  omicron: sV,
  omid: iV,
  ominus: aV,
  Oopf: cV,
  oopf: lV,
  opar: uV,
  OpenCurlyDoubleQuote: pV,
  OpenCurlyQuote: dV,
  operp: fV,
  oplus: mV,
  orarr: hV,
  Or: yV,
  or: gV,
  ord: vV,
  order: bV,
  orderof: wV,
  ordf: xV,
  ordm: _V,
  origof: $V,
  oror: EV,
  orslope: SV,
  orv: TV,
  oS: PV,
  Oscr: OV,
  oscr: NV,
  Oslash: RV,
  oslash: AV,
  osol: DV,
  Otilde: IV,
  otilde: kV,
  otimesas: CV,
  Otimes: jV,
  otimes: LV,
  Ouml: qV,
  ouml: FV,
  ovbar: MV,
  OverBar: UV,
  OverBrace: VV,
  OverBracket: zV,
  OverParenthesis: BV,
  para: GV,
  parallel: HV,
  par: XV,
  parsim: KV,
  parsl: WV,
  part: JV,
  PartialD: YV,
  Pcy: QV,
  pcy: ZV,
  percnt: ez,
  period: tz,
  permil: nz,
  perp: rz,
  pertenk: oz,
  Pfr: sz,
  pfr: iz,
  Phi: az,
  phi: cz,
  phiv: lz,
  phmmat: uz,
  phone: pz,
  Pi: dz,
  pi: fz,
  pitchfork: mz,
  piv: hz,
  planck: yz,
  planckh: gz,
  plankv: vz,
  plusacir: bz,
  plusb: wz,
  pluscir: xz,
  plus: _z,
  plusdo: $z,
  plusdu: Ez,
  pluse: Sz,
  PlusMinus: Tz,
  plusmn: Pz,
  plussim: Oz,
  plustwo: Nz,
  pm: Rz,
  Poincareplane: Az,
  pointint: Dz,
  popf: Iz,
  Popf: kz,
  pound: Cz,
  prap: jz,
  Pr: Lz,
  pr: qz,
  prcue: Fz,
  precapprox: Mz,
  prec: Uz,
  preccurlyeq: Vz,
  Precedes: zz,
  PrecedesEqual: Bz,
  PrecedesSlantEqual: Gz,
  PrecedesTilde: Hz,
  preceq: Xz,
  precnapprox: Kz,
  precneqq: Wz,
  precnsim: Jz,
  pre: Yz,
  prE: Qz,
  precsim: Zz,
  prime: eB,
  Prime: tB,
  primes: nB,
  prnap: rB,
  prnE: oB,
  prnsim: sB,
  prod: iB,
  Product: aB,
  profalar: cB,
  profline: lB,
  profsurf: uB,
  prop: pB,
  Proportional: dB,
  Proportion: fB,
  propto: mB,
  prsim: hB,
  prurel: yB,
  Pscr: gB,
  pscr: vB,
  Psi: bB,
  psi: wB,
  puncsp: xB,
  Qfr: _B,
  qfr: $B,
  qint: EB,
  qopf: SB,
  Qopf: TB,
  qprime: PB,
  Qscr: OB,
  qscr: NB,
  quaternions: RB,
  quatint: AB,
  quest: DB,
  questeq: IB,
  quot: kB,
  QUOT: CB,
  rAarr: jB,
  race: LB,
  Racute: qB,
  racute: FB,
  radic: MB,
  raemptyv: UB,
  rang: VB,
  Rang: zB,
  rangd: BB,
  range: GB,
  rangle: HB,
  raquo: XB,
  rarrap: KB,
  rarrb: WB,
  rarrbfs: JB,
  rarrc: YB,
  rarr: QB,
  Rarr: ZB,
  rArr: e4,
  rarrfs: t4,
  rarrhk: n4,
  rarrlp: r4,
  rarrpl: o4,
  rarrsim: s4,
  Rarrtl: i4,
  rarrtl: a4,
  rarrw: c4,
  ratail: l4,
  rAtail: u4,
  ratio: p4,
  rationals: d4,
  rbarr: f4,
  rBarr: m4,
  RBarr: h4,
  rbbrk: y4,
  rbrace: g4,
  rbrack: v4,
  rbrke: b4,
  rbrksld: w4,
  rbrkslu: x4,
  Rcaron: _4,
  rcaron: $4,
  Rcedil: E4,
  rcedil: S4,
  rceil: T4,
  rcub: P4,
  Rcy: O4,
  rcy: N4,
  rdca: R4,
  rdldhar: A4,
  rdquo: D4,
  rdquor: I4,
  rdsh: k4,
  real: C4,
  realine: j4,
  realpart: L4,
  reals: q4,
  Re: F4,
  rect: M4,
  reg: U4,
  REG: V4,
  ReverseElement: z4,
  ReverseEquilibrium: B4,
  ReverseUpEquilibrium: G4,
  rfisht: H4,
  rfloor: X4,
  rfr: K4,
  Rfr: W4,
  rHar: J4,
  rhard: Y4,
  rharu: Q4,
  rharul: Z4,
  Rho: e9,
  rho: t9,
  rhov: n9,
  RightAngleBracket: r9,
  RightArrowBar: o9,
  rightarrow: s9,
  RightArrow: i9,
  Rightarrow: a9,
  RightArrowLeftArrow: c9,
  rightarrowtail: l9,
  RightCeiling: u9,
  RightDoubleBracket: p9,
  RightDownTeeVector: d9,
  RightDownVectorBar: f9,
  RightDownVector: m9,
  RightFloor: h9,
  rightharpoondown: y9,
  rightharpoonup: g9,
  rightleftarrows: v9,
  rightleftharpoons: b9,
  rightrightarrows: w9,
  rightsquigarrow: x9,
  RightTeeArrow: _9,
  RightTee: $9,
  RightTeeVector: E9,
  rightthreetimes: S9,
  RightTriangleBar: T9,
  RightTriangle: P9,
  RightTriangleEqual: O9,
  RightUpDownVector: N9,
  RightUpTeeVector: R9,
  RightUpVectorBar: A9,
  RightUpVector: D9,
  RightVectorBar: I9,
  RightVector: k9,
  ring: C9,
  risingdotseq: j9,
  rlarr: L9,
  rlhar: q9,
  rlm: F9,
  rmoustache: M9,
  rmoust: U9,
  rnmid: V9,
  roang: z9,
  roarr: B9,
  robrk: G9,
  ropar: H9,
  ropf: X9,
  Ropf: K9,
  roplus: W9,
  rotimes: J9,
  RoundImplies: Y9,
  rpar: Q9,
  rpargt: Z9,
  rppolint: e8,
  rrarr: t8,
  Rrightarrow: n8,
  rsaquo: r8,
  rscr: o8,
  Rscr: s8,
  rsh: i8,
  Rsh: a8,
  rsqb: c8,
  rsquo: l8,
  rsquor: u8,
  rthree: p8,
  rtimes: d8,
  rtri: f8,
  rtrie: m8,
  rtrif: h8,
  rtriltri: y8,
  RuleDelayed: g8,
  ruluhar: v8,
  rx: b8,
  Sacute: w8,
  sacute: x8,
  sbquo: _8,
  scap: $8,
  Scaron: E8,
  scaron: S8,
  Sc: T8,
  sc: P8,
  sccue: O8,
  sce: N8,
  scE: R8,
  Scedil: A8,
  scedil: D8,
  Scirc: I8,
  scirc: k8,
  scnap: C8,
  scnE: j8,
  scnsim: L8,
  scpolint: q8,
  scsim: F8,
  Scy: M8,
  scy: U8,
  sdotb: V8,
  sdot: z8,
  sdote: B8,
  searhk: G8,
  searr: H8,
  seArr: X8,
  searrow: K8,
  sect: W8,
  semi: J8,
  seswar: Y8,
  setminus: Q8,
  setmn: Z8,
  sext: eG,
  Sfr: tG,
  sfr: nG,
  sfrown: rG,
  sharp: oG,
  SHCHcy: sG,
  shchcy: iG,
  SHcy: aG,
  shcy: cG,
  ShortDownArrow: lG,
  ShortLeftArrow: uG,
  shortmid: pG,
  shortparallel: dG,
  ShortRightArrow: fG,
  ShortUpArrow: mG,
  shy: hG,
  Sigma: yG,
  sigma: gG,
  sigmaf: vG,
  sigmav: bG,
  sim: wG,
  simdot: xG,
  sime: _G,
  simeq: $G,
  simg: EG,
  simgE: SG,
  siml: TG,
  simlE: PG,
  simne: OG,
  simplus: NG,
  simrarr: RG,
  slarr: AG,
  SmallCircle: DG,
  smallsetminus: IG,
  smashp: kG,
  smeparsl: CG,
  smid: jG,
  smile: LG,
  smt: qG,
  smte: FG,
  smtes: MG,
  SOFTcy: UG,
  softcy: VG,
  solbar: zG,
  solb: BG,
  sol: GG,
  Sopf: HG,
  sopf: XG,
  spades: KG,
  spadesuit: WG,
  spar: JG,
  sqcap: YG,
  sqcaps: QG,
  sqcup: ZG,
  sqcups: eH,
  Sqrt: tH,
  sqsub: nH,
  sqsube: rH,
  sqsubset: oH,
  sqsubseteq: sH,
  sqsup: iH,
  sqsupe: aH,
  sqsupset: cH,
  sqsupseteq: lH,
  square: uH,
  Square: pH,
  SquareIntersection: dH,
  SquareSubset: fH,
  SquareSubsetEqual: mH,
  SquareSuperset: hH,
  SquareSupersetEqual: yH,
  SquareUnion: gH,
  squarf: vH,
  squ: bH,
  squf: wH,
  srarr: xH,
  Sscr: _H,
  sscr: $H,
  ssetmn: EH,
  ssmile: SH,
  sstarf: TH,
  Star: PH,
  star: OH,
  starf: NH,
  straightepsilon: RH,
  straightphi: AH,
  strns: DH,
  sub: IH,
  Sub: kH,
  subdot: CH,
  subE: jH,
  sube: LH,
  subedot: qH,
  submult: FH,
  subnE: MH,
  subne: UH,
  subplus: VH,
  subrarr: zH,
  subset: BH,
  Subset: GH,
  subseteq: HH,
  subseteqq: XH,
  SubsetEqual: KH,
  subsetneq: WH,
  subsetneqq: JH,
  subsim: YH,
  subsub: QH,
  subsup: ZH,
  succapprox: e6,
  succ: t6,
  succcurlyeq: n6,
  Succeeds: r6,
  SucceedsEqual: o6,
  SucceedsSlantEqual: s6,
  SucceedsTilde: i6,
  succeq: a6,
  succnapprox: c6,
  succneqq: l6,
  succnsim: u6,
  succsim: p6,
  SuchThat: d6,
  sum: f6,
  Sum: m6,
  sung: h6,
  sup1: y6,
  sup2: g6,
  sup3: v6,
  sup: b6,
  Sup: w6,
  supdot: x6,
  supdsub: _6,
  supE: $6,
  supe: E6,
  supedot: S6,
  Superset: T6,
  SupersetEqual: P6,
  suphsol: O6,
  suphsub: N6,
  suplarr: R6,
  supmult: A6,
  supnE: D6,
  supne: I6,
  supplus: k6,
  supset: C6,
  Supset: j6,
  supseteq: L6,
  supseteqq: q6,
  supsetneq: F6,
  supsetneqq: M6,
  supsim: U6,
  supsub: V6,
  supsup: z6,
  swarhk: B6,
  swarr: G6,
  swArr: H6,
  swarrow: X6,
  swnwar: K6,
  szlig: W6,
  Tab: J6,
  target: Y6,
  Tau: Q6,
  tau: Z6,
  tbrk: e5,
  Tcaron: t5,
  tcaron: n5,
  Tcedil: r5,
  tcedil: o5,
  Tcy: s5,
  tcy: i5,
  tdot: a5,
  telrec: c5,
  Tfr: l5,
  tfr: u5,
  there4: p5,
  therefore: d5,
  Therefore: f5,
  Theta: m5,
  theta: h5,
  thetasym: y5,
  thetav: g5,
  thickapprox: v5,
  thicksim: b5,
  ThickSpace: w5,
  ThinSpace: x5,
  thinsp: _5,
  thkap: $5,
  thksim: E5,
  THORN: S5,
  thorn: T5,
  tilde: P5,
  Tilde: O5,
  TildeEqual: N5,
  TildeFullEqual: R5,
  TildeTilde: A5,
  timesbar: D5,
  timesb: I5,
  times: k5,
  timesd: C5,
  tint: j5,
  toea: L5,
  topbot: q5,
  topcir: F5,
  top: M5,
  Topf: U5,
  topf: V5,
  topfork: z5,
  tosa: B5,
  tprime: G5,
  trade: H5,
  TRADE: X5,
  triangle: K5,
  triangledown: W5,
  triangleleft: J5,
  trianglelefteq: Y5,
  triangleq: Q5,
  triangleright: Z5,
  trianglerighteq: eX,
  tridot: tX,
  trie: nX,
  triminus: rX,
  TripleDot: oX,
  triplus: sX,
  trisb: iX,
  tritime: aX,
  trpezium: cX,
  Tscr: lX,
  tscr: uX,
  TScy: pX,
  tscy: dX,
  TSHcy: fX,
  tshcy: mX,
  Tstrok: hX,
  tstrok: yX,
  twixt: gX,
  twoheadleftarrow: vX,
  twoheadrightarrow: bX,
  Uacute: wX,
  uacute: xX,
  uarr: _X,
  Uarr: $X,
  uArr: EX,
  Uarrocir: SX,
  Ubrcy: TX,
  ubrcy: PX,
  Ubreve: OX,
  ubreve: NX,
  Ucirc: RX,
  ucirc: AX,
  Ucy: DX,
  ucy: IX,
  udarr: kX,
  Udblac: CX,
  udblac: jX,
  udhar: LX,
  ufisht: qX,
  Ufr: FX,
  ufr: MX,
  Ugrave: UX,
  ugrave: VX,
  uHar: zX,
  uharl: BX,
  uharr: GX,
  uhblk: HX,
  ulcorn: XX,
  ulcorner: KX,
  ulcrop: WX,
  ultri: JX,
  Umacr: YX,
  umacr: QX,
  uml: ZX,
  UnderBar: eK,
  UnderBrace: tK,
  UnderBracket: nK,
  UnderParenthesis: rK,
  Union: oK,
  UnionPlus: sK,
  Uogon: iK,
  uogon: aK,
  Uopf: cK,
  uopf: lK,
  UpArrowBar: uK,
  uparrow: pK,
  UpArrow: dK,
  Uparrow: fK,
  UpArrowDownArrow: mK,
  updownarrow: hK,
  UpDownArrow: yK,
  Updownarrow: gK,
  UpEquilibrium: vK,
  upharpoonleft: bK,
  upharpoonright: wK,
  uplus: xK,
  UpperLeftArrow: _K,
  UpperRightArrow: $K,
  upsi: EK,
  Upsi: SK,
  upsih: TK,
  Upsilon: PK,
  upsilon: OK,
  UpTeeArrow: NK,
  UpTee: RK,
  upuparrows: AK,
  urcorn: DK,
  urcorner: IK,
  urcrop: kK,
  Uring: CK,
  uring: jK,
  urtri: LK,
  Uscr: qK,
  uscr: FK,
  utdot: MK,
  Utilde: UK,
  utilde: VK,
  utri: zK,
  utrif: BK,
  uuarr: GK,
  Uuml: HK,
  uuml: XK,
  uwangle: KK,
  vangrt: WK,
  varepsilon: JK,
  varkappa: YK,
  varnothing: QK,
  varphi: ZK,
  varpi: e7,
  varpropto: t7,
  varr: n7,
  vArr: r7,
  varrho: o7,
  varsigma: s7,
  varsubsetneq: i7,
  varsubsetneqq: a7,
  varsupsetneq: c7,
  varsupsetneqq: l7,
  vartheta: u7,
  vartriangleleft: p7,
  vartriangleright: d7,
  vBar: f7,
  Vbar: m7,
  vBarv: h7,
  Vcy: y7,
  vcy: g7,
  vdash: v7,
  vDash: b7,
  Vdash: w7,
  VDash: x7,
  Vdashl: _7,
  veebar: $7,
  vee: E7,
  Vee: S7,
  veeeq: T7,
  vellip: P7,
  verbar: O7,
  Verbar: N7,
  vert: R7,
  Vert: A7,
  VerticalBar: D7,
  VerticalLine: I7,
  VerticalSeparator: k7,
  VerticalTilde: C7,
  VeryThinSpace: j7,
  Vfr: L7,
  vfr: q7,
  vltri: F7,
  vnsub: M7,
  vnsup: U7,
  Vopf: V7,
  vopf: z7,
  vprop: B7,
  vrtri: G7,
  Vscr: H7,
  vscr: X7,
  vsubnE: K7,
  vsubne: W7,
  vsupnE: J7,
  vsupne: Y7,
  Vvdash: Q7,
  vzigzag: Z7,
  Wcirc: eW,
  wcirc: tW,
  wedbar: nW,
  wedge: rW,
  Wedge: oW,
  wedgeq: sW,
  weierp: iW,
  Wfr: aW,
  wfr: cW,
  Wopf: lW,
  wopf: uW,
  wp: pW,
  wr: dW,
  wreath: fW,
  Wscr: mW,
  wscr: hW,
  xcap: yW,
  xcirc: gW,
  xcup: vW,
  xdtri: bW,
  Xfr: wW,
  xfr: xW,
  xharr: _W,
  xhArr: $W,
  Xi: EW,
  xi: SW,
  xlarr: TW,
  xlArr: PW,
  xmap: OW,
  xnis: NW,
  xodot: RW,
  Xopf: AW,
  xopf: DW,
  xoplus: IW,
  xotime: kW,
  xrarr: CW,
  xrArr: jW,
  Xscr: LW,
  xscr: qW,
  xsqcup: FW,
  xuplus: MW,
  xutri: UW,
  xvee: VW,
  xwedge: zW,
  Yacute: BW,
  yacute: GW,
  YAcy: HW,
  yacy: XW,
  Ycirc: KW,
  ycirc: WW,
  Ycy: JW,
  ycy: YW,
  yen: QW,
  Yfr: ZW,
  yfr: eJ,
  YIcy: tJ,
  yicy: nJ,
  Yopf: rJ,
  yopf: oJ,
  Yscr: sJ,
  yscr: iJ,
  YUcy: aJ,
  yucy: cJ,
  yuml: lJ,
  Yuml: uJ,
  Zacute: pJ,
  zacute: dJ,
  Zcaron: fJ,
  zcaron: mJ,
  Zcy: hJ,
  zcy: yJ,
  Zdot: gJ,
  zdot: vJ,
  zeetrf: bJ,
  ZeroWidthSpace: wJ,
  Zeta: xJ,
  zeta: _J,
  zfr: $J,
  Zfr: EJ,
  ZHcy: SJ,
  zhcy: TJ,
  zigrarr: PJ,
  zopf: OJ,
  Zopf: NJ,
  Zscr: RJ,
  zscr: AJ,
  zwj: DJ,
  zwnj: IJ
}, kJ = "Á", CJ = "á", jJ = "Â", LJ = "â", qJ = "´", FJ = "Æ", MJ = "æ", UJ = "À", VJ = "à", zJ = "&", BJ = "&", GJ = "Å", HJ = "å", XJ = "Ã", KJ = "ã", WJ = "Ä", JJ = "ä", YJ = "¦", QJ = "Ç", ZJ = "ç", eY = "¸", tY = "¢", nY = "©", rY = "©", oY = "¤", sY = "°", iY = "÷", aY = "É", cY = "é", lY = "Ê", uY = "ê", pY = "È", dY = "è", fY = "Ð", mY = "ð", hY = "Ë", yY = "ë", gY = "½", vY = "¼", bY = "¾", wY = ">", xY = ">", _Y = "Í", $Y = "í", EY = "Î", SY = "î", TY = "¡", PY = "Ì", OY = "ì", NY = "¿", RY = "Ï", AY = "ï", DY = "«", IY = "<", kY = "<", CY = "¯", jY = "µ", LY = "·", qY = " ", FY = "¬", MY = "Ñ", UY = "ñ", VY = "Ó", zY = "ó", BY = "Ô", GY = "ô", HY = "Ò", XY = "ò", KY = "ª", WY = "º", JY = "Ø", YY = "ø", QY = "Õ", ZY = "õ", eQ = "Ö", tQ = "ö", nQ = "¶", rQ = "±", oQ = "£", sQ = '"', iQ = '"', aQ = "»", cQ = "®", lQ = "®", uQ = "§", pQ = "­", dQ = "¹", fQ = "²", mQ = "³", hQ = "ß", yQ = "Þ", gQ = "þ", vQ = "×", bQ = "Ú", wQ = "ú", xQ = "Û", _Q = "û", $Q = "Ù", EQ = "ù", SQ = "¨", TQ = "Ü", PQ = "ü", OQ = "Ý", NQ = "ý", RQ = "¥", AQ = "ÿ", DQ = {
  Aacute: kJ,
  aacute: CJ,
  Acirc: jJ,
  acirc: LJ,
  acute: qJ,
  AElig: FJ,
  aelig: MJ,
  Agrave: UJ,
  agrave: VJ,
  amp: zJ,
  AMP: BJ,
  Aring: GJ,
  aring: HJ,
  Atilde: XJ,
  atilde: KJ,
  Auml: WJ,
  auml: JJ,
  brvbar: YJ,
  Ccedil: QJ,
  ccedil: ZJ,
  cedil: eY,
  cent: tY,
  copy: nY,
  COPY: rY,
  curren: oY,
  deg: sY,
  divide: iY,
  Eacute: aY,
  eacute: cY,
  Ecirc: lY,
  ecirc: uY,
  Egrave: pY,
  egrave: dY,
  ETH: fY,
  eth: mY,
  Euml: hY,
  euml: yY,
  frac12: gY,
  frac14: vY,
  frac34: bY,
  gt: wY,
  GT: xY,
  Iacute: _Y,
  iacute: $Y,
  Icirc: EY,
  icirc: SY,
  iexcl: TY,
  Igrave: PY,
  igrave: OY,
  iquest: NY,
  Iuml: RY,
  iuml: AY,
  laquo: DY,
  lt: IY,
  LT: kY,
  macr: CY,
  micro: jY,
  middot: LY,
  nbsp: qY,
  not: FY,
  Ntilde: MY,
  ntilde: UY,
  Oacute: VY,
  oacute: zY,
  Ocirc: BY,
  ocirc: GY,
  Ograve: HY,
  ograve: XY,
  ordf: KY,
  ordm: WY,
  Oslash: JY,
  oslash: YY,
  Otilde: QY,
  otilde: ZY,
  Ouml: eQ,
  ouml: tQ,
  para: nQ,
  plusmn: rQ,
  pound: oQ,
  quot: sQ,
  QUOT: iQ,
  raquo: aQ,
  reg: cQ,
  REG: lQ,
  sect: uQ,
  shy: pQ,
  sup1: dQ,
  sup2: fQ,
  sup3: mQ,
  szlig: hQ,
  THORN: yQ,
  thorn: gQ,
  times: vQ,
  Uacute: bQ,
  uacute: wQ,
  Ucirc: xQ,
  ucirc: _Q,
  Ugrave: $Q,
  ugrave: EQ,
  uml: SQ,
  Uuml: TQ,
  uuml: PQ,
  Yacute: OQ,
  yacute: NQ,
  yen: RQ,
  yuml: AQ
}, IQ = "&", kQ = "'", CQ = ">", jQ = "<", LQ = '"', Fy = {
  amp: IQ,
  apos: kQ,
  gt: CQ,
  lt: jQ,
  quot: LQ
};
var pu = {};
const qQ = {
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
var FQ = re && re.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(pu, "__esModule", { value: !0 });
var Pf = FQ(qQ), MQ = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.fromCodePoint || function(e) {
    var t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function UQ(e) {
  return e >= 55296 && e <= 57343 || e > 1114111 ? "�" : (e in Pf.default && (e = Pf.default[e]), MQ(e));
}
pu.default = UQ;
var Qi = re && re.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(En, "__esModule", { value: !0 });
En.decodeHTML = En.decodeHTMLStrict = En.decodeXML = void 0;
var ml = Qi(qy), VQ = Qi(DQ), zQ = Qi(Fy), Of = Qi(pu), BQ = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
En.decodeXML = My(zQ.default);
En.decodeHTMLStrict = My(ml.default);
function My(e) {
  var t = Uy(e);
  return function(n) {
    return String(n).replace(BQ, t);
  };
}
var Nf = function(e, t) {
  return e < t ? 1 : -1;
};
En.decodeHTML = function() {
  for (var e = Object.keys(VQ.default).sort(Nf), t = Object.keys(ml.default).sort(Nf), n = 0, r = 0; n < t.length; n++)
    e[r] === t[n] ? (t[n] += ";?", r++) : t[n] += ";";
  var o = new RegExp("&(?:" + t.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), s = Uy(ml.default);
  function i(a) {
    return a.substr(-1) !== ";" && (a += ";"), s(a);
  }
  return function(a) {
    return String(a).replace(o, i);
  };
}();
function Uy(e) {
  return function(n) {
    if (n.charAt(1) === "#") {
      var r = n.charAt(2);
      return r === "X" || r === "x" ? Of.default(parseInt(n.substr(3), 16)) : Of.default(parseInt(n.substr(2), 10));
    }
    return e[n.slice(1, -1)] || n;
  };
}
var Et = {}, Vy = re && re.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Et, "__esModule", { value: !0 });
Et.escapeUTF8 = Et.escape = Et.encodeNonAsciiHTML = Et.encodeHTML = Et.encodeXML = void 0;
var GQ = Vy(Fy), zy = Gy(GQ.default), By = Hy(zy);
Et.encodeXML = Wy(zy);
var HQ = Vy(qy), du = Gy(HQ.default), XQ = Hy(du);
Et.encodeHTML = WQ(du, XQ);
Et.encodeNonAsciiHTML = Wy(du);
function Gy(e) {
  return Object.keys(e).sort().reduce(function(t, n) {
    return t[e[n]] = "&" + n + ";", t;
  }, {});
}
function Hy(e) {
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
var Xy = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, KQ = (
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
function Zi(e) {
  return "&#x" + (e.length > 1 ? KQ(e) : e.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function WQ(e, t) {
  return function(n) {
    return n.replace(t, function(r) {
      return e[r];
    }).replace(Xy, Zi);
  };
}
var Ky = new RegExp(By.source + "|" + Xy.source, "g");
function JQ(e) {
  return e.replace(Ky, Zi);
}
Et.escape = JQ;
function YQ(e) {
  return e.replace(By, Zi);
}
Et.escapeUTF8 = YQ;
function Wy(e) {
  return function(t) {
    return t.replace(Ky, function(n) {
      return e[n] || Zi(n);
    });
  };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXMLStrict = e.decodeHTML5Strict = e.decodeHTML4Strict = e.decodeHTML5 = e.decodeHTML4 = e.decodeHTMLStrict = e.decodeHTML = e.decodeXML = e.encodeHTML5 = e.encodeHTML4 = e.escapeUTF8 = e.escape = e.encodeNonAsciiHTML = e.encodeHTML = e.encodeXML = e.encode = e.decodeStrict = e.decode = void 0;
  var t = En, n = Et;
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
  var a = En;
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
})(Ly);
const Nn = jy.exports = {}, QQ = Ly, ZQ = wn;
Nn.stripHtml = function(e) {
  return e = e.replace(/([^\n])<\/?(h|br|p|ul|ol|li|blockquote|section|table|tr|div)(?:.|\n)*?>([^\n])/gm, `$1
$3`), e = e.replace(/<(?:.|\n)*?>/gm, ""), e;
};
Nn.getSnippet = function(e) {
  return QQ.decodeHTML(Nn.stripHtml(e)).trim();
};
Nn.getLink = function(e, t, n) {
  if (e) {
    for (let r = 0; r < e.length; ++r)
      if (e[r].$.rel === t) return e[r].$.href;
    if (e[n]) return e[n].$.href;
  }
};
Nn.getContent = function(e) {
  return typeof e._ == "string" ? e._ : typeof e == "object" ? new ZQ.Builder({ headless: !0, explicitRoot: !0, rootName: "div", renderOpts: { pretty: !1 } }).buildObject(e) : e;
};
Nn.copyFromXML = function(e, t, n) {
  n.forEach(function(r) {
    let o = r, s = r, i = {};
    Array.isArray(r) && (o = r[0], s = r[1], r.length > 2 && (i = r[2]));
    const { keepArray: a, includeSnippet: c } = i;
    e[o] !== void 0 && (t[s] = a ? e[o] : e[o][0]), t[s] && typeof t[s]._ == "string" && (t[s] = t[s]._), c && t[s] && typeof t[s] == "string" && (t[s + "Snippet"] = Nn.getSnippet(t[s]));
  });
};
Nn.maybePromisify = function(e, t) {
  return e ? t.then(
    (n) => setTimeout(() => e(null, n)),
    (n) => setTimeout(() => e(n))
  ) : t;
};
const eZ = "utf8", tZ = /(encoding|charset)\s*=\s*(\S+)/, nZ = ["ascii", "utf8", "utf16le", "ucs2", "base64", "latin1", "binary", "hex"], rZ = {
  "utf-8": "utf8",
  "iso-8859-1": "latin1"
};
Nn.getEncodingFromContentType = function(e) {
  e = e || "";
  let n = (e.match(tZ) || [])[2] || "";
  return n = n.toLowerCase(), n = rZ[n] || n, (!n || nZ.indexOf(n) === -1) && (n = eZ), n;
};
var oZ = jy.exports;
const sZ = Xi, iZ = Ki, aZ = wn, Rf = ms, As = y0, Be = oZ, cZ = {
  "User-Agent": "rss-parser",
  Accept: "application/rss+xml"
}, lZ = 5, uZ = 6e4;
let pZ = class {
  constructor(t = {}) {
    t.headers = t.headers || {}, t.xml2js = t.xml2js || {}, t.customFields = t.customFields || {}, t.customFields.item = t.customFields.item || [], t.customFields.feed = t.customFields.feed || [], t.requestOptions = t.requestOptions || {}, t.maxRedirects || (t.maxRedirects = lZ), t.timeout || (t.timeout = uZ), this.options = t, this.xmlParser = new aZ.Parser(this.options.xml2js);
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
    return r = Be.maybePromisify(n, r), r;
  }
  parseURL(t, n, r = 0) {
    let o = "", s = t.indexOf("https") === 0 ? iZ.get : sZ.get, i = Rf.parse(t), a = Object.assign({}, cZ, this.options.headers), c = null, p = new Promise((l, u) => {
      const d = Object.assign({ headers: a }, i, this.options.requestOptions);
      s(d, (f) => {
        if (this.options.maxRedirects && f.statusCode >= 300 && f.statusCode < 400 && f.headers.location) {
          if (r === this.options.maxRedirects)
            return u(new Error("Too many redirects"));
          {
            const y = Rf.resolve(t, f.headers.location);
            return this.parseURL(y, null, r + 1).then(l, u);
          }
        } else if (f.statusCode >= 300)
          return u(new Error("Status code " + f.statusCode));
        let g = Be.getEncodingFromContentType(f.headers["content-type"]);
        f.setEncoding(g), f.on("data", (y) => {
          o += y;
        }), f.on("end", () => this.parseString(o).then(l, u));
      }).on("error", u), c = setTimeout(() => u(new Error("Request timed out after " + this.options.timeout + "ms")), this.options.timeout);
    }).then((l) => (clearTimeout(c), Promise.resolve(l)), (l) => (clearTimeout(c), Promise.reject(l)));
    return p = Be.maybePromisify(n, p), p;
  }
  buildAtomFeed(t) {
    let n = { items: [] };
    if (Be.copyFromXML(t.feed, n, this.options.customFields.feed), t.feed.link && (n.link = Be.getLink(t.feed.link, "alternate", 0), n.feedUrl = Be.getLink(t.feed.link, "self", 1)), t.feed.title) {
      let r = t.feed.title[0] || "";
      r._ && (r = r._), r && (n.title = r);
    }
    return t.feed.updated && (n.lastBuildDate = t.feed.updated[0]), n.items = (t.feed.entry || []).map((r) => this.parseItemAtom(r)), n;
  }
  parseItemAtom(t) {
    let n = {};
    if (Be.copyFromXML(t, n, this.options.customFields.item), t.title) {
      let r = t.title[0] || "";
      r._ && (r = r._), r && (n.title = r);
    }
    return t.link && t.link.length && (n.link = Be.getLink(t.link, "alternate", 0)), t.published && t.published.length && t.published[0].length && (n.pubDate = new Date(t.published[0]).toISOString()), !n.pubDate && t.updated && t.updated.length && t.updated[0].length && (n.pubDate = new Date(t.updated[0]).toISOString()), t.author && t.author.length && t.author[0].name && t.author[0].name.length && (n.author = t.author[0].name[0]), t.content && t.content.length && (n.content = Be.getContent(t.content[0]), n.contentSnippet = Be.getSnippet(n.content)), t.summary && t.summary.length && (n.summary = Be.getContent(t.summary[0])), t.id && (n.id = t.id[0]), this.setISODate(n), n;
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
    let r = { items: [] }, o = As.feed.concat(this.options.customFields.feed), s = As.item.concat(this.options.customFields.item);
    if (t["atom:link"] && t["atom:link"][0] && t["atom:link"][0].$ && (r.feedUrl = t["atom:link"][0].$.href), t.image && t.image[0] && t.image[0].url) {
      r.image = {};
      let a = t.image[0];
      a.link && (r.image.link = a.link[0]), a.url && (r.image.url = a.url[0]), a.title && (r.image.title = a.title[0]), a.width && (r.image.width = a.width[0]), a.height && (r.image.height = a.height[0]);
    }
    const i = this.generatePaginationLinks(t);
    return Object.keys(i).length && (r.paginationLinks = i), Be.copyFromXML(t, r, o), r.items = n.map((a) => this.parseItemRss(a, s)), r;
  }
  parseItemRss(t, n) {
    let r = {};
    return Be.copyFromXML(t, r, n), t.enclosure && (r.enclosure = t.enclosure[0].$), t.description && (r.content = Be.getContent(t.description[0]), r.contentSnippet = Be.getSnippet(r.content)), t.guid && (r.guid = t.guid[0], r.guid._ && (r.guid = r.guid._)), t.$ && t.$["rdf:about"] && (r["rdf:about"] = t.$["rdf:about"]), t.category && (r.categories = t.category), this.setISODate(r), r;
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
    Be.copyFromXML(n, t.itunes, As.podcastFeed), r.forEach((o, s) => {
      let i = t.items[s];
      i.itunes = {}, Be.copyFromXML(o, i.itunes, As.podcastItem);
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
var dZ = pZ, fZ = dZ;
const mZ = /* @__PURE__ */ nr(fZ);
class hZ {
  constructor() {
    tn(this, "parser");
    this.parser = new mZ();
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
const Dr = (e) => {
  const t = typeof e;
  return e !== null && (t === "object" || t === "function");
}, Jy = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), Yy = 1e6, yZ = (e) => e >= "0" && e <= "9";
function Qy(e) {
  if (e === "0")
    return !0;
  if (/^[1-9]\d*$/.test(e)) {
    const t = Number.parseInt(e, 10);
    return t <= Number.MAX_SAFE_INTEGER && t <= Yy;
  }
  return !1;
}
function mc(e, t) {
  return Jy.has(e) ? !1 : (e && Qy(e) ? t.push(Number.parseInt(e, 10)) : t.push(e), !0);
}
function gZ(e) {
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
        if (!mc(n, t))
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
          if ((n || r === "property") && !mc(n, t))
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
            !Number.isNaN(a) && Number.isFinite(a) && a >= 0 && a <= Number.MAX_SAFE_INTEGER && a <= Yy && n === String(a) ? t.push(a) : t.push(n), n = "", r = "indexEnd";
          }
          break;
        }
        if (r === "indexEnd")
          throw new Error(`Invalid character '${i}' after an index at position ${s}`);
        n += i;
        break;
      }
      default: {
        if (r === "index" && !yZ(i))
          throw new Error(`Invalid character '${i}' in an index at position ${s}`);
        if (r === "indexEnd")
          throw new Error(`Invalid character '${i}' after an index at position ${s}`);
        r === "start" && (r = "property"), n += i;
      }
    }
  }
  switch (o && (n += "\\"), r) {
    case "property": {
      if (!mc(n, t))
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
function ea(e) {
  if (typeof e == "string")
    return gZ(e);
  if (Array.isArray(e)) {
    const t = [];
    for (const [n, r] of e.entries()) {
      if (typeof r != "string" && typeof r != "number")
        throw new TypeError(`Expected a string or number for path segment at index ${n}, got ${typeof r}`);
      if (typeof r == "number" && !Number.isFinite(r))
        throw new TypeError(`Path segment at index ${n} must be a finite number, got ${r}`);
      if (Jy.has(r))
        return [];
      typeof r == "string" && Qy(r) ? t.push(Number.parseInt(r, 10)) : t.push(r);
    }
    return t;
  }
  return [];
}
function Af(e, t, n) {
  if (!Dr(e) || typeof t != "string" && !Array.isArray(t))
    return n === void 0 ? e : n;
  const r = ea(t);
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
function Ds(e, t, n) {
  if (!Dr(e) || typeof t != "string" && !Array.isArray(t))
    return e;
  const r = e, o = ea(t);
  if (o.length === 0)
    return e;
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    if (s === o.length - 1)
      e[i] = n;
    else if (!Dr(e[i])) {
      const c = typeof o[s + 1] == "number";
      e[i] = c ? [] : {};
    }
    e = e[i];
  }
  return r;
}
function vZ(e, t) {
  if (!Dr(e) || typeof t != "string" && !Array.isArray(t))
    return !1;
  const n = ea(t);
  if (n.length === 0)
    return !1;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (r === n.length - 1)
      return Object.hasOwn(e, o) ? (delete e[o], !0) : !1;
    if (e = e[o], !Dr(e))
      return !1;
  }
}
function hc(e, t) {
  if (!Dr(e) || typeof t != "string" && !Array.isArray(t))
    return !1;
  const n = ea(t);
  if (n.length === 0)
    return !1;
  for (const r of n) {
    if (!Dr(e) || !(r in e))
      return !1;
    e = e[r];
  }
  return !0;
}
const zn = _y.homedir(), fu = _y.tmpdir(), { env: Yr } = Se, bZ = (e) => {
  const t = de.join(zn, "Library");
  return {
    data: de.join(t, "Application Support", e),
    config: de.join(t, "Preferences", e),
    cache: de.join(t, "Caches", e),
    log: de.join(t, "Logs", e),
    temp: de.join(fu, e)
  };
}, wZ = (e) => {
  const t = Yr.APPDATA || de.join(zn, "AppData", "Roaming"), n = Yr.LOCALAPPDATA || de.join(zn, "AppData", "Local");
  return {
    // Data/config/cache/log are invented by me as Windows isn't opinionated about this
    data: de.join(n, e, "Data"),
    config: de.join(t, e, "Config"),
    cache: de.join(n, e, "Cache"),
    log: de.join(n, e, "Log"),
    temp: de.join(fu, e)
  };
}, xZ = (e) => {
  const t = de.basename(zn);
  return {
    data: de.join(Yr.XDG_DATA_HOME || de.join(zn, ".local", "share"), e),
    config: de.join(Yr.XDG_CONFIG_HOME || de.join(zn, ".config"), e),
    cache: de.join(Yr.XDG_CACHE_HOME || de.join(zn, ".cache"), e),
    // https://wiki.debian.org/XDGBaseDirectorySpecification#state
    log: de.join(Yr.XDG_STATE_HOME || de.join(zn, ".local", "state"), e),
    temp: de.join(fu, t, e)
  };
};
function _Z(e, { suffix: t = "nodejs" } = {}) {
  if (typeof e != "string")
    throw new TypeError(`Expected a string, got ${typeof e}`);
  return t && (e += `-${t}`), Se.platform === "darwin" ? bZ(e) : Se.platform === "win32" ? wZ(e) : xZ(e);
}
const In = (e, t) => {
  const { onError: n } = t;
  return function(...o) {
    return e.apply(void 0, o).catch(n);
  };
}, vn = (e, t) => {
  const { onError: n } = t;
  return function(...o) {
    try {
      return e.apply(void 0, o);
    } catch (s) {
      return n(s);
    }
  };
}, $Z = 250, kn = (e, t) => {
  const { isRetriable: n } = t;
  return function(o) {
    const { timeout: s } = o, i = o.interval ?? $Z, a = Date.now() + s;
    return function c(...p) {
      return e.apply(void 0, p).catch((l) => {
        if (!n(l) || Date.now() >= a)
          throw l;
        const u = Math.round(i * Math.random());
        return u > 0 ? new Promise((m) => setTimeout(m, u)).then(() => c.apply(void 0, p)) : c.apply(void 0, p);
      });
    };
  };
}, Cn = (e, t) => {
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
}, Qr = {
  /* API */
  isChangeErrorOk: (e) => {
    if (!Qr.isNodeError(e))
      return !1;
    const { code: t } = e;
    return t === "ENOSYS" || !EZ && (t === "EINVAL" || t === "EPERM");
  },
  isNodeError: (e) => e instanceof Error,
  isRetriableError: (e) => {
    if (!Qr.isNodeError(e))
      return !1;
    const { code: t } = e;
    return t === "EMFILE" || t === "ENFILE" || t === "EAGAIN" || t === "EBUSY" || t === "EACCESS" || t === "EACCES" || t === "EACCS" || t === "EPERM";
  },
  onChangeError: (e) => {
    if (!Qr.isNodeError(e))
      throw e;
    if (!Qr.isChangeErrorOk(e))
      throw e;
  }
}, Is = {
  onError: Qr.onChangeError
}, $t = {
  onError: () => {
  }
}, EZ = Se.getuid ? !Se.getuid() : !1, et = {
  isRetriable: Qr.isRetriableError
}, rt = {
  attempt: {
    /* ASYNC */
    chmod: In(Ze(ae.chmod), Is),
    chown: In(Ze(ae.chown), Is),
    close: In(Ze(ae.close), $t),
    fsync: In(Ze(ae.fsync), $t),
    mkdir: In(Ze(ae.mkdir), $t),
    realpath: In(Ze(ae.realpath), $t),
    stat: In(Ze(ae.stat), $t),
    unlink: In(Ze(ae.unlink), $t),
    /* SYNC */
    chmodSync: vn(ae.chmodSync, Is),
    chownSync: vn(ae.chownSync, Is),
    closeSync: vn(ae.closeSync, $t),
    existsSync: vn(ae.existsSync, $t),
    fsyncSync: vn(ae.fsync, $t),
    mkdirSync: vn(ae.mkdirSync, $t),
    realpathSync: vn(ae.realpathSync, $t),
    statSync: vn(ae.statSync, $t),
    unlinkSync: vn(ae.unlinkSync, $t)
  },
  retry: {
    /* ASYNC */
    close: kn(Ze(ae.close), et),
    fsync: kn(Ze(ae.fsync), et),
    open: kn(Ze(ae.open), et),
    readFile: kn(Ze(ae.readFile), et),
    rename: kn(Ze(ae.rename), et),
    stat: kn(Ze(ae.stat), et),
    write: kn(Ze(ae.write), et),
    writeFile: kn(Ze(ae.writeFile), et),
    /* SYNC */
    closeSync: Cn(ae.closeSync, et),
    fsyncSync: Cn(ae.fsyncSync, et),
    openSync: Cn(ae.openSync, et),
    readFileSync: Cn(ae.readFileSync, et),
    renameSync: Cn(ae.renameSync, et),
    statSync: Cn(ae.statSync, et),
    writeSync: Cn(ae.writeSync, et),
    writeFileSync: Cn(ae.writeFileSync, et)
  }
}, SZ = "utf8", Df = 438, TZ = 511, PZ = {}, OZ = Se.geteuid ? Se.geteuid() : -1, NZ = Se.getegid ? Se.getegid() : -1, RZ = 1e3, AZ = !!Se.getuid;
Se.getuid && Se.getuid();
const If = 128, DZ = (e) => e instanceof Error && "code" in e, kf = (e) => typeof e == "string", yc = (e) => e === void 0, IZ = Se.platform === "linux", Zy = Se.platform === "win32", mu = ["SIGHUP", "SIGINT", "SIGTERM"];
Zy || mu.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
IZ && mu.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
class kZ {
  /* CONSTRUCTOR */
  constructor() {
    this.callbacks = /* @__PURE__ */ new Set(), this.exited = !1, this.exit = (t) => {
      if (!this.exited) {
        this.exited = !0;
        for (const n of this.callbacks)
          n();
        t && (Zy && t !== "SIGINT" && t !== "SIGTERM" && t !== "SIGKILL" ? Se.kill(Se.pid, "SIGTERM") : Se.kill(Se.pid, t));
      }
    }, this.hook = () => {
      Se.once("exit", () => this.exit());
      for (const t of mu)
        try {
          Se.once(t, () => this.exit(t));
        } catch {
        }
    }, this.register = (t) => (this.callbacks.add(t), () => {
      this.callbacks.delete(t);
    }), this.hook();
  }
}
const CZ = new kZ(), jZ = CZ.register, ot = {
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
    if (t.length <= If)
      return e;
    const n = /^(\.?)(.*?)((?:\.[^.]+)?(?:\.tmp-\d{10}[a-f0-9]{6})?)$/.exec(t);
    if (!n)
      return e;
    const r = t.length - If;
    return `${e.slice(0, -t.length)}${n[1]}${n[2].slice(0, -r)}${n[3]}`;
  }
};
jZ(ot.purgeSyncAll);
function eg(e, t, n = PZ) {
  if (kf(n))
    return eg(e, t, { encoding: n });
  const o = { timeout: n.timeout ?? RZ };
  let s = null, i = null, a = null;
  try {
    const c = rt.attempt.realpathSync(e), p = !!c;
    e = c || e, [i, s] = ot.get(e, n.tmpCreate || ot.create, n.tmpPurge !== !1);
    const l = AZ && yc(n.chown), u = yc(n.mode);
    if (p && (l || u)) {
      const d = rt.attempt.statSync(e);
      d && (n = { ...n }, l && (n.chown = { uid: d.uid, gid: d.gid }), u && (n.mode = d.mode));
    }
    if (!p) {
      const d = de.dirname(e);
      rt.attempt.mkdirSync(d, {
        mode: TZ,
        recursive: !0
      });
    }
    a = rt.retry.openSync(o)(i, "w", n.mode || Df), n.tmpCreated && n.tmpCreated(i), kf(t) ? rt.retry.writeSync(o)(a, t, 0, n.encoding || SZ) : yc(t) || rt.retry.writeSync(o)(a, t, 0, t.length, 0), n.fsync !== !1 && (n.fsyncWait !== !1 ? rt.retry.fsyncSync(o)(a) : rt.attempt.fsync(a)), rt.retry.closeSync(o)(a), a = null, n.chown && (n.chown.uid !== OZ || n.chown.gid !== NZ) && rt.attempt.chownSync(i, n.chown.uid, n.chown.gid), n.mode && n.mode !== Df && rt.attempt.chmodSync(i, n.mode);
    try {
      rt.retry.renameSync(o)(i, e);
    } catch (d) {
      if (!DZ(d) || d.code !== "ENAMETOOLONG")
        throw d;
      rt.retry.renameSync(o)(i, ot.truncate(e));
    }
    s(), i = null;
  } finally {
    a && rt.attempt.closeSync(a), i && ot.purge(i);
  }
}
var hl = { exports: {} }, tg = {}, Xt = {}, po = {}, hs = {}, ce = {}, rs = {};
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
var yl = {};
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
})(yl);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const t = rs, n = yl;
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
  var o = yl;
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
  class O extends b {
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
      return this._for(new O("of", $, x, _), () => A(x));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(h, _, A, $ = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(h, (0, t._)`Object.keys(${_})`, A);
      const x = this._scope.toName(h);
      return this._for(new O("in", $, x, _), () => A(x));
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
  function z(P, h) {
    for (const _ in h)
      P[_] = (P[_] || 0) + (h[_] || 0);
    return P;
  }
  function H(P, h) {
    return h instanceof t._CodeOrName ? z(P, h.names) : P;
  }
  function F(P, h, _) {
    if (P instanceof t.Name)
      return A(P);
    if (!$(P))
      return P;
    return new t._Code(P._items.reduce((x, j) => (j instanceof t.Name && (j = A(j)), j instanceof t._Code ? x.push(...j._items) : x.push(j), x), []));
    function A(x) {
      const j = _[x.str];
      return j === void 0 || h[x.str] !== 1 ? x : (delete h[x.str], j);
    }
    function $(x) {
      return x instanceof t._Code && x._items.some((j) => j instanceof t.Name && h[j.str] === 1 && _[j.str] !== void 0);
    }
  }
  function U(P, h) {
    for (const _ in h)
      P[_] = (P[_] || 0) - (h[_] || 0);
  }
  function G(P) {
    return typeof P == "boolean" || typeof P == "number" || P === null ? !P : (0, t._)`!${N(P)}`;
  }
  e.not = G;
  const V = S(e.operators.AND);
  function K(...P) {
    return P.reduce(V);
  }
  e.and = K;
  const X = S(e.operators.OR);
  function D(...P) {
    return P.reduce(X);
  }
  e.or = D;
  function S(P) {
    return (h, _) => h === t.nil ? _ : _ === t.nil ? h : (0, t._)`${N(h)} ${P} ${N(_)}`;
  }
  function N(P) {
    return P instanceof t.Name ? P : (0, t._)`(${P})`;
  }
})(ce);
var J = {};
Object.defineProperty(J, "__esModule", { value: !0 });
J.checkStrictMode = J.getErrorPath = J.Type = J.useFunc = J.setEvaluated = J.evaluatedPropsToName = J.mergeEvaluated = J.eachItem = J.unescapeJsonPointer = J.escapeJsonPointer = J.escapeFragment = J.unescapeFragment = J.schemaRefOrVal = J.schemaHasRulesButRef = J.schemaHasRules = J.checkUnknownRules = J.alwaysValidSchema = J.toHash = void 0;
const we = ce, LZ = rs;
function qZ(e) {
  const t = {};
  for (const n of e)
    t[n] = !0;
  return t;
}
J.toHash = qZ;
function FZ(e, t) {
  return typeof t == "boolean" ? t : Object.keys(t).length === 0 ? !0 : (ng(e, t), !rg(t, e.self.RULES.all));
}
J.alwaysValidSchema = FZ;
function ng(e, t = e.schema) {
  const { opts: n, self: r } = e;
  if (!n.strictSchema || typeof t == "boolean")
    return;
  const o = r.RULES.keywords;
  for (const s in t)
    o[s] || ig(e, `unknown keyword: "${s}"`);
}
J.checkUnknownRules = ng;
function rg(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t[n])
      return !0;
  return !1;
}
J.schemaHasRules = rg;
function MZ(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (n !== "$ref" && t.all[n])
      return !0;
  return !1;
}
J.schemaHasRulesButRef = MZ;
function UZ({ topSchemaRef: e, schemaPath: t }, n, r, o) {
  if (!o) {
    if (typeof n == "number" || typeof n == "boolean")
      return n;
    if (typeof n == "string")
      return (0, we._)`${n}`;
  }
  return (0, we._)`${e}${t}${(0, we.getProperty)(r)}`;
}
J.schemaRefOrVal = UZ;
function VZ(e) {
  return og(decodeURIComponent(e));
}
J.unescapeFragment = VZ;
function zZ(e) {
  return encodeURIComponent(hu(e));
}
J.escapeFragment = zZ;
function hu(e) {
  return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
J.escapeJsonPointer = hu;
function og(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
J.unescapeJsonPointer = og;
function BZ(e, t) {
  if (Array.isArray(e))
    for (const n of e)
      t(n);
  else
    t(e);
}
J.eachItem = BZ;
function Cf({ mergeNames: e, mergeToName: t, mergeValues: n, resultToName: r }) {
  return (o, s, i, a) => {
    const c = i === void 0 ? s : i instanceof we.Name ? (s instanceof we.Name ? e(o, s, i) : t(o, s, i), i) : s instanceof we.Name ? (t(o, i, s), s) : n(s, i);
    return a === we.Name && !(c instanceof we.Name) ? r(o, c) : c;
  };
}
J.mergeEvaluated = {
  props: Cf({
    mergeNames: (e, t, n) => e.if((0, we._)`${n} !== true && ${t} !== undefined`, () => {
      e.if((0, we._)`${t} === true`, () => e.assign(n, !0), () => e.assign(n, (0, we._)`${n} || {}`).code((0, we._)`Object.assign(${n}, ${t})`));
    }),
    mergeToName: (e, t, n) => e.if((0, we._)`${n} !== true`, () => {
      t === !0 ? e.assign(n, !0) : (e.assign(n, (0, we._)`${n} || {}`), yu(e, n, t));
    }),
    mergeValues: (e, t) => e === !0 ? !0 : { ...e, ...t },
    resultToName: sg
  }),
  items: Cf({
    mergeNames: (e, t, n) => e.if((0, we._)`${n} !== true && ${t} !== undefined`, () => e.assign(n, (0, we._)`${t} === true ? true : ${n} > ${t} ? ${n} : ${t}`)),
    mergeToName: (e, t, n) => e.if((0, we._)`${n} !== true`, () => e.assign(n, t === !0 ? !0 : (0, we._)`${n} > ${t} ? ${n} : ${t}`)),
    mergeValues: (e, t) => e === !0 ? !0 : Math.max(e, t),
    resultToName: (e, t) => e.var("items", t)
  })
};
function sg(e, t) {
  if (t === !0)
    return e.var("props", !0);
  const n = e.var("props", (0, we._)`{}`);
  return t !== void 0 && yu(e, n, t), n;
}
J.evaluatedPropsToName = sg;
function yu(e, t, n) {
  Object.keys(n).forEach((r) => e.assign((0, we._)`${t}${(0, we.getProperty)(r)}`, !0));
}
J.setEvaluated = yu;
const jf = {};
function GZ(e, t) {
  return e.scopeValue("func", {
    ref: t,
    code: jf[t.code] || (jf[t.code] = new LZ._Code(t.code))
  });
}
J.useFunc = GZ;
var gl;
(function(e) {
  e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
})(gl || (J.Type = gl = {}));
function HZ(e, t, n) {
  if (e instanceof we.Name) {
    const r = t === gl.Num;
    return n ? r ? (0, we._)`"[" + ${e} + "]"` : (0, we._)`"['" + ${e} + "']"` : r ? (0, we._)`"/" + ${e}` : (0, we._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
  }
  return n ? (0, we.getProperty)(e).toString() : "/" + hu(e);
}
J.getErrorPath = HZ;
function ig(e, t, n = e.opts.strictSchema) {
  if (n) {
    if (t = `strict mode: ${t}`, n === !0)
      throw new Error(t);
    e.self.logger.warn(t);
  }
}
J.checkStrictMode = ig;
var St = {};
Object.defineProperty(St, "__esModule", { value: !0 });
const tt = ce, XZ = {
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
St.default = XZ;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
  const t = ce, n = J, r = St;
  e.keywordError = {
    message: ({ keyword: y }) => (0, t.str)`must pass "${y}" keyword validation`
  }, e.keyword$DataError = {
    message: ({ keyword: y, schemaType: v }) => v ? (0, t.str)`"${y}" keyword must be ${v} ($data)` : (0, t.str)`"${y}" keyword is invalid ($data)`
  };
  function o(y, v = e.keywordError, b, w) {
    const { it: T } = y, { gen: O, compositeRule: C, allErrors: B } = T, k = u(y, v, b);
    w ?? (C || B) ? c(O, k) : p(T, (0, t._)`[${k}]`);
  }
  e.reportError = o;
  function s(y, v = e.keywordError, b) {
    const { it: w } = y, { gen: T, compositeRule: O, allErrors: C } = w, B = u(y, v, b);
    c(T, B), O || C || p(w, r.default.vErrors);
  }
  e.reportExtraError = s;
  function i(y, v) {
    y.assign(r.default.errors, v), y.if((0, t._)`${r.default.vErrors} !== null`, () => y.if(v, () => y.assign((0, t._)`${r.default.vErrors}.length`, v), () => y.assign(r.default.vErrors, null)));
  }
  e.resetErrorsCount = i;
  function a({ gen: y, keyword: v, schemaValue: b, data: w, errsCount: T, it: O }) {
    if (T === void 0)
      throw new Error("ajv implementation error");
    const C = y.name("err");
    y.forRange("i", T, r.default.errors, (B) => {
      y.const(C, (0, t._)`${r.default.vErrors}[${B}]`), y.if((0, t._)`${C}.instancePath === undefined`, () => y.assign((0, t._)`${C}.instancePath`, (0, t.strConcat)(r.default.instancePath, O.errorPath))), y.assign((0, t._)`${C}.schemaPath`, (0, t.str)`${O.errSchemaPath}/${v}`), O.opts.verbose && (y.assign((0, t._)`${C}.schema`, b), y.assign((0, t._)`${C}.data`, w));
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
    const { gen: w, it: T } = y, O = [
      m(T, b),
      f(y, b)
    ];
    return g(y, v, O), w.object(...O);
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
    const { keyword: T, data: O, schemaValue: C, it: B } = y, { opts: k, propertyName: E, topSchemaRef: q, schemaPath: I } = B;
    w.push([l.keyword, T], [l.params, typeof v == "function" ? v(y) : v || (0, t._)`{}`]), k.messages && w.push([l.message, typeof b == "function" ? b(y) : b]), k.verbose && w.push([l.schema, C], [l.parentSchema, (0, t._)`${q}${I}`], [r.default.data, O]), E && w.push([l.propertyName, E]);
  }
})(hs);
Object.defineProperty(po, "__esModule", { value: !0 });
po.boolOrEmptySchema = po.topBoolOrEmptySchema = void 0;
const KZ = hs, WZ = ce, JZ = St, YZ = {
  message: "boolean schema is false"
};
function QZ(e) {
  const { gen: t, schema: n, validateName: r } = e;
  n === !1 ? ag(e, !1) : typeof n == "object" && n.$async === !0 ? t.return(JZ.default.data) : (t.assign((0, WZ._)`${r}.errors`, null), t.return(!0));
}
po.topBoolOrEmptySchema = QZ;
function ZZ(e, t) {
  const { gen: n, schema: r } = e;
  r === !1 ? (n.var(t, !1), ag(e)) : n.var(t, !0);
}
po.boolOrEmptySchema = ZZ;
function ag(e, t) {
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
  (0, KZ.reportError)(o, YZ, void 0, t);
}
var Le = {}, Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
Ir.getRules = Ir.isJSONType = void 0;
const eee = ["string", "number", "integer", "boolean", "null", "object", "array"], tee = new Set(eee);
function nee(e) {
  return typeof e == "string" && tee.has(e);
}
Ir.isJSONType = nee;
function ree() {
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
Ir.getRules = ree;
var Sn = {};
Object.defineProperty(Sn, "__esModule", { value: !0 });
Sn.shouldUseRule = Sn.shouldUseGroup = Sn.schemaHasRulesForType = void 0;
function oee({ schema: e, self: t }, n) {
  const r = t.RULES.types[n];
  return r && r !== !0 && cg(e, r);
}
Sn.schemaHasRulesForType = oee;
function cg(e, t) {
  return t.rules.some((n) => lg(e, n));
}
Sn.shouldUseGroup = cg;
function lg(e, t) {
  var n;
  return e[t.keyword] !== void 0 || ((n = t.definition.implements) === null || n === void 0 ? void 0 : n.some((r) => e[r] !== void 0));
}
Sn.shouldUseRule = lg;
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.reportTypeError = Le.checkDataTypes = Le.checkDataType = Le.coerceAndCheckDataType = Le.getJSONTypes = Le.getSchemaTypes = Le.DataType = void 0;
const see = Ir, iee = Sn, aee = hs, le = ce, ug = J;
var to;
(function(e) {
  e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
})(to || (Le.DataType = to = {}));
function cee(e) {
  const t = pg(e.type);
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
Le.getSchemaTypes = cee;
function pg(e) {
  const t = Array.isArray(e) ? e : e ? [e] : [];
  if (t.every(see.isJSONType))
    return t;
  throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
}
Le.getJSONTypes = pg;
function lee(e, t) {
  const { gen: n, data: r, opts: o } = e, s = uee(t, o.coerceTypes), i = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, iee.schemaHasRulesForType)(e, t[0]));
  if (i) {
    const a = gu(t, r, o.strictNumbers, to.Wrong);
    n.if(a, () => {
      s.length ? pee(e, t, s) : vu(e);
    });
  }
  return i;
}
Le.coerceAndCheckDataType = lee;
const dg = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
function uee(e, t) {
  return t ? e.filter((n) => dg.has(n) || t === "array" && n === "array") : [];
}
function pee(e, t, n) {
  const { gen: r, data: o, opts: s } = e, i = r.let("dataType", (0, le._)`typeof ${o}`), a = r.let("coerced", (0, le._)`undefined`);
  s.coerceTypes === "array" && r.if((0, le._)`${i} == 'object' && Array.isArray(${o}) && ${o}.length == 1`, () => r.assign(o, (0, le._)`${o}[0]`).assign(i, (0, le._)`typeof ${o}`).if(gu(t, o, s.strictNumbers), () => r.assign(a, o))), r.if((0, le._)`${a} !== undefined`);
  for (const p of n)
    (dg.has(p) || p === "array" && s.coerceTypes === "array") && c(p);
  r.else(), vu(e), r.endIf(), r.if((0, le._)`${a} !== undefined`, () => {
    r.assign(o, a), dee(e, a);
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
function dee({ gen: e, parentData: t, parentDataProperty: n }, r) {
  e.if((0, le._)`${t} !== undefined`, () => e.assign((0, le._)`${t}[${n}]`, r));
}
function vl(e, t, n, r = to.Correct) {
  const o = r === to.Correct ? le.operators.EQ : le.operators.NEQ;
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
  return r === to.Correct ? s : (0, le.not)(s);
  function i(a = le.nil) {
    return (0, le.and)((0, le._)`typeof ${t} == "number"`, a, n ? (0, le._)`isFinite(${t})` : le.nil);
  }
}
Le.checkDataType = vl;
function gu(e, t, n, r) {
  if (e.length === 1)
    return vl(e[0], t, n, r);
  let o;
  const s = (0, ug.toHash)(e);
  if (s.array && s.object) {
    const i = (0, le._)`typeof ${t} != "object"`;
    o = s.null ? i : (0, le._)`!${t} || ${i}`, delete s.null, delete s.array, delete s.object;
  } else
    o = le.nil;
  s.number && delete s.integer;
  for (const i in s)
    o = (0, le.and)(o, vl(i, t, n, r));
  return o;
}
Le.checkDataTypes = gu;
const fee = {
  message: ({ schema: e }) => `must be ${e}`,
  params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, le._)`{type: ${e}}` : (0, le._)`{type: ${t}}`
};
function vu(e) {
  const t = mee(e);
  (0, aee.reportError)(t, fee);
}
Le.reportTypeError = vu;
function mee(e) {
  const { gen: t, data: n, schema: r } = e, o = (0, ug.schemaRefOrVal)(e, r, "type");
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
var ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
ta.assignDefaults = void 0;
const Mr = ce, hee = J;
function yee(e, t) {
  const { properties: n, items: r } = e.schema;
  if (t === "object" && n)
    for (const o in n)
      Lf(e, o, n[o].default);
  else t === "array" && Array.isArray(r) && r.forEach((o, s) => Lf(e, s, o.default));
}
ta.assignDefaults = yee;
function Lf(e, t, n) {
  const { gen: r, compositeRule: o, data: s, opts: i } = e;
  if (n === void 0)
    return;
  const a = (0, Mr._)`${s}${(0, Mr.getProperty)(t)}`;
  if (o) {
    (0, hee.checkStrictMode)(e, `default is ignored for: ${a}`);
    return;
  }
  let c = (0, Mr._)`${a} === undefined`;
  i.useDefaults === "empty" && (c = (0, Mr._)`${c} || ${a} === null || ${a} === ""`), r.if(c, (0, Mr._)`${a} = ${(0, Mr.stringify)(n)}`);
}
var un = {}, fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.validateUnion = fe.validateArray = fe.usePattern = fe.callValidateCode = fe.schemaProperties = fe.allSchemaProperties = fe.noPropertyInData = fe.propertyInData = fe.isOwnProperty = fe.hasPropFunc = fe.reportMissingProp = fe.checkMissingProp = fe.checkReportMissingProp = void 0;
const $e = ce, bu = J, jn = St, gee = J;
function vee(e, t) {
  const { gen: n, data: r, it: o } = e;
  n.if(xu(n, r, t, o.opts.ownProperties), () => {
    e.setParams({ missingProperty: (0, $e._)`${t}` }, !0), e.error();
  });
}
fe.checkReportMissingProp = vee;
function bee({ gen: e, data: t, it: { opts: n } }, r, o) {
  return (0, $e.or)(...r.map((s) => (0, $e.and)(xu(e, t, s, n.ownProperties), (0, $e._)`${o} = ${s}`)));
}
fe.checkMissingProp = bee;
function wee(e, t) {
  e.setParams({ missingProperty: t }, !0), e.error();
}
fe.reportMissingProp = wee;
function fg(e) {
  return e.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, $e._)`Object.prototype.hasOwnProperty`
  });
}
fe.hasPropFunc = fg;
function wu(e, t, n) {
  return (0, $e._)`${fg(e)}.call(${t}, ${n})`;
}
fe.isOwnProperty = wu;
function xee(e, t, n, r) {
  const o = (0, $e._)`${t}${(0, $e.getProperty)(n)} !== undefined`;
  return r ? (0, $e._)`${o} && ${wu(e, t, n)}` : o;
}
fe.propertyInData = xee;
function xu(e, t, n, r) {
  const o = (0, $e._)`${t}${(0, $e.getProperty)(n)} === undefined`;
  return r ? (0, $e.or)(o, (0, $e.not)(wu(e, t, n))) : o;
}
fe.noPropertyInData = xu;
function mg(e) {
  return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
}
fe.allSchemaProperties = mg;
function _ee(e, t) {
  return mg(t).filter((n) => !(0, bu.alwaysValidSchema)(e, t[n]));
}
fe.schemaProperties = _ee;
function $ee({ schemaCode: e, data: t, it: { gen: n, topSchemaRef: r, schemaPath: o, errorPath: s }, it: i }, a, c, p) {
  const l = p ? (0, $e._)`${e}, ${t}, ${r}${o}` : t, u = [
    [jn.default.instancePath, (0, $e.strConcat)(jn.default.instancePath, s)],
    [jn.default.parentData, i.parentData],
    [jn.default.parentDataProperty, i.parentDataProperty],
    [jn.default.rootData, jn.default.rootData]
  ];
  i.opts.dynamicRef && u.push([jn.default.dynamicAnchors, jn.default.dynamicAnchors]);
  const d = (0, $e._)`${l}, ${n.object(...u)}`;
  return c !== $e.nil ? (0, $e._)`${a}.call(${c}, ${d})` : (0, $e._)`${a}(${d})`;
}
fe.callValidateCode = $ee;
const Eee = (0, $e._)`new RegExp`;
function See({ gen: e, it: { opts: t } }, n) {
  const r = t.unicodeRegExp ? "u" : "", { regExp: o } = t.code, s = o(n, r);
  return e.scopeValue("pattern", {
    key: s.toString(),
    ref: s,
    code: (0, $e._)`${o.code === "new RegExp" ? Eee : (0, gee.useFunc)(e, o)}(${n}, ${r})`
  });
}
fe.usePattern = See;
function Tee(e) {
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
        dataPropType: bu.Type.Num
      }, s), t.if((0, $e.not)(s), a);
    });
  }
}
fe.validateArray = Tee;
function Pee(e) {
  const { gen: t, schema: n, keyword: r, it: o } = e;
  if (!Array.isArray(n))
    throw new Error("ajv implementation error");
  if (n.some((c) => (0, bu.alwaysValidSchema)(o, c)) && !o.opts.unevaluated)
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
fe.validateUnion = Pee;
Object.defineProperty(un, "__esModule", { value: !0 });
un.validateKeywordUsage = un.validSchemaType = un.funcKeywordCode = un.macroKeywordCode = void 0;
const at = ce, dr = St, Oee = fe, Nee = hs;
function Ree(e, t) {
  const { gen: n, keyword: r, schema: o, parentSchema: s, it: i } = e, a = t.macro.call(i.self, o, s, i), c = hg(n, r, a);
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
un.macroKeywordCode = Ree;
function Aee(e, t) {
  var n;
  const { gen: r, keyword: o, schema: s, parentSchema: i, $data: a, it: c } = e;
  Iee(c, t);
  const p = !a && t.compile ? t.compile.call(c.self, s, i, c) : t.validate, l = hg(r, o, p), u = r.let("valid");
  e.block$data(u, d), e.ok((n = t.valid) !== null && n !== void 0 ? n : u);
  function d() {
    if (t.errors === !1)
      g(), t.modifying && qf(e), y(() => e.error());
    else {
      const v = t.async ? m() : f();
      t.modifying && qf(e), y(() => Dee(e, v));
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
    const b = c.opts.passContext ? dr.default.this : dr.default.self, w = !("compile" in t && !a || t.schema === !1);
    r.assign(u, (0, at._)`${v}${(0, Oee.callValidateCode)(e, l, b, w)}`, t.modifying);
  }
  function y(v) {
    var b;
    r.if((0, at.not)((b = t.valid) !== null && b !== void 0 ? b : u), v);
  }
}
un.funcKeywordCode = Aee;
function qf(e) {
  const { gen: t, data: n, it: r } = e;
  t.if(r.parentData, () => t.assign(n, (0, at._)`${r.parentData}[${r.parentDataProperty}]`));
}
function Dee(e, t) {
  const { gen: n } = e;
  n.if((0, at._)`Array.isArray(${t})`, () => {
    n.assign(dr.default.vErrors, (0, at._)`${dr.default.vErrors} === null ? ${t} : ${dr.default.vErrors}.concat(${t})`).assign(dr.default.errors, (0, at._)`${dr.default.vErrors}.length`), (0, Nee.extendErrors)(e);
  }, () => e.error());
}
function Iee({ schemaEnv: e }, t) {
  if (t.async && !e.$async)
    throw new Error("async keyword in sync schema");
}
function hg(e, t, n) {
  if (n === void 0)
    throw new Error(`keyword "${t}" failed to compile`);
  return e.scopeValue("keyword", typeof n == "function" ? { ref: n } : { ref: n, code: (0, at.stringify)(n) });
}
function kee(e, t, n = !1) {
  return !t.length || t.some((r) => r === "array" ? Array.isArray(e) : r === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == r || n && typeof e > "u");
}
un.validSchemaType = kee;
function Cee({ schema: e, opts: t, self: n, errSchemaPath: r }, o, s) {
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
un.validateKeywordUsage = Cee;
var Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.extendSubschemaMode = Qn.extendSubschemaData = Qn.getSubschema = void 0;
const cn = ce, yg = J;
function jee(e, { keyword: t, schemaProp: n, schema: r, schemaPath: o, errSchemaPath: s, topSchemaRef: i }) {
  if (t !== void 0 && r !== void 0)
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  if (t !== void 0) {
    const a = e.schema[t];
    return n === void 0 ? {
      schema: a,
      schemaPath: (0, cn._)`${e.schemaPath}${(0, cn.getProperty)(t)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}`
    } : {
      schema: a[n],
      schemaPath: (0, cn._)`${e.schemaPath}${(0, cn.getProperty)(t)}${(0, cn.getProperty)(n)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}/${(0, yg.escapeFragment)(n)}`
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
Qn.getSubschema = jee;
function Lee(e, t, { dataProp: n, dataPropType: r, data: o, dataTypes: s, propertyName: i }) {
  if (o !== void 0 && n !== void 0)
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  const { gen: a } = t;
  if (n !== void 0) {
    const { errorPath: p, dataPathArr: l, opts: u } = t, d = a.let("data", (0, cn._)`${t.data}${(0, cn.getProperty)(n)}`, !0);
    c(d), e.errorPath = (0, cn.str)`${p}${(0, yg.getErrorPath)(n, r, u.jsPropertySyntax)}`, e.parentDataProperty = (0, cn._)`${n}`, e.dataPathArr = [...l, e.parentDataProperty];
  }
  if (o !== void 0) {
    const p = o instanceof cn.Name ? o : a.let("data", o, !0);
    c(p), i !== void 0 && (e.propertyName = i);
  }
  s && (e.dataTypes = s);
  function c(p) {
    e.data = p, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = /* @__PURE__ */ new Set(), e.parentData = t.data, e.dataNames = [...t.dataNames, p];
  }
}
Qn.extendSubschemaData = Lee;
function qee(e, { jtdDiscriminator: t, jtdMetadata: n, compositeRule: r, createErrors: o, allErrors: s }) {
  r !== void 0 && (e.compositeRule = r), o !== void 0 && (e.createErrors = o), s !== void 0 && (e.allErrors = s), e.jtdDiscriminator = t, e.jtdMetadata = n;
}
Qn.extendSubschemaMode = qee;
var We = {}, na = function e(t, n) {
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
}, gg = { exports: {} }, Kn = gg.exports = function(e, t, n) {
  typeof t == "function" && (n = t, t = {}), n = t.cb || n;
  var r = typeof n == "function" ? n : n.pre || function() {
  }, o = n.post || function() {
  };
  ai(t, r, o, e, "", e);
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
function ai(e, t, n, r, o, s, i, a, c, p) {
  if (r && typeof r == "object" && !Array.isArray(r)) {
    t(r, o, s, i, a, c, p);
    for (var l in r) {
      var u = r[l];
      if (Array.isArray(u)) {
        if (l in Kn.arrayKeywords)
          for (var d = 0; d < u.length; d++)
            ai(e, t, n, u[d], o + "/" + l + "/" + d, s, o, l, r, d);
      } else if (l in Kn.propsKeywords) {
        if (u && typeof u == "object")
          for (var m in u)
            ai(e, t, n, u[m], o + "/" + l + "/" + Fee(m), s, o, l, r, m);
      } else (l in Kn.keywords || e.allKeys && !(l in Kn.skipKeywords)) && ai(e, t, n, u, o + "/" + l, s, o, l, r);
    }
    n(r, o, s, i, a, c, p);
  }
}
function Fee(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
var Mee = gg.exports;
Object.defineProperty(We, "__esModule", { value: !0 });
We.getSchemaRefs = We.resolveUrl = We.normalizeId = We._getFullPath = We.getFullPath = We.inlineRef = void 0;
const Uee = J, Vee = na, zee = Mee, Bee = /* @__PURE__ */ new Set([
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
function Gee(e, t = !0) {
  return typeof e == "boolean" ? !0 : t === !0 ? !bl(e) : t ? vg(e) <= t : !1;
}
We.inlineRef = Gee;
const Hee = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function bl(e) {
  for (const t in e) {
    if (Hee.has(t))
      return !0;
    const n = e[t];
    if (Array.isArray(n) && n.some(bl) || typeof n == "object" && bl(n))
      return !0;
  }
  return !1;
}
function vg(e) {
  let t = 0;
  for (const n in e) {
    if (n === "$ref")
      return 1 / 0;
    if (t++, !Bee.has(n) && (typeof e[n] == "object" && (0, Uee.eachItem)(e[n], (r) => t += vg(r)), t === 1 / 0))
      return 1 / 0;
  }
  return t;
}
function bg(e, t = "", n) {
  n !== !1 && (t = no(t));
  const r = e.parse(t);
  return wg(e, r);
}
We.getFullPath = bg;
function wg(e, t) {
  return e.serialize(t).split("#")[0] + "#";
}
We._getFullPath = wg;
const Xee = /#\/?$/;
function no(e) {
  return e ? e.replace(Xee, "") : "";
}
We.normalizeId = no;
function Kee(e, t, n) {
  return n = no(n), e.resolve(t, n);
}
We.resolveUrl = Kee;
const Wee = /^[a-z_][-a-z0-9._]*$/i;
function Jee(e, t) {
  if (typeof e == "boolean")
    return {};
  const { schemaId: n, uriResolver: r } = this.opts, o = no(e[n] || t), s = { "": o }, i = bg(r, o, !1), a = {}, c = /* @__PURE__ */ new Set();
  return zee(e, { allKeys: !0 }, (u, d, m, f) => {
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
      let O = this.refs[w];
      return typeof O == "string" && (O = this.refs[O]), typeof O == "object" ? p(u, O.schema, w) : w !== no(g) && (w[0] === "#" ? (p(u, a[w], w), a[w] = u) : this.refs[w] = g), w;
    }
    function b(w) {
      if (typeof w == "string") {
        if (!Wee.test(w))
          throw new Error(`invalid anchor "${w}"`);
        v.call(this, `#${w}`);
      }
    }
  }), a;
  function p(u, d, m) {
    if (d !== void 0 && !Vee(u, d))
      throw l(m);
  }
  function l(u) {
    return new Error(`reference "${u}" resolves to more than one schema`);
  }
}
We.getSchemaRefs = Jee;
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.getData = Xt.KeywordCxt = Xt.validateFunctionCode = void 0;
const xg = po, Ff = Le, _u = Sn, Ni = Le, Yee = ta, Ho = un, gc = Qn, ee = ce, oe = St, Qee = We, Tn = J, jo = hs;
function Zee(e) {
  if (Eg(e) && (Sg(e), $g(e))) {
    nte(e);
    return;
  }
  _g(e, () => (0, xg.topBoolOrEmptySchema)(e));
}
Xt.validateFunctionCode = Zee;
function _g({ gen: e, validateName: t, schema: n, schemaEnv: r, opts: o }, s) {
  o.code.es5 ? e.func(t, (0, ee._)`${oe.default.data}, ${oe.default.valCxt}`, r.$async, () => {
    e.code((0, ee._)`"use strict"; ${Mf(n, o)}`), tte(e, o), e.code(s);
  }) : e.func(t, (0, ee._)`${oe.default.data}, ${ete(o)}`, r.$async, () => e.code(Mf(n, o)).code(s));
}
function ete(e) {
  return (0, ee._)`{${oe.default.instancePath}="", ${oe.default.parentData}, ${oe.default.parentDataProperty}, ${oe.default.rootData}=${oe.default.data}${e.dynamicRef ? (0, ee._)`, ${oe.default.dynamicAnchors}={}` : ee.nil}}={}`;
}
function tte(e, t) {
  e.if(oe.default.valCxt, () => {
    e.var(oe.default.instancePath, (0, ee._)`${oe.default.valCxt}.${oe.default.instancePath}`), e.var(oe.default.parentData, (0, ee._)`${oe.default.valCxt}.${oe.default.parentData}`), e.var(oe.default.parentDataProperty, (0, ee._)`${oe.default.valCxt}.${oe.default.parentDataProperty}`), e.var(oe.default.rootData, (0, ee._)`${oe.default.valCxt}.${oe.default.rootData}`), t.dynamicRef && e.var(oe.default.dynamicAnchors, (0, ee._)`${oe.default.valCxt}.${oe.default.dynamicAnchors}`);
  }, () => {
    e.var(oe.default.instancePath, (0, ee._)`""`), e.var(oe.default.parentData, (0, ee._)`undefined`), e.var(oe.default.parentDataProperty, (0, ee._)`undefined`), e.var(oe.default.rootData, oe.default.data), t.dynamicRef && e.var(oe.default.dynamicAnchors, (0, ee._)`{}`);
  });
}
function nte(e) {
  const { schema: t, opts: n, gen: r } = e;
  _g(e, () => {
    n.$comment && t.$comment && Pg(e), ate(e), r.let(oe.default.vErrors, null), r.let(oe.default.errors, 0), n.unevaluated && rte(e), Tg(e), ute(e);
  });
}
function rte(e) {
  const { gen: t, validateName: n } = e;
  e.evaluated = t.const("evaluated", (0, ee._)`${n}.evaluated`), t.if((0, ee._)`${e.evaluated}.dynamicProps`, () => t.assign((0, ee._)`${e.evaluated}.props`, (0, ee._)`undefined`)), t.if((0, ee._)`${e.evaluated}.dynamicItems`, () => t.assign((0, ee._)`${e.evaluated}.items`, (0, ee._)`undefined`));
}
function Mf(e, t) {
  const n = typeof e == "object" && e[t.schemaId];
  return n && (t.code.source || t.code.process) ? (0, ee._)`/*# sourceURL=${n} */` : ee.nil;
}
function ote(e, t) {
  if (Eg(e) && (Sg(e), $g(e))) {
    ste(e, t);
    return;
  }
  (0, xg.boolOrEmptySchema)(e, t);
}
function $g({ schema: e, self: t }) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t.RULES.all[n])
      return !0;
  return !1;
}
function Eg(e) {
  return typeof e.schema != "boolean";
}
function ste(e, t) {
  const { schema: n, gen: r, opts: o } = e;
  o.$comment && n.$comment && Pg(e), cte(e), lte(e);
  const s = r.const("_errs", oe.default.errors);
  Tg(e, s), r.var(t, (0, ee._)`${s} === ${oe.default.errors}`);
}
function Sg(e) {
  (0, Tn.checkUnknownRules)(e), ite(e);
}
function Tg(e, t) {
  if (e.opts.jtd)
    return Uf(e, [], !1, t);
  const n = (0, Ff.getSchemaTypes)(e.schema), r = (0, Ff.coerceAndCheckDataType)(e, n);
  Uf(e, n, !r, t);
}
function ite(e) {
  const { schema: t, errSchemaPath: n, opts: r, self: o } = e;
  t.$ref && r.ignoreKeywordsWithRef && (0, Tn.schemaHasRulesButRef)(t, o.RULES) && o.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
}
function ate(e) {
  const { schema: t, opts: n } = e;
  t.default !== void 0 && n.useDefaults && n.strictSchema && (0, Tn.checkStrictMode)(e, "default is ignored in the schema root");
}
function cte(e) {
  const t = e.schema[e.opts.schemaId];
  t && (e.baseId = (0, Qee.resolveUrl)(e.opts.uriResolver, e.baseId, t));
}
function lte(e) {
  if (e.schema.$async && !e.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function Pg({ gen: e, schemaEnv: t, schema: n, errSchemaPath: r, opts: o }) {
  const s = n.$comment;
  if (o.$comment === !0)
    e.code((0, ee._)`${oe.default.self}.logger.log(${s})`);
  else if (typeof o.$comment == "function") {
    const i = (0, ee.str)`${r}/$comment`, a = e.scopeValue("root", { ref: t.root });
    e.code((0, ee._)`${oe.default.self}.opts.$comment(${s}, ${i}, ${a}.schema)`);
  }
}
function ute(e) {
  const { gen: t, schemaEnv: n, validateName: r, ValidationError: o, opts: s } = e;
  n.$async ? t.if((0, ee._)`${oe.default.errors} === 0`, () => t.return(oe.default.data), () => t.throw((0, ee._)`new ${o}(${oe.default.vErrors})`)) : (t.assign((0, ee._)`${r}.errors`, oe.default.vErrors), s.unevaluated && pte(e), t.return((0, ee._)`${oe.default.errors} === 0`));
}
function pte({ gen: e, evaluated: t, props: n, items: r }) {
  n instanceof ee.Name && e.assign((0, ee._)`${t}.props`, n), r instanceof ee.Name && e.assign((0, ee._)`${t}.items`, r);
}
function Uf(e, t, n, r) {
  const { gen: o, schema: s, data: i, allErrors: a, opts: c, self: p } = e, { RULES: l } = p;
  if (s.$ref && (c.ignoreKeywordsWithRef || !(0, Tn.schemaHasRulesButRef)(s, l))) {
    o.block(() => Rg(e, "$ref", l.all.$ref.definition));
    return;
  }
  c.jtd || dte(e, t), o.block(() => {
    for (const d of l.rules)
      u(d);
    u(l.post);
  });
  function u(d) {
    (0, _u.shouldUseGroup)(s, d) && (d.type ? (o.if((0, Ni.checkDataType)(d.type, i, c.strictNumbers)), Vf(e, d), t.length === 1 && t[0] === d.type && n && (o.else(), (0, Ni.reportTypeError)(e)), o.endIf()) : Vf(e, d), a || o.if((0, ee._)`${oe.default.errors} === ${r || 0}`));
  }
}
function Vf(e, t) {
  const { gen: n, schema: r, opts: { useDefaults: o } } = e;
  o && (0, Yee.assignDefaults)(e, t.type), n.block(() => {
    for (const s of t.rules)
      (0, _u.shouldUseRule)(r, s) && Rg(e, s.keyword, s.definition, t.type);
  });
}
function dte(e, t) {
  e.schemaEnv.meta || !e.opts.strictTypes || (fte(e, t), e.opts.allowUnionTypes || mte(e, t), hte(e, e.dataTypes));
}
function fte(e, t) {
  if (t.length) {
    if (!e.dataTypes.length) {
      e.dataTypes = t;
      return;
    }
    t.forEach((n) => {
      Og(e.dataTypes, n) || $u(e, `type "${n}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), gte(e, t);
  }
}
function mte(e, t) {
  t.length > 1 && !(t.length === 2 && t.includes("null")) && $u(e, "use allowUnionTypes to allow union type keyword");
}
function hte(e, t) {
  const n = e.self.RULES.all;
  for (const r in n) {
    const o = n[r];
    if (typeof o == "object" && (0, _u.shouldUseRule)(e.schema, o)) {
      const { type: s } = o.definition;
      s.length && !s.some((i) => yte(t, i)) && $u(e, `missing type "${s.join(",")}" for keyword "${r}"`);
    }
  }
}
function yte(e, t) {
  return e.includes(t) || t === "number" && e.includes("integer");
}
function Og(e, t) {
  return e.includes(t) || t === "integer" && e.includes("number");
}
function gte(e, t) {
  const n = [];
  for (const r of e.dataTypes)
    Og(t, r) ? n.push(r) : t.includes("integer") && r === "number" && n.push("integer");
  e.dataTypes = n;
}
function $u(e, t) {
  const n = e.schemaEnv.baseId + e.errSchemaPath;
  t += ` at "${n}" (strictTypes)`, (0, Tn.checkStrictMode)(e, t, e.opts.strictTypes);
}
let Ng = class {
  constructor(t, n, r) {
    if ((0, Ho.validateKeywordUsage)(t, n, r), this.gen = t.gen, this.allErrors = t.allErrors, this.keyword = r, this.data = t.data, this.schema = t.schema[r], this.$data = n.$data && t.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, Tn.schemaRefOrVal)(t, this.schema, r, this.$data), this.schemaType = n.schemaType, this.parentSchema = t.schema, this.params = {}, this.it = t, this.def = n, this.$data)
      this.schemaCode = t.gen.const("vSchema", Ag(this.$data, t));
    else if (this.schemaCode = this.schemaValue, !(0, Ho.validSchemaType)(this.schema, n.schemaType, n.allowUndefined))
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
    (t ? jo.reportExtraError : jo.reportError)(this, this.def.error, n);
  }
  $dataError() {
    (0, jo.reportError)(this, this.def.$dataError || jo.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, jo.resetErrorsCount)(this.gen, this.errsCount);
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
        return (0, ee._)`${(0, Ni.checkDataTypes)(c, n, s.opts.strictNumbers, Ni.DataType.Wrong)}`;
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
    const r = (0, gc.getSubschema)(this.it, t);
    (0, gc.extendSubschemaData)(r, this.it, t), (0, gc.extendSubschemaMode)(r, t);
    const o = { ...this.it, ...r, items: void 0, props: void 0 };
    return ote(o, n), o;
  }
  mergeEvaluated(t, n) {
    const { it: r, gen: o } = this;
    r.opts.unevaluated && (r.props !== !0 && t.props !== void 0 && (r.props = Tn.mergeEvaluated.props(o, t.props, r.props, n)), r.items !== !0 && t.items !== void 0 && (r.items = Tn.mergeEvaluated.items(o, t.items, r.items, n)));
  }
  mergeValidEvaluated(t, n) {
    const { it: r, gen: o } = this;
    if (r.opts.unevaluated && (r.props !== !0 || r.items !== !0))
      return o.if(n, () => this.mergeEvaluated(t, ee.Name)), !0;
  }
};
Xt.KeywordCxt = Ng;
function Rg(e, t, n, r) {
  const o = new Ng(e, n, t);
  "code" in n ? n.code(o, r) : o.$data && n.validate ? (0, Ho.funcKeywordCode)(o, n) : "macro" in n ? (0, Ho.macroKeywordCode)(o, n) : (n.compile || n.validate) && (0, Ho.funcKeywordCode)(o, n);
}
const vte = /^\/(?:[^~]|~0|~1)*$/, bte = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function Ag(e, { dataLevel: t, dataNames: n, dataPathArr: r }) {
  let o, s;
  if (e === "")
    return oe.default.rootData;
  if (e[0] === "/") {
    if (!vte.test(e))
      throw new Error(`Invalid JSON-pointer: ${e}`);
    o = e, s = oe.default.rootData;
  } else {
    const p = bte.exec(e);
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
    p && (s = (0, ee._)`${s}${(0, ee.getProperty)((0, Tn.unescapeJsonPointer)(p))}`, i = (0, ee._)`${i} && ${s}`);
  return i;
  function c(p, l) {
    return `Cannot access ${p} ${l} levels up, current level is ${t}`;
  }
}
Xt.getData = Ag;
var ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
let wte = class extends Error {
  constructor(t) {
    super("validation failed"), this.errors = t, this.ajv = this.validation = !0;
  }
};
ys.default = wte;
var xo = {};
Object.defineProperty(xo, "__esModule", { value: !0 });
const vc = We;
let xte = class extends Error {
  constructor(t, n, r, o) {
    super(o || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, vc.resolveUrl)(t, n, r), this.missingSchema = (0, vc.normalizeId)((0, vc.getFullPath)(t, this.missingRef));
  }
};
xo.default = xte;
var ut = {};
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.resolveSchema = ut.getCompilingSchema = ut.resolveRef = ut.compileSchema = ut.SchemaEnv = void 0;
const Lt = ce, _te = ys, lr = St, Gt = We, zf = J, $te = Xt;
let ra = class {
  constructor(t) {
    var n;
    this.refs = {}, this.dynamicAnchors = {};
    let r;
    typeof t.schema == "object" && (r = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (n = t.baseId) !== null && n !== void 0 ? n : (0, Gt.normalizeId)(r == null ? void 0 : r[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = r == null ? void 0 : r.$async, this.refs = {};
  }
};
ut.SchemaEnv = ra;
function Eu(e) {
  const t = Dg.call(this, e);
  if (t)
    return t;
  const n = (0, Gt.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: r, lines: o } = this.opts.code, { ownProperties: s } = this.opts, i = new Lt.CodeGen(this.scope, { es5: r, lines: o, ownProperties: s });
  let a;
  e.$async && (a = i.scopeValue("Error", {
    ref: _te.default,
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
    this._compilations.add(e), (0, $te.validateFunctionCode)(p), i.optimize(this.opts.code.optimize);
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
ut.compileSchema = Eu;
function Ete(e, t, n) {
  var r;
  n = (0, Gt.resolveUrl)(this.opts.uriResolver, t, n);
  const o = e.refs[n];
  if (o)
    return o;
  let s = Pte.call(this, e, n);
  if (s === void 0) {
    const i = (r = e.localRefs) === null || r === void 0 ? void 0 : r[n], { schemaId: a } = this.opts;
    i && (s = new ra({ schema: i, schemaId: a, root: e, baseId: t }));
  }
  if (s !== void 0)
    return e.refs[n] = Ste.call(this, s);
}
ut.resolveRef = Ete;
function Ste(e) {
  return (0, Gt.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : Eu.call(this, e);
}
function Dg(e) {
  for (const t of this._compilations)
    if (Tte(t, e))
      return t;
}
ut.getCompilingSchema = Dg;
function Tte(e, t) {
  return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
}
function Pte(e, t) {
  let n;
  for (; typeof (n = this.refs[t]) == "string"; )
    t = n;
  return n || this.schemas[t] || oa.call(this, e, t);
}
function oa(e, t) {
  const n = this.opts.uriResolver.parse(t), r = (0, Gt._getFullPath)(this.opts.uriResolver, n);
  let o = (0, Gt.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
  if (Object.keys(e.schema).length > 0 && r === o)
    return bc.call(this, n, e);
  const s = (0, Gt.normalizeId)(r), i = this.refs[s] || this.schemas[s];
  if (typeof i == "string") {
    const a = oa.call(this, e, i);
    return typeof (a == null ? void 0 : a.schema) != "object" ? void 0 : bc.call(this, n, a);
  }
  if (typeof (i == null ? void 0 : i.schema) == "object") {
    if (i.validate || Eu.call(this, i), s === (0, Gt.normalizeId)(t)) {
      const { schema: a } = i, { schemaId: c } = this.opts, p = a[c];
      return p && (o = (0, Gt.resolveUrl)(this.opts.uriResolver, o, p)), new ra({ schema: a, schemaId: c, root: e, baseId: o });
    }
    return bc.call(this, n, i);
  }
}
ut.resolveSchema = oa;
const Ote = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function bc(e, { baseId: t, schema: n, root: r }) {
  var o;
  if (((o = e.fragment) === null || o === void 0 ? void 0 : o[0]) !== "/")
    return;
  for (const a of e.fragment.slice(1).split("/")) {
    if (typeof n == "boolean")
      return;
    const c = n[(0, zf.unescapeFragment)(a)];
    if (c === void 0)
      return;
    n = c;
    const p = typeof n == "object" && n[this.opts.schemaId];
    !Ote.has(a) && p && (t = (0, Gt.resolveUrl)(this.opts.uriResolver, t, p));
  }
  let s;
  if (typeof n != "boolean" && n.$ref && !(0, zf.schemaHasRulesButRef)(n, this.RULES)) {
    const a = (0, Gt.resolveUrl)(this.opts.uriResolver, t, n.$ref);
    s = oa.call(this, r, a);
  }
  const { schemaId: i } = this.opts;
  if (s = s || new ra({ schema: n, schemaId: i, root: r, baseId: t }), s.schema !== s.root.schema)
    return s;
}
const Nte = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Rte = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ate = "object", Dte = [
  "$data"
], Ite = {
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
}, kte = !1, Cte = {
  $id: Nte,
  description: Rte,
  type: Ate,
  required: Dte,
  properties: Ite,
  additionalProperties: kte
};
var Su = {}, sa = { exports: {} };
const jte = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), Ig = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
function kg(e) {
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
const Lte = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
function Bf(e) {
  return e.length = 0, !0;
}
function qte(e, t, n) {
  if (e.length) {
    const r = kg(e);
    if (r !== "")
      t.push(r);
    else
      return n.error = !0, !1;
    e.length = 0;
  }
  return !0;
}
function Fte(e) {
  let t = 0;
  const n = { error: !1, address: "", zone: "" }, r = [], o = [];
  let s = !1, i = !1, a = qte;
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
        a = Bf;
      } else {
        o.push(p);
        continue;
      }
  }
  return o.length && (a === Bf ? n.zone = o.join("") : i ? r.push(o.join("")) : r.push(kg(o))), n.address = r.join(""), n;
}
function Cg(e) {
  if (Mte(e, ":") < 2)
    return { host: e, isIPV6: !1 };
  const t = Fte(e);
  if (t.error)
    return { host: e, isIPV6: !1 };
  {
    let n = t.address, r = t.address;
    return t.zone && (n += "%" + t.zone, r += "%25" + t.zone), { host: n, isIPV6: !0, escapedHost: r };
  }
}
function Mte(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++)
    e[r] === t && n++;
  return n;
}
function Ute(e) {
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
function Vte(e, t) {
  const n = t !== !0 ? escape : unescape;
  return e.scheme !== void 0 && (e.scheme = n(e.scheme)), e.userinfo !== void 0 && (e.userinfo = n(e.userinfo)), e.host !== void 0 && (e.host = n(e.host)), e.path !== void 0 && (e.path = n(e.path)), e.query !== void 0 && (e.query = n(e.query)), e.fragment !== void 0 && (e.fragment = n(e.fragment)), e;
}
function zte(e) {
  const t = [];
  if (e.userinfo !== void 0 && (t.push(e.userinfo), t.push("@")), e.host !== void 0) {
    let n = unescape(e.host);
    if (!Ig(n)) {
      const r = Cg(n);
      r.isIPV6 === !0 ? n = `[${r.escapedHost}]` : n = e.host;
    }
    t.push(n);
  }
  return (typeof e.port == "number" || typeof e.port == "string") && (t.push(":"), t.push(String(e.port))), t.length ? t.join("") : void 0;
}
var jg = {
  nonSimpleDomain: Lte,
  recomposeAuthority: zte,
  normalizeComponentEncoding: Vte,
  removeDotSegments: Ute,
  isIPv4: Ig,
  isUUID: jte,
  normalizeIPv6: Cg
};
const { isUUID: Bte } = jg, Gte = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
function Lg(e) {
  return e.secure === !0 ? !0 : e.secure === !1 ? !1 : e.scheme ? e.scheme.length === 3 && (e.scheme[0] === "w" || e.scheme[0] === "W") && (e.scheme[1] === "s" || e.scheme[1] === "S") && (e.scheme[2] === "s" || e.scheme[2] === "S") : !1;
}
function qg(e) {
  return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
}
function Fg(e) {
  const t = String(e.scheme).toLowerCase() === "https";
  return (e.port === (t ? 443 : 80) || e.port === "") && (e.port = void 0), e.path || (e.path = "/"), e;
}
function Hte(e) {
  return e.secure = Lg(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
}
function Xte(e) {
  if ((e.port === (Lg(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
    const [t, n] = e.resourceName.split("?");
    e.path = t && t !== "/" ? t : void 0, e.query = n, e.resourceName = void 0;
  }
  return e.fragment = void 0, e;
}
function Kte(e, t) {
  if (!e.path)
    return e.error = "URN can not be parsed", e;
  const n = e.path.match(Gte);
  if (n) {
    const r = t.scheme || e.scheme || "urn";
    e.nid = n[1].toLowerCase(), e.nss = n[2];
    const o = `${r}:${t.nid || e.nid}`, s = Tu(o);
    e.path = void 0, s && (e = s.parse(e, t));
  } else
    e.error = e.error || "URN can not be parsed.";
  return e;
}
function Wte(e, t) {
  if (e.nid === void 0)
    throw new Error("URN without nid cannot be serialized");
  const n = t.scheme || e.scheme || "urn", r = e.nid.toLowerCase(), o = `${n}:${t.nid || r}`, s = Tu(o);
  s && (e = s.serialize(e, t));
  const i = e, a = e.nss;
  return i.path = `${r || t.nid}:${a}`, t.skipEscape = !0, i;
}
function Jte(e, t) {
  const n = e;
  return n.uuid = n.nss, n.nss = void 0, !t.tolerant && (!n.uuid || !Bte(n.uuid)) && (n.error = n.error || "UUID is not valid."), n;
}
function Yte(e) {
  const t = e;
  return t.nss = (e.uuid || "").toLowerCase(), t;
}
const Mg = (
  /** @type {SchemeHandler} */
  {
    scheme: "http",
    domainHost: !0,
    parse: qg,
    serialize: Fg
  }
), Qte = (
  /** @type {SchemeHandler} */
  {
    scheme: "https",
    domainHost: Mg.domainHost,
    parse: qg,
    serialize: Fg
  }
), ci = (
  /** @type {SchemeHandler} */
  {
    scheme: "ws",
    domainHost: !0,
    parse: Hte,
    serialize: Xte
  }
), Zte = (
  /** @type {SchemeHandler} */
  {
    scheme: "wss",
    domainHost: ci.domainHost,
    parse: ci.parse,
    serialize: ci.serialize
  }
), ene = (
  /** @type {SchemeHandler} */
  {
    scheme: "urn",
    parse: Kte,
    serialize: Wte,
    skipNormalize: !0
  }
), tne = (
  /** @type {SchemeHandler} */
  {
    scheme: "urn:uuid",
    parse: Jte,
    serialize: Yte,
    skipNormalize: !0
  }
), Ri = (
  /** @type {Record<SchemeName, SchemeHandler>} */
  {
    http: Mg,
    https: Qte,
    ws: ci,
    wss: Zte,
    urn: ene,
    "urn:uuid": tne
  }
);
Object.setPrototypeOf(Ri, null);
function Tu(e) {
  return e && (Ri[
    /** @type {SchemeName} */
    e
  ] || Ri[
    /** @type {SchemeName} */
    e.toLowerCase()
  ]) || void 0;
}
var nne = {
  SCHEMES: Ri,
  getSchemeHandler: Tu
};
const { normalizeIPv6: rne, removeDotSegments: zo, recomposeAuthority: one, normalizeComponentEncoding: ks, isIPv4: sne, nonSimpleDomain: ine } = jg, { SCHEMES: ane, getSchemeHandler: Ug } = nne;
function cne(e, t) {
  return typeof e == "string" ? e = /** @type {T} */
  pn(Rn(e, t), t) : typeof e == "object" && (e = /** @type {T} */
  Rn(pn(e, t), t)), e;
}
function lne(e, t, n) {
  const r = n ? Object.assign({ scheme: "null" }, n) : { scheme: "null" }, o = Vg(Rn(e, r), Rn(t, r), r, !0);
  return r.skipEscape = !0, pn(o, r);
}
function Vg(e, t, n, r) {
  const o = {};
  return r || (e = Rn(pn(e, n), n), t = Rn(pn(t, n), n)), n = n || {}, !n.tolerant && t.scheme ? (o.scheme = t.scheme, o.userinfo = t.userinfo, o.host = t.host, o.port = t.port, o.path = zo(t.path || ""), o.query = t.query) : (t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0 ? (o.userinfo = t.userinfo, o.host = t.host, o.port = t.port, o.path = zo(t.path || ""), o.query = t.query) : (t.path ? (t.path[0] === "/" ? o.path = zo(t.path) : ((e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0) && !e.path ? o.path = "/" + t.path : e.path ? o.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : o.path = t.path, o.path = zo(o.path)), o.query = t.query) : (o.path = e.path, t.query !== void 0 ? o.query = t.query : o.query = e.query), o.userinfo = e.userinfo, o.host = e.host, o.port = e.port), o.scheme = e.scheme), o.fragment = t.fragment, o;
}
function une(e, t, n) {
  return typeof e == "string" ? (e = unescape(e), e = pn(ks(Rn(e, n), !0), { ...n, skipEscape: !0 })) : typeof e == "object" && (e = pn(ks(e, !0), { ...n, skipEscape: !0 })), typeof t == "string" ? (t = unescape(t), t = pn(ks(Rn(t, n), !0), { ...n, skipEscape: !0 })) : typeof t == "object" && (t = pn(ks(t, !0), { ...n, skipEscape: !0 })), e.toLowerCase() === t.toLowerCase();
}
function pn(e, t) {
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
  }, r = Object.assign({}, t), o = [], s = Ug(r.scheme || n.scheme);
  s && s.serialize && s.serialize(n, r), n.path !== void 0 && (r.skipEscape ? n.path = unescape(n.path) : (n.path = escape(n.path), n.scheme !== void 0 && (n.path = n.path.split("%3A").join(":")))), r.reference !== "suffix" && n.scheme && o.push(n.scheme, ":");
  const i = one(n);
  if (i !== void 0 && (r.reference !== "suffix" && o.push("//"), o.push(i), n.path && n.path[0] !== "/" && o.push("/")), n.path !== void 0) {
    let a = n.path;
    !r.absolutePath && (!s || !s.absolutePath) && (a = zo(a)), i === void 0 && a[0] === "/" && a[1] === "/" && (a = "/%2F" + a.slice(2)), o.push(a);
  }
  return n.query !== void 0 && o.push("?", n.query), n.fragment !== void 0 && o.push("#", n.fragment), o.join("");
}
const pne = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
function Rn(e, t) {
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
  const s = e.match(pne);
  if (s) {
    if (r.scheme = s[1], r.userinfo = s[3], r.host = s[4], r.port = parseInt(s[5], 10), r.path = s[6] || "", r.query = s[7], r.fragment = s[8], isNaN(r.port) && (r.port = s[5]), r.host)
      if (sne(r.host) === !1) {
        const c = rne(r.host);
        r.host = c.host.toLowerCase(), o = c.isIPV6;
      } else
        o = !0;
    r.scheme === void 0 && r.userinfo === void 0 && r.host === void 0 && r.port === void 0 && r.query === void 0 && !r.path ? r.reference = "same-document" : r.scheme === void 0 ? r.reference = "relative" : r.fragment === void 0 ? r.reference = "absolute" : r.reference = "uri", n.reference && n.reference !== "suffix" && n.reference !== r.reference && (r.error = r.error || "URI is not a " + n.reference + " reference.");
    const i = Ug(n.scheme || r.scheme);
    if (!n.unicodeSupport && (!i || !i.unicodeSupport) && r.host && (n.domainHost || i && i.domainHost) && o === !1 && ine(r.host))
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
const Pu = {
  SCHEMES: ane,
  normalize: cne,
  resolve: lne,
  resolveComponent: Vg,
  equal: une,
  serialize: pn,
  parse: Rn
};
sa.exports = Pu;
sa.exports.default = Pu;
sa.exports.fastUri = Pu;
var zg = sa.exports;
Object.defineProperty(Su, "__esModule", { value: !0 });
const Bg = zg;
Bg.code = 'require("ajv/dist/runtime/uri").default';
Su.default = Bg;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
  var t = Xt;
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
  const r = ys, o = xo, s = Ir, i = ut, a = ce, c = We, p = Le, l = J, u = Cte, d = Su, m = (D, S) => new RegExp(D, S);
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
    var S, N, P, h, _, A, $, x, j, R, Z, ye, be, Oe, Ne, ht, _e, ze, hn, Zt, Ct, en, rr, or, sr;
    const jt = D.strict, ir = (S = D.code) === null || S === void 0 ? void 0 : S.optimize, Io = ir === !0 || ir === void 0 ? 1 : ir || 0, ko = (P = (N = D.code) === null || N === void 0 ? void 0 : N.regExp) !== null && P !== void 0 ? P : m, Ra = (h = D.uriResolver) !== null && h !== void 0 ? h : d.default;
    return {
      strictSchema: (A = (_ = D.strictSchema) !== null && _ !== void 0 ? _ : jt) !== null && A !== void 0 ? A : !0,
      strictNumbers: (x = ($ = D.strictNumbers) !== null && $ !== void 0 ? $ : jt) !== null && x !== void 0 ? x : !0,
      strictTypes: (R = (j = D.strictTypes) !== null && j !== void 0 ? j : jt) !== null && R !== void 0 ? R : "log",
      strictTuples: (ye = (Z = D.strictTuples) !== null && Z !== void 0 ? Z : jt) !== null && ye !== void 0 ? ye : "log",
      strictRequired: (Oe = (be = D.strictRequired) !== null && be !== void 0 ? be : jt) !== null && Oe !== void 0 ? Oe : !1,
      code: D.code ? { ...D.code, optimize: Io, regExp: ko } : { optimize: Io, regExp: ko },
      loopRequired: (Ne = D.loopRequired) !== null && Ne !== void 0 ? Ne : b,
      loopEnum: (ht = D.loopEnum) !== null && ht !== void 0 ? ht : b,
      meta: (_e = D.meta) !== null && _e !== void 0 ? _e : !0,
      messages: (ze = D.messages) !== null && ze !== void 0 ? ze : !0,
      inlineRefs: (hn = D.inlineRefs) !== null && hn !== void 0 ? hn : !0,
      schemaId: (Zt = D.schemaId) !== null && Zt !== void 0 ? Zt : "$id",
      addUsedSchema: (Ct = D.addUsedSchema) !== null && Ct !== void 0 ? Ct : !0,
      validateSchema: (en = D.validateSchema) !== null && en !== void 0 ? en : !0,
      validateFormats: (rr = D.validateFormats) !== null && rr !== void 0 ? rr : !0,
      unicodeRegExp: (or = D.unicodeRegExp) !== null && or !== void 0 ? or : !0,
      int32range: (sr = D.int32range) !== null && sr !== void 0 ? sr : !0,
      uriResolver: Ra
    };
  }
  class T {
    constructor(S = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), S = this.opts = { ...S, ...w(S) };
      const { es5: N, lines: P } = this.opts.code;
      this.scope = new a.ValueScope({ scope: {}, prefixes: g, es5: N, lines: P }), this.logger = z(S.logger);
      const h = S.validateFormats;
      S.validateFormats = !1, this.RULES = (0, s.getRules)(), O.call(this, y, S, "NOT SUPPORTED"), O.call(this, v, S, "DEPRECATED", "warn"), this._metaOpts = q.call(this), S.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), S.keywords && E.call(this, S.keywords), typeof S.meta == "object" && this.addMetaSchema(S.meta), B.call(this), S.validateFormats = h;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: S, meta: N, schemaId: P } = this.opts;
      let h = u;
      P === "id" && (h = { ...u }, h.id = h.$id, delete h.$id), N && S && this.addMetaSchema(h, h[P], !1);
    }
    defaultMeta() {
      const { meta: S, schemaId: N } = this.opts;
      return this.opts.defaultMeta = typeof S == "object" ? S[N] || S : void 0;
    }
    validate(S, N) {
      let P;
      if (typeof S == "string") {
        if (P = this.getSchema(S), !P)
          throw new Error(`no schema with key or ref "${S}"`);
      } else
        P = this.compile(S);
      const h = P(N);
      return "$async" in P || (this.errors = P.errors), h;
    }
    compile(S, N) {
      const P = this._addSchema(S, N);
      return P.validate || this._compileSchemaEnv(P);
    }
    compileAsync(S, N) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: P } = this.opts;
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
          return await (this._loading[R] = P(R));
        } finally {
          delete this._loading[R];
        }
      }
    }
    // Adds schema to the instance
    addSchema(S, N, P, h = this.opts.validateSchema) {
      if (Array.isArray(S)) {
        for (const A of S)
          this.addSchema(A, void 0, P, h);
        return this;
      }
      let _;
      if (typeof S == "object") {
        const { schemaId: A } = this.opts;
        if (_ = S[A], _ !== void 0 && typeof _ != "string")
          throw new Error(`schema ${A} must be string`);
      }
      return N = (0, c.normalizeId)(N || _), this._checkUnique(N), this.schemas[N] = this._addSchema(S, P, N, h, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(S, N, P = this.opts.validateSchema) {
      return this.addSchema(S, N, !0, P), this;
    }
    //  Validate schema against its meta-schema
    validateSchema(S, N) {
      if (typeof S == "boolean")
        return !0;
      let P;
      if (P = S.$schema, P !== void 0 && typeof P != "string")
        throw new Error("$schema must be a string");
      if (P = P || this.opts.defaultMeta || this.defaultMeta(), !P)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const h = this.validate(P, S);
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
        const { schemaId: P } = this.opts, h = new i.SchemaEnv({ schema: {}, schemaId: P });
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
          let P = S[this.opts.schemaId];
          return P && (P = (0, c.normalizeId)(P), delete this.schemas[P], delete this.refs[P]), this;
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
      let P;
      if (typeof S == "string")
        P = S, typeof N == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), N.keyword = P);
      else if (typeof S == "object" && N === void 0) {
        if (N = S, P = N.keyword, Array.isArray(P) && !P.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (F.call(this, P, N), !N)
        return (0, l.eachItem)(P, (_) => U.call(this, _)), this;
      V.call(this, N);
      const h = {
        ...N,
        type: (0, p.getJSONTypes)(N.type),
        schemaType: (0, p.getJSONTypes)(N.schemaType)
      };
      return (0, l.eachItem)(P, h.type.length === 0 ? (_) => U.call(this, _, h) : (_) => h.type.forEach((A) => U.call(this, _, h, A))), this;
    }
    getKeyword(S) {
      const N = this.RULES.all[S];
      return typeof N == "object" ? N.definition : !!N;
    }
    // Remove keyword
    removeKeyword(S) {
      const { RULES: N } = this;
      delete N.keywords[S], delete N.all[S];
      for (const P of N.rules) {
        const h = P.rules.findIndex((_) => _.keyword === S);
        h >= 0 && P.rules.splice(h, 1);
      }
      return this;
    }
    // Add format
    addFormat(S, N) {
      return typeof N == "string" && (N = new RegExp(N)), this.formats[S] = N, this;
    }
    errorsText(S = this.errors, { separator: N = ", ", dataVar: P = "data" } = {}) {
      return !S || S.length === 0 ? "No errors" : S.map((h) => `${P}${h.instancePath} ${h.message}`).reduce((h, _) => h + N + _);
    }
    $dataMetaSchema(S, N) {
      const P = this.RULES.all;
      S = JSON.parse(JSON.stringify(S));
      for (const h of N) {
        const _ = h.split("/").slice(1);
        let A = S;
        for (const $ of _)
          A = A[$];
        for (const $ in P) {
          const x = P[$];
          if (typeof x != "object")
            continue;
          const { $data: j } = x.definition, R = A[$];
          j && R && (A[$] = X(R));
        }
      }
      return S;
    }
    _removeAllSchemas(S, N) {
      for (const P in S) {
        const h = S[P];
        (!N || N.test(P)) && (typeof h == "string" ? delete S[P] : h && !h.meta && (this._cache.delete(h.schema), delete S[P]));
      }
    }
    _addSchema(S, N, P, h = this.opts.validateSchema, _ = this.opts.addUsedSchema) {
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
      P = (0, c.normalizeId)(A || P);
      const j = c.getSchemaRefs.call(this, S, P);
      return x = new i.SchemaEnv({ schema: S, schemaId: $, meta: N, baseId: P, localRefs: j }), this._cache.set(x.schema, x), _ && !P.startsWith("#") && (P && this._checkUnique(P), this.refs[P] = x), h && this.validateSchema(S, !0), x;
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
  function O(D, S, N, P = "error") {
    for (const h in D) {
      const _ = h;
      _ in S && this.logger[P](`${N}: option ${h}. ${D[_]}`);
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
    if ((0, l.eachItem)(D, (P) => {
      if (N.keywords[P])
        throw new Error(`Keyword ${P} is already defined`);
      if (!H.test(P))
        throw new Error(`Keyword ${P} has invalid name`);
    }), !!S && S.$data && !("code" in S || "validate" in S))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function U(D, S, N) {
    var P;
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
    S.before ? G.call(this, A, $, S.before) : A.rules.push($), _.all[D] = $, (P = S.implements) === null || P === void 0 || P.forEach((x) => this.addKeyword(x));
  }
  function G(D, S, N) {
    const P = D.rules.findIndex((h) => h.keyword === N);
    P >= 0 ? D.rules.splice(P, 0, S) : (D.rules.push(S), this.logger.warn(`rule ${N} is not defined`));
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
})(tg);
var Ou = {}, Nu = {}, Ru = {};
Object.defineProperty(Ru, "__esModule", { value: !0 });
const dne = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
Ru.default = dne;
var An = {};
Object.defineProperty(An, "__esModule", { value: !0 });
An.callRef = An.getValidate = void 0;
const fne = xo, Gf = fe, vt = ce, Ur = St, Hf = ut, Cs = J, mne = {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    const { gen: t, schema: n, it: r } = e, { baseId: o, schemaEnv: s, validateName: i, opts: a, self: c } = r, { root: p } = s;
    if ((n === "#" || n === "#/") && o === p.baseId)
      return u();
    const l = Hf.resolveRef.call(c, p, o, n);
    if (l === void 0)
      throw new fne.default(r.opts.uriResolver, o, n);
    if (l instanceof Hf.SchemaEnv)
      return d(l);
    return m(l);
    function u() {
      if (s === p)
        return li(e, i, s, s.$async);
      const f = t.scopeValue("root", { ref: p });
      return li(e, (0, vt._)`${f}.validate`, p, p.$async);
    }
    function d(f) {
      const g = Gg(e, f);
      li(e, g, f, f.$async);
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
function Gg(e, t) {
  const { gen: n } = e;
  return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, vt._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
}
An.getValidate = Gg;
function li(e, t, n, r) {
  const { gen: o, it: s } = e, { allErrors: i, schemaEnv: a, opts: c } = s, p = c.passContext ? Ur.default.this : vt.nil;
  r ? l() : u();
  function l() {
    if (!a.$async)
      throw new Error("async schema referenced by sync schema");
    const f = o.let("valid");
    o.try(() => {
      o.code((0, vt._)`await ${(0, Gf.callValidateCode)(e, t, p)}`), m(t), i || o.assign(f, !0);
    }, (g) => {
      o.if((0, vt._)`!(${g} instanceof ${s.ValidationError})`, () => o.throw(g)), d(g), i || o.assign(f, !1);
    }), e.ok(f);
  }
  function u() {
    e.result((0, Gf.callValidateCode)(e, t, p), () => m(t), () => d(t));
  }
  function d(f) {
    const g = (0, vt._)`${f}.errors`;
    o.assign(Ur.default.vErrors, (0, vt._)`${Ur.default.vErrors} === null ? ${g} : ${Ur.default.vErrors}.concat(${g})`), o.assign(Ur.default.errors, (0, vt._)`${Ur.default.vErrors}.length`);
  }
  function m(f) {
    var g;
    if (!s.opts.unevaluated)
      return;
    const y = (g = n == null ? void 0 : n.validate) === null || g === void 0 ? void 0 : g.evaluated;
    if (s.props !== !0)
      if (y && !y.dynamicProps)
        y.props !== void 0 && (s.props = Cs.mergeEvaluated.props(o, y.props, s.props));
      else {
        const v = o.var("props", (0, vt._)`${f}.evaluated.props`);
        s.props = Cs.mergeEvaluated.props(o, v, s.props, vt.Name);
      }
    if (s.items !== !0)
      if (y && !y.dynamicItems)
        y.items !== void 0 && (s.items = Cs.mergeEvaluated.items(o, y.items, s.items));
      else {
        const v = o.var("items", (0, vt._)`${f}.evaluated.items`);
        s.items = Cs.mergeEvaluated.items(o, v, s.items, vt.Name);
      }
  }
}
An.callRef = li;
An.default = mne;
Object.defineProperty(Nu, "__esModule", { value: !0 });
const hne = Ru, yne = An, gne = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  hne.default,
  yne.default
];
Nu.default = gne;
var Au = {}, Du = {};
Object.defineProperty(Du, "__esModule", { value: !0 });
const Ai = ce, Ln = Ai.operators, Di = {
  maximum: { okStr: "<=", ok: Ln.LTE, fail: Ln.GT },
  minimum: { okStr: ">=", ok: Ln.GTE, fail: Ln.LT },
  exclusiveMaximum: { okStr: "<", ok: Ln.LT, fail: Ln.GTE },
  exclusiveMinimum: { okStr: ">", ok: Ln.GT, fail: Ln.LTE }
}, vne = {
  message: ({ keyword: e, schemaCode: t }) => (0, Ai.str)`must be ${Di[e].okStr} ${t}`,
  params: ({ keyword: e, schemaCode: t }) => (0, Ai._)`{comparison: ${Di[e].okStr}, limit: ${t}}`
}, bne = {
  keyword: Object.keys(Di),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: vne,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e;
    e.fail$data((0, Ai._)`${n} ${Di[t].fail} ${r} || isNaN(${n})`);
  }
};
Du.default = bne;
var Iu = {};
Object.defineProperty(Iu, "__esModule", { value: !0 });
const Xo = ce, wne = {
  message: ({ schemaCode: e }) => (0, Xo.str)`must be multiple of ${e}`,
  params: ({ schemaCode: e }) => (0, Xo._)`{multipleOf: ${e}}`
}, xne = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: wne,
  code(e) {
    const { gen: t, data: n, schemaCode: r, it: o } = e, s = o.opts.multipleOfPrecision, i = t.let("res"), a = s ? (0, Xo._)`Math.abs(Math.round(${i}) - ${i}) > 1e-${s}` : (0, Xo._)`${i} !== parseInt(${i})`;
    e.fail$data((0, Xo._)`(${r} === 0 || (${i} = ${n}/${r}, ${a}))`);
  }
};
Iu.default = xne;
var ku = {}, Cu = {};
Object.defineProperty(Cu, "__esModule", { value: !0 });
function Hg(e) {
  const t = e.length;
  let n = 0, r = 0, o;
  for (; r < t; )
    n++, o = e.charCodeAt(r++), o >= 55296 && o <= 56319 && r < t && (o = e.charCodeAt(r), (o & 64512) === 56320 && r++);
  return n;
}
Cu.default = Hg;
Hg.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(ku, "__esModule", { value: !0 });
const fr = ce, _ne = J, $ne = Cu, Ene = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxLength" ? "more" : "fewer";
    return (0, fr.str)`must NOT have ${n} than ${t} characters`;
  },
  params: ({ schemaCode: e }) => (0, fr._)`{limit: ${e}}`
}, Sne = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: Ene,
  code(e) {
    const { keyword: t, data: n, schemaCode: r, it: o } = e, s = t === "maxLength" ? fr.operators.GT : fr.operators.LT, i = o.opts.unicode === !1 ? (0, fr._)`${n}.length` : (0, fr._)`${(0, _ne.useFunc)(e.gen, $ne.default)}(${n})`;
    e.fail$data((0, fr._)`${i} ${s} ${r}`);
  }
};
ku.default = Sne;
var ju = {};
Object.defineProperty(ju, "__esModule", { value: !0 });
const Tne = fe, Ii = ce, Pne = {
  message: ({ schemaCode: e }) => (0, Ii.str)`must match pattern "${e}"`,
  params: ({ schemaCode: e }) => (0, Ii._)`{pattern: ${e}}`
}, One = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: Pne,
  code(e) {
    const { data: t, $data: n, schema: r, schemaCode: o, it: s } = e, i = s.opts.unicodeRegExp ? "u" : "", a = n ? (0, Ii._)`(new RegExp(${o}, ${i}))` : (0, Tne.usePattern)(e, r);
    e.fail$data((0, Ii._)`!${a}.test(${t})`);
  }
};
ju.default = One;
var Lu = {};
Object.defineProperty(Lu, "__esModule", { value: !0 });
const Ko = ce, Nne = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxProperties" ? "more" : "fewer";
    return (0, Ko.str)`must NOT have ${n} than ${t} properties`;
  },
  params: ({ schemaCode: e }) => (0, Ko._)`{limit: ${e}}`
}, Rne = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: Nne,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, o = t === "maxProperties" ? Ko.operators.GT : Ko.operators.LT;
    e.fail$data((0, Ko._)`Object.keys(${n}).length ${o} ${r}`);
  }
};
Lu.default = Rne;
var qu = {};
Object.defineProperty(qu, "__esModule", { value: !0 });
const Lo = fe, Wo = ce, Ane = J, Dne = {
  message: ({ params: { missingProperty: e } }) => (0, Wo.str)`must have required property '${e}'`,
  params: ({ params: { missingProperty: e } }) => (0, Wo._)`{missingProperty: ${e}}`
}, Ine = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: Dne,
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
          (0, Ane.checkStrictMode)(i, v, i.opts.strictRequired);
        }
    }
    function p() {
      if (c || s)
        e.block$data(Wo.nil, u);
      else
        for (const m of n)
          (0, Lo.checkReportMissingProp)(e, m);
    }
    function l() {
      const m = t.let("missing");
      if (c || s) {
        const f = t.let("valid", !0);
        e.block$data(f, () => d(m, f)), e.ok(f);
      } else
        t.if((0, Lo.checkMissingProp)(e, n, m)), (0, Lo.reportMissingProp)(e, m), t.else();
    }
    function u() {
      t.forOf("prop", r, (m) => {
        e.setParams({ missingProperty: m }), t.if((0, Lo.noPropertyInData)(t, o, m, a.ownProperties), () => e.error());
      });
    }
    function d(m, f) {
      e.setParams({ missingProperty: m }), t.forOf(m, r, () => {
        t.assign(f, (0, Lo.propertyInData)(t, o, m, a.ownProperties)), t.if((0, Wo.not)(f), () => {
          e.error(), t.break();
        });
      }, Wo.nil);
    }
  }
};
qu.default = Ine;
var Fu = {};
Object.defineProperty(Fu, "__esModule", { value: !0 });
const Jo = ce, kne = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxItems" ? "more" : "fewer";
    return (0, Jo.str)`must NOT have ${n} than ${t} items`;
  },
  params: ({ schemaCode: e }) => (0, Jo._)`{limit: ${e}}`
}, Cne = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: kne,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, o = t === "maxItems" ? Jo.operators.GT : Jo.operators.LT;
    e.fail$data((0, Jo._)`${n}.length ${o} ${r}`);
  }
};
Fu.default = Cne;
var Mu = {}, gs = {};
Object.defineProperty(gs, "__esModule", { value: !0 });
const Xg = na;
Xg.code = 'require("ajv/dist/runtime/equal").default';
gs.default = Xg;
Object.defineProperty(Mu, "__esModule", { value: !0 });
const wc = Le, He = ce, jne = J, Lne = gs, qne = {
  message: ({ params: { i: e, j: t } }) => (0, He.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
  params: ({ params: { i: e, j: t } }) => (0, He._)`{i: ${e}, j: ${t}}`
}, Fne = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: qne,
  code(e) {
    const { gen: t, data: n, $data: r, schema: o, parentSchema: s, schemaCode: i, it: a } = e;
    if (!r && !o)
      return;
    const c = t.let("valid"), p = s.items ? (0, wc.getSchemaTypes)(s.items) : [];
    e.block$data(c, l, (0, He._)`${i} === false`), e.ok(c);
    function l() {
      const f = t.let("i", (0, He._)`${n}.length`), g = t.let("j");
      e.setParams({ i: f, j: g }), t.assign(c, !0), t.if((0, He._)`${f} > 1`, () => (u() ? d : m)(f, g));
    }
    function u() {
      return p.length > 0 && !p.some((f) => f === "object" || f === "array");
    }
    function d(f, g) {
      const y = t.name("item"), v = (0, wc.checkDataTypes)(p, y, a.opts.strictNumbers, wc.DataType.Wrong), b = t.const("indices", (0, He._)`{}`);
      t.for((0, He._)`;${f}--;`, () => {
        t.let(y, (0, He._)`${n}[${f}]`), t.if(v, (0, He._)`continue`), p.length > 1 && t.if((0, He._)`typeof ${y} == "string"`, (0, He._)`${y} += "_"`), t.if((0, He._)`typeof ${b}[${y}] == "number"`, () => {
          t.assign(g, (0, He._)`${b}[${y}]`), e.error(), t.assign(c, !1).break();
        }).code((0, He._)`${b}[${y}] = ${f}`);
      });
    }
    function m(f, g) {
      const y = (0, jne.useFunc)(t, Lne.default), v = t.name("outer");
      t.label(v).for((0, He._)`;${f}--;`, () => t.for((0, He._)`${g} = ${f}; ${g}--;`, () => t.if((0, He._)`${y}(${n}[${f}], ${n}[${g}])`, () => {
        e.error(), t.assign(c, !1).break(v);
      })));
    }
  }
};
Mu.default = Fne;
var Uu = {};
Object.defineProperty(Uu, "__esModule", { value: !0 });
const wl = ce, Mne = J, Une = gs, Vne = {
  message: "must be equal to constant",
  params: ({ schemaCode: e }) => (0, wl._)`{allowedValue: ${e}}`
}, zne = {
  keyword: "const",
  $data: !0,
  error: Vne,
  code(e) {
    const { gen: t, data: n, $data: r, schemaCode: o, schema: s } = e;
    r || s && typeof s == "object" ? e.fail$data((0, wl._)`!${(0, Mne.useFunc)(t, Une.default)}(${n}, ${o})`) : e.fail((0, wl._)`${s} !== ${n}`);
  }
};
Uu.default = zne;
var Vu = {};
Object.defineProperty(Vu, "__esModule", { value: !0 });
const Bo = ce, Bne = J, Gne = gs, Hne = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: e }) => (0, Bo._)`{allowedValues: ${e}}`
}, Xne = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: Hne,
  code(e) {
    const { gen: t, data: n, $data: r, schema: o, schemaCode: s, it: i } = e;
    if (!r && o.length === 0)
      throw new Error("enum must have non-empty array");
    const a = o.length >= i.opts.loopEnum;
    let c;
    const p = () => c ?? (c = (0, Bne.useFunc)(t, Gne.default));
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
Vu.default = Xne;
Object.defineProperty(Au, "__esModule", { value: !0 });
const Kne = Du, Wne = Iu, Jne = ku, Yne = ju, Qne = Lu, Zne = qu, ere = Fu, tre = Mu, nre = Uu, rre = Vu, ore = [
  // number
  Kne.default,
  Wne.default,
  // string
  Jne.default,
  Yne.default,
  // object
  Qne.default,
  Zne.default,
  // array
  ere.default,
  tre.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  nre.default,
  rre.default
];
Au.default = ore;
var zu = {}, _o = {};
Object.defineProperty(_o, "__esModule", { value: !0 });
_o.validateAdditionalItems = void 0;
const mr = ce, xl = J, sre = {
  message: ({ params: { len: e } }) => (0, mr.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, mr._)`{limit: ${e}}`
}, ire = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: sre,
  code(e) {
    const { parentSchema: t, it: n } = e, { items: r } = t;
    if (!Array.isArray(r)) {
      (0, xl.checkStrictMode)(n, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    Kg(e, r);
  }
};
function Kg(e, t) {
  const { gen: n, schema: r, data: o, keyword: s, it: i } = e;
  i.items = !0;
  const a = n.const("len", (0, mr._)`${o}.length`);
  if (r === !1)
    e.setParams({ len: t.length }), e.pass((0, mr._)`${a} <= ${t.length}`);
  else if (typeof r == "object" && !(0, xl.alwaysValidSchema)(i, r)) {
    const p = n.var("valid", (0, mr._)`${a} <= ${t.length}`);
    n.if((0, mr.not)(p), () => c(p)), e.ok(p);
  }
  function c(p) {
    n.forRange("i", t.length, a, (l) => {
      e.subschema({ keyword: s, dataProp: l, dataPropType: xl.Type.Num }, p), i.allErrors || n.if((0, mr.not)(p), () => n.break());
    });
  }
}
_o.validateAdditionalItems = Kg;
_o.default = ire;
var Bu = {}, $o = {};
Object.defineProperty($o, "__esModule", { value: !0 });
$o.validateTuple = void 0;
const Xf = ce, ui = J, are = fe, cre = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    const { schema: t, it: n } = e;
    if (Array.isArray(t))
      return Wg(e, "additionalItems", t);
    n.items = !0, !(0, ui.alwaysValidSchema)(n, t) && e.ok((0, are.validateArray)(e));
  }
};
function Wg(e, t, n = e.schema) {
  const { gen: r, parentSchema: o, data: s, keyword: i, it: a } = e;
  l(o), a.opts.unevaluated && n.length && a.items !== !0 && (a.items = ui.mergeEvaluated.items(r, n.length, a.items));
  const c = r.name("valid"), p = r.const("len", (0, Xf._)`${s}.length`);
  n.forEach((u, d) => {
    (0, ui.alwaysValidSchema)(a, u) || (r.if((0, Xf._)`${p} > ${d}`, () => e.subschema({
      keyword: i,
      schemaProp: d,
      dataProp: d
    }, c)), e.ok(c));
  });
  function l(u) {
    const { opts: d, errSchemaPath: m } = a, f = n.length, g = f === u.minItems && (f === u.maxItems || u[t] === !1);
    if (d.strictTuples && !g) {
      const y = `"${i}" is ${f}-tuple, but minItems or maxItems/${t} are not specified or different at path "${m}"`;
      (0, ui.checkStrictMode)(a, y, d.strictTuples);
    }
  }
}
$o.validateTuple = Wg;
$o.default = cre;
Object.defineProperty(Bu, "__esModule", { value: !0 });
const lre = $o, ure = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => (0, lre.validateTuple)(e, "items")
};
Bu.default = ure;
var Gu = {};
Object.defineProperty(Gu, "__esModule", { value: !0 });
const Kf = ce, pre = J, dre = fe, fre = _o, mre = {
  message: ({ params: { len: e } }) => (0, Kf.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, Kf._)`{limit: ${e}}`
}, hre = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: mre,
  code(e) {
    const { schema: t, parentSchema: n, it: r } = e, { prefixItems: o } = n;
    r.items = !0, !(0, pre.alwaysValidSchema)(r, t) && (o ? (0, fre.validateAdditionalItems)(e, o) : e.ok((0, dre.validateArray)(e)));
  }
};
Gu.default = hre;
var Hu = {};
Object.defineProperty(Hu, "__esModule", { value: !0 });
const Dt = ce, js = J, yre = {
  message: ({ params: { min: e, max: t } }) => t === void 0 ? (0, Dt.str)`must contain at least ${e} valid item(s)` : (0, Dt.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
  params: ({ params: { min: e, max: t } }) => t === void 0 ? (0, Dt._)`{minContains: ${e}}` : (0, Dt._)`{minContains: ${e}, maxContains: ${t}}`
}, gre = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: yre,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: o, it: s } = e;
    let i, a;
    const { minContains: c, maxContains: p } = r;
    s.opts.next ? (i = c === void 0 ? 1 : c, a = p) : i = 1;
    const l = t.const("len", (0, Dt._)`${o}.length`);
    if (e.setParams({ min: i, max: a }), a === void 0 && i === 0) {
      (0, js.checkStrictMode)(s, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (a !== void 0 && i > a) {
      (0, js.checkStrictMode)(s, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, js.alwaysValidSchema)(s, n)) {
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
          dataPropType: js.Type.Num,
          compositeRule: !0
        }, g), y();
      });
    }
    function f(g) {
      t.code((0, Dt._)`${g}++`), a === void 0 ? t.if((0, Dt._)`${g} >= ${i}`, () => t.assign(u, !0).break()) : (t.if((0, Dt._)`${g} > ${a}`, () => t.assign(u, !1).break()), i === 1 ? t.assign(u, !0) : t.if((0, Dt._)`${g} >= ${i}`, () => t.assign(u, !0)));
    }
  }
};
Hu.default = gre;
var ia = {};
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
})(ia);
var Xu = {};
Object.defineProperty(Xu, "__esModule", { value: !0 });
const Jg = ce, vre = J, bre = {
  message: "property name must be valid",
  params: ({ params: e }) => (0, Jg._)`{propertyName: ${e.propertyName}}`
}, wre = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: bre,
  code(e) {
    const { gen: t, schema: n, data: r, it: o } = e;
    if ((0, vre.alwaysValidSchema)(o, n))
      return;
    const s = t.name("valid");
    t.forIn("key", r, (i) => {
      e.setParams({ propertyName: i }), e.subschema({
        keyword: "propertyNames",
        data: i,
        dataTypes: ["string"],
        propertyName: i,
        compositeRule: !0
      }, s), t.if((0, Jg.not)(s), () => {
        e.error(!0), o.allErrors || t.break();
      });
    }), e.ok(s);
  }
};
Xu.default = wre;
var aa = {};
Object.defineProperty(aa, "__esModule", { value: !0 });
const Ls = fe, Mt = ce, xre = St, qs = J, _re = {
  message: "must NOT have additional properties",
  params: ({ params: e }) => (0, Mt._)`{additionalProperty: ${e.additionalProperty}}`
}, $re = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: _re,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: o, errsCount: s, it: i } = e;
    if (!s)
      throw new Error("ajv implementation error");
    const { allErrors: a, opts: c } = i;
    if (i.props = !0, c.removeAdditional !== "all" && (0, qs.alwaysValidSchema)(i, n))
      return;
    const p = (0, Ls.allSchemaProperties)(r.properties), l = (0, Ls.allSchemaProperties)(r.patternProperties);
    u(), e.ok((0, Mt._)`${s} === ${xre.default.errors}`);
    function u() {
      t.forIn("key", o, (y) => {
        !p.length && !l.length ? f(y) : t.if(d(y), () => f(y));
      });
    }
    function d(y) {
      let v;
      if (p.length > 8) {
        const b = (0, qs.schemaRefOrVal)(i, r.properties, "properties");
        v = (0, Ls.isOwnProperty)(t, b, y);
      } else p.length ? v = (0, Mt.or)(...p.map((b) => (0, Mt._)`${y} === ${b}`)) : v = Mt.nil;
      return l.length && (v = (0, Mt.or)(v, ...l.map((b) => (0, Mt._)`${(0, Ls.usePattern)(e, b)}.test(${y})`))), (0, Mt.not)(v);
    }
    function m(y) {
      t.code((0, Mt._)`delete ${o}[${y}]`);
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
      if (typeof n == "object" && !(0, qs.alwaysValidSchema)(i, n)) {
        const v = t.name("valid");
        c.removeAdditional === "failing" ? (g(y, v, !1), t.if((0, Mt.not)(v), () => {
          e.reset(), m(y);
        })) : (g(y, v), a || t.if((0, Mt.not)(v), () => t.break()));
      }
    }
    function g(y, v, b) {
      const w = {
        keyword: "additionalProperties",
        dataProp: y,
        dataPropType: qs.Type.Str
      };
      b === !1 && Object.assign(w, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), e.subschema(w, v);
    }
  }
};
aa.default = $re;
var Ku = {};
Object.defineProperty(Ku, "__esModule", { value: !0 });
const Ere = Xt, Wf = fe, xc = J, Jf = aa, Sre = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: o, it: s } = e;
    s.opts.removeAdditional === "all" && r.additionalProperties === void 0 && Jf.default.code(new Ere.KeywordCxt(s, Jf.default, "additionalProperties"));
    const i = (0, Wf.allSchemaProperties)(n);
    for (const u of i)
      s.definedProperties.add(u);
    s.opts.unevaluated && i.length && s.props !== !0 && (s.props = xc.mergeEvaluated.props(t, (0, xc.toHash)(i), s.props));
    const a = i.filter((u) => !(0, xc.alwaysValidSchema)(s, n[u]));
    if (a.length === 0)
      return;
    const c = t.name("valid");
    for (const u of a)
      p(u) ? l(u) : (t.if((0, Wf.propertyInData)(t, o, u, s.opts.ownProperties)), l(u), s.allErrors || t.else().var(c, !0), t.endIf()), e.it.definedProperties.add(u), e.ok(c);
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
Ku.default = Sre;
var Wu = {};
Object.defineProperty(Wu, "__esModule", { value: !0 });
const Yf = fe, Fs = ce, Qf = J, Zf = J, Tre = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, data: r, parentSchema: o, it: s } = e, { opts: i } = s, a = (0, Yf.allSchemaProperties)(n), c = a.filter((g) => (0, Qf.alwaysValidSchema)(s, n[g]));
    if (a.length === 0 || c.length === a.length && (!s.opts.unevaluated || s.props === !0))
      return;
    const p = i.strictSchema && !i.allowMatchingProperties && o.properties, l = t.name("valid");
    s.props !== !0 && !(s.props instanceof Fs.Name) && (s.props = (0, Zf.evaluatedPropsToName)(t, s.props));
    const { props: u } = s;
    d();
    function d() {
      for (const g of a)
        p && m(g), s.allErrors ? f(g) : (t.var(l, !0), f(g), t.if(l));
    }
    function m(g) {
      for (const y in p)
        new RegExp(g).test(y) && (0, Qf.checkStrictMode)(s, `property ${y} matches pattern ${g} (use allowMatchingProperties)`);
    }
    function f(g) {
      t.forIn("key", r, (y) => {
        t.if((0, Fs._)`${(0, Yf.usePattern)(e, g)}.test(${y})`, () => {
          const v = c.includes(g);
          v || e.subschema({
            keyword: "patternProperties",
            schemaProp: g,
            dataProp: y,
            dataPropType: Zf.Type.Str
          }, l), s.opts.unevaluated && u !== !0 ? t.assign((0, Fs._)`${u}[${y}]`, !0) : !v && !s.allErrors && t.if((0, Fs.not)(l), () => t.break());
        });
      });
    }
  }
};
Wu.default = Tre;
var Ju = {};
Object.defineProperty(Ju, "__esModule", { value: !0 });
const Pre = J, Ore = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if ((0, Pre.alwaysValidSchema)(r, n)) {
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
Ju.default = Ore;
var Yu = {};
Object.defineProperty(Yu, "__esModule", { value: !0 });
const Nre = fe, Rre = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: Nre.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
Yu.default = Rre;
var Qu = {};
Object.defineProperty(Qu, "__esModule", { value: !0 });
const pi = ce, Are = J, Dre = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: e }) => (0, pi._)`{passingSchemas: ${e.passing}}`
}, Ire = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: Dre,
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
        (0, Are.alwaysValidSchema)(o, l) ? t.var(c, !0) : d = e.subschema({
          keyword: "oneOf",
          schemaProp: u,
          compositeRule: !0
        }, c), u > 0 && t.if((0, pi._)`${c} && ${i}`).assign(i, !1).assign(a, (0, pi._)`[${a}, ${u}]`).else(), t.if(c, () => {
          t.assign(i, !0), t.assign(a, u), d && e.mergeEvaluated(d, pi.Name);
        });
      });
    }
  }
};
Qu.default = Ire;
var Zu = {};
Object.defineProperty(Zu, "__esModule", { value: !0 });
const kre = J, Cre = {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    const o = t.name("valid");
    n.forEach((s, i) => {
      if ((0, kre.alwaysValidSchema)(r, s))
        return;
      const a = e.subschema({ keyword: "allOf", schemaProp: i }, o);
      e.ok(o), e.mergeEvaluated(a);
    });
  }
};
Zu.default = Cre;
var ep = {};
Object.defineProperty(ep, "__esModule", { value: !0 });
const ki = ce, Yg = J, jre = {
  message: ({ params: e }) => (0, ki.str)`must match "${e.ifClause}" schema`,
  params: ({ params: e }) => (0, ki._)`{failingKeyword: ${e.ifClause}}`
}, Lre = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: jre,
  code(e) {
    const { gen: t, parentSchema: n, it: r } = e;
    n.then === void 0 && n.else === void 0 && (0, Yg.checkStrictMode)(r, '"if" without "then" and "else" is ignored');
    const o = em(r, "then"), s = em(r, "else");
    if (!o && !s)
      return;
    const i = t.let("valid", !0), a = t.name("_valid");
    if (c(), e.reset(), o && s) {
      const l = t.let("ifClause");
      e.setParams({ ifClause: l }), t.if(a, p("then", l), p("else", l));
    } else o ? t.if(a, p("then")) : t.if((0, ki.not)(a), p("else"));
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
        t.assign(i, a), e.mergeValidEvaluated(d, i), u ? t.assign(u, (0, ki._)`${l}`) : e.setParams({ ifClause: l });
      };
    }
  }
};
function em(e, t) {
  const n = e.schema[t];
  return n !== void 0 && !(0, Yg.alwaysValidSchema)(e, n);
}
ep.default = Lre;
var tp = {};
Object.defineProperty(tp, "__esModule", { value: !0 });
const qre = J, Fre = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: e, parentSchema: t, it: n }) {
    t.if === void 0 && (0, qre.checkStrictMode)(n, `"${e}" without "if" is ignored`);
  }
};
tp.default = Fre;
Object.defineProperty(zu, "__esModule", { value: !0 });
const Mre = _o, Ure = Bu, Vre = $o, zre = Gu, Bre = Hu, Gre = ia, Hre = Xu, Xre = aa, Kre = Ku, Wre = Wu, Jre = Ju, Yre = Yu, Qre = Qu, Zre = Zu, eoe = ep, toe = tp;
function noe(e = !1) {
  const t = [
    // any
    Jre.default,
    Yre.default,
    Qre.default,
    Zre.default,
    eoe.default,
    toe.default,
    // object
    Hre.default,
    Xre.default,
    Gre.default,
    Kre.default,
    Wre.default
  ];
  return e ? t.push(Ure.default, zre.default) : t.push(Mre.default, Vre.default), t.push(Bre.default), t;
}
zu.default = noe;
var np = {}, Eo = {};
Object.defineProperty(Eo, "__esModule", { value: !0 });
Eo.dynamicAnchor = void 0;
const _c = ce, roe = St, tm = ut, ooe = An, soe = {
  keyword: "$dynamicAnchor",
  schemaType: "string",
  code: (e) => Qg(e, e.schema)
};
function Qg(e, t) {
  const { gen: n, it: r } = e;
  r.schemaEnv.root.dynamicAnchors[t] = !0;
  const o = (0, _c._)`${roe.default.dynamicAnchors}${(0, _c.getProperty)(t)}`, s = r.errSchemaPath === "#" ? r.validateName : ioe(e);
  n.if((0, _c._)`!${o}`, () => n.assign(o, s));
}
Eo.dynamicAnchor = Qg;
function ioe(e) {
  const { schemaEnv: t, schema: n, self: r } = e.it, { root: o, baseId: s, localRefs: i, meta: a } = t.root, { schemaId: c } = r.opts, p = new tm.SchemaEnv({ schema: n, schemaId: c, root: o, baseId: s, localRefs: i, meta: a });
  return tm.compileSchema.call(r, p), (0, ooe.getValidate)(e, p);
}
Eo.default = soe;
var So = {};
Object.defineProperty(So, "__esModule", { value: !0 });
So.dynamicRef = void 0;
const nm = ce, aoe = St, rm = An, coe = {
  keyword: "$dynamicRef",
  schemaType: "string",
  code: (e) => Zg(e, e.schema)
};
function Zg(e, t) {
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
      const p = n.let("_v", (0, nm._)`${aoe.default.dynamicAnchors}${(0, nm.getProperty)(s)}`);
      n.if(p, a(p, c), a(o.validateName, c));
    } else
      a(o.validateName, c)();
  }
  function a(c, p) {
    return p ? () => n.block(() => {
      (0, rm.callRef)(e, c), n.let(p, !0);
    }) : () => (0, rm.callRef)(e, c);
  }
}
So.dynamicRef = Zg;
So.default = coe;
var rp = {};
Object.defineProperty(rp, "__esModule", { value: !0 });
const loe = Eo, uoe = J, poe = {
  keyword: "$recursiveAnchor",
  schemaType: "boolean",
  code(e) {
    e.schema ? (0, loe.dynamicAnchor)(e, "") : (0, uoe.checkStrictMode)(e.it, "$recursiveAnchor: false is ignored");
  }
};
rp.default = poe;
var op = {};
Object.defineProperty(op, "__esModule", { value: !0 });
const doe = So, foe = {
  keyword: "$recursiveRef",
  schemaType: "string",
  code: (e) => (0, doe.dynamicRef)(e, e.schema)
};
op.default = foe;
Object.defineProperty(np, "__esModule", { value: !0 });
const moe = Eo, hoe = So, yoe = rp, goe = op, voe = [moe.default, hoe.default, yoe.default, goe.default];
np.default = voe;
var sp = {}, ip = {};
Object.defineProperty(ip, "__esModule", { value: !0 });
const om = ia, boe = {
  keyword: "dependentRequired",
  type: "object",
  schemaType: "object",
  error: om.error,
  code: (e) => (0, om.validatePropertyDeps)(e)
};
ip.default = boe;
var ap = {};
Object.defineProperty(ap, "__esModule", { value: !0 });
const woe = ia, xoe = {
  keyword: "dependentSchemas",
  type: "object",
  schemaType: "object",
  code: (e) => (0, woe.validateSchemaDeps)(e)
};
ap.default = xoe;
var cp = {};
Object.defineProperty(cp, "__esModule", { value: !0 });
const _oe = J, $oe = {
  keyword: ["maxContains", "minContains"],
  type: "array",
  schemaType: "number",
  code({ keyword: e, parentSchema: t, it: n }) {
    t.contains === void 0 && (0, _oe.checkStrictMode)(n, `"${e}" without "contains" is ignored`);
  }
};
cp.default = $oe;
Object.defineProperty(sp, "__esModule", { value: !0 });
const Eoe = ip, Soe = ap, Toe = cp, Poe = [Eoe.default, Soe.default, Toe.default];
sp.default = Poe;
var lp = {}, up = {};
Object.defineProperty(up, "__esModule", { value: !0 });
const Un = ce, sm = J, Ooe = St, Noe = {
  message: "must NOT have unevaluated properties",
  params: ({ params: e }) => (0, Un._)`{unevaluatedProperty: ${e.unevaluatedProperty}}`
}, Roe = {
  keyword: "unevaluatedProperties",
  type: "object",
  schemaType: ["boolean", "object"],
  trackErrors: !0,
  error: Noe,
  code(e) {
    const { gen: t, schema: n, data: r, errsCount: o, it: s } = e;
    if (!o)
      throw new Error("ajv implementation error");
    const { allErrors: i, props: a } = s;
    a instanceof Un.Name ? t.if((0, Un._)`${a} !== true`, () => t.forIn("key", r, (u) => t.if(p(a, u), () => c(u)))) : a !== !0 && t.forIn("key", r, (u) => a === void 0 ? c(u) : t.if(l(a, u), () => c(u))), s.props = !0, e.ok((0, Un._)`${o} === ${Ooe.default.errors}`);
    function c(u) {
      if (n === !1) {
        e.setParams({ unevaluatedProperty: u }), e.error(), i || t.break();
        return;
      }
      if (!(0, sm.alwaysValidSchema)(s, n)) {
        const d = t.name("valid");
        e.subschema({
          keyword: "unevaluatedProperties",
          dataProp: u,
          dataPropType: sm.Type.Str
        }, d), i || t.if((0, Un.not)(d), () => t.break());
      }
    }
    function p(u, d) {
      return (0, Un._)`!${u} || !${u}[${d}]`;
    }
    function l(u, d) {
      const m = [];
      for (const f in u)
        u[f] === !0 && m.push((0, Un._)`${d} !== ${f}`);
      return (0, Un.and)(...m);
    }
  }
};
up.default = Roe;
var pp = {};
Object.defineProperty(pp, "__esModule", { value: !0 });
const hr = ce, im = J, Aoe = {
  message: ({ params: { len: e } }) => (0, hr.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, hr._)`{limit: ${e}}`
}, Doe = {
  keyword: "unevaluatedItems",
  type: "array",
  schemaType: ["boolean", "object"],
  error: Aoe,
  code(e) {
    const { gen: t, schema: n, data: r, it: o } = e, s = o.items || 0;
    if (s === !0)
      return;
    const i = t.const("len", (0, hr._)`${r}.length`);
    if (n === !1)
      e.setParams({ len: s }), e.fail((0, hr._)`${i} > ${s}`);
    else if (typeof n == "object" && !(0, im.alwaysValidSchema)(o, n)) {
      const c = t.var("valid", (0, hr._)`${i} <= ${s}`);
      t.if((0, hr.not)(c), () => a(c, s)), e.ok(c);
    }
    o.items = !0;
    function a(c, p) {
      t.forRange("i", p, i, (l) => {
        e.subschema({ keyword: "unevaluatedItems", dataProp: l, dataPropType: im.Type.Num }, c), o.allErrors || t.if((0, hr.not)(c), () => t.break());
      });
    }
  }
};
pp.default = Doe;
Object.defineProperty(lp, "__esModule", { value: !0 });
const Ioe = up, koe = pp, Coe = [Ioe.default, koe.default];
lp.default = Coe;
var dp = {}, fp = {};
Object.defineProperty(fp, "__esModule", { value: !0 });
const De = ce, joe = {
  message: ({ schemaCode: e }) => (0, De.str)`must match format "${e}"`,
  params: ({ schemaCode: e }) => (0, De._)`{format: ${e}}`
}, Loe = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: joe,
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
        const T = l.$async ? (0, De._)`(${g}.async ? await ${v}(${r}) : ${v}(${r}))` : (0, De._)`${v}(${r})`, O = (0, De._)`(typeof ${v} == "function" ? ${T} : ${v}.test(${r}))`;
        return (0, De._)`${v} && ${v} !== true && ${y} === ${t} && !${O}`;
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
          u.logger.warn(O());
          return;
        }
        throw new Error(O());
        function O() {
          return `unknown format "${s}" ignored in schema at path "${p}"`;
        }
      }
      function w(O) {
        const C = O instanceof RegExp ? (0, De.regexpCode)(O) : c.code.formats ? (0, De._)`${c.code.formats}${(0, De.getProperty)(s)}` : void 0, B = n.scopeValue("formats", { key: s, ref: O, code: C });
        return typeof O == "object" && !(O instanceof RegExp) ? [O.type || "string", O.validate, (0, De._)`${B}.validate`] : ["string", O, B];
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
fp.default = Loe;
Object.defineProperty(dp, "__esModule", { value: !0 });
const qoe = fp, Foe = [qoe.default];
dp.default = Foe;
var fo = {};
Object.defineProperty(fo, "__esModule", { value: !0 });
fo.contentVocabulary = fo.metadataVocabulary = void 0;
fo.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
fo.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(Ou, "__esModule", { value: !0 });
const Moe = Nu, Uoe = Au, Voe = zu, zoe = np, Boe = sp, Goe = lp, Hoe = dp, am = fo, Xoe = [
  zoe.default,
  Moe.default,
  Uoe.default,
  (0, Voe.default)(!0),
  Hoe.default,
  am.metadataVocabulary,
  am.contentVocabulary,
  Boe.default,
  Goe.default
];
Ou.default = Xoe;
var mp = {}, ca = {};
Object.defineProperty(ca, "__esModule", { value: !0 });
ca.DiscrError = void 0;
var cm;
(function(e) {
  e.Tag = "tag", e.Mapping = "mapping";
})(cm || (ca.DiscrError = cm = {}));
Object.defineProperty(mp, "__esModule", { value: !0 });
const Xr = ce, _l = ca, lm = ut, Koe = xo, Woe = J, Joe = {
  message: ({ params: { discrError: e, tagName: t } }) => e === _l.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
  params: ({ params: { discrError: e, tag: t, tagName: n } }) => (0, Xr._)`{error: ${e}, tag: ${n}, tagValue: ${t}}`
}, Yoe = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: Joe,
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
    const c = t.let("valid", !1), p = t.const("tag", (0, Xr._)`${n}${(0, Xr.getProperty)(a)}`);
    t.if((0, Xr._)`typeof ${p} == "string"`, () => l(), () => e.error(!1, { discrError: _l.DiscrError.Tag, tag: p, tagName: a })), e.ok(c);
    function l() {
      const m = d();
      t.if(!1);
      for (const f in m)
        t.elseIf((0, Xr._)`${p} === ${f}`), t.assign(c, u(m[f]));
      t.else(), e.error(!1, { discrError: _l.DiscrError.Mapping, tag: p, tagName: a }), t.endIf();
    }
    function u(m) {
      const f = t.name("valid"), g = e.subschema({ keyword: "oneOf", schemaProp: m }, f);
      return e.mergeEvaluated(g, Xr.Name), f;
    }
    function d() {
      var m;
      const f = {}, g = v(o);
      let y = !0;
      for (let T = 0; T < i.length; T++) {
        let O = i[T];
        if (O != null && O.$ref && !(0, Woe.schemaHasRulesButRef)(O, s.self.RULES)) {
          const B = O.$ref;
          if (O = lm.resolveRef.call(s.self, s.schemaEnv.root, s.baseId, B), O instanceof lm.SchemaEnv && (O = O.schema), O === void 0)
            throw new Koe.default(s.opts.uriResolver, s.baseId, B);
        }
        const C = (m = O == null ? void 0 : O.properties) === null || m === void 0 ? void 0 : m[a];
        if (typeof C != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${a}"`);
        y = y && (g || v(O)), b(C, T);
      }
      if (!y)
        throw new Error(`discriminator: "${a}" must be required`);
      return f;
      function v({ required: T }) {
        return Array.isArray(T) && T.includes(a);
      }
      function b(T, O) {
        if (T.const)
          w(T.const, O);
        else if (T.enum)
          for (const C of T.enum)
            w(C, O);
        else
          throw new Error(`discriminator: "properties/${a}" must have "const" or "enum"`);
      }
      function w(T, O) {
        if (typeof T != "string" || T in f)
          throw new Error(`discriminator: "${a}" values must be unique strings`);
        f[T] = O;
      }
    }
  }
};
mp.default = Yoe;
var hp = {};
const Qoe = "https://json-schema.org/draft/2020-12/schema", Zoe = "https://json-schema.org/draft/2020-12/schema", ese = {
  "https://json-schema.org/draft/2020-12/vocab/core": !0,
  "https://json-schema.org/draft/2020-12/vocab/applicator": !0,
  "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
  "https://json-schema.org/draft/2020-12/vocab/validation": !0,
  "https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
  "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
  "https://json-schema.org/draft/2020-12/vocab/content": !0
}, tse = "meta", nse = "Core and Validation specifications meta-schema", rse = [
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
], ose = [
  "object",
  "boolean"
], sse = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", ise = {
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
}, ase = {
  $schema: Qoe,
  $id: Zoe,
  $vocabulary: ese,
  $dynamicAnchor: tse,
  title: nse,
  allOf: rse,
  type: ose,
  $comment: sse,
  properties: ise
}, cse = "https://json-schema.org/draft/2020-12/schema", lse = "https://json-schema.org/draft/2020-12/meta/applicator", use = {
  "https://json-schema.org/draft/2020-12/vocab/applicator": !0
}, pse = "meta", dse = "Applicator vocabulary meta-schema", fse = [
  "object",
  "boolean"
], mse = {
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
}, hse = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $dynamicRef: "#meta"
    }
  }
}, yse = {
  $schema: cse,
  $id: lse,
  $vocabulary: use,
  $dynamicAnchor: pse,
  title: dse,
  type: fse,
  properties: mse,
  $defs: hse
}, gse = "https://json-schema.org/draft/2020-12/schema", vse = "https://json-schema.org/draft/2020-12/meta/unevaluated", bse = {
  "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0
}, wse = "meta", xse = "Unevaluated applicator vocabulary meta-schema", _se = [
  "object",
  "boolean"
], $se = {
  unevaluatedItems: {
    $dynamicRef: "#meta"
  },
  unevaluatedProperties: {
    $dynamicRef: "#meta"
  }
}, Ese = {
  $schema: gse,
  $id: vse,
  $vocabulary: bse,
  $dynamicAnchor: wse,
  title: xse,
  type: _se,
  properties: $se
}, Sse = "https://json-schema.org/draft/2020-12/schema", Tse = "https://json-schema.org/draft/2020-12/meta/content", Pse = {
  "https://json-schema.org/draft/2020-12/vocab/content": !0
}, Ose = "meta", Nse = "Content vocabulary meta-schema", Rse = [
  "object",
  "boolean"
], Ase = {
  contentEncoding: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentSchema: {
    $dynamicRef: "#meta"
  }
}, Dse = {
  $schema: Sse,
  $id: Tse,
  $vocabulary: Pse,
  $dynamicAnchor: Ose,
  title: Nse,
  type: Rse,
  properties: Ase
}, Ise = "https://json-schema.org/draft/2020-12/schema", kse = "https://json-schema.org/draft/2020-12/meta/core", Cse = {
  "https://json-schema.org/draft/2020-12/vocab/core": !0
}, jse = "meta", Lse = "Core vocabulary meta-schema", qse = [
  "object",
  "boolean"
], Fse = {
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
}, Mse = {
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
}, Use = {
  $schema: Ise,
  $id: kse,
  $vocabulary: Cse,
  $dynamicAnchor: jse,
  title: Lse,
  type: qse,
  properties: Fse,
  $defs: Mse
}, Vse = "https://json-schema.org/draft/2020-12/schema", zse = "https://json-schema.org/draft/2020-12/meta/format-annotation", Bse = {
  "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0
}, Gse = "meta", Hse = "Format vocabulary meta-schema for annotation results", Xse = [
  "object",
  "boolean"
], Kse = {
  format: {
    type: "string"
  }
}, Wse = {
  $schema: Vse,
  $id: zse,
  $vocabulary: Bse,
  $dynamicAnchor: Gse,
  title: Hse,
  type: Xse,
  properties: Kse
}, Jse = "https://json-schema.org/draft/2020-12/schema", Yse = "https://json-schema.org/draft/2020-12/meta/meta-data", Qse = {
  "https://json-schema.org/draft/2020-12/vocab/meta-data": !0
}, Zse = "meta", eie = "Meta-data vocabulary meta-schema", tie = [
  "object",
  "boolean"
], nie = {
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
}, rie = {
  $schema: Jse,
  $id: Yse,
  $vocabulary: Qse,
  $dynamicAnchor: Zse,
  title: eie,
  type: tie,
  properties: nie
}, oie = "https://json-schema.org/draft/2020-12/schema", sie = "https://json-schema.org/draft/2020-12/meta/validation", iie = {
  "https://json-schema.org/draft/2020-12/vocab/validation": !0
}, aie = "meta", cie = "Validation vocabulary meta-schema", lie = [
  "object",
  "boolean"
], uie = {
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
}, pie = {
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
}, die = {
  $schema: oie,
  $id: sie,
  $vocabulary: iie,
  $dynamicAnchor: aie,
  title: cie,
  type: lie,
  properties: uie,
  $defs: pie
};
Object.defineProperty(hp, "__esModule", { value: !0 });
const fie = ase, mie = yse, hie = Ese, yie = Dse, gie = Use, vie = Wse, bie = rie, wie = die, xie = ["/properties"];
function _ie(e) {
  return [
    fie,
    mie,
    hie,
    yie,
    gie,
    t(this, vie),
    bie,
    t(this, wie)
  ].forEach((n) => this.addMetaSchema(n, void 0, !1)), this;
  function t(n, r) {
    return e ? n.$dataMetaSchema(r, xie) : r;
  }
}
hp.default = _ie;
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
  const n = tg, r = Ou, o = mp, s = hp, i = "https://json-schema.org/draft/2020-12/schema";
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
  var c = Xt;
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
  var l = ys;
  Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
    return l.default;
  } });
  var u = xo;
  Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
    return u.default;
  } });
})(hl, hl.exports);
var $ie = hl.exports, $l = { exports: {} }, ev = {};
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
      const N = G - S * X, P = U - D * X - (N < 0 ? 1 : 0);
      return (P === 23 || P === -1) && (N === 59 || N === -1) && V < 61;
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
  const T = -2147483648, O = 2 ** 31 - 1;
  function C(I) {
    return Number.isInteger(I) && I <= O && I >= T;
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
})(ev);
var tv = {}, El = { exports: {} }, nv = {}, Kt = {}, mo = {}, vs = {}, pe = {}, os = {};
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
})(os);
var Sl = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const t = os;
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
})(Sl);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const t = os, n = Sl;
  var r = os;
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
  var o = Sl;
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
  class O extends b {
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
      return this._for(new O("of", $, x, _), () => A(x));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(h, _, A, $ = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(h, (0, t._)`Object.keys(${_})`, A);
      const x = this._scope.toName(h);
      return this._for(new O("in", $, x, _), () => A(x));
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
  function z(P, h) {
    for (const _ in h)
      P[_] = (P[_] || 0) + (h[_] || 0);
    return P;
  }
  function H(P, h) {
    return h instanceof t._CodeOrName ? z(P, h.names) : P;
  }
  function F(P, h, _) {
    if (P instanceof t.Name)
      return A(P);
    if (!$(P))
      return P;
    return new t._Code(P._items.reduce((x, j) => (j instanceof t.Name && (j = A(j)), j instanceof t._Code ? x.push(...j._items) : x.push(j), x), []));
    function A(x) {
      const j = _[x.str];
      return j === void 0 || h[x.str] !== 1 ? x : (delete h[x.str], j);
    }
    function $(x) {
      return x instanceof t._Code && x._items.some((j) => j instanceof t.Name && h[j.str] === 1 && _[j.str] !== void 0);
    }
  }
  function U(P, h) {
    for (const _ in h)
      P[_] = (P[_] || 0) - (h[_] || 0);
  }
  function G(P) {
    return typeof P == "boolean" || typeof P == "number" || P === null ? !P : (0, t._)`!${N(P)}`;
  }
  e.not = G;
  const V = S(e.operators.AND);
  function K(...P) {
    return P.reduce(V);
  }
  e.and = K;
  const X = S(e.operators.OR);
  function D(...P) {
    return P.reduce(X);
  }
  e.or = D;
  function S(P) {
    return (h, _) => h === t.nil ? _ : _ === t.nil ? h : (0, t._)`${N(h)} ${P} ${N(_)}`;
  }
  function N(P) {
    return P instanceof t.Name ? P : (0, t._)`(${P})`;
  }
})(pe);
var Y = {};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.checkStrictMode = Y.getErrorPath = Y.Type = Y.useFunc = Y.setEvaluated = Y.evaluatedPropsToName = Y.mergeEvaluated = Y.eachItem = Y.unescapeJsonPointer = Y.escapeJsonPointer = Y.escapeFragment = Y.unescapeFragment = Y.schemaRefOrVal = Y.schemaHasRulesButRef = Y.schemaHasRules = Y.checkUnknownRules = Y.alwaysValidSchema = Y.toHash = void 0;
const xe = pe, Eie = os;
function Sie(e) {
  const t = {};
  for (const n of e)
    t[n] = !0;
  return t;
}
Y.toHash = Sie;
function Tie(e, t) {
  return typeof t == "boolean" ? t : Object.keys(t).length === 0 ? !0 : (rv(e, t), !ov(t, e.self.RULES.all));
}
Y.alwaysValidSchema = Tie;
function rv(e, t = e.schema) {
  const { opts: n, self: r } = e;
  if (!n.strictSchema || typeof t == "boolean")
    return;
  const o = r.RULES.keywords;
  for (const s in t)
    o[s] || av(e, `unknown keyword: "${s}"`);
}
Y.checkUnknownRules = rv;
function ov(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t[n])
      return !0;
  return !1;
}
Y.schemaHasRules = ov;
function Pie(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (n !== "$ref" && t.all[n])
      return !0;
  return !1;
}
Y.schemaHasRulesButRef = Pie;
function Oie({ topSchemaRef: e, schemaPath: t }, n, r, o) {
  if (!o) {
    if (typeof n == "number" || typeof n == "boolean")
      return n;
    if (typeof n == "string")
      return (0, xe._)`${n}`;
  }
  return (0, xe._)`${e}${t}${(0, xe.getProperty)(r)}`;
}
Y.schemaRefOrVal = Oie;
function Nie(e) {
  return sv(decodeURIComponent(e));
}
Y.unescapeFragment = Nie;
function Rie(e) {
  return encodeURIComponent(yp(e));
}
Y.escapeFragment = Rie;
function yp(e) {
  return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
Y.escapeJsonPointer = yp;
function sv(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
Y.unescapeJsonPointer = sv;
function Aie(e, t) {
  if (Array.isArray(e))
    for (const n of e)
      t(n);
  else
    t(e);
}
Y.eachItem = Aie;
function um({ mergeNames: e, mergeToName: t, mergeValues: n, resultToName: r }) {
  return (o, s, i, a) => {
    const c = i === void 0 ? s : i instanceof xe.Name ? (s instanceof xe.Name ? e(o, s, i) : t(o, s, i), i) : s instanceof xe.Name ? (t(o, i, s), s) : n(s, i);
    return a === xe.Name && !(c instanceof xe.Name) ? r(o, c) : c;
  };
}
Y.mergeEvaluated = {
  props: um({
    mergeNames: (e, t, n) => e.if((0, xe._)`${n} !== true && ${t} !== undefined`, () => {
      e.if((0, xe._)`${t} === true`, () => e.assign(n, !0), () => e.assign(n, (0, xe._)`${n} || {}`).code((0, xe._)`Object.assign(${n}, ${t})`));
    }),
    mergeToName: (e, t, n) => e.if((0, xe._)`${n} !== true`, () => {
      t === !0 ? e.assign(n, !0) : (e.assign(n, (0, xe._)`${n} || {}`), gp(e, n, t));
    }),
    mergeValues: (e, t) => e === !0 ? !0 : { ...e, ...t },
    resultToName: iv
  }),
  items: um({
    mergeNames: (e, t, n) => e.if((0, xe._)`${n} !== true && ${t} !== undefined`, () => e.assign(n, (0, xe._)`${t} === true ? true : ${n} > ${t} ? ${n} : ${t}`)),
    mergeToName: (e, t, n) => e.if((0, xe._)`${n} !== true`, () => e.assign(n, t === !0 ? !0 : (0, xe._)`${n} > ${t} ? ${n} : ${t}`)),
    mergeValues: (e, t) => e === !0 ? !0 : Math.max(e, t),
    resultToName: (e, t) => e.var("items", t)
  })
};
function iv(e, t) {
  if (t === !0)
    return e.var("props", !0);
  const n = e.var("props", (0, xe._)`{}`);
  return t !== void 0 && gp(e, n, t), n;
}
Y.evaluatedPropsToName = iv;
function gp(e, t, n) {
  Object.keys(n).forEach((r) => e.assign((0, xe._)`${t}${(0, xe.getProperty)(r)}`, !0));
}
Y.setEvaluated = gp;
const pm = {};
function Die(e, t) {
  return e.scopeValue("func", {
    ref: t,
    code: pm[t.code] || (pm[t.code] = new Eie._Code(t.code))
  });
}
Y.useFunc = Die;
var Tl;
(function(e) {
  e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
})(Tl || (Y.Type = Tl = {}));
function Iie(e, t, n) {
  if (e instanceof xe.Name) {
    const r = t === Tl.Num;
    return n ? r ? (0, xe._)`"[" + ${e} + "]"` : (0, xe._)`"['" + ${e} + "']"` : r ? (0, xe._)`"/" + ${e}` : (0, xe._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
  }
  return n ? (0, xe.getProperty)(e).toString() : "/" + yp(e);
}
Y.getErrorPath = Iie;
function av(e, t, n = e.opts.strictSchema) {
  if (n) {
    if (t = `strict mode: ${t}`, n === !0)
      throw new Error(t);
    e.self.logger.warn(t);
  }
}
Y.checkStrictMode = av;
var fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
const nt = pe, kie = {
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
fn.default = kie;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
  const t = pe, n = Y, r = fn;
  e.keywordError = {
    message: ({ keyword: y }) => (0, t.str)`must pass "${y}" keyword validation`
  }, e.keyword$DataError = {
    message: ({ keyword: y, schemaType: v }) => v ? (0, t.str)`"${y}" keyword must be ${v} ($data)` : (0, t.str)`"${y}" keyword is invalid ($data)`
  };
  function o(y, v = e.keywordError, b, w) {
    const { it: T } = y, { gen: O, compositeRule: C, allErrors: B } = T, k = u(y, v, b);
    w ?? (C || B) ? c(O, k) : p(T, (0, t._)`[${k}]`);
  }
  e.reportError = o;
  function s(y, v = e.keywordError, b) {
    const { it: w } = y, { gen: T, compositeRule: O, allErrors: C } = w, B = u(y, v, b);
    c(T, B), O || C || p(w, r.default.vErrors);
  }
  e.reportExtraError = s;
  function i(y, v) {
    y.assign(r.default.errors, v), y.if((0, t._)`${r.default.vErrors} !== null`, () => y.if(v, () => y.assign((0, t._)`${r.default.vErrors}.length`, v), () => y.assign(r.default.vErrors, null)));
  }
  e.resetErrorsCount = i;
  function a({ gen: y, keyword: v, schemaValue: b, data: w, errsCount: T, it: O }) {
    if (T === void 0)
      throw new Error("ajv implementation error");
    const C = y.name("err");
    y.forRange("i", T, r.default.errors, (B) => {
      y.const(C, (0, t._)`${r.default.vErrors}[${B}]`), y.if((0, t._)`${C}.instancePath === undefined`, () => y.assign((0, t._)`${C}.instancePath`, (0, t.strConcat)(r.default.instancePath, O.errorPath))), y.assign((0, t._)`${C}.schemaPath`, (0, t.str)`${O.errSchemaPath}/${v}`), O.opts.verbose && (y.assign((0, t._)`${C}.schema`, b), y.assign((0, t._)`${C}.data`, w));
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
    const { gen: w, it: T } = y, O = [
      m(T, b),
      f(y, b)
    ];
    return g(y, v, O), w.object(...O);
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
    const { keyword: T, data: O, schemaValue: C, it: B } = y, { opts: k, propertyName: E, topSchemaRef: q, schemaPath: I } = B;
    w.push([l.keyword, T], [l.params, typeof v == "function" ? v(y) : v || (0, t._)`{}`]), k.messages && w.push([l.message, typeof b == "function" ? b(y) : b]), k.verbose && w.push([l.schema, C], [l.parentSchema, (0, t._)`${q}${I}`], [r.default.data, O]), E && w.push([l.propertyName, E]);
  }
})(vs);
Object.defineProperty(mo, "__esModule", { value: !0 });
mo.boolOrEmptySchema = mo.topBoolOrEmptySchema = void 0;
const Cie = vs, jie = pe, Lie = fn, qie = {
  message: "boolean schema is false"
};
function Fie(e) {
  const { gen: t, schema: n, validateName: r } = e;
  n === !1 ? cv(e, !1) : typeof n == "object" && n.$async === !0 ? t.return(Lie.default.data) : (t.assign((0, jie._)`${r}.errors`, null), t.return(!0));
}
mo.topBoolOrEmptySchema = Fie;
function Mie(e, t) {
  const { gen: n, schema: r } = e;
  r === !1 ? (n.var(t, !1), cv(e)) : n.var(t, !0);
}
mo.boolOrEmptySchema = Mie;
function cv(e, t) {
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
  (0, Cie.reportError)(o, qie, void 0, t);
}
var qe = {}, kr = {};
Object.defineProperty(kr, "__esModule", { value: !0 });
kr.getRules = kr.isJSONType = void 0;
const Uie = ["string", "number", "integer", "boolean", "null", "object", "array"], Vie = new Set(Uie);
function zie(e) {
  return typeof e == "string" && Vie.has(e);
}
kr.isJSONType = zie;
function Bie() {
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
kr.getRules = Bie;
var Pn = {};
Object.defineProperty(Pn, "__esModule", { value: !0 });
Pn.shouldUseRule = Pn.shouldUseGroup = Pn.schemaHasRulesForType = void 0;
function Gie({ schema: e, self: t }, n) {
  const r = t.RULES.types[n];
  return r && r !== !0 && lv(e, r);
}
Pn.schemaHasRulesForType = Gie;
function lv(e, t) {
  return t.rules.some((n) => uv(e, n));
}
Pn.shouldUseGroup = lv;
function uv(e, t) {
  var n;
  return e[t.keyword] !== void 0 || ((n = t.definition.implements) === null || n === void 0 ? void 0 : n.some((r) => e[r] !== void 0));
}
Pn.shouldUseRule = uv;
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.reportTypeError = qe.checkDataTypes = qe.checkDataType = qe.coerceAndCheckDataType = qe.getJSONTypes = qe.getSchemaTypes = qe.DataType = void 0;
const Hie = kr, Xie = Pn, Kie = vs, ue = pe, pv = Y;
var ro;
(function(e) {
  e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
})(ro || (qe.DataType = ro = {}));
function Wie(e) {
  const t = dv(e.type);
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
qe.getSchemaTypes = Wie;
function dv(e) {
  const t = Array.isArray(e) ? e : e ? [e] : [];
  if (t.every(Hie.isJSONType))
    return t;
  throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
}
qe.getJSONTypes = dv;
function Jie(e, t) {
  const { gen: n, data: r, opts: o } = e, s = Yie(t, o.coerceTypes), i = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, Xie.schemaHasRulesForType)(e, t[0]));
  if (i) {
    const a = vp(t, r, o.strictNumbers, ro.Wrong);
    n.if(a, () => {
      s.length ? Qie(e, t, s) : bp(e);
    });
  }
  return i;
}
qe.coerceAndCheckDataType = Jie;
const fv = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
function Yie(e, t) {
  return t ? e.filter((n) => fv.has(n) || t === "array" && n === "array") : [];
}
function Qie(e, t, n) {
  const { gen: r, data: o, opts: s } = e, i = r.let("dataType", (0, ue._)`typeof ${o}`), a = r.let("coerced", (0, ue._)`undefined`);
  s.coerceTypes === "array" && r.if((0, ue._)`${i} == 'object' && Array.isArray(${o}) && ${o}.length == 1`, () => r.assign(o, (0, ue._)`${o}[0]`).assign(i, (0, ue._)`typeof ${o}`).if(vp(t, o, s.strictNumbers), () => r.assign(a, o))), r.if((0, ue._)`${a} !== undefined`);
  for (const p of n)
    (fv.has(p) || p === "array" && s.coerceTypes === "array") && c(p);
  r.else(), bp(e), r.endIf(), r.if((0, ue._)`${a} !== undefined`, () => {
    r.assign(o, a), Zie(e, a);
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
function Zie({ gen: e, parentData: t, parentDataProperty: n }, r) {
  e.if((0, ue._)`${t} !== undefined`, () => e.assign((0, ue._)`${t}[${n}]`, r));
}
function Pl(e, t, n, r = ro.Correct) {
  const o = r === ro.Correct ? ue.operators.EQ : ue.operators.NEQ;
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
  return r === ro.Correct ? s : (0, ue.not)(s);
  function i(a = ue.nil) {
    return (0, ue.and)((0, ue._)`typeof ${t} == "number"`, a, n ? (0, ue._)`isFinite(${t})` : ue.nil);
  }
}
qe.checkDataType = Pl;
function vp(e, t, n, r) {
  if (e.length === 1)
    return Pl(e[0], t, n, r);
  let o;
  const s = (0, pv.toHash)(e);
  if (s.array && s.object) {
    const i = (0, ue._)`typeof ${t} != "object"`;
    o = s.null ? i : (0, ue._)`!${t} || ${i}`, delete s.null, delete s.array, delete s.object;
  } else
    o = ue.nil;
  s.number && delete s.integer;
  for (const i in s)
    o = (0, ue.and)(o, Pl(i, t, n, r));
  return o;
}
qe.checkDataTypes = vp;
const eae = {
  message: ({ schema: e }) => `must be ${e}`,
  params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, ue._)`{type: ${e}}` : (0, ue._)`{type: ${t}}`
};
function bp(e) {
  const t = tae(e);
  (0, Kie.reportError)(t, eae);
}
qe.reportTypeError = bp;
function tae(e) {
  const { gen: t, data: n, schema: r } = e, o = (0, pv.schemaRefOrVal)(e, r, "type");
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
var la = {};
Object.defineProperty(la, "__esModule", { value: !0 });
la.assignDefaults = void 0;
const Vr = pe, nae = Y;
function rae(e, t) {
  const { properties: n, items: r } = e.schema;
  if (t === "object" && n)
    for (const o in n)
      dm(e, o, n[o].default);
  else t === "array" && Array.isArray(r) && r.forEach((o, s) => dm(e, s, o.default));
}
la.assignDefaults = rae;
function dm(e, t, n) {
  const { gen: r, compositeRule: o, data: s, opts: i } = e;
  if (n === void 0)
    return;
  const a = (0, Vr._)`${s}${(0, Vr.getProperty)(t)}`;
  if (o) {
    (0, nae.checkStrictMode)(e, `default is ignored for: ${a}`);
    return;
  }
  let c = (0, Vr._)`${a} === undefined`;
  i.useDefaults === "empty" && (c = (0, Vr._)`${c} || ${a} === null || ${a} === ""`), r.if(c, (0, Vr._)`${a} = ${(0, Vr.stringify)(n)}`);
}
var dn = {}, me = {};
Object.defineProperty(me, "__esModule", { value: !0 });
me.validateUnion = me.validateArray = me.usePattern = me.callValidateCode = me.schemaProperties = me.allSchemaProperties = me.noPropertyInData = me.propertyInData = me.isOwnProperty = me.hasPropFunc = me.reportMissingProp = me.checkMissingProp = me.checkReportMissingProp = void 0;
const Ee = pe, wp = Y, qn = fn, oae = Y;
function sae(e, t) {
  const { gen: n, data: r, it: o } = e;
  n.if(_p(n, r, t, o.opts.ownProperties), () => {
    e.setParams({ missingProperty: (0, Ee._)`${t}` }, !0), e.error();
  });
}
me.checkReportMissingProp = sae;
function iae({ gen: e, data: t, it: { opts: n } }, r, o) {
  return (0, Ee.or)(...r.map((s) => (0, Ee.and)(_p(e, t, s, n.ownProperties), (0, Ee._)`${o} = ${s}`)));
}
me.checkMissingProp = iae;
function aae(e, t) {
  e.setParams({ missingProperty: t }, !0), e.error();
}
me.reportMissingProp = aae;
function mv(e) {
  return e.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, Ee._)`Object.prototype.hasOwnProperty`
  });
}
me.hasPropFunc = mv;
function xp(e, t, n) {
  return (0, Ee._)`${mv(e)}.call(${t}, ${n})`;
}
me.isOwnProperty = xp;
function cae(e, t, n, r) {
  const o = (0, Ee._)`${t}${(0, Ee.getProperty)(n)} !== undefined`;
  return r ? (0, Ee._)`${o} && ${xp(e, t, n)}` : o;
}
me.propertyInData = cae;
function _p(e, t, n, r) {
  const o = (0, Ee._)`${t}${(0, Ee.getProperty)(n)} === undefined`;
  return r ? (0, Ee.or)(o, (0, Ee.not)(xp(e, t, n))) : o;
}
me.noPropertyInData = _p;
function hv(e) {
  return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
}
me.allSchemaProperties = hv;
function lae(e, t) {
  return hv(t).filter((n) => !(0, wp.alwaysValidSchema)(e, t[n]));
}
me.schemaProperties = lae;
function uae({ schemaCode: e, data: t, it: { gen: n, topSchemaRef: r, schemaPath: o, errorPath: s }, it: i }, a, c, p) {
  const l = p ? (0, Ee._)`${e}, ${t}, ${r}${o}` : t, u = [
    [qn.default.instancePath, (0, Ee.strConcat)(qn.default.instancePath, s)],
    [qn.default.parentData, i.parentData],
    [qn.default.parentDataProperty, i.parentDataProperty],
    [qn.default.rootData, qn.default.rootData]
  ];
  i.opts.dynamicRef && u.push([qn.default.dynamicAnchors, qn.default.dynamicAnchors]);
  const d = (0, Ee._)`${l}, ${n.object(...u)}`;
  return c !== Ee.nil ? (0, Ee._)`${a}.call(${c}, ${d})` : (0, Ee._)`${a}(${d})`;
}
me.callValidateCode = uae;
const pae = (0, Ee._)`new RegExp`;
function dae({ gen: e, it: { opts: t } }, n) {
  const r = t.unicodeRegExp ? "u" : "", { regExp: o } = t.code, s = o(n, r);
  return e.scopeValue("pattern", {
    key: s.toString(),
    ref: s,
    code: (0, Ee._)`${o.code === "new RegExp" ? pae : (0, oae.useFunc)(e, o)}(${n}, ${r})`
  });
}
me.usePattern = dae;
function fae(e) {
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
        dataPropType: wp.Type.Num
      }, s), t.if((0, Ee.not)(s), a);
    });
  }
}
me.validateArray = fae;
function mae(e) {
  const { gen: t, schema: n, keyword: r, it: o } = e;
  if (!Array.isArray(n))
    throw new Error("ajv implementation error");
  if (n.some((c) => (0, wp.alwaysValidSchema)(o, c)) && !o.opts.unevaluated)
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
me.validateUnion = mae;
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.validateKeywordUsage = dn.validSchemaType = dn.funcKeywordCode = dn.macroKeywordCode = void 0;
const ct = pe, yr = fn, hae = me, yae = vs;
function gae(e, t) {
  const { gen: n, keyword: r, schema: o, parentSchema: s, it: i } = e, a = t.macro.call(i.self, o, s, i), c = yv(n, r, a);
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
dn.macroKeywordCode = gae;
function vae(e, t) {
  var n;
  const { gen: r, keyword: o, schema: s, parentSchema: i, $data: a, it: c } = e;
  wae(c, t);
  const p = !a && t.compile ? t.compile.call(c.self, s, i, c) : t.validate, l = yv(r, o, p), u = r.let("valid");
  e.block$data(u, d), e.ok((n = t.valid) !== null && n !== void 0 ? n : u);
  function d() {
    if (t.errors === !1)
      g(), t.modifying && fm(e), y(() => e.error());
    else {
      const v = t.async ? m() : f();
      t.modifying && fm(e), y(() => bae(e, v));
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
    const b = c.opts.passContext ? yr.default.this : yr.default.self, w = !("compile" in t && !a || t.schema === !1);
    r.assign(u, (0, ct._)`${v}${(0, hae.callValidateCode)(e, l, b, w)}`, t.modifying);
  }
  function y(v) {
    var b;
    r.if((0, ct.not)((b = t.valid) !== null && b !== void 0 ? b : u), v);
  }
}
dn.funcKeywordCode = vae;
function fm(e) {
  const { gen: t, data: n, it: r } = e;
  t.if(r.parentData, () => t.assign(n, (0, ct._)`${r.parentData}[${r.parentDataProperty}]`));
}
function bae(e, t) {
  const { gen: n } = e;
  n.if((0, ct._)`Array.isArray(${t})`, () => {
    n.assign(yr.default.vErrors, (0, ct._)`${yr.default.vErrors} === null ? ${t} : ${yr.default.vErrors}.concat(${t})`).assign(yr.default.errors, (0, ct._)`${yr.default.vErrors}.length`), (0, yae.extendErrors)(e);
  }, () => e.error());
}
function wae({ schemaEnv: e }, t) {
  if (t.async && !e.$async)
    throw new Error("async keyword in sync schema");
}
function yv(e, t, n) {
  if (n === void 0)
    throw new Error(`keyword "${t}" failed to compile`);
  return e.scopeValue("keyword", typeof n == "function" ? { ref: n } : { ref: n, code: (0, ct.stringify)(n) });
}
function xae(e, t, n = !1) {
  return !t.length || t.some((r) => r === "array" ? Array.isArray(e) : r === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == r || n && typeof e > "u");
}
dn.validSchemaType = xae;
function _ae({ schema: e, opts: t, self: n, errSchemaPath: r }, o, s) {
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
dn.validateKeywordUsage = _ae;
var Zn = {};
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.extendSubschemaMode = Zn.extendSubschemaData = Zn.getSubschema = void 0;
const ln = pe, gv = Y;
function $ae(e, { keyword: t, schemaProp: n, schema: r, schemaPath: o, errSchemaPath: s, topSchemaRef: i }) {
  if (t !== void 0 && r !== void 0)
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  if (t !== void 0) {
    const a = e.schema[t];
    return n === void 0 ? {
      schema: a,
      schemaPath: (0, ln._)`${e.schemaPath}${(0, ln.getProperty)(t)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}`
    } : {
      schema: a[n],
      schemaPath: (0, ln._)`${e.schemaPath}${(0, ln.getProperty)(t)}${(0, ln.getProperty)(n)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}/${(0, gv.escapeFragment)(n)}`
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
Zn.getSubschema = $ae;
function Eae(e, t, { dataProp: n, dataPropType: r, data: o, dataTypes: s, propertyName: i }) {
  if (o !== void 0 && n !== void 0)
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  const { gen: a } = t;
  if (n !== void 0) {
    const { errorPath: p, dataPathArr: l, opts: u } = t, d = a.let("data", (0, ln._)`${t.data}${(0, ln.getProperty)(n)}`, !0);
    c(d), e.errorPath = (0, ln.str)`${p}${(0, gv.getErrorPath)(n, r, u.jsPropertySyntax)}`, e.parentDataProperty = (0, ln._)`${n}`, e.dataPathArr = [...l, e.parentDataProperty];
  }
  if (o !== void 0) {
    const p = o instanceof ln.Name ? o : a.let("data", o, !0);
    c(p), i !== void 0 && (e.propertyName = i);
  }
  s && (e.dataTypes = s);
  function c(p) {
    e.data = p, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = /* @__PURE__ */ new Set(), e.parentData = t.data, e.dataNames = [...t.dataNames, p];
  }
}
Zn.extendSubschemaData = Eae;
function Sae(e, { jtdDiscriminator: t, jtdMetadata: n, compositeRule: r, createErrors: o, allErrors: s }) {
  r !== void 0 && (e.compositeRule = r), o !== void 0 && (e.createErrors = o), s !== void 0 && (e.allErrors = s), e.jtdDiscriminator = t, e.jtdMetadata = n;
}
Zn.extendSubschemaMode = Sae;
var Je = {}, vv = { exports: {} }, Wn = vv.exports = function(e, t, n) {
  typeof t == "function" && (n = t, t = {}), n = t.cb || n;
  var r = typeof n == "function" ? n : n.pre || function() {
  }, o = n.post || function() {
  };
  di(t, r, o, e, "", e);
};
Wn.keywords = {
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
Wn.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
Wn.propsKeywords = {
  $defs: !0,
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
Wn.skipKeywords = {
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
function di(e, t, n, r, o, s, i, a, c, p) {
  if (r && typeof r == "object" && !Array.isArray(r)) {
    t(r, o, s, i, a, c, p);
    for (var l in r) {
      var u = r[l];
      if (Array.isArray(u)) {
        if (l in Wn.arrayKeywords)
          for (var d = 0; d < u.length; d++)
            di(e, t, n, u[d], o + "/" + l + "/" + d, s, o, l, r, d);
      } else if (l in Wn.propsKeywords) {
        if (u && typeof u == "object")
          for (var m in u)
            di(e, t, n, u[m], o + "/" + l + "/" + Tae(m), s, o, l, r, m);
      } else (l in Wn.keywords || e.allKeys && !(l in Wn.skipKeywords)) && di(e, t, n, u, o + "/" + l, s, o, l, r);
    }
    n(r, o, s, i, a, c, p);
  }
}
function Tae(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
var Pae = vv.exports;
Object.defineProperty(Je, "__esModule", { value: !0 });
Je.getSchemaRefs = Je.resolveUrl = Je.normalizeId = Je._getFullPath = Je.getFullPath = Je.inlineRef = void 0;
const Oae = Y, Nae = na, Rae = Pae, Aae = /* @__PURE__ */ new Set([
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
function Dae(e, t = !0) {
  return typeof e == "boolean" ? !0 : t === !0 ? !Ol(e) : t ? bv(e) <= t : !1;
}
Je.inlineRef = Dae;
const Iae = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function Ol(e) {
  for (const t in e) {
    if (Iae.has(t))
      return !0;
    const n = e[t];
    if (Array.isArray(n) && n.some(Ol) || typeof n == "object" && Ol(n))
      return !0;
  }
  return !1;
}
function bv(e) {
  let t = 0;
  for (const n in e) {
    if (n === "$ref")
      return 1 / 0;
    if (t++, !Aae.has(n) && (typeof e[n] == "object" && (0, Oae.eachItem)(e[n], (r) => t += bv(r)), t === 1 / 0))
      return 1 / 0;
  }
  return t;
}
function wv(e, t = "", n) {
  n !== !1 && (t = oo(t));
  const r = e.parse(t);
  return xv(e, r);
}
Je.getFullPath = wv;
function xv(e, t) {
  return e.serialize(t).split("#")[0] + "#";
}
Je._getFullPath = xv;
const kae = /#\/?$/;
function oo(e) {
  return e ? e.replace(kae, "") : "";
}
Je.normalizeId = oo;
function Cae(e, t, n) {
  return n = oo(n), e.resolve(t, n);
}
Je.resolveUrl = Cae;
const jae = /^[a-z_][-a-z0-9._]*$/i;
function Lae(e, t) {
  if (typeof e == "boolean")
    return {};
  const { schemaId: n, uriResolver: r } = this.opts, o = oo(e[n] || t), s = { "": o }, i = wv(r, o, !1), a = {}, c = /* @__PURE__ */ new Set();
  return Rae(e, { allKeys: !0 }, (u, d, m, f) => {
    if (f === void 0)
      return;
    const g = i + d;
    let y = s[f];
    typeof u[n] == "string" && (y = v.call(this, u[n])), b.call(this, u.$anchor), b.call(this, u.$dynamicAnchor), s[d] = y;
    function v(w) {
      const T = this.opts.uriResolver.resolve;
      if (w = oo(y ? T(y, w) : w), c.has(w))
        throw l(w);
      c.add(w);
      let O = this.refs[w];
      return typeof O == "string" && (O = this.refs[O]), typeof O == "object" ? p(u, O.schema, w) : w !== oo(g) && (w[0] === "#" ? (p(u, a[w], w), a[w] = u) : this.refs[w] = g), w;
    }
    function b(w) {
      if (typeof w == "string") {
        if (!jae.test(w))
          throw new Error(`invalid anchor "${w}"`);
        v.call(this, `#${w}`);
      }
    }
  }), a;
  function p(u, d, m) {
    if (d !== void 0 && !Nae(u, d))
      throw l(m);
  }
  function l(u) {
    return new Error(`reference "${u}" resolves to more than one schema`);
  }
}
Je.getSchemaRefs = Lae;
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.getData = Kt.KeywordCxt = Kt.validateFunctionCode = void 0;
const _v = mo, mm = qe, $p = Pn, Ci = qe, qae = la, Yo = dn, $c = Zn, te = pe, se = fn, Fae = Je, On = Y, qo = vs;
function Mae(e) {
  if (Sv(e) && (Tv(e), Ev(e))) {
    zae(e);
    return;
  }
  $v(e, () => (0, _v.topBoolOrEmptySchema)(e));
}
Kt.validateFunctionCode = Mae;
function $v({ gen: e, validateName: t, schema: n, schemaEnv: r, opts: o }, s) {
  o.code.es5 ? e.func(t, (0, te._)`${se.default.data}, ${se.default.valCxt}`, r.$async, () => {
    e.code((0, te._)`"use strict"; ${hm(n, o)}`), Vae(e, o), e.code(s);
  }) : e.func(t, (0, te._)`${se.default.data}, ${Uae(o)}`, r.$async, () => e.code(hm(n, o)).code(s));
}
function Uae(e) {
  return (0, te._)`{${se.default.instancePath}="", ${se.default.parentData}, ${se.default.parentDataProperty}, ${se.default.rootData}=${se.default.data}${e.dynamicRef ? (0, te._)`, ${se.default.dynamicAnchors}={}` : te.nil}}={}`;
}
function Vae(e, t) {
  e.if(se.default.valCxt, () => {
    e.var(se.default.instancePath, (0, te._)`${se.default.valCxt}.${se.default.instancePath}`), e.var(se.default.parentData, (0, te._)`${se.default.valCxt}.${se.default.parentData}`), e.var(se.default.parentDataProperty, (0, te._)`${se.default.valCxt}.${se.default.parentDataProperty}`), e.var(se.default.rootData, (0, te._)`${se.default.valCxt}.${se.default.rootData}`), t.dynamicRef && e.var(se.default.dynamicAnchors, (0, te._)`${se.default.valCxt}.${se.default.dynamicAnchors}`);
  }, () => {
    e.var(se.default.instancePath, (0, te._)`""`), e.var(se.default.parentData, (0, te._)`undefined`), e.var(se.default.parentDataProperty, (0, te._)`undefined`), e.var(se.default.rootData, se.default.data), t.dynamicRef && e.var(se.default.dynamicAnchors, (0, te._)`{}`);
  });
}
function zae(e) {
  const { schema: t, opts: n, gen: r } = e;
  $v(e, () => {
    n.$comment && t.$comment && Ov(e), Kae(e), r.let(se.default.vErrors, null), r.let(se.default.errors, 0), n.unevaluated && Bae(e), Pv(e), Yae(e);
  });
}
function Bae(e) {
  const { gen: t, validateName: n } = e;
  e.evaluated = t.const("evaluated", (0, te._)`${n}.evaluated`), t.if((0, te._)`${e.evaluated}.dynamicProps`, () => t.assign((0, te._)`${e.evaluated}.props`, (0, te._)`undefined`)), t.if((0, te._)`${e.evaluated}.dynamicItems`, () => t.assign((0, te._)`${e.evaluated}.items`, (0, te._)`undefined`));
}
function hm(e, t) {
  const n = typeof e == "object" && e[t.schemaId];
  return n && (t.code.source || t.code.process) ? (0, te._)`/*# sourceURL=${n} */` : te.nil;
}
function Gae(e, t) {
  if (Sv(e) && (Tv(e), Ev(e))) {
    Hae(e, t);
    return;
  }
  (0, _v.boolOrEmptySchema)(e, t);
}
function Ev({ schema: e, self: t }) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t.RULES.all[n])
      return !0;
  return !1;
}
function Sv(e) {
  return typeof e.schema != "boolean";
}
function Hae(e, t) {
  const { schema: n, gen: r, opts: o } = e;
  o.$comment && n.$comment && Ov(e), Wae(e), Jae(e);
  const s = r.const("_errs", se.default.errors);
  Pv(e, s), r.var(t, (0, te._)`${s} === ${se.default.errors}`);
}
function Tv(e) {
  (0, On.checkUnknownRules)(e), Xae(e);
}
function Pv(e, t) {
  if (e.opts.jtd)
    return ym(e, [], !1, t);
  const n = (0, mm.getSchemaTypes)(e.schema), r = (0, mm.coerceAndCheckDataType)(e, n);
  ym(e, n, !r, t);
}
function Xae(e) {
  const { schema: t, errSchemaPath: n, opts: r, self: o } = e;
  t.$ref && r.ignoreKeywordsWithRef && (0, On.schemaHasRulesButRef)(t, o.RULES) && o.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
}
function Kae(e) {
  const { schema: t, opts: n } = e;
  t.default !== void 0 && n.useDefaults && n.strictSchema && (0, On.checkStrictMode)(e, "default is ignored in the schema root");
}
function Wae(e) {
  const t = e.schema[e.opts.schemaId];
  t && (e.baseId = (0, Fae.resolveUrl)(e.opts.uriResolver, e.baseId, t));
}
function Jae(e) {
  if (e.schema.$async && !e.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function Ov({ gen: e, schemaEnv: t, schema: n, errSchemaPath: r, opts: o }) {
  const s = n.$comment;
  if (o.$comment === !0)
    e.code((0, te._)`${se.default.self}.logger.log(${s})`);
  else if (typeof o.$comment == "function") {
    const i = (0, te.str)`${r}/$comment`, a = e.scopeValue("root", { ref: t.root });
    e.code((0, te._)`${se.default.self}.opts.$comment(${s}, ${i}, ${a}.schema)`);
  }
}
function Yae(e) {
  const { gen: t, schemaEnv: n, validateName: r, ValidationError: o, opts: s } = e;
  n.$async ? t.if((0, te._)`${se.default.errors} === 0`, () => t.return(se.default.data), () => t.throw((0, te._)`new ${o}(${se.default.vErrors})`)) : (t.assign((0, te._)`${r}.errors`, se.default.vErrors), s.unevaluated && Qae(e), t.return((0, te._)`${se.default.errors} === 0`));
}
function Qae({ gen: e, evaluated: t, props: n, items: r }) {
  n instanceof te.Name && e.assign((0, te._)`${t}.props`, n), r instanceof te.Name && e.assign((0, te._)`${t}.items`, r);
}
function ym(e, t, n, r) {
  const { gen: o, schema: s, data: i, allErrors: a, opts: c, self: p } = e, { RULES: l } = p;
  if (s.$ref && (c.ignoreKeywordsWithRef || !(0, On.schemaHasRulesButRef)(s, l))) {
    o.block(() => Av(e, "$ref", l.all.$ref.definition));
    return;
  }
  c.jtd || Zae(e, t), o.block(() => {
    for (const d of l.rules)
      u(d);
    u(l.post);
  });
  function u(d) {
    (0, $p.shouldUseGroup)(s, d) && (d.type ? (o.if((0, Ci.checkDataType)(d.type, i, c.strictNumbers)), gm(e, d), t.length === 1 && t[0] === d.type && n && (o.else(), (0, Ci.reportTypeError)(e)), o.endIf()) : gm(e, d), a || o.if((0, te._)`${se.default.errors} === ${r || 0}`));
  }
}
function gm(e, t) {
  const { gen: n, schema: r, opts: { useDefaults: o } } = e;
  o && (0, qae.assignDefaults)(e, t.type), n.block(() => {
    for (const s of t.rules)
      (0, $p.shouldUseRule)(r, s) && Av(e, s.keyword, s.definition, t.type);
  });
}
function Zae(e, t) {
  e.schemaEnv.meta || !e.opts.strictTypes || (ece(e, t), e.opts.allowUnionTypes || tce(e, t), nce(e, e.dataTypes));
}
function ece(e, t) {
  if (t.length) {
    if (!e.dataTypes.length) {
      e.dataTypes = t;
      return;
    }
    t.forEach((n) => {
      Nv(e.dataTypes, n) || Ep(e, `type "${n}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), oce(e, t);
  }
}
function tce(e, t) {
  t.length > 1 && !(t.length === 2 && t.includes("null")) && Ep(e, "use allowUnionTypes to allow union type keyword");
}
function nce(e, t) {
  const n = e.self.RULES.all;
  for (const r in n) {
    const o = n[r];
    if (typeof o == "object" && (0, $p.shouldUseRule)(e.schema, o)) {
      const { type: s } = o.definition;
      s.length && !s.some((i) => rce(t, i)) && Ep(e, `missing type "${s.join(",")}" for keyword "${r}"`);
    }
  }
}
function rce(e, t) {
  return e.includes(t) || t === "number" && e.includes("integer");
}
function Nv(e, t) {
  return e.includes(t) || t === "integer" && e.includes("number");
}
function oce(e, t) {
  const n = [];
  for (const r of e.dataTypes)
    Nv(t, r) ? n.push(r) : t.includes("integer") && r === "number" && n.push("integer");
  e.dataTypes = n;
}
function Ep(e, t) {
  const n = e.schemaEnv.baseId + e.errSchemaPath;
  t += ` at "${n}" (strictTypes)`, (0, On.checkStrictMode)(e, t, e.opts.strictTypes);
}
class Rv {
  constructor(t, n, r) {
    if ((0, Yo.validateKeywordUsage)(t, n, r), this.gen = t.gen, this.allErrors = t.allErrors, this.keyword = r, this.data = t.data, this.schema = t.schema[r], this.$data = n.$data && t.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, On.schemaRefOrVal)(t, this.schema, r, this.$data), this.schemaType = n.schemaType, this.parentSchema = t.schema, this.params = {}, this.it = t, this.def = n, this.$data)
      this.schemaCode = t.gen.const("vSchema", Dv(this.$data, t));
    else if (this.schemaCode = this.schemaValue, !(0, Yo.validSchemaType)(this.schema, n.schemaType, n.allowUndefined))
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
    (t ? qo.reportExtraError : qo.reportError)(this, this.def.error, n);
  }
  $dataError() {
    (0, qo.reportError)(this, this.def.$dataError || qo.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, qo.resetErrorsCount)(this.gen, this.errsCount);
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
        return (0, te._)`${(0, Ci.checkDataTypes)(c, n, s.opts.strictNumbers, Ci.DataType.Wrong)}`;
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
    const r = (0, $c.getSubschema)(this.it, t);
    (0, $c.extendSubschemaData)(r, this.it, t), (0, $c.extendSubschemaMode)(r, t);
    const o = { ...this.it, ...r, items: void 0, props: void 0 };
    return Gae(o, n), o;
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
Kt.KeywordCxt = Rv;
function Av(e, t, n, r) {
  const o = new Rv(e, n, t);
  "code" in n ? n.code(o, r) : o.$data && n.validate ? (0, Yo.funcKeywordCode)(o, n) : "macro" in n ? (0, Yo.macroKeywordCode)(o, n) : (n.compile || n.validate) && (0, Yo.funcKeywordCode)(o, n);
}
const sce = /^\/(?:[^~]|~0|~1)*$/, ice = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function Dv(e, { dataLevel: t, dataNames: n, dataPathArr: r }) {
  let o, s;
  if (e === "")
    return se.default.rootData;
  if (e[0] === "/") {
    if (!sce.test(e))
      throw new Error(`Invalid JSON-pointer: ${e}`);
    o = e, s = se.default.rootData;
  } else {
    const p = ice.exec(e);
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
Kt.getData = Dv;
var bs = {};
Object.defineProperty(bs, "__esModule", { value: !0 });
class ace extends Error {
  constructor(t) {
    super("validation failed"), this.errors = t, this.ajv = this.validation = !0;
  }
}
bs.default = ace;
var To = {};
Object.defineProperty(To, "__esModule", { value: !0 });
const Ec = Je;
class cce extends Error {
  constructor(t, n, r, o) {
    super(o || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, Ec.resolveUrl)(t, n, r), this.missingSchema = (0, Ec.normalizeId)((0, Ec.getFullPath)(t, this.missingRef));
  }
}
To.default = cce;
var wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.resolveSchema = wt.getCompilingSchema = wt.resolveRef = wt.compileSchema = wt.SchemaEnv = void 0;
const qt = pe, lce = bs, ur = fn, Ht = Je, vm = Y, uce = Kt;
class ua {
  constructor(t) {
    var n;
    this.refs = {}, this.dynamicAnchors = {};
    let r;
    typeof t.schema == "object" && (r = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (n = t.baseId) !== null && n !== void 0 ? n : (0, Ht.normalizeId)(r == null ? void 0 : r[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = r == null ? void 0 : r.$async, this.refs = {};
  }
}
wt.SchemaEnv = ua;
function Sp(e) {
  const t = Iv.call(this, e);
  if (t)
    return t;
  const n = (0, Ht.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: r, lines: o } = this.opts.code, { ownProperties: s } = this.opts, i = new qt.CodeGen(this.scope, { es5: r, lines: o, ownProperties: s });
  let a;
  e.$async && (a = i.scopeValue("Error", {
    ref: lce.default,
    code: (0, qt._)`require("ajv/dist/runtime/validation_error").default`
  }));
  const c = i.scopeName("validate");
  e.validateName = c;
  const p = {
    gen: i,
    allErrors: this.opts.allErrors,
    data: ur.default.data,
    parentData: ur.default.parentData,
    parentDataProperty: ur.default.parentDataProperty,
    dataNames: [ur.default.data],
    dataPathArr: [qt.nil],
    // TODO can its length be used as dataLevel if nil is removed?
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: i.scopeValue("schema", this.opts.code.source === !0 ? { ref: e.schema, code: (0, qt.stringify)(e.schema) } : { ref: e.schema }),
    validateName: c,
    ValidationError: a,
    schema: e.schema,
    schemaEnv: e,
    rootId: n,
    baseId: e.baseId || n,
    schemaPath: qt.nil,
    errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, qt._)`""`,
    opts: this.opts,
    self: this
  };
  let l;
  try {
    this._compilations.add(e), (0, uce.validateFunctionCode)(p), i.optimize(this.opts.code.optimize);
    const u = i.toString();
    l = `${i.scopeRefs(ur.default.scope)}return ${u}`, this.opts.code.process && (l = this.opts.code.process(l, e));
    const m = new Function(`${ur.default.self}`, `${ur.default.scope}`, l)(this, this.scope.get());
    if (this.scope.value(c, { ref: m }), m.errors = null, m.schema = e.schema, m.schemaEnv = e, e.$async && (m.$async = !0), this.opts.code.source === !0 && (m.source = { validateName: c, validateCode: u, scopeValues: i._values }), this.opts.unevaluated) {
      const { props: f, items: g } = p;
      m.evaluated = {
        props: f instanceof qt.Name ? void 0 : f,
        items: g instanceof qt.Name ? void 0 : g,
        dynamicProps: f instanceof qt.Name,
        dynamicItems: g instanceof qt.Name
      }, m.source && (m.source.evaluated = (0, qt.stringify)(m.evaluated));
    }
    return e.validate = m, e;
  } catch (u) {
    throw delete e.validate, delete e.validateName, l && this.logger.error("Error compiling schema, function code:", l), u;
  } finally {
    this._compilations.delete(e);
  }
}
wt.compileSchema = Sp;
function pce(e, t, n) {
  var r;
  n = (0, Ht.resolveUrl)(this.opts.uriResolver, t, n);
  const o = e.refs[n];
  if (o)
    return o;
  let s = mce.call(this, e, n);
  if (s === void 0) {
    const i = (r = e.localRefs) === null || r === void 0 ? void 0 : r[n], { schemaId: a } = this.opts;
    i && (s = new ua({ schema: i, schemaId: a, root: e, baseId: t }));
  }
  if (s !== void 0)
    return e.refs[n] = dce.call(this, s);
}
wt.resolveRef = pce;
function dce(e) {
  return (0, Ht.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : Sp.call(this, e);
}
function Iv(e) {
  for (const t of this._compilations)
    if (fce(t, e))
      return t;
}
wt.getCompilingSchema = Iv;
function fce(e, t) {
  return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
}
function mce(e, t) {
  let n;
  for (; typeof (n = this.refs[t]) == "string"; )
    t = n;
  return n || this.schemas[t] || pa.call(this, e, t);
}
function pa(e, t) {
  const n = this.opts.uriResolver.parse(t), r = (0, Ht._getFullPath)(this.opts.uriResolver, n);
  let o = (0, Ht.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
  if (Object.keys(e.schema).length > 0 && r === o)
    return Sc.call(this, n, e);
  const s = (0, Ht.normalizeId)(r), i = this.refs[s] || this.schemas[s];
  if (typeof i == "string") {
    const a = pa.call(this, e, i);
    return typeof (a == null ? void 0 : a.schema) != "object" ? void 0 : Sc.call(this, n, a);
  }
  if (typeof (i == null ? void 0 : i.schema) == "object") {
    if (i.validate || Sp.call(this, i), s === (0, Ht.normalizeId)(t)) {
      const { schema: a } = i, { schemaId: c } = this.opts, p = a[c];
      return p && (o = (0, Ht.resolveUrl)(this.opts.uriResolver, o, p)), new ua({ schema: a, schemaId: c, root: e, baseId: o });
    }
    return Sc.call(this, n, i);
  }
}
wt.resolveSchema = pa;
const hce = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function Sc(e, { baseId: t, schema: n, root: r }) {
  var o;
  if (((o = e.fragment) === null || o === void 0 ? void 0 : o[0]) !== "/")
    return;
  for (const a of e.fragment.slice(1).split("/")) {
    if (typeof n == "boolean")
      return;
    const c = n[(0, vm.unescapeFragment)(a)];
    if (c === void 0)
      return;
    n = c;
    const p = typeof n == "object" && n[this.opts.schemaId];
    !hce.has(a) && p && (t = (0, Ht.resolveUrl)(this.opts.uriResolver, t, p));
  }
  let s;
  if (typeof n != "boolean" && n.$ref && !(0, vm.schemaHasRulesButRef)(n, this.RULES)) {
    const a = (0, Ht.resolveUrl)(this.opts.uriResolver, t, n.$ref);
    s = pa.call(this, r, a);
  }
  const { schemaId: i } = this.opts;
  if (s = s || new ua({ schema: n, schemaId: i, root: r, baseId: t }), s.schema !== s.root.schema)
    return s;
}
const yce = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", gce = "Meta-schema for $data reference (JSON AnySchema extension proposal)", vce = "object", bce = [
  "$data"
], wce = {
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
}, xce = !1, _ce = {
  $id: yce,
  description: gce,
  type: vce,
  required: bce,
  properties: wce,
  additionalProperties: xce
};
var Tp = {};
Object.defineProperty(Tp, "__esModule", { value: !0 });
const kv = zg;
kv.code = 'require("ajv/dist/runtime/uri").default';
Tp.default = kv;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
  var t = Kt;
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
  const r = bs, o = To, s = kr, i = wt, a = pe, c = Je, p = qe, l = Y, u = _ce, d = Tp, m = (D, S) => new RegExp(D, S);
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
    var S, N, P, h, _, A, $, x, j, R, Z, ye, be, Oe, Ne, ht, _e, ze, hn, Zt, Ct, en, rr, or, sr;
    const jt = D.strict, ir = (S = D.code) === null || S === void 0 ? void 0 : S.optimize, Io = ir === !0 || ir === void 0 ? 1 : ir || 0, ko = (P = (N = D.code) === null || N === void 0 ? void 0 : N.regExp) !== null && P !== void 0 ? P : m, Ra = (h = D.uriResolver) !== null && h !== void 0 ? h : d.default;
    return {
      strictSchema: (A = (_ = D.strictSchema) !== null && _ !== void 0 ? _ : jt) !== null && A !== void 0 ? A : !0,
      strictNumbers: (x = ($ = D.strictNumbers) !== null && $ !== void 0 ? $ : jt) !== null && x !== void 0 ? x : !0,
      strictTypes: (R = (j = D.strictTypes) !== null && j !== void 0 ? j : jt) !== null && R !== void 0 ? R : "log",
      strictTuples: (ye = (Z = D.strictTuples) !== null && Z !== void 0 ? Z : jt) !== null && ye !== void 0 ? ye : "log",
      strictRequired: (Oe = (be = D.strictRequired) !== null && be !== void 0 ? be : jt) !== null && Oe !== void 0 ? Oe : !1,
      code: D.code ? { ...D.code, optimize: Io, regExp: ko } : { optimize: Io, regExp: ko },
      loopRequired: (Ne = D.loopRequired) !== null && Ne !== void 0 ? Ne : b,
      loopEnum: (ht = D.loopEnum) !== null && ht !== void 0 ? ht : b,
      meta: (_e = D.meta) !== null && _e !== void 0 ? _e : !0,
      messages: (ze = D.messages) !== null && ze !== void 0 ? ze : !0,
      inlineRefs: (hn = D.inlineRefs) !== null && hn !== void 0 ? hn : !0,
      schemaId: (Zt = D.schemaId) !== null && Zt !== void 0 ? Zt : "$id",
      addUsedSchema: (Ct = D.addUsedSchema) !== null && Ct !== void 0 ? Ct : !0,
      validateSchema: (en = D.validateSchema) !== null && en !== void 0 ? en : !0,
      validateFormats: (rr = D.validateFormats) !== null && rr !== void 0 ? rr : !0,
      unicodeRegExp: (or = D.unicodeRegExp) !== null && or !== void 0 ? or : !0,
      int32range: (sr = D.int32range) !== null && sr !== void 0 ? sr : !0,
      uriResolver: Ra
    };
  }
  class T {
    constructor(S = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), S = this.opts = { ...S, ...w(S) };
      const { es5: N, lines: P } = this.opts.code;
      this.scope = new a.ValueScope({ scope: {}, prefixes: g, es5: N, lines: P }), this.logger = z(S.logger);
      const h = S.validateFormats;
      S.validateFormats = !1, this.RULES = (0, s.getRules)(), O.call(this, y, S, "NOT SUPPORTED"), O.call(this, v, S, "DEPRECATED", "warn"), this._metaOpts = q.call(this), S.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), S.keywords && E.call(this, S.keywords), typeof S.meta == "object" && this.addMetaSchema(S.meta), B.call(this), S.validateFormats = h;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: S, meta: N, schemaId: P } = this.opts;
      let h = u;
      P === "id" && (h = { ...u }, h.id = h.$id, delete h.$id), N && S && this.addMetaSchema(h, h[P], !1);
    }
    defaultMeta() {
      const { meta: S, schemaId: N } = this.opts;
      return this.opts.defaultMeta = typeof S == "object" ? S[N] || S : void 0;
    }
    validate(S, N) {
      let P;
      if (typeof S == "string") {
        if (P = this.getSchema(S), !P)
          throw new Error(`no schema with key or ref "${S}"`);
      } else
        P = this.compile(S);
      const h = P(N);
      return "$async" in P || (this.errors = P.errors), h;
    }
    compile(S, N) {
      const P = this._addSchema(S, N);
      return P.validate || this._compileSchemaEnv(P);
    }
    compileAsync(S, N) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: P } = this.opts;
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
          return await (this._loading[R] = P(R));
        } finally {
          delete this._loading[R];
        }
      }
    }
    // Adds schema to the instance
    addSchema(S, N, P, h = this.opts.validateSchema) {
      if (Array.isArray(S)) {
        for (const A of S)
          this.addSchema(A, void 0, P, h);
        return this;
      }
      let _;
      if (typeof S == "object") {
        const { schemaId: A } = this.opts;
        if (_ = S[A], _ !== void 0 && typeof _ != "string")
          throw new Error(`schema ${A} must be string`);
      }
      return N = (0, c.normalizeId)(N || _), this._checkUnique(N), this.schemas[N] = this._addSchema(S, P, N, h, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(S, N, P = this.opts.validateSchema) {
      return this.addSchema(S, N, !0, P), this;
    }
    //  Validate schema against its meta-schema
    validateSchema(S, N) {
      if (typeof S == "boolean")
        return !0;
      let P;
      if (P = S.$schema, P !== void 0 && typeof P != "string")
        throw new Error("$schema must be a string");
      if (P = P || this.opts.defaultMeta || this.defaultMeta(), !P)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const h = this.validate(P, S);
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
        const { schemaId: P } = this.opts, h = new i.SchemaEnv({ schema: {}, schemaId: P });
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
          let P = S[this.opts.schemaId];
          return P && (P = (0, c.normalizeId)(P), delete this.schemas[P], delete this.refs[P]), this;
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
      let P;
      if (typeof S == "string")
        P = S, typeof N == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), N.keyword = P);
      else if (typeof S == "object" && N === void 0) {
        if (N = S, P = N.keyword, Array.isArray(P) && !P.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (F.call(this, P, N), !N)
        return (0, l.eachItem)(P, (_) => U.call(this, _)), this;
      V.call(this, N);
      const h = {
        ...N,
        type: (0, p.getJSONTypes)(N.type),
        schemaType: (0, p.getJSONTypes)(N.schemaType)
      };
      return (0, l.eachItem)(P, h.type.length === 0 ? (_) => U.call(this, _, h) : (_) => h.type.forEach((A) => U.call(this, _, h, A))), this;
    }
    getKeyword(S) {
      const N = this.RULES.all[S];
      return typeof N == "object" ? N.definition : !!N;
    }
    // Remove keyword
    removeKeyword(S) {
      const { RULES: N } = this;
      delete N.keywords[S], delete N.all[S];
      for (const P of N.rules) {
        const h = P.rules.findIndex((_) => _.keyword === S);
        h >= 0 && P.rules.splice(h, 1);
      }
      return this;
    }
    // Add format
    addFormat(S, N) {
      return typeof N == "string" && (N = new RegExp(N)), this.formats[S] = N, this;
    }
    errorsText(S = this.errors, { separator: N = ", ", dataVar: P = "data" } = {}) {
      return !S || S.length === 0 ? "No errors" : S.map((h) => `${P}${h.instancePath} ${h.message}`).reduce((h, _) => h + N + _);
    }
    $dataMetaSchema(S, N) {
      const P = this.RULES.all;
      S = JSON.parse(JSON.stringify(S));
      for (const h of N) {
        const _ = h.split("/").slice(1);
        let A = S;
        for (const $ of _)
          A = A[$];
        for (const $ in P) {
          const x = P[$];
          if (typeof x != "object")
            continue;
          const { $data: j } = x.definition, R = A[$];
          j && R && (A[$] = X(R));
        }
      }
      return S;
    }
    _removeAllSchemas(S, N) {
      for (const P in S) {
        const h = S[P];
        (!N || N.test(P)) && (typeof h == "string" ? delete S[P] : h && !h.meta && (this._cache.delete(h.schema), delete S[P]));
      }
    }
    _addSchema(S, N, P, h = this.opts.validateSchema, _ = this.opts.addUsedSchema) {
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
      P = (0, c.normalizeId)(A || P);
      const j = c.getSchemaRefs.call(this, S, P);
      return x = new i.SchemaEnv({ schema: S, schemaId: $, meta: N, baseId: P, localRefs: j }), this._cache.set(x.schema, x), _ && !P.startsWith("#") && (P && this._checkUnique(P), this.refs[P] = x), h && this.validateSchema(S, !0), x;
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
  function O(D, S, N, P = "error") {
    for (const h in D) {
      const _ = h;
      _ in S && this.logger[P](`${N}: option ${h}. ${D[_]}`);
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
    if ((0, l.eachItem)(D, (P) => {
      if (N.keywords[P])
        throw new Error(`Keyword ${P} is already defined`);
      if (!H.test(P))
        throw new Error(`Keyword ${P} has invalid name`);
    }), !!S && S.$data && !("code" in S || "validate" in S))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function U(D, S, N) {
    var P;
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
    S.before ? G.call(this, A, $, S.before) : A.rules.push($), _.all[D] = $, (P = S.implements) === null || P === void 0 || P.forEach((x) => this.addKeyword(x));
  }
  function G(D, S, N) {
    const P = D.rules.findIndex((h) => h.keyword === N);
    P >= 0 ? D.rules.splice(P, 0, S) : (D.rules.push(S), this.logger.warn(`rule ${N} is not defined`));
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
})(nv);
var Pp = {}, Op = {}, Np = {};
Object.defineProperty(Np, "__esModule", { value: !0 });
const $ce = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
Np.default = $ce;
var Cr = {};
Object.defineProperty(Cr, "__esModule", { value: !0 });
Cr.callRef = Cr.getValidate = void 0;
const Ece = To, bm = me, bt = pe, zr = fn, wm = wt, Ms = Y, Sce = {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    const { gen: t, schema: n, it: r } = e, { baseId: o, schemaEnv: s, validateName: i, opts: a, self: c } = r, { root: p } = s;
    if ((n === "#" || n === "#/") && o === p.baseId)
      return u();
    const l = wm.resolveRef.call(c, p, o, n);
    if (l === void 0)
      throw new Ece.default(r.opts.uriResolver, o, n);
    if (l instanceof wm.SchemaEnv)
      return d(l);
    return m(l);
    function u() {
      if (s === p)
        return fi(e, i, s, s.$async);
      const f = t.scopeValue("root", { ref: p });
      return fi(e, (0, bt._)`${f}.validate`, p, p.$async);
    }
    function d(f) {
      const g = Cv(e, f);
      fi(e, g, f, f.$async);
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
function Cv(e, t) {
  const { gen: n } = e;
  return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, bt._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
}
Cr.getValidate = Cv;
function fi(e, t, n, r) {
  const { gen: o, it: s } = e, { allErrors: i, schemaEnv: a, opts: c } = s, p = c.passContext ? zr.default.this : bt.nil;
  r ? l() : u();
  function l() {
    if (!a.$async)
      throw new Error("async schema referenced by sync schema");
    const f = o.let("valid");
    o.try(() => {
      o.code((0, bt._)`await ${(0, bm.callValidateCode)(e, t, p)}`), m(t), i || o.assign(f, !0);
    }, (g) => {
      o.if((0, bt._)`!(${g} instanceof ${s.ValidationError})`, () => o.throw(g)), d(g), i || o.assign(f, !1);
    }), e.ok(f);
  }
  function u() {
    e.result((0, bm.callValidateCode)(e, t, p), () => m(t), () => d(t));
  }
  function d(f) {
    const g = (0, bt._)`${f}.errors`;
    o.assign(zr.default.vErrors, (0, bt._)`${zr.default.vErrors} === null ? ${g} : ${zr.default.vErrors}.concat(${g})`), o.assign(zr.default.errors, (0, bt._)`${zr.default.vErrors}.length`);
  }
  function m(f) {
    var g;
    if (!s.opts.unevaluated)
      return;
    const y = (g = n == null ? void 0 : n.validate) === null || g === void 0 ? void 0 : g.evaluated;
    if (s.props !== !0)
      if (y && !y.dynamicProps)
        y.props !== void 0 && (s.props = Ms.mergeEvaluated.props(o, y.props, s.props));
      else {
        const v = o.var("props", (0, bt._)`${f}.evaluated.props`);
        s.props = Ms.mergeEvaluated.props(o, v, s.props, bt.Name);
      }
    if (s.items !== !0)
      if (y && !y.dynamicItems)
        y.items !== void 0 && (s.items = Ms.mergeEvaluated.items(o, y.items, s.items));
      else {
        const v = o.var("items", (0, bt._)`${f}.evaluated.items`);
        s.items = Ms.mergeEvaluated.items(o, v, s.items, bt.Name);
      }
  }
}
Cr.callRef = fi;
Cr.default = Sce;
Object.defineProperty(Op, "__esModule", { value: !0 });
const Tce = Np, Pce = Cr, Oce = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  Tce.default,
  Pce.default
];
Op.default = Oce;
var Rp = {}, Ap = {};
Object.defineProperty(Ap, "__esModule", { value: !0 });
const ji = pe, Fn = ji.operators, Li = {
  maximum: { okStr: "<=", ok: Fn.LTE, fail: Fn.GT },
  minimum: { okStr: ">=", ok: Fn.GTE, fail: Fn.LT },
  exclusiveMaximum: { okStr: "<", ok: Fn.LT, fail: Fn.GTE },
  exclusiveMinimum: { okStr: ">", ok: Fn.GT, fail: Fn.LTE }
}, Nce = {
  message: ({ keyword: e, schemaCode: t }) => (0, ji.str)`must be ${Li[e].okStr} ${t}`,
  params: ({ keyword: e, schemaCode: t }) => (0, ji._)`{comparison: ${Li[e].okStr}, limit: ${t}}`
}, Rce = {
  keyword: Object.keys(Li),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: Nce,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e;
    e.fail$data((0, ji._)`${n} ${Li[t].fail} ${r} || isNaN(${n})`);
  }
};
Ap.default = Rce;
var Dp = {};
Object.defineProperty(Dp, "__esModule", { value: !0 });
const Qo = pe, Ace = {
  message: ({ schemaCode: e }) => (0, Qo.str)`must be multiple of ${e}`,
  params: ({ schemaCode: e }) => (0, Qo._)`{multipleOf: ${e}}`
}, Dce = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: Ace,
  code(e) {
    const { gen: t, data: n, schemaCode: r, it: o } = e, s = o.opts.multipleOfPrecision, i = t.let("res"), a = s ? (0, Qo._)`Math.abs(Math.round(${i}) - ${i}) > 1e-${s}` : (0, Qo._)`${i} !== parseInt(${i})`;
    e.fail$data((0, Qo._)`(${r} === 0 || (${i} = ${n}/${r}, ${a}))`);
  }
};
Dp.default = Dce;
var Ip = {}, kp = {};
Object.defineProperty(kp, "__esModule", { value: !0 });
function jv(e) {
  const t = e.length;
  let n = 0, r = 0, o;
  for (; r < t; )
    n++, o = e.charCodeAt(r++), o >= 55296 && o <= 56319 && r < t && (o = e.charCodeAt(r), (o & 64512) === 56320 && r++);
  return n;
}
kp.default = jv;
jv.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(Ip, "__esModule", { value: !0 });
const gr = pe, Ice = Y, kce = kp, Cce = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxLength" ? "more" : "fewer";
    return (0, gr.str)`must NOT have ${n} than ${t} characters`;
  },
  params: ({ schemaCode: e }) => (0, gr._)`{limit: ${e}}`
}, jce = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: Cce,
  code(e) {
    const { keyword: t, data: n, schemaCode: r, it: o } = e, s = t === "maxLength" ? gr.operators.GT : gr.operators.LT, i = o.opts.unicode === !1 ? (0, gr._)`${n}.length` : (0, gr._)`${(0, Ice.useFunc)(e.gen, kce.default)}(${n})`;
    e.fail$data((0, gr._)`${i} ${s} ${r}`);
  }
};
Ip.default = jce;
var Cp = {};
Object.defineProperty(Cp, "__esModule", { value: !0 });
const Lce = me, qi = pe, qce = {
  message: ({ schemaCode: e }) => (0, qi.str)`must match pattern "${e}"`,
  params: ({ schemaCode: e }) => (0, qi._)`{pattern: ${e}}`
}, Fce = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: qce,
  code(e) {
    const { data: t, $data: n, schema: r, schemaCode: o, it: s } = e, i = s.opts.unicodeRegExp ? "u" : "", a = n ? (0, qi._)`(new RegExp(${o}, ${i}))` : (0, Lce.usePattern)(e, r);
    e.fail$data((0, qi._)`!${a}.test(${t})`);
  }
};
Cp.default = Fce;
var jp = {};
Object.defineProperty(jp, "__esModule", { value: !0 });
const Zo = pe, Mce = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxProperties" ? "more" : "fewer";
    return (0, Zo.str)`must NOT have ${n} than ${t} properties`;
  },
  params: ({ schemaCode: e }) => (0, Zo._)`{limit: ${e}}`
}, Uce = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: Mce,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, o = t === "maxProperties" ? Zo.operators.GT : Zo.operators.LT;
    e.fail$data((0, Zo._)`Object.keys(${n}).length ${o} ${r}`);
  }
};
jp.default = Uce;
var Lp = {};
Object.defineProperty(Lp, "__esModule", { value: !0 });
const Fo = me, es = pe, Vce = Y, zce = {
  message: ({ params: { missingProperty: e } }) => (0, es.str)`must have required property '${e}'`,
  params: ({ params: { missingProperty: e } }) => (0, es._)`{missingProperty: ${e}}`
}, Bce = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: zce,
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
          (0, Vce.checkStrictMode)(i, v, i.opts.strictRequired);
        }
    }
    function p() {
      if (c || s)
        e.block$data(es.nil, u);
      else
        for (const m of n)
          (0, Fo.checkReportMissingProp)(e, m);
    }
    function l() {
      const m = t.let("missing");
      if (c || s) {
        const f = t.let("valid", !0);
        e.block$data(f, () => d(m, f)), e.ok(f);
      } else
        t.if((0, Fo.checkMissingProp)(e, n, m)), (0, Fo.reportMissingProp)(e, m), t.else();
    }
    function u() {
      t.forOf("prop", r, (m) => {
        e.setParams({ missingProperty: m }), t.if((0, Fo.noPropertyInData)(t, o, m, a.ownProperties), () => e.error());
      });
    }
    function d(m, f) {
      e.setParams({ missingProperty: m }), t.forOf(m, r, () => {
        t.assign(f, (0, Fo.propertyInData)(t, o, m, a.ownProperties)), t.if((0, es.not)(f), () => {
          e.error(), t.break();
        });
      }, es.nil);
    }
  }
};
Lp.default = Bce;
var qp = {};
Object.defineProperty(qp, "__esModule", { value: !0 });
const ts = pe, Gce = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxItems" ? "more" : "fewer";
    return (0, ts.str)`must NOT have ${n} than ${t} items`;
  },
  params: ({ schemaCode: e }) => (0, ts._)`{limit: ${e}}`
}, Hce = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: Gce,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, o = t === "maxItems" ? ts.operators.GT : ts.operators.LT;
    e.fail$data((0, ts._)`${n}.length ${o} ${r}`);
  }
};
qp.default = Hce;
var Fp = {}, ws = {};
Object.defineProperty(ws, "__esModule", { value: !0 });
const Lv = na;
Lv.code = 'require("ajv/dist/runtime/equal").default';
ws.default = Lv;
Object.defineProperty(Fp, "__esModule", { value: !0 });
const Tc = qe, Xe = pe, Xce = Y, Kce = ws, Wce = {
  message: ({ params: { i: e, j: t } }) => (0, Xe.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
  params: ({ params: { i: e, j: t } }) => (0, Xe._)`{i: ${e}, j: ${t}}`
}, Jce = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: Wce,
  code(e) {
    const { gen: t, data: n, $data: r, schema: o, parentSchema: s, schemaCode: i, it: a } = e;
    if (!r && !o)
      return;
    const c = t.let("valid"), p = s.items ? (0, Tc.getSchemaTypes)(s.items) : [];
    e.block$data(c, l, (0, Xe._)`${i} === false`), e.ok(c);
    function l() {
      const f = t.let("i", (0, Xe._)`${n}.length`), g = t.let("j");
      e.setParams({ i: f, j: g }), t.assign(c, !0), t.if((0, Xe._)`${f} > 1`, () => (u() ? d : m)(f, g));
    }
    function u() {
      return p.length > 0 && !p.some((f) => f === "object" || f === "array");
    }
    function d(f, g) {
      const y = t.name("item"), v = (0, Tc.checkDataTypes)(p, y, a.opts.strictNumbers, Tc.DataType.Wrong), b = t.const("indices", (0, Xe._)`{}`);
      t.for((0, Xe._)`;${f}--;`, () => {
        t.let(y, (0, Xe._)`${n}[${f}]`), t.if(v, (0, Xe._)`continue`), p.length > 1 && t.if((0, Xe._)`typeof ${y} == "string"`, (0, Xe._)`${y} += "_"`), t.if((0, Xe._)`typeof ${b}[${y}] == "number"`, () => {
          t.assign(g, (0, Xe._)`${b}[${y}]`), e.error(), t.assign(c, !1).break();
        }).code((0, Xe._)`${b}[${y}] = ${f}`);
      });
    }
    function m(f, g) {
      const y = (0, Xce.useFunc)(t, Kce.default), v = t.name("outer");
      t.label(v).for((0, Xe._)`;${f}--;`, () => t.for((0, Xe._)`${g} = ${f}; ${g}--;`, () => t.if((0, Xe._)`${y}(${n}[${f}], ${n}[${g}])`, () => {
        e.error(), t.assign(c, !1).break(v);
      })));
    }
  }
};
Fp.default = Jce;
var Mp = {};
Object.defineProperty(Mp, "__esModule", { value: !0 });
const Nl = pe, Yce = Y, Qce = ws, Zce = {
  message: "must be equal to constant",
  params: ({ schemaCode: e }) => (0, Nl._)`{allowedValue: ${e}}`
}, ele = {
  keyword: "const",
  $data: !0,
  error: Zce,
  code(e) {
    const { gen: t, data: n, $data: r, schemaCode: o, schema: s } = e;
    r || s && typeof s == "object" ? e.fail$data((0, Nl._)`!${(0, Yce.useFunc)(t, Qce.default)}(${n}, ${o})`) : e.fail((0, Nl._)`${s} !== ${n}`);
  }
};
Mp.default = ele;
var Up = {};
Object.defineProperty(Up, "__esModule", { value: !0 });
const Go = pe, tle = Y, nle = ws, rle = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: e }) => (0, Go._)`{allowedValues: ${e}}`
}, ole = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: rle,
  code(e) {
    const { gen: t, data: n, $data: r, schema: o, schemaCode: s, it: i } = e;
    if (!r && o.length === 0)
      throw new Error("enum must have non-empty array");
    const a = o.length >= i.opts.loopEnum;
    let c;
    const p = () => c ?? (c = (0, tle.useFunc)(t, nle.default));
    let l;
    if (a || r)
      l = t.let("valid"), e.block$data(l, u);
    else {
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      const m = t.const("vSchema", s);
      l = (0, Go.or)(...o.map((f, g) => d(m, g)));
    }
    e.pass(l);
    function u() {
      t.assign(l, !1), t.forOf("v", s, (m) => t.if((0, Go._)`${p()}(${n}, ${m})`, () => t.assign(l, !0).break()));
    }
    function d(m, f) {
      const g = o[f];
      return typeof g == "object" && g !== null ? (0, Go._)`${p()}(${n}, ${m}[${f}])` : (0, Go._)`${n} === ${g}`;
    }
  }
};
Up.default = ole;
Object.defineProperty(Rp, "__esModule", { value: !0 });
const sle = Ap, ile = Dp, ale = Ip, cle = Cp, lle = jp, ule = Lp, ple = qp, dle = Fp, fle = Mp, mle = Up, hle = [
  // number
  sle.default,
  ile.default,
  // string
  ale.default,
  cle.default,
  // object
  lle.default,
  ule.default,
  // array
  ple.default,
  dle.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  fle.default,
  mle.default
];
Rp.default = hle;
var Vp = {}, Po = {};
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.validateAdditionalItems = void 0;
const vr = pe, Rl = Y, yle = {
  message: ({ params: { len: e } }) => (0, vr.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, vr._)`{limit: ${e}}`
}, gle = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: yle,
  code(e) {
    const { parentSchema: t, it: n } = e, { items: r } = t;
    if (!Array.isArray(r)) {
      (0, Rl.checkStrictMode)(n, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    qv(e, r);
  }
};
function qv(e, t) {
  const { gen: n, schema: r, data: o, keyword: s, it: i } = e;
  i.items = !0;
  const a = n.const("len", (0, vr._)`${o}.length`);
  if (r === !1)
    e.setParams({ len: t.length }), e.pass((0, vr._)`${a} <= ${t.length}`);
  else if (typeof r == "object" && !(0, Rl.alwaysValidSchema)(i, r)) {
    const p = n.var("valid", (0, vr._)`${a} <= ${t.length}`);
    n.if((0, vr.not)(p), () => c(p)), e.ok(p);
  }
  function c(p) {
    n.forRange("i", t.length, a, (l) => {
      e.subschema({ keyword: s, dataProp: l, dataPropType: Rl.Type.Num }, p), i.allErrors || n.if((0, vr.not)(p), () => n.break());
    });
  }
}
Po.validateAdditionalItems = qv;
Po.default = gle;
var zp = {}, Oo = {};
Object.defineProperty(Oo, "__esModule", { value: !0 });
Oo.validateTuple = void 0;
const xm = pe, mi = Y, vle = me, ble = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    const { schema: t, it: n } = e;
    if (Array.isArray(t))
      return Fv(e, "additionalItems", t);
    n.items = !0, !(0, mi.alwaysValidSchema)(n, t) && e.ok((0, vle.validateArray)(e));
  }
};
function Fv(e, t, n = e.schema) {
  const { gen: r, parentSchema: o, data: s, keyword: i, it: a } = e;
  l(o), a.opts.unevaluated && n.length && a.items !== !0 && (a.items = mi.mergeEvaluated.items(r, n.length, a.items));
  const c = r.name("valid"), p = r.const("len", (0, xm._)`${s}.length`);
  n.forEach((u, d) => {
    (0, mi.alwaysValidSchema)(a, u) || (r.if((0, xm._)`${p} > ${d}`, () => e.subschema({
      keyword: i,
      schemaProp: d,
      dataProp: d
    }, c)), e.ok(c));
  });
  function l(u) {
    const { opts: d, errSchemaPath: m } = a, f = n.length, g = f === u.minItems && (f === u.maxItems || u[t] === !1);
    if (d.strictTuples && !g) {
      const y = `"${i}" is ${f}-tuple, but minItems or maxItems/${t} are not specified or different at path "${m}"`;
      (0, mi.checkStrictMode)(a, y, d.strictTuples);
    }
  }
}
Oo.validateTuple = Fv;
Oo.default = ble;
Object.defineProperty(zp, "__esModule", { value: !0 });
const wle = Oo, xle = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => (0, wle.validateTuple)(e, "items")
};
zp.default = xle;
var Bp = {};
Object.defineProperty(Bp, "__esModule", { value: !0 });
const _m = pe, _le = Y, $le = me, Ele = Po, Sle = {
  message: ({ params: { len: e } }) => (0, _m.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, _m._)`{limit: ${e}}`
}, Tle = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: Sle,
  code(e) {
    const { schema: t, parentSchema: n, it: r } = e, { prefixItems: o } = n;
    r.items = !0, !(0, _le.alwaysValidSchema)(r, t) && (o ? (0, Ele.validateAdditionalItems)(e, o) : e.ok((0, $le.validateArray)(e)));
  }
};
Bp.default = Tle;
var Gp = {};
Object.defineProperty(Gp, "__esModule", { value: !0 });
const It = pe, Us = Y, Ple = {
  message: ({ params: { min: e, max: t } }) => t === void 0 ? (0, It.str)`must contain at least ${e} valid item(s)` : (0, It.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
  params: ({ params: { min: e, max: t } }) => t === void 0 ? (0, It._)`{minContains: ${e}}` : (0, It._)`{minContains: ${e}, maxContains: ${t}}`
}, Ole = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: Ple,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: o, it: s } = e;
    let i, a;
    const { minContains: c, maxContains: p } = r;
    s.opts.next ? (i = c === void 0 ? 1 : c, a = p) : i = 1;
    const l = t.const("len", (0, It._)`${o}.length`);
    if (e.setParams({ min: i, max: a }), a === void 0 && i === 0) {
      (0, Us.checkStrictMode)(s, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (a !== void 0 && i > a) {
      (0, Us.checkStrictMode)(s, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, Us.alwaysValidSchema)(s, n)) {
      let g = (0, It._)`${l} >= ${i}`;
      a !== void 0 && (g = (0, It._)`${g} && ${l} <= ${a}`), e.pass(g);
      return;
    }
    s.items = !0;
    const u = t.name("valid");
    a === void 0 && i === 1 ? m(u, () => t.if(u, () => t.break())) : i === 0 ? (t.let(u, !0), a !== void 0 && t.if((0, It._)`${o}.length > 0`, d)) : (t.let(u, !1), d()), e.result(u, () => e.reset());
    function d() {
      const g = t.name("_valid"), y = t.let("count", 0);
      m(g, () => t.if(g, () => f(y)));
    }
    function m(g, y) {
      t.forRange("i", 0, l, (v) => {
        e.subschema({
          keyword: "contains",
          dataProp: v,
          dataPropType: Us.Type.Num,
          compositeRule: !0
        }, g), y();
      });
    }
    function f(g) {
      t.code((0, It._)`${g}++`), a === void 0 ? t.if((0, It._)`${g} >= ${i}`, () => t.assign(u, !0).break()) : (t.if((0, It._)`${g} > ${a}`, () => t.assign(u, !1).break()), i === 1 ? t.assign(u, !0) : t.if((0, It._)`${g} >= ${i}`, () => t.assign(u, !0)));
    }
  }
};
Gp.default = Ole;
var Mv = {};
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
})(Mv);
var Hp = {};
Object.defineProperty(Hp, "__esModule", { value: !0 });
const Uv = pe, Nle = Y, Rle = {
  message: "property name must be valid",
  params: ({ params: e }) => (0, Uv._)`{propertyName: ${e.propertyName}}`
}, Ale = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: Rle,
  code(e) {
    const { gen: t, schema: n, data: r, it: o } = e;
    if ((0, Nle.alwaysValidSchema)(o, n))
      return;
    const s = t.name("valid");
    t.forIn("key", r, (i) => {
      e.setParams({ propertyName: i }), e.subschema({
        keyword: "propertyNames",
        data: i,
        dataTypes: ["string"],
        propertyName: i,
        compositeRule: !0
      }, s), t.if((0, Uv.not)(s), () => {
        e.error(!0), o.allErrors || t.break();
      });
    }), e.ok(s);
  }
};
Hp.default = Ale;
var da = {};
Object.defineProperty(da, "__esModule", { value: !0 });
const Vs = me, Ut = pe, Dle = fn, zs = Y, Ile = {
  message: "must NOT have additional properties",
  params: ({ params: e }) => (0, Ut._)`{additionalProperty: ${e.additionalProperty}}`
}, kle = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: Ile,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: o, errsCount: s, it: i } = e;
    if (!s)
      throw new Error("ajv implementation error");
    const { allErrors: a, opts: c } = i;
    if (i.props = !0, c.removeAdditional !== "all" && (0, zs.alwaysValidSchema)(i, n))
      return;
    const p = (0, Vs.allSchemaProperties)(r.properties), l = (0, Vs.allSchemaProperties)(r.patternProperties);
    u(), e.ok((0, Ut._)`${s} === ${Dle.default.errors}`);
    function u() {
      t.forIn("key", o, (y) => {
        !p.length && !l.length ? f(y) : t.if(d(y), () => f(y));
      });
    }
    function d(y) {
      let v;
      if (p.length > 8) {
        const b = (0, zs.schemaRefOrVal)(i, r.properties, "properties");
        v = (0, Vs.isOwnProperty)(t, b, y);
      } else p.length ? v = (0, Ut.or)(...p.map((b) => (0, Ut._)`${y} === ${b}`)) : v = Ut.nil;
      return l.length && (v = (0, Ut.or)(v, ...l.map((b) => (0, Ut._)`${(0, Vs.usePattern)(e, b)}.test(${y})`))), (0, Ut.not)(v);
    }
    function m(y) {
      t.code((0, Ut._)`delete ${o}[${y}]`);
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
      if (typeof n == "object" && !(0, zs.alwaysValidSchema)(i, n)) {
        const v = t.name("valid");
        c.removeAdditional === "failing" ? (g(y, v, !1), t.if((0, Ut.not)(v), () => {
          e.reset(), m(y);
        })) : (g(y, v), a || t.if((0, Ut.not)(v), () => t.break()));
      }
    }
    function g(y, v, b) {
      const w = {
        keyword: "additionalProperties",
        dataProp: y,
        dataPropType: zs.Type.Str
      };
      b === !1 && Object.assign(w, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), e.subschema(w, v);
    }
  }
};
da.default = kle;
var Xp = {};
Object.defineProperty(Xp, "__esModule", { value: !0 });
const Cle = Kt, $m = me, Pc = Y, Em = da, jle = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: o, it: s } = e;
    s.opts.removeAdditional === "all" && r.additionalProperties === void 0 && Em.default.code(new Cle.KeywordCxt(s, Em.default, "additionalProperties"));
    const i = (0, $m.allSchemaProperties)(n);
    for (const u of i)
      s.definedProperties.add(u);
    s.opts.unevaluated && i.length && s.props !== !0 && (s.props = Pc.mergeEvaluated.props(t, (0, Pc.toHash)(i), s.props));
    const a = i.filter((u) => !(0, Pc.alwaysValidSchema)(s, n[u]));
    if (a.length === 0)
      return;
    const c = t.name("valid");
    for (const u of a)
      p(u) ? l(u) : (t.if((0, $m.propertyInData)(t, o, u, s.opts.ownProperties)), l(u), s.allErrors || t.else().var(c, !0), t.endIf()), e.it.definedProperties.add(u), e.ok(c);
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
Xp.default = jle;
var Kp = {};
Object.defineProperty(Kp, "__esModule", { value: !0 });
const Sm = me, Bs = pe, Tm = Y, Pm = Y, Lle = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, data: r, parentSchema: o, it: s } = e, { opts: i } = s, a = (0, Sm.allSchemaProperties)(n), c = a.filter((g) => (0, Tm.alwaysValidSchema)(s, n[g]));
    if (a.length === 0 || c.length === a.length && (!s.opts.unevaluated || s.props === !0))
      return;
    const p = i.strictSchema && !i.allowMatchingProperties && o.properties, l = t.name("valid");
    s.props !== !0 && !(s.props instanceof Bs.Name) && (s.props = (0, Pm.evaluatedPropsToName)(t, s.props));
    const { props: u } = s;
    d();
    function d() {
      for (const g of a)
        p && m(g), s.allErrors ? f(g) : (t.var(l, !0), f(g), t.if(l));
    }
    function m(g) {
      for (const y in p)
        new RegExp(g).test(y) && (0, Tm.checkStrictMode)(s, `property ${y} matches pattern ${g} (use allowMatchingProperties)`);
    }
    function f(g) {
      t.forIn("key", r, (y) => {
        t.if((0, Bs._)`${(0, Sm.usePattern)(e, g)}.test(${y})`, () => {
          const v = c.includes(g);
          v || e.subschema({
            keyword: "patternProperties",
            schemaProp: g,
            dataProp: y,
            dataPropType: Pm.Type.Str
          }, l), s.opts.unevaluated && u !== !0 ? t.assign((0, Bs._)`${u}[${y}]`, !0) : !v && !s.allErrors && t.if((0, Bs.not)(l), () => t.break());
        });
      });
    }
  }
};
Kp.default = Lle;
var Wp = {};
Object.defineProperty(Wp, "__esModule", { value: !0 });
const qle = Y, Fle = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if ((0, qle.alwaysValidSchema)(r, n)) {
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
Wp.default = Fle;
var Jp = {};
Object.defineProperty(Jp, "__esModule", { value: !0 });
const Mle = me, Ule = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: Mle.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
Jp.default = Ule;
var Yp = {};
Object.defineProperty(Yp, "__esModule", { value: !0 });
const hi = pe, Vle = Y, zle = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: e }) => (0, hi._)`{passingSchemas: ${e.passing}}`
}, Ble = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: zle,
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
        (0, Vle.alwaysValidSchema)(o, l) ? t.var(c, !0) : d = e.subschema({
          keyword: "oneOf",
          schemaProp: u,
          compositeRule: !0
        }, c), u > 0 && t.if((0, hi._)`${c} && ${i}`).assign(i, !1).assign(a, (0, hi._)`[${a}, ${u}]`).else(), t.if(c, () => {
          t.assign(i, !0), t.assign(a, u), d && e.mergeEvaluated(d, hi.Name);
        });
      });
    }
  }
};
Yp.default = Ble;
var Qp = {};
Object.defineProperty(Qp, "__esModule", { value: !0 });
const Gle = Y, Hle = {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    const o = t.name("valid");
    n.forEach((s, i) => {
      if ((0, Gle.alwaysValidSchema)(r, s))
        return;
      const a = e.subschema({ keyword: "allOf", schemaProp: i }, o);
      e.ok(o), e.mergeEvaluated(a);
    });
  }
};
Qp.default = Hle;
var Zp = {};
Object.defineProperty(Zp, "__esModule", { value: !0 });
const Fi = pe, Vv = Y, Xle = {
  message: ({ params: e }) => (0, Fi.str)`must match "${e.ifClause}" schema`,
  params: ({ params: e }) => (0, Fi._)`{failingKeyword: ${e.ifClause}}`
}, Kle = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: Xle,
  code(e) {
    const { gen: t, parentSchema: n, it: r } = e;
    n.then === void 0 && n.else === void 0 && (0, Vv.checkStrictMode)(r, '"if" without "then" and "else" is ignored');
    const o = Om(r, "then"), s = Om(r, "else");
    if (!o && !s)
      return;
    const i = t.let("valid", !0), a = t.name("_valid");
    if (c(), e.reset(), o && s) {
      const l = t.let("ifClause");
      e.setParams({ ifClause: l }), t.if(a, p("then", l), p("else", l));
    } else o ? t.if(a, p("then")) : t.if((0, Fi.not)(a), p("else"));
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
        t.assign(i, a), e.mergeValidEvaluated(d, i), u ? t.assign(u, (0, Fi._)`${l}`) : e.setParams({ ifClause: l });
      };
    }
  }
};
function Om(e, t) {
  const n = e.schema[t];
  return n !== void 0 && !(0, Vv.alwaysValidSchema)(e, n);
}
Zp.default = Kle;
var ed = {};
Object.defineProperty(ed, "__esModule", { value: !0 });
const Wle = Y, Jle = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: e, parentSchema: t, it: n }) {
    t.if === void 0 && (0, Wle.checkStrictMode)(n, `"${e}" without "if" is ignored`);
  }
};
ed.default = Jle;
Object.defineProperty(Vp, "__esModule", { value: !0 });
const Yle = Po, Qle = zp, Zle = Oo, eue = Bp, tue = Gp, nue = Mv, rue = Hp, oue = da, sue = Xp, iue = Kp, aue = Wp, cue = Jp, lue = Yp, uue = Qp, pue = Zp, due = ed;
function fue(e = !1) {
  const t = [
    // any
    aue.default,
    cue.default,
    lue.default,
    uue.default,
    pue.default,
    due.default,
    // object
    rue.default,
    oue.default,
    nue.default,
    sue.default,
    iue.default
  ];
  return e ? t.push(Qle.default, eue.default) : t.push(Yle.default, Zle.default), t.push(tue.default), t;
}
Vp.default = fue;
var td = {}, nd = {};
Object.defineProperty(nd, "__esModule", { value: !0 });
const Ie = pe, mue = {
  message: ({ schemaCode: e }) => (0, Ie.str)`must match format "${e}"`,
  params: ({ schemaCode: e }) => (0, Ie._)`{format: ${e}}`
}, hue = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: mue,
  code(e, t) {
    const { gen: n, data: r, $data: o, schema: s, schemaCode: i, it: a } = e, { opts: c, errSchemaPath: p, schemaEnv: l, self: u } = a;
    if (!c.validateFormats)
      return;
    o ? d() : m();
    function d() {
      const f = n.scopeValue("formats", {
        ref: u.formats,
        code: c.code.formats
      }), g = n.const("fDef", (0, Ie._)`${f}[${i}]`), y = n.let("fType"), v = n.let("format");
      n.if((0, Ie._)`typeof ${g} == "object" && !(${g} instanceof RegExp)`, () => n.assign(y, (0, Ie._)`${g}.type || "string"`).assign(v, (0, Ie._)`${g}.validate`), () => n.assign(y, (0, Ie._)`"string"`).assign(v, g)), e.fail$data((0, Ie.or)(b(), w()));
      function b() {
        return c.strictSchema === !1 ? Ie.nil : (0, Ie._)`${i} && !${v}`;
      }
      function w() {
        const T = l.$async ? (0, Ie._)`(${g}.async ? await ${v}(${r}) : ${v}(${r}))` : (0, Ie._)`${v}(${r})`, O = (0, Ie._)`(typeof ${v} == "function" ? ${T} : ${v}.test(${r}))`;
        return (0, Ie._)`${v} && ${v} !== true && ${y} === ${t} && !${O}`;
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
          u.logger.warn(O());
          return;
        }
        throw new Error(O());
        function O() {
          return `unknown format "${s}" ignored in schema at path "${p}"`;
        }
      }
      function w(O) {
        const C = O instanceof RegExp ? (0, Ie.regexpCode)(O) : c.code.formats ? (0, Ie._)`${c.code.formats}${(0, Ie.getProperty)(s)}` : void 0, B = n.scopeValue("formats", { key: s, ref: O, code: C });
        return typeof O == "object" && !(O instanceof RegExp) ? [O.type || "string", O.validate, (0, Ie._)`${B}.validate`] : ["string", O, B];
      }
      function T() {
        if (typeof f == "object" && !(f instanceof RegExp) && f.async) {
          if (!l.$async)
            throw new Error("async format in sync schema");
          return (0, Ie._)`await ${v}(${r})`;
        }
        return typeof y == "function" ? (0, Ie._)`${v}(${r})` : (0, Ie._)`${v}.test(${r})`;
      }
    }
  }
};
nd.default = hue;
Object.defineProperty(td, "__esModule", { value: !0 });
const yue = nd, gue = [yue.default];
td.default = gue;
var ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.contentVocabulary = ho.metadataVocabulary = void 0;
ho.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
ho.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(Pp, "__esModule", { value: !0 });
const vue = Op, bue = Rp, wue = Vp, xue = td, Nm = ho, _ue = [
  vue.default,
  bue.default,
  (0, wue.default)(),
  xue.default,
  Nm.metadataVocabulary,
  Nm.contentVocabulary
];
Pp.default = _ue;
var rd = {}, fa = {};
Object.defineProperty(fa, "__esModule", { value: !0 });
fa.DiscrError = void 0;
var Rm;
(function(e) {
  e.Tag = "tag", e.Mapping = "mapping";
})(Rm || (fa.DiscrError = Rm = {}));
Object.defineProperty(rd, "__esModule", { value: !0 });
const Kr = pe, Al = fa, Am = wt, $ue = To, Eue = Y, Sue = {
  message: ({ params: { discrError: e, tagName: t } }) => e === Al.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
  params: ({ params: { discrError: e, tag: t, tagName: n } }) => (0, Kr._)`{error: ${e}, tag: ${n}, tagValue: ${t}}`
}, Tue = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: Sue,
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
    const c = t.let("valid", !1), p = t.const("tag", (0, Kr._)`${n}${(0, Kr.getProperty)(a)}`);
    t.if((0, Kr._)`typeof ${p} == "string"`, () => l(), () => e.error(!1, { discrError: Al.DiscrError.Tag, tag: p, tagName: a })), e.ok(c);
    function l() {
      const m = d();
      t.if(!1);
      for (const f in m)
        t.elseIf((0, Kr._)`${p} === ${f}`), t.assign(c, u(m[f]));
      t.else(), e.error(!1, { discrError: Al.DiscrError.Mapping, tag: p, tagName: a }), t.endIf();
    }
    function u(m) {
      const f = t.name("valid"), g = e.subschema({ keyword: "oneOf", schemaProp: m }, f);
      return e.mergeEvaluated(g, Kr.Name), f;
    }
    function d() {
      var m;
      const f = {}, g = v(o);
      let y = !0;
      for (let T = 0; T < i.length; T++) {
        let O = i[T];
        if (O != null && O.$ref && !(0, Eue.schemaHasRulesButRef)(O, s.self.RULES)) {
          const B = O.$ref;
          if (O = Am.resolveRef.call(s.self, s.schemaEnv.root, s.baseId, B), O instanceof Am.SchemaEnv && (O = O.schema), O === void 0)
            throw new $ue.default(s.opts.uriResolver, s.baseId, B);
        }
        const C = (m = O == null ? void 0 : O.properties) === null || m === void 0 ? void 0 : m[a];
        if (typeof C != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${a}"`);
        y = y && (g || v(O)), b(C, T);
      }
      if (!y)
        throw new Error(`discriminator: "${a}" must be required`);
      return f;
      function v({ required: T }) {
        return Array.isArray(T) && T.includes(a);
      }
      function b(T, O) {
        if (T.const)
          w(T.const, O);
        else if (T.enum)
          for (const C of T.enum)
            w(C, O);
        else
          throw new Error(`discriminator: "properties/${a}" must have "const" or "enum"`);
      }
      function w(T, O) {
        if (typeof T != "string" || T in f)
          throw new Error(`discriminator: "${a}" values must be unique strings`);
        f[T] = O;
      }
    }
  }
};
rd.default = Tue;
const Pue = "http://json-schema.org/draft-07/schema#", Oue = "http://json-schema.org/draft-07/schema#", Nue = "Core schema meta-schema", Rue = {
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
}, Aue = [
  "object",
  "boolean"
], Due = {
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
}, Iue = {
  $schema: Pue,
  $id: Oue,
  title: Nue,
  definitions: Rue,
  type: Aue,
  properties: Due,
  default: !0
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
  const n = nv, r = Pp, o = rd, s = Iue, i = ["/properties"], a = "http://json-schema.org/draft-07/schema";
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
  var p = Kt;
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
  var u = bs;
  Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
    return u.default;
  } });
  var d = To;
  Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
    return d.default;
  } });
})(El, El.exports);
var kue = El.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
  const t = kue, n = pe, r = n.operators, o = {
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
        const O = c.scopeValue("formats", {
          key: w,
          ref: T,
          code: m.code.formats ? (0, n._)`${m.code.formats}${(0, n.getProperty)(w)}` : void 0
        });
        a.fail$data(b(O));
      }
      function b(w) {
        return (0, n._)`${w}.compare(${p}, ${l}) ${o[u].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  const i = (a) => (a.addKeyword(e.formatLimitDefinition), a);
  e.default = i;
})(tv);
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const n = ev, r = tv, o = pe, s = new o.Name("fullFormats"), i = new o.Name("fastFormats"), a = (p, l = { keywords: !0 }) => {
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
})($l, $l.exports);
var Cue = $l.exports;
const jue = /* @__PURE__ */ nr(Cue), Lue = (e, t, n, r) => {
  if (n === "length" || n === "prototype" || n === "arguments" || n === "caller")
    return;
  const o = Object.getOwnPropertyDescriptor(e, n), s = Object.getOwnPropertyDescriptor(t, n);
  !que(o, s) && r || Object.defineProperty(e, n, s);
}, que = function(e, t) {
  return e === void 0 || e.configurable || e.writable === t.writable && e.enumerable === t.enumerable && e.configurable === t.configurable && (e.writable || e.value === t.value);
}, Fue = (e, t) => {
  const n = Object.getPrototypeOf(t);
  n !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, n);
}, Mue = (e, t) => `/* Wrapped ${e}*/
${t}`, Uue = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), Vue = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"), zue = (e, t, n) => {
  const r = n === "" ? "" : `with ${n.trim()}() `, o = Mue.bind(null, r, t.toString());
  Object.defineProperty(o, "name", Vue);
  const { writable: s, enumerable: i, configurable: a } = Uue;
  Object.defineProperty(e, "toString", { value: o, writable: s, enumerable: i, configurable: a });
};
function Bue(e, t, { ignoreNonConfigurable: n = !1 } = {}) {
  const { name: r } = e;
  for (const o of Reflect.ownKeys(t))
    Lue(e, t, o, n);
  return Fue(e, t), zue(e, t, r), e;
}
const Dm = (e, t = {}) => {
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
  return Bue(p, e), p.cancel = () => {
    i && (clearTimeout(i), i = void 0), a && (clearTimeout(a), a = void 0);
  }, p;
};
var Dl = { exports: {} };
const Gue = "2.0.0", zv = 256, Hue = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Xue = 16, Kue = zv - 6, Wue = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var ma = {
  MAX_LENGTH: zv,
  MAX_SAFE_COMPONENT_LENGTH: Xue,
  MAX_SAFE_BUILD_LENGTH: Kue,
  MAX_SAFE_INTEGER: Hue,
  RELEASE_TYPES: Wue,
  SEMVER_SPEC_VERSION: Gue,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const Jue = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var ha = Jue;
(function(e, t) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: r,
    MAX_LENGTH: o
  } = ma, s = ha;
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
})(Dl, Dl.exports);
var xs = Dl.exports;
const Yue = Object.freeze({ loose: !0 }), Que = Object.freeze({}), Zue = (e) => e ? typeof e != "object" ? Yue : e : Que;
var od = Zue;
const Im = /^[0-9]+$/, Bv = (e, t) => {
  if (typeof e == "number" && typeof t == "number")
    return e === t ? 0 : e < t ? -1 : 1;
  const n = Im.test(e), r = Im.test(t);
  return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
}, epe = (e, t) => Bv(t, e);
var Gv = {
  compareIdentifiers: Bv,
  rcompareIdentifiers: epe
};
const Gs = ha, { MAX_LENGTH: km, MAX_SAFE_INTEGER: Hs } = ma, { safeRe: Xs, t: Ks } = xs, tpe = od, { compareIdentifiers: Oc } = Gv;
let npe = class nn {
  constructor(t, n) {
    if (n = tpe(n), t instanceof nn) {
      if (t.loose === !!n.loose && t.includePrerelease === !!n.includePrerelease)
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    if (t.length > km)
      throw new TypeError(
        `version is longer than ${km} characters`
      );
    Gs("SemVer", t, n), this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease;
    const r = t.trim().match(n.loose ? Xs[Ks.LOOSE] : Xs[Ks.FULL]);
    if (!r)
      throw new TypeError(`Invalid Version: ${t}`);
    if (this.raw = t, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > Hs || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Hs || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Hs || this.patch < 0)
      throw new TypeError("Invalid patch version");
    r[4] ? this.prerelease = r[4].split(".").map((o) => {
      if (/^[0-9]+$/.test(o)) {
        const s = +o;
        if (s >= 0 && s < Hs)
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
    if (Gs("SemVer.compare", this.version, this.options, t), !(t instanceof nn)) {
      if (typeof t == "string" && t === this.version)
        return 0;
      t = new nn(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return t instanceof nn || (t = new nn(t, this.options)), this.major < t.major ? -1 : this.major > t.major ? 1 : this.minor < t.minor ? -1 : this.minor > t.minor ? 1 : this.patch < t.patch ? -1 : this.patch > t.patch ? 1 : 0;
  }
  comparePre(t) {
    if (t instanceof nn || (t = new nn(t, this.options)), this.prerelease.length && !t.prerelease.length)
      return -1;
    if (!this.prerelease.length && t.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t.prerelease.length)
      return 0;
    let n = 0;
    do {
      const r = this.prerelease[n], o = t.prerelease[n];
      if (Gs("prerelease compare", n, r, o), r === void 0 && o === void 0)
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
    t instanceof nn || (t = new nn(t, this.options));
    let n = 0;
    do {
      const r = this.build[n], o = t.build[n];
      if (Gs("build compare", n, r, o), r === void 0 && o === void 0)
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
        const o = `-${n}`.match(this.options.loose ? Xs[Ks.PRERELEASELOOSE] : Xs[Ks.PRERELEASE]);
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
var ft = npe;
const Cm = ft, rpe = (e, t, n = !1) => {
  if (e instanceof Cm)
    return e;
  try {
    return new Cm(e, t);
  } catch (r) {
    if (!n)
      return null;
    throw r;
  }
};
var No = rpe;
const ope = No, spe = (e, t) => {
  const n = ope(e, t);
  return n ? n.version : null;
};
var ipe = spe;
const ape = No, cpe = (e, t) => {
  const n = ape(e.trim().replace(/^[=v]+/, ""), t);
  return n ? n.version : null;
};
var lpe = cpe;
const jm = ft, upe = (e, t, n, r, o) => {
  typeof n == "string" && (o = r, r = n, n = void 0);
  try {
    return new jm(
      e instanceof jm ? e.version : e,
      n
    ).inc(t, r, o).version;
  } catch {
    return null;
  }
};
var ppe = upe;
const Lm = No, dpe = (e, t) => {
  const n = Lm(e, null, !0), r = Lm(t, null, !0), o = n.compare(r);
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
var fpe = dpe;
const mpe = ft, hpe = (e, t) => new mpe(e, t).major;
var ype = hpe;
const gpe = ft, vpe = (e, t) => new gpe(e, t).minor;
var bpe = vpe;
const wpe = ft, xpe = (e, t) => new wpe(e, t).patch;
var _pe = xpe;
const $pe = No, Epe = (e, t) => {
  const n = $pe(e, t);
  return n && n.prerelease.length ? n.prerelease : null;
};
var Spe = Epe;
const qm = ft, Tpe = (e, t, n) => new qm(e, n).compare(new qm(t, n));
var Wt = Tpe;
const Ppe = Wt, Ope = (e, t, n) => Ppe(t, e, n);
var Npe = Ope;
const Rpe = Wt, Ape = (e, t) => Rpe(e, t, !0);
var Dpe = Ape;
const Fm = ft, Ipe = (e, t, n) => {
  const r = new Fm(e, n), o = new Fm(t, n);
  return r.compare(o) || r.compareBuild(o);
};
var sd = Ipe;
const kpe = sd, Cpe = (e, t) => e.sort((n, r) => kpe(n, r, t));
var jpe = Cpe;
const Lpe = sd, qpe = (e, t) => e.sort((n, r) => Lpe(r, n, t));
var Fpe = qpe;
const Mpe = Wt, Upe = (e, t, n) => Mpe(e, t, n) > 0;
var ya = Upe;
const Vpe = Wt, zpe = (e, t, n) => Vpe(e, t, n) < 0;
var id = zpe;
const Bpe = Wt, Gpe = (e, t, n) => Bpe(e, t, n) === 0;
var Hv = Gpe;
const Hpe = Wt, Xpe = (e, t, n) => Hpe(e, t, n) !== 0;
var Xv = Xpe;
const Kpe = Wt, Wpe = (e, t, n) => Kpe(e, t, n) >= 0;
var ad = Wpe;
const Jpe = Wt, Ype = (e, t, n) => Jpe(e, t, n) <= 0;
var cd = Ype;
const Qpe = Hv, Zpe = Xv, ede = ya, tde = ad, nde = id, rde = cd, ode = (e, t, n, r) => {
  switch (t) {
    case "===":
      return typeof e == "object" && (e = e.version), typeof n == "object" && (n = n.version), e === n;
    case "!==":
      return typeof e == "object" && (e = e.version), typeof n == "object" && (n = n.version), e !== n;
    case "":
    case "=":
    case "==":
      return Qpe(e, n, r);
    case "!=":
      return Zpe(e, n, r);
    case ">":
      return ede(e, n, r);
    case ">=":
      return tde(e, n, r);
    case "<":
      return nde(e, n, r);
    case "<=":
      return rde(e, n, r);
    default:
      throw new TypeError(`Invalid operator: ${t}`);
  }
};
var Kv = ode;
const sde = ft, ide = No, { safeRe: Ws, t: Js } = xs, ade = (e, t) => {
  if (e instanceof sde)
    return e;
  if (typeof e == "number" && (e = String(e)), typeof e != "string")
    return null;
  t = t || {};
  let n = null;
  if (!t.rtl)
    n = e.match(t.includePrerelease ? Ws[Js.COERCEFULL] : Ws[Js.COERCE]);
  else {
    const c = t.includePrerelease ? Ws[Js.COERCERTLFULL] : Ws[Js.COERCERTL];
    let p;
    for (; (p = c.exec(e)) && (!n || n.index + n[0].length !== e.length); )
      (!n || p.index + p[0].length !== n.index + n[0].length) && (n = p), c.lastIndex = p.index + p[1].length + p[2].length;
    c.lastIndex = -1;
  }
  if (n === null)
    return null;
  const r = n[2], o = n[3] || "0", s = n[4] || "0", i = t.includePrerelease && n[5] ? `-${n[5]}` : "", a = t.includePrerelease && n[6] ? `+${n[6]}` : "";
  return ide(`${r}.${o}.${s}${i}${a}`, t);
};
var cde = ade;
class lde {
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
var ude = lde, Nc, Mm;
function Jt() {
  if (Mm) return Nc;
  Mm = 1;
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
      const N = /* @__PURE__ */ new Map(), P = S.map((_) => new s(_, this.options));
      for (const _ of P) {
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
  Nc = t;
  const n = ude, r = new n(), o = od, s = ga(), i = ha, a = ft, {
    safeRe: c,
    t: p,
    comparatorTrimReplace: l,
    tildeTrimReplace: u,
    caretTrimReplace: d
  } = xs, { FLAG_INCLUDE_PRERELEASE: m, FLAG_LOOSE: f } = ma, g = (F) => F.value === "<0.0.0-0", y = (F) => F.value === "", v = (F, U) => {
    let G = !0;
    const V = F.slice();
    let K = V.pop();
    for (; G && V.length; )
      G = V.every((X) => K.intersects(X, U)), K = V.pop();
    return G;
  }, b = (F, U) => (F = F.replace(c[p.BUILD], ""), i("comp", F, U), F = C(F, U), i("caret", F), F = T(F, U), i("tildes", F), F = k(F, U), i("xrange", F), F = q(F, U), i("stars", F), F), w = (F) => !F || F.toLowerCase() === "x" || F === "*", T = (F, U) => F.trim().split(/\s+/).map((G) => O(G, U)).join(" "), O = (F, U) => {
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
      let P;
      return w(X) ? P = "" : w(D) ? P = `>=${X}.0.0${V} <${+X + 1}.0.0-0` : w(S) ? X === "0" ? P = `>=${X}.${D}.0${V} <${X}.${+D + 1}.0-0` : P = `>=${X}.${D}.0${V} <${+X + 1}.0.0-0` : N ? (i("replaceCaret pr", N), X === "0" ? D === "0" ? P = `>=${X}.${D}.${S}-${N} <${X}.${D}.${+S + 1}-0` : P = `>=${X}.${D}.${S}-${N} <${X}.${+D + 1}.0-0` : P = `>=${X}.${D}.${S}-${N} <${+X + 1}.0.0-0`) : (i("no pr"), X === "0" ? D === "0" ? P = `>=${X}.${D}.${S}${V} <${X}.${D}.${+S + 1}-0` : P = `>=${X}.${D}.${S}${V} <${X}.${+D + 1}.0-0` : P = `>=${X}.${D}.${S} <${+X + 1}.0.0-0`), i("caret return", P), P;
    });
  }, k = (F, U) => (i("replaceXRanges", F, U), F.split(/\s+/).map((G) => E(G, U)).join(" ")), E = (F, U) => {
    F = F.trim();
    const G = U.loose ? c[p.XRANGELOOSE] : c[p.XRANGE];
    return F.replace(G, (V, K, X, D, S, N) => {
      i("xRange", F, V, K, X, D, S, N);
      const P = w(X), h = P || w(D), _ = h || w(S), A = _;
      return K === "=" && A && (K = ""), N = U.includePrerelease ? "-0" : "", P ? K === ">" || K === "<" ? V = "<0.0.0-0" : V = "*" : K && A ? (h && (D = 0), S = 0, K === ">" ? (K = ">=", h ? (X = +X + 1, D = 0, S = 0) : (D = +D + 1, S = 0)) : K === "<=" && (K = "<", h ? X = +X + 1 : D = +D + 1), K === "<" && (N = "-0"), V = `${K + X}.${D}.${S}${N}`) : h ? V = `>=${X}.0.0${N} <${+X + 1}.0.0-0` : _ && (V = `>=${X}.${D}.0${N} <${X}.${+D + 1}.0-0`), i("xRange return", V), V;
    });
  }, q = (F, U) => (i("replaceStars", F, U), F.trim().replace(c[p.STAR], "")), I = (F, U) => (i("replaceGTE0", F, U), F.trim().replace(c[U.includePrerelease ? p.GTE0PRE : p.GTE0], "")), z = (F) => (U, G, V, K, X, D, S, N, P, h, _, A) => (w(V) ? G = "" : w(K) ? G = `>=${V}.0.0${F ? "-0" : ""}` : w(X) ? G = `>=${V}.${K}.0${F ? "-0" : ""}` : D ? G = `>=${G}` : G = `>=${G}${F ? "-0" : ""}`, w(P) ? N = "" : w(h) ? N = `<${+P + 1}.0.0-0` : w(_) ? N = `<${P}.${+h + 1}.0-0` : A ? N = `<=${P}.${h}.${_}-${A}` : F ? N = `<${P}.${h}.${+_ + 1}-0` : N = `<=${N}`, `${G} ${N}`.trim()), H = (F, U, G) => {
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
  return Nc;
}
var Rc, Um;
function ga() {
  if (Um) return Rc;
  Um = 1;
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
  Rc = t;
  const n = od, { safeRe: r, t: o } = xs, s = Kv, i = ha, a = ft, c = Jt();
  return Rc;
}
const pde = Jt(), dde = (e, t, n) => {
  try {
    t = new pde(t, n);
  } catch {
    return !1;
  }
  return t.test(e);
};
var va = dde;
const fde = Jt(), mde = (e, t) => new fde(e, t).set.map((n) => n.map((r) => r.value).join(" ").trim().split(" "));
var hde = mde;
const yde = ft, gde = Jt(), vde = (e, t, n) => {
  let r = null, o = null, s = null;
  try {
    s = new gde(t, n);
  } catch {
    return null;
  }
  return e.forEach((i) => {
    s.test(i) && (!r || o.compare(i) === -1) && (r = i, o = new yde(r, n));
  }), r;
};
var bde = vde;
const wde = ft, xde = Jt(), _de = (e, t, n) => {
  let r = null, o = null, s = null;
  try {
    s = new xde(t, n);
  } catch {
    return null;
  }
  return e.forEach((i) => {
    s.test(i) && (!r || o.compare(i) === 1) && (r = i, o = new wde(r, n));
  }), r;
};
var $de = _de;
const Ac = ft, Ede = Jt(), Vm = ya, Sde = (e, t) => {
  e = new Ede(e, t);
  let n = new Ac("0.0.0");
  if (e.test(n) || (n = new Ac("0.0.0-0"), e.test(n)))
    return n;
  n = null;
  for (let r = 0; r < e.set.length; ++r) {
    const o = e.set[r];
    let s = null;
    o.forEach((i) => {
      const a = new Ac(i.semver.version);
      switch (i.operator) {
        case ">":
          a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0), a.raw = a.format();
        case "":
        case ">=":
          (!s || Vm(a, s)) && (s = a);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${i.operator}`);
      }
    }), s && (!n || Vm(n, s)) && (n = s);
  }
  return n && e.test(n) ? n : null;
};
var Tde = Sde;
const Pde = Jt(), Ode = (e, t) => {
  try {
    return new Pde(e, t).range || "*";
  } catch {
    return null;
  }
};
var Nde = Ode;
const Rde = ft, Wv = ga(), { ANY: Ade } = Wv, Dde = Jt(), Ide = va, zm = ya, Bm = id, kde = cd, Cde = ad, jde = (e, t, n, r) => {
  e = new Rde(e, r), t = new Dde(t, r);
  let o, s, i, a, c;
  switch (n) {
    case ">":
      o = zm, s = kde, i = Bm, a = ">", c = ">=";
      break;
    case "<":
      o = Bm, s = Cde, i = zm, a = "<", c = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (Ide(e, t, r))
    return !1;
  for (let p = 0; p < t.set.length; ++p) {
    const l = t.set[p];
    let u = null, d = null;
    if (l.forEach((m) => {
      m.semver === Ade && (m = new Wv(">=0.0.0")), u = u || m, d = d || m, o(m.semver, u.semver, r) ? u = m : i(m.semver, d.semver, r) && (d = m);
    }), u.operator === a || u.operator === c || (!d.operator || d.operator === a) && s(e, d.semver))
      return !1;
    if (d.operator === c && i(e, d.semver))
      return !1;
  }
  return !0;
};
var ld = jde;
const Lde = ld, qde = (e, t, n) => Lde(e, t, ">", n);
var Fde = qde;
const Mde = ld, Ude = (e, t, n) => Mde(e, t, "<", n);
var Vde = Ude;
const Gm = Jt(), zde = (e, t, n) => (e = new Gm(e, n), t = new Gm(t, n), e.intersects(t, n));
var Bde = zde;
const Gde = va, Hde = Wt;
var Xde = (e, t, n) => {
  const r = [];
  let o = null, s = null;
  const i = e.sort((l, u) => Hde(l, u, n));
  for (const l of i)
    Gde(l, t, n) ? (s = l, o || (o = l)) : (s && r.push([o, s]), s = null, o = null);
  o && r.push([o, null]);
  const a = [];
  for (const [l, u] of r)
    l === u ? a.push(l) : !u && l === i[0] ? a.push("*") : u ? l === i[0] ? a.push(`<=${u}`) : a.push(`${l} - ${u}`) : a.push(`>=${l}`);
  const c = a.join(" || "), p = typeof t.raw == "string" ? t.raw : String(t);
  return c.length < p.length ? c : t;
};
const Hm = Jt(), ud = ga(), { ANY: Dc } = ud, Mo = va, pd = Wt, Kde = (e, t, n = {}) => {
  if (e === t)
    return !0;
  e = new Hm(e, n), t = new Hm(t, n);
  let r = !1;
  e: for (const o of e.set) {
    for (const s of t.set) {
      const i = Jde(o, s, n);
      if (r = r || i !== null, i)
        continue e;
    }
    if (r)
      return !1;
  }
  return !0;
}, Wde = [new ud(">=0.0.0-0")], Xm = [new ud(">=0.0.0")], Jde = (e, t, n) => {
  if (e === t)
    return !0;
  if (e.length === 1 && e[0].semver === Dc) {
    if (t.length === 1 && t[0].semver === Dc)
      return !0;
    n.includePrerelease ? e = Wde : e = Xm;
  }
  if (t.length === 1 && t[0].semver === Dc) {
    if (n.includePrerelease)
      return !0;
    t = Xm;
  }
  const r = /* @__PURE__ */ new Set();
  let o, s;
  for (const m of e)
    m.operator === ">" || m.operator === ">=" ? o = Km(o, m, n) : m.operator === "<" || m.operator === "<=" ? s = Wm(s, m, n) : r.add(m.semver);
  if (r.size > 1)
    return null;
  let i;
  if (o && s) {
    if (i = pd(o.semver, s.semver, n), i > 0)
      return null;
    if (i === 0 && (o.operator !== ">=" || s.operator !== "<="))
      return null;
  }
  for (const m of r) {
    if (o && !Mo(m, String(o), n) || s && !Mo(m, String(s), n))
      return null;
    for (const f of t)
      if (!Mo(m, String(f), n))
        return !1;
    return !0;
  }
  let a, c, p, l, u = s && !n.includePrerelease && s.semver.prerelease.length ? s.semver : !1, d = o && !n.includePrerelease && o.semver.prerelease.length ? o.semver : !1;
  u && u.prerelease.length === 1 && s.operator === "<" && u.prerelease[0] === 0 && (u = !1);
  for (const m of t) {
    if (l = l || m.operator === ">" || m.operator === ">=", p = p || m.operator === "<" || m.operator === "<=", o) {
      if (d && m.semver.prerelease && m.semver.prerelease.length && m.semver.major === d.major && m.semver.minor === d.minor && m.semver.patch === d.patch && (d = !1), m.operator === ">" || m.operator === ">=") {
        if (a = Km(o, m, n), a === m && a !== o)
          return !1;
      } else if (o.operator === ">=" && !Mo(o.semver, String(m), n))
        return !1;
    }
    if (s) {
      if (u && m.semver.prerelease && m.semver.prerelease.length && m.semver.major === u.major && m.semver.minor === u.minor && m.semver.patch === u.patch && (u = !1), m.operator === "<" || m.operator === "<=") {
        if (c = Wm(s, m, n), c === m && c !== s)
          return !1;
      } else if (s.operator === "<=" && !Mo(s.semver, String(m), n))
        return !1;
    }
    if (!m.operator && (s || o) && i !== 0)
      return !1;
  }
  return !(o && p && !s && i !== 0 || s && l && !o && i !== 0 || d || u);
}, Km = (e, t, n) => {
  if (!e)
    return t;
  const r = pd(e.semver, t.semver, n);
  return r > 0 ? e : r < 0 || t.operator === ">" && e.operator === ">=" ? t : e;
}, Wm = (e, t, n) => {
  if (!e)
    return t;
  const r = pd(e.semver, t.semver, n);
  return r < 0 ? e : r > 0 || t.operator === "<" && e.operator === "<=" ? t : e;
};
var Yde = Kde;
const Ic = xs, Jm = ma, Qde = ft, Ym = Gv, Zde = No, efe = ipe, tfe = lpe, nfe = ppe, rfe = fpe, ofe = ype, sfe = bpe, ife = _pe, afe = Spe, cfe = Wt, lfe = Npe, ufe = Dpe, pfe = sd, dfe = jpe, ffe = Fpe, mfe = ya, hfe = id, yfe = Hv, gfe = Xv, vfe = ad, bfe = cd, wfe = Kv, xfe = cde, _fe = ga(), $fe = Jt(), Efe = va, Sfe = hde, Tfe = bde, Pfe = $de, Ofe = Tde, Nfe = Nde, Rfe = ld, Afe = Fde, Dfe = Vde, Ife = Bde, kfe = Xde, Cfe = Yde;
var jfe = {
  parse: Zde,
  valid: efe,
  clean: tfe,
  inc: nfe,
  diff: rfe,
  major: ofe,
  minor: sfe,
  patch: ife,
  prerelease: afe,
  compare: cfe,
  rcompare: lfe,
  compareLoose: ufe,
  compareBuild: pfe,
  sort: dfe,
  rsort: ffe,
  gt: mfe,
  lt: hfe,
  eq: yfe,
  neq: gfe,
  gte: vfe,
  lte: bfe,
  cmp: wfe,
  coerce: xfe,
  Comparator: _fe,
  Range: $fe,
  satisfies: Efe,
  toComparators: Sfe,
  maxSatisfying: Tfe,
  minSatisfying: Pfe,
  minVersion: Ofe,
  validRange: Nfe,
  outside: Rfe,
  gtr: Afe,
  ltr: Dfe,
  intersects: Ife,
  simplifyRange: kfe,
  subset: Cfe,
  SemVer: Qde,
  re: Ic.re,
  src: Ic.src,
  tokens: Ic.t,
  SEMVER_SPEC_VERSION: Jm.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: Jm.RELEASE_TYPES,
  compareIdentifiers: Ym.compareIdentifiers,
  rcompareIdentifiers: Ym.rcompareIdentifiers
};
const Br = /* @__PURE__ */ nr(jfe), Lfe = Object.prototype.toString, qfe = "[object Uint8Array]", Ffe = "[object ArrayBuffer]";
function Jv(e, t, n) {
  return e ? e.constructor === t ? !0 : Lfe.call(e) === n : !1;
}
function Yv(e) {
  return Jv(e, Uint8Array, qfe);
}
function Mfe(e) {
  return Jv(e, ArrayBuffer, Ffe);
}
function Ufe(e) {
  return Yv(e) || Mfe(e);
}
function Vfe(e) {
  if (!Yv(e))
    throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof e}\``);
}
function zfe(e) {
  if (!Ufe(e))
    throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e}\``);
}
function kc(e, t) {
  if (e.length === 0)
    return new Uint8Array(0);
  t ?? (t = e.reduce((o, s) => o + s.length, 0));
  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e)
    Vfe(o), n.set(o, r), r += o.length;
  return n;
}
const Ys = {
  utf8: new globalThis.TextDecoder("utf8")
};
function Qs(e, t = "utf8") {
  return zfe(e), Ys[t] ?? (Ys[t] = new globalThis.TextDecoder(t)), Ys[t].decode(e);
}
function Bfe(e) {
  if (typeof e != "string")
    throw new TypeError(`Expected \`string\`, got \`${typeof e}\``);
}
const Gfe = new globalThis.TextEncoder();
function Cc(e) {
  return Bfe(e), Gfe.encode(e);
}
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
const Qm = "aes-256-cbc", Qv = /* @__PURE__ */ new Set([
  "aes-256-cbc",
  "aes-256-gcm",
  "aes-256-ctr"
]), Hfe = (e) => typeof e == "string" && Qv.has(e), bn = () => /* @__PURE__ */ Object.create(null), Zm = (e) => e !== void 0, jc = (e, t) => {
  const n = /* @__PURE__ */ new Set([
    "undefined",
    "symbol",
    "function"
  ]), r = typeof t;
  if (n.has(r))
    throw new TypeError(`Setting a value of type \`${r}\` for key \`${e}\` is not allowed as it's not supported by JSON`);
}, Vn = "__internal__", Lc = `${Vn}.migrations.version`;
var Gn, Hn, _r, yt, Nt, $r, Er, ao, rn, Ve, Zv, eb, tb, nb, rb, ob, sb, ib;
class Xfe {
  constructor(t = {}) {
    ge(this, Ve);
    tn(this, "path");
    tn(this, "events");
    ge(this, Gn);
    ge(this, Hn);
    ge(this, _r);
    ge(this, yt);
    ge(this, Nt, {});
    ge(this, $r, !1);
    ge(this, Er);
    ge(this, ao);
    ge(this, rn);
    tn(this, "_deserialize", (t) => JSON.parse(t));
    tn(this, "_serialize", (t) => JSON.stringify(t, void 0, "	"));
    const n = ne(this, Ve, Zv).call(this, t);
    ie(this, yt, n), ne(this, Ve, eb).call(this, n), ne(this, Ve, nb).call(this, n), ne(this, Ve, rb).call(this, n), this.events = new EventTarget(), ie(this, Hn, n.encryptionKey), ie(this, _r, n.encryptionAlgorithm ?? Qm), this.path = ne(this, Ve, ob).call(this, n), ne(this, Ve, sb).call(this, n), n.watch && this._watch();
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
      throw new TypeError(`Please don't use the ${Vn} key, as it's used to manage this module internal operations.`);
    const { store: r } = this, o = (s, i) => {
      if (jc(s, i), M(this, yt).accessPropertiesByDotNotation)
        Ds(r, s, i);
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
    return M(this, yt).accessPropertiesByDotNotation ? hc(this.store, t) : t in this.store;
  }
  appendToArray(t, n) {
    jc(t, n);
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
      Zm(M(this, Nt)[n]) && this.set(n, M(this, Nt)[n]);
  }
  delete(t) {
    const { store: n } = this;
    M(this, yt).accessPropertiesByDotNotation ? vZ(n, t) : delete n[t], this.store = n;
  }
  /**
      Delete all items.
  
      This resets known items to their default values, if defined by the `defaults` or `schema` option.
      */
  clear() {
    const t = bn();
    for (const n of Object.keys(M(this, Nt)))
      Zm(M(this, Nt)[n]) && (jc(n, M(this, Nt)[n]), M(this, yt).accessPropertiesByDotNotation ? Ds(t, n, M(this, Nt)[n]) : t[n] = M(this, Nt)[n]);
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
      const n = ae.readFileSync(this.path, M(this, Hn) ? null : "utf8"), r = this._decryptData(n);
      return ((s) => {
        const i = this._deserialize(s);
        return M(this, $r) || this._validate(i), Object.assign(bn(), i);
      })(r);
    } catch (n) {
      if ((n == null ? void 0 : n.code) === "ENOENT")
        return this._ensureDirectory(), bn();
      if (M(this, yt).clearInvalidConfig) {
        const r = n;
        if (r.name === "SyntaxError" || (t = r.message) != null && t.startsWith("Config schema violation:") || r.message === "Failed to decrypt config data.")
          return bn();
      }
      throw n;
    }
  }
  set store(t) {
    if (this._ensureDirectory(), !hc(t, Vn))
      try {
        const n = ae.readFileSync(this.path, M(this, Hn) ? null : "utf8"), r = this._decryptData(n), o = this._deserialize(r);
        hc(o, Vn) && Ds(t, Vn, Af(o, Vn));
      } catch {
      }
    M(this, $r) || this._validate(t), this._write(t), this.events.dispatchEvent(new Event("change"));
  }
  *[Symbol.iterator]() {
    for (const [t, n] of Object.entries(this.store))
      this._isReservedKeyPath(t) || (yield [t, n]);
  }
  /**
  Close the file watcher if one exists. This is useful in tests to prevent the process from hanging.
  */
  _closeWatcher() {
    M(this, Er) && (M(this, Er).close(), ie(this, Er, void 0)), M(this, ao) && (ae.unwatchFile(this.path), ie(this, ao, !1)), ie(this, rn, void 0);
  }
  _decryptData(t) {
    const n = M(this, Hn);
    if (!n)
      return typeof t == "string" ? t : Qs(t);
    const r = M(this, _r), o = r === "aes-256-gcm" ? 16 : 0, s = ":".codePointAt(0), i = typeof t == "string" ? t.codePointAt(16) : t[16];
    if (!(s !== void 0 && i === s)) {
      if (r === "aes-256-cbc")
        return typeof t == "string" ? t : Qs(t);
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
    }, p = t.slice(0, 16), l = t.slice(17), u = typeof l == "string" ? Cc(l) : l, d = (m) => {
      const { ciphertext: f, authenticationTag: g } = c(u), y = Co.pbkdf2Sync(n, m, 1e4, 32, "sha512"), v = Co.createDecipheriv(r, y, p);
      return g && v.setAuthTag(g), Qs(kc([v.update(f), v.final()]));
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
      return typeof t == "string" ? t : Qs(t);
    throw new Error("Failed to decrypt config data.");
  }
  _handleStoreChange(t) {
    let n = this.store;
    const r = () => {
      const o = n, s = this.store;
      Fd(s, o) || (n = s, t.call(this, s, o));
    };
    return this.events.addEventListener("change", r), () => {
      this.events.removeEventListener("change", r);
    };
  }
  _handleValueChange(t, n) {
    let r = t();
    const o = () => {
      const s = r, i = t();
      Fd(i, s) || (r = i, n.call(this, i, s));
    };
    return this.events.addEventListener("change", o), () => {
      this.events.removeEventListener("change", o);
    };
  }
  _validate(t) {
    if (!M(this, Gn) || M(this, Gn).call(this, t) || !M(this, Gn).errors)
      return;
    const r = M(this, Gn).errors.map(({ instancePath: o, message: s = "" }) => `\`${o.slice(1)}\` ${s}`);
    throw new Error("Config schema violation: " + r.join("; "));
  }
  _ensureDirectory() {
    ae.mkdirSync(de.dirname(this.path), { recursive: !0 });
  }
  _write(t) {
    let n = this._serialize(t);
    const r = M(this, Hn);
    if (r) {
      const o = Co.randomBytes(16), s = Co.pbkdf2Sync(r, o, 1e4, 32, "sha512"), i = Co.createCipheriv(M(this, _r), s, o), a = kc([i.update(Cc(n)), i.final()]), c = [o, Cc(":"), a];
      M(this, _r) === "aes-256-gcm" && c.push(i.getAuthTag()), n = kc(c);
    }
    if (Se.env.SNAP)
      ae.writeFileSync(this.path, n, { mode: M(this, yt).configFileMode });
    else
      try {
        eg(this.path, n, { mode: M(this, yt).configFileMode });
      } catch (o) {
        if ((o == null ? void 0 : o.code) === "EXDEV") {
          ae.writeFileSync(this.path, n, { mode: M(this, yt).configFileMode });
          return;
        }
        throw o;
      }
  }
  _watch() {
    if (this._ensureDirectory(), ae.existsSync(this.path) || this._write(bn()), Se.platform === "win32" || Se.platform === "darwin") {
      M(this, rn) ?? ie(this, rn, Dm(() => {
        this.events.dispatchEvent(new Event("change"));
      }, { wait: 100 }));
      const t = de.dirname(this.path), n = de.basename(this.path);
      ie(this, Er, ae.watch(t, { persistent: !1, encoding: "utf8" }, (r, o) => {
        o && o !== n || typeof M(this, rn) == "function" && M(this, rn).call(this);
      }));
    } else
      M(this, rn) ?? ie(this, rn, Dm(() => {
        this.events.dispatchEvent(new Event("change"));
      }, { wait: 1e3 })), ae.watchFile(this.path, { persistent: !1 }, (t, n) => {
        typeof M(this, rn) == "function" && M(this, rn).call(this);
      }), ie(this, ao, !0);
  }
  _migrate(t, n, r) {
    let o = this._get(Lc, "0.0.0");
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
        c == null || c(this), this._set(Lc, a), o = a, i = structuredClone(this.store);
      } catch (c) {
        this.store = i;
        const p = c instanceof Error ? c.message : String(c);
        throw new Error(`Something went wrong during the migration! Changes applied to the store until this failed migration will be restored. ${p}`);
      }
    (this._isVersionInRangeFormat(o) || !Br.eq(o, n)) && this._set(Lc, n);
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
    return t === Vn || t.startsWith(`${Vn}.`);
  }
  _isVersionInRangeFormat(t) {
    return Br.clean(t) === null;
  }
  _shouldPerformMigration(t, n, r) {
    return this._isVersionInRangeFormat(t) ? n !== "0.0.0" && Br.satisfies(n, t) ? !1 : Br.satisfies(r, t) : !(Br.lte(t, n) || Br.gt(t, r));
  }
  _get(t, n) {
    return Af(this.store, t, n);
  }
  _set(t, n) {
    const { store: r } = this;
    Ds(r, t, n), this.store = r;
  }
}
Gn = new WeakMap(), Hn = new WeakMap(), _r = new WeakMap(), yt = new WeakMap(), Nt = new WeakMap(), $r = new WeakMap(), Er = new WeakMap(), ao = new WeakMap(), rn = new WeakMap(), Ve = new WeakSet(), Zv = function(t) {
  const n = {
    configName: "config",
    fileExtension: "json",
    projectSuffix: "nodejs",
    clearInvalidConfig: !1,
    accessPropertiesByDotNotation: !0,
    configFileMode: 438,
    ...t
  };
  if (n.encryptionAlgorithm ?? (n.encryptionAlgorithm = Qm), !Hfe(n.encryptionAlgorithm))
    throw new TypeError(`The \`encryptionAlgorithm\` option must be one of: ${[...Qv].join(", ")}`);
  if (!n.cwd) {
    if (!n.projectName)
      throw new Error("Please specify the `projectName` option.");
    n.cwd = _Z(n.projectName, { suffix: n.projectSuffix }).config;
  }
  return typeof n.fileExtension == "string" && (n.fileExtension = n.fileExtension.replace(/^\.+/, "")), n;
}, eb = function(t) {
  if (!(t.schema ?? t.ajvOptions ?? t.rootSchema))
    return;
  if (t.schema && typeof t.schema != "object")
    throw new TypeError("The `schema` option must be an object.");
  const n = jue.default, r = new $ie.Ajv2020({
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
  ie(this, Gn, r.compile(o)), ne(this, Ve, tb).call(this, t.schema);
}, tb = function(t) {
  const n = Object.entries(t ?? {});
  for (const [r, o] of n) {
    if (!o || typeof o != "object" || !Object.hasOwn(o, "default"))
      continue;
    const { default: s } = o;
    s !== void 0 && (M(this, Nt)[r] = s);
  }
}, nb = function(t) {
  t.defaults && Object.assign(M(this, Nt), t.defaults);
}, rb = function(t) {
  t.serialize && (this._serialize = t.serialize), t.deserialize && (this._deserialize = t.deserialize);
}, ob = function(t) {
  const n = typeof t.fileExtension == "string" ? t.fileExtension : void 0, r = n ? `.${n}` : "";
  return de.resolve(t.cwd, `${t.configName ?? "config"}${r}`);
}, sb = function(t) {
  if (t.migrations) {
    ne(this, Ve, ib).call(this, t), this._validate(this.store);
    return;
  }
  const n = this.store, r = Object.assign(bn(), t.defaults ?? {}, n);
  this._validate(r);
  try {
    Md.deepEqual(n, r);
  } catch {
    this.store = r;
  }
}, ib = function(t) {
  const { migrations: n, projectVersion: r } = t;
  if (n) {
    if (!r)
      throw new Error("Please specify the `projectVersion` option.");
    ie(this, $r, !0);
    try {
      const o = this.store, s = Object.assign(bn(), t.defaults ?? {}, o);
      try {
        Md.deepEqual(o, s);
      } catch {
        this._write(s);
      }
      this._migrate(n, r, t.beforeEachMigration);
    } finally {
      ie(this, $r, !1);
    }
  }
};
const { app: yi, ipcMain: Il, shell: Kfe } = wy;
let eh = !1;
const th = () => {
  if (!Il || !yi)
    throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
  const e = {
    defaultCwd: yi.getPath("userData"),
    appVersion: yi.getVersion()
  };
  return eh || (Il.on("electron-store-get-data", (t) => {
    t.returnValue = e;
  }), eh = !0), e;
};
class Wfe extends Xfe {
  constructor(t) {
    let n, r;
    if (Se.type === "renderer") {
      const o = wy.ipcRenderer.sendSync("electron-store-get-data");
      if (!o)
        throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
      ({ defaultCwd: n, appVersion: r } = o);
    } else Il && yi && ({ defaultCwd: n, appVersion: r } = th());
    t = {
      name: "config",
      ...t
    }, t.projectVersion || (t.projectVersion = r), t.cwd ? t.cwd = de.isAbsolute(t.cwd) ? t.cwd : de.join(n, t.cwd) : t.cwd = n, t.configName = t.name, delete t.name, super(t);
  }
  static initRenderer() {
    th();
  }
  async openInEditor() {
    const t = await Kfe.openPath(this.path);
    if (t)
      throw new Error(t);
  }
}
class Jfe {
  constructor() {
    tn(this, "store");
    this.store = new Wfe();
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
  removeDownloadedEpisode(t) {
    const r = (this.store.get("downloads") || []).filter((o) => o !== t);
    this.store.set("downloads", r);
  }
  resetDownloadHistory() {
    this.store.set("downloads", []);
  }
}
function ab(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Yfe } = Object.prototype, { getPrototypeOf: dd } = Object, { iterator: ba, toStringTag: cb } = Symbol, wa = /* @__PURE__ */ ((e) => (t) => {
  const n = Yfe.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Yt = (e) => (e = e.toLowerCase(), (t) => wa(t) === e), xa = (e) => (t) => typeof t === e, { isArray: Ro } = Array, yo = xa("undefined");
function _s(e) {
  return e !== null && !yo(e) && e.constructor !== null && !yo(e.constructor) && xt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const lb = Yt("ArrayBuffer");
function Qfe(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && lb(e.buffer), t;
}
const Zfe = xa("string"), xt = xa("function"), ub = xa("number"), $s = (e) => e !== null && typeof e == "object", eme = (e) => e === !0 || e === !1, gi = (e) => {
  if (wa(e) !== "object")
    return !1;
  const t = dd(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(cb in e) && !(ba in e);
}, tme = (e) => {
  if (!$s(e) || _s(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, nme = Yt("Date"), rme = Yt("File"), ome = Yt("Blob"), sme = Yt("FileList"), ime = (e) => $s(e) && xt(e.pipe), ame = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || xt(e.append) && ((t = wa(e)) === "formdata" || // detect form-data instance
  t === "object" && xt(e.toString) && e.toString() === "[object FormData]"));
}, cme = Yt("URLSearchParams"), [lme, ume, pme, dme] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Yt), fme = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Es(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Ro(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (_s(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function pb(e, t) {
  if (_s(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const wr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, db = (e) => !yo(e) && e !== wr;
function kl() {
  const { caseless: e, skipUndefined: t } = db(this) && this || {}, n = {}, r = (o, s) => {
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    const i = e && pb(n, s) || s;
    gi(n[i]) && gi(o) ? n[i] = kl(n[i], o) : gi(o) ? n[i] = kl({}, o) : Ro(o) ? n[i] = o.slice() : (!t || !yo(o)) && (n[i] = o);
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && Es(arguments[o], r);
  return n;
}
const mme = (e, t, n, { allOwnKeys: r } = {}) => (Es(
  t,
  (o, s) => {
    n && xt(o) ? Object.defineProperty(e, s, {
      value: ab(o, n),
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
), e), hme = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), yme = (e, t, n, r) => {
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
}, gme = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && dd(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, vme = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, bme = (e) => {
  if (!e) return null;
  if (Ro(e)) return e;
  let t = e.length;
  if (!ub(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, wme = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && dd(Uint8Array)), xme = (e, t) => {
  const r = (e && e[ba]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, _me = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, $me = Yt("HTMLFormElement"), Eme = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), nh = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Sme = Yt("RegExp"), fb = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Es(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, Tme = (e) => {
  fb(e, (t, n) => {
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
}, Pme = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Ro(e) ? r(e) : r(String(e).split(t)), n;
}, Ome = () => {
}, Nme = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Rme(e) {
  return !!(e && xt(e.append) && e[cb] === "FormData" && e[ba]);
}
const Ame = (e) => {
  const t = new Array(10), n = (r, o) => {
    if ($s(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (_s(r))
        return r;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = Ro(r) ? [] : {};
        return Es(r, (i, a) => {
          const c = n(i, o + 1);
          !yo(c) && (s[a] = c);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, Dme = Yt("AsyncFunction"), Ime = (e) => e && ($s(e) || xt(e)) && xt(e.then) && xt(e.catch), mb = ((e, t) => e ? setImmediate : t ? ((n, r) => (wr.addEventListener(
  "message",
  ({ source: o, data: s }) => {
    o === wr && s === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), wr.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", xt(wr.postMessage)), kme = typeof queueMicrotask < "u" ? queueMicrotask.bind(wr) : typeof process < "u" && process.nextTick || mb, Cme = (e) => e != null && xt(e[ba]), L = {
  isArray: Ro,
  isArrayBuffer: lb,
  isBuffer: _s,
  isFormData: ame,
  isArrayBufferView: Qfe,
  isString: Zfe,
  isNumber: ub,
  isBoolean: eme,
  isObject: $s,
  isPlainObject: gi,
  isEmptyObject: tme,
  isReadableStream: lme,
  isRequest: ume,
  isResponse: pme,
  isHeaders: dme,
  isUndefined: yo,
  isDate: nme,
  isFile: rme,
  isBlob: ome,
  isRegExp: Sme,
  isFunction: xt,
  isStream: ime,
  isURLSearchParams: cme,
  isTypedArray: wme,
  isFileList: sme,
  forEach: Es,
  merge: kl,
  extend: mme,
  trim: fme,
  stripBOM: hme,
  inherits: yme,
  toFlatObject: gme,
  kindOf: wa,
  kindOfTest: Yt,
  endsWith: vme,
  toArray: bme,
  forEachEntry: xme,
  matchAll: _me,
  isHTMLForm: $me,
  hasOwnProperty: nh,
  hasOwnProp: nh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: fb,
  freezeMethods: Tme,
  toObjectSet: Pme,
  toCamelCase: Eme,
  noop: Ome,
  toFiniteNumber: Nme,
  findKey: pb,
  global: wr,
  isContextDefined: db,
  isSpecCompliantForm: Rme,
  toJSONObject: Ame,
  isAsyncFn: Dme,
  isThenable: Ime,
  setImmediate: mb,
  asap: kme,
  isIterable: Cme
};
let W = class hb extends Error {
  static from(t, n, r, o, s, i) {
    const a = new hb(t.message, n || t.code, r, o, s);
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
var yb = lt.Stream, jme = tr, Lme = Qt;
function Qt() {
  this.source = null, this.dataSize = 0, this.maxDataSize = 1024 * 1024, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
}
jme.inherits(Qt, yb);
Qt.create = function(e, t) {
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
Object.defineProperty(Qt.prototype, "readable", {
  configurable: !0,
  enumerable: !0,
  get: function() {
    return this.source.readable;
  }
});
Qt.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};
Qt.prototype.resume = function() {
  this._released || this.release(), this.source.resume();
};
Qt.prototype.pause = function() {
  this.source.pause();
};
Qt.prototype.release = function() {
  this._released = !0, this._bufferedEvents.forEach((function(e) {
    this.emit.apply(this, e);
  }).bind(this)), this._bufferedEvents = [];
};
Qt.prototype.pipe = function() {
  var e = yb.prototype.pipe.apply(this, arguments);
  return this.resume(), e;
};
Qt.prototype._handleEmit = function(e) {
  if (this._released) {
    this.emit.apply(this, e);
    return;
  }
  e[0] === "data" && (this.dataSize += e[1].length, this._checkIfMaxDataSizeExceeded()), this._bufferedEvents.push(e);
};
Qt.prototype._checkIfMaxDataSizeExceeded = function() {
  if (!this._maxDataSizeExceeded && !(this.dataSize <= this.maxDataSize)) {
    this._maxDataSizeExceeded = !0;
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", new Error(e));
  }
};
var qme = tr, gb = lt.Stream, rh = Lme, Fme = Ae;
function Ae() {
  this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2 * 1024 * 1024, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
}
qme.inherits(Ae, gb);
Ae.create = function(e) {
  var t = new this();
  e = e || {};
  for (var n in e)
    t[n] = e[n];
  return t;
};
Ae.isStreamLike = function(e) {
  return typeof e != "function" && typeof e != "string" && typeof e != "boolean" && typeof e != "number" && !Buffer.isBuffer(e);
};
Ae.prototype.append = function(e) {
  var t = Ae.isStreamLike(e);
  if (t) {
    if (!(e instanceof rh)) {
      var n = rh.create(e, {
        maxDataSize: 1 / 0,
        pauseStream: this.pauseStreams
      });
      e.on("data", this._checkDataSize.bind(this)), e = n;
    }
    this._handleErrors(e), this.pauseStreams && e.pause();
  }
  return this._streams.push(e), this;
};
Ae.prototype.pipe = function(e, t) {
  return gb.prototype.pipe.call(this, e, t), this.resume(), e;
};
Ae.prototype._getNext = function() {
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
Ae.prototype._realGetNext = function() {
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
    var r = Ae.isStreamLike(n);
    r && (n.on("data", this._checkDataSize.bind(this)), this._handleErrors(n)), this._pipeNext(n);
  }).bind(this));
};
Ae.prototype._pipeNext = function(e) {
  this._currentStream = e;
  var t = Ae.isStreamLike(e);
  if (t) {
    e.on("end", this._getNext.bind(this)), e.pipe(this, { end: !1 });
    return;
  }
  var n = e;
  this.write(n), this._getNext();
};
Ae.prototype._handleErrors = function(e) {
  var t = this;
  e.on("error", function(n) {
    t._emitError(n);
  });
};
Ae.prototype.write = function(e) {
  this.emit("data", e);
};
Ae.prototype.pause = function() {
  this.pauseStreams && (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function" && this._currentStream.pause(), this.emit("pause"));
};
Ae.prototype.resume = function() {
  this._released || (this._released = !0, this.writable = !0, this._getNext()), this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function" && this._currentStream.resume(), this.emit("resume");
};
Ae.prototype.end = function() {
  this._reset(), this.emit("end");
};
Ae.prototype.destroy = function() {
  this._reset(), this.emit("close");
};
Ae.prototype._reset = function() {
  this.writable = !1, this._streams = [], this._currentStream = null;
};
Ae.prototype._checkDataSize = function() {
  if (this._updateDataSize(), !(this.dataSize <= this.maxDataSize)) {
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(new Error(e));
  }
};
Ae.prototype._updateDataSize = function() {
  this.dataSize = 0;
  var e = this;
  this._streams.forEach(function(t) {
    t.dataSize && (e.dataSize += t.dataSize);
  }), this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize);
};
Ae.prototype._emitError = function(e) {
  this._reset(), this.emit("error", e);
};
var vb = {};
const Mme = {
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
var Ume = Mme;
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(e) {
  var t = Ume, n = Pe.extname, r = /^\s*([^;\s]*)(?:;|\s|$)/, o = /^text\//i;
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
})(vb);
var Vme = zme;
function zme(e) {
  var t = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
  t ? t(e) : setTimeout(e, 0);
}
var oh = Vme, bb = Bme;
function Bme(e) {
  var t = !1;
  return oh(function() {
    t = !0;
  }), function(r, o) {
    t ? e(r, o) : oh(function() {
      e(r, o);
    });
  };
}
var wb = Gme;
function Gme(e) {
  Object.keys(e.jobs).forEach(Hme.bind(e)), e.jobs = {};
}
function Hme(e) {
  typeof this.jobs[e] == "function" && this.jobs[e]();
}
var sh = bb, Xme = wb, xb = Kme;
function Kme(e, t, n, r) {
  var o = n.keyedList ? n.keyedList[n.index] : n.index;
  n.jobs[o] = Wme(t, o, e[o], function(s, i) {
    o in n.jobs && (delete n.jobs[o], s ? Xme(n) : n.results[o] = i, r(s, n.results));
  });
}
function Wme(e, t, n, r) {
  var o;
  return e.length == 2 ? o = e(n, sh(r)) : o = e(n, t, sh(r)), o;
}
var _b = Jme;
function Jme(e, t) {
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
var Yme = wb, Qme = bb, $b = Zme;
function Zme(e) {
  Object.keys(this.jobs).length && (this.index = this.size, Yme(this), Qme(e)(null, this.results));
}
var ehe = xb, the = _b, nhe = $b, rhe = ohe;
function ohe(e, t, n) {
  for (var r = the(e); r.index < (r.keyedList || e).length; )
    ehe(e, t, r, function(o, s) {
      if (o) {
        n(o, s);
        return;
      }
      if (Object.keys(r.jobs).length === 0) {
        n(null, r.results);
        return;
      }
    }), r.index++;
  return nhe.bind(r, n);
}
var _a = { exports: {} }, ih = xb, she = _b, ihe = $b;
_a.exports = ahe;
_a.exports.ascending = Eb;
_a.exports.descending = che;
function ahe(e, t, n, r) {
  var o = she(e, n);
  return ih(e, t, o, function s(i, a) {
    if (i) {
      r(i, a);
      return;
    }
    if (o.index++, o.index < (o.keyedList || e).length) {
      ih(e, t, o, s);
      return;
    }
    r(null, o.results);
  }), ihe.bind(o, r);
}
function Eb(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function che(e, t) {
  return -1 * Eb(e, t);
}
var Sb = _a.exports, lhe = Sb, uhe = phe;
function phe(e, t, n) {
  return lhe(e, t, null, n);
}
var dhe = {
  parallel: rhe,
  serial: uhe,
  serialOrdered: Sb
}, Tb = Object, fhe = Error, mhe = EvalError, hhe = RangeError, yhe = ReferenceError, ghe = SyntaxError, qc, ah;
function fd() {
  return ah || (ah = 1, qc = TypeError), qc;
}
var vhe = URIError, bhe = Math.abs, whe = Math.floor, xhe = Math.max, _he = Math.min, $he = Math.pow, Ehe = Math.round, She = Number.isNaN || function(t) {
  return t !== t;
}, The = She, Phe = function(t) {
  return The(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, Ohe = Object.getOwnPropertyDescriptor, vi = Ohe;
if (vi)
  try {
    vi([], "length");
  } catch {
    vi = null;
  }
var Pb = vi, bi = Object.defineProperty || !1;
if (bi)
  try {
    bi({}, "a", { value: 1 });
  } catch {
    bi = !1;
  }
var Nhe = bi, Fc, ch;
function Ob() {
  return ch || (ch = 1, Fc = function() {
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
  }), Fc;
}
var Mc, lh;
function Rhe() {
  if (lh) return Mc;
  lh = 1;
  var e = typeof Symbol < "u" && Symbol, t = Ob();
  return Mc = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Mc;
}
var Uc, uh;
function Nb() {
  return uh || (uh = 1, Uc = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Uc;
}
var Vc, ph;
function Rb() {
  if (ph) return Vc;
  ph = 1;
  var e = Tb;
  return Vc = e.getPrototypeOf || null, Vc;
}
var Ahe = "Function.prototype.bind called on incompatible ", Dhe = Object.prototype.toString, Ihe = Math.max, khe = "[object Function]", dh = function(t, n) {
  for (var r = [], o = 0; o < t.length; o += 1)
    r[o] = t[o];
  for (var s = 0; s < n.length; s += 1)
    r[s + t.length] = n[s];
  return r;
}, Che = function(t, n) {
  for (var r = [], o = n, s = 0; o < t.length; o += 1, s += 1)
    r[s] = t[o];
  return r;
}, jhe = function(e, t) {
  for (var n = "", r = 0; r < e.length; r += 1)
    n += e[r], r + 1 < e.length && (n += t);
  return n;
}, Lhe = function(t) {
  var n = this;
  if (typeof n != "function" || Dhe.apply(n) !== khe)
    throw new TypeError(Ahe + n);
  for (var r = Che(arguments, 1), o, s = function() {
    if (this instanceof o) {
      var l = n.apply(
        this,
        dh(r, arguments)
      );
      return Object(l) === l ? l : this;
    }
    return n.apply(
      t,
      dh(r, arguments)
    );
  }, i = Ihe(0, n.length - r.length), a = [], c = 0; c < i; c++)
    a[c] = "$" + c;
  if (o = Function("binder", "return function (" + jhe(a, ",") + "){ return binder.apply(this,arguments); }")(s), n.prototype) {
    var p = function() {
    };
    p.prototype = n.prototype, o.prototype = new p(), p.prototype = null;
  }
  return o;
}, qhe = Lhe, $a = Function.prototype.bind || qhe, zc, fh;
function md() {
  return fh || (fh = 1, zc = Function.prototype.call), zc;
}
var Bc, mh;
function Ab() {
  return mh || (mh = 1, Bc = Function.prototype.apply), Bc;
}
var Gc, hh;
function Fhe() {
  return hh || (hh = 1, Gc = typeof Reflect < "u" && Reflect && Reflect.apply), Gc;
}
var Hc, yh;
function Mhe() {
  if (yh) return Hc;
  yh = 1;
  var e = $a, t = Ab(), n = md(), r = Fhe();
  return Hc = r || e.call(n, t), Hc;
}
var Xc, gh;
function Uhe() {
  if (gh) return Xc;
  gh = 1;
  var e = $a, t = fd(), n = md(), r = Mhe();
  return Xc = function(s) {
    if (s.length < 1 || typeof s[0] != "function")
      throw new t("a function is required");
    return r(e, n, s);
  }, Xc;
}
var Kc, vh;
function Vhe() {
  if (vh) return Kc;
  vh = 1;
  var e = Uhe(), t = Pb, n;
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
  return Kc = r && typeof r.get == "function" ? e([r.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(a) {
      return s(a == null ? a : o(a));
    }
  ) : !1, Kc;
}
var Wc, bh;
function zhe() {
  if (bh) return Wc;
  bh = 1;
  var e = Nb(), t = Rb(), n = Vhe();
  return Wc = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, Wc;
}
var Bhe = Function.prototype.call, Ghe = Object.prototype.hasOwnProperty, Hhe = $a, hd = Hhe.call(Bhe, Ghe), he, Xhe = Tb, Khe = fhe, Whe = mhe, Jhe = hhe, Yhe = yhe, go = ghe, so = fd(), Qhe = vhe, Zhe = bhe, eye = whe, tye = xhe, nye = _he, rye = $he, oye = Ehe, sye = Phe, Db = Function, Jc = function(e) {
  try {
    return Db('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, ss = Pb, iye = Nhe, Yc = function() {
  throw new so();
}, aye = ss ? function() {
  try {
    return arguments.callee, Yc;
  } catch {
    try {
      return ss(arguments, "callee").get;
    } catch {
      return Yc;
    }
  }
}() : Yc, Gr = Rhe()(), Me = zhe(), cye = Rb(), lye = Nb(), Ib = Ab(), Ss = md(), Wr = {}, uye = typeof Uint8Array > "u" || !Me ? he : Me(Uint8Array), Or = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? he : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? he : ArrayBuffer,
  "%ArrayIteratorPrototype%": Gr && Me ? Me([][Symbol.iterator]()) : he,
  "%AsyncFromSyncIteratorPrototype%": he,
  "%AsyncFunction%": Wr,
  "%AsyncGenerator%": Wr,
  "%AsyncGeneratorFunction%": Wr,
  "%AsyncIteratorPrototype%": Wr,
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
  "%Error%": Khe,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Whe,
  "%Float16Array%": typeof Float16Array > "u" ? he : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? he : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? he : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? he : FinalizationRegistry,
  "%Function%": Db,
  "%GeneratorFunction%": Wr,
  "%Int8Array%": typeof Int8Array > "u" ? he : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? he : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? he : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Gr && Me ? Me(Me([][Symbol.iterator]())) : he,
  "%JSON%": typeof JSON == "object" ? JSON : he,
  "%Map%": typeof Map > "u" ? he : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Gr || !Me ? he : Me((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Xhe,
  "%Object.getOwnPropertyDescriptor%": ss,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? he : Promise,
  "%Proxy%": typeof Proxy > "u" ? he : Proxy,
  "%RangeError%": Jhe,
  "%ReferenceError%": Yhe,
  "%Reflect%": typeof Reflect > "u" ? he : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? he : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Gr || !Me ? he : Me((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? he : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Gr && Me ? Me(""[Symbol.iterator]()) : he,
  "%Symbol%": Gr ? Symbol : he,
  "%SyntaxError%": go,
  "%ThrowTypeError%": aye,
  "%TypedArray%": uye,
  "%TypeError%": so,
  "%Uint8Array%": typeof Uint8Array > "u" ? he : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? he : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? he : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? he : Uint32Array,
  "%URIError%": Qhe,
  "%WeakMap%": typeof WeakMap > "u" ? he : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? he : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? he : WeakSet,
  "%Function.prototype.call%": Ss,
  "%Function.prototype.apply%": Ib,
  "%Object.defineProperty%": iye,
  "%Object.getPrototypeOf%": cye,
  "%Math.abs%": Zhe,
  "%Math.floor%": eye,
  "%Math.max%": tye,
  "%Math.min%": nye,
  "%Math.pow%": rye,
  "%Math.round%": oye,
  "%Math.sign%": sye,
  "%Reflect.getPrototypeOf%": lye
};
if (Me)
  try {
    null.error;
  } catch (e) {
    var pye = Me(Me(e));
    Or["%Error.prototype%"] = pye;
  }
var dye = function e(t) {
  var n;
  if (t === "%AsyncFunction%")
    n = Jc("async function () {}");
  else if (t === "%GeneratorFunction%")
    n = Jc("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    n = Jc("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var r = e("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var o = e("%AsyncGenerator%");
    o && Me && (n = Me(o.prototype));
  }
  return Or[t] = n, n;
}, wh = {
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
}, Ts = $a, Mi = hd, fye = Ts.call(Ss, Array.prototype.concat), mye = Ts.call(Ib, Array.prototype.splice), xh = Ts.call(Ss, String.prototype.replace), Ui = Ts.call(Ss, String.prototype.slice), hye = Ts.call(Ss, RegExp.prototype.exec), yye = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, gye = /\\(\\)?/g, vye = function(t) {
  var n = Ui(t, 0, 1), r = Ui(t, -1);
  if (n === "%" && r !== "%")
    throw new go("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new go("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return xh(t, yye, function(s, i, a, c) {
    o[o.length] = a ? xh(c, gye, "$1") : i || s;
  }), o;
}, bye = function(t, n) {
  var r = t, o;
  if (Mi(wh, r) && (o = wh[r], r = "%" + o[0] + "%"), Mi(Or, r)) {
    var s = Or[r];
    if (s === Wr && (s = dye(r)), typeof s > "u" && !n)
      throw new so("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: s
    };
  }
  throw new go("intrinsic " + t + " does not exist!");
}, wye = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new so("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new so('"allowMissing" argument must be a boolean');
  if (hye(/^%?[^%]*%?$/, t) === null)
    throw new go("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = vye(t), o = r.length > 0 ? r[0] : "", s = bye("%" + o + "%", n), i = s.name, a = s.value, c = !1, p = s.alias;
  p && (o = p[0], mye(r, fye([0, 1], p)));
  for (var l = 1, u = !0; l < r.length; l += 1) {
    var d = r[l], m = Ui(d, 0, 1), f = Ui(d, -1);
    if ((m === '"' || m === "'" || m === "`" || f === '"' || f === "'" || f === "`") && m !== f)
      throw new go("property names with quotes must have matching quotes");
    if ((d === "constructor" || !u) && (c = !0), o += "." + d, i = "%" + o + "%", Mi(Or, i))
      a = Or[i];
    else if (a != null) {
      if (!(d in a)) {
        if (!n)
          throw new so("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (ss && l + 1 >= r.length) {
        var g = ss(a, d);
        u = !!g, u && "get" in g && !("originalValue" in g.get) ? a = g.get : a = a[d];
      } else
        u = Mi(a, d), a = a[d];
      u && !c && (Or[i] = a);
    }
  }
  return a;
}, Qc, _h;
function xye() {
  if (_h) return Qc;
  _h = 1;
  var e = Ob();
  return Qc = function() {
    return e() && !!Symbol.toStringTag;
  }, Qc;
}
var _ye = wye, $h = _ye("%Object.defineProperty%", !0), $ye = xye()(), Eye = hd, Sye = fd(), Zs = $ye ? Symbol.toStringTag : null, Tye = function(t, n) {
  var r = arguments.length > 2 && !!arguments[2] && arguments[2].force, o = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
  if (typeof r < "u" && typeof r != "boolean" || typeof o < "u" && typeof o != "boolean")
    throw new Sye("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
  Zs && (r || !Eye(t, Zs)) && ($h ? $h(t, Zs, {
    configurable: !o,
    enumerable: !1,
    value: n,
    writable: !1
  }) : t[Zs] = n);
}, Pye = function(e, t) {
  return Object.keys(t).forEach(function(n) {
    e[n] = e[n] || t[n];
  }), e;
}, yd = Fme, Oye = tr, Zc = Pe, Nye = Xi, Rye = Ki, Aye = ms.parse, Dye = Wl, Iye = lt.Stream, kye = $y, el = vb, Cye = dhe, jye = Tye, er = hd, Cl = Pye;
function ve(e) {
  if (!(this instanceof ve))
    return new ve(e);
  this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], yd.call(this), e = e || {};
  for (var t in e)
    this[t] = e[t];
}
Oye.inherits(ve, yd);
ve.LINE_BREAK = `\r
`;
ve.DEFAULT_CONTENT_TYPE = "application/octet-stream";
ve.prototype.append = function(e, t, n) {
  n = n || {}, typeof n == "string" && (n = { filename: n });
  var r = yd.prototype.append.bind(this);
  if ((typeof t == "number" || t == null) && (t = String(t)), Array.isArray(t)) {
    this._error(new Error("Arrays are not supported."));
    return;
  }
  var o = this._multiPartHeader(e, t, n), s = this._multiPartFooter();
  r(o), r(t), r(s), this._trackLength(o, t, n);
};
ve.prototype._trackLength = function(e, t, n) {
  var r = 0;
  n.knownLength != null ? r += Number(n.knownLength) : Buffer.isBuffer(t) ? r = t.length : typeof t == "string" && (r = Buffer.byteLength(t)), this._valueLength += r, this._overheadLength += Buffer.byteLength(e) + ve.LINE_BREAK.length, !(!t || !t.path && !(t.readable && er(t, "httpVersion")) && !(t instanceof Iye)) && (n.knownLength || this._valuesToMeasure.push(t));
};
ve.prototype._lengthRetriever = function(e, t) {
  er(e, "fd") ? e.end != null && e.end != 1 / 0 && e.start != null ? t(null, e.end + 1 - (e.start ? e.start : 0)) : Dye.stat(e.path, function(n, r) {
    if (n) {
      t(n);
      return;
    }
    var o = r.size - (e.start ? e.start : 0);
    t(null, o);
  }) : er(e, "httpVersion") ? t(null, Number(e.headers["content-length"])) : er(e, "httpModule") ? (e.on("response", function(n) {
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
  typeof n.header == "object" && Cl(i, n.header);
  var a;
  for (var c in i)
    if (er(i, c)) {
      if (a = i[c], a == null)
        continue;
      Array.isArray(a) || (a = [a]), a.length && (s += c + ": " + a.join("; ") + ve.LINE_BREAK);
    }
  return "--" + this.getBoundary() + ve.LINE_BREAK + s + ve.LINE_BREAK;
};
ve.prototype._getContentDisposition = function(e, t) {
  var n;
  if (typeof t.filepath == "string" ? n = Zc.normalize(t.filepath).replace(/\\/g, "/") : t.filename || e && (e.name || e.path) ? n = Zc.basename(t.filename || e && (e.name || e.path)) : e && e.readable && er(e, "httpVersion") && (n = Zc.basename(e.client._httpMessage.path || "")), n)
    return 'filename="' + n + '"';
};
ve.prototype._getContentType = function(e, t) {
  var n = t.contentType;
  return !n && e && e.name && (n = el.lookup(e.name)), !n && e && e.path && (n = el.lookup(e.path)), !n && e && e.readable && er(e, "httpVersion") && (n = e.headers["content-type"]), !n && (t.filepath || t.filename) && (n = el.lookup(t.filepath || t.filename)), !n && e && typeof e == "object" && (n = ve.DEFAULT_CONTENT_TYPE), n;
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
    er(e, t) && (n[t.toLowerCase()] = e[t]);
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
  this._boundary = "--------------------------" + kye.randomBytes(12).toString("hex");
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
  Cye.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, r) {
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
  return typeof e == "string" ? (e = Aye(e), r = Cl({
    port: e.port,
    path: e.pathname,
    host: e.hostname,
    protocol: e.protocol
  }, o)) : (r = Cl(e, o), r.port || (r.port = r.protocol === "https:" ? 443 : 80)), r.headers = this.getHeaders(e.headers), r.protocol === "https:" ? n = Rye.request(r) : n = Nye.request(r), this.getLength((function(s, i) {
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
jye(ve.prototype, "FormData");
var Lye = ve;
const kb = /* @__PURE__ */ nr(Lye);
function jl(e) {
  return L.isPlainObject(e) || L.isArray(e);
}
function Cb(e) {
  return L.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Eh(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Cb(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function qye(e) {
  return L.isArray(e) && !e.some(jl);
}
const Fye = L.toFlatObject(L, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ea(e, t, n) {
  if (!L.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (kb || FormData)(), n = L.toFlatObject(n, {
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
      else if (L.isArray(f) && qye(f) || (L.isFileList(f) || L.endsWith(g, "[]")) && (v = L.toArray(f)))
        return g = Cb(g), v.forEach(function(w, T) {
          !(L.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Eh([g], T, s) : i === null ? g : g + "[]",
            p(w)
          );
        }), !1;
    }
    return jl(f) ? !0 : (t.append(Eh(y, g, s), p(f)), !1);
  }
  const u = [], d = Object.assign(Fye, {
    defaultVisitor: l,
    convertValue: p,
    isVisitable: jl
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
function Sh(e) {
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
function jb(e, t) {
  this._pairs = [], e && Ea(e, this, t);
}
const Lb = jb.prototype;
Lb.append = function(t, n) {
  this._pairs.push([t, n]);
};
Lb.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Sh);
  } : Sh;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Mye(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function gd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Mye, o = L.isFunction(n) ? {
    serialize: n
  } : n, s = o && o.serialize;
  let i;
  if (s ? i = s(t, o) : i = L.isURLSearchParams(t) ? t.toString() : new jb(t, o).toString(r), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Th {
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
const Sa = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Uye = ms.URLSearchParams, tl = "abcdefghijklmnopqrstuvwxyz", Ph = "0123456789", qb = {
  DIGIT: Ph,
  ALPHA: tl,
  ALPHA_DIGIT: tl + tl.toUpperCase() + Ph
}, Vye = (e = 16, t = qb.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t, o = new Uint32Array(e);
  $y.randomFillSync(o);
  for (let s = 0; s < e; s++)
    n += t[o[s] % r];
  return n;
}, zye = {
  isNode: !0,
  classes: {
    URLSearchParams: Uye,
    FormData: kb,
    Blob: typeof Blob < "u" && Blob || null
  },
  ALPHABET: qb,
  generateString: Vye,
  protocols: ["http", "https", "file", "data"]
}, vd = typeof window < "u" && typeof document < "u", Ll = typeof navigator == "object" && navigator || void 0, Bye = vd && (!Ll || ["ReactNative", "NativeScript", "NS"].indexOf(Ll.product) < 0), Gye = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Hye = vd && window.location.href || "http://localhost", Xye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: vd,
  hasStandardBrowserEnv: Bye,
  hasStandardBrowserWebWorkerEnv: Gye,
  navigator: Ll,
  origin: Hye
}, Symbol.toStringTag, { value: "Module" })), Re = {
  ...Xye,
  ...zye
};
function Kye(e, t) {
  return Ea(e, new Re.classes.URLSearchParams(), {
    visitor: function(n, r, o, s) {
      return Re.isNode && L.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Wye(e) {
  return L.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Jye(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Fb(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), c = s >= n.length;
    return i = !i && L.isArray(o) ? o.length : i, c ? (L.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !L.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && L.isArray(o[i]) && (o[i] = Jye(o[i])), !a);
  }
  if (L.isFormData(e) && L.isFunction(e.entries)) {
    const n = {};
    return L.forEachEntry(e, (r, o) => {
      t(Wye(r), o, n, 0);
    }), n;
  }
  return null;
}
function Yye(e, t, n) {
  if (L.isString(e))
    try {
      return (t || JSON.parse)(e), L.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ps = {
  transitional: Sa,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = L.isObject(t);
    if (s && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t))
      return o ? JSON.stringify(Fb(t)) : t;
    if (L.isArrayBuffer(t) || L.isBuffer(t) || L.isStream(t) || L.isFile(t) || L.isBlob(t) || L.isReadableStream(t))
      return t;
    if (L.isArrayBufferView(t))
      return t.buffer;
    if (L.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Kye(t, this.formSerializer).toString();
      if ((a = L.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Ea(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), Yye(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ps.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
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
    FormData: Re.classes.FormData,
    Blob: Re.classes.Blob
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
  Ps.headers[e] = {};
});
const Qye = L.toObjectSet([
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
]), Zye = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && Qye[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Oh = Symbol("internals");
function Uo(e) {
  return e && String(e).trim().toLowerCase();
}
function wi(e) {
  return e === !1 || e == null ? e : L.isArray(e) ? e.map(wi) : String(e);
}
function ege(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const tge = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function nl(e, t, n, r, o) {
  if (L.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!L.isString(t)) {
    if (L.isString(r))
      return t.indexOf(r) !== -1;
    if (L.isRegExp(r))
      return r.test(t);
  }
}
function nge(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function rge(e, t) {
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
      const l = Uo(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const u = L.findKey(o, l);
      (!u || o[u] === void 0 || p === !0 || p === void 0 && o[u] !== !1) && (o[u || c] = wi(a));
    }
    const i = (a, c) => L.forEach(a, (p, l) => s(p, l, c));
    if (L.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (L.isString(t) && (t = t.trim()) && !tge(t))
      i(Zye(t), n);
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
    if (t = Uo(t), t) {
      const r = L.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return ege(o);
        if (L.isFunction(n))
          return n.call(this, o, r);
        if (L.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Uo(t), t) {
      const r = L.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || nl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = Uo(i), i) {
        const a = L.findKey(r, i);
        a && (!n || nl(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return L.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || nl(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return L.forEach(this, (o, s) => {
      const i = L.findKey(r, s);
      if (i) {
        n[i] = wi(o), delete n[s];
        return;
      }
      const a = t ? nge(s) : String(s).trim();
      a !== s && delete n[s], n[a] = wi(o), r[a] = !0;
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
    const r = (this[Oh] = this[Oh] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = Uo(i);
      r[a] || (rge(o, i), r[a] = !0);
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
function rl(e, t) {
  const n = this || Ps, r = t || n, o = Qe.from(r.headers);
  let s = r.data;
  return L.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Mb(e) {
  return !!(e && e.__CANCEL__);
}
let jr = class extends W {
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
function Zr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new W(
    "Request failed with status code " + n.status,
    [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function oge(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function sge(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function bd(e, t, n) {
  let r = !oge(t);
  return e && (r || n == !1) ? sge(e, t) : t;
}
var Ub = {}, ige = ms.parse, age = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}, cge = String.prototype.endsWith || function(e) {
  return e.length <= this.length && this.indexOf(e, this.length - e.length) !== -1;
};
function lge(e) {
  var t = typeof e == "string" ? ige(e) : e || {}, n = t.protocol, r = t.host, o = t.port;
  if (typeof r != "string" || !r || typeof n != "string" || (n = n.split(":", 1)[0], r = r.replace(/:\d*$/, ""), o = parseInt(o) || age[n] || 0, !uge(r, o)))
    return "";
  var s = eo("npm_config_" + n + "_proxy") || eo(n + "_proxy") || eo("npm_config_proxy") || eo("all_proxy");
  return s && s.indexOf("://") === -1 && (s = n + "://" + s), s;
}
function uge(e, t) {
  var n = (eo("npm_config_no_proxy") || eo("no_proxy")).toLowerCase();
  return n ? n === "*" ? !1 : n.split(/[,\s]/).every(function(r) {
    if (!r)
      return !0;
    var o = r.match(/^(.+):(\d+)$/), s = o ? o[1] : r, i = o ? parseInt(o[2]) : 0;
    return i && i !== t ? !0 : /^[.*]/.test(s) ? (s.charAt(0) === "*" && (s = s.slice(1)), !cge.call(e, s)) : e !== s;
  }) : !0;
}
function eo(e) {
  return process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || "";
}
Ub.getProxyForUrl = lge;
var wd = { exports: {} }, ei = { exports: {} }, ti = { exports: {} }, ol, Nh;
function pge() {
  if (Nh) return ol;
  Nh = 1;
  var e = 1e3, t = e * 60, n = t * 60, r = n * 24, o = r * 7, s = r * 365.25;
  ol = function(l, u) {
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
  return ol;
}
var sl, Rh;
function Vb() {
  if (Rh) return sl;
  Rh = 1;
  function e(t) {
    r.debug = r, r.default = r, r.coerce = p, r.disable = a, r.enable = s, r.enabled = c, r.humanize = pge(), r.destroy = l, Object.keys(t).forEach((u) => {
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
        let O = 0;
        v[0] = v[0].replace(/%([a-zA-Z%])/g, (B, k) => {
          if (B === "%%")
            return "%";
          O++;
          const E = r.formatters[k];
          if (typeof E == "function") {
            const q = v[O];
            B = E.call(b, q), v.splice(O, 1), O--;
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
  return sl = e, sl;
}
var Ah;
function dge() {
  return Ah || (Ah = 1, function(e, t) {
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
    e.exports = Vb()(t);
    const { formatters: a } = e.exports;
    a.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (p) {
        return "[UnexpectedJSONParseError]: " + p.message;
      }
    };
  }(ti, ti.exports)), ti.exports;
}
var ni = { exports: {} }, il, Dh;
function fge() {
  return Dh || (Dh = 1, il = (e, t = process.argv) => {
    const n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", r = t.indexOf(n + e), o = t.indexOf("--");
    return r !== -1 && (o === -1 || r < o);
  }), il;
}
var al, Ih;
function mge() {
  if (Ih) return al;
  Ih = 1;
  const e = n0, t = Ty, n = fge(), { env: r } = process;
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
  return al = {
    supportsColor: a,
    stdout: s(i(!0, t.isatty(1))),
    stderr: s(i(!0, t.isatty(2)))
  }, al;
}
var kh;
function hge() {
  return kh || (kh = 1, function(e, t) {
    const n = Ty, r = tr;
    t.init = l, t.log = a, t.formatArgs = s, t.save = c, t.load = p, t.useColors = o, t.destroy = r.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), t.colors = [6, 2, 3, 4, 5, 1];
    try {
      const d = mge();
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
    e.exports = Vb()(t);
    const { formatters: u } = e.exports;
    u.o = function(d) {
      return this.inspectOpts.colors = this.useColors, r.inspect(d, this.inspectOpts).split(`
`).map((m) => m.trim()).join(" ");
    }, u.O = function(d) {
      return this.inspectOpts.colors = this.useColors, r.inspect(d, this.inspectOpts);
    };
  }(ni, ni.exports)), ni.exports;
}
var Ch;
function yge() {
  return Ch || (Ch = 1, typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? ei.exports = dge() : ei.exports = hge()), ei.exports;
}
var Vo, gge = function() {
  if (!Vo) {
    try {
      Vo = yge()("follow-redirects");
    } catch {
    }
    typeof Vo != "function" && (Vo = function() {
    });
  }
  Vo.apply(null, arguments);
}, Os = ms, is = Os.URL, vge = Xi, bge = Ki, xd = lt.Writable, _d = Sy, zb = gge;
(function() {
  var t = typeof process < "u", n = typeof window < "u" && typeof document < "u", r = Lr(Error.captureStackTrace);
  !t && (n || !r) && console.warn("The follow-redirects package should be excluded from browser builds.");
})();
var $d = !1;
try {
  _d(new is(""));
} catch (e) {
  $d = e.code === "ERR_INVALID_URL";
}
var wge = [
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
], Ed = ["abort", "aborted", "connect", "error", "socket", "timeout"], Sd = /* @__PURE__ */ Object.create(null);
Ed.forEach(function(e) {
  Sd[e] = function(t, n, r) {
    this._redirectable.emit(e, t, n, r);
  };
});
var ql = Ns(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
), Fl = Ns(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
), xge = Ns(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  Fl
), _ge = Ns(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
), $ge = Ns(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
), Ege = xd.prototype.destroy || Gb;
function _t(e, t) {
  xd.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
  var n = this;
  this._onNativeResponse = function(r) {
    try {
      n._processResponse(r);
    } catch (o) {
      n.emit("error", o instanceof Fl ? o : new Fl({ cause: o }));
    }
  }, this._performRequest();
}
_t.prototype = Object.create(xd.prototype);
_t.prototype.abort = function() {
  Pd(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
};
_t.prototype.destroy = function(e) {
  return Pd(this._currentRequest, e), Ege.call(this, e), this;
};
_t.prototype.write = function(e, t, n) {
  if (this._ending)
    throw new $ge();
  if (!Nr(e) && !Pge(e))
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  if (Lr(t) && (n = t, t = null), e.length === 0) {
    n && n();
    return;
  }
  this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({ data: e, encoding: t }), this._currentRequest.write(e, t, n)) : (this.emit("error", new _ge()), this.abort());
};
_t.prototype.end = function(e, t, n) {
  if (Lr(e) ? (n = e, e = t = null) : Lr(t) && (n = t, t = null), !e)
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
  for (var o of Ed)
    r.on(o, Sd[o]);
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
  if (Pd(this._currentRequest), e.destroy(), ++this._redirectCount > this._options.maxRedirects)
    throw new xge();
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
  t === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], cl(/^content-/i, this._options.headers));
  var i = cl(/^host$/i, this._options.headers), a = Td(this._currentUrl), c = i || a.host, p = /^\w+:/.test(n) ? this._currentUrl : Os.format(Object.assign(a, { host: c })), l = Sge(n, p);
  if (zb("redirecting to", l.href), this._isRedirect = !0, Ml(l, this._options), (l.protocol !== a.protocol && l.protocol !== "https:" || l.host !== c && !Tge(l.host, c)) && cl(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers), Lr(o)) {
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
function Bb(e) {
  var t = {
    maxRedirects: 21,
    maxBodyLength: 10485760
  }, n = {};
  return Object.keys(e).forEach(function(r) {
    var o = r + ":", s = n[o] = e[r], i = t[r] = Object.create(s);
    function a(p, l, u) {
      return Oge(p) ? p = Ml(p) : Nr(p) ? p = Ml(Td(p)) : (u = l, l = Hb(p), p = { protocol: o }), Lr(l) && (u = l, l = null), l = Object.assign({
        maxRedirects: t.maxRedirects,
        maxBodyLength: t.maxBodyLength
      }, p, l), l.nativeProtocols = n, !Nr(l.host) && !Nr(l.hostname) && (l.hostname = "::1"), _d.equal(l.protocol, o, "protocol mismatch"), zb("options", l), new _t(l, u);
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
function Gb() {
}
function Td(e) {
  var t;
  if ($d)
    t = new is(e);
  else if (t = Hb(Os.parse(e)), !Nr(t.protocol))
    throw new ql({ input: e });
  return t;
}
function Sge(e, t) {
  return $d ? new is(e, t) : Td(Os.resolve(t, e));
}
function Hb(e) {
  if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname))
    throw new ql({ input: e.href || e });
  if (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host))
    throw new ql({ input: e.href || e });
  return e;
}
function Ml(e, t) {
  var n = t || {};
  for (var r of wge)
    n[r] = e[r];
  return n.hostname.startsWith("[") && (n.hostname = n.hostname.slice(1, -1)), n.port !== "" && (n.port = Number(n.port)), n.path = n.search ? n.pathname + n.search : n.pathname, n;
}
function cl(e, t) {
  var n;
  for (var r in t)
    e.test(r) && (n = t[r], delete t[r]);
  return n === null || typeof n > "u" ? void 0 : String(n).trim();
}
function Ns(e, t, n) {
  function r(o) {
    Lr(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, o || {}), this.code = e, this.message = this.cause ? t + ": " + this.cause.message : t;
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
function Pd(e, t) {
  for (var n of Ed)
    e.removeListener(n, Sd[n]);
  e.on("error", Gb), e.destroy(t);
}
function Tge(e, t) {
  _d(Nr(e) && Nr(t));
  var n = e.length - t.length - 1;
  return n > 0 && e[n] === "." && e.endsWith(t);
}
function Nr(e) {
  return typeof e == "string" || e instanceof String;
}
function Lr(e) {
  return typeof e == "function";
}
function Pge(e) {
  return typeof e == "object" && "length" in e;
}
function Oge(e) {
  return is && e instanceof is;
}
wd.exports = Bb({ http: vge, https: bge });
wd.exports.wrap = Bb;
var Nge = wd.exports;
const Rge = /* @__PURE__ */ nr(Nge), Vi = "1.13.5";
function Xb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
const Age = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function Dge(e, t, n) {
  const r = n && n.Blob || Re.classes.Blob, o = Xb(e);
  if (t === void 0 && r && (t = !0), o === "data") {
    e = o.length ? e.slice(o.length + 1) : e;
    const s = Age.exec(e);
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
const ll = Symbol("internals");
class jh extends lt.Transform {
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
    const n = this[ll] = {
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
    const n = this[ll];
    return n.onReadCallback && n.onReadCallback(), super._read(t);
  }
  _transform(t, n, r) {
    const o = this[ll], s = o.maxRate, i = this.readableHighWaterMark, a = o.timeWindow, c = 1e3 / a, p = s / c, l = o.minChunkSize !== !1 ? Math.max(o.minChunkSize, p * 0.01) : 0, u = (m, f) => {
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
const { asyncIterator: Lh } = Symbol, Kb = async function* (e) {
  e.stream ? yield* e.stream() : e.arrayBuffer ? yield await e.arrayBuffer() : e[Lh] ? yield* e[Lh]() : yield e;
}, Ige = Re.ALPHABET.ALPHA_DIGIT + "-_", as = typeof TextEncoder == "function" ? new TextEncoder() : new tr.TextEncoder(), xr = `\r
`, kge = as.encode(xr), Cge = 2;
class jge {
  constructor(t, n) {
    const { escapeName: r } = this.constructor, o = L.isString(n);
    let s = `Content-Disposition: form-data; name="${r(t)}"${!o && n.name ? `; filename="${r(n.name)}"` : ""}${xr}`;
    o ? n = as.encode(String(n).replace(/\r?\n|\r\n?/g, xr)) : s += `Content-Type: ${n.type || "application/octet-stream"}${xr}`, this.headers = as.encode(s + xr), this.contentLength = o ? n.byteLength : n.size, this.size = this.headers.byteLength + this.contentLength + Cge, this.name = t, this.value = n;
  }
  async *encode() {
    yield this.headers;
    const { value: t } = this;
    L.isTypedArray(t) ? yield t : yield* Kb(t), yield kge;
  }
  static escapeName(t) {
    return String(t).replace(/[\r\n"]/g, (n) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[n]);
  }
}
const Lge = (e, t, n) => {
  const {
    tag: r = "form-data-boundary",
    size: o = 25,
    boundary: s = r + "-" + Re.generateString(o, Ige)
  } = n || {};
  if (!L.isFormData(e))
    throw TypeError("FormData instance required");
  if (s.length < 1 || s.length > 70)
    throw Error("boundary must be 10-70 characters long");
  const i = as.encode("--" + s + xr), a = as.encode("--" + s + "--" + xr);
  let c = a.byteLength;
  const p = Array.from(e.entries()).map(([u, d]) => {
    const m = new jge(u, d);
    return c += m.size, m;
  });
  c += i.byteLength * p.length, c = L.toFiniteNumber(c);
  const l = {
    "Content-Type": `multipart/form-data; boundary=${s}`
  };
  return Number.isFinite(c) && (l["Content-Length"] = c), t && t(l), t0.from(async function* () {
    for (const u of p)
      yield i, yield* u.encode();
    yield a;
  }());
};
class qge extends lt.Transform {
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
const Fge = (e, t) => L.isAsyncFn(e) ? function(...n) {
  const r = n.pop();
  e.apply(this, n).then((o) => {
    try {
      t ? r(null, ...t(o)) : r(null, o);
    } catch (s) {
      r(s);
    }
  }, r);
} : e;
function Mge(e, t) {
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
function Uge(e, t) {
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
const vo = (e, t, n = 3) => {
  let r = 0;
  const o = Mge(50, 250);
  return Uge((s) => {
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
}, zi = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Bi = (e) => (...t) => L.asap(() => e(...t));
function Vge(e) {
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
const qh = {
  flush: Yn.constants.Z_SYNC_FLUSH,
  finishFlush: Yn.constants.Z_SYNC_FLUSH
}, zge = {
  flush: Yn.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: Yn.constants.BROTLI_OPERATION_FLUSH
}, Fh = L.isFunction(Yn.createBrotliDecompress), { http: Bge, https: Gge } = Rge, Hge = /https:?/, Mh = Re.protocols.map((e) => e + ":"), Uh = (e, [t, n]) => (e.on("end", n).on("error", n), t);
class Xge {
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
        if (!d.destroyed && !d.closed && tr.isDeepStrictEqual(m, n))
          return d;
      }
    }
    const o = Ey.connect(t, n);
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
const Kge = new Xge();
function Wge(e, t) {
  e.beforeRedirects.proxy && e.beforeRedirects.proxy(e), e.beforeRedirects.config && e.beforeRedirects.config(e, t);
}
function Wb(e, t, n) {
  let r = t;
  if (!r && r !== !1) {
    const o = Ub.getProxyForUrl(n);
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
    Wb(s, t, s.href);
  };
}
const Jge = typeof process < "u" && L.kindOf(process) === "process", Yge = (e) => new Promise((t, n) => {
  let r, o;
  const s = (c, p) => {
    o || (o = !0, r && r(c, p));
  }, i = (c) => {
    s(c), t(c);
  }, a = (c) => {
    s(c, !0), n(c);
  };
  e(i, a, (c) => r = c).catch(a);
}), Qge = ({ address: e, family: t }) => {
  if (!L.isString(e))
    throw TypeError("address must be a string");
  return {
    address: e,
    family: t || (e.indexOf(".") < 0 ? 6 : 4)
  };
}, Vh = (e, t) => Qge(L.isObject(e) ? e : { address: e, family: t }), Zge = {
  request(e, t) {
    const n = e.protocol + "//" + e.hostname + ":" + (e.port || (e.protocol === "https:" ? 443 : 80)), { http2Options: r, headers: o } = e, s = Kge.getSession(n, r), {
      HTTP2_HEADER_SCHEME: i,
      HTTP2_HEADER_METHOD: a,
      HTTP2_HEADER_PATH: c,
      HTTP2_HEADER_STATUS: p
    } = Ey.constants, l = {
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
}, eve = Jge && function(t) {
  return Yge(async function(r, o, s) {
    let { data: i, lookup: a, family: c, httpVersion: p = 1, http2Options: l } = t;
    const { responseType: u, responseEncoding: d } = t, m = t.method.toUpperCase();
    let f, g = !1, y;
    if (p = +p, Number.isNaN(p))
      throw TypeError(`Invalid protocol version: '${t.httpVersion}' is not a number`);
    if (p !== 1 && p !== 2)
      throw TypeError(`Unsupported protocol version '${p}'`);
    const v = p === 2;
    if (a) {
      const D = Fge(a, (S) => L.isArray(S) ? S : [S]);
      a = (S, N, P) => {
        D(S, N, (h, _, A) => {
          if (h)
            return P(h);
          const $ = L.isArray(_) ? _.map((x) => Vh(x)) : [Vh(_, A)];
          N.all ? P(h, $) : P(h, $[0].address, $[0].family);
        });
      };
    }
    const b = new Zw();
    function w(D) {
      try {
        b.emit("abort", !D || D.type ? new jr(null, t, y) : D);
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
        const P = lt.finished(N, () => {
          P(), T();
        });
      } else
        T();
    });
    const O = bd(t.baseURL, t.url, t.allowAbsoluteUrls), C = new URL(O, Re.hasBrowserEnv ? Re.origin : void 0), B = C.protocol || Mh[0];
    if (B === "data:") {
      if (t.maxContentLength > -1) {
        const S = String(t.url || O || "");
        if (Vge(S) > t.maxContentLength)
          return o(new W(
            "maxContentLength size of " + t.maxContentLength + " exceeded",
            W.ERR_BAD_RESPONSE,
            t
          ));
      }
      let D;
      if (m !== "GET")
        return Zr(r, o, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: t
        });
      try {
        D = Dge(t.url, u === "blob", {
          Blob: t.env && t.env.Blob
        });
      } catch (S) {
        throw W.from(S, W.ERR_BAD_REQUEST, t);
      }
      return u === "text" ? (D = D.toString(d), (!d || d === "utf8") && (D = L.stripBOM(D))) : u === "stream" && (D = lt.Readable.from(D)), Zr(r, o, {
        data: D,
        status: 200,
        statusText: "OK",
        headers: new Qe(),
        config: t
      });
    }
    if (Mh.indexOf(B) === -1)
      return o(new W(
        "Unsupported protocol " + B,
        W.ERR_BAD_REQUEST,
        t
      ));
    const k = Qe.from(t.headers).normalize();
    k.set("User-Agent", "axios/" + Vi, !1);
    const { onUploadProgress: E, onDownloadProgress: q } = t, I = t.maxRate;
    let z, H;
    if (L.isSpecCompliantForm(i)) {
      const D = k.getContentType(/boundary=([-_\w\d]{10,70})/i);
      i = Lge(i, (S) => {
        k.set(S);
      }, {
        tag: `axios-${Vi}-boundary`,
        boundary: D && D[1] || void 0
      });
    } else if (L.isFormData(i) && L.isFunction(i.getHeaders)) {
      if (k.set(i.getHeaders()), !k.hasContentLength())
        try {
          const D = await tr.promisify(i.getLength).call(i);
          Number.isFinite(D) && D >= 0 && k.setContentLength(D);
        } catch {
        }
    } else if (L.isBlob(i) || L.isFile(i))
      i.size && k.setContentType(i.type || "application/octet-stream"), k.setContentLength(i.size || 0), i = lt.Readable.from(Kb(i));
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
    L.isArray(I) ? (z = I[0], H = I[1]) : z = H = I, i && (E || z) && (L.isStream(i) || (i = lt.Readable.from(i, { objectMode: !1 })), i = lt.pipeline([i, new jh({
      maxRate: L.toFiniteNumber(z)
    })], L.noop), E && i.on("progress", Uh(
      i,
      zi(
        F,
        vo(Bi(E), !1, 3)
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
      G = gd(
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
      "gzip, compress, deflate" + (Fh ? ", br" : ""),
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
      beforeRedirect: Wge,
      beforeRedirects: {},
      http2Options: l
    };
    !L.isUndefined(a) && (V.lookup = a), t.socketPath ? V.socketPath = t.socketPath : (V.hostname = C.hostname.startsWith("[") ? C.hostname.slice(1, -1) : C.hostname, V.port = C.port, Wb(V, t.proxy, B + "//" + C.hostname + (C.port ? ":" + C.port : "") + V.path));
    let K;
    const X = Hge.test(V.protocol);
    if (V.agent = X ? t.httpsAgent : t.httpAgent, v ? K = Zge : t.transport ? K = t.transport : t.maxRedirects === 0 ? K = X ? Ki : Xi : (t.maxRedirects && (V.maxRedirects = t.maxRedirects), t.beforeRedirect && (V.beforeRedirects.config = t.beforeRedirect), K = X ? Gge : Bge), t.maxBodyLength > -1 ? V.maxBodyLength = t.maxBodyLength : V.maxBodyLength = 1 / 0, t.insecureHTTPParser && (V.insecureHTTPParser = t.insecureHTTPParser), y = K.request(V, function(S) {
      if (y.destroyed) return;
      const N = [S], P = L.toFiniteNumber(S.headers["content-length"]);
      if (q || H) {
        const $ = new jh({
          maxRate: L.toFiniteNumber(H)
        });
        q && $.on("progress", Uh(
          $,
          zi(
            P,
            vo(Bi(q), !0, 3)
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
            N.push(Yn.createUnzip(qh)), delete S.headers["content-encoding"];
            break;
          case "deflate":
            N.push(new qge()), N.push(Yn.createUnzip(qh)), delete S.headers["content-encoding"];
            break;
          case "br":
            Fh && (N.push(Yn.createBrotliDecompress(zge)), delete S.headers["content-encoding"]);
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
        A.data = h, Zr(r, o, A);
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
          Zr(r, o, A);
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
        const P = t.transitional || Sa;
        t.timeoutErrorMessage && (N = t.timeoutErrorMessage), w(new W(
          N,
          P.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
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
        !D && !S && w(new jr("Request stream has been aborted", t, y));
      }), i.pipe(y);
    } else
      i && y.write(i), y.end();
  });
}, tve = Re.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Re.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Re.origin),
  Re.navigator && /(msie|trident)/i.test(Re.navigator.userAgent)
) : () => !0, nve = Re.hasStandardBrowserEnv ? (
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
), zh = (e) => e instanceof Qe ? { ...e } : e;
function qr(e, t) {
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
    headers: (p, l, u) => o(zh(p), zh(l), u, !0)
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
const Jb = (e) => {
  const t = qr({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  if (t.headers = i = Qe.from(i), t.url = gd(bd(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), L.isFormData(n)) {
    if (Re.hasStandardBrowserEnv || Re.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (L.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), p = ["content-type", "content-length"];
      Object.entries(c).forEach(([l, u]) => {
        p.includes(l.toLowerCase()) && i.set(l, u);
      });
    }
  }
  if (Re.hasStandardBrowserEnv && (r && L.isFunction(r) && (r = r(t)), r || r !== !1 && tve(t.url))) {
    const c = o && s && nve.read(s);
    c && i.set(o, c);
  }
  return t;
}, rve = typeof XMLHttpRequest < "u", ove = rve && function(e) {
  return new Promise(function(n, r) {
    const o = Jb(e);
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
      ), O = {
        data: !a || a === "text" || a === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: w,
        config: e,
        request: y
      };
      Zr(function(B) {
        n(B), g();
      }, function(B) {
        r(B), g();
      }, O), y = null;
    }
    "onloadend" in y ? y.onloadend = v : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, y.onabort = function() {
      y && (r(new W("Request aborted", W.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(T) {
      const O = T && T.message ? T.message : "Network Error", C = new W(O, W.ERR_NETWORK, e, y);
      C.event = T || null, r(C), y = null;
    }, y.ontimeout = function() {
      let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const O = o.transitional || Sa;
      o.timeoutErrorMessage && (T = o.timeoutErrorMessage), r(new W(
        T,
        O.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
        e,
        y
      )), y = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in y && L.forEach(i.toJSON(), function(T, O) {
      y.setRequestHeader(O, T);
    }), L.isUndefined(o.withCredentials) || (y.withCredentials = !!o.withCredentials), a && a !== "json" && (y.responseType = o.responseType), p && ([d, f] = vo(p, !0), y.addEventListener("progress", d)), c && y.upload && ([u, m] = vo(c), y.upload.addEventListener("progress", u), y.upload.addEventListener("loadend", m)), (o.cancelToken || o.signal) && (l = (w) => {
      y && (r(!w || w.type ? new jr(null, e, y) : w), y.abort(), y = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const b = Xb(o.url);
    if (b && Re.protocols.indexOf(b) === -1) {
      r(new W("Unsupported protocol " + b + ":", W.ERR_BAD_REQUEST, e));
      return;
    }
    y.send(s || null);
  });
}, sve = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const s = function(p) {
      if (!o) {
        o = !0, a();
        const l = p instanceof Error ? p : this.reason;
        r.abort(l instanceof W ? l : new jr(l instanceof Error ? l.message : l));
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
}, ive = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, ave = async function* (e, t) {
  for await (const n of cve(e))
    yield* ive(n, t);
}, cve = async function* (e) {
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
}, Bh = (e, t, n, r) => {
  const o = ave(e, t);
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
}, Gh = 64 * 1024, { isFunction: ri } = L, lve = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(L.global), {
  ReadableStream: Hh,
  TextEncoder: Xh
} = L.global, Kh = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, uve = (e) => {
  e = L.merge.call({
    skipUndefined: !0
  }, lve, e);
  const { fetch: t, Request: n, Response: r } = e, o = t ? ri(t) : typeof fetch == "function", s = ri(n), i = ri(r);
  if (!o)
    return !1;
  const a = o && ri(Hh), c = o && (typeof Xh == "function" ? /* @__PURE__ */ ((f) => (g) => f.encode(g))(new Xh()) : async (f) => new Uint8Array(await new n(f).arrayBuffer())), p = s && a && Kh(() => {
    let f = !1;
    const g = new n(Re.origin, {
      body: new Hh(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !g;
  }), l = i && a && Kh(() => L.isReadableStream(new r("").body)), u = {
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
      return (await new n(Re.origin, {
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
      onDownloadProgress: O,
      onUploadProgress: C,
      responseType: B,
      headers: k,
      withCredentials: E = "same-origin",
      fetchOptions: q
    } = Jb(f), I = t || fetch;
    B = B ? (B + "").toLowerCase() : "text";
    let z = sve([b, w && w.toAbortSignal()], T), H = null;
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
          const [P, h] = zi(
            U,
            vo(Bi(C))
          );
          v = Bh(S.body, Gh, P, h);
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
      if (l && (O || X && F)) {
        const S = {};
        ["status", "statusText", "headers"].forEach((_) => {
          S[_] = K[_];
        });
        const N = L.toFiniteNumber(K.headers.get("content-length")), [P, h] = O && zi(
          N,
          vo(Bi(O), !0)
        ) || [];
        K = new r(
          Bh(K.body, Gh, P, () => {
            h && h(), F && F();
          }),
          S
        );
      }
      B = B || "text";
      let D = await u[L.findKey(u, B) || "text"](K, f);
      return !X && F && F(), await new Promise((S, N) => {
        Zr(S, N, {
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
}, pve = /* @__PURE__ */ new Map(), Yb = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, s = [
    r,
    o,
    n
  ];
  let i = s.length, a = i, c, p, l = pve;
  for (; a--; )
    c = s[a], p = l.get(c), p === void 0 && l.set(c, p = a ? /* @__PURE__ */ new Map() : uve(t)), l = p;
  return p;
};
Yb();
const Od = {
  http: eve,
  xhr: ove,
  fetch: {
    get: Yb
  }
};
L.forEach(Od, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Wh = (e) => `- ${e}`, dve = (e) => L.isFunction(e) || e === null || e === !1;
function fve(e, t) {
  e = L.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const s = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (o = r, !dve(r) && (o = Od[(a = String(r)).toLowerCase()], o === void 0))
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
` + i.map(Wh).join(`
`) : " " + Wh(i[0]) : "as no adapter specified";
    throw new W(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Qb = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: fve,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Od
};
function ul(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new jr(null, e);
}
function Jh(e) {
  return ul(e), e.headers = Qe.from(e.headers), e.data = rl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Qb.getAdapter(e.adapter || Ps.adapter, e)(e).then(function(r) {
    return ul(e), r.data = rl.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Qe.from(r.headers), r;
  }, function(r) {
    return Mb(r) || (ul(e), r && r.response && (r.response.data = rl.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Qe.from(r.response.headers))), Promise.reject(r);
  });
}
const Ta = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ta[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Yh = {};
Ta.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + Vi + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new W(
        o(i, " has been removed" + (n ? " in " + n : "")),
        W.ERR_DEPRECATED
      );
    return n && !Yh[i] && (Yh[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
Ta.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function mve(e, t, n) {
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
const xi = {
  assertOptions: mve,
  validators: Ta
}, Pt = xi.validators;
let Rr = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Th(),
      response: new Th()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = qr(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && xi.assertOptions(r, {
      silentJSONParsing: Pt.transitional(Pt.boolean),
      forcedJSONParsing: Pt.transitional(Pt.boolean),
      clarifyTimeoutError: Pt.transitional(Pt.boolean),
      legacyInterceptorReqResOrdering: Pt.transitional(Pt.boolean)
    }, !1), o != null && (L.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : xi.assertOptions(o, {
      encode: Pt.function,
      serialize: Pt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), xi.assertOptions(n, {
      baseUrl: Pt.spelling("baseURL"),
      withXsrfToken: Pt.spelling("withXSRFToken")
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
      const y = n.transitional || Sa;
      y && y.legacyInterceptorReqResOrdering ? a.unshift(g.fulfilled, g.rejected) : a.push(g.fulfilled, g.rejected);
    });
    const p = [];
    this.interceptors.response.forEach(function(g) {
      p.push(g.fulfilled, g.rejected);
    });
    let l, u = 0, d;
    if (!c) {
      const f = [Jh.bind(this), void 0];
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
      l = Jh.call(this, m);
    } catch (f) {
      return Promise.reject(f);
    }
    for (u = 0, d = p.length; u < d; )
      l = l.then(p[u++], p[u++]);
    return l;
  }
  getUri(t) {
    t = qr(this.defaults, t);
    const n = bd(t.baseURL, t.url, t.allowAbsoluteUrls);
    return gd(n, t.params, t.paramsSerializer);
  }
};
L.forEach(["delete", "get", "head", "options"], function(t) {
  Rr.prototype[t] = function(n, r) {
    return this.request(qr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
L.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, a) {
      return this.request(qr(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Rr.prototype[t] = n(), Rr.prototype[t + "Form"] = n(!0);
});
let hve = class Zb {
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
      r.reason || (r.reason = new jr(s, i, a), n(r.reason));
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
      token: new Zb(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function yve(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function gve(e) {
  return L.isObject(e) && e.isAxiosError === !0;
}
const Ul = {
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
Object.entries(Ul).forEach(([e, t]) => {
  Ul[t] = e;
});
function ew(e) {
  const t = new Rr(e), n = ab(Rr.prototype.request, t);
  return L.extend(n, Rr.prototype, t, { allOwnKeys: !0 }), L.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return ew(qr(e, o));
  }, n;
}
const ke = ew(Ps);
ke.Axios = Rr;
ke.CanceledError = jr;
ke.CancelToken = hve;
ke.isCancel = Mb;
ke.VERSION = Vi;
ke.toFormData = Ea;
ke.AxiosError = W;
ke.Cancel = ke.CanceledError;
ke.all = function(t) {
  return Promise.all(t);
};
ke.spread = yve;
ke.isAxiosError = gve;
ke.mergeConfig = qr;
ke.AxiosHeaders = Qe;
ke.formToJSON = (e) => Fb(L.isHTMLForm(e) ? new FormData(e) : e);
ke.getAdapter = Qb.getAdapter;
ke.HttpStatusCode = Ul;
ke.default = ke;
const {
  Axios: K0e,
  AxiosError: W0e,
  CanceledError: J0e,
  isCancel: Y0e,
  CancelToken: Q0e,
  VERSION: Z0e,
  all: exe,
  Cancel: txe,
  isAxiosError: nxe,
  spread: rxe,
  toFormData: oxe,
  AxiosHeaders: sxe,
  HttpStatusCode: ixe,
  formToJSON: axe,
  getAdapter: cxe,
  mergeConfig: lxe
} = ke;
var mt = {}, Fe = {};
Fe.fromCallback = function(e) {
  return Object.defineProperty(function(...t) {
    if (typeof t[t.length - 1] == "function") e.apply(this, t);
    else
      return new Promise((n, r) => {
        t.push((o, s) => o != null ? r(o) : n(s)), e.apply(this, t);
      });
  }, "name", { value: e.name });
};
Fe.fromPromise = function(e) {
  return Object.defineProperty(function(...t) {
    const n = t[t.length - 1];
    if (typeof n != "function") return e.apply(this, t);
    t.pop(), e.apply(this, t).then((r) => n(null, r), n);
  }, "name", { value: e.name });
};
var Mn = r0, vve = process.cwd, _i = null, bve = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function() {
  return _i || (_i = vve.call(process)), _i;
};
try {
  process.cwd();
} catch {
}
if (typeof process.chdir == "function") {
  var Qh = process.chdir;
  process.chdir = function(e) {
    _i = null, Qh.call(process, e);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, Qh);
}
var wve = xve;
function xve(e) {
  Mn.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && t(e), e.lutimes || n(e), e.chown = s(e.chown), e.fchown = s(e.fchown), e.lchown = s(e.lchown), e.chmod = r(e.chmod), e.fchmod = r(e.fchmod), e.lchmod = r(e.lchmod), e.chownSync = i(e.chownSync), e.fchownSync = i(e.fchownSync), e.lchownSync = i(e.lchownSync), e.chmodSync = o(e.chmodSync), e.fchmodSync = o(e.fchmodSync), e.lchmodSync = o(e.lchmodSync), e.stat = a(e.stat), e.fstat = a(e.fstat), e.lstat = a(e.lstat), e.statSync = c(e.statSync), e.fstatSync = c(e.fstatSync), e.lstatSync = c(e.lstatSync), e.chmod && !e.lchmod && (e.lchmod = function(l, u, d) {
    d && process.nextTick(d);
  }, e.lchmodSync = function() {
  }), e.chown && !e.lchown && (e.lchown = function(l, u, d, m) {
    m && process.nextTick(m);
  }, e.lchownSync = function() {
  }), bve === "win32" && (e.rename = typeof e.rename != "function" ? e.rename : function(l) {
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
        b = function(T, O, C) {
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
        Mn.O_WRONLY | Mn.O_SYMLINK,
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
      var m = l.openSync(u, Mn.O_WRONLY | Mn.O_SYMLINK, d), f = !0, g;
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
    Mn.hasOwnProperty("O_SYMLINK") && l.futimes ? (l.lutimes = function(u, d, m, f) {
      l.open(u, Mn.O_SYMLINK, function(g, y) {
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
      var f = l.openSync(u, Mn.O_SYMLINK), g, y = !0;
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
var Zh = lt.Stream, _ve = $ve;
function $ve(e) {
  return {
    ReadStream: t,
    WriteStream: n
  };
  function t(r, o) {
    if (!(this instanceof t)) return new t(r, o);
    Zh.call(this);
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
    Zh.call(this), this.path = r, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, o = o || {};
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
var Eve = Tve, Sve = Object.getPrototypeOf || function(e) {
  return e.__proto__;
};
function Tve(e) {
  if (e === null || typeof e != "object")
    return e;
  if (e instanceof Object)
    var t = { __proto__: Sve(e) };
  else
    var t = /* @__PURE__ */ Object.create(null);
  return Object.getOwnPropertyNames(e).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  }), t;
}
var Te = Wl, Pve = wve, Ove = _ve, Nve = Eve, oi = tr, Ye, Gi;
typeof Symbol == "function" && typeof Symbol.for == "function" ? (Ye = Symbol.for("graceful-fs.queue"), Gi = Symbol.for("graceful-fs.previous")) : (Ye = "___graceful-fs.queue", Gi = "___graceful-fs.previous");
function Rve() {
}
function tw(e, t) {
  Object.defineProperty(e, Ye, {
    get: function() {
      return t;
    }
  });
}
var Ar = Rve;
oi.debuglog ? Ar = oi.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (Ar = function() {
  var e = oi.format.apply(oi, arguments);
  e = "GFS4: " + e.split(/\n/).join(`
GFS4: `), console.error(e);
});
if (!Te[Ye]) {
  var Ave = re[Ye] || [];
  tw(Te, Ave), Te.close = function(e) {
    function t(n, r) {
      return e.call(Te, n, function(o) {
        o || ey(), typeof r == "function" && r.apply(this, arguments);
      });
    }
    return Object.defineProperty(t, Gi, {
      value: e
    }), t;
  }(Te.close), Te.closeSync = function(e) {
    function t(n) {
      e.apply(Te, arguments), ey();
    }
    return Object.defineProperty(t, Gi, {
      value: e
    }), t;
  }(Te.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    Ar(Te[Ye]), Sy.equal(Te[Ye].length, 0);
  });
}
re[Ye] || tw(re, Te[Ye]);
var Ao = Nd(Nve(Te));
process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !Te.__patched && (Ao = Nd(Te), Te.__patched = !0);
function Nd(e) {
  Pve(e), e.gracefulify = Nd, e.createReadStream = O, e.createWriteStream = C;
  var t = e.readFile;
  e.readFile = n;
  function n(E, q, I) {
    return typeof q == "function" && (I = q, q = null), z(E, q, I);
    function z(H, F, U, G) {
      return t(H, F, function(V) {
        V && (V.code === "EMFILE" || V.code === "ENFILE") ? Hr([z, [H, F, U], V, G || Date.now(), Date.now()]) : typeof U == "function" && U.apply(this, arguments);
      });
    }
  }
  var r = e.writeFile;
  e.writeFile = o;
  function o(E, q, I, z) {
    return typeof I == "function" && (z = I, I = null), H(E, q, I, z);
    function H(F, U, G, V, K) {
      return r(F, U, G, function(X) {
        X && (X.code === "EMFILE" || X.code === "ENFILE") ? Hr([H, [F, U, G, V], X, K || Date.now(), Date.now()]) : typeof V == "function" && V.apply(this, arguments);
      });
    }
  }
  var s = e.appendFile;
  s && (e.appendFile = i);
  function i(E, q, I, z) {
    return typeof I == "function" && (z = I, I = null), H(E, q, I, z);
    function H(F, U, G, V, K) {
      return s(F, U, G, function(X) {
        X && (X.code === "EMFILE" || X.code === "ENFILE") ? Hr([H, [F, U, G, V], X, K || Date.now(), Date.now()]) : typeof V == "function" && V.apply(this, arguments);
      });
    }
  }
  var a = e.copyFile;
  a && (e.copyFile = c);
  function c(E, q, I, z) {
    return typeof I == "function" && (z = I, I = 0), H(E, q, I, z);
    function H(F, U, G, V, K) {
      return a(F, U, G, function(X) {
        X && (X.code === "EMFILE" || X.code === "ENFILE") ? Hr([H, [F, U, G, V], X, K || Date.now(), Date.now()]) : typeof V == "function" && V.apply(this, arguments);
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
        K && (K.code === "EMFILE" || K.code === "ENFILE") ? Hr([
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
    var d = Ove(e);
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
  function O(E, q) {
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
        X && (X.code === "EMFILE" || X.code === "ENFILE") ? Hr([H, [F, U, G, V], X, K || Date.now(), Date.now()]) : typeof V == "function" && V.apply(this, arguments);
      });
    }
  }
  return e;
}
function Hr(e) {
  Ar("ENQUEUE", e[0].name, e[1]), Te[Ye].push(e), Rd();
}
var si;
function ey() {
  for (var e = Date.now(), t = 0; t < Te[Ye].length; ++t)
    Te[Ye][t].length > 2 && (Te[Ye][t][3] = e, Te[Ye][t][4] = e);
  Rd();
}
function Rd() {
  if (clearTimeout(si), si = void 0, Te[Ye].length !== 0) {
    var e = Te[Ye].shift(), t = e[0], n = e[1], r = e[2], o = e[3], s = e[4];
    if (o === void 0)
      Ar("RETRY", t.name, n), t.apply(null, n);
    else if (Date.now() - o >= 6e4) {
      Ar("TIMEOUT", t.name, n);
      var i = n.pop();
      typeof i == "function" && i.call(null, r);
    } else {
      var a = Date.now() - s, c = Math.max(s - o, 1), p = Math.min(c * 1.2, 100);
      a >= p ? (Ar("RETRY", t.name, n), t.apply(null, n.concat([o]))) : Te[Ye].push(e);
    }
    si === void 0 && (si = setTimeout(Rd, 0));
  }
}
(function(e) {
  const t = Fe.fromCallback, n = Ao, r = [
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
var Ad = {}, nw = {};
const Dve = Pe;
nw.checkPath = function(t) {
  if (process.platform === "win32" && /[<>:"|?*]/.test(t.replace(Dve.parse(t).root, ""))) {
    const r = new Error(`Path contains invalid characters: ${t}`);
    throw r.code = "EINVAL", r;
  }
};
const rw = mt, { checkPath: ow } = nw, sw = (e) => {
  const t = { mode: 511 };
  return typeof e == "number" ? e : { ...t, ...e }.mode;
};
Ad.makeDir = async (e, t) => (ow(e), rw.mkdir(e, {
  mode: sw(t),
  recursive: !0
}));
Ad.makeDirSync = (e, t) => (ow(e), rw.mkdirSync(e, {
  mode: sw(t),
  recursive: !0
}));
const Ive = Fe.fromPromise, { makeDir: kve, makeDirSync: pl } = Ad, dl = Ive(kve);
var mn = {
  mkdirs: dl,
  mkdirsSync: pl,
  // alias
  mkdirp: dl,
  mkdirpSync: pl,
  ensureDir: dl,
  ensureDirSync: pl
};
const Cve = Fe.fromPromise, iw = mt;
function jve(e) {
  return iw.access(e).then(() => !0).catch(() => !1);
}
var Fr = {
  pathExists: Cve(jve),
  pathExistsSync: iw.existsSync
};
const io = mt, Lve = Fe.fromPromise;
async function qve(e, t, n) {
  const r = await io.open(e, "r+");
  let o = null;
  try {
    await io.futimes(r, t, n);
  } finally {
    try {
      await io.close(r);
    } catch (s) {
      o = s;
    }
  }
  if (o)
    throw o;
}
function Fve(e, t, n) {
  const r = io.openSync(e, "r+");
  return io.futimesSync(r, t, n), io.closeSync(r);
}
var aw = {
  utimesMillis: Lve(qve),
  utimesMillisSync: Fve
};
const bo = mt, Ue = Pe, ty = Fe.fromPromise;
function Mve(e, t, n) {
  const r = n.dereference ? (o) => bo.stat(o, { bigint: !0 }) : (o) => bo.lstat(o, { bigint: !0 });
  return Promise.all([
    r(e),
    r(t).catch((o) => {
      if (o.code === "ENOENT") return null;
      throw o;
    })
  ]).then(([o, s]) => ({ srcStat: o, destStat: s }));
}
function Uve(e, t, n) {
  let r;
  const o = n.dereference ? (i) => bo.statSync(i, { bigint: !0 }) : (i) => bo.lstatSync(i, { bigint: !0 }), s = o(e);
  try {
    r = o(t);
  } catch (i) {
    if (i.code === "ENOENT") return { srcStat: s, destStat: null };
    throw i;
  }
  return { srcStat: s, destStat: r };
}
async function Vve(e, t, n, r) {
  const { srcStat: o, destStat: s } = await Mve(e, t, r);
  if (s) {
    if (Rs(o, s)) {
      const i = Ue.basename(e), a = Ue.basename(t);
      if (n === "move" && i !== a && i.toLowerCase() === a.toLowerCase())
        return { srcStat: o, destStat: s, isChangingCase: !0 };
      throw new Error("Source and destination must not be the same.");
    }
    if (o.isDirectory() && !s.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
    if (!o.isDirectory() && s.isDirectory())
      throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`);
  }
  if (o.isDirectory() && Dd(e, t))
    throw new Error(Pa(e, t, n));
  return { srcStat: o, destStat: s };
}
function zve(e, t, n, r) {
  const { srcStat: o, destStat: s } = Uve(e, t, r);
  if (s) {
    if (Rs(o, s)) {
      const i = Ue.basename(e), a = Ue.basename(t);
      if (n === "move" && i !== a && i.toLowerCase() === a.toLowerCase())
        return { srcStat: o, destStat: s, isChangingCase: !0 };
      throw new Error("Source and destination must not be the same.");
    }
    if (o.isDirectory() && !s.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
    if (!o.isDirectory() && s.isDirectory())
      throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`);
  }
  if (o.isDirectory() && Dd(e, t))
    throw new Error(Pa(e, t, n));
  return { srcStat: o, destStat: s };
}
async function cw(e, t, n, r) {
  const o = Ue.resolve(Ue.dirname(e)), s = Ue.resolve(Ue.dirname(n));
  if (s === o || s === Ue.parse(s).root) return;
  let i;
  try {
    i = await bo.stat(s, { bigint: !0 });
  } catch (a) {
    if (a.code === "ENOENT") return;
    throw a;
  }
  if (Rs(t, i))
    throw new Error(Pa(e, n, r));
  return cw(e, t, s, r);
}
function lw(e, t, n, r) {
  const o = Ue.resolve(Ue.dirname(e)), s = Ue.resolve(Ue.dirname(n));
  if (s === o || s === Ue.parse(s).root) return;
  let i;
  try {
    i = bo.statSync(s, { bigint: !0 });
  } catch (a) {
    if (a.code === "ENOENT") return;
    throw a;
  }
  if (Rs(t, i))
    throw new Error(Pa(e, n, r));
  return lw(e, t, s, r);
}
function Rs(e, t) {
  return t.ino !== void 0 && t.dev !== void 0 && t.ino === e.ino && t.dev === e.dev;
}
function Dd(e, t) {
  const n = Ue.resolve(e).split(Ue.sep).filter((o) => o), r = Ue.resolve(t).split(Ue.sep).filter((o) => o);
  return n.every((o, s) => r[s] === o);
}
function Pa(e, t, n) {
  return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`;
}
var Do = {
  // checkPaths
  checkPaths: ty(Vve),
  checkPathsSync: zve,
  // checkParent
  checkParentPaths: ty(cw),
  checkParentPathsSync: lw,
  // Misc
  isSrcSubdir: Dd,
  areIdentical: Rs
};
async function Bve(e, t) {
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
var Gve = {
  asyncIteratorConcurrentProcess: Bve
};
const st = mt, cs = Pe, { mkdirs: Hve } = mn, { pathExists: Xve } = Fr, { utimesMillis: Kve } = aw, ls = Do, { asyncIteratorConcurrentProcess: Wve } = Gve;
async function Jve(e, t, n = {}) {
  typeof n == "function" && (n = { filter: n }), n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0001"
  );
  const { srcStat: r, destStat: o } = await ls.checkPaths(e, t, "copy", n);
  if (await ls.checkParentPaths(e, r, t, "copy"), !await uw(e, t, n)) return;
  const i = cs.dirname(t);
  await Xve(i) || await Hve(i), await pw(o, e, t, n);
}
async function uw(e, t, n) {
  return n.filter ? n.filter(e, t) : !0;
}
async function pw(e, t, n, r) {
  const s = await (r.dereference ? st.stat : st.lstat)(t);
  if (s.isDirectory()) return ebe(s, e, t, n, r);
  if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return Yve(s, e, t, n, r);
  if (s.isSymbolicLink()) return tbe(e, t, n, r);
  throw s.isSocket() ? new Error(`Cannot copy a socket file: ${t}`) : s.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${t}`) : new Error(`Unknown file: ${t}`);
}
async function Yve(e, t, n, r, o) {
  if (!t) return ny(e, n, r, o);
  if (o.overwrite)
    return await st.unlink(r), ny(e, n, r, o);
  if (o.errorOnExist)
    throw new Error(`'${r}' already exists`);
}
async function ny(e, t, n, r) {
  if (await st.copyFile(t, n), r.preserveTimestamps) {
    Qve(e.mode) && await Zve(n, e.mode);
    const o = await st.stat(t);
    await Kve(n, o.atime, o.mtime);
  }
  return st.chmod(n, e.mode);
}
function Qve(e) {
  return (e & 128) === 0;
}
function Zve(e, t) {
  return st.chmod(e, t | 128);
}
async function ebe(e, t, n, r, o) {
  t || await st.mkdir(r), await Wve(await st.opendir(n), async (s) => {
    const i = cs.join(n, s.name), a = cs.join(r, s.name);
    if (await uw(i, a, o)) {
      const { destStat: p } = await ls.checkPaths(i, a, "copy", o);
      await pw(p, i, a, o);
    }
  }), t || await st.chmod(r, e.mode);
}
async function tbe(e, t, n, r) {
  let o = await st.readlink(t);
  if (r.dereference && (o = cs.resolve(process.cwd(), o)), !e)
    return st.symlink(o, n);
  let s = null;
  try {
    s = await st.readlink(n);
  } catch (i) {
    if (i.code === "EINVAL" || i.code === "UNKNOWN") return st.symlink(o, n);
    throw i;
  }
  if (r.dereference && (s = cs.resolve(process.cwd(), s)), o !== s) {
    if (ls.isSrcSubdir(o, s))
      throw new Error(`Cannot copy '${o}' to a subdirectory of itself, '${s}'.`);
    if (ls.isSrcSubdir(s, o))
      throw new Error(`Cannot overwrite '${s}' with '${o}'.`);
  }
  return await st.unlink(n), st.symlink(o, n);
}
var nbe = Jve;
const pt = Ao, us = Pe, rbe = mn.mkdirsSync, obe = aw.utimesMillisSync, ps = Do;
function sbe(e, t, n) {
  typeof n == "function" && (n = { filter: n }), n = n || {}, n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0002"
  );
  const { srcStat: r, destStat: o } = ps.checkPathsSync(e, t, "copy", n);
  if (ps.checkParentPathsSync(e, r, t, "copy"), n.filter && !n.filter(e, t)) return;
  const s = us.dirname(t);
  return pt.existsSync(s) || rbe(s), dw(o, e, t, n);
}
function dw(e, t, n, r) {
  const s = (r.dereference ? pt.statSync : pt.lstatSync)(t);
  if (s.isDirectory()) return dbe(s, e, t, n, r);
  if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return ibe(s, e, t, n, r);
  if (s.isSymbolicLink()) return hbe(e, t, n, r);
  throw s.isSocket() ? new Error(`Cannot copy a socket file: ${t}`) : s.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${t}`) : new Error(`Unknown file: ${t}`);
}
function ibe(e, t, n, r, o) {
  return t ? abe(e, n, r, o) : fw(e, n, r, o);
}
function abe(e, t, n, r) {
  if (r.overwrite)
    return pt.unlinkSync(n), fw(e, t, n, r);
  if (r.errorOnExist)
    throw new Error(`'${n}' already exists`);
}
function fw(e, t, n, r) {
  return pt.copyFileSync(t, n), r.preserveTimestamps && cbe(e.mode, t, n), Id(n, e.mode);
}
function cbe(e, t, n) {
  return lbe(e) && ube(n, e), pbe(t, n);
}
function lbe(e) {
  return (e & 128) === 0;
}
function ube(e, t) {
  return Id(e, t | 128);
}
function Id(e, t) {
  return pt.chmodSync(e, t);
}
function pbe(e, t) {
  const n = pt.statSync(e);
  return obe(t, n.atime, n.mtime);
}
function dbe(e, t, n, r, o) {
  return t ? mw(n, r, o) : fbe(e.mode, n, r, o);
}
function fbe(e, t, n, r) {
  return pt.mkdirSync(n), mw(t, n, r), Id(n, e);
}
function mw(e, t, n) {
  const r = pt.opendirSync(e);
  try {
    let o;
    for (; (o = r.readSync()) !== null; )
      mbe(o.name, e, t, n);
  } finally {
    r.closeSync();
  }
}
function mbe(e, t, n, r) {
  const o = us.join(t, e), s = us.join(n, e);
  if (r.filter && !r.filter(o, s)) return;
  const { destStat: i } = ps.checkPathsSync(o, s, "copy", r);
  return dw(i, o, s, r);
}
function hbe(e, t, n, r) {
  let o = pt.readlinkSync(t);
  if (r.dereference && (o = us.resolve(process.cwd(), o)), e) {
    let s;
    try {
      s = pt.readlinkSync(n);
    } catch (i) {
      if (i.code === "EINVAL" || i.code === "UNKNOWN") return pt.symlinkSync(o, n);
      throw i;
    }
    if (r.dereference && (s = us.resolve(process.cwd(), s)), o !== s) {
      if (ps.isSrcSubdir(o, s))
        throw new Error(`Cannot copy '${o}' to a subdirectory of itself, '${s}'.`);
      if (ps.isSrcSubdir(s, o))
        throw new Error(`Cannot overwrite '${s}' with '${o}'.`);
    }
    return ybe(o, n);
  } else
    return pt.symlinkSync(o, n);
}
function ybe(e, t) {
  return pt.unlinkSync(t), pt.symlinkSync(e, t);
}
var gbe = sbe;
const vbe = Fe.fromPromise;
var kd = {
  copy: vbe(nbe),
  copySync: gbe
};
const hw = Ao, bbe = Fe.fromCallback;
function wbe(e, t) {
  hw.rm(e, { recursive: !0, force: !0 }, t);
}
function xbe(e) {
  hw.rmSync(e, { recursive: !0, force: !0 });
}
var Oa = {
  remove: bbe(wbe),
  removeSync: xbe
};
const _be = Fe.fromPromise, yw = mt, gw = Pe, vw = mn, bw = Oa, ry = _be(async function(t) {
  let n;
  try {
    n = await yw.readdir(t);
  } catch {
    return vw.mkdirs(t);
  }
  return Promise.all(n.map((r) => bw.remove(gw.join(t, r))));
});
function oy(e) {
  let t;
  try {
    t = yw.readdirSync(e);
  } catch {
    return vw.mkdirsSync(e);
  }
  t.forEach((n) => {
    n = gw.join(e, n), bw.removeSync(n);
  });
}
var $be = {
  emptyDirSync: oy,
  emptydirSync: oy,
  emptyDir: ry,
  emptydir: ry
};
const Ebe = Fe.fromPromise, ww = Pe, $n = mt, xw = mn;
async function Sbe(e) {
  let t;
  try {
    t = await $n.stat(e);
  } catch {
  }
  if (t && t.isFile()) return;
  const n = ww.dirname(e);
  let r = null;
  try {
    r = await $n.stat(n);
  } catch (o) {
    if (o.code === "ENOENT") {
      await xw.mkdirs(n), await $n.writeFile(e, "");
      return;
    } else
      throw o;
  }
  r.isDirectory() ? await $n.writeFile(e, "") : await $n.readdir(n);
}
function Tbe(e) {
  let t;
  try {
    t = $n.statSync(e);
  } catch {
  }
  if (t && t.isFile()) return;
  const n = ww.dirname(e);
  try {
    $n.statSync(n).isDirectory() || $n.readdirSync(n);
  } catch (r) {
    if (r && r.code === "ENOENT") xw.mkdirsSync(n);
    else throw r;
  }
  $n.writeFileSync(e, "");
}
var Pbe = {
  createFile: Ebe(Sbe),
  createFileSync: Tbe
};
const Obe = Fe.fromPromise, _w = Pe, Bn = mt, $w = mn, { pathExists: Nbe } = Fr, { areIdentical: Ew } = Do;
async function Rbe(e, t) {
  let n;
  try {
    n = await Bn.lstat(t);
  } catch {
  }
  let r;
  try {
    r = await Bn.lstat(e);
  } catch (i) {
    throw i.message = i.message.replace("lstat", "ensureLink"), i;
  }
  if (n && Ew(r, n)) return;
  const o = _w.dirname(t);
  await Nbe(o) || await $w.mkdirs(o), await Bn.link(e, t);
}
function Abe(e, t) {
  let n;
  try {
    n = Bn.lstatSync(t);
  } catch {
  }
  try {
    const s = Bn.lstatSync(e);
    if (n && Ew(s, n)) return;
  } catch (s) {
    throw s.message = s.message.replace("lstat", "ensureLink"), s;
  }
  const r = _w.dirname(t);
  return Bn.existsSync(r) || $w.mkdirsSync(r), Bn.linkSync(e, t);
}
var Dbe = {
  createLink: Obe(Rbe),
  createLinkSync: Abe
};
const Jn = Pe, ns = mt, { pathExists: Ibe } = Fr, kbe = Fe.fromPromise;
async function Cbe(e, t) {
  if (Jn.isAbsolute(e)) {
    try {
      await ns.lstat(e);
    } catch (s) {
      throw s.message = s.message.replace("lstat", "ensureSymlink"), s;
    }
    return {
      toCwd: e,
      toDst: e
    };
  }
  const n = Jn.dirname(t), r = Jn.join(n, e);
  if (await Ibe(r))
    return {
      toCwd: r,
      toDst: e
    };
  try {
    await ns.lstat(e);
  } catch (s) {
    throw s.message = s.message.replace("lstat", "ensureSymlink"), s;
  }
  return {
    toCwd: e,
    toDst: Jn.relative(n, e)
  };
}
function jbe(e, t) {
  if (Jn.isAbsolute(e)) {
    if (!ns.existsSync(e)) throw new Error("absolute srcpath does not exist");
    return {
      toCwd: e,
      toDst: e
    };
  }
  const n = Jn.dirname(t), r = Jn.join(n, e);
  if (ns.existsSync(r))
    return {
      toCwd: r,
      toDst: e
    };
  if (!ns.existsSync(e)) throw new Error("relative srcpath does not exist");
  return {
    toCwd: e,
    toDst: Jn.relative(n, e)
  };
}
var Lbe = {
  symlinkPaths: kbe(Cbe),
  symlinkPathsSync: jbe
};
const Sw = mt, qbe = Fe.fromPromise;
async function Fbe(e, t) {
  if (t) return t;
  let n;
  try {
    n = await Sw.lstat(e);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
function Mbe(e, t) {
  if (t) return t;
  let n;
  try {
    n = Sw.lstatSync(e);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
var Ube = {
  symlinkType: qbe(Fbe),
  symlinkTypeSync: Mbe
};
const Vbe = Fe.fromPromise, Tw = Pe, an = mt, { mkdirs: zbe, mkdirsSync: Bbe } = mn, { symlinkPaths: Gbe, symlinkPathsSync: Hbe } = Lbe, { symlinkType: Xbe, symlinkTypeSync: Kbe } = Ube, { pathExists: Wbe } = Fr, { areIdentical: Pw } = Do;
async function Jbe(e, t, n) {
  let r;
  try {
    r = await an.lstat(t);
  } catch {
  }
  if (r && r.isSymbolicLink()) {
    const [a, c] = await Promise.all([
      an.stat(e),
      an.stat(t)
    ]);
    if (Pw(a, c)) return;
  }
  const o = await Gbe(e, t);
  e = o.toDst;
  const s = await Xbe(o.toCwd, n), i = Tw.dirname(t);
  return await Wbe(i) || await zbe(i), an.symlink(e, t, s);
}
function Ybe(e, t, n) {
  let r;
  try {
    r = an.lstatSync(t);
  } catch {
  }
  if (r && r.isSymbolicLink()) {
    const a = an.statSync(e), c = an.statSync(t);
    if (Pw(a, c)) return;
  }
  const o = Hbe(e, t);
  e = o.toDst, n = Kbe(o.toCwd, n);
  const s = Tw.dirname(t);
  return an.existsSync(s) || Bbe(s), an.symlinkSync(e, t, n);
}
var Qbe = {
  createSymlink: Vbe(Jbe),
  createSymlinkSync: Ybe
};
const { createFile: sy, createFileSync: iy } = Pbe, { createLink: ay, createLinkSync: cy } = Dbe, { createSymlink: ly, createSymlinkSync: uy } = Qbe;
var Zbe = {
  // file
  createFile: sy,
  createFileSync: iy,
  ensureFile: sy,
  ensureFileSync: iy,
  // link
  createLink: ay,
  createLinkSync: cy,
  ensureLink: ay,
  ensureLinkSync: cy,
  // symlink
  createSymlink: ly,
  createSymlinkSync: uy,
  ensureSymlink: ly,
  ensureSymlinkSync: uy
};
function ewe(e, { EOL: t = `
`, finalEOL: n = !0, replacer: r = null, spaces: o } = {}) {
  const s = n ? t : "";
  return JSON.stringify(e, r, o).replace(/\n/g, t) + s;
}
function twe(e) {
  return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "");
}
var Cd = { stringify: ewe, stripBom: twe };
let wo;
try {
  wo = Ao;
} catch {
  wo = Wl;
}
const Na = Fe, { stringify: Ow, stripBom: Nw } = Cd;
async function nwe(e, t = {}) {
  typeof t == "string" && (t = { encoding: t });
  const n = t.fs || wo, r = "throws" in t ? t.throws : !0;
  let o = await Na.fromCallback(n.readFile)(e, t);
  o = Nw(o);
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
const rwe = Na.fromPromise(nwe);
function owe(e, t = {}) {
  typeof t == "string" && (t = { encoding: t });
  const n = t.fs || wo, r = "throws" in t ? t.throws : !0;
  try {
    let o = n.readFileSync(e, t);
    return o = Nw(o), JSON.parse(o, t.reviver);
  } catch (o) {
    if (r)
      throw o.message = `${e}: ${o.message}`, o;
    return null;
  }
}
async function swe(e, t, n = {}) {
  const r = n.fs || wo, o = Ow(t, n);
  await Na.fromCallback(r.writeFile)(e, o, n);
}
const iwe = Na.fromPromise(swe);
function awe(e, t, n = {}) {
  const r = n.fs || wo, o = Ow(t, n);
  return r.writeFileSync(e, o, n);
}
var cwe = {
  readFile: rwe,
  readFileSync: owe,
  writeFile: iwe,
  writeFileSync: awe
};
const ii = cwe;
var lwe = {
  // jsonfile exports
  readJson: ii.readFile,
  readJsonSync: ii.readFileSync,
  writeJson: ii.writeFile,
  writeJsonSync: ii.writeFileSync
};
const uwe = Fe.fromPromise, Vl = mt, Rw = Pe, Aw = mn, pwe = Fr.pathExists;
async function dwe(e, t, n = "utf-8") {
  const r = Rw.dirname(e);
  return await pwe(r) || await Aw.mkdirs(r), Vl.writeFile(e, t, n);
}
function fwe(e, ...t) {
  const n = Rw.dirname(e);
  Vl.existsSync(n) || Aw.mkdirsSync(n), Vl.writeFileSync(e, ...t);
}
var jd = {
  outputFile: uwe(dwe),
  outputFileSync: fwe
};
const { stringify: mwe } = Cd, { outputFile: hwe } = jd;
async function ywe(e, t, n = {}) {
  const r = mwe(t, n);
  await hwe(e, r, n);
}
var gwe = ywe;
const { stringify: vwe } = Cd, { outputFileSync: bwe } = jd;
function wwe(e, t, n) {
  const r = vwe(t, n);
  bwe(e, r, n);
}
var xwe = wwe;
const _we = Fe.fromPromise, dt = lwe;
dt.outputJson = _we(gwe);
dt.outputJsonSync = xwe;
dt.outputJSON = dt.outputJson;
dt.outputJSONSync = dt.outputJsonSync;
dt.writeJSON = dt.writeJson;
dt.writeJSONSync = dt.writeJsonSync;
dt.readJSON = dt.readJson;
dt.readJSONSync = dt.readJsonSync;
var $we = dt;
const Ewe = mt, py = Pe, { copy: Swe } = kd, { remove: Dw } = Oa, { mkdirp: Twe } = mn, { pathExists: Pwe } = Fr, dy = Do;
async function Owe(e, t, n = {}) {
  const r = n.overwrite || n.clobber || !1, { srcStat: o, isChangingCase: s = !1 } = await dy.checkPaths(e, t, "move", n);
  await dy.checkParentPaths(e, o, t, "move");
  const i = py.dirname(t);
  return py.parse(i).root !== i && await Twe(i), Nwe(e, t, r, s);
}
async function Nwe(e, t, n, r) {
  if (!r) {
    if (n)
      await Dw(t);
    else if (await Pwe(t))
      throw new Error("dest already exists.");
  }
  try {
    await Ewe.rename(e, t);
  } catch (o) {
    if (o.code !== "EXDEV")
      throw o;
    await Rwe(e, t, n);
  }
}
async function Rwe(e, t, n) {
  return await Swe(e, t, {
    overwrite: n,
    errorOnExist: !0,
    preserveTimestamps: !0
  }), Dw(e);
}
var Awe = Owe;
const Iw = Ao, zl = Pe, Dwe = kd.copySync, kw = Oa.removeSync, Iwe = mn.mkdirpSync, fy = Do;
function kwe(e, t, n) {
  n = n || {};
  const r = n.overwrite || n.clobber || !1, { srcStat: o, isChangingCase: s = !1 } = fy.checkPathsSync(e, t, "move", n);
  return fy.checkParentPathsSync(e, o, t, "move"), Cwe(t) || Iwe(zl.dirname(t)), jwe(e, t, r, s);
}
function Cwe(e) {
  const t = zl.dirname(e);
  return zl.parse(t).root === t;
}
function jwe(e, t, n, r) {
  if (r) return fl(e, t, n);
  if (n)
    return kw(t), fl(e, t, n);
  if (Iw.existsSync(t)) throw new Error("dest already exists.");
  return fl(e, t, n);
}
function fl(e, t, n) {
  try {
    Iw.renameSync(e, t);
  } catch (r) {
    if (r.code !== "EXDEV") throw r;
    return Lwe(e, t, n);
  }
}
function Lwe(e, t, n) {
  return Dwe(e, t, {
    overwrite: n,
    errorOnExist: !0,
    preserveTimestamps: !0
  }), kw(e);
}
var qwe = kwe;
const Fwe = Fe.fromPromise;
var Mwe = {
  move: Fwe(Awe),
  moveSync: qwe
}, Uwe = {
  // Export promiseified graceful-fs:
  ...mt,
  // Export extra methods:
  ...kd,
  ...$be,
  ...Zbe,
  ...$we,
  ...mn,
  ...Mwe,
  ...jd,
  ...Fr,
  ...Oa
};
const br = /* @__PURE__ */ nr(Uwe);
class Vwe {
  async downloadFile(t, n, r, o = 3) {
    for (let s = 0; s < o; s++)
      try {
        await this.attemptDownload(t, n, r);
        return;
      } catch (i) {
        if (console.error(`Download attempt ${s + 1} failed:`, i), await br.remove(n).catch(() => {
        }), s === o - 1) throw i;
        await new Promise((a) => setTimeout(a, 1e3));
      }
  }
  async attemptDownload(t, n, r) {
    const o = br.createWriteStream(n);
    try {
      const s = await ke({
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
      throw o.close(), s;
    }
  }
}
var Cw = { exports: {} };
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
      var T = y.length, O;
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
            if (!b) for (O = 1, b = new Array(v - 1); O < v; O++)
              b[O - 1] = arguments[O];
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
})(Cw);
var zwe = Cw.exports;
const Bwe = /* @__PURE__ */ nr(zwe);
class Ld extends Error {
  constructor(n, r) {
    var o;
    super(n, r);
    tn(this, "name", "TimeoutError");
    (o = Error.captureStackTrace) == null || o.call(Error, this, Ld);
  }
}
const my = (e) => e.reason ?? new DOMException("This operation was aborted.", "AbortError");
function Gwe(e, t) {
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
      d(my(i));
      return;
    }
    if (i && (c = () => {
      d(my(i));
    }, i.addEventListener("abort", c, { once: !0 })), e.then(u, d), n === Number.POSITIVE_INFINITY)
      return;
    const m = new Ld();
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
function Hwe(e, t, n) {
  let r = 0, o = e.length;
  for (; o > 0; ) {
    const s = Math.trunc(o / 2);
    let i = r + s;
    n(e[i], t) <= 0 ? (r = ++i, o -= s + 1) : o = s;
  }
  return r;
}
var Rt;
class Xwe {
  constructor() {
    ge(this, Rt, []);
  }
  enqueue(t, n) {
    const { priority: r = 0, id: o } = n ?? {}, s = {
      priority: r,
      id: o,
      run: t
    };
    if (this.size === 0 || M(this, Rt)[this.size - 1].priority >= r) {
      M(this, Rt).push(s);
      return;
    }
    const i = Hwe(M(this, Rt), s, (a, c) => c.priority - a.priority);
    M(this, Rt).splice(i, 0, s);
  }
  setPriority(t, n) {
    const r = M(this, Rt).findIndex((s) => s.id === t);
    if (r === -1)
      throw new ReferenceError(`No promise function with the id "${t}" exists in the queue.`);
    const [o] = M(this, Rt).splice(r, 1);
    this.enqueue(o.run, { priority: n, id: t });
  }
  dequeue() {
    const t = M(this, Rt).shift();
    return t == null ? void 0 : t.run;
  }
  filter(t) {
    return M(this, Rt).filter((n) => n.priority === t.priority).map((n) => n.run);
  }
  get size() {
    return M(this, Rt).length;
  }
}
Rt = new WeakMap();
var co, Vt, zt, Xn, Sr, lo, on, ds, uo, sn, xn, At, gt, it, Ce, fs, Ke, Tr, _n, Hi, Pr, Q, $i, jw, Lw, Ei, qw, Fw, Mw, Uw, Vw, Si, Ti, Bl, Pi, Gl, Hl, Oi, pr, zw, Jr, Bw, Xl;
class Kwe extends Bwe {
  constructor(n) {
    var r, o;
    super();
    ge(this, Q);
    ge(this, co);
    ge(this, Vt);
    ge(this, zt, 0);
    ge(this, Xn);
    ge(this, Sr, !1);
    ge(this, lo, !1);
    ge(this, on);
    ge(this, ds, 0);
    ge(this, uo, 0);
    ge(this, sn);
    ge(this, xn);
    ge(this, At);
    // Circular buffer implementation for better performance
    ge(this, gt, []);
    ge(this, it, 0);
    ge(this, Ce);
    ge(this, fs);
    ge(this, Ke, 0);
    // The `!` is needed because of https://github.com/microsoft/TypeScript/issues/32194
    ge(this, Tr);
    ge(this, _n);
    // Use to assign a unique identifier to a promise function, if not explicitly specified
    ge(this, Hi, 1n);
    // Track currently running tasks for debugging
    ge(this, Pr, /* @__PURE__ */ new Map());
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
    tn(this, "timeout");
    if (n = {
      carryoverIntervalCount: !1,
      intervalCap: Number.POSITIVE_INFINITY,
      interval: 0,
      concurrency: Number.POSITIVE_INFINITY,
      autoStart: !0,
      queueClass: Xwe,
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
    if (ie(this, co, n.carryoverIntervalCount ?? n.carryoverConcurrencyCount ?? !1), ie(this, Vt, n.intervalCap === Number.POSITIVE_INFINITY || n.interval === 0), ie(this, Xn, n.intervalCap), ie(this, on, n.interval), ie(this, At, n.strict), ie(this, Ce, new n.queueClass()), ie(this, fs, n.queueClass), this.concurrency = n.concurrency, n.timeout !== void 0 && !(Number.isFinite(n.timeout) && n.timeout > 0))
      throw new TypeError(`Expected \`timeout\` to be a positive finite number, got \`${n.timeout}\` (${typeof n.timeout})`);
    this.timeout = n.timeout, ie(this, _n, n.autoStart === !1), ne(this, Q, zw).call(this);
  }
  get concurrency() {
    return M(this, Tr);
  }
  set concurrency(n) {
    if (!(typeof n == "number" && n >= 1))
      throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${n}\` (${typeof n})`);
    ie(this, Tr, n), ne(this, Q, Oi).call(this);
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
    M(this, Ce).setPriority(n, r);
  }
  async add(n, r = {}) {
    return r = {
      timeout: this.timeout,
      ...r,
      // Assign unique ID if not provided
      id: r.id ?? (ar(this, Hi)._++).toString()
    }, new Promise((o, s) => {
      const i = Symbol(`task-${r.id}`);
      M(this, Ce).enqueue(async () => {
        var c, p;
        ar(this, Ke)._++, M(this, Pr).set(i, {
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
            throw ne(this, Q, Bw).call(this), M(this, Pr).delete(i), d;
          }
          ie(this, uo, Date.now());
          let l = n({ signal: r.signal });
          if (r.timeout && (l = Gwe(Promise.resolve(l), {
            milliseconds: r.timeout,
            message: `Task timed out after ${r.timeout}ms (queue has ${M(this, Ke)} running, ${M(this, Ce).size} waiting)`
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
          a && ((p = r.signal) == null || p.removeEventListener("abort", a)), M(this, Pr).delete(i), queueMicrotask(() => {
            ne(this, Q, Mw).call(this);
          });
        }
      }, r), this.emit("add"), ne(this, Q, Pi).call(this);
    });
  }
  async addAll(n, r) {
    return Promise.all(n.map(async (o) => this.add(o, r)));
  }
  /**
  Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
  */
  start() {
    return M(this, _n) ? (ie(this, _n, !1), ne(this, Q, Oi).call(this), this) : this;
  }
  /**
  Put queue execution on hold.
  */
  pause() {
    ie(this, _n, !0);
  }
  /**
  Clear the queue.
  */
  clear() {
    ie(this, Ce, new (M(this, fs))()), ne(this, Q, Ti).call(this), ne(this, Q, Xl).call(this), this.emit("empty"), M(this, Ke) === 0 && (ne(this, Q, Bl).call(this), this.emit("idle")), this.emit("next");
  }
  /**
      Can be called multiple times. Useful if you for example add additional items at a later time.
  
      @returns A promise that settles when the queue becomes empty.
      */
  async onEmpty() {
    M(this, Ce).size !== 0 && await ne(this, Q, pr).call(this, "empty");
  }
  /**
      @returns A promise that settles when the queue size is less than the given limit: `queue.size < limit`.
  
      If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.
  
      Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.
      */
  async onSizeLessThan(n) {
    M(this, Ce).size < n || await ne(this, Q, pr).call(this, "next", () => M(this, Ce).size < n);
  }
  /**
      The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
  
      @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
      */
  async onIdle() {
    M(this, Ke) === 0 && M(this, Ce).size === 0 || await ne(this, Q, pr).call(this, "idle");
  }
  /**
      The difference with `.onIdle` is that `.onPendingZero` only waits for currently running tasks to finish, ignoring queued tasks.
  
      @returns A promise that settles when all currently running tasks have completed; `queue.pending === 0`.
      */
  async onPendingZero() {
    M(this, Ke) !== 0 && await ne(this, Q, pr).call(this, "pendingZero");
  }
  /**
  @returns A promise that settles when the queue becomes rate-limited due to intervalCap.
  */
  async onRateLimit() {
    this.isRateLimited || await ne(this, Q, pr).call(this, "rateLimit");
  }
  /**
  @returns A promise that settles when the queue is no longer rate-limited.
  */
  async onRateLimitCleared() {
    this.isRateLimited && await ne(this, Q, pr).call(this, "rateLimitCleared");
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
    return M(this, Ce).size;
  }
  /**
      Size of the queue, filtered by the given options.
  
      For example, this can be used to find the number of items remaining in the queue with a specific priority level.
      */
  sizeBy(n) {
    return M(this, Ce).filter(n).length;
  }
  /**
  Number of running items (no longer in the queue).
  */
  get pending() {
    return M(this, Ke);
  }
  /**
  Whether the queue is currently paused.
  */
  get isPaused() {
    return M(this, _n);
  }
  /**
  Whether the queue is currently rate-limited due to intervalCap.
  */
  get isRateLimited() {
    return M(this, Sr);
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
    return M(this, Ke) === M(this, Tr) && M(this, Ce).size > 0 || this.isRateLimited && M(this, Ce).size > 0;
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
    return [...M(this, Pr).values()].map((n) => ({ ...n }));
  }
}
co = new WeakMap(), Vt = new WeakMap(), zt = new WeakMap(), Xn = new WeakMap(), Sr = new WeakMap(), lo = new WeakMap(), on = new WeakMap(), ds = new WeakMap(), uo = new WeakMap(), sn = new WeakMap(), xn = new WeakMap(), At = new WeakMap(), gt = new WeakMap(), it = new WeakMap(), Ce = new WeakMap(), fs = new WeakMap(), Ke = new WeakMap(), Tr = new WeakMap(), _n = new WeakMap(), Hi = new WeakMap(), Pr = new WeakMap(), Q = new WeakSet(), $i = function(n) {
  for (; M(this, it) < M(this, gt).length; ) {
    const o = M(this, gt)[M(this, it)];
    if (o !== void 0 && n - o >= M(this, on))
      ar(this, it)._++;
    else
      break;
  }
  (M(this, it) > 100 && M(this, it) > M(this, gt).length / 2 || M(this, it) === M(this, gt).length) && (ie(this, gt, M(this, gt).slice(M(this, it))), ie(this, it, 0));
}, // Helper methods for interval consumption
jw = function(n) {
  M(this, At) ? M(this, gt).push(n) : ar(this, zt)._++;
}, Lw = function() {
  M(this, At) ? M(this, gt).length > M(this, it) && M(this, gt).pop() : M(this, zt) > 0 && ar(this, zt)._--;
}, Ei = function() {
  return M(this, gt).length - M(this, it);
}, qw = function() {
  return M(this, Vt) ? !0 : M(this, At) ? ne(this, Q, Ei).call(this) < M(this, Xn) : M(this, zt) < M(this, Xn);
}, Fw = function() {
  return M(this, Ke) < M(this, Tr);
}, Mw = function() {
  ar(this, Ke)._--, M(this, Ke) === 0 && this.emit("pendingZero"), ne(this, Q, Pi).call(this), this.emit("next");
}, Uw = function() {
  ie(this, xn, void 0), ne(this, Q, Hl).call(this), ne(this, Q, Gl).call(this);
}, Vw = function(n) {
  if (M(this, At)) {
    if (ne(this, Q, $i).call(this, n), ne(this, Q, Ei).call(this) >= M(this, Xn)) {
      const o = M(this, gt)[M(this, it)], s = M(this, on) - (n - o);
      return ne(this, Q, Si).call(this, s), !0;
    }
    return !1;
  }
  if (M(this, sn) === void 0) {
    const r = M(this, ds) - n;
    if (r < 0) {
      if (M(this, uo) > 0) {
        const o = n - M(this, uo);
        if (o < M(this, on))
          return ne(this, Q, Si).call(this, M(this, on) - o), !0;
      }
      ie(this, zt, M(this, co) ? M(this, Ke) : 0);
    } else
      return ne(this, Q, Si).call(this, r), !0;
  }
  return !1;
}, Si = function(n) {
  M(this, xn) === void 0 && ie(this, xn, setTimeout(() => {
    ne(this, Q, Uw).call(this);
  }, n));
}, Ti = function() {
  M(this, sn) && (clearInterval(M(this, sn)), ie(this, sn, void 0));
}, Bl = function() {
  M(this, xn) && (clearTimeout(M(this, xn)), ie(this, xn, void 0));
}, Pi = function() {
  if (M(this, Ce).size === 0) {
    if (ne(this, Q, Ti).call(this), this.emit("empty"), M(this, Ke) === 0) {
      if (ne(this, Q, Bl).call(this), M(this, At) && M(this, it) > 0) {
        const r = Date.now();
        ne(this, Q, $i).call(this, r);
      }
      this.emit("idle");
    }
    return !1;
  }
  let n = !1;
  if (!M(this, _n)) {
    const r = Date.now(), o = !ne(this, Q, Vw).call(this, r);
    if (M(this, Q, qw) && M(this, Q, Fw)) {
      const s = M(this, Ce).dequeue();
      M(this, Vt) || (ne(this, Q, jw).call(this, r), ne(this, Q, Jr).call(this)), this.emit("active"), s(), o && ne(this, Q, Gl).call(this), n = !0;
    }
  }
  return n;
}, Gl = function() {
  M(this, Vt) || M(this, sn) !== void 0 || M(this, At) || (ie(this, sn, setInterval(() => {
    ne(this, Q, Hl).call(this);
  }, M(this, on))), ie(this, ds, Date.now() + M(this, on)));
}, Hl = function() {
  M(this, At) || (M(this, zt) === 0 && M(this, Ke) === 0 && M(this, sn) && ne(this, Q, Ti).call(this), ie(this, zt, M(this, co) ? M(this, Ke) : 0)), ne(this, Q, Oi).call(this), ne(this, Q, Jr).call(this);
}, /**
Executes all queued functions until it reaches the limit.
*/
Oi = function() {
  for (; ne(this, Q, Pi).call(this); )
    ;
}, pr = async function(n, r) {
  return new Promise((o) => {
    const s = () => {
      r && !r() || (this.off(n, s), o());
    };
    this.on(n, s);
  });
}, zw = function() {
  M(this, Vt) || (this.on("add", () => {
    M(this, Ce).size > 0 && ne(this, Q, Jr).call(this);
  }), this.on("next", () => {
    ne(this, Q, Jr).call(this);
  }));
}, Jr = function() {
  M(this, Vt) || M(this, lo) || (ie(this, lo, !0), queueMicrotask(() => {
    ie(this, lo, !1), ne(this, Q, Xl).call(this);
  }));
}, Bw = function() {
  M(this, Vt) || (ne(this, Q, Lw).call(this), ne(this, Q, Jr).call(this));
}, Xl = function() {
  const n = M(this, Sr);
  if (M(this, Vt) || M(this, Ce).size === 0) {
    n && (ie(this, Sr, !1), this.emit("rateLimitCleared"));
    return;
  }
  let r;
  if (M(this, At)) {
    const s = Date.now();
    ne(this, Q, $i).call(this, s), r = ne(this, Q, Ei).call(this);
  } else
    r = M(this, zt);
  const o = r >= M(this, Xn);
  o !== n && (ie(this, Sr, o), this.emit(o ? "rateLimit" : "rateLimitCleared"));
};
class Wwe {
  constructor(t = 3) {
    tn(this, "queue");
    this.queue = new Kwe({ concurrency: t });
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
  clear() {
    this.queue.clear();
  }
}
function Jwe(e) {
  return e >= 55296 && e <= 56319;
}
function Ywe(e) {
  return e >= 56320 && e <= 57343;
}
var Qwe = function(t, n, r) {
  if (typeof n != "string")
    throw new Error("Input must be string");
  for (var o = n.length, s = 0, i, a, c = 0; c < o; c += 1) {
    if (i = n.charCodeAt(c), a = n[c], Jwe(i) && Ywe(n.charCodeAt(c + 1)) && (c += 1, a += n[c]), s += t(a), s === r)
      return n.slice(0, c + 1);
    if (s > r)
      return n.slice(0, c - a.length + 1);
  }
  return n;
}, Zwe = Qwe, e0e = Buffer.byteLength.bind(Buffer), t0e = Zwe.bind(null, e0e), n0e = t0e, r0e = /[\/\?<>\\:\*\|"]/g, o0e = /[\x00-\x1f\x80-\x9f]/g, s0e = /^\.+$/, i0e = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i, a0e = /[\. ]+$/;
function hy(e, t) {
  if (typeof e != "string")
    throw new Error("Input must be string");
  var n = e.replace(r0e, t).replace(o0e, t).replace(s0e, t).replace(i0e, t).replace(a0e, t);
  return n0e(n, 255);
}
var c0e = function(e, t) {
  var n = t && t.replacement || "", r = hy(e, n);
  return n === "" ? r : hy(r, "");
};
const yy = /* @__PURE__ */ nr(c0e), Ot = {
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
}, l0e = new hZ(), Ft = new Jfe(), u0e = new Vwe(), gy = new Wwe(3);
function p0e(e) {
  Tt.handle(Ot.PARSE_FEED, async (t, n) => await l0e.parseFeed(n)), Tt.handle(Ot.GET_FEEDS, async () => Ft.getFeeds()), Tt.handle(Ot.ADD_FEED, async (t, n) => (Ft.addFeed(n), Ft.getFeeds())), Tt.handle(Ot.REMOVE_FEED, async (t, n) => (Ft.removeFeed(n), Ft.getFeeds())), Tt.handle(Ot.GET_DOWNLOADED_EPISODES, async () => Ft.getDownloadedEpisodes()), Tt.handle(Ot.START_DOWNLOAD, async (t, { url: n, title: r, podcastTitle: o, guid: s }) => {
    let i = Ft.getDownloadPath();
    i || (i = Pe.join(Bt.getPath("documents"), "FeedDownloader", "downloads"));
    const a = vy(i, o, r), c = Pe.dirname(a);
    return await br.ensureDir(c), gy.add(async () => {
      try {
        await u0e.downloadFile(n, a, (p, l) => {
          e && !e.isDestroyed() && e.webContents.send(Ot.DOWNLOAD_PROGRESS, {
            url: n,
            loaded: p,
            total: l
          });
        }), s && Ft.markAsDownloaded(s), e && !e.isDestroyed() && e.webContents.send(Ot.DOWNLOAD_PROGRESS, {
          url: n,
          loaded: 100,
          total: 100,
          completed: !0
        });
      } catch (p) {
        console.error("Download error:", p), e && !e.isDestroyed() && e.webContents.send(Ot.DOWNLOAD_PROGRESS, {
          url: n,
          error: !0
        });
      }
    }), { status: "queued" };
  }), Tt.handle(Ot.CHOOSE_FOLDER, async () => {
    const t = await Jw.showOpenDialog(e, {
      properties: ["openDirectory"]
    });
    return t.canceled ? null : t.filePaths[0];
  }), Tt.handle(Ot.GET_DOWNLOAD_PATH, async () => Ft.getDownloadPath()), Tt.handle(Ot.SET_DOWNLOAD_PATH, async (t, n) => (Ft.setDownloadPath(n), !0)), Tt.handle("stop-batch", async () => (gy.clear(), !0)), Tt.handle("show-in-folder", async (t, { podcastTitle: n, title: r }) => {
    let o = Ft.getDownloadPath();
    o || (o = Pe.join(Bt.getPath("documents"), "FeedDownloader", "downloads"));
    const s = vy(o, n, r);
    import("electron").then(({ shell: i }) => {
      i.showItemInFolder(s);
    });
  }), Tt.handle("get-help-content", async (t, n) => {
    const o = {
      it: "README_MASTER.md",
      // Master is Italian
      en: "README_EN.md",
      fr: "README_FR.md",
      de: "README_DE.md",
      es: "README_ES.md",
      pt: "README_PT.md",
      ru: "README_RU.md",
      zh: "README_CN.md"
    }[n] || "README_EN.md";
    let s;
    Bt.isPackaged ? s = Pe.join(process.resourcesPath, o) : s = Pe.join(Bt.getAppPath(), o);
    try {
      if (await br.pathExists(s))
        return await br.readFile(s, "utf-8");
      {
        const i = Bt.isPackaged ? Pe.join(process.resourcesPath, "README_EN.md") : Pe.join(Bt.getAppPath(), "README_EN.md");
        return await br.pathExists(i) ? await br.readFile(i, "utf-8") : `# Error
Help file not found.`;
      }
    } catch (i) {
      return console.error("Failed to read help file", i), `# Error
Failed to load help documentation.`;
    }
  });
}
function vy(e, t, n) {
  const r = yy(t);
  let o = yy(n);
  const s = 250, i = ".mp3", a = Pe.join(e, r), p = a.length + 1 + i.length, l = s - p;
  return l < 1 ? o = o.substring(0, 5) : o.length > l && (o = o.substring(0, l)), Pe.join(a, `${o}${i}`);
}
const Gw = de.dirname(Yw(import.meta.url));
process.env.APP_ROOT = de.join(Gw, "..");
const Kl = process.env.VITE_DEV_SERVER_URL, uxe = de.join(process.env.APP_ROOT, "dist-electron"), Hw = de.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = Kl ? de.join(process.env.APP_ROOT, "public") : Hw;
let Ge;
const by = de.join(process.env.VITE_PUBLIC, "logo.png");
process.platform === "win32" && Bt.setAppUserModelId("com.runtime.feeddownloader.pro");
function Xw() {
  Ge = new xy({
    title: "Runtime FeedDownloader Pro",
    icon: by,
    backgroundColor: "#0b1120",
    // Matches Tailwind bg-background (approx)
    show: !1,
    autoHideMenuBar: !0,
    ...process.platform === "linux" ? { icon: by } : {},
    webPreferences: {
      preload: de.join(Gw, "preload.mjs")
    }
  }), Ge.webContents.session.setPermissionRequestHandler((e, t, n) => (console.log(`Blocked permission request: ${t}`), n(!1))), p0e(Ge), Ge.webContents.on("did-finish-load", () => {
    Ge == null || Ge.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), Ge.once("ready-to-show", () => {
    Ge == null || Ge.maximize(), Ge == null || Ge.show();
  }), Kl ? Ge.loadURL(Kl) : Ge.loadFile(de.join(Hw, "index.html"));
}
Bt.on("window-all-closed", () => {
  process.platform !== "darwin" && (Bt.quit(), Ge = null);
});
Bt.on("activate", () => {
  xy.getAllWindows().length === 0 && Xw();
});
Bt.whenReady().then(Xw);
export {
  uxe as MAIN_DIST,
  Hw as RENDERER_DIST,
  Kl as VITE_DEV_SERVER_URL
};
