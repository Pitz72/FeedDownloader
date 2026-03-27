var nd = Object.defineProperty;
var Gs = (t) => {
  throw TypeError(t);
};
var rd = (t, e, n) => e in t ? nd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var $e = (t, e, n) => rd(t, typeof e != "symbol" ? e + "" : e, n), oi = (t, e, n) => e.has(t) || Gs("Cannot " + n);
var I = (t, e, n) => (oi(t, e, "read from private field"), n ? n.call(t) : e.get(t)), se = (t, e, n) => e.has(t) ? Gs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), re = (t, e, n, r) => (oi(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), H = (t, e, n) => (oi(t, e, "access private method"), n);
var Dt = (t, e, n, r) => ({
  set _(i) {
    re(t, e, i, n);
  },
  get _() {
    return I(t, e, r);
  }
});
import { app as Ne, ipcMain as te, Notification as Ws, dialog as Jn, BrowserWindow as _u, Tray as id, Menu as od } from "electron";
import { fileURLToPath as sd } from "node:url";
import yt from "node:path";
import Fr from "http";
import kr from "https";
import ad, { EventEmitter as cd } from "events";
import ud from "timers";
import Bn from "url";
import Nt from "util";
import Re, { Readable as ld, Transform as pd } from "stream";
import Y from "path";
import Mn from "fs";
import Nu from "crypto";
import Au from "http2";
import Ou from "assert";
import Du from "tty";
import dd from "os";
import gt from "zlib";
import fd from "better-sqlite3";
import md from "constants";
import hd from "buffer";
import gd from "string_decoder";
import { statfs as bd } from "fs/promises";
function yd(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(t, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var dt = {}, si = {}, Ys;
function Qo() {
  return Ys || (Ys = 1, (function() {
    si.defaults = {
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
  }).call(z)), si;
}
var ai = {}, ut = {}, lt = {}, Ks;
function xt() {
  return Ks || (Ks = 1, (function() {
    var t, e, n, r, i, o, s, a = [].slice, c = {}.hasOwnProperty;
    t = function() {
      var l, u, p, d, f, m;
      if (m = arguments[0], f = 2 <= arguments.length ? a.call(arguments, 1) : [], i(Object.assign))
        Object.assign.apply(null, arguments);
      else
        for (l = 0, p = f.length; l < p; l++)
          if (d = f[l], d != null)
            for (u in d)
              c.call(d, u) && (m[u] = d[u]);
      return m;
    }, i = function(l) {
      return !!l && Object.prototype.toString.call(l) === "[object Function]";
    }, o = function(l) {
      var u;
      return !!l && ((u = typeof l) == "function" || u === "object");
    }, n = function(l) {
      return i(Array.isArray) ? Array.isArray(l) : Object.prototype.toString.call(l) === "[object Array]";
    }, r = function(l) {
      var u;
      if (n(l))
        return !l.length;
      for (u in l)
        if (c.call(l, u))
          return !1;
      return !0;
    }, s = function(l) {
      var u, p;
      return o(l) && (p = Object.getPrototypeOf(l)) && (u = p.constructor) && typeof u == "function" && u instanceof u && Function.prototype.toString.call(u) === Function.prototype.toString.call(Object);
    }, e = function(l) {
      return i(l.valueOf) ? l.valueOf() : l;
    }, lt.assign = t, lt.isFunction = i, lt.isObject = o, lt.isArray = n, lt.isEmpty = r, lt.isPlainObject = s, lt.getValue = e;
  }).call(z)), lt;
}
var ci = { exports: {} }, Js;
function Cu() {
  return Js || (Js = 1, (function() {
    ci.exports = function() {
      function t() {
      }
      return t.prototype.hasFeature = function(e, n) {
        return !0;
      }, t.prototype.createDocumentType = function(e, n, r) {
        throw new Error("This DOM method is not implemented.");
      }, t.prototype.createDocument = function(e, n, r) {
        throw new Error("This DOM method is not implemented.");
      }, t.prototype.createHTMLDocument = function(e) {
        throw new Error("This DOM method is not implemented.");
      }, t.prototype.getFeature = function(e, n) {
        throw new Error("This DOM method is not implemented.");
      }, t;
    }();
  }).call(z)), ci.exports;
}
var ui = { exports: {} }, li = { exports: {} }, pi = { exports: {} }, Qs;
function vd() {
  return Qs || (Qs = 1, (function() {
    pi.exports = function() {
      function t() {
      }
      return t.prototype.handleError = function(e) {
        throw new Error(e);
      }, t;
    }();
  }).call(z)), pi.exports;
}
var di = { exports: {} }, Zs;
function xd() {
  return Zs || (Zs = 1, (function() {
    di.exports = function() {
      function t(e) {
        this.arr = e || [];
      }
      return Object.defineProperty(t.prototype, "length", {
        get: function() {
          return this.arr.length;
        }
      }), t.prototype.item = function(e) {
        return this.arr[e] || null;
      }, t.prototype.contains = function(e) {
        return this.arr.indexOf(e) !== -1;
      }, t;
    }();
  }).call(z)), di.exports;
}
var ea;
function wd() {
  return ea || (ea = 1, (function() {
    var t, e;
    t = vd(), e = xd(), li.exports = function() {
      function n() {
        this.defaultParams = {
          "canonical-form": !1,
          "cdata-sections": !1,
          comments: !1,
          "datatype-normalization": !1,
          "element-content-whitespace": !0,
          entities: !0,
          "error-handler": new t(),
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
          return new e(Object.keys(this.defaultParams));
        }
      }), n.prototype.getParameter = function(r) {
        return this.params.hasOwnProperty(r) ? this.params[r] : null;
      }, n.prototype.canSetParameter = function(r, i) {
        return !0;
      }, n.prototype.setParameter = function(r, i) {
        return i != null ? this.params[r] = i : delete this.params[r];
      }, n;
    }();
  }).call(z)), li.exports;
}
var fi = { exports: {} }, mi = { exports: {} }, hi = { exports: {} }, ta;
function he() {
  return ta || (ta = 1, (function() {
    hi.exports = {
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
  }).call(z)), hi.exports;
}
var gi = { exports: {} }, na;
function Iu() {
  return na || (na = 1, (function() {
    var t;
    t = he(), Ke(), gi.exports = function() {
      function e(n, r, i) {
        if (this.parent = n, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), r == null)
          throw new Error("Missing attribute name. " + this.debugInfo(r));
        this.name = this.stringify.name(r), this.value = this.stringify.attValue(i), this.type = t.Attribute, this.isId = !1, this.schemaTypeInfo = null;
      }
      return Object.defineProperty(e.prototype, "nodeType", {
        get: function() {
          return this.type;
        }
      }), Object.defineProperty(e.prototype, "ownerElement", {
        get: function() {
          return this.parent;
        }
      }), Object.defineProperty(e.prototype, "textContent", {
        get: function() {
          return this.value;
        },
        set: function(n) {
          return this.value = n || "";
        }
      }), Object.defineProperty(e.prototype, "namespaceURI", {
        get: function() {
          return "";
        }
      }), Object.defineProperty(e.prototype, "prefix", {
        get: function() {
          return "";
        }
      }), Object.defineProperty(e.prototype, "localName", {
        get: function() {
          return this.name;
        }
      }), Object.defineProperty(e.prototype, "specified", {
        get: function() {
          return !0;
        }
      }), e.prototype.clone = function() {
        return Object.create(this);
      }, e.prototype.toString = function(n) {
        return this.options.writer.attribute(this, this.options.writer.filterOptions(n));
      }, e.prototype.debugInfo = function(n) {
        return n = n || this.name, n == null ? "parent: <" + this.parent.name + ">" : "attribute: {" + n + "}, parent: <" + this.parent.name + ">";
      }, e.prototype.isEqualNode = function(n) {
        return !(n.namespaceURI !== this.namespaceURI || n.prefix !== this.prefix || n.localName !== this.localName || n.value !== this.value);
      }, e;
    }();
  }).call(z)), gi.exports;
}
var bi = { exports: {} }, ra;
function Zo() {
  return ra || (ra = 1, (function() {
    bi.exports = function() {
      function t(e) {
        this.nodes = e;
      }
      return Object.defineProperty(t.prototype, "length", {
        get: function() {
          return Object.keys(this.nodes).length || 0;
        }
      }), t.prototype.clone = function() {
        return this.nodes = null;
      }, t.prototype.getNamedItem = function(e) {
        return this.nodes[e];
      }, t.prototype.setNamedItem = function(e) {
        var n;
        return n = this.nodes[e.nodeName], this.nodes[e.nodeName] = e, n || null;
      }, t.prototype.removeNamedItem = function(e) {
        var n;
        return n = this.nodes[e], delete this.nodes[e], n || null;
      }, t.prototype.item = function(e) {
        return this.nodes[Object.keys(this.nodes)[e]] || null;
      }, t.prototype.getNamedItemNS = function(e, n) {
        throw new Error("This DOM method is not implemented.");
      }, t.prototype.setNamedItemNS = function(e) {
        throw new Error("This DOM method is not implemented.");
      }, t.prototype.removeNamedItemNS = function(e, n) {
        throw new Error("This DOM method is not implemented.");
      }, t;
    }();
  }).call(z)), bi.exports;
}
var ia;
function es() {
  return ia || (ia = 1, (function() {
    var t, e, n, r, i, o, s, a, c = function(u, p) {
      for (var d in p)
        l.call(p, d) && (u[d] = p[d]);
      function f() {
        this.constructor = u;
      }
      return f.prototype = p.prototype, u.prototype = new f(), u.__super__ = p.prototype, u;
    }, l = {}.hasOwnProperty;
    a = xt(), s = a.isObject, o = a.isFunction, i = a.getValue, r = Ke(), t = he(), e = Iu(), n = Zo(), mi.exports = function(u) {
      c(p, u);
      function p(d, f, m) {
        var h, g, T, v;
        if (p.__super__.constructor.call(this, d), f == null)
          throw new Error("Missing element name. " + this.debugInfo());
        if (this.name = this.stringify.name(f), this.type = t.Element, this.attribs = {}, this.schemaTypeInfo = null, m != null && this.attribute(m), d.type === t.Document && (this.isRoot = !0, this.documentObject = d, d.rootObject = this, d.children)) {
          for (v = d.children, g = 0, T = v.length; g < T; g++)
            if (h = v[g], h.type === t.DocType) {
              h.name = this.name;
              break;
            }
        }
      }
      return Object.defineProperty(p.prototype, "tagName", {
        get: function() {
          return this.name;
        }
      }), Object.defineProperty(p.prototype, "namespaceURI", {
        get: function() {
          return "";
        }
      }), Object.defineProperty(p.prototype, "prefix", {
        get: function() {
          return "";
        }
      }), Object.defineProperty(p.prototype, "localName", {
        get: function() {
          return this.name;
        }
      }), Object.defineProperty(p.prototype, "id", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(p.prototype, "className", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(p.prototype, "classList", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(p.prototype, "attributes", {
        get: function() {
          return (!this.attributeMap || !this.attributeMap.nodes) && (this.attributeMap = new n(this.attribs)), this.attributeMap;
        }
      }), p.prototype.clone = function() {
        var d, f, m, h;
        m = Object.create(this), m.isRoot && (m.documentObject = null), m.attribs = {}, h = this.attribs;
        for (f in h)
          l.call(h, f) && (d = h[f], m.attribs[f] = d.clone());
        return m.children = [], this.children.forEach(function(g) {
          var T;
          return T = g.clone(), T.parent = m, m.children.push(T);
        }), m;
      }, p.prototype.attribute = function(d, f) {
        var m, h;
        if (d != null && (d = i(d)), s(d))
          for (m in d)
            l.call(d, m) && (h = d[m], this.attribute(m, h));
        else
          o(f) && (f = f.apply()), this.options.keepNullAttributes && f == null ? this.attribs[d] = new e(this, d, "") : f != null && (this.attribs[d] = new e(this, d, f));
        return this;
      }, p.prototype.removeAttribute = function(d) {
        var f, m, h;
        if (d == null)
          throw new Error("Missing attribute name. " + this.debugInfo());
        if (d = i(d), Array.isArray(d))
          for (m = 0, h = d.length; m < h; m++)
            f = d[m], delete this.attribs[f];
        else
          delete this.attribs[d];
        return this;
      }, p.prototype.toString = function(d) {
        return this.options.writer.element(this, this.options.writer.filterOptions(d));
      }, p.prototype.att = function(d, f) {
        return this.attribute(d, f);
      }, p.prototype.a = function(d, f) {
        return this.attribute(d, f);
      }, p.prototype.getAttribute = function(d) {
        return this.attribs.hasOwnProperty(d) ? this.attribs[d].value : null;
      }, p.prototype.setAttribute = function(d, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.getAttributeNode = function(d) {
        return this.attribs.hasOwnProperty(d) ? this.attribs[d] : null;
      }, p.prototype.setAttributeNode = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.removeAttributeNode = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.getElementsByTagName = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.getAttributeNS = function(d, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.setAttributeNS = function(d, f, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.removeAttributeNS = function(d, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.getAttributeNodeNS = function(d, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.setAttributeNodeNS = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.getElementsByTagNameNS = function(d, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.hasAttribute = function(d) {
        return this.attribs.hasOwnProperty(d);
      }, p.prototype.hasAttributeNS = function(d, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.setIdAttribute = function(d, f) {
        return this.attribs.hasOwnProperty(d) ? this.attribs[d].isId : f;
      }, p.prototype.setIdAttributeNS = function(d, f, m) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.setIdAttributeNode = function(d, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.getElementsByTagName = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.getElementsByTagNameNS = function(d, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.getElementsByClassName = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, p.prototype.isEqualNode = function(d) {
        var f, m, h;
        if (!p.__super__.isEqualNode.apply(this, arguments).isEqualNode(d) || d.namespaceURI !== this.namespaceURI || d.prefix !== this.prefix || d.localName !== this.localName || d.attribs.length !== this.attribs.length)
          return !1;
        for (f = m = 0, h = this.attribs.length - 1; 0 <= h ? m <= h : m >= h; f = 0 <= h ? ++m : --m)
          if (!this.attribs[f].isEqualNode(d.attribs[f]))
            return !1;
        return !0;
      }, p;
    }(r);
  }).call(z)), mi.exports;
}
var yi = { exports: {} }, vi = { exports: {} }, oa;
function qr() {
  return oa || (oa = 1, (function() {
    var t, e = function(r, i) {
      for (var o in i)
        n.call(i, o) && (r[o] = i[o]);
      function s() {
        this.constructor = r;
      }
      return s.prototype = i.prototype, r.prototype = new s(), r.__super__ = i.prototype, r;
    }, n = {}.hasOwnProperty;
    t = Ke(), vi.exports = function(r) {
      e(i, r);
      function i(o) {
        i.__super__.constructor.call(this, o), this.value = "";
      }
      return Object.defineProperty(i.prototype, "data", {
        get: function() {
          return this.value;
        },
        set: function(o) {
          return this.value = o || "";
        }
      }), Object.defineProperty(i.prototype, "length", {
        get: function() {
          return this.value.length;
        }
      }), Object.defineProperty(i.prototype, "textContent", {
        get: function() {
          return this.value;
        },
        set: function(o) {
          return this.value = o || "";
        }
      }), i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.substringData = function(o, s) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, i.prototype.appendData = function(o) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, i.prototype.insertData = function(o, s) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, i.prototype.deleteData = function(o, s) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, i.prototype.replaceData = function(o, s, a) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, i.prototype.isEqualNode = function(o) {
        return !(!i.__super__.isEqualNode.apply(this, arguments).isEqualNode(o) || o.data !== this.data);
      }, i;
    }(t);
  }).call(z)), vi.exports;
}
var sa;
function ts() {
  return sa || (sa = 1, (function() {
    var t, e, n = function(i, o) {
      for (var s in o)
        r.call(o, s) && (i[s] = o[s]);
      function a() {
        this.constructor = i;
      }
      return a.prototype = o.prototype, i.prototype = new a(), i.__super__ = o.prototype, i;
    }, r = {}.hasOwnProperty;
    t = he(), e = qr(), yi.exports = function(i) {
      n(o, i);
      function o(s, a) {
        if (o.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing CDATA text. " + this.debugInfo());
        this.name = "#cdata-section", this.type = t.CData, this.value = this.stringify.cdata(a);
      }
      return o.prototype.clone = function() {
        return Object.create(this);
      }, o.prototype.toString = function(s) {
        return this.options.writer.cdata(this, this.options.writer.filterOptions(s));
      }, o;
    }(e);
  }).call(z)), yi.exports;
}
var xi = { exports: {} }, aa;
function ns() {
  return aa || (aa = 1, (function() {
    var t, e, n = function(i, o) {
      for (var s in o)
        r.call(o, s) && (i[s] = o[s]);
      function a() {
        this.constructor = i;
      }
      return a.prototype = o.prototype, i.prototype = new a(), i.__super__ = o.prototype, i;
    }, r = {}.hasOwnProperty;
    t = he(), e = qr(), xi.exports = function(i) {
      n(o, i);
      function o(s, a) {
        if (o.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing comment text. " + this.debugInfo());
        this.name = "#comment", this.type = t.Comment, this.value = this.stringify.comment(a);
      }
      return o.prototype.clone = function() {
        return Object.create(this);
      }, o.prototype.toString = function(s) {
        return this.options.writer.comment(this, this.options.writer.filterOptions(s));
      }, o;
    }(e);
  }).call(z)), xi.exports;
}
var wi = { exports: {} }, ca;
function rs() {
  return ca || (ca = 1, (function() {
    var t, e, n, r = function(o, s) {
      for (var a in s)
        i.call(s, a) && (o[a] = s[a]);
      function c() {
        this.constructor = o;
      }
      return c.prototype = s.prototype, o.prototype = new c(), o.__super__ = s.prototype, o;
    }, i = {}.hasOwnProperty;
    n = xt().isObject, e = Ke(), t = he(), wi.exports = function(o) {
      r(s, o);
      function s(a, c, l, u) {
        var p;
        s.__super__.constructor.call(this, a), n(c) && (p = c, c = p.version, l = p.encoding, u = p.standalone), c || (c = "1.0"), this.type = t.Declaration, this.version = this.stringify.xmlVersion(c), l != null && (this.encoding = this.stringify.xmlEncoding(l)), u != null && (this.standalone = this.stringify.xmlStandalone(u));
      }
      return s.prototype.toString = function(a) {
        return this.options.writer.declaration(this, this.options.writer.filterOptions(a));
      }, s;
    }(e);
  }).call(z)), wi.exports;
}
var Ei = { exports: {} }, Ti = { exports: {} }, ua;
function is() {
  return ua || (ua = 1, (function() {
    var t, e, n = function(i, o) {
      for (var s in o)
        r.call(o, s) && (i[s] = o[s]);
      function a() {
        this.constructor = i;
      }
      return a.prototype = o.prototype, i.prototype = new a(), i.__super__ = o.prototype, i;
    }, r = {}.hasOwnProperty;
    e = Ke(), t = he(), Ti.exports = function(i) {
      n(o, i);
      function o(s, a, c, l, u, p) {
        if (o.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing DTD element name. " + this.debugInfo());
        if (c == null)
          throw new Error("Missing DTD attribute name. " + this.debugInfo(a));
        if (!l)
          throw new Error("Missing DTD attribute type. " + this.debugInfo(a));
        if (!u)
          throw new Error("Missing DTD attribute default. " + this.debugInfo(a));
        if (u.indexOf("#") !== 0 && (u = "#" + u), !u.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(a));
        if (p && !u.match(/^(#FIXED|#DEFAULT)$/))
          throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(a));
        this.elementName = this.stringify.name(a), this.type = t.AttributeDeclaration, this.attributeName = this.stringify.name(c), this.attributeType = this.stringify.dtdAttType(l), p && (this.defaultValue = this.stringify.dtdAttDefault(p)), this.defaultValueType = u;
      }
      return o.prototype.toString = function(s) {
        return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(s));
      }, o;
    }(e);
  }).call(z)), Ti.exports;
}
var Si = { exports: {} }, la;
function os() {
  return la || (la = 1, (function() {
    var t, e, n, r = function(o, s) {
      for (var a in s)
        i.call(s, a) && (o[a] = s[a]);
      function c() {
        this.constructor = o;
      }
      return c.prototype = s.prototype, o.prototype = new c(), o.__super__ = s.prototype, o;
    }, i = {}.hasOwnProperty;
    n = xt().isObject, e = Ke(), t = he(), Si.exports = function(o) {
      r(s, o);
      function s(a, c, l, u) {
        if (s.__super__.constructor.call(this, a), l == null)
          throw new Error("Missing DTD entity name. " + this.debugInfo(l));
        if (u == null)
          throw new Error("Missing DTD entity value. " + this.debugInfo(l));
        if (this.pe = !!c, this.name = this.stringify.name(l), this.type = t.EntityDeclaration, !n(u))
          this.value = this.stringify.dtdEntityValue(u), this.internal = !0;
        else {
          if (!u.pubID && !u.sysID)
            throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(l));
          if (u.pubID && !u.sysID)
            throw new Error("System identifier is required for a public external entity. " + this.debugInfo(l));
          if (this.internal = !1, u.pubID != null && (this.pubID = this.stringify.dtdPubID(u.pubID)), u.sysID != null && (this.sysID = this.stringify.dtdSysID(u.sysID)), u.nData != null && (this.nData = this.stringify.dtdNData(u.nData)), this.pe && this.nData)
            throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(l));
        }
      }
      return Object.defineProperty(s.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      }), Object.defineProperty(s.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      }), Object.defineProperty(s.prototype, "notationName", {
        get: function() {
          return this.nData || null;
        }
      }), Object.defineProperty(s.prototype, "inputEncoding", {
        get: function() {
          return null;
        }
      }), Object.defineProperty(s.prototype, "xmlEncoding", {
        get: function() {
          return null;
        }
      }), Object.defineProperty(s.prototype, "xmlVersion", {
        get: function() {
          return null;
        }
      }), s.prototype.toString = function(a) {
        return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(a));
      }, s;
    }(e);
  }).call(z)), Si.exports;
}
var _i = { exports: {} }, pa;
function ss() {
  return pa || (pa = 1, (function() {
    var t, e, n = function(i, o) {
      for (var s in o)
        r.call(o, s) && (i[s] = o[s]);
      function a() {
        this.constructor = i;
      }
      return a.prototype = o.prototype, i.prototype = new a(), i.__super__ = o.prototype, i;
    }, r = {}.hasOwnProperty;
    e = Ke(), t = he(), _i.exports = function(i) {
      n(o, i);
      function o(s, a, c) {
        if (o.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing DTD element name. " + this.debugInfo());
        c || (c = "(#PCDATA)"), Array.isArray(c) && (c = "(" + c.join(",") + ")"), this.name = this.stringify.name(a), this.type = t.ElementDeclaration, this.value = this.stringify.dtdElementValue(c);
      }
      return o.prototype.toString = function(s) {
        return this.options.writer.dtdElement(this, this.options.writer.filterOptions(s));
      }, o;
    }(e);
  }).call(z)), _i.exports;
}
var Ni = { exports: {} }, da;
function as() {
  return da || (da = 1, (function() {
    var t, e, n = function(i, o) {
      for (var s in o)
        r.call(o, s) && (i[s] = o[s]);
      function a() {
        this.constructor = i;
      }
      return a.prototype = o.prototype, i.prototype = new a(), i.__super__ = o.prototype, i;
    }, r = {}.hasOwnProperty;
    e = Ke(), t = he(), Ni.exports = function(i) {
      n(o, i);
      function o(s, a, c) {
        if (o.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing DTD notation name. " + this.debugInfo(a));
        if (!c.pubID && !c.sysID)
          throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(a));
        this.name = this.stringify.name(a), this.type = t.NotationDeclaration, c.pubID != null && (this.pubID = this.stringify.dtdPubID(c.pubID)), c.sysID != null && (this.sysID = this.stringify.dtdSysID(c.sysID));
      }
      return Object.defineProperty(o.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      }), Object.defineProperty(o.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      }), o.prototype.toString = function(s) {
        return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(s));
      }, o;
    }(e);
  }).call(z)), Ni.exports;
}
var fa;
function cs() {
  return fa || (fa = 1, (function() {
    var t, e, n, r, i, o, s, a, c = function(u, p) {
      for (var d in p)
        l.call(p, d) && (u[d] = p[d]);
      function f() {
        this.constructor = u;
      }
      return f.prototype = p.prototype, u.prototype = new f(), u.__super__ = p.prototype, u;
    }, l = {}.hasOwnProperty;
    a = xt().isObject, s = Ke(), t = he(), e = is(), r = os(), n = ss(), i = as(), o = Zo(), Ei.exports = function(u) {
      c(p, u);
      function p(d, f, m) {
        var h, g, T, v, b, w;
        if (p.__super__.constructor.call(this, d), this.type = t.DocType, d.children) {
          for (v = d.children, g = 0, T = v.length; g < T; g++)
            if (h = v[g], h.type === t.Element) {
              this.name = h.name;
              break;
            }
        }
        this.documentObject = d, a(f) && (b = f, f = b.pubID, m = b.sysID), m == null && (w = [f, m], m = w[0], f = w[1]), f != null && (this.pubID = this.stringify.dtdPubID(f)), m != null && (this.sysID = this.stringify.dtdSysID(m));
      }
      return Object.defineProperty(p.prototype, "entities", {
        get: function() {
          var d, f, m, h, g;
          for (h = {}, g = this.children, f = 0, m = g.length; f < m; f++)
            d = g[f], d.type === t.EntityDeclaration && !d.pe && (h[d.name] = d);
          return new o(h);
        }
      }), Object.defineProperty(p.prototype, "notations", {
        get: function() {
          var d, f, m, h, g;
          for (h = {}, g = this.children, f = 0, m = g.length; f < m; f++)
            d = g[f], d.type === t.NotationDeclaration && (h[d.name] = d);
          return new o(h);
        }
      }), Object.defineProperty(p.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      }), Object.defineProperty(p.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      }), Object.defineProperty(p.prototype, "internalSubset", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), p.prototype.element = function(d, f) {
        var m;
        return m = new n(this, d, f), this.children.push(m), this;
      }, p.prototype.attList = function(d, f, m, h, g) {
        var T;
        return T = new e(this, d, f, m, h, g), this.children.push(T), this;
      }, p.prototype.entity = function(d, f) {
        var m;
        return m = new r(this, !1, d, f), this.children.push(m), this;
      }, p.prototype.pEntity = function(d, f) {
        var m;
        return m = new r(this, !0, d, f), this.children.push(m), this;
      }, p.prototype.notation = function(d, f) {
        var m;
        return m = new i(this, d, f), this.children.push(m), this;
      }, p.prototype.toString = function(d) {
        return this.options.writer.docType(this, this.options.writer.filterOptions(d));
      }, p.prototype.ele = function(d, f) {
        return this.element(d, f);
      }, p.prototype.att = function(d, f, m, h, g) {
        return this.attList(d, f, m, h, g);
      }, p.prototype.ent = function(d, f) {
        return this.entity(d, f);
      }, p.prototype.pent = function(d, f) {
        return this.pEntity(d, f);
      }, p.prototype.not = function(d, f) {
        return this.notation(d, f);
      }, p.prototype.up = function() {
        return this.root() || this.documentObject;
      }, p.prototype.isEqualNode = function(d) {
        return !(!p.__super__.isEqualNode.apply(this, arguments).isEqualNode(d) || d.name !== this.name || d.publicId !== this.publicId || d.systemId !== this.systemId);
      }, p;
    }(s);
  }).call(z)), Ei.exports;
}
var Ai = { exports: {} }, ma;
function us() {
  return ma || (ma = 1, (function() {
    var t, e, n = function(i, o) {
      for (var s in o)
        r.call(o, s) && (i[s] = o[s]);
      function a() {
        this.constructor = i;
      }
      return a.prototype = o.prototype, i.prototype = new a(), i.__super__ = o.prototype, i;
    }, r = {}.hasOwnProperty;
    t = he(), e = Ke(), Ai.exports = function(i) {
      n(o, i);
      function o(s, a) {
        if (o.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing raw text. " + this.debugInfo());
        this.type = t.Raw, this.value = this.stringify.raw(a);
      }
      return o.prototype.clone = function() {
        return Object.create(this);
      }, o.prototype.toString = function(s) {
        return this.options.writer.raw(this, this.options.writer.filterOptions(s));
      }, o;
    }(e);
  }).call(z)), Ai.exports;
}
var Oi = { exports: {} }, ha;
function ls() {
  return ha || (ha = 1, (function() {
    var t, e, n = function(i, o) {
      for (var s in o)
        r.call(o, s) && (i[s] = o[s]);
      function a() {
        this.constructor = i;
      }
      return a.prototype = o.prototype, i.prototype = new a(), i.__super__ = o.prototype, i;
    }, r = {}.hasOwnProperty;
    t = he(), e = qr(), Oi.exports = function(i) {
      n(o, i);
      function o(s, a) {
        if (o.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing element text. " + this.debugInfo());
        this.name = "#text", this.type = t.Text, this.value = this.stringify.text(a);
      }
      return Object.defineProperty(o.prototype, "isElementContentWhitespace", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(o.prototype, "wholeText", {
        get: function() {
          var s, a, c;
          for (c = "", a = this.previousSibling; a; )
            c = a.data + c, a = a.previousSibling;
          for (c += this.data, s = this.nextSibling; s; )
            c = c + s.data, s = s.nextSibling;
          return c;
        }
      }), o.prototype.clone = function() {
        return Object.create(this);
      }, o.prototype.toString = function(s) {
        return this.options.writer.text(this, this.options.writer.filterOptions(s));
      }, o.prototype.splitText = function(s) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, o.prototype.replaceWholeText = function(s) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, o;
    }(e);
  }).call(z)), Oi.exports;
}
var Di = { exports: {} }, ga;
function ps() {
  return ga || (ga = 1, (function() {
    var t, e, n = function(i, o) {
      for (var s in o)
        r.call(o, s) && (i[s] = o[s]);
      function a() {
        this.constructor = i;
      }
      return a.prototype = o.prototype, i.prototype = new a(), i.__super__ = o.prototype, i;
    }, r = {}.hasOwnProperty;
    t = he(), e = qr(), Di.exports = function(i) {
      n(o, i);
      function o(s, a, c) {
        if (o.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing instruction target. " + this.debugInfo());
        this.type = t.ProcessingInstruction, this.target = this.stringify.insTarget(a), this.name = this.target, c && (this.value = this.stringify.insValue(c));
      }
      return o.prototype.clone = function() {
        return Object.create(this);
      }, o.prototype.toString = function(s) {
        return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(s));
      }, o.prototype.isEqualNode = function(s) {
        return !(!o.__super__.isEqualNode.apply(this, arguments).isEqualNode(s) || s.target !== this.target);
      }, o;
    }(e);
  }).call(z)), Di.exports;
}
var Ci = { exports: {} }, ba;
function Ru() {
  return ba || (ba = 1, (function() {
    var t, e, n = function(i, o) {
      for (var s in o)
        r.call(o, s) && (i[s] = o[s]);
      function a() {
        this.constructor = i;
      }
      return a.prototype = o.prototype, i.prototype = new a(), i.__super__ = o.prototype, i;
    }, r = {}.hasOwnProperty;
    e = Ke(), t = he(), Ci.exports = function(i) {
      n(o, i);
      function o(s) {
        o.__super__.constructor.call(this, s), this.type = t.Dummy;
      }
      return o.prototype.clone = function() {
        return Object.create(this);
      }, o.prototype.toString = function(s) {
        return "";
      }, o;
    }(e);
  }).call(z)), Ci.exports;
}
var Ii = { exports: {} }, ya;
function Ed() {
  return ya || (ya = 1, (function() {
    Ii.exports = function() {
      function t(e) {
        this.nodes = e;
      }
      return Object.defineProperty(t.prototype, "length", {
        get: function() {
          return this.nodes.length || 0;
        }
      }), t.prototype.clone = function() {
        return this.nodes = null;
      }, t.prototype.item = function(e) {
        return this.nodes[e] || null;
      }, t;
    }();
  }).call(z)), Ii.exports;
}
var Ri = { exports: {} }, va;
function Td() {
  return va || (va = 1, (function() {
    Ri.exports = {
      Disconnected: 1,
      Preceding: 2,
      Following: 4,
      Contains: 8,
      ContainedBy: 16,
      ImplementationSpecific: 32
    };
  }).call(z)), Ri.exports;
}
var xa;
function Ke() {
  return xa || (xa = 1, (function() {
    var t, e, n, r, i, o, s, a, c, l, u, p, d, f, m, h, g, T = {}.hasOwnProperty;
    g = xt(), h = g.isObject, m = g.isFunction, f = g.isEmpty, d = g.getValue, a = null, n = null, r = null, i = null, o = null, u = null, p = null, l = null, s = null, e = null, c = null, t = null, fi.exports = function() {
      function v(b) {
        this.parent = b, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.value = null, this.children = [], this.baseURI = null, a || (a = es(), n = ts(), r = ns(), i = rs(), o = cs(), u = us(), p = ls(), l = ps(), s = Ru(), e = he(), c = Ed(), Zo(), t = Td());
      }
      return Object.defineProperty(v.prototype, "nodeName", {
        get: function() {
          return this.name;
        }
      }), Object.defineProperty(v.prototype, "nodeType", {
        get: function() {
          return this.type;
        }
      }), Object.defineProperty(v.prototype, "nodeValue", {
        get: function() {
          return this.value;
        }
      }), Object.defineProperty(v.prototype, "parentNode", {
        get: function() {
          return this.parent;
        }
      }), Object.defineProperty(v.prototype, "childNodes", {
        get: function() {
          return (!this.childNodeList || !this.childNodeList.nodes) && (this.childNodeList = new c(this.children)), this.childNodeList;
        }
      }), Object.defineProperty(v.prototype, "firstChild", {
        get: function() {
          return this.children[0] || null;
        }
      }), Object.defineProperty(v.prototype, "lastChild", {
        get: function() {
          return this.children[this.children.length - 1] || null;
        }
      }), Object.defineProperty(v.prototype, "previousSibling", {
        get: function() {
          var b;
          return b = this.parent.children.indexOf(this), this.parent.children[b - 1] || null;
        }
      }), Object.defineProperty(v.prototype, "nextSibling", {
        get: function() {
          var b;
          return b = this.parent.children.indexOf(this), this.parent.children[b + 1] || null;
        }
      }), Object.defineProperty(v.prototype, "ownerDocument", {
        get: function() {
          return this.document() || null;
        }
      }), Object.defineProperty(v.prototype, "textContent", {
        get: function() {
          var b, w, S, D, L;
          if (this.nodeType === e.Element || this.nodeType === e.DocumentFragment) {
            for (L = "", D = this.children, w = 0, S = D.length; w < S; w++)
              b = D[w], b.textContent && (L += b.textContent);
            return L;
          } else
            return null;
        },
        set: function(b) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), v.prototype.setParent = function(b) {
        var w, S, D, L, N;
        for (this.parent = b, b && (this.options = b.options, this.stringify = b.stringify), L = this.children, N = [], S = 0, D = L.length; S < D; S++)
          w = L[S], N.push(w.setParent(this));
        return N;
      }, v.prototype.element = function(b, w, S) {
        var D, L, N, y, O, C, P, M, j, $, q;
        if (C = null, w === null && S == null && (j = [{}, null], w = j[0], S = j[1]), w == null && (w = {}), w = d(w), h(w) || ($ = [w, S], S = $[0], w = $[1]), b != null && (b = d(b)), Array.isArray(b))
          for (N = 0, P = b.length; N < P; N++)
            L = b[N], C = this.element(L);
        else if (m(b))
          C = this.element(b.apply());
        else if (h(b)) {
          for (O in b)
            if (T.call(b, O))
              if (q = b[O], m(q) && (q = q.apply()), !this.options.ignoreDecorators && this.stringify.convertAttKey && O.indexOf(this.stringify.convertAttKey) === 0)
                C = this.attribute(O.substr(this.stringify.convertAttKey.length), q);
              else if (!this.options.separateArrayItems && Array.isArray(q) && f(q))
                C = this.dummy();
              else if (h(q) && f(q))
                C = this.element(O);
              else if (!this.options.keepNullNodes && q == null)
                C = this.dummy();
              else if (!this.options.separateArrayItems && Array.isArray(q))
                for (y = 0, M = q.length; y < M; y++)
                  L = q[y], D = {}, D[O] = L, C = this.element(D);
              else h(q) ? !this.options.ignoreDecorators && this.stringify.convertTextKey && O.indexOf(this.stringify.convertTextKey) === 0 ? C = this.element(q) : (C = this.element(O), C.element(q)) : C = this.element(O, q);
        } else !this.options.keepNullNodes && S === null ? C = this.dummy() : !this.options.ignoreDecorators && this.stringify.convertTextKey && b.indexOf(this.stringify.convertTextKey) === 0 ? C = this.text(S) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && b.indexOf(this.stringify.convertCDataKey) === 0 ? C = this.cdata(S) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && b.indexOf(this.stringify.convertCommentKey) === 0 ? C = this.comment(S) : !this.options.ignoreDecorators && this.stringify.convertRawKey && b.indexOf(this.stringify.convertRawKey) === 0 ? C = this.raw(S) : !this.options.ignoreDecorators && this.stringify.convertPIKey && b.indexOf(this.stringify.convertPIKey) === 0 ? C = this.instruction(b.substr(this.stringify.convertPIKey.length), S) : C = this.node(b, w, S);
        if (C == null)
          throw new Error("Could not create any elements with: " + b + ". " + this.debugInfo());
        return C;
      }, v.prototype.insertBefore = function(b, w, S) {
        var D, L, N, y, O;
        if (b != null && b.type)
          return N = b, y = w, N.setParent(this), y ? (L = children.indexOf(y), O = children.splice(L), children.push(N), Array.prototype.push.apply(children, O)) : children.push(N), N;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(b));
        return L = this.parent.children.indexOf(this), O = this.parent.children.splice(L), D = this.parent.element(b, w, S), Array.prototype.push.apply(this.parent.children, O), D;
      }, v.prototype.insertAfter = function(b, w, S) {
        var D, L, N;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(b));
        return L = this.parent.children.indexOf(this), N = this.parent.children.splice(L + 1), D = this.parent.element(b, w, S), Array.prototype.push.apply(this.parent.children, N), D;
      }, v.prototype.remove = function() {
        var b;
        if (this.isRoot)
          throw new Error("Cannot remove the root element. " + this.debugInfo());
        return b = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [b, b - b + 1].concat([])), this.parent;
      }, v.prototype.node = function(b, w, S) {
        var D, L;
        return b != null && (b = d(b)), w || (w = {}), w = d(w), h(w) || (L = [w, S], S = L[0], w = L[1]), D = new a(this, b, w), S != null && D.text(S), this.children.push(D), D;
      }, v.prototype.text = function(b) {
        var w;
        return h(b) && this.element(b), w = new p(this, b), this.children.push(w), this;
      }, v.prototype.cdata = function(b) {
        var w;
        return w = new n(this, b), this.children.push(w), this;
      }, v.prototype.comment = function(b) {
        var w;
        return w = new r(this, b), this.children.push(w), this;
      }, v.prototype.commentBefore = function(b) {
        var w, S;
        return w = this.parent.children.indexOf(this), S = this.parent.children.splice(w), this.parent.comment(b), Array.prototype.push.apply(this.parent.children, S), this;
      }, v.prototype.commentAfter = function(b) {
        var w, S;
        return w = this.parent.children.indexOf(this), S = this.parent.children.splice(w + 1), this.parent.comment(b), Array.prototype.push.apply(this.parent.children, S), this;
      }, v.prototype.raw = function(b) {
        var w;
        return w = new u(this, b), this.children.push(w), this;
      }, v.prototype.dummy = function() {
        var b;
        return b = new s(this), b;
      }, v.prototype.instruction = function(b, w) {
        var S, D, L, N, y;
        if (b != null && (b = d(b)), w != null && (w = d(w)), Array.isArray(b))
          for (N = 0, y = b.length; N < y; N++)
            S = b[N], this.instruction(S);
        else if (h(b))
          for (S in b)
            T.call(b, S) && (D = b[S], this.instruction(S, D));
        else
          m(w) && (w = w.apply()), L = new l(this, b, w), this.children.push(L);
        return this;
      }, v.prototype.instructionBefore = function(b, w) {
        var S, D;
        return S = this.parent.children.indexOf(this), D = this.parent.children.splice(S), this.parent.instruction(b, w), Array.prototype.push.apply(this.parent.children, D), this;
      }, v.prototype.instructionAfter = function(b, w) {
        var S, D;
        return S = this.parent.children.indexOf(this), D = this.parent.children.splice(S + 1), this.parent.instruction(b, w), Array.prototype.push.apply(this.parent.children, D), this;
      }, v.prototype.declaration = function(b, w, S) {
        var D, L;
        return D = this.document(), L = new i(D, b, w, S), D.children.length === 0 ? D.children.unshift(L) : D.children[0].type === e.Declaration ? D.children[0] = L : D.children.unshift(L), D.root() || D;
      }, v.prototype.dtd = function(b, w) {
        var S, D, L, N, y, O, C, P, M, j;
        for (D = this.document(), L = new o(D, b, w), M = D.children, N = y = 0, C = M.length; y < C; N = ++y)
          if (S = M[N], S.type === e.DocType)
            return D.children[N] = L, L;
        for (j = D.children, N = O = 0, P = j.length; O < P; N = ++O)
          if (S = j[N], S.isRoot)
            return D.children.splice(N, 0, L), L;
        return D.children.push(L), L;
      }, v.prototype.up = function() {
        if (this.isRoot)
          throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
        return this.parent;
      }, v.prototype.root = function() {
        var b;
        for (b = this; b; ) {
          if (b.type === e.Document)
            return b.rootObject;
          if (b.isRoot)
            return b;
          b = b.parent;
        }
      }, v.prototype.document = function() {
        var b;
        for (b = this; b; ) {
          if (b.type === e.Document)
            return b;
          b = b.parent;
        }
      }, v.prototype.end = function(b) {
        return this.document().end(b);
      }, v.prototype.prev = function() {
        var b;
        if (b = this.parent.children.indexOf(this), b < 1)
          throw new Error("Already at the first node. " + this.debugInfo());
        return this.parent.children[b - 1];
      }, v.prototype.next = function() {
        var b;
        if (b = this.parent.children.indexOf(this), b === -1 || b === this.parent.children.length - 1)
          throw new Error("Already at the last node. " + this.debugInfo());
        return this.parent.children[b + 1];
      }, v.prototype.importDocument = function(b) {
        var w;
        return w = b.root().clone(), w.parent = this, w.isRoot = !1, this.children.push(w), this;
      }, v.prototype.debugInfo = function(b) {
        var w, S;
        return b = b || this.name, b == null && !((w = this.parent) != null && w.name) ? "" : b == null ? "parent: <" + this.parent.name + ">" : (S = this.parent) != null && S.name ? "node: <" + b + ">, parent: <" + this.parent.name + ">" : "node: <" + b + ">";
      }, v.prototype.ele = function(b, w, S) {
        return this.element(b, w, S);
      }, v.prototype.nod = function(b, w, S) {
        return this.node(b, w, S);
      }, v.prototype.txt = function(b) {
        return this.text(b);
      }, v.prototype.dat = function(b) {
        return this.cdata(b);
      }, v.prototype.com = function(b) {
        return this.comment(b);
      }, v.prototype.ins = function(b, w) {
        return this.instruction(b, w);
      }, v.prototype.doc = function() {
        return this.document();
      }, v.prototype.dec = function(b, w, S) {
        return this.declaration(b, w, S);
      }, v.prototype.e = function(b, w, S) {
        return this.element(b, w, S);
      }, v.prototype.n = function(b, w, S) {
        return this.node(b, w, S);
      }, v.prototype.t = function(b) {
        return this.text(b);
      }, v.prototype.d = function(b) {
        return this.cdata(b);
      }, v.prototype.c = function(b) {
        return this.comment(b);
      }, v.prototype.r = function(b) {
        return this.raw(b);
      }, v.prototype.i = function(b, w) {
        return this.instruction(b, w);
      }, v.prototype.u = function() {
        return this.up();
      }, v.prototype.importXMLBuilder = function(b) {
        return this.importDocument(b);
      }, v.prototype.replaceChild = function(b, w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, v.prototype.removeChild = function(b) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, v.prototype.appendChild = function(b) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, v.prototype.hasChildNodes = function() {
        return this.children.length !== 0;
      }, v.prototype.cloneNode = function(b) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, v.prototype.normalize = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, v.prototype.isSupported = function(b, w) {
        return !0;
      }, v.prototype.hasAttributes = function() {
        return this.attribs.length !== 0;
      }, v.prototype.compareDocumentPosition = function(b) {
        var w, S;
        return w = this, w === b ? 0 : this.document() !== b.document() ? (S = t.Disconnected | t.ImplementationSpecific, Math.random() < 0.5 ? S |= t.Preceding : S |= t.Following, S) : w.isAncestor(b) ? t.Contains | t.Preceding : w.isDescendant(b) ? t.Contains | t.Following : w.isPreceding(b) ? t.Preceding : t.Following;
      }, v.prototype.isSameNode = function(b) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, v.prototype.lookupPrefix = function(b) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, v.prototype.isDefaultNamespace = function(b) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, v.prototype.lookupNamespaceURI = function(b) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, v.prototype.isEqualNode = function(b) {
        var w, S, D;
        if (b.nodeType !== this.nodeType || b.children.length !== this.children.length)
          return !1;
        for (w = S = 0, D = this.children.length - 1; 0 <= D ? S <= D : S >= D; w = 0 <= D ? ++S : --S)
          if (!this.children[w].isEqualNode(b.children[w]))
            return !1;
        return !0;
      }, v.prototype.getFeature = function(b, w) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, v.prototype.setUserData = function(b, w, S) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, v.prototype.getUserData = function(b) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, v.prototype.contains = function(b) {
        return b ? b === this || this.isDescendant(b) : !1;
      }, v.prototype.isDescendant = function(b) {
        var w, S, D, L, N;
        for (N = this.children, D = 0, L = N.length; D < L; D++)
          if (w = N[D], b === w || (S = w.isDescendant(b), S))
            return !0;
        return !1;
      }, v.prototype.isAncestor = function(b) {
        return b.isDescendant(this);
      }, v.prototype.isPreceding = function(b) {
        var w, S;
        return w = this.treePosition(b), S = this.treePosition(this), w === -1 || S === -1 ? !1 : w < S;
      }, v.prototype.isFollowing = function(b) {
        var w, S;
        return w = this.treePosition(b), S = this.treePosition(this), w === -1 || S === -1 ? !1 : w > S;
      }, v.prototype.treePosition = function(b) {
        var w, S;
        return S = 0, w = !1, this.foreachTreeNode(this.document(), function(D) {
          if (S++, !w && D === b)
            return w = !0;
        }), w ? S : -1;
      }, v.prototype.foreachTreeNode = function(b, w) {
        var S, D, L, N, y;
        for (b || (b = this.document()), N = b.children, D = 0, L = N.length; D < L; D++) {
          if (S = N[D], y = w(S))
            return y;
          if (y = this.foreachTreeNode(S, w), y)
            return y;
        }
      }, v;
    }();
  }).call(z)), fi.exports;
}
var Li = { exports: {} }, wa;
function Lu() {
  return wa || (wa = 1, (function() {
    var t = function(n, r) {
      return function() {
        return n.apply(r, arguments);
      };
    }, e = {}.hasOwnProperty;
    Li.exports = function() {
      function n(r) {
        this.assertLegalName = t(this.assertLegalName, this), this.assertLegalChar = t(this.assertLegalChar, this);
        var i, o, s;
        r || (r = {}), this.options = r, this.options.version || (this.options.version = "1.0"), o = r.stringify || {};
        for (i in o)
          e.call(o, i) && (s = o[i], this[i] = s);
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
        var i, o;
        if (this.options.noValidation)
          return r;
        if (i = "", this.options.version === "1.0") {
          if (i = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, o = r.match(i))
            throw new Error("Invalid character in string: " + r + " at index " + o.index);
        } else if (this.options.version === "1.1" && (i = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, o = r.match(i)))
          throw new Error("Invalid character in string: " + r + " at index " + o.index);
        return r;
      }, n.prototype.assertLegalName = function(r) {
        var i;
        if (this.options.noValidation)
          return r;
        if (this.assertLegalChar(r), i = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/, !r.match(i))
          throw new Error("Invalid character in name");
        return r;
      }, n.prototype.textEscape = function(r) {
        var i;
        return this.options.noValidation ? r : (i = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, r.replace(i, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;"));
      }, n.prototype.attEscape = function(r) {
        var i;
        return this.options.noValidation ? r : (i = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, r.replace(i, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;"));
      }, n;
    }();
  }).call(z)), Li.exports;
}
var Pi = { exports: {} }, Fi = { exports: {} }, ki = { exports: {} }, Ea;
function Br() {
  return Ea || (Ea = 1, (function() {
    ki.exports = {
      None: 0,
      OpenTag: 1,
      InsideTag: 2,
      CloseTag: 3
    };
  }).call(z)), ki.exports;
}
var Ta;
function Pu() {
  return Ta || (Ta = 1, (function() {
    var t, e, n, r = {}.hasOwnProperty;
    n = xt().assign, t = he(), rs(), cs(), ts(), ns(), es(), us(), ls(), ps(), Ru(), is(), ss(), os(), as(), e = Br(), Fi.exports = function() {
      function i(o) {
        var s, a, c;
        o || (o = {}), this.options = o, a = o.writer || {};
        for (s in a)
          r.call(a, s) && (c = a[s], this["_" + s] = this[s], this[s] = c);
      }
      return i.prototype.filterOptions = function(o) {
        var s, a, c, l, u, p, d, f;
        return o || (o = {}), o = n({}, this.options, o), s = {
          writer: this
        }, s.pretty = o.pretty || !1, s.allowEmpty = o.allowEmpty || !1, s.indent = (a = o.indent) != null ? a : "  ", s.newline = (c = o.newline) != null ? c : `
`, s.offset = (l = o.offset) != null ? l : 0, s.dontPrettyTextNodes = (u = (p = o.dontPrettyTextNodes) != null ? p : o.dontprettytextnodes) != null ? u : 0, s.spaceBeforeSlash = (d = (f = o.spaceBeforeSlash) != null ? f : o.spacebeforeslash) != null ? d : "", s.spaceBeforeSlash === !0 && (s.spaceBeforeSlash = " "), s.suppressPrettyCount = 0, s.user = {}, s.state = e.None, s;
      }, i.prototype.indent = function(o, s, a) {
        var c;
        return !s.pretty || s.suppressPrettyCount ? "" : s.pretty && (c = (a || 0) + s.offset + 1, c > 0) ? new Array(c).join(s.indent) : "";
      }, i.prototype.endline = function(o, s, a) {
        return !s.pretty || s.suppressPrettyCount ? "" : s.newline;
      }, i.prototype.attribute = function(o, s, a) {
        var c;
        return this.openAttribute(o, s, a), c = " " + o.name + '="' + o.value + '"', this.closeAttribute(o, s, a), c;
      }, i.prototype.cdata = function(o, s, a) {
        var c;
        return this.openNode(o, s, a), s.state = e.OpenTag, c = this.indent(o, s, a) + "<![CDATA[", s.state = e.InsideTag, c += o.value, s.state = e.CloseTag, c += "]]>" + this.endline(o, s, a), s.state = e.None, this.closeNode(o, s, a), c;
      }, i.prototype.comment = function(o, s, a) {
        var c;
        return this.openNode(o, s, a), s.state = e.OpenTag, c = this.indent(o, s, a) + "<!-- ", s.state = e.InsideTag, c += o.value, s.state = e.CloseTag, c += " -->" + this.endline(o, s, a), s.state = e.None, this.closeNode(o, s, a), c;
      }, i.prototype.declaration = function(o, s, a) {
        var c;
        return this.openNode(o, s, a), s.state = e.OpenTag, c = this.indent(o, s, a) + "<?xml", s.state = e.InsideTag, c += ' version="' + o.version + '"', o.encoding != null && (c += ' encoding="' + o.encoding + '"'), o.standalone != null && (c += ' standalone="' + o.standalone + '"'), s.state = e.CloseTag, c += s.spaceBeforeSlash + "?>", c += this.endline(o, s, a), s.state = e.None, this.closeNode(o, s, a), c;
      }, i.prototype.docType = function(o, s, a) {
        var c, l, u, p, d;
        if (a || (a = 0), this.openNode(o, s, a), s.state = e.OpenTag, p = this.indent(o, s, a), p += "<!DOCTYPE " + o.root().name, o.pubID && o.sysID ? p += ' PUBLIC "' + o.pubID + '" "' + o.sysID + '"' : o.sysID && (p += ' SYSTEM "' + o.sysID + '"'), o.children.length > 0) {
          for (p += " [", p += this.endline(o, s, a), s.state = e.InsideTag, d = o.children, l = 0, u = d.length; l < u; l++)
            c = d[l], p += this.writeChildNode(c, s, a + 1);
          s.state = e.CloseTag, p += "]";
        }
        return s.state = e.CloseTag, p += s.spaceBeforeSlash + ">", p += this.endline(o, s, a), s.state = e.None, this.closeNode(o, s, a), p;
      }, i.prototype.element = function(o, s, a) {
        var c, l, u, p, d, f, m, h, g, T, v, b, w, S;
        a || (a = 0), T = !1, v = "", this.openNode(o, s, a), s.state = e.OpenTag, v += this.indent(o, s, a) + "<" + o.name, b = o.attribs;
        for (g in b)
          r.call(b, g) && (c = b[g], v += this.attribute(c, s, a));
        if (u = o.children.length, p = u === 0 ? null : o.children[0], u === 0 || o.children.every(function(D) {
          return (D.type === t.Text || D.type === t.Raw) && D.value === "";
        }))
          s.allowEmpty ? (v += ">", s.state = e.CloseTag, v += "</" + o.name + ">" + this.endline(o, s, a)) : (s.state = e.CloseTag, v += s.spaceBeforeSlash + "/>" + this.endline(o, s, a));
        else if (s.pretty && u === 1 && (p.type === t.Text || p.type === t.Raw) && p.value != null)
          v += ">", s.state = e.InsideTag, s.suppressPrettyCount++, T = !0, v += this.writeChildNode(p, s, a + 1), s.suppressPrettyCount--, T = !1, s.state = e.CloseTag, v += "</" + o.name + ">" + this.endline(o, s, a);
        else {
          if (s.dontPrettyTextNodes) {
            for (w = o.children, d = 0, m = w.length; d < m; d++)
              if (l = w[d], (l.type === t.Text || l.type === t.Raw) && l.value != null) {
                s.suppressPrettyCount++, T = !0;
                break;
              }
          }
          for (v += ">" + this.endline(o, s, a), s.state = e.InsideTag, S = o.children, f = 0, h = S.length; f < h; f++)
            l = S[f], v += this.writeChildNode(l, s, a + 1);
          s.state = e.CloseTag, v += this.indent(o, s, a) + "</" + o.name + ">", T && s.suppressPrettyCount--, v += this.endline(o, s, a), s.state = e.None;
        }
        return this.closeNode(o, s, a), v;
      }, i.prototype.writeChildNode = function(o, s, a) {
        switch (o.type) {
          case t.CData:
            return this.cdata(o, s, a);
          case t.Comment:
            return this.comment(o, s, a);
          case t.Element:
            return this.element(o, s, a);
          case t.Raw:
            return this.raw(o, s, a);
          case t.Text:
            return this.text(o, s, a);
          case t.ProcessingInstruction:
            return this.processingInstruction(o, s, a);
          case t.Dummy:
            return "";
          case t.Declaration:
            return this.declaration(o, s, a);
          case t.DocType:
            return this.docType(o, s, a);
          case t.AttributeDeclaration:
            return this.dtdAttList(o, s, a);
          case t.ElementDeclaration:
            return this.dtdElement(o, s, a);
          case t.EntityDeclaration:
            return this.dtdEntity(o, s, a);
          case t.NotationDeclaration:
            return this.dtdNotation(o, s, a);
          default:
            throw new Error("Unknown XML node type: " + o.constructor.name);
        }
      }, i.prototype.processingInstruction = function(o, s, a) {
        var c;
        return this.openNode(o, s, a), s.state = e.OpenTag, c = this.indent(o, s, a) + "<?", s.state = e.InsideTag, c += o.target, o.value && (c += " " + o.value), s.state = e.CloseTag, c += s.spaceBeforeSlash + "?>", c += this.endline(o, s, a), s.state = e.None, this.closeNode(o, s, a), c;
      }, i.prototype.raw = function(o, s, a) {
        var c;
        return this.openNode(o, s, a), s.state = e.OpenTag, c = this.indent(o, s, a), s.state = e.InsideTag, c += o.value, s.state = e.CloseTag, c += this.endline(o, s, a), s.state = e.None, this.closeNode(o, s, a), c;
      }, i.prototype.text = function(o, s, a) {
        var c;
        return this.openNode(o, s, a), s.state = e.OpenTag, c = this.indent(o, s, a), s.state = e.InsideTag, c += o.value, s.state = e.CloseTag, c += this.endline(o, s, a), s.state = e.None, this.closeNode(o, s, a), c;
      }, i.prototype.dtdAttList = function(o, s, a) {
        var c;
        return this.openNode(o, s, a), s.state = e.OpenTag, c = this.indent(o, s, a) + "<!ATTLIST", s.state = e.InsideTag, c += " " + o.elementName + " " + o.attributeName + " " + o.attributeType, o.defaultValueType !== "#DEFAULT" && (c += " " + o.defaultValueType), o.defaultValue && (c += ' "' + o.defaultValue + '"'), s.state = e.CloseTag, c += s.spaceBeforeSlash + ">" + this.endline(o, s, a), s.state = e.None, this.closeNode(o, s, a), c;
      }, i.prototype.dtdElement = function(o, s, a) {
        var c;
        return this.openNode(o, s, a), s.state = e.OpenTag, c = this.indent(o, s, a) + "<!ELEMENT", s.state = e.InsideTag, c += " " + o.name + " " + o.value, s.state = e.CloseTag, c += s.spaceBeforeSlash + ">" + this.endline(o, s, a), s.state = e.None, this.closeNode(o, s, a), c;
      }, i.prototype.dtdEntity = function(o, s, a) {
        var c;
        return this.openNode(o, s, a), s.state = e.OpenTag, c = this.indent(o, s, a) + "<!ENTITY", s.state = e.InsideTag, o.pe && (c += " %"), c += " " + o.name, o.value ? c += ' "' + o.value + '"' : (o.pubID && o.sysID ? c += ' PUBLIC "' + o.pubID + '" "' + o.sysID + '"' : o.sysID && (c += ' SYSTEM "' + o.sysID + '"'), o.nData && (c += " NDATA " + o.nData)), s.state = e.CloseTag, c += s.spaceBeforeSlash + ">" + this.endline(o, s, a), s.state = e.None, this.closeNode(o, s, a), c;
      }, i.prototype.dtdNotation = function(o, s, a) {
        var c;
        return this.openNode(o, s, a), s.state = e.OpenTag, c = this.indent(o, s, a) + "<!NOTATION", s.state = e.InsideTag, c += " " + o.name, o.pubID && o.sysID ? c += ' PUBLIC "' + o.pubID + '" "' + o.sysID + '"' : o.pubID ? c += ' PUBLIC "' + o.pubID + '"' : o.sysID && (c += ' SYSTEM "' + o.sysID + '"'), s.state = e.CloseTag, c += s.spaceBeforeSlash + ">" + this.endline(o, s, a), s.state = e.None, this.closeNode(o, s, a), c;
      }, i.prototype.openNode = function(o, s, a) {
      }, i.prototype.closeNode = function(o, s, a) {
      }, i.prototype.openAttribute = function(o, s, a) {
      }, i.prototype.closeAttribute = function(o, s, a) {
      }, i;
    }();
  }).call(z)), Fi.exports;
}
var Sa;
function ds() {
  return Sa || (Sa = 1, (function() {
    var t, e = function(r, i) {
      for (var o in i)
        n.call(i, o) && (r[o] = i[o]);
      function s() {
        this.constructor = r;
      }
      return s.prototype = i.prototype, r.prototype = new s(), r.__super__ = i.prototype, r;
    }, n = {}.hasOwnProperty;
    t = Pu(), Pi.exports = function(r) {
      e(i, r);
      function i(o) {
        i.__super__.constructor.call(this, o);
      }
      return i.prototype.document = function(o, s) {
        var a, c, l, u, p;
        for (s = this.filterOptions(s), u = "", p = o.children, c = 0, l = p.length; c < l; c++)
          a = p[c], u += this.writeChildNode(a, s, 0);
        return s.pretty && u.slice(-s.newline.length) === s.newline && (u = u.slice(0, -s.newline.length)), u;
      }, i;
    }(t);
  }).call(z)), Pi.exports;
}
var _a;
function Fu() {
  return _a || (_a = 1, (function() {
    var t, e, n, r, i, o, s, a = function(l, u) {
      for (var p in u)
        c.call(u, p) && (l[p] = u[p]);
      function d() {
        this.constructor = l;
      }
      return d.prototype = u.prototype, l.prototype = new d(), l.__super__ = u.prototype, l;
    }, c = {}.hasOwnProperty;
    s = xt().isPlainObject, n = Cu(), e = wd(), r = Ke(), t = he(), o = Lu(), i = ds(), ui.exports = function(l) {
      a(u, l);
      function u(p) {
        u.__super__.constructor.call(this, null), this.name = "#document", this.type = t.Document, this.documentURI = null, this.domConfig = new e(), p || (p = {}), p.writer || (p.writer = new i()), this.options = p, this.stringify = new o(p);
      }
      return Object.defineProperty(u.prototype, "implementation", {
        value: new n()
      }), Object.defineProperty(u.prototype, "doctype", {
        get: function() {
          var p, d, f, m;
          for (m = this.children, d = 0, f = m.length; d < f; d++)
            if (p = m[d], p.type === t.DocType)
              return p;
          return null;
        }
      }), Object.defineProperty(u.prototype, "documentElement", {
        get: function() {
          return this.rootObject || null;
        }
      }), Object.defineProperty(u.prototype, "inputEncoding", {
        get: function() {
          return null;
        }
      }), Object.defineProperty(u.prototype, "strictErrorChecking", {
        get: function() {
          return !1;
        }
      }), Object.defineProperty(u.prototype, "xmlEncoding", {
        get: function() {
          return this.children.length !== 0 && this.children[0].type === t.Declaration ? this.children[0].encoding : null;
        }
      }), Object.defineProperty(u.prototype, "xmlStandalone", {
        get: function() {
          return this.children.length !== 0 && this.children[0].type === t.Declaration ? this.children[0].standalone === "yes" : !1;
        }
      }), Object.defineProperty(u.prototype, "xmlVersion", {
        get: function() {
          return this.children.length !== 0 && this.children[0].type === t.Declaration ? this.children[0].version : "1.0";
        }
      }), Object.defineProperty(u.prototype, "URL", {
        get: function() {
          return this.documentURI;
        }
      }), Object.defineProperty(u.prototype, "origin", {
        get: function() {
          return null;
        }
      }), Object.defineProperty(u.prototype, "compatMode", {
        get: function() {
          return null;
        }
      }), Object.defineProperty(u.prototype, "characterSet", {
        get: function() {
          return null;
        }
      }), Object.defineProperty(u.prototype, "contentType", {
        get: function() {
          return null;
        }
      }), u.prototype.end = function(p) {
        var d;
        return d = {}, p ? s(p) && (d = p, p = this.options.writer) : p = this.options.writer, p.document(this, p.filterOptions(d));
      }, u.prototype.toString = function(p) {
        return this.options.writer.document(this, this.options.writer.filterOptions(p));
      }, u.prototype.createElement = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createDocumentFragment = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createTextNode = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createComment = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createCDATASection = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createProcessingInstruction = function(p, d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createAttribute = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createEntityReference = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagName = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.importNode = function(p, d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createElementNS = function(p, d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createAttributeNS = function(p, d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagNameNS = function(p, d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementById = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.adoptNode = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.normalizeDocument = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.renameNode = function(p, d, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByClassName = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createEvent = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createRange = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createNodeIterator = function(p, d, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.createTreeWalker = function(p, d, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u;
    }(r);
  }).call(z)), ui.exports;
}
var qi = { exports: {} }, Na;
function Sd() {
  return Na || (Na = 1, (function() {
    var t, e, n, r, i, o, s, a, c, l, u, p, d, f, m, h, g, T, v, b, w, S, D, L = {}.hasOwnProperty;
    D = xt(), w = D.isObject, b = D.isFunction, S = D.isPlainObject, v = D.getValue, t = he(), p = Fu(), d = es(), r = ts(), i = ns(), m = us(), T = ls(), f = ps(), l = rs(), u = cs(), o = is(), a = os(), s = ss(), c = as(), n = Iu(), g = Lu(), h = ds(), e = Br(), qi.exports = function() {
      function N(y, O, C) {
        var P;
        this.name = "?xml", this.type = t.Document, y || (y = {}), P = {}, y.writer ? S(y.writer) && (P = y.writer, y.writer = new h()) : y.writer = new h(), this.options = y, this.writer = y.writer, this.writerOptions = this.writer.filterOptions(P), this.stringify = new g(y), this.onDataCallback = O || function() {
        }, this.onEndCallback = C || function() {
        }, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null;
      }
      return N.prototype.createChildNode = function(y) {
        var O, C, P, M, j, $, q, F;
        switch (y.type) {
          case t.CData:
            this.cdata(y.value);
            break;
          case t.Comment:
            this.comment(y.value);
            break;
          case t.Element:
            P = {}, q = y.attribs;
            for (C in q)
              L.call(q, C) && (O = q[C], P[C] = O.value);
            this.node(y.name, P);
            break;
          case t.Dummy:
            this.dummy();
            break;
          case t.Raw:
            this.raw(y.value);
            break;
          case t.Text:
            this.text(y.value);
            break;
          case t.ProcessingInstruction:
            this.instruction(y.target, y.value);
            break;
          default:
            throw new Error("This XML node type is not supported in a JS object: " + y.constructor.name);
        }
        for (F = y.children, j = 0, $ = F.length; j < $; j++)
          M = F[j], this.createChildNode(M), M.type === t.Element && this.up();
        return this;
      }, N.prototype.dummy = function() {
        return this;
      }, N.prototype.node = function(y, O, C) {
        var P;
        if (y == null)
          throw new Error("Missing node name.");
        if (this.root && this.currentLevel === -1)
          throw new Error("Document can only have one root node. " + this.debugInfo(y));
        return this.openCurrent(), y = v(y), O == null && (O = {}), O = v(O), w(O) || (P = [O, C], C = P[0], O = P[1]), this.currentNode = new d(this, y, O), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, C != null && this.text(C), this;
      }, N.prototype.element = function(y, O, C) {
        var P, M, j, $, q, F;
        if (this.currentNode && this.currentNode.type === t.DocType)
          this.dtdElement.apply(this, arguments);
        else if (Array.isArray(y) || w(y) || b(y))
          for ($ = this.options.noValidation, this.options.noValidation = !0, F = new p(this.options).element("TEMP_ROOT"), F.element(y), this.options.noValidation = $, q = F.children, M = 0, j = q.length; M < j; M++)
            P = q[M], this.createChildNode(P), P.type === t.Element && this.up();
        else
          this.node(y, O, C);
        return this;
      }, N.prototype.attribute = function(y, O) {
        var C, P;
        if (!this.currentNode || this.currentNode.children)
          throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(y));
        if (y != null && (y = v(y)), w(y))
          for (C in y)
            L.call(y, C) && (P = y[C], this.attribute(C, P));
        else
          b(O) && (O = O.apply()), this.options.keepNullAttributes && O == null ? this.currentNode.attribs[y] = new n(this, y, "") : O != null && (this.currentNode.attribs[y] = new n(this, y, O));
        return this;
      }, N.prototype.text = function(y) {
        var O;
        return this.openCurrent(), O = new T(this, y), this.onData(this.writer.text(O, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, N.prototype.cdata = function(y) {
        var O;
        return this.openCurrent(), O = new r(this, y), this.onData(this.writer.cdata(O, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, N.prototype.comment = function(y) {
        var O;
        return this.openCurrent(), O = new i(this, y), this.onData(this.writer.comment(O, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, N.prototype.raw = function(y) {
        var O;
        return this.openCurrent(), O = new m(this, y), this.onData(this.writer.raw(O, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, N.prototype.instruction = function(y, O) {
        var C, P, M, j, $;
        if (this.openCurrent(), y != null && (y = v(y)), O != null && (O = v(O)), Array.isArray(y))
          for (C = 0, j = y.length; C < j; C++)
            P = y[C], this.instruction(P);
        else if (w(y))
          for (P in y)
            L.call(y, P) && (M = y[P], this.instruction(P, M));
        else
          b(O) && (O = O.apply()), $ = new f(this, y, O), this.onData(this.writer.processingInstruction($, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }, N.prototype.declaration = function(y, O, C) {
        var P;
        if (this.openCurrent(), this.documentStarted)
          throw new Error("declaration() must be the first node.");
        return P = new l(this, y, O, C), this.onData(this.writer.declaration(P, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, N.prototype.doctype = function(y, O, C) {
        if (this.openCurrent(), y == null)
          throw new Error("Missing root node name.");
        if (this.root)
          throw new Error("dtd() must come before the root node.");
        return this.currentNode = new u(this, O, C), this.currentNode.rootNodeName = y, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this;
      }, N.prototype.dtdElement = function(y, O) {
        var C;
        return this.openCurrent(), C = new s(this, y, O), this.onData(this.writer.dtdElement(C, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, N.prototype.attList = function(y, O, C, P, M) {
        var j;
        return this.openCurrent(), j = new o(this, y, O, C, P, M), this.onData(this.writer.dtdAttList(j, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, N.prototype.entity = function(y, O) {
        var C;
        return this.openCurrent(), C = new a(this, !1, y, O), this.onData(this.writer.dtdEntity(C, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, N.prototype.pEntity = function(y, O) {
        var C;
        return this.openCurrent(), C = new a(this, !0, y, O), this.onData(this.writer.dtdEntity(C, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, N.prototype.notation = function(y, O) {
        var C;
        return this.openCurrent(), C = new c(this, y, O), this.onData(this.writer.dtdNotation(C, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, N.prototype.up = function() {
        if (this.currentLevel < 0)
          throw new Error("The document node has no parent.");
        return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this;
      }, N.prototype.end = function() {
        for (; this.currentLevel >= 0; )
          this.up();
        return this.onEnd();
      }, N.prototype.openCurrent = function() {
        if (this.currentNode)
          return this.currentNode.children = !0, this.openNode(this.currentNode);
      }, N.prototype.openNode = function(y) {
        var O, C, P, M;
        if (!y.isOpen) {
          if (!this.root && this.currentLevel === 0 && y.type === t.Element && (this.root = y), C = "", y.type === t.Element) {
            this.writerOptions.state = e.OpenTag, C = this.writer.indent(y, this.writerOptions, this.currentLevel) + "<" + y.name, M = y.attribs;
            for (P in M)
              L.call(M, P) && (O = M[P], C += this.writer.attribute(O, this.writerOptions, this.currentLevel));
            C += (y.children ? ">" : "/>") + this.writer.endline(y, this.writerOptions, this.currentLevel), this.writerOptions.state = e.InsideTag;
          } else
            this.writerOptions.state = e.OpenTag, C = this.writer.indent(y, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + y.rootNodeName, y.pubID && y.sysID ? C += ' PUBLIC "' + y.pubID + '" "' + y.sysID + '"' : y.sysID && (C += ' SYSTEM "' + y.sysID + '"'), y.children ? (C += " [", this.writerOptions.state = e.InsideTag) : (this.writerOptions.state = e.CloseTag, C += ">"), C += this.writer.endline(y, this.writerOptions, this.currentLevel);
          return this.onData(C, this.currentLevel), y.isOpen = !0;
        }
      }, N.prototype.closeNode = function(y) {
        var O;
        if (!y.isClosed)
          return O = "", this.writerOptions.state = e.CloseTag, y.type === t.Element ? O = this.writer.indent(y, this.writerOptions, this.currentLevel) + "</" + y.name + ">" + this.writer.endline(y, this.writerOptions, this.currentLevel) : O = this.writer.indent(y, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(y, this.writerOptions, this.currentLevel), this.writerOptions.state = e.None, this.onData(O, this.currentLevel), y.isClosed = !0;
      }, N.prototype.onData = function(y, O) {
        return this.documentStarted = !0, this.onDataCallback(y, O + 1);
      }, N.prototype.onEnd = function() {
        return this.documentCompleted = !0, this.onEndCallback();
      }, N.prototype.debugInfo = function(y) {
        return y == null ? "" : "node: <" + y + ">";
      }, N.prototype.ele = function() {
        return this.element.apply(this, arguments);
      }, N.prototype.nod = function(y, O, C) {
        return this.node(y, O, C);
      }, N.prototype.txt = function(y) {
        return this.text(y);
      }, N.prototype.dat = function(y) {
        return this.cdata(y);
      }, N.prototype.com = function(y) {
        return this.comment(y);
      }, N.prototype.ins = function(y, O) {
        return this.instruction(y, O);
      }, N.prototype.dec = function(y, O, C) {
        return this.declaration(y, O, C);
      }, N.prototype.dtd = function(y, O, C) {
        return this.doctype(y, O, C);
      }, N.prototype.e = function(y, O, C) {
        return this.element(y, O, C);
      }, N.prototype.n = function(y, O, C) {
        return this.node(y, O, C);
      }, N.prototype.t = function(y) {
        return this.text(y);
      }, N.prototype.d = function(y) {
        return this.cdata(y);
      }, N.prototype.c = function(y) {
        return this.comment(y);
      }, N.prototype.r = function(y) {
        return this.raw(y);
      }, N.prototype.i = function(y, O) {
        return this.instruction(y, O);
      }, N.prototype.att = function() {
        return this.currentNode && this.currentNode.type === t.DocType ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
      }, N.prototype.a = function() {
        return this.currentNode && this.currentNode.type === t.DocType ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
      }, N.prototype.ent = function(y, O) {
        return this.entity(y, O);
      }, N.prototype.pent = function(y, O) {
        return this.pEntity(y, O);
      }, N.prototype.not = function(y, O) {
        return this.notation(y, O);
      }, N;
    }();
  }).call(z)), qi.exports;
}
var Bi = { exports: {} }, Aa;
function _d() {
  return Aa || (Aa = 1, (function() {
    var t, e, n, r = function(o, s) {
      for (var a in s)
        i.call(s, a) && (o[a] = s[a]);
      function c() {
        this.constructor = o;
      }
      return c.prototype = s.prototype, o.prototype = new c(), o.__super__ = s.prototype, o;
    }, i = {}.hasOwnProperty;
    t = he(), n = Pu(), e = Br(), Bi.exports = function(o) {
      r(s, o);
      function s(a, c) {
        this.stream = a, s.__super__.constructor.call(this, c);
      }
      return s.prototype.endline = function(a, c, l) {
        return a.isLastRootNode && c.state === e.CloseTag ? "" : s.__super__.endline.call(this, a, c, l);
      }, s.prototype.document = function(a, c) {
        var l, u, p, d, f, m, h, g, T;
        for (h = a.children, u = p = 0, f = h.length; p < f; u = ++p)
          l = h[u], l.isLastRootNode = u === a.children.length - 1;
        for (c = this.filterOptions(c), g = a.children, T = [], d = 0, m = g.length; d < m; d++)
          l = g[d], T.push(this.writeChildNode(l, c, 0));
        return T;
      }, s.prototype.attribute = function(a, c, l) {
        return this.stream.write(s.__super__.attribute.call(this, a, c, l));
      }, s.prototype.cdata = function(a, c, l) {
        return this.stream.write(s.__super__.cdata.call(this, a, c, l));
      }, s.prototype.comment = function(a, c, l) {
        return this.stream.write(s.__super__.comment.call(this, a, c, l));
      }, s.prototype.declaration = function(a, c, l) {
        return this.stream.write(s.__super__.declaration.call(this, a, c, l));
      }, s.prototype.docType = function(a, c, l) {
        var u, p, d, f;
        if (l || (l = 0), this.openNode(a, c, l), c.state = e.OpenTag, this.stream.write(this.indent(a, c, l)), this.stream.write("<!DOCTYPE " + a.root().name), a.pubID && a.sysID ? this.stream.write(' PUBLIC "' + a.pubID + '" "' + a.sysID + '"') : a.sysID && this.stream.write(' SYSTEM "' + a.sysID + '"'), a.children.length > 0) {
          for (this.stream.write(" ["), this.stream.write(this.endline(a, c, l)), c.state = e.InsideTag, f = a.children, p = 0, d = f.length; p < d; p++)
            u = f[p], this.writeChildNode(u, c, l + 1);
          c.state = e.CloseTag, this.stream.write("]");
        }
        return c.state = e.CloseTag, this.stream.write(c.spaceBeforeSlash + ">"), this.stream.write(this.endline(a, c, l)), c.state = e.None, this.closeNode(a, c, l);
      }, s.prototype.element = function(a, c, l) {
        var u, p, d, f, m, h, g, T, v;
        l || (l = 0), this.openNode(a, c, l), c.state = e.OpenTag, this.stream.write(this.indent(a, c, l) + "<" + a.name), T = a.attribs;
        for (g in T)
          i.call(T, g) && (u = T[g], this.attribute(u, c, l));
        if (d = a.children.length, f = d === 0 ? null : a.children[0], d === 0 || a.children.every(function(b) {
          return (b.type === t.Text || b.type === t.Raw) && b.value === "";
        }))
          c.allowEmpty ? (this.stream.write(">"), c.state = e.CloseTag, this.stream.write("</" + a.name + ">")) : (c.state = e.CloseTag, this.stream.write(c.spaceBeforeSlash + "/>"));
        else if (c.pretty && d === 1 && (f.type === t.Text || f.type === t.Raw) && f.value != null)
          this.stream.write(">"), c.state = e.InsideTag, c.suppressPrettyCount++, this.writeChildNode(f, c, l + 1), c.suppressPrettyCount--, c.state = e.CloseTag, this.stream.write("</" + a.name + ">");
        else {
          for (this.stream.write(">" + this.endline(a, c, l)), c.state = e.InsideTag, v = a.children, m = 0, h = v.length; m < h; m++)
            p = v[m], this.writeChildNode(p, c, l + 1);
          c.state = e.CloseTag, this.stream.write(this.indent(a, c, l) + "</" + a.name + ">");
        }
        return this.stream.write(this.endline(a, c, l)), c.state = e.None, this.closeNode(a, c, l);
      }, s.prototype.processingInstruction = function(a, c, l) {
        return this.stream.write(s.__super__.processingInstruction.call(this, a, c, l));
      }, s.prototype.raw = function(a, c, l) {
        return this.stream.write(s.__super__.raw.call(this, a, c, l));
      }, s.prototype.text = function(a, c, l) {
        return this.stream.write(s.__super__.text.call(this, a, c, l));
      }, s.prototype.dtdAttList = function(a, c, l) {
        return this.stream.write(s.__super__.dtdAttList.call(this, a, c, l));
      }, s.prototype.dtdElement = function(a, c, l) {
        return this.stream.write(s.__super__.dtdElement.call(this, a, c, l));
      }, s.prototype.dtdEntity = function(a, c, l) {
        return this.stream.write(s.__super__.dtdEntity.call(this, a, c, l));
      }, s.prototype.dtdNotation = function(a, c, l) {
        return this.stream.write(s.__super__.dtdNotation.call(this, a, c, l));
      }, s;
    }(n);
  }).call(z)), Bi.exports;
}
var Oa;
function Nd() {
  return Oa || (Oa = 1, (function() {
    var t, e, n, r, i, o, s, a, c, l;
    l = xt(), a = l.assign, c = l.isFunction, n = Cu(), r = Fu(), i = Sd(), s = ds(), o = _d(), t = he(), e = Br(), ut.create = function(u, p, d, f) {
      var m, h;
      if (u == null)
        throw new Error("Root element needs a name.");
      return f = a({}, p, d, f), m = new r(f), h = m.element(u), f.headless || (m.declaration(f), (f.pubID != null || f.sysID != null) && m.dtd(f)), h;
    }, ut.begin = function(u, p, d) {
      var f;
      return c(u) && (f = [u, p], p = f[0], d = f[1], u = {}), p ? new i(u, p, d) : new r(u);
    }, ut.stringWriter = function(u) {
      return new s(u);
    }, ut.streamWriter = function(u, p) {
      return new o(u, p);
    }, ut.implementation = new n(), ut.nodeType = t, ut.writerState = e;
  }).call(z)), ut;
}
var Da;
function Ad() {
  return Da || (Da = 1, (function() {
    var t, e, n, r, i, o = {}.hasOwnProperty;
    t = Nd(), e = Qo().defaults, r = function(s) {
      return typeof s == "string" && (s.indexOf("&") >= 0 || s.indexOf(">") >= 0 || s.indexOf("<") >= 0);
    }, i = function(s) {
      return "<![CDATA[" + n(s) + "]]>";
    }, n = function(s) {
      return s.replace("]]>", "]]]]><![CDATA[>");
    }, ai.Builder = function() {
      function s(a) {
        var c, l, u;
        this.options = {}, l = e["0.2"];
        for (c in l)
          o.call(l, c) && (u = l[c], this.options[c] = u);
        for (c in a)
          o.call(a, c) && (u = a[c], this.options[c] = u);
      }
      return s.prototype.buildObject = function(a) {
        var c, l, u, p, d;
        return c = this.options.attrkey, l = this.options.charkey, Object.keys(a).length === 1 && this.options.rootName === e["0.2"].rootName ? (d = Object.keys(a)[0], a = a[d]) : d = this.options.rootName, u = /* @__PURE__ */ function(f) {
          return function(m, h) {
            var g, T, v, b, w, S;
            if (typeof h != "object")
              f.options.cdata && r(h) ? m.raw(i(h)) : m.txt(h);
            else if (Array.isArray(h)) {
              for (b in h)
                if (o.call(h, b)) {
                  T = h[b];
                  for (w in T)
                    v = T[w], m = u(m.ele(w), v).up();
                }
            } else
              for (w in h)
                if (o.call(h, w))
                  if (T = h[w], w === c) {
                    if (typeof T == "object")
                      for (g in T)
                        S = T[g], m = m.att(g, S);
                  } else if (w === l)
                    f.options.cdata && r(T) ? m = m.raw(i(T)) : m = m.txt(T);
                  else if (Array.isArray(T))
                    for (b in T)
                      o.call(T, b) && (v = T[b], typeof v == "string" ? f.options.cdata && r(v) ? m = m.ele(w).raw(i(v)).up() : m = m.ele(w, v).up() : m = u(m.ele(w), v).up());
                  else typeof T == "object" ? m = u(m.ele(w), T).up() : typeof T == "string" && f.options.cdata && r(T) ? m = m.ele(w).raw(i(T)).up() : (T == null && (T = ""), m = m.ele(w, T.toString()).up());
            return m;
          };
        }(this), p = t.create(d, this.options.xmldec, this.options.doctype, {
          headless: this.options.headless,
          allowSurrogateChars: this.options.allowSurrogateChars
        }), u(p, a).end(this.options.renderOpts);
      }, s;
    }();
  }).call(z)), ai;
}
var Mi = {}, Ui = {}, Ca;
function Od() {
  return Ca || (Ca = 1, function(t) {
    (function(e) {
      e.parser = function(E, x) {
        return new r(E, x);
      }, e.SAXParser = r, e.SAXStream = u, e.createStream = l, e.MAX_BUFFER_LENGTH = 64 * 1024;
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
      e.EVENTS = [
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
      function r(E, x) {
        if (!(this instanceof r))
          return new r(E, x);
        var R = this;
        o(R), R.q = R.c = "", R.bufferCheckPosition = e.MAX_BUFFER_LENGTH, R.opt = x || {}, R.opt.lowercase = R.opt.lowercase || R.opt.lowercasetags, R.looseCase = R.opt.lowercase ? "toLowerCase" : "toUpperCase", R.tags = [], R.closed = R.closedRoot = R.sawRoot = !1, R.tag = R.error = null, R.strict = !!E, R.noscript = !!(E || R.opt.noscript), R.state = y.BEGIN, R.strictEntities = R.opt.strictEntities, R.ENTITIES = R.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), R.attribList = [], R.opt.xmlns && (R.ns = Object.create(h)), R.opt.unquotedAttributeValues === void 0 && (R.opt.unquotedAttributeValues = !E), R.trackPosition = R.opt.position !== !1, R.trackPosition && (R.position = R.line = R.column = 0), C(R, "onready");
      }
      Object.create || (Object.create = function(E) {
        function x() {
        }
        x.prototype = E;
        var R = new x();
        return R;
      }), Object.keys || (Object.keys = function(E) {
        var x = [];
        for (var R in E) E.hasOwnProperty(R) && x.push(R);
        return x;
      });
      function i(E) {
        for (var x = Math.max(e.MAX_BUFFER_LENGTH, 10), R = 0, _ = 0, ne = n.length; _ < ne; _++) {
          var de = E[n[_]].length;
          if (de > x)
            switch (n[_]) {
              case "textNode":
                M(E);
                break;
              case "cdata":
                P(E, "oncdata", E.cdata), E.cdata = "";
                break;
              case "script":
                P(E, "onscript", E.script), E.script = "";
                break;
              default:
                $(E, "Max buffer length exceeded: " + n[_]);
            }
          R = Math.max(R, de);
        }
        var ge = e.MAX_BUFFER_LENGTH - R;
        E.bufferCheckPosition = ge + E.position;
      }
      function o(E) {
        for (var x = 0, R = n.length; x < R; x++)
          E[n[x]] = "";
      }
      function s(E) {
        M(E), E.cdata !== "" && (P(E, "oncdata", E.cdata), E.cdata = ""), E.script !== "" && (P(E, "onscript", E.script), E.script = "");
      }
      r.prototype = {
        end: function() {
          q(this);
        },
        write: tt,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          s(this);
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
      var c = e.EVENTS.filter(function(E) {
        return E !== "error" && E !== "end";
      });
      function l(E, x) {
        return new u(E, x);
      }
      function u(E, x) {
        if (!(this instanceof u))
          return new u(E, x);
        a.apply(this), this._parser = new r(E, x), this.writable = !0, this.readable = !0;
        var R = this;
        this._parser.onend = function() {
          R.emit("end");
        }, this._parser.onerror = function(_) {
          R.emit("error", _), R._parser.error = null;
        }, this._decoder = null, c.forEach(function(_) {
          Object.defineProperty(R, "on" + _, {
            get: function() {
              return R._parser["on" + _];
            },
            set: function(ne) {
              if (!ne)
                return R.removeAllListeners(_), R._parser["on" + _] = ne, ne;
              R.on(_, ne);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      u.prototype = Object.create(a.prototype, {
        constructor: {
          value: u
        }
      }), u.prototype.write = function(E) {
        return typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(E) && (this._decoder || (this._decoder = new TextDecoder("utf8")), E = this._decoder.decode(E, { stream: !0 })), this._parser.write(E.toString()), this.emit("data", E), !0;
      }, u.prototype.end = function(E) {
        if (E && E.length && this.write(E), this._decoder) {
          var x = this._decoder.decode();
          x && (this._parser.write(x), this.emit("data", x));
        }
        return this._parser.end(), !0;
      }, u.prototype.on = function(E, x) {
        var R = this;
        return !R._parser["on" + E] && c.indexOf(E) !== -1 && (R._parser["on" + E] = function() {
          var _ = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          _.splice(0, 0, E), R.emit.apply(R, _);
        }), a.prototype.on.call(R, E, x);
      };
      var p = "[CDATA[", d = "DOCTYPE", f = "http://www.w3.org/XML/1998/namespace", m = "http://www.w3.org/2000/xmlns/", h = { xml: f, xmlns: m }, g = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, T = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, v = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, b = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function w(E) {
        return E === " " || E === `
` || E === "\r" || E === "	";
      }
      function S(E) {
        return E === '"' || E === "'";
      }
      function D(E) {
        return E === ">" || w(E);
      }
      function L(E, x) {
        return E.test(x);
      }
      function N(E, x) {
        return !L(E, x);
      }
      var y = 0;
      e.STATE = {
        BEGIN: y++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: y++,
        // leading whitespace
        TEXT: y++,
        // general stuff
        TEXT_ENTITY: y++,
        // &amp and such.
        OPEN_WAKA: y++,
        // <
        SGML_DECL: y++,
        // <!BLARG
        SGML_DECL_QUOTED: y++,
        // <!BLARG foo "bar
        DOCTYPE: y++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: y++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: y++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: y++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: y++,
        // <!-
        COMMENT: y++,
        // <!--
        COMMENT_ENDING: y++,
        // <!-- blah -
        COMMENT_ENDED: y++,
        // <!-- blah --
        CDATA: y++,
        // <![CDATA[ something
        CDATA_ENDING: y++,
        // ]
        CDATA_ENDING_2: y++,
        // ]]
        PROC_INST: y++,
        // <?hi
        PROC_INST_BODY: y++,
        // <?hi there
        PROC_INST_ENDING: y++,
        // <?hi "there" ?
        OPEN_TAG: y++,
        // <strong
        OPEN_TAG_SLASH: y++,
        // <strong /
        ATTRIB: y++,
        // <a
        ATTRIB_NAME: y++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: y++,
        // <a foo _
        ATTRIB_VALUE: y++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: y++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: y++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: y++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: y++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: y++,
        // <foo bar=&quot
        CLOSE_TAG: y++,
        // </a
        CLOSE_TAG_SAW_WHITE: y++,
        // </a   >
        SCRIPT: y++,
        // <script> ...
        SCRIPT_ENDING: y++
        // <script> ... <
      }, e.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, e.ENTITIES = {
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
      }, Object.keys(e.ENTITIES).forEach(function(E) {
        var x = e.ENTITIES[E], R = typeof x == "number" ? String.fromCharCode(x) : x;
        e.ENTITIES[E] = R;
      });
      for (var O in e.STATE)
        e.STATE[e.STATE[O]] = O;
      y = e.STATE;
      function C(E, x, R) {
        E[x] && E[x](R);
      }
      function P(E, x, R) {
        E.textNode && M(E), C(E, x, R);
      }
      function M(E) {
        E.textNode = j(E.opt, E.textNode), E.textNode && C(E, "ontext", E.textNode), E.textNode = "";
      }
      function j(E, x) {
        return E.trim && (x = x.trim()), E.normalize && (x = x.replace(/\s+/g, " ")), x;
      }
      function $(E, x) {
        return M(E), E.trackPosition && (x += `
Line: ` + E.line + `
Column: ` + E.column + `
Char: ` + E.c), x = new Error(x), E.error = x, C(E, "onerror", x), E;
      }
      function q(E) {
        return E.sawRoot && !E.closedRoot && F(E, "Unclosed root tag"), E.state !== y.BEGIN && E.state !== y.BEGIN_WHITESPACE && E.state !== y.TEXT && $(E, "Unexpected end"), M(E), E.c = "", E.closed = !0, C(E, "onend"), r.call(E, E.strict, E.opt), E;
      }
      function F(E, x) {
        if (typeof E != "object" || !(E instanceof r))
          throw new Error("bad call to strictFail");
        E.strict && $(E, x);
      }
      function J(E) {
        E.strict || (E.tagName = E.tagName[E.looseCase]());
        var x = E.tags[E.tags.length - 1] || E, R = E.tag = { name: E.tagName, attributes: {} };
        E.opt.xmlns && (R.ns = x.ns), E.attribList.length = 0, P(E, "onopentagstart", R);
      }
      function K(E, x) {
        var R = E.indexOf(":"), _ = R < 0 ? ["", E] : E.split(":"), ne = _[0], de = _[1];
        return x && E === "xmlns" && (ne = "xmlns", de = ""), { prefix: ne, local: de };
      }
      function V(E) {
        if (E.strict || (E.attribName = E.attribName[E.looseCase]()), E.attribList.indexOf(E.attribName) !== -1 || E.tag.attributes.hasOwnProperty(E.attribName)) {
          E.attribName = E.attribValue = "";
          return;
        }
        if (E.opt.xmlns) {
          var x = K(E.attribName, !0), R = x.prefix, _ = x.local;
          if (R === "xmlns")
            if (_ === "xml" && E.attribValue !== f)
              F(
                E,
                "xml: prefix must be bound to " + f + `
Actual: ` + E.attribValue
              );
            else if (_ === "xmlns" && E.attribValue !== m)
              F(
                E,
                "xmlns: prefix must be bound to " + m + `
Actual: ` + E.attribValue
              );
            else {
              var ne = E.tag, de = E.tags[E.tags.length - 1] || E;
              ne.ns === de.ns && (ne.ns = Object.create(de.ns)), ne.ns[_] = E.attribValue;
            }
          E.attribList.push([E.attribName, E.attribValue]);
        } else
          E.tag.attributes[E.attribName] = E.attribValue, P(E, "onattribute", {
            name: E.attribName,
            value: E.attribValue
          });
        E.attribName = E.attribValue = "";
      }
      function U(E, x) {
        if (E.opt.xmlns) {
          var R = E.tag, _ = K(E.tagName);
          R.prefix = _.prefix, R.local = _.local, R.uri = R.ns[_.prefix] || "", R.prefix && !R.uri && (F(
            E,
            "Unbound namespace prefix: " + JSON.stringify(E.tagName)
          ), R.uri = _.prefix);
          var ne = E.tags[E.tags.length - 1] || E;
          R.ns && ne.ns !== R.ns && Object.keys(R.ns).forEach(function(Xs) {
            P(E, "onopennamespace", {
              prefix: Xs,
              uri: R.ns[Xs]
            });
          });
          for (var de = 0, ge = E.attribList.length; de < ge; de++) {
            var ke = E.attribList[de], qe = ke[0], Yt = ke[1], we = K(qe, !0), ct = we.prefix, td = we.local, Hs = ct === "" ? "" : R.ns[ct] || "", ii = {
              name: qe,
              value: Yt,
              prefix: ct,
              local: td,
              uri: Hs
            };
            ct && ct !== "xmlns" && !Hs && (F(
              E,
              "Unbound namespace prefix: " + JSON.stringify(ct)
            ), ii.uri = ct), E.tag.attributes[qe] = ii, P(E, "onattribute", ii);
          }
          E.attribList.length = 0;
        }
        E.tag.isSelfClosing = !!x, E.sawRoot = !0, E.tags.push(E.tag), P(E, "onopentag", E.tag), x || (!E.noscript && E.tagName.toLowerCase() === "script" ? E.state = y.SCRIPT : E.state = y.TEXT, E.tag = null, E.tagName = ""), E.attribName = E.attribValue = "", E.attribList.length = 0;
      }
      function ee(E) {
        if (!E.tagName) {
          F(E, "Weird empty close tag."), E.textNode += "</>", E.state = y.TEXT;
          return;
        }
        if (E.script) {
          if (E.tagName !== "script") {
            E.script += "</" + E.tagName + ">", E.tagName = "", E.state = y.SCRIPT;
            return;
          }
          P(E, "onscript", E.script), E.script = "";
        }
        var x = E.tags.length, R = E.tagName;
        E.strict || (R = R[E.looseCase]());
        for (var _ = R; x--; ) {
          var ne = E.tags[x];
          if (ne.name !== _)
            F(E, "Unexpected close tag");
          else
            break;
        }
        if (x < 0) {
          F(E, "Unmatched closing tag: " + E.tagName), E.textNode += "</" + E.tagName + ">", E.state = y.TEXT;
          return;
        }
        E.tagName = R;
        for (var de = E.tags.length; de-- > x; ) {
          var ge = E.tag = E.tags.pop();
          E.tagName = E.tag.name, P(E, "onclosetag", E.tagName);
          var ke = {};
          for (var qe in ge.ns)
            ke[qe] = ge.ns[qe];
          var Yt = E.tags[E.tags.length - 1] || E;
          E.opt.xmlns && ge.ns !== Yt.ns && Object.keys(ge.ns).forEach(function(we) {
            var ct = ge.ns[we];
            P(E, "onclosenamespace", { prefix: we, uri: ct });
          });
        }
        x === 0 && (E.closedRoot = !0), E.tagName = E.attribValue = E.attribName = "", E.attribList.length = 0, E.state = y.TEXT;
      }
      function Oe(E) {
        var x = E.entity, R = x.toLowerCase(), _, ne = "";
        return E.ENTITIES[x] ? E.ENTITIES[x] : E.ENTITIES[R] ? E.ENTITIES[R] : (x = R, x.charAt(0) === "#" && (x.charAt(1) === "x" ? (x = x.slice(2), _ = parseInt(x, 16), ne = _.toString(16)) : (x = x.slice(1), _ = parseInt(x, 10), ne = _.toString(10))), x = x.replace(/^0+/, ""), isNaN(_) || ne.toLowerCase() !== x || _ < 0 || _ > 1114111 ? (F(E, "Invalid character entity"), "&" + E.entity + ";") : String.fromCodePoint(_));
      }
      function oe(E, x) {
        x === "<" ? (E.state = y.OPEN_WAKA, E.startTagPosition = E.position) : w(x) || (F(E, "Non-whitespace before first tag."), E.textNode = x, E.state = y.TEXT);
      }
      function De(E, x) {
        var R = "";
        return x < E.length && (R = E.charAt(x)), R;
      }
      function tt(E) {
        var x = this;
        if (this.error)
          throw this.error;
        if (x.closed)
          return $(
            x,
            "Cannot write after close. Assign an onready handler."
          );
        if (E === null)
          return q(x);
        typeof E == "object" && (E = E.toString());
        for (var R = 0, _ = ""; _ = De(E, R++), x.c = _, !!_; )
          switch (x.trackPosition && (x.position++, _ === `
` ? (x.line++, x.column = 0) : x.column++), x.state) {
            case y.BEGIN:
              if (x.state = y.BEGIN_WHITESPACE, _ === "\uFEFF")
                continue;
              oe(x, _);
              continue;
            case y.BEGIN_WHITESPACE:
              oe(x, _);
              continue;
            case y.TEXT:
              if (x.sawRoot && !x.closedRoot) {
                for (var de = R - 1; _ && _ !== "<" && _ !== "&"; )
                  _ = De(E, R++), _ && x.trackPosition && (x.position++, _ === `
` ? (x.line++, x.column = 0) : x.column++);
                x.textNode += E.substring(de, R - 1);
              }
              _ === "<" && !(x.sawRoot && x.closedRoot && !x.strict) ? (x.state = y.OPEN_WAKA, x.startTagPosition = x.position) : (!w(_) && (!x.sawRoot || x.closedRoot) && F(x, "Text data outside of root node."), _ === "&" ? x.state = y.TEXT_ENTITY : x.textNode += _);
              continue;
            case y.SCRIPT:
              _ === "<" ? x.state = y.SCRIPT_ENDING : x.script += _;
              continue;
            case y.SCRIPT_ENDING:
              _ === "/" ? x.state = y.CLOSE_TAG : (x.script += "<" + _, x.state = y.SCRIPT);
              continue;
            case y.OPEN_WAKA:
              if (_ === "!")
                x.state = y.SGML_DECL, x.sgmlDecl = "";
              else if (!w(_)) if (L(g, _))
                x.state = y.OPEN_TAG, x.tagName = _;
              else if (_ === "/")
                x.state = y.CLOSE_TAG, x.tagName = "";
              else if (_ === "?")
                x.state = y.PROC_INST, x.procInstName = x.procInstBody = "";
              else {
                if (F(x, "Unencoded <"), x.startTagPosition + 1 < x.position) {
                  var ne = x.position - x.startTagPosition;
                  _ = new Array(ne).join(" ") + _;
                }
                x.textNode += "<" + _, x.state = y.TEXT;
              }
              continue;
            case y.SGML_DECL:
              if (x.sgmlDecl + _ === "--") {
                x.state = y.COMMENT, x.comment = "", x.sgmlDecl = "";
                continue;
              }
              x.doctype && x.doctype !== !0 && x.sgmlDecl ? (x.state = y.DOCTYPE_DTD, x.doctype += "<!" + x.sgmlDecl + _, x.sgmlDecl = "") : (x.sgmlDecl + _).toUpperCase() === p ? (P(x, "onopencdata"), x.state = y.CDATA, x.sgmlDecl = "", x.cdata = "") : (x.sgmlDecl + _).toUpperCase() === d ? (x.state = y.DOCTYPE, (x.doctype || x.sawRoot) && F(
                x,
                "Inappropriately located doctype declaration"
              ), x.doctype = "", x.sgmlDecl = "") : _ === ">" ? (P(x, "onsgmldeclaration", x.sgmlDecl), x.sgmlDecl = "", x.state = y.TEXT) : (S(_) && (x.state = y.SGML_DECL_QUOTED), x.sgmlDecl += _);
              continue;
            case y.SGML_DECL_QUOTED:
              _ === x.q && (x.state = y.SGML_DECL, x.q = ""), x.sgmlDecl += _;
              continue;
            case y.DOCTYPE:
              _ === ">" ? (x.state = y.TEXT, P(x, "ondoctype", x.doctype), x.doctype = !0) : (x.doctype += _, _ === "[" ? x.state = y.DOCTYPE_DTD : S(_) && (x.state = y.DOCTYPE_QUOTED, x.q = _));
              continue;
            case y.DOCTYPE_QUOTED:
              x.doctype += _, _ === x.q && (x.q = "", x.state = y.DOCTYPE);
              continue;
            case y.DOCTYPE_DTD:
              _ === "]" ? (x.doctype += _, x.state = y.DOCTYPE) : _ === "<" ? (x.state = y.OPEN_WAKA, x.startTagPosition = x.position) : S(_) ? (x.doctype += _, x.state = y.DOCTYPE_DTD_QUOTED, x.q = _) : x.doctype += _;
              continue;
            case y.DOCTYPE_DTD_QUOTED:
              x.doctype += _, _ === x.q && (x.state = y.DOCTYPE_DTD, x.q = "");
              continue;
            case y.COMMENT:
              _ === "-" ? x.state = y.COMMENT_ENDING : x.comment += _;
              continue;
            case y.COMMENT_ENDING:
              _ === "-" ? (x.state = y.COMMENT_ENDED, x.comment = j(x.opt, x.comment), x.comment && P(x, "oncomment", x.comment), x.comment = "") : (x.comment += "-" + _, x.state = y.COMMENT);
              continue;
            case y.COMMENT_ENDED:
              _ !== ">" ? (F(x, "Malformed comment"), x.comment += "--" + _, x.state = y.COMMENT) : x.doctype && x.doctype !== !0 ? x.state = y.DOCTYPE_DTD : x.state = y.TEXT;
              continue;
            case y.CDATA:
              for (var de = R - 1; _ && _ !== "]"; )
                _ = De(E, R++), _ && x.trackPosition && (x.position++, _ === `
` ? (x.line++, x.column = 0) : x.column++);
              x.cdata += E.substring(de, R - 1), _ === "]" && (x.state = y.CDATA_ENDING);
              continue;
            case y.CDATA_ENDING:
              _ === "]" ? x.state = y.CDATA_ENDING_2 : (x.cdata += "]" + _, x.state = y.CDATA);
              continue;
            case y.CDATA_ENDING_2:
              _ === ">" ? (x.cdata && P(x, "oncdata", x.cdata), P(x, "onclosecdata"), x.cdata = "", x.state = y.TEXT) : _ === "]" ? x.cdata += "]" : (x.cdata += "]]" + _, x.state = y.CDATA);
              continue;
            case y.PROC_INST:
              _ === "?" ? x.state = y.PROC_INST_ENDING : w(_) ? x.state = y.PROC_INST_BODY : x.procInstName += _;
              continue;
            case y.PROC_INST_BODY:
              if (!x.procInstBody && w(_))
                continue;
              _ === "?" ? x.state = y.PROC_INST_ENDING : x.procInstBody += _;
              continue;
            case y.PROC_INST_ENDING:
              _ === ">" ? (P(x, "onprocessinginstruction", {
                name: x.procInstName,
                body: x.procInstBody
              }), x.procInstName = x.procInstBody = "", x.state = y.TEXT) : (x.procInstBody += "?" + _, x.state = y.PROC_INST_BODY);
              continue;
            case y.OPEN_TAG:
              L(T, _) ? x.tagName += _ : (J(x), _ === ">" ? U(x) : _ === "/" ? x.state = y.OPEN_TAG_SLASH : (w(_) || F(x, "Invalid character in tag name"), x.state = y.ATTRIB));
              continue;
            case y.OPEN_TAG_SLASH:
              _ === ">" ? (U(x, !0), ee(x)) : (F(
                x,
                "Forward-slash in opening tag not followed by >"
              ), x.state = y.ATTRIB);
              continue;
            case y.ATTRIB:
              if (w(_))
                continue;
              _ === ">" ? U(x) : _ === "/" ? x.state = y.OPEN_TAG_SLASH : L(g, _) ? (x.attribName = _, x.attribValue = "", x.state = y.ATTRIB_NAME) : F(x, "Invalid attribute name");
              continue;
            case y.ATTRIB_NAME:
              _ === "=" ? x.state = y.ATTRIB_VALUE : _ === ">" ? (F(x, "Attribute without value"), x.attribValue = x.attribName, V(x), U(x)) : w(_) ? x.state = y.ATTRIB_NAME_SAW_WHITE : L(T, _) ? x.attribName += _ : F(x, "Invalid attribute name");
              continue;
            case y.ATTRIB_NAME_SAW_WHITE:
              if (_ === "=")
                x.state = y.ATTRIB_VALUE;
              else {
                if (w(_))
                  continue;
                F(x, "Attribute without value"), x.tag.attributes[x.attribName] = "", x.attribValue = "", P(x, "onattribute", {
                  name: x.attribName,
                  value: ""
                }), x.attribName = "", _ === ">" ? U(x) : L(g, _) ? (x.attribName = _, x.state = y.ATTRIB_NAME) : (F(x, "Invalid attribute name"), x.state = y.ATTRIB);
              }
              continue;
            case y.ATTRIB_VALUE:
              if (w(_))
                continue;
              S(_) ? (x.q = _, x.state = y.ATTRIB_VALUE_QUOTED) : (x.opt.unquotedAttributeValues || $(x, "Unquoted attribute value"), x.state = y.ATTRIB_VALUE_UNQUOTED, x.attribValue = _);
              continue;
            case y.ATTRIB_VALUE_QUOTED:
              if (_ !== x.q) {
                _ === "&" ? x.state = y.ATTRIB_VALUE_ENTITY_Q : x.attribValue += _;
                continue;
              }
              V(x), x.q = "", x.state = y.ATTRIB_VALUE_CLOSED;
              continue;
            case y.ATTRIB_VALUE_CLOSED:
              w(_) ? x.state = y.ATTRIB : _ === ">" ? U(x) : _ === "/" ? x.state = y.OPEN_TAG_SLASH : L(g, _) ? (F(x, "No whitespace between attributes"), x.attribName = _, x.attribValue = "", x.state = y.ATTRIB_NAME) : F(x, "Invalid attribute name");
              continue;
            case y.ATTRIB_VALUE_UNQUOTED:
              if (!D(_)) {
                _ === "&" ? x.state = y.ATTRIB_VALUE_ENTITY_U : x.attribValue += _;
                continue;
              }
              V(x), _ === ">" ? U(x) : x.state = y.ATTRIB;
              continue;
            case y.CLOSE_TAG:
              if (x.tagName)
                _ === ">" ? ee(x) : L(T, _) ? x.tagName += _ : x.script ? (x.script += "</" + x.tagName + _, x.tagName = "", x.state = y.SCRIPT) : (w(_) || F(x, "Invalid tagname in closing tag"), x.state = y.CLOSE_TAG_SAW_WHITE);
              else {
                if (w(_))
                  continue;
                N(g, _) ? x.script ? (x.script += "</" + _, x.state = y.SCRIPT) : F(x, "Invalid tagname in closing tag.") : x.tagName = _;
              }
              continue;
            case y.CLOSE_TAG_SAW_WHITE:
              if (w(_))
                continue;
              _ === ">" ? ee(x) : F(x, "Invalid characters in closing tag");
              continue;
            case y.TEXT_ENTITY:
            case y.ATTRIB_VALUE_ENTITY_Q:
            case y.ATTRIB_VALUE_ENTITY_U:
              var ge, ke;
              switch (x.state) {
                case y.TEXT_ENTITY:
                  ge = y.TEXT, ke = "textNode";
                  break;
                case y.ATTRIB_VALUE_ENTITY_Q:
                  ge = y.ATTRIB_VALUE_QUOTED, ke = "attribValue";
                  break;
                case y.ATTRIB_VALUE_ENTITY_U:
                  ge = y.ATTRIB_VALUE_UNQUOTED, ke = "attribValue";
                  break;
              }
              if (_ === ";") {
                var qe = Oe(x);
                x.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(qe) ? (x.entity = "", x.state = ge, x.write(qe)) : (x[ke] += qe, x.entity = "", x.state = ge);
              } else L(x.entity.length ? b : v, _) ? x.entity += _ : (F(x, "Invalid character in entity name"), x[ke] += "&" + x.entity + _, x.entity = "", x.state = ge);
              continue;
            default:
              throw new Error(x, "Unknown state: " + x.state);
          }
        return x.position >= x.bufferCheckPosition && i(x), x;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var E = String.fromCharCode, x = Math.floor, R = function() {
          var _ = 16384, ne = [], de, ge, ke = -1, qe = arguments.length;
          if (!qe)
            return "";
          for (var Yt = ""; ++ke < qe; ) {
            var we = Number(arguments[ke]);
            if (!isFinite(we) || // `NaN`, `+Infinity`, or `-Infinity`
            we < 0 || // not a valid Unicode code point
            we > 1114111 || // not a valid Unicode code point
            x(we) !== we)
              throw RangeError("Invalid code point: " + we);
            we <= 65535 ? ne.push(we) : (we -= 65536, de = (we >> 10) + 55296, ge = we % 1024 + 56320, ne.push(de, ge)), (ke + 1 === qe || ne.length > _) && (Yt += E.apply(null, ne), ne.length = 0);
          }
          return Yt;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: R,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = R;
      }();
    })(t);
  }(Ui)), Ui;
}
var ji = {}, Ia;
function Dd() {
  return Ia || (Ia = 1, (function() {
    ji.stripBOM = function(t) {
      return t[0] === "\uFEFF" ? t.substring(1) : t;
    };
  }).call(z)), ji;
}
var Ct = {}, Ra;
function ku() {
  return Ra || (Ra = 1, (function() {
    var t;
    t = new RegExp(/(?!xmlns)^.*:/), Ct.normalize = function(e) {
      return e.toLowerCase();
    }, Ct.firstCharLowerCase = function(e) {
      return e.charAt(0).toLowerCase() + e.slice(1);
    }, Ct.stripPrefix = function(e) {
      return e.replace(t, "");
    }, Ct.parseNumbers = function(e) {
      return isNaN(e) || (e = e % 1 === 0 ? parseInt(e, 10) : parseFloat(e)), e;
    }, Ct.parseBooleans = function(e) {
      return /^(?:true|false)$/i.test(e) && (e = e.toLowerCase() === "true"), e;
    };
  }).call(z)), Ct;
}
var La;
function Cd() {
  return La || (La = 1, function(t) {
    (function() {
      var e, n, r, i, o, s, a, c, l = function(d, f) {
        return function() {
          return d.apply(f, arguments);
        };
      }, u = function(d, f) {
        for (var m in f)
          p.call(f, m) && (d[m] = f[m]);
        function h() {
          this.constructor = d;
        }
        return h.prototype = f.prototype, d.prototype = new h(), d.__super__ = f.prototype, d;
      }, p = {}.hasOwnProperty;
      a = Od(), r = ad, e = Dd(), s = ku(), c = ud.setImmediate, n = Qo().defaults, i = function(d) {
        return typeof d == "object" && d != null && Object.keys(d).length === 0;
      }, o = function(d, f, m) {
        var h, g, T;
        for (h = 0, g = d.length; h < g; h++)
          T = d[h], f = T(f, m);
        return f;
      }, t.Parser = function(d) {
        u(f, d);
        function f(m) {
          this.parseStringPromise = l(this.parseStringPromise, this), this.parseString = l(this.parseString, this), this.reset = l(this.reset, this), this.assignOrPush = l(this.assignOrPush, this), this.processAsync = l(this.processAsync, this);
          var h, g, T;
          if (!(this instanceof t.Parser))
            return new t.Parser(m);
          this.options = {}, g = n["0.2"];
          for (h in g)
            p.call(g, h) && (T = g[h], this.options[h] = T);
          for (h in m)
            p.call(m, h) && (T = m[h], this.options[h] = T);
          this.options.xmlns && (this.options.xmlnskey = this.options.attrkey + "ns"), this.options.normalizeTags && (this.options.tagNameProcessors || (this.options.tagNameProcessors = []), this.options.tagNameProcessors.unshift(s.normalize)), this.reset();
        }
        return f.prototype.processAsync = function() {
          var m, h;
          try {
            return this.remaining.length <= this.options.chunkSize ? (m = this.remaining, this.remaining = "", this.saxParser = this.saxParser.write(m), this.saxParser.close()) : (m = this.remaining.substr(0, this.options.chunkSize), this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length), this.saxParser = this.saxParser.write(m), c(this.processAsync));
          } catch (g) {
            if (h = g, !this.saxParser.errThrown)
              return this.saxParser.errThrown = !0, this.emit(h);
          }
        }, f.prototype.assignOrPush = function(m, h, g) {
          return h in m ? (m[h] instanceof Array || (m[h] = [m[h]]), m[h].push(g)) : this.options.explicitArray ? m[h] = [g] : m[h] = g;
        }, f.prototype.reset = function() {
          var m, h, g, T;
          return this.removeAllListeners(), this.saxParser = a.parser(this.options.strict, {
            trim: !1,
            normalize: !1,
            xmlns: this.options.xmlns
          }), this.saxParser.errThrown = !1, this.saxParser.onerror = /* @__PURE__ */ function(v) {
            return function(b) {
              if (v.saxParser.resume(), !v.saxParser.errThrown)
                return v.saxParser.errThrown = !0, v.emit("error", b);
            };
          }(this), this.saxParser.onend = /* @__PURE__ */ function(v) {
            return function() {
              if (!v.saxParser.ended)
                return v.saxParser.ended = !0, v.emit("end", v.resultObject);
            };
          }(this), this.saxParser.ended = !1, this.EXPLICIT_CHARKEY = this.options.explicitCharkey, this.resultObject = null, T = [], m = this.options.attrkey, h = this.options.charkey, this.saxParser.onopentag = /* @__PURE__ */ function(v) {
            return function(b) {
              var w, S, D, L, N;
              if (D = /* @__PURE__ */ Object.create(null), D[h] = "", !v.options.ignoreAttrs) {
                N = b.attributes;
                for (w in N)
                  p.call(N, w) && (!(m in D) && !v.options.mergeAttrs && (D[m] = /* @__PURE__ */ Object.create(null)), S = v.options.attrValueProcessors ? o(v.options.attrValueProcessors, b.attributes[w], w) : b.attributes[w], L = v.options.attrNameProcessors ? o(v.options.attrNameProcessors, w) : w, v.options.mergeAttrs ? v.assignOrPush(D, L, S) : D[m][L] = S);
              }
              return D["#name"] = v.options.tagNameProcessors ? o(v.options.tagNameProcessors, b.name) : b.name, v.options.xmlns && (D[v.options.xmlnskey] = {
                uri: b.uri,
                local: b.local
              }), T.push(D);
            };
          }(this), this.saxParser.onclosetag = /* @__PURE__ */ function(v) {
            return function() {
              var b, w, S, D, L, N, y, O, C, P;
              if (N = T.pop(), L = N["#name"], (!v.options.explicitChildren || !v.options.preserveChildrenOrder) && delete N["#name"], N.cdata === !0 && (b = N.cdata, delete N.cdata), C = T[T.length - 1], N[h].match(/^\s*$/) && !b ? (w = N[h], delete N[h]) : (v.options.trim && (N[h] = N[h].trim()), v.options.normalize && (N[h] = N[h].replace(/\s{2,}/g, " ").trim()), N[h] = v.options.valueProcessors ? o(v.options.valueProcessors, N[h], L) : N[h], Object.keys(N).length === 1 && h in N && !v.EXPLICIT_CHARKEY && (N = N[h])), i(N) && (typeof v.options.emptyTag == "function" ? N = v.options.emptyTag() : N = v.options.emptyTag !== "" ? v.options.emptyTag : w), v.options.validator != null && (P = "/" + function() {
                var M, j, $;
                for ($ = [], M = 0, j = T.length; M < j; M++)
                  D = T[M], $.push(D["#name"]);
                return $;
              }().concat(L).join("/"), function() {
                var M;
                try {
                  return N = v.options.validator(P, C && C[L], N);
                } catch (j) {
                  return M = j, v.emit("error", M);
                }
              }()), v.options.explicitChildren && !v.options.mergeAttrs && typeof N == "object") {
                if (!v.options.preserveChildrenOrder)
                  D = /* @__PURE__ */ Object.create(null), v.options.attrkey in N && (D[v.options.attrkey] = N[v.options.attrkey], delete N[v.options.attrkey]), !v.options.charsAsChildren && v.options.charkey in N && (D[v.options.charkey] = N[v.options.charkey], delete N[v.options.charkey]), Object.getOwnPropertyNames(N).length > 0 && (D[v.options.childkey] = N), N = D;
                else if (C) {
                  C[v.options.childkey] = C[v.options.childkey] || [], y = /* @__PURE__ */ Object.create(null);
                  for (S in N)
                    p.call(N, S) && (y[S] = N[S]);
                  C[v.options.childkey].push(y), delete N["#name"], Object.keys(N).length === 1 && h in N && !v.EXPLICIT_CHARKEY && (N = N[h]);
                }
              }
              return T.length > 0 ? v.assignOrPush(C, L, N) : (v.options.explicitRoot && (O = N, N = /* @__PURE__ */ Object.create(null), N[L] = O), v.resultObject = N, v.saxParser.ended = !0, v.emit("end", v.resultObject));
            };
          }(this), g = /* @__PURE__ */ function(v) {
            return function(b) {
              var w, S;
              if (S = T[T.length - 1], S)
                return S[h] += b, v.options.explicitChildren && v.options.preserveChildrenOrder && v.options.charsAsChildren && (v.options.includeWhiteChars || b.replace(/\\n/g, "").trim() !== "") && (S[v.options.childkey] = S[v.options.childkey] || [], w = {
                  "#name": "__text__"
                }, w[h] = b, v.options.normalize && (w[h] = w[h].replace(/\s{2,}/g, " ").trim()), S[v.options.childkey].push(w)), S;
            };
          }(this), this.saxParser.ontext = g, this.saxParser.oncdata = /* @__PURE__ */ function(v) {
            return function(b) {
              var w;
              if (w = g(b), w)
                return w.cdata = !0;
            };
          }();
        }, f.prototype.parseString = function(m, h) {
          var g;
          h != null && typeof h == "function" && (this.on("end", function(T) {
            return this.reset(), h(null, T);
          }), this.on("error", function(T) {
            return this.reset(), h(T);
          }));
          try {
            return m = m.toString(), m.trim() === "" ? (this.emit("end", null), !0) : (m = e.stripBOM(m), this.options.async ? (this.remaining = m, c(this.processAsync), this.saxParser) : this.saxParser.write(m).close());
          } catch (T) {
            if (g = T, this.saxParser.errThrown || this.saxParser.ended) {
              if (this.saxParser.ended)
                throw g;
            } else return this.emit("error", g), this.saxParser.errThrown = !0;
          }
        }, f.prototype.parseStringPromise = function(m) {
          return new Promise(/* @__PURE__ */ function(h) {
            return function(g, T) {
              return h.parseString(m, function(v, b) {
                return v ? T(v) : g(b);
              });
            };
          }(this));
        }, f;
      }(r), t.parseString = function(d, f, m) {
        var h, g, T;
        return m != null ? (typeof m == "function" && (h = m), typeof f == "object" && (g = f)) : (typeof f == "function" && (h = f), g = {}), T = new t.Parser(g), T.parseString(d, h);
      }, t.parseStringPromise = function(d, f) {
        var m, h;
        return typeof f == "object" && (m = f), h = new t.Parser(m), h.parseStringPromise(d);
      };
    }).call(z);
  }(Mi)), Mi;
}
(function() {
  var t, e, n, r, i = function(s, a) {
    for (var c in a)
      o.call(a, c) && (s[c] = a[c]);
    function l() {
      this.constructor = s;
    }
    return l.prototype = a.prototype, s.prototype = new l(), s.__super__ = a.prototype, s;
  }, o = {}.hasOwnProperty;
  e = Qo(), t = Ad(), n = Cd(), r = ku(), dt.defaults = e.defaults, dt.processors = r, dt.ValidationError = function(s) {
    i(a, s);
    function a(c) {
      this.message = c;
    }
    return a;
  }(Error), dt.Builder = t.Builder, dt.Parser = n.Parser, dt.parseString = n.parseString, dt.parseStringPromise = n.parseStringPromise;
}).call(z);
var qu = { exports: {} };
const Mr = qu.exports = {};
Mr.feed = [
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
Mr.item = [
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
var Bu = function(t) {
  return ["itunes:" + t, t];
};
Mr.podcastFeed = [
  "author",
  "subtitle",
  "summary",
  "explicit"
].map(Bu);
Mr.podcastItem = [
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
].map(Bu);
var Id = qu.exports, Mu = { exports: {} }, Uu = {}, bt = {};
const Rd = "Á", Ld = "á", Pd = "Ă", Fd = "ă", kd = "∾", qd = "∿", Bd = "∾̳", Md = "Â", Ud = "â", jd = "´", $d = "А", Vd = "а", zd = "Æ", Hd = "æ", Xd = "⁡", Gd = "𝔄", Wd = "𝔞", Yd = "À", Kd = "à", Jd = "ℵ", Qd = "ℵ", Zd = "Α", ef = "α", tf = "Ā", nf = "ā", rf = "⨿", of = "&", sf = "&", af = "⩕", cf = "⩓", uf = "∧", lf = "⩜", pf = "⩘", df = "⩚", ff = "∠", mf = "⦤", hf = "∠", gf = "⦨", bf = "⦩", yf = "⦪", vf = "⦫", xf = "⦬", wf = "⦭", Ef = "⦮", Tf = "⦯", Sf = "∡", _f = "∟", Nf = "⊾", Af = "⦝", Of = "∢", Df = "Å", Cf = "⍼", If = "Ą", Rf = "ą", Lf = "𝔸", Pf = "𝕒", Ff = "⩯", kf = "≈", qf = "⩰", Bf = "≊", Mf = "≋", Uf = "'", jf = "⁡", $f = "≈", Vf = "≊", zf = "Å", Hf = "å", Xf = "𝒜", Gf = "𝒶", Wf = "≔", Yf = "*", Kf = "≈", Jf = "≍", Qf = "Ã", Zf = "ã", em = "Ä", tm = "ä", nm = "∳", rm = "⨑", im = "≌", om = "϶", sm = "‵", am = "∽", cm = "⋍", um = "∖", lm = "⫧", pm = "⊽", dm = "⌅", fm = "⌆", mm = "⌅", hm = "⎵", gm = "⎶", bm = "≌", ym = "Б", vm = "б", xm = "„", wm = "∵", Em = "∵", Tm = "∵", Sm = "⦰", _m = "϶", Nm = "ℬ", Am = "ℬ", Om = "Β", Dm = "β", Cm = "ℶ", Im = "≬", Rm = "𝔅", Lm = "𝔟", Pm = "⋂", Fm = "◯", km = "⋃", qm = "⨀", Bm = "⨁", Mm = "⨂", Um = "⨆", jm = "★", $m = "▽", Vm = "△", zm = "⨄", Hm = "⋁", Xm = "⋀", Gm = "⤍", Wm = "⧫", Ym = "▪", Km = "▴", Jm = "▾", Qm = "◂", Zm = "▸", eh = "␣", th = "▒", nh = "░", rh = "▓", ih = "█", oh = "=⃥", sh = "≡⃥", ah = "⫭", ch = "⌐", uh = "𝔹", lh = "𝕓", ph = "⊥", dh = "⊥", fh = "⋈", mh = "⧉", hh = "┐", gh = "╕", bh = "╖", yh = "╗", vh = "┌", xh = "╒", wh = "╓", Eh = "╔", Th = "─", Sh = "═", _h = "┬", Nh = "╤", Ah = "╥", Oh = "╦", Dh = "┴", Ch = "╧", Ih = "╨", Rh = "╩", Lh = "⊟", Ph = "⊞", Fh = "⊠", kh = "┘", qh = "╛", Bh = "╜", Mh = "╝", Uh = "└", jh = "╘", $h = "╙", Vh = "╚", zh = "│", Hh = "║", Xh = "┼", Gh = "╪", Wh = "╫", Yh = "╬", Kh = "┤", Jh = "╡", Qh = "╢", Zh = "╣", eg = "├", tg = "╞", ng = "╟", rg = "╠", ig = "‵", og = "˘", sg = "˘", ag = "¦", cg = "𝒷", ug = "ℬ", lg = "⁏", pg = "∽", dg = "⋍", fg = "⧅", mg = "\\", hg = "⟈", gg = "•", bg = "•", yg = "≎", vg = "⪮", xg = "≏", wg = "≎", Eg = "≏", Tg = "Ć", Sg = "ć", _g = "⩄", Ng = "⩉", Ag = "⩋", Og = "∩", Dg = "⋒", Cg = "⩇", Ig = "⩀", Rg = "ⅅ", Lg = "∩︀", Pg = "⁁", Fg = "ˇ", kg = "ℭ", qg = "⩍", Bg = "Č", Mg = "č", Ug = "Ç", jg = "ç", $g = "Ĉ", Vg = "ĉ", zg = "∰", Hg = "⩌", Xg = "⩐", Gg = "Ċ", Wg = "ċ", Yg = "¸", Kg = "¸", Jg = "⦲", Qg = "¢", Zg = "·", eb = "·", tb = "𝔠", nb = "ℭ", rb = "Ч", ib = "ч", ob = "✓", sb = "✓", ab = "Χ", cb = "χ", ub = "ˆ", lb = "≗", pb = "↺", db = "↻", fb = "⊛", mb = "⊚", hb = "⊝", gb = "⊙", bb = "®", yb = "Ⓢ", vb = "⊖", xb = "⊕", wb = "⊗", Eb = "○", Tb = "⧃", Sb = "≗", _b = "⨐", Nb = "⫯", Ab = "⧂", Ob = "∲", Db = "”", Cb = "’", Ib = "♣", Rb = "♣", Lb = ":", Pb = "∷", Fb = "⩴", kb = "≔", qb = "≔", Bb = ",", Mb = "@", Ub = "∁", jb = "∘", $b = "∁", Vb = "ℂ", zb = "≅", Hb = "⩭", Xb = "≡", Gb = "∮", Wb = "∯", Yb = "∮", Kb = "𝕔", Jb = "ℂ", Qb = "∐", Zb = "∐", ey = "©", ty = "©", ny = "℗", ry = "∳", iy = "↵", oy = "✗", sy = "⨯", ay = "𝒞", cy = "𝒸", uy = "⫏", ly = "⫑", py = "⫐", dy = "⫒", fy = "⋯", my = "⤸", hy = "⤵", gy = "⋞", by = "⋟", yy = "↶", vy = "⤽", xy = "⩈", wy = "⩆", Ey = "≍", Ty = "∪", Sy = "⋓", _y = "⩊", Ny = "⊍", Ay = "⩅", Oy = "∪︀", Dy = "↷", Cy = "⤼", Iy = "⋞", Ry = "⋟", Ly = "⋎", Py = "⋏", Fy = "¤", ky = "↶", qy = "↷", By = "⋎", My = "⋏", Uy = "∲", jy = "∱", $y = "⌭", Vy = "†", zy = "‡", Hy = "ℸ", Xy = "↓", Gy = "↡", Wy = "⇓", Yy = "‐", Ky = "⫤", Jy = "⊣", Qy = "⤏", Zy = "˝", ev = "Ď", tv = "ď", nv = "Д", rv = "д", iv = "‡", ov = "⇊", sv = "ⅅ", av = "ⅆ", cv = "⤑", uv = "⩷", lv = "°", pv = "∇", dv = "Δ", fv = "δ", mv = "⦱", hv = "⥿", gv = "𝔇", bv = "𝔡", yv = "⥥", vv = "⇃", xv = "⇂", wv = "´", Ev = "˙", Tv = "˝", Sv = "`", _v = "˜", Nv = "⋄", Av = "⋄", Ov = "⋄", Dv = "♦", Cv = "♦", Iv = "¨", Rv = "ⅆ", Lv = "ϝ", Pv = "⋲", Fv = "÷", kv = "÷", qv = "⋇", Bv = "⋇", Mv = "Ђ", Uv = "ђ", jv = "⌞", $v = "⌍", Vv = "$", zv = "𝔻", Hv = "𝕕", Xv = "¨", Gv = "˙", Wv = "⃜", Yv = "≐", Kv = "≑", Jv = "≐", Qv = "∸", Zv = "∔", ex = "⊡", tx = "⌆", nx = "∯", rx = "¨", ix = "⇓", ox = "⇐", sx = "⇔", ax = "⫤", cx = "⟸", ux = "⟺", lx = "⟹", px = "⇒", dx = "⊨", fx = "⇑", mx = "⇕", hx = "∥", gx = "⤓", bx = "↓", yx = "↓", vx = "⇓", xx = "⇵", wx = "̑", Ex = "⇊", Tx = "⇃", Sx = "⇂", _x = "⥐", Nx = "⥞", Ax = "⥖", Ox = "↽", Dx = "⥟", Cx = "⥗", Ix = "⇁", Rx = "↧", Lx = "⊤", Px = "⤐", Fx = "⌟", kx = "⌌", qx = "𝒟", Bx = "𝒹", Mx = "Ѕ", Ux = "ѕ", jx = "⧶", $x = "Đ", Vx = "đ", zx = "⋱", Hx = "▿", Xx = "▾", Gx = "⇵", Wx = "⥯", Yx = "⦦", Kx = "Џ", Jx = "џ", Qx = "⟿", Zx = "É", e0 = "é", t0 = "⩮", n0 = "Ě", r0 = "ě", i0 = "Ê", o0 = "ê", s0 = "≖", a0 = "≕", c0 = "Э", u0 = "э", l0 = "⩷", p0 = "Ė", d0 = "ė", f0 = "≑", m0 = "ⅇ", h0 = "≒", g0 = "𝔈", b0 = "𝔢", y0 = "⪚", v0 = "È", x0 = "è", w0 = "⪖", E0 = "⪘", T0 = "⪙", S0 = "∈", _0 = "⏧", N0 = "ℓ", A0 = "⪕", O0 = "⪗", D0 = "Ē", C0 = "ē", I0 = "∅", R0 = "∅", L0 = "◻", P0 = "∅", F0 = "▫", k0 = " ", q0 = " ", B0 = " ", M0 = "Ŋ", U0 = "ŋ", j0 = " ", $0 = "Ę", V0 = "ę", z0 = "𝔼", H0 = "𝕖", X0 = "⋕", G0 = "⧣", W0 = "⩱", Y0 = "ε", K0 = "Ε", J0 = "ε", Q0 = "ϵ", Z0 = "≖", e1 = "≕", t1 = "≂", n1 = "⪖", r1 = "⪕", i1 = "⩵", o1 = "=", s1 = "≂", a1 = "≟", c1 = "⇌", u1 = "≡", l1 = "⩸", p1 = "⧥", d1 = "⥱", f1 = "≓", m1 = "ℯ", h1 = "ℰ", g1 = "≐", b1 = "⩳", y1 = "≂", v1 = "Η", x1 = "η", w1 = "Ð", E1 = "ð", T1 = "Ë", S1 = "ë", _1 = "€", N1 = "!", A1 = "∃", O1 = "∃", D1 = "ℰ", C1 = "ⅇ", I1 = "ⅇ", R1 = "≒", L1 = "Ф", P1 = "ф", F1 = "♀", k1 = "ﬃ", q1 = "ﬀ", B1 = "ﬄ", M1 = "𝔉", U1 = "𝔣", j1 = "ﬁ", $1 = "◼", V1 = "▪", z1 = "fj", H1 = "♭", X1 = "ﬂ", G1 = "▱", W1 = "ƒ", Y1 = "𝔽", K1 = "𝕗", J1 = "∀", Q1 = "∀", Z1 = "⋔", ew = "⫙", tw = "ℱ", nw = "⨍", rw = "½", iw = "⅓", ow = "¼", sw = "⅕", aw = "⅙", cw = "⅛", uw = "⅔", lw = "⅖", pw = "¾", dw = "⅗", fw = "⅜", mw = "⅘", hw = "⅚", gw = "⅝", bw = "⅞", yw = "⁄", vw = "⌢", xw = "𝒻", ww = "ℱ", Ew = "ǵ", Tw = "Γ", Sw = "γ", _w = "Ϝ", Nw = "ϝ", Aw = "⪆", Ow = "Ğ", Dw = "ğ", Cw = "Ģ", Iw = "Ĝ", Rw = "ĝ", Lw = "Г", Pw = "г", Fw = "Ġ", kw = "ġ", qw = "≥", Bw = "≧", Mw = "⪌", Uw = "⋛", jw = "≥", $w = "≧", Vw = "⩾", zw = "⪩", Hw = "⩾", Xw = "⪀", Gw = "⪂", Ww = "⪄", Yw = "⋛︀", Kw = "⪔", Jw = "𝔊", Qw = "𝔤", Zw = "≫", eE = "⋙", tE = "⋙", nE = "ℷ", rE = "Ѓ", iE = "ѓ", oE = "⪥", sE = "≷", aE = "⪒", cE = "⪤", uE = "⪊", lE = "⪊", pE = "⪈", dE = "≩", fE = "⪈", mE = "≩", hE = "⋧", gE = "𝔾", bE = "𝕘", yE = "`", vE = "≥", xE = "⋛", wE = "≧", EE = "⪢", TE = "≷", SE = "⩾", _E = "≳", NE = "𝒢", AE = "ℊ", OE = "≳", DE = "⪎", CE = "⪐", IE = "⪧", RE = "⩺", LE = ">", PE = ">", FE = "≫", kE = "⋗", qE = "⦕", BE = "⩼", ME = "⪆", UE = "⥸", jE = "⋗", $E = "⋛", VE = "⪌", zE = "≷", HE = "≳", XE = "≩︀", GE = "≩︀", WE = "ˇ", YE = " ", KE = "½", JE = "ℋ", QE = "Ъ", ZE = "ъ", eT = "⥈", tT = "↔", nT = "⇔", rT = "↭", iT = "^", oT = "ℏ", sT = "Ĥ", aT = "ĥ", cT = "♥", uT = "♥", lT = "…", pT = "⊹", dT = "𝔥", fT = "ℌ", mT = "ℋ", hT = "⤥", gT = "⤦", bT = "⇿", yT = "∻", vT = "↩", xT = "↪", wT = "𝕙", ET = "ℍ", TT = "―", ST = "─", _T = "𝒽", NT = "ℋ", AT = "ℏ", OT = "Ħ", DT = "ħ", CT = "≎", IT = "≏", RT = "⁃", LT = "‐", PT = "Í", FT = "í", kT = "⁣", qT = "Î", BT = "î", MT = "И", UT = "и", jT = "İ", $T = "Е", VT = "е", zT = "¡", HT = "⇔", XT = "𝔦", GT = "ℑ", WT = "Ì", YT = "ì", KT = "ⅈ", JT = "⨌", QT = "∭", ZT = "⧜", eS = "℩", tS = "Ĳ", nS = "ĳ", rS = "Ī", iS = "ī", oS = "ℑ", sS = "ⅈ", aS = "ℐ", cS = "ℑ", uS = "ı", lS = "ℑ", pS = "⊷", dS = "Ƶ", fS = "⇒", mS = "℅", hS = "∞", gS = "⧝", bS = "ı", yS = "⊺", vS = "∫", xS = "∬", wS = "ℤ", ES = "∫", TS = "⊺", SS = "⋂", _S = "⨗", NS = "⨼", AS = "⁣", OS = "⁢", DS = "Ё", CS = "ё", IS = "Į", RS = "į", LS = "𝕀", PS = "𝕚", FS = "Ι", kS = "ι", qS = "⨼", BS = "¿", MS = "𝒾", US = "ℐ", jS = "∈", $S = "⋵", VS = "⋹", zS = "⋴", HS = "⋳", XS = "∈", GS = "⁢", WS = "Ĩ", YS = "ĩ", KS = "І", JS = "і", QS = "Ï", ZS = "ï", e8 = "Ĵ", t8 = "ĵ", n8 = "Й", r8 = "й", i8 = "𝔍", o8 = "𝔧", s8 = "ȷ", a8 = "𝕁", c8 = "𝕛", u8 = "𝒥", l8 = "𝒿", p8 = "Ј", d8 = "ј", f8 = "Є", m8 = "є", h8 = "Κ", g8 = "κ", b8 = "ϰ", y8 = "Ķ", v8 = "ķ", x8 = "К", w8 = "к", E8 = "𝔎", T8 = "𝔨", S8 = "ĸ", _8 = "Х", N8 = "х", A8 = "Ќ", O8 = "ќ", D8 = "𝕂", C8 = "𝕜", I8 = "𝒦", R8 = "𝓀", L8 = "⇚", P8 = "Ĺ", F8 = "ĺ", k8 = "⦴", q8 = "ℒ", B8 = "Λ", M8 = "λ", U8 = "⟨", j8 = "⟪", $8 = "⦑", V8 = "⟨", z8 = "⪅", H8 = "ℒ", X8 = "«", G8 = "⇤", W8 = "⤟", Y8 = "←", K8 = "↞", J8 = "⇐", Q8 = "⤝", Z8 = "↩", e_ = "↫", t_ = "⤹", n_ = "⥳", r_ = "↢", i_ = "⤙", o_ = "⤛", s_ = "⪫", a_ = "⪭", c_ = "⪭︀", u_ = "⤌", l_ = "⤎", p_ = "❲", d_ = "{", f_ = "[", m_ = "⦋", h_ = "⦏", g_ = "⦍", b_ = "Ľ", y_ = "ľ", v_ = "Ļ", x_ = "ļ", w_ = "⌈", E_ = "{", T_ = "Л", S_ = "л", __ = "⤶", N_ = "“", A_ = "„", O_ = "⥧", D_ = "⥋", C_ = "↲", I_ = "≤", R_ = "≦", L_ = "⟨", P_ = "⇤", F_ = "←", k_ = "←", q_ = "⇐", B_ = "⇆", M_ = "↢", U_ = "⌈", j_ = "⟦", $_ = "⥡", V_ = "⥙", z_ = "⇃", H_ = "⌊", X_ = "↽", G_ = "↼", W_ = "⇇", Y_ = "↔", K_ = "↔", J_ = "⇔", Q_ = "⇆", Z_ = "⇋", eN = "↭", tN = "⥎", nN = "↤", rN = "⊣", iN = "⥚", oN = "⋋", sN = "⧏", aN = "⊲", cN = "⊴", uN = "⥑", lN = "⥠", pN = "⥘", dN = "↿", fN = "⥒", mN = "↼", hN = "⪋", gN = "⋚", bN = "≤", yN = "≦", vN = "⩽", xN = "⪨", wN = "⩽", EN = "⩿", TN = "⪁", SN = "⪃", _N = "⋚︀", NN = "⪓", AN = "⪅", ON = "⋖", DN = "⋚", CN = "⪋", IN = "⋚", RN = "≦", LN = "≶", PN = "≶", FN = "⪡", kN = "≲", qN = "⩽", BN = "≲", MN = "⥼", UN = "⌊", jN = "𝔏", $N = "𝔩", VN = "≶", zN = "⪑", HN = "⥢", XN = "↽", GN = "↼", WN = "⥪", YN = "▄", KN = "Љ", JN = "љ", QN = "⇇", ZN = "≪", eA = "⋘", tA = "⌞", nA = "⇚", rA = "⥫", iA = "◺", oA = "Ŀ", sA = "ŀ", aA = "⎰", cA = "⎰", uA = "⪉", lA = "⪉", pA = "⪇", dA = "≨", fA = "⪇", mA = "≨", hA = "⋦", gA = "⟬", bA = "⇽", yA = "⟦", vA = "⟵", xA = "⟵", wA = "⟸", EA = "⟷", TA = "⟷", SA = "⟺", _A = "⟼", NA = "⟶", AA = "⟶", OA = "⟹", DA = "↫", CA = "↬", IA = "⦅", RA = "𝕃", LA = "𝕝", PA = "⨭", FA = "⨴", kA = "∗", qA = "_", BA = "↙", MA = "↘", UA = "◊", jA = "◊", $A = "⧫", VA = "(", zA = "⦓", HA = "⇆", XA = "⌟", GA = "⇋", WA = "⥭", YA = "‎", KA = "⊿", JA = "‹", QA = "𝓁", ZA = "ℒ", e4 = "↰", t4 = "↰", n4 = "≲", r4 = "⪍", i4 = "⪏", o4 = "[", s4 = "‘", a4 = "‚", c4 = "Ł", u4 = "ł", l4 = "⪦", p4 = "⩹", d4 = "<", f4 = "<", m4 = "≪", h4 = "⋖", g4 = "⋋", b4 = "⋉", y4 = "⥶", v4 = "⩻", x4 = "◃", w4 = "⊴", E4 = "◂", T4 = "⦖", S4 = "⥊", _4 = "⥦", N4 = "≨︀", A4 = "≨︀", O4 = "¯", D4 = "♂", C4 = "✠", I4 = "✠", R4 = "↦", L4 = "↦", P4 = "↧", F4 = "↤", k4 = "↥", q4 = "▮", B4 = "⨩", M4 = "М", U4 = "м", j4 = "—", $4 = "∺", V4 = "∡", z4 = " ", H4 = "ℳ", X4 = "𝔐", G4 = "𝔪", W4 = "℧", Y4 = "µ", K4 = "*", J4 = "⫰", Q4 = "∣", Z4 = "·", eO = "⊟", tO = "−", nO = "∸", rO = "⨪", iO = "∓", oO = "⫛", sO = "…", aO = "∓", cO = "⊧", uO = "𝕄", lO = "𝕞", pO = "∓", dO = "𝓂", fO = "ℳ", mO = "∾", hO = "Μ", gO = "μ", bO = "⊸", yO = "⊸", vO = "∇", xO = "Ń", wO = "ń", EO = "∠⃒", TO = "≉", SO = "⩰̸", _O = "≋̸", NO = "ŉ", AO = "≉", OO = "♮", DO = "ℕ", CO = "♮", IO = " ", RO = "≎̸", LO = "≏̸", PO = "⩃", FO = "Ň", kO = "ň", qO = "Ņ", BO = "ņ", MO = "≇", UO = "⩭̸", jO = "⩂", $O = "Н", VO = "н", zO = "–", HO = "⤤", XO = "↗", GO = "⇗", WO = "↗", YO = "≠", KO = "≐̸", JO = "​", QO = "​", ZO = "​", e2 = "​", t2 = "≢", n2 = "⤨", r2 = "≂̸", i2 = "≫", o2 = "≪", s2 = `
`, a2 = "∄", c2 = "∄", u2 = "𝔑", l2 = "𝔫", p2 = "≧̸", d2 = "≱", f2 = "≱", m2 = "≧̸", h2 = "⩾̸", g2 = "⩾̸", b2 = "⋙̸", y2 = "≵", v2 = "≫⃒", x2 = "≯", w2 = "≯", E2 = "≫̸", T2 = "↮", S2 = "⇎", _2 = "⫲", N2 = "∋", A2 = "⋼", O2 = "⋺", D2 = "∋", C2 = "Њ", I2 = "њ", R2 = "↚", L2 = "⇍", P2 = "‥", F2 = "≦̸", k2 = "≰", q2 = "↚", B2 = "⇍", M2 = "↮", U2 = "⇎", j2 = "≰", $2 = "≦̸", V2 = "⩽̸", z2 = "⩽̸", H2 = "≮", X2 = "⋘̸", G2 = "≴", W2 = "≪⃒", Y2 = "≮", K2 = "⋪", J2 = "⋬", Q2 = "≪̸", Z2 = "∤", eD = "⁠", tD = " ", nD = "𝕟", rD = "ℕ", iD = "⫬", oD = "¬", sD = "≢", aD = "≭", cD = "∦", uD = "∉", lD = "≠", pD = "≂̸", dD = "∄", fD = "≯", mD = "≱", hD = "≧̸", gD = "≫̸", bD = "≹", yD = "⩾̸", vD = "≵", xD = "≎̸", wD = "≏̸", ED = "∉", TD = "⋵̸", SD = "⋹̸", _D = "∉", ND = "⋷", AD = "⋶", OD = "⧏̸", DD = "⋪", CD = "⋬", ID = "≮", RD = "≰", LD = "≸", PD = "≪̸", FD = "⩽̸", kD = "≴", qD = "⪢̸", BD = "⪡̸", MD = "∌", UD = "∌", jD = "⋾", $D = "⋽", VD = "⊀", zD = "⪯̸", HD = "⋠", XD = "∌", GD = "⧐̸", WD = "⋫", YD = "⋭", KD = "⊏̸", JD = "⋢", QD = "⊐̸", ZD = "⋣", eC = "⊂⃒", tC = "⊈", nC = "⊁", rC = "⪰̸", iC = "⋡", oC = "≿̸", sC = "⊃⃒", aC = "⊉", cC = "≁", uC = "≄", lC = "≇", pC = "≉", dC = "∤", fC = "∦", mC = "∦", hC = "⫽⃥", gC = "∂̸", bC = "⨔", yC = "⊀", vC = "⋠", xC = "⊀", wC = "⪯̸", EC = "⪯̸", TC = "⤳̸", SC = "↛", _C = "⇏", NC = "↝̸", AC = "↛", OC = "⇏", DC = "⋫", CC = "⋭", IC = "⊁", RC = "⋡", LC = "⪰̸", PC = "𝒩", FC = "𝓃", kC = "∤", qC = "∦", BC = "≁", MC = "≄", UC = "≄", jC = "∤", $C = "∦", VC = "⋢", zC = "⋣", HC = "⊄", XC = "⫅̸", GC = "⊈", WC = "⊂⃒", YC = "⊈", KC = "⫅̸", JC = "⊁", QC = "⪰̸", ZC = "⊅", eI = "⫆̸", tI = "⊉", nI = "⊃⃒", rI = "⊉", iI = "⫆̸", oI = "≹", sI = "Ñ", aI = "ñ", cI = "≸", uI = "⋪", lI = "⋬", pI = "⋫", dI = "⋭", fI = "Ν", mI = "ν", hI = "#", gI = "№", bI = " ", yI = "≍⃒", vI = "⊬", xI = "⊭", wI = "⊮", EI = "⊯", TI = "≥⃒", SI = ">⃒", _I = "⤄", NI = "⧞", AI = "⤂", OI = "≤⃒", DI = "<⃒", CI = "⊴⃒", II = "⤃", RI = "⊵⃒", LI = "∼⃒", PI = "⤣", FI = "↖", kI = "⇖", qI = "↖", BI = "⤧", MI = "Ó", UI = "ó", jI = "⊛", $I = "Ô", VI = "ô", zI = "⊚", HI = "О", XI = "о", GI = "⊝", WI = "Ő", YI = "ő", KI = "⨸", JI = "⊙", QI = "⦼", ZI = "Œ", eR = "œ", tR = "⦿", nR = "𝔒", rR = "𝔬", iR = "˛", oR = "Ò", sR = "ò", aR = "⧁", cR = "⦵", uR = "Ω", lR = "∮", pR = "↺", dR = "⦾", fR = "⦻", mR = "‾", hR = "⧀", gR = "Ō", bR = "ō", yR = "Ω", vR = "ω", xR = "Ο", wR = "ο", ER = "⦶", TR = "⊖", SR = "𝕆", _R = "𝕠", NR = "⦷", AR = "“", OR = "‘", DR = "⦹", CR = "⊕", IR = "↻", RR = "⩔", LR = "∨", PR = "⩝", FR = "ℴ", kR = "ℴ", qR = "ª", BR = "º", MR = "⊶", UR = "⩖", jR = "⩗", $R = "⩛", VR = "Ⓢ", zR = "𝒪", HR = "ℴ", XR = "Ø", GR = "ø", WR = "⊘", YR = "Õ", KR = "õ", JR = "⨶", QR = "⨷", ZR = "⊗", eL = "Ö", tL = "ö", nL = "⌽", rL = "‾", iL = "⏞", oL = "⎴", sL = "⏜", aL = "¶", cL = "∥", uL = "∥", lL = "⫳", pL = "⫽", dL = "∂", fL = "∂", mL = "П", hL = "п", gL = "%", bL = ".", yL = "‰", vL = "⊥", xL = "‱", wL = "𝔓", EL = "𝔭", TL = "Φ", SL = "φ", _L = "ϕ", NL = "ℳ", AL = "☎", OL = "Π", DL = "π", CL = "⋔", IL = "ϖ", RL = "ℏ", LL = "ℎ", PL = "ℏ", FL = "⨣", kL = "⊞", qL = "⨢", BL = "+", ML = "∔", UL = "⨥", jL = "⩲", $L = "±", VL = "±", zL = "⨦", HL = "⨧", XL = "±", GL = "ℌ", WL = "⨕", YL = "𝕡", KL = "ℙ", JL = "£", QL = "⪷", ZL = "⪻", e6 = "≺", t6 = "≼", n6 = "⪷", r6 = "≺", i6 = "≼", o6 = "≺", s6 = "⪯", a6 = "≼", c6 = "≾", u6 = "⪯", l6 = "⪹", p6 = "⪵", d6 = "⋨", f6 = "⪯", m6 = "⪳", h6 = "≾", g6 = "′", b6 = "″", y6 = "ℙ", v6 = "⪹", x6 = "⪵", w6 = "⋨", E6 = "∏", T6 = "∏", S6 = "⌮", _6 = "⌒", N6 = "⌓", A6 = "∝", O6 = "∝", D6 = "∷", C6 = "∝", I6 = "≾", R6 = "⊰", L6 = "𝒫", P6 = "𝓅", F6 = "Ψ", k6 = "ψ", q6 = " ", B6 = "𝔔", M6 = "𝔮", U6 = "⨌", j6 = "𝕢", $6 = "ℚ", V6 = "⁗", z6 = "𝒬", H6 = "𝓆", X6 = "ℍ", G6 = "⨖", W6 = "?", Y6 = "≟", K6 = '"', J6 = '"', Q6 = "⇛", Z6 = "∽̱", e3 = "Ŕ", t3 = "ŕ", n3 = "√", r3 = "⦳", i3 = "⟩", o3 = "⟫", s3 = "⦒", a3 = "⦥", c3 = "⟩", u3 = "»", l3 = "⥵", p3 = "⇥", d3 = "⤠", f3 = "⤳", m3 = "→", h3 = "↠", g3 = "⇒", b3 = "⤞", y3 = "↪", v3 = "↬", x3 = "⥅", w3 = "⥴", E3 = "⤖", T3 = "↣", S3 = "↝", _3 = "⤚", N3 = "⤜", A3 = "∶", O3 = "ℚ", D3 = "⤍", C3 = "⤏", I3 = "⤐", R3 = "❳", L3 = "}", P3 = "]", F3 = "⦌", k3 = "⦎", q3 = "⦐", B3 = "Ř", M3 = "ř", U3 = "Ŗ", j3 = "ŗ", $3 = "⌉", V3 = "}", z3 = "Р", H3 = "р", X3 = "⤷", G3 = "⥩", W3 = "”", Y3 = "”", K3 = "↳", J3 = "ℜ", Q3 = "ℛ", Z3 = "ℜ", eP = "ℝ", tP = "ℜ", nP = "▭", rP = "®", iP = "®", oP = "∋", sP = "⇋", aP = "⥯", cP = "⥽", uP = "⌋", lP = "𝔯", pP = "ℜ", dP = "⥤", fP = "⇁", mP = "⇀", hP = "⥬", gP = "Ρ", bP = "ρ", yP = "ϱ", vP = "⟩", xP = "⇥", wP = "→", EP = "→", TP = "⇒", SP = "⇄", _P = "↣", NP = "⌉", AP = "⟧", OP = "⥝", DP = "⥕", CP = "⇂", IP = "⌋", RP = "⇁", LP = "⇀", PP = "⇄", FP = "⇌", kP = "⇉", qP = "↝", BP = "↦", MP = "⊢", UP = "⥛", jP = "⋌", $P = "⧐", VP = "⊳", zP = "⊵", HP = "⥏", XP = "⥜", GP = "⥔", WP = "↾", YP = "⥓", KP = "⇀", JP = "˚", QP = "≓", ZP = "⇄", eF = "⇌", tF = "‏", nF = "⎱", rF = "⎱", iF = "⫮", oF = "⟭", sF = "⇾", aF = "⟧", cF = "⦆", uF = "𝕣", lF = "ℝ", pF = "⨮", dF = "⨵", fF = "⥰", mF = ")", hF = "⦔", gF = "⨒", bF = "⇉", yF = "⇛", vF = "›", xF = "𝓇", wF = "ℛ", EF = "↱", TF = "↱", SF = "]", _F = "’", NF = "’", AF = "⋌", OF = "⋊", DF = "▹", CF = "⊵", IF = "▸", RF = "⧎", LF = "⧴", PF = "⥨", FF = "℞", kF = "Ś", qF = "ś", BF = "‚", MF = "⪸", UF = "Š", jF = "š", $F = "⪼", VF = "≻", zF = "≽", HF = "⪰", XF = "⪴", GF = "Ş", WF = "ş", YF = "Ŝ", KF = "ŝ", JF = "⪺", QF = "⪶", ZF = "⋩", e5 = "⨓", t5 = "≿", n5 = "С", r5 = "с", i5 = "⊡", o5 = "⋅", s5 = "⩦", a5 = "⤥", c5 = "↘", u5 = "⇘", l5 = "↘", p5 = "§", d5 = ";", f5 = "⤩", m5 = "∖", h5 = "∖", g5 = "✶", b5 = "𝔖", y5 = "𝔰", v5 = "⌢", x5 = "♯", w5 = "Щ", E5 = "щ", T5 = "Ш", S5 = "ш", _5 = "↓", N5 = "←", A5 = "∣", O5 = "∥", D5 = "→", C5 = "↑", I5 = "­", R5 = "Σ", L5 = "σ", P5 = "ς", F5 = "ς", k5 = "∼", q5 = "⩪", B5 = "≃", M5 = "≃", U5 = "⪞", j5 = "⪠", $5 = "⪝", V5 = "⪟", z5 = "≆", H5 = "⨤", X5 = "⥲", G5 = "←", W5 = "∘", Y5 = "∖", K5 = "⨳", J5 = "⧤", Q5 = "∣", Z5 = "⌣", ek = "⪪", tk = "⪬", nk = "⪬︀", rk = "Ь", ik = "ь", ok = "⌿", sk = "⧄", ak = "/", ck = "𝕊", uk = "𝕤", lk = "♠", pk = "♠", dk = "∥", fk = "⊓", mk = "⊓︀", hk = "⊔", gk = "⊔︀", bk = "√", yk = "⊏", vk = "⊑", xk = "⊏", wk = "⊑", Ek = "⊐", Tk = "⊒", Sk = "⊐", _k = "⊒", Nk = "□", Ak = "□", Ok = "⊓", Dk = "⊏", Ck = "⊑", Ik = "⊐", Rk = "⊒", Lk = "⊔", Pk = "▪", Fk = "□", kk = "▪", qk = "→", Bk = "𝒮", Mk = "𝓈", Uk = "∖", jk = "⌣", $k = "⋆", Vk = "⋆", zk = "☆", Hk = "★", Xk = "ϵ", Gk = "ϕ", Wk = "¯", Yk = "⊂", Kk = "⋐", Jk = "⪽", Qk = "⫅", Zk = "⊆", e9 = "⫃", t9 = "⫁", n9 = "⫋", r9 = "⊊", i9 = "⪿", o9 = "⥹", s9 = "⊂", a9 = "⋐", c9 = "⊆", u9 = "⫅", l9 = "⊆", p9 = "⊊", d9 = "⫋", f9 = "⫇", m9 = "⫕", h9 = "⫓", g9 = "⪸", b9 = "≻", y9 = "≽", v9 = "≻", x9 = "⪰", w9 = "≽", E9 = "≿", T9 = "⪰", S9 = "⪺", _9 = "⪶", N9 = "⋩", A9 = "≿", O9 = "∋", D9 = "∑", C9 = "∑", I9 = "♪", R9 = "¹", L9 = "²", P9 = "³", F9 = "⊃", k9 = "⋑", q9 = "⪾", B9 = "⫘", M9 = "⫆", U9 = "⊇", j9 = "⫄", $9 = "⊃", V9 = "⊇", z9 = "⟉", H9 = "⫗", X9 = "⥻", G9 = "⫂", W9 = "⫌", Y9 = "⊋", K9 = "⫀", J9 = "⊃", Q9 = "⋑", Z9 = "⊇", eq = "⫆", tq = "⊋", nq = "⫌", rq = "⫈", iq = "⫔", oq = "⫖", sq = "⤦", aq = "↙", cq = "⇙", uq = "↙", lq = "⤪", pq = "ß", dq = "	", fq = "⌖", mq = "Τ", hq = "τ", gq = "⎴", bq = "Ť", yq = "ť", vq = "Ţ", xq = "ţ", wq = "Т", Eq = "т", Tq = "⃛", Sq = "⌕", _q = "𝔗", Nq = "𝔱", Aq = "∴", Oq = "∴", Dq = "∴", Cq = "Θ", Iq = "θ", Rq = "ϑ", Lq = "ϑ", Pq = "≈", Fq = "∼", kq = "  ", qq = " ", Bq = " ", Mq = "≈", Uq = "∼", jq = "Þ", $q = "þ", Vq = "˜", zq = "∼", Hq = "≃", Xq = "≅", Gq = "≈", Wq = "⨱", Yq = "⊠", Kq = "×", Jq = "⨰", Qq = "∭", Zq = "⤨", eB = "⌶", tB = "⫱", nB = "⊤", rB = "𝕋", iB = "𝕥", oB = "⫚", sB = "⤩", aB = "‴", cB = "™", uB = "™", lB = "▵", pB = "▿", dB = "◃", fB = "⊴", mB = "≜", hB = "▹", gB = "⊵", bB = "◬", yB = "≜", vB = "⨺", xB = "⃛", wB = "⨹", EB = "⧍", TB = "⨻", SB = "⏢", _B = "𝒯", NB = "𝓉", AB = "Ц", OB = "ц", DB = "Ћ", CB = "ћ", IB = "Ŧ", RB = "ŧ", LB = "≬", PB = "↞", FB = "↠", kB = "Ú", qB = "ú", BB = "↑", MB = "↟", UB = "⇑", jB = "⥉", $B = "Ў", VB = "ў", zB = "Ŭ", HB = "ŭ", XB = "Û", GB = "û", WB = "У", YB = "у", KB = "⇅", JB = "Ű", QB = "ű", ZB = "⥮", eM = "⥾", tM = "𝔘", nM = "𝔲", rM = "Ù", iM = "ù", oM = "⥣", sM = "↿", aM = "↾", cM = "▀", uM = "⌜", lM = "⌜", pM = "⌏", dM = "◸", fM = "Ū", mM = "ū", hM = "¨", gM = "_", bM = "⏟", yM = "⎵", vM = "⏝", xM = "⋃", wM = "⊎", EM = "Ų", TM = "ų", SM = "𝕌", _M = "𝕦", NM = "⤒", AM = "↑", OM = "↑", DM = "⇑", CM = "⇅", IM = "↕", RM = "↕", LM = "⇕", PM = "⥮", FM = "↿", kM = "↾", qM = "⊎", BM = "↖", MM = "↗", UM = "υ", jM = "ϒ", $M = "ϒ", VM = "Υ", zM = "υ", HM = "↥", XM = "⊥", GM = "⇈", WM = "⌝", YM = "⌝", KM = "⌎", JM = "Ů", QM = "ů", ZM = "◹", eU = "𝒰", tU = "𝓊", nU = "⋰", rU = "Ũ", iU = "ũ", oU = "▵", sU = "▴", aU = "⇈", cU = "Ü", uU = "ü", lU = "⦧", pU = "⦜", dU = "ϵ", fU = "ϰ", mU = "∅", hU = "ϕ", gU = "ϖ", bU = "∝", yU = "↕", vU = "⇕", xU = "ϱ", wU = "ς", EU = "⊊︀", TU = "⫋︀", SU = "⊋︀", _U = "⫌︀", NU = "ϑ", AU = "⊲", OU = "⊳", DU = "⫨", CU = "⫫", IU = "⫩", RU = "В", LU = "в", PU = "⊢", FU = "⊨", kU = "⊩", qU = "⊫", BU = "⫦", MU = "⊻", UU = "∨", jU = "⋁", $U = "≚", VU = "⋮", zU = "|", HU = "‖", XU = "|", GU = "‖", WU = "∣", YU = "|", KU = "❘", JU = "≀", QU = " ", ZU = "𝔙", ej = "𝔳", tj = "⊲", nj = "⊂⃒", rj = "⊃⃒", ij = "𝕍", oj = "𝕧", sj = "∝", aj = "⊳", cj = "𝒱", uj = "𝓋", lj = "⫋︀", pj = "⊊︀", dj = "⫌︀", fj = "⊋︀", mj = "⊪", hj = "⦚", gj = "Ŵ", bj = "ŵ", yj = "⩟", vj = "∧", xj = "⋀", wj = "≙", Ej = "℘", Tj = "𝔚", Sj = "𝔴", _j = "𝕎", Nj = "𝕨", Aj = "℘", Oj = "≀", Dj = "≀", Cj = "𝒲", Ij = "𝓌", Rj = "⋂", Lj = "◯", Pj = "⋃", Fj = "▽", kj = "𝔛", qj = "𝔵", Bj = "⟷", Mj = "⟺", Uj = "Ξ", jj = "ξ", $j = "⟵", Vj = "⟸", zj = "⟼", Hj = "⋻", Xj = "⨀", Gj = "𝕏", Wj = "𝕩", Yj = "⨁", Kj = "⨂", Jj = "⟶", Qj = "⟹", Zj = "𝒳", e7 = "𝓍", t7 = "⨆", n7 = "⨄", r7 = "△", i7 = "⋁", o7 = "⋀", s7 = "Ý", a7 = "ý", c7 = "Я", u7 = "я", l7 = "Ŷ", p7 = "ŷ", d7 = "Ы", f7 = "ы", m7 = "¥", h7 = "𝔜", g7 = "𝔶", b7 = "Ї", y7 = "ї", v7 = "𝕐", x7 = "𝕪", w7 = "𝒴", E7 = "𝓎", T7 = "Ю", S7 = "ю", _7 = "ÿ", N7 = "Ÿ", A7 = "Ź", O7 = "ź", D7 = "Ž", C7 = "ž", I7 = "З", R7 = "з", L7 = "Ż", P7 = "ż", F7 = "ℨ", k7 = "​", q7 = "Ζ", B7 = "ζ", M7 = "𝔷", U7 = "ℨ", j7 = "Ж", $7 = "ж", V7 = "⇝", z7 = "𝕫", H7 = "ℤ", X7 = "𝒵", G7 = "𝓏", W7 = "‍", Y7 = "‌", ju = {
  Aacute: Rd,
  aacute: Ld,
  Abreve: Pd,
  abreve: Fd,
  ac: kd,
  acd: qd,
  acE: Bd,
  Acirc: Md,
  acirc: Ud,
  acute: jd,
  Acy: $d,
  acy: Vd,
  AElig: zd,
  aelig: Hd,
  af: Xd,
  Afr: Gd,
  afr: Wd,
  Agrave: Yd,
  agrave: Kd,
  alefsym: Jd,
  aleph: Qd,
  Alpha: Zd,
  alpha: ef,
  Amacr: tf,
  amacr: nf,
  amalg: rf,
  amp: of,
  AMP: sf,
  andand: af,
  And: cf,
  and: uf,
  andd: lf,
  andslope: pf,
  andv: df,
  ang: ff,
  ange: mf,
  angle: hf,
  angmsdaa: gf,
  angmsdab: bf,
  angmsdac: yf,
  angmsdad: vf,
  angmsdae: xf,
  angmsdaf: wf,
  angmsdag: Ef,
  angmsdah: Tf,
  angmsd: Sf,
  angrt: _f,
  angrtvb: Nf,
  angrtvbd: Af,
  angsph: Of,
  angst: Df,
  angzarr: Cf,
  Aogon: If,
  aogon: Rf,
  Aopf: Lf,
  aopf: Pf,
  apacir: Ff,
  ap: kf,
  apE: qf,
  ape: Bf,
  apid: Mf,
  apos: Uf,
  ApplyFunction: jf,
  approx: $f,
  approxeq: Vf,
  Aring: zf,
  aring: Hf,
  Ascr: Xf,
  ascr: Gf,
  Assign: Wf,
  ast: Yf,
  asymp: Kf,
  asympeq: Jf,
  Atilde: Qf,
  atilde: Zf,
  Auml: em,
  auml: tm,
  awconint: nm,
  awint: rm,
  backcong: im,
  backepsilon: om,
  backprime: sm,
  backsim: am,
  backsimeq: cm,
  Backslash: um,
  Barv: lm,
  barvee: pm,
  barwed: dm,
  Barwed: fm,
  barwedge: mm,
  bbrk: hm,
  bbrktbrk: gm,
  bcong: bm,
  Bcy: ym,
  bcy: vm,
  bdquo: xm,
  becaus: wm,
  because: Em,
  Because: Tm,
  bemptyv: Sm,
  bepsi: _m,
  bernou: Nm,
  Bernoullis: Am,
  Beta: Om,
  beta: Dm,
  beth: Cm,
  between: Im,
  Bfr: Rm,
  bfr: Lm,
  bigcap: Pm,
  bigcirc: Fm,
  bigcup: km,
  bigodot: qm,
  bigoplus: Bm,
  bigotimes: Mm,
  bigsqcup: Um,
  bigstar: jm,
  bigtriangledown: $m,
  bigtriangleup: Vm,
  biguplus: zm,
  bigvee: Hm,
  bigwedge: Xm,
  bkarow: Gm,
  blacklozenge: Wm,
  blacksquare: Ym,
  blacktriangle: Km,
  blacktriangledown: Jm,
  blacktriangleleft: Qm,
  blacktriangleright: Zm,
  blank: eh,
  blk12: th,
  blk14: nh,
  blk34: rh,
  block: ih,
  bne: oh,
  bnequiv: sh,
  bNot: ah,
  bnot: ch,
  Bopf: uh,
  bopf: lh,
  bot: ph,
  bottom: dh,
  bowtie: fh,
  boxbox: mh,
  boxdl: hh,
  boxdL: gh,
  boxDl: bh,
  boxDL: yh,
  boxdr: vh,
  boxdR: xh,
  boxDr: wh,
  boxDR: Eh,
  boxh: Th,
  boxH: Sh,
  boxhd: _h,
  boxHd: Nh,
  boxhD: Ah,
  boxHD: Oh,
  boxhu: Dh,
  boxHu: Ch,
  boxhU: Ih,
  boxHU: Rh,
  boxminus: Lh,
  boxplus: Ph,
  boxtimes: Fh,
  boxul: kh,
  boxuL: qh,
  boxUl: Bh,
  boxUL: Mh,
  boxur: Uh,
  boxuR: jh,
  boxUr: $h,
  boxUR: Vh,
  boxv: zh,
  boxV: Hh,
  boxvh: Xh,
  boxvH: Gh,
  boxVh: Wh,
  boxVH: Yh,
  boxvl: Kh,
  boxvL: Jh,
  boxVl: Qh,
  boxVL: Zh,
  boxvr: eg,
  boxvR: tg,
  boxVr: ng,
  boxVR: rg,
  bprime: ig,
  breve: og,
  Breve: sg,
  brvbar: ag,
  bscr: cg,
  Bscr: ug,
  bsemi: lg,
  bsim: pg,
  bsime: dg,
  bsolb: fg,
  bsol: mg,
  bsolhsub: hg,
  bull: gg,
  bullet: bg,
  bump: yg,
  bumpE: vg,
  bumpe: xg,
  Bumpeq: wg,
  bumpeq: Eg,
  Cacute: Tg,
  cacute: Sg,
  capand: _g,
  capbrcup: Ng,
  capcap: Ag,
  cap: Og,
  Cap: Dg,
  capcup: Cg,
  capdot: Ig,
  CapitalDifferentialD: Rg,
  caps: Lg,
  caret: Pg,
  caron: Fg,
  Cayleys: kg,
  ccaps: qg,
  Ccaron: Bg,
  ccaron: Mg,
  Ccedil: Ug,
  ccedil: jg,
  Ccirc: $g,
  ccirc: Vg,
  Cconint: zg,
  ccups: Hg,
  ccupssm: Xg,
  Cdot: Gg,
  cdot: Wg,
  cedil: Yg,
  Cedilla: Kg,
  cemptyv: Jg,
  cent: Qg,
  centerdot: Zg,
  CenterDot: eb,
  cfr: tb,
  Cfr: nb,
  CHcy: rb,
  chcy: ib,
  check: ob,
  checkmark: sb,
  Chi: ab,
  chi: cb,
  circ: ub,
  circeq: lb,
  circlearrowleft: pb,
  circlearrowright: db,
  circledast: fb,
  circledcirc: mb,
  circleddash: hb,
  CircleDot: gb,
  circledR: bb,
  circledS: yb,
  CircleMinus: vb,
  CirclePlus: xb,
  CircleTimes: wb,
  cir: Eb,
  cirE: Tb,
  cire: Sb,
  cirfnint: _b,
  cirmid: Nb,
  cirscir: Ab,
  ClockwiseContourIntegral: Ob,
  CloseCurlyDoubleQuote: Db,
  CloseCurlyQuote: Cb,
  clubs: Ib,
  clubsuit: Rb,
  colon: Lb,
  Colon: Pb,
  Colone: Fb,
  colone: kb,
  coloneq: qb,
  comma: Bb,
  commat: Mb,
  comp: Ub,
  compfn: jb,
  complement: $b,
  complexes: Vb,
  cong: zb,
  congdot: Hb,
  Congruent: Xb,
  conint: Gb,
  Conint: Wb,
  ContourIntegral: Yb,
  copf: Kb,
  Copf: Jb,
  coprod: Qb,
  Coproduct: Zb,
  copy: ey,
  COPY: ty,
  copysr: ny,
  CounterClockwiseContourIntegral: ry,
  crarr: iy,
  cross: oy,
  Cross: sy,
  Cscr: ay,
  cscr: cy,
  csub: uy,
  csube: ly,
  csup: py,
  csupe: dy,
  ctdot: fy,
  cudarrl: my,
  cudarrr: hy,
  cuepr: gy,
  cuesc: by,
  cularr: yy,
  cularrp: vy,
  cupbrcap: xy,
  cupcap: wy,
  CupCap: Ey,
  cup: Ty,
  Cup: Sy,
  cupcup: _y,
  cupdot: Ny,
  cupor: Ay,
  cups: Oy,
  curarr: Dy,
  curarrm: Cy,
  curlyeqprec: Iy,
  curlyeqsucc: Ry,
  curlyvee: Ly,
  curlywedge: Py,
  curren: Fy,
  curvearrowleft: ky,
  curvearrowright: qy,
  cuvee: By,
  cuwed: My,
  cwconint: Uy,
  cwint: jy,
  cylcty: $y,
  dagger: Vy,
  Dagger: zy,
  daleth: Hy,
  darr: Xy,
  Darr: Gy,
  dArr: Wy,
  dash: Yy,
  Dashv: Ky,
  dashv: Jy,
  dbkarow: Qy,
  dblac: Zy,
  Dcaron: ev,
  dcaron: tv,
  Dcy: nv,
  dcy: rv,
  ddagger: iv,
  ddarr: ov,
  DD: sv,
  dd: av,
  DDotrahd: cv,
  ddotseq: uv,
  deg: lv,
  Del: pv,
  Delta: dv,
  delta: fv,
  demptyv: mv,
  dfisht: hv,
  Dfr: gv,
  dfr: bv,
  dHar: yv,
  dharl: vv,
  dharr: xv,
  DiacriticalAcute: wv,
  DiacriticalDot: Ev,
  DiacriticalDoubleAcute: Tv,
  DiacriticalGrave: Sv,
  DiacriticalTilde: _v,
  diam: Nv,
  diamond: Av,
  Diamond: Ov,
  diamondsuit: Dv,
  diams: Cv,
  die: Iv,
  DifferentialD: Rv,
  digamma: Lv,
  disin: Pv,
  div: Fv,
  divide: kv,
  divideontimes: qv,
  divonx: Bv,
  DJcy: Mv,
  djcy: Uv,
  dlcorn: jv,
  dlcrop: $v,
  dollar: Vv,
  Dopf: zv,
  dopf: Hv,
  Dot: Xv,
  dot: Gv,
  DotDot: Wv,
  doteq: Yv,
  doteqdot: Kv,
  DotEqual: Jv,
  dotminus: Qv,
  dotplus: Zv,
  dotsquare: ex,
  doublebarwedge: tx,
  DoubleContourIntegral: nx,
  DoubleDot: rx,
  DoubleDownArrow: ix,
  DoubleLeftArrow: ox,
  DoubleLeftRightArrow: sx,
  DoubleLeftTee: ax,
  DoubleLongLeftArrow: cx,
  DoubleLongLeftRightArrow: ux,
  DoubleLongRightArrow: lx,
  DoubleRightArrow: px,
  DoubleRightTee: dx,
  DoubleUpArrow: fx,
  DoubleUpDownArrow: mx,
  DoubleVerticalBar: hx,
  DownArrowBar: gx,
  downarrow: bx,
  DownArrow: yx,
  Downarrow: vx,
  DownArrowUpArrow: xx,
  DownBreve: wx,
  downdownarrows: Ex,
  downharpoonleft: Tx,
  downharpoonright: Sx,
  DownLeftRightVector: _x,
  DownLeftTeeVector: Nx,
  DownLeftVectorBar: Ax,
  DownLeftVector: Ox,
  DownRightTeeVector: Dx,
  DownRightVectorBar: Cx,
  DownRightVector: Ix,
  DownTeeArrow: Rx,
  DownTee: Lx,
  drbkarow: Px,
  drcorn: Fx,
  drcrop: kx,
  Dscr: qx,
  dscr: Bx,
  DScy: Mx,
  dscy: Ux,
  dsol: jx,
  Dstrok: $x,
  dstrok: Vx,
  dtdot: zx,
  dtri: Hx,
  dtrif: Xx,
  duarr: Gx,
  duhar: Wx,
  dwangle: Yx,
  DZcy: Kx,
  dzcy: Jx,
  dzigrarr: Qx,
  Eacute: Zx,
  eacute: e0,
  easter: t0,
  Ecaron: n0,
  ecaron: r0,
  Ecirc: i0,
  ecirc: o0,
  ecir: s0,
  ecolon: a0,
  Ecy: c0,
  ecy: u0,
  eDDot: l0,
  Edot: p0,
  edot: d0,
  eDot: f0,
  ee: m0,
  efDot: h0,
  Efr: g0,
  efr: b0,
  eg: y0,
  Egrave: v0,
  egrave: x0,
  egs: w0,
  egsdot: E0,
  el: T0,
  Element: S0,
  elinters: _0,
  ell: N0,
  els: A0,
  elsdot: O0,
  Emacr: D0,
  emacr: C0,
  empty: I0,
  emptyset: R0,
  EmptySmallSquare: L0,
  emptyv: P0,
  EmptyVerySmallSquare: F0,
  emsp13: k0,
  emsp14: q0,
  emsp: B0,
  ENG: M0,
  eng: U0,
  ensp: j0,
  Eogon: $0,
  eogon: V0,
  Eopf: z0,
  eopf: H0,
  epar: X0,
  eparsl: G0,
  eplus: W0,
  epsi: Y0,
  Epsilon: K0,
  epsilon: J0,
  epsiv: Q0,
  eqcirc: Z0,
  eqcolon: e1,
  eqsim: t1,
  eqslantgtr: n1,
  eqslantless: r1,
  Equal: i1,
  equals: o1,
  EqualTilde: s1,
  equest: a1,
  Equilibrium: c1,
  equiv: u1,
  equivDD: l1,
  eqvparsl: p1,
  erarr: d1,
  erDot: f1,
  escr: m1,
  Escr: h1,
  esdot: g1,
  Esim: b1,
  esim: y1,
  Eta: v1,
  eta: x1,
  ETH: w1,
  eth: E1,
  Euml: T1,
  euml: S1,
  euro: _1,
  excl: N1,
  exist: A1,
  Exists: O1,
  expectation: D1,
  exponentiale: C1,
  ExponentialE: I1,
  fallingdotseq: R1,
  Fcy: L1,
  fcy: P1,
  female: F1,
  ffilig: k1,
  fflig: q1,
  ffllig: B1,
  Ffr: M1,
  ffr: U1,
  filig: j1,
  FilledSmallSquare: $1,
  FilledVerySmallSquare: V1,
  fjlig: z1,
  flat: H1,
  fllig: X1,
  fltns: G1,
  fnof: W1,
  Fopf: Y1,
  fopf: K1,
  forall: J1,
  ForAll: Q1,
  fork: Z1,
  forkv: ew,
  Fouriertrf: tw,
  fpartint: nw,
  frac12: rw,
  frac13: iw,
  frac14: ow,
  frac15: sw,
  frac16: aw,
  frac18: cw,
  frac23: uw,
  frac25: lw,
  frac34: pw,
  frac35: dw,
  frac38: fw,
  frac45: mw,
  frac56: hw,
  frac58: gw,
  frac78: bw,
  frasl: yw,
  frown: vw,
  fscr: xw,
  Fscr: ww,
  gacute: Ew,
  Gamma: Tw,
  gamma: Sw,
  Gammad: _w,
  gammad: Nw,
  gap: Aw,
  Gbreve: Ow,
  gbreve: Dw,
  Gcedil: Cw,
  Gcirc: Iw,
  gcirc: Rw,
  Gcy: Lw,
  gcy: Pw,
  Gdot: Fw,
  gdot: kw,
  ge: qw,
  gE: Bw,
  gEl: Mw,
  gel: Uw,
  geq: jw,
  geqq: $w,
  geqslant: Vw,
  gescc: zw,
  ges: Hw,
  gesdot: Xw,
  gesdoto: Gw,
  gesdotol: Ww,
  gesl: Yw,
  gesles: Kw,
  Gfr: Jw,
  gfr: Qw,
  gg: Zw,
  Gg: eE,
  ggg: tE,
  gimel: nE,
  GJcy: rE,
  gjcy: iE,
  gla: oE,
  gl: sE,
  glE: aE,
  glj: cE,
  gnap: uE,
  gnapprox: lE,
  gne: pE,
  gnE: dE,
  gneq: fE,
  gneqq: mE,
  gnsim: hE,
  Gopf: gE,
  gopf: bE,
  grave: yE,
  GreaterEqual: vE,
  GreaterEqualLess: xE,
  GreaterFullEqual: wE,
  GreaterGreater: EE,
  GreaterLess: TE,
  GreaterSlantEqual: SE,
  GreaterTilde: _E,
  Gscr: NE,
  gscr: AE,
  gsim: OE,
  gsime: DE,
  gsiml: CE,
  gtcc: IE,
  gtcir: RE,
  gt: LE,
  GT: PE,
  Gt: FE,
  gtdot: kE,
  gtlPar: qE,
  gtquest: BE,
  gtrapprox: ME,
  gtrarr: UE,
  gtrdot: jE,
  gtreqless: $E,
  gtreqqless: VE,
  gtrless: zE,
  gtrsim: HE,
  gvertneqq: XE,
  gvnE: GE,
  Hacek: WE,
  hairsp: YE,
  half: KE,
  hamilt: JE,
  HARDcy: QE,
  hardcy: ZE,
  harrcir: eT,
  harr: tT,
  hArr: nT,
  harrw: rT,
  Hat: iT,
  hbar: oT,
  Hcirc: sT,
  hcirc: aT,
  hearts: cT,
  heartsuit: uT,
  hellip: lT,
  hercon: pT,
  hfr: dT,
  Hfr: fT,
  HilbertSpace: mT,
  hksearow: hT,
  hkswarow: gT,
  hoarr: bT,
  homtht: yT,
  hookleftarrow: vT,
  hookrightarrow: xT,
  hopf: wT,
  Hopf: ET,
  horbar: TT,
  HorizontalLine: ST,
  hscr: _T,
  Hscr: NT,
  hslash: AT,
  Hstrok: OT,
  hstrok: DT,
  HumpDownHump: CT,
  HumpEqual: IT,
  hybull: RT,
  hyphen: LT,
  Iacute: PT,
  iacute: FT,
  ic: kT,
  Icirc: qT,
  icirc: BT,
  Icy: MT,
  icy: UT,
  Idot: jT,
  IEcy: $T,
  iecy: VT,
  iexcl: zT,
  iff: HT,
  ifr: XT,
  Ifr: GT,
  Igrave: WT,
  igrave: YT,
  ii: KT,
  iiiint: JT,
  iiint: QT,
  iinfin: ZT,
  iiota: eS,
  IJlig: tS,
  ijlig: nS,
  Imacr: rS,
  imacr: iS,
  image: oS,
  ImaginaryI: sS,
  imagline: aS,
  imagpart: cS,
  imath: uS,
  Im: lS,
  imof: pS,
  imped: dS,
  Implies: fS,
  incare: mS,
  in: "∈",
  infin: hS,
  infintie: gS,
  inodot: bS,
  intcal: yS,
  int: vS,
  Int: xS,
  integers: wS,
  Integral: ES,
  intercal: TS,
  Intersection: SS,
  intlarhk: _S,
  intprod: NS,
  InvisibleComma: AS,
  InvisibleTimes: OS,
  IOcy: DS,
  iocy: CS,
  Iogon: IS,
  iogon: RS,
  Iopf: LS,
  iopf: PS,
  Iota: FS,
  iota: kS,
  iprod: qS,
  iquest: BS,
  iscr: MS,
  Iscr: US,
  isin: jS,
  isindot: $S,
  isinE: VS,
  isins: zS,
  isinsv: HS,
  isinv: XS,
  it: GS,
  Itilde: WS,
  itilde: YS,
  Iukcy: KS,
  iukcy: JS,
  Iuml: QS,
  iuml: ZS,
  Jcirc: e8,
  jcirc: t8,
  Jcy: n8,
  jcy: r8,
  Jfr: i8,
  jfr: o8,
  jmath: s8,
  Jopf: a8,
  jopf: c8,
  Jscr: u8,
  jscr: l8,
  Jsercy: p8,
  jsercy: d8,
  Jukcy: f8,
  jukcy: m8,
  Kappa: h8,
  kappa: g8,
  kappav: b8,
  Kcedil: y8,
  kcedil: v8,
  Kcy: x8,
  kcy: w8,
  Kfr: E8,
  kfr: T8,
  kgreen: S8,
  KHcy: _8,
  khcy: N8,
  KJcy: A8,
  kjcy: O8,
  Kopf: D8,
  kopf: C8,
  Kscr: I8,
  kscr: R8,
  lAarr: L8,
  Lacute: P8,
  lacute: F8,
  laemptyv: k8,
  lagran: q8,
  Lambda: B8,
  lambda: M8,
  lang: U8,
  Lang: j8,
  langd: $8,
  langle: V8,
  lap: z8,
  Laplacetrf: H8,
  laquo: X8,
  larrb: G8,
  larrbfs: W8,
  larr: Y8,
  Larr: K8,
  lArr: J8,
  larrfs: Q8,
  larrhk: Z8,
  larrlp: e_,
  larrpl: t_,
  larrsim: n_,
  larrtl: r_,
  latail: i_,
  lAtail: o_,
  lat: s_,
  late: a_,
  lates: c_,
  lbarr: u_,
  lBarr: l_,
  lbbrk: p_,
  lbrace: d_,
  lbrack: f_,
  lbrke: m_,
  lbrksld: h_,
  lbrkslu: g_,
  Lcaron: b_,
  lcaron: y_,
  Lcedil: v_,
  lcedil: x_,
  lceil: w_,
  lcub: E_,
  Lcy: T_,
  lcy: S_,
  ldca: __,
  ldquo: N_,
  ldquor: A_,
  ldrdhar: O_,
  ldrushar: D_,
  ldsh: C_,
  le: I_,
  lE: R_,
  LeftAngleBracket: L_,
  LeftArrowBar: P_,
  leftarrow: F_,
  LeftArrow: k_,
  Leftarrow: q_,
  LeftArrowRightArrow: B_,
  leftarrowtail: M_,
  LeftCeiling: U_,
  LeftDoubleBracket: j_,
  LeftDownTeeVector: $_,
  LeftDownVectorBar: V_,
  LeftDownVector: z_,
  LeftFloor: H_,
  leftharpoondown: X_,
  leftharpoonup: G_,
  leftleftarrows: W_,
  leftrightarrow: Y_,
  LeftRightArrow: K_,
  Leftrightarrow: J_,
  leftrightarrows: Q_,
  leftrightharpoons: Z_,
  leftrightsquigarrow: eN,
  LeftRightVector: tN,
  LeftTeeArrow: nN,
  LeftTee: rN,
  LeftTeeVector: iN,
  leftthreetimes: oN,
  LeftTriangleBar: sN,
  LeftTriangle: aN,
  LeftTriangleEqual: cN,
  LeftUpDownVector: uN,
  LeftUpTeeVector: lN,
  LeftUpVectorBar: pN,
  LeftUpVector: dN,
  LeftVectorBar: fN,
  LeftVector: mN,
  lEg: hN,
  leg: gN,
  leq: bN,
  leqq: yN,
  leqslant: vN,
  lescc: xN,
  les: wN,
  lesdot: EN,
  lesdoto: TN,
  lesdotor: SN,
  lesg: _N,
  lesges: NN,
  lessapprox: AN,
  lessdot: ON,
  lesseqgtr: DN,
  lesseqqgtr: CN,
  LessEqualGreater: IN,
  LessFullEqual: RN,
  LessGreater: LN,
  lessgtr: PN,
  LessLess: FN,
  lesssim: kN,
  LessSlantEqual: qN,
  LessTilde: BN,
  lfisht: MN,
  lfloor: UN,
  Lfr: jN,
  lfr: $N,
  lg: VN,
  lgE: zN,
  lHar: HN,
  lhard: XN,
  lharu: GN,
  lharul: WN,
  lhblk: YN,
  LJcy: KN,
  ljcy: JN,
  llarr: QN,
  ll: ZN,
  Ll: eA,
  llcorner: tA,
  Lleftarrow: nA,
  llhard: rA,
  lltri: iA,
  Lmidot: oA,
  lmidot: sA,
  lmoustache: aA,
  lmoust: cA,
  lnap: uA,
  lnapprox: lA,
  lne: pA,
  lnE: dA,
  lneq: fA,
  lneqq: mA,
  lnsim: hA,
  loang: gA,
  loarr: bA,
  lobrk: yA,
  longleftarrow: vA,
  LongLeftArrow: xA,
  Longleftarrow: wA,
  longleftrightarrow: EA,
  LongLeftRightArrow: TA,
  Longleftrightarrow: SA,
  longmapsto: _A,
  longrightarrow: NA,
  LongRightArrow: AA,
  Longrightarrow: OA,
  looparrowleft: DA,
  looparrowright: CA,
  lopar: IA,
  Lopf: RA,
  lopf: LA,
  loplus: PA,
  lotimes: FA,
  lowast: kA,
  lowbar: qA,
  LowerLeftArrow: BA,
  LowerRightArrow: MA,
  loz: UA,
  lozenge: jA,
  lozf: $A,
  lpar: VA,
  lparlt: zA,
  lrarr: HA,
  lrcorner: XA,
  lrhar: GA,
  lrhard: WA,
  lrm: YA,
  lrtri: KA,
  lsaquo: JA,
  lscr: QA,
  Lscr: ZA,
  lsh: e4,
  Lsh: t4,
  lsim: n4,
  lsime: r4,
  lsimg: i4,
  lsqb: o4,
  lsquo: s4,
  lsquor: a4,
  Lstrok: c4,
  lstrok: u4,
  ltcc: l4,
  ltcir: p4,
  lt: d4,
  LT: f4,
  Lt: m4,
  ltdot: h4,
  lthree: g4,
  ltimes: b4,
  ltlarr: y4,
  ltquest: v4,
  ltri: x4,
  ltrie: w4,
  ltrif: E4,
  ltrPar: T4,
  lurdshar: S4,
  luruhar: _4,
  lvertneqq: N4,
  lvnE: A4,
  macr: O4,
  male: D4,
  malt: C4,
  maltese: I4,
  Map: "⤅",
  map: R4,
  mapsto: L4,
  mapstodown: P4,
  mapstoleft: F4,
  mapstoup: k4,
  marker: q4,
  mcomma: B4,
  Mcy: M4,
  mcy: U4,
  mdash: j4,
  mDDot: $4,
  measuredangle: V4,
  MediumSpace: z4,
  Mellintrf: H4,
  Mfr: X4,
  mfr: G4,
  mho: W4,
  micro: Y4,
  midast: K4,
  midcir: J4,
  mid: Q4,
  middot: Z4,
  minusb: eO,
  minus: tO,
  minusd: nO,
  minusdu: rO,
  MinusPlus: iO,
  mlcp: oO,
  mldr: sO,
  mnplus: aO,
  models: cO,
  Mopf: uO,
  mopf: lO,
  mp: pO,
  mscr: dO,
  Mscr: fO,
  mstpos: mO,
  Mu: hO,
  mu: gO,
  multimap: bO,
  mumap: yO,
  nabla: vO,
  Nacute: xO,
  nacute: wO,
  nang: EO,
  nap: TO,
  napE: SO,
  napid: _O,
  napos: NO,
  napprox: AO,
  natural: OO,
  naturals: DO,
  natur: CO,
  nbsp: IO,
  nbump: RO,
  nbumpe: LO,
  ncap: PO,
  Ncaron: FO,
  ncaron: kO,
  Ncedil: qO,
  ncedil: BO,
  ncong: MO,
  ncongdot: UO,
  ncup: jO,
  Ncy: $O,
  ncy: VO,
  ndash: zO,
  nearhk: HO,
  nearr: XO,
  neArr: GO,
  nearrow: WO,
  ne: YO,
  nedot: KO,
  NegativeMediumSpace: JO,
  NegativeThickSpace: QO,
  NegativeThinSpace: ZO,
  NegativeVeryThinSpace: e2,
  nequiv: t2,
  nesear: n2,
  nesim: r2,
  NestedGreaterGreater: i2,
  NestedLessLess: o2,
  NewLine: s2,
  nexist: a2,
  nexists: c2,
  Nfr: u2,
  nfr: l2,
  ngE: p2,
  nge: d2,
  ngeq: f2,
  ngeqq: m2,
  ngeqslant: h2,
  nges: g2,
  nGg: b2,
  ngsim: y2,
  nGt: v2,
  ngt: x2,
  ngtr: w2,
  nGtv: E2,
  nharr: T2,
  nhArr: S2,
  nhpar: _2,
  ni: N2,
  nis: A2,
  nisd: O2,
  niv: D2,
  NJcy: C2,
  njcy: I2,
  nlarr: R2,
  nlArr: L2,
  nldr: P2,
  nlE: F2,
  nle: k2,
  nleftarrow: q2,
  nLeftarrow: B2,
  nleftrightarrow: M2,
  nLeftrightarrow: U2,
  nleq: j2,
  nleqq: $2,
  nleqslant: V2,
  nles: z2,
  nless: H2,
  nLl: X2,
  nlsim: G2,
  nLt: W2,
  nlt: Y2,
  nltri: K2,
  nltrie: J2,
  nLtv: Q2,
  nmid: Z2,
  NoBreak: eD,
  NonBreakingSpace: tD,
  nopf: nD,
  Nopf: rD,
  Not: iD,
  not: oD,
  NotCongruent: sD,
  NotCupCap: aD,
  NotDoubleVerticalBar: cD,
  NotElement: uD,
  NotEqual: lD,
  NotEqualTilde: pD,
  NotExists: dD,
  NotGreater: fD,
  NotGreaterEqual: mD,
  NotGreaterFullEqual: hD,
  NotGreaterGreater: gD,
  NotGreaterLess: bD,
  NotGreaterSlantEqual: yD,
  NotGreaterTilde: vD,
  NotHumpDownHump: xD,
  NotHumpEqual: wD,
  notin: ED,
  notindot: TD,
  notinE: SD,
  notinva: _D,
  notinvb: ND,
  notinvc: AD,
  NotLeftTriangleBar: OD,
  NotLeftTriangle: DD,
  NotLeftTriangleEqual: CD,
  NotLess: ID,
  NotLessEqual: RD,
  NotLessGreater: LD,
  NotLessLess: PD,
  NotLessSlantEqual: FD,
  NotLessTilde: kD,
  NotNestedGreaterGreater: qD,
  NotNestedLessLess: BD,
  notni: MD,
  notniva: UD,
  notnivb: jD,
  notnivc: $D,
  NotPrecedes: VD,
  NotPrecedesEqual: zD,
  NotPrecedesSlantEqual: HD,
  NotReverseElement: XD,
  NotRightTriangleBar: GD,
  NotRightTriangle: WD,
  NotRightTriangleEqual: YD,
  NotSquareSubset: KD,
  NotSquareSubsetEqual: JD,
  NotSquareSuperset: QD,
  NotSquareSupersetEqual: ZD,
  NotSubset: eC,
  NotSubsetEqual: tC,
  NotSucceeds: nC,
  NotSucceedsEqual: rC,
  NotSucceedsSlantEqual: iC,
  NotSucceedsTilde: oC,
  NotSuperset: sC,
  NotSupersetEqual: aC,
  NotTilde: cC,
  NotTildeEqual: uC,
  NotTildeFullEqual: lC,
  NotTildeTilde: pC,
  NotVerticalBar: dC,
  nparallel: fC,
  npar: mC,
  nparsl: hC,
  npart: gC,
  npolint: bC,
  npr: yC,
  nprcue: vC,
  nprec: xC,
  npreceq: wC,
  npre: EC,
  nrarrc: TC,
  nrarr: SC,
  nrArr: _C,
  nrarrw: NC,
  nrightarrow: AC,
  nRightarrow: OC,
  nrtri: DC,
  nrtrie: CC,
  nsc: IC,
  nsccue: RC,
  nsce: LC,
  Nscr: PC,
  nscr: FC,
  nshortmid: kC,
  nshortparallel: qC,
  nsim: BC,
  nsime: MC,
  nsimeq: UC,
  nsmid: jC,
  nspar: $C,
  nsqsube: VC,
  nsqsupe: zC,
  nsub: HC,
  nsubE: XC,
  nsube: GC,
  nsubset: WC,
  nsubseteq: YC,
  nsubseteqq: KC,
  nsucc: JC,
  nsucceq: QC,
  nsup: ZC,
  nsupE: eI,
  nsupe: tI,
  nsupset: nI,
  nsupseteq: rI,
  nsupseteqq: iI,
  ntgl: oI,
  Ntilde: sI,
  ntilde: aI,
  ntlg: cI,
  ntriangleleft: uI,
  ntrianglelefteq: lI,
  ntriangleright: pI,
  ntrianglerighteq: dI,
  Nu: fI,
  nu: mI,
  num: hI,
  numero: gI,
  numsp: bI,
  nvap: yI,
  nvdash: vI,
  nvDash: xI,
  nVdash: wI,
  nVDash: EI,
  nvge: TI,
  nvgt: SI,
  nvHarr: _I,
  nvinfin: NI,
  nvlArr: AI,
  nvle: OI,
  nvlt: DI,
  nvltrie: CI,
  nvrArr: II,
  nvrtrie: RI,
  nvsim: LI,
  nwarhk: PI,
  nwarr: FI,
  nwArr: kI,
  nwarrow: qI,
  nwnear: BI,
  Oacute: MI,
  oacute: UI,
  oast: jI,
  Ocirc: $I,
  ocirc: VI,
  ocir: zI,
  Ocy: HI,
  ocy: XI,
  odash: GI,
  Odblac: WI,
  odblac: YI,
  odiv: KI,
  odot: JI,
  odsold: QI,
  OElig: ZI,
  oelig: eR,
  ofcir: tR,
  Ofr: nR,
  ofr: rR,
  ogon: iR,
  Ograve: oR,
  ograve: sR,
  ogt: aR,
  ohbar: cR,
  ohm: uR,
  oint: lR,
  olarr: pR,
  olcir: dR,
  olcross: fR,
  oline: mR,
  olt: hR,
  Omacr: gR,
  omacr: bR,
  Omega: yR,
  omega: vR,
  Omicron: xR,
  omicron: wR,
  omid: ER,
  ominus: TR,
  Oopf: SR,
  oopf: _R,
  opar: NR,
  OpenCurlyDoubleQuote: AR,
  OpenCurlyQuote: OR,
  operp: DR,
  oplus: CR,
  orarr: IR,
  Or: RR,
  or: LR,
  ord: PR,
  order: FR,
  orderof: kR,
  ordf: qR,
  ordm: BR,
  origof: MR,
  oror: UR,
  orslope: jR,
  orv: $R,
  oS: VR,
  Oscr: zR,
  oscr: HR,
  Oslash: XR,
  oslash: GR,
  osol: WR,
  Otilde: YR,
  otilde: KR,
  otimesas: JR,
  Otimes: QR,
  otimes: ZR,
  Ouml: eL,
  ouml: tL,
  ovbar: nL,
  OverBar: rL,
  OverBrace: iL,
  OverBracket: oL,
  OverParenthesis: sL,
  para: aL,
  parallel: cL,
  par: uL,
  parsim: lL,
  parsl: pL,
  part: dL,
  PartialD: fL,
  Pcy: mL,
  pcy: hL,
  percnt: gL,
  period: bL,
  permil: yL,
  perp: vL,
  pertenk: xL,
  Pfr: wL,
  pfr: EL,
  Phi: TL,
  phi: SL,
  phiv: _L,
  phmmat: NL,
  phone: AL,
  Pi: OL,
  pi: DL,
  pitchfork: CL,
  piv: IL,
  planck: RL,
  planckh: LL,
  plankv: PL,
  plusacir: FL,
  plusb: kL,
  pluscir: qL,
  plus: BL,
  plusdo: ML,
  plusdu: UL,
  pluse: jL,
  PlusMinus: $L,
  plusmn: VL,
  plussim: zL,
  plustwo: HL,
  pm: XL,
  Poincareplane: GL,
  pointint: WL,
  popf: YL,
  Popf: KL,
  pound: JL,
  prap: QL,
  Pr: ZL,
  pr: e6,
  prcue: t6,
  precapprox: n6,
  prec: r6,
  preccurlyeq: i6,
  Precedes: o6,
  PrecedesEqual: s6,
  PrecedesSlantEqual: a6,
  PrecedesTilde: c6,
  preceq: u6,
  precnapprox: l6,
  precneqq: p6,
  precnsim: d6,
  pre: f6,
  prE: m6,
  precsim: h6,
  prime: g6,
  Prime: b6,
  primes: y6,
  prnap: v6,
  prnE: x6,
  prnsim: w6,
  prod: E6,
  Product: T6,
  profalar: S6,
  profline: _6,
  profsurf: N6,
  prop: A6,
  Proportional: O6,
  Proportion: D6,
  propto: C6,
  prsim: I6,
  prurel: R6,
  Pscr: L6,
  pscr: P6,
  Psi: F6,
  psi: k6,
  puncsp: q6,
  Qfr: B6,
  qfr: M6,
  qint: U6,
  qopf: j6,
  Qopf: $6,
  qprime: V6,
  Qscr: z6,
  qscr: H6,
  quaternions: X6,
  quatint: G6,
  quest: W6,
  questeq: Y6,
  quot: K6,
  QUOT: J6,
  rAarr: Q6,
  race: Z6,
  Racute: e3,
  racute: t3,
  radic: n3,
  raemptyv: r3,
  rang: i3,
  Rang: o3,
  rangd: s3,
  range: a3,
  rangle: c3,
  raquo: u3,
  rarrap: l3,
  rarrb: p3,
  rarrbfs: d3,
  rarrc: f3,
  rarr: m3,
  Rarr: h3,
  rArr: g3,
  rarrfs: b3,
  rarrhk: y3,
  rarrlp: v3,
  rarrpl: x3,
  rarrsim: w3,
  Rarrtl: E3,
  rarrtl: T3,
  rarrw: S3,
  ratail: _3,
  rAtail: N3,
  ratio: A3,
  rationals: O3,
  rbarr: D3,
  rBarr: C3,
  RBarr: I3,
  rbbrk: R3,
  rbrace: L3,
  rbrack: P3,
  rbrke: F3,
  rbrksld: k3,
  rbrkslu: q3,
  Rcaron: B3,
  rcaron: M3,
  Rcedil: U3,
  rcedil: j3,
  rceil: $3,
  rcub: V3,
  Rcy: z3,
  rcy: H3,
  rdca: X3,
  rdldhar: G3,
  rdquo: W3,
  rdquor: Y3,
  rdsh: K3,
  real: J3,
  realine: Q3,
  realpart: Z3,
  reals: eP,
  Re: tP,
  rect: nP,
  reg: rP,
  REG: iP,
  ReverseElement: oP,
  ReverseEquilibrium: sP,
  ReverseUpEquilibrium: aP,
  rfisht: cP,
  rfloor: uP,
  rfr: lP,
  Rfr: pP,
  rHar: dP,
  rhard: fP,
  rharu: mP,
  rharul: hP,
  Rho: gP,
  rho: bP,
  rhov: yP,
  RightAngleBracket: vP,
  RightArrowBar: xP,
  rightarrow: wP,
  RightArrow: EP,
  Rightarrow: TP,
  RightArrowLeftArrow: SP,
  rightarrowtail: _P,
  RightCeiling: NP,
  RightDoubleBracket: AP,
  RightDownTeeVector: OP,
  RightDownVectorBar: DP,
  RightDownVector: CP,
  RightFloor: IP,
  rightharpoondown: RP,
  rightharpoonup: LP,
  rightleftarrows: PP,
  rightleftharpoons: FP,
  rightrightarrows: kP,
  rightsquigarrow: qP,
  RightTeeArrow: BP,
  RightTee: MP,
  RightTeeVector: UP,
  rightthreetimes: jP,
  RightTriangleBar: $P,
  RightTriangle: VP,
  RightTriangleEqual: zP,
  RightUpDownVector: HP,
  RightUpTeeVector: XP,
  RightUpVectorBar: GP,
  RightUpVector: WP,
  RightVectorBar: YP,
  RightVector: KP,
  ring: JP,
  risingdotseq: QP,
  rlarr: ZP,
  rlhar: eF,
  rlm: tF,
  rmoustache: nF,
  rmoust: rF,
  rnmid: iF,
  roang: oF,
  roarr: sF,
  robrk: aF,
  ropar: cF,
  ropf: uF,
  Ropf: lF,
  roplus: pF,
  rotimes: dF,
  RoundImplies: fF,
  rpar: mF,
  rpargt: hF,
  rppolint: gF,
  rrarr: bF,
  Rrightarrow: yF,
  rsaquo: vF,
  rscr: xF,
  Rscr: wF,
  rsh: EF,
  Rsh: TF,
  rsqb: SF,
  rsquo: _F,
  rsquor: NF,
  rthree: AF,
  rtimes: OF,
  rtri: DF,
  rtrie: CF,
  rtrif: IF,
  rtriltri: RF,
  RuleDelayed: LF,
  ruluhar: PF,
  rx: FF,
  Sacute: kF,
  sacute: qF,
  sbquo: BF,
  scap: MF,
  Scaron: UF,
  scaron: jF,
  Sc: $F,
  sc: VF,
  sccue: zF,
  sce: HF,
  scE: XF,
  Scedil: GF,
  scedil: WF,
  Scirc: YF,
  scirc: KF,
  scnap: JF,
  scnE: QF,
  scnsim: ZF,
  scpolint: e5,
  scsim: t5,
  Scy: n5,
  scy: r5,
  sdotb: i5,
  sdot: o5,
  sdote: s5,
  searhk: a5,
  searr: c5,
  seArr: u5,
  searrow: l5,
  sect: p5,
  semi: d5,
  seswar: f5,
  setminus: m5,
  setmn: h5,
  sext: g5,
  Sfr: b5,
  sfr: y5,
  sfrown: v5,
  sharp: x5,
  SHCHcy: w5,
  shchcy: E5,
  SHcy: T5,
  shcy: S5,
  ShortDownArrow: _5,
  ShortLeftArrow: N5,
  shortmid: A5,
  shortparallel: O5,
  ShortRightArrow: D5,
  ShortUpArrow: C5,
  shy: I5,
  Sigma: R5,
  sigma: L5,
  sigmaf: P5,
  sigmav: F5,
  sim: k5,
  simdot: q5,
  sime: B5,
  simeq: M5,
  simg: U5,
  simgE: j5,
  siml: $5,
  simlE: V5,
  simne: z5,
  simplus: H5,
  simrarr: X5,
  slarr: G5,
  SmallCircle: W5,
  smallsetminus: Y5,
  smashp: K5,
  smeparsl: J5,
  smid: Q5,
  smile: Z5,
  smt: ek,
  smte: tk,
  smtes: nk,
  SOFTcy: rk,
  softcy: ik,
  solbar: ok,
  solb: sk,
  sol: ak,
  Sopf: ck,
  sopf: uk,
  spades: lk,
  spadesuit: pk,
  spar: dk,
  sqcap: fk,
  sqcaps: mk,
  sqcup: hk,
  sqcups: gk,
  Sqrt: bk,
  sqsub: yk,
  sqsube: vk,
  sqsubset: xk,
  sqsubseteq: wk,
  sqsup: Ek,
  sqsupe: Tk,
  sqsupset: Sk,
  sqsupseteq: _k,
  square: Nk,
  Square: Ak,
  SquareIntersection: Ok,
  SquareSubset: Dk,
  SquareSubsetEqual: Ck,
  SquareSuperset: Ik,
  SquareSupersetEqual: Rk,
  SquareUnion: Lk,
  squarf: Pk,
  squ: Fk,
  squf: kk,
  srarr: qk,
  Sscr: Bk,
  sscr: Mk,
  ssetmn: Uk,
  ssmile: jk,
  sstarf: $k,
  Star: Vk,
  star: zk,
  starf: Hk,
  straightepsilon: Xk,
  straightphi: Gk,
  strns: Wk,
  sub: Yk,
  Sub: Kk,
  subdot: Jk,
  subE: Qk,
  sube: Zk,
  subedot: e9,
  submult: t9,
  subnE: n9,
  subne: r9,
  subplus: i9,
  subrarr: o9,
  subset: s9,
  Subset: a9,
  subseteq: c9,
  subseteqq: u9,
  SubsetEqual: l9,
  subsetneq: p9,
  subsetneqq: d9,
  subsim: f9,
  subsub: m9,
  subsup: h9,
  succapprox: g9,
  succ: b9,
  succcurlyeq: y9,
  Succeeds: v9,
  SucceedsEqual: x9,
  SucceedsSlantEqual: w9,
  SucceedsTilde: E9,
  succeq: T9,
  succnapprox: S9,
  succneqq: _9,
  succnsim: N9,
  succsim: A9,
  SuchThat: O9,
  sum: D9,
  Sum: C9,
  sung: I9,
  sup1: R9,
  sup2: L9,
  sup3: P9,
  sup: F9,
  Sup: k9,
  supdot: q9,
  supdsub: B9,
  supE: M9,
  supe: U9,
  supedot: j9,
  Superset: $9,
  SupersetEqual: V9,
  suphsol: z9,
  suphsub: H9,
  suplarr: X9,
  supmult: G9,
  supnE: W9,
  supne: Y9,
  supplus: K9,
  supset: J9,
  Supset: Q9,
  supseteq: Z9,
  supseteqq: eq,
  supsetneq: tq,
  supsetneqq: nq,
  supsim: rq,
  supsub: iq,
  supsup: oq,
  swarhk: sq,
  swarr: aq,
  swArr: cq,
  swarrow: uq,
  swnwar: lq,
  szlig: pq,
  Tab: dq,
  target: fq,
  Tau: mq,
  tau: hq,
  tbrk: gq,
  Tcaron: bq,
  tcaron: yq,
  Tcedil: vq,
  tcedil: xq,
  Tcy: wq,
  tcy: Eq,
  tdot: Tq,
  telrec: Sq,
  Tfr: _q,
  tfr: Nq,
  there4: Aq,
  therefore: Oq,
  Therefore: Dq,
  Theta: Cq,
  theta: Iq,
  thetasym: Rq,
  thetav: Lq,
  thickapprox: Pq,
  thicksim: Fq,
  ThickSpace: kq,
  ThinSpace: qq,
  thinsp: Bq,
  thkap: Mq,
  thksim: Uq,
  THORN: jq,
  thorn: $q,
  tilde: Vq,
  Tilde: zq,
  TildeEqual: Hq,
  TildeFullEqual: Xq,
  TildeTilde: Gq,
  timesbar: Wq,
  timesb: Yq,
  times: Kq,
  timesd: Jq,
  tint: Qq,
  toea: Zq,
  topbot: eB,
  topcir: tB,
  top: nB,
  Topf: rB,
  topf: iB,
  topfork: oB,
  tosa: sB,
  tprime: aB,
  trade: cB,
  TRADE: uB,
  triangle: lB,
  triangledown: pB,
  triangleleft: dB,
  trianglelefteq: fB,
  triangleq: mB,
  triangleright: hB,
  trianglerighteq: gB,
  tridot: bB,
  trie: yB,
  triminus: vB,
  TripleDot: xB,
  triplus: wB,
  trisb: EB,
  tritime: TB,
  trpezium: SB,
  Tscr: _B,
  tscr: NB,
  TScy: AB,
  tscy: OB,
  TSHcy: DB,
  tshcy: CB,
  Tstrok: IB,
  tstrok: RB,
  twixt: LB,
  twoheadleftarrow: PB,
  twoheadrightarrow: FB,
  Uacute: kB,
  uacute: qB,
  uarr: BB,
  Uarr: MB,
  uArr: UB,
  Uarrocir: jB,
  Ubrcy: $B,
  ubrcy: VB,
  Ubreve: zB,
  ubreve: HB,
  Ucirc: XB,
  ucirc: GB,
  Ucy: WB,
  ucy: YB,
  udarr: KB,
  Udblac: JB,
  udblac: QB,
  udhar: ZB,
  ufisht: eM,
  Ufr: tM,
  ufr: nM,
  Ugrave: rM,
  ugrave: iM,
  uHar: oM,
  uharl: sM,
  uharr: aM,
  uhblk: cM,
  ulcorn: uM,
  ulcorner: lM,
  ulcrop: pM,
  ultri: dM,
  Umacr: fM,
  umacr: mM,
  uml: hM,
  UnderBar: gM,
  UnderBrace: bM,
  UnderBracket: yM,
  UnderParenthesis: vM,
  Union: xM,
  UnionPlus: wM,
  Uogon: EM,
  uogon: TM,
  Uopf: SM,
  uopf: _M,
  UpArrowBar: NM,
  uparrow: AM,
  UpArrow: OM,
  Uparrow: DM,
  UpArrowDownArrow: CM,
  updownarrow: IM,
  UpDownArrow: RM,
  Updownarrow: LM,
  UpEquilibrium: PM,
  upharpoonleft: FM,
  upharpoonright: kM,
  uplus: qM,
  UpperLeftArrow: BM,
  UpperRightArrow: MM,
  upsi: UM,
  Upsi: jM,
  upsih: $M,
  Upsilon: VM,
  upsilon: zM,
  UpTeeArrow: HM,
  UpTee: XM,
  upuparrows: GM,
  urcorn: WM,
  urcorner: YM,
  urcrop: KM,
  Uring: JM,
  uring: QM,
  urtri: ZM,
  Uscr: eU,
  uscr: tU,
  utdot: nU,
  Utilde: rU,
  utilde: iU,
  utri: oU,
  utrif: sU,
  uuarr: aU,
  Uuml: cU,
  uuml: uU,
  uwangle: lU,
  vangrt: pU,
  varepsilon: dU,
  varkappa: fU,
  varnothing: mU,
  varphi: hU,
  varpi: gU,
  varpropto: bU,
  varr: yU,
  vArr: vU,
  varrho: xU,
  varsigma: wU,
  varsubsetneq: EU,
  varsubsetneqq: TU,
  varsupsetneq: SU,
  varsupsetneqq: _U,
  vartheta: NU,
  vartriangleleft: AU,
  vartriangleright: OU,
  vBar: DU,
  Vbar: CU,
  vBarv: IU,
  Vcy: RU,
  vcy: LU,
  vdash: PU,
  vDash: FU,
  Vdash: kU,
  VDash: qU,
  Vdashl: BU,
  veebar: MU,
  vee: UU,
  Vee: jU,
  veeeq: $U,
  vellip: VU,
  verbar: zU,
  Verbar: HU,
  vert: XU,
  Vert: GU,
  VerticalBar: WU,
  VerticalLine: YU,
  VerticalSeparator: KU,
  VerticalTilde: JU,
  VeryThinSpace: QU,
  Vfr: ZU,
  vfr: ej,
  vltri: tj,
  vnsub: nj,
  vnsup: rj,
  Vopf: ij,
  vopf: oj,
  vprop: sj,
  vrtri: aj,
  Vscr: cj,
  vscr: uj,
  vsubnE: lj,
  vsubne: pj,
  vsupnE: dj,
  vsupne: fj,
  Vvdash: mj,
  vzigzag: hj,
  Wcirc: gj,
  wcirc: bj,
  wedbar: yj,
  wedge: vj,
  Wedge: xj,
  wedgeq: wj,
  weierp: Ej,
  Wfr: Tj,
  wfr: Sj,
  Wopf: _j,
  wopf: Nj,
  wp: Aj,
  wr: Oj,
  wreath: Dj,
  Wscr: Cj,
  wscr: Ij,
  xcap: Rj,
  xcirc: Lj,
  xcup: Pj,
  xdtri: Fj,
  Xfr: kj,
  xfr: qj,
  xharr: Bj,
  xhArr: Mj,
  Xi: Uj,
  xi: jj,
  xlarr: $j,
  xlArr: Vj,
  xmap: zj,
  xnis: Hj,
  xodot: Xj,
  Xopf: Gj,
  xopf: Wj,
  xoplus: Yj,
  xotime: Kj,
  xrarr: Jj,
  xrArr: Qj,
  Xscr: Zj,
  xscr: e7,
  xsqcup: t7,
  xuplus: n7,
  xutri: r7,
  xvee: i7,
  xwedge: o7,
  Yacute: s7,
  yacute: a7,
  YAcy: c7,
  yacy: u7,
  Ycirc: l7,
  ycirc: p7,
  Ycy: d7,
  ycy: f7,
  yen: m7,
  Yfr: h7,
  yfr: g7,
  YIcy: b7,
  yicy: y7,
  Yopf: v7,
  yopf: x7,
  Yscr: w7,
  yscr: E7,
  YUcy: T7,
  yucy: S7,
  yuml: _7,
  Yuml: N7,
  Zacute: A7,
  zacute: O7,
  Zcaron: D7,
  zcaron: C7,
  Zcy: I7,
  zcy: R7,
  Zdot: L7,
  zdot: P7,
  zeetrf: F7,
  ZeroWidthSpace: k7,
  Zeta: q7,
  zeta: B7,
  zfr: M7,
  Zfr: U7,
  ZHcy: j7,
  zhcy: $7,
  zigrarr: V7,
  zopf: z7,
  Zopf: H7,
  Zscr: X7,
  zscr: G7,
  zwj: W7,
  zwnj: Y7
}, K7 = "Á", J7 = "á", Q7 = "Â", Z7 = "â", e$ = "´", t$ = "Æ", n$ = "æ", r$ = "À", i$ = "à", o$ = "&", s$ = "&", a$ = "Å", c$ = "å", u$ = "Ã", l$ = "ã", p$ = "Ä", d$ = "ä", f$ = "¦", m$ = "Ç", h$ = "ç", g$ = "¸", b$ = "¢", y$ = "©", v$ = "©", x$ = "¤", w$ = "°", E$ = "÷", T$ = "É", S$ = "é", _$ = "Ê", N$ = "ê", A$ = "È", O$ = "è", D$ = "Ð", C$ = "ð", I$ = "Ë", R$ = "ë", L$ = "½", P$ = "¼", F$ = "¾", k$ = ">", q$ = ">", B$ = "Í", M$ = "í", U$ = "Î", j$ = "î", $$ = "¡", V$ = "Ì", z$ = "ì", H$ = "¿", X$ = "Ï", G$ = "ï", W$ = "«", Y$ = "<", K$ = "<", J$ = "¯", Q$ = "µ", Z$ = "·", eV = " ", tV = "¬", nV = "Ñ", rV = "ñ", iV = "Ó", oV = "ó", sV = "Ô", aV = "ô", cV = "Ò", uV = "ò", lV = "ª", pV = "º", dV = "Ø", fV = "ø", mV = "Õ", hV = "õ", gV = "Ö", bV = "ö", yV = "¶", vV = "±", xV = "£", wV = '"', EV = '"', TV = "»", SV = "®", _V = "®", NV = "§", AV = "­", OV = "¹", DV = "²", CV = "³", IV = "ß", RV = "Þ", LV = "þ", PV = "×", FV = "Ú", kV = "ú", qV = "Û", BV = "û", MV = "Ù", UV = "ù", jV = "¨", $V = "Ü", VV = "ü", zV = "Ý", HV = "ý", XV = "¥", GV = "ÿ", WV = {
  Aacute: K7,
  aacute: J7,
  Acirc: Q7,
  acirc: Z7,
  acute: e$,
  AElig: t$,
  aelig: n$,
  Agrave: r$,
  agrave: i$,
  amp: o$,
  AMP: s$,
  Aring: a$,
  aring: c$,
  Atilde: u$,
  atilde: l$,
  Auml: p$,
  auml: d$,
  brvbar: f$,
  Ccedil: m$,
  ccedil: h$,
  cedil: g$,
  cent: b$,
  copy: y$,
  COPY: v$,
  curren: x$,
  deg: w$,
  divide: E$,
  Eacute: T$,
  eacute: S$,
  Ecirc: _$,
  ecirc: N$,
  Egrave: A$,
  egrave: O$,
  ETH: D$,
  eth: C$,
  Euml: I$,
  euml: R$,
  frac12: L$,
  frac14: P$,
  frac34: F$,
  gt: k$,
  GT: q$,
  Iacute: B$,
  iacute: M$,
  Icirc: U$,
  icirc: j$,
  iexcl: $$,
  Igrave: V$,
  igrave: z$,
  iquest: H$,
  Iuml: X$,
  iuml: G$,
  laquo: W$,
  lt: Y$,
  LT: K$,
  macr: J$,
  micro: Q$,
  middot: Z$,
  nbsp: eV,
  not: tV,
  Ntilde: nV,
  ntilde: rV,
  Oacute: iV,
  oacute: oV,
  Ocirc: sV,
  ocirc: aV,
  Ograve: cV,
  ograve: uV,
  ordf: lV,
  ordm: pV,
  Oslash: dV,
  oslash: fV,
  Otilde: mV,
  otilde: hV,
  Ouml: gV,
  ouml: bV,
  para: yV,
  plusmn: vV,
  pound: xV,
  quot: wV,
  QUOT: EV,
  raquo: TV,
  reg: SV,
  REG: _V,
  sect: NV,
  shy: AV,
  sup1: OV,
  sup2: DV,
  sup3: CV,
  szlig: IV,
  THORN: RV,
  thorn: LV,
  times: PV,
  Uacute: FV,
  uacute: kV,
  Ucirc: qV,
  ucirc: BV,
  Ugrave: MV,
  ugrave: UV,
  uml: jV,
  Uuml: $V,
  uuml: VV,
  Yacute: zV,
  yacute: HV,
  yen: XV,
  yuml: GV
}, YV = "&", KV = "'", JV = ">", QV = "<", ZV = '"', $u = {
  amp: YV,
  apos: KV,
  gt: JV,
  lt: QV,
  quot: ZV
};
var fs = {};
const ez = {
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
var tz = z && z.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(fs, "__esModule", { value: !0 });
var Pa = tz(ez), nz = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.fromCodePoint || function(t) {
    var e = "";
    return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), e += String.fromCharCode(t), e;
  }
);
function rz(t) {
  return t >= 55296 && t <= 57343 || t > 1114111 ? "�" : (t in Pa.default && (t = Pa.default[t]), nz(t));
}
fs.default = rz;
var Ur = z && z.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(bt, "__esModule", { value: !0 });
bt.decodeHTML = bt.decodeHTMLStrict = bt.decodeXML = void 0;
var Co = Ur(ju), iz = Ur(WV), oz = Ur($u), Fa = Ur(fs), sz = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
bt.decodeXML = Vu(oz.default);
bt.decodeHTMLStrict = Vu(Co.default);
function Vu(t) {
  var e = zu(t);
  return function(n) {
    return String(n).replace(sz, e);
  };
}
var ka = function(t, e) {
  return t < e ? 1 : -1;
};
bt.decodeHTML = function() {
  for (var t = Object.keys(iz.default).sort(ka), e = Object.keys(Co.default).sort(ka), n = 0, r = 0; n < e.length; n++)
    t[r] === e[n] ? (e[n] += ";?", r++) : e[n] += ";";
  var i = new RegExp("&(?:" + e.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), o = zu(Co.default);
  function s(a) {
    return a.substr(-1) !== ";" && (a += ";"), o(a);
  }
  return function(a) {
    return String(a).replace(i, s);
  };
}();
function zu(t) {
  return function(n) {
    if (n.charAt(1) === "#") {
      var r = n.charAt(2);
      return r === "X" || r === "x" ? Fa.default(parseInt(n.substr(3), 16)) : Fa.default(parseInt(n.substr(2), 10));
    }
    return t[n.slice(1, -1)] || n;
  };
}
var Ve = {}, Hu = z && z.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ve, "__esModule", { value: !0 });
Ve.escapeUTF8 = Ve.escape = Ve.encodeNonAsciiHTML = Ve.encodeHTML = Ve.encodeXML = void 0;
var az = Hu($u), Xu = Wu(az.default), Gu = Yu(Xu);
Ve.encodeXML = Qu(Xu);
var cz = Hu(ju), ms = Wu(cz.default), uz = Yu(ms);
Ve.encodeHTML = pz(ms, uz);
Ve.encodeNonAsciiHTML = Qu(ms);
function Wu(t) {
  return Object.keys(t).sort().reduce(function(e, n) {
    return e[t[n]] = "&" + n + ";", e;
  }, {});
}
function Yu(t) {
  for (var e = [], n = [], r = 0, i = Object.keys(t); r < i.length; r++) {
    var o = i[r];
    o.length === 1 ? e.push("\\" + o) : n.push(o);
  }
  e.sort();
  for (var s = 0; s < e.length - 1; s++) {
    for (var a = s; a < e.length - 1 && e[a].charCodeAt(1) + 1 === e[a + 1].charCodeAt(1); )
      a += 1;
    var c = 1 + a - s;
    c < 3 || e.splice(s, c, e[s] + "-" + e[a]);
  }
  return n.unshift("[" + e.join("") + "]"), new RegExp(n.join("|"), "g");
}
var Ku = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, lz = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    function(t) {
      return t.codePointAt(0);
    }
  ) : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(t) {
      return (t.charCodeAt(0) - 55296) * 1024 + t.charCodeAt(1) - 56320 + 65536;
    }
  )
);
function jr(t) {
  return "&#x" + (t.length > 1 ? lz(t) : t.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function pz(t, e) {
  return function(n) {
    return n.replace(e, function(r) {
      return t[r];
    }).replace(Ku, jr);
  };
}
var Ju = new RegExp(Gu.source + "|" + Ku.source, "g");
function dz(t) {
  return t.replace(Ju, jr);
}
Ve.escape = dz;
function fz(t) {
  return t.replace(Gu, jr);
}
Ve.escapeUTF8 = fz;
function Qu(t) {
  return function(e) {
    return e.replace(Ju, function(n) {
      return t[n] || jr(n);
    });
  };
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.decodeXMLStrict = t.decodeHTML5Strict = t.decodeHTML4Strict = t.decodeHTML5 = t.decodeHTML4 = t.decodeHTMLStrict = t.decodeHTML = t.decodeXML = t.encodeHTML5 = t.encodeHTML4 = t.escapeUTF8 = t.escape = t.encodeNonAsciiHTML = t.encodeHTML = t.encodeXML = t.encode = t.decodeStrict = t.decode = void 0;
  var e = bt, n = Ve;
  function r(c, l) {
    return (!l || l <= 0 ? e.decodeXML : e.decodeHTML)(c);
  }
  t.decode = r;
  function i(c, l) {
    return (!l || l <= 0 ? e.decodeXML : e.decodeHTMLStrict)(c);
  }
  t.decodeStrict = i;
  function o(c, l) {
    return (!l || l <= 0 ? n.encodeXML : n.encodeHTML)(c);
  }
  t.encode = o;
  var s = Ve;
  Object.defineProperty(t, "encodeXML", { enumerable: !0, get: function() {
    return s.encodeXML;
  } }), Object.defineProperty(t, "encodeHTML", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } }), Object.defineProperty(t, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return s.encodeNonAsciiHTML;
  } }), Object.defineProperty(t, "escape", { enumerable: !0, get: function() {
    return s.escape;
  } }), Object.defineProperty(t, "escapeUTF8", { enumerable: !0, get: function() {
    return s.escapeUTF8;
  } }), Object.defineProperty(t, "encodeHTML4", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } }), Object.defineProperty(t, "encodeHTML5", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } });
  var a = bt;
  Object.defineProperty(t, "decodeXML", { enumerable: !0, get: function() {
    return a.decodeXML;
  } }), Object.defineProperty(t, "decodeHTML", { enumerable: !0, get: function() {
    return a.decodeHTML;
  } }), Object.defineProperty(t, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return a.decodeHTMLStrict;
  } }), Object.defineProperty(t, "decodeHTML4", { enumerable: !0, get: function() {
    return a.decodeHTML;
  } }), Object.defineProperty(t, "decodeHTML5", { enumerable: !0, get: function() {
    return a.decodeHTML;
  } }), Object.defineProperty(t, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return a.decodeHTMLStrict;
  } }), Object.defineProperty(t, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return a.decodeHTMLStrict;
  } }), Object.defineProperty(t, "decodeXMLStrict", { enumerable: !0, get: function() {
    return a.decodeXML;
  } });
})(Uu);
const vt = Mu.exports = {}, mz = Uu, hz = dt;
vt.stripHtml = function(t) {
  return t = t.replace(/([^\n])<\/?(h|br|p|ul|ol|li|blockquote|section|table|tr|div)(?:.|\n)*?>([^\n])/gm, `$1
$3`), t = t.replace(/<(?:.|\n)*?>/gm, ""), t;
};
vt.getSnippet = function(t) {
  return mz.decodeHTML(vt.stripHtml(t)).trim();
};
vt.getLink = function(t, e, n) {
  if (t) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].$.rel === e) return t[r].$.href;
    if (t[n]) return t[n].$.href;
  }
};
vt.getContent = function(t) {
  return typeof t._ == "string" ? t._ : typeof t == "object" ? new hz.Builder({ headless: !0, explicitRoot: !0, rootName: "div", renderOpts: { pretty: !1 } }).buildObject(t) : t;
};
vt.copyFromXML = function(t, e, n) {
  n.forEach(function(r) {
    let i = r, o = r, s = {};
    Array.isArray(r) && (i = r[0], o = r[1], r.length > 2 && (s = r[2]));
    const { keepArray: a, includeSnippet: c } = s;
    t[i] !== void 0 && (e[o] = a ? t[i] : t[i][0]), e[o] && typeof e[o]._ == "string" && (e[o] = e[o]._), c && e[o] && typeof e[o] == "string" && (e[o + "Snippet"] = vt.getSnippet(e[o]));
  });
};
vt.maybePromisify = function(t, e) {
  return t ? e.then(
    (n) => setTimeout(() => t(null, n)),
    (n) => setTimeout(() => t(n))
  ) : e;
};
const gz = "utf8", bz = /(encoding|charset)\s*=\s*(\S+)/, yz = ["ascii", "utf8", "utf16le", "ucs2", "base64", "latin1", "binary", "hex"], vz = {
  "utf-8": "utf8",
  "iso-8859-1": "latin1"
};
vt.getEncodingFromContentType = function(t) {
  t = t || "";
  let n = (t.match(bz) || [])[2] || "";
  return n = n.toLowerCase(), n = vz[n] || n, (!n || yz.indexOf(n) === -1) && (n = gz), n;
};
var xz = Mu.exports;
const wz = Fr, Ez = kr, Tz = dt, qa = Bn, Qn = Id, Ee = xz, Sz = {
  "User-Agent": "rss-parser",
  Accept: "application/rss+xml"
}, _z = 5, Nz = 6e4;
let Az = class {
  constructor(e = {}) {
    e.headers = e.headers || {}, e.xml2js = e.xml2js || {}, e.customFields = e.customFields || {}, e.customFields.item = e.customFields.item || [], e.customFields.feed = e.customFields.feed || [], e.requestOptions = e.requestOptions || {}, e.maxRedirects || (e.maxRedirects = _z), e.timeout || (e.timeout = Nz), this.options = e, this.xmlParser = new Tz.Parser(this.options.xml2js);
  }
  parseString(e, n) {
    let r = new Promise((i, o) => {
      this.xmlParser.parseString(e, (s, a) => {
        if (s) return o(s);
        if (!a)
          return o(new Error("Unable to parse XML."));
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
              return o(new Error("default RSS version not recognized."));
          }
        else
          return o(new Error("Feed not recognized as RSS 1 or 2."));
        i(c);
      });
    });
    return r = Ee.maybePromisify(n, r), r;
  }
  parseURL(e, n, r = 0) {
    let i = "", o = e.indexOf("https") === 0 ? Ez.get : wz.get, s = qa.parse(e), a = Object.assign({}, Sz, this.options.headers), c = null, l = new Promise((u, p) => {
      const d = Object.assign({ headers: a }, s, this.options.requestOptions);
      o(d, (m) => {
        if (this.options.maxRedirects && m.statusCode >= 300 && m.statusCode < 400 && m.headers.location) {
          if (r === this.options.maxRedirects)
            return p(new Error("Too many redirects"));
          {
            const g = qa.resolve(e, m.headers.location);
            return this.parseURL(g, null, r + 1).then(u, p);
          }
        } else if (m.statusCode >= 300)
          return p(new Error("Status code " + m.statusCode));
        let h = Ee.getEncodingFromContentType(m.headers["content-type"]);
        m.setEncoding(h), m.on("data", (g) => {
          i += g;
        }), m.on("end", () => this.parseString(i).then(u, p));
      }).on("error", p), c = setTimeout(() => p(new Error("Request timed out after " + this.options.timeout + "ms")), this.options.timeout);
    }).then((u) => (clearTimeout(c), Promise.resolve(u)), (u) => (clearTimeout(c), Promise.reject(u)));
    return l = Ee.maybePromisify(n, l), l;
  }
  buildAtomFeed(e) {
    let n = { items: [] };
    if (Ee.copyFromXML(e.feed, n, this.options.customFields.feed), e.feed.link && (n.link = Ee.getLink(e.feed.link, "alternate", 0), n.feedUrl = Ee.getLink(e.feed.link, "self", 1)), e.feed.title) {
      let r = e.feed.title[0] || "";
      r._ && (r = r._), r && (n.title = r);
    }
    return e.feed.updated && (n.lastBuildDate = e.feed.updated[0]), n.items = (e.feed.entry || []).map((r) => this.parseItemAtom(r)), n;
  }
  parseItemAtom(e) {
    let n = {};
    if (Ee.copyFromXML(e, n, this.options.customFields.item), e.title) {
      let r = e.title[0] || "";
      r._ && (r = r._), r && (n.title = r);
    }
    return e.link && e.link.length && (n.link = Ee.getLink(e.link, "alternate", 0)), e.published && e.published.length && e.published[0].length && (n.pubDate = new Date(e.published[0]).toISOString()), !n.pubDate && e.updated && e.updated.length && e.updated[0].length && (n.pubDate = new Date(e.updated[0]).toISOString()), e.author && e.author.length && e.author[0].name && e.author[0].name.length && (n.author = e.author[0].name[0]), e.content && e.content.length && (n.content = Ee.getContent(e.content[0]), n.contentSnippet = Ee.getSnippet(n.content)), e.summary && e.summary.length && (n.summary = Ee.getContent(e.summary[0])), e.id && (n.id = e.id[0]), this.setISODate(n), n;
  }
  buildRSS0_9(e) {
    var n = e.rss.channel[0], r = n.item;
    return this.buildRSS(n, r);
  }
  buildRSS1(e) {
    e = e["rdf:RDF"];
    let n = e.channel[0], r = e.item;
    return this.buildRSS(n, r);
  }
  buildRSS2(e) {
    let n = e.rss.channel[0], r = n.item, i = this.buildRSS(n, r);
    return e.rss.$ && e.rss.$["xmlns:itunes"] && this.decorateItunes(i, n), i;
  }
  buildRSS(e, n) {
    n = n || [];
    let r = { items: [] }, i = Qn.feed.concat(this.options.customFields.feed), o = Qn.item.concat(this.options.customFields.item);
    if (e["atom:link"] && e["atom:link"][0] && e["atom:link"][0].$ && (r.feedUrl = e["atom:link"][0].$.href), e.image && e.image[0] && e.image[0].url) {
      r.image = {};
      let a = e.image[0];
      a.link && (r.image.link = a.link[0]), a.url && (r.image.url = a.url[0]), a.title && (r.image.title = a.title[0]), a.width && (r.image.width = a.width[0]), a.height && (r.image.height = a.height[0]);
    }
    const s = this.generatePaginationLinks(e);
    return Object.keys(s).length && (r.paginationLinks = s), Ee.copyFromXML(e, r, i), r.items = n.map((a) => this.parseItemRss(a, o)), r;
  }
  parseItemRss(e, n) {
    let r = {};
    return Ee.copyFromXML(e, r, n), e.enclosure && (r.enclosure = e.enclosure[0].$), e.description && (r.content = Ee.getContent(e.description[0]), r.contentSnippet = Ee.getSnippet(r.content)), e.guid && (r.guid = e.guid[0], r.guid._ && (r.guid = r.guid._)), e.$ && e.$["rdf:about"] && (r["rdf:about"] = e.$["rdf:about"]), e.category && (r.categories = e.category), this.setISODate(r), r;
  }
  /**
   * Add iTunes specific fields from XML to extracted JSON
   *
   * @access public
   * @param {object} feed extracted
   * @param {object} channel parsed XML
   */
  decorateItunes(e, n) {
    let r = n.item || [];
    if (e.itunes = {}, n["itunes:owner"]) {
      let i = {};
      n["itunes:owner"][0]["itunes:name"] && (i.name = n["itunes:owner"][0]["itunes:name"][0]), n["itunes:owner"][0]["itunes:email"] && (i.email = n["itunes:owner"][0]["itunes:email"][0]), e.itunes.owner = i;
    }
    if (n["itunes:image"]) {
      let i;
      i = n["itunes:image"][0] && n["itunes:image"][0].$ && n["itunes:image"][0].$.href ? n["itunes:image"][0].$.href : null, i && (e.itunes.image = i);
    }
    if (n["itunes:category"]) {
      const i = n["itunes:category"].map((o) => ({
        name: o && o.$ && o.$.text,
        subs: o["itunes:category"] ? o["itunes:category"].map((s) => ({
          name: s && s.$ && s.$.text
        })) : null
      }));
      e.itunes.categories = i.map((o) => o.name), e.itunes.categoriesWithSubs = i;
    }
    if (n["itunes:keywords"])
      if (n["itunes:keywords"].length > 1)
        e.itunes.keywords = n["itunes:keywords"].map(
          (i) => i && i.$ && i.$.text
        );
      else {
        let i = n["itunes:keywords"][0];
        i && typeof i._ == "string" && (i = i._), i && i.$ && i.$.text ? e.itunes.keywords = i.$.text.split(",") : typeof i == "string" && (e.itunes.keywords = i.split(","));
      }
    Ee.copyFromXML(n, e.itunes, Qn.podcastFeed), r.forEach((i, o) => {
      let s = e.items[o];
      s.itunes = {}, Ee.copyFromXML(i, s.itunes, Qn.podcastItem);
      let a = i["itunes:image"];
      a && a[0] && a[0].$ && a[0].$.href && (s.itunes.image = a[0].$.href);
    });
  }
  setISODate(e) {
    let n = e.pubDate || e.date;
    if (n)
      try {
        e.isoDate = new Date(n.trim()).toISOString();
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
  generatePaginationLinks(e) {
    if (!e["atom:link"])
      return {};
    const n = ["self", "first", "next", "prev", "last"];
    return e["atom:link"].reduce((r, i) => (!i.$ || !n.includes(i.$.rel) || (r[i.$.rel] = i.$.href), r), {});
  }
};
var Oz = Az, Dz = Oz;
const Cz = /* @__PURE__ */ Gt(Dz);
function Zu(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Iz } = Object.prototype, { getPrototypeOf: hs } = Object, { iterator: $r, toStringTag: el } = Symbol, Vr = /* @__PURE__ */ ((t) => (e) => {
  const n = Iz.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ze = (t) => (t = t.toLowerCase(), (e) => Vr(e) === t), zr = (t) => (e) => typeof e === t, { isArray: hn } = Array, ln = zr("undefined");
function Un(t) {
  return t !== null && !ln(t) && t.constructor !== null && !ln(t.constructor) && Ue(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const tl = Ze("ArrayBuffer");
function Rz(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && tl(t.buffer), e;
}
const Lz = zr("string"), Ue = zr("function"), nl = zr("number"), jn = (t) => t !== null && typeof t == "object", Pz = (t) => t === !0 || t === !1, ur = (t) => {
  if (Vr(t) !== "object")
    return !1;
  const e = hs(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(el in t) && !($r in t);
}, Fz = (t) => {
  if (!jn(t) || Un(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, kz = Ze("Date"), qz = Ze("File"), Bz = Ze("Blob"), Mz = Ze("FileList"), Uz = (t) => jn(t) && Ue(t.pipe), jz = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Ue(t.append) && ((e = Vr(t)) === "formdata" || // detect form-data instance
  e === "object" && Ue(t.toString) && t.toString() === "[object FormData]"));
}, $z = Ze("URLSearchParams"), [Vz, zz, Hz, Xz] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Ze), Gz = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $n(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, i;
  if (typeof t != "object" && (t = [t]), hn(t))
    for (r = 0, i = t.length; r < i; r++)
      e.call(null, t[r], r, t);
  else {
    if (Un(t))
      return;
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), s = o.length;
    let a;
    for (r = 0; r < s; r++)
      a = o[r], e.call(null, t[a], a, t);
  }
}
function rl(t, e) {
  if (Un(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], e === i.toLowerCase())
      return i;
  return null;
}
const Pt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, il = (t) => !ln(t) && t !== Pt;
function Io() {
  const { caseless: t, skipUndefined: e } = il(this) && this || {}, n = {}, r = (i, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const s = t && rl(n, o) || o;
    ur(n[s]) && ur(i) ? n[s] = Io(n[s], i) : ur(i) ? n[s] = Io({}, i) : hn(i) ? n[s] = i.slice() : (!e || !ln(i)) && (n[s] = i);
  };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && $n(arguments[i], r);
  return n;
}
const Wz = (t, e, n, { allOwnKeys: r } = {}) => ($n(
  e,
  (i, o) => {
    n && Ue(i) ? Object.defineProperty(t, o, {
      value: Zu(i, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(t, o, {
      value: i,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), t), Yz = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Kz = (t, e, n, r) => {
  t.prototype = Object.create(
    e.prototype,
    r
  ), Object.defineProperty(t.prototype, "constructor", {
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Jz = (t, e, n, r) => {
  let i, o, s;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(t), o = i.length; o-- > 0; )
      s = i[o], (!r || r(s, t, e)) && !a[s] && (e[s] = t[s], a[s] = !0);
    t = n !== !1 && hs(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Qz = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Zz = (t) => {
  if (!t) return null;
  if (hn(t)) return t;
  let e = t.length;
  if (!nl(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, eH = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && hs(Uint8Array)), tH = (t, e) => {
  const r = (t && t[$r]).call(t);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    e.call(t, o[0], o[1]);
  }
}, nH = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, rH = Ze("HTMLFormElement"), iH = (t) => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
  return r.toUpperCase() + i;
}), Ba = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), oH = Ze("RegExp"), ol = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  $n(n, (i, o) => {
    let s;
    (s = e(i, o, t)) !== !1 && (r[o] = s || i);
  }), Object.defineProperties(t, r);
}, sH = (t) => {
  ol(t, (e, n) => {
    if (Ue(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (Ue(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, aH = (t, e) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return hn(t) ? r(t) : r(String(t).split(e)), n;
}, cH = () => {
}, uH = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function lH(t) {
  return !!(t && Ue(t.append) && t[el] === "FormData" && t[$r]);
}
const pH = (t) => {
  const e = new Array(10), n = (r, i) => {
    if (jn(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (Un(r))
        return r;
      if (!("toJSON" in r)) {
        e[i] = r;
        const o = hn(r) ? [] : {};
        return $n(r, (s, a) => {
          const c = n(s, i + 1);
          !ln(c) && (o[a] = c);
        }), e[i] = void 0, o;
      }
    }
    return r;
  };
  return n(t, 0);
}, dH = Ze("AsyncFunction"), fH = (t) => t && (jn(t) || Ue(t)) && Ue(t.then) && Ue(t.catch), sl = ((t, e) => t ? setImmediate : e ? ((n, r) => (Pt.addEventListener(
  "message",
  ({ source: i, data: o }) => {
    i === Pt && o === n && r.length && r.shift()();
  },
  !1
), (i) => {
  r.push(i), Pt.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Ue(Pt.postMessage)), mH = typeof queueMicrotask < "u" ? queueMicrotask.bind(Pt) : typeof process < "u" && process.nextTick || sl, hH = (t) => t != null && Ue(t[$r]), A = {
  isArray: hn,
  isArrayBuffer: tl,
  isBuffer: Un,
  isFormData: jz,
  isArrayBufferView: Rz,
  isString: Lz,
  isNumber: nl,
  isBoolean: Pz,
  isObject: jn,
  isPlainObject: ur,
  isEmptyObject: Fz,
  isReadableStream: Vz,
  isRequest: zz,
  isResponse: Hz,
  isHeaders: Xz,
  isUndefined: ln,
  isDate: kz,
  isFile: qz,
  isBlob: Bz,
  isRegExp: oH,
  isFunction: Ue,
  isStream: Uz,
  isURLSearchParams: $z,
  isTypedArray: eH,
  isFileList: Mz,
  forEach: $n,
  merge: Io,
  extend: Wz,
  trim: Gz,
  stripBOM: Yz,
  inherits: Kz,
  toFlatObject: Jz,
  kindOf: Vr,
  kindOfTest: Ze,
  endsWith: Qz,
  toArray: Zz,
  forEachEntry: tH,
  matchAll: nH,
  isHTMLForm: rH,
  hasOwnProperty: Ba,
  hasOwnProp: Ba,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ol,
  freezeMethods: sH,
  toObjectSet: aH,
  toCamelCase: iH,
  noop: cH,
  toFiniteNumber: uH,
  findKey: rl,
  global: Pt,
  isContextDefined: il,
  isSpecCompliantForm: lH,
  toJSONObject: pH,
  isAsyncFn: dH,
  isThenable: fH,
  setImmediate: sl,
  asap: mH,
  isIterable: hH
};
let k = class al extends Error {
  static from(e, n, r, i, o, s) {
    const a = new al(e.message, n || e.code, r, i, o);
    return a.cause = e, a.name = e.name, s && Object.assign(a, s), a;
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
  constructor(e, n, r, i, o) {
    super(e), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), i && (this.request = i), o && (this.response = o, this.status = o.status);
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
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
k.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
k.ERR_BAD_OPTION = "ERR_BAD_OPTION";
k.ECONNABORTED = "ECONNABORTED";
k.ETIMEDOUT = "ETIMEDOUT";
k.ERR_NETWORK = "ERR_NETWORK";
k.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
k.ERR_DEPRECATED = "ERR_DEPRECATED";
k.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
k.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
k.ERR_CANCELED = "ERR_CANCELED";
k.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
k.ERR_INVALID_URL = "ERR_INVALID_URL";
var cl = Re.Stream, gH = Nt, bH = et;
function et() {
  this.source = null, this.dataSize = 0, this.maxDataSize = 1024 * 1024, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
}
gH.inherits(et, cl);
et.create = function(t, e) {
  var n = new this();
  e = e || {};
  for (var r in e)
    n[r] = e[r];
  n.source = t;
  var i = t.emit;
  return t.emit = function() {
    return n._handleEmit(arguments), i.apply(t, arguments);
  }, t.on("error", function() {
  }), n.pauseStream && t.pause(), n;
};
Object.defineProperty(et.prototype, "readable", {
  configurable: !0,
  enumerable: !0,
  get: function() {
    return this.source.readable;
  }
});
et.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};
et.prototype.resume = function() {
  this._released || this.release(), this.source.resume();
};
et.prototype.pause = function() {
  this.source.pause();
};
et.prototype.release = function() {
  this._released = !0, this._bufferedEvents.forEach((function(t) {
    this.emit.apply(this, t);
  }).bind(this)), this._bufferedEvents = [];
};
et.prototype.pipe = function() {
  var t = cl.prototype.pipe.apply(this, arguments);
  return this.resume(), t;
};
et.prototype._handleEmit = function(t) {
  if (this._released) {
    this.emit.apply(this, t);
    return;
  }
  t[0] === "data" && (this.dataSize += t[1].length, this._checkIfMaxDataSizeExceeded()), this._bufferedEvents.push(t);
};
et.prototype._checkIfMaxDataSizeExceeded = function() {
  if (!this._maxDataSizeExceeded && !(this.dataSize <= this.maxDataSize)) {
    this._maxDataSizeExceeded = !0;
    var t = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", new Error(t));
  }
};
var yH = Nt, ul = Re.Stream, Ma = bH, vH = le;
function le() {
  this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2 * 1024 * 1024, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
}
yH.inherits(le, ul);
le.create = function(t) {
  var e = new this();
  t = t || {};
  for (var n in t)
    e[n] = t[n];
  return e;
};
le.isStreamLike = function(t) {
  return typeof t != "function" && typeof t != "string" && typeof t != "boolean" && typeof t != "number" && !Buffer.isBuffer(t);
};
le.prototype.append = function(t) {
  var e = le.isStreamLike(t);
  if (e) {
    if (!(t instanceof Ma)) {
      var n = Ma.create(t, {
        maxDataSize: 1 / 0,
        pauseStream: this.pauseStreams
      });
      t.on("data", this._checkDataSize.bind(this)), t = n;
    }
    this._handleErrors(t), this.pauseStreams && t.pause();
  }
  return this._streams.push(t), this;
};
le.prototype.pipe = function(t, e) {
  return ul.prototype.pipe.call(this, t, e), this.resume(), t;
};
le.prototype._getNext = function() {
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
le.prototype._realGetNext = function() {
  var t = this._streams.shift();
  if (typeof t > "u") {
    this.end();
    return;
  }
  if (typeof t != "function") {
    this._pipeNext(t);
    return;
  }
  var e = t;
  e((function(n) {
    var r = le.isStreamLike(n);
    r && (n.on("data", this._checkDataSize.bind(this)), this._handleErrors(n)), this._pipeNext(n);
  }).bind(this));
};
le.prototype._pipeNext = function(t) {
  this._currentStream = t;
  var e = le.isStreamLike(t);
  if (e) {
    t.on("end", this._getNext.bind(this)), t.pipe(this, { end: !1 });
    return;
  }
  var n = t;
  this.write(n), this._getNext();
};
le.prototype._handleErrors = function(t) {
  var e = this;
  t.on("error", function(n) {
    e._emitError(n);
  });
};
le.prototype.write = function(t) {
  this.emit("data", t);
};
le.prototype.pause = function() {
  this.pauseStreams && (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function" && this._currentStream.pause(), this.emit("pause"));
};
le.prototype.resume = function() {
  this._released || (this._released = !0, this.writable = !0, this._getNext()), this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function" && this._currentStream.resume(), this.emit("resume");
};
le.prototype.end = function() {
  this._reset(), this.emit("end");
};
le.prototype.destroy = function() {
  this._reset(), this.emit("close");
};
le.prototype._reset = function() {
  this.writable = !1, this._streams = [], this._currentStream = null;
};
le.prototype._checkDataSize = function() {
  if (this._updateDataSize(), !(this.dataSize <= this.maxDataSize)) {
    var t = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(new Error(t));
  }
};
le.prototype._updateDataSize = function() {
  this.dataSize = 0;
  var t = this;
  this._streams.forEach(function(e) {
    e.dataSize && (t.dataSize += e.dataSize);
  }), this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize);
};
le.prototype._emitError = function(t) {
  this._reset(), this.emit("error", t);
};
var ll = {};
const xH = {
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
var wH = xH;
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(t) {
  var e = wH, n = Y.extname, r = /^\s*([^;\s]*)(?:;|\s|$)/, i = /^text\//i;
  t.charset = o, t.charsets = { lookup: o }, t.contentType = s, t.extension = a, t.extensions = /* @__PURE__ */ Object.create(null), t.lookup = c, t.types = /* @__PURE__ */ Object.create(null), l(t.extensions, t.types);
  function o(u) {
    if (!u || typeof u != "string")
      return !1;
    var p = r.exec(u), d = p && e[p[1].toLowerCase()];
    return d && d.charset ? d.charset : p && i.test(p[1]) ? "UTF-8" : !1;
  }
  function s(u) {
    if (!u || typeof u != "string")
      return !1;
    var p = u.indexOf("/") === -1 ? t.lookup(u) : u;
    if (!p)
      return !1;
    if (p.indexOf("charset") === -1) {
      var d = t.charset(p);
      d && (p += "; charset=" + d.toLowerCase());
    }
    return p;
  }
  function a(u) {
    if (!u || typeof u != "string")
      return !1;
    var p = r.exec(u), d = p && t.extensions[p[1].toLowerCase()];
    return !d || !d.length ? !1 : d[0];
  }
  function c(u) {
    if (!u || typeof u != "string")
      return !1;
    var p = n("x." + u).toLowerCase().substr(1);
    return p && t.types[p] || !1;
  }
  function l(u, p) {
    var d = ["nginx", "apache", void 0, "iana"];
    Object.keys(e).forEach(function(m) {
      var h = e[m], g = h.extensions;
      if (!(!g || !g.length)) {
        u[m] = g;
        for (var T = 0; T < g.length; T++) {
          var v = g[T];
          if (p[v]) {
            var b = d.indexOf(e[p[v]].source), w = d.indexOf(h.source);
            if (p[v] !== "application/octet-stream" && (b > w || b === w && p[v].substr(0, 12) === "application/"))
              continue;
          }
          p[v] = m;
        }
      }
    });
  }
})(ll);
var EH = TH;
function TH(t) {
  var e = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
  e ? e(t) : setTimeout(t, 0);
}
var Ua = EH, pl = SH;
function SH(t) {
  var e = !1;
  return Ua(function() {
    e = !0;
  }), function(r, i) {
    e ? t(r, i) : Ua(function() {
      t(r, i);
    });
  };
}
var dl = _H;
function _H(t) {
  Object.keys(t.jobs).forEach(NH.bind(t)), t.jobs = {};
}
function NH(t) {
  typeof this.jobs[t] == "function" && this.jobs[t]();
}
var ja = pl, AH = dl, fl = OH;
function OH(t, e, n, r) {
  var i = n.keyedList ? n.keyedList[n.index] : n.index;
  n.jobs[i] = DH(e, i, t[i], function(o, s) {
    i in n.jobs && (delete n.jobs[i], o ? AH(n) : n.results[i] = s, r(o, n.results));
  });
}
function DH(t, e, n, r) {
  var i;
  return t.length == 2 ? i = t(n, ja(r)) : i = t(n, e, ja(r)), i;
}
var ml = CH;
function CH(t, e) {
  var n = !Array.isArray(t), r = {
    index: 0,
    keyedList: n || e ? Object.keys(t) : null,
    jobs: {},
    results: n ? {} : [],
    size: n ? Object.keys(t).length : t.length
  };
  return e && r.keyedList.sort(n ? e : function(i, o) {
    return e(t[i], t[o]);
  }), r;
}
var IH = dl, RH = pl, hl = LH;
function LH(t) {
  Object.keys(this.jobs).length && (this.index = this.size, IH(this), RH(t)(null, this.results));
}
var PH = fl, FH = ml, kH = hl, qH = BH;
function BH(t, e, n) {
  for (var r = FH(t); r.index < (r.keyedList || t).length; )
    PH(t, e, r, function(i, o) {
      if (i) {
        n(i, o);
        return;
      }
      if (Object.keys(r.jobs).length === 0) {
        n(null, r.results);
        return;
      }
    }), r.index++;
  return kH.bind(r, n);
}
var Hr = { exports: {} }, $a = fl, MH = ml, UH = hl;
Hr.exports = jH;
Hr.exports.ascending = gl;
Hr.exports.descending = $H;
function jH(t, e, n, r) {
  var i = MH(t, n);
  return $a(t, e, i, function o(s, a) {
    if (s) {
      r(s, a);
      return;
    }
    if (i.index++, i.index < (i.keyedList || t).length) {
      $a(t, e, i, o);
      return;
    }
    r(null, i.results);
  }), UH.bind(i, r);
}
function gl(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function $H(t, e) {
  return -1 * gl(t, e);
}
var bl = Hr.exports, VH = bl, zH = HH;
function HH(t, e, n) {
  return VH(t, e, null, n);
}
var XH = {
  parallel: qH,
  serial: zH,
  serialOrdered: bl
}, yl = Object, GH = Error, WH = EvalError, YH = RangeError, KH = ReferenceError, JH = SyntaxError, gs = TypeError, QH = URIError, ZH = Math.abs, eX = Math.floor, tX = Math.max, nX = Math.min, rX = Math.pow, iX = Math.round, oX = Number.isNaN || function(e) {
  return e !== e;
}, sX = oX, aX = function(e) {
  return sX(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, cX = Object.getOwnPropertyDescriptor, lr = cX;
if (lr)
  try {
    lr([], "length");
  } catch {
    lr = null;
  }
var vl = lr, pr = Object.defineProperty || !1;
if (pr)
  try {
    pr({}, "a", { value: 1 });
  } catch {
    pr = !1;
  }
var uX = pr, $i, Va;
function xl() {
  return Va || (Va = 1, $i = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, n = Symbol("test"), r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var i = 42;
    e[n] = i;
    for (var o in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(e);
    if (s.length !== 1 || s[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(e, n)
      );
      if (a.value !== i || a.enumerable !== !0)
        return !1;
    }
    return !0;
  }), $i;
}
var Vi, za;
function lX() {
  if (za) return Vi;
  za = 1;
  var t = typeof Symbol < "u" && Symbol, e = xl();
  return Vi = function() {
    return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, Vi;
}
var zi, Ha;
function wl() {
  return Ha || (Ha = 1, zi = typeof Reflect < "u" && Reflect.getPrototypeOf || null), zi;
}
var Hi, Xa;
function El() {
  if (Xa) return Hi;
  Xa = 1;
  var t = yl;
  return Hi = t.getPrototypeOf || null, Hi;
}
var pX = "Function.prototype.bind called on incompatible ", dX = Object.prototype.toString, fX = Math.max, mX = "[object Function]", Ga = function(e, n) {
  for (var r = [], i = 0; i < e.length; i += 1)
    r[i] = e[i];
  for (var o = 0; o < n.length; o += 1)
    r[o + e.length] = n[o];
  return r;
}, hX = function(e, n) {
  for (var r = [], i = n, o = 0; i < e.length; i += 1, o += 1)
    r[o] = e[i];
  return r;
}, gX = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, bX = function(e) {
  var n = this;
  if (typeof n != "function" || dX.apply(n) !== mX)
    throw new TypeError(pX + n);
  for (var r = hX(arguments, 1), i, o = function() {
    if (this instanceof i) {
      var u = n.apply(
        this,
        Ga(r, arguments)
      );
      return Object(u) === u ? u : this;
    }
    return n.apply(
      e,
      Ga(r, arguments)
    );
  }, s = fX(0, n.length - r.length), a = [], c = 0; c < s; c++)
    a[c] = "$" + c;
  if (i = Function("binder", "return function (" + gX(a, ",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var l = function() {
    };
    l.prototype = n.prototype, i.prototype = new l(), l.prototype = null;
  }
  return i;
}, yX = bX, Xr = Function.prototype.bind || yX, Xi, Wa;
function bs() {
  return Wa || (Wa = 1, Xi = Function.prototype.call), Xi;
}
var Gi, Ya;
function Tl() {
  return Ya || (Ya = 1, Gi = Function.prototype.apply), Gi;
}
var Wi, Ka;
function vX() {
  return Ka || (Ka = 1, Wi = typeof Reflect < "u" && Reflect && Reflect.apply), Wi;
}
var Yi, Ja;
function xX() {
  if (Ja) return Yi;
  Ja = 1;
  var t = Xr, e = Tl(), n = bs(), r = vX();
  return Yi = r || t.call(n, e), Yi;
}
var Ki, Qa;
function wX() {
  if (Qa) return Ki;
  Qa = 1;
  var t = Xr, e = gs, n = bs(), r = xX();
  return Ki = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new e("a function is required");
    return r(t, n, o);
  }, Ki;
}
var Ji, Za;
function EX() {
  if (Za) return Ji;
  Za = 1;
  var t = wX(), e = vl, n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var r = !!n && e && e(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return Ji = r && typeof r.get == "function" ? t([r.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(a) {
      return o(a == null ? a : i(a));
    }
  ) : !1, Ji;
}
var Qi, ec;
function TX() {
  if (ec) return Qi;
  ec = 1;
  var t = wl(), e = El(), n = EX();
  return Qi = t ? function(i) {
    return t(i);
  } : e ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return e(i);
  } : n ? function(i) {
    return n(i);
  } : null, Qi;
}
var SX = Function.prototype.call, _X = Object.prototype.hasOwnProperty, NX = Xr, ys = NX.call(SX, _X), W, AX = yl, OX = GH, DX = WH, CX = YH, IX = KH, pn = JH, nn = gs, RX = QH, LX = ZH, PX = eX, FX = tX, kX = nX, qX = rX, BX = iX, MX = aX, Sl = Function, Zi = function(t) {
  try {
    return Sl('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, On = vl, UX = uX, eo = function() {
  throw new nn();
}, jX = On ? function() {
  try {
    return arguments.callee, eo;
  } catch {
    try {
      return On(arguments, "callee").get;
    } catch {
      return eo;
    }
  }
}() : eo, Kt = lX()(), ve = TX(), $X = El(), VX = wl(), _l = Tl(), Vn = bs(), Qt = {}, zX = typeof Uint8Array > "u" || !ve ? W : ve(Uint8Array), Ut = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? W : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? W : ArrayBuffer,
  "%ArrayIteratorPrototype%": Kt && ve ? ve([][Symbol.iterator]()) : W,
  "%AsyncFromSyncIteratorPrototype%": W,
  "%AsyncFunction%": Qt,
  "%AsyncGenerator%": Qt,
  "%AsyncGeneratorFunction%": Qt,
  "%AsyncIteratorPrototype%": Qt,
  "%Atomics%": typeof Atomics > "u" ? W : Atomics,
  "%BigInt%": typeof BigInt > "u" ? W : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? W : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? W : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? W : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": OX,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": DX,
  "%Float16Array%": typeof Float16Array > "u" ? W : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? W : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? W : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? W : FinalizationRegistry,
  "%Function%": Sl,
  "%GeneratorFunction%": Qt,
  "%Int8Array%": typeof Int8Array > "u" ? W : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? W : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? W : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Kt && ve ? ve(ve([][Symbol.iterator]())) : W,
  "%JSON%": typeof JSON == "object" ? JSON : W,
  "%Map%": typeof Map > "u" ? W : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Kt || !ve ? W : ve((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": AX,
  "%Object.getOwnPropertyDescriptor%": On,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? W : Promise,
  "%Proxy%": typeof Proxy > "u" ? W : Proxy,
  "%RangeError%": CX,
  "%ReferenceError%": IX,
  "%Reflect%": typeof Reflect > "u" ? W : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? W : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Kt || !ve ? W : ve((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? W : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Kt && ve ? ve(""[Symbol.iterator]()) : W,
  "%Symbol%": Kt ? Symbol : W,
  "%SyntaxError%": pn,
  "%ThrowTypeError%": jX,
  "%TypedArray%": zX,
  "%TypeError%": nn,
  "%Uint8Array%": typeof Uint8Array > "u" ? W : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? W : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? W : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? W : Uint32Array,
  "%URIError%": RX,
  "%WeakMap%": typeof WeakMap > "u" ? W : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? W : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? W : WeakSet,
  "%Function.prototype.call%": Vn,
  "%Function.prototype.apply%": _l,
  "%Object.defineProperty%": UX,
  "%Object.getPrototypeOf%": $X,
  "%Math.abs%": LX,
  "%Math.floor%": PX,
  "%Math.max%": FX,
  "%Math.min%": kX,
  "%Math.pow%": qX,
  "%Math.round%": BX,
  "%Math.sign%": MX,
  "%Reflect.getPrototypeOf%": VX
};
if (ve)
  try {
    null.error;
  } catch (t) {
    var HX = ve(ve(t));
    Ut["%Error.prototype%"] = HX;
  }
var XX = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = Zi("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = Zi("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = Zi("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = t("%AsyncGenerator%");
    i && ve && (n = ve(i.prototype));
  }
  return Ut[e] = n, n;
}, tc = {
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
}, zn = Xr, Tr = ys, GX = zn.call(Vn, Array.prototype.concat), WX = zn.call(_l, Array.prototype.splice), nc = zn.call(Vn, String.prototype.replace), Sr = zn.call(Vn, String.prototype.slice), YX = zn.call(Vn, RegExp.prototype.exec), KX = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, JX = /\\(\\)?/g, QX = function(e) {
  var n = Sr(e, 0, 1), r = Sr(e, -1);
  if (n === "%" && r !== "%")
    throw new pn("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new pn("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return nc(e, KX, function(o, s, a, c) {
    i[i.length] = a ? nc(c, JX, "$1") : s || o;
  }), i;
}, ZX = function(e, n) {
  var r = e, i;
  if (Tr(tc, r) && (i = tc[r], r = "%" + i[0] + "%"), Tr(Ut, r)) {
    var o = Ut[r];
    if (o === Qt && (o = XX(r)), typeof o > "u" && !n)
      throw new nn("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: r,
      value: o
    };
  }
  throw new pn("intrinsic " + e + " does not exist!");
}, eG = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new nn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new nn('"allowMissing" argument must be a boolean');
  if (YX(/^%?[^%]*%?$/, e) === null)
    throw new pn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = QX(e), i = r.length > 0 ? r[0] : "", o = ZX("%" + i + "%", n), s = o.name, a = o.value, c = !1, l = o.alias;
  l && (i = l[0], WX(r, GX([0, 1], l)));
  for (var u = 1, p = !0; u < r.length; u += 1) {
    var d = r[u], f = Sr(d, 0, 1), m = Sr(d, -1);
    if ((f === '"' || f === "'" || f === "`" || m === '"' || m === "'" || m === "`") && f !== m)
      throw new pn("property names with quotes must have matching quotes");
    if ((d === "constructor" || !p) && (c = !0), i += "." + d, s = "%" + i + "%", Tr(Ut, s))
      a = Ut[s];
    else if (a != null) {
      if (!(d in a)) {
        if (!n)
          throw new nn("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (On && u + 1 >= r.length) {
        var h = On(a, d);
        p = !!h, p && "get" in h && !("originalValue" in h.get) ? a = h.get : a = a[d];
      } else
        p = Tr(a, d), a = a[d];
      p && !c && (Ut[s] = a);
    }
  }
  return a;
}, to, rc;
function tG() {
  if (rc) return to;
  rc = 1;
  var t = xl();
  return to = function() {
    return t() && !!Symbol.toStringTag;
  }, to;
}
var nG = eG, ic = nG("%Object.defineProperty%", !0), rG = tG()(), iG = ys, oG = gs, Zn = rG ? Symbol.toStringTag : null, sG = function(e, n) {
  var r = arguments.length > 2 && !!arguments[2] && arguments[2].force, i = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
  if (typeof r < "u" && typeof r != "boolean" || typeof i < "u" && typeof i != "boolean")
    throw new oG("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
  Zn && (r || !iG(e, Zn)) && (ic ? ic(e, Zn, {
    configurable: !i,
    enumerable: !1,
    value: n,
    writable: !1
  }) : e[Zn] = n);
}, aG = function(t, e) {
  return Object.keys(e).forEach(function(n) {
    t[n] = t[n] || e[n];
  }), t;
}, vs = vH, cG = Nt, no = Y, uG = Fr, lG = kr, pG = Bn.parse, dG = Mn, fG = Re.Stream, mG = Nu, ro = ll, hG = XH, gG = sG, _t = ys, Ro = aG;
function Q(t) {
  if (!(this instanceof Q))
    return new Q(t);
  this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], vs.call(this), t = t || {};
  for (var e in t)
    this[e] = t[e];
}
cG.inherits(Q, vs);
Q.LINE_BREAK = `\r
`;
Q.DEFAULT_CONTENT_TYPE = "application/octet-stream";
Q.prototype.append = function(t, e, n) {
  n = n || {}, typeof n == "string" && (n = { filename: n });
  var r = vs.prototype.append.bind(this);
  if ((typeof e == "number" || e == null) && (e = String(e)), Array.isArray(e)) {
    this._error(new Error("Arrays are not supported."));
    return;
  }
  var i = this._multiPartHeader(t, e, n), o = this._multiPartFooter();
  r(i), r(e), r(o), this._trackLength(i, e, n);
};
Q.prototype._trackLength = function(t, e, n) {
  var r = 0;
  n.knownLength != null ? r += Number(n.knownLength) : Buffer.isBuffer(e) ? r = e.length : typeof e == "string" && (r = Buffer.byteLength(e)), this._valueLength += r, this._overheadLength += Buffer.byteLength(t) + Q.LINE_BREAK.length, !(!e || !e.path && !(e.readable && _t(e, "httpVersion")) && !(e instanceof fG)) && (n.knownLength || this._valuesToMeasure.push(e));
};
Q.prototype._lengthRetriever = function(t, e) {
  _t(t, "fd") ? t.end != null && t.end != 1 / 0 && t.start != null ? e(null, t.end + 1 - (t.start ? t.start : 0)) : dG.stat(t.path, function(n, r) {
    if (n) {
      e(n);
      return;
    }
    var i = r.size - (t.start ? t.start : 0);
    e(null, i);
  }) : _t(t, "httpVersion") ? e(null, Number(t.headers["content-length"])) : _t(t, "httpModule") ? (t.on("response", function(n) {
    t.pause(), e(null, Number(n.headers["content-length"]));
  }), t.resume()) : e("Unknown stream");
};
Q.prototype._multiPartHeader = function(t, e, n) {
  if (typeof n.header == "string")
    return n.header;
  var r = this._getContentDisposition(e, n), i = this._getContentType(e, n), o = "", s = {
    // add custom disposition as third element or keep it two elements if not
    "Content-Disposition": ["form-data", 'name="' + t + '"'].concat(r || []),
    // if no content type. allow it to be empty array
    "Content-Type": [].concat(i || [])
  };
  typeof n.header == "object" && Ro(s, n.header);
  var a;
  for (var c in s)
    if (_t(s, c)) {
      if (a = s[c], a == null)
        continue;
      Array.isArray(a) || (a = [a]), a.length && (o += c + ": " + a.join("; ") + Q.LINE_BREAK);
    }
  return "--" + this.getBoundary() + Q.LINE_BREAK + o + Q.LINE_BREAK;
};
Q.prototype._getContentDisposition = function(t, e) {
  var n;
  if (typeof e.filepath == "string" ? n = no.normalize(e.filepath).replace(/\\/g, "/") : e.filename || t && (t.name || t.path) ? n = no.basename(e.filename || t && (t.name || t.path)) : t && t.readable && _t(t, "httpVersion") && (n = no.basename(t.client._httpMessage.path || "")), n)
    return 'filename="' + n + '"';
};
Q.prototype._getContentType = function(t, e) {
  var n = e.contentType;
  return !n && t && t.name && (n = ro.lookup(t.name)), !n && t && t.path && (n = ro.lookup(t.path)), !n && t && t.readable && _t(t, "httpVersion") && (n = t.headers["content-type"]), !n && (e.filepath || e.filename) && (n = ro.lookup(e.filepath || e.filename)), !n && t && typeof t == "object" && (n = Q.DEFAULT_CONTENT_TYPE), n;
};
Q.prototype._multiPartFooter = function() {
  return (function(t) {
    var e = Q.LINE_BREAK, n = this._streams.length === 0;
    n && (e += this._lastBoundary()), t(e);
  }).bind(this);
};
Q.prototype._lastBoundary = function() {
  return "--" + this.getBoundary() + "--" + Q.LINE_BREAK;
};
Q.prototype.getHeaders = function(t) {
  var e, n = {
    "content-type": "multipart/form-data; boundary=" + this.getBoundary()
  };
  for (e in t)
    _t(t, e) && (n[e.toLowerCase()] = t[e]);
  return n;
};
Q.prototype.setBoundary = function(t) {
  if (typeof t != "string")
    throw new TypeError("FormData boundary must be a string");
  this._boundary = t;
};
Q.prototype.getBoundary = function() {
  return this._boundary || this._generateBoundary(), this._boundary;
};
Q.prototype.getBuffer = function() {
  for (var t = new Buffer.alloc(0), e = this.getBoundary(), n = 0, r = this._streams.length; n < r; n++)
    typeof this._streams[n] != "function" && (Buffer.isBuffer(this._streams[n]) ? t = Buffer.concat([t, this._streams[n]]) : t = Buffer.concat([t, Buffer.from(this._streams[n])]), (typeof this._streams[n] != "string" || this._streams[n].substring(2, e.length + 2) !== e) && (t = Buffer.concat([t, Buffer.from(Q.LINE_BREAK)])));
  return Buffer.concat([t, Buffer.from(this._lastBoundary())]);
};
Q.prototype._generateBoundary = function() {
  this._boundary = "--------------------------" + mG.randomBytes(12).toString("hex");
};
Q.prototype.getLengthSync = function() {
  var t = this._overheadLength + this._valueLength;
  return this._streams.length && (t += this._lastBoundary().length), this.hasKnownLength() || this._error(new Error("Cannot calculate proper length in synchronous way.")), t;
};
Q.prototype.hasKnownLength = function() {
  var t = !0;
  return this._valuesToMeasure.length && (t = !1), t;
};
Q.prototype.getLength = function(t) {
  var e = this._overheadLength + this._valueLength;
  if (this._streams.length && (e += this._lastBoundary().length), !this._valuesToMeasure.length) {
    process.nextTick(t.bind(this, null, e));
    return;
  }
  hG.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, r) {
    if (n) {
      t(n);
      return;
    }
    r.forEach(function(i) {
      e += i;
    }), t(null, e);
  });
};
Q.prototype.submit = function(t, e) {
  var n, r, i = { method: "post" };
  return typeof t == "string" ? (t = pG(t), r = Ro({
    port: t.port,
    path: t.pathname,
    host: t.hostname,
    protocol: t.protocol
  }, i)) : (r = Ro(t, i), r.port || (r.port = r.protocol === "https:" ? 443 : 80)), r.headers = this.getHeaders(t.headers), r.protocol === "https:" ? n = lG.request(r) : n = uG.request(r), this.getLength((function(o, s) {
    if (o && o !== "Unknown stream") {
      this._error(o);
      return;
    }
    if (s && n.setHeader("Content-Length", s), this.pipe(n), e) {
      var a, c = function(l, u) {
        return n.removeListener("error", c), n.removeListener("response", a), e.call(this, l, u);
      };
      a = c.bind(this, null), n.on("error", c), n.on("response", a);
    }
  }).bind(this)), n;
};
Q.prototype._error = function(t) {
  this.error || (this.error = t, this.pause(), this.emit("error", t));
};
Q.prototype.toString = function() {
  return "[object FormData]";
};
gG(Q.prototype, "FormData");
var bG = Q;
const Nl = /* @__PURE__ */ Gt(bG);
function Lo(t) {
  return A.isPlainObject(t) || A.isArray(t);
}
function Al(t) {
  return A.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function oc(t, e, n) {
  return t ? t.concat(e).map(function(i, o) {
    return i = Al(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : e;
}
function yG(t) {
  return A.isArray(t) && !t.some(Lo);
}
const vG = A.toFlatObject(A, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Gr(t, e, n) {
  if (!A.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new (Nl || FormData)(), n = A.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, g) {
    return !A.isUndefined(g[h]);
  });
  const r = n.metaTokens, i = n.visitor || u, o = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(e);
  if (!A.isFunction(i))
    throw new TypeError("visitor must be a function");
  function l(m) {
    if (m === null) return "";
    if (A.isDate(m))
      return m.toISOString();
    if (A.isBoolean(m))
      return m.toString();
    if (!c && A.isBlob(m))
      throw new k("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(m) || A.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, h, g) {
    let T = m;
    if (m && !g && typeof m == "object") {
      if (A.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), m = JSON.stringify(m);
      else if (A.isArray(m) && yG(m) || (A.isFileList(m) || A.endsWith(h, "[]")) && (T = A.toArray(m)))
        return h = Al(h), T.forEach(function(b, w) {
          !(A.isUndefined(b) || b === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? oc([h], w, o) : s === null ? h : h + "[]",
            l(b)
          );
        }), !1;
    }
    return Lo(m) ? !0 : (e.append(oc(g, h, o), l(m)), !1);
  }
  const p = [], d = Object.assign(vG, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Lo
  });
  function f(m, h) {
    if (!A.isUndefined(m)) {
      if (p.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      p.push(m), A.forEach(m, function(T, v) {
        (!(A.isUndefined(T) || T === null) && i.call(
          e,
          T,
          A.isString(v) ? v.trim() : v,
          h,
          d
        )) === !0 && f(T, h ? h.concat(v) : [v]);
      }), p.pop();
    }
  }
  if (!A.isObject(t))
    throw new TypeError("data must be an object");
  return f(t), e;
}
function sc(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function Ol(t, e) {
  this._pairs = [], t && Gr(t, this, e);
}
const Dl = Ol.prototype;
Dl.append = function(e, n) {
  this._pairs.push([e, n]);
};
Dl.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, sc);
  } : sc;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function xG(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function xs(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || xG, i = A.isFunction(n) ? {
    serialize: n
  } : n, o = i && i.serialize;
  let s;
  if (o ? s = o(e, i) : s = A.isURLSearchParams(e) ? e.toString() : new Ol(e, i).toString(r), s) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class ac {
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
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
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
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
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
  forEach(e) {
    A.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Wr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, wG = Bn.URLSearchParams, io = "abcdefghijklmnopqrstuvwxyz", cc = "0123456789", Cl = {
  DIGIT: cc,
  ALPHA: io,
  ALPHA_DIGIT: io + io.toUpperCase() + cc
}, EG = (t = 16, e = Cl.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e, i = new Uint32Array(t);
  Nu.randomFillSync(i);
  for (let o = 0; o < t; o++)
    n += e[i[o] % r];
  return n;
}, TG = {
  isNode: !0,
  classes: {
    URLSearchParams: wG,
    FormData: Nl,
    Blob: typeof Blob < "u" && Blob || null
  },
  ALPHABET: Cl,
  generateString: EG,
  protocols: ["http", "https", "file", "data"]
}, ws = typeof window < "u" && typeof document < "u", Po = typeof navigator == "object" && navigator || void 0, SG = ws && (!Po || ["ReactNative", "NativeScript", "NS"].indexOf(Po.product) < 0), _G = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", NG = ws && window.location.href || "http://localhost", AG = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ws,
  hasStandardBrowserEnv: SG,
  hasStandardBrowserWebWorkerEnv: _G,
  navigator: Po,
  origin: NG
}, Symbol.toStringTag, { value: "Module" })), ue = {
  ...AG,
  ...TG
};
function OG(t, e) {
  return Gr(t, new ue.classes.URLSearchParams(), {
    visitor: function(n, r, i, o) {
      return ue.isNode && A.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function DG(t) {
  return A.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function CG(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], e[o] = t[o];
  return e;
}
function Il(t) {
  function e(n, r, i, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = o >= n.length;
    return s = !s && A.isArray(i) ? i.length : s, c ? (A.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !a) : ((!i[s] || !A.isObject(i[s])) && (i[s] = []), e(n, r, i[s], o) && A.isArray(i[s]) && (i[s] = CG(i[s])), !a);
  }
  if (A.isFormData(t) && A.isFunction(t.entries)) {
    const n = {};
    return A.forEachEntry(t, (r, i) => {
      e(DG(r), i, n, 0);
    }), n;
  }
  return null;
}
function IG(t, e, n) {
  if (A.isString(t))
    try {
      return (e || JSON.parse)(t), A.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Hn = {
  transitional: Wr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = A.isObject(e);
    if (o && A.isHTMLForm(e) && (e = new FormData(e)), A.isFormData(e))
      return i ? JSON.stringify(Il(e)) : e;
    if (A.isArrayBuffer(e) || A.isBuffer(e) || A.isStream(e) || A.isFile(e) || A.isBlob(e) || A.isReadableStream(e))
      return e;
    if (A.isArrayBufferView(e))
      return e.buffer;
    if (A.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return OG(e, this.formSerializer).toString();
      if ((a = A.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Gr(
          a ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || i ? (n.setContentType("application/json", !1), IG(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Hn.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (A.isResponse(e) || A.isReadableStream(e))
      return e;
    if (e && A.isString(e) && (r && !this.responseType || i)) {
      const s = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? k.from(a, k.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
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
    FormData: ue.classes.FormData,
    Blob: ue.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Hn.headers[t] = {};
});
const RG = A.toObjectSet([
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
]), LG = (t) => {
  const e = {};
  let n, r, i;
  return t && t.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), n = s.substring(0, i).trim().toLowerCase(), r = s.substring(i + 1).trim(), !(!n || e[n] && RG[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, uc = Symbol("internals");
function yn(t) {
  return t && String(t).trim().toLowerCase();
}
function dr(t) {
  return t === !1 || t == null ? t : A.isArray(t) ? t.map(dr) : String(t);
}
function PG(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const FG = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function oo(t, e, n, r, i) {
  if (A.isFunction(r))
    return r.call(this, e, n);
  if (i && (e = n), !!A.isString(e)) {
    if (A.isString(r))
      return e.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(e);
  }
}
function kG(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function qG(t, e) {
  const n = A.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(i, o, s) {
        return this[r].call(this, e, i, o, s);
      },
      configurable: !0
    });
  });
}
let _e = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const i = this;
    function o(a, c, l) {
      const u = yn(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = A.findKey(i, u);
      (!p || i[p] === void 0 || l === !0 || l === void 0 && i[p] !== !1) && (i[p || c] = dr(a));
    }
    const s = (a, c) => A.forEach(a, (l, u) => o(l, u, c));
    if (A.isPlainObject(e) || e instanceof this.constructor)
      s(e, n);
    else if (A.isString(e) && (e = e.trim()) && !FG(e))
      s(LG(e), n);
    else if (A.isObject(e) && A.isIterable(e)) {
      let a = {}, c, l;
      for (const u of e) {
        if (!A.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? A.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(a, n);
    } else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = yn(e), e) {
      const r = A.findKey(this, e);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return PG(i);
        if (A.isFunction(n))
          return n.call(this, i, r);
        if (A.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = yn(e), e) {
      const r = A.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || oo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (s = yn(s), s) {
        const a = A.findKey(r, s);
        a && (!n || oo(r, r[a], a, n)) && (delete r[a], i = !0);
      }
    }
    return A.isArray(e) ? e.forEach(o) : o(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || oo(this, this[o], o, e, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(e) {
    const n = this, r = {};
    return A.forEach(this, (i, o) => {
      const s = A.findKey(r, o);
      if (s) {
        n[s] = dr(i), delete n[o];
        return;
      }
      const a = e ? kG(o) : String(o).trim();
      a !== o && delete n[o], n[a] = dr(i), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = e && A.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(e) {
    const r = (this[uc] = this[uc] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(s) {
      const a = yn(s);
      r[a] || (qG(i, s), r[a] = !0);
    }
    return A.isArray(e) ? e.forEach(o) : o(e), this;
  }
};
_e.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(_e.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
A.freezeMethods(_e);
function so(t, e) {
  const n = this || Hn, r = e || n, i = _e.from(r.headers);
  let o = r.data;
  return A.forEach(t, function(a) {
    o = a.call(n, o, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), o;
}
function Rl(t) {
  return !!(t && t.__CANCEL__);
}
let zt = class extends k {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(e, n, r) {
    super(e ?? "canceled", k.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function en(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new k(
    "Request failed with status code " + n.status,
    [k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function BG(t) {
  return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function MG(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Es(t, e, n) {
  let r = !BG(e);
  return t && (r || n == !1) ? MG(t, e) : e;
}
var Ll = {}, UG = Bn.parse, jG = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}, $G = String.prototype.endsWith || function(t) {
  return t.length <= this.length && this.indexOf(t, this.length - t.length) !== -1;
};
function VG(t) {
  var e = typeof t == "string" ? UG(t) : t || {}, n = e.protocol, r = e.host, i = e.port;
  if (typeof r != "string" || !r || typeof n != "string" || (n = n.split(":", 1)[0], r = r.replace(/:\d*$/, ""), i = parseInt(i) || jG[n] || 0, !zG(r, i)))
    return "";
  var o = tn("npm_config_" + n + "_proxy") || tn(n + "_proxy") || tn("npm_config_proxy") || tn("all_proxy");
  return o && o.indexOf("://") === -1 && (o = n + "://" + o), o;
}
function zG(t, e) {
  var n = (tn("npm_config_no_proxy") || tn("no_proxy")).toLowerCase();
  return n ? n === "*" ? !1 : n.split(/[,\s]/).every(function(r) {
    if (!r)
      return !0;
    var i = r.match(/^(.+):(\d+)$/), o = i ? i[1] : r, s = i ? parseInt(i[2]) : 0;
    return s && s !== e ? !0 : /^[.*]/.test(o) ? (o.charAt(0) === "*" && (o = o.slice(1)), !$G.call(t, o)) : t !== o;
  }) : !0;
}
function tn(t) {
  return process.env[t.toLowerCase()] || process.env[t.toUpperCase()] || "";
}
Ll.getProxyForUrl = VG;
var Ts = { exports: {} }, er = { exports: {} }, tr = { exports: {} }, ao, lc;
function HG() {
  if (lc) return ao;
  lc = 1;
  var t = 1e3, e = t * 60, n = e * 60, r = n * 24, i = r * 7, o = r * 365.25;
  ao = function(u, p) {
    p = p || {};
    var d = typeof u;
    if (d === "string" && u.length > 0)
      return s(u);
    if (d === "number" && isFinite(u))
      return p.long ? c(u) : a(u);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(u)
    );
  };
  function s(u) {
    if (u = String(u), !(u.length > 100)) {
      var p = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        u
      );
      if (p) {
        var d = parseFloat(p[1]), f = (p[2] || "ms").toLowerCase();
        switch (f) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * o;
          case "weeks":
          case "week":
          case "w":
            return d * i;
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
            return d * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * t;
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
  function a(u) {
    var p = Math.abs(u);
    return p >= r ? Math.round(u / r) + "d" : p >= n ? Math.round(u / n) + "h" : p >= e ? Math.round(u / e) + "m" : p >= t ? Math.round(u / t) + "s" : u + "ms";
  }
  function c(u) {
    var p = Math.abs(u);
    return p >= r ? l(u, p, r, "day") : p >= n ? l(u, p, n, "hour") : p >= e ? l(u, p, e, "minute") : p >= t ? l(u, p, t, "second") : u + " ms";
  }
  function l(u, p, d, f) {
    var m = p >= d * 1.5;
    return Math.round(u / d) + " " + f + (m ? "s" : "");
  }
  return ao;
}
var co, pc;
function Pl() {
  if (pc) return co;
  pc = 1;
  function t(e) {
    r.debug = r, r.default = r, r.coerce = l, r.disable = a, r.enable = o, r.enabled = c, r.humanize = HG(), r.destroy = u, Object.keys(e).forEach((p) => {
      r[p] = e[p];
    }), r.names = [], r.skips = [], r.formatters = {};
    function n(p) {
      let d = 0;
      for (let f = 0; f < p.length; f++)
        d = (d << 5) - d + p.charCodeAt(f), d |= 0;
      return r.colors[Math.abs(d) % r.colors.length];
    }
    r.selectColor = n;
    function r(p) {
      let d, f = null, m, h;
      function g(...T) {
        if (!g.enabled)
          return;
        const v = g, b = Number(/* @__PURE__ */ new Date()), w = b - (d || b);
        v.diff = w, v.prev = d, v.curr = b, d = b, T[0] = r.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
        let S = 0;
        T[0] = T[0].replace(/%([a-zA-Z%])/g, (L, N) => {
          if (L === "%%")
            return "%";
          S++;
          const y = r.formatters[N];
          if (typeof y == "function") {
            const O = T[S];
            L = y.call(v, O), T.splice(S, 1), S--;
          }
          return L;
        }), r.formatArgs.call(v, T), (v.log || r.log).apply(v, T);
      }
      return g.namespace = p, g.useColors = r.useColors(), g.color = r.selectColor(p), g.extend = i, g.destroy = r.destroy, Object.defineProperty(g, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => f !== null ? f : (m !== r.namespaces && (m = r.namespaces, h = r.enabled(p)), h),
        set: (T) => {
          f = T;
        }
      }), typeof r.init == "function" && r.init(g), g;
    }
    function i(p, d) {
      const f = r(this.namespace + (typeof d > "u" ? ":" : d) + p);
      return f.log = this.log, f;
    }
    function o(p) {
      r.save(p), r.namespaces = p, r.names = [], r.skips = [];
      const d = (typeof p == "string" ? p : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const f of d)
        f[0] === "-" ? r.skips.push(f.slice(1)) : r.names.push(f);
    }
    function s(p, d) {
      let f = 0, m = 0, h = -1, g = 0;
      for (; f < p.length; )
        if (m < d.length && (d[m] === p[f] || d[m] === "*"))
          d[m] === "*" ? (h = m, g = f, m++) : (f++, m++);
        else if (h !== -1)
          m = h + 1, g++, f = g;
        else
          return !1;
      for (; m < d.length && d[m] === "*"; )
        m++;
      return m === d.length;
    }
    function a() {
      const p = [
        ...r.names,
        ...r.skips.map((d) => "-" + d)
      ].join(",");
      return r.enable(""), p;
    }
    function c(p) {
      for (const d of r.skips)
        if (s(p, d))
          return !1;
      for (const d of r.names)
        if (s(p, d))
          return !0;
      return !1;
    }
    function l(p) {
      return p instanceof Error ? p.stack || p.message : p;
    }
    function u() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  return co = t, co;
}
var dc;
function XG() {
  return dc || (dc = 1, function(t, e) {
    e.formatArgs = r, e.save = i, e.load = o, e.useColors = n, e.storage = s(), e.destroy = /* @__PURE__ */ (() => {
      let c = !1;
      return () => {
        c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), e.colors = [
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
      if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
        return;
      const l = "color: " + this.color;
      c.splice(1, 0, l, "color: inherit");
      let u = 0, p = 0;
      c[0].replace(/%[a-zA-Z%]/g, (d) => {
        d !== "%%" && (u++, d === "%c" && (p = u));
      }), c.splice(p, 0, l);
    }
    e.log = console.debug || console.log || (() => {
    });
    function i(c) {
      try {
        c ? e.storage.setItem("debug", c) : e.storage.removeItem("debug");
      } catch {
      }
    }
    function o() {
      let c;
      try {
        c = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
      } catch {
      }
      return !c && typeof process < "u" && "env" in process && (c = process.env.DEBUG), c;
    }
    function s() {
      try {
        return localStorage;
      } catch {
      }
    }
    t.exports = Pl()(e);
    const { formatters: a } = t.exports;
    a.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (l) {
        return "[UnexpectedJSONParseError]: " + l.message;
      }
    };
  }(tr, tr.exports)), tr.exports;
}
var nr = { exports: {} }, uo, fc;
function GG() {
  return fc || (fc = 1, uo = (t, e = process.argv) => {
    const n = t.startsWith("-") ? "" : t.length === 1 ? "-" : "--", r = e.indexOf(n + t), i = e.indexOf("--");
    return r !== -1 && (i === -1 || r < i);
  }), uo;
}
var lo, mc;
function WG() {
  if (mc) return lo;
  mc = 1;
  const t = dd, e = Du, n = GG(), { env: r } = process;
  let i;
  n("no-color") || n("no-colors") || n("color=false") || n("color=never") ? i = 0 : (n("color") || n("colors") || n("color=true") || n("color=always")) && (i = 1), "FORCE_COLOR" in r && (r.FORCE_COLOR === "true" ? i = 1 : r.FORCE_COLOR === "false" ? i = 0 : i = r.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(r.FORCE_COLOR, 10), 3));
  function o(c) {
    return c === 0 ? !1 : {
      level: c,
      hasBasic: !0,
      has256: c >= 2,
      has16m: c >= 3
    };
  }
  function s(c, l) {
    if (i === 0)
      return 0;
    if (n("color=16m") || n("color=full") || n("color=truecolor"))
      return 3;
    if (n("color=256"))
      return 2;
    if (c && !l && i === void 0)
      return 0;
    const u = i || 0;
    if (r.TERM === "dumb")
      return u;
    if (process.platform === "win32") {
      const p = t.release().split(".");
      return Number(p[0]) >= 10 && Number(p[2]) >= 10586 ? Number(p[2]) >= 14931 ? 3 : 2 : 1;
    }
    if ("CI" in r)
      return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((p) => p in r) || r.CI_NAME === "codeship" ? 1 : u;
    if ("TEAMCITY_VERSION" in r)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(r.TEAMCITY_VERSION) ? 1 : 0;
    if (r.COLORTERM === "truecolor")
      return 3;
    if ("TERM_PROGRAM" in r) {
      const p = parseInt((r.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (r.TERM_PROGRAM) {
        case "iTerm.app":
          return p >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(r.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(r.TERM) || "COLORTERM" in r ? 1 : u;
  }
  function a(c) {
    const l = s(c, c && c.isTTY);
    return o(l);
  }
  return lo = {
    supportsColor: a,
    stdout: o(s(!0, e.isatty(1))),
    stderr: o(s(!0, e.isatty(2)))
  }, lo;
}
var hc;
function YG() {
  return hc || (hc = 1, function(t, e) {
    const n = Du, r = Nt;
    e.init = u, e.log = a, e.formatArgs = o, e.save = c, e.load = l, e.useColors = i, e.destroy = r.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), e.colors = [6, 2, 3, 4, 5, 1];
    try {
      const d = WG();
      d && (d.stderr || d).level >= 2 && (e.colors = [
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
    e.inspectOpts = Object.keys(process.env).filter((d) => /^debug_/i.test(d)).reduce((d, f) => {
      const m = f.substring(6).toLowerCase().replace(/_([a-z])/g, (g, T) => T.toUpperCase());
      let h = process.env[f];
      return /^(yes|on|true|enabled)$/i.test(h) ? h = !0 : /^(no|off|false|disabled)$/i.test(h) ? h = !1 : h === "null" ? h = null : h = Number(h), d[m] = h, d;
    }, {});
    function i() {
      return "colors" in e.inspectOpts ? !!e.inspectOpts.colors : n.isatty(process.stderr.fd);
    }
    function o(d) {
      const { namespace: f, useColors: m } = this;
      if (m) {
        const h = this.color, g = "\x1B[3" + (h < 8 ? h : "8;5;" + h), T = `  ${g};1m${f} \x1B[0m`;
        d[0] = T + d[0].split(`
`).join(`
` + T), d.push(g + "m+" + t.exports.humanize(this.diff) + "\x1B[0m");
      } else
        d[0] = s() + f + " " + d[0];
    }
    function s() {
      return e.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function a(...d) {
      return process.stderr.write(r.formatWithOptions(e.inspectOpts, ...d) + `
`);
    }
    function c(d) {
      d ? process.env.DEBUG = d : delete process.env.DEBUG;
    }
    function l() {
      return process.env.DEBUG;
    }
    function u(d) {
      d.inspectOpts = {};
      const f = Object.keys(e.inspectOpts);
      for (let m = 0; m < f.length; m++)
        d.inspectOpts[f[m]] = e.inspectOpts[f[m]];
    }
    t.exports = Pl()(e);
    const { formatters: p } = t.exports;
    p.o = function(d) {
      return this.inspectOpts.colors = this.useColors, r.inspect(d, this.inspectOpts).split(`
`).map((f) => f.trim()).join(" ");
    }, p.O = function(d) {
      return this.inspectOpts.colors = this.useColors, r.inspect(d, this.inspectOpts);
    };
  }(nr, nr.exports)), nr.exports;
}
var gc;
function KG() {
  return gc || (gc = 1, typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? er.exports = XG() : er.exports = YG()), er.exports;
}
var vn, JG = function() {
  if (!vn) {
    try {
      vn = KG()("follow-redirects");
    } catch {
    }
    typeof vn != "function" && (vn = function() {
    });
  }
  vn.apply(null, arguments);
}, Xn = Bn, Dn = Xn.URL, QG = Fr, ZG = kr, Ss = Re.Writable, _s = Ou, Fl = JG;
(function() {
  var e = typeof process < "u", n = typeof window < "u" && typeof document < "u", r = Ht(Error.captureStackTrace);
  !e && (n || !r) && console.warn("The follow-redirects package should be excluded from browser builds.");
})();
var Ns = !1;
try {
  _s(new Dn(""));
} catch (t) {
  Ns = t.code === "ERR_INVALID_URL";
}
var eW = [
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
], As = ["abort", "aborted", "connect", "error", "socket", "timeout"], Os = /* @__PURE__ */ Object.create(null);
As.forEach(function(t) {
  Os[t] = function(e, n, r) {
    this._redirectable.emit(t, e, n, r);
  };
});
var Fo = Gn(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
), ko = Gn(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
), tW = Gn(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  ko
), nW = Gn(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
), rW = Gn(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
), iW = Ss.prototype.destroy || ql;
function je(t, e) {
  Ss.call(this), this._sanitizeOptions(t), this._options = t, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], e && this.on("response", e);
  var n = this;
  this._onNativeResponse = function(r) {
    try {
      n._processResponse(r);
    } catch (i) {
      n.emit("error", i instanceof ko ? i : new ko({ cause: i }));
    }
  }, this._performRequest();
}
je.prototype = Object.create(Ss.prototype);
je.prototype.abort = function() {
  Cs(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
};
je.prototype.destroy = function(t) {
  return Cs(this._currentRequest, t), iW.call(this, t), this;
};
je.prototype.write = function(t, e, n) {
  if (this._ending)
    throw new rW();
  if (!jt(t) && !aW(t))
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  if (Ht(e) && (n = e, e = null), t.length === 0) {
    n && n();
    return;
  }
  this._requestBodyLength + t.length <= this._options.maxBodyLength ? (this._requestBodyLength += t.length, this._requestBodyBuffers.push({ data: t, encoding: e }), this._currentRequest.write(t, e, n)) : (this.emit("error", new nW()), this.abort());
};
je.prototype.end = function(t, e, n) {
  if (Ht(t) ? (n = t, t = e = null) : Ht(e) && (n = e, e = null), !t)
    this._ended = this._ending = !0, this._currentRequest.end(null, null, n);
  else {
    var r = this, i = this._currentRequest;
    this.write(t, e, function() {
      r._ended = !0, i.end(null, null, n);
    }), this._ending = !0;
  }
};
je.prototype.setHeader = function(t, e) {
  this._options.headers[t] = e, this._currentRequest.setHeader(t, e);
};
je.prototype.removeHeader = function(t) {
  delete this._options.headers[t], this._currentRequest.removeHeader(t);
};
je.prototype.setTimeout = function(t, e) {
  var n = this;
  function r(s) {
    s.setTimeout(t), s.removeListener("timeout", s.destroy), s.addListener("timeout", s.destroy);
  }
  function i(s) {
    n._timeout && clearTimeout(n._timeout), n._timeout = setTimeout(function() {
      n.emit("timeout"), o();
    }, t), r(s);
  }
  function o() {
    n._timeout && (clearTimeout(n._timeout), n._timeout = null), n.removeListener("abort", o), n.removeListener("error", o), n.removeListener("response", o), n.removeListener("close", o), e && n.removeListener("timeout", e), n.socket || n._currentRequest.removeListener("socket", i);
  }
  return e && this.on("timeout", e), this.socket ? i(this.socket) : this._currentRequest.once("socket", i), this.on("socket", r), this.on("abort", o), this.on("error", o), this.on("response", o), this.on("close", o), this;
};
[
  "flushHeaders",
  "getHeader",
  "setNoDelay",
  "setSocketKeepAlive"
].forEach(function(t) {
  je.prototype[t] = function(e, n) {
    return this._currentRequest[t](e, n);
  };
});
["aborted", "connection", "socket"].forEach(function(t) {
  Object.defineProperty(je.prototype, t, {
    get: function() {
      return this._currentRequest[t];
    }
  });
});
je.prototype._sanitizeOptions = function(t) {
  if (t.headers || (t.headers = {}), t.host && (t.hostname || (t.hostname = t.host), delete t.host), !t.pathname && t.path) {
    var e = t.path.indexOf("?");
    e < 0 ? t.pathname = t.path : (t.pathname = t.path.substring(0, e), t.search = t.path.substring(e));
  }
};
je.prototype._performRequest = function() {
  var t = this._options.protocol, e = this._options.nativeProtocols[t];
  if (!e)
    throw new TypeError("Unsupported protocol " + t);
  if (this._options.agents) {
    var n = t.slice(0, -1);
    this._options.agent = this._options.agents[n];
  }
  var r = this._currentRequest = e.request(this._options, this._onNativeResponse);
  r._redirectable = this;
  for (var i of As)
    r.on(i, Os[i]);
  if (this._currentUrl = /^\//.test(this._options.path) ? Xn.format(this._options) : (
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path
  ), this._isRedirect) {
    var o = 0, s = this, a = this._requestBodyBuffers;
    (function c(l) {
      if (r === s._currentRequest)
        if (l)
          s.emit("error", l);
        else if (o < a.length) {
          var u = a[o++];
          r.finished || r.write(u.data, u.encoding, c);
        } else s._ended && r.end();
    })();
  }
};
je.prototype._processResponse = function(t) {
  var e = t.statusCode;
  this._options.trackRedirects && this._redirects.push({
    url: this._currentUrl,
    headers: t.headers,
    statusCode: e
  });
  var n = t.headers.location;
  if (!n || this._options.followRedirects === !1 || e < 300 || e >= 400) {
    t.responseUrl = this._currentUrl, t.redirects = this._redirects, this.emit("response", t), this._requestBodyBuffers = [];
    return;
  }
  if (Cs(this._currentRequest), t.destroy(), ++this._redirectCount > this._options.maxRedirects)
    throw new tW();
  var r, i = this._options.beforeRedirect;
  i && (r = Object.assign({
    // The Host header was set by nativeProtocol.request
    Host: t.req.getHeader("host")
  }, this._options.headers));
  var o = this._options.method;
  ((e === 301 || e === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
  // the server is redirecting the user agent to a different resource […]
  // A user agent can perform a retrieval request targeting that URI
  // (a GET or HEAD request if using HTTP) […]
  e === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], po(/^content-/i, this._options.headers));
  var s = po(/^host$/i, this._options.headers), a = Ds(this._currentUrl), c = s || a.host, l = /^\w+:/.test(n) ? this._currentUrl : Xn.format(Object.assign(a, { host: c })), u = oW(n, l);
  if (Fl("redirecting to", u.href), this._isRedirect = !0, qo(u, this._options), (u.protocol !== a.protocol && u.protocol !== "https:" || u.host !== c && !sW(u.host, c)) && po(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers), Ht(i)) {
    var p = {
      headers: t.headers,
      statusCode: e
    }, d = {
      url: l,
      method: o,
      headers: r
    };
    i(this._options, p, d), this._sanitizeOptions(this._options);
  }
  this._performRequest();
};
function kl(t) {
  var e = {
    maxRedirects: 21,
    maxBodyLength: 10485760
  }, n = {};
  return Object.keys(t).forEach(function(r) {
    var i = r + ":", o = n[i] = t[r], s = e[r] = Object.create(o);
    function a(l, u, p) {
      return cW(l) ? l = qo(l) : jt(l) ? l = qo(Ds(l)) : (p = u, u = Bl(l), l = { protocol: i }), Ht(u) && (p = u, u = null), u = Object.assign({
        maxRedirects: e.maxRedirects,
        maxBodyLength: e.maxBodyLength
      }, l, u), u.nativeProtocols = n, !jt(u.host) && !jt(u.hostname) && (u.hostname = "::1"), _s.equal(u.protocol, i, "protocol mismatch"), Fl("options", u), new je(u, p);
    }
    function c(l, u, p) {
      var d = s.request(l, u, p);
      return d.end(), d;
    }
    Object.defineProperties(s, {
      request: { value: a, configurable: !0, enumerable: !0, writable: !0 },
      get: { value: c, configurable: !0, enumerable: !0, writable: !0 }
    });
  }), e;
}
function ql() {
}
function Ds(t) {
  var e;
  if (Ns)
    e = new Dn(t);
  else if (e = Bl(Xn.parse(t)), !jt(e.protocol))
    throw new Fo({ input: t });
  return e;
}
function oW(t, e) {
  return Ns ? new Dn(t, e) : Ds(Xn.resolve(e, t));
}
function Bl(t) {
  if (/^\[/.test(t.hostname) && !/^\[[:0-9a-f]+\]$/i.test(t.hostname))
    throw new Fo({ input: t.href || t });
  if (/^\[/.test(t.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(t.host))
    throw new Fo({ input: t.href || t });
  return t;
}
function qo(t, e) {
  var n = e || {};
  for (var r of eW)
    n[r] = t[r];
  return n.hostname.startsWith("[") && (n.hostname = n.hostname.slice(1, -1)), n.port !== "" && (n.port = Number(n.port)), n.path = n.search ? n.pathname + n.search : n.pathname, n;
}
function po(t, e) {
  var n;
  for (var r in e)
    t.test(r) && (n = e[r], delete e[r]);
  return n === null || typeof n > "u" ? void 0 : String(n).trim();
}
function Gn(t, e, n) {
  function r(i) {
    Ht(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, i || {}), this.code = t, this.message = this.cause ? e + ": " + this.cause.message : e;
  }
  return r.prototype = new (n || Error)(), Object.defineProperties(r.prototype, {
    constructor: {
      value: r,
      enumerable: !1
    },
    name: {
      value: "Error [" + t + "]",
      enumerable: !1
    }
  }), r;
}
function Cs(t, e) {
  for (var n of As)
    t.removeListener(n, Os[n]);
  t.on("error", ql), t.destroy(e);
}
function sW(t, e) {
  _s(jt(t) && jt(e));
  var n = t.length - e.length - 1;
  return n > 0 && t[n] === "." && t.endsWith(e);
}
function jt(t) {
  return typeof t == "string" || t instanceof String;
}
function Ht(t) {
  return typeof t == "function";
}
function aW(t) {
  return typeof t == "object" && "length" in t;
}
function cW(t) {
  return Dn && t instanceof Dn;
}
Ts.exports = kl({ http: QG, https: ZG });
Ts.exports.wrap = kl;
var uW = Ts.exports;
const lW = /* @__PURE__ */ Gt(uW), _r = "1.13.5";
function Ml(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
const pW = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function dW(t, e, n) {
  const r = n && n.Blob || ue.classes.Blob, i = Ml(t);
  if (e === void 0 && r && (e = !0), i === "data") {
    t = i.length ? t.slice(i.length + 1) : t;
    const o = pW.exec(t);
    if (!o)
      throw new k("Invalid URL", k.ERR_INVALID_URL);
    const s = o[1], a = o[2], c = o[3], l = Buffer.from(decodeURIComponent(c), a ? "base64" : "utf8");
    if (e) {
      if (!r)
        throw new k("Blob is not supported", k.ERR_NOT_SUPPORT);
      return new r([l], { type: s });
    }
    return l;
  }
  throw new k("Unsupported protocol " + i, k.ERR_NOT_SUPPORT);
}
const fo = Symbol("internals");
class bc extends Re.Transform {
  constructor(e) {
    e = A.toFlatObject(e, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (r, i) => !A.isUndefined(i[r])), super({
      readableHighWaterMark: e.chunkSize
    });
    const n = this[fo] = {
      timeWindow: e.timeWindow,
      chunkSize: e.chunkSize,
      maxRate: e.maxRate,
      minChunkSize: e.minChunkSize,
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
  _read(e) {
    const n = this[fo];
    return n.onReadCallback && n.onReadCallback(), super._read(e);
  }
  _transform(e, n, r) {
    const i = this[fo], o = i.maxRate, s = this.readableHighWaterMark, a = i.timeWindow, c = 1e3 / a, l = o / c, u = i.minChunkSize !== !1 ? Math.max(i.minChunkSize, l * 0.01) : 0, p = (f, m) => {
      const h = Buffer.byteLength(f);
      i.bytesSeen += h, i.bytes += h, i.isCaptured && this.emit("progress", i.bytesSeen), this.push(f) ? process.nextTick(m) : i.onReadCallback = () => {
        i.onReadCallback = null, process.nextTick(m);
      };
    }, d = (f, m) => {
      const h = Buffer.byteLength(f);
      let g = null, T = s, v, b = 0;
      if (o) {
        const w = Date.now();
        (!i.ts || (b = w - i.ts) >= a) && (i.ts = w, v = l - i.bytes, i.bytes = v < 0 ? -v : 0, b = 0), v = l - i.bytes;
      }
      if (o) {
        if (v <= 0)
          return setTimeout(() => {
            m(null, f);
          }, a - b);
        v < T && (T = v);
      }
      T && h > T && h - T > u && (g = f.subarray(T), f = f.subarray(0, T)), p(f, g ? () => {
        process.nextTick(m, null, g);
      } : m);
    };
    d(e, function f(m, h) {
      if (m)
        return r(m);
      h ? d(h, f) : r(null);
    });
  }
}
const { asyncIterator: yc } = Symbol, Ul = async function* (t) {
  t.stream ? yield* t.stream() : t.arrayBuffer ? yield await t.arrayBuffer() : t[yc] ? yield* t[yc]() : yield t;
}, fW = ue.ALPHABET.ALPHA_DIGIT + "-_", Cn = typeof TextEncoder == "function" ? new TextEncoder() : new Nt.TextEncoder(), Ft = `\r
`, mW = Cn.encode(Ft), hW = 2;
class gW {
  constructor(e, n) {
    const { escapeName: r } = this.constructor, i = A.isString(n);
    let o = `Content-Disposition: form-data; name="${r(e)}"${!i && n.name ? `; filename="${r(n.name)}"` : ""}${Ft}`;
    i ? n = Cn.encode(String(n).replace(/\r?\n|\r\n?/g, Ft)) : o += `Content-Type: ${n.type || "application/octet-stream"}${Ft}`, this.headers = Cn.encode(o + Ft), this.contentLength = i ? n.byteLength : n.size, this.size = this.headers.byteLength + this.contentLength + hW, this.name = e, this.value = n;
  }
  async *encode() {
    yield this.headers;
    const { value: e } = this;
    A.isTypedArray(e) ? yield e : yield* Ul(e), yield mW;
  }
  static escapeName(e) {
    return String(e).replace(/[\r\n"]/g, (n) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[n]);
  }
}
const bW = (t, e, n) => {
  const {
    tag: r = "form-data-boundary",
    size: i = 25,
    boundary: o = r + "-" + ue.generateString(i, fW)
  } = n || {};
  if (!A.isFormData(t))
    throw TypeError("FormData instance required");
  if (o.length < 1 || o.length > 70)
    throw Error("boundary must be 10-70 characters long");
  const s = Cn.encode("--" + o + Ft), a = Cn.encode("--" + o + "--" + Ft);
  let c = a.byteLength;
  const l = Array.from(t.entries()).map(([p, d]) => {
    const f = new gW(p, d);
    return c += f.size, f;
  });
  c += s.byteLength * l.length, c = A.toFiniteNumber(c);
  const u = {
    "Content-Type": `multipart/form-data; boundary=${o}`
  };
  return Number.isFinite(c) && (u["Content-Length"] = c), e && e(u), ld.from(async function* () {
    for (const p of l)
      yield s, yield* p.encode();
    yield a;
  }());
};
class yW extends Re.Transform {
  __transform(e, n, r) {
    this.push(e), r();
  }
  _transform(e, n, r) {
    if (e.length !== 0 && (this._transform = this.__transform, e[0] !== 120)) {
      const i = Buffer.alloc(2);
      i[0] = 120, i[1] = 156, this.push(i, n);
    }
    this.__transform(e, n, r);
  }
}
const vW = (t, e) => A.isAsyncFn(t) ? function(...n) {
  const r = n.pop();
  t.apply(this, n).then((i) => {
    try {
      e ? r(null, ...e(i)) : r(null, i);
    } catch (o) {
      r(o);
    }
  }, r);
} : t;
function xW(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let i = 0, o = 0, s;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const l = Date.now(), u = r[o];
    s || (s = l), n[i] = c, r[i] = l;
    let p = o, d = 0;
    for (; p !== i; )
      d += n[p++], p = p % t;
    if (i = (i + 1) % t, i === o && (o = (o + 1) % t), l - s < e)
      return;
    const f = u && l - u;
    return f ? Math.round(d * 1e3 / f) : void 0;
  };
}
function wW(t, e) {
  let n = 0, r = 1e3 / e, i, o;
  const s = (l, u = Date.now()) => {
    n = u, i = null, o && (clearTimeout(o), o = null), t(...l);
  };
  return [(...l) => {
    const u = Date.now(), p = u - n;
    p >= r ? s(l, u) : (i = l, o || (o = setTimeout(() => {
      o = null, s(i);
    }, r - p)));
  }, () => i && s(i)];
}
const dn = (t, e, n = 3) => {
  let r = 0;
  const i = xW(50, 250);
  return wW((o) => {
    const s = o.loaded, a = o.lengthComputable ? o.total : void 0, c = s - r, l = i(c), u = s <= a;
    r = s;
    const p = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && u ? (a - s) / l : void 0,
      event: o,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(p);
  }, n);
}, Nr = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, Ar = (t) => (...e) => A.asap(() => t(...e));
function EW(t) {
  if (!t || typeof t != "string" || !t.startsWith("data:")) return 0;
  const e = t.indexOf(",");
  if (e < 0) return 0;
  const n = t.slice(5, e), r = t.slice(e + 1);
  if (/;base64/i.test(n)) {
    let o = r.length;
    const s = r.length;
    for (let d = 0; d < s; d++)
      if (r.charCodeAt(d) === 37 && d + 2 < s) {
        const f = r.charCodeAt(d + 1), m = r.charCodeAt(d + 2);
        (f >= 48 && f <= 57 || f >= 65 && f <= 70 || f >= 97 && f <= 102) && (m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102) && (o -= 2, d += 2);
      }
    let a = 0, c = s - 1;
    const l = (d) => d >= 2 && r.charCodeAt(d - 2) === 37 && // '%'
    r.charCodeAt(d - 1) === 51 && // '3'
    (r.charCodeAt(d) === 68 || r.charCodeAt(d) === 100);
    c >= 0 && (r.charCodeAt(c) === 61 ? (a++, c--) : l(c) && (a++, c -= 3)), a === 1 && c >= 0 && (r.charCodeAt(c) === 61 || l(c)) && a++;
    const p = Math.floor(o / 4) * 3 - (a || 0);
    return p > 0 ? p : 0;
  }
  return Buffer.byteLength(r, "utf8");
}
const vc = {
  flush: gt.constants.Z_SYNC_FLUSH,
  finishFlush: gt.constants.Z_SYNC_FLUSH
}, TW = {
  flush: gt.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: gt.constants.BROTLI_OPERATION_FLUSH
}, xc = A.isFunction(gt.createBrotliDecompress), { http: SW, https: _W } = lW, NW = /https:?/, wc = ue.protocols.map((t) => t + ":"), Ec = (t, [e, n]) => (t.on("end", n).on("error", n), e);
class AW {
  constructor() {
    this.sessions = /* @__PURE__ */ Object.create(null);
  }
  getSession(e, n) {
    n = Object.assign({
      sessionTimeout: 1e3
    }, n);
    let r = this.sessions[e];
    if (r) {
      let u = r.length;
      for (let p = 0; p < u; p++) {
        const [d, f] = r[p];
        if (!d.destroyed && !d.closed && Nt.isDeepStrictEqual(f, n))
          return d;
      }
    }
    const i = Au.connect(e, n);
    let o;
    const s = () => {
      if (o)
        return;
      o = !0;
      let u = r, p = u.length, d = p;
      for (; d--; )
        if (u[d][0] === i) {
          p === 1 ? delete this.sessions[e] : u.splice(d, 1);
          return;
        }
    }, a = i.request, { sessionTimeout: c } = n;
    if (c != null) {
      let u, p = 0;
      i.request = function() {
        const d = a.apply(this, arguments);
        return p++, u && (clearTimeout(u), u = null), d.once("close", () => {
          --p || (u = setTimeout(() => {
            u = null, s();
          }, c));
        }), d;
      };
    }
    i.once("close", s);
    let l = [
      i,
      n
    ];
    return r ? r.push(l) : r = this.sessions[e] = [l], i;
  }
}
const OW = new AW();
function DW(t, e) {
  t.beforeRedirects.proxy && t.beforeRedirects.proxy(t), t.beforeRedirects.config && t.beforeRedirects.config(t, e);
}
function jl(t, e, n) {
  let r = e;
  if (!r && r !== !1) {
    const i = Ll.getProxyForUrl(n);
    i && (r = new URL(i));
  }
  if (r) {
    if (r.username && (r.auth = (r.username || "") + ":" + (r.password || "")), r.auth) {
      if (!!(r.auth.username || r.auth.password))
        r.auth = (r.auth.username || "") + ":" + (r.auth.password || "");
      else if (typeof r.auth == "object")
        throw new k("Invalid proxy authorization", k.ERR_BAD_OPTION, { proxy: r });
      const s = Buffer.from(r.auth, "utf8").toString("base64");
      t.headers["Proxy-Authorization"] = "Basic " + s;
    }
    t.headers.host = t.hostname + (t.port ? ":" + t.port : "");
    const i = r.hostname || r.host;
    t.hostname = i, t.host = i, t.port = r.port, t.path = n, r.protocol && (t.protocol = r.protocol.includes(":") ? r.protocol : `${r.protocol}:`);
  }
  t.beforeRedirects.proxy = function(o) {
    jl(o, e, o.href);
  };
}
const CW = typeof process < "u" && A.kindOf(process) === "process", IW = (t) => new Promise((e, n) => {
  let r, i;
  const o = (c, l) => {
    i || (i = !0, r && r(c, l));
  }, s = (c) => {
    o(c), e(c);
  }, a = (c) => {
    o(c, !0), n(c);
  };
  t(s, a, (c) => r = c).catch(a);
}), RW = ({ address: t, family: e }) => {
  if (!A.isString(t))
    throw TypeError("address must be a string");
  return {
    address: t,
    family: e || (t.indexOf(".") < 0 ? 6 : 4)
  };
}, Tc = (t, e) => RW(A.isObject(t) ? t : { address: t, family: e }), LW = {
  request(t, e) {
    const n = t.protocol + "//" + t.hostname + ":" + (t.port || (t.protocol === "https:" ? 443 : 80)), { http2Options: r, headers: i } = t, o = OW.getSession(n, r), {
      HTTP2_HEADER_SCHEME: s,
      HTTP2_HEADER_METHOD: a,
      HTTP2_HEADER_PATH: c,
      HTTP2_HEADER_STATUS: l
    } = Au.constants, u = {
      [s]: t.protocol.replace(":", ""),
      [a]: t.method,
      [c]: t.path
    };
    A.forEach(i, (d, f) => {
      f.charAt(0) !== ":" && (u[f] = d);
    });
    const p = o.request(u);
    return p.once("response", (d) => {
      const f = p;
      d = Object.assign({}, d);
      const m = d[l];
      delete d[l], f.headers = d, f.statusCode = +m, e(f);
    }), p;
  }
}, PW = CW && function(e) {
  return IW(async function(r, i, o) {
    let { data: s, lookup: a, family: c, httpVersion: l = 1, http2Options: u } = e;
    const { responseType: p, responseEncoding: d } = e, f = e.method.toUpperCase();
    let m, h = !1, g;
    if (l = +l, Number.isNaN(l))
      throw TypeError(`Invalid protocol version: '${e.httpVersion}' is not a number`);
    if (l !== 1 && l !== 2)
      throw TypeError(`Unsupported protocol version '${l}'`);
    const T = l === 2;
    if (a) {
      const V = vW(a, (U) => A.isArray(U) ? U : [U]);
      a = (U, ee, Oe) => {
        V(U, ee, (oe, De, tt) => {
          if (oe)
            return Oe(oe);
          const E = A.isArray(De) ? De.map((x) => Tc(x)) : [Tc(De, tt)];
          ee.all ? Oe(oe, E) : Oe(oe, E[0].address, E[0].family);
        });
      };
    }
    const v = new cd();
    function b(V) {
      try {
        v.emit("abort", !V || V.type ? new zt(null, e, g) : V);
      } catch (U) {
        console.warn("emit error", U);
      }
    }
    v.once("abort", i);
    const w = () => {
      e.cancelToken && e.cancelToken.unsubscribe(b), e.signal && e.signal.removeEventListener("abort", b), v.removeAllListeners();
    };
    (e.cancelToken || e.signal) && (e.cancelToken && e.cancelToken.subscribe(b), e.signal && (e.signal.aborted ? b() : e.signal.addEventListener("abort", b))), o((V, U) => {
      if (m = !0, U) {
        h = !0, w();
        return;
      }
      const { data: ee } = V;
      if (ee instanceof Re.Readable || ee instanceof Re.Duplex) {
        const Oe = Re.finished(ee, () => {
          Oe(), w();
        });
      } else
        w();
    });
    const S = Es(e.baseURL, e.url, e.allowAbsoluteUrls), D = new URL(S, ue.hasBrowserEnv ? ue.origin : void 0), L = D.protocol || wc[0];
    if (L === "data:") {
      if (e.maxContentLength > -1) {
        const U = String(e.url || S || "");
        if (EW(U) > e.maxContentLength)
          return i(new k(
            "maxContentLength size of " + e.maxContentLength + " exceeded",
            k.ERR_BAD_RESPONSE,
            e
          ));
      }
      let V;
      if (f !== "GET")
        return en(r, i, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: e
        });
      try {
        V = dW(e.url, p === "blob", {
          Blob: e.env && e.env.Blob
        });
      } catch (U) {
        throw k.from(U, k.ERR_BAD_REQUEST, e);
      }
      return p === "text" ? (V = V.toString(d), (!d || d === "utf8") && (V = A.stripBOM(V))) : p === "stream" && (V = Re.Readable.from(V)), en(r, i, {
        data: V,
        status: 200,
        statusText: "OK",
        headers: new _e(),
        config: e
      });
    }
    if (wc.indexOf(L) === -1)
      return i(new k(
        "Unsupported protocol " + L,
        k.ERR_BAD_REQUEST,
        e
      ));
    const N = _e.from(e.headers).normalize();
    N.set("User-Agent", "axios/" + _r, !1);
    const { onUploadProgress: y, onDownloadProgress: O } = e, C = e.maxRate;
    let P, M;
    if (A.isSpecCompliantForm(s)) {
      const V = N.getContentType(/boundary=([-_\w\d]{10,70})/i);
      s = bW(s, (U) => {
        N.set(U);
      }, {
        tag: `axios-${_r}-boundary`,
        boundary: V && V[1] || void 0
      });
    } else if (A.isFormData(s) && A.isFunction(s.getHeaders)) {
      if (N.set(s.getHeaders()), !N.hasContentLength())
        try {
          const V = await Nt.promisify(s.getLength).call(s);
          Number.isFinite(V) && V >= 0 && N.setContentLength(V);
        } catch {
        }
    } else if (A.isBlob(s) || A.isFile(s))
      s.size && N.setContentType(s.type || "application/octet-stream"), N.setContentLength(s.size || 0), s = Re.Readable.from(Ul(s));
    else if (s && !A.isStream(s)) {
      if (!Buffer.isBuffer(s)) if (A.isArrayBuffer(s))
        s = Buffer.from(new Uint8Array(s));
      else if (A.isString(s))
        s = Buffer.from(s, "utf-8");
      else
        return i(new k(
          "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
          k.ERR_BAD_REQUEST,
          e
        ));
      if (N.setContentLength(s.length, !1), e.maxBodyLength > -1 && s.length > e.maxBodyLength)
        return i(new k(
          "Request body larger than maxBodyLength limit",
          k.ERR_BAD_REQUEST,
          e
        ));
    }
    const j = A.toFiniteNumber(N.getContentLength());
    A.isArray(C) ? (P = C[0], M = C[1]) : P = M = C, s && (y || P) && (A.isStream(s) || (s = Re.Readable.from(s, { objectMode: !1 })), s = Re.pipeline([s, new bc({
      maxRate: A.toFiniteNumber(P)
    })], A.noop), y && s.on("progress", Ec(
      s,
      Nr(
        j,
        dn(Ar(y), !1, 3)
      )
    )));
    let $;
    if (e.auth) {
      const V = e.auth.username || "", U = e.auth.password || "";
      $ = V + ":" + U;
    }
    if (!$ && D.username) {
      const V = D.username, U = D.password;
      $ = V + ":" + U;
    }
    $ && N.delete("authorization");
    let q;
    try {
      q = xs(
        D.pathname + D.search,
        e.params,
        e.paramsSerializer
      ).replace(/^\?/, "");
    } catch (V) {
      const U = new Error(V.message);
      return U.config = e, U.url = e.url, U.exists = !0, i(U);
    }
    N.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (xc ? ", br" : ""),
      !1
    );
    const F = {
      path: q,
      method: f,
      headers: N.toJSON(),
      agents: { http: e.httpAgent, https: e.httpsAgent },
      auth: $,
      protocol: L,
      family: c,
      beforeRedirect: DW,
      beforeRedirects: {},
      http2Options: u
    };
    !A.isUndefined(a) && (F.lookup = a), e.socketPath ? F.socketPath = e.socketPath : (F.hostname = D.hostname.startsWith("[") ? D.hostname.slice(1, -1) : D.hostname, F.port = D.port, jl(F, e.proxy, L + "//" + D.hostname + (D.port ? ":" + D.port : "") + F.path));
    let J;
    const K = NW.test(F.protocol);
    if (F.agent = K ? e.httpsAgent : e.httpAgent, T ? J = LW : e.transport ? J = e.transport : e.maxRedirects === 0 ? J = K ? kr : Fr : (e.maxRedirects && (F.maxRedirects = e.maxRedirects), e.beforeRedirect && (F.beforeRedirects.config = e.beforeRedirect), J = K ? _W : SW), e.maxBodyLength > -1 ? F.maxBodyLength = e.maxBodyLength : F.maxBodyLength = 1 / 0, e.insecureHTTPParser && (F.insecureHTTPParser = e.insecureHTTPParser), g = J.request(F, function(U) {
      if (g.destroyed) return;
      const ee = [U], Oe = A.toFiniteNumber(U.headers["content-length"]);
      if (O || M) {
        const E = new bc({
          maxRate: A.toFiniteNumber(M)
        });
        O && E.on("progress", Ec(
          E,
          Nr(
            Oe,
            dn(Ar(O), !0, 3)
          )
        )), ee.push(E);
      }
      let oe = U;
      const De = U.req || g;
      if (e.decompress !== !1 && U.headers["content-encoding"])
        switch ((f === "HEAD" || U.statusCode === 204) && delete U.headers["content-encoding"], (U.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            ee.push(gt.createUnzip(vc)), delete U.headers["content-encoding"];
            break;
          case "deflate":
            ee.push(new yW()), ee.push(gt.createUnzip(vc)), delete U.headers["content-encoding"];
            break;
          case "br":
            xc && (ee.push(gt.createBrotliDecompress(TW)), delete U.headers["content-encoding"]);
        }
      oe = ee.length > 1 ? Re.pipeline(ee, A.noop) : ee[0];
      const tt = {
        status: U.statusCode,
        statusText: U.statusMessage,
        headers: new _e(U.headers),
        config: e,
        request: De
      };
      if (p === "stream")
        tt.data = oe, en(r, i, tt);
      else {
        const E = [];
        let x = 0;
        oe.on("data", function(_) {
          E.push(_), x += _.length, e.maxContentLength > -1 && x > e.maxContentLength && (h = !0, oe.destroy(), b(new k(
            "maxContentLength size of " + e.maxContentLength + " exceeded",
            k.ERR_BAD_RESPONSE,
            e,
            De
          )));
        }), oe.on("aborted", function() {
          if (h)
            return;
          const _ = new k(
            "stream has been aborted",
            k.ERR_BAD_RESPONSE,
            e,
            De
          );
          oe.destroy(_), i(_);
        }), oe.on("error", function(_) {
          g.destroyed || i(k.from(_, null, e, De));
        }), oe.on("end", function() {
          try {
            let _ = E.length === 1 ? E[0] : Buffer.concat(E);
            p !== "arraybuffer" && (_ = _.toString(d), (!d || d === "utf8") && (_ = A.stripBOM(_))), tt.data = _;
          } catch (_) {
            return i(k.from(_, null, e, tt.request, tt));
          }
          en(r, i, tt);
        });
      }
      v.once("abort", (E) => {
        oe.destroyed || (oe.emit("error", E), oe.destroy());
      });
    }), v.once("abort", (V) => {
      g.close ? g.close() : g.destroy(V);
    }), g.on("error", function(U) {
      i(k.from(U, null, e, g));
    }), g.on("socket", function(U) {
      U.setKeepAlive(!0, 1e3 * 60);
    }), e.timeout) {
      const V = parseInt(e.timeout, 10);
      if (Number.isNaN(V)) {
        b(new k(
          "error trying to parse `config.timeout` to int",
          k.ERR_BAD_OPTION_VALUE,
          e,
          g
        ));
        return;
      }
      g.setTimeout(V, function() {
        if (m) return;
        let ee = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
        const Oe = e.transitional || Wr;
        e.timeoutErrorMessage && (ee = e.timeoutErrorMessage), b(new k(
          ee,
          Oe.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED,
          e,
          g
        ));
      });
    } else
      g.setTimeout(0);
    if (A.isStream(s)) {
      let V = !1, U = !1;
      s.on("end", () => {
        V = !0;
      }), s.once("error", (ee) => {
        U = !0, g.destroy(ee);
      }), s.on("close", () => {
        !V && !U && b(new zt("Request stream has been aborted", e, g));
      }), s.pipe(g);
    } else
      s && g.write(s), g.end();
  });
}, FW = ue.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, ue.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(ue.origin),
  ue.navigator && /(msie|trident)/i.test(ue.navigator.userAgent)
) : () => !0, kW = ue.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, i, o, s) {
      if (typeof document > "u") return;
      const a = [`${t}=${encodeURIComponent(e)}`];
      A.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), A.isString(r) && a.push(`path=${r}`), A.isString(i) && a.push(`domain=${i}`), o === !0 && a.push("secure"), A.isString(s) && a.push(`SameSite=${s}`), document.cookie = a.join("; ");
    },
    read(t) {
      if (typeof document > "u") return null;
      const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
      return e ? decodeURIComponent(e[1]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
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
), Sc = (t) => t instanceof _e ? { ...t } : t;
function Xt(t, e) {
  e = e || {};
  const n = {};
  function r(l, u, p, d) {
    return A.isPlainObject(l) && A.isPlainObject(u) ? A.merge.call({ caseless: d }, l, u) : A.isPlainObject(u) ? A.merge({}, u) : A.isArray(u) ? u.slice() : u;
  }
  function i(l, u, p, d) {
    if (A.isUndefined(u)) {
      if (!A.isUndefined(l))
        return r(void 0, l, p, d);
    } else return r(l, u, p, d);
  }
  function o(l, u) {
    if (!A.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (A.isUndefined(u)) {
      if (!A.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function a(l, u, p) {
    if (p in e)
      return r(l, u);
    if (p in t)
      return r(void 0, l);
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (l, u, p) => i(Sc(l), Sc(u), p, !0)
  };
  return A.forEach(
    Object.keys({ ...t, ...e }),
    function(u) {
      if (u === "__proto__" || u === "constructor" || u === "prototype")
        return;
      const p = A.hasOwnProp(c, u) ? c[u] : i, d = p(t[u], e[u], u);
      A.isUndefined(d) && p !== a || (n[u] = d);
    }
  ), n;
}
const $l = (t) => {
  const e = Xt({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: s, auth: a } = e;
  if (e.headers = s = _e.from(s), e.url = xs(Es(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), A.isFormData(n)) {
    if (ue.hasStandardBrowserEnv || ue.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (A.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(c).forEach(([u, p]) => {
        l.includes(u.toLowerCase()) && s.set(u, p);
      });
    }
  }
  if (ue.hasStandardBrowserEnv && (r && A.isFunction(r) && (r = r(e)), r || r !== !1 && FW(e.url))) {
    const c = i && o && kW.read(o);
    c && s.set(i, c);
  }
  return e;
}, qW = typeof XMLHttpRequest < "u", BW = qW && function(t) {
  return new Promise(function(n, r) {
    const i = $l(t);
    let o = i.data;
    const s = _e.from(i.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = i, u, p, d, f, m;
    function h() {
      f && f(), m && m(), i.cancelToken && i.cancelToken.unsubscribe(u), i.signal && i.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(i.method.toUpperCase(), i.url, !0), g.timeout = i.timeout;
    function T() {
      if (!g)
        return;
      const b = _e.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), S = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: b,
        config: t,
        request: g
      };
      en(function(L) {
        n(L), h();
      }, function(L) {
        r(L), h();
      }, S), g = null;
    }
    "onloadend" in g ? g.onloadend = T : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, g.onabort = function() {
      g && (r(new k("Request aborted", k.ECONNABORTED, t, g)), g = null);
    }, g.onerror = function(w) {
      const S = w && w.message ? w.message : "Network Error", D = new k(S, k.ERR_NETWORK, t, g);
      D.event = w || null, r(D), g = null;
    }, g.ontimeout = function() {
      let w = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const S = i.transitional || Wr;
      i.timeoutErrorMessage && (w = i.timeoutErrorMessage), r(new k(
        w,
        S.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED,
        t,
        g
      )), g = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in g && A.forEach(s.toJSON(), function(w, S) {
      g.setRequestHeader(S, w);
    }), A.isUndefined(i.withCredentials) || (g.withCredentials = !!i.withCredentials), a && a !== "json" && (g.responseType = i.responseType), l && ([d, m] = dn(l, !0), g.addEventListener("progress", d)), c && g.upload && ([p, f] = dn(c), g.upload.addEventListener("progress", p), g.upload.addEventListener("loadend", f)), (i.cancelToken || i.signal) && (u = (b) => {
      g && (r(!b || b.type ? new zt(null, t, g) : b), g.abort(), g = null);
    }, i.cancelToken && i.cancelToken.subscribe(u), i.signal && (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
    const v = Ml(i.url);
    if (v && ue.protocols.indexOf(v) === -1) {
      r(new k("Unsupported protocol " + v + ":", k.ERR_BAD_REQUEST, t));
      return;
    }
    g.send(o || null);
  });
}, MW = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), i;
    const o = function(l) {
      if (!i) {
        i = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof k ? u : new zt(u instanceof Error ? u.message : u));
      }
    };
    let s = e && setTimeout(() => {
      s = null, o(new k(`timeout of ${e}ms exceeded`, k.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (s && clearTimeout(s), s = null, t.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((l) => l.addEventListener("abort", o));
    const { signal: c } = r;
    return c.unsubscribe = () => A.asap(a), c;
  }
}, UW = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + e, yield t.slice(r, i), r = i;
}, jW = async function* (t, e) {
  for await (const n of $W(t))
    yield* UW(n, e);
}, $W = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, _c = (t, e, n, r) => {
  const i = jW(t, e);
  let o = 0, s, a = (c) => {
    s || (s = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: l, value: u } = await i.next();
        if (l) {
          a(), c.close();
          return;
        }
        let p = u.byteLength;
        if (n) {
          let d = o += p;
          n(d);
        }
        c.enqueue(new Uint8Array(u));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(c) {
      return a(c), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Nc = 64 * 1024, { isFunction: rr } = A, VW = (({ Request: t, Response: e }) => ({
  Request: t,
  Response: e
}))(A.global), {
  ReadableStream: Ac,
  TextEncoder: Oc
} = A.global, Dc = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, zW = (t) => {
  t = A.merge.call({
    skipUndefined: !0
  }, VW, t);
  const { fetch: e, Request: n, Response: r } = t, i = e ? rr(e) : typeof fetch == "function", o = rr(n), s = rr(r);
  if (!i)
    return !1;
  const a = i && rr(Ac), c = i && (typeof Oc == "function" ? /* @__PURE__ */ ((m) => (h) => m.encode(h))(new Oc()) : async (m) => new Uint8Array(await new n(m).arrayBuffer())), l = o && a && Dc(() => {
    let m = !1;
    const h = new n(ue.origin, {
      body: new Ac(),
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }).headers.has("Content-Type");
    return m && !h;
  }), u = s && a && Dc(() => A.isReadableStream(new r("").body)), p = {
    stream: u && ((m) => m.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((m) => {
    !p[m] && (p[m] = (h, g) => {
      let T = h && h[m];
      if (T)
        return T.call(h);
      throw new k(`Response type '${m}' is not supported`, k.ERR_NOT_SUPPORT, g);
    });
  });
  const d = async (m) => {
    if (m == null)
      return 0;
    if (A.isBlob(m))
      return m.size;
    if (A.isSpecCompliantForm(m))
      return (await new n(ue.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
    if (A.isArrayBufferView(m) || A.isArrayBuffer(m))
      return m.byteLength;
    if (A.isURLSearchParams(m) && (m = m + ""), A.isString(m))
      return (await c(m)).byteLength;
  }, f = async (m, h) => {
    const g = A.toFiniteNumber(m.getContentLength());
    return g ?? d(h);
  };
  return async (m) => {
    let {
      url: h,
      method: g,
      data: T,
      signal: v,
      cancelToken: b,
      timeout: w,
      onDownloadProgress: S,
      onUploadProgress: D,
      responseType: L,
      headers: N,
      withCredentials: y = "same-origin",
      fetchOptions: O
    } = $l(m), C = e || fetch;
    L = L ? (L + "").toLowerCase() : "text";
    let P = MW([v, b && b.toAbortSignal()], w), M = null;
    const j = P && P.unsubscribe && (() => {
      P.unsubscribe();
    });
    let $;
    try {
      if (D && l && g !== "get" && g !== "head" && ($ = await f(N, T)) !== 0) {
        let U = new n(h, {
          method: "POST",
          body: T,
          duplex: "half"
        }), ee;
        if (A.isFormData(T) && (ee = U.headers.get("content-type")) && N.setContentType(ee), U.body) {
          const [Oe, oe] = Nr(
            $,
            dn(Ar(D))
          );
          T = _c(U.body, Nc, Oe, oe);
        }
      }
      A.isString(y) || (y = y ? "include" : "omit");
      const q = o && "credentials" in n.prototype, F = {
        ...O,
        signal: P,
        method: g.toUpperCase(),
        headers: N.normalize().toJSON(),
        body: T,
        duplex: "half",
        credentials: q ? y : void 0
      };
      M = o && new n(h, F);
      let J = await (o ? C(M, O) : C(h, F));
      const K = u && (L === "stream" || L === "response");
      if (u && (S || K && j)) {
        const U = {};
        ["status", "statusText", "headers"].forEach((De) => {
          U[De] = J[De];
        });
        const ee = A.toFiniteNumber(J.headers.get("content-length")), [Oe, oe] = S && Nr(
          ee,
          dn(Ar(S), !0)
        ) || [];
        J = new r(
          _c(J.body, Nc, Oe, () => {
            oe && oe(), j && j();
          }),
          U
        );
      }
      L = L || "text";
      let V = await p[A.findKey(p, L) || "text"](J, m);
      return !K && j && j(), await new Promise((U, ee) => {
        en(U, ee, {
          data: V,
          headers: _e.from(J.headers),
          status: J.status,
          statusText: J.statusText,
          config: m,
          request: M
        });
      });
    } catch (q) {
      throw j && j(), q && q.name === "TypeError" && /Load failed|fetch/i.test(q.message) ? Object.assign(
        new k("Network Error", k.ERR_NETWORK, m, M, q && q.response),
        {
          cause: q.cause || q
        }
      ) : k.from(q, q && q.code, m, M, q && q.response);
    }
  };
}, HW = /* @__PURE__ */ new Map(), Vl = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: r, Response: i } = e, o = [
    r,
    i,
    n
  ];
  let s = o.length, a = s, c, l, u = HW;
  for (; a--; )
    c = o[a], l = u.get(c), l === void 0 && u.set(c, l = a ? /* @__PURE__ */ new Map() : zW(e)), u = l;
  return l;
};
Vl();
const Is = {
  http: PW,
  xhr: BW,
  fetch: {
    get: Vl
  }
};
A.forEach(Is, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Cc = (t) => `- ${t}`, XW = (t) => A.isFunction(t) || t === null || t === !1;
function GW(t, e) {
  t = A.isArray(t) ? t : [t];
  const { length: n } = t;
  let r, i;
  const o = {};
  for (let s = 0; s < n; s++) {
    r = t[s];
    let a;
    if (i = r, !XW(r) && (i = Is[(a = String(r)).toLowerCase()], i === void 0))
      throw new k(`Unknown adapter '${a}'`);
    if (i && (A.isFunction(i) || (i = i.get(e))))
      break;
    o[a || "#" + s] = i;
  }
  if (!i) {
    const s = Object.entries(o).map(
      ([c, l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? s.length > 1 ? `since :
` + s.map(Cc).join(`
`) : " " + Cc(s[0]) : "as no adapter specified";
    throw new k(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return i;
}
const zl = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: GW,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Is
};
function mo(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new zt(null, t);
}
function Ic(t) {
  return mo(t), t.headers = _e.from(t.headers), t.data = so.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), zl.getAdapter(t.adapter || Hn.adapter, t)(t).then(function(r) {
    return mo(t), r.data = so.call(
      t,
      t.transformResponse,
      r
    ), r.headers = _e.from(r.headers), r;
  }, function(r) {
    return Rl(r) || (mo(t), r && r.response && (r.response.data = so.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = _e.from(r.response.headers))), Promise.reject(r);
  });
}
const Yr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Yr[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Rc = {};
Yr.transitional = function(e, n, r) {
  function i(o, s) {
    return "[Axios v" + _r + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, a) => {
    if (e === !1)
      throw new k(
        i(s, " has been removed" + (n ? " in " + n : "")),
        k.ERR_DEPRECATED
      );
    return n && !Rc[s] && (Rc[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, s, a) : !0;
  };
};
Yr.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function WW(t, e, n) {
  if (typeof t != "object")
    throw new k("options must be an object", k.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], s = e[o];
    if (s) {
      const a = t[o], c = a === void 0 || s(a, o, t);
      if (c !== !0)
        throw new k("option " + o + " must be " + c, k.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new k("Unknown option " + o, k.ERR_BAD_OPTION);
  }
}
const fr = {
  assertOptions: WW,
  validators: Yr
}, ze = fr.validators;
let $t = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new ac(),
      response: new ac()
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
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Xt(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && fr.assertOptions(r, {
      silentJSONParsing: ze.transitional(ze.boolean),
      forcedJSONParsing: ze.transitional(ze.boolean),
      clarifyTimeoutError: ze.transitional(ze.boolean),
      legacyInterceptorReqResOrdering: ze.transitional(ze.boolean)
    }, !1), i != null && (A.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : fr.assertOptions(i, {
      encode: ze.function,
      serialize: ze.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), fr.assertOptions(n, {
      baseUrl: ze.spelling("baseURL"),
      withXsrfToken: ze.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = o && A.merge(
      o.common,
      o[n.method]
    );
    o && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete o[m];
      }
    ), n.headers = _e.concat(s, o);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      if (typeof h.runWhen == "function" && h.runWhen(n) === !1)
        return;
      c = c && h.synchronous;
      const g = n.transitional || Wr;
      g && g.legacyInterceptorReqResOrdering ? a.unshift(h.fulfilled, h.rejected) : a.push(h.fulfilled, h.rejected);
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected);
    });
    let u, p = 0, d;
    if (!c) {
      const m = [Ic.bind(this), void 0];
      for (m.unshift(...a), m.push(...l), d = m.length, u = Promise.resolve(n); p < d; )
        u = u.then(m[p++], m[p++]);
      return u;
    }
    d = a.length;
    let f = n;
    for (; p < d; ) {
      const m = a[p++], h = a[p++];
      try {
        f = m(f);
      } catch (g) {
        h.call(this, g);
        break;
      }
    }
    try {
      u = Ic.call(this, f);
    } catch (m) {
      return Promise.reject(m);
    }
    for (p = 0, d = l.length; p < d; )
      u = u.then(l[p++], l[p++]);
    return u;
  }
  getUri(e) {
    e = Xt(this.defaults, e);
    const n = Es(e.baseURL, e.url, e.allowAbsoluteUrls);
    return xs(n, e.params, e.paramsSerializer);
  }
};
A.forEach(["delete", "get", "head", "options"], function(e) {
  $t.prototype[e] = function(n, r) {
    return this.request(Xt(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(o, s, a) {
      return this.request(Xt(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  $t.prototype[e] = n(), $t.prototype[e + "Form"] = n(!0);
});
let YW = class Hl {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const s = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(i);
      return s.cancel = function() {
        r.unsubscribe(o);
      }, s;
    }, e(function(o, s, a) {
      r.reason || (r.reason = new zt(o, s, a), n(r.reason));
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
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Hl(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
};
function KW(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function JW(t) {
  return A.isObject(t) && t.isAxiosError === !0;
}
const Bo = {
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
Object.entries(Bo).forEach(([t, e]) => {
  Bo[e] = t;
});
function Xl(t) {
  const e = new $t(t), n = Zu($t.prototype.request, e);
  return A.extend(n, $t.prototype, e, { allOwnKeys: !0 }), A.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(i) {
    return Xl(Xt(t, i));
  }, n;
}
const ae = Xl(Hn);
ae.Axios = $t;
ae.CanceledError = zt;
ae.CancelToken = YW;
ae.isCancel = Rl;
ae.VERSION = _r;
ae.toFormData = Gr;
ae.AxiosError = k;
ae.Cancel = ae.CanceledError;
ae.all = function(e) {
  return Promise.all(e);
};
ae.spread = KW;
ae.isAxiosError = JW;
ae.mergeConfig = Xt;
ae.AxiosHeaders = _e;
ae.formToJSON = (t) => Il(A.isHTMLForm(t) ? new FormData(t) : t);
ae.getAdapter = zl.getAdapter;
ae.HttpStatusCode = Bo;
ae.default = ae;
const {
  Axios: xee,
  AxiosError: wee,
  CanceledError: Eee,
  isCancel: Tee,
  CancelToken: See,
  VERSION: _ee,
  all: Nee,
  Cancel: Aee,
  isAxiosError: Oee,
  spread: Dee,
  toFormData: Cee,
  AxiosHeaders: Iee,
  HttpStatusCode: Ree,
  formToJSON: Lee,
  getAdapter: Pee,
  mergeConfig: Fee
} = ae;
class QW {
  constructor() {
    $e(this, "parser");
    this.parser = new Cz();
  }
  async parseFeed(e) {
    try {
      const n = await ae.head(e, { timeout: 5e3 }).catch(() => null);
      let r = (n == null ? void 0 : n.headers["content-type"]) || "";
      if (!n) {
        const c = await ae.get(e, {
          responseType: "stream",
          timeout: 5e3
        });
        r = c.headers["content-type"] || "", c.data.destroy();
      }
      const i = ["xml", "rss", "atom", "rdf"], o = r.includes("text/html") || r.includes("application/html"), s = i.some((c) => r.includes(c));
      if (o && !s)
        throw new Error("INVALID_FEED_TYPE: The URL points to a webpage, not an RSS feed.");
      const a = await this.parser.parseURL(e);
      return !a.image && a.itunes && a.itunes.image && (a.image = a.itunes.image), a.episodes = a.items.map((c) => ({
        title: c.title,
        pubDate: c.pubDate,
        link: c.link,
        enclosure: c.enclosure,
        enclosures: c.enclosures,
        content: c.content,
        contentSnippet: c.contentSnippet,
        guid: c.guid,
        isoDate: c.isoDate,
        itunes: c.itunes
      })), a;
    } catch (n) {
      console.error("Error parsing feed:", n);
      const r = n instanceof Error ? n.message : String(n);
      throw r.includes("INVALID_FEED_TYPE") ? n : new Error("FAILED_TO_PARSE: Could not parse feed. " + r);
    }
  }
}
const Gl = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ZW = Gl + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", eY = "[" + Gl + "][" + ZW + "]*", tY = new RegExp("^" + eY + "$");
function Wl(t, e) {
  const n = [];
  let r = e.exec(t);
  for (; r; ) {
    const i = [];
    i.startIndex = e.lastIndex - r[0].length;
    const o = r.length;
    for (let s = 0; s < o; s++)
      i.push(r[s]);
    n.push(i), r = e.exec(t);
  }
  return n;
}
const Kr = function(t) {
  const e = tY.exec(t);
  return !(e === null || typeof e > "u");
};
function nY(t) {
  return typeof t < "u";
}
const rY = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function iY(t, e) {
  e = Object.assign({}, rY, e);
  const n = [];
  let r = !1, i = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let o = 0; o < t.length; o++)
    if (t[o] === "<" && t[o + 1] === "?") {
      if (o += 2, o = Pc(t, o), o.err) return o;
    } else if (t[o] === "<") {
      let s = o;
      if (o++, t[o] === "!") {
        o = Fc(t, o);
        continue;
      } else {
        let a = !1;
        t[o] === "/" && (a = !0, o++);
        let c = "";
        for (; o < t.length && t[o] !== ">" && t[o] !== " " && t[o] !== "	" && t[o] !== `
` && t[o] !== "\r"; o++)
          c += t[o];
        if (c = c.trim(), c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1), o--), !dY(c)) {
          let p;
          return c.trim().length === 0 ? p = "Invalid space after '<'." : p = "Tag '" + c + "' is an invalid name.", fe("InvalidTag", p, Ce(t, o));
        }
        const l = aY(t, o);
        if (l === !1)
          return fe("InvalidAttr", "Attributes for '" + c + "' have open quote.", Ce(t, o));
        let u = l.value;
        if (o = l.index, u[u.length - 1] === "/") {
          const p = o - u.length;
          u = u.substring(0, u.length - 1);
          const d = kc(u, e);
          if (d === !0)
            r = !0;
          else
            return fe(d.err.code, d.err.msg, Ce(t, p + d.err.line));
        } else if (a)
          if (l.tagClosed) {
            if (u.trim().length > 0)
              return fe("InvalidTag", "Closing tag '" + c + "' can't have attributes or invalid starting.", Ce(t, s));
            if (n.length === 0)
              return fe("InvalidTag", "Closing tag '" + c + "' has not been opened.", Ce(t, s));
            {
              const p = n.pop();
              if (c !== p.tagName) {
                let d = Ce(t, p.tagStartPos);
                return fe(
                  "InvalidTag",
                  "Expected closing tag '" + p.tagName + "' (opened in line " + d.line + ", col " + d.col + ") instead of closing tag '" + c + "'.",
                  Ce(t, s)
                );
              }
              n.length == 0 && (i = !0);
            }
          } else return fe("InvalidTag", "Closing tag '" + c + "' doesn't have proper closing.", Ce(t, o));
        else {
          const p = kc(u, e);
          if (p !== !0)
            return fe(p.err.code, p.err.msg, Ce(t, o - u.length + p.err.line));
          if (i === !0)
            return fe("InvalidXml", "Multiple possible root nodes found.", Ce(t, o));
          e.unpairedTags.indexOf(c) !== -1 || n.push({ tagName: c, tagStartPos: s }), r = !0;
        }
        for (o++; o < t.length; o++)
          if (t[o] === "<")
            if (t[o + 1] === "!") {
              o++, o = Fc(t, o);
              continue;
            } else if (t[o + 1] === "?") {
              if (o = Pc(t, ++o), o.err) return o;
            } else
              break;
          else if (t[o] === "&") {
            const p = lY(t, o);
            if (p == -1)
              return fe("InvalidChar", "char '&' is not expected.", Ce(t, o));
            o = p;
          } else if (i === !0 && !Lc(t[o]))
            return fe("InvalidXml", "Extra text at the end", Ce(t, o));
        t[o] === "<" && o--;
      }
    } else {
      if (Lc(t[o]))
        continue;
      return fe("InvalidChar", "char '" + t[o] + "' is not expected.", Ce(t, o));
    }
  if (r) {
    if (n.length == 1)
      return fe("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", Ce(t, n[0].tagStartPos));
    if (n.length > 0)
      return fe("InvalidXml", "Invalid '" + JSON.stringify(n.map((o) => o.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return fe("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Lc(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Pc(t, e) {
  const n = e;
  for (; e < t.length; e++)
    if (t[e] == "?" || t[e] == " ") {
      const r = t.substr(n, e - n);
      if (e > 5 && r === "xml")
        return fe("InvalidXml", "XML declaration allowed only at the start of the document.", Ce(t, e));
      if (t[e] == "?" && t[e + 1] == ">") {
        e++;
        break;
      } else
        continue;
    }
  return e;
}
function Fc(t, e) {
  if (t.length > e + 5 && t[e + 1] === "-" && t[e + 2] === "-") {
    for (e += 3; e < t.length; e++)
      if (t[e] === "-" && t[e + 1] === "-" && t[e + 2] === ">") {
        e += 2;
        break;
      }
  } else if (t.length > e + 8 && t[e + 1] === "D" && t[e + 2] === "O" && t[e + 3] === "C" && t[e + 4] === "T" && t[e + 5] === "Y" && t[e + 6] === "P" && t[e + 7] === "E") {
    let n = 1;
    for (e += 8; e < t.length; e++)
      if (t[e] === "<")
        n++;
      else if (t[e] === ">" && (n--, n === 0))
        break;
  } else if (t.length > e + 9 && t[e + 1] === "[" && t[e + 2] === "C" && t[e + 3] === "D" && t[e + 4] === "A" && t[e + 5] === "T" && t[e + 6] === "A" && t[e + 7] === "[") {
    for (e += 8; e < t.length; e++)
      if (t[e] === "]" && t[e + 1] === "]" && t[e + 2] === ">") {
        e += 2;
        break;
      }
  }
  return e;
}
const oY = '"', sY = "'";
function aY(t, e) {
  let n = "", r = "", i = !1;
  for (; e < t.length; e++) {
    if (t[e] === oY || t[e] === sY)
      r === "" ? r = t[e] : r !== t[e] || (r = "");
    else if (t[e] === ">" && r === "") {
      i = !0;
      break;
    }
    n += t[e];
  }
  return r !== "" ? !1 : {
    value: n,
    index: e,
    tagClosed: i
  };
}
const cY = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function kc(t, e) {
  const n = Wl(t, cY), r = {};
  for (let i = 0; i < n.length; i++) {
    if (n[i][1].length === 0)
      return fe("InvalidAttr", "Attribute '" + n[i][2] + "' has no space in starting.", xn(n[i]));
    if (n[i][3] !== void 0 && n[i][4] === void 0)
      return fe("InvalidAttr", "Attribute '" + n[i][2] + "' is without value.", xn(n[i]));
    if (n[i][3] === void 0 && !e.allowBooleanAttributes)
      return fe("InvalidAttr", "boolean attribute '" + n[i][2] + "' is not allowed.", xn(n[i]));
    const o = n[i][2];
    if (!pY(o))
      return fe("InvalidAttr", "Attribute '" + o + "' is an invalid name.", xn(n[i]));
    if (!r.hasOwnProperty(o))
      r[o] = 1;
    else
      return fe("InvalidAttr", "Attribute '" + o + "' is repeated.", xn(n[i]));
  }
  return !0;
}
function uY(t, e) {
  let n = /\d/;
  for (t[e] === "x" && (e++, n = /[\da-fA-F]/); e < t.length; e++) {
    if (t[e] === ";")
      return e;
    if (!t[e].match(n))
      break;
  }
  return -1;
}
function lY(t, e) {
  if (e++, t[e] === ";")
    return -1;
  if (t[e] === "#")
    return e++, uY(t, e);
  let n = 0;
  for (; e < t.length; e++, n++)
    if (!(t[e].match(/\w/) && n < 20)) {
      if (t[e] === ";")
        break;
      return -1;
    }
  return e;
}
function fe(t, e, n) {
  return {
    err: {
      code: t,
      msg: e,
      line: n.line || n,
      col: n.col
    }
  };
}
function pY(t) {
  return Kr(t);
}
function dY(t) {
  return Kr(t);
}
function Ce(t, e) {
  const n = t.substring(0, e).split(/\r?\n/);
  return {
    line: n.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: n[n.length - 1].length + 1
  };
}
function xn(t) {
  return t.startIndex + t[1].length;
}
const fY = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(t, e) {
    return e;
  },
  attributeValueProcessor: function(t, e) {
    return e;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(t, e, n) {
    return t;
  },
  // skipEmptyListItem: false
  captureMetaData: !1
}, mY = function(t) {
  return Object.assign({}, fY, t);
};
let Or;
typeof Symbol != "function" ? Or = "@@xmlMetadata" : Or = Symbol("XML Node Metadata");
class Lt {
  constructor(e) {
    this.tagname = e, this.child = [], this[":@"] = {};
  }
  add(e, n) {
    e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: n });
  }
  addChild(e, n) {
    e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({ [e.tagname]: e.child, ":@": e[":@"] }) : this.child.push({ [e.tagname]: e.child }), n !== void 0 && (this.child[this.child.length - 1][Or] = { startIndex: n });
  }
  /** symbol used for metadata */
  static getMetaDataSymbol() {
    return Or;
  }
}
class hY {
  constructor(e) {
    this.suppressValidationErr = !e;
  }
  readDocType(e, n) {
    const r = {};
    if (e[n + 3] === "O" && e[n + 4] === "C" && e[n + 5] === "T" && e[n + 6] === "Y" && e[n + 7] === "P" && e[n + 8] === "E") {
      n = n + 9;
      let i = 1, o = !1, s = !1, a = "";
      for (; n < e.length; n++)
        if (e[n] === "<" && !s) {
          if (o && It(e, "!ENTITY", n)) {
            n += 7;
            let c, l;
            if ([c, l, n] = this.readEntityExp(e, n + 1, this.suppressValidationErr), l.indexOf("&") === -1) {
              const u = c.replace(/[.\-+*:]/g, "\\.");
              r[c] = {
                regx: RegExp(`&${u};`, "g"),
                val: l
              };
            }
          } else if (o && It(e, "!ELEMENT", n)) {
            n += 8;
            const { index: c } = this.readElementExp(e, n + 1);
            n = c;
          } else if (o && It(e, "!ATTLIST", n))
            n += 8;
          else if (o && It(e, "!NOTATION", n)) {
            n += 9;
            const { index: c } = this.readNotationExp(e, n + 1, this.suppressValidationErr);
            n = c;
          } else if (It(e, "!--", n)) s = !0;
          else throw new Error("Invalid DOCTYPE");
          i++, a = "";
        } else if (e[n] === ">") {
          if (s ? e[n - 1] === "-" && e[n - 2] === "-" && (s = !1, i--) : i--, i === 0)
            break;
        } else e[n] === "[" ? o = !0 : a += e[n];
      if (i !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: r, i: n };
  }
  readEntityExp(e, n) {
    n = Be(e, n);
    let r = "";
    for (; n < e.length && !/\s/.test(e[n]) && e[n] !== '"' && e[n] !== "'"; )
      r += e[n], n++;
    if (wn(r), n = Be(e, n), !this.suppressValidationErr) {
      if (e.substring(n, n + 6).toUpperCase() === "SYSTEM")
        throw new Error("External entities are not supported");
      if (e[n] === "%")
        throw new Error("Parameter entities are not supported");
    }
    let i = "";
    return [n, i] = this.readIdentifierVal(e, n, "entity"), n--, [r, i, n];
  }
  readNotationExp(e, n) {
    n = Be(e, n);
    let r = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      r += e[n], n++;
    !this.suppressValidationErr && wn(r), n = Be(e, n);
    const i = e.substring(n, n + 6).toUpperCase();
    if (!this.suppressValidationErr && i !== "SYSTEM" && i !== "PUBLIC")
      throw new Error(`Expected SYSTEM or PUBLIC, found "${i}"`);
    n += i.length, n = Be(e, n);
    let o = null, s = null;
    if (i === "PUBLIC")
      [n, o] = this.readIdentifierVal(e, n, "publicIdentifier"), n = Be(e, n), (e[n] === '"' || e[n] === "'") && ([n, s] = this.readIdentifierVal(e, n, "systemIdentifier"));
    else if (i === "SYSTEM" && ([n, s] = this.readIdentifierVal(e, n, "systemIdentifier"), !this.suppressValidationErr && !s))
      throw new Error("Missing mandatory system identifier for SYSTEM notation");
    return { notationName: r, publicIdentifier: o, systemIdentifier: s, index: --n };
  }
  readIdentifierVal(e, n, r) {
    let i = "";
    const o = e[n];
    if (o !== '"' && o !== "'")
      throw new Error(`Expected quoted string, found "${o}"`);
    for (n++; n < e.length && e[n] !== o; )
      i += e[n], n++;
    if (e[n] !== o)
      throw new Error(`Unterminated ${r} value`);
    return n++, [n, i];
  }
  readElementExp(e, n) {
    n = Be(e, n);
    let r = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      r += e[n], n++;
    if (!this.suppressValidationErr && !Kr(r))
      throw new Error(`Invalid element name: "${r}"`);
    n = Be(e, n);
    let i = "";
    if (e[n] === "E" && It(e, "MPTY", n)) n += 4;
    else if (e[n] === "A" && It(e, "NY", n)) n += 2;
    else if (e[n] === "(") {
      for (n++; n < e.length && e[n] !== ")"; )
        i += e[n], n++;
      if (e[n] !== ")")
        throw new Error("Unterminated content model");
    } else if (!this.suppressValidationErr)
      throw new Error(`Invalid Element Expression, found "${e[n]}"`);
    return {
      elementName: r,
      contentModel: i.trim(),
      index: n
    };
  }
  readAttlistExp(e, n) {
    n = Be(e, n);
    let r = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      r += e[n], n++;
    wn(r), n = Be(e, n);
    let i = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      i += e[n], n++;
    if (!wn(i))
      throw new Error(`Invalid attribute name: "${i}"`);
    n = Be(e, n);
    let o = "";
    if (e.substring(n, n + 8).toUpperCase() === "NOTATION") {
      if (o = "NOTATION", n += 8, n = Be(e, n), e[n] !== "(")
        throw new Error(`Expected '(', found "${e[n]}"`);
      n++;
      let a = [];
      for (; n < e.length && e[n] !== ")"; ) {
        let c = "";
        for (; n < e.length && e[n] !== "|" && e[n] !== ")"; )
          c += e[n], n++;
        if (c = c.trim(), !wn(c))
          throw new Error(`Invalid notation name: "${c}"`);
        a.push(c), e[n] === "|" && (n++, n = Be(e, n));
      }
      if (e[n] !== ")")
        throw new Error("Unterminated list of notations");
      n++, o += " (" + a.join("|") + ")";
    } else {
      for (; n < e.length && !/\s/.test(e[n]); )
        o += e[n], n++;
      const a = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
      if (!this.suppressValidationErr && !a.includes(o.toUpperCase()))
        throw new Error(`Invalid attribute type: "${o}"`);
    }
    n = Be(e, n);
    let s = "";
    return e.substring(n, n + 8).toUpperCase() === "#REQUIRED" ? (s = "#REQUIRED", n += 8) : e.substring(n, n + 7).toUpperCase() === "#IMPLIED" ? (s = "#IMPLIED", n += 7) : [n, s] = this.readIdentifierVal(e, n, "ATTLIST"), {
      elementName: r,
      attributeName: i,
      attributeType: o,
      defaultValue: s,
      index: n
    };
  }
}
const Be = (t, e) => {
  for (; e < t.length && /\s/.test(t[e]); )
    e++;
  return e;
};
function It(t, e, n) {
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[n + r + 1]) return !1;
  return !0;
}
function wn(t) {
  if (Kr(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const gY = /^[-+]?0x[a-fA-F0-9]+$/, bY = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, yY = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function vY(t, e = {}) {
  if (e = Object.assign({}, yY, e), !t || typeof t != "string") return t;
  let n = t.trim();
  if (e.skipLike !== void 0 && e.skipLike.test(n)) return t;
  if (t === "0") return 0;
  if (e.hex && gY.test(n))
    return TY(n, 16);
  if (n.includes("e") || n.includes("E"))
    return wY(t, n, e);
  {
    const r = bY.exec(n);
    if (r) {
      const i = r[1] || "", o = r[2];
      let s = EY(r[3]);
      const a = i ? (
        // 0., -00., 000.
        t[o.length + 1] === "."
      ) : t[o.length] === ".";
      if (!e.leadingZeros && (o.length > 1 || o.length === 1 && !a))
        return t;
      {
        const c = Number(n), l = String(c);
        if (c === 0) return c;
        if (l.search(/[eE]/) !== -1)
          return e.eNotation ? c : t;
        if (n.indexOf(".") !== -1)
          return l === "0" || l === s || l === `${i}${s}` ? c : t;
        let u = o ? s : n;
        return o ? u === l || i + u === l ? c : t : u === l || u === i + l ? c : t;
      }
    } else
      return t;
  }
}
const xY = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function wY(t, e, n) {
  if (!n.eNotation) return t;
  const r = e.match(xY);
  if (r) {
    let i = r[1] || "";
    const o = r[3].indexOf("e") === -1 ? "E" : "e", s = r[2], a = i ? (
      // 0E.
      t[s.length + 1] === o
    ) : t[s.length] === o;
    return s.length > 1 && a ? t : s.length === 1 && (r[3].startsWith(`.${o}`) || r[3][0] === o) ? Number(e) : n.leadingZeros && !a ? (e = (r[1] || "") + r[3], Number(e)) : t;
  } else
    return t;
}
function EY(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substring(0, t.length - 1))), t;
}
function TY(t, e) {
  if (parseInt) return parseInt(t, e);
  if (Number.parseInt) return Number.parseInt(t, e);
  if (window && window.parseInt) return window.parseInt(t, e);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function Yl(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (e) => {
    for (const n of t)
      if (typeof n == "string" && e === n || n instanceof RegExp && n.test(e))
        return !0;
  } : () => !1;
}
class SY {
  constructor(e) {
    if (this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
      apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
      gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
      lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
      quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
    }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
      space: { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      cent: { regex: /&(cent|#162);/g, val: "¢" },
      pound: { regex: /&(pound|#163);/g, val: "£" },
      yen: { regex: /&(yen|#165);/g, val: "¥" },
      euro: { regex: /&(euro|#8364);/g, val: "€" },
      copyright: { regex: /&(copy|#169);/g, val: "©" },
      reg: { regex: /&(reg|#174);/g, val: "®" },
      inr: { regex: /&(inr|#8377);/g, val: "₹" },
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (n, r) => qc(r, 10, "&#") },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (n, r) => qc(r, 16, "&#x") }
    }, this.addExternalEntities = _Y, this.parseXml = CY, this.parseTextData = NY, this.resolveNameSpace = AY, this.buildAttributesMap = DY, this.isItStopNode = PY, this.replaceEntitiesValue = RY, this.readStopNodeData = kY, this.saveTextToParentTag = LY, this.addChild = IY, this.ignoreAttributesFn = Yl(this.options.ignoreAttributes), this.options.stopNodes && this.options.stopNodes.length > 0) {
      this.stopNodesExact = /* @__PURE__ */ new Set(), this.stopNodesWildcard = /* @__PURE__ */ new Set();
      for (let n = 0; n < this.options.stopNodes.length; n++) {
        const r = this.options.stopNodes[n];
        typeof r == "string" && (r.startsWith("*.") ? this.stopNodesWildcard.add(r.substring(2)) : this.stopNodesExact.add(r));
      }
    }
  }
}
function _Y(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n], i = r.replace(/[.\-+*:]/g, "\\.");
    this.lastEntities[r] = {
      regex: new RegExp("&" + i + ";", "g"),
      val: t[r]
    };
  }
}
function NY(t, e, n, r, i, o, s) {
  if (t !== void 0 && (this.options.trimValues && !r && (t = t.trim()), t.length > 0)) {
    s || (t = this.replaceEntitiesValue(t));
    const a = this.options.tagValueProcessor(e, t, n, i, o);
    return a == null ? t : typeof a != typeof t || a !== t ? a : this.options.trimValues ? Uo(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Uo(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function AY(t) {
  if (this.options.removeNSPrefix) {
    const e = t.split(":"), n = t.charAt(0) === "/" ? "/" : "";
    if (e[0] === "xmlns")
      return "";
    e.length === 2 && (t = n + e[1]);
  }
  return t;
}
const OY = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function DY(t, e) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const n = Wl(t, OY), r = n.length, i = {};
    for (let o = 0; o < r; o++) {
      const s = this.resolveNameSpace(n[o][1]);
      if (this.ignoreAttributesFn(s, e))
        continue;
      let a = n[o][4], c = this.options.attributeNamePrefix + s;
      if (s.length)
        if (this.options.transformAttributeName && (c = this.options.transformAttributeName(c)), c === "__proto__" && (c = "#__proto__"), a !== void 0) {
          this.options.trimValues && (a = a.trim()), a = this.replaceEntitiesValue(a);
          const l = this.options.attributeValueProcessor(s, a, e);
          l == null ? i[c] = a : typeof l != typeof a || l !== a ? i[c] = l : i[c] = Uo(
            a,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (i[c] = !0);
    }
    if (!Object.keys(i).length)
      return;
    if (this.options.attributesGroupName) {
      const o = {};
      return o[this.options.attributesGroupName] = i, o;
    }
    return i;
  }
}
const CY = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const e = new Lt("!xml");
  let n = e, r = "", i = "";
  const o = new hY(this.options.processEntities);
  for (let s = 0; s < t.length; s++)
    if (t[s] === "<")
      if (t[s + 1] === "/") {
        const c = kt(t, ">", s, "Closing Tag is not closed.");
        let l = t.substring(s + 2, c).trim();
        if (this.options.removeNSPrefix) {
          const d = l.indexOf(":");
          d !== -1 && (l = l.substr(d + 1));
        }
        this.options.transformTagName && (l = this.options.transformTagName(l)), n && (r = this.saveTextToParentTag(r, n, i));
        const u = i.substring(i.lastIndexOf(".") + 1);
        if (l && this.options.unpairedTags.indexOf(l) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${l}>`);
        let p = 0;
        u && this.options.unpairedTags.indexOf(u) !== -1 ? (p = i.lastIndexOf(".", i.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : p = i.lastIndexOf("."), i = i.substring(0, p), n = this.tagsNodeStack.pop(), r = "", s = c;
      } else if (t[s + 1] === "?") {
        let c = Mo(t, s, !1, "?>");
        if (!c) throw new Error("Pi Tag is not closed.");
        if (r = this.saveTextToParentTag(r, n, i), !(this.options.ignoreDeclaration && c.tagName === "?xml" || this.options.ignorePiTags)) {
          const l = new Lt(c.tagName);
          l.add(this.options.textNodeName, ""), c.tagName !== c.tagExp && c.attrExpPresent && (l[":@"] = this.buildAttributesMap(c.tagExp, i)), this.addChild(n, l, i, s);
        }
        s = c.closeIndex + 1;
      } else if (t.substr(s + 1, 3) === "!--") {
        const c = kt(t, "-->", s + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const l = t.substring(s + 4, c - 2);
          r = this.saveTextToParentTag(r, n, i), n.add(this.options.commentPropName, [{ [this.options.textNodeName]: l }]);
        }
        s = c;
      } else if (t.substr(s + 1, 2) === "!D") {
        const c = o.readDocType(t, s);
        this.docTypeEntities = c.entities, s = c.i;
      } else if (t.substr(s + 1, 2) === "![") {
        const c = kt(t, "]]>", s, "CDATA is not closed.") - 2, l = t.substring(s + 9, c);
        r = this.saveTextToParentTag(r, n, i);
        let u = this.parseTextData(l, n.tagname, i, !0, !1, !0, !0);
        u == null && (u = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [{ [this.options.textNodeName]: l }]) : n.add(this.options.textNodeName, u), s = c + 2;
      } else {
        let c = Mo(t, s, this.options.removeNSPrefix), l = c.tagName;
        const u = c.rawTagName;
        let p = c.tagExp, d = c.attrExpPresent, f = c.closeIndex;
        if (this.options.transformTagName) {
          const g = this.options.transformTagName(l);
          p === l && (p = g), l = g;
        }
        n && r && n.tagname !== "!xml" && (r = this.saveTextToParentTag(r, n, i, !1));
        const m = n;
        m && this.options.unpairedTags.indexOf(m.tagname) !== -1 && (n = this.tagsNodeStack.pop(), i = i.substring(0, i.lastIndexOf("."))), l !== e.tagname && (i += i ? "." + l : l);
        const h = s;
        if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, i, l)) {
          let g = "";
          if (p.length > 0 && p.lastIndexOf("/") === p.length - 1)
            l[l.length - 1] === "/" ? (l = l.substr(0, l.length - 1), i = i.substr(0, i.length - 1), p = l) : p = p.substr(0, p.length - 1), s = c.closeIndex;
          else if (this.options.unpairedTags.indexOf(l) !== -1)
            s = c.closeIndex;
          else {
            const v = this.readStopNodeData(t, u, f + 1);
            if (!v) throw new Error(`Unexpected end of ${u}`);
            s = v.i, g = v.tagContent;
          }
          const T = new Lt(l);
          l !== p && d && (T[":@"] = this.buildAttributesMap(
            p,
            i
          )), g && (g = this.parseTextData(g, l, i, !0, d, !0, !0)), i = i.substr(0, i.lastIndexOf(".")), T.add(this.options.textNodeName, g), this.addChild(n, T, i, h);
        } else {
          if (p.length > 0 && p.lastIndexOf("/") === p.length - 1) {
            if (l[l.length - 1] === "/" ? (l = l.substr(0, l.length - 1), i = i.substr(0, i.length - 1), p = l) : p = p.substr(0, p.length - 1), this.options.transformTagName) {
              const T = this.options.transformTagName(l);
              p === l && (p = T), l = T;
            }
            const g = new Lt(l);
            l !== p && d && (g[":@"] = this.buildAttributesMap(p, i)), this.addChild(n, g, i, h), i = i.substr(0, i.lastIndexOf("."));
          } else {
            const g = new Lt(l);
            this.tagsNodeStack.push(n), l !== p && d && (g[":@"] = this.buildAttributesMap(p, i)), this.addChild(n, g, i, h), n = g;
          }
          r = "", s = f;
        }
      }
    else
      r += t[s];
  return e.child;
};
function IY(t, e, n, r) {
  this.options.captureMetaData || (r = void 0);
  const i = this.options.updateTag(e.tagname, n, e[":@"]);
  i === !1 || (typeof i == "string" && (e.tagname = i), t.addChild(e, r));
}
const RY = function(t) {
  if (this.options.processEntities) {
    for (let e in this.docTypeEntities) {
      const n = this.docTypeEntities[e];
      t = t.replace(n.regx, n.val);
    }
    for (let e in this.lastEntities) {
      const n = this.lastEntities[e];
      t = t.replace(n.regex, n.val);
    }
    if (this.options.htmlEntities)
      for (let e in this.htmlEntities) {
        const n = this.htmlEntities[e];
        t = t.replace(n.regex, n.val);
      }
    t = t.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return t;
};
function LY(t, e, n, r) {
  return t && (r === void 0 && (r = e.child.length === 0), t = this.parseTextData(
    t,
    e.tagname,
    n,
    !1,
    e[":@"] ? Object.keys(e[":@"]).length !== 0 : !1,
    r
  ), t !== void 0 && t !== "" && e.add(this.options.textNodeName, t), t = ""), t;
}
function PY(t, e, n, r) {
  return !!(e && e.has(r) || t && t.has(n));
}
function FY(t, e, n = ">") {
  let r, i = "";
  for (let o = e; o < t.length; o++) {
    let s = t[o];
    if (r)
      s === r && (r = "");
    else if (s === '"' || s === "'")
      r = s;
    else if (s === n[0])
      if (n[1]) {
        if (t[o + 1] === n[1])
          return {
            data: i,
            index: o
          };
      } else
        return {
          data: i,
          index: o
        };
    else s === "	" && (s = " ");
    i += s;
  }
}
function kt(t, e, n, r) {
  const i = t.indexOf(e, n);
  if (i === -1)
    throw new Error(r);
  return i + e.length - 1;
}
function Mo(t, e, n, r = ">") {
  const i = FY(t, e + 1, r);
  if (!i) return;
  let o = i.data;
  const s = i.index, a = o.search(/\s/);
  let c = o, l = !0;
  a !== -1 && (c = o.substring(0, a), o = o.substring(a + 1).trimStart());
  const u = c;
  if (n) {
    const p = c.indexOf(":");
    p !== -1 && (c = c.substr(p + 1), l = c !== i.data.substr(p + 1));
  }
  return {
    tagName: c,
    tagExp: o,
    closeIndex: s,
    attrExpPresent: l,
    rawTagName: u
  };
}
function kY(t, e, n) {
  const r = n;
  let i = 1;
  for (; n < t.length; n++)
    if (t[n] === "<")
      if (t[n + 1] === "/") {
        const o = kt(t, ">", n, `${e} is not closed`);
        if (t.substring(n + 2, o).trim() === e && (i--, i === 0))
          return {
            tagContent: t.substring(r, n),
            i: o
          };
        n = o;
      } else if (t[n + 1] === "?")
        n = kt(t, "?>", n + 1, "StopNode is not closed.");
      else if (t.substr(n + 1, 3) === "!--")
        n = kt(t, "-->", n + 3, "StopNode is not closed.");
      else if (t.substr(n + 1, 2) === "![")
        n = kt(t, "]]>", n, "StopNode is not closed.") - 2;
      else {
        const o = Mo(t, n, ">");
        o && ((o && o.tagName) === e && o.tagExp[o.tagExp.length - 1] !== "/" && i++, n = o.closeIndex);
      }
}
function Uo(t, e, n) {
  if (e && typeof t == "string") {
    const r = t.trim();
    return r === "true" ? !0 : r === "false" ? !1 : vY(t, n);
  } else
    return nY(t) ? t : "";
}
function qc(t, e, n) {
  const r = Number.parseInt(t, e);
  return r >= 0 && r <= 1114111 ? String.fromCodePoint(r) : n + t + ";";
}
const ho = Lt.getMetaDataSymbol();
function qY(t, e) {
  return Kl(t, e);
}
function Kl(t, e, n) {
  let r;
  const i = {};
  for (let o = 0; o < t.length; o++) {
    const s = t[o], a = BY(s);
    let c = "";
    if (n === void 0 ? c = a : c = n + "." + a, a === e.textNodeName)
      r === void 0 ? r = s[a] : r += "" + s[a];
    else {
      if (a === void 0)
        continue;
      if (s[a]) {
        let l = Kl(s[a], e, c);
        const u = UY(l, e);
        s[ho] !== void 0 && (l[ho] = s[ho]), s[":@"] ? MY(l, s[":@"], c, e) : Object.keys(l).length === 1 && l[e.textNodeName] !== void 0 && !e.alwaysCreateTextNode ? l = l[e.textNodeName] : Object.keys(l).length === 0 && (e.alwaysCreateTextNode ? l[e.textNodeName] = "" : l = ""), i[a] !== void 0 && i.hasOwnProperty(a) ? (Array.isArray(i[a]) || (i[a] = [i[a]]), i[a].push(l)) : e.isArray(a, c, u) ? i[a] = [l] : i[a] = l;
      }
    }
  }
  return typeof r == "string" ? r.length > 0 && (i[e.textNodeName] = r) : r !== void 0 && (i[e.textNodeName] = r), i;
}
function BY(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (r !== ":@") return r;
  }
}
function MY(t, e, n, r) {
  if (e) {
    const i = Object.keys(e), o = i.length;
    for (let s = 0; s < o; s++) {
      const a = i[s];
      r.isArray(a, n + "." + a, !0, !0) ? t[a] = [e[a]] : t[a] = e[a];
    }
  }
}
function UY(t, e) {
  const { textNodeName: n } = e, r = Object.keys(t).length;
  return !!(r === 0 || r === 1 && (t[n] || typeof t[n] == "boolean" || t[n] === 0));
}
class jY {
  constructor(e) {
    this.externalEntities = {}, this.options = mY(e);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Uint8Array} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(e, n) {
    if (typeof e != "string" && e.toString)
      e = e.toString();
    else if (typeof e != "string")
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (n) {
      n === !0 && (n = {});
      const o = iY(e, n);
      if (o !== !0)
        throw Error(`${o.err.msg}:${o.err.line}:${o.err.col}`);
    }
    const r = new SY(this.options);
    r.addExternalEntities(this.externalEntities);
    const i = r.parseXml(e);
    return this.options.preserveOrder || i === void 0 ? i : qY(i, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(e, n) {
    if (n.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (n === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[e] = n;
  }
  /**
   * Returns a Symbol that can be used to access the metadata
   * property on a node.
   * 
   * If Symbol is not available in the environment, an ordinary property is used
   * and the name of the property is here returned.
   * 
   * The XMLMetaData property is only present when `captureMetaData`
   * is true in the options.
   */
  static getMetaDataSymbol() {
    return Lt.getMetaDataSymbol();
  }
}
const $Y = `
`;
function VY(t, e) {
  let n = "";
  return e.format && e.indentBy.length > 0 && (n = $Y), Jl(t, e, "", n);
}
function Jl(t, e, n, r) {
  let i = "", o = !1;
  for (let s = 0; s < t.length; s++) {
    const a = t[s], c = zY(a);
    if (c === void 0) continue;
    let l = "";
    if (n.length === 0 ? l = c : l = `${n}.${c}`, c === e.textNodeName) {
      let m = a[c];
      HY(l, e) || (m = e.tagValueProcessor(c, m), m = Ql(m, e)), o && (i += r), i += m, o = !1;
      continue;
    } else if (c === e.cdataPropName) {
      o && (i += r), i += `<![CDATA[${a[c][0][e.textNodeName]}]]>`, o = !1;
      continue;
    } else if (c === e.commentPropName) {
      i += r + `<!--${a[c][0][e.textNodeName]}-->`, o = !0;
      continue;
    } else if (c[0] === "?") {
      const m = Bc(a[":@"], e), h = c === "?xml" ? "" : r;
      let g = a[c][0][e.textNodeName];
      g = g.length !== 0 ? " " + g : "", i += h + `<${c}${g}${m}?>`, o = !0;
      continue;
    }
    let u = r;
    u !== "" && (u += e.indentBy);
    const p = Bc(a[":@"], e), d = r + `<${c}${p}`, f = Jl(a[c], e, l, u);
    e.unpairedTags.indexOf(c) !== -1 ? e.suppressUnpairedNode ? i += d + ">" : i += d + "/>" : (!f || f.length === 0) && e.suppressEmptyNode ? i += d + "/>" : f && f.endsWith(">") ? i += d + `>${f}${r}</${c}>` : (i += d + ">", f && r !== "" && (f.includes("/>") || f.includes("</")) ? i += r + e.indentBy + f + r : i += f, i += `</${c}>`), o = !0;
  }
  return i;
}
function zY(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (t.hasOwnProperty(r) && r !== ":@")
      return r;
  }
}
function Bc(t, e) {
  let n = "";
  if (t && !e.ignoreAttributes)
    for (let r in t) {
      if (!t.hasOwnProperty(r)) continue;
      let i = e.attributeValueProcessor(r, t[r]);
      i = Ql(i, e), i === !0 && e.suppressBooleanAttributes ? n += ` ${r.substr(e.attributeNamePrefix.length)}` : n += ` ${r.substr(e.attributeNamePrefix.length)}="${i}"`;
    }
  return n;
}
function HY(t, e) {
  t = t.substr(0, t.length - e.textNodeName.length - 1);
  let n = t.substr(t.lastIndexOf(".") + 1);
  for (let r in e.stopNodes)
    if (e.stopNodes[r] === t || e.stopNodes[r] === "*." + n) return !0;
  return !1;
}
function Ql(t, e) {
  if (t && t.length > 0 && e.processEntities)
    for (let n = 0; n < e.entities.length; n++) {
      const r = e.entities[n];
      t = t.replace(r.regex, r.val);
    }
  return t;
}
const XY = {
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  cdataPropName: !1,
  format: !1,
  indentBy: "  ",
  suppressEmptyNode: !1,
  suppressUnpairedNode: !0,
  suppressBooleanAttributes: !0,
  tagValueProcessor: function(t, e) {
    return e;
  },
  attributeValueProcessor: function(t, e) {
    return e;
  },
  preserveOrder: !1,
  commentPropName: !1,
  unpairedTags: [],
  entities: [
    { regex: new RegExp("&", "g"), val: "&amp;" },
    //it must be on top
    { regex: new RegExp(">", "g"), val: "&gt;" },
    { regex: new RegExp("<", "g"), val: "&lt;" },
    { regex: new RegExp("'", "g"), val: "&apos;" },
    { regex: new RegExp('"', "g"), val: "&quot;" }
  ],
  processEntities: !0,
  stopNodes: [],
  // transformTagName: false,
  // transformAttributeName: false,
  oneListGroup: !1
};
function At(t) {
  this.options = Object.assign({}, XY, t), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
    return !1;
  } : (this.ignoreAttributesFn = Yl(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = YY), this.processTextOrObjNode = GY, this.options.format ? (this.indentate = WY, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
    return "";
  }, this.tagEndChar = ">", this.newLine = "");
}
At.prototype.build = function(t) {
  return this.options.preserveOrder ? VY(t, this.options) : (Array.isArray(t) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (t = {
    [this.options.arrayNodeName]: t
  }), this.j2x(t, 0, []).val);
};
At.prototype.j2x = function(t, e, n) {
  let r = "", i = "";
  const o = n.join(".");
  for (let s in t)
    if (Object.prototype.hasOwnProperty.call(t, s))
      if (typeof t[s] > "u")
        this.isAttribute(s) && (i += "");
      else if (t[s] === null)
        this.isAttribute(s) || s === this.options.cdataPropName ? i += "" : s[0] === "?" ? i += this.indentate(e) + "<" + s + "?" + this.tagEndChar : i += this.indentate(e) + "<" + s + "/" + this.tagEndChar;
      else if (t[s] instanceof Date)
        i += this.buildTextValNode(t[s], s, "", e);
      else if (typeof t[s] != "object") {
        const a = this.isAttribute(s);
        if (a && !this.ignoreAttributesFn(a, o))
          r += this.buildAttrPairStr(a, "" + t[s]);
        else if (!a)
          if (s === this.options.textNodeName) {
            let c = this.options.tagValueProcessor(s, "" + t[s]);
            i += this.replaceEntitiesValue(c);
          } else
            i += this.buildTextValNode(t[s], s, "", e);
      } else if (Array.isArray(t[s])) {
        const a = t[s].length;
        let c = "", l = "";
        for (let u = 0; u < a; u++) {
          const p = t[s][u];
          if (!(typeof p > "u")) if (p === null)
            s[0] === "?" ? i += this.indentate(e) + "<" + s + "?" + this.tagEndChar : i += this.indentate(e) + "<" + s + "/" + this.tagEndChar;
          else if (typeof p == "object")
            if (this.options.oneListGroup) {
              const d = this.j2x(p, e + 1, n.concat(s));
              c += d.val, this.options.attributesGroupName && p.hasOwnProperty(this.options.attributesGroupName) && (l += d.attrStr);
            } else
              c += this.processTextOrObjNode(p, s, e, n);
          else if (this.options.oneListGroup) {
            let d = this.options.tagValueProcessor(s, p);
            d = this.replaceEntitiesValue(d), c += d;
          } else
            c += this.buildTextValNode(p, s, "", e);
        }
        this.options.oneListGroup && (c = this.buildObjectNode(c, s, l, e)), i += c;
      } else if (this.options.attributesGroupName && s === this.options.attributesGroupName) {
        const a = Object.keys(t[s]), c = a.length;
        for (let l = 0; l < c; l++)
          r += this.buildAttrPairStr(a[l], "" + t[s][a[l]]);
      } else
        i += this.processTextOrObjNode(t[s], s, e, n);
  return { attrStr: r, val: i };
};
At.prototype.buildAttrPairStr = function(t, e) {
  return e = this.options.attributeValueProcessor(t, "" + e), e = this.replaceEntitiesValue(e), this.options.suppressBooleanAttributes && e === "true" ? " " + t : " " + t + '="' + e + '"';
};
function GY(t, e, n, r) {
  const i = this.j2x(t, n + 1, r.concat(e));
  return t[this.options.textNodeName] !== void 0 && Object.keys(t).length === 1 ? this.buildTextValNode(t[this.options.textNodeName], e, i.attrStr, n) : this.buildObjectNode(i.val, e, i.attrStr, n);
}
At.prototype.buildObjectNode = function(t, e, n, r) {
  if (t === "")
    return e[0] === "?" ? this.indentate(r) + "<" + e + n + "?" + this.tagEndChar : this.indentate(r) + "<" + e + n + this.closeTag(e) + this.tagEndChar;
  {
    let i = "</" + e + this.tagEndChar, o = "";
    return e[0] === "?" && (o = "?", i = ""), (n || n === "") && t.indexOf("<") === -1 ? this.indentate(r) + "<" + e + n + o + ">" + t + i : this.options.commentPropName !== !1 && e === this.options.commentPropName && o.length === 0 ? this.indentate(r) + `<!--${t}-->` + this.newLine : this.indentate(r) + "<" + e + n + o + this.tagEndChar + t + this.indentate(r) + i;
  }
};
At.prototype.closeTag = function(t) {
  let e = "";
  return this.options.unpairedTags.indexOf(t) !== -1 ? this.options.suppressUnpairedNode || (e = "/") : this.options.suppressEmptyNode ? e = "/" : e = `></${t}`, e;
};
At.prototype.buildTextValNode = function(t, e, n, r) {
  if (this.options.cdataPropName !== !1 && e === this.options.cdataPropName)
    return this.indentate(r) + `<![CDATA[${t}]]>` + this.newLine;
  if (this.options.commentPropName !== !1 && e === this.options.commentPropName)
    return this.indentate(r) + `<!--${t}-->` + this.newLine;
  if (e[0] === "?")
    return this.indentate(r) + "<" + e + n + "?" + this.tagEndChar;
  {
    let i = this.options.tagValueProcessor(e, t);
    return i = this.replaceEntitiesValue(i), i === "" ? this.indentate(r) + "<" + e + n + this.closeTag(e) + this.tagEndChar : this.indentate(r) + "<" + e + n + ">" + i + "</" + e + this.tagEndChar;
  }
};
At.prototype.replaceEntitiesValue = function(t) {
  if (t && t.length > 0 && this.options.processEntities)
    for (let e = 0; e < this.options.entities.length; e++) {
      const n = this.options.entities[e];
      t = t.replace(n.regex, n.val);
    }
  return t;
};
function WY(t) {
  return this.options.indentBy.repeat(t);
}
function YY(t) {
  return t.startsWith(this.options.attributeNamePrefix) && t !== this.options.textNodeName ? t.substr(this.attrPrefixLen) : !1;
}
class KY {
  constructor(e) {
    $e(this, "db");
    const n = e || Y.join(
      Ne.getPath("userData"),
      "feeddownloader.sqlite"
    );
    this.db = new fd(n), this.init();
  }
  init() {
    this.db.pragma("journal_mode = WAL"), this.db.pragma("foreign_keys = ON"), this.db.exec(`
            CREATE TABLE IF NOT EXISTS feeds (
                url     TEXT PRIMARY KEY,
                title   TEXT NOT NULL DEFAULT '',
                image   TEXT,
                lastUpdated TEXT
            );

            CREATE TABLE IF NOT EXISTS downloads (
                guid TEXT PRIMARY KEY
            );

            CREATE TABLE IF NOT EXISTS archive (
                guid          TEXT PRIMARY KEY,
                podcastTitle  TEXT NOT NULL DEFAULT '',
                title         TEXT NOT NULL DEFAULT '',
                pubDate       TEXT NOT NULL DEFAULT '',
                downloadedAt  TEXT NOT NULL DEFAULT '',
                filename      TEXT
            );

            CREATE TABLE IF NOT EXISTS settings (
                key   TEXT PRIMARY KEY,
                value TEXT
            );
        `);
  }
  // ── Feeds ────────────────────────────────────────────────
  getFeeds() {
    return this.db.prepare("SELECT url, title, image, lastUpdated FROM feeds ORDER BY rowid").all();
  }
  addFeed(e) {
    var n;
    this.db.prepare(
      "INSERT OR IGNORE INTO feeds (url, title, image, lastUpdated) VALUES (?, ?, ?, ?)"
    ).run(
      e.url,
      e.title,
      typeof e.image == "string" ? e.image : ((n = e.image) == null ? void 0 : n.url) || null,
      e.lastUpdated || null
    );
  }
  removeFeed(e) {
    this.db.prepare("DELETE FROM feeds WHERE url = ?").run(e);
  }
  // ── Downloads ────────────────────────────────────────────
  getDownloadedEpisodes() {
    return this.db.prepare("SELECT guid FROM downloads").all().map((n) => n.guid);
  }
  markAsDownloaded(e) {
    this.db.prepare("INSERT OR IGNORE INTO downloads (guid) VALUES (?)").run(e);
  }
  isDownloaded(e) {
    return !!this.db.prepare("SELECT 1 FROM downloads WHERE guid = ?").get(e);
  }
  removeDownloadedEpisode(e) {
    const n = this.db.prepare("DELETE FROM downloads WHERE guid = ?"), r = this.db.prepare("DELETE FROM archive WHERE guid = ?");
    this.db.transaction(() => {
      n.run(e), r.run(e);
    })();
  }
  resetDownloadHistory() {
    this.db.transaction(() => {
      this.db.prepare("DELETE FROM downloads").run(), this.db.prepare("DELETE FROM archive").run();
    })();
  }
  // ── Archive ──────────────────────────────────────────────
  addArchiveEntry(e) {
    this.db.prepare(
      `INSERT OR IGNORE INTO archive (guid, podcastTitle, title, pubDate, downloadedAt, filename)
             VALUES (?, ?, ?, ?, ?, ?)`
    ).run(
      e.guid,
      e.podcastTitle,
      e.title,
      e.pubDate,
      e.downloadedAt,
      e.filename || null
    );
  }
  getArchive() {
    return this.db.prepare("SELECT * FROM archive ORDER BY downloadedAt DESC").all();
  }
  exportArchiveCSV() {
    const e = this.db.prepare("SELECT * FROM archive ORDER BY downloadedAt DESC").all();
    let n = `\uFEFFPodcast,Episode Title,Publish Date,Downloaded At,GUID
`;
    return e.forEach((r) => {
      const i = (o) => `"${(o || "").replace(/"/g, '""').replace(/[\n\r]+/g, " ")}"`;
      n += `${i(r.podcastTitle)},${i(r.title)},${i(r.pubDate)},${i(r.downloadedAt)},${i(r.guid)}
`;
    }), n;
  }
  getArchiveStats() {
    const e = this.db.prepare(
      "SELECT COUNT(*) as total, COUNT(DISTINCT podcastTitle) as podcasts FROM archive"
    ).get();
    if (e.total === 0)
      return { totalFiles: 0, totalPodcasts: 0, oldestDate: null, newestDate: null };
    const n = this.db.prepare(
      "SELECT MIN(downloadedAt) as oldest, MAX(downloadedAt) as newest FROM archive WHERE downloadedAt IS NOT NULL"
    ).get();
    return {
      totalFiles: e.total,
      totalPodcasts: e.podcasts,
      oldestDate: n.oldest,
      newestDate: n.newest
    };
  }
  // ── Settings ─────────────────────────────────────────────
  getSetting(e) {
    const n = this.db.prepare("SELECT value FROM settings WHERE key = ?").get(e);
    return (n == null ? void 0 : n.value) ?? null;
  }
  setSetting(e, n) {
    this.db.prepare(
      "INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)"
    ).run(e, n);
  }
  getDownloadPath() {
    return this.getSetting("downloadPath") || "";
  }
  setDownloadPath(e) {
    this.setSetting("downloadPath", e);
  }
  getConcurrency() {
    const e = this.getSetting("concurrency");
    return e ? parseInt(e, 10) : 3;
  }
  setConcurrency(e) {
    this.setSetting("concurrency", String(Math.max(1, Math.min(e, 10))));
  }
  getNamingTemplate() {
    return this.getSetting("namingTemplate") || "{title}";
  }
  setNamingTemplate(e) {
    this.setSetting("namingTemplate", e);
  }
  getSidecarEnabled() {
    return this.getSetting("sidecarEnabled") === "true";
  }
  setSidecarEnabled(e) {
    this.setSetting("sidecarEnabled", String(e));
  }
  getId3Enabled() {
    return this.getSetting("id3Enabled") === "true";
  }
  setId3Enabled(e) {
    this.setSetting("id3Enabled", String(e));
  }
  getSpeedLimit() {
    const e = this.getSetting("speedLimitKBps");
    return e ? parseInt(e, 10) : 0;
  }
  setSpeedLimit(e) {
    this.setSetting("speedLimitKBps", String(Math.max(0, Math.floor(e))));
  }
  // ── Lifecycle ────────────────────────────────────────────
  close() {
    this.db.close();
  }
}
class JY {
  constructor(e) {
    $e(this, "db");
    this.db = e || new KY();
  }
  // ── Feeds ────────────────────────────────────────────────
  getFeeds() {
    return this.db.getFeeds();
  }
  addFeed(e) {
    this.db.addFeed(e);
  }
  removeFeed(e) {
    this.db.removeFeed(e);
  }
  // ── Downloads ────────────────────────────────────────────
  getDownloadedEpisodes() {
    return this.db.getDownloadedEpisodes();
  }
  markAsDownloaded(e) {
    this.db.markAsDownloaded(e);
  }
  isDownloaded(e) {
    return this.db.isDownloaded(e);
  }
  removeDownloadedEpisode(e) {
    this.db.removeDownloadedEpisode(e);
  }
  resetDownloadHistory() {
    this.db.resetDownloadHistory();
  }
  // ── Archive ──────────────────────────────────────────────
  addArchiveEntry(e) {
    this.db.addArchiveEntry(e);
  }
  exportArchiveCSV() {
    return this.db.exportArchiveCSV();
  }
  getArchive() {
    return this.db.getArchive();
  }
  getArchiveStats() {
    return this.db.getArchiveStats();
  }
  // ── Settings ─────────────────────────────────────────────
  getDownloadPath() {
    return this.db.getDownloadPath();
  }
  setDownloadPath(e) {
    this.db.setDownloadPath(e);
  }
  getConcurrency() {
    return this.db.getConcurrency();
  }
  setConcurrency(e) {
    this.db.setConcurrency(e);
  }
  getNamingTemplate() {
    return this.db.getNamingTemplate();
  }
  setNamingTemplate(e) {
    this.db.setNamingTemplate(e);
  }
  getSidecarEnabled() {
    return this.db.getSidecarEnabled();
  }
  setSidecarEnabled(e) {
    this.db.setSidecarEnabled(e);
  }
  getId3Enabled() {
    return this.db.getId3Enabled();
  }
  setId3Enabled(e) {
    this.db.setId3Enabled(e);
  }
  getSpeedLimit() {
    return this.db.getSpeedLimit();
  }
  setSpeedLimit(e) {
    this.db.setSpeedLimit(e);
  }
  // ── OPML ─────────────────────────────────────────────────
  async importOPML(e) {
    const r = new jY({ ignoreAttributes: !1, attributeNamePrefix: "" }).parse(e);
    let i = 0;
    const o = (s) => {
      Array.isArray(s) ? s.forEach((a) => o(a)) : typeof s == "object" && (s.xmlUrl && (this.addFeed({
        url: s.xmlUrl,
        title: s.text || s.title || "Imported Feed",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      }), i++), s.outline && o(s.outline));
    };
    return r.opml && r.opml.body && r.opml.body.outline && o(r.opml.body.outline), i;
  }
  exportOPML() {
    const e = this.getFeeds(), n = new At({ ignoreAttributes: !1, format: !0, suppressEmptyNode: !0 }), r = {
      opml: {
        "@_version": "2.0",
        head: {
          title: "FeedDownloader Export",
          dateCreated: (/* @__PURE__ */ new Date()).toUTCString()
        },
        body: {
          outline: e.map((i) => ({
            "@_text": i.title,
            "@_title": i.title,
            "@_type": "rss",
            "@_xmlUrl": i.url
          }))
        }
      }
    };
    return n.build(r);
  }
}
var Fe = {}, be = {};
be.fromCallback = function(t) {
  return Object.defineProperty(function(...e) {
    if (typeof e[e.length - 1] == "function") t.apply(this, e);
    else
      return new Promise((n, r) => {
        e.push((i, o) => i != null ? r(i) : n(o)), t.apply(this, e);
      });
  }, "name", { value: t.name });
};
be.fromPromise = function(t) {
  return Object.defineProperty(function(...e) {
    const n = e[e.length - 1];
    if (typeof n != "function") return t.apply(this, e);
    e.pop(), t.apply(this, e).then((r) => n(null, r), n);
  }, "name", { value: t.name });
};
var wt = md, QY = process.cwd, mr = null, ZY = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function() {
  return mr || (mr = QY.call(process)), mr;
};
try {
  process.cwd();
} catch {
}
if (typeof process.chdir == "function") {
  var Mc = process.chdir;
  process.chdir = function(t) {
    mr = null, Mc.call(process, t);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, Mc);
}
var eK = tK;
function tK(t) {
  wt.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && e(t), t.lutimes || n(t), t.chown = o(t.chown), t.fchown = o(t.fchown), t.lchown = o(t.lchown), t.chmod = r(t.chmod), t.fchmod = r(t.fchmod), t.lchmod = r(t.lchmod), t.chownSync = s(t.chownSync), t.fchownSync = s(t.fchownSync), t.lchownSync = s(t.lchownSync), t.chmodSync = i(t.chmodSync), t.fchmodSync = i(t.fchmodSync), t.lchmodSync = i(t.lchmodSync), t.stat = a(t.stat), t.fstat = a(t.fstat), t.lstat = a(t.lstat), t.statSync = c(t.statSync), t.fstatSync = c(t.fstatSync), t.lstatSync = c(t.lstatSync), t.chmod && !t.lchmod && (t.lchmod = function(u, p, d) {
    d && process.nextTick(d);
  }, t.lchmodSync = function() {
  }), t.chown && !t.lchown && (t.lchown = function(u, p, d, f) {
    f && process.nextTick(f);
  }, t.lchownSync = function() {
  }), ZY === "win32" && (t.rename = typeof t.rename != "function" ? t.rename : function(u) {
    function p(d, f, m) {
      var h = Date.now(), g = 0;
      u(d, f, function T(v) {
        if (v && (v.code === "EACCES" || v.code === "EPERM" || v.code === "EBUSY") && Date.now() - h < 6e4) {
          setTimeout(function() {
            t.stat(f, function(b, w) {
              b && b.code === "ENOENT" ? u(d, f, T) : m(v);
            });
          }, g), g < 100 && (g += 10);
          return;
        }
        m && m(v);
      });
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(p, u), p;
  }(t.rename)), t.read = typeof t.read != "function" ? t.read : function(u) {
    function p(d, f, m, h, g, T) {
      var v;
      if (T && typeof T == "function") {
        var b = 0;
        v = function(w, S, D) {
          if (w && w.code === "EAGAIN" && b < 10)
            return b++, u.call(t, d, f, m, h, g, v);
          T.apply(this, arguments);
        };
      }
      return u.call(t, d, f, m, h, g, v);
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(p, u), p;
  }(t.read), t.readSync = typeof t.readSync != "function" ? t.readSync : /* @__PURE__ */ function(u) {
    return function(p, d, f, m, h) {
      for (var g = 0; ; )
        try {
          return u.call(t, p, d, f, m, h);
        } catch (T) {
          if (T.code === "EAGAIN" && g < 10) {
            g++;
            continue;
          }
          throw T;
        }
    };
  }(t.readSync);
  function e(u) {
    u.lchmod = function(p, d, f) {
      u.open(
        p,
        wt.O_WRONLY | wt.O_SYMLINK,
        d,
        function(m, h) {
          if (m) {
            f && f(m);
            return;
          }
          u.fchmod(h, d, function(g) {
            u.close(h, function(T) {
              f && f(g || T);
            });
          });
        }
      );
    }, u.lchmodSync = function(p, d) {
      var f = u.openSync(p, wt.O_WRONLY | wt.O_SYMLINK, d), m = !0, h;
      try {
        h = u.fchmodSync(f, d), m = !1;
      } finally {
        if (m)
          try {
            u.closeSync(f);
          } catch {
          }
        else
          u.closeSync(f);
      }
      return h;
    };
  }
  function n(u) {
    wt.hasOwnProperty("O_SYMLINK") && u.futimes ? (u.lutimes = function(p, d, f, m) {
      u.open(p, wt.O_SYMLINK, function(h, g) {
        if (h) {
          m && m(h);
          return;
        }
        u.futimes(g, d, f, function(T) {
          u.close(g, function(v) {
            m && m(T || v);
          });
        });
      });
    }, u.lutimesSync = function(p, d, f) {
      var m = u.openSync(p, wt.O_SYMLINK), h, g = !0;
      try {
        h = u.futimesSync(m, d, f), g = !1;
      } finally {
        if (g)
          try {
            u.closeSync(m);
          } catch {
          }
        else
          u.closeSync(m);
      }
      return h;
    }) : u.futimes && (u.lutimes = function(p, d, f, m) {
      m && process.nextTick(m);
    }, u.lutimesSync = function() {
    });
  }
  function r(u) {
    return u && function(p, d, f) {
      return u.call(t, p, d, function(m) {
        l(m) && (m = null), f && f.apply(this, arguments);
      });
    };
  }
  function i(u) {
    return u && function(p, d) {
      try {
        return u.call(t, p, d);
      } catch (f) {
        if (!l(f)) throw f;
      }
    };
  }
  function o(u) {
    return u && function(p, d, f, m) {
      return u.call(t, p, d, f, function(h) {
        l(h) && (h = null), m && m.apply(this, arguments);
      });
    };
  }
  function s(u) {
    return u && function(p, d, f) {
      try {
        return u.call(t, p, d, f);
      } catch (m) {
        if (!l(m)) throw m;
      }
    };
  }
  function a(u) {
    return u && function(p, d, f) {
      typeof d == "function" && (f = d, d = null);
      function m(h, g) {
        g && (g.uid < 0 && (g.uid += 4294967296), g.gid < 0 && (g.gid += 4294967296)), f && f.apply(this, arguments);
      }
      return d ? u.call(t, p, d, m) : u.call(t, p, m);
    };
  }
  function c(u) {
    return u && function(p, d) {
      var f = d ? u.call(t, p, d) : u.call(t, p);
      return f && (f.uid < 0 && (f.uid += 4294967296), f.gid < 0 && (f.gid += 4294967296)), f;
    };
  }
  function l(u) {
    if (!u || u.code === "ENOSYS")
      return !0;
    var p = !process.getuid || process.getuid() !== 0;
    return !!(p && (u.code === "EINVAL" || u.code === "EPERM"));
  }
}
var Uc = Re.Stream, nK = rK;
function rK(t) {
  return {
    ReadStream: e,
    WriteStream: n
  };
  function e(r, i) {
    if (!(this instanceof e)) return new e(r, i);
    Uc.call(this);
    var o = this;
    this.path = r, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 64 * 1024, i = i || {};
    for (var s = Object.keys(i), a = 0, c = s.length; a < c; a++) {
      var l = s[a];
      this[l] = i[l];
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
        o._read();
      });
      return;
    }
    t.open(this.path, this.flags, this.mode, function(u, p) {
      if (u) {
        o.emit("error", u), o.readable = !1;
        return;
      }
      o.fd = p, o.emit("open", p), o._read();
    });
  }
  function n(r, i) {
    if (!(this instanceof n)) return new n(r, i);
    Uc.call(this), this.path = r, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, i = i || {};
    for (var o = Object.keys(i), s = 0, a = o.length; s < a; s++) {
      var c = o[s];
      this[c] = i[c];
    }
    if (this.start !== void 0) {
      if (typeof this.start != "number")
        throw TypeError("start must be a Number");
      if (this.start < 0)
        throw new Error("start must be >= zero");
      this.pos = this.start;
    }
    this.busy = !1, this._queue = [], this.fd === null && (this._open = t.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush());
  }
}
var iK = sK, oK = Object.getPrototypeOf || function(t) {
  return t.__proto__;
};
function sK(t) {
  if (t === null || typeof t != "object")
    return t;
  if (t instanceof Object)
    var e = { __proto__: oK(t) };
  else
    var e = /* @__PURE__ */ Object.create(null);
  return Object.getOwnPropertyNames(t).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
  }), e;
}
var ce = Mn, aK = eK, cK = nK, uK = iK, ir = Nt, Se, Dr;
typeof Symbol == "function" && typeof Symbol.for == "function" ? (Se = Symbol.for("graceful-fs.queue"), Dr = Symbol.for("graceful-fs.previous")) : (Se = "___graceful-fs.queue", Dr = "___graceful-fs.previous");
function lK() {
}
function Zl(t, e) {
  Object.defineProperty(t, Se, {
    get: function() {
      return e;
    }
  });
}
var Vt = lK;
ir.debuglog ? Vt = ir.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (Vt = function() {
  var t = ir.format.apply(ir, arguments);
  t = "GFS4: " + t.split(/\n/).join(`
GFS4: `), console.error(t);
});
if (!ce[Se]) {
  var pK = z[Se] || [];
  Zl(ce, pK), ce.close = function(t) {
    function e(n, r) {
      return t.call(ce, n, function(i) {
        i || jc(), typeof r == "function" && r.apply(this, arguments);
      });
    }
    return Object.defineProperty(e, Dr, {
      value: t
    }), e;
  }(ce.close), ce.closeSync = function(t) {
    function e(n) {
      t.apply(ce, arguments), jc();
    }
    return Object.defineProperty(e, Dr, {
      value: t
    }), e;
  }(ce.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    Vt(ce[Se]), Ou.equal(ce[Se].length, 0);
  });
}
z[Se] || Zl(z, ce[Se]);
var gn = Rs(uK(ce));
process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !ce.__patched && (gn = Rs(ce), ce.__patched = !0);
function Rs(t) {
  aK(t), t.gracefulify = Rs, t.createReadStream = S, t.createWriteStream = D;
  var e = t.readFile;
  t.readFile = n;
  function n(y, O, C) {
    return typeof O == "function" && (C = O, O = null), P(y, O, C);
    function P(M, j, $, q) {
      return e(M, j, function(F) {
        F && (F.code === "EMFILE" || F.code === "ENFILE") ? Jt([P, [M, j, $], F, q || Date.now(), Date.now()]) : typeof $ == "function" && $.apply(this, arguments);
      });
    }
  }
  var r = t.writeFile;
  t.writeFile = i;
  function i(y, O, C, P) {
    return typeof C == "function" && (P = C, C = null), M(y, O, C, P);
    function M(j, $, q, F, J) {
      return r(j, $, q, function(K) {
        K && (K.code === "EMFILE" || K.code === "ENFILE") ? Jt([M, [j, $, q, F], K, J || Date.now(), Date.now()]) : typeof F == "function" && F.apply(this, arguments);
      });
    }
  }
  var o = t.appendFile;
  o && (t.appendFile = s);
  function s(y, O, C, P) {
    return typeof C == "function" && (P = C, C = null), M(y, O, C, P);
    function M(j, $, q, F, J) {
      return o(j, $, q, function(K) {
        K && (K.code === "EMFILE" || K.code === "ENFILE") ? Jt([M, [j, $, q, F], K, J || Date.now(), Date.now()]) : typeof F == "function" && F.apply(this, arguments);
      });
    }
  }
  var a = t.copyFile;
  a && (t.copyFile = c);
  function c(y, O, C, P) {
    return typeof C == "function" && (P = C, C = 0), M(y, O, C, P);
    function M(j, $, q, F, J) {
      return a(j, $, q, function(K) {
        K && (K.code === "EMFILE" || K.code === "ENFILE") ? Jt([M, [j, $, q, F], K, J || Date.now(), Date.now()]) : typeof F == "function" && F.apply(this, arguments);
      });
    }
  }
  var l = t.readdir;
  t.readdir = p;
  var u = /^v[0-5]\./;
  function p(y, O, C) {
    typeof O == "function" && (C = O, O = null);
    var P = u.test(process.version) ? function($, q, F, J) {
      return l($, M(
        $,
        q,
        F,
        J
      ));
    } : function($, q, F, J) {
      return l($, q, M(
        $,
        q,
        F,
        J
      ));
    };
    return P(y, O, C);
    function M(j, $, q, F) {
      return function(J, K) {
        J && (J.code === "EMFILE" || J.code === "ENFILE") ? Jt([
          P,
          [j, $, q],
          J,
          F || Date.now(),
          Date.now()
        ]) : (K && K.sort && K.sort(), typeof q == "function" && q.call(this, J, K));
      };
    }
  }
  if (process.version.substr(0, 4) === "v0.8") {
    var d = cK(t);
    T = d.ReadStream, b = d.WriteStream;
  }
  var f = t.ReadStream;
  f && (T.prototype = Object.create(f.prototype), T.prototype.open = v);
  var m = t.WriteStream;
  m && (b.prototype = Object.create(m.prototype), b.prototype.open = w), Object.defineProperty(t, "ReadStream", {
    get: function() {
      return T;
    },
    set: function(y) {
      T = y;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(t, "WriteStream", {
    get: function() {
      return b;
    },
    set: function(y) {
      b = y;
    },
    enumerable: !0,
    configurable: !0
  });
  var h = T;
  Object.defineProperty(t, "FileReadStream", {
    get: function() {
      return h;
    },
    set: function(y) {
      h = y;
    },
    enumerable: !0,
    configurable: !0
  });
  var g = b;
  Object.defineProperty(t, "FileWriteStream", {
    get: function() {
      return g;
    },
    set: function(y) {
      g = y;
    },
    enumerable: !0,
    configurable: !0
  });
  function T(y, O) {
    return this instanceof T ? (f.apply(this, arguments), this) : T.apply(Object.create(T.prototype), arguments);
  }
  function v() {
    var y = this;
    N(y.path, y.flags, y.mode, function(O, C) {
      O ? (y.autoClose && y.destroy(), y.emit("error", O)) : (y.fd = C, y.emit("open", C), y.read());
    });
  }
  function b(y, O) {
    return this instanceof b ? (m.apply(this, arguments), this) : b.apply(Object.create(b.prototype), arguments);
  }
  function w() {
    var y = this;
    N(y.path, y.flags, y.mode, function(O, C) {
      O ? (y.destroy(), y.emit("error", O)) : (y.fd = C, y.emit("open", C));
    });
  }
  function S(y, O) {
    return new t.ReadStream(y, O);
  }
  function D(y, O) {
    return new t.WriteStream(y, O);
  }
  var L = t.open;
  t.open = N;
  function N(y, O, C, P) {
    return typeof C == "function" && (P = C, C = null), M(y, O, C, P);
    function M(j, $, q, F, J) {
      return L(j, $, q, function(K, V) {
        K && (K.code === "EMFILE" || K.code === "ENFILE") ? Jt([M, [j, $, q, F], K, J || Date.now(), Date.now()]) : typeof F == "function" && F.apply(this, arguments);
      });
    }
  }
  return t;
}
function Jt(t) {
  Vt("ENQUEUE", t[0].name, t[1]), ce[Se].push(t), Ls();
}
var or;
function jc() {
  for (var t = Date.now(), e = 0; e < ce[Se].length; ++e)
    ce[Se][e].length > 2 && (ce[Se][e][3] = t, ce[Se][e][4] = t);
  Ls();
}
function Ls() {
  if (clearTimeout(or), or = void 0, ce[Se].length !== 0) {
    var t = ce[Se].shift(), e = t[0], n = t[1], r = t[2], i = t[3], o = t[4];
    if (i === void 0)
      Vt("RETRY", e.name, n), e.apply(null, n);
    else if (Date.now() - i >= 6e4) {
      Vt("TIMEOUT", e.name, n);
      var s = n.pop();
      typeof s == "function" && s.call(null, r);
    } else {
      var a = Date.now() - o, c = Math.max(o - i, 1), l = Math.min(c * 1.2, 100);
      a >= l ? (Vt("RETRY", e.name, n), e.apply(null, n.concat([i]))) : ce[Se].push(t);
    }
    or === void 0 && (or = setTimeout(Ls, 0));
  }
}
(function(t) {
  const e = be.fromCallback, n = gn, r = [
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
  ].filter((i) => typeof n[i] == "function");
  Object.assign(t, n), r.forEach((i) => {
    t[i] = e(n[i]);
  }), t.exists = function(i, o) {
    return typeof o == "function" ? n.exists(i, o) : new Promise((s) => n.exists(i, s));
  }, t.read = function(i, o, s, a, c, l) {
    return typeof l == "function" ? n.read(i, o, s, a, c, l) : new Promise((u, p) => {
      n.read(i, o, s, a, c, (d, f, m) => {
        if (d) return p(d);
        u({ bytesRead: f, buffer: m });
      });
    });
  }, t.write = function(i, o, ...s) {
    return typeof s[s.length - 1] == "function" ? n.write(i, o, ...s) : new Promise((a, c) => {
      n.write(i, o, ...s, (l, u, p) => {
        if (l) return c(l);
        a({ bytesWritten: u, buffer: p });
      });
    });
  }, t.readv = function(i, o, ...s) {
    return typeof s[s.length - 1] == "function" ? n.readv(i, o, ...s) : new Promise((a, c) => {
      n.readv(i, o, ...s, (l, u, p) => {
        if (l) return c(l);
        a({ bytesRead: u, buffers: p });
      });
    });
  }, t.writev = function(i, o, ...s) {
    return typeof s[s.length - 1] == "function" ? n.writev(i, o, ...s) : new Promise((a, c) => {
      n.writev(i, o, ...s, (l, u, p) => {
        if (l) return c(l);
        a({ bytesWritten: u, buffers: p });
      });
    });
  }, typeof n.realpath.native == "function" ? t.realpath.native = e(n.realpath.native) : process.emitWarning(
    "fs.realpath.native is not a function. Is fs being monkey-patched?",
    "Warning",
    "fs-extra-WARN0003"
  );
})(Fe);
var Ps = {}, ep = {};
const dK = Y;
ep.checkPath = function(e) {
  if (process.platform === "win32" && /[<>:"|?*]/.test(e.replace(dK.parse(e).root, ""))) {
    const r = new Error(`Path contains invalid characters: ${e}`);
    throw r.code = "EINVAL", r;
  }
};
const tp = Fe, { checkPath: np } = ep, rp = (t) => {
  const e = { mode: 511 };
  return typeof t == "number" ? t : { ...e, ...t }.mode;
};
Ps.makeDir = async (t, e) => (np(t), tp.mkdir(t, {
  mode: rp(e),
  recursive: !0
}));
Ps.makeDirSync = (t, e) => (np(t), tp.mkdirSync(t, {
  mode: rp(e),
  recursive: !0
}));
const fK = be.fromPromise, { makeDir: mK, makeDirSync: go } = Ps, bo = fK(mK);
var st = {
  mkdirs: bo,
  mkdirsSync: go,
  // alias
  mkdirp: bo,
  mkdirpSync: go,
  ensureDir: bo,
  ensureDirSync: go
};
const hK = be.fromPromise, ip = Fe;
function gK(t) {
  return ip.access(t).then(() => !0).catch(() => !1);
}
var Wt = {
  pathExists: hK(gK),
  pathExistsSync: ip.existsSync
};
const rn = Fe, bK = be.fromPromise;
async function yK(t, e, n) {
  const r = await rn.open(t, "r+");
  let i = null;
  try {
    await rn.futimes(r, e, n);
  } finally {
    try {
      await rn.close(r);
    } catch (o) {
      i = o;
    }
  }
  if (i)
    throw i;
}
function vK(t, e, n) {
  const r = rn.openSync(t, "r+");
  return rn.futimesSync(r, e, n), rn.closeSync(r);
}
var op = {
  utimesMillis: bK(yK),
  utimesMillisSync: vK
};
const fn = Fe, xe = Y, $c = be.fromPromise;
function xK(t, e, n) {
  const r = n.dereference ? (i) => fn.stat(i, { bigint: !0 }) : (i) => fn.lstat(i, { bigint: !0 });
  return Promise.all([
    r(t),
    r(e).catch((i) => {
      if (i.code === "ENOENT") return null;
      throw i;
    })
  ]).then(([i, o]) => ({ srcStat: i, destStat: o }));
}
function wK(t, e, n) {
  let r;
  const i = n.dereference ? (s) => fn.statSync(s, { bigint: !0 }) : (s) => fn.lstatSync(s, { bigint: !0 }), o = i(t);
  try {
    r = i(e);
  } catch (s) {
    if (s.code === "ENOENT") return { srcStat: o, destStat: null };
    throw s;
  }
  return { srcStat: o, destStat: r };
}
async function EK(t, e, n, r) {
  const { srcStat: i, destStat: o } = await xK(t, e, r);
  if (o) {
    if (Wn(i, o)) {
      const s = xe.basename(t), a = xe.basename(e);
      if (n === "move" && s !== a && s.toLowerCase() === a.toLowerCase())
        return { srcStat: i, destStat: o, isChangingCase: !0 };
      throw new Error("Source and destination must not be the same.");
    }
    if (i.isDirectory() && !o.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${e}' with directory '${t}'.`);
    if (!i.isDirectory() && o.isDirectory())
      throw new Error(`Cannot overwrite directory '${e}' with non-directory '${t}'.`);
  }
  if (i.isDirectory() && Fs(t, e))
    throw new Error(Jr(t, e, n));
  return { srcStat: i, destStat: o };
}
function TK(t, e, n, r) {
  const { srcStat: i, destStat: o } = wK(t, e, r);
  if (o) {
    if (Wn(i, o)) {
      const s = xe.basename(t), a = xe.basename(e);
      if (n === "move" && s !== a && s.toLowerCase() === a.toLowerCase())
        return { srcStat: i, destStat: o, isChangingCase: !0 };
      throw new Error("Source and destination must not be the same.");
    }
    if (i.isDirectory() && !o.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${e}' with directory '${t}'.`);
    if (!i.isDirectory() && o.isDirectory())
      throw new Error(`Cannot overwrite directory '${e}' with non-directory '${t}'.`);
  }
  if (i.isDirectory() && Fs(t, e))
    throw new Error(Jr(t, e, n));
  return { srcStat: i, destStat: o };
}
async function sp(t, e, n, r) {
  const i = xe.resolve(xe.dirname(t)), o = xe.resolve(xe.dirname(n));
  if (o === i || o === xe.parse(o).root) return;
  let s;
  try {
    s = await fn.stat(o, { bigint: !0 });
  } catch (a) {
    if (a.code === "ENOENT") return;
    throw a;
  }
  if (Wn(e, s))
    throw new Error(Jr(t, n, r));
  return sp(t, e, o, r);
}
function ap(t, e, n, r) {
  const i = xe.resolve(xe.dirname(t)), o = xe.resolve(xe.dirname(n));
  if (o === i || o === xe.parse(o).root) return;
  let s;
  try {
    s = fn.statSync(o, { bigint: !0 });
  } catch (a) {
    if (a.code === "ENOENT") return;
    throw a;
  }
  if (Wn(e, s))
    throw new Error(Jr(t, n, r));
  return ap(t, e, o, r);
}
function Wn(t, e) {
  return e.ino !== void 0 && e.dev !== void 0 && e.ino === t.ino && e.dev === t.dev;
}
function Fs(t, e) {
  const n = xe.resolve(t).split(xe.sep).filter((i) => i), r = xe.resolve(e).split(xe.sep).filter((i) => i);
  return n.every((i, o) => r[o] === i);
}
function Jr(t, e, n) {
  return `Cannot ${n} '${t}' to a subdirectory of itself, '${e}'.`;
}
var bn = {
  // checkPaths
  checkPaths: $c(EK),
  checkPathsSync: TK,
  // checkParent
  checkParentPaths: $c(sp),
  checkParentPathsSync: ap,
  // Misc
  isSrcSubdir: Fs,
  areIdentical: Wn
};
async function SK(t, e) {
  const n = [];
  for await (const r of t)
    n.push(
      e(r).then(
        () => null,
        (i) => i ?? new Error("unknown error")
      )
    );
  await Promise.all(
    n.map(
      (r) => r.then((i) => {
        if (i !== null) throw i;
      })
    )
  );
}
var _K = {
  asyncIteratorConcurrentProcess: SK
};
const Ae = Fe, In = Y, { mkdirs: NK } = st, { pathExists: AK } = Wt, { utimesMillis: OK } = op, Rn = bn, { asyncIteratorConcurrentProcess: DK } = _K;
async function CK(t, e, n = {}) {
  typeof n == "function" && (n = { filter: n }), n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0001"
  );
  const { srcStat: r, destStat: i } = await Rn.checkPaths(t, e, "copy", n);
  if (await Rn.checkParentPaths(t, r, e, "copy"), !await cp(t, e, n)) return;
  const s = In.dirname(e);
  await AK(s) || await NK(s), await up(i, t, e, n);
}
async function cp(t, e, n) {
  return n.filter ? n.filter(t, e) : !0;
}
async function up(t, e, n, r) {
  const o = await (r.dereference ? Ae.stat : Ae.lstat)(e);
  if (o.isDirectory()) return PK(o, t, e, n, r);
  if (o.isFile() || o.isCharacterDevice() || o.isBlockDevice()) return IK(o, t, e, n, r);
  if (o.isSymbolicLink()) return FK(t, e, n, r);
  throw o.isSocket() ? new Error(`Cannot copy a socket file: ${e}`) : o.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${e}`) : new Error(`Unknown file: ${e}`);
}
async function IK(t, e, n, r, i) {
  if (!e) return Vc(t, n, r, i);
  if (i.overwrite)
    return await Ae.unlink(r), Vc(t, n, r, i);
  if (i.errorOnExist)
    throw new Error(`'${r}' already exists`);
}
async function Vc(t, e, n, r) {
  if (await Ae.copyFile(e, n), r.preserveTimestamps) {
    RK(t.mode) && await LK(n, t.mode);
    const i = await Ae.stat(e);
    await OK(n, i.atime, i.mtime);
  }
  return Ae.chmod(n, t.mode);
}
function RK(t) {
  return (t & 128) === 0;
}
function LK(t, e) {
  return Ae.chmod(t, e | 128);
}
async function PK(t, e, n, r, i) {
  e || await Ae.mkdir(r), await DK(await Ae.opendir(n), async (o) => {
    const s = In.join(n, o.name), a = In.join(r, o.name);
    if (await cp(s, a, i)) {
      const { destStat: l } = await Rn.checkPaths(s, a, "copy", i);
      await up(l, s, a, i);
    }
  }), e || await Ae.chmod(r, t.mode);
}
async function FK(t, e, n, r) {
  let i = await Ae.readlink(e);
  if (r.dereference && (i = In.resolve(process.cwd(), i)), !t)
    return Ae.symlink(i, n);
  let o = null;
  try {
    o = await Ae.readlink(n);
  } catch (s) {
    if (s.code === "EINVAL" || s.code === "UNKNOWN") return Ae.symlink(i, n);
    throw s;
  }
  if (r.dereference && (o = In.resolve(process.cwd(), o)), i !== o) {
    if (Rn.isSrcSubdir(i, o))
      throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${o}'.`);
    if (Rn.isSrcSubdir(o, i))
      throw new Error(`Cannot overwrite '${o}' with '${i}'.`);
  }
  return await Ae.unlink(n), Ae.symlink(i, n);
}
var kK = CK;
const Le = gn, Ln = Y, qK = st.mkdirsSync, BK = op.utimesMillisSync, Pn = bn;
function MK(t, e, n) {
  typeof n == "function" && (n = { filter: n }), n = n || {}, n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0002"
  );
  const { srcStat: r, destStat: i } = Pn.checkPathsSync(t, e, "copy", n);
  if (Pn.checkParentPathsSync(t, r, e, "copy"), n.filter && !n.filter(t, e)) return;
  const o = Ln.dirname(e);
  return Le.existsSync(o) || qK(o), lp(i, t, e, n);
}
function lp(t, e, n, r) {
  const o = (r.dereference ? Le.statSync : Le.lstatSync)(e);
  if (o.isDirectory()) return XK(o, t, e, n, r);
  if (o.isFile() || o.isCharacterDevice() || o.isBlockDevice()) return UK(o, t, e, n, r);
  if (o.isSymbolicLink()) return YK(t, e, n, r);
  throw o.isSocket() ? new Error(`Cannot copy a socket file: ${e}`) : o.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${e}`) : new Error(`Unknown file: ${e}`);
}
function UK(t, e, n, r, i) {
  return e ? jK(t, n, r, i) : pp(t, n, r, i);
}
function jK(t, e, n, r) {
  if (r.overwrite)
    return Le.unlinkSync(n), pp(t, e, n, r);
  if (r.errorOnExist)
    throw new Error(`'${n}' already exists`);
}
function pp(t, e, n, r) {
  return Le.copyFileSync(e, n), r.preserveTimestamps && $K(t.mode, e, n), ks(n, t.mode);
}
function $K(t, e, n) {
  return VK(t) && zK(n, t), HK(e, n);
}
function VK(t) {
  return (t & 128) === 0;
}
function zK(t, e) {
  return ks(t, e | 128);
}
function ks(t, e) {
  return Le.chmodSync(t, e);
}
function HK(t, e) {
  const n = Le.statSync(t);
  return BK(e, n.atime, n.mtime);
}
function XK(t, e, n, r, i) {
  return e ? dp(n, r, i) : GK(t.mode, n, r, i);
}
function GK(t, e, n, r) {
  return Le.mkdirSync(n), dp(e, n, r), ks(n, t);
}
function dp(t, e, n) {
  const r = Le.opendirSync(t);
  try {
    let i;
    for (; (i = r.readSync()) !== null; )
      WK(i.name, t, e, n);
  } finally {
    r.closeSync();
  }
}
function WK(t, e, n, r) {
  const i = Ln.join(e, t), o = Ln.join(n, t);
  if (r.filter && !r.filter(i, o)) return;
  const { destStat: s } = Pn.checkPathsSync(i, o, "copy", r);
  return lp(s, i, o, r);
}
function YK(t, e, n, r) {
  let i = Le.readlinkSync(e);
  if (r.dereference && (i = Ln.resolve(process.cwd(), i)), t) {
    let o;
    try {
      o = Le.readlinkSync(n);
    } catch (s) {
      if (s.code === "EINVAL" || s.code === "UNKNOWN") return Le.symlinkSync(i, n);
      throw s;
    }
    if (r.dereference && (o = Ln.resolve(process.cwd(), o)), i !== o) {
      if (Pn.isSrcSubdir(i, o))
        throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${o}'.`);
      if (Pn.isSrcSubdir(o, i))
        throw new Error(`Cannot overwrite '${o}' with '${i}'.`);
    }
    return KK(i, n);
  } else
    return Le.symlinkSync(i, n);
}
function KK(t, e) {
  return Le.unlinkSync(e), Le.symlinkSync(t, e);
}
var JK = MK;
const QK = be.fromPromise;
var qs = {
  copy: QK(kK),
  copySync: JK
};
const fp = gn, ZK = be.fromCallback;
function eJ(t, e) {
  fp.rm(t, { recursive: !0, force: !0 }, e);
}
function tJ(t) {
  fp.rmSync(t, { recursive: !0, force: !0 });
}
var Qr = {
  remove: ZK(eJ),
  removeSync: tJ
};
const nJ = be.fromPromise, mp = Fe, hp = Y, gp = st, bp = Qr, zc = nJ(async function(e) {
  let n;
  try {
    n = await mp.readdir(e);
  } catch {
    return gp.mkdirs(e);
  }
  return Promise.all(n.map((r) => bp.remove(hp.join(e, r))));
});
function Hc(t) {
  let e;
  try {
    e = mp.readdirSync(t);
  } catch {
    return gp.mkdirsSync(t);
  }
  e.forEach((n) => {
    n = hp.join(t, n), bp.removeSync(n);
  });
}
var rJ = {
  emptyDirSync: Hc,
  emptydirSync: Hc,
  emptyDir: zc,
  emptydir: zc
};
const iJ = be.fromPromise, yp = Y, ht = Fe, vp = st;
async function oJ(t) {
  let e;
  try {
    e = await ht.stat(t);
  } catch {
  }
  if (e && e.isFile()) return;
  const n = yp.dirname(t);
  let r = null;
  try {
    r = await ht.stat(n);
  } catch (i) {
    if (i.code === "ENOENT") {
      await vp.mkdirs(n), await ht.writeFile(t, "");
      return;
    } else
      throw i;
  }
  r.isDirectory() ? await ht.writeFile(t, "") : await ht.readdir(n);
}
function sJ(t) {
  let e;
  try {
    e = ht.statSync(t);
  } catch {
  }
  if (e && e.isFile()) return;
  const n = yp.dirname(t);
  try {
    ht.statSync(n).isDirectory() || ht.readdirSync(n);
  } catch (r) {
    if (r && r.code === "ENOENT") vp.mkdirsSync(n);
    else throw r;
  }
  ht.writeFileSync(t, "");
}
var aJ = {
  createFile: iJ(oJ),
  createFileSync: sJ
};
const cJ = be.fromPromise, xp = Y, Et = Fe, wp = st, { pathExists: uJ } = Wt, { areIdentical: Ep } = bn;
async function lJ(t, e) {
  let n;
  try {
    n = await Et.lstat(e);
  } catch {
  }
  let r;
  try {
    r = await Et.lstat(t);
  } catch (s) {
    throw s.message = s.message.replace("lstat", "ensureLink"), s;
  }
  if (n && Ep(r, n)) return;
  const i = xp.dirname(e);
  await uJ(i) || await wp.mkdirs(i), await Et.link(t, e);
}
function pJ(t, e) {
  let n;
  try {
    n = Et.lstatSync(e);
  } catch {
  }
  try {
    const o = Et.lstatSync(t);
    if (n && Ep(o, n)) return;
  } catch (o) {
    throw o.message = o.message.replace("lstat", "ensureLink"), o;
  }
  const r = xp.dirname(e);
  return Et.existsSync(r) || wp.mkdirsSync(r), Et.linkSync(t, e);
}
var dJ = {
  createLink: cJ(lJ),
  createLinkSync: pJ
};
const St = Y, Nn = Fe, { pathExists: fJ } = Wt, mJ = be.fromPromise;
async function hJ(t, e) {
  if (St.isAbsolute(t)) {
    try {
      await Nn.lstat(t);
    } catch (o) {
      throw o.message = o.message.replace("lstat", "ensureSymlink"), o;
    }
    return {
      toCwd: t,
      toDst: t
    };
  }
  const n = St.dirname(e), r = St.join(n, t);
  if (await fJ(r))
    return {
      toCwd: r,
      toDst: t
    };
  try {
    await Nn.lstat(t);
  } catch (o) {
    throw o.message = o.message.replace("lstat", "ensureSymlink"), o;
  }
  return {
    toCwd: t,
    toDst: St.relative(n, t)
  };
}
function gJ(t, e) {
  if (St.isAbsolute(t)) {
    if (!Nn.existsSync(t)) throw new Error("absolute srcpath does not exist");
    return {
      toCwd: t,
      toDst: t
    };
  }
  const n = St.dirname(e), r = St.join(n, t);
  if (Nn.existsSync(r))
    return {
      toCwd: r,
      toDst: t
    };
  if (!Nn.existsSync(t)) throw new Error("relative srcpath does not exist");
  return {
    toCwd: t,
    toDst: St.relative(n, t)
  };
}
var bJ = {
  symlinkPaths: mJ(hJ),
  symlinkPathsSync: gJ
};
const Tp = Fe, yJ = be.fromPromise;
async function vJ(t, e) {
  if (e) return e;
  let n;
  try {
    n = await Tp.lstat(t);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
function xJ(t, e) {
  if (e) return e;
  let n;
  try {
    n = Tp.lstatSync(t);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
var wJ = {
  symlinkType: yJ(vJ),
  symlinkTypeSync: xJ
};
const EJ = be.fromPromise, Sp = Y, it = Fe, { mkdirs: TJ, mkdirsSync: SJ } = st, { symlinkPaths: _J, symlinkPathsSync: NJ } = bJ, { symlinkType: AJ, symlinkTypeSync: OJ } = wJ, { pathExists: DJ } = Wt, { areIdentical: _p } = bn;
async function CJ(t, e, n) {
  let r;
  try {
    r = await it.lstat(e);
  } catch {
  }
  if (r && r.isSymbolicLink()) {
    const [a, c] = await Promise.all([
      it.stat(t),
      it.stat(e)
    ]);
    if (_p(a, c)) return;
  }
  const i = await _J(t, e);
  t = i.toDst;
  const o = await AJ(i.toCwd, n), s = Sp.dirname(e);
  return await DJ(s) || await TJ(s), it.symlink(t, e, o);
}
function IJ(t, e, n) {
  let r;
  try {
    r = it.lstatSync(e);
  } catch {
  }
  if (r && r.isSymbolicLink()) {
    const a = it.statSync(t), c = it.statSync(e);
    if (_p(a, c)) return;
  }
  const i = NJ(t, e);
  t = i.toDst, n = OJ(i.toCwd, n);
  const o = Sp.dirname(e);
  return it.existsSync(o) || SJ(o), it.symlinkSync(t, e, n);
}
var RJ = {
  createSymlink: EJ(CJ),
  createSymlinkSync: IJ
};
const { createFile: Xc, createFileSync: Gc } = aJ, { createLink: Wc, createLinkSync: Yc } = dJ, { createSymlink: Kc, createSymlinkSync: Jc } = RJ;
var LJ = {
  // file
  createFile: Xc,
  createFileSync: Gc,
  ensureFile: Xc,
  ensureFileSync: Gc,
  // link
  createLink: Wc,
  createLinkSync: Yc,
  ensureLink: Wc,
  ensureLinkSync: Yc,
  // symlink
  createSymlink: Kc,
  createSymlinkSync: Jc,
  ensureSymlink: Kc,
  ensureSymlinkSync: Jc
};
function PJ(t, { EOL: e = `
`, finalEOL: n = !0, replacer: r = null, spaces: i } = {}) {
  const o = n ? e : "";
  return JSON.stringify(t, r, i).replace(/\n/g, e) + o;
}
function FJ(t) {
  return Buffer.isBuffer(t) && (t = t.toString("utf8")), t.replace(/^\uFEFF/, "");
}
var Bs = { stringify: PJ, stripBom: FJ };
let mn;
try {
  mn = gn;
} catch {
  mn = Mn;
}
const Zr = be, { stringify: Np, stripBom: Ap } = Bs;
async function kJ(t, e = {}) {
  typeof e == "string" && (e = { encoding: e });
  const n = e.fs || mn, r = "throws" in e ? e.throws : !0;
  let i = await Zr.fromCallback(n.readFile)(t, e);
  i = Ap(i);
  let o;
  try {
    o = JSON.parse(i, e ? e.reviver : null);
  } catch (s) {
    if (r)
      throw s.message = `${t}: ${s.message}`, s;
    return null;
  }
  return o;
}
const qJ = Zr.fromPromise(kJ);
function BJ(t, e = {}) {
  typeof e == "string" && (e = { encoding: e });
  const n = e.fs || mn, r = "throws" in e ? e.throws : !0;
  try {
    let i = n.readFileSync(t, e);
    return i = Ap(i), JSON.parse(i, e.reviver);
  } catch (i) {
    if (r)
      throw i.message = `${t}: ${i.message}`, i;
    return null;
  }
}
async function MJ(t, e, n = {}) {
  const r = n.fs || mn, i = Np(e, n);
  await Zr.fromCallback(r.writeFile)(t, i, n);
}
const UJ = Zr.fromPromise(MJ);
function jJ(t, e, n = {}) {
  const r = n.fs || mn, i = Np(e, n);
  return r.writeFileSync(t, i, n);
}
var $J = {
  readFile: qJ,
  readFileSync: BJ,
  writeFile: UJ,
  writeFileSync: jJ
};
const sr = $J;
var VJ = {
  // jsonfile exports
  readJson: sr.readFile,
  readJsonSync: sr.readFileSync,
  writeJson: sr.writeFile,
  writeJsonSync: sr.writeFileSync
};
const zJ = be.fromPromise, jo = Fe, Op = Y, Dp = st, HJ = Wt.pathExists;
async function XJ(t, e, n = "utf-8") {
  const r = Op.dirname(t);
  return await HJ(r) || await Dp.mkdirs(r), jo.writeFile(t, e, n);
}
function GJ(t, ...e) {
  const n = Op.dirname(t);
  jo.existsSync(n) || Dp.mkdirsSync(n), jo.writeFileSync(t, ...e);
}
var Ms = {
  outputFile: zJ(XJ),
  outputFileSync: GJ
};
const { stringify: WJ } = Bs, { outputFile: YJ } = Ms;
async function KJ(t, e, n = {}) {
  const r = WJ(e, n);
  await YJ(t, r, n);
}
var JJ = KJ;
const { stringify: QJ } = Bs, { outputFileSync: ZJ } = Ms;
function eQ(t, e, n) {
  const r = QJ(e, n);
  ZJ(t, r, n);
}
var tQ = eQ;
const nQ = be.fromPromise, Pe = VJ;
Pe.outputJson = nQ(JJ);
Pe.outputJsonSync = tQ;
Pe.outputJSON = Pe.outputJson;
Pe.outputJSONSync = Pe.outputJsonSync;
Pe.writeJSON = Pe.writeJson;
Pe.writeJSONSync = Pe.writeJsonSync;
Pe.readJSON = Pe.readJson;
Pe.readJSONSync = Pe.readJsonSync;
var rQ = Pe;
const iQ = Fe, Qc = Y, { copy: oQ } = qs, { remove: Cp } = Qr, { mkdirp: sQ } = st, { pathExists: aQ } = Wt, Zc = bn;
async function cQ(t, e, n = {}) {
  const r = n.overwrite || n.clobber || !1, { srcStat: i, isChangingCase: o = !1 } = await Zc.checkPaths(t, e, "move", n);
  await Zc.checkParentPaths(t, i, e, "move");
  const s = Qc.dirname(e);
  return Qc.parse(s).root !== s && await sQ(s), uQ(t, e, r, o);
}
async function uQ(t, e, n, r) {
  if (!r) {
    if (n)
      await Cp(e);
    else if (await aQ(e))
      throw new Error("dest already exists.");
  }
  try {
    await iQ.rename(t, e);
  } catch (i) {
    if (i.code !== "EXDEV")
      throw i;
    await lQ(t, e, n);
  }
}
async function lQ(t, e, n) {
  return await oQ(t, e, {
    overwrite: n,
    errorOnExist: !0,
    preserveTimestamps: !0
  }), Cp(t);
}
var pQ = cQ;
const Ip = gn, $o = Y, dQ = qs.copySync, Rp = Qr.removeSync, fQ = st.mkdirpSync, eu = bn;
function mQ(t, e, n) {
  n = n || {};
  const r = n.overwrite || n.clobber || !1, { srcStat: i, isChangingCase: o = !1 } = eu.checkPathsSync(t, e, "move", n);
  return eu.checkParentPathsSync(t, i, e, "move"), hQ(e) || fQ($o.dirname(e)), gQ(t, e, r, o);
}
function hQ(t) {
  const e = $o.dirname(t);
  return $o.parse(e).root === e;
}
function gQ(t, e, n, r) {
  if (r) return yo(t, e, n);
  if (n)
    return Rp(e), yo(t, e, n);
  if (Ip.existsSync(e)) throw new Error("dest already exists.");
  return yo(t, e, n);
}
function yo(t, e, n) {
  try {
    Ip.renameSync(t, e);
  } catch (r) {
    if (r.code !== "EXDEV") throw r;
    return bQ(t, e, n);
  }
}
function bQ(t, e, n) {
  return dQ(t, e, {
    overwrite: n,
    errorOnExist: !0,
    preserveTimestamps: !0
  }), Rp(t);
}
var yQ = mQ;
const vQ = be.fromPromise;
var xQ = {
  move: vQ(pQ),
  moveSync: yQ
}, wQ = {
  // Export promiseified graceful-fs:
  ...Fe,
  // Export extra methods:
  ...qs,
  ...rJ,
  ...LJ,
  ...rQ,
  ...st,
  ...xQ,
  ...Ms,
  ...Wt,
  ...Qr
};
const ie = /* @__PURE__ */ Gt(wQ);
function EQ(t) {
  if (t <= 0) return null;
  const e = Date.now();
  let n = 0;
  return new pd({
    transform(r, i, o) {
      n += r.length;
      const s = (Date.now() - e) / 1e3, a = n / t, c = Math.max(0, (a - s) * 1e3);
      c > 0 ? setTimeout(() => {
        this.push(r), o();
      }, c) : (this.push(r), o());
    }
  });
}
const TQ = 3e4, SQ = 6e4;
class _Q {
  async downloadFile(e, n, r, i, o = 3) {
    for (let s = 0; s < o; s++)
      try {
        await this.attemptDownload(e, n, r, i);
        return;
      } catch (a) {
        const c = a;
        if (c.code === "ENOSPC") throw new Error("DISK_FULL: No space left on device.");
        if (c.code === "EPERM" || c.code === "EACCES") throw new Error("PERMISSION_DENIED: Access denied to write file.");
        if (c.message === "DISK_FULL" || c.message === "DOWNLOAD_TIMEOUT" || c.message === "DOWNLOAD_STALLED" || c.message === "EPISODE_NOT_FOUND" || (console.error(`Download attempt ${s + 1} failed:`, a), c.message === "INTEGRITY_CHECK_FAILED" && await ie.remove(`${n}.part`).catch(() => {
        }), await ie.remove(n).catch(() => {
        }), s === o - 1)) throw a;
        await new Promise((l) => setTimeout(l, 1e3 * Math.pow(2, s)));
      }
  }
  async attemptDownload(e, n, r, i) {
    const o = `${n}.part`;
    let s = 0;
    try {
      s = (await ie.stat(o)).size;
    } catch {
    }
    let a = null;
    try {
      const c = await ae({
        url: e,
        method: "GET",
        responseType: "stream",
        timeout: TQ,
        ...s > 0 ? { headers: { Range: `bytes=${s}-` } } : {}
      });
      if (c.status === 404)
        throw await ie.remove(o).catch(() => {
        }), new Error("EPISODE_NOT_FOUND");
      const l = s > 0 && c.status === 206;
      s > 0 && c.status === 200 && (await ie.remove(o).catch(() => {
      }), s = 0), a = l ? ie.createWriteStream(o, { flags: "a" }) : ie.createWriteStream(o);
      const u = c.headers["content-length"], p = u ? l ? s + parseInt(u) : parseInt(u) : 0;
      let d = s;
      const f = i && i > 0 ? EQ(i * 1024) : null;
      return new Promise((m, h) => {
        let g = null;
        const T = () => {
          g && clearTimeout(g), g = setTimeout(() => {
            c.data.destroy(), a.close(), h(new Error("DOWNLOAD_STALLED"));
          }, SQ);
        };
        T(), c.data.on("data", (v) => {
          d += v.length, T(), p > 0 && r(d, p);
        }), f ? c.data.pipe(f).pipe(a) : c.data.pipe(a), a.on("finish", async () => {
          if (g && clearTimeout(g), u && !l) {
            const v = parseInt(u);
            if (v > 0 && Math.abs(d - v) / v > 0.01) {
              await ie.remove(o).catch(() => {
              }), h(new Error("INTEGRITY_CHECK_FAILED"));
              return;
            }
          }
          try {
            await ie.rename(o, n), m();
          } catch (v) {
            h(v);
          }
        }), a.on("error", async (v) => {
          g && clearTimeout(g), await ie.remove(o).catch(() => {
          }), v.code === "ENOSPC" ? h(new Error("DISK_FULL")) : h(v);
        });
      });
    } catch (c) {
      throw a && a.close(), c.code === "ECONNABORTED" ? new Error("DOWNLOAD_TIMEOUT") : c;
    }
  }
}
var Lp = { exports: {} };
(function(t) {
  var e = Object.prototype.hasOwnProperty, n = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (n = !1));
  function i(c, l, u) {
    this.fn = c, this.context = l, this.once = u || !1;
  }
  function o(c, l, u, p, d) {
    if (typeof u != "function")
      throw new TypeError("The listener must be a function");
    var f = new i(u, p || c, d), m = n ? n + l : l;
    return c._events[m] ? c._events[m].fn ? c._events[m] = [c._events[m], f] : c._events[m].push(f) : (c._events[m] = f, c._eventsCount++), c;
  }
  function s(c, l) {
    --c._eventsCount === 0 ? c._events = new r() : delete c._events[l];
  }
  function a() {
    this._events = new r(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var l = [], u, p;
    if (this._eventsCount === 0) return l;
    for (p in u = this._events)
      e.call(u, p) && l.push(n ? p.slice(1) : p);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l;
  }, a.prototype.listeners = function(l) {
    var u = n ? n + l : l, p = this._events[u];
    if (!p) return [];
    if (p.fn) return [p.fn];
    for (var d = 0, f = p.length, m = new Array(f); d < f; d++)
      m[d] = p[d].fn;
    return m;
  }, a.prototype.listenerCount = function(l) {
    var u = n ? n + l : l, p = this._events[u];
    return p ? p.fn ? 1 : p.length : 0;
  }, a.prototype.emit = function(l, u, p, d, f, m) {
    var h = n ? n + l : l;
    if (!this._events[h]) return !1;
    var g = this._events[h], T = arguments.length, v, b;
    if (g.fn) {
      switch (g.once && this.removeListener(l, g.fn, void 0, !0), T) {
        case 1:
          return g.fn.call(g.context), !0;
        case 2:
          return g.fn.call(g.context, u), !0;
        case 3:
          return g.fn.call(g.context, u, p), !0;
        case 4:
          return g.fn.call(g.context, u, p, d), !0;
        case 5:
          return g.fn.call(g.context, u, p, d, f), !0;
        case 6:
          return g.fn.call(g.context, u, p, d, f, m), !0;
      }
      for (b = 1, v = new Array(T - 1); b < T; b++)
        v[b - 1] = arguments[b];
      g.fn.apply(g.context, v);
    } else {
      var w = g.length, S;
      for (b = 0; b < w; b++)
        switch (g[b].once && this.removeListener(l, g[b].fn, void 0, !0), T) {
          case 1:
            g[b].fn.call(g[b].context);
            break;
          case 2:
            g[b].fn.call(g[b].context, u);
            break;
          case 3:
            g[b].fn.call(g[b].context, u, p);
            break;
          case 4:
            g[b].fn.call(g[b].context, u, p, d);
            break;
          default:
            if (!v) for (S = 1, v = new Array(T - 1); S < T; S++)
              v[S - 1] = arguments[S];
            g[b].fn.apply(g[b].context, v);
        }
    }
    return !0;
  }, a.prototype.on = function(l, u, p) {
    return o(this, l, u, p, !1);
  }, a.prototype.once = function(l, u, p) {
    return o(this, l, u, p, !0);
  }, a.prototype.removeListener = function(l, u, p, d) {
    var f = n ? n + l : l;
    if (!this._events[f]) return this;
    if (!u)
      return s(this, f), this;
    var m = this._events[f];
    if (m.fn)
      m.fn === u && (!d || m.once) && (!p || m.context === p) && s(this, f);
    else {
      for (var h = 0, g = [], T = m.length; h < T; h++)
        (m[h].fn !== u || d && !m[h].once || p && m[h].context !== p) && g.push(m[h]);
      g.length ? this._events[f] = g.length === 1 ? g[0] : g : s(this, f);
    }
    return this;
  }, a.prototype.removeAllListeners = function(l) {
    var u;
    return l ? (u = n ? n + l : l, this._events[u] && s(this, u)) : (this._events = new r(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, t.exports = a;
})(Lp);
var NQ = Lp.exports;
const AQ = /* @__PURE__ */ Gt(NQ);
class Us extends Error {
  constructor(n, r) {
    var i;
    super(n, r);
    $e(this, "name", "TimeoutError");
    (i = Error.captureStackTrace) == null || i.call(Error, this, Us);
  }
}
const tu = (t) => t.reason ?? new DOMException("This operation was aborted.", "AbortError");
function OQ(t, e) {
  const {
    milliseconds: n,
    fallback: r,
    message: i,
    customTimers: o = { setTimeout, clearTimeout },
    signal: s
  } = e;
  let a, c;
  const u = new Promise((p, d) => {
    if (typeof n != "number" || Math.sign(n) !== 1)
      throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${n}\``);
    if (s != null && s.aborted) {
      d(tu(s));
      return;
    }
    if (s && (c = () => {
      d(tu(s));
    }, s.addEventListener("abort", c, { once: !0 })), t.then(p, d), n === Number.POSITIVE_INFINITY)
      return;
    const f = new Us();
    a = o.setTimeout.call(void 0, () => {
      if (r) {
        try {
          p(r());
        } catch (m) {
          d(m);
        }
        return;
      }
      typeof t.cancel == "function" && t.cancel(), i === !1 ? p() : i instanceof Error ? d(i) : (f.message = i ?? `Promise timed out after ${n} milliseconds`, d(f));
    }, n);
  }).finally(() => {
    u.clear(), c && s && s.removeEventListener("abort", c);
  });
  return u.clear = () => {
    o.clearTimeout.call(void 0, a), a = void 0;
  }, u;
}
function DQ(t, e, n) {
  let r = 0, i = t.length;
  for (; i > 0; ) {
    const o = Math.trunc(i / 2);
    let s = r + o;
    n(t[s], e) <= 0 ? (r = ++s, i -= o + 1) : i = o;
  }
  return r;
}
var Xe;
class CQ {
  constructor() {
    se(this, Xe, []);
  }
  enqueue(e, n) {
    const { priority: r = 0, id: i } = n ?? {}, o = {
      priority: r,
      id: i,
      run: e
    };
    if (this.size === 0 || I(this, Xe)[this.size - 1].priority >= r) {
      I(this, Xe).push(o);
      return;
    }
    const s = DQ(I(this, Xe), o, (a, c) => c.priority - a.priority);
    I(this, Xe).splice(s, 0, o);
  }
  setPriority(e, n) {
    const r = I(this, Xe).findIndex((o) => o.id === e);
    if (r === -1)
      throw new ReferenceError(`No promise function with the id "${e}" exists in the queue.`);
    const [i] = I(this, Xe).splice(r, 1);
    this.enqueue(i.run, { priority: n, id: e });
  }
  dequeue() {
    const e = I(this, Xe).shift();
    return e == null ? void 0 : e.run;
  }
  filter(e) {
    return I(this, Xe).filter((n) => n.priority === e.priority).map((n) => n.run);
  }
  get size() {
    return I(this, Xe).length;
  }
}
Xe = new WeakMap();
var an, Je, Qe, Tt, qt, cn, nt, kn, un, rt, ft, Ge, Me, Ie, me, qn, Te, Bt, mt, Pr, Mt, B, hr, Pp, Fp, gr, kp, qp, Bp, Mp, Up, br, yr, Vo, vr, zo, Ho, xr, Rt, jp, Zt, $p, Xo;
class IQ extends AQ {
  constructor(n) {
    var r, i;
    super();
    se(this, B);
    se(this, an);
    se(this, Je);
    se(this, Qe, 0);
    se(this, Tt);
    se(this, qt, !1);
    se(this, cn, !1);
    se(this, nt);
    se(this, kn, 0);
    se(this, un, 0);
    se(this, rt);
    se(this, ft);
    se(this, Ge);
    // Circular buffer implementation for better performance
    se(this, Me, []);
    se(this, Ie, 0);
    se(this, me);
    se(this, qn);
    se(this, Te, 0);
    // The `!` is needed because of https://github.com/microsoft/TypeScript/issues/32194
    se(this, Bt);
    se(this, mt);
    // Use to assign a unique identifier to a promise function, if not explicitly specified
    se(this, Pr, 1n);
    // Track currently running tasks for debugging
    se(this, Mt, /* @__PURE__ */ new Map());
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
    $e(this, "timeout");
    if (n = {
      carryoverIntervalCount: !1,
      intervalCap: Number.POSITIVE_INFINITY,
      interval: 0,
      concurrency: Number.POSITIVE_INFINITY,
      autoStart: !0,
      queueClass: CQ,
      strict: !1,
      ...n
    }, !(typeof n.intervalCap == "number" && n.intervalCap >= 1))
      throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${((r = n.intervalCap) == null ? void 0 : r.toString()) ?? ""}\` (${typeof n.intervalCap})`);
    if (n.interval === void 0 || !(Number.isFinite(n.interval) && n.interval >= 0))
      throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${((i = n.interval) == null ? void 0 : i.toString()) ?? ""}\` (${typeof n.interval})`);
    if (n.strict && n.interval === 0)
      throw new TypeError("The `strict` option requires a non-zero `interval`");
    if (n.strict && n.intervalCap === Number.POSITIVE_INFINITY)
      throw new TypeError("The `strict` option requires a finite `intervalCap`");
    if (re(this, an, n.carryoverIntervalCount ?? n.carryoverConcurrencyCount ?? !1), re(this, Je, n.intervalCap === Number.POSITIVE_INFINITY || n.interval === 0), re(this, Tt, n.intervalCap), re(this, nt, n.interval), re(this, Ge, n.strict), re(this, me, new n.queueClass()), re(this, qn, n.queueClass), this.concurrency = n.concurrency, n.timeout !== void 0 && !(Number.isFinite(n.timeout) && n.timeout > 0))
      throw new TypeError(`Expected \`timeout\` to be a positive finite number, got \`${n.timeout}\` (${typeof n.timeout})`);
    this.timeout = n.timeout, re(this, mt, n.autoStart === !1), H(this, B, jp).call(this);
  }
  get concurrency() {
    return I(this, Bt);
  }
  set concurrency(n) {
    if (!(typeof n == "number" && n >= 1))
      throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${n}\` (${typeof n})`);
    re(this, Bt, n), H(this, B, xr).call(this);
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
    I(this, me).setPriority(n, r);
  }
  async add(n, r = {}) {
    return r = {
      timeout: this.timeout,
      ...r,
      // Assign unique ID if not provided
      id: r.id ?? (Dt(this, Pr)._++).toString()
    }, new Promise((i, o) => {
      const s = Symbol(`task-${r.id}`);
      I(this, me).enqueue(async () => {
        var c, l;
        Dt(this, Te)._++, I(this, Mt).set(s, {
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
            throw H(this, B, $p).call(this), I(this, Mt).delete(s), d;
          }
          re(this, un, Date.now());
          let u = n({ signal: r.signal });
          if (r.timeout && (u = OQ(Promise.resolve(u), {
            milliseconds: r.timeout,
            message: `Task timed out after ${r.timeout}ms (queue has ${I(this, Te)} running, ${I(this, me).size} waiting)`
          })), r.signal) {
            const { signal: d } = r;
            u = Promise.race([u, new Promise((f, m) => {
              a = () => {
                m(d.reason);
              }, d.addEventListener("abort", a, { once: !0 });
            })]);
          }
          const p = await u;
          i(p), this.emit("completed", p);
        } catch (u) {
          o(u), this.emit("error", u);
        } finally {
          a && ((l = r.signal) == null || l.removeEventListener("abort", a)), I(this, Mt).delete(s), queueMicrotask(() => {
            H(this, B, Bp).call(this);
          });
        }
      }, r), this.emit("add"), H(this, B, vr).call(this);
    });
  }
  async addAll(n, r) {
    return Promise.all(n.map(async (i) => this.add(i, r)));
  }
  /**
  Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
  */
  start() {
    return I(this, mt) ? (re(this, mt, !1), H(this, B, xr).call(this), this) : this;
  }
  /**
  Put queue execution on hold.
  */
  pause() {
    re(this, mt, !0);
  }
  /**
  Clear the queue.
  */
  clear() {
    re(this, me, new (I(this, qn))()), H(this, B, yr).call(this), H(this, B, Xo).call(this), this.emit("empty"), I(this, Te) === 0 && (H(this, B, Vo).call(this), this.emit("idle")), this.emit("next");
  }
  /**
      Can be called multiple times. Useful if you for example add additional items at a later time.
  
      @returns A promise that settles when the queue becomes empty.
      */
  async onEmpty() {
    I(this, me).size !== 0 && await H(this, B, Rt).call(this, "empty");
  }
  /**
      @returns A promise that settles when the queue size is less than the given limit: `queue.size < limit`.
  
      If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.
  
      Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.
      */
  async onSizeLessThan(n) {
    I(this, me).size < n || await H(this, B, Rt).call(this, "next", () => I(this, me).size < n);
  }
  /**
      The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
  
      @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
      */
  async onIdle() {
    I(this, Te) === 0 && I(this, me).size === 0 || await H(this, B, Rt).call(this, "idle");
  }
  /**
      The difference with `.onIdle` is that `.onPendingZero` only waits for currently running tasks to finish, ignoring queued tasks.
  
      @returns A promise that settles when all currently running tasks have completed; `queue.pending === 0`.
      */
  async onPendingZero() {
    I(this, Te) !== 0 && await H(this, B, Rt).call(this, "pendingZero");
  }
  /**
  @returns A promise that settles when the queue becomes rate-limited due to intervalCap.
  */
  async onRateLimit() {
    this.isRateLimited || await H(this, B, Rt).call(this, "rateLimit");
  }
  /**
  @returns A promise that settles when the queue is no longer rate-limited.
  */
  async onRateLimitCleared() {
    this.isRateLimited && await H(this, B, Rt).call(this, "rateLimitCleared");
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
      const i = (o) => {
        this.off("error", i), r(o);
      };
      this.on("error", i);
    });
  }
  /**
  Size of the queue, the number of queued items waiting to run.
  */
  get size() {
    return I(this, me).size;
  }
  /**
      Size of the queue, filtered by the given options.
  
      For example, this can be used to find the number of items remaining in the queue with a specific priority level.
      */
  sizeBy(n) {
    return I(this, me).filter(n).length;
  }
  /**
  Number of running items (no longer in the queue).
  */
  get pending() {
    return I(this, Te);
  }
  /**
  Whether the queue is currently paused.
  */
  get isPaused() {
    return I(this, mt);
  }
  /**
  Whether the queue is currently rate-limited due to intervalCap.
  */
  get isRateLimited() {
    return I(this, qt);
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
    return I(this, Te) === I(this, Bt) && I(this, me).size > 0 || this.isRateLimited && I(this, me).size > 0;
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
    return [...I(this, Mt).values()].map((n) => ({ ...n }));
  }
}
an = new WeakMap(), Je = new WeakMap(), Qe = new WeakMap(), Tt = new WeakMap(), qt = new WeakMap(), cn = new WeakMap(), nt = new WeakMap(), kn = new WeakMap(), un = new WeakMap(), rt = new WeakMap(), ft = new WeakMap(), Ge = new WeakMap(), Me = new WeakMap(), Ie = new WeakMap(), me = new WeakMap(), qn = new WeakMap(), Te = new WeakMap(), Bt = new WeakMap(), mt = new WeakMap(), Pr = new WeakMap(), Mt = new WeakMap(), B = new WeakSet(), hr = function(n) {
  for (; I(this, Ie) < I(this, Me).length; ) {
    const i = I(this, Me)[I(this, Ie)];
    if (i !== void 0 && n - i >= I(this, nt))
      Dt(this, Ie)._++;
    else
      break;
  }
  (I(this, Ie) > 100 && I(this, Ie) > I(this, Me).length / 2 || I(this, Ie) === I(this, Me).length) && (re(this, Me, I(this, Me).slice(I(this, Ie))), re(this, Ie, 0));
}, // Helper methods for interval consumption
Pp = function(n) {
  I(this, Ge) ? I(this, Me).push(n) : Dt(this, Qe)._++;
}, Fp = function() {
  I(this, Ge) ? I(this, Me).length > I(this, Ie) && I(this, Me).pop() : I(this, Qe) > 0 && Dt(this, Qe)._--;
}, gr = function() {
  return I(this, Me).length - I(this, Ie);
}, kp = function() {
  return I(this, Je) ? !0 : I(this, Ge) ? H(this, B, gr).call(this) < I(this, Tt) : I(this, Qe) < I(this, Tt);
}, qp = function() {
  return I(this, Te) < I(this, Bt);
}, Bp = function() {
  Dt(this, Te)._--, I(this, Te) === 0 && this.emit("pendingZero"), H(this, B, vr).call(this), this.emit("next");
}, Mp = function() {
  re(this, ft, void 0), H(this, B, Ho).call(this), H(this, B, zo).call(this);
}, Up = function(n) {
  if (I(this, Ge)) {
    if (H(this, B, hr).call(this, n), H(this, B, gr).call(this) >= I(this, Tt)) {
      const i = I(this, Me)[I(this, Ie)], o = I(this, nt) - (n - i);
      return H(this, B, br).call(this, o), !0;
    }
    return !1;
  }
  if (I(this, rt) === void 0) {
    const r = I(this, kn) - n;
    if (r < 0) {
      if (I(this, un) > 0) {
        const i = n - I(this, un);
        if (i < I(this, nt))
          return H(this, B, br).call(this, I(this, nt) - i), !0;
      }
      re(this, Qe, I(this, an) ? I(this, Te) : 0);
    } else
      return H(this, B, br).call(this, r), !0;
  }
  return !1;
}, br = function(n) {
  I(this, ft) === void 0 && re(this, ft, setTimeout(() => {
    H(this, B, Mp).call(this);
  }, n));
}, yr = function() {
  I(this, rt) && (clearInterval(I(this, rt)), re(this, rt, void 0));
}, Vo = function() {
  I(this, ft) && (clearTimeout(I(this, ft)), re(this, ft, void 0));
}, vr = function() {
  if (I(this, me).size === 0) {
    if (H(this, B, yr).call(this), this.emit("empty"), I(this, Te) === 0) {
      if (H(this, B, Vo).call(this), I(this, Ge) && I(this, Ie) > 0) {
        const r = Date.now();
        H(this, B, hr).call(this, r);
      }
      this.emit("idle");
    }
    return !1;
  }
  let n = !1;
  if (!I(this, mt)) {
    const r = Date.now(), i = !H(this, B, Up).call(this, r);
    if (I(this, B, kp) && I(this, B, qp)) {
      const o = I(this, me).dequeue();
      I(this, Je) || (H(this, B, Pp).call(this, r), H(this, B, Zt).call(this)), this.emit("active"), o(), i && H(this, B, zo).call(this), n = !0;
    }
  }
  return n;
}, zo = function() {
  I(this, Je) || I(this, rt) !== void 0 || I(this, Ge) || (re(this, rt, setInterval(() => {
    H(this, B, Ho).call(this);
  }, I(this, nt))), re(this, kn, Date.now() + I(this, nt)));
}, Ho = function() {
  I(this, Ge) || (I(this, Qe) === 0 && I(this, Te) === 0 && I(this, rt) && H(this, B, yr).call(this), re(this, Qe, I(this, an) ? I(this, Te) : 0)), H(this, B, xr).call(this), H(this, B, Zt).call(this);
}, /**
Executes all queued functions until it reaches the limit.
*/
xr = function() {
  for (; H(this, B, vr).call(this); )
    ;
}, Rt = async function(n, r) {
  return new Promise((i) => {
    const o = () => {
      r && !r() || (this.off(n, o), i());
    };
    this.on(n, o);
  });
}, jp = function() {
  I(this, Je) || (this.on("add", () => {
    I(this, me).size > 0 && H(this, B, Zt).call(this);
  }), this.on("next", () => {
    H(this, B, Zt).call(this);
  }));
}, Zt = function() {
  I(this, Je) || I(this, cn) || (re(this, cn, !0), queueMicrotask(() => {
    re(this, cn, !1), H(this, B, Xo).call(this);
  }));
}, $p = function() {
  I(this, Je) || (H(this, B, Fp).call(this), H(this, B, Zt).call(this));
}, Xo = function() {
  const n = I(this, qt);
  if (I(this, Je) || I(this, me).size === 0) {
    n && (re(this, qt, !1), this.emit("rateLimitCleared"));
    return;
  }
  let r;
  if (I(this, Ge)) {
    const o = Date.now();
    H(this, B, hr).call(this, o), r = H(this, B, gr).call(this);
  } else
    r = I(this, Qe);
  const i = r >= I(this, Tt);
  i !== n && (re(this, qt, i), this.emit(i ? "rateLimit" : "rateLimitCleared"));
};
class RQ {
  constructor(e = 3) {
    $e(this, "queue");
    this.queue = new IQ({ concurrency: e });
  }
  add(e) {
    return this.queue.add(e);
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
  setConcurrency(e) {
    this.queue.concurrency = e;
  }
  get concurrency() {
    return this.queue.concurrency;
  }
}
class LQ {
  constructor() {
    $e(this, "_total", 0);
    $e(this, "_completed", 0);
    $e(this, "_active", !1);
    $e(this, "_sealed", !1);
    $e(this, "_sealTimer", null);
    /** Debounce window in ms — time to wait after last track() before sealing */
    $e(this, "SEAL_DELAY_MS", 200);
  }
  /**
   * Register a new download in the batch.
   * Resets the seal timer on every call so the batch isn't
   * considered "sealed" until all downloads have been queued.
   */
  track() {
    this._total++, this._active = !0, this._sealed = !1, this._sealTimer && clearTimeout(this._sealTimer), this._sealTimer = setTimeout(() => {
      this._sealed = !0, this._sealTimer = null;
    }, this.SEAL_DELAY_MS);
  }
  /**
   * Mark one download as completed.
   * Returns the total count if the entire batch is now complete,
   * or `null` if the batch is still in progress.
   *
   * A batch is considered complete ONLY when:
   * 1. It has been sealed (no new track() calls for SEAL_DELAY_MS)
   * 2. All tracked downloads have completed
   */
  complete() {
    if (this._completed++, this._sealed && this._completed >= this._total && this._active) {
      const e = this._total;
      return this.reset(), e;
    }
    return null;
  }
  /** Force-reset all state (used by STOP_BATCH) */
  reset() {
    this._total = 0, this._completed = 0, this._active = !1, this._sealed = !1, this._sealTimer && (clearTimeout(this._sealTimer), this._sealTimer = null);
  }
  get total() {
    return this._total;
  }
  get completed() {
    return this._completed;
  }
  get active() {
    return this._active;
  }
  get sealed() {
    return this._sealed;
  }
}
function PQ(t) {
  return t >= 55296 && t <= 56319;
}
function FQ(t) {
  return t >= 56320 && t <= 57343;
}
var kQ = function(e, n, r) {
  if (typeof n != "string")
    throw new Error("Input must be string");
  for (var i = n.length, o = 0, s, a, c = 0; c < i; c += 1) {
    if (s = n.charCodeAt(c), a = n[c], PQ(s) && FQ(n.charCodeAt(c + 1)) && (c += 1, a += n[c]), o += e(a), o === r)
      return n.slice(0, c + 1);
    if (o > r)
      return n.slice(0, c - a.length + 1);
  }
  return n;
}, qQ = kQ, BQ = Buffer.byteLength.bind(Buffer), MQ = qQ.bind(null, BQ), UQ = MQ, jQ = /[\/\?<>\\:\*\|"]/g, $Q = /[\x00-\x1f\x80-\x9f]/g, VQ = /^\.+$/, zQ = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i, HQ = /[\. ]+$/;
function nu(t, e) {
  if (typeof t != "string")
    throw new Error("Input must be string");
  var n = t.replace(jQ, e).replace($Q, e).replace(VQ, e).replace(zQ, e).replace(HQ, e);
  return UQ(n, 255);
}
var Vp = function(t, e) {
  var n = e && e.replacement || "", r = nu(t, n);
  return n === "" ? r : nu(r, "");
};
const Go = /* @__PURE__ */ Gt(Vp), XQ = /* @__PURE__ */ yd({
  __proto__: null,
  default: Go
}, [Vp]);
function ru(t, e, n, r = ".mp3") {
  const i = Go(e);
  let o = Go(n);
  const s = 250, a = Y.join(t, i), l = a.length + 1 + r.length, u = s - l;
  return u < 1 ? o = o.substring(0, 5) : o.length > u && (o = o.substring(0, u)), Y.join(a, `${o}${r}`);
}
var at = {};
const wr = {
  v2: {
    album: "TAL",
    bpm: "TBP",
    composer: "TCM",
    genre: "TCO",
    copyright: "TCR",
    date: "TDA",
    playlistDelay: "TDY",
    encodedBy: "TEN",
    textWriter: "TEXT",
    fileType: "TFT",
    time: "TIM",
    contentGroup: "TT1",
    title: "TT2",
    subtitle: "TT3",
    initialKey: "TKE",
    language: "TLA",
    length: "TLE",
    mediaType: "TMT",
    originalTitle: "TOT",
    originalFilename: "TOF",
    originalTextwriter: "TOL",
    originalArtist: "TOA",
    originalYear: "TOR",
    artist: "TP1",
    performerInfo: "TP2",
    conductor: "TP3",
    remixArtist: "TP4",
    partOfSet: "TPA",
    publisher: "TPB",
    trackNumber: "TRK",
    recordingDates: "TRD",
    size: "TSI",
    ISRC: "TRC",
    encodingTechnology: "TSS",
    year: "TYE",
    image: "PIC",
    commercialUrl: "WCM",
    copyrightUrl: "WCP",
    fileUrl: "WAF",
    artistUrl: "WAR",
    audioSourceUrl: "WAS",
    publisherUrl: "WPB",
    userDefinedUrl: "WXX"
  },
  v3: {
    album: "TALB",
    bpm: "TBPM",
    composer: "TCOM",
    genre: "TCON",
    copyright: "TCOP",
    date: "TDAT",
    playlistDelay: "TDLY",
    encodedBy: "TENC",
    textWriter: "TEXT",
    fileType: "TFLT",
    time: "TIME",
    contentGroup: "TIT1",
    title: "TIT2",
    subtitle: "TIT3",
    initialKey: "TKEY",
    language: "TLAN",
    length: "TLEN",
    mediaType: "TMED",
    originalTitle: "TOAL",
    originalFilename: "TOFN",
    originalTextwriter: "TOLY",
    originalArtist: "TOPE",
    originalYear: "TORY",
    fileOwner: "TOWN",
    artist: "TPE1",
    performerInfo: "TPE2",
    conductor: "TPE3",
    remixArtist: "TPE4",
    partOfSet: "TPOS",
    publisher: "TPUB",
    trackNumber: "TRCK",
    recordingDates: "TRDA",
    internetRadioName: "TRSN",
    internetRadioOwner: "TRSO",
    size: "TSIZ",
    ISRC: "TSRC",
    encodingTechnology: "TSSE",
    year: "TYER",
    comment: "COMM",
    image: "APIC",
    unsynchronisedLyrics: "USLT",
    synchronisedLyrics: "SYLT",
    userDefinedText: "TXXX",
    popularimeter: "POPM",
    private: "PRIV",
    chapter: "CHAP",
    tableOfContents: "CTOC",
    userDefinedUrl: "WXXX",
    commercialUrl: "WCOM",
    copyrightUrl: "WCOP",
    fileUrl: "WOAF",
    artistUrl: "WOAR",
    audioSourceUrl: "WOAS",
    radioStationUrl: "WORS",
    paymentUrl: "WPAY",
    publisherUrl: "WPUB",
    eventTimingCodes: "ETCO",
    commercialFrame: "COMR",
    uniqueFileIdentifier: "UFID",
    generalObject: "GEOB"
  },
  /**
   * v4 removes some text frames compared to v3: TDAT, TIME, TRDA, TSIZ, TYER
   * It adds the text frames: TDEN, TDOR, TDRC, TDRL, TDTG, TIPL, TMCL, TMOO, TPRO, TSOA, TSOP, TSOT, TSST
   *
   * Removed other frames: CHAP, CTOC
   */
  v4: {
    image: "APIC",
    comment: "COMM",
    commercialFrame: "COMR",
    eventTimingCodes: "ETCO",
    private: "PRIV",
    popularimeter: "POPM",
    synchronisedLyrics: "SYLT",
    album: "TALB",
    bpm: "TBPM",
    composer: "TCOM",
    genre: "TCON",
    copyright: "TCOP",
    encodingTime: "TDEN",
    playlistDelay: "TDLY",
    originalReleaseTime: "TDOR",
    recordingTime: "TDRC",
    releaseTime: "TDRL",
    taggingTime: "TDTG",
    encodedBy: "TENC",
    textWriter: "TEXT",
    fileType: "TFLT",
    involvedPeopleList: "TIPL",
    contentGroup: "TIT1",
    title: "TIT2",
    subtitle: "TIT3",
    initialKey: "TKEY",
    language: "TLAN",
    length: "TLEN",
    musicianCreditsList: "TMCL",
    mediaType: "TMED",
    mood: "TMOO",
    originalTitle: "TOAL",
    originalFilename: "TOFN",
    originalTextwriter: "TOLY",
    originalArtist: "TOPE",
    fileOwner: "TOWN",
    artist: "TPE1",
    performerInfo: "TPE2",
    conductor: "TPE3",
    remixArtist: "TPE4",
    partOfSet: "TPOS",
    producedNotice: "TPRO",
    publisher: "TPUB",
    trackNumber: "TRCK",
    internetRadioName: "TRSN",
    internetRadioOwner: "TRSO",
    albumSortOrder: "TSOA",
    performerSortOrder: "TSOP",
    titleSortOrder: "TSOT",
    ISRC: "TSRC",
    encodingTechnology: "TSSE",
    setSubtitle: "TSST",
    userDefinedText: "TXXX",
    unsynchronisedLyrics: "USLT",
    commercialUrl: "WCOM",
    copyrightUrl: "WCOP",
    fileUrl: "WOAF",
    artistUrl: "WOAR",
    audioSourceUrl: "WOAS",
    radioStationUrl: "WORS",
    paymentUrl: "WPAY",
    publisherUrl: "WPUB",
    userDefinedUrl: "WXXX"
  }
}, GQ = Object.keys(wr).reduce((t, e) => (t[e] = Object.keys(wr[e]).reduce((n, r) => (n[wr[e][r]] = r, n), {}), t), {}), WQ = {
  PIC: {
    multiple: !1
    /* change in 1.0 */
  },
  WCM: {
    multiple: !0
  },
  WAR: {
    multiple: !0
  },
  T___: {
    // This is "correct", but in v4, the text frame's value can be split by using 0x00.
    // https://github.com/Zazama/node-id3/issues/111
    multiple: !1
  },
  TXXX: {
    multiple: !0,
    updateCompareKey: "description"
  },
  APIC: {
    multiple: !1
    /* change in 1.0 */
  },
  USLT: {
    multiple: !1
    /* change in 1.0 */
  },
  SYLT: {
    multiple: !0
  },
  COMM: {
    multiple: !1
    /* change in 1.0 */
  },
  POPM: {
    multiple: !1
    /* change in 1.0 */
  },
  PRIV: {
    multiple: !0
  },
  CTOC: {
    multiple: !0
  },
  CHAP: {
    multiple: !0
  },
  WXXX: {
    multiple: !0,
    updateCompareKey: "description"
  },
  WCOM: {
    multiple: !0
  },
  WOAR: {
    multiple: !0
  },
  ETCO: {
    multiple: !1
  },
  COMR: {
    multiple: !0
  },
  UFID: {
    multiple: !0
  },
  GEOB: {
    multiple: !0
  }
}, YQ = [
  "other",
  "file icon",
  "other file icon",
  "front cover",
  "back cover",
  "leaflet page",
  "media",
  "lead artist",
  "artist",
  "conductor",
  "band",
  "composer",
  "lyricist",
  "recording location",
  "during recording",
  "during performance",
  "video screen capture",
  "a bright coloured fish",
  "illustration",
  "band logotype",
  "publisher logotype"
], KQ = [
  "ISO-8859-1",
  "UTF-16",
  "UTF-16BE",
  "utf8"
], JQ = {
  /**
   * Absolute time unit used by:
   * - Event timing codes (`ETCO` tag frame)
   * - Synchronised tempo codes (`SYTC` tag frame)
   * - Synchronised lyrics/text (`SYLT` tag frame)
   * - Position synchronisation frame (`POSS` tag frame))
   */
  TimeStampFormat: {
    MPEG_FRAMES: 1,
    MILLISECONDS: 2
  },
  /**
   * `ETCO` tag frame
   */
  EventTimingCodes: {
    EventType: {
      /**
       * Padding has no meaning
       */
      PADDING: 0,
      END_OF_INITIAL_SILENCE: 1,
      INTRO_START: 2,
      MAINPART_START: 3,
      OUTRO_START: 4,
      OUTRO_END: 5,
      VERSE_START: 6,
      REFRAIN_START: 7,
      INTERLUDE_START: 8,
      THEME_START: 9,
      VARIATION_START: 10,
      KEY_CHANGE: 11,
      TIME_CHANGE: 12,
      /**
       * (Snap, Crackle & Pop)
       */
      MOMENTARY_UNWANTED_NOISE: 13,
      SUSTAINED_NOISE: 14,
      SUSTAINED_NOISE_END: 15,
      INTRO_END: 16,
      MAINPART_END: 17,
      VERSE_END: 18,
      REFRAIN_END: 19,
      THEME_END: 20,
      /**
       * $15-$DF reserved for future use
       */
      RESERVED_1: 21,
      /**
       * $E0-$EF not predefined sync 0-F
       */
      NOT_PREDEFINED_SYNC: 224,
      /**
       * $F0-$FC reserved for future use
       */
      RESERVED_2: 240,
      /**
       * Start of silence
       */
      AUDIO_END: 253,
      AUDIO_FILE_ENDS: 254,
      /**
       * one more byte of events follows (all the following bytes with
       * the value $FF have the same function)
       */
      ONE_MORE_BYTE_FOLLOWS: 255
    }
  },
  /**
   * `SYLT` tag frame
   */
  SynchronisedLyrics: {
    ContentType: {
      OTHER: 0,
      LYRICS: 1,
      TEXT_TRANSCRIPTION: 2,
      MOVEMENT_OR_PART_NAME: 3,
      EVENTS: 4,
      CHORD: 5,
      TRIVIA_OR_POP_UP_INFORMATION: 6
    }
  },
  /**
   * `APIC` tag frame
   */
  AttachedPicture: {
    PictureType: {
      OTHER: 0,
      /**
       * 32x32 pixels (PNG only)
       */
      FILE_ICON: 1,
      OTHER_FILE_ICON: 2,
      FRONT_COVER: 3,
      BACK_COVER: 4,
      LEAFLET_PAGE: 5,
      /**
       * Label side of CD
       */
      MEDIA: 6,
      LEAD_ARTIST: 7,
      ARTIST_OR_PERFORMER: 8,
      CONDUCTOR: 9,
      BAND_OR_ORCHESTRA: 10,
      COMPOSER: 11,
      LYRICIST_OR_TEXT_WRITER: 12,
      RECORDING_LOCATION: 13,
      DURING_RECORDING: 14,
      DURING_PERFORMANCE: 15,
      MOVIE_OR_VIDEO_SCREEN_CAPTURE: 16,
      A_BRIGHT_COLOURED_FISH: 17,
      ILLUSTRATION: 18,
      BAND_OR_ARTIST_LOGOTYPE: 19,
      PUBLISHER_OR_STUDIO_LOGOTYPE: 20
    }
  },
  /**
   * `COMR` tag frame
   */
  CommercialFrame: {
    ReceivedAs: {
      OTHER: 0,
      STANDARD_CD_ALBUM_WITH_OTHER_SONGS: 1,
      COMPRESSED_AUDIO_ON_CD: 2,
      FILE_OVER_THE_INTERNET: 3,
      STREAM_OVER_THE_INTERNET: 4,
      AS_NOTE_SHEETS: 5,
      AS_NOTE_SHEETS_IN_A_BOOK_WITH_OTHER_SHEETS: 6,
      MUSIC_ON_OTHER_MEDIA: 7,
      NON_MUSICAL_MERCHANDISE: 8
    }
  }
};
at.APIC_TYPES = YQ;
at.ENCODINGS = KQ;
at.FRAME_IDENTIFIERS = wr;
at.FRAME_INTERNAL_IDENTIFIERS = GQ;
at.ID3_FRAME_OPTIONS = WQ;
at.TagConstants = JQ;
var pe = {}, zp = { exports: {} }, Er = hd, on = Er.Buffer, We = {}, Ye;
for (Ye in Er)
  Er.hasOwnProperty(Ye) && (Ye === "SlowBuffer" || Ye === "Buffer" || (We[Ye] = Er[Ye]));
var sn = We.Buffer = {};
for (Ye in on)
  on.hasOwnProperty(Ye) && (Ye === "allocUnsafe" || Ye === "allocUnsafeSlow" || (sn[Ye] = on[Ye]));
We.Buffer.prototype = on.prototype;
(!sn.from || sn.from === Uint8Array.from) && (sn.from = function(t, e, n) {
  if (typeof t == "number")
    throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof t);
  if (t && typeof t.length > "u")
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
  return on(t, e, n);
});
sn.alloc || (sn.alloc = function(t, e, n) {
  if (typeof t != "number")
    throw new TypeError('The "size" argument must be of type number. Received type ' + typeof t);
  if (t < 0 || t >= 2 * (1 << 30))
    throw new RangeError('The value "' + t + '" is invalid for option "size"');
  var r = on(t);
  return !e || e.length === 0 ? r.fill(0) : typeof n == "string" ? r.fill(e, n) : r.fill(e), r;
});
if (!We.kStringMaxLength)
  try {
    We.kStringMaxLength = process.binding("buffer").kStringMaxLength;
  } catch {
  }
We.constants || (We.constants = {
  MAX_LENGTH: We.kMaxLength
}, We.kStringMaxLength && (We.constants.MAX_STRING_LENGTH = We.kStringMaxLength));
var Ot = We, js = {}, Hp = "\uFEFF";
js.PrependBOM = $s;
function $s(t, e) {
  this.encoder = t, this.addBOM = !0;
}
$s.prototype.write = function(t) {
  return this.addBOM && (t = Hp + t, this.addBOM = !1), this.encoder.write(t);
};
$s.prototype.end = function() {
  return this.encoder.end();
};
js.StripBOM = Vs;
function Vs(t, e) {
  this.decoder = t, this.pass = !1, this.options = e || {};
}
Vs.prototype.write = function(t) {
  var e = this.decoder.write(t);
  return this.pass || !e || (e[0] === Hp && (e = e.slice(1), typeof this.options.stripBOM == "function" && this.options.stripBOM()), this.pass = !0), e;
};
Vs.prototype.end = function() {
  return this.decoder.end();
};
var vo = {}, xo, iu;
function QQ() {
  if (iu) return xo;
  iu = 1;
  var t = Ot.Buffer;
  xo = {
    // Encodings
    utf8: { type: "_internal", bomAware: !0 },
    cesu8: { type: "_internal", bomAware: !0 },
    unicode11utf8: "utf8",
    ucs2: { type: "_internal", bomAware: !0 },
    utf16le: "ucs2",
    binary: { type: "_internal" },
    base64: { type: "_internal" },
    hex: { type: "_internal" },
    // Codec.
    _internal: e
  };
  function e(c, l) {
    this.enc = c.encodingName, this.bomAware = c.bomAware, this.enc === "base64" ? this.encoder = o : this.enc === "cesu8" && (this.enc = "utf8", this.encoder = s, t.from("eda0bdedb2a9", "hex").toString() !== "💩" && (this.decoder = a, this.defaultCharUnicode = l.defaultCharUnicode));
  }
  e.prototype.encoder = i, e.prototype.decoder = r;
  var n = gd.StringDecoder;
  n.prototype.end || (n.prototype.end = function() {
  });
  function r(c, l) {
    this.decoder = new n(l.enc);
  }
  r.prototype.write = function(c) {
    return t.isBuffer(c) || (c = t.from(c)), this.decoder.write(c);
  }, r.prototype.end = function() {
    return this.decoder.end();
  };
  function i(c, l) {
    this.enc = l.enc;
  }
  i.prototype.write = function(c) {
    return t.from(c, this.enc);
  }, i.prototype.end = function() {
  };
  function o(c, l) {
    this.prevStr = "";
  }
  o.prototype.write = function(c) {
    c = this.prevStr + c;
    var l = c.length - c.length % 4;
    return this.prevStr = c.slice(l), c = c.slice(0, l), t.from(c, "base64");
  }, o.prototype.end = function() {
    return t.from(this.prevStr, "base64");
  };
  function s(c, l) {
  }
  s.prototype.write = function(c) {
    for (var l = t.alloc(c.length * 3), u = 0, p = 0; p < c.length; p++) {
      var d = c.charCodeAt(p);
      d < 128 ? l[u++] = d : d < 2048 ? (l[u++] = 192 + (d >>> 6), l[u++] = 128 + (d & 63)) : (l[u++] = 224 + (d >>> 12), l[u++] = 128 + (d >>> 6 & 63), l[u++] = 128 + (d & 63));
    }
    return l.slice(0, u);
  }, s.prototype.end = function() {
  };
  function a(c, l) {
    this.acc = 0, this.contBytes = 0, this.accBytes = 0, this.defaultCharUnicode = l.defaultCharUnicode;
  }
  return a.prototype.write = function(c) {
    for (var l = this.acc, u = this.contBytes, p = this.accBytes, d = "", f = 0; f < c.length; f++) {
      var m = c[f];
      (m & 192) !== 128 ? (u > 0 && (d += this.defaultCharUnicode, u = 0), m < 128 ? d += String.fromCharCode(m) : m < 224 ? (l = m & 31, u = 1, p = 1) : m < 240 ? (l = m & 15, u = 2, p = 1) : d += this.defaultCharUnicode) : u > 0 ? (l = l << 6 | m & 63, u--, p++, u === 0 && (p === 2 && l < 128 && l > 0 ? d += this.defaultCharUnicode : p === 3 && l < 2048 ? d += this.defaultCharUnicode : d += String.fromCharCode(l))) : d += this.defaultCharUnicode;
    }
    return this.acc = l, this.contBytes = u, this.accBytes = p, d;
  }, a.prototype.end = function() {
    var c = 0;
    return this.contBytes > 0 && (c += this.defaultCharUnicode), c;
  }, xo;
}
var pt = {}, ou;
function ZQ() {
  if (ou) return pt;
  ou = 1;
  var t = Ot.Buffer;
  pt._utf32 = e;
  function e(l, u) {
    this.iconv = u, this.bomAware = !0, this.isLE = l.isLE;
  }
  pt.utf32le = { type: "_utf32", isLE: !0 }, pt.utf32be = { type: "_utf32", isLE: !1 }, pt.ucs4le = "utf32le", pt.ucs4be = "utf32be", e.prototype.encoder = n, e.prototype.decoder = r;
  function n(l, u) {
    this.isLE = u.isLE, this.highSurrogate = 0;
  }
  n.prototype.write = function(l) {
    for (var u = t.from(l, "ucs2"), p = t.alloc(u.length * 2), d = this.isLE ? p.writeUInt32LE : p.writeUInt32BE, f = 0, m = 0; m < u.length; m += 2) {
      var h = u.readUInt16LE(m), g = 55296 <= h && h < 56320, T = 56320 <= h && h < 57344;
      if (this.highSurrogate)
        if (g || !T)
          d.call(p, this.highSurrogate, f), f += 4;
        else {
          var v = (this.highSurrogate - 55296 << 10 | h - 56320) + 65536;
          d.call(p, v, f), f += 4, this.highSurrogate = 0;
          continue;
        }
      g ? this.highSurrogate = h : (d.call(p, h, f), f += 4, this.highSurrogate = 0);
    }
    return f < p.length && (p = p.slice(0, f)), p;
  }, n.prototype.end = function() {
    if (this.highSurrogate) {
      var l = t.alloc(4);
      return this.isLE ? l.writeUInt32LE(this.highSurrogate, 0) : l.writeUInt32BE(this.highSurrogate, 0), this.highSurrogate = 0, l;
    }
  };
  function r(l, u) {
    this.isLE = u.isLE, this.badChar = u.iconv.defaultCharUnicode.charCodeAt(0), this.overflow = [];
  }
  r.prototype.write = function(l) {
    if (l.length === 0)
      return "";
    var u = 0, p = 0, d = t.alloc(l.length + 4), f = 0, m = this.isLE, h = this.overflow, g = this.badChar;
    if (h.length > 0) {
      for (; u < l.length && h.length < 4; u++)
        h.push(l[u]);
      h.length === 4 && (m ? p = h[u] | h[u + 1] << 8 | h[u + 2] << 16 | h[u + 3] << 24 : p = h[u + 3] | h[u + 2] << 8 | h[u + 1] << 16 | h[u] << 24, h.length = 0, f = i(d, f, p, g));
    }
    for (; u < l.length - 3; u += 4)
      m ? p = l[u] | l[u + 1] << 8 | l[u + 2] << 16 | l[u + 3] << 24 : p = l[u + 3] | l[u + 2] << 8 | l[u + 1] << 16 | l[u] << 24, f = i(d, f, p, g);
    for (; u < l.length; u++)
      h.push(l[u]);
    return d.slice(0, f).toString("ucs2");
  };
  function i(l, u, p, d) {
    if ((p < 0 || p > 1114111) && (p = d), p >= 65536) {
      p -= 65536;
      var f = 55296 | p >> 10;
      l[u++] = f & 255, l[u++] = f >> 8;
      var p = 56320 | p & 1023;
    }
    return l[u++] = p & 255, l[u++] = p >> 8, u;
  }
  r.prototype.end = function() {
    this.overflow.length = 0;
  }, pt.utf32 = o, pt.ucs4 = "utf32";
  function o(l, u) {
    this.iconv = u;
  }
  o.prototype.encoder = s, o.prototype.decoder = a;
  function s(l, u) {
    l = l || {}, l.addBOM === void 0 && (l.addBOM = !0), this.encoder = u.iconv.getEncoder(l.defaultEncoding || "utf-32le", l);
  }
  s.prototype.write = function(l) {
    return this.encoder.write(l);
  }, s.prototype.end = function() {
    return this.encoder.end();
  };
  function a(l, u) {
    this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = l || {}, this.iconv = u.iconv;
  }
  a.prototype.write = function(l) {
    if (!this.decoder) {
      if (this.initialBufs.push(l), this.initialBufsLen += l.length, this.initialBufsLen < 32)
        return "";
      var u = c(this.initialBufs, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(u, this.options);
      for (var p = "", d = 0; d < this.initialBufs.length; d++)
        p += this.decoder.write(this.initialBufs[d]);
      return this.initialBufs.length = this.initialBufsLen = 0, p;
    }
    return this.decoder.write(l);
  }, a.prototype.end = function() {
    if (!this.decoder) {
      var l = c(this.initialBufs, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(l, this.options);
      for (var u = "", p = 0; p < this.initialBufs.length; p++)
        u += this.decoder.write(this.initialBufs[p]);
      var d = this.decoder.end();
      return d && (u += d), this.initialBufs.length = this.initialBufsLen = 0, u;
    }
    return this.decoder.end();
  };
  function c(l, u) {
    var p = [], d = 0, f = 0, m = 0, h = 0, g = 0;
    e:
      for (var T = 0; T < l.length; T++)
        for (var v = l[T], b = 0; b < v.length; b++)
          if (p.push(v[b]), p.length === 4) {
            if (d === 0) {
              if (p[0] === 255 && p[1] === 254 && p[2] === 0 && p[3] === 0)
                return "utf-32le";
              if (p[0] === 0 && p[1] === 0 && p[2] === 254 && p[3] === 255)
                return "utf-32be";
            }
            if ((p[0] !== 0 || p[1] > 16) && m++, (p[3] !== 0 || p[2] > 16) && f++, p[0] === 0 && p[1] === 0 && (p[2] !== 0 || p[3] !== 0) && g++, (p[0] !== 0 || p[1] !== 0) && p[2] === 0 && p[3] === 0 && h++, p.length = 0, d++, d >= 100)
              break e;
          }
    return g - m > h - f ? "utf-32be" : g - m < h - f ? "utf-32le" : u || "utf-32le";
  }
  return pt;
}
var ar = {}, su;
function eZ() {
  if (su) return ar;
  su = 1;
  var t = Ot.Buffer;
  ar.utf16be = e;
  function e() {
  }
  e.prototype.encoder = n, e.prototype.decoder = r, e.prototype.bomAware = !0;
  function n() {
  }
  n.prototype.write = function(c) {
    for (var l = t.from(c, "ucs2"), u = 0; u < l.length; u += 2) {
      var p = l[u];
      l[u] = l[u + 1], l[u + 1] = p;
    }
    return l;
  }, n.prototype.end = function() {
  };
  function r() {
    this.overflowByte = -1;
  }
  r.prototype.write = function(c) {
    if (c.length == 0)
      return "";
    var l = t.alloc(c.length + 1), u = 0, p = 0;
    for (this.overflowByte !== -1 && (l[0] = c[0], l[1] = this.overflowByte, u = 1, p = 2); u < c.length - 1; u += 2, p += 2)
      l[p] = c[u + 1], l[p + 1] = c[u];
    return this.overflowByte = u == c.length - 1 ? c[c.length - 1] : -1, l.slice(0, p).toString("ucs2");
  }, r.prototype.end = function() {
    this.overflowByte = -1;
  }, ar.utf16 = i;
  function i(c, l) {
    this.iconv = l;
  }
  i.prototype.encoder = o, i.prototype.decoder = s;
  function o(c, l) {
    c = c || {}, c.addBOM === void 0 && (c.addBOM = !0), this.encoder = l.iconv.getEncoder("utf-16le", c);
  }
  o.prototype.write = function(c) {
    return this.encoder.write(c);
  }, o.prototype.end = function() {
    return this.encoder.end();
  };
  function s(c, l) {
    this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = c || {}, this.iconv = l.iconv;
  }
  s.prototype.write = function(c) {
    if (!this.decoder) {
      if (this.initialBufs.push(c), this.initialBufsLen += c.length, this.initialBufsLen < 16)
        return "";
      var l = a(this.initialBufs, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(l, this.options);
      for (var u = "", p = 0; p < this.initialBufs.length; p++)
        u += this.decoder.write(this.initialBufs[p]);
      return this.initialBufs.length = this.initialBufsLen = 0, u;
    }
    return this.decoder.write(c);
  }, s.prototype.end = function() {
    if (!this.decoder) {
      var c = a(this.initialBufs, this.options.defaultEncoding);
      this.decoder = this.iconv.getDecoder(c, this.options);
      for (var l = "", u = 0; u < this.initialBufs.length; u++)
        l += this.decoder.write(this.initialBufs[u]);
      var p = this.decoder.end();
      return p && (l += p), this.initialBufs.length = this.initialBufsLen = 0, l;
    }
    return this.decoder.end();
  };
  function a(c, l) {
    var u = [], p = 0, d = 0, f = 0;
    e:
      for (var m = 0; m < c.length; m++)
        for (var h = c[m], g = 0; g < h.length; g++)
          if (u.push(h[g]), u.length === 2) {
            if (p === 0) {
              if (u[0] === 255 && u[1] === 254) return "utf-16le";
              if (u[0] === 254 && u[1] === 255) return "utf-16be";
            }
            if (u[0] === 0 && u[1] !== 0 && f++, u[0] !== 0 && u[1] === 0 && d++, u.length = 0, p++, p >= 100)
              break e;
          }
    return f > d ? "utf-16be" : f < d ? "utf-16le" : l || "utf-16le";
  }
  return ar;
}
var En = {}, au;
function tZ() {
  if (au) return En;
  au = 1;
  var t = Ot.Buffer;
  En.utf7 = e, En.unicode11utf7 = "utf7";
  function e(h, g) {
    this.iconv = g;
  }
  e.prototype.encoder = r, e.prototype.decoder = i, e.prototype.bomAware = !0;
  var n = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
  function r(h, g) {
    this.iconv = g.iconv;
  }
  r.prototype.write = function(h) {
    return t.from(h.replace(n, (function(g) {
      return "+" + (g === "+" ? "" : this.iconv.encode(g, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
    }).bind(this)));
  }, r.prototype.end = function() {
  };
  function i(h, g) {
    this.iconv = g.iconv, this.inBase64 = !1, this.base64Accum = "";
  }
  for (var o = /[A-Za-z0-9\/+]/, s = [], a = 0; a < 256; a++)
    s[a] = o.test(String.fromCharCode(a));
  var c = 43, l = 45, u = 38;
  i.prototype.write = function(h) {
    for (var g = "", T = 0, v = this.inBase64, b = this.base64Accum, w = 0; w < h.length; w++)
      if (!v)
        h[w] == c && (g += this.iconv.decode(h.slice(T, w), "ascii"), T = w + 1, v = !0);
      else if (!s[h[w]]) {
        if (w == T && h[w] == l)
          g += "+";
        else {
          var S = b + this.iconv.decode(h.slice(T, w), "ascii");
          g += this.iconv.decode(t.from(S, "base64"), "utf16-be");
        }
        h[w] != l && w--, T = w + 1, v = !1, b = "";
      }
    if (!v)
      g += this.iconv.decode(h.slice(T), "ascii");
    else {
      var S = b + this.iconv.decode(h.slice(T), "ascii"), D = S.length - S.length % 8;
      b = S.slice(D), S = S.slice(0, D), g += this.iconv.decode(t.from(S, "base64"), "utf16-be");
    }
    return this.inBase64 = v, this.base64Accum = b, g;
  }, i.prototype.end = function() {
    var h = "";
    return this.inBase64 && this.base64Accum.length > 0 && (h = this.iconv.decode(t.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", h;
  }, En.utf7imap = p;
  function p(h, g) {
    this.iconv = g;
  }
  p.prototype.encoder = d, p.prototype.decoder = f, p.prototype.bomAware = !0;
  function d(h, g) {
    this.iconv = g.iconv, this.inBase64 = !1, this.base64Accum = t.alloc(6), this.base64AccumIdx = 0;
  }
  d.prototype.write = function(h) {
    for (var g = this.inBase64, T = this.base64Accum, v = this.base64AccumIdx, b = t.alloc(h.length * 5 + 10), w = 0, S = 0; S < h.length; S++) {
      var D = h.charCodeAt(S);
      32 <= D && D <= 126 ? (g && (v > 0 && (w += b.write(T.slice(0, v).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), w), v = 0), b[w++] = l, g = !1), g || (b[w++] = D, D === u && (b[w++] = l))) : (g || (b[w++] = u, g = !0), g && (T[v++] = D >> 8, T[v++] = D & 255, v == T.length && (w += b.write(T.toString("base64").replace(/\//g, ","), w), v = 0)));
    }
    return this.inBase64 = g, this.base64AccumIdx = v, b.slice(0, w);
  }, d.prototype.end = function() {
    var h = t.alloc(10), g = 0;
    return this.inBase64 && (this.base64AccumIdx > 0 && (g += h.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), g), this.base64AccumIdx = 0), h[g++] = l, this.inBase64 = !1), h.slice(0, g);
  };
  function f(h, g) {
    this.iconv = g.iconv, this.inBase64 = !1, this.base64Accum = "";
  }
  var m = s.slice();
  return m[44] = !0, f.prototype.write = function(h) {
    for (var g = "", T = 0, v = this.inBase64, b = this.base64Accum, w = 0; w < h.length; w++)
      if (!v)
        h[w] == u && (g += this.iconv.decode(h.slice(T, w), "ascii"), T = w + 1, v = !0);
      else if (!m[h[w]]) {
        if (w == T && h[w] == l)
          g += "&";
        else {
          var S = b + this.iconv.decode(h.slice(T, w), "ascii").replace(/,/g, "/");
          g += this.iconv.decode(t.from(S, "base64"), "utf16-be");
        }
        h[w] != l && w--, T = w + 1, v = !1, b = "";
      }
    if (!v)
      g += this.iconv.decode(h.slice(T), "ascii");
    else {
      var S = b + this.iconv.decode(h.slice(T), "ascii").replace(/,/g, "/"), D = S.length - S.length % 8;
      b = S.slice(D), S = S.slice(0, D), g += this.iconv.decode(t.from(S, "base64"), "utf16-be");
    }
    return this.inBase64 = v, this.base64Accum = b, g;
  }, f.prototype.end = function() {
    var h = "";
    return this.inBase64 && this.base64Accum.length > 0 && (h = this.iconv.decode(t.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", h;
  }, En;
}
var wo = {}, cu;
function nZ() {
  if (cu) return wo;
  cu = 1;
  var t = Ot.Buffer;
  wo._sbcs = e;
  function e(i, o) {
    if (!i)
      throw new Error("SBCS codec is called without the data.");
    if (!i.chars || i.chars.length !== 128 && i.chars.length !== 256)
      throw new Error("Encoding '" + i.type + "' has incorrect 'chars' (must be of len 128 or 256)");
    if (i.chars.length === 128) {
      for (var s = "", a = 0; a < 128; a++)
        s += String.fromCharCode(a);
      i.chars = s + i.chars;
    }
    this.decodeBuf = t.from(i.chars, "ucs2");
    for (var c = t.alloc(65536, o.defaultCharSingleByte.charCodeAt(0)), a = 0; a < i.chars.length; a++)
      c[i.chars.charCodeAt(a)] = a;
    this.encodeBuf = c;
  }
  e.prototype.encoder = n, e.prototype.decoder = r;
  function n(i, o) {
    this.encodeBuf = o.encodeBuf;
  }
  n.prototype.write = function(i) {
    for (var o = t.alloc(i.length), s = 0; s < i.length; s++)
      o[s] = this.encodeBuf[i.charCodeAt(s)];
    return o;
  }, n.prototype.end = function() {
  };
  function r(i, o) {
    this.decodeBuf = o.decodeBuf;
  }
  return r.prototype.write = function(i) {
    for (var o = this.decodeBuf, s = t.alloc(i.length * 2), a = 0, c = 0, l = 0; l < i.length; l++)
      a = i[l] * 2, c = l * 2, s[c] = o[a], s[c + 1] = o[a + 1];
    return s.toString("ucs2");
  }, r.prototype.end = function() {
  }, wo;
}
var Eo, uu;
function rZ() {
  return uu || (uu = 1, Eo = {
    // Not supported by iconv, not sure why.
    10029: "maccenteuro",
    maccenteuro: {
      type: "_sbcs",
      chars: "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
    },
    808: "cp808",
    ibm808: "cp808",
    cp808: {
      type: "_sbcs",
      chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "
    },
    mik: {
      type: "_sbcs",
      chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    cp720: {
      type: "_sbcs",
      chars: "éâàçêëèïîّْô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡ًٌٍَُِ≈°∙·√ⁿ²■ "
    },
    // Aliases of generated encodings.
    ascii8bit: "ascii",
    usascii: "ascii",
    ansix34: "ascii",
    ansix341968: "ascii",
    ansix341986: "ascii",
    csascii: "ascii",
    cp367: "ascii",
    ibm367: "ascii",
    isoir6: "ascii",
    iso646us: "ascii",
    iso646irv: "ascii",
    us: "ascii",
    latin1: "iso88591",
    latin2: "iso88592",
    latin3: "iso88593",
    latin4: "iso88594",
    latin5: "iso88599",
    latin6: "iso885910",
    latin7: "iso885913",
    latin8: "iso885914",
    latin9: "iso885915",
    latin10: "iso885916",
    csisolatin1: "iso88591",
    csisolatin2: "iso88592",
    csisolatin3: "iso88593",
    csisolatin4: "iso88594",
    csisolatincyrillic: "iso88595",
    csisolatinarabic: "iso88596",
    csisolatingreek: "iso88597",
    csisolatinhebrew: "iso88598",
    csisolatin5: "iso88599",
    csisolatin6: "iso885910",
    l1: "iso88591",
    l2: "iso88592",
    l3: "iso88593",
    l4: "iso88594",
    l5: "iso88599",
    l6: "iso885910",
    l7: "iso885913",
    l8: "iso885914",
    l9: "iso885915",
    l10: "iso885916",
    isoir14: "iso646jp",
    isoir57: "iso646cn",
    isoir100: "iso88591",
    isoir101: "iso88592",
    isoir109: "iso88593",
    isoir110: "iso88594",
    isoir144: "iso88595",
    isoir127: "iso88596",
    isoir126: "iso88597",
    isoir138: "iso88598",
    isoir148: "iso88599",
    isoir157: "iso885910",
    isoir166: "tis620",
    isoir179: "iso885913",
    isoir199: "iso885914",
    isoir203: "iso885915",
    isoir226: "iso885916",
    cp819: "iso88591",
    ibm819: "iso88591",
    cyrillic: "iso88595",
    arabic: "iso88596",
    arabic8: "iso88596",
    ecma114: "iso88596",
    asmo708: "iso88596",
    greek: "iso88597",
    greek8: "iso88597",
    ecma118: "iso88597",
    elot928: "iso88597",
    hebrew: "iso88598",
    hebrew8: "iso88598",
    turkish: "iso88599",
    turkish8: "iso88599",
    thai: "iso885911",
    thai8: "iso885911",
    celtic: "iso885914",
    celtic8: "iso885914",
    isoceltic: "iso885914",
    tis6200: "tis620",
    tis62025291: "tis620",
    tis62025330: "tis620",
    1e4: "macroman",
    10006: "macgreek",
    10007: "maccyrillic",
    10079: "maciceland",
    10081: "macturkish",
    cspc8codepage437: "cp437",
    cspc775baltic: "cp775",
    cspc850multilingual: "cp850",
    cspcp852: "cp852",
    cspc862latinhebrew: "cp862",
    cpgr: "cp869",
    msee: "cp1250",
    mscyrl: "cp1251",
    msansi: "cp1252",
    msgreek: "cp1253",
    msturk: "cp1254",
    mshebr: "cp1255",
    msarab: "cp1256",
    winbaltrim: "cp1257",
    cp20866: "koi8r",
    20866: "koi8r",
    ibm878: "koi8r",
    cskoi8r: "koi8r",
    cp21866: "koi8u",
    21866: "koi8u",
    ibm1168: "koi8u",
    strk10482002: "rk1048",
    tcvn5712: "tcvn",
    tcvn57121: "tcvn",
    gb198880: "iso646cn",
    cn: "iso646cn",
    csiso14jisc6220ro: "iso646jp",
    jisc62201969ro: "iso646jp",
    jp: "iso646jp",
    cshproman8: "hproman8",
    r8: "hproman8",
    roman8: "hproman8",
    xroman8: "hproman8",
    ibm1051: "hproman8",
    mac: "macintosh",
    csmacintosh: "macintosh"
  }), Eo;
}
var To, lu;
function iZ() {
  return lu || (lu = 1, To = {
    437: "cp437",
    737: "cp737",
    775: "cp775",
    850: "cp850",
    852: "cp852",
    855: "cp855",
    856: "cp856",
    857: "cp857",
    858: "cp858",
    860: "cp860",
    861: "cp861",
    862: "cp862",
    863: "cp863",
    864: "cp864",
    865: "cp865",
    866: "cp866",
    869: "cp869",
    874: "windows874",
    922: "cp922",
    1046: "cp1046",
    1124: "cp1124",
    1125: "cp1125",
    1129: "cp1129",
    1133: "cp1133",
    1161: "cp1161",
    1162: "cp1162",
    1163: "cp1163",
    1250: "windows1250",
    1251: "windows1251",
    1252: "windows1252",
    1253: "windows1253",
    1254: "windows1254",
    1255: "windows1255",
    1256: "windows1256",
    1257: "windows1257",
    1258: "windows1258",
    28591: "iso88591",
    28592: "iso88592",
    28593: "iso88593",
    28594: "iso88594",
    28595: "iso88595",
    28596: "iso88596",
    28597: "iso88597",
    28598: "iso88598",
    28599: "iso88599",
    28600: "iso885910",
    28601: "iso885911",
    28603: "iso885913",
    28604: "iso885914",
    28605: "iso885915",
    28606: "iso885916",
    windows874: {
      type: "_sbcs",
      chars: "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    },
    win874: "windows874",
    cp874: "windows874",
    windows1250: {
      type: "_sbcs",
      chars: "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
    },
    win1250: "windows1250",
    cp1250: "windows1250",
    windows1251: {
      type: "_sbcs",
      chars: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
    },
    win1251: "windows1251",
    cp1251: "windows1251",
    windows1252: {
      type: "_sbcs",
      chars: "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    win1252: "windows1252",
    cp1252: "windows1252",
    windows1253: {
      type: "_sbcs",
      chars: "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
    },
    win1253: "windows1253",
    cp1253: "windows1253",
    windows1254: {
      type: "_sbcs",
      chars: "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
    },
    win1254: "windows1254",
    cp1254: "windows1254",
    windows1255: {
      type: "_sbcs",
      chars: "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
    },
    win1255: "windows1255",
    cp1255: "windows1255",
    windows1256: {
      type: "_sbcs",
      chars: "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
    },
    win1256: "windows1256",
    cp1256: "windows1256",
    windows1257: {
      type: "_sbcs",
      chars: "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
    },
    win1257: "windows1257",
    cp1257: "windows1257",
    windows1258: {
      type: "_sbcs",
      chars: "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
    },
    win1258: "windows1258",
    cp1258: "windows1258",
    iso88591: {
      type: "_sbcs",
      chars: " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    cp28591: "iso88591",
    iso88592: {
      type: "_sbcs",
      chars: " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
    },
    cp28592: "iso88592",
    iso88593: {
      type: "_sbcs",
      chars: " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
    },
    cp28593: "iso88593",
    iso88594: {
      type: "_sbcs",
      chars: " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
    },
    cp28594: "iso88594",
    iso88595: {
      type: "_sbcs",
      chars: " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
    },
    cp28595: "iso88595",
    iso88596: {
      type: "_sbcs",
      chars: " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
    },
    cp28596: "iso88596",
    iso88597: {
      type: "_sbcs",
      chars: " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
    },
    cp28597: "iso88597",
    iso88598: {
      type: "_sbcs",
      chars: " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
    },
    cp28598: "iso88598",
    iso88599: {
      type: "_sbcs",
      chars: " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
    },
    cp28599: "iso88599",
    iso885910: {
      type: "_sbcs",
      chars: " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
    },
    cp28600: "iso885910",
    iso885911: {
      type: "_sbcs",
      chars: " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    },
    cp28601: "iso885911",
    iso885913: {
      type: "_sbcs",
      chars: " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
    },
    cp28603: "iso885913",
    iso885914: {
      type: "_sbcs",
      chars: " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
    },
    cp28604: "iso885914",
    iso885915: {
      type: "_sbcs",
      chars: " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    cp28605: "iso885915",
    iso885916: {
      type: "_sbcs",
      chars: " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
    },
    cp28606: "iso885916",
    cp437: {
      type: "_sbcs",
      chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    ibm437: "cp437",
    csibm437: "cp437",
    cp737: {
      type: "_sbcs",
      chars: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "
    },
    ibm737: "cp737",
    csibm737: "cp737",
    cp775: {
      type: "_sbcs",
      chars: "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "
    },
    ibm775: "cp775",
    csibm775: "cp775",
    cp850: {
      type: "_sbcs",
      chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
    },
    ibm850: "cp850",
    csibm850: "cp850",
    cp852: {
      type: "_sbcs",
      chars: "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "
    },
    ibm852: "cp852",
    csibm852: "cp852",
    cp855: {
      type: "_sbcs",
      chars: "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "
    },
    ibm855: "cp855",
    csibm855: "cp855",
    cp856: {
      type: "_sbcs",
      chars: "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "
    },
    ibm856: "cp856",
    csibm856: "cp856",
    cp857: {
      type: "_sbcs",
      chars: "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "
    },
    ibm857: "cp857",
    csibm857: "cp857",
    cp858: {
      type: "_sbcs",
      chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
    },
    ibm858: "cp858",
    csibm858: "cp858",
    cp860: {
      type: "_sbcs",
      chars: "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    ibm860: "cp860",
    csibm860: "cp860",
    cp861: {
      type: "_sbcs",
      chars: "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    ibm861: "cp861",
    csibm861: "cp861",
    cp862: {
      type: "_sbcs",
      chars: "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    ibm862: "cp862",
    csibm862: "cp862",
    cp863: {
      type: "_sbcs",
      chars: "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    ibm863: "cp863",
    csibm863: "cp863",
    cp864: {
      type: "_sbcs",
      chars: `\0\x07\b	
\v\f\r\x1B !"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�`
    },
    ibm864: "cp864",
    csibm864: "cp864",
    cp865: {
      type: "_sbcs",
      chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    ibm865: "cp865",
    csibm865: "cp865",
    cp866: {
      type: "_sbcs",
      chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "
    },
    ibm866: "cp866",
    csibm866: "cp866",
    cp869: {
      type: "_sbcs",
      chars: "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "
    },
    ibm869: "cp869",
    csibm869: "cp869",
    cp922: {
      type: "_sbcs",
      chars: " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
    },
    ibm922: "cp922",
    csibm922: "cp922",
    cp1046: {
      type: "_sbcs",
      chars: "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
    },
    ibm1046: "cp1046",
    csibm1046: "cp1046",
    cp1124: {
      type: "_sbcs",
      chars: " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
    },
    ibm1124: "cp1124",
    csibm1124: "cp1124",
    cp1125: {
      type: "_sbcs",
      chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "
    },
    ibm1125: "cp1125",
    csibm1125: "cp1125",
    cp1129: {
      type: "_sbcs",
      chars: " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
    },
    ibm1129: "cp1129",
    csibm1129: "cp1129",
    cp1133: {
      type: "_sbcs",
      chars: " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
    },
    ibm1133: "cp1133",
    csibm1133: "cp1133",
    cp1161: {
      type: "_sbcs",
      chars: "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "
    },
    ibm1161: "cp1161",
    csibm1161: "cp1161",
    cp1162: {
      type: "_sbcs",
      chars: "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    },
    ibm1162: "cp1162",
    csibm1162: "cp1162",
    cp1163: {
      type: "_sbcs",
      chars: " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
    },
    ibm1163: "cp1163",
    csibm1163: "cp1163",
    maccroatian: {
      type: "_sbcs",
      chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
    },
    maccyrillic: {
      type: "_sbcs",
      chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
    },
    macgreek: {
      type: "_sbcs",
      chars: "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
    },
    maciceland: {
      type: "_sbcs",
      chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    },
    macroman: {
      type: "_sbcs",
      chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    },
    macromania: {
      type: "_sbcs",
      chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    },
    macthai: {
      type: "_sbcs",
      chars: "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู\uFEFF​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"
    },
    macturkish: {
      type: "_sbcs",
      chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
    },
    macukraine: {
      type: "_sbcs",
      chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
    },
    koi8r: {
      type: "_sbcs",
      chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    koi8u: {
      type: "_sbcs",
      chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    koi8ru: {
      type: "_sbcs",
      chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    koi8t: {
      type: "_sbcs",
      chars: "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    armscii8: {
      type: "_sbcs",
      chars: " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
    },
    rk1048: {
      type: "_sbcs",
      chars: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
    },
    tcvn: {
      type: "_sbcs",
      chars: `\0ÚỤỪỬỮ\x07\b	
\v\f\rỨỰỲỶỸÝỴ\x1B !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ`
    },
    georgianacademy: {
      type: "_sbcs",
      chars: "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    georgianps: {
      type: "_sbcs",
      chars: "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    pt154: {
      type: "_sbcs",
      chars: "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
    },
    viscii: {
      type: "_sbcs",
      chars: `\0ẲẴẪ\x07\b	
\v\f\rỶỸ\x1BỴ !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ`
    },
    iso646cn: {
      type: "_sbcs",
      chars: `\0\x07\b	
\v\f\r\x1B !"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������`
    },
    iso646jp: {
      type: "_sbcs",
      chars: `\0\x07\b	
\v\f\r\x1B !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_\`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������`
    },
    hproman8: {
      type: "_sbcs",
      chars: " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
    },
    macintosh: {
      type: "_sbcs",
      chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    },
    ascii: {
      type: "_sbcs",
      chars: "��������������������������������������������������������������������������������������������������������������������������������"
    },
    tis620: {
      type: "_sbcs",
      chars: "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    }
  }), To;
}
var So = {}, pu;
function oZ() {
  if (pu) return So;
  pu = 1;
  var t = Ot.Buffer;
  So._dbcs = c;
  for (var e = -1, n = -2, r = -10, i = -1e3, o = new Array(256), s = -1, a = 0; a < 256; a++)
    o[a] = e;
  function c(d, f) {
    if (this.encodingName = d.encodingName, !d)
      throw new Error("DBCS codec is called without the data.");
    if (!d.table)
      throw new Error("Encoding '" + this.encodingName + "' has no data.");
    var m = d.table();
    this.decodeTables = [], this.decodeTables[0] = o.slice(0), this.decodeTableSeq = [];
    for (var h = 0; h < m.length; h++)
      this._addDecodeChunk(m[h]);
    if (typeof d.gb18030 == "function") {
      this.gb18030 = d.gb18030();
      var g = this.decodeTables.length;
      this.decodeTables.push(o.slice(0));
      var T = this.decodeTables.length;
      this.decodeTables.push(o.slice(0));
      for (var v = this.decodeTables[0], h = 129; h <= 254; h++)
        for (var b = this.decodeTables[i - v[h]], w = 48; w <= 57; w++) {
          if (b[w] === e)
            b[w] = i - g;
          else if (b[w] > i)
            throw new Error("gb18030 decode tables conflict at byte 2");
          for (var S = this.decodeTables[i - b[w]], D = 129; D <= 254; D++) {
            if (S[D] === e)
              S[D] = i - T;
            else {
              if (S[D] === i - T)
                continue;
              if (S[D] > i)
                throw new Error("gb18030 decode tables conflict at byte 3");
            }
            for (var L = this.decodeTables[i - S[D]], N = 48; N <= 57; N++)
              L[N] === e && (L[N] = n);
          }
        }
    }
    this.defaultCharUnicode = f.defaultCharUnicode, this.encodeTable = [], this.encodeTableSeq = [];
    var y = {};
    if (d.encodeSkipVals)
      for (var h = 0; h < d.encodeSkipVals.length; h++) {
        var O = d.encodeSkipVals[h];
        if (typeof O == "number")
          y[O] = !0;
        else
          for (var w = O.from; w <= O.to; w++)
            y[w] = !0;
      }
    if (this._fillEncodeTable(0, 0, y), d.encodeAdd)
      for (var C in d.encodeAdd)
        Object.prototype.hasOwnProperty.call(d.encodeAdd, C) && this._setEncodeChar(C.charCodeAt(0), d.encodeAdd[C]);
    this.defCharSB = this.encodeTable[0][f.defaultCharSingleByte.charCodeAt(0)], this.defCharSB === e && (this.defCharSB = this.encodeTable[0]["?"]), this.defCharSB === e && (this.defCharSB = 63);
  }
  c.prototype.encoder = l, c.prototype.decoder = u, c.prototype._getDecodeTrieNode = function(d) {
    for (var f = []; d > 0; d >>>= 8)
      f.push(d & 255);
    f.length == 0 && f.push(0);
    for (var m = this.decodeTables[0], h = f.length - 1; h > 0; h--) {
      var g = m[f[h]];
      if (g == e)
        m[f[h]] = i - this.decodeTables.length, this.decodeTables.push(m = o.slice(0));
      else if (g <= i)
        m = this.decodeTables[i - g];
      else
        throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + d.toString(16));
    }
    return m;
  }, c.prototype._addDecodeChunk = function(d) {
    var f = parseInt(d[0], 16), m = this._getDecodeTrieNode(f);
    f = f & 255;
    for (var h = 1; h < d.length; h++) {
      var g = d[h];
      if (typeof g == "string")
        for (var T = 0; T < g.length; ) {
          var v = g.charCodeAt(T++);
          if (55296 <= v && v < 56320) {
            var b = g.charCodeAt(T++);
            if (56320 <= b && b < 57344)
              m[f++] = 65536 + (v - 55296) * 1024 + (b - 56320);
            else
              throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + d[0]);
          } else if (4080 < v && v <= 4095) {
            for (var w = 4095 - v + 2, S = [], D = 0; D < w; D++)
              S.push(g.charCodeAt(T++));
            m[f++] = r - this.decodeTableSeq.length, this.decodeTableSeq.push(S);
          } else
            m[f++] = v;
        }
      else if (typeof g == "number")
        for (var L = m[f - 1] + 1, T = 0; T < g; T++)
          m[f++] = L++;
      else
        throw new Error("Incorrect type '" + typeof g + "' given in " + this.encodingName + " at chunk " + d[0]);
    }
    if (f > 255)
      throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + d[0] + ": too long" + f);
  }, c.prototype._getEncodeBucket = function(d) {
    var f = d >> 8;
    return this.encodeTable[f] === void 0 && (this.encodeTable[f] = o.slice(0)), this.encodeTable[f];
  }, c.prototype._setEncodeChar = function(d, f) {
    var m = this._getEncodeBucket(d), h = d & 255;
    m[h] <= r ? this.encodeTableSeq[r - m[h]][s] = f : m[h] == e && (m[h] = f);
  }, c.prototype._setEncodeSequence = function(d, f) {
    var m = d[0], h = this._getEncodeBucket(m), g = m & 255, T;
    h[g] <= r ? T = this.encodeTableSeq[r - h[g]] : (T = {}, h[g] !== e && (T[s] = h[g]), h[g] = r - this.encodeTableSeq.length, this.encodeTableSeq.push(T));
    for (var v = 1; v < d.length - 1; v++) {
      var b = T[m];
      typeof b == "object" ? T = b : (T = T[m] = {}, b !== void 0 && (T[s] = b));
    }
    m = d[d.length - 1], T[m] = f;
  }, c.prototype._fillEncodeTable = function(d, f, m) {
    for (var h = this.decodeTables[d], g = !1, T = {}, v = 0; v < 256; v++) {
      var b = h[v], w = f + v;
      if (!m[w])
        if (b >= 0)
          this._setEncodeChar(b, w), g = !0;
        else if (b <= i) {
          var S = i - b;
          if (!T[S]) {
            var D = w << 8 >>> 0;
            this._fillEncodeTable(S, D, m) ? g = !0 : T[S] = !0;
          }
        } else b <= r && (this._setEncodeSequence(this.decodeTableSeq[r - b], w), g = !0);
    }
    return g;
  };
  function l(d, f) {
    this.leadSurrogate = -1, this.seqObj = void 0, this.encodeTable = f.encodeTable, this.encodeTableSeq = f.encodeTableSeq, this.defaultCharSingleByte = f.defCharSB, this.gb18030 = f.gb18030;
  }
  l.prototype.write = function(d) {
    for (var f = t.alloc(d.length * (this.gb18030 ? 4 : 3)), m = this.leadSurrogate, h = this.seqObj, g = -1, T = 0, v = 0; ; ) {
      if (g === -1) {
        if (T == d.length) break;
        var b = d.charCodeAt(T++);
      } else {
        var b = g;
        g = -1;
      }
      if (55296 <= b && b < 57344)
        if (b < 56320)
          if (m === -1) {
            m = b;
            continue;
          } else
            m = b, b = e;
        else
          m !== -1 ? (b = 65536 + (m - 55296) * 1024 + (b - 56320), m = -1) : b = e;
      else m !== -1 && (g = b, b = e, m = -1);
      var w = e;
      if (h !== void 0 && b != e) {
        var S = h[b];
        if (typeof S == "object") {
          h = S;
          continue;
        } else typeof S == "number" ? w = S : S == null && (S = h[s], S !== void 0 && (w = S, g = b));
        h = void 0;
      } else if (b >= 0) {
        var D = this.encodeTable[b >> 8];
        if (D !== void 0 && (w = D[b & 255]), w <= r) {
          h = this.encodeTableSeq[r - w];
          continue;
        }
        if (w == e && this.gb18030) {
          var L = p(this.gb18030.uChars, b);
          if (L != -1) {
            var w = this.gb18030.gbChars[L] + (b - this.gb18030.uChars[L]);
            f[v++] = 129 + Math.floor(w / 12600), w = w % 12600, f[v++] = 48 + Math.floor(w / 1260), w = w % 1260, f[v++] = 129 + Math.floor(w / 10), w = w % 10, f[v++] = 48 + w;
            continue;
          }
        }
      }
      w === e && (w = this.defaultCharSingleByte), w < 256 ? f[v++] = w : w < 65536 ? (f[v++] = w >> 8, f[v++] = w & 255) : w < 16777216 ? (f[v++] = w >> 16, f[v++] = w >> 8 & 255, f[v++] = w & 255) : (f[v++] = w >>> 24, f[v++] = w >>> 16 & 255, f[v++] = w >>> 8 & 255, f[v++] = w & 255);
    }
    return this.seqObj = h, this.leadSurrogate = m, f.slice(0, v);
  }, l.prototype.end = function() {
    if (!(this.leadSurrogate === -1 && this.seqObj === void 0)) {
      var d = t.alloc(10), f = 0;
      if (this.seqObj) {
        var m = this.seqObj[s];
        m !== void 0 && (m < 256 ? d[f++] = m : (d[f++] = m >> 8, d[f++] = m & 255)), this.seqObj = void 0;
      }
      return this.leadSurrogate !== -1 && (d[f++] = this.defaultCharSingleByte, this.leadSurrogate = -1), d.slice(0, f);
    }
  }, l.prototype.findIdx = p;
  function u(d, f) {
    this.nodeIdx = 0, this.prevBytes = [], this.decodeTables = f.decodeTables, this.decodeTableSeq = f.decodeTableSeq, this.defaultCharUnicode = f.defaultCharUnicode, this.gb18030 = f.gb18030;
  }
  u.prototype.write = function(d) {
    for (var f = t.alloc(d.length * 2), m = this.nodeIdx, h = this.prevBytes, g = this.prevBytes.length, T = -this.prevBytes.length, v, b = 0, w = 0; b < d.length; b++) {
      var S = b >= 0 ? d[b] : h[b + g], v = this.decodeTables[m][S];
      if (!(v >= 0)) if (v === e)
        v = this.defaultCharUnicode.charCodeAt(0), b = T;
      else if (v === n) {
        if (b >= 3)
          var D = (d[b - 3] - 129) * 12600 + (d[b - 2] - 48) * 1260 + (d[b - 1] - 129) * 10 + (S - 48);
        else
          var D = (h[b - 3 + g] - 129) * 12600 + ((b - 2 >= 0 ? d[b - 2] : h[b - 2 + g]) - 48) * 1260 + ((b - 1 >= 0 ? d[b - 1] : h[b - 1 + g]) - 129) * 10 + (S - 48);
        var L = p(this.gb18030.gbChars, D);
        v = this.gb18030.uChars[L] + D - this.gb18030.gbChars[L];
      } else if (v <= i) {
        m = i - v;
        continue;
      } else if (v <= r) {
        for (var N = this.decodeTableSeq[r - v], y = 0; y < N.length - 1; y++)
          v = N[y], f[w++] = v & 255, f[w++] = v >> 8;
        v = N[N.length - 1];
      } else
        throw new Error("iconv-lite internal error: invalid decoding table value " + v + " at " + m + "/" + S);
      if (v >= 65536) {
        v -= 65536;
        var O = 55296 | v >> 10;
        f[w++] = O & 255, f[w++] = O >> 8, v = 56320 | v & 1023;
      }
      f[w++] = v & 255, f[w++] = v >> 8, m = 0, T = b + 1;
    }
    return this.nodeIdx = m, this.prevBytes = T >= 0 ? Array.prototype.slice.call(d, T) : h.slice(T + g).concat(Array.prototype.slice.call(d)), f.slice(0, w).toString("ucs2");
  }, u.prototype.end = function() {
    for (var d = ""; this.prevBytes.length > 0; ) {
      d += this.defaultCharUnicode;
      var f = this.prevBytes.slice(1);
      this.prevBytes = [], this.nodeIdx = 0, f.length > 0 && (d += this.write(f));
    }
    return this.prevBytes = [], this.nodeIdx = 0, d;
  };
  function p(d, f) {
    if (d[0] > f)
      return -1;
    for (var m = 0, h = d.length; m < h - 1; ) {
      var g = m + (h - m + 1 >> 1);
      d[g] <= f ? m = g : h = g;
    }
    return m;
  }
  return So;
}
const sZ = [
  [
    "0",
    "\0",
    128
  ],
  [
    "a1",
    "｡",
    62
  ],
  [
    "8140",
    "　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",
    9,
    "＋－±×"
  ],
  [
    "8180",
    "÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"
  ],
  [
    "81b8",
    "∈∋⊆⊇⊂⊃∪∩"
  ],
  [
    "81c8",
    "∧∨￢⇒⇔∀∃"
  ],
  [
    "81da",
    "∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"
  ],
  [
    "81f0",
    "Å‰♯♭♪†‡¶"
  ],
  [
    "81fc",
    "◯"
  ],
  [
    "824f",
    "０",
    9
  ],
  [
    "8260",
    "Ａ",
    25
  ],
  [
    "8281",
    "ａ",
    25
  ],
  [
    "829f",
    "ぁ",
    82
  ],
  [
    "8340",
    "ァ",
    62
  ],
  [
    "8380",
    "ム",
    22
  ],
  [
    "839f",
    "Α",
    16,
    "Σ",
    6
  ],
  [
    "83bf",
    "α",
    16,
    "σ",
    6
  ],
  [
    "8440",
    "А",
    5,
    "ЁЖ",
    25
  ],
  [
    "8470",
    "а",
    5,
    "ёж",
    7
  ],
  [
    "8480",
    "о",
    17
  ],
  [
    "849f",
    "─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"
  ],
  [
    "8740",
    "①",
    19,
    "Ⅰ",
    9
  ],
  [
    "875f",
    "㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"
  ],
  [
    "877e",
    "㍻"
  ],
  [
    "8780",
    "〝〟№㏍℡㊤",
    4,
    "㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"
  ],
  [
    "889f",
    "亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"
  ],
  [
    "8940",
    "院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円"
  ],
  [
    "8980",
    "園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"
  ],
  [
    "8a40",
    "魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫"
  ],
  [
    "8a80",
    "橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"
  ],
  [
    "8b40",
    "機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救"
  ],
  [
    "8b80",
    "朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"
  ],
  [
    "8c40",
    "掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨"
  ],
  [
    "8c80",
    "劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"
  ],
  [
    "8d40",
    "后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降"
  ],
  [
    "8d80",
    "項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"
  ],
  [
    "8e40",
    "察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止"
  ],
  [
    "8e80",
    "死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"
  ],
  [
    "8f40",
    "宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳"
  ],
  [
    "8f80",
    "準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"
  ],
  [
    "9040",
    "拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨"
  ],
  [
    "9080",
    "逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"
  ],
  [
    "9140",
    "繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻"
  ],
  [
    "9180",
    "操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"
  ],
  [
    "9240",
    "叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄"
  ],
  [
    "9280",
    "逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"
  ],
  [
    "9340",
    "邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬"
  ],
  [
    "9380",
    "凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"
  ],
  [
    "9440",
    "如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅"
  ],
  [
    "9480",
    "楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"
  ],
  [
    "9540",
    "鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷"
  ],
  [
    "9580",
    "斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"
  ],
  [
    "9640",
    "法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆"
  ],
  [
    "9680",
    "摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"
  ],
  [
    "9740",
    "諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲"
  ],
  [
    "9780",
    "沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"
  ],
  [
    "9840",
    "蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"
  ],
  [
    "989f",
    "弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"
  ],
  [
    "9940",
    "僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭"
  ],
  [
    "9980",
    "凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"
  ],
  [
    "9a40",
    "咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸"
  ],
  [
    "9a80",
    "噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"
  ],
  [
    "9b40",
    "奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀"
  ],
  [
    "9b80",
    "它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"
  ],
  [
    "9c40",
    "廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠"
  ],
  [
    "9c80",
    "怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"
  ],
  [
    "9d40",
    "戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫"
  ],
  [
    "9d80",
    "捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"
  ],
  [
    "9e40",
    "曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎"
  ],
  [
    "9e80",
    "梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"
  ],
  [
    "9f40",
    "檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯"
  ],
  [
    "9f80",
    "麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"
  ],
  [
    "e040",
    "漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝"
  ],
  [
    "e080",
    "烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"
  ],
  [
    "e140",
    "瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿"
  ],
  [
    "e180",
    "痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"
  ],
  [
    "e240",
    "磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰"
  ],
  [
    "e280",
    "窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"
  ],
  [
    "e340",
    "紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷"
  ],
  [
    "e380",
    "縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"
  ],
  [
    "e440",
    "隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤"
  ],
  [
    "e480",
    "艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"
  ],
  [
    "e540",
    "蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬"
  ],
  [
    "e580",
    "蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"
  ],
  [
    "e640",
    "襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧"
  ],
  [
    "e680",
    "諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"
  ],
  [
    "e740",
    "蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜"
  ],
  [
    "e780",
    "轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"
  ],
  [
    "e840",
    "錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙"
  ],
  [
    "e880",
    "閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"
  ],
  [
    "e940",
    "顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃"
  ],
  [
    "e980",
    "騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"
  ],
  [
    "ea40",
    "鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯"
  ],
  [
    "ea80",
    "黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙"
  ],
  [
    "ed40",
    "纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏"
  ],
  [
    "ed80",
    "塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"
  ],
  [
    "ee40",
    "犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙"
  ],
  [
    "ee80",
    "蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
  ],
  [
    "eeef",
    "ⅰ",
    9,
    "￢￤＇＂"
  ],
  [
    "f040",
    "",
    62
  ],
  [
    "f080",
    "",
    124
  ],
  [
    "f140",
    "",
    62
  ],
  [
    "f180",
    "",
    124
  ],
  [
    "f240",
    "",
    62
  ],
  [
    "f280",
    "",
    124
  ],
  [
    "f340",
    "",
    62
  ],
  [
    "f380",
    "",
    124
  ],
  [
    "f440",
    "",
    62
  ],
  [
    "f480",
    "",
    124
  ],
  [
    "f540",
    "",
    62
  ],
  [
    "f580",
    "",
    124
  ],
  [
    "f640",
    "",
    62
  ],
  [
    "f680",
    "",
    124
  ],
  [
    "f740",
    "",
    62
  ],
  [
    "f780",
    "",
    124
  ],
  [
    "f840",
    "",
    62
  ],
  [
    "f880",
    "",
    124
  ],
  [
    "f940",
    ""
  ],
  [
    "fa40",
    "ⅰ",
    9,
    "Ⅰ",
    9,
    "￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊"
  ],
  [
    "fa80",
    "兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯"
  ],
  [
    "fb40",
    "涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神"
  ],
  [
    "fb80",
    "祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙"
  ],
  [
    "fc40",
    "髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
  ]
], aZ = [
  [
    "0",
    "\0",
    127
  ],
  [
    "8ea1",
    "｡",
    62
  ],
  [
    "a1a1",
    "　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",
    9,
    "＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇"
  ],
  [
    "a2a1",
    "◆□■△▲▽▼※〒→←↑↓〓"
  ],
  [
    "a2ba",
    "∈∋⊆⊇⊂⊃∪∩"
  ],
  [
    "a2ca",
    "∧∨￢⇒⇔∀∃"
  ],
  [
    "a2dc",
    "∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"
  ],
  [
    "a2f2",
    "Å‰♯♭♪†‡¶"
  ],
  [
    "a2fe",
    "◯"
  ],
  [
    "a3b0",
    "０",
    9
  ],
  [
    "a3c1",
    "Ａ",
    25
  ],
  [
    "a3e1",
    "ａ",
    25
  ],
  [
    "a4a1",
    "ぁ",
    82
  ],
  [
    "a5a1",
    "ァ",
    85
  ],
  [
    "a6a1",
    "Α",
    16,
    "Σ",
    6
  ],
  [
    "a6c1",
    "α",
    16,
    "σ",
    6
  ],
  [
    "a7a1",
    "А",
    5,
    "ЁЖ",
    25
  ],
  [
    "a7d1",
    "а",
    5,
    "ёж",
    25
  ],
  [
    "a8a1",
    "─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"
  ],
  [
    "ada1",
    "①",
    19,
    "Ⅰ",
    9
  ],
  [
    "adc0",
    "㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"
  ],
  [
    "addf",
    "㍻〝〟№㏍℡㊤",
    4,
    "㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"
  ],
  [
    "b0a1",
    "亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"
  ],
  [
    "b1a1",
    "院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応"
  ],
  [
    "b2a1",
    "押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"
  ],
  [
    "b3a1",
    "魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱"
  ],
  [
    "b4a1",
    "粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"
  ],
  [
    "b5a1",
    "機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京"
  ],
  [
    "b6a1",
    "供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"
  ],
  [
    "b7a1",
    "掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲"
  ],
  [
    "b8a1",
    "検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"
  ],
  [
    "b9a1",
    "后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込"
  ],
  [
    "baa1",
    "此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"
  ],
  [
    "bba1",
    "察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時"
  ],
  [
    "bca1",
    "次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"
  ],
  [
    "bda1",
    "宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償"
  ],
  [
    "bea1",
    "勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"
  ],
  [
    "bfa1",
    "拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾"
  ],
  [
    "c0a1",
    "澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"
  ],
  [
    "c1a1",
    "繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎"
  ],
  [
    "c2a1",
    "臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"
  ],
  [
    "c3a1",
    "叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵"
  ],
  [
    "c4a1",
    "帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"
  ],
  [
    "c5a1",
    "邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到"
  ],
  [
    "c6a1",
    "董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"
  ],
  [
    "c7a1",
    "如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦"
  ],
  [
    "c8a1",
    "函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"
  ],
  [
    "c9a1",
    "鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服"
  ],
  [
    "caa1",
    "福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"
  ],
  [
    "cba1",
    "法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満"
  ],
  [
    "cca1",
    "漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"
  ],
  [
    "cda1",
    "諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃"
  ],
  [
    "cea1",
    "痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"
  ],
  [
    "cfa1",
    "蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"
  ],
  [
    "d0a1",
    "弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"
  ],
  [
    "d1a1",
    "僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨"
  ],
  [
    "d2a1",
    "辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"
  ],
  [
    "d3a1",
    "咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉"
  ],
  [
    "d4a1",
    "圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"
  ],
  [
    "d5a1",
    "奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓"
  ],
  [
    "d6a1",
    "屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"
  ],
  [
    "d7a1",
    "廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚"
  ],
  [
    "d8a1",
    "悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"
  ],
  [
    "d9a1",
    "戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼"
  ],
  [
    "daa1",
    "據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"
  ],
  [
    "dba1",
    "曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍"
  ],
  [
    "dca1",
    "棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"
  ],
  [
    "dda1",
    "檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾"
  ],
  [
    "dea1",
    "沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"
  ],
  [
    "dfa1",
    "漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼"
  ],
  [
    "e0a1",
    "燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"
  ],
  [
    "e1a1",
    "瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰"
  ],
  [
    "e2a1",
    "癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"
  ],
  [
    "e3a1",
    "磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐"
  ],
  [
    "e4a1",
    "筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"
  ],
  [
    "e5a1",
    "紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺"
  ],
  [
    "e6a1",
    "罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"
  ],
  [
    "e7a1",
    "隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙"
  ],
  [
    "e8a1",
    "茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"
  ],
  [
    "e9a1",
    "蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙"
  ],
  [
    "eaa1",
    "蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"
  ],
  [
    "eba1",
    "襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫"
  ],
  [
    "eca1",
    "譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"
  ],
  [
    "eda1",
    "蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸"
  ],
  [
    "eea1",
    "遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"
  ],
  [
    "efa1",
    "錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞"
  ],
  [
    "f0a1",
    "陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"
  ],
  [
    "f1a1",
    "顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷"
  ],
  [
    "f2a1",
    "髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"
  ],
  [
    "f3a1",
    "鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠"
  ],
  [
    "f4a1",
    "堯槇遙瑤凜熙"
  ],
  [
    "f9a1",
    "纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德"
  ],
  [
    "faa1",
    "忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"
  ],
  [
    "fba1",
    "犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚"
  ],
  [
    "fca1",
    "釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
  ],
  [
    "fcf1",
    "ⅰ",
    9,
    "￢￤＇＂"
  ],
  [
    "8fa2af",
    "˘ˇ¸˙˝¯˛˚～΄΅"
  ],
  [
    "8fa2c2",
    "¡¦¿"
  ],
  [
    "8fa2eb",
    "ºª©®™¤№"
  ],
  [
    "8fa6e1",
    "ΆΈΉΊΪ"
  ],
  [
    "8fa6e7",
    "Ό"
  ],
  [
    "8fa6e9",
    "ΎΫ"
  ],
  [
    "8fa6ec",
    "Ώ"
  ],
  [
    "8fa6f1",
    "άέήίϊΐόςύϋΰώ"
  ],
  [
    "8fa7c2",
    "Ђ",
    10,
    "ЎЏ"
  ],
  [
    "8fa7f2",
    "ђ",
    10,
    "ўџ"
  ],
  [
    "8fa9a1",
    "ÆĐ"
  ],
  [
    "8fa9a4",
    "Ħ"
  ],
  [
    "8fa9a6",
    "Ĳ"
  ],
  [
    "8fa9a8",
    "ŁĿ"
  ],
  [
    "8fa9ab",
    "ŊØŒ"
  ],
  [
    "8fa9af",
    "ŦÞ"
  ],
  [
    "8fa9c1",
    "æđðħıĳĸłŀŉŋøœßŧþ"
  ],
  [
    "8faaa1",
    "ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ"
  ],
  [
    "8faaba",
    "ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ"
  ],
  [
    "8faba1",
    "áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ"
  ],
  [
    "8fabbd",
    "ġĥíìïîǐ"
  ],
  [
    "8fabc5",
    "īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż"
  ],
  [
    "8fb0a1",
    "丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄"
  ],
  [
    "8fb1a1",
    "侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐"
  ],
  [
    "8fb2a1",
    "傒傓傔傖傛傜傞",
    4,
    "傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂"
  ],
  [
    "8fb3a1",
    "凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋"
  ],
  [
    "8fb4a1",
    "匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿"
  ],
  [
    "8fb5a1",
    "咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒"
  ],
  [
    "8fb6a1",
    "嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍",
    5,
    "嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤",
    4,
    "囱囫园"
  ],
  [
    "8fb7a1",
    "囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭",
    4,
    "坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡"
  ],
  [
    "8fb8a1",
    "堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭"
  ],
  [
    "8fb9a1",
    "奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿"
  ],
  [
    "8fbaa1",
    "嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖",
    4,
    "寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩"
  ],
  [
    "8fbba1",
    "屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤"
  ],
  [
    "8fbca1",
    "巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪",
    4,
    "幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧"
  ],
  [
    "8fbda1",
    "彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐",
    4,
    "忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷"
  ],
  [
    "8fbea1",
    "悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐",
    4,
    "愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥"
  ],
  [
    "8fbfa1",
    "懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵"
  ],
  [
    "8fc0a1",
    "捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿"
  ],
  [
    "8fc1a1",
    "擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝"
  ],
  [
    "8fc2a1",
    "昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝"
  ],
  [
    "8fc3a1",
    "杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮",
    4,
    "桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏"
  ],
  [
    "8fc4a1",
    "棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲"
  ],
  [
    "8fc5a1",
    "樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽"
  ],
  [
    "8fc6a1",
    "歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖"
  ],
  [
    "8fc7a1",
    "泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞"
  ],
  [
    "8fc8a1",
    "湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊"
  ],
  [
    "8fc9a1",
    "濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔",
    4,
    "炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃",
    4,
    "焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠"
  ],
  [
    "8fcaa1",
    "煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻"
  ],
  [
    "8fcba1",
    "狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽"
  ],
  [
    "8fcca1",
    "珿琀琁琄琇琊琑琚琛琤琦琨",
    9,
    "琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆"
  ],
  [
    "8fcda1",
    "甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹",
    5,
    "疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹"
  ],
  [
    "8fcea1",
    "瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢",
    6,
    "皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢"
  ],
  [
    "8fcfa1",
    "睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳"
  ],
  [
    "8fd0a1",
    "碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞"
  ],
  [
    "8fd1a1",
    "秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰"
  ],
  [
    "8fd2a1",
    "笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙",
    5
  ],
  [
    "8fd3a1",
    "籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝"
  ],
  [
    "8fd4a1",
    "綞綦綧綪綳綶綷綹緂",
    4,
    "緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭"
  ],
  [
    "8fd5a1",
    "罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮"
  ],
  [
    "8fd6a1",
    "胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆"
  ],
  [
    "8fd7a1",
    "艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸"
  ],
  [
    "8fd8a1",
    "荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓"
  ],
  [
    "8fd9a1",
    "蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏",
    4,
    "蕖蕙蕜",
    6,
    "蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼"
  ],
  [
    "8fdaa1",
    "藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠",
    4,
    "虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣"
  ],
  [
    "8fdba1",
    "蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃",
    6,
    "螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵"
  ],
  [
    "8fdca1",
    "蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊",
    4,
    "裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺"
  ],
  [
    "8fdda1",
    "襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔",
    4,
    "觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳"
  ],
  [
    "8fdea1",
    "誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂",
    4,
    "譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆"
  ],
  [
    "8fdfa1",
    "貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢"
  ],
  [
    "8fe0a1",
    "踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁"
  ],
  [
    "8fe1a1",
    "轃轇轏轑",
    4,
    "轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃"
  ],
  [
    "8fe2a1",
    "郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿"
  ],
  [
    "8fe3a1",
    "釂釃釅釓釔釗釙釚釞釤釥釩釪釬",
    5,
    "釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵",
    4,
    "鉻鉼鉽鉿銈銉銊銍銎銒銗"
  ],
  [
    "8fe4a1",
    "銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿",
    4,
    "鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶"
  ],
  [
    "8fe5a1",
    "鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉",
    4,
    "鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹"
  ],
  [
    "8fe6a1",
    "镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂"
  ],
  [
    "8fe7a1",
    "霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦"
  ],
  [
    "8fe8a1",
    "頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱",
    4,
    "餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵"
  ],
  [
    "8fe9a1",
    "馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿",
    4
  ],
  [
    "8feaa1",
    "鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪",
    4,
    "魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸"
  ],
  [
    "8feba1",
    "鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦",
    4,
    "鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻"
  ],
  [
    "8feca1",
    "鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵"
  ],
  [
    "8feda1",
    "黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃",
    4,
    "齓齕齖齗齘齚齝齞齨齩齭",
    4,
    "齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥"
  ]
], _o = [
  [
    "0",
    "\0",
    127,
    "€"
  ],
  [
    "8140",
    "丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪",
    5,
    "乲乴",
    9,
    "乿",
    6,
    "亇亊"
  ],
  [
    "8180",
    "亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂",
    6,
    "伋伌伒",
    4,
    "伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾",
    4,
    "佄佅佇",
    5,
    "佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢"
  ],
  [
    "8240",
    "侤侫侭侰",
    4,
    "侶",
    8,
    "俀俁係俆俇俈俉俋俌俍俒",
    4,
    "俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿",
    11
  ],
  [
    "8280",
    "個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯",
    10,
    "倻倽倿偀偁偂偄偅偆偉偊偋偍偐",
    4,
    "偖偗偘偙偛偝",
    7,
    "偦",
    5,
    "偭",
    8,
    "偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎",
    20,
    "傤傦傪傫傭",
    4,
    "傳",
    6,
    "傼"
  ],
  [
    "8340",
    "傽",
    17,
    "僐",
    5,
    "僗僘僙僛",
    10,
    "僨僩僪僫僯僰僱僲僴僶",
    4,
    "僼",
    9,
    "儈"
  ],
  [
    "8380",
    "儉儊儌",
    5,
    "儓",
    13,
    "儢",
    28,
    "兂兇兊兌兎兏児兒兓兗兘兙兛兝",
    4,
    "兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦",
    4,
    "冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒",
    5
  ],
  [
    "8440",
    "凘凙凚凜凞凟凢凣凥",
    5,
    "凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄",
    5,
    "剋剎剏剒剓剕剗剘"
  ],
  [
    "8480",
    "剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳",
    9,
    "剾劀劃",
    4,
    "劉",
    6,
    "劑劒劔",
    6,
    "劜劤劥劦劧劮劯劰労",
    9,
    "勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務",
    5,
    "勠勡勢勣勥",
    10,
    "勱",
    7,
    "勻勼勽匁匂匃匄匇匉匊匋匌匎"
  ],
  [
    "8540",
    "匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯",
    9,
    "匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏"
  ],
  [
    "8580",
    "厐",
    4,
    "厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯",
    6,
    "厷厸厹厺厼厽厾叀參",
    4,
    "収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝",
    4,
    "呣呥呧呩",
    7,
    "呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡"
  ],
  [
    "8640",
    "咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠",
    4,
    "哫哬哯哰哱哴",
    5,
    "哻哾唀唂唃唄唅唈唊",
    4,
    "唒唓唕",
    5,
    "唜唝唞唟唡唥唦"
  ],
  [
    "8680",
    "唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋",
    4,
    "啑啒啓啔啗",
    4,
    "啝啞啟啠啢啣啨啩啫啯",
    5,
    "啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠",
    6,
    "喨",
    8,
    "喲喴営喸喺喼喿",
    4,
    "嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗",
    4,
    "嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸",
    4,
    "嗿嘂嘃嘄嘅"
  ],
  [
    "8740",
    "嘆嘇嘊嘋嘍嘐",
    7,
    "嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀",
    11,
    "噏",
    4,
    "噕噖噚噛噝",
    4
  ],
  [
    "8780",
    "噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽",
    7,
    "嚇",
    6,
    "嚐嚑嚒嚔",
    14,
    "嚤",
    10,
    "嚰",
    6,
    "嚸嚹嚺嚻嚽",
    12,
    "囋",
    8,
    "囕囖囘囙囜団囥",
    5,
    "囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國",
    6
  ],
  [
    "8840",
    "園",
    9,
    "圝圞圠圡圢圤圥圦圧圫圱圲圴",
    4,
    "圼圽圿坁坃坄坅坆坈坉坋坒",
    4,
    "坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀"
  ],
  [
    "8880",
    "垁垇垈垉垊垍",
    4,
    "垔",
    6,
    "垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹",
    8,
    "埄",
    6,
    "埌埍埐埑埓埖埗埛埜埞埡埢埣埥",
    7,
    "埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥",
    4,
    "堫",
    4,
    "報堲堳場堶",
    7
  ],
  [
    "8940",
    "堾",
    5,
    "塅",
    6,
    "塎塏塐塒塓塕塖塗塙",
    4,
    "塟",
    5,
    "塦",
    4,
    "塭",
    16,
    "塿墂墄墆墇墈墊墋墌"
  ],
  [
    "8980",
    "墍",
    4,
    "墔",
    4,
    "墛墜墝墠",
    7,
    "墪",
    17,
    "墽墾墿壀壂壃壄壆",
    10,
    "壒壓壔壖",
    13,
    "壥",
    5,
    "壭壯壱売壴壵壷壸壺",
    7,
    "夃夅夆夈",
    4,
    "夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻"
  ],
  [
    "8a40",
    "夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛",
    4,
    "奡奣奤奦",
    12,
    "奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦"
  ],
  [
    "8a80",
    "妧妬妭妰妱妳",
    5,
    "妺妼妽妿",
    6,
    "姇姈姉姌姍姎姏姕姖姙姛姞",
    4,
    "姤姦姧姩姪姫姭",
    11,
    "姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪",
    6,
    "娳娵娷",
    4,
    "娽娾娿婁",
    4,
    "婇婈婋",
    9,
    "婖婗婘婙婛",
    5
  ],
  [
    "8b40",
    "婡婣婤婥婦婨婩婫",
    8,
    "婸婹婻婼婽婾媀",
    17,
    "媓",
    6,
    "媜",
    13,
    "媫媬"
  ],
  [
    "8b80",
    "媭",
    4,
    "媴媶媷媹",
    4,
    "媿嫀嫃",
    5,
    "嫊嫋嫍",
    4,
    "嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬",
    4,
    "嫲",
    22,
    "嬊",
    11,
    "嬘",
    25,
    "嬳嬵嬶嬸",
    7,
    "孁",
    6
  ],
  [
    "8c40",
    "孈",
    7,
    "孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏"
  ],
  [
    "8c80",
    "寑寔",
    8,
    "寠寢寣實寧審",
    4,
    "寯寱",
    6,
    "寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧",
    6,
    "屰屲",
    6,
    "屻屼屽屾岀岃",
    4,
    "岉岊岋岎岏岒岓岕岝",
    4,
    "岤",
    4
  ],
  [
    "8d40",
    "岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅",
    5,
    "峌",
    5,
    "峓",
    5,
    "峚",
    6,
    "峢峣峧峩峫峬峮峯峱",
    9,
    "峼",
    4
  ],
  [
    "8d80",
    "崁崄崅崈",
    5,
    "崏",
    4,
    "崕崗崘崙崚崜崝崟",
    4,
    "崥崨崪崫崬崯",
    4,
    "崵",
    7,
    "崿",
    7,
    "嵈嵉嵍",
    10,
    "嵙嵚嵜嵞",
    10,
    "嵪嵭嵮嵰嵱嵲嵳嵵",
    12,
    "嶃",
    21,
    "嶚嶛嶜嶞嶟嶠"
  ],
  [
    "8e40",
    "嶡",
    21,
    "嶸",
    12,
    "巆",
    6,
    "巎",
    12,
    "巜巟巠巣巤巪巬巭"
  ],
  [
    "8e80",
    "巰巵巶巸",
    4,
    "巿帀帄帇帉帊帋帍帎帒帓帗帞",
    7,
    "帨",
    4,
    "帯帰帲",
    4,
    "帹帺帾帿幀幁幃幆",
    5,
    "幍",
    6,
    "幖",
    4,
    "幜幝幟幠幣",
    14,
    "幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨",
    4,
    "庮",
    4,
    "庴庺庻庼庽庿",
    6
  ],
  [
    "8f40",
    "廆廇廈廋",
    5,
    "廔廕廗廘廙廚廜",
    11,
    "廩廫",
    8,
    "廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤"
  ],
  [
    "8f80",
    "弨弫弬弮弰弲",
    6,
    "弻弽弾弿彁",
    14,
    "彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢",
    5,
    "復徫徬徯",
    5,
    "徶徸徹徺徻徾",
    4,
    "忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇"
  ],
  [
    "9040",
    "怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰",
    4,
    "怶",
    4,
    "怽怾恀恄",
    6,
    "恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀"
  ],
  [
    "9080",
    "悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽",
    7,
    "惇惈惉惌",
    4,
    "惒惓惔惖惗惙惛惞惡",
    4,
    "惪惱惲惵惷惸惻",
    4,
    "愂愃愄愅愇愊愋愌愐",
    4,
    "愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬",
    18,
    "慀",
    6
  ],
  [
    "9140",
    "慇慉態慍慏慐慒慓慔慖",
    6,
    "慞慟慠慡慣慤慥慦慩",
    6,
    "慱慲慳慴慶慸",
    18,
    "憌憍憏",
    4,
    "憕"
  ],
  [
    "9180",
    "憖",
    6,
    "憞",
    8,
    "憪憫憭",
    9,
    "憸",
    5,
    "憿懀懁懃",
    4,
    "應懌",
    4,
    "懓懕",
    16,
    "懧",
    13,
    "懶",
    8,
    "戀",
    5,
    "戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸",
    4,
    "扂扄扅扆扊"
  ],
  [
    "9240",
    "扏扐払扖扗扙扚扜",
    6,
    "扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋",
    5,
    "抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁"
  ],
  [
    "9280",
    "拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳",
    5,
    "挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖",
    7,
    "捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙",
    6,
    "採掤掦掫掯掱掲掵掶掹掻掽掿揀"
  ],
  [
    "9340",
    "揁揂揃揅揇揈揊揋揌揑揓揔揕揗",
    6,
    "揟揢揤",
    4,
    "揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆",
    4,
    "損搎搑搒搕",
    5,
    "搝搟搢搣搤"
  ],
  [
    "9380",
    "搥搧搨搩搫搮",
    5,
    "搵",
    4,
    "搻搼搾摀摂摃摉摋",
    6,
    "摓摕摖摗摙",
    4,
    "摟",
    7,
    "摨摪摫摬摮",
    9,
    "摻",
    6,
    "撃撆撈",
    8,
    "撓撔撗撘撚撛撜撝撟",
    4,
    "撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆",
    6,
    "擏擑擓擔擕擖擙據"
  ],
  [
    "9440",
    "擛擜擝擟擠擡擣擥擧",
    24,
    "攁",
    7,
    "攊",
    7,
    "攓",
    4,
    "攙",
    8
  ],
  [
    "9480",
    "攢攣攤攦",
    4,
    "攬攭攰攱攲攳攷攺攼攽敀",
    4,
    "敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數",
    14,
    "斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱",
    7,
    "斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘",
    7,
    "旡旣旤旪旫"
  ],
  [
    "9540",
    "旲旳旴旵旸旹旻",
    4,
    "昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷",
    4,
    "昽昿晀時晄",
    6,
    "晍晎晐晑晘"
  ],
  [
    "9580",
    "晙晛晜晝晞晠晢晣晥晧晩",
    4,
    "晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘",
    4,
    "暞",
    8,
    "暩",
    4,
    "暯",
    4,
    "暵暶暷暸暺暻暼暽暿",
    25,
    "曚曞",
    7,
    "曧曨曪",
    5,
    "曱曵曶書曺曻曽朁朂會"
  ],
  [
    "9640",
    "朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠",
    5,
    "朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗",
    4,
    "杝杢杣杤杦杧杫杬杮東杴杶"
  ],
  [
    "9680",
    "杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹",
    7,
    "柂柅",
    9,
    "柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵",
    7,
    "柾栁栂栃栄栆栍栐栒栔栕栘",
    4,
    "栞栟栠栢",
    6,
    "栫",
    6,
    "栴栵栶栺栻栿桇桋桍桏桒桖",
    5
  ],
  [
    "9740",
    "桜桝桞桟桪桬",
    7,
    "桵桸",
    8,
    "梂梄梇",
    7,
    "梐梑梒梔梕梖梘",
    9,
    "梣梤梥梩梪梫梬梮梱梲梴梶梷梸"
  ],
  [
    "9780",
    "梹",
    6,
    "棁棃",
    5,
    "棊棌棎棏棐棑棓棔棖棗棙棛",
    4,
    "棡棢棤",
    9,
    "棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆",
    4,
    "椌椏椑椓",
    11,
    "椡椢椣椥",
    7,
    "椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃",
    16,
    "楕楖楘楙楛楜楟"
  ],
  [
    "9840",
    "楡楢楤楥楧楨楩楪楬業楯楰楲",
    4,
    "楺楻楽楾楿榁榃榅榊榋榌榎",
    5,
    "榖榗榙榚榝",
    9,
    "榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽"
  ],
  [
    "9880",
    "榾榿槀槂",
    7,
    "構槍槏槑槒槓槕",
    5,
    "槜槝槞槡",
    11,
    "槮槯槰槱槳",
    9,
    "槾樀",
    9,
    "樋",
    11,
    "標",
    5,
    "樠樢",
    5,
    "権樫樬樭樮樰樲樳樴樶",
    6,
    "樿",
    4,
    "橅橆橈",
    7,
    "橑",
    6,
    "橚"
  ],
  [
    "9940",
    "橜",
    4,
    "橢橣橤橦",
    10,
    "橲",
    6,
    "橺橻橽橾橿檁檂檃檅",
    8,
    "檏檒",
    4,
    "檘",
    7,
    "檡",
    5
  ],
  [
    "9980",
    "檧檨檪檭",
    114,
    "欥欦欨",
    6
  ],
  [
    "9a40",
    "欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍",
    11,
    "歚",
    7,
    "歨歩歫",
    13,
    "歺歽歾歿殀殅殈"
  ],
  [
    "9a80",
    "殌殎殏殐殑殔殕殗殘殙殜",
    4,
    "殢",
    7,
    "殫",
    7,
    "殶殸",
    6,
    "毀毃毄毆",
    4,
    "毌毎毐毑毘毚毜",
    4,
    "毢",
    7,
    "毬毭毮毰毱毲毴毶毷毸毺毻毼毾",
    6,
    "氈",
    4,
    "氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋",
    4,
    "汑汒汓汖汘"
  ],
  [
    "9b40",
    "汙汚汢汣汥汦汧汫",
    4,
    "汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘"
  ],
  [
    "9b80",
    "泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟",
    5,
    "洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽",
    4,
    "涃涄涆涇涊涋涍涏涐涒涖",
    4,
    "涜涢涥涬涭涰涱涳涴涶涷涹",
    5,
    "淁淂淃淈淉淊"
  ],
  [
    "9c40",
    "淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽",
    7,
    "渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵"
  ],
  [
    "9c80",
    "渶渷渹渻",
    7,
    "湅",
    7,
    "湏湐湑湒湕湗湙湚湜湝湞湠",
    10,
    "湬湭湯",
    14,
    "満溁溂溄溇溈溊",
    4,
    "溑",
    6,
    "溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪",
    5
  ],
  [
    "9d40",
    "滰滱滲滳滵滶滷滸滺",
    7,
    "漃漄漅漇漈漊",
    4,
    "漐漑漒漖",
    9,
    "漡漢漣漥漦漧漨漬漮漰漲漴漵漷",
    6,
    "漿潀潁潂"
  ],
  [
    "9d80",
    "潃潄潅潈潉潊潌潎",
    9,
    "潙潚潛潝潟潠潡潣潤潥潧",
    5,
    "潯潰潱潳潵潶潷潹潻潽",
    6,
    "澅澆澇澊澋澏",
    12,
    "澝澞澟澠澢",
    4,
    "澨",
    10,
    "澴澵澷澸澺",
    5,
    "濁濃",
    5,
    "濊",
    6,
    "濓",
    10,
    "濟濢濣濤濥"
  ],
  [
    "9e40",
    "濦",
    7,
    "濰",
    32,
    "瀒",
    7,
    "瀜",
    6,
    "瀤",
    6
  ],
  [
    "9e80",
    "瀫",
    9,
    "瀶瀷瀸瀺",
    17,
    "灍灎灐",
    13,
    "灟",
    11,
    "灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞",
    12,
    "炰炲炴炵炶為炾炿烄烅烆烇烉烋",
    12,
    "烚"
  ],
  [
    "9f40",
    "烜烝烞烠烡烢烣烥烪烮烰",
    6,
    "烸烺烻烼烾",
    10,
    "焋",
    4,
    "焑焒焔焗焛",
    10,
    "焧",
    7,
    "焲焳焴"
  ],
  [
    "9f80",
    "焵焷",
    13,
    "煆煇煈煉煋煍煏",
    12,
    "煝煟",
    4,
    "煥煩",
    4,
    "煯煰煱煴煵煶煷煹煻煼煾",
    5,
    "熅",
    4,
    "熋熌熍熎熐熑熒熓熕熖熗熚",
    4,
    "熡",
    6,
    "熩熪熫熭",
    5,
    "熴熶熷熸熺",
    8,
    "燄",
    9,
    "燏",
    4
  ],
  [
    "a040",
    "燖",
    9,
    "燡燢燣燤燦燨",
    5,
    "燯",
    9,
    "燺",
    11,
    "爇",
    19
  ],
  [
    "a080",
    "爛爜爞",
    9,
    "爩爫爭爮爯爲爳爴爺爼爾牀",
    6,
    "牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅",
    4,
    "犌犎犐犑犓",
    11,
    "犠",
    11,
    "犮犱犲犳犵犺",
    6,
    "狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛"
  ],
  [
    "a1a1",
    "　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈",
    7,
    "〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓"
  ],
  [
    "a2a1",
    "ⅰ",
    9
  ],
  [
    "a2b1",
    "⒈",
    19,
    "⑴",
    19,
    "①",
    9
  ],
  [
    "a2e5",
    "㈠",
    9
  ],
  [
    "a2f1",
    "Ⅰ",
    11
  ],
  [
    "a3a1",
    "！＂＃￥％",
    88,
    "￣"
  ],
  [
    "a4a1",
    "ぁ",
    82
  ],
  [
    "a5a1",
    "ァ",
    85
  ],
  [
    "a6a1",
    "Α",
    16,
    "Σ",
    6
  ],
  [
    "a6c1",
    "α",
    16,
    "σ",
    6
  ],
  [
    "a6e0",
    "︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"
  ],
  [
    "a6ee",
    "︻︼︷︸︱"
  ],
  [
    "a6f4",
    "︳︴"
  ],
  [
    "a7a1",
    "А",
    5,
    "ЁЖ",
    25
  ],
  [
    "a7d1",
    "а",
    5,
    "ёж",
    25
  ],
  [
    "a840",
    "ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═",
    35,
    "▁",
    6
  ],
  [
    "a880",
    "█",
    7,
    "▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"
  ],
  [
    "a8a1",
    "āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ"
  ],
  [
    "a8bd",
    "ńň"
  ],
  [
    "a8c0",
    "ɡ"
  ],
  [
    "a8c5",
    "ㄅ",
    36
  ],
  [
    "a940",
    "〡",
    8,
    "㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"
  ],
  [
    "a959",
    "℡㈱"
  ],
  [
    "a95c",
    "‐"
  ],
  [
    "a960",
    "ー゛゜ヽヾ〆ゝゞ﹉",
    9,
    "﹔﹕﹖﹗﹙",
    8
  ],
  [
    "a980",
    "﹢",
    4,
    "﹨﹩﹪﹫"
  ],
  [
    "a996",
    "〇"
  ],
  [
    "a9a4",
    "─",
    75
  ],
  [
    "aa40",
    "狜狝狟狢",
    5,
    "狪狫狵狶狹狽狾狿猀猂猄",
    5,
    "猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀",
    8
  ],
  [
    "aa80",
    "獉獊獋獌獎獏獑獓獔獕獖獘",
    7,
    "獡",
    10,
    "獮獰獱"
  ],
  [
    "ab40",
    "獲",
    11,
    "獿",
    4,
    "玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣",
    5,
    "玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃",
    4
  ],
  [
    "ab80",
    "珋珌珎珒",
    6,
    "珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳",
    4
  ],
  [
    "ac40",
    "珸",
    10,
    "琄琇琈琋琌琍琎琑",
    8,
    "琜",
    5,
    "琣琤琧琩琫琭琯琱琲琷",
    4,
    "琽琾琿瑀瑂",
    11
  ],
  [
    "ac80",
    "瑎",
    6,
    "瑖瑘瑝瑠",
    12,
    "瑮瑯瑱",
    4,
    "瑸瑹瑺"
  ],
  [
    "ad40",
    "瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑",
    10,
    "璝璟",
    7,
    "璪",
    15,
    "璻",
    12
  ],
  [
    "ad80",
    "瓈",
    9,
    "瓓",
    8,
    "瓝瓟瓡瓥瓧",
    6,
    "瓰瓱瓲"
  ],
  [
    "ae40",
    "瓳瓵瓸",
    6,
    "甀甁甂甃甅",
    7,
    "甎甐甒甔甕甖甗甛甝甞甠",
    4,
    "甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘"
  ],
  [
    "ae80",
    "畝",
    7,
    "畧畨畩畫",
    6,
    "畳畵當畷畺",
    4,
    "疀疁疂疄疅疇"
  ],
  [
    "af40",
    "疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦",
    4,
    "疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇"
  ],
  [
    "af80",
    "瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄"
  ],
  [
    "b040",
    "癅",
    6,
    "癎",
    5,
    "癕癗",
    4,
    "癝癟癠癡癢癤",
    6,
    "癬癭癮癰",
    7,
    "癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛"
  ],
  [
    "b080",
    "皜",
    7,
    "皥",
    8,
    "皯皰皳皵",
    9,
    "盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥"
  ],
  [
    "b140",
    "盄盇盉盋盌盓盕盙盚盜盝盞盠",
    4,
    "盦",
    7,
    "盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎",
    10,
    "眛眜眝眞眡眣眤眥眧眪眫"
  ],
  [
    "b180",
    "眬眮眰",
    4,
    "眹眻眽眾眿睂睄睅睆睈",
    7,
    "睒",
    7,
    "睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳"
  ],
  [
    "b240",
    "睝睞睟睠睤睧睩睪睭",
    11,
    "睺睻睼瞁瞂瞃瞆",
    5,
    "瞏瞐瞓",
    11,
    "瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶",
    4
  ],
  [
    "b280",
    "瞼瞾矀",
    12,
    "矎",
    8,
    "矘矙矚矝",
    4,
    "矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖"
  ],
  [
    "b340",
    "矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃",
    5,
    "砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚"
  ],
  [
    "b380",
    "硛硜硞",
    11,
    "硯",
    7,
    "硸硹硺硻硽",
    6,
    "场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚"
  ],
  [
    "b440",
    "碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨",
    7,
    "碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚",
    9
  ],
  [
    "b480",
    "磤磥磦磧磩磪磫磭",
    4,
    "磳磵磶磸磹磻",
    5,
    "礂礃礄礆",
    6,
    "础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮"
  ],
  [
    "b540",
    "礍",
    5,
    "礔",
    9,
    "礟",
    4,
    "礥",
    14,
    "礵",
    4,
    "礽礿祂祃祄祅祇祊",
    8,
    "祔祕祘祙祡祣"
  ],
  [
    "b580",
    "祤祦祩祪祫祬祮祰",
    6,
    "祹祻",
    4,
    "禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠"
  ],
  [
    "b640",
    "禓",
    6,
    "禛",
    11,
    "禨",
    10,
    "禴",
    4,
    "禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙",
    5,
    "秠秡秢秥秨秪"
  ],
  [
    "b680",
    "秬秮秱",
    6,
    "秹秺秼秾秿稁稄稅稇稈稉稊稌稏",
    4,
    "稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二"
  ],
  [
    "b740",
    "稝稟稡稢稤",
    14,
    "稴稵稶稸稺稾穀",
    5,
    "穇",
    9,
    "穒",
    4,
    "穘",
    16
  ],
  [
    "b780",
    "穩",
    6,
    "穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服"
  ],
  [
    "b840",
    "窣窤窧窩窪窫窮",
    4,
    "窴",
    10,
    "竀",
    10,
    "竌",
    9,
    "竗竘竚竛竜竝竡竢竤竧",
    5,
    "竮竰竱竲竳"
  ],
  [
    "b880",
    "竴",
    4,
    "竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹"
  ],
  [
    "b940",
    "笯笰笲笴笵笶笷笹笻笽笿",
    5,
    "筆筈筊筍筎筓筕筗筙筜筞筟筡筣",
    10,
    "筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆",
    6,
    "箎箏"
  ],
  [
    "b980",
    "箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹",
    7,
    "篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈"
  ],
  [
    "ba40",
    "篅篈築篊篋篍篎篏篐篒篔",
    4,
    "篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲",
    4,
    "篸篹篺篻篽篿",
    7,
    "簈簉簊簍簎簐",
    5,
    "簗簘簙"
  ],
  [
    "ba80",
    "簚",
    4,
    "簠",
    5,
    "簨簩簫",
    12,
    "簹",
    5,
    "籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖"
  ],
  [
    "bb40",
    "籃",
    9,
    "籎",
    36,
    "籵",
    5,
    "籾",
    9
  ],
  [
    "bb80",
    "粈粊",
    6,
    "粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴",
    4,
    "粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕"
  ],
  [
    "bc40",
    "粿糀糂糃糄糆糉糋糎",
    6,
    "糘糚糛糝糞糡",
    6,
    "糩",
    5,
    "糰",
    7,
    "糹糺糼",
    13,
    "紋",
    5
  ],
  [
    "bc80",
    "紑",
    14,
    "紡紣紤紥紦紨紩紪紬紭紮細",
    6,
    "肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件"
  ],
  [
    "bd40",
    "紷",
    54,
    "絯",
    7
  ],
  [
    "bd80",
    "絸",
    32,
    "健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸"
  ],
  [
    "be40",
    "継",
    12,
    "綧",
    6,
    "綯",
    42
  ],
  [
    "be80",
    "線",
    32,
    "尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻"
  ],
  [
    "bf40",
    "緻",
    62
  ],
  [
    "bf80",
    "縺縼",
    4,
    "繂",
    4,
    "繈",
    21,
    "俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀"
  ],
  [
    "c040",
    "繞",
    35,
    "纃",
    23,
    "纜纝纞"
  ],
  [
    "c080",
    "纮纴纻纼绖绤绬绹缊缐缞缷缹缻",
    6,
    "罃罆",
    9,
    "罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐"
  ],
  [
    "c140",
    "罖罙罛罜罝罞罠罣",
    4,
    "罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂",
    7,
    "羋羍羏",
    4,
    "羕",
    4,
    "羛羜羠羢羣羥羦羨",
    6,
    "羱"
  ],
  [
    "c180",
    "羳",
    4,
    "羺羻羾翀翂翃翄翆翇翈翉翋翍翏",
    4,
    "翖翗翙",
    5,
    "翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿"
  ],
  [
    "c240",
    "翤翧翨翪翫翬翭翯翲翴",
    6,
    "翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫",
    5,
    "耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗"
  ],
  [
    "c280",
    "聙聛",
    13,
    "聫",
    5,
    "聲",
    11,
    "隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫"
  ],
  [
    "c340",
    "聾肁肂肅肈肊肍",
    5,
    "肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇",
    4,
    "胏",
    6,
    "胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋"
  ],
  [
    "c380",
    "脌脕脗脙脛脜脝脟",
    12,
    "脭脮脰脳脴脵脷脹",
    4,
    "脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸"
  ],
  [
    "c440",
    "腀",
    5,
    "腇腉腍腎腏腒腖腗腘腛",
    4,
    "腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃",
    4,
    "膉膋膌膍膎膐膒",
    5,
    "膙膚膞",
    4,
    "膤膥"
  ],
  [
    "c480",
    "膧膩膫",
    7,
    "膴",
    5,
    "膼膽膾膿臄臅臇臈臉臋臍",
    6,
    "摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁"
  ],
  [
    "c540",
    "臔",
    14,
    "臤臥臦臨臩臫臮",
    4,
    "臵",
    5,
    "臽臿舃與",
    4,
    "舎舏舑舓舕",
    5,
    "舝舠舤舥舦舧舩舮舲舺舼舽舿"
  ],
  [
    "c580",
    "艀艁艂艃艅艆艈艊艌艍艎艐",
    7,
    "艙艛艜艝艞艠",
    7,
    "艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗"
  ],
  [
    "c640",
    "艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸"
  ],
  [
    "c680",
    "苺苼",
    4,
    "茊茋茍茐茒茓茖茘茙茝",
    9,
    "茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐"
  ],
  [
    "c740",
    "茾茿荁荂荄荅荈荊",
    4,
    "荓荕",
    4,
    "荝荢荰",
    6,
    "荹荺荾",
    6,
    "莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡",
    6,
    "莬莭莮"
  ],
  [
    "c780",
    "莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠"
  ],
  [
    "c840",
    "菮華菳",
    4,
    "菺菻菼菾菿萀萂萅萇萈萉萊萐萒",
    5,
    "萙萚萛萞",
    5,
    "萩",
    7,
    "萲",
    5,
    "萹萺萻萾",
    7,
    "葇葈葉"
  ],
  [
    "c880",
    "葊",
    6,
    "葒",
    4,
    "葘葝葞葟葠葢葤",
    4,
    "葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁"
  ],
  [
    "c940",
    "葽",
    4,
    "蒃蒄蒅蒆蒊蒍蒏",
    7,
    "蒘蒚蒛蒝蒞蒟蒠蒢",
    12,
    "蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗"
  ],
  [
    "c980",
    "蓘",
    4,
    "蓞蓡蓢蓤蓧",
    4,
    "蓭蓮蓯蓱",
    10,
    "蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳"
  ],
  [
    "ca40",
    "蔃",
    8,
    "蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢",
    8,
    "蔭",
    9,
    "蔾",
    4,
    "蕄蕅蕆蕇蕋",
    10
  ],
  [
    "ca80",
    "蕗蕘蕚蕛蕜蕝蕟",
    4,
    "蕥蕦蕧蕩",
    8,
    "蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱"
  ],
  [
    "cb40",
    "薂薃薆薈",
    6,
    "薐",
    10,
    "薝",
    6,
    "薥薦薧薩薫薬薭薱",
    5,
    "薸薺",
    6,
    "藂",
    6,
    "藊",
    4,
    "藑藒"
  ],
  [
    "cb80",
    "藔藖",
    5,
    "藝",
    6,
    "藥藦藧藨藪",
    14,
    "恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔"
  ],
  [
    "cc40",
    "藹藺藼藽藾蘀",
    4,
    "蘆",
    10,
    "蘒蘓蘔蘕蘗",
    15,
    "蘨蘪",
    13,
    "蘹蘺蘻蘽蘾蘿虀"
  ],
  [
    "cc80",
    "虁",
    11,
    "虒虓處",
    4,
    "虛虜虝號虠虡虣",
    7,
    "獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃"
  ],
  [
    "cd40",
    "虭虯虰虲",
    6,
    "蚃",
    6,
    "蚎",
    4,
    "蚔蚖",
    5,
    "蚞",
    4,
    "蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻",
    4,
    "蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜"
  ],
  [
    "cd80",
    "蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威"
  ],
  [
    "ce40",
    "蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀",
    6,
    "蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚",
    5,
    "蝡蝢蝦",
    7,
    "蝯蝱蝲蝳蝵"
  ],
  [
    "ce80",
    "蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎",
    4,
    "螔螕螖螘",
    6,
    "螠",
    4,
    "巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺"
  ],
  [
    "cf40",
    "螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁",
    4,
    "蟇蟈蟉蟌",
    4,
    "蟔",
    6,
    "蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯",
    9
  ],
  [
    "cf80",
    "蟺蟻蟼蟽蟿蠀蠁蠂蠄",
    5,
    "蠋",
    7,
    "蠔蠗蠘蠙蠚蠜",
    4,
    "蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓"
  ],
  [
    "d040",
    "蠤",
    13,
    "蠳",
    5,
    "蠺蠻蠽蠾蠿衁衂衃衆",
    5,
    "衎",
    5,
    "衕衖衘衚",
    6,
    "衦衧衪衭衯衱衳衴衵衶衸衹衺"
  ],
  [
    "d080",
    "衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗",
    4,
    "袝",
    4,
    "袣袥",
    5,
    "小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄"
  ],
  [
    "d140",
    "袬袮袯袰袲",
    4,
    "袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚",
    4,
    "裠裡裦裧裩",
    6,
    "裲裵裶裷裺裻製裿褀褁褃",
    5
  ],
  [
    "d180",
    "褉褋",
    4,
    "褑褔",
    4,
    "褜",
    4,
    "褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶"
  ],
  [
    "d240",
    "褸",
    8,
    "襂襃襅",
    24,
    "襠",
    5,
    "襧",
    19,
    "襼"
  ],
  [
    "d280",
    "襽襾覀覂覄覅覇",
    26,
    "摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐"
  ],
  [
    "d340",
    "覢",
    30,
    "觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴",
    6
  ],
  [
    "d380",
    "觻",
    4,
    "訁",
    5,
    "計",
    21,
    "印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉"
  ],
  [
    "d440",
    "訞",
    31,
    "訿",
    8,
    "詉",
    21
  ],
  [
    "d480",
    "詟",
    25,
    "詺",
    6,
    "浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧"
  ],
  [
    "d540",
    "誁",
    7,
    "誋",
    7,
    "誔",
    46
  ],
  [
    "d580",
    "諃",
    32,
    "铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政"
  ],
  [
    "d640",
    "諤",
    34,
    "謈",
    27
  ],
  [
    "d680",
    "謤謥謧",
    30,
    "帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑"
  ],
  [
    "d740",
    "譆",
    31,
    "譧",
    4,
    "譭",
    25
  ],
  [
    "d780",
    "讇",
    24,
    "讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座"
  ],
  [
    "d840",
    "谸",
    8,
    "豂豃豄豅豈豊豋豍",
    7,
    "豖豗豘豙豛",
    5,
    "豣",
    6,
    "豬",
    6,
    "豴豵豶豷豻",
    6,
    "貃貄貆貇"
  ],
  [
    "d880",
    "貈貋貍",
    6,
    "貕貖貗貙",
    20,
    "亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝"
  ],
  [
    "d940",
    "貮",
    62
  ],
  [
    "d980",
    "賭",
    32,
    "佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼"
  ],
  [
    "da40",
    "贎",
    14,
    "贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸",
    8,
    "趂趃趆趇趈趉趌",
    4,
    "趒趓趕",
    9,
    "趠趡"
  ],
  [
    "da80",
    "趢趤",
    12,
    "趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺"
  ],
  [
    "db40",
    "跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾",
    6,
    "踆踇踈踋踍踎踐踑踒踓踕",
    7,
    "踠踡踤",
    4,
    "踫踭踰踲踳踴踶踷踸踻踼踾"
  ],
  [
    "db80",
    "踿蹃蹅蹆蹌",
    4,
    "蹓",
    5,
    "蹚",
    11,
    "蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝"
  ],
  [
    "dc40",
    "蹳蹵蹷",
    4,
    "蹽蹾躀躂躃躄躆躈",
    6,
    "躑躒躓躕",
    6,
    "躝躟",
    11,
    "躭躮躰躱躳",
    6,
    "躻",
    7
  ],
  [
    "dc80",
    "軃",
    10,
    "軏",
    21,
    "堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥"
  ],
  [
    "dd40",
    "軥",
    62
  ],
  [
    "dd80",
    "輤",
    32,
    "荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺"
  ],
  [
    "de40",
    "轅",
    32,
    "轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆"
  ],
  [
    "de80",
    "迉",
    4,
    "迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖"
  ],
  [
    "df40",
    "這逜連逤逥逧",
    5,
    "逰",
    4,
    "逷逹逺逽逿遀遃遅遆遈",
    4,
    "過達違遖遙遚遜",
    5,
    "遤遦遧適遪遫遬遯",
    4,
    "遶",
    6,
    "遾邁"
  ],
  [
    "df80",
    "還邅邆邇邉邊邌",
    4,
    "邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼"
  ],
  [
    "e040",
    "郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅",
    19,
    "鄚鄛鄜"
  ],
  [
    "e080",
    "鄝鄟鄠鄡鄤",
    10,
    "鄰鄲",
    6,
    "鄺",
    8,
    "酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼"
  ],
  [
    "e140",
    "酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀",
    4,
    "醆醈醊醎醏醓",
    6,
    "醜",
    5,
    "醤",
    5,
    "醫醬醰醱醲醳醶醷醸醹醻"
  ],
  [
    "e180",
    "醼",
    10,
    "釈釋釐釒",
    9,
    "針",
    8,
    "帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺"
  ],
  [
    "e240",
    "釦",
    62
  ],
  [
    "e280",
    "鈥",
    32,
    "狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧",
    5,
    "饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂"
  ],
  [
    "e340",
    "鉆",
    45,
    "鉵",
    16
  ],
  [
    "e380",
    "銆",
    7,
    "銏",
    24,
    "恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾"
  ],
  [
    "e440",
    "銨",
    5,
    "銯",
    24,
    "鋉",
    31
  ],
  [
    "e480",
    "鋩",
    32,
    "洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑"
  ],
  [
    "e540",
    "錊",
    51,
    "錿",
    10
  ],
  [
    "e580",
    "鍊",
    31,
    "鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣"
  ],
  [
    "e640",
    "鍬",
    34,
    "鎐",
    27
  ],
  [
    "e680",
    "鎬",
    29,
    "鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩"
  ],
  [
    "e740",
    "鏎",
    7,
    "鏗",
    54
  ],
  [
    "e780",
    "鐎",
    32,
    "纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡",
    6,
    "缪缫缬缭缯",
    4,
    "缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬"
  ],
  [
    "e840",
    "鐯",
    14,
    "鐿",
    43,
    "鑬鑭鑮鑯"
  ],
  [
    "e880",
    "鑰",
    20,
    "钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹"
  ],
  [
    "e940",
    "锧锳锽镃镈镋镕镚镠镮镴镵長",
    7,
    "門",
    42
  ],
  [
    "e980",
    "閫",
    32,
    "椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋"
  ],
  [
    "ea40",
    "闌",
    27,
    "闬闿阇阓阘阛阞阠阣",
    6,
    "阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗"
  ],
  [
    "ea80",
    "陘陙陚陜陝陞陠陣陥陦陫陭",
    4,
    "陳陸",
    12,
    "隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰"
  ],
  [
    "eb40",
    "隌階隑隒隓隕隖隚際隝",
    9,
    "隨",
    7,
    "隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖",
    9,
    "雡",
    6,
    "雫"
  ],
  [
    "eb80",
    "雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗",
    4,
    "霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻"
  ],
  [
    "ec40",
    "霡",
    8,
    "霫霬霮霯霱霳",
    4,
    "霺霻霼霽霿",
    18,
    "靔靕靗靘靚靜靝靟靣靤靦靧靨靪",
    7
  ],
  [
    "ec80",
    "靲靵靷",
    4,
    "靽",
    7,
    "鞆",
    4,
    "鞌鞎鞏鞐鞓鞕鞖鞗鞙",
    4,
    "臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐"
  ],
  [
    "ed40",
    "鞞鞟鞡鞢鞤",
    6,
    "鞬鞮鞰鞱鞳鞵",
    46
  ],
  [
    "ed80",
    "韤韥韨韮",
    4,
    "韴韷",
    23,
    "怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨"
  ],
  [
    "ee40",
    "頏",
    62
  ],
  [
    "ee80",
    "顎",
    32,
    "睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶",
    4,
    "钼钽钿铄铈",
    6,
    "铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪"
  ],
  [
    "ef40",
    "顯",
    5,
    "颋颎颒颕颙颣風",
    37,
    "飏飐飔飖飗飛飜飝飠",
    4
  ],
  [
    "ef80",
    "飥飦飩",
    30,
    "铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒",
    4,
    "锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤",
    8,
    "镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔"
  ],
  [
    "f040",
    "餈",
    4,
    "餎餏餑",
    28,
    "餯",
    26
  ],
  [
    "f080",
    "饊",
    9,
    "饖",
    12,
    "饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨",
    4,
    "鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦",
    6,
    "鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙"
  ],
  [
    "f140",
    "馌馎馚",
    10,
    "馦馧馩",
    47
  ],
  [
    "f180",
    "駙",
    32,
    "瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃"
  ],
  [
    "f240",
    "駺",
    62
  ],
  [
    "f280",
    "騹",
    32,
    "颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒"
  ],
  [
    "f340",
    "驚",
    17,
    "驲骃骉骍骎骔骕骙骦骩",
    6,
    "骲骳骴骵骹骻骽骾骿髃髄髆",
    4,
    "髍髎髏髐髒體髕髖髗髙髚髛髜"
  ],
  [
    "f380",
    "髝髞髠髢髣髤髥髧髨髩髪髬髮髰",
    8,
    "髺髼",
    6,
    "鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋"
  ],
  [
    "f440",
    "鬇鬉",
    5,
    "鬐鬑鬒鬔",
    10,
    "鬠鬡鬢鬤",
    10,
    "鬰鬱鬳",
    7,
    "鬽鬾鬿魀魆魊魋魌魎魐魒魓魕",
    5
  ],
  [
    "f480",
    "魛",
    32,
    "簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤"
  ],
  [
    "f540",
    "魼",
    62
  ],
  [
    "f580",
    "鮻",
    32,
    "酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜"
  ],
  [
    "f640",
    "鯜",
    62
  ],
  [
    "f680",
    "鰛",
    32,
    "觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅",
    5,
    "龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞",
    5,
    "鲥",
    4,
    "鲫鲭鲮鲰",
    7,
    "鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋"
  ],
  [
    "f740",
    "鰼",
    62
  ],
  [
    "f780",
    "鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾",
    4,
    "鳈鳉鳑鳒鳚鳛鳠鳡鳌",
    4,
    "鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄"
  ],
  [
    "f840",
    "鳣",
    62
  ],
  [
    "f880",
    "鴢",
    32
  ],
  [
    "f940",
    "鵃",
    62
  ],
  [
    "f980",
    "鶂",
    32
  ],
  [
    "fa40",
    "鶣",
    62
  ],
  [
    "fa80",
    "鷢",
    32
  ],
  [
    "fb40",
    "鸃",
    27,
    "鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴",
    9,
    "麀"
  ],
  [
    "fb80",
    "麁麃麄麅麆麉麊麌",
    5,
    "麔",
    8,
    "麞麠",
    5,
    "麧麨麩麪"
  ],
  [
    "fc40",
    "麫",
    8,
    "麵麶麷麹麺麼麿",
    4,
    "黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰",
    8,
    "黺黽黿",
    6
  ],
  [
    "fc80",
    "鼆",
    4,
    "鼌鼏鼑鼒鼔鼕鼖鼘鼚",
    5,
    "鼡鼣",
    8,
    "鼭鼮鼰鼱"
  ],
  [
    "fd40",
    "鼲",
    4,
    "鼸鼺鼼鼿",
    4,
    "齅",
    10,
    "齒",
    38
  ],
  [
    "fd80",
    "齹",
    5,
    "龁龂龍",
    11,
    "龜龝龞龡",
    4,
    "郎凉秊裏隣"
  ],
  [
    "fe40",
    "兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"
  ]
], du = [
  [
    "a140",
    "",
    62
  ],
  [
    "a180",
    "",
    32
  ],
  [
    "a240",
    "",
    62
  ],
  [
    "a280",
    "",
    32
  ],
  [
    "a2ab",
    "",
    5
  ],
  [
    "a2e3",
    "€"
  ],
  [
    "a2ef",
    ""
  ],
  [
    "a2fd",
    ""
  ],
  [
    "a340",
    "",
    62
  ],
  [
    "a380",
    "",
    31,
    "　"
  ],
  [
    "a440",
    "",
    62
  ],
  [
    "a480",
    "",
    32
  ],
  [
    "a4f4",
    "",
    10
  ],
  [
    "a540",
    "",
    62
  ],
  [
    "a580",
    "",
    32
  ],
  [
    "a5f7",
    "",
    7
  ],
  [
    "a640",
    "",
    62
  ],
  [
    "a680",
    "",
    32
  ],
  [
    "a6b9",
    "",
    7
  ],
  [
    "a6d9",
    "",
    6
  ],
  [
    "a6ec",
    ""
  ],
  [
    "a6f3",
    ""
  ],
  [
    "a6f6",
    "",
    8
  ],
  [
    "a740",
    "",
    62
  ],
  [
    "a780",
    "",
    32
  ],
  [
    "a7c2",
    "",
    14
  ],
  [
    "a7f2",
    "",
    12
  ],
  [
    "a896",
    "",
    10
  ],
  [
    "a8bc",
    "ḿ"
  ],
  [
    "a8bf",
    "ǹ"
  ],
  [
    "a8c1",
    ""
  ],
  [
    "a8ea",
    "",
    20
  ],
  [
    "a958",
    ""
  ],
  [
    "a95b",
    ""
  ],
  [
    "a95d",
    ""
  ],
  [
    "a989",
    "〾⿰",
    11
  ],
  [
    "a997",
    "",
    12
  ],
  [
    "a9f0",
    "",
    14
  ],
  [
    "aaa1",
    "",
    93
  ],
  [
    "aba1",
    "",
    93
  ],
  [
    "aca1",
    "",
    93
  ],
  [
    "ada1",
    "",
    93
  ],
  [
    "aea1",
    "",
    93
  ],
  [
    "afa1",
    "",
    93
  ],
  [
    "d7fa",
    "",
    4
  ],
  [
    "f8a1",
    "",
    93
  ],
  [
    "f9a1",
    "",
    93
  ],
  [
    "faa1",
    "",
    93
  ],
  [
    "fba1",
    "",
    93
  ],
  [
    "fca1",
    "",
    93
  ],
  [
    "fda1",
    "",
    93
  ],
  [
    "fe50",
    "⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"
  ],
  [
    "fe80",
    "䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓",
    6,
    "䶮",
    93
  ],
  [
    "8135f437",
    ""
  ]
], cZ = [
  128,
  165,
  169,
  178,
  184,
  216,
  226,
  235,
  238,
  244,
  248,
  251,
  253,
  258,
  276,
  284,
  300,
  325,
  329,
  334,
  364,
  463,
  465,
  467,
  469,
  471,
  473,
  475,
  477,
  506,
  594,
  610,
  712,
  716,
  730,
  930,
  938,
  962,
  970,
  1026,
  1104,
  1106,
  8209,
  8215,
  8218,
  8222,
  8231,
  8241,
  8244,
  8246,
  8252,
  8365,
  8452,
  8454,
  8458,
  8471,
  8482,
  8556,
  8570,
  8596,
  8602,
  8713,
  8720,
  8722,
  8726,
  8731,
  8737,
  8740,
  8742,
  8748,
  8751,
  8760,
  8766,
  8777,
  8781,
  8787,
  8802,
  8808,
  8816,
  8854,
  8858,
  8870,
  8896,
  8979,
  9322,
  9372,
  9548,
  9588,
  9616,
  9622,
  9634,
  9652,
  9662,
  9672,
  9676,
  9680,
  9702,
  9735,
  9738,
  9793,
  9795,
  11906,
  11909,
  11913,
  11917,
  11928,
  11944,
  11947,
  11951,
  11956,
  11960,
  11964,
  11979,
  12284,
  12292,
  12312,
  12319,
  12330,
  12351,
  12436,
  12447,
  12535,
  12543,
  12586,
  12842,
  12850,
  12964,
  13200,
  13215,
  13218,
  13253,
  13263,
  13267,
  13270,
  13384,
  13428,
  13727,
  13839,
  13851,
  14617,
  14703,
  14801,
  14816,
  14964,
  15183,
  15471,
  15585,
  16471,
  16736,
  17208,
  17325,
  17330,
  17374,
  17623,
  17997,
  18018,
  18212,
  18218,
  18301,
  18318,
  18760,
  18811,
  18814,
  18820,
  18823,
  18844,
  18848,
  18872,
  19576,
  19620,
  19738,
  19887,
  40870,
  59244,
  59336,
  59367,
  59413,
  59417,
  59423,
  59431,
  59437,
  59443,
  59452,
  59460,
  59478,
  59493,
  63789,
  63866,
  63894,
  63976,
  63986,
  64016,
  64018,
  64021,
  64025,
  64034,
  64037,
  64042,
  65074,
  65093,
  65107,
  65112,
  65127,
  65132,
  65375,
  65510,
  65536
], uZ = [
  0,
  36,
  38,
  45,
  50,
  81,
  89,
  95,
  96,
  100,
  103,
  104,
  105,
  109,
  126,
  133,
  148,
  172,
  175,
  179,
  208,
  306,
  307,
  308,
  309,
  310,
  311,
  312,
  313,
  341,
  428,
  443,
  544,
  545,
  558,
  741,
  742,
  749,
  750,
  805,
  819,
  820,
  7922,
  7924,
  7925,
  7927,
  7934,
  7943,
  7944,
  7945,
  7950,
  8062,
  8148,
  8149,
  8152,
  8164,
  8174,
  8236,
  8240,
  8262,
  8264,
  8374,
  8380,
  8381,
  8384,
  8388,
  8390,
  8392,
  8393,
  8394,
  8396,
  8401,
  8406,
  8416,
  8419,
  8424,
  8437,
  8439,
  8445,
  8482,
  8485,
  8496,
  8521,
  8603,
  8936,
  8946,
  9046,
  9050,
  9063,
  9066,
  9076,
  9092,
  9100,
  9108,
  9111,
  9113,
  9131,
  9162,
  9164,
  9218,
  9219,
  11329,
  11331,
  11334,
  11336,
  11346,
  11361,
  11363,
  11366,
  11370,
  11372,
  11375,
  11389,
  11682,
  11686,
  11687,
  11692,
  11694,
  11714,
  11716,
  11723,
  11725,
  11730,
  11736,
  11982,
  11989,
  12102,
  12336,
  12348,
  12350,
  12384,
  12393,
  12395,
  12397,
  12510,
  12553,
  12851,
  12962,
  12973,
  13738,
  13823,
  13919,
  13933,
  14080,
  14298,
  14585,
  14698,
  15583,
  15847,
  16318,
  16434,
  16438,
  16481,
  16729,
  17102,
  17122,
  17315,
  17320,
  17402,
  17418,
  17859,
  17909,
  17911,
  17915,
  17916,
  17936,
  17939,
  17961,
  18664,
  18703,
  18814,
  18962,
  19043,
  33469,
  33470,
  33471,
  33484,
  33485,
  33490,
  33497,
  33501,
  33505,
  33513,
  33520,
  33536,
  33550,
  37845,
  37921,
  37948,
  38029,
  38038,
  38064,
  38065,
  38066,
  38069,
  38075,
  38076,
  38078,
  39108,
  39109,
  39113,
  39114,
  39115,
  39116,
  39265,
  39394,
  189e3
], lZ = {
  uChars: cZ,
  gbChars: uZ
}, pZ = [
  [
    "0",
    "\0",
    127
  ],
  [
    "8141",
    "갂갃갅갆갋",
    4,
    "갘갞갟갡갢갣갥",
    6,
    "갮갲갳갴"
  ],
  [
    "8161",
    "갵갶갷갺갻갽갾갿걁",
    9,
    "걌걎",
    5,
    "걕"
  ],
  [
    "8181",
    "걖걗걙걚걛걝",
    18,
    "걲걳걵걶걹걻",
    4,
    "겂겇겈겍겎겏겑겒겓겕",
    6,
    "겞겢",
    5,
    "겫겭겮겱",
    6,
    "겺겾겿곀곂곃곅곆곇곉곊곋곍",
    7,
    "곖곘",
    7,
    "곢곣곥곦곩곫곭곮곲곴곷",
    4,
    "곾곿괁괂괃괅괇",
    4,
    "괎괐괒괓"
  ],
  [
    "8241",
    "괔괕괖괗괙괚괛괝괞괟괡",
    7,
    "괪괫괮",
    5
  ],
  [
    "8261",
    "괶괷괹괺괻괽",
    6,
    "굆굈굊",
    5,
    "굑굒굓굕굖굗"
  ],
  [
    "8281",
    "굙",
    7,
    "굢굤",
    7,
    "굮굯굱굲굷굸굹굺굾궀궃",
    4,
    "궊궋궍궎궏궑",
    10,
    "궞",
    5,
    "궥",
    17,
    "궸",
    7,
    "귂귃귅귆귇귉",
    6,
    "귒귔",
    7,
    "귝귞귟귡귢귣귥",
    18
  ],
  [
    "8341",
    "귺귻귽귾긂",
    5,
    "긊긌긎",
    5,
    "긕",
    7
  ],
  [
    "8361",
    "긝",
    18,
    "긲긳긵긶긹긻긼"
  ],
  [
    "8381",
    "긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗",
    4,
    "깞깢깣깤깦깧깪깫깭깮깯깱",
    6,
    "깺깾",
    5,
    "꺆",
    5,
    "꺍",
    46,
    "꺿껁껂껃껅",
    6,
    "껎껒",
    5,
    "껚껛껝",
    8
  ],
  [
    "8441",
    "껦껧껩껪껬껮",
    5,
    "껵껶껷껹껺껻껽",
    8
  ],
  [
    "8461",
    "꼆꼉꼊꼋꼌꼎꼏꼑",
    18
  ],
  [
    "8481",
    "꼤",
    7,
    "꼮꼯꼱꼳꼵",
    6,
    "꼾꽀꽄꽅꽆꽇꽊",
    5,
    "꽑",
    10,
    "꽞",
    5,
    "꽦",
    18,
    "꽺",
    5,
    "꾁꾂꾃꾅꾆꾇꾉",
    6,
    "꾒꾓꾔꾖",
    5,
    "꾝",
    26,
    "꾺꾻꾽꾾"
  ],
  [
    "8541",
    "꾿꿁",
    5,
    "꿊꿌꿏",
    4,
    "꿕",
    6,
    "꿝",
    4
  ],
  [
    "8561",
    "꿢",
    5,
    "꿪",
    5,
    "꿲꿳꿵꿶꿷꿹",
    6,
    "뀂뀃"
  ],
  [
    "8581",
    "뀅",
    6,
    "뀍뀎뀏뀑뀒뀓뀕",
    6,
    "뀞",
    9,
    "뀩",
    26,
    "끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞",
    29,
    "끾끿낁낂낃낅",
    6,
    "낎낐낒",
    5,
    "낛낝낞낣낤"
  ],
  [
    "8641",
    "낥낦낧낪낰낲낶낷낹낺낻낽",
    6,
    "냆냊",
    5,
    "냒"
  ],
  [
    "8661",
    "냓냕냖냗냙",
    6,
    "냡냢냣냤냦",
    10
  ],
  [
    "8681",
    "냱",
    22,
    "넊넍넎넏넑넔넕넖넗넚넞",
    4,
    "넦넧넩넪넫넭",
    6,
    "넶넺",
    5,
    "녂녃녅녆녇녉",
    6,
    "녒녓녖녗녙녚녛녝녞녟녡",
    22,
    "녺녻녽녾녿놁놃",
    4,
    "놊놌놎놏놐놑놕놖놗놙놚놛놝"
  ],
  [
    "8741",
    "놞",
    9,
    "놩",
    15
  ],
  [
    "8761",
    "놹",
    18,
    "뇍뇎뇏뇑뇒뇓뇕"
  ],
  [
    "8781",
    "뇖",
    5,
    "뇞뇠",
    7,
    "뇪뇫뇭뇮뇯뇱",
    7,
    "뇺뇼뇾",
    5,
    "눆눇눉눊눍",
    6,
    "눖눘눚",
    5,
    "눡",
    18,
    "눵",
    6,
    "눽",
    26,
    "뉙뉚뉛뉝뉞뉟뉡",
    6,
    "뉪",
    4
  ],
  [
    "8841",
    "뉯",
    4,
    "뉶",
    5,
    "뉽",
    6,
    "늆늇늈늊",
    4
  ],
  [
    "8861",
    "늏늒늓늕늖늗늛",
    4,
    "늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"
  ],
  [
    "8881",
    "늸",
    15,
    "닊닋닍닎닏닑닓",
    4,
    "닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉",
    6,
    "댒댖",
    5,
    "댝",
    54,
    "덗덙덚덝덠덡덢덣"
  ],
  [
    "8941",
    "덦덨덪덬덭덯덲덳덵덶덷덹",
    6,
    "뎂뎆",
    5,
    "뎍"
  ],
  [
    "8961",
    "뎎뎏뎑뎒뎓뎕",
    10,
    "뎢",
    5,
    "뎩뎪뎫뎭"
  ],
  [
    "8981",
    "뎮",
    21,
    "돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩",
    18,
    "돽",
    18,
    "됑",
    6,
    "됙됚됛됝됞됟됡",
    6,
    "됪됬",
    7,
    "됵",
    15
  ],
  [
    "8a41",
    "둅",
    10,
    "둒둓둕둖둗둙",
    6,
    "둢둤둦"
  ],
  [
    "8a61",
    "둧",
    4,
    "둭",
    18,
    "뒁뒂"
  ],
  [
    "8a81",
    "뒃",
    4,
    "뒉",
    19,
    "뒞",
    5,
    "뒥뒦뒧뒩뒪뒫뒭",
    7,
    "뒶뒸뒺",
    5,
    "듁듂듃듅듆듇듉",
    6,
    "듑듒듓듔듖",
    5,
    "듞듟듡듢듥듧",
    4,
    "듮듰듲",
    5,
    "듹",
    26,
    "딖딗딙딚딝"
  ],
  [
    "8b41",
    "딞",
    5,
    "딦딫",
    4,
    "딲딳딵딶딷딹",
    6,
    "땂땆"
  ],
  [
    "8b61",
    "땇땈땉땊땎땏땑땒땓땕",
    6,
    "땞땢",
    8
  ],
  [
    "8b81",
    "땫",
    52,
    "떢떣떥떦떧떩떬떭떮떯떲떶",
    4,
    "떾떿뗁뗂뗃뗅",
    6,
    "뗎뗒",
    5,
    "뗙",
    18,
    "뗭",
    18
  ],
  [
    "8c41",
    "똀",
    15,
    "똒똓똕똖똗똙",
    4
  ],
  [
    "8c61",
    "똞",
    6,
    "똦",
    5,
    "똭",
    6,
    "똵",
    5
  ],
  [
    "8c81",
    "똻",
    12,
    "뙉",
    26,
    "뙥뙦뙧뙩",
    50,
    "뚞뚟뚡뚢뚣뚥",
    5,
    "뚭뚮뚯뚰뚲",
    16
  ],
  [
    "8d41",
    "뛃",
    16,
    "뛕",
    8
  ],
  [
    "8d61",
    "뛞",
    17,
    "뛱뛲뛳뛵뛶뛷뛹뛺"
  ],
  [
    "8d81",
    "뛻",
    4,
    "뜂뜃뜄뜆",
    33,
    "뜪뜫뜭뜮뜱",
    6,
    "뜺뜼",
    7,
    "띅띆띇띉띊띋띍",
    6,
    "띖",
    9,
    "띡띢띣띥띦띧띩",
    6,
    "띲띴띶",
    5,
    "띾띿랁랂랃랅",
    6,
    "랎랓랔랕랚랛랝랞"
  ],
  [
    "8e41",
    "랟랡",
    6,
    "랪랮",
    5,
    "랶랷랹",
    8
  ],
  [
    "8e61",
    "럂",
    4,
    "럈럊",
    19
  ],
  [
    "8e81",
    "럞",
    13,
    "럮럯럱럲럳럵",
    6,
    "럾렂",
    4,
    "렊렋렍렎렏렑",
    6,
    "렚렜렞",
    5,
    "렦렧렩렪렫렭",
    6,
    "렶렺",
    5,
    "롁롂롃롅",
    11,
    "롒롔",
    7,
    "롞롟롡롢롣롥",
    6,
    "롮롰롲",
    5,
    "롹롺롻롽",
    7
  ],
  [
    "8f41",
    "뢅",
    7,
    "뢎",
    17
  ],
  [
    "8f61",
    "뢠",
    7,
    "뢩",
    6,
    "뢱뢲뢳뢵뢶뢷뢹",
    4
  ],
  [
    "8f81",
    "뢾뢿룂룄룆",
    5,
    "룍룎룏룑룒룓룕",
    7,
    "룞룠룢",
    5,
    "룪룫룭룮룯룱",
    6,
    "룺룼룾",
    5,
    "뤅",
    18,
    "뤙",
    6,
    "뤡",
    26,
    "뤾뤿륁륂륃륅",
    6,
    "륍륎륐륒",
    5
  ],
  [
    "9041",
    "륚륛륝륞륟륡",
    6,
    "륪륬륮",
    5,
    "륶륷륹륺륻륽"
  ],
  [
    "9061",
    "륾",
    5,
    "릆릈릋릌릏",
    15
  ],
  [
    "9081",
    "릟",
    12,
    "릮릯릱릲릳릵",
    6,
    "릾맀맂",
    5,
    "맊맋맍맓",
    4,
    "맚맜맟맠맢맦맧맩맪맫맭",
    6,
    "맶맻",
    4,
    "먂",
    5,
    "먉",
    11,
    "먖",
    33,
    "먺먻먽먾먿멁멃멄멅멆"
  ],
  [
    "9141",
    "멇멊멌멏멐멑멒멖멗멙멚멛멝",
    6,
    "멦멪",
    5
  ],
  [
    "9161",
    "멲멳멵멶멷멹",
    9,
    "몆몈몉몊몋몍",
    5
  ],
  [
    "9181",
    "몓",
    20,
    "몪몭몮몯몱몳",
    4,
    "몺몼몾",
    5,
    "뫅뫆뫇뫉",
    14,
    "뫚",
    33,
    "뫽뫾뫿묁묂묃묅",
    7,
    "묎묐묒",
    5,
    "묙묚묛묝묞묟묡",
    6
  ],
  [
    "9241",
    "묨묪묬",
    7,
    "묷묹묺묿",
    4,
    "뭆뭈뭊뭋뭌뭎뭑뭒"
  ],
  [
    "9261",
    "뭓뭕뭖뭗뭙",
    7,
    "뭢뭤",
    7,
    "뭭",
    4
  ],
  [
    "9281",
    "뭲",
    21,
    "뮉뮊뮋뮍뮎뮏뮑",
    18,
    "뮥뮦뮧뮩뮪뮫뮭",
    6,
    "뮵뮶뮸",
    7,
    "믁믂믃믅믆믇믉",
    6,
    "믑믒믔",
    35,
    "믺믻믽믾밁"
  ],
  [
    "9341",
    "밃",
    4,
    "밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"
  ],
  [
    "9361",
    "밶밷밹",
    6,
    "뱂뱆뱇뱈뱊뱋뱎뱏뱑",
    8
  ],
  [
    "9381",
    "뱚뱛뱜뱞",
    37,
    "벆벇벉벊벍벏",
    4,
    "벖벘벛",
    4,
    "벢벣벥벦벩",
    6,
    "벲벶",
    5,
    "벾벿볁볂볃볅",
    7,
    "볎볒볓볔볖볗볙볚볛볝",
    22,
    "볷볹볺볻볽"
  ],
  [
    "9441",
    "볾",
    5,
    "봆봈봊",
    5,
    "봑봒봓봕",
    8
  ],
  [
    "9461",
    "봞",
    5,
    "봥",
    6,
    "봭",
    12
  ],
  [
    "9481",
    "봺",
    5,
    "뵁",
    6,
    "뵊뵋뵍뵎뵏뵑",
    6,
    "뵚",
    9,
    "뵥뵦뵧뵩",
    22,
    "붂붃붅붆붋",
    4,
    "붒붔붖붗붘붛붝",
    6,
    "붥",
    10,
    "붱",
    6,
    "붹",
    24
  ],
  [
    "9541",
    "뷒뷓뷖뷗뷙뷚뷛뷝",
    11,
    "뷪",
    5,
    "뷱"
  ],
  [
    "9561",
    "뷲뷳뷵뷶뷷뷹",
    6,
    "븁븂븄븆",
    5,
    "븎븏븑븒븓"
  ],
  [
    "9581",
    "븕",
    6,
    "븞븠",
    35,
    "빆빇빉빊빋빍빏",
    4,
    "빖빘빜빝빞빟빢빣빥빦빧빩빫",
    4,
    "빲빶",
    4,
    "빾빿뺁뺂뺃뺅",
    6,
    "뺎뺒",
    5,
    "뺚",
    13,
    "뺩",
    14
  ],
  [
    "9641",
    "뺸",
    23,
    "뻒뻓"
  ],
  [
    "9661",
    "뻕뻖뻙",
    6,
    "뻡뻢뻦",
    5,
    "뻭",
    8
  ],
  [
    "9681",
    "뻶",
    10,
    "뼂",
    5,
    "뼊",
    13,
    "뼚뼞",
    33,
    "뽂뽃뽅뽆뽇뽉",
    6,
    "뽒뽓뽔뽖",
    44
  ],
  [
    "9741",
    "뾃",
    16,
    "뾕",
    8
  ],
  [
    "9761",
    "뾞",
    17,
    "뾱",
    7
  ],
  [
    "9781",
    "뾹",
    11,
    "뿆",
    5,
    "뿎뿏뿑뿒뿓뿕",
    6,
    "뿝뿞뿠뿢",
    89,
    "쀽쀾쀿"
  ],
  [
    "9841",
    "쁀",
    16,
    "쁒",
    5,
    "쁙쁚쁛"
  ],
  [
    "9861",
    "쁝쁞쁟쁡",
    6,
    "쁪",
    15
  ],
  [
    "9881",
    "쁺",
    21,
    "삒삓삕삖삗삙",
    6,
    "삢삤삦",
    5,
    "삮삱삲삷",
    4,
    "삾샂샃샄샆샇샊샋샍샎샏샑",
    6,
    "샚샞",
    5,
    "샦샧샩샪샫샭",
    6,
    "샶샸샺",
    5,
    "섁섂섃섅섆섇섉",
    6,
    "섑섒섓섔섖",
    5,
    "섡섢섥섨섩섪섫섮"
  ],
  [
    "9941",
    "섲섳섴섵섷섺섻섽섾섿셁",
    6,
    "셊셎",
    5,
    "셖셗"
  ],
  [
    "9961",
    "셙셚셛셝",
    6,
    "셦셪",
    5,
    "셱셲셳셵셶셷셹셺셻"
  ],
  [
    "9981",
    "셼",
    8,
    "솆",
    5,
    "솏솑솒솓솕솗",
    4,
    "솞솠솢솣솤솦솧솪솫솭솮솯솱",
    11,
    "솾",
    5,
    "쇅쇆쇇쇉쇊쇋쇍",
    6,
    "쇕쇖쇙",
    6,
    "쇡쇢쇣쇥쇦쇧쇩",
    6,
    "쇲쇴",
    7,
    "쇾쇿숁숂숃숅",
    6,
    "숎숐숒",
    5,
    "숚숛숝숞숡숢숣"
  ],
  [
    "9a41",
    "숤숥숦숧숪숬숮숰숳숵",
    16
  ],
  [
    "9a61",
    "쉆쉇쉉",
    6,
    "쉒쉓쉕쉖쉗쉙",
    6,
    "쉡쉢쉣쉤쉦"
  ],
  [
    "9a81",
    "쉧",
    4,
    "쉮쉯쉱쉲쉳쉵",
    6,
    "쉾슀슂",
    5,
    "슊",
    5,
    "슑",
    6,
    "슙슚슜슞",
    5,
    "슦슧슩슪슫슮",
    5,
    "슶슸슺",
    33,
    "싞싟싡싢싥",
    5,
    "싮싰싲싳싴싵싷싺싽싾싿쌁",
    6,
    "쌊쌋쌎쌏"
  ],
  [
    "9b41",
    "쌐쌑쌒쌖쌗쌙쌚쌛쌝",
    6,
    "쌦쌧쌪",
    8
  ],
  [
    "9b61",
    "쌳",
    17,
    "썆",
    7
  ],
  [
    "9b81",
    "썎",
    25,
    "썪썫썭썮썯썱썳",
    4,
    "썺썻썾",
    5,
    "쎅쎆쎇쎉쎊쎋쎍",
    50,
    "쏁",
    22,
    "쏚"
  ],
  [
    "9c41",
    "쏛쏝쏞쏡쏣",
    4,
    "쏪쏫쏬쏮",
    5,
    "쏶쏷쏹",
    5
  ],
  [
    "9c61",
    "쏿",
    8,
    "쐉",
    6,
    "쐑",
    9
  ],
  [
    "9c81",
    "쐛",
    8,
    "쐥",
    6,
    "쐭쐮쐯쐱쐲쐳쐵",
    6,
    "쐾",
    9,
    "쑉",
    26,
    "쑦쑧쑩쑪쑫쑭",
    6,
    "쑶쑷쑸쑺",
    5,
    "쒁",
    18,
    "쒕",
    6,
    "쒝",
    12
  ],
  [
    "9d41",
    "쒪",
    13,
    "쒹쒺쒻쒽",
    8
  ],
  [
    "9d61",
    "쓆",
    25
  ],
  [
    "9d81",
    "쓠",
    8,
    "쓪",
    5,
    "쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂",
    9,
    "씍씎씏씑씒씓씕",
    6,
    "씝",
    10,
    "씪씫씭씮씯씱",
    6,
    "씺씼씾",
    5,
    "앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩",
    6,
    "앲앶",
    5,
    "앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔"
  ],
  [
    "9e41",
    "얖얙얚얛얝얞얟얡",
    7,
    "얪",
    9,
    "얶"
  ],
  [
    "9e61",
    "얷얺얿",
    4,
    "엋엍엏엒엓엕엖엗엙",
    6,
    "엢엤엦엧"
  ],
  [
    "9e81",
    "엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑",
    6,
    "옚옝",
    6,
    "옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉",
    6,
    "왒왖",
    5,
    "왞왟왡",
    10,
    "왭왮왰왲",
    5,
    "왺왻왽왾왿욁",
    6,
    "욊욌욎",
    5,
    "욖욗욙욚욛욝",
    6,
    "욦"
  ],
  [
    "9f41",
    "욨욪",
    5,
    "욲욳욵욶욷욻",
    4,
    "웂웄웆",
    5,
    "웎"
  ],
  [
    "9f61",
    "웏웑웒웓웕",
    6,
    "웞웟웢",
    5,
    "웪웫웭웮웯웱웲"
  ],
  [
    "9f81",
    "웳",
    4,
    "웺웻웼웾",
    5,
    "윆윇윉윊윋윍",
    6,
    "윖윘윚",
    5,
    "윢윣윥윦윧윩",
    6,
    "윲윴윶윸윹윺윻윾윿읁읂읃읅",
    4,
    "읋읎읐읙읚읛읝읞읟읡",
    6,
    "읩읪읬",
    7,
    "읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛",
    4,
    "잢잧",
    4,
    "잮잯잱잲잳잵잶잷"
  ],
  [
    "a041",
    "잸잹잺잻잾쟂",
    5,
    "쟊쟋쟍쟏쟑",
    6,
    "쟙쟚쟛쟜"
  ],
  [
    "a061",
    "쟞",
    5,
    "쟥쟦쟧쟩쟪쟫쟭",
    13
  ],
  [
    "a081",
    "쟻",
    4,
    "젂젃젅젆젇젉젋",
    4,
    "젒젔젗",
    4,
    "젞젟젡젢젣젥",
    6,
    "젮젰젲",
    5,
    "젹젺젻젽젾젿졁",
    6,
    "졊졋졎",
    5,
    "졕",
    26,
    "졲졳졵졶졷졹졻",
    4,
    "좂좄좈좉좊좎",
    5,
    "좕",
    7,
    "좞좠좢좣좤"
  ],
  [
    "a141",
    "좥좦좧좩",
    18,
    "좾좿죀죁"
  ],
  [
    "a161",
    "죂죃죅죆죇죉죊죋죍",
    6,
    "죖죘죚",
    5,
    "죢죣죥"
  ],
  [
    "a181",
    "죦",
    14,
    "죶",
    5,
    "죾죿줁줂줃줇",
    4,
    "줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈",
    9,
    "±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢"
  ],
  [
    "a241",
    "줐줒",
    5,
    "줙",
    18
  ],
  [
    "a261",
    "줭",
    6,
    "줵",
    18
  ],
  [
    "a281",
    "쥈",
    7,
    "쥒쥓쥕쥖쥗쥙",
    6,
    "쥢쥤",
    7,
    "쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®"
  ],
  [
    "a341",
    "쥱쥲쥳쥵",
    6,
    "쥽",
    10,
    "즊즋즍즎즏"
  ],
  [
    "a361",
    "즑",
    6,
    "즚즜즞",
    16
  ],
  [
    "a381",
    "즯",
    16,
    "짂짃짅짆짉짋",
    4,
    "짒짔짗짘짛！",
    58,
    "￦］",
    32,
    "￣"
  ],
  [
    "a441",
    "짞짟짡짣짥짦짨짩짪짫짮짲",
    5,
    "짺짻짽짾짿쨁쨂쨃쨄"
  ],
  [
    "a461",
    "쨅쨆쨇쨊쨎",
    5,
    "쨕쨖쨗쨙",
    12
  ],
  [
    "a481",
    "쨦쨧쨨쨪",
    28,
    "ㄱ",
    93
  ],
  [
    "a541",
    "쩇",
    4,
    "쩎쩏쩑쩒쩓쩕",
    6,
    "쩞쩢",
    5,
    "쩩쩪"
  ],
  [
    "a561",
    "쩫",
    17,
    "쩾",
    5,
    "쪅쪆"
  ],
  [
    "a581",
    "쪇",
    16,
    "쪙",
    14,
    "ⅰ",
    9
  ],
  [
    "a5b0",
    "Ⅰ",
    9
  ],
  [
    "a5c1",
    "Α",
    16,
    "Σ",
    6
  ],
  [
    "a5e1",
    "α",
    16,
    "σ",
    6
  ],
  [
    "a641",
    "쪨",
    19,
    "쪾쪿쫁쫂쫃쫅"
  ],
  [
    "a661",
    "쫆",
    5,
    "쫎쫐쫒쫔쫕쫖쫗쫚",
    5,
    "쫡",
    6
  ],
  [
    "a681",
    "쫨쫩쫪쫫쫭",
    6,
    "쫵",
    18,
    "쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃",
    7
  ],
  [
    "a741",
    "쬋",
    4,
    "쬑쬒쬓쬕쬖쬗쬙",
    6,
    "쬢",
    7
  ],
  [
    "a761",
    "쬪",
    22,
    "쭂쭃쭄"
  ],
  [
    "a781",
    "쭅쭆쭇쭊쭋쭍쭎쭏쭑",
    6,
    "쭚쭛쭜쭞",
    5,
    "쭥",
    7,
    "㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙",
    9,
    "㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰",
    9,
    "㎀",
    4,
    "㎺",
    5,
    "㎐",
    4,
    "Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆"
  ],
  [
    "a841",
    "쭭",
    10,
    "쭺",
    14
  ],
  [
    "a861",
    "쮉",
    18,
    "쮝",
    6
  ],
  [
    "a881",
    "쮤",
    19,
    "쮹",
    11,
    "ÆÐªĦ"
  ],
  [
    "a8a6",
    "Ĳ"
  ],
  [
    "a8a8",
    "ĿŁØŒºÞŦŊ"
  ],
  [
    "a8b1",
    "㉠",
    27,
    "ⓐ",
    25,
    "①",
    14,
    "½⅓⅔¼¾⅛⅜⅝⅞"
  ],
  [
    "a941",
    "쯅",
    14,
    "쯕",
    10
  ],
  [
    "a961",
    "쯠쯡쯢쯣쯥쯦쯨쯪",
    18
  ],
  [
    "a981",
    "쯽",
    14,
    "찎찏찑찒찓찕",
    6,
    "찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀",
    27,
    "⒜",
    25,
    "⑴",
    14,
    "¹²³⁴ⁿ₁₂₃₄"
  ],
  [
    "aa41",
    "찥찦찪찫찭찯찱",
    6,
    "찺찿",
    4,
    "챆챇챉챊챋챍챎"
  ],
  [
    "aa61",
    "챏",
    4,
    "챖챚",
    5,
    "챡챢챣챥챧챩",
    6,
    "챱챲"
  ],
  [
    "aa81",
    "챳챴챶",
    29,
    "ぁ",
    82
  ],
  [
    "ab41",
    "첔첕첖첗첚첛첝첞첟첡",
    6,
    "첪첮",
    5,
    "첶첷첹"
  ],
  [
    "ab61",
    "첺첻첽",
    6,
    "쳆쳈쳊",
    5,
    "쳑쳒쳓쳕",
    5
  ],
  [
    "ab81",
    "쳛",
    8,
    "쳥",
    6,
    "쳭쳮쳯쳱",
    12,
    "ァ",
    85
  ],
  [
    "ac41",
    "쳾쳿촀촂",
    5,
    "촊촋촍촎촏촑",
    6,
    "촚촜촞촟촠"
  ],
  [
    "ac61",
    "촡촢촣촥촦촧촩촪촫촭",
    11,
    "촺",
    4
  ],
  [
    "ac81",
    "촿",
    28,
    "쵝쵞쵟А",
    5,
    "ЁЖ",
    25
  ],
  [
    "acd1",
    "а",
    5,
    "ёж",
    25
  ],
  [
    "ad41",
    "쵡쵢쵣쵥",
    6,
    "쵮쵰쵲",
    5,
    "쵹",
    7
  ],
  [
    "ad61",
    "춁",
    6,
    "춉",
    10,
    "춖춗춙춚춛춝춞춟"
  ],
  [
    "ad81",
    "춠춡춢춣춦춨춪",
    5,
    "춱",
    18,
    "췅"
  ],
  [
    "ae41",
    "췆",
    5,
    "췍췎췏췑",
    16
  ],
  [
    "ae61",
    "췢",
    5,
    "췩췪췫췭췮췯췱",
    6,
    "췺췼췾",
    4
  ],
  [
    "ae81",
    "츃츅츆츇츉츊츋츍",
    6,
    "츕츖츗츘츚",
    5,
    "츢츣츥츦츧츩츪츫"
  ],
  [
    "af41",
    "츬츭츮츯츲츴츶",
    19
  ],
  [
    "af61",
    "칊",
    13,
    "칚칛칝칞칢",
    5,
    "칪칬"
  ],
  [
    "af81",
    "칮",
    5,
    "칶칷칹칺칻칽",
    6,
    "캆캈캊",
    5,
    "캒캓캕캖캗캙"
  ],
  [
    "b041",
    "캚",
    5,
    "캢캦",
    5,
    "캮",
    12
  ],
  [
    "b061",
    "캻",
    5,
    "컂",
    19
  ],
  [
    "b081",
    "컖",
    13,
    "컦컧컩컪컭",
    6,
    "컶컺",
    5,
    "가각간갇갈갉갊감",
    7,
    "같",
    4,
    "갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆"
  ],
  [
    "b141",
    "켂켃켅켆켇켉",
    6,
    "켒켔켖",
    5,
    "켝켞켟켡켢켣"
  ],
  [
    "b161",
    "켥",
    6,
    "켮켲",
    5,
    "켹",
    11
  ],
  [
    "b181",
    "콅",
    14,
    "콖콗콙콚콛콝",
    6,
    "콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸"
  ],
  [
    "b241",
    "콭콮콯콲콳콵콶콷콹",
    6,
    "쾁쾂쾃쾄쾆",
    5,
    "쾍"
  ],
  [
    "b261",
    "쾎",
    18,
    "쾢",
    5,
    "쾩"
  ],
  [
    "b281",
    "쾪",
    5,
    "쾱",
    18,
    "쿅",
    6,
    "깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙"
  ],
  [
    "b341",
    "쿌",
    19,
    "쿢쿣쿥쿦쿧쿩"
  ],
  [
    "b361",
    "쿪",
    5,
    "쿲쿴쿶",
    5,
    "쿽쿾쿿퀁퀂퀃퀅",
    5
  ],
  [
    "b381",
    "퀋",
    5,
    "퀒",
    5,
    "퀙",
    19,
    "끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫",
    4,
    "낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝"
  ],
  [
    "b441",
    "퀮",
    5,
    "퀶퀷퀹퀺퀻퀽",
    6,
    "큆큈큊",
    5
  ],
  [
    "b461",
    "큑큒큓큕큖큗큙",
    6,
    "큡",
    10,
    "큮큯"
  ],
  [
    "b481",
    "큱큲큳큵",
    6,
    "큾큿킀킂",
    18,
    "뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫",
    4,
    "닳담답닷",
    4,
    "닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥"
  ],
  [
    "b541",
    "킕",
    14,
    "킦킧킩킪킫킭",
    5
  ],
  [
    "b561",
    "킳킶킸킺",
    5,
    "탂탃탅탆탇탊",
    5,
    "탒탖",
    4
  ],
  [
    "b581",
    "탛탞탟탡탢탣탥",
    6,
    "탮탲",
    5,
    "탹",
    11,
    "덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸"
  ],
  [
    "b641",
    "턅",
    7,
    "턎",
    17
  ],
  [
    "b661",
    "턠",
    15,
    "턲턳턵턶턷턹턻턼턽턾"
  ],
  [
    "b681",
    "턿텂텆",
    5,
    "텎텏텑텒텓텕",
    6,
    "텞텠텢",
    5,
    "텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗"
  ],
  [
    "b741",
    "텮",
    13,
    "텽",
    6,
    "톅톆톇톉톊"
  ],
  [
    "b761",
    "톋",
    20,
    "톢톣톥톦톧"
  ],
  [
    "b781",
    "톩",
    6,
    "톲톴톶톷톸톹톻톽톾톿퇁",
    14,
    "래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩"
  ],
  [
    "b841",
    "퇐",
    7,
    "퇙",
    17
  ],
  [
    "b861",
    "퇫",
    8,
    "퇵퇶퇷퇹",
    13
  ],
  [
    "b881",
    "툈툊",
    5,
    "툑",
    24,
    "륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많",
    4,
    "맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼"
  ],
  [
    "b941",
    "툪툫툮툯툱툲툳툵",
    6,
    "툾퉀퉂",
    5,
    "퉉퉊퉋퉌"
  ],
  [
    "b961",
    "퉍",
    14,
    "퉝",
    6,
    "퉥퉦퉧퉨"
  ],
  [
    "b981",
    "퉩",
    22,
    "튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바",
    4,
    "받",
    4,
    "밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗"
  ],
  [
    "ba41",
    "튍튎튏튒튓튔튖",
    5,
    "튝튞튟튡튢튣튥",
    6,
    "튭"
  ],
  [
    "ba61",
    "튮튯튰튲",
    5,
    "튺튻튽튾틁틃",
    4,
    "틊틌",
    5
  ],
  [
    "ba81",
    "틒틓틕틖틗틙틚틛틝",
    6,
    "틦",
    9,
    "틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤"
  ],
  [
    "bb41",
    "틻",
    4,
    "팂팄팆",
    5,
    "팏팑팒팓팕팗",
    4,
    "팞팢팣"
  ],
  [
    "bb61",
    "팤팦팧팪팫팭팮팯팱",
    6,
    "팺팾",
    5,
    "퍆퍇퍈퍉"
  ],
  [
    "bb81",
    "퍊",
    31,
    "빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤"
  ],
  [
    "bc41",
    "퍪",
    17,
    "퍾퍿펁펂펃펅펆펇"
  ],
  [
    "bc61",
    "펈펉펊펋펎펒",
    5,
    "펚펛펝펞펟펡",
    6,
    "펪펬펮"
  ],
  [
    "bc81",
    "펯",
    4,
    "펵펶펷펹펺펻펽",
    6,
    "폆폇폊",
    5,
    "폑",
    5,
    "샥샨샬샴샵샷샹섀섄섈섐섕서",
    4,
    "섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭"
  ],
  [
    "bd41",
    "폗폙",
    7,
    "폢폤",
    7,
    "폮폯폱폲폳폵폶폷"
  ],
  [
    "bd61",
    "폸폹폺폻폾퐀퐂",
    5,
    "퐉",
    13
  ],
  [
    "bd81",
    "퐗",
    5,
    "퐞",
    25,
    "숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰"
  ],
  [
    "be41",
    "퐸",
    7,
    "푁푂푃푅",
    14
  ],
  [
    "be61",
    "푔",
    7,
    "푝푞푟푡푢푣푥",
    7,
    "푮푰푱푲"
  ],
  [
    "be81",
    "푳",
    4,
    "푺푻푽푾풁풃",
    4,
    "풊풌풎",
    5,
    "풕",
    8,
    "쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄",
    6,
    "엌엎"
  ],
  [
    "bf41",
    "풞",
    10,
    "풪",
    14
  ],
  [
    "bf61",
    "풹",
    18,
    "퓍퓎퓏퓑퓒퓓퓕"
  ],
  [
    "bf81",
    "퓖",
    5,
    "퓝퓞퓠",
    7,
    "퓩퓪퓫퓭퓮퓯퓱",
    6,
    "퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염",
    5,
    "옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨"
  ],
  [
    "c041",
    "퓾",
    5,
    "픅픆픇픉픊픋픍",
    6,
    "픖픘",
    5
  ],
  [
    "c061",
    "픞",
    25
  ],
  [
    "c081",
    "픸픹픺픻픾픿핁핂핃핅",
    6,
    "핎핐핒",
    5,
    "핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응",
    7,
    "읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊"
  ],
  [
    "c141",
    "핤핦핧핪핬핮",
    5,
    "핶핷핹핺핻핽",
    6,
    "햆햊햋"
  ],
  [
    "c161",
    "햌햍햎햏햑",
    19,
    "햦햧"
  ],
  [
    "c181",
    "햨",
    31,
    "점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓"
  ],
  [
    "c241",
    "헊헋헍헎헏헑헓",
    4,
    "헚헜헞",
    5,
    "헦헧헩헪헫헭헮"
  ],
  [
    "c261",
    "헯",
    4,
    "헶헸헺",
    5,
    "혂혃혅혆혇혉",
    6,
    "혒"
  ],
  [
    "c281",
    "혖",
    5,
    "혝혞혟혡혢혣혥",
    7,
    "혮",
    9,
    "혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻"
  ],
  [
    "c341",
    "혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝",
    4
  ],
  [
    "c361",
    "홢",
    4,
    "홨홪",
    5,
    "홲홳홵",
    11
  ],
  [
    "c381",
    "횁횂횄횆",
    5,
    "횎횏횑횒횓횕",
    7,
    "횞횠횢",
    5,
    "횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층"
  ],
  [
    "c441",
    "횫횭횮횯횱",
    7,
    "횺횼",
    7,
    "훆훇훉훊훋"
  ],
  [
    "c461",
    "훍훎훏훐훒훓훕훖훘훚",
    5,
    "훡훢훣훥훦훧훩",
    4
  ],
  [
    "c481",
    "훮훯훱훲훳훴훶",
    5,
    "훾훿휁휂휃휅",
    11,
    "휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼"
  ],
  [
    "c541",
    "휕휖휗휚휛휝휞휟휡",
    6,
    "휪휬휮",
    5,
    "휶휷휹"
  ],
  [
    "c561",
    "휺휻휽",
    6,
    "흅흆흈흊",
    5,
    "흒흓흕흚",
    4
  ],
  [
    "c581",
    "흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵",
    6,
    "흾흿힀힂",
    5,
    "힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜"
  ],
  [
    "c641",
    "힍힎힏힑",
    6,
    "힚힜힞",
    5
  ],
  [
    "c6a1",
    "퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁"
  ],
  [
    "c7a1",
    "퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠"
  ],
  [
    "c8a1",
    "혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝"
  ],
  [
    "caa1",
    "伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕"
  ],
  [
    "cba1",
    "匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢"
  ],
  [
    "cca1",
    "瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械"
  ],
  [
    "cda1",
    "棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜"
  ],
  [
    "cea1",
    "科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾"
  ],
  [
    "cfa1",
    "區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴"
  ],
  [
    "d0a1",
    "鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣"
  ],
  [
    "d1a1",
    "朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩",
    5,
    "那樂",
    4,
    "諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉"
  ],
  [
    "d2a1",
    "納臘蠟衲囊娘廊",
    4,
    "乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧",
    5,
    "駑魯",
    10,
    "濃籠聾膿農惱牢磊腦賂雷尿壘",
    7,
    "嫩訥杻紐勒",
    5,
    "能菱陵尼泥匿溺多茶"
  ],
  [
    "d3a1",
    "丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃"
  ],
  [
    "d4a1",
    "棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅"
  ],
  [
    "d5a1",
    "蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣"
  ],
  [
    "d6a1",
    "煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼"
  ],
  [
    "d7a1",
    "遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬"
  ],
  [
    "d8a1",
    "立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅"
  ],
  [
    "d9a1",
    "蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文"
  ],
  [
    "daa1",
    "汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑"
  ],
  [
    "dba1",
    "發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖"
  ],
  [
    "dca1",
    "碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦"
  ],
  [
    "dda1",
    "孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥"
  ],
  [
    "dea1",
    "脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索"
  ],
  [
    "dfa1",
    "傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署"
  ],
  [
    "e0a1",
    "胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬"
  ],
  [
    "e1a1",
    "聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁"
  ],
  [
    "e2a1",
    "戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧"
  ],
  [
    "e3a1",
    "嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁"
  ],
  [
    "e4a1",
    "沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額"
  ],
  [
    "e5a1",
    "櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬"
  ],
  [
    "e6a1",
    "旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒"
  ],
  [
    "e7a1",
    "簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳"
  ],
  [
    "e8a1",
    "烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療"
  ],
  [
    "e9a1",
    "窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓"
  ],
  [
    "eaa1",
    "運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜"
  ],
  [
    "eba1",
    "濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼"
  ],
  [
    "eca1",
    "議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄"
  ],
  [
    "eda1",
    "立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長"
  ],
  [
    "eea1",
    "障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱"
  ],
  [
    "efa1",
    "煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖"
  ],
  [
    "f0a1",
    "靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫"
  ],
  [
    "f1a1",
    "踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只"
  ],
  [
    "f2a1",
    "咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯"
  ],
  [
    "f3a1",
    "鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策"
  ],
  [
    "f4a1",
    "責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢"
  ],
  [
    "f5a1",
    "椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃"
  ],
  [
    "f6a1",
    "贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託"
  ],
  [
    "f7a1",
    "鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑"
  ],
  [
    "f8a1",
    "阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃"
  ],
  [
    "f9a1",
    "品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航"
  ],
  [
    "faa1",
    "行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型"
  ],
  [
    "fba1",
    "形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵"
  ],
  [
    "fca1",
    "禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆"
  ],
  [
    "fda1",
    "爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰"
  ]
], fu = [
  [
    "0",
    "\0",
    127
  ],
  [
    "a140",
    "　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚"
  ],
  [
    "a1a1",
    "﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢",
    4,
    "～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／"
  ],
  [
    "a240",
    "＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁",
    7,
    "▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭"
  ],
  [
    "a2a1",
    "╮╰╯═╞╪╡◢◣◥◤╱╲╳０",
    9,
    "Ⅰ",
    9,
    "〡",
    8,
    "十卄卅Ａ",
    25,
    "ａ",
    21
  ],
  [
    "a340",
    "ｗｘｙｚΑ",
    16,
    "Σ",
    6,
    "α",
    16,
    "σ",
    6,
    "ㄅ",
    10
  ],
  [
    "a3a1",
    "ㄐ",
    25,
    "˙ˉˊˇˋ"
  ],
  [
    "a3e1",
    "€"
  ],
  [
    "a440",
    "一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才"
  ],
  [
    "a4a1",
    "丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙"
  ],
  [
    "a540",
    "世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外"
  ],
  [
    "a5a1",
    "央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全"
  ],
  [
    "a640",
    "共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年"
  ],
  [
    "a6a1",
    "式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣"
  ],
  [
    "a740",
    "作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍"
  ],
  [
    "a7a1",
    "均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠"
  ],
  [
    "a840",
    "杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒"
  ],
  [
    "a8a1",
    "芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵"
  ],
  [
    "a940",
    "咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居"
  ],
  [
    "a9a1",
    "屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊"
  ],
  [
    "aa40",
    "昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠"
  ],
  [
    "aaa1",
    "炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附"
  ],
  [
    "ab40",
    "陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品"
  ],
  [
    "aba1",
    "哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷"
  ],
  [
    "ac40",
    "拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗"
  ],
  [
    "aca1",
    "活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄"
  ],
  [
    "ad40",
    "耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥"
  ],
  [
    "ada1",
    "迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪"
  ],
  [
    "ae40",
    "哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙"
  ],
  [
    "aea1",
    "恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓"
  ],
  [
    "af40",
    "浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷"
  ],
  [
    "afa1",
    "砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃"
  ],
  [
    "b040",
    "虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡"
  ],
  [
    "b0a1",
    "陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀"
  ],
  [
    "b140",
    "娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽"
  ],
  [
    "b1a1",
    "情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺"
  ],
  [
    "b240",
    "毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶"
  ],
  [
    "b2a1",
    "瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼"
  ],
  [
    "b340",
    "莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途"
  ],
  [
    "b3a1",
    "部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠"
  ],
  [
    "b440",
    "婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍"
  ],
  [
    "b4a1",
    "插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋"
  ],
  [
    "b540",
    "溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘"
  ],
  [
    "b5a1",
    "窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁"
  ],
  [
    "b640",
    "詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑"
  ],
  [
    "b6a1",
    "間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼"
  ],
  [
    "b740",
    "媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業"
  ],
  [
    "b7a1",
    "楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督"
  ],
  [
    "b840",
    "睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫"
  ],
  [
    "b8a1",
    "腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊"
  ],
  [
    "b940",
    "辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴"
  ],
  [
    "b9a1",
    "飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇"
  ],
  [
    "ba40",
    "愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢"
  ],
  [
    "baa1",
    "滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬"
  ],
  [
    "bb40",
    "罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤"
  ],
  [
    "bba1",
    "說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜"
  ],
  [
    "bc40",
    "劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂"
  ],
  [
    "bca1",
    "慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃"
  ],
  [
    "bd40",
    "瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯"
  ],
  [
    "bda1",
    "翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞"
  ],
  [
    "be40",
    "輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉"
  ],
  [
    "bea1",
    "鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡"
  ],
  [
    "bf40",
    "濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊"
  ],
  [
    "bfa1",
    "縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚"
  ],
  [
    "c040",
    "錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇"
  ],
  [
    "c0a1",
    "嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬"
  ],
  [
    "c140",
    "瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪"
  ],
  [
    "c1a1",
    "薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁"
  ],
  [
    "c240",
    "駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘"
  ],
  [
    "c2a1",
    "癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦"
  ],
  [
    "c340",
    "鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸"
  ],
  [
    "c3a1",
    "獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類"
  ],
  [
    "c440",
    "願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼"
  ],
  [
    "c4a1",
    "纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴"
  ],
  [
    "c540",
    "護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬"
  ],
  [
    "c5a1",
    "禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒"
  ],
  [
    "c640",
    "讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲"
  ],
  [
    "c940",
    "乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕"
  ],
  [
    "c9a1",
    "氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋"
  ],
  [
    "ca40",
    "汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘"
  ],
  [
    "caa1",
    "吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇"
  ],
  [
    "cb40",
    "杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓"
  ],
  [
    "cba1",
    "芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢"
  ],
  [
    "cc40",
    "坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋"
  ],
  [
    "cca1",
    "怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲"
  ],
  [
    "cd40",
    "泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺"
  ],
  [
    "cda1",
    "矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏"
  ],
  [
    "ce40",
    "哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛"
  ],
  [
    "cea1",
    "峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺"
  ],
  [
    "cf40",
    "柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂"
  ],
  [
    "cfa1",
    "洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀"
  ],
  [
    "d040",
    "穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪"
  ],
  [
    "d0a1",
    "苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱"
  ],
  [
    "d140",
    "唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧"
  ],
  [
    "d1a1",
    "恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤"
  ],
  [
    "d240",
    "毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸"
  ],
  [
    "d2a1",
    "牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐"
  ],
  [
    "d340",
    "笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢"
  ],
  [
    "d3a1",
    "荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐"
  ],
  [
    "d440",
    "酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅"
  ],
  [
    "d4a1",
    "唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏"
  ],
  [
    "d540",
    "崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟"
  ],
  [
    "d5a1",
    "捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉"
  ],
  [
    "d640",
    "淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏"
  ],
  [
    "d6a1",
    "痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟"
  ],
  [
    "d740",
    "耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷"
  ],
  [
    "d7a1",
    "蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪"
  ],
  [
    "d840",
    "釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷"
  ],
  [
    "d8a1",
    "堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔"
  ],
  [
    "d940",
    "惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒"
  ],
  [
    "d9a1",
    "晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞"
  ],
  [
    "da40",
    "湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖"
  ],
  [
    "daa1",
    "琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥"
  ],
  [
    "db40",
    "罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳"
  ],
  [
    "dba1",
    "菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺"
  ],
  [
    "dc40",
    "軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈"
  ],
  [
    "dca1",
    "隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆"
  ],
  [
    "dd40",
    "媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤"
  ],
  [
    "dda1",
    "搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼"
  ],
  [
    "de40",
    "毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓"
  ],
  [
    "dea1",
    "煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓"
  ],
  [
    "df40",
    "稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯"
  ],
  [
    "dfa1",
    "腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤"
  ],
  [
    "e040",
    "觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿"
  ],
  [
    "e0a1",
    "遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠"
  ],
  [
    "e140",
    "凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠"
  ],
  [
    "e1a1",
    "寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉"
  ],
  [
    "e240",
    "榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊"
  ],
  [
    "e2a1",
    "漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓"
  ],
  [
    "e340",
    "禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞"
  ],
  [
    "e3a1",
    "耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻"
  ],
  [
    "e440",
    "裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍"
  ],
  [
    "e4a1",
    "銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘"
  ],
  [
    "e540",
    "噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉"
  ],
  [
    "e5a1",
    "憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒"
  ],
  [
    "e640",
    "澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙"
  ],
  [
    "e6a1",
    "獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟"
  ],
  [
    "e740",
    "膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢"
  ],
  [
    "e7a1",
    "蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧"
  ],
  [
    "e840",
    "踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓"
  ],
  [
    "e8a1",
    "銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮"
  ],
  [
    "e940",
    "噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺"
  ],
  [
    "e9a1",
    "憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸"
  ],
  [
    "ea40",
    "澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙"
  ],
  [
    "eaa1",
    "瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘"
  ],
  [
    "eb40",
    "蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠"
  ],
  [
    "eba1",
    "諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌"
  ],
  [
    "ec40",
    "錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕"
  ],
  [
    "eca1",
    "魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎"
  ],
  [
    "ed40",
    "檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶"
  ],
  [
    "eda1",
    "瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞"
  ],
  [
    "ee40",
    "蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞"
  ],
  [
    "eea1",
    "謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜"
  ],
  [
    "ef40",
    "鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰"
  ],
  [
    "efa1",
    "鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶"
  ],
  [
    "f040",
    "璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒"
  ],
  [
    "f0a1",
    "臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧"
  ],
  [
    "f140",
    "蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪"
  ],
  [
    "f1a1",
    "鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰"
  ],
  [
    "f240",
    "徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛"
  ],
  [
    "f2a1",
    "礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕"
  ],
  [
    "f340",
    "譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦"
  ],
  [
    "f3a1",
    "鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲"
  ],
  [
    "f440",
    "嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩"
  ],
  [
    "f4a1",
    "禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿"
  ],
  [
    "f540",
    "鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛"
  ],
  [
    "f5a1",
    "鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥"
  ],
  [
    "f640",
    "蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺"
  ],
  [
    "f6a1",
    "騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚"
  ],
  [
    "f740",
    "糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊"
  ],
  [
    "f7a1",
    "驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾"
  ],
  [
    "f840",
    "讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏"
  ],
  [
    "f8a1",
    "齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚"
  ],
  [
    "f940",
    "纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊"
  ],
  [
    "f9a1",
    "龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓"
  ]
], dZ = [
  [
    "8740",
    "䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻"
  ],
  [
    "8767",
    "綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬"
  ],
  [
    "87a1",
    "𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋"
  ],
  [
    "8840",
    "㇀",
    4,
    "𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ"
  ],
  [
    "88a1",
    "ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛"
  ],
  [
    "8940",
    "𪎩𡅅"
  ],
  [
    "8943",
    "攊"
  ],
  [
    "8946",
    "丽滝鵎釟"
  ],
  [
    "894c",
    "𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮"
  ],
  [
    "89a1",
    "琑糼緍楆竉刧"
  ],
  [
    "89ab",
    "醌碸酞肼"
  ],
  [
    "89b0",
    "贋胶𠧧"
  ],
  [
    "89b5",
    "肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁"
  ],
  [
    "89c1",
    "溚舾甙"
  ],
  [
    "89c5",
    "䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅"
  ],
  [
    "8a40",
    "𧶄唥"
  ],
  [
    "8a43",
    "𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓"
  ],
  [
    "8a64",
    "𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕"
  ],
  [
    "8a76",
    "䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯"
  ],
  [
    "8aa1",
    "𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱"
  ],
  [
    "8aac",
    "䠋𠆩㿺塳𢶍"
  ],
  [
    "8ab2",
    "𤗈𠓼𦂗𠽌𠶖啹䂻䎺"
  ],
  [
    "8abb",
    "䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃"
  ],
  [
    "8ac9",
    "𪘁𠸉𢫏𢳉"
  ],
  [
    "8ace",
    "𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻"
  ],
  [
    "8adf",
    "𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌"
  ],
  [
    "8af6",
    "𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭"
  ],
  [
    "8b40",
    "𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹"
  ],
  [
    "8b55",
    "𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑"
  ],
  [
    "8ba1",
    "𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁"
  ],
  [
    "8bde",
    "𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢"
  ],
  [
    "8c40",
    "倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋"
  ],
  [
    "8ca1",
    "𣏹椙橃𣱣泿"
  ],
  [
    "8ca7",
    "爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚"
  ],
  [
    "8cc9",
    "顨杫䉶圽"
  ],
  [
    "8cce",
    "藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶"
  ],
  [
    "8ce6",
    "峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻"
  ],
  [
    "8d40",
    "𠮟"
  ],
  [
    "8d42",
    "𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱"
  ],
  [
    "8da1",
    "㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘"
  ],
  [
    "8e40",
    "𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎"
  ],
  [
    "8ea1",
    "繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛"
  ],
  [
    "8f40",
    "蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖"
  ],
  [
    "8fa1",
    "𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起"
  ],
  [
    "9040",
    "趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛"
  ],
  [
    "90a1",
    "𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜"
  ],
  [
    "9140",
    "𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈"
  ],
  [
    "91a1",
    "鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨"
  ],
  [
    "9240",
    "𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘"
  ],
  [
    "92a1",
    "働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃"
  ],
  [
    "9340",
    "媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍"
  ],
  [
    "93a1",
    "摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋"
  ],
  [
    "9440",
    "銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻"
  ],
  [
    "94a1",
    "㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡"
  ],
  [
    "9540",
    "𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂"
  ],
  [
    "95a1",
    "衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰"
  ],
  [
    "9640",
    "桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸"
  ],
  [
    "96a1",
    "𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉"
  ],
  [
    "9740",
    "愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫"
  ],
  [
    "97a1",
    "𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎"
  ],
  [
    "9840",
    "𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦"
  ],
  [
    "98a1",
    "咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃"
  ],
  [
    "9940",
    "䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚"
  ],
  [
    "99a1",
    "䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿"
  ],
  [
    "9a40",
    "鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺"
  ],
  [
    "9aa1",
    "黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪"
  ],
  [
    "9b40",
    "𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌"
  ],
  [
    "9b62",
    "𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎"
  ],
  [
    "9ba1",
    "椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊"
  ],
  [
    "9c40",
    "嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶"
  ],
  [
    "9ca1",
    "㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏"
  ],
  [
    "9d40",
    "𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁"
  ],
  [
    "9da1",
    "辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢"
  ],
  [
    "9e40",
    "𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺"
  ],
  [
    "9ea1",
    "鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭"
  ],
  [
    "9ead",
    "𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹"
  ],
  [
    "9ec5",
    "㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲"
  ],
  [
    "9ef5",
    "噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼"
  ],
  [
    "9f40",
    "籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱"
  ],
  [
    "9f4f",
    "凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰"
  ],
  [
    "9fa1",
    "椬叚鰊鴂䰻陁榀傦畆𡝭駚剳"
  ],
  [
    "9fae",
    "酙隁酜"
  ],
  [
    "9fb2",
    "酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽"
  ],
  [
    "9fc1",
    "𤤙盖鮝个𠳔莾衂"
  ],
  [
    "9fc9",
    "届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳"
  ],
  [
    "9fdb",
    "歒酼龥鮗頮颴骺麨麄煺笔"
  ],
  [
    "9fe7",
    "毺蠘罸"
  ],
  [
    "9feb",
    "嘠𪙊蹷齓"
  ],
  [
    "9ff0",
    "跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇"
  ],
  [
    "a040",
    "𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷"
  ],
  [
    "a055",
    "𡠻𦸅"
  ],
  [
    "a058",
    "詾𢔛"
  ],
  [
    "a05b",
    "惽癧髗鵄鍮鮏蟵"
  ],
  [
    "a063",
    "蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽"
  ],
  [
    "a073",
    "坟慯抦戹拎㩜懢厪𣏵捤栂㗒"
  ],
  [
    "a0a1",
    "嵗𨯂迚𨸹"
  ],
  [
    "a0a6",
    "僙𡵆礆匲阸𠼻䁥"
  ],
  [
    "a0ae",
    "矾"
  ],
  [
    "a0b0",
    "糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦"
  ],
  [
    "a0d4",
    "覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷"
  ],
  [
    "a0e2",
    "罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫"
  ],
  [
    "a3c0",
    "␀",
    31,
    "␡"
  ],
  [
    "c6a1",
    "①",
    9,
    "⑴",
    9,
    "ⅰ",
    9,
    "丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ",
    23
  ],
  [
    "c740",
    "す",
    58,
    "ァアィイ"
  ],
  [
    "c7a1",
    "ゥ",
    81,
    "А",
    5,
    "ЁЖ",
    4
  ],
  [
    "c840",
    "Л",
    26,
    "ёж",
    25,
    "⇧↸↹㇏𠃌乚𠂊刂䒑"
  ],
  [
    "c8a1",
    "龰冈龱𧘇"
  ],
  [
    "c8cd",
    "￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣"
  ],
  [
    "c8f5",
    "ʃɐɛɔɵœøŋʊɪ"
  ],
  [
    "f9fe",
    "￭"
  ],
  [
    "fa40",
    "𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸"
  ],
  [
    "faa1",
    "鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍"
  ],
  [
    "fb40",
    "𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙"
  ],
  [
    "fba1",
    "𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂"
  ],
  [
    "fc40",
    "廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷"
  ],
  [
    "fca1",
    "𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝"
  ],
  [
    "fd40",
    "𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀"
  ],
  [
    "fda1",
    "𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎"
  ],
  [
    "fe40",
    "鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌"
  ],
  [
    "fea1",
    "𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔"
  ]
];
var No, mu;
function fZ() {
  return mu || (mu = 1, No = {
    // == Japanese/ShiftJIS ====================================================
    // All japanese encodings are based on JIS X set of standards:
    // JIS X 0201 - Single-byte encoding of ASCII + ¥ + Kana chars at 0xA1-0xDF.
    // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes. 
    //              Has several variations in 1978, 1983, 1990 and 1997.
    // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
    // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
    //              2 planes, first is superset of 0208, second - revised 0212.
    //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)
    // Byte encodings are:
    //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
    //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
    //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
    //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
    //               0x00-0x7F       - lower part of 0201
    //               0x8E, 0xA1-0xDF - upper part of 0201
    //               (0xA1-0xFE)x2   - 0208 plane (94x94).
    //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
    //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
    //               Used as-is in ISO2022 family.
    //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII, 
    //                0201-1976 Roman, 0208-1978, 0208-1983.
    //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
    //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
    //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
    //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
    //
    // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
    //
    // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html
    shiftjis: {
      type: "_dbcs",
      table: function() {
        return sZ;
      },
      encodeAdd: { "¥": 92, "‾": 126 },
      encodeSkipVals: [{ from: 60736, to: 63808 }]
    },
    csshiftjis: "shiftjis",
    mskanji: "shiftjis",
    sjis: "shiftjis",
    windows31j: "shiftjis",
    ms31j: "shiftjis",
    xsjis: "shiftjis",
    windows932: "shiftjis",
    ms932: "shiftjis",
    932: "shiftjis",
    cp932: "shiftjis",
    eucjp: {
      type: "_dbcs",
      table: function() {
        return aZ;
      },
      encodeAdd: { "¥": 92, "‾": 126 }
    },
    // TODO: KDDI extension to Shift_JIS
    // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
    // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.
    // == Chinese/GBK ==========================================================
    // http://en.wikipedia.org/wiki/GBK
    // We mostly implement W3C recommendation: https://www.w3.org/TR/encoding/#gbk-encoder
    // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
    gb2312: "cp936",
    gb231280: "cp936",
    gb23121980: "cp936",
    csgb2312: "cp936",
    csiso58gb231280: "cp936",
    euccn: "cp936",
    // Microsoft's CP936 is a subset and approximation of GBK.
    windows936: "cp936",
    ms936: "cp936",
    936: "cp936",
    cp936: {
      type: "_dbcs",
      table: function() {
        return _o;
      }
    },
    // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
    gbk: {
      type: "_dbcs",
      table: function() {
        return _o.concat(du);
      }
    },
    xgbk: "gbk",
    isoir58: "gbk",
    // GB18030 is an algorithmic extension of GBK.
    // Main source: https://www.w3.org/TR/encoding/#gbk-encoder
    // http://icu-project.org/docs/papers/gb18030.html
    // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
    // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
    gb18030: {
      type: "_dbcs",
      table: function() {
        return _o.concat(du);
      },
      gb18030: function() {
        return lZ;
      },
      encodeSkipVals: [128],
      encodeAdd: { "€": 41699 }
    },
    chinese: "gb18030",
    // == Korean ===============================================================
    // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
    windows949: "cp949",
    ms949: "cp949",
    949: "cp949",
    cp949: {
      type: "_dbcs",
      table: function() {
        return pZ;
      }
    },
    cseuckr: "cp949",
    csksc56011987: "cp949",
    euckr: "cp949",
    isoir149: "cp949",
    korean: "cp949",
    ksc56011987: "cp949",
    ksc56011989: "cp949",
    ksc5601: "cp949",
    // == Big5/Taiwan/Hong Kong ================================================
    // There are lots of tables for Big5 and cp950. Please see the following links for history:
    // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
    // Variations, in roughly number of defined chars:
    //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
    //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
    //  * Big5-2003 (Taiwan standard) almost superset of cp950.
    //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
    //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard. 
    //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
    //    Plus, it has 4 combining sequences.
    //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
    //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
    //    Implementations are not consistent within browsers; sometimes labeled as just big5.
    //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
    //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
    //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
    //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
    //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
    // 
    // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
    // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.
    windows950: "cp950",
    ms950: "cp950",
    950: "cp950",
    cp950: {
      type: "_dbcs",
      table: function() {
        return fu;
      }
    },
    // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
    big5: "big5hkscs",
    big5hkscs: {
      type: "_dbcs",
      table: function() {
        return fu.concat(dZ);
      },
      encodeSkipVals: [41676]
    },
    cnbig5: "big5hkscs",
    csbig5: "big5hkscs",
    xxbig5: "big5hkscs"
  }), No;
}
var hu;
function mZ() {
  return hu || (hu = 1, function(t) {
    for (var e = [
      QQ(),
      ZQ(),
      eZ(),
      tZ(),
      nZ(),
      rZ(),
      iZ(),
      oZ(),
      fZ()
    ], n = 0; n < e.length; n++) {
      var r = e[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
  }(vo)), vo;
}
var Ao, gu;
function hZ() {
  if (gu) return Ao;
  gu = 1;
  var t = Ot.Buffer;
  return Ao = function(e) {
    var n = e.Transform;
    function r(o, s) {
      this.conv = o, s = s || {}, s.decodeStrings = !1, n.call(this, s);
    }
    r.prototype = Object.create(n.prototype, {
      constructor: { value: r }
    }), r.prototype._transform = function(o, s, a) {
      if (typeof o != "string")
        return a(new Error("Iconv encoding stream needs strings as its input."));
      try {
        var c = this.conv.write(o);
        c && c.length && this.push(c), a();
      } catch (l) {
        a(l);
      }
    }, r.prototype._flush = function(o) {
      try {
        var s = this.conv.end();
        s && s.length && this.push(s), o();
      } catch (a) {
        o(a);
      }
    }, r.prototype.collect = function(o) {
      var s = [];
      return this.on("error", o), this.on("data", function(a) {
        s.push(a);
      }), this.on("end", function() {
        o(null, t.concat(s));
      }), this;
    };
    function i(o, s) {
      this.conv = o, s = s || {}, s.encoding = this.encoding = "utf8", n.call(this, s);
    }
    return i.prototype = Object.create(n.prototype, {
      constructor: { value: i }
    }), i.prototype._transform = function(o, s, a) {
      if (!t.isBuffer(o) && !(o instanceof Uint8Array))
        return a(new Error("Iconv decoding stream needs buffers as its input."));
      try {
        var c = this.conv.write(o);
        c && c.length && this.push(c, this.encoding), a();
      } catch (l) {
        a(l);
      }
    }, i.prototype._flush = function(o) {
      try {
        var s = this.conv.end();
        s && s.length && this.push(s, this.encoding), o();
      } catch (a) {
        o(a);
      }
    }, i.prototype.collect = function(o) {
      var s = "";
      return this.on("error", o), this.on("data", function(a) {
        s += a;
      }), this.on("end", function() {
        o(null, s);
      }), this;
    }, {
      IconvLiteEncoderStream: r,
      IconvLiteDecoderStream: i
    };
  }, Ao;
}
(function(t) {
  var e = Ot.Buffer, n = js, r = t.exports;
  r.encodings = null, r.defaultCharUnicode = "�", r.defaultCharSingleByte = "?", r.encode = function(s, a, c) {
    s = "" + (s || "");
    var l = r.getEncoder(a, c), u = l.write(s), p = l.end();
    return p && p.length > 0 ? e.concat([u, p]) : u;
  }, r.decode = function(s, a, c) {
    typeof s == "string" && (r.skipDecodeWarning || (console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding"), r.skipDecodeWarning = !0), s = e.from("" + (s || ""), "binary"));
    var l = r.getDecoder(a, c), u = l.write(s), p = l.end();
    return p ? u + p : u;
  }, r.encodingExists = function(s) {
    try {
      return r.getCodec(s), !0;
    } catch {
      return !1;
    }
  }, r.toEncoding = r.encode, r.fromEncoding = r.decode, r._codecDataCache = {}, r.getCodec = function(s) {
    r.encodings || (r.encodings = mZ());
    for (var a = r._canonicalizeEncoding(s), c = {}; ; ) {
      var l = r._codecDataCache[a];
      if (l)
        return l;
      var u = r.encodings[a];
      switch (typeof u) {
        case "string":
          a = u;
          break;
        case "object":
          for (var p in u)
            c[p] = u[p];
          c.encodingName || (c.encodingName = a), a = u.type;
          break;
        case "function":
          return c.encodingName || (c.encodingName = a), l = new u(c, r), r._codecDataCache[c.encodingName] = l, l;
        default:
          throw new Error("Encoding not recognized: '" + s + "' (searched as: '" + a + "')");
      }
    }
  }, r._canonicalizeEncoding = function(o) {
    return ("" + o).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
  }, r.getEncoder = function(s, a) {
    var c = r.getCodec(s), l = new c.encoder(a, c);
    return c.bomAware && a && a.addBOM && (l = new n.PrependBOM(l, a)), l;
  }, r.getDecoder = function(s, a) {
    var c = r.getCodec(s), l = new c.decoder(a, c);
    return c.bomAware && !(a && a.stripBOM === !1) && (l = new n.StripBOM(l, a)), l;
  }, r.enableStreamingAPI = function(s) {
    if (!r.supportsStreams) {
      var a = hZ()(s);
      r.IconvLiteEncoderStream = a.IconvLiteEncoderStream, r.IconvLiteDecoderStream = a.IconvLiteDecoderStream, r.encodeStream = function(l, u) {
        return new r.IconvLiteEncoderStream(r.getEncoder(l, u), u);
      }, r.decodeStream = function(l, u) {
        return new r.IconvLiteDecoderStream(r.getDecoder(l, u), u);
      }, r.supportsStreams = !0;
    }
  };
  var i;
  try {
    i = require("stream");
  } catch {
  }
  i && i.Transform ? r.enableStreamingAPI(i) : r.encodeStream = r.decodeStream = function() {
    throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.");
  };
})(zp);
var gZ = zp.exports;
const Xp = gZ, bu = at, cr = [
  "ISO-8859-1",
  "UTF-16",
  "UTF-16BE",
  "UTF-8"
];
pe.SplitBuffer = class {
  constructor(e = null, n = null) {
    this.value = e, this.remainder = n;
  }
};
pe.splitNullTerminatedBuffer = function(t, e = 0) {
  const n = [1, 2].includes(e) ? 2 : 1;
  for (let r = 0; r + n - 1 < t.length; r += n)
    if (t.readUIntBE(r, n) === 0)
      return new this.SplitBuffer(
        t.subarray(0, r),
        t.subarray(r + n)
      );
  return new this.SplitBuffer(null, t.subarray(0));
};
pe.terminationBuffer = function(t = 0) {
  return t === 1 || t === 2 ? Buffer.alloc(2, 0) : Buffer.alloc(1, 0);
};
pe.encodingFromStringOrByte = function(t) {
  return cr.indexOf(t) !== -1 || (t > -1 && t < cr.length ? t = cr[t] : t = cr[0]), t;
};
pe.stringToEncodedBuffer = function(t, e) {
  return Xp.encode(t, this.encodingFromStringOrByte(e));
};
pe.bufferToDecodedString = function(t, e) {
  return Xp.decode(t, this.encodingFromStringOrByte(e)).replace(/\0/g, "");
};
pe.getSpecOptions = function(t) {
  return bu.ID3_FRAME_OPTIONS[t] ? bu.ID3_FRAME_OPTIONS[t] : {};
};
pe.isValidID3Header = function(t) {
  return t.length < 10 || t.readUIntBE(0, 3) !== 4801587 || [2, 3, 4].indexOf(t[3]) === -1 || t[4] !== 0 ? !1 : this.isValidEncodedSize(t.slice(6, 10));
};
pe.getFramePosition = function(t) {
  let e = -1, n = !1;
  do
    e = t.indexOf("ID3", e + 1), e !== -1 && (n = this.isValidID3Header(t.slice(e, e + 10)));
  while (e !== -1 && !n);
  return n ? e : -1;
};
pe.isValidEncodedSize = function(t) {
  return ((t[0] | t[1] | t[2] | t[3]) & 128) === 0;
};
pe.encodeSize = function(t) {
  const e = t & 127, n = t >> 7 & 127, r = t >> 14 & 127, i = t >> 21 & 127;
  return Buffer.from([i, r, n, e]);
};
pe.decodeSize = function(t) {
  return (t[0] << 21) + (t[1] << 14) + (t[2] << 7) + t[3];
};
pe.getFrameSize = function(t, e, n) {
  let r;
  return n > 2 ? r = [t[4], t[5], t[6], t[7]] : r = [t[3], t[4], t[5]], e ? this.decodeSize(Buffer.from(r)) : Buffer.from(r).readUIntBE(0, r.length);
};
pe.parseTagHeaderFlags = function(t) {
  if (!(t instanceof Buffer && t.length >= 10))
    return {};
  const e = t[3], n = t[5];
  return e === 3 ? {
    unsynchronisation: !!(n & 128),
    extendedHeader: !!(n & 64),
    experimentalIndicator: !!(n & 32)
  } : e === 4 ? {
    unsynchronisation: !!(n & 128),
    extendedHeader: !!(n & 64),
    experimentalIndicator: !!(n & 32),
    footerPresent: !!(n & 16)
  } : {};
};
pe.parseFrameHeaderFlags = function(t, e) {
  if (!(t instanceof Buffer && t.length === 10))
    return {};
  const n = t[8], r = t[9];
  return e === 3 ? {
    tagAlterPreservation: !!(n & 128),
    fileAlterPreservation: !!(n & 64),
    readOnly: !!(n & 32),
    compression: !!(r & 128),
    encryption: !!(r & 64),
    groupingIdentity: !!(r & 32),
    dataLengthIndicator: !!(r & 128)
  } : e === 4 ? {
    tagAlterPreservation: !!(n & 64),
    fileAlterPreservation: !!(n & 32),
    readOnly: !!(n & 16),
    groupingIdentity: !!(r & 64),
    compression: !!(r & 8),
    encryption: !!(r & 4),
    unsynchronisation: !!(r & 2),
    dataLengthIndicator: !!(r & 1)
  } : {};
};
pe.processUnsynchronisedBuffer = function(t) {
  const e = [];
  t.length > 0 && e.push(t[0]);
  for (let n = 1; n < t.length; n++)
    t[n - 1] === 255 && t[n] === 0 || e.push(t[n]);
  return Buffer.from(e);
};
pe.getPictureMimeTypeFromBuffer = function(t) {
  return t.length > 3 && t.compare(Buffer.from([255, 216, 255]), 0, 3, 0, 3) === 0 ? "image/jpeg" : t > 8 && t.compare(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), 0, 8, 0, 8) === 0 ? "image/png" : null;
};
var Tn = {}, ye = {}, bZ = Yn;
const Wo = pe;
function Yn(t) {
  this._identifier = t, this._buffer = Buffer.alloc(0);
}
Yn.prototype.appendStaticValue = function(t, e, n = 0) {
  const r = Gp(t, n);
  return this._buffer = Buffer.concat([this._buffer, Wp(r, e)]), this;
};
Yn.prototype.appendStaticNumber = function(t, e) {
  if (!Number.isInteger(t))
    throw new RangeError("An integer value is expected");
  let n = t.toString(16);
  return n.length % 2 !== 0 && (n = "0" + n), this._buffer = Buffer.concat([this._buffer, Wp(Buffer.from(n, "hex"), e)]), this;
};
Yn.prototype.appendNullTerminatedValue = function(t, e = 0) {
  t = t || "";
  const n = Gp(t, e);
  return this._buffer = Buffer.concat([this._buffer, yZ(n, e)]), this;
};
Yn.prototype.getBuffer = function() {
  const t = Buffer.alloc(10);
  return t.write(this._identifier, 0), t.writeUInt32BE(this._buffer.length, 4), Buffer.concat([
    t,
    this._buffer
  ]);
};
function Gp(t, e = 0) {
  return t instanceof Buffer ? t : Number.isInteger(t) ? Wo.stringToEncodedBuffer(t.toString(), e) : typeof t == "string" || t instanceof String ? Wo.stringToEncodedBuffer(t, e) : Buffer.alloc(0);
}
function Wp(t, e) {
  return t instanceof Buffer ? e && t.length < e ? Buffer.concat([Buffer.alloc(e - t.length, 0), t]) : t : Buffer.alloc(0);
}
function yZ(t, e) {
  return Buffer.concat([t, Wo.terminationBuffer(e)]);
}
var vZ = ei;
const Fn = pe;
function ei(t, e, n = !0) {
  (!t || !(t instanceof Buffer)) && (t = Buffer.alloc(0)), Number.isInteger(e) ? (this._encoding = t[e] ? t[e] : 0, n && (t = e === 0 ? t.slice(1) : Buffer.concat([t.slice(0, e), t.slice(e)]))) : this._encoding = 0, this._splitBuffer = new Fn.SplitBuffer(null, t.slice(0));
}
ei.prototype.consumeStaticValue = function(t, e, n = this._encoding) {
  return this._consumeByFunction(() => wZ(this._splitBuffer.remainder, e), t, n);
};
ei.prototype.consumeNullTerminatedValue = function(t, e = this._encoding) {
  return this._consumeByFunction(() => EZ(this._splitBuffer.remainder, e), t, e);
};
ei.prototype._consumeByFunction = function(t, e, n) {
  if (!(!this._splitBuffer.remainder || this._splitBuffer.remainder.length === 0))
    return this._splitBuffer = t(), e ? xZ(this._splitBuffer.value, e, n) : this._splitBuffer.value;
};
function xZ(t, e, n = 0) {
  if (t) {
    if (!(t instanceof Buffer))
      return t;
    if (t.length !== 0)
      return e === "number" ? parseInt(t.toString("hex"), 16) : e === "string" ? Fn.bufferToDecodedString(t, n) : t;
  }
}
function wZ(t, e) {
  return e == null && (e = t.length), t.length > e ? new Fn.SplitBuffer(t.slice(0, e), t.slice(e)) : new Fn.SplitBuffer(t.slice(0), null);
}
function EZ(t, e = 0) {
  return Fn.splitNullTerminatedBuffer(t, e);
}
var ti = {};
ti.isFunction = (t) => typeof t == "function";
ti.isString = (t) => typeof t == "string" || t instanceof String;
var yu;
function TZ() {
  if (yu) return ye;
  yu = 1;
  const t = Mn, e = bZ, n = vZ, r = at, i = pe, o = Yp(), { isString: s } = ti;
  return ye.GENERIC_TEXT = {
    create: (a, c) => !a || !c ? null : new e(a).appendStaticNumber(1, 1).appendStaticValue(c, null, 1).getBuffer(),
    read: (a) => new n(a, 0).consumeStaticValue("string")
  }, ye.GENERIC_URL = {
    create: (a, c) => !a || !c ? null : new e(a).appendStaticValue(c).getBuffer(),
    read: (a) => new n(a).consumeStaticValue("string")
  }, ye.APIC = {
    create: (a) => {
      try {
        if (a instanceof Buffer)
          a = {
            imageBuffer: Buffer.from(a)
          };
        else if (s(a))
          a = {
            imageBuffer: t.readFileSync(a)
          };
        else if (!a.imageBuffer)
          return Buffer.alloc(0);
        let c = a.mime;
        c || (c = i.getPictureMimeTypeFromBuffer(a.imageBuffer));
        const l = r.TagConstants.AttachedPicture, u = a.type || {}, p = u.id === void 0 ? l.PictureType.FRONT_COVER : u.id, { description: d = "" } = a, f = d ? 1 : 0;
        return new e("APIC").appendStaticNumber(f, 1).appendNullTerminatedValue(c).appendStaticNumber(p, 1).appendNullTerminatedValue(d, f).appendStaticValue(a.imageBuffer).getBuffer();
      } catch (c) {
        return c;
      }
    },
    read: (a, c) => {
      const l = new n(a, 0);
      let u;
      c === 2 ? u = l.consumeStaticValue("string", 3, 0) : u = l.consumeNullTerminatedValue("string", 0);
      const p = l.consumeStaticValue("number", 1), d = l.consumeNullTerminatedValue("string"), f = l.consumeStaticValue();
      return {
        mime: u,
        type: {
          id: p,
          name: r.APIC_TYPES[p]
        },
        description: d,
        imageBuffer: f
      };
    }
  }, ye.COMM = {
    create: (a) => (a = a || {}, a.text ? new e("COMM").appendStaticNumber(1, 1).appendStaticValue(a.language).appendNullTerminatedValue(a.shortText, 1).appendStaticValue(a.text, null, 1).getBuffer() : null),
    read: (a) => {
      const c = new n(a, 0);
      return {
        language: c.consumeStaticValue("string", 3, 0),
        shortText: c.consumeNullTerminatedValue("string"),
        text: c.consumeStaticValue("string", null)
      };
    }
  }, ye.USLT = {
    create: (a) => (a = a || {}, s(a) && (a = {
      text: a
    }), a.text ? new e("USLT").appendStaticNumber(1, 1).appendStaticValue(a.language).appendNullTerminatedValue(a.shortText, 1).appendStaticValue(a.text, null, 1).getBuffer() : null),
    read: (a) => {
      const c = new n(a, 0);
      return {
        language: c.consumeStaticValue("string", 3, 0),
        shortText: c.consumeNullTerminatedValue("string"),
        text: c.consumeStaticValue("string", null)
      };
    }
  }, ye.SYLT = {
    create: (a) => {
      a instanceof Array || (a = [a]);
      const c = 1;
      return Buffer.concat(a.map((l) => {
        const u = new e("SYLT").appendStaticNumber(c, 1).appendStaticValue(l.language, 3).appendStaticNumber(l.timeStampFormat, 1).appendStaticNumber(l.contentType, 1).appendNullTerminatedValue(l.shortText, c);
        return l.synchronisedText.forEach((p) => {
          u.appendNullTerminatedValue(p.text, c), u.appendStaticNumber(p.timeStamp, 4);
        }), u.getBuffer();
      }));
    },
    read: (a) => {
      const c = new n(a, 0);
      return {
        language: c.consumeStaticValue("string", 3, 0),
        timeStampFormat: c.consumeStaticValue("number", 1),
        contentType: c.consumeStaticValue("number", 1),
        shortText: c.consumeNullTerminatedValue("string"),
        synchronisedText: Array.from(function* () {
          for (; ; ) {
            const l = c.consumeNullTerminatedValue("string"), u = c.consumeStaticValue("number", 4);
            if (l === void 0 || u === void 0)
              break;
            yield { text: l, timeStamp: u };
          }
        }())
      };
    }
  }, ye.TXXX = {
    create: (a) => (a instanceof Array || (a = [a]), Buffer.concat(a.map((c) => new e("TXXX").appendStaticNumber(1, 1).appendNullTerminatedValue(c.description, 1).appendStaticValue(c.value, null, 1).getBuffer()))),
    read: (a) => {
      const c = new n(a, 0);
      return {
        description: c.consumeNullTerminatedValue("string"),
        value: c.consumeStaticValue("string")
      };
    }
  }, ye.POPM = {
    create: (a) => {
      const c = a.email;
      let l = Math.trunc(a.rating), u = Math.trunc(a.counter);
      return c ? ((isNaN(l) || l < 0 || l > 255) && (l = 0), (isNaN(u) || u < 0) && (u = 0), new e("POPM").appendNullTerminatedValue(c).appendStaticNumber(l, 1).appendStaticNumber(u, 4).getBuffer()) : null;
    },
    read: (a) => {
      const c = new n(a);
      return {
        email: c.consumeNullTerminatedValue("string"),
        rating: c.consumeStaticValue("number", 1),
        counter: c.consumeStaticValue("number")
      };
    }
  }, ye.PRIV = {
    create: (a) => (a instanceof Array || (a = [a]), Buffer.concat(a.map((c) => new e("PRIV").appendNullTerminatedValue(c.ownerIdentifier).appendStaticValue(c.data instanceof Buffer ? c.data : Buffer.from(c.data, "utf8")).getBuffer()))),
    read: (a) => {
      const c = new n(a);
      return {
        ownerIdentifier: c.consumeNullTerminatedValue("string"),
        data: c.consumeStaticValue()
      };
    }
  }, ye.UFID = {
    create: (a) => (a instanceof Array || (a = [a]), Buffer.concat(a.map((c) => new e("UFID").appendNullTerminatedValue(c.ownerIdentifier).appendStaticValue(
      c.identifier instanceof Buffer ? c.identifier : Buffer.from(c.identifier, "utf8")
    ).getBuffer()))),
    read: (a) => {
      const c = new n(a);
      return {
        ownerIdentifier: c.consumeNullTerminatedValue("string"),
        identifier: c.consumeStaticValue()
      };
    }
  }, ye.CHAP = {
    create: (a) => (a instanceof Array || (a = [a]), Buffer.concat(a.map((c) => !c || !c.elementID || typeof c.startTimeMs > "u" || !c.endTimeMs ? null : new e("CHAP").appendNullTerminatedValue(c.elementID).appendStaticNumber(c.startTimeMs, 4).appendStaticNumber(c.endTimeMs, 4).appendStaticNumber(c.startOffsetBytes ? c.startOffsetBytes : 4294967295, 4).appendStaticNumber(c.endOffsetBytes ? c.endOffsetBytes : 4294967295, 4).appendStaticValue(o.createBufferFromTags(c.tags)).getBuffer()).filter((c) => c instanceof Buffer))),
    read: (a) => {
      const c = new n(a), l = {
        elementID: c.consumeNullTerminatedValue("string"),
        startTimeMs: c.consumeStaticValue("number", 4),
        endTimeMs: c.consumeStaticValue("number", 4),
        startOffsetBytes: c.consumeStaticValue("number", 4),
        endOffsetBytes: c.consumeStaticValue("number", 4),
        tags: o.getTagsFromID3Body(c.consumeStaticValue())
      };
      return l.startOffsetBytes === 4294967295 && delete l.startOffsetBytes, l.endOffsetBytes === 4294967295 && delete l.endOffsetBytes, l;
    }
  }, ye.CTOC = {
    create: (a) => (a instanceof Array || (a = [a]), Buffer.concat(a.map((c, l) => {
      if (!c || !c.elementID)
        return null;
      c.elements instanceof Array || (c.elements = []);
      const u = Buffer.alloc(1, 0);
      l === 0 && (u[0] += 2), c.isOrdered && (u[0] += 1);
      const p = new e("CTOC").appendNullTerminatedValue(c.elementID).appendStaticValue(u, 1).appendStaticNumber(c.elements.length, 1);
      return c.elements.forEach((d) => {
        p.appendNullTerminatedValue(d);
      }), c.tags && p.appendStaticValue(o.createBufferFromTags(c.tags)), p.getBuffer();
    }).filter((c) => c instanceof Buffer))),
    read: (a) => {
      const c = new n(a), l = c.consumeNullTerminatedValue("string"), u = c.consumeStaticValue("number", 1), p = c.consumeStaticValue("number", 1), d = [];
      for (let m = 0; m < p; m++)
        d.push(c.consumeNullTerminatedValue("string"));
      const f = o.getTagsFromID3Body(c.consumeStaticValue());
      return {
        elementID: l,
        isOrdered: !!(u & !0),
        elements: d,
        tags: f
      };
    }
  }, ye.WXXX = {
    create: (a) => (a instanceof Array || (a = [a]), Buffer.concat(a.map((c) => new e("WXXX").appendStaticNumber(1, 1).appendNullTerminatedValue(c.description, 1).appendStaticValue(c.url, null).getBuffer()))),
    read: (a) => {
      const c = new n(a, 0);
      return {
        description: c.consumeNullTerminatedValue("string"),
        url: c.consumeStaticValue("string", null, 0)
      };
    }
  }, ye.ETCO = {
    create: (a) => {
      const c = new e("ETCO").appendStaticNumber(a.timeStampFormat, 1);
      return a.keyEvents.forEach((l) => {
        c.appendStaticNumber(l.type, 1).appendStaticNumber(l.timeStamp, 4);
      }), c.getBuffer();
    },
    read: (a) => {
      const c = new n(a);
      return {
        timeStampFormat: c.consumeStaticValue("number", 1),
        keyEvents: Array.from(function* () {
          for (; ; ) {
            const l = c.consumeStaticValue("number", 1), u = c.consumeStaticValue("number", 4);
            if (l === void 0 || u === void 0)
              break;
            yield { type: l, timeStamp: u };
          }
        }())
      };
    }
  }, ye.COMR = {
    create: (a) => (a instanceof Array || (a = [a]), Buffer.concat(a.map((c) => {
      const l = c.prices || {}, u = new e("COMR");
      u.appendStaticNumber(1, 1);
      const p = Object.entries(l).map((d) => d[0].substring(0, 3) + d[1].toString()).join("/");
      if (u.appendNullTerminatedValue(p, 0), u.appendStaticValue(
        c.validUntil.year.toString().padStart(4, "0").substring(0, 4) + c.validUntil.month.toString().padStart(2, "0").substring(0, 2) + c.validUntil.day.toString().padStart(2, "0").substring(0, 2),
        8,
        0
      ), u.appendNullTerminatedValue(c.contactUrl, 0), u.appendStaticNumber(c.receivedAs, 1), u.appendNullTerminatedValue(c.nameOfSeller, 1), u.appendNullTerminatedValue(c.description, 1), c.sellerLogo) {
        let d = c.sellerLogo.picture;
        (typeof c.sellerLogo.picture == "string" || c.sellerLogo.picture instanceof String) && (d = t.readFileSync(c.sellerLogo.picture));
        let f = c.sellerLogo.mimeType || i.getPictureMimeTypeFromBuffer(d);
        f !== "image/png" && (f = "image/"), u.appendNullTerminatedValue(f || "", 0), u.appendStaticValue(d);
      }
      return u.getBuffer();
    }))),
    read: (a) => {
      const c = new n(a, 0), l = {}, u = c.consumeNullTerminatedValue("string", 0).split("/").filter((m) => m.length > 3);
      l.prices = {};
      for (const m of u)
        l.prices[m.substring(0, 3)] = m.substring(3);
      const p = c.consumeStaticValue("string", 8, 0);
      l.validUntil = { year: 0, month: 0, day: 0 }, /^\d+$/.test(p) && (l.validUntil.year = parseInt(p.substring(0, 4)), l.validUntil.month = parseInt(p.substring(4, 6)), l.validUntil.day = parseInt(p.substring(6))), l.contactUrl = c.consumeNullTerminatedValue("string", 0), l.receivedAs = c.consumeStaticValue("number", 1), l.nameOfSeller = c.consumeNullTerminatedValue("string"), l.description = c.consumeNullTerminatedValue("string");
      const d = c.consumeNullTerminatedValue("string", 0), f = c.consumeStaticValue("buffer");
      return f && f.length > 0 && (l.sellerLogo = {
        mimeType: d,
        picture: f
      }), l;
    }
  }, ye.GEOB = {
    create: (a) => {
      a instanceof Array || (a = [a]), a.forEach((l) => {
        if (l.encapsulatedObject == null)
          throw new Error("encapsulatedObject is required in GEOB frames");
        if (l.contentDescription == null)
          throw new Error("contentDescription is required for GEOB frames");
      });
      const c = 1;
      return Buffer.concat(a.map((l) => new e("GEOB").appendStaticNumber(c).appendNullTerminatedValue(l.mimeType ? l.mimeType : "").appendNullTerminatedValue(l.filename ? l.filename : "", c).appendNullTerminatedValue(l.contentDescription, c).appendStaticValue(l.encapsulatedObject).getBuffer()));
    },
    read: (a) => {
      const c = new n(a, 0);
      return {
        mimeType: c.consumeNullTerminatedValue("string", 0),
        filename: c.consumeNullTerminatedValue("string"),
        contentDescription: c.consumeNullTerminatedValue("string"),
        encapsulatedObject: c.consumeStaticValue("buffer")
      };
    }
  }, ye;
}
var vu;
function Yp() {
  if (vu) return Tn;
  vu = 1;
  const t = gt, e = at, n = TZ(), r = pe;
  function i(l) {
    const u = [];
    if (!l)
      return u;
    const p = Object.keys(l).reduce((d, f) => (e.FRAME_IDENTIFIERS.v3[f] !== void 0 ? d[e.FRAME_IDENTIFIERS.v3[f]] = l[f] : e.FRAME_IDENTIFIERS.v4[f] !== void 0 ? d[e.FRAME_IDENTIFIERS.v4[f]] = l[f] : d[f] = l[f], d), {});
    return Object.keys(p).forEach((d) => {
      let f;
      if (d.length === 4) {
        if (n[d] !== void 0)
          f = n[d].create(p[d], 3);
        else if (d.startsWith("T"))
          f = n.GENERIC_TEXT.create(d, p[d], 3);
        else if (d.startsWith("W"))
          if (r.getSpecOptions(d, 3).multiple && p[d] instanceof Array && p[d].length > 0) {
            f = Buffer.alloc(0);
            for (const m of [...new Set(p[d])])
              f = Buffer.concat([f, n.GENERIC_URL.create(d, m, 3)]);
          } else
            f = n.GENERIC_URL.create(d, p[d], 3);
        f && f instanceof Buffer && u.push(f);
      }
    }), u;
  }
  Tn.createBufferFromTags = function(l) {
    return Buffer.concat(i(l));
  }, Tn.getTagsFromBuffer = function(l, u) {
    const p = r.getFramePosition(l);
    if (p === -1)
      return c([], 3, u);
    const d = r.decodeSize(l.slice(p + 6, p + 10)) + 10, f = Buffer.alloc(d + 1);
    l.copy(f, 0, p);
    const m = f[3], h = r.parseTagHeaderFlags(f);
    let g = 0;
    h.extendedHeader && (m === 3 ? g = 4 + l.readUInt32BE(10) : m === 4 && (g = r.decodeSize(l.slice(10, 14))));
    const T = Buffer.alloc(d - 10 - g);
    l.copy(T, 0, p + 10 + g);
    const v = s(T, m, u);
    return c(v, m, u);
  };
  function o(l, u) {
    return u.exclude instanceof Array && u.exclude.includes(l) ? !0 : u.include instanceof Array && !u.include.includes(l);
  }
  function s(l, u, p = {}) {
    let d = 0;
    const f = [];
    if (!l || !(l instanceof Buffer))
      return f;
    const m = u === 2 ? 3 : 4, h = u === 2 ? 6 : 10;
    for (; d < l.length && l[d] !== 0; ) {
      const g = l.subarray(d, d + h), T = g.toString("utf8", 0, m), v = u === 4, b = r.getFrameSize(g, v, u);
      if (o(T, p)) {
        d += b + h;
        continue;
      }
      if (b + h > l.length - d)
        break;
      const w = r.parseFrameHeaderFlags(g, u), S = w.dataLengthIndicator ? 4 : 0, D = d + h + S, L = l.subarray(D, D + b - S), N = {
        name: T,
        flags: w,
        body: w.unsynchronisation ? r.processUnsynchronisedBuffer(L) : L
      };
      w.dataLengthIndicator && (N.dataLengthIndicator = l.readInt32BE(d + h)), f.push(N), d += b + h;
    }
    return f;
  }
  function a(l) {
    if (l.body.length < 5 || l.dataLengthIndicator === void 0)
      return null;
    let u;
    try {
      u = t.inflateSync(l.body);
    } catch {
      try {
        u = t.inflateRawSync(l.body);
      } catch {
        try {
          u = t.inflateRawSync(l.body.slice(2));
        } catch {
          return null;
        }
      }
    }
    return u.length !== l.dataLengthIndicator ? null : u;
  }
  function c(l, u, p = {}) {
    const d = {}, f = {};
    return l.forEach((m) => {
      let h, g;
      if (u === 2 ? (h = e.FRAME_IDENTIFIERS.v3[e.FRAME_INTERNAL_IDENTIFIERS.v2[m.name]], g = e.FRAME_INTERNAL_IDENTIFIERS.v2[m.name]) : (u === 3 || u === 4) && (h = m.name, g = e.FRAME_INTERNAL_IDENTIFIERS.v3[m.name] || e.FRAME_INTERNAL_IDENTIFIERS.v4[m.name]), !h || !g || m.flags.encryption)
        return;
      if (m.flags.compression) {
        const v = a(m);
        if (!v)
          return;
        m.body = v;
      }
      let T;
      n[h] ? T = n[h].read(m.body, u) : h.startsWith("T") ? T = n.GENERIC_TEXT.read(m.body, u) : h.startsWith("W") && (T = n.GENERIC_URL.read(m.body, u)), T && (r.getSpecOptions(h, u).multiple ? (p.onlyRaw || (d[g] || (d[g] = []), d[g].push(T)), p.noRaw || (f[h] || (f[h] = []), f[h].push(T))) : (p.onlyRaw || (d[g] = T), p.noRaw || (f[h] = T)));
    }), p.onlyRaw ? f : (p.noRaw || (d.raw = f), d);
  }
  return Tn.getTagsFromID3Body = function(l) {
    return c(s(l, 3), 3);
  }, Tn;
}
const ot = Mn, Yo = at, An = pe, Cr = Yp(), { isFunction: Kn, isString: ni } = ti;
function ri(t) {
  const e = An.getFramePosition(t);
  if (e === -1)
    return t;
  const n = t.slice(e + 6, e + 10);
  if (!An.isValidEncodedSize(n))
    return !1;
  if (t.length >= e + 10) {
    const r = An.decodeSize(n);
    return Buffer.concat([
      t.slice(0, e),
      t.slice(e + r + 10)
    ]);
  }
  return t;
}
function Ir(t, e) {
  return e = ri(e) || e, Buffer.concat([t, e]);
}
function SZ(t, e, n) {
  if (ni(e))
    try {
      ot.readFile(e, (r, i) => {
        if (r) {
          n(r);
          return;
        }
        const o = Ir(t, i);
        ot.writeFile(e, o, "binary", (s) => {
          n(s);
        });
      });
    } catch (r) {
      n(r);
    }
  else
    n(null, Ir(t, e));
}
function _Z(t, e) {
  if (ni(e))
    try {
      const n = ot.readFileSync(e), r = Ir(t, n);
      return ot.writeFileSync(e, r, "binary"), !0;
    } catch (n) {
      return n;
    }
  return Ir(t, e);
}
function Rr(t, e, n) {
  const r = zs(t);
  return Kn(n) ? SZ(r, e, n) : _Z(r, e);
}
function zs(t, e) {
  const n = Cr.createBufferFromTags(t), r = Buffer.alloc(10);
  r.fill(0), r.write("ID3", 0), r.writeUInt16BE(768, 3), r.writeUInt16BE(0, 5), An.encodeSize(n.length).copy(r, 6);
  const i = Buffer.concat([r, n]);
  if (Kn(e)) {
    e(i);
    return;
  }
  return i;
}
function NZ(t, e) {
  return ni(t) && (t = ot.readFileSync(t)), Cr.getTagsFromBuffer(t, e);
}
function AZ(t, e, n) {
  ni(t) ? ot.readFile(t, (r, i) => {
    r ? n(r, null) : n(null, Cr.getTagsFromBuffer(i, e));
  }) : n(null, Cr.getTagsFromBuffer(t, e));
}
function Lr(t, e, n) {
  return (!e || typeof e == "function") && (n = n || e, e = {}), Kn(n) ? AZ(t, e, n) : NZ(t, e);
}
function Kp(t, e, n, r) {
  (!n || typeof n == "function") && (r = r || n, n = {});
  const i = Object.keys(t).reduce((s, a) => (Yo.FRAME_IDENTIFIERS.v3[a] !== void 0 ? s[Yo.FRAME_IDENTIFIERS.v3[a]] = t[a] : s[a] = t[a], s), {}), o = (s) => (s = s.raw || {}, Object.keys(i).map((a) => {
    const c = An.getSpecOptions(a, 3), l = {};
    c.multiple && s[a] && i[a] ? (c.updateCompareKey && s[a].forEach((u, p) => {
      l[u[c.updateCompareKey]] = p;
    }), i[a] instanceof Array || (i[a] = [i[a]]), i[a].forEach((u) => {
      const p = l[u[c.updateCompareKey]];
      p !== void 0 ? s[a][p] = u : s[a].push(u);
    })) : s[a] = i[a];
  }), s);
  return Kn(r) ? Rr(o(Lr(e, n)), e, r) : Rr(o(Lr(e, n)), e);
}
function OZ(t) {
  let e;
  try {
    e = ot.readFileSync(t);
  } catch (r) {
    return r;
  }
  const n = ri(e);
  if (!n)
    return !1;
  try {
    ot.writeFileSync(t, n, "binary");
  } catch (r) {
    return r;
  }
  return !0;
}
function DZ(t, e) {
  ot.readFile(t, (n, r) => {
    if (n) {
      e(n);
      return;
    }
    const i = ri(r);
    if (!i) {
      e(n);
      return;
    }
    ot.writeFile(t, i, "binary", (o) => {
      e(o || null);
    });
  });
}
function Jp(t, e) {
  return Kn(e) ? DZ(t, e) : OZ(t);
}
function CZ(t) {
  return (e, n) => t(n, e);
}
function Sn(t, e = (n) => (r, i) => n(r, i)) {
  return new Promise((n, r) => {
    t(e((i, o) => {
      i ? r(i) : n(o);
    }));
  });
}
const IZ = {
  create: (t) => Sn(zs.bind(null, t), CZ),
  write: (t, e) => Sn(Rr.bind(null, t, e)),
  update: (t, e, n) => Sn(Kp.bind(null, t, e, n)),
  read: (t, e) => Sn(Lr.bind(null, t, e)),
  removeTags: (t) => Sn(Jp.bind(null, t))
};
var RZ = {
  TagConstants: Yo.TagConstants,
  create: zs,
  write: Rr,
  update: Kp,
  read: Lr,
  removeTags: Jp,
  removeTagsFromBuffer: ri,
  Promise: IZ
};
const LZ = /* @__PURE__ */ Gt(RZ);
async function PZ(t, e) {
  if (Y.extname(t).toLowerCase() !== ".mp3") return;
  const n = {
    title: e.title,
    artist: e.podcastTitle,
    album: e.podcastTitle,
    year: e.pubDate ? new Date(e.pubDate).getFullYear().toString() : void 0
  };
  if (e.feedImageUrl)
    try {
      const r = await ae.get(e.feedImageUrl, {
        responseType: "arraybuffer",
        timeout: 1e4
      }), i = (r.headers["content-type"] || "image/jpeg").split(";")[0];
      n.image = {
        mime: i,
        type: { id: 3, name: "front cover" },
        description: "",
        imageBuffer: Buffer.from(r.data)
      };
    } catch {
    }
  LZ.write(n, t);
}
const FZ = /* @__PURE__ */ new Set([
  ".mp3",
  ".m4a",
  ".m4b",
  ".aac",
  ".ogg",
  ".oga",
  ".opus",
  ".wav",
  ".flac",
  ".wma",
  ".webm",
  ".mp4",
  ".m4v",
  ".mov",
  ".avi",
  ".mkv",
  ".pdf",
  ".epub",
  ".zip"
]);
function xu(t) {
  try {
    const n = new URL(t).pathname, r = Y.extname(n).toLowerCase();
    if (r && FZ.has(r))
      return r;
  } catch {
  }
  return ".mp3";
}
function kZ(t, e) {
  const n = e.pubDate ? new Date(e.pubDate) : null, r = n && !isNaN(n.getTime()), i = r ? String(n.getFullYear()) : "unknown", o = r ? String(n.getMonth() + 1).padStart(2, "0") : "unknown", s = r ? String(n.getDate()).padStart(2, "0") : "unknown", a = r ? `${i}-${o}-${s}` : "unknown";
  return t.replace(/\{title\}/gi, e.title).replace(/\{podcast\}/gi, e.podcast).replace(/\{date\}/gi, a).replace(/\{year\}/gi, i).replace(/\{month\}/gi, o).replace(/\{day\}/gi, s);
}
const qZ = [
  /^127\./,
  // 127.0.0.0/8 (loopback)
  /^10\./,
  // 10.0.0.0/8
  /^172\.(1[6-9]|2\d|3[01])\./,
  // 172.16.0.0/12
  /^192\.168\./,
  // 192.168.0.0/16
  /^169\.254\./,
  // 169.254.0.0/16 (link-local)
  /^0\./
  // 0.0.0.0/8
], BZ = /* @__PURE__ */ new Set([
  "localhost",
  "localhost.localdomain",
  "ip6-localhost",
  "ip6-loopback",
  "0.0.0.0",
  "[::]",
  "[::1]"
]);
function wu(t) {
  if (!t || !t.trim())
    return { valid: !1, error: "URL_EMPTY" };
  const e = t.trim();
  let n;
  try {
    n = new URL(e);
  } catch {
    return { valid: !1, error: "URL_INVALID" };
  }
  const r = n.protocol.toLowerCase();
  if (r !== "http:" && r !== "https:")
    return { valid: !1, error: "URL_PROTOCOL_BLOCKED" };
  const i = n.hostname.toLowerCase();
  if (!i)
    return { valid: !1, error: "URL_NO_HOST" };
  if (BZ.has(i))
    return { valid: !1, error: "URL_PRIVATE_HOST" };
  if (i === "::1" || i === "[::1]")
    return { valid: !1, error: "URL_PRIVATE_HOST" };
  for (const s of qZ)
    if (s.test(i))
      return { valid: !1, error: "URL_PRIVATE_IP" };
  const o = i.replace(/^\[|\]$/g, "");
  return o.startsWith("fc") || o.startsWith("fd") || o.startsWith("fe80") ? { valid: !1, error: "URL_PRIVATE_IP" } : { valid: !0 };
}
const X = {
  PARSE_FEED: "parse-feed",
  GET_FEEDS: "get-feeds",
  ADD_FEED: "add-feed",
  REMOVE_FEED: "remove-feed",
  START_DOWNLOAD: "start-download",
  DOWNLOAD_PROGRESS: "download-progress",
  CHOOSE_FOLDER: "choose-folder",
  GET_DOWNLOAD_PATH: "get-download-path",
  SET_DOWNLOAD_PATH: "set-download-path",
  GET_DOWNLOADED_EPISODES: "get-downloaded-episodes",
  IMPORT_OPML: "import-opml",
  EXPORT_OPML: "export-opml",
  EXPORT_ARCHIVE_CSV: "export-archive-csv",
  STOP_BATCH: "stop-batch",
  REMOVE_HISTORY_ITEM: "remove-history-item",
  RESET_HISTORY: "reset-history",
  SHOW_IN_FOLDER: "show-in-folder",
  GET_HELP_CONTENT: "get-help-content",
  // Push events (main → renderer)
  FEEDS_UPDATED: "feeds-updated",
  DOWNLOADS_UPDATED: "downloads-updated",
  BATCH_COMPLETED: "batch-completed",
  // Concurrency & Stats
  GET_CONCURRENCY: "get-concurrency",
  SET_CONCURRENCY: "set-concurrency",
  GET_ARCHIVE_STATS: "get-archive-stats",
  // UI locale sync (renderer → main, for OS notifications)
  SET_LOCALE: "set-locale",
  // Naming Template (v0.5.4)
  GET_NAMING_TEMPLATE: "get-naming-template",
  SET_NAMING_TEMPLATE: "set-naming-template",
  // Sidecar JSON (v0.5.5)
  GET_SIDECAR_ENABLED: "get-sidecar-enabled",
  SET_SIDECAR_ENABLED: "set-sidecar-enabled",
  // Health Check (v0.6.0)
  RUN_HEALTH_CHECK: "run-health-check",
  // ID3 Tagging (v0.6.4)
  GET_ID3_ENABLED: "get-id3-enabled",
  SET_ID3_ENABLED: "set-id3-enabled",
  // Speed Throttle (v0.6.5)
  GET_SPEED_LIMIT: "get-speed-limit",
  SET_SPEED_LIMIT: "set-speed-limit",
  // Disk Space (v0.6.9)
  CHECK_DISK_SPACE: "check-disk-space",
  // Archive Migration (v0.6.10)
  MIGRATE_ARCHIVE: "migrate-archive",
  MIGRATION_PROGRESS: "migration-progress"
}, MZ = new QW(), G = new JY(), UZ = new _Q(), jZ = G.getConcurrency(), Oo = new RQ(jZ);
function He(t, e, n) {
  t && !t.isDestroyed() && t.webContents.send(e, n);
}
const Do = new LQ(), Eu = /* @__PURE__ */ new Map(), $Z = 3e3, Tu = /* @__PURE__ */ new Map(), VZ = 5 * 60 * 1e3;
let Su = "en";
function zZ(t) {
  te.handle(X.PARSE_FEED, async (e, n) => {
    const r = wu(n);
    if (!r.valid)
      throw new Error(r.error);
    const i = Date.now(), o = Tu.get(n);
    if (o && i - o.timestamp < VZ)
      return o.feed;
    const s = Eu.get(n);
    if (s !== void 0 && i - s < $Z)
      throw new Error("RATE_LIMITED");
    Eu.set(n, i);
    const a = await MZ.parseFeed(n);
    return Tu.set(n, { feed: a, timestamp: i }), a;
  }), te.handle(X.GET_FEEDS, async () => G.getFeeds()), te.handle(X.ADD_FEED, async (e, n) => {
    G.addFeed(n);
    const r = G.getFeeds();
    return He(t, X.FEEDS_UPDATED, r), r;
  }), te.handle(X.REMOVE_FEED, async (e, n) => {
    G.removeFeed(n);
    const r = G.getFeeds();
    return He(t, X.FEEDS_UPDATED, r), r;
  }), te.handle(X.GET_DOWNLOADED_EPISODES, async () => G.getDownloadedEpisodes()), te.handle(X.REMOVE_HISTORY_ITEM, async (e, n) => (G.removeDownloadedEpisode(n), He(t, X.DOWNLOADS_UPDATED, G.getDownloadedEpisodes()), !0)), te.handle(X.RESET_HISTORY, async () => (G.resetDownloadHistory(), He(t, X.DOWNLOADS_UPDATED, []), !0)), te.handle(X.START_DOWNLOAD, async (e, { url: n, title: r, podcastTitle: i, guid: o, pubDate: s, feedImageUrl: a }) => {
    const c = wu(n);
    if (!c.valid)
      throw new Error(c.error);
    let l = G.getDownloadPath();
    l || (l = Y.join(Ne.getPath("documents"), "FeedDownloader", "downloads"));
    const u = xu(n), p = G.getNamingTemplate(), d = kZ(p, {
      title: r,
      podcast: i,
      pubDate: s
    }), f = ru(l, i, d, u), m = Y.dirname(f);
    return await ie.ensureDir(m), Do.track(), Oo.add(async () => {
      try {
        const h = G.getSpeedLimit();
        if (await UZ.downloadFile(n, f, (g, T) => {
          He(t, X.DOWNLOAD_PROGRESS, { url: n, loaded: g, total: T });
        }, h), o && (G.markAsDownloaded(o), G.addArchiveEntry({
          guid: o,
          title: r,
          podcastTitle: i,
          pubDate: s || (/* @__PURE__ */ new Date()).toISOString(),
          downloadedAt: (/* @__PURE__ */ new Date()).toISOString(),
          filename: Y.basename(f)
        })), G.getId3Enabled() && await PZ(f, {
          title: r,
          podcastTitle: i,
          pubDate: s,
          feedImageUrl: a
        }).catch((g) => console.error("[ID3] Failed to write tags:", g)), G.getSidecarEnabled()) {
          const g = Y.join(
            Y.dirname(f),
            Y.parse(f).name + ".json"
          ), T = {
            title: r,
            podcast: i,
            guid: o || null,
            pubDate: s || null,
            downloadedAt: (/* @__PURE__ */ new Date()).toISOString(),
            sourceUrl: n,
            filename: Y.basename(f)
          };
          await ie.writeJSON(g, T, { spaces: 2 }).catch(() => {
          });
        }
        He(t, X.DOWNLOAD_PROGRESS, { url: n, loaded: 100, total: 100, completed: !0 }), He(t, X.DOWNLOADS_UPDATED, G.getDownloadedEpisodes());
      } catch (h) {
        console.error("Download error:", h);
        const g = h.message === "EPISODE_NOT_FOUND";
        He(t, X.DOWNLOAD_PROGRESS, {
          url: n,
          loaded: 0,
          total: 0,
          error: !0,
          ...g ? { notFound: !0 } : {}
        });
      } finally {
        const h = Do.complete();
        if (h !== null) {
          if (Ws.isSupported()) {
            const g = {
              en: `Download complete: ${h} files downloaded.`,
              it: `Download completato: ${h} file scaricati.`,
              fr: `Téléchargement terminé : ${h} fichiers téléchargés.`,
              de: `Download abgeschlossen: ${h} Dateien heruntergeladen.`,
              es: `Descarga completada: ${h} archivos descargados.`,
              pt: `Download concluído: ${h} ficheiros descarregados.`,
              ru: `Загрузка завершена: ${h} файлов скачано.`,
              zh: `下载完成：已下载 ${h} 个文件。`
            };
            new Ws({
              title: "Runtime FeedDownloader Pro",
              body: g[Su] ?? g.en,
              icon: Y.join(process.env.VITE_PUBLIC || "", "logo.png")
            }).show();
          }
          He(t, X.BATCH_COMPLETED, { total: h });
        }
      }
    }), { status: "queued" };
  }), te.handle(X.STOP_BATCH, async () => (Oo.clear(), Do.reset(), !0)), te.handle(X.IMPORT_OPML, async () => {
    const e = await Jn.showOpenDialog(t, {
      properties: ["openFile"],
      filters: [{ name: "OPML/XML", extensions: ["opml", "xml"] }]
    });
    if (e.canceled || e.filePaths.length === 0) return { count: 0 };
    try {
      const n = await ie.readFile(e.filePaths[0], "utf-8"), r = await G.importOPML(n);
      return He(t, X.FEEDS_UPDATED, G.getFeeds()), { count: r };
    } catch (n) {
      throw console.error("Import failed", n), n;
    }
  }), te.handle(X.EXPORT_OPML, async () => {
    const e = await Jn.showSaveDialog(t, {
      defaultPath: "feeds.opml",
      filters: [{ name: "OPML", extensions: ["opml"] }]
    });
    if (e.canceled || !e.filePath) return !1;
    try {
      const n = G.exportOPML();
      return await ie.writeFile(e.filePath, n, "utf-8"), !0;
    } catch (n) {
      throw console.error("Export failed", n), n;
    }
  }), te.handle(X.EXPORT_ARCHIVE_CSV, async () => {
    const e = await Jn.showSaveDialog(t, {
      defaultPath: "archive_report.csv",
      filters: [{ name: "CSV", extensions: ["csv"] }]
    });
    if (e.canceled || !e.filePath) return !1;
    try {
      const n = G.exportArchiveCSV();
      return await ie.writeFile(e.filePath, n, "utf-8"), !0;
    } catch (n) {
      throw console.error("Export CSV failed", n), n;
    }
  }), te.handle(X.CHOOSE_FOLDER, async () => {
    const e = await Jn.showOpenDialog(t, {
      properties: ["openDirectory"]
    });
    return e.canceled ? null : e.filePaths[0];
  }), te.handle(X.GET_DOWNLOAD_PATH, async () => G.getDownloadPath()), te.handle(X.SET_DOWNLOAD_PATH, async (e, n) => (G.setDownloadPath(n), !0)), te.handle(X.SHOW_IN_FOLDER, async (e, { podcastTitle: n, title: r, enclosureUrl: i }) => {
    let o = G.getDownloadPath();
    o || (o = Y.join(Ne.getPath("documents"), "FeedDownloader", "downloads"));
    const s = i ? xu(i) : ".mp3", a = ru(o, n, r, s), { shell: c } = await import("electron");
    c.showItemInFolder(a);
  }), te.handle(X.GET_HELP_CONTENT, async (e, n) => {
    const i = {
      it: "README_MASTER.md",
      en: "README_EN.md",
      fr: "README_FR.md",
      de: "README_DE.md",
      es: "README_ES.md",
      pt: "README_PT.md",
      ru: "README_RU.md",
      zh: "README_CN.md"
    }[n] || "README_EN.md";
    let o;
    Ne.isPackaged ? o = Y.join(process.resourcesPath, i) : o = Y.join(Ne.getAppPath(), i);
    try {
      if (await ie.pathExists(o))
        return await ie.readFile(o, "utf-8");
      {
        const s = Ne.isPackaged ? Y.join(process.resourcesPath, "README_EN.md") : Y.join(Ne.getAppPath(), "README_EN.md");
        return await ie.pathExists(s) ? await ie.readFile(s, "utf-8") : `# Error
Help file not found.`;
      }
    } catch (s) {
      return console.error("Failed to read help file", s), `# Error
Failed to load help documentation.`;
    }
  }), te.handle(X.GET_CONCURRENCY, async () => G.getConcurrency()), te.handle(X.SET_CONCURRENCY, async (e, n) => (G.setConcurrency(n), Oo.setConcurrency(n), !0)), te.handle(X.GET_ARCHIVE_STATS, async () => G.getArchiveStats()), te.handle(X.SET_LOCALE, async (e, n) => (Su = n, !0)), te.handle(X.GET_NAMING_TEMPLATE, async () => G.getNamingTemplate()), te.handle(X.SET_NAMING_TEMPLATE, async (e, n) => (G.setNamingTemplate(n), !0)), te.handle(X.GET_SIDECAR_ENABLED, async () => G.getSidecarEnabled()), te.handle(X.SET_SIDECAR_ENABLED, async (e, n) => (G.setSidecarEnabled(n), !0)), te.handle(X.GET_ID3_ENABLED, async () => G.getId3Enabled()), te.handle(X.SET_ID3_ENABLED, async (e, n) => (G.setId3Enabled(n), !0)), te.handle(X.GET_SPEED_LIMIT, async () => G.getSpeedLimit()), te.handle(X.SET_SPEED_LIMIT, async (e, n) => (G.setSpeedLimit(n), !0)), te.handle(X.CHECK_DISK_SPACE, async (e, n) => {
    try {
      let r = n || Ne.getPath("documents");
      for (; r && !await ie.pathExists(r); ) {
        const o = Y.dirname(r);
        if (o === r) break;
        r = o;
      }
      const i = await bd(r);
      return {
        freeBytes: i.bavail * i.bsize,
        totalBytes: i.blocks * i.bsize
      };
    } catch (r) {
      return console.error("[DiskSpace] Failed to check disk space:", r), null;
    }
  }), te.handle(X.RUN_HEALTH_CHECK, async () => {
    const e = G.getArchive();
    let n = G.getDownloadPath();
    n || (n = Y.join(Ne.getPath("documents"), "FeedDownloader", "downloads"));
    let r = 0, i = 0, o = 0;
    const s = [];
    for (const c of e) {
      if (!c.filename) {
        i++, s.push({ title: c.title, podcast: c.podcastTitle, filename: "(no filename)" });
        continue;
      }
      const l = (await Promise.resolve().then(() => XQ)).default, u = Y.join(n, l(c.podcastTitle), c.filename);
      try {
        const p = await ie.stat(u);
        r++, o += p.size;
      } catch {
        i++, s.push({ title: c.title, podcast: c.podcastTitle, filename: c.filename });
      }
    }
    return {
      total: e.length,
      present: r,
      missing: i,
      totalSizeBytes: o,
      missingFiles: s
    };
  }), te.handle(X.MIGRATE_ARCHIVE, async (e, n) => {
    const r = G.getDownloadPath();
    if (!r || !n)
      return { moved: 0, errors: 0, newPath: n || "" };
    if (r === n)
      return { moved: 0, errors: 0, newPath: n };
    if (!await ie.pathExists(r))
      return G.setDownloadPath(n), { moved: 0, errors: 0, newPath: n };
    await ie.ensureDir(n);
    const o = (await ie.readdir(r, { withFileTypes: !0 })).filter((l) => l.isDirectory()).map((l) => l.name), s = o.length;
    let a = 0, c = 0;
    for (let l = 0; l < o.length; l++) {
      const u = o[l];
      He(t, X.MIGRATION_PROGRESS, {
        moved: l,
        total: s,
        currentFolder: u
      });
      try {
        await ie.move(
          Y.join(r, u),
          Y.join(n, u),
          { overwrite: !1 }
        ), a++;
      } catch (p) {
        console.error(`[Migration] Failed to move "${u}":`, p), c++;
      }
    }
    return G.setDownloadPath(n), He(t, X.MIGRATION_PROGRESS, {
      moved: s,
      total: s,
      currentFolder: ""
    }), { moved: a, errors: c, newPath: n };
  });
}
const Qp = yt.dirname(sd(import.meta.url));
process.env.APP_ROOT = yt.join(Qp, "..");
const Ko = process.env.VITE_DEV_SERVER_URL, qee = yt.join(process.env.APP_ROOT, "dist-electron"), Zp = yt.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = Ko ? yt.join(process.env.APP_ROOT, "public") : Zp;
let Z, _n = null;
const Jo = yt.join(process.env.VITE_PUBLIC, "logo.png");
process.platform === "win32" && Ne.setAppUserModelId("com.runtime.feeddownloader.pro");
function HZ() {
  try {
    const e = process.platform === "win32" ? yt.join(process.env.VITE_PUBLIC, "icon.ico") : Jo;
    _n = new id(e);
  } catch (e) {
    console.error("[Tray] Failed to create system tray icon:", e), _n = null;
    return;
  }
  _n.setToolTip("Runtime FeedDownloader Pro");
  const t = od.buildFromTemplate([
    {
      label: "Show",
      click: () => {
        Z == null || Z.show(), Z == null || Z.focus();
      }
    },
    { type: "separator" },
    {
      label: "Quit",
      click: () => {
        Ne.quit();
      }
    }
  ]);
  _n.setContextMenu(t), _n.on("click", () => {
    Z != null && Z.isVisible() ? Z.hide() : (Z == null || Z.show(), Z == null || Z.focus());
  });
}
function ed() {
  Z = new _u({
    title: "Runtime FeedDownloader Pro",
    icon: Jo,
    backgroundColor: "#0b1120",
    // Matches Tailwind bg-background (approx)
    show: !1,
    autoHideMenuBar: !0,
    ...process.platform === "linux" ? { icon: Jo } : {},
    ...process.platform === "darwin" ? { titleBarStyle: "hidden" } : {},
    webPreferences: {
      preload: yt.join(Qp, "preload.mjs"),
      nodeIntegration: !1,
      contextIsolation: !0,
      sandbox: !1
      // sandbox:true incompatible with preload+better-sqlite3 native module
    }
  }), Z.webContents.session.setPermissionRequestHandler((t, e, n) => (console.log(`Blocked permission request: ${e}`), n(!1))), zZ(Z), Z.once("ready-to-show", () => {
    Z == null || Z.maximize(), Z == null || Z.show();
  }), Z.webContents.on("did-fail-load", () => {
    Z == null || Z.show();
  }), Ko ? Z.loadURL(Ko) : Z.loadFile(yt.join(Zp, "index.html"));
}
Ne.on("window-all-closed", () => {
  process.platform !== "darwin" ? Ne.quit() : (Ne.quit(), Z = null);
});
Ne.on("activate", () => {
  _u.getAllWindows().length === 0 && ed();
});
Ne.whenReady().then(() => {
  ed(), process.platform !== "darwin" && HZ();
});
export {
  qee as MAIN_DIST,
  Zp as RENDERER_DIST,
  Ko as VITE_DEV_SERVER_URL
};
