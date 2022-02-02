var _T = Object.defineProperty,
  $T = Object.defineProperties
var qT = Object.getOwnPropertyDescriptors
var wj = Object.getOwnPropertySymbols
var KT = Object.prototype.hasOwnProperty,
  M0 = Object.prototype.propertyIsEnumerable
var Ej = (Y, I, J) =>
    I in Y ? _T(Y, I, {enumerable: !0, configurable: !0, writable: !0, value: J}) : (Y[I] = J),
  z = (Y, I) => {
    for (var J in I || (I = {})) KT.call(I, J) && Ej(Y, J, I[J])
    if (wj) for (var J of wj(I)) M0.call(I, J) && Ej(Y, J, I[J])
    return Y
  },
  h = (Y, I) => $T(Y, qT(I))
;(function (Y, I) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? I(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], I)
    : ((Y = typeof globalThis != 'undefined' ? globalThis : Y || self),
      I((Y['bootstrap-vue-3'] = {}), Y.Vue))
})(this, function (Y, I) {
  'use strict'
  function J(M = '') {
    return `__BVID__${Math.random().toString().substr(2, 6)}___BV_${M}__`
  }
  function P(M, A) {
    return I.computed(() => M || J(A))
  }
  var c = (M, A) => {
    const D = M.__vccOpts || M
    for (const [g, N] of A) D[g] = N
    return D
  }
  const gD = Symbol(),
    Tj = I.defineComponent({
      name: 'BAccordion',
      props: {
        flush: {type: Boolean, default: !1},
        free: {type: Boolean, default: !1},
        id: {type: String, default: void 0},
      },
      setup(M) {
        const A = P(M.id, 'accordion'),
          D = I.computed(() => ({'accordion-flush': M.flush}))
        return M.free || I.provide(gD, `${A.value}`), {computedId: A, classes: D}
      },
    }),
    xj = ['id']
  function yj(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        {id: M.computedId, class: I.normalizeClass(['accordion', M.classes])},
        [I.renderSlot(M.$slots, 'default')],
        10,
        xj
      )
    )
  }
  var ND = c(Tj, [['render', yj]]),
    X = 'top',
    f = 'bottom',
    H = 'right',
    F = 'left',
    lA = 'auto',
    pM = [X, f, H, F],
    aM = 'start',
    ZM = 'end',
    LD = 'clippingParents',
    uI = 'viewport',
    VM = 'popper',
    jD = 'reference',
    CI = pM.reduce(function (M, A) {
      return M.concat([A + '-' + aM, A + '-' + ZM])
    }, []),
    tI = [].concat(pM, [lA]).reduce(function (M, A) {
      return M.concat([A, A + '-' + aM, A + '-' + ZM])
    }, []),
    SD = 'beforeRead',
    uD = 'read',
    CD = 'afterRead',
    tD = 'beforeMain',
    iD = 'main',
    wD = 'afterMain',
    ED = 'beforeWrite',
    TD = 'write',
    xD = 'afterWrite',
    yD = [SD, uD, CD, tD, iD, wD, ED, TD, xD]
  function gM(M) {
    return M ? (M.nodeName || '').toLowerCase() : null
  }
  function IM(M) {
    if (M == null) return window
    if (M.toString() !== '[object Window]') {
      var A = M.ownerDocument
      return (A && A.defaultView) || window
    }
    return M
  }
  function BM(M) {
    var A = IM(M).Element
    return M instanceof A || M instanceof Element
  }
  function q(M) {
    var A = IM(M).HTMLElement
    return M instanceof A || M instanceof HTMLElement
  }
  function YD(M) {
    if (typeof ShadowRoot == 'undefined') return !1
    var A = IM(M).ShadowRoot
    return M instanceof A || M instanceof ShadowRoot
  }
  function Yj(M) {
    var A = M.state
    Object.keys(A.elements).forEach(function (D) {
      var g = A.styles[D] || {},
        N = A.attributes[D] || {},
        L = A.elements[D]
      !q(L) ||
        !gM(L) ||
        (Object.assign(L.style, g),
        Object.keys(N).forEach(function (j) {
          var S = N[j]
          S === !1 ? L.removeAttribute(j) : L.setAttribute(j, S === !0 ? '' : S)
        }))
    })
  }
  function ej(M) {
    var A = M.state,
      D = {
        popper: {position: A.options.strategy, left: '0', top: '0', margin: '0'},
        arrow: {position: 'absolute'},
        reference: {},
      }
    return (
      Object.assign(A.elements.popper.style, D.popper),
      (A.styles = D),
      A.elements.arrow && Object.assign(A.elements.arrow.style, D.arrow),
      function () {
        Object.keys(A.elements).forEach(function (g) {
          var N = A.elements[g],
            L = A.attributes[g] || {},
            j = Object.keys(A.styles.hasOwnProperty(g) ? A.styles[g] : D[g]),
            S = j.reduce(function (u, T) {
              return (u[T] = ''), u
            }, {})
          !q(N) ||
            !gM(N) ||
            (Object.assign(N.style, S),
            Object.keys(L).forEach(function (u) {
              N.removeAttribute(u)
            }))
        })
      }
    )
  }
  var iI = {
    name: 'applyStyles',
    enabled: !0,
    phase: 'write',
    fn: Yj,
    effect: ej,
    requires: ['computeStyles'],
  }
  function NM(M) {
    return M.split('-')[0]
  }
  var UM = Math.max,
    sA = Math.min,
    PM = Math.round
  function XM(M, A) {
    A === void 0 && (A = !1)
    var D = M.getBoundingClientRect(),
      g = 1,
      N = 1
    if (q(M) && A) {
      var L = M.offsetHeight,
        j = M.offsetWidth
      j > 0 && (g = PM(D.width) / j || 1), L > 0 && (N = PM(D.height) / L || 1)
    }
    return {
      width: D.width / g,
      height: D.height / N,
      top: D.top / N,
      right: D.right / g,
      bottom: D.bottom / N,
      left: D.left / g,
      x: D.left / g,
      y: D.top / N,
    }
  }
  function wI(M) {
    var A = XM(M),
      D = M.offsetWidth,
      g = M.offsetHeight
    return (
      Math.abs(A.width - D) <= 1 && (D = A.width),
      Math.abs(A.height - g) <= 1 && (g = A.height),
      {x: M.offsetLeft, y: M.offsetTop, width: D, height: g}
    )
  }
  function eD(M, A) {
    var D = A.getRootNode && A.getRootNode()
    if (M.contains(A)) return !0
    if (D && YD(D)) {
      var g = A
      do {
        if (g && M.isSameNode(g)) return !0
        g = g.parentNode || g.host
      } while (g)
    }
    return !1
  }
  function tM(M) {
    return IM(M).getComputedStyle(M)
  }
  function zj(M) {
    return ['table', 'td', 'th'].indexOf(gM(M)) >= 0
  }
  function EM(M) {
    return ((BM(M) ? M.ownerDocument : M.document) || window.document).documentElement
  }
  function oA(M) {
    return gM(M) === 'html' ? M : M.assignedSlot || M.parentNode || (YD(M) ? M.host : null) || EM(M)
  }
  function zD(M) {
    return !q(M) || tM(M).position === 'fixed' ? null : M.offsetParent
  }
  function cj(M) {
    var A = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
      D = navigator.userAgent.indexOf('Trident') !== -1
    if (D && q(M)) {
      var g = tM(M)
      if (g.position === 'fixed') return null
    }
    for (var N = oA(M); q(N) && ['html', 'body'].indexOf(gM(N)) < 0; ) {
      var L = tM(N)
      if (
        L.transform !== 'none' ||
        L.perspective !== 'none' ||
        L.contain === 'paint' ||
        ['transform', 'perspective'].indexOf(L.willChange) !== -1 ||
        (A && L.willChange === 'filter') ||
        (A && L.filter && L.filter !== 'none')
      )
        return N
      N = N.parentNode
    }
    return null
  }
  function gA(M) {
    for (var A = IM(M), D = zD(M); D && zj(D) && tM(D).position === 'static'; ) D = zD(D)
    return D && (gM(D) === 'html' || (gM(D) === 'body' && tM(D).position === 'static'))
      ? A
      : D || cj(M) || A
  }
  function EI(M) {
    return ['top', 'bottom'].indexOf(M) >= 0 ? 'x' : 'y'
  }
  function NA(M, A, D) {
    return UM(M, sA(A, D))
  }
  function aj(M, A, D) {
    var g = NA(M, A, D)
    return g > D ? D : g
  }
  function cD() {
    return {top: 0, right: 0, bottom: 0, left: 0}
  }
  function aD(M) {
    return Object.assign({}, cD(), M)
  }
  function UD(M, A) {
    return A.reduce(function (D, g) {
      return (D[g] = M), D
    }, {})
  }
  var Uj = function (A, D) {
    return (
      (A = typeof A == 'function' ? A(Object.assign({}, D.rects, {placement: D.placement})) : A),
      aD(typeof A != 'number' ? A : UD(A, pM))
    )
  }
  function lj(M) {
    var A,
      D = M.state,
      g = M.name,
      N = M.options,
      L = D.elements.arrow,
      j = D.modifiersData.popperOffsets,
      S = NM(D.placement),
      u = EI(S),
      T = [F, H].indexOf(S) >= 0,
      E = T ? 'height' : 'width'
    if (!(!L || !j)) {
      var t = Uj(N.padding, D),
        i = wI(L),
        C = u === 'y' ? X : F,
        x = u === 'y' ? f : H,
        w = D.rects.reference[E] + D.rects.reference[u] - j[u] - D.rects.popper[E],
        e = j[u] - D.rects.reference[u],
        a = gA(L),
        U = a ? (u === 'y' ? a.clientHeight || 0 : a.clientWidth || 0) : 0,
        o = w / 2 - e / 2,
        l = t[C],
        s = U - i[E] - t[x],
        b = U / 2 - i[E] / 2 + o,
        n = NA(l, b, s),
        G = u
      D.modifiersData[g] = ((A = {}), (A[G] = n), (A.centerOffset = n - b), A)
    }
  }
  function sj(M) {
    var A = M.state,
      D = M.options,
      g = D.element,
      N = g === void 0 ? '[data-popper-arrow]' : g
    N != null &&
      ((typeof N == 'string' && ((N = A.elements.popper.querySelector(N)), !N)) ||
        !eD(A.elements.popper, N) ||
        (A.elements.arrow = N))
  }
  var lD = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: lj,
    effect: sj,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
  }
  function FM(M) {
    return M.split('-')[1]
  }
  var oj = {top: 'auto', right: 'auto', bottom: 'auto', left: 'auto'}
  function Oj(M) {
    var A = M.x,
      D = M.y,
      g = window,
      N = g.devicePixelRatio || 1
    return {x: PM(A * N) / N || 0, y: PM(D * N) / N || 0}
  }
  function sD(M) {
    var A,
      D = M.popper,
      g = M.popperRect,
      N = M.placement,
      L = M.variation,
      j = M.offsets,
      S = M.position,
      u = M.gpuAcceleration,
      T = M.adaptive,
      E = M.roundOffsets,
      t = M.isFixed,
      i = j.x,
      C = i === void 0 ? 0 : i,
      x = j.y,
      w = x === void 0 ? 0 : x,
      e = typeof E == 'function' ? E({x: C, y: w}) : {x: C, y: w}
    ;(C = e.x), (w = e.y)
    var a = j.hasOwnProperty('x'),
      U = j.hasOwnProperty('y'),
      o = F,
      l = X,
      s = window
    if (T) {
      var b = gA(D),
        n = 'clientHeight',
        G = 'clientWidth'
      if (
        (b === IM(D) &&
          ((b = EM(D)),
          tM(b).position !== 'static' &&
            S === 'absolute' &&
            ((n = 'scrollHeight'), (G = 'scrollWidth'))),
        (b = b),
        N === X || ((N === F || N === H) && L === ZM))
      ) {
        l = f
        var O = t && s.visualViewport ? s.visualViewport.height : b[n]
        ;(w -= O - g.height), (w *= u ? 1 : -1)
      }
      if (N === F || ((N === X || N === f) && L === ZM)) {
        o = H
        var k = t && s.visualViewport ? s.visualViewport.width : b[G]
        ;(C -= k - g.width), (C *= u ? 1 : -1)
      }
    }
    var W = Object.assign({position: S}, T && oj),
      B = E === !0 ? Oj({x: C, y: w}) : {x: C, y: w}
    if (((C = B.x), (w = B.y), u)) {
      var d
      return Object.assign(
        {},
        W,
        ((d = {}),
        (d[l] = U ? '0' : ''),
        (d[o] = a ? '0' : ''),
        (d.transform =
          (s.devicePixelRatio || 1) <= 1
            ? 'translate(' + C + 'px, ' + w + 'px)'
            : 'translate3d(' + C + 'px, ' + w + 'px, 0)'),
        d)
      )
    }
    return Object.assign(
      {},
      W,
      ((A = {}), (A[l] = U ? w + 'px' : ''), (A[o] = a ? C + 'px' : ''), (A.transform = ''), A)
    )
  }
  function mj(M) {
    var A = M.state,
      D = M.options,
      g = D.gpuAcceleration,
      N = g === void 0 ? !0 : g,
      L = D.adaptive,
      j = L === void 0 ? !0 : L,
      S = D.roundOffsets,
      u = S === void 0 ? !0 : S,
      T = {
        placement: NM(A.placement),
        variation: FM(A.placement),
        popper: A.elements.popper,
        popperRect: A.rects.popper,
        gpuAcceleration: N,
        isFixed: A.options.strategy === 'fixed',
      }
    A.modifiersData.popperOffsets != null &&
      (A.styles.popper = Object.assign(
        {},
        A.styles.popper,
        sD(
          Object.assign({}, T, {
            offsets: A.modifiersData.popperOffsets,
            position: A.options.strategy,
            adaptive: j,
            roundOffsets: u,
          })
        )
      )),
      A.modifiersData.arrow != null &&
        (A.styles.arrow = Object.assign(
          {},
          A.styles.arrow,
          sD(
            Object.assign({}, T, {
              offsets: A.modifiersData.arrow,
              position: 'absolute',
              adaptive: !1,
              roundOffsets: u,
            })
          )
        )),
      (A.attributes.popper = Object.assign({}, A.attributes.popper, {
        'data-popper-placement': A.placement,
      }))
  }
  var TI = {name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: mj, data: {}},
    OA = {passive: !0}
  function dj(M) {
    var A = M.state,
      D = M.instance,
      g = M.options,
      N = g.scroll,
      L = N === void 0 ? !0 : N,
      j = g.resize,
      S = j === void 0 ? !0 : j,
      u = IM(A.elements.popper),
      T = [].concat(A.scrollParents.reference, A.scrollParents.popper)
    return (
      L &&
        T.forEach(function (E) {
          E.addEventListener('scroll', D.update, OA)
        }),
      S && u.addEventListener('resize', D.update, OA),
      function () {
        L &&
          T.forEach(function (E) {
            E.removeEventListener('scroll', D.update, OA)
          }),
          S && u.removeEventListener('resize', D.update, OA)
      }
    )
  }
  var xI = {
      name: 'eventListeners',
      enabled: !0,
      phase: 'write',
      fn: function () {},
      effect: dj,
      data: {},
    },
    nj = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'}
  function mA(M) {
    return M.replace(/left|right|bottom|top/g, function (A) {
      return nj[A]
    })
  }
  var bj = {start: 'end', end: 'start'}
  function oD(M) {
    return M.replace(/start|end/g, function (A) {
      return bj[A]
    })
  }
  function yI(M) {
    var A = IM(M),
      D = A.pageXOffset,
      g = A.pageYOffset
    return {scrollLeft: D, scrollTop: g}
  }
  function YI(M) {
    return XM(EM(M)).left + yI(M).scrollLeft
  }
  function hj(M) {
    var A = IM(M),
      D = EM(M),
      g = A.visualViewport,
      N = D.clientWidth,
      L = D.clientHeight,
      j = 0,
      S = 0
    return (
      g &&
        ((N = g.width),
        (L = g.height),
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
          ((j = g.offsetLeft), (S = g.offsetTop))),
      {width: N, height: L, x: j + YI(M), y: S}
    )
  }
  function Wj(M) {
    var A,
      D = EM(M),
      g = yI(M),
      N = (A = M.ownerDocument) == null ? void 0 : A.body,
      L = UM(D.scrollWidth, D.clientWidth, N ? N.scrollWidth : 0, N ? N.clientWidth : 0),
      j = UM(D.scrollHeight, D.clientHeight, N ? N.scrollHeight : 0, N ? N.clientHeight : 0),
      S = -g.scrollLeft + YI(M),
      u = -g.scrollTop
    return (
      tM(N || D).direction === 'rtl' && (S += UM(D.clientWidth, N ? N.clientWidth : 0) - L),
      {width: L, height: j, x: S, y: u}
    )
  }
  function eI(M) {
    var A = tM(M),
      D = A.overflow,
      g = A.overflowX,
      N = A.overflowY
    return /auto|scroll|overlay|hidden/.test(D + N + g)
  }
  function OD(M) {
    return ['html', 'body', '#document'].indexOf(gM(M)) >= 0
      ? M.ownerDocument.body
      : q(M) && eI(M)
      ? M
      : OD(oA(M))
  }
  function LA(M, A) {
    var D
    A === void 0 && (A = [])
    var g = OD(M),
      N = g === ((D = M.ownerDocument) == null ? void 0 : D.body),
      L = IM(g),
      j = N ? [L].concat(L.visualViewport || [], eI(g) ? g : []) : g,
      S = A.concat(j)
    return N ? S : S.concat(LA(oA(j)))
  }
  function zI(M) {
    return Object.assign({}, M, {left: M.x, top: M.y, right: M.x + M.width, bottom: M.y + M.height})
  }
  function kj(M) {
    var A = XM(M)
    return (
      (A.top = A.top + M.clientTop),
      (A.left = A.left + M.clientLeft),
      (A.bottom = A.top + M.clientHeight),
      (A.right = A.left + M.clientWidth),
      (A.width = M.clientWidth),
      (A.height = M.clientHeight),
      (A.x = A.left),
      (A.y = A.top),
      A
    )
  }
  function mD(M, A) {
    return A === uI ? zI(hj(M)) : BM(A) ? kj(A) : zI(Wj(EM(M)))
  }
  function Qj(M) {
    var A = LA(oA(M)),
      D = ['absolute', 'fixed'].indexOf(tM(M).position) >= 0,
      g = D && q(M) ? gA(M) : M
    return BM(g)
      ? A.filter(function (N) {
          return BM(N) && eD(N, g) && gM(N) !== 'body'
        })
      : []
  }
  function Gj(M, A, D) {
    var g = A === 'clippingParents' ? Qj(M) : [].concat(A),
      N = [].concat(g, [D]),
      L = N[0],
      j = N.reduce(function (S, u) {
        var T = mD(M, u)
        return (
          (S.top = UM(T.top, S.top)),
          (S.right = sA(T.right, S.right)),
          (S.bottom = sA(T.bottom, S.bottom)),
          (S.left = UM(T.left, S.left)),
          S
        )
      }, mD(M, L))
    return (
      (j.width = j.right - j.left), (j.height = j.bottom - j.top), (j.x = j.left), (j.y = j.top), j
    )
  }
  function dD(M) {
    var A = M.reference,
      D = M.element,
      g = M.placement,
      N = g ? NM(g) : null,
      L = g ? FM(g) : null,
      j = A.x + A.width / 2 - D.width / 2,
      S = A.y + A.height / 2 - D.height / 2,
      u
    switch (N) {
      case X:
        u = {x: j, y: A.y - D.height}
        break
      case f:
        u = {x: j, y: A.y + A.height}
        break
      case H:
        u = {x: A.x + A.width, y: S}
        break
      case F:
        u = {x: A.x - D.width, y: S}
        break
      default:
        u = {x: A.x, y: A.y}
    }
    var T = N ? EI(N) : null
    if (T != null) {
      var E = T === 'y' ? 'height' : 'width'
      switch (L) {
        case aM:
          u[T] = u[T] - (A[E] / 2 - D[E] / 2)
          break
        case ZM:
          u[T] = u[T] + (A[E] / 2 - D[E] / 2)
          break
      }
    }
    return u
  }
  function vM(M, A) {
    A === void 0 && (A = {})
    var D = A,
      g = D.placement,
      N = g === void 0 ? M.placement : g,
      L = D.boundary,
      j = L === void 0 ? LD : L,
      S = D.rootBoundary,
      u = S === void 0 ? uI : S,
      T = D.elementContext,
      E = T === void 0 ? VM : T,
      t = D.altBoundary,
      i = t === void 0 ? !1 : t,
      C = D.padding,
      x = C === void 0 ? 0 : C,
      w = aD(typeof x != 'number' ? x : UD(x, pM)),
      e = E === VM ? jD : VM,
      a = M.rects.popper,
      U = M.elements[i ? e : E],
      o = Gj(BM(U) ? U : U.contextElement || EM(M.elements.popper), j, u),
      l = XM(M.elements.reference),
      s = dD({reference: l, element: a, strategy: 'absolute', placement: N}),
      b = zI(Object.assign({}, a, s)),
      n = E === VM ? b : l,
      G = {
        top: o.top - n.top + w.top,
        bottom: n.bottom - o.bottom + w.bottom,
        left: o.left - n.left + w.left,
        right: n.right - o.right + w.right,
      },
      O = M.modifiersData.offset
    if (E === VM && O) {
      var k = O[N]
      Object.keys(G).forEach(function (W) {
        var B = [H, f].indexOf(W) >= 0 ? 1 : -1,
          d = [X, f].indexOf(W) >= 0 ? 'y' : 'x'
        G[W] += k[d] * B
      })
    }
    return G
  }
  function rj(M, A) {
    A === void 0 && (A = {})
    var D = A,
      g = D.placement,
      N = D.boundary,
      L = D.rootBoundary,
      j = D.padding,
      S = D.flipVariations,
      u = D.allowedAutoPlacements,
      T = u === void 0 ? tI : u,
      E = FM(g),
      t = E
        ? S
          ? CI
          : CI.filter(function (x) {
              return FM(x) === E
            })
        : pM,
      i = t.filter(function (x) {
        return T.indexOf(x) >= 0
      })
    i.length === 0 && (i = t)
    var C = i.reduce(function (x, w) {
      return (x[w] = vM(M, {placement: w, boundary: N, rootBoundary: L, padding: j})[NM(w)]), x
    }, {})
    return Object.keys(C).sort(function (x, w) {
      return C[x] - C[w]
    })
  }
  function Jj(M) {
    if (NM(M) === lA) return []
    var A = mA(M)
    return [oD(M), A, oD(A)]
  }
  function pj(M) {
    var A = M.state,
      D = M.options,
      g = M.name
    if (!A.modifiersData[g]._skip) {
      for (
        var N = D.mainAxis,
          L = N === void 0 ? !0 : N,
          j = D.altAxis,
          S = j === void 0 ? !0 : j,
          u = D.fallbackPlacements,
          T = D.padding,
          E = D.boundary,
          t = D.rootBoundary,
          i = D.altBoundary,
          C = D.flipVariations,
          x = C === void 0 ? !0 : C,
          w = D.allowedAutoPlacements,
          e = A.options.placement,
          a = NM(e),
          U = a === e,
          o = u || (U || !x ? [mA(e)] : Jj(e)),
          l = [e].concat(o).reduce(function (DA, cM) {
            return DA.concat(
              NM(cM) === lA
                ? rj(A, {
                    placement: cM,
                    boundary: E,
                    rootBoundary: t,
                    padding: T,
                    flipVariations: x,
                    allowedAutoPlacements: w,
                  })
                : cM
            )
          }, []),
          s = A.rects.reference,
          b = A.rects.popper,
          n = new Map(),
          G = !0,
          O = l[0],
          k = 0;
        k < l.length;
        k++
      ) {
        var W = l[k],
          B = NM(W),
          d = FM(W) === aM,
          V = [X, f].indexOf(B) >= 0,
          r = V ? 'width' : 'height',
          p = vM(A, {placement: W, boundary: E, rootBoundary: t, altBoundary: i, padding: T}),
          $ = V ? (d ? H : F) : d ? f : X
        s[r] > b[r] && ($ = mA($))
        var IA = mA($),
          wM = []
        if (
          (L && wM.push(p[B] <= 0),
          S && wM.push(p[$] <= 0, p[IA] <= 0),
          wM.every(function (DA) {
            return DA
          }))
        ) {
          ;(O = W), (G = !1)
          break
        }
        n.set(W, wM)
      }
      if (G)
        for (
          var NI = x ? 3 : 1,
            MD = function (cM) {
              var UA = l.find(function (jI) {
                var rM = n.get(jI)
                if (rM)
                  return rM.slice(0, cM).every(function (AD) {
                    return AD
                  })
              })
              if (UA) return (O = UA), 'break'
            },
            aA = NI;
          aA > 0;
          aA--
        ) {
          var LI = MD(aA)
          if (LI === 'break') break
        }
      A.placement !== O && ((A.modifiersData[g]._skip = !0), (A.placement = O), (A.reset = !0))
    }
  }
  var nD = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn: pj,
    requiresIfExists: ['offset'],
    data: {_skip: !1},
  }
  function bD(M, A, D) {
    return (
      D === void 0 && (D = {x: 0, y: 0}),
      {
        top: M.top - A.height - D.y,
        right: M.right - A.width + D.x,
        bottom: M.bottom - A.height + D.y,
        left: M.left - A.width - D.x,
      }
    )
  }
  function hD(M) {
    return [X, H, f, F].some(function (A) {
      return M[A] >= 0
    })
  }
  function Zj(M) {
    var A = M.state,
      D = M.name,
      g = A.rects.reference,
      N = A.rects.popper,
      L = A.modifiersData.preventOverflow,
      j = vM(A, {elementContext: 'reference'}),
      S = vM(A, {altBoundary: !0}),
      u = bD(j, g),
      T = bD(S, N, L),
      E = hD(u),
      t = hD(T)
    ;(A.modifiersData[D] = {
      referenceClippingOffsets: u,
      popperEscapeOffsets: T,
      isReferenceHidden: E,
      hasPopperEscaped: t,
    }),
      (A.attributes.popper = Object.assign({}, A.attributes.popper, {
        'data-popper-reference-hidden': E,
        'data-popper-escaped': t,
      }))
  }
  var WD = {name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: Zj}
  function Vj(M, A, D) {
    var g = NM(M),
      N = [F, X].indexOf(g) >= 0 ? -1 : 1,
      L = typeof D == 'function' ? D(Object.assign({}, A, {placement: M})) : D,
      j = L[0],
      S = L[1]
    return (j = j || 0), (S = (S || 0) * N), [F, H].indexOf(g) >= 0 ? {x: S, y: j} : {x: j, y: S}
  }
  function Bj(M) {
    var A = M.state,
      D = M.options,
      g = M.name,
      N = D.offset,
      L = N === void 0 ? [0, 0] : N,
      j = tI.reduce(function (E, t) {
        return (E[t] = Vj(t, A.rects, L)), E
      }, {}),
      S = j[A.placement],
      u = S.x,
      T = S.y
    A.modifiersData.popperOffsets != null &&
      ((A.modifiersData.popperOffsets.x += u), (A.modifiersData.popperOffsets.y += T)),
      (A.modifiersData[g] = j)
  }
  var kD = {name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: Bj}
  function Pj(M) {
    var A = M.state,
      D = M.name
    A.modifiersData[D] = dD({
      reference: A.rects.reference,
      element: A.rects.popper,
      strategy: 'absolute',
      placement: A.placement,
    })
  }
  var cI = {name: 'popperOffsets', enabled: !0, phase: 'read', fn: Pj, data: {}}
  function Xj(M) {
    return M === 'x' ? 'y' : 'x'
  }
  function Fj(M) {
    var A = M.state,
      D = M.options,
      g = M.name,
      N = D.mainAxis,
      L = N === void 0 ? !0 : N,
      j = D.altAxis,
      S = j === void 0 ? !1 : j,
      u = D.boundary,
      T = D.rootBoundary,
      E = D.altBoundary,
      t = D.padding,
      i = D.tether,
      C = i === void 0 ? !0 : i,
      x = D.tetherOffset,
      w = x === void 0 ? 0 : x,
      e = vM(A, {boundary: u, rootBoundary: T, padding: t, altBoundary: E}),
      a = NM(A.placement),
      U = FM(A.placement),
      o = !U,
      l = EI(a),
      s = Xj(l),
      b = A.modifiersData.popperOffsets,
      n = A.rects.reference,
      G = A.rects.popper,
      O = typeof w == 'function' ? w(Object.assign({}, A.rects, {placement: A.placement})) : w,
      k =
        typeof O == 'number'
          ? {mainAxis: O, altAxis: O}
          : Object.assign({mainAxis: 0, altAxis: 0}, O),
      W = A.modifiersData.offset ? A.modifiersData.offset[A.placement] : null,
      B = {x: 0, y: 0}
    if (!!b) {
      if (L) {
        var d,
          V = l === 'y' ? X : F,
          r = l === 'y' ? f : H,
          p = l === 'y' ? 'height' : 'width',
          $ = b[l],
          IA = $ + e[V],
          wM = $ - e[r],
          NI = C ? -G[p] / 2 : 0,
          MD = U === aM ? n[p] : G[p],
          aA = U === aM ? -G[p] : -n[p],
          LI = A.elements.arrow,
          DA = C && LI ? wI(LI) : {width: 0, height: 0},
          cM = A.modifiersData['arrow#persistent']
            ? A.modifiersData['arrow#persistent'].padding
            : cD(),
          UA = cM[V],
          jI = cM[r],
          rM = NA(0, n[p], DA[p]),
          AD = o ? n[p] / 2 - NI - rM - UA - k.mainAxis : MD - rM - UA - k.mainAxis,
          XT = o ? -n[p] / 2 + NI + rM + jI + k.mainAxis : aA + rM + jI + k.mainAxis,
          ID = A.elements.arrow && gA(A.elements.arrow),
          FT = ID ? (l === 'y' ? ID.clientTop || 0 : ID.clientLeft || 0) : 0,
          gj = (d = W == null ? void 0 : W[l]) != null ? d : 0,
          vT = $ + AD - gj - FT,
          fT = $ + XT - gj,
          Nj = NA(C ? sA(IA, vT) : IA, $, C ? UM(wM, fT) : wM)
        ;(b[l] = Nj), (B[l] = Nj - $)
      }
      if (S) {
        var Lj,
          HT = l === 'x' ? X : F,
          RT = l === 'x' ? f : H,
          JM = b[s],
          SI = s === 'y' ? 'height' : 'width',
          jj = JM + e[HT],
          Sj = JM - e[RT],
          DD = [X, F].indexOf(a) !== -1,
          uj = (Lj = W == null ? void 0 : W[s]) != null ? Lj : 0,
          Cj = DD ? jj : JM - n[SI] - G[SI] - uj + k.altAxis,
          tj = DD ? JM + n[SI] + G[SI] - uj - k.altAxis : Sj,
          ij = C && DD ? aj(Cj, JM, tj) : NA(C ? Cj : jj, JM, C ? tj : Sj)
        ;(b[s] = ij), (B[s] = ij - JM)
      }
      A.modifiersData[g] = B
    }
  }
  var QD = {
    name: 'preventOverflow',
    enabled: !0,
    phase: 'main',
    fn: Fj,
    requiresIfExists: ['offset'],
  }
  function vj(M) {
    return {scrollLeft: M.scrollLeft, scrollTop: M.scrollTop}
  }
  function fj(M) {
    return M === IM(M) || !q(M) ? yI(M) : vj(M)
  }
  function Hj(M) {
    var A = M.getBoundingClientRect(),
      D = PM(A.width) / M.offsetWidth || 1,
      g = PM(A.height) / M.offsetHeight || 1
    return D !== 1 || g !== 1
  }
  function Rj(M, A, D) {
    D === void 0 && (D = !1)
    var g = q(A),
      N = q(A) && Hj(A),
      L = EM(A),
      j = XM(M, N),
      S = {scrollLeft: 0, scrollTop: 0},
      u = {x: 0, y: 0}
    return (
      (g || (!g && !D)) &&
        ((gM(A) !== 'body' || eI(L)) && (S = fj(A)),
        q(A) ? ((u = XM(A, !0)), (u.x += A.clientLeft), (u.y += A.clientTop)) : L && (u.x = YI(L))),
      {
        x: j.left + S.scrollLeft - u.x,
        y: j.top + S.scrollTop - u.y,
        width: j.width,
        height: j.height,
      }
    )
  }
  function _j(M) {
    var A = new Map(),
      D = new Set(),
      g = []
    M.forEach(function (L) {
      A.set(L.name, L)
    })
    function N(L) {
      D.add(L.name)
      var j = [].concat(L.requires || [], L.requiresIfExists || [])
      j.forEach(function (S) {
        if (!D.has(S)) {
          var u = A.get(S)
          u && N(u)
        }
      }),
        g.push(L)
    }
    return (
      M.forEach(function (L) {
        D.has(L.name) || N(L)
      }),
      g
    )
  }
  function $j(M) {
    var A = _j(M)
    return yD.reduce(function (D, g) {
      return D.concat(
        A.filter(function (N) {
          return N.phase === g
        })
      )
    }, [])
  }
  function qj(M) {
    var A
    return function () {
      return (
        A ||
          (A = new Promise(function (D) {
            Promise.resolve().then(function () {
              ;(A = void 0), D(M())
            })
          })),
        A
      )
    }
  }
  function Kj(M) {
    var A = M.reduce(function (D, g) {
      var N = D[g.name]
      return (
        (D[g.name] = N
          ? Object.assign({}, N, g, {
              options: Object.assign({}, N.options, g.options),
              data: Object.assign({}, N.data, g.data),
            })
          : g),
        D
      )
    }, {})
    return Object.keys(A).map(function (D) {
      return A[D]
    })
  }
  var GD = {placement: 'bottom', modifiers: [], strategy: 'absolute'}
  function rD() {
    for (var M = arguments.length, A = new Array(M), D = 0; D < M; D++) A[D] = arguments[D]
    return !A.some(function (g) {
      return !(g && typeof g.getBoundingClientRect == 'function')
    })
  }
  function dA(M) {
    M === void 0 && (M = {})
    var A = M,
      D = A.defaultModifiers,
      g = D === void 0 ? [] : D,
      N = A.defaultOptions,
      L = N === void 0 ? GD : N
    return function (S, u, T) {
      T === void 0 && (T = L)
      var E = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, GD, L),
          modifiersData: {},
          elements: {reference: S, popper: u},
          attributes: {},
          styles: {},
        },
        t = [],
        i = !1,
        C = {
          state: E,
          setOptions: function (a) {
            var U = typeof a == 'function' ? a(E.options) : a
            w(),
              (E.options = Object.assign({}, L, E.options, U)),
              (E.scrollParents = {
                reference: BM(S) ? LA(S) : S.contextElement ? LA(S.contextElement) : [],
                popper: LA(u),
              })
            var o = $j(Kj([].concat(g, E.options.modifiers)))
            return (
              (E.orderedModifiers = o.filter(function (l) {
                return l.enabled
              })),
              x(),
              C.update()
            )
          },
          forceUpdate: function () {
            if (!i) {
              var a = E.elements,
                U = a.reference,
                o = a.popper
              if (!!rD(U, o)) {
                ;(E.rects = {
                  reference: Rj(U, gA(o), E.options.strategy === 'fixed'),
                  popper: wI(o),
                }),
                  (E.reset = !1),
                  (E.placement = E.options.placement),
                  E.orderedModifiers.forEach(function (k) {
                    return (E.modifiersData[k.name] = Object.assign({}, k.data))
                  })
                for (var l = 0; l < E.orderedModifiers.length; l++) {
                  if (E.reset === !0) {
                    ;(E.reset = !1), (l = -1)
                    continue
                  }
                  var s = E.orderedModifiers[l],
                    b = s.fn,
                    n = s.options,
                    G = n === void 0 ? {} : n,
                    O = s.name
                  typeof b == 'function' &&
                    (E = b({state: E, options: G, name: O, instance: C}) || E)
                }
              }
            }
          },
          update: qj(function () {
            return new Promise(function (e) {
              C.forceUpdate(), e(E)
            })
          }),
          destroy: function () {
            w(), (i = !0)
          },
        }
      if (!rD(S, u)) return C
      C.setOptions(T).then(function (e) {
        !i && T.onFirstUpdate && T.onFirstUpdate(e)
      })
      function x() {
        E.orderedModifiers.forEach(function (e) {
          var a = e.name,
            U = e.options,
            o = U === void 0 ? {} : U,
            l = e.effect
          if (typeof l == 'function') {
            var s = l({state: E, name: a, instance: C, options: o}),
              b = function () {}
            t.push(s || b)
          }
        })
      }
      function w() {
        t.forEach(function (e) {
          return e()
        }),
          (t = [])
      }
      return C
    }
  }
  var M4 = dA(),
    A4 = [xI, cI, TI, iI],
    I4 = dA({defaultModifiers: A4}),
    D4 = [xI, cI, TI, iI, kD, nD, QD, lD, WD],
    aI = dA({defaultModifiers: D4}),
    JD = Object.freeze({
      __proto__: null,
      [Symbol.toStringTag]: 'Module',
      popperGenerator: dA,
      detectOverflow: vM,
      createPopperBase: M4,
      createPopper: aI,
      createPopperLite: I4,
      top: X,
      bottom: f,
      right: H,
      left: F,
      auto: lA,
      basePlacements: pM,
      start: aM,
      end: ZM,
      clippingParents: LD,
      viewport: uI,
      popper: VM,
      reference: jD,
      variationPlacements: CI,
      placements: tI,
      beforeRead: SD,
      read: uD,
      afterRead: CD,
      beforeMain: tD,
      main: iD,
      afterMain: wD,
      beforeWrite: ED,
      write: TD,
      afterWrite: xD,
      modifierPhases: yD,
      applyStyles: iI,
      arrow: lD,
      computeStyles: TI,
      eventListeners: xI,
      flip: nD,
      hide: WD,
      offset: kD,
      popperOffsets: cI,
      preventOverflow: QD,
    })
  /*!
   * Bootstrap v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */ const g4 = 1e6,
    N4 = 1e3,
    UI = 'transitionend',
    L4 = (M) =>
      M == null
        ? `${M}`
        : {}.toString
            .call(M)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase(),
    j4 = (M) => {
      do M += Math.floor(Math.random() * g4)
      while (document.getElementById(M))
      return M
    },
    pD = (M) => {
      let A = M.getAttribute('data-bs-target')
      if (!A || A === '#') {
        let D = M.getAttribute('href')
        if (!D || (!D.includes('#') && !D.startsWith('.'))) return null
        D.includes('#') && !D.startsWith('#') && (D = `#${D.split('#')[1]}`),
          (A = D && D !== '#' ? D.trim() : null)
      }
      return A
    },
    lI = (M) => {
      const A = pD(M)
      return A && document.querySelector(A) ? A : null
    },
    TM = (M) => {
      const A = pD(M)
      return A ? document.querySelector(A) : null
    },
    S4 = (M) => {
      if (!M) return 0
      let {transitionDuration: A, transitionDelay: D} = window.getComputedStyle(M)
      const g = Number.parseFloat(A),
        N = Number.parseFloat(D)
      return !g && !N
        ? 0
        : ((A = A.split(',')[0]),
          (D = D.split(',')[0]),
          (Number.parseFloat(A) + Number.parseFloat(D)) * N4)
    },
    ZD = (M) => {
      M.dispatchEvent(new Event(UI))
    },
    lM = (M) =>
      !M || typeof M != 'object'
        ? !1
        : (typeof M.jquery != 'undefined' && (M = M[0]), typeof M.nodeType != 'undefined'),
    xM = (M) =>
      lM(M)
        ? M.jquery
          ? M[0]
          : M
        : typeof M == 'string' && M.length > 0
        ? document.querySelector(M)
        : null,
    LM = (M, A, D) => {
      Object.keys(D).forEach((g) => {
        const N = D[g],
          L = A[g],
          j = L && lM(L) ? 'element' : L4(L)
        if (!new RegExp(N).test(j))
          throw new TypeError(
            `${M.toUpperCase()}: Option "${g}" provided type "${j}" but expected type "${N}".`
          )
      })
    },
    jA = (M) =>
      !lM(M) || M.getClientRects().length === 0
        ? !1
        : getComputedStyle(M).getPropertyValue('visibility') === 'visible',
    sM = (M) =>
      !M || M.nodeType !== Node.ELEMENT_NODE || M.classList.contains('disabled')
        ? !0
        : typeof M.disabled != 'undefined'
        ? M.disabled
        : M.hasAttribute('disabled') && M.getAttribute('disabled') !== 'false',
    VD = (M) => {
      if (!document.documentElement.attachShadow) return null
      if (typeof M.getRootNode == 'function') {
        const A = M.getRootNode()
        return A instanceof ShadowRoot ? A : null
      }
      return M instanceof ShadowRoot ? M : M.parentNode ? VD(M.parentNode) : null
    },
    nA = () => {},
    fM = (M) => {
      M.offsetHeight
    },
    BD = () => {
      const {jQuery: M} = window
      return M && !document.body.hasAttribute('data-bs-no-jquery') ? M : null
    },
    sI = [],
    u4 = (M) => {
      document.readyState === 'loading'
        ? (sI.length ||
            document.addEventListener('DOMContentLoaded', () => {
              sI.forEach((A) => A())
            }),
          sI.push(M))
        : M()
    },
    v = () => document.documentElement.dir === 'rtl',
    K = (M) => {
      u4(() => {
        const A = BD()
        if (A) {
          const D = M.NAME,
            g = A.fn[D]
          ;(A.fn[D] = M.jQueryInterface),
            (A.fn[D].Constructor = M),
            (A.fn[D].noConflict = () => ((A.fn[D] = g), M.jQueryInterface))
        }
      })
    },
    oM = (M) => {
      typeof M == 'function' && M()
    },
    PD = (M, A, D = !0) => {
      if (!D) {
        oM(M)
        return
      }
      const g = 5,
        N = S4(A) + g
      let L = !1
      const j = ({target: S}) => {
        S === A && ((L = !0), A.removeEventListener(UI, j), oM(M))
      }
      A.addEventListener(UI, j),
        setTimeout(() => {
          L || ZD(A)
        }, N)
    },
    XD = (M, A, D, g) => {
      let N = M.indexOf(A)
      if (N === -1) return M[!D && g ? M.length - 1 : 0]
      const L = M.length
      return (N += D ? 1 : -1), g && (N = (N + L) % L), M[Math.max(0, Math.min(N, L - 1))]
    },
    C4 = /[^.]*(?=\..*)\.|.*/,
    t4 = /\..*/,
    i4 = /::\d+$/,
    oI = {}
  let FD = 1
  const w4 = {mouseenter: 'mouseover', mouseleave: 'mouseout'},
    E4 = /^(mouseenter|mouseleave)/i,
    vD = new Set([
      'click',
      'dblclick',
      'mouseup',
      'mousedown',
      'contextmenu',
      'mousewheel',
      'DOMMouseScroll',
      'mouseover',
      'mouseout',
      'mousemove',
      'selectstart',
      'selectend',
      'keydown',
      'keypress',
      'keyup',
      'orientationchange',
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'pointerdown',
      'pointermove',
      'pointerup',
      'pointerleave',
      'pointercancel',
      'gesturestart',
      'gesturechange',
      'gestureend',
      'focus',
      'blur',
      'change',
      'reset',
      'select',
      'submit',
      'focusin',
      'focusout',
      'load',
      'unload',
      'beforeunload',
      'resize',
      'move',
      'DOMContentLoaded',
      'readystatechange',
      'error',
      'abort',
      'scroll',
    ])
  function fD(M, A) {
    return (A && `${A}::${FD++}`) || M.uidEvent || FD++
  }
  function HD(M) {
    const A = fD(M)
    return (M.uidEvent = A), (oI[A] = oI[A] || {}), oI[A]
  }
  function T4(M, A) {
    return function D(g) {
      return (g.delegateTarget = M), D.oneOff && y.off(M, g.type, A), A.apply(M, [g])
    }
  }
  function x4(M, A, D) {
    return function g(N) {
      const L = M.querySelectorAll(A)
      for (let {target: j} = N; j && j !== this; j = j.parentNode)
        for (let S = L.length; S--; )
          if (L[S] === j)
            return (N.delegateTarget = j), g.oneOff && y.off(M, N.type, A, D), D.apply(j, [N])
      return null
    }
  }
  function RD(M, A, D = null) {
    const g = Object.keys(M)
    for (let N = 0, L = g.length; N < L; N++) {
      const j = M[g[N]]
      if (j.originalHandler === A && j.delegationSelector === D) return j
    }
    return null
  }
  function _D(M, A, D) {
    const g = typeof A == 'string',
      N = g ? D : A
    let L = qD(M)
    return vD.has(L) || (L = M), [g, N, L]
  }
  function $D(M, A, D, g, N) {
    if (typeof A != 'string' || !M) return
    if ((D || ((D = g), (g = null)), E4.test(A))) {
      const C = (x) =>
        function (w) {
          if (
            !w.relatedTarget ||
            (w.relatedTarget !== w.delegateTarget && !w.delegateTarget.contains(w.relatedTarget))
          )
            return x.call(this, w)
        }
      g ? (g = C(g)) : (D = C(D))
    }
    const [L, j, S] = _D(A, D, g),
      u = HD(M),
      T = u[S] || (u[S] = {}),
      E = RD(T, j, L ? D : null)
    if (E) {
      E.oneOff = E.oneOff && N
      return
    }
    const t = fD(j, A.replace(C4, '')),
      i = L ? x4(M, D, g) : T4(M, D)
    ;(i.delegationSelector = L ? D : null),
      (i.originalHandler = j),
      (i.oneOff = N),
      (i.uidEvent = t),
      (T[t] = i),
      M.addEventListener(S, i, L)
  }
  function OI(M, A, D, g, N) {
    const L = RD(A[D], g, N)
    !L || (M.removeEventListener(D, L, Boolean(N)), delete A[D][L.uidEvent])
  }
  function y4(M, A, D, g) {
    const N = A[D] || {}
    Object.keys(N).forEach((L) => {
      if (L.includes(g)) {
        const j = N[L]
        OI(M, A, D, j.originalHandler, j.delegationSelector)
      }
    })
  }
  function qD(M) {
    return (M = M.replace(t4, '')), w4[M] || M
  }
  const y = {
      on(M, A, D, g) {
        $D(M, A, D, g, !1)
      },
      one(M, A, D, g) {
        $D(M, A, D, g, !0)
      },
      off(M, A, D, g) {
        if (typeof A != 'string' || !M) return
        const [N, L, j] = _D(A, D, g),
          S = j !== A,
          u = HD(M),
          T = A.startsWith('.')
        if (typeof L != 'undefined') {
          if (!u || !u[j]) return
          OI(M, u, j, L, N ? D : null)
          return
        }
        T &&
          Object.keys(u).forEach((t) => {
            y4(M, u, t, A.slice(1))
          })
        const E = u[j] || {}
        Object.keys(E).forEach((t) => {
          const i = t.replace(i4, '')
          if (!S || A.includes(i)) {
            const C = E[t]
            OI(M, u, j, C.originalHandler, C.delegationSelector)
          }
        })
      },
      trigger(M, A, D) {
        if (typeof A != 'string' || !M) return null
        const g = BD(),
          N = qD(A),
          L = A !== N,
          j = vD.has(N)
        let S,
          u = !0,
          T = !0,
          E = !1,
          t = null
        return (
          L &&
            g &&
            ((S = g.Event(A, D)),
            g(M).trigger(S),
            (u = !S.isPropagationStopped()),
            (T = !S.isImmediatePropagationStopped()),
            (E = S.isDefaultPrevented())),
          j
            ? ((t = document.createEvent('HTMLEvents')), t.initEvent(N, u, !0))
            : (t = new CustomEvent(A, {bubbles: u, cancelable: !0})),
          typeof D != 'undefined' &&
            Object.keys(D).forEach((i) => {
              Object.defineProperty(t, i, {
                get() {
                  return D[i]
                },
              })
            }),
          E && t.preventDefault(),
          T && M.dispatchEvent(t),
          t.defaultPrevented && typeof S != 'undefined' && S.preventDefault(),
          t
        )
      },
    },
    yM = new Map(),
    SA = {
      set(M, A, D) {
        yM.has(M) || yM.set(M, new Map())
        const g = yM.get(M)
        if (!g.has(A) && g.size !== 0) {
          console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(g.keys())[0]
            }.`
          )
          return
        }
        g.set(A, D)
      },
      get(M, A) {
        return (yM.has(M) && yM.get(M).get(A)) || null
      },
      remove(M, A) {
        if (!yM.has(M)) return
        const D = yM.get(M)
        D.delete(A), D.size === 0 && yM.delete(M)
      },
    },
    Y4 = '5.1.3'
  class DM {
    constructor(A) {
      ;(A = xM(A)),
        !!A && ((this._element = A), SA.set(this._element, this.constructor.DATA_KEY, this))
    }
    dispose() {
      SA.remove(this._element, this.constructor.DATA_KEY),
        y.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((A) => {
          this[A] = null
        })
    }
    _queueCallback(A, D, g = !0) {
      PD(A, D, g)
    }
    static getInstance(A) {
      return SA.get(xM(A), this.DATA_KEY)
    }
    static getOrCreateInstance(A, D = {}) {
      return this.getInstance(A) || new this(A, typeof D == 'object' ? D : null)
    }
    static get VERSION() {
      return Y4
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!')
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`
    }
  }
  const bA = (M, A = 'hide') => {
      const D = `click.dismiss${M.EVENT_KEY}`,
        g = M.NAME
      y.on(document, D, `[data-bs-dismiss="${g}"]`, function (N) {
        if ((['A', 'AREA'].includes(this.tagName) && N.preventDefault(), sM(this))) return
        const L = TM(this) || this.closest(`.${g}`)
        M.getOrCreateInstance(L)[A]()
      })
    },
    e4 = 'alert',
    KD = '.bs.alert',
    z4 = `close${KD}`,
    c4 = `closed${KD}`,
    a4 = 'fade',
    U4 = 'show'
  class uA extends DM {
    static get NAME() {
      return e4
    }
    close() {
      if (y.trigger(this._element, z4).defaultPrevented) return
      this._element.classList.remove(U4)
      const D = this._element.classList.contains(a4)
      this._queueCallback(() => this._destroyElement(), this._element, D)
    }
    _destroyElement() {
      this._element.remove(), y.trigger(this._element, c4), this.dispose()
    }
    static jQueryInterface(A) {
      return this.each(function () {
        const D = uA.getOrCreateInstance(this)
        if (typeof A == 'string') {
          if (D[A] === void 0 || A.startsWith('_') || A === 'constructor')
            throw new TypeError(`No method named "${A}"`)
          D[A](this)
        }
      })
    }
  }
  bA(uA, 'close'), K(uA)
  const l4 = 'button',
    s4 = '.bs.button',
    o4 = '.data-api',
    O4 = 'active',
    Mg = '[data-bs-toggle="button"]',
    m4 = `click${s4}${o4}`
  class hA extends DM {
    static get NAME() {
      return l4
    }
    toggle() {
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(O4))
    }
    static jQueryInterface(A) {
      return this.each(function () {
        const D = hA.getOrCreateInstance(this)
        A === 'toggle' && D[A]()
      })
    }
  }
  y.on(document, m4, Mg, (M) => {
    M.preventDefault()
    const A = M.target.closest(Mg)
    hA.getOrCreateInstance(A).toggle()
  }),
    K(hA)
  function Ag(M) {
    return M === 'true'
      ? !0
      : M === 'false'
      ? !1
      : M === Number(M).toString()
      ? Number(M)
      : M === '' || M === 'null'
      ? null
      : M
  }
  function mI(M) {
    return M.replace(/[A-Z]/g, (A) => `-${A.toLowerCase()}`)
  }
  const Z = {
      setDataAttribute(M, A, D) {
        M.setAttribute(`data-bs-${mI(A)}`, D)
      },
      removeDataAttribute(M, A) {
        M.removeAttribute(`data-bs-${mI(A)}`)
      },
      getDataAttributes(M) {
        if (!M) return {}
        const A = {}
        return (
          Object.keys(M.dataset)
            .filter((D) => D.startsWith('bs'))
            .forEach((D) => {
              let g = D.replace(/^bs/, '')
              ;(g = g.charAt(0).toLowerCase() + g.slice(1, g.length)), (A[g] = Ag(M.dataset[D]))
            }),
          A
        )
      },
      getDataAttribute(M, A) {
        return Ag(M.getAttribute(`data-bs-${mI(A)}`))
      },
      offset(M) {
        const A = M.getBoundingClientRect()
        return {top: A.top + window.pageYOffset, left: A.left + window.pageXOffset}
      },
      position(M) {
        return {top: M.offsetTop, left: M.offsetLeft}
      },
    },
    d4 = 3,
    m = {
      find(M, A = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(A, M))
      },
      findOne(M, A = document.documentElement) {
        return Element.prototype.querySelector.call(A, M)
      },
      children(M, A) {
        return [].concat(...M.children).filter((D) => D.matches(A))
      },
      parents(M, A) {
        const D = []
        let g = M.parentNode
        for (; g && g.nodeType === Node.ELEMENT_NODE && g.nodeType !== d4; )
          g.matches(A) && D.push(g), (g = g.parentNode)
        return D
      },
      prev(M, A) {
        let D = M.previousElementSibling
        for (; D; ) {
          if (D.matches(A)) return [D]
          D = D.previousElementSibling
        }
        return []
      },
      next(M, A) {
        let D = M.nextElementSibling
        for (; D; ) {
          if (D.matches(A)) return [D]
          D = D.nextElementSibling
        }
        return []
      },
      focusableChildren(M) {
        const A = [
          'a',
          'button',
          'input',
          'textarea',
          'select',
          'details',
          '[tabindex]',
          '[contenteditable="true"]',
        ]
          .map((D) => `${D}:not([tabindex^="-"])`)
          .join(', ')
        return this.find(A, M).filter((D) => !sM(D) && jA(D))
      },
    },
    Ig = 'carousel',
    R = '.bs.carousel',
    Dg = '.data-api',
    n4 = 'ArrowLeft',
    b4 = 'ArrowRight',
    h4 = 500,
    W4 = 40,
    gg = {interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0, touch: !0},
    k4 = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean',
    },
    OM = 'next',
    mM = 'prev',
    dM = 'left',
    CA = 'right',
    Q4 = {[n4]: CA, [b4]: dM},
    G4 = `slide${R}`,
    Ng = `slid${R}`,
    r4 = `keydown${R}`,
    J4 = `mouseenter${R}`,
    p4 = `mouseleave${R}`,
    Z4 = `touchstart${R}`,
    V4 = `touchmove${R}`,
    B4 = `touchend${R}`,
    P4 = `pointerdown${R}`,
    X4 = `pointerup${R}`,
    F4 = `dragstart${R}`,
    v4 = `load${R}${Dg}`,
    f4 = `click${R}${Dg}`,
    H4 = 'carousel',
    nM = 'active',
    R4 = 'slide',
    _4 = 'carousel-item-end',
    $4 = 'carousel-item-start',
    q4 = 'carousel-item-next',
    K4 = 'carousel-item-prev',
    MS = 'pointer-event',
    AS = '.active',
    WA = '.active.carousel-item',
    IS = '.carousel-item',
    DS = '.carousel-item img',
    gS = '.carousel-item-next, .carousel-item-prev',
    NS = '.carousel-indicators',
    LS = '[data-bs-target]',
    jS = '[data-bs-slide], [data-bs-slide-to]',
    SS = '[data-bs-ride="carousel"]',
    uS = 'touch',
    CS = 'pen'
  class jM extends DM {
    constructor(A, D) {
      super(A)
      ;(this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(D)),
        (this._indicatorsElement = m.findOne(NS, this._element)),
        (this._touchSupported =
          'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners()
    }
    static get Default() {
      return gg
    }
    static get NAME() {
      return Ig
    }
    next() {
      this._slide(OM)
    }
    nextWhenVisible() {
      !document.hidden && jA(this._element) && this.next()
    }
    prev() {
      this._slide(mM)
    }
    pause(A) {
      A || (this._isPaused = !0),
        m.findOne(gS, this._element) && (ZD(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null)
    }
    cycle(A) {
      A || (this._isPaused = !1),
        this._interval && (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
            this._config.interval
          )))
    }
    to(A) {
      this._activeElement = m.findOne(WA, this._element)
      const D = this._getItemIndex(this._activeElement)
      if (A > this._items.length - 1 || A < 0) return
      if (this._isSliding) {
        y.one(this._element, Ng, () => this.to(A))
        return
      }
      if (D === A) {
        this.pause(), this.cycle()
        return
      }
      const g = A > D ? OM : mM
      this._slide(g, this._items[A])
    }
    _getConfig(A) {
      return (
        (A = z(z(z({}, gg), Z.getDataAttributes(this._element)), typeof A == 'object' ? A : {})),
        LM(Ig, A, k4),
        A
      )
    }
    _handleSwipe() {
      const A = Math.abs(this.touchDeltaX)
      if (A <= W4) return
      const D = A / this.touchDeltaX
      ;(this.touchDeltaX = 0), !!D && this._slide(D > 0 ? CA : dM)
    }
    _addEventListeners() {
      this._config.keyboard && y.on(this._element, r4, (A) => this._keydown(A)),
        this._config.pause === 'hover' &&
          (y.on(this._element, J4, (A) => this.pause(A)),
          y.on(this._element, p4, (A) => this.cycle(A))),
        this._config.touch && this._touchSupported && this._addTouchEventListeners()
    }
    _addTouchEventListeners() {
      const A = (L) => this._pointerEvent && (L.pointerType === CS || L.pointerType === uS),
        D = (L) => {
          A(L)
            ? (this.touchStartX = L.clientX)
            : this._pointerEvent || (this.touchStartX = L.touches[0].clientX)
        },
        g = (L) => {
          this.touchDeltaX =
            L.touches && L.touches.length > 1 ? 0 : L.touches[0].clientX - this.touchStartX
        },
        N = (L) => {
          A(L) && (this.touchDeltaX = L.clientX - this.touchStartX),
            this._handleSwipe(),
            this._config.pause === 'hover' &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout((j) => this.cycle(j), h4 + this._config.interval)))
        }
      m.find(DS, this._element).forEach((L) => {
        y.on(L, F4, (j) => j.preventDefault())
      }),
        this._pointerEvent
          ? (y.on(this._element, P4, (L) => D(L)),
            y.on(this._element, X4, (L) => N(L)),
            this._element.classList.add(MS))
          : (y.on(this._element, Z4, (L) => D(L)),
            y.on(this._element, V4, (L) => g(L)),
            y.on(this._element, B4, (L) => N(L)))
    }
    _keydown(A) {
      if (/input|textarea/i.test(A.target.tagName)) return
      const D = Q4[A.key]
      D && (A.preventDefault(), this._slide(D))
    }
    _getItemIndex(A) {
      return (
        (this._items = A && A.parentNode ? m.find(IS, A.parentNode) : []), this._items.indexOf(A)
      )
    }
    _getItemByOrder(A, D) {
      const g = A === OM
      return XD(this._items, D, g, this._config.wrap)
    }
    _triggerSlideEvent(A, D) {
      const g = this._getItemIndex(A),
        N = this._getItemIndex(m.findOne(WA, this._element))
      return y.trigger(this._element, G4, {relatedTarget: A, direction: D, from: N, to: g})
    }
    _setActiveIndicatorElement(A) {
      if (this._indicatorsElement) {
        const D = m.findOne(AS, this._indicatorsElement)
        D.classList.remove(nM), D.removeAttribute('aria-current')
        const g = m.find(LS, this._indicatorsElement)
        for (let N = 0; N < g.length; N++)
          if (
            Number.parseInt(g[N].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(A)
          ) {
            g[N].classList.add(nM), g[N].setAttribute('aria-current', 'true')
            break
          }
      }
    }
    _updateInterval() {
      const A = this._activeElement || m.findOne(WA, this._element)
      if (!A) return
      const D = Number.parseInt(A.getAttribute('data-bs-interval'), 10)
      D
        ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval),
          (this._config.interval = D))
        : (this._config.interval = this._config.defaultInterval || this._config.interval)
    }
    _slide(A, D) {
      const g = this._directionToOrder(A),
        N = m.findOne(WA, this._element),
        L = this._getItemIndex(N),
        j = D || this._getItemByOrder(g, N),
        S = this._getItemIndex(j),
        u = Boolean(this._interval),
        T = g === OM,
        E = T ? $4 : _4,
        t = T ? q4 : K4,
        i = this._orderToDirection(g)
      if (j && j.classList.contains(nM)) {
        this._isSliding = !1
        return
      }
      if (this._isSliding || this._triggerSlideEvent(j, i).defaultPrevented || !N || !j) return
      ;(this._isSliding = !0),
        u && this.pause(),
        this._setActiveIndicatorElement(j),
        (this._activeElement = j)
      const x = () => {
        y.trigger(this._element, Ng, {relatedTarget: j, direction: i, from: L, to: S})
      }
      if (this._element.classList.contains(R4)) {
        j.classList.add(t), fM(j), N.classList.add(E), j.classList.add(E)
        const w = () => {
          j.classList.remove(E, t),
            j.classList.add(nM),
            N.classList.remove(nM, t, E),
            (this._isSliding = !1),
            setTimeout(x, 0)
        }
        this._queueCallback(w, N, !0)
      } else N.classList.remove(nM), j.classList.add(nM), (this._isSliding = !1), x()
      u && this.cycle()
    }
    _directionToOrder(A) {
      return [CA, dM].includes(A) ? (v() ? (A === dM ? mM : OM) : A === dM ? OM : mM) : A
    }
    _orderToDirection(A) {
      return [OM, mM].includes(A) ? (v() ? (A === mM ? dM : CA) : A === mM ? CA : dM) : A
    }
    static carouselInterface(A, D) {
      const g = jM.getOrCreateInstance(A, D)
      let {_config: N} = g
      typeof D == 'object' && (N = z(z({}, N), D))
      const L = typeof D == 'string' ? D : N.slide
      if (typeof D == 'number') g.to(D)
      else if (typeof L == 'string') {
        if (typeof g[L] == 'undefined') throw new TypeError(`No method named "${L}"`)
        g[L]()
      } else N.interval && N.ride && (g.pause(), g.cycle())
    }
    static jQueryInterface(A) {
      return this.each(function () {
        jM.carouselInterface(this, A)
      })
    }
    static dataApiClickHandler(A) {
      const D = TM(this)
      if (!D || !D.classList.contains(H4)) return
      const g = z(z({}, Z.getDataAttributes(D)), Z.getDataAttributes(this)),
        N = this.getAttribute('data-bs-slide-to')
      N && (g.interval = !1),
        jM.carouselInterface(D, g),
        N && jM.getInstance(D).to(N),
        A.preventDefault()
    }
  }
  y.on(document, f4, jS, jM.dataApiClickHandler),
    y.on(window, v4, () => {
      const M = m.find(SS)
      for (let A = 0, D = M.length; A < D; A++) jM.carouselInterface(M[A], jM.getInstance(M[A]))
    }),
    K(jM)
  const Lg = 'collapse',
    jg = 'bs.collapse',
    tA = `.${jg}`,
    tS = '.data-api',
    Sg = {toggle: !0, parent: null},
    iS = {toggle: 'boolean', parent: '(null|element)'},
    wS = `show${tA}`,
    ES = `shown${tA}`,
    TS = `hide${tA}`,
    xS = `hidden${tA}`,
    yS = `click${tA}${tS}`,
    dI = 'show',
    HM = 'collapse',
    kA = 'collapsing',
    ug = 'collapsed',
    Cg = `:scope .${HM} .${HM}`,
    YS = 'collapse-horizontal',
    eS = 'width',
    zS = 'height',
    cS = '.collapse.show, .collapse.collapsing',
    nI = '[data-bs-toggle="collapse"]'
  class bM extends DM {
    constructor(A, D) {
      super(A)
      ;(this._isTransitioning = !1), (this._config = this._getConfig(D)), (this._triggerArray = [])
      const g = m.find(nI)
      for (let N = 0, L = g.length; N < L; N++) {
        const j = g[N],
          S = lI(j),
          u = m.find(S).filter((T) => T === this._element)
        S !== null && u.length && ((this._selector = S), this._triggerArray.push(j))
      }
      this._initializeChildren(),
        this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle()
    }
    static get Default() {
      return Sg
    }
    static get NAME() {
      return Lg
    }
    toggle() {
      this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (this._isTransitioning || this._isShown()) return
      let A = [],
        D
      if (this._config.parent) {
        const T = m.find(Cg, this._config.parent)
        A = m.find(cS, this._config.parent).filter((E) => !T.includes(E))
      }
      const g = m.findOne(this._selector)
      if (A.length) {
        const T = A.find((E) => g !== E)
        if (((D = T ? bM.getInstance(T) : null), D && D._isTransitioning)) return
      }
      if (y.trigger(this._element, wS).defaultPrevented) return
      A.forEach((T) => {
        g !== T && bM.getOrCreateInstance(T, {toggle: !1}).hide(), D || SA.set(T, jg, null)
      })
      const L = this._getDimension()
      this._element.classList.remove(HM),
        this._element.classList.add(kA),
        (this._element.style[L] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0)
      const j = () => {
          ;(this._isTransitioning = !1),
            this._element.classList.remove(kA),
            this._element.classList.add(HM, dI),
            (this._element.style[L] = ''),
            y.trigger(this._element, ES)
        },
        u = `scroll${L[0].toUpperCase() + L.slice(1)}`
      this._queueCallback(j, this._element, !0), (this._element.style[L] = `${this._element[u]}px`)
    }
    hide() {
      if (
        this._isTransitioning ||
        !this._isShown() ||
        y.trigger(this._element, TS).defaultPrevented
      )
        return
      const D = this._getDimension()
      ;(this._element.style[D] = `${this._element.getBoundingClientRect()[D]}px`),
        fM(this._element),
        this._element.classList.add(kA),
        this._element.classList.remove(HM, dI)
      const g = this._triggerArray.length
      for (let L = 0; L < g; L++) {
        const j = this._triggerArray[L],
          S = TM(j)
        S && !this._isShown(S) && this._addAriaAndCollapsedClass([j], !1)
      }
      this._isTransitioning = !0
      const N = () => {
        ;(this._isTransitioning = !1),
          this._element.classList.remove(kA),
          this._element.classList.add(HM),
          y.trigger(this._element, xS)
      }
      ;(this._element.style[D] = ''), this._queueCallback(N, this._element, !0)
    }
    _isShown(A = this._element) {
      return A.classList.contains(dI)
    }
    _getConfig(A) {
      return (
        (A = z(z(z({}, Sg), Z.getDataAttributes(this._element)), A)),
        (A.toggle = Boolean(A.toggle)),
        (A.parent = xM(A.parent)),
        LM(Lg, A, iS),
        A
      )
    }
    _getDimension() {
      return this._element.classList.contains(YS) ? eS : zS
    }
    _initializeChildren() {
      if (!this._config.parent) return
      const A = m.find(Cg, this._config.parent)
      m.find(nI, this._config.parent)
        .filter((D) => !A.includes(D))
        .forEach((D) => {
          const g = TM(D)
          g && this._addAriaAndCollapsedClass([D], this._isShown(g))
        })
    }
    _addAriaAndCollapsedClass(A, D) {
      !A.length ||
        A.forEach((g) => {
          D ? g.classList.remove(ug) : g.classList.add(ug), g.setAttribute('aria-expanded', D)
        })
    }
    static jQueryInterface(A) {
      return this.each(function () {
        const D = {}
        typeof A == 'string' && /show|hide/.test(A) && (D.toggle = !1)
        const g = bM.getOrCreateInstance(this, D)
        if (typeof A == 'string') {
          if (typeof g[A] == 'undefined') throw new TypeError(`No method named "${A}"`)
          g[A]()
        }
      })
    }
  }
  y.on(document, yS, nI, function (M) {
    ;(M.target.tagName === 'A' || (M.delegateTarget && M.delegateTarget.tagName === 'A')) &&
      M.preventDefault()
    const A = lI(this)
    m.find(A).forEach((g) => {
      bM.getOrCreateInstance(g, {toggle: !1}).toggle()
    })
  }),
    K(bM)
  const bI = 'dropdown',
    hM = '.bs.dropdown',
    hI = '.data-api',
    QA = 'Escape',
    tg = 'Space',
    ig = 'Tab',
    WI = 'ArrowUp',
    GA = 'ArrowDown',
    aS = 2,
    US = new RegExp(`${WI}|${GA}|${QA}`),
    lS = `hide${hM}`,
    sS = `hidden${hM}`,
    oS = `show${hM}`,
    OS = `shown${hM}`,
    wg = `click${hM}${hI}`,
    Eg = `keydown${hM}${hI}`,
    mS = `keyup${hM}${hI}`,
    RM = 'show',
    dS = 'dropup',
    nS = 'dropend',
    bS = 'dropstart',
    hS = 'navbar',
    iA = '[data-bs-toggle="dropdown"]',
    kI = '.dropdown-menu',
    WS = '.navbar-nav',
    kS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
    QS = v() ? 'top-end' : 'top-start',
    GS = v() ? 'top-start' : 'top-end',
    rS = v() ? 'bottom-end' : 'bottom-start',
    JS = v() ? 'bottom-start' : 'bottom-end',
    pS = v() ? 'left-start' : 'right-start',
    ZS = v() ? 'right-start' : 'left-start',
    VS = {
      offset: [0, 2],
      boundary: 'clippingParents',
      reference: 'toggle',
      display: 'dynamic',
      popperConfig: null,
      autoClose: !0,
    },
    BS = {
      offset: '(array|string|function)',
      boundary: '(string|element)',
      reference: '(string|element|object)',
      display: 'string',
      popperConfig: '(null|object|function)',
      autoClose: '(boolean|string)',
    }
  class _ extends DM {
    constructor(A, D) {
      super(A)
      ;(this._popper = null),
        (this._config = this._getConfig(D)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar())
    }
    static get Default() {
      return VS
    }
    static get DefaultType() {
      return BS
    }
    static get NAME() {
      return bI
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (sM(this._element) || this._isShown(this._menu)) return
      const A = {relatedTarget: this._element}
      if (y.trigger(this._element, oS, A).defaultPrevented) return
      const g = _.getParentFromElement(this._element)
      this._inNavbar ? Z.setDataAttribute(this._menu, 'popper', 'none') : this._createPopper(g),
        'ontouchstart' in document.documentElement &&
          !g.closest(WS) &&
          [].concat(...document.body.children).forEach((N) => y.on(N, 'mouseover', nA)),
        this._element.focus(),
        this._element.setAttribute('aria-expanded', !0),
        this._menu.classList.add(RM),
        this._element.classList.add(RM),
        y.trigger(this._element, OS, A)
    }
    hide() {
      if (sM(this._element) || !this._isShown(this._menu)) return
      const A = {relatedTarget: this._element}
      this._completeHide(A)
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose()
    }
    update() {
      ;(this._inNavbar = this._detectNavbar()), this._popper && this._popper.update()
    }
    _completeHide(A) {
      y.trigger(this._element, lS, A).defaultPrevented ||
        ('ontouchstart' in document.documentElement &&
          [].concat(...document.body.children).forEach((g) => y.off(g, 'mouseover', nA)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(RM),
        this._element.classList.remove(RM),
        this._element.setAttribute('aria-expanded', 'false'),
        Z.removeDataAttribute(this._menu, 'popper'),
        y.trigger(this._element, sS, A))
    }
    _getConfig(A) {
      if (
        ((A = z(z(z({}, this.constructor.Default), Z.getDataAttributes(this._element)), A)),
        LM(bI, A, this.constructor.DefaultType),
        typeof A.reference == 'object' &&
          !lM(A.reference) &&
          typeof A.reference.getBoundingClientRect != 'function')
      )
        throw new TypeError(
          `${bI.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        )
      return A
    }
    _createPopper(A) {
      if (typeof JD == 'undefined')
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)")
      let D = this._element
      this._config.reference === 'parent'
        ? (D = A)
        : lM(this._config.reference)
        ? (D = xM(this._config.reference))
        : typeof this._config.reference == 'object' && (D = this._config.reference)
      const g = this._getPopperConfig(),
        N = g.modifiers.find((L) => L.name === 'applyStyles' && L.enabled === !1)
      ;(this._popper = aI(D, this._menu, g)),
        N && Z.setDataAttribute(this._menu, 'popper', 'static')
    }
    _isShown(A = this._element) {
      return A.classList.contains(RM)
    }
    _getMenuElement() {
      return m.next(this._element, kI)[0]
    }
    _getPlacement() {
      const A = this._element.parentNode
      if (A.classList.contains(nS)) return pS
      if (A.classList.contains(bS)) return ZS
      const D = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end'
      return A.classList.contains(dS) ? (D ? GS : QS) : D ? JS : rS
    }
    _detectNavbar() {
      return this._element.closest(`.${hS}`) !== null
    }
    _getOffset() {
      const {offset: A} = this._config
      return typeof A == 'string'
        ? A.split(',').map((D) => Number.parseInt(D, 10))
        : typeof A == 'function'
        ? (D) => A(D, this._element)
        : A
    }
    _getPopperConfig() {
      const A = {
        placement: this._getPlacement(),
        modifiers: [
          {name: 'preventOverflow', options: {boundary: this._config.boundary}},
          {name: 'offset', options: {offset: this._getOffset()}},
        ],
      }
      return (
        this._config.display === 'static' && (A.modifiers = [{name: 'applyStyles', enabled: !1}]),
        z(
          z({}, A),
          typeof this._config.popperConfig == 'function'
            ? this._config.popperConfig(A)
            : this._config.popperConfig
        )
      )
    }
    _selectMenuItem({key: A, target: D}) {
      const g = m.find(kS, this._menu).filter(jA)
      !g.length || XD(g, D, A === GA, !g.includes(D)).focus()
    }
    static jQueryInterface(A) {
      return this.each(function () {
        const D = _.getOrCreateInstance(this, A)
        if (typeof A == 'string') {
          if (typeof D[A] == 'undefined') throw new TypeError(`No method named "${A}"`)
          D[A]()
        }
      })
    }
    static clearMenus(A) {
      if (A && (A.button === aS || (A.type === 'keyup' && A.key !== ig))) return
      const D = m.find(iA)
      for (let g = 0, N = D.length; g < N; g++) {
        const L = _.getInstance(D[g])
        if (!L || L._config.autoClose === !1 || !L._isShown()) continue
        const j = {relatedTarget: L._element}
        if (A) {
          const S = A.composedPath(),
            u = S.includes(L._menu)
          if (
            S.includes(L._element) ||
            (L._config.autoClose === 'inside' && !u) ||
            (L._config.autoClose === 'outside' && u) ||
            (L._menu.contains(A.target) &&
              ((A.type === 'keyup' && A.key === ig) ||
                /input|select|option|textarea|form/i.test(A.target.tagName)))
          )
            continue
          A.type === 'click' && (j.clickEvent = A)
        }
        L._completeHide(j)
      }
    }
    static getParentFromElement(A) {
      return TM(A) || A.parentNode
    }
    static dataApiKeydownHandler(A) {
      if (
        /input|textarea/i.test(A.target.tagName)
          ? A.key === tg ||
            (A.key !== QA && ((A.key !== GA && A.key !== WI) || A.target.closest(kI)))
          : !US.test(A.key)
      )
        return
      const D = this.classList.contains(RM)
      if ((!D && A.key === QA) || (A.preventDefault(), A.stopPropagation(), sM(this))) return
      const g = this.matches(iA) ? this : m.prev(this, iA)[0],
        N = _.getOrCreateInstance(g)
      if (A.key === QA) {
        N.hide()
        return
      }
      if (A.key === WI || A.key === GA) {
        D || N.show(), N._selectMenuItem(A)
        return
      }
      ;(!D || A.key === tg) && _.clearMenus()
    }
  }
  y.on(document, Eg, iA, _.dataApiKeydownHandler),
    y.on(document, Eg, kI, _.dataApiKeydownHandler),
    y.on(document, wg, _.clearMenus),
    y.on(document, mS, _.clearMenus),
    y.on(document, wg, iA, function (M) {
      M.preventDefault(), _.getOrCreateInstance(this).toggle()
    }),
    K(_)
  const Tg = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    xg = '.sticky-top'
  class QI {
    constructor() {
      this._element = document.body
    }
    getWidth() {
      const A = document.documentElement.clientWidth
      return Math.abs(window.innerWidth - A)
    }
    hide() {
      const A = this.getWidth()
      this._disableOverFlow(),
        this._setElementAttributes(this._element, 'paddingRight', (D) => D + A),
        this._setElementAttributes(Tg, 'paddingRight', (D) => D + A),
        this._setElementAttributes(xg, 'marginRight', (D) => D - A)
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow'),
        (this._element.style.overflow = 'hidden')
    }
    _setElementAttributes(A, D, g) {
      const N = this.getWidth(),
        L = (j) => {
          if (j !== this._element && window.innerWidth > j.clientWidth + N) return
          this._saveInitialAttribute(j, D)
          const S = window.getComputedStyle(j)[D]
          j.style[D] = `${g(Number.parseFloat(S))}px`
        }
      this._applyManipulationCallback(A, L)
    }
    reset() {
      this._resetElementAttributes(this._element, 'overflow'),
        this._resetElementAttributes(this._element, 'paddingRight'),
        this._resetElementAttributes(Tg, 'paddingRight'),
        this._resetElementAttributes(xg, 'marginRight')
    }
    _saveInitialAttribute(A, D) {
      const g = A.style[D]
      g && Z.setDataAttribute(A, D, g)
    }
    _resetElementAttributes(A, D) {
      const g = (N) => {
        const L = Z.getDataAttribute(N, D)
        typeof L == 'undefined'
          ? N.style.removeProperty(D)
          : (Z.removeDataAttribute(N, D), (N.style[D] = L))
      }
      this._applyManipulationCallback(A, g)
    }
    _applyManipulationCallback(A, D) {
      lM(A) ? D(A) : m.find(A, this._element).forEach(D)
    }
    isOverflowing() {
      return this.getWidth() > 0
    }
  }
  const PS = {
      className: 'modal-backdrop',
      isVisible: !0,
      isAnimated: !1,
      rootElement: 'body',
      clickCallback: null,
    },
    XS = {
      className: 'string',
      isVisible: 'boolean',
      isAnimated: 'boolean',
      rootElement: '(element|string)',
      clickCallback: '(function|null)',
    },
    yg = 'backdrop',
    FS = 'fade',
    Yg = 'show',
    eg = `mousedown.bs.${yg}`
  class zg {
    constructor(A) {
      ;(this._config = this._getConfig(A)), (this._isAppended = !1), (this._element = null)
    }
    show(A) {
      if (!this._config.isVisible) {
        oM(A)
        return
      }
      this._append(),
        this._config.isAnimated && fM(this._getElement()),
        this._getElement().classList.add(Yg),
        this._emulateAnimation(() => {
          oM(A)
        })
    }
    hide(A) {
      if (!this._config.isVisible) {
        oM(A)
        return
      }
      this._getElement().classList.remove(Yg),
        this._emulateAnimation(() => {
          this.dispose(), oM(A)
        })
    }
    _getElement() {
      if (!this._element) {
        const A = document.createElement('div')
        ;(A.className = this._config.className),
          this._config.isAnimated && A.classList.add(FS),
          (this._element = A)
      }
      return this._element
    }
    _getConfig(A) {
      return (
        (A = z(z({}, PS), typeof A == 'object' ? A : {})),
        (A.rootElement = xM(A.rootElement)),
        LM(yg, A, XS),
        A
      )
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.append(this._getElement()),
        y.on(this._getElement(), eg, () => {
          oM(this._config.clickCallback)
        }),
        (this._isAppended = !0))
    }
    dispose() {
      !this._isAppended ||
        (y.off(this._element, eg), this._element.remove(), (this._isAppended = !1))
    }
    _emulateAnimation(A) {
      PD(A, this._getElement(), this._config.isAnimated)
    }
  }
  const vS = {trapElement: null, autofocus: !0},
    fS = {trapElement: 'element', autofocus: 'boolean'},
    HS = 'focustrap',
    rA = '.bs.focustrap',
    RS = `focusin${rA}`,
    _S = `keydown.tab${rA}`,
    $S = 'Tab',
    qS = 'forward',
    cg = 'backward'
  class ag {
    constructor(A) {
      ;(this._config = this._getConfig(A)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null)
    }
    activate() {
      const {trapElement: A, autofocus: D} = this._config
      this._isActive ||
        (D && A.focus(),
        y.off(document, rA),
        y.on(document, RS, (g) => this._handleFocusin(g)),
        y.on(document, _S, (g) => this._handleKeydown(g)),
        (this._isActive = !0))
    }
    deactivate() {
      !this._isActive || ((this._isActive = !1), y.off(document, rA))
    }
    _handleFocusin(A) {
      const {target: D} = A,
        {trapElement: g} = this._config
      if (D === document || D === g || g.contains(D)) return
      const N = m.focusableChildren(g)
      N.length === 0
        ? g.focus()
        : this._lastTabNavDirection === cg
        ? N[N.length - 1].focus()
        : N[0].focus()
    }
    _handleKeydown(A) {
      A.key === $S && (this._lastTabNavDirection = A.shiftKey ? cg : qS)
    }
    _getConfig(A) {
      return (A = z(z({}, vS), typeof A == 'object' ? A : {})), LM(HS, A, fS), A
    }
  }
  const Ug = 'modal',
    MM = '.bs.modal',
    KS = '.data-api',
    lg = 'Escape',
    sg = {backdrop: !0, keyboard: !0, focus: !0},
    Mu = {backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean'},
    Au = `hide${MM}`,
    Iu = `hidePrevented${MM}`,
    og = `hidden${MM}`,
    Og = `show${MM}`,
    Du = `shown${MM}`,
    mg = `resize${MM}`,
    dg = `click.dismiss${MM}`,
    ng = `keydown.dismiss${MM}`,
    gu = `mouseup.dismiss${MM}`,
    bg = `mousedown.dismiss${MM}`,
    Nu = `click${MM}${KS}`,
    hg = 'modal-open',
    Lu = 'fade',
    Wg = 'show',
    GI = 'modal-static',
    ju = '.modal.show',
    Su = '.modal-dialog',
    uu = '.modal-body',
    Cu = '[data-bs-toggle="modal"]'
  class WM extends DM {
    constructor(A, D) {
      super(A)
      ;(this._config = this._getConfig(D)),
        (this._dialog = m.findOne(Su, this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new QI())
    }
    static get Default() {
      return sg
    }
    static get NAME() {
      return Ug
    }
    toggle(A) {
      return this._isShown ? this.hide() : this.show(A)
    }
    show(A) {
      this._isShown ||
        this._isTransitioning ||
        y.trigger(this._element, Og, {relatedTarget: A}).defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(hg),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        y.on(this._dialog, bg, () => {
          y.one(this._element, gu, (g) => {
            g.target === this._element && (this._ignoreBackdropClick = !0)
          })
        }),
        this._showBackdrop(() => this._showElement(A)))
    }
    hide() {
      if (!this._isShown || this._isTransitioning || y.trigger(this._element, Au).defaultPrevented)
        return
      this._isShown = !1
      const D = this._isAnimated()
      D && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove(Wg),
        y.off(this._element, dg),
        y.off(this._dialog, bg),
        this._queueCallback(() => this._hideModal(), this._element, D)
    }
    dispose() {
      ;[window, this._dialog].forEach((A) => y.off(A, MM)),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose()
    }
    handleUpdate() {
      this._adjustDialog()
    }
    _initializeBackDrop() {
      return new zg({isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated()})
    }
    _initializeFocusTrap() {
      return new ag({trapElement: this._element})
    }
    _getConfig(A) {
      return (
        (A = z(z(z({}, sg), Z.getDataAttributes(this._element)), typeof A == 'object' ? A : {})),
        LM(Ug, A, Mu),
        A
      )
    }
    _showElement(A) {
      const D = this._isAnimated(),
        g = m.findOne(uu, this._dialog)
      ;(!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) &&
        document.body.append(this._element),
        (this._element.style.display = 'block'),
        this._element.removeAttribute('aria-hidden'),
        this._element.setAttribute('aria-modal', !0),
        this._element.setAttribute('role', 'dialog'),
        (this._element.scrollTop = 0),
        g && (g.scrollTop = 0),
        D && fM(this._element),
        this._element.classList.add(Wg)
      const N = () => {
        this._config.focus && this._focustrap.activate(),
          (this._isTransitioning = !1),
          y.trigger(this._element, Du, {relatedTarget: A})
      }
      this._queueCallback(N, this._dialog, D)
    }
    _setEscapeEvent() {
      this._isShown
        ? y.on(this._element, ng, (A) => {
            this._config.keyboard && A.key === lg
              ? (A.preventDefault(), this.hide())
              : !this._config.keyboard && A.key === lg && this._triggerBackdropTransition()
          })
        : y.off(this._element, ng)
    }
    _setResizeEvent() {
      this._isShown ? y.on(window, mg, () => this._adjustDialog()) : y.off(window, mg)
    }
    _hideModal() {
      ;(this._element.style.display = 'none'),
        this._element.setAttribute('aria-hidden', !0),
        this._element.removeAttribute('aria-modal'),
        this._element.removeAttribute('role'),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(hg),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            y.trigger(this._element, og)
        })
    }
    _showBackdrop(A) {
      y.on(this._element, dg, (D) => {
        if (this._ignoreBackdropClick) {
          this._ignoreBackdropClick = !1
          return
        }
        D.target === D.currentTarget &&
          (this._config.backdrop === !0
            ? this.hide()
            : this._config.backdrop === 'static' && this._triggerBackdropTransition())
      }),
        this._backdrop.show(A)
    }
    _isAnimated() {
      return this._element.classList.contains(Lu)
    }
    _triggerBackdropTransition() {
      if (y.trigger(this._element, Iu).defaultPrevented) return
      const {classList: D, scrollHeight: g, style: N} = this._element,
        L = g > document.documentElement.clientHeight
      ;(!L && N.overflowY === 'hidden') ||
        D.contains(GI) ||
        (L || (N.overflowY = 'hidden'),
        D.add(GI),
        this._queueCallback(() => {
          D.remove(GI),
            L ||
              this._queueCallback(() => {
                N.overflowY = ''
              }, this._dialog)
        }, this._dialog),
        this._element.focus())
    }
    _adjustDialog() {
      const A = this._element.scrollHeight > document.documentElement.clientHeight,
        D = this._scrollBar.getWidth(),
        g = D > 0
      ;((!g && A && !v()) || (g && !A && v())) && (this._element.style.paddingLeft = `${D}px`),
        ((g && !A && !v()) || (!g && A && v())) && (this._element.style.paddingRight = `${D}px`)
    }
    _resetAdjustments() {
      ;(this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '')
    }
    static jQueryInterface(A, D) {
      return this.each(function () {
        const g = WM.getOrCreateInstance(this, A)
        if (typeof A == 'string') {
          if (typeof g[A] == 'undefined') throw new TypeError(`No method named "${A}"`)
          g[A](D)
        }
      })
    }
  }
  y.on(document, Nu, Cu, function (M) {
    const A = TM(this)
    ;['A', 'AREA'].includes(this.tagName) && M.preventDefault(),
      y.one(A, Og, (N) => {
        N.defaultPrevented ||
          y.one(A, og, () => {
            jA(this) && this.focus()
          })
      })
    const D = m.findOne(ju)
    D && WM.getInstance(D).hide(), WM.getOrCreateInstance(A).toggle(this)
  }),
    bA(WM),
    K(WM)
  const kg = 'offcanvas',
    kM = '.bs.offcanvas',
    Qg = '.data-api',
    tu = `load${kM}${Qg}`,
    iu = 'Escape',
    Gg = {backdrop: !0, keyboard: !0, scroll: !1},
    wu = {backdrop: 'boolean', keyboard: 'boolean', scroll: 'boolean'},
    rg = 'show',
    Eu = 'offcanvas-backdrop',
    Jg = '.offcanvas.show',
    Tu = `show${kM}`,
    xu = `shown${kM}`,
    yu = `hide${kM}`,
    pg = `hidden${kM}`,
    Yu = `click${kM}${Qg}`,
    eu = `keydown.dismiss${kM}`,
    zu = '[data-bs-toggle="offcanvas"]'
  class YM extends DM {
    constructor(A, D) {
      super(A)
      ;(this._config = this._getConfig(D)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners()
    }
    static get NAME() {
      return kg
    }
    static get Default() {
      return Gg
    }
    toggle(A) {
      return this._isShown ? this.hide() : this.show(A)
    }
    show(A) {
      if (this._isShown || y.trigger(this._element, Tu, {relatedTarget: A}).defaultPrevented) return
      ;(this._isShown = !0),
        (this._element.style.visibility = 'visible'),
        this._backdrop.show(),
        this._config.scroll || new QI().hide(),
        this._element.removeAttribute('aria-hidden'),
        this._element.setAttribute('aria-modal', !0),
        this._element.setAttribute('role', 'dialog'),
        this._element.classList.add(rg)
      const g = () => {
        this._config.scroll || this._focustrap.activate(),
          y.trigger(this._element, xu, {relatedTarget: A})
      }
      this._queueCallback(g, this._element, !0)
    }
    hide() {
      if (!this._isShown || y.trigger(this._element, yu).defaultPrevented) return
      this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.remove(rg),
        this._backdrop.hide()
      const D = () => {
        this._element.setAttribute('aria-hidden', !0),
          this._element.removeAttribute('aria-modal'),
          this._element.removeAttribute('role'),
          (this._element.style.visibility = 'hidden'),
          this._config.scroll || new QI().reset(),
          y.trigger(this._element, pg)
      }
      this._queueCallback(D, this._element, !0)
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    _getConfig(A) {
      return (
        (A = z(z(z({}, Gg), Z.getDataAttributes(this._element)), typeof A == 'object' ? A : {})),
        LM(kg, A, wu),
        A
      )
    }
    _initializeBackDrop() {
      return new zg({
        className: Eu,
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      })
    }
    _initializeFocusTrap() {
      return new ag({trapElement: this._element})
    }
    _addEventListeners() {
      y.on(this._element, eu, (A) => {
        this._config.keyboard && A.key === iu && this.hide()
      })
    }
    static jQueryInterface(A) {
      return this.each(function () {
        const D = YM.getOrCreateInstance(this, A)
        if (typeof A == 'string') {
          if (D[A] === void 0 || A.startsWith('_') || A === 'constructor')
            throw new TypeError(`No method named "${A}"`)
          D[A](this)
        }
      })
    }
  }
  y.on(document, Yu, zu, function (M) {
    const A = TM(this)
    if ((['A', 'AREA'].includes(this.tagName) && M.preventDefault(), sM(this))) return
    y.one(A, pg, () => {
      jA(this) && this.focus()
    })
    const D = m.findOne(Jg)
    D && D !== A && YM.getInstance(D).hide(), YM.getOrCreateInstance(A).toggle(this)
  }),
    y.on(window, tu, () => m.find(Jg).forEach((M) => YM.getOrCreateInstance(M).show())),
    bA(YM),
    K(YM)
  const cu = new Set([
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href',
    ]),
    au = /^aria-[\w-]*$/i,
    Uu = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    lu =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    su = (M, A) => {
      const D = M.nodeName.toLowerCase()
      if (A.includes(D))
        return cu.has(D) ? Boolean(Uu.test(M.nodeValue) || lu.test(M.nodeValue)) : !0
      const g = A.filter((N) => N instanceof RegExp)
      for (let N = 0, L = g.length; N < L; N++) if (g[N].test(D)) return !0
      return !1
    },
    ou = {
      '*': ['class', 'dir', 'id', 'lang', 'role', au],
      'a': ['target', 'href', 'title', 'rel'],
      'area': [],
      'b': [],
      'br': [],
      'col': [],
      'code': [],
      'div': [],
      'em': [],
      'hr': [],
      'h1': [],
      'h2': [],
      'h3': [],
      'h4': [],
      'h5': [],
      'h6': [],
      'i': [],
      'img': ['src', 'srcset', 'alt', 'title', 'width', 'height'],
      'li': [],
      'ol': [],
      'p': [],
      'pre': [],
      's': [],
      'small': [],
      'span': [],
      'sub': [],
      'sup': [],
      'strong': [],
      'u': [],
      'ul': [],
    }
  function Zg(M, A, D) {
    if (!M.length) return M
    if (D && typeof D == 'function') return D(M)
    const N = new window.DOMParser().parseFromString(M, 'text/html'),
      L = [].concat(...N.body.querySelectorAll('*'))
    for (let j = 0, S = L.length; j < S; j++) {
      const u = L[j],
        T = u.nodeName.toLowerCase()
      if (!Object.keys(A).includes(T)) {
        u.remove()
        continue
      }
      const E = [].concat(...u.attributes),
        t = [].concat(A['*'] || [], A[T] || [])
      E.forEach((i) => {
        su(i, t) || u.removeAttribute(i.nodeName)
      })
    }
    return N.body.innerHTML
  }
  const Vg = 'tooltip',
    SM = '.bs.tooltip',
    Ou = 'bs-tooltip',
    mu = new Set(['sanitize', 'allowList', 'sanitizeFn']),
    du = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(array|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacements: 'array',
      boundary: '(string|element)',
      customClass: '(string|function)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      allowList: 'object',
      popperConfig: '(null|object|function)',
    },
    nu = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: v() ? 'left' : 'right',
      BOTTOM: 'bottom',
      LEFT: v() ? 'right' : 'left',
    },
    bu = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ['top', 'right', 'bottom', 'left'],
      boundary: 'clippingParents',
      customClass: '',
      sanitize: !0,
      sanitizeFn: null,
      allowList: ou,
      popperConfig: null,
    },
    hu = {
      HIDE: `hide${SM}`,
      HIDDEN: `hidden${SM}`,
      SHOW: `show${SM}`,
      SHOWN: `shown${SM}`,
      INSERTED: `inserted${SM}`,
      CLICK: `click${SM}`,
      FOCUSIN: `focusin${SM}`,
      FOCUSOUT: `focusout${SM}`,
      MOUSEENTER: `mouseenter${SM}`,
      MOUSELEAVE: `mouseleave${SM}`,
    },
    JA = 'fade',
    Wu = 'modal',
    wA = 'show',
    EA = 'show',
    rI = 'out',
    Bg = '.tooltip-inner',
    Pg = `.${Wu}`,
    Xg = 'hide.bs.modal',
    TA = 'hover',
    JI = 'focus',
    ku = 'click',
    Qu = 'manual'
  class iM extends DM {
    constructor(A, D) {
      if (typeof JD == 'undefined')
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)")
      super(A)
      ;(this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ''),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(D)),
        (this.tip = null),
        this._setListeners()
    }
    static get Default() {
      return bu
    }
    static get NAME() {
      return Vg
    }
    static get Event() {
      return hu
    }
    static get DefaultType() {
      return du
    }
    enable() {
      this._isEnabled = !0
    }
    disable() {
      this._isEnabled = !1
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }
    toggle(A) {
      if (!!this._isEnabled)
        if (A) {
          const D = this._initializeOnDelegatedTarget(A)
          ;(D._activeTrigger.click = !D._activeTrigger.click),
            D._isWithActiveTrigger() ? D._enter(null, D) : D._leave(null, D)
        } else {
          if (this.getTipElement().classList.contains(wA)) {
            this._leave(null, this)
            return
          }
          this._enter(null, this)
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        y.off(this._element.closest(Pg), Xg, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose()
    }
    show() {
      if (this._element.style.display === 'none')
        throw new Error('Please use show on visible elements')
      if (!(this.isWithContent() && this._isEnabled)) return
      const A = y.trigger(this._element, this.constructor.Event.SHOW),
        D = VD(this._element),
        g =
          D === null
            ? this._element.ownerDocument.documentElement.contains(this._element)
            : D.contains(this._element)
      if (A.defaultPrevented || !g) return
      this.constructor.NAME === 'tooltip' &&
        this.tip &&
        this.getTitle() !== this.tip.querySelector(Bg).innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null))
      const N = this.getTipElement(),
        L = j4(this.constructor.NAME)
      N.setAttribute('id', L),
        this._element.setAttribute('aria-describedby', L),
        this._config.animation && N.classList.add(JA)
      const j =
          typeof this._config.placement == 'function'
            ? this._config.placement.call(this, N, this._element)
            : this._config.placement,
        S = this._getAttachment(j)
      this._addAttachmentClass(S)
      const {container: u} = this._config
      SA.set(N, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (u.append(N), y.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = aI(this._element, N, this._getPopperConfig(S))),
        N.classList.add(wA)
      const T = this._resolvePossibleFunction(this._config.customClass)
      T && N.classList.add(...T.split(' ')),
        'ontouchstart' in document.documentElement &&
          [].concat(...document.body.children).forEach((i) => {
            y.on(i, 'mouseover', nA)
          })
      const E = () => {
          const i = this._hoverState
          ;(this._hoverState = null),
            y.trigger(this._element, this.constructor.Event.SHOWN),
            i === rI && this._leave(null, this)
        },
        t = this.tip.classList.contains(JA)
      this._queueCallback(E, this.tip, t)
    }
    hide() {
      if (!this._popper) return
      const A = this.getTipElement(),
        D = () => {
          this._isWithActiveTrigger() ||
            (this._hoverState !== EA && A.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute('aria-describedby'),
            y.trigger(this._element, this.constructor.Event.HIDDEN),
            this._disposePopper())
        }
      if (y.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return
      A.classList.remove(wA),
        'ontouchstart' in document.documentElement &&
          [].concat(...document.body.children).forEach((L) => y.off(L, 'mouseover', nA)),
        (this._activeTrigger[ku] = !1),
        (this._activeTrigger[JI] = !1),
        (this._activeTrigger[TA] = !1)
      const N = this.tip.classList.contains(JA)
      this._queueCallback(D, this.tip, N), (this._hoverState = '')
    }
    update() {
      this._popper !== null && this._popper.update()
    }
    isWithContent() {
      return Boolean(this.getTitle())
    }
    getTipElement() {
      if (this.tip) return this.tip
      const A = document.createElement('div')
      A.innerHTML = this._config.template
      const D = A.children[0]
      return this.setContent(D), D.classList.remove(JA, wA), (this.tip = D), this.tip
    }
    setContent(A) {
      this._sanitizeAndSetContent(A, this.getTitle(), Bg)
    }
    _sanitizeAndSetContent(A, D, g) {
      const N = m.findOne(g, A)
      if (!D && N) {
        N.remove()
        return
      }
      this.setElementContent(N, D)
    }
    setElementContent(A, D) {
      if (A !== null) {
        if (lM(D)) {
          ;(D = xM(D)),
            this._config.html
              ? D.parentNode !== A && ((A.innerHTML = ''), A.append(D))
              : (A.textContent = D.textContent)
          return
        }
        this._config.html
          ? (this._config.sanitize && (D = Zg(D, this._config.allowList, this._config.sanitizeFn)),
            (A.innerHTML = D))
          : (A.textContent = D)
      }
    }
    getTitle() {
      const A = this._element.getAttribute('data-bs-original-title') || this._config.title
      return this._resolvePossibleFunction(A)
    }
    updateAttachment(A) {
      return A === 'right' ? 'end' : A === 'left' ? 'start' : A
    }
    _initializeOnDelegatedTarget(A, D) {
      return D || this.constructor.getOrCreateInstance(A.delegateTarget, this._getDelegateConfig())
    }
    _getOffset() {
      const {offset: A} = this._config
      return typeof A == 'string'
        ? A.split(',').map((D) => Number.parseInt(D, 10))
        : typeof A == 'function'
        ? (D) => A(D, this._element)
        : A
    }
    _resolvePossibleFunction(A) {
      return typeof A == 'function' ? A.call(this._element) : A
    }
    _getPopperConfig(A) {
      const D = {
        placement: A,
        modifiers: [
          {name: 'flip', options: {fallbackPlacements: this._config.fallbackPlacements}},
          {name: 'offset', options: {offset: this._getOffset()}},
          {name: 'preventOverflow', options: {boundary: this._config.boundary}},
          {name: 'arrow', options: {element: `.${this.constructor.NAME}-arrow`}},
          {
            name: 'onChange',
            enabled: !0,
            phase: 'afterWrite',
            fn: (g) => this._handlePopperPlacementChange(g),
          },
        ],
        onFirstUpdate: (g) => {
          g.options.placement !== g.placement && this._handlePopperPlacementChange(g)
        },
      }
      return z(
        z({}, D),
        typeof this._config.popperConfig == 'function'
          ? this._config.popperConfig(D)
          : this._config.popperConfig
      )
    }
    _addAttachmentClass(A) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(A)}`
      )
    }
    _getAttachment(A) {
      return nu[A.toUpperCase()]
    }
    _setListeners() {
      this._config.trigger.split(' ').forEach((D) => {
        if (D === 'click')
          y.on(this._element, this.constructor.Event.CLICK, this._config.selector, (g) =>
            this.toggle(g)
          )
        else if (D !== Qu) {
          const g = D === TA ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
            N = D === TA ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT
          y.on(this._element, g, this._config.selector, (L) => this._enter(L)),
            y.on(this._element, N, this._config.selector, (L) => this._leave(L))
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide()
        }),
        y.on(this._element.closest(Pg), Xg, this._hideModalHandler),
        this._config.selector
          ? (this._config = h(z({}, this._config), {trigger: 'manual', selector: ''}))
          : this._fixTitle()
    }
    _fixTitle() {
      const A = this._element.getAttribute('title'),
        D = typeof this._element.getAttribute('data-bs-original-title')
      ;(A || D !== 'string') &&
        (this._element.setAttribute('data-bs-original-title', A || ''),
        A &&
          !this._element.getAttribute('aria-label') &&
          !this._element.textContent &&
          this._element.setAttribute('aria-label', A),
        this._element.setAttribute('title', ''))
    }
    _enter(A, D) {
      if (
        ((D = this._initializeOnDelegatedTarget(A, D)),
        A && (D._activeTrigger[A.type === 'focusin' ? JI : TA] = !0),
        D.getTipElement().classList.contains(wA) || D._hoverState === EA)
      ) {
        D._hoverState = EA
        return
      }
      if (
        (clearTimeout(D._timeout), (D._hoverState = EA), !D._config.delay || !D._config.delay.show)
      ) {
        D.show()
        return
      }
      D._timeout = setTimeout(() => {
        D._hoverState === EA && D.show()
      }, D._config.delay.show)
    }
    _leave(A, D) {
      if (
        ((D = this._initializeOnDelegatedTarget(A, D)),
        A &&
          (D._activeTrigger[A.type === 'focusout' ? JI : TA] = D._element.contains(
            A.relatedTarget
          )),
        !D._isWithActiveTrigger())
      ) {
        if (
          (clearTimeout(D._timeout),
          (D._hoverState = rI),
          !D._config.delay || !D._config.delay.hide)
        ) {
          D.hide()
          return
        }
        D._timeout = setTimeout(() => {
          D._hoverState === rI && D.hide()
        }, D._config.delay.hide)
      }
    }
    _isWithActiveTrigger() {
      for (const A in this._activeTrigger) if (this._activeTrigger[A]) return !0
      return !1
    }
    _getConfig(A) {
      const D = Z.getDataAttributes(this._element)
      return (
        Object.keys(D).forEach((g) => {
          mu.has(g) && delete D[g]
        }),
        (A = z(z(z({}, this.constructor.Default), D), typeof A == 'object' && A ? A : {})),
        (A.container = A.container === !1 ? document.body : xM(A.container)),
        typeof A.delay == 'number' && (A.delay = {show: A.delay, hide: A.delay}),
        typeof A.title == 'number' && (A.title = A.title.toString()),
        typeof A.content == 'number' && (A.content = A.content.toString()),
        LM(Vg, A, this.constructor.DefaultType),
        A.sanitize && (A.template = Zg(A.template, A.allowList, A.sanitizeFn)),
        A
      )
    }
    _getDelegateConfig() {
      const A = {}
      for (const D in this._config)
        this.constructor.Default[D] !== this._config[D] && (A[D] = this._config[D])
      return A
    }
    _cleanTipClass() {
      const A = this.getTipElement(),
        D = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g'),
        g = A.getAttribute('class').match(D)
      g !== null && g.length > 0 && g.map((N) => N.trim()).forEach((N) => A.classList.remove(N))
    }
    _getBasicClassPrefix() {
      return Ou
    }
    _handlePopperPlacementChange(A) {
      const {state: D} = A
      !D ||
        ((this.tip = D.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(D.placement)))
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null))
    }
    static jQueryInterface(A) {
      return this.each(function () {
        const D = iM.getOrCreateInstance(this, A)
        if (typeof A == 'string') {
          if (typeof D[A] == 'undefined') throw new TypeError(`No method named "${A}"`)
          D[A]()
        }
      })
    }
  }
  K(iM)
  const Gu = 'popover',
    uM = '.bs.popover',
    ru = 'bs-popover',
    Ju = h(z({}, iM.Default), {
      placement: 'right',
      offset: [0, 8],
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    pu = h(z({}, iM.DefaultType), {content: '(string|element|function)'}),
    Zu = {
      HIDE: `hide${uM}`,
      HIDDEN: `hidden${uM}`,
      SHOW: `show${uM}`,
      SHOWN: `shown${uM}`,
      INSERTED: `inserted${uM}`,
      CLICK: `click${uM}`,
      FOCUSIN: `focusin${uM}`,
      FOCUSOUT: `focusout${uM}`,
      MOUSEENTER: `mouseenter${uM}`,
      MOUSELEAVE: `mouseleave${uM}`,
    },
    Vu = '.popover-header',
    Bu = '.popover-body'
  class _M extends iM {
    static get Default() {
      return Ju
    }
    static get NAME() {
      return Gu
    }
    static get Event() {
      return Zu
    }
    static get DefaultType() {
      return pu
    }
    isWithContent() {
      return this.getTitle() || this._getContent()
    }
    setContent(A) {
      this._sanitizeAndSetContent(A, this.getTitle(), Vu),
        this._sanitizeAndSetContent(A, this._getContent(), Bu)
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content)
    }
    _getBasicClassPrefix() {
      return ru
    }
    static jQueryInterface(A) {
      return this.each(function () {
        const D = _M.getOrCreateInstance(this, A)
        if (typeof A == 'string') {
          if (typeof D[A] == 'undefined') throw new TypeError(`No method named "${A}"`)
          D[A]()
        }
      })
    }
  }
  K(_M)
  const Fg = 'scrollspy',
    pA = '.bs.scrollspy',
    Pu = '.data-api',
    vg = {offset: 10, method: 'auto', target: ''},
    Xu = {offset: 'number', method: 'string', target: '(string|element)'},
    Fu = `activate${pA}`,
    vu = `scroll${pA}`,
    fu = `load${pA}${Pu}`,
    fg = 'dropdown-item',
    $M = 'active',
    Hu = '[data-bs-spy="scroll"]',
    Ru = '.nav, .list-group',
    pI = '.nav-link',
    _u = '.nav-item',
    Hg = '.list-group-item',
    ZI = `${pI}, ${Hg}, .${fg}`,
    $u = '.dropdown',
    qu = '.dropdown-toggle',
    Ku = 'offset',
    Rg = 'position'
  class ZA extends DM {
    constructor(A, D) {
      super(A)
      ;(this._scrollElement = this._element.tagName === 'BODY' ? window : this._element),
        (this._config = this._getConfig(D)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        y.on(this._scrollElement, vu, () => this._process()),
        this.refresh(),
        this._process()
    }
    static get Default() {
      return vg
    }
    static get NAME() {
      return Fg
    }
    refresh() {
      const A = this._scrollElement === this._scrollElement.window ? Ku : Rg,
        D = this._config.method === 'auto' ? A : this._config.method,
        g = D === Rg ? this._getScrollTop() : 0
      ;(this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        m
          .find(ZI, this._config.target)
          .map((L) => {
            const j = lI(L),
              S = j ? m.findOne(j) : null
            if (S) {
              const u = S.getBoundingClientRect()
              if (u.width || u.height) return [Z[D](S).top + g, j]
            }
            return null
          })
          .filter((L) => L)
          .sort((L, j) => L[0] - j[0])
          .forEach((L) => {
            this._offsets.push(L[0]), this._targets.push(L[1])
          })
    }
    dispose() {
      y.off(this._scrollElement, pA), super.dispose()
    }
    _getConfig(A) {
      return (
        (A = z(
          z(z({}, vg), Z.getDataAttributes(this._element)),
          typeof A == 'object' && A ? A : {}
        )),
        (A.target = xM(A.target) || document.documentElement),
        LM(Fg, A, Xu),
        A
      )
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      )
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height
    }
    _process() {
      const A = this._getScrollTop() + this._config.offset,
        D = this._getScrollHeight(),
        g = this._config.offset + D - this._getOffsetHeight()
      if ((this._scrollHeight !== D && this.refresh(), A >= g)) {
        const N = this._targets[this._targets.length - 1]
        this._activeTarget !== N && this._activate(N)
        return
      }
      if (this._activeTarget && A < this._offsets[0] && this._offsets[0] > 0) {
        ;(this._activeTarget = null), this._clear()
        return
      }
      for (let N = this._offsets.length; N--; )
        this._activeTarget !== this._targets[N] &&
          A >= this._offsets[N] &&
          (typeof this._offsets[N + 1] == 'undefined' || A < this._offsets[N + 1]) &&
          this._activate(this._targets[N])
    }
    _activate(A) {
      ;(this._activeTarget = A), this._clear()
      const D = ZI.split(',').map((N) => `${N}[data-bs-target="${A}"],${N}[href="${A}"]`),
        g = m.findOne(D.join(','), this._config.target)
      g.classList.add($M),
        g.classList.contains(fg)
          ? m.findOne(qu, g.closest($u)).classList.add($M)
          : m.parents(g, Ru).forEach((N) => {
              m.prev(N, `${pI}, ${Hg}`).forEach((L) => L.classList.add($M)),
                m.prev(N, _u).forEach((L) => {
                  m.children(L, pI).forEach((j) => j.classList.add($M))
                })
            }),
        y.trigger(this._scrollElement, Fu, {relatedTarget: A})
    }
    _clear() {
      m.find(ZI, this._config.target)
        .filter((A) => A.classList.contains($M))
        .forEach((A) => A.classList.remove($M))
    }
    static jQueryInterface(A) {
      return this.each(function () {
        const D = ZA.getOrCreateInstance(this, A)
        if (typeof A == 'string') {
          if (typeof D[A] == 'undefined') throw new TypeError(`No method named "${A}"`)
          D[A]()
        }
      })
    }
  }
  y.on(window, fu, () => {
    m.find(Hu).forEach((M) => new ZA(M))
  }),
    K(ZA)
  const MC = 'tab',
    xA = '.bs.tab',
    AC = '.data-api',
    IC = `hide${xA}`,
    DC = `hidden${xA}`,
    gC = `show${xA}`,
    NC = `shown${xA}`,
    LC = `click${xA}${AC}`,
    jC = 'dropdown-menu',
    yA = 'active',
    _g = 'fade',
    $g = 'show',
    SC = '.dropdown',
    uC = '.nav, .list-group',
    qg = '.active',
    Kg = ':scope > li > .active',
    CC = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    tC = '.dropdown-toggle',
    iC = ':scope > .dropdown-menu .active'
  class VA extends DM {
    static get NAME() {
      return MC
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(yA)
      )
        return
      let A
      const D = TM(this._element),
        g = this._element.closest(uC)
      if (g) {
        const S = g.nodeName === 'UL' || g.nodeName === 'OL' ? Kg : qg
        ;(A = m.find(S, g)), (A = A[A.length - 1])
      }
      const N = A ? y.trigger(A, IC, {relatedTarget: this._element}) : null
      if (
        y.trigger(this._element, gC, {relatedTarget: A}).defaultPrevented ||
        (N !== null && N.defaultPrevented)
      )
        return
      this._activate(this._element, g)
      const j = () => {
        y.trigger(A, DC, {relatedTarget: this._element}),
          y.trigger(this._element, NC, {relatedTarget: A})
      }
      D ? this._activate(D, D.parentNode, j) : j()
    }
    _activate(A, D, g) {
      const L = (
          D && (D.nodeName === 'UL' || D.nodeName === 'OL') ? m.find(Kg, D) : m.children(D, qg)
        )[0],
        j = g && L && L.classList.contains(_g),
        S = () => this._transitionComplete(A, L, g)
      L && j ? (L.classList.remove($g), this._queueCallback(S, A, !0)) : S()
    }
    _transitionComplete(A, D, g) {
      if (D) {
        D.classList.remove(yA)
        const L = m.findOne(iC, D.parentNode)
        L && L.classList.remove(yA),
          D.getAttribute('role') === 'tab' && D.setAttribute('aria-selected', !1)
      }
      A.classList.add(yA),
        A.getAttribute('role') === 'tab' && A.setAttribute('aria-selected', !0),
        fM(A),
        A.classList.contains(_g) && A.classList.add($g)
      let N = A.parentNode
      if ((N && N.nodeName === 'LI' && (N = N.parentNode), N && N.classList.contains(jC))) {
        const L = A.closest(SC)
        L && m.find(tC, L).forEach((j) => j.classList.add(yA)), A.setAttribute('aria-expanded', !0)
      }
      g && g()
    }
    static jQueryInterface(A) {
      return this.each(function () {
        const D = VA.getOrCreateInstance(this)
        if (typeof A == 'string') {
          if (typeof D[A] == 'undefined') throw new TypeError(`No method named "${A}"`)
          D[A]()
        }
      })
    }
  }
  y.on(document, LC, CC, function (M) {
    if ((['A', 'AREA'].includes(this.tagName) && M.preventDefault(), sM(this))) return
    VA.getOrCreateInstance(this).show()
  }),
    K(VA)
  const MN = 'toast',
    eM = '.bs.toast',
    wC = `mouseover${eM}`,
    EC = `mouseout${eM}`,
    TC = `focusin${eM}`,
    xC = `focusout${eM}`,
    yC = `hide${eM}`,
    YC = `hidden${eM}`,
    eC = `show${eM}`,
    zC = `shown${eM}`,
    cC = 'fade',
    AN = 'hide',
    YA = 'show',
    BA = 'showing',
    aC = {animation: 'boolean', autohide: 'boolean', delay: 'number'},
    IN = {animation: !0, autohide: !0, delay: 5e3}
  class PA extends DM {
    constructor(A, D) {
      super(A)
      ;(this._config = this._getConfig(D)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners()
    }
    static get DefaultType() {
      return aC
    }
    static get Default() {
      return IN
    }
    static get NAME() {
      return MN
    }
    show() {
      if (y.trigger(this._element, eC).defaultPrevented) return
      this._clearTimeout(), this._config.animation && this._element.classList.add(cC)
      const D = () => {
        this._element.classList.remove(BA), y.trigger(this._element, zC), this._maybeScheduleHide()
      }
      this._element.classList.remove(AN),
        fM(this._element),
        this._element.classList.add(YA),
        this._element.classList.add(BA),
        this._queueCallback(D, this._element, this._config.animation)
    }
    hide() {
      if (!this._element.classList.contains(YA) || y.trigger(this._element, yC).defaultPrevented)
        return
      const D = () => {
        this._element.classList.add(AN),
          this._element.classList.remove(BA),
          this._element.classList.remove(YA),
          y.trigger(this._element, YC)
      }
      this._element.classList.add(BA), this._queueCallback(D, this._element, this._config.animation)
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(YA) && this._element.classList.remove(YA),
        super.dispose()
    }
    _getConfig(A) {
      return (
        (A = z(
          z(z({}, IN), Z.getDataAttributes(this._element)),
          typeof A == 'object' && A ? A : {}
        )),
        LM(MN, A, this.constructor.DefaultType),
        A
      )
    }
    _maybeScheduleHide() {
      !this._config.autohide ||
        this._hasMouseInteraction ||
        this._hasKeyboardInteraction ||
        (this._timeout = setTimeout(() => {
          this.hide()
        }, this._config.delay))
    }
    _onInteraction(A, D) {
      switch (A.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = D
          break
        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = D
          break
      }
      if (D) {
        this._clearTimeout()
        return
      }
      const g = A.relatedTarget
      this._element === g || this._element.contains(g) || this._maybeScheduleHide()
    }
    _setListeners() {
      y.on(this._element, wC, (A) => this._onInteraction(A, !0)),
        y.on(this._element, EC, (A) => this._onInteraction(A, !1)),
        y.on(this._element, TC, (A) => this._onInteraction(A, !0)),
        y.on(this._element, xC, (A) => this._onInteraction(A, !1))
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null)
    }
    static jQueryInterface(A) {
      return this.each(function () {
        const D = PA.getOrCreateInstance(this, A)
        if (typeof A == 'string') {
          if (typeof D[A] == 'undefined') throw new TypeError(`No method named "${A}"`)
          D[A](this)
        }
      })
    }
  }
  bA(PA), K(PA)
  function Q(M, A, D) {
    I.onMounted(() => {
      var g
      ;(g = M == null ? void 0 : M.value) == null || g.addEventListener(A, D)
    }),
      I.onBeforeUnmount(() => {
        var g
        ;(g = M == null ? void 0 : M.value) == null || g.removeEventListener(A, D)
      })
  }
  const UC = I.defineComponent({
    name: 'BCollapse',
    props: {
      accordion: {type: String, required: !1},
      id: {type: String, default: J()},
      modelValue: {type: Boolean, default: !1},
      tag: {type: String, default: 'div'},
      toggle: {type: Boolean, default: !1},
      visible: {type: Boolean, default: !1},
    },
    emits: ['update:modelValue', 'show', 'shown', 'hide', 'hidden'],
    setup(M, {emit: A}) {
      const D = I.ref(),
        g = I.ref(),
        N = I.computed(() => ({show: M.modelValue})),
        L = () => A('update:modelValue', !1)
      return (
        Q(D, 'show.bs.collapse', () => {
          A('show'), A('update:modelValue', !0)
        }),
        Q(D, 'hide.bs.collapse', () => {
          A('hide'), A('update:modelValue', !1)
        }),
        Q(D, 'shown.bs.collapse', () => A('shown')),
        Q(D, 'hidden.bs.collapse', () => A('hidden')),
        I.onMounted(() => {
          var j
          ;(g.value = new bM(D.value, {
            parent: M.accordion ? `#${M.accordion}` : void 0,
            toggle: M.toggle,
          })),
            (M.visible || M.modelValue) &&
              (A('update:modelValue', !0), (j = g.value) == null || j.show())
        }),
        I.watch(
          () => M.modelValue,
          (j) => {
            var S, u
            j ? (S = g.value) == null || S.show() : (u = g.value) == null || u.hide()
          }
        ),
        I.watch(
          () => M.visible,
          (j) => {
            var S, u
            j
              ? (A('update:modelValue', !!j), (S = g.value) == null || S.show())
              : (A('update:modelValue', !!j), (u = g.value) == null || u.hide())
          }
        ),
        {element: D, classes: N, close: L}
      )
    },
  })
  function lC(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {
          'id': M.id,
          'ref': 'element',
          'class': I.normalizeClass(['collapse', M.classes]),
          'data-bs-parent': M.accordion || null,
        },
        {
          default: I.withCtx(() => [
            I.renderSlot(M.$slots, 'default', {visible: M.modelValue, close: M.close}),
          ]),
          _: 3,
        },
        8,
        ['id', 'class', 'data-bs-parent']
      )
    )
  }
  var VI = c(UC, [['render', lC]])
  const sC = /_/g,
    oC = /([a-z])([A-Z])/g,
    OC = /(\s|^)(\w)/,
    XA = /\s+/,
    mC = /^#/,
    dC = /^#[A-Za-z]+[\w\-:.]*$/,
    nC = (M, A) => M.indexOf(A) !== -1,
    bC = (...M) => Array.from(...M),
    hC = (...M) => Array.prototype.concat.apply([], M),
    qM = typeof window != 'undefined',
    DN = typeof document != 'undefined',
    WC = qM && DN && typeof navigator != 'undefined',
    FA = qM ? window : {},
    gN = DN ? document : {},
    NN = qM ? FA.Element : class extends Object {},
    kC = qM ? FA.HTMLElement : class extends NN {}
  qM ? FA.SVGElement : class extends NN {}, qM ? FA.File : class extends Object {}
  const QC = /^[0-9]*\.?[0-9]+$/,
    BI = (M) => SN(M) === 'boolean',
    GC = (M) => M !== null && typeof M == 'object',
    KM = (M) => typeof M == 'string',
    rC = (M) => M === void 0,
    JC = (M) => M === null,
    LN = (M) => rC(M) || JC(M),
    jN = (M) => QC.test(String(M)),
    pC = (M) => typeof M == 'number',
    SN = (M) => typeof M,
    uN = (M) => SN(M) === 'function',
    CN = (M) => Object.prototype.toString.call(M) === '[object Object]',
    tN = (M) => Array.isArray(M),
    PI = (M, A = 2) =>
      LN(M)
        ? ''
        : tN(M) || (CN(M) && M.toString === Object.prototype.toString)
        ? JSON.stringify(M, null, A)
        : String(M),
    iN = (M) =>
      M.replace(sC, ' ')
        .replace(oC, (A, D, g) => `${D} ${g}`)
        .replace(OC, (A, D, g) => D + g.toUpperCase()),
    ZC = (M) => ((M = KM(M) ? M.trim() : String(M)), M.charAt(0).toUpperCase() + M.slice(1)),
    zM = (M) => !!(M && M.nodeType === Node.ELEMENT_NODE),
    VC = (M) => (zM(M) ? M.getBoundingClientRect() : null),
    BC = (M = []) => {
      const {activeElement: A} = document
      return A && !M.some((D) => D === A) ? A : null
    },
    PC = (M) => zM(M) && M === BC(),
    XC = (M, A = {}) => {
      try {
        M.focus(A)
      } catch (D) {
        console.error(D)
      }
      return PC(M)
    },
    FC = (M, A) => (A && zM(M) && M.getAttribute(A)) || null,
    vC = (M) => {
      if (FC(M, 'display') === 'none') return !1
      const A = VC(M)
      return !!(A && A.height > 0 && A.width > 0)
    },
    wN = (M, A) => !M || M(A).filter((D) => D.type !== I.Comment).length < 1,
    fC = (M, A) => (zM(A) ? A : gN).querySelector(M) || null,
    HC = (M, A) => bC((zM(A) ? A : gN).querySelectorAll(M)),
    EN = (M, A) => (A && zM(M) ? M.getAttribute(A) : null),
    RC = (M, A, D) => {
      A && zM(M) && M.setAttribute(A, D)
    },
    _C = (M, A) => {
      A && zM(M) && M.removeAttribute(A)
    },
    $C = (M, A) => PI(M).toLowerCase() === PI(A).toLowerCase()
  function qC(M) {
    if (M.classList.contains('offcanvas')) return 'offcanvas'
    if (M.classList.contains('collapse')) return 'collapse'
    throw Error("Couldn't resolve toggle type")
  }
  const KC = (M, A) => {
      const {modifiers: D, arg: g, value: N} = M,
        L = Object.keys(D || {}),
        j = KM(N) ? N.split(XA) : N
      if ($C(A.tagName, 'a')) {
        const S = EN(A, 'href') || ''
        dC.test(S) && L.push(S.replace(mC, ''))
      }
      return (
        hC(g, j).forEach((S) => KM(S) && L.push(S)), L.filter((S, u, T) => S && T.indexOf(S) === u)
      )
    },
    TN = {
      mounted(M, A) {
        const D = KC(A, M),
          g = []
        let N = 'data-bs-target'
        M.tagName === 'a' && (N = 'href')
        for (let L = 0; L < D.length; L++) {
          const j = D[L],
            S = document.getElementById(j)
          S && (M.setAttribute('data-bs-toggle', qC(S)), g.push(`#${j}`))
        }
        g.length > 0 && M.setAttribute(N, g.join(','))
      },
    },
    Mt = I.defineComponent({
      name: 'BAccordionItem',
      components: {BCollapse: VI},
      directives: {BToggle: TN},
      props: {title: {type: String}, id: {type: String}, visible: {type: Boolean, default: !1}},
      setup(M) {
        const A = P(M.id, 'accordion_item')
        return {parent: I.inject(gD, ''), computedId: A}
      },
    }),
    At = {class: 'accordion-item'},
    It = ['id'],
    Dt = ['aria-expanded', 'aria-controls'],
    gt = {class: 'accordion-body'}
  function Nt(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-collapse'),
      S = I.resolveDirective('b-toggle')
    return (
      I.openBlock(),
      I.createElementBlock('div', At, [
        I.createElementVNode(
          'h2',
          {id: `${M.computedId}heading`, class: 'accordion-header'},
          [
            I.withDirectives(
              (I.openBlock(),
              I.createElementBlock(
                'button',
                {
                  'class': I.normalizeClass(['accordion-button', {collapsed: !M.visible}]),
                  'type': 'button',
                  'aria-expanded': M.visible ? 'true' : 'false',
                  'aria-controls': M.computedId,
                },
                [
                  I.renderSlot(M.$slots, 'title', {}, () => [
                    I.createTextVNode(I.toDisplayString(M.title), 1),
                  ]),
                ],
                10,
                Dt
              )),
              [[S, void 0, M.computedId]]
            ),
          ],
          8,
          It
        ),
        I.createVNode(
          j,
          {
            'id': M.computedId,
            'class': 'accordion-collapse',
            'visible': M.visible,
            'accordion': M.parent,
            'aria-labelledby': `heading${M.computedId}`,
          },
          {
            default: I.withCtx(() => [
              I.createElementVNode('div', gt, [I.renderSlot(M.$slots, 'default')]),
            ]),
            _: 3,
          },
          8,
          ['id', 'visible', 'accordion', 'aria-labelledby']
        ),
      ])
    )
  }
  var xN = c(Mt, [['render', Nt]])
  const eA = (M, A = NaN) => (Number.isInteger(M) ? M : A),
    Lt = (M, A = NaN) => {
      const D = parseInt(M, 10)
      return isNaN(D) ? A : D
    },
    QM = (M, A = NaN) => {
      const D = parseFloat(M.toString())
      return isNaN(D) ? A : D
    },
    jt = I.defineComponent({
      name: 'BAlert',
      props: {
        dismissLabel: {type: String, default: 'Close'},
        dismissible: {type: Boolean, default: !1},
        fade: {type: Boolean, default: !1},
        modelValue: {type: [Boolean, Number], default: !1},
        show: {type: Boolean, default: !1},
        variant: {type: String, default: 'info'},
      },
      emits: ['dismissed', 'dismiss-count-down', 'update:modelValue'],
      setup(M, {emit: A}) {
        const D = I.ref(),
          g = I.ref(),
          N = I.computed(() => ({
            [`alert-${M.variant}`]: M.variant,
            'show': M.modelValue,
            'alert-dismissible': M.dismissible,
            'fade': M.modelValue,
          }))
        let L = 0
        const j = (C) => {
            if (typeof C == 'boolean') return 0
            const x = eA(C, 0)
            return x > 0 ? x : 0
          },
          S = () => {
            L !== void 0 && (clearTimeout(L), (L = void 0))
          },
          u = I.ref(j(M.modelValue)),
          T = I.computed(() => M.modelValue || M.show)
        I.onBeforeUnmount(() => {
          var C
          S(), (C = g.value) == null || C.dispose(), (g.value = void 0)
        })
        const E = I.computed(() =>
            M.modelValue === !0
              ? !0
              : M.modelValue === !1 || eA(M.modelValue, 0) < 1
              ? !1
              : !!M.modelValue
          ),
          t = () => {
            ;(u.value = j(M.modelValue)),
              (E.value || M.show) && !g.value && (g.value = new uA(D.value))
          },
          i = () => {
            typeof M.modelValue == 'boolean'
              ? A('update:modelValue', !1)
              : A('update:modelValue', 0),
              A('dismissed')
          }
        return (
          I.watch(() => M.modelValue, t),
          I.watch(() => M.show, t),
          I.watch(u, (C) => {
            S(),
              typeof M.modelValue != 'boolean' &&
                (A('dismiss-count-down', C),
                C === 0 && M.modelValue > 0 && A('dismissed'),
                M.modelValue !== C && A('update:modelValue', C),
                C > 0 &&
                  (L = setTimeout(() => {
                    u.value--
                  }, 1e3)))
          }),
          {dismissClicked: i, isAlertVisible: T, element: D, classes: N}
        )
      },
    }),
    St = ['aria-label']
  function ut(M, A, D, g, N, L) {
    return M.isAlertVisible
      ? (I.openBlock(),
        I.createElementBlock(
          'div',
          {key: 0, ref: 'element', class: I.normalizeClass(['alert', M.classes]), role: 'alert'},
          [
            I.renderSlot(M.$slots, 'default'),
            M.dismissible
              ? (I.openBlock(),
                I.createElementBlock(
                  'button',
                  {
                    'key': 0,
                    'type': 'button',
                    'class': 'btn-close',
                    'data-bs-dismiss': 'alert',
                    'aria-label': M.dismissLabel,
                    'onClick':
                      A[0] || (A[0] = (...j) => M.dismissClicked && M.dismissClicked(...j)),
                  },
                  null,
                  8,
                  St
                ))
              : I.createCommentVNode('', !0),
          ],
          2
        ))
      : I.createCommentVNode('', !0)
  }
  var yN = c(jt, [['render', ut]])
  const Ct = Math.min,
    zA = Math.max,
    YN = Symbol(),
    tt = I.defineComponent({
      name: 'BAvatar',
      props: {
        overlap: {type: [Number, String], default: 0.3},
        rounded: {type: [Boolean, String], default: !1},
        size: {type: String, required: !1},
        square: {type: Boolean, default: !1},
        tag: {type: String, default: 'div'},
        variant: {type: String, required: !1},
      },
      setup(M) {
        const A = I.computed(() => XI(M.size)),
          D = (L) => (KM(L) && jN(L) ? QM(L, 0) : L || 0),
          g = I.computed(() => Ct(zA(D(M.overlap), 0), 1) / 2),
          N = I.computed(() => {
            let {value: L} = A
            return (
              (L = L ? `calc(${L} * ${g.value})` : null), L ? {paddingLeft: L, paddingRight: L} : {}
            )
          })
        return (
          I.provide(YN, {
            overlapScale: g,
            size: M.size,
            square: M.square,
            rounded: M.rounded,
            variant: M.variant,
          }),
          {paddingStyle: N}
        )
      },
    })
  function it(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {class: 'b-avatar-group', role: 'group'},
        {
          default: I.withCtx(() => [
            I.createElementVNode(
              'div',
              {class: 'b-avatar-group-inner', style: I.normalizeStyle(M.paddingStyle)},
              [I.renderSlot(M.$slots, 'default')],
              4
            ),
          ]),
          _: 3,
        }
      )
    )
  }
  var eN = c(tt, [['render', it]])
  const XI = (M) => {
      const A = KM(M) && jN(M) ? QM(M, 0) : M
      return pC(A) ? `${A}px` : A || null
    },
    wt = I.defineComponent({
      name: 'BAvatar',
      props: {
        alt: {type: String, default: 'avatar'},
        ariaLabel: {type: String, required: !1},
        badge: {type: [Boolean, String], default: !1},
        badgeLeft: {type: Boolean, default: !1},
        badgeOffset: {type: String, required: !1},
        badgeTop: {type: Boolean, default: !1},
        badgeVariant: {type: String, default: 'primary'},
        button: {type: Boolean, default: !1},
        buttonType: {type: String, default: 'button'},
        disabled: {type: Boolean, default: !1},
        icon: {type: String, required: !1},
        iconVariant: {type: String, default: null},
        rounded: {type: [Boolean, String], default: 'circle'},
        size: {type: [String, Number], required: !1},
        square: {type: Boolean, default: !1},
        src: {type: String, required: !1},
        text: {type: String, required: !1},
        textVariant: {type: String, default: void 0},
        variant: {type: String, default: 'secondary'},
      },
      emits: ['click', 'img-error'],
      setup(M, {emit: A, slots: D}) {
        const g = ['sm', null, 'lg'],
          N = 0.4,
          L = N * 0.7,
          j = I.inject(YN, null),
          S = (d) => {
            const V = d
            return V === 'light' || V === 'warning' ? 'dark' : 'light'
          },
          u = I.computed(() => !wN(D.default)),
          T = I.computed(() => !wN(D.badge)),
          E = I.computed(() => M.badge || M.badge === '' || T.value),
          t = I.computed(() => ((j == null ? void 0 : j.size) ? j.size : XI(M.size))),
          i = I.computed(() => ((j == null ? void 0 : j.variant) ? j.variant : M.variant)),
          C = I.computed(() => ((j == null ? void 0 : j.rounded) ? j.rounded : M.rounded)),
          x = I.computed(() => ({
            'aria-label': M.ariaLabel || null,
            'disabled': M.disabled || null,
          })),
          w = I.computed(() => ({[`bg-${M.badgeVariant}`]: M.badgeVariant})),
          e = I.computed(() => (M.badge === !0 ? '' : M.badge)),
          a = I.computed(() => `text-${S(M.badgeVariant)}`),
          U = I.computed(() => ({
            [`b-avatar-${M.size}`]: M.size && g.indexOf(XI(M.size)) !== -1,
            [`bg-${i.value}`]: i.value,
            badge: !M.button && i.value && u.value,
            rounded: C.value === '' || C.value === !0,
            ['rounded-circle']: !M.square && C.value === 'circle',
            ['rounded-0']: M.square || C.value === '0',
            ['rounded-1']: !M.square && C.value === 'sm',
            ['rounded-3']: !M.square && C.value === 'lg',
            ['rounded-top']: !M.square && C.value === 'top',
            ['rounded-bottom']: !M.square && C.value === 'bottom',
            ['rounded-start']: !M.square && C.value === 'left',
            ['rounded-end']: !M.square && C.value === 'right',
            btn: M.button,
            [`btn-${i.value}`]: M.button ? i.value : null,
          })),
          o = I.computed(() => `text-${M.textVariant || S(i.value)}`),
          l = I.computed(() => {
            if (M.icon) return M.icon
            if (!M.text && !M.src) return 'person-fill'
          }),
          s = I.computed(() => M.iconVariant || S(i.value)),
          b = I.computed(() => {
            const d = M.badgeOffset || '0px'
            return {
              fontSize: (g.indexOf(t.value || null) === -1 ? `calc(${t.value} * ${L})` : '') || '',
              top: M.badgeTop ? d : '',
              bottom: M.badgeTop ? '' : d,
              left: M.badgeLeft ? d : '',
              right: M.badgeLeft ? '' : d,
            }
          }),
          n = I.computed(() => {
            const d = g.indexOf(t.value || null) === -1 ? `calc(${t.value} * ${N})` : null
            return d ? {fontSize: d} : {}
          }),
          G = I.computed(() => {
            var r
            const d = ((r = j == null ? void 0 : j.overlapScale) == null ? void 0 : r.value) || 0,
              V = t.value && d ? `calc(${t.value} * -${d})` : null
            return V ? {marginLeft: V, marginRight: V} : {}
          }),
          O = I.computed(() => (M.button ? M.buttonType : 'span')),
          k = I.computed(() => h(z({}, G.value), {width: t.value, height: t.value}))
        return {
          attrs: x,
          badgeClasses: w,
          badgeStyle: b,
          badgeText: e,
          badgeTextClasses: a,
          classes: U,
          clicked: function (d) {
            !M.disabled && M.button && A('click', d)
          },
          computedIconVariant: s,
          fontStyle: n,
          hasBadgeSlot: T,
          hasDefaultSlot: u,
          iconName: l,
          onImgError: (d) => A('img-error', d),
          showBadge: E,
          tag: O,
          tagStyle: k,
          textClasses: o,
        }
      },
    }),
    Et = {key: 0, class: 'b-avatar-custom'},
    Tt = {key: 1, class: 'b-avatar-img'},
    xt = ['src', 'alt']
  function yt(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-icon')
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        I.mergeProps({class: ['b-avatar', M.classes], style: M.tagStyle}, M.attrs, {
          onClick: M.clicked,
        }),
        {
          default: I.withCtx(() => [
            M.hasDefaultSlot
              ? (I.openBlock(),
                I.createElementBlock('span', Et, [I.renderSlot(M.$slots, 'default')]))
              : M.src
              ? (I.openBlock(),
                I.createElementBlock('span', Tt, [
                  I.createElementVNode(
                    'img',
                    {
                      src: M.src,
                      alt: M.alt,
                      onError: A[0] || (A[0] = (...S) => M.onImgError && M.onImgError(...S)),
                    },
                    null,
                    40,
                    xt
                  ),
                ]))
              : M.icon
              ? (I.openBlock(),
                I.createBlock(
                  j,
                  {
                    'key': 2,
                    'icon': M.iconName,
                    'aria-hidden': 'true',
                    'alt': M.alt,
                    'variant': M.computedIconVariant,
                    'size': M.size,
                  },
                  null,
                  8,
                  ['icon', 'alt', 'variant', 'size']
                ))
              : M.text
              ? (I.openBlock(),
                I.createElementBlock(
                  'span',
                  {
                    key: 3,
                    class: I.normalizeClass(['b-avatar-text', M.textClasses]),
                    style: I.normalizeStyle(M.fontStyle),
                  },
                  I.toDisplayString(M.text),
                  7
                ))
              : (I.openBlock(),
                I.createBlock(
                  j,
                  {
                    'key': 4,
                    'icon': M.iconName,
                    'variant': M.computedIconVariant,
                    'aria-hidden': 'true',
                    'alt': M.alt,
                  },
                  null,
                  8,
                  ['icon', 'variant', 'alt']
                )),
            M.showBadge
              ? (I.openBlock(),
                I.createElementBlock(
                  'span',
                  {
                    key: 5,
                    class: I.normalizeClass(['b-avatar-badge', M.badgeClasses]),
                    style: I.normalizeStyle(M.badgeStyle),
                  },
                  [
                    M.hasBadgeSlot
                      ? I.renderSlot(M.$slots, 'badge', {key: 0})
                      : (I.openBlock(),
                        I.createElementBlock(
                          'span',
                          {key: 1, class: I.normalizeClass(M.badgeTextClasses)},
                          I.toDisplayString(M.badgeText),
                          3
                        )),
                  ],
                  6
                ))
              : I.createCommentVNode('', !0),
          ]),
          _: 3,
        },
        16,
        ['class', 'style', 'onClick']
      )
    )
  }
  var zN = c(wt, [['render', yt]])
  const Yt = (M, ...A) => Object.assign(M, ...A),
    et = (M, A) => Object.defineProperties(M, A),
    zt = (M, A, D) => Object.defineProperty(M, A, D),
    cN = (M, A) =>
      Object.keys(M)
        .filter((D) => A.indexOf(D) === -1)
        .reduce((D, g) => h(z({}, D), {[g]: M[g]}), {}),
    GM = () => ({enumerable: !0, configurable: !1, writable: !1}),
    vA = {
      active: {type: Boolean, default: !1},
      activeClass: {type: String, default: 'router-link-active'},
      append: {type: Boolean, default: !1},
      disabled: {type: Boolean, default: !1},
      event: {type: [String, Array], default: 'click'},
      exact: {type: Boolean, default: !1},
      exactActiveClass: {type: String, default: 'router-link-exact-active'},
      href: {type: String},
      rel: {type: String, default: null},
      replace: {type: Boolean, default: !1},
      routerComponentName: {type: String, default: 'router-link'},
      routerTag: {type: String, default: 'a'},
      target: {type: String, default: '_self'},
      to: {type: [String, Object], default: null},
    },
    ct = I.defineComponent({
      name: 'BLink',
      props: vA,
      emits: ['click'],
      setup(M, {emit: A, attrs: D}) {
        const g = I.getCurrentInstance(),
          N = I.ref(null),
          L = I.computed(() => {
            const t = M.routerComponentName
              .split('-')
              .map((C) => C.charAt(0).toUpperCase() + C.slice(1))
              .join('')
            return !((g == null ? void 0 : g.appContext.app.component(t)) !== void 0) ||
              M.disabled ||
              !M.to
              ? 'a'
              : M.routerComponentName
          }),
          j = I.computed(() => {
            const t = '#'
            if (M.href) return M.href
            if (typeof M.to == 'string') return M.to || t
            const i = M.to
            if (
              Object.prototype.toString.call(i) === '[object Object]' &&
              (i.path || i.query || i.hash)
            ) {
              const C = i.path || '',
                x = i.query
                  ? `?${Object.keys(i.query)
                      .map((e) => `${e}=${i.query[e]}`)
                      .join('=')}`
                  : '',
                w = !i.hash || i.hash.charAt(0) === '#' ? i.hash || '' : `#${i.hash}`
              return `${C}${x}${w}` || t
            }
            return t
          }),
          S = () => {
            M.disabled || N.value.focus()
          },
          u = () => {
            M.disabled || N.value.blur()
          },
          T = function (t) {
            if (M.disabled) {
              t.preventDefault(), t.stopImmediatePropagation()
              return
            }
            A('click', t)
          },
          E = I.computed(() => ({
            'to': M.to,
            'href': j.value,
            'target': M.target,
            'rel': M.target === '_blank' && M.rel === null ? 'noopener' : M.rel || null,
            'tabindex': M.disabled ? '-1' : typeof D.tabindex == 'undefined' ? null : D.tabindex,
            'aria-disabled': M.disabled ? 'true' : null,
          }))
        return {tag: L, routerAttr: E, link: N, focus: S, blur: u, clicked: T}
      },
    })
  function at(M, A, D, g, N, L) {
    return M.tag === 'router-link'
      ? (I.openBlock(),
        I.createBlock(
          I.resolveDynamicComponent(M.tag),
          I.mergeProps({key: 0}, M.routerAttr, {custom: ''}),
          {
            default: I.withCtx(({href: j, navigate: S, isActive: u, isExactActive: T}) => [
              (I.openBlock(),
              I.createBlock(
                I.resolveDynamicComponent(M.routerTag),
                I.mergeProps(
                  {ref: 'link', href: j, class: [u && M.activeClass, T && M.exactActiveClass]},
                  M.$attrs,
                  {onClick: S}
                ),
                {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 2},
                1040,
                ['href', 'class', 'onClick']
              )),
            ]),
            _: 3,
          },
          16
        ))
      : (I.openBlock(),
        I.createBlock(
          I.resolveDynamicComponent(M.tag),
          I.mergeProps(
            {key: 1, ref: 'link', class: {active: M.active, disabled: M.disabled}},
            M.routerAttr,
            {onClick: M.clicked}
          ),
          {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
          16,
          ['class', 'onClick']
        ))
  }
  var aN = c(ct, [['render', at]])
  const Ut = (M) => !!(M.href || M.to),
    UN = (M, A) => A + (M ? ZC(M) : ''),
    lt = (M, A, D = (g) => g) =>
      (tN(M) ? M.slice() : Object.keys(M)).reduce((g, N) => ((g[D(N)] = A[N]), g), {}),
    lN = cN(vA, ['event', 'routerTag']),
    st = I.defineComponent({
      name: 'BBadge',
      props: z(
        {
          pill: {type: Boolean, default: !1},
          tag: {type: String, default: 'span'},
          variant: {type: String, default: 'secondary'},
          textIndicator: {type: Boolean, default: !1},
          dotIndicator: {type: Boolean, default: !1},
        },
        lN
      ),
      setup(M) {
        const A = I.computed(() => Ut(M)),
          D = I.computed(() => (A.value ? 'b-link' : M.tag))
        return {
          classes: I.computed(() => ({
            [`bg-${M.variant}`]: M.variant,
            'active': M.active,
            'disabled': M.disabled,
            'text-dark': ['warning', 'info', 'light'].includes(M.variant),
            'rounded-pill': M.pill,
            'position-absolute top-0 start-100 translate-middle': M.textIndicator || M.dotIndicator,
            'p-2 border border-light rounded-circle': M.dotIndicator,
            'text-decoration-none': A,
          })),
          props: A.value ? lt(lN, M) : {},
          computedTag: D,
        }
      },
    })
  function ot(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.computedTag),
        I.mergeProps({class: ['badge', M.classes]}, M.props),
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        16,
        ['class']
      )
    )
  }
  var sN = c(st, [['render', ot]])
  const oN = Symbol(),
    ON = {
      items: I.reactive([]),
      reset() {
        this.items = I.reactive([])
      },
    }
  function Ot(M) {
    M.provide(oN, ON)
  }
  function mt() {
    const M = I.inject(oN)
    return M || ON
  }
  const dt = I.defineComponent({
    name: 'BBreadcrumbItem',
    props: h(z({}, cN(vA, ['event', 'routerTag'])), {
      active: {type: Boolean, default: !1},
      ariaCurrent: {type: String, default: 'location'},
      disabled: {type: Boolean, default: !1},
      text: {type: String, required: !1},
    }),
    emits: ['click'],
    setup(M, {emit: A}) {
      const D = I.computed(() => ({active: M.active})),
        g = I.computed(() => (M.active ? 'span' : 'b-link')),
        N = I.computed(() => ({'aria-current': M.active ? M.ariaCurrent : void 0}))
      return {
        liClasses: D,
        computedTag: g,
        computedAriaCurrent: N,
        clicked: function (j) {
          if (M.disabled || M.active) {
            j.preventDefault(), j.stopImmediatePropagation()
            return
          }
          M.disabled || A('click', j)
        },
      }
    },
  })
  function nt(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'li',
        {class: I.normalizeClass(['breadcrumb-item', M.liClasses])},
        [
          (I.openBlock(),
          I.createBlock(
            I.resolveDynamicComponent(M.computedTag),
            I.mergeProps({'aria-current': M.computedAriaCurrent}, M.$props, {onClick: M.clicked}),
            {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
            16,
            ['aria-current', 'onClick']
          )),
        ],
        2
      )
    )
  }
  var FI = c(dt, [['render', nt]])
  const bt = I.defineComponent({
      name: 'BBreadcrumb',
      components: {BBreadcrumbItem: FI},
      props: {items: {type: Array}},
      setup(M) {
        const A = mt()
        return {
          computedItems: I.computed(() => {
            const g = M.items || (A == null ? void 0 : A.items) || []
            let N = !1
            return g.map(
              (j, S) => (
                typeof j == 'string' && ((j = {text: j}), S < g.length - 1 && (j.href = '#')),
                j.active && (N = !0),
                !j.active && !N && (j.active = S + 1 === g.length),
                j
              )
            )
          }),
        }
      },
    }),
    ht = {'aria-label': 'breadcrumb'},
    Wt = {class: 'breadcrumb'}
  function kt(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-breadcrumb-item')
    return (
      I.openBlock(),
      I.createElementBlock('nav', ht, [
        I.createElementVNode('ol', Wt, [
          I.renderSlot(M.$slots, 'prepend'),
          (I.openBlock(!0),
          I.createElementBlock(
            I.Fragment,
            null,
            I.renderList(
              M.computedItems,
              (S, u) => (
                I.openBlock(),
                I.createBlock(
                  j,
                  I.mergeProps({key: u}, S),
                  {
                    default: I.withCtx(() => [I.createTextVNode(I.toDisplayString(S.text), 1)]),
                    _: 2,
                  },
                  1040
                )
              )
            ),
            128
          )),
          I.renderSlot(M.$slots, 'default'),
          I.renderSlot(M.$slots, 'append'),
        ]),
      ])
    )
  }
  var mN = c(bt, [['render', kt]])
  const Qt = I.defineComponent({
    name: 'BButton',
    props: h(z({}, vA), {
      active: {type: Boolean, default: !1},
      disabled: {type: Boolean, default: !1},
      href: {type: String, required: !1},
      pill: {type: Boolean, default: !1},
      pressed: {type: Boolean, default: null},
      rel: {type: String, default: null},
      size: {type: String},
      squared: {type: Boolean, default: !1},
      tag: {type: String, default: 'button'},
      target: {type: String, default: '_self'},
      type: {type: String, default: 'button'},
      variant: {type: String, default: 'secondary'},
    }),
    emits: ['click', 'update:pressed'],
    setup(M, {emit: A}) {
      const D = M.pressed !== null,
        g = M.tag === 'button' && !M.href && !M.to,
        N = !!(M.href || M.to),
        L = !!M.to,
        j = M.href ? !1 : !g,
        S = I.computed(() => ({
          [`btn-${M.variant}`]: M.variant,
          [`btn-${M.size}`]: M.size,
          'active': M.active || M.pressed,
          'rounded-pill': M.pill,
          'rounded-0': M.squared,
          'disabled': M.disabled,
        })),
        u = I.computed(() => ({
          'aria-disabled': j ? String(M.disabled) : null,
          'aria-pressed': D ? String(M.pressed) : null,
          'autocomplete': D ? 'off' : null,
          'disabled': g ? M.disabled : null,
          'href': M.href,
          'rel': N ? M.rel : null,
          'role': j || N ? 'button' : null,
          'target': N ? M.target : null,
          'type': g ? M.type : null,
          'to': g ? null : M.to,
          'append': N ? M.append : null,
          'activeClass': L ? M.activeClass : null,
          'event': L ? M.event : null,
          'exact': L ? M.exact : null,
          'exactActiveClass': L ? M.exactActiveClass : null,
          'replace': L ? M.replace : null,
          'routerComponentName': L ? M.routerComponentName : null,
          'routerTag': L ? M.routerTag : null,
        })),
        T = function (t) {
          if (M.disabled) {
            t.preventDefault(), t.stopPropagation()
            return
          }
          A('click', t), D && A('update:pressed', !M.pressed)
        },
        E = I.computed(() => (L ? 'b-link' : M.href ? 'a' : M.tag))
      return {classes: S, attrs: u, computedTag: E, clicked: T}
    },
  })
  function Gt(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.computedTag),
        I.mergeProps({class: ['btn', M.classes]}, M.attrs, {onClick: M.clicked}),
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        16,
        ['class', 'onClick']
      )
    )
  }
  var fA = c(Qt, [['render', Gt]])
  const rt = I.defineComponent({
    name: 'BButtonGroup',
    props: {
      ariaRole: {type: String, default: 'group'},
      size: {type: String, required: !1},
      tag: {type: String, default: 'div'},
      vertical: {type: Boolean, default: !1},
    },
    setup(M) {
      return {
        classes: I.computed(() => ({
          'btn-group': !M.vertical,
          'btn-group-vertical': M.vertical,
          [`btn-group-${M.size}`]: M.size,
        })),
      }
    },
  })
  function Jt(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {'class': I.normalizeClass(M.classes), 'role': 'group', 'aria-role': M.ariaRole},
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        8,
        ['class', 'aria-role']
      )
    )
  }
  var dN = c(rt, [['render', Jt]])
  const pt = I.defineComponent({
      name: 'BButtonToolbar',
      props: {ariaRole: {type: String, default: 'group'}, justify: {type: Boolean, default: !1}},
      setup(M) {
        return {classes: I.computed(() => ({'justify-content-between': M.justify}))}
      },
    }),
    Zt = ['aria-label']
  function Vt(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        {
          'class': I.normalizeClass([M.classes, 'btn-toolbar']),
          'role': 'toolbar',
          'aria-label': M.ariaRole,
        },
        [I.renderSlot(M.$slots, 'default')],
        10,
        Zt
      )
    )
  }
  var nN = c(pt, [['render', Vt]])
  const Bt = I.defineComponent({
      name: 'BCard',
      props: {
        align: {type: String, required: !1},
        bgVariant: {type: String, required: !1},
        bodyBgVariant: {type: String, required: !1},
        bodyClass: {type: [Array, Object, String], required: !1},
        bodyTag: {type: String, default: 'div'},
        bodyTextVariant: {type: String, required: !1},
        borderVariant: {type: String, required: !1},
        footer: {type: String, required: !1},
        footerBgVariant: {type: String, required: !1},
        footerBorderVariant: {type: String, required: !1},
        footerClass: {type: [Array, Object, String], required: !1},
        footerHtml: {type: String, default: ''},
        footerTag: {type: String, default: 'div'},
        footerTextVariant: {type: String, required: !1},
        header: {type: String, required: !1},
        headerBgVariant: {type: String, required: !1},
        headerBorderVariant: {type: String, required: !1},
        headerClass: {type: [Array, Object, String], required: !1},
        headerHtml: {type: String, default: ''},
        headerTag: {type: String, default: 'div'},
        headerTextVariant: {type: String, required: !1},
        imgAlt: {type: String, required: !1},
        imgBottom: {type: Boolean, default: !1},
        imgEnd: {type: Boolean, default: !1},
        imgHeight: {type: [String, Number], required: !1},
        imgLeft: {type: Boolean, default: !1},
        imgRight: {type: Boolean, default: !1},
        imgSrc: {type: String, required: !1},
        imgStart: {type: Boolean, default: !1},
        imgTop: {type: Boolean, default: !1},
        imgWidth: {type: [String, Number], required: !1},
        noBody: {type: Boolean, default: !1},
        overlay: {type: Boolean, default: !1},
        subTitle: {type: String, required: !1},
        subTitleTag: {type: String, default: 'h6'},
        subTitleTextVariant: {type: String, default: 'muted'},
        tag: {type: String, default: 'div'},
        textVariant: {type: String, required: !1},
        title: {type: String, required: !1},
        titleTag: {type: String, default: 'h4'},
      },
      setup(M) {
        const A = I.computed(() => ({
            [`text-${M.align}`]: M.align,
            [`text-${M.textVariant}`]: M.textVariant,
            [`bg-${M.bgVariant}`]: M.bgVariant,
            [`border-${M.borderVariant}`]: M.borderVariant,
            'flex-row': M.imgLeft || M.imgStart,
            'flex-row-reverse': M.imgEnd || M.imgRight,
          })),
          D = I.computed(() => ({
            'card-body': !M.noBody,
            'card-img-overlay': M.overlay,
            [`bg-${M.bodyBgVariant}`]: M.bodyBgVariant,
            [`text-${M.bodyTextVariant}`]: M.bodyTextVariant,
          })),
          g = I.computed(() => ({
            [`bg-${M.footerBgVariant}`]: M.footerBgVariant,
            [`border-${M.footerBorderVariant}`]: M.footerBorderVariant,
            [`text-${M.footerTextVariant}`]: M.footerTextVariant,
          })),
          N = I.computed(() => ({
            [`bg-${M.headerBgVariant}`]: M.headerBgVariant,
            [`border-${M.headerBorderVariant}`]: M.headerBorderVariant,
            [`text-${M.headerTextVariant}`]: M.headerTextVariant,
          })),
          L = I.computed(() => ({
            'card-img':
              !M.imgEnd && !M.imgRight && !M.imgStart && !M.imgLeft && !M.imgTop && !M.imgTop,
            'card-img-right': M.imgEnd || M.imgRight,
            'card-img-left': M.imgStart || M.imgLeft,
            'card-img-top': M.imgTop,
            'card-img-bottom': M.imgBottom,
          })),
          j = I.computed(() => ({
            src: M.imgSrc,
            alt: M.imgAlt,
            height: M.imgHeight,
            width: M.imgWidth,
          })),
          S = I.computed(() => ({[`text-${M.subTitleTextVariant}`]: M.subTitleTextVariant}))
        return {
          classes: A,
          bodyClasses: D,
          footerClasses: g,
          headerClasses: N,
          imgClasses: L,
          imgAttr: j,
          subTitleClasses: S,
        }
      },
    }),
    Pt = ['innerHTML'],
    Xt = ['innerHTML']
  function Ft(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {class: I.normalizeClass(['card', M.classes])},
        {
          default: I.withCtx(() => [
            M.imgSrc && !M.imgBottom
              ? (I.openBlock(),
                I.createElementBlock(
                  'img',
                  I.mergeProps({key: 0}, M.imgAttr, {class: M.imgClasses}),
                  null,
                  16
                ))
              : I.createCommentVNode('', !0),
            M.header || M.$slots.header || M.headerHtml
              ? (I.openBlock(),
                I.createBlock(
                  I.resolveDynamicComponent(M.headerTag),
                  {
                    key: 1,
                    class: I.normalizeClass(['card-header', [M.headerClass, M.headerClasses]]),
                  },
                  {
                    default: I.withCtx(() => [
                      M.headerHtml
                        ? (I.openBlock(),
                          I.createElementBlock(
                            'div',
                            {key: 0, innerHTML: M.headerHtml},
                            null,
                            8,
                            Pt
                          ))
                        : I.renderSlot(M.$slots, 'header', {key: 1}, () => [
                            I.createTextVNode(I.toDisplayString(M.header), 1),
                          ]),
                    ]),
                    _: 3,
                  },
                  8,
                  ['class']
                ))
              : I.createCommentVNode('', !0),
            M.noBody
              ? I.createCommentVNode('', !0)
              : (I.openBlock(),
                I.createBlock(
                  I.resolveDynamicComponent(M.bodyTag),
                  {key: 2, class: I.normalizeClass([M.bodyClass, M.bodyClasses])},
                  {
                    default: I.withCtx(() => [
                      M.title && !M.noBody
                        ? (I.openBlock(),
                          I.createBlock(
                            I.resolveDynamicComponent(M.titleTag),
                            {key: 0, class: 'card-title'},
                            {
                              default: I.withCtx(() => [
                                I.createTextVNode(I.toDisplayString(M.title), 1),
                              ]),
                              _: 1,
                            }
                          ))
                        : I.createCommentVNode('', !0),
                      M.subTitle && !M.noBody
                        ? (I.openBlock(),
                          I.createBlock(
                            I.resolveDynamicComponent(M.subTitleTag),
                            {
                              key: 1,
                              class: I.normalizeClass(['card-subtitle mb-2', M.subTitleClasses]),
                            },
                            {
                              default: I.withCtx(() => [
                                I.createTextVNode(I.toDisplayString(M.subTitle), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['class']
                          ))
                        : I.createCommentVNode('', !0),
                      I.renderSlot(M.$slots, 'default'),
                    ]),
                    _: 3,
                  },
                  8,
                  ['class']
                )),
            M.noBody ? I.renderSlot(M.$slots, 'default', {key: 3}) : I.createCommentVNode('', !0),
            M.footer || M.$slots.footer || M.footerHtml
              ? (I.openBlock(),
                I.createBlock(
                  I.resolveDynamicComponent(M.footerTag),
                  {
                    key: 4,
                    class: I.normalizeClass(['card-footer', [M.footerClass, M.footerClasses]]),
                  },
                  {
                    default: I.withCtx(() => [
                      M.footerHtml
                        ? (I.openBlock(),
                          I.createElementBlock(
                            'div',
                            {key: 0, innerHTML: M.footerHtml},
                            null,
                            8,
                            Xt
                          ))
                        : I.renderSlot(M.$slots, 'footer', {key: 1}, () => [
                            I.createTextVNode(I.toDisplayString(M.footer), 1),
                          ]),
                    ]),
                    _: 3,
                  },
                  8,
                  ['class']
                ))
              : I.createCommentVNode('', !0),
            M.imgSrc && M.imgBottom
              ? (I.openBlock(),
                I.createElementBlock(
                  'img',
                  I.mergeProps({key: 5}, M.imgAttr, {class: M.imgClasses}),
                  null,
                  16
                ))
              : I.createCommentVNode('', !0),
          ]),
          _: 3,
        },
        8,
        ['class']
      )
    )
  }
  var bN = c(Bt, [['render', Ft]])
  const vt = I.defineComponent({
    name: 'BCardBody',
    props: {
      bodyBgVariant: {type: String, required: !1},
      bodyClass: {type: [Array, Object, String], required: !1},
      bodyTag: {type: String, default: 'div'},
      bodyTextVariant: {type: String, required: !1},
      overlay: {type: Boolean, default: !1},
      subTitle: {type: String, required: !1},
      subTitleTag: {type: String, default: 'h4'},
      subTitleTextVariant: {type: String, required: !1},
      title: {type: String, required: !1},
      titleTag: {type: String, default: 'h4'},
    },
    setup(M) {
      return {
        classes: I.computed(() => ({
          [`text-${M.bodyTextVariant}`]: M.bodyTextVariant,
          [`bg-${M.bodyBgVariant}`]: M.bodyBgVariant,
        })),
      }
    },
  })
  function ft(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-card-title'),
      S = I.resolveComponent('b-card-sub-title')
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.bodyTag),
        {class: I.normalizeClass(['card-body', M.classes])},
        {
          default: I.withCtx(() => [
            M.title
              ? (I.openBlock(),
                I.createBlock(j, {'key': 0, 'title-tag': M.titleTag, 'title': M.title}, null, 8, [
                  'title-tag',
                  'title',
                ]))
              : I.createCommentVNode('', !0),
            M.subTitle
              ? (I.openBlock(),
                I.createBlock(
                  S,
                  {
                    'key': 1,
                    'sub-title-tag': M.subTitleTag,
                    'sub-title': M.subTitle,
                    'sub-title-text-variant': M.subTitleTextVariant,
                  },
                  null,
                  8,
                  ['sub-title-tag', 'sub-title', 'sub-title-text-variant']
                ))
              : I.createCommentVNode('', !0),
            I.renderSlot(M.$slots, 'default'),
          ]),
          _: 3,
        },
        8,
        ['class']
      )
    )
  }
  var hN = c(vt, [['render', ft]])
  const Ht = I.defineComponent({
      name: 'BCardfooter',
      props: {
        footer: {type: String},
        footerBgVariant: {type: String, required: !1},
        footerBorderVariant: {type: String, required: !1},
        footerClass: {type: [Array, Object, String], required: !1},
        footerHtml: {type: String, required: !1},
        footerTag: {type: String, default: 'div'},
        footerTextVariant: {type: String, required: !1},
      },
      setup(M) {
        return {
          classes: I.computed(() => ({
            [`text-${M.footerTextVariant}`]: M.footerTextVariant,
            [`bg-${M.footerBgVariant}`]: M.footerBgVariant,
            [`border-${M.footerBorderVariant}`]: M.footerBorderVariant,
          })),
        }
      },
    }),
    Rt = ['innerHTML']
  function _t(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.footerTag),
        {class: I.normalizeClass(['card-footer', [M.footerClass, M.classes]])},
        {
          default: I.withCtx(() => [
            M.footerHtml
              ? (I.openBlock(),
                I.createElementBlock('div', {key: 0, innerHTML: M.footerHtml}, null, 8, Rt))
              : I.renderSlot(M.$slots, 'default', {key: 1}, () => [
                  I.createTextVNode(I.toDisplayString(M.footer), 1),
                ]),
          ]),
          _: 3,
        },
        8,
        ['class']
      )
    )
  }
  var WN = c(Ht, [['render', _t]])
  const $t = I.defineComponent({
    name: 'BCardGroup',
    props: {
      columns: {type: Boolean, default: !1},
      deck: {type: Boolean, default: !1},
      tag: {type: String, default: 'div'},
    },
    setup(M) {
      return {
        classes: I.computed(() =>
          M.deck ? 'card-deck' : M.columns ? 'card-columns' : 'card-group'
        ),
      }
    },
  })
  function qt(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {class: I.normalizeClass(M.classes)},
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        8,
        ['class']
      )
    )
  }
  var kN = c($t, [['render', qt]])
  const Kt = I.defineComponent({
      name: 'BCardHeader',
      props: {
        header: {type: String, required: !1},
        headerBgVariant: {type: String, required: !1},
        headerBorderVariant: {type: String, required: !1},
        headerClass: {type: [Array, Object, String], required: !1},
        headerHtml: {type: String, required: !1},
        headerTag: {type: String, default: 'div'},
        headerTextVariant: {type: String, required: !1},
      },
      setup(M) {
        return {
          classes: I.computed(() => ({
            [`text-${M.headerTextVariant}`]: M.headerTextVariant,
            [`bg-${M.headerBgVariant}`]: M.headerBgVariant,
            [`border-${M.headerBorderVariant}`]: M.headerBorderVariant,
          })),
        }
      },
    }),
    Mi = ['innerHTML']
  function Ai(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.headerTag),
        {class: I.normalizeClass(['card-header', [M.headerClass, M.classes]])},
        {
          default: I.withCtx(() => [
            M.headerHtml
              ? (I.openBlock(),
                I.createElementBlock('div', {key: 0, innerHTML: M.headerHtml}, null, 8, Mi))
              : I.renderSlot(M.$slots, 'default', {key: 1}, () => [
                  I.createTextVNode(I.toDisplayString(M.header), 1),
                ]),
          ]),
          _: 3,
        },
        8,
        ['class']
      )
    )
  }
  var QN = c(Kt, [['render', Ai]])
  const Ii = I.defineComponent({
    name: 'BCardImage',
    props: {
      alt: {type: String, default: null},
      bottom: {type: Boolean, default: !1},
      end: {type: Boolean, default: !1},
      height: {type: [Number, String], required: !1},
      left: {type: Boolean, default: !1},
      right: {type: Boolean, default: !1},
      src: {type: String, required: !1},
      start: {type: Boolean, default: !1},
      top: {type: Boolean, default: !1},
      width: {type: [Number, String], required: !1},
    },
    setup(M) {
      const A = I.computed(() => ({
          src: M.src,
          alt: M.alt,
          width: (typeof M.width == 'number' ? M.width : parseInt(M.width, 10)) || void 0,
          height: (typeof M.height == 'number' ? M.height : parseInt(M.height, 10)) || void 0,
        })),
        D = I.computed(() => {
          const g = M.left ? 'float-left' : M.right ? 'float-right' : ''
          let N = 'card-img'
          return (
            M.top
              ? (N += '-top')
              : M.right || M.end
              ? (N += '-right')
              : M.bottom
              ? (N += '-bottom')
              : (M.left || M.start) && (N += '-left'),
            {[g]: !!g, [N]: !0}
          )
        })
      return {attrs: A, classes: D}
    },
  })
  function Di(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock('img', I.mergeProps({class: M.classes}, M.attrs), null, 16)
    )
  }
  var GN = c(Ii, [['render', Di]])
  const gi = I.defineComponent({
    name: 'BCardSubTitle',
    props: {
      subTitle: {type: String},
      subTitleTag: {type: String, default: 'h6'},
      subTitleTextVariant: {type: String, default: 'muted'},
    },
    setup(M) {
      return {
        classes: I.computed(() => ({[`text-${M.subTitleTextVariant}`]: M.subTitleTextVariant})),
      }
    },
  })
  function Ni(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.subTitleTag),
        {class: I.normalizeClass(['card-subtitle mb-2', M.classes])},
        {
          default: I.withCtx(() => [
            I.renderSlot(M.$slots, 'default', {}, () => [
              I.createTextVNode(I.toDisplayString(M.subTitle), 1),
            ]),
          ]),
          _: 3,
        },
        8,
        ['class']
      )
    )
  }
  var rN = c(gi, [['render', Ni]])
  const Li = {},
    ji = {class: 'card-text'}
  function Si(M, A) {
    return I.openBlock(), I.createElementBlock('p', ji, [I.renderSlot(M.$slots, 'default')])
  }
  var JN = c(Li, [['render', Si]])
  const ui = I.defineComponent({
    name: 'BCardTitle',
    props: {title: {type: String}, titleTag: {type: String, default: 'h4'}},
  })
  function Ci(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.titleTag),
        {class: 'card-title'},
        {
          default: I.withCtx(() => [
            I.renderSlot(M.$slots, 'default', {}, () => [
              I.createTextVNode(I.toDisplayString(M.title), 1),
            ]),
          ]),
          _: 3,
        }
      )
    )
  }
  var pN = c(ui, [['render', Ci]])
  const ZN = Symbol(),
    ti = I.defineComponent({
      name: 'BCarousel',
      props: {
        background: {type: String, required: !1},
        modelValue: {type: Number, default: 0},
        controls: {type: Boolean, default: !1},
        id: {type: String},
        imgHeight: {type: String},
        imgWidth: {type: String},
        indicators: {type: Boolean, default: !1},
        interval: {type: Number, default: 5e3},
        noTouch: {type: Boolean, default: !1},
        noWrap: {type: Boolean, default: !1},
      },
      emits: ['sliding-start', 'sliding-end'],
      setup(M, {slots: A, emit: D}) {
        const g = I.ref(),
          N = I.ref(),
          L = P(M.id, 'accordion'),
          j = I.ref([])
        return (
          Q(g, 'slide.bs.carousel', (S) => D('sliding-start', S)),
          Q(g, 'slid.bs.carousel', (S) => D('sliding-end', S)),
          I.onMounted(() => {
            ;(N.value = new jM(g.value, {
              wrap: !M.noTouch,
              interval: M.interval,
              touch: !M.noTouch,
            })),
              A.default &&
                (j.value = A.default().filter((S) => {
                  var u
                  return ((u = S.type) == null ? void 0 : u.name) === 'BCarouselSlide'
                }))
          }),
          I.provide(ZN, {background: M.background, width: M.imgWidth, height: M.imgHeight}),
          {element: g, computedId: L, slides: j}
        )
      },
    }),
    ii = ['id'],
    wi = {key: 0, class: 'carousel-indicators'},
    Ei = ['data-bs-target', 'data-bs-slide-to', 'aria-label'],
    Ti = {class: 'carousel-inner'},
    xi = ['data-bs-target'],
    yi = [
      I.createElementVNode(
        'span',
        {'class': 'carousel-control-prev-icon', 'aria-hidden': 'true'},
        null,
        -1
      ),
      I.createElementVNode('span', {class: 'visually-hidden'}, 'Previous', -1),
    ],
    Yi = ['data-bs-target'],
    ei = [
      I.createElementVNode(
        'span',
        {'class': 'carousel-control-next-icon', 'aria-hidden': 'true'},
        null,
        -1
      ),
      I.createElementVNode('span', {class: 'visually-hidden'}, 'Next', -1),
    ]
  function zi(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        {
          'id': M.computedId,
          'ref': 'element',
          'class': 'carousel slide',
          'data-bs-ride': 'carousel',
        },
        [
          M.indicators
            ? (I.openBlock(),
              I.createElementBlock('div', wi, [
                (I.openBlock(!0),
                I.createElementBlock(
                  I.Fragment,
                  null,
                  I.renderList(
                    M.slides,
                    (j, S) => (
                      I.openBlock(),
                      I.createElementBlock(
                        'button',
                        {
                          'key': S,
                          'type': 'button',
                          'data-bs-target': `#${M.computedId}`,
                          'data-bs-slide-to': S,
                          'class': I.normalizeClass(S === 0 ? 'active' : ''),
                          'aria-current': 'true',
                          'aria-label': `Slide ${S}`,
                        },
                        null,
                        10,
                        Ei
                      )
                    )
                  ),
                  128
                )),
              ]))
            : I.createCommentVNode('', !0),
          I.createElementVNode('div', Ti, [I.renderSlot(M.$slots, 'default')]),
          M.controls
            ? (I.openBlock(),
              I.createElementBlock(
                I.Fragment,
                {key: 1},
                [
                  I.createElementVNode(
                    'button',
                    {
                      'class': 'carousel-control-prev',
                      'type': 'button',
                      'data-bs-target': `#${M.computedId}`,
                      'data-bs-slide': 'prev',
                    },
                    yi,
                    8,
                    xi
                  ),
                  I.createElementVNode(
                    'button',
                    {
                      'class': 'carousel-control-next',
                      'type': 'button',
                      'data-bs-target': `#${M.computedId}`,
                      'data-bs-slide': 'next',
                    },
                    ei,
                    8,
                    Yi
                  ),
                ],
                64
              ))
            : I.createCommentVNode('', !0),
        ],
        8,
        ii
      )
    )
  }
  var VN = c(ti, [['render', zi]])
  const ci = I.defineComponent({
      name: 'BCarouselSlide',
      props: {
        active: {type: Boolean, default: !1},
        background: {type: String, required: !1},
        caption: {type: String, required: !1},
        captionHtml: {type: String, required: !1},
        captionTag: {type: String, default: 'h3'},
        contentTag: {type: String, default: 'div'},
        contentVisibleUp: {type: String, required: !1},
        id: {type: String, required: !1},
        imgAlt: {type: String, required: !1},
        imgBlank: {type: Boolean, default: !1},
        imgBlankColor: {type: String, default: 'transparent'},
        imgHeight: {type: String},
        imgSrc: {type: String},
        imgWidth: {type: String},
        interval: {type: [String, Number]},
        text: {type: String, required: !1},
        textHtml: {type: String, required: !1},
        textTag: {type: String, default: 'p'},
      },
      setup(M) {
        const A = I.inject(ZN, {}),
          D = P(M.id, 'accordion'),
          g = I.computed(() => (M.imgBlank ? M.imgBlank : M.imgSrc)),
          N = I.computed(() => ({
            background: `${
              M.background || A.background || 'rgb(171, 171, 171)'
            } none repeat scroll 0% 0%`,
          })),
          L = I.computed(() => ({
            'd-none': M.contentVisibleUp,
            [`d-${M.contentVisibleUp}-block`]: M.contentVisibleUp,
          })),
          j = I.computed(() => M.text && !M.textHtml),
          S = I.computed(() => M.textHtml),
          u = I.computed(() => M.caption && !M.captionHtml),
          T = I.computed(() => M.captionHtml)
        return {
          computedAttr: N,
          computedContentClasses: L,
          computedId: D,
          height: A.height,
          img: g,
          showCaption: u,
          showCaptionAsHtml: T,
          showText: j,
          showTextAsHtml: S,
          width: A.width,
        }
      },
    }),
    ai = ['id', 'data-bs-interval'],
    Ui = {key: 0},
    li = ['innerHTML'],
    si = {key: 0},
    oi = ['innerHTML']
  function Oi(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-img')
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        {
          'id': M.computedId,
          'class': I.normalizeClass(['carousel-item', {active: M.active}]),
          'data-bs-interval': M.interval,
          'style': I.normalizeStyle(M.computedAttr),
        },
        [
          I.renderSlot(M.$slots, 'img', {}, () => [
            I.createVNode(
              j,
              {
                'class': 'd-block w-100',
                'alt': M.imgAlt,
                'src': M.imgSrc,
                'width': M.imgWidth || M.width,
                'height': M.imgHeight || M.height,
                'blank': M.imgBlank,
                'blank-color': M.imgBlankColor,
              },
              null,
              8,
              ['alt', 'src', 'width', 'height', 'blank', 'blank-color']
            ),
          ]),
          M.caption || M.captionHtml || M.text || M.textHtml || M.$slots.default
            ? (I.openBlock(),
              I.createBlock(
                I.resolveDynamicComponent(M.contentTag),
                {key: 0, class: I.normalizeClass(['carousel-caption', M.computedContentClasses])},
                {
                  default: I.withCtx(() => [
                    M.caption || M.captionHtml
                      ? (I.openBlock(),
                        I.createBlock(
                          I.resolveDynamicComponent(M.captionTag),
                          {key: 0},
                          {
                            default: I.withCtx(() => [
                              M.showCaption
                                ? (I.openBlock(),
                                  I.createElementBlock('span', Ui, I.toDisplayString(M.caption), 1))
                                : I.createCommentVNode('', !0),
                              M.showCaptionAsHtml
                                ? (I.openBlock(),
                                  I.createElementBlock(
                                    'span',
                                    {key: 1, innerHTML: M.captionHtml},
                                    null,
                                    8,
                                    li
                                  ))
                                : I.createCommentVNode('', !0),
                            ]),
                            _: 1,
                          }
                        ))
                      : I.createCommentVNode('', !0),
                    M.text || M.textHtml
                      ? (I.openBlock(),
                        I.createBlock(
                          I.resolveDynamicComponent(M.textTag),
                          {key: 1},
                          {
                            default: I.withCtx(() => [
                              M.showText
                                ? (I.openBlock(),
                                  I.createElementBlock('span', si, I.toDisplayString(M.text), 1))
                                : I.createCommentVNode('', !0),
                              M.showTextAsHtml
                                ? (I.openBlock(),
                                  I.createElementBlock(
                                    'span',
                                    {key: 1, innerHTML: M.textHtml},
                                    null,
                                    8,
                                    oi
                                  ))
                                : I.createCommentVNode('', !0),
                            ]),
                            _: 1,
                          }
                        ))
                      : I.createCommentVNode('', !0),
                    I.renderSlot(M.$slots, 'default'),
                  ]),
                  _: 3,
                },
                8,
                ['class']
              ))
            : I.createCommentVNode('', !0),
        ],
        14,
        ai
      )
    )
  }
  var BN = c(ci, [['render', Oi]])
  const mi = I.defineComponent({
      name: 'BCloseButton',
      props: {disabled: {type: Boolean, default: !1}, white: {type: Boolean, default: !1}},
      setup(M) {
        return {classes: I.computed(() => ({'btn-close-white': M.white}))}
      },
    }),
    di = ['disabled']
  function ni(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'button',
        {
          'type': 'button',
          'class': I.normalizeClass(['btn-close', M.classes]),
          'disabled': M.disabled,
          'aria-label': 'Close',
        },
        null,
        10,
        di
      )
    )
  }
  var PN = c(mi, [['render', ni]]),
    HA = (M, A, D) =>
      A.concat(['sm', 'md', 'lg', 'xl', 'xxl']).reduce(
        (g, N) => ((g[M ? `${M}${N.charAt(0).toUpperCase() + N.slice(1)}` : N] = D), g),
        Object.create(null)
      ),
    XN = (M, A, D, g = D) =>
      Object.keys(A).reduce(
        (N, L) => (
          M[L] &&
            N.push(
              [g, L.replace(D, ''), M[L]]
                .filter((j) => j)
                .join('-')
                .toLowerCase()
            ),
          N
        ),
        []
      )
  const FN = HA('', [], {type: [Boolean, String, Number], default: !1}),
    vN = HA('offset', [''], {type: [String, Number], default: null}),
    fN = HA('order', [''], {type: [String, Number], default: null}),
    bi = I.defineComponent({
      name: 'BCol',
      props: h(
        z(
          h(
            z(
              h(
                z(
                  {
                    col: {type: Boolean, default: !1},
                    cols: {type: [String, Number], default: null},
                  },
                  FN
                ),
                {offset: {type: [String, Number], default: null}}
              ),
              vN
            ),
            {order: {type: [String, Number], default: null}}
          ),
          fN
        ),
        {alignSelf: {type: String, default: null}, tag: {type: String, default: 'div'}}
      ),
      setup(M) {
        let A = []
        return (
          [
            {content: FN, propPrefix: 'cols', classPrefix: 'col'},
            {content: vN, propPrefix: 'offset'},
            {content: fN, propPrefix: 'order'},
          ].forEach((N) => {
            A = A.concat(XN(M, N.content, N.propPrefix, N.classPrefix))
          }),
          {
            classes: I.computed(() => ({
              col: M.col || !A.some((N) => /^col-/.test(N) && !M.cols),
              [`col-${M.cols}`]: !!M.cols,
              [`offset-${M.offset}`]: !!M.offset,
              [`order-${M.order}`]: !!M.order,
              [`align-self-${M.alignSelf}`]: !!M.alignSelf,
            })),
            classList: A,
          }
        )
      },
    })
  function hi(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {class: I.normalizeClass([M.classes, M.classList])},
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        8,
        ['class']
      )
    )
  }
  var MA = c(bi, [['render', hi]])
  const Wi = I.defineComponent({
    name: 'BContainer',
    props: {fluid: {type: [Boolean, String], default: !1}},
    setup(M) {
      return {
        classes: I.computed(() => ({
          container: !M.fluid,
          ['container-fluid']: typeof M.fluid == 'boolean' && M.fluid,
          [`container-${M.fluid}`]: typeof M.fluid == 'string',
        })),
      }
    },
  })
  function ki(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        {class: I.normalizeClass(M.classes)},
        [I.renderSlot(M.$slots, 'default')],
        2
      )
    )
  }
  var HN = c(Wi, [['render', ki]])
  function vI(M) {
    return M && typeof M == 'object' && M.constructor === Object
  }
  function fI(M, A, D = !0) {
    const g =
      M instanceof Date && typeof M.getMonth == 'function' ? new Date(M) : Object.assign({}, M)
    return (
      vI(M) &&
        vI(A) &&
        Object.keys(A).forEach((N) => {
          vI(A[N])
            ? N in M
              ? (g[N] = fI(M[N], A[N], D))
              : Object.assign(g, {[N]: A[N]})
            : Array.isArray(A[N]) && Array.isArray(M[N])
            ? Object.assign(g, {[N]: D ? M[N].concat(A[N].filter((L) => !M[N].includes(L))) : A[N]})
            : Object.assign(g, {[N]: A[N]})
        }),
      g
    )
  }
  const Qi = I.defineComponent({
      name: 'BDropdown',
      components: {BButton: fA},
      props: {
        autoClose: {type: [Boolean, String], default: !0},
        block: {type: Boolean, default: !1},
        boundary: {type: [kC, String], default: 'clippingParents'},
        dark: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: !1},
        dropup: {type: Boolean, default: !1},
        dropright: {type: Boolean, default: !1},
        dropleft: {type: Boolean, default: !1},
        id: {type: String},
        menuClass: {type: [Array, Object, String]},
        noFlip: {type: Boolean, default: !1},
        offset: {type: [Number, String], default: 0},
        popperOpts: {type: Object, default: () => ({})},
        right: {type: Boolean, default: !1},
        role: {type: String, default: 'menu'},
        size: {type: String},
        split: {type: Boolean, default: !1},
        splitButtonType: {type: String, default: 'button'},
        splitClass: {type: [Array, Object, String]},
        splitHref: {type: String, default: null},
        noCaret: {type: Boolean, default: !1},
        splitVariant: {type: String},
        text: {type: String},
        toggleClass: {type: [Array, Object, String]},
        toggleText: {type: String, default: 'Toggle dropdown'},
        variant: {type: String, default: 'secondary'},
      },
      emits: ['show', 'shown', 'hide', 'hidden'],
      setup(M, {emit: A}) {
        const D = I.ref(),
          g = I.ref(),
          N = I.ref(),
          L = P(M.id, 'dropdown')
        Q(D, 'show.bs.dropdown', () => A('show')),
          Q(D, 'shown.bs.dropdown', () => A('shown')),
          Q(D, 'hide.bs.dropdown', () => A('hide')),
          Q(D, 'hidden.bs.dropdown', () => A('hidden'))
        const j = I.computed(() => ({'d-grid': M.block, 'd-flex': M.block && M.split})),
          S = I.computed(() => ({
            'dropdown-toggle': !M.split,
            'dropdown-toggle-no-caret': M.noCaret && !M.split,
            'w-100': M.split && M.block,
          })),
          u = I.computed(() => ({'dropdown-menu-dark': M.dark})),
          T = I.computed(() => ({
            'data-bs-toggle': M.split ? null : 'dropdown',
            'aria-expanded': M.split ? null : !1,
            'ref': M.split ? null : g,
            'href': M.split ? M.splitHref : null,
          })),
          E = I.computed(() => ({ref: M.split ? g : null})),
          t = () => {
            var i
            ;(i = N.value) == null || i.hide()
          }
        return (
          I.onMounted(() => {
            var i
            N.value = new _((i = g.value) == null ? void 0 : i.$el, {
              autoClose: M.autoClose,
              boundary: M.boundary,
              offset: M.offset.toString(),
              reference: M.offset || M.split ? 'parent' : 'toggle',
              popperConfig: (C) => {
                const x = {
                  placement: 'bottom-start',
                  modifiers: M.noFlip ? [{name: 'flip', options: {fallbackPlacements: []}}] : [],
                }
                return (
                  M.dropup
                    ? (x.placement = M.right ? 'top-end' : 'top-start')
                    : M.dropright
                    ? (x.placement = 'right-start')
                    : M.dropleft
                    ? (x.placement = 'left-start')
                    : M.right && (x.placement = 'bottom-end'),
                  fI(C, fI(x, M.popperOpts))
                )
              },
            })
          }),
          {
            parent: D,
            computedId: L,
            classes: j,
            buttonClasses: S,
            buttonAttr: T,
            splitAttr: E,
            dropdownMenuClasses: u,
            dropdown: g,
            hide: t,
          }
        )
      },
    }),
    Gi = {class: 'visually-hidden'},
    ri = ['aria-labelledby', 'role']
  function Ji(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-button')
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        {ref: 'parent', class: I.normalizeClass([M.classes, 'btn-group'])},
        [
          I.createVNode(
            j,
            I.mergeProps(
              {
                id: M.computedId,
                variant: M.splitVariant || M.variant,
                size: M.size,
                class: [M.buttonClasses, M.split ? M.splitClass : M.toggleClass],
                disabled: M.disabled,
                type: M.splitButtonType,
              },
              M.buttonAttr
            ),
            {
              default: I.withCtx(() => [
                I.createTextVNode(I.toDisplayString(M.text) + ' ', 1),
                I.renderSlot(M.$slots, 'button-content'),
              ]),
              _: 3,
            },
            16,
            ['id', 'variant', 'size', 'class', 'disabled', 'type']
          ),
          M.split
            ? (I.openBlock(),
              I.createBlock(
                j,
                I.mergeProps(
                  {key: 0, variant: M.variant, size: M.size, disabled: M.disabled},
                  M.splitAttr,
                  {
                    'class': [M.toggleClass, 'dropdown-toggle-split dropdown-toggle'],
                    'data-bs-toggle': 'dropdown',
                    'aria-expanded': 'false',
                  }
                ),
                {
                  default: I.withCtx(() => [
                    I.createElementVNode('span', Gi, I.toDisplayString(M.toggleText), 1),
                  ]),
                  _: 1,
                },
                16,
                ['variant', 'size', 'disabled', 'class']
              ))
            : I.createCommentVNode('', !0),
          I.createElementVNode(
            'ul',
            {
              'class': I.normalizeClass(['dropdown-menu', [M.menuClass, M.dropdownMenuClasses]]),
              'aria-labelledby': M.computedId,
              'role': M.role,
            },
            [I.renderSlot(M.$slots, 'default')],
            10,
            ri
          ),
        ],
        2
      )
    )
  }
  var RN = c(Qi, [['render', Ji]])
  const pi = I.defineComponent({
      name: 'BDropdownDivider',
      props: {tag: {type: String, default: 'hr'}},
    }),
    Zi = {role: 'presentation'}
  function Vi(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock('li', Zi, [
        (I.openBlock(),
        I.createBlock(I.resolveDynamicComponent(M.tag), {
          'class': 'dropdown-divider',
          'role': 'separator',
          'aria-orientation': 'horizontal',
        })),
      ])
    )
  }
  var _N = c(pi, [['render', Vi]])
  const Bi = I.defineComponent({name: 'BDropdownForm'}),
    Pi = {role: 'presentation'},
    Xi = {class: 'px-4 py-3'}
  function Fi(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock('li', Pi, [
        I.createElementVNode('form', Xi, [I.renderSlot(M.$slots, 'default')]),
      ])
    )
  }
  var $N = c(Bi, [['render', Fi]])
  const vi = I.defineComponent({
      name: 'BDropdownGroup',
      inheritAttrs: !1,
      props: {
        ariaDescribedby: {type: String},
        header: {type: String},
        headerClasses: {type: [String, Array, Object], default: null},
        headerTag: {type: String, default: 'header'},
        headerVariant: {type: String, default: null},
        id: {type: String},
      },
      setup(M) {
        const A = I.computed(() => (M.id ? [M.id, 'group_dd_header'].join('_') : null)),
          D = I.computed(() => (M.headerTag === 'header' ? null : 'heading'))
        return {
          classes: I.computed(() => ({[`text-${M.headerVariant}`]: M.headerVariant})),
          headerId: A,
          headerRole: D,
        }
      },
    }),
    fi = {role: 'presentation'},
    Hi = ['id', 'aria-describedby']
  function Ri(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock('li', fi, [
        (I.openBlock(),
        I.createBlock(
          I.resolveDynamicComponent(M.headerTag),
          {
            id: M.headerId,
            class: I.normalizeClass(['dropdown-header', [M.classes, M.headerClasses]]),
            role: M.headerRole,
          },
          {
            default: I.withCtx(() => [
              I.renderSlot(M.$slots, 'header', {}, () => [
                I.createTextVNode(I.toDisplayString(M.header), 1),
              ]),
            ]),
            _: 3,
          },
          8,
          ['id', 'class', 'role']
        )),
        I.createElementVNode(
          'ul',
          I.mergeProps({id: M.id, role: 'group', class: 'list-unstyled'}, M.$attrs, {
            'aria-describedby': M.ariaDescribedby || M.headerId,
          }),
          [I.renderSlot(M.$slots, 'default')],
          16,
          Hi
        ),
      ])
    )
  }
  var qN = c(vi, [['render', Ri]])
  const _i = {},
    $i = {class: 'dropdown-header'}
  function qi(M, A) {
    return (
      I.openBlock(),
      I.createElementBlock('li', null, [
        I.createElementVNode('h6', $i, [I.renderSlot(M.$slots, 'default')]),
      ])
    )
  }
  var KN = c(_i, [['render', qi]])
  const Ki = I.defineComponent({
      name: 'BDropdownItem',
      inheritAttrs: !1,
      props: {
        active: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: !1},
        href: {type: String},
        linkClass: {type: [Array, Object, String]},
        rel: {type: String, default: null},
        target: {type: String, default: '_self'},
        variant: {type: String, default: null},
      },
      emits: ['click'],
      setup(M) {
        const A = I.computed(() => ({
            active: M.active,
            disabled: M.disabled,
            [`text-${M.variant}`]: M.variant,
          })),
          D = I.computed(() => (M.href ? 'a' : 'button')),
          g = I.computed(() => ({
            'aria-current': M.active ? 'true' : null,
            'href': D.value === 'a' ? M.href : null,
            'rel': M.rel,
            'type': D.value === 'button' ? 'button' : null,
            'target': M.target,
          }))
        return {classes: A, tag: D, attrs: g}
      },
    }),
    Mw = {role: 'presentation'}
  function Aw(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock('li', Mw, [
        (I.openBlock(),
        I.createBlock(
          I.resolveDynamicComponent(M.tag),
          I.mergeProps({class: ['dropdown-item', [M.classes, M.linkClass]]}, M.attrs, {
            onClick: A[0] || (A[0] = (j) => M.$emit('click', j)),
          }),
          {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
          16,
          ['class']
        )),
      ])
    )
  }
  var ML = c(Ki, [['render', Aw]])
  const Iw = I.defineComponent({
      name: 'BDropdownItemButton',
      inheritAttrs: !1,
      props: {
        active: {type: Boolean, default: !1},
        activeClass: {type: String, default: 'active'},
        buttonClass: {type: [String, Array, Object]},
        disabled: {type: Boolean, default: !1},
        variant: {type: String, default: null},
      },
      emits: ['click'],
      setup(M) {
        const A = I.computed(() => ({
            [M.activeClass]: M.active,
            disabled: M.disabled,
            [`text-${M.variant}`]: M.variant,
          })),
          D = I.computed(() => ({role: 'menuitem', type: 'button', disabled: M.disabled}))
        return {classes: A, attrs: D}
      },
    }),
    Dw = {role: 'presentation'}
  function gw(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock('li', Dw, [
        I.createElementVNode(
          'button',
          I.mergeProps({class: ['dropdown-item', [M.classes, M.buttonClass]]}, M.attrs, {
            onClick: A[0] || (A[0] = (j) => M.$emit('click', j)),
          }),
          [I.renderSlot(M.$slots, 'default')],
          16
        ),
      ])
    )
  }
  var AL = c(Iw, [['render', gw]])
  const Nw = I.defineComponent({name: 'BDropdownText'}),
    Lw = {role: 'presentation'},
    jw = {class: 'px-4 py-1 mb-0 text-muted'}
  function Sw(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock('li', Lw, [
        I.createElementVNode('p', jw, [I.renderSlot(M.$slots, 'default')]),
      ])
    )
  }
  var IL = c(Nw, [['render', Sw]])
  const uw = I.defineComponent({
      name: 'BForm',
      props: {
        id: {type: String, required: !1},
        floating: {type: Boolean, default: !1},
        novalidate: {type: Boolean, default: !1},
        validated: {type: Boolean, default: !1},
      },
      emits: ['submit'],
      setup(M) {
        return {
          classes: I.computed(() => ({'form-floating': M.floating, 'was-validated': M.validated})),
        }
      },
    }),
    Cw = ['id', 'novalidate']
  function tw(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'form',
        {
          id: M.id,
          novalidate: M.novalidate,
          class: I.normalizeClass(M.classes),
          onSubmit: A[0] || (A[0] = I.withModifiers((j) => M.$emit('submit', j), ['prevent'])),
        },
        [I.renderSlot(M.$slots, 'default')],
        42,
        Cw
      )
    )
  }
  var DL = c(uw, [['render', tw]])
  const iw = (M) =>
      I.computed(() =>
        M.ariaInvalid === !0 ||
        M.ariaInvalid === 'true' ||
        M.ariaInvalid === '' ||
        (typeof M.state == 'boolean' ? M.state : null) === !1
          ? 'true'
          : M.ariaInvalid
      ),
    gL = (M) =>
      I.computed(() => ({
        'form-check': !M.plain && !M.button,
        'form-check-inline': M.inline,
        'form-switch': M.switch,
        [`form-control-${M.size}`]: M.size && M.size !== 'md',
      })),
    NL = (M) =>
      I.computed(() => ({
        'form-check-input': !M.plain && !M.button,
        'is-valid': M.state === !0,
        'is-invalid': M.state === !1,
        'btn-check': M.button,
      })),
    LL = (M) =>
      I.computed(() => ({
        'form-check-label': !M.plain && !M.button,
        'btn': M.button,
        [`btn-${M.buttonVariant}`]: M.button,
        [`btn-${M.size}`]: M.button && M.size && M.size !== 'md',
      })),
    jL = (M) =>
      I.computed(() => ({
        'aria-invalid': iw(M).value,
        'aria-required': M.required.toString() === 'true' ? 'true' : null,
      })),
    SL = (M) =>
      I.computed(() => ({
        'was-validated': M.validated,
        'btn-group': M.buttons && !M.stacked,
        'btn-group-vertical': M.stacked,
        [`btn-group-${M.size}`]: M.size,
      })),
    RA = (M, A, D) =>
      M.filter((g) => g.type.name === A).map((g) => {
        const N = (g.children.default ? g.children.default() : []).find(
          (L) => L.type.toString() === 'Symbol(Text)'
        )
        return {props: z({disabled: D}, g.props), text: N ? N.children : ''}
      }),
    uL = (M, A) =>
      typeof M == 'string'
        ? {props: {value: M, disabled: A.disabled}, text: M}
        : {
            props: z({value: M[A.valueField], disabled: A.disabled || M[A.disabledField]}, M.props),
            text: M[A.textField],
            html: M[A.htmlField],
          },
    CL = (M, A, D, g, N) =>
      h(z({}, M), {
        props: z(
          {
            'button-variant': D.buttonVariant,
            'form': D.form,
            'name': g.value,
            'id': `${N.value}_option_${A}`,
            'button': D.buttons,
            'state': D.state,
            'plain': D.plain,
            'size': D.size,
            'inline': !D.stacked,
            'required': D.required,
          },
          M.props
        ),
      }),
    ww = I.defineComponent({
      name: 'BFormCheckbox',
      inheritAttrs: !1,
      props: {
        id: {type: String, default: void 0},
        ariaLabel: {type: String},
        ariaLabelledBy: {type: String},
        autofocus: {type: Boolean, default: !1},
        plain: {type: Boolean, default: !1},
        button: {type: Boolean, default: !1},
        switch: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: !1},
        buttonVariant: {type: String, default: 'secondary'},
        form: {type: String},
        indeterminate: {type: Boolean},
        inline: {type: Boolean, default: !1},
        name: {type: String},
        required: {type: Boolean, default: void 0},
        size: {type: String, default: 'md'},
        state: {type: Boolean, default: null},
        uncheckedValue: {type: [Boolean, String, Array, Object, Number], default: !1},
        value: {type: [Boolean, String, Array, Object, Number], default: !0},
        modelValue: {type: [Boolean, String, Array, Object, Number], default: null},
      },
      emits: ['update:modelValue', 'input', 'change'],
      setup(M, {emit: A}) {
        const D = P(M.id, 'form-check'),
          g = I.ref(null),
          N = I.ref(!1),
          L = I.computed({
            get: () => M.modelValue,
            set: (C) => {
              A('input', C), A('update:modelValue', C), A('change', C)
            },
          }),
          j = I.computed(() =>
            Array.isArray(M.modelValue)
              ? M.modelValue.indexOf(M.value) > -1
              : JSON.stringify(M.modelValue) === JSON.stringify(M.value)
          ),
          S = gL(M),
          u = NL(M),
          T = LL(M)
        I.watch(
          () => M.modelValue,
          (C) => {
            A('input', C)
          }
        )
        const E = () => {
            ;(N.value = !0), M.disabled || g.value.focus()
          },
          t = () => {
            ;(N.value = !1), M.disabled || g.value.blur()
          },
          i = (C) => {
            if (!Array.isArray(M.modelValue)) L.value = C ? M.value : M.uncheckedValue
            else {
              const x = M.modelValue
              if (C) x.indexOf(M.value) < 0 && x.push(M.value)
              else {
                const w = x.indexOf(M.value)
                w > -1 && x.splice(w, 1)
              }
              L.value = x
            }
          }
        return (
          M.autofocus &&
            I.onMounted(() => {
              g.value.focus()
            }),
          {
            input: g,
            computedId: D,
            classes: S,
            inputClasses: u,
            labelClasses: T,
            localChecked: L,
            isChecked: j,
            isFocused: N,
            handleClick: i,
            focus: E,
            blur: t,
          }
        )
      },
    }),
    Ew = [
      'id',
      'disabled',
      'required',
      'name',
      'form',
      'aria-label',
      'aria-labelledby',
      'aria-required',
      'value',
      'indeterminate',
      'checked',
    ],
    Tw = ['for']
  function xw(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        {class: I.normalizeClass(M.classes)},
        [
          I.createElementVNode(
            'input',
            I.mergeProps({id: M.computedId}, M.$attrs, {
              'ref': 'input',
              'class': M.inputClasses,
              'type': 'checkbox',
              'disabled': M.disabled,
              'required': M.name && M.required,
              'name': M.name,
              'form': M.form,
              'aria-label': M.ariaLabel,
              'aria-labelledby': M.ariaLabelledBy,
              'aria-required': M.name && M.required ? 'true' : null,
              'value': M.value,
              'indeterminate': M.indeterminate,
              'checked': M.isChecked,
              'onClick':
                A[0] || (A[0] = I.withModifiers((j) => M.handleClick(j.target.checked), ['stop'])),
              'onFocus': A[1] || (A[1] = (j) => M.focus()),
              'onBlur': A[2] || (A[2] = (j) => M.blur()),
            }),
            null,
            16,
            Ew
          ),
          M.$slots.default || !M.plain
            ? (I.openBlock(),
              I.createElementBlock(
                'label',
                {
                  key: 0,
                  for: M.computedId,
                  class: I.normalizeClass([
                    M.labelClasses,
                    {active: M.isChecked, focus: M.isFocused},
                  ]),
                },
                [I.renderSlot(M.$slots, 'default')],
                10,
                Tw
              ))
            : I.createCommentVNode('', !0),
        ],
        2
      )
    )
  }
  var tL = c(ww, [['render', xw]])
  const yw = I.defineComponent({
      name: 'BFormCheckboxGroup',
      props: {
        modelValue: {type: Array, default: () => []},
        ariaInvalid: {type: [Boolean, String], default: null},
        autofocus: {type: Boolean, default: !1},
        buttonVariant: {type: String, default: 'secondary'},
        buttons: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: !1},
        disabledField: {type: String, default: 'disabled'},
        form: {type: String},
        htmlField: {type: String, default: 'html'},
        id: {type: String},
        name: {type: String},
        options: {type: Array, default: () => []},
        plain: {type: Boolean, default: !1},
        required: {type: Boolean, default: !1},
        size: {type: String},
        stacked: {type: Boolean, default: !1},
        state: {type: Boolean, default: null},
        switches: {type: Boolean, default: !1},
        textField: {type: String, default: 'text'},
        validated: {type: Boolean, default: !1},
        valueField: {type: String, default: 'value'},
      },
      emits: ['update:modelValue', 'change', 'input'],
      setup(M, {emit: A, slots: D}) {
        const g = 'BFormCheckbox',
          N = P(M.id, 'checkbox'),
          L = P(M.name, 'checkbox'),
          j = I.computed({
            get: () => M.modelValue,
            set: (t) => {
              JSON.stringify(t) !== JSON.stringify(M.modelValue) &&
                (A('input', t), A('update:modelValue', t), A('change', t))
            },
          }),
          S = I.computed(() =>
            (D.first ? RA(D.first(), g, M.disabled) : [])
              .concat(M.options.map((t) => uL(t, M)))
              .concat(D.default ? RA(D.default(), g, M.disabled) : [])
              .map((t, i) => CL(t, i, M, L, N))
              .map((t) => {
                var i
                return h(z({}, t), {
                  model: M.modelValue.find((C) => {
                    var x
                    return ((x = t.props) == null ? void 0 : x.value) === C
                  })
                    ? (i = t.props) == null
                      ? void 0
                      : i.value
                    : !1,
                  props: z({switch: M.switches}, t.props),
                })
              })
          ),
          u = (t, i) => {
            const C = M.modelValue.filter((x) => JSON.stringify(x) !== JSON.stringify(i))
            JSON.stringify(t) === JSON.stringify(i) && C.push(t),
              A('update:modelValue', C),
              A('change', C)
          },
          T = jL(M),
          E = SL(M)
        return (
          I.watch(
            () => M.modelValue,
            (t) => {
              A('input', t)
            }
          ),
          {attrs: T, classes: E, checkboxList: S, childUpdated: u, computedId: N, localChecked: j}
        )
      },
    }),
    Yw = ['id'],
    ew = ['innerHTML'],
    zw = ['textContent']
  function cw(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-form-checkbox')
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        I.mergeProps(M.attrs, {
          id: M.computedId,
          role: 'group',
          class: [M.classes, 'bv-no-focus-ring'],
          tabindex: '-1',
        }),
        [
          (I.openBlock(!0),
          I.createElementBlock(
            I.Fragment,
            null,
            I.renderList(
              M.checkboxList,
              (S, u) => (
                I.openBlock(),
                I.createBlock(
                  j,
                  I.mergeProps(
                    {'key': u, 'modelValue': S.model, 'onUpdate:modelValue': (T) => (S.model = T)},
                    S.props,
                    {
                      onChange: (T) => {
                        var E
                        return M.childUpdated(T, (E = S.props) == null ? void 0 : E.value)
                      },
                    }
                  ),
                  {
                    default: I.withCtx(() => [
                      S.html
                        ? (I.openBlock(),
                          I.createElementBlock('span', {key: 0, innerHTML: S.html}, null, 8, ew))
                        : (I.openBlock(),
                          I.createElementBlock(
                            'span',
                            {key: 1, textContent: I.toDisplayString(S.text)},
                            null,
                            8,
                            zw
                          )),
                    ]),
                    _: 2,
                  },
                  1040,
                  ['modelValue', 'onUpdate:modelValue', 'onChange']
                )
              )
            ),
            128
          )),
        ],
        16,
        Yw
      )
    )
  }
  var iL = c(yw, [['render', cw]])
  const aw = I.defineComponent({
      name: 'BFormFloatingLabel',
      props: {labelFor: {type: String}, label: {type: String}},
    }),
    Uw = {class: 'form-floating'},
    lw = ['for']
  function sw(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock('div', Uw, [
        I.renderSlot(M.$slots, 'default'),
        I.createElementVNode('label', {for: M.labelFor}, I.toDisplayString(M.label), 9, lw),
      ])
    )
  }
  var wL = c(aw, [['render', sw]])
  const HI = (M) => '\\' + M,
    ow = (M) => {
      M = PI(M)
      const A = M.length,
        D = M.charCodeAt(0)
      return M.split('').reduce((g, N, L) => {
        const j = M.charCodeAt(L)
        return j === 0
          ? g + '\uFFFD'
          : j === 127 ||
            (j >= 1 && j <= 31) ||
            (L === 0 && j >= 48 && j <= 57) ||
            (L === 1 && j >= 48 && j <= 57 && D === 45)
          ? g + HI(`${j.toString(16)} `)
          : L === 0 && j === 45 && A === 1
          ? g + HI(N)
          : j >= 128 ||
            j === 45 ||
            j === 95 ||
            (j >= 48 && j <= 57) ||
            (j >= 65 && j <= 90) ||
            (j >= 97 && j <= 122)
          ? g + N
          : g + HI(N)
      }, '')
    },
    AM = (M, A = {}, D = {}) => {
      const g = [M]
      let N
      for (let L = 0; L < g.length && !N; L++) {
        const j = g[L]
        N = D[j]
      }
      return N && uN(N) ? N(A) : N
    },
    Ow = I.defineComponent({
      name: 'BFormValidFeedback',
      props: {
        ariaLive: {type: String, required: !1},
        forceShow: {type: Boolean, default: !1},
        id: {type: String, required: !1},
        role: {type: String, required: !1},
        state: {type: Boolean, default: void 0},
        tag: {type: String, default: 'div'},
        tooltip: {type: Boolean, default: !1},
      },
      setup(M) {
        const A = I.computed(() => M.forceShow === !0 || M.state === !0),
          D = I.computed(() => ({
            'd-block': A.value,
            'valid-feedback': !M.tooltip,
            'valid-tooltip': M.tooltip,
          }))
        return {
          attrs: I.computed(() => ({
            'id': M.id || null,
            'role': M.role || null,
            'aria-live': M.ariaLive || null,
            'aria-atomic': M.ariaLive ? 'true' : null,
          })),
          classes: D,
          computedShow: A,
        }
      },
    })
  function mw(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        I.mergeProps({class: M.classes}, M.attrs),
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        16,
        ['class']
      )
    )
  }
  var _A = c(Ow, [['render', mw]])
  const dw = I.defineComponent({
    name: 'BFormInvalidFeedback',
    props: {
      ariaLive: {type: String, required: !1},
      forceShow: {type: Boolean, default: !1},
      id: {type: String, required: !1},
      role: {type: String, required: !1},
      state: {type: Boolean, default: void 0},
      tag: {type: String, default: 'div'},
      tooltip: {type: Boolean, default: !1},
    },
    setup(M) {
      const A = I.computed(() => M.forceShow === !0 || M.state === !1),
        D = I.computed(() => ({
          'd-block': A.value,
          'invalid-feedback': !M.tooltip,
          'invalid-tooltip': M.tooltip,
        }))
      return {
        attrs: I.computed(() => ({
          'id': M.id || null,
          'role': M.role || null,
          'aria-live': M.ariaLive || null,
          'aria-atomic': M.ariaLive ? 'true' : null,
        })),
        classes: D,
        computedShow: A,
      }
    },
  })
  function nw(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        I.mergeProps({class: M.classes}, M.attrs),
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        16,
        ['class']
      )
    )
  }
  var $A = c(dw, [['render', nw]])
  const bw = I.defineComponent({name: 'BFormRow', props: {tag: {type: String, default: 'div'}}})
  function hw(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {class: 'row d-flex flex-wrap'},
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3}
      )
    )
  }
  var cA = c(bw, [['render', hw]])
  const Ww = I.defineComponent({
    name: 'BFormText',
    props: {
      id: {type: String, required: !1},
      inline: {type: Boolean, default: !1},
      tag: {type: String, default: 'small'},
      textVariant: {type: String, default: 'muted'},
    },
    setup(M) {
      const A = I.computed(() => ({
        'form-text': !M.inline,
        [`text-${M.textVariant}`]: M.textVariant,
      }))
      return {attrs: I.computed(() => ({id: M.id || null})), classes: A}
    },
  })
  function kw(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        I.mergeProps({class: M.classes}, M.attrs),
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        16,
        ['class']
      )
    )
  }
  var qA = c(Ww, [['render', kw]])
  const EL = ['input', 'select', 'textarea'],
    Qw = EL.map((M) => `${M}:not([disabled])`).join(),
    Gw = [...EL, 'a', 'button', 'label'],
    rw = 'label',
    Jw = 'invalid-feedback',
    pw = 'valid-feedback',
    Zw = 'description',
    Vw = 'default',
    TL = I.defineComponent({
      name: 'BFormGroup',
      components: {
        BCol: MA,
        BFormInvalidFeedback: $A,
        BFormRow: cA,
        BFormText: qA,
        BFormValidFeedback: _A,
      },
      props: {
        contentCols: {type: [Boolean, String, Number], required: !1},
        contentColsLg: {type: [Boolean, String, Number], required: !1},
        contentColsMd: {type: [Boolean, String, Number], required: !1},
        contentColsSm: {type: [Boolean, String, Number], required: !1},
        contentColsXl: {type: [Boolean, String, Number], required: !1},
        description: {type: [String], required: !1},
        disabled: {type: Boolean, default: !1},
        feedbackAriaLive: {type: String, default: 'assertive'},
        id: {type: String, required: !1},
        invalidFeedback: {type: String, required: !1},
        label: {type: String, required: !1},
        labelAlign: {type: [Boolean, String, Number], required: !1},
        labelAlignLg: {type: [Boolean, String, Number], required: !1},
        labelAlignMd: {type: [Boolean, String, Number], required: !1},
        labelAlignSm: {type: [Boolean, String, Number], required: !1},
        labelAlignXl: {type: [Boolean, String, Number], required: !1},
        labelClass: {type: [Array, Object, String], required: !1},
        labelCols: {type: [Boolean, String, Number], required: !1},
        labelColsLg: {type: [Boolean, String, Number], required: !1},
        labelColsMd: {type: [Boolean, String, Number], required: !1},
        labelColsSm: {type: [Boolean, String, Number], required: !1},
        labelColsXl: {type: [Boolean, String, Number], required: !1},
        labelFor: {type: String, required: !1},
        labelSize: {type: String, required: !1},
        labelSrOnly: {type: Boolean, default: !1},
        state: {type: Boolean, default: null},
        tooltip: {type: Boolean, default: !1},
        validFeedback: {type: String, required: !1},
        validated: {type: Boolean, default: !1},
        floating: {type: Boolean, default: !1},
      },
      setup(M, {attrs: A}) {
        const D = null,
          g = ['xs', 'sm', 'md', 'lg', 'xl'],
          N = (e, a) =>
            g.reduce((o, l) => {
              const s = e[UN(l, `${a}Align`)] || null
              return s && o.push(['text', l, s].filter((b) => b).join('-')), o
            }, []),
          L = (e, a) =>
            g.reduce((o, l) => {
              let s = e[UN(l, `${a}Cols`)]
              return (
                (s = s === '' ? !0 : s || !1),
                !BI(s) && s !== 'auto' && ((s = Lt(s, 0)), (s = s > 0 ? s : !1)),
                s && (o[l || (BI(s) ? 'col' : 'cols')] = s),
                o
              )
            }, {}),
          j = I.ref(),
          S = (e, a = null) => {
            if (WC && M.labelFor) {
              const U = fC(`#${ow(M.labelFor)}`, j)
              if (U) {
                const o = 'aria-describedby',
                  l = (e || '').split(XA),
                  s = (a || '').split(XA),
                  b = (EN(U, o) || '')
                    .split(XA)
                    .filter((n) => !nC(s, n))
                    .concat(l)
                    .filter((n, G, O) => O.indexOf(n) === G)
                    .filter((n) => n)
                    .join(' ')
                    .trim()
                b ? RC(U, o, b) : _C(U, o)
              }
            }
          },
          u = I.computed(() => L(M, 'content')),
          T = I.computed(() => N(M, 'label')),
          E = I.computed(() => L(M, 'label')),
          t = I.computed(() => Object.keys(u.value).length > 0 || Object.keys(E.value).length > 0),
          i = I.computed(() => (BI(M.state) ? M.state : null)),
          C = I.computed(() => {
            const e = i.value
            return e === !0 ? 'is-valid' : e === !1 ? 'is-invalid' : null
          }),
          x = I.computed(() =>
            A.ariaInvalid === !0 ||
            A.ariaInvalid === 'true' ||
            A.ariaInvalid === '' ||
            i.value === !1
              ? 'true'
              : A.ariaInvalid
          )
        return (
          I.watch(
            () => D,
            (e, a) => {
              e !== a && S(e, a)
            }
          ),
          I.onMounted(() => {
            I.nextTick(() => {
              S(D)
            })
          }),
          {
            ariaDescribedby: D,
            computedAriaInvalid: x,
            contentColProps: u,
            isHorizontal: t,
            labelAlignClasses: T,
            labelColProps: E,
            onLegendClick: (e) => {
              if (M.labelFor) return
              const {target: a} = e,
                U = a ? a.tagName : ''
              if (Gw.indexOf(U) !== -1) return
              const o = HC(Qw, j).filter(vC)
              o.length === 1 && XC(o[0])
            },
            stateClass: C,
          }
        )
      },
      render() {
        const M = this.$props,
          A = this.$slots,
          D = P(),
          g = !M.labelFor
        let N = null
        const L = AM(rw, {}, A) || M.label,
          j = L ? J('_BV_label_') : null
        if (L || this.isHorizontal) {
          const l = g ? 'legend' : 'label'
          if (M.labelSrOnly)
            L && (N = I.h(l, {class: 'visually-hidden', id: j, for: M.labelFor || null}, L)),
              this.isHorizontal
                ? (N = I.h(MA, this.labelColProps, {default: () => N}))
                : (N = I.h('div', {}, [N]))
          else {
            const s = h(
              z(
                {onClick: g ? this.onLegendClick : null},
                this.isHorizontal ? this.labelColProps : {}
              ),
              {
                tag: this.isHorizontal ? l : null,
                id: j,
                for: M.labelFor || null,
                tabIndex: g ? '-1' : null,
                class: [
                  {
                    'bv-no-focus-ring': g,
                    'col-form-label': this.isHorizontal || g,
                    'pt-0': !this.isHorizontal && g,
                    'd-block': !this.isHorizontal && !g,
                    [`col-form-label-${M.labelSize}`]: !!M.labelSize,
                  },
                  this.labelAlignClasses,
                  M.labelClass,
                ],
              }
            )
            this.isHorizontal ? (N = I.h(MA, s, {default: () => L})) : (N = I.h(l, s, L))
          }
        }
        let S = null
        const u = AM(Jw, {}, A) || this.invalidFeedback,
          T = u ? J('_BV_feedback_invalid_') : null
        u &&
          (S = I.h(
            $A,
            {
              ariaLive: M.feedbackAriaLive,
              id: T,
              state: M.state,
              tooltip: M.tooltip,
              tabindex: u ? '-1' : null,
            },
            {default: () => u}
          ))
        let E = null
        const t = AM(pw, {}, A) || this.validFeedback,
          i = t ? J('_BV_feedback_valid_') : null
        t &&
          (E = I.h(
            _A,
            {
              ariaLive: M.feedbackAriaLive,
              id: i,
              state: M.state,
              tooltip: M.tooltip,
              tabindex: t ? '-1' : null,
            },
            {default: () => t}
          ))
        let C = null
        const x = AM(Zw, {}, A) || this.description,
          w = x ? J('_BV_description_') : null
        x && (C = I.h(qA, {id: w, tabindex: '-1'}, {default: () => x}))
        const e = (this.ariaDescribedby =
            [w, M.state === !1 ? T : null, M.state === !0 ? i : null].filter((l) => l).join(' ') ||
            null),
          a = [AM(Vw, {ariaDescribedby: e, descriptionId: w, id: D, labelId: j}, A) || '', S, E, C]
        !this.isHorizontal && M.floating && a.push(N)
        let U = I.h(
          'div',
          {ref: 'content', class: [{'form-floating': !this.isHorizontal && M.floating}]},
          a
        )
        this.isHorizontal &&
          (U = I.h(MA, z({ref: 'content'}, this.contentColProps), {default: () => a}))
        const o = {
          'class': ['mb-3', this.stateClass, {'was-validated': M.validated}],
          'id': P(M.id).value,
          'disabled': g ? M.disabled : null,
          'role': g ? null : 'group',
          'aria-invalid': this.computedAriaInvalid,
          'aria-labelledby': g && this.isHorizontal ? j : null,
        }
        return this.isHorizontal && !g
          ? I.h(cA, o, {default: () => [N, U]})
          : I.h(
              g ? 'fieldset' : 'div',
              o,
              this.isHorizontal && g
                ? [I.h(cA, {}, {default: () => [N, U]})]
                : this.isHorizontal || !M.floating
                ? [N, U]
                : [U]
            )
      },
    }),
    xL = {
      ariaInvalid: {type: [Boolean, String], default: !1},
      autocomplete: {type: String, required: !1},
      autofocus: {type: Boolean, default: !1},
      disabled: {type: Boolean, default: !1},
      form: {type: String, required: !1},
      formatter: {type: Function, required: !1},
      id: {type: String, required: !1},
      lazy: {type: Boolean, default: !1},
      lazyFormatter: {type: Boolean, default: !1},
      list: {type: String, required: !1},
      modelValue: {type: [String, Number], default: ''},
      name: {type: String, required: !1},
      number: {type: Boolean, default: !1},
      placeholder: {type: String, required: !1},
      plaintext: {type: Boolean, default: !1},
      readonly: {type: Boolean, default: !1},
      required: {type: Boolean, default: !1},
      size: {type: String, required: !1},
      state: {type: Boolean, default: null},
      trim: {type: Boolean, default: !1},
    }
  function yL(M, A) {
    const D = I.ref()
    let g = null,
      N = !0
    const L = P(M.id, 'input'),
      j = (w, e, a = !1) => (
        (w = String(w)),
        typeof M.formatter == 'function' && (!M.lazyFormatter || a)
          ? ((N = !1), M.formatter(w, e))
          : w
      ),
      S = (w) => (M.trim ? w.trim() : M.number ? parseFloat(w) : w),
      u = () => {
        I.nextTick(() => {
          var w
          M.autofocus && ((w = D.value) == null || w.focus())
        })
      }
    I.onMounted(u),
      I.onMounted(() => {
        D.value && (D.value.value = M.modelValue)
      }),
      I.onActivated(u)
    const T = I.computed(() =>
        M.ariaInvalid ? M.ariaInvalid.toString() : M.state === !1 ? 'true' : void 0
      ),
      E = (w) => {
        const {value: e} = w.target,
          a = j(e, w)
        if (a === !1 || w.defaultPrevented) {
          w.preventDefault()
          return
        }
        if (M.lazy) return
        A('input', a)
        const U = S(a)
        M.modelValue !== U && ((g = e), A('update:modelValue', U))
      },
      t = (w) => {
        const {value: e} = w.target,
          a = j(e, w)
        if (a === !1 || w.defaultPrevented) {
          w.preventDefault()
          return
        }
        if (!M.lazy) return
        ;(g = e), A('update:modelValue', a)
        const U = S(a)
        M.modelValue !== U && A('change', a)
      },
      i = (w) => {
        if ((A('blur', w), !M.lazy && !M.lazyFormatter)) return
        const {value: e} = w.target,
          a = j(e, w, !0)
        ;(g = e), A('update:modelValue', a)
      },
      C = () => {
        var w
        M.disabled || (w = D.value) == null || w.focus()
      },
      x = () => {
        var w
        M.disabled || (w = D.value) == null || w.blur()
      }
    return (
      I.watch(
        () => M.modelValue,
        (w) => {
          !D.value || ((D.value.value = g && N ? g : w), (g = null), (N = !0))
        }
      ),
      {
        input: D,
        computedId: L,
        computedAriaInvalid: T,
        onInput: E,
        onChange: t,
        onBlur: i,
        focus: C,
        blur: x,
      }
    )
  }
  const YL = [
      'text',
      'number',
      'email',
      'password',
      'search',
      'url',
      'tel',
      'date',
      'time',
      'range',
      'color',
    ],
    Bw = I.defineComponent({
      name: 'BFormInput',
      props: h(z({}, xL), {
        max: {type: [String, Number], required: !1},
        min: {type: [String, Number], required: !1},
        step: {type: [String, Number], required: !1},
        type: {type: String, default: 'text', validator: (M) => YL.includes(M)},
      }),
      emits: ['update:modelValue', 'change', 'blur', 'input'],
      setup(M, {emit: A}) {
        const D = I.computed(() => {
            const i = M.type === 'range',
              C = M.type === 'color'
            return {
              'form-range': i,
              'form-control': C || (!M.plaintext && !i),
              'form-control-color': C,
              'form-control-plaintext': M.plaintext && !i && !C,
              [`form-control-${M.size}`]: M.size,
              'is-valid': M.state === !0,
              'is-invalid': M.state === !1,
            }
          }),
          g = I.computed(() => (YL.includes(M.type) ? M.type : 'text')),
          {
            input: N,
            computedId: L,
            computedAriaInvalid: j,
            onInput: S,
            onChange: u,
            onBlur: T,
            focus: E,
            blur: t,
          } = yL(M, A)
        return {
          classes: D,
          localType: g,
          input: N,
          computedId: L,
          computedAriaInvalid: j,
          onInput: S,
          onChange: u,
          onBlur: T,
          focus: E,
          blur: t,
        }
      },
    }),
    Pw = [
      'id',
      'name',
      'form',
      'type',
      'disabled',
      'placeholder',
      'required',
      'autocomplete',
      'readonly',
      'min',
      'max',
      'step',
      'list',
      'aria-required',
      'aria-invalid',
    ]
  function Xw(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'input',
        I.mergeProps(
          {
            'id': M.computedId,
            'ref': 'input',
            'class': M.classes,
            'name': M.name || void 0,
            'form': M.form || void 0,
            'type': M.localType,
            'disabled': M.disabled,
            'placeholder': M.placeholder,
            'required': M.required,
            'autocomplete': M.autocomplete || void 0,
            'readonly': M.readonly || M.plaintext,
            'min': M.min,
            'max': M.max,
            'step': M.step,
            'list': M.type !== 'password' ? M.list : void 0,
            'aria-required': M.required ? 'true' : void 0,
            'aria-invalid': M.computedAriaInvalid,
          },
          M.$attrs,
          {
            onInput: A[0] || (A[0] = (j) => M.onInput(j)),
            onChange: A[1] || (A[1] = (j) => M.onChange(j)),
            onBlur: A[2] || (A[2] = (j) => M.onBlur(j)),
          }
        ),
        null,
        16,
        Pw
      )
    )
  }
  var eL = c(Bw, [['render', Xw]])
  const Fw = I.defineComponent({
      name: 'BFormRadio',
      props: {
        ariaLabel: {type: String},
        ariaLabelledBy: {type: String},
        autofocus: {type: Boolean, default: !1},
        modelValue: {type: [Boolean, String, Array, Object, Number], default: null},
        plain: {type: Boolean, default: !1},
        button: {type: Boolean, default: !1},
        switch: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: !1},
        buttonVariant: {type: String, default: 'secondary'},
        form: {type: String},
        id: {type: String},
        inline: {type: Boolean, default: !1},
        name: {type: String},
        required: {type: Boolean, default: !1},
        size: {type: String},
        state: {type: Boolean, default: null},
        value: {type: [String, Boolean, Object, Number], default: !0},
      },
      emits: ['update:modelValue', 'change', 'input'],
      setup(M, {emit: A}) {
        const D = P(M.id, 'form-check'),
          g = I.ref(null),
          N = I.ref(!1),
          L = I.computed({
            get: () => M.modelValue,
            set: (C) => {
              A('input', C), A('change', C), A('update:modelValue', C)
            },
          }),
          j = () => {
            ;(N.value = !0), M.disabled || g.value.focus()
          },
          S = () => {
            ;(N.value = !1), M.disabled || g.value.blur()
          },
          u = I.computed(() =>
            Array.isArray(M.modelValue)
              ? (M.modelValue || []).find((C) => C === M.value)
              : JSON.stringify(M.modelValue) === JSON.stringify(M.value)
          ),
          T = gL(M),
          E = NL(M),
          t = LL(M),
          i = async (C) => {
            Array.isArray(M.modelValue)
              ? (M.modelValue || [])[0] !== M.value && (L.value = [M.value])
              : C && M.modelValue !== M.value && (L.value = M.value)
          }
        return (
          I.watch(
            () => M.modelValue,
            (C) => {
              A('input', C)
            }
          ),
          M.autofocus &&
            I.onMounted(() => {
              g.value.focus()
            }),
          {
            localChecked: L,
            computedId: D,
            classes: T,
            inputClasses: E,
            labelClasses: t,
            isChecked: u,
            isFocused: N,
            input: g,
            handleClick: i,
            focus: j,
            blur: S,
          }
        )
      },
    }),
    vw = [
      'id',
      'disabled',
      'required',
      'name',
      'form',
      'aria-label',
      'aria-labelledby',
      'value',
      'checked',
      'aria-required',
    ],
    fw = ['for']
  function Hw(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        {class: I.normalizeClass(M.classes)},
        [
          I.createElementVNode(
            'input',
            I.mergeProps({id: M.computedId}, M.$attrs, {
              'ref': 'input',
              'class': M.inputClasses,
              'type': 'radio',
              'disabled': M.disabled,
              'required': M.name && M.required,
              'name': M.name,
              'form': M.form,
              'aria-label': M.ariaLabel,
              'aria-labelledby': M.ariaLabelledBy,
              'value': M.value,
              'checked': M.isChecked,
              'aria-required': M.name && M.required ? 'true' : null,
              'onClick':
                A[0] || (A[0] = I.withModifiers((j) => M.handleClick(j.target.checked), ['stop'])),
              'onFocus': A[1] || (A[1] = (...j) => M.focus && M.focus(...j)),
              'onBlur': A[2] || (A[2] = (...j) => M.blur && M.blur(...j)),
            }),
            null,
            16,
            vw
          ),
          M.$slots.default || !M.plain
            ? (I.openBlock(),
              I.createElementBlock(
                'label',
                {
                  key: 0,
                  for: M.computedId,
                  class: I.normalizeClass([
                    M.labelClasses,
                    {active: M.isChecked, focus: M.isFocused},
                  ]),
                },
                [I.renderSlot(M.$slots, 'default')],
                10,
                fw
              ))
            : I.createCommentVNode('', !0),
        ],
        2
      )
    )
  }
  var zL = c(Fw, [['render', Hw]])
  const Rw = I.defineComponent({
      name: 'BFormRadioGroup',
      props: {
        modelValue: {type: [String, Boolean, Array, Object, Number], default: ''},
        ariaInvalid: {type: [Boolean, String], default: null},
        autofocus: {type: Boolean, default: !1},
        buttonVariant: {type: String, default: 'secondary'},
        buttons: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: !1},
        disabledField: {type: String, default: 'disabled'},
        form: {type: String},
        htmlField: {type: String, default: 'html'},
        id: {type: String},
        name: {type: String},
        options: {type: Array, default: () => []},
        plain: {type: Boolean, default: !1},
        required: {type: Boolean, default: !1},
        size: {type: String},
        stacked: {type: Boolean, default: !1},
        state: {type: Boolean, default: null},
        textField: {type: String, default: 'text'},
        validated: {type: Boolean, default: !1},
        valueField: {type: String, default: 'value'},
      },
      emits: ['update:modelValue', 'input', 'change'],
      setup(M, {emit: A, slots: D}) {
        const g = 'BFormRadio',
          N = P(M.id, 'radio'),
          L = P(M.name, 'checkbox'),
          j = I.computed({
            get: () => M.modelValue,
            set: (t) => {
              A('input', t), A('update:modelValue', t), A('change', t)
            },
          }),
          S = I.computed(() =>
            (D.first ? RA(D.first(), g, M.disabled) : [])
              .concat(M.options.map((t) => uL(t, M)))
              .concat(D.default ? RA(D.default(), g, M.disabled) : [])
              .map((t, i) => CL(t, i, M, L, N))
              .map((t) => {
                var i, C
                return h(z({}, t), {
                  model:
                    JSON.stringify(M.modelValue) ===
                    JSON.stringify((i = t.props) == null ? void 0 : i.value)
                      ? (C = t.props) == null
                        ? void 0
                        : C.value
                      : null,
                })
              })
          ),
          u = (t) => {
            A('change', t), A('update:modelValue', t)
          },
          T = jL(M),
          E = SL(M)
        return {
          attrs: T,
          classes: E,
          checkboxList: S,
          childUpdated: u,
          computedId: N,
          localChecked: j,
        }
      },
    }),
    _w = ['id'],
    $w = ['innerHTML'],
    qw = ['textContent']
  function Kw(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-form-radio')
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        I.mergeProps(M.attrs, {
          id: M.computedId,
          role: 'radiogroup',
          class: [M.classes, 'bv-no-focus-ring'],
          tabindex: '-1',
        }),
        [
          (I.openBlock(!0),
          I.createElementBlock(
            I.Fragment,
            null,
            I.renderList(
              M.checkboxList,
              (S, u) => (
                I.openBlock(),
                I.createBlock(
                  j,
                  I.mergeProps(
                    {'key': u, 'modelValue': S.model, 'onUpdate:modelValue': (T) => (S.model = T)},
                    S.props,
                    {onChange: M.childUpdated}
                  ),
                  {
                    default: I.withCtx(() => [
                      S.html
                        ? (I.openBlock(),
                          I.createElementBlock('span', {key: 0, innerHTML: S.html}, null, 8, $w))
                        : (I.openBlock(),
                          I.createElementBlock(
                            'span',
                            {key: 1, textContent: I.toDisplayString(S.text)},
                            null,
                            8,
                            qw
                          )),
                    ]),
                    _: 2,
                  },
                  1040,
                  ['modelValue', 'onUpdate:modelValue', 'onChange']
                )
              )
            ),
            128
          )),
        ],
        16,
        _w
      )
    )
  }
  var cL = c(Rw, [['render', Kw]])
  const ME = I.defineComponent({
      name: 'BFormSelectOption',
      props: {value: {required: !0}, disabled: {type: Boolean, default: !1}},
    }),
    AE = ['value', 'disabled']
  function IE(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'option',
        {value: M.value, disabled: M.disabled},
        [I.renderSlot(M.$slots, 'default')],
        8,
        AE
      )
    )
  }
  var KA = c(ME, [['render', IE]])
  const AA = (M, A) => {
      if (!M) return M
      if (A in M) return M[A]
      const D = A.split('.')
      return AA(M[D[0]], D.splice(1).join('.'))
    },
    RI = (M, A = null, D, g) => {
      if (Object.prototype.toString.call(M) === '[object Object]') {
        const N = AA(M, g.valueField),
          L = AA(M, g.textField),
          j = AA(M, g.htmlField),
          S = AA(M, g.disabledField),
          u = M[g.optionsField] || null
        return u !== null
          ? {label: String(AA(M, g.labelField) || L), options: _I(u, D, g)}
          : {
              value: typeof N == 'undefined' ? A || L : N,
              text: String(typeof L == 'undefined' ? A : L),
              html: j,
              disabled: Boolean(S),
            }
      }
      return {value: A || M, text: String(M), disabled: !1}
    },
    _I = (M, A, D) =>
      Array.isArray(M)
        ? M.map((g) => RI(g, null, A, D))
        : Object.prototype.toString.call(M) === '[object Object]'
        ? (console.warn(
            `[BootstrapVue warn]: ${A} - Setting prop "options" to an object is deprecated. Use the array format instead.`
          ),
          Object.keys(M).map((g) => {
            const N = M[g]
            switch (typeof N) {
              case 'object':
                return RI(N.text, String(N.value), A, D)
              default:
                return RI(N, String(g), A, D)
            }
          }))
        : [],
    DE = I.defineComponent({
      name: 'BFormSelectOptionGroup',
      components: {BFormSelectOption: KA},
      props: {
        label: {type: String, required: !0},
        disabledField: {type: String, default: 'disabled'},
        htmlField: {type: String, default: 'html'},
        options: {type: [Array, Object], default: () => []},
        textField: {type: String, default: 'text'},
        valueField: {type: String, default: 'value'},
      },
      setup(M) {
        return {formOptions: I.computed(() => _I(M.options, 'BFormSelectOptionGroup', M))}
      },
    }),
    gE = ['label']
  function NE(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-form-select-option')
    return (
      I.openBlock(),
      I.createElementBlock(
        'optgroup',
        {label: M.label},
        [
          I.renderSlot(M.$slots, 'first'),
          (I.openBlock(!0),
          I.createElementBlock(
            I.Fragment,
            null,
            I.renderList(
              M.formOptions,
              (S, u) => (
                I.openBlock(),
                I.createBlock(
                  j,
                  I.mergeProps(
                    {key: `option_${u}`, value: S.value, disabled: S.disabled},
                    M.$attrs,
                    {textContent: I.toDisplayString(S.text), innerHTML: S.html}
                  ),
                  null,
                  16,
                  ['value', 'disabled', 'textContent', 'innerHTML']
                )
              )
            ),
            128
          )),
          I.renderSlot(M.$slots, 'default'),
        ],
        8,
        gE
      )
    )
  }
  var $I = c(DE, [['render', NE]])
  const LE = I.defineComponent({
      name: 'BFormSelect',
      components: {BFormSelectOption: KA, BFormSelectOptionGroup: $I},
      props: {
        ariaInvalid: {type: [Boolean, String], default: !1},
        autofocus: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: !1},
        disabledField: {type: String, default: 'disabled'},
        form: {type: String, required: !1},
        htmlField: {type: String, default: 'html'},
        id: {type: String, required: !1},
        labelField: {type: String, default: 'label'},
        multiple: {type: Boolean, default: !1},
        name: {type: String, required: !1},
        options: {type: [Array, Object], default: () => []},
        optionsField: {type: String, default: 'options'},
        plain: {type: Boolean, default: !1},
        required: {type: Boolean, default: !1},
        selectSize: {type: Number, default: 0},
        size: {type: String, required: !1},
        state: {type: Boolean, default: null},
        textField: {type: String, default: 'text'},
        valueField: {type: String, default: 'value'},
        modelValue: {type: [String, Array, Object, Number], default: ''},
      },
      emits: ['update:modelValue', 'change', 'input'],
      setup(M, {emit: A}) {
        const D = I.ref(),
          g = P(M.id, 'input'),
          N = () => {
            I.nextTick(() => {
              var i
              M.autofocus && ((i = D.value) == null || i.focus())
            })
          }
        I.onMounted(N), I.onActivated(N)
        const L = I.computed(() => ({
            'form-control': M.plain,
            [`form-control-${M.size}`]: M.size && M.plain,
            'form-select': !M.plain,
            [`form-select-${M.size}`]: M.size && !M.plain,
            'is-valid': M.state === !0,
            'is-invalid': M.state === !1,
          })),
          j = I.computed(() => (M.selectSize || M.plain ? M.selectSize : null)),
          S = I.computed(() =>
            M.ariaInvalid ? M.ariaInvalid.toString() : M.state === !1 ? 'true' : null
          ),
          u = I.computed(() => _I(M.options, 'BFormSelect', M)),
          T = (i) => {
            const {target: C} = i,
              x = Array.from(C.options)
                .filter((w) => w.selected)
                .map((w) => ('_value' in w ? w._value : w.value))
            I.nextTick(() => {
              A('change', C.multiple ? x : x[0]), A('update:modelValue', C.multiple ? x : x[0])
            })
          },
          E = () => {
            var i
            M.disabled || (i = D.value) == null || i.focus()
          },
          t = () => {
            var i
            M.disabled || (i = D.value) == null || i.blur()
          }
        return (
          I.watch(
            () => M.modelValue,
            (i) => {
              A('input', i)
            }
          ),
          {
            input: D,
            computedId: g,
            computedSelectSize: j,
            computedAriaInvalid: S,
            classes: L,
            formOptions: u,
            onChange: T,
            focus: E,
            blur: t,
          }
        )
      },
    }),
    jE = [
      'id',
      'name',
      'form',
      'multiple',
      'size',
      'disabled',
      'required',
      'aria-required',
      'aria-invalid',
      'value',
    ]
  function SE(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-form-select-option-group'),
      S = I.resolveComponent('b-form-select-option')
    return (
      I.openBlock(),
      I.createElementBlock(
        'select',
        I.mergeProps(
          {
            'id': M.computedId,
            'ref': 'input',
            'class': M.classes,
            'name': M.name,
            'form': M.form || null,
            'multiple': M.multiple || null,
            'size': M.computedSelectSize,
            'disabled': M.disabled,
            'required': M.required,
            'aria-required': M.required ? 'true' : null,
            'aria-invalid': M.computedAriaInvalid,
          },
          M.$attrs,
          {value: M.modelValue, onChange: A[0] || (A[0] = (u) => M.onChange(u))}
        ),
        [
          I.renderSlot(M.$slots, 'first'),
          (I.openBlock(!0),
          I.createElementBlock(
            I.Fragment,
            null,
            I.renderList(
              M.formOptions,
              (u, T) => (
                I.openBlock(),
                I.createElementBlock(
                  I.Fragment,
                  null,
                  [
                    Array.isArray(u.options)
                      ? (I.openBlock(),
                        I.createBlock(
                          j,
                          {key: `option_${T}`, label: u.label, options: u.options},
                          null,
                          8,
                          ['label', 'options']
                        ))
                      : (I.openBlock(),
                        I.createBlock(
                          S,
                          {
                            key: `option_${T}`,
                            value: u.value,
                            disabled: u.disabled,
                            textContent: I.toDisplayString(u.text),
                            innerHTML: u.html,
                          },
                          null,
                          8,
                          ['value', 'disabled', 'textContent', 'innerHTML']
                        )),
                  ],
                  64
                )
              )
            ),
            256
          )),
          I.renderSlot(M.$slots, 'default'),
        ],
        16,
        jE
      )
    )
  }
  var aL = c(LE, [['render', SE]])
  const uE = I.defineComponent({
      name: 'BFormTextarea',
      props: h(z({}, xL), {
        noResize: {type: Boolean, default: !1},
        rows: {type: [String, Number], required: !1, default: 2},
        wrap: {type: String, default: 'soft'},
      }),
      emits: ['update:modelValue', 'change', 'blur', 'input'],
      setup(M, {emit: A}) {
        const D = I.computed(() => ({
            'form-control': !M.plaintext,
            'form-control-plaintext': M.plaintext,
            [`form-control-${M.size}`]: M.size,
            'is-valid': M.state === !0,
            'is-invalid': M.state === !1,
          })),
          g = I.computed(() => (M.noResize ? {resize: 'none'} : void 0)),
          {
            input: N,
            computedId: L,
            computedAriaInvalid: j,
            onInput: S,
            onChange: u,
            onBlur: T,
            focus: E,
            blur: t,
          } = yL(M, A)
        return {
          input: N,
          computedId: L,
          computedAriaInvalid: j,
          onInput: S,
          onChange: u,
          onBlur: T,
          focus: E,
          blur: t,
          classes: D,
          computedStyles: g,
        }
      },
    }),
    CE = [
      'id',
      'name',
      'form',
      'disabled',
      'placeholder',
      'required',
      'autocomplete',
      'readonly',
      'aria-required',
      'aria-invalid',
      'rows',
      'wrap',
    ]
  function tE(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'textarea',
        I.mergeProps(
          {
            'id': M.computedId,
            'ref': 'input',
            'class': M.classes,
            'name': M.name || void 0,
            'form': M.form || void 0,
            'disabled': M.disabled,
            'placeholder': M.placeholder,
            'required': M.required,
            'autocomplete': M.autocomplete || void 0,
            'readonly': M.readonly || M.plaintext,
            'aria-required': M.required ? 'true' : void 0,
            'aria-invalid': M.computedAriaInvalid,
            'rows': M.rows,
            'style': M.computedStyles,
            'wrap': M.wrap || void 0,
          },
          M.$attrs,
          {
            onInput: A[0] || (A[0] = (j) => M.onInput(j)),
            onChange: A[1] || (A[1] = (j) => M.onChange(j)),
            onBlur: A[2] || (A[2] = (j) => M.onBlur(j)),
          }
        ),
        null,
        16,
        CE
      )
    )
  }
  var UL = c(uE, [['render', tE]]),
    iE =
  const MI = I.defineComponent({
      name: 'BIcon',
      props: {
        animation: {type: String},
        class: {type: [Array, Object, String], required: !1},
        content: {type: [String, Object], required: !1},
        flipH: {type: Boolean, default: !1},
        flipV: {type: Boolean, default: !1},
        fontScale: {type: [Number, String], default: 1},
        rotate: {type: [String, Number], required: !1, validator: (M) => M >= -360 && M <= 360},
        scale: {type: [Number, String], default: 1},
        shiftH: {type: [Number, String], default: 0},
        shiftV: {type: [Number, String], default: 0},
        size: {type: String, required: !1},
        stacked: {type: Boolean, default: !1},
        title: {type: String, required: !1},
        variant: {type: String, required: !1},
      },
      setup(M, {slots: A}) {
        const D = I.computed(() => zA(QM(M.fontScale, 1), 0) || 1),
          g = I.computed(() => zA(QM(M.scale, 1), 0) || 1),
          N = I.computed(() => QM(M.shiftH, 0)),
          L = I.computed(() => QM(M.shiftV, 0)),
          j = I.computed(() => M.flipH || M.flipV || g.value !== 1),
          S = I.computed(() => N.value || L.value)
        I.computed(() => M.content !== null && M.content !== void 0)
        const u = I.computed(() => j.value || M.rotate),
          T = I.computed(() =>
            [
              u.value ? 'translate(8 8)' : null,
              j.value
                ? `scale(${(M.flipH ? -1 : 1) * g.value} ${(M.flipV ? -1 : 1) * g.value})`
                : null,
              M.rotate ? `rotate(${M.rotate})` : null,
              u.value ? 'translate(-8 -8)' : null,
            ].filter((C) => C)
          ),
          E = I.computed(() => {
            const C = []
            return (
              M.variant && C.push(`bootstrap-icon--variant-${M.variant}`),
              M.size && C.push(`bootstrap-icon--size-${M.size}`),
              M.animation && C.push(`bootstrap-icon--animation-${M.animation}`),
              C
            )
          })
        let t = {viewBox: '0 0 16 16'}
        M.stacked ||
          (t = h(z({}, t), {
            'width': '1em',
            'height': '1em',
            'focusable': 'false',
            'role': 'img',
            'aria-label': 'icon',
            'xmlns': 'http://www.w3.org/2000/svg',
          }))
        const i = I.computed(() => T.value.join(' ') || void 0)
        return () => {
          let C = I.h('g', {transform: i.value}, [M.content, AM('default', {}, A)])
          S.value &&
            (C = I.h(
              'g',
              {transform: `translate(${(16 * N.value) / 16} ${(-16 * L.value) / 16})`},
              [C]
            )),
            M.stacked && (C = I.h('g', [C]))
          const w = [M.title ? I.h('title', M.title) : null, C].filter((e) => e)
          return I.h(
            'svg',
            h(z({class: ['bootstrap-icon', E.value, M.class]}, t), {
              style: M.stacked ? {} : {'font-size': D.value === 1 ? null : `${D.value * 100}%`},
            }),
            w
          )
        }
      },
    }),
    lL = I.defineComponent({
      name: 'BIcon',
      components: {BIconBase: MI},
      props: {
        animation: {type: String},
        flipH: {type: Boolean, default: !1},
        flipV: {type: Boolean, default: !1},
        fontScale: {type: [Number, String], default: 1},
        icon: {type: String, required: !0},
        rotate: {type: [String, Number], required: !1, validator: (M) => M >= -360 && M <= 360},
        scale: {type: [Number, String], default: 1},
        shiftH: {type: [Number, String], default: 0},
        shiftV: {type: [Number, String], default: 0},
        size: {type: String, required: !1},
        stacked: {type: Boolean, default: !1},
        title: {type: String, required: !1},
        variant: {type: String, required: !1},
      },
      setup(M) {
        const A = I.computed(() => iE)
        return () => {
          const D = I.h('use', {'xlink:href': `${A.value}#${M.icon}`}, '')
          return I.h(MI, h(z({}, M), {content: D}), {default: () => ''})
        }
      },
    }),
    sL = I.defineComponent({
      name: 'BIconstack',
      components: {BIconBase: MI},
      props: {
        animation: {type: String},
        content: {type: [String, Object], required: !1},
        flipH: {type: Boolean, default: !1},
        flipV: {type: Boolean, default: !1},
        fontScale: {type: [Number, String], default: 1},
        rotate: {type: [String, Number], required: !1, validator: (M) => M >= -360 && M <= 360},
        scale: {type: [Number, String], default: 1},
        shiftH: {type: [Number, String], default: 0},
        shiftV: {type: [Number, String], default: 0},
        size: {type: String, required: !1},
        title: {type: String, required: !1},
        variant: {type: String, required: !1},
      },
      setup(M, {slots: A}) {
        return () =>
          I.h(MI, h(z({}, M), {class: 'b-icon-stack'}), {default: () => AM('default', {}, A) || ''})
      },
    }),
    wE =
      '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',
    EE = (M, A, D) =>
      `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
        wE.replace('%{w}', String(M)).replace('%{h}', String(A)).replace('%{f}', D)
      )}`,
    TE = I.defineComponent({
      name: 'BImg',
      props: {
        alt: {type: String, default: void 0},
        blank: {type: Boolean, default: !1},
        blankColor: {type: String, default: 'transparent'},
        block: {type: Boolean, default: !1},
        center: {type: Boolean, default: !1},
        fluid: {type: Boolean, default: !1},
        fluidGrow: {type: Boolean, default: !1},
        height: {type: [Number, String], required: !1},
        left: {type: Boolean, default: !1},
        right: {type: Boolean, default: !1},
        rounded: {type: [Boolean, String], default: !1},
        sizes: {type: [String, Array], required: !1},
        src: {type: String, required: !1},
        srcset: {type: [String, Array], required: !1},
        thumbnail: {type: Boolean, default: !1},
        width: {type: [Number, String], required: !1},
      },
      setup(M) {
        const A = I.computed(() => {
            let g = M.src,
              N = (typeof M.width == 'number' ? M.width : parseInt(M.width, 10)) || null,
              L = (typeof M.height == 'number' ? M.height : parseInt(M.height, 10)) || null,
              j = ''
            typeof M.srcset == 'string'
              ? (j = M.srcset
                  .split(',')
                  .filter((u) => u)
                  .join(','))
              : Array.isArray(M.srcset) && (j = M.srcset.filter((u) => u).join(','))
            let S = ''
            return (
              typeof M.sizes == 'string'
                ? (S = M.sizes
                    .split(',')
                    .filter((u) => u)
                    .join(','))
                : Array.isArray(M.sizes) && (S = M.sizes.filter((u) => u).join(',')),
              M.blank &&
                (!L && N ? (L = N) : !N && L && (N = L),
                !N && !L && ((N = 1), (L = 1)),
                (g = EE(N, L, M.blankColor || 'transparent')),
                (j = ''),
                (S = '')),
              {
                src: g,
                alt: M.alt,
                width: N || null,
                height: L || null,
                srcset: j || null,
                sizes: S || null,
              }
            )
          }),
          D = I.computed(() => {
            let g = '',
              N = M.block
            return (
              M.left
                ? (g = 'float-start')
                : M.right
                ? (g = 'float-end')
                : M.center && ((g = 'mx-auto'), (N = !0)),
              {
                'img-thumbnail': M.thumbnail,
                'img-fluid': M.fluid || M.fluidGrow,
                'w-100': M.fluidGrow,
                'rounded': M.rounded === '' || M.rounded === !0,
                [`rounded-${M.rounded}`]: typeof M.rounded == 'string' && M.rounded !== '',
                [g]: !!g,
                'd-block': N,
              }
            )
          })
        return {attrs: A, classes: D}
      },
    })
  function xE(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock('img', I.mergeProps({class: M.classes}, M.attrs), null, 16)
    )
  }
  var oL = c(TE, [['render', xE]])
  const yE = I.defineComponent({
      name: 'BInputGroup',
      props: {
        append: {type: String, required: !1},
        appendHtml: {type: String, required: !1},
        id: {type: String, required: !1},
        prepend: {type: String, required: !1},
        prependHtml: {type: String, required: !1},
        size: {type: String, required: !1},
        tag: {type: String, default: 'div'},
      },
      setup(M) {
        const A = I.computed(() => ({
            'input-group-sm': M.size === 'sm',
            'input-group-lg': M.size === 'lg',
          })),
          D = I.computed(() => M.append || M.appendHtml),
          g = I.computed(() => M.prepend || M.prependHtml),
          N = I.computed(() => !!M.appendHtml),
          L = I.computed(() => !!M.prependHtml)
        return {classes: A, hasAppend: D, hasPrepend: g, showAppendHtml: N, showPrependHtml: L}
      },
    }),
    YE = {key: 0, class: 'input-group-text'},
    eE = {key: 0},
    zE = ['innerHTML'],
    cE = {key: 0, class: 'input-group-text'},
    aE = {key: 0},
    UE = ['innerHTML']
  function lE(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {id: M.id, class: I.normalizeClass(['input-group', M.classes]), role: 'group'},
        {
          default: I.withCtx(() => [
            I.renderSlot(M.$slots, 'prepend', {}, () => [
              M.hasPrepend
                ? (I.openBlock(),
                  I.createElementBlock('span', YE, [
                    M.showPrependHtml
                      ? I.createCommentVNode('', !0)
                      : (I.openBlock(),
                        I.createElementBlock('span', eE, I.toDisplayString(M.prepend), 1)),
                    M.showPrependHtml
                      ? (I.openBlock(),
                        I.createElementBlock(
                          'span',
                          {key: 1, innerHTML: M.prependHtml},
                          null,
                          8,
                          zE
                        ))
                      : I.createCommentVNode('', !0),
                  ]))
                : I.createCommentVNode('', !0),
            ]),
            I.renderSlot(M.$slots, 'default'),
            I.renderSlot(M.$slots, 'append', {}, () => [
              M.hasAppend
                ? (I.openBlock(),
                  I.createElementBlock('span', cE, [
                    M.showAppendHtml
                      ? I.createCommentVNode('', !0)
                      : (I.openBlock(),
                        I.createElementBlock('span', aE, I.toDisplayString(M.append), 1)),
                    M.showAppendHtml
                      ? (I.openBlock(),
                        I.createElementBlock(
                          'span',
                          {key: 1, innerHTML: M.appendHtml},
                          null,
                          8,
                          UE
                        ))
                      : I.createCommentVNode('', !0),
                  ]))
                : I.createCommentVNode('', !0),
            ]),
          ]),
          _: 3,
        },
        8,
        ['id', 'class']
      )
    )
  }
  var OL = c(yE, [['render', lE]])
  const sE = I.defineComponent({
    name: 'BInputGroupText',
    props: {tag: {type: String, default: 'div'}},
  })
  function oE(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {class: 'input-group-text'},
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3}
      )
    )
  }
  var qI = c(sE, [['render', oE]])
  const OE = I.defineComponent({
    name: 'BInputGroupAddon',
    components: {BInputGroupText: qI},
    props: {
      append: {type: Boolean, default: !1},
      id: {type: String, required: !1},
      isText: {type: Boolean, default: !1},
      tag: {type: String, default: 'div'},
    },
    setup(M) {
      return {
        computedClasses: I.computed(() => ({
          'input-group-append': M.append,
          'input-group-prepend': !M.append,
        })),
      }
    },
  })
  function mE(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-input-group-text')
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {id: M.id, class: I.normalizeClass(['d-flex', M.computedClasses])},
        {
          default: I.withCtx(() => [
            M.isText
              ? (I.openBlock(),
                I.createBlock(
                  j,
                  {key: 0},
                  {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3}
                ))
              : I.createCommentVNode('', !0),
            M.isText ? I.createCommentVNode('', !0) : I.renderSlot(M.$slots, 'default', {key: 1}),
          ]),
          _: 3,
        },
        8,
        ['id', 'class']
      )
    )
  }
  var AI = c(OE, [['render', mE]])
  const dE = I.defineComponent({
    name: 'BInputGroupAppend',
    components: {BInputGroupAddon: AI},
    props: {
      id: {type: String, required: !1},
      isText: {type: Boolean, default: !1},
      tag: {type: String, default: 'div'},
    },
  })
  function nE(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-input-group-addon')
    return (
      I.openBlock(),
      I.createBlock(
        j,
        {'id': M.id, 'is-text': M.isText, 'tag': M.tag, 'append': ''},
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        8,
        ['id', 'is-text', 'tag']
      )
    )
  }
  var mL = c(dE, [['render', nE]])
  const bE = I.defineComponent({
    name: 'BInputGroupPrepend',
    components: {BInputGroupAddon: AI},
    props: {
      id: {type: String, required: !1},
      isText: {type: Boolean, default: !1},
      tag: {type: String, default: 'div'},
    },
  })
  function hE(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-input-group-addon')
    return (
      I.openBlock(),
      I.createBlock(
        j,
        {'id': M.id, 'is-text': M.isText, 'tag': M.tag, 'append': !1},
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        8,
        ['id', 'is-text', 'tag']
      )
    )
  }
  var dL = c(bE, [['render', hE]])
  const nL = Symbol(),
    WE = I.defineComponent({
      name: 'BListGroup',
      props: {
        flush: {type: Boolean, default: !1},
        horizontal: {type: [Boolean, String], default: !1},
        numbered: {type: Boolean, default: !1},
        tag: {type: String, default: 'div'},
      },
      setup(M) {
        const A = I.computed(() => {
            const N = M.flush ? !1 : M.horizontal
            return {
              'list-group-flush': M.flush,
              'list-group-horizontal': N === !0,
              [`list-group-horizontal-${N}`]: typeof N == 'string',
              'list-group-numbered': M.numbered,
            }
          }),
          D = () => (M.numbered === !0 ? 'ol' : M.tag),
          g = I.ref(D())
        return (
          I.watch(
            () => M.tag,
            () => (g.value = D())
          ),
          I.watch(
            () => M.numbered,
            () => (g.value = D())
          ),
          I.provide(nL, {numbered: M.numbered}),
          {classes: A, computedTag: g}
        )
      },
    })
  function kE(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.computedTag),
        {class: I.normalizeClass(['list-group', M.classes])},
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        8,
        ['class']
      )
    )
  }
  var bL = c(WE, [['render', kE]])
  const QE = ['a', 'router-link', 'button', 'b-link'],
    GE = I.defineComponent({
      name: 'BListGroupItem',
      props: {
        action: {type: Boolean, default: !1},
        active: {type: Boolean, default: !1},
        button: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: !1},
        href: {type: String},
        tag: {type: String, default: 'div'},
        target: {type: String, default: '_self'},
        variant: {type: String},
      },
      setup(M, A) {
        const D = I.inject(nL, null),
          g = I.computed(() => !M.button && M.href),
          N = I.computed(() =>
            (D == null ? void 0 : D.numbered) ? 'li' : M.button ? 'button' : g.value ? 'a' : M.tag
          ),
          L = I.computed(() => {
            const S = M.action || g.value || M.button || QE.includes(M.tag)
            return {
              [`list-group-item-${M.variant}`]: M.variant,
              'list-group-item-action': S,
              'active': M.active,
              'disabled': M.disabled,
            }
          }),
          j = I.computed(() => {
            const S = {}
            return (
              M.button &&
                ((!A.attrs || !A.attrs.type) && (S.type = 'button'),
                M.disabled && (S.disabled = !0)),
              S
            )
          })
        return {tagComputed: N, classes: L, attrs: j, link: g}
      },
    })
  function rE(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tagComputed),
        I.mergeProps(
          {
            'class': ['list-group-item', M.classes],
            'aria-current': M.active ? !0 : null,
            'aria-disabled': M.disabled ? !0 : null,
            'target': M.link ? M.target : null,
            'href': M.button ? null : M.href,
          },
          M.attrs
        ),
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        16,
        ['class', 'aria-current', 'aria-disabled', 'target', 'href']
      )
    )
  }
  var hL = c(GE, [['render', rE]])
  const JE = I.defineComponent({
      name: 'BModal',
      components: {BButton: fA},
      inheritAttrs: !1,
      props: {
        bodyBgVariant: {type: String, required: !1},
        bodyClass: {type: String, required: !1},
        bodyTextVariant: {type: String, required: !1},
        busy: {type: Boolean, default: !1},
        buttonSize: {type: String, default: 'md'},
        cancelDisabled: {type: Boolean, default: !1},
        cancelTitle: {type: String, default: 'Cancel'},
        cancelVariant: {type: String, default: 'secondary'},
        centered: {type: Boolean, default: !1},
        contentClass: {type: String, required: !1},
        dialogClass: {type: String, required: !1},
        footerBgVariant: {type: String, required: !1},
        footerBorderVariant: {type: String, required: !1},
        footerClass: {type: String, required: !1},
        footerTextVariant: {type: String, required: !1},
        fullscreen: {type: [Boolean, String], default: !1},
        headerBgVariant: {type: String, required: !1},
        headerBorderVariant: {type: String, required: !1},
        headerClass: {type: String, required: !1},
        headerCloseLabel: {type: String, default: 'Close'},
        headerCloseWhite: {type: Boolean, default: !1},
        headerTextVariant: {type: String, required: !1},
        hideBackdrop: {type: Boolean, default: !1},
        hideFooter: {type: Boolean, default: !1},
        hideHeader: {type: Boolean, default: !1},
        hideHeaderClose: {type: Boolean, default: !1},
        id: {type: String, required: !1},
        modalClass: {type: String, required: !1},
        modelValue: {type: Boolean, default: !1},
        noCloseOnBackdrop: {type: Boolean, default: !1},
        noCloseOnEsc: {type: Boolean, default: !1},
        noFade: {type: Boolean, default: !1},
        noFocus: {type: Boolean, default: !1},
        okDisabled: {type: Boolean, default: !1},
        okOnly: {type: Boolean, default: !1},
        okTitle: {type: String, default: 'Ok'},
        okVariant: {type: String, default: 'primary'},
        scrollable: {type: Boolean, default: !1},
        show: {type: Boolean, default: !1},
        size: {type: String, required: !1},
        title: {type: String, required: !1},
        titleClass: {type: String, required: !1},
        titleSrOnly: {type: Boolean, default: !1},
        titleTag: {type: String, default: 'h5'},
      },
      emits: [
        'update:modelValue',
        'show',
        'shown',
        'hide',
        'hidden',
        'hide-prevented',
        'ok',
        'cancel',
      ],
      setup(M, {emit: A, slots: D}) {
        const g = I.ref(),
          N = I.ref(),
          L = I.computed(() => [{fade: !M.noFade, show: M.show}, M.modalClass]),
          j = I.computed(() => [
            {
              'modal-fullscreen': typeof M.fullscreen == 'boolean' ? M.fullscreen : !1,
              [`modal-fullscreen-${M.fullscreen}-down`]:
                typeof M.fullscreen == 'string' ? M.fullscreen : !1,
              [`modal-${M.size}`]: M.size,
              'modal-dialog-centered': M.centered,
              'modal-dialog-scrollable': M.scrollable,
            },
            M.dialogClass,
          ]),
          S = I.computed(() => [
            {
              [`bg-${M.bodyBgVariant}`]: M.bodyBgVariant,
              [`text-${M.bodyTextVariant}`]: M.bodyTextVariant,
            },
            M.bodyClass,
          ]),
          u = I.computed(() => [
            {
              [`bg-${M.headerBgVariant}`]: M.headerBgVariant,
              [`border-${M.headerBorderVariant}`]: M.headerBorderVariant,
              [`text-${M.headerTextVariant}`]: M.headerTextVariant,
            },
            M.headerClass,
          ]),
          T = I.computed(() => [
            {
              [`bg-${M.footerBgVariant}`]: M.footerBgVariant,
              [`border-${M.footerBorderVariant}`]: M.footerBorderVariant,
              [`text-${M.footerTextVariant}`]: M.footerTextVariant,
            },
            M.footerClass,
          ]),
          E = I.computed(() => [{['visually-hidden']: M.titleSrOnly}, M.titleClass]),
          t = I.computed(
            () => (
              console.log('Header close slot available', !!D['header-close']),
              console.log('slots', D),
              !!D['header-close']
            )
          ),
          i = I.computed(() => [
            {
              ['btn-close-content']: t.value,
              ['d-flex']: t.value,
              ['btn-close-white']: !t.value && M.headerCloseWhite,
            },
          ]),
          C = I.computed(() => M.cancelDisabled || M.busy),
          x = I.computed(() => M.okDisabled || M.busy)
        return (
          Q(g, 'shown.bs.modal', (w) => A('shown', w)),
          Q(g, 'hidden.bs.modal', (w) => A('hidden', w)),
          Q(g, 'hidePrevented.bs.modal', (w) => A('hide-prevented', w)),
          Q(g, 'show.bs.modal', (w) => {
            A('show', w), w.defaultPrevented || A('update:modelValue', !0)
          }),
          Q(g, 'hide.bs.modal', (w) => {
            A('hide', w), w.defaultPrevented || A('update:modelValue', !1)
          }),
          I.onMounted(() => {
            var w
            ;(N.value = new WM(g.value, {
              backdrop: M.hideBackdrop ? !1 : M.noCloseOnBackdrop ? 'static' : !M.hideBackdrop,
              keyboard: !M.noCloseOnEsc,
              focus: !M.noFocus,
            })),
              M.modelValue && ((w = N.value) == null || w.show())
          }),
          I.watch(
            () => M.modelValue,
            (w) => {
              var e, a
              w ? (e = N.value) == null || e.show() : (a = N.value) == null || a.hide()
            }
          ),
          {
            element: g,
            disableCancel: C,
            disableOk: x,
            modalClasses: L,
            modalDialogClasses: j,
            computedBodyClasses: S,
            computedFooterClasses: T,
            computedHeaderClasses: u,
            computedTitleClasses: E,
            computedCloseButtonClasses: i,
          }
        )
      },
    }),
    pE = ['id'],
    ZE = ['aria-label']
  function VE(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-button')
    return (
      I.openBlock(),
      I.createBlock(I.Teleport, {to: 'body'}, [
        I.createElementVNode(
          'div',
          I.mergeProps(
            {id: M.id, ref: 'element', class: ['modal', M.modalClasses], tabindex: '-1'},
            M.$attrs
          ),
          [
            I.createElementVNode(
              'div',
              {class: I.normalizeClass(['modal-dialog', M.modalDialogClasses])},
              [
                I.createElementVNode(
                  'div',
                  {class: I.normalizeClass(['modal-content', M.contentClass])},
                  [
                    M.hideHeader
                      ? I.createCommentVNode('', !0)
                      : (I.openBlock(),
                        I.createElementBlock(
                          'div',
                          {
                            key: 0,
                            class: I.normalizeClass(['modal-header', M.computedHeaderClasses]),
                          },
                          [
                            (I.openBlock(),
                            I.createBlock(
                              I.resolveDynamicComponent(M.titleTag),
                              {class: I.normalizeClass(['modal-title', M.computedTitleClasses])},
                              {
                                default: I.withCtx(() => [
                                  I.renderSlot(M.$slots, 'title', {}, () => [
                                    I.createTextVNode(I.toDisplayString(M.title), 1),
                                  ]),
                                ]),
                                _: 3,
                              },
                              8,
                              ['class']
                            )),
                            M.hideHeaderClose
                              ? I.createCommentVNode('', !0)
                              : (I.openBlock(),
                                I.createElementBlock(
                                  'button',
                                  {
                                    'key': 0,
                                    'type': 'button',
                                    'class': I.normalizeClass([
                                      'btn-close',
                                      M.computedCloseButtonClasses,
                                    ]),
                                    'data-bs-dismiss': 'modal',
                                    'aria-label': M.headerCloseLabel,
                                  },
                                  [I.renderSlot(M.$slots, 'header-close')],
                                  10,
                                  ZE
                                )),
                          ],
                          2
                        )),
                    I.createElementVNode(
                      'div',
                      {class: I.normalizeClass(['modal-body', M.computedBodyClasses])},
                      [I.renderSlot(M.$slots, 'default')],
                      2
                    ),
                    M.hideFooter
                      ? I.createCommentVNode('', !0)
                      : (I.openBlock(),
                        I.createElementBlock(
                          'div',
                          {
                            key: 1,
                            class: I.normalizeClass(['modal-footer', M.computedFooterClasses]),
                          },
                          [
                            I.renderSlot(M.$slots, 'footer', {}, () => [
                              M.okOnly
                                ? I.createCommentVNode('', !0)
                                : (I.openBlock(),
                                  I.createBlock(
                                    j,
                                    {
                                      'key': 0,
                                      'type': 'button',
                                      'class': 'btn btn-secondary',
                                      'data-bs-dismiss': 'modal',
                                      'disabled': M.disableCancel,
                                      'size': M.buttonSize,
                                      'variant': M.cancelVariant,
                                      'onClick': A[0] || (A[0] = (S) => M.$emit('cancel')),
                                    },
                                    {
                                      default: I.withCtx(() => [
                                        I.createTextVNode(I.toDisplayString(M.cancelTitle), 1),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ['disabled', 'size', 'variant']
                                  )),
                              I.createVNode(
                                j,
                                {
                                  'type': 'button',
                                  'class': 'btn btn-primary',
                                  'data-bs-dismiss': 'modal',
                                  'disabled': M.disableOk,
                                  'size': M.buttonSize,
                                  'variant': M.okVariant,
                                  'onClick': A[1] || (A[1] = (S) => M.$emit('ok')),
                                },
                                {
                                  default: I.withCtx(() => [
                                    I.createTextVNode(I.toDisplayString(M.okTitle), 1),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ['disabled', 'size', 'variant']
                              ),
                            ]),
                          ],
                          2
                        )),
                  ],
                  2
                ),
              ],
              2
            ),
          ],
          16,
          pE
        ),
      ])
    )
  }
  var WL = c(JE, [['render', VE]])
  const BE = I.defineComponent({
    name: 'BNav',
    props: {
      align: {type: String},
      fill: {type: Boolean, default: !1},
      justified: {type: Boolean, default: !1},
      pills: {type: Boolean, default: !1},
      tabs: {type: Boolean, default: !1},
      vertical: {type: Boolean, default: !1},
    },
    setup(M) {
      return {
        classes: I.computed(() => ({
          'flex-column': M.vertical,
          [`justify-content-${M.align}`]: M.align,
          'nav-tabs': M.tabs,
          'nav-pills': M.pills,
          'nav-fill': M.fill,
          'nav-justified': M.justified,
        })),
      }
    },
  })
  function PE(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'ul',
        {class: I.normalizeClass(['nav', M.classes])},
        [I.renderSlot(M.$slots, 'default')],
        2
      )
    )
  }
  var kL = c(BE, [['render', PE]])
  const XE = I.defineComponent({
      name: 'BNavItem',
      props: {
        active: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: !1},
        href: {type: String, required: !1},
      },
      setup(M) {
        return {classes: I.computed(() => ({active: M.active, disabled: M.disabled}))}
      },
    }),
    FE = ['href', 'tabindex', 'aria-disabled']
  function vE(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'li',
        {class: I.normalizeClass(['nav-item', M.classes])},
        [
          I.createElementVNode(
            'a',
            {
              'href': M.href,
              'class': 'nav-link',
              'tabindex': M.disabled ? -1 : null,
              'aria-disabled': M.disabled ? !0 : null,
            },
            [I.renderSlot(M.$slots, 'default')],
            8,
            FE
          ),
        ],
        2
      )
    )
  }
  var QL = c(XE, [['render', vE]])
  const fE = I.defineComponent({
      name: 'BOffcanvas',
      props: {
        modelValue: {type: Boolean, default: !1},
        bodyScrolling: {type: Boolean, default: !1},
        backdrop: {type: Boolean, default: !0},
        placement: {type: String, default: 'start'},
        title: {type: String, required: !0},
      },
      emits: ['update:modelValue', 'show', 'shown', 'hide', 'hidden'],
      setup(M, {emit: A}) {
        const D = I.ref(),
          g = I.ref()
        Q(D, 'shown.bs.offcanvas', () => A('shown')),
          Q(D, 'hidden.bs.offcanvas', () => A('hidden')),
          Q(D, 'show.bs.offcanvas', () => {
            A('show'), A('update:modelValue', !0)
          }),
          Q(D, 'hide.bs.offcanvas', () => {
            A('hide'), A('update:modelValue', !1)
          }),
          I.onMounted(() => {
            var L
            ;(g.value = new YM(D.value)), M.modelValue && ((L = g.value) == null || L.show(D.value))
          })
        const N = I.computed(() => ({[`offcanvas-${M.placement}`]: M.placement}))
        return (
          I.watch(
            () => M.modelValue,
            (L) => {
              var j, S
              L ? (j = g.value) == null || j.show(D.value) : (S = g.value) == null || S.hide()
            }
          ),
          {element: D, classes: N}
        )
      },
    }),
    HE = ['data-bs-backdrop', 'data-bs-scroll'],
    RE = {class: 'offcanvas-header'},
    _E = {id: 'offcanvasLabel', class: 'offcanvas-title'},
    $E = I.createElementVNode(
      'button',
      {
        'type': 'button',
        'class': 'btn-close text-reset',
        'data-bs-dismiss': 'offcanvas',
        'aria-label': 'Close',
      },
      null,
      -1
    ),
    qE = {class: 'offcanvas-body'}
  function KE(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        {
          'ref': 'element',
          'class': I.normalizeClass(['offcanvas', M.classes]),
          'tabindex': '-1',
          'aria-labelledby': 'offcanvasLabel',
          'data-bs-backdrop': M.backdrop,
          'data-bs-scroll': M.bodyScrolling,
        },
        [
          I.createElementVNode('div', RE, [
            I.createElementVNode('h5', _E, [
              I.renderSlot(M.$slots, 'title', {}, () => [
                I.createTextVNode(I.toDisplayString(M.title), 1),
              ]),
            ]),
            $E,
          ]),
          I.createElementVNode('div', qE, [I.renderSlot(M.$slots, 'default')]),
        ],
        10,
        HE
      )
    )
  }
  var GL = c(fE, [['render', KE]])
  const rL = {
      name: '',
      enterClass: '',
      enterActiveClass: '',
      enterToClass: 'show',
      leaveClass: 'show',
      leaveActiveClass: '',
      leaveToClass: '',
    },
    MT = h(z({}, rL), {enterActiveClass: 'fade', leaveActiveClass: 'fade'}),
    II = I.defineComponent({
      name: 'BTransition',
      props: {
        appear: {type: Boolean, default: !1},
        mode: {type: String, required: !1},
        noFade: {type: Boolean, default: !1},
        transProps: {type: Object, required: !1},
      },
      setup(M, {slots: A}) {
        const D = I.ref(M.transProps)
        return (
          CN(D) ||
            ((D.value = M.noFade ? rL : MT),
            M.appear &&
              (D.value = h(z({}, D.value), {
                appear: !0,
                appearClass: D.value.enterClass,
                appearActiveClass: D.value.enterActiveClass,
                appearToClass: D.value.enterToClass,
              }))),
          (D.value = h(z({mode: M.mode}, D.value), {css: !0})),
          () => I.h(I.Transition, z({}, D.value), {default: () => (A.default ? A.default() : [])})
        )
      },
    }),
    KI = {top: 0, left: 0, bottom: 0, right: 0},
    AT = 'default',
    IT = 'overlay',
    JL = I.defineComponent({
      name: 'BOverlay',
      components: {BTransition: II},
      props: {
        bgColor: {type: String, required: !1},
        blur: {type: String, default: '2px'},
        fixed: {type: Boolean, default: !1},
        noCenter: {type: Boolean, default: !1},
        noFade: {type: Boolean, default: !1},
        noWrap: {type: Boolean, default: !1},
        opacity: {
          type: [Number, String],
          default: 0.85,
          validator: (M) => {
            const A = QM(M, 0)
            return A >= 0 && A <= 1
          },
        },
        overlayTag: {type: String, default: 'div'},
        rounded: {type: [Boolean, String], default: !1},
        show: {type: Boolean, default: !1},
        spinnerSmall: {type: Boolean, default: !1},
        spinnerType: {type: String, default: 'border'},
        spinnerVariant: {type: String, required: !1},
        variant: {type: String, default: 'light'},
        wrapTag: {type: String, default: 'div'},
        zIndex: {type: [Number, String], default: 10},
      },
      emits: ['click', 'hidden', 'shown'],
      setup(M, {slots: A, emit: D}) {
        const g = I.computed(() =>
            M.rounded === !0 || M.rounded === ''
              ? 'rounded'
              : M.rounded
              ? `rounded-${M.rounded}`
              : ''
          ),
          N = I.computed(() => (M.variant && !M.bgColor ? `bg-${M.variant}` : '')),
          L = I.computed(() => ({
            spinnerType: M.spinnerType || null,
            spinnerVariant: M.spinnerVariant || null,
            spinnerSmall: M.spinnerSmall,
          }))
        return () => {
          const j = (E) =>
            I.h(I.resolveComponent('BSpinner'), {
              type: E.spinnerType,
              variant: E.spinnerVariant,
              small: E.spinnerSmall,
            })
          let S = ''
          if (M.show) {
            const E = I.h('div', {
                class: ['position-absolute', N.value, g.value],
                style: h(z({}, KI), {
                  opacity: M.opacity,
                  backgroundColor: M.bgColor || null,
                  backdropFilter: M.blur ? `blur(${M.blur})` : null,
                }),
              }),
              t = I.h(
                'div',
                {
                  class: 'position-absolute',
                  style: M.noCenter
                    ? z({}, KI)
                    : {top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)'},
                },
                AM(IT, L.value, A) || j(L.value) || ''
              )
            S = I.h(
              M.overlayTag,
              {
                class: [
                  'b-overlay',
                  {
                    'position-absolute': !M.noWrap || (M.noWrap && !M.fixed),
                    'position-fixed': M.noWrap && M.fixed,
                  },
                ],
                style: h(z({}, KI), {zIndex: M.zIndex || 10}),
                onClick: (i) => D('click', i),
                key: 'overlay',
              },
              [E, t]
            )
          }
          const u = () =>
            I.h(
              II,
              {
                noFade: M.noFade,
                name: 'fade',
                appear: !0,
                onAfterEnter: () => D('shown'),
                onAfterLeave: () => D('hidden'),
              },
              {default: () => S}
            )
          return M.noWrap
            ? u()
            : I.h(
                M.wrapTag,
                {
                  'class': ['b-overlay-wrap position-relative'],
                  'aria-busy': M.show ? 'true' : null,
                },
                [I.h('span', AM(AT, {}, A)), u()]
              )
        }
      },
    })
  function DT(M) {
    return I.computed(() =>
      M.align === 'center'
        ? 'justify-content-center'
        : M.align === 'end'
        ? 'justify-content-end'
        : (M.align === 'start', 'justify-content-start')
    )
  }
  class DI {
    constructor(A, D = {}) {
      if (
        ((this.cancelable = !0),
        (this.componentId = null),
        (this.defaultPrevented = !1),
        (this.nativeEvent = null),
        (this.relatedTarget = null),
        (this.target = null),
        (this.eventType = ''),
        (this.vueTarget = null),
        !A)
      )
        throw new TypeError(
          `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
        )
      Yt(this, DI.Defaults, this.constructor.Defaults, D, {eventType: A}),
        et(this, {
          type: GM(),
          cancelable: GM(),
          nativeEvent: GM(),
          target: GM(),
          relatedTarget: GM(),
          vueTarget: GM(),
          componentId: GM(),
        })
      let g = !1
      ;(this.preventDefault = function () {
        this.cancelable && (g = !0)
      }),
        zt(this, 'defaultPrevented', {
          enumerable: !0,
          get() {
            return g
          },
        })
    }
    static get Defaults() {
      return {
        eventType: '',
        cancelable: !0,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null,
        componentId: null,
      }
    }
  }
  const gT = 5,
    pL = 20,
    ZL = 0,
    CM = 3,
    NT = 'ellipsis-text',
    LT = 'first-text',
    jT = 'last-text',
    ST = 'next-text',
    uT = 'page',
    CT = 'prev-text',
    VL = (M) => Math.max(eA(M) || pL, 1),
    BL = (M) => Math.max(eA(M) || ZL, 0),
    tT = (M, A) => {
      const D = eA(M) || 1
      return D > A ? A : D < 1 ? 1 : D
    },
    PL = I.defineComponent({
      name: 'BPagination',
      props: {
        align: {type: String, default: 'start'},
        ariaControls: {type: String, required: !1},
        ariaLabel: {type: String, default: 'Pagination'},
        disabled: {type: Boolean, default: !1},
        ellipsisClass: {type: [Array, String], default: () => []},
        ellipsisText: {type: String, default: '\u2026'},
        firstClass: {type: [Array, String], default: () => []},
        firstNumber: {type: Boolean, default: !1},
        firstText: {type: String, default: '\xAB'},
        hideEllipsis: {type: Boolean, default: !1},
        hideGotoEndButtons: {type: Boolean, default: !1},
        labelFirstPage: {type: String, default: 'Go to first page'},
        labelLastPage: {type: String, default: 'Go to last page'},
        labelNextPage: {type: String, default: 'Go to next page'},
        labelPage: {type: String, default: 'Go to page'},
        labelPrevPage: {type: String, default: 'Go to previous page'},
        lastClass: {type: [Array, String], default: () => []},
        lastNumber: {type: Boolean, default: !1},
        lastText: {type: String, default: '\xBB'},
        limit: {type: Number, default: gT},
        modelValue: {type: Number, default: 1},
        nextClass: {type: [Array, String], default: () => []},
        nextText: {type: String, default: '\u203A'},
        pageClass: {type: [Array, String], default: () => []},
        perPage: {type: Number, default: pL},
        pills: {type: Boolean, default: !1},
        prevClass: {type: [Array, String], default: () => []},
        prevText: {type: String, default: '\u2039'},
        size: {type: String, required: !1},
        totalRows: {type: Number, default: ZL},
      },
      emits: ['update:modelValue', 'page-click'],
      setup(M, {emit: A, slots: D}) {
        const g = DT(M),
          N = I.computed(() => Math.ceil(BL(M.totalRows) / VL(M.perPage))),
          L = I.computed(() => {
            let x = 1
            return (
              N.value - M.modelValue + 2 < M.limit && M.limit > CM
                ? (x = N.value - S.value + 1)
                : (x = M.modelValue - Math.floor(S.value / 2)),
              x < 1 ? (x = 1) : x > N.value - S.value && (x = N.value - S.value + 1),
              M.limit <= CM &&
                M.lastNumber &&
                N.value === x + S.value - 1 &&
                (x = Math.max(x - 1, 1)),
              x
            )
          }),
          j = I.computed(() => {
            const x = N.value - M.modelValue
            let w = !1
            return (
              x + 2 < M.limit && M.limit > CM
                ? M.limit > CM && (w = !0)
                : M.limit > CM && (w = !!(!M.hideEllipsis || M.firstNumber)),
              L.value <= 1 && (w = !1),
              w && M.firstNumber && L.value < 4 && (w = !1),
              w
            )
          }),
          S = I.computed(() => {
            let x = M.limit
            return (
              N.value <= M.limit
                ? (x = N.value)
                : M.modelValue < M.limit - 1 && M.limit > CM
                ? ((!M.hideEllipsis || M.lastNumber) && (x = M.limit - (M.firstNumber ? 0 : 1)),
                  (x = Math.min(x, M.limit)))
                : N.value - M.modelValue + 2 < M.limit && M.limit > CM
                ? (!M.hideEllipsis || M.firstNumber) && (x = M.limit - (M.lastNumber ? 0 : 1))
                : M.limit > CM && (x = M.limit - (M.hideEllipsis ? 0 : 2)),
              x
            )
          })
        I.computed(() => {
          let x = S.value
          j.value && M.firstNumber && L.value < 4 && (x = x + 2)
          const w = L.value + x - 1
          return (
            u.value && M.lastNumber && w > N.value - 3 && (x = x + (w === N.value - 2 ? 2 : 3)),
            (x = Math.min(x, N.value - L.value + 1)),
            x
          )
        })
        const u = I.computed(() => {
            const x = N.value - S.value
            let w = !1
            M.modelValue < M.limit - 1 && M.limit > CM
              ? (!M.hideEllipsis || M.lastNumber) && (w = !0)
              : M.limit > CM && (w = !!(!M.hideEllipsis || M.lastNumber)),
              L.value > x && (w = !1)
            const e = L.value + S.value - 1
            return w && M.lastNumber && e > N.value - 3 && (w = !1), w
          }),
          T = I.reactive({
            pageSize: VL(M.perPage),
            totalRows: BL(M.totalRows),
            numberOfPages: N.value,
          }),
          E = (x, w) => {
            if (w === M.modelValue) return
            const {target: e} = x,
              a = new DI('page-click', {cancelable: !0, vueTarget: this, target: e})
            A('page-click', a, w), !a.defaultPrevented && A('update:modelValue', w)
          },
          t = I.computed(() => (M.size ? `pagination-${M.size}` : '')),
          i = I.computed(() => (M.pills ? 'b-pagination-pills' : ''))
        I.watch(
          () => M.modelValue,
          (x) => {
            const w = tT(x, N.value)
            w !== M.modelValue && A('update:modelValue', w)
          }
        ),
          I.watch(T, (x, w) => {
            LN(x) ||
              (((w.pageSize !== x.pageSize && w.totalRows === x.totalRows) ||
                (w.numberOfPages !== x.numberOfPages && M.modelValue > w.numberOfPages)) &&
                A('update:modelValue', 1))
          })
        const C = I.computed(() => {
          const x = []
          for (let w = 0; w < S.value; w++) x.push({number: L.value + w, classes: null})
          return x
        })
        return () => {
          const x = [],
            w = C.value.map((O) => O.number),
            e = (O) => O === M.modelValue,
            a = M.modelValue < 1,
            U = M.align === 'fill',
            o = (O, k, W, B, d, V) => {
              const r = M.disabled || e(V) || a || O < 1 || O > N.value,
                p = O < 1 ? 1 : O > N.value ? N.value : O,
                $ = {disabled: r, page: p, index: p - 1},
                IA = AM(W, $, D) || B || ''
              return I.h(
                'li',
                {class: ['page-item', {'disabled': r, 'flex-fill': U, 'd-flex': U && !r}, d]},
                I.h(
                  r ? 'span' : 'button',
                  {
                    'class': ['page-link', {'flex-grow-1': !r && U}],
                    'aria-label': k,
                    'aria-controls': M.ariaControls || null,
                    'aria-disabled': r ? 'true' : null,
                    'role': 'menuitem',
                    'type': r ? null : 'button',
                    'tabindex': r ? null : '-1',
                    'onClick': (wM) => {
                      r || E(wM, p)
                    },
                  },
                  IA
                )
              )
            },
            l = (O) =>
              I.h(
                'li',
                {
                  class: [
                    'page-item',
                    'disabled',
                    'bv-d-xs-down-none',
                    U ? 'flex-fill' : '',
                    M.ellipsisClass,
                  ],
                  role: 'separator',
                  key: `ellipsis-${O ? 'last' : 'first'}`,
                },
                [I.h('span', {class: ['page-link']}, AM(NT, {}, D) || M.ellipsisText || '...')]
              ),
            s = (O, k) => {
              const W = e(O.number) && !a,
                B = M.disabled ? null : W || (a && k === 0) ? '0' : '-1',
                d = {
                  active: W,
                  disabled: M.disabled,
                  page: O.number,
                  index: O.number - 1,
                  content: O.number,
                },
                V = AM(uT, d, D) || O.number,
                r = I.h(
                  M.disabled ? 'span' : 'button',
                  {
                    'class': ['page-link', {'flex-grow-1': !M.disabled && U}],
                    'aria-controls': M.ariaControls || null,
                    'aria-disabled': M.disabled ? 'true' : null,
                    'aria-label': M.labelPage ? `${M.labelPage} ${O.number}` : null,
                    'role': 'menuitemradio',
                    'type': M.disabled ? null : 'button',
                    'tabindex': B,
                    'onClick': (p) => {
                      M.disabled || E(p, O.number)
                    },
                  },
                  V
                )
              return I.h(
                'li',
                {
                  class: [
                    'page-item',
                    {
                      'disabled': M.disabled,
                      'active': W,
                      'flex-fill': U,
                      'd-flex': U && !M.disabled,
                    },
                    M.pageClass,
                  ],
                  role: 'presentation',
                  key: `page-${O.number}`,
                },
                r
              )
            }
          if (!M.hideGotoEndButtons && !M.firstNumber) {
            const O = o(1, M.labelFirstPage, LT, M.firstText, M.firstClass, 1)
            x.push(O)
          }
          const b = o(M.modelValue - 1, M.labelFirstPage, CT, M.prevText, M.prevClass, 1)
          x.push(b),
            M.firstNumber && w[0] !== 1 && x.push(s({number: 1}, 0)),
            j.value && x.push(l(!1)),
            C.value.forEach((O, k) => {
              const W = j.value && M.firstNumber && w[0] !== 1 ? 1 : 0
              x.push(s(O, k + W))
            }),
            u.value && x.push(l(!0)),
            M.lastNumber && w[w.length - 1] !== N.value && x.push(s({number: N.value}, -1))
          const n = o(M.modelValue + 1, M.labelNextPage, ST, M.nextText, M.nextClass, N.value)
          if ((x.push(n), !M.lastNumber && !M.hideGotoEndButtons)) {
            const O = o(N.value, M.labelLastPage, jT, M.lastText, M.lastClass, N.value)
            x.push(O)
          }
          return I.h(
            'ul',
            {
              'class': ['pagination', t.value, g.value, i.value],
              'role': 'menubar',
              'aria-disabled': M.disabled,
              'aria-label': M.ariaLabel || null,
            },
            x
          )
        }
      },
    }),
    iT = I.defineComponent({
      name: 'BPopover',
      props: {
        container: {type: [String, Object], default: 'body'},
        content: {type: String},
        id: {type: String},
        noninteractive: {type: Boolean, default: !1},
        placement: {type: String, default: 'right'},
        target: {type: [String, Object], default: void 0},
        title: {type: String},
        triggers: {type: String, default: 'click'},
        show: {type: Boolean, default: !1},
        variant: {type: String, default: void 0},
        html: {type: Boolean, default: !0},
        sanitize: {type: Boolean, default: !1},
      },
      emits: ['show', 'shown', 'hide', 'hidden', 'inserted'],
      setup(M, {emit: A, slots: D}) {
        const g = I.ref(),
          N = I.ref(),
          L = I.ref(),
          j = I.ref(),
          S = I.ref(),
          u = I.computed(() => ({[`b-popover-${M.variant}`]: M.variant})),
          T = (t) => {
            if (typeof t == 'string') return t
            if (t instanceof HTMLElement) return t
            if (typeof t != 'undefined') return t.$el
          },
          E = (t) => {
            if (!!t) {
              if (typeof t == 'string') {
                const i = document.getElementById(t)
                return i || void 0
              }
              return t
            }
          }
        return (
          I.onMounted(() => {
            var t, i, C
            I.nextTick(() => {
              ;(N.value = E(T(M.target))),
                N.value
                  ? (L.value = new _M(N.value, {
                      container: T(M.container),
                      trigger: M.triggers,
                      placement: M.placement,
                      title: M.title || D.title ? j.value : '',
                      content: S.value,
                      html: M.html,
                      sanitize: M.sanitize,
                    }))
                  : console.warn('[B-Popover] Target is a mandatory props.')
            }),
              (i = (t = g.value) == null ? void 0 : t.parentNode) == null || i.removeChild(g.value),
              M.show && ((C = L.value) == null || C.show())
          }),
          I.watch(
            () => M.show,
            (t, i) => {
              var C, x
              t !== i && (t ? (C = L.value) == null || C.show() : (x = L.value) == null || x.hide())
            }
          ),
          Q(N, 'show.bs.popover', () => A('show')),
          Q(N, 'shown.bs.popover', () => A('shown')),
          Q(N, 'hide.bs.popover', () => A('hide')),
          Q(N, 'hidden.bs.popover', () => A('hidden')),
          Q(N, 'inserted.bs.popover', () => A('inserted')),
          {element: g, titleRef: j, contentRef: S, classes: u}
        )
      },
    }),
    wT = ['id'],
    ET = {ref: 'titleRef'},
    TT = {ref: 'contentRef'}
  function xT(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        {
          id: M.id,
          ref: 'element',
          class: I.normalizeClass(['popover b-popover', M.classes]),
          role: 'tooltip',
          tabindex: '-1',
        },
        [
          I.createElementVNode(
            'div',
            ET,
            [
              I.renderSlot(M.$slots, 'title', {}, () => [
                I.createTextVNode(I.toDisplayString(M.title), 1),
              ]),
            ],
            512
          ),
          I.createElementVNode(
            'div',
            TT,
            [
              I.renderSlot(M.$slots, 'default', {}, () => [
                I.createTextVNode(I.toDisplayString(M.content), 1),
              ]),
            ],
            512
          ),
        ],
        10,
        wT
      )
    )
  }
  var XL = c(iT, [['render', xT]])
  const FL = Symbol(),
    yT = I.defineComponent({
      name: 'BProgress',
      props: {
        animated: {type: Boolean, default: !1},
        max: {type: [Number, String]},
        height: {type: String},
        precision: {type: [Number, String], default: 0},
        showProgress: {type: Boolean, default: !1},
        showValue: {type: Boolean, default: !1},
        striped: {type: Boolean, default: !1},
        value: {type: [Number, String], default: 0},
        variant: {type: String},
      },
      setup(M) {
        I.provide(FL, {
          animated: M.animated,
          max: M.max,
          showProgress: M.showProgress,
          showValue: M.showValue,
          striped: M.striped,
        })
      },
    })
  function YT(M, A, D, g, N, L) {
    const j = I.resolveComponent('b-progress-bar')
    return (
      I.openBlock(),
      I.createElementBlock(
        'div',
        {class: 'progress', style: I.normalizeStyle({height: M.height})},
        [
          I.renderSlot(M.$slots, 'default', {}, () => [
            I.createVNode(
              j,
              I.normalizeProps(
                I.guardReactiveProps({
                  animated: M.animated,
                  max: M.max,
                  precision: M.precision,
                  showProgress: M.showProgress,
                  showValue: M.showValue,
                  striped: M.striped,
                  value: M.value,
                  variant: M.variant,
                })
              ),
              null,
              16
            ),
          ]),
        ],
        4
      )
    )
  }
  var vL = c(yT, [['render', YT]])
  const fL = I.defineComponent({
      name: 'BProgressBar',
      props: {
        animated: {type: Boolean, default: !1},
        label: {type: String},
        labelHtml: {type: String},
        max: {type: [Number, String]},
        precision: {type: [Number, String], default: 0},
        showProgress: {type: Boolean, default: !1},
        showValue: {type: Boolean, default: !1},
        striped: {type: Boolean, default: !1},
        value: {type: [Number, String], default: 0},
        variant: {type: String},
      },
      setup(M, {slots: A}) {
        const D = I.inject(FL),
          g = I.computed(() => ({
            'progress-bar-animated': M.animated || (D == null ? void 0 : D.animated),
            'progress-bar-striped':
              M.striped ||
              (D == null ? void 0 : D.striped) ||
              M.animated ||
              (D == null ? void 0 : D.animated),
            [`bg-${M.variant}`]: M.variant,
          })),
          N = I.computed(() => {
            if (M.showValue || (D == null ? void 0 : D.showValue))
              return parseFloat(M.value).toFixed(M.precision)
            if (M.showProgress || (D == null ? void 0 : D.showProgress)) {
              const S = ((M.value * 100) / parseInt(M.max || 100)).toString()
              return parseFloat(S).toFixed(M.precision)
            }
            return M.label || ''
          }),
          L = I.computed(() =>
            M.max || (D == null ? void 0 : D.max)
              ? `${(M.value * 100) / parseInt(M.max || (D == null ? void 0 : D.max))}%`
              : typeof M.value == 'string'
              ? M.value
              : `${M.value}%`
          ),
          j = I.computed(() => {
            const S = {
              'class': ['progress-bar', g.value],
              'role': 'progressbar',
              'aria-valuenow': M.value,
              'aria-valuemin': 0,
              'aria-valuemax': M.max,
              'style': {width: L.value},
            }
            return M.labelHtml ? h(z({}, S), {innerHTML: M.labelHtml}) : S
          })
        return () => {
          var S
          return I.h('div', j.value, ((S = A.default) == null ? void 0 : S.call(A)) || N.value)
        }
      },
    }),
    HL = HA('cols', [''], {type: [String, Number], default: null}),
    eT = I.defineComponent({
      name: 'BRow',
      props: z(
        {
          tag: {type: String, default: 'div'},
          gutterX: {type: String, default: null},
          gutterY: {type: String, default: null},
          alignV: {type: String, default: null},
          alignH: {type: String, default: null},
          alignContent: {type: String, default: null},
        },
        HL
      ),
      setup(M) {
        const A = XN(M, HL, 'cols', 'row-cols')
        return {
          classes: I.computed(() => ({
            [`gx-${M.gutterX}`]: M.gutterX !== null,
            [`gy-${M.gutterY}`]: M.gutterY !== null,
            [`align-items-${M.alignV}`]: M.alignV,
            [`justify-content-${M.alignH}`]: M.alignH,
            [`align-content-${M.alignContent}`]: M.alignContent,
          })),
          rowColsClasses: A,
        }
      },
    })
  function zT(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {class: I.normalizeClass(['row', [M.classes, M.rowColsClasses]])},
        {default: I.withCtx(() => [I.renderSlot(M.$slots, 'default')]), _: 3},
        8,
        ['class']
      )
    )
  }
  var RL = c(eT, [['render', zT]])
  const cT = I.defineComponent({
      name: 'BSpinner',
      props: {
        label: {type: String},
        role: {type: String, default: 'status'},
        small: {type: Boolean, default: !1},
        tag: {type: String, default: 'span'},
        type: {type: String, default: 'border'},
        variant: {type: String},
      },
      setup(M) {
        return {
          classes: I.computed(() => ({
            'spinner-border': M.type === 'border',
            'spinner-border-sm': M.type === 'border' && M.small,
            'spinner-grow': M.type === 'grow',
            'spinner-grow-sm': M.type === 'grow' && M.small,
            [`text-${M.variant}`]: !!M.variant,
          })),
        }
      },
    }),
    aT = {key: 0, class: 'visually-hidden'}
  function UT(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {
          'class': I.normalizeClass(M.classes),
          'role': M.label || M.$slots.label ? M.role : null,
          'aria-hidden': M.label || M.$slots.label ? null : !0,
        },
        {
          default: I.withCtx(() => [
            M.label || M.$slots.label
              ? (I.openBlock(),
                I.createElementBlock('span', aT, [
                  I.renderSlot(M.$slots, 'label', {}, () => [
                    I.createTextVNode(I.toDisplayString(M.label), 1),
                  ]),
                ]))
              : I.createCommentVNode('', !0),
          ]),
          _: 3,
        },
        8,
        ['class', 'role', 'aria-hidden']
      )
    )
  }
  var _L = c(cT, [['render', UT]])
  const $L = Symbol(),
    lT = (M) =>
      !M || !M.default
        ? []
        : M.default()
            .reduce(
              (A, D) => (typeof D.type == 'symbol' ? (A = A.concat(D.children)) : A.push(D), A),
              []
            )
            .filter((A) => {
              var D
              return ((D = A.type) == null ? void 0 : D.name) === 'BTab'
            }),
    sT = I.defineComponent({
      name: 'BTabs',
      props: {
        activeNavItemClass: {type: [Array, Object, String], default: null},
        activeTabClass: {type: [Array, Object, String], default: null},
        align: {type: String, default: null},
        card: {type: Boolean, default: !1},
        contentClass: {type: [Array, Object, String], default: null},
        end: {type: Boolean, default: !1},
        fill: {type: Boolean, default: !1},
        id: {type: String, default: null},
        justified: {type: Boolean, default: !1},
        lazy: {type: Boolean, default: !1},
        navClass: {type: [Array, Object, String], default: null},
        navWrapperClass: {type: [Array, Object, String], default: null},
        noFade: {type: Boolean, default: !1},
        noNavStyle: {type: Boolean, default: !1},
        pills: {type: Boolean, default: !1},
        small: {type: Boolean, default: !1},
        tag: {type: String, default: 'div'},
        vertical: {type: Boolean, default: !1},
        modelValue: {type: Number, default: -1},
      },
      emits: ['update:modelValue', 'activate-tab', 'click'],
      setup(M, {slots: A, emit: D}) {
        const g = I.ref(M.modelValue),
          N = I.ref(''),
          L = I.computed({
            get: () => g.value,
            set: (i) => {
              ;(g.value = i),
                j.value.length > 0 && i >= 0 && i < j.value.length
                  ? (N.value = j.value[i].buttonId)
                  : (N.value = ''),
                D('update:modelValue', i)
            },
          }),
          j = I.computed(() => {
            let i = []
            return (
              A.default &&
                (i = lT(A).map((C, x) => {
                  C.props || (C.props = {})
                  const w = C.props['button-id'] || J('tab'),
                    e = C.props.id || J(),
                    a = L.value > -1 ? x === L.value : C.props.active === '',
                    U = C.props['title-item-class'],
                    o = C.props['title-link-attributes']
                  return {
                    buttonId: w,
                    contentId: e,
                    active: a,
                    disabled: C.props.disabled === '',
                    navItemClasses: [
                      {active: a, disabled: C.props.disabled === ''},
                      a && M.activeNavItemClass ? M.activeNavItemClass : null,
                      C.props['title-link-class'],
                    ],
                    tabClasses: [
                      {fade: !M.noFade},
                      a && M.activeTabClass ? M.activeTabClass : null,
                    ],
                    target: `#${e}`,
                    title: C.props.title,
                    titleItemClass: U,
                    titleLinkAttributes: o,
                    onClick: C.props.onClick,
                    tab: C,
                  }
                })),
              i
            )
          }),
          S = I.computed(() => !((j == null ? void 0 : j.value) && j.value.length > 0)),
          u = I.computed(() => ({'d-flex align-items-start': M.vertical})),
          T = I.computed(() => ({
            'nav-pills': M.pills,
            'flex-column me-3': M.vertical,
            [`justify-content-${M.align}`]: !!M.align,
            'nav-fill': M.fill,
            'card-header-tabs': M.card,
            'nav-justified': M.justified,
            'nav-tabs': !M.noNavStyle && !M.pills,
            'small': M.small,
          })),
          E = (i) => {
            let C = !1
            if (
              i !== void 0 &&
              i > -1 &&
              i < j.value.length &&
              !j.value[i].disabled &&
              (L.value < 0 || j.value[i].buttonId !== N.value)
            ) {
              const x = new DI('activate-tab', {cancelable: !0, vueTarget: this})
              D('activate-tab', i, L.value, x), x.defaultPrevented || ((L.value = i), (C = !0))
            }
            return !C && M.modelValue !== L.value && D('update:modelValue', L.value), C
          },
          t = (i, C) => {
            var x
            E(C),
              C >= 0 &&
                !j.value[C].disabled &&
                ((x = j.value[C]) == null ? void 0 : x.onClick) &&
                uN(j.value[C].onClick) &&
                j.value[C].onClick(i)
          }
        return (
          E(g.value),
          I.watch(
            () => M.modelValue,
            (i, C) => {
              if (i === C) return
              if (((i = zA(i, -1)), (C = zA(C, -1)), j.value.length <= 0)) {
                L.value = -1
                return
              }
              const x = i > C
              let w = i
              const e = j.value.length - 1
              for (; w >= 0 && w <= e && j.value[w].disabled; ) w += x ? 1 : -1
              if (w < 0) {
                E(0)
                return
              }
              if (w >= j.value.length) {
                E(j.value.length - 1)
                return
              }
              E(w)
            }
          ),
          I.watch(
            () => j.value,
            () => {
              let i = j.value.map((C) => C.active && !C.disabled).lastIndexOf(!0)
              i < 0 &&
                (L.value >= j.value.length
                  ? (i = j.value.map((C) => !C.disabled).lastIndexOf(!0))
                  : j.value[L.value] && !j.value[L.value].disabled && (i = L.value)),
                i < 0 && (i = j.value.map((C) => !C.disabled).indexOf(!0)),
                j.value.forEach((C, x) => (C.active = x === i)),
                E(i)
            }
          ),
          I.onMounted(() => {
            if (L.value < 0 && j.value.length > 0 && !j.value.some((i) => i.active)) {
              const i = j.value.map((C) => !C.disabled).indexOf(!0)
              E(i >= 0 ? i : -1)
            }
          }),
          I.provide($L, {lazy: M.lazy, card: M.card}),
          {tabs: j, showEmpty: S, classes: u, navTabsClasses: T, tabIndex: L, handleClick: t}
        )
      },
    }),
    oT = ['id', 'data-bs-target', 'aria-controls', 'aria-selected', 'onClick']
  function OT(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {id: M.id, class: I.normalizeClass(['tabs', M.classes])},
        {
          default: I.withCtx(() => [
            M.end
              ? (I.openBlock(),
                I.createElementBlock(
                  'div',
                  {key: 0, class: I.normalizeClass(['tab-content', M.contentClass])},
                  [
                    (I.openBlock(!0),
                    I.createElementBlock(
                      I.Fragment,
                      null,
                      I.renderList(
                        M.tabs,
                        ({tab: j, contentId: S, tabClasses: u, active: T}, E) => (
                          I.openBlock(),
                          I.createBlock(
                            I.resolveDynamicComponent(j),
                            {key: E, id: S, class: I.normalizeClass(u), active: T},
                            null,
                            8,
                            ['id', 'class', 'active']
                          )
                        )
                      ),
                      128
                    )),
                    M.showEmpty
                      ? (I.openBlock(),
                        I.createElementBlock(
                          'div',
                          {
                            key: 'bv-empty-tab',
                            class: I.normalizeClass(['tab-pane active', {'card-body': M.card}]),
                          },
                          [I.renderSlot(M.$slots, 'empty')],
                          2
                        ))
                      : I.createCommentVNode('', !0),
                  ],
                  2
                ))
              : I.createCommentVNode('', !0),
            I.createElementVNode(
              'div',
              {
                class: I.normalizeClass([
                  M.navWrapperClass,
                  {'card-header': M.card, 'ms-auto': M.vertical && M.end},
                ]),
              },
              [
                I.createElementVNode(
                  'ul',
                  {
                    class: I.normalizeClass(['nav', [M.navTabsClasses, M.navClass]]),
                    role: 'tablist',
                  },
                  [
                    I.renderSlot(M.$slots, 'tabs-start'),
                    (I.openBlock(!0),
                    I.createElementBlock(
                      I.Fragment,
                      null,
                      I.renderList(
                        M.tabs,
                        (
                          {
                            tab: j,
                            buttonId: S,
                            contentId: u,
                            navItemClasses: T,
                            active: E,
                            target: t,
                          },
                          i
                        ) => (
                          I.openBlock(),
                          I.createElementBlock(
                            'li',
                            {
                              key: i,
                              class: I.normalizeClass(['nav-item', j.props['title-item-class']]),
                            },
                            [
                              I.createElementVNode(
                                'a',
                                I.mergeProps(
                                  {
                                    'id': S,
                                    'class': ['nav-link', T],
                                    'data-bs-toggle': 'tab',
                                    'data-bs-target': t,
                                    'href': '#',
                                    'role': 'tab',
                                    'aria-controls': u,
                                    'aria-selected': E,
                                  },
                                  j.props['title-link-attributes'],
                                  {onClick: I.withModifiers((C) => M.handleClick(C, i), ['stop'])}
                                ),
                                [
                                  j.children && j.children.title
                                    ? (I.openBlock(),
                                      I.createBlock(I.resolveDynamicComponent(j.children.title), {
                                        key: 0,
                                      }))
                                    : (I.openBlock(),
                                      I.createElementBlock(
                                        I.Fragment,
                                        {key: 1},
                                        [I.createTextVNode(I.toDisplayString(j.props.title), 1)],
                                        64
                                      )),
                                ],
                                16,
                                oT
                              ),
                            ],
                            2
                          )
                        )
                      ),
                      128
                    )),
                    I.renderSlot(M.$slots, 'tabs-end'),
                  ],
                  2
                ),
              ],
              2
            ),
            M.end
              ? I.createCommentVNode('', !0)
              : (I.openBlock(),
                I.createElementBlock(
                  'div',
                  {key: 1, class: I.normalizeClass(['tab-content', M.contentClass])},
                  [
                    (I.openBlock(!0),
                    I.createElementBlock(
                      I.Fragment,
                      null,
                      I.renderList(
                        M.tabs,
                        ({tab: j, contentId: S, tabClasses: u, active: T}, E) => (
                          I.openBlock(),
                          I.createBlock(
                            I.resolveDynamicComponent(j),
                            {key: E, id: S, class: I.normalizeClass(u), active: T},
                            null,
                            8,
                            ['id', 'class', 'active']
                          )
                        )
                      ),
                      128
                    )),
                    M.showEmpty
                      ? (I.openBlock(),
                        I.createElementBlock(
                          'div',
                          {
                            key: 'bv-empty-tab',
                            class: I.normalizeClass(['tab-pane active', {'card-body': M.card}]),
                          },
                          [I.renderSlot(M.$slots, 'empty')],
                          2
                        ))
                      : I.createCommentVNode('', !0),
                  ],
                  2
                )),
          ]),
          _: 3,
        },
        8,
        ['id', 'class']
      )
    )
  }
  var qL = c(sT, [['render', OT]])
  const mT = I.defineComponent({
    name: 'BTab',
    props: {
      active: {type: Boolean, default: !1},
      buttonId: {type: String, default: null},
      disabled: {type: Boolean, default: !1},
      id: {type: String},
      lazy: {type: Boolean, default: !1},
      noBody: {type: [Boolean, String], default: !1},
      tag: {type: String, default: 'div'},
      title: {type: String},
      titleItemClass: {type: [Array, Object, String], default: null},
      titleLinkAttributes: {type: Object, default: null},
      titleLinkClass: {type: [Array, Object, String], default: null},
    },
    setup(M) {
      const A = I.inject($L),
        D = I.computed(() => (A == null ? void 0 : A.lazy) || M.lazy),
        g = I.computed(() => M.active && !M.disabled),
        N = I.computed(() => g.value || !D.value)
      return {
        classes: I.computed(() => ({
          'active': M.active,
          'show': M.active,
          'card-body': A.card && M.noBody === !1,
        })),
        computedLazy: D,
        computedActive: g,
        showSlot: N,
      }
    },
  })
  function dT(M, A, D, g, N, L) {
    return (
      I.openBlock(),
      I.createBlock(
        I.resolveDynamicComponent(M.tag),
        {
          'id': M.id,
          'class': I.normalizeClass(['tab-pane', M.classes]),
          'role': 'tabpanel',
          'aria-labelledby': 'profile-tab',
        },
        {
          default: I.withCtx(() => [
            M.showSlot ? I.renderSlot(M.$slots, 'default', {key: 0}) : I.createCommentVNode('', !0),
          ]),
          _: 3,
        },
        8,
        ['id', 'class']
      )
    )
  }
  var KL = c(mT, [['render', dT]])
  const nT = () => ({
      normaliseFields: (A, D) => {
        const g = []
        return !(A == null ? void 0 : A.length) && (D == null ? void 0 : D.length)
          ? (Object.keys(D[0]).forEach((N) => g.push({key: N, label: iN(N)})), g)
          : (Array.isArray(A) &&
              A.forEach((N) => {
                typeof N == 'string'
                  ? g.push({key: N, label: iN(N)})
                  : GC(N) && N.key && KM(N.key) && g.push(z({}, N))
              }),
            g)
      },
    }),
    bT = I.defineComponent({
      name: 'BTable',
      props: {
        align: {type: String},
        caption: {type: String},
        captionTop: {type: Boolean, default: !1},
        borderless: {type: Boolean, default: !1},
        bordered: {type: Boolean, default: !1},
        borderVariant: {type: String},
        dark: {type: Boolean, default: !1},
        fields: {type: Array, default: () => []},
        footClone: {type: Boolean, default: !1},
        hover: {type: Boolean, default: !1},
        items: {type: Array, default: () => []},
        responsive: {type: [Boolean, String], default: !1},
        small: {type: Boolean, default: !1},
        striped: {type: Boolean, default: !1},
        variant: {type: String},
      },
      setup(M, {slots: A}) {
        const D = I.computed(() => ({
            [`align-${M.align}`]: M.align,
            [`table-${M.variant}`]: M.variant,
            'table-striped': M.striped,
            'table-hover': M.hover,
            'table-dark': M.dark,
            'table-bordered': M.bordered,
            [`border-${M.borderVariant}`]: M.borderVariant,
            'table-borderless': M.borderless,
            'table-sm': M.small,
            'caption-top': M.captionTop,
          })),
          g = nT(),
          N = I.computed(() => g.normaliseFields(M.fields, M.items))
        return () => {
          const L = I.h(
              'thead',
              I.h(
                'tr',
                N.value.map((T) =>
                  I.h(
                    'th',
                    h(z({}, T.thAttr), {
                      scope: 'col',
                      class: [T.class, T.thClass, T.variant ? `table-${T.variant}` : ''],
                      title: T.headerTitle,
                      abbr: T.headerAbbr,
                      style: T.thStyle,
                    }),
                    T.label
                  )
                )
              )
            ),
            j = [
              I.h(
                'tbody',
                M.items.map((T, E) =>
                  I.h(
                    'tr',
                    N.value.map((t) => {
                      var x
                      const i = `cell(${t.key})`
                      let C = T[t.key]
                      return (
                        A[i] &&
                          (C =
                            (x = A[i]) == null
                              ? void 0
                              : x.call(A, {value: T[t.key], index: E, item: T, items: M.items})),
                        I.h(
                          'td',
                          h(z({}, t.tdAttr), {
                            class: [t.class, t.tdClass, t.variant ? `table-${t.variant}` : ''],
                          }),
                          C
                        )
                      )
                    })
                  )
                )
              ),
            ],
            S = [L, j]
          if (A['table-caption']) S.push(I.h('caption', A['table-caption']()))
          else if (M.caption) {
            const T = I.h('caption', M.caption)
            S.push(T)
          }
          if (M.footClone) {
            const T = I.h(
              'tfoot',
              I.h(
                'tr',
                N.value.map((E) =>
                  I.h(
                    'th',
                    h(z({}, E.thAttr), {
                      scope: 'col',
                      class: [E.class, E.thClass, E.variant ? `table-${E.variant}` : ''],
                      title: E.headerTitle,
                      abbr: E.headerAbbr,
                      style: E.thStyle,
                    }),
                    E.label
                  )
                )
              )
            )
            S.push(T)
          }
          const u = I.h('table', {class: ['table', D.value]}, S)
          return M.responsive
            ? I.h(
                'div',
                {
                  class: {
                    'table-responsive': typeof M.responsive == 'boolean',
                    [`table-responsive-${M.responsive}`]: typeof M.responsive == 'string',
                  },
                },
                u
              )
            : u
        }
      },
    })
  function hT(M, A, D, g, N, L) {
    return I.openBlock(), I.createElementBlock('div')
  }
  var Mj = c(bT, [['render', hT]]),
    WT = {
      BAccordion: ND,
      BAccordionItem: xN,
      BAlert: yN,
      BAvatar: zN,
      BAvatarGroup: eN,
      BBadge: sN,
      BBreadcrumb: mN,
      BBreadcrumbItem: FI,
      BButton: fA,
      BButtonGroup: dN,
      BButtonToolbar: nN,
      BCard: bN,
      BCardBody: hN,
      BCardFooter: WN,
      BCardGroup: kN,
      BCardHeader: QN,
      BCardImg: GN,
      BCardSubTitle: rN,
      BCardText: JN,
      BCardTitle: pN,
      BCarousel: VN,
      BCarouselSlide: BN,
      BCloseButton: PN,
      BCol: MA,
      BCollapse: VI,
      BContainer: HN,
      BDropdown: RN,
      BDropdownDivider: _N,
      BDropdownForm: $N,
      BDropdownGroup: qN,
      BDropdownHeader: KN,
      BDropdownItem: ML,
      BDropdownItemButton: AL,
      BDropdownText: IL,
      BForm: DL,
      BFormCheckbox: tL,
      BFormCheckboxGroup: iL,
      BFormFloatingLabel: wL,
      BFormGroup: TL,
      BFormInput: eL,
      BFormInvalidFeedback: $A,
      BFormRadio: zL,
      BFormRadioGroup: cL,
      BFormRow: cA,
      BFormSelect: aL,
      BFormSelectOption: KA,
      BFormSelectOptionGroup: $I,
      BFormText: qA,
      BFormTextarea: UL,
      BFormValidFeedback: _A,
      BIcon: lL,
      BIconstack: sL,
      BImg: oL,
      BInputGroup: OL,
      BInputGroupAddon: AI,
      BInputGroupAppend: mL,
      BInputGroupPrepend: dL,
      BInputGroupText: qI,
      BLink: aN,
      BListGroup: bL,
      BListGroupItem: hL,
      BModal: WL,
      BNav: kL,
      BNavItem: QL,
      BOffcanvas: GL,
      BOverlay: JL,
      BPagination: PL,
      BPopover: XL,
      BProgress: vL,
      BProgressBar: fL,
      BRow: RL,
      BSpinner: _L,
      BTab: KL,
      BTable: Mj,
      BTabs: qL,
      BTransition: II,
    },
    kT = {
      mounted(M, A) {
        M.setAttribute('data-bs-toggle', 'modal'), M.setAttribute('data-bs-target', `#${A.arg}`)
      },
    }
  const QT = {
    mounted(M, A) {
      let D = 'right'
      const g = []
      A.modifiers.left
        ? (D = 'left')
        : A.modifiers.right
        ? (D = 'right')
        : A.modifiers.bottom
        ? (D = 'bottom')
        : A.modifiers.top && (D = 'top'),
        A.modifiers.manual
          ? g.push('manual')
          : (A.modifiers.click && g.push('click'),
            A.modifiers.hover && g.push('hover'),
            A.modifiers.focus && g.push('focus')),
        M.setAttribute('data-bs-toggle', 'popover'),
        new _M(M, {trigger: g.length === 0 ? 'click' : g.join(' '), placement: D, content: A.value})
    },
    unmounted(M) {
      const A = _M.getInstance(M)
      A == null || A.dispose()
    },
  }
  function GT(M) {
    if (M.manual) return 'manual'
    const A = []
    return (
      M.click && A.push('click'),
      M.hover && A.push('hover'),
      M.focus && A.push('focus'),
      A.length > 0 ? A.join(' ') : 'hover focus'
    )
  }
  function rT(M) {
    return M.left ? 'left' : M.right ? 'right' : M.bottom ? 'bottom' : 'top'
  }
  function JT(M) {
    return (M == null ? void 0 : M.delay) ? M.delay : 50
  }
  const pT = {
      beforeMount(M, A) {
        M.setAttribute('data-bs-toogle', 'tooltip')
        const D = /<("[^"]*"|'[^']*'|[^'">])*>/.test(M.title),
          g = GT(A.modifiers),
          N = rT(A.modifiers),
          L = JT(A.value)
        new iM(M, {trigger: g, placement: N, delay: L, html: D})
      },
      updated(M) {
        const A = M.getAttribute('title')
        if (A !== '') {
          const D = iM.getInstance(M)
          D == null || D.hide(),
            M.setAttribute('data-bs-original-title', A || ''),
            M.setAttribute('title', '')
        }
      },
      unmounted(M) {
        const A = iM.getInstance(M)
        A == null || A.dispose()
      },
    },
    gI = new Map()
  function Aj(M) {
    if (gI.has(M)) {
      const A = gI.get(M)
      A && A.stop && A.stop(), gI.delete(M)
    }
  }
  function Ij(M, A) {
    const D = {margin: '0px', once: !1, callback: A.value}
    Object.keys(A.modifiers).forEach((N) => {
      Number.isInteger(N) ? (D.margin = `${N}px`) : N.toLowerCase() === 'once' && (D.once = !0)
    }),
      Aj(M)
    const g = new VT(M, D.margin, D.once, D.callback, A.instance)
    gI.set(M, g)
  }
  const ZT = {
    beforeMount(M, A) {
      Ij(M, A)
    },
    updated(M, A) {
      Ij(M, A)
    },
    unmounted(M) {
      Aj(M)
    },
  }
  class VT {
    constructor(A, D, g, N, L) {
      ;(this.element = A),
        (this.margin = D),
        (this.once = g),
        (this.callback = N),
        (this.instance = L),
        this.createObserver()
    }
    createObserver() {
      if ((this.observer && this.stop(), !(this.doneOnce || typeof this.callback != 'function'))) {
        try {
          this.observer = new IntersectionObserver(this.handler.bind(this), {
            root: null,
            rootMargin: this.margin,
            threshold: 0,
          })
        } catch {
          console.error('Intersection Observer not supported'),
            (this.doneOnce = !0),
            (this.observer = void 0),
            this.callback(null)
          return
        }
        this.instance.$nextTick(() => {
          this.observer && this.observer.observe(this.element)
        })
      }
    }
    handler(A) {
      const [D] = A,
        g = Boolean(D.isIntersecting || D.intersectionRatio > 0)
      g !== this.visible &&
        ((this.visible = g),
        this.callback(g),
        this.once && this.visible && ((this.doneOnce = !0), this.stop()))
    }
    stop() {
      this.observer && this.observer.disconnect(), (this.observer = null)
    }
  }
  var BT = {
      mounted(M, A) {
        A.value !== !1 && M.focus()
      },
    },
    PT = {BModal: kT, BPopover: QT, BToggle: TN, BTooltip: pT, BVisible: ZT, focus: BT},
    Y0 = ''
  const Dj = {
    install(M, A = {}) {
      Object.entries(WT).forEach(([D, g]) => {
        M.component(D, g)
      }),
        Object.entries(PT).forEach(([D, g]) => {
          M.directive(D, g)
        }),
        Ot(M)
    },
  }
  ;(Y.BAccordion = ND),
    (Y.BAccordionItem = xN),
    (Y.BAlert = yN),
    (Y.BAvatar = zN),
    (Y.BAvatarGroup = eN),
    (Y.BBadge = sN),
    (Y.BBreadcrumb = mN),
    (Y.BBreadcrumbItem = FI),
    (Y.BButton = fA),
    (Y.BButtonGroup = dN),
    (Y.BButtonToolbar = nN),
    (Y.BCard = bN),
    (Y.BCardBody = hN),
    (Y.BCardFooter = WN),
    (Y.BCardGroup = kN),
    (Y.BCardHeader = QN),
    (Y.BCardImg = GN),
    (Y.BCardSubTitle = rN),
    (Y.BCardText = JN),
    (Y.BCardTitle = pN),
    (Y.BCarousel = VN),
    (Y.BCarouselSlide = BN),
    (Y.BCloseButton = PN),
    (Y.BCol = MA),
    (Y.BCollapse = VI),
    (Y.BContainer = HN),
    (Y.BDropdown = RN),
    (Y.BDropdownDivider = _N),
    (Y.BDropdownForm = $N),
    (Y.BDropdownGroup = qN),
    (Y.BDropdownHeader = KN),
    (Y.BDropdownItem = ML),
    (Y.BDropdownItemButton = AL),
    (Y.BDropdownText = IL),
    (Y.BForm = DL),
    (Y.BFormCheckbox = tL),
    (Y.BFormCheckboxGroup = iL),
    (Y.BFormFloatingLabel = wL),
    (Y.BFormGroup = TL),
    (Y.BFormInput = eL),
    (Y.BFormInvalidFeedback = $A),
    (Y.BFormRadio = zL),
    (Y.BFormRadioGroup = cL),
    (Y.BFormRow = cA),
    (Y.BFormSelect = aL),
    (Y.BFormSelectOption = KA),
    (Y.BFormSelectOptionGroup = $I),
    (Y.BFormText = qA),
    (Y.BFormTextarea = UL),
    (Y.BFormValidFeedback = _A),
    (Y.BIcon = lL),
    (Y.BIconstack = sL),
    (Y.BImg = oL),
    (Y.BInputGroup = OL),
    (Y.BInputGroupAddon = AI),
    (Y.BInputGroupAppend = mL),
    (Y.BInputGroupPrepend = dL),
    (Y.BInputGroupText = qI),
    (Y.BLink = aN),
    (Y.BListGroup = bL),
    (Y.BListGroupItem = hL),
    (Y.BModal = WL),
    (Y.BNav = kL),
    (Y.BNavItem = QL),
    (Y.BOffcanvas = GL),
    (Y.BOverlay = JL),
    (Y.BPagination = PL),
    (Y.BPopover = XL),
    (Y.BProgress = vL),
    (Y.BProgressBar = fL),
    (Y.BRow = RL),
    (Y.BSpinner = _L),
    (Y.BTab = KL),
    (Y.BTable = Mj),
    (Y.BTabs = qL),
    (Y.BTransition = II),
    (Y.BootstrapVue3 = Dj),
    (Y.default = Dj),
    Object.defineProperty(Y, '__esModule', {value: !0}),
    (Y[Symbol.toStringTag] = 'Module')
})