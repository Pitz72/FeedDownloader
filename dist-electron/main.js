var Uu = Object.defineProperty;
var rs = (t) => {
  throw TypeError(t);
};
var Bu = (t, e, n) => e in t ? Uu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ue = (t, e, n) => Bu(t, typeof e != "symbol" ? e + "" : e, n), Lr = (t, e, n) => e.has(t) || rs("Cannot " + n);
var C = (t, e, n) => (Lr(t, e, "read from private field"), n ? n.call(t) : e.get(t)), re = (t, e, n) => e.has(t) ? rs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), ee = (t, e, n, r) => (Lr(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), H = (t, e, n) => (Lr(t, e, "access private method"), n);
var wt = (t, e, n, r) => ({
  set _(o) {
    ee(t, e, o, n);
  },
  get _() {
    return C(t, e, r);
  }
});
import { app as De, ipcMain as ue, Notification as os, dialog as Pn, BrowserWindow as vc, Tray as $u, Menu as Vu } from "electron";
import { fileURLToPath as zu } from "node:url";
import ut from "node:path";
import lr from "http";
import ur from "https";
import Hu, { EventEmitter as Xu } from "events";
import Gu from "timers";
import Tn from "url";
import bt from "util";
import Le, { Readable as Wu } from "stream";
import te from "path";
import ui from "fs";
import bc from "crypto";
import xc from "http2";
import wc from "assert";
import Ec from "tty";
import Yu from "os";
import yt from "zlib";
import Ku from "better-sqlite3";
import Ju from "constants";
var z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function on(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var it = {}, Dr = {}, is;
function pi() {
  return is || (is = 1, (function() {
    Dr.defaults = {
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
  }).call(z)), Dr;
}
var Cr = {}, rt = {}, ot = {}, ss;
function dt() {
  return ss || (ss = 1, (function() {
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
function Qu() {
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
function Zu() {
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
function ep() {
  return us || (us = 1, (function() {
    var t, e;
    t = Qu(), e = Zu(), Ir.exports = function() {
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
function fe() {
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
var Br = { exports: {} }, fs;
function di() {
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
function fi() {
  return ms || (ms = 1, (function() {
    var t, e, n, r, o, i, s, a, c = function(l, u) {
      for (var p in u)
        d.call(u, p) && (l[p] = u[p]);
      function h() {
        this.constructor = l;
      }
      return h.prototype = u.prototype, l.prototype = new h(), l.__super__ = u.prototype, l;
    }, d = {}.hasOwnProperty;
    a = dt(), s = a.isObject, i = a.isFunction, o = a.getValue, r = He(), t = fe(), e = Sc(), n = di(), Mr.exports = function(l) {
      c(u, l);
      function u(p, h, f) {
        var x, b, S, w;
        if (u.__super__.constructor.call(this, p), h == null)
          throw new Error("Missing element name. " + this.debugInfo());
        if (this.name = this.stringify.name(h), this.type = t.Element, this.attribs = {}, this.schemaTypeInfo = null, f != null && this.attribute(f), p.type === t.Document && (this.isRoot = !0, this.documentObject = p, p.rootObject = this, p.children)) {
          for (w = p.children, b = 0, S = w.length; b < S; b++)
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
        var p, h, f, x;
        f = Object.create(this), f.isRoot && (f.documentObject = null), f.attribs = {}, x = this.attribs;
        for (h in x)
          d.call(x, h) && (p = x[h], f.attribs[h] = p.clone());
        return f.children = [], this.children.forEach(function(b) {
          var S;
          return S = b.clone(), S.parent = f, f.children.push(S);
        }), f;
      }, u.prototype.attribute = function(p, h) {
        var f, x;
        if (p != null && (p = o(p)), s(p))
          for (f in p)
            d.call(p, f) && (x = p[f], this.attribute(f, x));
        else
          i(h) && (h = h.apply()), this.options.keepNullAttributes && h == null ? this.attribs[p] = new e(this, p, "") : h != null && (this.attribs[p] = new e(this, p, h));
        return this;
      }, u.prototype.removeAttribute = function(p) {
        var h, f, x;
        if (p == null)
          throw new Error("Missing attribute name. " + this.debugInfo());
        if (p = o(p), Array.isArray(p))
          for (f = 0, x = p.length; f < x; f++)
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
        var h, f, x;
        if (!u.__super__.isEqualNode.apply(this, arguments).isEqualNode(p) || p.namespaceURI !== this.namespaceURI || p.prefix !== this.prefix || p.localName !== this.localName || p.attribs.length !== this.attribs.length)
          return !1;
        for (h = f = 0, x = this.attribs.length - 1; 0 <= x ? f <= x : f >= x; h = 0 <= x ? ++f : --f)
          if (!this.attribs[h].isEqualNode(p.attribs[h]))
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
function mi() {
  return gs || (gs = 1, (function() {
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
var zr = { exports: {} }, ys;
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
var Hr = { exports: {} }, vs;
function gi() {
  return vs || (vs = 1, (function() {
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
var Xr = { exports: {} }, Gr = { exports: {} }, bs;
function yi() {
  return bs || (bs = 1, (function() {
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
var Wr = { exports: {} }, xs;
function vi() {
  return xs || (xs = 1, (function() {
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
var Yr = { exports: {} }, ws;
function bi() {
  return ws || (ws = 1, (function() {
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
var Kr = { exports: {} }, Es;
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
var Ts;
function wi() {
  return Ts || (Ts = 1, (function() {
    var t, e, n, r, o, i, s, a, c = function(l, u) {
      for (var p in u)
        d.call(u, p) && (l[p] = u[p]);
      function h() {
        this.constructor = l;
      }
      return h.prototype = u.prototype, l.prototype = new h(), l.__super__ = u.prototype, l;
    }, d = {}.hasOwnProperty;
    a = dt().isObject, s = He(), t = fe(), e = yi(), r = vi(), n = bi(), o = xi(), i = di(), Xr.exports = function(l) {
      c(u, l);
      function u(p, h, f) {
        var x, b, S, w, y, E;
        if (u.__super__.constructor.call(this, p), this.type = t.DocType, p.children) {
          for (w = p.children, b = 0, S = w.length; b < S; b++)
            if (x = w[b], x.type === t.Element) {
              this.name = x.name;
              break;
            }
        }
        this.documentObject = p, a(h) && (y = h, h = y.pubID, f = y.sysID), f == null && (E = [h, f], f = E[0], h = E[1]), h != null && (this.pubID = this.stringify.dtdPubID(h)), f != null && (this.sysID = this.stringify.dtdSysID(f));
      }
      return Object.defineProperty(u.prototype, "entities", {
        get: function() {
          var p, h, f, x, b;
          for (x = {}, b = this.children, h = 0, f = b.length; h < f; h++)
            p = b[h], p.type === t.EntityDeclaration && !p.pe && (x[p.name] = p);
          return new i(x);
        }
      }), Object.defineProperty(u.prototype, "notations", {
        get: function() {
          var p, h, f, x, b;
          for (x = {}, b = this.children, h = 0, f = b.length; h < f; h++)
            p = b[h], p.type === t.NotationDeclaration && (x[p.name] = p);
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
      }), u.prototype.element = function(p, h) {
        var f;
        return f = new n(this, p, h), this.children.push(f), this;
      }, u.prototype.attList = function(p, h, f, x, b) {
        var S;
        return S = new e(this, p, h, f, x, b), this.children.push(S), this;
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
      }, u.prototype.att = function(p, h, f, x, b) {
        return this.attList(p, h, f, x, b);
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
var Jr = { exports: {} }, Ss;
function Ei() {
  return Ss || (Ss = 1, (function() {
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
var Qr = { exports: {} }, Ns;
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
var Zr = { exports: {} }, Os;
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
var to = { exports: {} }, _s;
function tp() {
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
var no = { exports: {} }, Ls;
function np() {
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
var Ds;
function He() {
  return Ds || (Ds = 1, (function() {
    var t, e, n, r, o, i, s, a, c, d, l, u, p, h, f, x, b, S = {}.hasOwnProperty;
    b = dt(), x = b.isObject, f = b.isFunction, h = b.isEmpty, p = b.getValue, a = null, n = null, r = null, o = null, i = null, l = null, u = null, d = null, s = null, e = null, c = null, t = null, qr.exports = function() {
      function w(y) {
        this.parent = y, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.value = null, this.children = [], this.baseURI = null, a || (a = fi(), n = mi(), r = hi(), o = gi(), i = wi(), l = Ei(), u = Ti(), d = Si(), s = Nc(), e = fe(), c = tp(), di(), t = np());
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
          var y, E, A, D, P;
          if (this.nodeType === e.Element || this.nodeType === e.DocumentFragment) {
            for (P = "", D = this.children, E = 0, A = D.length; E < A; E++)
              y = D[E], y.textContent && (P += y.textContent);
            return P;
          } else
            return null;
        },
        set: function(y) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), w.prototype.setParent = function(y) {
        var E, A, D, P, O;
        for (this.parent = y, y && (this.options = y.options, this.stringify = y.stringify), P = this.children, O = [], A = 0, D = P.length; A < D; A++)
          E = P[A], O.push(E.setParent(this));
        return O;
      }, w.prototype.element = function(y, E, A) {
        var D, P, O, m, _, L, I, j, B, $, q;
        if (L = null, E === null && A == null && (B = [{}, null], E = B[0], A = B[1]), E == null && (E = {}), E = p(E), x(E) || ($ = [E, A], A = $[0], E = $[1]), y != null && (y = p(y)), Array.isArray(y))
          for (O = 0, I = y.length; O < I; O++)
            P = y[O], L = this.element(P);
        else if (f(y))
          L = this.element(y.apply());
        else if (x(y)) {
          for (_ in y)
            if (S.call(y, _))
              if (q = y[_], f(q) && (q = q.apply()), !this.options.ignoreDecorators && this.stringify.convertAttKey && _.indexOf(this.stringify.convertAttKey) === 0)
                L = this.attribute(_.substr(this.stringify.convertAttKey.length), q);
              else if (!this.options.separateArrayItems && Array.isArray(q) && h(q))
                L = this.dummy();
              else if (x(q) && h(q))
                L = this.element(_);
              else if (!this.options.keepNullNodes && q == null)
                L = this.dummy();
              else if (!this.options.separateArrayItems && Array.isArray(q))
                for (m = 0, j = q.length; m < j; m++)
                  P = q[m], D = {}, D[_] = P, L = this.element(D);
              else x(q) ? !this.options.ignoreDecorators && this.stringify.convertTextKey && _.indexOf(this.stringify.convertTextKey) === 0 ? L = this.element(q) : (L = this.element(_), L.element(q)) : L = this.element(_, q);
        } else !this.options.keepNullNodes && A === null ? L = this.dummy() : !this.options.ignoreDecorators && this.stringify.convertTextKey && y.indexOf(this.stringify.convertTextKey) === 0 ? L = this.text(A) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && y.indexOf(this.stringify.convertCDataKey) === 0 ? L = this.cdata(A) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && y.indexOf(this.stringify.convertCommentKey) === 0 ? L = this.comment(A) : !this.options.ignoreDecorators && this.stringify.convertRawKey && y.indexOf(this.stringify.convertRawKey) === 0 ? L = this.raw(A) : !this.options.ignoreDecorators && this.stringify.convertPIKey && y.indexOf(this.stringify.convertPIKey) === 0 ? L = this.instruction(y.substr(this.stringify.convertPIKey.length), A) : L = this.node(y, E, A);
        if (L == null)
          throw new Error("Could not create any elements with: " + y + ". " + this.debugInfo());
        return L;
      }, w.prototype.insertBefore = function(y, E, A) {
        var D, P, O, m, _;
        if (y != null && y.type)
          return O = y, m = E, O.setParent(this), m ? (P = children.indexOf(m), _ = children.splice(P), children.push(O), Array.prototype.push.apply(children, _)) : children.push(O), O;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(y));
        return P = this.parent.children.indexOf(this), _ = this.parent.children.splice(P), D = this.parent.element(y, E, A), Array.prototype.push.apply(this.parent.children, _), D;
      }, w.prototype.insertAfter = function(y, E, A) {
        var D, P, O;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(y));
        return P = this.parent.children.indexOf(this), O = this.parent.children.splice(P + 1), D = this.parent.element(y, E, A), Array.prototype.push.apply(this.parent.children, O), D;
      }, w.prototype.remove = function() {
        var y;
        if (this.isRoot)
          throw new Error("Cannot remove the root element. " + this.debugInfo());
        return y = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [y, y - y + 1].concat([])), this.parent;
      }, w.prototype.node = function(y, E, A) {
        var D, P;
        return y != null && (y = p(y)), E || (E = {}), E = p(E), x(E) || (P = [E, A], A = P[0], E = P[1]), D = new a(this, y, E), A != null && D.text(A), this.children.push(D), D;
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
        var A, D, P, O, m;
        if (y != null && (y = p(y)), E != null && (E = p(E)), Array.isArray(y))
          for (O = 0, m = y.length; O < m; O++)
            A = y[O], this.instruction(A);
        else if (x(y))
          for (A in y)
            S.call(y, A) && (D = y[A], this.instruction(A, D));
        else
          f(E) && (E = E.apply()), P = new d(this, y, E), this.children.push(P);
        return this;
      }, w.prototype.instructionBefore = function(y, E) {
        var A, D;
        return A = this.parent.children.indexOf(this), D = this.parent.children.splice(A), this.parent.instruction(y, E), Array.prototype.push.apply(this.parent.children, D), this;
      }, w.prototype.instructionAfter = function(y, E) {
        var A, D;
        return A = this.parent.children.indexOf(this), D = this.parent.children.splice(A + 1), this.parent.instruction(y, E), Array.prototype.push.apply(this.parent.children, D), this;
      }, w.prototype.declaration = function(y, E, A) {
        var D, P;
        return D = this.document(), P = new o(D, y, E, A), D.children.length === 0 ? D.children.unshift(P) : D.children[0].type === e.Declaration ? D.children[0] = P : D.children.unshift(P), D.root() || D;
      }, w.prototype.dtd = function(y, E) {
        var A, D, P, O, m, _, L, I, j, B;
        for (D = this.document(), P = new i(D, y, E), j = D.children, O = m = 0, L = j.length; m < L; O = ++m)
          if (A = j[O], A.type === e.DocType)
            return D.children[O] = P, P;
        for (B = D.children, O = _ = 0, I = B.length; _ < I; O = ++_)
          if (A = B[O], A.isRoot)
            return D.children.splice(O, 0, P), P;
        return D.children.push(P), P;
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
        var E, A, D;
        if (y.nodeType !== this.nodeType || y.children.length !== this.children.length)
          return !1;
        for (E = A = 0, D = this.children.length - 1; 0 <= D ? A <= D : A >= D; E = 0 <= D ? ++A : --A)
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
        var E, A, D, P, O;
        for (O = this.children, D = 0, P = O.length; D < P; D++)
          if (E = O[D], y === E || (A = E.isDescendant(y), A))
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
        return A = 0, E = !1, this.foreachTreeNode(this.document(), function(D) {
          if (A++, !E && D === y)
            return E = !0;
        }), E ? A : -1;
      }, w.prototype.foreachTreeNode = function(y, E) {
        var A, D, P, O, m;
        for (y || (y = this.document()), O = y.children, D = 0, P = O.length; D < P; D++) {
          if (A = O[D], m = E(A))
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
    n = dt().assign, t = fe(), gi(), wi(), mi(), hi(), fi(), Ei(), Ti(), Si(), Nc(), yi(), bi(), vi(), xi(), e = dr(), io.exports = function() {
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
        var c, d, l, u, p, h, f, x, b, S, w, y, E, A;
        a || (a = 0), S = !1, w = "", this.openNode(i, s, a), s.state = e.OpenTag, w += this.indent(i, s, a) + "<" + i.name, y = i.attribs;
        for (b in y)
          r.call(y, b) && (c = y[b], w += this.attribute(c, s, a));
        if (l = i.children.length, u = l === 0 ? null : i.children[0], l === 0 || i.children.every(function(D) {
          return (D.type === t.Text || D.type === t.Raw) && D.value === "";
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
          for (w += ">" + this.endline(i, s, a), s.state = e.InsideTag, A = i.children, h = 0, x = A.length; h < x; h++)
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
var Is;
function Ni() {
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
        var a, c, d, l, u;
        for (s = this.filterOptions(s), l = "", u = i.children, c = 0, d = u.length; c < d; c++)
          a = u[c], l += this.writeChildNode(a, s, 0);
        return s.pretty && l.slice(-s.newline.length) === s.newline && (l = l.slice(0, -s.newline.length)), l;
      }, o;
    }(t);
  }).call(z)), oo.exports;
}
var ks;
function _c() {
  return ks || (ks = 1, (function() {
    var t, e, n, r, o, i, s, a = function(d, l) {
      for (var u in l)
        c.call(l, u) && (d[u] = l[u]);
      function p() {
        this.constructor = d;
      }
      return p.prototype = l.prototype, d.prototype = new p(), d.__super__ = l.prototype, d;
    }, c = {}.hasOwnProperty;
    s = dt().isPlainObject, n = Tc(), e = ep(), r = He(), t = fe(), i = Oc(), o = Ni(), Pr.exports = function(d) {
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
var ao = { exports: {} }, Fs;
function rp() {
  return Fs || (Fs = 1, (function() {
    var t, e, n, r, o, i, s, a, c, d, l, u, p, h, f, x, b, S, w, y, E, A, D, P = {}.hasOwnProperty;
    D = dt(), E = D.isObject, y = D.isFunction, A = D.isPlainObject, w = D.getValue, t = fe(), u = _c(), p = fi(), r = mi(), o = hi(), f = Ei(), S = Ti(), h = Si(), d = gi(), l = wi(), i = yi(), a = vi(), s = bi(), c = xi(), n = Sc(), b = Oc(), x = Ni(), e = dr(), ao.exports = function() {
      function O(m, _, L) {
        var I;
        this.name = "?xml", this.type = t.Document, m || (m = {}), I = {}, m.writer ? A(m.writer) && (I = m.writer, m.writer = new x()) : m.writer = new x(), this.options = m, this.writer = m.writer, this.writerOptions = this.writer.filterOptions(I), this.stringify = new b(m), this.onDataCallback = _ || function() {
        }, this.onEndCallback = L || function() {
        }, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null;
      }
      return O.prototype.createChildNode = function(m) {
        var _, L, I, j, B, $, q, k;
        switch (m.type) {
          case t.CData:
            this.cdata(m.value);
            break;
          case t.Comment:
            this.comment(m.value);
            break;
          case t.Element:
            I = {}, q = m.attribs;
            for (L in q)
              P.call(q, L) && (_ = q[L], I[L] = _.value);
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
      }, O.prototype.node = function(m, _, L) {
        var I;
        if (m == null)
          throw new Error("Missing node name.");
        if (this.root && this.currentLevel === -1)
          throw new Error("Document can only have one root node. " + this.debugInfo(m));
        return this.openCurrent(), m = w(m), _ == null && (_ = {}), _ = w(_), E(_) || (I = [_, L], L = I[0], _ = I[1]), this.currentNode = new p(this, m, _), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, L != null && this.text(L), this;
      }, O.prototype.element = function(m, _, L) {
        var I, j, B, $, q, k;
        if (this.currentNode && this.currentNode.type === t.DocType)
          this.dtdElement.apply(this, arguments);
        else if (Array.isArray(m) || E(m) || y(m))
          for ($ = this.options.noValidation, this.options.noValidation = !0, k = new u(this.options).element("TEMP_ROOT"), k.element(m), this.options.noValidation = $, q = k.children, j = 0, B = q.length; j < B; j++)
            I = q[j], this.createChildNode(I), I.type === t.Element && this.up();
        else
          this.node(m, _, L);
        return this;
      }, O.prototype.attribute = function(m, _) {
        var L, I;
        if (!this.currentNode || this.currentNode.children)
          throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(m));
        if (m != null && (m = w(m)), E(m))
          for (L in m)
            P.call(m, L) && (I = m[L], this.attribute(L, I));
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
        var L, I, j, B, $;
        if (this.openCurrent(), m != null && (m = w(m)), _ != null && (_ = w(_)), Array.isArray(m))
          for (L = 0, B = m.length; L < B; L++)
            I = m[L], this.instruction(I);
        else if (E(m))
          for (I in m)
            P.call(m, I) && (j = m[I], this.instruction(I, j));
        else
          y(_) && (_ = _.apply()), $ = new h(this, m, _), this.onData(this.writer.processingInstruction($, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }, O.prototype.declaration = function(m, _, L) {
        var I;
        if (this.openCurrent(), this.documentStarted)
          throw new Error("declaration() must be the first node.");
        return I = new d(this, m, _, L), this.onData(this.writer.declaration(I, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.doctype = function(m, _, L) {
        if (this.openCurrent(), m == null)
          throw new Error("Missing root node name.");
        if (this.root)
          throw new Error("dtd() must come before the root node.");
        return this.currentNode = new l(this, _, L), this.currentNode.rootNodeName = m, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this;
      }, O.prototype.dtdElement = function(m, _) {
        var L;
        return this.openCurrent(), L = new s(this, m, _), this.onData(this.writer.dtdElement(L, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.attList = function(m, _, L, I, j) {
        var B;
        return this.openCurrent(), B = new i(this, m, _, L, I, j), this.onData(this.writer.dtdAttList(B, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.entity = function(m, _) {
        var L;
        return this.openCurrent(), L = new a(this, !1, m, _), this.onData(this.writer.dtdEntity(L, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.pEntity = function(m, _) {
        var L;
        return this.openCurrent(), L = new a(this, !0, m, _), this.onData(this.writer.dtdEntity(L, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }, O.prototype.notation = function(m, _) {
        var L;
        return this.openCurrent(), L = new c(this, m, _), this.onData(this.writer.dtdNotation(L, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
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
        var _, L, I, j;
        if (!m.isOpen) {
          if (!this.root && this.currentLevel === 0 && m.type === t.Element && (this.root = m), L = "", m.type === t.Element) {
            this.writerOptions.state = e.OpenTag, L = this.writer.indent(m, this.writerOptions, this.currentLevel) + "<" + m.name, j = m.attribs;
            for (I in j)
              P.call(j, I) && (_ = j[I], L += this.writer.attribute(_, this.writerOptions, this.currentLevel));
            L += (m.children ? ">" : "/>") + this.writer.endline(m, this.writerOptions, this.currentLevel), this.writerOptions.state = e.InsideTag;
          } else
            this.writerOptions.state = e.OpenTag, L = this.writer.indent(m, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + m.rootNodeName, m.pubID && m.sysID ? L += ' PUBLIC "' + m.pubID + '" "' + m.sysID + '"' : m.sysID && (L += ' SYSTEM "' + m.sysID + '"'), m.children ? (L += " [", this.writerOptions.state = e.InsideTag) : (this.writerOptions.state = e.CloseTag, L += ">"), L += this.writer.endline(m, this.writerOptions, this.currentLevel);
          return this.onData(L, this.currentLevel), m.isOpen = !0;
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
      }, O.prototype.nod = function(m, _, L) {
        return this.node(m, _, L);
      }, O.prototype.txt = function(m) {
        return this.text(m);
      }, O.prototype.dat = function(m) {
        return this.cdata(m);
      }, O.prototype.com = function(m) {
        return this.comment(m);
      }, O.prototype.ins = function(m, _) {
        return this.instruction(m, _);
      }, O.prototype.dec = function(m, _, L) {
        return this.declaration(m, _, L);
      }, O.prototype.dtd = function(m, _, L) {
        return this.doctype(m, _, L);
      }, O.prototype.e = function(m, _, L) {
        return this.element(m, _, L);
      }, O.prototype.n = function(m, _, L) {
        return this.node(m, _, L);
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
function op() {
  return qs || (qs = 1, (function() {
    var t, e, n, r = function(i, s) {
      for (var a in s)
        o.call(s, a) && (i[a] = s[a]);
      function c() {
        this.constructor = i;
      }
      return c.prototype = s.prototype, i.prototype = new c(), i.__super__ = s.prototype, i;
    }, o = {}.hasOwnProperty;
    t = fe(), n = Ac(), e = dr(), co.exports = function(i) {
      r(s, i);
      function s(a, c) {
        this.stream = a, s.__super__.constructor.call(this, c);
      }
      return s.prototype.endline = function(a, c, d) {
        return a.isLastRootNode && c.state === e.CloseTag ? "" : s.__super__.endline.call(this, a, c, d);
      }, s.prototype.document = function(a, c) {
        var d, l, u, p, h, f, x, b, S;
        for (x = a.children, l = u = 0, h = x.length; u < h; l = ++u)
          d = x[l], d.isLastRootNode = l === a.children.length - 1;
        for (c = this.filterOptions(c), b = a.children, S = [], p = 0, f = b.length; p < f; p++)
          d = b[p], S.push(this.writeChildNode(d, c, 0));
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
        var l, u, p, h, f, x, b, S, w;
        d || (d = 0), this.openNode(a, c, d), c.state = e.OpenTag, this.stream.write(this.indent(a, c, d) + "<" + a.name), S = a.attribs;
        for (b in S)
          o.call(S, b) && (l = S[b], this.attribute(l, c, d));
        if (p = a.children.length, h = p === 0 ? null : a.children[0], p === 0 || a.children.every(function(y) {
          return (y.type === t.Text || y.type === t.Raw) && y.value === "";
        }))
          c.allowEmpty ? (this.stream.write(">"), c.state = e.CloseTag, this.stream.write("</" + a.name + ">")) : (c.state = e.CloseTag, this.stream.write(c.spaceBeforeSlash + "/>"));
        else if (c.pretty && p === 1 && (h.type === t.Text || h.type === t.Raw) && h.value != null)
          this.stream.write(">"), c.state = e.InsideTag, c.suppressPrettyCount++, this.writeChildNode(h, c, d + 1), c.suppressPrettyCount--, c.state = e.CloseTag, this.stream.write("</" + a.name + ">");
        else {
          for (this.stream.write(">" + this.endline(a, c, d)), c.state = e.InsideTag, w = a.children, f = 0, x = w.length; f < x; f++)
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
var Ms;
function ip() {
  return Ms || (Ms = 1, (function() {
    var t, e, n, r, o, i, s, a, c, d;
    d = dt(), a = d.assign, c = d.isFunction, n = Tc(), r = _c(), o = rp(), s = Ni(), i = op(), t = fe(), e = dr(), rt.create = function(l, u, p, h) {
      var f, x;
      if (l == null)
        throw new Error("Root element needs a name.");
      return h = a({}, u, p, h), f = new r(h), x = f.element(l), h.headless || (f.declaration(h), (h.pubID != null || h.sysID != null) && f.dtd(h)), x;
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
var js;
function sp() {
  return js || (js = 1, (function() {
    var t, e, n, r, o, i = {}.hasOwnProperty;
    t = ip(), e = pi().defaults, r = function(s) {
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
          return function(f, x) {
            var b, S, w, y, E, A;
            if (typeof x != "object")
              h.options.cdata && r(x) ? f.raw(o(x)) : f.txt(x);
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
var lo = {}, uo = {}, Us;
function ap() {
  return Us || (Us = 1, function(t) {
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
        i(R), R.q = R.c = "", R.bufferCheckPosition = e.MAX_BUFFER_LENGTH, R.opt = g || {}, R.opt.lowercase = R.opt.lowercase || R.opt.lowercasetags, R.looseCase = R.opt.lowercase ? "toLowerCase" : "toUpperCase", R.tags = [], R.closed = R.closedRoot = R.sawRoot = !1, R.tag = R.error = null, R.strict = !!v, R.noscript = !!(v || R.opt.noscript), R.state = m.BEGIN, R.strictEntities = R.opt.strictEntities, R.ENTITIES = R.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), R.attribList = [], R.opt.xmlns && (R.ns = Object.create(x)), R.opt.unquotedAttributeValues === void 0 && (R.opt.unquotedAttributeValues = !v), R.trackPosition = R.opt.position !== !1, R.trackPosition && (R.position = R.line = R.column = 0), L(R, "onready");
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
        for (var g = Math.max(e.MAX_BUFFER_LENGTH, 10), R = 0, T = 0, Z = n.length; T < Z; T++) {
          var le = v[n[T]].length;
          if (le > g)
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
          R = Math.max(R, le);
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
            set: function(Z) {
              if (!Z)
                return R.removeAllListeners(T), R._parser["on" + T] = Z, Z;
              R.on(T, Z);
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
      var u = "[CDATA[", p = "DOCTYPE", h = "http://www.w3.org/XML/1998/namespace", f = "http://www.w3.org/2000/xmlns/", x = { xml: h, xmlns: f }, b = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, S = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, w = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, y = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function E(v) {
        return v === " " || v === `
` || v === "\r" || v === "	";
      }
      function A(v) {
        return v === '"' || v === "'";
      }
      function D(v) {
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
      function L(v, g, R) {
        v[g] && v[g](R);
      }
      function I(v, g, R) {
        v.textNode && j(v), L(v, g, R);
      }
      function j(v) {
        v.textNode = B(v.opt, v.textNode), v.textNode && L(v, "ontext", v.textNode), v.textNode = "";
      }
      function B(v, g) {
        return v.trim && (g = g.trim()), v.normalize && (g = g.replace(/\s+/g, " ")), g;
      }
      function $(v, g) {
        return j(v), v.trackPosition && (g += `
Line: ` + v.line + `
Column: ` + v.column + `
Char: ` + v.c), g = new Error(g), v.error = g, L(v, "onerror", g), v;
      }
      function q(v) {
        return v.sawRoot && !v.closedRoot && k(v, "Unclosed root tag"), v.state !== m.BEGIN && v.state !== m.BEGIN_WHITESPACE && v.state !== m.TEXT && $(v, "Unexpected end"), j(v), v.c = "", v.closed = !0, L(v, "onend"), r.call(v, v.strict, v.opt), v;
      }
      function k(v, g) {
        if (typeof v != "object" || !(v instanceof r))
          throw new Error("bad call to strictFail");
        v.strict && $(v, g);
      }
      function Y(v) {
        v.strict || (v.tagName = v.tagName[v.looseCase]());
        var g = v.tags[v.tags.length - 1] || v, R = v.tag = { name: v.tagName, attributes: {} };
        v.opt.xmlns && (R.ns = g.ns), v.attribList.length = 0, I(v, "onopentagstart", R);
      }
      function W(v, g) {
        var R = v.indexOf(":"), T = R < 0 ? ["", v] : v.split(":"), Z = T[0], le = T[1];
        return g && v === "xmlns" && (Z = "xmlns", le = ""), { prefix: Z, local: le };
      }
      function V(v) {
        if (v.strict || (v.attribName = v.attribName[v.looseCase]()), v.attribList.indexOf(v.attribName) !== -1 || v.tag.attributes.hasOwnProperty(v.attribName)) {
          v.attribName = v.attribValue = "";
          return;
        }
        if (v.opt.xmlns) {
          var g = W(v.attribName, !0), R = g.prefix, T = g.local;
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
              var Z = v.tag, le = v.tags[v.tags.length - 1] || v;
              Z.ns === le.ns && (Z.ns = Object.create(le.ns)), Z.ns[T] = v.attribValue;
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
          var R = v.tag, T = W(v.tagName);
          R.prefix = T.prefix, R.local = T.local, R.uri = R.ns[T.prefix] || "", R.prefix && !R.uri && (k(
            v,
            "Unbound namespace prefix: " + JSON.stringify(v.tagName)
          ), R.uri = T.prefix);
          var Z = v.tags[v.tags.length - 1] || v;
          R.ns && Z.ns !== R.ns && Object.keys(R.ns).forEach(function(ns) {
            I(v, "onopennamespace", {
              prefix: ns,
              uri: R.ns[ns]
            });
          });
          for (var le = 0, me = v.attribList.length; le < me; le++) {
            var Ie = v.attribList[le], ke = Ie[0], Ut = Ie[1], ve = W(ke, !0), nt = ve.prefix, ju = ve.local, ts = nt === "" ? "" : R.ns[nt] || "", _r = {
              name: ke,
              value: Ut,
              prefix: nt,
              local: ju,
              uri: ts
            };
            nt && nt !== "xmlns" && !ts && (k(
              v,
              "Unbound namespace prefix: " + JSON.stringify(nt)
            ), _r.uri = nt), v.tag.attributes[ke] = _r, I(v, "onattribute", _r);
          }
          v.attribList.length = 0;
        }
        v.tag.isSelfClosing = !!g, v.sawRoot = !0, v.tags.push(v.tag), I(v, "onopentag", v.tag), g || (!v.noscript && v.tagName.toLowerCase() === "script" ? v.state = m.SCRIPT : v.state = m.TEXT, v.tag = null, v.tagName = ""), v.attribName = v.attribValue = "", v.attribList.length = 0;
      }
      function J(v) {
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
          var Z = v.tags[g];
          if (Z.name !== T)
            k(v, "Unexpected close tag");
          else
            break;
        }
        if (g < 0) {
          k(v, "Unmatched closing tag: " + v.tagName), v.textNode += "</" + v.tagName + ">", v.state = m.TEXT;
          return;
        }
        v.tagName = R;
        for (var le = v.tags.length; le-- > g; ) {
          var me = v.tag = v.tags.pop();
          v.tagName = v.tag.name, I(v, "onclosetag", v.tagName);
          var Ie = {};
          for (var ke in me.ns)
            Ie[ke] = me.ns[ke];
          var Ut = v.tags[v.tags.length - 1] || v;
          v.opt.xmlns && me.ns !== Ut.ns && Object.keys(me.ns).forEach(function(ve) {
            var nt = me.ns[ve];
            I(v, "onclosenamespace", { prefix: ve, uri: nt });
          });
        }
        g === 0 && (v.closedRoot = !0), v.tagName = v.attribValue = v.attribName = "", v.attribList.length = 0, v.state = m.TEXT;
      }
      function Ne(v) {
        var g = v.entity, R = g.toLowerCase(), T, Z = "";
        return v.ENTITIES[g] ? v.ENTITIES[g] : v.ENTITIES[R] ? v.ENTITIES[R] : (g = R, g.charAt(0) === "#" && (g.charAt(1) === "x" ? (g = g.slice(2), T = parseInt(g, 16), Z = T.toString(16)) : (g = g.slice(1), T = parseInt(g, 10), Z = T.toString(10))), g = g.replace(/^0+/, ""), isNaN(T) || Z.toLowerCase() !== g || T < 0 || T > 1114111 ? (k(v, "Invalid character entity"), "&" + v.entity + ";") : String.fromCodePoint(T));
      }
      function ne(v, g) {
        g === "<" ? (v.state = m.OPEN_WAKA, v.startTagPosition = v.position) : E(g) || (k(v, "Non-whitespace before first tag."), v.textNode = g, v.state = m.TEXT);
      }
      function Oe(v, g) {
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
        for (var R = 0, T = ""; T = Oe(v, R++), g.c = T, !!T; )
          switch (g.trackPosition && (g.position++, T === `
` ? (g.line++, g.column = 0) : g.column++), g.state) {
            case m.BEGIN:
              if (g.state = m.BEGIN_WHITESPACE, T === "\uFEFF")
                continue;
              ne(g, T);
              continue;
            case m.BEGIN_WHITESPACE:
              ne(g, T);
              continue;
            case m.TEXT:
              if (g.sawRoot && !g.closedRoot) {
                for (var le = R - 1; T && T !== "<" && T !== "&"; )
                  T = Oe(v, R++), T && g.trackPosition && (g.position++, T === `
` ? (g.line++, g.column = 0) : g.column++);
                g.textNode += v.substring(le, R - 1);
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
              else if (!E(T)) if (P(b, T))
                g.state = m.OPEN_TAG, g.tagName = T;
              else if (T === "/")
                g.state = m.CLOSE_TAG, g.tagName = "";
              else if (T === "?")
                g.state = m.PROC_INST, g.procInstName = g.procInstBody = "";
              else {
                if (k(g, "Unencoded <"), g.startTagPosition + 1 < g.position) {
                  var Z = g.position - g.startTagPosition;
                  T = new Array(Z).join(" ") + T;
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
              for (var le = R - 1; T && T !== "]"; )
                T = Oe(v, R++), T && g.trackPosition && (g.position++, T === `
` ? (g.line++, g.column = 0) : g.column++);
              g.cdata += v.substring(le, R - 1), T === "]" && (g.state = m.CDATA_ENDING);
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
              P(S, T) ? g.tagName += T : (Y(g), T === ">" ? U(g) : T === "/" ? g.state = m.OPEN_TAG_SLASH : (E(T) || k(g, "Invalid character in tag name"), g.state = m.ATTRIB));
              continue;
            case m.OPEN_TAG_SLASH:
              T === ">" ? (U(g, !0), J(g)) : (k(
                g,
                "Forward-slash in opening tag not followed by >"
              ), g.state = m.ATTRIB);
              continue;
            case m.ATTRIB:
              if (E(T))
                continue;
              T === ">" ? U(g) : T === "/" ? g.state = m.OPEN_TAG_SLASH : P(b, T) ? (g.attribName = T, g.attribValue = "", g.state = m.ATTRIB_NAME) : k(g, "Invalid attribute name");
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
                }), g.attribName = "", T === ">" ? U(g) : P(b, T) ? (g.attribName = T, g.state = m.ATTRIB_NAME) : (k(g, "Invalid attribute name"), g.state = m.ATTRIB);
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
              E(T) ? g.state = m.ATTRIB : T === ">" ? U(g) : T === "/" ? g.state = m.OPEN_TAG_SLASH : P(b, T) ? (k(g, "No whitespace between attributes"), g.attribName = T, g.attribValue = "", g.state = m.ATTRIB_NAME) : k(g, "Invalid attribute name");
              continue;
            case m.ATTRIB_VALUE_UNQUOTED:
              if (!D(T)) {
                T === "&" ? g.state = m.ATTRIB_VALUE_ENTITY_U : g.attribValue += T;
                continue;
              }
              V(g), T === ">" ? U(g) : g.state = m.ATTRIB;
              continue;
            case m.CLOSE_TAG:
              if (g.tagName)
                T === ">" ? J(g) : P(S, T) ? g.tagName += T : g.script ? (g.script += "</" + g.tagName + T, g.tagName = "", g.state = m.SCRIPT) : (E(T) || k(g, "Invalid tagname in closing tag"), g.state = m.CLOSE_TAG_SAW_WHITE);
              else {
                if (E(T))
                  continue;
                O(b, T) ? g.script ? (g.script += "</" + T, g.state = m.SCRIPT) : k(g, "Invalid tagname in closing tag.") : g.tagName = T;
              }
              continue;
            case m.CLOSE_TAG_SAW_WHITE:
              if (E(T))
                continue;
              T === ">" ? J(g) : k(g, "Invalid characters in closing tag");
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
                var ke = Ne(g);
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
          var T = 16384, Z = [], le, me, Ie = -1, ke = arguments.length;
          if (!ke)
            return "";
          for (var Ut = ""; ++Ie < ke; ) {
            var ve = Number(arguments[Ie]);
            if (!isFinite(ve) || // `NaN`, `+Infinity`, or `-Infinity`
            ve < 0 || // not a valid Unicode code point
            ve > 1114111 || // not a valid Unicode code point
            g(ve) !== ve)
              throw RangeError("Invalid code point: " + ve);
            ve <= 65535 ? Z.push(ve) : (ve -= 65536, le = (ve >> 10) + 55296, me = ve % 1024 + 56320, Z.push(le, me)), (Ie + 1 === ke || Z.length > T) && (Ut += v.apply(null, Z), Z.length = 0);
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
function cp() {
  return Bs || (Bs = 1, (function() {
    po.stripBOM = function(t) {
      return t[0] === "\uFEFF" ? t.substring(1) : t;
    };
  }).call(z)), po;
}
var Et = {}, $s;
function Lc() {
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
function lp() {
  return Vs || (Vs = 1, function(t) {
    (function() {
      var e, n, r, o, i, s, a, c, d = function(p, h) {
        return function() {
          return p.apply(h, arguments);
        };
      }, l = function(p, h) {
        for (var f in h)
          u.call(h, f) && (p[f] = h[f]);
        function x() {
          this.constructor = p;
        }
        return x.prototype = h.prototype, p.prototype = new x(), p.__super__ = h.prototype, p;
      }, u = {}.hasOwnProperty;
      a = ap(), r = Hu, e = cp(), s = Lc(), c = Gu.setImmediate, n = pi().defaults, o = function(p) {
        return typeof p == "object" && p != null && Object.keys(p).length === 0;
      }, i = function(p, h, f) {
        var x, b, S;
        for (x = 0, b = p.length; x < b; x++)
          S = p[x], h = S(h, f);
        return h;
      }, t.Parser = function(p) {
        l(h, p);
        function h(f) {
          this.parseStringPromise = d(this.parseStringPromise, this), this.parseString = d(this.parseString, this), this.reset = d(this.reset, this), this.assignOrPush = d(this.assignOrPush, this), this.processAsync = d(this.processAsync, this);
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
        return h.prototype.processAsync = function() {
          var f, x;
          try {
            return this.remaining.length <= this.options.chunkSize ? (f = this.remaining, this.remaining = "", this.saxParser = this.saxParser.write(f), this.saxParser.close()) : (f = this.remaining.substr(0, this.options.chunkSize), this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length), this.saxParser = this.saxParser.write(f), c(this.processAsync));
          } catch (b) {
            if (x = b, !this.saxParser.errThrown)
              return this.saxParser.errThrown = !0, this.emit(x);
          }
        }, h.prototype.assignOrPush = function(f, x, b) {
          return x in f ? (f[x] instanceof Array || (f[x] = [f[x]]), f[x].push(b)) : this.options.explicitArray ? f[x] = [b] : f[x] = b;
        }, h.prototype.reset = function() {
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
              var E, A, D, P, O;
              if (D = /* @__PURE__ */ Object.create(null), D[x] = "", !w.options.ignoreAttrs) {
                O = y.attributes;
                for (E in O)
                  u.call(O, E) && (!(f in D) && !w.options.mergeAttrs && (D[f] = /* @__PURE__ */ Object.create(null)), A = w.options.attrValueProcessors ? i(w.options.attrValueProcessors, y.attributes[E], E) : y.attributes[E], P = w.options.attrNameProcessors ? i(w.options.attrNameProcessors, E) : E, w.options.mergeAttrs ? w.assignOrPush(D, P, A) : D[f][P] = A);
              }
              return D["#name"] = w.options.tagNameProcessors ? i(w.options.tagNameProcessors, y.name) : y.name, w.options.xmlns && (D[w.options.xmlnskey] = {
                uri: y.uri,
                local: y.local
              }), S.push(D);
            };
          }(this), this.saxParser.onclosetag = /* @__PURE__ */ function(w) {
            return function() {
              var y, E, A, D, P, O, m, _, L, I;
              if (O = S.pop(), P = O["#name"], (!w.options.explicitChildren || !w.options.preserveChildrenOrder) && delete O["#name"], O.cdata === !0 && (y = O.cdata, delete O.cdata), L = S[S.length - 1], O[x].match(/^\s*$/) && !y ? (E = O[x], delete O[x]) : (w.options.trim && (O[x] = O[x].trim()), w.options.normalize && (O[x] = O[x].replace(/\s{2,}/g, " ").trim()), O[x] = w.options.valueProcessors ? i(w.options.valueProcessors, O[x], P) : O[x], Object.keys(O).length === 1 && x in O && !w.EXPLICIT_CHARKEY && (O = O[x])), o(O) && (typeof w.options.emptyTag == "function" ? O = w.options.emptyTag() : O = w.options.emptyTag !== "" ? w.options.emptyTag : E), w.options.validator != null && (I = "/" + function() {
                var j, B, $;
                for ($ = [], j = 0, B = S.length; j < B; j++)
                  D = S[j], $.push(D["#name"]);
                return $;
              }().concat(P).join("/"), function() {
                var j;
                try {
                  return O = w.options.validator(I, L && L[P], O);
                } catch (B) {
                  return j = B, w.emit("error", j);
                }
              }()), w.options.explicitChildren && !w.options.mergeAttrs && typeof O == "object") {
                if (!w.options.preserveChildrenOrder)
                  D = /* @__PURE__ */ Object.create(null), w.options.attrkey in O && (D[w.options.attrkey] = O[w.options.attrkey], delete O[w.options.attrkey]), !w.options.charsAsChildren && w.options.charkey in O && (D[w.options.charkey] = O[w.options.charkey], delete O[w.options.charkey]), Object.getOwnPropertyNames(O).length > 0 && (D[w.options.childkey] = O), O = D;
                else if (L) {
                  L[w.options.childkey] = L[w.options.childkey] || [], m = /* @__PURE__ */ Object.create(null);
                  for (A in O)
                    u.call(O, A) && (m[A] = O[A]);
                  L[w.options.childkey].push(m), delete O["#name"], Object.keys(O).length === 1 && x in O && !w.EXPLICIT_CHARKEY && (O = O[x]);
                }
              }
              return S.length > 0 ? w.assignOrPush(L, P, O) : (w.options.explicitRoot && (_ = O, O = /* @__PURE__ */ Object.create(null), O[P] = _), w.resultObject = O, w.saxParser.ended = !0, w.emit("end", w.resultObject));
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
        }, h.prototype.parseString = function(f, x) {
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
        }, h.prototype.parseStringPromise = function(f) {
          return new Promise(/* @__PURE__ */ function(x) {
            return function(b, S) {
              return x.parseString(f, function(w, y) {
                return w ? S(w) : b(y);
              });
            };
          }(this));
        }, h;
      }(r), t.parseString = function(p, h, f) {
        var x, b, S;
        return f != null ? (typeof f == "function" && (x = f), typeof h == "object" && (b = h)) : (typeof h == "function" && (x = h), b = {}), S = new t.Parser(b), S.parseString(p, x);
      }, t.parseStringPromise = function(p, h) {
        var f, x;
        return typeof h == "object" && (f = h), x = new t.Parser(f), x.parseStringPromise(p);
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
  e = pi(), t = sp(), n = lp(), r = Lc(), it.defaults = e.defaults, it.processors = r, it.ValidationError = function(s) {
    o(a, s);
    function a(c) {
      this.message = c;
    }
    return a;
  }(Error), it.Builder = t.Builder, it.Parser = n.Parser, it.parseString = n.parseString, it.parseStringPromise = n.parseStringPromise;
}).call(z);
var Dc = { exports: {} };
const fr = Dc.exports = {};
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
var up = Dc.exports, Rc = { exports: {} }, Pc = {}, lt = {};
const pp = "Á", dp = "á", fp = "Ă", mp = "ă", hp = "∾", gp = "∿", yp = "∾̳", vp = "Â", bp = "â", xp = "´", wp = "А", Ep = "а", Tp = "Æ", Sp = "æ", Np = "⁡", Op = "𝔄", Ap = "𝔞", _p = "À", Lp = "à", Dp = "ℵ", Cp = "ℵ", Rp = "Α", Pp = "α", Ip = "Ā", kp = "ā", Fp = "⨿", qp = "&", Mp = "&", jp = "⩕", Up = "⩓", Bp = "∧", $p = "⩜", Vp = "⩘", zp = "⩚", Hp = "∠", Xp = "⦤", Gp = "∠", Wp = "⦨", Yp = "⦩", Kp = "⦪", Jp = "⦫", Qp = "⦬", Zp = "⦭", ed = "⦮", td = "⦯", nd = "∡", rd = "∟", od = "⊾", id = "⦝", sd = "∢", ad = "Å", cd = "⍼", ld = "Ą", ud = "ą", pd = "𝔸", dd = "𝕒", fd = "⩯", md = "≈", hd = "⩰", gd = "≊", yd = "≋", vd = "'", bd = "⁡", xd = "≈", wd = "≊", Ed = "Å", Td = "å", Sd = "𝒜", Nd = "𝒶", Od = "≔", Ad = "*", _d = "≈", Ld = "≍", Dd = "Ã", Cd = "ã", Rd = "Ä", Pd = "ä", Id = "∳", kd = "⨑", Fd = "≌", qd = "϶", Md = "‵", jd = "∽", Ud = "⋍", Bd = "∖", $d = "⫧", Vd = "⊽", zd = "⌅", Hd = "⌆", Xd = "⌅", Gd = "⎵", Wd = "⎶", Yd = "≌", Kd = "Б", Jd = "б", Qd = "„", Zd = "∵", ef = "∵", tf = "∵", nf = "⦰", rf = "϶", of = "ℬ", sf = "ℬ", af = "Β", cf = "β", lf = "ℶ", uf = "≬", pf = "𝔅", df = "𝔟", ff = "⋂", mf = "◯", hf = "⋃", gf = "⨀", yf = "⨁", vf = "⨂", bf = "⨆", xf = "★", wf = "▽", Ef = "△", Tf = "⨄", Sf = "⋁", Nf = "⋀", Of = "⤍", Af = "⧫", _f = "▪", Lf = "▴", Df = "▾", Cf = "◂", Rf = "▸", Pf = "␣", If = "▒", kf = "░", Ff = "▓", qf = "█", Mf = "=⃥", jf = "≡⃥", Uf = "⫭", Bf = "⌐", $f = "𝔹", Vf = "𝕓", zf = "⊥", Hf = "⊥", Xf = "⋈", Gf = "⧉", Wf = "┐", Yf = "╕", Kf = "╖", Jf = "╗", Qf = "┌", Zf = "╒", em = "╓", tm = "╔", nm = "─", rm = "═", om = "┬", im = "╤", sm = "╥", am = "╦", cm = "┴", lm = "╧", um = "╨", pm = "╩", dm = "⊟", fm = "⊞", mm = "⊠", hm = "┘", gm = "╛", ym = "╜", vm = "╝", bm = "└", xm = "╘", wm = "╙", Em = "╚", Tm = "│", Sm = "║", Nm = "┼", Om = "╪", Am = "╫", _m = "╬", Lm = "┤", Dm = "╡", Cm = "╢", Rm = "╣", Pm = "├", Im = "╞", km = "╟", Fm = "╠", qm = "‵", Mm = "˘", jm = "˘", Um = "¦", Bm = "𝒷", $m = "ℬ", Vm = "⁏", zm = "∽", Hm = "⋍", Xm = "⧅", Gm = "\\", Wm = "⟈", Ym = "•", Km = "•", Jm = "≎", Qm = "⪮", Zm = "≏", eh = "≎", th = "≏", nh = "Ć", rh = "ć", oh = "⩄", ih = "⩉", sh = "⩋", ah = "∩", ch = "⋒", lh = "⩇", uh = "⩀", ph = "ⅅ", dh = "∩︀", fh = "⁁", mh = "ˇ", hh = "ℭ", gh = "⩍", yh = "Č", vh = "č", bh = "Ç", xh = "ç", wh = "Ĉ", Eh = "ĉ", Th = "∰", Sh = "⩌", Nh = "⩐", Oh = "Ċ", Ah = "ċ", _h = "¸", Lh = "¸", Dh = "⦲", Ch = "¢", Rh = "·", Ph = "·", Ih = "𝔠", kh = "ℭ", Fh = "Ч", qh = "ч", Mh = "✓", jh = "✓", Uh = "Χ", Bh = "χ", $h = "ˆ", Vh = "≗", zh = "↺", Hh = "↻", Xh = "⊛", Gh = "⊚", Wh = "⊝", Yh = "⊙", Kh = "®", Jh = "Ⓢ", Qh = "⊖", Zh = "⊕", eg = "⊗", tg = "○", ng = "⧃", rg = "≗", og = "⨐", ig = "⫯", sg = "⧂", ag = "∲", cg = "”", lg = "’", ug = "♣", pg = "♣", dg = ":", fg = "∷", mg = "⩴", hg = "≔", gg = "≔", yg = ",", vg = "@", bg = "∁", xg = "∘", wg = "∁", Eg = "ℂ", Tg = "≅", Sg = "⩭", Ng = "≡", Og = "∮", Ag = "∯", _g = "∮", Lg = "𝕔", Dg = "ℂ", Cg = "∐", Rg = "∐", Pg = "©", Ig = "©", kg = "℗", Fg = "∳", qg = "↵", Mg = "✗", jg = "⨯", Ug = "𝒞", Bg = "𝒸", $g = "⫏", Vg = "⫑", zg = "⫐", Hg = "⫒", Xg = "⋯", Gg = "⤸", Wg = "⤵", Yg = "⋞", Kg = "⋟", Jg = "↶", Qg = "⤽", Zg = "⩈", ey = "⩆", ty = "≍", ny = "∪", ry = "⋓", oy = "⩊", iy = "⊍", sy = "⩅", ay = "∪︀", cy = "↷", ly = "⤼", uy = "⋞", py = "⋟", dy = "⋎", fy = "⋏", my = "¤", hy = "↶", gy = "↷", yy = "⋎", vy = "⋏", by = "∲", xy = "∱", wy = "⌭", Ey = "†", Ty = "‡", Sy = "ℸ", Ny = "↓", Oy = "↡", Ay = "⇓", _y = "‐", Ly = "⫤", Dy = "⊣", Cy = "⤏", Ry = "˝", Py = "Ď", Iy = "ď", ky = "Д", Fy = "д", qy = "‡", My = "⇊", jy = "ⅅ", Uy = "ⅆ", By = "⤑", $y = "⩷", Vy = "°", zy = "∇", Hy = "Δ", Xy = "δ", Gy = "⦱", Wy = "⥿", Yy = "𝔇", Ky = "𝔡", Jy = "⥥", Qy = "⇃", Zy = "⇂", ev = "´", tv = "˙", nv = "˝", rv = "`", ov = "˜", iv = "⋄", sv = "⋄", av = "⋄", cv = "♦", lv = "♦", uv = "¨", pv = "ⅆ", dv = "ϝ", fv = "⋲", mv = "÷", hv = "÷", gv = "⋇", yv = "⋇", vv = "Ђ", bv = "ђ", xv = "⌞", wv = "⌍", Ev = "$", Tv = "𝔻", Sv = "𝕕", Nv = "¨", Ov = "˙", Av = "⃜", _v = "≐", Lv = "≑", Dv = "≐", Cv = "∸", Rv = "∔", Pv = "⊡", Iv = "⌆", kv = "∯", Fv = "¨", qv = "⇓", Mv = "⇐", jv = "⇔", Uv = "⫤", Bv = "⟸", $v = "⟺", Vv = "⟹", zv = "⇒", Hv = "⊨", Xv = "⇑", Gv = "⇕", Wv = "∥", Yv = "⤓", Kv = "↓", Jv = "↓", Qv = "⇓", Zv = "⇵", eb = "̑", tb = "⇊", nb = "⇃", rb = "⇂", ob = "⥐", ib = "⥞", sb = "⥖", ab = "↽", cb = "⥟", lb = "⥗", ub = "⇁", pb = "↧", db = "⊤", fb = "⤐", mb = "⌟", hb = "⌌", gb = "𝒟", yb = "𝒹", vb = "Ѕ", bb = "ѕ", xb = "⧶", wb = "Đ", Eb = "đ", Tb = "⋱", Sb = "▿", Nb = "▾", Ob = "⇵", Ab = "⥯", _b = "⦦", Lb = "Џ", Db = "џ", Cb = "⟿", Rb = "É", Pb = "é", Ib = "⩮", kb = "Ě", Fb = "ě", qb = "Ê", Mb = "ê", jb = "≖", Ub = "≕", Bb = "Э", $b = "э", Vb = "⩷", zb = "Ė", Hb = "ė", Xb = "≑", Gb = "ⅇ", Wb = "≒", Yb = "𝔈", Kb = "𝔢", Jb = "⪚", Qb = "È", Zb = "è", ex = "⪖", tx = "⪘", nx = "⪙", rx = "∈", ox = "⏧", ix = "ℓ", sx = "⪕", ax = "⪗", cx = "Ē", lx = "ē", ux = "∅", px = "∅", dx = "◻", fx = "∅", mx = "▫", hx = " ", gx = " ", yx = " ", vx = "Ŋ", bx = "ŋ", xx = " ", wx = "Ę", Ex = "ę", Tx = "𝔼", Sx = "𝕖", Nx = "⋕", Ox = "⧣", Ax = "⩱", _x = "ε", Lx = "Ε", Dx = "ε", Cx = "ϵ", Rx = "≖", Px = "≕", Ix = "≂", kx = "⪖", Fx = "⪕", qx = "⩵", Mx = "=", jx = "≂", Ux = "≟", Bx = "⇌", $x = "≡", Vx = "⩸", zx = "⧥", Hx = "⥱", Xx = "≓", Gx = "ℯ", Wx = "ℰ", Yx = "≐", Kx = "⩳", Jx = "≂", Qx = "Η", Zx = "η", ew = "Ð", tw = "ð", nw = "Ë", rw = "ë", ow = "€", iw = "!", sw = "∃", aw = "∃", cw = "ℰ", lw = "ⅇ", uw = "ⅇ", pw = "≒", dw = "Ф", fw = "ф", mw = "♀", hw = "ﬃ", gw = "ﬀ", yw = "ﬄ", vw = "𝔉", bw = "𝔣", xw = "ﬁ", ww = "◼", Ew = "▪", Tw = "fj", Sw = "♭", Nw = "ﬂ", Ow = "▱", Aw = "ƒ", _w = "𝔽", Lw = "𝕗", Dw = "∀", Cw = "∀", Rw = "⋔", Pw = "⫙", Iw = "ℱ", kw = "⨍", Fw = "½", qw = "⅓", Mw = "¼", jw = "⅕", Uw = "⅙", Bw = "⅛", $w = "⅔", Vw = "⅖", zw = "¾", Hw = "⅗", Xw = "⅜", Gw = "⅘", Ww = "⅚", Yw = "⅝", Kw = "⅞", Jw = "⁄", Qw = "⌢", Zw = "𝒻", eE = "ℱ", tE = "ǵ", nE = "Γ", rE = "γ", oE = "Ϝ", iE = "ϝ", sE = "⪆", aE = "Ğ", cE = "ğ", lE = "Ģ", uE = "Ĝ", pE = "ĝ", dE = "Г", fE = "г", mE = "Ġ", hE = "ġ", gE = "≥", yE = "≧", vE = "⪌", bE = "⋛", xE = "≥", wE = "≧", EE = "⩾", TE = "⪩", SE = "⩾", NE = "⪀", OE = "⪂", AE = "⪄", _E = "⋛︀", LE = "⪔", DE = "𝔊", CE = "𝔤", RE = "≫", PE = "⋙", IE = "⋙", kE = "ℷ", FE = "Ѓ", qE = "ѓ", ME = "⪥", jE = "≷", UE = "⪒", BE = "⪤", $E = "⪊", VE = "⪊", zE = "⪈", HE = "≩", XE = "⪈", GE = "≩", WE = "⋧", YE = "𝔾", KE = "𝕘", JE = "`", QE = "≥", ZE = "⋛", eT = "≧", tT = "⪢", nT = "≷", rT = "⩾", oT = "≳", iT = "𝒢", sT = "ℊ", aT = "≳", cT = "⪎", lT = "⪐", uT = "⪧", pT = "⩺", dT = ">", fT = ">", mT = "≫", hT = "⋗", gT = "⦕", yT = "⩼", vT = "⪆", bT = "⥸", xT = "⋗", wT = "⋛", ET = "⪌", TT = "≷", ST = "≳", NT = "≩︀", OT = "≩︀", AT = "ˇ", _T = " ", LT = "½", DT = "ℋ", CT = "Ъ", RT = "ъ", PT = "⥈", IT = "↔", kT = "⇔", FT = "↭", qT = "^", MT = "ℏ", jT = "Ĥ", UT = "ĥ", BT = "♥", $T = "♥", VT = "…", zT = "⊹", HT = "𝔥", XT = "ℌ", GT = "ℋ", WT = "⤥", YT = "⤦", KT = "⇿", JT = "∻", QT = "↩", ZT = "↪", eS = "𝕙", tS = "ℍ", nS = "―", rS = "─", oS = "𝒽", iS = "ℋ", sS = "ℏ", aS = "Ħ", cS = "ħ", lS = "≎", uS = "≏", pS = "⁃", dS = "‐", fS = "Í", mS = "í", hS = "⁣", gS = "Î", yS = "î", vS = "И", bS = "и", xS = "İ", wS = "Е", ES = "е", TS = "¡", SS = "⇔", NS = "𝔦", OS = "ℑ", AS = "Ì", _S = "ì", LS = "ⅈ", DS = "⨌", CS = "∭", RS = "⧜", PS = "℩", IS = "Ĳ", kS = "ĳ", FS = "Ī", qS = "ī", MS = "ℑ", jS = "ⅈ", US = "ℐ", BS = "ℑ", $S = "ı", VS = "ℑ", zS = "⊷", HS = "Ƶ", XS = "⇒", GS = "℅", WS = "∞", YS = "⧝", KS = "ı", JS = "⊺", QS = "∫", ZS = "∬", e0 = "ℤ", t0 = "∫", n0 = "⊺", r0 = "⋂", o0 = "⨗", i0 = "⨼", s0 = "⁣", a0 = "⁢", c0 = "Ё", l0 = "ё", u0 = "Į", p0 = "į", d0 = "𝕀", f0 = "𝕚", m0 = "Ι", h0 = "ι", g0 = "⨼", y0 = "¿", v0 = "𝒾", b0 = "ℐ", x0 = "∈", w0 = "⋵", E0 = "⋹", T0 = "⋴", S0 = "⋳", N0 = "∈", O0 = "⁢", A0 = "Ĩ", _0 = "ĩ", L0 = "І", D0 = "і", C0 = "Ï", R0 = "ï", P0 = "Ĵ", I0 = "ĵ", k0 = "Й", F0 = "й", q0 = "𝔍", M0 = "𝔧", j0 = "ȷ", U0 = "𝕁", B0 = "𝕛", $0 = "𝒥", V0 = "𝒿", z0 = "Ј", H0 = "ј", X0 = "Є", G0 = "є", W0 = "Κ", Y0 = "κ", K0 = "ϰ", J0 = "Ķ", Q0 = "ķ", Z0 = "К", eN = "к", tN = "𝔎", nN = "𝔨", rN = "ĸ", oN = "Х", iN = "х", sN = "Ќ", aN = "ќ", cN = "𝕂", lN = "𝕜", uN = "𝒦", pN = "𝓀", dN = "⇚", fN = "Ĺ", mN = "ĺ", hN = "⦴", gN = "ℒ", yN = "Λ", vN = "λ", bN = "⟨", xN = "⟪", wN = "⦑", EN = "⟨", TN = "⪅", SN = "ℒ", NN = "«", ON = "⇤", AN = "⤟", _N = "←", LN = "↞", DN = "⇐", CN = "⤝", RN = "↩", PN = "↫", IN = "⤹", kN = "⥳", FN = "↢", qN = "⤙", MN = "⤛", jN = "⪫", UN = "⪭", BN = "⪭︀", $N = "⤌", VN = "⤎", zN = "❲", HN = "{", XN = "[", GN = "⦋", WN = "⦏", YN = "⦍", KN = "Ľ", JN = "ľ", QN = "Ļ", ZN = "ļ", eO = "⌈", tO = "{", nO = "Л", rO = "л", oO = "⤶", iO = "“", sO = "„", aO = "⥧", cO = "⥋", lO = "↲", uO = "≤", pO = "≦", dO = "⟨", fO = "⇤", mO = "←", hO = "←", gO = "⇐", yO = "⇆", vO = "↢", bO = "⌈", xO = "⟦", wO = "⥡", EO = "⥙", TO = "⇃", SO = "⌊", NO = "↽", OO = "↼", AO = "⇇", _O = "↔", LO = "↔", DO = "⇔", CO = "⇆", RO = "⇋", PO = "↭", IO = "⥎", kO = "↤", FO = "⊣", qO = "⥚", MO = "⋋", jO = "⧏", UO = "⊲", BO = "⊴", $O = "⥑", VO = "⥠", zO = "⥘", HO = "↿", XO = "⥒", GO = "↼", WO = "⪋", YO = "⋚", KO = "≤", JO = "≦", QO = "⩽", ZO = "⪨", eA = "⩽", tA = "⩿", nA = "⪁", rA = "⪃", oA = "⋚︀", iA = "⪓", sA = "⪅", aA = "⋖", cA = "⋚", lA = "⪋", uA = "⋚", pA = "≦", dA = "≶", fA = "≶", mA = "⪡", hA = "≲", gA = "⩽", yA = "≲", vA = "⥼", bA = "⌊", xA = "𝔏", wA = "𝔩", EA = "≶", TA = "⪑", SA = "⥢", NA = "↽", OA = "↼", AA = "⥪", _A = "▄", LA = "Љ", DA = "љ", CA = "⇇", RA = "≪", PA = "⋘", IA = "⌞", kA = "⇚", FA = "⥫", qA = "◺", MA = "Ŀ", jA = "ŀ", UA = "⎰", BA = "⎰", $A = "⪉", VA = "⪉", zA = "⪇", HA = "≨", XA = "⪇", GA = "≨", WA = "⋦", YA = "⟬", KA = "⇽", JA = "⟦", QA = "⟵", ZA = "⟵", e_ = "⟸", t_ = "⟷", n_ = "⟷", r_ = "⟺", o_ = "⟼", i_ = "⟶", s_ = "⟶", a_ = "⟹", c_ = "↫", l_ = "↬", u_ = "⦅", p_ = "𝕃", d_ = "𝕝", f_ = "⨭", m_ = "⨴", h_ = "∗", g_ = "_", y_ = "↙", v_ = "↘", b_ = "◊", x_ = "◊", w_ = "⧫", E_ = "(", T_ = "⦓", S_ = "⇆", N_ = "⌟", O_ = "⇋", A_ = "⥭", __ = "‎", L_ = "⊿", D_ = "‹", C_ = "𝓁", R_ = "ℒ", P_ = "↰", I_ = "↰", k_ = "≲", F_ = "⪍", q_ = "⪏", M_ = "[", j_ = "‘", U_ = "‚", B_ = "Ł", $_ = "ł", V_ = "⪦", z_ = "⩹", H_ = "<", X_ = "<", G_ = "≪", W_ = "⋖", Y_ = "⋋", K_ = "⋉", J_ = "⥶", Q_ = "⩻", Z_ = "◃", eL = "⊴", tL = "◂", nL = "⦖", rL = "⥊", oL = "⥦", iL = "≨︀", sL = "≨︀", aL = "¯", cL = "♂", lL = "✠", uL = "✠", pL = "↦", dL = "↦", fL = "↧", mL = "↤", hL = "↥", gL = "▮", yL = "⨩", vL = "М", bL = "м", xL = "—", wL = "∺", EL = "∡", TL = " ", SL = "ℳ", NL = "𝔐", OL = "𝔪", AL = "℧", _L = "µ", LL = "*", DL = "⫰", CL = "∣", RL = "·", PL = "⊟", IL = "−", kL = "∸", FL = "⨪", qL = "∓", ML = "⫛", jL = "…", UL = "∓", BL = "⊧", $L = "𝕄", VL = "𝕞", zL = "∓", HL = "𝓂", XL = "ℳ", GL = "∾", WL = "Μ", YL = "μ", KL = "⊸", JL = "⊸", QL = "∇", ZL = "Ń", eD = "ń", tD = "∠⃒", nD = "≉", rD = "⩰̸", oD = "≋̸", iD = "ŉ", sD = "≉", aD = "♮", cD = "ℕ", lD = "♮", uD = " ", pD = "≎̸", dD = "≏̸", fD = "⩃", mD = "Ň", hD = "ň", gD = "Ņ", yD = "ņ", vD = "≇", bD = "⩭̸", xD = "⩂", wD = "Н", ED = "н", TD = "–", SD = "⤤", ND = "↗", OD = "⇗", AD = "↗", _D = "≠", LD = "≐̸", DD = "​", CD = "​", RD = "​", PD = "​", ID = "≢", kD = "⤨", FD = "≂̸", qD = "≫", MD = "≪", jD = `
`, UD = "∄", BD = "∄", $D = "𝔑", VD = "𝔫", zD = "≧̸", HD = "≱", XD = "≱", GD = "≧̸", WD = "⩾̸", YD = "⩾̸", KD = "⋙̸", JD = "≵", QD = "≫⃒", ZD = "≯", eC = "≯", tC = "≫̸", nC = "↮", rC = "⇎", oC = "⫲", iC = "∋", sC = "⋼", aC = "⋺", cC = "∋", lC = "Њ", uC = "њ", pC = "↚", dC = "⇍", fC = "‥", mC = "≦̸", hC = "≰", gC = "↚", yC = "⇍", vC = "↮", bC = "⇎", xC = "≰", wC = "≦̸", EC = "⩽̸", TC = "⩽̸", SC = "≮", NC = "⋘̸", OC = "≴", AC = "≪⃒", _C = "≮", LC = "⋪", DC = "⋬", CC = "≪̸", RC = "∤", PC = "⁠", IC = " ", kC = "𝕟", FC = "ℕ", qC = "⫬", MC = "¬", jC = "≢", UC = "≭", BC = "∦", $C = "∉", VC = "≠", zC = "≂̸", HC = "∄", XC = "≯", GC = "≱", WC = "≧̸", YC = "≫̸", KC = "≹", JC = "⩾̸", QC = "≵", ZC = "≎̸", e1 = "≏̸", t1 = "∉", n1 = "⋵̸", r1 = "⋹̸", o1 = "∉", i1 = "⋷", s1 = "⋶", a1 = "⧏̸", c1 = "⋪", l1 = "⋬", u1 = "≮", p1 = "≰", d1 = "≸", f1 = "≪̸", m1 = "⩽̸", h1 = "≴", g1 = "⪢̸", y1 = "⪡̸", v1 = "∌", b1 = "∌", x1 = "⋾", w1 = "⋽", E1 = "⊀", T1 = "⪯̸", S1 = "⋠", N1 = "∌", O1 = "⧐̸", A1 = "⋫", _1 = "⋭", L1 = "⊏̸", D1 = "⋢", C1 = "⊐̸", R1 = "⋣", P1 = "⊂⃒", I1 = "⊈", k1 = "⊁", F1 = "⪰̸", q1 = "⋡", M1 = "≿̸", j1 = "⊃⃒", U1 = "⊉", B1 = "≁", $1 = "≄", V1 = "≇", z1 = "≉", H1 = "∤", X1 = "∦", G1 = "∦", W1 = "⫽⃥", Y1 = "∂̸", K1 = "⨔", J1 = "⊀", Q1 = "⋠", Z1 = "⊀", eR = "⪯̸", tR = "⪯̸", nR = "⤳̸", rR = "↛", oR = "⇏", iR = "↝̸", sR = "↛", aR = "⇏", cR = "⋫", lR = "⋭", uR = "⊁", pR = "⋡", dR = "⪰̸", fR = "𝒩", mR = "𝓃", hR = "∤", gR = "∦", yR = "≁", vR = "≄", bR = "≄", xR = "∤", wR = "∦", ER = "⋢", TR = "⋣", SR = "⊄", NR = "⫅̸", OR = "⊈", AR = "⊂⃒", _R = "⊈", LR = "⫅̸", DR = "⊁", CR = "⪰̸", RR = "⊅", PR = "⫆̸", IR = "⊉", kR = "⊃⃒", FR = "⊉", qR = "⫆̸", MR = "≹", jR = "Ñ", UR = "ñ", BR = "≸", $R = "⋪", VR = "⋬", zR = "⋫", HR = "⋭", XR = "Ν", GR = "ν", WR = "#", YR = "№", KR = " ", JR = "≍⃒", QR = "⊬", ZR = "⊭", eP = "⊮", tP = "⊯", nP = "≥⃒", rP = ">⃒", oP = "⤄", iP = "⧞", sP = "⤂", aP = "≤⃒", cP = "<⃒", lP = "⊴⃒", uP = "⤃", pP = "⊵⃒", dP = "∼⃒", fP = "⤣", mP = "↖", hP = "⇖", gP = "↖", yP = "⤧", vP = "Ó", bP = "ó", xP = "⊛", wP = "Ô", EP = "ô", TP = "⊚", SP = "О", NP = "о", OP = "⊝", AP = "Ő", _P = "ő", LP = "⨸", DP = "⊙", CP = "⦼", RP = "Œ", PP = "œ", IP = "⦿", kP = "𝔒", FP = "𝔬", qP = "˛", MP = "Ò", jP = "ò", UP = "⧁", BP = "⦵", $P = "Ω", VP = "∮", zP = "↺", HP = "⦾", XP = "⦻", GP = "‾", WP = "⧀", YP = "Ō", KP = "ō", JP = "Ω", QP = "ω", ZP = "Ο", eI = "ο", tI = "⦶", nI = "⊖", rI = "𝕆", oI = "𝕠", iI = "⦷", sI = "“", aI = "‘", cI = "⦹", lI = "⊕", uI = "↻", pI = "⩔", dI = "∨", fI = "⩝", mI = "ℴ", hI = "ℴ", gI = "ª", yI = "º", vI = "⊶", bI = "⩖", xI = "⩗", wI = "⩛", EI = "Ⓢ", TI = "𝒪", SI = "ℴ", NI = "Ø", OI = "ø", AI = "⊘", _I = "Õ", LI = "õ", DI = "⨶", CI = "⨷", RI = "⊗", PI = "Ö", II = "ö", kI = "⌽", FI = "‾", qI = "⏞", MI = "⎴", jI = "⏜", UI = "¶", BI = "∥", $I = "∥", VI = "⫳", zI = "⫽", HI = "∂", XI = "∂", GI = "П", WI = "п", YI = "%", KI = ".", JI = "‰", QI = "⊥", ZI = "‱", ek = "𝔓", tk = "𝔭", nk = "Φ", rk = "φ", ok = "ϕ", ik = "ℳ", sk = "☎", ak = "Π", ck = "π", lk = "⋔", uk = "ϖ", pk = "ℏ", dk = "ℎ", fk = "ℏ", mk = "⨣", hk = "⊞", gk = "⨢", yk = "+", vk = "∔", bk = "⨥", xk = "⩲", wk = "±", Ek = "±", Tk = "⨦", Sk = "⨧", Nk = "±", Ok = "ℌ", Ak = "⨕", _k = "𝕡", Lk = "ℙ", Dk = "£", Ck = "⪷", Rk = "⪻", Pk = "≺", Ik = "≼", kk = "⪷", Fk = "≺", qk = "≼", Mk = "≺", jk = "⪯", Uk = "≼", Bk = "≾", $k = "⪯", Vk = "⪹", zk = "⪵", Hk = "⋨", Xk = "⪯", Gk = "⪳", Wk = "≾", Yk = "′", Kk = "″", Jk = "ℙ", Qk = "⪹", Zk = "⪵", eF = "⋨", tF = "∏", nF = "∏", rF = "⌮", oF = "⌒", iF = "⌓", sF = "∝", aF = "∝", cF = "∷", lF = "∝", uF = "≾", pF = "⊰", dF = "𝒫", fF = "𝓅", mF = "Ψ", hF = "ψ", gF = " ", yF = "𝔔", vF = "𝔮", bF = "⨌", xF = "𝕢", wF = "ℚ", EF = "⁗", TF = "𝒬", SF = "𝓆", NF = "ℍ", OF = "⨖", AF = "?", _F = "≟", LF = '"', DF = '"', CF = "⇛", RF = "∽̱", PF = "Ŕ", IF = "ŕ", kF = "√", FF = "⦳", qF = "⟩", MF = "⟫", jF = "⦒", UF = "⦥", BF = "⟩", $F = "»", VF = "⥵", zF = "⇥", HF = "⤠", XF = "⤳", GF = "→", WF = "↠", YF = "⇒", KF = "⤞", JF = "↪", QF = "↬", ZF = "⥅", eq = "⥴", tq = "⤖", nq = "↣", rq = "↝", oq = "⤚", iq = "⤜", sq = "∶", aq = "ℚ", cq = "⤍", lq = "⤏", uq = "⤐", pq = "❳", dq = "}", fq = "]", mq = "⦌", hq = "⦎", gq = "⦐", yq = "Ř", vq = "ř", bq = "Ŗ", xq = "ŗ", wq = "⌉", Eq = "}", Tq = "Р", Sq = "р", Nq = "⤷", Oq = "⥩", Aq = "”", _q = "”", Lq = "↳", Dq = "ℜ", Cq = "ℛ", Rq = "ℜ", Pq = "ℝ", Iq = "ℜ", kq = "▭", Fq = "®", qq = "®", Mq = "∋", jq = "⇋", Uq = "⥯", Bq = "⥽", $q = "⌋", Vq = "𝔯", zq = "ℜ", Hq = "⥤", Xq = "⇁", Gq = "⇀", Wq = "⥬", Yq = "Ρ", Kq = "ρ", Jq = "ϱ", Qq = "⟩", Zq = "⇥", eM = "→", tM = "→", nM = "⇒", rM = "⇄", oM = "↣", iM = "⌉", sM = "⟧", aM = "⥝", cM = "⥕", lM = "⇂", uM = "⌋", pM = "⇁", dM = "⇀", fM = "⇄", mM = "⇌", hM = "⇉", gM = "↝", yM = "↦", vM = "⊢", bM = "⥛", xM = "⋌", wM = "⧐", EM = "⊳", TM = "⊵", SM = "⥏", NM = "⥜", OM = "⥔", AM = "↾", _M = "⥓", LM = "⇀", DM = "˚", CM = "≓", RM = "⇄", PM = "⇌", IM = "‏", kM = "⎱", FM = "⎱", qM = "⫮", MM = "⟭", jM = "⇾", UM = "⟧", BM = "⦆", $M = "𝕣", VM = "ℝ", zM = "⨮", HM = "⨵", XM = "⥰", GM = ")", WM = "⦔", YM = "⨒", KM = "⇉", JM = "⇛", QM = "›", ZM = "𝓇", ej = "ℛ", tj = "↱", nj = "↱", rj = "]", oj = "’", ij = "’", sj = "⋌", aj = "⋊", cj = "▹", lj = "⊵", uj = "▸", pj = "⧎", dj = "⧴", fj = "⥨", mj = "℞", hj = "Ś", gj = "ś", yj = "‚", vj = "⪸", bj = "Š", xj = "š", wj = "⪼", Ej = "≻", Tj = "≽", Sj = "⪰", Nj = "⪴", Oj = "Ş", Aj = "ş", _j = "Ŝ", Lj = "ŝ", Dj = "⪺", Cj = "⪶", Rj = "⋩", Pj = "⨓", Ij = "≿", kj = "С", Fj = "с", qj = "⊡", Mj = "⋅", jj = "⩦", Uj = "⤥", Bj = "↘", $j = "⇘", Vj = "↘", zj = "§", Hj = ";", Xj = "⤩", Gj = "∖", Wj = "∖", Yj = "✶", Kj = "𝔖", Jj = "𝔰", Qj = "⌢", Zj = "♯", e2 = "Щ", t2 = "щ", n2 = "Ш", r2 = "ш", o2 = "↓", i2 = "←", s2 = "∣", a2 = "∥", c2 = "→", l2 = "↑", u2 = "­", p2 = "Σ", d2 = "σ", f2 = "ς", m2 = "ς", h2 = "∼", g2 = "⩪", y2 = "≃", v2 = "≃", b2 = "⪞", x2 = "⪠", w2 = "⪝", E2 = "⪟", T2 = "≆", S2 = "⨤", N2 = "⥲", O2 = "←", A2 = "∘", _2 = "∖", L2 = "⨳", D2 = "⧤", C2 = "∣", R2 = "⌣", P2 = "⪪", I2 = "⪬", k2 = "⪬︀", F2 = "Ь", q2 = "ь", M2 = "⌿", j2 = "⧄", U2 = "/", B2 = "𝕊", $2 = "𝕤", V2 = "♠", z2 = "♠", H2 = "∥", X2 = "⊓", G2 = "⊓︀", W2 = "⊔", Y2 = "⊔︀", K2 = "√", J2 = "⊏", Q2 = "⊑", Z2 = "⊏", eU = "⊑", tU = "⊐", nU = "⊒", rU = "⊐", oU = "⊒", iU = "□", sU = "□", aU = "⊓", cU = "⊏", lU = "⊑", uU = "⊐", pU = "⊒", dU = "⊔", fU = "▪", mU = "□", hU = "▪", gU = "→", yU = "𝒮", vU = "𝓈", bU = "∖", xU = "⌣", wU = "⋆", EU = "⋆", TU = "☆", SU = "★", NU = "ϵ", OU = "ϕ", AU = "¯", _U = "⊂", LU = "⋐", DU = "⪽", CU = "⫅", RU = "⊆", PU = "⫃", IU = "⫁", kU = "⫋", FU = "⊊", qU = "⪿", MU = "⥹", jU = "⊂", UU = "⋐", BU = "⊆", $U = "⫅", VU = "⊆", zU = "⊊", HU = "⫋", XU = "⫇", GU = "⫕", WU = "⫓", YU = "⪸", KU = "≻", JU = "≽", QU = "≻", ZU = "⪰", eB = "≽", tB = "≿", nB = "⪰", rB = "⪺", oB = "⪶", iB = "⋩", sB = "≿", aB = "∋", cB = "∑", lB = "∑", uB = "♪", pB = "¹", dB = "²", fB = "³", mB = "⊃", hB = "⋑", gB = "⪾", yB = "⫘", vB = "⫆", bB = "⊇", xB = "⫄", wB = "⊃", EB = "⊇", TB = "⟉", SB = "⫗", NB = "⥻", OB = "⫂", AB = "⫌", _B = "⊋", LB = "⫀", DB = "⊃", CB = "⋑", RB = "⊇", PB = "⫆", IB = "⊋", kB = "⫌", FB = "⫈", qB = "⫔", MB = "⫖", jB = "⤦", UB = "↙", BB = "⇙", $B = "↙", VB = "⤪", zB = "ß", HB = "	", XB = "⌖", GB = "Τ", WB = "τ", YB = "⎴", KB = "Ť", JB = "ť", QB = "Ţ", ZB = "ţ", e$ = "Т", t$ = "т", n$ = "⃛", r$ = "⌕", o$ = "𝔗", i$ = "𝔱", s$ = "∴", a$ = "∴", c$ = "∴", l$ = "Θ", u$ = "θ", p$ = "ϑ", d$ = "ϑ", f$ = "≈", m$ = "∼", h$ = "  ", g$ = " ", y$ = " ", v$ = "≈", b$ = "∼", x$ = "Þ", w$ = "þ", E$ = "˜", T$ = "∼", S$ = "≃", N$ = "≅", O$ = "≈", A$ = "⨱", _$ = "⊠", L$ = "×", D$ = "⨰", C$ = "∭", R$ = "⤨", P$ = "⌶", I$ = "⫱", k$ = "⊤", F$ = "𝕋", q$ = "𝕥", M$ = "⫚", j$ = "⤩", U$ = "‴", B$ = "™", $$ = "™", V$ = "▵", z$ = "▿", H$ = "◃", X$ = "⊴", G$ = "≜", W$ = "▹", Y$ = "⊵", K$ = "◬", J$ = "≜", Q$ = "⨺", Z$ = "⃛", e3 = "⨹", t3 = "⧍", n3 = "⨻", r3 = "⏢", o3 = "𝒯", i3 = "𝓉", s3 = "Ц", a3 = "ц", c3 = "Ћ", l3 = "ћ", u3 = "Ŧ", p3 = "ŧ", d3 = "≬", f3 = "↞", m3 = "↠", h3 = "Ú", g3 = "ú", y3 = "↑", v3 = "↟", b3 = "⇑", x3 = "⥉", w3 = "Ў", E3 = "ў", T3 = "Ŭ", S3 = "ŭ", N3 = "Û", O3 = "û", A3 = "У", _3 = "у", L3 = "⇅", D3 = "Ű", C3 = "ű", R3 = "⥮", P3 = "⥾", I3 = "𝔘", k3 = "𝔲", F3 = "Ù", q3 = "ù", M3 = "⥣", j3 = "↿", U3 = "↾", B3 = "▀", $3 = "⌜", V3 = "⌜", z3 = "⌏", H3 = "◸", X3 = "Ū", G3 = "ū", W3 = "¨", Y3 = "_", K3 = "⏟", J3 = "⎵", Q3 = "⏝", Z3 = "⋃", eV = "⊎", tV = "Ų", nV = "ų", rV = "𝕌", oV = "𝕦", iV = "⤒", sV = "↑", aV = "↑", cV = "⇑", lV = "⇅", uV = "↕", pV = "↕", dV = "⇕", fV = "⥮", mV = "↿", hV = "↾", gV = "⊎", yV = "↖", vV = "↗", bV = "υ", xV = "ϒ", wV = "ϒ", EV = "Υ", TV = "υ", SV = "↥", NV = "⊥", OV = "⇈", AV = "⌝", _V = "⌝", LV = "⌎", DV = "Ů", CV = "ů", RV = "◹", PV = "𝒰", IV = "𝓊", kV = "⋰", FV = "Ũ", qV = "ũ", MV = "▵", jV = "▴", UV = "⇈", BV = "Ü", $V = "ü", VV = "⦧", zV = "⦜", HV = "ϵ", XV = "ϰ", GV = "∅", WV = "ϕ", YV = "ϖ", KV = "∝", JV = "↕", QV = "⇕", ZV = "ϱ", e8 = "ς", t8 = "⊊︀", n8 = "⫋︀", r8 = "⊋︀", o8 = "⫌︀", i8 = "ϑ", s8 = "⊲", a8 = "⊳", c8 = "⫨", l8 = "⫫", u8 = "⫩", p8 = "В", d8 = "в", f8 = "⊢", m8 = "⊨", h8 = "⊩", g8 = "⊫", y8 = "⫦", v8 = "⊻", b8 = "∨", x8 = "⋁", w8 = "≚", E8 = "⋮", T8 = "|", S8 = "‖", N8 = "|", O8 = "‖", A8 = "∣", _8 = "|", L8 = "❘", D8 = "≀", C8 = " ", R8 = "𝔙", P8 = "𝔳", I8 = "⊲", k8 = "⊂⃒", F8 = "⊃⃒", q8 = "𝕍", M8 = "𝕧", j8 = "∝", U8 = "⊳", B8 = "𝒱", $8 = "𝓋", V8 = "⫋︀", z8 = "⊊︀", H8 = "⫌︀", X8 = "⊋︀", G8 = "⊪", W8 = "⦚", Y8 = "Ŵ", K8 = "ŵ", J8 = "⩟", Q8 = "∧", Z8 = "⋀", ez = "≙", tz = "℘", nz = "𝔚", rz = "𝔴", oz = "𝕎", iz = "𝕨", sz = "℘", az = "≀", cz = "≀", lz = "𝒲", uz = "𝓌", pz = "⋂", dz = "◯", fz = "⋃", mz = "▽", hz = "𝔛", gz = "𝔵", yz = "⟷", vz = "⟺", bz = "Ξ", xz = "ξ", wz = "⟵", Ez = "⟸", Tz = "⟼", Sz = "⋻", Nz = "⨀", Oz = "𝕏", Az = "𝕩", _z = "⨁", Lz = "⨂", Dz = "⟶", Cz = "⟹", Rz = "𝒳", Pz = "𝓍", Iz = "⨆", kz = "⨄", Fz = "△", qz = "⋁", Mz = "⋀", jz = "Ý", Uz = "ý", Bz = "Я", $z = "я", Vz = "Ŷ", zz = "ŷ", Hz = "Ы", Xz = "ы", Gz = "¥", Wz = "𝔜", Yz = "𝔶", Kz = "Ї", Jz = "ї", Qz = "𝕐", Zz = "𝕪", e4 = "𝒴", t4 = "𝓎", n4 = "Ю", r4 = "ю", o4 = "ÿ", i4 = "Ÿ", s4 = "Ź", a4 = "ź", c4 = "Ž", l4 = "ž", u4 = "З", p4 = "з", d4 = "Ż", f4 = "ż", m4 = "ℨ", h4 = "​", g4 = "Ζ", y4 = "ζ", v4 = "𝔷", b4 = "ℨ", x4 = "Ж", w4 = "ж", E4 = "⇝", T4 = "𝕫", S4 = "ℤ", N4 = "𝒵", O4 = "𝓏", A4 = "‍", _4 = "‌", Ic = {
  Aacute: pp,
  aacute: dp,
  Abreve: fp,
  abreve: mp,
  ac: hp,
  acd: gp,
  acE: yp,
  Acirc: vp,
  acirc: bp,
  acute: xp,
  Acy: wp,
  acy: Ep,
  AElig: Tp,
  aelig: Sp,
  af: Np,
  Afr: Op,
  afr: Ap,
  Agrave: _p,
  agrave: Lp,
  alefsym: Dp,
  aleph: Cp,
  Alpha: Rp,
  alpha: Pp,
  Amacr: Ip,
  amacr: kp,
  amalg: Fp,
  amp: qp,
  AMP: Mp,
  andand: jp,
  And: Up,
  and: Bp,
  andd: $p,
  andslope: Vp,
  andv: zp,
  ang: Hp,
  ange: Xp,
  angle: Gp,
  angmsdaa: Wp,
  angmsdab: Yp,
  angmsdac: Kp,
  angmsdad: Jp,
  angmsdae: Qp,
  angmsdaf: Zp,
  angmsdag: ed,
  angmsdah: td,
  angmsd: nd,
  angrt: rd,
  angrtvb: od,
  angrtvbd: id,
  angsph: sd,
  angst: ad,
  angzarr: cd,
  Aogon: ld,
  aogon: ud,
  Aopf: pd,
  aopf: dd,
  apacir: fd,
  ap: md,
  apE: hd,
  ape: gd,
  apid: yd,
  apos: vd,
  ApplyFunction: bd,
  approx: xd,
  approxeq: wd,
  Aring: Ed,
  aring: Td,
  Ascr: Sd,
  ascr: Nd,
  Assign: Od,
  ast: Ad,
  asymp: _d,
  asympeq: Ld,
  Atilde: Dd,
  atilde: Cd,
  Auml: Rd,
  auml: Pd,
  awconint: Id,
  awint: kd,
  backcong: Fd,
  backepsilon: qd,
  backprime: Md,
  backsim: jd,
  backsimeq: Ud,
  Backslash: Bd,
  Barv: $d,
  barvee: Vd,
  barwed: zd,
  Barwed: Hd,
  barwedge: Xd,
  bbrk: Gd,
  bbrktbrk: Wd,
  bcong: Yd,
  Bcy: Kd,
  bcy: Jd,
  bdquo: Qd,
  becaus: Zd,
  because: ef,
  Because: tf,
  bemptyv: nf,
  bepsi: rf,
  bernou: of,
  Bernoullis: sf,
  Beta: af,
  beta: cf,
  beth: lf,
  between: uf,
  Bfr: pf,
  bfr: df,
  bigcap: ff,
  bigcirc: mf,
  bigcup: hf,
  bigodot: gf,
  bigoplus: yf,
  bigotimes: vf,
  bigsqcup: bf,
  bigstar: xf,
  bigtriangledown: wf,
  bigtriangleup: Ef,
  biguplus: Tf,
  bigvee: Sf,
  bigwedge: Nf,
  bkarow: Of,
  blacklozenge: Af,
  blacksquare: _f,
  blacktriangle: Lf,
  blacktriangledown: Df,
  blacktriangleleft: Cf,
  blacktriangleright: Rf,
  blank: Pf,
  blk12: If,
  blk14: kf,
  blk34: Ff,
  block: qf,
  bne: Mf,
  bnequiv: jf,
  bNot: Uf,
  bnot: Bf,
  Bopf: $f,
  bopf: Vf,
  bot: zf,
  bottom: Hf,
  bowtie: Xf,
  boxbox: Gf,
  boxdl: Wf,
  boxdL: Yf,
  boxDl: Kf,
  boxDL: Jf,
  boxdr: Qf,
  boxdR: Zf,
  boxDr: em,
  boxDR: tm,
  boxh: nm,
  boxH: rm,
  boxhd: om,
  boxHd: im,
  boxhD: sm,
  boxHD: am,
  boxhu: cm,
  boxHu: lm,
  boxhU: um,
  boxHU: pm,
  boxminus: dm,
  boxplus: fm,
  boxtimes: mm,
  boxul: hm,
  boxuL: gm,
  boxUl: ym,
  boxUL: vm,
  boxur: bm,
  boxuR: xm,
  boxUr: wm,
  boxUR: Em,
  boxv: Tm,
  boxV: Sm,
  boxvh: Nm,
  boxvH: Om,
  boxVh: Am,
  boxVH: _m,
  boxvl: Lm,
  boxvL: Dm,
  boxVl: Cm,
  boxVL: Rm,
  boxvr: Pm,
  boxvR: Im,
  boxVr: km,
  boxVR: Fm,
  bprime: qm,
  breve: Mm,
  Breve: jm,
  brvbar: Um,
  bscr: Bm,
  Bscr: $m,
  bsemi: Vm,
  bsim: zm,
  bsime: Hm,
  bsolb: Xm,
  bsol: Gm,
  bsolhsub: Wm,
  bull: Ym,
  bullet: Km,
  bump: Jm,
  bumpE: Qm,
  bumpe: Zm,
  Bumpeq: eh,
  bumpeq: th,
  Cacute: nh,
  cacute: rh,
  capand: oh,
  capbrcup: ih,
  capcap: sh,
  cap: ah,
  Cap: ch,
  capcup: lh,
  capdot: uh,
  CapitalDifferentialD: ph,
  caps: dh,
  caret: fh,
  caron: mh,
  Cayleys: hh,
  ccaps: gh,
  Ccaron: yh,
  ccaron: vh,
  Ccedil: bh,
  ccedil: xh,
  Ccirc: wh,
  ccirc: Eh,
  Cconint: Th,
  ccups: Sh,
  ccupssm: Nh,
  Cdot: Oh,
  cdot: Ah,
  cedil: _h,
  Cedilla: Lh,
  cemptyv: Dh,
  cent: Ch,
  centerdot: Rh,
  CenterDot: Ph,
  cfr: Ih,
  Cfr: kh,
  CHcy: Fh,
  chcy: qh,
  check: Mh,
  checkmark: jh,
  Chi: Uh,
  chi: Bh,
  circ: $h,
  circeq: Vh,
  circlearrowleft: zh,
  circlearrowright: Hh,
  circledast: Xh,
  circledcirc: Gh,
  circleddash: Wh,
  CircleDot: Yh,
  circledR: Kh,
  circledS: Jh,
  CircleMinus: Qh,
  CirclePlus: Zh,
  CircleTimes: eg,
  cir: tg,
  cirE: ng,
  cire: rg,
  cirfnint: og,
  cirmid: ig,
  cirscir: sg,
  ClockwiseContourIntegral: ag,
  CloseCurlyDoubleQuote: cg,
  CloseCurlyQuote: lg,
  clubs: ug,
  clubsuit: pg,
  colon: dg,
  Colon: fg,
  Colone: mg,
  colone: hg,
  coloneq: gg,
  comma: yg,
  commat: vg,
  comp: bg,
  compfn: xg,
  complement: wg,
  complexes: Eg,
  cong: Tg,
  congdot: Sg,
  Congruent: Ng,
  conint: Og,
  Conint: Ag,
  ContourIntegral: _g,
  copf: Lg,
  Copf: Dg,
  coprod: Cg,
  Coproduct: Rg,
  copy: Pg,
  COPY: Ig,
  copysr: kg,
  CounterClockwiseContourIntegral: Fg,
  crarr: qg,
  cross: Mg,
  Cross: jg,
  Cscr: Ug,
  cscr: Bg,
  csub: $g,
  csube: Vg,
  csup: zg,
  csupe: Hg,
  ctdot: Xg,
  cudarrl: Gg,
  cudarrr: Wg,
  cuepr: Yg,
  cuesc: Kg,
  cularr: Jg,
  cularrp: Qg,
  cupbrcap: Zg,
  cupcap: ey,
  CupCap: ty,
  cup: ny,
  Cup: ry,
  cupcup: oy,
  cupdot: iy,
  cupor: sy,
  cups: ay,
  curarr: cy,
  curarrm: ly,
  curlyeqprec: uy,
  curlyeqsucc: py,
  curlyvee: dy,
  curlywedge: fy,
  curren: my,
  curvearrowleft: hy,
  curvearrowright: gy,
  cuvee: yy,
  cuwed: vy,
  cwconint: by,
  cwint: xy,
  cylcty: wy,
  dagger: Ey,
  Dagger: Ty,
  daleth: Sy,
  darr: Ny,
  Darr: Oy,
  dArr: Ay,
  dash: _y,
  Dashv: Ly,
  dashv: Dy,
  dbkarow: Cy,
  dblac: Ry,
  Dcaron: Py,
  dcaron: Iy,
  Dcy: ky,
  dcy: Fy,
  ddagger: qy,
  ddarr: My,
  DD: jy,
  dd: Uy,
  DDotrahd: By,
  ddotseq: $y,
  deg: Vy,
  Del: zy,
  Delta: Hy,
  delta: Xy,
  demptyv: Gy,
  dfisht: Wy,
  Dfr: Yy,
  dfr: Ky,
  dHar: Jy,
  dharl: Qy,
  dharr: Zy,
  DiacriticalAcute: ev,
  DiacriticalDot: tv,
  DiacriticalDoubleAcute: nv,
  DiacriticalGrave: rv,
  DiacriticalTilde: ov,
  diam: iv,
  diamond: sv,
  Diamond: av,
  diamondsuit: cv,
  diams: lv,
  die: uv,
  DifferentialD: pv,
  digamma: dv,
  disin: fv,
  div: mv,
  divide: hv,
  divideontimes: gv,
  divonx: yv,
  DJcy: vv,
  djcy: bv,
  dlcorn: xv,
  dlcrop: wv,
  dollar: Ev,
  Dopf: Tv,
  dopf: Sv,
  Dot: Nv,
  dot: Ov,
  DotDot: Av,
  doteq: _v,
  doteqdot: Lv,
  DotEqual: Dv,
  dotminus: Cv,
  dotplus: Rv,
  dotsquare: Pv,
  doublebarwedge: Iv,
  DoubleContourIntegral: kv,
  DoubleDot: Fv,
  DoubleDownArrow: qv,
  DoubleLeftArrow: Mv,
  DoubleLeftRightArrow: jv,
  DoubleLeftTee: Uv,
  DoubleLongLeftArrow: Bv,
  DoubleLongLeftRightArrow: $v,
  DoubleLongRightArrow: Vv,
  DoubleRightArrow: zv,
  DoubleRightTee: Hv,
  DoubleUpArrow: Xv,
  DoubleUpDownArrow: Gv,
  DoubleVerticalBar: Wv,
  DownArrowBar: Yv,
  downarrow: Kv,
  DownArrow: Jv,
  Downarrow: Qv,
  DownArrowUpArrow: Zv,
  DownBreve: eb,
  downdownarrows: tb,
  downharpoonleft: nb,
  downharpoonright: rb,
  DownLeftRightVector: ob,
  DownLeftTeeVector: ib,
  DownLeftVectorBar: sb,
  DownLeftVector: ab,
  DownRightTeeVector: cb,
  DownRightVectorBar: lb,
  DownRightVector: ub,
  DownTeeArrow: pb,
  DownTee: db,
  drbkarow: fb,
  drcorn: mb,
  drcrop: hb,
  Dscr: gb,
  dscr: yb,
  DScy: vb,
  dscy: bb,
  dsol: xb,
  Dstrok: wb,
  dstrok: Eb,
  dtdot: Tb,
  dtri: Sb,
  dtrif: Nb,
  duarr: Ob,
  duhar: Ab,
  dwangle: _b,
  DZcy: Lb,
  dzcy: Db,
  dzigrarr: Cb,
  Eacute: Rb,
  eacute: Pb,
  easter: Ib,
  Ecaron: kb,
  ecaron: Fb,
  Ecirc: qb,
  ecirc: Mb,
  ecir: jb,
  ecolon: Ub,
  Ecy: Bb,
  ecy: $b,
  eDDot: Vb,
  Edot: zb,
  edot: Hb,
  eDot: Xb,
  ee: Gb,
  efDot: Wb,
  Efr: Yb,
  efr: Kb,
  eg: Jb,
  Egrave: Qb,
  egrave: Zb,
  egs: ex,
  egsdot: tx,
  el: nx,
  Element: rx,
  elinters: ox,
  ell: ix,
  els: sx,
  elsdot: ax,
  Emacr: cx,
  emacr: lx,
  empty: ux,
  emptyset: px,
  EmptySmallSquare: dx,
  emptyv: fx,
  EmptyVerySmallSquare: mx,
  emsp13: hx,
  emsp14: gx,
  emsp: yx,
  ENG: vx,
  eng: bx,
  ensp: xx,
  Eogon: wx,
  eogon: Ex,
  Eopf: Tx,
  eopf: Sx,
  epar: Nx,
  eparsl: Ox,
  eplus: Ax,
  epsi: _x,
  Epsilon: Lx,
  epsilon: Dx,
  epsiv: Cx,
  eqcirc: Rx,
  eqcolon: Px,
  eqsim: Ix,
  eqslantgtr: kx,
  eqslantless: Fx,
  Equal: qx,
  equals: Mx,
  EqualTilde: jx,
  equest: Ux,
  Equilibrium: Bx,
  equiv: $x,
  equivDD: Vx,
  eqvparsl: zx,
  erarr: Hx,
  erDot: Xx,
  escr: Gx,
  Escr: Wx,
  esdot: Yx,
  Esim: Kx,
  esim: Jx,
  Eta: Qx,
  eta: Zx,
  ETH: ew,
  eth: tw,
  Euml: nw,
  euml: rw,
  euro: ow,
  excl: iw,
  exist: sw,
  Exists: aw,
  expectation: cw,
  exponentiale: lw,
  ExponentialE: uw,
  fallingdotseq: pw,
  Fcy: dw,
  fcy: fw,
  female: mw,
  ffilig: hw,
  fflig: gw,
  ffllig: yw,
  Ffr: vw,
  ffr: bw,
  filig: xw,
  FilledSmallSquare: ww,
  FilledVerySmallSquare: Ew,
  fjlig: Tw,
  flat: Sw,
  fllig: Nw,
  fltns: Ow,
  fnof: Aw,
  Fopf: _w,
  fopf: Lw,
  forall: Dw,
  ForAll: Cw,
  fork: Rw,
  forkv: Pw,
  Fouriertrf: Iw,
  fpartint: kw,
  frac12: Fw,
  frac13: qw,
  frac14: Mw,
  frac15: jw,
  frac16: Uw,
  frac18: Bw,
  frac23: $w,
  frac25: Vw,
  frac34: zw,
  frac35: Hw,
  frac38: Xw,
  frac45: Gw,
  frac56: Ww,
  frac58: Yw,
  frac78: Kw,
  frasl: Jw,
  frown: Qw,
  fscr: Zw,
  Fscr: eE,
  gacute: tE,
  Gamma: nE,
  gamma: rE,
  Gammad: oE,
  gammad: iE,
  gap: sE,
  Gbreve: aE,
  gbreve: cE,
  Gcedil: lE,
  Gcirc: uE,
  gcirc: pE,
  Gcy: dE,
  gcy: fE,
  Gdot: mE,
  gdot: hE,
  ge: gE,
  gE: yE,
  gEl: vE,
  gel: bE,
  geq: xE,
  geqq: wE,
  geqslant: EE,
  gescc: TE,
  ges: SE,
  gesdot: NE,
  gesdoto: OE,
  gesdotol: AE,
  gesl: _E,
  gesles: LE,
  Gfr: DE,
  gfr: CE,
  gg: RE,
  Gg: PE,
  ggg: IE,
  gimel: kE,
  GJcy: FE,
  gjcy: qE,
  gla: ME,
  gl: jE,
  glE: UE,
  glj: BE,
  gnap: $E,
  gnapprox: VE,
  gne: zE,
  gnE: HE,
  gneq: XE,
  gneqq: GE,
  gnsim: WE,
  Gopf: YE,
  gopf: KE,
  grave: JE,
  GreaterEqual: QE,
  GreaterEqualLess: ZE,
  GreaterFullEqual: eT,
  GreaterGreater: tT,
  GreaterLess: nT,
  GreaterSlantEqual: rT,
  GreaterTilde: oT,
  Gscr: iT,
  gscr: sT,
  gsim: aT,
  gsime: cT,
  gsiml: lT,
  gtcc: uT,
  gtcir: pT,
  gt: dT,
  GT: fT,
  Gt: mT,
  gtdot: hT,
  gtlPar: gT,
  gtquest: yT,
  gtrapprox: vT,
  gtrarr: bT,
  gtrdot: xT,
  gtreqless: wT,
  gtreqqless: ET,
  gtrless: TT,
  gtrsim: ST,
  gvertneqq: NT,
  gvnE: OT,
  Hacek: AT,
  hairsp: _T,
  half: LT,
  hamilt: DT,
  HARDcy: CT,
  hardcy: RT,
  harrcir: PT,
  harr: IT,
  hArr: kT,
  harrw: FT,
  Hat: qT,
  hbar: MT,
  Hcirc: jT,
  hcirc: UT,
  hearts: BT,
  heartsuit: $T,
  hellip: VT,
  hercon: zT,
  hfr: HT,
  Hfr: XT,
  HilbertSpace: GT,
  hksearow: WT,
  hkswarow: YT,
  hoarr: KT,
  homtht: JT,
  hookleftarrow: QT,
  hookrightarrow: ZT,
  hopf: eS,
  Hopf: tS,
  horbar: nS,
  HorizontalLine: rS,
  hscr: oS,
  Hscr: iS,
  hslash: sS,
  Hstrok: aS,
  hstrok: cS,
  HumpDownHump: lS,
  HumpEqual: uS,
  hybull: pS,
  hyphen: dS,
  Iacute: fS,
  iacute: mS,
  ic: hS,
  Icirc: gS,
  icirc: yS,
  Icy: vS,
  icy: bS,
  Idot: xS,
  IEcy: wS,
  iecy: ES,
  iexcl: TS,
  iff: SS,
  ifr: NS,
  Ifr: OS,
  Igrave: AS,
  igrave: _S,
  ii: LS,
  iiiint: DS,
  iiint: CS,
  iinfin: RS,
  iiota: PS,
  IJlig: IS,
  ijlig: kS,
  Imacr: FS,
  imacr: qS,
  image: MS,
  ImaginaryI: jS,
  imagline: US,
  imagpart: BS,
  imath: $S,
  Im: VS,
  imof: zS,
  imped: HS,
  Implies: XS,
  incare: GS,
  in: "∈",
  infin: WS,
  infintie: YS,
  inodot: KS,
  intcal: JS,
  int: QS,
  Int: ZS,
  integers: e0,
  Integral: t0,
  intercal: n0,
  Intersection: r0,
  intlarhk: o0,
  intprod: i0,
  InvisibleComma: s0,
  InvisibleTimes: a0,
  IOcy: c0,
  iocy: l0,
  Iogon: u0,
  iogon: p0,
  Iopf: d0,
  iopf: f0,
  Iota: m0,
  iota: h0,
  iprod: g0,
  iquest: y0,
  iscr: v0,
  Iscr: b0,
  isin: x0,
  isindot: w0,
  isinE: E0,
  isins: T0,
  isinsv: S0,
  isinv: N0,
  it: O0,
  Itilde: A0,
  itilde: _0,
  Iukcy: L0,
  iukcy: D0,
  Iuml: C0,
  iuml: R0,
  Jcirc: P0,
  jcirc: I0,
  Jcy: k0,
  jcy: F0,
  Jfr: q0,
  jfr: M0,
  jmath: j0,
  Jopf: U0,
  jopf: B0,
  Jscr: $0,
  jscr: V0,
  Jsercy: z0,
  jsercy: H0,
  Jukcy: X0,
  jukcy: G0,
  Kappa: W0,
  kappa: Y0,
  kappav: K0,
  Kcedil: J0,
  kcedil: Q0,
  Kcy: Z0,
  kcy: eN,
  Kfr: tN,
  kfr: nN,
  kgreen: rN,
  KHcy: oN,
  khcy: iN,
  KJcy: sN,
  kjcy: aN,
  Kopf: cN,
  kopf: lN,
  Kscr: uN,
  kscr: pN,
  lAarr: dN,
  Lacute: fN,
  lacute: mN,
  laemptyv: hN,
  lagran: gN,
  Lambda: yN,
  lambda: vN,
  lang: bN,
  Lang: xN,
  langd: wN,
  langle: EN,
  lap: TN,
  Laplacetrf: SN,
  laquo: NN,
  larrb: ON,
  larrbfs: AN,
  larr: _N,
  Larr: LN,
  lArr: DN,
  larrfs: CN,
  larrhk: RN,
  larrlp: PN,
  larrpl: IN,
  larrsim: kN,
  larrtl: FN,
  latail: qN,
  lAtail: MN,
  lat: jN,
  late: UN,
  lates: BN,
  lbarr: $N,
  lBarr: VN,
  lbbrk: zN,
  lbrace: HN,
  lbrack: XN,
  lbrke: GN,
  lbrksld: WN,
  lbrkslu: YN,
  Lcaron: KN,
  lcaron: JN,
  Lcedil: QN,
  lcedil: ZN,
  lceil: eO,
  lcub: tO,
  Lcy: nO,
  lcy: rO,
  ldca: oO,
  ldquo: iO,
  ldquor: sO,
  ldrdhar: aO,
  ldrushar: cO,
  ldsh: lO,
  le: uO,
  lE: pO,
  LeftAngleBracket: dO,
  LeftArrowBar: fO,
  leftarrow: mO,
  LeftArrow: hO,
  Leftarrow: gO,
  LeftArrowRightArrow: yO,
  leftarrowtail: vO,
  LeftCeiling: bO,
  LeftDoubleBracket: xO,
  LeftDownTeeVector: wO,
  LeftDownVectorBar: EO,
  LeftDownVector: TO,
  LeftFloor: SO,
  leftharpoondown: NO,
  leftharpoonup: OO,
  leftleftarrows: AO,
  leftrightarrow: _O,
  LeftRightArrow: LO,
  Leftrightarrow: DO,
  leftrightarrows: CO,
  leftrightharpoons: RO,
  leftrightsquigarrow: PO,
  LeftRightVector: IO,
  LeftTeeArrow: kO,
  LeftTee: FO,
  LeftTeeVector: qO,
  leftthreetimes: MO,
  LeftTriangleBar: jO,
  LeftTriangle: UO,
  LeftTriangleEqual: BO,
  LeftUpDownVector: $O,
  LeftUpTeeVector: VO,
  LeftUpVectorBar: zO,
  LeftUpVector: HO,
  LeftVectorBar: XO,
  LeftVector: GO,
  lEg: WO,
  leg: YO,
  leq: KO,
  leqq: JO,
  leqslant: QO,
  lescc: ZO,
  les: eA,
  lesdot: tA,
  lesdoto: nA,
  lesdotor: rA,
  lesg: oA,
  lesges: iA,
  lessapprox: sA,
  lessdot: aA,
  lesseqgtr: cA,
  lesseqqgtr: lA,
  LessEqualGreater: uA,
  LessFullEqual: pA,
  LessGreater: dA,
  lessgtr: fA,
  LessLess: mA,
  lesssim: hA,
  LessSlantEqual: gA,
  LessTilde: yA,
  lfisht: vA,
  lfloor: bA,
  Lfr: xA,
  lfr: wA,
  lg: EA,
  lgE: TA,
  lHar: SA,
  lhard: NA,
  lharu: OA,
  lharul: AA,
  lhblk: _A,
  LJcy: LA,
  ljcy: DA,
  llarr: CA,
  ll: RA,
  Ll: PA,
  llcorner: IA,
  Lleftarrow: kA,
  llhard: FA,
  lltri: qA,
  Lmidot: MA,
  lmidot: jA,
  lmoustache: UA,
  lmoust: BA,
  lnap: $A,
  lnapprox: VA,
  lne: zA,
  lnE: HA,
  lneq: XA,
  lneqq: GA,
  lnsim: WA,
  loang: YA,
  loarr: KA,
  lobrk: JA,
  longleftarrow: QA,
  LongLeftArrow: ZA,
  Longleftarrow: e_,
  longleftrightarrow: t_,
  LongLeftRightArrow: n_,
  Longleftrightarrow: r_,
  longmapsto: o_,
  longrightarrow: i_,
  LongRightArrow: s_,
  Longrightarrow: a_,
  looparrowleft: c_,
  looparrowright: l_,
  lopar: u_,
  Lopf: p_,
  lopf: d_,
  loplus: f_,
  lotimes: m_,
  lowast: h_,
  lowbar: g_,
  LowerLeftArrow: y_,
  LowerRightArrow: v_,
  loz: b_,
  lozenge: x_,
  lozf: w_,
  lpar: E_,
  lparlt: T_,
  lrarr: S_,
  lrcorner: N_,
  lrhar: O_,
  lrhard: A_,
  lrm: __,
  lrtri: L_,
  lsaquo: D_,
  lscr: C_,
  Lscr: R_,
  lsh: P_,
  Lsh: I_,
  lsim: k_,
  lsime: F_,
  lsimg: q_,
  lsqb: M_,
  lsquo: j_,
  lsquor: U_,
  Lstrok: B_,
  lstrok: $_,
  ltcc: V_,
  ltcir: z_,
  lt: H_,
  LT: X_,
  Lt: G_,
  ltdot: W_,
  lthree: Y_,
  ltimes: K_,
  ltlarr: J_,
  ltquest: Q_,
  ltri: Z_,
  ltrie: eL,
  ltrif: tL,
  ltrPar: nL,
  lurdshar: rL,
  luruhar: oL,
  lvertneqq: iL,
  lvnE: sL,
  macr: aL,
  male: cL,
  malt: lL,
  maltese: uL,
  Map: "⤅",
  map: pL,
  mapsto: dL,
  mapstodown: fL,
  mapstoleft: mL,
  mapstoup: hL,
  marker: gL,
  mcomma: yL,
  Mcy: vL,
  mcy: bL,
  mdash: xL,
  mDDot: wL,
  measuredangle: EL,
  MediumSpace: TL,
  Mellintrf: SL,
  Mfr: NL,
  mfr: OL,
  mho: AL,
  micro: _L,
  midast: LL,
  midcir: DL,
  mid: CL,
  middot: RL,
  minusb: PL,
  minus: IL,
  minusd: kL,
  minusdu: FL,
  MinusPlus: qL,
  mlcp: ML,
  mldr: jL,
  mnplus: UL,
  models: BL,
  Mopf: $L,
  mopf: VL,
  mp: zL,
  mscr: HL,
  Mscr: XL,
  mstpos: GL,
  Mu: WL,
  mu: YL,
  multimap: KL,
  mumap: JL,
  nabla: QL,
  Nacute: ZL,
  nacute: eD,
  nang: tD,
  nap: nD,
  napE: rD,
  napid: oD,
  napos: iD,
  napprox: sD,
  natural: aD,
  naturals: cD,
  natur: lD,
  nbsp: uD,
  nbump: pD,
  nbumpe: dD,
  ncap: fD,
  Ncaron: mD,
  ncaron: hD,
  Ncedil: gD,
  ncedil: yD,
  ncong: vD,
  ncongdot: bD,
  ncup: xD,
  Ncy: wD,
  ncy: ED,
  ndash: TD,
  nearhk: SD,
  nearr: ND,
  neArr: OD,
  nearrow: AD,
  ne: _D,
  nedot: LD,
  NegativeMediumSpace: DD,
  NegativeThickSpace: CD,
  NegativeThinSpace: RD,
  NegativeVeryThinSpace: PD,
  nequiv: ID,
  nesear: kD,
  nesim: FD,
  NestedGreaterGreater: qD,
  NestedLessLess: MD,
  NewLine: jD,
  nexist: UD,
  nexists: BD,
  Nfr: $D,
  nfr: VD,
  ngE: zD,
  nge: HD,
  ngeq: XD,
  ngeqq: GD,
  ngeqslant: WD,
  nges: YD,
  nGg: KD,
  ngsim: JD,
  nGt: QD,
  ngt: ZD,
  ngtr: eC,
  nGtv: tC,
  nharr: nC,
  nhArr: rC,
  nhpar: oC,
  ni: iC,
  nis: sC,
  nisd: aC,
  niv: cC,
  NJcy: lC,
  njcy: uC,
  nlarr: pC,
  nlArr: dC,
  nldr: fC,
  nlE: mC,
  nle: hC,
  nleftarrow: gC,
  nLeftarrow: yC,
  nleftrightarrow: vC,
  nLeftrightarrow: bC,
  nleq: xC,
  nleqq: wC,
  nleqslant: EC,
  nles: TC,
  nless: SC,
  nLl: NC,
  nlsim: OC,
  nLt: AC,
  nlt: _C,
  nltri: LC,
  nltrie: DC,
  nLtv: CC,
  nmid: RC,
  NoBreak: PC,
  NonBreakingSpace: IC,
  nopf: kC,
  Nopf: FC,
  Not: qC,
  not: MC,
  NotCongruent: jC,
  NotCupCap: UC,
  NotDoubleVerticalBar: BC,
  NotElement: $C,
  NotEqual: VC,
  NotEqualTilde: zC,
  NotExists: HC,
  NotGreater: XC,
  NotGreaterEqual: GC,
  NotGreaterFullEqual: WC,
  NotGreaterGreater: YC,
  NotGreaterLess: KC,
  NotGreaterSlantEqual: JC,
  NotGreaterTilde: QC,
  NotHumpDownHump: ZC,
  NotHumpEqual: e1,
  notin: t1,
  notindot: n1,
  notinE: r1,
  notinva: o1,
  notinvb: i1,
  notinvc: s1,
  NotLeftTriangleBar: a1,
  NotLeftTriangle: c1,
  NotLeftTriangleEqual: l1,
  NotLess: u1,
  NotLessEqual: p1,
  NotLessGreater: d1,
  NotLessLess: f1,
  NotLessSlantEqual: m1,
  NotLessTilde: h1,
  NotNestedGreaterGreater: g1,
  NotNestedLessLess: y1,
  notni: v1,
  notniva: b1,
  notnivb: x1,
  notnivc: w1,
  NotPrecedes: E1,
  NotPrecedesEqual: T1,
  NotPrecedesSlantEqual: S1,
  NotReverseElement: N1,
  NotRightTriangleBar: O1,
  NotRightTriangle: A1,
  NotRightTriangleEqual: _1,
  NotSquareSubset: L1,
  NotSquareSubsetEqual: D1,
  NotSquareSuperset: C1,
  NotSquareSupersetEqual: R1,
  NotSubset: P1,
  NotSubsetEqual: I1,
  NotSucceeds: k1,
  NotSucceedsEqual: F1,
  NotSucceedsSlantEqual: q1,
  NotSucceedsTilde: M1,
  NotSuperset: j1,
  NotSupersetEqual: U1,
  NotTilde: B1,
  NotTildeEqual: $1,
  NotTildeFullEqual: V1,
  NotTildeTilde: z1,
  NotVerticalBar: H1,
  nparallel: X1,
  npar: G1,
  nparsl: W1,
  npart: Y1,
  npolint: K1,
  npr: J1,
  nprcue: Q1,
  nprec: Z1,
  npreceq: eR,
  npre: tR,
  nrarrc: nR,
  nrarr: rR,
  nrArr: oR,
  nrarrw: iR,
  nrightarrow: sR,
  nRightarrow: aR,
  nrtri: cR,
  nrtrie: lR,
  nsc: uR,
  nsccue: pR,
  nsce: dR,
  Nscr: fR,
  nscr: mR,
  nshortmid: hR,
  nshortparallel: gR,
  nsim: yR,
  nsime: vR,
  nsimeq: bR,
  nsmid: xR,
  nspar: wR,
  nsqsube: ER,
  nsqsupe: TR,
  nsub: SR,
  nsubE: NR,
  nsube: OR,
  nsubset: AR,
  nsubseteq: _R,
  nsubseteqq: LR,
  nsucc: DR,
  nsucceq: CR,
  nsup: RR,
  nsupE: PR,
  nsupe: IR,
  nsupset: kR,
  nsupseteq: FR,
  nsupseteqq: qR,
  ntgl: MR,
  Ntilde: jR,
  ntilde: UR,
  ntlg: BR,
  ntriangleleft: $R,
  ntrianglelefteq: VR,
  ntriangleright: zR,
  ntrianglerighteq: HR,
  Nu: XR,
  nu: GR,
  num: WR,
  numero: YR,
  numsp: KR,
  nvap: JR,
  nvdash: QR,
  nvDash: ZR,
  nVdash: eP,
  nVDash: tP,
  nvge: nP,
  nvgt: rP,
  nvHarr: oP,
  nvinfin: iP,
  nvlArr: sP,
  nvle: aP,
  nvlt: cP,
  nvltrie: lP,
  nvrArr: uP,
  nvrtrie: pP,
  nvsim: dP,
  nwarhk: fP,
  nwarr: mP,
  nwArr: hP,
  nwarrow: gP,
  nwnear: yP,
  Oacute: vP,
  oacute: bP,
  oast: xP,
  Ocirc: wP,
  ocirc: EP,
  ocir: TP,
  Ocy: SP,
  ocy: NP,
  odash: OP,
  Odblac: AP,
  odblac: _P,
  odiv: LP,
  odot: DP,
  odsold: CP,
  OElig: RP,
  oelig: PP,
  ofcir: IP,
  Ofr: kP,
  ofr: FP,
  ogon: qP,
  Ograve: MP,
  ograve: jP,
  ogt: UP,
  ohbar: BP,
  ohm: $P,
  oint: VP,
  olarr: zP,
  olcir: HP,
  olcross: XP,
  oline: GP,
  olt: WP,
  Omacr: YP,
  omacr: KP,
  Omega: JP,
  omega: QP,
  Omicron: ZP,
  omicron: eI,
  omid: tI,
  ominus: nI,
  Oopf: rI,
  oopf: oI,
  opar: iI,
  OpenCurlyDoubleQuote: sI,
  OpenCurlyQuote: aI,
  operp: cI,
  oplus: lI,
  orarr: uI,
  Or: pI,
  or: dI,
  ord: fI,
  order: mI,
  orderof: hI,
  ordf: gI,
  ordm: yI,
  origof: vI,
  oror: bI,
  orslope: xI,
  orv: wI,
  oS: EI,
  Oscr: TI,
  oscr: SI,
  Oslash: NI,
  oslash: OI,
  osol: AI,
  Otilde: _I,
  otilde: LI,
  otimesas: DI,
  Otimes: CI,
  otimes: RI,
  Ouml: PI,
  ouml: II,
  ovbar: kI,
  OverBar: FI,
  OverBrace: qI,
  OverBracket: MI,
  OverParenthesis: jI,
  para: UI,
  parallel: BI,
  par: $I,
  parsim: VI,
  parsl: zI,
  part: HI,
  PartialD: XI,
  Pcy: GI,
  pcy: WI,
  percnt: YI,
  period: KI,
  permil: JI,
  perp: QI,
  pertenk: ZI,
  Pfr: ek,
  pfr: tk,
  Phi: nk,
  phi: rk,
  phiv: ok,
  phmmat: ik,
  phone: sk,
  Pi: ak,
  pi: ck,
  pitchfork: lk,
  piv: uk,
  planck: pk,
  planckh: dk,
  plankv: fk,
  plusacir: mk,
  plusb: hk,
  pluscir: gk,
  plus: yk,
  plusdo: vk,
  plusdu: bk,
  pluse: xk,
  PlusMinus: wk,
  plusmn: Ek,
  plussim: Tk,
  plustwo: Sk,
  pm: Nk,
  Poincareplane: Ok,
  pointint: Ak,
  popf: _k,
  Popf: Lk,
  pound: Dk,
  prap: Ck,
  Pr: Rk,
  pr: Pk,
  prcue: Ik,
  precapprox: kk,
  prec: Fk,
  preccurlyeq: qk,
  Precedes: Mk,
  PrecedesEqual: jk,
  PrecedesSlantEqual: Uk,
  PrecedesTilde: Bk,
  preceq: $k,
  precnapprox: Vk,
  precneqq: zk,
  precnsim: Hk,
  pre: Xk,
  prE: Gk,
  precsim: Wk,
  prime: Yk,
  Prime: Kk,
  primes: Jk,
  prnap: Qk,
  prnE: Zk,
  prnsim: eF,
  prod: tF,
  Product: nF,
  profalar: rF,
  profline: oF,
  profsurf: iF,
  prop: sF,
  Proportional: aF,
  Proportion: cF,
  propto: lF,
  prsim: uF,
  prurel: pF,
  Pscr: dF,
  pscr: fF,
  Psi: mF,
  psi: hF,
  puncsp: gF,
  Qfr: yF,
  qfr: vF,
  qint: bF,
  qopf: xF,
  Qopf: wF,
  qprime: EF,
  Qscr: TF,
  qscr: SF,
  quaternions: NF,
  quatint: OF,
  quest: AF,
  questeq: _F,
  quot: LF,
  QUOT: DF,
  rAarr: CF,
  race: RF,
  Racute: PF,
  racute: IF,
  radic: kF,
  raemptyv: FF,
  rang: qF,
  Rang: MF,
  rangd: jF,
  range: UF,
  rangle: BF,
  raquo: $F,
  rarrap: VF,
  rarrb: zF,
  rarrbfs: HF,
  rarrc: XF,
  rarr: GF,
  Rarr: WF,
  rArr: YF,
  rarrfs: KF,
  rarrhk: JF,
  rarrlp: QF,
  rarrpl: ZF,
  rarrsim: eq,
  Rarrtl: tq,
  rarrtl: nq,
  rarrw: rq,
  ratail: oq,
  rAtail: iq,
  ratio: sq,
  rationals: aq,
  rbarr: cq,
  rBarr: lq,
  RBarr: uq,
  rbbrk: pq,
  rbrace: dq,
  rbrack: fq,
  rbrke: mq,
  rbrksld: hq,
  rbrkslu: gq,
  Rcaron: yq,
  rcaron: vq,
  Rcedil: bq,
  rcedil: xq,
  rceil: wq,
  rcub: Eq,
  Rcy: Tq,
  rcy: Sq,
  rdca: Nq,
  rdldhar: Oq,
  rdquo: Aq,
  rdquor: _q,
  rdsh: Lq,
  real: Dq,
  realine: Cq,
  realpart: Rq,
  reals: Pq,
  Re: Iq,
  rect: kq,
  reg: Fq,
  REG: qq,
  ReverseElement: Mq,
  ReverseEquilibrium: jq,
  ReverseUpEquilibrium: Uq,
  rfisht: Bq,
  rfloor: $q,
  rfr: Vq,
  Rfr: zq,
  rHar: Hq,
  rhard: Xq,
  rharu: Gq,
  rharul: Wq,
  Rho: Yq,
  rho: Kq,
  rhov: Jq,
  RightAngleBracket: Qq,
  RightArrowBar: Zq,
  rightarrow: eM,
  RightArrow: tM,
  Rightarrow: nM,
  RightArrowLeftArrow: rM,
  rightarrowtail: oM,
  RightCeiling: iM,
  RightDoubleBracket: sM,
  RightDownTeeVector: aM,
  RightDownVectorBar: cM,
  RightDownVector: lM,
  RightFloor: uM,
  rightharpoondown: pM,
  rightharpoonup: dM,
  rightleftarrows: fM,
  rightleftharpoons: mM,
  rightrightarrows: hM,
  rightsquigarrow: gM,
  RightTeeArrow: yM,
  RightTee: vM,
  RightTeeVector: bM,
  rightthreetimes: xM,
  RightTriangleBar: wM,
  RightTriangle: EM,
  RightTriangleEqual: TM,
  RightUpDownVector: SM,
  RightUpTeeVector: NM,
  RightUpVectorBar: OM,
  RightUpVector: AM,
  RightVectorBar: _M,
  RightVector: LM,
  ring: DM,
  risingdotseq: CM,
  rlarr: RM,
  rlhar: PM,
  rlm: IM,
  rmoustache: kM,
  rmoust: FM,
  rnmid: qM,
  roang: MM,
  roarr: jM,
  robrk: UM,
  ropar: BM,
  ropf: $M,
  Ropf: VM,
  roplus: zM,
  rotimes: HM,
  RoundImplies: XM,
  rpar: GM,
  rpargt: WM,
  rppolint: YM,
  rrarr: KM,
  Rrightarrow: JM,
  rsaquo: QM,
  rscr: ZM,
  Rscr: ej,
  rsh: tj,
  Rsh: nj,
  rsqb: rj,
  rsquo: oj,
  rsquor: ij,
  rthree: sj,
  rtimes: aj,
  rtri: cj,
  rtrie: lj,
  rtrif: uj,
  rtriltri: pj,
  RuleDelayed: dj,
  ruluhar: fj,
  rx: mj,
  Sacute: hj,
  sacute: gj,
  sbquo: yj,
  scap: vj,
  Scaron: bj,
  scaron: xj,
  Sc: wj,
  sc: Ej,
  sccue: Tj,
  sce: Sj,
  scE: Nj,
  Scedil: Oj,
  scedil: Aj,
  Scirc: _j,
  scirc: Lj,
  scnap: Dj,
  scnE: Cj,
  scnsim: Rj,
  scpolint: Pj,
  scsim: Ij,
  Scy: kj,
  scy: Fj,
  sdotb: qj,
  sdot: Mj,
  sdote: jj,
  searhk: Uj,
  searr: Bj,
  seArr: $j,
  searrow: Vj,
  sect: zj,
  semi: Hj,
  seswar: Xj,
  setminus: Gj,
  setmn: Wj,
  sext: Yj,
  Sfr: Kj,
  sfr: Jj,
  sfrown: Qj,
  sharp: Zj,
  SHCHcy: e2,
  shchcy: t2,
  SHcy: n2,
  shcy: r2,
  ShortDownArrow: o2,
  ShortLeftArrow: i2,
  shortmid: s2,
  shortparallel: a2,
  ShortRightArrow: c2,
  ShortUpArrow: l2,
  shy: u2,
  Sigma: p2,
  sigma: d2,
  sigmaf: f2,
  sigmav: m2,
  sim: h2,
  simdot: g2,
  sime: y2,
  simeq: v2,
  simg: b2,
  simgE: x2,
  siml: w2,
  simlE: E2,
  simne: T2,
  simplus: S2,
  simrarr: N2,
  slarr: O2,
  SmallCircle: A2,
  smallsetminus: _2,
  smashp: L2,
  smeparsl: D2,
  smid: C2,
  smile: R2,
  smt: P2,
  smte: I2,
  smtes: k2,
  SOFTcy: F2,
  softcy: q2,
  solbar: M2,
  solb: j2,
  sol: U2,
  Sopf: B2,
  sopf: $2,
  spades: V2,
  spadesuit: z2,
  spar: H2,
  sqcap: X2,
  sqcaps: G2,
  sqcup: W2,
  sqcups: Y2,
  Sqrt: K2,
  sqsub: J2,
  sqsube: Q2,
  sqsubset: Z2,
  sqsubseteq: eU,
  sqsup: tU,
  sqsupe: nU,
  sqsupset: rU,
  sqsupseteq: oU,
  square: iU,
  Square: sU,
  SquareIntersection: aU,
  SquareSubset: cU,
  SquareSubsetEqual: lU,
  SquareSuperset: uU,
  SquareSupersetEqual: pU,
  SquareUnion: dU,
  squarf: fU,
  squ: mU,
  squf: hU,
  srarr: gU,
  Sscr: yU,
  sscr: vU,
  ssetmn: bU,
  ssmile: xU,
  sstarf: wU,
  Star: EU,
  star: TU,
  starf: SU,
  straightepsilon: NU,
  straightphi: OU,
  strns: AU,
  sub: _U,
  Sub: LU,
  subdot: DU,
  subE: CU,
  sube: RU,
  subedot: PU,
  submult: IU,
  subnE: kU,
  subne: FU,
  subplus: qU,
  subrarr: MU,
  subset: jU,
  Subset: UU,
  subseteq: BU,
  subseteqq: $U,
  SubsetEqual: VU,
  subsetneq: zU,
  subsetneqq: HU,
  subsim: XU,
  subsub: GU,
  subsup: WU,
  succapprox: YU,
  succ: KU,
  succcurlyeq: JU,
  Succeeds: QU,
  SucceedsEqual: ZU,
  SucceedsSlantEqual: eB,
  SucceedsTilde: tB,
  succeq: nB,
  succnapprox: rB,
  succneqq: oB,
  succnsim: iB,
  succsim: sB,
  SuchThat: aB,
  sum: cB,
  Sum: lB,
  sung: uB,
  sup1: pB,
  sup2: dB,
  sup3: fB,
  sup: mB,
  Sup: hB,
  supdot: gB,
  supdsub: yB,
  supE: vB,
  supe: bB,
  supedot: xB,
  Superset: wB,
  SupersetEqual: EB,
  suphsol: TB,
  suphsub: SB,
  suplarr: NB,
  supmult: OB,
  supnE: AB,
  supne: _B,
  supplus: LB,
  supset: DB,
  Supset: CB,
  supseteq: RB,
  supseteqq: PB,
  supsetneq: IB,
  supsetneqq: kB,
  supsim: FB,
  supsub: qB,
  supsup: MB,
  swarhk: jB,
  swarr: UB,
  swArr: BB,
  swarrow: $B,
  swnwar: VB,
  szlig: zB,
  Tab: HB,
  target: XB,
  Tau: GB,
  tau: WB,
  tbrk: YB,
  Tcaron: KB,
  tcaron: JB,
  Tcedil: QB,
  tcedil: ZB,
  Tcy: e$,
  tcy: t$,
  tdot: n$,
  telrec: r$,
  Tfr: o$,
  tfr: i$,
  there4: s$,
  therefore: a$,
  Therefore: c$,
  Theta: l$,
  theta: u$,
  thetasym: p$,
  thetav: d$,
  thickapprox: f$,
  thicksim: m$,
  ThickSpace: h$,
  ThinSpace: g$,
  thinsp: y$,
  thkap: v$,
  thksim: b$,
  THORN: x$,
  thorn: w$,
  tilde: E$,
  Tilde: T$,
  TildeEqual: S$,
  TildeFullEqual: N$,
  TildeTilde: O$,
  timesbar: A$,
  timesb: _$,
  times: L$,
  timesd: D$,
  tint: C$,
  toea: R$,
  topbot: P$,
  topcir: I$,
  top: k$,
  Topf: F$,
  topf: q$,
  topfork: M$,
  tosa: j$,
  tprime: U$,
  trade: B$,
  TRADE: $$,
  triangle: V$,
  triangledown: z$,
  triangleleft: H$,
  trianglelefteq: X$,
  triangleq: G$,
  triangleright: W$,
  trianglerighteq: Y$,
  tridot: K$,
  trie: J$,
  triminus: Q$,
  TripleDot: Z$,
  triplus: e3,
  trisb: t3,
  tritime: n3,
  trpezium: r3,
  Tscr: o3,
  tscr: i3,
  TScy: s3,
  tscy: a3,
  TSHcy: c3,
  tshcy: l3,
  Tstrok: u3,
  tstrok: p3,
  twixt: d3,
  twoheadleftarrow: f3,
  twoheadrightarrow: m3,
  Uacute: h3,
  uacute: g3,
  uarr: y3,
  Uarr: v3,
  uArr: b3,
  Uarrocir: x3,
  Ubrcy: w3,
  ubrcy: E3,
  Ubreve: T3,
  ubreve: S3,
  Ucirc: N3,
  ucirc: O3,
  Ucy: A3,
  ucy: _3,
  udarr: L3,
  Udblac: D3,
  udblac: C3,
  udhar: R3,
  ufisht: P3,
  Ufr: I3,
  ufr: k3,
  Ugrave: F3,
  ugrave: q3,
  uHar: M3,
  uharl: j3,
  uharr: U3,
  uhblk: B3,
  ulcorn: $3,
  ulcorner: V3,
  ulcrop: z3,
  ultri: H3,
  Umacr: X3,
  umacr: G3,
  uml: W3,
  UnderBar: Y3,
  UnderBrace: K3,
  UnderBracket: J3,
  UnderParenthesis: Q3,
  Union: Z3,
  UnionPlus: eV,
  Uogon: tV,
  uogon: nV,
  Uopf: rV,
  uopf: oV,
  UpArrowBar: iV,
  uparrow: sV,
  UpArrow: aV,
  Uparrow: cV,
  UpArrowDownArrow: lV,
  updownarrow: uV,
  UpDownArrow: pV,
  Updownarrow: dV,
  UpEquilibrium: fV,
  upharpoonleft: mV,
  upharpoonright: hV,
  uplus: gV,
  UpperLeftArrow: yV,
  UpperRightArrow: vV,
  upsi: bV,
  Upsi: xV,
  upsih: wV,
  Upsilon: EV,
  upsilon: TV,
  UpTeeArrow: SV,
  UpTee: NV,
  upuparrows: OV,
  urcorn: AV,
  urcorner: _V,
  urcrop: LV,
  Uring: DV,
  uring: CV,
  urtri: RV,
  Uscr: PV,
  uscr: IV,
  utdot: kV,
  Utilde: FV,
  utilde: qV,
  utri: MV,
  utrif: jV,
  uuarr: UV,
  Uuml: BV,
  uuml: $V,
  uwangle: VV,
  vangrt: zV,
  varepsilon: HV,
  varkappa: XV,
  varnothing: GV,
  varphi: WV,
  varpi: YV,
  varpropto: KV,
  varr: JV,
  vArr: QV,
  varrho: ZV,
  varsigma: e8,
  varsubsetneq: t8,
  varsubsetneqq: n8,
  varsupsetneq: r8,
  varsupsetneqq: o8,
  vartheta: i8,
  vartriangleleft: s8,
  vartriangleright: a8,
  vBar: c8,
  Vbar: l8,
  vBarv: u8,
  Vcy: p8,
  vcy: d8,
  vdash: f8,
  vDash: m8,
  Vdash: h8,
  VDash: g8,
  Vdashl: y8,
  veebar: v8,
  vee: b8,
  Vee: x8,
  veeeq: w8,
  vellip: E8,
  verbar: T8,
  Verbar: S8,
  vert: N8,
  Vert: O8,
  VerticalBar: A8,
  VerticalLine: _8,
  VerticalSeparator: L8,
  VerticalTilde: D8,
  VeryThinSpace: C8,
  Vfr: R8,
  vfr: P8,
  vltri: I8,
  vnsub: k8,
  vnsup: F8,
  Vopf: q8,
  vopf: M8,
  vprop: j8,
  vrtri: U8,
  Vscr: B8,
  vscr: $8,
  vsubnE: V8,
  vsubne: z8,
  vsupnE: H8,
  vsupne: X8,
  Vvdash: G8,
  vzigzag: W8,
  Wcirc: Y8,
  wcirc: K8,
  wedbar: J8,
  wedge: Q8,
  Wedge: Z8,
  wedgeq: ez,
  weierp: tz,
  Wfr: nz,
  wfr: rz,
  Wopf: oz,
  wopf: iz,
  wp: sz,
  wr: az,
  wreath: cz,
  Wscr: lz,
  wscr: uz,
  xcap: pz,
  xcirc: dz,
  xcup: fz,
  xdtri: mz,
  Xfr: hz,
  xfr: gz,
  xharr: yz,
  xhArr: vz,
  Xi: bz,
  xi: xz,
  xlarr: wz,
  xlArr: Ez,
  xmap: Tz,
  xnis: Sz,
  xodot: Nz,
  Xopf: Oz,
  xopf: Az,
  xoplus: _z,
  xotime: Lz,
  xrarr: Dz,
  xrArr: Cz,
  Xscr: Rz,
  xscr: Pz,
  xsqcup: Iz,
  xuplus: kz,
  xutri: Fz,
  xvee: qz,
  xwedge: Mz,
  Yacute: jz,
  yacute: Uz,
  YAcy: Bz,
  yacy: $z,
  Ycirc: Vz,
  ycirc: zz,
  Ycy: Hz,
  ycy: Xz,
  yen: Gz,
  Yfr: Wz,
  yfr: Yz,
  YIcy: Kz,
  yicy: Jz,
  Yopf: Qz,
  yopf: Zz,
  Yscr: e4,
  yscr: t4,
  YUcy: n4,
  yucy: r4,
  yuml: o4,
  Yuml: i4,
  Zacute: s4,
  zacute: a4,
  Zcaron: c4,
  zcaron: l4,
  Zcy: u4,
  zcy: p4,
  Zdot: d4,
  zdot: f4,
  zeetrf: m4,
  ZeroWidthSpace: h4,
  Zeta: g4,
  zeta: y4,
  zfr: v4,
  Zfr: b4,
  ZHcy: x4,
  zhcy: w4,
  zigrarr: E4,
  zopf: T4,
  Zopf: S4,
  Zscr: N4,
  zscr: O4,
  zwj: A4,
  zwnj: _4
}, L4 = "Á", D4 = "á", C4 = "Â", R4 = "â", P4 = "´", I4 = "Æ", k4 = "æ", F4 = "À", q4 = "à", M4 = "&", j4 = "&", U4 = "Å", B4 = "å", $4 = "Ã", V4 = "ã", z4 = "Ä", H4 = "ä", X4 = "¦", G4 = "Ç", W4 = "ç", Y4 = "¸", K4 = "¢", J4 = "©", Q4 = "©", Z4 = "¤", eH = "°", tH = "÷", nH = "É", rH = "é", oH = "Ê", iH = "ê", sH = "È", aH = "è", cH = "Ð", lH = "ð", uH = "Ë", pH = "ë", dH = "½", fH = "¼", mH = "¾", hH = ">", gH = ">", yH = "Í", vH = "í", bH = "Î", xH = "î", wH = "¡", EH = "Ì", TH = "ì", SH = "¿", NH = "Ï", OH = "ï", AH = "«", _H = "<", LH = "<", DH = "¯", CH = "µ", RH = "·", PH = " ", IH = "¬", kH = "Ñ", FH = "ñ", qH = "Ó", MH = "ó", jH = "Ô", UH = "ô", BH = "Ò", $H = "ò", VH = "ª", zH = "º", HH = "Ø", XH = "ø", GH = "Õ", WH = "õ", YH = "Ö", KH = "ö", JH = "¶", QH = "±", ZH = "£", eX = '"', tX = '"', nX = "»", rX = "®", oX = "®", iX = "§", sX = "­", aX = "¹", cX = "²", lX = "³", uX = "ß", pX = "Þ", dX = "þ", fX = "×", mX = "Ú", hX = "ú", gX = "Û", yX = "û", vX = "Ù", bX = "ù", xX = "¨", wX = "Ü", EX = "ü", TX = "Ý", SX = "ý", NX = "¥", OX = "ÿ", AX = {
  Aacute: L4,
  aacute: D4,
  Acirc: C4,
  acirc: R4,
  acute: P4,
  AElig: I4,
  aelig: k4,
  Agrave: F4,
  agrave: q4,
  amp: M4,
  AMP: j4,
  Aring: U4,
  aring: B4,
  Atilde: $4,
  atilde: V4,
  Auml: z4,
  auml: H4,
  brvbar: X4,
  Ccedil: G4,
  ccedil: W4,
  cedil: Y4,
  cent: K4,
  copy: J4,
  COPY: Q4,
  curren: Z4,
  deg: eH,
  divide: tH,
  Eacute: nH,
  eacute: rH,
  Ecirc: oH,
  ecirc: iH,
  Egrave: sH,
  egrave: aH,
  ETH: cH,
  eth: lH,
  Euml: uH,
  euml: pH,
  frac12: dH,
  frac14: fH,
  frac34: mH,
  gt: hH,
  GT: gH,
  Iacute: yH,
  iacute: vH,
  Icirc: bH,
  icirc: xH,
  iexcl: wH,
  Igrave: EH,
  igrave: TH,
  iquest: SH,
  Iuml: NH,
  iuml: OH,
  laquo: AH,
  lt: _H,
  LT: LH,
  macr: DH,
  micro: CH,
  middot: RH,
  nbsp: PH,
  not: IH,
  Ntilde: kH,
  ntilde: FH,
  Oacute: qH,
  oacute: MH,
  Ocirc: jH,
  ocirc: UH,
  Ograve: BH,
  ograve: $H,
  ordf: VH,
  ordm: zH,
  Oslash: HH,
  oslash: XH,
  Otilde: GH,
  otilde: WH,
  Ouml: YH,
  ouml: KH,
  para: JH,
  plusmn: QH,
  pound: ZH,
  quot: eX,
  QUOT: tX,
  raquo: nX,
  reg: rX,
  REG: oX,
  sect: iX,
  shy: sX,
  sup1: aX,
  sup2: cX,
  sup3: lX,
  szlig: uX,
  THORN: pX,
  thorn: dX,
  times: fX,
  Uacute: mX,
  uacute: hX,
  Ucirc: gX,
  ucirc: yX,
  Ugrave: vX,
  ugrave: bX,
  uml: xX,
  Uuml: wX,
  uuml: EX,
  Yacute: TX,
  yacute: SX,
  yen: NX,
  yuml: OX
}, _X = "&", LX = "'", DX = ">", CX = "<", RX = '"', kc = {
  amp: _X,
  apos: LX,
  gt: DX,
  lt: CX,
  quot: RX
};
var Oi = {};
const PX = {
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
var IX = z && z.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Oi, "__esModule", { value: !0 });
var zs = IX(PX), kX = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.fromCodePoint || function(t) {
    var e = "";
    return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), e += String.fromCharCode(t), e;
  }
);
function FX(t) {
  return t >= 55296 && t <= 57343 || t > 1114111 ? "�" : (t in zs.default && (t = zs.default[t]), kX(t));
}
Oi.default = FX;
var mr = z && z.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.decodeHTML = lt.decodeHTMLStrict = lt.decodeXML = void 0;
var Ho = mr(Ic), qX = mr(AX), MX = mr(kc), Hs = mr(Oi), jX = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
lt.decodeXML = Fc(MX.default);
lt.decodeHTMLStrict = Fc(Ho.default);
function Fc(t) {
  var e = qc(t);
  return function(n) {
    return String(n).replace(jX, e);
  };
}
var Xs = function(t, e) {
  return t < e ? 1 : -1;
};
lt.decodeHTML = function() {
  for (var t = Object.keys(qX.default).sort(Xs), e = Object.keys(Ho.default).sort(Xs), n = 0, r = 0; n < e.length; n++)
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
var UX = Mc(kc), jc = Bc(UX.default), Uc = $c(jc);
Be.encodeXML = Hc(jc);
var BX = Mc(Ic), Ai = Bc(BX.default), $X = $c(Ai);
Be.encodeHTML = zX(Ai, $X);
Be.encodeNonAsciiHTML = Hc(Ai);
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
var Vc = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, VX = (
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
  return "&#x" + (t.length > 1 ? VX(t) : t.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function zX(t, e) {
  return function(n) {
    return n.replace(e, function(r) {
      return t[r];
    }).replace(Vc, hr);
  };
}
var zc = new RegExp(Uc.source + "|" + Vc.source, "g");
function HX(t) {
  return t.replace(zc, hr);
}
Be.escape = HX;
function XX(t) {
  return t.replace(Uc, hr);
}
Be.escapeUTF8 = XX;
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
})(Pc);
const pt = Rc.exports = {}, GX = Pc, WX = it;
pt.stripHtml = function(t) {
  return t = t.replace(/([^\n])<\/?(h|br|p|ul|ol|li|blockquote|section|table|tr|div)(?:.|\n)*?>([^\n])/gm, `$1
$3`), t = t.replace(/<(?:.|\n)*?>/gm, ""), t;
};
pt.getSnippet = function(t) {
  return GX.decodeHTML(pt.stripHtml(t)).trim();
};
pt.getLink = function(t, e, n) {
  if (t) {
    for (let r = 0; r < t.length; ++r)
      if (t[r].$.rel === e) return t[r].$.href;
    if (t[n]) return t[n].$.href;
  }
};
pt.getContent = function(t) {
  return typeof t._ == "string" ? t._ : typeof t == "object" ? new WX.Builder({ headless: !0, explicitRoot: !0, rootName: "div", renderOpts: { pretty: !1 } }).buildObject(t) : t;
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
const YX = "utf8", KX = /(encoding|charset)\s*=\s*(\S+)/, JX = ["ascii", "utf8", "utf16le", "ucs2", "base64", "latin1", "binary", "hex"], QX = {
  "utf-8": "utf8",
  "iso-8859-1": "latin1"
};
pt.getEncodingFromContentType = function(t) {
  t = t || "";
  let n = (t.match(KX) || [])[2] || "";
  return n = n.toLowerCase(), n = QX[n] || n, (!n || JX.indexOf(n) === -1) && (n = YX), n;
};
var ZX = Rc.exports;
const e6 = lr, t6 = ur, n6 = it, Gs = Tn, In = up, be = ZX, r6 = {
  "User-Agent": "rss-parser",
  Accept: "application/rss+xml"
}, o6 = 5, i6 = 6e4;
let s6 = class {
  constructor(e = {}) {
    e.headers = e.headers || {}, e.xml2js = e.xml2js || {}, e.customFields = e.customFields || {}, e.customFields.item = e.customFields.item || [], e.customFields.feed = e.customFields.feed || [], e.requestOptions = e.requestOptions || {}, e.maxRedirects || (e.maxRedirects = o6), e.timeout || (e.timeout = i6), this.options = e, this.xmlParser = new n6.Parser(this.options.xml2js);
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
    return r = be.maybePromisify(n, r), r;
  }
  parseURL(e, n, r = 0) {
    let o = "", i = e.indexOf("https") === 0 ? t6.get : e6.get, s = Gs.parse(e), a = Object.assign({}, r6, this.options.headers), c = null, d = new Promise((l, u) => {
      const p = Object.assign({ headers: a }, s, this.options.requestOptions);
      i(p, (f) => {
        if (this.options.maxRedirects && f.statusCode >= 300 && f.statusCode < 400 && f.headers.location) {
          if (r === this.options.maxRedirects)
            return u(new Error("Too many redirects"));
          {
            const b = Gs.resolve(e, f.headers.location);
            return this.parseURL(b, null, r + 1).then(l, u);
          }
        } else if (f.statusCode >= 300)
          return u(new Error("Status code " + f.statusCode));
        let x = be.getEncodingFromContentType(f.headers["content-type"]);
        f.setEncoding(x), f.on("data", (b) => {
          o += b;
        }), f.on("end", () => this.parseString(o).then(l, u));
      }).on("error", u), c = setTimeout(() => u(new Error("Request timed out after " + this.options.timeout + "ms")), this.options.timeout);
    }).then((l) => (clearTimeout(c), Promise.resolve(l)), (l) => (clearTimeout(c), Promise.reject(l)));
    return d = be.maybePromisify(n, d), d;
  }
  buildAtomFeed(e) {
    let n = { items: [] };
    if (be.copyFromXML(e.feed, n, this.options.customFields.feed), e.feed.link && (n.link = be.getLink(e.feed.link, "alternate", 0), n.feedUrl = be.getLink(e.feed.link, "self", 1)), e.feed.title) {
      let r = e.feed.title[0] || "";
      r._ && (r = r._), r && (n.title = r);
    }
    return e.feed.updated && (n.lastBuildDate = e.feed.updated[0]), n.items = (e.feed.entry || []).map((r) => this.parseItemAtom(r)), n;
  }
  parseItemAtom(e) {
    let n = {};
    if (be.copyFromXML(e, n, this.options.customFields.item), e.title) {
      let r = e.title[0] || "";
      r._ && (r = r._), r && (n.title = r);
    }
    return e.link && e.link.length && (n.link = be.getLink(e.link, "alternate", 0)), e.published && e.published.length && e.published[0].length && (n.pubDate = new Date(e.published[0]).toISOString()), !n.pubDate && e.updated && e.updated.length && e.updated[0].length && (n.pubDate = new Date(e.updated[0]).toISOString()), e.author && e.author.length && e.author[0].name && e.author[0].name.length && (n.author = e.author[0].name[0]), e.content && e.content.length && (n.content = be.getContent(e.content[0]), n.contentSnippet = be.getSnippet(n.content)), e.summary && e.summary.length && (n.summary = be.getContent(e.summary[0])), e.id && (n.id = e.id[0]), this.setISODate(n), n;
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
    return Object.keys(s).length && (r.paginationLinks = s), be.copyFromXML(e, r, o), r.items = n.map((a) => this.parseItemRss(a, i)), r;
  }
  parseItemRss(e, n) {
    let r = {};
    return be.copyFromXML(e, r, n), e.enclosure && (r.enclosure = e.enclosure[0].$), e.description && (r.content = be.getContent(e.description[0]), r.contentSnippet = be.getSnippet(r.content)), e.guid && (r.guid = e.guid[0], r.guid._ && (r.guid = r.guid._)), e.$ && e.$["rdf:about"] && (r["rdf:about"] = e.$["rdf:about"]), e.category && (r.categories = e.category), this.setISODate(r), r;
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
    be.copyFromXML(n, e.itunes, In.podcastFeed), r.forEach((o, i) => {
      let s = e.items[i];
      s.itunes = {}, be.copyFromXML(o, s.itunes, In.podcastItem);
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
var a6 = s6, c6 = a6;
const l6 = /* @__PURE__ */ on(c6);
function Xc(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: u6 } = Object.prototype, { getPrototypeOf: _i } = Object, { iterator: gr, toStringTag: Gc } = Symbol, yr = /* @__PURE__ */ ((t) => (e) => {
  const n = u6.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), We = (t) => (t = t.toLowerCase(), (e) => yr(e) === t), vr = (t) => (e) => typeof e === t, { isArray: sn } = Array, Zt = vr("undefined");
function Sn(t) {
  return t !== null && !Zt(t) && t.constructor !== null && !Zt(t.constructor) && Me(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Wc = We("ArrayBuffer");
function p6(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Wc(t.buffer), e;
}
const d6 = vr("string"), Me = vr("function"), Yc = vr("number"), Nn = (t) => t !== null && typeof t == "object", f6 = (t) => t === !0 || t === !1, Vn = (t) => {
  if (yr(t) !== "object")
    return !1;
  const e = _i(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Gc in t) && !(gr in t);
}, m6 = (t) => {
  if (!Nn(t) || Sn(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, h6 = We("Date"), g6 = We("File"), y6 = We("Blob"), v6 = We("FileList"), b6 = (t) => Nn(t) && Me(t.pipe), x6 = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Me(t.append) && ((e = yr(t)) === "formdata" || // detect form-data instance
  e === "object" && Me(t.toString) && t.toString() === "[object FormData]"));
}, w6 = We("URLSearchParams"), [E6, T6, S6, N6] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(We), O6 = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
const Ot = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Jc = (t) => !Zt(t) && t !== Ot;
function Xo() {
  const { caseless: t, skipUndefined: e } = Jc(this) && this || {}, n = {}, r = (o, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const s = t && Kc(n, i) || i;
    Vn(n[s]) && Vn(o) ? n[s] = Xo(n[s], o) : Vn(o) ? n[s] = Xo({}, o) : sn(o) ? n[s] = o.slice() : (!e || !Zt(o)) && (n[s] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && On(arguments[o], r);
  return n;
}
const A6 = (t, e, n, { allOwnKeys: r } = {}) => (On(
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
), t), _6 = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), L6 = (t, e, n, r) => {
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
}, D6 = (t, e, n, r) => {
  let o, i, s;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, t, e)) && !a[s] && (e[s] = t[s], a[s] = !0);
    t = n !== !1 && _i(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, C6 = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, R6 = (t) => {
  if (!t) return null;
  if (sn(t)) return t;
  let e = t.length;
  if (!Yc(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, P6 = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && _i(Uint8Array)), I6 = (t, e) => {
  const r = (t && t[gr]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, k6 = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, F6 = We("HTMLFormElement"), q6 = (t) => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), Ws = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), M6 = We("RegExp"), Qc = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  On(n, (o, i) => {
    let s;
    (s = e(o, i, t)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(t, r);
}, j6 = (t) => {
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
}, U6 = (t, e) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return sn(t) ? r(t) : r(String(t).split(e)), n;
}, B6 = () => {
}, $6 = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function V6(t) {
  return !!(t && Me(t.append) && t[Gc] === "FormData" && t[gr]);
}
const z6 = (t) => {
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
}, H6 = We("AsyncFunction"), X6 = (t) => t && (Nn(t) || Me(t)) && Me(t.then) && Me(t.catch), Zc = ((t, e) => t ? setImmediate : e ? ((n, r) => (Ot.addEventListener(
  "message",
  ({ source: o, data: i }) => {
    o === Ot && i === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Ot.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Me(Ot.postMessage)), G6 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ot) : typeof process < "u" && process.nextTick || Zc, W6 = (t) => t != null && Me(t[gr]), N = {
  isArray: sn,
  isArrayBuffer: Wc,
  isBuffer: Sn,
  isFormData: x6,
  isArrayBufferView: p6,
  isString: d6,
  isNumber: Yc,
  isBoolean: f6,
  isObject: Nn,
  isPlainObject: Vn,
  isEmptyObject: m6,
  isReadableStream: E6,
  isRequest: T6,
  isResponse: S6,
  isHeaders: N6,
  isUndefined: Zt,
  isDate: h6,
  isFile: g6,
  isBlob: y6,
  isRegExp: M6,
  isFunction: Me,
  isStream: b6,
  isURLSearchParams: w6,
  isTypedArray: P6,
  isFileList: v6,
  forEach: On,
  merge: Xo,
  extend: A6,
  trim: O6,
  stripBOM: _6,
  inherits: L6,
  toFlatObject: D6,
  kindOf: yr,
  kindOfTest: We,
  endsWith: C6,
  toArray: R6,
  forEachEntry: I6,
  matchAll: k6,
  isHTMLForm: F6,
  hasOwnProperty: Ws,
  hasOwnProp: Ws,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Qc,
  freezeMethods: j6,
  toObjectSet: U6,
  toCamelCase: q6,
  noop: B6,
  toFiniteNumber: $6,
  findKey: Kc,
  global: Ot,
  isContextDefined: Jc,
  isSpecCompliantForm: V6,
  toJSONObject: z6,
  isAsyncFn: H6,
  isThenable: X6,
  setImmediate: Zc,
  asap: G6,
  isIterable: W6
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
var tl = Le.Stream, Y6 = bt, K6 = Ye;
function Ye() {
  this.source = null, this.dataSize = 0, this.maxDataSize = 1024 * 1024, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
}
Y6.inherits(Ye, tl);
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
var J6 = bt, nl = Le.Stream, Ys = K6, Q6 = ce;
function ce() {
  this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2 * 1024 * 1024, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
}
J6.inherits(ce, nl);
ce.create = function(t) {
  var e = new this();
  t = t || {};
  for (var n in t)
    e[n] = t[n];
  return e;
};
ce.isStreamLike = function(t) {
  return typeof t != "function" && typeof t != "string" && typeof t != "boolean" && typeof t != "number" && !Buffer.isBuffer(t);
};
ce.prototype.append = function(t) {
  var e = ce.isStreamLike(t);
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
ce.prototype.pipe = function(t, e) {
  return nl.prototype.pipe.call(this, t, e), this.resume(), t;
};
ce.prototype._getNext = function() {
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
ce.prototype._realGetNext = function() {
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
    var r = ce.isStreamLike(n);
    r && (n.on("data", this._checkDataSize.bind(this)), this._handleErrors(n)), this._pipeNext(n);
  }).bind(this));
};
ce.prototype._pipeNext = function(t) {
  this._currentStream = t;
  var e = ce.isStreamLike(t);
  if (e) {
    t.on("end", this._getNext.bind(this)), t.pipe(this, { end: !1 });
    return;
  }
  var n = t;
  this.write(n), this._getNext();
};
ce.prototype._handleErrors = function(t) {
  var e = this;
  t.on("error", function(n) {
    e._emitError(n);
  });
};
ce.prototype.write = function(t) {
  this.emit("data", t);
};
ce.prototype.pause = function() {
  this.pauseStreams && (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function" && this._currentStream.pause(), this.emit("pause"));
};
ce.prototype.resume = function() {
  this._released || (this._released = !0, this.writable = !0, this._getNext()), this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function" && this._currentStream.resume(), this.emit("resume");
};
ce.prototype.end = function() {
  this._reset(), this.emit("end");
};
ce.prototype.destroy = function() {
  this._reset(), this.emit("close");
};
ce.prototype._reset = function() {
  this.writable = !1, this._streams = [], this._currentStream = null;
};
ce.prototype._checkDataSize = function() {
  if (this._updateDataSize(), !(this.dataSize <= this.maxDataSize)) {
    var t = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(new Error(t));
  }
};
ce.prototype._updateDataSize = function() {
  this.dataSize = 0;
  var t = this;
  this._streams.forEach(function(e) {
    e.dataSize && (t.dataSize += e.dataSize);
  }), this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize);
};
ce.prototype._emitError = function(t) {
  this._reset(), this.emit("error", t);
};
var rl = {};
const Z6 = {
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
var e9 = Z6;
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(t) {
  var e = e9, n = te.extname, r = /^\s*([^;\s]*)(?:;|\s|$)/, o = /^text\//i;
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
      var x = e[f], b = x.extensions;
      if (!(!b || !b.length)) {
        l[f] = b;
        for (var S = 0; S < b.length; S++) {
          var w = b[S];
          if (u[w]) {
            var y = p.indexOf(e[u[w]].source), E = p.indexOf(x.source);
            if (u[w] !== "application/octet-stream" && (y > E || y === E && u[w].substr(0, 12) === "application/"))
              continue;
          }
          u[w] = f;
        }
      }
    });
  }
})(rl);
var t9 = n9;
function n9(t) {
  var e = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
  e ? e(t) : setTimeout(t, 0);
}
var Ks = t9, ol = r9;
function r9(t) {
  var e = !1;
  return Ks(function() {
    e = !0;
  }), function(r, o) {
    e ? t(r, o) : Ks(function() {
      t(r, o);
    });
  };
}
var il = o9;
function o9(t) {
  Object.keys(t.jobs).forEach(i9.bind(t)), t.jobs = {};
}
function i9(t) {
  typeof this.jobs[t] == "function" && this.jobs[t]();
}
var Js = ol, s9 = il, sl = a9;
function a9(t, e, n, r) {
  var o = n.keyedList ? n.keyedList[n.index] : n.index;
  n.jobs[o] = c9(e, o, t[o], function(i, s) {
    o in n.jobs && (delete n.jobs[o], i ? s9(n) : n.results[o] = s, r(i, n.results));
  });
}
function c9(t, e, n, r) {
  var o;
  return t.length == 2 ? o = t(n, Js(r)) : o = t(n, e, Js(r)), o;
}
var al = l9;
function l9(t, e) {
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
var u9 = il, p9 = ol, cl = d9;
function d9(t) {
  Object.keys(this.jobs).length && (this.index = this.size, u9(this), p9(t)(null, this.results));
}
var f9 = sl, m9 = al, h9 = cl, g9 = y9;
function y9(t, e, n) {
  for (var r = m9(t); r.index < (r.keyedList || t).length; )
    f9(t, e, r, function(o, i) {
      if (o) {
        n(o, i);
        return;
      }
      if (Object.keys(r.jobs).length === 0) {
        n(null, r.results);
        return;
      }
    }), r.index++;
  return h9.bind(r, n);
}
var br = { exports: {} }, Qs = sl, v9 = al, b9 = cl;
br.exports = x9;
br.exports.ascending = ll;
br.exports.descending = w9;
function x9(t, e, n, r) {
  var o = v9(t, n);
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
  }), b9.bind(o, r);
}
function ll(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function w9(t, e) {
  return -1 * ll(t, e);
}
var ul = br.exports, E9 = ul, T9 = S9;
function S9(t, e, n) {
  return E9(t, e, null, n);
}
var N9 = {
  parallel: g9,
  serial: T9,
  serialOrdered: ul
}, pl = Object, O9 = Error, A9 = EvalError, _9 = RangeError, L9 = ReferenceError, D9 = SyntaxError, Li = TypeError, C9 = URIError, R9 = Math.abs, P9 = Math.floor, I9 = Math.max, k9 = Math.min, F9 = Math.pow, q9 = Math.round, M9 = Number.isNaN || function(e) {
  return e !== e;
}, j9 = M9, U9 = function(e) {
  return j9(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, B9 = Object.getOwnPropertyDescriptor, zn = B9;
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
var $9 = Hn, fo, Zs;
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
function V9() {
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
var z9 = "Function.prototype.bind called on incompatible ", H9 = Object.prototype.toString, X9 = Math.max, G9 = "[object Function]", ra = function(e, n) {
  for (var r = [], o = 0; o < e.length; o += 1)
    r[o] = e[o];
  for (var i = 0; i < n.length; i += 1)
    r[i + e.length] = n[i];
  return r;
}, W9 = function(e, n) {
  for (var r = [], o = n, i = 0; o < e.length; o += 1, i += 1)
    r[i] = e[o];
  return r;
}, Y9 = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, K9 = function(e) {
  var n = this;
  if (typeof n != "function" || H9.apply(n) !== G9)
    throw new TypeError(z9 + n);
  for (var r = W9(arguments, 1), o, i = function() {
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
  }, s = X9(0, n.length - r.length), a = [], c = 0; c < s; c++)
    a[c] = "$" + c;
  if (o = Function("binder", "return function (" + Y9(a, ",") + "){ return binder.apply(this,arguments); }")(i), n.prototype) {
    var d = function() {
    };
    d.prototype = n.prototype, o.prototype = new d(), d.prototype = null;
  }
  return o;
}, J9 = K9, xr = Function.prototype.bind || J9, yo, oa;
function Di() {
  return oa || (oa = 1, yo = Function.prototype.call), yo;
}
var vo, ia;
function gl() {
  return ia || (ia = 1, vo = Function.prototype.apply), vo;
}
var bo, sa;
function Q9() {
  return sa || (sa = 1, bo = typeof Reflect < "u" && Reflect && Reflect.apply), bo;
}
var xo, aa;
function Z9() {
  if (aa) return xo;
  aa = 1;
  var t = xr, e = gl(), n = Di(), r = Q9();
  return xo = r || t.call(n, e), xo;
}
var wo, ca;
function eG() {
  if (ca) return wo;
  ca = 1;
  var t = xr, e = Li, n = Di(), r = Z9();
  return wo = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new e("a function is required");
    return r(t, n, i);
  }, wo;
}
var Eo, la;
function tG() {
  if (la) return Eo;
  la = 1;
  var t = eG(), e = dl, n;
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
function nG() {
  if (ua) return To;
  ua = 1;
  var t = ml(), e = hl(), n = tG();
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
var rG = Function.prototype.call, oG = Object.prototype.hasOwnProperty, iG = xr, Ci = iG.call(rG, oG), X, sG = pl, aG = O9, cG = A9, lG = _9, uG = L9, en = D9, Wt = Li, pG = C9, dG = R9, fG = P9, mG = I9, hG = k9, gG = F9, yG = q9, vG = U9, yl = Function, So = function(t) {
  try {
    return yl('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, mn = dl, bG = $9, No = function() {
  throw new Wt();
}, xG = mn ? function() {
  try {
    return arguments.callee, No;
  } catch {
    try {
      return mn(arguments, "callee").get;
    } catch {
      return No;
    }
  }
}() : No, Bt = V9()(), ge = nG(), wG = hl(), EG = ml(), vl = gl(), An = Di(), Vt = {}, TG = typeof Uint8Array > "u" || !ge ? X : ge(Uint8Array), Rt = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? X : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? X : ArrayBuffer,
  "%ArrayIteratorPrototype%": Bt && ge ? ge([][Symbol.iterator]()) : X,
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
  "%Error%": aG,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": cG,
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
  "%IteratorPrototype%": Bt && ge ? ge(ge([][Symbol.iterator]())) : X,
  "%JSON%": typeof JSON == "object" ? JSON : X,
  "%Map%": typeof Map > "u" ? X : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Bt || !ge ? X : ge((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": sG,
  "%Object.getOwnPropertyDescriptor%": mn,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? X : Promise,
  "%Proxy%": typeof Proxy > "u" ? X : Proxy,
  "%RangeError%": lG,
  "%ReferenceError%": uG,
  "%Reflect%": typeof Reflect > "u" ? X : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? X : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Bt || !ge ? X : ge((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? X : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Bt && ge ? ge(""[Symbol.iterator]()) : X,
  "%Symbol%": Bt ? Symbol : X,
  "%SyntaxError%": en,
  "%ThrowTypeError%": xG,
  "%TypedArray%": TG,
  "%TypeError%": Wt,
  "%Uint8Array%": typeof Uint8Array > "u" ? X : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? X : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? X : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? X : Uint32Array,
  "%URIError%": pG,
  "%WeakMap%": typeof WeakMap > "u" ? X : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? X : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? X : WeakSet,
  "%Function.prototype.call%": An,
  "%Function.prototype.apply%": vl,
  "%Object.defineProperty%": bG,
  "%Object.getPrototypeOf%": wG,
  "%Math.abs%": dG,
  "%Math.floor%": fG,
  "%Math.max%": mG,
  "%Math.min%": hG,
  "%Math.pow%": gG,
  "%Math.round%": yG,
  "%Math.sign%": vG,
  "%Reflect.getPrototypeOf%": EG
};
if (ge)
  try {
    null.error;
  } catch (t) {
    var SG = ge(ge(t));
    Rt["%Error.prototype%"] = SG;
  }
var NG = function t(e) {
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
    o && ge && (n = ge(o.prototype));
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
}, _n = xr, tr = Ci, OG = _n.call(An, Array.prototype.concat), AG = _n.call(vl, Array.prototype.splice), da = _n.call(An, String.prototype.replace), nr = _n.call(An, String.prototype.slice), _G = _n.call(An, RegExp.prototype.exec), LG = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, DG = /\\(\\)?/g, CG = function(e) {
  var n = nr(e, 0, 1), r = nr(e, -1);
  if (n === "%" && r !== "%")
    throw new en("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new en("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return da(e, LG, function(i, s, a, c) {
    o[o.length] = a ? da(c, DG, "$1") : s || i;
  }), o;
}, RG = function(e, n) {
  var r = e, o;
  if (tr(pa, r) && (o = pa[r], r = "%" + o[0] + "%"), tr(Rt, r)) {
    var i = Rt[r];
    if (i === Vt && (i = NG(r)), typeof i > "u" && !n)
      throw new Wt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: i
    };
  }
  throw new en("intrinsic " + e + " does not exist!");
}, PG = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new Wt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Wt('"allowMissing" argument must be a boolean');
  if (_G(/^%?[^%]*%?$/, e) === null)
    throw new en("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = CG(e), o = r.length > 0 ? r[0] : "", i = RG("%" + o + "%", n), s = i.name, a = i.value, c = !1, d = i.alias;
  d && (o = d[0], AG(r, OG([0, 1], d)));
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
        var x = mn(a, p);
        u = !!x, u && "get" in x && !("originalValue" in x.get) ? a = x.get : a = a[p];
      } else
        u = tr(a, p), a = a[p];
      u && !c && (Rt[s] = a);
    }
  }
  return a;
}, Oo, fa;
function IG() {
  if (fa) return Oo;
  fa = 1;
  var t = fl();
  return Oo = function() {
    return t() && !!Symbol.toStringTag;
  }, Oo;
}
var kG = PG, ma = kG("%Object.defineProperty%", !0), FG = IG()(), qG = Ci, MG = Li, kn = FG ? Symbol.toStringTag : null, jG = function(e, n) {
  var r = arguments.length > 2 && !!arguments[2] && arguments[2].force, o = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
  if (typeof r < "u" && typeof r != "boolean" || typeof o < "u" && typeof o != "boolean")
    throw new MG("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
  kn && (r || !qG(e, kn)) && (ma ? ma(e, kn, {
    configurable: !o,
    enumerable: !1,
    value: n,
    writable: !1
  }) : e[kn] = n);
}, UG = function(t, e) {
  return Object.keys(e).forEach(function(n) {
    t[n] = t[n] || e[n];
  }), t;
}, Ri = Q6, BG = bt, Ao = te, $G = lr, VG = ur, zG = Tn.parse, HG = ui, XG = Le.Stream, GG = bc, _o = rl, WG = N9, YG = jG, vt = Ci, Go = UG;
function K(t) {
  if (!(this instanceof K))
    return new K(t);
  this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], Ri.call(this), t = t || {};
  for (var e in t)
    this[e] = t[e];
}
BG.inherits(K, Ri);
K.LINE_BREAK = `\r
`;
K.DEFAULT_CONTENT_TYPE = "application/octet-stream";
K.prototype.append = function(t, e, n) {
  n = n || {}, typeof n == "string" && (n = { filename: n });
  var r = Ri.prototype.append.bind(this);
  if ((typeof e == "number" || e == null) && (e = String(e)), Array.isArray(e)) {
    this._error(new Error("Arrays are not supported."));
    return;
  }
  var o = this._multiPartHeader(t, e, n), i = this._multiPartFooter();
  r(o), r(e), r(i), this._trackLength(o, e, n);
};
K.prototype._trackLength = function(t, e, n) {
  var r = 0;
  n.knownLength != null ? r += Number(n.knownLength) : Buffer.isBuffer(e) ? r = e.length : typeof e == "string" && (r = Buffer.byteLength(e)), this._valueLength += r, this._overheadLength += Buffer.byteLength(t) + K.LINE_BREAK.length, !(!e || !e.path && !(e.readable && vt(e, "httpVersion")) && !(e instanceof XG)) && (n.knownLength || this._valuesToMeasure.push(e));
};
K.prototype._lengthRetriever = function(t, e) {
  vt(t, "fd") ? t.end != null && t.end != 1 / 0 && t.start != null ? e(null, t.end + 1 - (t.start ? t.start : 0)) : HG.stat(t.path, function(n, r) {
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
  this._boundary = "--------------------------" + GG.randomBytes(12).toString("hex");
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
  WG.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, r) {
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
  return typeof t == "string" ? (t = zG(t), r = Go({
    port: t.port,
    path: t.pathname,
    host: t.hostname,
    protocol: t.protocol
  }, o)) : (r = Go(t, o), r.port || (r.port = r.protocol === "https:" ? 443 : 80)), r.headers = this.getHeaders(t.headers), r.protocol === "https:" ? n = VG.request(r) : n = $G.request(r), this.getLength((function(i, s) {
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
K.prototype._error = function(t) {
  this.error || (this.error = t, this.pause(), this.emit("error", t));
};
K.prototype.toString = function() {
  return "[object FormData]";
};
YG(K.prototype, "FormData");
var KG = K;
const bl = /* @__PURE__ */ on(KG);
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
function JG(t) {
  return N.isArray(t) && !t.some(Wo);
}
const QG = N.toFlatObject(N, {}, null, function(e) {
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
  function l(f, x, b) {
    let S = f;
    if (f && !b && typeof f == "object") {
      if (N.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), f = JSON.stringify(f);
      else if (N.isArray(f) && JG(f) || (N.isFileList(f) || N.endsWith(x, "[]")) && (S = N.toArray(f)))
        return x = xl(x), S.forEach(function(y, E) {
          !(N.isUndefined(y) || y === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ha([x], E, i) : s === null ? x : x + "[]",
            d(y)
          );
        }), !1;
    }
    return Wo(f) ? !0 : (e.append(ha(b, x, i), d(f)), !1);
  }
  const u = [], p = Object.assign(QG, {
    defaultVisitor: l,
    convertValue: d,
    isVisitable: Wo
  });
  function h(f, x) {
    if (!N.isUndefined(f)) {
      if (u.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      u.push(f), N.forEach(f, function(S, w) {
        (!(N.isUndefined(S) || S === null) && o.call(
          e,
          S,
          N.isString(w) ? w.trim() : w,
          x,
          p
        )) === !0 && h(S, x ? x.concat(w) : [w]);
      }), u.pop();
    }
  }
  if (!N.isObject(t))
    throw new TypeError("data must be an object");
  return h(t), e;
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
function ZG(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Pi(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || ZG, o = N.isFunction(n) ? {
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
}, e7 = Tn.URLSearchParams, Lo = "abcdefghijklmnopqrstuvwxyz", va = "0123456789", Tl = {
  DIGIT: va,
  ALPHA: Lo,
  ALPHA_DIGIT: Lo + Lo.toUpperCase() + va
}, t7 = (t = 16, e = Tl.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e, o = new Uint32Array(t);
  bc.randomFillSync(o);
  for (let i = 0; i < t; i++)
    n += e[o[i] % r];
  return n;
}, n7 = {
  isNode: !0,
  classes: {
    URLSearchParams: e7,
    FormData: bl,
    Blob: typeof Blob < "u" && Blob || null
  },
  ALPHABET: Tl,
  generateString: t7,
  protocols: ["http", "https", "file", "data"]
}, Ii = typeof window < "u" && typeof document < "u", Yo = typeof navigator == "object" && navigator || void 0, r7 = Ii && (!Yo || ["ReactNative", "NativeScript", "NS"].indexOf(Yo.product) < 0), o7 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", i7 = Ii && window.location.href || "http://localhost", s7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ii,
  hasStandardBrowserEnv: r7,
  hasStandardBrowserWebWorkerEnv: o7,
  navigator: Yo,
  origin: i7
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...s7,
  ...n7
};
function a7(t, e) {
  return wr(t, new ae.classes.URLSearchParams(), {
    visitor: function(n, r, o, i) {
      return ae.isNode && N.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function c7(t) {
  return N.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function l7(t) {
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
    return s = !s && N.isArray(o) ? o.length : s, c ? (N.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !N.isObject(o[s])) && (o[s] = []), e(n, r, o[s], i) && N.isArray(o[s]) && (o[s] = l7(o[s])), !a);
  }
  if (N.isFormData(t) && N.isFunction(t.entries)) {
    const n = {};
    return N.forEachEntry(t, (r, o) => {
      e(c7(r), o, n, 0);
    }), n;
  }
  return null;
}
function u7(t, e, n) {
  if (N.isString(t))
    try {
      return (e || JSON.parse)(t), N.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Ln = {
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
        return a7(e, this.formSerializer).toString();
      if ((a = N.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return wr(
          a ? { "files[]": e } : e,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), u7(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Ln.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
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
    FormData: ae.classes.FormData,
    Blob: ae.classes.Blob
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
  Ln.headers[t] = {};
});
const p7 = N.toObjectSet([
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
]), d7 = (t) => {
  const e = {};
  let n, r, o;
  return t && t.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || e[n] && p7[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, ba = Symbol("internals");
function ln(t) {
  return t && String(t).trim().toLowerCase();
}
function Xn(t) {
  return t === !1 || t == null ? t : N.isArray(t) ? t.map(Xn) : String(t);
}
function f7(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const m7 = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Do(t, e, n, r, o) {
  if (N.isFunction(r))
    return r.call(this, e, n);
  if (o && (e = n), !!N.isString(e)) {
    if (N.isString(r))
      return e.indexOf(r) !== -1;
    if (N.isRegExp(r))
      return r.test(e);
  }
}
function h7(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function g7(t, e) {
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
    else if (N.isString(e) && (e = e.trim()) && !m7(e))
      s(d7(e), n);
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
          return f7(o);
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
      return !!(r && this[r] !== void 0 && (!n || Do(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = ln(s), s) {
        const a = N.findKey(r, s);
        a && (!n || Do(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return N.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!e || Do(this, this[i], i, e, !0)) && (delete this[i], o = !0);
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
      const a = e ? h7(i) : String(i).trim();
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
      const a = ln(s);
      r[a] || (g7(o, s), r[a] = !0);
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
  const n = this || Ln, r = e || n, o = Te.from(r.headers);
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
function y7(t) {
  return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function v7(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ki(t, e, n) {
  let r = !y7(e);
  return t && (r || n == !1) ? v7(t, e) : e;
}
var Ol = {}, b7 = Tn.parse, x7 = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}, w7 = String.prototype.endsWith || function(t) {
  return t.length <= this.length && this.indexOf(t, this.length - t.length) !== -1;
};
function E7(t) {
  var e = typeof t == "string" ? b7(t) : t || {}, n = e.protocol, r = e.host, o = e.port;
  if (typeof r != "string" || !r || typeof n != "string" || (n = n.split(":", 1)[0], r = r.replace(/:\d*$/, ""), o = parseInt(o) || x7[n] || 0, !T7(r, o)))
    return "";
  var i = Gt("npm_config_" + n + "_proxy") || Gt(n + "_proxy") || Gt("npm_config_proxy") || Gt("all_proxy");
  return i && i.indexOf("://") === -1 && (i = n + "://" + i), i;
}
function T7(t, e) {
  var n = (Gt("npm_config_no_proxy") || Gt("no_proxy")).toLowerCase();
  return n ? n === "*" ? !1 : n.split(/[,\s]/).every(function(r) {
    if (!r)
      return !0;
    var o = r.match(/^(.+):(\d+)$/), i = o ? o[1] : r, s = o ? parseInt(o[2]) : 0;
    return s && s !== e ? !0 : /^[.*]/.test(i) ? (i.charAt(0) === "*" && (i = i.slice(1)), !w7.call(t, i)) : t !== i;
  }) : !0;
}
function Gt(t) {
  return process.env[t.toLowerCase()] || process.env[t.toUpperCase()] || "";
}
Ol.getProxyForUrl = E7;
var Fi = { exports: {} }, Fn = { exports: {} }, qn = { exports: {} }, Ro, xa;
function S7() {
  if (xa) return Ro;
  xa = 1;
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
var Po, wa;
function Al() {
  if (wa) return Po;
  wa = 1;
  function t(e) {
    r.debug = r, r.default = r, r.coerce = d, r.disable = a, r.enable = i, r.enabled = c, r.humanize = S7(), r.destroy = l, Object.keys(e).forEach((u) => {
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
      let p, h = null, f, x;
      function b(...S) {
        if (!b.enabled)
          return;
        const w = b, y = Number(/* @__PURE__ */ new Date()), E = y - (p || y);
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
      return b.namespace = u, b.useColors = r.useColors(), b.color = r.selectColor(u), b.extend = o, b.destroy = r.destroy, Object.defineProperty(b, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => h !== null ? h : (f !== r.namespaces && (f = r.namespaces, x = r.enabled(u)), x),
        set: (S) => {
          h = S;
        }
      }), typeof r.init == "function" && r.init(b), b;
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
      let h = 0, f = 0, x = -1, b = 0;
      for (; h < u.length; )
        if (f < p.length && (p[f] === u[h] || p[f] === "*"))
          p[f] === "*" ? (x = f, b = h, f++) : (h++, f++);
        else if (x !== -1)
          f = x + 1, b++, h = b;
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
var Ea;
function N7() {
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
    t.exports = Al()(e);
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
var Mn = { exports: {} }, Io, Ta;
function O7() {
  return Ta || (Ta = 1, Io = (t, e = process.argv) => {
    const n = t.startsWith("-") ? "" : t.length === 1 ? "-" : "--", r = e.indexOf(n + t), o = e.indexOf("--");
    return r !== -1 && (o === -1 || r < o);
  }), Io;
}
var ko, Sa;
function A7() {
  if (Sa) return ko;
  Sa = 1;
  const t = Yu, e = Ec, n = O7(), { env: r } = process;
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
var Na;
function _7() {
  return Na || (Na = 1, function(t, e) {
    const n = Ec, r = bt;
    e.init = l, e.log = a, e.formatArgs = i, e.save = c, e.load = d, e.useColors = o, e.destroy = r.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), e.colors = [6, 2, 3, 4, 5, 1];
    try {
      const p = A7();
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
      const f = h.substring(6).toLowerCase().replace(/_([a-z])/g, (b, S) => S.toUpperCase());
      let x = process.env[h];
      return /^(yes|on|true|enabled)$/i.test(x) ? x = !0 : /^(no|off|false|disabled)$/i.test(x) ? x = !1 : x === "null" ? x = null : x = Number(x), p[f] = x, p;
    }, {});
    function o() {
      return "colors" in e.inspectOpts ? !!e.inspectOpts.colors : n.isatty(process.stderr.fd);
    }
    function i(p) {
      const { namespace: h, useColors: f } = this;
      if (f) {
        const x = this.color, b = "\x1B[3" + (x < 8 ? x : "8;5;" + x), S = `  ${b};1m${h} \x1B[0m`;
        p[0] = S + p[0].split(`
`).join(`
` + S), p.push(b + "m+" + t.exports.humanize(this.diff) + "\x1B[0m");
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
    t.exports = Al()(e);
    const { formatters: u } = t.exports;
    u.o = function(p) {
      return this.inspectOpts.colors = this.useColors, r.inspect(p, this.inspectOpts).split(`
`).map((h) => h.trim()).join(" ");
    }, u.O = function(p) {
      return this.inspectOpts.colors = this.useColors, r.inspect(p, this.inspectOpts);
    };
  }(Mn, Mn.exports)), Mn.exports;
}
var Oa;
function L7() {
  return Oa || (Oa = 1, typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? Fn.exports = N7() : Fn.exports = _7()), Fn.exports;
}
var un, D7 = function() {
  if (!un) {
    try {
      un = L7()("follow-redirects");
    } catch {
    }
    typeof un != "function" && (un = function() {
    });
  }
  un.apply(null, arguments);
}, Dn = Tn, hn = Dn.URL, C7 = lr, R7 = ur, qi = Le.Writable, Mi = wc, _l = D7;
(function() {
  var e = typeof process < "u", n = typeof window < "u" && typeof document < "u", r = qt(Error.captureStackTrace);
  !e && (n || !r) && console.warn("The follow-redirects package should be excluded from browser builds.");
})();
var ji = !1;
try {
  Mi(new hn(""));
} catch (t) {
  ji = t.code === "ERR_INVALID_URL";
}
var P7 = [
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
], Ui = ["abort", "aborted", "connect", "error", "socket", "timeout"], Bi = /* @__PURE__ */ Object.create(null);
Ui.forEach(function(t) {
  Bi[t] = function(e, n, r) {
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
), I7 = Cn(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  Jo
), k7 = Cn(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
), F7 = Cn(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
), q7 = qi.prototype.destroy || Dl;
function je(t, e) {
  qi.call(this), this._sanitizeOptions(t), this._options = t, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], e && this.on("response", e);
  var n = this;
  this._onNativeResponse = function(r) {
    try {
      n._processResponse(r);
    } catch (o) {
      n.emit("error", o instanceof Jo ? o : new Jo({ cause: o }));
    }
  }, this._performRequest();
}
je.prototype = Object.create(qi.prototype);
je.prototype.abort = function() {
  Vi(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
};
je.prototype.destroy = function(t) {
  return Vi(this._currentRequest, t), q7.call(this, t), this;
};
je.prototype.write = function(t, e, n) {
  if (this._ending)
    throw new F7();
  if (!Pt(t) && !U7(t))
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  if (qt(e) && (n = e, e = null), t.length === 0) {
    n && n();
    return;
  }
  this._requestBodyLength + t.length <= this._options.maxBodyLength ? (this._requestBodyLength += t.length, this._requestBodyBuffers.push({ data: t, encoding: e }), this._currentRequest.write(t, e, n)) : (this.emit("error", new k7()), this.abort());
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
  for (var o of Ui)
    r.on(o, Bi[o]);
  if (this._currentUrl = /^\//.test(this._options.path) ? Dn.format(this._options) : (
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
  if (Vi(this._currentRequest), t.destroy(), ++this._redirectCount > this._options.maxRedirects)
    throw new I7();
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
  var s = Fo(/^host$/i, this._options.headers), a = $i(this._currentUrl), c = s || a.host, d = /^\w+:/.test(n) ? this._currentUrl : Dn.format(Object.assign(a, { host: c })), l = M7(n, d);
  if (_l("redirecting to", l.href), this._isRedirect = !0, Qo(l, this._options), (l.protocol !== a.protocol && l.protocol !== "https:" || l.host !== c && !j7(l.host, c)) && Fo(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers), qt(o)) {
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
      return B7(d) ? d = Qo(d) : Pt(d) ? d = Qo($i(d)) : (u = l, l = Cl(d), d = { protocol: o }), qt(l) && (u = l, l = null), l = Object.assign({
        maxRedirects: e.maxRedirects,
        maxBodyLength: e.maxBodyLength
      }, d, l), l.nativeProtocols = n, !Pt(l.host) && !Pt(l.hostname) && (l.hostname = "::1"), Mi.equal(l.protocol, o, "protocol mismatch"), _l("options", l), new je(l, u);
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
function Dl() {
}
function $i(t) {
  var e;
  if (ji)
    e = new hn(t);
  else if (e = Cl(Dn.parse(t)), !Pt(e.protocol))
    throw new Ko({ input: t });
  return e;
}
function M7(t, e) {
  return ji ? new hn(t, e) : $i(Dn.resolve(e, t));
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
  for (var r of P7)
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
function Vi(t, e) {
  for (var n of Ui)
    t.removeListener(n, Bi[n]);
  t.on("error", Dl), t.destroy(e);
}
function j7(t, e) {
  Mi(Pt(t) && Pt(e));
  var n = t.length - e.length - 1;
  return n > 0 && t[n] === "." && t.endsWith(e);
}
function Pt(t) {
  return typeof t == "string" || t instanceof String;
}
function qt(t) {
  return typeof t == "function";
}
function U7(t) {
  return typeof t == "object" && "length" in t;
}
function B7(t) {
  return hn && t instanceof hn;
}
Fi.exports = Ll({ http: C7, https: R7 });
Fi.exports.wrap = Ll;
var $7 = Fi.exports;
const V7 = /* @__PURE__ */ on($7), rr = "1.13.5";
function Rl(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
const z7 = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function H7(t, e, n) {
  const r = n && n.Blob || ae.classes.Blob, o = Rl(t);
  if (e === void 0 && r && (e = !0), o === "data") {
    t = o.length ? t.slice(o.length + 1) : t;
    const i = z7.exec(t);
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
class Aa extends Le.Transform {
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
      const x = Buffer.byteLength(h);
      o.bytesSeen += x, o.bytes += x, o.isCaptured && this.emit("progress", o.bytesSeen), this.push(h) ? process.nextTick(f) : o.onReadCallback = () => {
        o.onReadCallback = null, process.nextTick(f);
      };
    }, p = (h, f) => {
      const x = Buffer.byteLength(h);
      let b = null, S = s, w, y = 0;
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
      S && x > S && x - S > l && (b = h.subarray(S), h = h.subarray(0, S)), u(h, b ? () => {
        process.nextTick(f, null, b);
      } : f);
    };
    p(e, function h(f, x) {
      if (f)
        return r(f);
      x ? p(x, h) : r(null);
    });
  }
}
const { asyncIterator: _a } = Symbol, Pl = async function* (t) {
  t.stream ? yield* t.stream() : t.arrayBuffer ? yield await t.arrayBuffer() : t[_a] ? yield* t[_a]() : yield t;
}, X7 = ae.ALPHABET.ALPHA_DIGIT + "-_", gn = typeof TextEncoder == "function" ? new TextEncoder() : new bt.TextEncoder(), At = `\r
`, G7 = gn.encode(At), W7 = 2;
class Y7 {
  constructor(e, n) {
    const { escapeName: r } = this.constructor, o = N.isString(n);
    let i = `Content-Disposition: form-data; name="${r(e)}"${!o && n.name ? `; filename="${r(n.name)}"` : ""}${At}`;
    o ? n = gn.encode(String(n).replace(/\r?\n|\r\n?/g, At)) : i += `Content-Type: ${n.type || "application/octet-stream"}${At}`, this.headers = gn.encode(i + At), this.contentLength = o ? n.byteLength : n.size, this.size = this.headers.byteLength + this.contentLength + W7, this.name = e, this.value = n;
  }
  async *encode() {
    yield this.headers;
    const { value: e } = this;
    N.isTypedArray(e) ? yield e : yield* Pl(e), yield G7;
  }
  static escapeName(e) {
    return String(e).replace(/[\r\n"]/g, (n) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[n]);
  }
}
const K7 = (t, e, n) => {
  const {
    tag: r = "form-data-boundary",
    size: o = 25,
    boundary: i = r + "-" + ae.generateString(o, X7)
  } = n || {};
  if (!N.isFormData(t))
    throw TypeError("FormData instance required");
  if (i.length < 1 || i.length > 70)
    throw Error("boundary must be 10-70 characters long");
  const s = gn.encode("--" + i + At), a = gn.encode("--" + i + "--" + At);
  let c = a.byteLength;
  const d = Array.from(t.entries()).map(([u, p]) => {
    const h = new Y7(u, p);
    return c += h.size, h;
  });
  c += s.byteLength * d.length, c = N.toFiniteNumber(c);
  const l = {
    "Content-Type": `multipart/form-data; boundary=${i}`
  };
  return Number.isFinite(c) && (l["Content-Length"] = c), e && e(l), Wu.from(async function* () {
    for (const u of d)
      yield s, yield* u.encode();
    yield a;
  }());
};
class J7 extends Le.Transform {
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
const Q7 = (t, e) => N.isAsyncFn(t) ? function(...n) {
  const r = n.pop();
  t.apply(this, n).then((o) => {
    try {
      e ? r(null, ...e(o)) : r(null, o);
    } catch (i) {
      r(i);
    }
  }, r);
} : t;
function Z7(t, e) {
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
function e5(t, e) {
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
  const o = Z7(50, 250);
  return e5((i) => {
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
function t5(t) {
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
}, n5 = {
  flush: yt.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: yt.constants.BROTLI_OPERATION_FLUSH
}, Da = N.isFunction(yt.createBrotliDecompress), { http: r5, https: o5 } = V7, i5 = /https:?/, Ca = ae.protocols.map((t) => t + ":"), Ra = (t, [e, n]) => (t.on("end", n).on("error", n), e);
class s5 {
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
    const o = xc.connect(e, n);
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
const a5 = new s5();
function c5(t, e) {
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
const l5 = typeof process < "u" && N.kindOf(process) === "process", u5 = (t) => new Promise((e, n) => {
  let r, o;
  const i = (c, d) => {
    o || (o = !0, r && r(c, d));
  }, s = (c) => {
    i(c), e(c);
  }, a = (c) => {
    i(c, !0), n(c);
  };
  t(s, a, (c) => r = c).catch(a);
}), p5 = ({ address: t, family: e }) => {
  if (!N.isString(t))
    throw TypeError("address must be a string");
  return {
    address: t,
    family: e || (t.indexOf(".") < 0 ? 6 : 4)
  };
}, Pa = (t, e) => p5(N.isObject(t) ? t : { address: t, family: e }), d5 = {
  request(t, e) {
    const n = t.protocol + "//" + t.hostname + ":" + (t.port || (t.protocol === "https:" ? 443 : 80)), { http2Options: r, headers: o } = t, i = a5.getSession(n, r), {
      HTTP2_HEADER_SCHEME: s,
      HTTP2_HEADER_METHOD: a,
      HTTP2_HEADER_PATH: c,
      HTTP2_HEADER_STATUS: d
    } = xc.constants, l = {
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
}, f5 = l5 && function(e) {
  return u5(async function(r, o, i) {
    let { data: s, lookup: a, family: c, httpVersion: d = 1, http2Options: l } = e;
    const { responseType: u, responseEncoding: p } = e, h = e.method.toUpperCase();
    let f, x = !1, b;
    if (d = +d, Number.isNaN(d))
      throw TypeError(`Invalid protocol version: '${e.httpVersion}' is not a number`);
    if (d !== 1 && d !== 2)
      throw TypeError(`Unsupported protocol version '${d}'`);
    const S = d === 2;
    if (a) {
      const V = Q7(a, (U) => N.isArray(U) ? U : [U]);
      a = (U, J, Ne) => {
        V(U, J, (ne, Oe, Ke) => {
          if (ne)
            return Ne(ne);
          const v = N.isArray(Oe) ? Oe.map((g) => Pa(g)) : [Pa(Oe, Ke)];
          J.all ? Ne(ne, v) : Ne(ne, v[0].address, v[0].family);
        });
      };
    }
    const w = new Xu();
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
      const { data: J } = V;
      if (J instanceof Le.Readable || J instanceof Le.Duplex) {
        const Ne = Le.finished(J, () => {
          Ne(), E();
        });
      } else
        E();
    });
    const A = ki(e.baseURL, e.url, e.allowAbsoluteUrls), D = new URL(A, ae.hasBrowserEnv ? ae.origin : void 0), P = D.protocol || Ca[0];
    if (P === "data:") {
      if (e.maxContentLength > -1) {
        const U = String(e.url || A || "");
        if (t5(U) > e.maxContentLength)
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
        V = H7(e.url, u === "blob", {
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
    if (Ca.indexOf(P) === -1)
      return o(new F(
        "Unsupported protocol " + P,
        F.ERR_BAD_REQUEST,
        e
      ));
    const O = Te.from(e.headers).normalize();
    O.set("User-Agent", "axios/" + rr, !1);
    const { onUploadProgress: m, onDownloadProgress: _ } = e, L = e.maxRate;
    let I, j;
    if (N.isSpecCompliantForm(s)) {
      const V = O.getContentType(/boundary=([-_\w\d]{10,70})/i);
      s = K7(s, (U) => {
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
      s.size && O.setContentType(s.type || "application/octet-stream"), O.setContentLength(s.size || 0), s = Le.Readable.from(Pl(s));
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
    N.isArray(L) ? (I = L[0], j = L[1]) : I = j = L, s && (m || I) && (N.isStream(s) || (s = Le.Readable.from(s, { objectMode: !1 })), s = Le.pipeline([s, new Aa({
      maxRate: N.toFiniteNumber(I)
    })], N.noop), m && s.on("progress", Ra(
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
    if (!$ && D.username) {
      const V = D.username, U = D.password;
      $ = V + ":" + U;
    }
    $ && O.delete("authorization");
    let q;
    try {
      q = Pi(
        D.pathname + D.search,
        e.params,
        e.paramsSerializer
      ).replace(/^\?/, "");
    } catch (V) {
      const U = new Error(V.message);
      return U.config = e, U.url = e.url, U.exists = !0, o(U);
    }
    O.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (Da ? ", br" : ""),
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
      beforeRedirect: c5,
      beforeRedirects: {},
      http2Options: l
    };
    !N.isUndefined(a) && (k.lookup = a), e.socketPath ? k.socketPath = e.socketPath : (k.hostname = D.hostname.startsWith("[") ? D.hostname.slice(1, -1) : D.hostname, k.port = D.port, Il(k, e.proxy, P + "//" + D.hostname + (D.port ? ":" + D.port : "") + k.path));
    let Y;
    const W = i5.test(k.protocol);
    if (k.agent = W ? e.httpsAgent : e.httpAgent, S ? Y = d5 : e.transport ? Y = e.transport : e.maxRedirects === 0 ? Y = W ? ur : lr : (e.maxRedirects && (k.maxRedirects = e.maxRedirects), e.beforeRedirect && (k.beforeRedirects.config = e.beforeRedirect), Y = W ? o5 : r5), e.maxBodyLength > -1 ? k.maxBodyLength = e.maxBodyLength : k.maxBodyLength = 1 / 0, e.insecureHTTPParser && (k.insecureHTTPParser = e.insecureHTTPParser), b = Y.request(k, function(U) {
      if (b.destroyed) return;
      const J = [U], Ne = N.toFiniteNumber(U.headers["content-length"]);
      if (_ || j) {
        const v = new Aa({
          maxRate: N.toFiniteNumber(j)
        });
        _ && v.on("progress", Ra(
          v,
          or(
            Ne,
            tn(ir(_), !0, 3)
          )
        )), J.push(v);
      }
      let ne = U;
      const Oe = U.req || b;
      if (e.decompress !== !1 && U.headers["content-encoding"])
        switch ((h === "HEAD" || U.statusCode === 204) && delete U.headers["content-encoding"], (U.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            J.push(yt.createUnzip(La)), delete U.headers["content-encoding"];
            break;
          case "deflate":
            J.push(new J7()), J.push(yt.createUnzip(La)), delete U.headers["content-encoding"];
            break;
          case "br":
            Da && (J.push(yt.createBrotliDecompress(n5)), delete U.headers["content-encoding"]);
        }
      ne = J.length > 1 ? Le.pipeline(J, N.noop) : J[0];
      const Ke = {
        status: U.statusCode,
        statusText: U.statusMessage,
        headers: new Te(U.headers),
        config: e,
        request: Oe
      };
      if (u === "stream")
        Ke.data = ne, Xt(r, o, Ke);
      else {
        const v = [];
        let g = 0;
        ne.on("data", function(T) {
          v.push(T), g += T.length, e.maxContentLength > -1 && g > e.maxContentLength && (x = !0, ne.destroy(), y(new F(
            "maxContentLength size of " + e.maxContentLength + " exceeded",
            F.ERR_BAD_RESPONSE,
            e,
            Oe
          )));
        }), ne.on("aborted", function() {
          if (x)
            return;
          const T = new F(
            "stream has been aborted",
            F.ERR_BAD_RESPONSE,
            e,
            Oe
          );
          ne.destroy(T), o(T);
        }), ne.on("error", function(T) {
          b.destroyed || o(F.from(T, null, e, Oe));
        }), ne.on("end", function() {
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
        ne.destroyed || (ne.emit("error", v), ne.destroy());
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
        let J = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
        const Ne = e.transitional || Er;
        e.timeoutErrorMessage && (J = e.timeoutErrorMessage), y(new F(
          J,
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
      }), s.once("error", (J) => {
        U = !0, b.destroy(J);
      }), s.on("close", () => {
        !V && !U && y(new Ft("Request stream has been aborted", e, b));
      }), s.pipe(b);
    } else
      s && b.write(s), b.end();
  });
}, m5 = ae.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, ae.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(ae.origin),
  ae.navigator && /(msie|trident)/i.test(ae.navigator.userAgent)
) : () => !0, h5 = ae.hasStandardBrowserEnv ? (
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
    headers: (d, l, u) => o(Ia(d), Ia(l), u, !0)
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
const kl = (t) => {
  const e = Mt({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = e;
  if (e.headers = s = Te.from(s), e.url = Pi(ki(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), N.isFormData(n)) {
    if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (N.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), d = ["content-type", "content-length"];
      Object.entries(c).forEach(([l, u]) => {
        d.includes(l.toLowerCase()) && s.set(l, u);
      });
    }
  }
  if (ae.hasStandardBrowserEnv && (r && N.isFunction(r) && (r = r(e)), r || r !== !1 && m5(e.url))) {
    const c = o && i && h5.read(i);
    c && s.set(o, c);
  }
  return e;
}, g5 = typeof XMLHttpRequest < "u", y5 = g5 && function(t) {
  return new Promise(function(n, r) {
    const o = kl(t);
    let i = o.data;
    const s = Te.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: d } = o, l, u, p, h, f;
    function x() {
      h && h(), f && f(), o.cancelToken && o.cancelToken.unsubscribe(l), o.signal && o.signal.removeEventListener("abort", l);
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
      Xt(function(P) {
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
      const A = E && E.message ? E.message : "Network Error", D = new F(A, F.ERR_NETWORK, t, b);
      D.event = E || null, r(D), b = null;
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
    }), N.isUndefined(o.withCredentials) || (b.withCredentials = !!o.withCredentials), a && a !== "json" && (b.responseType = o.responseType), d && ([p, f] = tn(d, !0), b.addEventListener("progress", p)), c && b.upload && ([u, h] = tn(c), b.upload.addEventListener("progress", u), b.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (l = (y) => {
      b && (r(!y || y.type ? new Ft(null, t, b) : y), b.abort(), b = null);
    }, o.cancelToken && o.cancelToken.subscribe(l), o.signal && (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
    const w = Rl(o.url);
    if (w && ae.protocols.indexOf(w) === -1) {
      r(new F("Unsupported protocol " + w + ":", F.ERR_BAD_REQUEST, t));
      return;
    }
    b.send(i || null);
  });
}, v5 = (t, e) => {
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
}, b5 = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + e, yield t.slice(r, o), r = o;
}, x5 = async function* (t, e) {
  for await (const n of w5(t))
    yield* b5(n, e);
}, w5 = async function* (t) {
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
  const o = x5(t, e);
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
}, Fa = 64 * 1024, { isFunction: jn } = N, E5 = (({ Request: t, Response: e }) => ({
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
}, T5 = (t) => {
  t = N.merge.call({
    skipUndefined: !0
  }, E5, t);
  const { fetch: e, Request: n, Response: r } = t, o = e ? jn(e) : typeof fetch == "function", i = jn(n), s = jn(r);
  if (!o)
    return !1;
  const a = o && jn(qa), c = o && (typeof Ma == "function" ? /* @__PURE__ */ ((f) => (x) => f.encode(x))(new Ma()) : async (f) => new Uint8Array(await new n(f).arrayBuffer())), d = i && a && ja(() => {
    let f = !1;
    const x = new n(ae.origin, {
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
  const p = async (f) => {
    if (f == null)
      return 0;
    if (N.isBlob(f))
      return f.size;
    if (N.isSpecCompliantForm(f))
      return (await new n(ae.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (N.isArrayBufferView(f) || N.isArrayBuffer(f))
      return f.byteLength;
    if (N.isURLSearchParams(f) && (f = f + ""), N.isString(f))
      return (await c(f)).byteLength;
  }, h = async (f, x) => {
    const b = N.toFiniteNumber(f.getContentLength());
    return b ?? p(x);
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
      onUploadProgress: D,
      responseType: P,
      headers: O,
      withCredentials: m = "same-origin",
      fetchOptions: _
    } = kl(f), L = e || fetch;
    P = P ? (P + "").toLowerCase() : "text";
    let I = v5([w, y && y.toAbortSignal()], E), j = null;
    const B = I && I.unsubscribe && (() => {
      I.unsubscribe();
    });
    let $;
    try {
      if (D && d && b !== "get" && b !== "head" && ($ = await h(O, S)) !== 0) {
        let U = new n(x, {
          method: "POST",
          body: S,
          duplex: "half"
        }), J;
        if (N.isFormData(S) && (J = U.headers.get("content-type")) && O.setContentType(J), U.body) {
          const [Ne, ne] = or(
            $,
            tn(ir(D))
          );
          S = ka(U.body, Fa, Ne, ne);
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
      let Y = await (i ? L(j, _) : L(x, k));
      const W = l && (P === "stream" || P === "response");
      if (l && (A || W && B)) {
        const U = {};
        ["status", "statusText", "headers"].forEach((Oe) => {
          U[Oe] = Y[Oe];
        });
        const J = N.toFiniteNumber(Y.headers.get("content-length")), [Ne, ne] = A && or(
          J,
          tn(ir(A), !0)
        ) || [];
        Y = new r(
          ka(Y.body, Fa, Ne, () => {
            ne && ne(), B && B();
          }),
          U
        );
      }
      P = P || "text";
      let V = await u[N.findKey(u, P) || "text"](Y, f);
      return !W && B && B(), await new Promise((U, J) => {
        Xt(U, J, {
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
}, S5 = /* @__PURE__ */ new Map(), Fl = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: r, Response: o } = e, i = [
    r,
    o,
    n
  ];
  let s = i.length, a = s, c, d, l = S5;
  for (; a--; )
    c = i[a], d = l.get(c), d === void 0 && l.set(c, d = a ? /* @__PURE__ */ new Map() : T5(e)), l = d;
  return d;
};
Fl();
const zi = {
  http: f5,
  xhr: y5,
  fetch: {
    get: Fl
  }
};
N.forEach(zi, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ua = (t) => `- ${t}`, N5 = (t) => N.isFunction(t) || t === null || t === !1;
function O5(t, e) {
  t = N.isArray(t) ? t : [t];
  const { length: n } = t;
  let r, o;
  const i = {};
  for (let s = 0; s < n; s++) {
    r = t[s];
    let a;
    if (o = r, !N5(r) && (o = zi[(a = String(r)).toLowerCase()], o === void 0))
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
  getAdapter: O5,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: zi
};
function Mo(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Ft(null, t);
}
function Ba(t) {
  return Mo(t), t.headers = Te.from(t.headers), t.data = Co.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ql.getAdapter(t.adapter || Ln.adapter, t)(t).then(function(r) {
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
function A5(t, e, n) {
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
  assertOptions: A5,
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
    const d = [];
    this.interceptors.response.forEach(function(x) {
      d.push(x.fulfilled, x.rejected);
    });
    let l, u = 0, p;
    if (!c) {
      const f = [Ba.bind(this), void 0];
      for (f.unshift(...a), f.push(...d), p = f.length, l = Promise.resolve(n); u < p; )
        l = l.then(f[u++], f[u++]);
      return l;
    }
    p = a.length;
    let h = n;
    for (; u < p; ) {
      const f = a[u++], x = a[u++];
      try {
        h = f(h);
      } catch (b) {
        x.call(this, b);
        break;
      }
    }
    try {
      l = Ba.call(this, h);
    } catch (f) {
      return Promise.reject(f);
    }
    for (u = 0, p = d.length; u < p; )
      l = l.then(d[u++], d[u++]);
    return l;
  }
  getUri(e) {
    e = Mt(this.defaults, e);
    const n = ki(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Pi(n, e.params, e.paramsSerializer);
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
let _5 = class Ml {
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
function L5(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function D5(t) {
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
const se = jl(Ln);
se.Axios = It;
se.CanceledError = Ft;
se.CancelToken = _5;
se.isCancel = Nl;
se.VERSION = rr;
se.toFormData = wr;
se.AxiosError = F;
se.Cancel = se.CanceledError;
se.all = function(e) {
  return Promise.all(e);
};
se.spread = L5;
se.isAxiosError = D5;
se.mergeConfig = Mt;
se.AxiosHeaders = Te;
se.formToJSON = (t) => Sl(N.isHTMLForm(t) ? new FormData(t) : t);
se.getAdapter = ql.getAdapter;
se.HttpStatusCode = Zo;
se.default = se;
const {
  Axios: oQ,
  AxiosError: iQ,
  CanceledError: sQ,
  isCancel: aQ,
  CancelToken: cQ,
  VERSION: lQ,
  all: uQ,
  Cancel: pQ,
  isAxiosError: dQ,
  spread: fQ,
  toFormData: mQ,
  AxiosHeaders: hQ,
  HttpStatusCode: gQ,
  formToJSON: yQ,
  getAdapter: vQ,
  mergeConfig: bQ
} = se;
class C5 {
  constructor() {
    Ue(this, "parser");
    this.parser = new l6();
  }
  async parseFeed(e) {
    try {
      const n = await se.head(e, { timeout: 5e3 }).catch(() => null);
      let r = (n == null ? void 0 : n.headers["content-type"]) || "";
      if (!n) {
        const c = await se.get(e, {
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
const Ul = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", R5 = Ul + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", P5 = "[" + Ul + "][" + R5 + "]*", I5 = new RegExp("^" + P5 + "$");
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
  const e = I5.exec(t);
  return !(e === null || typeof e > "u");
};
function k5(t) {
  return typeof t < "u";
}
const F5 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function q5(t, e) {
  e = Object.assign({}, F5, e);
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
        if (c = c.trim(), c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1), i--), !H5(c)) {
          let u;
          return c.trim().length === 0 ? u = "Invalid space after '<'." : u = "Tag '" + c + "' is an invalid name.", pe("InvalidTag", u, Ae(t, i));
        }
        const d = U5(t, i);
        if (d === !1)
          return pe("InvalidAttr", "Attributes for '" + c + "' have open quote.", Ae(t, i));
        let l = d.value;
        if (i = d.index, l[l.length - 1] === "/") {
          const u = i - l.length;
          l = l.substring(0, l.length - 1);
          const p = Xa(l, e);
          if (p === !0)
            r = !0;
          else
            return pe(p.err.code, p.err.msg, Ae(t, u + p.err.line));
        } else if (a)
          if (d.tagClosed) {
            if (l.trim().length > 0)
              return pe("InvalidTag", "Closing tag '" + c + "' can't have attributes or invalid starting.", Ae(t, s));
            if (n.length === 0)
              return pe("InvalidTag", "Closing tag '" + c + "' has not been opened.", Ae(t, s));
            {
              const u = n.pop();
              if (c !== u.tagName) {
                let p = Ae(t, u.tagStartPos);
                return pe(
                  "InvalidTag",
                  "Expected closing tag '" + u.tagName + "' (opened in line " + p.line + ", col " + p.col + ") instead of closing tag '" + c + "'.",
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
            const u = V5(t, i);
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
const M5 = '"', j5 = "'";
function U5(t, e) {
  let n = "", r = "", o = !1;
  for (; e < t.length; e++) {
    if (t[e] === M5 || t[e] === j5)
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
const B5 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Xa(t, e) {
  const n = Bl(t, B5), r = {};
  for (let o = 0; o < n.length; o++) {
    if (n[o][1].length === 0)
      return pe("InvalidAttr", "Attribute '" + n[o][2] + "' has no space in starting.", pn(n[o]));
    if (n[o][3] !== void 0 && n[o][4] === void 0)
      return pe("InvalidAttr", "Attribute '" + n[o][2] + "' is without value.", pn(n[o]));
    if (n[o][3] === void 0 && !e.allowBooleanAttributes)
      return pe("InvalidAttr", "boolean attribute '" + n[o][2] + "' is not allowed.", pn(n[o]));
    const i = n[o][2];
    if (!z5(i))
      return pe("InvalidAttr", "Attribute '" + i + "' is an invalid name.", pn(n[o]));
    if (!r.hasOwnProperty(i))
      r[i] = 1;
    else
      return pe("InvalidAttr", "Attribute '" + i + "' is repeated.", pn(n[o]));
  }
  return !0;
}
function $5(t, e) {
  let n = /\d/;
  for (t[e] === "x" && (e++, n = /[\da-fA-F]/); e < t.length; e++) {
    if (t[e] === ";")
      return e;
    if (!t[e].match(n))
      break;
  }
  return -1;
}
function V5(t, e) {
  if (e++, t[e] === ";")
    return -1;
  if (t[e] === "#")
    return e++, $5(t, e);
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
function z5(t) {
  return Sr(t);
}
function H5(t) {
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
function pn(t) {
  return t.startIndex + t[1].length;
}
const X5 = {
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
}, G5 = function(t) {
  return Object.assign({}, X5, t);
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
class W5 {
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
const Y5 = /^[-+]?0x[a-fA-F0-9]+$/, K5 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, J5 = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Q5(t, e = {}) {
  if (e = Object.assign({}, J5, e), !t || typeof t != "string") return t;
  let n = t.trim();
  if (e.skipLike !== void 0 && e.skipLike.test(n)) return t;
  if (t === "0") return 0;
  if (e.hex && Y5.test(n))
    return nW(n, 16);
  if (n.includes("e") || n.includes("E"))
    return eW(t, n, e);
  {
    const r = K5.exec(n);
    if (r) {
      const o = r[1] || "", i = r[2];
      let s = tW(r[3]);
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
const Z5 = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function eW(t, e, n) {
  if (!n.eNotation) return t;
  const r = e.match(Z5);
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
function tW(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substring(0, t.length - 1))), t;
}
function nW(t, e) {
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
class rW {
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
    }, this.addExternalEntities = oW, this.parseXml = lW, this.parseTextData = iW, this.resolveNameSpace = sW, this.buildAttributesMap = cW, this.isItStopNode = fW, this.replaceEntitiesValue = pW, this.readStopNodeData = hW, this.saveTextToParentTag = dW, this.addChild = uW, this.ignoreAttributesFn = $l(this.options.ignoreAttributes), this.options.stopNodes && this.options.stopNodes.length > 0) {
      this.stopNodesExact = /* @__PURE__ */ new Set(), this.stopNodesWildcard = /* @__PURE__ */ new Set();
      for (let n = 0; n < this.options.stopNodes.length; n++) {
        const r = this.options.stopNodes[n];
        typeof r == "string" && (r.startsWith("*.") ? this.stopNodesWildcard.add(r.substring(2)) : this.stopNodesExact.add(r));
      }
    }
  }
}
function oW(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n], o = r.replace(/[.\-+*:]/g, "\\.");
    this.lastEntities[r] = {
      regex: new RegExp("&" + o + ";", "g"),
      val: t[r]
    };
  }
}
function iW(t, e, n, r, o, i, s) {
  if (t !== void 0 && (this.options.trimValues && !r && (t = t.trim()), t.length > 0)) {
    s || (t = this.replaceEntitiesValue(t));
    const a = this.options.tagValueProcessor(e, t, n, o, i);
    return a == null ? t : typeof a != typeof t || a !== t ? a : this.options.trimValues ? ti(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? ti(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function sW(t) {
  if (this.options.removeNSPrefix) {
    const e = t.split(":"), n = t.charAt(0) === "/" ? "/" : "";
    if (e[0] === "xmlns")
      return "";
    e.length === 2 && (t = n + e[1]);
  }
  return t;
}
const aW = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function cW(t, e) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const n = Bl(t, aW), r = n.length, o = {};
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
const lW = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const e = new Nt("!xml");
  let n = e, r = "", o = "";
  const i = new W5(this.options.processEntities);
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
          const b = this.options.transformTagName(d);
          u === d && (u = b), d = b;
        }
        n && r && n.tagname !== "!xml" && (r = this.saveTextToParentTag(r, n, o, !1));
        const f = n;
        f && this.options.unpairedTags.indexOf(f.tagname) !== -1 && (n = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), d !== e.tagname && (o += o ? "." + d : d);
        const x = s;
        if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, o, d)) {
          let b = "";
          if (u.length > 0 && u.lastIndexOf("/") === u.length - 1)
            d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), o = o.substr(0, o.length - 1), u = d) : u = u.substr(0, u.length - 1), s = c.closeIndex;
          else if (this.options.unpairedTags.indexOf(d) !== -1)
            s = c.closeIndex;
          else {
            const w = this.readStopNodeData(t, l, h + 1);
            if (!w) throw new Error(`Unexpected end of ${l}`);
            s = w.i, b = w.tagContent;
          }
          const S = new Nt(d);
          d !== u && p && (S[":@"] = this.buildAttributesMap(
            u,
            o
          )), b && (b = this.parseTextData(b, d, o, !0, p, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), S.add(this.options.textNodeName, b), this.addChild(n, S, o, x);
        } else {
          if (u.length > 0 && u.lastIndexOf("/") === u.length - 1) {
            if (d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), o = o.substr(0, o.length - 1), u = d) : u = u.substr(0, u.length - 1), this.options.transformTagName) {
              const S = this.options.transformTagName(d);
              u === d && (u = S), d = S;
            }
            const b = new Nt(d);
            d !== u && p && (b[":@"] = this.buildAttributesMap(u, o)), this.addChild(n, b, o, x), o = o.substr(0, o.lastIndexOf("."));
          } else {
            const b = new Nt(d);
            this.tagsNodeStack.push(n), d !== u && p && (b[":@"] = this.buildAttributesMap(u, o)), this.addChild(n, b, o, x), n = b;
          }
          r = "", s = h;
        }
      }
    else
      r += t[s];
  return e.child;
};
function uW(t, e, n, r) {
  this.options.captureMetaData || (r = void 0);
  const o = this.options.updateTag(e.tagname, n, e[":@"]);
  o === !1 || (typeof o == "string" && (e.tagname = o), t.addChild(e, r));
}
const pW = function(t) {
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
function dW(t, e, n, r) {
  return t && (r === void 0 && (r = e.child.length === 0), t = this.parseTextData(
    t,
    e.tagname,
    n,
    !1,
    e[":@"] ? Object.keys(e[":@"]).length !== 0 : !1,
    r
  ), t !== void 0 && t !== "" && e.add(this.options.textNodeName, t), t = ""), t;
}
function fW(t, e, n, r) {
  return !!(e && e.has(r) || t && t.has(n));
}
function mW(t, e, n = ">") {
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
  const o = mW(t, e + 1, r);
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
function hW(t, e, n) {
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
    return r === "true" ? !0 : r === "false" ? !1 : Q5(t, n);
  } else
    return k5(t) ? t : "";
}
function Ga(t, e, n) {
  const r = Number.parseInt(t, e);
  return r >= 0 && r <= 1114111 ? String.fromCodePoint(r) : n + t + ";";
}
const jo = Nt.getMetaDataSymbol();
function gW(t, e) {
  return Vl(t, e);
}
function Vl(t, e, n) {
  let r;
  const o = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i], a = yW(s);
    let c = "";
    if (n === void 0 ? c = a : c = n + "." + a, a === e.textNodeName)
      r === void 0 ? r = s[a] : r += "" + s[a];
    else {
      if (a === void 0)
        continue;
      if (s[a]) {
        let d = Vl(s[a], e, c);
        const l = bW(d, e);
        s[jo] !== void 0 && (d[jo] = s[jo]), s[":@"] ? vW(d, s[":@"], c, e) : Object.keys(d).length === 1 && d[e.textNodeName] !== void 0 && !e.alwaysCreateTextNode ? d = d[e.textNodeName] : Object.keys(d).length === 0 && (e.alwaysCreateTextNode ? d[e.textNodeName] = "" : d = ""), o[a] !== void 0 && o.hasOwnProperty(a) ? (Array.isArray(o[a]) || (o[a] = [o[a]]), o[a].push(d)) : e.isArray(a, c, l) ? o[a] = [d] : o[a] = d;
      }
    }
  }
  return typeof r == "string" ? r.length > 0 && (o[e.textNodeName] = r) : r !== void 0 && (o[e.textNodeName] = r), o;
}
function yW(t) {
  const e = Object.keys(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (r !== ":@") return r;
  }
}
function vW(t, e, n, r) {
  if (e) {
    const o = Object.keys(e), i = o.length;
    for (let s = 0; s < i; s++) {
      const a = o[s];
      r.isArray(a, n + "." + a, !0, !0) ? t[a] = [e[a]] : t[a] = e[a];
    }
  }
}
function bW(t, e) {
  const { textNodeName: n } = e, r = Object.keys(t).length;
  return !!(r === 0 || r === 1 && (t[n] || typeof t[n] == "boolean" || t[n] === 0));
}
class xW {
  constructor(e) {
    this.externalEntities = {}, this.options = G5(e);
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
      const i = q5(e, n);
      if (i !== !0)
        throw Error(`${i.err.msg}:${i.err.line}:${i.err.col}`);
    }
    const r = new rW(this.options);
    r.addExternalEntities(this.externalEntities);
    const o = r.parseXml(e);
    return this.options.preserveOrder || o === void 0 ? o : gW(o, this.options);
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
const wW = `
`;
function EW(t, e) {
  let n = "";
  return e.format && e.indentBy.length > 0 && (n = wW), zl(t, e, "", n);
}
function zl(t, e, n, r) {
  let o = "", i = !1;
  for (let s = 0; s < t.length; s++) {
    const a = t[s], c = TW(a);
    if (c === void 0) continue;
    let d = "";
    if (n.length === 0 ? d = c : d = `${n}.${c}`, c === e.textNodeName) {
      let f = a[c];
      SW(d, e) || (f = e.tagValueProcessor(c, f), f = Hl(f, e)), i && (o += r), o += f, i = !1;
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
    const u = Wa(a[":@"], e), p = r + `<${c}${u}`, h = zl(a[c], e, d, l);
    e.unpairedTags.indexOf(c) !== -1 ? e.suppressUnpairedNode ? o += p + ">" : o += p + "/>" : (!h || h.length === 0) && e.suppressEmptyNode ? o += p + "/>" : h && h.endsWith(">") ? o += p + `>${h}${r}</${c}>` : (o += p + ">", h && r !== "" && (h.includes("/>") || h.includes("</")) ? o += r + e.indentBy + h + r : o += h, o += `</${c}>`), i = !0;
  }
  return o;
}
function TW(t) {
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
function SW(t, e) {
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
const NW = {
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
  this.options = Object.assign({}, NW, t), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
    return !1;
  } : (this.ignoreAttributesFn = $l(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = _W), this.processTextOrObjNode = OW, this.options.format ? (this.indentate = AW, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
    return "";
  }, this.tagEndChar = ">", this.newLine = "");
}
xt.prototype.build = function(t) {
  return this.options.preserveOrder ? EW(t, this.options) : (Array.isArray(t) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (t = {
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
function OW(t, e, n, r) {
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
function AW(t) {
  return this.options.indentBy.repeat(t);
}
function _W(t) {
  return t.startsWith(this.options.attributeNamePrefix) && t !== this.options.textNodeName ? t.substr(this.attrPrefixLen) : !1;
}
class LW {
  constructor(e) {
    Ue(this, "db");
    const n = e || te.join(
      De.getPath("userData"),
      "feeddownloader.sqlite"
    );
    this.db = new Ku(n), this.init();
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
  // ── Lifecycle ────────────────────────────────────────────
  close() {
    this.db.close();
  }
}
class DW {
  constructor(e) {
    Ue(this, "db");
    this.db = e || new LW();
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
  // ── OPML ─────────────────────────────────────────────────
  async importOPML(e) {
    const r = new xW({ ignoreAttributes: !1, attributeNamePrefix: "" }).parse(e);
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
var Pe = {}, he = {};
he.fromCallback = function(t) {
  return Object.defineProperty(function(...e) {
    if (typeof e[e.length - 1] == "function") t.apply(this, e);
    else
      return new Promise((n, r) => {
        e.push((o, i) => o != null ? r(o) : n(i)), t.apply(this, e);
      });
  }, "name", { value: t.name });
};
he.fromPromise = function(t) {
  return Object.defineProperty(function(...e) {
    const n = e[e.length - 1];
    if (typeof n != "function") return t.apply(this, e);
    e.pop(), t.apply(this, e).then((r) => n(null, r), n);
  }, "name", { value: t.name });
};
var ft = Ju, CW = process.cwd, Wn = null, RW = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function() {
  return Wn || (Wn = CW.call(process)), Wn;
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
var PW = IW;
function IW(t) {
  ft.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && e(t), t.lutimes || n(t), t.chown = i(t.chown), t.fchown = i(t.fchown), t.lchown = i(t.lchown), t.chmod = r(t.chmod), t.fchmod = r(t.fchmod), t.lchmod = r(t.lchmod), t.chownSync = s(t.chownSync), t.fchownSync = s(t.fchownSync), t.lchownSync = s(t.lchownSync), t.chmodSync = o(t.chmodSync), t.fchmodSync = o(t.fchmodSync), t.lchmodSync = o(t.lchmodSync), t.stat = a(t.stat), t.fstat = a(t.fstat), t.lstat = a(t.lstat), t.statSync = c(t.statSync), t.fstatSync = c(t.fstatSync), t.lstatSync = c(t.lstatSync), t.chmod && !t.lchmod && (t.lchmod = function(l, u, p) {
    p && process.nextTick(p);
  }, t.lchmodSync = function() {
  }), t.chown && !t.lchown && (t.lchown = function(l, u, p, h) {
    h && process.nextTick(h);
  }, t.lchownSync = function() {
  }), RW === "win32" && (t.rename = typeof t.rename != "function" ? t.rename : function(l) {
    function u(p, h, f) {
      var x = Date.now(), b = 0;
      l(p, h, function S(w) {
        if (w && (w.code === "EACCES" || w.code === "EPERM" || w.code === "EBUSY") && Date.now() - x < 6e4) {
          setTimeout(function() {
            t.stat(h, function(y, E) {
              y && y.code === "ENOENT" ? l(p, h, S) : f(w);
            });
          }, b), b < 100 && (b += 10);
          return;
        }
        f && f(w);
      });
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(u, l), u;
  }(t.rename)), t.read = typeof t.read != "function" ? t.read : function(l) {
    function u(p, h, f, x, b, S) {
      var w;
      if (S && typeof S == "function") {
        var y = 0;
        w = function(E, A, D) {
          if (E && E.code === "EAGAIN" && y < 10)
            return y++, l.call(t, p, h, f, x, b, w);
          S.apply(this, arguments);
        };
      }
      return l.call(t, p, h, f, x, b, w);
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(u, l), u;
  }(t.read), t.readSync = typeof t.readSync != "function" ? t.readSync : /* @__PURE__ */ function(l) {
    return function(u, p, h, f, x) {
      for (var b = 0; ; )
        try {
          return l.call(t, u, p, h, f, x);
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
    l.lchmod = function(u, p, h) {
      l.open(
        u,
        ft.O_WRONLY | ft.O_SYMLINK,
        p,
        function(f, x) {
          if (f) {
            h && h(f);
            return;
          }
          l.fchmod(x, p, function(b) {
            l.close(x, function(S) {
              h && h(b || S);
            });
          });
        }
      );
    }, l.lchmodSync = function(u, p) {
      var h = l.openSync(u, ft.O_WRONLY | ft.O_SYMLINK, p), f = !0, x;
      try {
        x = l.fchmodSync(h, p), f = !1;
      } finally {
        if (f)
          try {
            l.closeSync(h);
          } catch {
          }
        else
          l.closeSync(h);
      }
      return x;
    };
  }
  function n(l) {
    ft.hasOwnProperty("O_SYMLINK") && l.futimes ? (l.lutimes = function(u, p, h, f) {
      l.open(u, ft.O_SYMLINK, function(x, b) {
        if (x) {
          f && f(x);
          return;
        }
        l.futimes(b, p, h, function(S) {
          l.close(b, function(w) {
            f && f(S || w);
          });
        });
      });
    }, l.lutimesSync = function(u, p, h) {
      var f = l.openSync(u, ft.O_SYMLINK), x, b = !0;
      try {
        x = l.futimesSync(f, p, h), b = !1;
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
      return l.call(t, u, p, h, function(x) {
        d(x) && (x = null), f && f.apply(this, arguments);
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
      function f(x, b) {
        b && (b.uid < 0 && (b.uid += 4294967296), b.gid < 0 && (b.gid += 4294967296)), h && h.apply(this, arguments);
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
var Ka = Le.Stream, kW = FW;
function FW(t) {
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
var qW = jW, MW = Object.getPrototypeOf || function(t) {
  return t.__proto__;
};
function jW(t) {
  if (t === null || typeof t != "object")
    return t;
  if (t instanceof Object)
    var e = { __proto__: MW(t) };
  else
    var e = /* @__PURE__ */ Object.create(null);
  return Object.getOwnPropertyNames(t).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
  }), e;
}
var ie = ui, UW = PW, BW = kW, $W = qW, Un = bt, Ee, ar;
typeof Symbol == "function" && typeof Symbol.for == "function" ? (Ee = Symbol.for("graceful-fs.queue"), ar = Symbol.for("graceful-fs.previous")) : (Ee = "___graceful-fs.queue", ar = "___graceful-fs.previous");
function VW() {
}
function Xl(t, e) {
  Object.defineProperty(t, Ee, {
    get: function() {
      return e;
    }
  });
}
var kt = VW;
Un.debuglog ? kt = Un.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (kt = function() {
  var t = Un.format.apply(Un, arguments);
  t = "GFS4: " + t.split(/\n/).join(`
GFS4: `), console.error(t);
});
if (!ie[Ee]) {
  var zW = z[Ee] || [];
  Xl(ie, zW), ie.close = function(t) {
    function e(n, r) {
      return t.call(ie, n, function(o) {
        o || Ja(), typeof r == "function" && r.apply(this, arguments);
      });
    }
    return Object.defineProperty(e, ar, {
      value: t
    }), e;
  }(ie.close), ie.closeSync = function(t) {
    function e(n) {
      t.apply(ie, arguments), Ja();
    }
    return Object.defineProperty(e, ar, {
      value: t
    }), e;
  }(ie.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    kt(ie[Ee]), wc.equal(ie[Ee].length, 0);
  });
}
z[Ee] || Xl(z, ie[Ee]);
var an = Hi($W(ie));
process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !ie.__patched && (an = Hi(ie), ie.__patched = !0);
function Hi(t) {
  UW(t), t.gracefulify = Hi, t.createReadStream = A, t.createWriteStream = D;
  var e = t.readFile;
  t.readFile = n;
  function n(m, _, L) {
    return typeof _ == "function" && (L = _, _ = null), I(m, _, L);
    function I(j, B, $, q) {
      return e(j, B, function(k) {
        k && (k.code === "EMFILE" || k.code === "ENFILE") ? $t([I, [j, B, $], k, q || Date.now(), Date.now()]) : typeof $ == "function" && $.apply(this, arguments);
      });
    }
  }
  var r = t.writeFile;
  t.writeFile = o;
  function o(m, _, L, I) {
    return typeof L == "function" && (I = L, L = null), j(m, _, L, I);
    function j(B, $, q, k, Y) {
      return r(B, $, q, function(W) {
        W && (W.code === "EMFILE" || W.code === "ENFILE") ? $t([j, [B, $, q, k], W, Y || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  var i = t.appendFile;
  i && (t.appendFile = s);
  function s(m, _, L, I) {
    return typeof L == "function" && (I = L, L = null), j(m, _, L, I);
    function j(B, $, q, k, Y) {
      return i(B, $, q, function(W) {
        W && (W.code === "EMFILE" || W.code === "ENFILE") ? $t([j, [B, $, q, k], W, Y || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  var a = t.copyFile;
  a && (t.copyFile = c);
  function c(m, _, L, I) {
    return typeof L == "function" && (I = L, L = 0), j(m, _, L, I);
    function j(B, $, q, k, Y) {
      return a(B, $, q, function(W) {
        W && (W.code === "EMFILE" || W.code === "ENFILE") ? $t([j, [B, $, q, k], W, Y || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  var d = t.readdir;
  t.readdir = u;
  var l = /^v[0-5]\./;
  function u(m, _, L) {
    typeof _ == "function" && (L = _, _ = null);
    var I = l.test(process.version) ? function($, q, k, Y) {
      return d($, j(
        $,
        q,
        k,
        Y
      ));
    } : function($, q, k, Y) {
      return d($, q, j(
        $,
        q,
        k,
        Y
      ));
    };
    return I(m, _, L);
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
    var p = BW(t);
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
    return this instanceof S ? (h.apply(this, arguments), this) : S.apply(Object.create(S.prototype), arguments);
  }
  function w() {
    var m = this;
    O(m.path, m.flags, m.mode, function(_, L) {
      _ ? (m.autoClose && m.destroy(), m.emit("error", _)) : (m.fd = L, m.emit("open", L), m.read());
    });
  }
  function y(m, _) {
    return this instanceof y ? (f.apply(this, arguments), this) : y.apply(Object.create(y.prototype), arguments);
  }
  function E() {
    var m = this;
    O(m.path, m.flags, m.mode, function(_, L) {
      _ ? (m.destroy(), m.emit("error", _)) : (m.fd = L, m.emit("open", L));
    });
  }
  function A(m, _) {
    return new t.ReadStream(m, _);
  }
  function D(m, _) {
    return new t.WriteStream(m, _);
  }
  var P = t.open;
  t.open = O;
  function O(m, _, L, I) {
    return typeof L == "function" && (I = L, L = null), j(m, _, L, I);
    function j(B, $, q, k, Y) {
      return P(B, $, q, function(W, V) {
        W && (W.code === "EMFILE" || W.code === "ENFILE") ? $t([j, [B, $, q, k], W, Y || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  return t;
}
function $t(t) {
  kt("ENQUEUE", t[0].name, t[1]), ie[Ee].push(t), Xi();
}
var Bn;
function Ja() {
  for (var t = Date.now(), e = 0; e < ie[Ee].length; ++e)
    ie[Ee][e].length > 2 && (ie[Ee][e][3] = t, ie[Ee][e][4] = t);
  Xi();
}
function Xi() {
  if (clearTimeout(Bn), Bn = void 0, ie[Ee].length !== 0) {
    var t = ie[Ee].shift(), e = t[0], n = t[1], r = t[2], o = t[3], i = t[4];
    if (o === void 0)
      kt("RETRY", e.name, n), e.apply(null, n);
    else if (Date.now() - o >= 6e4) {
      kt("TIMEOUT", e.name, n);
      var s = n.pop();
      typeof s == "function" && s.call(null, r);
    } else {
      var a = Date.now() - i, c = Math.max(i - o, 1), d = Math.min(c * 1.2, 100);
      a >= d ? (kt("RETRY", e.name, n), e.apply(null, n.concat([o]))) : ie[Ee].push(t);
    }
    Bn === void 0 && (Bn = setTimeout(Xi, 0));
  }
}
(function(t) {
  const e = he.fromCallback, n = an, r = [
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
var Gi = {}, Gl = {};
const HW = te;
Gl.checkPath = function(e) {
  if (process.platform === "win32" && /[<>:"|?*]/.test(e.replace(HW.parse(e).root, ""))) {
    const r = new Error(`Path contains invalid characters: ${e}`);
    throw r.code = "EINVAL", r;
  }
};
const Wl = Pe, { checkPath: Yl } = Gl, Kl = (t) => {
  const e = { mode: 511 };
  return typeof t == "number" ? t : { ...e, ...t }.mode;
};
Gi.makeDir = async (t, e) => (Yl(t), Wl.mkdir(t, {
  mode: Kl(e),
  recursive: !0
}));
Gi.makeDirSync = (t, e) => (Yl(t), Wl.mkdirSync(t, {
  mode: Kl(e),
  recursive: !0
}));
const XW = he.fromPromise, { makeDir: GW, makeDirSync: Uo } = Gi, Bo = XW(GW);
var tt = {
  mkdirs: Bo,
  mkdirsSync: Uo,
  // alias
  mkdirp: Bo,
  mkdirpSync: Uo,
  ensureDir: Bo,
  ensureDirSync: Uo
};
const WW = he.fromPromise, Jl = Pe;
function YW(t) {
  return Jl.access(t).then(() => !0).catch(() => !1);
}
var jt = {
  pathExists: WW(YW),
  pathExistsSync: Jl.existsSync
};
const Yt = Pe, KW = he.fromPromise;
async function JW(t, e, n) {
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
function QW(t, e, n) {
  const r = Yt.openSync(t, "r+");
  return Yt.futimesSync(r, e, n), Yt.closeSync(r);
}
var Ql = {
  utimesMillis: KW(JW),
  utimesMillisSync: QW
};
const nn = Pe, ye = te, Qa = he.fromPromise;
function ZW(t, e, n) {
  const r = n.dereference ? (o) => nn.stat(o, { bigint: !0 }) : (o) => nn.lstat(o, { bigint: !0 });
  return Promise.all([
    r(t),
    r(e).catch((o) => {
      if (o.code === "ENOENT") return null;
      throw o;
    })
  ]).then(([o, i]) => ({ srcStat: o, destStat: i }));
}
function eY(t, e, n) {
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
async function tY(t, e, n, r) {
  const { srcStat: o, destStat: i } = await ZW(t, e, r);
  if (i) {
    if (Rn(o, i)) {
      const s = ye.basename(t), a = ye.basename(e);
      if (n === "move" && s !== a && s.toLowerCase() === a.toLowerCase())
        return { srcStat: o, destStat: i, isChangingCase: !0 };
      throw new Error("Source and destination must not be the same.");
    }
    if (o.isDirectory() && !i.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${e}' with directory '${t}'.`);
    if (!o.isDirectory() && i.isDirectory())
      throw new Error(`Cannot overwrite directory '${e}' with non-directory '${t}'.`);
  }
  if (o.isDirectory() && Wi(t, e))
    throw new Error(Nr(t, e, n));
  return { srcStat: o, destStat: i };
}
function nY(t, e, n, r) {
  const { srcStat: o, destStat: i } = eY(t, e, r);
  if (i) {
    if (Rn(o, i)) {
      const s = ye.basename(t), a = ye.basename(e);
      if (n === "move" && s !== a && s.toLowerCase() === a.toLowerCase())
        return { srcStat: o, destStat: i, isChangingCase: !0 };
      throw new Error("Source and destination must not be the same.");
    }
    if (o.isDirectory() && !i.isDirectory())
      throw new Error(`Cannot overwrite non-directory '${e}' with directory '${t}'.`);
    if (!o.isDirectory() && i.isDirectory())
      throw new Error(`Cannot overwrite directory '${e}' with non-directory '${t}'.`);
  }
  if (o.isDirectory() && Wi(t, e))
    throw new Error(Nr(t, e, n));
  return { srcStat: o, destStat: i };
}
async function Zl(t, e, n, r) {
  const o = ye.resolve(ye.dirname(t)), i = ye.resolve(ye.dirname(n));
  if (i === o || i === ye.parse(i).root) return;
  let s;
  try {
    s = await nn.stat(i, { bigint: !0 });
  } catch (a) {
    if (a.code === "ENOENT") return;
    throw a;
  }
  if (Rn(e, s))
    throw new Error(Nr(t, n, r));
  return Zl(t, e, i, r);
}
function eu(t, e, n, r) {
  const o = ye.resolve(ye.dirname(t)), i = ye.resolve(ye.dirname(n));
  if (i === o || i === ye.parse(i).root) return;
  let s;
  try {
    s = nn.statSync(i, { bigint: !0 });
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
function Wi(t, e) {
  const n = ye.resolve(t).split(ye.sep).filter((o) => o), r = ye.resolve(e).split(ye.sep).filter((o) => o);
  return n.every((o, i) => r[i] === o);
}
function Nr(t, e, n) {
  return `Cannot ${n} '${t}' to a subdirectory of itself, '${e}'.`;
}
var cn = {
  // checkPaths
  checkPaths: Qa(tY),
  checkPathsSync: nY,
  // checkParent
  checkParentPaths: Qa(Zl),
  checkParentPathsSync: eu,
  // Misc
  isSrcSubdir: Wi,
  areIdentical: Rn
};
async function rY(t, e) {
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
var oY = {
  asyncIteratorConcurrentProcess: rY
};
const Se = Pe, yn = te, { mkdirs: iY } = tt, { pathExists: sY } = jt, { utimesMillis: aY } = Ql, vn = cn, { asyncIteratorConcurrentProcess: cY } = oY;
async function lY(t, e, n = {}) {
  typeof n == "function" && (n = { filter: n }), n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0001"
  );
  const { srcStat: r, destStat: o } = await vn.checkPaths(t, e, "copy", n);
  if (await vn.checkParentPaths(t, r, e, "copy"), !await tu(t, e, n)) return;
  const s = yn.dirname(e);
  await sY(s) || await iY(s), await nu(o, t, e, n);
}
async function tu(t, e, n) {
  return n.filter ? n.filter(t, e) : !0;
}
async function nu(t, e, n, r) {
  const i = await (r.dereference ? Se.stat : Se.lstat)(e);
  if (i.isDirectory()) return fY(i, t, e, n, r);
  if (i.isFile() || i.isCharacterDevice() || i.isBlockDevice()) return uY(i, t, e, n, r);
  if (i.isSymbolicLink()) return mY(t, e, n, r);
  throw i.isSocket() ? new Error(`Cannot copy a socket file: ${e}`) : i.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${e}`) : new Error(`Unknown file: ${e}`);
}
async function uY(t, e, n, r, o) {
  if (!e) return Za(t, n, r, o);
  if (o.overwrite)
    return await Se.unlink(r), Za(t, n, r, o);
  if (o.errorOnExist)
    throw new Error(`'${r}' already exists`);
}
async function Za(t, e, n, r) {
  if (await Se.copyFile(e, n), r.preserveTimestamps) {
    pY(t.mode) && await dY(n, t.mode);
    const o = await Se.stat(e);
    await aY(n, o.atime, o.mtime);
  }
  return Se.chmod(n, t.mode);
}
function pY(t) {
  return (t & 128) === 0;
}
function dY(t, e) {
  return Se.chmod(t, e | 128);
}
async function fY(t, e, n, r, o) {
  e || await Se.mkdir(r), await cY(await Se.opendir(n), async (i) => {
    const s = yn.join(n, i.name), a = yn.join(r, i.name);
    if (await tu(s, a, o)) {
      const { destStat: d } = await vn.checkPaths(s, a, "copy", o);
      await nu(d, s, a, o);
    }
  }), e || await Se.chmod(r, t.mode);
}
async function mY(t, e, n, r) {
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
var hY = lY;
const Ce = an, bn = te, gY = tt.mkdirsSync, yY = Ql.utimesMillisSync, xn = cn;
function vY(t, e, n) {
  typeof n == "function" && (n = { filter: n }), n = n || {}, n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && process.emitWarning(
    `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
    "Warning",
    "fs-extra-WARN0002"
  );
  const { srcStat: r, destStat: o } = xn.checkPathsSync(t, e, "copy", n);
  if (xn.checkParentPathsSync(t, r, e, "copy"), n.filter && !n.filter(t, e)) return;
  const i = bn.dirname(e);
  return Ce.existsSync(i) || gY(i), ru(o, t, e, n);
}
function ru(t, e, n, r) {
  const i = (r.dereference ? Ce.statSync : Ce.lstatSync)(e);
  if (i.isDirectory()) return NY(i, t, e, n, r);
  if (i.isFile() || i.isCharacterDevice() || i.isBlockDevice()) return bY(i, t, e, n, r);
  if (i.isSymbolicLink()) return _Y(t, e, n, r);
  throw i.isSocket() ? new Error(`Cannot copy a socket file: ${e}`) : i.isFIFO() ? new Error(`Cannot copy a FIFO pipe: ${e}`) : new Error(`Unknown file: ${e}`);
}
function bY(t, e, n, r, o) {
  return e ? xY(t, n, r, o) : ou(t, n, r, o);
}
function xY(t, e, n, r) {
  if (r.overwrite)
    return Ce.unlinkSync(n), ou(t, e, n, r);
  if (r.errorOnExist)
    throw new Error(`'${n}' already exists`);
}
function ou(t, e, n, r) {
  return Ce.copyFileSync(e, n), r.preserveTimestamps && wY(t.mode, e, n), Yi(n, t.mode);
}
function wY(t, e, n) {
  return EY(t) && TY(n, t), SY(e, n);
}
function EY(t) {
  return (t & 128) === 0;
}
function TY(t, e) {
  return Yi(t, e | 128);
}
function Yi(t, e) {
  return Ce.chmodSync(t, e);
}
function SY(t, e) {
  const n = Ce.statSync(t);
  return yY(e, n.atime, n.mtime);
}
function NY(t, e, n, r, o) {
  return e ? iu(n, r, o) : OY(t.mode, n, r, o);
}
function OY(t, e, n, r) {
  return Ce.mkdirSync(n), iu(e, n, r), Yi(n, t);
}
function iu(t, e, n) {
  const r = Ce.opendirSync(t);
  try {
    let o;
    for (; (o = r.readSync()) !== null; )
      AY(o.name, t, e, n);
  } finally {
    r.closeSync();
  }
}
function AY(t, e, n, r) {
  const o = bn.join(e, t), i = bn.join(n, t);
  if (r.filter && !r.filter(o, i)) return;
  const { destStat: s } = xn.checkPathsSync(o, i, "copy", r);
  return ru(s, o, i, r);
}
function _Y(t, e, n, r) {
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
    return LY(o, n);
  } else
    return Ce.symlinkSync(o, n);
}
function LY(t, e) {
  return Ce.unlinkSync(e), Ce.symlinkSync(t, e);
}
var DY = vY;
const CY = he.fromPromise;
var Ki = {
  copy: CY(hY),
  copySync: DY
};
const su = an, RY = he.fromCallback;
function PY(t, e) {
  su.rm(t, { recursive: !0, force: !0 }, e);
}
function IY(t) {
  su.rmSync(t, { recursive: !0, force: !0 });
}
var Or = {
  remove: RY(PY),
  removeSync: IY
};
const kY = he.fromPromise, au = Pe, cu = te, lu = tt, uu = Or, ec = kY(async function(e) {
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
var FY = {
  emptyDirSync: tc,
  emptydirSync: tc,
  emptyDir: ec,
  emptydir: ec
};
const qY = he.fromPromise, pu = te, ct = Pe, du = tt;
async function MY(t) {
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
function jY(t) {
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
var UY = {
  createFile: qY(MY),
  createFileSync: jY
};
const BY = he.fromPromise, fu = te, mt = Pe, mu = tt, { pathExists: $Y } = jt, { areIdentical: hu } = cn;
async function VY(t, e) {
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
  await $Y(o) || await mu.mkdirs(o), await mt.link(t, e);
}
function zY(t, e) {
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
var HY = {
  createLink: BY(VY),
  createLinkSync: zY
};
const gt = te, fn = Pe, { pathExists: XY } = jt, GY = he.fromPromise;
async function WY(t, e) {
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
  if (await XY(r))
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
function YY(t, e) {
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
var KY = {
  symlinkPaths: GY(WY),
  symlinkPathsSync: YY
};
const gu = Pe, JY = he.fromPromise;
async function QY(t, e) {
  if (e) return e;
  let n;
  try {
    n = await gu.lstat(t);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
function ZY(t, e) {
  if (e) return e;
  let n;
  try {
    n = gu.lstatSync(t);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
var eK = {
  symlinkType: JY(QY),
  symlinkTypeSync: ZY
};
const tK = he.fromPromise, yu = te, et = Pe, { mkdirs: nK, mkdirsSync: rK } = tt, { symlinkPaths: oK, symlinkPathsSync: iK } = KY, { symlinkType: sK, symlinkTypeSync: aK } = eK, { pathExists: cK } = jt, { areIdentical: vu } = cn;
async function lK(t, e, n) {
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
  const o = await oK(t, e);
  t = o.toDst;
  const i = await sK(o.toCwd, n), s = yu.dirname(e);
  return await cK(s) || await nK(s), et.symlink(t, e, i);
}
function uK(t, e, n) {
  let r;
  try {
    r = et.lstatSync(e);
  } catch {
  }
  if (r && r.isSymbolicLink()) {
    const a = et.statSync(t), c = et.statSync(e);
    if (vu(a, c)) return;
  }
  const o = iK(t, e);
  t = o.toDst, n = aK(o.toCwd, n);
  const i = yu.dirname(e);
  return et.existsSync(i) || rK(i), et.symlinkSync(t, e, n);
}
var pK = {
  createSymlink: tK(lK),
  createSymlinkSync: uK
};
const { createFile: nc, createFileSync: rc } = UY, { createLink: oc, createLinkSync: ic } = HY, { createSymlink: sc, createSymlinkSync: ac } = pK;
var dK = {
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
function fK(t, { EOL: e = `
`, finalEOL: n = !0, replacer: r = null, spaces: o } = {}) {
  const i = n ? e : "";
  return JSON.stringify(t, r, o).replace(/\n/g, e) + i;
}
function mK(t) {
  return Buffer.isBuffer(t) && (t = t.toString("utf8")), t.replace(/^\uFEFF/, "");
}
var Ji = { stringify: fK, stripBom: mK };
let rn;
try {
  rn = an;
} catch {
  rn = ui;
}
const Ar = he, { stringify: bu, stripBom: xu } = Ji;
async function hK(t, e = {}) {
  typeof e == "string" && (e = { encoding: e });
  const n = e.fs || rn, r = "throws" in e ? e.throws : !0;
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
const gK = Ar.fromPromise(hK);
function yK(t, e = {}) {
  typeof e == "string" && (e = { encoding: e });
  const n = e.fs || rn, r = "throws" in e ? e.throws : !0;
  try {
    let o = n.readFileSync(t, e);
    return o = xu(o), JSON.parse(o, e.reviver);
  } catch (o) {
    if (r)
      throw o.message = `${t}: ${o.message}`, o;
    return null;
  }
}
async function vK(t, e, n = {}) {
  const r = n.fs || rn, o = bu(e, n);
  await Ar.fromCallback(r.writeFile)(t, o, n);
}
const bK = Ar.fromPromise(vK);
function xK(t, e, n = {}) {
  const r = n.fs || rn, o = bu(e, n);
  return r.writeFileSync(t, o, n);
}
var wK = {
  readFile: gK,
  readFileSync: yK,
  writeFile: bK,
  writeFileSync: xK
};
const $n = wK;
var EK = {
  // jsonfile exports
  readJson: $n.readFile,
  readJsonSync: $n.readFileSync,
  writeJson: $n.writeFile,
  writeJsonSync: $n.writeFileSync
};
const TK = he.fromPromise, ni = Pe, wu = te, Eu = tt, SK = jt.pathExists;
async function NK(t, e, n = "utf-8") {
  const r = wu.dirname(t);
  return await SK(r) || await Eu.mkdirs(r), ni.writeFile(t, e, n);
}
function OK(t, ...e) {
  const n = wu.dirname(t);
  ni.existsSync(n) || Eu.mkdirsSync(n), ni.writeFileSync(t, ...e);
}
var Qi = {
  outputFile: TK(NK),
  outputFileSync: OK
};
const { stringify: AK } = Ji, { outputFile: _K } = Qi;
async function LK(t, e, n = {}) {
  const r = AK(e, n);
  await _K(t, r, n);
}
var DK = LK;
const { stringify: CK } = Ji, { outputFileSync: RK } = Qi;
function PK(t, e, n) {
  const r = CK(e, n);
  RK(t, r, n);
}
var IK = PK;
const kK = he.fromPromise, Re = EK;
Re.outputJson = kK(DK);
Re.outputJsonSync = IK;
Re.outputJSON = Re.outputJson;
Re.outputJSONSync = Re.outputJsonSync;
Re.writeJSON = Re.writeJson;
Re.writeJSONSync = Re.writeJsonSync;
Re.readJSON = Re.readJson;
Re.readJSONSync = Re.readJsonSync;
var FK = Re;
const qK = Pe, cc = te, { copy: MK } = Ki, { remove: Tu } = Or, { mkdirp: jK } = tt, { pathExists: UK } = jt, lc = cn;
async function BK(t, e, n = {}) {
  const r = n.overwrite || n.clobber || !1, { srcStat: o, isChangingCase: i = !1 } = await lc.checkPaths(t, e, "move", n);
  await lc.checkParentPaths(t, o, e, "move");
  const s = cc.dirname(e);
  return cc.parse(s).root !== s && await jK(s), $K(t, e, r, i);
}
async function $K(t, e, n, r) {
  if (!r) {
    if (n)
      await Tu(e);
    else if (await UK(e))
      throw new Error("dest already exists.");
  }
  try {
    await qK.rename(t, e);
  } catch (o) {
    if (o.code !== "EXDEV")
      throw o;
    await VK(t, e, n);
  }
}
async function VK(t, e, n) {
  return await MK(t, e, {
    overwrite: n,
    errorOnExist: !0,
    preserveTimestamps: !0
  }), Tu(t);
}
var zK = BK;
const Su = an, ri = te, HK = Ki.copySync, Nu = Or.removeSync, XK = tt.mkdirpSync, uc = cn;
function GK(t, e, n) {
  n = n || {};
  const r = n.overwrite || n.clobber || !1, { srcStat: o, isChangingCase: i = !1 } = uc.checkPathsSync(t, e, "move", n);
  return uc.checkParentPathsSync(t, o, e, "move"), WK(e) || XK(ri.dirname(e)), YK(t, e, r, i);
}
function WK(t) {
  const e = ri.dirname(t);
  return ri.parse(e).root === e;
}
function YK(t, e, n, r) {
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
    return KK(t, e, n);
  }
}
function KK(t, e, n) {
  return HK(t, e, {
    overwrite: n,
    errorOnExist: !0,
    preserveTimestamps: !0
  }), Nu(t);
}
var JK = GK;
const QK = he.fromPromise;
var ZK = {
  move: QK(zK),
  moveSync: JK
}, eJ = {
  // Export promiseified graceful-fs:
  ...Pe,
  // Export extra methods:
  ...Ki,
  ...FY,
  ...dK,
  ...FK,
  ...tt,
  ...ZK,
  ...Qi,
  ...jt,
  ...Or
};
const we = /* @__PURE__ */ on(eJ), tJ = 3e4, nJ = 6e4;
class rJ {
  async downloadFile(e, n, r, o = 3) {
    for (let i = 0; i < o; i++)
      try {
        await this.attemptDownload(e, n, r);
        return;
      } catch (s) {
        const a = s;
        if (a.code === "ENOSPC") throw new Error("DISK_FULL: No space left on device.");
        if (a.code === "EPERM" || a.code === "EACCES") throw new Error("PERMISSION_DENIED: Access denied to write file.");
        if (a.message === "DISK_FULL" || a.message === "DOWNLOAD_TIMEOUT" || a.message === "DOWNLOAD_STALLED" || a.message === "EPISODE_NOT_FOUND" || (console.error(`Download attempt ${i + 1} failed:`, s), await we.remove(`${n}.part`).catch(() => {
        }), await we.remove(n).catch(() => {
        }), i === o - 1)) throw s;
        await new Promise((c) => setTimeout(c, 1e3 * Math.pow(2, i)));
      }
  }
  async attemptDownload(e, n, r) {
    const o = `${n}.part`, i = we.createWriteStream(o);
    try {
      const s = await se({
        url: e,
        method: "GET",
        responseType: "stream",
        timeout: tJ
      });
      if (s.status === 404)
        throw i.close(), await we.remove(o).catch(() => {
        }), new Error("EPISODE_NOT_FOUND");
      const a = s.headers["content-length"];
      let c = 0;
      return new Promise((d, l) => {
        let u = null;
        const p = () => {
          u && clearTimeout(u), u = setTimeout(() => {
            s.data.destroy(), i.close(), we.remove(o).catch(() => {
            }), l(new Error("DOWNLOAD_STALLED"));
          }, nJ);
        };
        p(), s.data.on("data", (h) => {
          c += h.length, p(), a && r(c, parseInt(a));
        }), s.data.pipe(i), i.on("finish", async () => {
          if (u && clearTimeout(u), a) {
            const h = parseInt(a);
            if (h > 0 && Math.abs(c - h) / h > 0.01) {
              await we.remove(o).catch(() => {
              }), l(new Error("INTEGRITY_CHECK_FAILED"));
              return;
            }
          }
          try {
            await we.rename(o, n), d();
          } catch (h) {
            l(h);
          }
        }), i.on("error", async (h) => {
          u && clearTimeout(u), await we.remove(o).catch(() => {
          }), h.code === "ENOSPC" ? l(new Error("DISK_FULL")) : l(h);
        });
      });
    } catch (s) {
      throw i.close(), await we.remove(o).catch(() => {
      }), s.code === "ECONNABORTED" ? new Error("DOWNLOAD_TIMEOUT") : s;
    }
  }
}
var Ou = { exports: {} };
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
    var x = n ? n + d : d;
    if (!this._events[x]) return !1;
    var b = this._events[x], S = arguments.length, w, y;
    if (b.fn) {
      switch (b.once && this.removeListener(d, b.fn, void 0, !0), S) {
        case 1:
          return b.fn.call(b.context), !0;
        case 2:
          return b.fn.call(b.context, l), !0;
        case 3:
          return b.fn.call(b.context, l, u), !0;
        case 4:
          return b.fn.call(b.context, l, u, p), !0;
        case 5:
          return b.fn.call(b.context, l, u, p, h), !0;
        case 6:
          return b.fn.call(b.context, l, u, p, h, f), !0;
      }
      for (y = 1, w = new Array(S - 1); y < S; y++)
        w[y - 1] = arguments[y];
      b.fn.apply(b.context, w);
    } else {
      var E = b.length, A;
      for (y = 0; y < E; y++)
        switch (b[y].once && this.removeListener(d, b[y].fn, void 0, !0), S) {
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
            b[y].fn.call(b[y].context, l, u, p);
            break;
          default:
            if (!w) for (A = 1, w = new Array(S - 1); A < S; A++)
              w[A - 1] = arguments[A];
            b[y].fn.apply(b[y].context, w);
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
      for (var x = 0, b = [], S = f.length; x < S; x++)
        (f[x].fn !== l || p && !f[x].once || u && f[x].context !== u) && b.push(f[x]);
      b.length ? this._events[h] = b.length === 1 ? b[0] : b : s(this, h);
    }
    return this;
  }, a.prototype.removeAllListeners = function(d) {
    var l;
    return d ? (l = n ? n + d : d, this._events[l] && s(this, l)) : (this._events = new r(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, t.exports = a;
})(Ou);
var oJ = Ou.exports;
const iJ = /* @__PURE__ */ on(oJ);
class Zi extends Error {
  constructor(n, r) {
    var o;
    super(n, r);
    Ue(this, "name", "TimeoutError");
    (o = Error.captureStackTrace) == null || o.call(Error, this, Zi);
  }
}
const pc = (t) => t.reason ?? new DOMException("This operation was aborted.", "AbortError");
function sJ(t, e) {
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
      p(pc(s));
      return;
    }
    if (s && (c = () => {
      p(pc(s));
    }, s.addEventListener("abort", c, { once: !0 })), t.then(u, p), n === Number.POSITIVE_INFINITY)
      return;
    const h = new Zi();
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
function aJ(t, e, n) {
  let r = 0, o = t.length;
  for (; o > 0; ) {
    const i = Math.trunc(o / 2);
    let s = r + i;
    n(t[s], e) <= 0 ? (r = ++s, o -= i + 1) : o = i;
  }
  return r;
}
var Ve;
class cJ {
  constructor() {
    re(this, Ve, []);
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
    const s = aJ(C(this, Ve), i, (a, c) => c.priority - a.priority);
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
var Kt, Xe, Ge, ht, Lt, Jt, Qe, wn, Qt, Ze, st, ze, qe, _e, de, En, xe, Dt, at, cr, Ct, M, Yn, Au, _u, Kn, Lu, Du, Cu, Ru, Pu, Jn, Qn, oi, Zn, ii, si, er, St, Iu, zt, ku, ai;
class lJ extends iJ {
  constructor(n) {
    var r, o;
    super();
    re(this, M);
    re(this, Kt);
    re(this, Xe);
    re(this, Ge, 0);
    re(this, ht);
    re(this, Lt, !1);
    re(this, Jt, !1);
    re(this, Qe);
    re(this, wn, 0);
    re(this, Qt, 0);
    re(this, Ze);
    re(this, st);
    re(this, ze);
    // Circular buffer implementation for better performance
    re(this, qe, []);
    re(this, _e, 0);
    re(this, de);
    re(this, En);
    re(this, xe, 0);
    // The `!` is needed because of https://github.com/microsoft/TypeScript/issues/32194
    re(this, Dt);
    re(this, at);
    // Use to assign a unique identifier to a promise function, if not explicitly specified
    re(this, cr, 1n);
    // Track currently running tasks for debugging
    re(this, Ct, /* @__PURE__ */ new Map());
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
      queueClass: cJ,
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
    if (ee(this, Kt, n.carryoverIntervalCount ?? n.carryoverConcurrencyCount ?? !1), ee(this, Xe, n.intervalCap === Number.POSITIVE_INFINITY || n.interval === 0), ee(this, ht, n.intervalCap), ee(this, Qe, n.interval), ee(this, ze, n.strict), ee(this, de, new n.queueClass()), ee(this, En, n.queueClass), this.concurrency = n.concurrency, n.timeout !== void 0 && !(Number.isFinite(n.timeout) && n.timeout > 0))
      throw new TypeError(`Expected \`timeout\` to be a positive finite number, got \`${n.timeout}\` (${typeof n.timeout})`);
    this.timeout = n.timeout, ee(this, at, n.autoStart === !1), H(this, M, Iu).call(this);
  }
  get concurrency() {
    return C(this, Dt);
  }
  set concurrency(n) {
    if (!(typeof n == "number" && n >= 1))
      throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${n}\` (${typeof n})`);
    ee(this, Dt, n), H(this, M, er).call(this);
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
        wt(this, xe)._++, C(this, Ct).set(s, {
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
            throw H(this, M, ku).call(this), C(this, Ct).delete(s), p;
          }
          ee(this, Qt, Date.now());
          let l = n({ signal: r.signal });
          if (r.timeout && (l = sJ(Promise.resolve(l), {
            milliseconds: r.timeout,
            message: `Task timed out after ${r.timeout}ms (queue has ${C(this, xe)} running, ${C(this, de).size} waiting)`
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
    return C(this, at) ? (ee(this, at, !1), H(this, M, er).call(this), this) : this;
  }
  /**
  Put queue execution on hold.
  */
  pause() {
    ee(this, at, !0);
  }
  /**
  Clear the queue.
  */
  clear() {
    ee(this, de, new (C(this, En))()), H(this, M, Qn).call(this), H(this, M, ai).call(this), this.emit("empty"), C(this, xe) === 0 && (H(this, M, oi).call(this), this.emit("idle")), this.emit("next");
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
    C(this, xe) === 0 && C(this, de).size === 0 || await H(this, M, St).call(this, "idle");
  }
  /**
      The difference with `.onIdle` is that `.onPendingZero` only waits for currently running tasks to finish, ignoring queued tasks.
  
      @returns A promise that settles when all currently running tasks have completed; `queue.pending === 0`.
      */
  async onPendingZero() {
    C(this, xe) !== 0 && await H(this, M, St).call(this, "pendingZero");
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
    return C(this, xe);
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
    return C(this, Lt);
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
    return C(this, xe) === C(this, Dt) && C(this, de).size > 0 || this.isRateLimited && C(this, de).size > 0;
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
Kt = new WeakMap(), Xe = new WeakMap(), Ge = new WeakMap(), ht = new WeakMap(), Lt = new WeakMap(), Jt = new WeakMap(), Qe = new WeakMap(), wn = new WeakMap(), Qt = new WeakMap(), Ze = new WeakMap(), st = new WeakMap(), ze = new WeakMap(), qe = new WeakMap(), _e = new WeakMap(), de = new WeakMap(), En = new WeakMap(), xe = new WeakMap(), Dt = new WeakMap(), at = new WeakMap(), cr = new WeakMap(), Ct = new WeakMap(), M = new WeakSet(), Yn = function(n) {
  for (; C(this, _e) < C(this, qe).length; ) {
    const o = C(this, qe)[C(this, _e)];
    if (o !== void 0 && n - o >= C(this, Qe))
      wt(this, _e)._++;
    else
      break;
  }
  (C(this, _e) > 100 && C(this, _e) > C(this, qe).length / 2 || C(this, _e) === C(this, qe).length) && (ee(this, qe, C(this, qe).slice(C(this, _e))), ee(this, _e, 0));
}, // Helper methods for interval consumption
Au = function(n) {
  C(this, ze) ? C(this, qe).push(n) : wt(this, Ge)._++;
}, _u = function() {
  C(this, ze) ? C(this, qe).length > C(this, _e) && C(this, qe).pop() : C(this, Ge) > 0 && wt(this, Ge)._--;
}, Kn = function() {
  return C(this, qe).length - C(this, _e);
}, Lu = function() {
  return C(this, Xe) ? !0 : C(this, ze) ? H(this, M, Kn).call(this) < C(this, ht) : C(this, Ge) < C(this, ht);
}, Du = function() {
  return C(this, xe) < C(this, Dt);
}, Cu = function() {
  wt(this, xe)._--, C(this, xe) === 0 && this.emit("pendingZero"), H(this, M, Zn).call(this), this.emit("next");
}, Ru = function() {
  ee(this, st, void 0), H(this, M, si).call(this), H(this, M, ii).call(this);
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
      if (C(this, Qt) > 0) {
        const o = n - C(this, Qt);
        if (o < C(this, Qe))
          return H(this, M, Jn).call(this, C(this, Qe) - o), !0;
      }
      ee(this, Ge, C(this, Kt) ? C(this, xe) : 0);
    } else
      return H(this, M, Jn).call(this, r), !0;
  }
  return !1;
}, Jn = function(n) {
  C(this, st) === void 0 && ee(this, st, setTimeout(() => {
    H(this, M, Ru).call(this);
  }, n));
}, Qn = function() {
  C(this, Ze) && (clearInterval(C(this, Ze)), ee(this, Ze, void 0));
}, oi = function() {
  C(this, st) && (clearTimeout(C(this, st)), ee(this, st, void 0));
}, Zn = function() {
  if (C(this, de).size === 0) {
    if (H(this, M, Qn).call(this), this.emit("empty"), C(this, xe) === 0) {
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
    if (C(this, M, Lu) && C(this, M, Du)) {
      const i = C(this, de).dequeue();
      C(this, Xe) || (H(this, M, Au).call(this, r), H(this, M, zt).call(this)), this.emit("active"), i(), o && H(this, M, ii).call(this), n = !0;
    }
  }
  return n;
}, ii = function() {
  C(this, Xe) || C(this, Ze) !== void 0 || C(this, ze) || (ee(this, Ze, setInterval(() => {
    H(this, M, si).call(this);
  }, C(this, Qe))), ee(this, wn, Date.now() + C(this, Qe)));
}, si = function() {
  C(this, ze) || (C(this, Ge) === 0 && C(this, xe) === 0 && C(this, Ze) && H(this, M, Qn).call(this), ee(this, Ge, C(this, Kt) ? C(this, xe) : 0)), H(this, M, er).call(this), H(this, M, zt).call(this);
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
  C(this, Xe) || C(this, Jt) || (ee(this, Jt, !0), queueMicrotask(() => {
    ee(this, Jt, !1), H(this, M, ai).call(this);
  }));
}, ku = function() {
  C(this, Xe) || (H(this, M, _u).call(this), H(this, M, zt).call(this));
}, ai = function() {
  const n = C(this, Lt);
  if (C(this, Xe) || C(this, de).size === 0) {
    n && (ee(this, Lt, !1), this.emit("rateLimitCleared"));
    return;
  }
  let r;
  if (C(this, ze)) {
    const i = Date.now();
    H(this, M, Yn).call(this, i), r = H(this, M, Kn).call(this);
  } else
    r = C(this, Ge);
  const o = r >= C(this, ht);
  o !== n && (ee(this, Lt, o), this.emit(o ? "rateLimit" : "rateLimitCleared"));
};
class uJ {
  constructor(e = 3) {
    Ue(this, "queue");
    this.queue = new lJ({ concurrency: e });
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
class pJ {
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
function dJ(t) {
  return t >= 55296 && t <= 56319;
}
function fJ(t) {
  return t >= 56320 && t <= 57343;
}
var mJ = function(e, n, r) {
  if (typeof n != "string")
    throw new Error("Input must be string");
  for (var o = n.length, i = 0, s, a, c = 0; c < o; c += 1) {
    if (s = n.charCodeAt(c), a = n[c], dJ(s) && fJ(n.charCodeAt(c + 1)) && (c += 1, a += n[c]), i += e(a), i === r)
      return n.slice(0, c + 1);
    if (i > r)
      return n.slice(0, c - a.length + 1);
  }
  return n;
}, hJ = mJ, gJ = Buffer.byteLength.bind(Buffer), yJ = hJ.bind(null, gJ), vJ = yJ, bJ = /[\/\?<>\\:\*\|"]/g, xJ = /[\x00-\x1f\x80-\x9f]/g, wJ = /^\.+$/, EJ = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i, TJ = /[\. ]+$/;
function dc(t, e) {
  if (typeof t != "string")
    throw new Error("Input must be string");
  var n = t.replace(bJ, e).replace(xJ, e).replace(wJ, e).replace(EJ, e).replace(TJ, e);
  return vJ(n, 255);
}
var SJ = function(t, e) {
  var n = e && e.replacement || "", r = dc(t, n);
  return n === "" ? r : dc(r, "");
};
const fc = /* @__PURE__ */ on(SJ);
function mc(t, e, n, r = ".mp3") {
  const o = fc(e);
  let i = fc(n);
  const s = 250, a = te.join(t, o), d = a.length + 1 + r.length, l = s - d;
  return l < 1 ? i = i.substring(0, 5) : i.length > l && (i = i.substring(0, l)), te.join(a, `${i}${r}`);
}
const NJ = /* @__PURE__ */ new Set([
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
    const n = new URL(t).pathname, r = te.extname(n).toLowerCase();
    if (r && NJ.has(r))
      return r;
  } catch {
  }
  return ".mp3";
}
const OJ = [
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
], AJ = /* @__PURE__ */ new Set([
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
  if (AJ.has(o))
    return { valid: !1, error: "URL_PRIVATE_HOST" };
  if (o === "::1" || o === "[::1]")
    return { valid: !1, error: "URL_PRIVATE_HOST" };
  for (const s of OJ)
    if (s.test(o))
      return { valid: !1, error: "URL_PRIVATE_IP" };
  const i = o.replace(/^\[|\]$/g, "");
  return i.startsWith("fc") || i.startsWith("fd") || i.startsWith("fe80") ? { valid: !1, error: "URL_PRIVATE_IP" } : { valid: !0 };
}
const Q = {
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
  SET_LOCALE: "set-locale"
}, _J = new C5(), oe = new DW(), LJ = new rJ(), DJ = oe.getConcurrency(), Vo = new uJ(DJ);
function Je(t, e, n) {
  t && !t.isDestroyed() && t.webContents.send(e, n);
}
const zo = new pJ();
let yc = "en";
function CJ(t) {
  ue.handle(Q.PARSE_FEED, async (e, n) => {
    const r = gc(n);
    if (!r.valid)
      throw new Error(r.error);
    return await _J.parseFeed(n);
  }), ue.handle(Q.GET_FEEDS, async () => oe.getFeeds()), ue.handle(Q.ADD_FEED, async (e, n) => {
    oe.addFeed(n);
    const r = oe.getFeeds();
    return Je(t, Q.FEEDS_UPDATED, r), r;
  }), ue.handle(Q.REMOVE_FEED, async (e, n) => {
    oe.removeFeed(n);
    const r = oe.getFeeds();
    return Je(t, Q.FEEDS_UPDATED, r), r;
  }), ue.handle(Q.GET_DOWNLOADED_EPISODES, async () => oe.getDownloadedEpisodes()), ue.handle(Q.REMOVE_HISTORY_ITEM, async (e, n) => (oe.removeDownloadedEpisode(n), Je(t, Q.DOWNLOADS_UPDATED, oe.getDownloadedEpisodes()), !0)), ue.handle(Q.RESET_HISTORY, async () => (oe.resetDownloadHistory(), Je(t, Q.DOWNLOADS_UPDATED, []), !0)), ue.handle(Q.START_DOWNLOAD, async (e, { url: n, title: r, podcastTitle: o, guid: i, pubDate: s }) => {
    const a = gc(n);
    if (!a.valid)
      throw new Error(a.error);
    let c = oe.getDownloadPath();
    c || (c = te.join(De.getPath("documents"), "FeedDownloader", "downloads"));
    const d = hc(n), l = mc(c, o, r, d), u = te.dirname(l);
    return await we.ensureDir(u), zo.track(), Vo.add(async () => {
      try {
        await LJ.downloadFile(n, l, (p, h) => {
          Je(t, Q.DOWNLOAD_PROGRESS, { url: n, loaded: p, total: h });
        }), i && (oe.markAsDownloaded(i), oe.addArchiveEntry({
          guid: i,
          title: r,
          podcastTitle: o,
          pubDate: s || (/* @__PURE__ */ new Date()).toISOString(),
          downloadedAt: (/* @__PURE__ */ new Date()).toISOString(),
          filename: te.basename(l)
        })), Je(t, Q.DOWNLOAD_PROGRESS, { url: n, loaded: 100, total: 100, completed: !0 }), Je(t, Q.DOWNLOADS_UPDATED, oe.getDownloadedEpisodes());
      } catch (p) {
        console.error("Download error:", p);
        const h = p.message === "EPISODE_NOT_FOUND";
        Je(t, Q.DOWNLOAD_PROGRESS, {
          url: n,
          loaded: 0,
          total: 0,
          error: !0,
          ...h ? { notFound: !0 } : {}
        });
      } finally {
        const p = zo.complete();
        if (p !== null) {
          if (os.isSupported()) {
            const h = {
              en: `Download complete: ${p} files downloaded.`,
              it: `Download completato: ${p} file scaricati.`,
              fr: `Téléchargement terminé : ${p} fichiers téléchargés.`,
              de: `Download abgeschlossen: ${p} Dateien heruntergeladen.`,
              es: `Descarga completada: ${p} archivos descargados.`,
              pt: `Download concluído: ${p} ficheiros descarregados.`,
              ru: `Загрузка завершена: ${p} файлов скачано.`,
              zh: `下载完成：已下载 ${p} 个文件。`
            };
            new os({
              title: "Runtime FeedDownloader Pro",
              body: h[yc] ?? h.en,
              icon: te.join(process.env.VITE_PUBLIC || "", "logo.png")
            }).show();
          }
          Je(t, Q.BATCH_COMPLETED, { total: p });
        }
      }
    }), { status: "queued" };
  }), ue.handle(Q.STOP_BATCH, async () => (Vo.clear(), zo.reset(), !0)), ue.handle(Q.IMPORT_OPML, async () => {
    const e = await Pn.showOpenDialog(t, {
      properties: ["openFile"],
      filters: [{ name: "OPML/XML", extensions: ["opml", "xml"] }]
    });
    if (e.canceled || e.filePaths.length === 0) return { count: 0 };
    try {
      const n = await we.readFile(e.filePaths[0], "utf-8"), r = await oe.importOPML(n);
      return Je(t, Q.FEEDS_UPDATED, oe.getFeeds()), { count: r };
    } catch (n) {
      throw console.error("Import failed", n), n;
    }
  }), ue.handle(Q.EXPORT_OPML, async () => {
    const e = await Pn.showSaveDialog(t, {
      defaultPath: "feeds.opml",
      filters: [{ name: "OPML", extensions: ["opml"] }]
    });
    if (e.canceled || !e.filePath) return !1;
    try {
      const n = oe.exportOPML();
      return await we.writeFile(e.filePath, n, "utf-8"), !0;
    } catch (n) {
      throw console.error("Export failed", n), n;
    }
  }), ue.handle(Q.EXPORT_ARCHIVE_CSV, async () => {
    const e = await Pn.showSaveDialog(t, {
      defaultPath: "archive_report.csv",
      filters: [{ name: "CSV", extensions: ["csv"] }]
    });
    if (e.canceled || !e.filePath) return !1;
    try {
      const n = oe.exportArchiveCSV();
      return await we.writeFile(e.filePath, n, "utf-8"), !0;
    } catch (n) {
      throw console.error("Export CSV failed", n), n;
    }
  }), ue.handle(Q.CHOOSE_FOLDER, async () => {
    const e = await Pn.showOpenDialog(t, {
      properties: ["openDirectory"]
    });
    return e.canceled ? null : e.filePaths[0];
  }), ue.handle(Q.GET_DOWNLOAD_PATH, async () => oe.getDownloadPath()), ue.handle(Q.SET_DOWNLOAD_PATH, async (e, n) => (oe.setDownloadPath(n), !0)), ue.handle(Q.SHOW_IN_FOLDER, async (e, { podcastTitle: n, title: r, enclosureUrl: o }) => {
    let i = oe.getDownloadPath();
    i || (i = te.join(De.getPath("documents"), "FeedDownloader", "downloads"));
    const s = o ? hc(o) : ".mp3", a = mc(i, n, r, s), { shell: c } = await import("electron");
    c.showItemInFolder(a);
  }), ue.handle(Q.GET_HELP_CONTENT, async (e, n) => {
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
    De.isPackaged ? i = te.join(process.resourcesPath, o) : i = te.join(De.getAppPath(), o);
    try {
      if (await we.pathExists(i))
        return await we.readFile(i, "utf-8");
      {
        const s = De.isPackaged ? te.join(process.resourcesPath, "README_EN.md") : te.join(De.getAppPath(), "README_EN.md");
        return await we.pathExists(s) ? await we.readFile(s, "utf-8") : `# Error
Help file not found.`;
      }
    } catch (s) {
      return console.error("Failed to read help file", s), `# Error
Failed to load help documentation.`;
    }
  }), ue.handle(Q.GET_CONCURRENCY, async () => oe.getConcurrency()), ue.handle(Q.SET_CONCURRENCY, async (e, n) => (oe.setConcurrency(n), Vo.setConcurrency(n), !0)), ue.handle(Q.GET_ARCHIVE_STATS, async () => oe.getArchiveStats()), ue.handle(Q.SET_LOCALE, async (e, n) => (yc = n, !0));
}
const Fu = ut.dirname(zu(import.meta.url));
process.env.APP_ROOT = ut.join(Fu, "..");
const ci = process.env.VITE_DEV_SERVER_URL, xQ = ut.join(process.env.APP_ROOT, "dist-electron"), qu = ut.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = ci ? ut.join(process.env.APP_ROOT, "public") : qu;
let G, Ht = null, es = !1;
const li = ut.join(process.env.VITE_PUBLIC, "logo.png");
process.platform === "win32" && De.setAppUserModelId("com.runtime.feeddownloader.pro");
function RJ() {
  try {
    const e = process.platform === "win32" ? ut.join(process.env.VITE_PUBLIC, "icon.ico") : li;
    Ht = new $u(e);
  } catch (e) {
    console.error("[Tray] Failed to create system tray icon:", e), Ht = null;
    return;
  }
  Ht.setToolTip("Runtime FeedDownloader Pro");
  const t = Vu.buildFromTemplate([
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
        es = !0, De.quit();
      }
    }
  ]);
  Ht.setContextMenu(t), Ht.on("click", () => {
    G != null && G.isVisible() ? G.hide() : (G == null || G.show(), G == null || G.focus());
  });
}
function Mu() {
  G = new vc({
    title: "Runtime FeedDownloader Pro",
    icon: li,
    backgroundColor: "#0b1120",
    // Matches Tailwind bg-background (approx)
    show: !1,
    autoHideMenuBar: !0,
    ...process.platform === "linux" ? { icon: li } : {},
    ...process.platform === "darwin" ? { titleBarStyle: "hidden" } : {},
    webPreferences: {
      preload: ut.join(Fu, "preload.mjs")
    }
  }), G.webContents.session.setPermissionRequestHandler((t, e, n) => (console.log(`Blocked permission request: ${e}`), n(!1))), CJ(G), G.once("ready-to-show", () => {
    G == null || G.maximize(), G == null || G.show();
  }), G.webContents.on("did-fail-load", () => {
    G == null || G.show();
  }), process.platform !== "darwin" && G.on("close", (t) => {
    es || (t.preventDefault(), G == null || G.hide());
  }), ci ? G.loadURL(ci) : G.loadFile(ut.join(qu, "index.html"));
}
De.on("before-quit", () => {
  es = !0;
});
De.on("window-all-closed", () => {
  process.platform !== "darwin" ? Ht || De.quit() : (De.quit(), G = null);
});
De.on("activate", () => {
  vc.getAllWindows().length === 0 && Mu();
});
De.whenReady().then(() => {
  Mu(), process.platform !== "darwin" && RJ();
});
export {
  xQ as MAIN_DIST,
  qu as RENDERER_DIST,
  ci as VITE_DEV_SERVER_URL
};
