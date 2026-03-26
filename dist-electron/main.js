var $u = Object.defineProperty;
var os = (t) => {
  throw TypeError(t);
};
var Vu = (t, e, n) => e in t ? $u(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ue = (t, e, n) => Vu(t, typeof e != "symbol" ? e + "" : e, n), Dr = (t, e, n) => e.has(t) || os("Cannot " + n);
var C = (t, e, n) => (Dr(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ie = (t, e, n) => e.has(t) ? os("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), ne = (t, e, n, r) => (Dr(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), H = (t, e, n) => (Dr(t, e, "access private method"), n);
var wt = (t, e, n, r) => ({
  set _(o) {
    ne(t, e, o, n);
  },
  get _() {
    return C(t, e, r);
  }
});
import { app as Se, ipcMain as re, Notification as is, dialog as Pn, BrowserWindow as bc, Tray as zu, Menu as Hu } from "electron";
import { fileURLToPath as Xu } from "node:url";
import ut from "node:path";
import lr from "http";
import ur from "https";
import Gu, { EventEmitter as Wu } from "events";
import Yu from "timers";
import Tn from "url";
import bt from "util";
import Le, { Readable as Ku } from "stream";
import Q from "path";
import pi from "fs";
import xc from "crypto";
import wc from "http2";
import Ec from "assert";
import Tc from "tty";
import Ju from "os";
import yt from "zlib";
import Qu from "better-sqlite3";
import Zu from "constants";
function ep(t, e) {
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
function on(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var it = {}, Lr = {}, ss;
function di() {
  return ss || (ss = 1, (function() {
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
var Cr = {}, rt = {}, ot = {}, as;
function dt() {
  return as || (as = 1, (function() {
    var t, e, n, r, o, i, s, a = [].slice, c = {}.hasOwnProperty;
    t = function() {
      var d, l, u, p, h, f;
      if (f = arguments[0], h = 2 <= arguments.length ? a.call(arguments, 1) : [], o(Object.assign))
        Object.assign.apply(null, arguments);
      else
        for (d = 0, u = h.length; d < u; d++)
          if (p = h[d], p != null)
            for (l in p)
              c.call(p, l) && (f[l] = p[l]);
      return f;
    }, o = function(d) {
      return !!d && Object.prototype.toString.call(d) === "[object Function]";
    }, i = function(d) {
      var l;
      return !!d && ((l = typeof d) == "function" || l === "object");
    }, n = function(d) {
      return o(Array.isArray) ? Array.isArray(d) : Object.prototype.toString.call(d) === "[object Array]";
    }, r = function(d) {
      var l;
      if (n(d))
        return !d.length;
      for (l in d)
        if (c.call(d, l))
          return !1;
      return !0;
    }, s = function(d) {
      var l, u;
      return i(d) && (u = Object.getPrototypeOf(d)) && (l = u.constructor) && typeof l == "function" && l instanceof l && Function.prototype.toString.call(l) === Function.prototype.toString.call(Object);
    }, e = function(d) {
      return o(d.valueOf) ? d.valueOf() : d;
    }, ot.assign = t, ot.isFunction = o, ot.isObject = i, ot.isArray = n, ot.isEmpty = r, ot.isPlainObject = s, ot.getValue = e;
  }).call(z)), ot;
}
var Rr = { exports: {} }, cs;
function Sc() {
  return cs || (cs = 1, (function() {
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
var Pr = { exports: {} }, Ir = { exports: {} }, kr = { exports: {} }, ls;
function tp() {
  return ls || (ls = 1, (function() {
    kr.exports = function() {
      function t() {
      }
      return t.prototype.handleError = function(e) {
        throw new Error(e);
      }, t;
    }();
  }).call(z)), kr.exports;
}
var Fr = { exports: {} }, us;
function np() {
  return us || (us = 1, (function() {
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
var ps;
function rp() {
  return ps || (ps = 1, (function() {
    var t, e;
    t = tp(), e = np(), Ir.exports = function() {
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
var qr = { exports: {} }, Mr = { exports: {} }, jr = { exports: {} }, ds;
function fe() {
  return ds || (ds = 1, (function() {
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
var Ur = { exports: {} }, fs;
function Nc() {
  return fs || (fs = 1, (function() {
    var t;
    t = fe(), He(), Ur.exports = function() {
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
var Br = { exports: {} }, ms;
function fi() {
  return ms || (ms = 1, (function() {
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
var hs;
function mi() {
  return hs || (hs = 1, (function() {
    var t, e, n, r, o, i, s, a, c = function(l, u) {
      for (var p in u)
        d.call(u, p) && (l[p] = u[p]);
      function h() {
        this.constructor = l;
      }
      return h.prototype = u.prototype, l.prototype = new h(), l.__super__ = u.prototype, l;
    }, d = {}.hasOwnProperty;
    a = dt(), s = a.isObject, i = a.isFunction, o = a.getValue, r = He(), t = fe(), e = Nc(), n = fi(), Mr.exports = function(l) {
      c(u, l);
      function u(p, h, f) {
        var b, x, S, w;
        if (u.__super__.constructor.call(this, p), h == null)
          throw new Error("Missing element name. " + this.debugInfo());
        if (this.name = this.stringify.name(h), this.type = t.Element, this.attribs = {}, this.schemaTypeInfo = null, f != null && this.attribute(f), p.type === t.Document && (this.isRoot = !0, this.documentObject = p, p.rootObject = this, p.children)) {
          for (w = p.children, x = 0, S = w.length; x < S; x++)
            if (b = w[x], b.type === t.DocType) {
              b.name = this.name;
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
        var p, h, f, b;
        f = Object.create(this), f.isRoot && (f.documentObject = null), f.attribs = {}, b = this.attribs;
        for (h in b)
          d.call(b, h) && (p = b[h], f.attribs[h] = p.clone());
        return f.children = [], this.children.forEach(function(x) {
          var S;
          return S = x.clone(), S.parent = f, f.children.push(S);
        }), f;
      }, u.prototype.attribute = function(p, h) {
        var f, b;
        if (p != null && (p = o(p)), s(p))
          for (f in p)
            d.call(p, f) && (b = p[f], this.attribute(f, b));
        else
          i(h) && (h = h.apply()), this.options.keepNullAttributes && h == null ? this.attribs[p] = new e(this, p, "") : h != null && (this.attribs[p] = new e(this, p, h));
        return this;
      }, u.prototype.removeAttribute = function(p) {
        var h, f, b;
        if (p == null)
          throw new Error("Missing attribute name. " + this.debugInfo());
        if (p = o(p), Array.isArray(p))
          for (f = 0, b = p.length; f < b; f++)
            h = p[f], delete this.attribs[h];
        else
          delete this.attribs[p];
        return this;
      }, u.prototype.toString = function(p) {
        return this.options.writer.element(this, this.options.writer.filterOptions(p));
      }, u.prototype.att = function(p, h) {
        return this.attribute(p, h);
      }, u.prototype.a = function(p, h) {
        return this.attribute(p, h);
      }, u.prototype.getAttribute = function(p) {
        return this.attribs.hasOwnProperty(p) ? this.attribs[p].value : null;
      }, u.prototype.setAttribute = function(p, h) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getAttributeNode = function(p) {
        return this.attribs.hasOwnProperty(p) ? this.attribs[p] : null;
      }, u.prototype.setAttributeNode = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.removeAttributeNode = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagName = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getAttributeNS = function(p, h) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.setAttributeNS = function(p, h, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.removeAttributeNS = function(p, h) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getAttributeNodeNS = function(p, h) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.setAttributeNodeNS = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagNameNS = function(p, h) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.hasAttribute = function(p) {
        return this.attribs.hasOwnProperty(p);
      }, u.prototype.hasAttributeNS = function(p, h) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.setIdAttribute = function(p, h) {
        return this.attribs.hasOwnProperty(p) ? this.attribs[p].isId : h;
      }, u.prototype.setIdAttributeNS = function(p, h, f) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.setIdAttributeNode = function(p, h) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagName = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByTagNameNS = function(p, h) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.getElementsByClassName = function(p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, u.prototype.isEqualNode = function(p) {
        var h, f, b;
        if (!u.__super__.isEqualNode.apply(this, arguments).isEqualNode(p) || p.namespaceURI !== this.namespaceURI || p.prefix !== this.prefix || p.localName !== this.localName || p.attribs.length !== this.attribs.length)
          return !1;
        for (h = f = 0, b = this.attribs.length - 1; 0 <= b ? f <= b : f >= b; h = 0 <= b ? ++f : --f)
          if (!this.attribs[h].isEqualNode(p.attribs[h]))
            return !1;
        return !0;
      }, u;
    }(r);
  }).call(z)), Mr.exports;
}
var $r = { exports: {} }, Vr = { exports: {} }, gs;
function pr() {
  return gs || (gs = 1, (function() {
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
var ys;
function hi() {
  return ys || (ys = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    t = fe(), e = pr(), $r.exports = function(o) {
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
var zr = { exports: {} }, vs;
function gi() {
  return vs || (vs = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    t = fe(), e = pr(), zr.exports = function(o) {
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
var Hr = { exports: {} }, bs;
function yi() {
  return bs || (bs = 1, (function() {
    var t, e, n, r = function(i, s) {
      for (var a in s)
        o.call(s, a) && (i[a] = s[a]);
      function c() {
        this.constructor = i;
      }
      return c.prototype = s.prototype, i.prototype = new c(), i.__super__ = s.prototype, i;
    }, o = {}.hasOwnProperty;
    n = dt().isObject, e = He(), t = fe(), Hr.exports = function(i) {
      r(s, i);
      function s(a, c, d, l) {
        var u;
        s.__super__.constructor.call(this, a), n(c) && (u = c, c = u.version, d = u.encoding, l = u.standalone), c || (c = "1.0"), this.type = t.Declaration, this.version = this.stringify.xmlVersion(c), d != null && (this.encoding = this.stringify.xmlEncoding(d)), l != null && (this.standalone = this.stringify.xmlStandalone(l));
      }
      return s.prototype.toString = function(a) {
        return this.options.writer.declaration(this, this.options.writer.filterOptions(a));
      }, s;
    }(e);
  }).call(z)), Hr.exports;
}
var Xr = { exports: {} }, Gr = { exports: {} }, xs;
function vi() {
  return xs || (xs = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    e = He(), t = fe(), Gr.exports = function(o) {
      n(i, o);
      function i(s, a, c, d, l, u) {
        if (i.__super__.constructor.call(this, s), a == null)
          throw new Error("Missing DTD element name. " + this.debugInfo());
        if (c == null)
          throw new Error("Missing DTD attribute name. " + this.debugInfo(a));
        if (!d)
          throw new Error("Missing DTD attribute type. " + this.debugInfo(a));
        if (!l)
          throw new Error("Missing DTD attribute default. " + this.debugInfo(a));
        if (l.indexOf("#") !== 0 && (l = "#" + l), !l.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(a));
        if (u && !l.match(/^(#FIXED|#DEFAULT)$/))
          throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(a));
        this.elementName = this.stringify.name(a), this.type = t.AttributeDeclaration, this.attributeName = this.stringify.name(c), this.attributeType = this.stringify.dtdAttType(d), u && (this.defaultValue = this.stringify.dtdAttDefault(u)), this.defaultValueType = l;
      }
      return i.prototype.toString = function(s) {
        return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(s));
      }, i;
    }(e);
  }).call(z)), Gr.exports;
}
var Wr = { exports: {} }, ws;
function bi() {
  return ws || (ws = 1, (function() {
    var t, e, n, r = function(i, s) {
      for (var a in s)
        o.call(s, a) && (i[a] = s[a]);
      function c() {
        this.constructor = i;
      }
      return c.prototype = s.prototype, i.prototype = new c(), i.__super__ = s.prototype, i;
    }, o = {}.hasOwnProperty;
    n = dt().isObject, e = He(), t = fe(), Wr.exports = function(i) {
      r(s, i);
      function s(a, c, d, l) {
        if (s.__super__.constructor.call(this, a), d == null)
          throw new Error("Missing DTD entity name. " + this.debugInfo(d));
        if (l == null)
          throw new Error("Missing DTD entity value. " + this.debugInfo(d));
        if (this.pe = !!c, this.name = this.stringify.name(d), this.type = t.EntityDeclaration, !n(l))
          this.value = this.stringify.dtdEntityValue(l), this.internal = !0;
        else {
          if (!l.pubID && !l.sysID)
            throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(d));
          if (l.pubID && !l.sysID)
            throw new Error("System identifier is required for a public external entity. " + this.debugInfo(d));
          if (this.internal = !1, l.pubID != null && (this.pubID = this.stringify.dtdPubID(l.pubID)), l.sysID != null && (this.sysID = this.stringify.dtdSysID(l.sysID)), l.nData != null && (this.nData = this.stringify.dtdNData(l.nData)), this.pe && this.nData)
            throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(d));
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
var Yr = { exports: {} }, Es;
function xi() {
  return Es || (Es = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    e = He(), t = fe(), Yr.exports = function(o) {
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
var Kr = { exports: {} }, Ts;
function wi() {
  return Ts || (Ts = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    e = He(), t = fe(), Kr.exports = function(o) {
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
var Ss;
function Ei() {
  return Ss || (Ss = 1, (function() {
    var t, e, n, r, o, i, s, a, c = function(l, u) {
      for (var p in u)
        d.call(u, p) && (l[p] = u[p]);
      function h() {
        this.constructor = l;
      }
      return h.prototype = u.prototype, l.prototype = new h(), l.__super__ = u.prototype, l;
    }, d = {}.hasOwnProperty;
    a = dt().isObject, s = He(), t = fe(), e = vi(), r = bi(), n = xi(), o = wi(), i = fi(), Xr.exports = function(l) {
      c(u, l);
      function u(p, h, f) {
        var b, x, S, w, y, E;
        if (u.__super__.constructor.call(this, p), this.type = t.DocType, p.children) {
          for (w = p.children, x = 0, S = w.length; x < S; x++)
            if (b = w[x], b.type === t.Element) {
              this.name = b.name;
              break;
            }
        }
        this.documentObject = p, a(h) && (y = h, h = y.pubID, f = y.sysID), f == null && (E = [h, f], f = E[0], h = E[1]), h != null && (this.pubID = this.stringify.dtdPubID(h)), f != null && (this.sysID = this.stringify.dtdSysID(f));
      }
      return Object.defineProperty(u.prototype, "entities", {
        get: function() {
          var p, h, f, b, x;
          for (b = {}, x = this.children, h = 0, f = x.length; h < f; h++)
            p = x[h], p.type === t.EntityDeclaration && !p.pe && (b[p.name] = p);
          return new i(b);
        }
      }), Object.defineProperty(u.prototype, "notations", {
        get: function() {
          var p, h, f, b, x;
          for (b = {}, x = this.children, h = 0, f = x.length; h < f; h++)
            p = x[h], p.type === t.NotationDeclaration && (b[p.name] = p);
          return new i(b);
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
      }), u.prototype.element = function(p, h) {
        var f;
        return f = new n(this, p, h), this.children.push(f), this;
      }, u.prototype.attList = function(p, h, f, b, x) {
        var S;
        return S = new e(this, p, h, f, b, x), this.children.push(S), this;
      }, u.prototype.entity = function(p, h) {
        var f;
        return f = new r(this, !1, p, h), this.children.push(f), this;
      }, u.prototype.pEntity = function(p, h) {
        var f;
        return f = new r(this, !0, p, h), this.children.push(f), this;
      }, u.prototype.notation = function(p, h) {
        var f;
        return f = new o(this, p, h), this.children.push(f), this;
      }, u.prototype.toString = function(p) {
        return this.options.writer.docType(this, this.options.writer.filterOptions(p));
      }, u.prototype.ele = function(p, h) {
        return this.element(p, h);
      }, u.prototype.att = function(p, h, f, b, x) {
        return this.attList(p, h, f, b, x);
      }, u.prototype.ent = function(p, h) {
        return this.entity(p, h);
      }, u.prototype.pent = function(p, h) {
        return this.pEntity(p, h);
      }, u.prototype.not = function(p, h) {
        return this.notation(p, h);
      }, u.prototype.up = function() {
        return this.root() || this.documentObject;
      }, u.prototype.isEqualNode = function(p) {
        return !(!u.__super__.isEqualNode.apply(this, arguments).isEqualNode(p) || p.name !== this.name || p.publicId !== this.publicId || p.systemId !== this.systemId);
      }, u;
    }(s);
  }).call(z)), Xr.exports;
}
var Jr = { exports: {} }, Ns;
function Ti() {
  return Ns || (Ns = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    t = fe(), e = He(), Jr.exports = function(o) {
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
var Qr = { exports: {} }, Os;
function Si() {
  return Os || (Os = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    t = fe(), e = pr(), Qr.exports = function(o) {
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
var Zr = { exports: {} }, As;
function Ni() {
  return As || (As = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    t = fe(), e = pr(), Zr.exports = function(o) {
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
var eo = { exports: {} }, _s;
function Oc() {
  return _s || (_s = 1, (function() {
    var t, e, n = function(o, i) {
      for (var s in i)
        r.call(i, s) && (o[s] = i[s]);
      function a() {
        this.constructor = o;
      }
      return a.prototype = i.prototype, o.prototype = new a(), o.__super__ = i.prototype, o;
    }, r = {}.hasOwnProperty;
    e = He(), t = fe(), eo.exports = function(o) {
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
var to = { exports: {} }, Ds;
function op() {
  return Ds || (Ds = 1, (function() {
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
var no = { exports: {} }, Ls;
function ip() {
  return Ls || (Ls = 1, (function() {
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
var Cs;
function He() {
  return Cs || (Cs = 1, (function() {
    var t, e, n, r, o, i, s, a, c, d, l, u, p, h, f, b, x, S = {}.hasOwnProperty;
    x = dt(), b = x.isObject, f = x.isFunction, h = x.isEmpty, p = x.getValue, a = null, n = null, r = null, o = null, i = null, l = null, u = null, d = null, s = null, e = null, c = null, t = null, qr.exports = function() {
      function w(y) {
        this.parent = y, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.value = null, this.children = [], this.baseURI = null, a || (a = mi(), n = hi(), r = gi(), o = yi(), i = Ei(), l = Ti(), u = Si(), d = Ni(), s = Oc(), e = fe(), c = op(), fi(), t = ip());
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
        if (D = null, E === null && A == null && (B = [{}, null], E = B[0], A = B[1]), E == null && (E = {}), E = p(E), b(E) || ($ = [E, A], A = $[0], E = $[1]), y != null && (y = p(y)), Array.isArray(y))
          for (O = 0, I = y.length; O < I; O++)
            P = y[O], D = this.element(P);
        else if (f(y))
          D = this.element(y.apply());
        else if (b(y)) {
          for (_ in y)
            if (S.call(y, _))
              if (q = y[_], f(q) && (q = q.apply()), !this.options.ignoreDecorators && this.stringify.convertAttKey && _.indexOf(this.stringify.convertAttKey) === 0)
                D = this.attribute(_.substr(this.stringify.convertAttKey.length), q);
              else if (!this.options.separateArrayItems && Array.isArray(q) && h(q))
                D = this.dummy();
              else if (b(q) && h(q))
                D = this.element(_);
              else if (!this.options.keepNullNodes && q == null)
                D = this.dummy();
              else if (!this.options.separateArrayItems && Array.isArray(q))
                for (m = 0, j = q.length; m < j; m++)
                  P = q[m], L = {}, L[_] = P, D = this.element(L);
              else b(q) ? !this.options.ignoreDecorators && this.stringify.convertTextKey && _.indexOf(this.stringify.convertTextKey) === 0 ? D = this.element(q) : (D = this.element(_), D.element(q)) : D = this.element(_, q);
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
        return y != null && (y = p(y)), E || (E = {}), E = p(E), b(E) || (P = [E, A], A = P[0], E = P[1]), L = new a(this, y, E), A != null && L.text(A), this.children.push(L), L;
      }, w.prototype.text = function(y) {
        var E;
        return b(y) && this.element(y), E = new u(this, y), this.children.push(E), this;
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
        if (y != null && (y = p(y)), E != null && (E = p(E)), Array.isArray(y))
          for (O = 0, m = y.length; O < m; O++)
            A = y[O], this.instruction(A);
        else if (b(y))
          for (A in y)
            S.call(y, A) && (L = y[A], this.instruction(A, L));
        else
          f(E) && (E = E.apply()), P = new d(this, y, E), this.children.push(P);
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
var ro = { exports: {} }, Rs;
function Ac() {
  return Rs || (Rs = 1, (function() {
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
var oo = { exports: {} }, io = { exports: {} }, so = { exports: {} }, Ps;
function dr() {
  return Ps || (Ps = 1, (function() {
    so.exports = {
      None: 0,
      OpenTag: 1,
      InsideTag: 2,
      CloseTag: 3
    };
  }).call(z)), so.exports;
}
var Is;
function _c() {
  return Is || (Is = 1, (function() {
    var t, e, n, r = {}.hasOwnProperty;
    n = dt().assign, t = fe(), yi(), Ei(), hi(), gi(), mi(), Ti(), Si(), Ni(), Oc(), vi(), xi(), bi(), wi(), e = dr(), io.exports = function() {
      function o(i) {
        var s, a, c;
        i || (i = {}), this.options = i, a = i.writer || {};
        for (s in a)
          r.call(a, s) && (c = a[s], this["_" + s] = this[s], this[s] = c);
      }
      return o.prototype.filterOptions = function(i) {
        var s, a, c, d, l, u, p, h;
        return i || (i = {}), i = n({}, this.options, i), s = {
          writer: this
        }, s.pretty = i.pretty || !1, s.allowEmpty = i.allowEmpty || !1, s.indent = (a = i.indent) != null ? a : "  ", s.newline = (c = i.newline) != null ? c : `
`, s.offset = (d = i.offset) != null ? d : 0, s.dontPrettyTextNodes = (l = (u = i.dontPrettyTextNodes) != null ? u : i.dontprettytextnodes) != null ? l : 0, s.spaceBeforeSlash = (p = (h = i.spaceBeforeSlash) != null ? h : i.spacebeforeslash) != null ? p : "", s.spaceBeforeSlash === !0 && (s.spaceBeforeSlash = " "), s.suppressPrettyCount = 0, s.user = {}, s.state = e.None, s;
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
        var c, d, l, u, p;
        if (a || (a = 0), this.openNode(i, s, a), s.state = e.OpenTag, u = this.indent(i, s, a), u += "<!DOCTYPE " + i.root().name, i.pubID && i.sysID ? u += ' PUBLIC "' + i.pubID + '" "' + i.sysID + '"' : i.sysID && (u += ' SYSTEM "' + i.sysID + '"'), i.children.length > 0) {
          for (u += " [", u += this.endline(i, s, a), s.state = e.InsideTag, p = i.children, d = 0, l = p.length; d < l; d++)
            c = p[d], u += this.writeChildNode(c, s, a + 1);
          s.state = e.CloseTag, u += "]";
        }
        return s.state = e.CloseTag, u += s.spaceBeforeSlash + ">", u += this.endline(i, s, a), s.state = e.None, this.closeNode(i, s, a), u;
      }, o.prototype.element = function(i, s, a) {
        var c, d, l, u, p, h, f, b, x, S, w, y, E, A;
        a || (a = 0), S = !1, w = "", this.openNode(i, s, a), s.state = e.OpenTag, w += this.indent(i, s, a) + "<" + i.name, y = i.attribs;
        for (x in y)
          r.call(y, x) && (c = y[x], w += this.attribute(c, s, a));
        if (l = i.children.length, u = l === 0 ? null : i.children[0], l === 0 || i.children.every(function(L) {
          return (L.type === t.Text || L.type === t.Raw) && L.value === "";
        }))
          s.allowEmpty ? (w += ">", s.state = e.CloseTag, w += "</" + i.name + ">" + this.endline(i, s, a)) : (s.state = e.CloseTag, w += s.spaceBeforeSlash + "/>" + this.endline(i, s, a));
        else if (s.pretty && l === 1 && (u.type === t.Text || u.type === t.Raw) && u.value != null)
          w += ">", s.state = e.InsideTag, s.suppressPrettyCount++, S = !0, w += this.writeChildNode(u, s, a + 1), s.suppressPrettyCount--, S = !1, s.state = e.CloseTag, w += "</" + i.name + ">" + this.endline(i, s, a);
        else {
          if (s.dontPrettyTextNodes) {
            for (E = i.children, p = 0, f = E.length; p < f; p++)
              if (d = E[p], (d.type === t.Text || d.type === t.Raw) && d.value != null) {
                s.suppressPrettyCount++, S = !0;
                break;
              }
          }
          for (w += ">" + this.endline(i, s, a), s.state = e.InsideTag, A = i.children, h = 0, b = A.length; h < b; h++)
            d = A[h], w += this.writeChildNode(d, s, a + 1);
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
var ks;
function Oi() {
  return ks || (ks = 1, (function() {
    var t, e = function(r, o) {
      for (var i in o)
        n.call(o, i) && (r[i] = o[i]);
      function s() {
        this.constructor = r;
      }
      return s.prototype = o.prototype, r.prototype = new s(), r.__super__ = o.prototype, r;
    }, n = {}.hasOwnProperty;
    t = _c(), oo.exports = function(r) {
      e(o, r);
      function o(i) {
        o.__super__.constructor.call(this, i);
      }
      return o.prototype.document = function(i, s) {
        var a, c, d, l, u;
        for (s = this.filterOptions(s), l = "", u = i.children, c = 0, d = u.length; c < d; c++)
          a = u[c], l += this.writeChildNode(a, s, 0);
        return s.pretty && l.slice(-s.newline.length) === s.newline && (l = l.slice(0, -s.newline.length)), l;
      }, o;
    }(t);
  }).call(z)), oo.exports;
}
var Fs;
function Dc() {
  return Fs || (Fs = 1, (function() {
    var t, e, n, r, o, i, s, a = function(d, l) {
      for (var u in l)
        c.call(l, u) && (d[u] = l[u]);
      function p() {
        this.constructor = d;
      }
      return p.prototype = l.prototype, d.prototype = new p(), d.__super__ = l.prototype, d;
    }, c = {}.hasOwnProperty;
    s = dt().isPlainObject, n = Sc(), e = rp(), r = He(), t = fe(), i = Ac(), o = Oi(), Pr.exports = function(d) {
      a(l, d);
      function l(u) {
        l.__super__.constructor.call(this, null), this.name = "#document", this.type = t.Document, this.documentURI = null, this.domConfig = new e(), u || (u = {}), u.writer || (u.writer = new o()), this.options = u, this.stringify = new i(u);
      }
      return Object.defineProperty(l.prototype, "implementation", {
        value: new n()
      }), Object.defineProperty(l.prototype, "doctype", {
        get: function() {
          var u, p, h, f;
          for (f = this.children, p = 0, h = f.length; p < h; p++)
            if (u = f[p], u.type === t.DocType)
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
        var p;
        return p = {}, u ? s(u) && (p = u, u = this.options.writer) : u = this.options.writer, u.document(this, u.filterOptions(p));
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
      }, l.prototype.createProcessingInstruction = function(u, p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createAttribute = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createEntityReference = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.getElementsByTagName = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.importNode = function(u, p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createElementNS = function(u, p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createAttributeNS = function(u, p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.getElementsByTagNameNS = function(u, p) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.getElementById = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.adoptNode = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.normalizeDocument = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.renameNode = function(u, p, h) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.getElementsByClassName = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createEvent = function(u) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createRange = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createNodeIterator = function(u, p, h) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l.prototype.createTreeWalker = function(u, p, h) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }, l;
    }(r);
  }).call(z)), Pr.exports;
}
var ao = { exports: {} }, qs;
function sp() {
  return qs || (qs = 1, (function() {
    var t, e, n, r, o, i, s, a, c, d, l, u, p, h, f, b, x, S, w, y, E, A, L, P = {}.hasOwnProperty;
    L = dt(), E = L.isObject, y = L.isFunction, A = L.isPlainObject, w = L.getValue, t = fe(), u = Dc(), p = mi(), r = hi(), o = gi(), f = Ti(), S = Si(), h = Ni(), d = yi(), l = Ei(), i = vi(), a = bi(), s = xi(), c = wi(), n = Nc(), x = Ac(), b = Oi(), e = dr(), ao.exports = function() {
      function O(m, _, D) {
        var I;
        this.name = "?xml", this.type = t.Document, m || (m = {}), I = {}, m.writer ? A(m.writer) && (I = m.writer, m.writer = new b()) : m.writer = new b(), this.options = m, this.writer = m.writer, this.writerOptions = this.writer.filterOptions(I), this.stringify = new x(m), this.onDataCallback = _ || function() {
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
        return this.openCurrent(), m = w(m), _ == null && (_ = {}), _ = w(_), E(_) || (I = [_, D], D = I[0], _ = I[1]), this.currentNode = new p(this, m, _), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, D != null && this.text(D), this;
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
          y(_) && (_ = _.apply()), $ = new h(this, m, _), this.onData(this.writer.processingInstruction($, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }, O.prototype.declaration = function(m, _, D) {
        var I;
        if (this.openCurrent(), this.documentStarted)
          throw new Error("declaration() must be the first node.");
        return I = new d(this, m, _, D), this.onData(this.writer.declaration(I, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
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
var co = { exports: {} }, Ms;
function ap() {
  return Ms || (Ms = 1, (function() {
    var t, e, n, r = function(i, s) {
      for (var a in s)
        o.call(s, a) && (i[a] = s[a]);
      function c() {
        this.constructor = i;
      }
      return c.prototype = s.prototype, i.prototype = new c(), i.__super__ = s.prototype, i;
    }, o = {}.hasOwnProperty;
    t = fe(), n = _c(), e = dr(), co.exports = function(i) {
      r(s, i);
      function s(a, c) {
        this.stream = a, s.__super__.constructor.call(this, c);
      }
      return s.prototype.endline = function(a, c, d) {
        return a.isLastRootNode && c.state === e.CloseTag ? "" : s.__super__.endline.call(this, a, c, d);
      }, s.prototype.document = function(a, c) {
        var d, l, u, p, h, f, b, x, S;
        for (b = a.children, l = u = 0, h = b.length; u < h; l = ++u)
          d = b[l], d.isLastRootNode = l === a.children.length - 1;
        for (c = this.filterOptions(c), x = a.children, S = [], p = 0, f = x.length; p < f; p++)
          d = x[p], S.push(this.writeChildNode(d, c, 0));
        return S;
      }, s.prototype.attribute = function(a, c, d) {
        return this.stream.write(s.__super__.attribute.call(this, a, c, d));
      }, s.prototype.cdata = function(a, c, d) {
        return this.stream.write(s.__super__.cdata.call(this, a, c, d));
      }, s.prototype.comment = function(a, c, d) {
        return this.stream.write(s.__super__.comment.call(this, a, c, d));
      }, s.prototype.declaration = function(a, c, d) {
        return this.stream.write(s.__super__.declaration.call(this, a, c, d));
      }, s.prototype.docType = function(a, c, d) {
        var l, u, p, h;
        if (d || (d = 0), this.openNode(a, c, d), c.state = e.OpenTag, this.stream.write(this.indent(a, c, d)), this.stream.write("<!DOCTYPE " + a.root().name), a.pubID && a.sysID ? this.stream.write(' PUBLIC "' + a.pubID + '" "' + a.sysID + '"') : a.sysID && this.stream.write(' SYSTEM "' + a.sysID + '"'), a.children.length > 0) {
          for (this.stream.write(" ["), this.stream.write(this.endline(a, c, d)), c.state = e.InsideTag, h = a.children, u = 0, p = h.length; u < p; u++)
            l = h[u], this.writeChildNode(l, c, d + 1);
          c.state = e.CloseTag, this.stream.write("]");
        }
        return c.state = e.CloseTag, this.stream.write(c.spaceBeforeSlash + ">"), this.stream.write(this.endline(a, c, d)), c.state = e.None, this.closeNode(a, c, d);
      }, s.prototype.element = function(a, c, d) {
        var l, u, p, h, f, b, x, S, w;
        d || (d = 0), this.openNode(a, c, d), c.state = e.OpenTag, this.stream.write(this.indent(a, c, d) + "<" + a.name), S = a.attribs;
        for (x in S)
          o.call(S, x) && (l = S[x], this.attribute(l, c, d));
        if (p = a.children.length, h = p === 0 ? null : a.children[0], p === 0 || a.children.every(function(y) {
          return (y.type === t.Text || y.type === t.Raw) && y.value === "";
        }))
          c.allowEmpty ? (this.stream.write(">"), c.state = e.CloseTag, this.stream.write("</" + a.name + ">")) : (c.state = e.CloseTag, this.stream.write(c.spaceBeforeSlash + "/>"));
        else if (c.pretty && p === 1 && (h.type === t.Text || h.type === t.Raw) && h.value != null)
          this.stream.write(">"), c.state = e.InsideTag, c.suppressPrettyCount++, this.writeChildNode(h, c, d + 1), c.suppressPrettyCount--, c.state = e.CloseTag, this.stream.write("</" + a.name + ">");
        else {
          for (this.stream.write(">" + this.endline(a, c, d)), c.state = e.InsideTag, w = a.children, f = 0, b = w.length; f < b; f++)
            u = w[f], this.writeChildNode(u, c, d + 1);
          c.state = e.CloseTag, this.stream.write(this.indent(a, c, d) + "</" + a.name + ">");
        }
        return this.stream.write(this.endline(a, c, d)), c.state = e.None, this.closeNode(a, c, d);
      }, s.prototype.processingInstruction = function(a, c, d) {
        return this.stream.write(s.__super__.processingInstruction.call(this, a, c, d));
      }, s.prototype.raw = function(a, c, d) {
        return this.stream.write(s.__super__.raw.call(this, a, c, d));
      }, s.prototype.text = function(a, c, d) {
        return this.stream.write(s.__super__.text.call(this, a, c, d));
      }, s.prototype.dtdAttList = function(a, c, d) {
        return this.stream.write(s.__super__.dtdAttList.call(this, a, c, d));
      }, s.prototype.dtdElement = function(a, c, d) {
        return this.stream.write(s.__super__.dtdElement.call(this, a, c, d));
      }, s.prototype.dtdEntity = function(a, c, d) {
        return this.stream.write(s.__super__.dtdEntity.call(this, a, c, d));
      }, s.prototype.dtdNotation = function(a, c, d) {
        return this.stream.write(s.__super__.dtdNotation.call(this, a, c, d));
      }, s;
    }(n);
  }).call(z)), co.exports;
}
var js;
function cp() {
  return js || (js = 1, (function() {
    var t, e, n, r, o, i, s, a, c, d;
    d = dt(), a = d.assign, c = d.isFunction, n = Sc(), r = Dc(), o = sp(), s = Oi(), i = ap(), t = fe(), e = dr(), rt.create = function(l, u, p, h) {
      var f, b;
      if (l == null)
        throw new Error("Root element needs a name.");
      return h = a({}, u, p, h), f = new r(h), b = f.element(l), h.headless || (f.declaration(h), (h.pubID != null || h.sysID != null) && f.dtd(h)), b;
    }, rt.begin = function(l, u, p) {
      var h;
      return c(l) && (h = [l, u], u = h[0], p = h[1], l = {}), u ? new o(l, u, p) : new r(l);
    }, rt.stringWriter = function(l) {
      return new s(l);
    }, rt.streamWriter = function(l, u) {
      return new i(l, u);
    }, rt.implementation = new n(), rt.nodeType = t, rt.writerState = e;
  }).call(z)), rt;
}
var Us;
function lp() {
  return Us || (Us = 1, (function() {
    var t, e, n, r, o, i = {}.hasOwnProperty;
    t = cp(), e = di().defaults, r = function(s) {
      return typeof s == "string" && (s.indexOf("&") >= 0 || s.indexOf(">") >= 0 || s.indexOf("<") >= 0);
    }, o = function(s) {
      return "<![CDATA[" + n(s) + "]]>";
    }, n = function(s) {
      return s.replace("]]>", "]]]]><![CDATA[>");
    }, Cr.Builder = function() {
      function s(a) {
        var c, d, l;
        this.options = {}, d = e["0.2"];
        for (c in d)
          i.call(d, c) && (l = d[c], this.options[c] = l);
        for (c in a)
          i.call(a, c) && (l = a[c], this.options[c] = l);
      }
      return s.prototype.buildObject = function(a) {
        var c, d, l, u, p;
        return c = this.options.attrkey, d = this.options.charkey, Object.keys(a).length === 1 && this.options.rootName === e["0.2"].rootName ? (p = Object.keys(a)[0], a = a[p]) : p = this.options.rootName, l = /* @__PURE__ */ function(h) {
          return function(f, b) {
            var x, S, w, y, E, A;
            if (typeof b != "object")
              h.options.cdata && r(b) ? f.raw(o(b)) : f.txt(b);
            else if (Array.isArray(b)) {
              for (y in b)
                if (i.call(b, y)) {
                  S = b[y];
                  for (E in S)
                    w = S[E], f = l(f.ele(E), w).up();
                }
            } else
              for (E in b)
                if (i.call(b, E))
                  if (S = b[E], E === c) {
                    if (typeof S == "object")
                      for (x in S)
                        A = S[x], f = f.att(x, A);
                  } else if (E === d)
                    h.options.cdata && r(S) ? f = f.raw(o(S)) : f = f.txt(S);
                  else if (Array.isArray(S))
                    for (y in S)
                      i.call(S, y) && (w = S[y], typeof w == "string" ? h.options.cdata && r(w) ? f = f.ele(E).raw(o(w)).up() : f = f.ele(E, w).up() : f = l(f.ele(E), w).up());
                  else typeof S == "object" ? f = l(f.ele(E), S).up() : typeof S == "string" && h.options.cdata && r(S) ? f = f.ele(E).raw(o(S)).up() : (S == null && (S = ""), f = f.ele(E, S.toString()).up());
            return f;
          };
        }(this), u = t.create(p, this.options.xmldec, this.options.doctype, {
          headless: this.options.headless,
          allowSurrogateChars: this.options.allowSurrogateChars
        }), l(u, a).end(this.options.renderOpts);
      }, s;
    }();
  }).call(z)), Cr;
}
var lo = {}, uo = {}, Bs;
function up() {
  return Bs || (Bs = 1, function(t) {
    (function(e) {
      e.parser = function(v, g) {
        return new r(v, g);
      }, e.SAXParser = r, e.SAXStream = l, e.createStream = d, e.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function r(v, g) {
        if (!(this instanceof r))
          return new r(v, g);
        var R = this;
        i(R), R.q = R.c = "", R.bufferCheckPosition = e.MAX_BUFFER_LENGTH, R.opt = g || {}, R.opt.lowercase = R.opt.lowercase || R.opt.lowercasetags, R.looseCase = R.opt.lowercase ? "toLowerCase" : "toUpperCase", R.tags = [], R.closed = R.closedRoot = R.sawRoot = !1, R.tag = R.error = null, R.strict = !!v, R.noscript = !!(v || R.opt.noscript), R.state = m.BEGIN, R.strictEntities = R.opt.strictEntities, R.ENTITIES = R.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), R.attribList = [], R.opt.xmlns && (R.ns = Object.create(b)), R.opt.unquotedAttributeValues === void 0 && (R.opt.unquotedAttributeValues = !v), R.trackPosition = R.opt.position !== !1, R.trackPosition && (R.position = R.line = R.column = 0), D(R, "onready");
      }
      Object.create || (Object.create = function(v) {
        function g() {
        }
        g.prototype = v;
        var R = new g();
        return R;
      }), Object.keys || (Object.keys = function(v) {
        var g = [];
        for (var R in v) v.hasOwnProperty(R) && g.push(R);
        return g;
      });
      function o(v) {
        for (var g = Math.max(e.MAX_BUFFER_LENGTH, 10), R = 0, T = 0, te = n.length; T < te; T++) {
          var ue = v[n[T]].length;
          if (ue > g)
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
        var me = e.MAX_BUFFER_LENGTH - R;
        v.bufferCheckPosition = me + v.position;
      }
      function i(v) {
        for (var g = 0, R = n.length; g < R; g++)
          v[n[g]] = "";
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
      function d(v, g) {
        return new l(v, g);
      }
      function l(v, g) {
        if (!(this instanceof l))
          return new l(v, g);
        a.apply(this), this._parser = new r(v, g), this.writable = !0, this.readable = !0;
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
          var g = this._decoder.decode();
          g && (this._parser.write(g), this.emit("data", g));
        }
        return this._parser.end(), !0;
      }, l.prototype.on = function(v, g) {
        var R = this;
        return !R._parser["on" + v] && c.indexOf(v) !== -1 && (R._parser["on" + v] = function() {
          var T = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          T.splice(0, 0, v), R.emit.apply(R, T);
        }), a.prototype.on.call(R, v, g);
      };
      var u = "[CDATA[", p = "DOCTYPE", h = "http://www.w3.org/XML/1998/namespace", f = "http://www.w3.org/2000/xmlns/", b = { xml: h, xmlns: f }, x = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, S = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, w = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, y = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
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
      function P(v, g) {
        return v.test(g);
      }
      function O(v, g) {
        return !P(v, g);
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
        var g = e.ENTITIES[v], R = typeof g == "number" ? String.fromCharCode(g) : g;
        e.ENTITIES[v] = R;
      });
      for (var _ in e.STATE)
        e.STATE[e.STATE[_]] = _;
      m = e.STATE;
      function D(v, g, R) {
        v[g] && v[g](R);
      }
      function I(v, g, R) {
        v.textNode && j(v), D(v, g, R);
      }
      function j(v) {
        v.textNode = B(v.opt, v.textNode), v.textNode && D(v, "ontext", v.textNode), v.textNode = "";
      }
      function B(v, g) {
        return v.trim && (g = g.trim()), v.normalize && (g = g.replace(/\s+/g, " ")), g;
      }
      function $(v, g) {
        return j(v), v.trackPosition && (g += `
Line: ` + v.line + `
Column: ` + v.column + `
Char: ` + v.c), g = new Error(g), v.error = g, D(v, "onerror", g), v;
      }
      function q(v) {
        return v.sawRoot && !v.closedRoot && k(v, "Unclosed root tag"), v.state !== m.BEGIN && v.state !== m.BEGIN_WHITESPACE && v.state !== m.TEXT && $(v, "Unexpected end"), j(v), v.c = "", v.closed = !0, D(v, "onend"), r.call(v, v.strict, v.opt), v;
      }
      function k(v, g) {
        if (typeof v != "object" || !(v instanceof r))
          throw new Error("bad call to strictFail");
        v.strict && $(v, g);
      }
      function K(v) {
        v.strict || (v.tagName = v.tagName[v.looseCase]());
        var g = v.tags[v.tags.length - 1] || v, R = v.tag = { name: v.tagName, attributes: {} };
        v.opt.xmlns && (R.ns = g.ns), v.attribList.length = 0, I(v, "onopentagstart", R);
      }
      function Y(v, g) {
        var R = v.indexOf(":"), T = R < 0 ? ["", v] : v.split(":"), te = T[0], ue = T[1];
        return g && v === "xmlns" && (te = "xmlns", ue = ""), { prefix: te, local: ue };
      }
      function V(v) {
        if (v.strict || (v.attribName = v.attribName[v.looseCase]()), v.attribList.indexOf(v.attribName) !== -1 || v.tag.attributes.hasOwnProperty(v.attribName)) {
          v.attribName = v.attribValue = "";
          return;
        }
        if (v.opt.xmlns) {
          var g = Y(v.attribName, !0), R = g.prefix, T = g.local;
          if (R === "xmlns")
            if (T === "xml" && v.attribValue !== h)
              k(
                v,
                "xml: prefix must be bound to " + h + `
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
      function U(v, g) {
        if (v.opt.xmlns) {
          var R = v.tag, T = Y(v.tagName);
          R.prefix = T.prefix, R.local = T.local, R.uri = R.ns[T.prefix] || "", R.prefix && !R.uri && (k(
            v,
            "Unbound namespace prefix: " + JSON.stringify(v.tagName)
          ), R.uri = T.prefix);
          var te = v.tags[v.tags.length - 1] || v;
          R.ns && te.ns !== R.ns && Object.keys(R.ns).forEach(function(rs) {
            I(v, "onopennamespace", {
              prefix: rs,
              uri: R.ns[rs]
            });
          });
          for (var ue = 0, me = v.attribList.length; ue < me; ue++) {
            var Ie = v.attribList[ue], ke = Ie[0], Ut = Ie[1], be = Y(ke, !0), nt = be.prefix, Bu = be.local, ns = nt === "" ? "" : R.ns[nt] || "", _r = {
              name: ke,
              value: Ut,
              prefix: nt,
              local: Bu,
              uri: ns
            };
            nt && nt !== "xmlns" && !ns && (k(
              v,
              "Unbound namespace prefix: " + JSON.stringify(nt)
            ), _r.uri = nt), v.tag.attributes[ke] = _r, I(v, "onattribute", _r);
          }
          v.attribList.length = 0;
        }
        v.tag.isSelfClosing = !!g, v.sawRoot = !0, v.tags.push(v.tag), I(v, "onopentag", v.tag), g || (!v.noscript && v.tagName.toLowerCase() === "script" ? v.state = m.SCRIPT : v.state = m.TEXT, v.tag = null, v.tagName = ""), v.attribName = v.attribValue = "", v.attribList.length = 0;
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
        var g = v.tags.length, R = v.tagName;
        v.strict || (R = R[v.looseCase]());
        for (var T = R; g--; ) {
          var te = v.tags[g];
          if (te.name !== T)
            k(v, "Unexpected close tag");
          else
            break;
        }
        if (g < 0) {
          k(v, "Unmatched closing tag: " + v.tagName), v.textNode += "</" + v.tagName + ">", v.state = m.TEXT;
          return;
        }
        v.tagName = R;
        for (var ue = v.tags.length; ue-- > g; ) {
          var me = v.tag = v.tags.pop();
          v.tagName = v.tag.name, I(v, "onclosetag", v.tagName);
          var Ie = {};
          for (var ke in me.ns)
            Ie[ke] = me.ns[ke];
          var Ut = v.tags[v.tags.length - 1] || v;
          v.opt.xmlns && me.ns !== Ut.ns && Object.keys(me.ns).forEach(function(be) {
            var nt = me.ns[be];
            I(v, "onclosenamespace", { prefix: be, uri: nt });
          });
        }
        g === 0 && (v.closedRoot = !0), v.tagName = v.attribValue = v.attribName = "", v.attribList.length = 0, v.state = m.TEXT;
      }
      function Oe(v) {
        var g = v.entity, R = g.toLowerCase(), T, te = "";
        return v.ENTITIES[g] ? v.ENTITIES[g] : v.ENTITIES[R] ? v.ENTITIES[R] : (g = R, g.charAt(0) === "#" && (g.charAt(1) === "x" ? (g = g.slice(2), T = parseInt(g, 16), te = T.toString(16)) : (g = g.slice(1), T = parseInt(g, 10), te = T.toString(10))), g = g.replace(/^0+/, ""), isNaN(T) || te.toLowerCase() !== g || T < 0 || T > 1114111 ? (k(v, "Invalid character entity"), "&" + v.entity + ";") : String.fromCodePoint(T));
      }
      function oe(v, g) {
        g === "<" ? (v.state = m.OPEN_WAKA, v.startTagPosition = v.position) : E(g) || (k(v, "Non-whitespace before first tag."), v.textNode = g, v.state = m.TEXT);
      }
      function Ae(v, g) {
        var R = "";
        return g < v.length && (R = v.charAt(g)), R;
      }
      function Ke(v) {
        var g = this;
        if (this.error)
          throw this.error;
        if (g.closed)
          return $(
            g,
            "Cannot write after close. Assign an onready handler."
          );
        if (v === null)
          return q(g);
        typeof v == "object" && (v = v.toString());
        for (var R = 0, T = ""; T = Ae(v, R++), g.c = T, !!T; )
          switch (g.trackPosition && (g.position++, T === `
` ? (g.line++, g.column = 0) : g.column++), g.state) {
            case m.BEGIN:
              if (g.state = m.BEGIN_WHITESPACE, T === "\uFEFF")
                continue;
              oe(g, T);
              continue;
            case m.BEGIN_WHITESPACE:
              oe(g, T);
              continue;
            case m.TEXT:
              if (g.sawRoot && !g.closedRoot) {
                for (var ue = R - 1; T && T !== "<" && T !== "&"; )
                  T = Ae(v, R++), T && g.trackPosition && (g.position++, T === `
` ? (g.line++, g.column = 0) : g.column++);
                g.textNode += v.substring(ue, R - 1);
              }
              T === "<" && !(g.sawRoot && g.closedRoot && !g.strict) ? (g.state = m.OPEN_WAKA, g.startTagPosition = g.position) : (!E(T) && (!g.sawRoot || g.closedRoot) && k(g, "Text data outside of root node."), T === "&" ? g.state = m.TEXT_ENTITY : g.textNode += T);
              continue;
            case m.SCRIPT:
              T === "<" ? g.state = m.SCRIPT_ENDING : g.script += T;
              continue;
            case m.SCRIPT_ENDING:
              T === "/" ? g.state = m.CLOSE_TAG : (g.script += "<" + T, g.state = m.SCRIPT);
              continue;
            case m.OPEN_WAKA:
              if (T === "!")
                g.state = m.SGML_DECL, g.sgmlDecl = "";
              else if (!E(T)) if (P(x, T))
                g.state = m.OPEN_TAG, g.tagName = T;
              else if (T === "/")
                g.state = m.CLOSE_TAG, g.tagName = "";
              else if (T === "?")
                g.state = m.PROC_INST, g.procInstName = g.procInstBody = "";
              else {
                if (k(g, "Unencoded <"), g.startTagPosition + 1 < g.position) {
                  var te = g.position - g.startTagPosition;
                  T = new Array(te).join(" ") + T;
                }
                g.textNode += "<" + T, g.state = m.TEXT;
              }
              continue;
            case m.SGML_DECL:
              if (g.sgmlDecl + T === "--") {
                g.state = m.COMMENT, g.comment = "", g.sgmlDecl = "";
                continue;
              }
              g.doctype && g.doctype !== !0 && g.sgmlDecl ? (g.state = m.DOCTYPE_DTD, g.doctype += "<!" + g.sgmlDecl + T, g.sgmlDecl = "") : (g.sgmlDecl + T).toUpperCase() === u ? (I(g, "onopencdata"), g.state = m.CDATA, g.sgmlDecl = "", g.cdata = "") : (g.sgmlDecl + T).toUpperCase() === p ? (g.state = m.DOCTYPE, (g.doctype || g.sawRoot) && k(
                g,
                "Inappropriately located doctype declaration"
              ), g.doctype = "", g.sgmlDecl = "") : T === ">" ? (I(g, "onsgmldeclaration", g.sgmlDecl), g.sgmlDecl = "", g.state = m.TEXT) : (A(T) && (g.state = m.SGML_DECL_QUOTED), g.sgmlDecl += T);
              continue;
            case m.SGML_DECL_QUOTED:
              T === g.q && (g.state = m.SGML_DECL, g.q = ""), g.sgmlDecl += T;
              continue;
            case m.DOCTYPE:
              T === ">" ? (g.state = m.TEXT, I(g, "ondoctype", g.doctype), g.doctype = !0) : (g.doctype += T, T === "[" ? g.state = m.DOCTYPE_DTD : A(T) && (g.state = m.DOCTYPE_QUOTED, g.q = T));
              continue;
            case m.DOCTYPE_QUOTED:
              g.doctype += T, T === g.q && (g.q = "", g.state = m.DOCTYPE);
              continue;
            case m.DOCTYPE_DTD:
              T === "]" ? (g.doctype += T, g.state = m.DOCTYPE) : T === "<" ? (g.state = m.OPEN_WAKA, g.startTagPosition = g.position) : A(T) ? (g.doctype += T, g.state = m.DOCTYPE_DTD_QUOTED, g.q = T) : g.doctype += T;
              continue;
            case m.DOCTYPE_DTD_QUOTED:
              g.doctype += T, T === g.q && (g.state = m.DOCTYPE_DTD, g.q = "");
              continue;
            case m.COMMENT:
              T === "-" ? g.state = m.COMMENT_ENDING : g.comment += T;
              continue;
            case m.COMMENT_ENDING:
              T === "-" ? (g.state = m.COMMENT_ENDED, g.comment = B(g.opt, g.comment), g.comment && I(g, "oncomment", g.comment), g.comment = "") : (g.comment += "-" + T, g.state = m.COMMENT);
              continue;
            case m.COMMENT_ENDED:
              T !== ">" ? (k(g, "Malformed comment"), g.comment += "--" + T, g.state = m.COMMENT) : g.doctype && g.doctype !== !0 ? g.state = m.DOCTYPE_DTD : g.state = m.TEXT;
              continue;
            case m.CDATA:
              for (var ue = R - 1; T && T !== "]"; )
                T = Ae(v, R++), T && g.trackPosition && (g.position++, T === `
` ? (g.line++, g.column = 0) : g.column++);
              g.cdata += v.substring(ue, R - 1), T === "]" && (g.state = m.CDATA_ENDING);
              continue;
            case m.CDATA_ENDING:
              T === "]" ? g.state = m.CDATA_ENDING_2 : (g.cdata += "]" + T, g.state = m.CDATA);
              continue;
            case m.CDATA_ENDING_2:
              T === ">" ? (g.cdata && I(g, "oncdata", g.cdata), I(g, "onclosecdata"), g.cdata = "", g.state = m.TEXT) : T === "]" ? g.cdata += "]" : (g.cdata += "]]" + T, g.state = m.CDATA);
              continue;
            case m.PROC_INST:
              T === "?" ? g.state = m.PROC_INST_ENDING : E(T) ? g.state = m.PROC_INST_BODY : g.procInstName += T;
              continue;
            case m.PROC_INST_BODY:
              if (!g.procInstBody && E(T))
                continue;
              T === "?" ? g.state = m.PROC_INST_ENDING : g.procInstBody += T;
              continue;
            case m.PROC_INST_ENDING:
              T === ">" ? (I(g, "onprocessinginstruction", {
                name: g.procInstName,
                body: g.procInstBody
              }), g.procInstName = g.procInstBody = "", g.state = m.TEXT) : (g.procInstBody += "?" + T, g.state = m.PROC_INST_BODY);
              continue;
            case m.OPEN_TAG:
              P(S, T) ? g.tagName += T : (K(g), T === ">" ? U(g) : T === "/" ? g.state = m.OPEN_TAG_SLASH : (E(T) || k(g, "Invalid character in tag name"), g.state = m.ATTRIB));
              continue;
            case m.OPEN_TAG_SLASH:
              T === ">" ? (U(g, !0), Z(g)) : (k(
                g,
                "Forward-slash in opening tag not followed by >"
              ), g.state = m.ATTRIB);
              continue;
            case m.ATTRIB:
              if (E(T))
                continue;
              T === ">" ? U(g) : T === "/" ? g.state = m.OPEN_TAG_SLASH : P(x, T) ? (g.attribName = T, g.attribValue = "", g.state = m.ATTRIB_NAME) : k(g, "Invalid attribute name");
              continue;
            case m.ATTRIB_NAME:
              T === "=" ? g.state = m.ATTRIB_VALUE : T === ">" ? (k(g, "Attribute without value"), g.attribValue = g.attribName, V(g), U(g)) : E(T) ? g.state = m.ATTRIB_NAME_SAW_WHITE : P(S, T) ? g.attribName += T : k(g, "Invalid attribute name");
              continue;
            case m.ATTRIB_NAME_SAW_WHITE:
              if (T === "=")
                g.state = m.ATTRIB_VALUE;
              else {
                if (E(T))
                  continue;
                k(g, "Attribute without value"), g.tag.attributes[g.attribName] = "", g.attribValue = "", I(g, "onattribute", {
                  name: g.attribName,
                  value: ""
                }), g.attribName = "", T === ">" ? U(g) : P(x, T) ? (g.attribName = T, g.state = m.ATTRIB_NAME) : (k(g, "Invalid attribute name"), g.state = m.ATTRIB);
              }
              continue;
            case m.ATTRIB_VALUE:
              if (E(T))
                continue;
              A(T) ? (g.q = T, g.state = m.ATTRIB_VALUE_QUOTED) : (g.opt.unquotedAttributeValues || $(g, "Unquoted attribute value"), g.state = m.ATTRIB_VALUE_UNQUOTED, g.attribValue = T);
              continue;
            case m.ATTRIB_VALUE_QUOTED:
              if (T !== g.q) {
                T === "&" ? g.state = m.ATTRIB_VALUE_ENTITY_Q : g.attribValue += T;
                continue;
              }
              V(g), g.q = "", g.state = m.ATTRIB_VALUE_CLOSED;
              continue;
            case m.ATTRIB_VALUE_CLOSED:
              E(T) ? g.state = m.ATTRIB : T === ">" ? U(g) : T === "/" ? g.state = m.OPEN_TAG_SLASH : P(x, T) ? (k(g, "No whitespace between attributes"), g.attribName = T, g.attribValue = "", g.state = m.ATTRIB_NAME) : k(g, "Invalid attribute name");
              continue;
            case m.ATTRIB_VALUE_UNQUOTED:
              if (!L(T)) {
                T === "&" ? g.state = m.ATTRIB_VALUE_ENTITY_U : g.attribValue += T;
                continue;
              }
              V(g), T === ">" ? U(g) : g.state = m.ATTRIB;
              continue;
            case m.CLOSE_TAG:
              if (g.tagName)
                T === ">" ? Z(g) : P(S, T) ? g.tagName += T : g.script ? (g.script += "</" + g.tagName + T, g.tagName = "", g.state = m.SCRIPT) : (E(T) || k(g, "Invalid tagname in closing tag"), g.state = m.CLOSE_TAG_SAW_WHITE);
              else {
                if (E(T))
                  continue;
                O(x, T) ? g.script ? (g.script += "</" + T, g.state = m.SCRIPT) : k(g, "Invalid tagname in closing tag.") : g.tagName = T;
              }
              continue;
            case m.CLOSE_TAG_SAW_WHITE:
              if (E(T))
                continue;
              T === ">" ? Z(g) : k(g, "Invalid characters in closing tag");
              continue;
            case m.TEXT_ENTITY:
            case m.ATTRIB_VALUE_ENTITY_Q:
            case m.ATTRIB_VALUE_ENTITY_U:
              var me, Ie;
              switch (g.state) {
                case m.TEXT_ENTITY:
                  me = m.TEXT, Ie = "textNode";
                  break;
                case m.ATTRIB_VALUE_ENTITY_Q:
                  me = m.ATTRIB_VALUE_QUOTED, Ie = "attribValue";
                  break;
                case m.ATTRIB_VALUE_ENTITY_U:
                  me = m.ATTRIB_VALUE_UNQUOTED, Ie = "attribValue";
                  break;
              }
              if (T === ";") {
                var ke = Oe(g);
                g.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(ke) ? (g.entity = "", g.state = me, g.write(ke)) : (g[Ie] += ke, g.entity = "", g.state = me);
              } else P(g.entity.length ? y : w, T) ? g.entity += T : (k(g, "Invalid character in entity name"), g[Ie] += "&" + g.entity + T, g.entity = "", g.state = me);
              continue;
            default:
              throw new Error(g, "Unknown state: " + g.state);
          }
        return g.position >= g.bufferCheckPosition && o(g), g;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var v = String.fromCharCode, g = Math.floor, R = function() {
          var T = 16384, te = [], ue, me, Ie = -1, ke = arguments.length;
          if (!ke)
            return "";
          for (var Ut = ""; ++Ie < ke; ) {
            var be = Number(arguments[Ie]);
            if (!isFinite(be) || // `NaN`, `+Infinity`, or `-Infinity`
            be < 0 || // not a valid Unicode code point
            be > 1114111 || // not a valid Unicode code point
            g(be) !== be)
              throw RangeError("Invalid code point: " + be);
            be <= 65535 ? te.push(be) : (be -= 65536, ue = (be >> 10) + 55296, me = be % 1024 + 56320, te.push(ue, me)), (Ie + 1 === ke || te.length > T) && (Ut += v.apply(null, te), te.length = 0);
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
var po = {}, $s;
function pp() {
  return $s || ($s = 1, (function() {
    po.stripBOM = function(t) {
      return t[0] === "\uFEFF" ? t.substring(1) : t;
    };
  }).call(z)), po;
}
var Et = {}, Vs;
function Lc() {
  return Vs || (Vs = 1, (function() {
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
var zs;
function dp() {
  return zs || (zs = 1, function(t) {
    (function() {
      var e, n, r, o, i, s, a, c, d = function(p, h) {
        return function() {
          return p.apply(h, arguments);
        };
      }, l = function(p, h) {
        for (var f in h)
          u.call(h, f) && (p[f] = h[f]);
        function b() {
          this.constructor = p;
        }
        return b.prototype = h.prototype, p.prototype = new b(), p.__super__ = h.prototype, p;
      }, u = {}.hasOwnProperty;
      a = up(), r = Gu, e = pp(), s = Lc(), c = Yu.setImmediate, n = di().defaults, o = function(p) {
        return typeof p == "object" && p != null && Object.keys(p).length === 0;
      }, i = function(p, h, f) {
        var b, x, S;
        for (b = 0, x = p.length; b < x; b++)
          S = p[b], h = S(h, f);
        return h;
      }, t.Parser = function(p) {
        l(h, p);
        function h(f) {
          this.parseStringPromise = d(this.parseStringPromise, this), this.parseString = d(this.parseString, this), this.reset = d(this.reset, this), this.assignOrPush = d(this.assignOrPush, this), this.processAsync = d(this.processAsync, this);
          var b, x, S;
          if (!(this instanceof t.Parser))
            return new t.Parser(f);
          this.options = {}, x = n["0.2"];
          for (b in x)
            u.call(x, b) && (S = x[b], this.options[b] = S);
          for (b in f)
            u.call(f, b) && (S = f[b], this.options[b] = S);
          this.options.xmlns && (this.options.xmlnskey = this.options.attrkey + "ns"), this.options.normalizeTags && (this.options.tagNameProcessors || (this.options.tagNameProcessors = []), this.options.tagNameProcessors.unshift(s.normalize)), this.reset();
        }
        return h.prototype.processAsync = function() {
          var f, b;
          try {
            return this.remaining.length <= this.options.chunkSize ? (f = this.remaining, this.remaining = "", this.saxParser = this.saxParser.write(f), this.saxParser.close()) : (f = this.remaining.substr(0, this.options.chunkSize), this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length), this.saxParser = this.saxParser.write(f), c(this.processAsync));
          } catch (x) {
            if (b = x, !this.saxParser.errThrown)
              return this.saxParser.errThrown = !0, this.emit(b);
          }
        }, h.prototype.assignOrPush = function(f, b, x) {
          return b in f ? (f[b] instanceof Array || (f[b] = [f[b]]), f[b].push(x)) : this.options.explicitArray ? f[b] = [x] : f[b] = x;
        }, h.prototype.reset = function() {
          var f, b, x, S;
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
          }(this), this.saxParser.ended = !1, this.EXPLICIT_CHARKEY = this.options.explicitCharkey, this.resultObject = null, S = [], f = this.options.attrkey, b = this.options.charkey, this.saxParser.onopentag = /* @__PURE__ */ function(w) {
            return function(y) {
              var E, A, L, P, O;
              if (L = /* @__PURE__ */ Object.create(null), L[b] = "", !w.options.ignoreAttrs) {
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
              if (O = S.pop(), P = O["#name"], (!w.options.explicitChildren || !w.options.preserveChildrenOrder) && delete O["#name"], O.cdata === !0 && (y = O.cdata, delete O.cdata), D = S[S.length - 1], O[b].match(/^\s*$/) && !y ? (E = O[b], delete O[b]) : (w.options.trim && (O[b] = O[b].trim()), w.options.normalize && (O[b] = O[b].replace(/\s{2,}/g, " ").trim()), O[b] = w.options.valueProcessors ? i(w.options.valueProcessors, O[b], P) : O[b], Object.keys(O).length === 1 && b in O && !w.EXPLICIT_CHARKEY && (O = O[b])), o(O) && (typeof w.options.emptyTag == "function" ? O = w.options.emptyTag() : O = w.options.emptyTag !== "" ? w.options.emptyTag : E), w.options.validator != null && (I = "/" + function() {
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
                  D[w.options.childkey].push(m), delete O["#name"], Object.keys(O).length === 1 && b in O && !w.EXPLICIT_CHARKEY && (O = O[b]);
                }
              }
              return S.length > 0 ? w.assignOrPush(D, P, O) : (w.options.explicitRoot && (_ = O, O = /* @__PURE__ */ Object.create(null), O[P] = _), w.resultObject = O, w.saxParser.ended = !0, w.emit("end", w.resultObject));
            };
          }(this), x = /* @__PURE__ */ function(w) {
            return function(y) {
              var E, A;
              if (A = S[S.length - 1], A)
                return A[b] += y, w.options.explicitChildren && w.options.preserveChildrenOrder && w.options.charsAsChildren && (w.options.includeWhiteChars || y.replace(/\\n/g, "").trim() !== "") && (A[w.options.childkey] = A[w.options.childkey] || [], E = {
                  "#name": "__text__"
                }, E[b] = y, w.options.normalize && (E[b] = E[b].replace(/\s{2,}/g, " ").trim()), A[w.options.childkey].push(E)), A;
            };
          }(this), this.saxParser.ontext = x, this.saxParser.oncdata = /* @__PURE__ */ function(w) {
            return function(y) {
              var E;
              if (E = x(y), E)
                return E.cdata = !0;
            };
          }();
        }, h.prototype.parseString = function(f, b) {
          var x;
          b != null && typeof b == "function" && (this.on("end", function(S) {
            return this.reset(), b(null, S);
          }), this.on("error", function(S) {
            return this.reset(), b(S);
          }));
          try {
            return f = f.toString(), f.trim() === "" ? (this.emit("end", null), !0) : (f = e.stripBOM(f), this.options.async ? (this.remaining = f, c(this.processAsync), this.saxParser) : this.saxParser.write(f).close());
          } catch (S) {
            if (x = S, this.saxParser.errThrown || this.saxParser.ended) {
              if (this.saxParser.ended)
                throw x;
            } else return this.emit("error", x), this.saxParser.errThrown = !0;
          }
        }, h.prototype.parseStringPromise = function(f) {
          return new Promise(/* @__PURE__ */ function(b) {
            return function(x, S) {
              return b.parseString(f, function(w, y) {
                return w ? S(w) : x(y);
              });
            };
          }(this));
        }, h;
      }(r), t.parseString = function(p, h, f) {
        var b, x, S;
        return f != null ? (typeof f == "function" && (b = f), typeof h == "object" && (x = h)) : (typeof h == "function" && (b = h), x = {}), S = new t.Parser(x), S.parseString(p, b);
      }, t.parseStringPromise = function(p, h) {
        var f, b;
        return typeof h == "object" && (f = h), b = new t.Parser(f), b.parseStringPromise(p);
      };
    }).call(z);
  }(lo)), lo;
}
(function() {
  var t, e, n, r, o = function(s, a) {
    for (var c in a)
      i.call(a, c) && (s[c] = a[c]);
    function d() {
      this.constructor = s;
    }
    return d.prototype = a.prototype, s.prototype = new d(), s.__super__ = a.prototype, s;
  }, i = {}.hasOwnProperty;
  e = di(), t = lp(), n = dp(), r = Lc(), it.defaults = e.defaults, it.processors = r, it.ValidationError = function(s) {
    o(a, s);
    function a(c) {
      this.message = c;
    }
    return a;
  }(Error), it.Builder = t.Builder, it.Parser = n.Parser, it.parseString = n.parseString, it.parseStringPromise = n.parseStringPromise;
}).call(z);
var Cc = { exports: {} };
const fr = Cc.exports = {};
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
var Rc = function(t) {
  return ["itunes:" + t, t];
};
fr.podcastFeed = [
  "author",
  "subtitle",
  "summary",
  "explicit"
].map(Rc);
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
].map(Rc);
var fp = Cc.exports, Pc = { exports: {} }, Ic = {}, lt = {};
const mp = "Á", hp = "á", gp = "Ă", yp = "ă", vp = "∾", bp = "∿", xp = "∾̳", wp = "Â", Ep = "â", Tp = "´", Sp = "А", Np = "а", Op = "Æ", Ap = "æ", _p = "⁡", Dp = "𝔄", Lp = "𝔞", Cp = "À", Rp = "à", Pp = "ℵ", Ip = "ℵ", kp = "Α", Fp = "α", qp = "Ā", Mp = "ā", jp = "⨿", Up = "&", Bp = "&", $p = "⩕", Vp = "⩓", zp = "∧", Hp = "⩜", Xp = "⩘", Gp = "⩚", Wp = "∠", Yp = "⦤", Kp = "∠", Jp = "⦨", Qp = "⦩", Zp = "⦪", ed = "⦫", td = "⦬", nd = "⦭", rd = "⦮", od = "⦯", id = "∡", sd = "∟", ad = "⊾", cd = "⦝", ld = "∢", ud = "Å", pd = "⍼", dd = "Ą", fd = "ą", md = "𝔸", hd = "𝕒", gd = "⩯", yd = "≈", vd = "⩰", bd = "≊", xd = "≋", wd = "'", Ed = "⁡", Td = "≈", Sd = "≊", Nd = "Å", Od = "å", Ad = "𝒜", _d = "𝒶", Dd = "≔", Ld = "*", Cd = "≈", Rd = "≍", Pd = "Ã", Id = "ã", kd = "Ä", Fd = "ä", qd = "∳", Md = "⨑", jd = "≌", Ud = "϶", Bd = "‵", $d = "∽", Vd = "⋍", zd = "∖", Hd = "⫧", Xd = "⊽", Gd = "⌅", Wd = "⌆", Yd = "⌅", Kd = "⎵", Jd = "⎶", Qd = "≌", Zd = "Б", ef = "б", tf = "„", nf = "∵", rf = "∵", of = "∵", sf = "⦰", af = "϶", cf = "ℬ", lf = "ℬ", uf = "Β", pf = "β", df = "ℶ", ff = "≬", mf = "𝔅", hf = "𝔟", gf = "⋂", yf = "◯", vf = "⋃", bf = "⨀", xf = "⨁", wf = "⨂", Ef = "⨆", Tf = "★", Sf = "▽", Nf = "△", Of = "⨄", Af = "⋁", _f = "⋀", Df = "⤍", Lf = "⧫", Cf = "▪", Rf = "▴", Pf = "▾", If = "◂", kf = "▸", Ff = "␣", qf = "▒", Mf = "░", jf = "▓", Uf = "█", Bf = "=⃥", $f = "≡⃥", Vf = "⫭", zf = "⌐", Hf = "𝔹", Xf = "𝕓", Gf = "⊥", Wf = "⊥", Yf = "⋈", Kf = "⧉", Jf = "┐", Qf = "╕", Zf = "╖", em = "╗", tm = "┌", nm = "╒", rm = "╓", om = "╔", im = "─", sm = "═", am = "┬", cm = "╤", lm = "╥", um = "╦", pm = "┴", dm = "╧", fm = "╨", mm = "╩", hm = "⊟", gm = "⊞", ym = "⊠", vm = "┘", bm = "╛", xm = "╜", wm = "╝", Em = "└", Tm = "╘", Sm = "╙", Nm = "╚", Om = "│", Am = "║", _m = "┼", Dm = "╪", Lm = "╫", Cm = "╬", Rm = "┤", Pm = "╡", Im = "╢", km = "╣", Fm = "├", qm = "╞", Mm = "╟", jm = "╠", Um = "‵", Bm = "˘", $m = "˘", Vm = "¦", zm = "𝒷", Hm = "ℬ", Xm = "⁏", Gm = "∽", Wm = "⋍", Ym = "⧅", Km = "\\", Jm = "⟈", Qm = "•", Zm = "•", eh = "≎", th = "⪮", nh = "≏", rh = "≎", oh = "≏", ih = "Ć", sh = "ć", ah = "⩄", ch = "⩉", lh = "⩋", uh = "∩", ph = "⋒", dh = "⩇", fh = "⩀", mh = "ⅅ", hh = "∩︀", gh = "⁁", yh = "ˇ", vh = "ℭ", bh = "⩍", xh = "Č", wh = "č", Eh = "Ç", Th = "ç", Sh = "Ĉ", Nh = "ĉ", Oh = "∰", Ah = "⩌", _h = "⩐", Dh = "Ċ", Lh = "ċ", Ch = "¸", Rh = "¸", Ph = "⦲", Ih = "¢", kh = "·", Fh = "·", qh = "𝔠", Mh = "ℭ", jh = "Ч", Uh = "ч", Bh = "✓", $h = "✓", Vh = "Χ", zh = "χ", Hh = "ˆ", Xh = "≗", Gh = "↺", Wh = "↻", Yh = "⊛", Kh = "⊚", Jh = "⊝", Qh = "⊙", Zh = "®", eg = "Ⓢ", tg = "⊖", ng = "⊕", rg = "⊗", og = "○", ig = "⧃", sg = "≗", ag = "⨐", cg = "⫯", lg = "⧂", ug = "∲", pg = "”", dg = "’", fg = "♣", mg = "♣", hg = ":", gg = "∷", yg = "⩴", vg = "≔", bg = "≔", xg = ",", wg = "@", Eg = "∁", Tg = "∘", Sg = "∁", Ng = "ℂ", Og = "≅", Ag = "⩭", _g = "≡", Dg = "∮", Lg = "∯", Cg = "∮", Rg = "𝕔", Pg = "ℂ", Ig = "∐", kg = "∐", Fg = "©", qg = "©", Mg = "℗", jg = "∳", Ug = "↵", Bg = "✗", $g = "⨯", Vg = "𝒞", zg = "𝒸", Hg = "⫏", Xg = "⫑", Gg = "⫐", Wg = "⫒", Yg = "⋯", Kg = "⤸", Jg = "⤵", Qg = "⋞", Zg = "⋟", ey = "↶", ty = "⤽", ny = "⩈", ry = "⩆", oy = "≍", iy = "∪", sy = "⋓", ay = "⩊", cy = "⊍", ly = "⩅", uy = "∪︀", py = "↷", dy = "⤼", fy = "⋞", my = "⋟", hy = "⋎", gy = "⋏", yy = "¤", vy = "↶", by = "↷", xy = "⋎", wy = "⋏", Ey = "∲", Ty = "∱", Sy = "⌭", Ny = "†", Oy = "‡", Ay = "ℸ", _y = "↓", Dy = "↡", Ly = "⇓", Cy = "‐", Ry = "⫤", Py = "⊣", Iy = "⤏", ky = "˝", Fy = "Ď", qy = "ď", My = "Д", jy = "д", Uy = "‡", By = "⇊", $y = "ⅅ", Vy = "ⅆ", zy = "⤑", Hy = "⩷", Xy = "°", Gy = "∇", Wy = "Δ", Yy = "δ", Ky = "⦱", Jy = "⥿", Qy = "𝔇", Zy = "𝔡", ev = "⥥", tv = "⇃", nv = "⇂", rv = "´", ov = "˙", iv = "˝", sv = "`", av = "˜", cv = "⋄", lv = "⋄", uv = "⋄", pv = "♦", dv = "♦", fv = "¨", mv = "ⅆ", hv = "ϝ", gv = "⋲", yv = "÷", vv = "÷", bv = "⋇", xv = "⋇", wv = "Ђ", Ev = "ђ", Tv = "⌞", Sv = "⌍", Nv = "$", Ov = "𝔻", Av = "𝕕", _v = "¨", Dv = "˙", Lv = "⃜", Cv = "≐", Rv = "≑", Pv = "≐", Iv = "∸", kv = "∔", Fv = "⊡", qv = "⌆", Mv = "∯", jv = "¨", Uv = "⇓", Bv = "⇐", $v = "⇔", Vv = "⫤", zv = "⟸", Hv = "⟺", Xv = "⟹", Gv = "⇒", Wv = "⊨", Yv = "⇑", Kv = "⇕", Jv = "∥", Qv = "⤓", Zv = "↓", eb = "↓", tb = "⇓", nb = "⇵", rb = "̑", ob = "⇊", ib = "⇃", sb = "⇂", ab = "⥐", cb = "⥞", lb = "⥖", ub = "↽", pb = "⥟", db = "⥗", fb = "⇁", mb = "↧", hb = "⊤", gb = "⤐", yb = "⌟", vb = "⌌", bb = "𝒟", xb = "𝒹", wb = "Ѕ", Eb = "ѕ", Tb = "⧶", Sb = "Đ", Nb = "đ", Ob = "⋱", Ab = "▿", _b = "▾", Db = "⇵", Lb = "⥯", Cb = "⦦", Rb = "Џ", Pb = "џ", Ib = "⟿", kb = "É", Fb = "é", qb = "⩮", Mb = "Ě", jb = "ě", Ub = "Ê", Bb = "ê", $b = "≖", Vb = "≕", zb = "Э", Hb = "э", Xb = "⩷", Gb = "Ė", Wb = "ė", Yb = "≑", Kb = "ⅇ", Jb = "≒", Qb = "𝔈", Zb = "𝔢", ex = "⪚", tx = "È", nx = "è", rx = "⪖", ox = "⪘", ix = "⪙", sx = "∈", ax = "⏧", cx = "ℓ", lx = "⪕", ux = "⪗", px = "Ē", dx = "ē", fx = "∅", mx = "∅", hx = "◻", gx = "∅", yx = "▫", vx = " ", bx = " ", xx = " ", wx = "Ŋ", Ex = "ŋ", Tx = " ", Sx = "Ę", Nx = "ę", Ox = "𝔼", Ax = "𝕖", _x = "⋕", Dx = "⧣", Lx = "⩱", Cx = "ε", Rx = "Ε", Px = "ε", Ix = "ϵ", kx = "≖", Fx = "≕", qx = "≂", Mx = "⪖", jx = "⪕", Ux = "⩵", Bx = "=", $x = "≂", Vx = "≟", zx = "⇌", Hx = "≡", Xx = "⩸", Gx = "⧥", Wx = "⥱", Yx = "≓", Kx = "ℯ", Jx = "ℰ", Qx = "≐", Zx = "⩳", ew = "≂", tw = "Η", nw = "η", rw = "Ð", ow = "ð", iw = "Ë", sw = "ë", aw = "€", cw = "!", lw = "∃", uw = "∃", pw = "ℰ", dw = "ⅇ", fw = "ⅇ", mw = "≒", hw = "Ф", gw = "ф", yw = "♀", vw = "ﬃ", bw = "ﬀ", xw = "ﬄ", ww = "𝔉", Ew = "𝔣", Tw = "ﬁ", Sw = "◼", Nw = "▪", Ow = "fj", Aw = "♭", _w = "ﬂ", Dw = "▱", Lw = "ƒ", Cw = "𝔽", Rw = "𝕗", Pw = "∀", Iw = "∀", kw = "⋔", Fw = "⫙", qw = "ℱ", Mw = "⨍", jw = "½", Uw = "⅓", Bw = "¼", $w = "⅕", Vw = "⅙", zw = "⅛", Hw = "⅔", Xw = "⅖", Gw = "¾", Ww = "⅗", Yw = "⅜", Kw = "⅘", Jw = "⅚", Qw = "⅝", Zw = "⅞", eE = "⁄", tE = "⌢", nE = "𝒻", rE = "ℱ", oE = "ǵ", iE = "Γ", sE = "γ", aE = "Ϝ", cE = "ϝ", lE = "⪆", uE = "Ğ", pE = "ğ", dE = "Ģ", fE = "Ĝ", mE = "ĝ", hE = "Г", gE = "г", yE = "Ġ", vE = "ġ", bE = "≥", xE = "≧", wE = "⪌", EE = "⋛", TE = "≥", SE = "≧", NE = "⩾", OE = "⪩", AE = "⩾", _E = "⪀", DE = "⪂", LE = "⪄", CE = "⋛︀", RE = "⪔", PE = "𝔊", IE = "𝔤", kE = "≫", FE = "⋙", qE = "⋙", ME = "ℷ", jE = "Ѓ", UE = "ѓ", BE = "⪥", $E = "≷", VE = "⪒", zE = "⪤", HE = "⪊", XE = "⪊", GE = "⪈", WE = "≩", YE = "⪈", KE = "≩", JE = "⋧", QE = "𝔾", ZE = "𝕘", eT = "`", tT = "≥", nT = "⋛", rT = "≧", oT = "⪢", iT = "≷", sT = "⩾", aT = "≳", cT = "𝒢", lT = "ℊ", uT = "≳", pT = "⪎", dT = "⪐", fT = "⪧", mT = "⩺", hT = ">", gT = ">", yT = "≫", vT = "⋗", bT = "⦕", xT = "⩼", wT = "⪆", ET = "⥸", TT = "⋗", ST = "⋛", NT = "⪌", OT = "≷", AT = "≳", _T = "≩︀", DT = "≩︀", LT = "ˇ", CT = " ", RT = "½", PT = "ℋ", IT = "Ъ", kT = "ъ", FT = "⥈", qT = "↔", MT = "⇔", jT = "↭", UT = "^", BT = "ℏ", $T = "Ĥ", VT = "ĥ", zT = "♥", HT = "♥", XT = "…", GT = "⊹", WT = "𝔥", YT = "ℌ", KT = "ℋ", JT = "⤥", QT = "⤦", ZT = "⇿", eS = "∻", tS = "↩", nS = "↪", rS = "𝕙", oS = "ℍ", iS = "―", sS = "─", aS = "𝒽", cS = "ℋ", lS = "ℏ", uS = "Ħ", pS = "ħ", dS = "≎", fS = "≏", mS = "⁃", hS = "‐", gS = "Í", yS = "í", vS = "⁣", bS = "Î", xS = "î", wS = "И", ES = "и", TS = "İ", SS = "Е", NS = "е", OS = "¡", AS = "⇔", _S = "𝔦", DS = "ℑ", LS = "Ì", CS = "ì", RS = "ⅈ", PS = "⨌", IS = "∭", kS = "⧜", FS = "℩", qS = "Ĳ", MS = "ĳ", jS = "Ī", US = "ī", BS = "ℑ", $S = "ⅈ", VS = "ℐ", zS = "ℑ", HS = "ı", XS = "ℑ", GS = "⊷", WS = "Ƶ", YS = "⇒", KS = "℅", JS = "∞", QS = "⧝", ZS = "ı", e0 = "⊺", t0 = "∫", n0 = "∬", r0 = "ℤ", o0 = "∫", i0 = "⊺", s0 = "⋂", a0 = "⨗", c0 = "⨼", l0 = "⁣", u0 = "⁢", p0 = "Ё", d0 = "ё", f0 = "Į", m0 = "į", h0 = "𝕀", g0 = "𝕚", y0 = "Ι", v0 = "ι", b0 = "⨼", x0 = "¿", w0 = "𝒾", E0 = "ℐ", T0 = "∈", S0 = "⋵", N0 = "⋹", O0 = "⋴", A0 = "⋳", _0 = "∈", D0 = "⁢", L0 = "Ĩ", C0 = "ĩ", R0 = "І", P0 = "і", I0 = "Ï", k0 = "ï", F0 = "Ĵ", q0 = "ĵ", M0 = "Й", j0 = "й", U0 = "𝔍", B0 = "𝔧", $0 = "ȷ", V0 = "𝕁", z0 = "𝕛", H0 = "𝒥", X0 = "𝒿", G0 = "Ј", W0 = "ј", Y0 = "Є", K0 = "є", J0 = "Κ", Q0 = "κ", Z0 = "ϰ", eN = "Ķ", tN = "ķ", nN = "К", rN = "к", oN = "𝔎", iN = "𝔨", sN = "ĸ", aN = "Х", cN = "х", lN = "Ќ", uN = "ќ", pN = "𝕂", dN = "𝕜", fN = "𝒦", mN = "𝓀", hN = "⇚", gN = "Ĺ", yN = "ĺ", vN = "⦴", bN = "ℒ", xN = "Λ", wN = "λ", EN = "⟨", TN = "⟪", SN = "⦑", NN = "⟨", ON = "⪅", AN = "ℒ", _N = "«", DN = "⇤", LN = "⤟", CN = "←", RN = "↞", PN = "⇐", IN = "⤝", kN = "↩", FN = "↫", qN = "⤹", MN = "⥳", jN = "↢", UN = "⤙", BN = "⤛", $N = "⪫", VN = "⪭", zN = "⪭︀", HN = "⤌", XN = "⤎", GN = "❲", WN = "{", YN = "[", KN = "⦋", JN = "⦏", QN = "⦍", ZN = "Ľ", eO = "ľ", tO = "Ļ", nO = "ļ", rO = "⌈", oO = "{", iO = "Л", sO = "л", aO = "⤶", cO = "“", lO = "„", uO = "⥧", pO = "⥋", dO = "↲", fO = "≤", mO = "≦", hO = "⟨", gO = "⇤", yO = "←", vO = "←", bO = "⇐", xO = "⇆", wO = "↢", EO = "⌈", TO = "⟦", SO = "⥡", NO = "⥙", OO = "⇃", AO = "⌊", _O = "↽", DO = "↼", LO = "⇇", CO = "↔", RO = "↔", PO = "⇔", IO = "⇆", kO = "⇋", FO = "↭", qO = "⥎", MO = "↤", jO = "⊣", UO = "⥚", BO = "⋋", $O = "⧏", VO = "⊲", zO = "⊴", HO = "⥑", XO = "⥠", GO = "⥘", WO = "↿", YO = "⥒", KO = "↼", JO = "⪋", QO = "⋚", ZO = "≤", eA = "≦", tA = "⩽", nA = "⪨", rA = "⩽", oA = "⩿", iA = "⪁", sA = "⪃", aA = "⋚︀", cA = "⪓", lA = "⪅", uA = "⋖", pA = "⋚", dA = "⪋", fA = "⋚", mA = "≦", hA = "≶", gA = "≶", yA = "⪡", vA = "≲", bA = "⩽", xA = "≲", wA = "⥼", EA = "⌊", TA = "𝔏", SA = "𝔩", NA = "≶", OA = "⪑", AA = "⥢", _A = "↽", DA = "↼", LA = "⥪", CA = "▄", RA = "Љ", PA = "љ", IA = "⇇", kA = "≪", FA = "⋘", qA = "⌞", MA = "⇚", jA = "⥫", UA = "◺", BA = "Ŀ", $A = "ŀ", VA = "⎰", zA = "⎰", HA = "⪉", XA = "⪉", GA = "⪇", WA = "≨", YA = "⪇", KA = "≨", JA = "⋦", QA = "⟬", ZA = "⇽", e_ = "⟦", t_ = "⟵", n_ = "⟵", r_ = "⟸", o_ = "⟷", i_ = "⟷", s_ = "⟺", a_ = "⟼", c_ = "⟶", l_ = "⟶", u_ = "⟹", p_ = "↫", d_ = "↬", f_ = "⦅", m_ = "𝕃", h_ = "𝕝", g_ = "⨭", y_ = "⨴", v_ = "∗", b_ = "_", x_ = "↙", w_ = "↘", E_ = "◊", T_ = "◊", S_ = "⧫", N_ = "(", O_ = "⦓", A_ = "⇆", __ = "⌟", D_ = "⇋", L_ = "⥭", C_ = "‎", R_ = "⊿", P_ = "‹", I_ = "𝓁", k_ = "ℒ", F_ = "↰", q_ = "↰", M_ = "≲", j_ = "⪍", U_ = "⪏", B_ = "[", $_ = "‘", V_ = "‚", z_ = "Ł", H_ = "ł", X_ = "⪦", G_ = "⩹", W_ = "<", Y_ = "<", K_ = "≪", J_ = "⋖", Q_ = "⋋", Z_ = "⋉", eD = "⥶", tD = "⩻", nD = "◃", rD = "⊴", oD = "◂", iD = "⦖", sD = "⥊", aD = "⥦", cD = "≨︀", lD = "≨︀", uD = "¯", pD = "♂", dD = "✠", fD = "✠", mD = "↦", hD = "↦", gD = "↧", yD = "↤", vD = "↥", bD = "▮", xD = "⨩", wD = "М", ED = "м", TD = "—", SD = "∺", ND = "∡", OD = " ", AD = "ℳ", _D = "𝔐", DD = "𝔪", LD = "℧", CD = "µ", RD = "*", PD = "⫰", ID = "∣", kD = "·", FD = "⊟", qD = "−", MD = "∸", jD = "⨪", UD = "∓", BD = "⫛", $D = "…", VD = "∓", zD = "⊧", HD = "𝕄", XD = "𝕞", GD = "∓", WD = "𝓂", YD = "ℳ", KD = "∾", JD = "Μ", QD = "μ", ZD = "⊸", eL = "⊸", tL = "∇", nL = "Ń", rL = "ń", oL = "∠⃒", iL = "≉", sL = "⩰̸", aL = "≋̸", cL = "ŉ", lL = "≉", uL = "♮", pL = "ℕ", dL = "♮", fL = " ", mL = "≎̸", hL = "≏̸", gL = "⩃", yL = "Ň", vL = "ň", bL = "Ņ", xL = "ņ", wL = "≇", EL = "⩭̸", TL = "⩂", SL = "Н", NL = "н", OL = "–", AL = "⤤", _L = "↗", DL = "⇗", LL = "↗", CL = "≠", RL = "≐̸", PL = "​", IL = "​", kL = "​", FL = "​", qL = "≢", ML = "⤨", jL = "≂̸", UL = "≫", BL = "≪", $L = `
`, VL = "∄", zL = "∄", HL = "𝔑", XL = "𝔫", GL = "≧̸", WL = "≱", YL = "≱", KL = "≧̸", JL = "⩾̸", QL = "⩾̸", ZL = "⋙̸", eC = "≵", tC = "≫⃒", nC = "≯", rC = "≯", oC = "≫̸", iC = "↮", sC = "⇎", aC = "⫲", cC = "∋", lC = "⋼", uC = "⋺", pC = "∋", dC = "Њ", fC = "њ", mC = "↚", hC = "⇍", gC = "‥", yC = "≦̸", vC = "≰", bC = "↚", xC = "⇍", wC = "↮", EC = "⇎", TC = "≰", SC = "≦̸", NC = "⩽̸", OC = "⩽̸", AC = "≮", _C = "⋘̸", DC = "≴", LC = "≪⃒", CC = "≮", RC = "⋪", PC = "⋬", IC = "≪̸", kC = "∤", FC = "⁠", qC = " ", MC = "𝕟", jC = "ℕ", UC = "⫬", BC = "¬", $C = "≢", VC = "≭", zC = "∦", HC = "∉", XC = "≠", GC = "≂̸", WC = "∄", YC = "≯", KC = "≱", JC = "≧̸", QC = "≫̸", ZC = "≹", e1 = "⩾̸", t1 = "≵", n1 = "≎̸", r1 = "≏̸", o1 = "∉", i1 = "⋵̸", s1 = "⋹̸", a1 = "∉", c1 = "⋷", l1 = "⋶", u1 = "⧏̸", p1 = "⋪", d1 = "⋬", f1 = "≮", m1 = "≰", h1 = "≸", g1 = "≪̸", y1 = "⩽̸", v1 = "≴", b1 = "⪢̸", x1 = "⪡̸", w1 = "∌", E1 = "∌", T1 = "⋾", S1 = "⋽", N1 = "⊀", O1 = "⪯̸", A1 = "⋠", _1 = "∌", D1 = "⧐̸", L1 = "⋫", C1 = "⋭", R1 = "⊏̸", P1 = "⋢", I1 = "⊐̸", k1 = "⋣", F1 = "⊂⃒", q1 = "⊈", M1 = "⊁", j1 = "⪰̸", U1 = "⋡", B1 = "≿̸", $1 = "⊃⃒", V1 = "⊉", z1 = "≁", H1 = "≄", X1 = "≇", G1 = "≉", W1 = "∤", Y1 = "∦", K1 = "∦", J1 = "⫽⃥", Q1 = "∂̸", Z1 = "⨔", eR = "⊀", tR = "⋠", nR = "⊀", rR = "⪯̸", oR = "⪯̸", iR = "⤳̸", sR = "↛", aR = "⇏", cR = "↝̸", lR = "↛", uR = "⇏", pR = "⋫", dR = "⋭", fR = "⊁", mR = "⋡", hR = "⪰̸", gR = "𝒩", yR = "𝓃", vR = "∤", bR = "∦", xR = "≁", wR = "≄", ER = "≄", TR = "∤", SR = "∦", NR = "⋢", OR = "⋣", AR = "⊄", _R = "⫅̸", DR = "⊈", LR = "⊂⃒", CR = "⊈", RR = "⫅̸", PR = "⊁", IR = "⪰̸", kR = "⊅", FR = "⫆̸", qR = "⊉", MR = "⊃⃒", jR = "⊉", UR = "⫆̸", BR = "≹", $R = "Ñ", VR = "ñ", zR = "≸", HR = "⋪", XR = "⋬", GR = "⋫", WR = "⋭", YR = "Ν", KR = "ν", JR = "#", QR = "№", ZR = " ", eP = "≍⃒", tP = "⊬", nP = "⊭", rP = "⊮", oP = "⊯", iP = "≥⃒", sP = ">⃒", aP = "⤄", cP = "⧞", lP = "⤂", uP = "≤⃒", pP = "<⃒", dP = "⊴⃒", fP = "⤃", mP = "⊵⃒", hP = "∼⃒", gP = "⤣", yP = "↖", vP = "⇖", bP = "↖", xP = "⤧", wP = "Ó", EP = "ó", TP = "⊛", SP = "Ô", NP = "ô", OP = "⊚", AP = "О", _P = "о", DP = "⊝", LP = "Ő", CP = "ő", RP = "⨸", PP = "⊙", IP = "⦼", kP = "Œ", FP = "œ", qP = "⦿", MP = "𝔒", jP = "𝔬", UP = "˛", BP = "Ò", $P = "ò", VP = "⧁", zP = "⦵", HP = "Ω", XP = "∮", GP = "↺", WP = "⦾", YP = "⦻", KP = "‾", JP = "⧀", QP = "Ō", ZP = "ō", eI = "Ω", tI = "ω", nI = "Ο", rI = "ο", oI = "⦶", iI = "⊖", sI = "𝕆", aI = "𝕠", cI = "⦷", lI = "“", uI = "‘", pI = "⦹", dI = "⊕", fI = "↻", mI = "⩔", hI = "∨", gI = "⩝", yI = "ℴ", vI = "ℴ", bI = "ª", xI = "º", wI = "⊶", EI = "⩖", TI = "⩗", SI = "⩛", NI = "Ⓢ", OI = "𝒪", AI = "ℴ", _I = "Ø", DI = "ø", LI = "⊘", CI = "Õ", RI = "õ", PI = "⨶", II = "⨷", kI = "⊗", FI = "Ö", qI = "ö", MI = "⌽", jI = "‾", UI = "⏞", BI = "⎴", $I = "⏜", VI = "¶", zI = "∥", HI = "∥", XI = "⫳", GI = "⫽", WI = "∂", YI = "∂", KI = "П", JI = "п", QI = "%", ZI = ".", ek = "‰", tk = "⊥", nk = "‱", rk = "𝔓", ok = "𝔭", ik = "Φ", sk = "φ", ak = "ϕ", ck = "ℳ", lk = "☎", uk = "Π", pk = "π", dk = "⋔", fk = "ϖ", mk = "ℏ", hk = "ℎ", gk = "ℏ", yk = "⨣", vk = "⊞", bk = "⨢", xk = "+", wk = "∔", Ek = "⨥", Tk = "⩲", Sk = "±", Nk = "±", Ok = "⨦", Ak = "⨧", _k = "±", Dk = "ℌ", Lk = "⨕", Ck = "𝕡", Rk = "ℙ", Pk = "£", Ik = "⪷", kk = "⪻", Fk = "≺", qk = "≼", Mk = "⪷", jk = "≺", Uk = "≼", Bk = "≺", $k = "⪯", Vk = "≼", zk = "≾", Hk = "⪯", Xk = "⪹", Gk = "⪵", Wk = "⋨", Yk = "⪯", Kk = "⪳", Jk = "≾", Qk = "′", Zk = "″", eF = "ℙ", tF = "⪹", nF = "⪵", rF = "⋨", oF = "∏", iF = "∏", sF = "⌮", aF = "⌒", cF = "⌓", lF = "∝", uF = "∝", pF = "∷", dF = "∝", fF = "≾", mF = "⊰", hF = "𝒫", gF = "𝓅", yF = "Ψ", vF = "ψ", bF = " ", xF = "𝔔", wF = "𝔮", EF = "⨌", TF = "𝕢", SF = "ℚ", NF = "⁗", OF = "𝒬", AF = "𝓆", _F = "ℍ", DF = "⨖", LF = "?", CF = "≟", RF = '"', PF = '"', IF = "⇛", kF = "∽̱", FF = "Ŕ", qF = "ŕ", MF = "√", jF = "⦳", UF = "⟩", BF = "⟫", $F = "⦒", VF = "⦥", zF = "⟩", HF = "»", XF = "⥵", GF = "⇥", WF = "⤠", YF = "⤳", KF = "→", JF = "↠", QF = "⇒", ZF = "⤞", eq = "↪", tq = "↬", nq = "⥅", rq = "⥴", oq = "⤖", iq = "↣", sq = "↝", aq = "⤚", cq = "⤜", lq = "∶", uq = "ℚ", pq = "⤍", dq = "⤏", fq = "⤐", mq = "❳", hq = "}", gq = "]", yq = "⦌", vq = "⦎", bq = "⦐", xq = "Ř", wq = "ř", Eq = "Ŗ", Tq = "ŗ", Sq = "⌉", Nq = "}", Oq = "Р", Aq = "р", _q = "⤷", Dq = "⥩", Lq = "”", Cq = "”", Rq = "↳", Pq = "ℜ", Iq = "ℛ", kq = "ℜ", Fq = "ℝ", qq = "ℜ", Mq = "▭", jq = "®", Uq = "®", Bq = "∋", $q = "⇋", Vq = "⥯", zq = "⥽", Hq = "⌋", Xq = "𝔯", Gq = "ℜ", Wq = "⥤", Yq = "⇁", Kq = "⇀", Jq = "⥬", Qq = "Ρ", Zq = "ρ", eM = "ϱ", tM = "⟩", nM = "⇥", rM = "→", oM = "→", iM = "⇒", sM = "⇄", aM = "↣", cM = "⌉", lM = "⟧", uM = "⥝", pM = "⥕", dM = "⇂", fM = "⌋", mM = "⇁", hM = "⇀", gM = "⇄", yM = "⇌", vM = "⇉", bM = "↝", xM = "↦", wM = "⊢", EM = "⥛", TM = "⋌", SM = "⧐", NM = "⊳", OM = "⊵", AM = "⥏", _M = "⥜", DM = "⥔", LM = "↾", CM = "⥓", RM = "⇀", PM = "˚", IM = "≓", kM = "⇄", FM = "⇌", qM = "‏", MM = "⎱", jM = "⎱", UM = "⫮", BM = "⟭", $M = "⇾", VM = "⟧", zM = "⦆", HM = "𝕣", XM = "ℝ", GM = "⨮", WM = "⨵", YM = "⥰", KM = ")", JM = "⦔", QM = "⨒", ZM = "⇉", ej = "⇛", tj = "›", nj = "𝓇", rj = "ℛ", oj = "↱", ij = "↱", sj = "]", aj = "’", cj = "’", lj = "⋌", uj = "⋊", pj = "▹", dj = "⊵", fj = "▸", mj = "⧎", hj = "⧴", gj = "⥨", yj = "℞", vj = "Ś", bj = "ś", xj = "‚", wj = "⪸", Ej = "Š", Tj = "š", Sj = "⪼", Nj = "≻", Oj = "≽", Aj = "⪰", _j = "⪴", Dj = "Ş", Lj = "ş", Cj = "Ŝ", Rj = "ŝ", Pj = "⪺", Ij = "⪶", kj = "⋩", Fj = "⨓", qj = "≿", Mj = "С", jj = "с", Uj = "⊡", Bj = "⋅", $j = "⩦", Vj = "⤥", zj = "↘", Hj = "⇘", Xj = "↘", Gj = "§", Wj = ";", Yj = "⤩", Kj = "∖", Jj = "∖", Qj = "✶", Zj = "𝔖", e2 = "𝔰", t2 = "⌢", n2 = "♯", r2 = "Щ", o2 = "щ", i2 = "Ш", s2 = "ш", a2 = "↓", c2 = "←", l2 = "∣", u2 = "∥", p2 = "→", d2 = "↑", f2 = "­", m2 = "Σ", h2 = "σ", g2 = "ς", y2 = "ς", v2 = "∼", b2 = "⩪", x2 = "≃", w2 = "≃", E2 = "⪞", T2 = "⪠", S2 = "⪝", N2 = "⪟", O2 = "≆", A2 = "⨤", _2 = "⥲", D2 = "←", L2 = "∘", C2 = "∖", R2 = "⨳", P2 = "⧤", I2 = "∣", k2 = "⌣", F2 = "⪪", q2 = "⪬", M2 = "⪬︀", j2 = "Ь", U2 = "ь", B2 = "⌿", $2 = "⧄", V2 = "/", z2 = "𝕊", H2 = "𝕤", X2 = "♠", G2 = "♠", W2 = "∥", Y2 = "⊓", K2 = "⊓︀", J2 = "⊔", Q2 = "⊔︀", Z2 = "√", eU = "⊏", tU = "⊑", nU = "⊏", rU = "⊑", oU = "⊐", iU = "⊒", sU = "⊐", aU = "⊒", cU = "□", lU = "□", uU = "⊓", pU = "⊏", dU = "⊑", fU = "⊐", mU = "⊒", hU = "⊔", gU = "▪", yU = "□", vU = "▪", bU = "→", xU = "𝒮", wU = "𝓈", EU = "∖", TU = "⌣", SU = "⋆", NU = "⋆", OU = "☆", AU = "★", _U = "ϵ", DU = "ϕ", LU = "¯", CU = "⊂", RU = "⋐", PU = "⪽", IU = "⫅", kU = "⊆", FU = "⫃", qU = "⫁", MU = "⫋", jU = "⊊", UU = "⪿", BU = "⥹", $U = "⊂", VU = "⋐", zU = "⊆", HU = "⫅", XU = "⊆", GU = "⊊", WU = "⫋", YU = "⫇", KU = "⫕", JU = "⫓", QU = "⪸", ZU = "≻", eB = "≽", tB = "≻", nB = "⪰", rB = "≽", oB = "≿", iB = "⪰", sB = "⪺", aB = "⪶", cB = "⋩", lB = "≿", uB = "∋", pB = "∑", dB = "∑", fB = "♪", mB = "¹", hB = "²", gB = "³", yB = "⊃", vB = "⋑", bB = "⪾", xB = "⫘", wB = "⫆", EB = "⊇", TB = "⫄", SB = "⊃", NB = "⊇", OB = "⟉", AB = "⫗", _B = "⥻", DB = "⫂", LB = "⫌", CB = "⊋", RB = "⫀", PB = "⊃", IB = "⋑", kB = "⊇", FB = "⫆", qB = "⊋", MB = "⫌", jB = "⫈", UB = "⫔", BB = "⫖", $B = "⤦", VB = "↙", zB = "⇙", HB = "↙", XB = "⤪", GB = "ß", WB = "	", YB = "⌖", KB = "Τ", JB = "τ", QB = "⎴", ZB = "Ť", e$ = "ť", t$ = "Ţ", n$ = "ţ", r$ = "Т", o$ = "т", i$ = "⃛", s$ = "⌕", a$ = "𝔗", c$ = "𝔱", l$ = "∴", u$ = "∴", p$ = "∴", d$ = "Θ", f$ = "θ", m$ = "ϑ", h$ = "ϑ", g$ = "≈", y$ = "∼", v$ = "  ", b$ = " ", x$ = " ", w$ = "≈", E$ = "∼", T$ = "Þ", S$ = "þ", N$ = "˜", O$ = "∼", A$ = "≃", _$ = "≅", D$ = "≈", L$ = "⨱", C$ = "⊠", R$ = "×", P$ = "⨰", I$ = "∭", k$ = "⤨", F$ = "⌶", q$ = "⫱", M$ = "⊤", j$ = "𝕋", U$ = "𝕥", B$ = "⫚", $$ = "⤩", V$ = "‴", z$ = "™", H$ = "™", X$ = "▵", G$ = "▿", W$ = "◃", Y$ = "⊴", K$ = "≜", J$ = "▹", Q$ = "⊵", Z$ = "◬", e3 = "≜", t3 = "⨺", n3 = "⃛", r3 = "⨹", o3 = "⧍", i3 = "⨻", s3 = "⏢", a3 = "𝒯", c3 = "𝓉", l3 = "Ц", u3 = "ц", p3 = "Ћ", d3 = "ћ", f3 = "Ŧ", m3 = "ŧ", h3 = "≬", g3 = "↞", y3 = "↠", v3 = "Ú", b3 = "ú", x3 = "↑", w3 = "↟", E3 = "⇑", T3 = "⥉", S3 = "Ў", N3 = "ў", O3 = "Ŭ", A3 = "ŭ", _3 = "Û", D3 = "û", L3 = "У", C3 = "у", R3 = "⇅", P3 = "Ű", I3 = "ű", k3 = "⥮", F3 = "⥾", q3 = "𝔘", M3 = "𝔲", j3 = "Ù", U3 = "ù", B3 = "⥣", $3 = "↿", V3 = "↾", z3 = "▀", H3 = "⌜", X3 = "⌜", G3 = "⌏", W3 = "◸", Y3 = "Ū", K3 = "ū", J3 = "¨", Q3 = "_", Z3 = "⏟", eV = "⎵", tV = "⏝", nV = "⋃", rV = "⊎", oV = "Ų", iV = "ų", sV = "𝕌", aV = "𝕦", cV = "⤒", lV = "↑", uV = "↑", pV = "⇑", dV = "⇅", fV = "↕", mV = "↕", hV = "⇕", gV = "⥮", yV = "↿", vV = "↾", bV = "⊎", xV = "↖", wV = "↗", EV = "υ", TV = "ϒ", SV = "ϒ", NV = "Υ", OV = "υ", AV = "↥", _V = "⊥", DV = "⇈", LV = "⌝", CV = "⌝", RV = "⌎", PV = "Ů", IV = "ů", kV = "◹", FV = "𝒰", qV = "𝓊", MV = "⋰", jV = "Ũ", UV = "ũ", BV = "▵", $V = "▴", VV = "⇈", zV = "Ü", HV = "ü", XV = "⦧", GV = "⦜", WV = "ϵ", YV = "ϰ", KV = "∅", JV = "ϕ", QV = "ϖ", ZV = "∝", e8 = "↕", t8 = "⇕", n8 = "ϱ", r8 = "ς", o8 = "⊊︀", i8 = "⫋︀", s8 = "⊋︀", a8 = "⫌︀", c8 = "ϑ", l8 = "⊲", u8 = "⊳", p8 = "⫨", d8 = "⫫", f8 = "⫩", m8 = "В", h8 = "в", g8 = "⊢", y8 = "⊨", v8 = "⊩", b8 = "⊫", x8 = "⫦", w8 = "⊻", E8 = "∨", T8 = "⋁", S8 = "≚", N8 = "⋮", O8 = "|", A8 = "‖", _8 = "|", D8 = "‖", L8 = "∣", C8 = "|", R8 = "❘", P8 = "≀", I8 = " ", k8 = "𝔙", F8 = "𝔳", q8 = "⊲", M8 = "⊂⃒", j8 = "⊃⃒", U8 = "𝕍", B8 = "𝕧", $8 = "∝", V8 = "⊳", z8 = "𝒱", H8 = "𝓋", X8 = "⫋︀", G8 = "⊊︀", W8 = "⫌︀", Y8 = "⊋︀", K8 = "⊪", J8 = "⦚", Q8 = "Ŵ", Z8 = "ŵ", ez = "⩟", tz = "∧", nz = "⋀", rz = "≙", oz = "℘", iz = "𝔚", sz = "𝔴", az = "𝕎", cz = "𝕨", lz = "℘", uz = "≀", pz = "≀", dz = "𝒲", fz = "𝓌", mz = "⋂", hz = "◯", gz = "⋃", yz = "▽", vz = "𝔛", bz = "𝔵", xz = "⟷", wz = "⟺", Ez = "Ξ", Tz = "ξ", Sz = "⟵", Nz = "⟸", Oz = "⟼", Az = "⋻", _z = "⨀", Dz = "𝕏", Lz = "𝕩", Cz = "⨁", Rz = "⨂", Pz = "⟶", Iz = "⟹", kz = "𝒳", Fz = "𝓍", qz = "⨆", Mz = "⨄", jz = "△", Uz = "⋁", Bz = "⋀", $z = "Ý", Vz = "ý", zz = "Я", Hz = "я", Xz = "Ŷ", Gz = "ŷ", Wz = "Ы", Yz = "ы", Kz = "¥", Jz = "𝔜", Qz = "𝔶", Zz = "Ї", e4 = "ї", t4 = "𝕐", n4 = "𝕪", r4 = "𝒴", o4 = "𝓎", i4 = "Ю", s4 = "ю", a4 = "ÿ", c4 = "Ÿ", l4 = "Ź", u4 = "ź", p4 = "Ž", d4 = "ž", f4 = "З", m4 = "з", h4 = "Ż", g4 = "ż", y4 = "ℨ", v4 = "​", b4 = "Ζ", x4 = "ζ", w4 = "𝔷", E4 = "ℨ", T4 = "Ж", S4 = "ж", N4 = "⇝", O4 = "𝕫", A4 = "ℤ", _4 = "𝒵", D4 = "𝓏", L4 = "‍", C4 = "‌", kc = {
  Aacute: mp,
  aacute: hp,
  Abreve: gp,
  abreve: yp,
  ac: vp,
  acd: bp,
  acE: xp,
  Acirc: wp,
  acirc: Ep,
  acute: Tp,
  Acy: Sp,
  acy: Np,
  AElig: Op,
  aelig: Ap,
  af: _p,
  Afr: Dp,
  afr: Lp,
  Agrave: Cp,
  agrave: Rp,
  alefsym: Pp,
  aleph: Ip,
  Alpha: kp,
  alpha: Fp,
  Amacr: qp,
  amacr: Mp,
  amalg: jp,
  amp: Up,
  AMP: Bp,
  andand: $p,
  And: Vp,
  and: zp,
  andd: Hp,
  andslope: Xp,
  andv: Gp,
  ang: Wp,
  ange: Yp,
  angle: Kp,
  angmsdaa: Jp,
  angmsdab: Qp,
  angmsdac: Zp,
  angmsdad: ed,
  angmsdae: td,
  angmsdaf: nd,
  angmsdag: rd,
  angmsdah: od,
  angmsd: id,
  angrt: sd,
  angrtvb: ad,
  angrtvbd: cd,
  angsph: ld,
  angst: ud,
  angzarr: pd,
  Aogon: dd,
  aogon: fd,
  Aopf: md,
  aopf: hd,
  apacir: gd,
  ap: yd,
  apE: vd,
  ape: bd,
  apid: xd,
  apos: wd,
  ApplyFunction: Ed,
  approx: Td,
  approxeq: Sd,
  Aring: Nd,
  aring: Od,
  Ascr: Ad,
  ascr: _d,
  Assign: Dd,
  ast: Ld,
  asymp: Cd,
  asympeq: Rd,
  Atilde: Pd,
  atilde: Id,
  Auml: kd,
  auml: Fd,
  awconint: qd,
  awint: Md,
  backcong: jd,
  backepsilon: Ud,
  backprime: Bd,
  backsim: $d,
  backsimeq: Vd,
  Backslash: zd,
  Barv: Hd,
  barvee: Xd,
  barwed: Gd,
  Barwed: Wd,
  barwedge: Yd,
  bbrk: Kd,
  bbrktbrk: Jd,
  bcong: Qd,
  Bcy: Zd,
  bcy: ef,
  bdquo: tf,
  becaus: nf,
  because: rf,
  Because: of,
  bemptyv: sf,
  bepsi: af,
  bernou: cf,
  Bernoullis: lf,
  Beta: uf,
  beta: pf,
  beth: df,
  between: ff,
  Bfr: mf,
  bfr: hf,
  bigcap: gf,
  bigcirc: yf,
  bigcup: vf,
  bigodot: bf,
  bigoplus: xf,
  bigotimes: wf,
  bigsqcup: Ef,
  bigstar: Tf,
  bigtriangledown: Sf,
  bigtriangleup: Nf,
  biguplus: Of,
  bigvee: Af,
  bigwedge: _f,
  bkarow: Df,
  blacklozenge: Lf,
  blacksquare: Cf,
  blacktriangle: Rf,
  blacktriangledown: Pf,
  blacktriangleleft: If,
  blacktriangleright: kf,
  blank: Ff,
  blk12: qf,
  blk14: Mf,
  blk34: jf,
  block: Uf,
  bne: Bf,
  bnequiv: $f,
  bNot: Vf,
  bnot: zf,
  Bopf: Hf,
  bopf: Xf,
  bot: Gf,
  bottom: Wf,
  bowtie: Yf,
  boxbox: Kf,
  boxdl: Jf,
  boxdL: Qf,
  boxDl: Zf,
  boxDL: em,
  boxdr: tm,
  boxdR: nm,
  boxDr: rm,
  boxDR: om,
  boxh: im,
  boxH: sm,
  boxhd: am,
  boxHd: cm,
  boxhD: lm,
  boxHD: um,
  boxhu: pm,
  boxHu: dm,
  boxhU: fm,
  boxHU: mm,
  boxminus: hm,
  boxplus: gm,
  boxtimes: ym,
  boxul: vm,
  boxuL: bm,
  boxUl: xm,
  boxUL: wm,
  boxur: Em,
  boxuR: Tm,
  boxUr: Sm,
  boxUR: Nm,
  boxv: Om,
  boxV: Am,
  boxvh: _m,
  boxvH: Dm,
  boxVh: Lm,
  boxVH: Cm,
  boxvl: Rm,
  boxvL: Pm,
  boxVl: Im,
  boxVL: km,
  boxvr: Fm,
  boxvR: qm,
  boxVr: Mm,
  boxVR: jm,
  bprime: Um,
  breve: Bm,
  Breve: $m,
  brvbar: Vm,
  bscr: zm,
  Bscr: Hm,
  bsemi: Xm,
  bsim: Gm,
  bsime: Wm,
  bsolb: Ym,
  bsol: Km,
  bsolhsub: Jm,
  bull: Qm,
  bullet: Zm,
  bump: eh,
  bumpE: th,
  bumpe: nh,
  Bumpeq: rh,
  bumpeq: oh,
  Cacute: ih,
  cacute: sh,
  capand: ah,
  capbrcup: ch,
  capcap: lh,
  cap: uh,
  Cap: ph,
  capcup: dh,
  capdot: fh,
  CapitalDifferentialD: mh,
  caps: hh,
  caret: gh,
  caron: yh,
  Cayleys: vh,
  ccaps: bh,
  Ccaron: xh,
  ccaron: wh,
  Ccedil: Eh,
  ccedil: Th,
  Ccirc: Sh,
  ccirc: Nh,
  Cconint: Oh,
  ccups: Ah,
  ccupssm: _h,
  Cdot: Dh,
  cdot: Lh,
  cedil: Ch,
  Cedilla: Rh,
  cemptyv: Ph,
  cent: Ih,
  centerdot: kh,
  CenterDot: Fh,
  cfr: qh,
  Cfr: Mh,
  CHcy: jh,
  chcy: Uh,
  check: Bh,
  checkmark: $h,
  Chi: Vh,
  chi: zh,
  circ: Hh,
  circeq: Xh,
  circlearrowleft: Gh,
  circlearrowright: Wh,
  circledast: Yh,
  circledcirc: Kh,
  circleddash: Jh,
  CircleDot: Qh,
  circledR: Zh,
  circledS: eg,
  CircleMinus: tg,
  CirclePlus: ng,
  CircleTimes: rg,
  cir: og,
  cirE: ig,
  cire: sg,
  cirfnint: ag,
  cirmid: cg,
  cirscir: lg,
  ClockwiseContourIntegral: ug,
  CloseCurlyDoubleQuote: pg,
  CloseCurlyQuote: dg,
  clubs: fg,
  clubsuit: mg,
  colon: hg,
  Colon: gg,
  Colone: yg,
  colone: vg,
  coloneq: bg,
  comma: xg,
  commat: wg,
  comp: Eg,
  compfn: Tg,
  complement: Sg,
  complexes: Ng,
  cong: Og,
  congdot: Ag,
  Congruent: _g,
  conint: Dg,
  Conint: Lg,
  ContourIntegral: Cg,
  copf: Rg,
  Copf: Pg,
  coprod: Ig,
  Coproduct: kg,
  copy: Fg,
  COPY: qg,
  copysr: Mg,
  CounterClockwiseContourIntegral: jg,
  crarr: Ug,
  cross: Bg,
  Cross: $g,
  Cscr: Vg,
  cscr: zg,
  csub: Hg,
  csube: Xg,
  csup: Gg,
  csupe: Wg,
  ctdot: Yg,
  cudarrl: Kg,
  cudarrr: Jg,
  cuepr: Qg,
  cuesc: Zg,
  cularr: ey,
  cularrp: ty,
  cupbrcap: ny,
  cupcap: ry,
  CupCap: oy,
  cup: iy,
  Cup: sy,
  cupcup: ay,
  cupdot: cy,
  cupor: ly,
  cups: uy,
  curarr: py,
  curarrm: dy,
  curlyeqprec: fy,
  curlyeqsucc: my,
  curlyvee: hy,
  curlywedge: gy,
  curren: yy,
  curvearrowleft: vy,
  curvearrowright: by,
  cuvee: xy,
  cuwed: wy,
  cwconint: Ey,
  cwint: Ty,
  cylcty: Sy,
  dagger: Ny,
  Dagger: Oy,
  daleth: Ay,
  darr: _y,
  Darr: Dy,
  dArr: Ly,
  dash: Cy,
  Dashv: Ry,
  dashv: Py,
  dbkarow: Iy,
  dblac: ky,
  Dcaron: Fy,
  dcaron: qy,
  Dcy: My,
  dcy: jy,
  ddagger: Uy,
  ddarr: By,
  DD: $y,
  dd: Vy,
  DDotrahd: zy,
  ddotseq: Hy,
  deg: Xy,
  Del: Gy,
  Delta: Wy,
  delta: Yy,
  demptyv: Ky,
  dfisht: Jy,
  Dfr: Qy,
  dfr: Zy,
  dHar: ev,
  dharl: tv,
  dharr: nv,
  DiacriticalAcute: rv,
  DiacriticalDot: ov,
  DiacriticalDoubleAcute: iv,
  DiacriticalGrave: sv,
  DiacriticalTilde: av,
  diam: cv,
  diamond: lv,
  Diamond: uv,
  diamondsuit: pv,
  diams: dv,
  die: fv,
  DifferentialD: mv,
  digamma: hv,
  disin: gv,
  div: yv,
  divide: vv,
  divideontimes: bv,
  divonx: xv,
  DJcy: wv,
  djcy: Ev,
  dlcorn: Tv,
  dlcrop: Sv,
  dollar: Nv,
  Dopf: Ov,
  dopf: Av,
  Dot: _v,
  dot: Dv,
  DotDot: Lv,
  doteq: Cv,
  doteqdot: Rv,
  DotEqual: Pv,
  dotminus: Iv,
  dotplus: kv,
  dotsquare: Fv,
  doublebarwedge: qv,
  DoubleContourIntegral: Mv,
  DoubleDot: jv,
  DoubleDownArrow: Uv,
  DoubleLeftArrow: Bv,
  DoubleLeftRightArrow: $v,
  DoubleLeftTee: Vv,
  DoubleLongLeftArrow: zv,
  DoubleLongLeftRightArrow: Hv,
  DoubleLongRightArrow: Xv,
  DoubleRightArrow: Gv,
  DoubleRightTee: Wv,
  DoubleUpArrow: Yv,
  DoubleUpDownArrow: Kv,
  DoubleVerticalBar: Jv,
  DownArrowBar: Qv,
  downarrow: Zv,
  DownArrow: eb,
  Downarrow: tb,
  DownArrowUpArrow: nb,
  DownBreve: rb,
  downdownarrows: ob,
  downharpoonleft: ib,
  downharpoonright: sb,
  DownLeftRightVector: ab,
  DownLeftTeeVector: cb,
  DownLeftVectorBar: lb,
  DownLeftVector: ub,
  DownRightTeeVector: pb,
  DownRightVectorBar: db,
  DownRightVector: fb,
  DownTeeArrow: mb,
  DownTee: hb,
  drbkarow: gb,
  drcorn: yb,
  drcrop: vb,
  Dscr: bb,
  dscr: xb,
  DScy: wb,
  dscy: Eb,
  dsol: Tb,
  Dstrok: Sb,
  dstrok: Nb,
  dtdot: Ob,
  dtri: Ab,
  dtrif: _b,
  duarr: Db,
  duhar: Lb,
  dwangle: Cb,
  DZcy: Rb,
  dzcy: Pb,
  dzigrarr: Ib,
  Eacute: kb,
  eacute: Fb,
  easter: qb,
  Ecaron: Mb,
  ecaron: jb,
  Ecirc: Ub,
  ecirc: Bb,
  ecir: $b,
  ecolon: Vb,
  Ecy: zb,
  ecy: Hb,
  eDDot: Xb,
  Edot: Gb,
  edot: Wb,
  eDot: Yb,
  ee: Kb,
  efDot: Jb,
  Efr: Qb,
  efr: Zb,
  eg: ex,
  Egrave: tx,
  egrave: nx,
  egs: rx,
  egsdot: ox,
  el: ix,
  Element: sx,
  elinters: ax,
  ell: cx,
  els: lx,
  elsdot: ux,
  Emacr: px,
  emacr: dx,
  empty: fx,
  emptyset: mx,
  EmptySmallSquare: hx,
  emptyv: gx,
  EmptyVerySmallSquare: yx,
  emsp13: vx,
  emsp14: bx,
  emsp: xx,
  ENG: wx,
  eng: Ex,
  ensp: Tx,
  Eogon: Sx,
  eogon: Nx,
  Eopf: Ox,
  eopf: Ax,
  epar: _x,
  eparsl: Dx,
  eplus: Lx,
  epsi: Cx,
  Epsilon: Rx,
  epsilon: Px,
  epsiv: Ix,
  eqcirc: kx,
  eqcolon: Fx,
  eqsim: qx,
  eqslantgtr: Mx,
  eqslantless: jx,
  Equal: Ux,
  equals: Bx,
  EqualTilde: $x,
  equest: Vx,
  Equilibrium: zx,
  equiv: Hx,
  equivDD: Xx,
  eqvparsl: Gx,
  erarr: Wx,
  erDot: Yx,
  escr: Kx,
  Escr: Jx,
  esdot: Qx,
  Esim: Zx,
  esim: ew,
  Eta: tw,
  eta: nw,
  ETH: rw,
  eth: ow,
  Euml: iw,
  euml: sw,
  euro: aw,
  excl: cw,
  exist: lw,
  Exists: uw,
  expectation: pw,
  exponentiale: dw,
  ExponentialE: fw,
  fallingdotseq: mw,
  Fcy: hw,
  fcy: gw,
  female: yw,
  ffilig: vw,
  fflig: bw,
  ffllig: xw,
  Ffr: ww,
  ffr: Ew,
  filig: Tw,
  FilledSmallSquare: Sw,
  FilledVerySmallSquare: Nw,
  fjlig: Ow,
  flat: Aw,
  fllig: _w,
  fltns: Dw,
  fnof: Lw,
  Fopf: Cw,
  fopf: Rw,
  forall: Pw,
  ForAll: Iw,
  fork: kw,
  forkv: Fw,
  Fouriertrf: qw,
  fpartint: Mw,
  frac12: jw,
  frac13: Uw,
  frac14: Bw,
  frac15: $w,
  frac16: Vw,
  frac18: zw,
  frac23: Hw,
  frac25: Xw,
  frac34: Gw,
  frac35: Ww,
  frac38: Yw,
  frac45: Kw,
  frac56: Jw,
  frac58: Qw,
  frac78: Zw,
  frasl: eE,
  frown: tE,
  fscr: nE,
  Fscr: rE,
  gacute: oE,
  Gamma: iE,
  gamma: sE,
  Gammad: aE,
  gammad: cE,
  gap: lE,
  Gbreve: uE,
  gbreve: pE,
  Gcedil: dE,
  Gcirc: fE,
  gcirc: mE,
  Gcy: hE,
  gcy: gE,
  Gdot: yE,
  gdot: vE,
  ge: bE,
  gE: xE,
  gEl: wE,
  gel: EE,
  geq: TE,
  geqq: SE,
  geqslant: NE,
  gescc: OE,
  ges: AE,
  gesdot: _E,
  gesdoto: DE,
  gesdotol: LE,
  gesl: CE,
  gesles: RE,
  Gfr: PE,
  gfr: IE,
  gg: kE,
  Gg: FE,
  ggg: qE,
  gimel: ME,
  GJcy: jE,
  gjcy: UE,
  gla: BE,
  gl: $E,
  glE: VE,
  glj: zE,
  gnap: HE,
  gnapprox: XE,
  gne: GE,
  gnE: WE,
  gneq: YE,
  gneqq: KE,
  gnsim: JE,
  Gopf: QE,
  gopf: ZE,
  grave: eT,
  GreaterEqual: tT,
  GreaterEqualLess: nT,
  GreaterFullEqual: rT,
  GreaterGreater: oT,
  GreaterLess: iT,
  GreaterSlantEqual: sT,
  GreaterTilde: aT,
  Gscr: cT,
  gscr: lT,
  gsim: uT,
  gsime: pT,
  gsiml: dT,
  gtcc: fT,
  gtcir: mT,
  gt: hT,
  GT: gT,
  Gt: yT,
  gtdot: vT,
  gtlPar: bT,
  gtquest: xT,
  gtrapprox: wT,
  gtrarr: ET,
  gtrdot: TT,
  gtreqless: ST,
  gtreqqless: NT,
  gtrless: OT,
  gtrsim: AT,
  gvertneqq: _T,
  gvnE: DT,
  Hacek: LT,
  hairsp: CT,
  half: RT,
  hamilt: PT,
  HARDcy: IT,
  hardcy: kT,
  harrcir: FT,
  harr: qT,
  hArr: MT,
  harrw: jT,
  Hat: UT,
  hbar: BT,
  Hcirc: $T,
  hcirc: VT,
  hearts: zT,
  heartsuit: HT,
  hellip: XT,
  hercon: GT,
  hfr: WT,
  Hfr: YT,
  HilbertSpace: KT,
  hksearow: JT,
  hkswarow: QT,
  hoarr: ZT,
  homtht: eS,
  hookleftarrow: tS,
  hookrightarrow: nS,
  hopf: rS,
  Hopf: oS,
  horbar: iS,
  HorizontalLine: sS,
  hscr: aS,
  Hscr: cS,
  hslash: lS,
  Hstrok: uS,
  hstrok: pS,
  HumpDownHump: dS,
  HumpEqual: fS,
  hybull: mS,
  hyphen: hS,
  Iacute: gS,
  iacute: yS,
  ic: vS,
  Icirc: bS,
  icirc: xS,
  Icy: wS,
  icy: ES,
  Idot: TS,
  IEcy: SS,
  iecy: NS,
  iexcl: OS,
  iff: AS,
  ifr: _S,
  Ifr: DS,
  Igrave: LS,
  igrave: CS,
  ii: RS,
  iiiint: PS,
  iiint: IS,
  iinfin: kS,
  iiota: FS,
  IJlig: qS,
  ijlig: MS,
  Imacr: jS,
  imacr: US,
  image: BS,
  ImaginaryI: $S,
  imagline: VS,
  imagpart: zS,
  imath: HS,
  Im: XS,
  imof: GS,
  imped: WS,
  Implies: YS,
  incare: KS,
  in: "∈",
  infin: JS,
  infintie: QS,
  inodot: ZS,
  intcal: e0,
  int: t0,
  Int: n0,
  integers: r0,
  Integral: o0,
  intercal: i0,
  Intersection: s0,
  intlarhk: a0,
  intprod: c0,
  InvisibleComma: l0,
  InvisibleTimes: u0,
  IOcy: p0,
  iocy: d0,
  Iogon: f0,
  iogon: m0,
  Iopf: h0,
  iopf: g0,
  Iota: y0,
  iota: v0,
  iprod: b0,
  iquest: x0,
  iscr: w0,
  Iscr: E0,
  isin: T0,
  isindot: S0,
  isinE: N0,
  isins: O0,
  isinsv: A0,
  isinv: _0,
  it: D0,
  Itilde: L0,
  itilde: C0,
  Iukcy: R0,
  iukcy: P0,
  Iuml: I0,
  iuml: k0,
  Jcirc: F0,
  jcirc: q0,
  Jcy: M0,
  jcy: j0,
  Jfr: U0,
  jfr: B0,
  jmath: $0,
  Jopf: V0,
  jopf: z0,
  Jscr: H0,
  jscr: X0,
  Jsercy: G0,
  jsercy: W0,
  Jukcy: Y0,
  jukcy: K0,
  Kappa: J0,
  kappa: Q0,
  kappav: Z0,
  Kcedil: eN,
  kcedil: tN,
  Kcy: nN,
  kcy: rN,
  Kfr: oN,
  kfr: iN,
  kgreen: sN,
  KHcy: aN,
  khcy: cN,
  KJcy: lN,
  kjcy: uN,
  Kopf: pN,
  kopf: dN,
  Kscr: fN,
  kscr: mN,
  lAarr: hN,
  Lacute: gN,
  lacute: yN,
  laemptyv: vN,
  lagran: bN,
  Lambda: xN,
  lambda: wN,
  lang: EN,
  Lang: TN,
  langd: SN,
  langle: NN,
  lap: ON,
  Laplacetrf: AN,
  laquo: _N,
  larrb: DN,
  larrbfs: LN,
  larr: CN,
  Larr: RN,
  lArr: PN,
  larrfs: IN,
  larrhk: kN,
  larrlp: FN,
  larrpl: qN,
  larrsim: MN,
  larrtl: jN,
  latail: UN,
  lAtail: BN,
  lat: $N,
  late: VN,
  lates: zN,
  lbarr: HN,
  lBarr: XN,
  lbbrk: GN,
  lbrace: WN,
  lbrack: YN,
  lbrke: KN,
  lbrksld: JN,
  lbrkslu: QN,
  Lcaron: ZN,
  lcaron: eO,
  Lcedil: tO,
  lcedil: nO,
  lceil: rO,
  lcub: oO,
  Lcy: iO,
  lcy: sO,
  ldca: aO,
  ldquo: cO,
  ldquor: lO,
  ldrdhar: uO,
  ldrushar: pO,
  ldsh: dO,
  le: fO,
  lE: mO,
  LeftAngleBracket: hO,
  LeftArrowBar: gO,
  leftarrow: yO,
  LeftArrow: vO,
  Leftarrow: bO,
  LeftArrowRightArrow: xO,
  leftarrowtail: wO,
  LeftCeiling: EO,
  LeftDoubleBracket: TO,
  LeftDownTeeVector: SO,
  LeftDownVectorBar: NO,
  LeftDownVector: OO,
  LeftFloor: AO,
  leftharpoondown: _O,
  leftharpoonup: DO,
  leftleftarrows: LO,
  leftrightarrow: CO,
  LeftRightArrow: RO,
  Leftrightarrow: PO,
  leftrightarrows: IO,
  leftrightharpoons: kO,
  leftrightsquigarrow: FO,
  LeftRightVector: qO,
  LeftTeeArrow: MO,
  LeftTee: jO,
  LeftTeeVector: UO,
  leftthreetimes: BO,
  LeftTriangleBar: $O,
  LeftTriangle: VO,
  LeftTriangleEqual: zO,
  LeftUpDownVector: HO,
  LeftUpTeeVector: XO,
  LeftUpVectorBar: GO,
  LeftUpVector: WO,
  LeftVectorBar: YO,
  LeftVector: KO,
  lEg: JO,
  leg: QO,
  leq: ZO,
  leqq: eA,
  leqslant: tA,
  lescc: nA,
  les: rA,
  lesdot: oA,
  lesdoto: iA,
  lesdotor: sA,
  lesg: aA,
  lesges: cA,
  lessapprox: lA,
  lessdot: uA,
  lesseqgtr: pA,
  lesseqqgtr: dA,
  LessEqualGreater: fA,
  LessFullEqual: mA,
  LessGreater: hA,
  lessgtr: gA,
  LessLess: yA,
  lesssim: vA,
  LessSlantEqual: bA,
  LessTilde: xA,
  lfisht: wA,
  lfloor: EA,
  Lfr: TA,
  lfr: SA,
  lg: NA,
  lgE: OA,
  lHar: AA,
  lhard: _A,
  lharu: DA,
  lharul: LA,
  lhblk: CA,
  LJcy: RA,
  ljcy: PA,
  llarr: IA,
  ll: kA,
  Ll: FA,
  llcorner: qA,
  Lleftarrow: MA,
  llhard: jA,
  lltri: UA,
  Lmidot: BA,
  lmidot: $A,
  lmoustache: VA,
  lmoust: zA,
  lnap: HA,
  lnapprox: XA,
  lne: GA,
  lnE: WA,
  lneq: YA,
  lneqq: KA,
  lnsim: JA,
  loang: QA,
  loarr: ZA,
  lobrk: e_,
  longleftarrow: t_,
  LongLeftArrow: n_,
  Longleftarrow: r_,
  longleftrightarrow: o_,
  LongLeftRightArrow: i_,
  Longleftrightarrow: s_,
  longmapsto: a_,
  longrightarrow: c_,
  LongRightArrow: l_,
  Longrightarrow: u_,
  looparrowleft: p_,
  looparrowright: d_,
  lopar: f_,
  Lopf: m_,
  lopf: h_,
  loplus: g_,
  lotimes: y_,
  lowast: v_,
  lowbar: b_,
  LowerLeftArrow: x_,
  LowerRightArrow: w_,
  loz: E_,
  lozenge: T_,
  lozf: S_,
  lpar: N_,
  lparlt: O_,
  lrarr: A_,
  lrcorner: __,
  lrhar: D_,
  lrhard: L_,
  lrm: C_,
  lrtri: R_,
  lsaquo: P_,
  lscr: I_,
  Lscr: k_,
  lsh: F_,
  Lsh: q_,
  lsim: M_,
  lsime: j_,
  lsimg: U_,
  lsqb: B_,
  lsquo: $_,
  lsquor: V_,
  Lstrok: z_,
  lstrok: H_,
  ltcc: X_,
  ltcir: G_,
  lt: W_,
  LT: Y_,
  Lt: K_,
  ltdot: J_,
  lthree: Q_,
  ltimes: Z_,
  ltlarr: eD,
  ltquest: tD,
  ltri: nD,
  ltrie: rD,
  ltrif: oD,
  ltrPar: iD,
  lurdshar: sD,
  luruhar: aD,
  lvertneqq: cD,
  lvnE: lD,
  macr: uD,
  male: pD,
  malt: dD,
  maltese: fD,
  Map: "⤅",
  map: mD,
  mapsto: hD,
  mapstodown: gD,
  mapstoleft: yD,
  mapstoup: vD,
  marker: bD,
  mcomma: xD,
  Mcy: wD,
  mcy: ED,
  mdash: TD,
  mDDot: SD,
  measuredangle: ND,
  MediumSpace: OD,
  Mellintrf: AD,
  Mfr: _D,
  mfr: DD,
  mho: LD,
  micro: CD,
  midast: RD,
  midcir: PD,
  mid: ID,
  middot: kD,
  minusb: FD,
  minus: qD,
  minusd: MD,
  minusdu: jD,
  MinusPlus: UD,
  mlcp: BD,
  mldr: $D,
  mnplus: VD,
  models: zD,
  Mopf: HD,
  mopf: XD,
  mp: GD,
  mscr: WD,
  Mscr: YD,
  mstpos: KD,
  Mu: JD,
  mu: QD,
  multimap: ZD,
  mumap: eL,
  nabla: tL,
  Nacute: nL,
  nacute: rL,
  nang: oL,
  nap: iL,
  napE: sL,
  napid: aL,
  napos: cL,
  napprox: lL,
  natural: uL,
  naturals: pL,
  natur: dL,
  nbsp: fL,
  nbump: mL,
  nbumpe: hL,
  ncap: gL,
  Ncaron: yL,
  ncaron: vL,
  Ncedil: bL,
  ncedil: xL,
  ncong: wL,
  ncongdot: EL,
  ncup: TL,
  Ncy: SL,
  ncy: NL,
  ndash: OL,
  nearhk: AL,
  nearr: _L,
  neArr: DL,
  nearrow: LL,
  ne: CL,
  nedot: RL,
  NegativeMediumSpace: PL,
  NegativeThickSpace: IL,
  NegativeThinSpace: kL,
  NegativeVeryThinSpace: FL,
  nequiv: qL,
  nesear: ML,
  nesim: jL,
  NestedGreaterGreater: UL,
  NestedLessLess: BL,
  NewLine: $L,
  nexist: VL,
  nexists: zL,
  Nfr: HL,
  nfr: XL,
  ngE: GL,
  nge: WL,
  ngeq: YL,
  ngeqq: KL,
  ngeqslant: JL,
  nges: QL,
  nGg: ZL,
  ngsim: eC,
  nGt: tC,
  ngt: nC,
  ngtr: rC,
  nGtv: oC,
  nharr: iC,
  nhArr: sC,
  nhpar: aC,
  ni: cC,
  nis: lC,
  nisd: uC,
  niv: pC,
  NJcy: dC,
  njcy: fC,
  nlarr: mC,
  nlArr: hC,
  nldr: gC,
  nlE: yC,
  nle: vC,
  nleftarrow: bC,
  nLeftarrow: xC,
  nleftrightarrow: wC,
  nLeftrightarrow: EC,
  nleq: TC,
  nleqq: SC,
  nleqslant: NC,
  nles: OC,
  nless: AC,
  nLl: _C,
  nlsim: DC,
  nLt: LC,
  nlt: CC,
  nltri: RC,
  nltrie: PC,
  nLtv: IC,
  nmid: kC,
  NoBreak: FC,
  NonBreakingSpace: qC,
  nopf: MC,
  Nopf: jC,
  Not: UC,
  not: BC,
  NotCongruent: $C,
  NotCupCap: VC,
  NotDoubleVerticalBar: zC,
  NotElement: HC,
  NotEqual: XC,
  NotEqualTilde: GC,
  NotExists: WC,
  NotGreater: YC,
  NotGreaterEqual: KC,
  NotGreaterFullEqual: JC,
  NotGreaterGreater: QC,
  NotGreaterLess: ZC,
  NotGreaterSlantEqual: e1,
  NotGreaterTilde: t1,
  NotHumpDownHump: n1,
  NotHumpEqual: r1,
  notin: o1,
  notindot: i1,
  notinE: s1,
  notinva: a1,
  notinvb: c1,
  notinvc: l1,
  NotLeftTriangleBar: u1,
  NotLeftTriangle: p1,
  NotLeftTriangleEqual: d1,
  NotLess: f1,
  NotLessEqual: m1,
  NotLessGreater: h1,
  NotLessLess: g1,
  NotLessSlantEqual: y1,
  NotLessTilde: v1,
  NotNestedGreaterGreater: b1,
  NotNestedLessLess: x1,
  notni: w1,
  notniva: E1,
  notnivb: T1,
  notnivc: S1,
  NotPrecedes: N1,
  NotPrecedesEqual: O1,
  NotPrecedesSlantEqual: A1,
  NotReverseElement: _1,
  NotRightTriangleBar: D1,
  NotRightTriangle: L1,
  NotRightTriangleEqual: C1,
  NotSquareSubset: R1,
  NotSquareSubsetEqual: P1,
  NotSquareSuperset: I1,
  NotSquareSupersetEqual: k1,
  NotSubset: F1,
  NotSubsetEqual: q1,
  NotSucceeds: M1,
  NotSucceedsEqual: j1,
  NotSucceedsSlantEqual: U1,
  NotSucceedsTilde: B1,
  NotSuperset: $1,
  NotSupersetEqual: V1,
  NotTilde: z1,
  NotTildeEqual: H1,
  NotTildeFullEqual: X1,
  NotTildeTilde: G1,
  NotVerticalBar: W1,
  nparallel: Y1,
  npar: K1,
  nparsl: J1,
  npart: Q1,
  npolint: Z1,
  npr: eR,
  nprcue: tR,
  nprec: nR,
  npreceq: rR,
  npre: oR,
  nrarrc: iR,
  nrarr: sR,
  nrArr: aR,
  nrarrw: cR,
  nrightarrow: lR,
  nRightarrow: uR,
  nrtri: pR,
  nrtrie: dR,
  nsc: fR,
  nsccue: mR,
  nsce: hR,
  Nscr: gR,
  nscr: yR,
  nshortmid: vR,
  nshortparallel: bR,
  nsim: xR,
  nsime: wR,
  nsimeq: ER,
  nsmid: TR,
  nspar: SR,
  nsqsube: NR,
  nsqsupe: OR,
  nsub: AR,
  nsubE: _R,
  nsube: DR,
  nsubset: LR,
  nsubseteq: CR,
  nsubseteqq: RR,
  nsucc: PR,
  nsucceq: IR,
  nsup: kR,
  nsupE: FR,
  nsupe: qR,
  nsupset: MR,
  nsupseteq: jR,
  nsupseteqq: UR,
  ntgl: BR,
  Ntilde: $R,
  ntilde: VR,
  ntlg: zR,
  ntriangleleft: HR,
  ntrianglelefteq: XR,
  ntriangleright: GR,
  ntrianglerighteq: WR,
  Nu: YR,
  nu: KR,
  num: JR,
  numero: QR,
  numsp: ZR,
  nvap: eP,
  nvdash: tP,
  nvDash: nP,
  nVdash: rP,
  nVDash: oP,
  nvge: iP,
  nvgt: sP,
  nvHarr: aP,
  nvinfin: cP,
  nvlArr: lP,
  nvle: uP,
  nvlt: pP,
  nvltrie: dP,
  nvrArr: fP,
  nvrtrie: mP,
  nvsim: hP,
  nwarhk: gP,
  nwarr: yP,
  nwArr: vP,
  nwarrow: bP,
  nwnear: xP,
  Oacute: wP,
  oacute: EP,
  oast: TP,
  Ocirc: SP,
  ocirc: NP,
  ocir: OP,
  Ocy: AP,
  ocy: _P,
  odash: DP,
  Odblac: LP,
  odblac: CP,
  odiv: RP,
  odot: PP,
  odsold: IP,
  OElig: kP,
  oelig: FP,
  ofcir: qP,
  Ofr: MP,
  ofr: jP,
  ogon: UP,
  Ograve: BP,
  ograve: $P,
  ogt: VP,
  ohbar: zP,
  ohm: HP,
  oint: XP,
  olarr: GP,
  olcir: WP,
  olcross: YP,
  oline: KP,
  olt: JP,
  Omacr: QP,
  omacr: ZP,
  Omega: eI,
  omega: tI,
  Omicron: nI,
  omicron: rI,
  omid: oI,
  ominus: iI,
  Oopf: sI,
  oopf: aI,
  opar: cI,
  OpenCurlyDoubleQuote: lI,
  OpenCurlyQuote: uI,
  operp: pI,
  oplus: dI,
  orarr: fI,
  Or: mI,
  or: hI,
  ord: gI,
  order: yI,
  orderof: vI,
  ordf: bI,
  ordm: xI,
  origof: wI,
  oror: EI,
  orslope: TI,
  orv: SI,
  oS: NI,
  Oscr: OI,
  oscr: AI,
  Oslash: _I,
  oslash: DI,
  osol: LI,
  Otilde: CI,
  otilde: RI,
  otimesas: PI,
  Otimes: II,
  otimes: kI,
  Ouml: FI,
  ouml: qI,
  ovbar: MI,
  OverBar: jI,
  OverBrace: UI,
  OverBracket: BI,
  OverParenthesis: $I,
  para: VI,
  parallel: zI,
  par: HI,
  parsim: XI,
  parsl: GI,
  part: WI,
  PartialD: YI,
  Pcy: KI,
  pcy: JI,
  percnt: QI,
  period: ZI,
  permil: ek,
  perp: tk,
  pertenk: nk,
  Pfr: rk,
  pfr: ok,
  Phi: ik,
  phi: sk,
  phiv: ak,
  phmmat: ck,
  phone: lk,
  Pi: uk,
  pi: pk,
  pitchfork: dk,
  piv: fk,
  planck: mk,
  planckh: hk,
  plankv: gk,
  plusacir: yk,
  plusb: vk,
  pluscir: bk,
  plus: xk,
  plusdo: wk,
  plusdu: Ek,
  pluse: Tk,
  PlusMinus: Sk,
  plusmn: Nk,
  plussim: Ok,
  plustwo: Ak,
  pm: _k,
  Poincareplane: Dk,
  pointint: Lk,
  popf: Ck,
  Popf: Rk,
  pound: Pk,
  prap: Ik,
  Pr: kk,
  pr: Fk,
  prcue: qk,
  precapprox: Mk,
  prec: jk,
  preccurlyeq: Uk,
  Precedes: Bk,
  PrecedesEqual: $k,
  PrecedesSlantEqual: Vk,
  PrecedesTilde: zk,
  preceq: Hk,
  precnapprox: Xk,
  precneqq: Gk,
  precnsim: Wk,
  pre: Yk,
  prE: Kk,
  precsim: Jk,
  prime: Qk,
  Prime: Zk,
  primes: eF,
  prnap: tF,
  prnE: nF,
  prnsim: rF,
  prod: oF,
  Product: iF,
  profalar: sF,
  profline: aF,
  profsurf: cF,
  prop: lF,
  Proportional: uF,
  Proportion: pF,
  propto: dF,
  prsim: fF,
  prurel: mF,
  Pscr: hF,
  pscr: gF,
  Psi: yF,
  psi: vF,
  puncsp: bF,
  Qfr: xF,
  qfr: wF,
  qint: EF,
  qopf: TF,
  Qopf: SF,
  qprime: NF,
  Qscr: OF,
  qscr: AF,
  quaternions: _F,
  quatint: DF,
  quest: LF,
  questeq: CF,
  quot: RF,
  QUOT: PF,
  rAarr: IF,
  race: kF,
  Racute: FF,
  racute: qF,
  radic: MF,
  raemptyv: jF,
  rang: UF,
  Rang: BF,
  rangd: $F,
  range: VF,
  rangle: zF,
  raquo: HF,
  rarrap: XF,
  rarrb: GF,
  rarrbfs: WF,
  rarrc: YF,
  rarr: KF,
  Rarr: JF,
  rArr: QF,
  rarrfs: ZF,
  rarrhk: eq,
  rarrlp: tq,
  rarrpl: nq,
  rarrsim: rq,
  Rarrtl: oq,
  rarrtl: iq,
  rarrw: sq,
  ratail: aq,
  rAtail: cq,
  ratio: lq,
  rationals: uq,
  rbarr: pq,
  rBarr: dq,
  RBarr: fq,
  rbbrk: mq,
  rbrace: hq,
  rbrack: gq,
  rbrke: yq,
  rbrksld: vq,
  rbrkslu: bq,
  Rcaron: xq,
  rcaron: wq,
  Rcedil: Eq,
  rcedil: Tq,
  rceil: Sq,
  rcub: Nq,
  Rcy: Oq,
  rcy: Aq,
  rdca: _q,
  rdldhar: Dq,
  rdquo: Lq,
  rdquor: Cq,
  rdsh: Rq,
  real: Pq,
  realine: Iq,
  realpart: kq,
  reals: Fq,
  Re: qq,
  rect: Mq,
  reg: jq,
  REG: Uq,
  ReverseElement: Bq,
  ReverseEquilibrium: $q,
  ReverseUpEquilibrium: Vq,
  rfisht: zq,
  rfloor: Hq,
  rfr: Xq,
  Rfr: Gq,
  rHar: Wq,
  rhard: Yq,
  rharu: Kq,
  rharul: Jq,
  Rho: Qq,
  rho: Zq,
  rhov: eM,
  RightAngleBracket: tM,
  RightArrowBar: nM,
  rightarrow: rM,
  RightArrow: oM,
  Rightarrow: iM,
  RightArrowLeftArrow: sM,
  rightarrowtail: aM,
  RightCeiling: cM,
  RightDoubleBracket: lM,
  RightDownTeeVector: uM,
  RightDownVectorBar: pM,
  RightDownVector: dM,
  RightFloor: fM,
  rightharpoondown: mM,
  rightharpoonup: hM,
  rightleftarrows: gM,
  rightleftharpoons: yM,
  rightrightarrows: vM,
  rightsquigarrow: bM,
  RightTeeArrow: xM,
  RightTee: wM,
  RightTeeVector: EM,
  rightthreetimes: TM,
  RightTriangleBar: SM,
  RightTriangle: NM,
  RightTriangleEqual: OM,
  RightUpDownVector: AM,
  RightUpTeeVector: _M,
  RightUpVectorBar: DM,
  RightUpVector: LM,
  RightVectorBar: CM,
  RightVector: RM,
  ring: PM,
  risingdotseq: IM,
  rlarr: kM,
  rlhar: FM,
  rlm: qM,
  rmoustache: MM,
  rmoust: jM,
  rnmid: UM,
  roang: BM,
  roarr: $M,
  robrk: VM,
  ropar: zM,
  ropf: HM,
  Ropf: XM,
  roplus: GM,
  rotimes: WM,
  RoundImplies: YM,
  rpar: KM,
  rpargt: JM,
  rppolint: QM,
  rrarr: ZM,
  Rrightarrow: ej,
  rsaquo: tj,
  rscr: nj,
  Rscr: rj,
  rsh: oj,
  Rsh: ij,
  rsqb: sj,
  rsquo: aj,
  rsquor: cj,
  rthree: lj,
  rtimes: uj,
  rtri: pj,
  rtrie: dj,
  rtrif: fj,
  rtriltri: mj,
  RuleDelayed: hj,
  ruluhar: gj,
  rx: yj,
  Sacute: vj,
  sacute: bj,
  sbquo: xj,
  scap: wj,
  Scaron: Ej,
  scaron: Tj,
  Sc: Sj,
  sc: Nj,
  sccue: Oj,
  sce: Aj,
  scE: _j,
  Scedil: Dj,
  scedil: Lj,
  Scirc: Cj,
  scirc: Rj,
  scnap: Pj,
  scnE: Ij,
  scnsim: kj,
  scpolint: Fj,
  scsim: qj,
  Scy: Mj,
  scy: jj,
  sdotb: Uj,
  sdot: Bj,
  sdote: $j,
  searhk: Vj,
  searr: zj,
  seArr: Hj,
  searrow: Xj,
  sect: Gj,
  semi: Wj,
  seswar: Yj,
  setminus: Kj,
  setmn: Jj,
  sext: Qj,
  Sfr: Zj,
  sfr: e2,
  sfrown: t2,
  sharp: n2,
  SHCHcy: r2,
  shchcy: o2,
  SHcy: i2,
  shcy: s2,
  ShortDownArrow: a2,
  ShortLeftArrow: c2,
  shortmid: l2,
  shortparallel: u2,
  ShortRightArrow: p2,
  ShortUpArrow: d2,
  shy: f2,
  Sigma: m2,
  sigma: h2,
  sigmaf: g2,
  sigmav: y2,
  sim: v2,
  simdot: b2,
  sime: x2,
  simeq: w2,
  simg: E2,
  simgE: T2,
  siml: S2,
  simlE: N2,
  simne: O2,
  simplus: A2,
  simrarr: _2,
  slarr: D2,
  SmallCircle: L2,
  smallsetminus: C2,
  smashp: R2,
  smeparsl: P2,
  smid: I2,
  smile: k2,
  smt: F2,
  smte: q2,
  smtes: M2,
  SOFTcy: j2,
  softcy: U2,
  solbar: B2,
  solb: $2,
  sol: V2,
  Sopf: z2,
  sopf: H2,
  spades: X2,
  spadesuit: G2,
  spar: W2,
  sqcap: Y2,
  sqcaps: K2,
  sqcup: J2,
  sqcups: Q2,
  Sqrt: Z2,
  sqsub: eU,
  sqsube: tU,
  sqsubset: nU,
  sqsubseteq: rU,
  sqsup: oU,
  sqsupe: iU,
  sqsupset: sU,
  sqsupseteq: aU,
  square: cU,
  Square: lU,
  SquareIntersection: uU,
  SquareSubset: pU,
  SquareSubsetEqual: dU,
  SquareSuperset: fU,
  SquareSupersetEqual: mU,
  SquareUnion: hU,
  squarf: gU,
  squ: yU,
  squf: vU,
  srarr: bU,
  Sscr: xU,
  sscr: wU,
  ssetmn: EU,
  ssmile: TU,
  sstarf: SU,
  Star: NU,
  star: OU,
  starf: AU,
  straightepsilon: _U,
  straightphi: DU,
  strns: LU,
  sub: CU,
  Sub: RU,
  subdot: PU,
  subE: IU,
  sube: kU,
  subedot: FU,
  submult: qU,
  subnE: MU,
  subne: jU,
  subplus: UU,
  subrarr: BU,
  subset: $U,
  Subset: VU,
  subseteq: zU,
  subseteqq: HU,
  SubsetEqual: XU,
  subsetneq: GU,
  subsetneqq: WU,
  subsim: YU,
  subsub: KU,
  subsup: JU,
  succapprox: QU,
  succ: ZU,
  succcurlyeq: eB,
  Succeeds: tB,
  SucceedsEqual: nB,
  SucceedsSlantEqual: rB,
  SucceedsTilde: oB,
  succeq: iB,
  succnapprox: sB,
  succneqq: aB,
  succnsim: cB,
  succsim: lB,
  SuchThat: uB,
  sum: pB,
  Sum: dB,
  sung: fB,
  sup1: mB,
  sup2: hB,
  sup3: gB,
  sup: yB,
  Sup: vB,
  supdot: bB,
  supdsub: xB,
  supE: wB,
  supe: EB,
  supedot: TB,
  Superset: SB,
  SupersetEqual: NB,
  suphsol: OB,
  suphsub: AB,
  suplarr: _B,
  supmult: DB,
  supnE: LB,
  supne: CB,
  supplus: RB,
  supset: PB,
  Supset: IB,
  supseteq: kB,
  supseteqq: FB,
  supsetneq: qB,
  supsetneqq: MB,
  supsim: jB,
  supsub: UB,
  supsup: BB,
  swarhk: $B,
  swarr: VB,
  swArr: zB,
  swarrow: HB,
  swnwar: XB,
  szlig: GB,
  Tab: WB,
  target: YB,
  Tau: KB,
  tau: JB,
  tbrk: QB,
  Tcaron: ZB,
  tcaron: e$,
  Tcedil: t$,
  tcedil: n$,
  Tcy: r$,
  tcy: o$,
  tdot: i$,
  telrec: s$,
  Tfr: a$,
  tfr: c$,
  there4: l$,
  therefore: u$,
  Therefore: p$,
  Theta: d$,
  theta: f$,
  thetasym: m$,
  thetav: h$,
  thickapprox: g$,
  thicksim: y$,
  ThickSpace: v$,
  ThinSpace: b$,
  thinsp: x$,
  thkap: w$,
  thksim: E$,
  THORN: T$,
  thorn: S$,
  tilde: N$,
  Tilde: O$,
  TildeEqual: A$,
  TildeFullEqual: _$,
  TildeTilde: D$,
  timesbar: L$,
  timesb: C$,
  times: R$,
  timesd: P$,
  tint: I$,
  toea: k$,
  topbot: F$,
  topcir: q$,
  top: M$,
  Topf: j$,
  topf: U$,
  topfork: B$,
  tosa: $$,
  tprime: V$,
  trade: z$,
  TRADE: H$,
  triangle: X$,
  triangledown: G$,
  triangleleft: W$,
  trianglelefteq: Y$,
  triangleq: K$,
  triangleright: J$,
  trianglerighteq: Q$,
  tridot: Z$,
  trie: e3,
  triminus: t3,
  TripleDot: n3,
  triplus: r3,
  trisb: o3,
  tritime: i3,
  trpezium: s3,
  Tscr: a3,
  tscr: c3,
  TScy: l3,
  tscy: u3,
  TSHcy: p3,
  tshcy: d3,
  Tstrok: f3,
  tstrok: m3,
  twixt: h3,
  twoheadleftarrow: g3,
  twoheadrightarrow: y3,
  Uacute: v3,
  uacute: b3,
  uarr: x3,
  Uarr: w3,
  uArr: E3,
  Uarrocir: T3,
  Ubrcy: S3,
  ubrcy: N3,
  Ubreve: O3,
  ubreve: A3,
  Ucirc: _3,
  ucirc: D3,
  Ucy: L3,
  ucy: C3,
  udarr: R3,
  Udblac: P3,
  udblac: I3,
  udhar: k3,
  ufisht: F3,
  Ufr: q3,
  ufr: M3,
  Ugrave: j3,
  ugrave: U3,
  uHar: B3,
  uharl: $3,
  uharr: V3,
  uhblk: z3,
  ulcorn: H3,
  ulcorner: X3,
  ulcrop: G3,
  ultri: W3,
  Umacr: Y3,
  umacr: K3,
  uml: J3,
  UnderBar: Q3,
  UnderBrace: Z3,
  UnderBracket: eV,
  UnderParenthesis: tV,
  Union: nV,
  UnionPlus: rV,
  Uogon: oV,
  uogon: iV,
  Uopf: sV,
  uopf: aV,
  UpArrowBar: cV,
  uparrow: lV,
  UpArrow: uV,
  Uparrow: pV,
  UpArrowDownArrow: dV,
  updownarrow: fV,
  UpDownArrow: mV,
  Updownarrow: hV,
  UpEquilibrium: gV,
  upharpoonleft: yV,
  upharpoonright: vV,
  uplus: bV,
  UpperLeftArrow: xV,
  UpperRightArrow: wV,
  upsi: EV,
  Upsi: TV,
  upsih: SV,
  Upsilon: NV,
  upsilon: OV,
  UpTeeArrow: AV,
  UpTee: _V,
  upuparrows: DV,
  urcorn: LV,
  urcorner: CV,
  urcrop: RV,
  Uring: PV,
  uring: IV,
  urtri: kV,
  Uscr: FV,
  uscr: qV,
  utdot: MV,
  Utilde: jV,
  utilde: UV,
  utri: BV,
  utrif: $V,
  uuarr: VV,
  Uuml: zV,
  uuml: HV,
  uwangle: XV,
  vangrt: GV,
  varepsilon: WV,
  varkappa: YV,
  varnothing: KV,
  varphi: JV,
  varpi: QV,
  varpropto: ZV,
  varr: e8,
  vArr: t8,
  varrho: n8,
  varsigma: r8,
  varsubsetneq: o8,
  varsubsetneqq: i8,
  varsupsetneq: s8,
  varsupsetneqq: a8,
  vartheta: c8,
  vartriangleleft: l8,
  vartriangleright: u8,
  vBar: p8,
  Vbar: d8,
  vBarv: f8,
  Vcy: m8,
  vcy: h8,
  vdash: g8,
  vDash: y8,
  Vdash: v8,
  VDash: b8,
  Vdashl: x8,
  veebar: w8,
  vee: E8,
  Vee: T8,
  veeeq: S8,
  vellip: N8,
  verbar: O8,
  Verbar: A8,
  vert: _8,
  Vert: D8,
  VerticalBar: L8,
  VerticalLine: C8,
  VerticalSeparator: R8,
  VerticalTilde: P8,
  VeryThinSpace: I8,
  Vfr: k8,
  vfr: F8,
  vltri: q8,
  vnsub: M8,
  vnsup: j8,
  Vopf: U8,
  vopf: B8,
  vprop: $8,
  vrtri: V8,
  Vscr: z8,
  vscr: H8,
  vsubnE: X8,
  vsubne: G8,
  vsupnE: W8,
  vsupne: Y8,
  Vvdash: K8,
  vzigzag: J8,
  Wcirc: Q8,
  wcirc: Z8,
  wedbar: ez,
  wedge: tz,
  Wedge: nz,
  wedgeq: rz,
  weierp: oz,
  Wfr: iz,
  wfr: sz,
  Wopf: az,
  wopf: cz,
  wp: lz,
  wr: uz,
  wreath: pz,
  Wscr: dz,
  wscr: fz,
  xcap: mz,
  xcirc: hz,
  xcup: gz,
  xdtri: yz,
  Xfr: vz,
  xfr: bz,
  xharr: xz,
  xhArr: wz,
  Xi: Ez,
  xi: Tz,
  xlarr: Sz,
  xlArr: Nz,
  xmap: Oz,
  xnis: Az,
  xodot: _z,
  Xopf: Dz,
  xopf: Lz,
  xoplus: Cz,
  xotime: Rz,
  xrarr: Pz,
  xrArr: Iz,
  Xscr: kz,
  xscr: Fz,
  xsqcup: qz,
  xuplus: Mz,
  xutri: jz,
  xvee: Uz,
  xwedge: Bz,
  Yacute: $z,
  yacute: Vz,
  YAcy: zz,
  yacy: Hz,
  Ycirc: Xz,
  ycirc: Gz,
  Ycy: Wz,
  ycy: Yz,
  yen: Kz,
  Yfr: Jz,
  yfr: Qz,
  YIcy: Zz,
  yicy: e4,
  Yopf: t4,
  yopf: n4,
  Yscr: r4,
  yscr: o4,
  YUcy: i4,
  yucy: s4,
  yuml: a4,
  Yuml: c4,
  Zacute: l4,
  zacute: u4,
  Zcaron: p4,
  zcaron: d4,
  Zcy: f4,
  zcy: m4,
  Zdot: h4,
  zdot: g4,
  zeetrf: y4,
  ZeroWidthSpace: v4,
  Zeta: b4,
  zeta: x4,
  zfr: w4,
  Zfr: E4,
  ZHcy: T4,
  zhcy: S4,
  zigrarr: N4,
  zopf: O4,
  Zopf: A4,
  Zscr: _4,
  zscr: D4,
  zwj: L4,
  zwnj: C4
}, R4 = "Á", P4 = "á", I4 = "Â", k4 = "â", F4 = "´", q4 = "Æ", M4 = "æ", j4 = "À", U4 = "à", B4 = "&", $4 = "&", V4 = "Å", z4 = "å", H4 = "Ã", X4 = "ã", G4 = "Ä", W4 = "ä", Y4 = "¦", K4 = "Ç", J4 = "ç", Q4 = "¸", Z4 = "¢", eH = "©", tH = "©", nH = "¤", rH = "°", oH = "÷", iH = "É", sH = "é", aH = "Ê", cH = "ê", lH = "È", uH = "è", pH = "Ð", dH = "ð", fH = "Ë", mH = "ë", hH = "½", gH = "¼", yH = "¾", vH = ">", bH = ">", xH = "Í", wH = "í", EH = "Î", TH = "î", SH = "¡", NH = "Ì", OH = "ì", AH = "¿", _H = "Ï", DH = "ï", LH = "«", CH = "<", RH = "<", PH = "¯", IH = "µ", kH = "·", FH = " ", qH = "¬", MH = "Ñ", jH = "ñ", UH = "Ó", BH = "ó", $H = "Ô", VH = "ô", zH = "Ò", HH = "ò", XH = "ª", GH = "º", WH = "Ø", YH = "ø", KH = "Õ", JH = "õ", QH = "Ö", ZH = "ö", eX = "¶", tX = "±", nX = "£", rX = '"', oX = '"', iX = "»", sX = "®", aX = "®", cX = "§", lX = "­", uX = "¹", pX = "²", dX = "³", fX = "ß", mX = "Þ", hX = "þ", gX = "×", yX = "Ú", vX = "ú", bX = "Û", xX = "û", wX = "Ù", EX = "ù", TX = "¨", SX = "Ü", NX = "ü", OX = "Ý", AX = "ý", _X = "¥", DX = "ÿ", LX = {
  Aacute: R4,
  aacute: P4,
  Acirc: I4,
  acirc: k4,
  acute: F4,
  AElig: q4,
  aelig: M4,
  Agrave: j4,
  agrave: U4,
  amp: B4,
  AMP: $4,
  Aring: V4,
  aring: z4,
  Atilde: H4,
  atilde: X4,
  Auml: G4,
  auml: W4,
  brvbar: Y4,
  Ccedil: K4,
  ccedil: J4,
  cedil: Q4,
  cent: Z4,
  copy: eH,
  COPY: tH,
  curren: nH,
  deg: rH,
  divide: oH,
  Eacute: iH,
  eacute: sH,
  Ecirc: aH,
  ecirc: cH,
  Egrave: lH,
  egrave: uH,
  ETH: pH,
  eth: dH,
  Euml: fH,
  euml: mH,
  frac12: hH,
  frac14: gH,
  frac34: yH,
  gt: vH,
  GT: bH,
  Iacute: xH,
  iacute: wH,
  Icirc: EH,
  icirc: TH,
  iexcl: SH,
  Igrave: NH,
  igrave: OH,
  iquest: AH,
  Iuml: _H,
  iuml: DH,
  laquo: LH,
  lt: CH,
  LT: RH,
  macr: PH,
  micro: IH,
  middot: kH,
  nbsp: FH,
  not: qH,
  Ntilde: MH,
  ntilde: jH,
  Oacute: UH,
  oacute: BH,
  Ocirc: $H,
  ocirc: VH,
  Ograve: zH,
  ograve: HH,
  ordf: XH,
  ordm: GH,
  Oslash: WH,
  oslash: YH,
  Otilde: KH,
  otilde: JH,
  Ouml: QH,
  ouml: ZH,
  para: eX,
  plusmn: tX,
  pound: nX,
  quot: rX,
  QUOT: oX,
  raquo: iX,
  reg: sX,
  REG: aX,
  sect: cX,
  shy: lX,
  sup1: uX,
  sup2: pX,
  sup3: dX,
  szlig: fX,
  THORN: mX,
  thorn: hX,
  times: gX,
  Uacute: yX,
  uacute: vX,
  Ucirc: bX,
  ucirc: xX,
  Ugrave: wX,
  ugrave: EX,
  uml: TX,
  Uuml: SX,
  uuml: NX,
  Yacute: OX,
  yacute: AX,
  yen: _X,
  yuml: DX
}, CX = "&", RX = "'", PX = ">", IX = "<", kX = '"', Fc = {
  amp: CX,
  apos: RX,
  gt: PX,
  lt: IX,
  quot: kX
};
var Ai = {};
const FX = {
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
var qX = z && z.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ai, "__esModule", { value: !0 });
var Hs = qX(FX), MX = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.fromCodePoint || function(t) {
    var e = "";
    return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), e += String.fromCharCode(t), e;
  }
);
function jX(t) {
  return t >= 55296 && t <= 57343 || t > 1114111 ? "�" : (t in Hs.default && (t = Hs.default[t]), MX(t));
}
Ai.default = jX;
var mr = z && z.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.decodeHTML = lt.decodeHTMLStrict = lt.decodeXML = void 0;
var Ho = mr(kc), UX = mr(LX), BX = mr(Fc), Xs = mr(Ai), $X = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
lt.decodeXML = qc(BX.default);
lt.decodeHTMLStrict = qc(Ho.default);
function qc(t) {
  var e = Mc(t);
  return function(n) {
    return String(n).replace($X, e);
  };
}
var Gs = function(t, e) {
  return t < e ? 1 : -1;
};
lt.decodeHTML = function() {
  for (var t = Object.keys(UX.default).sort(Gs), e = Object.keys(Ho.default).sort(Gs), n = 0, r = 0; n < e.length; n++)
    t[r] === e[n] ? (e[n] += ";?", r++) : e[n] += ";";
  var o = new RegExp("&(?:" + e.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), i = Mc(Ho.default);
  function s(a) {
    return a.substr(-1) !== ";" && (a += ";"), i(a);
  }
  return function(a) {
    return String(a).replace(o, s);
  };
}();
function Mc(t) {
  return function(n) {
    if (n.charAt(1) === "#") {
      var r = n.charAt(2);
      return r === "X" || r === "x" ? Xs.default(parseInt(n.substr(3), 16)) : Xs.default(parseInt(n.substr(2), 10));
    }
    return t[n.slice(1, -1)] || n;
  };
}
var Be = {}, jc = z && z.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.escapeUTF8 = Be.escape = Be.encodeNonAsciiHTML = Be.encodeHTML = Be.encodeXML = void 0;
var VX = jc(Fc), Uc = $c(VX.default), Bc = Vc(Uc);
Be.encodeXML = Xc(Uc);
var zX = jc(kc), _i = $c(zX.default), HX = Vc(_i);
Be.encodeHTML = GX(_i, HX);
Be.encodeNonAsciiHTML = Xc(_i);
function $c(t) {
  return Object.keys(t).sort().reduce(function(e, n) {
    return e[t[n]] = "&" + n + ";", e;
  }, {});
}
function Vc(t) {
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
var zc = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, XX = (
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
  return "&#x" + (t.length > 1 ? XX(t) : t.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function GX(t, e) {
  return function(n) {
    return n.replace(e, function(r) {
      return t[r];
    }).replace(zc, hr);
  };
}
var Hc = new RegExp(Bc.source + "|" + zc.source, "g");
function WX(t) {
  return t.replace(Hc, hr);
}
Be.escape = WX;
function YX(t) {
  return t.replace(Bc, hr);
}
Be.escapeUTF8 = YX;
function Xc(t) {
  return function(e) {
    return e.replace(Hc, function(n) {
      return t[n] || hr(n);
    });
  };
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.decodeXMLStrict = t.decodeHTML5Strict = t.decodeHTML4Strict = t.decodeHTML5 = t.decodeHTML4 = t.decodeHTMLStrict = t.decodeHTML = t.decodeXML = t.encodeHTML5 = t.encodeHTML4 = t.escapeUTF8 = t.escape = t.encodeNonAsciiHTML = t.encodeHTML = t.encodeXML = t.encode = t.decodeStrict = t.decode = void 0;
  var e = lt, n = Be;
  function r(c, d) {
    return (!d || d <= 0 ? e.decodeXML : e.decodeHTML)(c);
  }
  t.decode = r;
  function o(c, d) {
    return (!d || d <= 0 ? e.decodeXML : e.decodeHTMLStrict)(c);
  }
  t.decodeStrict = o;
  function i(c, d) {
    return (!d || d <= 0 ? n.encodeXML : n.encodeHTML)(c);
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
})(Ic);
const pt = Pc.exports = {}, KX = Ic, JX = it;
pt.stripHtml = function(t) {
  return t = t.replace(/([^\n])<\/?(h|br|p|ul|ol|li|blockquote|section|table|tr|div)(?:.|\n)*?>([^\n])/gm, `$1
$3`), t = t.replace(/<(?:.|\n)*?>/gm, ""), t;
};
pt.getSnippet = function(t) {
  return KX.decodeHTML(pt.stripHtml(t)).trim();
};
pt.getLink = function(t, e, n) {
  if (t) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].$.rel === e) return t[r].$.href;
    if (t[n]) return t[n].$.href;
  }
};
pt.getContent = function(t) {
  return typeof t._ == "string" ? t._ : typeof t == "object" ? new JX.Builder({ headless: !0, explicitRoot: !0, rootName: "div", renderOpts: { pretty: !1 } }).buildObject(t) : t;
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
const QX = "utf8", ZX = /(encoding|charset)\s*=\s*(\S+)/, e6 = ["ascii", "utf8", "utf16le", "ucs2", "base64", "latin1", "binary", "hex"], t6 = {
  "utf-8": "utf8",
  "iso-8859-1": "latin1"
};
pt.getEncodingFromContentType = function(t) {
  t = t || "";
  let n = (t.match(ZX) || [])[2] || "";
  return n = n.toLowerCase(), n = t6[n] || n, (!n || e6.indexOf(n) === -1) && (n = QX), n;
};
var n6 = Pc.exports;
const r6 = lr, o6 = ur, i6 = it, Ws = Tn, In = fp, xe = n6, s6 = {
  "User-Agent": "rss-parser",
  Accept: "application/rss+xml"
}, a6 = 5, c6 = 6e4;
let l6 = class {
  constructor(e = {}) {
    e.headers = e.headers || {}, e.xml2js = e.xml2js || {}, e.customFields = e.customFields || {}, e.customFields.item = e.customFields.item || [], e.customFields.feed = e.customFields.feed || [], e.requestOptions = e.requestOptions || {}, e.maxRedirects || (e.maxRedirects = a6), e.timeout || (e.timeout = c6), this.options = e, this.xmlParser = new i6.Parser(this.options.xml2js);
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
    let o = "", i = e.indexOf("https") === 0 ? o6.get : r6.get, s = Ws.parse(e), a = Object.assign({}, s6, this.options.headers), c = null, d = new Promise((l, u) => {
      const p = Object.assign({ headers: a }, s, this.options.requestOptions);
      i(p, (f) => {
        if (this.options.maxRedirects && f.statusCode >= 300 && f.statusCode < 400 && f.headers.location) {
          if (r === this.options.maxRedirects)
            return u(new Error("Too many redirects"));
          {
            const x = Ws.resolve(e, f.headers.location);
            return this.parseURL(x, null, r + 1).then(l, u);
          }
        } else if (f.statusCode >= 300)
          return u(new Error("Status code " + f.statusCode));
        let b = xe.getEncodingFromContentType(f.headers["content-type"]);
        f.setEncoding(b), f.on("data", (x) => {
          o += x;
        }), f.on("end", () => this.parseString(o).then(l, u));
      }).on("error", u), c = setTimeout(() => u(new Error("Request timed out after " + this.options.timeout + "ms")), this.options.timeout);
    }).then((l) => (clearTimeout(c), Promise.resolve(l)), (l) => (clearTimeout(c), Promise.reject(l)));
    return d = xe.maybePromisify(n, d), d;
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
var u6 = l6, p6 = u6;
const d6 = /* @__PURE__ */ on(p6);
function Gc(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: f6 } = Object.prototype, { getPrototypeOf: Di } = Object, { iterator: gr, toStringTag: Wc } = Symbol, yr = /* @__PURE__ */ ((t) => (e) => {
  const n = f6.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), We = (t) => (t = t.toLowerCase(), (e) => yr(e) === t), vr = (t) => (e) => typeof e === t, { isArray: sn } = Array, Zt = vr("undefined");
function Sn(t) {
  return t !== null && !Zt(t) && t.constructor !== null && !Zt(t.constructor) && Me(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Yc = We("ArrayBuffer");
function m6(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Yc(t.buffer), e;
}
const h6 = vr("string"), Me = vr("function"), Kc = vr("number"), Nn = (t) => t !== null && typeof t == "object", g6 = (t) => t === !0 || t === !1, Vn = (t) => {
  if (yr(t) !== "object")
    return !1;
  const e = Di(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Wc in t) && !(gr in t);
}, y6 = (t) => {
  if (!Nn(t) || Sn(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, v6 = We("Date"), b6 = We("File"), x6 = We("Blob"), w6 = We("FileList"), E6 = (t) => Nn(t) && Me(t.pipe), T6 = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Me(t.append) && ((e = yr(t)) === "formdata" || // detect form-data instance
  e === "object" && Me(t.toString) && t.toString() === "[object FormData]"));
}, S6 = We("URLSearchParams"), [N6, O6, A6, _6] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(We), D6 = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function On(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), sn(t))
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
function Jc(t, e) {
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
const Ot = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Qc = (t) => !Zt(t) && t !== Ot;
function Xo() {
  const { caseless: t, skipUndefined: e } = Qc(this) && this || {}, n = {}, r = (o, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const s = t && Jc(n, i) || i;
    Vn(n[s]) && Vn(o) ? n[s] = Xo(n[s], o) : Vn(o) ? n[s] = Xo({}, o) : sn(o) ? n[s] = o.slice() : (!e || !Zt(o)) && (n[s] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && On(arguments[o], r);
  return n;
}
const L6 = (t, e, n, { allOwnKeys: r } = {}) => (On(
  e,
  (o, i) => {
    n && Me(o) ? Object.defineProperty(t, i, {
      value: Gc(o, n),
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
), t), C6 = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), R6 = (t, e, n, r) => {
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
}, P6 = (t, e, n, r) => {
  let o, i, s;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, t, e)) && !a[s] && (e[s] = t[s], a[s] = !0);
    t = n !== !1 && Di(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, I6 = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, k6 = (t) => {
  if (!t) return null;
  if (sn(t)) return t;
  let e = t.length;
  if (!Kc(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, F6 = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Di(Uint8Array)), q6 = (t, e) => {
  const r = (t && t[gr]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, M6 = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, j6 = We("HTMLFormElement"), U6 = (t) => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), Ys = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), B6 = We("RegExp"), Zc = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  On(n, (o, i) => {
    let s;
    (s = e(o, i, t)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(t, r);
}, $6 = (t) => {
  Zc(t, (e, n) => {
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
}, V6 = (t, e) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return sn(t) ? r(t) : r(String(t).split(e)), n;
}, z6 = () => {
}, H6 = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function X6(t) {
  return !!(t && Me(t.append) && t[Wc] === "FormData" && t[gr]);
}
const G6 = (t) => {
  const e = new Array(10), n = (r, o) => {
    if (Nn(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (Sn(r))
        return r;
      if (!("toJSON" in r)) {
        e[o] = r;
        const i = sn(r) ? [] : {};
        return On(r, (s, a) => {
          const c = n(s, o + 1);
          !Zt(c) && (i[a] = c);
        }), e[o] = void 0, i;
      }
    }
    return r;
  };
  return n(t, 0);
}, W6 = We("AsyncFunction"), Y6 = (t) => t && (Nn(t) || Me(t)) && Me(t.then) && Me(t.catch), el = ((t, e) => t ? setImmediate : e ? ((n, r) => (Ot.addEventListener(
  "message",
  ({ source: o, data: i }) => {
    o === Ot && i === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Ot.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Me(Ot.postMessage)), K6 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ot) : typeof process < "u" && process.nextTick || el, J6 = (t) => t != null && Me(t[gr]), N = {
  isArray: sn,
  isArrayBuffer: Yc,
  isBuffer: Sn,
  isFormData: T6,
  isArrayBufferView: m6,
  isString: h6,
  isNumber: Kc,
  isBoolean: g6,
  isObject: Nn,
  isPlainObject: Vn,
  isEmptyObject: y6,
  isReadableStream: N6,
  isRequest: O6,
  isResponse: A6,
  isHeaders: _6,
  isUndefined: Zt,
  isDate: v6,
  isFile: b6,
  isBlob: x6,
  isRegExp: B6,
  isFunction: Me,
  isStream: E6,
  isURLSearchParams: S6,
  isTypedArray: F6,
  isFileList: w6,
  forEach: On,
  merge: Xo,
  extend: L6,
  trim: D6,
  stripBOM: C6,
  inherits: R6,
  toFlatObject: P6,
  kindOf: yr,
  kindOfTest: We,
  endsWith: I6,
  toArray: k6,
  forEachEntry: q6,
  matchAll: M6,
  isHTMLForm: j6,
  hasOwnProperty: Ys,
  hasOwnProp: Ys,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Zc,
  freezeMethods: $6,
  toObjectSet: V6,
  toCamelCase: U6,
  noop: z6,
  toFiniteNumber: H6,
  findKey: Jc,
  global: Ot,
  isContextDefined: Qc,
  isSpecCompliantForm: X6,
  toJSONObject: G6,
  isAsyncFn: W6,
  isThenable: Y6,
  setImmediate: el,
  asap: K6,
  isIterable: J6
};
let F = class tl extends Error {
  static from(e, n, r, o, i, s) {
    const a = new tl(e.message, n || e.code, r, o, i);
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
var nl = Le.Stream, Q6 = bt, Z6 = Ye;
function Ye() {
  this.source = null, this.dataSize = 0, this.maxDataSize = 1024 * 1024, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
}
Q6.inherits(Ye, nl);
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
  var t = nl.prototype.pipe.apply(this, arguments);
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
var eG = bt, rl = Le.Stream, Ks = Z6, tG = le;
function le() {
  this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2 * 1024 * 1024, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
}
eG.inherits(le, rl);
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
    if (!(t instanceof Ks)) {
      var n = Ks.create(t, {
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
  return rl.prototype.pipe.call(this, t, e), this.resume(), t;
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
var ol = {};
const nG = {
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
var rG = nG;
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(t) {
  var e = rG, n = Q.extname, r = /^\s*([^;\s]*)(?:;|\s|$)/, o = /^text\//i;
  t.charset = i, t.charsets = { lookup: i }, t.contentType = s, t.extension = a, t.extensions = /* @__PURE__ */ Object.create(null), t.lookup = c, t.types = /* @__PURE__ */ Object.create(null), d(t.extensions, t.types);
  function i(l) {
    if (!l || typeof l != "string")
      return !1;
    var u = r.exec(l), p = u && e[u[1].toLowerCase()];
    return p && p.charset ? p.charset : u && o.test(u[1]) ? "UTF-8" : !1;
  }
  function s(l) {
    if (!l || typeof l != "string")
      return !1;
    var u = l.indexOf("/") === -1 ? t.lookup(l) : l;
    if (!u)
      return !1;
    if (u.indexOf("charset") === -1) {
      var p = t.charset(u);
      p && (u += "; charset=" + p.toLowerCase());
    }
    return u;
  }
  function a(l) {
    if (!l || typeof l != "string")
      return !1;
    var u = r.exec(l), p = u && t.extensions[u[1].toLowerCase()];
    return !p || !p.length ? !1 : p[0];
  }
  function c(l) {
    if (!l || typeof l != "string")
      return !1;
    var u = n("x." + l).toLowerCase().substr(1);
    return u && t.types[u] || !1;
  }
  function d(l, u) {
    var p = ["nginx", "apache", void 0, "iana"];
    Object.keys(e).forEach(function(f) {
      var b = e[f], x = b.extensions;
      if (!(!x || !x.length)) {
        l[f] = x;
        for (var S = 0; S < x.length; S++) {
          var w = x[S];
          if (u[w]) {
            var y = p.indexOf(e[u[w]].source), E = p.indexOf(b.source);
            if (u[w] !== "application/octet-stream" && (y > E || y === E && u[w].substr(0, 12) === "application/"))
              continue;
          }
          u[w] = f;
        }
      }
    });
  }
})(ol);
var oG = iG;
function iG(t) {
  var e = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
  e ? e(t) : setTimeout(t, 0);
}
var Js = oG, il = sG;
function sG(t) {
  var e = !1;
  return Js(function() {
    e = !0;
  }), function(r, o) {
    e ? t(r, o) : Js(function() {
      t(r, o);
    });
  };
}
var sl = aG;
function aG(t) {
  Object.keys(t.jobs).forEach(cG.bind(t)), t.jobs = {};
}
function cG(t) {
  typeof this.jobs[t] == "function" && this.jobs[t]();
}
var Qs = il, lG = sl, al = uG;
function uG(t, e, n, r) {
  var o = n.keyedList ? n.keyedList[n.index] : n.index;
  n.jobs[o] = pG(e, o, t[o], function(i, s) {
    o in n.jobs && (delete n.jobs[o], i ? lG(n) : n.results[o] = s, r(i, n.results));
  });
}
function pG(t, e, n, r) {
  var o;
  return t.length == 2 ? o = t(n, Qs(r)) : o = t(n, e, Qs(r)), o;
}
var cl = dG;
function dG(t, e) {
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
var fG = sl, mG = il, ll = hG;
function hG(t) {
  Object.keys(this.jobs).length && (this.index = this.size, fG(this), mG(t)(null, this.results));
}
var gG = al, yG = cl, vG = ll, bG = xG;
function xG(t, e, n) {
  for (var r = yG(t); r.index < (r.keyedList || t).length; )
    gG(t, e, r, function(o, i) {
      if (o) {
        n(o, i);
        return;
      }
      if (Object.keys(r.jobs).length === 0) {
        n(null, r.results);
        return;
      }
    }), r.index++;
  return vG.bind(r, n);
}
var br = { exports: {} }, Zs = al, wG = cl, EG = ll;
br.exports = TG;
br.exports.ascending = ul;
br.exports.descending = SG;
function TG(t, e, n, r) {
  var o = wG(t, n);
  return Zs(t, e, o, function i(s, a) {
    if (s) {
      r(s, a);
      return;
    }
    if (o.index++, o.index < (o.keyedList || t).length) {
      Zs(t, e, o, i);
      return;
    }
    r(null, o.results);
  }), EG.bind(o, r);
}
function ul(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function SG(t, e) {
  return -1 * ul(t, e);
}
var pl = br.exports, NG = pl, OG = AG;
function AG(t, e, n) {
  return NG(t, e, null, n);
}
var _G = {
  parallel: bG,
  serial: OG,
  serialOrdered: pl
}, dl = Object, DG = Error, LG = EvalError, CG = RangeError, RG = ReferenceError, PG = SyntaxError, Li = TypeError, IG = URIError, kG = Math.abs, FG = Math.floor, qG = Math.max, MG = Math.min, jG = Math.pow, UG = Math.round, BG = Number.isNaN || function(e) {
  return e !== e;
}, $G = BG, VG = function(e) {
  return $G(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, zG = Object.getOwnPropertyDescriptor, zn = zG;
if (zn)
  try {
    zn([], "length");
  } catch {
    zn = null;
  }
var fl = zn, Hn = Object.defineProperty || !1;
if (Hn)
  try {
    Hn({}, "a", { value: 1 });
  } catch {
    Hn = !1;
  }
var HG = Hn, fo, ea;
function ml() {
  return ea || (ea = 1, fo = function() {
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
var mo, ta;
function XG() {
  if (ta) return mo;
  ta = 1;
  var t = typeof Symbol < "u" && Symbol, e = ml();
  return mo = function() {
    return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, mo;
}
var ho, na;
function hl() {
  return na || (na = 1, ho = typeof Reflect < "u" && Reflect.getPrototypeOf || null), ho;
}
var go, ra;
function gl() {
  if (ra) return go;
  ra = 1;
  var t = dl;
  return go = t.getPrototypeOf || null, go;
}
var GG = "Function.prototype.bind called on incompatible ", WG = Object.prototype.toString, YG = Math.max, KG = "[object Function]", oa = function(e, n) {
  for (var r = [], o = 0; o < e.length; o += 1)
    r[o] = e[o];
  for (var i = 0; i < n.length; i += 1)
    r[i + e.length] = n[i];
  return r;
}, JG = function(e, n) {
  for (var r = [], o = n, i = 0; o < e.length; o += 1, i += 1)
    r[i] = e[o];
  return r;
}, QG = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, ZG = function(e) {
  var n = this;
  if (typeof n != "function" || WG.apply(n) !== KG)
    throw new TypeError(GG + n);
  for (var r = JG(arguments, 1), o, i = function() {
    if (this instanceof o) {
      var l = n.apply(
        this,
        oa(r, arguments)
      );
      return Object(l) === l ? l : this;
    }
    return n.apply(
      e,
      oa(r, arguments)
    );
  }, s = YG(0, n.length - r.length), a = [], c = 0; c < s; c++)
    a[c] = "$" + c;
  if (o = Function("binder", "return function (" + QG(a, ",") + "){ return binder.apply(this,arguments); }")(i), n.prototype) {
    var d = function() {
    };
    d.prototype = n.prototype, o.prototype = new d(), d.prototype = null;
  }
  return o;
}, e9 = ZG, xr = Function.prototype.bind || e9, yo, ia;
function Ci() {
  return ia || (ia = 1, yo = Function.prototype.call), yo;
}
var vo, sa;
function yl() {
  return sa || (sa = 1, vo = Function.prototype.apply), vo;
}
var bo, aa;
function t9() {
  return aa || (aa = 1, bo = typeof Reflect < "u" && Reflect && Reflect.apply), bo;
}
var xo, ca;
function n9() {
  if (ca) return xo;
  ca = 1;
  var t = xr, e = yl(), n = Ci(), r = t9();
  return xo = r || t.call(n, e), xo;
}
var wo, la;
function r9() {
  if (la) return wo;
  la = 1;
  var t = xr, e = Li, n = Ci(), r = n9();
  return wo = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new e("a function is required");
    return r(t, n, i);
  }, wo;
}
var Eo, ua;
function o9() {
  if (ua) return Eo;
  ua = 1;
  var t = r9(), e = fl, n;
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
var To, pa;
function i9() {
  if (pa) return To;
  pa = 1;
  var t = hl(), e = gl(), n = o9();
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
var s9 = Function.prototype.call, a9 = Object.prototype.hasOwnProperty, c9 = xr, Ri = c9.call(s9, a9), X, l9 = dl, u9 = DG, p9 = LG, d9 = CG, f9 = RG, en = PG, Wt = Li, m9 = IG, h9 = kG, g9 = FG, y9 = qG, v9 = MG, b9 = jG, x9 = UG, w9 = VG, vl = Function, So = function(t) {
  try {
    return vl('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, mn = fl, E9 = HG, No = function() {
  throw new Wt();
}, T9 = mn ? function() {
  try {
    return arguments.callee, No;
  } catch {
    try {
      return mn(arguments, "callee").get;
    } catch {
      return No;
    }
  }
}() : No, Bt = XG()(), ye = i9(), S9 = gl(), N9 = hl(), bl = yl(), An = Ci(), Vt = {}, O9 = typeof Uint8Array > "u" || !ye ? X : ye(Uint8Array), Rt = {
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
  "%Error%": u9,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": p9,
  "%Float16Array%": typeof Float16Array > "u" ? X : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? X : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? X : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? X : FinalizationRegistry,
  "%Function%": vl,
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
  "%Object%": l9,
  "%Object.getOwnPropertyDescriptor%": mn,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? X : Promise,
  "%Proxy%": typeof Proxy > "u" ? X : Proxy,
  "%RangeError%": d9,
  "%ReferenceError%": f9,
  "%Reflect%": typeof Reflect > "u" ? X : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? X : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Bt || !ye ? X : ye((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? X : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Bt && ye ? ye(""[Symbol.iterator]()) : X,
  "%Symbol%": Bt ? Symbol : X,
  "%SyntaxError%": en,
  "%ThrowTypeError%": T9,
  "%TypedArray%": O9,
  "%TypeError%": Wt,
  "%Uint8Array%": typeof Uint8Array > "u" ? X : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? X : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? X : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? X : Uint32Array,
  "%URIError%": m9,
  "%WeakMap%": typeof WeakMap > "u" ? X : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? X : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? X : WeakSet,
  "%Function.prototype.call%": An,
  "%Function.prototype.apply%": bl,
  "%Object.defineProperty%": E9,
  "%Object.getPrototypeOf%": S9,
  "%Math.abs%": h9,
  "%Math.floor%": g9,
  "%Math.max%": y9,
  "%Math.min%": v9,
  "%Math.pow%": b9,
  "%Math.round%": x9,
  "%Math.sign%": w9,
  "%Reflect.getPrototypeOf%": N9
};
if (ye)
  try {
    null.error;
  } catch (t) {
    var A9 = ye(ye(t));
    Rt["%Error.prototype%"] = A9;
  }
var _9 = function t(e) {
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
}, da = {
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
}, _n = xr, tr = Ri, D9 = _n.call(An, Array.prototype.concat), L9 = _n.call(bl, Array.prototype.splice), fa = _n.call(An, String.prototype.replace), nr = _n.call(An, String.prototype.slice), C9 = _n.call(An, RegExp.prototype.exec), R9 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, P9 = /\\(\\)?/g, I9 = function(e) {
  var n = nr(e, 0, 1), r = nr(e, -1);
  if (n === "%" && r !== "%")
    throw new en("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new en("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return fa(e, R9, function(i, s, a, c) {
    o[o.length] = a ? fa(c, P9, "$1") : s || i;
  }), o;
}, k9 = function(e, n) {
  var r = e, o;
  if (tr(da, r) && (o = da[r], r = "%" + o[0] + "%"), tr(Rt, r)) {
    var i = Rt[r];
    if (i === Vt && (i = _9(r)), typeof i > "u" && !n)
      throw new Wt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: i
    };
  }
  throw new en("intrinsic " + e + " does not exist!");
}, F9 = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new Wt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Wt('"allowMissing" argument must be a boolean');
  if (C9(/^%?[^%]*%?$/, e) === null)
    throw new en("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = I9(e), o = r.length > 0 ? r[0] : "", i = k9("%" + o + "%", n), s = i.name, a = i.value, c = !1, d = i.alias;
  d && (o = d[0], L9(r, D9([0, 1], d)));
  for (var l = 1, u = !0; l < r.length; l += 1) {
    var p = r[l], h = nr(p, 0, 1), f = nr(p, -1);
    if ((h === '"' || h === "'" || h === "`" || f === '"' || f === "'" || f === "`") && h !== f)
      throw new en("property names with quotes must have matching quotes");
    if ((p === "constructor" || !u) && (c = !0), o += "." + p, s = "%" + o + "%", tr(Rt, s))
      a = Rt[s];
    else if (a != null) {
      if (!(p in a)) {
        if (!n)
          throw new Wt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (mn && l + 1 >= r.length) {
        var b = mn(a, p);
        u = !!b, u && "get" in b && !("originalValue" in b.get) ? a = b.get : a = a[p];
      } else
        u = tr(a, p), a = a[p];
      u && !c && (Rt[s] = a);
    }
  }
  return a;
}, Oo, ma;
function q9() {
  if (ma) return Oo;
  ma = 1;
  var t = ml();
  return Oo = function() {
    return t() && !!Symbol.toStringTag;
  }, Oo;
}
var M9 = F9, ha = M9("%Object.defineProperty%", !0), j9 = q9()(), U9 = Ri, B9 = Li, kn = j9 ? Symbol.toStringTag : null, $9 = function(e, n) {
  var r = arguments.length > 2 && !!arguments[2] && arguments[2].force, o = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
  if (typeof r < "u" && typeof r != "boolean" || typeof o < "u" && typeof o != "boolean")
    throw new B9("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
  kn && (r || !U9(e, kn)) && (ha ? ha(e, kn, {
    configurable: !o,
    enumerable: !1,
    value: n,
    writable: !1
  }) : e[kn] = n);
}, V9 = function(t, e) {
  return Object.keys(e).forEach(function(n) {
    t[n] = t[n] || e[n];
  }), t;
}, Pi = tG, z9 = bt, Ao = Q, H9 = lr, X9 = ur, G9 = Tn.parse, W9 = pi, Y9 = Le.Stream, K9 = xc, _o = ol, J9 = _G, Q9 = $9, vt = Ri, Go = V9;
function J(t) {
  if (!(this instanceof J))
    return new J(t);
  this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], Pi.call(this), t = t || {};
  for (var e in t)
    this[e] = t[e];
}
z9.inherits(J, Pi);
J.LINE_BREAK = `\r
`;
J.DEFAULT_CONTENT_TYPE = "application/octet-stream";
J.prototype.append = function(t, e, n) {
  n = n || {}, typeof n == "string" && (n = { filename: n });
  var r = Pi.prototype.append.bind(this);
  if ((typeof e == "number" || e == null) && (e = String(e)), Array.isArray(e)) {
    this._error(new Error("Arrays are not supported."));
    return;
  }
  var o = this._multiPartHeader(t, e, n), i = this._multiPartFooter();
  r(o), r(e), r(i), this._trackLength(o, e, n);
};
J.prototype._trackLength = function(t, e, n) {
  var r = 0;
  n.knownLength != null ? r += Number(n.knownLength) : Buffer.isBuffer(e) ? r = e.length : typeof e == "string" && (r = Buffer.byteLength(e)), this._valueLength += r, this._overheadLength += Buffer.byteLength(t) + J.LINE_BREAK.length, !(!e || !e.path && !(e.readable && vt(e, "httpVersion")) && !(e instanceof Y9)) && (n.knownLength || this._valuesToMeasure.push(e));
};
J.prototype._lengthRetriever = function(t, e) {
  vt(t, "fd") ? t.end != null && t.end != 1 / 0 && t.start != null ? e(null, t.end + 1 - (t.start ? t.start : 0)) : W9.stat(t.path, function(n, r) {
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
J.prototype._multiPartHeader = function(t, e, n) {
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
      Array.isArray(a) || (a = [a]), a.length && (i += c + ": " + a.join("; ") + J.LINE_BREAK);
    }
  return "--" + this.getBoundary() + J.LINE_BREAK + i + J.LINE_BREAK;
};
J.prototype._getContentDisposition = function(t, e) {
  var n;
  if (typeof e.filepath == "string" ? n = Ao.normalize(e.filepath).replace(/\\/g, "/") : e.filename || t && (t.name || t.path) ? n = Ao.basename(e.filename || t && (t.name || t.path)) : t && t.readable && vt(t, "httpVersion") && (n = Ao.basename(t.client._httpMessage.path || "")), n)
    return 'filename="' + n + '"';
};
J.prototype._getContentType = function(t, e) {
  var n = e.contentType;
  return !n && t && t.name && (n = _o.lookup(t.name)), !n && t && t.path && (n = _o.lookup(t.path)), !n && t && t.readable && vt(t, "httpVersion") && (n = t.headers["content-type"]), !n && (e.filepath || e.filename) && (n = _o.lookup(e.filepath || e.filename)), !n && t && typeof t == "object" && (n = J.DEFAULT_CONTENT_TYPE), n;
};
J.prototype._multiPartFooter = function() {
  return (function(t) {
    var e = J.LINE_BREAK, n = this._streams.length === 0;
    n && (e += this._lastBoundary()), t(e);
  }).bind(this);
};
J.prototype._lastBoundary = function() {
  return "--" + this.getBoundary() + "--" + J.LINE_BREAK;
};
J.prototype.getHeaders = function(t) {
  var e, n = {
    "content-type": "multipart/form-data; boundary=" + this.getBoundary()
  };
  for (e in t)
    vt(t, e) && (n[e.toLowerCase()] = t[e]);
  return n;
};
J.prototype.setBoundary = function(t) {
  if (typeof t != "string")
    throw new TypeError("FormData boundary must be a string");
  this._boundary = t;
};
J.prototype.getBoundary = function() {
  return this._boundary || this._generateBoundary(), this._boundary;
};
J.prototype.getBuffer = function() {
  for (var t = new Buffer.alloc(0), e = this.getBoundary(), n = 0, r = this._streams.length; n < r; n++)
    typeof this._streams[n] != "function" && (Buffer.isBuffer(this._streams[n]) ? t = Buffer.concat([t, this._streams[n]]) : t = Buffer.concat([t, Buffer.from(this._streams[n])]), (typeof this._streams[n] != "string" || this._streams[n].substring(2, e.length + 2) !== e) && (t = Buffer.concat([t, Buffer.from(J.LINE_BREAK)])));
  return Buffer.concat([t, Buffer.from(this._lastBoundary())]);
};
J.prototype._generateBoundary = function() {
  this._boundary = "--------------------------" + K9.randomBytes(12).toString("hex");
};
J.prototype.getLengthSync = function() {
  var t = this._overheadLength + this._valueLength;
  return this._streams.length && (t += this._lastBoundary().length), this.hasKnownLength() || this._error(new Error("Cannot calculate proper length in synchronous way.")), t;
};
J.prototype.hasKnownLength = function() {
  var t = !0;
  return this._valuesToMeasure.length && (t = !1), t;
};
J.prototype.getLength = function(t) {
  var e = this._overheadLength + this._valueLength;
  if (this._streams.length && (e += this._lastBoundary().length), !this._valuesToMeasure.length) {
    process.nextTick(t.bind(this, null, e));
    return;
  }
  J9.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, r) {
    if (n) {
      t(n);
      return;
    }
    r.forEach(function(o) {
      e += o;
    }), t(null, e);
  });
};
J.prototype.submit = function(t, e) {
  var n, r, o = { method: "post" };
  return typeof t == "string" ? (t = G9(t), r = Go({
    port: t.port,
    path: t.pathname,
    host: t.hostname,
    protocol: t.protocol
  }, o)) : (r = Go(t, o), r.port || (r.port = r.protocol === "https:" ? 443 : 80)), r.headers = this.getHeaders(t.headers), r.protocol === "https:" ? n = X9.request(r) : n = H9.request(r), this.getLength((function(i, s) {
    if (i && i !== "Unknown stream") {
      this._error(i);
      return;
    }
    if (s && n.setHeader("Content-Length", s), this.pipe(n), e) {
      var a, c = function(d, l) {
        return n.removeListener("error", c), n.removeListener("response", a), e.call(this, d, l);
      };
      a = c.bind(this, null), n.on("error", c), n.on("response", a);
    }
  }).bind(this)), n;
};
J.prototype._error = function(t) {
  this.error || (this.error = t, this.pause(), this.emit("error", t));
};
J.prototype.toString = function() {
  return "[object FormData]";
};
Q9(J.prototype, "FormData");
var Z9 = J;
const xl = /* @__PURE__ */ on(Z9);
function Wo(t) {
  return N.isPlainObject(t) || N.isArray(t);
}
function wl(t) {
  return N.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function ga(t, e, n) {
  return t ? t.concat(e).map(function(o, i) {
    return o = wl(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : e;
}
function e7(t) {
  return N.isArray(t) && !t.some(Wo);
}
const t7 = N.toFlatObject(N, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function wr(t, e, n) {
  if (!N.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new (xl || FormData)(), n = N.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, x) {
    return !N.isUndefined(x[b]);
  });
  const r = n.metaTokens, o = n.visitor || l, i = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(e);
  if (!N.isFunction(o))
    throw new TypeError("visitor must be a function");
  function d(f) {
    if (f === null) return "";
    if (N.isDate(f))
      return f.toISOString();
    if (N.isBoolean(f))
      return f.toString();
    if (!c && N.isBlob(f))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(f) || N.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, b, x) {
    let S = f;
    if (f && !x && typeof f == "object") {
      if (N.endsWith(b, "{}"))
        b = r ? b : b.slice(0, -2), f = JSON.stringify(f);
      else if (N.isArray(f) && e7(f) || (N.isFileList(f) || N.endsWith(b, "[]")) && (S = N.toArray(f)))
        return b = wl(b), S.forEach(function(y, E) {
          !(N.isUndefined(y) || y === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ga([b], E, i) : s === null ? b : b + "[]",
            d(y)
          );
        }), !1;
    }
    return Wo(f) ? !0 : (e.append(ga(x, b, i), d(f)), !1);
  }
  const u = [], p = Object.assign(t7, {
    defaultVisitor: l,
    convertValue: d,
    isVisitable: Wo
  });
  function h(f, b) {
    if (!N.isUndefined(f)) {
      if (u.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      u.push(f), N.forEach(f, function(S, w) {
        (!(N.isUndefined(S) || S === null) && o.call(
          e,
          S,
          N.isString(w) ? w.trim() : w,
          b,
          p
        )) === !0 && h(S, b ? b.concat(w) : [w]);
      }), u.pop();
    }
  }
  if (!N.isObject(t))
    throw new TypeError("data must be an object");
  return h(t), e;
}
function ya(t) {
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
function El(t, e) {
  this._pairs = [], t && wr(t, this, e);
}
const Tl = El.prototype;
Tl.append = function(e, n) {
  this._pairs.push([e, n]);
};
Tl.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, ya);
  } : ya;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function n7(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ii(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || n7, o = N.isFunction(n) ? {
    serialize: n
  } : n, i = o && o.serialize;
  let s;
  if (i ? s = i(e, o) : s = N.isURLSearchParams(e) ? e.toString() : new El(e, o).toString(r), s) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class va {
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
}, r7 = Tn.URLSearchParams, Do = "abcdefghijklmnopqrstuvwxyz", ba = "0123456789", Sl = {
  DIGIT: ba,
  ALPHA: Do,
  ALPHA_DIGIT: Do + Do.toUpperCase() + ba
}, o7 = (t = 16, e = Sl.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e, o = new Uint32Array(t);
  xc.randomFillSync(o);
  for (let i = 0; i < t; i++)
    n += e[o[i] % r];
  return n;
}, i7 = {
  isNode: !0,
  classes: {
    URLSearchParams: r7,
    FormData: xl,
    Blob: typeof Blob < "u" && Blob || null
  },
  ALPHABET: Sl,
  generateString: o7,
  protocols: ["http", "https", "file", "data"]
}, ki = typeof window < "u" && typeof document < "u", Yo = typeof navigator == "object" && navigator || void 0, s7 = ki && (!Yo || ["ReactNative", "NativeScript", "NS"].indexOf(Yo.product) < 0), a7 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", c7 = ki && window.location.href || "http://localhost", l7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ki,
  hasStandardBrowserEnv: s7,
  hasStandardBrowserWebWorkerEnv: a7,
  navigator: Yo,
  origin: c7
}, Symbol.toStringTag, { value: "Module" })), ce = {
  ...l7,
  ...i7
};
function u7(t, e) {
  return wr(t, new ce.classes.URLSearchParams(), {
    visitor: function(n, r, o, i) {
      return ce.isNode && N.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function p7(t) {
  return N.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function d7(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], e[i] = t[i];
  return e;
}
function Nl(t) {
  function e(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= n.length;
    return s = !s && N.isArray(o) ? o.length : s, c ? (N.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !N.isObject(o[s])) && (o[s] = []), e(n, r, o[s], i) && N.isArray(o[s]) && (o[s] = d7(o[s])), !a);
  }
  if (N.isFormData(t) && N.isFunction(t.entries)) {
    const n = {};
    return N.forEachEntry(t, (r, o) => {
      e(p7(r), o, n, 0);
    }), n;
  }
  return null;
}
function f7(t, e, n) {
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
      return o ? JSON.stringify(Nl(e)) : e;
    if (N.isArrayBuffer(e) || N.isBuffer(e) || N.isStream(e) || N.isFile(e) || N.isBlob(e) || N.isReadableStream(e))
      return e;
    if (N.isArrayBufferView(e))
      return e.buffer;
    if (N.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return u7(e, this.formSerializer).toString();
      if ((a = N.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return wr(
          a ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), f7(e)) : e;
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
const m7 = N.toObjectSet([
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
]), h7 = (t) => {
  const e = {};
  let n, r, o;
  return t && t.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || e[n] && m7[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, xa = Symbol("internals");
function ln(t) {
  return t && String(t).trim().toLowerCase();
}
function Xn(t) {
  return t === !1 || t == null ? t : N.isArray(t) ? t.map(Xn) : String(t);
}
function g7(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const y7 = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
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
function v7(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function b7(t, e) {
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
    function i(a, c, d) {
      const l = ln(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const u = N.findKey(o, l);
      (!u || o[u] === void 0 || d === !0 || d === void 0 && o[u] !== !1) && (o[u || c] = Xn(a));
    }
    const s = (a, c) => N.forEach(a, (d, l) => i(d, l, c));
    if (N.isPlainObject(e) || e instanceof this.constructor)
      s(e, n);
    else if (N.isString(e) && (e = e.trim()) && !y7(e))
      s(h7(e), n);
    else if (N.isObject(e) && N.isIterable(e)) {
      let a = {}, c, d;
      for (const l of e) {
        if (!N.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[d = l[0]] = (c = a[d]) ? N.isArray(c) ? [...c, l[1]] : [c, l[1]] : l[1];
      }
      s(a, n);
    } else
      e != null && i(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = ln(e), e) {
      const r = N.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return g7(o);
        if (N.isFunction(n))
          return n.call(this, o, r);
        if (N.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = ln(e), e) {
      const r = N.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || Lo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = ln(s), s) {
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
      const a = e ? v7(i) : String(i).trim();
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
    const r = (this[xa] = this[xa] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = ln(s);
      r[a] || (b7(o, s), r[a] = !0);
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
function Ol(t) {
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
function Xt(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new F(
    "Request failed with status code " + n.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function x7(t) {
  return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function w7(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Fi(t, e, n) {
  let r = !x7(e);
  return t && (r || n == !1) ? w7(t, e) : e;
}
var Al = {}, E7 = Tn.parse, T7 = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}, S7 = String.prototype.endsWith || function(t) {
  return t.length <= this.length && this.indexOf(t, this.length - t.length) !== -1;
};
function N7(t) {
  var e = typeof t == "string" ? E7(t) : t || {}, n = e.protocol, r = e.host, o = e.port;
  if (typeof r != "string" || !r || typeof n != "string" || (n = n.split(":", 1)[0], r = r.replace(/:\d*$/, ""), o = parseInt(o) || T7[n] || 0, !O7(r, o)))
    return "";
  var i = Gt("npm_config_" + n + "_proxy") || Gt(n + "_proxy") || Gt("npm_config_proxy") || Gt("all_proxy");
  return i && i.indexOf("://") === -1 && (i = n + "://" + i), i;
}
function O7(t, e) {
  var n = (Gt("npm_config_no_proxy") || Gt("no_proxy")).toLowerCase();
  return n ? n === "*" ? !1 : n.split(/[,\s]/).every(function(r) {
    if (!r)
      return !0;
    var o = r.match(/^(.+):(\d+)$/), i = o ? o[1] : r, s = o ? parseInt(o[2]) : 0;
    return s && s !== e ? !0 : /^[.*]/.test(i) ? (i.charAt(0) === "*" && (i = i.slice(1)), !S7.call(t, i)) : t !== i;
  }) : !0;
}
function Gt(t) {
  return process.env[t.toLowerCase()] || process.env[t.toUpperCase()] || "";
}
Al.getProxyForUrl = N7;
var qi = { exports: {} }, Fn = { exports: {} }, qn = { exports: {} }, Ro, wa;
function A7() {
  if (wa) return Ro;
  wa = 1;
  var t = 1e3, e = t * 60, n = e * 60, r = n * 24, o = r * 7, i = r * 365.25;
  Ro = function(l, u) {
    u = u || {};
    var p = typeof l;
    if (p === "string" && l.length > 0)
      return s(l);
    if (p === "number" && isFinite(l))
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
        var p = parseFloat(u[1]), h = (u[2] || "ms").toLowerCase();
        switch (h) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return p * i;
          case "weeks":
          case "week":
          case "w":
            return p * o;
          case "days":
          case "day":
          case "d":
            return p * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return p * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return p * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return p * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return p;
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
    return u >= r ? d(l, u, r, "day") : u >= n ? d(l, u, n, "hour") : u >= e ? d(l, u, e, "minute") : u >= t ? d(l, u, t, "second") : l + " ms";
  }
  function d(l, u, p, h) {
    var f = u >= p * 1.5;
    return Math.round(l / p) + " " + h + (f ? "s" : "");
  }
  return Ro;
}
var Po, Ea;
function _l() {
  if (Ea) return Po;
  Ea = 1;
  function t(e) {
    r.debug = r, r.default = r, r.coerce = d, r.disable = a, r.enable = i, r.enabled = c, r.humanize = A7(), r.destroy = l, Object.keys(e).forEach((u) => {
      r[u] = e[u];
    }), r.names = [], r.skips = [], r.formatters = {};
    function n(u) {
      let p = 0;
      for (let h = 0; h < u.length; h++)
        p = (p << 5) - p + u.charCodeAt(h), p |= 0;
      return r.colors[Math.abs(p) % r.colors.length];
    }
    r.selectColor = n;
    function r(u) {
      let p, h = null, f, b;
      function x(...S) {
        if (!x.enabled)
          return;
        const w = x, y = Number(/* @__PURE__ */ new Date()), E = y - (p || y);
        w.diff = E, w.prev = p, w.curr = y, p = y, S[0] = r.coerce(S[0]), typeof S[0] != "string" && S.unshift("%O");
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
      return x.namespace = u, x.useColors = r.useColors(), x.color = r.selectColor(u), x.extend = o, x.destroy = r.destroy, Object.defineProperty(x, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => h !== null ? h : (f !== r.namespaces && (f = r.namespaces, b = r.enabled(u)), b),
        set: (S) => {
          h = S;
        }
      }), typeof r.init == "function" && r.init(x), x;
    }
    function o(u, p) {
      const h = r(this.namespace + (typeof p > "u" ? ":" : p) + u);
      return h.log = this.log, h;
    }
    function i(u) {
      r.save(u), r.namespaces = u, r.names = [], r.skips = [];
      const p = (typeof u == "string" ? u : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const h of p)
        h[0] === "-" ? r.skips.push(h.slice(1)) : r.names.push(h);
    }
    function s(u, p) {
      let h = 0, f = 0, b = -1, x = 0;
      for (; h < u.length; )
        if (f < p.length && (p[f] === u[h] || p[f] === "*"))
          p[f] === "*" ? (b = f, x = h, f++) : (h++, f++);
        else if (b !== -1)
          f = b + 1, x++, h = x;
        else
          return !1;
      for (; f < p.length && p[f] === "*"; )
        f++;
      return f === p.length;
    }
    function a() {
      const u = [
        ...r.names,
        ...r.skips.map((p) => "-" + p)
      ].join(",");
      return r.enable(""), u;
    }
    function c(u) {
      for (const p of r.skips)
        if (s(u, p))
          return !1;
      for (const p of r.names)
        if (s(u, p))
          return !0;
      return !1;
    }
    function d(u) {
      return u instanceof Error ? u.stack || u.message : u;
    }
    function l() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  return Po = t, Po;
}
var Ta;
function _7() {
  return Ta || (Ta = 1, function(t, e) {
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
      const d = "color: " + this.color;
      c.splice(1, 0, d, "color: inherit");
      let l = 0, u = 0;
      c[0].replace(/%[a-zA-Z%]/g, (p) => {
        p !== "%%" && (l++, p === "%c" && (u = l));
      }), c.splice(u, 0, d);
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
    t.exports = _l()(e);
    const { formatters: a } = t.exports;
    a.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (d) {
        return "[UnexpectedJSONParseError]: " + d.message;
      }
    };
  }(qn, qn.exports)), qn.exports;
}
var Mn = { exports: {} }, Io, Sa;
function D7() {
  return Sa || (Sa = 1, Io = (t, e = process.argv) => {
    const n = t.startsWith("-") ? "" : t.length === 1 ? "-" : "--", r = e.indexOf(n + t), o = e.indexOf("--");
    return r !== -1 && (o === -1 || r < o);
  }), Io;
}
var ko, Na;
function L7() {
  if (Na) return ko;
  Na = 1;
  const t = Ju, e = Tc, n = D7(), { env: r } = process;
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
  function s(c, d) {
    if (o === 0)
      return 0;
    if (n("color=16m") || n("color=full") || n("color=truecolor"))
      return 3;
    if (n("color=256"))
      return 2;
    if (c && !d && o === void 0)
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
    const d = s(c, c && c.isTTY);
    return i(d);
  }
  return ko = {
    supportsColor: a,
    stdout: i(s(!0, e.isatty(1))),
    stderr: i(s(!0, e.isatty(2)))
  }, ko;
}
var Oa;
function C7() {
  return Oa || (Oa = 1, function(t, e) {
    const n = Tc, r = bt;
    e.init = l, e.log = a, e.formatArgs = i, e.save = c, e.load = d, e.useColors = o, e.destroy = r.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), e.colors = [6, 2, 3, 4, 5, 1];
    try {
      const p = L7();
      p && (p.stderr || p).level >= 2 && (e.colors = [
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
    e.inspectOpts = Object.keys(process.env).filter((p) => /^debug_/i.test(p)).reduce((p, h) => {
      const f = h.substring(6).toLowerCase().replace(/_([a-z])/g, (x, S) => S.toUpperCase());
      let b = process.env[h];
      return /^(yes|on|true|enabled)$/i.test(b) ? b = !0 : /^(no|off|false|disabled)$/i.test(b) ? b = !1 : b === "null" ? b = null : b = Number(b), p[f] = b, p;
    }, {});
    function o() {
      return "colors" in e.inspectOpts ? !!e.inspectOpts.colors : n.isatty(process.stderr.fd);
    }
    function i(p) {
      const { namespace: h, useColors: f } = this;
      if (f) {
        const b = this.color, x = "\x1B[3" + (b < 8 ? b : "8;5;" + b), S = `  ${x};1m${h} \x1B[0m`;
        p[0] = S + p[0].split(`
`).join(`
` + S), p.push(x + "m+" + t.exports.humanize(this.diff) + "\x1B[0m");
      } else
        p[0] = s() + h + " " + p[0];
    }
    function s() {
      return e.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function a(...p) {
      return process.stderr.write(r.formatWithOptions(e.inspectOpts, ...p) + `
`);
    }
    function c(p) {
      p ? process.env.DEBUG = p : delete process.env.DEBUG;
    }
    function d() {
      return process.env.DEBUG;
    }
    function l(p) {
      p.inspectOpts = {};
      const h = Object.keys(e.inspectOpts);
      for (let f = 0; f < h.length; f++)
        p.inspectOpts[h[f]] = e.inspectOpts[h[f]];
    }
    t.exports = _l()(e);
    const { formatters: u } = t.exports;
    u.o = function(p) {
      return this.inspectOpts.colors = this.useColors, r.inspect(p, this.inspectOpts).split(`
`).map((h) => h.trim()).join(" ");
    }, u.O = function(p) {
      return this.inspectOpts.colors = this.useColors, r.inspect(p, this.inspectOpts);
    };
  }(Mn, Mn.exports)), Mn.exports;
}
var Aa;
function R7() {
  return Aa || (Aa = 1, typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? Fn.exports = _7() : Fn.exports = C7()), Fn.exports;
}
var un, P7 = function() {
  if (!un) {
    try {
      un = R7()("follow-redirects");
    } catch {
    }
    typeof un != "function" && (un = function() {
    });
  }
  un.apply(null, arguments);
}, Ln = Tn, hn = Ln.URL, I7 = lr, k7 = ur, Mi = Le.Writable, ji = Ec, Dl = P7;
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
var F7 = [
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
), q7 = Cn(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  Jo
), M7 = Cn(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
), j7 = Cn(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
), U7 = Mi.prototype.destroy || Cl;
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
  return zi(this._currentRequest, t), U7.call(this, t), this;
};
je.prototype.write = function(t, e, n) {
  if (this._ending)
    throw new j7();
  if (!Pt(t) && !V7(t))
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  if (qt(e) && (n = e, e = null), t.length === 0) {
    n && n();
    return;
  }
  this._requestBodyLength + t.length <= this._options.maxBodyLength ? (this._requestBodyLength += t.length, this._requestBodyBuffers.push({ data: t, encoding: e }), this._currentRequest.write(t, e, n)) : (this.emit("error", new M7()), this.abort());
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
    (function c(d) {
      if (r === s._currentRequest)
        if (d)
          s.emit("error", d);
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
    throw new q7();
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
  var s = Fo(/^host$/i, this._options.headers), a = Vi(this._currentUrl), c = s || a.host, d = /^\w+:/.test(n) ? this._currentUrl : Ln.format(Object.assign(a, { host: c })), l = B7(n, d);
  if (Dl("redirecting to", l.href), this._isRedirect = !0, Qo(l, this._options), (l.protocol !== a.protocol && l.protocol !== "https:" || l.host !== c && !$7(l.host, c)) && Fo(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers), qt(o)) {
    var u = {
      headers: t.headers,
      statusCode: e
    }, p = {
      url: d,
      method: i,
      headers: r
    };
    o(this._options, u, p), this._sanitizeOptions(this._options);
  }
  this._performRequest();
};
function Ll(t) {
  var e = {
    maxRedirects: 21,
    maxBodyLength: 10485760
  }, n = {};
  return Object.keys(t).forEach(function(r) {
    var o = r + ":", i = n[o] = t[r], s = e[r] = Object.create(i);
    function a(d, l, u) {
      return z7(d) ? d = Qo(d) : Pt(d) ? d = Qo(Vi(d)) : (u = l, l = Rl(d), d = { protocol: o }), qt(l) && (u = l, l = null), l = Object.assign({
        maxRedirects: e.maxRedirects,
        maxBodyLength: e.maxBodyLength
      }, d, l), l.nativeProtocols = n, !Pt(l.host) && !Pt(l.hostname) && (l.hostname = "::1"), ji.equal(l.protocol, o, "protocol mismatch"), Dl("options", l), new je(l, u);
    }
    function c(d, l, u) {
      var p = s.request(d, l, u);
      return p.end(), p;
    }
    Object.defineProperties(s, {
      request: { value: a, configurable: !0, enumerable: !0, writable: !0 },
      get: { value: c, configurable: !0, enumerable: !0, writable: !0 }
    });
  }), e;
}
function Cl() {
}
function Vi(t) {
  var e;
  if (Ui)
    e = new hn(t);
  else if (e = Rl(Ln.parse(t)), !Pt(e.protocol))
    throw new Ko({ input: t });
  return e;
}
function B7(t, e) {
  return Ui ? new hn(t, e) : Vi(Ln.resolve(e, t));
}
function Rl(t) {
  if (/^\[/.test(t.hostname) && !/^\[[:0-9a-f]+\]$/i.test(t.hostname))
    throw new Ko({ input: t.href || t });
  if (/^\[/.test(t.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(t.host))
    throw new Ko({ input: t.href || t });
  return t;
}
function Qo(t, e) {
  var n = e || {};
  for (var r of F7)
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
  t.on("error", Cl), t.destroy(e);
}
function $7(t, e) {
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
function V7(t) {
  return typeof t == "object" && "length" in t;
}
function z7(t) {
  return hn && t instanceof hn;
}
qi.exports = Ll({ http: I7, https: k7 });
qi.exports.wrap = Ll;
var H7 = qi.exports;
const X7 = /* @__PURE__ */ on(H7), rr = "1.13.5";
function Pl(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
const G7 = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function W7(t, e, n) {
  const r = n && n.Blob || ce.classes.Blob, o = Pl(t);
  if (e === void 0 && r && (e = !0), o === "data") {
    t = o.length ? t.slice(o.length + 1) : t;
    const i = G7.exec(t);
    if (!i)
      throw new F("Invalid URL", F.ERR_INVALID_URL);
    const s = i[1], a = i[2], c = i[3], d = Buffer.from(decodeURIComponent(c), a ? "base64" : "utf8");
    if (e) {
      if (!r)
        throw new F("Blob is not supported", F.ERR_NOT_SUPPORT);
      return new r([d], { type: s });
    }
    return d;
  }
  throw new F("Unsupported protocol " + o, F.ERR_NOT_SUPPORT);
}
const qo = Symbol("internals");
class _a extends Le.Transform {
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
    const o = this[qo], i = o.maxRate, s = this.readableHighWaterMark, a = o.timeWindow, c = 1e3 / a, d = i / c, l = o.minChunkSize !== !1 ? Math.max(o.minChunkSize, d * 0.01) : 0, u = (h, f) => {
      const b = Buffer.byteLength(h);
      o.bytesSeen += b, o.bytes += b, o.isCaptured && this.emit("progress", o.bytesSeen), this.push(h) ? process.nextTick(f) : o.onReadCallback = () => {
        o.onReadCallback = null, process.nextTick(f);
      };
    }, p = (h, f) => {
      const b = Buffer.byteLength(h);
      let x = null, S = s, w, y = 0;
      if (i) {
        const E = Date.now();
        (!o.ts || (y = E - o.ts) >= a) && (o.ts = E, w = d - o.bytes, o.bytes = w < 0 ? -w : 0, y = 0), w = d - o.bytes;
      }
      if (i) {
        if (w <= 0)
          return setTimeout(() => {
            f(null, h);
          }, a - y);
        w < S && (S = w);
      }
      S && b > S && b - S > l && (x = h.subarray(S), h = h.subarray(0, S)), u(h, x ? () => {
        process.nextTick(f, null, x);
      } : f);
    };
    p(e, function h(f, b) {
      if (f)
        return r(f);
      b ? p(b, h) : r(null);
    });
  }
}
const { asyncIterator: Da } = Symbol, Il = async function* (t) {
  t.stream ? yield* t.stream() : t.arrayBuffer ? yield await t.arrayBuffer() : t[Da] ? yield* t[Da]() : yield t;
}, Y7 = ce.ALPHABET.ALPHA_DIGIT + "-_", gn = typeof TextEncoder == "function" ? new TextEncoder() : new bt.TextEncoder(), At = `\r
`, K7 = gn.encode(At), J7 = 2;
class Q7 {
  constructor(e, n) {
    const { escapeName: r } = this.constructor, o = N.isString(n);
    let i = `Content-Disposition: form-data; name="${r(e)}"${!o && n.name ? `; filename="${r(n.name)}"` : ""}${At}`;
    o ? n = gn.encode(String(n).replace(/\r?\n|\r\n?/g, At)) : i += `Content-Type: ${n.type || "application/octet-stream"}${At}`, this.headers = gn.encode(i + At), this.contentLength = o ? n.byteLength : n.size, this.size = this.headers.byteLength + this.contentLength + J7, this.name = e, this.value = n;
  }
  async *encode() {
    yield this.headers;
    const { value: e } = this;
    N.isTypedArray(e) ? yield e : yield* Il(e), yield K7;
  }
  static escapeName(e) {
    return String(e).replace(/[\r\n"]/g, (n) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[n]);
  }
}
const Z7 = (t, e, n) => {
  const {
    tag: r = "form-data-boundary",
    size: o = 25,
    boundary: i = r + "-" + ce.generateString(o, Y7)
  } = n || {};
  if (!N.isFormData(t))
    throw TypeError("FormData instance required");
  if (i.length < 1 || i.length > 70)
    throw Error("boundary must be 10-70 characters long");
  const s = gn.encode("--" + i + At), a = gn.encode("--" + i + "--" + At);
  let c = a.byteLength;
  const d = Array.from(t.entries()).map(([u, p]) => {
    const h = new Q7(u, p);
    return c += h.size, h;
  });
  c += s.byteLength * d.length, c = N.toFiniteNumber(c);
  const l = {
    "Content-Type": `multipart/form-data; boundary=${i}`
  };
  return Number.isFinite(c) && (l["Content-Length"] = c), e && e(l), Ku.from(async function* () {
    for (const u of d)
      yield s, yield* u.encode();
    yield a;
  }());
};
class e5 extends Le.Transform {
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
const t5 = (t, e) => N.isAsyncFn(t) ? function(...n) {
  const r = n.pop();
  t.apply(this, n).then((o) => {
    try {
      e ? r(null, ...e(o)) : r(null, o);
    } catch (i) {
      r(i);
    }
  }, r);
} : t;
function n5(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let o = 0, i = 0, s;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const d = Date.now(), l = r[i];
    s || (s = d), n[o] = c, r[o] = d;
    let u = i, p = 0;
    for (; u !== o; )
      p += n[u++], u = u % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), d - s < e)
      return;
    const h = l && d - l;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function r5(t, e) {
  let n = 0, r = 1e3 / e, o, i;
  const s = (d, l = Date.now()) => {
    n = l, o = null, i && (clearTimeout(i), i = null), t(...d);
  };
  return [(...d) => {
    const l = Date.now(), u = l - n;
    u >= r ? s(d, l) : (o = d, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - u)));
  }, () => o && s(o)];
}
const tn = (t, e, n = 3) => {
  let r = 0;
  const o = n5(50, 250);
  return r5((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - r, d = o(c), l = s <= a;
    r = s;
    const u = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && a && l ? (a - s) / d : void 0,
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
function o5(t) {
  if (!t || typeof t != "string" || !t.startsWith("data:")) return 0;
  const e = t.indexOf(",");
  if (e < 0) return 0;
  const n = t.slice(5, e), r = t.slice(e + 1);
  if (/;base64/i.test(n)) {
    let i = r.length;
    const s = r.length;
    for (let p = 0; p < s; p++)
      if (r.charCodeAt(p) === 37 && p + 2 < s) {
        const h = r.charCodeAt(p + 1), f = r.charCodeAt(p + 2);
        (h >= 48 && h <= 57 || h >= 65 && h <= 70 || h >= 97 && h <= 102) && (f >= 48 && f <= 57 || f >= 65 && f <= 70 || f >= 97 && f <= 102) && (i -= 2, p += 2);
      }
    let a = 0, c = s - 1;
    const d = (p) => p >= 2 && r.charCodeAt(p - 2) === 37 && // '%'
    r.charCodeAt(p - 1) === 51 && // '3'
    (r.charCodeAt(p) === 68 || r.charCodeAt(p) === 100);
    c >= 0 && (r.charCodeAt(c) === 61 ? (a++, c--) : d(c) && (a++, c -= 3)), a === 1 && c >= 0 && (r.charCodeAt(c) === 61 || d(c)) && a++;
    const u = Math.floor(i / 4) * 3 - (a || 0);
    return u > 0 ? u : 0;
  }
  return Buffer.byteLength(r, "utf8");
}
const La = {
  flush: yt.constants.Z_SYNC_FLUSH,
  finishFlush: yt.constants.Z_SYNC_FLUSH
}, i5 = {
  flush: yt.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: yt.constants.BROTLI_OPERATION_FLUSH
}, Ca = N.isFunction(yt.createBrotliDecompress), { http: s5, https: a5 } = X7, c5 = /https:?/, Ra = ce.protocols.map((t) => t + ":"), Pa = (t, [e, n]) => (t.on("end", n).on("error", n), e);
class l5 {
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
        const [p, h] = r[u];
        if (!p.destroyed && !p.closed && bt.isDeepStrictEqual(h, n))
          return p;
      }
    }
    const o = wc.connect(e, n);
    let i;
    const s = () => {
      if (i)
        return;
      i = !0;
      let l = r, u = l.length, p = u;
      for (; p--; )
        if (l[p][0] === o) {
          u === 1 ? delete this.sessions[e] : l.splice(p, 1);
          return;
        }
    }, a = o.request, { sessionTimeout: c } = n;
    if (c != null) {
      let l, u = 0;
      o.request = function() {
        const p = a.apply(this, arguments);
        return u++, l && (clearTimeout(l), l = null), p.once("close", () => {
          --u || (l = setTimeout(() => {
            l = null, s();
          }, c));
        }), p;
      };
    }
    o.once("close", s);
    let d = [
      o,
      n
    ];
    return r ? r.push(d) : r = this.sessions[e] = [d], o;
  }
}
const u5 = new l5();
function p5(t, e) {
  t.beforeRedirects.proxy && t.beforeRedirects.proxy(t), t.beforeRedirects.config && t.beforeRedirects.config(t, e);
}
function kl(t, e, n) {
  let r = e;
  if (!r && r !== !1) {
    const o = Al.getProxyForUrl(n);
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
    kl(i, e, i.href);
  };
}
const d5 = typeof process < "u" && N.kindOf(process) === "process", f5 = (t) => new Promise((e, n) => {
  let r, o;
  const i = (c, d) => {
    o || (o = !0, r && r(c, d));
  }, s = (c) => {
    i(c), e(c);
  }, a = (c) => {
    i(c, !0), n(c);
  };
  t(s, a, (c) => r = c).catch(a);
}), m5 = ({ address: t, family: e }) => {
  if (!N.isString(t))
    throw TypeError("address must be a string");
  return {
    address: t,
    family: e || (t.indexOf(".") < 0 ? 6 : 4)
  };
}, Ia = (t, e) => m5(N.isObject(t) ? t : { address: t, family: e }), h5 = {
  request(t, e) {
    const n = t.protocol + "//" + t.hostname + ":" + (t.port || (t.protocol === "https:" ? 443 : 80)), { http2Options: r, headers: o } = t, i = u5.getSession(n, r), {
      HTTP2_HEADER_SCHEME: s,
      HTTP2_HEADER_METHOD: a,
      HTTP2_HEADER_PATH: c,
      HTTP2_HEADER_STATUS: d
    } = wc.constants, l = {
      [s]: t.protocol.replace(":", ""),
      [a]: t.method,
      [c]: t.path
    };
    N.forEach(o, (p, h) => {
      h.charAt(0) !== ":" && (l[h] = p);
    });
    const u = i.request(l);
    return u.once("response", (p) => {
      const h = u;
      p = Object.assign({}, p);
      const f = p[d];
      delete p[d], h.headers = p, h.statusCode = +f, e(h);
    }), u;
  }
}, g5 = d5 && function(e) {
  return f5(async function(r, o, i) {
    let { data: s, lookup: a, family: c, httpVersion: d = 1, http2Options: l } = e;
    const { responseType: u, responseEncoding: p } = e, h = e.method.toUpperCase();
    let f, b = !1, x;
    if (d = +d, Number.isNaN(d))
      throw TypeError(`Invalid protocol version: '${e.httpVersion}' is not a number`);
    if (d !== 1 && d !== 2)
      throw TypeError(`Unsupported protocol version '${d}'`);
    const S = d === 2;
    if (a) {
      const V = t5(a, (U) => N.isArray(U) ? U : [U]);
      a = (U, Z, Oe) => {
        V(U, Z, (oe, Ae, Ke) => {
          if (oe)
            return Oe(oe);
          const v = N.isArray(Ae) ? Ae.map((g) => Ia(g)) : [Ia(Ae, Ke)];
          Z.all ? Oe(oe, v) : Oe(oe, v[0].address, v[0].family);
        });
      };
    }
    const w = new Wu();
    function y(V) {
      try {
        w.emit("abort", !V || V.type ? new Ft(null, e, x) : V);
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
        b = !0, E();
        return;
      }
      const { data: Z } = V;
      if (Z instanceof Le.Readable || Z instanceof Le.Duplex) {
        const Oe = Le.finished(Z, () => {
          Oe(), E();
        });
      } else
        E();
    });
    const A = Fi(e.baseURL, e.url, e.allowAbsoluteUrls), L = new URL(A, ce.hasBrowserEnv ? ce.origin : void 0), P = L.protocol || Ra[0];
    if (P === "data:") {
      if (e.maxContentLength > -1) {
        const U = String(e.url || A || "");
        if (o5(U) > e.maxContentLength)
          return o(new F(
            "maxContentLength size of " + e.maxContentLength + " exceeded",
            F.ERR_BAD_RESPONSE,
            e
          ));
      }
      let V;
      if (h !== "GET")
        return Xt(r, o, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: e
        });
      try {
        V = W7(e.url, u === "blob", {
          Blob: e.env && e.env.Blob
        });
      } catch (U) {
        throw F.from(U, F.ERR_BAD_REQUEST, e);
      }
      return u === "text" ? (V = V.toString(p), (!p || p === "utf8") && (V = N.stripBOM(V))) : u === "stream" && (V = Le.Readable.from(V)), Xt(r, o, {
        data: V,
        status: 200,
        statusText: "OK",
        headers: new Te(),
        config: e
      });
    }
    if (Ra.indexOf(P) === -1)
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
      s = Z7(s, (U) => {
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
      s.size && O.setContentType(s.type || "application/octet-stream"), O.setContentLength(s.size || 0), s = Le.Readable.from(Il(s));
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
    N.isArray(D) ? (I = D[0], j = D[1]) : I = j = D, s && (m || I) && (N.isStream(s) || (s = Le.Readable.from(s, { objectMode: !1 })), s = Le.pipeline([s, new _a({
      maxRate: N.toFiniteNumber(I)
    })], N.noop), m && s.on("progress", Pa(
      s,
      or(
        B,
        tn(ir(m), !1, 3)
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
      "gzip, compress, deflate" + (Ca ? ", br" : ""),
      !1
    );
    const k = {
      path: q,
      method: h,
      headers: O.toJSON(),
      agents: { http: e.httpAgent, https: e.httpsAgent },
      auth: $,
      protocol: P,
      family: c,
      beforeRedirect: p5,
      beforeRedirects: {},
      http2Options: l
    };
    !N.isUndefined(a) && (k.lookup = a), e.socketPath ? k.socketPath = e.socketPath : (k.hostname = L.hostname.startsWith("[") ? L.hostname.slice(1, -1) : L.hostname, k.port = L.port, kl(k, e.proxy, P + "//" + L.hostname + (L.port ? ":" + L.port : "") + k.path));
    let K;
    const Y = c5.test(k.protocol);
    if (k.agent = Y ? e.httpsAgent : e.httpAgent, S ? K = h5 : e.transport ? K = e.transport : e.maxRedirects === 0 ? K = Y ? ur : lr : (e.maxRedirects && (k.maxRedirects = e.maxRedirects), e.beforeRedirect && (k.beforeRedirects.config = e.beforeRedirect), K = Y ? a5 : s5), e.maxBodyLength > -1 ? k.maxBodyLength = e.maxBodyLength : k.maxBodyLength = 1 / 0, e.insecureHTTPParser && (k.insecureHTTPParser = e.insecureHTTPParser), x = K.request(k, function(U) {
      if (x.destroyed) return;
      const Z = [U], Oe = N.toFiniteNumber(U.headers["content-length"]);
      if (_ || j) {
        const v = new _a({
          maxRate: N.toFiniteNumber(j)
        });
        _ && v.on("progress", Pa(
          v,
          or(
            Oe,
            tn(ir(_), !0, 3)
          )
        )), Z.push(v);
      }
      let oe = U;
      const Ae = U.req || x;
      if (e.decompress !== !1 && U.headers["content-encoding"])
        switch ((h === "HEAD" || U.statusCode === 204) && delete U.headers["content-encoding"], (U.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            Z.push(yt.createUnzip(La)), delete U.headers["content-encoding"];
            break;
          case "deflate":
            Z.push(new e5()), Z.push(yt.createUnzip(La)), delete U.headers["content-encoding"];
            break;
          case "br":
            Ca && (Z.push(yt.createBrotliDecompress(i5)), delete U.headers["content-encoding"]);
        }
      oe = Z.length > 1 ? Le.pipeline(Z, N.noop) : Z[0];
      const Ke = {
        status: U.statusCode,
        statusText: U.statusMessage,
        headers: new Te(U.headers),
        config: e,
        request: Ae
      };
      if (u === "stream")
        Ke.data = oe, Xt(r, o, Ke);
      else {
        const v = [];
        let g = 0;
        oe.on("data", function(T) {
          v.push(T), g += T.length, e.maxContentLength > -1 && g > e.maxContentLength && (b = !0, oe.destroy(), y(new F(
            "maxContentLength size of " + e.maxContentLength + " exceeded",
            F.ERR_BAD_RESPONSE,
            e,
            Ae
          )));
        }), oe.on("aborted", function() {
          if (b)
            return;
          const T = new F(
            "stream has been aborted",
            F.ERR_BAD_RESPONSE,
            e,
            Ae
          );
          oe.destroy(T), o(T);
        }), oe.on("error", function(T) {
          x.destroyed || o(F.from(T, null, e, Ae));
        }), oe.on("end", function() {
          try {
            let T = v.length === 1 ? v[0] : Buffer.concat(v);
            u !== "arraybuffer" && (T = T.toString(p), (!p || p === "utf8") && (T = N.stripBOM(T))), Ke.data = T;
          } catch (T) {
            return o(F.from(T, null, e, Ke.request, Ke));
          }
          Xt(r, o, Ke);
        });
      }
      w.once("abort", (v) => {
        oe.destroyed || (oe.emit("error", v), oe.destroy());
      });
    }), w.once("abort", (V) => {
      x.close ? x.close() : x.destroy(V);
    }), x.on("error", function(U) {
      o(F.from(U, null, e, x));
    }), x.on("socket", function(U) {
      U.setKeepAlive(!0, 1e3 * 60);
    }), e.timeout) {
      const V = parseInt(e.timeout, 10);
      if (Number.isNaN(V)) {
        y(new F(
          "error trying to parse `config.timeout` to int",
          F.ERR_BAD_OPTION_VALUE,
          e,
          x
        ));
        return;
      }
      x.setTimeout(V, function() {
        if (f) return;
        let Z = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
        const Oe = e.transitional || Er;
        e.timeoutErrorMessage && (Z = e.timeoutErrorMessage), y(new F(
          Z,
          Oe.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
          e,
          x
        ));
      });
    } else
      x.setTimeout(0);
    if (N.isStream(s)) {
      let V = !1, U = !1;
      s.on("end", () => {
        V = !0;
      }), s.once("error", (Z) => {
        U = !0, x.destroy(Z);
      }), s.on("close", () => {
        !V && !U && y(new Ft("Request stream has been aborted", e, x));
      }), s.pipe(x);
    } else
      s && x.write(s), x.end();
  });
}, y5 = ce.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, ce.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(ce.origin),
  ce.navigator && /(msie|trident)/i.test(ce.navigator.userAgent)
) : () => !0, v5 = ce.hasStandardBrowserEnv ? (
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
), ka = (t) => t instanceof Te ? { ...t } : t;
function Mt(t, e) {
  e = e || {};
  const n = {};
  function r(d, l, u, p) {
    return N.isPlainObject(d) && N.isPlainObject(l) ? N.merge.call({ caseless: p }, d, l) : N.isPlainObject(l) ? N.merge({}, l) : N.isArray(l) ? l.slice() : l;
  }
  function o(d, l, u, p) {
    if (N.isUndefined(l)) {
      if (!N.isUndefined(d))
        return r(void 0, d, u, p);
    } else return r(d, l, u, p);
  }
  function i(d, l) {
    if (!N.isUndefined(l))
      return r(void 0, l);
  }
  function s(d, l) {
    if (N.isUndefined(l)) {
      if (!N.isUndefined(d))
        return r(void 0, d);
    } else return r(void 0, l);
  }
  function a(d, l, u) {
    if (u in e)
      return r(d, l);
    if (u in t)
      return r(void 0, d);
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
    headers: (d, l, u) => o(ka(d), ka(l), u, !0)
  };
  return N.forEach(
    Object.keys({ ...t, ...e }),
    function(l) {
      if (l === "__proto__" || l === "constructor" || l === "prototype")
        return;
      const u = N.hasOwnProp(c, l) ? c[l] : o, p = u(t[l], e[l], l);
      N.isUndefined(p) && u !== a || (n[l] = p);
    }
  ), n;
}
const Fl = (t) => {
  const e = Mt({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = e;
  if (e.headers = s = Te.from(s), e.url = Ii(Fi(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), N.isFormData(n)) {
    if (ce.hasStandardBrowserEnv || ce.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (N.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), d = ["content-type", "content-length"];
      Object.entries(c).forEach(([l, u]) => {
        d.includes(l.toLowerCase()) && s.set(l, u);
      });
    }
  }
  if (ce.hasStandardBrowserEnv && (r && N.isFunction(r) && (r = r(e)), r || r !== !1 && y5(e.url))) {
    const c = o && i && v5.read(i);
    c && s.set(o, c);
  }
  return e;
}, b5 = typeof XMLHttpRequest < "u", x5 = b5 && function(t) {
  return new Promise(function(n, r) {
    const o = Fl(t);
    let i = o.data;
    const s = Te.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: d } = o, l, u, p, h, f;
    function b() {
      h && h(), f && f(), o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l);
    }
    let x = new XMLHttpRequest();
    x.open(o.method.toUpperCase(), o.url, !0), x.timeout = o.timeout;
    function S() {
      if (!x)
        return;
      const y = Te.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), A = {
        data: !a || a === "text" || a === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: y,
        config: t,
        request: x
      };
      Xt(function(P) {
        n(P), b();
      }, function(P) {
        r(P), b();
      }, A), x = null;
    }
    "onloadend" in x ? x.onloadend = S : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, x.onabort = function() {
      x && (r(new F("Request aborted", F.ECONNABORTED, t, x)), x = null);
    }, x.onerror = function(E) {
      const A = E && E.message ? E.message : "Network Error", L = new F(A, F.ERR_NETWORK, t, x);
      L.event = E || null, r(L), x = null;
    }, x.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const A = o.transitional || Er;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(new F(
        E,
        A.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        t,
        x
      )), x = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in x && N.forEach(s.toJSON(), function(E, A) {
      x.setRequestHeader(A, E);
    }), N.isUndefined(o.withCredentials) || (x.withCredentials = !!o.withCredentials), a && a !== "json" && (x.responseType = o.responseType), d && ([p, f] = tn(d, !0), x.addEventListener("progress", p)), c && x.upload && ([u, h] = tn(c), x.upload.addEventListener("progress", u), x.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (l = (y) => {
      x && (r(!y || y.type ? new Ft(null, t, x) : y), x.abort(), x = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const w = Pl(o.url);
    if (w && ce.protocols.indexOf(w) === -1) {
      r(new F("Unsupported protocol " + w + ":", F.ERR_BAD_REQUEST, t));
      return;
    }
    x.send(i || null);
  });
}, w5 = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), o;
    const i = function(d) {
      if (!o) {
        o = !0, a();
        const l = d instanceof Error ? d : this.reason;
        r.abort(l instanceof F ? l : new Ft(l instanceof Error ? l.message : l));
      }
    };
    let s = e && setTimeout(() => {
      s = null, i(new F(`timeout of ${e}ms exceeded`, F.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (s && clearTimeout(s), s = null, t.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(i) : d.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((d) => d.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => N.asap(a), c;
  }
}, E5 = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + e, yield t.slice(r, o), r = o;
}, T5 = async function* (t, e) {
  for await (const n of S5(t))
    yield* E5(n, e);
}, S5 = async function* (t) {
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
}, Fa = (t, e, n, r) => {
  const o = T5(t, e);
  let i = 0, s, a = (c) => {
    s || (s = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: d, value: l } = await o.next();
        if (d) {
          a(), c.close();
          return;
        }
        let u = l.byteLength;
        if (n) {
          let p = i += u;
          n(p);
        }
        c.enqueue(new Uint8Array(l));
      } catch (d) {
        throw a(d), d;
      }
    },
    cancel(c) {
      return a(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, qa = 64 * 1024, { isFunction: jn } = N, N5 = (({ Request: t, Response: e }) => ({
  Request: t,
  Response: e
}))(N.global), {
  ReadableStream: Ma,
  TextEncoder: ja
} = N.global, Ua = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, O5 = (t) => {
  t = N.merge.call({
    skipUndefined: !0
  }, N5, t);
  const { fetch: e, Request: n, Response: r } = t, o = e ? jn(e) : typeof fetch == "function", i = jn(n), s = jn(r);
  if (!o)
    return !1;
  const a = o && jn(Ma), c = o && (typeof ja == "function" ? /* @__PURE__ */ ((f) => (b) => f.encode(b))(new ja()) : async (f) => new Uint8Array(await new n(f).arrayBuffer())), d = i && a && Ua(() => {
    let f = !1;
    const b = new n(ce.origin, {
      body: new Ma(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !b;
  }), l = s && a && Ua(() => N.isReadableStream(new r("").body)), u = {
    stream: l && ((f) => f.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !u[f] && (u[f] = (b, x) => {
      let S = b && b[f];
      if (S)
        return S.call(b);
      throw new F(`Response type '${f}' is not supported`, F.ERR_NOT_SUPPORT, x);
    });
  });
  const p = async (f) => {
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
  }, h = async (f, b) => {
    const x = N.toFiniteNumber(f.getContentLength());
    return x ?? p(b);
  };
  return async (f) => {
    let {
      url: b,
      method: x,
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
    } = Fl(f), D = e || fetch;
    P = P ? (P + "").toLowerCase() : "text";
    let I = w5([w, y && y.toAbortSignal()], E), j = null;
    const B = I && I.unsubscribe && (() => {
      I.unsubscribe();
    });
    let $;
    try {
      if (L && d && x !== "get" && x !== "head" && ($ = await h(O, S)) !== 0) {
        let U = new n(b, {
          method: "POST",
          body: S,
          duplex: "half"
        }), Z;
        if (N.isFormData(S) && (Z = U.headers.get("content-type")) && O.setContentType(Z), U.body) {
          const [Oe, oe] = or(
            $,
            tn(ir(L))
          );
          S = Fa(U.body, qa, Oe, oe);
        }
      }
      N.isString(m) || (m = m ? "include" : "omit");
      const q = i && "credentials" in n.prototype, k = {
        ..._,
        signal: I,
        method: x.toUpperCase(),
        headers: O.normalize().toJSON(),
        body: S,
        duplex: "half",
        credentials: q ? m : void 0
      };
      j = i && new n(b, k);
      let K = await (i ? D(j, _) : D(b, k));
      const Y = l && (P === "stream" || P === "response");
      if (l && (A || Y && B)) {
        const U = {};
        ["status", "statusText", "headers"].forEach((Ae) => {
          U[Ae] = K[Ae];
        });
        const Z = N.toFiniteNumber(K.headers.get("content-length")), [Oe, oe] = A && or(
          Z,
          tn(ir(A), !0)
        ) || [];
        K = new r(
          Fa(K.body, qa, Oe, () => {
            oe && oe(), B && B();
          }),
          U
        );
      }
      P = P || "text";
      let V = await u[N.findKey(u, P) || "text"](K, f);
      return !Y && B && B(), await new Promise((U, Z) => {
        Xt(U, Z, {
          data: V,
          headers: Te.from(K.headers),
          status: K.status,
          statusText: K.statusText,
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
}, A5 = /* @__PURE__ */ new Map(), ql = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: r, Response: o } = e, i = [
    r,
    o,
    n
  ];
  let s = i.length, a = s, c, d, l = A5;
  for (; a--; )
    c = i[a], d = l.get(c), d === void 0 && l.set(c, d = a ? /* @__PURE__ */ new Map() : O5(e)), l = d;
  return d;
};
ql();
const Hi = {
  http: g5,
  xhr: x5,
  fetch: {
    get: ql
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
const Ba = (t) => `- ${t}`, _5 = (t) => N.isFunction(t) || t === null || t === !1;
function D5(t, e) {
  t = N.isArray(t) ? t : [t];
  const { length: n } = t;
  let r, o;
  const i = {};
  for (let s = 0; s < n; s++) {
    r = t[s];
    let a;
    if (o = r, !_5(r) && (o = Hi[(a = String(r)).toLowerCase()], o === void 0))
      throw new F(`Unknown adapter '${a}'`);
    if (o && (N.isFunction(o) || (o = o.get(e))))
      break;
    i[a || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(i).map(
      ([c, d]) => `adapter ${c} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? s.length > 1 ? `since :
` + s.map(Ba).join(`
`) : " " + Ba(s[0]) : "as no adapter specified";
    throw new F(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Ml = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: D5,
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
function $a(t) {
  return Mo(t), t.headers = Te.from(t.headers), t.data = Co.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ml.getAdapter(t.adapter || Dn.adapter, t)(t).then(function(r) {
    return Mo(t), r.data = Co.call(
      t,
      t.transformResponse,
      r
    ), r.headers = Te.from(r.headers), r;
  }, function(r) {
    return Ol(r) || (Mo(t), r && r.response && (r.response.data = Co.call(
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
const Va = {};
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
    return n && !Va[s] && (Va[s] = !0, console.warn(
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
function L5(t, e, n) {
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
  assertOptions: L5,
  validators: Tr
}, $e = Gn.validators;
let It = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new va(),
      response: new va()
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
    this.interceptors.request.forEach(function(b) {
      if (typeof b.runWhen == "function" && b.runWhen(n) === !1)
        return;
      c = c && b.synchronous;
      const x = n.transitional || Er;
      x && x.legacyInterceptorReqResOrdering ? a.unshift(b.fulfilled, b.rejected) : a.push(b.fulfilled, b.rejected);
    });
    const d = [];
    this.interceptors.response.forEach(function(b) {
      d.push(b.fulfilled, b.rejected);
    });
    let l, u = 0, p;
    if (!c) {
      const f = [$a.bind(this), void 0];
      for (f.unshift(...a), f.push(...d), p = f.length, l = Promise.resolve(n); u < p; )
        l = l.then(f[u++], f[u++]);
      return l;
    }
    p = a.length;
    let h = n;
    for (; u < p; ) {
      const f = a[u++], b = a[u++];
      try {
        h = f(h);
      } catch (x) {
        b.call(this, x);
        break;
      }
    }
    try {
      l = $a.call(this, h);
    } catch (f) {
      return Promise.reject(f);
    }
    for (u = 0, p = d.length; u < p; )
      l = l.then(d[u++], d[u++]);
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
let C5 = class jl {
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
      token: new jl(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
};
function R5(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function P5(t) {
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
function Ul(t) {
  const e = new It(t), n = Gc(It.prototype.request, e);
  return N.extend(n, It.prototype, e, { allOwnKeys: !0 }), N.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ul(Mt(t, o));
  }, n;
}
const ae = Ul(Dn);
ae.Axios = It;
ae.CanceledError = Ft;
ae.CancelToken = C5;
ae.isCancel = Ol;
ae.VERSION = rr;
ae.toFormData = wr;
ae.AxiosError = F;
ae.Cancel = ae.CanceledError;
ae.all = function(e) {
  return Promise.all(e);
};
ae.spread = R5;
ae.isAxiosError = P5;
ae.mergeConfig = Mt;
ae.AxiosHeaders = Te;
ae.formToJSON = (t) => Nl(N.isHTMLForm(t) ? new FormData(t) : t);
ae.getAdapter = Ml.getAdapter;
ae.HttpStatusCode = Zo;
ae.default = ae;
const {
  Axios: lQ,
  AxiosError: uQ,
  CanceledError: pQ,
  isCancel: dQ,
  CancelToken: fQ,
  VERSION: mQ,
  all: hQ,
  Cancel: gQ,
  isAxiosError: yQ,
  spread: vQ,
  toFormData: bQ,
  AxiosHeaders: xQ,
  HttpStatusCode: wQ,
  formToJSON: EQ,
  getAdapter: TQ,
  mergeConfig: SQ
} = ae;
class I5 {
  constructor() {
    Ue(this, "parser");
    this.parser = new d6();
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
const Bl = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", k5 = Bl + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", F5 = "[" + Bl + "][" + k5 + "]*", q5 = new RegExp("^" + F5 + "$");
function $l(t, e) {
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
  const e = q5.exec(t);
  return !(e === null || typeof e > "u");
};
function M5(t) {
  return typeof t < "u";
}
const j5 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function U5(t, e) {
  e = Object.assign({}, j5, e);
  const n = [];
  let r = !1, o = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let i = 0; i < t.length; i++)
    if (t[i] === "<" && t[i + 1] === "?") {
      if (i += 2, i = Ha(t, i), i.err) return i;
    } else if (t[i] === "<") {
      let s = i;
      if (i++, t[i] === "!") {
        i = Xa(t, i);
        continue;
      } else {
        let a = !1;
        t[i] === "/" && (a = !0, i++);
        let c = "";
        for (; i < t.length && t[i] !== ">" && t[i] !== " " && t[i] !== "	" && t[i] !== `
` && t[i] !== "\r"; i++)
          c += t[i];
        if (c = c.trim(), c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1), i--), !W5(c)) {
          let u;
          return c.trim().length === 0 ? u = "Invalid space after '<'." : u = "Tag '" + c + "' is an invalid name.", pe("InvalidTag", u, _e(t, i));
        }
        const d = V5(t, i);
        if (d === !1)
          return pe("InvalidAttr", "Attributes for '" + c + "' have open quote.", _e(t, i));
        let l = d.value;
        if (i = d.index, l[l.length - 1] === "/") {
          const u = i - l.length;
          l = l.substring(0, l.length - 1);
          const p = Ga(l, e);
          if (p === !0)
            r = !0;
          else
            return pe(p.err.code, p.err.msg, _e(t, u + p.err.line));
        } else if (a)
          if (d.tagClosed) {
            if (l.trim().length > 0)
              return pe("InvalidTag", "Closing tag '" + c + "' can't have attributes or invalid starting.", _e(t, s));
            if (n.length === 0)
              return pe("InvalidTag", "Closing tag '" + c + "' has not been opened.", _e(t, s));
            {
              const u = n.pop();
              if (c !== u.tagName) {
                let p = _e(t, u.tagStartPos);
                return pe(
                  "InvalidTag",
                  "Expected closing tag '" + u.tagName + "' (opened in line " + p.line + ", col " + p.col + ") instead of closing tag '" + c + "'.",
                  _e(t, s)
                );
              }
              n.length == 0 && (o = !0);
            }
          } else return pe("InvalidTag", "Closing tag '" + c + "' doesn't have proper closing.", _e(t, i));
        else {
          const u = Ga(l, e);
          if (u !== !0)
            return pe(u.err.code, u.err.msg, _e(t, i - l.length + u.err.line));
          if (o === !0)
            return pe("InvalidXml", "Multiple possible root nodes found.", _e(t, i));
          e.unpairedTags.indexOf(c) !== -1 || n.push({ tagName: c, tagStartPos: s }), r = !0;
        }
        for (i++; i < t.length; i++)
          if (t[i] === "<")
            if (t[i + 1] === "!") {
              i++, i = Xa(t, i);
              continue;
            } else if (t[i + 1] === "?") {
              if (i = Ha(t, ++i), i.err) return i;
            } else
              break;
          else if (t[i] === "&") {
            const u = X5(t, i);
            if (u == -1)
              return pe("InvalidChar", "char '&' is not expected.", _e(t, i));
            i = u;
          } else if (o === !0 && !za(t[i]))
            return pe("InvalidXml", "Extra text at the end", _e(t, i));
        t[i] === "<" && i--;
      }
    } else {
      if (za(t[i]))
        continue;
      return pe("InvalidChar", "char '" + t[i] + "' is not expected.", _e(t, i));
    }
  if (r) {
    if (n.length == 1)
      return pe("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", _e(t, n[0].tagStartPos));
    if (n.length > 0)
      return pe("InvalidXml", "Invalid '" + JSON.stringify(n.map((i) => i.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return pe("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function za(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Ha(t, e) {
  const n = e;
  for (; e < t.length; e++)
    if (t[e] == "?" || t[e] == " ") {
      const r = t.substr(n, e - n);
      if (e > 5 && r === "xml")
        return pe("InvalidXml", "XML declaration allowed only at the start of the document.", _e(t, e));
      if (t[e] == "?" && t[e + 1] == ">") {
        e++;
        break;
      } else
        continue;
    }
  return e;
}
function Xa(t, e) {
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
const B5 = '"', $5 = "'";
function V5(t, e) {
  let n = "", r = "", o = !1;
  for (; e < t.length; e++) {
    if (t[e] === B5 || t[e] === $5)
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
const z5 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Ga(t, e) {
  const n = $l(t, z5), r = {};
  for (let o = 0; o < n.length; o++) {
    if (n[o][1].length === 0)
      return pe("InvalidAttr", "Attribute '" + n[o][2] + "' has no space in starting.", pn(n[o]));
    if (n[o][3] !== void 0 && n[o][4] === void 0)
      return pe("InvalidAttr", "Attribute '" + n[o][2] + "' is without value.", pn(n[o]));
    if (n[o][3] === void 0 && !e.allowBooleanAttributes)
      return pe("InvalidAttr", "boolean attribute '" + n[o][2] + "' is not allowed.", pn(n[o]));
    const i = n[o][2];
    if (!G5(i))
      return pe("InvalidAttr", "Attribute '" + i + "' is an invalid name.", pn(n[o]));
    if (!r.hasOwnProperty(i))
      r[i] = 1;
    else
      return pe("InvalidAttr", "Attribute '" + i + "' is repeated.", pn(n[o]));
  }
  return !0;
}
function H5(t, e) {
  let n = /\d/;
  for (t[e] === "x" && (e++, n = /[\da-fA-F]/); e < t.length; e++) {
    if (t[e] === ";")
      return e;
    if (!t[e].match(n))
      break;
  }
  return -1;
}
function X5(t, e) {
  if (e++, t[e] === ";")
    return -1;
  if (t[e] === "#")
    return e++, H5(t, e);
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
function G5(t) {
  return Sr(t);
}
function W5(t) {
  return Sr(t);
}
function _e(t, e) {
  const n = t.substring(0, e).split(/\r?\n/);
  return {
    line: n.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: n[n.length - 1].length + 1
  };
}
function pn(t) {
  return t.startIndex + t[1].length;
}
const Y5 = {
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
}, K5 = function(t) {
  return Object.assign({}, Y5, t);
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
class J5 {
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
            let c, d;
            if ([c, d, n] = this.readEntityExp(e, n + 1, this.suppressValidationErr), d.indexOf("&") === -1) {
              const l = c.replace(/[.\-+*:]/g, "\\.");
              r[c] = {
                regx: RegExp(`&${l};`, "g"),
                val: d
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
    if (dn(r), n = Fe(e, n), !this.suppressValidationErr) {
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
    !this.suppressValidationErr && dn(r), n = Fe(e, n);
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
    dn(r), n = Fe(e, n);
    let o = "";
    for (; n < e.length && !/\s/.test(e[n]); )
      o += e[n], n++;
    if (!dn(o))
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
        if (c = c.trim(), !dn(c))
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
function dn(t) {
  if (Sr(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Q5 = /^[-+]?0x[a-fA-F0-9]+$/, Z5 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, eW = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function tW(t, e = {}) {
  if (e = Object.assign({}, eW, e), !t || typeof t != "string") return t;
  let n = t.trim();
  if (e.skipLike !== void 0 && e.skipLike.test(n)) return t;
  if (t === "0") return 0;
  if (e.hex && Q5.test(n))
    return iW(n, 16);
  if (n.includes("e") || n.includes("E"))
    return rW(t, n, e);
  {
    const r = Z5.exec(n);
    if (r) {
      const o = r[1] || "", i = r[2];
      let s = oW(r[3]);
      const a = o ? (
        // 0., -00., 000.
        t[i.length + 1] === "."
      ) : t[i.length] === ".";
      if (!e.leadingZeros && (i.length > 1 || i.length === 1 && !a))
        return t;
      {
        const c = Number(n), d = String(c);
        if (c === 0) return c;
        if (d.search(/[eE]/) !== -1)
          return e.eNotation ? c : t;
        if (n.indexOf(".") !== -1)
          return d === "0" || d === s || d === `${o}${s}` ? c : t;
        let l = i ? s : n;
        return i ? l === d || o + l === d ? c : t : l === d || l === o + d ? c : t;
      }
    } else
      return t;
  }
}
const nW = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function rW(t, e, n) {
  if (!n.eNotation) return t;
  const r = e.match(nW);
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
function oW(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substring(0, t.length - 1))), t;
}
function iW(t, e) {
  if (parseInt) return parseInt(t, e);
  if (Number.parseInt) return Number.parseInt(t, e);
  if (window && window.parseInt) return window.parseInt(t, e);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function Vl(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (e) => {
    for (const n of t)
      if (typeof n == "string" && e === n || n instanceof RegExp && n.test(e))
        return !0;
  } : () => !1;
}
class sW {
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
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (n, r) => Wa(r, 10, "&#") },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (n, r) => Wa(r, 16, "&#x") }
    }, this.addExternalEntities = aW, this.parseXml = dW, this.parseTextData = cW, this.resolveNameSpace = lW, this.buildAttributesMap = pW, this.isItStopNode = gW, this.replaceEntitiesValue = mW, this.readStopNodeData = vW, this.saveTextToParentTag = hW, this.addChild = fW, this.ignoreAttributesFn = Vl(this.options.ignoreAttributes), this.options.stopNodes && this.options.stopNodes.length > 0) {
      this.stopNodesExact = /* @__PURE__ */ new Set(), this.stopNodesWildcard = /* @__PURE__ */ new Set();
      for (let n = 0; n < this.options.stopNodes.length; n++) {
        const r = this.options.stopNodes[n];
        typeof r == "string" && (r.startsWith("*.") ? this.stopNodesWildcard.add(r.substring(2)) : this.stopNodesExact.add(r));
      }
    }
  }
}
function aW(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n], o = r.replace(/[.\-+*:]/g, "\\.");
    this.lastEntities[r] = {
      regex: new RegExp("&" + o + ";", "g"),
      val: t[r]
    };
  }
}
function cW(t, e, n, r, o, i, s) {
  if (t !== void 0 && (this.options.trimValues && !r && (t = t.trim()), t.length > 0)) {
    s || (t = this.replaceEntitiesValue(t));
    const a = this.options.tagValueProcessor(e, t, n, o, i);
    return a == null ? t : typeof a != typeof t || a !== t ? a : this.options.trimValues ? ti(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? ti(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function lW(t) {
  if (this.options.removeNSPrefix) {
    const e = t.split(":"), n = t.charAt(0) === "/" ? "/" : "";
    if (e[0] === "xmlns")
      return "";
    e.length === 2 && (t = n + e[1]);
  }
  return t;
}
const uW = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function pW(t, e) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const n = $l(t, uW), r = n.length, o = {};
    for (let i = 0; i < r; i++) {
      const s = this.resolveNameSpace(n[i][1]);
      if (this.ignoreAttributesFn(s, e))
        continue;
      let a = n[i][4], c = this.options.attributeNamePrefix + s;
      if (s.length)
        if (this.options.transformAttributeName && (c = this.options.transformAttributeName(c)), c === "__proto__" && (c = "#__proto__"), a !== void 0) {
          this.options.trimValues && (a = a.trim()), a = this.replaceEntitiesValue(a);
          const d = this.options.attributeValueProcessor(s, a, e);
          d == null ? o[c] = a : typeof d != typeof a || d !== a ? o[c] = d : o[c] = ti(
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
const dW = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const e = new Nt("!xml");
  let n = e, r = "", o = "";
  const i = new J5(this.options.processEntities);
  for (let s = 0; s < t.length; s++)
    if (t[s] === "<")
      if (t[s + 1] === "/") {
        const c = _t(t, ">", s, "Closing Tag is not closed.");
        let d = t.substring(s + 2, c).trim();
        if (this.options.removeNSPrefix) {
          const p = d.indexOf(":");
          p !== -1 && (d = d.substr(p + 1));
        }
        this.options.transformTagName && (d = this.options.transformTagName(d)), n && (r = this.saveTextToParentTag(r, n, o));
        const l = o.substring(o.lastIndexOf(".") + 1);
        if (d && this.options.unpairedTags.indexOf(d) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${d}>`);
        let u = 0;
        l && this.options.unpairedTags.indexOf(l) !== -1 ? (u = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : u = o.lastIndexOf("."), o = o.substring(0, u), n = this.tagsNodeStack.pop(), r = "", s = c;
      } else if (t[s + 1] === "?") {
        let c = ei(t, s, !1, "?>");
        if (!c) throw new Error("Pi Tag is not closed.");
        if (r = this.saveTextToParentTag(r, n, o), !(this.options.ignoreDeclaration && c.tagName === "?xml" || this.options.ignorePiTags)) {
          const d = new Nt(c.tagName);
          d.add(this.options.textNodeName, ""), c.tagName !== c.tagExp && c.attrExpPresent && (d[":@"] = this.buildAttributesMap(c.tagExp, o)), this.addChild(n, d, o, s);
        }
        s = c.closeIndex + 1;
      } else if (t.substr(s + 1, 3) === "!--") {
        const c = _t(t, "-->", s + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const d = t.substring(s + 4, c - 2);
          r = this.saveTextToParentTag(r, n, o), n.add(this.options.commentPropName, [{ [this.options.textNodeName]: d }]);
        }
        s = c;
      } else if (t.substr(s + 1, 2) === "!D") {
        const c = i.readDocType(t, s);
        this.docTypeEntities = c.entities, s = c.i;
      } else if (t.substr(s + 1, 2) === "![") {
        const c = _t(t, "]]>", s, "CDATA is not closed.") - 2, d = t.substring(s + 9, c);
        r = this.saveTextToParentTag(r, n, o);
        let l = this.parseTextData(d, n.tagname, o, !0, !1, !0, !0);
        l == null && (l = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [{ [this.options.textNodeName]: d }]) : n.add(this.options.textNodeName, l), s = c + 2;
      } else {
        let c = ei(t, s, this.options.removeNSPrefix), d = c.tagName;
        const l = c.rawTagName;
        let u = c.tagExp, p = c.attrExpPresent, h = c.closeIndex;
        if (this.options.transformTagName) {
          const x = this.options.transformTagName(d);
          u === d && (u = x), d = x;
        }
        n && r && n.tagname !== "!xml" && (r = this.saveTextToParentTag(r, n, o, !1));
        const f = n;
        f && this.options.unpairedTags.indexOf(f.tagname) !== -1 && (n = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), d !== e.tagname && (o += o ? "." + d : d);
        const b = s;
        if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, o, d)) {
          let x = "";
          if (u.length > 0 && u.lastIndexOf("/") === u.length - 1)
            d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), o = o.substr(0, o.length - 1), u = d) : u = u.substr(0, u.length - 1), s = c.closeIndex;
          else if (this.options.unpairedTags.indexOf(d) !== -1)
            s = c.closeIndex;
          else {
            const w = this.readStopNodeData(t, l, h + 1);
            if (!w) throw new Error(`Unexpected end of ${l}`);
            s = w.i, x = w.tagContent;
          }
          const S = new Nt(d);
          d !== u && p && (S[":@"] = this.buildAttributesMap(
            u,
            o
          )), x && (x = this.parseTextData(x, d, o, !0, p, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), S.add(this.options.textNodeName, x), this.addChild(n, S, o, b);
        } else {
          if (u.length > 0 && u.lastIndexOf("/") === u.length - 1) {
            if (d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), o = o.substr(0, o.length - 1), u = d) : u = u.substr(0, u.length - 1), this.options.transformTagName) {
              const S = this.options.transformTagName(d);
              u === d && (u = S), d = S;
            }
            const x = new Nt(d);
            d !== u && p && (x[":@"] = this.buildAttributesMap(u, o)), this.addChild(n, x, o, b), o = o.substr(0, o.lastIndexOf("."));
          } else {
            const x = new Nt(d);
            this.tagsNodeStack.push(n), d !== u && p && (x[":@"] = this.buildAttributesMap(u, o)), this.addChild(n, x, o, b), n = x;
          }
          r = "", s = h;
        }
      }
    else
      r += t[s];
  return e.child;
};
function fW(t, e, n, r) {
  this.options.captureMetaData || (r = void 0);
  const o = this.options.updateTag(e.tagname, n, e[":@"]);
  o === !1 || (typeof o == "string" && (e.tagname = o), t.addChild(e, r));
}
const mW = function(t) {
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
function hW(t, e, n, r) {
  return t && (r === void 0 && (r = e.child.length === 0), t = this.parseTextData(
    t,
    e.tagname,
    n,
    !1,
    e[":@"] ? Object.keys(e[":@"]).length !== 0 : !1,
    r
  ), t !== void 0 && t !== "" && e.add(this.options.textNodeName, t), t = ""), t;
}
function gW(t, e, n, r) {
  return !!(e && e.has(r) || t && t.has(n));
}
function yW(t, e, n = ">") {
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
  const o = yW(t, e + 1, r);
  if (!o) return;
  let i = o.data;
  const s = o.index, a = i.search(/\s/);
  let c = i, d = !0;
  a !== -1 && (c = i.substring(0, a), i = i.substring(a + 1).trimStart());
  const l = c;
  if (n) {
    const u = c.indexOf(":");
    u !== -1 && (c = c.substr(u + 1), d = c !== o.data.substr(u + 1));
  }
  return {
    tagName: c,
    tagExp: i,
    closeIndex: s,
    attrExpPresent: d,
    rawTagName: l
  };
}
function vW(t, e, n) {
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
    return r === "true" ? !0 : r === "false" ? !1 : tW(t, n);
  } else
    return M5(t) ? t : "";
}
function Wa(t, e, n) {
  const r = Number.parseInt(t, e);
  return r >= 0 && r <= 1114111 ? String.fromCodePoint(r) : n + t + ";";
}
const jo = Nt.getMetaDataSymbol();
function bW(t, e) {
  return zl(t, e);
}
function zl(t, e, n) {
  let r;
  const o = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i], a = xW(s);
    let c = "";
    if (n === void 0 ? c = a : c = n + "." + a, a === e.textNodeName)
      r === void 0 ? r = s[a] : r += "" + s[a];
    else {
      if (a === void 0)
        continue;
      if (s[a]) {
        let d = zl(s[a], e, c);
        const l = EW(d, e);
        s[jo] !== void 0 && (d[jo] = s[jo]), s[":@"] ? wW(d, s[":@"], c, e) : Object.keys(d).length === 1 && d[e.textNodeName] !== void 0 && !e.alwaysCreateTextNode ? d = d[e.textNodeName] : Object.keys(d).length === 0 && (e.alwaysCreateTextNode ? d[e.textNodeName] = "" : d = ""), o[a] !== void 0 && o.hasOwnProperty(a) ? (Array.isArray(o[a]) || (o[a] = [o[a]]), o[a].push(d)) : e.isArray(a, c, l) ? o[a] = [d] : o[a] = d;
      }
    }
  }
  return typeof r == "string" ? r.length > 0 && (o[e.textNodeName] = r) : r !== void 0 && (o[e.textNodeName] = r), o;
}
function xW(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (r !== ":@") return r;
  }
}
function wW(t, e, n, r) {
  if (e) {
    const o = Object.keys(e), i = o.length;
    for (let s = 0; s < i; s++) {
      const a = o[s];
      r.isArray(a, n + "." + a, !0, !0) ? t[a] = [e[a]] : t[a] = e[a];
    }
  }
}
function EW(t, e) {
  const { textNodeName: n } = e, r = Object.keys(t).length;
  return !!(r === 0 || r === 1 && (t[n] || typeof t[n] == "boolean" || t[n] === 0));
}
class TW {
  constructor(e) {
    this.externalEntities = {}, this.options = K5(e);
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
      const i = U5(e, n);
      if (i !== !0)
        throw Error(`${i.err.msg}:${i.err.line}:${i.err.col}`);
    }
    const r = new sW(this.options);
    r.addExternalEntities(this.externalEntities);
    const o = r.parseXml(e);
    return this.options.preserveOrder || o === void 0 ? o : bW(o, this.options);
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
const SW = `
`;
function NW(t, e) {
  let n = "";
  return e.format && e.indentBy.length > 0 && (n = SW), Hl(t, e, "", n);
}
function Hl(t, e, n, r) {
  let o = "", i = !1;
  for (let s = 0; s < t.length; s++) {
    const a = t[s], c = OW(a);
    if (c === void 0) continue;
    let d = "";
    if (n.length === 0 ? d = c : d = `${n}.${c}`, c === e.textNodeName) {
      let f = a[c];
      AW(d, e) || (f = e.tagValueProcessor(c, f), f = Xl(f, e)), i && (o += r), o += f, i = !1;
      continue;
    } else if (c === e.cdataPropName) {
      i && (o += r), o += `<![CDATA[${a[c][0][e.textNodeName]}]]>`, i = !1;
      continue;
    } else if (c === e.commentPropName) {
      o += r + `<!--${a[c][0][e.textNodeName]}-->`, i = !0;
      continue;
    } else if (c[0] === "?") {
      const f = Ya(a[":@"], e), b = c === "?xml" ? "" : r;
      let x = a[c][0][e.textNodeName];
      x = x.length !== 0 ? " " + x : "", o += b + `<${c}${x}${f}?>`, i = !0;
      continue;
    }
    let l = r;
    l !== "" && (l += e.indentBy);
    const u = Ya(a[":@"], e), p = r + `<${c}${u}`, h = Hl(a[c], e, d, l);
    e.unpairedTags.indexOf(c) !== -1 ? e.suppressUnpairedNode ? o += p + ">" : o += p + "/>" : (!h || h.length === 0) && e.suppressEmptyNode ? o += p + "/>" : h && h.endsWith(">") ? o += p + `>${h}${r}</${c}>` : (o += p + ">", h && r !== "" && (h.includes("/>") || h.includes("</")) ? o += r + e.indentBy + h + r : o += h, o += `</${c}>`), i = !0;
  }
  return o;
}
function OW(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (t.hasOwnProperty(r) && r !== ":@")
      return r;
  }
}
function Ya(t, e) {
  let n = "";
  if (t && !e.ignoreAttributes)
    for (let r in t) {
      if (!t.hasOwnProperty(r)) continue;
      let o = e.attributeValueProcessor(r, t[r]);
      o = Xl(o, e), o === !0 && e.suppressBooleanAttributes ? n += ` ${r.substr(e.attributeNamePrefix.length)}` : n += ` ${r.substr(e.attributeNamePrefix.length)}="${o}"`;
    }
  return n;
}
function AW(t, e) {
  t = t.substr(0, t.length - e.textNodeName.length - 1);
  let n = t.substr(t.lastIndexOf(".") + 1);
  for (let r in e.stopNodes)
    if (e.stopNodes[r] === t || e.stopNodes[r] === "*." + n) return !0;
  return !1;
}
function Xl(t, e) {
  if (t && t.length > 0 && e.processEntities)
    for (let n = 0; n < e.entities.length; n++) {
      const r = e.entities[n];
      t = t.replace(r.regex, r.val);
    }
  return t;
}
const _W = {
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
  this.options = Object.assign({}, _W, t), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
    return !1;
  } : (this.ignoreAttributesFn = Vl(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = CW), this.processTextOrObjNode = DW, this.options.format ? (this.indentate = LW, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
    return "";
  }, this.tagEndChar = ">", this.newLine = "");
}
xt.prototype.build = function(t) {
  return this.options.preserveOrder ? NW(t, this.options) : (Array.isArray(t) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (t = {
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
        let c = "", d = "";
        for (let l = 0; l < a; l++) {
          const u = t[s][l];
          if (!(typeof u > "u")) if (u === null)
            s[0] === "?" ? o += this.indentate(e) + "<" + s + "?" + this.tagEndChar : o += this.indentate(e) + "<" + s + "/" + this.tagEndChar;
          else if (typeof u == "object")
            if (this.options.oneListGroup) {
              const p = this.j2x(u, e + 1, n.concat(s));
              c += p.val, this.options.attributesGroupName && u.hasOwnProperty(this.options.attributesGroupName) && (d += p.attrStr);
            } else
              c += this.processTextOrObjNode(u, s, e, n);
          else if (this.options.oneListGroup) {
            let p = this.options.tagValueProcessor(s, u);
            p = this.replaceEntitiesValue(p), c += p;
          } else
            c += this.buildTextValNode(u, s, "", e);
        }
        this.options.oneListGroup && (c = this.buildObjectNode(c, s, d, e)), o += c;
      } else if (this.options.attributesGroupName && s === this.options.attributesGroupName) {
        const a = Object.keys(t[s]), c = a.length;
        for (let d = 0; d < c; d++)
          r += this.buildAttrPairStr(a[d], "" + t[s][a[d]]);
      } else
        o += this.processTextOrObjNode(t[s], s, e, n);
  return { attrStr: r, val: o };
};
xt.prototype.buildAttrPairStr = function(t, e) {
  return e = this.options.attributeValueProcessor(t, "" + e), e = this.replaceEntitiesValue(e), this.options.suppressBooleanAttributes && e === "true" ? " " + t : " " + t + '="' + e + '"';
};
function DW(t, e, n, r) {
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
function LW(t) {
  return this.options.indentBy.repeat(t);
}
function CW(t) {
  return t.startsWith(this.options.attributeNamePrefix) && t !== this.options.textNodeName ? t.substr(this.attrPrefixLen) : !1;
}
class RW {
  constructor(e) {
    Ue(this, "db");
    const n = e || Q.join(
      Se.getPath("userData"),
      "feeddownloader.sqlite"
    );
    this.db = new Qu(n), this.init();
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
class PW {
  constructor(e) {
    Ue(this, "db");
    this.db = e || new RW();
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
    const r = new TW({ ignoreAttributes: !1, attributeNamePrefix: "" }).parse(e);
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
var ft = Zu, IW = process.cwd, Wn = null, kW = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function() {
  return Wn || (Wn = IW.call(process)), Wn;
};
try {
  process.cwd();
} catch {
}
if (typeof process.chdir == "function") {
  var Ka = process.chdir;
  process.chdir = function(t) {
    Wn = null, Ka.call(process, t);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, Ka);
}
var FW = qW;
function qW(t) {
  ft.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && e(t), t.lutimes || n(t), t.chown = i(t.chown), t.fchown = i(t.fchown), t.lchown = i(t.lchown), t.chmod = r(t.chmod), t.fchmod = r(t.fchmod), t.lchmod = r(t.lchmod), t.chownSync = s(t.chownSync), t.fchownSync = s(t.fchownSync), t.lchownSync = s(t.lchownSync), t.chmodSync = o(t.chmodSync), t.fchmodSync = o(t.fchmodSync), t.lchmodSync = o(t.lchmodSync), t.stat = a(t.stat), t.fstat = a(t.fstat), t.lstat = a(t.lstat), t.statSync = c(t.statSync), t.fstatSync = c(t.fstatSync), t.lstatSync = c(t.lstatSync), t.chmod && !t.lchmod && (t.lchmod = function(l, u, p) {
    p && process.nextTick(p);
  }, t.lchmodSync = function() {
  }), t.chown && !t.lchown && (t.lchown = function(l, u, p, h) {
    h && process.nextTick(h);
  }, t.lchownSync = function() {
  }), kW === "win32" && (t.rename = typeof t.rename != "function" ? t.rename : function(l) {
    function u(p, h, f) {
      var b = Date.now(), x = 0;
      l(p, h, function S(w) {
        if (w && (w.code === "EACCES" || w.code === "EPERM" || w.code === "EBUSY") && Date.now() - b < 6e4) {
          setTimeout(function() {
            t.stat(h, function(y, E) {
              y && y.code === "ENOENT" ? l(p, h, S) : f(w);
            });
          }, x), x < 100 && (x += 10);
          return;
        }
        f && f(w);
      });
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(u, l), u;
  }(t.rename)), t.read = typeof t.read != "function" ? t.read : function(l) {
    function u(p, h, f, b, x, S) {
      var w;
      if (S && typeof S == "function") {
        var y = 0;
        w = function(E, A, L) {
          if (E && E.code === "EAGAIN" && y < 10)
            return y++, l.call(t, p, h, f, b, x, w);
          S.apply(this, arguments);
        };
      }
      return l.call(t, p, h, f, b, x, w);
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(u, l), u;
  }(t.read), t.readSync = typeof t.readSync != "function" ? t.readSync : /* @__PURE__ */ function(l) {
    return function(u, p, h, f, b) {
      for (var x = 0; ; )
        try {
          return l.call(t, u, p, h, f, b);
        } catch (S) {
          if (S.code === "EAGAIN" && x < 10) {
            x++;
            continue;
          }
          throw S;
        }
    };
  }(t.readSync);
  function e(l) {
    l.lchmod = function(u, p, h) {
      l.open(
        u,
        ft.O_WRONLY | ft.O_SYMLINK,
        p,
        function(f, b) {
          if (f) {
            h && h(f);
            return;
          }
          l.fchmod(b, p, function(x) {
            l.close(b, function(S) {
              h && h(x || S);
            });
          });
        }
      );
    }, l.lchmodSync = function(u, p) {
      var h = l.openSync(u, ft.O_WRONLY | ft.O_SYMLINK, p), f = !0, b;
      try {
        b = l.fchmodSync(h, p), f = !1;
      } finally {
        if (f)
          try {
            l.closeSync(h);
          } catch {
          }
        else
          l.closeSync(h);
      }
      return b;
    };
  }
  function n(l) {
    ft.hasOwnProperty("O_SYMLINK") && l.futimes ? (l.lutimes = function(u, p, h, f) {
      l.open(u, ft.O_SYMLINK, function(b, x) {
        if (b) {
          f && f(b);
          return;
        }
        l.futimes(x, p, h, function(S) {
          l.close(x, function(w) {
            f && f(S || w);
          });
        });
      });
    }, l.lutimesSync = function(u, p, h) {
      var f = l.openSync(u, ft.O_SYMLINK), b, x = !0;
      try {
        b = l.futimesSync(f, p, h), x = !1;
      } finally {
        if (x)
          try {
            l.closeSync(f);
          } catch {
          }
        else
          l.closeSync(f);
      }
      return b;
    }) : l.futimes && (l.lutimes = function(u, p, h, f) {
      f && process.nextTick(f);
    }, l.lutimesSync = function() {
    });
  }
  function r(l) {
    return l && function(u, p, h) {
      return l.call(t, u, p, function(f) {
        d(f) && (f = null), h && h.apply(this, arguments);
      });
    };
  }
  function o(l) {
    return l && function(u, p) {
      try {
        return l.call(t, u, p);
      } catch (h) {
        if (!d(h)) throw h;
      }
    };
  }
  function i(l) {
    return l && function(u, p, h, f) {
      return l.call(t, u, p, h, function(b) {
        d(b) && (b = null), f && f.apply(this, arguments);
      });
    };
  }
  function s(l) {
    return l && function(u, p, h) {
      try {
        return l.call(t, u, p, h);
      } catch (f) {
        if (!d(f)) throw f;
      }
    };
  }
  function a(l) {
    return l && function(u, p, h) {
      typeof p == "function" && (h = p, p = null);
      function f(b, x) {
        x && (x.uid < 0 && (x.uid += 4294967296), x.gid < 0 && (x.gid += 4294967296)), h && h.apply(this, arguments);
      }
      return p ? l.call(t, u, p, f) : l.call(t, u, f);
    };
  }
  function c(l) {
    return l && function(u, p) {
      var h = p ? l.call(t, u, p) : l.call(t, u);
      return h && (h.uid < 0 && (h.uid += 4294967296), h.gid < 0 && (h.gid += 4294967296)), h;
    };
  }
  function d(l) {
    if (!l || l.code === "ENOSYS")
      return !0;
    var u = !process.getuid || process.getuid() !== 0;
    return !!(u && (l.code === "EINVAL" || l.code === "EPERM"));
  }
}
var Ja = Le.Stream, MW = jW;
function jW(t) {
  return {
    ReadStream: e,
    WriteStream: n
  };
  function e(r, o) {
    if (!(this instanceof e)) return new e(r, o);
    Ja.call(this);
    var i = this;
    this.path = r, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 64 * 1024, o = o || {};
    for (var s = Object.keys(o), a = 0, c = s.length; a < c; a++) {
      var d = s[a];
      this[d] = o[d];
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
    Ja.call(this), this.path = r, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, o = o || {};
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
var UW = $W, BW = Object.getPrototypeOf || function(t) {
  return t.__proto__;
};
function $W(t) {
  if (t === null || typeof t != "object")
    return t;
  if (t instanceof Object)
    var e = { __proto__: BW(t) };
  else
    var e = /* @__PURE__ */ Object.create(null);
  return Object.getOwnPropertyNames(t).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
  }), e;
}
var se = pi, VW = FW, zW = MW, HW = UW, Un = bt, Ee, ar;
typeof Symbol == "function" && typeof Symbol.for == "function" ? (Ee = Symbol.for("graceful-fs.queue"), ar = Symbol.for("graceful-fs.previous")) : (Ee = "___graceful-fs.queue", ar = "___graceful-fs.previous");
function XW() {
}
function Gl(t, e) {
  Object.defineProperty(t, Ee, {
    get: function() {
      return e;
    }
  });
}
var kt = XW;
Un.debuglog ? kt = Un.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (kt = function() {
  var t = Un.format.apply(Un, arguments);
  t = "GFS4: " + t.split(/\n/).join(`
GFS4: `), console.error(t);
});
if (!se[Ee]) {
  var GW = z[Ee] || [];
  Gl(se, GW), se.close = function(t) {
    function e(n, r) {
      return t.call(se, n, function(o) {
        o || Qa(), typeof r == "function" && r.apply(this, arguments);
      });
    }
    return Object.defineProperty(e, ar, {
      value: t
    }), e;
  }(se.close), se.closeSync = function(t) {
    function e(n) {
      t.apply(se, arguments), Qa();
    }
    return Object.defineProperty(e, ar, {
      value: t
    }), e;
  }(se.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    kt(se[Ee]), Ec.equal(se[Ee].length, 0);
  });
}
z[Ee] || Gl(z, se[Ee]);
var an = Xi(HW(se));
process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !se.__patched && (an = Xi(se), se.__patched = !0);
function Xi(t) {
  VW(t), t.gracefulify = Xi, t.createReadStream = A, t.createWriteStream = L;
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
    function j(B, $, q, k, K) {
      return r(B, $, q, function(Y) {
        Y && (Y.code === "EMFILE" || Y.code === "ENFILE") ? $t([j, [B, $, q, k], Y, K || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  var i = t.appendFile;
  i && (t.appendFile = s);
  function s(m, _, D, I) {
    return typeof D == "function" && (I = D, D = null), j(m, _, D, I);
    function j(B, $, q, k, K) {
      return i(B, $, q, function(Y) {
        Y && (Y.code === "EMFILE" || Y.code === "ENFILE") ? $t([j, [B, $, q, k], Y, K || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  var a = t.copyFile;
  a && (t.copyFile = c);
  function c(m, _, D, I) {
    return typeof D == "function" && (I = D, D = 0), j(m, _, D, I);
    function j(B, $, q, k, K) {
      return a(B, $, q, function(Y) {
        Y && (Y.code === "EMFILE" || Y.code === "ENFILE") ? $t([j, [B, $, q, k], Y, K || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  var d = t.readdir;
  t.readdir = u;
  var l = /^v[0-5]\./;
  function u(m, _, D) {
    typeof _ == "function" && (D = _, _ = null);
    var I = l.test(process.version) ? function($, q, k, K) {
      return d($, j(
        $,
        q,
        k,
        K
      ));
    } : function($, q, k, K) {
      return d($, q, j(
        $,
        q,
        k,
        K
      ));
    };
    return I(m, _, D);
    function j(B, $, q, k) {
      return function(K, Y) {
        K && (K.code === "EMFILE" || K.code === "ENFILE") ? $t([
          I,
          [B, $, q],
          K,
          k || Date.now(),
          Date.now()
        ]) : (Y && Y.sort && Y.sort(), typeof q == "function" && q.call(this, K, Y));
      };
    }
  }
  if (process.version.substr(0, 4) === "v0.8") {
    var p = zW(t);
    S = p.ReadStream, y = p.WriteStream;
  }
  var h = t.ReadStream;
  h && (S.prototype = Object.create(h.prototype), S.prototype.open = w);
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
  var b = S;
  Object.defineProperty(t, "FileReadStream", {
    get: function() {
      return b;
    },
    set: function(m) {
      b = m;
    },
    enumerable: !0,
    configurable: !0
  });
  var x = y;
  Object.defineProperty(t, "FileWriteStream", {
    get: function() {
      return x;
    },
    set: function(m) {
      x = m;
    },
    enumerable: !0,
    configurable: !0
  });
  function S(m, _) {
    return this instanceof S ? (h.apply(this, arguments), this) : S.apply(Object.create(S.prototype), arguments);
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
    function j(B, $, q, k, K) {
      return P(B, $, q, function(Y, V) {
        Y && (Y.code === "EMFILE" || Y.code === "ENFILE") ? $t([j, [B, $, q, k], Y, K || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  return t;
}
function $t(t) {
  kt("ENQUEUE", t[0].name, t[1]), se[Ee].push(t), Gi();
}
var Bn;
function Qa() {
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
      var a = Date.now() - i, c = Math.max(i - o, 1), d = Math.min(c * 1.2, 100);
      a >= d ? (kt("RETRY", e.name, n), e.apply(null, n.concat([o]))) : se[Ee].push(t);
    }
    Bn === void 0 && (Bn = setTimeout(Gi, 0));
  }
}
(function(t) {
  const e = ge.fromCallback, n = an, r = [
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
  }, t.read = function(o, i, s, a, c, d) {
    return typeof d == "function" ? n.read(o, i, s, a, c, d) : new Promise((l, u) => {
      n.read(o, i, s, a, c, (p, h, f) => {
        if (p) return u(p);
        l({ bytesRead: h, buffer: f });
      });
    });
  }, t.write = function(o, i, ...s) {
    return typeof s[s.length - 1] == "function" ? n.write(o, i, ...s) : new Promise((a, c) => {
      n.write(o, i, ...s, (d, l, u) => {
        if (d) return c(d);
        a({ bytesWritten: l, buffer: u });
      });
    });
  }, t.readv = function(o, i, ...s) {
    return typeof s[s.length - 1] == "function" ? n.readv(o, i, ...s) : new Promise((a, c) => {
      n.readv(o, i, ...s, (d, l, u) => {
        if (d) return c(d);
        a({ bytesRead: l, buffers: u });
      });
    });
  }, t.writev = function(o, i, ...s) {
    return typeof s[s.length - 1] == "function" ? n.writev(o, i, ...s) : new Promise((a, c) => {
      n.writev(o, i, ...s, (d, l, u) => {
        if (d) return c(d);
        a({ bytesWritten: l, buffers: u });
      });
    });
  }, typeof n.realpath.native == "function" ? t.realpath.native = e(n.realpath.native) : process.emitWarning(
    "fs.realpath.native is not a function. Is fs being monkey-patched?",
    "Warning",
    "fs-extra-WARN0003"
  );
})(Pe);
var Wi = {}, Wl = {};
const WW = Q;
Wl.checkPath = function(e) {
  if (process.platform === "win32" && /[<>:"|?*]/.test(e.replace(WW.parse(e).root, ""))) {
    const r = new Error(`Path contains invalid characters: ${e}`);
    throw r.code = "EINVAL", r;
  }
};
const Yl = Pe, { checkPath: Kl } = Wl, Jl = (t) => {
  const e = { mode: 511 };
  return typeof t == "number" ? t : { ...e, ...t }.mode;
};
Wi.makeDir = async (t, e) => (Kl(t), Yl.mkdir(t, {
  mode: Jl(e),
  recursive: !0
}));
Wi.makeDirSync = (t, e) => (Kl(t), Yl.mkdirSync(t, {
  mode: Jl(e),
  recursive: !0
}));
const YW = ge.fromPromise, { makeDir: KW, makeDirSync: Uo } = Wi, Bo = YW(KW);
var tt = {
  mkdirs: Bo,
  mkdirsSync: Uo,
  // alias
  mkdirp: Bo,
  mkdirpSync: Uo,
  ensureDir: Bo,
  ensureDirSync: Uo
};
const JW = ge.fromPromise, Ql = Pe;
function QW(t) {
  return Ql.access(t).then(() => !0).catch(() => !1);
}
var jt = {
  pathExists: JW(QW),
  pathExistsSync: Ql.existsSync
};
const Yt = Pe, ZW = ge.fromPromise;
async function eY(t, e, n) {
  const r = await Yt.open(t, "r+");
  let o = null;
  try {
    await Yt.futimes(r, e, n);
  } finally {
    try {
      await Yt.close(r);
    } catch (i) {
      o = i;
    }
  }
  if (o)
    throw o;
}
function tY(t, e, n) {
  const r = Yt.openSync(t, "r+");
  return Yt.futimesSync(r, e, n), Yt.closeSync(r);
}
var Zl = {
  utimesMillis: ZW(eY),
  utimesMillisSync: tY
};
const nn = Pe, ve = Q, Za = ge.fromPromise;
function nY(t, e, n) {
  const r = n.dereference ? (o) => nn.stat(o, { bigint: !0 }) : (o) => nn.lstat(o, { bigint: !0 });
  return Promise.all([
    r(t),
    r(e).catch((o) => {
      if (o.code === "ENOENT") return null;
      throw o;
    })
  ]).then(([o, i]) => ({ srcStat: o, destStat: i }));
}
function rY(t, e, n) {
  let r;
  const o = n.dereference ? (s) => nn.statSync(s, { bigint: !0 }) : (s) => nn.lstatSync(s, { bigint: !0 }), i = o(t);
  try {
    r = o(e);
  } catch (s) {
    if (s.code === "ENOENT") return { srcStat: i, destStat: null };
    throw s;
  }
  return { srcStat: i, destStat: r };
}
async function oY(t, e, n, r) {
  const { srcStat: o, destStat: i } = await nY(t, e, r);
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
function iY(t, e, n, r) {
  const { srcStat: o, destStat: i } = rY(t, e, r);
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
async function eu(t, e, n, r) {
  const o = ve.resolve(ve.dirname(t)), i = ve.resolve(ve.dirname(n));
  if (i === o || i === ve.parse(i).root) return;
  let s;
  try {
    s = await nn.stat(i, { bigint: !0 });
  } catch (a) {
    if (a.code === "ENOENT") return;
    throw a;
  }
  if (Rn(e, s))
    throw new Error(Nr(t, n, r));
  return eu(t, e, i, r);
}
function tu(t, e, n, r) {
  const o = ve.resolve(ve.dirname(t)), i = ve.resolve(ve.dirname(n));
  if (i === o || i === ve.parse(i).root) return;
  let s;
  try {
    s = nn.statSync(i, { bigint: !0 });
  } catch (a) {
    if (a.code === "ENOENT") return;
    throw a;
  }
  if (Rn(e, s))
    throw new Error(Nr(t, n, r));
  return tu(t, e, i, r);
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
var cn = {
  // checkPaths
  checkPaths: Za(oY),
  checkPathsSync: iY,
  // checkParent
  checkParentPaths: Za(eu),
  checkParentPathsSync: tu,
  // Misc
  isSrcSubdir: Yi,
  areIdentical: Rn
};
async function sY(t, e) {
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
var aY = {
  asyncIteratorConcurrentProcess: sY
};
const Ne = Pe, yn = Q, { mkdirs: cY } = tt, { pathExists: lY } = jt, { utimesMillis: uY } = Zl, vn = cn, { asyncIteratorConcurrentProcess: pY } = aY;
async function dY(t, e, n = {}) {
  typeof n == "function" && (n = { filter: n }), n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0001"
  );
  const { srcStat: r, destStat: o } = await vn.checkPaths(t, e, "copy", n);
  if (await vn.checkParentPaths(t, r, e, "copy"), !await nu(t, e, n)) return;
  const s = yn.dirname(e);
  await lY(s) || await cY(s), await ru(o, t, e, n);
}
async function nu(t, e, n) {
  return n.filter ? n.filter(t, e) : !0;
}
async function ru(t, e, n, r) {
  const i = await (r.dereference ? Ne.stat : Ne.lstat)(e);
  if (i.isDirectory()) return gY(i, t, e, n, r);
  if (i.isFile() || i.isCharacterDevice() || i.isBlockDevice()) return fY(i, t, e, n, r);
  if (i.isSymbolicLink()) return yY(t, e, n, r);
  throw i.isSocket() ? new Error(`Cannot copy a socket file: ${e}`) : i.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${e}`) : new Error(`Unknown file: ${e}`);
}
async function fY(t, e, n, r, o) {
  if (!e) return ec(t, n, r, o);
  if (o.overwrite)
    return await Ne.unlink(r), ec(t, n, r, o);
  if (o.errorOnExist)
    throw new Error(`'${r}' already exists`);
}
async function ec(t, e, n, r) {
  if (await Ne.copyFile(e, n), r.preserveTimestamps) {
    mY(t.mode) && await hY(n, t.mode);
    const o = await Ne.stat(e);
    await uY(n, o.atime, o.mtime);
  }
  return Ne.chmod(n, t.mode);
}
function mY(t) {
  return (t & 128) === 0;
}
function hY(t, e) {
  return Ne.chmod(t, e | 128);
}
async function gY(t, e, n, r, o) {
  e || await Ne.mkdir(r), await pY(await Ne.opendir(n), async (i) => {
    const s = yn.join(n, i.name), a = yn.join(r, i.name);
    if (await nu(s, a, o)) {
      const { destStat: d } = await vn.checkPaths(s, a, "copy", o);
      await ru(d, s, a, o);
    }
  }), e || await Ne.chmod(r, t.mode);
}
async function yY(t, e, n, r) {
  let o = await Ne.readlink(e);
  if (r.dereference && (o = yn.resolve(process.cwd(), o)), !t)
    return Ne.symlink(o, n);
  let i = null;
  try {
    i = await Ne.readlink(n);
  } catch (s) {
    if (s.code === "EINVAL" || s.code === "UNKNOWN") return Ne.symlink(o, n);
    throw s;
  }
  if (r.dereference && (i = yn.resolve(process.cwd(), i)), o !== i) {
    if (vn.isSrcSubdir(o, i))
      throw new Error(`Cannot copy '${o}' to a subdirectory of itself, '${i}'.`);
    if (vn.isSrcSubdir(i, o))
      throw new Error(`Cannot overwrite '${i}' with '${o}'.`);
  }
  return await Ne.unlink(n), Ne.symlink(o, n);
}
var vY = dY;
const Ce = an, bn = Q, bY = tt.mkdirsSync, xY = Zl.utimesMillisSync, xn = cn;
function wY(t, e, n) {
  typeof n == "function" && (n = { filter: n }), n = n || {}, n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0002"
  );
  const { srcStat: r, destStat: o } = xn.checkPathsSync(t, e, "copy", n);
  if (xn.checkParentPathsSync(t, r, e, "copy"), n.filter && !n.filter(t, e)) return;
  const i = bn.dirname(e);
  return Ce.existsSync(i) || bY(i), ou(o, t, e, n);
}
function ou(t, e, n, r) {
  const i = (r.dereference ? Ce.statSync : Ce.lstatSync)(e);
  if (i.isDirectory()) return _Y(i, t, e, n, r);
  if (i.isFile() || i.isCharacterDevice() || i.isBlockDevice()) return EY(i, t, e, n, r);
  if (i.isSymbolicLink()) return CY(t, e, n, r);
  throw i.isSocket() ? new Error(`Cannot copy a socket file: ${e}`) : i.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${e}`) : new Error(`Unknown file: ${e}`);
}
function EY(t, e, n, r, o) {
  return e ? TY(t, n, r, o) : iu(t, n, r, o);
}
function TY(t, e, n, r) {
  if (r.overwrite)
    return Ce.unlinkSync(n), iu(t, e, n, r);
  if (r.errorOnExist)
    throw new Error(`'${n}' already exists`);
}
function iu(t, e, n, r) {
  return Ce.copyFileSync(e, n), r.preserveTimestamps && SY(t.mode, e, n), Ki(n, t.mode);
}
function SY(t, e, n) {
  return NY(t) && OY(n, t), AY(e, n);
}
function NY(t) {
  return (t & 128) === 0;
}
function OY(t, e) {
  return Ki(t, e | 128);
}
function Ki(t, e) {
  return Ce.chmodSync(t, e);
}
function AY(t, e) {
  const n = Ce.statSync(t);
  return xY(e, n.atime, n.mtime);
}
function _Y(t, e, n, r, o) {
  return e ? su(n, r, o) : DY(t.mode, n, r, o);
}
function DY(t, e, n, r) {
  return Ce.mkdirSync(n), su(e, n, r), Ki(n, t);
}
function su(t, e, n) {
  const r = Ce.opendirSync(t);
  try {
    let o;
    for (; (o = r.readSync()) !== null; )
      LY(o.name, t, e, n);
  } finally {
    r.closeSync();
  }
}
function LY(t, e, n, r) {
  const o = bn.join(e, t), i = bn.join(n, t);
  if (r.filter && !r.filter(o, i)) return;
  const { destStat: s } = xn.checkPathsSync(o, i, "copy", r);
  return ou(s, o, i, r);
}
function CY(t, e, n, r) {
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
    return RY(o, n);
  } else
    return Ce.symlinkSync(o, n);
}
function RY(t, e) {
  return Ce.unlinkSync(e), Ce.symlinkSync(t, e);
}
var PY = wY;
const IY = ge.fromPromise;
var Ji = {
  copy: IY(vY),
  copySync: PY
};
const au = an, kY = ge.fromCallback;
function FY(t, e) {
  au.rm(t, { recursive: !0, force: !0 }, e);
}
function qY(t) {
  au.rmSync(t, { recursive: !0, force: !0 });
}
var Or = {
  remove: kY(FY),
  removeSync: qY
};
const MY = ge.fromPromise, cu = Pe, lu = Q, uu = tt, pu = Or, tc = MY(async function(e) {
  let n;
  try {
    n = await cu.readdir(e);
  } catch {
    return uu.mkdirs(e);
  }
  return Promise.all(n.map((r) => pu.remove(lu.join(e, r))));
});
function nc(t) {
  let e;
  try {
    e = cu.readdirSync(t);
  } catch {
    return uu.mkdirsSync(t);
  }
  e.forEach((n) => {
    n = lu.join(t, n), pu.removeSync(n);
  });
}
var jY = {
  emptyDirSync: nc,
  emptydirSync: nc,
  emptyDir: tc,
  emptydir: tc
};
const UY = ge.fromPromise, du = Q, ct = Pe, fu = tt;
async function BY(t) {
  let e;
  try {
    e = await ct.stat(t);
  } catch {
  }
  if (e && e.isFile()) return;
  const n = du.dirname(t);
  let r = null;
  try {
    r = await ct.stat(n);
  } catch (o) {
    if (o.code === "ENOENT") {
      await fu.mkdirs(n), await ct.writeFile(t, "");
      return;
    } else
      throw o;
  }
  r.isDirectory() ? await ct.writeFile(t, "") : await ct.readdir(n);
}
function $Y(t) {
  let e;
  try {
    e = ct.statSync(t);
  } catch {
  }
  if (e && e.isFile()) return;
  const n = du.dirname(t);
  try {
    ct.statSync(n).isDirectory() || ct.readdirSync(n);
  } catch (r) {
    if (r && r.code === "ENOENT") fu.mkdirsSync(n);
    else throw r;
  }
  ct.writeFileSync(t, "");
}
var VY = {
  createFile: UY(BY),
  createFileSync: $Y
};
const zY = ge.fromPromise, mu = Q, mt = Pe, hu = tt, { pathExists: HY } = jt, { areIdentical: gu } = cn;
async function XY(t, e) {
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
  if (n && gu(r, n)) return;
  const o = mu.dirname(e);
  await HY(o) || await hu.mkdirs(o), await mt.link(t, e);
}
function GY(t, e) {
  let n;
  try {
    n = mt.lstatSync(e);
  } catch {
  }
  try {
    const i = mt.lstatSync(t);
    if (n && gu(i, n)) return;
  } catch (i) {
    throw i.message = i.message.replace("lstat", "ensureLink"), i;
  }
  const r = mu.dirname(e);
  return mt.existsSync(r) || hu.mkdirsSync(r), mt.linkSync(t, e);
}
var WY = {
  createLink: zY(XY),
  createLinkSync: GY
};
const gt = Q, fn = Pe, { pathExists: YY } = jt, KY = ge.fromPromise;
async function JY(t, e) {
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
  if (await YY(r))
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
function QY(t, e) {
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
var ZY = {
  symlinkPaths: KY(JY),
  symlinkPathsSync: QY
};
const yu = Pe, eK = ge.fromPromise;
async function tK(t, e) {
  if (e) return e;
  let n;
  try {
    n = await yu.lstat(t);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
function nK(t, e) {
  if (e) return e;
  let n;
  try {
    n = yu.lstatSync(t);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
var rK = {
  symlinkType: eK(tK),
  symlinkTypeSync: nK
};
const oK = ge.fromPromise, vu = Q, et = Pe, { mkdirs: iK, mkdirsSync: sK } = tt, { symlinkPaths: aK, symlinkPathsSync: cK } = ZY, { symlinkType: lK, symlinkTypeSync: uK } = rK, { pathExists: pK } = jt, { areIdentical: bu } = cn;
async function dK(t, e, n) {
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
    if (bu(a, c)) return;
  }
  const o = await aK(t, e);
  t = o.toDst;
  const i = await lK(o.toCwd, n), s = vu.dirname(e);
  return await pK(s) || await iK(s), et.symlink(t, e, i);
}
function fK(t, e, n) {
  let r;
  try {
    r = et.lstatSync(e);
  } catch {
  }
  if (r && r.isSymbolicLink()) {
    const a = et.statSync(t), c = et.statSync(e);
    if (bu(a, c)) return;
  }
  const o = cK(t, e);
  t = o.toDst, n = uK(o.toCwd, n);
  const i = vu.dirname(e);
  return et.existsSync(i) || sK(i), et.symlinkSync(t, e, n);
}
var mK = {
  createSymlink: oK(dK),
  createSymlinkSync: fK
};
const { createFile: rc, createFileSync: oc } = VY, { createLink: ic, createLinkSync: sc } = WY, { createSymlink: ac, createSymlinkSync: cc } = mK;
var hK = {
  // file
  createFile: rc,
  createFileSync: oc,
  ensureFile: rc,
  ensureFileSync: oc,
  // link
  createLink: ic,
  createLinkSync: sc,
  ensureLink: ic,
  ensureLinkSync: sc,
  // symlink
  createSymlink: ac,
  createSymlinkSync: cc,
  ensureSymlink: ac,
  ensureSymlinkSync: cc
};
function gK(t, { EOL: e = `
`, finalEOL: n = !0, replacer: r = null, spaces: o } = {}) {
  const i = n ? e : "";
  return JSON.stringify(t, r, o).replace(/\n/g, e) + i;
}
function yK(t) {
  return Buffer.isBuffer(t) && (t = t.toString("utf8")), t.replace(/^\uFEFF/, "");
}
var Qi = { stringify: gK, stripBom: yK };
let rn;
try {
  rn = an;
} catch {
  rn = pi;
}
const Ar = ge, { stringify: xu, stripBom: wu } = Qi;
async function vK(t, e = {}) {
  typeof e == "string" && (e = { encoding: e });
  const n = e.fs || rn, r = "throws" in e ? e.throws : !0;
  let o = await Ar.fromCallback(n.readFile)(t, e);
  o = wu(o);
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
const bK = Ar.fromPromise(vK);
function xK(t, e = {}) {
  typeof e == "string" && (e = { encoding: e });
  const n = e.fs || rn, r = "throws" in e ? e.throws : !0;
  try {
    let o = n.readFileSync(t, e);
    return o = wu(o), JSON.parse(o, e.reviver);
  } catch (o) {
    if (r)
      throw o.message = `${t}: ${o.message}`, o;
    return null;
  }
}
async function wK(t, e, n = {}) {
  const r = n.fs || rn, o = xu(e, n);
  await Ar.fromCallback(r.writeFile)(t, o, n);
}
const EK = Ar.fromPromise(wK);
function TK(t, e, n = {}) {
  const r = n.fs || rn, o = xu(e, n);
  return r.writeFileSync(t, o, n);
}
var SK = {
  readFile: bK,
  readFileSync: xK,
  writeFile: EK,
  writeFileSync: TK
};
const $n = SK;
var NK = {
  // jsonfile exports
  readJson: $n.readFile,
  readJsonSync: $n.readFileSync,
  writeJson: $n.writeFile,
  writeJsonSync: $n.writeFileSync
};
const OK = ge.fromPromise, ni = Pe, Eu = Q, Tu = tt, AK = jt.pathExists;
async function _K(t, e, n = "utf-8") {
  const r = Eu.dirname(t);
  return await AK(r) || await Tu.mkdirs(r), ni.writeFile(t, e, n);
}
function DK(t, ...e) {
  const n = Eu.dirname(t);
  ni.existsSync(n) || Tu.mkdirsSync(n), ni.writeFileSync(t, ...e);
}
var Zi = {
  outputFile: OK(_K),
  outputFileSync: DK
};
const { stringify: LK } = Qi, { outputFile: CK } = Zi;
async function RK(t, e, n = {}) {
  const r = LK(e, n);
  await CK(t, r, n);
}
var PK = RK;
const { stringify: IK } = Qi, { outputFileSync: kK } = Zi;
function FK(t, e, n) {
  const r = IK(e, n);
  kK(t, r, n);
}
var qK = FK;
const MK = ge.fromPromise, Re = NK;
Re.outputJson = MK(PK);
Re.outputJsonSync = qK;
Re.outputJSON = Re.outputJson;
Re.outputJSONSync = Re.outputJsonSync;
Re.writeJSON = Re.writeJson;
Re.writeJSONSync = Re.writeJsonSync;
Re.readJSON = Re.readJson;
Re.readJSONSync = Re.readJsonSync;
var jK = Re;
const UK = Pe, lc = Q, { copy: BK } = Ji, { remove: Su } = Or, { mkdirp: $K } = tt, { pathExists: VK } = jt, uc = cn;
async function zK(t, e, n = {}) {
  const r = n.overwrite || n.clobber || !1, { srcStat: o, isChangingCase: i = !1 } = await uc.checkPaths(t, e, "move", n);
  await uc.checkParentPaths(t, o, e, "move");
  const s = lc.dirname(e);
  return lc.parse(s).root !== s && await $K(s), HK(t, e, r, i);
}
async function HK(t, e, n, r) {
  if (!r) {
    if (n)
      await Su(e);
    else if (await VK(e))
      throw new Error("dest already exists.");
  }
  try {
    await UK.rename(t, e);
  } catch (o) {
    if (o.code !== "EXDEV")
      throw o;
    await XK(t, e, n);
  }
}
async function XK(t, e, n) {
  return await BK(t, e, {
    overwrite: n,
    errorOnExist: !0,
    preserveTimestamps: !0
  }), Su(t);
}
var GK = zK;
const Nu = an, ri = Q, WK = Ji.copySync, Ou = Or.removeSync, YK = tt.mkdirpSync, pc = cn;
function KK(t, e, n) {
  n = n || {};
  const r = n.overwrite || n.clobber || !1, { srcStat: o, isChangingCase: i = !1 } = pc.checkPathsSync(t, e, "move", n);
  return pc.checkParentPathsSync(t, o, e, "move"), JK(e) || YK(ri.dirname(e)), QK(t, e, r, i);
}
function JK(t) {
  const e = ri.dirname(t);
  return ri.parse(e).root === e;
}
function QK(t, e, n, r) {
  if (r) return $o(t, e, n);
  if (n)
    return Ou(e), $o(t, e, n);
  if (Nu.existsSync(e)) throw new Error("dest already exists.");
  return $o(t, e, n);
}
function $o(t, e, n) {
  try {
    Nu.renameSync(t, e);
  } catch (r) {
    if (r.code !== "EXDEV") throw r;
    return ZK(t, e, n);
  }
}
function ZK(t, e, n) {
  return WK(t, e, {
    overwrite: n,
    errorOnExist: !0,
    preserveTimestamps: !0
  }), Ou(t);
}
var eJ = KK;
const tJ = ge.fromPromise;
var nJ = {
  move: tJ(GK),
  moveSync: eJ
}, rJ = {
  // Export promiseified graceful-fs:
  ...Pe,
  // Export extra methods:
  ...Ji,
  ...jY,
  ...hK,
  ...jK,
  ...tt,
  ...nJ,
  ...Zi,
  ...jt,
  ...Or
};
const he = /* @__PURE__ */ on(rJ), oJ = 3e4, iJ = 6e4;
class sJ {
  async downloadFile(e, n, r, o = 3) {
    for (let i = 0; i < o; i++)
      try {
        await this.attemptDownload(e, n, r);
        return;
      } catch (s) {
        const a = s;
        if (a.code === "ENOSPC") throw new Error("DISK_FULL: No space left on device.");
        if (a.code === "EPERM" || a.code === "EACCES") throw new Error("PERMISSION_DENIED: Access denied to write file.");
        if (a.message === "DISK_FULL" || a.message === "DOWNLOAD_TIMEOUT" || a.message === "DOWNLOAD_STALLED" || a.message === "EPISODE_NOT_FOUND" || (console.error(`Download attempt ${i + 1} failed:`, s), await he.remove(`${n}.part`).catch(() => {
        }), await he.remove(n).catch(() => {
        }), i === o - 1)) throw s;
        await new Promise((c) => setTimeout(c, 1e3 * Math.pow(2, i)));
      }
  }
  async attemptDownload(e, n, r) {
    const o = `${n}.part`, i = he.createWriteStream(o);
    try {
      const s = await ae({
        url: e,
        method: "GET",
        responseType: "stream",
        timeout: oJ
      });
      if (s.status === 404)
        throw i.close(), await he.remove(o).catch(() => {
        }), new Error("EPISODE_NOT_FOUND");
      const a = s.headers["content-length"];
      let c = 0;
      return new Promise((d, l) => {
        let u = null;
        const p = () => {
          u && clearTimeout(u), u = setTimeout(() => {
            s.data.destroy(), i.close(), he.remove(o).catch(() => {
            }), l(new Error("DOWNLOAD_STALLED"));
          }, iJ);
        };
        p(), s.data.on("data", (h) => {
          c += h.length, p(), a && r(c, parseInt(a));
        }), s.data.pipe(i), i.on("finish", async () => {
          if (u && clearTimeout(u), a) {
            const h = parseInt(a);
            if (h > 0 && Math.abs(c - h) / h > 0.01) {
              await he.remove(o).catch(() => {
              }), l(new Error("INTEGRITY_CHECK_FAILED"));
              return;
            }
          }
          try {
            await he.rename(o, n), d();
          } catch (h) {
            l(h);
          }
        }), i.on("error", async (h) => {
          u && clearTimeout(u), await he.remove(o).catch(() => {
          }), h.code === "ENOSPC" ? l(new Error("DISK_FULL")) : l(h);
        });
      });
    } catch (s) {
      throw i.close(), await he.remove(o).catch(() => {
      }), s.code === "ECONNABORTED" ? new Error("DOWNLOAD_TIMEOUT") : s;
    }
  }
}
var Au = { exports: {} };
(function(t) {
  var e = Object.prototype.hasOwnProperty, n = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (n = !1));
  function o(c, d, l) {
    this.fn = c, this.context = d, this.once = l || !1;
  }
  function i(c, d, l, u, p) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var h = new o(l, u || c, p), f = n ? n + d : d;
    return c._events[f] ? c._events[f].fn ? c._events[f] = [c._events[f], h] : c._events[f].push(h) : (c._events[f] = h, c._eventsCount++), c;
  }
  function s(c, d) {
    --c._eventsCount === 0 ? c._events = new r() : delete c._events[d];
  }
  function a() {
    this._events = new r(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var d = [], l, u;
    if (this._eventsCount === 0) return d;
    for (u in l = this._events)
      e.call(l, u) && d.push(n ? u.slice(1) : u);
    return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(l)) : d;
  }, a.prototype.listeners = function(d) {
    var l = n ? n + d : d, u = this._events[l];
    if (!u) return [];
    if (u.fn) return [u.fn];
    for (var p = 0, h = u.length, f = new Array(h); p < h; p++)
      f[p] = u[p].fn;
    return f;
  }, a.prototype.listenerCount = function(d) {
    var l = n ? n + d : d, u = this._events[l];
    return u ? u.fn ? 1 : u.length : 0;
  }, a.prototype.emit = function(d, l, u, p, h, f) {
    var b = n ? n + d : d;
    if (!this._events[b]) return !1;
    var x = this._events[b], S = arguments.length, w, y;
    if (x.fn) {
      switch (x.once && this.removeListener(d, x.fn, void 0, !0), S) {
        case 1:
          return x.fn.call(x.context), !0;
        case 2:
          return x.fn.call(x.context, l), !0;
        case 3:
          return x.fn.call(x.context, l, u), !0;
        case 4:
          return x.fn.call(x.context, l, u, p), !0;
        case 5:
          return x.fn.call(x.context, l, u, p, h), !0;
        case 6:
          return x.fn.call(x.context, l, u, p, h, f), !0;
      }
      for (y = 1, w = new Array(S - 1); y < S; y++)
        w[y - 1] = arguments[y];
      x.fn.apply(x.context, w);
    } else {
      var E = x.length, A;
      for (y = 0; y < E; y++)
        switch (x[y].once && this.removeListener(d, x[y].fn, void 0, !0), S) {
          case 1:
            x[y].fn.call(x[y].context);
            break;
          case 2:
            x[y].fn.call(x[y].context, l);
            break;
          case 3:
            x[y].fn.call(x[y].context, l, u);
            break;
          case 4:
            x[y].fn.call(x[y].context, l, u, p);
            break;
          default:
            if (!w) for (A = 1, w = new Array(S - 1); A < S; A++)
              w[A - 1] = arguments[A];
            x[y].fn.apply(x[y].context, w);
        }
    }
    return !0;
  }, a.prototype.on = function(d, l, u) {
    return i(this, d, l, u, !1);
  }, a.prototype.once = function(d, l, u) {
    return i(this, d, l, u, !0);
  }, a.prototype.removeListener = function(d, l, u, p) {
    var h = n ? n + d : d;
    if (!this._events[h]) return this;
    if (!l)
      return s(this, h), this;
    var f = this._events[h];
    if (f.fn)
      f.fn === l && (!p || f.once) && (!u || f.context === u) && s(this, h);
    else {
      for (var b = 0, x = [], S = f.length; b < S; b++)
        (f[b].fn !== l || p && !f[b].once || u && f[b].context !== u) && x.push(f[b]);
      x.length ? this._events[h] = x.length === 1 ? x[0] : x : s(this, h);
    }
    return this;
  }, a.prototype.removeAllListeners = function(d) {
    var l;
    return d ? (l = n ? n + d : d, this._events[l] && s(this, l)) : (this._events = new r(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, t.exports = a;
})(Au);
var aJ = Au.exports;
const cJ = /* @__PURE__ */ on(aJ);
class es extends Error {
  constructor(n, r) {
    var o;
    super(n, r);
    Ue(this, "name", "TimeoutError");
    (o = Error.captureStackTrace) == null || o.call(Error, this, es);
  }
}
const dc = (t) => t.reason ?? new DOMException("This operation was aborted.", "AbortError");
function lJ(t, e) {
  const {
    milliseconds: n,
    fallback: r,
    message: o,
    customTimers: i = { setTimeout, clearTimeout },
    signal: s
  } = e;
  let a, c;
  const l = new Promise((u, p) => {
    if (typeof n != "number" || Math.sign(n) !== 1)
      throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${n}\``);
    if (s != null && s.aborted) {
      p(dc(s));
      return;
    }
    if (s && (c = () => {
      p(dc(s));
    }, s.addEventListener("abort", c, { once: !0 })), t.then(u, p), n === Number.POSITIVE_INFINITY)
      return;
    const h = new es();
    a = i.setTimeout.call(void 0, () => {
      if (r) {
        try {
          u(r());
        } catch (f) {
          p(f);
        }
        return;
      }
      typeof t.cancel == "function" && t.cancel(), o === !1 ? u() : o instanceof Error ? p(o) : (h.message = o ?? `Promise timed out after ${n} milliseconds`, p(h));
    }, n);
  }).finally(() => {
    l.clear(), c && s && s.removeEventListener("abort", c);
  });
  return l.clear = () => {
    i.clearTimeout.call(void 0, a), a = void 0;
  }, l;
}
function uJ(t, e, n) {
  let r = 0, o = t.length;
  for (; o > 0; ) {
    const i = Math.trunc(o / 2);
    let s = r + i;
    n(t[s], e) <= 0 ? (r = ++s, o -= i + 1) : o = i;
  }
  return r;
}
var Ve;
class pJ {
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
    const s = uJ(C(this, Ve), i, (a, c) => c.priority - a.priority);
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
var Kt, Xe, Ge, ht, Dt, Jt, Qe, wn, Qt, Ze, st, ze, qe, De, de, En, we, Lt, at, cr, Ct, M, Yn, _u, Du, Kn, Lu, Cu, Ru, Pu, Iu, Jn, Qn, oi, Zn, ii, si, er, St, ku, zt, Fu, ai;
class dJ extends cJ {
  constructor(n) {
    var r, o;
    super();
    ie(this, M);
    ie(this, Kt);
    ie(this, Xe);
    ie(this, Ge, 0);
    ie(this, ht);
    ie(this, Dt, !1);
    ie(this, Jt, !1);
    ie(this, Qe);
    ie(this, wn, 0);
    ie(this, Qt, 0);
    ie(this, Ze);
    ie(this, st);
    ie(this, ze);
    // Circular buffer implementation for better performance
    ie(this, qe, []);
    ie(this, De, 0);
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
      queueClass: pJ,
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
    if (ne(this, Kt, n.carryoverIntervalCount ?? n.carryoverConcurrencyCount ?? !1), ne(this, Xe, n.intervalCap === Number.POSITIVE_INFINITY || n.interval === 0), ne(this, ht, n.intervalCap), ne(this, Qe, n.interval), ne(this, ze, n.strict), ne(this, de, new n.queueClass()), ne(this, En, n.queueClass), this.concurrency = n.concurrency, n.timeout !== void 0 && !(Number.isFinite(n.timeout) && n.timeout > 0))
      throw new TypeError(`Expected \`timeout\` to be a positive finite number, got \`${n.timeout}\` (${typeof n.timeout})`);
    this.timeout = n.timeout, ne(this, at, n.autoStart === !1), H(this, M, ku).call(this);
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
        var c, d;
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
          } catch (p) {
            throw H(this, M, Fu).call(this), C(this, Ct).delete(s), p;
          }
          ne(this, Qt, Date.now());
          let l = n({ signal: r.signal });
          if (r.timeout && (l = lJ(Promise.resolve(l), {
            milliseconds: r.timeout,
            message: `Task timed out after ${r.timeout}ms (queue has ${C(this, we)} running, ${C(this, de).size} waiting)`
          })), r.signal) {
            const { signal: p } = r;
            l = Promise.race([l, new Promise((h, f) => {
              a = () => {
                f(p.reason);
              }, p.addEventListener("abort", a, { once: !0 });
            })]);
          }
          const u = await l;
          o(u), this.emit("completed", u);
        } catch (l) {
          i(l), this.emit("error", l);
        } finally {
          a && ((d = r.signal) == null || d.removeEventListener("abort", a)), C(this, Ct).delete(s), queueMicrotask(() => {
            H(this, M, Ru).call(this);
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
Kt = new WeakMap(), Xe = new WeakMap(), Ge = new WeakMap(), ht = new WeakMap(), Dt = new WeakMap(), Jt = new WeakMap(), Qe = new WeakMap(), wn = new WeakMap(), Qt = new WeakMap(), Ze = new WeakMap(), st = new WeakMap(), ze = new WeakMap(), qe = new WeakMap(), De = new WeakMap(), de = new WeakMap(), En = new WeakMap(), we = new WeakMap(), Lt = new WeakMap(), at = new WeakMap(), cr = new WeakMap(), Ct = new WeakMap(), M = new WeakSet(), Yn = function(n) {
  for (; C(this, De) < C(this, qe).length; ) {
    const o = C(this, qe)[C(this, De)];
    if (o !== void 0 && n - o >= C(this, Qe))
      wt(this, De)._++;
    else
      break;
  }
  (C(this, De) > 100 && C(this, De) > C(this, qe).length / 2 || C(this, De) === C(this, qe).length) && (ne(this, qe, C(this, qe).slice(C(this, De))), ne(this, De, 0));
}, // Helper methods for interval consumption
_u = function(n) {
  C(this, ze) ? C(this, qe).push(n) : wt(this, Ge)._++;
}, Du = function() {
  C(this, ze) ? C(this, qe).length > C(this, De) && C(this, qe).pop() : C(this, Ge) > 0 && wt(this, Ge)._--;
}, Kn = function() {
  return C(this, qe).length - C(this, De);
}, Lu = function() {
  return C(this, Xe) ? !0 : C(this, ze) ? H(this, M, Kn).call(this) < C(this, ht) : C(this, Ge) < C(this, ht);
}, Cu = function() {
  return C(this, we) < C(this, Lt);
}, Ru = function() {
  wt(this, we)._--, C(this, we) === 0 && this.emit("pendingZero"), H(this, M, Zn).call(this), this.emit("next");
}, Pu = function() {
  ne(this, st, void 0), H(this, M, si).call(this), H(this, M, ii).call(this);
}, Iu = function(n) {
  if (C(this, ze)) {
    if (H(this, M, Yn).call(this, n), H(this, M, Kn).call(this) >= C(this, ht)) {
      const o = C(this, qe)[C(this, De)], i = C(this, Qe) - (n - o);
      return H(this, M, Jn).call(this, i), !0;
    }
    return !1;
  }
  if (C(this, Ze) === void 0) {
    const r = C(this, wn) - n;
    if (r < 0) {
      if (C(this, Qt) > 0) {
        const o = n - C(this, Qt);
        if (o < C(this, Qe))
          return H(this, M, Jn).call(this, C(this, Qe) - o), !0;
      }
      ne(this, Ge, C(this, Kt) ? C(this, we) : 0);
    } else
      return H(this, M, Jn).call(this, r), !0;
  }
  return !1;
}, Jn = function(n) {
  C(this, st) === void 0 && ne(this, st, setTimeout(() => {
    H(this, M, Pu).call(this);
  }, n));
}, Qn = function() {
  C(this, Ze) && (clearInterval(C(this, Ze)), ne(this, Ze, void 0));
}, oi = function() {
  C(this, st) && (clearTimeout(C(this, st)), ne(this, st, void 0));
}, Zn = function() {
  if (C(this, de).size === 0) {
    if (H(this, M, Qn).call(this), this.emit("empty"), C(this, we) === 0) {
      if (H(this, M, oi).call(this), C(this, ze) && C(this, De) > 0) {
        const r = Date.now();
        H(this, M, Yn).call(this, r);
      }
      this.emit("idle");
    }
    return !1;
  }
  let n = !1;
  if (!C(this, at)) {
    const r = Date.now(), o = !H(this, M, Iu).call(this, r);
    if (C(this, M, Lu) && C(this, M, Cu)) {
      const i = C(this, de).dequeue();
      C(this, Xe) || (H(this, M, _u).call(this, r), H(this, M, zt).call(this)), this.emit("active"), i(), o && H(this, M, ii).call(this), n = !0;
    }
  }
  return n;
}, ii = function() {
  C(this, Xe) || C(this, Ze) !== void 0 || C(this, ze) || (ne(this, Ze, setInterval(() => {
    H(this, M, si).call(this);
  }, C(this, Qe))), ne(this, wn, Date.now() + C(this, Qe)));
}, si = function() {
  C(this, ze) || (C(this, Ge) === 0 && C(this, we) === 0 && C(this, Ze) && H(this, M, Qn).call(this), ne(this, Ge, C(this, Kt) ? C(this, we) : 0)), H(this, M, er).call(this), H(this, M, zt).call(this);
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
}, ku = function() {
  C(this, Xe) || (this.on("add", () => {
    C(this, de).size > 0 && H(this, M, zt).call(this);
  }), this.on("next", () => {
    H(this, M, zt).call(this);
  }));
}, zt = function() {
  C(this, Xe) || C(this, Jt) || (ne(this, Jt, !0), queueMicrotask(() => {
    ne(this, Jt, !1), H(this, M, ai).call(this);
  }));
}, Fu = function() {
  C(this, Xe) || (H(this, M, Du).call(this), H(this, M, zt).call(this));
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
class fJ {
  constructor(e = 3) {
    Ue(this, "queue");
    this.queue = new dJ({ concurrency: e });
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
class mJ {
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
function hJ(t) {
  return t >= 55296 && t <= 56319;
}
function gJ(t) {
  return t >= 56320 && t <= 57343;
}
var yJ = function(e, n, r) {
  if (typeof n != "string")
    throw new Error("Input must be string");
  for (var o = n.length, i = 0, s, a, c = 0; c < o; c += 1) {
    if (s = n.charCodeAt(c), a = n[c], hJ(s) && gJ(n.charCodeAt(c + 1)) && (c += 1, a += n[c]), i += e(a), i === r)
      return n.slice(0, c + 1);
    if (i > r)
      return n.slice(0, c - a.length + 1);
  }
  return n;
}, vJ = yJ, bJ = Buffer.byteLength.bind(Buffer), xJ = vJ.bind(null, bJ), wJ = xJ, EJ = /[\/\?<>\\:\*\|"]/g, TJ = /[\x00-\x1f\x80-\x9f]/g, SJ = /^\.+$/, NJ = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i, OJ = /[\. ]+$/;
function fc(t, e) {
  if (typeof t != "string")
    throw new Error("Input must be string");
  var n = t.replace(EJ, e).replace(TJ, e).replace(SJ, e).replace(NJ, e).replace(OJ, e);
  return wJ(n, 255);
}
var qu = function(t, e) {
  var n = e && e.replacement || "", r = fc(t, n);
  return n === "" ? r : fc(r, "");
};
const ci = /* @__PURE__ */ on(qu), AJ = /* @__PURE__ */ ep({
  __proto__: null,
  default: ci
}, [qu]);
function mc(t, e, n, r = ".mp3") {
  const o = ci(e);
  let i = ci(n);
  const s = 250, a = Q.join(t, o), d = a.length + 1 + r.length, l = s - d;
  return l < 1 ? i = i.substring(0, 5) : i.length > l && (i = i.substring(0, l)), Q.join(a, `${i}${r}`);
}
const _J = /* @__PURE__ */ new Set([
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
function hc(t) {
  try {
    const n = new URL(t).pathname, r = Q.extname(n).toLowerCase();
    if (r && _J.has(r))
      return r;
  } catch {
  }
  return ".mp3";
}
function DJ(t, e) {
  const n = e.pubDate ? new Date(e.pubDate) : null, r = n && !isNaN(n.getTime()), o = r ? String(n.getFullYear()) : "unknown", i = r ? String(n.getMonth() + 1).padStart(2, "0") : "unknown", s = r ? String(n.getDate()).padStart(2, "0") : "unknown", a = r ? `${o}-${i}-${s}` : "unknown";
  return t.replace(/\{title\}/gi, e.title).replace(/\{podcast\}/gi, e.podcast).replace(/\{date\}/gi, a).replace(/\{year\}/gi, o).replace(/\{month\}/gi, i).replace(/\{day\}/gi, s);
}
const LJ = [
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
], CJ = /* @__PURE__ */ new Set([
  "localhost",
  "localhost.localdomain",
  "ip6-localhost",
  "ip6-loopback",
  "0.0.0.0",
  "[::]",
  "[::1]"
]);
function gc(t) {
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
  if (CJ.has(o))
    return { valid: !1, error: "URL_PRIVATE_HOST" };
  if (o === "::1" || o === "[::1]")
    return { valid: !1, error: "URL_PRIVATE_HOST" };
  for (const s of LJ)
    if (s.test(o))
      return { valid: !1, error: "URL_PRIVATE_IP" };
  const i = o.replace(/^\[|\]$/g, "");
  return i.startsWith("fc") || i.startsWith("fd") || i.startsWith("fe80") ? { valid: !1, error: "URL_PRIVATE_IP" } : { valid: !0 };
}
const W = {
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
}, RJ = new I5(), ee = new PW(), PJ = new sJ(), IJ = ee.getConcurrency(), Vo = new fJ(IJ);
function Je(t, e, n) {
  t && !t.isDestroyed() && t.webContents.send(e, n);
}
const zo = new mJ(), yc = /* @__PURE__ */ new Map(), kJ = 3e3;
let vc = "en";
function FJ(t) {
  re.handle(W.PARSE_FEED, async (e, n) => {
    const r = gc(n);
    if (!r.valid)
      throw new Error(r.error);
    const o = Date.now(), i = yc.get(n);
    if (i !== void 0 && o - i < kJ)
      throw new Error("RATE_LIMITED");
    return yc.set(n, o), await RJ.parseFeed(n);
  }), re.handle(W.GET_FEEDS, async () => ee.getFeeds()), re.handle(W.ADD_FEED, async (e, n) => {
    ee.addFeed(n);
    const r = ee.getFeeds();
    return Je(t, W.FEEDS_UPDATED, r), r;
  }), re.handle(W.REMOVE_FEED, async (e, n) => {
    ee.removeFeed(n);
    const r = ee.getFeeds();
    return Je(t, W.FEEDS_UPDATED, r), r;
  }), re.handle(W.GET_DOWNLOADED_EPISODES, async () => ee.getDownloadedEpisodes()), re.handle(W.REMOVE_HISTORY_ITEM, async (e, n) => (ee.removeDownloadedEpisode(n), Je(t, W.DOWNLOADS_UPDATED, ee.getDownloadedEpisodes()), !0)), re.handle(W.RESET_HISTORY, async () => (ee.resetDownloadHistory(), Je(t, W.DOWNLOADS_UPDATED, []), !0)), re.handle(W.START_DOWNLOAD, async (e, { url: n, title: r, podcastTitle: o, guid: i, pubDate: s }) => {
    const a = gc(n);
    if (!a.valid)
      throw new Error(a.error);
    let c = ee.getDownloadPath();
    c || (c = Q.join(Se.getPath("documents"), "FeedDownloader", "downloads"));
    const d = hc(n), l = ee.getNamingTemplate(), u = DJ(l, {
      title: r,
      podcast: o,
      pubDate: s
    }), p = mc(c, o, u, d), h = Q.dirname(p);
    return await he.ensureDir(h), zo.track(), Vo.add(async () => {
      try {
        if (await PJ.downloadFile(n, p, (f, b) => {
          Je(t, W.DOWNLOAD_PROGRESS, { url: n, loaded: f, total: b });
        }), i && (ee.markAsDownloaded(i), ee.addArchiveEntry({
          guid: i,
          title: r,
          podcastTitle: o,
          pubDate: s || (/* @__PURE__ */ new Date()).toISOString(),
          downloadedAt: (/* @__PURE__ */ new Date()).toISOString(),
          filename: Q.basename(p)
        })), ee.getSidecarEnabled()) {
          const f = Q.join(
            Q.dirname(p),
            Q.parse(p).name + ".json"
          ), b = {
            title: r,
            podcast: o,
            guid: i || null,
            pubDate: s || null,
            downloadedAt: (/* @__PURE__ */ new Date()).toISOString(),
            sourceUrl: n,
            filename: Q.basename(p)
          };
          await he.writeJSON(f, b, { spaces: 2 }).catch(() => {
          });
        }
        Je(t, W.DOWNLOAD_PROGRESS, { url: n, loaded: 100, total: 100, completed: !0 }), Je(t, W.DOWNLOADS_UPDATED, ee.getDownloadedEpisodes());
      } catch (f) {
        console.error("Download error:", f);
        const b = f.message === "EPISODE_NOT_FOUND";
        Je(t, W.DOWNLOAD_PROGRESS, {
          url: n,
          loaded: 0,
          total: 0,
          error: !0,
          ...b ? { notFound: !0 } : {}
        });
      } finally {
        const f = zo.complete();
        if (f !== null) {
          if (is.isSupported()) {
            const b = {
              en: `Download complete: ${f} files downloaded.`,
              it: `Download completato: ${f} file scaricati.`,
              fr: `Téléchargement terminé : ${f} fichiers téléchargés.`,
              de: `Download abgeschlossen: ${f} Dateien heruntergeladen.`,
              es: `Descarga completada: ${f} archivos descargados.`,
              pt: `Download concluído: ${f} ficheiros descarregados.`,
              ru: `Загрузка завершена: ${f} файлов скачано.`,
              zh: `下载完成：已下载 ${f} 个文件。`
            };
            new is({
              title: "Runtime FeedDownloader Pro",
              body: b[vc] ?? b.en,
              icon: Q.join(process.env.VITE_PUBLIC || "", "logo.png")
            }).show();
          }
          Je(t, W.BATCH_COMPLETED, { total: f });
        }
      }
    }), { status: "queued" };
  }), re.handle(W.STOP_BATCH, async () => (Vo.clear(), zo.reset(), !0)), re.handle(W.IMPORT_OPML, async () => {
    const e = await Pn.showOpenDialog(t, {
      properties: ["openFile"],
      filters: [{ name: "OPML/XML", extensions: ["opml", "xml"] }]
    });
    if (e.canceled || e.filePaths.length === 0) return { count: 0 };
    try {
      const n = await he.readFile(e.filePaths[0], "utf-8"), r = await ee.importOPML(n);
      return Je(t, W.FEEDS_UPDATED, ee.getFeeds()), { count: r };
    } catch (n) {
      throw console.error("Import failed", n), n;
    }
  }), re.handle(W.EXPORT_OPML, async () => {
    const e = await Pn.showSaveDialog(t, {
      defaultPath: "feeds.opml",
      filters: [{ name: "OPML", extensions: ["opml"] }]
    });
    if (e.canceled || !e.filePath) return !1;
    try {
      const n = ee.exportOPML();
      return await he.writeFile(e.filePath, n, "utf-8"), !0;
    } catch (n) {
      throw console.error("Export failed", n), n;
    }
  }), re.handle(W.EXPORT_ARCHIVE_CSV, async () => {
    const e = await Pn.showSaveDialog(t, {
      defaultPath: "archive_report.csv",
      filters: [{ name: "CSV", extensions: ["csv"] }]
    });
    if (e.canceled || !e.filePath) return !1;
    try {
      const n = ee.exportArchiveCSV();
      return await he.writeFile(e.filePath, n, "utf-8"), !0;
    } catch (n) {
      throw console.error("Export CSV failed", n), n;
    }
  }), re.handle(W.CHOOSE_FOLDER, async () => {
    const e = await Pn.showOpenDialog(t, {
      properties: ["openDirectory"]
    });
    return e.canceled ? null : e.filePaths[0];
  }), re.handle(W.GET_DOWNLOAD_PATH, async () => ee.getDownloadPath()), re.handle(W.SET_DOWNLOAD_PATH, async (e, n) => (ee.setDownloadPath(n), !0)), re.handle(W.SHOW_IN_FOLDER, async (e, { podcastTitle: n, title: r, enclosureUrl: o }) => {
    let i = ee.getDownloadPath();
    i || (i = Q.join(Se.getPath("documents"), "FeedDownloader", "downloads"));
    const s = o ? hc(o) : ".mp3", a = mc(i, n, r, s), { shell: c } = await import("electron");
    c.showItemInFolder(a);
  }), re.handle(W.GET_HELP_CONTENT, async (e, n) => {
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
    Se.isPackaged ? i = Q.join(process.resourcesPath, o) : i = Q.join(Se.getAppPath(), o);
    try {
      if (await he.pathExists(i))
        return await he.readFile(i, "utf-8");
      {
        const s = Se.isPackaged ? Q.join(process.resourcesPath, "README_EN.md") : Q.join(Se.getAppPath(), "README_EN.md");
        return await he.pathExists(s) ? await he.readFile(s, "utf-8") : `# Error
Help file not found.`;
      }
    } catch (s) {
      return console.error("Failed to read help file", s), `# Error
Failed to load help documentation.`;
    }
  }), re.handle(W.GET_CONCURRENCY, async () => ee.getConcurrency()), re.handle(W.SET_CONCURRENCY, async (e, n) => (ee.setConcurrency(n), Vo.setConcurrency(n), !0)), re.handle(W.GET_ARCHIVE_STATS, async () => ee.getArchiveStats()), re.handle(W.SET_LOCALE, async (e, n) => (vc = n, !0)), re.handle(W.GET_NAMING_TEMPLATE, async () => ee.getNamingTemplate()), re.handle(W.SET_NAMING_TEMPLATE, async (e, n) => (ee.setNamingTemplate(n), !0)), re.handle(W.GET_SIDECAR_ENABLED, async () => ee.getSidecarEnabled()), re.handle(W.SET_SIDECAR_ENABLED, async (e, n) => (ee.setSidecarEnabled(n), !0)), re.handle(W.RUN_HEALTH_CHECK, async () => {
    const e = ee.getArchive();
    let n = ee.getDownloadPath();
    n || (n = Q.join(Se.getPath("documents"), "FeedDownloader", "downloads"));
    let r = 0, o = 0, i = 0;
    const s = [];
    for (const c of e) {
      if (!c.filename) {
        o++, s.push({ title: c.title, podcast: c.podcastTitle, filename: "(no filename)" });
        continue;
      }
      const d = (await Promise.resolve().then(() => AJ)).default, l = Q.join(n, d(c.podcastTitle), c.filename);
      try {
        const u = await he.stat(l);
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
const Mu = ut.dirname(Xu(import.meta.url));
process.env.APP_ROOT = ut.join(Mu, "..");
const li = process.env.VITE_DEV_SERVER_URL, NQ = ut.join(process.env.APP_ROOT, "dist-electron"), ju = ut.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = li ? ut.join(process.env.APP_ROOT, "public") : ju;
let G, Ht = null, ts = !1;
const ui = ut.join(process.env.VITE_PUBLIC, "logo.png");
process.platform === "win32" && Se.setAppUserModelId("com.runtime.feeddownloader.pro");
function qJ() {
  try {
    const e = process.platform === "win32" ? ut.join(process.env.VITE_PUBLIC, "icon.ico") : ui;
    Ht = new zu(e);
  } catch (e) {
    console.error("[Tray] Failed to create system tray icon:", e), Ht = null;
    return;
  }
  Ht.setToolTip("Runtime FeedDownloader Pro");
  const t = Hu.buildFromTemplate([
    {
      label: "Show",
      click: () => {
        G == null || G.show(), G == null || G.focus();
      }
    },
    { type: "separator" },
    {
      label: "Quit",
      click: () => {
        ts = !0, Se.quit();
      }
    }
  ]);
  Ht.setContextMenu(t), Ht.on("click", () => {
    G != null && G.isVisible() ? G.hide() : (G == null || G.show(), G == null || G.focus());
  });
}
function Uu() {
  G = new bc({
    title: "Runtime FeedDownloader Pro",
    icon: ui,
    backgroundColor: "#0b1120",
    // Matches Tailwind bg-background (approx)
    show: !1,
    autoHideMenuBar: !0,
    ...process.platform === "linux" ? { icon: ui } : {},
    ...process.platform === "darwin" ? { titleBarStyle: "hidden" } : {},
    webPreferences: {
      preload: ut.join(Mu, "preload.mjs"),
      nodeIntegration: !1,
      contextIsolation: !0,
      sandbox: !1
      // sandbox:true incompatible with preload+better-sqlite3 native module
    }
  }), G.webContents.session.setPermissionRequestHandler((t, e, n) => (console.log(`Blocked permission request: ${e}`), n(!1))), FJ(G), G.once("ready-to-show", () => {
    G == null || G.maximize(), G == null || G.show();
  }), G.webContents.on("did-fail-load", () => {
    G == null || G.show();
  }), process.platform !== "darwin" && G.on("close", (t) => {
    ts || (t.preventDefault(), G == null || G.hide());
  }), li ? G.loadURL(li) : G.loadFile(ut.join(ju, "index.html"));
}
Se.on("before-quit", () => {
  ts = !0;
});
Se.on("window-all-closed", () => {
  process.platform !== "darwin" ? Ht || Se.quit() : (Se.quit(), G = null);
});
Se.on("activate", () => {
  bc.getAllWindows().length === 0 && Uu();
});
Se.whenReady().then(() => {
  Uu(), process.platform !== "darwin" && qJ();
});
export {
  NQ as MAIN_DIST,
  ju as RENDERER_DIST,
  li as VITE_DEV_SERVER_URL
};
