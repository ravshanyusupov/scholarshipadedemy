window.__jivoOnError = function (e) {
    if (-1 === navigator.userAgent.search(/google/gi) && -1 === navigator.userAgent.search(/\+http:\/\/yandex\.com\/bots/gi)) try {
        var t = jivo_config && jivo_config.base_url, n = "main";
        t && (-1 !== t.indexOf("jvs") && (n = "jvs"), -1 !== t.indexOf("ru1") && (n = "ru1"), -1 !== t.indexOf("ya") && (n = "ya"));
        var o = window.location.protocol + "//err.jivosite.com/widget", r = "POST", i = {
            widget: "true",
            widget_version: window.jivo_version,
            level: 2,
            url: window.location.href,
            user_agent: navigator.userAgent,
            lineNumber: e && e.lineNumber,
            fileName: e && e.fileName,
            column: e && e.columnNumber,
            full_message: e && e.stack,
            short_message: e && e.message,
            shard: n
        }, a = new XMLHttpRequest;
        "withCredentials" in a ? a.open(r, o, !0) : "undefined" != typeof XDomainRequest && (a = new XDomainRequest).open(r, o), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(i))
    } catch (e) {
    }
}, function () {
    window.__hasStorage = !1;
    try {
        localStorage.setItem("testLocalStorage", "ok"), localStorage.removeItem("testLocalStorage"), window.__hasStorage = !0
    } catch (e) {
    }

    function t(i, s, e, t) {
        var a = i.console;
        if (a = a || {
            log: function () {
            }, error: function () {
            }
        }, i.WebSocket) {
            if (void 0 === i.jivo_magic_var) {
                i.jivo_magic_var = !0;
                var l, d, c, n, u, f, r, g, m, v, p, h, b = {
                        hasStorage: i.__hasStorage, jivoLoaderVersion: e, loadScript: function (e, t) {
                            var n = t || s, o = n.getElementsByTagName("script")[0], r = n.createElement("script");
                            me(r), o.parentNode.insertBefore(r, o).src = e
                        }, currentLoaderVersionCache: t
                    }, o = navigator.userAgent.toLowerCase(), w = /iPhone|iPad|iPod|Android|Windows Phone/i.test(o),
                    _ = s.createElement("iframe"), y = s.createElement("div"), S = 0, j = 5e3, C = 5, I = 4, T = 6048e5,
                    E = 0, N = 0, L = [],
                    H = [["//cdn-fr.jivosite.com"], ["//cdn-cis.jivosite.com"], ["//cdn-ca.jivosite.com"]], O = !1,
                    A = {
                        0: ["default"],
                        1: ["RU", "KZ", "UA", "BY"],
                        2: ["US", "CA", "AG", "BS", "BB", "BZ", "HT", "GT", "HN", "GD", "DM", "DO", "MX", "NI", "PA", "SV", "LC", "VC", "KN", "TT", "JM", "CR", "CU", "AR", "BR", "BO", "VE", "GY", "CO", "PY", "PE", "SR", "UY", "CL", "EC", "AU", "VU", "KI", "MH", "FM", "NR", "NZ", "PW", "PG", "WS", "SB", "TK", "TV", "FJ", "PH"]
                    }, k = "", B = "default", R = !1, M = $(),
                    x = ["AF", "CG", "CF", "GW", "ER", "IR", "IQ", "KP", "LR", "LB", "LY", "ML", "CU", "SO", "SD", "SY", "ZW", "YE"],
                    W = ["127-129-12k-12i-12c-12h", "12e-12i-12e-124-12c-12h", "131-12e-12l-12m-124-12b-12c", "124-12g-12o-129-12m-124-12g-12c-12h", "127-124-12s-12c-12s", "12g-124-12k-12c-12p-12n-124-12h-124", "3n-12j-124-12d-12l", "12g-129-12o-129-128-12k-12i-12h"];
                Se("Initialization"), i.__jivoBundleOnLoad = function (e) {
                    clearTimeout(u), f = e;
                    var t = ((new Date).getTime() - g) / 1e3;
                    6 < t && ee("loadTime", t);
                    ee("bundleLoaded", !0), ee("buildNumber", l.build_number), Se("Bundle is loaded"), function () {
                        n = s.body.lastChild, y.style && (y.style.opacity = "0", y.style.visibility = "hidden");
                        y.setAttribute("id", "jivo-iframe-container"), y.appendChild(_), n ? n.parentNode.insertBefore(y, n.nextSibling) : s.body.appendChild(y);
                        Q()
                    }()
                }, i.__jivoBundleInit = function (e) {
                    e.loaderContext = b, function () {
                        f = null;
                        var e = function (e) {
                            if (e) {
                                var t = e.querySelectorAll && e.querySelectorAll(".js-jivo-bundle");
                                return t && 0 < t.length ? t : e.getElementsByClassName("js-jivo-bundle")
                            }
                        }(je());
                        {
                            if (!e) throw a.error("Cannot get bundle script element"), new Error("Cannot get bundle script element");
                            for (var t = 0; t < e.length; t++) e[t].parentNode && (e[t].parentNode.removeChild(e[t]), e[t] = null);
                            e = null
                        }
                    }()
                }, i.jivo_init = function () {
                    S = 0;
                    var e = s.createEvent("Event");
                    e.initEvent("jBeforeunload", !0, !0), i.dispatchEvent(e), F()
                }, i.jivo_destroy = function () {
                    S = 0;
                    var e = s.createEvent("Event");
                    e.initEvent("jBeforeunload", !0, !0), i.dispatchEvent(e), delete i.jivo_magic_var, setTimeout(function () {
                        y.parentNode.removeChild(y)
                    }, 10)
                }, b.getHostURL = we, b.loadConfig = J, b.store = M, b.setInStore = ee;
                var U = !1, D = function (e) {
                    try {
                        e.blockedURI && -1 !== e.blockedURI.indexOf("jivosite") && (U = !0, s.removeEventListener("securitypolicyviolation", D))
                    } catch (e) {
                    }
                }.bind(this);
                try {
                    ye(s, "securitypolicyviolation", D)
                } catch (e) {
                }
                ie(), function () {
                    (M = $()).geoWidgetInfo.widgetId && (v = M.geoWidgetInfo.widgetId, M = $(), m = M.configHost);
                    ee("isNewCode", R), b.store = M
                }();
                var P, q, G = null, X = !1;
                p && (h = p.getAttribute("nonce")), v && m ? (Se("widgetId:", v, "configHost:", m), J(re())) : v && m || (P = "no_widget_id_or_confighost", q = 5, Math.random() <= .01 * q && V(P), a.error("Failed to evaluate the widgetId or configHost"))
            }
        } else a.log("Not supported browser");

        function J(e, n) {
            if (L.push(e), I < ++N) {
                Se("Config load limit is exceeded"), b.hasStorage && localStorage.removeItem("jv_loader_info_" + v);
                var t = new Error("Config load limit is exceeded"), o = "Config urls: " + L.join(";\r\n");
                try {
                    t.stack = o
                } catch (e) {
                    t = new Error("Config load limit is exceeded. " + o)
                }
                i.__jivoOnError(t)
            } else if (Se("Loading config from", e), M.deletedInfo.widgetId && M.deletedInfo.widgetId === v && M.deletedInfo.resolveTime && parseInt(M.deletedInfo.resolveTime) >= (new Date).getTime()) a.error("This widget is permanently removed"); else {
                var r = new XMLHttpRequest;
                r.onreadystatechange = function () {
                    if (4 === r.readyState) if (200 === r.status) {
                        var t = Ee(ve(r));
                        t ? (Se("Config is loaded", t), t.isDeleted ? ue() : n ? (t.chat_mode = n.chat_mode, t.options = n.options, t.botmode = n.botmode, t.geoip = n.geoip, Z(t, null)) : function (r, i) {
                            var a = new XMLHttpRequest;
                            a.onreadystatechange = function () {
                                if (4 === a.readyState) if (200 === a.status) {
                                    var e = Ee(ve(a));
                                    if (!e) throw new Error("Load widget status error");
                                    var t = a.getResponseHeader("X-BotMode"), n = a.getResponseHeader("X-GeoIP"),
                                        o = e.agents && e.agents.length;
                                    Se("Status is loaded", e, t, n, o), r.botmode = "yes" === t ? "yes" : null, r.geoip = n || ";;;", r.chat_mode = o ? "online" : "offline", r.options = e.premium ? 888 : 0, i(e.config_updated_ts)
                                } else if (0 !== a.status) throw r.botmode = null, r.geoip = ";;;", r.chat_mode = "offline", r.options = 0, i(null), new Error("Load widget status error: " + a.status)
                            };
                            var e = oe() + "//" + r.comet.host + "/widget/status/" + r.site_id + "/" + r.widget_id + "?rnd=" + Math.random();
                            a.open("GET", e, !0), a.send(null)
                        }(t, function (e) {
                            Z(t, e)
                        })) : fe()
                    } else 0 !== r.status && fe()
                }, r.open("GET", e, !0), r.send(null)
            }
        }

        function V(e) {
            if (0, -1 === navigator.userAgent.search(/google/gi) && -1 === navigator.userAgent.search(/\+http:\/\/yandex\.com\/bots/gi)) try {
                var t = oe() + "//telemetry.jivosite.com/w?cb=loader",
                    n = {event: e, widget_id: v, t: (new Date).getTime()};
                for (var o in n) t += "&" + o + "=" + encodeURIComponent(n[o]);
                var r = new XMLHttpRequest;
                "withCredentials" in r ? r.open("GET", t, !0) : "undefined" != typeof XDomainRequest && (r = new XDomainRequest).open("GET", t), r.send()
            } catch (e) {
            }
        }

        function Z(e, t) {
            if (e.isDeleted) ue(); else {
                if (e.config_updated_ts && e.config_updated_ts < t) return M.configUpdatedTs = t, J(re(), e);
                if (m !== e.base_url && !X) return Se("Wrong config host", m), m = e.base_url, void J(re());
                if (e.regions && !M.isChatStarted) {
                    var n = function (e) {
                        var t, n, o = e.regions, r = ce(e.geoip);
                        if (o) {
                            for (var i = Object.keys(o), a = 0; a < i.length; a++) for (var s = o[i[a]], l = 0; l < s.length; l++) if (1 != s.length || "default" !== s[l]) {
                                var d = ce(s[l]);
                                if (r.country === d.country) {
                                    if (r.region === d.region) return de(i[a], s[l], e.geoip);
                                    n || d.region || (n = de(i[a], s[l], e.geoip))
                                }
                            } else t = i[a];
                            if (n) return n;
                            if (t) return de(t, "default", e.geoip)
                        }
                    }(e);
                    if (n.widgetId !== v) return Se("Wrong geo-widget widgetId", v), ee("geoWidgetInfo", n), v = n.widgetId, void J(re())
                }
                if ((G = e.ab_segment) && G.name && G.host && G.staticHost && 1 !== e.site_id) if (Se("AB-testing segmentation is enabled in config"), X = function (e, t) {
                    var n = M.abTesting, o = !1;
                    o = n && n.name === e.name ? n.match : function (e, t) {
                        if (Se('Check for criteria match of test "' + e.name + '"'), e.device) {
                            if (!function (e) {
                                return "desktop" !== e ? "mobile" !== e ? "all" === e && (Ie() || Te()) : Te() : Ie() && !Te()
                            }(e.device)) return Se('Segment "' + e.name + '" is NOT matched. Criteria: device'), !1
                        }
                        if (e.locale) {
                            if (!function (e, t) {
                                return e === t.locale
                            }(e.locale, t)) return Se('Segment "' + e.name + '" is NOT matched. Criteria: locale'), !1
                        }
                        if (e.percentage) {
                            if (!function (e) {
                                return Math.random() <= .01 * e
                            }(e.percentage)) return Se('Segment "' + e.name + '" is NOT matched. Criteria: percentage'), !1
                        }
                        return Se('Segment "' + e.name + '" is matched!'), !0
                    }(e, t);
                    return ee("abTesting", {name: e.name, match: o}), o
                }(G, e)) {
                    Se("Ab-testing segment match! Segment:", G.name);
                    var o = "//" + G.host;
                    Se('Setting new base_url. Was: "' + e.base_url + '". New: "' + o + '".'), e.base_url = o, Se('Setting new static_host. Was: "' + e.static_host + '". New: "' + G.staticHost + '".'), e.static_host = G.staticHost, ee("availableHostInfo", {
                        type: M.availableHostInfo.type,
                        retriesCount: M.availableHostInfo.retriesCount,
                        host: null
                    })
                } else Se("Ab-testing segment is NOT matched"); else ee("abTesting", null), Se("AB-testing segmentation is NOT enabled in config"), ee("configHost", m);
                !function (e) {
                    {
                        if (ee("log", !!e.logs), i.jivo_config = l = e, void 0 !== l.host_blacklist && 0 <= l.host_blacklist.indexOf(i.location.host)) throw Se("Host is blacklisted", i.location.host), new Error("Placing widget is forbidden on " + i.top.location.host);
                        if (function () {
                            var e = l.geoip.split(";")[0];
                            return 0 <= x.indexOf(e)
                        }()) return a.log("[Jivo]: Service unavailable for country");
                        if (!e.disable_stop_words && function () {
                            var e = !1, t = function (e) {
                                    return e.map(function (e) {
                                        return e.split("-").map(function (e) {
                                            return String.fromCharCode(parseInt(e, 32) - 20)
                                        }).join("")
                                    })
                                }(W), n = s.querySelector('meta[name="description"]'),
                                o = s.querySelector('meta[name="keywords"]'), r = s.title,
                                i = n && n.content ? n.content : "", a = o && o.content ? o.content : "";
                            (pe(r, t) || pe(i, t) || pe(a, t)) && (e = !0);
                            return e
                        }()) return V("error_code_1015"), Se("Init error, code 1015.");
                        if (w && l.disable_mobile) return Se("Mobile widget is disabled")
                    }
                    {
                    }
                    l.static_host && (~l.static_host.search(/\/\/cdn(-\w+)?.jivosite.com(\/\w)?/) || ~l.static_host.search(/\/\/code(-\w+)?.jivosite.com(\/\w)?/)) && (O = !0);
                    Se("isCdnProvider: ", O), "complete" == s.readyState ? z() : M.bundleLoaded && M.buildNumber == l.build_number ? "interactive" == s.readyState ? z() : ye(i, "DOMContentLoaded", z) : (ee("bundleLoaded", !1), ye(i, "load", z))
                }(e)
            }
        }

        function z() {
            Se("Widget initialization"), function () {
                if ("string" == typeof l.geoip && "" !== l.geoip) {
                    var e = l.geoip.split(";")[0];
                    null !== he(e) && (B = e)
                }
                if (!be()) {
                    ee("availableHostInfo", {type: null, retriesCount: null, host: null}), ee("buildNumber", null)
                }
                var t = l.static_host ? l.static_host.split("/") : [];
                t = O ? [t[2], t[3]] : t, k = t[1] ? "/" + t[1] : "";
                var n = M.availableHostInfo;
                4 < (E = n.retriesCount ? n.retriesCount : E) && (E = 4);
                r = he(B)
            }(), function () {
                Se("Iframe initialization"), _.src = "javascript:void(0)", _.role = "presentation", _.allow = "autoplay", _.title = "Jivochat", _.setAttribute("name", "jivo_container"), _.setAttribute("id", "jivo_container"), _.setAttribute("frameborder", "no"), h && _.setAttribute("nonce", h);
                i.atob && "complete" !== s.readyState ? ye(i, "load", F) : F();
                ye(i, "message", function (e) {
                    if (e && e.data && "object" == typeof e.data) {
                        var t, n, o = e.data;
                        if ("in_node_webkit" == o.name && (t || (t = e.source, n = e.origin), t && n)) {
                            i.jivo_cobrowse = {source: t, origin: n};
                            var r = "jv_" + encodeURIComponent("langpack") + "_" + l.widget_id + "=" + encodeURIComponent(Ne(o.langpack));
                            l.cookie_domain && (r += "; domain=" + l.cookie_domain), r += "; path=/", s.cookie = r, t.postMessage({name: "widget_ready"}, n)
                        }
                        "iframe_url_changed" != o.name && "iframe_url_changed" != o || Q()
                    } else l && 1 === l.logs && a && a.log && a.log("Error receive postMessage, window message event is empty.")
                })
            }()
        }

        function F() {
            var e = we();
            Se("startLoadBundle", e), (l.build_number === M.buildNumber || e === l.base_url) && (be() || e === l.base_url) ? K(e) : Y(e)
        }

        function Y(e) {
            var t = {type: X ? null : M.availableHostInfo.type, retriesCount: X ? null : E, host: X ? null : e};
            if (O) return Se("Do not ping cdn-provider", e), ee("availableHostInfo", t), ee("buildNumber", l.build_number), K(e);
            var n = new XMLHttpRequest, o = oe() + we(!0) + "/ping?rand=" + (new Date).getTime();
            Se("Pinging host", o), n.onreadystatechange = function () {
                4 === n.readyState && (204 === n.status ? (clearTimeout(u), Se("Host is available", e), ee("availableHostInfo", t), ee("buildNumber", l.build_number), K(e)) : 0 !== n.status && (Se("Ping host error", e), _e("error", e, n.status)))
            }, n.open("GET", o, !0), n.send(null), u = setTimeout(function () {
                _e("timeout")
            }, j)
        }

        function K(e) {
            Se("Insertion of bundle code from", e);
            var t, n, o = je(), r = s.createElement("script"),
                i = (t = e, n = l.bundle_folder ? l.bundle_folder : "", t + n + "/js/bundle_" + l.locale + ".js?rand=" + l.build_number);
            g = (new Date).getTime(), me(r), r.className = "js-jivo-bundle", r.src = oe() + i, b.bundleSrc = i, r.onerror = function () {
                Se("loadBundle errorBundle", e), s.getElementById("jcont") && _e("errorBundle", e)
            }, o.appendChild(r)
        }

        function Q() {
            if (!(3 < S++)) {
                if (!f) return S--, F();
                try {
                    c = _.contentWindow.document
                } catch (e) {
                    d = s.domain, _.src = "javascript:var d=document.open();d.domain='" + d + "';void(0);", c = _.contentWindow.document
                }
                var e = '<meta name="google" content="notranslate"><meta http-equiv="X-UA-Compatible" content="IE=edge" />',
                    t = "window.onerror = function (message, url, lineNumber, columnNumber, error) {    if (error && error.error) {        error = error.error;    }    if (!error || !(error instanceof Error)) {        error = {};    }    error.stack = (message || error.message) + ' ' + error.stack ? ' ' + error.stack : '';    error.message = 'Bundle init error';    error.columnNumber = columnNumber;    error.lineNumber = lineNumber;    error.url = url;    window.parent.__jivoOnError(error);};" + f;
                if (c.head && c.body) {
                    c.body.class = "notranslate", c.head.innerHTML = e;
                    var n = s.createElement("script");
                    n.type = "text/javascript", h && n.setAttribute("nonce", h), n.innerHTML = t, c.head.appendChild(n)
                } else {
                    var o = '<body class="notranslate"></body>',
                        r = '<script type="text/javascript" nonce="' + h + '">' + t + "<\/script>",
                        i = "<head>" + e + r + "</head>";
                    c.write("<!doctype HTML>" + i + o), i = o = r = null
                }
                c.close(), t = null
            }
        }

        function $() {
            var e = {
                isChatStarted: null,
                geoWidgetInfo: {widgetId: null, clientLocation: null, region: null},
                configHost: null,
                deletedInfo: {widgetId: null, resolveTime: null},
                availableHostInfo: {retriesCount: null, type: null, host: null},
                abTesting: null,
                buildNumber: null,
                bundleLoaded: null,
                isNewCode: null,
                loadTime: null,
                log: null,
                configUpdatedTs: null
            };
            if (b.hasStorage && (localStorage.removeItem("jv_loader_info"), v)) {
                var t = Ee(localStorage.getItem("jv_loader_info_" + v));
                t && te(t, e)
            }
            return e
        }

        function ee(e, t) {
            if (M[e] = t, b.hasStorage && v) {
                var n = {};
                te(M, n), localStorage.setItem("jv_loader_info_" + v, Ne(n))
            }
        }

        function te(t, n) {
            Object.keys(t).forEach(function (e) {
                !function (e) {
                    if (ne(e)) return !0;
                    if ("object" == typeof e) {
                        for (var t = Object.keys(e), n = 0; n < t.length; n++) if (!ne(e[t[n]])) return !1;
                        return !0
                    }
                }(t[e]) && (n[e] = t[e])
            })
        }

        function ne(e) {
            return null === e && "object" == typeof e
        }

        function oe() {
            var e = i.location && i.location.protocol;
            return -1 === ["http", "https"].indexOf(e || "") && (e = "https:"), e
        }

        function re() {
            var e = "";
            return M.configUpdatedTs && (e = "?v=" + M.configUpdatedTs), oe() + m + "/script/widget/config/" + v + e
        }

        function ie() {
            p = s.currentScript ? s.currentScript : s.querySelector("script[jv-id]") || s.querySelector("script[data-jv-id]");
            var e, t = function () {
                if (p) return p.src;
                try {
                    throw new Error("Get script URL")
                } catch (e) {
                    var t = e.stack;
                    if (t) {
                        var n = ae(t), o = se(t), r = le(t);
                        return n ? n[0] : o ? o[0] : r ? r[0] : null
                    }
                }
            }(), n = ae(t), o = se(t), r = le(t);
            m || (n ? (m = "//" + n[1], R = !0) : o ? m = "//" + o[1] : r && (m = "//" + r[1])), v || (o && o[2] ? (v = o[2], R = !1) : r && r[2] ? (v = r[2], R = !1) : (R = !0, p && (v = p.getAttribute("jv-id") || p.getAttribute("data-jv-id")), v || (e = t.match(/https?:\/\/\S+\/widget\/([A-Za-z0-9]+)/), v = e ? e[1] : null)))
        }

        function ae(e) {
            return e && e.match(/https?:\/\/(\S+\.com)\/(widget\.js|widget\/[A-Za-z0-9]+)/)
        }

        function se(e) {
            return e && e.match(/https?:\/\/(\S+)\/script\/widget\/([A-Za-z0-9]+)/)
        }

        function le(e) {
            return e && e.match(/https?:\/\/(\S+)\/script\/geo-widget\/([A-Za-z0-9]+)/)
        }

        function de(e, t, n) {
            return {widgetId: e, region: t, clientLocation: n}
        }

        function ce(e) {
            if ("string" == typeof e && "" !== e) {
                var t = e.split(";");
                return {country: t[0], region: t[1], city: t[2]}
            }
        }

        function ue() {
            Se("Widget was removed", v), ee("configHost", null), M.geoWidgetInfo.widgetId || M.isChatStarted ? (ee("geoWidgetInfo", de(null, null, null)), ee("isChatStarted", null), ge()) : (ee("deletedInfo", {
                widgetId: v,
                resolveTime: ((new Date).getTime() + T).toString()
            }), a.error("Widget " + v + " is permanently removed. Host: " + m), V("widget_deleted"))
        }

        function fe() {
            Se("Config loading error"), ee("geoWidgetInfo", de(null, null, null)), ee("isChatStarted", null), ee("configHost", null), ge()
        }

        function ge() {
            m = v = null, ie(), J(re())
        }

        function me(e) {
            if (e) return e.type = "text/javascript", e.async = !0, e.charset = "UTF-8", h && e.setAttribute("nonce", h), e
        }

        function ve(e) {
            return e.responseType && "text" !== e.responseType ? "document" === e.responseType ? e.responseXML : e.response : e.responseText
        }

        function pe(e, t) {
            for (var n = !1, o = 0; o < t.length; o++) {
                var r = t[o].toLowerCase(), i = new RegExp("([, .]|^)" + r + "([, .]|$)", "gi");
                if (-1 < e.toLowerCase().search(i)) {
                    n = !0;
                    break
                }
            }
            return n
        }

        function he(t) {
            var e = Object.keys(A), n = null;
            return e.forEach(function (e) {
                n || -1 !== A[e].indexOf(t) && (n = e)
            }), n
        }

        function be() {
            var e = M.availableHostInfo;
            return M.buildNumber === l.build_number && e.host
        }

        function we(e) {
            var t = e ? "" : k;
            if (!l.static_host) return l.base_url;
            if (O) return l.static_host;
            var n = !1;
            if (!e && M.availableHostInfo && M.availableHostInfo.host) {
                var o = M.availableHostInfo.host.split("/");
                (o[3] ? "/" + o[3] : "") !== k && (n = !0)
            }
            return be() && !n ? M.availableHostInfo.host : 0 === E ? (r = he(B), H[r] + t) : 1 === E ? (r = function e(t, n) {
                var o = Object.keys(t);
                var r = (i = o, i[Math.floor(Math.random() * i.length)]);
                var i;
                return r === n ? e(t, n) : r
            }(A, r), H[r] + t) : l.base_url
        }

        function _e(e, t, n) {
            if (clearTimeout(u), ++E >= C) {
                if (Se("Bundle load retries count is exceeded"), Se("Bad csp is: " + U), U) return void a.error("Widget not loaded due CSP security policy.");
                var o = new Error("Bundle NOT loaded. Type: " + e + (t ? ". Host: " + t : "") + (n ? ". Status code: " + n : ""));
                i.__jivoOnError(o)
            } else {
                var r = {type: e, retriesCount: E, host: null};
                M.availableHostInfo = r, F()
            }
        }

        function ye(e, t, n) {
            var o;
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && (e.attachEvent("on" + t, (o = e, function () {
                n.call(o, i.event)
            })), e = null)
        }

        function Se() {
            if (M.log) {
                var e = Array.prototype.slice.call(arguments || []);
                e.unshift("Loader:"), a.log.apply(a, e)
            }
        }

        function je() {
            var e = s.head || s.getElementsByTagName("head")[0];
            if (!e) throw a.error("Cannot get document head element"), new Error("Cannot get document head element");
            return e
        }

        function Ce(e) {
            return -1 !== o.indexOf(e)
        }

        function Ie() {
            return Ce("chrome") && !Ce("opr/") && "Google Inc." === i.navigator.vendor
        }

        function Te() {
            return !Ce("windows") && Ce("android")
        }

        function Ee(e) {
            try {
                return i.MooTools && void 0 === JSON.parse ? JSON.decode(e) : JSON.parse(e)
            } catch (e) {
                return null
            }
        }

        function Ne(e) {
            return i.MooTools && void 0 === JSON.stringify ? JSON.encode(e) : JSON.stringify(e)
        }
    }

    var n = t, e = null;
    if (window.__hasStorage) {
        try {
            e = JSON.parse(localStorage.getItem("__jivoLoader"))
        } catch (e) {
            e.message = "Loader parse error", window.__jivoOnError(e)
        }
        e && .1 < e.version && (n = new Function("window", "document", "broswerCacheLoaderVersion", "currentLoaderVersionCache", "(" + e.code + ")(window, document, broswerCacheLoaderVersion, currentLoaderVersionCache)"))
    }
    try {
        n(window, document, .1, e ? e.version : .1)
    } catch (e) {
        e.message = e.message ? "Loader error. " + e.message : "Loader error", window.__jivoOnError(e), delete window.jivo_magic_var, (n = t)(window, document, .1, .1)
    }
}();