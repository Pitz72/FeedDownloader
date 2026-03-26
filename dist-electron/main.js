var Bu = Object.defineProperty;
var rs = (t) => {
  throw TypeError(t);
};
var $u = (t, e, n) => e in t ? Bu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ue = (t, e, n) => $u(t, typeof e != "symbol" ? e + "" : e, n), Dr = (t, e, n) => e.has(t) || rs("Cannot " + n);
var C = (t, e, n) => (Dr(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ie = (t, e, n) => e.has(t) ? rs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), ne = (t, e, n, r) => (Dr(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), H = (t, e, n) => (Dr(t, e, "access private method"), n);
var wt = (t, e, n, r) => ({
  set _(o) {
    ne(t, e, o, n);
  },
  get _() {
    return C(t, e, r);
  }
});
import { app as Le, ipcMain as re, Notification as os, dialog as Pn, BrowserWindow as vc, Tray as Vu, Menu as zu } from "electron";
import { fileURLToPath as Hu } from "node:url";
import ut from "node:path";
import lr from "http";
import ur from "https";
import Xu, { EventEmitter as Gu } from "events";
import Wu from "timers";
import Tn from "url";
import bt from "util";
import De, { Readable as Yu } from "stream";
import Q from "path";
import pi from "fs";
import bc from "crypto";
import xc from "http2";
import wc from "assert";
import Ec from "tty";
import Ku from "os";
import yt from "zlib";
import Ju from "better-sqlite3";
import Qu from "constants";
function Zu(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in t)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(t, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var it = {}, Lr = {}, is;
function di() {
  return is || (is = 1, (function() {
    Lr.defaults = {
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
  }).call(z)), Lr;
}
var Cr = {}, rt = {}, ot = {}, ss;
function dt() {
  return ss || (ss = 1, (function() {
    var t, e, n, r, o, i, s, a = [].slice, c = {}.hasOwnProperty;
    t = function() {
      var p, l, u, d, g, f;
      if (f = arguments[0], g = 2 <= arguments.length ? a.call(arguments, 1) : [], o(Object.assign))
        Object.assign.apply(null, arguments);
      else
        for (p = 0, u = g.length; p < u; p++)
          if (d = g[p], d != null)
            for (l in d)
              c.call(d, l) && (f[l] = d[l]);
      return f;
    }, o = function(p) {
      return !!p && Object.prototype.toString.call(p) === "[object Function]";
    }, i = function(p) {
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
    }, s = function(p) {
      var l, u;
      return i(p) && (u = Object.getPrototypeOf(p)) && (l = u.constructor) && typeof l == "function" && l instanceof l && Function.prototype.toString.call(l) === Function.prototype.toString.call(Object);
    }, e = function(p) {
      return o(p.valueOf) ? p.valueOf() : p;
    }, ot.assign = t, ot.isFunction = o, ot.isObject = i, ot.isArray = n, ot.isEmpty = r, ot.isPlainObject = s, ot.getValue = e;
  }).call(z)), ot;
}
var Rr = { exports: {} }, as;
function Tc() {
  return as || (as = 1, (function() {
    Rr.exports = function() {
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
  }).call(z)), Rr.exports;
}
var Pr = { exports: {} }, Ir = { exports: {} }, kr = { exports: {} }, cs;
function ep() {
  return cs || (cs = 1, (function() {
    kr.exports = function() {
      function t() {
      }
      return t.prototype.handleError = function(e) {
        throw new Error(e);
      }, t;
    }();
  }).call(z)), kr.exports;
}
var Fr = { exports: {} }, ls;
function tp() {
  return ls || (ls = 1, (function() {
    Fr.exports = function() {
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
  }).call(z)), Fr.exports;
}
var us;
function np() {
  return us || (us = 1, (function() {
    var t, e;
    t = ep(), e = tp(), Ir.exports = function() {
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
      }, n.prototype.canSetParameter = function(r, o) {
        return !0;
      }, n.prototype.setParameter = function(r, o) {
        return o != null ? this.params[r] = o : delete this.params[r];
      }, n;
    }();
  }).call(z)), Ir.exports;
}
var qr = { exports: {} }, Mr = { exports: {} }, jr = { exports: {} }, ps;
function me() {
  return ps || (ps = 1, (function() {
    jr.exports = {
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
  }).call(z)), jr.exports;
}
var Ur = { exports: {} }, ds;
function Sc() {
  return ds || (ds = 1, (function() {
    var t;
    t = me(), He(), Ur.exports = function() {
      function e(n, r, o) {
        if (this.parent = n, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), r == null)
          throw new Error("Missing attribute name. " + this.debugInfo(r));
        this.name = this.stringify.name(r), this.value = this.stringify.attValue(o), this.type = t.Attribute, this.isId = !1, this.schemaTypeInfo = null;
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
  }).call(z)), Ur.exports;
}
var Br = { exports: {} }, fs;
function fi() {
  return fs || (fs = 1, (function() {
    Br.exports = function() {
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
  }).call(z)), Br.exports;
}
var ms;
function mi() {
  return ms || (ms = 1, (function() {
    var t, e, n, r, o, i, s, a, c = function(l, u) {
      for (var d in u)
        p.call(u, d) && (l[d] = u[d]);
      function g() {
        this.constructor = l;
      }
      return g.prototype = u.prototype, l.prototype = new g(), l.__super__ = u.prototype, l;
    }, p = {}.hasOwnProperty;
    a = dt(), s = a.isObject, i = a.isFunction, o = a.getValue, r = He(), t = me(), e = Sc(), n = fi(), Mr.exports = function(l) {
      c(u, l);
      function u(d, g, f) {
        var x, b, S, w;
        if (u.__super__.constructor.call(this, d), g == null)
          throw new Error("Missing element name. " + this.debugInfo());
        if (this.name = this.stringify.name(g), this.type = t.Element, this.attribs = {}, this.schemaTypeInfo = null, f != null && this.attribute(f), d.type === t.Document && (this.isRoot = !0, this.documentObject = d, d.rootObject = this, d.children)) {
          for (w = d.children, b = 0, S = w.length; b < S; b++)
            if (x = w[b], x.type === t.DocType) {
              x.name = this.name;
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
        var d, g, f, x;
        f = Object.create(this), f.isRoot && (f.documentObject = null), f.attribs = {}, x = this.attribs;
        for (g in x)
          p.call(x, g) && (d = x[g], f.attribs[g] = d.clone());
        return f.children = [], this.children.forEach(function(b) {
          var S;
          return S = b.clone(), S.parent = f, f.children.push(S);
        }), f;
      }, u.prototype.attribute = function(d, g) {
        var f, x;
        if (d != null && (d = o(d)), s(d))
          for (f in d)
            p.call(d, f) && (x = d[f], this.attribute(f, x));
        else
          i(g) && (g = g.apply()), this.options.keepNullAttributes && g == null ? this.attribs[d] = new e(this, d, "") : g != null && (this.attribs[d] = new e(this, d, g));
        return this;
      }, u.prototype.removeAttribute = function(d) {
        var g, f, x;
        if (d == null)
          throw new Error("Missing attribute name. " + this.debugInfo());
        if (d = o(d), Array.isArray(d))
          for (f = 0, x = d.length; f < x; f++)
            g = d[f], delete this.attribs[g];
        else
          delete this.attribs[d];
        return this;
      }, u.prototype.toString = function(d) {
        return this.options.writer.element(this, this.options.writer.filterOptions(d));
      }, u.prototype.att = function(d, g) {
        return this.attribute(d, g);
      }, u.prototype.a = function(d, g) {
        return this.attribute(d, g);
      }, u.prototype.getAttribute = function(d) {
        return this.attribs.hasOwnProperty(d) ? this.attribs[d].value : null;
      }, u.prototype.setAttribute = function(d, g) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getAttributeNode = function(d) {
        return this.attribs.hasOwnProperty(d) ? this.attribs[d] : null;
      }, u.prototype.setAttributeNode = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.removeAttributeNode = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagName = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getAttributeNS = function(d, g) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.setAttributeNS = function(d, g, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.removeAttributeNS = function(d, g) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getAttributeNodeNS = function(d, g) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.setAttributeNodeNS = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagNameNS = function(d, g) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.hasAttribute = function(d) {
        return this.attribs.hasOwnProperty(d);
      }, u.prototype.hasAttributeNS = function(d, g) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.setIdAttribute = function(d, g) {
        return this.attribs.hasOwnProperty(d) ? this.attribs[d].isId : g;
      }, u.prototype.setIdAttributeNS = function(d, g, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.setIdAttributeNode = function(d, g) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagName = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagNameNS = function(d, g) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByClassName = function(d) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.isEqualNode = function(d) {
        var g, f, x;
        if (!u.__super__.isEqualNode.apply(this, arguments).isEqualNode(d) || d.namespaceURI !== this.namespaceURI || d.prefix !== this.prefix || d.localName !== this.localName || d.attribs.length !== this.attribs.length)
          return !1;
        for (g = f = 0, x = this.attribs.length - 1; 0 <= x ? f <= x : f >= x; g = 0 <= x ? ++f : --f)
          if (!this.attribs[g].isEqualNode(d.attribs[g]))
            return !1;
        return !0;
      }, u;
    }(r);
  }).call(z)), Mr.exports;
}
var $r = { exports: {} }, Vr = { exports: {} }, hs;
function pr() {
  return hs || (hs = 1, (function() {
    var t, e = function(r, o) {
      for (var i in o)
        n.call(o, i) && (r[i] = o[i]);
      function s() {
        this.constructor = r;
      }
      return s.prototype = o.prototype, r.prototype = new s(), r.__super__ = o.prototype, r;
    }, n = {}.hasOwnProperty;
    t = He(), Vr.exports = function(r) {
      e(o, r);
      function o(i) {
        o.__super__.constructor.call(this, i), this.value = "";
      }
      return Object.defineProperty(o.prototype, "data", {
        get: function() {
          return this.value;
        },
        set: function(i) {
          return this.value = i || "";
        }
      }), Object.defineProperty(o.prototype, "length", {
        get: function() {
          return this.value.length;
        }
      }), Object.defineProperty(o.prototype, "textContent", {
        get: function() {
          return this.value;
        },
        set: function(i) {
          return this.value = i || "";
        }
      }), o.prototype.clone = function() {
        return Object.create(this);
      }, o.prototype.substringData = function(i, s) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, o.prototype.appendData = function(i) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, o.prototype.insertData = function(i, s) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, o.prototype.deleteData = function(i, s) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, o.prototype.replaceData = function(i, s, a) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, o.prototype.isEqualNode = function(i) {
        return !(!o.__super__.isEqualNode.apply(this, arguments).isEqualNode(i) || i.data !== this.data);
      }, o;
    }(t);
  }).call(z)), Vr.exports;
}
var gs;
function hi() {
  return gs || (gs = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    t = me(), e = pr(), $r.exports = function(o) {
      n(i, o);
      function i(s, a) {
        if (i.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing CDATA text. " + this.debugInfo());
        this.name = "#cdata-section", this.type = t.CData, this.value = this.stringify.cdata(a);
      }
      return i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.toString = function(s) {
        return this.options.writer.cdata(this, this.options.writer.filterOptions(s));
      }, i;
    }(e);
  }).call(z)), $r.exports;
}
var zr = { exports: {} }, ys;
function gi() {
  return ys || (ys = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    t = me(), e = pr(), zr.exports = function(o) {
      n(i, o);
      function i(s, a) {
        if (i.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing comment text. " + this.debugInfo());
        this.name = "#comment", this.type = t.Comment, this.value = this.stringify.comment(a);
      }
      return i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.toString = function(s) {
        return this.options.writer.comment(this, this.options.writer.filterOptions(s));
      }, i;
    }(e);
  }).call(z)), zr.exports;
}
var Hr = { exports: {} }, vs;
function yi() {
  return vs || (vs = 1, (function() {
    var t, e, n, r = function(i, s) {
      for (var a in s)
        o.call(s, a) && (i[a] = s[a]);
      function c() {
        this.constructor = i;
      }
      return c.prototype = s.prototype, i.prototype = new c(), i.__super__ = s.prototype, i;
    }, o = {}.hasOwnProperty;
    n = dt().isObject, e = He(), t = me(), Hr.exports = function(i) {
      r(s, i);
      function s(a, c, p, l) {
        var u;
        s.__super__.constructor.call(this, a), n(c) && (u = c, c = u.version, p = u.encoding, l = u.standalone), c || (c = "1.0"), this.type = t.Declaration, this.version = this.stringify.xmlVersion(c), p != null && (this.encoding = this.stringify.xmlEncoding(p)), l != null && (this.standalone = this.stringify.xmlStandalone(l));
      }
      return s.prototype.toString = function(a) {
        return this.options.writer.declaration(this, this.options.writer.filterOptions(a));
      }, s;
    }(e);
  }).call(z)), Hr.exports;
}
var Xr = { exports: {} }, Gr = { exports: {} }, bs;
function vi() {
  return bs || (bs = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    e = He(), t = me(), Gr.exports = function(o) {
      n(i, o);
      function i(s, a, c, p, l, u) {
        if (i.__super__.constructor.call(this, s), a == null)
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
        this.elementName = this.stringify.name(a), this.type = t.AttributeDeclaration, this.attributeName = this.stringify.name(c), this.attributeType = this.stringify.dtdAttType(p), u && (this.defaultValue = this.stringify.dtdAttDefault(u)), this.defaultValueType = l;
      }
      return i.prototype.toString = function(s) {
        return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(s));
      }, i;
    }(e);
  }).call(z)), Gr.exports;
}
var Wr = { exports: {} }, xs;
function bi() {
  return xs || (xs = 1, (function() {
    var t, e, n, r = function(i, s) {
      for (var a in s)
        o.call(s, a) && (i[a] = s[a]);
      function c() {
        this.constructor = i;
      }
      return c.prototype = s.prototype, i.prototype = new c(), i.__super__ = s.prototype, i;
    }, o = {}.hasOwnProperty;
    n = dt().isObject, e = He(), t = me(), Wr.exports = function(i) {
      r(s, i);
      function s(a, c, p, l) {
        if (s.__super__.constructor.call(this, a), p == null)
          throw new Error("Missing DTD entity name. " + this.debugInfo(p));
        if (l == null)
          throw new Error("Missing DTD entity value. " + this.debugInfo(p));
        if (this.pe = !!c, this.name = this.stringify.name(p), this.type = t.EntityDeclaration, !n(l))
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
  }).call(z)), Wr.exports;
}
var Yr = { exports: {} }, ws;
function xi() {
  return ws || (ws = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    e = He(), t = me(), Yr.exports = function(o) {
      n(i, o);
      function i(s, a, c) {
        if (i.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing DTD element name. " + this.debugInfo());
        c || (c = "(#PCDATA)"), Array.isArray(c) && (c = "(" + c.join(",") + ")"), this.name = this.stringify.name(a), this.type = t.ElementDeclaration, this.value = this.stringify.dtdElementValue(c);
      }
      return i.prototype.toString = function(s) {
        return this.options.writer.dtdElement(this, this.options.writer.filterOptions(s));
      }, i;
    }(e);
  }).call(z)), Yr.exports;
}
var Kr = { exports: {} }, Es;
function wi() {
  return Es || (Es = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    e = He(), t = me(), Kr.exports = function(o) {
      n(i, o);
      function i(s, a, c) {
        if (i.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing DTD notation name. " + this.debugInfo(a));
        if (!c.pubID && !c.sysID)
          throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(a));
        this.name = this.stringify.name(a), this.type = t.NotationDeclaration, c.pubID != null && (this.pubID = this.stringify.dtdPubID(c.pubID)), c.sysID != null && (this.sysID = this.stringify.dtdSysID(c.sysID));
      }
      return Object.defineProperty(i.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      }), Object.defineProperty(i.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      }), i.prototype.toString = function(s) {
        return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(s));
      }, i;
    }(e);
  }).call(z)), Kr.exports;
}
var Ts;
function Ei() {
  return Ts || (Ts = 1, (function() {
    var t, e, n, r, o, i, s, a, c = function(l, u) {
      for (var d in u)
        p.call(u, d) && (l[d] = u[d]);
      function g() {
        this.constructor = l;
      }
      return g.prototype = u.prototype, l.prototype = new g(), l.__super__ = u.prototype, l;
    }, p = {}.hasOwnProperty;
    a = dt().isObject, s = He(), t = me(), e = vi(), r = bi(), n = xi(), o = wi(), i = fi(), Xr.exports = function(l) {
      c(u, l);
      function u(d, g, f) {
        var x, b, S, w, y, E;
        if (u.__super__.constructor.call(this, d), this.type = t.DocType, d.children) {
          for (w = d.children, b = 0, S = w.length; b < S; b++)
            if (x = w[b], x.type === t.Element) {
              this.name = x.name;
              break;
            }
        }
        this.documentObject = d, a(g) && (y = g, g = y.pubID, f = y.sysID), f == null && (E = [g, f], f = E[0], g = E[1]), g != null && (this.pubID = this.stringify.dtdPubID(g)), f != null && (this.sysID = this.stringify.dtdSysID(f));
      }
      return Object.defineProperty(u.prototype, "entities", {
        get: function() {
          var d, g, f, x, b;
          for (x = {}, b = this.children, g = 0, f = b.length; g < f; g++)
            d = b[g], d.type === t.EntityDeclaration && !d.pe && (x[d.name] = d);
          return new i(x);
        }
      }), Object.defineProperty(u.prototype, "notations", {
        get: function() {
          var d, g, f, x, b;
          for (x = {}, b = this.children, g = 0, f = b.length; g < f; g++)
            d = b[g], d.type === t.NotationDeclaration && (x[d.name] = d);
          return new i(x);
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
      }), u.prototype.element = function(d, g) {
        var f;
        return f = new n(this, d, g), this.children.push(f), this;
      }, u.prototype.attList = function(d, g, f, x, b) {
        var S;
        return S = new e(this, d, g, f, x, b), this.children.push(S), this;
      }, u.prototype.entity = function(d, g) {
        var f;
        return f = new r(this, !1, d, g), this.children.push(f), this;
      }, u.prototype.pEntity = function(d, g) {
        var f;
        return f = new r(this, !0, d, g), this.children.push(f), this;
      }, u.prototype.notation = function(d, g) {
        var f;
        return f = new o(this, d, g), this.children.push(f), this;
      }, u.prototype.toString = function(d) {
        return this.options.writer.docType(this, this.options.writer.filterOptions(d));
      }, u.prototype.ele = function(d, g) {
        return this.element(d, g);
      }, u.prototype.att = function(d, g, f, x, b) {
        return this.attList(d, g, f, x, b);
      }, u.prototype.ent = function(d, g) {
        return this.entity(d, g);
      }, u.prototype.pent = function(d, g) {
        return this.pEntity(d, g);
      }, u.prototype.not = function(d, g) {
        return this.notation(d, g);
      }, u.prototype.up = function() {
        return this.root() || this.documentObject;
      }, u.prototype.isEqualNode = function(d) {
        return !(!u.__super__.isEqualNode.apply(this, arguments).isEqualNode(d) || d.name !== this.name || d.publicId !== this.publicId || d.systemId !== this.systemId);
      }, u;
    }(s);
  }).call(z)), Xr.exports;
}
var Jr = { exports: {} }, Ss;
function Ti() {
  return Ss || (Ss = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    t = me(), e = He(), Jr.exports = function(o) {
      n(i, o);
      function i(s, a) {
        if (i.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing raw text. " + this.debugInfo());
        this.type = t.Raw, this.value = this.stringify.raw(a);
      }
      return i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.toString = function(s) {
        return this.options.writer.raw(this, this.options.writer.filterOptions(s));
      }, i;
    }(e);
  }).call(z)), Jr.exports;
}
var Qr = { exports: {} }, Ns;
function Si() {
  return Ns || (Ns = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    t = me(), e = pr(), Qr.exports = function(o) {
      n(i, o);
      function i(s, a) {
        if (i.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing element text. " + this.debugInfo());
        this.name = "#text", this.type = t.Text, this.value = this.stringify.text(a);
      }
      return Object.defineProperty(i.prototype, "isElementContentWhitespace", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(i.prototype, "wholeText", {
        get: function() {
          var s, a, c;
          for (c = "", a = this.previousSibling; a; )
            c = a.data + c, a = a.previousSibling;
          for (c += this.data, s = this.nextSibling; s; )
            c = c + s.data, s = s.nextSibling;
          return c;
        }
      }), i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.toString = function(s) {
        return this.options.writer.text(this, this.options.writer.filterOptions(s));
      }, i.prototype.splitText = function(s) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, i.prototype.replaceWholeText = function(s) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, i;
    }(e);
  }).call(z)), Qr.exports;
}
var Zr = { exports: {} }, Os;
function Ni() {
  return Os || (Os = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    t = me(), e = pr(), Zr.exports = function(o) {
      n(i, o);
      function i(s, a, c) {
        if (i.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing instruction target. " + this.debugInfo());
        this.type = t.ProcessingInstruction, this.target = this.stringify.insTarget(a), this.name = this.target, c && (this.value = this.stringify.insValue(c));
      }
      return i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.toString = function(s) {
        return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(s));
      }, i.prototype.isEqualNode = function(s) {
        return !(!i.__super__.isEqualNode.apply(this, arguments).isEqualNode(s) || s.target !== this.target);
      }, i;
    }(e);
  }).call(z)), Zr.exports;
}
var eo = { exports: {} }, As;
function Nc() {
  return As || (As = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    e = He(), t = me(), eo.exports = function(o) {
      n(i, o);
      function i(s) {
        i.__super__.constructor.call(this, s), this.type = t.Dummy;
      }
      return i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.toString = function(s) {
        return "";
      }, i;
    }(e);
  }).call(z)), eo.exports;
}
var to = { exports: {} }, _s;
function rp() {
  return _s || (_s = 1, (function() {
    to.exports = function() {
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
  }).call(z)), to.exports;
}
var no = { exports: {} }, Ds;
function op() {
  return Ds || (Ds = 1, (function() {
    no.exports = {
      Disconnected: 1,
      Preceding: 2,
      Following: 4,
      Contains: 8,
      ContainedBy: 16,
      ImplementationSpecific: 32
    };
  }).call(z)), no.exports;
}
var Ls;
function He() {
  return Ls || (Ls = 1, (function() {
    var t, e, n, r, o, i, s, a, c, p, l, u, d, g, f, x, b, S = {}.hasOwnProperty;
    b = dt(), x = b.isObject, f = b.isFunction, g = b.isEmpty, d = b.getValue, a = null, n = null, r = null, o = null, i = null, l = null, u = null, p = null, s = null, e = null, c = null, t = null, qr.exports = function() {
      function w(y) {
        this.parent = y, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.value = null, this.children = [], this.baseURI = null, a || (a = mi(), n = hi(), r = gi(), o = yi(), i = Ei(), l = Ti(), u = Si(), p = Ni(), s = Nc(), e = me(), c = rp(), fi(), t = op());
      }
      return Object.defineProperty(w.prototype, "nodeName", {
        get: function() {
          return this.name;
        }
      }), Object.defineProperty(w.prototype, "nodeType", {
        get: function() {
          return this.type;
        }
      }), Object.defineProperty(w.prototype, "nodeValue", {
        get: function() {
          return this.value;
        }
      }), Object.defineProperty(w.prototype, "parentNode", {
        get: function() {
          return this.parent;
        }
      }), Object.defineProperty(w.prototype, "childNodes", {
        get: function() {
          return (!this.childNodeList || !this.childNodeList.nodes) && (this.childNodeList = new c(this.children)), this.childNodeList;
        }
      }), Object.defineProperty(w.prototype, "firstChild", {
        get: function() {
          return this.children[0] || null;
        }
      }), Object.defineProperty(w.prototype, "lastChild", {
        get: function() {
          return this.children[this.children.length - 1] || null;
        }
      }), Object.defineProperty(w.prototype, "previousSibling", {
        get: function() {
          var y;
          return y = this.parent.children.indexOf(this), this.parent.children[y - 1] || null;
        }
      }), Object.defineProperty(w.prototype, "nextSibling", {
        get: function() {
          var y;
          return y = this.parent.children.indexOf(this), this.parent.children[y + 1] || null;
        }
      }), Object.defineProperty(w.prototype, "ownerDocument", {
        get: function() {
          return this.document() || null;
        }
      }), Object.defineProperty(w.prototype, "textContent", {
        get: function() {
          var y, E, A, L, P;
          if (this.nodeType === e.Element || this.nodeType === e.DocumentFragment) {
            for (P = "", L = this.children, E = 0, A = L.length; E < A; E++)
              y = L[E], y.textContent && (P += y.textContent);
            return P;
          } else
            return null;
        },
        set: function(y) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), w.prototype.setParent = function(y) {
        var E, A, L, P, O;
        for (this.parent = y, y && (this.options = y.options, this.stringify = y.stringify), P = this.children, O = [], A = 0, L = P.length; A < L; A++)
          E = P[A], O.push(E.setParent(this));
        return O;
      }, w.prototype.element = function(y, E, A) {
        var L, P, O, m, _, D, I, j, B, $, q;
        if (D = null, E === null && A == null && (B = [{}, null], E = B[0], A = B[1]), E == null && (E = {}), E = d(E), x(E) || ($ = [E, A], A = $[0], E = $[1]), y != null && (y = d(y)), Array.isArray(y))
          for (O = 0, I = y.length; O < I; O++)
            P = y[O], D = this.element(P);
        else if (f(y))
          D = this.element(y.apply());
        else if (x(y)) {
          for (_ in y)
            if (S.call(y, _))
              if (q = y[_], f(q) && (q = q.apply()), !this.options.ignoreDecorators && this.stringify.convertAttKey && _.indexOf(this.stringify.convertAttKey) === 0)
                D = this.attribute(_.substr(this.stringify.convertAttKey.length), q);
              else if (!this.options.separateArrayItems && Array.isArray(q) && g(q))
                D = this.dummy();
              else if (x(q) && g(q))
                D = this.element(_);
              else if (!this.options.keepNullNodes && q == null)
                D = this.dummy();
              else if (!this.options.separateArrayItems && Array.isArray(q))
                for (m = 0, j = q.length; m < j; m++)
                  P = q[m], L = {}, L[_] = P, D = this.element(L);
              else x(q) ? !this.options.ignoreDecorators && this.stringify.convertTextKey && _.indexOf(this.stringify.convertTextKey) === 0 ? D = this.element(q) : (D = this.element(_), D.element(q)) : D = this.element(_, q);
        } else !this.options.keepNullNodes && A === null ? D = this.dummy() : !this.options.ignoreDecorators && this.stringify.convertTextKey && y.indexOf(this.stringify.convertTextKey) === 0 ? D = this.text(A) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && y.indexOf(this.stringify.convertCDataKey) === 0 ? D = this.cdata(A) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && y.indexOf(this.stringify.convertCommentKey) === 0 ? D = this.comment(A) : !this.options.ignoreDecorators && this.stringify.convertRawKey && y.indexOf(this.stringify.convertRawKey) === 0 ? D = this.raw(A) : !this.options.ignoreDecorators && this.stringify.convertPIKey && y.indexOf(this.stringify.convertPIKey) === 0 ? D = this.instruction(y.substr(this.stringify.convertPIKey.length), A) : D = this.node(y, E, A);
        if (D == null)
          throw new Error("Could not create any elements with: " + y + ". " + this.debugInfo());
        return D;
      }, w.prototype.insertBefore = function(y, E, A) {
        var L, P, O, m, _;
        if (y != null && y.type)
          return O = y, m = E, O.setParent(this), m ? (P = children.indexOf(m), _ = children.splice(P), children.push(O), Array.prototype.push.apply(children, _)) : children.push(O), O;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(y));
        return P = this.parent.children.indexOf(this), _ = this.parent.children.splice(P), L = this.parent.element(y, E, A), Array.prototype.push.apply(this.parent.children, _), L;
      }, w.prototype.insertAfter = function(y, E, A) {
        var L, P, O;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(y));
        return P = this.parent.children.indexOf(this), O = this.parent.children.splice(P + 1), L = this.parent.element(y, E, A), Array.prototype.push.apply(this.parent.children, O), L;
      }, w.prototype.remove = function() {
        var y;
        if (this.isRoot)
          throw new Error("Cannot remove the root element. " + this.debugInfo());
        return y = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [y, y - y + 1].concat([])), this.parent;
      }, w.prototype.node = function(y, E, A) {
        var L, P;
        return y != null && (y = d(y)), E || (E = {}), E = d(E), x(E) || (P = [E, A], A = P[0], E = P[1]), L = new a(this, y, E), A != null && L.text(A), this.children.push(L), L;
      }, w.prototype.text = function(y) {
        var E;
        return x(y) && this.element(y), E = new u(this, y), this.children.push(E), this;
      }, w.prototype.cdata = function(y) {
        var E;
        return E = new n(this, y), this.children.push(E), this;
      }, w.prototype.comment = function(y) {
        var E;
        return E = new r(this, y), this.children.push(E), this;
      }, w.prototype.commentBefore = function(y) {
        var E, A;
        return E = this.parent.children.indexOf(this), A = this.parent.children.splice(E), this.parent.comment(y), Array.prototype.push.apply(this.parent.children, A), this;
      }, w.prototype.commentAfter = function(y) {
        var E, A;
        return E = this.parent.children.indexOf(this), A = this.parent.children.splice(E + 1), this.parent.comment(y), Array.prototype.push.apply(this.parent.children, A), this;
      }, w.prototype.raw = function(y) {
        var E;
        return E = new l(this, y), this.children.push(E), this;
      }, w.prototype.dummy = function() {
        var y;
        return y = new s(this), y;
      }, w.prototype.instruction = function(y, E) {
        var A, L, P, O, m;
        if (y != null && (y = d(y)), E != null && (E = d(E)), Array.isArray(y))
          for (O = 0, m = y.length; O < m; O++)
            A = y[O], this.instruction(A);
        else if (x(y))
          for (A in y)
            S.call(y, A) && (L = y[A], this.instruction(A, L));
        else
          f(E) && (E = E.apply()), P = new p(this, y, E), this.children.push(P);
        return this;
      }, w.prototype.instructionBefore = function(y, E) {
        var A, L;
        return A = this.parent.children.indexOf(this), L = this.parent.children.splice(A), this.parent.instruction(y, E), Array.prototype.push.apply(this.parent.children, L), this;
      }, w.prototype.instructionAfter = function(y, E) {
        var A, L;
        return A = this.parent.children.indexOf(this), L = this.parent.children.splice(A + 1), this.parent.instruction(y, E), Array.prototype.push.apply(this.parent.children, L), this;
      }, w.prototype.declaration = function(y, E, A) {
        var L, P;
        return L = this.document(), P = new o(L, y, E, A), L.children.length === 0 ? L.children.unshift(P) : L.children[0].type === e.Declaration ? L.children[0] = P : L.children.unshift(P), L.root() || L;
      }, w.prototype.dtd = function(y, E) {
        var A, L, P, O, m, _, D, I, j, B;
        for (L = this.document(), P = new i(L, y, E), j = L.children, O = m = 0, D = j.length; m < D; O = ++m)
          if (A = j[O], A.type === e.DocType)
            return L.children[O] = P, P;
        for (B = L.children, O = _ = 0, I = B.length; _ < I; O = ++_)
          if (A = B[O], A.isRoot)
            return L.children.splice(O, 0, P), P;
        return L.children.push(P), P;
      }, w.prototype.up = function() {
        if (this.isRoot)
          throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
        return this.parent;
      }, w.prototype.root = function() {
        var y;
        for (y = this; y; ) {
          if (y.type === e.Document)
            return y.rootObject;
          if (y.isRoot)
            return y;
          y = y.parent;
        }
      }, w.prototype.document = function() {
        var y;
        for (y = this; y; ) {
          if (y.type === e.Document)
            return y;
          y = y.parent;
        }
      }, w.prototype.end = function(y) {
        return this.document().end(y);
      }, w.prototype.prev = function() {
        var y;
        if (y = this.parent.children.indexOf(this), y < 1)
          throw new Error("Already at the first node. " + this.debugInfo());
        return this.parent.children[y - 1];
      }, w.prototype.next = function() {
        var y;
        if (y = this.parent.children.indexOf(this), y === -1 || y === this.parent.children.length - 1)
          throw new Error("Already at the last node. " + this.debugInfo());
        return this.parent.children[y + 1];
      }, w.prototype.importDocument = function(y) {
        var E;
        return E = y.root().clone(), E.parent = this, E.isRoot = !1, this.children.push(E), this;
      }, w.prototype.debugInfo = function(y) {
        var E, A;
        return y = y || this.name, y == null && !((E = this.parent) != null && E.name) ? "" : y == null ? "parent: <" + this.parent.name + ">" : (A = this.parent) != null && A.name ? "node: <" + y + ">, parent: <" + this.parent.name + ">" : "node: <" + y + ">";
      }, w.prototype.ele = function(y, E, A) {
        return this.element(y, E, A);
      }, w.prototype.nod = function(y, E, A) {
        return this.node(y, E, A);
      }, w.prototype.txt = function(y) {
        return this.text(y);
      }, w.prototype.dat = function(y) {
        return this.cdata(y);
      }, w.prototype.com = function(y) {
        return this.comment(y);
      }, w.prototype.ins = function(y, E) {
        return this.instruction(y, E);
      }, w.prototype.doc = function() {
        return this.document();
      }, w.prototype.dec = function(y, E, A) {
        return this.declaration(y, E, A);
      }, w.prototype.e = function(y, E, A) {
        return this.element(y, E, A);
      }, w.prototype.n = function(y, E, A) {
        return this.node(y, E, A);
      }, w.prototype.t = function(y) {
        return this.text(y);
      }, w.prototype.d = function(y) {
        return this.cdata(y);
      }, w.prototype.c = function(y) {
        return this.comment(y);
      }, w.prototype.r = function(y) {
        return this.raw(y);
      }, w.prototype.i = function(y, E) {
        return this.instruction(y, E);
      }, w.prototype.u = function() {
        return this.up();
      }, w.prototype.importXMLBuilder = function(y) {
        return this.importDocument(y);
      }, w.prototype.replaceChild = function(y, E) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, w.prototype.removeChild = function(y) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, w.prototype.appendChild = function(y) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, w.prototype.hasChildNodes = function() {
        return this.children.length !== 0;
      }, w.prototype.cloneNode = function(y) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, w.prototype.normalize = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, w.prototype.isSupported = function(y, E) {
        return !0;
      }, w.prototype.hasAttributes = function() {
        return this.attribs.length !== 0;
      }, w.prototype.compareDocumentPosition = function(y) {
        var E, A;
        return E = this, E === y ? 0 : this.document() !== y.document() ? (A = t.Disconnected | t.ImplementationSpecific, Math.random() < 0.5 ? A |= t.Preceding : A |= t.Following, A) : E.isAncestor(y) ? t.Contains | t.Preceding : E.isDescendant(y) ? t.Contains | t.Following : E.isPreceding(y) ? t.Preceding : t.Following;
      }, w.prototype.isSameNode = function(y) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, w.prototype.lookupPrefix = function(y) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, w.prototype.isDefaultNamespace = function(y) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, w.prototype.lookupNamespaceURI = function(y) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, w.prototype.isEqualNode = function(y) {
        var E, A, L;
        if (y.nodeType !== this.nodeType || y.children.length !== this.children.length)
          return !1;
        for (E = A = 0, L = this.children.length - 1; 0 <= L ? A <= L : A >= L; E = 0 <= L ? ++A : --A)
          if (!this.children[E].isEqualNode(y.children[E]))
            return !1;
        return !0;
      }, w.prototype.getFeature = function(y, E) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, w.prototype.setUserData = function(y, E, A) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, w.prototype.getUserData = function(y) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, w.prototype.contains = function(y) {
        return y ? y === this || this.isDescendant(y) : !1;
      }, w.prototype.isDescendant = function(y) {
        var E, A, L, P, O;
        for (O = this.children, L = 0, P = O.length; L < P; L++)
          if (E = O[L], y === E || (A = E.isDescendant(y), A))
            return !0;
        return !1;
      }, w.prototype.isAncestor = function(y) {
        return y.isDescendant(this);
      }, w.prototype.isPreceding = function(y) {
        var E, A;
        return E = this.treePosition(y), A = this.treePosition(this), E === -1 || A === -1 ? !1 : E < A;
      }, w.prototype.isFollowing = function(y) {
        var E, A;
        return E = this.treePosition(y), A = this.treePosition(this), E === -1 || A === -1 ? !1 : E > A;
      }, w.prototype.treePosition = function(y) {
        var E, A;
        return A = 0, E = !1, this.foreachTreeNode(this.document(), function(L) {
          if (A++, !E && L === y)
            return E = !0;
        }), E ? A : -1;
      }, w.prototype.foreachTreeNode = function(y, E) {
        var A, L, P, O, m;
        for (y || (y = this.document()), O = y.children, L = 0, P = O.length; L < P; L++) {
          if (A = O[L], m = E(A))
            return m;
          if (m = this.foreachTreeNode(A, E), m)
            return m;
        }
      }, w;
    }();
  }).call(z)), qr.exports;
}
var ro = { exports: {} }, Cs;
function Oc() {
  return Cs || (Cs = 1, (function() {
    var t = function(n, r) {
      return function() {
        return n.apply(r, arguments);
      };
    }, e = {}.hasOwnProperty;
    ro.exports = function() {
      function n(r) {
        this.assertLegalName = t(this.assertLegalName, this), this.assertLegalChar = t(this.assertLegalChar, this);
        var o, i, s;
        r || (r = {}), this.options = r, this.options.version || (this.options.version = "1.0"), i = r.stringify || {};
        for (o in i)
          e.call(i, o) && (s = i[o], this[o] = s);
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
        var o, i;
        if (this.options.noValidation)
          return r;
        if (o = "", this.options.version === "1.0") {
          if (o = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, i = r.match(o))
            throw new Error("Invalid character in string: " + r + " at index " + i.index);
        } else if (this.options.version === "1.1" && (o = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, i = r.match(o)))
          throw new Error("Invalid character in string: " + r + " at index " + i.index);
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
  }).call(z)), ro.exports;
}
var oo = { exports: {} }, io = { exports: {} }, so = { exports: {} }, Rs;
function dr() {
  return Rs || (Rs = 1, (function() {
    so.exports = {
      None: 0,
      OpenTag: 1,
      InsideTag: 2,
      CloseTag: 3
    };
  }).call(z)), so.exports;
}
var Ps;
function Ac() {
  return Ps || (Ps = 1, (function() {
    var t, e, n, r = {}.hasOwnProperty;
    n = dt().assign, t = me(), yi(), Ei(), hi(), gi(), mi(), Ti(), Si(), Ni(), Nc(), vi(), xi(), bi(), wi(), e = dr(), io.exports = function() {
      function o(i) {
        var s, a, c;
        i || (i = {}), this.options = i, a = i.writer || {};
        for (s in a)
          r.call(a, s) && (c = a[s], this["_" + s] = this[s], this[s] = c);
      }
      return o.prototype.filterOptions = function(i) {
        var s, a, c, p, l, u, d, g;
        return i || (i = {}), i = n({}, this.options, i), s = {
          writer: this
        }, s.pretty = i.pretty || !1, s.allowEmpty = i.allowEmpty || !1, s.indent = (a = i.indent) != null ? a : "  ", s.newline = (c = i.newline) != null ? c : `
`, s.offset = (p = i.offset) != null ? p : 0, s.dontPrettyTextNodes = (l = (u = i.dontPrettyTextNodes) != null ? u : i.dontprettytextnodes) != null ? l : 0, s.spaceBeforeSlash = (d = (g = i.spaceBeforeSlash) != null ? g : i.spacebeforeslash) != null ? d : "", s.spaceBeforeSlash === !0 && (s.spaceBeforeSlash = " "), s.suppressPrettyCount = 0, s.user = {}, s.state = e.None, s;
      }, o.prototype.indent = function(i, s, a) {
        var c;
        return !s.pretty || s.suppressPrettyCount ? "" : s.pretty && (c = (a || 0) + s.offset + 1, c > 0) ? new Array(c).join(s.indent) : "";
      }, o.prototype.endline = function(i, s, a) {
        return !s.pretty || s.suppressPrettyCount ? "" : s.newline;
      }, o.prototype.attribute = function(i, s, a) {
        var c;
        return this.openAttribute(i, s, a), c = " " + i.name + '="' + i.value + '"', this.closeAttribute(i, s, a), c;
      }, o.prototype.cdata = function(i, s, a) {
        var c;
        return this.openNode(i, s, a), s.state = e.OpenTag, c = this.indent(i, s, a) + "<![CDATA[", s.state = e.InsideTag, c += i.value, s.state = e.CloseTag, c += "]]>" + this.endline(i, s, a), s.state = e.None, this.closeNode(i, s, a), c;
      }, o.prototype.comment = function(i, s, a) {
        var c;
        return this.openNode(i, s, a), s.state = e.OpenTag, c = this.indent(i, s, a) + "<!-- ", s.state = e.InsideTag, c += i.value, s.state = e.CloseTag, c += " -->" + this.endline(i, s, a), s.state = e.None, this.closeNode(i, s, a), c;
      }, o.prototype.declaration = function(i, s, a) {
        var c;
        return this.openNode(i, s, a), s.state = e.OpenTag, c = this.indent(i, s, a) + "<?xml", s.state = e.InsideTag, c += ' version="' + i.version + '"', i.encoding != null && (c += ' encoding="' + i.encoding + '"'), i.standalone != null && (c += ' standalone="' + i.standalone + '"'), s.state = e.CloseTag, c += s.spaceBeforeSlash + "?>", c += this.endline(i, s, a), s.state = e.None, this.closeNode(i, s, a), c;
      }, o.prototype.docType = function(i, s, a) {
        var c, p, l, u, d;
        if (a || (a = 0), this.openNode(i, s, a), s.state = e.OpenTag, u = this.indent(i, s, a), u += "<!DOCTYPE " + i.root().name, i.pubID && i.sysID ? u += ' PUBLIC "' + i.pubID + '" "' + i.sysID + '"' : i.sysID && (u += ' SYSTEM "' + i.sysID + '"'), i.children.length > 0) {
          for (u += " [", u += this.endline(i, s, a), s.state = e.InsideTag, d = i.children, p = 0, l = d.length; p < l; p++)
            c = d[p], u += this.writeChildNode(c, s, a + 1);
          s.state = e.CloseTag, u += "]";
        }
        return s.state = e.CloseTag, u += s.spaceBeforeSlash + ">", u += this.endline(i, s, a), s.state = e.None, this.closeNode(i, s, a), u;
      }, o.prototype.element = function(i, s, a) {
        var c, p, l, u, d, g, f, x, b, S, w, y, E, A;
        a || (a = 0), S = !1, w = "", this.openNode(i, s, a), s.state = e.OpenTag, w += this.indent(i, s, a) + "<" + i.name, y = i.attribs;
        for (b in y)
          r.call(y, b) && (c = y[b], w += this.attribute(c, s, a));
        if (l = i.children.length, u = l === 0 ? null : i.children[0], l === 0 || i.children.every(function(L) {
          return (L.type === t.Text || L.type === t.Raw) && L.value === "";
        }))
          s.allowEmpty ? (w += ">", s.state = e.CloseTag, w += "</" + i.name + ">" + this.endline(i, s, a)) : (s.state = e.CloseTag, w += s.spaceBeforeSlash + "/>" + this.endline(i, s, a));
        else if (s.pretty && l === 1 && (u.type === t.Text || u.type === t.Raw) && u.value != null)
          w += ">", s.state = e.InsideTag, s.suppressPrettyCount++, S = !0, w += this.writeChildNode(u, s, a + 1), s.suppressPrettyCount--, S = !1, s.state = e.CloseTag, w += "</" + i.name + ">" + this.endline(i, s, a);
        else {
          if (s.dontPrettyTextNodes) {
            for (E = i.children, d = 0, f = E.length; d < f; d++)
              if (p = E[d], (p.type === t.Text || p.type === t.Raw) && p.value != null) {
                s.suppressPrettyCount++, S = !0;
                break;
              }
          }
          for (w += ">" + this.endline(i, s, a), s.state = e.InsideTag, A = i.children, g = 0, x = A.length; g < x; g++)
            p = A[g], w += this.writeChildNode(p, s, a + 1);
          s.state = e.CloseTag, w += this.indent(i, s, a) + "</" + i.name + ">", S && s.suppressPrettyCount--, w += this.endline(i, s, a), s.state = e.None;
        }
        return this.closeNode(i, s, a), w;
      }, o.prototype.writeChildNode = function(i, s, a) {
        switch (i.type) {
          case t.CData:
            return this.cdata(i, s, a);
          case t.Comment:
            return this.comment(i, s, a);
          case t.Element:
            return this.element(i, s, a);
          case t.Raw:
            return this.raw(i, s, a);
          case t.Text:
            return this.text(i, s, a);
          case t.ProcessingInstruction:
            return this.processingInstruction(i, s, a);
          case t.Dummy:
            return "";
          case t.Declaration:
            return this.declaration(i, s, a);
          case t.DocType:
            return this.docType(i, s, a);
          case t.AttributeDeclaration:
            return this.dtdAttList(i, s, a);
          case t.ElementDeclaration:
            return this.dtdElement(i, s, a);
          case t.EntityDeclaration:
            return this.dtdEntity(i, s, a);
          case t.NotationDeclaration:
            return this.dtdNotation(i, s, a);
          default:
            throw new Error("Unknown XML node type: " + i.constructor.name);
        }
      }, o.prototype.processingInstruction = function(i, s, a) {
        var c;
        return this.openNode(i, s, a), s.state = e.OpenTag, c = this.indent(i, s, a) + "<?", s.state = e.InsideTag, c += i.target, i.value && (c += " " + i.value), s.state = e.CloseTag, c += s.spaceBeforeSlash + "?>", c += this.endline(i, s, a), s.state = e.None, this.closeNode(i, s, a), c;
      }, o.prototype.raw = function(i, s, a) {
        var c;
        return this.openNode(i, s, a), s.state = e.OpenTag, c = this.indent(i, s, a), s.state = e.InsideTag, c += i.value, s.state = e.CloseTag, c += this.endline(i, s, a), s.state = e.None, this.closeNode(i, s, a), c;
      }, o.prototype.text = function(i, s, a) {
        var c;
        return this.openNode(i, s, a), s.state = e.OpenTag, c = this.indent(i, s, a), s.state = e.InsideTag, c += i.value, s.state = e.CloseTag, c += this.endline(i, s, a), s.state = e.None, this.closeNode(i, s, a), c;
      }, o.prototype.dtdAttList = function(i, s, a) {
        var c;
        return this.openNode(i, s, a), s.state = e.OpenTag, c = this.indent(i, s, a) + "<!ATTLIST", s.state = e.InsideTag, c += " " + i.elementName + " " + i.attributeName + " " + i.attributeType, i.defaultValueType !== "#DEFAULT" && (c += " " + i.defaultValueType), i.defaultValue && (c += ' "' + i.defaultValue + '"'), s.state = e.CloseTag, c += s.spaceBeforeSlash + ">" + this.endline(i, s, a), s.state = e.None, this.closeNode(i, s, a), c;
      }, o.prototype.dtdElement = function(i, s, a) {
        var c;
        return this.openNode(i, s, a), s.state = e.OpenTag, c = this.indent(i, s, a) + "<!ELEMENT", s.state = e.InsideTag, c += " " + i.name + " " + i.value, s.state = e.CloseTag, c += s.spaceBeforeSlash + ">" + this.endline(i, s, a), s.state = e.None, this.closeNode(i, s, a), c;
      }, o.prototype.dtdEntity = function(i, s, a) {
        var c;
        return this.openNode(i, s, a), s.state = e.OpenTag, c = this.indent(i, s, a) + "<!ENTITY", s.state = e.InsideTag, i.pe && (c += " %"), c += " " + i.name, i.value ? c += ' "' + i.value + '"' : (i.pubID && i.sysID ? c += ' PUBLIC "' + i.pubID + '" "' + i.sysID + '"' : i.sysID && (c += ' SYSTEM "' + i.sysID + '"'), i.nData && (c += " NDATA " + i.nData)), s.state = e.CloseTag, c += s.spaceBeforeSlash + ">" + this.endline(i, s, a), s.state = e.None, this.closeNode(i, s, a), c;
      }, o.prototype.dtdNotation = function(i, s, a) {
        var c;
        return this.openNode(i, s, a), s.state = e.OpenTag, c = this.indent(i, s, a) + "<!NOTATION", s.state = e.InsideTag, c += " " + i.name, i.pubID && i.sysID ? c += ' PUBLIC "' + i.pubID + '" "' + i.sysID + '"' : i.pubID ? c += ' PUBLIC "' + i.pubID + '"' : i.sysID && (c += ' SYSTEM "' + i.sysID + '"'), s.state = e.CloseTag, c += s.spaceBeforeSlash + ">" + this.endline(i, s, a), s.state = e.None, this.closeNode(i, s, a), c;
      }, o.prototype.openNode = function(i, s, a) {
      }, o.prototype.closeNode = function(i, s, a) {
      }, o.prototype.openAttribute = function(i, s, a) {
      }, o.prototype.closeAttribute = function(i, s, a) {
      }, o;
    }();
  }).call(z)), io.exports;
}
var Is;
function Oi() {
  return Is || (Is = 1, (function() {
    var t, e = function(r, o) {
      for (var i in o)
        n.call(o, i) && (r[i] = o[i]);
      function s() {
        this.constructor = r;
      }
      return s.prototype = o.prototype, r.prototype = new s(), r.__super__ = o.prototype, r;
    }, n = {}.hasOwnProperty;
    t = Ac(), oo.exports = function(r) {
      e(o, r);
      function o(i) {
        o.__super__.constructor.call(this, i);
      }
      return o.prototype.document = function(i, s) {
        var a, c, p, l, u;
        for (s = this.filterOptions(s), l = "", u = i.children, c = 0, p = u.length; c < p; c++)
          a = u[c], l += this.writeChildNode(a, s, 0);
        return s.pretty && l.slice(-s.newline.length) === s.newline && (l = l.slice(0, -s.newline.length)), l;
      }, o;
    }(t);
  }).call(z)), oo.exports;
}
var ks;
function _c() {
  return ks || (ks = 1, (function() {
    var t, e, n, r, o, i, s, a = function(p, l) {
      for (var u in l)
        c.call(l, u) && (p[u] = l[u]);
      function d() {
        this.constructor = p;
      }
      return d.prototype = l.prototype, p.prototype = new d(), p.__super__ = l.prototype, p;
    }, c = {}.hasOwnProperty;
    s = dt().isPlainObject, n = Tc(), e = np(), r = He(), t = me(), i = Oc(), o = Oi(), Pr.exports = function(p) {
      a(l, p);
      function l(u) {
        l.__super__.constructor.call(this, null), this.name = "#document", this.type = t.Document, this.documentURI = null, this.domConfig = new e(), u || (u = {}), u.writer || (u.writer = new o()), this.options = u, this.stringify = new i(u);
      }
      return Object.defineProperty(l.prototype, "implementation", {
        value: new n()
      }), Object.defineProperty(l.prototype, "doctype", {
        get: function() {
          var u, d, g, f;
          for (f = this.children, d = 0, g = f.length; d < g; d++)
            if (u = f[d], u.type === t.DocType)
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
          return this.children.length !== 0 && this.children[0].type === t.Declaration ? this.children[0].encoding : null;
        }
      }), Object.defineProperty(l.prototype, "xmlStandalone", {
        get: function() {
          return this.children.length !== 0 && this.children[0].type === t.Declaration ? this.children[0].standalone === "yes" : !1;
        }
      }), Object.defineProperty(l.prototype, "xmlVersion", {
        get: function() {
          return this.children.length !== 0 && this.children[0].type === t.Declaration ? this.children[0].version : "1.0";
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
        return d = {}, u ? s(u) && (d = u, u = this.options.writer) : u = this.options.writer, u.document(this, u.filterOptions(d));
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
      }, l.prototype.renameNode = function(u, d, g) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.getElementsByClassName = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createEvent = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createRange = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createNodeIterator = function(u, d, g) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createTreeWalker = function(u, d, g) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l;
    }(r);
  }).call(z)), Pr.exports;
}
var ao = { exports: {} }, Fs;
function ip() {
  return Fs || (Fs = 1, (function() {
    var t, e, n, r, o, i, s, a, c, p, l, u, d, g, f, x, b, S, w, y, E, A, L, P = {}.hasOwnProperty;
    L = dt(), E = L.isObject, y = L.isFunction, A = L.isPlainObject, w = L.getValue, t = me(), u = _c(), d = mi(), r = hi(), o = gi(), f = Ti(), S = Si(), g = Ni(), p = yi(), l = Ei(), i = vi(), a = bi(), s = xi(), c = wi(), n = Sc(), b = Oc(), x = Oi(), e = dr(), ao.exports = function() {
      function O(m, _, D) {
        var I;
        this.name = "?xml", this.type = t.Document, m || (m = {}), I = {}, m.writer ? A(m.writer) && (I = m.writer, m.writer = new x()) : m.writer = new x(), this.options = m, this.writer = m.writer, this.writerOptions = this.writer.filterOptions(I), this.stringify = new b(m), this.onDataCallback = _ || function() {
        }, this.onEndCallback = D || function() {
        }, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null;
      }
      return O.prototype.createChildNode = function(m) {
        var _, D, I, j, B, $, q, k;
        switch (m.type) {
          case t.CData:
            this.cdata(m.value);
            break;
          case t.Comment:
            this.comment(m.value);
            break;
          case t.Element:
            I = {}, q = m.attribs;
            for (D in q)
              P.call(q, D) && (_ = q[D], I[D] = _.value);
            this.node(m.name, I);
            break;
          case t.Dummy:
            this.dummy();
            break;
          case t.Raw:
            this.raw(m.value);
            break;
          case t.Text:
            this.text(m.value);
            break;
          case t.ProcessingInstruction:
            this.instruction(m.target, m.value);
            break;
          default:
            throw new Error("This XML node type is not supported in a JS object: " + m.constructor.name);
        }
        for (k = m.children, B = 0, $ = k.length; B < $; B++)
          j = k[B], this.createChildNode(j), j.type === t.Element && this.up();
        return this;
      }, O.prototype.dummy = function() {
        return this;
      }, O.prototype.node = function(m, _, D) {
        var I;
        if (m == null)
          throw new Error("Missing node name.");
        if (this.root && this.currentLevel === -1)
          throw new Error("Document can only have one root node. " + this.debugInfo(m));
        return this.openCurrent(), m = w(m), _ == null && (_ = {}), _ = w(_), E(_) || (I = [_, D], D = I[0], _ = I[1]), this.currentNode = new d(this, m, _), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, D != null && this.text(D), this;
      }, O.prototype.element = function(m, _, D) {
        var I, j, B, $, q, k;
        if (this.currentNode && this.currentNode.type === t.DocType)
          this.dtdElement.apply(this, arguments);
        else if (Array.isArray(m) || E(m) || y(m))
          for ($ = this.options.noValidation, this.options.noValidation = !0, k = new u(this.options).element("TEMP_ROOT"), k.element(m), this.options.noValidation = $, q = k.children, j = 0, B = q.length; j < B; j++)
            I = q[j], this.createChildNode(I), I.type === t.Element && this.up();
        else
          this.node(m, _, D);
        return this;
      }, O.prototype.attribute = function(m, _) {
        var D, I;
        if (!this.currentNode || this.currentNode.children)
          throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(m));
        if (m != null && (m = w(m)), E(m))
          for (D in m)
            P.call(m, D) && (I = m[D], this.attribute(D, I));
        else
          y(_) && (_ = _.apply()), this.options.keepNullAttributes && _ == null ? this.currentNode.attribs[m] = new n(this, m, "") : _ != null && (this.currentNode.attribs[m] = new n(this, m, _));
        return this;
      }, O.prototype.text = function(m) {
        var _;
        return this.openCurrent(), _ = new S(this, m), this.onData(this.writer.text(_, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.cdata = function(m) {
        var _;
        return this.openCurrent(), _ = new r(this, m), this.onData(this.writer.cdata(_, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.comment = function(m) {
        var _;
        return this.openCurrent(), _ = new o(this, m), this.onData(this.writer.comment(_, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.raw = function(m) {
        var _;
        return this.openCurrent(), _ = new f(this, m), this.onData(this.writer.raw(_, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.instruction = function(m, _) {
        var D, I, j, B, $;
        if (this.openCurrent(), m != null && (m = w(m)), _ != null && (_ = w(_)), Array.isArray(m))
          for (D = 0, B = m.length; D < B; D++)
            I = m[D], this.instruction(I);
        else if (E(m))
          for (I in m)
            P.call(m, I) && (j = m[I], this.instruction(I, j));
        else
          y(_) && (_ = _.apply()), $ = new g(this, m, _), this.onData(this.writer.processingInstruction($, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }, O.prototype.declaration = function(m, _, D) {
        var I;
        if (this.openCurrent(), this.documentStarted)
          throw new Error("declaration() must be the first node.");
        return I = new p(this, m, _, D), this.onData(this.writer.declaration(I, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.doctype = function(m, _, D) {
        if (this.openCurrent(), m == null)
          throw new Error("Missing root node name.");
        if (this.root)
          throw new Error("dtd() must come before the root node.");
        return this.currentNode = new l(this, _, D), this.currentNode.rootNodeName = m, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this;
      }, O.prototype.dtdElement = function(m, _) {
        var D;
        return this.openCurrent(), D = new s(this, m, _), this.onData(this.writer.dtdElement(D, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.attList = function(m, _, D, I, j) {
        var B;
        return this.openCurrent(), B = new i(this, m, _, D, I, j), this.onData(this.writer.dtdAttList(B, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.entity = function(m, _) {
        var D;
        return this.openCurrent(), D = new a(this, !1, m, _), this.onData(this.writer.dtdEntity(D, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.pEntity = function(m, _) {
        var D;
        return this.openCurrent(), D = new a(this, !0, m, _), this.onData(this.writer.dtdEntity(D, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.notation = function(m, _) {
        var D;
        return this.openCurrent(), D = new c(this, m, _), this.onData(this.writer.dtdNotation(D, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.up = function() {
        if (this.currentLevel < 0)
          throw new Error("The document node has no parent.");
        return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this;
      }, O.prototype.end = function() {
        for (; this.currentLevel >= 0; )
          this.up();
        return this.onEnd();
      }, O.prototype.openCurrent = function() {
        if (this.currentNode)
          return this.currentNode.children = !0, this.openNode(this.currentNode);
      }, O.prototype.openNode = function(m) {
        var _, D, I, j;
        if (!m.isOpen) {
          if (!this.root && this.currentLevel === 0 && m.type === t.Element && (this.root = m), D = "", m.type === t.Element) {
            this.writerOptions.state = e.OpenTag, D = this.writer.indent(m, this.writerOptions, this.currentLevel) + "<" + m.name, j = m.attribs;
            for (I in j)
              P.call(j, I) && (_ = j[I], D += this.writer.attribute(_, this.writerOptions, this.currentLevel));
            D += (m.children ? ">" : "/>") + this.writer.endline(m, this.writerOptions, this.currentLevel), this.writerOptions.state = e.InsideTag;
          } else
            this.writerOptions.state = e.OpenTag, D = this.writer.indent(m, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + m.rootNodeName, m.pubID && m.sysID ? D += ' PUBLIC "' + m.pubID + '" "' + m.sysID + '"' : m.sysID && (D += ' SYSTEM "' + m.sysID + '"'), m.children ? (D += " [", this.writerOptions.state = e.InsideTag) : (this.writerOptions.state = e.CloseTag, D += ">"), D += this.writer.endline(m, this.writerOptions, this.currentLevel);
          return this.onData(D, this.currentLevel), m.isOpen = !0;
        }
      }, O.prototype.closeNode = function(m) {
        var _;
        if (!m.isClosed)
          return _ = "", this.writerOptions.state = e.CloseTag, m.type === t.Element ? _ = this.writer.indent(m, this.writerOptions, this.currentLevel) + "</" + m.name + ">" + this.writer.endline(m, this.writerOptions, this.currentLevel) : _ = this.writer.indent(m, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(m, this.writerOptions, this.currentLevel), this.writerOptions.state = e.None, this.onData(_, this.currentLevel), m.isClosed = !0;
      }, O.prototype.onData = function(m, _) {
        return this.documentStarted = !0, this.onDataCallback(m, _ + 1);
      }, O.prototype.onEnd = function() {
        return this.documentCompleted = !0, this.onEndCallback();
      }, O.prototype.debugInfo = function(m) {
        return m == null ? "" : "node: <" + m + ">";
      }, O.prototype.ele = function() {
        return this.element.apply(this, arguments);
      }, O.prototype.nod = function(m, _, D) {
        return this.node(m, _, D);
      }, O.prototype.txt = function(m) {
        return this.text(m);
      }, O.prototype.dat = function(m) {
        return this.cdata(m);
      }, O.prototype.com = function(m) {
        return this.comment(m);
      }, O.prototype.ins = function(m, _) {
        return this.instruction(m, _);
      }, O.prototype.dec = function(m, _, D) {
        return this.declaration(m, _, D);
      }, O.prototype.dtd = function(m, _, D) {
        return this.doctype(m, _, D);
      }, O.prototype.e = function(m, _, D) {
        return this.element(m, _, D);
      }, O.prototype.n = function(m, _, D) {
        return this.node(m, _, D);
      }, O.prototype.t = function(m) {
        return this.text(m);
      }, O.prototype.d = function(m) {
        return this.cdata(m);
      }, O.prototype.c = function(m) {
        return this.comment(m);
      }, O.prototype.r = function(m) {
        return this.raw(m);
      }, O.prototype.i = function(m, _) {
        return this.instruction(m, _);
      }, O.prototype.att = function() {
        return this.currentNode && this.currentNode.type === t.DocType ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
      }, O.prototype.a = function() {
        return this.currentNode && this.currentNode.type === t.DocType ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
      }, O.prototype.ent = function(m, _) {
        return this.entity(m, _);
      }, O.prototype.pent = function(m, _) {
        return this.pEntity(m, _);
      }, O.prototype.not = function(m, _) {
        return this.notation(m, _);
      }, O;
    }();
  }).call(z)), ao.exports;
}
var co = { exports: {} }, qs;
function sp() {
  return qs || (qs = 1, (function() {
    var t, e, n, r = function(i, s) {
      for (var a in s)
        o.call(s, a) && (i[a] = s[a]);
      function c() {
        this.constructor = i;
      }
      return c.prototype = s.prototype, i.prototype = new c(), i.__super__ = s.prototype, i;
    }, o = {}.hasOwnProperty;
    t = me(), n = Ac(), e = dr(), co.exports = function(i) {
      r(s, i);
      function s(a, c) {
        this.stream = a, s.__super__.constructor.call(this, c);
      }
      return s.prototype.endline = function(a, c, p) {
        return a.isLastRootNode && c.state === e.CloseTag ? "" : s.__super__.endline.call(this, a, c, p);
      }, s.prototype.document = function(a, c) {
        var p, l, u, d, g, f, x, b, S;
        for (x = a.children, l = u = 0, g = x.length; u < g; l = ++u)
          p = x[l], p.isLastRootNode = l === a.children.length - 1;
        for (c = this.filterOptions(c), b = a.children, S = [], d = 0, f = b.length; d < f; d++)
          p = b[d], S.push(this.writeChildNode(p, c, 0));
        return S;
      }, s.prototype.attribute = function(a, c, p) {
        return this.stream.write(s.__super__.attribute.call(this, a, c, p));
      }, s.prototype.cdata = function(a, c, p) {
        return this.stream.write(s.__super__.cdata.call(this, a, c, p));
      }, s.prototype.comment = function(a, c, p) {
        return this.stream.write(s.__super__.comment.call(this, a, c, p));
      }, s.prototype.declaration = function(a, c, p) {
        return this.stream.write(s.__super__.declaration.call(this, a, c, p));
      }, s.prototype.docType = function(a, c, p) {
        var l, u, d, g;
        if (p || (p = 0), this.openNode(a, c, p), c.state = e.OpenTag, this.stream.write(this.indent(a, c, p)), this.stream.write("<!DOCTYPE " + a.root().name), a.pubID && a.sysID ? this.stream.write(' PUBLIC "' + a.pubID + '" "' + a.sysID + '"') : a.sysID && this.stream.write(' SYSTEM "' + a.sysID + '"'), a.children.length > 0) {
          for (this.stream.write(" ["), this.stream.write(this.endline(a, c, p)), c.state = e.InsideTag, g = a.children, u = 0, d = g.length; u < d; u++)
            l = g[u], this.writeChildNode(l, c, p + 1);
          c.state = e.CloseTag, this.stream.write("]");
        }
        return c.state = e.CloseTag, this.stream.write(c.spaceBeforeSlash + ">"), this.stream.write(this.endline(a, c, p)), c.state = e.None, this.closeNode(a, c, p);
      }, s.prototype.element = function(a, c, p) {
        var l, u, d, g, f, x, b, S, w;
        p || (p = 0), this.openNode(a, c, p), c.state = e.OpenTag, this.stream.write(this.indent(a, c, p) + "<" + a.name), S = a.attribs;
        for (b in S)
          o.call(S, b) && (l = S[b], this.attribute(l, c, p));
        if (d = a.children.length, g = d === 0 ? null : a.children[0], d === 0 || a.children.every(function(y) {
          return (y.type === t.Text || y.type === t.Raw) && y.value === "";
        }))
          c.allowEmpty ? (this.stream.write(">"), c.state = e.CloseTag, this.stream.write("</" + a.name + ">")) : (c.state = e.CloseTag, this.stream.write(c.spaceBeforeSlash + "/>"));
        else if (c.pretty && d === 1 && (g.type === t.Text || g.type === t.Raw) && g.value != null)
          this.stream.write(">"), c.state = e.InsideTag, c.suppressPrettyCount++, this.writeChildNode(g, c, p + 1), c.suppressPrettyCount--, c.state = e.CloseTag, this.stream.write("</" + a.name + ">");
        else {
          for (this.stream.write(">" + this.endline(a, c, p)), c.state = e.InsideTag, w = a.children, f = 0, x = w.length; f < x; f++)
            u = w[f], this.writeChildNode(u, c, p + 1);
          c.state = e.CloseTag, this.stream.write(this.indent(a, c, p) + "</" + a.name + ">");
        }
        return this.stream.write(this.endline(a, c, p)), c.state = e.None, this.closeNode(a, c, p);
      }, s.prototype.processingInstruction = function(a, c, p) {
        return this.stream.write(s.__super__.processingInstruction.call(this, a, c, p));
      }, s.prototype.raw = function(a, c, p) {
        return this.stream.write(s.__super__.raw.call(this, a, c, p));
      }, s.prototype.text = function(a, c, p) {
        return this.stream.write(s.__super__.text.call(this, a, c, p));
      }, s.prototype.dtdAttList = function(a, c, p) {
        return this.stream.write(s.__super__.dtdAttList.call(this, a, c, p));
      }, s.prototype.dtdElement = function(a, c, p) {
        return this.stream.write(s.__super__.dtdElement.call(this, a, c, p));
      }, s.prototype.dtdEntity = function(a, c, p) {
        return this.stream.write(s.__super__.dtdEntity.call(this, a, c, p));
      }, s.prototype.dtdNotation = function(a, c, p) {
        return this.stream.write(s.__super__.dtdNotation.call(this, a, c, p));
      }, s;
    }(n);
  }).call(z)), co.exports;
}
var Ms;
function ap() {
  return Ms || (Ms = 1, (function() {
    var t, e, n, r, o, i, s, a, c, p;
    p = dt(), a = p.assign, c = p.isFunction, n = Tc(), r = _c(), o = ip(), s = Oi(), i = sp(), t = me(), e = dr(), rt.create = function(l, u, d, g) {
      var f, x;
      if (l == null)
        throw new Error("Root element needs a name.");
      return g = a({}, u, d, g), f = new r(g), x = f.element(l), g.headless || (f.declaration(g), (g.pubID != null || g.sysID != null) && f.dtd(g)), x;
    }, rt.begin = function(l, u, d) {
      var g;
      return c(l) && (g = [l, u], u = g[0], d = g[1], l = {}), u ? new o(l, u, d) : new r(l);
    }, rt.stringWriter = function(l) {
      return new s(l);
    }, rt.streamWriter = function(l, u) {
      return new i(l, u);
    }, rt.implementation = new n(), rt.nodeType = t, rt.writerState = e;
  }).call(z)), rt;
}
var js;
function cp() {
  return js || (js = 1, (function() {
    var t, e, n, r, o, i = {}.hasOwnProperty;
    t = ap(), e = di().defaults, r = function(s) {
      return typeof s == "string" && (s.indexOf("&") >= 0 || s.indexOf(">") >= 0 || s.indexOf("<") >= 0);
    }, o = function(s) {
      return "<![CDATA[" + n(s) + "]]>";
    }, n = function(s) {
      return s.replace("]]>", "]]]]><![CDATA[>");
    }, Cr.Builder = function() {
      function s(a) {
        var c, p, l;
        this.options = {}, p = e["0.2"];
        for (c in p)
          i.call(p, c) && (l = p[c], this.options[c] = l);
        for (c in a)
          i.call(a, c) && (l = a[c], this.options[c] = l);
      }
      return s.prototype.buildObject = function(a) {
        var c, p, l, u, d;
        return c = this.options.attrkey, p = this.options.charkey, Object.keys(a).length === 1 && this.options.rootName === e["0.2"].rootName ? (d = Object.keys(a)[0], a = a[d]) : d = this.options.rootName, l = /* @__PURE__ */ function(g) {
          return function(f, x) {
            var b, S, w, y, E, A;
            if (typeof x != "object")
              g.options.cdata && r(x) ? f.raw(o(x)) : f.txt(x);
            else if (Array.isArray(x)) {
              for (y in x)
                if (i.call(x, y)) {
                  S = x[y];
                  for (E in S)
                    w = S[E], f = l(f.ele(E), w).up();
                }
            } else
              for (E in x)
                if (i.call(x, E))
                  if (S = x[E], E === c) {
                    if (typeof S == "object")
                      for (b in S)
                        A = S[b], f = f.att(b, A);
                  } else if (E === p)
                    g.options.cdata && r(S) ? f = f.raw(o(S)) : f = f.txt(S);
                  else if (Array.isArray(S))
                    for (y in S)
                      i.call(S, y) && (w = S[y], typeof w == "string" ? g.options.cdata && r(w) ? f = f.ele(E).raw(o(w)).up() : f = f.ele(E, w).up() : f = l(f.ele(E), w).up());
                  else typeof S == "object" ? f = l(f.ele(E), S).up() : typeof S == "string" && g.options.cdata && r(S) ? f = f.ele(E).raw(o(S)).up() : (S == null && (S = ""), f = f.ele(E, S.toString()).up());
            return f;
          };
        }(this), u = t.create(d, this.options.xmldec, this.options.doctype, {
          headless: this.options.headless,
          allowSurrogateChars: this.options.allowSurrogateChars
        }), l(u, a).end(this.options.renderOpts);
      }, s;
    }();
  }).call(z)), Cr;
}
var lo = {}, uo = {}, Us;
function lp() {
  return Us || (Us = 1, function(t) {
    (function(e) {
      e.parser = function(v, h) {
        return new r(v, h);
      }, e.SAXParser = r, e.SAXStream = l, e.createStream = p, e.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function r(v, h) {
        if (!(this instanceof r))
          return new r(v, h);
        var R = this;
        i(R), R.q = R.c = "", R.bufferCheckPosition = e.MAX_BUFFER_LENGTH, R.opt = h || {}, R.opt.lowercase = R.opt.lowercase || R.opt.lowercasetags, R.looseCase = R.opt.lowercase ? "toLowerCase" : "toUpperCase", R.tags = [], R.closed = R.closedRoot = R.sawRoot = !1, R.tag = R.error = null, R.strict = !!v, R.noscript = !!(v || R.opt.noscript), R.state = m.BEGIN, R.strictEntities = R.opt.strictEntities, R.ENTITIES = R.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), R.attribList = [], R.opt.xmlns && (R.ns = Object.create(x)), R.opt.unquotedAttributeValues === void 0 && (R.opt.unquotedAttributeValues = !v), R.trackPosition = R.opt.position !== !1, R.trackPosition && (R.position = R.line = R.column = 0), D(R, "onready");
      }
      Object.create || (Object.create = function(v) {
        function h() {
        }
        h.prototype = v;
        var R = new h();
        return R;
      }), Object.keys || (Object.keys = function(v) {
        var h = [];
        for (var R in v) v.hasOwnProperty(R) && h.push(R);
        return h;
      });
      function o(v) {
        for (var h = Math.max(e.MAX_BUFFER_LENGTH, 10), R = 0, T = 0, te = n.length; T < te; T++) {
          var ue = v[n[T]].length;
          if (ue > h)
            switch (n[T]) {
              case "textNode":
                j(v);
                break;
              case "cdata":
                I(v, "oncdata", v.cdata), v.cdata = "";
                break;
              case "script":
                I(v, "onscript", v.script), v.script = "";
                break;
              default:
                $(v, "Max buffer length exceeded: " + n[T]);
            }
          R = Math.max(R, ue);
        }
        var he = e.MAX_BUFFER_LENGTH - R;
        v.bufferCheckPosition = he + v.position;
      }
      function i(v) {
        for (var h = 0, R = n.length; h < R; h++)
          v[n[h]] = "";
      }
      function s(v) {
        j(v), v.cdata !== "" && (I(v, "oncdata", v.cdata), v.cdata = ""), v.script !== "" && (I(v, "onscript", v.script), v.script = "");
      }
      r.prototype = {
        end: function() {
          q(this);
        },
        write: Ke,
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
      var c = e.EVENTS.filter(function(v) {
        return v !== "error" && v !== "end";
      });
      function p(v, h) {
        return new l(v, h);
      }
      function l(v, h) {
        if (!(this instanceof l))
          return new l(v, h);
        a.apply(this), this._parser = new r(v, h), this.writable = !0, this.readable = !0;
        var R = this;
        this._parser.onend = function() {
          R.emit("end");
        }, this._parser.onerror = function(T) {
          R.emit("error", T), R._parser.error = null;
        }, this._decoder = null, c.forEach(function(T) {
          Object.defineProperty(R, "on" + T, {
            get: function() {
              return R._parser["on" + T];
            },
            set: function(te) {
              if (!te)
                return R.removeAllListeners(T), R._parser["on" + T] = te, te;
              R.on(T, te);
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
      }), l.prototype.write = function(v) {
        return typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(v) && (this._decoder || (this._decoder = new TextDecoder("utf8")), v = this._decoder.decode(v, { stream: !0 })), this._parser.write(v.toString()), this.emit("data", v), !0;
      }, l.prototype.end = function(v) {
        if (v && v.length && this.write(v), this._decoder) {
          var h = this._decoder.decode();
          h && (this._parser.write(h), this.emit("data", h));
        }
        return this._parser.end(), !0;
      }, l.prototype.on = function(v, h) {
        var R = this;
        return !R._parser["on" + v] && c.indexOf(v) !== -1 && (R._parser["on" + v] = function() {
          var T = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          T.splice(0, 0, v), R.emit.apply(R, T);
        }), a.prototype.on.call(R, v, h);
      };
      var u = "[CDATA[", d = "DOCTYPE", g = "http://www.w3.org/XML/1998/namespace", f = "http://www.w3.org/2000/xmlns/", x = { xml: g, xmlns: f }, b = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, S = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, w = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, y = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function E(v) {
        return v === " " || v === `
` || v === "\r" || v === "	";
      }
      function A(v) {
        return v === '"' || v === "'";
      }
      function L(v) {
        return v === ">" || E(v);
      }
      function P(v, h) {
        return v.test(h);
      }
      function O(v, h) {
        return !P(v, h);
      }
      var m = 0;
      e.STATE = {
        BEGIN: m++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: m++,
        // leading whitespace
        TEXT: m++,
        // general stuff
        TEXT_ENTITY: m++,
        // &amp and such.
        OPEN_WAKA: m++,
        // <
        SGML_DECL: m++,
        // <!BLARG
        SGML_DECL_QUOTED: m++,
        // <!BLARG foo "bar
        DOCTYPE: m++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: m++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: m++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: m++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: m++,
        // <!-
        COMMENT: m++,
        // <!--
        COMMENT_ENDING: m++,
        // <!-- blah -
        COMMENT_ENDED: m++,
        // <!-- blah --
        CDATA: m++,
        // <![CDATA[ something
        CDATA_ENDING: m++,
        // ]
        CDATA_ENDING_2: m++,
        // ]]
        PROC_INST: m++,
        // <?hi
        PROC_INST_BODY: m++,
        // <?hi there
        PROC_INST_ENDING: m++,
        // <?hi "there" ?
        OPEN_TAG: m++,
        // <strong
        OPEN_TAG_SLASH: m++,
        // <strong /
        ATTRIB: m++,
        // <a
        ATTRIB_NAME: m++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: m++,
        // <a foo _
        ATTRIB_VALUE: m++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: m++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: m++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: m++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: m++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: m++,
        // <foo bar=&quot
        CLOSE_TAG: m++,
        // </a
        CLOSE_TAG_SAW_WHITE: m++,
        // </a   >
        SCRIPT: m++,
        // <script> ...
        SCRIPT_ENDING: m++
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
      }, Object.keys(e.ENTITIES).forEach(function(v) {
        var h = e.ENTITIES[v], R = typeof h == "number" ? String.fromCharCode(h) : h;
        e.ENTITIES[v] = R;
      });
      for (var _ in e.STATE)
        e.STATE[e.STATE[_]] = _;
      m = e.STATE;
      function D(v, h, R) {
        v[h] && v[h](R);
      }
      function I(v, h, R) {
        v.textNode && j(v), D(v, h, R);
      }
      function j(v) {
        v.textNode = B(v.opt, v.textNode), v.textNode && D(v, "ontext", v.textNode), v.textNode = "";
      }
      function B(v, h) {
        return v.trim && (h = h.trim()), v.normalize && (h = h.replace(/\s+/g, " ")), h;
      }
      function $(v, h) {
        return j(v), v.trackPosition && (h += `
Line: ` + v.line + `
Column: ` + v.column + `
Char: ` + v.c), h = new Error(h), v.error = h, D(v, "onerror", h), v;
      }
      function q(v) {
        return v.sawRoot && !v.closedRoot && k(v, "Unclosed root tag"), v.state !== m.BEGIN && v.state !== m.BEGIN_WHITESPACE && v.state !== m.TEXT && $(v, "Unexpected end"), j(v), v.c = "", v.closed = !0, D(v, "onend"), r.call(v, v.strict, v.opt), v;
      }
      function k(v, h) {
        if (typeof v != "object" || !(v instanceof r))
          throw new Error("bad call to strictFail");
        v.strict && $(v, h);
      }
      function Y(v) {
        v.strict || (v.tagName = v.tagName[v.looseCase]());
        var h = v.tags[v.tags.length - 1] || v, R = v.tag = { name: v.tagName, attributes: {} };
        v.opt.xmlns && (R.ns = h.ns), v.attribList.length = 0, I(v, "onopentagstart", R);
      }
      function W(v, h) {
        var R = v.indexOf(":"), T = R < 0 ? ["", v] : v.split(":"), te = T[0], ue = T[1];
        return h && v === "xmlns" && (te = "xmlns", ue = ""), { prefix: te, local: ue };
      }
      function V(v) {
        if (v.strict || (v.attribName = v.attribName[v.looseCase]()), v.attribList.indexOf(v.attribName) !== -1 || v.tag.attributes.hasOwnProperty(v.attribName)) {
          v.attribName = v.attribValue = "";
          return;
        }
        if (v.opt.xmlns) {
          var h = W(v.attribName, !0), R = h.prefix, T = h.local;
          if (R === "xmlns")
            if (T === "xml" && v.attribValue !== g)
              k(
                v,
                "xml: prefix must be bound to " + g + `
Actual: ` + v.attribValue
              );
            else if (T === "xmlns" && v.attribValue !== f)
              k(
                v,
                "xmlns: prefix must be bound to " + f + `
Actual: ` + v.attribValue
              );
            else {
              var te = v.tag, ue = v.tags[v.tags.length - 1] || v;
              te.ns === ue.ns && (te.ns = Object.create(ue.ns)), te.ns[T] = v.attribValue;
            }
          v.attribList.push([v.attribName, v.attribValue]);
        } else
          v.tag.attributes[v.attribName] = v.attribValue, I(v, "onattribute", {
            name: v.attribName,
            value: v.attribValue
          });
        v.attribName = v.attribValue = "";
      }
      function U(v, h) {
        if (v.opt.xmlns) {
          var R = v.tag, T = W(v.tagName);
          R.prefix = T.prefix, R.local = T.local, R.uri = R.ns[T.prefix] || "", R.prefix && !R.uri && (k(
            v,
            "Unbound namespace prefix: " + JSON.stringify(v.tagName)
          ), R.uri = T.prefix);
          var te = v.tags[v.tags.length - 1] || v;
          R.ns && te.ns !== R.ns && Object.keys(R.ns).forEach(function(ns) {
            I(v, "onopennamespace", {
              prefix: ns,
              uri: R.ns[ns]
            });
          });
          for (var ue = 0, he = v.attribList.length; ue < he; ue++) {
            var Ie = v.attribList[ue], ke = Ie[0], Ut = Ie[1], be = W(ke, !0), nt = be.prefix, Uu = be.local, ts = nt === "" ? "" : R.ns[nt] || "", _r = {
              name: ke,
              value: Ut,
              prefix: nt,
              local: Uu,
              uri: ts
            };
            nt && nt !== "xmlns" && !ts && (k(
              v,
              "Unbound namespace prefix: " + JSON.stringify(nt)
            ), _r.uri = nt), v.tag.attributes[ke] = _r, I(v, "onattribute", _r);
          }
          v.attribList.length = 0;
        }
        v.tag.isSelfClosing = !!h, v.sawRoot = !0, v.tags.push(v.tag), I(v, "onopentag", v.tag), h || (!v.noscript && v.tagName.toLowerCase() === "script" ? v.state = m.SCRIPT : v.state = m.TEXT, v.tag = null, v.tagName = ""), v.attribName = v.attribValue = "", v.attribList.length = 0;
      }
      function Z(v) {
        if (!v.tagName) {
          k(v, "Weird empty close tag."), v.textNode += "</>", v.state = m.TEXT;
          return;
        }
        if (v.script) {
          if (v.tagName !== "script") {
            v.script += "</" + v.tagName + ">", v.tagName = "", v.state = m.SCRIPT;
            return;
          }
          I(v, "onscript", v.script), v.script = "";
        }
        var h = v.tags.length, R = v.tagName;
        v.strict || (R = R[v.looseCase]());
        for (var T = R; h--; ) {
          var te = v.tags[h];
          if (te.name !== T)
            k(v, "Unexpected close tag");
          else
            break;
        }
        if (h < 0) {
          k(v, "Unmatched closing tag: " + v.tagName), v.textNode += "</" + v.tagName + ">", v.state = m.TEXT;
          return;
        }
        v.tagName = R;
        for (var ue = v.tags.length; ue-- > h; ) {
          var he = v.tag = v.tags.pop();
          v.tagName = v.tag.name, I(v, "onclosetag", v.tagName);
          var Ie = {};
          for (var ke in he.ns)
            Ie[ke] = he.ns[ke];
          var Ut = v.tags[v.tags.length - 1] || v;
          v.opt.xmlns && he.ns !== Ut.ns && Object.keys(he.ns).forEach(function(be) {
            var nt = he.ns[be];
            I(v, "onclosenamespace", { prefix: be, uri: nt });
          });
        }
        h === 0 && (v.closedRoot = !0), v.tagName = v.attribValue = v.attribName = "", v.attribList.length = 0, v.state = m.TEXT;
      }
      function Ne(v) {
        var h = v.entity, R = h.toLowerCase(), T, te = "";
        return v.ENTITIES[h] ? v.ENTITIES[h] : v.ENTITIES[R] ? v.ENTITIES[R] : (h = R, h.charAt(0) === "#" && (h.charAt(1) === "x" ? (h = h.slice(2), T = parseInt(h, 16), te = T.toString(16)) : (h = h.slice(1), T = parseInt(h, 10), te = T.toString(10))), h = h.replace(/^0+/, ""), isNaN(T) || te.toLowerCase() !== h || T < 0 || T > 1114111 ? (k(v, "Invalid character entity"), "&" + v.entity + ";") : String.fromCodePoint(T));
      }
      function oe(v, h) {
        h === "<" ? (v.state = m.OPEN_WAKA, v.startTagPosition = v.position) : E(h) || (k(v, "Non-whitespace before first tag."), v.textNode = h, v.state = m.TEXT);
      }
      function Oe(v, h) {
        var R = "";
        return h < v.length && (R = v.charAt(h)), R;
      }
      function Ke(v) {
        var h = this;
        if (this.error)
          throw this.error;
        if (h.closed)
          return $(
            h,
            "Cannot write after close. Assign an onready handler."
          );
        if (v === null)
          return q(h);
        typeof v == "object" && (v = v.toString());
        for (var R = 0, T = ""; T = Oe(v, R++), h.c = T, !!T; )
          switch (h.trackPosition && (h.position++, T === `
` ? (h.line++, h.column = 0) : h.column++), h.state) {
            case m.BEGIN:
              if (h.state = m.BEGIN_WHITESPACE, T === "\uFEFF")
                continue;
              oe(h, T);
              continue;
            case m.BEGIN_WHITESPACE:
              oe(h, T);
              continue;
            case m.TEXT:
              if (h.sawRoot && !h.closedRoot) {
                for (var ue = R - 1; T && T !== "<" && T !== "&"; )
                  T = Oe(v, R++), T && h.trackPosition && (h.position++, T === `
` ? (h.line++, h.column = 0) : h.column++);
                h.textNode += v.substring(ue, R - 1);
              }
              T === "<" && !(h.sawRoot && h.closedRoot && !h.strict) ? (h.state = m.OPEN_WAKA, h.startTagPosition = h.position) : (!E(T) && (!h.sawRoot || h.closedRoot) && k(h, "Text data outside of root node."), T === "&" ? h.state = m.TEXT_ENTITY : h.textNode += T);
              continue;
            case m.SCRIPT:
              T === "<" ? h.state = m.SCRIPT_ENDING : h.script += T;
              continue;
            case m.SCRIPT_ENDING:
              T === "/" ? h.state = m.CLOSE_TAG : (h.script += "<" + T, h.state = m.SCRIPT);
              continue;
            case m.OPEN_WAKA:
              if (T === "!")
                h.state = m.SGML_DECL, h.sgmlDecl = "";
              else if (!E(T)) if (P(b, T))
                h.state = m.OPEN_TAG, h.tagName = T;
              else if (T === "/")
                h.state = m.CLOSE_TAG, h.tagName = "";
              else if (T === "?")
                h.state = m.PROC_INST, h.procInstName = h.procInstBody = "";
              else {
                if (k(h, "Unencoded <"), h.startTagPosition + 1 < h.position) {
                  var te = h.position - h.startTagPosition;
                  T = new Array(te).join(" ") + T;
                }
                h.textNode += "<" + T, h.state = m.TEXT;
              }
              continue;
            case m.SGML_DECL:
              if (h.sgmlDecl + T === "--") {
                h.state = m.COMMENT, h.comment = "", h.sgmlDecl = "";
                continue;
              }
              h.doctype && h.doctype !== !0 && h.sgmlDecl ? (h.state = m.DOCTYPE_DTD, h.doctype += "<!" + h.sgmlDecl + T, h.sgmlDecl = "") : (h.sgmlDecl + T).toUpperCase() === u ? (I(h, "onopencdata"), h.state = m.CDATA, h.sgmlDecl = "", h.cdata = "") : (h.sgmlDecl + T).toUpperCase() === d ? (h.state = m.DOCTYPE, (h.doctype || h.sawRoot) && k(
                h,
                "Inappropriately located doctype declaration"
              ), h.doctype = "", h.sgmlDecl = "") : T === ">" ? (I(h, "onsgmldeclaration", h.sgmlDecl), h.sgmlDecl = "", h.state = m.TEXT) : (A(T) && (h.state = m.SGML_DECL_QUOTED), h.sgmlDecl += T);
              continue;
            case m.SGML_DECL_QUOTED:
              T === h.q && (h.state = m.SGML_DECL, h.q = ""), h.sgmlDecl += T;
              continue;
            case m.DOCTYPE:
              T === ">" ? (h.state = m.TEXT, I(h, "ondoctype", h.doctype), h.doctype = !0) : (h.doctype += T, T === "[" ? h.state = m.DOCTYPE_DTD : A(T) && (h.state = m.DOCTYPE_QUOTED, h.q = T));
              continue;
            case m.DOCTYPE_QUOTED:
              h.doctype += T, T === h.q && (h.q = "", h.state = m.DOCTYPE);
              continue;
            case m.DOCTYPE_DTD:
              T === "]" ? (h.doctype += T, h.state = m.DOCTYPE) : T === "<" ? (h.state = m.OPEN_WAKA, h.startTagPosition = h.position) : A(T) ? (h.doctype += T, h.state = m.DOCTYPE_DTD_QUOTED, h.q = T) : h.doctype += T;
              continue;
            case m.DOCTYPE_DTD_QUOTED:
              h.doctype += T, T === h.q && (h.state = m.DOCTYPE_DTD, h.q = "");
              continue;
            case m.COMMENT:
              T === "-" ? h.state = m.COMMENT_ENDING : h.comment += T;
              continue;
            case m.COMMENT_ENDING:
              T === "-" ? (h.state = m.COMMENT_ENDED, h.comment = B(h.opt, h.comment), h.comment && I(h, "oncomment", h.comment), h.comment = "") : (h.comment += "-" + T, h.state = m.COMMENT);
              continue;
            case m.COMMENT_ENDED:
              T !== ">" ? (k(h, "Malformed comment"), h.comment += "--" + T, h.state = m.COMMENT) : h.doctype && h.doctype !== !0 ? h.state = m.DOCTYPE_DTD : h.state = m.TEXT;
              continue;
            case m.CDATA:
              for (var ue = R - 1; T && T !== "]"; )
                T = Oe(v, R++), T && h.trackPosition && (h.position++, T === `
` ? (h.line++, h.column = 0) : h.column++);
              h.cdata += v.substring(ue, R - 1), T === "]" && (h.state = m.CDATA_ENDING);
              continue;
            case m.CDATA_ENDING:
              T === "]" ? h.state = m.CDATA_ENDING_2 : (h.cdata += "]" + T, h.state = m.CDATA);
              continue;
            case m.CDATA_ENDING_2:
              T === ">" ? (h.cdata && I(h, "oncdata", h.cdata), I(h, "onclosecdata"), h.cdata = "", h.state = m.TEXT) : T === "]" ? h.cdata += "]" : (h.cdata += "]]" + T, h.state = m.CDATA);
              continue;
            case m.PROC_INST:
              T === "?" ? h.state = m.PROC_INST_ENDING : E(T) ? h.state = m.PROC_INST_BODY : h.procInstName += T;
              continue;
            case m.PROC_INST_BODY:
              if (!h.procInstBody && E(T))
                continue;
              T === "?" ? h.state = m.PROC_INST_ENDING : h.procInstBody += T;
              continue;
            case m.PROC_INST_ENDING:
              T === ">" ? (I(h, "onprocessinginstruction", {
                name: h.procInstName,
                body: h.procInstBody
              }), h.procInstName = h.procInstBody = "", h.state = m.TEXT) : (h.procInstBody += "?" + T, h.state = m.PROC_INST_BODY);
              continue;
            case m.OPEN_TAG:
              P(S, T) ? h.tagName += T : (Y(h), T === ">" ? U(h) : T === "/" ? h.state = m.OPEN_TAG_SLASH : (E(T) || k(h, "Invalid character in tag name"), h.state = m.ATTRIB));
              continue;
            case m.OPEN_TAG_SLASH:
              T === ">" ? (U(h, !0), Z(h)) : (k(
                h,
                "Forward-slash in opening tag not followed by >"
              ), h.state = m.ATTRIB);
              continue;
            case m.ATTRIB:
              if (E(T))
                continue;
              T === ">" ? U(h) : T === "/" ? h.state = m.OPEN_TAG_SLASH : P(b, T) ? (h.attribName = T, h.attribValue = "", h.state = m.ATTRIB_NAME) : k(h, "Invalid attribute name");
              continue;
            case m.ATTRIB_NAME:
              T === "=" ? h.state = m.ATTRIB_VALUE : T === ">" ? (k(h, "Attribute without value"), h.attribValue = h.attribName, V(h), U(h)) : E(T) ? h.state = m.ATTRIB_NAME_SAW_WHITE : P(S, T) ? h.attribName += T : k(h, "Invalid attribute name");
              continue;
            case m.ATTRIB_NAME_SAW_WHITE:
              if (T === "=")
                h.state = m.ATTRIB_VALUE;
              else {
                if (E(T))
                  continue;
                k(h, "Attribute without value"), h.tag.attributes[h.attribName] = "", h.attribValue = "", I(h, "onattribute", {
                  name: h.attribName,
                  value: ""
                }), h.attribName = "", T === ">" ? U(h) : P(b, T) ? (h.attribName = T, h.state = m.ATTRIB_NAME) : (k(h, "Invalid attribute name"), h.state = m.ATTRIB);
              }
              continue;
            case m.ATTRIB_VALUE:
              if (E(T))
                continue;
              A(T) ? (h.q = T, h.state = m.ATTRIB_VALUE_QUOTED) : (h.opt.unquotedAttributeValues || $(h, "Unquoted attribute value"), h.state = m.ATTRIB_VALUE_UNQUOTED, h.attribValue = T);
              continue;
            case m.ATTRIB_VALUE_QUOTED:
              if (T !== h.q) {
                T === "&" ? h.state = m.ATTRIB_VALUE_ENTITY_Q : h.attribValue += T;
                continue;
              }
              V(h), h.q = "", h.state = m.ATTRIB_VALUE_CLOSED;
              continue;
            case m.ATTRIB_VALUE_CLOSED:
              E(T) ? h.state = m.ATTRIB : T === ">" ? U(h) : T === "/" ? h.state = m.OPEN_TAG_SLASH : P(b, T) ? (k(h, "No whitespace between attributes"), h.attribName = T, h.attribValue = "", h.state = m.ATTRIB_NAME) : k(h, "Invalid attribute name");
              continue;
            case m.ATTRIB_VALUE_UNQUOTED:
              if (!L(T)) {
                T === "&" ? h.state = m.ATTRIB_VALUE_ENTITY_U : h.attribValue += T;
                continue;
              }
              V(h), T === ">" ? U(h) : h.state = m.ATTRIB;
              continue;
            case m.CLOSE_TAG:
              if (h.tagName)
                T === ">" ? Z(h) : P(S, T) ? h.tagName += T : h.script ? (h.script += "</" + h.tagName + T, h.tagName = "", h.state = m.SCRIPT) : (E(T) || k(h, "Invalid tagname in closing tag"), h.state = m.CLOSE_TAG_SAW_WHITE);
              else {
                if (E(T))
                  continue;
                O(b, T) ? h.script ? (h.script += "</" + T, h.state = m.SCRIPT) : k(h, "Invalid tagname in closing tag.") : h.tagName = T;
              }
              continue;
            case m.CLOSE_TAG_SAW_WHITE:
              if (E(T))
                continue;
              T === ">" ? Z(h) : k(h, "Invalid characters in closing tag");
              continue;
            case m.TEXT_ENTITY:
            case m.ATTRIB_VALUE_ENTITY_Q:
            case m.ATTRIB_VALUE_ENTITY_U:
              var he, Ie;
              switch (h.state) {
                case m.TEXT_ENTITY:
                  he = m.TEXT, Ie = "textNode";
                  break;
                case m.ATTRIB_VALUE_ENTITY_Q:
                  he = m.ATTRIB_VALUE_QUOTED, Ie = "attribValue";
                  break;
                case m.ATTRIB_VALUE_ENTITY_U:
                  he = m.ATTRIB_VALUE_UNQUOTED, Ie = "attribValue";
                  break;
              }
              if (T === ";") {
                var ke = Ne(h);
                h.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(ke) ? (h.entity = "", h.state = he, h.write(ke)) : (h[Ie] += ke, h.entity = "", h.state = he);
              } else P(h.entity.length ? y : w, T) ? h.entity += T : (k(h, "Invalid character in entity name"), h[Ie] += "&" + h.entity + T, h.entity = "", h.state = he);
              continue;
            default:
              throw new Error(h, "Unknown state: " + h.state);
          }
        return h.position >= h.bufferCheckPosition && o(h), h;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var v = String.fromCharCode, h = Math.floor, R = function() {
          var T = 16384, te = [], ue, he, Ie = -1, ke = arguments.length;
          if (!ke)
            return "";
          for (var Ut = ""; ++Ie < ke; ) {
            var be = Number(arguments[Ie]);
            if (!isFinite(be) || // `NaN`, `+Infinity`, or `-Infinity`
            be < 0 || // not a valid Unicode code point
            be > 1114111 || // not a valid Unicode code point
            h(be) !== be)
              throw RangeError("Invalid code point: " + be);
            be <= 65535 ? te.push(be) : (be -= 65536, ue = (be >> 10) + 55296, he = be % 1024 + 56320, te.push(ue, he)), (Ie + 1 === ke || te.length > T) && (Ut += v.apply(null, te), te.length = 0);
          }
          return Ut;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: R,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = R;
      }();
    })(t);
  }(uo)), uo;
}
var po = {}, Bs;
function up() {
  return Bs || (Bs = 1, (function() {
    po.stripBOM = function(t) {
      return t[0] === "\uFEFF" ? t.substring(1) : t;
    };
  }).call(z)), po;
}
var Et = {}, $s;
function Dc() {
  return $s || ($s = 1, (function() {
    var t;
    t = new RegExp(/(?!xmlns)^.*:/), Et.normalize = function(e) {
      return e.toLowerCase();
    }, Et.firstCharLowerCase = function(e) {
      return e.charAt(0).toLowerCase() + e.slice(1);
    }, Et.stripPrefix = function(e) {
      return e.replace(t, "");
    }, Et.parseNumbers = function(e) {
      return isNaN(e) || (e = e % 1 === 0 ? parseInt(e, 10) : parseFloat(e)), e;
    }, Et.parseBooleans = function(e) {
      return /^(?:true|false)$/i.test(e) && (e = e.toLowerCase() === "true"), e;
    };
  }).call(z)), Et;
}
var Vs;
function pp() {
  return Vs || (Vs = 1, function(t) {
    (function() {
      var e, n, r, o, i, s, a, c, p = function(d, g) {
        return function() {
          return d.apply(g, arguments);
        };
      }, l = function(d, g) {
        for (var f in g)
          u.call(g, f) && (d[f] = g[f]);
        function x() {
          this.constructor = d;
        }
        return x.prototype = g.prototype, d.prototype = new x(), d.__super__ = g.prototype, d;
      }, u = {}.hasOwnProperty;
      a = lp(), r = Xu, e = up(), s = Dc(), c = Wu.setImmediate, n = di().defaults, o = function(d) {
        return typeof d == "object" && d != null && Object.keys(d).length === 0;
      }, i = function(d, g, f) {
        var x, b, S;
        for (x = 0, b = d.length; x < b; x++)
          S = d[x], g = S(g, f);
        return g;
      }, t.Parser = function(d) {
        l(g, d);
        function g(f) {
          this.parseStringPromise = p(this.parseStringPromise, this), this.parseString = p(this.parseString, this), this.reset = p(this.reset, this), this.assignOrPush = p(this.assignOrPush, this), this.processAsync = p(this.processAsync, this);
          var x, b, S;
          if (!(this instanceof t.Parser))
            return new t.Parser(f);
          this.options = {}, b = n["0.2"];
          for (x in b)
            u.call(b, x) && (S = b[x], this.options[x] = S);
          for (x in f)
            u.call(f, x) && (S = f[x], this.options[x] = S);
          this.options.xmlns && (this.options.xmlnskey = this.options.attrkey + "ns"), this.options.normalizeTags && (this.options.tagNameProcessors || (this.options.tagNameProcessors = []), this.options.tagNameProcessors.unshift(s.normalize)), this.reset();
        }
        return g.prototype.processAsync = function() {
          var f, x;
          try {
            return this.remaining.length <= this.options.chunkSize ? (f = this.remaining, this.remaining = "", this.saxParser = this.saxParser.write(f), this.saxParser.close()) : (f = this.remaining.substr(0, this.options.chunkSize), this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length), this.saxParser = this.saxParser.write(f), c(this.processAsync));
          } catch (b) {
            if (x = b, !this.saxParser.errThrown)
              return this.saxParser.errThrown = !0, this.emit(x);
          }
        }, g.prototype.assignOrPush = function(f, x, b) {
          return x in f ? (f[x] instanceof Array || (f[x] = [f[x]]), f[x].push(b)) : this.options.explicitArray ? f[x] = [b] : f[x] = b;
        }, g.prototype.reset = function() {
          var f, x, b, S;
          return this.removeAllListeners(), this.saxParser = a.parser(this.options.strict, {
            trim: !1,
            normalize: !1,
            xmlns: this.options.xmlns
          }), this.saxParser.errThrown = !1, this.saxParser.onerror = /* @__PURE__ */ function(w) {
            return function(y) {
              if (w.saxParser.resume(), !w.saxParser.errThrown)
                return w.saxParser.errThrown = !0, w.emit("error", y);
            };
          }(this), this.saxParser.onend = /* @__PURE__ */ function(w) {
            return function() {
              if (!w.saxParser.ended)
                return w.saxParser.ended = !0, w.emit("end", w.resultObject);
            };
          }(this), this.saxParser.ended = !1, this.EXPLICIT_CHARKEY = this.options.explicitCharkey, this.resultObject = null, S = [], f = this.options.attrkey, x = this.options.charkey, this.saxParser.onopentag = /* @__PURE__ */ function(w) {
            return function(y) {
              var E, A, L, P, O;
              if (L = /* @__PURE__ */ Object.create(null), L[x] = "", !w.options.ignoreAttrs) {
                O = y.attributes;
                for (E in O)
                  u.call(O, E) && (!(f in L) && !w.options.mergeAttrs && (L[f] = /* @__PURE__ */ Object.create(null)), A = w.options.attrValueProcessors ? i(w.options.attrValueProcessors, y.attributes[E], E) : y.attributes[E], P = w.options.attrNameProcessors ? i(w.options.attrNameProcessors, E) : E, w.options.mergeAttrs ? w.assignOrPush(L, P, A) : L[f][P] = A);
              }
              return L["#name"] = w.options.tagNameProcessors ? i(w.options.tagNameProcessors, y.name) : y.name, w.options.xmlns && (L[w.options.xmlnskey] = {
                uri: y.uri,
                local: y.local
              }), S.push(L);
            };
          }(this), this.saxParser.onclosetag = /* @__PURE__ */ function(w) {
            return function() {
              var y, E, A, L, P, O, m, _, D, I;
              if (O = S.pop(), P = O["#name"], (!w.options.explicitChildren || !w.options.preserveChildrenOrder) && delete O["#name"], O.cdata === !0 && (y = O.cdata, delete O.cdata), D = S[S.length - 1], O[x].match(/^\s*$/) && !y ? (E = O[x], delete O[x]) : (w.options.trim && (O[x] = O[x].trim()), w.options.normalize && (O[x] = O[x].replace(/\s{2,}/g, " ").trim()), O[x] = w.options.valueProcessors ? i(w.options.valueProcessors, O[x], P) : O[x], Object.keys(O).length === 1 && x in O && !w.EXPLICIT_CHARKEY && (O = O[x])), o(O) && (typeof w.options.emptyTag == "function" ? O = w.options.emptyTag() : O = w.options.emptyTag !== "" ? w.options.emptyTag : E), w.options.validator != null && (I = "/" + function() {
                var j, B, $;
                for ($ = [], j = 0, B = S.length; j < B; j++)
                  L = S[j], $.push(L["#name"]);
                return $;
              }().concat(P).join("/"), function() {
                var j;
                try {
                  return O = w.options.validator(I, D && D[P], O);
                } catch (B) {
                  return j = B, w.emit("error", j);
                }
              }()), w.options.explicitChildren && !w.options.mergeAttrs && typeof O == "object") {
                if (!w.options.preserveChildrenOrder)
                  L = /* @__PURE__ */ Object.create(null), w.options.attrkey in O && (L[w.options.attrkey] = O[w.options.attrkey], delete O[w.options.attrkey]), !w.options.charsAsChildren && w.options.charkey in O && (L[w.options.charkey] = O[w.options.charkey], delete O[w.options.charkey]), Object.getOwnPropertyNames(O).length > 0 && (L[w.options.childkey] = O), O = L;
                else if (D) {
                  D[w.options.childkey] = D[w.options.childkey] || [], m = /* @__PURE__ */ Object.create(null);
                  for (A in O)
                    u.call(O, A) && (m[A] = O[A]);
                  D[w.options.childkey].push(m), delete O["#name"], Object.keys(O).length === 1 && x in O && !w.EXPLICIT_CHARKEY && (O = O[x]);
                }
              }
              return S.length > 0 ? w.assignOrPush(D, P, O) : (w.options.explicitRoot && (_ = O, O = /* @__PURE__ */ Object.create(null), O[P] = _), w.resultObject = O, w.saxParser.ended = !0, w.emit("end", w.resultObject));
            };
          }(this), b = /* @__PURE__ */ function(w) {
            return function(y) {
              var E, A;
              if (A = S[S.length - 1], A)
                return A[x] += y, w.options.explicitChildren && w.options.preserveChildrenOrder && w.options.charsAsChildren && (w.options.includeWhiteChars || y.replace(/\\n/g, "").trim() !== "") && (A[w.options.childkey] = A[w.options.childkey] || [], E = {
                  "#name": "__text__"
                }, E[x] = y, w.options.normalize && (E[x] = E[x].replace(/\s{2,}/g, " ").trim()), A[w.options.childkey].push(E)), A;
            };
          }(this), this.saxParser.ontext = b, this.saxParser.oncdata = /* @__PURE__ */ function(w) {
            return function(y) {
              var E;
              if (E = b(y), E)
                return E.cdata = !0;
            };
          }();
        }, g.prototype.parseString = function(f, x) {
          var b;
          x != null && typeof x == "function" && (this.on("end", function(S) {
            return this.reset(), x(null, S);
          }), this.on("error", function(S) {
            return this.reset(), x(S);
          }));
          try {
            return f = f.toString(), f.trim() === "" ? (this.emit("end", null), !0) : (f = e.stripBOM(f), this.options.async ? (this.remaining = f, c(this.processAsync), this.saxParser) : this.saxParser.write(f).close());
          } catch (S) {
            if (b = S, this.saxParser.errThrown || this.saxParser.ended) {
              if (this.saxParser.ended)
                throw b;
            } else return this.emit("error", b), this.saxParser.errThrown = !0;
          }
        }, g.prototype.parseStringPromise = function(f) {
          return new Promise(/* @__PURE__ */ function(x) {
            return function(b, S) {
              return x.parseString(f, function(w, y) {
                return w ? S(w) : b(y);
              });
            };
          }(this));
        }, g;
      }(r), t.parseString = function(d, g, f) {
        var x, b, S;
        return f != null ? (typeof f == "function" && (x = f), typeof g == "object" && (b = g)) : (typeof g == "function" && (x = g), b = {}), S = new t.Parser(b), S.parseString(d, x);
      }, t.parseStringPromise = function(d, g) {
        var f, x;
        return typeof g == "object" && (f = g), x = new t.Parser(f), x.parseStringPromise(d);
      };
    }).call(z);
  }(lo)), lo;
}
(function() {
  var t, e, n, r, o = function(s, a) {
    for (var c in a)
      i.call(a, c) && (s[c] = a[c]);
    function p() {
      this.constructor = s;
    }
    return p.prototype = a.prototype, s.prototype = new p(), s.__super__ = a.prototype, s;
  }, i = {}.hasOwnProperty;
  e = di(), t = cp(), n = pp(), r = Dc(), it.defaults = e.defaults, it.processors = r, it.ValidationError = function(s) {
    o(a, s);
    function a(c) {
      this.message = c;
    }
    return a;
  }(Error), it.Builder = t.Builder, it.Parser = n.Parser, it.parseString = n.parseString, it.parseStringPromise = n.parseStringPromise;
}).call(z);
var Lc = { exports: {} };
const fr = Lc.exports = {};
fr.feed = [
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
fr.item = [
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
var Cc = function(t) {
  return ["itunes:" + t, t];
};
fr.podcastFeed = [
  "author",
  "subtitle",
  "summary",
  "explicit"
].map(Cc);
fr.podcastItem = [
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
].map(Cc);
var dp = Lc.exports, Rc = { exports: {} }, Pc = {}, lt = {};
const fp = "Á", mp = "á", hp = "Ă", gp = "ă", yp = "∾", vp = "∿", bp = "∾̳", xp = "Â", wp = "â", Ep = "´", Tp = "А", Sp = "а", Np = "Æ", Op = "æ", Ap = "⁡", _p = "𝔄", Dp = "𝔞", Lp = "À", Cp = "à", Rp = "ℵ", Pp = "ℵ", Ip = "Α", kp = "α", Fp = "Ā", qp = "ā", Mp = "⨿", jp = "&", Up = "&", Bp = "⩕", $p = "⩓", Vp = "∧", zp = "⩜", Hp = "⩘", Xp = "⩚", Gp = "∠", Wp = "⦤", Yp = "∠", Kp = "⦨", Jp = "⦩", Qp = "⦪", Zp = "⦫", ed = "⦬", td = "⦭", nd = "⦮", rd = "⦯", od = "∡", id = "∟", sd = "⊾", ad = "⦝", cd = "∢", ld = "Å", ud = "⍼", pd = "Ą", dd = "ą", fd = "𝔸", md = "𝕒", hd = "⩯", gd = "≈", yd = "⩰", vd = "≊", bd = "≋", xd = "'", wd = "⁡", Ed = "≈", Td = "≊", Sd = "Å", Nd = "å", Od = "𝒜", Ad = "𝒶", _d = "≔", Dd = "*", Ld = "≈", Cd = "≍", Rd = "Ã", Pd = "ã", Id = "Ä", kd = "ä", Fd = "∳", qd = "⨑", Md = "≌", jd = "϶", Ud = "‵", Bd = "∽", $d = "⋍", Vd = "∖", zd = "⫧", Hd = "⊽", Xd = "⌅", Gd = "⌆", Wd = "⌅", Yd = "⎵", Kd = "⎶", Jd = "≌", Qd = "Б", Zd = "б", ef = "„", tf = "∵", nf = "∵", rf = "∵", of = "⦰", sf = "϶", af = "ℬ", cf = "ℬ", lf = "Β", uf = "β", pf = "ℶ", df = "≬", ff = "𝔅", mf = "𝔟", hf = "⋂", gf = "◯", yf = "⋃", vf = "⨀", bf = "⨁", xf = "⨂", wf = "⨆", Ef = "★", Tf = "▽", Sf = "△", Nf = "⨄", Of = "⋁", Af = "⋀", _f = "⤍", Df = "⧫", Lf = "▪", Cf = "▴", Rf = "▾", Pf = "◂", If = "▸", kf = "␣", Ff = "▒", qf = "░", Mf = "▓", jf = "█", Uf = "=⃥", Bf = "≡⃥", $f = "⫭", Vf = "⌐", zf = "𝔹", Hf = "𝕓", Xf = "⊥", Gf = "⊥", Wf = "⋈", Yf = "⧉", Kf = "┐", Jf = "╕", Qf = "╖", Zf = "╗", em = "┌", tm = "╒", nm = "╓", rm = "╔", om = "─", im = "═", sm = "┬", am = "╤", cm = "╥", lm = "╦", um = "┴", pm = "╧", dm = "╨", fm = "╩", mm = "⊟", hm = "⊞", gm = "⊠", ym = "┘", vm = "╛", bm = "╜", xm = "╝", wm = "└", Em = "╘", Tm = "╙", Sm = "╚", Nm = "│", Om = "║", Am = "┼", _m = "╪", Dm = "╫", Lm = "╬", Cm = "┤", Rm = "╡", Pm = "╢", Im = "╣", km = "├", Fm = "╞", qm = "╟", Mm = "╠", jm = "‵", Um = "˘", Bm = "˘", $m = "¦", Vm = "𝒷", zm = "ℬ", Hm = "⁏", Xm = "∽", Gm = "⋍", Wm = "⧅", Ym = "\\", Km = "⟈", Jm = "•", Qm = "•", Zm = "≎", eh = "⪮", th = "≏", nh = "≎", rh = "≏", oh = "Ć", ih = "ć", sh = "⩄", ah = "⩉", ch = "⩋", lh = "∩", uh = "⋒", ph = "⩇", dh = "⩀", fh = "ⅅ", mh = "∩︀", hh = "⁁", gh = "ˇ", yh = "ℭ", vh = "⩍", bh = "Č", xh = "č", wh = "Ç", Eh = "ç", Th = "Ĉ", Sh = "ĉ", Nh = "∰", Oh = "⩌", Ah = "⩐", _h = "Ċ", Dh = "ċ", Lh = "¸", Ch = "¸", Rh = "⦲", Ph = "¢", Ih = "·", kh = "·", Fh = "𝔠", qh = "ℭ", Mh = "Ч", jh = "ч", Uh = "✓", Bh = "✓", $h = "Χ", Vh = "χ", zh = "ˆ", Hh = "≗", Xh = "↺", Gh = "↻", Wh = "⊛", Yh = "⊚", Kh = "⊝", Jh = "⊙", Qh = "®", Zh = "Ⓢ", eg = "⊖", tg = "⊕", ng = "⊗", rg = "○", og = "⧃", ig = "≗", sg = "⨐", ag = "⫯", cg = "⧂", lg = "∲", ug = "”", pg = "’", dg = "♣", fg = "♣", mg = ":", hg = "∷", gg = "⩴", yg = "≔", vg = "≔", bg = ",", xg = "@", wg = "∁", Eg = "∘", Tg = "∁", Sg = "ℂ", Ng = "≅", Og = "⩭", Ag = "≡", _g = "∮", Dg = "∯", Lg = "∮", Cg = "𝕔", Rg = "ℂ", Pg = "∐", Ig = "∐", kg = "©", Fg = "©", qg = "℗", Mg = "∳", jg = "↵", Ug = "✗", Bg = "⨯", $g = "𝒞", Vg = "𝒸", zg = "⫏", Hg = "⫑", Xg = "⫐", Gg = "⫒", Wg = "⋯", Yg = "⤸", Kg = "⤵", Jg = "⋞", Qg = "⋟", Zg = "↶", ey = "⤽", ty = "⩈", ny = "⩆", ry = "≍", oy = "∪", iy = "⋓", sy = "⩊", ay = "⊍", cy = "⩅", ly = "∪︀", uy = "↷", py = "⤼", dy = "⋞", fy = "⋟", my = "⋎", hy = "⋏", gy = "¤", yy = "↶", vy = "↷", by = "⋎", xy = "⋏", wy = "∲", Ey = "∱", Ty = "⌭", Sy = "†", Ny = "‡", Oy = "ℸ", Ay = "↓", _y = "↡", Dy = "⇓", Ly = "‐", Cy = "⫤", Ry = "⊣", Py = "⤏", Iy = "˝", ky = "Ď", Fy = "ď", qy = "Д", My = "д", jy = "‡", Uy = "⇊", By = "ⅅ", $y = "ⅆ", Vy = "⤑", zy = "⩷", Hy = "°", Xy = "∇", Gy = "Δ", Wy = "δ", Yy = "⦱", Ky = "⥿", Jy = "𝔇", Qy = "𝔡", Zy = "⥥", ev = "⇃", tv = "⇂", nv = "´", rv = "˙", ov = "˝", iv = "`", sv = "˜", av = "⋄", cv = "⋄", lv = "⋄", uv = "♦", pv = "♦", dv = "¨", fv = "ⅆ", mv = "ϝ", hv = "⋲", gv = "÷", yv = "÷", vv = "⋇", bv = "⋇", xv = "Ђ", wv = "ђ", Ev = "⌞", Tv = "⌍", Sv = "$", Nv = "𝔻", Ov = "𝕕", Av = "¨", _v = "˙", Dv = "⃜", Lv = "≐", Cv = "≑", Rv = "≐", Pv = "∸", Iv = "∔", kv = "⊡", Fv = "⌆", qv = "∯", Mv = "¨", jv = "⇓", Uv = "⇐", Bv = "⇔", $v = "⫤", Vv = "⟸", zv = "⟺", Hv = "⟹", Xv = "⇒", Gv = "⊨", Wv = "⇑", Yv = "⇕", Kv = "∥", Jv = "⤓", Qv = "↓", Zv = "↓", eb = "⇓", tb = "⇵", nb = "̑", rb = "⇊", ob = "⇃", ib = "⇂", sb = "⥐", ab = "⥞", cb = "⥖", lb = "↽", ub = "⥟", pb = "⥗", db = "⇁", fb = "↧", mb = "⊤", hb = "⤐", gb = "⌟", yb = "⌌", vb = "𝒟", bb = "𝒹", xb = "Ѕ", wb = "ѕ", Eb = "⧶", Tb = "Đ", Sb = "đ", Nb = "⋱", Ob = "▿", Ab = "▾", _b = "⇵", Db = "⥯", Lb = "⦦", Cb = "Џ", Rb = "џ", Pb = "⟿", Ib = "É", kb = "é", Fb = "⩮", qb = "Ě", Mb = "ě", jb = "Ê", Ub = "ê", Bb = "≖", $b = "≕", Vb = "Э", zb = "э", Hb = "⩷", Xb = "Ė", Gb = "ė", Wb = "≑", Yb = "ⅇ", Kb = "≒", Jb = "𝔈", Qb = "𝔢", Zb = "⪚", ex = "È", tx = "è", nx = "⪖", rx = "⪘", ox = "⪙", ix = "∈", sx = "⏧", ax = "ℓ", cx = "⪕", lx = "⪗", ux = "Ē", px = "ē", dx = "∅", fx = "∅", mx = "◻", hx = "∅", gx = "▫", yx = " ", vx = " ", bx = " ", xx = "Ŋ", wx = "ŋ", Ex = " ", Tx = "Ę", Sx = "ę", Nx = "𝔼", Ox = "𝕖", Ax = "⋕", _x = "⧣", Dx = "⩱", Lx = "ε", Cx = "Ε", Rx = "ε", Px = "ϵ", Ix = "≖", kx = "≕", Fx = "≂", qx = "⪖", Mx = "⪕", jx = "⩵", Ux = "=", Bx = "≂", $x = "≟", Vx = "⇌", zx = "≡", Hx = "⩸", Xx = "⧥", Gx = "⥱", Wx = "≓", Yx = "ℯ", Kx = "ℰ", Jx = "≐", Qx = "⩳", Zx = "≂", ew = "Η", tw = "η", nw = "Ð", rw = "ð", ow = "Ë", iw = "ë", sw = "€", aw = "!", cw = "∃", lw = "∃", uw = "ℰ", pw = "ⅇ", dw = "ⅇ", fw = "≒", mw = "Ф", hw = "ф", gw = "♀", yw = "ﬃ", vw = "ﬀ", bw = "ﬄ", xw = "𝔉", ww = "𝔣", Ew = "ﬁ", Tw = "◼", Sw = "▪", Nw = "fj", Ow = "♭", Aw = "ﬂ", _w = "▱", Dw = "ƒ", Lw = "𝔽", Cw = "𝕗", Rw = "∀", Pw = "∀", Iw = "⋔", kw = "⫙", Fw = "ℱ", qw = "⨍", Mw = "½", jw = "⅓", Uw = "¼", Bw = "⅕", $w = "⅙", Vw = "⅛", zw = "⅔", Hw = "⅖", Xw = "¾", Gw = "⅗", Ww = "⅜", Yw = "⅘", Kw = "⅚", Jw = "⅝", Qw = "⅞", Zw = "⁄", eE = "⌢", tE = "𝒻", nE = "ℱ", rE = "ǵ", oE = "Γ", iE = "γ", sE = "Ϝ", aE = "ϝ", cE = "⪆", lE = "Ğ", uE = "ğ", pE = "Ģ", dE = "Ĝ", fE = "ĝ", mE = "Г", hE = "г", gE = "Ġ", yE = "ġ", vE = "≥", bE = "≧", xE = "⪌", wE = "⋛", EE = "≥", TE = "≧", SE = "⩾", NE = "⪩", OE = "⩾", AE = "⪀", _E = "⪂", DE = "⪄", LE = "⋛︀", CE = "⪔", RE = "𝔊", PE = "𝔤", IE = "≫", kE = "⋙", FE = "⋙", qE = "ℷ", ME = "Ѓ", jE = "ѓ", UE = "⪥", BE = "≷", $E = "⪒", VE = "⪤", zE = "⪊", HE = "⪊", XE = "⪈", GE = "≩", WE = "⪈", YE = "≩", KE = "⋧", JE = "𝔾", QE = "𝕘", ZE = "`", eT = "≥", tT = "⋛", nT = "≧", rT = "⪢", oT = "≷", iT = "⩾", sT = "≳", aT = "𝒢", cT = "ℊ", lT = "≳", uT = "⪎", pT = "⪐", dT = "⪧", fT = "⩺", mT = ">", hT = ">", gT = "≫", yT = "⋗", vT = "⦕", bT = "⩼", xT = "⪆", wT = "⥸", ET = "⋗", TT = "⋛", ST = "⪌", NT = "≷", OT = "≳", AT = "≩︀", _T = "≩︀", DT = "ˇ", LT = " ", CT = "½", RT = "ℋ", PT = "Ъ", IT = "ъ", kT = "⥈", FT = "↔", qT = "⇔", MT = "↭", jT = "^", UT = "ℏ", BT = "Ĥ", $T = "ĥ", VT = "♥", zT = "♥", HT = "…", XT = "⊹", GT = "𝔥", WT = "ℌ", YT = "ℋ", KT = "⤥", JT = "⤦", QT = "⇿", ZT = "∻", eS = "↩", tS = "↪", nS = "𝕙", rS = "ℍ", oS = "―", iS = "─", sS = "𝒽", aS = "ℋ", cS = "ℏ", lS = "Ħ", uS = "ħ", pS = "≎", dS = "≏", fS = "⁃", mS = "‐", hS = "Í", gS = "í", yS = "⁣", vS = "Î", bS = "î", xS = "И", wS = "и", ES = "İ", TS = "Е", SS = "е", NS = "¡", OS = "⇔", AS = "𝔦", _S = "ℑ", DS = "Ì", LS = "ì", CS = "ⅈ", RS = "⨌", PS = "∭", IS = "⧜", kS = "℩", FS = "Ĳ", qS = "ĳ", MS = "Ī", jS = "ī", US = "ℑ", BS = "ⅈ", $S = "ℐ", VS = "ℑ", zS = "ı", HS = "ℑ", XS = "⊷", GS = "Ƶ", WS = "⇒", YS = "℅", KS = "∞", JS = "⧝", QS = "ı", ZS = "⊺", e0 = "∫", t0 = "∬", n0 = "ℤ", r0 = "∫", o0 = "⊺", i0 = "⋂", s0 = "⨗", a0 = "⨼", c0 = "⁣", l0 = "⁢", u0 = "Ё", p0 = "ё", d0 = "Į", f0 = "į", m0 = "𝕀", h0 = "𝕚", g0 = "Ι", y0 = "ι", v0 = "⨼", b0 = "¿", x0 = "𝒾", w0 = "ℐ", E0 = "∈", T0 = "⋵", S0 = "⋹", N0 = "⋴", O0 = "⋳", A0 = "∈", _0 = "⁢", D0 = "Ĩ", L0 = "ĩ", C0 = "І", R0 = "і", P0 = "Ï", I0 = "ï", k0 = "Ĵ", F0 = "ĵ", q0 = "Й", M0 = "й", j0 = "𝔍", U0 = "𝔧", B0 = "ȷ", $0 = "𝕁", V0 = "𝕛", z0 = "𝒥", H0 = "𝒿", X0 = "Ј", G0 = "ј", W0 = "Є", Y0 = "є", K0 = "Κ", J0 = "κ", Q0 = "ϰ", Z0 = "Ķ", eN = "ķ", tN = "К", nN = "к", rN = "𝔎", oN = "𝔨", iN = "ĸ", sN = "Х", aN = "х", cN = "Ќ", lN = "ќ", uN = "𝕂", pN = "𝕜", dN = "𝒦", fN = "𝓀", mN = "⇚", hN = "Ĺ", gN = "ĺ", yN = "⦴", vN = "ℒ", bN = "Λ", xN = "λ", wN = "⟨", EN = "⟪", TN = "⦑", SN = "⟨", NN = "⪅", ON = "ℒ", AN = "«", _N = "⇤", DN = "⤟", LN = "←", CN = "↞", RN = "⇐", PN = "⤝", IN = "↩", kN = "↫", FN = "⤹", qN = "⥳", MN = "↢", jN = "⤙", UN = "⤛", BN = "⪫", $N = "⪭", VN = "⪭︀", zN = "⤌", HN = "⤎", XN = "❲", GN = "{", WN = "[", YN = "⦋", KN = "⦏", JN = "⦍", QN = "Ľ", ZN = "ľ", eO = "Ļ", tO = "ļ", nO = "⌈", rO = "{", oO = "Л", iO = "л", sO = "⤶", aO = "“", cO = "„", lO = "⥧", uO = "⥋", pO = "↲", dO = "≤", fO = "≦", mO = "⟨", hO = "⇤", gO = "←", yO = "←", vO = "⇐", bO = "⇆", xO = "↢", wO = "⌈", EO = "⟦", TO = "⥡", SO = "⥙", NO = "⇃", OO = "⌊", AO = "↽", _O = "↼", DO = "⇇", LO = "↔", CO = "↔", RO = "⇔", PO = "⇆", IO = "⇋", kO = "↭", FO = "⥎", qO = "↤", MO = "⊣", jO = "⥚", UO = "⋋", BO = "⧏", $O = "⊲", VO = "⊴", zO = "⥑", HO = "⥠", XO = "⥘", GO = "↿", WO = "⥒", YO = "↼", KO = "⪋", JO = "⋚", QO = "≤", ZO = "≦", eA = "⩽", tA = "⪨", nA = "⩽", rA = "⩿", oA = "⪁", iA = "⪃", sA = "⋚︀", aA = "⪓", cA = "⪅", lA = "⋖", uA = "⋚", pA = "⪋", dA = "⋚", fA = "≦", mA = "≶", hA = "≶", gA = "⪡", yA = "≲", vA = "⩽", bA = "≲", xA = "⥼", wA = "⌊", EA = "𝔏", TA = "𝔩", SA = "≶", NA = "⪑", OA = "⥢", AA = "↽", _A = "↼", DA = "⥪", LA = "▄", CA = "Љ", RA = "љ", PA = "⇇", IA = "≪", kA = "⋘", FA = "⌞", qA = "⇚", MA = "⥫", jA = "◺", UA = "Ŀ", BA = "ŀ", $A = "⎰", VA = "⎰", zA = "⪉", HA = "⪉", XA = "⪇", GA = "≨", WA = "⪇", YA = "≨", KA = "⋦", JA = "⟬", QA = "⇽", ZA = "⟦", e_ = "⟵", t_ = "⟵", n_ = "⟸", r_ = "⟷", o_ = "⟷", i_ = "⟺", s_ = "⟼", a_ = "⟶", c_ = "⟶", l_ = "⟹", u_ = "↫", p_ = "↬", d_ = "⦅", f_ = "𝕃", m_ = "𝕝", h_ = "⨭", g_ = "⨴", y_ = "∗", v_ = "_", b_ = "↙", x_ = "↘", w_ = "◊", E_ = "◊", T_ = "⧫", S_ = "(", N_ = "⦓", O_ = "⇆", A_ = "⌟", __ = "⇋", D_ = "⥭", L_ = "‎", C_ = "⊿", R_ = "‹", P_ = "𝓁", I_ = "ℒ", k_ = "↰", F_ = "↰", q_ = "≲", M_ = "⪍", j_ = "⪏", U_ = "[", B_ = "‘", $_ = "‚", V_ = "Ł", z_ = "ł", H_ = "⪦", X_ = "⩹", G_ = "<", W_ = "<", Y_ = "≪", K_ = "⋖", J_ = "⋋", Q_ = "⋉", Z_ = "⥶", eD = "⩻", tD = "◃", nD = "⊴", rD = "◂", oD = "⦖", iD = "⥊", sD = "⥦", aD = "≨︀", cD = "≨︀", lD = "¯", uD = "♂", pD = "✠", dD = "✠", fD = "↦", mD = "↦", hD = "↧", gD = "↤", yD = "↥", vD = "▮", bD = "⨩", xD = "М", wD = "м", ED = "—", TD = "∺", SD = "∡", ND = " ", OD = "ℳ", AD = "𝔐", _D = "𝔪", DD = "℧", LD = "µ", CD = "*", RD = "⫰", PD = "∣", ID = "·", kD = "⊟", FD = "−", qD = "∸", MD = "⨪", jD = "∓", UD = "⫛", BD = "…", $D = "∓", VD = "⊧", zD = "𝕄", HD = "𝕞", XD = "∓", GD = "𝓂", WD = "ℳ", YD = "∾", KD = "Μ", JD = "μ", QD = "⊸", ZD = "⊸", eL = "∇", tL = "Ń", nL = "ń", rL = "∠⃒", oL = "≉", iL = "⩰̸", sL = "≋̸", aL = "ŉ", cL = "≉", lL = "♮", uL = "ℕ", pL = "♮", dL = " ", fL = "≎̸", mL = "≏̸", hL = "⩃", gL = "Ň", yL = "ň", vL = "Ņ", bL = "ņ", xL = "≇", wL = "⩭̸", EL = "⩂", TL = "Н", SL = "н", NL = "–", OL = "⤤", AL = "↗", _L = "⇗", DL = "↗", LL = "≠", CL = "≐̸", RL = "​", PL = "​", IL = "​", kL = "​", FL = "≢", qL = "⤨", ML = "≂̸", jL = "≫", UL = "≪", BL = `
`, $L = "∄", VL = "∄", zL = "𝔑", HL = "𝔫", XL = "≧̸", GL = "≱", WL = "≱", YL = "≧̸", KL = "⩾̸", JL = "⩾̸", QL = "⋙̸", ZL = "≵", eC = "≫⃒", tC = "≯", nC = "≯", rC = "≫̸", oC = "↮", iC = "⇎", sC = "⫲", aC = "∋", cC = "⋼", lC = "⋺", uC = "∋", pC = "Њ", dC = "њ", fC = "↚", mC = "⇍", hC = "‥", gC = "≦̸", yC = "≰", vC = "↚", bC = "⇍", xC = "↮", wC = "⇎", EC = "≰", TC = "≦̸", SC = "⩽̸", NC = "⩽̸", OC = "≮", AC = "⋘̸", _C = "≴", DC = "≪⃒", LC = "≮", CC = "⋪", RC = "⋬", PC = "≪̸", IC = "∤", kC = "⁠", FC = " ", qC = "𝕟", MC = "ℕ", jC = "⫬", UC = "¬", BC = "≢", $C = "≭", VC = "∦", zC = "∉", HC = "≠", XC = "≂̸", GC = "∄", WC = "≯", YC = "≱", KC = "≧̸", JC = "≫̸", QC = "≹", ZC = "⩾̸", e1 = "≵", t1 = "≎̸", n1 = "≏̸", r1 = "∉", o1 = "⋵̸", i1 = "⋹̸", s1 = "∉", a1 = "⋷", c1 = "⋶", l1 = "⧏̸", u1 = "⋪", p1 = "⋬", d1 = "≮", f1 = "≰", m1 = "≸", h1 = "≪̸", g1 = "⩽̸", y1 = "≴", v1 = "⪢̸", b1 = "⪡̸", x1 = "∌", w1 = "∌", E1 = "⋾", T1 = "⋽", S1 = "⊀", N1 = "⪯̸", O1 = "⋠", A1 = "∌", _1 = "⧐̸", D1 = "⋫", L1 = "⋭", C1 = "⊏̸", R1 = "⋢", P1 = "⊐̸", I1 = "⋣", k1 = "⊂⃒", F1 = "⊈", q1 = "⊁", M1 = "⪰̸", j1 = "⋡", U1 = "≿̸", B1 = "⊃⃒", $1 = "⊉", V1 = "≁", z1 = "≄", H1 = "≇", X1 = "≉", G1 = "∤", W1 = "∦", Y1 = "∦", K1 = "⫽⃥", J1 = "∂̸", Q1 = "⨔", Z1 = "⊀", eR = "⋠", tR = "⊀", nR = "⪯̸", rR = "⪯̸", oR = "⤳̸", iR = "↛", sR = "⇏", aR = "↝̸", cR = "↛", lR = "⇏", uR = "⋫", pR = "⋭", dR = "⊁", fR = "⋡", mR = "⪰̸", hR = "𝒩", gR = "𝓃", yR = "∤", vR = "∦", bR = "≁", xR = "≄", wR = "≄", ER = "∤", TR = "∦", SR = "⋢", NR = "⋣", OR = "⊄", AR = "⫅̸", _R = "⊈", DR = "⊂⃒", LR = "⊈", CR = "⫅̸", RR = "⊁", PR = "⪰̸", IR = "⊅", kR = "⫆̸", FR = "⊉", qR = "⊃⃒", MR = "⊉", jR = "⫆̸", UR = "≹", BR = "Ñ", $R = "ñ", VR = "≸", zR = "⋪", HR = "⋬", XR = "⋫", GR = "⋭", WR = "Ν", YR = "ν", KR = "#", JR = "№", QR = " ", ZR = "≍⃒", eP = "⊬", tP = "⊭", nP = "⊮", rP = "⊯", oP = "≥⃒", iP = ">⃒", sP = "⤄", aP = "⧞", cP = "⤂", lP = "≤⃒", uP = "<⃒", pP = "⊴⃒", dP = "⤃", fP = "⊵⃒", mP = "∼⃒", hP = "⤣", gP = "↖", yP = "⇖", vP = "↖", bP = "⤧", xP = "Ó", wP = "ó", EP = "⊛", TP = "Ô", SP = "ô", NP = "⊚", OP = "О", AP = "о", _P = "⊝", DP = "Ő", LP = "ő", CP = "⨸", RP = "⊙", PP = "⦼", IP = "Œ", kP = "œ", FP = "⦿", qP = "𝔒", MP = "𝔬", jP = "˛", UP = "Ò", BP = "ò", $P = "⧁", VP = "⦵", zP = "Ω", HP = "∮", XP = "↺", GP = "⦾", WP = "⦻", YP = "‾", KP = "⧀", JP = "Ō", QP = "ō", ZP = "Ω", eI = "ω", tI = "Ο", nI = "ο", rI = "⦶", oI = "⊖", iI = "𝕆", sI = "𝕠", aI = "⦷", cI = "“", lI = "‘", uI = "⦹", pI = "⊕", dI = "↻", fI = "⩔", mI = "∨", hI = "⩝", gI = "ℴ", yI = "ℴ", vI = "ª", bI = "º", xI = "⊶", wI = "⩖", EI = "⩗", TI = "⩛", SI = "Ⓢ", NI = "𝒪", OI = "ℴ", AI = "Ø", _I = "ø", DI = "⊘", LI = "Õ", CI = "õ", RI = "⨶", PI = "⨷", II = "⊗", kI = "Ö", FI = "ö", qI = "⌽", MI = "‾", jI = "⏞", UI = "⎴", BI = "⏜", $I = "¶", VI = "∥", zI = "∥", HI = "⫳", XI = "⫽", GI = "∂", WI = "∂", YI = "П", KI = "п", JI = "%", QI = ".", ZI = "‰", ek = "⊥", tk = "‱", nk = "𝔓", rk = "𝔭", ok = "Φ", ik = "φ", sk = "ϕ", ak = "ℳ", ck = "☎", lk = "Π", uk = "π", pk = "⋔", dk = "ϖ", fk = "ℏ", mk = "ℎ", hk = "ℏ", gk = "⨣", yk = "⊞", vk = "⨢", bk = "+", xk = "∔", wk = "⨥", Ek = "⩲", Tk = "±", Sk = "±", Nk = "⨦", Ok = "⨧", Ak = "±", _k = "ℌ", Dk = "⨕", Lk = "𝕡", Ck = "ℙ", Rk = "£", Pk = "⪷", Ik = "⪻", kk = "≺", Fk = "≼", qk = "⪷", Mk = "≺", jk = "≼", Uk = "≺", Bk = "⪯", $k = "≼", Vk = "≾", zk = "⪯", Hk = "⪹", Xk = "⪵", Gk = "⋨", Wk = "⪯", Yk = "⪳", Kk = "≾", Jk = "′", Qk = "″", Zk = "ℙ", eF = "⪹", tF = "⪵", nF = "⋨", rF = "∏", oF = "∏", iF = "⌮", sF = "⌒", aF = "⌓", cF = "∝", lF = "∝", uF = "∷", pF = "∝", dF = "≾", fF = "⊰", mF = "𝒫", hF = "𝓅", gF = "Ψ", yF = "ψ", vF = " ", bF = "𝔔", xF = "𝔮", wF = "⨌", EF = "𝕢", TF = "ℚ", SF = "⁗", NF = "𝒬", OF = "𝓆", AF = "ℍ", _F = "⨖", DF = "?", LF = "≟", CF = '"', RF = '"', PF = "⇛", IF = "∽̱", kF = "Ŕ", FF = "ŕ", qF = "√", MF = "⦳", jF = "⟩", UF = "⟫", BF = "⦒", $F = "⦥", VF = "⟩", zF = "»", HF = "⥵", XF = "⇥", GF = "⤠", WF = "⤳", YF = "→", KF = "↠", JF = "⇒", QF = "⤞", ZF = "↪", eq = "↬", tq = "⥅", nq = "⥴", rq = "⤖", oq = "↣", iq = "↝", sq = "⤚", aq = "⤜", cq = "∶", lq = "ℚ", uq = "⤍", pq = "⤏", dq = "⤐", fq = "❳", mq = "}", hq = "]", gq = "⦌", yq = "⦎", vq = "⦐", bq = "Ř", xq = "ř", wq = "Ŗ", Eq = "ŗ", Tq = "⌉", Sq = "}", Nq = "Р", Oq = "р", Aq = "⤷", _q = "⥩", Dq = "”", Lq = "”", Cq = "↳", Rq = "ℜ", Pq = "ℛ", Iq = "ℜ", kq = "ℝ", Fq = "ℜ", qq = "▭", Mq = "®", jq = "®", Uq = "∋", Bq = "⇋", $q = "⥯", Vq = "⥽", zq = "⌋", Hq = "𝔯", Xq = "ℜ", Gq = "⥤", Wq = "⇁", Yq = "⇀", Kq = "⥬", Jq = "Ρ", Qq = "ρ", Zq = "ϱ", eM = "⟩", tM = "⇥", nM = "→", rM = "→", oM = "⇒", iM = "⇄", sM = "↣", aM = "⌉", cM = "⟧", lM = "⥝", uM = "⥕", pM = "⇂", dM = "⌋", fM = "⇁", mM = "⇀", hM = "⇄", gM = "⇌", yM = "⇉", vM = "↝", bM = "↦", xM = "⊢", wM = "⥛", EM = "⋌", TM = "⧐", SM = "⊳", NM = "⊵", OM = "⥏", AM = "⥜", _M = "⥔", DM = "↾", LM = "⥓", CM = "⇀", RM = "˚", PM = "≓", IM = "⇄", kM = "⇌", FM = "‏", qM = "⎱", MM = "⎱", jM = "⫮", UM = "⟭", BM = "⇾", $M = "⟧", VM = "⦆", zM = "𝕣", HM = "ℝ", XM = "⨮", GM = "⨵", WM = "⥰", YM = ")", KM = "⦔", JM = "⨒", QM = "⇉", ZM = "⇛", ej = "›", tj = "𝓇", nj = "ℛ", rj = "↱", oj = "↱", ij = "]", sj = "’", aj = "’", cj = "⋌", lj = "⋊", uj = "▹", pj = "⊵", dj = "▸", fj = "⧎", mj = "⧴", hj = "⥨", gj = "℞", yj = "Ś", vj = "ś", bj = "‚", xj = "⪸", wj = "Š", Ej = "š", Tj = "⪼", Sj = "≻", Nj = "≽", Oj = "⪰", Aj = "⪴", _j = "Ş", Dj = "ş", Lj = "Ŝ", Cj = "ŝ", Rj = "⪺", Pj = "⪶", Ij = "⋩", kj = "⨓", Fj = "≿", qj = "С", Mj = "с", jj = "⊡", Uj = "⋅", Bj = "⩦", $j = "⤥", Vj = "↘", zj = "⇘", Hj = "↘", Xj = "§", Gj = ";", Wj = "⤩", Yj = "∖", Kj = "∖", Jj = "✶", Qj = "𝔖", Zj = "𝔰", e2 = "⌢", t2 = "♯", n2 = "Щ", r2 = "щ", o2 = "Ш", i2 = "ш", s2 = "↓", a2 = "←", c2 = "∣", l2 = "∥", u2 = "→", p2 = "↑", d2 = "­", f2 = "Σ", m2 = "σ", h2 = "ς", g2 = "ς", y2 = "∼", v2 = "⩪", b2 = "≃", x2 = "≃", w2 = "⪞", E2 = "⪠", T2 = "⪝", S2 = "⪟", N2 = "≆", O2 = "⨤", A2 = "⥲", _2 = "←", D2 = "∘", L2 = "∖", C2 = "⨳", R2 = "⧤", P2 = "∣", I2 = "⌣", k2 = "⪪", F2 = "⪬", q2 = "⪬︀", M2 = "Ь", j2 = "ь", U2 = "⌿", B2 = "⧄", $2 = "/", V2 = "𝕊", z2 = "𝕤", H2 = "♠", X2 = "♠", G2 = "∥", W2 = "⊓", Y2 = "⊓︀", K2 = "⊔", J2 = "⊔︀", Q2 = "√", Z2 = "⊏", eU = "⊑", tU = "⊏", nU = "⊑", rU = "⊐", oU = "⊒", iU = "⊐", sU = "⊒", aU = "□", cU = "□", lU = "⊓", uU = "⊏", pU = "⊑", dU = "⊐", fU = "⊒", mU = "⊔", hU = "▪", gU = "□", yU = "▪", vU = "→", bU = "𝒮", xU = "𝓈", wU = "∖", EU = "⌣", TU = "⋆", SU = "⋆", NU = "☆", OU = "★", AU = "ϵ", _U = "ϕ", DU = "¯", LU = "⊂", CU = "⋐", RU = "⪽", PU = "⫅", IU = "⊆", kU = "⫃", FU = "⫁", qU = "⫋", MU = "⊊", jU = "⪿", UU = "⥹", BU = "⊂", $U = "⋐", VU = "⊆", zU = "⫅", HU = "⊆", XU = "⊊", GU = "⫋", WU = "⫇", YU = "⫕", KU = "⫓", JU = "⪸", QU = "≻", ZU = "≽", eB = "≻", tB = "⪰", nB = "≽", rB = "≿", oB = "⪰", iB = "⪺", sB = "⪶", aB = "⋩", cB = "≿", lB = "∋", uB = "∑", pB = "∑", dB = "♪", fB = "¹", mB = "²", hB = "³", gB = "⊃", yB = "⋑", vB = "⪾", bB = "⫘", xB = "⫆", wB = "⊇", EB = "⫄", TB = "⊃", SB = "⊇", NB = "⟉", OB = "⫗", AB = "⥻", _B = "⫂", DB = "⫌", LB = "⊋", CB = "⫀", RB = "⊃", PB = "⋑", IB = "⊇", kB = "⫆", FB = "⊋", qB = "⫌", MB = "⫈", jB = "⫔", UB = "⫖", BB = "⤦", $B = "↙", VB = "⇙", zB = "↙", HB = "⤪", XB = "ß", GB = "	", WB = "⌖", YB = "Τ", KB = "τ", JB = "⎴", QB = "Ť", ZB = "ť", e$ = "Ţ", t$ = "ţ", n$ = "Т", r$ = "т", o$ = "⃛", i$ = "⌕", s$ = "𝔗", a$ = "𝔱", c$ = "∴", l$ = "∴", u$ = "∴", p$ = "Θ", d$ = "θ", f$ = "ϑ", m$ = "ϑ", h$ = "≈", g$ = "∼", y$ = "  ", v$ = " ", b$ = " ", x$ = "≈", w$ = "∼", E$ = "Þ", T$ = "þ", S$ = "˜", N$ = "∼", O$ = "≃", A$ = "≅", _$ = "≈", D$ = "⨱", L$ = "⊠", C$ = "×", R$ = "⨰", P$ = "∭", I$ = "⤨", k$ = "⌶", F$ = "⫱", q$ = "⊤", M$ = "𝕋", j$ = "𝕥", U$ = "⫚", B$ = "⤩", $$ = "‴", V$ = "™", z$ = "™", H$ = "▵", X$ = "▿", G$ = "◃", W$ = "⊴", Y$ = "≜", K$ = "▹", J$ = "⊵", Q$ = "◬", Z$ = "≜", e3 = "⨺", t3 = "⃛", n3 = "⨹", r3 = "⧍", o3 = "⨻", i3 = "⏢", s3 = "𝒯", a3 = "𝓉", c3 = "Ц", l3 = "ц", u3 = "Ћ", p3 = "ћ", d3 = "Ŧ", f3 = "ŧ", m3 = "≬", h3 = "↞", g3 = "↠", y3 = "Ú", v3 = "ú", b3 = "↑", x3 = "↟", w3 = "⇑", E3 = "⥉", T3 = "Ў", S3 = "ў", N3 = "Ŭ", O3 = "ŭ", A3 = "Û", _3 = "û", D3 = "У", L3 = "у", C3 = "⇅", R3 = "Ű", P3 = "ű", I3 = "⥮", k3 = "⥾", F3 = "𝔘", q3 = "𝔲", M3 = "Ù", j3 = "ù", U3 = "⥣", B3 = "↿", $3 = "↾", V3 = "▀", z3 = "⌜", H3 = "⌜", X3 = "⌏", G3 = "◸", W3 = "Ū", Y3 = "ū", K3 = "¨", J3 = "_", Q3 = "⏟", Z3 = "⎵", eV = "⏝", tV = "⋃", nV = "⊎", rV = "Ų", oV = "ų", iV = "𝕌", sV = "𝕦", aV = "⤒", cV = "↑", lV = "↑", uV = "⇑", pV = "⇅", dV = "↕", fV = "↕", mV = "⇕", hV = "⥮", gV = "↿", yV = "↾", vV = "⊎", bV = "↖", xV = "↗", wV = "υ", EV = "ϒ", TV = "ϒ", SV = "Υ", NV = "υ", OV = "↥", AV = "⊥", _V = "⇈", DV = "⌝", LV = "⌝", CV = "⌎", RV = "Ů", PV = "ů", IV = "◹", kV = "𝒰", FV = "𝓊", qV = "⋰", MV = "Ũ", jV = "ũ", UV = "▵", BV = "▴", $V = "⇈", VV = "Ü", zV = "ü", HV = "⦧", XV = "⦜", GV = "ϵ", WV = "ϰ", YV = "∅", KV = "ϕ", JV = "ϖ", QV = "∝", ZV = "↕", e8 = "⇕", t8 = "ϱ", n8 = "ς", r8 = "⊊︀", o8 = "⫋︀", i8 = "⊋︀", s8 = "⫌︀", a8 = "ϑ", c8 = "⊲", l8 = "⊳", u8 = "⫨", p8 = "⫫", d8 = "⫩", f8 = "В", m8 = "в", h8 = "⊢", g8 = "⊨", y8 = "⊩", v8 = "⊫", b8 = "⫦", x8 = "⊻", w8 = "∨", E8 = "⋁", T8 = "≚", S8 = "⋮", N8 = "|", O8 = "‖", A8 = "|", _8 = "‖", D8 = "∣", L8 = "|", C8 = "❘", R8 = "≀", P8 = " ", I8 = "𝔙", k8 = "𝔳", F8 = "⊲", q8 = "⊂⃒", M8 = "⊃⃒", j8 = "𝕍", U8 = "𝕧", B8 = "∝", $8 = "⊳", V8 = "𝒱", z8 = "𝓋", H8 = "⫋︀", X8 = "⊊︀", G8 = "⫌︀", W8 = "⊋︀", Y8 = "⊪", K8 = "⦚", J8 = "Ŵ", Q8 = "ŵ", Z8 = "⩟", ez = "∧", tz = "⋀", nz = "≙", rz = "℘", oz = "𝔚", iz = "𝔴", sz = "𝕎", az = "𝕨", cz = "℘", lz = "≀", uz = "≀", pz = "𝒲", dz = "𝓌", fz = "⋂", mz = "◯", hz = "⋃", gz = "▽", yz = "𝔛", vz = "𝔵", bz = "⟷", xz = "⟺", wz = "Ξ", Ez = "ξ", Tz = "⟵", Sz = "⟸", Nz = "⟼", Oz = "⋻", Az = "⨀", _z = "𝕏", Dz = "𝕩", Lz = "⨁", Cz = "⨂", Rz = "⟶", Pz = "⟹", Iz = "𝒳", kz = "𝓍", Fz = "⨆", qz = "⨄", Mz = "△", jz = "⋁", Uz = "⋀", Bz = "Ý", $z = "ý", Vz = "Я", zz = "я", Hz = "Ŷ", Xz = "ŷ", Gz = "Ы", Wz = "ы", Yz = "¥", Kz = "𝔜", Jz = "𝔶", Qz = "Ї", Zz = "ї", e4 = "𝕐", t4 = "𝕪", n4 = "𝒴", r4 = "𝓎", o4 = "Ю", i4 = "ю", s4 = "ÿ", a4 = "Ÿ", c4 = "Ź", l4 = "ź", u4 = "Ž", p4 = "ž", d4 = "З", f4 = "з", m4 = "Ż", h4 = "ż", g4 = "ℨ", y4 = "​", v4 = "Ζ", b4 = "ζ", x4 = "𝔷", w4 = "ℨ", E4 = "Ж", T4 = "ж", S4 = "⇝", N4 = "𝕫", O4 = "ℤ", A4 = "𝒵", _4 = "𝓏", D4 = "‍", L4 = "‌", Ic = {
  Aacute: fp,
  aacute: mp,
  Abreve: hp,
  abreve: gp,
  ac: yp,
  acd: vp,
  acE: bp,
  Acirc: xp,
  acirc: wp,
  acute: Ep,
  Acy: Tp,
  acy: Sp,
  AElig: Np,
  aelig: Op,
  af: Ap,
  Afr: _p,
  afr: Dp,
  Agrave: Lp,
  agrave: Cp,
  alefsym: Rp,
  aleph: Pp,
  Alpha: Ip,
  alpha: kp,
  Amacr: Fp,
  amacr: qp,
  amalg: Mp,
  amp: jp,
  AMP: Up,
  andand: Bp,
  And: $p,
  and: Vp,
  andd: zp,
  andslope: Hp,
  andv: Xp,
  ang: Gp,
  ange: Wp,
  angle: Yp,
  angmsdaa: Kp,
  angmsdab: Jp,
  angmsdac: Qp,
  angmsdad: Zp,
  angmsdae: ed,
  angmsdaf: td,
  angmsdag: nd,
  angmsdah: rd,
  angmsd: od,
  angrt: id,
  angrtvb: sd,
  angrtvbd: ad,
  angsph: cd,
  angst: ld,
  angzarr: ud,
  Aogon: pd,
  aogon: dd,
  Aopf: fd,
  aopf: md,
  apacir: hd,
  ap: gd,
  apE: yd,
  ape: vd,
  apid: bd,
  apos: xd,
  ApplyFunction: wd,
  approx: Ed,
  approxeq: Td,
  Aring: Sd,
  aring: Nd,
  Ascr: Od,
  ascr: Ad,
  Assign: _d,
  ast: Dd,
  asymp: Ld,
  asympeq: Cd,
  Atilde: Rd,
  atilde: Pd,
  Auml: Id,
  auml: kd,
  awconint: Fd,
  awint: qd,
  backcong: Md,
  backepsilon: jd,
  backprime: Ud,
  backsim: Bd,
  backsimeq: $d,
  Backslash: Vd,
  Barv: zd,
  barvee: Hd,
  barwed: Xd,
  Barwed: Gd,
  barwedge: Wd,
  bbrk: Yd,
  bbrktbrk: Kd,
  bcong: Jd,
  Bcy: Qd,
  bcy: Zd,
  bdquo: ef,
  becaus: tf,
  because: nf,
  Because: rf,
  bemptyv: of,
  bepsi: sf,
  bernou: af,
  Bernoullis: cf,
  Beta: lf,
  beta: uf,
  beth: pf,
  between: df,
  Bfr: ff,
  bfr: mf,
  bigcap: hf,
  bigcirc: gf,
  bigcup: yf,
  bigodot: vf,
  bigoplus: bf,
  bigotimes: xf,
  bigsqcup: wf,
  bigstar: Ef,
  bigtriangledown: Tf,
  bigtriangleup: Sf,
  biguplus: Nf,
  bigvee: Of,
  bigwedge: Af,
  bkarow: _f,
  blacklozenge: Df,
  blacksquare: Lf,
  blacktriangle: Cf,
  blacktriangledown: Rf,
  blacktriangleleft: Pf,
  blacktriangleright: If,
  blank: kf,
  blk12: Ff,
  blk14: qf,
  blk34: Mf,
  block: jf,
  bne: Uf,
  bnequiv: Bf,
  bNot: $f,
  bnot: Vf,
  Bopf: zf,
  bopf: Hf,
  bot: Xf,
  bottom: Gf,
  bowtie: Wf,
  boxbox: Yf,
  boxdl: Kf,
  boxdL: Jf,
  boxDl: Qf,
  boxDL: Zf,
  boxdr: em,
  boxdR: tm,
  boxDr: nm,
  boxDR: rm,
  boxh: om,
  boxH: im,
  boxhd: sm,
  boxHd: am,
  boxhD: cm,
  boxHD: lm,
  boxhu: um,
  boxHu: pm,
  boxhU: dm,
  boxHU: fm,
  boxminus: mm,
  boxplus: hm,
  boxtimes: gm,
  boxul: ym,
  boxuL: vm,
  boxUl: bm,
  boxUL: xm,
  boxur: wm,
  boxuR: Em,
  boxUr: Tm,
  boxUR: Sm,
  boxv: Nm,
  boxV: Om,
  boxvh: Am,
  boxvH: _m,
  boxVh: Dm,
  boxVH: Lm,
  boxvl: Cm,
  boxvL: Rm,
  boxVl: Pm,
  boxVL: Im,
  boxvr: km,
  boxvR: Fm,
  boxVr: qm,
  boxVR: Mm,
  bprime: jm,
  breve: Um,
  Breve: Bm,
  brvbar: $m,
  bscr: Vm,
  Bscr: zm,
  bsemi: Hm,
  bsim: Xm,
  bsime: Gm,
  bsolb: Wm,
  bsol: Ym,
  bsolhsub: Km,
  bull: Jm,
  bullet: Qm,
  bump: Zm,
  bumpE: eh,
  bumpe: th,
  Bumpeq: nh,
  bumpeq: rh,
  Cacute: oh,
  cacute: ih,
  capand: sh,
  capbrcup: ah,
  capcap: ch,
  cap: lh,
  Cap: uh,
  capcup: ph,
  capdot: dh,
  CapitalDifferentialD: fh,
  caps: mh,
  caret: hh,
  caron: gh,
  Cayleys: yh,
  ccaps: vh,
  Ccaron: bh,
  ccaron: xh,
  Ccedil: wh,
  ccedil: Eh,
  Ccirc: Th,
  ccirc: Sh,
  Cconint: Nh,
  ccups: Oh,
  ccupssm: Ah,
  Cdot: _h,
  cdot: Dh,
  cedil: Lh,
  Cedilla: Ch,
  cemptyv: Rh,
  cent: Ph,
  centerdot: Ih,
  CenterDot: kh,
  cfr: Fh,
  Cfr: qh,
  CHcy: Mh,
  chcy: jh,
  check: Uh,
  checkmark: Bh,
  Chi: $h,
  chi: Vh,
  circ: zh,
  circeq: Hh,
  circlearrowleft: Xh,
  circlearrowright: Gh,
  circledast: Wh,
  circledcirc: Yh,
  circleddash: Kh,
  CircleDot: Jh,
  circledR: Qh,
  circledS: Zh,
  CircleMinus: eg,
  CirclePlus: tg,
  CircleTimes: ng,
  cir: rg,
  cirE: og,
  cire: ig,
  cirfnint: sg,
  cirmid: ag,
  cirscir: cg,
  ClockwiseContourIntegral: lg,
  CloseCurlyDoubleQuote: ug,
  CloseCurlyQuote: pg,
  clubs: dg,
  clubsuit: fg,
  colon: mg,
  Colon: hg,
  Colone: gg,
  colone: yg,
  coloneq: vg,
  comma: bg,
  commat: xg,
  comp: wg,
  compfn: Eg,
  complement: Tg,
  complexes: Sg,
  cong: Ng,
  congdot: Og,
  Congruent: Ag,
  conint: _g,
  Conint: Dg,
  ContourIntegral: Lg,
  copf: Cg,
  Copf: Rg,
  coprod: Pg,
  Coproduct: Ig,
  copy: kg,
  COPY: Fg,
  copysr: qg,
  CounterClockwiseContourIntegral: Mg,
  crarr: jg,
  cross: Ug,
  Cross: Bg,
  Cscr: $g,
  cscr: Vg,
  csub: zg,
  csube: Hg,
  csup: Xg,
  csupe: Gg,
  ctdot: Wg,
  cudarrl: Yg,
  cudarrr: Kg,
  cuepr: Jg,
  cuesc: Qg,
  cularr: Zg,
  cularrp: ey,
  cupbrcap: ty,
  cupcap: ny,
  CupCap: ry,
  cup: oy,
  Cup: iy,
  cupcup: sy,
  cupdot: ay,
  cupor: cy,
  cups: ly,
  curarr: uy,
  curarrm: py,
  curlyeqprec: dy,
  curlyeqsucc: fy,
  curlyvee: my,
  curlywedge: hy,
  curren: gy,
  curvearrowleft: yy,
  curvearrowright: vy,
  cuvee: by,
  cuwed: xy,
  cwconint: wy,
  cwint: Ey,
  cylcty: Ty,
  dagger: Sy,
  Dagger: Ny,
  daleth: Oy,
  darr: Ay,
  Darr: _y,
  dArr: Dy,
  dash: Ly,
  Dashv: Cy,
  dashv: Ry,
  dbkarow: Py,
  dblac: Iy,
  Dcaron: ky,
  dcaron: Fy,
  Dcy: qy,
  dcy: My,
  ddagger: jy,
  ddarr: Uy,
  DD: By,
  dd: $y,
  DDotrahd: Vy,
  ddotseq: zy,
  deg: Hy,
  Del: Xy,
  Delta: Gy,
  delta: Wy,
  demptyv: Yy,
  dfisht: Ky,
  Dfr: Jy,
  dfr: Qy,
  dHar: Zy,
  dharl: ev,
  dharr: tv,
  DiacriticalAcute: nv,
  DiacriticalDot: rv,
  DiacriticalDoubleAcute: ov,
  DiacriticalGrave: iv,
  DiacriticalTilde: sv,
  diam: av,
  diamond: cv,
  Diamond: lv,
  diamondsuit: uv,
  diams: pv,
  die: dv,
  DifferentialD: fv,
  digamma: mv,
  disin: hv,
  div: gv,
  divide: yv,
  divideontimes: vv,
  divonx: bv,
  DJcy: xv,
  djcy: wv,
  dlcorn: Ev,
  dlcrop: Tv,
  dollar: Sv,
  Dopf: Nv,
  dopf: Ov,
  Dot: Av,
  dot: _v,
  DotDot: Dv,
  doteq: Lv,
  doteqdot: Cv,
  DotEqual: Rv,
  dotminus: Pv,
  dotplus: Iv,
  dotsquare: kv,
  doublebarwedge: Fv,
  DoubleContourIntegral: qv,
  DoubleDot: Mv,
  DoubleDownArrow: jv,
  DoubleLeftArrow: Uv,
  DoubleLeftRightArrow: Bv,
  DoubleLeftTee: $v,
  DoubleLongLeftArrow: Vv,
  DoubleLongLeftRightArrow: zv,
  DoubleLongRightArrow: Hv,
  DoubleRightArrow: Xv,
  DoubleRightTee: Gv,
  DoubleUpArrow: Wv,
  DoubleUpDownArrow: Yv,
  DoubleVerticalBar: Kv,
  DownArrowBar: Jv,
  downarrow: Qv,
  DownArrow: Zv,
  Downarrow: eb,
  DownArrowUpArrow: tb,
  DownBreve: nb,
  downdownarrows: rb,
  downharpoonleft: ob,
  downharpoonright: ib,
  DownLeftRightVector: sb,
  DownLeftTeeVector: ab,
  DownLeftVectorBar: cb,
  DownLeftVector: lb,
  DownRightTeeVector: ub,
  DownRightVectorBar: pb,
  DownRightVector: db,
  DownTeeArrow: fb,
  DownTee: mb,
  drbkarow: hb,
  drcorn: gb,
  drcrop: yb,
  Dscr: vb,
  dscr: bb,
  DScy: xb,
  dscy: wb,
  dsol: Eb,
  Dstrok: Tb,
  dstrok: Sb,
  dtdot: Nb,
  dtri: Ob,
  dtrif: Ab,
  duarr: _b,
  duhar: Db,
  dwangle: Lb,
  DZcy: Cb,
  dzcy: Rb,
  dzigrarr: Pb,
  Eacute: Ib,
  eacute: kb,
  easter: Fb,
  Ecaron: qb,
  ecaron: Mb,
  Ecirc: jb,
  ecirc: Ub,
  ecir: Bb,
  ecolon: $b,
  Ecy: Vb,
  ecy: zb,
  eDDot: Hb,
  Edot: Xb,
  edot: Gb,
  eDot: Wb,
  ee: Yb,
  efDot: Kb,
  Efr: Jb,
  efr: Qb,
  eg: Zb,
  Egrave: ex,
  egrave: tx,
  egs: nx,
  egsdot: rx,
  el: ox,
  Element: ix,
  elinters: sx,
  ell: ax,
  els: cx,
  elsdot: lx,
  Emacr: ux,
  emacr: px,
  empty: dx,
  emptyset: fx,
  EmptySmallSquare: mx,
  emptyv: hx,
  EmptyVerySmallSquare: gx,
  emsp13: yx,
  emsp14: vx,
  emsp: bx,
  ENG: xx,
  eng: wx,
  ensp: Ex,
  Eogon: Tx,
  eogon: Sx,
  Eopf: Nx,
  eopf: Ox,
  epar: Ax,
  eparsl: _x,
  eplus: Dx,
  epsi: Lx,
  Epsilon: Cx,
  epsilon: Rx,
  epsiv: Px,
  eqcirc: Ix,
  eqcolon: kx,
  eqsim: Fx,
  eqslantgtr: qx,
  eqslantless: Mx,
  Equal: jx,
  equals: Ux,
  EqualTilde: Bx,
  equest: $x,
  Equilibrium: Vx,
  equiv: zx,
  equivDD: Hx,
  eqvparsl: Xx,
  erarr: Gx,
  erDot: Wx,
  escr: Yx,
  Escr: Kx,
  esdot: Jx,
  Esim: Qx,
  esim: Zx,
  Eta: ew,
  eta: tw,
  ETH: nw,
  eth: rw,
  Euml: ow,
  euml: iw,
  euro: sw,
  excl: aw,
  exist: cw,
  Exists: lw,
  expectation: uw,
  exponentiale: pw,
  ExponentialE: dw,
  fallingdotseq: fw,
  Fcy: mw,
  fcy: hw,
  female: gw,
  ffilig: yw,
  fflig: vw,
  ffllig: bw,
  Ffr: xw,
  ffr: ww,
  filig: Ew,
  FilledSmallSquare: Tw,
  FilledVerySmallSquare: Sw,
  fjlig: Nw,
  flat: Ow,
  fllig: Aw,
  fltns: _w,
  fnof: Dw,
  Fopf: Lw,
  fopf: Cw,
  forall: Rw,
  ForAll: Pw,
  fork: Iw,
  forkv: kw,
  Fouriertrf: Fw,
  fpartint: qw,
  frac12: Mw,
  frac13: jw,
  frac14: Uw,
  frac15: Bw,
  frac16: $w,
  frac18: Vw,
  frac23: zw,
  frac25: Hw,
  frac34: Xw,
  frac35: Gw,
  frac38: Ww,
  frac45: Yw,
  frac56: Kw,
  frac58: Jw,
  frac78: Qw,
  frasl: Zw,
  frown: eE,
  fscr: tE,
  Fscr: nE,
  gacute: rE,
  Gamma: oE,
  gamma: iE,
  Gammad: sE,
  gammad: aE,
  gap: cE,
  Gbreve: lE,
  gbreve: uE,
  Gcedil: pE,
  Gcirc: dE,
  gcirc: fE,
  Gcy: mE,
  gcy: hE,
  Gdot: gE,
  gdot: yE,
  ge: vE,
  gE: bE,
  gEl: xE,
  gel: wE,
  geq: EE,
  geqq: TE,
  geqslant: SE,
  gescc: NE,
  ges: OE,
  gesdot: AE,
  gesdoto: _E,
  gesdotol: DE,
  gesl: LE,
  gesles: CE,
  Gfr: RE,
  gfr: PE,
  gg: IE,
  Gg: kE,
  ggg: FE,
  gimel: qE,
  GJcy: ME,
  gjcy: jE,
  gla: UE,
  gl: BE,
  glE: $E,
  glj: VE,
  gnap: zE,
  gnapprox: HE,
  gne: XE,
  gnE: GE,
  gneq: WE,
  gneqq: YE,
  gnsim: KE,
  Gopf: JE,
  gopf: QE,
  grave: ZE,
  GreaterEqual: eT,
  GreaterEqualLess: tT,
  GreaterFullEqual: nT,
  GreaterGreater: rT,
  GreaterLess: oT,
  GreaterSlantEqual: iT,
  GreaterTilde: sT,
  Gscr: aT,
  gscr: cT,
  gsim: lT,
  gsime: uT,
  gsiml: pT,
  gtcc: dT,
  gtcir: fT,
  gt: mT,
  GT: hT,
  Gt: gT,
  gtdot: yT,
  gtlPar: vT,
  gtquest: bT,
  gtrapprox: xT,
  gtrarr: wT,
  gtrdot: ET,
  gtreqless: TT,
  gtreqqless: ST,
  gtrless: NT,
  gtrsim: OT,
  gvertneqq: AT,
  gvnE: _T,
  Hacek: DT,
  hairsp: LT,
  half: CT,
  hamilt: RT,
  HARDcy: PT,
  hardcy: IT,
  harrcir: kT,
  harr: FT,
  hArr: qT,
  harrw: MT,
  Hat: jT,
  hbar: UT,
  Hcirc: BT,
  hcirc: $T,
  hearts: VT,
  heartsuit: zT,
  hellip: HT,
  hercon: XT,
  hfr: GT,
  Hfr: WT,
  HilbertSpace: YT,
  hksearow: KT,
  hkswarow: JT,
  hoarr: QT,
  homtht: ZT,
  hookleftarrow: eS,
  hookrightarrow: tS,
  hopf: nS,
  Hopf: rS,
  horbar: oS,
  HorizontalLine: iS,
  hscr: sS,
  Hscr: aS,
  hslash: cS,
  Hstrok: lS,
  hstrok: uS,
  HumpDownHump: pS,
  HumpEqual: dS,
  hybull: fS,
  hyphen: mS,
  Iacute: hS,
  iacute: gS,
  ic: yS,
  Icirc: vS,
  icirc: bS,
  Icy: xS,
  icy: wS,
  Idot: ES,
  IEcy: TS,
  iecy: SS,
  iexcl: NS,
  iff: OS,
  ifr: AS,
  Ifr: _S,
  Igrave: DS,
  igrave: LS,
  ii: CS,
  iiiint: RS,
  iiint: PS,
  iinfin: IS,
  iiota: kS,
  IJlig: FS,
  ijlig: qS,
  Imacr: MS,
  imacr: jS,
  image: US,
  ImaginaryI: BS,
  imagline: $S,
  imagpart: VS,
  imath: zS,
  Im: HS,
  imof: XS,
  imped: GS,
  Implies: WS,
  incare: YS,
  in: "∈",
  infin: KS,
  infintie: JS,
  inodot: QS,
  intcal: ZS,
  int: e0,
  Int: t0,
  integers: n0,
  Integral: r0,
  intercal: o0,
  Intersection: i0,
  intlarhk: s0,
  intprod: a0,
  InvisibleComma: c0,
  InvisibleTimes: l0,
  IOcy: u0,
  iocy: p0,
  Iogon: d0,
  iogon: f0,
  Iopf: m0,
  iopf: h0,
  Iota: g0,
  iota: y0,
  iprod: v0,
  iquest: b0,
  iscr: x0,
  Iscr: w0,
  isin: E0,
  isindot: T0,
  isinE: S0,
  isins: N0,
  isinsv: O0,
  isinv: A0,
  it: _0,
  Itilde: D0,
  itilde: L0,
  Iukcy: C0,
  iukcy: R0,
  Iuml: P0,
  iuml: I0,
  Jcirc: k0,
  jcirc: F0,
  Jcy: q0,
  jcy: M0,
  Jfr: j0,
  jfr: U0,
  jmath: B0,
  Jopf: $0,
  jopf: V0,
  Jscr: z0,
  jscr: H0,
  Jsercy: X0,
  jsercy: G0,
  Jukcy: W0,
  jukcy: Y0,
  Kappa: K0,
  kappa: J0,
  kappav: Q0,
  Kcedil: Z0,
  kcedil: eN,
  Kcy: tN,
  kcy: nN,
  Kfr: rN,
  kfr: oN,
  kgreen: iN,
  KHcy: sN,
  khcy: aN,
  KJcy: cN,
  kjcy: lN,
  Kopf: uN,
  kopf: pN,
  Kscr: dN,
  kscr: fN,
  lAarr: mN,
  Lacute: hN,
  lacute: gN,
  laemptyv: yN,
  lagran: vN,
  Lambda: bN,
  lambda: xN,
  lang: wN,
  Lang: EN,
  langd: TN,
  langle: SN,
  lap: NN,
  Laplacetrf: ON,
  laquo: AN,
  larrb: _N,
  larrbfs: DN,
  larr: LN,
  Larr: CN,
  lArr: RN,
  larrfs: PN,
  larrhk: IN,
  larrlp: kN,
  larrpl: FN,
  larrsim: qN,
  larrtl: MN,
  latail: jN,
  lAtail: UN,
  lat: BN,
  late: $N,
  lates: VN,
  lbarr: zN,
  lBarr: HN,
  lbbrk: XN,
  lbrace: GN,
  lbrack: WN,
  lbrke: YN,
  lbrksld: KN,
  lbrkslu: JN,
  Lcaron: QN,
  lcaron: ZN,
  Lcedil: eO,
  lcedil: tO,
  lceil: nO,
  lcub: rO,
  Lcy: oO,
  lcy: iO,
  ldca: sO,
  ldquo: aO,
  ldquor: cO,
  ldrdhar: lO,
  ldrushar: uO,
  ldsh: pO,
  le: dO,
  lE: fO,
  LeftAngleBracket: mO,
  LeftArrowBar: hO,
  leftarrow: gO,
  LeftArrow: yO,
  Leftarrow: vO,
  LeftArrowRightArrow: bO,
  leftarrowtail: xO,
  LeftCeiling: wO,
  LeftDoubleBracket: EO,
  LeftDownTeeVector: TO,
  LeftDownVectorBar: SO,
  LeftDownVector: NO,
  LeftFloor: OO,
  leftharpoondown: AO,
  leftharpoonup: _O,
  leftleftarrows: DO,
  leftrightarrow: LO,
  LeftRightArrow: CO,
  Leftrightarrow: RO,
  leftrightarrows: PO,
  leftrightharpoons: IO,
  leftrightsquigarrow: kO,
  LeftRightVector: FO,
  LeftTeeArrow: qO,
  LeftTee: MO,
  LeftTeeVector: jO,
  leftthreetimes: UO,
  LeftTriangleBar: BO,
  LeftTriangle: $O,
  LeftTriangleEqual: VO,
  LeftUpDownVector: zO,
  LeftUpTeeVector: HO,
  LeftUpVectorBar: XO,
  LeftUpVector: GO,
  LeftVectorBar: WO,
  LeftVector: YO,
  lEg: KO,
  leg: JO,
  leq: QO,
  leqq: ZO,
  leqslant: eA,
  lescc: tA,
  les: nA,
  lesdot: rA,
  lesdoto: oA,
  lesdotor: iA,
  lesg: sA,
  lesges: aA,
  lessapprox: cA,
  lessdot: lA,
  lesseqgtr: uA,
  lesseqqgtr: pA,
  LessEqualGreater: dA,
  LessFullEqual: fA,
  LessGreater: mA,
  lessgtr: hA,
  LessLess: gA,
  lesssim: yA,
  LessSlantEqual: vA,
  LessTilde: bA,
  lfisht: xA,
  lfloor: wA,
  Lfr: EA,
  lfr: TA,
  lg: SA,
  lgE: NA,
  lHar: OA,
  lhard: AA,
  lharu: _A,
  lharul: DA,
  lhblk: LA,
  LJcy: CA,
  ljcy: RA,
  llarr: PA,
  ll: IA,
  Ll: kA,
  llcorner: FA,
  Lleftarrow: qA,
  llhard: MA,
  lltri: jA,
  Lmidot: UA,
  lmidot: BA,
  lmoustache: $A,
  lmoust: VA,
  lnap: zA,
  lnapprox: HA,
  lne: XA,
  lnE: GA,
  lneq: WA,
  lneqq: YA,
  lnsim: KA,
  loang: JA,
  loarr: QA,
  lobrk: ZA,
  longleftarrow: e_,
  LongLeftArrow: t_,
  Longleftarrow: n_,
  longleftrightarrow: r_,
  LongLeftRightArrow: o_,
  Longleftrightarrow: i_,
  longmapsto: s_,
  longrightarrow: a_,
  LongRightArrow: c_,
  Longrightarrow: l_,
  looparrowleft: u_,
  looparrowright: p_,
  lopar: d_,
  Lopf: f_,
  lopf: m_,
  loplus: h_,
  lotimes: g_,
  lowast: y_,
  lowbar: v_,
  LowerLeftArrow: b_,
  LowerRightArrow: x_,
  loz: w_,
  lozenge: E_,
  lozf: T_,
  lpar: S_,
  lparlt: N_,
  lrarr: O_,
  lrcorner: A_,
  lrhar: __,
  lrhard: D_,
  lrm: L_,
  lrtri: C_,
  lsaquo: R_,
  lscr: P_,
  Lscr: I_,
  lsh: k_,
  Lsh: F_,
  lsim: q_,
  lsime: M_,
  lsimg: j_,
  lsqb: U_,
  lsquo: B_,
  lsquor: $_,
  Lstrok: V_,
  lstrok: z_,
  ltcc: H_,
  ltcir: X_,
  lt: G_,
  LT: W_,
  Lt: Y_,
  ltdot: K_,
  lthree: J_,
  ltimes: Q_,
  ltlarr: Z_,
  ltquest: eD,
  ltri: tD,
  ltrie: nD,
  ltrif: rD,
  ltrPar: oD,
  lurdshar: iD,
  luruhar: sD,
  lvertneqq: aD,
  lvnE: cD,
  macr: lD,
  male: uD,
  malt: pD,
  maltese: dD,
  Map: "⤅",
  map: fD,
  mapsto: mD,
  mapstodown: hD,
  mapstoleft: gD,
  mapstoup: yD,
  marker: vD,
  mcomma: bD,
  Mcy: xD,
  mcy: wD,
  mdash: ED,
  mDDot: TD,
  measuredangle: SD,
  MediumSpace: ND,
  Mellintrf: OD,
  Mfr: AD,
  mfr: _D,
  mho: DD,
  micro: LD,
  midast: CD,
  midcir: RD,
  mid: PD,
  middot: ID,
  minusb: kD,
  minus: FD,
  minusd: qD,
  minusdu: MD,
  MinusPlus: jD,
  mlcp: UD,
  mldr: BD,
  mnplus: $D,
  models: VD,
  Mopf: zD,
  mopf: HD,
  mp: XD,
  mscr: GD,
  Mscr: WD,
  mstpos: YD,
  Mu: KD,
  mu: JD,
  multimap: QD,
  mumap: ZD,
  nabla: eL,
  Nacute: tL,
  nacute: nL,
  nang: rL,
  nap: oL,
  napE: iL,
  napid: sL,
  napos: aL,
  napprox: cL,
  natural: lL,
  naturals: uL,
  natur: pL,
  nbsp: dL,
  nbump: fL,
  nbumpe: mL,
  ncap: hL,
  Ncaron: gL,
  ncaron: yL,
  Ncedil: vL,
  ncedil: bL,
  ncong: xL,
  ncongdot: wL,
  ncup: EL,
  Ncy: TL,
  ncy: SL,
  ndash: NL,
  nearhk: OL,
  nearr: AL,
  neArr: _L,
  nearrow: DL,
  ne: LL,
  nedot: CL,
  NegativeMediumSpace: RL,
  NegativeThickSpace: PL,
  NegativeThinSpace: IL,
  NegativeVeryThinSpace: kL,
  nequiv: FL,
  nesear: qL,
  nesim: ML,
  NestedGreaterGreater: jL,
  NestedLessLess: UL,
  NewLine: BL,
  nexist: $L,
  nexists: VL,
  Nfr: zL,
  nfr: HL,
  ngE: XL,
  nge: GL,
  ngeq: WL,
  ngeqq: YL,
  ngeqslant: KL,
  nges: JL,
  nGg: QL,
  ngsim: ZL,
  nGt: eC,
  ngt: tC,
  ngtr: nC,
  nGtv: rC,
  nharr: oC,
  nhArr: iC,
  nhpar: sC,
  ni: aC,
  nis: cC,
  nisd: lC,
  niv: uC,
  NJcy: pC,
  njcy: dC,
  nlarr: fC,
  nlArr: mC,
  nldr: hC,
  nlE: gC,
  nle: yC,
  nleftarrow: vC,
  nLeftarrow: bC,
  nleftrightarrow: xC,
  nLeftrightarrow: wC,
  nleq: EC,
  nleqq: TC,
  nleqslant: SC,
  nles: NC,
  nless: OC,
  nLl: AC,
  nlsim: _C,
  nLt: DC,
  nlt: LC,
  nltri: CC,
  nltrie: RC,
  nLtv: PC,
  nmid: IC,
  NoBreak: kC,
  NonBreakingSpace: FC,
  nopf: qC,
  Nopf: MC,
  Not: jC,
  not: UC,
  NotCongruent: BC,
  NotCupCap: $C,
  NotDoubleVerticalBar: VC,
  NotElement: zC,
  NotEqual: HC,
  NotEqualTilde: XC,
  NotExists: GC,
  NotGreater: WC,
  NotGreaterEqual: YC,
  NotGreaterFullEqual: KC,
  NotGreaterGreater: JC,
  NotGreaterLess: QC,
  NotGreaterSlantEqual: ZC,
  NotGreaterTilde: e1,
  NotHumpDownHump: t1,
  NotHumpEqual: n1,
  notin: r1,
  notindot: o1,
  notinE: i1,
  notinva: s1,
  notinvb: a1,
  notinvc: c1,
  NotLeftTriangleBar: l1,
  NotLeftTriangle: u1,
  NotLeftTriangleEqual: p1,
  NotLess: d1,
  NotLessEqual: f1,
  NotLessGreater: m1,
  NotLessLess: h1,
  NotLessSlantEqual: g1,
  NotLessTilde: y1,
  NotNestedGreaterGreater: v1,
  NotNestedLessLess: b1,
  notni: x1,
  notniva: w1,
  notnivb: E1,
  notnivc: T1,
  NotPrecedes: S1,
  NotPrecedesEqual: N1,
  NotPrecedesSlantEqual: O1,
  NotReverseElement: A1,
  NotRightTriangleBar: _1,
  NotRightTriangle: D1,
  NotRightTriangleEqual: L1,
  NotSquareSubset: C1,
  NotSquareSubsetEqual: R1,
  NotSquareSuperset: P1,
  NotSquareSupersetEqual: I1,
  NotSubset: k1,
  NotSubsetEqual: F1,
  NotSucceeds: q1,
  NotSucceedsEqual: M1,
  NotSucceedsSlantEqual: j1,
  NotSucceedsTilde: U1,
  NotSuperset: B1,
  NotSupersetEqual: $1,
  NotTilde: V1,
  NotTildeEqual: z1,
  NotTildeFullEqual: H1,
  NotTildeTilde: X1,
  NotVerticalBar: G1,
  nparallel: W1,
  npar: Y1,
  nparsl: K1,
  npart: J1,
  npolint: Q1,
  npr: Z1,
  nprcue: eR,
  nprec: tR,
  npreceq: nR,
  npre: rR,
  nrarrc: oR,
  nrarr: iR,
  nrArr: sR,
  nrarrw: aR,
  nrightarrow: cR,
  nRightarrow: lR,
  nrtri: uR,
  nrtrie: pR,
  nsc: dR,
  nsccue: fR,
  nsce: mR,
  Nscr: hR,
  nscr: gR,
  nshortmid: yR,
  nshortparallel: vR,
  nsim: bR,
  nsime: xR,
  nsimeq: wR,
  nsmid: ER,
  nspar: TR,
  nsqsube: SR,
  nsqsupe: NR,
  nsub: OR,
  nsubE: AR,
  nsube: _R,
  nsubset: DR,
  nsubseteq: LR,
  nsubseteqq: CR,
  nsucc: RR,
  nsucceq: PR,
  nsup: IR,
  nsupE: kR,
  nsupe: FR,
  nsupset: qR,
  nsupseteq: MR,
  nsupseteqq: jR,
  ntgl: UR,
  Ntilde: BR,
  ntilde: $R,
  ntlg: VR,
  ntriangleleft: zR,
  ntrianglelefteq: HR,
  ntriangleright: XR,
  ntrianglerighteq: GR,
  Nu: WR,
  nu: YR,
  num: KR,
  numero: JR,
  numsp: QR,
  nvap: ZR,
  nvdash: eP,
  nvDash: tP,
  nVdash: nP,
  nVDash: rP,
  nvge: oP,
  nvgt: iP,
  nvHarr: sP,
  nvinfin: aP,
  nvlArr: cP,
  nvle: lP,
  nvlt: uP,
  nvltrie: pP,
  nvrArr: dP,
  nvrtrie: fP,
  nvsim: mP,
  nwarhk: hP,
  nwarr: gP,
  nwArr: yP,
  nwarrow: vP,
  nwnear: bP,
  Oacute: xP,
  oacute: wP,
  oast: EP,
  Ocirc: TP,
  ocirc: SP,
  ocir: NP,
  Ocy: OP,
  ocy: AP,
  odash: _P,
  Odblac: DP,
  odblac: LP,
  odiv: CP,
  odot: RP,
  odsold: PP,
  OElig: IP,
  oelig: kP,
  ofcir: FP,
  Ofr: qP,
  ofr: MP,
  ogon: jP,
  Ograve: UP,
  ograve: BP,
  ogt: $P,
  ohbar: VP,
  ohm: zP,
  oint: HP,
  olarr: XP,
  olcir: GP,
  olcross: WP,
  oline: YP,
  olt: KP,
  Omacr: JP,
  omacr: QP,
  Omega: ZP,
  omega: eI,
  Omicron: tI,
  omicron: nI,
  omid: rI,
  ominus: oI,
  Oopf: iI,
  oopf: sI,
  opar: aI,
  OpenCurlyDoubleQuote: cI,
  OpenCurlyQuote: lI,
  operp: uI,
  oplus: pI,
  orarr: dI,
  Or: fI,
  or: mI,
  ord: hI,
  order: gI,
  orderof: yI,
  ordf: vI,
  ordm: bI,
  origof: xI,
  oror: wI,
  orslope: EI,
  orv: TI,
  oS: SI,
  Oscr: NI,
  oscr: OI,
  Oslash: AI,
  oslash: _I,
  osol: DI,
  Otilde: LI,
  otilde: CI,
  otimesas: RI,
  Otimes: PI,
  otimes: II,
  Ouml: kI,
  ouml: FI,
  ovbar: qI,
  OverBar: MI,
  OverBrace: jI,
  OverBracket: UI,
  OverParenthesis: BI,
  para: $I,
  parallel: VI,
  par: zI,
  parsim: HI,
  parsl: XI,
  part: GI,
  PartialD: WI,
  Pcy: YI,
  pcy: KI,
  percnt: JI,
  period: QI,
  permil: ZI,
  perp: ek,
  pertenk: tk,
  Pfr: nk,
  pfr: rk,
  Phi: ok,
  phi: ik,
  phiv: sk,
  phmmat: ak,
  phone: ck,
  Pi: lk,
  pi: uk,
  pitchfork: pk,
  piv: dk,
  planck: fk,
  planckh: mk,
  plankv: hk,
  plusacir: gk,
  plusb: yk,
  pluscir: vk,
  plus: bk,
  plusdo: xk,
  plusdu: wk,
  pluse: Ek,
  PlusMinus: Tk,
  plusmn: Sk,
  plussim: Nk,
  plustwo: Ok,
  pm: Ak,
  Poincareplane: _k,
  pointint: Dk,
  popf: Lk,
  Popf: Ck,
  pound: Rk,
  prap: Pk,
  Pr: Ik,
  pr: kk,
  prcue: Fk,
  precapprox: qk,
  prec: Mk,
  preccurlyeq: jk,
  Precedes: Uk,
  PrecedesEqual: Bk,
  PrecedesSlantEqual: $k,
  PrecedesTilde: Vk,
  preceq: zk,
  precnapprox: Hk,
  precneqq: Xk,
  precnsim: Gk,
  pre: Wk,
  prE: Yk,
  precsim: Kk,
  prime: Jk,
  Prime: Qk,
  primes: Zk,
  prnap: eF,
  prnE: tF,
  prnsim: nF,
  prod: rF,
  Product: oF,
  profalar: iF,
  profline: sF,
  profsurf: aF,
  prop: cF,
  Proportional: lF,
  Proportion: uF,
  propto: pF,
  prsim: dF,
  prurel: fF,
  Pscr: mF,
  pscr: hF,
  Psi: gF,
  psi: yF,
  puncsp: vF,
  Qfr: bF,
  qfr: xF,
  qint: wF,
  qopf: EF,
  Qopf: TF,
  qprime: SF,
  Qscr: NF,
  qscr: OF,
  quaternions: AF,
  quatint: _F,
  quest: DF,
  questeq: LF,
  quot: CF,
  QUOT: RF,
  rAarr: PF,
  race: IF,
  Racute: kF,
  racute: FF,
  radic: qF,
  raemptyv: MF,
  rang: jF,
  Rang: UF,
  rangd: BF,
  range: $F,
  rangle: VF,
  raquo: zF,
  rarrap: HF,
  rarrb: XF,
  rarrbfs: GF,
  rarrc: WF,
  rarr: YF,
  Rarr: KF,
  rArr: JF,
  rarrfs: QF,
  rarrhk: ZF,
  rarrlp: eq,
  rarrpl: tq,
  rarrsim: nq,
  Rarrtl: rq,
  rarrtl: oq,
  rarrw: iq,
  ratail: sq,
  rAtail: aq,
  ratio: cq,
  rationals: lq,
  rbarr: uq,
  rBarr: pq,
  RBarr: dq,
  rbbrk: fq,
  rbrace: mq,
  rbrack: hq,
  rbrke: gq,
  rbrksld: yq,
  rbrkslu: vq,
  Rcaron: bq,
  rcaron: xq,
  Rcedil: wq,
  rcedil: Eq,
  rceil: Tq,
  rcub: Sq,
  Rcy: Nq,
  rcy: Oq,
  rdca: Aq,
  rdldhar: _q,
  rdquo: Dq,
  rdquor: Lq,
  rdsh: Cq,
  real: Rq,
  realine: Pq,
  realpart: Iq,
  reals: kq,
  Re: Fq,
  rect: qq,
  reg: Mq,
  REG: jq,
  ReverseElement: Uq,
  ReverseEquilibrium: Bq,
  ReverseUpEquilibrium: $q,
  rfisht: Vq,
  rfloor: zq,
  rfr: Hq,
  Rfr: Xq,
  rHar: Gq,
  rhard: Wq,
  rharu: Yq,
  rharul: Kq,
  Rho: Jq,
  rho: Qq,
  rhov: Zq,
  RightAngleBracket: eM,
  RightArrowBar: tM,
  rightarrow: nM,
  RightArrow: rM,
  Rightarrow: oM,
  RightArrowLeftArrow: iM,
  rightarrowtail: sM,
  RightCeiling: aM,
  RightDoubleBracket: cM,
  RightDownTeeVector: lM,
  RightDownVectorBar: uM,
  RightDownVector: pM,
  RightFloor: dM,
  rightharpoondown: fM,
  rightharpoonup: mM,
  rightleftarrows: hM,
  rightleftharpoons: gM,
  rightrightarrows: yM,
  rightsquigarrow: vM,
  RightTeeArrow: bM,
  RightTee: xM,
  RightTeeVector: wM,
  rightthreetimes: EM,
  RightTriangleBar: TM,
  RightTriangle: SM,
  RightTriangleEqual: NM,
  RightUpDownVector: OM,
  RightUpTeeVector: AM,
  RightUpVectorBar: _M,
  RightUpVector: DM,
  RightVectorBar: LM,
  RightVector: CM,
  ring: RM,
  risingdotseq: PM,
  rlarr: IM,
  rlhar: kM,
  rlm: FM,
  rmoustache: qM,
  rmoust: MM,
  rnmid: jM,
  roang: UM,
  roarr: BM,
  robrk: $M,
  ropar: VM,
  ropf: zM,
  Ropf: HM,
  roplus: XM,
  rotimes: GM,
  RoundImplies: WM,
  rpar: YM,
  rpargt: KM,
  rppolint: JM,
  rrarr: QM,
  Rrightarrow: ZM,
  rsaquo: ej,
  rscr: tj,
  Rscr: nj,
  rsh: rj,
  Rsh: oj,
  rsqb: ij,
  rsquo: sj,
  rsquor: aj,
  rthree: cj,
  rtimes: lj,
  rtri: uj,
  rtrie: pj,
  rtrif: dj,
  rtriltri: fj,
  RuleDelayed: mj,
  ruluhar: hj,
  rx: gj,
  Sacute: yj,
  sacute: vj,
  sbquo: bj,
  scap: xj,
  Scaron: wj,
  scaron: Ej,
  Sc: Tj,
  sc: Sj,
  sccue: Nj,
  sce: Oj,
  scE: Aj,
  Scedil: _j,
  scedil: Dj,
  Scirc: Lj,
  scirc: Cj,
  scnap: Rj,
  scnE: Pj,
  scnsim: Ij,
  scpolint: kj,
  scsim: Fj,
  Scy: qj,
  scy: Mj,
  sdotb: jj,
  sdot: Uj,
  sdote: Bj,
  searhk: $j,
  searr: Vj,
  seArr: zj,
  searrow: Hj,
  sect: Xj,
  semi: Gj,
  seswar: Wj,
  setminus: Yj,
  setmn: Kj,
  sext: Jj,
  Sfr: Qj,
  sfr: Zj,
  sfrown: e2,
  sharp: t2,
  SHCHcy: n2,
  shchcy: r2,
  SHcy: o2,
  shcy: i2,
  ShortDownArrow: s2,
  ShortLeftArrow: a2,
  shortmid: c2,
  shortparallel: l2,
  ShortRightArrow: u2,
  ShortUpArrow: p2,
  shy: d2,
  Sigma: f2,
  sigma: m2,
  sigmaf: h2,
  sigmav: g2,
  sim: y2,
  simdot: v2,
  sime: b2,
  simeq: x2,
  simg: w2,
  simgE: E2,
  siml: T2,
  simlE: S2,
  simne: N2,
  simplus: O2,
  simrarr: A2,
  slarr: _2,
  SmallCircle: D2,
  smallsetminus: L2,
  smashp: C2,
  smeparsl: R2,
  smid: P2,
  smile: I2,
  smt: k2,
  smte: F2,
  smtes: q2,
  SOFTcy: M2,
  softcy: j2,
  solbar: U2,
  solb: B2,
  sol: $2,
  Sopf: V2,
  sopf: z2,
  spades: H2,
  spadesuit: X2,
  spar: G2,
  sqcap: W2,
  sqcaps: Y2,
  sqcup: K2,
  sqcups: J2,
  Sqrt: Q2,
  sqsub: Z2,
  sqsube: eU,
  sqsubset: tU,
  sqsubseteq: nU,
  sqsup: rU,
  sqsupe: oU,
  sqsupset: iU,
  sqsupseteq: sU,
  square: aU,
  Square: cU,
  SquareIntersection: lU,
  SquareSubset: uU,
  SquareSubsetEqual: pU,
  SquareSuperset: dU,
  SquareSupersetEqual: fU,
  SquareUnion: mU,
  squarf: hU,
  squ: gU,
  squf: yU,
  srarr: vU,
  Sscr: bU,
  sscr: xU,
  ssetmn: wU,
  ssmile: EU,
  sstarf: TU,
  Star: SU,
  star: NU,
  starf: OU,
  straightepsilon: AU,
  straightphi: _U,
  strns: DU,
  sub: LU,
  Sub: CU,
  subdot: RU,
  subE: PU,
  sube: IU,
  subedot: kU,
  submult: FU,
  subnE: qU,
  subne: MU,
  subplus: jU,
  subrarr: UU,
  subset: BU,
  Subset: $U,
  subseteq: VU,
  subseteqq: zU,
  SubsetEqual: HU,
  subsetneq: XU,
  subsetneqq: GU,
  subsim: WU,
  subsub: YU,
  subsup: KU,
  succapprox: JU,
  succ: QU,
  succcurlyeq: ZU,
  Succeeds: eB,
  SucceedsEqual: tB,
  SucceedsSlantEqual: nB,
  SucceedsTilde: rB,
  succeq: oB,
  succnapprox: iB,
  succneqq: sB,
  succnsim: aB,
  succsim: cB,
  SuchThat: lB,
  sum: uB,
  Sum: pB,
  sung: dB,
  sup1: fB,
  sup2: mB,
  sup3: hB,
  sup: gB,
  Sup: yB,
  supdot: vB,
  supdsub: bB,
  supE: xB,
  supe: wB,
  supedot: EB,
  Superset: TB,
  SupersetEqual: SB,
  suphsol: NB,
  suphsub: OB,
  suplarr: AB,
  supmult: _B,
  supnE: DB,
  supne: LB,
  supplus: CB,
  supset: RB,
  Supset: PB,
  supseteq: IB,
  supseteqq: kB,
  supsetneq: FB,
  supsetneqq: qB,
  supsim: MB,
  supsub: jB,
  supsup: UB,
  swarhk: BB,
  swarr: $B,
  swArr: VB,
  swarrow: zB,
  swnwar: HB,
  szlig: XB,
  Tab: GB,
  target: WB,
  Tau: YB,
  tau: KB,
  tbrk: JB,
  Tcaron: QB,
  tcaron: ZB,
  Tcedil: e$,
  tcedil: t$,
  Tcy: n$,
  tcy: r$,
  tdot: o$,
  telrec: i$,
  Tfr: s$,
  tfr: a$,
  there4: c$,
  therefore: l$,
  Therefore: u$,
  Theta: p$,
  theta: d$,
  thetasym: f$,
  thetav: m$,
  thickapprox: h$,
  thicksim: g$,
  ThickSpace: y$,
  ThinSpace: v$,
  thinsp: b$,
  thkap: x$,
  thksim: w$,
  THORN: E$,
  thorn: T$,
  tilde: S$,
  Tilde: N$,
  TildeEqual: O$,
  TildeFullEqual: A$,
  TildeTilde: _$,
  timesbar: D$,
  timesb: L$,
  times: C$,
  timesd: R$,
  tint: P$,
  toea: I$,
  topbot: k$,
  topcir: F$,
  top: q$,
  Topf: M$,
  topf: j$,
  topfork: U$,
  tosa: B$,
  tprime: $$,
  trade: V$,
  TRADE: z$,
  triangle: H$,
  triangledown: X$,
  triangleleft: G$,
  trianglelefteq: W$,
  triangleq: Y$,
  triangleright: K$,
  trianglerighteq: J$,
  tridot: Q$,
  trie: Z$,
  triminus: e3,
  TripleDot: t3,
  triplus: n3,
  trisb: r3,
  tritime: o3,
  trpezium: i3,
  Tscr: s3,
  tscr: a3,
  TScy: c3,
  tscy: l3,
  TSHcy: u3,
  tshcy: p3,
  Tstrok: d3,
  tstrok: f3,
  twixt: m3,
  twoheadleftarrow: h3,
  twoheadrightarrow: g3,
  Uacute: y3,
  uacute: v3,
  uarr: b3,
  Uarr: x3,
  uArr: w3,
  Uarrocir: E3,
  Ubrcy: T3,
  ubrcy: S3,
  Ubreve: N3,
  ubreve: O3,
  Ucirc: A3,
  ucirc: _3,
  Ucy: D3,
  ucy: L3,
  udarr: C3,
  Udblac: R3,
  udblac: P3,
  udhar: I3,
  ufisht: k3,
  Ufr: F3,
  ufr: q3,
  Ugrave: M3,
  ugrave: j3,
  uHar: U3,
  uharl: B3,
  uharr: $3,
  uhblk: V3,
  ulcorn: z3,
  ulcorner: H3,
  ulcrop: X3,
  ultri: G3,
  Umacr: W3,
  umacr: Y3,
  uml: K3,
  UnderBar: J3,
  UnderBrace: Q3,
  UnderBracket: Z3,
  UnderParenthesis: eV,
  Union: tV,
  UnionPlus: nV,
  Uogon: rV,
  uogon: oV,
  Uopf: iV,
  uopf: sV,
  UpArrowBar: aV,
  uparrow: cV,
  UpArrow: lV,
  Uparrow: uV,
  UpArrowDownArrow: pV,
  updownarrow: dV,
  UpDownArrow: fV,
  Updownarrow: mV,
  UpEquilibrium: hV,
  upharpoonleft: gV,
  upharpoonright: yV,
  uplus: vV,
  UpperLeftArrow: bV,
  UpperRightArrow: xV,
  upsi: wV,
  Upsi: EV,
  upsih: TV,
  Upsilon: SV,
  upsilon: NV,
  UpTeeArrow: OV,
  UpTee: AV,
  upuparrows: _V,
  urcorn: DV,
  urcorner: LV,
  urcrop: CV,
  Uring: RV,
  uring: PV,
  urtri: IV,
  Uscr: kV,
  uscr: FV,
  utdot: qV,
  Utilde: MV,
  utilde: jV,
  utri: UV,
  utrif: BV,
  uuarr: $V,
  Uuml: VV,
  uuml: zV,
  uwangle: HV,
  vangrt: XV,
  varepsilon: GV,
  varkappa: WV,
  varnothing: YV,
  varphi: KV,
  varpi: JV,
  varpropto: QV,
  varr: ZV,
  vArr: e8,
  varrho: t8,
  varsigma: n8,
  varsubsetneq: r8,
  varsubsetneqq: o8,
  varsupsetneq: i8,
  varsupsetneqq: s8,
  vartheta: a8,
  vartriangleleft: c8,
  vartriangleright: l8,
  vBar: u8,
  Vbar: p8,
  vBarv: d8,
  Vcy: f8,
  vcy: m8,
  vdash: h8,
  vDash: g8,
  Vdash: y8,
  VDash: v8,
  Vdashl: b8,
  veebar: x8,
  vee: w8,
  Vee: E8,
  veeeq: T8,
  vellip: S8,
  verbar: N8,
  Verbar: O8,
  vert: A8,
  Vert: _8,
  VerticalBar: D8,
  VerticalLine: L8,
  VerticalSeparator: C8,
  VerticalTilde: R8,
  VeryThinSpace: P8,
  Vfr: I8,
  vfr: k8,
  vltri: F8,
  vnsub: q8,
  vnsup: M8,
  Vopf: j8,
  vopf: U8,
  vprop: B8,
  vrtri: $8,
  Vscr: V8,
  vscr: z8,
  vsubnE: H8,
  vsubne: X8,
  vsupnE: G8,
  vsupne: W8,
  Vvdash: Y8,
  vzigzag: K8,
  Wcirc: J8,
  wcirc: Q8,
  wedbar: Z8,
  wedge: ez,
  Wedge: tz,
  wedgeq: nz,
  weierp: rz,
  Wfr: oz,
  wfr: iz,
  Wopf: sz,
  wopf: az,
  wp: cz,
  wr: lz,
  wreath: uz,
  Wscr: pz,
  wscr: dz,
  xcap: fz,
  xcirc: mz,
  xcup: hz,
  xdtri: gz,
  Xfr: yz,
  xfr: vz,
  xharr: bz,
  xhArr: xz,
  Xi: wz,
  xi: Ez,
  xlarr: Tz,
  xlArr: Sz,
  xmap: Nz,
  xnis: Oz,
  xodot: Az,
  Xopf: _z,
  xopf: Dz,
  xoplus: Lz,
  xotime: Cz,
  xrarr: Rz,
  xrArr: Pz,
  Xscr: Iz,
  xscr: kz,
  xsqcup: Fz,
  xuplus: qz,
  xutri: Mz,
  xvee: jz,
  xwedge: Uz,
  Yacute: Bz,
  yacute: $z,
  YAcy: Vz,
  yacy: zz,
  Ycirc: Hz,
  ycirc: Xz,
  Ycy: Gz,
  ycy: Wz,
  yen: Yz,
  Yfr: Kz,
  yfr: Jz,
  YIcy: Qz,
  yicy: Zz,
  Yopf: e4,
  yopf: t4,
  Yscr: n4,
  yscr: r4,
  YUcy: o4,
  yucy: i4,
  yuml: s4,
  Yuml: a4,
  Zacute: c4,
  zacute: l4,
  Zcaron: u4,
  zcaron: p4,
  Zcy: d4,
  zcy: f4,
  Zdot: m4,
  zdot: h4,
  zeetrf: g4,
  ZeroWidthSpace: y4,
  Zeta: v4,
  zeta: b4,
  zfr: x4,
  Zfr: w4,
  ZHcy: E4,
  zhcy: T4,
  zigrarr: S4,
  zopf: N4,
  Zopf: O4,
  Zscr: A4,
  zscr: _4,
  zwj: D4,
  zwnj: L4
}, C4 = "Á", R4 = "á", P4 = "Â", I4 = "â", k4 = "´", F4 = "Æ", q4 = "æ", M4 = "À", j4 = "à", U4 = "&", B4 = "&", $4 = "Å", V4 = "å", z4 = "Ã", H4 = "ã", X4 = "Ä", G4 = "ä", W4 = "¦", Y4 = "Ç", K4 = "ç", J4 = "¸", Q4 = "¢", Z4 = "©", eH = "©", tH = "¤", nH = "°", rH = "÷", oH = "É", iH = "é", sH = "Ê", aH = "ê", cH = "È", lH = "è", uH = "Ð", pH = "ð", dH = "Ë", fH = "ë", mH = "½", hH = "¼", gH = "¾", yH = ">", vH = ">", bH = "Í", xH = "í", wH = "Î", EH = "î", TH = "¡", SH = "Ì", NH = "ì", OH = "¿", AH = "Ï", _H = "ï", DH = "«", LH = "<", CH = "<", RH = "¯", PH = "µ", IH = "·", kH = " ", FH = "¬", qH = "Ñ", MH = "ñ", jH = "Ó", UH = "ó", BH = "Ô", $H = "ô", VH = "Ò", zH = "ò", HH = "ª", XH = "º", GH = "Ø", WH = "ø", YH = "Õ", KH = "õ", JH = "Ö", QH = "ö", ZH = "¶", eX = "±", tX = "£", nX = '"', rX = '"', oX = "»", iX = "®", sX = "®", aX = "§", cX = "­", lX = "¹", uX = "²", pX = "³", dX = "ß", fX = "Þ", mX = "þ", hX = "×", gX = "Ú", yX = "ú", vX = "Û", bX = "û", xX = "Ù", wX = "ù", EX = "¨", TX = "Ü", SX = "ü", NX = "Ý", OX = "ý", AX = "¥", _X = "ÿ", DX = {
  Aacute: C4,
  aacute: R4,
  Acirc: P4,
  acirc: I4,
  acute: k4,
  AElig: F4,
  aelig: q4,
  Agrave: M4,
  agrave: j4,
  amp: U4,
  AMP: B4,
  Aring: $4,
  aring: V4,
  Atilde: z4,
  atilde: H4,
  Auml: X4,
  auml: G4,
  brvbar: W4,
  Ccedil: Y4,
  ccedil: K4,
  cedil: J4,
  cent: Q4,
  copy: Z4,
  COPY: eH,
  curren: tH,
  deg: nH,
  divide: rH,
  Eacute: oH,
  eacute: iH,
  Ecirc: sH,
  ecirc: aH,
  Egrave: cH,
  egrave: lH,
  ETH: uH,
  eth: pH,
  Euml: dH,
  euml: fH,
  frac12: mH,
  frac14: hH,
  frac34: gH,
  gt: yH,
  GT: vH,
  Iacute: bH,
  iacute: xH,
  Icirc: wH,
  icirc: EH,
  iexcl: TH,
  Igrave: SH,
  igrave: NH,
  iquest: OH,
  Iuml: AH,
  iuml: _H,
  laquo: DH,
  lt: LH,
  LT: CH,
  macr: RH,
  micro: PH,
  middot: IH,
  nbsp: kH,
  not: FH,
  Ntilde: qH,
  ntilde: MH,
  Oacute: jH,
  oacute: UH,
  Ocirc: BH,
  ocirc: $H,
  Ograve: VH,
  ograve: zH,
  ordf: HH,
  ordm: XH,
  Oslash: GH,
  oslash: WH,
  Otilde: YH,
  otilde: KH,
  Ouml: JH,
  ouml: QH,
  para: ZH,
  plusmn: eX,
  pound: tX,
  quot: nX,
  QUOT: rX,
  raquo: oX,
  reg: iX,
  REG: sX,
  sect: aX,
  shy: cX,
  sup1: lX,
  sup2: uX,
  sup3: pX,
  szlig: dX,
  THORN: fX,
  thorn: mX,
  times: hX,
  Uacute: gX,
  uacute: yX,
  Ucirc: vX,
  ucirc: bX,
  Ugrave: xX,
  ugrave: wX,
  uml: EX,
  Uuml: TX,
  uuml: SX,
  Yacute: NX,
  yacute: OX,
  yen: AX,
  yuml: _X
}, LX = "&", CX = "'", RX = ">", PX = "<", IX = '"', kc = {
  amp: LX,
  apos: CX,
  gt: RX,
  lt: PX,
  quot: IX
};
var Ai = {};
const kX = {
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
var FX = z && z.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ai, "__esModule", { value: !0 });
var zs = FX(kX), qX = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.fromCodePoint || function(t) {
    var e = "";
    return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), e += String.fromCharCode(t), e;
  }
);
function MX(t) {
  return t >= 55296 && t <= 57343 || t > 1114111 ? "�" : (t in zs.default && (t = zs.default[t]), qX(t));
}
Ai.default = MX;
var mr = z && z.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.decodeHTML = lt.decodeHTMLStrict = lt.decodeXML = void 0;
var Ho = mr(Ic), jX = mr(DX), UX = mr(kc), Hs = mr(Ai), BX = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
lt.decodeXML = Fc(UX.default);
lt.decodeHTMLStrict = Fc(Ho.default);
function Fc(t) {
  var e = qc(t);
  return function(n) {
    return String(n).replace(BX, e);
  };
}
var Xs = function(t, e) {
  return t < e ? 1 : -1;
};
lt.decodeHTML = function() {
  for (var t = Object.keys(jX.default).sort(Xs), e = Object.keys(Ho.default).sort(Xs), n = 0, r = 0; n < e.length; n++)
    t[r] === e[n] ? (e[n] += ";?", r++) : e[n] += ";";
  var o = new RegExp("&(?:" + e.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), i = qc(Ho.default);
  function s(a) {
    return a.substr(-1) !== ";" && (a += ";"), i(a);
  }
  return function(a) {
    return String(a).replace(o, s);
  };
}();
function qc(t) {
  return function(n) {
    if (n.charAt(1) === "#") {
      var r = n.charAt(2);
      return r === "X" || r === "x" ? Hs.default(parseInt(n.substr(3), 16)) : Hs.default(parseInt(n.substr(2), 10));
    }
    return t[n.slice(1, -1)] || n;
  };
}
var Be = {}, Mc = z && z.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.escapeUTF8 = Be.escape = Be.encodeNonAsciiHTML = Be.encodeHTML = Be.encodeXML = void 0;
var $X = Mc(kc), jc = Bc($X.default), Uc = $c(jc);
Be.encodeXML = Hc(jc);
var VX = Mc(Ic), _i = Bc(VX.default), zX = $c(_i);
Be.encodeHTML = XX(_i, zX);
Be.encodeNonAsciiHTML = Hc(_i);
function Bc(t) {
  return Object.keys(t).sort().reduce(function(e, n) {
    return e[t[n]] = "&" + n + ";", e;
  }, {});
}
function $c(t) {
  for (var e = [], n = [], r = 0, o = Object.keys(t); r < o.length; r++) {
    var i = o[r];
    i.length === 1 ? e.push("\\" + i) : n.push(i);
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
var Vc = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, HX = (
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
function hr(t) {
  return "&#x" + (t.length > 1 ? HX(t) : t.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function XX(t, e) {
  return function(n) {
    return n.replace(e, function(r) {
      return t[r];
    }).replace(Vc, hr);
  };
}
var zc = new RegExp(Uc.source + "|" + Vc.source, "g");
function GX(t) {
  return t.replace(zc, hr);
}
Be.escape = GX;
function WX(t) {
  return t.replace(Uc, hr);
}
Be.escapeUTF8 = WX;
function Hc(t) {
  return function(e) {
    return e.replace(zc, function(n) {
      return t[n] || hr(n);
    });
  };
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.decodeXMLStrict = t.decodeHTML5Strict = t.decodeHTML4Strict = t.decodeHTML5 = t.decodeHTML4 = t.decodeHTMLStrict = t.decodeHTML = t.decodeXML = t.encodeHTML5 = t.encodeHTML4 = t.escapeUTF8 = t.escape = t.encodeNonAsciiHTML = t.encodeHTML = t.encodeXML = t.encode = t.decodeStrict = t.decode = void 0;
  var e = lt, n = Be;
  function r(c, p) {
    return (!p || p <= 0 ? e.decodeXML : e.decodeHTML)(c);
  }
  t.decode = r;
  function o(c, p) {
    return (!p || p <= 0 ? e.decodeXML : e.decodeHTMLStrict)(c);
  }
  t.decodeStrict = o;
  function i(c, p) {
    return (!p || p <= 0 ? n.encodeXML : n.encodeHTML)(c);
  }
  t.encode = i;
  var s = Be;
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
  var a = lt;
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
})(Pc);
const pt = Rc.exports = {}, YX = Pc, KX = it;
pt.stripHtml = function(t) {
  return t = t.replace(/([^\n])<\/?(h|br|p|ul|ol|li|blockquote|section|table|tr|div)(?:.|\n)*?>([^\n])/gm, `$1
$3`), t = t.replace(/<(?:.|\n)*?>/gm, ""), t;
};
pt.getSnippet = function(t) {
  return YX.decodeHTML(pt.stripHtml(t)).trim();
};
pt.getLink = function(t, e, n) {
  if (t) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].$.rel === e) return t[r].$.href;
    if (t[n]) return t[n].$.href;
  }
};
pt.getContent = function(t) {
  return typeof t._ == "string" ? t._ : typeof t == "object" ? new KX.Builder({ headless: !0, explicitRoot: !0, rootName: "div", renderOpts: { pretty: !1 } }).buildObject(t) : t;
};
pt.copyFromXML = function(t, e, n) {
  n.forEach(function(r) {
    let o = r, i = r, s = {};
    Array.isArray(r) && (o = r[0], i = r[1], r.length > 2 && (s = r[2]));
    const { keepArray: a, includeSnippet: c } = s;
    t[o] !== void 0 && (e[i] = a ? t[o] : t[o][0]), e[i] && typeof e[i]._ == "string" && (e[i] = e[i]._), c && e[i] && typeof e[i] == "string" && (e[i + "Snippet"] = pt.getSnippet(e[i]));
  });
};
pt.maybePromisify = function(t, e) {
  return t ? e.then(
    (n) => setTimeout(() => t(null, n)),
    (n) => setTimeout(() => t(n))
  ) : e;
};
const JX = "utf8", QX = /(encoding|charset)\s*=\s*(\S+)/, ZX = ["ascii", "utf8", "utf16le", "ucs2", "base64", "latin1", "binary", "hex"], e6 = {
  "utf-8": "utf8",
  "iso-8859-1": "latin1"
};
pt.getEncodingFromContentType = function(t) {
  t = t || "";
  let n = (t.match(QX) || [])[2] || "";
  return n = n.toLowerCase(), n = e6[n] || n, (!n || ZX.indexOf(n) === -1) && (n = JX), n;
};
var t6 = Rc.exports;
const n6 = lr, r6 = ur, o6 = it, Gs = Tn, In = dp, xe = t6, i6 = {
  "User-Agent": "rss-parser",
  Accept: "application/rss+xml"
}, s6 = 5, a6 = 6e4;
let c6 = class {
  constructor(e = {}) {
    e.headers = e.headers || {}, e.xml2js = e.xml2js || {}, e.customFields = e.customFields || {}, e.customFields.item = e.customFields.item || [], e.customFields.feed = e.customFields.feed || [], e.requestOptions = e.requestOptions || {}, e.maxRedirects || (e.maxRedirects = s6), e.timeout || (e.timeout = a6), this.options = e, this.xmlParser = new o6.Parser(this.options.xml2js);
  }
  parseString(e, n) {
    let r = new Promise((o, i) => {
      this.xmlParser.parseString(e, (s, a) => {
        if (s) return i(s);
        if (!a)
          return i(new Error("Unable to parse XML."));
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
              return i(new Error("default RSS version not recognized."));
          }
        else
          return i(new Error("Feed not recognized as RSS 1 or 2."));
        o(c);
      });
    });
    return r = xe.maybePromisify(n, r), r;
  }
  parseURL(e, n, r = 0) {
    let o = "", i = e.indexOf("https") === 0 ? r6.get : n6.get, s = Gs.parse(e), a = Object.assign({}, i6, this.options.headers), c = null, p = new Promise((l, u) => {
      const d = Object.assign({ headers: a }, s, this.options.requestOptions);
      i(d, (f) => {
        if (this.options.maxRedirects && f.statusCode >= 300 && f.statusCode < 400 && f.headers.location) {
          if (r === this.options.maxRedirects)
            return u(new Error("Too many redirects"));
          {
            const b = Gs.resolve(e, f.headers.location);
            return this.parseURL(b, null, r + 1).then(l, u);
          }
        } else if (f.statusCode >= 300)
          return u(new Error("Status code " + f.statusCode));
        let x = xe.getEncodingFromContentType(f.headers["content-type"]);
        f.setEncoding(x), f.on("data", (b) => {
          o += b;
        }), f.on("end", () => this.parseString(o).then(l, u));
      }).on("error", u), c = setTimeout(() => u(new Error("Request timed out after " + this.options.timeout + "ms")), this.options.timeout);
    }).then((l) => (clearTimeout(c), Promise.resolve(l)), (l) => (clearTimeout(c), Promise.reject(l)));
    return p = xe.maybePromisify(n, p), p;
  }
  buildAtomFeed(e) {
    let n = { items: [] };
    if (xe.copyFromXML(e.feed, n, this.options.customFields.feed), e.feed.link && (n.link = xe.getLink(e.feed.link, "alternate", 0), n.feedUrl = xe.getLink(e.feed.link, "self", 1)), e.feed.title) {
      let r = e.feed.title[0] || "";
      r._ && (r = r._), r && (n.title = r);
    }
    return e.feed.updated && (n.lastBuildDate = e.feed.updated[0]), n.items = (e.feed.entry || []).map((r) => this.parseItemAtom(r)), n;
  }
  parseItemAtom(e) {
    let n = {};
    if (xe.copyFromXML(e, n, this.options.customFields.item), e.title) {
      let r = e.title[0] || "";
      r._ && (r = r._), r && (n.title = r);
    }
    return e.link && e.link.length && (n.link = xe.getLink(e.link, "alternate", 0)), e.published && e.published.length && e.published[0].length && (n.pubDate = new Date(e.published[0]).toISOString()), !n.pubDate && e.updated && e.updated.length && e.updated[0].length && (n.pubDate = new Date(e.updated[0]).toISOString()), e.author && e.author.length && e.author[0].name && e.author[0].name.length && (n.author = e.author[0].name[0]), e.content && e.content.length && (n.content = xe.getContent(e.content[0]), n.contentSnippet = xe.getSnippet(n.content)), e.summary && e.summary.length && (n.summary = xe.getContent(e.summary[0])), e.id && (n.id = e.id[0]), this.setISODate(n), n;
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
    let n = e.rss.channel[0], r = n.item, o = this.buildRSS(n, r);
    return e.rss.$ && e.rss.$["xmlns:itunes"] && this.decorateItunes(o, n), o;
  }
  buildRSS(e, n) {
    n = n || [];
    let r = { items: [] }, o = In.feed.concat(this.options.customFields.feed), i = In.item.concat(this.options.customFields.item);
    if (e["atom:link"] && e["atom:link"][0] && e["atom:link"][0].$ && (r.feedUrl = e["atom:link"][0].$.href), e.image && e.image[0] && e.image[0].url) {
      r.image = {};
      let a = e.image[0];
      a.link && (r.image.link = a.link[0]), a.url && (r.image.url = a.url[0]), a.title && (r.image.title = a.title[0]), a.width && (r.image.width = a.width[0]), a.height && (r.image.height = a.height[0]);
    }
    const s = this.generatePaginationLinks(e);
    return Object.keys(s).length && (r.paginationLinks = s), xe.copyFromXML(e, r, o), r.items = n.map((a) => this.parseItemRss(a, i)), r;
  }
  parseItemRss(e, n) {
    let r = {};
    return xe.copyFromXML(e, r, n), e.enclosure && (r.enclosure = e.enclosure[0].$), e.description && (r.content = xe.getContent(e.description[0]), r.contentSnippet = xe.getSnippet(r.content)), e.guid && (r.guid = e.guid[0], r.guid._ && (r.guid = r.guid._)), e.$ && e.$["rdf:about"] && (r["rdf:about"] = e.$["rdf:about"]), e.category && (r.categories = e.category), this.setISODate(r), r;
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
      let o = {};
      n["itunes:owner"][0]["itunes:name"] && (o.name = n["itunes:owner"][0]["itunes:name"][0]), n["itunes:owner"][0]["itunes:email"] && (o.email = n["itunes:owner"][0]["itunes:email"][0]), e.itunes.owner = o;
    }
    if (n["itunes:image"]) {
      let o;
      o = n["itunes:image"][0] && n["itunes:image"][0].$ && n["itunes:image"][0].$.href ? n["itunes:image"][0].$.href : null, o && (e.itunes.image = o);
    }
    if (n["itunes:category"]) {
      const o = n["itunes:category"].map((i) => ({
        name: i && i.$ && i.$.text,
        subs: i["itunes:category"] ? i["itunes:category"].map((s) => ({
          name: s && s.$ && s.$.text
        })) : null
      }));
      e.itunes.categories = o.map((i) => i.name), e.itunes.categoriesWithSubs = o;
    }
    if (n["itunes:keywords"])
      if (n["itunes:keywords"].length > 1)
        e.itunes.keywords = n["itunes:keywords"].map(
          (o) => o && o.$ && o.$.text
        );
      else {
        let o = n["itunes:keywords"][0];
        o && typeof o._ == "string" && (o = o._), o && o.$ && o.$.text ? e.itunes.keywords = o.$.text.split(",") : typeof o == "string" && (e.itunes.keywords = o.split(","));
      }
    xe.copyFromXML(n, e.itunes, In.podcastFeed), r.forEach((o, i) => {
      let s = e.items[i];
      s.itunes = {}, xe.copyFromXML(o, s.itunes, In.podcastItem);
      let a = o["itunes:image"];
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
    return e["atom:link"].reduce((r, o) => (!o.$ || !n.includes(o.$.rel) || (r[o.$.rel] = o.$.href), r), {});
  }
};
var l6 = c6, u6 = l6;
const p6 = /* @__PURE__ */ rn(u6);
function Xc(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: d6 } = Object.prototype, { getPrototypeOf: Di } = Object, { iterator: gr, toStringTag: Gc } = Symbol, yr = /* @__PURE__ */ ((t) => (e) => {
  const n = d6.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), We = (t) => (t = t.toLowerCase(), (e) => yr(e) === t), vr = (t) => (e) => typeof e === t, { isArray: on } = Array, Qt = vr("undefined");
function Sn(t) {
  return t !== null && !Qt(t) && t.constructor !== null && !Qt(t.constructor) && Me(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Wc = We("ArrayBuffer");
function f6(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Wc(t.buffer), e;
}
const m6 = vr("string"), Me = vr("function"), Yc = vr("number"), Nn = (t) => t !== null && typeof t == "object", h6 = (t) => t === !0 || t === !1, Vn = (t) => {
  if (yr(t) !== "object")
    return !1;
  const e = Di(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Gc in t) && !(gr in t);
}, g6 = (t) => {
  if (!Nn(t) || Sn(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, y6 = We("Date"), v6 = We("File"), b6 = We("Blob"), x6 = We("FileList"), w6 = (t) => Nn(t) && Me(t.pipe), E6 = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Me(t.append) && ((e = yr(t)) === "formdata" || // detect form-data instance
  e === "object" && Me(t.toString) && t.toString() === "[object FormData]"));
}, T6 = We("URLSearchParams"), [S6, N6, O6, A6] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(We), _6 = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function On(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), on(t))
    for (r = 0, o = t.length; r < o; r++)
      e.call(null, t[r], r, t);
  else {
    if (Sn(t))
      return;
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], e.call(null, t[a], a, t);
  }
}
function Kc(t, e) {
  if (Sn(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], e === o.toLowerCase())
      return o;
  return null;
}
const Ot = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Jc = (t) => !Qt(t) && t !== Ot;
function Xo() {
  const { caseless: t, skipUndefined: e } = Jc(this) && this || {}, n = {}, r = (o, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const s = t && Kc(n, i) || i;
    Vn(n[s]) && Vn(o) ? n[s] = Xo(n[s], o) : Vn(o) ? n[s] = Xo({}, o) : on(o) ? n[s] = o.slice() : (!e || !Qt(o)) && (n[s] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && On(arguments[o], r);
  return n;
}
const D6 = (t, e, n, { allOwnKeys: r } = {}) => (On(
  e,
  (o, i) => {
    n && Me(o) ? Object.defineProperty(t, i, {
      value: Xc(o, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(t, i, {
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), t), L6 = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), C6 = (t, e, n, r) => {
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
}, R6 = (t, e, n, r) => {
  let o, i, s;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, t, e)) && !a[s] && (e[s] = t[s], a[s] = !0);
    t = n !== !1 && Di(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, P6 = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, I6 = (t) => {
  if (!t) return null;
  if (on(t)) return t;
  let e = t.length;
  if (!Yc(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, k6 = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Di(Uint8Array)), F6 = (t, e) => {
  const r = (t && t[gr]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, q6 = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, M6 = We("HTMLFormElement"), j6 = (t) => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), Ws = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), U6 = We("RegExp"), Qc = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  On(n, (o, i) => {
    let s;
    (s = e(o, i, t)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(t, r);
}, B6 = (t) => {
  Qc(t, (e, n) => {
    if (Me(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (Me(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, $6 = (t, e) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return on(t) ? r(t) : r(String(t).split(e)), n;
}, V6 = () => {
}, z6 = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function H6(t) {
  return !!(t && Me(t.append) && t[Gc] === "FormData" && t[gr]);
}
const X6 = (t) => {
  const e = new Array(10), n = (r, o) => {
    if (Nn(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (Sn(r))
        return r;
      if (!("toJSON" in r)) {
        e[o] = r;
        const i = on(r) ? [] : {};
        return On(r, (s, a) => {
          const c = n(s, o + 1);
          !Qt(c) && (i[a] = c);
        }), e[o] = void 0, i;
      }
    }
    return r;
  };
  return n(t, 0);
}, G6 = We("AsyncFunction"), W6 = (t) => t && (Nn(t) || Me(t)) && Me(t.then) && Me(t.catch), Zc = ((t, e) => t ? setImmediate : e ? ((n, r) => (Ot.addEventListener(
  "message",
  ({ source: o, data: i }) => {
    o === Ot && i === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Ot.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Me(Ot.postMessage)), Y6 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ot) : typeof process < "u" && process.nextTick || Zc, K6 = (t) => t != null && Me(t[gr]), N = {
  isArray: on,
  isArrayBuffer: Wc,
  isBuffer: Sn,
  isFormData: E6,
  isArrayBufferView: f6,
  isString: m6,
  isNumber: Yc,
  isBoolean: h6,
  isObject: Nn,
  isPlainObject: Vn,
  isEmptyObject: g6,
  isReadableStream: S6,
  isRequest: N6,
  isResponse: O6,
  isHeaders: A6,
  isUndefined: Qt,
  isDate: y6,
  isFile: v6,
  isBlob: b6,
  isRegExp: U6,
  isFunction: Me,
  isStream: w6,
  isURLSearchParams: T6,
  isTypedArray: k6,
  isFileList: x6,
  forEach: On,
  merge: Xo,
  extend: D6,
  trim: _6,
  stripBOM: L6,
  inherits: C6,
  toFlatObject: R6,
  kindOf: yr,
  kindOfTest: We,
  endsWith: P6,
  toArray: I6,
  forEachEntry: F6,
  matchAll: q6,
  isHTMLForm: M6,
  hasOwnProperty: Ws,
  hasOwnProp: Ws,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Qc,
  freezeMethods: B6,
  toObjectSet: $6,
  toCamelCase: j6,
  noop: V6,
  toFiniteNumber: z6,
  findKey: Kc,
  global: Ot,
  isContextDefined: Jc,
  isSpecCompliantForm: H6,
  toJSONObject: X6,
  isAsyncFn: G6,
  isThenable: W6,
  setImmediate: Zc,
  asap: Y6,
  isIterable: K6
};
let F = class el extends Error {
  static from(e, n, r, o, i, s) {
    const a = new el(e.message, n || e.code, r, o, i);
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
  constructor(e, n, r, o, i) {
    super(e), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), o && (this.request = o), i && (this.response = i, this.status = i.status);
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
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
F.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
F.ERR_BAD_OPTION = "ERR_BAD_OPTION";
F.ECONNABORTED = "ECONNABORTED";
F.ETIMEDOUT = "ETIMEDOUT";
F.ERR_NETWORK = "ERR_NETWORK";
F.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
F.ERR_DEPRECATED = "ERR_DEPRECATED";
F.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
F.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
F.ERR_CANCELED = "ERR_CANCELED";
F.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
F.ERR_INVALID_URL = "ERR_INVALID_URL";
var tl = De.Stream, J6 = bt, Q6 = Ye;
function Ye() {
  this.source = null, this.dataSize = 0, this.maxDataSize = 1024 * 1024, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
}
J6.inherits(Ye, tl);
Ye.create = function(t, e) {
  var n = new this();
  e = e || {};
  for (var r in e)
    n[r] = e[r];
  n.source = t;
  var o = t.emit;
  return t.emit = function() {
    return n._handleEmit(arguments), o.apply(t, arguments);
  }, t.on("error", function() {
  }), n.pauseStream && t.pause(), n;
};
Object.defineProperty(Ye.prototype, "readable", {
  configurable: !0,
  enumerable: !0,
  get: function() {
    return this.source.readable;
  }
});
Ye.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};
Ye.prototype.resume = function() {
  this._released || this.release(), this.source.resume();
};
Ye.prototype.pause = function() {
  this.source.pause();
};
Ye.prototype.release = function() {
  this._released = !0, this._bufferedEvents.forEach((function(t) {
    this.emit.apply(this, t);
  }).bind(this)), this._bufferedEvents = [];
};
Ye.prototype.pipe = function() {
  var t = tl.prototype.pipe.apply(this, arguments);
  return this.resume(), t;
};
Ye.prototype._handleEmit = function(t) {
  if (this._released) {
    this.emit.apply(this, t);
    return;
  }
  t[0] === "data" && (this.dataSize += t[1].length, this._checkIfMaxDataSizeExceeded()), this._bufferedEvents.push(t);
};
Ye.prototype._checkIfMaxDataSizeExceeded = function() {
  if (!this._maxDataSizeExceeded && !(this.dataSize <= this.maxDataSize)) {
    this._maxDataSizeExceeded = !0;
    var t = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", new Error(t));
  }
};
var Z6 = bt, nl = De.Stream, Ys = Q6, eG = le;
function le() {
  this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2 * 1024 * 1024, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
}
Z6.inherits(le, nl);
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
    if (!(t instanceof Ys)) {
      var n = Ys.create(t, {
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
  return nl.prototype.pipe.call(this, t, e), this.resume(), t;
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
var rl = {};
const tG = {
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
var nG = tG;
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(t) {
  var e = nG, n = Q.extname, r = /^\s*([^;\s]*)(?:;|\s|$)/, o = /^text\//i;
  t.charset = i, t.charsets = { lookup: i }, t.contentType = s, t.extension = a, t.extensions = /* @__PURE__ */ Object.create(null), t.lookup = c, t.types = /* @__PURE__ */ Object.create(null), p(t.extensions, t.types);
  function i(l) {
    if (!l || typeof l != "string")
      return !1;
    var u = r.exec(l), d = u && e[u[1].toLowerCase()];
    return d && d.charset ? d.charset : u && o.test(u[1]) ? "UTF-8" : !1;
  }
  function s(l) {
    if (!l || typeof l != "string")
      return !1;
    var u = l.indexOf("/") === -1 ? t.lookup(l) : l;
    if (!u)
      return !1;
    if (u.indexOf("charset") === -1) {
      var d = t.charset(u);
      d && (u += "; charset=" + d.toLowerCase());
    }
    return u;
  }
  function a(l) {
    if (!l || typeof l != "string")
      return !1;
    var u = r.exec(l), d = u && t.extensions[u[1].toLowerCase()];
    return !d || !d.length ? !1 : d[0];
  }
  function c(l) {
    if (!l || typeof l != "string")
      return !1;
    var u = n("x." + l).toLowerCase().substr(1);
    return u && t.types[u] || !1;
  }
  function p(l, u) {
    var d = ["nginx", "apache", void 0, "iana"];
    Object.keys(e).forEach(function(f) {
      var x = e[f], b = x.extensions;
      if (!(!b || !b.length)) {
        l[f] = b;
        for (var S = 0; S < b.length; S++) {
          var w = b[S];
          if (u[w]) {
            var y = d.indexOf(e[u[w]].source), E = d.indexOf(x.source);
            if (u[w] !== "application/octet-stream" && (y > E || y === E && u[w].substr(0, 12) === "application/"))
              continue;
          }
          u[w] = f;
        }
      }
    });
  }
})(rl);
var rG = oG;
function oG(t) {
  var e = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
  e ? e(t) : setTimeout(t, 0);
}
var Ks = rG, ol = iG;
function iG(t) {
  var e = !1;
  return Ks(function() {
    e = !0;
  }), function(r, o) {
    e ? t(r, o) : Ks(function() {
      t(r, o);
    });
  };
}
var il = sG;
function sG(t) {
  Object.keys(t.jobs).forEach(aG.bind(t)), t.jobs = {};
}
function aG(t) {
  typeof this.jobs[t] == "function" && this.jobs[t]();
}
var Js = ol, cG = il, sl = lG;
function lG(t, e, n, r) {
  var o = n.keyedList ? n.keyedList[n.index] : n.index;
  n.jobs[o] = uG(e, o, t[o], function(i, s) {
    o in n.jobs && (delete n.jobs[o], i ? cG(n) : n.results[o] = s, r(i, n.results));
  });
}
function uG(t, e, n, r) {
  var o;
  return t.length == 2 ? o = t(n, Js(r)) : o = t(n, e, Js(r)), o;
}
var al = pG;
function pG(t, e) {
  var n = !Array.isArray(t), r = {
    index: 0,
    keyedList: n || e ? Object.keys(t) : null,
    jobs: {},
    results: n ? {} : [],
    size: n ? Object.keys(t).length : t.length
  };
  return e && r.keyedList.sort(n ? e : function(o, i) {
    return e(t[o], t[i]);
  }), r;
}
var dG = il, fG = ol, cl = mG;
function mG(t) {
  Object.keys(this.jobs).length && (this.index = this.size, dG(this), fG(t)(null, this.results));
}
var hG = sl, gG = al, yG = cl, vG = bG;
function bG(t, e, n) {
  for (var r = gG(t); r.index < (r.keyedList || t).length; )
    hG(t, e, r, function(o, i) {
      if (o) {
        n(o, i);
        return;
      }
      if (Object.keys(r.jobs).length === 0) {
        n(null, r.results);
        return;
      }
    }), r.index++;
  return yG.bind(r, n);
}
var br = { exports: {} }, Qs = sl, xG = al, wG = cl;
br.exports = EG;
br.exports.ascending = ll;
br.exports.descending = TG;
function EG(t, e, n, r) {
  var o = xG(t, n);
  return Qs(t, e, o, function i(s, a) {
    if (s) {
      r(s, a);
      return;
    }
    if (o.index++, o.index < (o.keyedList || t).length) {
      Qs(t, e, o, i);
      return;
    }
    r(null, o.results);
  }), wG.bind(o, r);
}
function ll(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function TG(t, e) {
  return -1 * ll(t, e);
}
var ul = br.exports, SG = ul, NG = OG;
function OG(t, e, n) {
  return SG(t, e, null, n);
}
var AG = {
  parallel: vG,
  serial: NG,
  serialOrdered: ul
}, pl = Object, _G = Error, DG = EvalError, LG = RangeError, CG = ReferenceError, RG = SyntaxError, Li = TypeError, PG = URIError, IG = Math.abs, kG = Math.floor, FG = Math.max, qG = Math.min, MG = Math.pow, jG = Math.round, UG = Number.isNaN || function(e) {
  return e !== e;
}, BG = UG, $G = function(e) {
  return BG(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, VG = Object.getOwnPropertyDescriptor, zn = VG;
if (zn)
  try {
    zn([], "length");
  } catch {
    zn = null;
  }
var dl = zn, Hn = Object.defineProperty || !1;
if (Hn)
  try {
    Hn({}, "a", { value: 1 });
  } catch {
    Hn = !1;
  }
var zG = Hn, fo, Zs;
function fl() {
  return Zs || (Zs = 1, fo = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, n = Symbol("test"), r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var o = 42;
    e[n] = o;
    for (var i in e)
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
      if (a.value !== o || a.enumerable !== !0)
        return !1;
    }
    return !0;
  }), fo;
}
var mo, ea;
function HG() {
  if (ea) return mo;
  ea = 1;
  var t = typeof Symbol < "u" && Symbol, e = fl();
  return mo = function() {
    return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, mo;
}
var ho, ta;
function ml() {
  return ta || (ta = 1, ho = typeof Reflect < "u" && Reflect.getPrototypeOf || null), ho;
}
var go, na;
function hl() {
  if (na) return go;
  na = 1;
  var t = pl;
  return go = t.getPrototypeOf || null, go;
}
var XG = "Function.prototype.bind called on incompatible ", GG = Object.prototype.toString, WG = Math.max, YG = "[object Function]", ra = function(e, n) {
  for (var r = [], o = 0; o < e.length; o += 1)
    r[o] = e[o];
  for (var i = 0; i < n.length; i += 1)
    r[i + e.length] = n[i];
  return r;
}, KG = function(e, n) {
  for (var r = [], o = n, i = 0; o < e.length; o += 1, i += 1)
    r[i] = e[o];
  return r;
}, JG = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, QG = function(e) {
  var n = this;
  if (typeof n != "function" || GG.apply(n) !== YG)
    throw new TypeError(XG + n);
  for (var r = KG(arguments, 1), o, i = function() {
    if (this instanceof o) {
      var l = n.apply(
        this,
        ra(r, arguments)
      );
      return Object(l) === l ? l : this;
    }
    return n.apply(
      e,
      ra(r, arguments)
    );
  }, s = WG(0, n.length - r.length), a = [], c = 0; c < s; c++)
    a[c] = "$" + c;
  if (o = Function("binder", "return function (" + JG(a, ",") + "){ return binder.apply(this,arguments); }")(i), n.prototype) {
    var p = function() {
    };
    p.prototype = n.prototype, o.prototype = new p(), p.prototype = null;
  }
  return o;
}, ZG = QG, xr = Function.prototype.bind || ZG, yo, oa;
function Ci() {
  return oa || (oa = 1, yo = Function.prototype.call), yo;
}
var vo, ia;
function gl() {
  return ia || (ia = 1, vo = Function.prototype.apply), vo;
}
var bo, sa;
function e9() {
  return sa || (sa = 1, bo = typeof Reflect < "u" && Reflect && Reflect.apply), bo;
}
var xo, aa;
function t9() {
  if (aa) return xo;
  aa = 1;
  var t = xr, e = gl(), n = Ci(), r = e9();
  return xo = r || t.call(n, e), xo;
}
var wo, ca;
function n9() {
  if (ca) return wo;
  ca = 1;
  var t = xr, e = Li, n = Ci(), r = t9();
  return wo = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new e("a function is required");
    return r(t, n, i);
  }, wo;
}
var Eo, la;
function r9() {
  if (la) return Eo;
  la = 1;
  var t = n9(), e = dl, n;
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
  ), o = Object, i = o.getPrototypeOf;
  return Eo = r && typeof r.get == "function" ? t([r.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(a) {
      return i(a == null ? a : o(a));
    }
  ) : !1, Eo;
}
var To, ua;
function o9() {
  if (ua) return To;
  ua = 1;
  var t = ml(), e = hl(), n = r9();
  return To = t ? function(o) {
    return t(o);
  } : e ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return e(o);
  } : n ? function(o) {
    return n(o);
  } : null, To;
}
var i9 = Function.prototype.call, s9 = Object.prototype.hasOwnProperty, a9 = xr, Ri = a9.call(i9, s9), X, c9 = pl, l9 = _G, u9 = DG, p9 = LG, d9 = CG, Zt = RG, Gt = Li, f9 = PG, m9 = IG, h9 = kG, g9 = FG, y9 = qG, v9 = MG, b9 = jG, x9 = $G, yl = Function, So = function(t) {
  try {
    return yl('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, mn = dl, w9 = zG, No = function() {
  throw new Gt();
}, E9 = mn ? function() {
  try {
    return arguments.callee, No;
  } catch {
    try {
      return mn(arguments, "callee").get;
    } catch {
      return No;
    }
  }
}() : No, Bt = HG()(), ye = o9(), T9 = hl(), S9 = ml(), vl = gl(), An = Ci(), Vt = {}, N9 = typeof Uint8Array > "u" || !ye ? X : ye(Uint8Array), Rt = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? X : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? X : ArrayBuffer,
  "%ArrayIteratorPrototype%": Bt && ye ? ye([][Symbol.iterator]()) : X,
  "%AsyncFromSyncIteratorPrototype%": X,
  "%AsyncFunction%": Vt,
  "%AsyncGenerator%": Vt,
  "%AsyncGeneratorFunction%": Vt,
  "%AsyncIteratorPrototype%": Vt,
  "%Atomics%": typeof Atomics > "u" ? X : Atomics,
  "%BigInt%": typeof BigInt > "u" ? X : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? X : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? X : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? X : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": l9,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": u9,
  "%Float16Array%": typeof Float16Array > "u" ? X : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? X : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? X : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? X : FinalizationRegistry,
  "%Function%": yl,
  "%GeneratorFunction%": Vt,
  "%Int8Array%": typeof Int8Array > "u" ? X : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? X : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? X : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Bt && ye ? ye(ye([][Symbol.iterator]())) : X,
  "%JSON%": typeof JSON == "object" ? JSON : X,
  "%Map%": typeof Map > "u" ? X : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Bt || !ye ? X : ye((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": c9,
  "%Object.getOwnPropertyDescriptor%": mn,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? X : Promise,
  "%Proxy%": typeof Proxy > "u" ? X : Proxy,
  "%RangeError%": p9,
  "%ReferenceError%": d9,
  "%Reflect%": typeof Reflect > "u" ? X : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? X : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Bt || !ye ? X : ye((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? X : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Bt && ye ? ye(""[Symbol.iterator]()) : X,
  "%Symbol%": Bt ? Symbol : X,
  "%SyntaxError%": Zt,
  "%ThrowTypeError%": E9,
  "%TypedArray%": N9,
  "%TypeError%": Gt,
  "%Uint8Array%": typeof Uint8Array > "u" ? X : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? X : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? X : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? X : Uint32Array,
  "%URIError%": f9,
  "%WeakMap%": typeof WeakMap > "u" ? X : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? X : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? X : WeakSet,
  "%Function.prototype.call%": An,
  "%Function.prototype.apply%": vl,
  "%Object.defineProperty%": w9,
  "%Object.getPrototypeOf%": T9,
  "%Math.abs%": m9,
  "%Math.floor%": h9,
  "%Math.max%": g9,
  "%Math.min%": y9,
  "%Math.pow%": v9,
  "%Math.round%": b9,
  "%Math.sign%": x9,
  "%Reflect.getPrototypeOf%": S9
};
if (ye)
  try {
    null.error;
  } catch (t) {
    var O9 = ye(ye(t));
    Rt["%Error.prototype%"] = O9;
  }
var A9 = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = So("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = So("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = So("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && ye && (n = ye(o.prototype));
  }
  return Rt[e] = n, n;
}, pa = {
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
}, _n = xr, tr = Ri, _9 = _n.call(An, Array.prototype.concat), D9 = _n.call(vl, Array.prototype.splice), da = _n.call(An, String.prototype.replace), nr = _n.call(An, String.prototype.slice), L9 = _n.call(An, RegExp.prototype.exec), C9 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, R9 = /\\(\\)?/g, P9 = function(e) {
  var n = nr(e, 0, 1), r = nr(e, -1);
  if (n === "%" && r !== "%")
    throw new Zt("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new Zt("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return da(e, C9, function(i, s, a, c) {
    o[o.length] = a ? da(c, R9, "$1") : s || i;
  }), o;
}, I9 = function(e, n) {
  var r = e, o;
  if (tr(pa, r) && (o = pa[r], r = "%" + o[0] + "%"), tr(Rt, r)) {
    var i = Rt[r];
    if (i === Vt && (i = A9(r)), typeof i > "u" && !n)
      throw new Gt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: i
    };
  }
  throw new Zt("intrinsic " + e + " does not exist!");
}, k9 = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new Gt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Gt('"allowMissing" argument must be a boolean');
  if (L9(/^%?[^%]*%?$/, e) === null)
    throw new Zt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = P9(e), o = r.length > 0 ? r[0] : "", i = I9("%" + o + "%", n), s = i.name, a = i.value, c = !1, p = i.alias;
  p && (o = p[0], D9(r, _9([0, 1], p)));
  for (var l = 1, u = !0; l < r.length; l += 1) {
    var d = r[l], g = nr(d, 0, 1), f = nr(d, -1);
    if ((g === '"' || g === "'" || g === "`" || f === '"' || f === "'" || f === "`") && g !== f)
      throw new Zt("property names with quotes must have matching quotes");
    if ((d === "constructor" || !u) && (c = !0), o += "." + d, s = "%" + o + "%", tr(Rt, s))
      a = Rt[s];
    else if (a != null) {
      if (!(d in a)) {
        if (!n)
          throw new Gt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (mn && l + 1 >= r.length) {
        var x = mn(a, d);
        u = !!x, u && "get" in x && !("originalValue" in x.get) ? a = x.get : a = a[d];
      } else
        u = tr(a, d), a = a[d];
      u && !c && (Rt[s] = a);
    }
  }
  return a;
}, Oo, fa;
function F9() {
  if (fa) return Oo;
  fa = 1;
  var t = fl();
  return Oo = function() {
    return t() && !!Symbol.toStringTag;
  }, Oo;
}
var q9 = k9, ma = q9("%Object.defineProperty%", !0), M9 = F9()(), j9 = Ri, U9 = Li, kn = M9 ? Symbol.toStringTag : null, B9 = function(e, n) {
  var r = arguments.length > 2 && !!arguments[2] && arguments[2].force, o = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
  if (typeof r < "u" && typeof r != "boolean" || typeof o < "u" && typeof o != "boolean")
    throw new U9("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
  kn && (r || !j9(e, kn)) && (ma ? ma(e, kn, {
    configurable: !o,
    enumerable: !1,
    value: n,
    writable: !1
  }) : e[kn] = n);
}, $9 = function(t, e) {
  return Object.keys(e).forEach(function(n) {
    t[n] = t[n] || e[n];
  }), t;
}, Pi = eG, V9 = bt, Ao = Q, z9 = lr, H9 = ur, X9 = Tn.parse, G9 = pi, W9 = De.Stream, Y9 = bc, _o = rl, K9 = AG, J9 = B9, vt = Ri, Go = $9;
function K(t) {
  if (!(this instanceof K))
    return new K(t);
  this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], Pi.call(this), t = t || {};
  for (var e in t)
    this[e] = t[e];
}
V9.inherits(K, Pi);
K.LINE_BREAK = `\r
`;
K.DEFAULT_CONTENT_TYPE = "application/octet-stream";
K.prototype.append = function(t, e, n) {
  n = n || {}, typeof n == "string" && (n = { filename: n });
  var r = Pi.prototype.append.bind(this);
  if ((typeof e == "number" || e == null) && (e = String(e)), Array.isArray(e)) {
    this._error(new Error("Arrays are not supported."));
    return;
  }
  var o = this._multiPartHeader(t, e, n), i = this._multiPartFooter();
  r(o), r(e), r(i), this._trackLength(o, e, n);
};
K.prototype._trackLength = function(t, e, n) {
  var r = 0;
  n.knownLength != null ? r += Number(n.knownLength) : Buffer.isBuffer(e) ? r = e.length : typeof e == "string" && (r = Buffer.byteLength(e)), this._valueLength += r, this._overheadLength += Buffer.byteLength(t) + K.LINE_BREAK.length, !(!e || !e.path && !(e.readable && vt(e, "httpVersion")) && !(e instanceof W9)) && (n.knownLength || this._valuesToMeasure.push(e));
};
K.prototype._lengthRetriever = function(t, e) {
  vt(t, "fd") ? t.end != null && t.end != 1 / 0 && t.start != null ? e(null, t.end + 1 - (t.start ? t.start : 0)) : G9.stat(t.path, function(n, r) {
    if (n) {
      e(n);
      return;
    }
    var o = r.size - (t.start ? t.start : 0);
    e(null, o);
  }) : vt(t, "httpVersion") ? e(null, Number(t.headers["content-length"])) : vt(t, "httpModule") ? (t.on("response", function(n) {
    t.pause(), e(null, Number(n.headers["content-length"]));
  }), t.resume()) : e("Unknown stream");
};
K.prototype._multiPartHeader = function(t, e, n) {
  if (typeof n.header == "string")
    return n.header;
  var r = this._getContentDisposition(e, n), o = this._getContentType(e, n), i = "", s = {
    // add custom disposition as third element or keep it two elements if not
    "Content-Disposition": ["form-data", 'name="' + t + '"'].concat(r || []),
    // if no content type. allow it to be empty array
    "Content-Type": [].concat(o || [])
  };
  typeof n.header == "object" && Go(s, n.header);
  var a;
  for (var c in s)
    if (vt(s, c)) {
      if (a = s[c], a == null)
        continue;
      Array.isArray(a) || (a = [a]), a.length && (i += c + ": " + a.join("; ") + K.LINE_BREAK);
    }
  return "--" + this.getBoundary() + K.LINE_BREAK + i + K.LINE_BREAK;
};
K.prototype._getContentDisposition = function(t, e) {
  var n;
  if (typeof e.filepath == "string" ? n = Ao.normalize(e.filepath).replace(/\\/g, "/") : e.filename || t && (t.name || t.path) ? n = Ao.basename(e.filename || t && (t.name || t.path)) : t && t.readable && vt(t, "httpVersion") && (n = Ao.basename(t.client._httpMessage.path || "")), n)
    return 'filename="' + n + '"';
};
K.prototype._getContentType = function(t, e) {
  var n = e.contentType;
  return !n && t && t.name && (n = _o.lookup(t.name)), !n && t && t.path && (n = _o.lookup(t.path)), !n && t && t.readable && vt(t, "httpVersion") && (n = t.headers["content-type"]), !n && (e.filepath || e.filename) && (n = _o.lookup(e.filepath || e.filename)), !n && t && typeof t == "object" && (n = K.DEFAULT_CONTENT_TYPE), n;
};
K.prototype._multiPartFooter = function() {
  return (function(t) {
    var e = K.LINE_BREAK, n = this._streams.length === 0;
    n && (e += this._lastBoundary()), t(e);
  }).bind(this);
};
K.prototype._lastBoundary = function() {
  return "--" + this.getBoundary() + "--" + K.LINE_BREAK;
};
K.prototype.getHeaders = function(t) {
  var e, n = {
    "content-type": "multipart/form-data; boundary=" + this.getBoundary()
  };
  for (e in t)
    vt(t, e) && (n[e.toLowerCase()] = t[e]);
  return n;
};
K.prototype.setBoundary = function(t) {
  if (typeof t != "string")
    throw new TypeError("FormData boundary must be a string");
  this._boundary = t;
};
K.prototype.getBoundary = function() {
  return this._boundary || this._generateBoundary(), this._boundary;
};
K.prototype.getBuffer = function() {
  for (var t = new Buffer.alloc(0), e = this.getBoundary(), n = 0, r = this._streams.length; n < r; n++)
    typeof this._streams[n] != "function" && (Buffer.isBuffer(this._streams[n]) ? t = Buffer.concat([t, this._streams[n]]) : t = Buffer.concat([t, Buffer.from(this._streams[n])]), (typeof this._streams[n] != "string" || this._streams[n].substring(2, e.length + 2) !== e) && (t = Buffer.concat([t, Buffer.from(K.LINE_BREAK)])));
  return Buffer.concat([t, Buffer.from(this._lastBoundary())]);
};
K.prototype._generateBoundary = function() {
  this._boundary = "--------------------------" + Y9.randomBytes(12).toString("hex");
};
K.prototype.getLengthSync = function() {
  var t = this._overheadLength + this._valueLength;
  return this._streams.length && (t += this._lastBoundary().length), this.hasKnownLength() || this._error(new Error("Cannot calculate proper length in synchronous way.")), t;
};
K.prototype.hasKnownLength = function() {
  var t = !0;
  return this._valuesToMeasure.length && (t = !1), t;
};
K.prototype.getLength = function(t) {
  var e = this._overheadLength + this._valueLength;
  if (this._streams.length && (e += this._lastBoundary().length), !this._valuesToMeasure.length) {
    process.nextTick(t.bind(this, null, e));
    return;
  }
  K9.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, r) {
    if (n) {
      t(n);
      return;
    }
    r.forEach(function(o) {
      e += o;
    }), t(null, e);
  });
};
K.prototype.submit = function(t, e) {
  var n, r, o = { method: "post" };
  return typeof t == "string" ? (t = X9(t), r = Go({
    port: t.port,
    path: t.pathname,
    host: t.hostname,
    protocol: t.protocol
  }, o)) : (r = Go(t, o), r.port || (r.port = r.protocol === "https:" ? 443 : 80)), r.headers = this.getHeaders(t.headers), r.protocol === "https:" ? n = H9.request(r) : n = z9.request(r), this.getLength((function(i, s) {
    if (i && i !== "Unknown stream") {
      this._error(i);
      return;
    }
    if (s && n.setHeader("Content-Length", s), this.pipe(n), e) {
      var a, c = function(p, l) {
        return n.removeListener("error", c), n.removeListener("response", a), e.call(this, p, l);
      };
      a = c.bind(this, null), n.on("error", c), n.on("response", a);
    }
  }).bind(this)), n;
};
K.prototype._error = function(t) {
  this.error || (this.error = t, this.pause(), this.emit("error", t));
};
K.prototype.toString = function() {
  return "[object FormData]";
};
J9(K.prototype, "FormData");
var Q9 = K;
const bl = /* @__PURE__ */ rn(Q9);
function Wo(t) {
  return N.isPlainObject(t) || N.isArray(t);
}
function xl(t) {
  return N.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function ha(t, e, n) {
  return t ? t.concat(e).map(function(o, i) {
    return o = xl(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : e;
}
function Z9(t) {
  return N.isArray(t) && !t.some(Wo);
}
const e7 = N.toFlatObject(N, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function wr(t, e, n) {
  if (!N.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new (bl || FormData)(), n = N.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, b) {
    return !N.isUndefined(b[x]);
  });
  const r = n.metaTokens, o = n.visitor || l, i = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(e);
  if (!N.isFunction(o))
    throw new TypeError("visitor must be a function");
  function p(f) {
    if (f === null) return "";
    if (N.isDate(f))
      return f.toISOString();
    if (N.isBoolean(f))
      return f.toString();
    if (!c && N.isBlob(f))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(f) || N.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, x, b) {
    let S = f;
    if (f && !b && typeof f == "object") {
      if (N.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), f = JSON.stringify(f);
      else if (N.isArray(f) && Z9(f) || (N.isFileList(f) || N.endsWith(x, "[]")) && (S = N.toArray(f)))
        return x = xl(x), S.forEach(function(y, E) {
          !(N.isUndefined(y) || y === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ha([x], E, i) : s === null ? x : x + "[]",
            p(y)
          );
        }), !1;
    }
    return Wo(f) ? !0 : (e.append(ha(b, x, i), p(f)), !1);
  }
  const u = [], d = Object.assign(e7, {
    defaultVisitor: l,
    convertValue: p,
    isVisitable: Wo
  });
  function g(f, x) {
    if (!N.isUndefined(f)) {
      if (u.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      u.push(f), N.forEach(f, function(S, w) {
        (!(N.isUndefined(S) || S === null) && o.call(
          e,
          S,
          N.isString(w) ? w.trim() : w,
          x,
          d
        )) === !0 && g(S, x ? x.concat(w) : [w]);
      }), u.pop();
    }
  }
  if (!N.isObject(t))
    throw new TypeError("data must be an object");
  return g(t), e;
}
function ga(t) {
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
function wl(t, e) {
  this._pairs = [], t && wr(t, this, e);
}
const El = wl.prototype;
El.append = function(e, n) {
  this._pairs.push([e, n]);
};
El.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, ga);
  } : ga;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function t7(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ii(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || t7, o = N.isFunction(n) ? {
    serialize: n
  } : n, i = o && o.serialize;
  let s;
  if (i ? s = i(e, o) : s = N.isURLSearchParams(e) ? e.toString() : new wl(e, o).toString(r), s) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class ya {
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
    N.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Er = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, n7 = Tn.URLSearchParams, Do = "abcdefghijklmnopqrstuvwxyz", va = "0123456789", Tl = {
  DIGIT: va,
  ALPHA: Do,
  ALPHA_DIGIT: Do + Do.toUpperCase() + va
}, r7 = (t = 16, e = Tl.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e, o = new Uint32Array(t);
  bc.randomFillSync(o);
  for (let i = 0; i < t; i++)
    n += e[o[i] % r];
  return n;
}, o7 = {
  isNode: !0,
  classes: {
    URLSearchParams: n7,
    FormData: bl,
    Blob: typeof Blob < "u" && Blob || null
  },
  ALPHABET: Tl,
  generateString: r7,
  protocols: ["http", "https", "file", "data"]
}, ki = typeof window < "u" && typeof document < "u", Yo = typeof navigator == "object" && navigator || void 0, i7 = ki && (!Yo || ["ReactNative", "NativeScript", "NS"].indexOf(Yo.product) < 0), s7 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", a7 = ki && window.location.href || "http://localhost", c7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ki,
  hasStandardBrowserEnv: i7,
  hasStandardBrowserWebWorkerEnv: s7,
  navigator: Yo,
  origin: a7
}, Symbol.toStringTag, { value: "Module" })), ce = {
  ...c7,
  ...o7
};
function l7(t, e) {
  return wr(t, new ce.classes.URLSearchParams(), {
    visitor: function(n, r, o, i) {
      return ce.isNode && N.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function u7(t) {
  return N.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function p7(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], e[i] = t[i];
  return e;
}
function Sl(t) {
  function e(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= n.length;
    return s = !s && N.isArray(o) ? o.length : s, c ? (N.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !N.isObject(o[s])) && (o[s] = []), e(n, r, o[s], i) && N.isArray(o[s]) && (o[s] = p7(o[s])), !a);
  }
  if (N.isFormData(t) && N.isFunction(t.entries)) {
    const n = {};
    return N.forEachEntry(t, (r, o) => {
      e(u7(r), o, n, 0);
    }), n;
  }
  return null;
}
function d7(t, e, n) {
  if (N.isString(t))
    try {
      return (e || JSON.parse)(t), N.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Dn = {
  transitional: Er,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = N.isObject(e);
    if (i && N.isHTMLForm(e) && (e = new FormData(e)), N.isFormData(e))
      return o ? JSON.stringify(Sl(e)) : e;
    if (N.isArrayBuffer(e) || N.isBuffer(e) || N.isStream(e) || N.isFile(e) || N.isBlob(e) || N.isReadableStream(e))
      return e;
    if (N.isArrayBufferView(e))
      return e.buffer;
    if (N.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return l7(e, this.formSerializer).toString();
      if ((a = N.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return wr(
          a ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), d7(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Dn.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (N.isResponse(e) || N.isReadableStream(e))
      return e;
    if (e && N.isString(e) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? F.from(a, F.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: ce.classes.FormData,
    Blob: ce.classes.Blob
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
N.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Dn.headers[t] = {};
});
const f7 = N.toObjectSet([
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
]), m7 = (t) => {
  const e = {};
  let n, r, o;
  return t && t.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || e[n] && f7[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, ba = Symbol("internals");
function cn(t) {
  return t && String(t).trim().toLowerCase();
}
function Xn(t) {
  return t === !1 || t == null ? t : N.isArray(t) ? t.map(Xn) : String(t);
}
function h7(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const g7 = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Lo(t, e, n, r, o) {
  if (N.isFunction(r))
    return r.call(this, e, n);
  if (o && (e = n), !!N.isString(e)) {
    if (N.isString(r))
      return e.indexOf(r) !== -1;
    if (N.isRegExp(r))
      return r.test(e);
  }
}
function y7(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function v7(t, e) {
  const n = N.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, e, o, i, s);
      },
      configurable: !0
    });
  });
}
let Te = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const o = this;
    function i(a, c, p) {
      const l = cn(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const u = N.findKey(o, l);
      (!u || o[u] === void 0 || p === !0 || p === void 0 && o[u] !== !1) && (o[u || c] = Xn(a));
    }
    const s = (a, c) => N.forEach(a, (p, l) => i(p, l, c));
    if (N.isPlainObject(e) || e instanceof this.constructor)
      s(e, n);
    else if (N.isString(e) && (e = e.trim()) && !g7(e))
      s(m7(e), n);
    else if (N.isObject(e) && N.isIterable(e)) {
      let a = {}, c, p;
      for (const l of e) {
        if (!N.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[p = l[0]] = (c = a[p]) ? N.isArray(c) ? [...c, l[1]] : [c, l[1]] : l[1];
      }
      s(a, n);
    } else
      e != null && i(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = cn(e), e) {
      const r = N.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return h7(o);
        if (N.isFunction(n))
          return n.call(this, o, r);
        if (N.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = cn(e), e) {
      const r = N.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || Lo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = cn(s), s) {
        const a = N.findKey(r, s);
        a && (!n || Lo(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return N.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!e || Lo(this, this[i], i, e, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(e) {
    const n = this, r = {};
    return N.forEach(this, (o, i) => {
      const s = N.findKey(r, i);
      if (s) {
        n[s] = Xn(o), delete n[i];
        return;
      }
      const a = e ? y7(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Xn(o), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return N.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = e && N.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(e) {
    const r = (this[ba] = this[ba] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = cn(s);
      r[a] || (v7(o, s), r[a] = !0);
    }
    return N.isArray(e) ? e.forEach(i) : i(e), this;
  }
};
Te.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.reduceDescriptors(Te.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
N.freezeMethods(Te);
function Co(t, e) {
  const n = this || Dn, r = e || n, o = Te.from(r.headers);
  let i = r.data;
  return N.forEach(t, function(a) {
    i = a.call(n, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function Nl(t) {
  return !!(t && t.__CANCEL__);
}
let Ft = class extends F {
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
    super(e ?? "canceled", F.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Ht(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new F(
    "Request failed with status code " + n.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function b7(t) {
  return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function x7(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Fi(t, e, n) {
  let r = !b7(e);
  return t && (r || n == !1) ? x7(t, e) : e;
}
var Ol = {}, w7 = Tn.parse, E7 = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}, T7 = String.prototype.endsWith || function(t) {
  return t.length <= this.length && this.indexOf(t, this.length - t.length) !== -1;
};
function S7(t) {
  var e = typeof t == "string" ? w7(t) : t || {}, n = e.protocol, r = e.host, o = e.port;
  if (typeof r != "string" || !r || typeof n != "string" || (n = n.split(":", 1)[0], r = r.replace(/:\d*$/, ""), o = parseInt(o) || E7[n] || 0, !N7(r, o)))
    return "";
  var i = Xt("npm_config_" + n + "_proxy") || Xt(n + "_proxy") || Xt("npm_config_proxy") || Xt("all_proxy");
  return i && i.indexOf("://") === -1 && (i = n + "://" + i), i;
}
function N7(t, e) {
  var n = (Xt("npm_config_no_proxy") || Xt("no_proxy")).toLowerCase();
  return n ? n === "*" ? !1 : n.split(/[,\s]/).every(function(r) {
    if (!r)
      return !0;
    var o = r.match(/^(.+):(\d+)$/), i = o ? o[1] : r, s = o ? parseInt(o[2]) : 0;
    return s && s !== e ? !0 : /^[.*]/.test(i) ? (i.charAt(0) === "*" && (i = i.slice(1)), !T7.call(t, i)) : t !== i;
  }) : !0;
}
function Xt(t) {
  return process.env[t.toLowerCase()] || process.env[t.toUpperCase()] || "";
}
Ol.getProxyForUrl = S7;
var qi = { exports: {} }, Fn = { exports: {} }, qn = { exports: {} }, Ro, xa;
function O7() {
  if (xa) return Ro;
  xa = 1;
  var t = 1e3, e = t * 60, n = e * 60, r = n * 24, o = r * 7, i = r * 365.25;
  Ro = function(l, u) {
    u = u || {};
    var d = typeof l;
    if (d === "string" && l.length > 0)
      return s(l);
    if (d === "number" && isFinite(l))
      return u.long ? c(l) : a(l);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(l)
    );
  };
  function s(l) {
    if (l = String(l), !(l.length > 100)) {
      var u = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        l
      );
      if (u) {
        var d = parseFloat(u[1]), g = (u[2] || "ms").toLowerCase();
        switch (g) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * i;
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
  function a(l) {
    var u = Math.abs(l);
    return u >= r ? Math.round(l / r) + "d" : u >= n ? Math.round(l / n) + "h" : u >= e ? Math.round(l / e) + "m" : u >= t ? Math.round(l / t) + "s" : l + "ms";
  }
  function c(l) {
    var u = Math.abs(l);
    return u >= r ? p(l, u, r, "day") : u >= n ? p(l, u, n, "hour") : u >= e ? p(l, u, e, "minute") : u >= t ? p(l, u, t, "second") : l + " ms";
  }
  function p(l, u, d, g) {
    var f = u >= d * 1.5;
    return Math.round(l / d) + " " + g + (f ? "s" : "");
  }
  return Ro;
}
var Po, wa;
function Al() {
  if (wa) return Po;
  wa = 1;
  function t(e) {
    r.debug = r, r.default = r, r.coerce = p, r.disable = a, r.enable = i, r.enabled = c, r.humanize = O7(), r.destroy = l, Object.keys(e).forEach((u) => {
      r[u] = e[u];
    }), r.names = [], r.skips = [], r.formatters = {};
    function n(u) {
      let d = 0;
      for (let g = 0; g < u.length; g++)
        d = (d << 5) - d + u.charCodeAt(g), d |= 0;
      return r.colors[Math.abs(d) % r.colors.length];
    }
    r.selectColor = n;
    function r(u) {
      let d, g = null, f, x;
      function b(...S) {
        if (!b.enabled)
          return;
        const w = b, y = Number(/* @__PURE__ */ new Date()), E = y - (d || y);
        w.diff = E, w.prev = d, w.curr = y, d = y, S[0] = r.coerce(S[0]), typeof S[0] != "string" && S.unshift("%O");
        let A = 0;
        S[0] = S[0].replace(/%([a-zA-Z%])/g, (P, O) => {
          if (P === "%%")
            return "%";
          A++;
          const m = r.formatters[O];
          if (typeof m == "function") {
            const _ = S[A];
            P = m.call(w, _), S.splice(A, 1), A--;
          }
          return P;
        }), r.formatArgs.call(w, S), (w.log || r.log).apply(w, S);
      }
      return b.namespace = u, b.useColors = r.useColors(), b.color = r.selectColor(u), b.extend = o, b.destroy = r.destroy, Object.defineProperty(b, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => g !== null ? g : (f !== r.namespaces && (f = r.namespaces, x = r.enabled(u)), x),
        set: (S) => {
          g = S;
        }
      }), typeof r.init == "function" && r.init(b), b;
    }
    function o(u, d) {
      const g = r(this.namespace + (typeof d > "u" ? ":" : d) + u);
      return g.log = this.log, g;
    }
    function i(u) {
      r.save(u), r.namespaces = u, r.names = [], r.skips = [];
      const d = (typeof u == "string" ? u : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const g of d)
        g[0] === "-" ? r.skips.push(g.slice(1)) : r.names.push(g);
    }
    function s(u, d) {
      let g = 0, f = 0, x = -1, b = 0;
      for (; g < u.length; )
        if (f < d.length && (d[f] === u[g] || d[f] === "*"))
          d[f] === "*" ? (x = f, b = g, f++) : (g++, f++);
        else if (x !== -1)
          f = x + 1, b++, g = b;
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
        if (s(u, d))
          return !1;
      for (const d of r.names)
        if (s(u, d))
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
  return Po = t, Po;
}
var Ea;
function A7() {
  return Ea || (Ea = 1, function(t, e) {
    e.formatArgs = r, e.save = o, e.load = i, e.useColors = n, e.storage = s(), e.destroy = /* @__PURE__ */ (() => {
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
      const p = "color: " + this.color;
      c.splice(1, 0, p, "color: inherit");
      let l = 0, u = 0;
      c[0].replace(/%[a-zA-Z%]/g, (d) => {
        d !== "%%" && (l++, d === "%c" && (u = l));
      }), c.splice(u, 0, p);
    }
    e.log = console.debug || console.log || (() => {
    });
    function o(c) {
      try {
        c ? e.storage.setItem("debug", c) : e.storage.removeItem("debug");
      } catch {
      }
    }
    function i() {
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
    t.exports = Al()(e);
    const { formatters: a } = t.exports;
    a.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (p) {
        return "[UnexpectedJSONParseError]: " + p.message;
      }
    };
  }(qn, qn.exports)), qn.exports;
}
var Mn = { exports: {} }, Io, Ta;
function _7() {
  return Ta || (Ta = 1, Io = (t, e = process.argv) => {
    const n = t.startsWith("-") ? "" : t.length === 1 ? "-" : "--", r = e.indexOf(n + t), o = e.indexOf("--");
    return r !== -1 && (o === -1 || r < o);
  }), Io;
}
var ko, Sa;
function D7() {
  if (Sa) return ko;
  Sa = 1;
  const t = Ku, e = Ec, n = _7(), { env: r } = process;
  let o;
  n("no-color") || n("no-colors") || n("color=false") || n("color=never") ? o = 0 : (n("color") || n("colors") || n("color=true") || n("color=always")) && (o = 1), "FORCE_COLOR" in r && (r.FORCE_COLOR === "true" ? o = 1 : r.FORCE_COLOR === "false" ? o = 0 : o = r.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(r.FORCE_COLOR, 10), 3));
  function i(c) {
    return c === 0 ? !1 : {
      level: c,
      hasBasic: !0,
      has256: c >= 2,
      has16m: c >= 3
    };
  }
  function s(c, p) {
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
      const u = t.release().split(".");
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
    const p = s(c, c && c.isTTY);
    return i(p);
  }
  return ko = {
    supportsColor: a,
    stdout: i(s(!0, e.isatty(1))),
    stderr: i(s(!0, e.isatty(2)))
  }, ko;
}
var Na;
function L7() {
  return Na || (Na = 1, function(t, e) {
    const n = Ec, r = bt;
    e.init = l, e.log = a, e.formatArgs = i, e.save = c, e.load = p, e.useColors = o, e.destroy = r.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), e.colors = [6, 2, 3, 4, 5, 1];
    try {
      const d = D7();
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
    e.inspectOpts = Object.keys(process.env).filter((d) => /^debug_/i.test(d)).reduce((d, g) => {
      const f = g.substring(6).toLowerCase().replace(/_([a-z])/g, (b, S) => S.toUpperCase());
      let x = process.env[g];
      return /^(yes|on|true|enabled)$/i.test(x) ? x = !0 : /^(no|off|false|disabled)$/i.test(x) ? x = !1 : x === "null" ? x = null : x = Number(x), d[f] = x, d;
    }, {});
    function o() {
      return "colors" in e.inspectOpts ? !!e.inspectOpts.colors : n.isatty(process.stderr.fd);
    }
    function i(d) {
      const { namespace: g, useColors: f } = this;
      if (f) {
        const x = this.color, b = "\x1B[3" + (x < 8 ? x : "8;5;" + x), S = `  ${b};1m${g} \x1B[0m`;
        d[0] = S + d[0].split(`
`).join(`
` + S), d.push(b + "m+" + t.exports.humanize(this.diff) + "\x1B[0m");
      } else
        d[0] = s() + g + " " + d[0];
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
    function p() {
      return process.env.DEBUG;
    }
    function l(d) {
      d.inspectOpts = {};
      const g = Object.keys(e.inspectOpts);
      for (let f = 0; f < g.length; f++)
        d.inspectOpts[g[f]] = e.inspectOpts[g[f]];
    }
    t.exports = Al()(e);
    const { formatters: u } = t.exports;
    u.o = function(d) {
      return this.inspectOpts.colors = this.useColors, r.inspect(d, this.inspectOpts).split(`
`).map((g) => g.trim()).join(" ");
    }, u.O = function(d) {
      return this.inspectOpts.colors = this.useColors, r.inspect(d, this.inspectOpts);
    };
  }(Mn, Mn.exports)), Mn.exports;
}
var Oa;
function C7() {
  return Oa || (Oa = 1, typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? Fn.exports = A7() : Fn.exports = L7()), Fn.exports;
}
var ln, R7 = function() {
  if (!ln) {
    try {
      ln = C7()("follow-redirects");
    } catch {
    }
    typeof ln != "function" && (ln = function() {
    });
  }
  ln.apply(null, arguments);
}, Ln = Tn, hn = Ln.URL, P7 = lr, I7 = ur, Mi = De.Writable, ji = wc, _l = R7;
(function() {
  var e = typeof process < "u", n = typeof window < "u" && typeof document < "u", r = qt(Error.captureStackTrace);
  !e && (n || !r) && console.warn("The follow-redirects package should be excluded from browser builds.");
})();
var Ui = !1;
try {
  ji(new hn(""));
} catch (t) {
  Ui = t.code === "ERR_INVALID_URL";
}
var k7 = [
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
], Bi = ["abort", "aborted", "connect", "error", "socket", "timeout"], $i = /* @__PURE__ */ Object.create(null);
Bi.forEach(function(t) {
  $i[t] = function(e, n, r) {
    this._redirectable.emit(t, e, n, r);
  };
});
var Ko = Cn(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
), Jo = Cn(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
), F7 = Cn(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  Jo
), q7 = Cn(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
), M7 = Cn(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
), j7 = Mi.prototype.destroy || Ll;
function je(t, e) {
  Mi.call(this), this._sanitizeOptions(t), this._options = t, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], e && this.on("response", e);
  var n = this;
  this._onNativeResponse = function(r) {
    try {
      n._processResponse(r);
    } catch (o) {
      n.emit("error", o instanceof Jo ? o : new Jo({ cause: o }));
    }
  }, this._performRequest();
}
je.prototype = Object.create(Mi.prototype);
je.prototype.abort = function() {
  zi(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
};
je.prototype.destroy = function(t) {
  return zi(this._currentRequest, t), j7.call(this, t), this;
};
je.prototype.write = function(t, e, n) {
  if (this._ending)
    throw new M7();
  if (!Pt(t) && !$7(t))
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  if (qt(e) && (n = e, e = null), t.length === 0) {
    n && n();
    return;
  }
  this._requestBodyLength + t.length <= this._options.maxBodyLength ? (this._requestBodyLength += t.length, this._requestBodyBuffers.push({ data: t, encoding: e }), this._currentRequest.write(t, e, n)) : (this.emit("error", new q7()), this.abort());
};
je.prototype.end = function(t, e, n) {
  if (qt(t) ? (n = t, t = e = null) : qt(e) && (n = e, e = null), !t)
    this._ended = this._ending = !0, this._currentRequest.end(null, null, n);
  else {
    var r = this, o = this._currentRequest;
    this.write(t, e, function() {
      r._ended = !0, o.end(null, null, n);
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
  function o(s) {
    n._timeout && clearTimeout(n._timeout), n._timeout = setTimeout(function() {
      n.emit("timeout"), i();
    }, t), r(s);
  }
  function i() {
    n._timeout && (clearTimeout(n._timeout), n._timeout = null), n.removeListener("abort", i), n.removeListener("error", i), n.removeListener("response", i), n.removeListener("close", i), e && n.removeListener("timeout", e), n.socket || n._currentRequest.removeListener("socket", o);
  }
  return e && this.on("timeout", e), this.socket ? o(this.socket) : this._currentRequest.once("socket", o), this.on("socket", r), this.on("abort", i), this.on("error", i), this.on("response", i), this.on("close", i), this;
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
  for (var o of Bi)
    r.on(o, $i[o]);
  if (this._currentUrl = /^\//.test(this._options.path) ? Ln.format(this._options) : (
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path
  ), this._isRedirect) {
    var i = 0, s = this, a = this._requestBodyBuffers;
    (function c(p) {
      if (r === s._currentRequest)
        if (p)
          s.emit("error", p);
        else if (i < a.length) {
          var l = a[i++];
          r.finished || r.write(l.data, l.encoding, c);
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
  if (zi(this._currentRequest), t.destroy(), ++this._redirectCount > this._options.maxRedirects)
    throw new F7();
  var r, o = this._options.beforeRedirect;
  o && (r = Object.assign({
    // The Host header was set by nativeProtocol.request
    Host: t.req.getHeader("host")
  }, this._options.headers));
  var i = this._options.method;
  ((e === 301 || e === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
  // the server is redirecting the user agent to a different resource […]
  // A user agent can perform a retrieval request targeting that URI
  // (a GET or HEAD request if using HTTP) […]
  e === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], Fo(/^content-/i, this._options.headers));
  var s = Fo(/^host$/i, this._options.headers), a = Vi(this._currentUrl), c = s || a.host, p = /^\w+:/.test(n) ? this._currentUrl : Ln.format(Object.assign(a, { host: c })), l = U7(n, p);
  if (_l("redirecting to", l.href), this._isRedirect = !0, Qo(l, this._options), (l.protocol !== a.protocol && l.protocol !== "https:" || l.host !== c && !B7(l.host, c)) && Fo(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers), qt(o)) {
    var u = {
      headers: t.headers,
      statusCode: e
    }, d = {
      url: p,
      method: i,
      headers: r
    };
    o(this._options, u, d), this._sanitizeOptions(this._options);
  }
  this._performRequest();
};
function Dl(t) {
  var e = {
    maxRedirects: 21,
    maxBodyLength: 10485760
  }, n = {};
  return Object.keys(t).forEach(function(r) {
    var o = r + ":", i = n[o] = t[r], s = e[r] = Object.create(i);
    function a(p, l, u) {
      return V7(p) ? p = Qo(p) : Pt(p) ? p = Qo(Vi(p)) : (u = l, l = Cl(p), p = { protocol: o }), qt(l) && (u = l, l = null), l = Object.assign({
        maxRedirects: e.maxRedirects,
        maxBodyLength: e.maxBodyLength
      }, p, l), l.nativeProtocols = n, !Pt(l.host) && !Pt(l.hostname) && (l.hostname = "::1"), ji.equal(l.protocol, o, "protocol mismatch"), _l("options", l), new je(l, u);
    }
    function c(p, l, u) {
      var d = s.request(p, l, u);
      return d.end(), d;
    }
    Object.defineProperties(s, {
      request: { value: a, configurable: !0, enumerable: !0, writable: !0 },
      get: { value: c, configurable: !0, enumerable: !0, writable: !0 }
    });
  }), e;
}
function Ll() {
}
function Vi(t) {
  var e;
  if (Ui)
    e = new hn(t);
  else if (e = Cl(Ln.parse(t)), !Pt(e.protocol))
    throw new Ko({ input: t });
  return e;
}
function U7(t, e) {
  return Ui ? new hn(t, e) : Vi(Ln.resolve(e, t));
}
function Cl(t) {
  if (/^\[/.test(t.hostname) && !/^\[[:0-9a-f]+\]$/i.test(t.hostname))
    throw new Ko({ input: t.href || t });
  if (/^\[/.test(t.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(t.host))
    throw new Ko({ input: t.href || t });
  return t;
}
function Qo(t, e) {
  var n = e || {};
  for (var r of k7)
    n[r] = t[r];
  return n.hostname.startsWith("[") && (n.hostname = n.hostname.slice(1, -1)), n.port !== "" && (n.port = Number(n.port)), n.path = n.search ? n.pathname + n.search : n.pathname, n;
}
function Fo(t, e) {
  var n;
  for (var r in e)
    t.test(r) && (n = e[r], delete e[r]);
  return n === null || typeof n > "u" ? void 0 : String(n).trim();
}
function Cn(t, e, n) {
  function r(o) {
    qt(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, o || {}), this.code = t, this.message = this.cause ? e + ": " + this.cause.message : e;
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
function zi(t, e) {
  for (var n of Bi)
    t.removeListener(n, $i[n]);
  t.on("error", Ll), t.destroy(e);
}
function B7(t, e) {
  ji(Pt(t) && Pt(e));
  var n = t.length - e.length - 1;
  return n > 0 && t[n] === "." && t.endsWith(e);
}
function Pt(t) {
  return typeof t == "string" || t instanceof String;
}
function qt(t) {
  return typeof t == "function";
}
function $7(t) {
  return typeof t == "object" && "length" in t;
}
function V7(t) {
  return hn && t instanceof hn;
}
qi.exports = Dl({ http: P7, https: I7 });
qi.exports.wrap = Dl;
var z7 = qi.exports;
const H7 = /* @__PURE__ */ rn(z7), rr = "1.13.5";
function Rl(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
const X7 = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function G7(t, e, n) {
  const r = n && n.Blob || ce.classes.Blob, o = Rl(t);
  if (e === void 0 && r && (e = !0), o === "data") {
    t = o.length ? t.slice(o.length + 1) : t;
    const i = X7.exec(t);
    if (!i)
      throw new F("Invalid URL", F.ERR_INVALID_URL);
    const s = i[1], a = i[2], c = i[3], p = Buffer.from(decodeURIComponent(c), a ? "base64" : "utf8");
    if (e) {
      if (!r)
        throw new F("Blob is not supported", F.ERR_NOT_SUPPORT);
      return new r([p], { type: s });
    }
    return p;
  }
  throw new F("Unsupported protocol " + o, F.ERR_NOT_SUPPORT);
}
const qo = Symbol("internals");
class Aa extends De.Transform {
  constructor(e) {
    e = N.toFlatObject(e, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (r, o) => !N.isUndefined(o[r])), super({
      readableHighWaterMark: e.chunkSize
    });
    const n = this[qo] = {
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
    const n = this[qo];
    return n.onReadCallback && n.onReadCallback(), super._read(e);
  }
  _transform(e, n, r) {
    const o = this[qo], i = o.maxRate, s = this.readableHighWaterMark, a = o.timeWindow, c = 1e3 / a, p = i / c, l = o.minChunkSize !== !1 ? Math.max(o.minChunkSize, p * 0.01) : 0, u = (g, f) => {
      const x = Buffer.byteLength(g);
      o.bytesSeen += x, o.bytes += x, o.isCaptured && this.emit("progress", o.bytesSeen), this.push(g) ? process.nextTick(f) : o.onReadCallback = () => {
        o.onReadCallback = null, process.nextTick(f);
      };
    }, d = (g, f) => {
      const x = Buffer.byteLength(g);
      let b = null, S = s, w, y = 0;
      if (i) {
        const E = Date.now();
        (!o.ts || (y = E - o.ts) >= a) && (o.ts = E, w = p - o.bytes, o.bytes = w < 0 ? -w : 0, y = 0), w = p - o.bytes;
      }
      if (i) {
        if (w <= 0)
          return setTimeout(() => {
            f(null, g);
          }, a - y);
        w < S && (S = w);
      }
      S && x > S && x - S > l && (b = g.subarray(S), g = g.subarray(0, S)), u(g, b ? () => {
        process.nextTick(f, null, b);
      } : f);
    };
    d(e, function g(f, x) {
      if (f)
        return r(f);
      x ? d(x, g) : r(null);
    });
  }
}
const { asyncIterator: _a } = Symbol, Pl = async function* (t) {
  t.stream ? yield* t.stream() : t.arrayBuffer ? yield await t.arrayBuffer() : t[_a] ? yield* t[_a]() : yield t;
}, W7 = ce.ALPHABET.ALPHA_DIGIT + "-_", gn = typeof TextEncoder == "function" ? new TextEncoder() : new bt.TextEncoder(), At = `\r
`, Y7 = gn.encode(At), K7 = 2;
class J7 {
  constructor(e, n) {
    const { escapeName: r } = this.constructor, o = N.isString(n);
    let i = `Content-Disposition: form-data; name="${r(e)}"${!o && n.name ? `; filename="${r(n.name)}"` : ""}${At}`;
    o ? n = gn.encode(String(n).replace(/\r?\n|\r\n?/g, At)) : i += `Content-Type: ${n.type || "application/octet-stream"}${At}`, this.headers = gn.encode(i + At), this.contentLength = o ? n.byteLength : n.size, this.size = this.headers.byteLength + this.contentLength + K7, this.name = e, this.value = n;
  }
  async *encode() {
    yield this.headers;
    const { value: e } = this;
    N.isTypedArray(e) ? yield e : yield* Pl(e), yield Y7;
  }
  static escapeName(e) {
    return String(e).replace(/[\r\n"]/g, (n) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[n]);
  }
}
const Q7 = (t, e, n) => {
  const {
    tag: r = "form-data-boundary",
    size: o = 25,
    boundary: i = r + "-" + ce.generateString(o, W7)
  } = n || {};
  if (!N.isFormData(t))
    throw TypeError("FormData instance required");
  if (i.length < 1 || i.length > 70)
    throw Error("boundary must be 10-70 characters long");
  const s = gn.encode("--" + i + At), a = gn.encode("--" + i + "--" + At);
  let c = a.byteLength;
  const p = Array.from(t.entries()).map(([u, d]) => {
    const g = new J7(u, d);
    return c += g.size, g;
  });
  c += s.byteLength * p.length, c = N.toFiniteNumber(c);
  const l = {
    "Content-Type": `multipart/form-data; boundary=${i}`
  };
  return Number.isFinite(c) && (l["Content-Length"] = c), e && e(l), Yu.from(async function* () {
    for (const u of p)
      yield s, yield* u.encode();
    yield a;
  }());
};
class Z7 extends De.Transform {
  __transform(e, n, r) {
    this.push(e), r();
  }
  _transform(e, n, r) {
    if (e.length !== 0 && (this._transform = this.__transform, e[0] !== 120)) {
      const o = Buffer.alloc(2);
      o[0] = 120, o[1] = 156, this.push(o, n);
    }
    this.__transform(e, n, r);
  }
}
const e5 = (t, e) => N.isAsyncFn(t) ? function(...n) {
  const r = n.pop();
  t.apply(this, n).then((o) => {
    try {
      e ? r(null, ...e(o)) : r(null, o);
    } catch (i) {
      r(i);
    }
  }, r);
} : t;
function t5(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let o = 0, i = 0, s;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const p = Date.now(), l = r[i];
    s || (s = p), n[o] = c, r[o] = p;
    let u = i, d = 0;
    for (; u !== o; )
      d += n[u++], u = u % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), p - s < e)
      return;
    const g = l && p - l;
    return g ? Math.round(d * 1e3 / g) : void 0;
  };
}
function n5(t, e) {
  let n = 0, r = 1e3 / e, o, i;
  const s = (p, l = Date.now()) => {
    n = l, o = null, i && (clearTimeout(i), i = null), t(...p);
  };
  return [(...p) => {
    const l = Date.now(), u = l - n;
    u >= r ? s(p, l) : (o = p, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - u)));
  }, () => o && s(o)];
}
const en = (t, e, n = 3) => {
  let r = 0;
  const o = t5(50, 250);
  return n5((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - r, p = o(c), l = s <= a;
    r = s;
    const u = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: c,
      rate: p || void 0,
      estimated: p && a && l ? (a - s) / p : void 0,
      event: i,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(u);
  }, n);
}, or = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, ir = (t) => (...e) => N.asap(() => t(...e));
function r5(t) {
  if (!t || typeof t != "string" || !t.startsWith("data:")) return 0;
  const e = t.indexOf(",");
  if (e < 0) return 0;
  const n = t.slice(5, e), r = t.slice(e + 1);
  if (/;base64/i.test(n)) {
    let i = r.length;
    const s = r.length;
    for (let d = 0; d < s; d++)
      if (r.charCodeAt(d) === 37 && d + 2 < s) {
        const g = r.charCodeAt(d + 1), f = r.charCodeAt(d + 2);
        (g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102) && (f >= 48 && f <= 57 || f >= 65 && f <= 70 || f >= 97 && f <= 102) && (i -= 2, d += 2);
      }
    let a = 0, c = s - 1;
    const p = (d) => d >= 2 && r.charCodeAt(d - 2) === 37 && // '%'
    r.charCodeAt(d - 1) === 51 && // '3'
    (r.charCodeAt(d) === 68 || r.charCodeAt(d) === 100);
    c >= 0 && (r.charCodeAt(c) === 61 ? (a++, c--) : p(c) && (a++, c -= 3)), a === 1 && c >= 0 && (r.charCodeAt(c) === 61 || p(c)) && a++;
    const u = Math.floor(i / 4) * 3 - (a || 0);
    return u > 0 ? u : 0;
  }
  return Buffer.byteLength(r, "utf8");
}
const Da = {
  flush: yt.constants.Z_SYNC_FLUSH,
  finishFlush: yt.constants.Z_SYNC_FLUSH
}, o5 = {
  flush: yt.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: yt.constants.BROTLI_OPERATION_FLUSH
}, La = N.isFunction(yt.createBrotliDecompress), { http: i5, https: s5 } = H7, a5 = /https:?/, Ca = ce.protocols.map((t) => t + ":"), Ra = (t, [e, n]) => (t.on("end", n).on("error", n), e);
class c5 {
  constructor() {
    this.sessions = /* @__PURE__ */ Object.create(null);
  }
  getSession(e, n) {
    n = Object.assign({
      sessionTimeout: 1e3
    }, n);
    let r = this.sessions[e];
    if (r) {
      let l = r.length;
      for (let u = 0; u < l; u++) {
        const [d, g] = r[u];
        if (!d.destroyed && !d.closed && bt.isDeepStrictEqual(g, n))
          return d;
      }
    }
    const o = xc.connect(e, n);
    let i;
    const s = () => {
      if (i)
        return;
      i = !0;
      let l = r, u = l.length, d = u;
      for (; d--; )
        if (l[d][0] === o) {
          u === 1 ? delete this.sessions[e] : l.splice(d, 1);
          return;
        }
    }, a = o.request, { sessionTimeout: c } = n;
    if (c != null) {
      let l, u = 0;
      o.request = function() {
        const d = a.apply(this, arguments);
        return u++, l && (clearTimeout(l), l = null), d.once("close", () => {
          --u || (l = setTimeout(() => {
            l = null, s();
          }, c));
        }), d;
      };
    }
    o.once("close", s);
    let p = [
      o,
      n
    ];
    return r ? r.push(p) : r = this.sessions[e] = [p], o;
  }
}
const l5 = new c5();
function u5(t, e) {
  t.beforeRedirects.proxy && t.beforeRedirects.proxy(t), t.beforeRedirects.config && t.beforeRedirects.config(t, e);
}
function Il(t, e, n) {
  let r = e;
  if (!r && r !== !1) {
    const o = Ol.getProxyForUrl(n);
    o && (r = new URL(o));
  }
  if (r) {
    if (r.username && (r.auth = (r.username || "") + ":" + (r.password || "")), r.auth) {
      if (!!(r.auth.username || r.auth.password))
        r.auth = (r.auth.username || "") + ":" + (r.auth.password || "");
      else if (typeof r.auth == "object")
        throw new F("Invalid proxy authorization", F.ERR_BAD_OPTION, { proxy: r });
      const s = Buffer.from(r.auth, "utf8").toString("base64");
      t.headers["Proxy-Authorization"] = "Basic " + s;
    }
    t.headers.host = t.hostname + (t.port ? ":" + t.port : "");
    const o = r.hostname || r.host;
    t.hostname = o, t.host = o, t.port = r.port, t.path = n, r.protocol && (t.protocol = r.protocol.includes(":") ? r.protocol : `${r.protocol}:`);
  }
  t.beforeRedirects.proxy = function(i) {
    Il(i, e, i.href);
  };
}
const p5 = typeof process < "u" && N.kindOf(process) === "process", d5 = (t) => new Promise((e, n) => {
  let r, o;
  const i = (c, p) => {
    o || (o = !0, r && r(c, p));
  }, s = (c) => {
    i(c), e(c);
  }, a = (c) => {
    i(c, !0), n(c);
  };
  t(s, a, (c) => r = c).catch(a);
}), f5 = ({ address: t, family: e }) => {
  if (!N.isString(t))
    throw TypeError("address must be a string");
  return {
    address: t,
    family: e || (t.indexOf(".") < 0 ? 6 : 4)
  };
}, Pa = (t, e) => f5(N.isObject(t) ? t : { address: t, family: e }), m5 = {
  request(t, e) {
    const n = t.protocol + "//" + t.hostname + ":" + (t.port || (t.protocol === "https:" ? 443 : 80)), { http2Options: r, headers: o } = t, i = l5.getSession(n, r), {
      HTTP2_HEADER_SCHEME: s,
      HTTP2_HEADER_METHOD: a,
      HTTP2_HEADER_PATH: c,
      HTTP2_HEADER_STATUS: p
    } = xc.constants, l = {
      [s]: t.protocol.replace(":", ""),
      [a]: t.method,
      [c]: t.path
    };
    N.forEach(o, (d, g) => {
      g.charAt(0) !== ":" && (l[g] = d);
    });
    const u = i.request(l);
    return u.once("response", (d) => {
      const g = u;
      d = Object.assign({}, d);
      const f = d[p];
      delete d[p], g.headers = d, g.statusCode = +f, e(g);
    }), u;
  }
}, h5 = p5 && function(e) {
  return d5(async function(r, o, i) {
    let { data: s, lookup: a, family: c, httpVersion: p = 1, http2Options: l } = e;
    const { responseType: u, responseEncoding: d } = e, g = e.method.toUpperCase();
    let f, x = !1, b;
    if (p = +p, Number.isNaN(p))
      throw TypeError(`Invalid protocol version: '${e.httpVersion}' is not a number`);
    if (p !== 1 && p !== 2)
      throw TypeError(`Unsupported protocol version '${p}'`);
    const S = p === 2;
    if (a) {
      const V = e5(a, (U) => N.isArray(U) ? U : [U]);
      a = (U, Z, Ne) => {
        V(U, Z, (oe, Oe, Ke) => {
          if (oe)
            return Ne(oe);
          const v = N.isArray(Oe) ? Oe.map((h) => Pa(h)) : [Pa(Oe, Ke)];
          Z.all ? Ne(oe, v) : Ne(oe, v[0].address, v[0].family);
        });
      };
    }
    const w = new Gu();
    function y(V) {
      try {
        w.emit("abort", !V || V.type ? new Ft(null, e, b) : V);
      } catch (U) {
        console.warn("emit error", U);
      }
    }
    w.once("abort", o);
    const E = () => {
      e.cancelToken && e.cancelToken.unsubscribe(y), e.signal && e.signal.removeEventListener("abort", y), w.removeAllListeners();
    };
    (e.cancelToken || e.signal) && (e.cancelToken && e.cancelToken.subscribe(y), e.signal && (e.signal.aborted ? y() : e.signal.addEventListener("abort", y))), i((V, U) => {
      if (f = !0, U) {
        x = !0, E();
        return;
      }
      const { data: Z } = V;
      if (Z instanceof De.Readable || Z instanceof De.Duplex) {
        const Ne = De.finished(Z, () => {
          Ne(), E();
        });
      } else
        E();
    });
    const A = Fi(e.baseURL, e.url, e.allowAbsoluteUrls), L = new URL(A, ce.hasBrowserEnv ? ce.origin : void 0), P = L.protocol || Ca[0];
    if (P === "data:") {
      if (e.maxContentLength > -1) {
        const U = String(e.url || A || "");
        if (r5(U) > e.maxContentLength)
          return o(new F(
            "maxContentLength size of " + e.maxContentLength + " exceeded",
            F.ERR_BAD_RESPONSE,
            e
          ));
      }
      let V;
      if (g !== "GET")
        return Ht(r, o, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: e
        });
      try {
        V = G7(e.url, u === "blob", {
          Blob: e.env && e.env.Blob
        });
      } catch (U) {
        throw F.from(U, F.ERR_BAD_REQUEST, e);
      }
      return u === "text" ? (V = V.toString(d), (!d || d === "utf8") && (V = N.stripBOM(V))) : u === "stream" && (V = De.Readable.from(V)), Ht(r, o, {
        data: V,
        status: 200,
        statusText: "OK",
        headers: new Te(),
        config: e
      });
    }
    if (Ca.indexOf(P) === -1)
      return o(new F(
        "Unsupported protocol " + P,
        F.ERR_BAD_REQUEST,
        e
      ));
    const O = Te.from(e.headers).normalize();
    O.set("User-Agent", "axios/" + rr, !1);
    const { onUploadProgress: m, onDownloadProgress: _ } = e, D = e.maxRate;
    let I, j;
    if (N.isSpecCompliantForm(s)) {
      const V = O.getContentType(/boundary=([-_\w\d]{10,70})/i);
      s = Q7(s, (U) => {
        O.set(U);
      }, {
        tag: `axios-${rr}-boundary`,
        boundary: V && V[1] || void 0
      });
    } else if (N.isFormData(s) && N.isFunction(s.getHeaders)) {
      if (O.set(s.getHeaders()), !O.hasContentLength())
        try {
          const V = await bt.promisify(s.getLength).call(s);
          Number.isFinite(V) && V >= 0 && O.setContentLength(V);
        } catch {
        }
    } else if (N.isBlob(s) || N.isFile(s))
      s.size && O.setContentType(s.type || "application/octet-stream"), O.setContentLength(s.size || 0), s = De.Readable.from(Pl(s));
    else if (s && !N.isStream(s)) {
      if (!Buffer.isBuffer(s)) if (N.isArrayBuffer(s))
        s = Buffer.from(new Uint8Array(s));
      else if (N.isString(s))
        s = Buffer.from(s, "utf-8");
      else
        return o(new F(
          "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
          F.ERR_BAD_REQUEST,
          e
        ));
      if (O.setContentLength(s.length, !1), e.maxBodyLength > -1 && s.length > e.maxBodyLength)
        return o(new F(
          "Request body larger than maxBodyLength limit",
          F.ERR_BAD_REQUEST,
          e
        ));
    }
    const B = N.toFiniteNumber(O.getContentLength());
    N.isArray(D) ? (I = D[0], j = D[1]) : I = j = D, s && (m || I) && (N.isStream(s) || (s = De.Readable.from(s, { objectMode: !1 })), s = De.pipeline([s, new Aa({
      maxRate: N.toFiniteNumber(I)
    })], N.noop), m && s.on("progress", Ra(
      s,
      or(
        B,
        en(ir(m), !1, 3)
      )
    )));
    let $;
    if (e.auth) {
      const V = e.auth.username || "", U = e.auth.password || "";
      $ = V + ":" + U;
    }
    if (!$ && L.username) {
      const V = L.username, U = L.password;
      $ = V + ":" + U;
    }
    $ && O.delete("authorization");
    let q;
    try {
      q = Ii(
        L.pathname + L.search,
        e.params,
        e.paramsSerializer
      ).replace(/^\?/, "");
    } catch (V) {
      const U = new Error(V.message);
      return U.config = e, U.url = e.url, U.exists = !0, o(U);
    }
    O.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (La ? ", br" : ""),
      !1
    );
    const k = {
      path: q,
      method: g,
      headers: O.toJSON(),
      agents: { http: e.httpAgent, https: e.httpsAgent },
      auth: $,
      protocol: P,
      family: c,
      beforeRedirect: u5,
      beforeRedirects: {},
      http2Options: l
    };
    !N.isUndefined(a) && (k.lookup = a), e.socketPath ? k.socketPath = e.socketPath : (k.hostname = L.hostname.startsWith("[") ? L.hostname.slice(1, -1) : L.hostname, k.port = L.port, Il(k, e.proxy, P + "//" + L.hostname + (L.port ? ":" + L.port : "") + k.path));
    let Y;
    const W = a5.test(k.protocol);
    if (k.agent = W ? e.httpsAgent : e.httpAgent, S ? Y = m5 : e.transport ? Y = e.transport : e.maxRedirects === 0 ? Y = W ? ur : lr : (e.maxRedirects && (k.maxRedirects = e.maxRedirects), e.beforeRedirect && (k.beforeRedirects.config = e.beforeRedirect), Y = W ? s5 : i5), e.maxBodyLength > -1 ? k.maxBodyLength = e.maxBodyLength : k.maxBodyLength = 1 / 0, e.insecureHTTPParser && (k.insecureHTTPParser = e.insecureHTTPParser), b = Y.request(k, function(U) {
      if (b.destroyed) return;
      const Z = [U], Ne = N.toFiniteNumber(U.headers["content-length"]);
      if (_ || j) {
        const v = new Aa({
          maxRate: N.toFiniteNumber(j)
        });
        _ && v.on("progress", Ra(
          v,
          or(
            Ne,
            en(ir(_), !0, 3)
          )
        )), Z.push(v);
      }
      let oe = U;
      const Oe = U.req || b;
      if (e.decompress !== !1 && U.headers["content-encoding"])
        switch ((g === "HEAD" || U.statusCode === 204) && delete U.headers["content-encoding"], (U.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            Z.push(yt.createUnzip(Da)), delete U.headers["content-encoding"];
            break;
          case "deflate":
            Z.push(new Z7()), Z.push(yt.createUnzip(Da)), delete U.headers["content-encoding"];
            break;
          case "br":
            La && (Z.push(yt.createBrotliDecompress(o5)), delete U.headers["content-encoding"]);
        }
      oe = Z.length > 1 ? De.pipeline(Z, N.noop) : Z[0];
      const Ke = {
        status: U.statusCode,
        statusText: U.statusMessage,
        headers: new Te(U.headers),
        config: e,
        request: Oe
      };
      if (u === "stream")
        Ke.data = oe, Ht(r, o, Ke);
      else {
        const v = [];
        let h = 0;
        oe.on("data", function(T) {
          v.push(T), h += T.length, e.maxContentLength > -1 && h > e.maxContentLength && (x = !0, oe.destroy(), y(new F(
            "maxContentLength size of " + e.maxContentLength + " exceeded",
            F.ERR_BAD_RESPONSE,
            e,
            Oe
          )));
        }), oe.on("aborted", function() {
          if (x)
            return;
          const T = new F(
            "stream has been aborted",
            F.ERR_BAD_RESPONSE,
            e,
            Oe
          );
          oe.destroy(T), o(T);
        }), oe.on("error", function(T) {
          b.destroyed || o(F.from(T, null, e, Oe));
        }), oe.on("end", function() {
          try {
            let T = v.length === 1 ? v[0] : Buffer.concat(v);
            u !== "arraybuffer" && (T = T.toString(d), (!d || d === "utf8") && (T = N.stripBOM(T))), Ke.data = T;
          } catch (T) {
            return o(F.from(T, null, e, Ke.request, Ke));
          }
          Ht(r, o, Ke);
        });
      }
      w.once("abort", (v) => {
        oe.destroyed || (oe.emit("error", v), oe.destroy());
      });
    }), w.once("abort", (V) => {
      b.close ? b.close() : b.destroy(V);
    }), b.on("error", function(U) {
      o(F.from(U, null, e, b));
    }), b.on("socket", function(U) {
      U.setKeepAlive(!0, 1e3 * 60);
    }), e.timeout) {
      const V = parseInt(e.timeout, 10);
      if (Number.isNaN(V)) {
        y(new F(
          "error trying to parse `config.timeout` to int",
          F.ERR_BAD_OPTION_VALUE,
          e,
          b
        ));
        return;
      }
      b.setTimeout(V, function() {
        if (f) return;
        let Z = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
        const Ne = e.transitional || Er;
        e.timeoutErrorMessage && (Z = e.timeoutErrorMessage), y(new F(
          Z,
          Ne.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
          e,
          b
        ));
      });
    } else
      b.setTimeout(0);
    if (N.isStream(s)) {
      let V = !1, U = !1;
      s.on("end", () => {
        V = !0;
      }), s.once("error", (Z) => {
        U = !0, b.destroy(Z);
      }), s.on("close", () => {
        !V && !U && y(new Ft("Request stream has been aborted", e, b));
      }), s.pipe(b);
    } else
      s && b.write(s), b.end();
  });
}, g5 = ce.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, ce.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(ce.origin),
  ce.navigator && /(msie|trident)/i.test(ce.navigator.userAgent)
) : () => !0, y5 = ce.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, o, i, s) {
      if (typeof document > "u") return;
      const a = [`${t}=${encodeURIComponent(e)}`];
      N.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), N.isString(r) && a.push(`path=${r}`), N.isString(o) && a.push(`domain=${o}`), i === !0 && a.push("secure"), N.isString(s) && a.push(`SameSite=${s}`), document.cookie = a.join("; ");
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
), Ia = (t) => t instanceof Te ? { ...t } : t;
function Mt(t, e) {
  e = e || {};
  const n = {};
  function r(p, l, u, d) {
    return N.isPlainObject(p) && N.isPlainObject(l) ? N.merge.call({ caseless: d }, p, l) : N.isPlainObject(l) ? N.merge({}, l) : N.isArray(l) ? l.slice() : l;
  }
  function o(p, l, u, d) {
    if (N.isUndefined(l)) {
      if (!N.isUndefined(p))
        return r(void 0, p, u, d);
    } else return r(p, l, u, d);
  }
  function i(p, l) {
    if (!N.isUndefined(l))
      return r(void 0, l);
  }
  function s(p, l) {
    if (N.isUndefined(l)) {
      if (!N.isUndefined(p))
        return r(void 0, p);
    } else return r(void 0, l);
  }
  function a(p, l, u) {
    if (u in e)
      return r(p, l);
    if (u in t)
      return r(void 0, p);
  }
  const c = {
    url: i,
    method: i,
    data: i,
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
    headers: (p, l, u) => o(Ia(p), Ia(l), u, !0)
  };
  return N.forEach(
    Object.keys({ ...t, ...e }),
    function(l) {
      if (l === "__proto__" || l === "constructor" || l === "prototype")
        return;
      const u = N.hasOwnProp(c, l) ? c[l] : o, d = u(t[l], e[l], l);
      N.isUndefined(d) && u !== a || (n[l] = d);
    }
  ), n;
}
const kl = (t) => {
  const e = Mt({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = e;
  if (e.headers = s = Te.from(s), e.url = Ii(Fi(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), N.isFormData(n)) {
    if (ce.hasStandardBrowserEnv || ce.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (N.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), p = ["content-type", "content-length"];
      Object.entries(c).forEach(([l, u]) => {
        p.includes(l.toLowerCase()) && s.set(l, u);
      });
    }
  }
  if (ce.hasStandardBrowserEnv && (r && N.isFunction(r) && (r = r(e)), r || r !== !1 && g5(e.url))) {
    const c = o && i && y5.read(i);
    c && s.set(o, c);
  }
  return e;
}, v5 = typeof XMLHttpRequest < "u", b5 = v5 && function(t) {
  return new Promise(function(n, r) {
    const o = kl(t);
    let i = o.data;
    const s = Te.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: p } = o, l, u, d, g, f;
    function x() {
      g && g(), f && f(), o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l);
    }
    let b = new XMLHttpRequest();
    b.open(o.method.toUpperCase(), o.url, !0), b.timeout = o.timeout;
    function S() {
      if (!b)
        return;
      const y = Te.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), A = {
        data: !a || a === "text" || a === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: y,
        config: t,
        request: b
      };
      Ht(function(P) {
        n(P), x();
      }, function(P) {
        r(P), x();
      }, A), b = null;
    }
    "onloadend" in b ? b.onloadend = S : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, b.onabort = function() {
      b && (r(new F("Request aborted", F.ECONNABORTED, t, b)), b = null);
    }, b.onerror = function(E) {
      const A = E && E.message ? E.message : "Network Error", L = new F(A, F.ERR_NETWORK, t, b);
      L.event = E || null, r(L), b = null;
    }, b.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const A = o.transitional || Er;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(new F(
        E,
        A.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        t,
        b
      )), b = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in b && N.forEach(s.toJSON(), function(E, A) {
      b.setRequestHeader(A, E);
    }), N.isUndefined(o.withCredentials) || (b.withCredentials = !!o.withCredentials), a && a !== "json" && (b.responseType = o.responseType), p && ([d, f] = en(p, !0), b.addEventListener("progress", d)), c && b.upload && ([u, g] = en(c), b.upload.addEventListener("progress", u), b.upload.addEventListener("loadend", g)), (o.cancelToken || o.signal) && (l = (y) => {
      b && (r(!y || y.type ? new Ft(null, t, b) : y), b.abort(), b = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const w = Rl(o.url);
    if (w && ce.protocols.indexOf(w) === -1) {
      r(new F("Unsupported protocol " + w + ":", F.ERR_BAD_REQUEST, t));
      return;
    }
    b.send(i || null);
  });
}, x5 = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), o;
    const i = function(p) {
      if (!o) {
        o = !0, a();
        const l = p instanceof Error ? p : this.reason;
        r.abort(l instanceof F ? l : new Ft(l instanceof Error ? l.message : l));
      }
    };
    let s = e && setTimeout(() => {
      s = null, i(new F(`timeout of ${e}ms exceeded`, F.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (s && clearTimeout(s), s = null, t.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(i) : p.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((p) => p.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => N.asap(a), c;
  }
}, w5 = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + e, yield t.slice(r, o), r = o;
}, E5 = async function* (t, e) {
  for await (const n of T5(t))
    yield* w5(n, e);
}, T5 = async function* (t) {
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
}, ka = (t, e, n, r) => {
  const o = E5(t, e);
  let i = 0, s, a = (c) => {
    s || (s = !0, r && r(c));
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
          let d = i += u;
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
}, Fa = 64 * 1024, { isFunction: jn } = N, S5 = (({ Request: t, Response: e }) => ({
  Request: t,
  Response: e
}))(N.global), {
  ReadableStream: qa,
  TextEncoder: Ma
} = N.global, ja = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, N5 = (t) => {
  t = N.merge.call({
    skipUndefined: !0
  }, S5, t);
  const { fetch: e, Request: n, Response: r } = t, o = e ? jn(e) : typeof fetch == "function", i = jn(n), s = jn(r);
  if (!o)
    return !1;
  const a = o && jn(qa), c = o && (typeof Ma == "function" ? /* @__PURE__ */ ((f) => (x) => f.encode(x))(new Ma()) : async (f) => new Uint8Array(await new n(f).arrayBuffer())), p = i && a && ja(() => {
    let f = !1;
    const x = new n(ce.origin, {
      body: new qa(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !x;
  }), l = s && a && ja(() => N.isReadableStream(new r("").body)), u = {
    stream: l && ((f) => f.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !u[f] && (u[f] = (x, b) => {
      let S = x && x[f];
      if (S)
        return S.call(x);
      throw new F(`Response type '${f}' is not supported`, F.ERR_NOT_SUPPORT, b);
    });
  });
  const d = async (f) => {
    if (f == null)
      return 0;
    if (N.isBlob(f))
      return f.size;
    if (N.isSpecCompliantForm(f))
      return (await new n(ce.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (N.isArrayBufferView(f) || N.isArrayBuffer(f))
      return f.byteLength;
    if (N.isURLSearchParams(f) && (f = f + ""), N.isString(f))
      return (await c(f)).byteLength;
  }, g = async (f, x) => {
    const b = N.toFiniteNumber(f.getContentLength());
    return b ?? d(x);
  };
  return async (f) => {
    let {
      url: x,
      method: b,
      data: S,
      signal: w,
      cancelToken: y,
      timeout: E,
      onDownloadProgress: A,
      onUploadProgress: L,
      responseType: P,
      headers: O,
      withCredentials: m = "same-origin",
      fetchOptions: _
    } = kl(f), D = e || fetch;
    P = P ? (P + "").toLowerCase() : "text";
    let I = x5([w, y && y.toAbortSignal()], E), j = null;
    const B = I && I.unsubscribe && (() => {
      I.unsubscribe();
    });
    let $;
    try {
      if (L && p && b !== "get" && b !== "head" && ($ = await g(O, S)) !== 0) {
        let U = new n(x, {
          method: "POST",
          body: S,
          duplex: "half"
        }), Z;
        if (N.isFormData(S) && (Z = U.headers.get("content-type")) && O.setContentType(Z), U.body) {
          const [Ne, oe] = or(
            $,
            en(ir(L))
          );
          S = ka(U.body, Fa, Ne, oe);
        }
      }
      N.isString(m) || (m = m ? "include" : "omit");
      const q = i && "credentials" in n.prototype, k = {
        ..._,
        signal: I,
        method: b.toUpperCase(),
        headers: O.normalize().toJSON(),
        body: S,
        duplex: "half",
        credentials: q ? m : void 0
      };
      j = i && new n(x, k);
      let Y = await (i ? D(j, _) : D(x, k));
      const W = l && (P === "stream" || P === "response");
      if (l && (A || W && B)) {
        const U = {};
        ["status", "statusText", "headers"].forEach((Oe) => {
          U[Oe] = Y[Oe];
        });
        const Z = N.toFiniteNumber(Y.headers.get("content-length")), [Ne, oe] = A && or(
          Z,
          en(ir(A), !0)
        ) || [];
        Y = new r(
          ka(Y.body, Fa, Ne, () => {
            oe && oe(), B && B();
          }),
          U
        );
      }
      P = P || "text";
      let V = await u[N.findKey(u, P) || "text"](Y, f);
      return !W && B && B(), await new Promise((U, Z) => {
        Ht(U, Z, {
          data: V,
          headers: Te.from(Y.headers),
          status: Y.status,
          statusText: Y.statusText,
          config: f,
          request: j
        });
      });
    } catch (q) {
      throw B && B(), q && q.name === "TypeError" && /Load failed|fetch/i.test(q.message) ? Object.assign(
        new F("Network Error", F.ERR_NETWORK, f, j, q && q.response),
        {
          cause: q.cause || q
        }
      ) : F.from(q, q && q.code, f, j, q && q.response);
    }
  };
}, O5 = /* @__PURE__ */ new Map(), Fl = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: r, Response: o } = e, i = [
    r,
    o,
    n
  ];
  let s = i.length, a = s, c, p, l = O5;
  for (; a--; )
    c = i[a], p = l.get(c), p === void 0 && l.set(c, p = a ? /* @__PURE__ */ new Map() : N5(e)), l = p;
  return p;
};
Fl();
const Hi = {
  http: h5,
  xhr: b5,
  fetch: {
    get: Fl
  }
};
N.forEach(Hi, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ua = (t) => `- ${t}`, A5 = (t) => N.isFunction(t) || t === null || t === !1;
function _5(t, e) {
  t = N.isArray(t) ? t : [t];
  const { length: n } = t;
  let r, o;
  const i = {};
  for (let s = 0; s < n; s++) {
    r = t[s];
    let a;
    if (o = r, !A5(r) && (o = Hi[(a = String(r)).toLowerCase()], o === void 0))
      throw new F(`Unknown adapter '${a}'`);
    if (o && (N.isFunction(o) || (o = o.get(e))))
      break;
    i[a || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(i).map(
      ([c, p]) => `adapter ${c} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? s.length > 1 ? `since :
` + s.map(Ua).join(`
`) : " " + Ua(s[0]) : "as no adapter specified";
    throw new F(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const ql = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: _5,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Hi
};
function Mo(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Ft(null, t);
}
function Ba(t) {
  return Mo(t), t.headers = Te.from(t.headers), t.data = Co.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ql.getAdapter(t.adapter || Dn.adapter, t)(t).then(function(r) {
    return Mo(t), r.data = Co.call(
      t,
      t.transformResponse,
      r
    ), r.headers = Te.from(r.headers), r;
  }, function(r) {
    return Nl(r) || (Mo(t), r && r.response && (r.response.data = Co.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = Te.from(r.response.headers))), Promise.reject(r);
  });
}
const Tr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Tr[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const $a = {};
Tr.transitional = function(e, n, r) {
  function o(i, s) {
    return "[Axios v" + rr + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (e === !1)
      throw new F(
        o(s, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED
      );
    return n && !$a[s] && ($a[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(i, s, a) : !0;
  };
};
Tr.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function D5(t, e, n) {
  if (typeof t != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = e[i];
    if (s) {
      const a = t[i], c = a === void 0 || s(a, i, t);
      if (c !== !0)
        throw new F("option " + i + " must be " + c, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new F("Unknown option " + i, F.ERR_BAD_OPTION);
  }
}
const Gn = {
  assertOptions: D5,
  validators: Tr
}, $e = Gn.validators;
let It = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new ya(),
      response: new ya()
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
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Mt(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Gn.assertOptions(r, {
      silentJSONParsing: $e.transitional($e.boolean),
      forcedJSONParsing: $e.transitional($e.boolean),
      clarifyTimeoutError: $e.transitional($e.boolean),
      legacyInterceptorReqResOrdering: $e.transitional($e.boolean)
    }, !1), o != null && (N.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Gn.assertOptions(o, {
      encode: $e.function,
      serialize: $e.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Gn.assertOptions(n, {
      baseUrl: $e.spelling("baseURL"),
      withXsrfToken: $e.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && N.merge(
      i.common,
      i[n.method]
    );
    i && N.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
      }
    ), n.headers = Te.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(x) {
      if (typeof x.runWhen == "function" && x.runWhen(n) === !1)
        return;
      c = c && x.synchronous;
      const b = n.transitional || Er;
      b && b.legacyInterceptorReqResOrdering ? a.unshift(x.fulfilled, x.rejected) : a.push(x.fulfilled, x.rejected);
    });
    const p = [];
    this.interceptors.response.forEach(function(x) {
      p.push(x.fulfilled, x.rejected);
    });
    let l, u = 0, d;
    if (!c) {
      const f = [Ba.bind(this), void 0];
      for (f.unshift(...a), f.push(...p), d = f.length, l = Promise.resolve(n); u < d; )
        l = l.then(f[u++], f[u++]);
      return l;
    }
    d = a.length;
    let g = n;
    for (; u < d; ) {
      const f = a[u++], x = a[u++];
      try {
        g = f(g);
      } catch (b) {
        x.call(this, b);
        break;
      }
    }
    try {
      l = Ba.call(this, g);
    } catch (f) {
      return Promise.reject(f);
    }
    for (u = 0, d = p.length; u < d; )
      l = l.then(p[u++], p[u++]);
    return l;
  }
  getUri(e) {
    e = Mt(this.defaults, e);
    const n = Fi(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Ii(n, e.params, e.paramsSerializer);
  }
};
N.forEach(["delete", "get", "head", "options"], function(e) {
  It.prototype[e] = function(n, r) {
    return this.request(Mt(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
N.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(i, s, a) {
      return this.request(Mt(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  It.prototype[e] = n(), It.prototype[e + "Form"] = n(!0);
});
let L5 = class Ml {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(i);
      }, s;
    }, e(function(i, s, a) {
      r.reason || (r.reason = new Ft(i, s, a), n(r.reason));
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
      token: new Ml(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
};
function C5(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function R5(t) {
  return N.isObject(t) && t.isAxiosError === !0;
}
const Zo = {
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
Object.entries(Zo).forEach(([t, e]) => {
  Zo[e] = t;
});
function jl(t) {
  const e = new It(t), n = Xc(It.prototype.request, e);
  return N.extend(n, It.prototype, e, { allOwnKeys: !0 }), N.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(o) {
    return jl(Mt(t, o));
  }, n;
}
const ae = jl(Dn);
ae.Axios = It;
ae.CanceledError = Ft;
ae.CancelToken = L5;
ae.isCancel = Nl;
ae.VERSION = rr;
ae.toFormData = wr;
ae.AxiosError = F;
ae.Cancel = ae.CanceledError;
ae.all = function(e) {
  return Promise.all(e);
};
ae.spread = C5;
ae.isAxiosError = R5;
ae.mergeConfig = Mt;
ae.AxiosHeaders = Te;
ae.formToJSON = (t) => Sl(N.isHTMLForm(t) ? new FormData(t) : t);
ae.getAdapter = ql.getAdapter;
ae.HttpStatusCode = Zo;
ae.default = ae;
const {
  Axios: cQ,
  AxiosError: lQ,
  CanceledError: uQ,
  isCancel: pQ,
  CancelToken: dQ,
  VERSION: fQ,
  all: mQ,
  Cancel: hQ,
  isAxiosError: gQ,
  spread: yQ,
  toFormData: vQ,
  AxiosHeaders: bQ,
  HttpStatusCode: xQ,
  formToJSON: wQ,
  getAdapter: EQ,
  mergeConfig: TQ
} = ae;
class P5 {
  constructor() {
    Ue(this, "parser");
    this.parser = new p6();
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
      const o = ["xml", "rss", "atom", "rdf"], i = r.includes("text/html") || r.includes("application/html"), s = o.some((c) => r.includes(c));
      if (i && !s)
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
        isoDate: c.isoDate
      })), a;
    } catch (n) {
      console.error("Error parsing feed:", n);
      const r = n instanceof Error ? n.message : String(n);
      throw r.includes("INVALID_FEED_TYPE") ? n : new Error("FAILED_TO_PARSE: Could not parse feed. " + r);
    }
  }
}
const Ul = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", I5 = Ul + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", k5 = "[" + Ul + "][" + I5 + "]*", F5 = new RegExp("^" + k5 + "$");
function Bl(t, e) {
  const n = [];
  let r = e.exec(t);
  for (; r; ) {
    const o = [];
    o.startIndex = e.lastIndex - r[0].length;
    const i = r.length;
    for (let s = 0; s < i; s++)
      o.push(r[s]);
    n.push(o), r = e.exec(t);
  }
  return n;
}
const Sr = function(t) {
  const e = F5.exec(t);
  return !(e === null || typeof e > "u");
};
function q5(t) {
  return typeof t < "u";
}
const M5 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function j5(t, e) {
  e = Object.assign({}, M5, e);
  const n = [];
  let r = !1, o = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let i = 0; i < t.length; i++)
    if (t[i] === "<" && t[i + 1] === "?") {
      if (i += 2, i = za(t, i), i.err) return i;
    } else if (t[i] === "<") {
      let s = i;
      if (i++, t[i] === "!") {
        i = Ha(t, i);
        continue;
      } else {
        let a = !1;
        t[i] === "/" && (a = !0, i++);
        let c = "";
        for (; i < t.length && t[i] !== ">" && t[i] !== " " && t[i] !== "	" && t[i] !== `
` && t[i] !== "\r"; i++)
          c += t[i];
        if (c = c.trim(), c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1), i--), !G5(c)) {
          let u;
          return c.trim().length === 0 ? u = "Invalid space after '<'." : u = "Tag '" + c + "' is an invalid name.", pe("InvalidTag", u, Ae(t, i));
        }
        const p = $5(t, i);
        if (p === !1)
          return pe("InvalidAttr", "Attributes for '" + c + "' have open quote.", Ae(t, i));
        let l = p.value;
        if (i = p.index, l[l.length - 1] === "/") {
          const u = i - l.length;
          l = l.substring(0, l.length - 1);
          const d = Xa(l, e);
          if (d === !0)
            r = !0;
          else
            return pe(d.err.code, d.err.msg, Ae(t, u + d.err.line));
        } else if (a)
          if (p.tagClosed) {
            if (l.trim().length > 0)
              return pe("InvalidTag", "Closing tag '" + c + "' can't have attributes or invalid starting.", Ae(t, s));
            if (n.length === 0)
              return pe("InvalidTag", "Closing tag '" + c + "' has not been opened.", Ae(t, s));
            {
              const u = n.pop();
              if (c !== u.tagName) {
                let d = Ae(t, u.tagStartPos);
                return pe(
                  "InvalidTag",
                  "Expected closing tag '" + u.tagName + "' (opened in line " + d.line + ", col " + d.col + ") instead of closing tag '" + c + "'.",
                  Ae(t, s)
                );
              }
              n.length == 0 && (o = !0);
            }
          } else return pe("InvalidTag", "Closing tag '" + c + "' doesn't have proper closing.", Ae(t, i));
        else {
          const u = Xa(l, e);
          if (u !== !0)
            return pe(u.err.code, u.err.msg, Ae(t, i - l.length + u.err.line));
          if (o === !0)
            return pe("InvalidXml", "Multiple possible root nodes found.", Ae(t, i));
          e.unpairedTags.indexOf(c) !== -1 || n.push({ tagName: c, tagStartPos: s }), r = !0;
        }
        for (i++; i < t.length; i++)
          if (t[i] === "<")
            if (t[i + 1] === "!") {
              i++, i = Ha(t, i);
              continue;
            } else if (t[i + 1] === "?") {
              if (i = za(t, ++i), i.err) return i;
            } else
              break;
          else if (t[i] === "&") {
            const u = H5(t, i);
            if (u == -1)
              return pe("InvalidChar", "char '&' is not expected.", Ae(t, i));
            i = u;
          } else if (o === !0 && !Va(t[i]))
            return pe("InvalidXml", "Extra text at the end", Ae(t, i));
        t[i] === "<" && i--;
      }
    } else {
      if (Va(t[i]))
        continue;
      return pe("InvalidChar", "char '" + t[i] + "' is not expected.", Ae(t, i));
    }
  if (r) {
    if (n.length == 1)
      return pe("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", Ae(t, n[0].tagStartPos));
    if (n.length > 0)
      return pe("InvalidXml", "Invalid '" + JSON.stringify(n.map((i) => i.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return pe("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Va(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function za(t, e) {
  const n = e;
  for (; e < t.length; e++)
    if (t[e] == "?" || t[e] == " ") {
      const r = t.substr(n, e - n);
      if (e > 5 && r === "xml")
        return pe("InvalidXml", "XML declaration allowed only at the start of the document.", Ae(t, e));
      if (t[e] == "?" && t[e + 1] == ">") {
        e++;
        break;
      } else
        continue;
    }
  return e;
}
function Ha(t, e) {
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
const U5 = '"', B5 = "'";
function $5(t, e) {
  let n = "", r = "", o = !1;
  for (; e < t.length; e++) {
    if (t[e] === U5 || t[e] === B5)
      r === "" ? r = t[e] : r !== t[e] || (r = "");
    else if (t[e] === ">" && r === "") {
      o = !0;
      break;
    }
    n += t[e];
  }
  return r !== "" ? !1 : {
    value: n,
    index: e,
    tagClosed: o
  };
}
const V5 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Xa(t, e) {
  const n = Bl(t, V5), r = {};
  for (let o = 0; o < n.length; o++) {
    if (n[o][1].length === 0)
      return pe("InvalidAttr", "Attribute '" + n[o][2] + "' has no space in starting.", un(n[o]));
    if (n[o][3] !== void 0 && n[o][4] === void 0)
      return pe("InvalidAttr", "Attribute '" + n[o][2] + "' is without value.", un(n[o]));
    if (n[o][3] === void 0 && !e.allowBooleanAttributes)
      return pe("InvalidAttr", "boolean attribute '" + n[o][2] + "' is not allowed.", un(n[o]));
    const i = n[o][2];
    if (!X5(i))
      return pe("InvalidAttr", "Attribute '" + i + "' is an invalid name.", un(n[o]));
    if (!r.hasOwnProperty(i))
      r[i] = 1;
    else
      return pe("InvalidAttr", "Attribute '" + i + "' is repeated.", un(n[o]));
  }
  return !0;
}
function z5(t, e) {
  let n = /\d/;
  for (t[e] === "x" && (e++, n = /[\da-fA-F]/); e < t.length; e++) {
    if (t[e] === ";")
      return e;
    if (!t[e].match(n))
      break;
  }
  return -1;
}
function H5(t, e) {
  if (e++, t[e] === ";")
    return -1;
  if (t[e] === "#")
    return e++, z5(t, e);
  let n = 0;
  for (; e < t.length; e++, n++)
    if (!(t[e].match(/\w/) && n < 20)) {
      if (t[e] === ";")
        break;
      return -1;
    }
  return e;
}
function pe(t, e, n) {
  return {
    err: {
      code: t,
      msg: e,
      line: n.line || n,
      col: n.col
    }
  };
}
function X5(t) {
  return Sr(t);
}
function G5(t) {
  return Sr(t);
}
function Ae(t, e) {
  const n = t.substring(0, e).split(/\r?\n/);
  return {
    line: n.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: n[n.length - 1].length + 1
  };
}
function un(t) {
  return t.startIndex + t[1].length;
}
const W5 = {
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
}, Y5 = function(t) {
  return Object.assign({}, W5, t);
};
let sr;
typeof Symbol != "function" ? sr = "@@xmlMetadata" : sr = Symbol("XML Node Metadata");
class Nt {
  constructor(e) {
    this.tagname = e, this.child = [], this[":@"] = {};
  }
  add(e, n) {
    e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: n });
  }
  addChild(e, n) {
    e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({ [e.tagname]: e.child, ":@": e[":@"] }) : this.child.push({ [e.tagname]: e.child }), n !== void 0 && (this.child[this.child.length - 1][sr] = { startIndex: n });
  }
  /** symbol used for metadata */
  static getMetaDataSymbol() {
    return sr;
  }
}
class K5 {
  constructor(e) {
    this.suppressValidationErr = !e;
  }
  readDocType(e, n) {
    const r = {};
    if (e[n + 3] === "O" && e[n + 4] === "C" && e[n + 5] === "T" && e[n + 6] === "Y" && e[n + 7] === "P" && e[n + 8] === "E") {
      n = n + 9;
      let o = 1, i = !1, s = !1, a = "";
      for (; n < e.length; n++)
        if (e[n] === "<" && !s) {
          if (i && Tt(e, "!ENTITY", n)) {
            n += 7;
            let c, p;
            if ([c, p, n] = this.readEntityExp(e, n + 1, this.suppressValidationErr), p.indexOf("&") === -1) {
              const l = c.replace(/[.\-+*:]/g, "\\.");
              r[c] = {
                regx: RegExp(`&${l};`, "g"),
                val: p
              };
            }
          } else if (i && Tt(e, "!ELEMENT", n)) {
            n += 8;
            const { index: c } = this.readElementExp(e, n + 1);
            n = c;
          } else if (i && Tt(e, "!ATTLIST", n))
            n += 8;
          else if (i && Tt(e, "!NOTATION", n)) {
            n += 9;
            const { index: c } = this.readNotationExp(e, n + 1, this.suppressValidationErr);
            n = c;
          } else if (Tt(e, "!--", n)) s = !0;
          else throw new Error("Invalid DOCTYPE");
          o++, a = "";
        } else if (e[n] === ">") {
          if (s ? e[n - 1] === "-" && e[n - 2] === "-" && (s = !1, o--) : o--, o === 0)
            break;
        } else e[n] === "[" ? i = !0 : a += e[n];
      if (o !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: r, i: n };
  }
  readEntityExp(e, n) {
    n = Fe(e, n);
    let r = "";
    for (; n < e.length && !/\s/.test(e[n]) && e[n] !== '"' && e[n] !== "'"; )
      r += e[n], n++;
    if (pn(r), n = Fe(e, n), !this.suppressValidationErr) {
      if (e.substring(n, n + 6).toUpperCase() === "SYSTEM")
        throw new Error("External entities are not supported");
      if (e[n] === "%")
        throw new Error("Parameter entities are not supported");
    }
    let o = "";
    return [n, o] = this.readIdentifierVal(e, n, "entity"), n--, [r, o, n];
  }
  readNotationExp(e, n) {
    n = Fe(e, n);
    let r = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      r += e[n], n++;
    !this.suppressValidationErr && pn(r), n = Fe(e, n);
    const o = e.substring(n, n + 6).toUpperCase();
    if (!this.suppressValidationErr && o !== "SYSTEM" && o !== "PUBLIC")
      throw new Error(`Expected SYSTEM or PUBLIC, found "${o}"`);
    n += o.length, n = Fe(e, n);
    let i = null, s = null;
    if (o === "PUBLIC")
      [n, i] = this.readIdentifierVal(e, n, "publicIdentifier"), n = Fe(e, n), (e[n] === '"' || e[n] === "'") && ([n, s] = this.readIdentifierVal(e, n, "systemIdentifier"));
    else if (o === "SYSTEM" && ([n, s] = this.readIdentifierVal(e, n, "systemIdentifier"), !this.suppressValidationErr && !s))
      throw new Error("Missing mandatory system identifier for SYSTEM notation");
    return { notationName: r, publicIdentifier: i, systemIdentifier: s, index: --n };
  }
  readIdentifierVal(e, n, r) {
    let o = "";
    const i = e[n];
    if (i !== '"' && i !== "'")
      throw new Error(`Expected quoted string, found "${i}"`);
    for (n++; n < e.length && e[n] !== i; )
      o += e[n], n++;
    if (e[n] !== i)
      throw new Error(`Unterminated ${r} value`);
    return n++, [n, o];
  }
  readElementExp(e, n) {
    n = Fe(e, n);
    let r = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      r += e[n], n++;
    if (!this.suppressValidationErr && !Sr(r))
      throw new Error(`Invalid element name: "${r}"`);
    n = Fe(e, n);
    let o = "";
    if (e[n] === "E" && Tt(e, "MPTY", n)) n += 4;
    else if (e[n] === "A" && Tt(e, "NY", n)) n += 2;
    else if (e[n] === "(") {
      for (n++; n < e.length && e[n] !== ")"; )
        o += e[n], n++;
      if (e[n] !== ")")
        throw new Error("Unterminated content model");
    } else if (!this.suppressValidationErr)
      throw new Error(`Invalid Element Expression, found "${e[n]}"`);
    return {
      elementName: r,
      contentModel: o.trim(),
      index: n
    };
  }
  readAttlistExp(e, n) {
    n = Fe(e, n);
    let r = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      r += e[n], n++;
    pn(r), n = Fe(e, n);
    let o = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      o += e[n], n++;
    if (!pn(o))
      throw new Error(`Invalid attribute name: "${o}"`);
    n = Fe(e, n);
    let i = "";
    if (e.substring(n, n + 8).toUpperCase() === "NOTATION") {
      if (i = "NOTATION", n += 8, n = Fe(e, n), e[n] !== "(")
        throw new Error(`Expected '(', found "${e[n]}"`);
      n++;
      let a = [];
      for (; n < e.length && e[n] !== ")"; ) {
        let c = "";
        for (; n < e.length && e[n] !== "|" && e[n] !== ")"; )
          c += e[n], n++;
        if (c = c.trim(), !pn(c))
          throw new Error(`Invalid notation name: "${c}"`);
        a.push(c), e[n] === "|" && (n++, n = Fe(e, n));
      }
      if (e[n] !== ")")
        throw new Error("Unterminated list of notations");
      n++, i += " (" + a.join("|") + ")";
    } else {
      for (; n < e.length && !/\s/.test(e[n]); )
        i += e[n], n++;
      const a = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
      if (!this.suppressValidationErr && !a.includes(i.toUpperCase()))
        throw new Error(`Invalid attribute type: "${i}"`);
    }
    n = Fe(e, n);
    let s = "";
    return e.substring(n, n + 8).toUpperCase() === "#REQUIRED" ? (s = "#REQUIRED", n += 8) : e.substring(n, n + 7).toUpperCase() === "#IMPLIED" ? (s = "#IMPLIED", n += 7) : [n, s] = this.readIdentifierVal(e, n, "ATTLIST"), {
      elementName: r,
      attributeName: o,
      attributeType: i,
      defaultValue: s,
      index: n
    };
  }
}
const Fe = (t, e) => {
  for (; e < t.length && /\s/.test(t[e]); )
    e++;
  return e;
};
function Tt(t, e, n) {
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[n + r + 1]) return !1;
  return !0;
}
function pn(t) {
  if (Sr(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const J5 = /^[-+]?0x[a-fA-F0-9]+$/, Q5 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Z5 = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function eW(t, e = {}) {
  if (e = Object.assign({}, Z5, e), !t || typeof t != "string") return t;
  let n = t.trim();
  if (e.skipLike !== void 0 && e.skipLike.test(n)) return t;
  if (t === "0") return 0;
  if (e.hex && J5.test(n))
    return oW(n, 16);
  if (n.includes("e") || n.includes("E"))
    return nW(t, n, e);
  {
    const r = Q5.exec(n);
    if (r) {
      const o = r[1] || "", i = r[2];
      let s = rW(r[3]);
      const a = o ? (
        // 0., -00., 000.
        t[i.length + 1] === "."
      ) : t[i.length] === ".";
      if (!e.leadingZeros && (i.length > 1 || i.length === 1 && !a))
        return t;
      {
        const c = Number(n), p = String(c);
        if (c === 0) return c;
        if (p.search(/[eE]/) !== -1)
          return e.eNotation ? c : t;
        if (n.indexOf(".") !== -1)
          return p === "0" || p === s || p === `${o}${s}` ? c : t;
        let l = i ? s : n;
        return i ? l === p || o + l === p ? c : t : l === p || l === o + p ? c : t;
      }
    } else
      return t;
  }
}
const tW = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function nW(t, e, n) {
  if (!n.eNotation) return t;
  const r = e.match(tW);
  if (r) {
    let o = r[1] || "";
    const i = r[3].indexOf("e") === -1 ? "E" : "e", s = r[2], a = o ? (
      // 0E.
      t[s.length + 1] === i
    ) : t[s.length] === i;
    return s.length > 1 && a ? t : s.length === 1 && (r[3].startsWith(`.${i}`) || r[3][0] === i) ? Number(e) : n.leadingZeros && !a ? (e = (r[1] || "") + r[3], Number(e)) : t;
  } else
    return t;
}
function rW(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substring(0, t.length - 1))), t;
}
function oW(t, e) {
  if (parseInt) return parseInt(t, e);
  if (Number.parseInt) return Number.parseInt(t, e);
  if (window && window.parseInt) return window.parseInt(t, e);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function $l(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (e) => {
    for (const n of t)
      if (typeof n == "string" && e === n || n instanceof RegExp && n.test(e))
        return !0;
  } : () => !1;
}
class iW {
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
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (n, r) => Ga(r, 10, "&#") },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (n, r) => Ga(r, 16, "&#x") }
    }, this.addExternalEntities = sW, this.parseXml = pW, this.parseTextData = aW, this.resolveNameSpace = cW, this.buildAttributesMap = uW, this.isItStopNode = hW, this.replaceEntitiesValue = fW, this.readStopNodeData = yW, this.saveTextToParentTag = mW, this.addChild = dW, this.ignoreAttributesFn = $l(this.options.ignoreAttributes), this.options.stopNodes && this.options.stopNodes.length > 0) {
      this.stopNodesExact = /* @__PURE__ */ new Set(), this.stopNodesWildcard = /* @__PURE__ */ new Set();
      for (let n = 0; n < this.options.stopNodes.length; n++) {
        const r = this.options.stopNodes[n];
        typeof r == "string" && (r.startsWith("*.") ? this.stopNodesWildcard.add(r.substring(2)) : this.stopNodesExact.add(r));
      }
    }
  }
}
function sW(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n], o = r.replace(/[.\-+*:]/g, "\\.");
    this.lastEntities[r] = {
      regex: new RegExp("&" + o + ";", "g"),
      val: t[r]
    };
  }
}
function aW(t, e, n, r, o, i, s) {
  if (t !== void 0 && (this.options.trimValues && !r && (t = t.trim()), t.length > 0)) {
    s || (t = this.replaceEntitiesValue(t));
    const a = this.options.tagValueProcessor(e, t, n, o, i);
    return a == null ? t : typeof a != typeof t || a !== t ? a : this.options.trimValues ? ti(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? ti(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function cW(t) {
  if (this.options.removeNSPrefix) {
    const e = t.split(":"), n = t.charAt(0) === "/" ? "/" : "";
    if (e[0] === "xmlns")
      return "";
    e.length === 2 && (t = n + e[1]);
  }
  return t;
}
const lW = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function uW(t, e) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const n = Bl(t, lW), r = n.length, o = {};
    for (let i = 0; i < r; i++) {
      const s = this.resolveNameSpace(n[i][1]);
      if (this.ignoreAttributesFn(s, e))
        continue;
      let a = n[i][4], c = this.options.attributeNamePrefix + s;
      if (s.length)
        if (this.options.transformAttributeName && (c = this.options.transformAttributeName(c)), c === "__proto__" && (c = "#__proto__"), a !== void 0) {
          this.options.trimValues && (a = a.trim()), a = this.replaceEntitiesValue(a);
          const p = this.options.attributeValueProcessor(s, a, e);
          p == null ? o[c] = a : typeof p != typeof a || p !== a ? o[c] = p : o[c] = ti(
            a,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (o[c] = !0);
    }
    if (!Object.keys(o).length)
      return;
    if (this.options.attributesGroupName) {
      const i = {};
      return i[this.options.attributesGroupName] = o, i;
    }
    return o;
  }
}
const pW = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const e = new Nt("!xml");
  let n = e, r = "", o = "";
  const i = new K5(this.options.processEntities);
  for (let s = 0; s < t.length; s++)
    if (t[s] === "<")
      if (t[s + 1] === "/") {
        const c = _t(t, ">", s, "Closing Tag is not closed.");
        let p = t.substring(s + 2, c).trim();
        if (this.options.removeNSPrefix) {
          const d = p.indexOf(":");
          d !== -1 && (p = p.substr(d + 1));
        }
        this.options.transformTagName && (p = this.options.transformTagName(p)), n && (r = this.saveTextToParentTag(r, n, o));
        const l = o.substring(o.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let u = 0;
        l && this.options.unpairedTags.indexOf(l) !== -1 ? (u = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : u = o.lastIndexOf("."), o = o.substring(0, u), n = this.tagsNodeStack.pop(), r = "", s = c;
      } else if (t[s + 1] === "?") {
        let c = ei(t, s, !1, "?>");
        if (!c) throw new Error("Pi Tag is not closed.");
        if (r = this.saveTextToParentTag(r, n, o), !(this.options.ignoreDeclaration && c.tagName === "?xml" || this.options.ignorePiTags)) {
          const p = new Nt(c.tagName);
          p.add(this.options.textNodeName, ""), c.tagName !== c.tagExp && c.attrExpPresent && (p[":@"] = this.buildAttributesMap(c.tagExp, o)), this.addChild(n, p, o, s);
        }
        s = c.closeIndex + 1;
      } else if (t.substr(s + 1, 3) === "!--") {
        const c = _t(t, "-->", s + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const p = t.substring(s + 4, c - 2);
          r = this.saveTextToParentTag(r, n, o), n.add(this.options.commentPropName, [{ [this.options.textNodeName]: p }]);
        }
        s = c;
      } else if (t.substr(s + 1, 2) === "!D") {
        const c = i.readDocType(t, s);
        this.docTypeEntities = c.entities, s = c.i;
      } else if (t.substr(s + 1, 2) === "![") {
        const c = _t(t, "]]>", s, "CDATA is not closed.") - 2, p = t.substring(s + 9, c);
        r = this.saveTextToParentTag(r, n, o);
        let l = this.parseTextData(p, n.tagname, o, !0, !1, !0, !0);
        l == null && (l = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : n.add(this.options.textNodeName, l), s = c + 2;
      } else {
        let c = ei(t, s, this.options.removeNSPrefix), p = c.tagName;
        const l = c.rawTagName;
        let u = c.tagExp, d = c.attrExpPresent, g = c.closeIndex;
        if (this.options.transformTagName) {
          const b = this.options.transformTagName(p);
          u === p && (u = b), p = b;
        }
        n && r && n.tagname !== "!xml" && (r = this.saveTextToParentTag(r, n, o, !1));
        const f = n;
        f && this.options.unpairedTags.indexOf(f.tagname) !== -1 && (n = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), p !== e.tagname && (o += o ? "." + p : p);
        const x = s;
        if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, o, p)) {
          let b = "";
          if (u.length > 0 && u.lastIndexOf("/") === u.length - 1)
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), o = o.substr(0, o.length - 1), u = p) : u = u.substr(0, u.length - 1), s = c.closeIndex;
          else if (this.options.unpairedTags.indexOf(p) !== -1)
            s = c.closeIndex;
          else {
            const w = this.readStopNodeData(t, l, g + 1);
            if (!w) throw new Error(`Unexpected end of ${l}`);
            s = w.i, b = w.tagContent;
          }
          const S = new Nt(p);
          p !== u && d && (S[":@"] = this.buildAttributesMap(
            u,
            o
          )), b && (b = this.parseTextData(b, p, o, !0, d, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), S.add(this.options.textNodeName, b), this.addChild(n, S, o, x);
        } else {
          if (u.length > 0 && u.lastIndexOf("/") === u.length - 1) {
            if (p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), o = o.substr(0, o.length - 1), u = p) : u = u.substr(0, u.length - 1), this.options.transformTagName) {
              const S = this.options.transformTagName(p);
              u === p && (u = S), p = S;
            }
            const b = new Nt(p);
            p !== u && d && (b[":@"] = this.buildAttributesMap(u, o)), this.addChild(n, b, o, x), o = o.substr(0, o.lastIndexOf("."));
          } else {
            const b = new Nt(p);
            this.tagsNodeStack.push(n), p !== u && d && (b[":@"] = this.buildAttributesMap(u, o)), this.addChild(n, b, o, x), n = b;
          }
          r = "", s = g;
        }
      }
    else
      r += t[s];
  return e.child;
};
function dW(t, e, n, r) {
  this.options.captureMetaData || (r = void 0);
  const o = this.options.updateTag(e.tagname, n, e[":@"]);
  o === !1 || (typeof o == "string" && (e.tagname = o), t.addChild(e, r));
}
const fW = function(t) {
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
function mW(t, e, n, r) {
  return t && (r === void 0 && (r = e.child.length === 0), t = this.parseTextData(
    t,
    e.tagname,
    n,
    !1,
    e[":@"] ? Object.keys(e[":@"]).length !== 0 : !1,
    r
  ), t !== void 0 && t !== "" && e.add(this.options.textNodeName, t), t = ""), t;
}
function hW(t, e, n, r) {
  return !!(e && e.has(r) || t && t.has(n));
}
function gW(t, e, n = ">") {
  let r, o = "";
  for (let i = e; i < t.length; i++) {
    let s = t[i];
    if (r)
      s === r && (r = "");
    else if (s === '"' || s === "'")
      r = s;
    else if (s === n[0])
      if (n[1]) {
        if (t[i + 1] === n[1])
          return {
            data: o,
            index: i
          };
      } else
        return {
          data: o,
          index: i
        };
    else s === "	" && (s = " ");
    o += s;
  }
}
function _t(t, e, n, r) {
  const o = t.indexOf(e, n);
  if (o === -1)
    throw new Error(r);
  return o + e.length - 1;
}
function ei(t, e, n, r = ">") {
  const o = gW(t, e + 1, r);
  if (!o) return;
  let i = o.data;
  const s = o.index, a = i.search(/\s/);
  let c = i, p = !0;
  a !== -1 && (c = i.substring(0, a), i = i.substring(a + 1).trimStart());
  const l = c;
  if (n) {
    const u = c.indexOf(":");
    u !== -1 && (c = c.substr(u + 1), p = c !== o.data.substr(u + 1));
  }
  return {
    tagName: c,
    tagExp: i,
    closeIndex: s,
    attrExpPresent: p,
    rawTagName: l
  };
}
function yW(t, e, n) {
  const r = n;
  let o = 1;
  for (; n < t.length; n++)
    if (t[n] === "<")
      if (t[n + 1] === "/") {
        const i = _t(t, ">", n, `${e} is not closed`);
        if (t.substring(n + 2, i).trim() === e && (o--, o === 0))
          return {
            tagContent: t.substring(r, n),
            i
          };
        n = i;
      } else if (t[n + 1] === "?")
        n = _t(t, "?>", n + 1, "StopNode is not closed.");
      else if (t.substr(n + 1, 3) === "!--")
        n = _t(t, "-->", n + 3, "StopNode is not closed.");
      else if (t.substr(n + 1, 2) === "![")
        n = _t(t, "]]>", n, "StopNode is not closed.") - 2;
      else {
        const i = ei(t, n, ">");
        i && ((i && i.tagName) === e && i.tagExp[i.tagExp.length - 1] !== "/" && o++, n = i.closeIndex);
      }
}
function ti(t, e, n) {
  if (e && typeof t == "string") {
    const r = t.trim();
    return r === "true" ? !0 : r === "false" ? !1 : eW(t, n);
  } else
    return q5(t) ? t : "";
}
function Ga(t, e, n) {
  const r = Number.parseInt(t, e);
  return r >= 0 && r <= 1114111 ? String.fromCodePoint(r) : n + t + ";";
}
const jo = Nt.getMetaDataSymbol();
function vW(t, e) {
  return Vl(t, e);
}
function Vl(t, e, n) {
  let r;
  const o = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i], a = bW(s);
    let c = "";
    if (n === void 0 ? c = a : c = n + "." + a, a === e.textNodeName)
      r === void 0 ? r = s[a] : r += "" + s[a];
    else {
      if (a === void 0)
        continue;
      if (s[a]) {
        let p = Vl(s[a], e, c);
        const l = wW(p, e);
        s[jo] !== void 0 && (p[jo] = s[jo]), s[":@"] ? xW(p, s[":@"], c, e) : Object.keys(p).length === 1 && p[e.textNodeName] !== void 0 && !e.alwaysCreateTextNode ? p = p[e.textNodeName] : Object.keys(p).length === 0 && (e.alwaysCreateTextNode ? p[e.textNodeName] = "" : p = ""), o[a] !== void 0 && o.hasOwnProperty(a) ? (Array.isArray(o[a]) || (o[a] = [o[a]]), o[a].push(p)) : e.isArray(a, c, l) ? o[a] = [p] : o[a] = p;
      }
    }
  }
  return typeof r == "string" ? r.length > 0 && (o[e.textNodeName] = r) : r !== void 0 && (o[e.textNodeName] = r), o;
}
function bW(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (r !== ":@") return r;
  }
}
function xW(t, e, n, r) {
  if (e) {
    const o = Object.keys(e), i = o.length;
    for (let s = 0; s < i; s++) {
      const a = o[s];
      r.isArray(a, n + "." + a, !0, !0) ? t[a] = [e[a]] : t[a] = e[a];
    }
  }
}
function wW(t, e) {
  const { textNodeName: n } = e, r = Object.keys(t).length;
  return !!(r === 0 || r === 1 && (t[n] || typeof t[n] == "boolean" || t[n] === 0));
}
class EW {
  constructor(e) {
    this.externalEntities = {}, this.options = Y5(e);
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
      const i = j5(e, n);
      if (i !== !0)
        throw Error(`${i.err.msg}:${i.err.line}:${i.err.col}`);
    }
    const r = new iW(this.options);
    r.addExternalEntities(this.externalEntities);
    const o = r.parseXml(e);
    return this.options.preserveOrder || o === void 0 ? o : vW(o, this.options);
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
    return Nt.getMetaDataSymbol();
  }
}
const TW = `
`;
function SW(t, e) {
  let n = "";
  return e.format && e.indentBy.length > 0 && (n = TW), zl(t, e, "", n);
}
function zl(t, e, n, r) {
  let o = "", i = !1;
  for (let s = 0; s < t.length; s++) {
    const a = t[s], c = NW(a);
    if (c === void 0) continue;
    let p = "";
    if (n.length === 0 ? p = c : p = `${n}.${c}`, c === e.textNodeName) {
      let f = a[c];
      OW(p, e) || (f = e.tagValueProcessor(c, f), f = Hl(f, e)), i && (o += r), o += f, i = !1;
      continue;
    } else if (c === e.cdataPropName) {
      i && (o += r), o += `<![CDATA[${a[c][0][e.textNodeName]}]]>`, i = !1;
      continue;
    } else if (c === e.commentPropName) {
      o += r + `<!--${a[c][0][e.textNodeName]}-->`, i = !0;
      continue;
    } else if (c[0] === "?") {
      const f = Wa(a[":@"], e), x = c === "?xml" ? "" : r;
      let b = a[c][0][e.textNodeName];
      b = b.length !== 0 ? " " + b : "", o += x + `<${c}${b}${f}?>`, i = !0;
      continue;
    }
    let l = r;
    l !== "" && (l += e.indentBy);
    const u = Wa(a[":@"], e), d = r + `<${c}${u}`, g = zl(a[c], e, p, l);
    e.unpairedTags.indexOf(c) !== -1 ? e.suppressUnpairedNode ? o += d + ">" : o += d + "/>" : (!g || g.length === 0) && e.suppressEmptyNode ? o += d + "/>" : g && g.endsWith(">") ? o += d + `>${g}${r}</${c}>` : (o += d + ">", g && r !== "" && (g.includes("/>") || g.includes("</")) ? o += r + e.indentBy + g + r : o += g, o += `</${c}>`), i = !0;
  }
  return o;
}
function NW(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (t.hasOwnProperty(r) && r !== ":@")
      return r;
  }
}
function Wa(t, e) {
  let n = "";
  if (t && !e.ignoreAttributes)
    for (let r in t) {
      if (!t.hasOwnProperty(r)) continue;
      let o = e.attributeValueProcessor(r, t[r]);
      o = Hl(o, e), o === !0 && e.suppressBooleanAttributes ? n += ` ${r.substr(e.attributeNamePrefix.length)}` : n += ` ${r.substr(e.attributeNamePrefix.length)}="${o}"`;
    }
  return n;
}
function OW(t, e) {
  t = t.substr(0, t.length - e.textNodeName.length - 1);
  let n = t.substr(t.lastIndexOf(".") + 1);
  for (let r in e.stopNodes)
    if (e.stopNodes[r] === t || e.stopNodes[r] === "*." + n) return !0;
  return !1;
}
function Hl(t, e) {
  if (t && t.length > 0 && e.processEntities)
    for (let n = 0; n < e.entities.length; n++) {
      const r = e.entities[n];
      t = t.replace(r.regex, r.val);
    }
  return t;
}
const AW = {
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
function xt(t) {
  this.options = Object.assign({}, AW, t), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
    return !1;
  } : (this.ignoreAttributesFn = $l(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = LW), this.processTextOrObjNode = _W, this.options.format ? (this.indentate = DW, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
    return "";
  }, this.tagEndChar = ">", this.newLine = "");
}
xt.prototype.build = function(t) {
  return this.options.preserveOrder ? SW(t, this.options) : (Array.isArray(t) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (t = {
    [this.options.arrayNodeName]: t
  }), this.j2x(t, 0, []).val);
};
xt.prototype.j2x = function(t, e, n) {
  let r = "", o = "";
  const i = n.join(".");
  for (let s in t)
    if (Object.prototype.hasOwnProperty.call(t, s))
      if (typeof t[s] > "u")
        this.isAttribute(s) && (o += "");
      else if (t[s] === null)
        this.isAttribute(s) || s === this.options.cdataPropName ? o += "" : s[0] === "?" ? o += this.indentate(e) + "<" + s + "?" + this.tagEndChar : o += this.indentate(e) + "<" + s + "/" + this.tagEndChar;
      else if (t[s] instanceof Date)
        o += this.buildTextValNode(t[s], s, "", e);
      else if (typeof t[s] != "object") {
        const a = this.isAttribute(s);
        if (a && !this.ignoreAttributesFn(a, i))
          r += this.buildAttrPairStr(a, "" + t[s]);
        else if (!a)
          if (s === this.options.textNodeName) {
            let c = this.options.tagValueProcessor(s, "" + t[s]);
            o += this.replaceEntitiesValue(c);
          } else
            o += this.buildTextValNode(t[s], s, "", e);
      } else if (Array.isArray(t[s])) {
        const a = t[s].length;
        let c = "", p = "";
        for (let l = 0; l < a; l++) {
          const u = t[s][l];
          if (!(typeof u > "u")) if (u === null)
            s[0] === "?" ? o += this.indentate(e) + "<" + s + "?" + this.tagEndChar : o += this.indentate(e) + "<" + s + "/" + this.tagEndChar;
          else if (typeof u == "object")
            if (this.options.oneListGroup) {
              const d = this.j2x(u, e + 1, n.concat(s));
              c += d.val, this.options.attributesGroupName && u.hasOwnProperty(this.options.attributesGroupName) && (p += d.attrStr);
            } else
              c += this.processTextOrObjNode(u, s, e, n);
          else if (this.options.oneListGroup) {
            let d = this.options.tagValueProcessor(s, u);
            d = this.replaceEntitiesValue(d), c += d;
          } else
            c += this.buildTextValNode(u, s, "", e);
        }
        this.options.oneListGroup && (c = this.buildObjectNode(c, s, p, e)), o += c;
      } else if (this.options.attributesGroupName && s === this.options.attributesGroupName) {
        const a = Object.keys(t[s]), c = a.length;
        for (let p = 0; p < c; p++)
          r += this.buildAttrPairStr(a[p], "" + t[s][a[p]]);
      } else
        o += this.processTextOrObjNode(t[s], s, e, n);
  return { attrStr: r, val: o };
};
xt.prototype.buildAttrPairStr = function(t, e) {
  return e = this.options.attributeValueProcessor(t, "" + e), e = this.replaceEntitiesValue(e), this.options.suppressBooleanAttributes && e === "true" ? " " + t : " " + t + '="' + e + '"';
};
function _W(t, e, n, r) {
  const o = this.j2x(t, n + 1, r.concat(e));
  return t[this.options.textNodeName] !== void 0 && Object.keys(t).length === 1 ? this.buildTextValNode(t[this.options.textNodeName], e, o.attrStr, n) : this.buildObjectNode(o.val, e, o.attrStr, n);
}
xt.prototype.buildObjectNode = function(t, e, n, r) {
  if (t === "")
    return e[0] === "?" ? this.indentate(r) + "<" + e + n + "?" + this.tagEndChar : this.indentate(r) + "<" + e + n + this.closeTag(e) + this.tagEndChar;
  {
    let o = "</" + e + this.tagEndChar, i = "";
    return e[0] === "?" && (i = "?", o = ""), (n || n === "") && t.indexOf("<") === -1 ? this.indentate(r) + "<" + e + n + i + ">" + t + o : this.options.commentPropName !== !1 && e === this.options.commentPropName && i.length === 0 ? this.indentate(r) + `<!--${t}-->` + this.newLine : this.indentate(r) + "<" + e + n + i + this.tagEndChar + t + this.indentate(r) + o;
  }
};
xt.prototype.closeTag = function(t) {
  let e = "";
  return this.options.unpairedTags.indexOf(t) !== -1 ? this.options.suppressUnpairedNode || (e = "/") : this.options.suppressEmptyNode ? e = "/" : e = `></${t}`, e;
};
xt.prototype.buildTextValNode = function(t, e, n, r) {
  if (this.options.cdataPropName !== !1 && e === this.options.cdataPropName)
    return this.indentate(r) + `<![CDATA[${t}]]>` + this.newLine;
  if (this.options.commentPropName !== !1 && e === this.options.commentPropName)
    return this.indentate(r) + `<!--${t}-->` + this.newLine;
  if (e[0] === "?")
    return this.indentate(r) + "<" + e + n + "?" + this.tagEndChar;
  {
    let o = this.options.tagValueProcessor(e, t);
    return o = this.replaceEntitiesValue(o), o === "" ? this.indentate(r) + "<" + e + n + this.closeTag(e) + this.tagEndChar : this.indentate(r) + "<" + e + n + ">" + o + "</" + e + this.tagEndChar;
  }
};
xt.prototype.replaceEntitiesValue = function(t) {
  if (t && t.length > 0 && this.options.processEntities)
    for (let e = 0; e < this.options.entities.length; e++) {
      const n = this.options.entities[e];
      t = t.replace(n.regex, n.val);
    }
  return t;
};
function DW(t) {
  return this.options.indentBy.repeat(t);
}
function LW(t) {
  return t.startsWith(this.options.attributeNamePrefix) && t !== this.options.textNodeName ? t.substr(this.attrPrefixLen) : !1;
}
class CW {
  constructor(e) {
    Ue(this, "db");
    const n = e || Q.join(
      Le.getPath("userData"),
      "feeddownloader.sqlite"
    );
    this.db = new Ju(n), this.init();
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
      const o = (i) => `"${(i || "").replace(/"/g, '""').replace(/[\n\r]+/g, " ")}"`;
      n += `${o(r.podcastTitle)},${o(r.title)},${o(r.pubDate)},${o(r.downloadedAt)},${o(r.guid)}
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
  // ── Lifecycle ────────────────────────────────────────────
  close() {
    this.db.close();
  }
}
class RW {
  constructor(e) {
    Ue(this, "db");
    this.db = e || new CW();
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
  // ── OPML ─────────────────────────────────────────────────
  async importOPML(e) {
    const r = new EW({ ignoreAttributes: !1, attributeNamePrefix: "" }).parse(e);
    let o = 0;
    const i = (s) => {
      Array.isArray(s) ? s.forEach((a) => i(a)) : typeof s == "object" && (s.xmlUrl && (this.addFeed({
        url: s.xmlUrl,
        title: s.text || s.title || "Imported Feed",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      }), o++), s.outline && i(s.outline));
    };
    return r.opml && r.opml.body && r.opml.body.outline && i(r.opml.body.outline), o;
  }
  exportOPML() {
    const e = this.getFeeds(), n = new xt({ ignoreAttributes: !1, format: !0, suppressEmptyNode: !0 }), r = {
      opml: {
        "@_version": "2.0",
        head: {
          title: "FeedDownloader Export",
          dateCreated: (/* @__PURE__ */ new Date()).toUTCString()
        },
        body: {
          outline: e.map((o) => ({
            "@_text": o.title,
            "@_title": o.title,
            "@_type": "rss",
            "@_xmlUrl": o.url
          }))
        }
      }
    };
    return n.build(r);
  }
}
var Pe = {}, ge = {};
ge.fromCallback = function(t) {
  return Object.defineProperty(function(...e) {
    if (typeof e[e.length - 1] == "function") t.apply(this, e);
    else
      return new Promise((n, r) => {
        e.push((o, i) => o != null ? r(o) : n(i)), t.apply(this, e);
      });
  }, "name", { value: t.name });
};
ge.fromPromise = function(t) {
  return Object.defineProperty(function(...e) {
    const n = e[e.length - 1];
    if (typeof n != "function") return t.apply(this, e);
    e.pop(), t.apply(this, e).then((r) => n(null, r), n);
  }, "name", { value: t.name });
};
var ft = Qu, PW = process.cwd, Wn = null, IW = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function() {
  return Wn || (Wn = PW.call(process)), Wn;
};
try {
  process.cwd();
} catch {
}
if (typeof process.chdir == "function") {
  var Ya = process.chdir;
  process.chdir = function(t) {
    Wn = null, Ya.call(process, t);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, Ya);
}
var kW = FW;
function FW(t) {
  ft.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && e(t), t.lutimes || n(t), t.chown = i(t.chown), t.fchown = i(t.fchown), t.lchown = i(t.lchown), t.chmod = r(t.chmod), t.fchmod = r(t.fchmod), t.lchmod = r(t.lchmod), t.chownSync = s(t.chownSync), t.fchownSync = s(t.fchownSync), t.lchownSync = s(t.lchownSync), t.chmodSync = o(t.chmodSync), t.fchmodSync = o(t.fchmodSync), t.lchmodSync = o(t.lchmodSync), t.stat = a(t.stat), t.fstat = a(t.fstat), t.lstat = a(t.lstat), t.statSync = c(t.statSync), t.fstatSync = c(t.fstatSync), t.lstatSync = c(t.lstatSync), t.chmod && !t.lchmod && (t.lchmod = function(l, u, d) {
    d && process.nextTick(d);
  }, t.lchmodSync = function() {
  }), t.chown && !t.lchown && (t.lchown = function(l, u, d, g) {
    g && process.nextTick(g);
  }, t.lchownSync = function() {
  }), IW === "win32" && (t.rename = typeof t.rename != "function" ? t.rename : function(l) {
    function u(d, g, f) {
      var x = Date.now(), b = 0;
      l(d, g, function S(w) {
        if (w && (w.code === "EACCES" || w.code === "EPERM" || w.code === "EBUSY") && Date.now() - x < 6e4) {
          setTimeout(function() {
            t.stat(g, function(y, E) {
              y && y.code === "ENOENT" ? l(d, g, S) : f(w);
            });
          }, b), b < 100 && (b += 10);
          return;
        }
        f && f(w);
      });
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(u, l), u;
  }(t.rename)), t.read = typeof t.read != "function" ? t.read : function(l) {
    function u(d, g, f, x, b, S) {
      var w;
      if (S && typeof S == "function") {
        var y = 0;
        w = function(E, A, L) {
          if (E && E.code === "EAGAIN" && y < 10)
            return y++, l.call(t, d, g, f, x, b, w);
          S.apply(this, arguments);
        };
      }
      return l.call(t, d, g, f, x, b, w);
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(u, l), u;
  }(t.read), t.readSync = typeof t.readSync != "function" ? t.readSync : /* @__PURE__ */ function(l) {
    return function(u, d, g, f, x) {
      for (var b = 0; ; )
        try {
          return l.call(t, u, d, g, f, x);
        } catch (S) {
          if (S.code === "EAGAIN" && b < 10) {
            b++;
            continue;
          }
          throw S;
        }
    };
  }(t.readSync);
  function e(l) {
    l.lchmod = function(u, d, g) {
      l.open(
        u,
        ft.O_WRONLY | ft.O_SYMLINK,
        d,
        function(f, x) {
          if (f) {
            g && g(f);
            return;
          }
          l.fchmod(x, d, function(b) {
            l.close(x, function(S) {
              g && g(b || S);
            });
          });
        }
      );
    }, l.lchmodSync = function(u, d) {
      var g = l.openSync(u, ft.O_WRONLY | ft.O_SYMLINK, d), f = !0, x;
      try {
        x = l.fchmodSync(g, d), f = !1;
      } finally {
        if (f)
          try {
            l.closeSync(g);
          } catch {
          }
        else
          l.closeSync(g);
      }
      return x;
    };
  }
  function n(l) {
    ft.hasOwnProperty("O_SYMLINK") && l.futimes ? (l.lutimes = function(u, d, g, f) {
      l.open(u, ft.O_SYMLINK, function(x, b) {
        if (x) {
          f && f(x);
          return;
        }
        l.futimes(b, d, g, function(S) {
          l.close(b, function(w) {
            f && f(S || w);
          });
        });
      });
    }, l.lutimesSync = function(u, d, g) {
      var f = l.openSync(u, ft.O_SYMLINK), x, b = !0;
      try {
        x = l.futimesSync(f, d, g), b = !1;
      } finally {
        if (b)
          try {
            l.closeSync(f);
          } catch {
          }
        else
          l.closeSync(f);
      }
      return x;
    }) : l.futimes && (l.lutimes = function(u, d, g, f) {
      f && process.nextTick(f);
    }, l.lutimesSync = function() {
    });
  }
  function r(l) {
    return l && function(u, d, g) {
      return l.call(t, u, d, function(f) {
        p(f) && (f = null), g && g.apply(this, arguments);
      });
    };
  }
  function o(l) {
    return l && function(u, d) {
      try {
        return l.call(t, u, d);
      } catch (g) {
        if (!p(g)) throw g;
      }
    };
  }
  function i(l) {
    return l && function(u, d, g, f) {
      return l.call(t, u, d, g, function(x) {
        p(x) && (x = null), f && f.apply(this, arguments);
      });
    };
  }
  function s(l) {
    return l && function(u, d, g) {
      try {
        return l.call(t, u, d, g);
      } catch (f) {
        if (!p(f)) throw f;
      }
    };
  }
  function a(l) {
    return l && function(u, d, g) {
      typeof d == "function" && (g = d, d = null);
      function f(x, b) {
        b && (b.uid < 0 && (b.uid += 4294967296), b.gid < 0 && (b.gid += 4294967296)), g && g.apply(this, arguments);
      }
      return d ? l.call(t, u, d, f) : l.call(t, u, f);
    };
  }
  function c(l) {
    return l && function(u, d) {
      var g = d ? l.call(t, u, d) : l.call(t, u);
      return g && (g.uid < 0 && (g.uid += 4294967296), g.gid < 0 && (g.gid += 4294967296)), g;
    };
  }
  function p(l) {
    if (!l || l.code === "ENOSYS")
      return !0;
    var u = !process.getuid || process.getuid() !== 0;
    return !!(u && (l.code === "EINVAL" || l.code === "EPERM"));
  }
}
var Ka = De.Stream, qW = MW;
function MW(t) {
  return {
    ReadStream: e,
    WriteStream: n
  };
  function e(r, o) {
    if (!(this instanceof e)) return new e(r, o);
    Ka.call(this);
    var i = this;
    this.path = r, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 64 * 1024, o = o || {};
    for (var s = Object.keys(o), a = 0, c = s.length; a < c; a++) {
      var p = s[a];
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
        i._read();
      });
      return;
    }
    t.open(this.path, this.flags, this.mode, function(l, u) {
      if (l) {
        i.emit("error", l), i.readable = !1;
        return;
      }
      i.fd = u, i.emit("open", u), i._read();
    });
  }
  function n(r, o) {
    if (!(this instanceof n)) return new n(r, o);
    Ka.call(this), this.path = r, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, o = o || {};
    for (var i = Object.keys(o), s = 0, a = i.length; s < a; s++) {
      var c = i[s];
      this[c] = o[c];
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
var jW = BW, UW = Object.getPrototypeOf || function(t) {
  return t.__proto__;
};
function BW(t) {
  if (t === null || typeof t != "object")
    return t;
  if (t instanceof Object)
    var e = { __proto__: UW(t) };
  else
    var e = /* @__PURE__ */ Object.create(null);
  return Object.getOwnPropertyNames(t).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
  }), e;
}
var se = pi, $W = kW, VW = qW, zW = jW, Un = bt, Ee, ar;
typeof Symbol == "function" && typeof Symbol.for == "function" ? (Ee = Symbol.for("graceful-fs.queue"), ar = Symbol.for("graceful-fs.previous")) : (Ee = "___graceful-fs.queue", ar = "___graceful-fs.previous");
function HW() {
}
function Xl(t, e) {
  Object.defineProperty(t, Ee, {
    get: function() {
      return e;
    }
  });
}
var kt = HW;
Un.debuglog ? kt = Un.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (kt = function() {
  var t = Un.format.apply(Un, arguments);
  t = "GFS4: " + t.split(/\n/).join(`
GFS4: `), console.error(t);
});
if (!se[Ee]) {
  var XW = z[Ee] || [];
  Xl(se, XW), se.close = function(t) {
    function e(n, r) {
      return t.call(se, n, function(o) {
        o || Ja(), typeof r == "function" && r.apply(this, arguments);
      });
    }
    return Object.defineProperty(e, ar, {
      value: t
    }), e;
  }(se.close), se.closeSync = function(t) {
    function e(n) {
      t.apply(se, arguments), Ja();
    }
    return Object.defineProperty(e, ar, {
      value: t
    }), e;
  }(se.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    kt(se[Ee]), wc.equal(se[Ee].length, 0);
  });
}
z[Ee] || Xl(z, se[Ee]);
var sn = Xi(zW(se));
process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !se.__patched && (sn = Xi(se), se.__patched = !0);
function Xi(t) {
  $W(t), t.gracefulify = Xi, t.createReadStream = A, t.createWriteStream = L;
  var e = t.readFile;
  t.readFile = n;
  function n(m, _, D) {
    return typeof _ == "function" && (D = _, _ = null), I(m, _, D);
    function I(j, B, $, q) {
      return e(j, B, function(k) {
        k && (k.code === "EMFILE" || k.code === "ENFILE") ? $t([I, [j, B, $], k, q || Date.now(), Date.now()]) : typeof $ == "function" && $.apply(this, arguments);
      });
    }
  }
  var r = t.writeFile;
  t.writeFile = o;
  function o(m, _, D, I) {
    return typeof D == "function" && (I = D, D = null), j(m, _, D, I);
    function j(B, $, q, k, Y) {
      return r(B, $, q, function(W) {
        W && (W.code === "EMFILE" || W.code === "ENFILE") ? $t([j, [B, $, q, k], W, Y || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  var i = t.appendFile;
  i && (t.appendFile = s);
  function s(m, _, D, I) {
    return typeof D == "function" && (I = D, D = null), j(m, _, D, I);
    function j(B, $, q, k, Y) {
      return i(B, $, q, function(W) {
        W && (W.code === "EMFILE" || W.code === "ENFILE") ? $t([j, [B, $, q, k], W, Y || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  var a = t.copyFile;
  a && (t.copyFile = c);
  function c(m, _, D, I) {
    return typeof D == "function" && (I = D, D = 0), j(m, _, D, I);
    function j(B, $, q, k, Y) {
      return a(B, $, q, function(W) {
        W && (W.code === "EMFILE" || W.code === "ENFILE") ? $t([j, [B, $, q, k], W, Y || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  var p = t.readdir;
  t.readdir = u;
  var l = /^v[0-5]\./;
  function u(m, _, D) {
    typeof _ == "function" && (D = _, _ = null);
    var I = l.test(process.version) ? function($, q, k, Y) {
      return p($, j(
        $,
        q,
        k,
        Y
      ));
    } : function($, q, k, Y) {
      return p($, q, j(
        $,
        q,
        k,
        Y
      ));
    };
    return I(m, _, D);
    function j(B, $, q, k) {
      return function(Y, W) {
        Y && (Y.code === "EMFILE" || Y.code === "ENFILE") ? $t([
          I,
          [B, $, q],
          Y,
          k || Date.now(),
          Date.now()
        ]) : (W && W.sort && W.sort(), typeof q == "function" && q.call(this, Y, W));
      };
    }
  }
  if (process.version.substr(0, 4) === "v0.8") {
    var d = VW(t);
    S = d.ReadStream, y = d.WriteStream;
  }
  var g = t.ReadStream;
  g && (S.prototype = Object.create(g.prototype), S.prototype.open = w);
  var f = t.WriteStream;
  f && (y.prototype = Object.create(f.prototype), y.prototype.open = E), Object.defineProperty(t, "ReadStream", {
    get: function() {
      return S;
    },
    set: function(m) {
      S = m;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(t, "WriteStream", {
    get: function() {
      return y;
    },
    set: function(m) {
      y = m;
    },
    enumerable: !0,
    configurable: !0
  });
  var x = S;
  Object.defineProperty(t, "FileReadStream", {
    get: function() {
      return x;
    },
    set: function(m) {
      x = m;
    },
    enumerable: !0,
    configurable: !0
  });
  var b = y;
  Object.defineProperty(t, "FileWriteStream", {
    get: function() {
      return b;
    },
    set: function(m) {
      b = m;
    },
    enumerable: !0,
    configurable: !0
  });
  function S(m, _) {
    return this instanceof S ? (g.apply(this, arguments), this) : S.apply(Object.create(S.prototype), arguments);
  }
  function w() {
    var m = this;
    O(m.path, m.flags, m.mode, function(_, D) {
      _ ? (m.autoClose && m.destroy(), m.emit("error", _)) : (m.fd = D, m.emit("open", D), m.read());
    });
  }
  function y(m, _) {
    return this instanceof y ? (f.apply(this, arguments), this) : y.apply(Object.create(y.prototype), arguments);
  }
  function E() {
    var m = this;
    O(m.path, m.flags, m.mode, function(_, D) {
      _ ? (m.destroy(), m.emit("error", _)) : (m.fd = D, m.emit("open", D));
    });
  }
  function A(m, _) {
    return new t.ReadStream(m, _);
  }
  function L(m, _) {
    return new t.WriteStream(m, _);
  }
  var P = t.open;
  t.open = O;
  function O(m, _, D, I) {
    return typeof D == "function" && (I = D, D = null), j(m, _, D, I);
    function j(B, $, q, k, Y) {
      return P(B, $, q, function(W, V) {
        W && (W.code === "EMFILE" || W.code === "ENFILE") ? $t([j, [B, $, q, k], W, Y || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  return t;
}
function $t(t) {
  kt("ENQUEUE", t[0].name, t[1]), se[Ee].push(t), Gi();
}
var Bn;
function Ja() {
  for (var t = Date.now(), e = 0; e < se[Ee].length; ++e)
    se[Ee][e].length > 2 && (se[Ee][e][3] = t, se[Ee][e][4] = t);
  Gi();
}
function Gi() {
  if (clearTimeout(Bn), Bn = void 0, se[Ee].length !== 0) {
    var t = se[Ee].shift(), e = t[0], n = t[1], r = t[2], o = t[3], i = t[4];
    if (o === void 0)
      kt("RETRY", e.name, n), e.apply(null, n);
    else if (Date.now() - o >= 6e4) {
      kt("TIMEOUT", e.name, n);
      var s = n.pop();
      typeof s == "function" && s.call(null, r);
    } else {
      var a = Date.now() - i, c = Math.max(i - o, 1), p = Math.min(c * 1.2, 100);
      a >= p ? (kt("RETRY", e.name, n), e.apply(null, n.concat([o]))) : se[Ee].push(t);
    }
    Bn === void 0 && (Bn = setTimeout(Gi, 0));
  }
}
(function(t) {
  const e = ge.fromCallback, n = sn, r = [
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
  Object.assign(t, n), r.forEach((o) => {
    t[o] = e(n[o]);
  }), t.exists = function(o, i) {
    return typeof i == "function" ? n.exists(o, i) : new Promise((s) => n.exists(o, s));
  }, t.read = function(o, i, s, a, c, p) {
    return typeof p == "function" ? n.read(o, i, s, a, c, p) : new Promise((l, u) => {
      n.read(o, i, s, a, c, (d, g, f) => {
        if (d) return u(d);
        l({ bytesRead: g, buffer: f });
      });
    });
  }, t.write = function(o, i, ...s) {
    return typeof s[s.length - 1] == "function" ? n.write(o, i, ...s) : new Promise((a, c) => {
      n.write(o, i, ...s, (p, l, u) => {
        if (p) return c(p);
        a({ bytesWritten: l, buffer: u });
      });
    });
  }, t.readv = function(o, i, ...s) {
    return typeof s[s.length - 1] == "function" ? n.readv(o, i, ...s) : new Promise((a, c) => {
      n.readv(o, i, ...s, (p, l, u) => {
        if (p) return c(p);
        a({ bytesRead: l, buffers: u });
      });
    });
  }, t.writev = function(o, i, ...s) {
    return typeof s[s.length - 1] == "function" ? n.writev(o, i, ...s) : new Promise((a, c) => {
      n.writev(o, i, ...s, (p, l, u) => {
        if (p) return c(p);
        a({ bytesWritten: l, buffers: u });
      });
    });
  }, typeof n.realpath.native == "function" ? t.realpath.native = e(n.realpath.native) : process.emitWarning(
    "fs.realpath.native is not a function. Is fs being monkey-patched?",
    "Warning",
    "fs-extra-WARN0003"
  );
})(Pe);
var Wi = {}, Gl = {};
const GW = Q;
Gl.checkPath = function(e) {
  if (process.platform === "win32" && /[<>:"|?*]/.test(e.replace(GW.parse(e).root, ""))) {
    const r = new Error(`Path contains invalid characters: ${e}`);
    throw r.code = "EINVAL", r;
  }
};
const Wl = Pe, { checkPath: Yl } = Gl, Kl = (t) => {
  const e = { mode: 511 };
  return typeof t == "number" ? t : { ...e, ...t }.mode;
};
Wi.makeDir = async (t, e) => (Yl(t), Wl.mkdir(t, {
  mode: Kl(e),
  recursive: !0
}));
Wi.makeDirSync = (t, e) => (Yl(t), Wl.mkdirSync(t, {
  mode: Kl(e),
  recursive: !0
}));
const WW = ge.fromPromise, { makeDir: YW, makeDirSync: Uo } = Wi, Bo = WW(YW);
var tt = {
  mkdirs: Bo,
  mkdirsSync: Uo,
  // alias
  mkdirp: Bo,
  mkdirpSync: Uo,
  ensureDir: Bo,
  ensureDirSync: Uo
};
const KW = ge.fromPromise, Jl = Pe;
function JW(t) {
  return Jl.access(t).then(() => !0).catch(() => !1);
}
var jt = {
  pathExists: KW(JW),
  pathExistsSync: Jl.existsSync
};
const Wt = Pe, QW = ge.fromPromise;
async function ZW(t, e, n) {
  const r = await Wt.open(t, "r+");
  let o = null;
  try {
    await Wt.futimes(r, e, n);
  } finally {
    try {
      await Wt.close(r);
    } catch (i) {
      o = i;
    }
  }
  if (o)
    throw o;
}
function eY(t, e, n) {
  const r = Wt.openSync(t, "r+");
  return Wt.futimesSync(r, e, n), Wt.closeSync(r);
}
var Ql = {
  utimesMillis: QW(ZW),
  utimesMillisSync: eY
};
const tn = Pe, ve = Q, Qa = ge.fromPromise;
function tY(t, e, n) {
  const r = n.dereference ? (o) => tn.stat(o, { bigint: !0 }) : (o) => tn.lstat(o, { bigint: !0 });
  return Promise.all([
    r(t),
    r(e).catch((o) => {
      if (o.code === "ENOENT") return null;
      throw o;
    })
  ]).then(([o, i]) => ({ srcStat: o, destStat: i }));
}
function nY(t, e, n) {
  let r;
  const o = n.dereference ? (s) => tn.statSync(s, { bigint: !0 }) : (s) => tn.lstatSync(s, { bigint: !0 }), i = o(t);
  try {
    r = o(e);
  } catch (s) {
    if (s.code === "ENOENT") return { srcStat: i, destStat: null };
    throw s;
  }
  return { srcStat: i, destStat: r };
}
async function rY(t, e, n, r) {
  const { srcStat: o, destStat: i } = await tY(t, e, r);
  if (i) {
    if (Rn(o, i)) {
      const s = ve.basename(t), a = ve.basename(e);
      if (n === "move" && s !== a && s.toLowerCase() === a.toLowerCase())
        return { srcStat: o, destStat: i, isChangingCase: !0 };
      throw new Error("Source and destination must not be the same.");
    }
    if (o.isDirectory() && !i.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${e}' with directory '${t}'.`);
    if (!o.isDirectory() && i.isDirectory())
      throw new Error(`Cannot overwrite directory '${e}' with non-directory '${t}'.`);
  }
  if (o.isDirectory() && Yi(t, e))
    throw new Error(Nr(t, e, n));
  return { srcStat: o, destStat: i };
}
function oY(t, e, n, r) {
  const { srcStat: o, destStat: i } = nY(t, e, r);
  if (i) {
    if (Rn(o, i)) {
      const s = ve.basename(t), a = ve.basename(e);
      if (n === "move" && s !== a && s.toLowerCase() === a.toLowerCase())
        return { srcStat: o, destStat: i, isChangingCase: !0 };
      throw new Error("Source and destination must not be the same.");
    }
    if (o.isDirectory() && !i.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${e}' with directory '${t}'.`);
    if (!o.isDirectory() && i.isDirectory())
      throw new Error(`Cannot overwrite directory '${e}' with non-directory '${t}'.`);
  }
  if (o.isDirectory() && Yi(t, e))
    throw new Error(Nr(t, e, n));
  return { srcStat: o, destStat: i };
}
async function Zl(t, e, n, r) {
  const o = ve.resolve(ve.dirname(t)), i = ve.resolve(ve.dirname(n));
  if (i === o || i === ve.parse(i).root) return;
  let s;
  try {
    s = await tn.stat(i, { bigint: !0 });
  } catch (a) {
    if (a.code === "ENOENT") return;
    throw a;
  }
  if (Rn(e, s))
    throw new Error(Nr(t, n, r));
  return Zl(t, e, i, r);
}
function eu(t, e, n, r) {
  const o = ve.resolve(ve.dirname(t)), i = ve.resolve(ve.dirname(n));
  if (i === o || i === ve.parse(i).root) return;
  let s;
  try {
    s = tn.statSync(i, { bigint: !0 });
  } catch (a) {
    if (a.code === "ENOENT") return;
    throw a;
  }
  if (Rn(e, s))
    throw new Error(Nr(t, n, r));
  return eu(t, e, i, r);
}
function Rn(t, e) {
  return e.ino !== void 0 && e.dev !== void 0 && e.ino === t.ino && e.dev === t.dev;
}
function Yi(t, e) {
  const n = ve.resolve(t).split(ve.sep).filter((o) => o), r = ve.resolve(e).split(ve.sep).filter((o) => o);
  return n.every((o, i) => r[i] === o);
}
function Nr(t, e, n) {
  return `Cannot ${n} '${t}' to a subdirectory of itself, '${e}'.`;
}
var an = {
  // checkPaths
  checkPaths: Qa(rY),
  checkPathsSync: oY,
  // checkParent
  checkParentPaths: Qa(Zl),
  checkParentPathsSync: eu,
  // Misc
  isSrcSubdir: Yi,
  areIdentical: Rn
};
async function iY(t, e) {
  const n = [];
  for await (const r of t)
    n.push(
      e(r).then(
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
var sY = {
  asyncIteratorConcurrentProcess: iY
};
const Se = Pe, yn = Q, { mkdirs: aY } = tt, { pathExists: cY } = jt, { utimesMillis: lY } = Ql, vn = an, { asyncIteratorConcurrentProcess: uY } = sY;
async function pY(t, e, n = {}) {
  typeof n == "function" && (n = { filter: n }), n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0001"
  );
  const { srcStat: r, destStat: o } = await vn.checkPaths(t, e, "copy", n);
  if (await vn.checkParentPaths(t, r, e, "copy"), !await tu(t, e, n)) return;
  const s = yn.dirname(e);
  await cY(s) || await aY(s), await nu(o, t, e, n);
}
async function tu(t, e, n) {
  return n.filter ? n.filter(t, e) : !0;
}
async function nu(t, e, n, r) {
  const i = await (r.dereference ? Se.stat : Se.lstat)(e);
  if (i.isDirectory()) return hY(i, t, e, n, r);
  if (i.isFile() || i.isCharacterDevice() || i.isBlockDevice()) return dY(i, t, e, n, r);
  if (i.isSymbolicLink()) return gY(t, e, n, r);
  throw i.isSocket() ? new Error(`Cannot copy a socket file: ${e}`) : i.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${e}`) : new Error(`Unknown file: ${e}`);
}
async function dY(t, e, n, r, o) {
  if (!e) return Za(t, n, r, o);
  if (o.overwrite)
    return await Se.unlink(r), Za(t, n, r, o);
  if (o.errorOnExist)
    throw new Error(`'${r}' already exists`);
}
async function Za(t, e, n, r) {
  if (await Se.copyFile(e, n), r.preserveTimestamps) {
    fY(t.mode) && await mY(n, t.mode);
    const o = await Se.stat(e);
    await lY(n, o.atime, o.mtime);
  }
  return Se.chmod(n, t.mode);
}
function fY(t) {
  return (t & 128) === 0;
}
function mY(t, e) {
  return Se.chmod(t, e | 128);
}
async function hY(t, e, n, r, o) {
  e || await Se.mkdir(r), await uY(await Se.opendir(n), async (i) => {
    const s = yn.join(n, i.name), a = yn.join(r, i.name);
    if (await tu(s, a, o)) {
      const { destStat: p } = await vn.checkPaths(s, a, "copy", o);
      await nu(p, s, a, o);
    }
  }), e || await Se.chmod(r, t.mode);
}
async function gY(t, e, n, r) {
  let o = await Se.readlink(e);
  if (r.dereference && (o = yn.resolve(process.cwd(), o)), !t)
    return Se.symlink(o, n);
  let i = null;
  try {
    i = await Se.readlink(n);
  } catch (s) {
    if (s.code === "EINVAL" || s.code === "UNKNOWN") return Se.symlink(o, n);
    throw s;
  }
  if (r.dereference && (i = yn.resolve(process.cwd(), i)), o !== i) {
    if (vn.isSrcSubdir(o, i))
      throw new Error(`Cannot copy '${o}' to a subdirectory of itself, '${i}'.`);
    if (vn.isSrcSubdir(i, o))
      throw new Error(`Cannot overwrite '${i}' with '${o}'.`);
  }
  return await Se.unlink(n), Se.symlink(o, n);
}
var yY = pY;
const Ce = sn, bn = Q, vY = tt.mkdirsSync, bY = Ql.utimesMillisSync, xn = an;
function xY(t, e, n) {
  typeof n == "function" && (n = { filter: n }), n = n || {}, n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0002"
  );
  const { srcStat: r, destStat: o } = xn.checkPathsSync(t, e, "copy", n);
  if (xn.checkParentPathsSync(t, r, e, "copy"), n.filter && !n.filter(t, e)) return;
  const i = bn.dirname(e);
  return Ce.existsSync(i) || vY(i), ru(o, t, e, n);
}
function ru(t, e, n, r) {
  const i = (r.dereference ? Ce.statSync : Ce.lstatSync)(e);
  if (i.isDirectory()) return AY(i, t, e, n, r);
  if (i.isFile() || i.isCharacterDevice() || i.isBlockDevice()) return wY(i, t, e, n, r);
  if (i.isSymbolicLink()) return LY(t, e, n, r);
  throw i.isSocket() ? new Error(`Cannot copy a socket file: ${e}`) : i.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${e}`) : new Error(`Unknown file: ${e}`);
}
function wY(t, e, n, r, o) {
  return e ? EY(t, n, r, o) : ou(t, n, r, o);
}
function EY(t, e, n, r) {
  if (r.overwrite)
    return Ce.unlinkSync(n), ou(t, e, n, r);
  if (r.errorOnExist)
    throw new Error(`'${n}' already exists`);
}
function ou(t, e, n, r) {
  return Ce.copyFileSync(e, n), r.preserveTimestamps && TY(t.mode, e, n), Ki(n, t.mode);
}
function TY(t, e, n) {
  return SY(t) && NY(n, t), OY(e, n);
}
function SY(t) {
  return (t & 128) === 0;
}
function NY(t, e) {
  return Ki(t, e | 128);
}
function Ki(t, e) {
  return Ce.chmodSync(t, e);
}
function OY(t, e) {
  const n = Ce.statSync(t);
  return bY(e, n.atime, n.mtime);
}
function AY(t, e, n, r, o) {
  return e ? iu(n, r, o) : _Y(t.mode, n, r, o);
}
function _Y(t, e, n, r) {
  return Ce.mkdirSync(n), iu(e, n, r), Ki(n, t);
}
function iu(t, e, n) {
  const r = Ce.opendirSync(t);
  try {
    let o;
    for (; (o = r.readSync()) !== null; )
      DY(o.name, t, e, n);
  } finally {
    r.closeSync();
  }
}
function DY(t, e, n, r) {
  const o = bn.join(e, t), i = bn.join(n, t);
  if (r.filter && !r.filter(o, i)) return;
  const { destStat: s } = xn.checkPathsSync(o, i, "copy", r);
  return ru(s, o, i, r);
}
function LY(t, e, n, r) {
  let o = Ce.readlinkSync(e);
  if (r.dereference && (o = bn.resolve(process.cwd(), o)), t) {
    let i;
    try {
      i = Ce.readlinkSync(n);
    } catch (s) {
      if (s.code === "EINVAL" || s.code === "UNKNOWN") return Ce.symlinkSync(o, n);
      throw s;
    }
    if (r.dereference && (i = bn.resolve(process.cwd(), i)), o !== i) {
      if (xn.isSrcSubdir(o, i))
        throw new Error(`Cannot copy '${o}' to a subdirectory of itself, '${i}'.`);
      if (xn.isSrcSubdir(i, o))
        throw new Error(`Cannot overwrite '${i}' with '${o}'.`);
    }
    return CY(o, n);
  } else
    return Ce.symlinkSync(o, n);
}
function CY(t, e) {
  return Ce.unlinkSync(e), Ce.symlinkSync(t, e);
}
var RY = xY;
const PY = ge.fromPromise;
var Ji = {
  copy: PY(yY),
  copySync: RY
};
const su = sn, IY = ge.fromCallback;
function kY(t, e) {
  su.rm(t, { recursive: !0, force: !0 }, e);
}
function FY(t) {
  su.rmSync(t, { recursive: !0, force: !0 });
}
var Or = {
  remove: IY(kY),
  removeSync: FY
};
const qY = ge.fromPromise, au = Pe, cu = Q, lu = tt, uu = Or, ec = qY(async function(e) {
  let n;
  try {
    n = await au.readdir(e);
  } catch {
    return lu.mkdirs(e);
  }
  return Promise.all(n.map((r) => uu.remove(cu.join(e, r))));
});
function tc(t) {
  let e;
  try {
    e = au.readdirSync(t);
  } catch {
    return lu.mkdirsSync(t);
  }
  e.forEach((n) => {
    n = cu.join(t, n), uu.removeSync(n);
  });
}
var MY = {
  emptyDirSync: tc,
  emptydirSync: tc,
  emptyDir: ec,
  emptydir: ec
};
const jY = ge.fromPromise, pu = Q, ct = Pe, du = tt;
async function UY(t) {
  let e;
  try {
    e = await ct.stat(t);
  } catch {
  }
  if (e && e.isFile()) return;
  const n = pu.dirname(t);
  let r = null;
  try {
    r = await ct.stat(n);
  } catch (o) {
    if (o.code === "ENOENT") {
      await du.mkdirs(n), await ct.writeFile(t, "");
      return;
    } else
      throw o;
  }
  r.isDirectory() ? await ct.writeFile(t, "") : await ct.readdir(n);
}
function BY(t) {
  let e;
  try {
    e = ct.statSync(t);
  } catch {
  }
  if (e && e.isFile()) return;
  const n = pu.dirname(t);
  try {
    ct.statSync(n).isDirectory() || ct.readdirSync(n);
  } catch (r) {
    if (r && r.code === "ENOENT") du.mkdirsSync(n);
    else throw r;
  }
  ct.writeFileSync(t, "");
}
var $Y = {
  createFile: jY(UY),
  createFileSync: BY
};
const VY = ge.fromPromise, fu = Q, mt = Pe, mu = tt, { pathExists: zY } = jt, { areIdentical: hu } = an;
async function HY(t, e) {
  let n;
  try {
    n = await mt.lstat(e);
  } catch {
  }
  let r;
  try {
    r = await mt.lstat(t);
  } catch (s) {
    throw s.message = s.message.replace("lstat", "ensureLink"), s;
  }
  if (n && hu(r, n)) return;
  const o = fu.dirname(e);
  await zY(o) || await mu.mkdirs(o), await mt.link(t, e);
}
function XY(t, e) {
  let n;
  try {
    n = mt.lstatSync(e);
  } catch {
  }
  try {
    const i = mt.lstatSync(t);
    if (n && hu(i, n)) return;
  } catch (i) {
    throw i.message = i.message.replace("lstat", "ensureLink"), i;
  }
  const r = fu.dirname(e);
  return mt.existsSync(r) || mu.mkdirsSync(r), mt.linkSync(t, e);
}
var GY = {
  createLink: VY(HY),
  createLinkSync: XY
};
const gt = Q, fn = Pe, { pathExists: WY } = jt, YY = ge.fromPromise;
async function KY(t, e) {
  if (gt.isAbsolute(t)) {
    try {
      await fn.lstat(t);
    } catch (i) {
      throw i.message = i.message.replace("lstat", "ensureSymlink"), i;
    }
    return {
      toCwd: t,
      toDst: t
    };
  }
  const n = gt.dirname(e), r = gt.join(n, t);
  if (await WY(r))
    return {
      toCwd: r,
      toDst: t
    };
  try {
    await fn.lstat(t);
  } catch (i) {
    throw i.message = i.message.replace("lstat", "ensureSymlink"), i;
  }
  return {
    toCwd: t,
    toDst: gt.relative(n, t)
  };
}
function JY(t, e) {
  if (gt.isAbsolute(t)) {
    if (!fn.existsSync(t)) throw new Error("absolute srcpath does not exist");
    return {
      toCwd: t,
      toDst: t
    };
  }
  const n = gt.dirname(e), r = gt.join(n, t);
  if (fn.existsSync(r))
    return {
      toCwd: r,
      toDst: t
    };
  if (!fn.existsSync(t)) throw new Error("relative srcpath does not exist");
  return {
    toCwd: t,
    toDst: gt.relative(n, t)
  };
}
var QY = {
  symlinkPaths: YY(KY),
  symlinkPathsSync: JY
};
const gu = Pe, ZY = ge.fromPromise;
async function eK(t, e) {
  if (e) return e;
  let n;
  try {
    n = await gu.lstat(t);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
function tK(t, e) {
  if (e) return e;
  let n;
  try {
    n = gu.lstatSync(t);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
var nK = {
  symlinkType: ZY(eK),
  symlinkTypeSync: tK
};
const rK = ge.fromPromise, yu = Q, et = Pe, { mkdirs: oK, mkdirsSync: iK } = tt, { symlinkPaths: sK, symlinkPathsSync: aK } = QY, { symlinkType: cK, symlinkTypeSync: lK } = nK, { pathExists: uK } = jt, { areIdentical: vu } = an;
async function pK(t, e, n) {
  let r;
  try {
    r = await et.lstat(e);
  } catch {
  }
  if (r && r.isSymbolicLink()) {
    const [a, c] = await Promise.all([
      et.stat(t),
      et.stat(e)
    ]);
    if (vu(a, c)) return;
  }
  const o = await sK(t, e);
  t = o.toDst;
  const i = await cK(o.toCwd, n), s = yu.dirname(e);
  return await uK(s) || await oK(s), et.symlink(t, e, i);
}
function dK(t, e, n) {
  let r;
  try {
    r = et.lstatSync(e);
  } catch {
  }
  if (r && r.isSymbolicLink()) {
    const a = et.statSync(t), c = et.statSync(e);
    if (vu(a, c)) return;
  }
  const o = aK(t, e);
  t = o.toDst, n = lK(o.toCwd, n);
  const i = yu.dirname(e);
  return et.existsSync(i) || iK(i), et.symlinkSync(t, e, n);
}
var fK = {
  createSymlink: rK(pK),
  createSymlinkSync: dK
};
const { createFile: nc, createFileSync: rc } = $Y, { createLink: oc, createLinkSync: ic } = GY, { createSymlink: sc, createSymlinkSync: ac } = fK;
var mK = {
  // file
  createFile: nc,
  createFileSync: rc,
  ensureFile: nc,
  ensureFileSync: rc,
  // link
  createLink: oc,
  createLinkSync: ic,
  ensureLink: oc,
  ensureLinkSync: ic,
  // symlink
  createSymlink: sc,
  createSymlinkSync: ac,
  ensureSymlink: sc,
  ensureSymlinkSync: ac
};
function hK(t, { EOL: e = `
`, finalEOL: n = !0, replacer: r = null, spaces: o } = {}) {
  const i = n ? e : "";
  return JSON.stringify(t, r, o).replace(/\n/g, e) + i;
}
function gK(t) {
  return Buffer.isBuffer(t) && (t = t.toString("utf8")), t.replace(/^\uFEFF/, "");
}
var Qi = { stringify: hK, stripBom: gK };
let nn;
try {
  nn = sn;
} catch {
  nn = pi;
}
const Ar = ge, { stringify: bu, stripBom: xu } = Qi;
async function yK(t, e = {}) {
  typeof e == "string" && (e = { encoding: e });
  const n = e.fs || nn, r = "throws" in e ? e.throws : !0;
  let o = await Ar.fromCallback(n.readFile)(t, e);
  o = xu(o);
  let i;
  try {
    i = JSON.parse(o, e ? e.reviver : null);
  } catch (s) {
    if (r)
      throw s.message = `${t}: ${s.message}`, s;
    return null;
  }
  return i;
}
const vK = Ar.fromPromise(yK);
function bK(t, e = {}) {
  typeof e == "string" && (e = { encoding: e });
  const n = e.fs || nn, r = "throws" in e ? e.throws : !0;
  try {
    let o = n.readFileSync(t, e);
    return o = xu(o), JSON.parse(o, e.reviver);
  } catch (o) {
    if (r)
      throw o.message = `${t}: ${o.message}`, o;
    return null;
  }
}
async function xK(t, e, n = {}) {
  const r = n.fs || nn, o = bu(e, n);
  await Ar.fromCallback(r.writeFile)(t, o, n);
}
const wK = Ar.fromPromise(xK);
function EK(t, e, n = {}) {
  const r = n.fs || nn, o = bu(e, n);
  return r.writeFileSync(t, o, n);
}
var TK = {
  readFile: vK,
  readFileSync: bK,
  writeFile: wK,
  writeFileSync: EK
};
const $n = TK;
var SK = {
  // jsonfile exports
  readJson: $n.readFile,
  readJsonSync: $n.readFileSync,
  writeJson: $n.writeFile,
  writeJsonSync: $n.writeFileSync
};
const NK = ge.fromPromise, ni = Pe, wu = Q, Eu = tt, OK = jt.pathExists;
async function AK(t, e, n = "utf-8") {
  const r = wu.dirname(t);
  return await OK(r) || await Eu.mkdirs(r), ni.writeFile(t, e, n);
}
function _K(t, ...e) {
  const n = wu.dirname(t);
  ni.existsSync(n) || Eu.mkdirsSync(n), ni.writeFileSync(t, ...e);
}
var Zi = {
  outputFile: NK(AK),
  outputFileSync: _K
};
const { stringify: DK } = Qi, { outputFile: LK } = Zi;
async function CK(t, e, n = {}) {
  const r = DK(e, n);
  await LK(t, r, n);
}
var RK = CK;
const { stringify: PK } = Qi, { outputFileSync: IK } = Zi;
function kK(t, e, n) {
  const r = PK(e, n);
  IK(t, r, n);
}
var FK = kK;
const qK = ge.fromPromise, Re = SK;
Re.outputJson = qK(RK);
Re.outputJsonSync = FK;
Re.outputJSON = Re.outputJson;
Re.outputJSONSync = Re.outputJsonSync;
Re.writeJSON = Re.writeJson;
Re.writeJSONSync = Re.writeJsonSync;
Re.readJSON = Re.readJson;
Re.readJSONSync = Re.readJsonSync;
var MK = Re;
const jK = Pe, cc = Q, { copy: UK } = Ji, { remove: Tu } = Or, { mkdirp: BK } = tt, { pathExists: $K } = jt, lc = an;
async function VK(t, e, n = {}) {
  const r = n.overwrite || n.clobber || !1, { srcStat: o, isChangingCase: i = !1 } = await lc.checkPaths(t, e, "move", n);
  await lc.checkParentPaths(t, o, e, "move");
  const s = cc.dirname(e);
  return cc.parse(s).root !== s && await BK(s), zK(t, e, r, i);
}
async function zK(t, e, n, r) {
  if (!r) {
    if (n)
      await Tu(e);
    else if (await $K(e))
      throw new Error("dest already exists.");
  }
  try {
    await jK.rename(t, e);
  } catch (o) {
    if (o.code !== "EXDEV")
      throw o;
    await HK(t, e, n);
  }
}
async function HK(t, e, n) {
  return await UK(t, e, {
    overwrite: n,
    errorOnExist: !0,
    preserveTimestamps: !0
  }), Tu(t);
}
var XK = VK;
const Su = sn, ri = Q, GK = Ji.copySync, Nu = Or.removeSync, WK = tt.mkdirpSync, uc = an;
function YK(t, e, n) {
  n = n || {};
  const r = n.overwrite || n.clobber || !1, { srcStat: o, isChangingCase: i = !1 } = uc.checkPathsSync(t, e, "move", n);
  return uc.checkParentPathsSync(t, o, e, "move"), KK(e) || WK(ri.dirname(e)), JK(t, e, r, i);
}
function KK(t) {
  const e = ri.dirname(t);
  return ri.parse(e).root === e;
}
function JK(t, e, n, r) {
  if (r) return $o(t, e, n);
  if (n)
    return Nu(e), $o(t, e, n);
  if (Su.existsSync(e)) throw new Error("dest already exists.");
  return $o(t, e, n);
}
function $o(t, e, n) {
  try {
    Su.renameSync(t, e);
  } catch (r) {
    if (r.code !== "EXDEV") throw r;
    return QK(t, e, n);
  }
}
function QK(t, e, n) {
  return GK(t, e, {
    overwrite: n,
    errorOnExist: !0,
    preserveTimestamps: !0
  }), Nu(t);
}
var ZK = YK;
const eJ = ge.fromPromise;
var tJ = {
  move: eJ(XK),
  moveSync: ZK
}, nJ = {
  // Export promiseified graceful-fs:
  ...Pe,
  // Export extra methods:
  ...Ji,
  ...MY,
  ...mK,
  ...MK,
  ...tt,
  ...tJ,
  ...Zi,
  ...jt,
  ...Or
};
const fe = /* @__PURE__ */ rn(nJ), rJ = 3e4, oJ = 6e4;
class iJ {
  async downloadFile(e, n, r, o = 3) {
    for (let i = 0; i < o; i++)
      try {
        await this.attemptDownload(e, n, r);
        return;
      } catch (s) {
        const a = s;
        if (a.code === "ENOSPC") throw new Error("DISK_FULL: No space left on device.");
        if (a.code === "EPERM" || a.code === "EACCES") throw new Error("PERMISSION_DENIED: Access denied to write file.");
        if (a.message === "DISK_FULL" || a.message === "DOWNLOAD_TIMEOUT" || a.message === "DOWNLOAD_STALLED" || a.message === "EPISODE_NOT_FOUND" || (console.error(`Download attempt ${i + 1} failed:`, s), a.message === "INTEGRITY_CHECK_FAILED" && await fe.remove(`${n}.part`).catch(() => {
        }), await fe.remove(n).catch(() => {
        }), i === o - 1)) throw s;
        await new Promise((c) => setTimeout(c, 1e3 * Math.pow(2, i)));
      }
  }
  async attemptDownload(e, n, r) {
    const o = `${n}.part`;
    let i = 0;
    try {
      i = (await fe.stat(o)).size;
    } catch {
    }
    let s = null;
    try {
      const a = await ae({
        url: e,
        method: "GET",
        responseType: "stream",
        timeout: rJ,
        ...i > 0 ? { headers: { Range: `bytes=${i}-` } } : {}
      });
      if (a.status === 404)
        throw await fe.remove(o).catch(() => {
        }), new Error("EPISODE_NOT_FOUND");
      const c = i > 0 && a.status === 206;
      i > 0 && a.status === 200 && (await fe.remove(o).catch(() => {
      }), i = 0), s = c ? fe.createWriteStream(o, { flags: "a" }) : fe.createWriteStream(o);
      const p = a.headers["content-length"], l = p ? c ? i + parseInt(p) : parseInt(p) : 0;
      let u = i;
      return new Promise((d, g) => {
        let f = null;
        const x = () => {
          f && clearTimeout(f), f = setTimeout(() => {
            a.data.destroy(), s.close(), g(new Error("DOWNLOAD_STALLED"));
          }, oJ);
        };
        x(), a.data.on("data", (b) => {
          u += b.length, x(), l > 0 && r(u, l);
        }), a.data.pipe(s), s.on("finish", async () => {
          if (f && clearTimeout(f), p && !c) {
            const b = parseInt(p);
            if (b > 0 && Math.abs(u - b) / b > 0.01) {
              await fe.remove(o).catch(() => {
              }), g(new Error("INTEGRITY_CHECK_FAILED"));
              return;
            }
          }
          try {
            await fe.rename(o, n), d();
          } catch (b) {
            g(b);
          }
        }), s.on("error", async (b) => {
          f && clearTimeout(f), await fe.remove(o).catch(() => {
          }), b.code === "ENOSPC" ? g(new Error("DISK_FULL")) : g(b);
        });
      });
    } catch (a) {
      throw s && s.close(), a.code === "ECONNABORTED" ? new Error("DOWNLOAD_TIMEOUT") : a;
    }
  }
}
var Ou = { exports: {} };
(function(t) {
  var e = Object.prototype.hasOwnProperty, n = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (n = !1));
  function o(c, p, l) {
    this.fn = c, this.context = p, this.once = l || !1;
  }
  function i(c, p, l, u, d) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var g = new o(l, u || c, d), f = n ? n + p : p;
    return c._events[f] ? c._events[f].fn ? c._events[f] = [c._events[f], g] : c._events[f].push(g) : (c._events[f] = g, c._eventsCount++), c;
  }
  function s(c, p) {
    --c._eventsCount === 0 ? c._events = new r() : delete c._events[p];
  }
  function a() {
    this._events = new r(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var p = [], l, u;
    if (this._eventsCount === 0) return p;
    for (u in l = this._events)
      e.call(l, u) && p.push(n ? u.slice(1) : u);
    return Object.getOwnPropertySymbols ? p.concat(Object.getOwnPropertySymbols(l)) : p;
  }, a.prototype.listeners = function(p) {
    var l = n ? n + p : p, u = this._events[l];
    if (!u) return [];
    if (u.fn) return [u.fn];
    for (var d = 0, g = u.length, f = new Array(g); d < g; d++)
      f[d] = u[d].fn;
    return f;
  }, a.prototype.listenerCount = function(p) {
    var l = n ? n + p : p, u = this._events[l];
    return u ? u.fn ? 1 : u.length : 0;
  }, a.prototype.emit = function(p, l, u, d, g, f) {
    var x = n ? n + p : p;
    if (!this._events[x]) return !1;
    var b = this._events[x], S = arguments.length, w, y;
    if (b.fn) {
      switch (b.once && this.removeListener(p, b.fn, void 0, !0), S) {
        case 1:
          return b.fn.call(b.context), !0;
        case 2:
          return b.fn.call(b.context, l), !0;
        case 3:
          return b.fn.call(b.context, l, u), !0;
        case 4:
          return b.fn.call(b.context, l, u, d), !0;
        case 5:
          return b.fn.call(b.context, l, u, d, g), !0;
        case 6:
          return b.fn.call(b.context, l, u, d, g, f), !0;
      }
      for (y = 1, w = new Array(S - 1); y < S; y++)
        w[y - 1] = arguments[y];
      b.fn.apply(b.context, w);
    } else {
      var E = b.length, A;
      for (y = 0; y < E; y++)
        switch (b[y].once && this.removeListener(p, b[y].fn, void 0, !0), S) {
          case 1:
            b[y].fn.call(b[y].context);
            break;
          case 2:
            b[y].fn.call(b[y].context, l);
            break;
          case 3:
            b[y].fn.call(b[y].context, l, u);
            break;
          case 4:
            b[y].fn.call(b[y].context, l, u, d);
            break;
          default:
            if (!w) for (A = 1, w = new Array(S - 1); A < S; A++)
              w[A - 1] = arguments[A];
            b[y].fn.apply(b[y].context, w);
        }
    }
    return !0;
  }, a.prototype.on = function(p, l, u) {
    return i(this, p, l, u, !1);
  }, a.prototype.once = function(p, l, u) {
    return i(this, p, l, u, !0);
  }, a.prototype.removeListener = function(p, l, u, d) {
    var g = n ? n + p : p;
    if (!this._events[g]) return this;
    if (!l)
      return s(this, g), this;
    var f = this._events[g];
    if (f.fn)
      f.fn === l && (!d || f.once) && (!u || f.context === u) && s(this, g);
    else {
      for (var x = 0, b = [], S = f.length; x < S; x++)
        (f[x].fn !== l || d && !f[x].once || u && f[x].context !== u) && b.push(f[x]);
      b.length ? this._events[g] = b.length === 1 ? b[0] : b : s(this, g);
    }
    return this;
  }, a.prototype.removeAllListeners = function(p) {
    var l;
    return p ? (l = n ? n + p : p, this._events[l] && s(this, l)) : (this._events = new r(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, t.exports = a;
})(Ou);
var sJ = Ou.exports;
const aJ = /* @__PURE__ */ rn(sJ);
class es extends Error {
  constructor(n, r) {
    var o;
    super(n, r);
    Ue(this, "name", "TimeoutError");
    (o = Error.captureStackTrace) == null || o.call(Error, this, es);
  }
}
const pc = (t) => t.reason ?? new DOMException("This operation was aborted.", "AbortError");
function cJ(t, e) {
  const {
    milliseconds: n,
    fallback: r,
    message: o,
    customTimers: i = { setTimeout, clearTimeout },
    signal: s
  } = e;
  let a, c;
  const l = new Promise((u, d) => {
    if (typeof n != "number" || Math.sign(n) !== 1)
      throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${n}\``);
    if (s != null && s.aborted) {
      d(pc(s));
      return;
    }
    if (s && (c = () => {
      d(pc(s));
    }, s.addEventListener("abort", c, { once: !0 })), t.then(u, d), n === Number.POSITIVE_INFINITY)
      return;
    const g = new es();
    a = i.setTimeout.call(void 0, () => {
      if (r) {
        try {
          u(r());
        } catch (f) {
          d(f);
        }
        return;
      }
      typeof t.cancel == "function" && t.cancel(), o === !1 ? u() : o instanceof Error ? d(o) : (g.message = o ?? `Promise timed out after ${n} milliseconds`, d(g));
    }, n);
  }).finally(() => {
    l.clear(), c && s && s.removeEventListener("abort", c);
  });
  return l.clear = () => {
    i.clearTimeout.call(void 0, a), a = void 0;
  }, l;
}
function lJ(t, e, n) {
  let r = 0, o = t.length;
  for (; o > 0; ) {
    const i = Math.trunc(o / 2);
    let s = r + i;
    n(t[s], e) <= 0 ? (r = ++s, o -= i + 1) : o = i;
  }
  return r;
}
var Ve;
class uJ {
  constructor() {
    ie(this, Ve, []);
  }
  enqueue(e, n) {
    const { priority: r = 0, id: o } = n ?? {}, i = {
      priority: r,
      id: o,
      run: e
    };
    if (this.size === 0 || C(this, Ve)[this.size - 1].priority >= r) {
      C(this, Ve).push(i);
      return;
    }
    const s = lJ(C(this, Ve), i, (a, c) => c.priority - a.priority);
    C(this, Ve).splice(s, 0, i);
  }
  setPriority(e, n) {
    const r = C(this, Ve).findIndex((i) => i.id === e);
    if (r === -1)
      throw new ReferenceError(`No promise function with the id "${e}" exists in the queue.`);
    const [o] = C(this, Ve).splice(r, 1);
    this.enqueue(o.run, { priority: n, id: e });
  }
  dequeue() {
    const e = C(this, Ve).shift();
    return e == null ? void 0 : e.run;
  }
  filter(e) {
    return C(this, Ve).filter((n) => n.priority === e.priority).map((n) => n.run);
  }
  get size() {
    return C(this, Ve).length;
  }
}
Ve = new WeakMap();
var Yt, Xe, Ge, ht, Dt, Kt, Qe, wn, Jt, Ze, st, ze, qe, _e, de, En, we, Lt, at, cr, Ct, M, Yn, Au, _u, Kn, Du, Lu, Cu, Ru, Pu, Jn, Qn, oi, Zn, ii, si, er, St, Iu, zt, ku, ai;
class pJ extends aJ {
  constructor(n) {
    var r, o;
    super();
    ie(this, M);
    ie(this, Yt);
    ie(this, Xe);
    ie(this, Ge, 0);
    ie(this, ht);
    ie(this, Dt, !1);
    ie(this, Kt, !1);
    ie(this, Qe);
    ie(this, wn, 0);
    ie(this, Jt, 0);
    ie(this, Ze);
    ie(this, st);
    ie(this, ze);
    // Circular buffer implementation for better performance
    ie(this, qe, []);
    ie(this, _e, 0);
    ie(this, de);
    ie(this, En);
    ie(this, we, 0);
    // The `!` is needed because of https://github.com/microsoft/TypeScript/issues/32194
    ie(this, Lt);
    ie(this, at);
    // Use to assign a unique identifier to a promise function, if not explicitly specified
    ie(this, cr, 1n);
    // Track currently running tasks for debugging
    ie(this, Ct, /* @__PURE__ */ new Map());
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
    Ue(this, "timeout");
    if (n = {
      carryoverIntervalCount: !1,
      intervalCap: Number.POSITIVE_INFINITY,
      interval: 0,
      concurrency: Number.POSITIVE_INFINITY,
      autoStart: !0,
      queueClass: uJ,
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
    if (ne(this, Yt, n.carryoverIntervalCount ?? n.carryoverConcurrencyCount ?? !1), ne(this, Xe, n.intervalCap === Number.POSITIVE_INFINITY || n.interval === 0), ne(this, ht, n.intervalCap), ne(this, Qe, n.interval), ne(this, ze, n.strict), ne(this, de, new n.queueClass()), ne(this, En, n.queueClass), this.concurrency = n.concurrency, n.timeout !== void 0 && !(Number.isFinite(n.timeout) && n.timeout > 0))
      throw new TypeError(`Expected \`timeout\` to be a positive finite number, got \`${n.timeout}\` (${typeof n.timeout})`);
    this.timeout = n.timeout, ne(this, at, n.autoStart === !1), H(this, M, Iu).call(this);
  }
  get concurrency() {
    return C(this, Lt);
  }
  set concurrency(n) {
    if (!(typeof n == "number" && n >= 1))
      throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${n}\` (${typeof n})`);
    ne(this, Lt, n), H(this, M, er).call(this);
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
    C(this, de).setPriority(n, r);
  }
  async add(n, r = {}) {
    return r = {
      timeout: this.timeout,
      ...r,
      // Assign unique ID if not provided
      id: r.id ?? (wt(this, cr)._++).toString()
    }, new Promise((o, i) => {
      const s = Symbol(`task-${r.id}`);
      C(this, de).enqueue(async () => {
        var c, p;
        wt(this, we)._++, C(this, Ct).set(s, {
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
            throw H(this, M, ku).call(this), C(this, Ct).delete(s), d;
          }
          ne(this, Jt, Date.now());
          let l = n({ signal: r.signal });
          if (r.timeout && (l = cJ(Promise.resolve(l), {
            milliseconds: r.timeout,
            message: `Task timed out after ${r.timeout}ms (queue has ${C(this, we)} running, ${C(this, de).size} waiting)`
          })), r.signal) {
            const { signal: d } = r;
            l = Promise.race([l, new Promise((g, f) => {
              a = () => {
                f(d.reason);
              }, d.addEventListener("abort", a, { once: !0 });
            })]);
          }
          const u = await l;
          o(u), this.emit("completed", u);
        } catch (l) {
          i(l), this.emit("error", l);
        } finally {
          a && ((p = r.signal) == null || p.removeEventListener("abort", a)), C(this, Ct).delete(s), queueMicrotask(() => {
            H(this, M, Cu).call(this);
          });
        }
      }, r), this.emit("add"), H(this, M, Zn).call(this);
    });
  }
  async addAll(n, r) {
    return Promise.all(n.map(async (o) => this.add(o, r)));
  }
  /**
  Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
  */
  start() {
    return C(this, at) ? (ne(this, at, !1), H(this, M, er).call(this), this) : this;
  }
  /**
  Put queue execution on hold.
  */
  pause() {
    ne(this, at, !0);
  }
  /**
  Clear the queue.
  */
  clear() {
    ne(this, de, new (C(this, En))()), H(this, M, Qn).call(this), H(this, M, ai).call(this), this.emit("empty"), C(this, we) === 0 && (H(this, M, oi).call(this), this.emit("idle")), this.emit("next");
  }
  /**
      Can be called multiple times. Useful if you for example add additional items at a later time.
  
      @returns A promise that settles when the queue becomes empty.
      */
  async onEmpty() {
    C(this, de).size !== 0 && await H(this, M, St).call(this, "empty");
  }
  /**
      @returns A promise that settles when the queue size is less than the given limit: `queue.size < limit`.
  
      If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.
  
      Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.
      */
  async onSizeLessThan(n) {
    C(this, de).size < n || await H(this, M, St).call(this, "next", () => C(this, de).size < n);
  }
  /**
      The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
  
      @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
      */
  async onIdle() {
    C(this, we) === 0 && C(this, de).size === 0 || await H(this, M, St).call(this, "idle");
  }
  /**
      The difference with `.onIdle` is that `.onPendingZero` only waits for currently running tasks to finish, ignoring queued tasks.
  
      @returns A promise that settles when all currently running tasks have completed; `queue.pending === 0`.
      */
  async onPendingZero() {
    C(this, we) !== 0 && await H(this, M, St).call(this, "pendingZero");
  }
  /**
  @returns A promise that settles when the queue becomes rate-limited due to intervalCap.
  */
  async onRateLimit() {
    this.isRateLimited || await H(this, M, St).call(this, "rateLimit");
  }
  /**
  @returns A promise that settles when the queue is no longer rate-limited.
  */
  async onRateLimitCleared() {
    this.isRateLimited && await H(this, M, St).call(this, "rateLimitCleared");
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
      const o = (i) => {
        this.off("error", o), r(i);
      };
      this.on("error", o);
    });
  }
  /**
  Size of the queue, the number of queued items waiting to run.
  */
  get size() {
    return C(this, de).size;
  }
  /**
      Size of the queue, filtered by the given options.
  
      For example, this can be used to find the number of items remaining in the queue with a specific priority level.
      */
  sizeBy(n) {
    return C(this, de).filter(n).length;
  }
  /**
  Number of running items (no longer in the queue).
  */
  get pending() {
    return C(this, we);
  }
  /**
  Whether the queue is currently paused.
  */
  get isPaused() {
    return C(this, at);
  }
  /**
  Whether the queue is currently rate-limited due to intervalCap.
  */
  get isRateLimited() {
    return C(this, Dt);
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
    return C(this, we) === C(this, Lt) && C(this, de).size > 0 || this.isRateLimited && C(this, de).size > 0;
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
    return [...C(this, Ct).values()].map((n) => ({ ...n }));
  }
}
Yt = new WeakMap(), Xe = new WeakMap(), Ge = new WeakMap(), ht = new WeakMap(), Dt = new WeakMap(), Kt = new WeakMap(), Qe = new WeakMap(), wn = new WeakMap(), Jt = new WeakMap(), Ze = new WeakMap(), st = new WeakMap(), ze = new WeakMap(), qe = new WeakMap(), _e = new WeakMap(), de = new WeakMap(), En = new WeakMap(), we = new WeakMap(), Lt = new WeakMap(), at = new WeakMap(), cr = new WeakMap(), Ct = new WeakMap(), M = new WeakSet(), Yn = function(n) {
  for (; C(this, _e) < C(this, qe).length; ) {
    const o = C(this, qe)[C(this, _e)];
    if (o !== void 0 && n - o >= C(this, Qe))
      wt(this, _e)._++;
    else
      break;
  }
  (C(this, _e) > 100 && C(this, _e) > C(this, qe).length / 2 || C(this, _e) === C(this, qe).length) && (ne(this, qe, C(this, qe).slice(C(this, _e))), ne(this, _e, 0));
}, // Helper methods for interval consumption
Au = function(n) {
  C(this, ze) ? C(this, qe).push(n) : wt(this, Ge)._++;
}, _u = function() {
  C(this, ze) ? C(this, qe).length > C(this, _e) && C(this, qe).pop() : C(this, Ge) > 0 && wt(this, Ge)._--;
}, Kn = function() {
  return C(this, qe).length - C(this, _e);
}, Du = function() {
  return C(this, Xe) ? !0 : C(this, ze) ? H(this, M, Kn).call(this) < C(this, ht) : C(this, Ge) < C(this, ht);
}, Lu = function() {
  return C(this, we) < C(this, Lt);
}, Cu = function() {
  wt(this, we)._--, C(this, we) === 0 && this.emit("pendingZero"), H(this, M, Zn).call(this), this.emit("next");
}, Ru = function() {
  ne(this, st, void 0), H(this, M, si).call(this), H(this, M, ii).call(this);
}, Pu = function(n) {
  if (C(this, ze)) {
    if (H(this, M, Yn).call(this, n), H(this, M, Kn).call(this) >= C(this, ht)) {
      const o = C(this, qe)[C(this, _e)], i = C(this, Qe) - (n - o);
      return H(this, M, Jn).call(this, i), !0;
    }
    return !1;
  }
  if (C(this, Ze) === void 0) {
    const r = C(this, wn) - n;
    if (r < 0) {
      if (C(this, Jt) > 0) {
        const o = n - C(this, Jt);
        if (o < C(this, Qe))
          return H(this, M, Jn).call(this, C(this, Qe) - o), !0;
      }
      ne(this, Ge, C(this, Yt) ? C(this, we) : 0);
    } else
      return H(this, M, Jn).call(this, r), !0;
  }
  return !1;
}, Jn = function(n) {
  C(this, st) === void 0 && ne(this, st, setTimeout(() => {
    H(this, M, Ru).call(this);
  }, n));
}, Qn = function() {
  C(this, Ze) && (clearInterval(C(this, Ze)), ne(this, Ze, void 0));
}, oi = function() {
  C(this, st) && (clearTimeout(C(this, st)), ne(this, st, void 0));
}, Zn = function() {
  if (C(this, de).size === 0) {
    if (H(this, M, Qn).call(this), this.emit("empty"), C(this, we) === 0) {
      if (H(this, M, oi).call(this), C(this, ze) && C(this, _e) > 0) {
        const r = Date.now();
        H(this, M, Yn).call(this, r);
      }
      this.emit("idle");
    }
    return !1;
  }
  let n = !1;
  if (!C(this, at)) {
    const r = Date.now(), o = !H(this, M, Pu).call(this, r);
    if (C(this, M, Du) && C(this, M, Lu)) {
      const i = C(this, de).dequeue();
      C(this, Xe) || (H(this, M, Au).call(this, r), H(this, M, zt).call(this)), this.emit("active"), i(), o && H(this, M, ii).call(this), n = !0;
    }
  }
  return n;
}, ii = function() {
  C(this, Xe) || C(this, Ze) !== void 0 || C(this, ze) || (ne(this, Ze, setInterval(() => {
    H(this, M, si).call(this);
  }, C(this, Qe))), ne(this, wn, Date.now() + C(this, Qe)));
}, si = function() {
  C(this, ze) || (C(this, Ge) === 0 && C(this, we) === 0 && C(this, Ze) && H(this, M, Qn).call(this), ne(this, Ge, C(this, Yt) ? C(this, we) : 0)), H(this, M, er).call(this), H(this, M, zt).call(this);
}, /**
Executes all queued functions until it reaches the limit.
*/
er = function() {
  for (; H(this, M, Zn).call(this); )
    ;
}, St = async function(n, r) {
  return new Promise((o) => {
    const i = () => {
      r && !r() || (this.off(n, i), o());
    };
    this.on(n, i);
  });
}, Iu = function() {
  C(this, Xe) || (this.on("add", () => {
    C(this, de).size > 0 && H(this, M, zt).call(this);
  }), this.on("next", () => {
    H(this, M, zt).call(this);
  }));
}, zt = function() {
  C(this, Xe) || C(this, Kt) || (ne(this, Kt, !0), queueMicrotask(() => {
    ne(this, Kt, !1), H(this, M, ai).call(this);
  }));
}, ku = function() {
  C(this, Xe) || (H(this, M, _u).call(this), H(this, M, zt).call(this));
}, ai = function() {
  const n = C(this, Dt);
  if (C(this, Xe) || C(this, de).size === 0) {
    n && (ne(this, Dt, !1), this.emit("rateLimitCleared"));
    return;
  }
  let r;
  if (C(this, ze)) {
    const i = Date.now();
    H(this, M, Yn).call(this, i), r = H(this, M, Kn).call(this);
  } else
    r = C(this, Ge);
  const o = r >= C(this, ht);
  o !== n && (ne(this, Dt, o), this.emit(o ? "rateLimit" : "rateLimitCleared"));
};
class dJ {
  constructor(e = 3) {
    Ue(this, "queue");
    this.queue = new pJ({ concurrency: e });
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
class fJ {
  constructor() {
    Ue(this, "_total", 0);
    Ue(this, "_completed", 0);
    Ue(this, "_active", !1);
    Ue(this, "_sealed", !1);
    Ue(this, "_sealTimer", null);
    /** Debounce window in ms — time to wait after last track() before sealing */
    Ue(this, "SEAL_DELAY_MS", 200);
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
function mJ(t) {
  return t >= 55296 && t <= 56319;
}
function hJ(t) {
  return t >= 56320 && t <= 57343;
}
var gJ = function(e, n, r) {
  if (typeof n != "string")
    throw new Error("Input must be string");
  for (var o = n.length, i = 0, s, a, c = 0; c < o; c += 1) {
    if (s = n.charCodeAt(c), a = n[c], mJ(s) && hJ(n.charCodeAt(c + 1)) && (c += 1, a += n[c]), i += e(a), i === r)
      return n.slice(0, c + 1);
    if (i > r)
      return n.slice(0, c - a.length + 1);
  }
  return n;
}, yJ = gJ, vJ = Buffer.byteLength.bind(Buffer), bJ = yJ.bind(null, vJ), xJ = bJ, wJ = /[\/\?<>\\:\*\|"]/g, EJ = /[\x00-\x1f\x80-\x9f]/g, TJ = /^\.+$/, SJ = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i, NJ = /[\. ]+$/;
function dc(t, e) {
  if (typeof t != "string")
    throw new Error("Input must be string");
  var n = t.replace(wJ, e).replace(EJ, e).replace(TJ, e).replace(SJ, e).replace(NJ, e);
  return xJ(n, 255);
}
var Fu = function(t, e) {
  var n = e && e.replacement || "", r = dc(t, n);
  return n === "" ? r : dc(r, "");
};
const ci = /* @__PURE__ */ rn(Fu), OJ = /* @__PURE__ */ Zu({
  __proto__: null,
  default: ci
}, [Fu]);
function fc(t, e, n, r = ".mp3") {
  const o = ci(e);
  let i = ci(n);
  const s = 250, a = Q.join(t, o), p = a.length + 1 + r.length, l = s - p;
  return l < 1 ? i = i.substring(0, 5) : i.length > l && (i = i.substring(0, l)), Q.join(a, `${i}${r}`);
}
const AJ = /* @__PURE__ */ new Set([
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
function mc(t) {
  try {
    const n = new URL(t).pathname, r = Q.extname(n).toLowerCase();
    if (r && AJ.has(r))
      return r;
  } catch {
  }
  return ".mp3";
}
function _J(t, e) {
  const n = e.pubDate ? new Date(e.pubDate) : null, r = n && !isNaN(n.getTime()), o = r ? String(n.getFullYear()) : "unknown", i = r ? String(n.getMonth() + 1).padStart(2, "0") : "unknown", s = r ? String(n.getDate()).padStart(2, "0") : "unknown", a = r ? `${o}-${i}-${s}` : "unknown";
  return t.replace(/\{title\}/gi, e.title).replace(/\{podcast\}/gi, e.podcast).replace(/\{date\}/gi, a).replace(/\{year\}/gi, o).replace(/\{month\}/gi, i).replace(/\{day\}/gi, s);
}
const DJ = [
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
], LJ = /* @__PURE__ */ new Set([
  "localhost",
  "localhost.localdomain",
  "ip6-localhost",
  "ip6-loopback",
  "0.0.0.0",
  "[::]",
  "[::1]"
]);
function hc(t) {
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
  const o = n.hostname.toLowerCase();
  if (!o)
    return { valid: !1, error: "URL_NO_HOST" };
  if (LJ.has(o))
    return { valid: !1, error: "URL_PRIVATE_HOST" };
  if (o === "::1" || o === "[::1]")
    return { valid: !1, error: "URL_PRIVATE_HOST" };
  for (const s of DJ)
    if (s.test(o))
      return { valid: !1, error: "URL_PRIVATE_IP" };
  const i = o.replace(/^\[|\]$/g, "");
  return i.startsWith("fc") || i.startsWith("fd") || i.startsWith("fe80") ? { valid: !1, error: "URL_PRIVATE_IP" } : { valid: !0 };
}
const G = {
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
  RUN_HEALTH_CHECK: "run-health-check"
}, CJ = new P5(), ee = new RW(), RJ = new iJ(), PJ = ee.getConcurrency(), Vo = new dJ(PJ);
function Je(t, e, n) {
  t && !t.isDestroyed() && t.webContents.send(e, n);
}
const zo = new fJ(), gc = /* @__PURE__ */ new Map(), IJ = 3e3;
let yc = "en";
function kJ(t) {
  re.handle(G.PARSE_FEED, async (e, n) => {
    const r = hc(n);
    if (!r.valid)
      throw new Error(r.error);
    const o = Date.now(), i = gc.get(n);
    if (i !== void 0 && o - i < IJ)
      throw new Error("RATE_LIMITED");
    return gc.set(n, o), await CJ.parseFeed(n);
  }), re.handle(G.GET_FEEDS, async () => ee.getFeeds()), re.handle(G.ADD_FEED, async (e, n) => {
    ee.addFeed(n);
    const r = ee.getFeeds();
    return Je(t, G.FEEDS_UPDATED, r), r;
  }), re.handle(G.REMOVE_FEED, async (e, n) => {
    ee.removeFeed(n);
    const r = ee.getFeeds();
    return Je(t, G.FEEDS_UPDATED, r), r;
  }), re.handle(G.GET_DOWNLOADED_EPISODES, async () => ee.getDownloadedEpisodes()), re.handle(G.REMOVE_HISTORY_ITEM, async (e, n) => (ee.removeDownloadedEpisode(n), Je(t, G.DOWNLOADS_UPDATED, ee.getDownloadedEpisodes()), !0)), re.handle(G.RESET_HISTORY, async () => (ee.resetDownloadHistory(), Je(t, G.DOWNLOADS_UPDATED, []), !0)), re.handle(G.START_DOWNLOAD, async (e, { url: n, title: r, podcastTitle: o, guid: i, pubDate: s }) => {
    const a = hc(n);
    if (!a.valid)
      throw new Error(a.error);
    let c = ee.getDownloadPath();
    c || (c = Q.join(Le.getPath("documents"), "FeedDownloader", "downloads"));
    const p = mc(n), l = ee.getNamingTemplate(), u = _J(l, {
      title: r,
      podcast: o,
      pubDate: s
    }), d = fc(c, o, u, p), g = Q.dirname(d);
    return await fe.ensureDir(g), zo.track(), Vo.add(async () => {
      try {
        if (await RJ.downloadFile(n, d, (f, x) => {
          Je(t, G.DOWNLOAD_PROGRESS, { url: n, loaded: f, total: x });
        }), i && (ee.markAsDownloaded(i), ee.addArchiveEntry({
          guid: i,
          title: r,
          podcastTitle: o,
          pubDate: s || (/* @__PURE__ */ new Date()).toISOString(),
          downloadedAt: (/* @__PURE__ */ new Date()).toISOString(),
          filename: Q.basename(d)
        })), ee.getSidecarEnabled()) {
          const f = Q.join(
            Q.dirname(d),
            Q.parse(d).name + ".json"
          ), x = {
            title: r,
            podcast: o,
            guid: i || null,
            pubDate: s || null,
            downloadedAt: (/* @__PURE__ */ new Date()).toISOString(),
            sourceUrl: n,
            filename: Q.basename(d)
          };
          await fe.writeJSON(f, x, { spaces: 2 }).catch(() => {
          });
        }
        Je(t, G.DOWNLOAD_PROGRESS, { url: n, loaded: 100, total: 100, completed: !0 }), Je(t, G.DOWNLOADS_UPDATED, ee.getDownloadedEpisodes());
      } catch (f) {
        console.error("Download error:", f);
        const x = f.message === "EPISODE_NOT_FOUND";
        Je(t, G.DOWNLOAD_PROGRESS, {
          url: n,
          loaded: 0,
          total: 0,
          error: !0,
          ...x ? { notFound: !0 } : {}
        });
      } finally {
        const f = zo.complete();
        if (f !== null) {
          if (os.isSupported()) {
            const x = {
              en: `Download complete: ${f} files downloaded.`,
              it: `Download completato: ${f} file scaricati.`,
              fr: `Téléchargement terminé : ${f} fichiers téléchargés.`,
              de: `Download abgeschlossen: ${f} Dateien heruntergeladen.`,
              es: `Descarga completada: ${f} archivos descargados.`,
              pt: `Download concluído: ${f} ficheiros descarregados.`,
              ru: `Загрузка завершена: ${f} файлов скачано.`,
              zh: `下载完成：已下载 ${f} 个文件。`
            };
            new os({
              title: "Runtime FeedDownloader Pro",
              body: x[yc] ?? x.en,
              icon: Q.join(process.env.VITE_PUBLIC || "", "logo.png")
            }).show();
          }
          Je(t, G.BATCH_COMPLETED, { total: f });
        }
      }
    }), { status: "queued" };
  }), re.handle(G.STOP_BATCH, async () => (Vo.clear(), zo.reset(), !0)), re.handle(G.IMPORT_OPML, async () => {
    const e = await Pn.showOpenDialog(t, {
      properties: ["openFile"],
      filters: [{ name: "OPML/XML", extensions: ["opml", "xml"] }]
    });
    if (e.canceled || e.filePaths.length === 0) return { count: 0 };
    try {
      const n = await fe.readFile(e.filePaths[0], "utf-8"), r = await ee.importOPML(n);
      return Je(t, G.FEEDS_UPDATED, ee.getFeeds()), { count: r };
    } catch (n) {
      throw console.error("Import failed", n), n;
    }
  }), re.handle(G.EXPORT_OPML, async () => {
    const e = await Pn.showSaveDialog(t, {
      defaultPath: "feeds.opml",
      filters: [{ name: "OPML", extensions: ["opml"] }]
    });
    if (e.canceled || !e.filePath) return !1;
    try {
      const n = ee.exportOPML();
      return await fe.writeFile(e.filePath, n, "utf-8"), !0;
    } catch (n) {
      throw console.error("Export failed", n), n;
    }
  }), re.handle(G.EXPORT_ARCHIVE_CSV, async () => {
    const e = await Pn.showSaveDialog(t, {
      defaultPath: "archive_report.csv",
      filters: [{ name: "CSV", extensions: ["csv"] }]
    });
    if (e.canceled || !e.filePath) return !1;
    try {
      const n = ee.exportArchiveCSV();
      return await fe.writeFile(e.filePath, n, "utf-8"), !0;
    } catch (n) {
      throw console.error("Export CSV failed", n), n;
    }
  }), re.handle(G.CHOOSE_FOLDER, async () => {
    const e = await Pn.showOpenDialog(t, {
      properties: ["openDirectory"]
    });
    return e.canceled ? null : e.filePaths[0];
  }), re.handle(G.GET_DOWNLOAD_PATH, async () => ee.getDownloadPath()), re.handle(G.SET_DOWNLOAD_PATH, async (e, n) => (ee.setDownloadPath(n), !0)), re.handle(G.SHOW_IN_FOLDER, async (e, { podcastTitle: n, title: r, enclosureUrl: o }) => {
    let i = ee.getDownloadPath();
    i || (i = Q.join(Le.getPath("documents"), "FeedDownloader", "downloads"));
    const s = o ? mc(o) : ".mp3", a = fc(i, n, r, s), { shell: c } = await import("electron");
    c.showItemInFolder(a);
  }), re.handle(G.GET_HELP_CONTENT, async (e, n) => {
    const o = {
      it: "README_MASTER.md",
      en: "README_EN.md",
      fr: "README_FR.md",
      de: "README_DE.md",
      es: "README_ES.md",
      pt: "README_PT.md",
      ru: "README_RU.md",
      zh: "README_CN.md"
    }[n] || "README_EN.md";
    let i;
    Le.isPackaged ? i = Q.join(process.resourcesPath, o) : i = Q.join(Le.getAppPath(), o);
    try {
      if (await fe.pathExists(i))
        return await fe.readFile(i, "utf-8");
      {
        const s = Le.isPackaged ? Q.join(process.resourcesPath, "README_EN.md") : Q.join(Le.getAppPath(), "README_EN.md");
        return await fe.pathExists(s) ? await fe.readFile(s, "utf-8") : `# Error
Help file not found.`;
      }
    } catch (s) {
      return console.error("Failed to read help file", s), `# Error
Failed to load help documentation.`;
    }
  }), re.handle(G.GET_CONCURRENCY, async () => ee.getConcurrency()), re.handle(G.SET_CONCURRENCY, async (e, n) => (ee.setConcurrency(n), Vo.setConcurrency(n), !0)), re.handle(G.GET_ARCHIVE_STATS, async () => ee.getArchiveStats()), re.handle(G.SET_LOCALE, async (e, n) => (yc = n, !0)), re.handle(G.GET_NAMING_TEMPLATE, async () => ee.getNamingTemplate()), re.handle(G.SET_NAMING_TEMPLATE, async (e, n) => (ee.setNamingTemplate(n), !0)), re.handle(G.GET_SIDECAR_ENABLED, async () => ee.getSidecarEnabled()), re.handle(G.SET_SIDECAR_ENABLED, async (e, n) => (ee.setSidecarEnabled(n), !0)), re.handle(G.RUN_HEALTH_CHECK, async () => {
    const e = ee.getArchive();
    let n = ee.getDownloadPath();
    n || (n = Q.join(Le.getPath("documents"), "FeedDownloader", "downloads"));
    let r = 0, o = 0, i = 0;
    const s = [];
    for (const c of e) {
      if (!c.filename) {
        o++, s.push({ title: c.title, podcast: c.podcastTitle, filename: "(no filename)" });
        continue;
      }
      const p = (await Promise.resolve().then(() => OJ)).default, l = Q.join(n, p(c.podcastTitle), c.filename);
      try {
        const u = await fe.stat(l);
        r++, i += u.size;
      } catch {
        o++, s.push({ title: c.title, podcast: c.podcastTitle, filename: c.filename });
      }
    }
    return {
      total: e.length,
      present: r,
      missing: o,
      totalSizeBytes: i,
      missingFiles: s
    };
  });
}
const qu = ut.dirname(Hu(import.meta.url));
process.env.APP_ROOT = ut.join(qu, "..");
const li = process.env.VITE_DEV_SERVER_URL, SQ = ut.join(process.env.APP_ROOT, "dist-electron"), Mu = ut.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = li ? ut.join(process.env.APP_ROOT, "public") : Mu;
let J, dn = null;
const ui = ut.join(process.env.VITE_PUBLIC, "logo.png");
process.platform === "win32" && Le.setAppUserModelId("com.runtime.feeddownloader.pro");
function FJ() {
  try {
    const e = process.platform === "win32" ? ut.join(process.env.VITE_PUBLIC, "icon.ico") : ui;
    dn = new Vu(e);
  } catch (e) {
    console.error("[Tray] Failed to create system tray icon:", e), dn = null;
    return;
  }
  dn.setToolTip("Runtime FeedDownloader Pro");
  const t = zu.buildFromTemplate([
    {
      label: "Show",
      click: () => {
        J == null || J.show(), J == null || J.focus();
      }
    },
    { type: "separator" },
    {
      label: "Quit",
      click: () => {
        Le.quit();
      }
    }
  ]);
  dn.setContextMenu(t), dn.on("click", () => {
    J != null && J.isVisible() ? J.hide() : (J == null || J.show(), J == null || J.focus());
  });
}
function ju() {
  J = new vc({
    title: "Runtime FeedDownloader Pro",
    icon: ui,
    backgroundColor: "#0b1120",
    // Matches Tailwind bg-background (approx)
    show: !1,
    autoHideMenuBar: !0,
    ...process.platform === "linux" ? { icon: ui } : {},
    ...process.platform === "darwin" ? { titleBarStyle: "hidden" } : {},
    webPreferences: {
      preload: ut.join(qu, "preload.mjs"),
      nodeIntegration: !1,
      contextIsolation: !0,
      sandbox: !1
      // sandbox:true incompatible with preload+better-sqlite3 native module
    }
  }), J.webContents.session.setPermissionRequestHandler((t, e, n) => (console.log(`Blocked permission request: ${e}`), n(!1))), kJ(J), J.once("ready-to-show", () => {
    J == null || J.maximize(), J == null || J.show();
  }), J.webContents.on("did-fail-load", () => {
    J == null || J.show();
  }), li ? J.loadURL(li) : J.loadFile(ut.join(Mu, "index.html"));
}
Le.on("window-all-closed", () => {
  process.platform !== "darwin" ? Le.quit() : (Le.quit(), J = null);
});
Le.on("activate", () => {
  vc.getAllWindows().length === 0 && ju();
});
Le.whenReady().then(() => {
  ju(), process.platform !== "darwin" && FJ();
});
export {
  SQ as MAIN_DIST,
  Mu as RENDERER_DIST,
  li as VITE_DEV_SERVER_URL
};
