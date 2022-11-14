var cds;
(() => {
  "use strict";
  var t = {
      80: function (t, e) {
        var i =
          (this && this.__awaiter) ||
          function (t, e, i, n) {
            return new (i || (i = Promise))(function (o, r) {
              function c(t) {
                try {
                  a(n.next(t));
                } catch (t) {
                  r(t);
                }
              }
              function s(t) {
                try {
                  a(n.throw(t));
                } catch (t) {
                  r(t);
                }
              }
              function a(t) {
                var e;
                t.done
                  ? o(t.value)
                  : ((e = t.value),
                    e instanceof i
                      ? e
                      : new i(function (t) {
                          t(e);
                        })).then(c, s);
              }
              a((n = n.apply(t, e || [])).next());
            });
          };
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.AccountForm = void 0);
        class n {
          static onload(t) {
            return i(this, void 0, void 0, function* () {
              yield n.setTabVisibility(t), t.getFormContext().getAttribute("name").addOnChange(n.setTabVisibility);
            });
          }
          static setTabVisibility(t) {
            return i(this, void 0, void 0, function* () {
              const e = t.getFormContext(),
                i = e.getAttribute("name").getValue(),
                n = e.ui.tabs.get("DETAILS_TAB");
              "hide" == i ? n.setVisible(!1) : n.setVisible(!0);
            });
          }
        }
        e.AccountForm = n;
      },
      607: function (t, e, i) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, i, n) {
                  void 0 === n && (n = i);
                  var o = Object.getOwnPropertyDescriptor(e, i);
                  (o && !("get" in o ? !e.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[i];
                      },
                    }),
                    Object.defineProperty(t, n, o);
                }
              : function (t, e, i, n) {
                  void 0 === n && (n = i), (t[n] = e[i]);
                }),
          o =
            (this && this.__exportStar) ||
            function (t, e) {
              for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || n(e, t, i);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }), o(i(80), e);
      },
    },
    e = {},
    i = (function i(n) {
      var o = e[n];
      if (void 0 !== o) return o.exports;
      var r = (e[n] = { exports: {} });
      return t[n].call(r.exports, r, r.exports, i), r.exports;
    })(607);
  (cds = void 0 === cds ? {} : cds).ClientHooks = i;
})();
