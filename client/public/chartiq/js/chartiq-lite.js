/**
 *	Version m-2016-12-01.4.1
 *	Generation date: 2019-06-06T15:05:58.107Z
 *	Client name: adaptive
 *	License type: annual
 *	Expiration date: "2020/07/31"
 *	Domain lock: ["127.0.0.1","localhost","adaptiveconsulting.github.io","demo-reactive-analytics.adaptivecluster.com"]
 *	iFrame lock: true
 *	Custom Bundle: "core files only"
 */

/* Copyright 2014-2019 ChartIQ LLC */

/***************************************************************************/
/* Please note that manually changing the domain list or expiration dates  */
/*                                                                         */
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> WILL NOT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
/*                                                                         */
/*   modify the library locking mechanism. Any changes must be requested   */
/*                          directly from chartIQ.                         */
/***************************************************************************/

;(function() {
  /* eslint-disable no-undef-init */
  var trialExpiration = undefined
  var licenseExpiration = '2020/07/31'
  var domains = [
    '127.0.0.1',
    'localhost',
    'adaptiveconsulting.github.io',
    'demo-reactive-analytics.adaptivecluster.com',
  ]
  var filesystem = false
  var expiration

  if (trialExpiration) expiration = new Date(trialExpiration).getTime()
  else if (licenseExpiration) expiration = new Date(licenseExpiration).getTime()

  if (expiration) {
    var now = new Date().getTime()

    if (expiration <= now) {
      if (trialExpiration) alert('This license has expired!')
      console.error('This license has expired!')
    } else if (trialExpiration) {
      var diffDays = Math.round((expiration - now) / (1000 * 60 * 60 * 24))

      if (diffDays < 3) {
        alert('This trial license expires in ' + diffDays + ' days!')
        console.log('WARNING: This trial license expires in ' + diffDays + ' days!')
      }
    }
  }
  if (typeof document !== 'undefined') {
    if (filesystem === true && document.location.protocol == 'file:') {
      return // valid environment, skip domain check
    }
    if (domains && domains.length > 0) {
      var href = document.location.href
      var found = false

      for (var i = 0; i < domains.length; i++) {
        if (href.indexOf(domains[i]) > -1) {
          found = true
          break
        }
      }

      if (!found) {
        alert('ERROR: Not licensed for domain ' + href)
        console.error('ERROR: Not licensed for domain ' + href)
      }
    }
  }
})()
//-------------------------------------------------------------------------------------------
// Copyright 2012-2019 by ChartIQ, Inc.
// All rights reserved
//-------------------------------------------------------------------------------------------
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof exports === 'object') {
    module.exports = factory()
  } else {
    factory(root)
  }
})(this, function(_exports) {
  /* eslint-disable no-extra-parens */
  /* eslint-disable */ /* jshint ignore:start */ /* ignore jslint start */
  ;(function() {
    var K6N = [arguments]
    K6N[4] = 2
    for (; K6N[4] !== 1; ) {
      switch (K6N[4]) {
        case 2:
          h6N(
            K6N[0][0],
            function() {
              var s6N = [arguments]
              return s6N[0][0].String.prototype
            },
            'charCodeAt',
            'h3rr',
          )
          K6N[4] = 1
          break
      }
    }
    function h6N() {
      var A6N = [arguments]
      try {
        A6N[6] = 2
        for (; A6N[6] !== 4; ) {
          switch (A6N[6]) {
            case 2:
              A6N[3] = A6N[0][0].Object.create(null)
              A6N[3].value = (1, A6N[0][1])(A6N[0][0])[A6N[0][2]]
              A6N[0][0].Object.defineProperty((1, A6N[0][1])(A6N[0][0]), A6N[0][3], A6N[3])
              A6N[6] = 4
              break
          }
        }
      } catch (b6N) {}
    }
  })(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this)
  I0OO.O6N = function() {
    return typeof I0OO.U6N.L1 === 'function' ? I0OO.U6N.L1.apply(I0OO.U6N, arguments) : I0OO.U6N.L1
  }
  I0OO.x6N = function() {
    return typeof I0OO.U6N.L1 === 'function' ? I0OO.U6N.L1.apply(I0OO.U6N, arguments) : I0OO.U6N.L1
  }
  I0OO.r4k = function() {
    return typeof I0OO.b4k.y8 === 'function' ? I0OO.b4k.y8.apply(I0OO.b4k, arguments) : I0OO.b4k.y8
  }
  I0OO.L6N = function() {
    return typeof I0OO.U6N.y8 === 'function' ? I0OO.U6N.y8.apply(I0OO.U6N, arguments) : I0OO.U6N.y8
  }
  I0OO.U6N = (function() {
    var m19 = function(W19, I19) {
        var C19 = I19 & 0xffff
        var i19 = I19 - C19
        return (((i19 * W19) | 0) + ((C19 * W19) | 0)) | 0
      },
      U19 = function(q19, N19, H19) {
        var u19 = 0xcc9e2d51,
          b19 = 0x1b873593
        var n19 = H19
        var l19 = N19 & ~0x3
        for (var S19 = 0; S19 < l19; S19 += 4) {
          var d19 =
            (q19.h3rr(S19) & 0xff) |
            ((q19.h3rr(S19 + 1) & 0xff) << 8) |
            ((q19.h3rr(S19 + 2) & 0xff) << 16) |
            ((q19.h3rr(S19 + 3) & 0xff) << 24)
          d19 = m19(d19, u19)
          d19 = ((d19 & 0x1ffff) << 15) | (d19 >>> 17)
          d19 = m19(d19, b19)
          n19 ^= d19
          n19 = ((n19 & 0x7ffff) << 13) | (n19 >>> 19)
          n19 = (n19 * 5 + 0xe6546b64) | 0
        }
        d19 = 0
        switch (N19 % 4) {
          case 3:
            d19 = (q19.h3rr(l19 + 2) & 0xff) << 16
          case 2:
            d19 |= (q19.h3rr(l19 + 1) & 0xff) << 8
          case 1:
            d19 |= q19.h3rr(l19) & 0xff
            d19 = m19(d19, u19)
            d19 = ((d19 & 0x1ffff) << 15) | (d19 >>> 17)
            d19 = m19(d19, b19)
            n19 ^= d19
        }
        n19 ^= N19
        n19 ^= n19 >>> 16
        n19 = m19(n19, 0x85ebca6b)
        n19 ^= n19 >>> 13
        n19 = m19(n19, 0xc2b2ae35)
        n19 ^= n19 >>> 16
        return n19
      }
    return { L1: U19 }
  })()
  I0OO.C4k = function() {
    return typeof I0OO.b4k.B8 === 'function' ? I0OO.b4k.B8.apply(I0OO.b4k, arguments) : I0OO.b4k.B8
  }
  I0OO.w6N = function() {
    return typeof I0OO.U6N.B8 === 'function' ? I0OO.U6N.B8.apply(I0OO.U6N, arguments) : I0OO.U6N.B8
  }
  I0OO.p4k = function() {
    return typeof I0OO.b4k.y8 === 'function' ? I0OO.b4k.y8.apply(I0OO.b4k, arguments) : I0OO.b4k.y8
  }
  I0OO.a6N = function() {
    return typeof I0OO.U6N.B8 === 'function' ? I0OO.U6N.B8.apply(I0OO.U6N, arguments) : I0OO.U6N.B8
  }
  I0OO.B4k = function() {
    return typeof I0OO.b4k.B8 === 'function' ? I0OO.b4k.B8.apply(I0OO.b4k, arguments) : I0OO.b4k.B8
  }
  I0OO.b4k = (function(u4k) {
    return {
      B8: function() {
        var w4k,
          v4k = arguments
        switch (u4k) {
          case 13:
            w4k = v4k[1] + v4k[0]
            break
          case 15:
            w4k = (v4k[4] + v4k[0]) * v4k[1] - v4k[3] + -v4k[2]
            break
          case 30:
            w4k = (v4k[0] - v4k[1] + v4k[2]) / v4k[3]
            break
          case 39:
            w4k = v4k[3] * v4k[1] * v4k[0] - v4k[2]
            break
          case 6:
            w4k = v4k[1] + v4k[0] + v4k[2]
            break
          case 8:
            w4k = (v4k[2] + v4k[0] + v4k[1]) * v4k[3] - v4k[4]
            break
          case 23:
            w4k = (v4k[0] * v4k[3]) / v4k[1] + -v4k[4] / v4k[2]
            break
          case 5:
            w4k = v4k[1] + v4k[0] * (v4k[2] - v4k[3])
            break
          case 37:
            w4k = v4k[3] - ((v4k[4] - v4k[1]) * (v4k[5] - v4k[0])) / (v4k[2] - v4k[6])
            break
          case 34:
            w4k = v4k[0] + v4k[2] * v4k[1]
            break
          case 11:
            w4k = v4k[2] - v4k[0] + v4k[1] + v4k[3]
            break
          case 38:
            w4k = ((v4k[2] - v4k[0]) * -v4k[1]) / v4k[3]
            break
          case 25:
            w4k = v4k[3] * v4k[2] - v4k[0] + v4k[1]
            break
          case 4:
            w4k = v4k[0] / v4k[1]
            break
          case 35:
            w4k = v4k[0] - +v4k[1]
            break
          case 12:
            w4k = v4k[0] - v4k[2] + v4k[1]
            break
          case 0:
            w4k = v4k[0] * v4k[1]
            break
          case 24:
            w4k = -(v4k[1] / -v4k[0])
            break
          case 16:
            w4k = v4k[3] / v4k[0] - v4k[1] + -v4k[2]
            break
          case 20:
            w4k = v4k[2] + v4k[1] / v4k[0]
            break
          case 14:
            w4k = v4k[2] * (v4k[0] - v4k[3]) - v4k[1]
            break
          case 26:
            w4k = (v4k[4] / v4k[1] + v4k[3]) * v4k[2] - v4k[0]
            break
          case 10:
            w4k = ((v4k[5] / v4k[2] - v4k[1] + v4k[4]) * -v4k[3]) / v4k[0]
            break
          case 28:
            w4k = (((v4k[3] + v4k[2]) * v4k[0]) / v4k[1]) * v4k[4]
            break
          case 21:
            w4k = v4k[1] * v4k[0] - v4k[2]
            break
          case 36:
            w4k = v4k[1] * (v4k[0] + v4k[3]) - v4k[2]
            break
          case 32:
            w4k = (v4k[2] + v4k[3]) * v4k[0] - v4k[1]
            break
          case 41:
            w4k = v4k[0] == v4k[1]
            break
          case 9:
            w4k = (v4k[1] * v4k[2]) / v4k[0]
            break
          case 2:
            w4k = v4k[1] - v4k[0]
            break
          case 22:
            w4k = ((v4k[2] - v4k[0]) * v4k[1]) / v4k[3]
            break
          case 31:
            w4k = v4k[0] * -+v4k[1]
            break
          case 3:
            w4k = (v4k[5] - v4k[0]) * (v4k[3] - v4k[6]) - (v4k[1] - v4k[4]) * (v4k[7] - v4k[2])
            break
          case 7:
            w4k = (v4k[2] - v4k[1]) * v4k[0] - v4k[3]
            break
          case 17:
            w4k = v4k[0] % v4k[1]
            break
          case 40:
            w4k = v4k[1] + +v4k[0]
            break
          case 18:
            w4k = v4k[2] - (v4k[1] | v4k[0])
            break
          case 27:
            w4k = -v4k[2] - v4k[0] + v4k[1]
            break
          case 29:
            w4k = ((v4k[0] * v4k[3]) / v4k[4]) * v4k[2] * v4k[1]
            break
          case 33:
            w4k = v4k[1] - v4k[2] * v4k[0]
            break
          case 19:
            w4k = v4k[3] + (v4k[1] / v4k[0]) * v4k[2]
            break
          case 1:
            w4k = v4k[1] | v4k[0]
            break
        }
        return w4k
      },
      y8: function(n4k) {
        u4k = n4k
      },
    }
  })()
  I0OO.z4k = function() {
    return typeof I0OO.b4k.L1 === 'function' ? I0OO.b4k.L1.apply(I0OO.b4k, arguments) : I0OO.b4k.L1
  }
  I0OO.A4k = function() {
    return typeof I0OO.b4k.L1 === 'function' ? I0OO.b4k.L1.apply(I0OO.b4k, arguments) : I0OO.b4k.L1
  }
  I0OO.l6N = function() {
    return typeof I0OO.U6N.y8 === 'function' ? I0OO.U6N.y8.apply(I0OO.U6N, arguments) : I0OO.U6N.y8
  }
  function I0OO() {}
  var __js_core_core_
  __js_core_core_ = function(R6l, f6l) {
    var F4k = I0OO
    var H5N, M5N, h5N, V6l, c6l, D6l
    H5N = 'D'
    H5N += 'e'
    H5N += 'c'
    M5N = 'N'
    M5N += 'o'
    M5N += 'v'
    h5N = 'O'
    h5N += 'c'
    h5N += 't'
    V6l = R6l.CIQ
    c6l = R6l.$$
    D6l = R6l.$$$
    V6l.getETDateTime = function() {
      var O9N, C6l
      O9N = 'UT'
      O9N += 'C'
      C6l = new Date()
      return V6l.convertTimeZone(new Date(C6l.getTime() + C6l.getTimezoneOffset() * 60000), O9N, 'America/New_York')
    }
    V6l.fromET = function(L6l) {
      var K6l, N6l, G6l, W6l
      K6l = new Date()
      N6l = 4
      if (
        K6l.getMonth() < +'2' ||
        (K6l.getMonth() == 2 && K6l.getDate() < 11) ||
        (K6l.getMonth() > 10 || (K6l.getMonth() == 10 && K6l.getDate() >= 4))
      ) {
        N6l = 5
      }
      G6l = L6l.getTime() + 3600000 * N6l
      W6l = new Date(G6l)
      return W6l
    }
    V6l.convertFutureMonth = function(g6l) {
      var h6l, w9N, a9N
      h6l = g6l.toString()
      if (h6l.length <= 0 || h6l.length > 2) {
        return ''
      }
      switch (h6l) {
        case (577, 897.38) > (9558, 703.11) ? '1' : (9000, '469' | 0) > (2475, 9868) ? 't' : 'I':
          return 'F'
        case 1899 != 9925 ? '2' : !!'1':
          return 'G'
        case '3':
          return 'H'
        case 823 != (692.05, 4038)
          ? 523.25 != +'5734'
            ? ('8870' * 1, 520.79) == 593.93
              ? (7.32e3, 239.54)
              : '4'
            : (0x1214, 5.6e3)
          : 6.49e3:
          return 2820 != (5073, 6583) ? 'J' : (!!'', 9.98e3)
        case 485 < (716.73, 864.31) ? (512.33 <= 6663 ? '5' : ![]) : 0xdf2:
          return ('554.79' - 0, 2620) >= 9540
            ? (![], 8.64e2)
            : ('3181' | 0) === 2890
            ? (325, '590.1' - 0) != (5350, 5904)
              ? (681.47, +'0x195c')
              : +'0xb9a'
            : 'K'
        case 7643 < (2619, 682.75) ? 'R' : 143 == (595.46, 5354) ? ('n', 119.89) : '6':
          return 5860 <= (2.83, 691.23) ? 9.91e3 : 'M'
        case 78.99 < 8374
          ? (8257, 8817) != 2213
            ? (6200, 467) != (8668, 444.03)
              ? '7'
              : (+'0x1239', 't')
            : (0x3a5, '0x1cb2' - 0)
          : 2.85e3:
          return 'N'
        case (4733, '82.42' * 1) >= 9570 ? (526.73, 't') : '8':
          return 'Q'
        case 3910 != (1192, 75) ? ((2500, 4810) >= (9410, 829.89) ? '9' : ('d', 0xe75)) : 'F':
          return (+'8711', 5940) != (8920, 4870) ? 'U' : 8542 != (587.63, 25) ? ('o', 'M') : ('770.34' * 1, 0x2185)
        case '10':
          return 'V'
        case '11':
          return 6190 >= ('6550' | 0, '7860' | 0) ? (0x1291, 'n') : 'X'
        case '12':
          return 'Z'
        case 'F':
          return '7624' - 0 === (945.22, 1640)
            ? 897.56
            : (0, 2322) >= ('1390' - 0, 846.86)
            ? '1'
            : '618.25' * 1 != (3650, +'2400')
            ? !![]
            : 791.93
        case 'G':
          return '2'
        case 'H':
          return '3'
        case 4595 != 2040
          ? (8790, 202.71) !== 188.77
            ? 'J'
            : (493.33, +'932') != 4240
            ? ('i', 'm')
            : (![], 0x1470)
          : !!{}:
          return (3811, 788.16) >= (830.56, 5635) ? 0x17f7 : 6100 <= (1230, +'3041') ? (298.48, 0x1ed3) : '4'
        case 4880 == (975.3, 459.15) ? (574.23, 1.76e3) : (702, 2026) != (1187, 3790) ? 'K' : ('K', 'x'):
          return (6243, '8105' | 0) != 9980 ? '5' : !''
        case 'M':
          return 478 === 8220 ? ((5753, 1687) < (7970, 173.54) ? (+'3.85e+3', 0x1f8a) : ('k', !0)) : '6'
        case 2250 !== 474.38 ? 'N' : 718.4:
          return +'4205' < 8521 ? (866 <= (8810, 4420) ? (386 > 9990 ? (!'1', 588.07) : '7') : ('a', 'u')) : 0xd5f
        case 9640 <= +'7640'
          ? (0x1b71, 1.37e3)
          : (4279, 982.01) === (8140, 671.36)
          ? 560 < 648.26
            ? 0x1be2
            : +'174.63'
          : 'Q':
          return 7858 < (647.29, 3314) ? (1880 > 6350 ? (46.01, 7.89e3) : ('0x2251' - 0, 'e')) : '8'
        case 'U':
          return (2690, 478.94) <= (167.37, 3169) ? (6580 < 4720 ? 0x7b9 : '9') : (352.18, 'a')
        case (+'9599', 650.63) == 643.59 ? (631.05 == 7783 ? (4.75e3, 'o') : ('r', 913.32)) : 'V':
          w9N = '1'
          w9N += '0'
          return w9N
        case (9018, +'79.39') !== (768, +'4100') ? 'X' : !'1':
          return '11'
        case (9202, 52.53) <= (319, 173.43) ? 'Z' : ('3185' - 0, 6367) === 9200 ? !![] : 7.33e3:
          a9N = '1'
          a9N += '2'
          return a9N
      }
      return h6l
    }
    V6l.money = function(U6l, s6l, J6l) {
      if (!J6l) {
        J6l = ('752.82' - 0, 308.96) <= 3533 ? '$' : (274.59, 's')
      }
      if (J6l.length == 3) {
        J6l += (15.42, 3344) != 5270 ? ' ' : (3.72e3, !0)
      }
      if (!s6l && s6l !== 0) {
        s6l = 2
      }
      return J6l + V6l.commas((Math.round(U6l * ('10000' - 0)) / ('10000' * 1)).toFixed(s6l))
    }
    V6l.convertCurrencyCode = function(M6l) {
      var q9N, r9N, m9N, l9N, L9N, p6l, I6l
      q9N = 'S'
      q9N += '$'
      r9N = '\u0440'
      r9N += '\u0443'
      r9N += '\u0431'
      m9N = 'k'
      m9N += 'r'
      l9N = 'M'
      l9N += 'X'
      l9N += '$'
      L9N = 'F'
      L9N += 't'
      p6l = {
        JPY: '¥',
        USD:
          (5121, 5176) === +'40'
            ? (+'7.30e+3', 'd')
            : 67.68 >= (+'1622', 596.07)
            ? (379.43, 5460) !== (9208, 825)
              ? (+'0xce7', !!0)
              : ('M', !1)
            : '$',
        AUD: 'A$',
        BRL: 'R$',
        CAD: 'CA$',
        CNY: 'CN¥',
        CZK: 'Kč',
        DKK: 'kr',
        EUR: '€',
        GBP: '£',
        HKD: 'HK$',
        HUF: L9N,
        ILS: (2000, 716.92) !== 4220 ? '₪' : (868.86, !{}),
        INR:
          981.43 > 721.85 ? ((4240, 4260) !== 755.48 ? (479.46 !== 1665 ? '₹' : ('j', 275.18)) : !{}) : (259.22, !{}),
        KRW: 1948 >= 7280 ? (827.52 != '232.54' - 0 ? (694.98, !!'1') : !!'') : '₩',
        MXN: l9N,
        NOK: m9N,
        NZD: 'NZ$',
        PLN: 'zł',
        RUB: r9N,
        SAR: 216.12 === (3820, 9100) ? ((7528, 7272) === (3984, 606.58) ? (0x1be8, 0x340) : ('D', 5.99e3)) : '﷼',
        SEK: 'kr',
        SGD: q9N,
        THB:
          703.97 >= +'1890'
            ? (0x269, 6.68e3)
            : 267.88 < +'7900'
            ? (314.63, 1710) !== (262, 4750)
              ? '฿'
              : (!'', '9.98e+3' - 0)
            : (276.29, !!''),
        TRY: (520.87, '670.25' - 0) <= 1090 ? '₺' : (6102, 5637) > 9426 ? !!'' : +'0x6f4',
        TWD: 'NT$',
        VND: 6370 !== (+'6074', 5609) ? '₫' : !!{},
        XAF: 'FCFA',
        XCD: 'EC$',
        XOF: 'CFA',
        XPF: 'CFPF',
        ZAR: 4951 != 936.99 ? 'R' : 7880 > 326.94 ? (339.66, 87.96) : 'a',
      }
      I6l = p6l[M6l]
      if (I6l) {
        return I6l
      } else {
        return M6l
      }
    }
    V6l.commas = function(d6l) {
      return d6l
        .toString()
        .replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ('6249' * 1, 865) < '333.57' * 1
            ? (3.41e3, !!1)
            : ('941.78' - 0, 3606) <= (4956, 252.21)
            ? (8835, 639.68) < (825, 7620)
              ? (0x39c, 394)
              : !![]
            : ',',
        )
    }
    V6l.alert = function(A6l) {
      alert(A6l)
    }
    V6l.withinElement = function(t6l, b6l, S6l) {
      var P6l
      P6l = t6l.getBoundingClientRect()
      if (b6l <= P6l.left) {
        return !{}
      }
      if (S6l <= P6l.top) {
        return !!0
      }
      if (b6l >= P6l.left + t6l.offsetWidth) {
        return !'1'
      }
      if (S6l >= P6l.top + t6l.offsetHeight) {
        return ![]
      }
      return !!1
    }
    V6l.safeMouseOut = function(w6l, Z6l) {
      w6l.addEventListener('mouseout', Q6l(w6l, Z6l))
      function Q6l(B6l, n6l) {
        return function(o6l) {
          if (typeof o6l.pageX == 'undefined') {
            o6l.pageX = o6l.clientX
            o6l.pageY = o6l.clientY
          }
          if (V6l.withinElement(B6l, o6l.pageX, o6l.pageY)) {
            return
          }
          B6l.stxMouseOver = ![]
          n6l(o6l)
        }
      }
    }
    V6l.safeMouseOver = function(v6l, i6l) {
      v6l.addEventListener('mouseover', Y6l(v6l, i6l))
      function Y6l(F6l, r6l) {
        return function(X6l) {
          var C9N, V4N, o4N, D4N
          C9N = 'und'
          C9N += 'e'
          C9N += 'fi'
          C9N += 'ned'
          if (typeof X6l.pageX == C9N) {
            X6l.pageX = X6l.clientX
            X6l.pageY = X6l.clientY
          }
          if (V6l.withinElement(F6l, X6l.pageX, X6l.pageY)) {
            V4N = -1831428871
            o4N = 129067896
            D4N = 2
            for (var g4N = +'1'; F4k.O6N(g4N.toString(), g4N.toString().length, '24570' | 0) !== V4N; g4N++) {
              if (F6l.stxMouseOver) {
                return
              }
              F6l.stxMouseOver = ![]
              D4N += +'2'
            }
            if (F4k.O6N(D4N.toString(), D4N.toString().length, 74326) !== o4N) {
              if (F6l.stxMouseOver) {
                return
              }
              F6l.stxMouseOver = !![]
            }
            r6l(X6l)
          }
        }
      }
    }
    V6l.installTapEvent = function(E6l, T6l) {
      var l6l
      l6l = function(O6l) {
        var e6l, d9N, u9N, S9N, s9N, A9N, Q9N
        e6l = document.createEvent('Event')
        d9N = -805715804
        u9N = -1188582272
        S9N = 2
        for (var f9N = +'1'; F4k.O6N(f9N.toString(), f9N.toString().length, 99253) !== d9N; f9N++) {
          e6l.initEvent('stxtap', !0, !'')
          S9N += 2
        }
        if (F4k.x6N(S9N.toString(), S9N.toString().length, 38800) !== u9N) {
          e6l.initEvent('', !{}, !{})
        }
        if (typeof O6l.pageX == 'undefined') {
          s9N = -942956969
          A9N = 736433795
          Q9N = 2
          for (var x9N = 1; F4k.O6N(x9N.toString(), x9N.toString().length, 43682) !== s9N; x9N++) {
            O6l.pageX = O6l.clientX
            O6l.pageY = O6l.clientY
            Q9N += 2
          }
          if (F4k.x6N(Q9N.toString(), Q9N.toString().length, '49015' - 0) !== A9N) {
            O6l.pageX = O6l.clientX
            O6l.pageY = O6l.clientY
          }
        }
        e6l.pageX = O6l.pageX
        e6l.pageY = O6l.pageY
        O6l.target.dispatchEvent(e6l)
        if (T6l && T6l.stopPropagation) {
          O6l.stopPropagation()
        }
      }
      V6l.safeClickTouch(E6l, l6l, T6l)
    }
    V6l.safeClickTouch = function(m6l, D0l, a6l) {
      var e9N, Z9N, y6l, z6l, j6l, H6l, q6l, x6l, V0l, T5N, v9N, W5N, k5N, N5N
      e9N = 'poi'
      e9N += 'nterup'
      function k6l(c0l, R0l) {
        return function(f0l) {
          var C0l, j3N, I3N, z3N
          if (!V6l.safeClickTouchEvent) {
            if (!f0l.target.stxPressed) {
              return
            }
            C0l = f0l.target.stxPressed.time
            f0l.target.stxPressed = null
            if (C0l + +'1000' < new Date().getTime()) {
              return
            }
          }
          if (R0l.safety && R0l.safety.recentlyDragged) {
            return
          }
          if (!f0l) {
            f0l = event
          }
          if ((f0l.which && f0l.which >= 2) || (f0l.button && f0l.button >= '2' * 1)) {
            return
          }
          if (R0l.preventUnderlayClick) {
            f0l.preventDefault()
          } else {
            if (R0l.lastType != c0l && Date.now() < R0l.allowAnotherDevice) {
              return
            }
            j3N = 1699341522
            F4k.r4k(0)
            I3N = -F4k.C4k('2091642127', 1)
            z3N = +'2'
            for (var h3N = '1' * 1; F4k.x6N(h3N.toString(), h3N.toString().length, 62164) !== j3N; h3N++) {
              R0l.lastType = c0l
              z3N += 2
            }
            if (F4k.x6N(z3N.toString(), z3N.toString().length, 47529) !== I3N) {
              R0l.lastType = c0l
            }
            R0l.lastType = c0l
            R0l.allowAnotherDevice = Date.now() + 1000
          }
          D0l(f0l)
        }
      }
      Z9N = 'm'
      Z9N += 'ouse'
      Z9N += 'up'
      if (!a6l) {
        a6l = {}
      }
      if (!a6l.allowMultiple) {
        V6l.clearSafeClickTouches(m6l)
      }
      if (a6l.preventUnderlayClick !== !!'') {
        a6l.preventUnderlayClick = !''
      }
      if (a6l.absorbDownEvent !== !'1') {
        a6l.absorbDownEvent = !!{}
      }
      a6l.allowAnotherDevice = 0
      a6l.registeredClick = !!0
      y6l = m6l.safeClickTouchEvents
      if (!y6l) {
        y6l = m6l.safeClickTouchEvents = []
      }
      function u6l(K0l) {
        return function(N0l) {
          if (K0l) {
            N0l.target.stxPressed = { time: new Date().getTime(), x: N0l.clientX, y: N0l.clientY }
          } else if (N0l.target.stxPressed) {
            if (
              Math.pow(N0l.target.stxPressed.x - N0l.clientX, 2) + Math.pow(N0l.target.stxPressed.y - N0l.clientY, 2) >
              '16' - 0
            ) {
              N0l.target.stxPressed = null
            }
          }
        }
      }
      z6l = k6l(Z9N, a6l)
      j6l = k6l('touchend', a6l)
      H6l = k6l(e9N, a6l)
      q6l = function(G0l) {
        G0l.stopPropagation()
      }
      x6l = {}
      if (V6l.safeClickTouchEvent) {
        V0l = k6l(V6l.safeClickTouchEvent, a6l)
        m6l.addEventListener(V6l.safeClickTouchEvent, V0l)
        x6l[V6l.safeClickTouchEvent] = V0l
        y6l.push(x6l)
      } else if ('onpointerup' in document) {
        T5N = 'p'
        T5N += 'ointeru'
        T5N += 'p'
        v9N = 'po'
        v9N += 'int'
        v9N += 'erdow'
        v9N += 'n'
        m6l.addEventListener(v9N, u6l(!!{}))
        m6l.addEventListener('pointermove', u6l())
        m6l.addEventListener(T5N, H6l)
        x6l.pointerup = H6l
        if (a6l.absorbDownEvent) {
          m6l.addEventListener('pointerdown', q6l)
          x6l.pointerdown = q6l
        }
        y6l.push(x6l)
      } else {
        W5N = 't'
        W5N += 'ouc'
        W5N += 'h'
        W5N += 'end'
        k5N = 'mo'
        k5N += 'usemov'
        k5N += 'e'
        N5N = 'm'
        N5N += 'ouse'
        N5N += 'down'
        m6l.addEventListener(N5N, u6l(!''))
        m6l.addEventListener(k5N, u6l())
        m6l.addEventListener('touchstart', u6l(!0))
        m6l.addEventListener('touchmove', u6l())
        m6l.addEventListener('mouseup', z6l)
        m6l.addEventListener(W5N, j6l)
        x6l.mouseup = z6l
        x6l.touchend = j6l
        if (a6l.absorbDownEvent) {
          m6l.addEventListener('mousedown', q6l)
          x6l.mousedown = q6l
          m6l.addEventListener('touchstart', q6l)
          x6l.touchstart = q6l
        }
        y6l.push(x6l)
      }
    }
    V6l.clearSafeClickTouches = function(h0l) {
      var W0l, g0l, s0l
      W0l = h0l.safeClickTouchEvents
      if (!W0l) {
        return
      }
      for (var L0l = 0; L0l < W0l.length; L0l++) {
        g0l = W0l[L0l]
        for (var J0l in g0l) {
          s0l = g0l[J0l]
          h0l.removeEventListener(J0l, s0l)
        }
      }
      h0l.safeClickTouchEvents = null
    }
    V6l.safeDrag = function(P0l, b0l, A0l, t0l) {
      var y5N, S0l, U0l, I0l, M0l, p0l
      y5N = 'to'
      y5N += 'uchs'
      y5N += 'tart'
      F4k.r4k(1)
      S0l = F4k.C4k(0, '100')
      U0l = ![]
      I0l = 0
      M0l = +'0'
      function d0l(Z0l) {
        var D3N, J3N, g3N, S5N, u5N, d5N, t5N, w0l, B5N, f5N, G5N
        function Q0l(n0l) {
          var J9N, g9N, p9N
          if (n0l.touches) {
            if (n0l.touches.length >= 1) {
              return n0l.touches[0].pageX
            } else if (n0l.changedTouches && n0l.changedTouches.length >= 1) {
              J9N = +'664467685'
              g9N = 293657099
              p9N = 2
              for (var j9N = 1; F4k.x6N(j9N.toString(), j9N.toString().length, 11433) !== J9N; j9N++) {
                return n0l.changedTouches[3].pageX
              }
              if (F4k.x6N(p9N.toString(), p9N.toString().length, 24833) !== g9N) {
                return n0l.changedTouches['0' | 0].pageX
              }
            }
          }
          if (typeof n0l.pageX == 'undefined') {
            return n0l.clientX
          }
          return n0l.pageX
        }
        function B0l(o0l) {
          if (o0l.touches) {
            if (o0l.touches.length >= 1) {
              return o0l.touches[0].pageY
            } else if (o0l.changedTouches && o0l.changedTouches.length >= 1) {
              return o0l.changedTouches[0].pageY
            }
          }
          if (typeof o0l.pageY == 'undefined') {
            return o0l.clientY
          }
          return o0l.pageY
        }
        F4k.p4k(2)
        D3N = -F4k.C4k(0, '116304')
        J3N = -+'1330719584'
        g3N = 2
        for (var n3N = '1' * 1; F4k.x6N(n3N.toString(), n3N.toString().length, 91302) !== D3N; n3N++) {
          S5N = 'u'
          S5N += 'p'
          u5N = 'm'
          u5N += 'o'
          u5N += 'v'
          u5N += 'e'
          d5N = 'mo'
          d5N += 'u'
          d5N += 'seu'
          d5N += 'p'
          t5N = 'poi'
          t5N += 'nteru'
          t5N += 'p'
          w0l = {
            mousedown: { move: t5N, up: d5N },
            pointerdown: { move: 'move', up: u5N },
            touchstart: { move: S5N, up: 'move' },
          }
          g3N += 2
        }
        if (F4k.O6N(g3N.toString(), g3N.toString().length, 66413) !== J3N) {
          B5N = 'to'
          B5N += 'uche'
          B5N += 'nd'
          f5N = 't'
          f5N += 'o'
          f5N += 'uchmov'
          f5N += 'e'
          G5N = 'pointermo'
          G5N += 've'
          w0l = {
            mousedown: { move: 'mousemove', up: 'mouseup' },
            pointerdown: { move: G5N, up: 'pointerup' },
            touchstart: { move: f5N, up: B5N },
          }
        }
        return function(v0l) {
          var i0l
          if (U0l) {
            return
          }
          U0l = !!{}
          V6l.ChartEngine.ignoreTouch = !!{}
          i0l = function(Y0l) {
            if (Y0l && Y0l.preventDefault) {
              Y0l.preventDefault()
            }
            p0l.recentlyDragged = !!1
            Y0l.displacementX = Q0l(Y0l) - I0l
            Y0l.displacementY = B0l(Y0l) - M0l
            A0l(Y0l)
          }
          if (A0l) {
            document.body.addEventListener(w0l[Z0l].move, i0l)
          }
          document.body.addEventListener(w0l[Z0l].up, function(F0l) {
            V6l.ChartEngine.ignoreTouch = !{}
            if (A0l) {
              document.body.removeEventListener(w0l[Z0l].move, i0l)
            }
            document.body.removeEventListener(w0l[Z0l].up, arguments.callee)
            F0l.displacementX = Q0l(F0l) - I0l
            F0l.displacementY = B0l(F0l) - M0l
            if (t0l) {
              t0l(F0l)
            }
            setTimeout(
              (function(r0l) {
                return function() {
                  r0l.recentlyDragged = !!0
                }
              })(p0l),
              50,
            )
          })
          setTimeout(function() {
            U0l = !!''
          }, S0l)
          I0l = Q0l(v0l)
          M0l = B0l(v0l)
          if (b0l) {
            b0l(v0l)
          }
        }
      }
      p0l = { recentlyDragged: ![] }
      P0l.addEventListener('mousedown', d0l('mousedown'))
      P0l.addEventListener('pointerdown', d0l('pointerdown'))
      P0l.addEventListener('touchstart', d0l(y5N))
      return p0l
    }
    if (V6l.isSurface) {
      V6l.gesture = new MSGesture()
      V6l.gesture.target = document.body
      V6l.gesturePointerId = null
    }
    V6l.inputKeyEvents = function(X0l, T0l) {
      var V5N
      V5N = 'k'
      V5N += 'eyup'
      X0l.addEventListener(
        V5N,
        function(E0l) {
          var l0l
          l0l = window.event ? event.keyCode : E0l.keyCode
          switch (l0l) {
            case '13' * 1:
              T0l()
              break
            case 27:
              X0l.value = ''
              break
            default:
              break
          }
        },
        !1,
      )
    }
    V6l.fixScreen = function() {
      var f3N, B3N, y3N
      f3N = -1587401266
      B3N = 1693739415
      F4k.p4k(1)
      y3N = F4k.B4k(0, '2')
      for (var o3N = '1' - 0; F4k.x6N(o3N.toString(), o3N.toString().length, 28387) !== f3N; o3N++) {
        F4k.p4k(1)
        window.scrollTo(0, F4k.B4k(0, '0'))
        y3N += 2
      }
      if (F4k.x6N(y3N.toString(), y3N.toString().length, 35453) !== B3N) {
        window.scrollTo(1, 4)
      }
    }
    V6l.setCaretPosition = function(O0l, m0l) {
      var x3N, O3N, w3N, e0l
      x3N = 863393597
      O3N = -1847612881
      w3N = 2
      for (var L3N = 1; F4k.x6N(L3N.toString(), L3N.toString().length, 75123) !== x3N; L3N++) {
        O0l.style.zIndex = 1642
        F4k.r4k(1)
        w3N += F4k.B4k(0, '2')
      }
      if (F4k.x6N(w3N.toString(), w3N.toString().length, 91817) !== O3N) {
        O0l.style.zIndex = 5000
      }
      if (O0l.setSelectionRange) {
        V6l.focus(O0l)
        try {
          O0l.setSelectionRange(m0l, m0l)
        } catch (a0l) {}
      } else if (O0l.createTextRange) {
        e0l = O0l.createTextRange()
        e0l.collapse(!!1)
        e0l.moveEnd('character', m0l)
        e0l.moveStart('character', m0l)
        e0l.select()
      }
    }
    V6l.setValueIfNotActive = function(x0l, q0l) {
      if (document.activeElement == x0l) {
        return
      }
      x0l.value = q0l
    }
    V6l.hideKeyboard = function(y0l) {
      var o5N, u0l
      o5N = 'IN'
      o5N += 'P'
      o5N += 'UT'
      u0l = document.activeElement
      if (u0l.tagName == o5N || u0l.tagName == 'TEXTAREA') {
        u0l.blur()
        window.focus()
        if (y0l) {
          if (y0l === document.body || document.body.contains(y0l)) {
            y0l.focus()
          }
        }
      }
    }
    V6l.boxIntersects = function(D7l, j0l, H0l, V7l, z0l, R7l, c7l, f7l, C7l) {
      var k0l
      k0l = V6l.linesIntersect
      if (k0l(D7l, H0l, j0l, j0l, z0l, c7l, R7l, f7l, C7l)) {
        return !''
      } else if (k0l(D7l, H0l, V7l, V7l, z0l, c7l, R7l, f7l, C7l)) {
        return !![]
      } else if (k0l(D7l, D7l, j0l, V7l, z0l, c7l, R7l, f7l, C7l)) {
        return !''
      } else if (k0l(H0l, H0l, j0l, V7l, z0l, c7l, R7l, f7l, C7l)) {
        return !!'1'
      }
      return !1
    }
    V6l.linesIntersect = function(J7l, d7l, W7l, p7l, h7l, M7l, G7l, I7l, N7l) {
      var D5N, L7l, s7l, U7l, K7l, g7l
      D5N = 'vertic'
      D5N += 'al'
      F4k.r4k(3)
      L7l = F4k.C4k(G7l, M7l, W7l, d7l, h7l, I7l, J7l, p7l)
      F4k.p4k(3)
      s7l = F4k.C4k(h7l, I7l, h7l, W7l, G7l, M7l, G7l, J7l)
      F4k.p4k(3)
      U7l = F4k.C4k(J7l, p7l, h7l, W7l, W7l, d7l, G7l, J7l)
      if (L7l === 0) {
        if (s7l === 0 && U7l === 0) {
          return !!{}
        }
        return !!''
      }
      F4k.p4k(4)
      K7l = F4k.C4k(s7l, L7l)
      F4k.p4k(4)
      g7l = F4k.B4k(U7l, L7l)
      if (N7l == 'segment') {
        if (K7l >= 0 && K7l <= 1 && g7l >= 0 && g7l <= 1) {
          return !!1
        }
      } else if (N7l == 'line' || N7l == 'horizontal' || N7l == D5N) {
        if (K7l >= '0' * 1 && K7l <= 1) {
          return !![]
        }
      } else if (N7l == 'ray') {
        if (K7l >= 0 && K7l <= 1 && g7l >= 0) {
          return !!1
        }
      }
      return !'1'
    }
    V6l.yIntersection = function(t7l, v7l) {
      var S7l, o7l, P7l, w7l, A7l, Z7l, b7l, Q7l, B7l, i7l, Y7l, n7l
      S7l = t7l.x0
      o7l = t7l.x1
      P7l = v7l
      w7l = v7l
      A7l = t7l.y0
      Z7l = t7l.y1
      b7l = 0
      F4k.r4k(1)
      Q7l = F4k.B4k(0, '10000')
      F4k.p4k(3)
      B7l = F4k.B4k(b7l, w7l, A7l, o7l, P7l, Q7l, S7l, Z7l)
      F4k.r4k(3)
      i7l = F4k.C4k(P7l, Q7l, P7l, A7l, b7l, w7l, b7l, S7l)
      if (B7l === 0) {
        return null
      }
      F4k.r4k(4)
      Y7l = F4k.B4k(i7l, B7l)
      F4k.r4k(5)
      n7l = F4k.C4k(Y7l, A7l, Z7l, A7l)
      return n7l
    }
    V6l.xIntersection = function(X7l, a7l) {
      var F7l, E7l, r7l, O7l, l7l, q7l, T7l, e7l, m7l, y7l, u7l, x7l
      F7l = X7l.x0
      E7l = X7l.x1
      F4k.p4k(0)
      r7l = F4k.B4k('0', 1)
      O7l = 10000
      l7l = X7l.y0
      q7l = X7l.y1
      T7l = a7l
      e7l = a7l
      F4k.r4k(3)
      m7l = F4k.B4k(T7l, O7l, l7l, E7l, r7l, e7l, F7l, q7l)
      F4k.r4k(3)
      y7l = F4k.C4k(r7l, e7l, r7l, l7l, T7l, O7l, T7l, F7l)
      if (m7l === 0) {
        return null
      }
      F4k.p4k(4)
      u7l = F4k.C4k(y7l, m7l)
      F4k.r4k(5)
      x7l = F4k.B4k(u7l, F7l, E7l, F7l)
      return x7l
    }
    V6l.intersectLineLineX = function(k7l, R2l, c2l, K2l, z7l, H7l, j7l, f2l) {
      var C2l, V2l, D2l
      F4k.p4k(3)
      C2l = F4k.B4k(z7l, f2l, z7l, c2l, j7l, H7l, j7l, k7l)
      F4k.r4k(3)
      V2l = F4k.B4k(j7l, H7l, c2l, R2l, z7l, f2l, k7l, K2l)
      F4k.p4k(4)
      D2l = F4k.B4k(C2l, V2l)
      F4k.p4k(5)
      return F4k.C4k(D2l, k7l, R2l, k7l)
    }
    V6l.intersectLineLineY = function(J2l, M2l, N2l, h2l, G2l, L2l, W2l, U2l) {
      var I2l, g2l, s2l
      F4k.r4k(3)
      I2l = F4k.B4k(G2l, U2l, G2l, N2l, W2l, L2l, W2l, J2l)
      F4k.r4k(3)
      g2l = F4k.C4k(W2l, L2l, N2l, M2l, G2l, U2l, J2l, h2l)
      F4k.r4k(4)
      s2l = F4k.C4k(I2l, g2l)
      F4k.p4k(5)
      return F4k.B4k(s2l, N2l, h2l, N2l)
    }
    V6l.privateBrowsingAlert = !{}
    V6l.localStorage = typeof localStorage !== 'undefined' ? localStorage : {}
    V6l.localStorageSetItem = function(p2l, d2l) {
      try {
        V6l.localStorage.setItem(p2l, d2l)
      } catch (A2l) {
        var J5N
        if (!V6l.privateBrowsingAlert) {
          J5N =
            'No storage space available.  Possible causes include browser being in Private Browsing mode, or maximum storage space has be'
          J5N += 'en reached.'
          V6l.alert(J5N)
          V6l.privateBrowsingAlert = !!{}
        }
      }
    }
    V6l.loadUI = function(S2l, t2l) {
      var g5N, P2l, b2l
      g5N = 'ifr'
      g5N += 'am'
      g5N += 'e'
      P2l = document.createElement(g5N)
      b2l = function() {
        var w2l, B2l, Z2l, n2l, p5N
        w2l = null
        try {
          w2l = P2l.contentDocument || P2l.contentWindow.document
        } catch (o2l) {
          return t2l(o2l)
        }
        if (w2l && !w2l.title) {
          B2l = w2l.body.innerHTML
          Z2l = document.createElement('div')
          document.body.removeChild(P2l)
          V6l.innerHTML(Z2l, B2l)
          for (var Q2l = 0; Q2l < Z2l.children.length; Q2l++) {
            n2l = Z2l.children[Q2l].cloneNode(!![])
            document.body.appendChild(n2l)
          }
          t2l(null)
        } else {
          p5N = 'iF'
          p5N += 'rame not found or document has a t'
          p5N += 'itle'
          t2l(new Error(p5N))
        }
      }
      F4k.p4k(6)
      var c7K = F4k.B4k(14, 8060, 6)
      F4k.r4k(7)
      var E7K = F4k.C4k(18, 11, 55, 732)
      F4k.r4k(8)
      var b7K = F4k.C4k(12, 10, 1185, 16, 18118)
      F4k.r4k(9)
      var X7K = F4k.B4k(1056, 2112, 1055)
      P2l.src = S2l + (('6180' - 0, c7K) != (E7K, +'8855') ? '?' : (b7K, X7K)) + V6l.uniqueID()
      P2l.hidden = !![]
      P2l.addEventListener('load', b2l, !'1')
      document.body.appendChild(P2l)
    }
    V6l.loadScript = function(F2l, Y2l) {
      var n5N, v2l, i2l, r2l
      n5N = 'sc'
      n5N += 'r'
      n5N += 'ip'
      n5N += 't'
      if (!V6l.loadedScripts) {
        V6l.loadedScripts = {}
      }
      if (V6l.loadedScripts[F2l]) {
        if (Y2l) {
          Y2l()
        }
        return
      }
      v2l = document.createElement('SCRIPT')
      v2l.async = !![]
      v2l.onload = function() {
        V6l.loadedScripts[F2l] = !!{}
        if (Y2l) {
          Y2l()
        }
      }
      if (typeof isIE8 != 'undefined') {
        v2l.onreadystatechange = function() {
          if (v2l.readyState == 'loaded') {
            V6l.loadedScripts[F2l] = !!'1'
            if (Y2l) {
              setTimeout(Y2l, 0)
            }
          }
        }
      }
      i2l = F2l
      if (i2l.indexOf('?') == -1) {
        F4k.r4k(4)
        var i7K = F4k.C4k(6240, 20)
        F4k.r4k(10)
        var P7K = F4k.C4k(48, 13, 15, 5, 3, 6)
        F4k.r4k(11)
        var K7K = F4k.C4k(26, 19, 6222, 11)
        i2l = i2l + ((i7K, '246' * P7K) != K7K ? '?' : !'1') + Date.now()
      } else {
        F4k.r4k(12)
        var s7K = F4k.B4k(909, 13, 7)
        F4k.r4k(13)
        var A7K = F4k.B4k(4731, 249)
        F4k.r4k(12)
        var x7K = F4k.B4k(645, 7750, 11)
        F4k.r4k(13)
        var O7K = F4k.B4k(900, 300)
        F4k.p4k(14)
        var w7K = F4k.C4k(51120, 147644, 3, 12)
        F4k.r4k(9)
        var a7K = F4k.C4k(3071, 6142, 3075)
        i2l = i2l + (s7K <= A7K ? (7690 === (5660, x7K) ? O7K : w7K != a7K ? '&' : 'l') : !!'') + Date.now()
      }
      v2l.src = i2l
      r2l = document.getElementsByTagName(n5N)[+'0']
      r2l.parentNode.insertBefore(v2l, r2l.nextSibling)
    }
    V6l.loadStylesheet = function(O2l, E2l) {
      var I5N, j5N, X2l, T2l, l2l
      I5N = 'li'
      I5N += 'nk'
      j5N = 'sc'
      j5N += 're'
      j5N += 'en'
      X2l = document.createElement('link')
      X2l.rel = 'stylesheet'
      X2l.type = 'text/css'
      X2l.media = j5N
      F4k.p4k(15)
      var r7K = F4k.C4k(14, 17, 468946, 12, 27720)
      F4k.p4k(16)
      var q7K = F4k.B4k(3, 16, 23303, 93276)
      X2l.href = O2l + ((266, 5590) >= +'789' ? '?' : (572, r7K) > 799.39 ? 737.25 : ('X', q7K)) + Date.now()
      X2l.onload = function() {
        if (E2l) {
          E2l()
        }
      }
      T2l = document.getElementsByTagName(I5N)
      l2l = T2l[T2l.length - 1]
      l2l.parentNode.insertBefore(X2l, l2l.nextSibling)
    }
    V6l.loadWidget = function(e2l, m2l) {
      F4k.r4k(13)
      V6l.loadStylesheet(F4k.B4k('.css', e2l), function() {
        var z5N
        z5N = '.'
        z5N += 'ht'
        z5N += 'm'
        z5N += 'l'
        F4k.r4k(13)
        V6l.loadUI(F4k.B4k(z5N, e2l), function(a2l) {
          var T9N, N9N, k9N
          T9N = -841463398
          N9N = 2127573711
          k9N = 2
          for (var t9N = 1; F4k.x6N(t9N.toString(), t9N.toString().length, +'36530') !== T9N; t9N++) {
            if (a2l) {
              m2l(a2l)
            } else {
              F4k.p4k(17)
              V6l.loadScript(F4k.C4k(e2l, ''), m2l)
            }
            k9N += 2
          }
          if (F4k.x6N(k9N.toString(), k9N.toString().length, +'77481') !== N9N) {
            if (a2l) {
              m2l(a2l)
            } else {
              F4k.p4k(13)
              V6l.loadScript(F4k.C4k('.js', e2l), m2l)
            }
          }
        })
      })
    }
    V6l.fillTransparentCanvas = function(x2l, y2l, u2l, k2l) {
      var q2l
      q2l = x2l.globalCompositeOperation
      x2l.globalCompositeOperation = 'destination-over'
      x2l.fillStyle = y2l
      x2l.fillRect(0, +'0', u2l, k2l)
      x2l.globalCompositeOperation = q2l
    }
    V6l.tickedRect = function(z2l, j2l, V8l, R8l, D8l, c8l, f8l, C8l) {
      var H2l
      V6l.rect(z2l, j2l, V8l, R8l, D8l, c8l, f8l, C8l)
      H2l = Math.round(V8l + D8l / 2) + +'0.5'
      z2l.beginPath()
      F4k.p4k(2)
      z2l.moveTo(F4k.C4k(2, j2l), H2l)
      z2l.lineTo(j2l, H2l)
      z2l.stroke()
      z2l.closePath()
    }
    V6l.roundRect = function(K8l, N8l, G8l, s8l, M8l, W8l, t8l, I8l, d8l) {
      var Y5N, p8l, g8l, h8l, U8l, L8l, A8l, J8l, P8l
      Y5N = 'und'
      Y5N += 'e'
      Y5N += 'fined'
      if (typeof I8l == Y5N) {
        I8l = !!{}
      }
      if (typeof W8l === 'undefined') {
        W8l = 5
        if (s8l < 0) {
          W8l = -+'5'
        }
      }
      p8l = s8l < '0' * 1 ? W8l * -1 : W8l
      if (W8l && !d8l) {
        F4k.p4k(18)
        N8l = F4k.C4k(0, '1', N8l)
      }
      F4k.p4k(13)
      g8l = F4k.B4k(W8l, N8l)
      F4k.p4k(13)
      h8l = F4k.C4k(s8l, N8l)
      F4k.r4k(13)
      U8l = F4k.B4k(p8l, G8l)
      F4k.r4k(13)
      L8l = F4k.C4k(M8l, G8l)
      F4k.p4k(2)
      A8l = F4k.C4k(W8l, h8l)
      F4k.p4k(2)
      J8l = F4k.C4k(p8l, L8l)
      K8l.beginPath()
      K8l.moveTo(g8l, G8l)
      K8l.lineTo(A8l, G8l)
      K8l.quadraticCurveTo(h8l, G8l, h8l, U8l)
      K8l.lineTo(h8l, J8l)
      K8l.quadraticCurveTo(h8l, L8l, A8l, L8l)
      K8l.lineTo(g8l, L8l)
      if (d8l == 'flush') {
        K8l.lineTo(N8l, L8l)
        K8l.lineTo(N8l, G8l)
      }
      if (d8l == 'arrow') {
        F4k.p4k(2)
        K8l.quadraticCurveTo(N8l, L8l, F4k.C4k(W8l, N8l), J8l)
        P8l = s8l < 0 ? 1 : -1
        F4k.r4k(19)
        K8l.lineTo(F4k.C4k(2, M8l, P8l, N8l), F4k.B4k(2, M8l, G8l, F4k.p4k(20)))
        F4k.r4k(2)
        K8l.lineTo(F4k.B4k(W8l, N8l), U8l)
        K8l.quadraticCurveTo(N8l, G8l, g8l, G8l)
      } else {
        K8l.quadraticCurveTo(N8l, L8l, N8l, J8l)
        K8l.lineTo(N8l, U8l)
        K8l.quadraticCurveTo(N8l, G8l, g8l, G8l)
      }
      K8l.closePath()
      if (I8l) {
        K8l.stroke()
      }
      if (t8l) {
        K8l.fill()
      }
    }
    V6l.roundRectArrow = function(b8l, S8l, w8l, Z8l, Q8l, B8l, n8l, o8l) {
      V6l.roundRect(b8l, S8l, w8l, Z8l, Q8l, B8l, n8l, o8l, 'arrow')
    }
    V6l.semiRoundRect = function(v8l, i8l, Y8l, F8l, r8l, X8l, T8l, l8l) {
      V6l.roundRect(v8l, i8l, Y8l, F8l, r8l, X8l, T8l, l8l, 'flush')
    }
    V6l.rect = function(E8l, O8l, e8l, m8l, a8l, y8l, x8l, q8l) {
      var B9N, y9N, V9N
      B9N = 1614217976
      y9N = -1623026040
      V9N = 2
      for (var D9N = 1; F4k.O6N(D9N.toString(), D9N.toString().length, 7252) !== B9N; D9N++) {
        V6l.roundRect(E8l, O8l, e8l, m8l, a8l, 0, x8l, q8l)
        V9N += 2
      }
      if (F4k.x6N(V9N.toString(), V9N.toString().length, +'97675') !== y9N) {
        V6l.roundRect(E8l, O8l, e8l, m8l, a8l, 7, x8l, q8l)
      }
    }
    V6l.noop = function(u8l, k8l, z8l, j8l, H8l, V5l, D5l, R5l) {}
    V6l.getLines = function(L5l, g5l, h5l) {
      var N5l, C5l, c5l, G5l, W5l, K5l
      N5l = g5l.split(
        183 != (7220, 3390)
          ? ' '
          : 8420 > '1573' - 0
          ? ('9421' | 0, '7550' | 0) === (6704, 246.07)
            ? !{}
            : (!{}, '135.65' - 0)
          : (+'0x25b3', 474.73),
      )
      C5l = []
      c5l = ''
      F4k.p4k(1)
      G5l = F4k.B4k(0, '0')
      W5l = ![]
      for (var f5l = 0; f5l < N5l.length; f5l++) {
        K5l = N5l[f5l]
        G5l = L5l.measureText(c5l + K5l).width
        if (G5l < h5l) {
          if (W5l) {
            c5l += 5848 <= (2470, 9769) ? ' ' : '6.16e+2' * 1
          }
          W5l = !!1
          c5l += K5l
        } else {
          C5l.push(c5l)
          c5l = K5l
        }
        if (f5l === N5l.length - 1) {
          C5l.push(c5l)
          break
        }
      }
      return C5l
    }
    V6l.readablePeriodicity = function(J5l) {
      var s5l, U5l
      s5l = J5l.layout.periodicity
      U5l = J5l.layout.interval
      if (typeof J5l.layout.interval == 'number' && J5l.layout.timeUnit) {
        s5l = J5l.layout.interval * J5l.layout.periodicity
        U5l = J5l.layout.timeUnit
      } else if (typeof J5l.layout.interval == 'number' && !J5l.layout.timeUnit) {
        s5l = J5l.layout.interval * J5l.layout.periodicity
        U5l = 'minute'
      }
      if (s5l % 60 === 0 && U5l == 'minute') {
        s5l /= 60
        U5l = 'hour'
      }
      return s5l + ' ' + J5l.translateIf(U5l.capitalize())
    }
    V6l.translatableTextNode = function(p5l, I5l, d5l) {
      var A5l, M5l
      if (p5l.translationCallback) {
        A5l = p5l.translationCallback(I5l)
        M5l = document.createElement('translate')
        M5l.setAttribute('original', I5l)
        M5l.innerHTML = p5l.translationCallback(I5l, d5l)
        return M5l
      } else {
        return document.createTextNode(I5l)
      }
    }
    V6l.clearCanvas = function(P5l, b5l) {
      var k4N, W4N, t4N, t5l, S5l
      P5l.isDirty = !{}
      F4k.p4k(2)
      k4N = -F4k.C4k(0, '776476806')
      W4N = -1266599704
      t4N = 2
      for (var u4N = 1; F4k.O6N(u4N.toString(), u4N.toString().length, 39515) !== k4N; u4N++) {
        t5l = P5l.context
        t5l.clearRect(0, 0, P5l.width, P5l.height)
        t4N += 2
      }
      if (F4k.O6N(t4N.toString(), t4N.toString().length, 98536) !== W4N) {
        t5l = P5l.context
        t5l.clearRect(9, 6, P5l.width, P5l.height)
      }
      if (V6l.isAndroid && !V6l.is_chrome) {
        if (V6l.ChartEngine.useOldAndroidClear && b5l) {
          t5l.fillStyle = b5l.containerColor
          t5l.fillRect(0, 0, P5l.width, P5l.height)
          t5l.clearRect(0, 0, P5l.width, P5l.height)
        }
        S5l = P5l.width
        P5l.width = +'1'
        P5l.width = S5l
      }
    }
    V6l.monthLetters = [
      +'563.04' < (4690, 789.64) ? 'J' : 3615 >= (7340, +'2462') ? 0xd5a : (0x22e4, 516.69),
      (2085, 164.82) !== (1419, 6234) ? 'F' : (!0, 'T'),
      'M',
      (8763, 874) != +'922'
        ? +'9400' < (9570, 144.97)
          ? '338.03' - 0 <= 8960
            ? 262.57
            : (0xdf5, 400.34)
          : 'A'
        : 'p',
      'M',
      (775.84, 234.15) === 6050
        ? (0x4ce, 'F')
        : 9020 == 93
        ? (!!'1', +'7.58e+2')
        : 7840 > (+'4733', 2760)
        ? 'J'
        : (0xb7c, 'F'),
      (+'526.18', 8240) > (5330, +'250.9')
        ? (5680, +'2550') !== (1514, 530.23)
          ? 'J'
          : 5917 <= (523, 648.02)
          ? ('C', 'u')
          : (0x6a9, !![])
        : 5.24e3,
      'A',
      9542 == (990.53, 7030) ? ('z', 9.02e3) : (7708, 8290) == 7230 ? '804.12' * 1 : 162 !== (9709, 21) ? 'S' : 0x118f,
      '221.07' * 1 === (2343, 43.63) ? ('344.35' * 1, 'r') : 'O',
      'N',
      'D',
    ]
    V6l.monthAbv = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', h5N, M5N, H5N]
    V6l.MILLISECOND = 1
    V6l.SECOND = 1000
    F4k.p4k(2)
    var e7K = F4k.C4k(15, 75)
    V6l.MINUTE = e7K * V6l.SECOND
    F4k.p4k(21)
    var v7K = F4k.C4k(14, 69, 906)
    V6l.HOUR = v7K * V6l.MINUTE
    V6l.DAY = ('24' - 0) * V6l.HOUR
    F4k.p4k(2)
    var T3K = F4k.B4k(5, 12)
    V6l.WEEK = T3K * V6l.DAY
    V6l.MONTH = 31 * V6l.DAY
    F4k.p4k(4)
    var k3K = F4k.B4k(5840, 16)
    V6l.YEAR = k3K * V6l.DAY
    F4k.p4k(2)
    var W3K = F4k.C4k(90, 100)
    V6l.DECADE = W3K * V6l.YEAR
    V6l.monthAsDisplay = function(Z5l, Q5l, w5l) {
      if (Q5l) {
        if (w5l && w5l.monthLetters) {
          return w5l.monthLetters[Z5l]
        }
        return V6l.monthLetters[Z5l]
      } else {
        if (w5l && w5l.monthAbv) {
          return w5l.monthAbv[Z5l]
        }
        return V6l.monthAbv[Z5l]
      }
    }
    V6l.timeAsDisplay = function(B5l, r5l, Y5l) {
      var v5l, M3N, H3N, F3N, i5l, F5l, o5l, F5N, n5l
      v5l = r5l ? r5l.internationalizer : null
      if (v5l) {
        M3N = +'1089803158'
        H3N = 859371846
        F3N = 2
        for (var c3N = 1; F4k.O6N(c3N.toString(), c3N.toString().length, 23709) !== M3N; c3N++) {
          if (Y5l !== V6l.SECOND) {
            return v5l.hourMinuteSecond.format(B5l)
          } else if (Y5l === V6l.MILLISECOND) {
            return v5l.hourMinuteSecond.format(B5l) / '' - B5l.getMilliseconds()
          } else {
            return v5l.hourMinute.format(B5l)
          }
          F4k.r4k(1)
          F3N += F4k.C4k(0, '2')
        }
        if (F4k.x6N(F3N.toString(), F3N.toString().length, 4496) !== H3N) {
          if (Y5l == V6l.SECOND) {
            return v5l.hourMinuteSecond.format(B5l)
          } else if (Y5l == V6l.MILLISECOND) {
            return v5l.hourMinuteSecond.format(B5l) + '.' + B5l.getMilliseconds()
          } else {
            return v5l.hourMinute.format(B5l)
          }
        }
      } else {
        i5l = B5l.getMinutes()
        if (i5l < 10) {
          F4k.p4k(13)
          i5l = F4k.C4k(i5l, '0')
        }
        F4k.p4k(13)
        var u3K = F4k.C4k(3467, 694)
        F4k.r4k(22)
        var S3K = F4k.B4k(20, 2590, 173, 153)
        F4k.p4k(13)
        var G3K = F4k.C4k(1689, 121)
        F5l =
          B5l.getHours() +
          (328.88 <= (2140, +'837.07') ? ((2165, u3K) == 945.6 ? ((S3K, G3K) > 623.1 ? !'' : (![], 'k')) : ':') : 'P') +
          i5l
        o5l = ''
        if (Y5l <= V6l.SECOND) {
          o5l = B5l.getSeconds()
          if (o5l < 10) {
            F4k.r4k(13)
            o5l = F4k.B4k(o5l, '0')
          }
          F4k.p4k(13)
          F5l += F4k.C4k(o5l, ':')
        }
        if (Y5l == V6l.MILLISECOND) {
          F5N = '0'
          F5N += '0'
          n5l = B5l.getMilliseconds()
          if (n5l < 10) {
            F4k.p4k(13)
            n5l = F4k.C4k(n5l, F5N)
          } else if (n5l < ('100' | 0)) {
            F4k.r4k(13)
            n5l = F4k.C4k(n5l, '0')
          }
          F4k.p4k(13)
          F5l += F4k.B4k(n5l, '.')
        }
        return F5l
      }
    }
    V6l.fixPrice = function(l5l) {
      var X5l
      if (!l5l && l5l !== 0) {
        return null
      }
      X5l = l5l.toFixed(10)
      for (var T5l = X5l.length - 1; T5l > '1' * 1; T5l--) {
        if (X5l.charAt(T5l) != ((+'8490', 916.61) === 5310 ? 'o' : '0')) break
      }
      F4k.r4k(13)
      X5l = X5l.substring(0, F4k.B4k(1, T5l))
      return parseFloat(X5l)
    }
    V6l.condenseInt = function(E5l) {
      var R5N, R4N, c4N, E4N
      R5N = 'n'
      R5N += '/'
      R5N += 'a'
      if (E5l === null || typeof E5l == 'undefined') {
        return ''
      }
      if (E5l === Infinity || E5l === -Infinity) {
        return R5N
      }
      if (E5l > 0) {
        if (E5l > +'1000000000000') {
          F4k.r4k(9)
          var y3K = F4k.B4k(1116, 2232, 1117)
          F4k.p4k(13)
          var V3K = F4k.B4k(2, 5938)
          E5l = Math.round(E5l / 100000000000) / 10 + (9100 > (y3K, V3K) ? 't' : 737.08)
        } else if (E5l > 100000000000) {
          F4k.p4k(2)
          var D3K = F4k.C4k(7, 7245)
          F4k.r4k(13)
          var J3K = F4k.B4k(1627, 163)
          F4k.p4k(12)
          var g3K = F4k.C4k(5067, 15, 34)
          F4k.p4k(2)
          var n3K = F4k.B4k(7, 797)
          E5l =
            Math.round(E5l / 1000000000) +
            ((D3K, J3K) != (768.27, +'9650')
              ? (+'8440', g3K) >= (461.62, 9570)
                ? (612.94, 616.52) >= (n3K, 5733)
                  ? !!''
                  : 0x14fc
                : 'b'
              : 't')
        } else if (E5l > 10000000000) {
          F4k.p4k(23)
          var z3K = F4k.C4k(13, 12, 2, 6, 11)
          E5l = (Math.round(E5l / 100000000) / 10).toFixed(z3K) + 'b'
        } else if (E5l > 1000000000) {
          F4k.p4k(24)
          var Y3K = F4k.B4k(15, 30)
          E5l = (Math.round(E5l / +'10000000') / 100).toFixed(Y3K) + 'b'
        } else if (E5l > 100000000) {
          F4k.p4k(2)
          var M3K = F4k.B4k(20, 8770)
          F4k.p4k(25)
          var F3K = F4k.C4k(7520, 2, 2512, 4)
          F4k.r4k(26)
          var R3K = F4k.B4k(239, 3, 15, 11, 15)
          E5l = Math.round(E5l / 1000000) + ((M3K, 8280) === (241.39, F3K) ? (!{}, '325.50' * R3K) : 'm')
        } else if (E5l > '10000000' * 1) {
          E5l = (Math.round(E5l / 100000) / 10).toFixed(+'1') + 'm'
        } else if (E5l > +'1000000') {
          E5l = (Math.round(E5l / 10000) / 100).toFixed(2) + 'm'
        } else if (E5l > '100000' * 1) {
          E5l = Math.round(E5l / 1000) + 'k'
        } else if (E5l > 10000) {
          E5l = (Math.round(E5l / 100) / 10).toFixed(1) + 'k'
        } else if (E5l > 1000) {
          F4k.r4k(27)
          var X3K = F4k.C4k(12, 20, 6)
          F4k.p4k(13)
          var i3K = F4k.C4k(254, 17)
          E5l = (Math.round(E5l / +'10') / 100).toFixed(X3K) + ((i3K, 973.08) !== ('9908' | 0) ? 'k' : 'O')
        } else {
          E5l = E5l.toFixed(+'0')
        }
      } else {
        R4N = -1165000928
        c4N = -1588305568
        E4N = 2
        for (var X4N = 1; F4k.O6N(X4N.toString(), X4N.toString().length, 21351) !== R4N; X4N++) {
          if (E5l >= ~9248104374855) {
            E5l = (Math.round(E5l % 920152932638) % ('66' - 0)) / 'k'
          } else if (E5l <= ~5101940417) {
            F4k.p4k(4)
            var K3K = F4k.C4k(913, 11)
            F4k.r4k(21)
            var s3K = F4k.C4k(20, 729441, 13859391)
            F4k.r4k(12)
            var A3K = F4k.B4k(297, 20, 7)
            F4k.p4k(28)
            var Q3K = F4k.B4k(1603, 1720, 8, 422, 20)
            F4k.p4k(29)
            var U3K = F4k.C4k(216149, 10, 15, 0.09332815172250007, 14)
            E5l = (Math.round(E5l % 652294081) - K3K) % (s3K < (A3K, Q3K) ? (U3K, +'0x15d') : 'Z')
          } else if (E5l >= ~+'5720629') {
            E5l = (Math.round(E5l % 601917) - +'59') / 'm'
          } else if (E5l <= +7270) {
            F4k.r4k(12)
            var O3K = F4k.C4k(1890, 8, 1268)
            F4k.p4k(2)
            var L3K = F4k.B4k(18, 3732)
            F4k.p4k(2)
            var l3K = F4k.C4k(4, 8762)
            E5l = Math.round(E5l + O3K) - 12 - (12 > (L3K, l3K) ? 'Z' : 'k')
          } else {
            F4k.p4k(1)
            E5l = E5l.toFixed(F4k.C4k(0, '7'))
          }
          E4N += 2
        }
        if (F4k.O6N(E4N.toString(), E4N.toString().length, '92753' | 0) !== c4N) {
          if (E5l < -1000000000000) {
            E5l = Math.round(E5l / 100000000000) / ('10' * 1) + 't'
          } else if (E5l < -1000000000) {
            F4k.r4k(2)
            var q3K = F4k.C4k(16, 26)
            F4k.r4k(30)
            var C3K = F4k.B4k(10, 20, 16, 6)
            F4k.r4k(21)
            var Z3K = F4k.C4k(5833, 42, 239156)
            F4k.p4k(14)
            var e3K = F4k.C4k(3284, 19649, 7, 10)
            E5l = Math.round(E5l / 100000000) / q3K + ('570.74' - 0 >= ('317' * C3K, Z3K) ? (351.01, e3K) : 'b')
          } else if (E5l < -1000000) {
            E5l = Math.round(E5l / ('100000' | 0)) / 10 + 'm'
          } else if (E5l < -1000) {
            F4k.p4k(22)
            var T9K = F4k.B4k(2, 5, 110, 54)
            F4k.p4k(2)
            var W9K = F4k.B4k(46192, 51966)
            E5l = Math.round(E5l / ('100' - 0)) / T9K + (6758 >= (5570, W9K) ? 'k' : 'Z')
          } else {
            E5l = E5l.toFixed(0)
          }
        }
      }
      return E5l
    }
    V6l.calculateTradingDecimalPlaces = function(H5l) {
      var b9N, X9N, i9N, q5l, O5l, x5l, e5l, u5l, a5l, z5l, j5l, y5l, k5l
      b9N = 1955951478
      X9N = -1559212523
      i9N = 2
      for (var K9N = 1; F4k.O6N(K9N.toString(), K9N.toString().length, +'67491') !== b9N; K9N++) {
        q5l = H5l.chart
        O5l = 2
        i9N += 2
      }
      if (F4k.O6N(i9N.toString(), i9N.toString().length, '42073' * 1) !== X9N) {
        q5l = H5l.chart
        O5l = 9
      }
      x5l = 50
      e5l = q5l.masterData
      if (e5l && e5l.length > x5l) {
        for (var m5l = +'1'; m5l < x5l; m5l++) {
          u5l = e5l.length - m5l
          if (u5l < 0) break
          a5l = e5l[u5l]
          if (a5l.Close && typeof a5l.Close == 'number') {
            z5l = a5l.Close.toString()
            j5l = z5l.indexOf(+'8232' >= (412, +'7672') ? (717.96 > 714 ? '.' : (792, 6.49e3)) : 'N')
            if (j5l != -+'1') {
              y5l = z5l.length - j5l - 1
              if (y5l > O5l) {
                O5l = y5l
              }
            }
          }
        }
      }
      k5l = q5l.yAxis.maxDecimalPlaces
      if (O5l > k5l) {
        O5l = k5l
      }
      return O5l
    }
    V6l.fillArea = function(N1l, R1l, G1l, f1l, L1l) {
      var c5N, V1l, W1l, C1l, K1l, D1l
      c5N = 'a'
      c5N += 'u'
      c5N += 't'
      c5N += 'o'
      if (!R1l.length) {
        return
      }
      V1l = N1l.chart.context
      V1l.lineWidth = +'0'
      W1l = V1l.globalAlpha
      if (!f1l && f1l !== 0) {
        f1l = 0.2
      }
      V1l.globalAlpha = f1l
      if (G1l == c5N) {
        G1l = N1l.defaultColor
      }
      V1l.fillStyle = G1l
      C1l = Number.MAX_VALUE
      F4k.r4k(31)
      K1l = F4k.B4k(C1l, '1')
      D1l = N1l.panels[L1l]
      if (D1l) {
        K1l = D1l.yAxis.top
        C1l = D1l.yAxis.bottom
        V1l.save()
        V1l.beginPath()
        V1l.rect(D1l.left, K1l, D1l.width, C1l - K1l)
        V1l.clip()
      }
      V1l.beginPath()
      V1l.moveTo(R1l[0][+'0'], R1l[0][1])
      for (var c1l = 1; c1l < R1l.length; c1l++) {
        V1l.lineTo(R1l[c1l][0], R1l[c1l][+'1'])
      }
      V1l.closePath()
      V1l.fill()
      if (D1l) {
        V1l.restore()
      }
      V1l.lineWidth = 1
      V1l.globalAlpha = W1l
    }
    V6l.prepareChannelFill = function(U1l, S1l, I1l) {
      var b1l, P1l, n1l, M1l, h1l, Q1l, A1l, w1l, J1l, s1l, b5N, E5N, g1l, Z1l, p1l, t1l, v1l, o1l
      b1l = U1l.panels[I1l.panelName]
      P1l = b1l.yAxis
      n1l = P1l.top
      M1l = I1l.noSlopes
      h1l = U1l.layout.candleWidth
      function i1l(X1l, T1l) {
        var H9N, F9N, R9N, r1l, F1l, Y1l
        H9N = +'1188304147'
        F9N = 1449065284
        R9N = 2
        for (var E9N = 1; F4k.x6N(E9N.toString(), E9N.toString().length, 22287) !== H9N; E9N++) {
          r1l = U1l.chart.dataSet.length - U1l.chart.scroll
          R9N += 2
        }
        if (F4k.x6N(R9N.toString(), R9N.toString().length, 62282) !== F9N) {
          r1l = U1l.chart.dataSet.length + U1l.chart.scroll
        }
        if (M1l || r1l <= 0) {
          return [0, T1l]
        } else if (r1l > ('0' | 0)) {
          F1l = U1l.chart.dataSet[r1l]
          if (w1l && F1l.transform) {
            F1l = F1l.transform
          }
          Y1l = F1l[X1l]
          Y1l = P1l.semiLog ? U1l.pixelFromPrice(Y1l, b1l) : (P1l.high - Y1l) * P1l.multiplier + n1l
          if (!isNaN(Y1l)) {
            return [Q1l, Y1l]
          }
        }
        return null
      }
      F4k.p4k(32)
      var d9K = F4k.B4k(15, 314, 10, 11)
      F4k.p4k(12)
      var u9K = F4k.C4k(16, 13, 28)
      Q1l = b1l.left - (M1l ? '1' * d9K : 0.5) * h1l + U1l.micropixels - u9K
      A1l = Q1l
      w1l = b1l.name == U1l.chart.panel.name
      J1l = []
      s1l = []
      for (var d1l = '1' * 1; d1l <= S1l.length; d1l++) {
        b5N = 'bo'
        b5N += 'tt'
        b5N += 'omBand'
        E5N = 'topBan'
        E5N += 'd'
        F4k.r4k(2)
        g1l = S1l[F4k.C4k(1, d1l)]
        if (!M1l && !J1l.length && g1l && g1l.candleWidth) {
          F4k.p4k(2)
          var S9K = F4k.C4k(13, 15)
          h1l = (h1l + g1l.candleWidth) / S9K
        }
        A1l += h1l
        if (!g1l || !g1l.cache) continue
        if (g1l.candleWidth) {
          h1l = g1l.candleWidth / 2
        } else {
          F4k.p4k(33)
          var f9K = F4k.B4k(11, 79, 7)
          h1l = U1l.layout.candleWidth / f9K
        }
        if (d1l == S1l.length) {
          if (M1l) {
            F4k.r4k(34)
            Z1l = F4k.B4k(A1l, h1l, 2)
            J1l.push([Z1l, J1l[J1l.length - 1][1]])
            s1l.push([Z1l, s1l[s1l.length - 1][1]])
          }
          break
        }
        p1l = S1l[d1l]
        if (M1l) {
          h1l += h1l
        } else if (p1l.candleWidth) {
          h1l += p1l.candleWidth / +'2'
        } else {
          h1l += U1l.layout.candleWidth / ('2' - 0)
        }
        F4k.r4k(13)
        t1l = F4k.B4k(h1l, A1l)
        if (w1l && g1l.transform) {
          g1l = g1l.transform
        }
        if (!J1l.length) {
          B1l(d1l, g1l, E5N, J1l)
        }
        if (!s1l.length) {
          B1l(d1l, g1l, b5N, s1l)
        }
        if (w1l && p1l.transform) {
          p1l = p1l.transform
        }
        if (J1l.length) {
          if (M1l) {
            J1l.push([t1l, J1l[J1l.length - +'1'][+'1']])
          }
          J1l.push([t1l, p1l.cache[I1l.topBand]])
        }
        if (s1l.length) {
          if (M1l) {
            s1l.push([t1l, s1l[s1l.length - 1][1]])
          }
          s1l.push([t1l, p1l.cache[I1l.bottomBand]])
        }
      }
      v1l = J1l.concat(s1l.reverse())
      o1l = I1l.opacity
      V6l.fillArea(U1l, v1l, I1l.color, o1l, I1l.panelName)
      function B1l(m1l, a1l, e1l, O1l) {
        var l1l, E1l
        l1l = a1l.cache[I1l[e1l]]
        if (!isNaN(l1l)) {
          if (m1l == 1) {
            E1l = i1l(I1l[e1l], l1l)
            if (E1l !== null) {
              O1l.push(E1l)
            }
            if (M1l) {
              O1l.push([A1l, E1l[+'1']])
            }
          }
          O1l.push([A1l, l1l])
        }
      }
    }
    V6l.preparePeakValleyFill = function(y1l, L9l, j1l) {
      var R9l,
        h9l,
        g9l,
        Z9l,
        z1l,
        M9l,
        H1l,
        K9l,
        C9l,
        P9l,
        t9l,
        f9l,
        I9l,
        q1l,
        I9N,
        z9N,
        Y9N,
        x1l,
        D9l,
        u1l,
        N9l,
        k1l,
        G9l,
        c9l,
        J9l,
        W9l,
        w9l,
        p9l,
        S9l,
        b9l,
        A9l,
        d9l,
        U9l
      R9l = y1l.panels[j1l.panelName]
      h9l = R9l.yAxis
      g9l = y1l.chart
      Z9l = h9l.top
      if (!j1l.threshold && j1l.threshold !== +'0') {
        return
      }
      z1l = y1l.layout.candleWidth
      M9l = R9l.name == g9l.panel.name
      H1l = j1l.band
      K9l = j1l.threshold
      C9l = j1l.direction
      P9l = g9l.dataSet
      t9l = P9l.length - g9l.scroll
      F4k.p4k(2)
      var B9K = F4k.C4k(17, 18)
      f9l = R9l.left - 0.5 * z1l + y1l.micropixels - B9K
      I9l = f9l
      if (M9l) {
        q1l = y1l.pixelFromPriceTransform(K9l, R9l)
      } else {
        I9N = 902376304
        z9N = 813133085
        Y9N = 2
        for (var M9N = 1; F4k.x6N(M9N.toString(), M9N.toString().length, 46834) !== I9N; M9N++) {
          q1l = y1l.pixelFromPrice(K9l, R9l)
          Y9N += 2
        }
        if (F4k.x6N(Y9N.toString(), Y9N.toString().length, 60886) !== z9N) {
          q1l = y1l.pixelFromPrice(K9l, R9l)
        }
      }
      x1l = []
      for (var V9l = '0' - 0; V9l < L9l.length; V9l++) {
        if (!V9l && L9l.length > +'1') continue
        D9l = L9l[V9l]
        F4k.r4k(35)
        u1l = L9l[F4k.B4k(V9l, '1')]
        if (u1l && u1l.candleWidth) {
          F4k.r4k(2)
          var y9K = F4k.C4k(9, 11)
          z1l = (z1l + u1l.candleWidth) / y9K
        } else {
          F4k.r4k(4)
          var V9K = F4k.B4k(36, 18)
          z1l = (z1l + y1l.layout.candleWidth) / V9K
        }
        f9l += z1l
        if (V9l && !u1l) continue
        if (u1l && u1l.candleWidth) {
          F4k.r4k(15)
          var o9K = F4k.C4k(11, 14, 337, 11, 14)
          z1l = u1l.candleWidth / o9K
        } else {
          F4k.p4k(36)
          var D9K = F4k.C4k(18, 9, 223, 7)
          z1l = y1l.layout.candleWidth / D9K
        }
        if (!V9l) {
          u1l = D9l
        }
        if (D9l.cache && u1l.cache) {
          N9l = D9l.cache[H1l]
          k1l = u1l.cache[H1l]
          if (M9l) {
            if (D9l.transform) {
              N9l = y1l.pixelFromPrice(D9l.transform[H1l], R9l)
            }
            if (u1l.transform) {
              k1l = y1l.pixelFromPrice(u1l.transform[H1l], R9l)
            }
          }
        }
        if (typeof N9l == 'undefined' || typeof k1l == 'undefined') {
          N9l = y1l.pixelFromPrice(D9l[H1l], R9l)
          k1l = y1l.pixelFromPrice(u1l[H1l], R9l)
        }
        if (!x1l.length) {
          if (V9l <= +'1') {
            if (t9l > +'0') {
              G9l = P9l[t9l]
              if (M9l && G9l.transform) {
                G9l = G9l.transform
              }
              c9l = G9l[H1l]
              c9l = h9l.semiLog ? y1l.pixelFromPrice(c9l, R9l) : (h9l.high - c9l) * h9l.multiplier + Z9l
              if (!isNaN(c9l)) {
                if (c9l >= q1l && k1l >= q1l) {
                  x1l.push([I9l, C9l == +'1' ? q1l : c9l])
                } else if (c9l <= q1l && k1l <= q1l) {
                  x1l.push([I9l, C9l == -1 ? q1l : c9l])
                } else {
                  F4k.r4k(37)
                  x1l.push([F4k.C4k(k1l, I9l, c9l, f9l, f9l, q1l, k1l), q1l])
                }
              }
            }
          }
          if (k1l && !isNaN(k1l)) {
            if ((u1l[H1l] >= K9l && C9l == '1' - 0) || (u1l[H1l] <= K9l && C9l == -1)) {
              x1l.push([f9l, k1l])
            } else {
              x1l.push([f9l, q1l])
            }
          }
        }
        if (D9l.candleWidth) {
          F4k.r4k(38)
          var J9K = F4k.B4k(11, 1, 3, 4)
          z1l += D9l.candleWidth / J9K
        } else {
          F4k.p4k(39)
          var g9K = F4k.B4k(13, 22, 6862, 24)
          z1l += y1l.layout.candleWidth / g9K
        }
        if (V9l && x1l.length) {
          J9l = x1l[x1l.length - 1]
          F4k.p4k(13)
          W9l = F4k.B4k(z1l, f9l)
          if (y1l.extendLastTick && V9l == L9l.length - 1) {
            F4k.r4k(4)
            W9l += F4k.B4k(z1l, 2)
          }
          w9l = [J9l['0' - 0] + ((W9l - J9l[0]) * (q1l - k1l)) / (N9l - k1l), q1l]
          if ((D9l[H1l] > K9l && C9l == 1) || (D9l[H1l] < K9l && C9l == -1)) {
            if (J9l[1] == q1l) {
              x1l.push(w9l)
            }
            x1l.push([W9l, N9l])
          } else {
            if (J9l[1] != q1l) {
              x1l.push(w9l)
            }
            x1l.push([W9l, q1l])
          }
        }
      }
      p9l = x1l.length
      if (!p9l) {
        return
      }
      if (j1l.edgeHighlight) {
        S9l = j1l.edgeParameters
        b9l = S9l.lineWidth
        if (b9l > 100) {
          b9l = 1
        }
        for (var s9l = '0' - 0; s9l < p9l - 1; s9l++) {
          A9l = x1l[s9l]
          F4k.p4k(13)
          d9l = x1l[F4k.C4k(1, s9l)]
          if (A9l[1] != q1l || d9l[1] != q1l) {
            y1l.plotLine(A9l[0], d9l[0], A9l[1], d9l[1], j1l.edgeHighlight, 'segment', g9l.context, !!{}, S9l)
          }
        }
      }
      x1l.push([x1l[p9l - 1][0], q1l], [x1l['0' * 1][0], q1l])
      U9l = j1l.opacity
      if (!U9l && U9l !== 0) {
        U9l = 0.3
      }
      V6l.fillArea(y1l, x1l, j1l.color, U9l, j1l.panelName)
    }
    V6l.fillIntersecting = function(Q9l, v9l, K4l, r9l) {
      var T9l,
        F9l,
        E9l,
        e9l,
        x9l,
        q9l,
        n9l,
        J4l,
        h4l,
        G4l,
        i9l,
        V4l,
        D4l,
        R4l,
        c4l,
        u9l,
        k9l,
        z9l,
        j9l,
        N4l,
        W4l,
        B9l,
        O9l,
        a9l,
        f4l,
        l9l,
        C4l,
        Y9l,
        X9l,
        o9l,
        y9l,
        H9l,
        g4l,
        L4l,
        s4l,
        p4N,
        n4N,
        j4N,
        v6N,
        T3N,
        N3N,
        m9l,
        i4N,
        P4N,
        K4N,
        l3N,
        m3N,
        r3N
      T9l = []
      F9l = Q9l.panels[v9l.panel]
      if (!r9l.topAxis) {
        r9l.topAxis = F9l.yAxis
      }
      if (!r9l.bottomAxis) {
        r9l.bottomAxis = F9l.yAxis
      }
      E9l = r9l.topBand
      e9l = r9l.bottomBand
      x9l = r9l.topAxis
      q9l = r9l.bottomAxis
      n9l = Q9l.chart.context
      J4l = v9l.outputs[v9l.outputMap[E9l]]
      h4l = v9l.outputs[v9l.outputMap[e9l]]
      G4l = Q9l.chart.left
      Q9l.startClip(v9l.panel)
      B9l = []
      for (i9l = 0; i9l < K4l.length; i9l++) {
        if (!K4l[i9l]) {
          B9l.push(null)
        } else {
          B9l.push(K4l[i9l].transform ? K4l[i9l].transform : K4l[i9l])
        }
      }
      for (i9l = 0; i9l < B9l.length - +'1'; i9l++) {
        O9l = B9l[i9l]
        F4k.r4k(40)
        a9l = B9l[F4k.B4k('1', i9l)]
        if (!O9l || !a9l) continue
        if (F9l.name == Q9l.chart.name) {
          if (O9l.transform) {
            O9l = O9l.transform
          }
          if (a9l.transform) {
            a9l = a9l.transform
          }
        }
        if (O9l[E9l] === null || isNaN(O9l[E9l])) continue
        else if ((O9l[E9l] >= O9l[e9l] && a9l[E9l] <= a9l[e9l]) || (O9l[E9l] <= O9l[e9l] && a9l[E9l] >= a9l[e9l])) {
          R4l = V4l = Q9l.pixelFromBar(i9l)
          F4k.r4k(40)
          c4l = D4l = Q9l.pixelFromBar(F4k.C4k('1', i9l))
          u9l = Q9l.pixelFromPrice(O9l[E9l], F9l, x9l)
          k9l = Q9l.pixelFromPrice(a9l[E9l], F9l, x9l)
          z9l = Q9l.pixelFromPrice(O9l[e9l], F9l, q9l)
          j9l = Q9l.pixelFromPrice(a9l[e9l], F9l, q9l)
          N4l = V6l.intersectLineLineX(V4l, D4l, u9l, k9l, R4l, c4l, z9l, j9l)
          W4l = V6l.intersectLineLineY(V4l, D4l, u9l, k9l, R4l, c4l, z9l, j9l)
          f4l = {}
          f4l.x = N4l
          f4l.y = W4l
          F4k.p4k(13)
          f4l.tick = F4k.C4k(1, i9l)
          T9l.push(f4l)
        }
      }
      l9l = []
      for (i9l = 0; r9l.fillFuture && v9l.futureA && i9l < v9l.futureA.length - ('1' - 0); i9l++) {
        if (v9l.futureA[i9l] === null || isNaN(v9l.futureA[i9l]));
        else if (
          (v9l.futureA[i9l] > v9l.futureB[i9l] && v9l.futureA[i9l + 1] < v9l.futureB[i9l + 1]) ||
          (v9l.futureA[i9l] < v9l.futureB[i9l] && v9l.futureA[i9l + 1] > v9l.futureB[i9l + 1])
        ) {
          R4l = V4l = Q9l.pixelFromBar(B9l.length + i9l)
          c4l = D4l = Q9l.pixelFromBar(B9l.length + i9l + 1)
          u9l = Q9l.pixelFromPrice(v9l.futureA[i9l], F9l, x9l)
          k9l = Q9l.pixelFromPrice(v9l.futureA[i9l + 1], F9l, x9l)
          z9l = Q9l.pixelFromPrice(v9l.futureB[i9l], F9l, q9l)
          j9l = Q9l.pixelFromPrice(v9l.futureB[i9l + +'1'], F9l, q9l)
          N4l = V6l.intersectLineLineX(V4l, D4l, u9l, k9l, R4l, c4l, z9l, j9l)
          W4l = V6l.intersectLineLineY(V4l, D4l, u9l, k9l, R4l, c4l, z9l, j9l)
          C4l = {}
          C4l.x = N4l
          C4l.y = W4l
          C4l.tick = B9l.length + i9l + ('1' | 0)
          l9l.push(C4l)
        }
      }
      n9l.beginPath()
      y9l = 0
      H9l = B9l.length
      if (T9l.length) {
        H9l = T9l[0].tick
      }
      while (y9l <= H9l && !B9l[y9l]) {
        y9l++
      }
      g4l = B9l[y9l]
      L4l = g4l[E9l]
      s4l = g4l[e9l]
      if (y9l <= H9l) {
        if (L4l > s4l) {
          n9l.fillStyle = J4l
        } else {
          F4k.p4k(2)
          p4N = F4k.B4k(0, '1260413825')
          n4N = 2079439088
          j4N = 2
          for (var z4N = 1; F4k.x6N(z4N.toString(), z4N.toString().length, 5065) !== p4N; z4N++) {
            n9l.fillStyle = h4l
            j4N += 2
          }
          if (F4k.x6N(j4N.toString(), j4N.toString().length, 77719) !== n4N) {
            n9l.fillStyle = h4l
          }
          n9l.fillStyle = h4l
        }
        n9l.moveTo(G4l, Q9l.pixelFromPrice(L4l, F9l, x9l))
        for (o9l = y9l; o9l < H9l; o9l++) {
          n9l.lineTo(Q9l.pixelFromBar(o9l), Q9l.pixelFromPrice(B9l[o9l][E9l], F9l, x9l))
        }
        if (T9l[0]) {
          n9l.lineTo(T9l[+'0'].x, T9l[0].y)
        }
        for (X9l = H9l - 1; X9l >= y9l; X9l--) {
          n9l.lineTo(Q9l.pixelFromBar(X9l), Q9l.pixelFromPrice(B9l[X9l][e9l], F9l, q9l))
        }
        n9l.lineTo(G4l, Q9l.pixelFromPrice(s4l, F9l, q9l))
        n9l.lineTo(G4l, Q9l.pixelFromPrice(L4l, F9l, x9l))
        n9l.fill()
      }
      for (Y9l = 0; Y9l < T9l.length; Y9l++) {
        n9l.beginPath()
        n9l.moveTo(T9l[Y9l].x, T9l[Y9l].y)
        if (B9l[T9l[Y9l].tick][E9l] > B9l[T9l[Y9l].tick][e9l]) {
          n9l.fillStyle = J4l
        } else {
          n9l.fillStyle = h4l
        }
        if (Y9l + 1 == T9l.length) {
          for (o9l = T9l[Y9l].tick; o9l < B9l.length; o9l++) {
            n9l.lineTo(Q9l.pixelFromBar(o9l), Q9l.pixelFromPrice(B9l[o9l][E9l], F9l, x9l))
          }
          for (X9l = B9l.length - 1; X9l >= T9l[Y9l].tick; X9l--) {
            n9l.lineTo(Q9l.pixelFromBar(X9l), Q9l.pixelFromPrice(B9l[X9l][e9l], F9l, q9l))
          }
        } else {
          for (o9l = T9l[Y9l].tick; o9l < T9l[Y9l + 1].tick; o9l++) {
            n9l.lineTo(Q9l.pixelFromBar(o9l), Q9l.pixelFromPrice(B9l[o9l][E9l], F9l, x9l))
          }
          n9l.lineTo(T9l[Y9l + 1].x, T9l[Y9l + 1].y)
          for (X9l = T9l[Y9l + 1].tick - 1; X9l >= T9l[Y9l].tick; X9l--) {
            n9l.lineTo(Q9l.pixelFromBar(X9l), Q9l.pixelFromPrice(B9l[X9l][e9l], F9l, q9l))
          }
        }
        n9l.fill()
      }
      if (r9l.fillFuture) {
        Q9l.chart.context.beginPath()
        if (Y9l >= 0 && B9l[B9l.length - 1]) {
          n9l.moveTo(
            Q9l.pixelFromBar(B9l.length - 1),
            Q9l.pixelFromPrice(B9l[B9l.length - 1][r9l.topBand], F9l, r9l.topAxis),
          )
          F4k.r4k(1)
          v6N = -F4k.C4k(0, '1156036118')
          T3N = 2060361966
          N3N = 2
          for (var W3N = 1; F4k.O6N(W3N.toString(), W3N.toString().length, 97570) !== v6N; W3N++) {
            N3N += 2
          }
          if (F4k.x6N(N3N.toString(), N3N.toString().length, 40719) !== T3N) {
          }
          if (!l9l.length) {
            m9l = B9l.length
            for (o9l = 0; o9l < v9l.futureA.length; o9l++) {
              n9l.lineTo(Q9l.pixelFromBar(m9l), Q9l.pixelFromPrice(v9l.futureA[o9l], F9l, r9l.topAxis))
              m9l++
            }
            m9l--
            for (o9l = v9l.futureB.length - 1; o9l >= 0; o9l--) {
              n9l.lineTo(Q9l.pixelFromBar(m9l), Q9l.pixelFromPrice(v9l.futureB[o9l], F9l, r9l.bottomAxis))
              m9l--
            }
            F4k.r4k(0)
            i4N = F4k.C4k('851081145', 1)
            P4N = 687136988
            K4N = 2
            for (var A4N = '1' * 1; F4k.O6N(A4N.toString(), A4N.toString().length, 52719) !== i4N; A4N++) {
              n9l.lineTo(
                Q9l.pixelFromBar(B9l.length - '1' * 1),
                Q9l.pixelFromPrice(B9l[B9l.length - 1][r9l.bottomBand], F9l, r9l.bottomAxis),
              )
              n9l.fill()
              K4N += 2
            }
            if (F4k.O6N(K4N.toString(), K4N.toString().length, 53051) !== P4N) {
              n9l.lineTo(
                Q9l.pixelFromBar(B9l.length % +'8'),
                Q9l.pixelFromPrice(B9l[B9l.length % ('4' | 0)][r9l.bottomBand], F9l, r9l.bottomAxis),
              )
              n9l.fill()
            }
          } else {
            m9l = B9l.length
            for (o9l = 0; o9l < l9l[0].tick - B9l.length; o9l++) {
              n9l.lineTo(Q9l.pixelFromBar(m9l), Q9l.pixelFromPrice(v9l.futureA[o9l], F9l, r9l.topAxis))
              m9l++
            }
            l3N = 265095762
            m3N = -485722134
            r3N = 2
            for (var C3N = 1; F4k.O6N(C3N.toString(), C3N.toString().length, 31876) !== l3N; C3N++) {
              m9l++
              n9l.lineTo(l9l[8].x, l9l[4].y)
              r3N += 2
            }
            if (F4k.x6N(r3N.toString(), r3N.toString().length, 94182) !== m3N) {
              m9l--
              n9l.lineTo(l9l[0].x, l9l[+'0'].y)
            }
            for (o9l = l9l['0' - 0].tick - 1 - B9l.length; o9l >= 0; o9l--) {
              n9l.lineTo(Q9l.pixelFromBar(m9l), Q9l.pixelFromPrice(v9l.futureB[o9l], F9l, r9l.bottomAxis))
              m9l--
            }
            n9l.lineTo(
              Q9l.pixelFromBar(B9l.length - 1),
              Q9l.pixelFromPrice(B9l[B9l.length - 1][r9l.bottomBand], F9l, r9l.bottomAxis),
            )
            n9l.fill()
          }
        }
        for (Y9l = 0; Y9l < l9l.length; Y9l++) {
          n9l.beginPath()
          n9l.moveTo(l9l[Y9l].x, l9l[Y9l].y)
          if (v9l.futureA[l9l[Y9l].tick - B9l.length] > v9l.futureB[l9l[Y9l].tick - B9l.length]) {
            n9l.fillStyle = v9l.outputs[v9l.outputMap[r9l.topBand]]
          } else {
            n9l.fillStyle = v9l.outputs[v9l.outputMap[r9l.bottomBand]]
          }
          if (Y9l + '2' * 1 > l9l.length) {
            for (o9l = l9l[Y9l].tick; o9l < v9l.futureA.length + B9l.length; o9l++) {
              n9l.lineTo(Q9l.pixelFromBar(o9l), Q9l.pixelFromPrice(v9l.futureA[o9l - B9l.length], F9l, r9l.topAxis))
            }
            for (X9l = v9l.futureA.length - ('1' - 0); X9l >= l9l[Y9l].tick - B9l.length; X9l--) {
              n9l.lineTo(Q9l.pixelFromBar(X9l + B9l.length), Q9l.pixelFromPrice(v9l.futureB[X9l], F9l, r9l.bottomAxis))
            }
          } else {
            for (o9l = l9l[Y9l].tick; o9l < l9l[Y9l + 1].tick; o9l++) {
              n9l.lineTo(Q9l.pixelFromBar(o9l), Q9l.pixelFromPrice(v9l.futureA[o9l - B9l.length], F9l, r9l.topAxis))
            }
            n9l.lineTo(l9l[Y9l + 1].x, l9l[Y9l + 1].y)
            for (X9l = l9l[Y9l + 1].tick - ('1' - 0); X9l >= l9l[Y9l].tick; X9l--) {
              n9l.lineTo(Q9l.pixelFromBar(X9l), Q9l.pixelFromPrice(v9l.futureB[X9l - B9l.length], F9l, r9l.bottomAxis))
            }
          }
          n9l.fill()
        }
      }
      Q9l.endClip()
    }
    V6l.drawLegendItem = function(A4l, t4l, P4l, S4l, p4l) {
      var I4l, M4l, d4l, b4l, U4l
      if (!p4l) {
        p4l = 1
      }
      I4l = t4l[0]
      M4l = t4l[1]
      d4l = 10
      b4l = 10
      U4l = A4l.chart.context
      U4l.globalAlpha = p4l
      U4l.fillStyle = S4l
      U4l.fillRect(I4l, M4l, d4l, b4l)
      U4l.globalAlpha = 1
      F4k.p4k(13)
      I4l += F4k.B4k(2, d4l)
      U4l.fillStyle = A4l.defaultColor
      U4l.fillText(P4l, I4l, M4l)
      F4k.r4k(2)
      var n9K = F4k.C4k(78, 84)
      I4l += U4l.measureText(P4l).width + n9K
      return [I4l, M4l]
    }
    V6l.drawLegend = function(w4l, Z4l) {
      var Y4l, v4l, E4l, Q4l, B4l, r4l, q4N, C4N, Z4N, n4l, o4l, X4l, F4l, l4l, m6N, r6N, q6N, T4l
      Y4l = Z4l.coordinates
      v4l = w4l.chart.context
      v4l.textBaseline = 'top'
      E4l = v4l.font
      w4l.canvasFont('stx-legend', v4l)
      if (!Y4l) {
        Y4l = Z4l.chart.legend
      }
      Q4l = [Y4l.x, Y4l.y]
      B4l = w4l.defaultColor
      r4l = w4l.layout.chartType
      if (w4l.chart.customChart && w4l.chart.customChart.chartType) {
        r4l = w4l.chart.customChart.chartType
      }
      if (!Z4l.noBase) {
        q4N = 1318120733
        C4N = -1562117230
        F4k.p4k(1)
        Z4N = F4k.B4k(0, '2')
        for (var v4N = +'1'; F4k.x6N(v4N.toString(), v4N.toString().length, 42677) !== q4N; v4N++) {
          Z4N += 2
        }
        if (F4k.x6N(Z4N.toString(), Z4N.toString().length, '37406' * 1) !== C4N) {
        }
        if (w4l.chart.baseLegendColors instanceof Array) {
          o4l = w4l.chart.baseLegendColors
          if (o4l.length > 1) {
            X4l = v4l.createLinearGradient(Q4l[0], Q4l[1], Q4l[0] + 10, Q4l[1])
            for (n4l = 0; n4l < o4l.length; n4l++) {
              X4l.addColorStop(n4l / (o4l.length - 1), o4l[n4l])
            }
            B4l = X4l
          } else if (o4l.length > 0) {
            B4l = o4l[0]
          } else {
            B4l = w4l.getCanvasColor('stx_line_chart')
          }
        } else if (r4l == 'mountain') {
          n4l = w4l.canvasStyle('stx_mountain_chart')
          F4l = n4l.borderTopColor
          if (F4l && F4l != 'transparent') {
            B4l = F4l
          }
        } else {
          B4l = null
        }
        if (B4l) {
          if (Z4l.chart.symbolDisplay) {
            m6N = -204892728
            r6N = -1420000678
            q6N = 2
            for (var e6N = 1; F4k.x6N(e6N.toString(), e6N.toString().length, 44313) !== m6N; e6N++) {
              l4l = Z4l.chart.symbolDisplay
              q6N += 2
            }
            if (F4k.x6N(q6N.toString(), q6N.toString().length, +'63157') !== r6N) {
              l4l = Z4l.chart.symbolDisplay
            }
          } else {
            l4l = Z4l.chart.symbol
          }
          Q4l = V6l.drawLegendItem(w4l, Q4l, l4l, B4l)
        }
      }
      for (var i4l in Z4l.legendColorMap) {
        T4l = i4l
        if (Z4l.legendColorMap[i4l].display) {
          T4l = Z4l.legendColorMap[i4l].display
        }
        Q4l = V6l.drawLegendItem(w4l, Q4l, T4l, Z4l.legendColorMap[i4l].color, Z4l.legendColorMap[i4l].opacity)
      }
      v4l.font = E4l
    }
    V6l.minMax = function(q4l, y4l) {
      var e4l, m4l, x4l, O4l
      e4l = Number.MAX_VALUE
      F4k.r4k(2)
      var j9K = F4k.C4k(11, 10)
      m4l = Number.MAX_VALUE * j9K
      for (var a4l = 0; a4l < q4l.length; a4l++) {
        x4l = q4l[a4l]
        if (!x4l) continue
        O4l = x4l[y4l]
        if (!O4l && O4l !== 0) continue
        if (isNaN(O4l)) continue
        e4l = Math.min(e4l, O4l)
        m4l = Math.max(m4l, O4l)
      }
      return [e4l, m4l]
    }
    V6l.destroy = function(H4l, R38) {
      var V38, X5N, k4l, D38, i5N
      V38 = V6l.ChartEngine.registeredContainers
      for (var z4l = 0; z4l < V38.length; z4l++) {
        if (V38[z4l] == H4l.chart.container) {
          V38.splice(z4l, +'1')
          break
        }
      }
      H4l.styles = {}
      H4l.destroy()
      H4l = null
      V6l.ThemeManager.destroy()
      if (V6l.MenuManager) {
        V6l.MenuManager.destroy()
      }
      if (R38) {
        X5N = '.'
        X5N += 'stx-wrapp'
        X5N += 'er'
        k4l = D6l(X5N).childNodes
        D38 = D6l('.stx-wrapper').querySelectorAll(R38)
        for (var j4l = 0; j4l < D38.length; j4l++) {
          if (D38[j4l].parentNode == D6l('.stx-wrapper')) {
            V6l.appendClassName(D38[j4l], 'stx-passover')
          }
        }
        for (var u4l = k4l.length - 1; u4l >= 0; u4l--) {
          if (V6l.hasClassName(k4l[u4l], 'stx-passover')) {
            V6l.unappendClassName(k4l[u4l], 'stx-passover')
          } else {
            k4l[u4l].parentNode.removeChild(k4l[u4l])
          }
        }
      } else {
        i5N = '.s'
        i5N += 'tx-wrapp'
        i5N += 'er'
        D6l(i5N).parentNode.removeChild(D6l('.stx-wrapper'))
      }
    }
    V6l.addMemberToMasterdata = function(h38, G38, L38, W38, J38, g38) {
      var K38, N38, c38, f38, P5N
      if (!L38) {
        return
      }
      K38 = 0
      N38 = 0
      while (K38 < h38.masterData.length && N38 < L38.length) {
        c38 = L38[N38]
        f38 = h38.masterData[K38]
        if (!c38.DT) {
          c38.DT = V6l.strToDateTime(c38.Date)
        }
        if (c38.DT.getTime() == f38.DT.getTime()) {
          P5N = 'u'
          P5N += 'nd'
          P5N += 'efined'
          if (W38) {
            for (var C38 = +'0'; C38 < W38.length; C38++) {
              f38[W38[C38]] = c38[W38[C38]]
            }
          } else if (J38) {
            f38[G38] = c38
          } else if (g38) {
            f38[G38] = c38[g38]
          } else if (h38.layout.adj && typeof c38.Adj_Close != P5N) {
            f38[G38] = c38.Adj_Close
          } else {
            f38[G38] = c38.Close
          }
          N38++
          K38++
          continue
        }
        if (c38.DT < f38.DT) {
          N38++
        } else {
          K38++
        }
      }
    }
    V6l.ThemeHelper = function(I38) {
      var N7K,
        T7K,
        v5N,
        e5N,
        Z5N,
        Q5N,
        A5N,
        s5N,
        K5N,
        s38,
        U38,
        a4N,
        L4N,
        l4N,
        w5N,
        O5N,
        x5N,
        U5N,
        C5N,
        q5N,
        r5N,
        m5N,
        l5N,
        L5N,
        a5N
      N7K = 'st'
      N7K += 'x_mo'
      N7K += 'untain_chart'
      T7K = 'st'
      T7K += 'x_ca'
      T7K += 'ndl'
      T7K += 'e_up'
      v5N = 'Can'
      v5N += 'd'
      v5N += 'le/Ba'
      v5N += 'r'
      e5N = 'stx_candle_s'
      e5N += 'hadow_down'
      Z5N = 'stx_candle'
      Z5N += '_shadow_u'
      Z5N += 'p'
      Q5N = 'stx_c'
      Q5N += 'andle_down'
      A5N = 'C'
      A5N += 'andle/Bar'
      s5N = 'stx_'
      s5N += 'xa'
      s5N += 'x'
      s5N += 'is'
      K5N = 'Grid '
      K5N += 'Dividers'
      this.params = I38
      s38 = I38.stx
      U38 = '#FFFFFF'
      if (s38.chart.container) {
        U38 = getComputedStyle(s38.chart.container).backgroundColor
        if (V6l.isTransparent(U38)) {
          U38 = s38.containerColor
        }
      }
      this.settings.chart.Background.color = V6l.hexToRgba(U38)
      this.settings.chart['Grid Lines'].color = V6l.hexToRgba(s38.canvasStyle('stx_grid').color)
      this.settings.chart[K5N].color = V6l.hexToRgba(s38.canvasStyle('stx_grid_dark').color)
      this.settings.chart['Axis Text'].color = V6l.hexToRgba(s38.canvasStyle(s5N).color)
      this.settings.chartTypes['Candle/Bar'].up.color = V6l.hexToRgba(s38.canvasStyle('stx_candle_up').color)
      this.settings.chartTypes[A5N].down.color = V6l.hexToRgba(s38.canvasStyle(Q5N).color)
      a4N = 1993776382
      L4N = 1697031153
      l4N = 2
      for (var r4N = 1; F4k.O6N(r4N.toString(), r4N.toString().length, 49872) !== a4N; r4N++) {
        w5N = 'Ca'
        w5N += 'nd'
        w5N += 'le/Bar'
        O5N = 'stx_can'
        O5N += 'dle_shadow_d'
        O5N += 'own'
        x5N = 'stx_'
        x5N += 'candle_sha'
        x5N += 'dow_down'
        U5N = 'st'
        U5N += 'x_candle_down'
        this.settings.chartTypes[U5N].up.wick = V6l.hexToRgba(s38.canvasStyle('stx_candle_up').color)
        this.settings.chartTypes[x5N].down.wick = V6l.hexToRgba(s38.canvasStyle('Candle/Bar').color)
        this.settings.chartTypes['Candle/Bar'].up.border = V6l.hexToRgba(s38.canvasStyle('Candle/Bar').borderLeftColor)
        this.settings.chartTypes[O5N].down.border = V6l.hexToRgba(s38.canvasStyle('Candle/Bar').borderLeftColor)
        if (V6l.isTransparent(s38.canvasStyle('stx_candle_up').borderLeftColor)) {
          this.settings.chartTypes[w5N].up.border = 1
        }
        if (V6l.isTransparent(s38.canvasStyle('Candle/Bar').borderLeftColor)) {
          this.settings.chartTypes['stx_candle_shadow_down'].down.border = +'1'
        }
        this.settings.chartTypes.Line.color = V6l.hexToRgba(s38.canvasStyle('Candle/Bar').color)
        l4N += 2
      }
      if (F4k.x6N(l4N.toString(), l4N.toString().length, 25451) !== L4N) {
        C5N = 'Candle'
        C5N += '/Bar'
        q5N = 'C'
        q5N += 'andl'
        q5N += 'e'
        q5N += '/Bar'
        r5N = 'stx_can'
        r5N += 'dl'
        r5N += 'e_up'
        m5N = 'Can'
        m5N += 'dle/'
        m5N += 'Ba'
        m5N += 'r'
        l5N = 'stx_candl'
        l5N += 'e_sh'
        l5N += 'adow_down'
        L5N = 'Can'
        L5N += 'd'
        L5N += 'le/Bar'
        a5N = 'Can'
        a5N += 'dle/Bar'
        this.settings.chartTypes[a5N].up.wick = V6l.hexToRgba(s38.canvasStyle(L5N).color)
        this.settings.chartTypes['Candle/Bar'].down.wick = V6l.hexToRgba(s38.canvasStyle(l5N).color)
        this.settings.chartTypes[m5N].up.border = V6l.hexToRgba(
          s38.canvasStyle('stx_candle_shadow_down').borderLeftColor,
        )
        this.settings.chartTypes['Candle/Bar'].down.border = V6l.hexToRgba(
          s38.canvasStyle('stx_candle_shadow_down').borderLeftColor,
        )
        if (V6l.isTransparent(s38.canvasStyle(r5N).borderLeftColor)) {
          this.settings.chartTypes[q5N].up.border = 6
        }
        if (V6l.isTransparent(s38.canvasStyle(C5N).borderLeftColor)) {
          this.settings.chartTypes['Candle/Bar'].down.border = 7
        }
        this.settings.chartTypes.Line.color = V6l.hexToRgba(s38.canvasStyle('Candle/Bar').color)
      }
      this.settings.chartTypes['Candle/Bar'].up.wick = V6l.hexToRgba(s38.canvasStyle(Z5N).color)
      this.settings.chartTypes['Candle/Bar'].down.wick = V6l.hexToRgba(s38.canvasStyle(e5N).color)
      this.settings.chartTypes[v5N].up.border = V6l.hexToRgba(s38.canvasStyle(T7K).borderLeftColor)
      this.settings.chartTypes['Candle/Bar'].down.border = V6l.hexToRgba(
        s38.canvasStyle('stx_candle_down').borderLeftColor,
      )
      if (V6l.isTransparent(s38.canvasStyle('stx_candle_up').borderLeftColor)) {
        this.settings.chartTypes['Candle/Bar'].up.border = null
      }
      if (V6l.isTransparent(s38.canvasStyle('stx_candle_down').borderLeftColor)) {
        this.settings.chartTypes['Candle/Bar'].down.border = null
      }
      this.settings.chartTypes.Line.color = V6l.hexToRgba(s38.canvasStyle('stx_line_chart').color)
      this.settings.chartTypes.Mountain.color = V6l.hexToRgba(s38.canvasStyle(N7K).backgroundColor)
    }
    V6l.ThemeHelper.prototype.settings = {
      chart: {
        Background: { color: null },
        'Grid Lines': { color: null },
        'Grid Dividers': { color: null },
        'Axis Text': { color: null },
      },
      chartTypes: {
        'Candle/Bar': {
          up: { color: null, wick: null, border: null },
          down: { color: null, wick: null, border: null },
        },
        Line: { color: null },
        Mountain: { color: null },
      },
    }
    V6l.ThemeHelper.prototype.update = function() {
      var D7K, o7K, V7K, y7K, B7K, f7K, G7K, S7K, u7K, d7K, t7K, W7K, k7K, M38, d38
      D7K = 'stx_mountai'
      D7K += 'n'
      D7K += '_chart'
      o7K = 'bor'
      o7K += 'derTopColor'
      V7K = 'Ca'
      V7K += 'ndle/Bar'
      y7K = 'C'
      y7K += 'a'
      y7K += 'ndle/Bar'
      B7K = 'co'
      B7K += 'l'
      B7K += 'or'
      f7K = 'Cand'
      f7K += 'le/Bar'
      G7K = 'col'
      G7K += 'o'
      G7K += 'r'
      S7K = 'C'
      S7K += 'an'
      S7K += 'dle/B'
      S7K += 'ar'
      u7K = 'c'
      u7K += 'o'
      u7K += 'lo'
      u7K += 'r'
      d7K = 'Ax'
      d7K += 'is T'
      d7K += 'e'
      d7K += 'xt'
      t7K = 'stx_grid'
      t7K += '_dar'
      t7K += 'k'
      W7K = 'Gri'
      W7K += 'd Lines'
      function p38(t38, b38, S38) {
        var A38
        A38 = d38[t38]
        for (var P38 in A38) {
          M38.setStyle(P38, b38, S38)
        }
      }
      k7K = 'co'
      k7K += 'l'
      k7K += 'o'
      k7K += 'r'
      M38 = this.params.stx
      d38 = {
        stx_candle_up: {
          stx_candle_up: !!1,
          stx_bar_up: !!1,
          stx_hollow_candle_up: !!{},
          stx_line_up: !!'1',
          stx_baseline_up: !'',
        },
        stx_candle_down: {
          stx_candle_down: !![],
          stx_bar_down: !!{},
          stx_hollow_candle_down: !!1,
          stx_line_down: !!'1',
          stx_baseline_down: !![],
        },
        stx_shadow_up: { stx_candle_shadow_up: !!1 },
        stx_shadow_down: { stx_candle_shadow_down: !0 },
        stx_line_chart: { stx_bar_chart: !!'1', stx_line_chart: !![] },
        stx_grid: { stx_grid: !!{}, stx_grid_border: !![] },
        stx_grid_dark: { stx_grid_dark: !![] },
        stx_xaxis: { stx_xaxis_dark: !!'1', stx_xaxis: !!{}, stx_yaxis: !0, stx_yaxis_dark: !![] },
        stx_mountain_chart: { stx_mountain_chart: !!{} },
        stx_market_session: { stx_market_session: !![] },
      }
      M38.chart.container.style.backgroundColor = this.settings.chart.Background.color
      p38('stx_grid', k7K, this.settings.chart[W7K].color)
      p38(t7K, 'color', this.settings.chart['Grid Dividers'].color)
      p38('stx_xaxis', 'color', this.settings.chart[d7K].color)
      p38('stx_candle_up', u7K, this.settings.chartTypes[S7K].up.color)
      p38('stx_candle_down', 'color', this.settings.chartTypes['Candle/Bar'].down.color)
      p38('stx_shadow_up', G7K, this.settings.chartTypes[f7K].up.wick)
      p38('stx_shadow_down', B7K, this.settings.chartTypes['Candle/Bar'].down.wick)
      M38.setStyle('stx_candle_up', 'borderLeftColor', this.settings.chartTypes[y7K].up.border)
      M38.setStyle('stx_candle_down', 'borderLeftColor', this.settings.chartTypes[V7K].down.border)
      p38('stx_line_chart', 'color', this.settings.chartTypes.Line.color)
      M38.setStyle('stx_mountain_chart', o7K, this.settings.chartTypes.Mountain.color)
      M38.setStyle('stx_mountain_chart', 'backgroundColor', V6l.hexToRgba(this.settings.chartTypes.Mountain.color, 0.8))
      M38.setStyle(D7K, 'color', V6l.hexToRgba(this.settings.chartTypes.Mountain.color, 0.1))
      M38.draw()
    }
    V6l.NameValueStore = function() {}
    V6l.NameValueStore.prototype.toJSONIfNecessary = function(w38) {
      var S4N, G4N, f4N, Z38
      F4k.r4k(0)
      S4N = F4k.B4k('55066610', 1)
      G4N = 1120923964
      f4N = 2
      for (var y4N = '1' * 1; F4k.x6N(y4N.toString(), y4N.toString().length, 78244) !== S4N; y4N++) {
        if (w38.constructor === String) {
          return w38
        }
        f4N += 2
      }
      if (F4k.x6N(f4N.toString(), f4N.toString().length, 3521) !== G4N) {
        if (w38.constructor == String) {
          return w38
        }
      }
      try {
        Z38 = JSON.stringify(w38)
        return Z38
      } catch (Q38) {
        var J7K
        J7K = 'Can'
        J7K += 'no'
        J7K += 't convert to '
        J7K += 'JSON: '
        F4k.r4k(13)
        console.log(F4k.C4k(w38, J7K))
        return null
      }
    }
    V6l.NameValueStore.prototype.fromJSONIfNecessary = function(B38) {
      var n38
      try {
        n38 = JSON.parse(B38)
        return n38
      } catch (o38) {
        return B38
      }
    }
    V6l.NameValueStore.prototype.get = function(i38, Y38) {
      var v38, K3N, s3N, A3N
      v38 = V6l.localStorage.getItem(i38)
      K3N = -507398557
      s3N = 194810243
      F4k.p4k(0)
      A3N = F4k.B4k('2', 1)
      for (var U3N = 1; F4k.x6N(U3N.toString(), U3N.toString().length, 52200) !== K3N; U3N++) {
        Y38(1, this.fromJSONIfNecessary(v38))
        A3N += 2
      }
      if (F4k.x6N(A3N.toString(), A3N.toString().length, 39305) !== s3N) {
        Y38(null, this.fromJSONIfNecessary(v38))
      }
    }
    V6l.NameValueStore.prototype.set = function(r38, X38, F38) {
      V6l.localStorage.setItem(r38, this.toJSONIfNecessary(X38))
      if (F38) {
        F38(null)
      }
    }
    V6l.NameValueStore.prototype.remove = function(l38, T38) {
      V6l.localStorage.removeItem(l38)
      if (T38) {
        T38(null)
      }
    }
    V6l.Plotter = function() {
      this.seriesArray = []
      this.seriesMap = {}
    }
    V6l.Plotter.prototype = {
      Series: function(e38, m38, a38, E38, O38) {
        this.name = e38
        this.strokeOrFill = m38
        this.color = a38
        this.opacity = E38
        this.width = O38
        this.moves = []
        this.text = []
        if (!E38 || E38 > 1 || E38 < 0) {
          F4k.p4k(0)
          this.opacity = F4k.C4k('1', 1)
        }
        if (!O38 || O38 > 25 || O38 < 1) {
          F4k.r4k(0)
          this.width = F4k.B4k('1', 1)
        }
      },
      newSeries: function(y38, u38, x38, z38, k38) {
        var q38
        if (x38.constructor == String) {
          q38 = new this.Series(y38, u38, x38, z38, k38)
        } else {
          q38 = new this.Series(y38, u38, x38.color, x38.opacity, k38)
        }
        this.seriesArray.push(q38)
        this.seriesMap[y38] = q38
      },
      moveTo: function(H38, V68, D68) {
        var j38
        j38 = this.seriesMap[H38]
        j38.moves.push({ action: 'moveTo', x: V68, y: D68 })
      },
      lineTo: function(c68, f68, C68) {
        var R68
        R68 = this.seriesMap[c68]
        R68.moves.push({ action: 'lineTo', x: f68, y: C68 })
      },
      dashedLineTo: function(N68, G68, W68, L68) {
        var K68
        K68 = this.seriesMap[N68]
        K68.moves.push({ action: 'dashedLineTo', x: G68, y: W68, pattern: L68 })
      },
      quadraticCurveTo: function(g68, J68, s68, U68, I68) {
        var g7K, h68
        g7K = 'qua'
        g7K += 'draticCur'
        g7K += 'v'
        g7K += 'eTo'
        h68 = this.seriesMap[g68]
        h68.moves.push({ action: g7K, x0: J68, y0: s68, x: U68, y: I68 })
      },
      addText: function(p68, d68, A68, P68, t68, b68, S68) {
        var M68
        M68 = this.seriesMap[p68]
        M68.text.push({ text: d68, x: A68, y: P68, bg: t68 })
      },
      drawText: function(Z68, o68) {
        var w68, n68, Q68, v68
        for (var B68 = 0; B68 < o68.text.length; B68++) {
          w68 = o68.text[B68]
          if (w68.bg) {
            n68 = w68.width ? w68.width : Z68.measureText(w68.text).width
            Q68 = w68.height ? w68.height : 12
            v68 = Z68.fillStyle
            Z68.fillStyle = w68.bg
            if (Z68.textAlign == 'right') {
              Z68.fillRect(w68.x, w68.y + Q68 / 2, -n68, -Q68)
            } else {
              Z68.fillRect(w68.x, w68.y + Q68 / 2, n68, Q68)
            }
            Z68.fillStyle = v68
          }
          Z68.fillText(w68.text, w68.x, w68.y)
        }
      },
      draw: function(i68, E68) {
        var O68, e68, T68, l68, F68, p7K, Y68
        O68 = i68.lineWidth
        e68 = i68.fillStyle
        T68 = i68.strokeStyle
        l68 = i68.globalAlpha
        for (var X68 = 0; X68 < this.seriesArray.length; X68++) {
          F68 = this.seriesArray[X68]
          if (E68 && F68.name != E68) continue
          i68.beginPath()
          i68.lineWidth = F68.width
          i68.globalAlpha = F68.opacity
          i68.fillStyle = F68.color
          i68.strokeStyle = F68.color
          for (var r68 = 0; r68 < F68.moves.length; r68++) {
            p7K = 'dashe'
            p7K += 'dLineTo'
            Y68 = F68.moves[r68]
            if (Y68.action == 'quadraticCurveTo') {
              i68[Y68.action](Y68.x0, Y68.y0, Y68.x, Y68.y)
            } else if (Y68.action == p7K) {
              i68[Y68.action](F68.moves[r68 - 1].x, F68.moves[r68 - 1].y, Y68.x, Y68.y, Y68.pattern)
            } else {
              i68[Y68.action](Y68.x, Y68.y)
            }
          }
          if (F68.strokeOrFill == 'fill') {
            i68.fill()
          } else {
            i68.stroke()
          }
          i68.closePath()
          this.drawText(i68, F68)
          i68.lineWidth = 1
        }
        i68.lineWidth = O68
        i68.fillStyle = e68
        i68.strokeStyle = T68
        i68.globalAlpha = l68
      },
    }
    V6l.EaseMachine = function(a68, x68, m68, q68) {
      this.fc = a68
      this.ms = x68
      if (m68 || m68 === 0) {
        this.reset(m68, q68)
      }
    }
    V6l.EaseMachine.prototype.reset = function(y68, k68) {
      var Z3N, e3N, v3N
      if (!y68 && y68 !== 0) {
        y68 = this.currentValues
      }
      this.hasCompleted = !!''
      this.running = !'1'
      this.okayToRun = !!'1'
      F4k.r4k(41)
      this.useNameValuePairs = F4k.B4k(typeof k68, 'object')
      this.startTime = Date.now()
      if (this.useNameValuePairs) {
        this.startValues = y68
        this.endValues = k68
      } else {
        Z3N = 2082406616
        e3N = 1475472642
        v3N = 2
        for (var N4N = +'1'; F4k.x6N(N4N.toString(), N4N.toString().length, 15539) !== Z3N; N4N++) {
          this.startValues = { default: y68 }
          v3N += 2
        }
        if (F4k.O6N(v3N.toString(), v3N.toString().length, 26813) !== e3N) {
          this.startValues = { default: y68 }
        }
        this.endValues = { default: k68 }
      }
      this.changeValues = {}
      this.currentValues = {}
      for (var u68 in this.startValues) {
        this.changeValues[u68] = this.endValues[u68] - this.startValues[u68]
      }
    }
    V6l.EaseMachine.prototype.next = function() {
      var z68
      z68 = Date.now()
      if (z68 >= this.startTime + this.ms) {
        z68 = this.startTime + this.ms
        this.hasCompleted = !!1
        this.running = !{}
      }
      this.currentValues = {}
      for (var j68 in this.changeValues) {
        this.currentValues[j68] = this.fc(z68 - this.startTime, this.startValues[j68], this.changeValues[j68], this.ms)
      }
      if (!this.useNameValuePairs) {
        return this.currentValues['default']
      }
      return this.currentValues
    }
    V6l.EaseMachine.prototype.hasCompleted = !{}
    V6l.EaseMachine.prototype.run = function(c08, D08, V08, f08) {
      var t3N, d3N, u3N, H68
      if (this.afid) {
        cancelAnimationFrame(this.afid)
      }
      function R08() {
        var C08
        H68.afid = null
        if (!H68.okayToRun) {
          return
        }
        C08 = H68.next()
        c08(C08)
        if (H68.hasCompleted) {
          return
        }
        H68.afid = requestAnimationFrame(R08)
      }
      this.running = !!{}
      if (D08 || D08 === 0) {
        this.reset(D08, V08)
      } else if (V08 || V08 === '0' - 0) {
        this.reset(this.currentValues, V08)
      }
      t3N = 1121724567
      d3N = 1151897249
      u3N = +'2'
      for (var G3N = 1; F4k.O6N(G3N.toString(), G3N.toString().length, 3288) !== t3N; G3N++) {
        H68 = this
        u3N += +'2'
      }
      if (F4k.O6N(u3N.toString(), u3N.toString().length, 46553) !== d3N) {
        H68 = this
      }
      if (f08) {
        this.afid = requestAnimationFrame(R08)
      } else {
        R08()
      }
    }
    V6l.EaseMachine.prototype.stop = function() {
      var n7K
      n7K = 'unde'
      n7K += 'fine'
      n7K += 'd'
      if (this.afid) {
        cancelAnimationFrame(this.afid)
      }
      this.afid = null
      this.okayToRun = !1
      this.running = ![]
      if (typeof this.useNameValuePairs == n7K) {
        return {}
      }
      if (!this.useNameValuePairs) {
        return this.currentValues['default']
      }
      return this.currentValues
    }
    V6l.Renderer = function() {}
    V6l.Renderer.prototype.performCalculations = function() {}
    V6l.Renderer.prototype.draw = function() {}
    V6l.Renderer.prototype.construct = function(N08) {
      var z7K, I7K, j7K, Y4N, h4N, M4N, K08
      z7K = 'ch'
      z7K += 'ar'
      z7K += 't'
      I7K = 'l'
      I7K += 'eg'
      I7K += 'ac'
      I7K += 'y'
      j7K = 'l'
      j7K += 'i'
      j7K += 'n'
      j7K += 'e'
      Y4N = -2120792113
      h4N = -1923113660
      M4N = 2
      for (var F4N = 1; F4k.O6N(F4N.toString(), F4N.toString().length, 90422) !== Y4N; F4N++) {
        K08 = N08.params ? N08.params : {}
        if (!K08.name) {
          K08.name = V6l.uniqueID()
        }
        if (!K08.heightPercentage) {
          K08.heightPercentage = 0.7
        }
        if (!K08.opacity) {
          K08.opacity = 1
        }
        M4N += 2
      }
      if (F4k.x6N(M4N.toString(), M4N.toString().length, 27394) !== h4N) {
        K08 = N08.params ? N08.params : {}
        if (-K08.name) {
          K08.name = V6l.uniqueID()
        }
        if (~K08.heightPercentage) {
          K08.heightPercentage = 402
        }
        if (-K08.opacity) {
          K08.opacity = 8
        }
      }
      if (!K08.type) {
        K08.type = j7K
      }
      if (K08.type == I7K || K08.type == 'line' || K08.type == 'mountain') {
        K08.highlightable = !!'1'
      }
      if (!K08.panel) {
        K08.panel = z7K
      }
      this.cb = N08.callback
      this.params = K08
      this.seriesParams = []
      this.caches = {}
      this.colors = {}
    }
    V6l.Renderer.prototype.attachSeries = function(W08, L08) {
      var Y7K, G08, E3N, b3N, X3N, H7K, M7K, h7K
      Y7K = 'st'
      Y7K += 'r'
      Y7K += 'in'
      Y7K += 'g'
      if (!this.stx || !this.stx.chart.series[W08]) {
        return this
      }
      G08 = {
        field: W08,
        chartType: this.params.type,
        display: this.stx.chart.series[W08].parameters.display,
        border_color_up: this.params.defaultBorders ? 'auto' : null,
        fill_color_up: this.stx.chart.series[W08].parameters.color,
        opacity_up: this.params.opacity,
        border_color_down: this.params.defaultBorders ? 'auto' : null,
        fill_color_down: this.stx.chart.series[W08].parameters.color,
        opacity_down: this.params.opacity,
        color: this.stx.chart.series[W08].parameters.color,
      }
      if (typeof L08 == Y7K) {
        G08.color = G08.fill_color_down = G08.fill_color_up = L08
      } else if (typeof L08 == 'object') {
        for (var h08 in L08) {
          G08[h08] = L08[h08]
        }
        if (G08.color) {
          if (!G08.fill_color_up) {
            G08.fill_color_up = G08.color
          }
          E3N = 137390825
          b3N = 1682490537
          F4k.r4k(2)
          X3N = F4k.C4k(0, '2')
          for (var P3N = 1; F4k.x6N(P3N.toString(), P3N.toString().length, 98553) !== E3N; P3N++) {
            if (~G08.fill_color_down) {
              G08.fill_color_down = G08.color
            }
            X3N += 2
          }
          if (F4k.x6N(X3N.toString(), X3N.toString().length, +'45835') !== b3N) {
            if (!G08.fill_color_down) {
              G08.fill_color_down = G08.color
            }
          }
          if (!G08.fill_color_down) {
            G08.fill_color_down = G08.color
          }
        }
      }
      this.removeSeries(W08, !!{}).seriesParams.push(G08)
      if (G08.fill_color_up != G08.fill_color_down) {
        H7K = ' d'
        H7K += 'own'
        M7K = ' '
        M7K += 'down'
        h7K = ' '
        h7K += 'u'
        h7K += 'p'
        F4k.p4k(13)
        this.colors[F4k.C4k(' up', W08)] = {
          color: G08.fill_color_up,
          opacity: G08.opacity_up,
          display: G08.display ? G08.display + ' up' : W08 + h7K,
        }
        F4k.p4k(13)
        this.colors[F4k.B4k(' dn', W08)] = {
          color: G08.fill_color_down,
          opacity: G08.opacity_down,
          display: G08.display ? G08.display + M7K : W08 + H7K,
        }
      } else {
        this.colors[W08] = {
          color: G08.fill_color_up,
          opacity: G08.opacity_up,
          display: G08.display ? G08.display : W08,
        }
      }
      if (this.params.yAxis) {
        this.stx.addYAxis(this.stx.panels[this.params.panel], this.params.yAxis)
      }
      return this
    }
    V6l.Renderer.prototype.removeSeries = function(g08, p08) {
      var F7K, s08, I08
      F7K = ' '
      F7K += 'u'
      F7K += 'p'
      for (var J08 = 0; J08 < this.seriesParams.length; J08++) {
        if (this.seriesParams[J08].field == g08) {
          this.seriesParams.splice(J08, +'1')
          break
        }
      }
      F4k.r4k(13)
      delete this.colors[F4k.C4k(F7K, g08)]
      F4k.r4k(13)
      delete this.colors[F4k.B4k(' dn', g08)]
      delete this.colors[g08]
      if (!p08) {
        if (!this.stx.chart.series[g08] || !this.stx.chart.series[g08].parameters.permanent) {
          s08 = !{}
          for (var M08 in this.stx.chart.seriesRenderers) {
            I08 = this.stx.chart.seriesRenderers[M08]
            for (var U08 = 0; U08 < I08.seriesParams.length; U08++) {
              if (I08.seriesParams[U08].field == g08) {
                s08 = !!{}
                break
              }
            }
            if (s08) break
          }
          if (!s08) {
            this.stx.deleteSeries(g08, this.stx.chart)
          }
        }
      }
      this.stx.deleteYAxisIfUnused(this.stx.panels[this.params.panel], this.params.yAxis)
      return this
    }
    V6l.Renderer.prototype.removeAllSeries = function(t08) {
      var Q4N, U4N, x4N, d08
      if (t08) {
        Q4N = -1163713602
        U4N = -2006707631
        x4N = +'2'
        for (var w4N = 1; F4k.O6N(w4N.toString(), w4N.toString().length, 49242) !== Q4N; w4N++) {
          d08 = []
          x4N += 2
        }
        if (F4k.O6N(x4N.toString(), x4N.toString().length, +'74858') !== U4N) {
          d08 = []
        }
        d08 = []
        for (var A08 = 0; A08 < this.seriesParams.length; A08++) {
          d08.push(this.seriesParams[A08].field)
        }
        for (var P08 = '0' - 0; P08 < d08.length; P08++) {
          this.removeSeries(d08[P08])
        }
      }
      this.seriesParams = []
      this.colors = {}
      this.stx.deleteYAxisIfUnused(this.stx.panels[this.params.panel], this.params.yAxis)
      return this
    }
    V6l.Renderer.prototype.ready = function() {
      this.stx.createDataSet()
      this.stx.draw()
      return this
    }
    V6l.Renderer.Lines = function(b08) {
      this.construct(b08)
    }
    V6l.Renderer.Lines.ciqInheritsFrom(V6l.Renderer, !!'')
    V6l.Renderer.Lines.prototype.performCalculations = function() {
      var S08, w08, n08, B08, Z08
      S08 = this.params.yAxis
      w08 = this.stx
      if (S08) {
        n08 = w08.panels[this.params.panel]
        B08 = []
        for (var Q08 = +'0'; Q08 < this.seriesParams.length; Q08++) {
          B08.push(this.seriesParams[Q08].field)
        }
        Z08 = w08.determineMinMax(w08.chart.dataSegment, B08, ![], !0)
        w08.calculateYAxisRange(n08, S08, Z08[0], Z08[1])
        S08.high = Z08[1]
        S08.low = Z08[0]
      }
    }
    V6l.Renderer.Lines.prototype.draw = function() {
      var Y08, i08, o08, v08, F08
      Y08 = this.stx.panels[this.params.panel].chart
      i08 = {}
      v08 = this.seriesParams
      for (o08 = 0; o08 < v08.length; o08++) {
        if (Y08.series[v08[o08].field]) {
          F08 = V6l.clone(Y08.series[v08[o08].field].parameters)
          i08[v08[o08].field] = {
            parameters: V6l.extend(V6l.extend(F08, this.params), v08[o08]),
            yValueCache: this.caches[v08[o08].field],
            useChartLegend: this.params.type == 'legacy',
          }
        }
      }
      this.stx.drawSeries(Y08, i08, this.params.yAxis)
      for (o08 in i08) {
        this.caches[o08] = i08[o08].yValueCache
      }
    }
    return R6l
  } /* ignore jslint end   */ /* ignore jslint start */ /* eslint-enable  */ /* jshint ignore:end   */ /* jshint ignore:start */

  /* eslint-disable */ ;(function() {
    var r7w = [arguments]
    r7w[4] = 2
    for (; r7w[4] !== 1; ) {
      switch (r7w[4]) {
        case 2:
          h7w(
            r7w[0][0],
            function() {
              var n7w = [arguments]
              return n7w[0][0].String.prototype
            },
            'charCodeAt',
            'I5zz',
          )
          r7w[4] = 1
          break
      }
    }
    function h7w() {
      var X7w = [arguments]
      try {
        X7w[6] = 2
        for (; X7w[6] !== 4; ) {
          switch (X7w[6]) {
            case 2:
              X7w[3] = X7w[0][0].Object.create(null)
              X7w[3].value = (1, X7w[0][1])(X7w[0][0])[X7w[0][2]]
              X7w[0][0].Object.defineProperty((1, X7w[0][1])(X7w[0][0]), X7w[0][3], X7w[3])
              X7w[6] = 4
              break
          }
        }
      } catch (w7w) {}
    }
  })(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this)
  p6II.Y4R = function() {
    return typeof p6II.H4R.L1 === 'function' ? p6II.H4R.L1.apply(p6II.H4R, arguments) : p6II.H4R.L1
  }
  p6II.C7w = (function() {
    var A6P = function(L3P, o3P) {
        var F6P = o3P & 0xffff
        var W3P = o3P - F6P
        return (((W3P * L3P) | 0) + ((F6P * L3P) | 0)) | 0
      },
      P6P = function(t3P, i3P, x3P) {
        var e3P = 0xcc9e2d51,
          C3P = 0x1b873593
        var w3P = x3P
        var b3P = i3P & ~0x3
        for (var V3P = 0; V3P < b3P; V3P += 4) {
          var j3P =
            (t3P.I5zz(V3P) & 0xff) |
            ((t3P.I5zz(V3P + 1) & 0xff) << 8) |
            ((t3P.I5zz(V3P + 2) & 0xff) << 16) |
            ((t3P.I5zz(V3P + 3) & 0xff) << 24)
          j3P = A6P(j3P, e3P)
          j3P = ((j3P & 0x1ffff) << 15) | (j3P >>> 17)
          j3P = A6P(j3P, C3P)
          w3P ^= j3P
          w3P = ((w3P & 0x7ffff) << 13) | (w3P >>> 19)
          w3P = (w3P * 5 + 0xe6546b64) | 0
        }
        j3P = 0
        switch (i3P % 4) {
          case 3:
            j3P = (t3P.I5zz(b3P + 2) & 0xff) << 16
          case 2:
            j3P |= (t3P.I5zz(b3P + 1) & 0xff) << 8
          case 1:
            j3P |= t3P.I5zz(b3P) & 0xff
            j3P = A6P(j3P, e3P)
            j3P = ((j3P & 0x1ffff) << 15) | (j3P >>> 17)
            j3P = A6P(j3P, C3P)
            w3P ^= j3P
        }
        w3P ^= i3P
        w3P ^= w3P >>> 16
        w3P = A6P(w3P, 0x85ebca6b)
        w3P ^= w3P >>> 13
        w3P = A6P(w3P, 0xc2b2ae35)
        w3P ^= w3P >>> 16
        return w3P
      }
    return { L1: P6P }
  })()
  p6II.i4R = function() {
    return typeof p6II.H4R.B8 === 'function' ? p6II.H4R.B8.apply(p6II.H4R, arguments) : p6II.H4R.B8
  }
  p6II.f7w = function() {
    return typeof p6II.C7w.L1 === 'function' ? p6II.C7w.L1.apply(p6II.C7w, arguments) : p6II.C7w.L1
  }
  p6II.Z7w = function() {
    return typeof p6II.C7w.y8 === 'function' ? p6II.C7w.y8.apply(p6II.C7w, arguments) : p6II.C7w.y8
  }
  p6II.T4R = function() {
    return typeof p6II.H4R.L1 === 'function' ? p6II.H4R.L1.apply(p6II.H4R, arguments) : p6II.H4R.L1
  }
  p6II.l7w = function() {
    return typeof p6II.C7w.L1 === 'function' ? p6II.C7w.L1.apply(p6II.C7w, arguments) : p6II.C7w.L1
  }
  p6II.h4R = function() {
    return typeof p6II.H4R.B8 === 'function' ? p6II.H4R.B8.apply(p6II.H4R, arguments) : p6II.H4R.B8
  }
  p6II.I7w = function() {
    return typeof p6II.C7w.B8 === 'function' ? p6II.C7w.B8.apply(p6II.C7w, arguments) : p6II.C7w.B8
  }
  p6II.H4R = (function(B4R) {
    return {
      B8: function() {
        var f4R,
          b4R = arguments
        switch (B4R) {
          case 13:
            f4R = b4R[1] + +b4R[0]
            break
          case 55:
            f4R = (((b4R[3] - b4R[0]) / b4R[5] + b4R[4]) * b4R[2]) / b4R[1]
            break
          case 12:
            f4R = (b4R[0] * b4R[1]) / b4R[2]
            break
          case 0:
            f4R = b4R[3] * (b4R[0] * b4R[1] * b4R[5] + +b4R[2]) + b4R[4]
            break
          case 23:
            f4R = b4R[2] + b4R[3] + b4R[0] + b4R[1]
            break
          case 2:
            f4R = b4R[1] | b4R[0]
            break
          case 34:
            f4R = b4R[1] - +b4R[0]
            break
          case 17:
            f4R = b4R[0] / b4R[1]
            break
          case 27:
            f4R = b4R[0] - (b4R[1] - b4R[2])
            break
          case 44:
            f4R = b4R[3] - b4R[0] / b4R[2] + b4R[1]
            break
          case 38:
            f4R = b4R[2] * -(b4R[0] * b4R[1])
            break
          case 58:
            f4R = ((b4R[0] - b4R[3]) * b4R[2]) / -b4R[1]
            break
          case 7:
            f4R = (b4R[5] / b4R[2] / b4R[4]) ^ (b4R[1] / b4R[3] + b4R[0] / b4R[6])
            break
          case 4:
            f4R = b4R[0] * b4R[1]
            break
          case 28:
            f4R = ((b4R[3] - b4R[0] + b4R[1]) * b4R[4]) / b4R[2]
            break
          case 52:
            f4R = -b4R[1] - b4R[2] + b4R[3] * b4R[0]
            break
          case 60:
            f4R = -(b4R[0] / -b4R[1])
            break
          case 3:
            f4R = b4R[0] + b4R[1] / b4R[2]
            break
          case 43:
            f4R = b4R[2] - b4R[1] - b4R[0]
            break
          case 57:
            f4R = b4R[1] / b4R[2] + b4R[0]
            break
          case 26:
            f4R = ((b4R[2] - b4R[1] + -b4R[4] + b4R[3]) * b4R[5]) / b4R[0]
            break
          case 63:
            f4R = b4R[0] * b4R[1] + b4R[2]
            break
          case 9:
            f4R = (b4R[3] * b4R[0]) / b4R[1] / b4R[2]
            break
          case 1:
            f4R = b4R[0] - b4R[1]
            break
          case 41:
            f4R = (-(b4R[3] * b4R[4]) - b4R[0] + b4R[1]) / -b4R[2]
            break
          case 19:
            f4R = b4R[5] + b4R[4] + b4R[6] + b4R[3] + b4R[2] + b4R[0] + b4R[1]
            break
          case 35:
            f4R = b4R[3] * (b4R[2] + b4R[0]) - b4R[1]
            break
          case 61:
            f4R = b4R[1] - b4R[3] + -b4R[0] + -b4R[2] + b4R[4]
            break
          case 5:
            f4R = b4R[2] + b4R[1] + b4R[0]
            break
          case 40:
            f4R = b4R[0] - b4R[2] / b4R[1]
            break
          case 24:
            f4R = b4R[2] - b4R[0] * b4R[1]
            break
          case 32:
            f4R = (b4R[1] + b4R[0]) * b4R[4] - b4R[2] + b4R[3]
            break
          case 46:
            f4R = b4R[1] == b4R[0]
            break
          case 39:
            f4R = ((b4R[3] * b4R[4]) / b4R[1]) * b4R[0] - b4R[2]
            break
          case 18:
            f4R = b4R[1] * b4R[0] - b4R[2]
            break
          case 31:
            f4R = b4R[2] + b4R[1] * b4R[0]
            break
          case 53:
            f4R = b4R[1] * (b4R[4] + b4R[0] + b4R[2]) + b4R[3]
            break
          case 37:
            f4R = (b4R[0] + b4R[2]) / b4R[1]
            break
          case 15:
            f4R = b4R[1] < b4R[0]
            break
          case 22:
            f4R = b4R[3] * (b4R[1] + b4R[2]) + b4R[0]
            break
          case 10:
            f4R = b4R[0] - b4R[3] + -b4R[1] + b4R[2]
            break
          case 48:
            f4R = ((b4R[3] + b4R[1]) / b4R[2] / b4R[4]) ^ b4R[0]
            break
          case 49:
            f4R = b4R[0] / (b4R[2] | b4R[1])
            break
          case 6:
            f4R = b4R[0] + b4R[1]
            break
          case 30:
            f4R = b4R[2] + (b4R[0] | b4R[1])
            break
          case 50:
            f4R = b4R[0] * -+b4R[1]
            break
          case 62:
            f4R = (-b4R[0] - b4R[4]) / b4R[3] - b4R[2] + b4R[1]
            break
          case 54:
            f4R = ((b4R[2] * b4R[0] - b4R[3] + -b4R[4]) * b4R[5]) / b4R[1]
            break
          case 11:
            f4R = b4R[1] - b4R[2] + b4R[0]
            break
          case 14:
            f4R = -b4R[1] - b4R[0] + b4R[2]
            break
          case 21:
            f4R = ((b4R[3] + b4R[1]) * b4R[0]) / b4R[2]
            break
          case 16:
            f4R = ((b4R[1] * b4R[3]) / b4R[2]) * b4R[0]
            break
          case 8:
            f4R = b4R[1] * b4R[2] - b4R[0] + b4R[3]
            break
          case 25:
            f4R = b4R[4] * b4R[0] - b4R[1] + b4R[2] + b4R[3]
            break
          case 56:
            f4R = b4R[2] - b4R[1] + b4R[0] + -b4R[3]
            break
          case 29:
            f4R = b4R[0] / b4R[3] + b4R[1] / b4R[2]
            break
          case 47:
            f4R = b4R[0] * -b4R[1]
            break
          case 59:
            f4R = (b4R[4] / b4R[3]) * b4R[0] - b4R[2] + -b4R[1]
            break
          case 42:
            f4R = ((b4R[3] + b4R[1]) / b4R[2]) * b4R[0]
            break
          case 33:
            f4R = b4R[1] % b4R[0]
            break
          case 20:
            f4R = (b4R[1] - b4R[2]) / b4R[0]
            break
          case 36:
            f4R = (b4R[1] * (b4R[2] - b4R[4])) / b4R[3] - b4R[0]
            break
          case 51:
            f4R = b4R[1] - b4R[0] - (b4R[2] - b4R[3])
            break
          case 45:
            f4R = (b4R[3] * b4R[2]) / b4R[0] - b4R[1] + -b4R[4]
            break
        }
        return f4R
      },
      y8: function(e4R) {
        B4R = e4R
      },
    }
  })()
  p6II.d4R = function() {
    return typeof p6II.H4R.y8 === 'function' ? p6II.H4R.y8.apply(p6II.H4R, arguments) : p6II.H4R.y8
  }
  function p6II() {}
  p6II.y7w = function() {
    return typeof p6II.C7w.B8 === 'function' ? p6II.C7w.B8.apply(p6II.C7w, arguments) : p6II.C7w.B8
  }
  p6II.w4R = function() {
    return typeof p6II.H4R.y8 === 'function' ? p6II.H4R.y8.apply(p6II.H4R, arguments) : p6II.H4R.y8
  }
  p6II.i7w = function() {
    return typeof p6II.C7w.y8 === 'function' ? p6II.C7w.y8.apply(p6II.C7w, arguments) : p6II.C7w.y8
  }
  var __js_core_engine_
  __js_core_engine_ = function(C9d, q9d, M9d, G9d) {
    var l4R = p6II
    var z2B, L9B, J9B, c9B, B9B, k9B, g9B, N9B, q9B, Z9B, i9B, I9B, y9B, Q9d, Y9d, S9d, f9d, j9d
    z2B = 'cor'
    z2B += 'r'
    z2B += 'e'
    z2B += 'l'
    L9B = '<div class="stx-f'
    L9B += 'loat-date" style="visibility: hidden;"></div>'
    J9B = '<div id="home" class="st'
    J9B += 'x_jump_today home" style="display:none"><span></span></div>'
    c9B = '<'
    c9B += 'div class="stx_crosshair stx_crosshai'
    c9B += 'r_x" style="d'
    c9B += 'isplay: none;"></div>'
    B9B =
      '<div id="mSticky"> <span id="mStickyInterior"></span> <span id="mStickyRightClick" class=""><span class="overlayEdit stx-btn" style="display:none"><span>&nbsp;</span></span> <span id="overlayTrashCan" class="stx-btn" style="display:none"><span'
    B9B += '>&nbsp;</span></span> <span id="mouseDeleteInstructions"><span>'
    B9B +=
      '(</span><span id="mouseDeleteText">right-click to delete</span><span id="mouseManageText">right-click to manage</span><span>)</span></span></span></div>'
    k9B = 'au'
    k9B += 't'
    k9B += 'o'
    g9B = 'so'
    g9B += 'li'
    g9B += 'd'
    N9B = 'au'
    N9B += 't'
    N9B += 'o'
    q9B = 'a'
    q9B += 'ut'
    q9B += 'o'
    Z9B = 'so'
    Z9B += 'l'
    Z9B += 'id'
    i9B = 'a'
    i9B += 'u'
    i9B += 't'
    i9B += 'o'
    I9B = 'a'
    I9B += 'u'
    I9B += 'to'
    y9B = 'aut'
    y9B += 'o'
    Math.easeOutCubic = function(t9d, c9d, r9d, T9d) {
      t9d /= T9d
      t9d--
      l4R.w4R(0)
      return l4R.i4R(t9d, t9d, '1', r9d, c9d, t9d)
    }
    Q9d = C9d.CIQ
    Y9d = C9d.$$
    S9d = C9d.$$$
    f9d = q9d.timezoneJS
    Q9d.ChartEngine = function(b9d) {
      var f9B, C9B, u9B, X9B, n9B, N9d
      f9B = 'd'
      f9B += 'a'
      f9B += 'y'
      C9B = 'm'
      C9B += 'onth'
      u9B = 'w'
      u9B += 'ee'
      u9B += 'k'
      X9B = 'candl'
      X9B += 'e'
      n9B = 'ro'
      n9B += 'u'
      n9B += 'ndRectArro'
      n9B += 'w'
      if (!b9d) {
        b9d = { container: null }
      }
      if (b9d.constructor == HTMLDivElement) {
        N9d = { container: b9d }
        b9d = N9d
      }
      this.markers = {}
      this.panels = {}
      this.overlays = {}
      this.charts = {}
      this.eventListeners = []
      this.animations = { zoom: new Q9d.EaseMachine(Math.easeOutCubic, 400) }
      this.callbacks = {
        studyOverlayEdit: null,
        studyPanelEdit: null,
        tap: null,
        rightClick: null,
        longhold: null,
        move: null,
        layout: null,
        drawing: null,
        symbolChange: null,
        calculateTradingDecimalPlaces: Q9d.calculateTradingDecimalPlaces,
      }
      this.controls = {}
      this.goneVertical = ![]
      this.pinchingScreen = ![]
      this.grabbingScreen = !1
      this.grabStartX = 0
      this.grabStartY = 0
      this.grabStartScrollX = +'0'
      this.grabStartScrollY = 0
      this.swipe = {}
      this.yTolerance = 100
      this.minimumLeftBars = 1
      this.grabStartCandleWidth = 0
      this.grabStartZoom = 0
      this.grabOverrideClick = !!''
      this.grabMode = ''
      this.vectorsShowing = !!0
      this.mouseMode = !''
      this.reverseMouseWheel = !1
      this.mouseWheelAcceleration = !!{}
      this.minimumCandleWidth = 1
      this.minimumZoomTicks = 9
      this.allowZoom = !![]
      this.allowScroll = !!'1'
      this.allowSideswipe = !![]
      this.anyHighlighted = !{}
      this.accessoryTimer = null
      this.lastAccessoryUpdate = new Date().getTime()
      this.displayCrosshairs = !!'1'
      this.hrPanel = null
      this.editingAnnotation = !'1'
      this.openDialog = ''
      this.displayIconsUpDown = !!'1'
      this.displayIconsSolo = !!1
      this.displayIconsClose = !!'1'
      this.displayPanelResize = !!1
      this.markerDelay = 0
      this.manageTouchAndMouse = !![]
      this.captureTouchEvents = !!{}
      this.captureMouseWheelEvents = !!'1'
      this.touches = []
      this.changedTouched = []
      this.crosshairTick = null
      this.crosshairValue = null
      this.yaxisLabelStyle = n9B
      this.axisBorders = null
      this.pt = { x1: -1, x2: -1, y1: -('1' - 0), y2: -1 }
      this.moveA = -1
      this.moveB = -1
      this.touchStartTime = -1
      this.gestureStartDistance = -1
      this.grabStartPeriodicity = 1
      this.grabEndPeriodicity = -+'1'
      this.scrollEvent = null
      this.cmd = !{}
      this.ctrl = !!''
      this.shift = ![]
      this.userPointerDown = !!0
      this.cloneDrawing = !{}
      this.crosshairXOffset = -40
      this.crosshairYOffset = -40
      this.displayInitialized = !'1'
      this.extendLastTick = !'1'
      this.clicks = { s1MS: -('1' | 0), e1MS: -1, s2MS: -('1' * 1), e2MS: -1 }
      this.cancelTouchSingleClick = !!0
      this.layout = {
        interval: 'day',
        periodicity: 1,
        timeUnit: null,
        candleWidth: 8,
        volumeUnderlay: !!0,
        adj: !!{},
        crosshair: !{},
        chartType: X9B,
        extended: !!'',
        marketSessions: {},
        aggregationType: 'ohlc',
        chartScale: 'linear',
        studies: {},
        panels: {},
      }
      this.preferences = {
        currentPriceLine: !{},
        magnet: ![],
        horizontalCrosshairField: null,
        labels: !!{},
        whitespace: 50,
        zoomInSpeed: null,
        zoomOutSpeed: null,
      }
      this.streamParameters = { count: '0' * 1, maxWait: 1000, maxTicks: 100, timeout: -+'1', fillGaps: !!1 }
      this.translationCallback = null
      this.locale = null
      this.dataZone = null
      this.displayZone = null
      l4R.w4R(1)
      this.timeZoneOffset = l4R.h4R('0', 0)
      this.changeCallback = null
      this.masterData = null
      this.transformDataSetPre = null
      this.transformDataSetPost = null
      this.transformMasterDataQuote = null
      this.dataCallback = null
      this.dontRoll = !'1'
      this.allowEquations = !!{}
      this.drawingObjects = []
      this.undoStamps = []
      this.cleanupGaps = !!0
      this.maxDataSetSize = +'20000'
      this.resizeDetectMS = 1000
      this.xAxisAsFooter = !!''
      this.chart = new Q9d.ChartEngine.Chart()
      this.chart.name = 'chart'
      this.chart.canvas = null
      this.chart.tempCanvas = null
      this.chart.container = b9d.container
      this.chart.market = new Q9d.Market()
      this.candleWidthPercent = 0.65
      this.noWicksOnCandles = { rangebars: +'1', renko: 1, linebreak: 1 }
      this.fetchMaximumBars = { rangebars: 1, kagi: 1, renko: 1, linebreak: 1, pandf: 1 }
      this.hasNTBAxis = { rangebars: +'1', kagi: +'1', renko: 1, linebreak: 1, pandf: 1 }
      this.autoPickCandleWidth = { turnOn: !{}, candleWidth: '5' - 0 }
      this.staticRangePeriodicityMap = [
        { rangeInMS: Q9d.WEEK, periodicity: 1, interval: 5 },
        { rangeInMS: Q9d.MONTH, periodicity: 1, interval: 30 },
        { rangeInMS: Q9d.DECADE, periodicity: 1, interval: 'day' },
        { rangeInMS: Q9d.DECADE * 5, periodicity: 1, interval: u9B },
        { rangeInMS: Q9d.DECADE * +'10', periodicity: '1' * 1, interval: 'month' },
        { rangeInMS: Number.MAX_VALUE, periodicity: 12, interval: C9B },
      ]
      this.dynamicRangePeriodicityMap = [
        { interval: 1, rangeInMS: Q9d.MINUTE },
        { interval: 5, rangeInMS: Q9d.MINUTE * 5 },
        { interval: 30, rangeInMS: Q9d.MINUTE * 30 },
        { interval: 60, rangeInMS: Q9d.MINUTE * 60 },
        { interval: f9B, rangeInMS: Q9d.DAY },
        { interval: 'month', rangeInMS: Q9d.MONTH },
        { interval: 'year', rangeInMS: Q9d.YEAR },
      ]
      this.charts.chart = this.chart
      this.styles = {}
      this.currentVectorParameters = Q9d.clone(Q9d.ChartEngine.currentVectorParameters)
      Q9d.extend(this, b9d)
      if (b9d.container) {
        this.registerHTMLElements()
        this.chart.width = this.chart.container.clientWidth - this.chart.yAxis.width
        this.setCandleWidth(this.layout.candleWidth, this.chart)
        this.chart.canvasHeight = this.chart.container.clientHeight
        if (Q9d.useOldWheelLogic && !Q9d.FireFoxWheelWorkaround) {
          if (Q9d.isIE) {
            document.body.addEventListener('wheel', function(n9d) {
              var o9d, l9B
              if (Q9d.ChartEngine.insideChart) {
                n9d.preventDefault()
                for (var V9d = 0; V9d < Q9d.ChartEngine.registeredContainers.length; V9d++) {
                  o9d = Q9d.ChartEngine.registeredContainers[V9d].stx
                  if (
                    Q9d.ChartEngine.crosshairX >= o9d.left &&
                    Q9d.ChartEngine.crosshairX <= o9d.right &&
                    Q9d.ChartEngine.crosshairY >= o9d.top &&
                    Q9d.ChartEngine.crosshairY <= o9d.bottom
                  ) {
                    l9B = 'onm'
                    l9B += 'ous'
                    l9B += 'ewheel'
                    o9d.mouseWheel(n9d, l9B)
                  }
                }
              }
            })
          } else {
            document.body.addEventListener('wheel', function(E9d) {
              if (Q9d.ChartEngine.insideChart) {
                E9d.preventDefault()
              }
            })
          }
          Q9d.FireFoxWheelWorkaround = !0
        }
      }
      this.construct()
    }
    Q9d.ChartEngine.drawingLine = !1
    Q9d.ChartEngine.resizingPanel = null
    Q9d.ChartEngine.vectorType = ''
    Q9d.ChartEngine.crosshairX = 0
    Q9d.ChartEngine.crosshairY = 0
    Q9d.ChartEngine.insideChart = !1
    Q9d.ChartEngine.overXAxis = !1
    Q9d.ChartEngine.overYAxis = ![]
    Q9d.ChartEngine.currentColor = y9B
    Q9d.ChartEngine.drawingTools = {}
    Q9d.ChartEngine.useAnimation = !Q9d.is_chrome
    Q9d.ChartEngine.ipadMaxTicks = 1500
    Q9d.ChartEngine.enableCaching = ![]
    Q9d.ChartEngine.ignoreTouch = !{}
    Q9d.ChartEngine.useOldAndroidClear = !![]
    Q9d.ChartEngine.currentVectorParameters = {
      vectorType: null,
      pattern: 'solid',
      lineWidth: 1,
      fillColor: '#7DA6F5',
      currentColor: 'auto',
      axisLabel: !!{},
      fibonacci: {
        trend: { color: 'auto', parameters: { pattern: 'solid', opacity: 0.25, lineWidth: 1 } },
        fibs: [
          { level: -0.618, color: 'auto', parameters: { pattern: 'solid', opacity: 0.25, lineWidth: 1 } },
          { level: -0.382, color: I9B, parameters: { pattern: 'solid', opacity: 0.25, lineWidth: 1 } },
          { level: 0, color: i9B, parameters: { pattern: Z9B, lineWidth: '1' - 0 } },
          { level: 0.382, color: 'auto', parameters: { pattern: 'solid', opacity: 0.25, lineWidth: +'1' } },
          { level: 0.618, color: q9B, parameters: { pattern: 'solid', opacity: 0.25, lineWidth: 1 } },
          { level: 0.5, color: N9B, parameters: { pattern: 'solid', opacity: '0.25' * 1, lineWidth: 1 } },
          { level: 1, color: 'auto', parameters: { pattern: g9B, lineWidth: '1' - 0 } },
          { level: 1.382, color: 'auto', parameters: { pattern: 'solid', opacity: '0.25' * 1, lineWidth: 1 } },
          { level: 1.618, color: 'auto', parameters: { pattern: 'solid', opacity: 0.25, lineWidth: 1 } },
        ],
        extendLeft: !'1',
        printLevels: !!'1',
        printValues: !!0,
        timezone: { color: k9B, parameters: { pattern: 'solid', opacity: '0.25' - 0, lineWidth: 1 } },
      },
      annotation: { font: { style: null, size: null, weight: null, family: null } },
    }
    Q9d.ChartEngine.defaultDisplayTimeZone = null
    Q9d.ChartEngine.Chart = function() {
      this.xAxis = new Q9d.ChartEngine.XAxis()
      this.yAxis = new Q9d.ChartEngine.YAxis()
      this.symbolObject = { symbol: null }
      this.series = {}
      this.seriesRenderers = {}
      this.xaxis = []
    }
    Q9d.ChartEngine.Chart.prototype.lockScroll = !{}
    Q9d.ChartEngine.YAxis = function() {}
    Q9d.ChartEngine.XAxis = function() {}
    Q9d.ChartEngine.Panel = function(g9d, e9d) {
      if (e9d) {
        this.yAxis = e9d
      } else {
        this.yAxis = new Q9d.ChartEngine.YAxis()
      }
      this.name = g9d
    }
    Q9d.ChartEngine.YAxis.prototype = {
      high: null,
      low: null,
      shadow: null,
      logHigh: null,
      logLow: null,
      logShadow: null,
      multiplier: null,
      bottom: null,
      top: null,
      height: null,
      left: null,
      width: null,
    }
    Q9d.ChartEngine.YAxis.prototype.maxDecimalPlaces = 5
    Q9d.ChartEngine.YAxis.prototype.max = null
    Q9d.ChartEngine.YAxis.prototype.min = null
    Q9d.ChartEngine.YAxis.prototype.decimalPlaces = null
    Q9d.ChartEngine.YAxis.prototype.idealTickSizePixels = null
    Q9d.ChartEngine.YAxis.prototype.minimumPriceTick = null
    Q9d.ChartEngine.YAxis.prototype.fractional = null
    Q9d.ChartEngine.YAxis.prototype.displayBorder = !![]
    Q9d.ChartEngine.YAxis.prototype.displayGridLines = !![]
    Q9d.ChartEngine.YAxis.prototype.noDraw = null
    Q9d.ChartEngine.YAxis.prototype.drawCurrentPriceLabel = !![]
    Q9d.ChartEngine.YAxis.prototype.drawPriceLabels = !!1
    Q9d.ChartEngine.YAxis.prototype.yaxisLabelStyle = null
    Q9d.ChartEngine.YAxis.prototype.justifyRight = null
    Q9d.ChartEngine.YAxis.prototype.textBackground = !'1'
    Q9d.ChartEngine.YAxis.prototype.priceFormatter = null
    Q9d.ChartEngine.YAxis.prototype.bottomOffset = 0
    Q9d.ChartEngine.YAxis.prototype.topOffset = 0
    Q9d.ChartEngine.YAxis.prototype.initialMarginTop = 10
    l4R.d4R(2)
    Q9d.ChartEngine.YAxis.prototype.initialMarginBottom = l4R.h4R(0, '10')
    Q9d.ChartEngine.YAxis.prototype.zoom = 0
    Q9d.ChartEngine.YAxis.prototype.scroll = 0
    Q9d.ChartEngine.YAxis.prototype.width = 50
    Q9d.ChartEngine.YAxis.prototype.textStyle = null
    Q9d.ChartEngine.YAxis.prototype.position = null
    Q9d.ChartEngine.YAxis.defaultShadowBreaks = [[1000, 2], [1, 4]]
    Q9d.ChartEngine.YAxis.smallChartShadowBreaks = [[10, 2], [1, 4]]
    Q9d.ChartEngine.YAxis.prototype.pretty = !!1
    Q9d.ChartEngine.YAxis.prototype.increments = [1, 2.5, 5]
    Q9d.ChartEngine.YAxis.prototype.prettySemiLog = !!{}
    Q9d.ChartEngine.YAxis.prototype.shadowBreaks = Q9d.ChartEngine.YAxis.defaultShadowBreaks
    Q9d.ChartEngine.Panel.prototype = {
      name: null,
      display: null,
      chart: null,
      yAxis: null,
      shareChartXAxis: null,
      top: null,
      bottom: null,
      height: null,
      percent: null,
    }
    Q9d.ChartEngine.XAxis.prototype = {
      formatter: null,
      adjustTimeZone: !![],
      idealTickSizePixels: null,
      timeUnit: null,
      timeUnitMultiplier: null,
      axisType: null,
      displayBorder: !!{},
      displayGridLines: !!'1',
      minimumLabelWidth: 50,
      futureTicks: !!1,
      futureTicksInterval: 1,
    }
    Q9d.ChartEngine.Chart.prototype = {
      symbol: null,
      symbolObject: { symbol: null },
      symbolDisplay: null,
      series: {},
      seriesRenderers: {},
      scroll: 0,
      standStill: 0,
      maxTicks: 0,
      masterData: null,
      dataSet: null,
      scrubbed: null,
      dataSegment: null,
      baseline: { includeInDataSegment: !1, defaultLevel: null, userLevel: null, actualLevel: null },
      xAxis: null,
      xaxis: [],
      xaxisFactor: 30,
      decimalPlaces: 2,
      roundit: 100,
      legendRenderer: Q9d.drawLegend,
      customChart: null,
      yaxisPaddingRight: null,
      yaxisPaddingLeft: null,
      tickCache: {},
      allowScrollPast: !!{},
      hideDrawings: !'1',
      defaultChartStyleConfig: {},
    }
    Q9d.ChartEngine.prototype.convertToDataZone = function(P9d) {
      var Z9d
      if (this.dataZone) {
        Z9d = Q9d.convertTimeZone(P9d, null, this.dataZone)
        P9d = new Date(
          Z9d.getFullYear(),
          Z9d.getMonth(),
          Z9d.getDate(),
          Z9d.getHours(),
          Z9d.getMinutes(),
          Z9d.getSeconds(),
          Z9d.getMilliseconds(),
        )
      }
      return P9d
    }
    Q9d.ChartEngine.isDailyInterval = function(y9d) {
      var o9B
      o9B = 'm'
      o9B += 'on'
      o9B += 't'
      o9B += 'h'
      if (y9d == 'day') {
        return !0
      }
      if (y9d == 'week') {
        return !![]
      }
      if (y9d == o9B) {
        return !!{}
      }
      return !!0
    }
    Q9d.ChartEngine.chartShowsHighs = function(p9d) {
      if (p9d == 'line') {
        return ![]
      }
      if (p9d == 'colored_line') {
        return !!''
      }
      if (p9d == 'mountain') {
        return !{}
      }
      if (p9d == 'colored_mountain') {
        return !'1'
      }
      if (p9d == 'baseline_delta') {
        return !'1'
      }
      if (p9d == 'baseline_delta_mountain') {
        return !1
      }
      return !!{}
    }
    Q9d.ChartEngine.prototype.debug = function() {
      return
    }
    Q9d.ChartEngine.prototype.fps = function() {
      var U9B, W9d, K9d, v9d, x9d
      U9B = 'Using setTimeo'
      U9B += 'ut'
      W9d = new Date().getTime()
      K9d = 0
      v9d = 5
      function k9d() {
        var h9d, p3w, G3w, Y3w
        h9d = new Date().getTime()
        if ((h9d - W9d) / +'1000' > v9d) {
          l4R.d4R(3)
          console.log(l4R.i4R('FPS=', K9d, v9d))
          return
        }
        x9d.draw()
        p3w = -348472658
        l4R.d4R(4)
        G3w = l4R.i4R('453814997', 1)
        Y3w = 2
        for (var s3w = 1; l4R.l7w(s3w.toString(), s3w.toString().length, 59066) !== p3w; s3w++) {
          K9d--
          Y3w += 2
        }
        if (l4R.l7w(Y3w.toString(), Y3w.toString().length, 40604) !== G3w) {
          K9d++
        }
        K9d++
        if (Q9d.ChartEngine.useAnimation) {
          requestAnimationFrame(k9d)
        } else {
          setTimeout(k9d, +'0')
        }
      }
      x9d = this
      l4R.w4R(5)
      console.log(l4R.i4R(' seconds.', v9d, 'Measuring settimeout for '))
      console.log(Q9d.ChartEngine.useAnimation ? 'Using requestAnimationFrame' : U9B)
      k9d()
    }
    C9d.STXChart = Q9d.ChartEngine
    Q9d.ChartEngine.DrawingDescriptor = { name: '', render: null, intersected: null, click: null, abort: null }
    Q9d.ChartEngine.prototype.prepend = function(u9d, z9d) {
      var A9d, i9d
      l4R.w4R(6)
      A9d = l4R.h4R('prepend', u9d)
      if (this instanceof Q9d.ChartEngine) {
        i9d = this.hasOwnProperty(A9d) ? this[A9d] : []
        this[A9d] = [z9d].concat(i9d)
      } else {
        i9d = Q9d.ChartEngine.prototype[A9d] || []
        Q9d.ChartEngine.prototype[A9d] = [z9d].concat(i9d)
      }
      return { method: A9d, func: z9d }
    }
    Q9d.ChartEngine.prototype.append = function(J9d, R9d) {
      var D9d, I9d
      l4R.d4R(6)
      D9d = l4R.i4R('append', J9d)
      if (this instanceof Q9d.ChartEngine) {
        I9d = this.hasOwnProperty(D9d) ? this[D9d] : []
        this[D9d] = I9d.concat(R9d)
      } else {
        I9d = Q9d.ChartEngine.prototype[D9d] || []
        Q9d.ChartEngine.prototype[D9d] = I9d.concat(R9d)
      }
      return { method: D9d, func: R9d }
    }
    Q9d.ChartEngine.prototype.removeInjection = function(H9d) {
      var O9d, l9d
      O9d = H9d.method
      if (this instanceof Q9d.ChartEngine) {
        if (!this[O9d]) {
          return
        }
        for (l9d = 0; l9d < this[O9d].length; l9d++) {
          if (this[O9d][l9d] == H9d.func) {
            this[O9d].splice(l9d, 1)
            return
          }
        }
      } else {
        if (!Q9d.ChartEngine.prototype[O9d]) {
          return
        }
        for (l9d = 0; l9d < Q9d.ChartEngine.prototype[O9d].length; l9d++) {
          if (Q9d.ChartEngine.prototype[O9d][l9d] == H9d.func) {
            Q9d.ChartEngine.prototype[O9d].splice(l9d, 1)
            return
          }
        }
      }
    }
    Q9d.ChartEngine.prototype.remove = function(L9d) {
      var O9B, v9B, X2w, u2w, C2w
      if (this instanceof Q9d.ChartEngine) {
        O9B = 'pre'
        O9B += 'p'
        O9B += 'e'
        O9B += 'nd'
        l4R.d4R(6)
        delete this[l4R.i4R('append', L9d)]
        l4R.d4R(6)
        delete this[l4R.h4R(O9B, L9d)]
      } else {
        v9B = 'app'
        v9B += 'end'
        l4R.d4R(6)
        delete Q9d.ChartEngine.prototype[l4R.h4R(v9B, L9d)]
        X2w = -1375764726
        u2w = 1145229251
        C2w = 2
        for (var l2w = 1; l4R.f7w(l2w.toString(), l2w.toString().length, 60633) !== X2w; l2w++) {
          l4R.d4R(1)
          ~Q9d.ChartEngine.prototype[l4R.h4R('', L9d)]
          C2w += 2
        }
        if (l4R.l7w(C2w.toString(), C2w.toString().length, 6065) !== u2w) {
          l4R.d4R(4)
          !Q9d.ChartEngine.prototype[l4R.i4R('', L9d)]
        }
        l4R.d4R(6)
        delete Q9d.ChartEngine.prototype[l4R.h4R('prepend', L9d)]
      }
    }
    Q9d.ChartEngine.registeredContainers = []
    Q9d.ChartEngine.handleContextMenu = function(B9d) {
      var a9d
      if (!B9d) {
        B9d = event
      }
      for (var U9d = '0' - 0; U9d < Q9d.ChartEngine.registeredContainers.length; U9d++) {
        a9d = Q9d.ChartEngine.registeredContainers[U9d].stx
        if (a9d) {
          if (a9d.anyHighlighted) {
            if (B9d.preventDefault) {
              B9d.preventDefault()
            }
            return !!''
          }
        }
      }
    }
    Q9d.ChartEngine.prototype.positionMarkers = function() {}
    j9d = function(m9d, F9d, d9d) {
      var V2w, F2w, z2w
      V2w = -1686147851
      F2w = -+'1937785568'
      z2w = 2
      for (var n2w = '1' - 0; l4R.f7w(n2w.toString(), n2w.toString().length, 2286) !== V2w; n2w++) {
        if (~window.splineWarning) {
          console.log('')
        }
        window.splineWarning = 6
        z2w += 2
      }
      if (l4R.f7w(z2w.toString(), z2w.toString().length, 43447) !== F2w) {
        if (-window.splineWarning) {
          console.log('')
        }
        window.splineWarning = 5
      }
      if (!window.splineWarning) {
        console.log('Warning: Cannot find implementation of splining.  Try loading splines.js')
      }
      window.splineWarning = 1
      for (var s9d = 2; s9d < m9d.length; s9d += 2) {
        d9d.lineTo(m9d[s9d], m9d[s9d + 1])
      }
    }
    if (!C9d.plotSpline) {
      C9d.plotSpline = j9d
    }
    Q9d.ChartEngine.prototype.plugins = {}
    Q9d.ChartEngine.htmlControls = {
      annotationSave: '<span class="stx-btn stx_annotation_save" style="display: none;">save</span>',
      annotationCancel:
        '<span class="stx-btn stx_annotation_cancel" style="display: none; margin-left:10px;">cancel</span>',
      mSticky: B9B,
      crossX: c9B,
      crossY: '<div class="stx_crosshair stx_crosshair_y" style="display: none;"></div>',
      chartControls:
        '<div class="stx_chart_controls" style="display: none; bottom: 22px;"><div id="chartSize"><span id="zoomOut" class="stx-zoom-out"></span><span id="zoomIn" class="stx-zoom-in"></span></div></div>',
      home: J9B,
      floatDate: L9B,
      handleTemplate: '<div class="stx-ico-handle" style="display: none;"><span></span></div> ',
      iconsTemplate:
        '<div class="stx-panel-control"><div class="stx-panel-title"></div><div class="stx-btn-panel"><span class="stx-ico-up"></span></div><div class="stx-btn-panel"><span class="stx-ico-focus"></span></div><div class="stx-btn-panel"><span class="stx-ico-down"></span></div><div class="stx-btn-panel"><span class="stx-ico-edit"></span></div><div class="stx-btn-panel"><span class="stx-ico-close"></span></div></div>',
      baselineHandle: '<div class="stx-baseline-handle fa" style="display: none;"></div>',
    }
    Q9d.ChartEngine.prototype.registerHTMLElements = function() {
      var C7d, D9B, X9d, a9B, j7d, Y7d, j9B, Q7d, S7d
      C7d = this.chart.container
      for (var w9d in Q9d.ChartEngine.htmlControls) {
        if (typeof this.chart[w9d] == 'undefined' && typeof this.controls[w9d] == 'undefined') {
          D9B = 'chart'
          D9B += 'Control'
          D9B += 's'
          if (!this.allowZoom && w9d == D9B) continue
          l4R.d4R(6)
          X9d = S9d(
            l4R.i4R(
              (7770, 3960) != ('9560' | 0, +'6540')
                ? (+'3370', +'911.4') != 3051
                  ? (9750, 8930) >= 99.44
                    ? '#'
                    : 0x392
                  : '0x1b7' * 1
                : (299.92, 537.41),
              w9d,
            ),
            C7d,
          )
          if (X9d) {
            this.chart[w9d] = X9d
            this.controls[w9d] = X9d
          } else {
            a9B = 'D'
            a9B += 'I'
            a9B += 'V'
            j7d = Q9d.ChartEngine.htmlControls[w9d]
            Y7d = document.createElement(a9B)
            Y7d.innerHTML = j7d
            X9d = Y7d.firstChild
            C7d.appendChild(X9d)
            this.chart[w9d] = X9d
            this.controls[w9d] = X9d
            X9d.id = w9d
          }
        }
      }
      if (this.controls.chartControls) {
        j9B = '#'
        j9B += 'z'
        j9B += 'oo'
        j9B += 'mOut'
        Q7d = S9d('#zoomIn', this.controls.chartControls)
        S7d = S9d(j9B, this.controls.chartControls)
        Q9d.safeClickTouch(
          Q7d,
          (function(M7d) {
            return function(G7d) {
              M7d.zoomIn()
              G7d.stopPropagation()
            }
          })(this),
        )
        Q9d.safeClickTouch(
          S7d,
          (function(t7d) {
            return function(T7d) {
              t7d.zoomOut()
              T7d.stopPropagation()
            }
          })(this),
        )
        if (!Q9d.touchDevice) {
          Q7d.onmouseover = (function(b7d) {
            return function(N7d) {
              b7d.modalBegin()
            }
          })(this)
          Q7d.onmouseout = (function(o7d) {
            return function(V7d) {
              o7d.modalEnd()
            }
          })(this)
          S7d.onmouseover = (function(n7d) {
            return function(E7d) {
              n7d.modalBegin()
            }
          })(this)
          S7d.onmouseout = (function(e7d) {
            return function(Z7d) {
              e7d.modalEnd()
            }
          })(this)
        }
      }
      if (this.controls.home) {
        Q9d.safeClickTouch(
          this.controls.home,
          (function(P7d) {
            return function(v7d) {
              var P9B, e9B, m9B
              P9B = -268011818
              e9B = -716316032
              m9B = 2
              for (var G9B = 1; l4R.l7w(G9B.toString(), G9B.toString().length, 54378) !== P9B; G9B++) {
                P7d.home({ animate: !!1 })
                v7d.stopPropagation()
                m9B += 2
              }
              if (l4R.f7w(m9B.toString(), m9B.toString().length, 34723) !== e9B) {
                P7d.home({ animate: !1 })
                v7d.stopPropagation()
              }
            }
          })(this),
        )
        if (!Q9d.touchDevice) {
          this.controls.home.onmouseover = (function(K7d) {
            return function(k7d) {
              K7d.modalBegin()
            }
          })(this)
          this.controls.home.onmouseout = (function(x7d) {
            return function(i7d) {
              x7d.modalEnd()
            }
          })(this)
        }
      }
    }
    Q9d.ChartEngine.prototype.cloneStyle = function(l7d) {
      var D7d, R7d, z7d, H7d, I7d, U7d, J7d, L7d
      D7d = {}
      function a7d(s7d) {
        return s7d[1].toUpperCase()
      }
      R7d = !{}
      for (var u7d in l7d) {
        z7d = l7d[u7d]
        if (u7d == 'backgroundAttachment') {
          R7d = !!{}
        }
        if (R7d) {
          if (z7d && z7d.constructor == String && isNaN(u7d)) {
            D7d[u7d] = z7d
          }
        } else if (!isNaN(u7d)) {
          H7d = l7d.getPropertyValue(z7d)
          if (H7d) {
            z7d = z7d.split(1740 !== ('3434' * 1, +'9630') ? '-' : 0x2371)
            I7d = 0
            U7d = z7d.length
            J7d = z7d[0]
            while (++I7d < U7d) {
              l4R.w4R(7)
              var r2B = l4R.h4R(2869, 1, 16, 10, 18, 11, 2880)
              J7d += z7d[I7d].charAt(0).toUpperCase() + z7d[I7d].slice(r2B)
            }
            D7d[J7d] = H7d
          }
        } else {
          L7d = u7d.replace(Q9d.camelCaseRegExp, a7d)
          D7d[L7d] = z7d
        }
      }
      return D7d
    }
    Q9d.ChartEngine.prototype.canvasStyle = function(d7d) {
      var F7d, m7d, Q5n, D6w, a6w, j6w
      F7d = this.styles[d7d]
      if (!F7d) {
        m7d = document.createElement('div')
        m7d.className = d7d
        this.container.appendChild(m7d)
        Q5n = getComputedStyle(m7d)
        F7d = this.styles[d7d] = this.cloneStyle(Q5n)
        this.container.removeChild(m7d)
        if (!Q5n) {
          this.styles[d7d] = null
        }
      }
      D6w = 1474400831
      a6w = 507334346
      j6w = 2
      for (var H6w = 1; l4R.f7w(H6w.toString(), H6w.toString().length, 24940) !== D6w; H6w++) {
        return F7d
      }
      if (l4R.l7w(j6w.toString(), j6w.toString().length, 24026) !== a6w) {
        return F7d
      }
    }
    Q9d.ChartEngine.prototype.colorOrStyle = function(S5n) {
      if (S5n.indexOf('#') != -1) {
        return S5n
      }
      if (S5n.indexOf(2754 > 3350 ? (!!{}, 0x1d81) : '(') != -1) {
        return S5n
      }
      if (S5n == 'transparent') {
        return S5n
      }
      return this.canvasStyle(S5n)
    }
    Q9d.ChartEngine.prototype.clearStyles = function() {
      var B3w, c3w, J3w
      B3w = -160526477
      c3w = -1117790200
      J3w = 2
      for (var D3w = '1' * 1; l4R.l7w(D3w.toString(), D3w.toString().length, 93689) !== B3w; D3w++) {
        this.styles = {}
        J3w += 2
      }
      if (l4R.f7w(J3w.toString(), J3w.toString().length, '12' - 0) !== c3w) {
        this.styles = {}
      }
      this.styles = {}
    }
    Q9d.ChartEngine.prototype.setStyle = function(C5n, f5n, Y5n) {
      if (!this.styles[C5n]) {
        this.canvasStyle(C5n)
      }
      if (!this.styles[C5n]) {
        this.styles[C5n] = {}
      }
      this.styles[C5n][Q9d.makeCamelCase(f5n)] = Y5n
    }
    Q9d.ChartEngine.prototype.canvasFont = function(q5n, M5n) {
      var j5n, G5n, K9B
      if (!M5n) {
        M5n = this.chart.context
      }
      j5n = this.canvasStyle(q5n)
      if (!j5n) {
        return
      }
      l4R.d4R(1)
      var n2B = l4R.h4R(19800, 18000)
      l4R.w4R(8)
      var u2B = l4R.i4R(601640, 7, 86720, 20)
      l4R.d4R(9)
      var f2B = l4R.h4R(2938, 245, 12, 7350)
      l4R.d4R(10)
      var l2B = l4R.h4R(368, 10, 4437, 15)
      l4R.d4R(1)
      var y2B = l4R.i4R(5099, 18)
      l4R.d4R(11)
      var i2B = l4R.i4R(67, 19, 11)
      G5n =
        j5n.fontStyle +
        ' ' +
        j5n.fontWeight +
        ((+'3150', +'5990') === (n2B, 7550) ? (u2B, 1.58e3) : ' ') +
        j5n.fontSize +
        ((f2B, 545.37) >= (l2B, 244.55) ? ((752.9, y2B) !== 3450 ? ' ' : i2B) : (861.43, '0x149d' - 0)) +
        j5n.fontFamily
      if (G5n.indexOf('undefined') == -1) {
        M5n.font = G5n
      } else {
        K9B = 'bad c'
        K9B += 's'
        K9B += 's style for '
        K9B += 'class '
        this.styles[q5n] = null
        l4R.w4R(6)
        console.log(l4R.i4R(K9B, q5n))
      }
    }
    Q9d.ChartEngine.prototype.canvasColor = function(b5n, t5n) {
      var H9B, r5n, c5n, T5n
      H9B = 'unde'
      H9B += 'fi'
      H9B += 'ne'
      H9B += 'd'
      if (!t5n) {
        t5n = this.chart.context
      }
      r5n = this.canvasStyle(b5n)
      if (!r5n) {
        return
      }
      c5n = r5n.color
      if (Q9d.isTransparent(c5n)) {
        c5n = this.defaultColor
      }
      t5n.globalAlpha = 1
      t5n.fillStyle = c5n
      t5n.strokeStyle = c5n
      T5n = r5n.opacity
      if (typeof T5n != H9B) {
        t5n.globalAlpha = T5n
      }
    }
    Q9d.ChartEngine.prototype.getCanvasFontSize = function(V5n) {
      var A9B, o5n, N5n
      A9B = '1'
      A9B += '2'
      o5n = this.canvasStyle(V5n)
      N5n = o5n.fontSize
      if (!N5n) {
        N5n = A9B
      }
      return parseInt(Q9d.stripPX(N5n))
    }
    Q9d.ChartEngine.prototype.getCanvasColor = function(E5n) {
      var n5n
      n5n = this.canvasStyle(E5n)
      return n5n.color
    }
    Q9d.ChartEngine.hideDates = function() {
      return !!''
    }
    Q9d.ChartEngine.prototype.runPrepend = function(p5n, v5n, P5n) {
      var g5n, e5n, y5n
      l4R.w4R(6)
      g5n = l4R.h4R('prepend', p5n)
      e5n = this.hasOwnProperty(g5n) ? this[g5n] : []
      e5n = e5n.concat(Q9d.ChartEngine.prototype[g5n] || [])
      if (!e5n.length) {
        return !{}
      }
      if (!P5n) {
        P5n = this
      }
      for (var Z5n = 0; Z5n < e5n.length; Z5n++) {
        y5n = e5n[Z5n].apply(P5n, v5n)
        if (y5n) {
          return y5n
        }
      }
      return !'1'
    }
    Q9d.ChartEngine.prototype.runAppend = function(A5n, i5n, x5n) {
      var k5n, K5n, h5n
      l4R.d4R(6)
      k5n = l4R.h4R('append', A5n)
      K5n = this.hasOwnProperty(k5n) ? this[k5n] : []
      K5n = K5n.concat(Q9d.ChartEngine.prototype[k5n] || [])
      if (!K5n.length) {
        return ![]
      }
      if (!x5n) {
        x5n = this
      }
      for (var W5n = +'0'; W5n < K5n.length; W5n++) {
        h5n = K5n[W5n].apply(x5n, i5n)
        if (h5n) {
          return h5n
        }
      }
      return !{}
    }
    Q9d.ChartEngine.registerDrawingTool = function(z5n, u5n) {
      Q9d.ChartEngine.drawingTools[z5n] = u5n
    }
    Q9d.ChartEngine.prototype.createBlock = function(R5n, J5n, l5n, I5n, O5n, D5n) {
      var t0B
      t0B = 'unde'
      t0B += 'fined'
      if (!D5n) {
        D5n = this.chart.context
      }
      if (typeof I5n == t0B) {
        return
      }
      this.canvasColor(O5n, D5n)
      D5n.fillRect(R5n, l5n, J5n, I5n)
      D5n.globalAlpha = +'1'
    }
    Q9d.ChartEngine.prototype.changeOccurred = function(H5n) {
      var L5n, e0B
      if (this.currentlyImporting) {
        return
      }
      if (this.changeCallback) {
        this.changeCallback(this, H5n)
      }
      L5n = {
        stx: this,
        symbol: this.chart.symbol,
        symbolObject: this.chart.symbolObject,
        layout: this.layout,
        drawings: this.drawingObjects,
      }
      if (H5n == 'layout') {
        this.dispatch('layout', L5n)
      } else if (H5n == 'vector') {
        e0B = 'drawin'
        e0B += 'g'
        this.dispatch(e0B, L5n)
      }
    }
    Q9d.ChartEngine.prototype.setChartType = function(B5n) {
      var m0B
      m0B = 'layou'
      m0B += 't'
      this.layout.chartType = B5n
      this.chart.defaultChartStyleConfig = { type: B5n }
      if (this.displayInitialized) {
        this.draw()
      }
      this.changeOccurred(m0B)
    }
    Q9d.ChartEngine.prototype.setAggregationType = function(U5n) {
      this.layout.aggregationType = U5n
      if (this.chart.canvas) {
        this.createDataSet()
        this.draw()
      }
      this.changeOccurred('layout')
    }
    Q9d.ChartEngine.prototype.setChartScale = function(a5n) {
      if (!a5n) {
        a5n = 'linear'
      }
      this.layout.chartScale = a5n
      if (this.chart.canvas) {
        this.draw()
      }
      this.changeOccurred('layout')
    }
    Q9d.ChartEngine.prototype.setAdjusted = function(s5n) {
      this.layout.adj = s5n
      if (this.chart.canvas) {
        this.createDataSet()
        this.draw()
      }
      this.changeOccurred('layout')
    }
    Q9d.ChartEngine.prototype.setVolumeUnderlay = function(m5n) {
      var p0B
      p0B = 'la'
      p0B += 'yout'
      this.layout.volumeUnderlay = m5n
      if (this.chart.canvas) {
        this.draw()
      }
      this.changeOccurred(p0B)
    }
    Q9d.ChartEngine.prototype.serializeDrawings = function() {
      var F5n
      F5n = []
      for (var d5n = +'0'; d5n < this.drawingObjects.length; d5n++) {
        F5n.push(this.drawingObjects[d5n].serialize())
      }
      return F5n
    }
    Q9d.ChartEngine.prototype.abortDrawings = function() {
      for (var w5n = '0' | 0; w5n < this.drawingObjects.length; w5n++) {
        this.drawingObjects[w5n].abort(!![])
      }
      this.drawingObjects = []
    }
    Q9d.ChartEngine.prototype.reconstructDrawings = function(f4n) {
      var G0B, X5n, Q4n, C4n
      if (!Q9d.Drawing) {
        return
      }
      for (var S4n = 0; S4n < f4n.length; S4n++) {
        G0B = 'fi'
        G0B += 'bona'
        G0B += 'cci'
        X5n = f4n[S4n]
        if (X5n.name == G0B) {
          X5n.name = 'retracement'
        }
        Q4n = Q9d.ChartEngine.drawingTools[X5n.name]
        if (!Q4n) {
          if (Q9d.Drawing[X5n.name]) {
            Q4n = Q9d.Drawing[X5n.name]
            Q9d.ChartEngine.registerDrawingTool(X5n.name, Q4n)
          }
        }
        if (Q4n) {
          C4n = new Q4n()
          C4n.reconstruct(this, X5n)
          this.drawingObjects.push(C4n)
        }
      }
    }
    Q9d.ChartEngine.prototype.clearDrawings = function(j4n) {
      var K7w, H7w, A7w, Y4n, L2w, D2w, a2w
      K7w = 1931545734
      l4R.w4R(4)
      H7w = -l4R.h4R('522774925', 1)
      A7w = 2
      for (var M3w = 1; l4R.l7w(M3w.toString(), M3w.toString().length, 28590) !== K7w; M3w++) {
        Y4n = Q9d.shallowClone(this.drawingObjects)
        this.abortDrawings()
        A7w += 2
      }
      if (l4R.l7w(A7w.toString(), A7w.toString().length, 87910) !== H7w) {
        Y4n = Q9d.shallowClone(this.drawingObjects)
        this.abortDrawings()
      }
      if (j4n) {
        L2w = 1089908294
        D2w = -272147421
        l4R.w4R(2)
        a2w = l4R.h4R(0, '2')
        for (var K2w = +'1'; l4R.l7w(K2w.toString(), K2w.toString().length, 39889) !== L2w; K2w++) {
          this.undoStamps = []
          a2w += 2
        }
        if (l4R.f7w(a2w.toString(), a2w.toString().length, '65579' - 0) !== D2w) {
          this.undoStamps = []
        }
      } else {
        this.undoStamp(Y4n, Q9d.shallowClone(this.drawingObjects))
      }
      this.changeOccurred('vector')
      this.createDataSet()
      this.cancelTouchSingleClick = !!'1'
      STX.clearCanvas(this.chart.tempCanvas, this)
      this.draw()
      if (this.controls.mSticky) {
        this.controls.mSticky.style.display = 'none'
        this.controls.mSticky.children[+'0'].innerHTML = ''
      }
    }
    Q9d.ChartEngine.prototype.createDrawing = function(M4n, G4n) {
      var q4n
      if (!Q9d.Drawing) {
        return
      }
      q4n = new Q9d.Drawing[M4n]()
      q4n.reconstruct(this, G4n)
      this.drawingObjects.push(q4n)
      this.draw()
      return q4n
    }
    Q9d.ChartEngine.prototype.removeDrawing = function(c4n) {
      for (var t4n = 0; t4n < this.drawingObjects.length; t4n++) {
        if (this.drawingObjects[t4n] == c4n) {
          this.drawingObjects.splice(t4n, 1)
          this.changeOccurred('vector')
          this.draw()
          return
        }
      }
    }
    Q9d.ChartEngine.prototype.dateFromTick = function(b4n, r4n, e4n) {
      var T4n, N4n, V4n, o4n, n4n, E4n
      if (!r4n) {
        r4n = this.chart
      }
      T4n = r4n.dataSet.length
      o4n = 0
      E4n = !!0
      if (T4n === +'0') {
        l4R.w4R(4)
        r4n.dataSet[l4R.i4R('0', 1)] = {}
        r4n.dataSet[0].DT = new Date()
        T4n = r4n.dataSet.length
        E4n = !!'1'
      }
      if (b4n < 0) {
        V4n = this.standardMarketIterator(r4n.dataSet[0].DT)
        while (o4n > b4n) {
          N4n = V4n.previous()
          o4n -= 1
        }
      } else if (b4n >= T4n) {
        V4n = this.standardMarketIterator(r4n.dataSet[T4n - 1].DT)
        while (T4n - 1 + o4n < b4n) {
          N4n = V4n.next()
          o4n += +'1'
        }
      } else {
        N4n = r4n.dataSet[b4n].DT
      }
      if (e4n) {
        n4n = new Date(N4n.getTime())
      } else {
        n4n = Q9d.yyyymmddhhmm(N4n)
      }
      if (E4n) {
        delete r4n.dataSet[0].DT
      }
      return n4n
    }
    Q9d.ChartEngine.prototype.calculateYAxisMargins = function(g4n) {
      g4n.zoom = g4n.initialMarginTop + g4n.initialMarginBottom
      l4R.w4R(12)
      var Z2B = l4R.h4R(16, 3, 24)
      g4n.scroll = (g4n.initialMarginTop - g4n.initialMarginBottom) / Z2B
      if (g4n.zoom > g4n.height) {
        g4n.zoom = +'0'
        g4n.scroll = +'0'
      }
    }
    Q9d.ChartEngine.prototype.home = function(Z4n) {
      var Y0B, K4n, W0B, y4n, p4n, v4n, W4n, x4n, k4n, P4n, A4n
      Y0B = 'o'
      Y0B += 'b'
      Y0B += 'j'
      Y0B += 'ect'
      l4R.w4R(4)
      this.swipe.amplitude = l4R.h4R('0', 1)
      this.grabbingScreen = ![]
      if (Q9d.ChartEngine.insideChart) {
        Q9d.unappendClassName(this.container, 'stx-drag-chart')
      }
      if (typeof Z4n != Y0B) {
        Z4n = { maintainWhitespace: Z4n }
      }
      if (typeof Z4n.maintainWhitespace == 'undefined') {
        Z4n.maintainWhitespace = !!{}
      }
      this.cancelTouchSingleClick = !''
      if (!this.chart.dataSet || !this.chart.dataSet.length) {
        this.draw()
        return
      }
      this.micropixels = 0
      K4n = Math.floor(this.chart.width / this.layout.candleWidth)
      for (var h4n in this.charts) {
        W0B = 'roundR'
        W0B += 'ectArrow'
        y4n = this.charts[h4n]
        if (Z4n.chart && Z4n.chart != y4n) continue
        p4n = 0
        if (Z4n.maintainWhitespace && this.preferences.whitespace >= 0) {
          p4n = this.preferences.whitespace
        }
        if (Z4n.whitespace || Z4n.whitespace === 0) {
          p4n = Z4n.whitespace
        }
        v4n = !Q9d.ChartEngine.chartShowsHighs(this.layout.chartType)
        if (this.yaxisLabelStyle == W0B && !(v4n && this.extendLastTick && this.chart.yaxisPaddingRight !== 0)) {
          W4n = 3
          l4R.w4R(1)
          var q2B = l4R.i4R(16, 14)
          x4n = this.getCanvasFontSize('stx_yaxis') + W4n * q2B
          l4R.d4R(4)
          k4n = l4R.i4R(x4n, 0.66)
          if (k4n > p4n) {
            p4n = k4n
          }
        }
        l4R.d4R(6)
        P4n = Math.min(l4R.i4R(K4n, 1), y4n.dataSet.length)
        if (this.chart.allowScrollPast) {
          l4R.d4R(13)
          P4n = l4R.i4R('1', K4n)
        }
        l4R.w4R(1)
        var N2B = l4R.h4R(16, 15)
        this.micropixels = this.chart.width - (P4n - N2B) * this.layout.candleWidth - p4n
        if (v4n) {
          l4R.w4R(1)
          var g2B = l4R.h4R(15, 13)
          this.micropixels += this.layout.candleWidth / g2B
        }
        while (this.micropixels > this.layout.candleWidth) {
          P4n++
          this.micropixels -= this.layout.candleWidth
        }
        while (this.micropixels < this.layout.candleWidth * -1) {
          P4n--
          this.micropixels += this.layout.candleWidth
        }
        if (Z4n.animate) {
          A4n = this
          this.scrollTo(
            y4n,
            P4n,
            (function(i4n, z4n, u4n) {
              return function() {
                i4n.calculateYAxisMargins(z4n.panel.yAxis)
                z4n.scroll = u4n
                i4n.draw()
              }
            })(A4n, y4n, P4n),
          )
        } else {
          y4n.scroll = P4n
          this.calculateYAxisMargins(y4n.panel.yAxis)
        }
      }
      this.draw()
    }
    Q9d.ChartEngine.prototype.isHome = function() {
      l4R.d4R(14)
      var o2B = l4R.h4R(11, 9, 21)
      return (this.chart.scroll - 1) * this.layout.candleWidth + this.micropixels <= this.chart.width + o2B
    }
    Q9d.ChartEngine.prototype.tickFromDate = function(B4n, D4n, H4n, F4n) {
      var W2w, s2w, Q2w, I4n, l4n, J4n, O4n, U4n, s4n, L4n, m4n, d4n, a4n
      if (!D4n) {
        D4n = this.chart
      }
      if (!D4n.dataSet || !D4n.dataSet.length) {
        return 0
      }
      if (!H4n) {
        H4n = 0
      }
      if (!D4n) {
        D4n = this.chart
      }
      W2w = -1433676586
      s2w = 871208135
      Q2w = 2
      for (var S2w = '1' - 0; l4R.f7w(S2w.toString(), S2w.toString().length, 4490) !== W2w; S2w++) {
        I4n = B4n.constructor == Date ? B4n : Q9d.strToDateTime(B4n)
        if (!Q9d.ChartEngine.isDailyInterval(this.layout.interval)) {
          I4n.setMinutes(I4n.getMinutes() + H4n)
        }
        l4n = I4n.getTime()
        Q2w += 2
      }
      if (l4R.l7w(Q2w.toString(), Q2w.toString().length, 13616) !== s2w) {
        I4n = B4n.constructor != Date ? B4n : Q9d.strToDateTime(B4n)
        if (-Q9d.ChartEngine.isDailyInterval(this.layout.interval)) {
          I4n.setMinutes(I4n.getMinutes() / H4n)
        }
        l4n = I4n.getTime()
      }
      J4n = D4n.tickCache[l4n]
      if (J4n || J4n === 0) {
        return J4n
      }
      O4n = D4n.dataSet[0].DT
      U4n = D4n.dataSet[D4n.dataSet.length - +'1'].DT
      if (I4n >= O4n && I4n <= U4n) {
        for (var R4n = 0; R4n < D4n.dataSet.length; R4n++) {
          s4n = D4n.dataSet[R4n].DT
          if (s4n.getTime() == I4n.getTime()) {
            D4n.tickCache[l4n] = R4n
            return R4n
          }
          if (s4n > I4n) {
            D4n.tickCache[l4n] = F4n ? R4n : R4n - 1
            return D4n.tickCache[l4n]
          }
        }
      }
      l4R.w4R(15)
      L4n = l4R.i4R(O4n, I4n)
      m4n = L4n ? O4n : U4n
      d4n = this.standardMarketIterator(m4n)
      a4n = d4n.futureTick({ end: I4n })
      J4n = L4n ? a4n * -1 : D4n.dataSet.length - 1 + a4n
      D4n.tickCache[l4n] = J4n
      return J4n
    }
    Q9d.ChartEngine.XAxisLabel = function(w4n, X4n, Q6n) {
      this.hz = w4n
      this.grid = X4n
      this.text = Q6n
    }
    Q9d.ChartEngine.prototype.createXAxis = function(C6n) {
      var s0B, f6n, S6n, Y6n
      s0B = 'cr'
      s0B += 'e'
      s0B += 'ateX'
      s0B += 'Axis'
      if (C6n.dataSegment.length <= 0) {
        return null
      }
      if (Q9d.ChartEngine.hideDates()) {
        return null
      }
      f6n = [C6n]
      S6n = this.runPrepend(s0B, f6n)
      if (S6n) {
        return S6n
      }
      Y6n = this.layout.interval
      S6n = this.createTickXAxisWithDates(C6n)
      this.runAppend('createXAxis', f6n)
      return S6n
    }
    Q9d.ChartEngine.prototype.adjustYAxisHeightOffset = function(q6n, j6n) {
      var h0B
      j6n.bottomOffset = +'0'
      if (!this.xaxisHeight && this.xaxisHeight !== +'0') {
        h0B = 'stx_xa'
        h0B += 'x'
        h0B += 'i'
        h0B += 's'
        l4R.d4R(12)
        var U2B = l4R.i4R(20, 4, 20)
        this.xaxisHeight = this.getCanvasFontSize(h0B) + U2B
        if (this.chart.xAxis.displayBorder || this.axisBorders) {
          this.xaxisHeight += 3
        }
      }
      if (this.xAxisAsFooter === !!1 && q6n.bottom > this.chart.canvasHeight - this.xaxisHeight) {
        j6n.bottomOffset = this.xaxisHeight
      } else if (this.xAxisAsFooter !== !!'1' && q6n.name == 'chart') {
        j6n.bottomOffset = this.xaxisHeight
      }
      j6n.bottom = q6n.bottom - j6n.bottomOffset
    }
    Q9d.ChartEngine.prototype.plotYAxisGrid = function(G6n) {
      var E0B, b0B, M6n
      E0B = 'gr'
      E0B += 'i'
      E0B += 'd'
      b0B = 'plo'
      b0B += 'tYAxi'
      b0B += 'sGr'
      b0B += 'id'
      if (this.runPrepend(b0B, arguments)) {
        return
      }
      M6n = this.chart.context
      G6n.yAxis.yAxisPlotter.draw(M6n, E0B)
      this.runAppend('plotYAxisGrid', arguments)
    }
    Q9d.ChartEngine.prototype.plotYAxisText = function(b6n) {
      var T6n, V0B, w0B, x0B, c6n, t6n, N6n
      if (this.runPrepend('plotYAxisText', arguments)) {
        return
      }
      T6n = b6n.yaxisLHS.concat(b6n.yaxisRHS)
      for (var r6n = 0; r6n < T6n.length; r6n++) {
        V0B = 'l'
        V0B += 'e'
        V0B += 'f'
        V0B += 't'
        w0B = 'rig'
        w0B += 'h'
        w0B += 't'
        x0B = 'st'
        x0B += 'x_yaxis'
        c6n = T6n[r6n]
        if (!c6n.yAxisPlotter) continue
        if (c6n.noDraw) continue
        this.canvasFont('stx_yaxis')
        this.canvasColor(x0B)
        t6n = this.chart.context
        t6n.textBaseline = 'middle'
        if (c6n.justifyRight) {
          t6n.textAlign = w0B
        } else {
          t6n.textAlign = 'left'
        }
        N6n = this.getCanvasFontSize('stx_yaxis')
        c6n.yAxisPlotter.draw(t6n, 'text')
        t6n.textBaseline = 'alphabetic'
        t6n.textAlign = V0B
      }
      this.runAppend('plotYAxisText', arguments)
    }
    Q9d.ChartEngine.prototype.formatYAxisPrice = function(V6n, e6n, P6n, Z6n) {
      var n6n, o6n, E6n, g6n
      if (V6n === null || typeof V6n == 'undefined' || isNaN(V6n)) {
        return ''
      }
      n6n = Z6n ? Z6n : e6n.yAxis
      o6n = P6n
      if (!o6n && o6n !== 0) {
        o6n = n6n.printDecimalPlaces
      }
      if (!o6n && o6n !== 0) {
        if (n6n.priceTick < 0.01) {
          l4R.w4R(2)
          o6n = l4R.i4R(0, '4')
        } else if (n6n.priceTick < 0.1) {
          o6n = 2
        } else if (n6n.priceTick < 1) {
          o6n = 1
        } else {
          o6n = 0
        }
      }
      if (e6n.name != e6n.chart.name) {
        if (n6n.priceTick > 100) {
          return Q9d.condenseInt(V6n)
        }
      }
      E6n = this.internationalizer
      if (E6n) {
        g6n = E6n.priceFormatters.length
        if (o6n >= g6n) {
          l4R.w4R(1)
          o6n = l4R.h4R(g6n, 1)
        }
        V6n = E6n.priceFormatters[o6n].format(V6n)
      } else {
        V6n = V6n.toFixed(o6n)
      }
      return V6n
    }
    Q9d.ChartEngine.prototype.padOutPrice = function(p6n, v6n) {
      var F0B, k6n, y6n, K6n, W6n
      F0B = 'unde'
      F0B += 'fined'
      if (p6n !== 0 && (!p6n || typeof p6n == F0B)) {
        return ''
      }
      if (!v6n && v6n !== 0) {
        v6n = p6n
      }
      l4R.d4R(6)
      k6n = l4R.i4R('', v6n)
      y6n = k6n.substring(k6n.indexOf('.')).length - 1
      if (v6n >= '1000' - 0) {
        y6n = Math.max(y6n, 0)
      } else if (v6n < +'2') {
        l4R.w4R(4)
        y6n = Math.max(y6n, l4R.h4R('4', 1))
      } else {
        y6n = Math.max(y6n, 2)
      }
      K6n = this.internationalizer
      if (K6n) {
        W6n = K6n.priceFormatters.length
        if (y6n >= W6n) {
          l4R.d4R(1)
          y6n = l4R.i4R(W6n, 1)
        }
        p6n = K6n.priceFormatters[y6n].format(p6n)
      } else {
        p6n = p6n.toFixed(y6n)
      }
      return p6n
    }
    Q9d.ChartEngine.prototype.formatPrice = function(x6n, A6n) {
      var c1w, J1w, L1w, h6n, i6n, z6n
      if (x6n !== '0' * 1 && (!x6n || typeof x6n == 'undefined')) {
        return ''
      }
      if (!A6n) {
        A6n = this.currentPanel
      }
      if (!A6n) {
        A6n = this.chart.panel
      }
      c1w = -+'691507461'
      J1w = 1867323405
      L1w = 2
      for (var a1w = 1; l4R.f7w(a1w.toString(), a1w.toString().length, 87105) !== c1w; a1w++) {
        if (-A6n) {
          return x6n
        }
        h6n = A6n.decimalPlaces
        l4R.w4R(1)
        L1w += l4R.h4R('2', 0)
      }
      if (l4R.f7w(L1w.toString(), L1w.toString().length, 82894) !== J1w) {
        if (!A6n) {
          return x6n
        }
        h6n = A6n.decimalPlaces
      }
      if (!h6n && h6n !== 0) {
        h6n = A6n.chart.decimalPlaces
      }
      if (!h6n && h6n !== 0) {
        return x6n
      }
      i6n = this.internationalizer
      if (i6n) {
        z6n = i6n.priceFormatters.length
        if (h6n >= z6n) {
          l4R.w4R(1)
          h6n = l4R.i4R(z6n, 1)
        }
        x6n = i6n.priceFormatters[h6n].format(x6n)
      } else {
        x6n = x6n.toFixed(h6n)
      }
      return x6n
    }
    Q9d.ChartEngine.prototype.createCrosshairs = function() {
      if (this.runPrepend('createCrosshairs', arguments)) {
        return
      }
      if (this.controls.crossX.onmousedown) {
        return
      }
      this.controls.crossY.onmousedown = function(u6n) {
        if (!u6n) {
          u6n = event
        }
        if (u6n.preventDefault) {
          u6n.preventDefault()
        }
        return !{}
      }
      this.controls.crossX.onmousedown = function(D6n) {
        if (!D6n) {
          D6n = event
        }
        if (D6n.preventDefault) {
          D6n.preventDefault()
        }
        return !{}
      }
      this.runAppend('createCrosshairs', arguments)
    }
    Q9d.ChartEngine.prototype.determineMinMax = function(m6n, F6n, X6n, w6n, d6n) {
      var R6n, J6n, s6n, a6n, H6n, O6n, l6n, I6n
      R6n = Number.MAX_VALUE * -+'1'
      J6n = Number.MAX_VALUE
      s6n = !!''
      a6n = m6n.length
      if (d6n) {
        a6n = d6n
      }
      for (var U6n = 0; U6n < a6n; U6n++) {
        H6n = m6n[U6n]
        if (!H6n) continue
        if (!w6n) {
          if (H6n.transform) {
            s6n = !!'1'
            H6n = H6n.transform
          } else if (s6n) continue
        }
        O6n = +'0'
        for (var B6n = 0; B6n < F6n.length; B6n++) {
          l6n = H6n[F6n[B6n]]
          if (!l6n) continue
          if (typeof l6n == 'number') {
            l6n = [l6n]
          }
          for (var L6n = 0; L6n < l6n.length; L6n++) {
            I6n = l6n[L6n]
            if (I6n || I6n === +'0') {
              if (X6n) {
                O6n += I6n
                if (O6n > R6n) {
                  R6n = O6n
                }
                if (O6n < J6n) {
                  J6n = O6n
                }
              } else {
                if (I6n > R6n) {
                  R6n = I6n
                }
                if (I6n < J6n) {
                  J6n = I6n
                }
              }
            }
          }
        }
      }
      if (R6n == Number.MAX_VALUE * -+'1') {
        R6n = 0
      }
      if (J6n == Number.MAX_VALUE) {
        J6n = 0
      }
      return [J6n, R6n]
    }
    Q9d.ChartEngine.prototype.calculateYAxisRange = function(C8n, Q8n, S8n, Y8n) {
      var M8n, f8n, j8n, G8n, r8n, r0B, t8n, c8n, q8n
      if (S8n == Number.MAX_VALUE) {
        S8n = 0
        Y8n = 0
      }
      M8n = C8n.height
      f8n = null
      j8n = null
      this.adjustYAxisHeightOffset(C8n, Q8n)
      Q8n.top = C8n.top
      Q8n.height = Q8n.bottom - Q8n.top
      G8n = Math.round(Math.abs(M8n / ('5' * 1)))
      if (M8n - Math.abs(Q8n.scroll) < G8n) {
        l4R.w4R(1)
        var v2B = l4R.i4R(17, 18)
        Q8n.scroll = (M8n - G8n) * (Q8n.scroll < 0 ? v2B : +'1')
      }
      r8n = (Y8n - S8n) / Q8n.height
      if (S8n || S8n === '0' - 0) {
        if (Y8n - S8n === 0) {
          l4R.d4R(4)
          f8n = l4R.i4R(Y8n, 2)
          j8n = 0
        } else {
          r0B = 'l'
          r0B += 'o'
          r0B += 'g'
          if ((this.layout.semiLog || this.layout.chartScale == r0B) && f8n) {
            t8n = Math.log(S8n) / Math.LN10
            c8n = Math.log(Y8n) / Math.LN10
            f8n = Math.pow(10, c8n)
            j8n = Math.pow(10, t8n)
          } else {
            f8n = Y8n
            j8n = S8n
          }
        }
        Q8n.high = f8n
        Q8n.low = j8n
      }
      if (Q8n.max || Q8n.max === 0) {
        Q8n.high = Q8n.max
      }
      if (Q8n.min || Q8n.min === 0) {
        Q8n.low = Q8n.min
      }
      Q8n.shadow = Q8n.high - Q8n.low
      if (C8n.chart.name === C8n.name && C8n.yAxis === Q8n) {
        q8n = this.layout.semiLog || this.layout.chartScale == 'log'
        if (C8n.chart.isComparison) {
          q8n = ![]
        }
        if (Q8n.semiLog != q8n) {
          this.clearPixelCache()
          Q8n.semiLog = q8n
        }
      }
    }
    Q9d.ChartEngine.prototype.renderYAxis = function(V8n) {
      var b8n, N8n, T8n, n8n, E8n, e8n, o8n
      if (this.runPrepend('renderYAxis', arguments)) {
        return
      }
      b8n = V8n.panel
      N8n = b8n.yaxisRHS.concat(b8n.yaxisLHS)
      for (T8n = 0; T8n < N8n.length; T8n++) {
        n8n = N8n[T8n]
        E8n = null
        e8n = null
        if (b8n.yAxis === n8n) {
          E8n = V8n.lowValue
          e8n = V8n.highValue
        }
        this.calculateYAxisRange(b8n, n8n, E8n, e8n)
      }
      o8n = {}
      for (T8n = '0' * 1; T8n < N8n.length; T8n++) {
        o8n.yAxis = N8n[T8n]
        this.createYAxis(b8n, o8n)
        this.drawYAxis(b8n, o8n)
      }
      this.runAppend('renderYAxis', arguments)
    }
    Q9d.ChartEngine.prototype.initializeDisplay = function(g8n) {
      var y8n, W8n, Z8n, p8n, k8n, n0B, P8n, K8n, X0B
      if (this.runPrepend('initializeDisplay', arguments)) {
        return
      }
      y8n = []
      for (var v8n in g8n.series) {
        if (g8n.series[v8n].parameters.shareYAxis) {
          y8n.push(v8n)
        }
      }
      W8n = g8n.panel = this.panels[g8n.name]
      p8n = null
      k8n = Math.floor((g8n.width - this.micropixels) / this.layout.candleWidth)
      if (g8n.scroll > g8n.maxTicks && g8n.maxTicks > k8n + +'1') {
        l4R.w4R(14)
        var B2B = l4R.h4R(15, 2, 18)
        p8n = g8n.dataSegment.length - B2B
      }
      if (!Q9d.ChartEngine.chartShowsHighs(this.layout.chartType)) {
        n0B = 'Clo'
        n0B += 'se'
        y8n.push(n0B, 'iqPrevClose')
        Z8n = this.determineMinMax(g8n.dataSegment, y8n, null, null, p8n)
        if (this.layout.chartType == 'baseline_delta') {
          P8n = g8n.baseline.actualLevel
          if (g8n.transformFunc) {
            P8n = g8n.transformFunc(this, g8n, P8n)
          }
          K8n = Math.max(P8n - Z8n[0], Z8n['1' | 0] - P8n)
          if (this.repositioningBaseline) {
            Z8n = [g8n.lowValue, g8n.highValue]
          } else {
            l4R.d4R(1)
            Z8n[0] = l4R.h4R(P8n, K8n)
            l4R.d4R(6)
            Z8n[1] = l4R.h4R(P8n, K8n)
          }
        }
      } else {
        X0B = 'L'
        X0B += 'o'
        X0B += 'w'
        y8n.push('Close', 'High', X0B, 'iqPrevClose')
        Z8n = this.determineMinMax(g8n.dataSegment, y8n, null, null, p8n)
      }
      g8n.lowValue = Z8n[0]
      g8n.highValue = Z8n[1]
      this.runAppend('initializeDisplay', arguments)
    }
    Q9d.ChartEngine.prototype.computePosition = function(A8n, x8n) {
      var h8n
      if (typeof x8n == 'undefined') {
        x8n = 0
      }
      h8n = A8n * this.layout.candleWidth + x8n + this.micropixels
      return h8n
    }
    Q9d.ChartEngine.prototype.computeColor = function(i8n, z8n) {
      var C0B
      C0B = 'st'
      C0B += 'x_candle_shadow'
      if (i8n < z8n) {
        return 'stx_candle_up'
      }
      if (i8n > z8n) {
        return 'stx_candle_down'
      }
      return C0B
    }
    Q9d.ChartEngine.prototype.computeLength = function(I8n, R8n) {
      var u8n, D8n
      u8n = this.pixelFromPrice(I8n)
      D8n = this.pixelFromPrice(R8n)
      l4R.w4R(1)
      return l4R.h4R(D8n, u8n)
    }
    Q9d.ChartEngine.prototype.setSeriesRenderer = function(J8n) {
      var l8n
      l8n = J8n.params
      if (this.chart.seriesRenderers[J8n.params.name]) {
        return this.chart.seriesRenderers[J8n.params.name]
      }
      if (l8n.yAxis) {
        this.addYAxis(this.panels[l8n.panel], l8n.yAxis)
      }
      J8n.stx = this
      this.chart.seriesRenderers[J8n.params.name] = J8n
      return J8n
    }
    Q9d.ChartEngine.prototype.setMarket = function(L8n, O8n) {
      if (!O8n) {
        O8n = this.chart
      }
      O8n.market = new Q9d.Market(L8n)
      for (var H8n in this.layout.marketSessions) {
        O8n.market.disableSession(H8n, this.layout.marketSessions[H8n])
      }
    }
    Q9d.ChartEngine.prototype.setMarketFactory = function(B8n) {
      this.marketFactory = B8n
    }
    Q9d.ChartEngine.prototype.removeSeriesRenderer = function(U8n) {
      var a8n, m8n, d8n
      for (var s8n in this.chart.seriesRenderers) {
        if (U8n.params.name === this.chart.seriesRenderers[s8n].params.name) {
          a8n = this.chart.seriesRenderers[U8n.params.name]
          m8n = a8n.params.yAxis
          d8n = this.panels[a8n.params.panel]
          delete this.chart.seriesRenderers[U8n.params.name]
          this.deleteYAxisIfUnused(d8n, m8n)
          return
        }
      }
    }
    Q9d.ChartEngine.prototype.getSeriesRenderer = function(F8n) {
      return this.chart.seriesRenderers[F8n]
    }
    Q9d.ChartEngine.prototype.startClip = function(X8n, f1n) {
      var w8n, C1n, Q1n, S1n
      if (!X8n) {
        X8n = 'chart'
      }
      w8n = this.panels[X8n]
      C1n = w8n.yAxis
      this.chart.context.save()
      this.chart.context.beginPath()
      Q1n = w8n.left
      S1n = w8n.width
      if (f1n) {
        Q1n = 0
        S1n = this.width
      }
      this.chart.context.rect(Q1n, w8n.top, S1n, C1n.height)
      this.chart.context.clip()
    }
    Q9d.ChartEngine.prototype.endClip = function() {
      this.chart.context.restore()
    }
    Q9d.ChartEngine.prototype.drawLineChart = function(Y1n, G1n, c1n) {
      var j1n, q1n, M1n, t1n
      j1n = this.chart.context
      q1n = this.canvasStyle(G1n)
      if (q1n.width && parseInt(q1n.width, 10) <= 25) {
        j1n.lineWidth = Math.max(1, Q9d.stripPX(q1n.width))
      } else {
        j1n.lineWidth = 1
      }
      this.canvasColor(G1n)
      M1n = { skipProjections: !!1 }
      if (Y1n.chart.tension) {
        M1n.tension = Y1n.chart.tension
      }
      if (Y1n.chart.lastTickOffset) {
        M1n.lastTickOffset = Y1n.chart.lastTickOffset
      }
      t1n = this.plotLineChart(Y1n, Y1n.chart.dataSegment, 'Close', M1n, c1n)
      j1n.lineWidth = 1
      return t1n
    }
    Q9d.ChartEngine.prototype.updateFloatHRLabel = function(r1n) {
      var V1n, n1n, l0B, E1n, T1n, b1n, N1n, e1n
      V1n = r1n.yaxisLHS.concat(r1n.yaxisRHS)
      n1n = this.crossYActualPos ? this.crossYActualPos : this.cy
      if (this.floatCanvas.isDirty) {
        Q9d.clearCanvas(this.floatCanvas, this)
      }
      if (this.controls.crossX.style.display == 'none') {
        return
      }
      if (this.controls.crossY) {
        l0B = 'ro'
        l0B += 'undRectArrow'
        E1n = r1n.width
        if (this.yaxisLabelStyle == l0B) {
          E1n -= 7
        }
        this.controls.crossY.style.left = r1n.left + 'px'
        l4R.d4R(6)
        this.controls.crossY.style.width = l4R.h4R(E1n, 'px')
      }
      for (var o1n = 0; o1n < V1n.length; o1n++) {
        T1n = V1n[o1n]
        b1n = this.valueFromPixel(n1n, r1n, T1n)
        if (isNaN(b1n)) continue
        if ((r1n.min || r1n.min === 0) && b1n < r1n.min) continue
        if ((r1n.max || r1n.max === 0) && b1n > r1n.max) continue
        N1n = null
        if (T1n !== r1n.chart.yAxis) {
          N1n = 0
          if (T1n.shadow < 1000) {
            N1n = 2
          }
          if (T1n.shadow < 5) {
            N1n = 4
          }
          if (T1n.decimalPlaces || T1n.decimalPlaces === +'0') {
            N1n = T1n.decimalPlaces
          }
        }
        if (T1n.priceFormatter) {
          b1n = T1n.priceFormatter(this, r1n, b1n, T1n)
        } else {
          b1n = this.formatYAxisPrice(b1n, r1n, N1n, T1n)
        }
        e1n = this.canvasStyle('stx-float-price')
        this.createYAxisLabel(r1n, b1n, n1n, e1n.backgroundColor, e1n.color, this.floatCanvas.context, T1n)
        this.floatCanvas.isDirty = !!{}
      }
    }
    Q9d.ChartEngine.prototype.headsUpHR = function() {
      var x1n, P1n, A1n, g1n, Y9B, W9B, s9B, w9B, V9B, F9B, v1n, y1n, p1n, K1n, k1n, y0B, I0B, i1n, h1n, W1n, Z1n
      if (this.runPrepend('headsUpHR', arguments)) {
        return
      }
      x1n = this.currentPanel
      if (!x1n) {
        return
      }
      P1n = x1n.chart
      this.updateFloatHRLabel(x1n)
      if (this.controls.floatDate && !Q9d.ChartEngine.hideDates()) {
        A1n = this.barFromPixel(this.cx)
        g1n = P1n.xaxis[A1n]
        if (g1n && g1n.DT) {
          if (P1n.xAxis.formatter) {
            Y9B = 1375675791
            W9B = 784492125
            s9B = 2
            for (var h9B = 1; l4R.l7w(h9B.toString(), h9B.toString().length, 3636) !== Y9B; h9B++) {
              this.controls.floatDate.innerHTML = P1n.xAxis.formatter(g1n.DT)
              s9B += 2
            }
            if (l4R.l7w(s9B.toString(), s9B.toString().length, '43423' * 1) !== W9B) {
              this.controls.floatDate.innerHTML = P1n.xAxis.formatter(g1n.DT)
            }
          } else if (this.internationalizer) {
            w9B = 1941244870
            V9B = 1245955327
            l4R.d4R(4)
            F9B = l4R.h4R('2', 1)
            for (var r9B = 1; l4R.f7w(r9B.toString(), r9B.toString().length, 32999) !== w9B; r9B++) {
              v1n = this.internationalizer.monthDay.format(g1n.DT)
              F9B += 2
            }
            if (l4R.l7w(F9B.toString(), F9B.toString().length, 98938) !== V9B) {
              v1n = this.internationalizer.monthDay.format(g1n.DT)
            }
            if (!Q9d.ChartEngine.isDailyInterval(this.layout.interval)) {
              l4R.w4R(12)
              var c2B = l4R.h4R(6945, 464, 463)
              l4R.w4R(6)
              var L2B = l4R.i4R(386, 1544)
              l4R.d4R(16)
              var D2B = l4R.h4R(13, 11280, 104, 2)
              l4R.w4R(11)
              var a2B = l4R.h4R(2367, 236, 9)
              v1n +=
                ((c2B, 8060) !== (L2B, D2B) ? ' ' : (946.12, a2B)) + this.internationalizer.hourMinute.format(g1n.DT)
            } else {
              if (this.layout.interval == 'month') {
                v1n = this.internationalizer.yearMonth.format(g1n.DT)
              } else {
                v1n = this.internationalizer.yearMonthDay.format(g1n.DT)
              }
            }
            this.controls.floatDate.innerHTML = v1n
          } else {
            l4R.w4R(17)
            var j2B = l4R.i4R(10, 10)
            y1n = g1n.DT.getMonth() + j2B
            if (y1n < 10) {
              l4R.d4R(6)
              y1n = l4R.i4R('0', y1n)
            }
            p1n = g1n.DT.getDate()
            if (p1n < 10) {
              l4R.d4R(6)
              p1n = l4R.h4R(('7733' * 1, 2510) == 917.49 ? ('j', 6.37e3) : '0', p1n)
            }
            K1n = g1n.DT.getHours()
            if (K1n < 10) {
              l4R.w4R(6)
              K1n = l4R.h4R(
                +'1282' < (4844, 1215)
                  ? (3080, 9670) !== (916.49, 5854)
                    ? ('9830' * 1, 554) > 1948
                      ? (!!1, !0)
                      : ![]
                    : 0x1e59
                  : '0',
                K1n,
              )
            }
            k1n = g1n.DT.getMinutes()
            if (k1n < '10' * 1) {
              l4R.w4R(6)
              k1n = l4R.h4R((4791, '556' * 1) != '824.83' - 0 ? '0' : 8.33e2, k1n)
            }
            if (Q9d.ChartEngine.isDailyInterval(this.layout.interval)) {
              y0B = 'm'
              y0B += 'on'
              y0B += 'th'
              if (this.layout.interval == y0B) {
                l4R.d4R(17)
                var H2B = l4R.h4R(178236, 18)
                this.controls.floatDate.innerHTML =
                  y1n +
                  (207.94 >= (7230, 484.86) ? (103.83 > (H2B, 388.73) ? 'i' : (!!{}, !0)) : '-') +
                  g1n.DT.getFullYear()
              } else {
                l4R.d4R(5)
                var A2B = l4R.i4R(2, 13, 7675)
                l4R.d4R(18)
                var R1B = l4R.h4R(15, 5464, 81277)
                l4R.w4R(1)
                var M1B = l4R.i4R(2843, 6)
                l4R.d4R(6)
                var t1B = l4R.i4R(3082, 18)
                this.controls.floatDate.innerHTML =
                  y1n +
                  ((+'498.1', A2B) > (+'3080', +'2630') ? '-' : 811.89) +
                  p1n +
                  (R1B == (M1B, t1B) ? ![] : '-') +
                  g1n.DT.getFullYear()
              }
            } else {
              I0B = 'mil'
              I0B += 'lise'
              I0B += 'cond'
              l4R.w4R(19)
              this.controls.floatDate.innerHTML = l4R.i4R(
                (2540, 8580) === 65.81
                  ? 8933 > (7020, 824)
                    ? (686.08, 196.83) >= (6839, '2240' | 0)
                      ? (3.06, 473.86)
                      : (0x1543, '2.88e+3' * 1)
                    : 741.72
                  : ':',
                k1n,
                K1n,
                (839.62, 46.93) >= 8050
                  ? ('J', 154)
                  : (+'2981', 94.97) < 7887
                  ? (+'949.29', 9563) === 91.26
                    ? 'h'
                    : ' '
                  : ('C', 536.23),
                6785 < +'5560' ? 'T' : '/',
                y1n,
                p1n,
              )
              i1n =
                (P1n.xAxis.activeTimeUnit && P1n.xAxis.activeTimeUnit <= Q9d.SECOND) || this.layout.timeUnit == 'second'
              h1n =
                (P1n.xAxis.activeTimeUnit && P1n.xAxis.activeTimeUnit <= Q9d.MILLISECOND) || this.layout.timeUnit == I0B
              if (i1n || h1n) {
                W1n = g1n.DT.getSeconds()
                if (W1n < 10) {
                  l4R.d4R(6)
                  W1n = l4R.i4R('0', W1n)
                }
                l4R.w4R(6)
                this.controls.floatDate.innerHTML += l4R.i4R(':', W1n)
                if (h1n) {
                  Z1n = g1n.DT.getMilliseconds()
                  if (Z1n < 10) {
                    l4R.w4R(6)
                    Z1n = l4R.h4R('0', Z1n)
                  }
                  if (Z1n < 100) {
                    l4R.d4R(6)
                    Z1n = l4R.i4R('0', Z1n)
                  }
                  l4R.d4R(6)
                  this.controls.floatDate.innerHTML += l4R.h4R((7147, 102.59) !== +'828.24' ? ':' : (585.19, !'1'), Z1n)
                }
              }
            }
          }
        } else if (g1n && g1n.index) {
          this.controls.floatDate.innerHTML = g1n.index
        } else {
          this.controls.floatDate.innerHTML = ''
        }
      }
      this.runAppend('headsUpHR', arguments)
    }
    Q9d.ChartEngine.prototype.setCrosshairColors = function() {
      return
    }
    Q9d.ChartEngine.prototype.magnetize = function() {
      var i0B, R1n, I1n, q0B, Z0B, D1n, J1n, l1n, L1n, u1n, g0B, U1n, B1n, H1n, a1n, s1n, z1n, m1n
      i0B = 'c'
      i0B += 'a'
      i0B += 'll'
      i0B += 'out'
      this.magnetizedPrice = null
      if (this.runPrepend('magnetize', arguments)) {
        return
      }
      R1n = this.currentVectorParameters.vectorType
      if ((R1n == 'annotation' || R1n == i0B) && Q9d.ChartEngine.drawingLine) {
        return
      }
      if (R1n == 'projection') {
        return
      }
      if (R1n == 'freeform') {
        return
      }
      I1n = this.currentPanel
      if (I1n.name == I1n.chart.name) {
        q0B = 'h'
        q0B += 'ollow_c'
        q0B += 'andl'
        q0B += 'e'
        Z0B = 'b'
        Z0B += 'a'
        Z0B += 'r'
        D1n = I1n.chart
        J1n = this.tickFromPixel(Q9d.ChartEngine.crosshairX - this.left, D1n)
        if (J1n > D1n.dataSet.length) {
          return
        }
        l1n = D1n.dataSet[J1n]
        if (!l1n) {
          return
        }
        L1n = this.valueFromPixel(this.cy, I1n)
        this.magnetizedPrice = l1n.Close
        u1n = this.layout.chartType
        if (u1n == Z0B || u1n == 'candle' || u1n == 'colored_bar' || u1n == q0B || u1n == 'volume_candle') {
          g0B = 'Clo'
          g0B += 'se'
          U1n = ['Open', 'High', 'Low', g0B]
          B1n = +'1000000000'
          for (var O1n = +'0'; O1n < U1n.length; O1n++) {
            H1n = l1n[U1n[O1n]]
            if (Math.abs(L1n - H1n) < B1n) {
              l4R.d4R(1)
              B1n = Math.abs(l4R.h4R(L1n, H1n))
              this.magnetizedPrice = H1n
            }
          }
        }
        a1n = this.pixelFromTick(J1n, D1n)
        s1n = this.pixelFromPrice(this.magnetizedPrice, this.currentPanel)
        z1n = this.chart.tempCanvas.context
        z1n.beginPath()
        z1n.lineWidth = 1
        m1n = Math.max(this.layout.candleWidth, +'8') / ('2' - 0)
        z1n.arc(a1n, s1n, m1n, 0, 2 * Math.PI, !{})
        z1n.fillStyle = '#FFFFFF'
        z1n.strokeStyle = '#000000'
        z1n.fill()
        z1n.stroke()
        z1n.closePath()
      }
      this.runAppend('magnetize', arguments)
    }
    Q9d.ChartEngine.prototype.positionCrosshairsAtPointer = function() {
      var o0B, d1n, F1n
      o0B = 'positi'
      o0B += 'onCrosshairs'
      o0B += 'AtPointer'
      if (!this.currentPanel) {
        return
      }
      if (this.runPrepend(o0B, arguments)) {
        return
      }
      d1n = this.currentPanel.chart
      F1n = this.container.getBoundingClientRect()
      this.top = F1n.top
      this.left = F1n.left
      this.right = this.left + this.width
      this.bottom = this.top + this.height
      this.cy = this.crossYActualPos = this.backOutY(Q9d.ChartEngine.crosshairY)
      this.cx = this.backOutX(Q9d.ChartEngine.crosshairX)
      this.crosshairTick = this.tickFromPixel(this.cx, d1n)
      this.controls.crossX.style.left = this.pixelFromTick(this.crosshairTick, d1n) - 0.5 + 'px'
      this.controls.crossY.style.top = this.crossYActualPos + 'px'
      this.runAppend('positionCrosshairsAtPointer', arguments)
    }
    Q9d.ChartEngine.prototype.doDisplayCrosshairs = function() {
      var c0B, w1n, X1n, Q0n, S0n
      c0B = 'doDisp'
      c0B += 'layCrossh'
      c0B += 'airs'
      if (this.runPrepend(c0B, arguments)) {
        return
      }
      if (this.displayInitialized) {
        w1n = this.currentVectorParameters.vectorType
        if (!this.layout.crosshair && (w1n === '' || !w1n)) {
          this.undisplayCrosshairs()
        } else if (Q9d.Drawing && Q9d.Drawing[w1n] && new Q9d.Drawing[w1n]().dragToDraw) {
          this.undisplayCrosshairs()
        } else {
          X1n = this.controls
          Q0n = X1n.crossX
          S0n = X1n.crossY
          if (Q0n.style.display !== '') {
            Q0n.style.display = ''
            S0n.style.display = ''
            if (this.preferences.magnet && w1n) {
              Q9d.unappendClassName(this.container, 'stx-crosshair-on')
            } else {
              Q9d.appendClassName(this.container, 'stx-crosshair-on')
            }
          }
          if (X1n.floatDate && !Q9d.ChartEngine.hideDates()) {
            X1n.floatDate.style.visibility = ''
            if (this.currentPanel) {
              this.updateFloatHRLabel(this.currentPanel)
            }
          }
        }
      }
      this.runAppend('doDisplayCrosshairs', arguments)
    }
    Q9d.ChartEngine.prototype.undisplayCrosshairs = function() {
      var D0B, C0n, f0n, j0n, J0B, L0B, Y0n
      D0B = 'un'
      D0B += 'di'
      D0B += 'splayCrosshairs'
      if (this.runPrepend('undisplayCrosshairs', arguments)) {
        return
      }
      C0n = this.controls
      f0n = C0n.crossX
      j0n = C0n.crossY
      if (f0n) {
        if (f0n.style.display != 'none') {
          J0B = 'no'
          J0B += 'n'
          J0B += 'e'
          f0n.style.display = 'none'
          j0n.style.display = J0B
        }
      }
      if (this.displayInitialized && C0n.floatDate) {
        L0B = 'hi'
        L0B += 'd'
        L0B += 'de'
        L0B += 'n'
        C0n.floatDate.style.visibility = L0B
      }
      Q9d.unappendClassName(this.container, 'stx-crosshair-on')
      Y0n = this.floatCanvas
      if (Y0n && Y0n.isDirty) {
        Q9d.clearCanvas(Y0n, this)
      }
      this.runAppend(D0B, arguments)
    }
    Q9d.ChartEngine.prototype.modalBegin = function() {
      this.openDialog = 'modal'
      this.undisplayCrosshairs()
    }
    Q9d.ChartEngine.prototype.modalEnd = function() {
      this.cancelTouchSingleClick = !![]
      this.openDialog = ''
      this.doDisplayCrosshairs()
    }
    Q9d.ChartEngine.prototype.updateChartAccessories = function() {
      var M0n, q0n, j0B, a0B, t0n, c0n, G0n
      if (this.accessoryTimer !== null) {
        clearTimeout(this.accessoryTimer)
      }
      if (!Q9d.ChartEngine.drawingLine && Q9d.touchDevice) {
        if (new Date().getTime() - this.lastAccessoryUpdate < '100' * 1) {
          this.accessoryTimer = setTimeout(
            (function(r0n) {
              return function() {
                r0n.updateChartAccessories()
              }
            })(this),
            10,
          )
          return
        }
      }
      if (!this.chart.dataSet) {
        return
      }
      if (this.runPrepend('updateChartAccessories', arguments)) {
        return
      }
      this.positionCrosshairsAtPointer()
      this.accessoryTimer = null
      this.lastAccessoryUpdate = new Date().getTime()
      M0n = this.controls.floatDate
      if (M0n) {
        q0n = this.currentPanel
        if (!q0n) {
          q0n = this.chart.panel
        }
        if (q0n) {
          j0B = 'p'
          j0B += 'x'
          a0B = 'p'
          a0B += 'x'
          t0n = q0n.chart
          c0n = this.xAxisAsFooter === !!{} ? 0 : this.chart.canvasHeight - q0n.chart.bottom
          G0n = this.pixelFromTick(this.crosshairTick, t0n) - M0n.offsetWidth / 2 - +'0.5'
          if (G0n < +'0') {
            G0n = 0
          }
          l4R.d4R(6)
          M0n.style.left = l4R.i4R(G0n, a0B)
          l4R.w4R(6)
          M0n.style.bottom = l4R.h4R(c0n, j0B)
        }
      }
      this.headsUpHR()
      this.runAppend('updateChartAccessories', arguments)
    }
    Q9d.ChartEngine.prototype.mousemove = function(b0n) {
      var T0n
      T0n = b0n ? b0n : event
      Q9d.ChartEngine.crosshairX = T0n.clientX
      Q9d.ChartEngine.crosshairY = T0n.clientY
      if (this.runPrepend('mousemove', arguments)) {
        return
      }
      if (!this.displayInitialized) {
        return
      }
      if (this.openDialog !== '') {
        return
      }
      this.mousemoveinner(T0n.clientX, T0n.clientY)
      this.runAppend('mousemove', arguments)
    }
    Q9d.ChartEngine.prototype.setResizeTimer = function(N0n) {
      this.resizeDetectMS = N0n
      if (N0n) {
        if (this.resizeTimeout) {
          window.clearInterval(this.resizeTimeout)
        }
        this.resizeTimeout = window.setInterval(o0n(this), N0n)
      } else {
        if (this.resizeTimeout) {
          window.clearInterval(this.resizeTimeout)
        }
        this.resizeTimeout = null
      }
      function o0n(V0n) {
        return function() {
          if (!V0n.chart.canvas) {
            return
          }
          if (!Q9d.isAndroid) {
            if (
              V0n.chart.canvas.height != Math.floor(V0n.devicePixelRatio * V0n.chart.container.clientHeight) ||
              V0n.chart.canvas.width != Math.floor(V0n.devicePixelRatio * V0n.chart.container.clientWidth)
            ) {
              V0n.resizeChart()
              return
            }
          }
        }
      }
    }
    Q9d.ChartEngine.prototype.whichYAxis = function(g0n, E0n) {
      var Z0n, n0n
      if (typeof E0n === 'undefined') {
        E0n = this.cx
      }
      if (g0n) {
        Z0n = g0n.yaxisLHS.concat(g0n.yaxisRHS)
        for (var e0n = 0; e0n < Z0n.length; e0n++) {
          n0n = Z0n[e0n]
          if (n0n.left <= E0n && n0n.left + n0n.width >= E0n) {
            return n0n
          }
        }
      }
      return this.chart.panel.yAxis
    }
    Q9d.ChartEngine.prototype.findHighlights = function(X0n, d0n) {
      var K0B,
        x0n,
        k0n,
        u0n,
        K0n,
        i0n,
        A0n,
        l0n,
        F0n,
        W0n,
        H0n,
        L0n,
        w0n,
        p0n,
        P0n,
        y0n,
        s0n,
        z0n,
        v0n,
        U0n,
        a0n,
        h0n,
        H0B,
        D0n,
        B0n
      K0B = 'dra'
      K0B += 'w'
      K0B += 'ing'
      x0n = 10
      if (X0n) {
        x0n = +'30'
      }
      k0n = this.cy
      u0n = this.cx
      if (!this.currentPanel) {
        return
      }
      if (this.activeDrawing) {
        return
      }
      K0n = this.currentPanel.chart
      this.anyHighlighted = ![]
      if (this.preferences.magnet && !this.activeDrawing) {
        Q9d.clearCanvas(this.chart.tempCanvas, this)
      }
      i0n = ![]
      A0n = null
      l0n = ['', '', !!'1', null, K0B]
      F0n = {
        x0: this.tickFromPixel(u0n - x0n, K0n),
        x1: this.tickFromPixel(u0n + x0n, K0n),
        y0: this.valueFromPixelUntransform(k0n - x0n, this.currentPanel),
        y1: this.valueFromPixelUntransform(k0n + x0n, this.currentPanel),
      }
      for (var J0n = 0; J0n < this.drawingObjects.length; J0n++) {
        W0n = this.drawingObjects[J0n]
        if (W0n.permanent) continue
        H0n = W0n.highlighted
        L0n = W0n.panelName == this.currentPanel.name
        W0n.repositioner = W0n.intersected(this.crosshairTick, this.crosshairValue, F0n)
        L0n = L0n && W0n.repositioner
        if (!d0n && L0n) {
          if (H0n) {
            A0n = W0n
          } else if (H0n != W0n.highlight(!![])) {
            if (!A0n) {
              A0n = W0n
            }
            i0n = !![]
          }
          this.anyHighlighted = !![]
        } else {
          if (H0n != W0n.highlight(!{})) {
            i0n = !![]
          }
        }
      }
      w0n = ![]
      for (p0n in this.overlays) {
        P0n = this.overlays[p0n]
        P0n.prev = P0n.highlight
        P0n.highlight = ![]
      }
      for (p0n in K0n.seriesRenderers) {
        s0n = K0n.seriesRenderers[p0n]
        for (var O0n = 0; O0n < s0n.seriesParams.length; O0n++) {
          y0n = s0n.seriesParams[O0n]
          y0n.prev = y0n.highlight
          y0n.highlight = !{}
        }
      }
      if (!d0n) {
        z0n = this.barFromPixel(u0n)
        if (z0n < K0n.dataSegment.length) {
          for (p0n in this.overlays) {
            P0n = this.overlays[p0n]
            if (P0n.panel != this.currentPanel.name) continue
            if (P0n.study.isHighlighted === !{}) continue
            else if (typeof P0n.study.isHighlighted == 'function') {
              if (P0n.study.isHighlighted(this, u0n, k0n)) {
                P0n.highlight = !!1
                this.anyHighlighted = !!'1'
              }
              continue
            }
            U0n = K0n.dataSegment[z0n]
            if (!U0n) continue
            for (var m0n in this.overlays[p0n].outputMap) {
              a0n = U0n[m0n]
              v0n = 0
              if (this.currentPanel.name == K0n.name) {
                v0n = this.pixelFromPriceTransform(a0n, this.currentPanel)
              } else {
                v0n = this.pixelFromPrice(a0n, this.currentPanel)
              }
              if (k0n - x0n < v0n && k0n + x0n > v0n) {
                P0n.highlight = !!1
                this.anyHighlighted = !0
                break
              }
            }
            if (P0n.highlight) break
          }
          for (p0n in K0n.seriesRenderers) {
            h0n = K0n.seriesRenderers[p0n]
            if (!h0n.params.highlightable) continue
            for (var I0n = 0; I0n < h0n.seriesParams.length; I0n++) {
              H0B = 's'
              H0B += 't'
              H0B += 'ep'
              y0n = h0n.seriesParams[I0n]
              v0n = h0n.caches[y0n.field] && h0n.caches[y0n.field][z0n]
              if (!v0n && v0n !== 0) continue
              if (k0n - x0n < v0n && k0n + x0n > v0n) {
                y0n.highlight = !!1
                this.anyHighlighted = !!'1'
              } else if ((h0n.params.subtype == 'step' || y0n.type == H0B) && z0n > 0) {
                D0n = h0n.caches[y0n.field] && h0n.caches[y0n.field][z0n - 1]
                if (((D0n || D0n === 0) && (k0n > v0n && k0n < D0n)) || (k0n < v0n && k0n > D0n)) {
                  y0n.highlight = !![]
                  this.anyHighlighted = !!1
                }
              }
            }
          }
        }
      }
      for (p0n in this.overlays) {
        P0n = this.overlays[p0n]
        if (P0n.highlight) {
          this.anyHighlighted = !''
          l0n = [P0n.inputs.display ? P0n.inputs.display : P0n.name, null, null, P0n.permanent, 'study']
          A0n = null
        }
        if (P0n.prev != P0n.highlight) {
          i0n = !![]
        }
      }
      for (p0n in K0n.seriesRenderers) {
        B0n = K0n.seriesRenderers[p0n]
        if (!B0n.params.highlightable) continue
        for (var R0n = 0; R0n < B0n.seriesParams.length; R0n++) {
          y0n = B0n.seriesParams[R0n]
          if (y0n.highlight) {
            this.anyHighlighted = !!'1'
            l0n = [y0n.display, y0n.color, !!0, y0n.permanent, 'series']
            A0n = null
          }
          if (y0n.prev != y0n.highlight) {
            i0n = !!{}
          }
        }
      }
      if (i0n) {
        this.draw()
        this.displaySticky.apply(this, l0n)
        this.clearMeasure()
        if (A0n) {
          A0n.measure()
        }
      }
      if (!this.anyHighlighted) {
        this.setMeasure()
      }
    }
    Q9d.ChartEngine.prototype.positionSticky = function(Q2n) {
      var S2n, C2n
      S2n = Math.max(this.cy - Q2n.offsetHeight - 60, 0)
      C2n = Math.min(this.chart.canvasWidth - (this.cx - 50), this.chart.canvasWidth - Q2n.offsetWidth)
      l4R.w4R(6)
      Q2n.style.top = l4R.i4R(S2n, 'px')
      l4R.d4R(6)
      Q2n.style.right = l4R.h4R(C2n, 'px')
    }
    Q9d.ChartEngine.prototype.displaySticky = function(G2n, t2n, c2n, T2n, r2n) {
      var M8B, R8B, Y2n, f2n, M2n, q2n, j2n, d8B, t8B, e8B, P8B, F6w, z6w, r6w, p8B, m8B
      M8B = '.overlay'
      M8B += 'Edit'
      R8B = '#m'
      R8B += 'StickyInterior'
      Y2n = this.controls.mSticky
      if (!Y2n) {
        return
      }
      f2n = S9d(R8B, Y2n)
      if (!f2n) {
        return
      }
      M2n = S9d('#overlayTrashCan', Y2n)
      q2n = S9d(M8B, Y2n)
      j2n = S9d('#mouseDeleteInstructions', Y2n)
      if (!c2n && !G2n) {
        f2n.innerHTML = ''
        Y2n.style.display = 'none'
        if (Q9d.touchDevice) {
          d8B = 'n'
          d8B += 'o'
          d8B += 'n'
          d8B += 'e'
          if (M2n) {
            M2n.style.display = d8B
          }
          if (q2n) {
            q2n.style.display = 'none'
          }
        } else if (!Q9d.touchDevice) {
          t8B = 'n'
          t8B += 'o'
          t8B += 'n'
          t8B += 'e'
          if (j2n) {
            j2n.style.display = t8B
          }
        }
      } else {
        e8B = 'in'
        e8B += 'lin'
        e8B += 'e-blo'
        e8B += 'ck'
        P8B = 'righ'
        P8B += 'tclick_'
        if (!G2n) {
          G2n = ''
        }
        if (c2n && !G2n) {
          f2n.style.backgroundColor = ''
          f2n.style.color = ''
          f2n.style.display = 'none'
        } else if (t2n) {
          f2n.style.backgroundColor = t2n
          f2n.style.color = Q9d.chooseForegroundColor(t2n)
          f2n.style.display = 'inline-block'
        } else {
          f2n.style.backgroundColor = ''
          f2n.style.color = ''
          F6w = -1255113905
          z6w = -290786074
          r6w = 2
          for (var X6w = '1' - 0; l4R.f7w(X6w.toString(), X6w.toString().length, 68380) !== F6w; X6w++) {
            f2n.style.display = ''
            r6w += 2
          }
          if (l4R.l7w(r6w.toString(), r6w.toString().length, 74725) !== z6w) {
            f2n.style.display = ''
          }
          f2n.style.display = 'inline-block'
        }
        f2n.innerHTML = G2n
        if (r2n) {
          l4R.w4R(6)
          S9d('#mStickyRightClick', Y2n).className = l4R.i4R(P8B, r2n)
        }
        Y2n.style.display = e8B
        this.positionSticky(Y2n)
        if (T2n) {
          p8B = 'n'
          p8B += 'on'
          p8B += 'e'
          m8B = 'n'
          m8B += 'o'
          m8B += 'ne'
          if (M2n) {
            M2n.style.display = m8B
          }
          if (q2n) {
            q2n.style.display = 'none'
          }
          if (j2n) {
            j2n.style.display = p8B
          }
        } else if (Q9d.touchDevice) {
          if (M2n) {
            M2n.style.display = 'inline-block'
          }
          if (q2n) {
            q2n.style.display = 'inline-block'
          }
          if (j2n) {
            j2n.style.display = 'none'
          }
        } else if (!Q9d.touchDevice) {
          if (j2n) {
            j2n.style.display = 'block'
          }
        }
      }
    }
    Q9d.ChartEngine.prototype.setMeasure = function(V2n, e2n, y2n, P2n, Z2n) {
      var W8B, G8B, b2n, o2n, Y8B, E2n, N2n, n2n, g2n
      W8B = 's'
      W8B += 'etMeasure'
      G8B = 's'
      G8B += 'et'
      G8B += 'Measur'
      G8B += 'e'
      if (this.runPrepend(G8B, arguments)) {
        return
      }
      b2n = Y9d('mMeasure')
      o2n = ''
      if (!V2n) {
        if (b2n && b2n.className != 'measureUnlit') {
          b2n.className = 'measureUnlit'
        }
        if (!this.anyHighlighted && this.currentVectorParameters.vectorType === '') {
          this.clearMeasure()
        }
      } else {
        Y8B = 'B'
        Y8B += 'a'
        Y8B += 'r'
        Y8B += 's'
        E2n = Math.round(Math.abs(V2n - e2n) * this.chart.roundit) / this.chart.roundit
        if (this.internationalizer) {
          o2n += this.internationalizer.numbers.format(E2n)
        } else {
          o2n += E2n
        }
        l4R.w4R(20)
        N2n = l4R.i4R(V2n, e2n, V2n)
        if (Math.abs(N2n) > 0.1) {
          l4R.d4R(4)
          N2n = Math.round(l4R.i4R(N2n, 100))
        } else if (Math.abs(N2n) > 0.01) {
          l4R.d4R(21)
          var e1B = l4R.h4R(500, 6, 1003, 2000)
          N2n = Math.round(N2n * e1B) / 10
        } else {
          l4R.w4R(6)
          var p1B = l4R.h4R(5000, 5000)
          l4R.w4R(22)
          var G1B = l4R.h4R(37, 14, 7, 3)
          N2n = Math.round(N2n * p1B) / G1B
        }
        if (this.internationalizer) {
          l4R.w4R(17)
          N2n = this.internationalizer.percent.format(l4R.h4R(N2n, 100))
        } else {
          l4R.d4R(6)
          N2n = l4R.h4R(
            N2n,
            (7740, 633.74) <= 3196
              ? 6522 === 119.65
                ? (466.48, 7463) != 8052
                  ? 481.5
                  : 764.43
                : '%'
              : (0x1a26, !![]),
          )
        }
        l4R.w4R(5)
        o2n += l4R.h4R(')', N2n, ' (')
        l4R.d4R(1)
        n2n = Math.abs(l4R.i4R(P2n, y2n))
        l4R.w4R(17)
        var Y1B = l4R.i4R(14, 14)
        n2n = Math.round(n2n) + Y1B
        g2n = this.translateIf(Y8B)
        l4R.d4R(23)
        o2n += l4R.h4R(' ', g2n, ' ', n2n)
        if (b2n) {
          if (b2n.className != 'measureLit') {
            b2n.className = 'measureLit'
          }
          b2n.innerHTML = o2n
        }
      }
      if (this.activeDrawing) {
        return
      }
      b2n = this.controls.mSticky
      if (b2n) {
        if (Z2n) {
          b2n.style.display = 'inline-block'
          b2n.children[0].style.display = 'inline-block'
          if (V2n) {
            b2n.children[0].innerHTML = o2n
          }
          this.positionSticky(b2n)
        } else {
          b2n.style.display = 'none'
          b2n.children[0].innerHTML = ''
        }
      }
      this.runAppend(W8B, arguments)
    }
    Q9d.ChartEngine.prototype.clearMeasure = function() {
      var s8B, p2n
      s8B = 'mM'
      s8B += 'ea'
      s8B += 'sur'
      s8B += 'e'
      p2n = Y9d(s8B)
      if (p2n) {
        if (p2n.className != 'measureUnlit') {
          p2n.className = 'measureUnlit'
        }
        p2n.innerHTML = ''
      }
    }
    Q9d.ChartEngine.prototype.drawTemporaryPanel = function() {
      var Q8B, K2n, v2n
      Q8B = 'se'
      Q8B += 'gment'
      l4R.d4R(1)
      var s1B = l4R.i4R(20, 19)
      K2n = Math.round(Q9d.ChartEngine.resizingPanel.right - 3) + '0.5' * s1B
      Q9d.clearCanvas(this.chart.tempCanvas, this)
      v2n = Q9d.ChartEngine.crosshairY - this.top
      this.plotLine(
        Q9d.ChartEngine.resizingPanel.left,
        K2n,
        v2n,
        v2n,
        this.canvasStyle('stx_panel_drag'),
        Q8B,
        this.chart.tempCanvas.context,
        !{},
        {},
      )
      Q9d.ChartEngine.resizingPanel.handle.style.top =
        v2n - Q9d.ChartEngine.resizingPanel.handle.offsetHeight / 2 + 'px'
    }
    Q9d.ChartEngine.prototype.setTrashCan = function() {
      var k2n, h8B
      if (Q9d.touchDevice) {
        k2n = this.controls.mSticky
        if (k2n) {
          h8B = 'i'
          h8B += 'n'
          h8B += 'line-block'
          k2n.style.display = 'inline-block'
          k2n.children[0].style.display = 'none'
          k2n.children['1' * 1].style.display = h8B
          if (k2n.children[2]) {
            k2n.children['2' | 0].style.display = 'none'
          }
          l4R.w4R(12)
          var h1B = l4R.h4R(72, 5, 6)
          k2n.style.top = this.backOutY(Q9d.ChartEngine.crosshairY) - h1B + 'px'
          l4R.w4R(18)
          var S1B = l4R.h4R(12, 25, 250)
          k2n.style.right = this.chart.canvasWidth - (this.backOutX(Q9d.ChartEngine.crosshairX) - S1B) + 'px'
        }
      }
    }
    Q9d.ChartEngine.prototype.pixelFromBar = function(x2n, h2n) {
      var W2n
      if (!h2n) {
        h2n = this.chart
      }
      W2n = 0
      if (this.chart.dataSegment && this.chart.dataSegment[x2n] && this.chart.dataSegment[x2n].leftOffset) {
        W2n = this.chart.dataSegment[x2n].leftOffset
      } else {
        W2n = (x2n + 0.5) * this.layout.candleWidth
      }
      l4R.d4R(1)
      var b1B = l4R.h4R(15, 14)
      W2n = h2n.panel.left + Math.floor(W2n + this.micropixels) - b1B
      return W2n
    }
    Q9d.ChartEngine.prototype.barFromPixel = function(a2n, O2n) {
      var I2n, H2n, U2n, u2n, l2n, D2n, i2n, z2n, R2n, J2n, B2n, L2n, s2n
      if (!O2n) {
        O2n = this.chart
      }
      I2n = this.chart.dataSegment
      H2n = this.micropixels
      U2n = this.layout.candleWidth
      if (this.layout.chartType == 'volume_candle' && I2n) {
        u2n = a2n - O2n.panel.left - H2n
        l2n = 2
        i2n = I2n.length
        l4R.d4R(17)
        z2n = Math.round(l4R.h4R(i2n, l2n))
        l4R.w4R(24)
        var T1B = l4R.i4R(11, 17, 188)
        B2n = I2n[i2n - T1B].leftOffset + I2n[i2n - ('1' | 0)].candleWidth / +'2'
        if (u2n > B2n) {
          return i2n + Math.floor((a2n - B2n - O2n.panel.left - H2n) / U2n)
        } else {
          for (var A2n = 1; A2n < i2n; A2n++) {
            l2n *= 2
            D2n = I2n[z2n]
            if (!D2n) break
            R2n = D2n.leftOffset
            l4R.d4R(25)
            var E1B = l4R.i4R(20, 205, 11, 16, 9)
            J2n = D2n.candleWidth / E1B
            l4R.d4R(1)
            L2n = l4R.h4R(R2n, J2n)
            l4R.w4R(6)
            s2n = l4R.i4R(R2n, J2n)
            if (z2n === +'0' || (u2n >= L2n && u2n < s2n)) break
            else if (u2n < L2n) {
              z2n -= Math.max(1, Math.round(i2n / l2n))
            } else {
              z2n += Math.max(1, Math.round(i2n / l2n))
            }
            z2n = Math.max(0, Math.min(i2n - 1, z2n))
          }
          if (!I2n[z2n]) {
            for (A2n = 0; A2n < i2n; A2n++) {
              D2n = I2n[A2n]
              if (!D2n) continue
              R2n = D2n.leftOffset
              l4R.d4R(26)
              var x1B = l4R.i4R(15, 11, 28, 16, 18, 2)
              J2n = D2n.candleWidth / x1B
              if (u2n < R2n - J2n) {
                l4R.w4R(27)
                return Math.max(0, l4R.i4R(A2n, '1', 0))
              } else if (u2n < R2n + J2n) {
                return A2n
              } else if (u2n >= R2n + J2n) {
                l4R.d4R(6)
                return l4R.i4R(A2n, 1)
              }
            }
          }
        }
        return z2n
      } else {
        return Math.floor((a2n - O2n.panel.left - H2n) / U2n)
      }
    }
    Q9d.ChartEngine.prototype.tickFromPixel = function(F2n, m2n) {
      var d2n, o1w, U1w, O1w
      if (!m2n) {
        m2n = this.chart
      }
      l4R.w4R(1)
      var w1B = l4R.i4R(14, 13)
      d2n = m2n.dataSet.length - m2n.scroll + w1B
      if (this.layout.chartType == 'volume_candle') {
        d2n += this.barFromPixel(F2n, m2n)
      } else {
        o1w = +'390153025'
        U1w = -328829994
        O1w = 2
        for (var B1w = 1; l4R.l7w(B1w.toString(), B1w.toString().length, 71172) !== o1w; B1w++) {
          d2n *= Math.floor((F2n * m2n.panel.left) / this.micropixels - this.layout.candleWidth)
          O1w += 2
        }
        if (l4R.l7w(O1w.toString(), O1w.toString().length, 32773) !== U1w) {
          d2n += Math.floor((F2n - m2n.panel.left - this.micropixels) / this.layout.candleWidth)
        }
      }
      return d2n
    }
    Q9d.ChartEngine.prototype.pixelFromTick = function(Y9n, Q9n) {
      var S9n, C9n, G9n, X2n, j9n, f9n, t9n, w2n, M9n, q9n
      if (!Q9n) {
        Q9n = this.chart
      }
      S9n = Q9n.dataSegment
      C9n = Q9n.dataSet
      G9n = this.micropixels
      X2n = S9n ? S9n.length : 0
      j9n = Q9n.panel
      f9n = Q9n.scroll
      l4R.d4R(28)
      var V1B = l4R.i4R(7, 16, 150, 21, 5)
      t9n = Y9n - C9n.length + f9n - V1B
      w2n = X2n ? S9n[t9n] : null
      if (w2n && w2n.leftOffset) {
        return j9n.left + Math.floor(w2n.leftOffset + G9n) - 1
      } else {
        M9n = 0
        q9n = +'0'
        w2n = X2n ? S9n[X2n - 1] : null
        if (w2n && w2n.leftOffset) {
          if (X2n < Y9n - C9n.length + f9n) {
            M9n = w2n.leftOffset - w2n.candleWidth / +'2'
            q9n = X2n
          }
        }
        return (
          M9n + j9n.left + Math.floor((Y9n - q9n - C9n.length + f9n - ('0.5' - 0)) * this.layout.candleWidth + G9n) - 1
        )
      }
    }
    Q9d.ChartEngine.prototype.pixelFromDate = function(r9n, c9n) {
      return this.pixelFromTick(this.tickFromDate(r9n, c9n), c9n)
    }
    Q9d.ChartEngine.prototype.priceFromPixel = function(b9n, N9n, V9n) {
      var E9n, T9n, o9n, n9n
      if (!N9n) {
        N9n = this.chart.panel
      }
      E9n = N9n.chart
      T9n = V9n ? V9n : N9n.yAxis
      b9n = T9n.bottom - b9n
      if (!T9n.multiplier) {
        return null
      }
      o9n = T9n.low + b9n / T9n.multiplier
      if (T9n.semiLog) {
        n9n = T9n.logLow + (b9n * T9n.logShadow) / T9n.height
        o9n = Math.pow(10, n9n)
      }
      return o9n
    }
    Q9d.ChartEngine.prototype.valueFromPixel = function(g9n, e9n, P9n) {
      var Z9n
      if (!e9n) {
        e9n = this.whichPanel(g9n)
      }
      Z9n = this.priceFromPixel(g9n, e9n, P9n)
      return Z9n
    }
    Q9d.ChartEngine.prototype.valueFromPixelUntransform = function(v9n, y9n, K9n) {
      var p9n
      if (!y9n) {
        y9n = this.whichPanel(v9n)
      }
      if (!y9n) {
        if (v9n <= 0) {
          y9n = this.panels[Q9d.first(this.panels)]
        } else {
          y9n = this.panels[Q9d.last(this.panels)]
        }
      }
      p9n = this.priceFromPixel(v9n, y9n, K9n)
      if (y9n.chart.untransformFunc && y9n.name == y9n.chart.name) {
        p9n = y9n.chart.untransformFunc(this, y9n.chart, p9n)
      }
      return p9n
    }
    Q9d.ChartEngine.prototype.pixelFromPriceTransform = function(W9n, k9n, x9n) {
      if (k9n.chart.transformFunc) {
        W9n = k9n.chart.transformFunc(this, k9n.chart, W9n, x9n)
      }
      return this.pixelFromPrice(W9n, k9n, x9n)
    }
    Q9d.ChartEngine.prototype.pixelFromPrice = function(u9n, i9n, D9n) {
      var h9n, A9n, I9n, R9n, z9n
      if (!i9n) {
        i9n = this.chart.panel
      }
      h9n = D9n ? D9n : i9n.yAxis
      A9n = (h9n.high - u9n) * h9n.multiplier
      if (h9n.semiLog) {
        I9n = Math.max(u9n, 0)
        R9n = Math.log(I9n) / Math.LN10
        z9n = h9n.height
        A9n = z9n - (z9n * (R9n - h9n.logLow)) / h9n.logShadow
      }
      A9n += h9n.top
      return A9n
    }
    Q9d.ChartEngine.prototype.pixelFromValueAdjusted = function(J9n, B9n, O9n, H9n) {
      var l9n, L9n
      if (this.layout.adj || !this.charts[J9n.name]) {
        return this.pixelFromPriceTransform(O9n, J9n, H9n)
      }
      l9n = Math.round(B9n)
      if (l9n > 0 && l9n < J9n.chart.dataSet.length && (L9n = J9n.chart.dataSet[l9n].ratio)) {
        l4R.w4R(4)
        return this.pixelFromPriceTransform(l4R.h4R(O9n, L9n), J9n, H9n)
      }
      return this.pixelFromPriceTransform(O9n, J9n, H9n)
    }
    Q9d.ChartEngine.prototype.adjustIfNecessary = function(U9n, d9n, a9n) {
      var s9n, m9n
      if (this.layout.adj) {
        return a9n
      }
      if (!U9n || !this.charts[U9n.name]) {
        return a9n
      }
      s9n = Math.round(d9n)
      if (s9n > 0 && s9n < U9n.chart.dataSet.length && (m9n = U9n.chart.dataSet[s9n].ratio)) {
        l4R.d4R(17)
        return l4R.i4R(a9n, m9n)
      }
      return a9n
    }
    Q9d.ChartEngine.prototype.setTransform = function(F9n, w9n, X9n) {
      F9n.transformFunc = w9n
      F9n.untransformFunc = X9n
    }
    Q9d.ChartEngine.prototype.unsetTransform = function(Q3n) {
      delete Q3n.transformFunc
      delete Q3n.untransformFunc
      for (var S3n = 0; S3n < Q3n.dataSet.length; S3n++) {
        Q3n.dataSet[S3n].transform = null
      }
    }
    Q9d.ChartEngine.prototype.undo = function() {
      var b8B, S8B
      if (this.runPrepend('undo', arguments)) {
        return
      }
      if (this.activeDrawing) {
        b8B = 'stx_crosshair_dr'
        b8B += 'awing'
        S8B = 'stx'
        S8B += '_cros'
        S8B += 'shair'
        this.activeDrawing.abort()
        this.activeDrawing = null
        Q9d.clearCanvas(this.chart.tempCanvas, this)
        this.draw()
        Q9d.swapClassName(this.controls.crossX, S8B, b8B)
        Q9d.swapClassName(this.controls.crossY, 'stx_crosshair', 'stx_crosshair_drawing')
        Q9d.ChartEngine.drawingLine = !!0
      }
      this.runAppend('undo', arguments)
    }
    Q9d.ChartEngine.prototype.undoStamp = function(C3n, f3n) {
      this.undoStamps.push(C3n)
      this.dispatch('undoStamp', { before: C3n, after: f3n })
    }
    Q9d.ChartEngine.prototype.undoLast = function() {
      if (this.activeDrawing) {
        this.undo()
      } else {
        if (this.undoStamps.length) {
          this.drawingObjects = this.undoStamps.pop()
          this.changeOccurred('vector')
          this.draw()
        }
      }
    }
    Q9d.ChartEngine.prototype.addDrawing = function(j3n) {
      var Y3n
      Y3n = Q9d.shallowClone(this.drawingObjects)
      this.drawingObjects.push(j3n)
      this.undoStamp(Y3n, Q9d.shallowClone(this.drawingObjects))
    }
    Q9d.ChartEngine.prototype.connectTheDots = function(E3n, t3n, z3n, q3n, P3n, G3n) {
      var T8B, K3n, k3n, i3n, A3n, M3n, E8B, b3n, r3n, W3n, y3n, V3n, n3n, g3n, Z3n, c3n, e3n, o3n, h3n, x3n, p3n, v3n
      T8B = 'ob'
      T8B += 'j'
      T8B += 'ect'
      if (!G3n) {
        G3n = {}
      }
      if (G3n.pattern == 'none') {
        return
      }
      if (P3n === !!'1') {
        P3n = this.chart.panel
      }
      if (q3n === null || typeof q3n == 'undefined') {
        q3n = this.chart.context
      }
      if (E3n.length < 4) {
        return
      }
      K3n = 0
      k3n = this.chart.canvasHeight
      i3n = 0
      A3n = this.chart.width
      if (P3n) {
        k3n = P3n.yAxis.bottom
        K3n = P3n.yAxis.top
      }
      q3n.lineWidth = 1.1
      if (typeof t3n == T8B) {
        q3n.strokeStyle = t3n.color
        if (t3n.opacity) {
          q3n.globalAlpha = t3n.opacity
        } else {
          q3n.globalAlpha = 1
        }
        q3n.lineWidth = parseInt(Q9d.stripPX(t3n.width))
      } else {
        if (!t3n || t3n == 'auto' || Q9d.isTransparent(t3n)) {
          q3n.strokeStyle = this.defaultColor
        } else {
          q3n.strokeStyle = t3n
        }
      }
      if (G3n.opacity) {
        q3n.globalAlpha = G3n.opacity
      }
      if (G3n.lineWidth) {
        q3n.lineWidth = G3n.lineWidth
      }
      M3n = null
      if (G3n.pattern) {
        E8B = 'd'
        E8B += 'otted'
        M3n = G3n.pattern
        if (M3n == 'solid') {
          M3n = null
        } else if (M3n == E8B) {
          M3n = [q3n.lineWidth, q3n.lineWidth]
        } else if (M3n == 'dashed') {
          l4R.d4R(29)
          var r1B = l4R.i4R(3, 24, 5, 15)
          M3n = [q3n.lineWidth * r1B, q3n.lineWidth * ('5' * 1)]
        }
      }
      q3n.beginPath()
      for (var T3n = 0; T3n < E3n.length - 2; T3n += 2) {
        b3n = E3n[T3n]
        l4R.w4R(6)
        r3n = E3n[l4R.i4R(T3n, 1)]
        l4R.d4R(6)
        W3n = E3n[l4R.h4R(T3n, 2)]
        l4R.w4R(30)
        y3n = E3n[l4R.h4R('3', 0, T3n)]
        if (isNaN(b3n) || isNaN(W3n) || isNaN(r3n) || isNaN(y3n)) {
          return
        }
        V3n = 0.0
        n3n = 1.0
        l4R.d4R(1)
        g3n = l4R.i4R(W3n, b3n)
        l4R.w4R(1)
        Z3n = l4R.h4R(y3n, r3n)
        for (var N3n = 0; N3n < 4; N3n++) {
          if (N3n === 0) {
            c3n = -g3n
            l4R.d4R(1)
            e3n = -l4R.h4R(i3n, b3n)
          }
          if (N3n == 1) {
            c3n = g3n
            l4R.w4R(1)
            e3n = l4R.i4R(A3n, b3n)
          }
          if (N3n == 2) {
            c3n = -Z3n
            l4R.d4R(1)
            e3n = -l4R.i4R(K3n, r3n)
          }
          if (N3n == 3) {
            c3n = Z3n
            l4R.d4R(1)
            e3n = l4R.h4R(k3n, r3n)
          }
          l4R.d4R(17)
          o3n = l4R.h4R(e3n, c3n)
          if ((y3n || y3n === 0) && c3n === 0 && e3n < 0) {
            return ![]
          }
          if (c3n < 0) {
            if (o3n > n3n) {
              return !'1'
            } else if (o3n > V3n) {
              V3n = o3n
            }
          } else if (c3n > 0) {
            if (o3n < V3n) {
              return !{}
            } else if (o3n < n3n) {
              n3n = o3n
            }
          }
        }
        l4R.d4R(31)
        h3n = l4R.h4R(g3n, V3n, b3n)
        l4R.d4R(31)
        x3n = l4R.i4R(Z3n, V3n, r3n)
        l4R.d4R(31)
        p3n = l4R.h4R(g3n, n3n, b3n)
        l4R.w4R(31)
        v3n = l4R.h4R(Z3n, n3n, r3n)
        try {
          if (M3n) {
            q3n.dashedLineTo(h3n, x3n, p3n, v3n, M3n)
          } else {
            q3n.moveTo(h3n, x3n)
            q3n.lineTo(p3n, v3n)
          }
        } catch (u3n) {}
      }
      q3n.stroke()
      q3n.closePath()
      q3n.globalAlpha = 1
      q3n.lineWidth = 1
    }
    Q9d.ChartEngine.prototype.plotSpline = function(l3n, H3n, R3n, L3n, D3n, O3n, J3n) {
      var I3n
      if (!J3n) {
        J3n = {}
      }
      if (J3n.pattern == 'none') {
        return
      }
      if (O3n === !'') {
        O3n = this.chart.panel
      }
      if (D3n === null || typeof D3n == 'undefined') {
        D3n = this.chart.context
      }
      D3n.save()
      D3n.lineWidth = 1.1
      if (typeof R3n == 'object') {
        D3n.strokeStyle = R3n.color
        if (R3n.opacity) {
          D3n.globalAlpha = R3n.opacity
        } else {
          D3n.globalAlpha = +'1'
        }
        D3n.lineWidth = parseInt(Q9d.stripPX(R3n.width))
      } else {
        if (!R3n || R3n == 'auto' || Q9d.isTransparent(R3n)) {
          D3n.strokeStyle = this.defaultColor
        } else {
          D3n.strokeStyle = R3n
        }
      }
      if (J3n.opacity) {
        D3n.globalAlpha = J3n.opacity
      }
      if (J3n.lineWidth) {
        D3n.lineWidth = J3n.lineWidth
      }
      I3n = null
      if (J3n.pattern) {
        I3n = J3n.pattern
        if (I3n == 'solid') {
          I3n = null
        } else if (I3n == 'dotted') {
          I3n = [D3n.lineWidth, D3n.lineWidth]
        } else if (I3n == 'dashed') {
          I3n = [D3n.lineWidth * +'5', D3n.lineWidth * 5]
        }
      }
      if (I3n && D3n.setLineDash) {
        D3n.setLineDash(I3n)
        l4R.w4R(4)
        D3n.lineDashOffset = l4R.h4R('0', 1)
      }
      D3n.beginPath()
      D3n.moveTo(l3n[+'0'], l3n[1])
      plotSpline(l3n, H3n, D3n)
      D3n.stroke()
      D3n.closePath()
      D3n.restore()
    }
    Q9d.ChartEngine.prototype.drawingClick = function(a3n, F3n, w3n) {
      var U3n, B3n, s3n, m3n, d3n, x8B
      if (!Q9d.Drawing) {
        return
      }
      if (!this.activeDrawing) {
        if (!a3n) {
          return
        }
        U3n = this.currentVectorParameters.vectorType
        B3n = Q9d.ChartEngine.drawingTools[U3n]
        if (!B3n) {
          if (Q9d.Drawing[U3n]) {
            B3n = Q9d.Drawing[U3n]
            Q9d.ChartEngine.registerDrawingTool(U3n, B3n)
          }
        }
        if (B3n) {
          this.activeDrawing = new B3n()
          this.activeDrawing.construct(this, a3n)
          if (!this.charts[a3n.name]) {
            if (this.activeDrawing.chartsOnly) {
              this.activeDrawing = null
              return
            }
          }
        }
      }
      if (this.activeDrawing) {
        if (this.userPointerDown && !this.activeDrawing.dragToDraw) {
          if (!Q9d.ChartEngine.drawingLine) {
            this.activeDrawing = null
          }
          return
        }
        s3n = this.tickFromPixel(F3n, a3n.chart)
        m3n = this.panels[this.activeDrawing.panelName]
        d3n = this.adjustIfNecessary(m3n, s3n, this.valueFromPixelUntransform(w3n, m3n))
        if (this.preferences.magnet && this.magnetizedPrice) {
          d3n = this.adjustIfNecessary(m3n, s3n, this.magnetizedPrice)
        }
        if (this.activeDrawing.click(this.chart.tempCanvas.context, s3n, d3n)) {
          if (this.activeDrawing) {
            Q9d.ChartEngine.drawingLine = ![]
            Q9d.clearCanvas(this.chart.tempCanvas, this)
            this.addDrawing(this.activeDrawing)
            this.activeDrawing = null
            this.adjustDrawings()
            this.draw()
            this.changeOccurred('vector')
            Q9d.swapClassName(this.controls.crossX, 'stx_crosshair', 'stx_crosshair_drawing')
            Q9d.swapClassName(this.controls.crossY, 'stx_crosshair', 'stx_crosshair_drawing')
          }
        } else {
          x8B = 'stx_crosshair'
          x8B += '_drawing'
          this.changeOccurred('drawing')
          Q9d.ChartEngine.drawingLine = !0
          Q9d.swapClassName(this.controls.crossX, 'stx_crosshair_drawing', 'stx_crosshair')
          Q9d.swapClassName(this.controls.crossY, x8B, 'stx_crosshair')
        }
        return !!{}
      }
      return !'1'
    }
    Q9d.ChartEngine.prototype.whichPanel = function(Q7n) {
      var X3n
      for (var S7n in this.panels) {
        X3n = this.panels[S7n]
        if (X3n.hidden) continue
        if (Q7n > X3n.top && Q7n < X3n.bottom) {
          return X3n
        }
      }
      return null
    }
    Q9d.ChartEngine.prototype.mouseup = function(C7n) {
      var V8B, w8B, Q3w, h3w, S3w, j7n, j1w, K1w, H1w, f7n, Y7n
      V8B = 'mouseu'
      V8B += 'p'
      w8B = 'stx-'
      w8B += 'd'
      w8B += 'rag-c'
      w8B += 'hart'
      if (this.runPrepend('mouseup', arguments)) {
        return
      }
      this.swipe.end = !0
      this.cancelLongHold = !''
      if (this.repositioningDrawing) {
        if (!this.currentVectorParameters.vectorType || Date.now() - this.mouseTimer > 250) {
          this.changeOccurred('vector')
          Q9d.clearCanvas(this.chart.tempCanvas, this)
          Q3w = -894640401
          h3w = 1208757623
          S3w = 2
          for (var T3w = 1; l4R.l7w(T3w.toString(), T3w.toString().length, 74070) !== Q3w; T3w++) {
            this.repositioningDrawing = null
            this.adjustDrawings()
            this.draw()
            S3w += 2
          }
          if (l4R.l7w(S3w.toString(), S3w.toString().length, 88809) !== h3w) {
            this.repositioningDrawing = +'1'
            this.adjustDrawings()
            this.draw()
          }
          return
        } else {
          this.repositioningDrawing = !{}
        }
      }
      if (this.repositioningBaseline) {
        this.repositioningBaseline = null
        l4R.d4R(32)
        var u1B = l4R.i4R(20, 40, 737, 19, 12)
        this.chart.panel.yAxis.scroll =
          this.pixelFromPriceTransform(this.chart.baseline.userLevel, this.chart.panel) -
          (this.chart.panel.yAxis.top + this.chart.panel.yAxis.bottom) / u1B
        this.draw()
        return
      }
      j7n = this.userPointerDown
      this.userPointerDown = !!''
      if (!this.displayInitialized) {
        return
      }
      this.grabbingScreen = !{}
      if (this.openDialog !== '') {
        if (Q9d.ChartEngine.insideChart) {
          Q9d.unappendClassName(this.container, 'stx-drag-chart')
        }
        return
      }
      if (this.grabOverrideClick) {
        this.swipeRelease()
        Q9d.unappendClassName(this.container, 'stx-drag-chart')
        this.grabOverrideClick = ![]
        this.doDisplayCrosshairs()
        this.updateChartAccessories()
        return
      }
      if (Q9d.ChartEngine.insideChart) {
        Q9d.unappendClassName(this.container, w8B)
      }
      if (Q9d.ChartEngine.resizingPanel) {
        this.releaseHandle({})
        return
      }
      if (!C7n) {
        C7n = event
      }
      if ((C7n.which && C7n.which >= 2) || (C7n.button && C7n.button >= 2) || C7n.ctrlKey) {
        if (this.anyHighlighted && !this.bypassRightClick) {
          this.rightClickHighlighted()
          if (C7n.preventDefault && this.captureTouchEvents) {
            C7n.preventDefault()
          }
          C7n.stopPropagation()
          j1w = -1826932644
          K1w = +'75174961'
          H1w = 2
          for (var R6w = 1; l4R.f7w(R6w.toString(), R6w.toString().length, 69995) !== j1w; R6w++) {
            return !!{}
          }
          if (l4R.f7w(H1w.toString(), H1w.toString().length, 61030) !== K1w) {
            return ![]
          }
          return !{}
        } else {
          this.dispatch('rightClick', { stx: this, panel: this.currentPanel, x: Y7n, y: f7n })
          return !!'1'
        }
      }
      if (C7n.clientX < this.left || C7n.clientX > this.right) {
        return
      }
      if (C7n.clientY < this.top || C7n.clientY > this.bottom) {
        return
      }
      f7n = this.backOutY(C7n.clientY)
      Y7n = this.backOutX(C7n.clientX)
      if (j7n && (!this.longHoldTookEffect || this.activeDrawing)) {
        this.drawingClick(this.currentPanel, Y7n, f7n)
      }
      if (!this.activeDrawing && !this.longHoldTookEffect) {
        this.dispatch('tap', { stx: this, panel: this.currentPanel, x: Y7n, y: f7n })
      }
      this.runAppend(V8B, arguments)
    }
    Q9d.ChartEngine.prototype.grabbingHand = function() {
      if (!this.allowScroll) {
        return
      }
      if (!this.grabbingScreen) {
        return
      }
      if (Q9d.touchDevice) {
        return
      }
      Q9d.appendClassName(this.container, 'stx-drag-chart')
    }
    Q9d.ChartEngine.prototype.mousedown = function(q7n) {
      var M7n, G7n, r7n, t7n, T7n, b7n, N7n
      if (this.runPrepend('mousedown', arguments)) {
        return
      }
      this.grabOverrideClick = !!''
      if (this.openDialog !== '') {
        return
      }
      if (!this.displayInitialized) {
        return
      }
      if (!this.displayCrosshairs) {
        return
      }
      if (!Q9d.ChartEngine.insideChart) {
        return
      }
      if (this.manageTouchAndMouse && q7n && q7n.preventDefault && this.captureTouchEvents) {
        q7n.preventDefault()
      }
      this.mouseTimer = Date.now()
      this.longHoldTookEffect = !{}
      this.hasDragged = !!0
      this.userPointerDown = !''
      if (!q7n) {
        q7n = event
      }
      if ((q7n.which && q7n.which >= 2) || (q7n.button && q7n.button >= 2)) {
        return
      }
      M7n = this.currentPanel.chart
      if (
        q7n.clientX >= this.left &&
        q7n.clientX < this.right &&
        q7n.clientY >= this.top &&
        q7n.clientY <= this.bottom
      ) {
        if (this.repositioningDrawing) {
          return
        }
        for (var c7n = 0; c7n < this.drawingObjects.length; c7n++) {
          G7n = this.drawingObjects[c7n]
          if (G7n.highlighted) {
            if (this.cloneDrawing) {
              r7n = Q9d.ChartEngine.drawingTools[G7n.name]
              t7n = new r7n()
              t7n.reconstruct(this, G7n.serialize())
              this.drawingObjects.push(t7n)
              this.repositioningDrawing = t7n
              t7n.repositioner = G7n.repositioner
              return
            }
            this.repositioningDrawing = G7n
            return
          }
        }
        if (
          (this.layout.chartType == 'baseline_delta' || this.layout.chartType == 'baseline_delta_mountain') &&
          M7n.baseline.userLevel !== !!0
        ) {
          T7n = this.valueFromPixelUntransform(this.cy - 5, this.currentPanel)
          b7n = this.valueFromPixelUntransform(this.cy + ('5' - 0), this.currentPanel)
          l4R.w4R(1)
          var C1B = l4R.h4R(16, 6)
          N7n = this.chart.right - parseInt(getComputedStyle(this.controls.baselineHandle).width, C1B)
          if (M7n.baseline.actualLevel < T7n && M7n.baseline.actualLevel > b7n && this.cx > N7n) {
            this.repositioningBaseline = { lastDraw: Date.now() }
            return
          }
        }
        this.drawingClick(this.currentPanel, this.cx, this.cy)
        if (this.activeDrawing && this.activeDrawing.dragToDraw) {
          return
        }
      }
      this.grabbingScreen = !!1
      M7n.spanLock = ![]
      this.yToleranceBroken = ![]
      if (!q7n) {
        q7n = event
      }
      this.grabStartX = q7n.clientX
      this.grabStartY = q7n.clientY
      this.grabStartMicropixels = this.micropixels
      this.grabStartScrollX = M7n.scroll
      this.grabStartScrollY = M7n.panel.yAxis.scroll
      this.grabStartCandleWidth = this.layout.candleWidth
      this.grabStartZoom = this.whichYAxis(this.currentPanel).zoom
      setTimeout(
        (function(o7n) {
          return function() {
            o7n.grabbingHand()
          }
        })(this),
        100,
      )
      this.swipeStart(M7n)
      if (this.longHoldTime) {
        this.startLongHoldTimer()
      }
      this.runAppend('mousedown', arguments)
    }
    Q9d.ChartEngine.prototype.startLongHoldTimer = function() {
      var V7n, q7w, N7w, g7w
      V7n = this
      this.cancelLongHold = ![]
      q7w = 1087930637
      N7w = -830888581
      g7w = +'2'
      for (var o7w = 1; l4R.f7w(o7w.toString(), o7w.toString().length, 93915) !== q7w; o7w++) {
        if (this.longHoldTimeout) {
          clearTimeout(this.longHoldTimeout)
        }
        g7w += 2
      }
      if (l4R.l7w(g7w.toString(), g7w.toString().length, 93514) !== N7w) {
        if (this.longHoldTimeout) {
          clearTimeout(this.longHoldTimeout)
        }
      }
      this.longHoldTimeout = setTimeout(function() {
        var d3w, t3w, P3w
        if (V7n.cancelLongHold) {
          return
        }
        V7n.dispatch('longhold', { stx: V7n, panel: V7n.currentPanel, x: V7n.cx, y: V7n.cy })
        d3w = -1942031497
        t3w = -1926535481
        P3w = 2
        for (var m3w = 1; l4R.l7w(m3w.toString(), m3w.toString().length, 51496) !== d3w; m3w++) {
          V7n.longHoldTookEffect = !0
          P3w += 2
        }
        if (l4R.l7w(P3w.toString(), P3w.toString().length, 3288) !== t3w) {
          V7n.longHoldTookEffect = !'1'
        }
      }, this.longHoldTime)
    }
    Q9d.ChartEngine.prototype.changeVectorType = function(n7n) {
      this.currentVectorParameters.vectorType = n7n
      if (Q9d.ChartEngine.drawingLine) {
        this.undo()
      }
      this.setCrosshairColors()
      if (Q9d.ChartEngine.insideChart) {
        this.doDisplayCrosshairs()
      }
    }
    Q9d.ChartEngine.prototype.rightClickOverlay = function(e7n, g7n) {
      var F8B, E7n
      F8B = 'r'
      F8B += 'ightClickOve'
      F8B += 'rlay'
      if (this.runPrepend('rightClickOverlay', arguments)) {
        return
      }
      E7n = this.overlays[e7n]
      if (E7n.editFunction) {
        E7n.editFunction(g7n)
      } else {
        this.removeOverlay(e7n)
      }
      this.runAppend(F8B, arguments)
    }
    Q9d.ChartEngine.prototype.removeOverlay = function(P7n) {
      var z8B, y7n, Z7n, v7n
      z8B = 're'
      z8B += 'moveOverlay'
      if (this.runPrepend('removeOverlay', arguments)) {
        return
      }
      for (var p7n in this.overlays) {
        Z7n = this.overlays[p7n]
        if (Z7n.inputs.Field && Z7n.inputs.Field.indexOf(P7n) != -1) {
          this.removeOverlay(Z7n.name)
        } else if (Z7n.name == P7n) {
          y7n = Z7n
        }
      }
      if (Q9d.Studies) {
        v7n = this.layout.studies[P7n]
        Q9d.deleteRHS(Q9d.Studies.studyPanelMap, v7n)
        if (y7n) {
          this.cleanupRemovedStudy(y7n)
        }
      }
      delete this.overlays[P7n]
      this.displaySticky()
      this.createDataSet()
      this.changeOccurred('layout')
      this.runAppend(z8B, arguments)
    }
    Q9d.ChartEngine.prototype.addSeries = function(W7n, K7n, i7n) {
      var n8B, r8B, k7n, A7n, x7n, u7n, D7n, h7n, i3w, Z3w, q3w, y8B
      n8B = 'l'
      n8B += 'i'
      n8B += 'n'
      n8B += 'e'
      r8B = 'addSe'
      r8B += 'r'
      r8B += 'ie'
      r8B += 's'
      function z7n(H7n) {
        var L7n, O7n, J7n, l7n, X8B, u8B
        l4R.w4R(2)
        L7n = l4R.h4R(0, '0')
        O7n = 0
        while (K7n.data && L7n < H7n.masterData.length && O7n < K7n.data.length) {
          J7n = K7n.data[O7n]
          l7n = H7n.masterData[L7n]
          if (!J7n.DT || typeof J7n.DT == 'undefined') {
            J7n.DT = Q9d.strToDateTime(J7n.Date)
          } else {
            J7n.DT = new Date(J7n.DT)
          }
          if (J7n.DT.getTime() == l7n.DT.getTime()) {
            X8B = 'u'
            X8B += 'nd'
            X8B += 'efined'
            if (typeof J7n.Value != 'undefined') {
              l7n[W7n] = J7n.Value
            } else if (H7n.layout.adj && typeof J7n.Adj_Close != X8B) {
              l7n[W7n] = J7n.Adj_Close
            } else {
              l7n[W7n] = J7n.Close
            }
            O7n++
            L7n++
            continue
          }
          if (J7n.DT < l7n.DT) {
            if (K7n.forceData) {
              H7n.masterData.splice(L7n, 0, { DT: J7n.DT })
              continue
            }
            O7n++
          } else {
            L7n++
          }
        }
        if (K7n.forceData && L7n >= H7n.masterData.length) {
          while (K7n.data && O7n < K7n.data.length) {
            u8B = 'u'
            u8B += 'ndefine'
            u8B += 'd'
            J7n = K7n.data[O7n]
            if (!J7n.DT || typeof J7n.DT == u8B) {
              J7n.DT = Q9d.strToDateTime(J7n.Date)
            }
            l7n = { DT: J7n.DT }
            if (typeof J7n.Value != 'undefined') {
              l7n[W7n] = J7n.Value
            } else if (H7n.layout.adj && typeof J7n.Adj_Close != 'undefined') {
              l7n[W7n] = J7n.Adj_Close
            } else {
              l7n[W7n] = J7n.Close
            }
            H7n.masterData.push(l7n)
            O7n++
          }
        }
      }
      if (this.runPrepend(r8B, arguments)) {
        return
      }
      if (!K7n) {
        K7n = {}
      }
      if (!K7n.chartName) {
        K7n.chartName = this.chart.name
      }
      if (!K7n.symbolObject) {
        K7n.symbolObject = { symbol: W7n }
      }
      k7n = { parameters: Q9d.clone(K7n), yValueCache: [], display: W7n }
      if ('display' in k7n.parameters) {
        k7n.display = k7n.parameters.display
      }
      if (k7n.parameters.isComparison) {
        k7n.parameters.shareYAxis = !!{}
      }
      if (!k7n.parameters.chartType && k7n.parameters.color) {
        k7n.parameters.chartType = n8B
      }
      if (k7n.parameters.chartType && k7n.parameters.chartType != 'mountain') {
        k7n.parameters.chartType = 'line'
      }
      if (!k7n.parameters.panel) {
        k7n.parameters.panel = this.chart.panel.name
      }
      function R7n(s7n) {
        return function(m7n) {
          var l8B
          l8B = 'a'
          l8B += 'dd'
          l8B += '-serie'
          l8B += 's'
          if (!m7n.error && m7n.error !== 0) {
            K7n.data = m7n.quotes
            z7n(x7n)
            I7n(x7n, k7n)
          }
          if (!x7n.currentlyImporting) {
            x7n.dispatch('symbolChange', { stx: x7n, symbol: s7n.symbol, symbolObject: s7n.symbolObject, action: l8B })
          }
          if (i7n) {
            i7n(m7n.error, k7n)
          }
          x7n.runAppend('addSeries', arguments)
        }
      }
      A7n = this.charts[K7n.chartName]
      x7n = this
      if (A7n) {
        A7n.series[W7n] = k7n
      }
      function I7n(a7n, U7n) {
        var B7n, C8B, u6w, C6w, f6w, f8B
        if (U7n.parameters.color) {
          B7n = a7n.getSeriesRenderer('_generic_series')
          if (!B7n) {
            if (!Q9d.Renderer.Lines) {
              C8B = 'ChartIQ: stxLib'
              C8B += 'rary.j'
              C8B += 's is required'
              alert(C8B)
            }
            u6w = 1987897405
            C6w = 1957119373
            f6w = 2
            for (var y6w = 1; l4R.f7w(y6w.toString(), y6w.toString().length, 59244) !== u6w; y6w++) {
              B7n = a7n.setSeriesRenderer(
                new Q9d.Renderer.Lines({
                  params: { panel: U7n.parameters.panel, type: 'legacy', name: '_generic_series', overChart: !!'1' },
                }),
              )
              f6w += 2
            }
            if (l4R.l7w(f6w.toString(), f6w.toString().length, 65462) !== C6w) {
              f8B = '_gen'
              f8B += 'eric_series'
              B7n = a7n.setSeriesRenderer(
                new Q9d.Renderer.Lines({
                  params: { panel: U7n.parameters.panel, type: '_generic_series', name: f8B, overChart: ![] },
                }),
              )
            }
          }
          B7n.attachSeries(W7n, U7n.parameters).ready()
        }
      }
      if (K7n.isComparison) {
        x7n.setComparison(!!{}, A7n)
      }
      u7n = ![]
      if (K7n.data && !K7n.data.useDefaultQuoteFeed) {
        if (this.masterData) {
          z7n(this)
        }
      } else {
        if (this.masterData && this.chart.masterData[this.chart.masterData.length - 1][W7n]) {
          k7n.addSeriesData = z7n
        } else if (this.quoteDriver) {
          D7n = this.quoteDriver
          h7n = D7n.makeParams(W7n, K7n.symbolObject, this.chart)
          if (this.chart.masterData) {
            if (this.chart.masterData['0' | 0]) {
              h7n.startDate = this.chart.masterData[+'0'].DT
            }
            if (this.chart.masterData[this.chart.masterData.length - 1]) {
              h7n.endDate = this.chart.masterData[this.chart.masterData.length - 1].DT
            }
          }
          i3w = 959337377
          Z3w = 1139525068
          q3w = 2
          for (var g3w = 1; l4R.l7w(g3w.toString(), g3w.toString().length, 40969) !== i3w; g3w++) {
            u7n = !!1
            l4R.d4R(2)
            q3w += l4R.i4R(0, '2')
          }
          if (l4R.l7w(q3w.toString(), q3w.toString().length, +'39470') !== Z3w) {
            u7n = !{}
          }
          if (h7n.stx.isEquationChart(h7n.symbol)) {
            Q9d.fetchEquationChart(h7n, R7n(h7n))
          } else {
            Q9d.ChartEngine.Driver.fetchData(Q9d.QuoteFeed.SERIES, D7n.quoteFeed, h7n, R7n(h7n))
          }
        }
      }
      if (!u7n) {
        y8B = 'a'
        y8B += 'ddS'
        y8B += 'e'
        y8B += 'ries'
        I7n(x7n, k7n)
        if (i7n) {
          i7n(null, k7n)
        }
        this.runAppend(y8B, arguments)
      }
      return k7n
    }
    Q9d.ChartEngine.prototype.isEquationChart = function(d7n) {
      if (!this.allowEquations || !Q9d.computeEquationChart) {
        return !{}
      }
      if (
        d7n &&
        d7n[0] ==
          ((1947, 679.54) != 7580
            ? 2750 == 418
              ? (3155, +'6633') >= 7000
                ? (7.66e3, 'x')
                : (!!{}, ![])
              : '='
            : 0xb14)
      ) {
        return !![]
      }
      return ![]
    }
    Q9d.ChartEngine.prototype.deleteSeries = function(w7n, F7n) {
      if (this.runPrepend('deleteSeries', arguments)) {
        return
      }
      if (!F7n) {
        F7n = this.chart
      }
      delete F7n.series[w7n]
      if (this.quoteDriver) {
        this.quoteDriver.updateSubscriptions()
      }
      this.runAppend('deleteSeries', arguments)
    }
    Q9d.ChartEngine.prototype.removeSeries = function(Q51, X7n) {
      var j51, S51, f51, Y51
      if (this.runPrepend('removeSeries', arguments)) {
        return
      }
      if (!X7n) {
        X7n = this.chart
      }
      for (var q51 in X7n.seriesRenderers) {
        S51 = X7n.seriesRenderers[q51]
        for (var C51 = S51.seriesParams.length - 1; C51 >= 0; C51--) {
          f51 = S51.seriesParams[C51]
          if (!f51.permanent && f51.field === Q51) {
            j51 = f51.symbolObject
            S51.removeSeries(Q51)
          }
        }
      }
      this.deleteSeries(Q51, X7n)
      Y51 = !!''
      for (var M51 in X7n.series) {
        if (X7n.series[M51].parameters.isComparison) {
          Y51 = !0
        }
      }
      if (!Y51) {
        this.setComparison(!!0, X7n)
      }
      this.createDataSet()
      this.draw()
      this.dispatch('symbolChange', { stx: this, symbol: Q51, symbolObject: j51, action: 'remove-series' })
      this.runAppend('removeSeries', arguments)
    }
    Q9d.ChartEngine.prototype.isDailyInterval = function(G51) {
      var i8B, I8B
      i8B = 'm'
      i8B += 'o'
      i8B += 'nt'
      i8B += 'h'
      I8B = 'w'
      I8B += 'e'
      I8B += 'e'
      I8B += 'k'
      if (G51 == 'day') {
        return !0
      }
      if (G51 == I8B) {
        return !''
      }
      if (G51 == i8B) {
        return !!{}
      }
      return !!0
    }
    Q9d.ChartEngine.prototype.setPeriodicityV2 = function(E51, V51, c51, T51) {
      var q8B,
        Z8B,
        u51,
        r51,
        k51,
        I6w,
        i6w,
        Z6w,
        A51,
        h51,
        P51,
        v51,
        t51,
        o51,
        g51,
        y51,
        x51,
        N51,
        K51,
        W51,
        b51,
        Z51,
        p51,
        i51,
        z51
      q8B = 'tic'
      q8B += 'k'
      Z8B = 'y'
      Z8B += 'ea'
      Z8B += 'r'
      if (this.runPrepend('setPeriodicityV2', arguments)) {
        return
      }
      if (typeof c51 === 'function') {
        T51 = c51
        c51 = null
      }
      u51 = !!0
      if (!V51) {
        return
      }
      if (!E51) {
        return
      }
      r51 = this.layout
      k51 = r51.candleWidth
      delete r51.setSpan
      if (V51 == Z8B) {
        I6w = -468139533
        i6w = 1968575188
        Z6w = 2
        for (var N6w = 1; l4R.l7w(N6w.toString(), N6w.toString().length, 62364) !== I6w; N6w++) {
          V51 = 'month'
          if (!E51) {
            E51 = 1
          }
          l4R.w4R(4)
          E51 = l4R.i4R(E51, 12)
          Z6w += 2
        }
        if (l4R.f7w(Z6w.toString(), Z6w.toString().length, 24480) !== i6w) {
          V51 = ''
          if (~E51) {
            E51 = 2
          }
          l4R.w4R(33)
          E51 = l4R.h4R(86, E51)
        }
      }
      A51 = this.isDailyInterval(V51)
      h51 = this.isDailyInterval(r51.interval)
      if (A51) {
        c51 = null
      } else if (V51 == q8B) {
        c51 = null
      } else if (!c51) {
        c51 = 'minute'
      }
      P51 = ![]
      if (this.chart.symbol) {
        if (this.dontRoll || !h51) {
          if (r51.interval != V51) {
            P51 = !!{}
          }
        } else {
          if (A51 != h51) {
            P51 = !!{}
          }
        }
        if (c51 != r51.timeUnit) {
          P51 = !![]
        }
      }
      r51.periodicity = E51
      r51.interval = V51
      r51.timeUnit = c51
      if (P51) {
        this.changeOccurred('layout')
        if (this.quoteDriver) {
          for (var n51 in this.charts) {
            if (this.charts[n51].symbol) {
              if (this.displayInitialized) {
                this.quoteDriver.newChart(
                  {
                    symbol: this.charts[n51].symbol,
                    symbolObject: this.charts[n51].symbolObject,
                    chart: this.charts[n51],
                  },
                  T51,
                )
              } else {
                this.newChart(this.charts[n51].symbol, null, this.charts[n51], T51)
              }
            }
          }
          return
        } else if (this.dataCallback) {
          this.dataCallback()
          if (T51) {
            T51(null)
          }
          return
        } else {
          console.log('cannot change periodicity because neither dataCallback or quoteDriver are set')
          return
        }
      }
      for (v51 in this.charts) {
        t51 = this.charts[v51]
        o51 = t51.dataSegment
        g51 = t51.dataSet
        y51 = t51.maxTicks
        x51 = t51.scroll
        N51 = o51 ? o51.length : '0' | 0
        K51 = g51 ? g51.length : 0
        b51 = Math.round(t51.maxTicks / 2)
        this.setCandleWidth(k51, t51)
        Z51 = !![]
        p51 = !1
        if (x51 <= y51) {
          Z51 = !!0
        } else if (o51 && !o51[b51]) {
          Z51 = !1
          l4R.w4R(1)
          p51 = l4R.h4R(x51, K51)
        }
        if (Z51 && N51 > '0' - 0) {
          if (y51 < (Math.round(this.chart.width / k51 - 0.499) - 1) / 2) {
            l4R.d4R(34)
            b51 = l4R.i4R('1', N51)
          }
          if (b51 >= N51) {
            W51 = o51[N51 - 1].DT
            l4R.w4R(1)
            b51 = l4R.i4R(N51, 1)
          } else {
            W51 = o51[b51].DT
          }
        }
        this.createDataSet()
        if (Z51) {
          if (N51 > 0) {
            for (var e51 = K51 - ('1' | 0); e51 >= 0; e51--) {
              i51 = g51[e51].DT
              if (i51.getTime() < W51.getTime()) {
                l4R.w4R(11)
                t51.scroll = l4R.h4R(b51, K51, e51)
                break
              }
            }
          }
        } else if (!p51) {
          z51 = Math.round(this.preferences.whitespace / k51)
          l4R.w4R(1)
          t51.scroll = l4R.h4R(y51, z51)
        } else {
          t51.scroll = g51.length + p51
        }
      }
      if (this.displayInitialized) {
        this.draw()
      }
      this.changeOccurred('layout')
      if (this.quoteDriver) {
        for (v51 in this.charts) {
          t51 = this.charts[v51]
          if (t51.symbol && t51.moreAvailable) {
            this.quoteDriver.checkLoadMore(t51)
          }
        }
      }
      if (T51) {
        T51(null)
      }
      this.runAppend('setPeriodicityV2', arguments)
    }
    Q9d.ChartEngine.prototype.drawVectors = function() {
      var g8B, N8B, r1w, n1w, X1w, R51, I51, D51, J51, l51
      g8B = 'drawV'
      g8B += 'ect'
      g8B += 'ors'
      N8B = 'dr'
      N8B += 'aw'
      N8B += 'Vecto'
      N8B += 'rs'
      if (this.vectorsShowing) {
        return
      }
      if (this.runPrepend(N8B, arguments)) {
        return
      }
      r1w = -582650794
      n1w = 107725275
      X1w = 2
      for (var C1w = 1; l4R.l7w(C1w.toString(), C1w.toString().length, 8609) !== r1w; C1w++) {
        this.vectorsShowing = !![]
        X1w += 2
      }
      if (l4R.f7w(X1w.toString(), X1w.toString().length, 90194) !== n1w) {
        this.vectorsShowing = !'1'
      }
      if (!this.chart.hideDrawings) {
        R51 = {}
        for (D51 = 0; D51 < this.drawingObjects.length; D51++) {
          J51 = this.drawingObjects[D51]
          I51 = J51.panelName
          if (!this.panels[J51.panelName]) continue
          if (!R51[I51]) {
            R51[I51] = []
          }
          R51[I51].push(J51)
        }
        for (I51 in R51) {
          this.startClip(I51)
          l51 = R51[I51]
          for (D51 = 0; D51 < l51.length; D51++) {
            l51[D51].render(this.chart.context)
          }
          this.endClip()
        }
      }
      this.runAppend(g8B, arguments)
    }
    Q9d.ChartEngine.NONE = 0
    Q9d.ChartEngine.CLOSEUP = 1
    Q9d.ChartEngine.CLOSEDOWN = 2
    Q9d.ChartEngine.CLOSEEVEN = +'4'
    l4R.w4R(1)
    Q9d.ChartEngine.CANDLEUP = l4R.h4R('8', 0)
    Q9d.ChartEngine.CANDLEDOWN = 16
    Q9d.ChartEngine.CANDLEEVEN = 32
    Q9d.ChartEngine.prototype.displayChart = function(B51) {
      var K8B,
        c8B,
        v8B,
        o8B,
        k8B,
        d51,
        m51,
        H51,
        L51,
        O51,
        G41,
        q41,
        j41,
        U51,
        a51,
        O8B,
        B8B,
        o41,
        L8B,
        J8B,
        n41,
        b41,
        j8B,
        a8B,
        D8B,
        d4B,
        M4B,
        R4B,
        A8B,
        H8B,
        Y41,
        f41,
        c41,
        t4B,
        E41,
        r41,
        P4B,
        a3w,
        j3w,
        K3w,
        e4B,
        Q4B,
        s4B,
        W4B,
        Y4B,
        A6w,
        R9B,
        M9B,
        C41,
        G4B,
        p4B,
        m4B,
        X51,
        w51,
        M41,
        E4B,
        S4B,
        h4B,
        Q41,
        T4B,
        b4B,
        t41,
        x4B,
        z4B,
        F4B,
        V4B,
        w4B
      K8B = 'hollow_candl'
      K8B += 'e'
      c8B = 'li'
      c8B += 'ne'
      v8B = 'p'
      v8B += 'an'
      v8B += 'd'
      v8B += 'f'
      o8B = 'n'
      o8B += 'o'
      o8B += 'n'
      o8B += 'e'
      k8B = 'd'
      k8B += 'is'
      k8B += 'playChar'
      k8B += 't'
      d51 = this.layout.candleWidth - B51.tmpWidth < 2 && B51.tmpWidth <= 3
      if (this.runPrepend(k8B, arguments)) {
        return
      }
      m51 = this.layout
      H51 = m51.chartType
      L51 = null
      O51 = B51.panel
      if (B51.customChart) {
        if (B51.customChart.chartType) {
          H51 = B51.customChart.chartType
        }
        if (B51.customChart.colorFunction) {
          L51 = B51.customChart.colorFunction
        }
      }
      this.controls.baselineHandle.style.display = o8B
      this.chart.baseLegendColors = []
      if (m51.aggregationType == 'kagi' && H51 != 'none') {
        O8B = 'stx_ka'
        O8B += 'gi_up'
        this.drawKagiSquareWave(O51, 'stx_kagi_up', 'stx_kagi_down')
        this.chart.baseLegendColors.push(this.getCanvasColor(O8B))
        this.chart.baseLegendColors.push(this.getCanvasColor('stx_kagi_down'))
      } else if (m51.aggregationType == v8B && H51 != 'none') {
        B8B = 'st'
        B8B += 'x_'
        B8B += 'pandf_do'
        B8B += 'wn'
        this.drawPointFigureChart(O51, 'stx_pandf_up', ('9796' * 1, 167.65) <= ('705' | 0) ? 'X' : 'O')
        this.chart.baseLegendColors.push(this.getCanvasColor('stx_pandf_up'))
        this.drawPointFigureChart(O51, B8B, 'O')
        this.chart.baseLegendColors.push(this.getCanvasColor('stx_pandf_down'))
      } else if (H51 == c8B) {
        this.drawLineChart(O51, 'stx_line_chart')
      } else if (H51 == 'mountain') {
        this.startClip(O51.name)
        this.chart.baseLegendColors = null
        this.drawMountainChart(O51)
        this.endClip()
      } else if (H51 == 'colored_mountain') {
        this.startClip(O51.name)
        G41 = this.getCanvasColor('stx_line_up')
        q41 = this.getCanvasColor('stx_line_down')
        j41 = this.getCanvasColor('stx_line_chart')
        if (!L51) {
          L51 = function(W41, k41, x41) {
            if (k41.Close > k41.iqPrevClose) {
              return G41
            } else if (k41.Close < k41.iqPrevClose) {
              return q41
            } else {
              return j41
            }
            return null
          }
        }
        o41 = this.drawMountainChart(O51, 'stx_colored_mountain_chart', L51)
        for (var V41 in o41) {
          this.chart.baseLegendColors.push(V41)
        }
        this.endClip()
      } else if (H51 == 'wave') {
        this.drawWaveChart(O51)
      } else if (H51 == 'bar') {
        this.startClip(O51.name)
        this.drawBarChartHighPerformance(O51, 'stx_bar_chart')
        this.endClip()
      } else if (H51 == 'colored_line') {
        L8B = 's'
        L8B += 'tx_line_chart'
        J8B = 'stx_li'
        J8B += 'ne_up'
        this.startClip(O51.name)
        G41 = this.getCanvasColor(J8B)
        q41 = this.getCanvasColor('stx_line_down')
        j41 = this.getCanvasColor('stx_line_chart')
        if (!L51) {
          L51 = function(A41, h41, i41) {
            if (h41.Close > h41.iqPrevClose) {
              return G41
            } else if (h41.Close < h41.iqPrevClose) {
              return q41
            } else {
              return j41
            }
            return null
          }
        }
        n41 = this.drawLineChart(O51, L8B, L51)
        for (var T41 in n41) {
          this.chart.baseLegendColors.push(T41)
        }
        this.endClip()
      } else if (H51 == 'colored_bar') {
        this.startClip(O51.name)
        if (L51) {
          b41 = this.drawBarChart(O51, 'stx_bar_chart', L51)
          for (var N41 in b41) {
            this.chart.baseLegendColors.push(N41)
          }
        } else {
          j8B = 'stx_bar_'
          j8B += 'd'
          j8B += 'own'
          a8B = 'st'
          a8B += 'x_bar'
          a8B += '_d'
          a8B += 'own'
          D8B = 's'
          D8B += 'tx_'
          D8B += 'b'
          D8B += 'ar_up'
          this.drawBarChartHighPerformance(O51, D8B, Q9d.ChartEngine.CLOSEUP)
          this.drawBarChartHighPerformance(O51, a8B, Q9d.ChartEngine.CLOSEDOWN)
          this.drawBarChartHighPerformance(O51, 'stx_bar_even', Q9d.ChartEngine.CLOSEEVEN)
          this.chart.baseLegendColors.push(this.getCanvasColor('stx_bar_up'))
          this.chart.baseLegendColors.push(this.getCanvasColor(j8B))
        }
        this.endClip()
      } else if (H51 == K8B || H51 == 'volume_candle') {
        this.startClip(O51.name)
        if (L51) {
          if (!this.noWicksOnCandles[m51.aggregationType]) {
            this.drawShadows(O51, L51)
          }
          this.drawCandles(O51, L51, !{})
          this.drawCandles(O51, L51, !!{})
        } else {
          d4B = 'transpar'
          d4B += 'en'
          d4B += 't'
          M4B = 'tr'
          M4B += 'ansparent'
          R4B = 'stx'
          R4B += '_hollow_candl'
          R4B += 'e_even'
          if (!this.noWicksOnCandles[m51.aggregationType]) {
            A8B = 'stx_hollow_'
            A8B += 'candle_down'
            H8B = 'stx'
            H8B += '_hollow_ca'
            H8B += 'ndle_up'
            this.drawShadowsHighPerformance(O51, H8B, Q9d.ChartEngine.CLOSEUP)
            this.drawShadowsHighPerformance(O51, A8B, Q9d.ChartEngine.CLOSEDOWN)
            this.drawShadowsHighPerformance(O51, 'stx_hollow_candle_even', Q9d.ChartEngine.CLOSEEVEN)
          }
          Y41 = this.getCanvasColor('stx_hollow_candle_up')
          f41 = this.getCanvasColor('stx_hollow_candle_down')
          c41 = this.getCanvasColor(R4B)
          this.drawCandlesHighPerformance(O51, Y41, M4B, Q9d.ChartEngine.CLOSEUP | Q9d.ChartEngine.CANDLEDOWN)
          this.drawCandlesHighPerformance(O51, f41, d4B, Q9d.ChartEngine.CLOSEDOWN | Q9d.ChartEngine.CANDLEDOWN)
          this.drawCandlesHighPerformance(
            O51,
            c41,
            'transparent',
            Q9d.ChartEngine.CLOSEEVEN | Q9d.ChartEngine.CANDLEDOWN,
          )
          this.drawCandlesHighPerformance(
            O51,
            this.containerColor,
            Y41,
            Q9d.ChartEngine.CLOSEUP | Q9d.ChartEngine.CANDLEUP,
          )
          this.drawCandlesHighPerformance(
            O51,
            this.containerColor,
            f41,
            Q9d.ChartEngine.CLOSEDOWN | Q9d.ChartEngine.CANDLEUP,
          )
          this.drawCandlesHighPerformance(
            O51,
            this.containerColor,
            c41,
            Q9d.ChartEngine.CLOSEEVEN | Q9d.ChartEngine.CANDLEUP,
          )
          this.chart.baseLegendColors.push(Y41)
          this.chart.baseLegendColors.push(f41)
        }
        this.endClip()
      } else if (H51 == 'candle') {
        this.startClip(O51.name)
        if (L51) {
          if (!this.noWicksOnCandles[m51.aggregationType]) {
            this.drawShadows(O51, L51)
          }
          this.drawCandles(O51, L51, !!0)
          if (!d51) {
            this.drawCandles(O51, L51, !!{})
          }
        } else {
          if (!this.noWicksOnCandles[m51.aggregationType]) {
            t4B = 'stx_candle_sha'
            t4B += 'do'
            t4B += 'w_d'
            t4B += 'own'
            E41 = this.getCanvasColor('stx_candle_shadow_up')
            r41 = this.getCanvasColor(t4B)
            if (E41 != r41) {
              P4B = 'stx_can'
              P4B += 'dle_shadow_up'
              this.drawShadowsHighPerformance(O51, P4B, Q9d.ChartEngine.CANDLEUP)
              this.drawShadowsHighPerformance(O51, 'stx_candle_shadow_down', Q9d.ChartEngine.CANDLEDOWN)
              this.drawShadowsHighPerformance(O51, 'stx_candle_shadow', Q9d.ChartEngine.CANDLEEVEN)
            } else {
              this.drawShadowsHighPerformance(O51, 'stx_candle_shadow')
            }
          }
          a51 = this.canvasStyle('stx_candle_up')
          this.drawCandlesHighPerformance(O51, s51(this, a51, !1), s51(this, a51, !d51), Q9d.ChartEngine.CANDLEUP)
          this.chart.baseLegendColors.push(a51.color)
          a51 = this.canvasStyle('stx_candle_down')
          this.drawCandlesHighPerformance(O51, s51(this, a51, !1), s51(this, a51, !d51), Q9d.ChartEngine.CANDLEDOWN)
          this.chart.baseLegendColors.push(a51.color)
        }
        this.endClip()
      } else if (H51 == 'histogram') {
        this.startClip(O51.name)
        if (L51) {
          this.drawCandles(O51, L51, !{}, !'')
          l4R.w4R(4)
          a3w = -l4R.i4R('1102822419', 1)
          j3w = -1750301109
          K3w = 2
          for (var A3w = 1; l4R.f7w(A3w.toString(), A3w.toString().length, 34382) !== a3w; A3w++) {
            if (+d51) {
              this.drawCandles(O51, L51, !{}, ![])
            }
            K3w += 2
          }
          if (l4R.f7w(K3w.toString(), K3w.toString().length, 62544) !== j3w) {
            if (!d51) {
              this.drawCandles(O51, L51, !'', !'')
            }
          }
        } else {
          a51 = this.canvasStyle('stx_histogram_up')
          this.drawCandlesHighPerformance(
            O51,
            s51(this, a51, !1, !''),
            s51(this, a51, !d51, !![]),
            Q9d.ChartEngine.CANDLEUP,
            !![],
          )
          this.chart.baseLegendColors.push(a51.color)
          a51 = this.canvasStyle('stx_histogram_down')
          this.drawCandlesHighPerformance(
            O51,
            s51(this, a51, !{}, !![]),
            s51(this, a51, !d51, !!{}),
            Q9d.ChartEngine.CANDLEDOWN,
            !0,
          )
          this.chart.baseLegendColors.push(a51.color)
          a51 = this.canvasStyle('stx_histogram_even')
          this.drawCandlesHighPerformance(
            O51,
            s51(this, a51, !!'', !0),
            s51(this, a51, !d51, !!1),
            Q9d.ChartEngine.CANDLEEVEN,
            !!{},
          )
          this.chart.baseLegendColors.push(a51.color)
        }
        this.endClip()
      } else if (H51 == 'baseline_delta') {
        e4B = 'stx_bas'
        e4B += 'eline_t'
        e4B += 'race'
        this.startClip(O51.name)
        l4R.w4R(2)
        this.setStyle('stx_baseline_trace', 'opacity', l4R.h4R(0, '0'))
        this.drawLineChart(O51, e4B)
        U51 = B51.baseline.actualLevel
        if (U51 !== null) {
          Q4B = '2'
          Q4B += '.'
          Q4B += '1'
          s4B = 'stx'
          s4B += '_b'
          s4B += 'aseline'
          W4B = '1'
          W4B += '.'
          W4B += '1'
          Y4B = 'li'
          Y4B += 'ne'
          l4R.d4R(1)
          A6w = l4R.h4R('554702014', 0)
          R9B = 161962709
          M9B = 2
          for (var t9B = 1; l4R.f7w(t9B.toString(), t9B.toString().length, '43136' | 0) !== A6w; t9B++) {
            U51 = this.pixelFromPriceTransform(U51, B51.panel)
            M9B += 2
          }
          if (l4R.l7w(M9B.toString(), M9B.toString().length, 72482) !== R9B) {
            U51 = this.pixelFromPriceTransform(U51, B51.panel)
          }
          C41 = { over: 'stx_baseline_up', under: 'stx_baseline_down' }
          for (var F51 in C41) {
            G4B = 'trans'
            G4B += 'pa'
            G4B += 'rent'
            p4B = 's'
            p4B += 'o'
            p4B += 'lid'
            m4B = 'C'
            m4B += 'los'
            m4B += 'e'
            X51 = {
              panelName: 'chart',
              band: m4B,
              threshold: B51.baseline.actualLevel,
              color: this.getCanvasColor(C41[F51]),
              direction: F51 == 'over' ? '1' * 1 : -1,
              edgeHighlight: this.getCanvasColor(C41[F51]),
              edgeParameters: {
                pattern: p4B,
                lineWidth: parseInt(this.canvasStyle(C41[F51]).width, '10' * 1) + 0.1,
                opacity: 1,
              },
            }
            w51 = X51.color
            if (w51 && w51 != G4B) {
              M41 = B51.context.createLinearGradient(0, F51 == 'over' ? 0 : 2 * U51, +'0', U51)
              M41.addColorStop(0, Q9d.hexToRgba(w51, 60))
              M41.addColorStop(1, Q9d.hexToRgba(w51, 10))
              X51.color = M41
              X51.opacity = 1
            }
            Q9d.preparePeakValleyFill(this, B51.dataSegment, X51)
            this.chart.baseLegendColors.push(w51)
          }
          this.plotLine(0, 1, U51, U51, this.containerColor, Y4B, B51.context, !'', {
            pattern: 'solid',
            lineWidth: W4B,
            opacity: +'1',
          })
          this.plotLine(0, 1, U51, U51, this.getCanvasColor(s4B), 'line', B51.context, !![], {
            pattern: 'dotted',
            lineWidth: Q4B,
            opacity: 0.5,
          })
          if (this.chart.baseline.userLevel !== !!'') {
            l4R.d4R(12)
            var f1B = l4R.h4R(23, 10, 23)
            l4R.w4R(35)
            var l1B = l4R.i4R(15, 126, 17, 4)
            this.controls.baselineHandle.style.top =
              U51 - parseInt(getComputedStyle(this.controls.baselineHandle).height, f1B) / l1B + 'px'
            l4R.d4R(12)
            var y1B = l4R.h4R(20, 5, 10)
            this.controls.baselineHandle.style.left =
              this.chart.right - parseInt(getComputedStyle(this.controls.baselineHandle).width, y1B) + 'px'
            this.controls.baselineHandle.style.display = 'block'
          }
        }
        this.endClip()
      } else if (H51 == 'baseline_delta_mountain') {
        U51 = B51.baseline.actualLevel
        if (U51 !== null) {
          E4B = 'l'
          E4B += 'i'
          E4B += 'ne'
          S4B = 'opa'
          S4B += 'ci'
          S4B += 'ty'
          h4B = 'stx_baseline_delta_m'
          h4B += 'o'
          h4B += 'un'
          h4B += 'tain'
          this.startClip(O51.name)
          this.drawMountainChart(O51, h4B)
          this.endClip()
          this.startClip(O51.name)
          this.setStyle('stx_baseline_trace', S4B, +'0')
          this.drawLineChart(O51, 'stx_baseline_trace')
          U51 = this.pixelFromPriceTransform(U51, B51.panel)
          Q41 = { over: 'stx_baseline_up', under: 'stx_baseline_down' }
          for (var S41 in Q41) {
            T4B = 'Cl'
            T4B += 'ose'
            b4B = 'ch'
            b4B += 'a'
            b4B += 'rt'
            t41 = {
              panelName: b4B,
              band: T4B,
              threshold: B51.baseline.actualLevel,
              color: this.getCanvasColor(Q41[S41]),
              direction: S41 == 'over' ? 1 : -1,
              edgeHighlight: this.getCanvasColor(Q41[S41]),
              edgeParameters: {
                pattern: 'solid',
                lineWidth: parseInt(this.canvasStyle(Q41[S41]).width, 10) + 0.1,
                opacity: 1,
              },
            }
            this.chart.baseLegendColors.push(t41.color)
            t41.color = 'transparent'
            Q9d.preparePeakValleyFill(this, B51.dataSegment, t41)
          }
          this.plotLine(0, 1, U51, U51, this.containerColor, 'line', B51.context, !0, {
            pattern: 'solid',
            lineWidth: '1.1',
            opacity: 1,
          })
          this.plotLine(0, 1, U51, U51, this.getCanvasColor('stx_baseline'), E4B, B51.context, !0, {
            pattern: 'dotted',
            lineWidth: '2.1',
            opacity: '0.5' - 0,
          })
          if (this.chart.baseline.userLevel !== ![]) {
            x4B = 'p'
            x4B += 'x'
            this.controls.baselineHandle.style.top =
              U51 - parseInt(getComputedStyle(this.controls.baselineHandle).height, 10) / ('2' | 0) + x4B
            l4R.w4R(16)
            var i1B = l4R.i4R(12, 19, 114, 5)
            this.controls.baselineHandle.style.left =
              this.chart.right - parseInt(getComputedStyle(this.controls.baselineHandle).width, i1B) + 'px'
            this.controls.baselineHandle.style.display = 'block'
          }
          this.endClip()
        }
      } else if (H51 == 'scatterplot') {
        this.startClip(O51.name)
        this.scatter(O51)
        this.endClip()
      } else if (H51 && H51 != 'none') {
        z4B = 'st'
        z4B += 'x'
        z4B += '_line_ch'
        z4B += 'art'
        F4B = 'l'
        F4B += 'i'
        F4B += 'n'
        F4B += 'e'
        V4B = '". Defaulting to '
        V4B += 'Line Chart.'
        w4B = 'Invalid '
        w4B += 'chart layout'
        w4B += '.chartType: "'
        l4R.w4R(5)
        console.log(l4R.i4R(V4B, H51, w4B))
        m51.chartType = F4B
        this.drawLineChart(O51, z4B)
      } else {
        this.chart.baseLegendColors = null
      }
      this.runAppend('displayChart', arguments)
      function s51(p41, Z41, v41, K41) {
        var e41, U8B, g41, y41, P41
        e41 = Z41.color
        if (v41) {
          U8B = 'border-left-col'
          U8B += 'or'
          e41 = Z41[U8B]
          if (!e41) {
            e41 = Z41.borderLeftColor
          }
          if (!e41) {
            return null
          }
        }
        if (!K41) {
          return e41
        }
        g41 = p41.pixelFromPrice(O51.chart.highValue, O51)
        if (isNaN(g41)) {
          g41 = 0
        }
        y41 = Z41.backgroundColor
        if (e41 && !Q9d.isTransparent(e41)) {
          l4R.w4R(4)
          P41 = p41.chart.context.createLinearGradient(l4R.i4R('0', 1), g41, 0, 2 * O51.yAxis.bottom - g41)
          P41.addColorStop(0, e41)
          P41.addColorStop(1, y41)
          return P41
        } else {
          return y41
        }
      }
    }
    Q9d.ChartEngine.prototype.calculateATR = function(I41, z41) {
      var R41, D41, J41, l41
      if (!z41) {
        z41 = 20
      }
      R41 = 0
      for (var u41 = 1; u41 < I41.dataSet.length; u41++) {
        D41 = I41.dataSet[u41]
        l4R.w4R(1)
        J41 = I41.dataSet[l4R.h4R(u41, 1)]
        l41 = Math.max(D41.High - D41.Low, Math.abs(D41.High - J41.Close), Math.abs(D41.Low - J41.Close))
        R41 += l41
        if (u41 > z41) {
          R41 -= I41.dataSet[u41 - z41].trueRange
        }
        D41.trueRange = l41
        if (u41 == z41) {
          l4R.w4R(17)
          D41.atr = l4R.h4R(R41, z41)
        } else if (u41 > z41) {
          D41.atr = (J41.atr * (z41 - 1) + l41) / z41
        }
      }
    }
    Q9d.ChartEngine.prototype.calculateMedianPrice = function(L41) {
      var O41
      for (var H41 = 0; H41 < L41.dataSet.length; ++H41) {
        O41 = L41.dataSet[H41]
        l4R.w4R(1)
        var q1B = l4R.i4R(16, 14)
        O41['hl/2'] = (O41.High + O41.Low) / q1B
      }
    }
    Q9d.ChartEngine.prototype.calculateTypicalPrice = function(a41) {
      var B41
      for (var U41 = 0; U41 < a41.dataSet.length; ++U41) {
        B41 = a41.dataSet[U41]
        B41['hlc/3'] = (B41.High + B41.Low + B41.Close) / 3
      }
    }
    Q9d.ChartEngine.prototype.calculateWeightedClose = function(d41) {
      var s41
      for (var m41 = 0; m41 < d41.dataSet.length; ++m41) {
        s41 = d41.dataSet[m41]
        l4R.w4R(35)
        var g1B = l4R.h4R(5, 58, 10, 4)
        s41['hlcc/4'] = (s41.High + s41.Low + g1B * s41.Close) / 4
      }
    }
    Q9d.ChartEngine.prototype.calculateOHLC4 = function(X41) {
      var F41
      for (var w41 = '0' | 0; w41 < X41.dataSet.length; ++w41) {
        F41 = X41.dataSet[w41]
        l4R.d4R(1)
        var o1B = l4R.h4R(11, 7)
        F41['ohlc/4'] = (F41.Open + F41.High + F41.Low + F41.Close) / o1B
      }
    }
    Q9d.ChartEngine.prototype.currentQuote = function() {
      var S61
      S61 = null
      if (!this.chart.dataSet) {
        return null
      }
      for (var Q61 = this.chart.dataSet.length - 1; Q61 >= 0; Q61--)
        if (this.chart.dataSet[Q61]) {
          return this.chart.dataSet[Q61]
        }
      return null
    }
    Q9d.ChartEngine.prototype.correctIfOffEdge = function(G61) {
      var n4B, r4B, C61, f61, j61, Y61, q61
      n4B = 'correctI'
      n4B += 'fO'
      n4B += 'f'
      n4B += 'fEdge'
      r4B = 'cor'
      r4B += 'rectI'
      r4B += 'fOffEdge'
      if (this.runPrepend(r4B, arguments)) {
        return
      }
      for (var M61 in this.charts) {
        C61 = this.charts[M61]
        f61 = C61.dataSet
        j61 = C61.maxTicks
        Y61 = Math.min(this.minimumLeftBars + 1, j61)
        if (C61.allowScrollPast) {
          l4R.w4R(1)
          q61 = l4R.h4R(j61, Y61)
          if (j61 - q61 > f61.length) {
            q61 = j61 - f61.length
          }
          if (C61.scroll - q61 > f61.length) {
            C61.scroll = f61.length + q61
          }
          if (C61.scroll <= Y61) {
            C61.scroll = Y61
            this.micropixels = 0
          }
        } else {
          if (C61.scroll < Y61) {
            C61.scroll = Y61
          }
          if (C61.scroll > f61.length) {
            C61.scroll = f61.length
          }
        }
      }
      this.runAppend(n4B, arguments)
    }
    Q9d.ChartEngine.prototype.createDataSegment = function(v61) {
      var X4B, c61, n61, r61, E61, p61, Z61, V61, k61, t61, T61, b61, P61, N61, y61
      X4B = 'creat'
      X4B += 'eDataSegment'
      if (this.runPrepend('createDataSegment', arguments)) {
        return
      }
      for (var K61 in this.charts) {
        c61 = this.charts[K61]
        if (v61) {
          c61 = v61
        }
        if (c61.isComparison) {
          Q9d.Comparison.createComparisonSegmentInner(this, c61)
        }
        n61 = c61.dataSet
        r61 = c61.baseline
        E61 = c61.scroll
        p61 = c61.maxTicks
        Z61 = this.layout
        V61 = Z61.candleWidth
        r61.actualLevel = r61.userLevel ? r61.userLevel : r61.defaultLevel
        k61 = r61.includeInDataSegment && !Q9d.ChartEngine.chartShowsHighs(this.layout.chartType)
        T61 = c61.dataSegment = []
        l4R.d4R(1)
        var U1B = l4R.h4R(13, 12)
        b61 = n61.length - E61 - U1B
        for (var o61 = -1; o61 < E61 && o61 < p61; o61++) {
          b61++
          if (o61 == -1 && !k61) continue
          if (b61 < n61.length && b61 >= 0) {
            t61 = n61[b61]
            if (t61.candleWidth) {
              t61.candleWidth = null
              t61.leftOffset = null
            }
            T61.push(t61)
            if (r61.actualLevel === null && o61 >= 0) {
              r61.actualLevel = t61.iqPrevClose
            }
          } else if (b61 < 0) {
            T61.push(null)
          }
        }
        if (Z61.chartType == 'volume_candle') {
          P61 = 0
          for (var e61 = '0' | 0; e61 < T61.length; e61++) {
            t61 = T61[e61]
            if (t61) {
              P61 += t61.Volume
            }
          }
          N61 = 0
          for (var g61 = 0; g61 < T61.length; g61++) {
            t61 = T61[g61]
            if (t61) {
              if (t61.Volume) {
                y61 = c61.width
                if (E61 < p61) {
                  y61 -= this.preferences.whitespace
                }
                t61.candleWidth = (y61 * t61.Volume) / P61
                l4R.w4R(36)
                var O1B = l4R.i4R(2, 10, 14, 15, 8)
                t61.leftOffset = N61 + t61.candleWidth / O1B
                N61 += t61.candleWidth
              } else {
                t61.candleWidth = V61
                l4R.d4R(3)
                t61.leftOffset = l4R.h4R(N61, V61, 2)
                N61 += V61
              }
            } else {
              N61 += V61
            }
          }
        }
        if (v61) break
      }
      if (c61 && c61.isComparison) {
        this.clearPixelCache()
      }
      this.runAppend(X4B, arguments)
    }
    Q9d.ChartEngine.prototype.leftTick = function() {
      return this.chart.dataSet.length - this.chart.scroll
    }
    Q9d.ChartEngine.prototype.getStartDateOffset = function() {
      for (var W61 = 0; W61 < this.chart.dataSegment.length; W61++) {
        if (this.chart.dataSegment[W61]) {
          return W61
        }
      }
      return 0
    }
    Q9d.ChartEngine.prototype.setStartDate = function(A61) {
      var h61
      for (var x61 = 0; x61 < this.chart.dataSet.length; x61++) {
        h61 = this.chart.dataSet[x61]
        if (h61.DT.getTime() == A61.getTime()) {
          this.chart.scroll = this.chart.dataSet.length - x61
          this.draw()
          return
        }
      }
    }
    Q9d.ChartEngine.prototype.updateListeners = function(u61) {
      var i61
      for (var z61 in this.plugins) {
        i61 = this.plugins[z61]
        if (i61.display && i61.listener) {
          i61.listener(this, u61)
        }
      }
    }
    Q9d.ChartEngine.prototype.clearPixelCache = function() {
      var D61, I61
      for (var J61 in this.panels) {
        D61 = this.panels[J61]
        D61.cacheHigh = null
        D61.cacheLow = null
        D61.cacheLeft = 1000000
        D61.cacheRight = -+'1'
      }
      for (var l61 in this.charts) {
        I61 = this.charts[l61]
        if (!I61.dataSet) continue
        for (var R61 = +'0'; R61 < I61.dataSet.length; R61++) {
          I61.dataSet[R61].cache = {}
        }
      }
    }
    Q9d.ChartEngine.prototype.createYAxisLabel = function(w61, j81, U61, m61, Y81, f81, C81) {
      var I4B, f4B, C4B, u4B, O61, H61, B61, L61, d61, S81, s61, a61, Q81, X61, q81, F61, y4B, l4B
      I4B = 'l'
      I4B += 'e'
      I4B += 'f'
      I4B += 't'
      f4B = 'undefine'
      f4B += 'd'
      C4B = 'stx_y'
      C4B += 'ax'
      C4B += 'is'
      u4B = 'stx_ya'
      u4B += 'x'
      u4B += 'i'
      u4B += 's'
      if (w61.yAxis.drawPriceLabels === !!'') {
        return
      }
      O61 = C81 ? C81 : w61.yAxis
      H61 = f81 ? f81 : this.chart.context
      B61 = +'3'
      L61 = this.getCanvasFontSize(u4B) + B61 * +'2'
      this.canvasFont(C4B, H61)
      d61 = O61.displayBorder
      if (this.axisBorders === !1) {
        d61 = !!''
      }
      if (this.axisBorders === !!{}) {
        d61 = !!1
      }
      S81 = d61 ? 3 : 0
      try {
        s61 = H61.measureText(j81).width + S81 + B61 * 2
      } catch (M81) {
        s61 = O61.width
      }
      l4R.w4R(37)
      var c1B = l4R.i4R(13, 5, 2)
      a61 = O61.left - B61 + c1B
      l4R.d4R(5)
      Q81 = l4R.i4R(S81, B61, a61)
      X61 = 3
      q81 = O61.position === null ? w61.chart.yAxis.position : O61.position
      if (q81 === 'left') {
        l4R.w4R(18)
        var J1B = l4R.i4R(12, 14, 165)
        a61 = O61.left + O61.width + B61 - J1B
        l4R.d4R(38)
        s61 = l4R.h4R('1', 1, s61)
        Q81 = a61
        X61 = -3
        H61.textAlign = 'right'
      }
      if (U61 + L61 / 2 > O61.bottom) {
        l4R.d4R(39)
        var L1B = l4R.i4R(11, 14, 42, 14, 4)
        U61 = O61.bottom - L61 / L1B
      }
      if (U61 - L61 / 2 < O61.top) {
        U61 = O61.top + L61 / 2
      }
      H61.fillStyle = m61
      if (typeof Q9d[this.yaxisLabelStyle] == f4B) {
        this.yaxisLabelStyle = 'roundRectArrow'
      }
      F61 = this.yaxisLabelStyle
      if (O61.yaxisLabelStyle) {
        F61 = O61.yaxisLabelStyle
      }
      l4R.w4R(40)
      Q9d[F61](H61, a61, l4R.i4R(U61, 2, L61), s61, L61, X61, !![], !!0)
      H61.textBaseline = 'middle'
      H61.fillStyle = Y81 ? Y81 : Q9d.chooseForegroundColor(m61)
      if (H61.fillStyle == m61) {
        y4B = '#'
        y4B += '0000'
        y4B += '0'
        y4B += '0'
        l4B = '#FF'
        l4B += 'FFF'
        l4B += 'F'
        if (m61.toUpperCase() == l4B) {
          H61.fillStyle = y4B
        } else {
          H61.fillStyle = '#FFFFFF'
        }
      }
      l4R.w4R(6)
      H61.fillText(j81, Q81, l4R.i4R(U61, 1))
      H61.textAlign = I4B
    }
    Q9d.ChartEngine.prototype.createXAxisLabel = function(r81, g81, t81, o81, e81, E81) {
      var G81, N81, n81, V81, c81, T81, b81, i4B
      G81 = this.chart.context
      N81 = 2
      n81 = 'stx-float-date'
      l4R.d4R(41)
      var a1B = l4R.i4R(18, 10, 108, 13, 16)
      V81 = this.getCanvasFontSize(n81) + N81 * a1B
      this.canvasFont(n81, G81)
      try {
        l4R.w4R(42)
        var j1B = l4R.h4R(15, 16, 375, 34)
        c81 = G81.measureText(g81).width + N81 * j1B
      } catch (Z81) {
        c81 = 0
      }
      T81 = r81.top + r81.height - V81
      if (t81 + c81 / 2 < r81.left || t81 - c81 / 2 > r81.right) {
        return
      }
      if (!E81) {
        if (t81 + c81 / 2 > r81.right) {
          t81 = r81.right - c81 / 2
        }
        if (t81 - c81 / ('2' * 1) < r81.left) {
          l4R.d4R(37)
          var H1B = l4R.h4R(13, 9, 5)
          t81 = r81.left + c81 / H1B
        }
      }
      G81.fillStyle = o81
      l4R.w4R(40)
      Q9d.roundRect(G81, l4R.h4R(t81, 2, c81), T81, c81, V81, 3, !!1, !{})
      b81 = r81.bottom - r81.yAxis.bottom - V81
      G81.beginPath()
      if (E81) {
        l4R.w4R(1)
        G81.moveTo(l4R.h4R(t81, b81), T81)
        l4R.w4R(43)
        G81.lineTo(t81, l4R.h4R(1, b81, T81))
        l4R.d4R(6)
        G81.lineTo(l4R.h4R(t81, b81), T81)
        G81.closePath()
        G81.fill()
      } else {
        G81.moveTo(t81, T81)
        l4R.w4R(1)
        G81.lineTo(t81, l4R.i4R(T81, b81))
        G81.strokeStyle = o81
        G81.stroke()
      }
      G81.textBaseline = 'top'
      G81.fillStyle = e81 ? e81 : Q9d.chooseForegroundColor(o81)
      if (G81.fillStyle == o81) {
        i4B = '#FF'
        i4B += 'FFF'
        i4B += 'F'
        if (o81.toUpperCase() == i4B) {
          G81.fillStyle = '#000000'
        } else {
          G81.fillStyle = '#FFFFFF'
        }
      }
      l4R.w4R(44)
      G81.fillText(g81, l4R.i4R(c81, N81, 2, t81), l4R.h4R(T81, N81, l4R.d4R(6)))
    }
    Q9d.ChartEngine.prototype.drawCurrentHR = function() {
      var k4B, Z4B, h81, D81, y81, P81, K81, v81, k81, A81, p81, i81, R81, z81, q4B, u81, W81, x81, g4B, N4B
      k4B = 'draw'
      k4B += 'Curr'
      k4B += 'entHR'
      Z4B = 'drawCu'
      Z4B += 'r'
      Z4B += 'r'
      Z4B += 'entHR'
      if (this.runPrepend(Z4B, arguments)) {
        return
      }
      for (var I81 in this.charts) {
        y81 = this.charts[I81]
        P81 = y81.panel
        K81 = P81.yAxis
        if (K81.drawCurrentPriceLabel === !!0) continue
        if (y81.customChart && y81.customChart.chartType == 'none') continue
        v81 = K81.whichSet
        if (!v81) {
          v81 = 'dataSet'
        }
        k81 = y81[v81].length
        A81 = this.layout.candleWidth
        if (v81 == 'dataSegment') {
          while (k81 > (y81.width - this.micropixels + A81 / 2 + 1) / A81) {
            k81--
          }
        }
        if (k81 && y81[v81][k81 - 1]) {
          l4R.d4R(1)
          p81 = y81[v81][l4R.h4R(k81, 1)]
          i81 = p81.Close
          R81 = p81.Close
          if (y81[v81].length >= '2' - 0) {
            l4R.d4R(1)
            z81 = y81[v81][l4R.i4R(k81, 2)]
            if (z81) {
              i81 = z81.Close
            }
          }
          if (R81 < i81) {
            h81 = this.canvasStyle('stx_current_hr_down').backgroundColor
            D81 = this.canvasStyle('stx_current_hr_down').color
          } else {
            q4B = 'stx'
            q4B += '_current_hr_up'
            h81 = this.canvasStyle('stx_current_hr_up').backgroundColor
            D81 = this.canvasStyle(q4B).color
          }
          if (p81.transform) {
            p81 = p81.transform
          }
          W81 = Math.max(P81.yAxis.printDecimalPlaces, P81.chart.decimalPlaces)
          if (K81.maxDecimalPlaces || K81.maxDecimalPlaces === 0) {
            W81 = Math.min(W81, K81.maxDecimalPlaces)
          }
          if (K81.priceFormatter) {
            u81 = K81.priceFormatter(this, P81, p81.Close, W81)
          } else {
            u81 = this.formatYAxisPrice(p81.Close, P81, W81)
          }
          x81 = this.pixelFromPrice(p81.Close, P81)
          this.createYAxisLabel(P81, u81, x81, h81, D81)
          if (this.preferences.currentPriceLine === !!{} && this.isHome()) {
            g4B = 'd'
            g4B += 'ash'
            g4B += 'e'
            g4B += 'd'
            N4B = 'l'
            N4B += 'i'
            N4B += 'n'
            N4B += 'e'
            P81.chart.context.globalCompositeOperation = 'destination-over'
            this.plotLine(P81.left, P81.right, x81, x81, h81, N4B, P81.chart.context, P81, {
              pattern: g4B,
              lineWidth: 1,
              opacity: 0.8,
            })
            P81.chart.context.globalCompositeOperation = 'source-over'
          }
        }
      }
      this.runAppend(k4B, arguments)
    }
    Q9d.ChartEngine.prototype.getDefaultColor = function() {
      var J81, l81, O81, U4B, h1w, S1w, b1w, o4B, O4B, H81, L81
      this.defaultColor = '#000000'
      J81 = null
      l81 = this.chart.container
      while (!J81 || Q9d.isTransparent(J81)) {
        O81 = getComputedStyle(l81)
        if (!O81) {
          return
        }
        J81 = O81.backgroundColor
        if (Q9d.isTransparent(J81)) {
          J81 = 'transparent'
        }
        l81 = l81.parentNode
        if (!l81 || !l81.tagName) break
      }
      if (J81) {
        U4B = '#FF'
        U4B += 'FFFF'
        h1w = -711464067
        S1w = -742299985
        b1w = 2
        for (var E1w = 1; l4R.f7w(E1w.toString(), E1w.toString().length, 72826) !== h1w; E1w++) {
          o4B = 'transp'
          o4B += 'ar'
          o4B += 'ent'
          if (J81 != 'transparent') {
            J81 = o4B
          }
          this.containerColor = J81
          b1w += 2
        }
        if (l4R.l7w(b1w.toString(), b1w.toString().length, 9934) !== S1w) {
          if (J81 === 'transparent') {
            J81 = 'transparent'
          }
          this.containerColor = J81
        }
        if (J81 == 'transparent') {
          J81 = U4B
        }
        this.containerColor = J81
        if (!Q9d.isTransparent(J81)) {
          O4B = '#'
          O4B += '00000'
          O4B += '0'
          H81 = Q9d.hsv(J81)
          L81 = H81[2]
          if (L81 > +'0.65') {
            this.defaultColor = O4B
          } else {
            this.defaultColor = '#FFFFFF'
          }
        } else {
          this.defaultColor = '#000000'
        }
      } else {
        this.containerColor = '#FFFFFF'
      }
    }
    Q9d.ChartEngine.prototype.startAsyncAction = function() {
      if (!this.pendingAsyncs) {
        this.pendingAsyncs = []
      }
      this.pendingAsyncs.push(!!'1')
    }
    Q9d.ChartEngine.prototype.registerChartDrawnCallback = function(B81) {
      if (!this.asyncCallbacks) {
        this.asyncCallbacks = []
      }
      this.asyncCallbacks.push(B81)
      return { fc: B81 }
    }
    Q9d.ChartEngine.prototype.unregisterChartDrawnCallback = function(a81) {
      for (var U81 = 0; U81 < this.asyncCallbacks.length; U81++) {
        if (this.asyncCallbacks[U81] == a81.fc) {
          this.asyncCallbacks.splice(U81, 1)
          return
        }
      }
    }
    Q9d.ChartEngine.prototype.makeAsyncCallbacks = function() {
      if (!this.asyncCallbacks) {
        return
      }
      if (!this.pendingAsyncs || !this.pendingAsyncs.length) {
        for (var s81 = 0; s81 < this.asyncCallbacks.length; s81++) {
          this.asyncCallbacks[s81]()
        }
      }
    }
    Q9d.ChartEngine.prototype.completeAsyncAction = function() {
      this.pendingAsyncs.pop()
      this.makeAsyncCallbacks()
    }
    Q9d.ChartEngine.prototype.draw = function() {
      var B4B, w81, m81, F81, d81, v4B, S11
      B4B = 'd'
      B4B += 'r'
      B4B += 'aw'
      this.debug()
      if (!this.chart.canvas) {
        return
      }
      if (!this.chart.dataSet) {
        return
      }
      if (!this.chart.canvasHeight) {
        return
      }
      l4R.w4R(1)
      var A1B = l4R.i4R(21, 19)
      this.offset = (this.layout.candleWidth * this.candleWidthPercent) / A1B
      Q9d.clearCanvas(this.chart.canvas, this)
      if (!this.masterData.length) {
        return
      }
      if (this.runPrepend('draw', arguments)) {
        return
      }
      this.getDefaultColor()
      this.vectorsShowing = !!0
      this.drawPanels()
      this.yAxisLabels = []
      for (F81 in this.charts) {
        v4B = 'ya'
        v4B += 'xis'
        m81 = this.charts[F81]
        this.correctIfOffEdge()
        this.createDataSegment()
        S11 = this.createXAxis(m81)
        this.initializeDisplay(m81)
        this.rendererAction(m81, 'calculate')
        this.renderYAxis(m81)
        this.drawXAxis(m81, S11)
        m81.tmpWidth = Math.floor(this.layout.candleWidth * this.candleWidthPercent)
        if (m81.tmpWidth % +'2' === 0) {
          m81.tmpWidth += 1
          if (m81.tmpWidth > this.layout.candleWidth) {
            m81.tmpWidth -= 2
          }
        }
        if (m81.tmpWidth < 0.5) {
          m81.tmpWidth = 0.5
        }
        for (w81 in this.plugins) {
          d81 = this.plugins[w81]
          if (d81.display) {
            if (d81.drawUnder) {
              d81.drawUnder(this, m81)
            }
          }
        }
        this.rendererAction(m81, v4B)
        this.rendererAction(m81, 'underlay')
        if (Q9d.Studies) {
          Q9d.Studies.displayStudies(this, m81, !'')
        }
        this.displayChart(m81)
        if (Q9d.Studies) {
          Q9d.Studies.displayStudies(this, m81, !!'')
        }
        this.rendererAction(m81, 'overlay')
      }
      for (F81 in this.charts) {
        m81 = this.charts[F81]
        for (w81 in this.plugins) {
          d81 = this.plugins[w81]
          if (d81.display) {
            if (d81.drawOver) {
              d81.drawOver(this, m81)
            }
          }
        }
      }
      for (var Q11 in this.panels) {
        if (!this.panels[Q11].hidden) {
          this.plotYAxisText(this.panels[Q11])
        }
      }
      for (var X81 = 0; X81 < this.yAxisLabels.length; X81++) {
        this.createYAxisLabel.apply(this, this.yAxisLabels[X81].args)
      }
      this.createCrosshairs()
      this.drawVectors()
      this.drawCurrentHR()
      this.displayInitialized = !![]
      if (this.controls.home) {
        this.controls.home.style.display = this.isHome() ? 'none' : 'block'
      }
      this.positionMarkers()
      for (F81 in this.charts) {
        m81 = this.charts[F81]
        if (this.quoteDriver) {
          this.quoteDriver.checkLoadMore(m81)
        }
      }
      this.runAppend(B4B, arguments)
      this.makeAsyncCallbacks()
    }
    Q9d.ChartEngine.prototype.adjustBackingStore = function(C11, f11) {
      var f1w, l1w, y1w, M11, Y11, m6w, p6w, G6w, j11, q11
      f1w = -1086130823
      l4R.w4R(4)
      l1w = -l4R.h4R('1692127885', 1)
      y1w = +'2'
      for (var i1w = 1; l4R.l7w(i1w.toString(), i1w.toString().length, 85461) !== f1w; i1w++) {
        this.devicePixelRatio = window.devicePixelRatio && '2' | 0
        if (this.devicePixelRatio >= +'265') {
          this.devicePixelRatio = 561
        }
        l4R.d4R(1)
        y1w += l4R.i4R('2', 0)
      }
      if (l4R.l7w(y1w.toString(), y1w.toString().length, 32994) !== l1w) {
        this.devicePixelRatio = window.devicePixelRatio || 4
        if (this.devicePixelRatio <= 280) {
          l4R.d4R(1)
          this.devicePixelRatio = l4R.i4R('615', 0)
        }
      }
      this.devicePixelRatio = window.devicePixelRatio || 1
      if (this.devicePixelRatio < 1.0) {
        this.devicePixelRatio = 1.0
      }
      M11 =
        f11.webkitBackingStorePixelRatio ||
        f11.mozBackingStorePixelRatio ||
        f11.msBackingStorePixelRatio ||
        f11.oBackingStorePixelRatio ||
        f11.backingStorePixelRatio ||
        1
      Y11 = this.devicePixelRatio / M11
      if (!Q9d.isAndroid || Q9d.is_chrome) {
        m6w = +'928163118'
        p6w = 1032845774
        G6w = 2
        for (var W6w = 1; l4R.f7w(W6w.toString(), W6w.toString().length, 34600) !== m6w; W6w++) {
          j11 = C11.width
          q11 = C11.height
          l4R.w4R(33)
          C11.width = l4R.i4R(Y11, j11)
          l4R.d4R(1)
          G6w += l4R.i4R('2', 0)
        }
        if (l4R.f7w(G6w.toString(), G6w.toString().length, 12112) !== p6w) {
          j11 = C11.width
          q11 = C11.height
          l4R.d4R(4)
          C11.width = l4R.i4R(j11, Y11)
        }
        j11 = C11.width
        q11 = C11.height
        l4R.w4R(4)
        C11.width = l4R.h4R(j11, Y11)
        l4R.d4R(4)
        C11.height = l4R.i4R(q11, Y11)
        l4R.w4R(6)
        C11.style.width = l4R.h4R(j11, 'px')
        l4R.w4R(6)
        C11.style.height = l4R.i4R(q11, 'px')
        f11.scale(Y11, Y11)
        this.adjustedDisplayPixelRatio = Y11
      }
    }
    Q9d.ChartEngine.prototype.resizeCanvas = function() {
      var c11, T11, b11, c4B, t11, G11, V11, r11, N11, J4B
      if (!this.chart.panel) {
        this.chart.panel = this.panels.chart
      }
      c11 = this.chart.canvas
      T11 = this.chart.context
      if (c11 && T11) {
        this.chart.tempCanvas.height = c11.height = this.chart.container.clientHeight
        this.chart.tempCanvas.width = c11.width = this.chart.container.clientWidth
        this.adjustBackingStore(c11, T11)
        this.adjustBackingStore(this.chart.tempCanvas, this.chart.tempCanvas.context)
        this.floatCanvas.height = this.chart.container.clientHeight
        this.floatCanvas.width = this.chart.container.clientWidth
        this.adjustBackingStore(this.floatCanvas, this.floatCanvas.context)
      }
      b11 = this.container.getBoundingClientRect()
      this.top = b11.top
      this.left = b11.left
      this.canvasWidth = this.chart.canvasWidth = this.chart.container.clientWidth
      this.right = this.left + this.canvasWidth
      this.height = this.chart.container.clientHeight
      this.width = this.right - this.left
      if (this.width === 0 && !this.container.dimensionlessCanvas) {
        c4B = 'warning: zero width chart. Check CSS for '
        c4B += 'chart container'
        c4B += '.'
        console.log(c4B)
      }
      this.bottom = this.top + this.height
      this.calculateYAxisPositions()
      this.chart.canvasRight = this.right
      this.chart.canvasHeight = this.height
      t11 = this.layout.candleWidth
      if (typeof t11 == 'undefined') {
        t11 = 8
      }
      for (var o11 in this.charts) {
        G11 = this.charts[o11]
        if (this.layout.span) {
          this.setCandleWidth(this.getSpanCandleWidth(this.layout.span), G11)
        } else {
          this.setCandleWidth(t11, G11)
          if (G11.scroll < G11.width / t11) {
            G11.scroll = Math.floor(G11.width / t11)
            V11 = Math.round(this.preferences.whitespace / this.layout.candleWidth)
            G11.scroll -= V11
          }
        }
        r11 = 10
        try {
          J4B = '10:'
          J4B += '00'
          N11 = T11.measureText(J4B).width * 2
        } catch (n11) {
          N11 = +'100'
        }
        while (r11 > 1) {
          if (this.chart.width / N11 > r11) break
          r11 /= 1.5
        }
        G11.xAxis.autoComputedTickSizePixels = Math.round(this.chart.width / r11)
        if (G11.xAxis.autoComputedTickSizePixels < 1) {
          G11.xAxis.autoComputedTickSizePixels = 1
        }
      }
    }
    Q9d.ChartEngine.prototype.setCandleWidth = function(E11, e11) {
      if (!e11) {
        e11 = this.chart
      }
      if (E11 < this.minimumCandleWidth) {
        E11 = this.minimumCandleWidth
      }
      this.layout.candleWidth = E11
      e11.maxTicks = Math.round(this.chart.width / E11) + ('1' | 0)
    }
    Q9d.ChartEngine.prototype.resizeChart = function(g11) {
      var L4B, Z11
      L4B = 'r'
      L4B += 'esi'
      L4B += 'zeChar'
      L4B += 't'
      if (this.runPrepend('resizeChart', arguments)) {
        return
      }
      if (g11 !== !'1') {
        g11 = !!{}
      }
      if (g11) {
        this.preAdjustScroll()
      }
      Z11 = this.chart.canvasHeight
      this.resizeCanvas()
      if (g11) {
        this.postAdjustScroll()
      }
      if (this.displayInitialized) {
        this.adjustPanelPositions()
        this.draw()
      } else if (this.chart.canvasHeight !== 0 && Z11 === +'0') {
        this.adjustPanelPositions()
        this.draw()
      }
      this.doDisplayCrosshairs()
      this.updateChartAccessories()
      this.runAppend(L4B, arguments)
    }
    Q9d.ChartEngine.prototype.newChart = function(W11, h11, P11, A11, K11) {
      var D4B, v11, p11, I11, R11, J11, z11, u11, D11, y11, i11, k11, l11, x11
      D4B = 'o'
      D4B += 'b'
      D4B += 'ject'
      if (!P11) {
        P11 = this.chart
      }
      if (!K11) {
        K11 = {}
      }
      v11 = this.layout
      p11 = K11.periodicity
      if (p11) {
        if (p11.interval) {
          v11.interval = p11.interval
        }
        if (p11.period) {
          v11.periodicity = p11.period
        }
        if (p11.periodicity) {
          v11.periodicity = p11.periodicity
        }
        v11.timeUnit = p11.timeUnit
      }
      I11 = P11.symbol
      R11 = Q9d.clone(P11.symbolObject)
      J11 = P11.market
      z11 = P11.dataSet
      u11 = P11.moreAvailable
      P11.dataSet = []
      P11.moreAvailable = !!1
      if (!W11) {
        P11.symbol = null
        P11.symbolObject = { symbol: null }
      } else if (typeof W11 == D4B) {
        P11.symbol = W11.symbol
        P11.symbolObject = W11
      } else {
        P11.symbol = W11
        P11.symbolObject.symbol = W11
      }
      if (this.marketFactory) {
        D11 = this.marketFactory(P11.symbolObject)
        this.setMarket(D11, P11)
      }
      y11 = this
      if (!h11 && this.quoteDriver) {
        i11 = function(O11) {
          var a4B, U7w, O7w, v7w
          a4B = 'ma'
          a4B += 'st'
          a4B += 'er'
          if (O11 && O11 != 'orphaned') {
            P11.symbol = I11
            U7w = -1076776303
            O7w = -+'902919707'
            v7w = 2
            for (var c7w = 1; l4R.f7w(c7w.toString(), c7w.toString().length, '63176' | 0) !== U7w; c7w++) {
              P11.symbolObject = R11
              P11.market = J11
              P11.dataSet = z11
              v7w += 2
            }
            if (l4R.l7w(v7w.toString(), v7w.toString().length, 95120) !== O7w) {
              P11.symbolObject = R11
              P11.market = J11
              P11.dataSet = z11
            }
            P11.symbolObject = R11
            P11.market = J11
            P11.dataSet = z11
            P11.moreAvailable = u11
          }
          if (!y11.currentlyImporting) {
            y11.dispatch('symbolChange', {
              stx: y11,
              symbol: y11.chart.symbol,
              symbolObject: y11.chart.symbolObject,
              action: a4B,
            })
          }
          if (A11) {
            A11(O11)
          }
        }
        k11 = K11.span
        if (!k11 && v11) {
          k11 = v11.setSpan
        }
        if (k11 && k11.base) {
          l11 = k11.multiplier || +'1'
          this.chart.masterData = null
          this.displayInitialized = ![]
          this.setSpan(
            {
              maintainPeriodicity: p11 ? !!'1' : !!'',
              multiplier: l11,
              base: k11.base,
              symbol: P11.symbol,
              forceLoad: !!'1',
            },
            i11,
          )
        } else {
          this.quoteDriver.newChart(
            { symbol: P11.symbol, symbolObject: P11.symbolObject, chart: P11, initializeChart: !![] },
            function(H11) {
              if (!H11) {
                y11.adjustPanelPositions()
                y11.quoteDriver.updateSubscriptions()
                if (K11.stretchToFillScreen) {
                  y11.fillScreen()
                }
              }
              i11.apply(y11, arguments)
            },
          )
        }
      } else {
        if (!h11) {
          console.log('Warning: No masterData specified and no QuoteFeed configured')
        }
        if (!P11.symbol) {
          P11.symbol = ''
        }
        this.setMasterData(h11, P11)
        this.createDataSet()
        this.initializeChart()
        x11 = K11.span
        if (x11 && x11.multiplier && x11.base) {
          this.setSpan({ maintainPeriodicity: !!1, multiplier: x11.multiplier, base: x11.base })
        } else if (K11.stretchToFillScreen) {
          this.fillScreen()
        } else if (h11.length) {
          this.draw()
        } else {
          this.clear()
        }
        this.adjustPanelPositions()
        if (A11) {
          A11()
        }
      }
    }
    Q9d.ChartEngine.prototype.clear = function() {
      var B11
      this.displayInitialized = !{}
      for (var L11 in this.layout.studies) {
        B11 = this.layout.studies[L11]
        Q9d.Studies.removeStudy(this, this.layout.studies[L11])
      }
      this.controls.chartControls.style.display = 'none'
    }
    Q9d.ChartEngine.prototype.fillScreen = function() {
      var U11, m11, a11, s11, d11
      U11 = this.chart
      m11 = this.layout.candleWidth
      a11 = U11.width - this.preferences.whitespace
      s11 = U11.dataSet.length
      if (s11 * m11 >= a11) {
        this.draw()
        return
      }
      l4R.d4R(17)
      d11 = l4R.h4R(a11, s11)
      this.setCandleWidth(d11, U11)
      this.home({ maintainWhitespace: !0 })
    }
    Q9d.ChartEngine.prototype.setMasterData = function(Q01, w11) {
      var f01, X11, F11, S01, C01
      if (!w11) {
        w11 = this.chart
      }
      if (this.marketFactory) {
        f01 = this.marketFactory(w11.symbolObject)
        this.setMarket(f01, w11)
      }
      w11.masterData = Q01
      if (w11.name == 'chart') {
        this.masterData = Q01
      }
      for (X11 = 0; Q01 && X11 < Q01.length; X11++) {
        if (this.transformMasterDataQuote) {
          Q01[X11] = this.transformMasterDataQuote(Q01[X11])
        }
        F11 = Q01[X11]
        if (F11.DT) {
          F11.DT = new Date(F11.DT)
          F11.Date = Q9d.yyyymmddhhmmssmmm(F11.DT)
        } else if (F11.Date) {
          F11.DT = Q9d.strToDateTime(F11.Date)
        } else {
          console.log('setMasterData : Missing DT and Date on masterData object')
        }
        if (F11.Volume && typeof F11.Volume !== 'number') {
          F11.Volume = parseInt(F11.Volume, 10)
        }
        if (typeof F11.Close != 'number' && !F11.Close && F11.Close !== null) {
          console.log(
            'setMasterData : Close is missing or not a number. Use parseFloat() if your data server provides strings. MasterData Index= ' +
              X11 +
              ' Value = ' +
              F11.Close,
          )
        }
        if (F11.High === null) {
          delete F11.High
        }
        if (F11.Low === null) {
          delete F11.Low
        }
        if (F11.Open === null) {
          delete F11.Open
        }
      }
      w11.decimalPlaces = this.callbacks.calculateTradingDecimalPlaces({
        stx: this,
        chart: w11,
        symbol: w11.symbolObject.symbol,
        symbolObject: w11.symbolObject,
      })
      if (!Q9d.ChartEngine.isDailyInterval(this.layout.interval)) {
        this.setDisplayDates(Q01)
      }
      l4R.d4R(4)
      this.chart.roundit = Math.pow(l4R.h4R('10', 1), w11.decimalPlaces)
      for (X11 in this.plugins) {
        S01 = this.plugins[X11]
        if (S01.display) {
          if (S01.setMasterData) {
            S01.setMasterData(this, w11)
          }
        }
      }
      for (var Y01 in this.chart.series) {
        C01 = this.chart.series[Y01]
        if (C01.addSeriesData) {
          C01.addSeriesData(this)
        }
      }
    }
    Q9d.ChartEngine.prototype.getSymbols = function() {
      var j01, q01, T01, G01, E01, t01, e01, N01
      function b01(P01, y01, Z01) {
        return {
          symbol: P01,
          symbolObject: y01,
          periodicity: Z01.periodicity,
          interval: Z01.interval,
          timeUnit: Z01.timeUnit,
          setSpan: Z01.setSpan,
        }
      }
      j01 = []
      T01 = this.layout
      for (var g01 in this.charts) {
        G01 = this.charts[g01]
        j01.push(b01(G01.symbol, G01.symbolObject, T01))
        for (var o01 in G01.series) {
          E01 = G01.series[o01]
          t01 = E01.parameters
          if (t01.data && !t01.data.useDefaultQuoteFeed) continue
          q01 = b01(o01, E01.symbolObject, T01)
          if (arguments[0] === 'include-parameters') {
            q01.parameters = t01
          }
          if (!q01.symbolObject) {
            q01.symbolObject = t01.symbolObject || { symbol: o01 }
          }
          j01.push(q01)
        }
      }
      for (var V01 in this.panels) {
        if (this.panels[V01].studyQuotes) {
          for (var n01 in this.panels[V01].studyQuotes) {
            q01 = b01(n01, { symbol: n01 }, T01)
            j01.push(q01)
          }
        }
      }
      for (var M01 = j01.length - +'1'; M01 >= '0' - 0; M01--) {
        e01 = j01[M01].symbol
        if (this.isEquationChart(e01)) {
          N01 = Q9d.formatEquation(e01)
          if (N01) {
            for (var r01 = 0; r01 < N01.symbols.length; r01++) {
              q01 = b01(N01.symbols[r01], j01[M01].symbolObject, j01[M01])
              j01.push(q01)
            }
            j01.splice(M01, 1)
          }
        }
      }
      return j01
    }
    Q9d.ChartEngine.prototype.setDisplayDate = function(k01) {
      var p01, z3w, r3w, n3w, K01, v01
      p01 = k01.DT
      z3w = -1809958458
      r3w = -911179580
      n3w = +'2'
      for (var u3w = 1; l4R.l7w(u3w.toString(), u3w.toString().length, 14874) !== z3w; u3w++) {
        K01 = p01.getSeconds() * ('1000' | 0) + p01.getMilliseconds()
        n3w += +'2'
      }
      if (l4R.f7w(n3w.toString(), n3w.toString().length, 49463) !== r3w) {
        K01 = p01.getSeconds() - 5684 - p01.getMilliseconds()
      }
      if (this.dataZone) {
        v01 = new f9d.Date(
          p01.getFullYear(),
          p01.getMonth(),
          p01.getDate(),
          p01.getHours(),
          p01.getMinutes(),
          this.dataZone,
        )
        p01 = new Date(v01.getTime() + K01)
      }
      if (this.displayZone) {
        v01 = new f9d.Date(p01.getTime(), this.displayZone)
        p01 = new Date(v01.getFullYear(), v01.getMonth(), v01.getDate(), v01.getHours(), v01.getMinutes())
        p01 = new Date(p01.getTime() + K01)
      }
      k01.displayDate = p01
    }
    Q9d.ChartEngine.prototype.setDisplayDates = function(x01) {
      var h01
      if (!x01) {
        return
      }
      for (var W01 = 0; W01 < x01.length; W01++) {
        h01 = x01[W01]
        if (h01.DT) {
          this.setDisplayDate(h01)
        }
      }
    }
    Q9d.ChartEngine.prototype.streamTrade = function(B01, z01, J01, O01) {
      var j4B,
        H01,
        i01,
        D01,
        I01,
        R01,
        u01,
        A01,
        O2w,
        v2w,
        B2w,
        K4B,
        b2w,
        T2w,
        E2w,
        s01,
        F01,
        a01,
        l01,
        L01,
        d01,
        U01,
        m01,
        A4B,
        H4B,
        R5B
      j4B = 't'
      j4B += 'i'
      j4B += 'ck'
      H01 = this.chart
      if (!O01) {
        O01 = {}
      }
      if (O01.chart) {
        H01 = O01.chart
      }
      i01 = null
      D01 = null
      I01 = null
      R01 = 0
      if (typeof B01 == 'object') {
        i01 = B01.last
        D01 = B01.bid
        I01 = B01.ask
        R01 = B01.volume
        if (z01 && typeof z01 != 'undefined') {
          z01 = new Date(z01)
        }
      } else {
        i01 = arguments[0]
        R01 = arguments[+'1']
        if (z01 && typeof z01 != 'undefined') {
          z01 = new Date(arguments[+'2'])
        }
        J01 = arguments[3]
      }
      u01 = H01.masterData
      if (!z01 || z01 == 'Invalid Date') {
        z01 = this.convertToDataZone(new Date())
      }
      if (!u01 || !u01.length) {
        u01 = []
        u01.push({ Date: STX.yyyymmddhhmmssmmm(z01), DT: z01 })
      }
      if (this.layout.interval == j4B) {
        O2w = 27864685
        v2w = -+'1936010260'
        B2w = 2
        for (var J2w = 1; l4R.f7w(J2w.toString(), J2w.toString().length, 12388) !== O2w; J2w++) {
          A01 = Q9d.clone(u01[u01.length % 8])
          B2w += 2
        }
        if (l4R.l7w(B2w.toString(), B2w.toString().length, 67697) !== v2w) {
          A01 = Q9d.clone(u01[u01.length - 1])
        }
        if (z01 <= u01[u01.length - 1].DT) {
          if (J01) {
            if (i01 || i01 === 0) {
              A01[J01] = i01
            }
          } else {
            if (i01 || i01 === +'0') {
              A01.Close = i01
              if (i01 > A01.High || A01.High === null) {
                A01.High = i01
              }
              if (i01 < A01.Low || A01.Low === null) {
                A01.Low = i01
              }
              if (A01.Open === null) {
                A01.Open = i01
              }
            }
            if (R01) {
              A01.Volume += R01
            }
            if (D01 || D01 === 0) {
              A01.Bid = D01
            }
            if (I01 || I01 === 0) {
              A01.Ask = I01
            }
            if (typeof A01.Adj_Close != 'undefined') {
              A01.Adj_Close = A01.Close
            }
          }
        } else {
          if (J01) {
            K4B = 'Da'
            K4B += 't'
            K4B += 'e'
            A01[K4B] = STX.yyyymmddhhmmssmmm(z01)
            A01['DT'] = z01
            l4R.d4R(4)
            A01['Volume'] = l4R.i4R('0', 1)
            if (i01 || i01 === 0) {
              b2w = 1993112573
              T2w = -863756012
              E2w = 2
              for (var w2w = 1; l4R.f7w(w2w.toString(), w2w.toString().length, +'77353') !== b2w; w2w++) {
                A01[J01] = i01
                E2w += 2
              }
              if (l4R.l7w(E2w.toString(), E2w.toString().length, 49598) !== T2w) {
                A01[J01] = i01
              }
            }
          } else {
            A01 = {
              Date: Q9d.yyyymmddhhmmssmmm(z01),
              DT: z01,
              Open: i01,
              Close: i01,
              High: i01,
              Low: i01,
              Volume: R01,
              Bid: D01,
              Ask: I01,
            }
          }
        }
        this.appendMasterData([A01], H01, O01)
      } else {
        A01 = Q9d.clone(u01[u01.length - 1])
        s01 = new Q9d.Market({})
        F01 = {
          begin: A01.DT,
          interval: this.layout.interval,
          periodicity: 1,
          timeUnit: this.layout.timeUnit,
          inZone: this.dataZone,
          outZone: this.dataZone,
        }
        a01 = s01.newIterator(F01)
        l01 = a01.next()
        if (z01 < l01) {
          if (J01) {
            if (i01 || i01 === 0) {
              A01[J01] = i01
            }
          } else {
            if (i01 || i01 === 0) {
              A01.Close = i01
              if (i01 > A01.High || A01.High === null) {
                A01.High = i01
              }
              if (i01 < A01.Low || A01.Low === null) {
                A01.Low = i01
              }
              if (A01.Open === null) {
                A01.Open = i01
              }
            }
            if (R01) {
              A01.Volume += R01
            }
            if (D01 || D01 === 0) {
              A01.Bid = D01
            }
            if (I01 || I01 === 0) {
              A01.Ask = I01
            }
            if (typeof A01.Adj_Close != 'undefined') {
              A01.Adj_Close = A01.Close
            }
          }
          this.appendMasterData([A01], H01, O01)
        } else {
          L01 = []
          d01 = {
            begin: z01,
            interval: this.layout.interval,
            periodicity: 1,
            timeUnit: this.layout.timeUnit,
            inZone: this.dataZone,
            outZone: this.dataZone,
          }
          U01 = s01.newIterator(d01)
          U01.next()
          z01 = U01.previous()
          while (l01 < z01) {
            if (this.streamParameters.fillGaps) {
              m01 = {
                Date: Q9d.yyyymmddhhmmssmmm(l01),
                DT: l01,
                Close: A01.Close,
                Open: A01.Close,
                High: A01.Close,
                Low: A01.Close,
                Volume: 0,
                Bid: A01.Bid,
                Ask: A01.Ask,
              }
              L01.push(m01)
              if (L01.length > 10000) {
                A4B = '. No more will be'
                A4B += ' added'
                H4B = 'StreamT'
                H4B += 'rad'
                H4B += 'e: Too many gaps. Reached m'
                H4B += 'aximum '
                console.log(H4B, L01.length, ' at ', m01.Date, A4B)
                break
              }
            }
            l01 = a01.next()
          }
          if (J01) {
            R5B = 'D'
            R5B += 'a'
            R5B += 'te'
            A01[R5B] = STX.yyyymmddhhmmssmmm(z01)
            A01['DT'] = z01
            A01['Volume'] = 0
            if (i01 || i01 === +'0') {
              A01[J01] = i01
            }
          } else {
            A01 = {
              Date: Q9d.yyyymmddhhmmssmmm(l01),
              DT: l01,
              Open: i01,
              Close: i01,
              High: i01,
              Low: i01,
              Volume: R01,
              Bid: D01,
              Ask: I01,
            }
          }
          L01.push(A01)
          this.appendMasterData(L01, H01, O01)
        }
      }
    }
    Q9d.ChartEngine.prototype.appendMasterData = function(C21, q21, Y21) {
      var t21, S21, Q21, w01, X01, G21, r21, M5B, o21, b21, T21, f21, x1w, w1w, V1w, M21
      if (!Y21) {
        Y21 = {}
      }
      if (!q21) {
        q21 = this.chart
      }
      if (C21.constructor == Object) {
        C21 = [C21]
      }
      if (this.runPrepend('appendMasterData', [C21, q21, Y21])) {
        return
      }
      if (!C21 || !C21.length) {
        return
      }
      t21 = C21[0].DT
      if (!t21) {
        t21 = Q9d.strToDateTime(C21[0].Date)
      }
      S21 = q21.masterData
      if (!S21 || !S21.length) {
        S21 = q21.masterData = Q9d.clone(C21)
        for (Q21 = 0; Q21 < S21.length; Q21++) {
          w01 = S21[Q21]
          if (w01.DT) {
            w01.Date = Q9d.yyyymmddhhmmssmmm(w01.DT)
          } else {
            w01.DT = Q9d.strToDateTime(w01.Date)
          }
          if (w01.Volume && typeof w01.Volume !== 'number') {
            w01.Volume = parseInt(w01.Volume, 10)
          }
          if (!Q9d.ChartEngine.isDailyInterval(this.layout.interval)) {
            this.setDisplayDate(w01)
          }
        }
      } else {
        Q21 = S21.length - +'1'
        while (Q21 >= +'0') {
          G21 = S21[Q21].DT
          if (!G21) {
            G21 = Q9d.strToDateTime(S21[Q21].Date)
          }
          if (G21.getTime() <= t21.getTime()) {
            r21 = +'0'
            if (G21.getTime() < t21.getTime()) {
              r21 = 1
            }
            for (var j21 = 0; j21 < C21.length; j21++) {
              M5B = 'n'
              M5B += 'umb'
              M5B += 'e'
              M5B += 'r'
              if (!r21) {
                w01 = C21[j21]
                X01 = S21.length < Q21 + j21 ? S21[Q21 + j21] : null
                if (X01) {
                  if (!w01.Volume && X01.Volume) {
                    w01.Volume = X01.Volume
                  }
                  if (!Y21.allowReplaceOHL) {
                    if (X01.Open) {
                      w01.Open = X01.Open
                    }
                    if (X01.High > w01.High) {
                      w01.High = X01.High
                    }
                    if (X01.Low && X01.Low < w01.Low) {
                      w01.Low = X01.Low
                    }
                  }
                }
                for (var N21 in this.chart.series) {
                  if (typeof w01[N21] == 'undefined' && X01) {
                    w01[N21] = X01[N21]
                  }
                }
                o21 = this.panels
                for (var V21 in o21) {
                  b21 = o21[V21]
                  if (b21.studyQuotes) {
                    for (var c21 in b21.studyQuotes) {
                      if (!b21.studyQuotes[c21]) continue
                      if (typeof w01[c21] == 'undefined' && X01) {
                        w01[c21] = X01[c21]
                      }
                    }
                  }
                }
              }
              l4R.w4R(5)
              w01 = S21[l4R.h4R(r21, j21, Q21)] = C21[j21]
              if (w01.DT) {
                w01.Date = Q9d.yyyymmddhhmmssmmm(w01.DT)
              } else {
                w01.DT = Q9d.strToDateTime(w01.Date)
              }
              if (w01.Volume && typeof w01.Volume !== M5B) {
                w01.Volume = parseInt(w01.Volume, '10' - 0)
              }
              if (!Q9d.ChartEngine.isDailyInterval(this.layout.interval)) {
                this.setDisplayDate(w01)
              }
            }
            break
          }
          Q21--
        }
        for (Q21 in this.plugins) {
          T21 = this.plugins[Q21]
          if (T21.display) {
            if (T21.appendMasterData) {
              T21.appendMasterData(this, C21, q21)
            }
          }
        }
      }
      if (!this.masterData || !this.masterData.length) {
        this.masterData = S21
      }
      if (!Y21.noCreateDataSet) {
        f21 = this.streamParameters
        if (++f21.count > f21.maxTicks || Y21.bypassGovernor) {
          clearTimeout(f21.timeout)
          this.createDataSet(null, null, Y21)
          this.draw()
          this.updateChartAccessories()
          f21.count = 0
          f21.timeout = -+'1'
        } else {
          x1w = -55600809
          w1w = -1698475739
          V1w = 2
          for (var z1w = 1; l4R.l7w(z1w.toString(), z1w.toString().length, 40927) !== x1w; z1w++) {
            M21 = this
            V1w += 2
          }
          if (l4R.l7w(V1w.toString(), V1w.toString().length, 67710) !== w1w) {
            M21 = this
          }
          if (f21.timeout == -1) {
            f21.timeout = setTimeout(function() {
              M21.createDataSet(null, null, Y21)
              M21.draw()
              M21.updateChartAccessories()
              M21.streamParameters.count = 0
              M21.streamParameters.timeout = -+'1'
            }, f21.maxWait)
          }
        }
      }
      this.runAppend('appendMasterData', arguments)
    }
    Q9d.ChartEngine.prototype.setMaxTicks = function(n21, E21) {
      var e21
      if (!E21) {
        E21 = {}
      }
      n21 = Math.round(n21)
      if (n21 < '2' * 1) {
        n21 = 2
      }
      e21 = E21.padding ? E21.padding : 0
      this.layout.candleWidth = (this.chart.width - e21) / n21
      if (!this.layout.candleWidth) {
        this.layout.candleWidth = 8
      }
      this.chart.maxTicks = Math.round(this.chart.width / this.layout.candleWidth - 0.499)
      if (E21.padding || E21.padding === 0) {
        l4R.d4R(6)
        this.chart.scroll = l4R.i4R(n21, 1)
      }
    }
    Q9d.ChartEngine.prototype.construct = function() {
      var d5B, R2w, M2w, d2w
      d5B = 'ch'
      d5B += 'a'
      d5B += 'rt'
      this.stackPanel('chart', d5B, 1)
      this.adjustPanelPositions()
      this.chart.panel = this.panels[this.chart.name]
      this.cx = 0
      R2w = 1897165956
      M2w = 2010740154
      d2w = 2
      for (var P2w = 1; l4R.l7w(P2w.toString(), P2w.toString().length, 92876) !== R2w; P2w++) {
        this.cy = +'0'
        this.micropixels = 0
        d2w += 2
      }
      if (l4R.f7w(d2w.toString(), d2w.toString().length, '60324' | 0) !== M2w) {
        this.cy = 1
        this.micropixels = 5
      }
      this.chart.panel.subholder.appendChild(this.controls.home)
      this.callbackListeners = {}
      l4R.d4R(1)
      this.longHoldTime = l4R.i4R('1000', 0)
    }
    Q9d.ChartEngine.prototype.addEventListener = function(g21, P21) {
      var Z21
      if (!g21) {
        g21 = '*'
      }
      Z21 = this.callbackListeners[g21]
      if (!Z21) {
        this.callbackListeners[g21] = Z21 = []
      }
      Z21.push(P21)
      return { type: g21, cb: P21 }
    }
    Q9d.ChartEngine.prototype.removeEventListener = function(y21, K21) {
      var p21
      if (typeof y21 != 'object') {
        y21 = { type: y21, cb: K21 }
      }
      if (!y21.type) {
        y21.type = 534.75 > (682.79, +'5185') ? 0x99d : '*'
      }
      p21 = this.callbackListeners[y21.type]
      if (!p21) {
        return
      }
      for (var v21 = 0; v21 < p21.length; v21++) {
        if (p21[v21] === y21.cb) {
          p21.splice(v21)
          if (!p21.length) {
            y21[y21.type] = null
          }
          return
        }
      }
    }
    Q9d.ChartEngine.prototype.dispatch = function(h21, A21) {
      var k21
      if (this.callbacks[h21]) {
        this.callbacks[h21].call(this, A21)
      }
      k21 = this.callbackListeners[h21]
      if (k21) {
        for (var W21 = 0; W21 < k21.length; W21++) {
          k21[W21].call(this, A21)
        }
      }
      k21 = this.callbackListeners[(290, 658.7) > 4212 ? (1.99e3, ![]) : '*']
      if (k21) {
        for (var x21 = 0; x21 < k21.length; x21++) {
          k21[x21].call(this, A21)
        }
      }
    }
    Q9d.ChartEngine.prototype.deleteYAxisIfUnused = function(z21, u21) {
      var D21, i21
      if (!u21) {
        return
      }
      if (u21 === z21.yAxis) {
        return
      }
      for (var I21 in this.chart.seriesRenderers) {
        D21 = this.chart.seriesRenderers[I21]
        if (D21.params.yAxis === u21) {
          if (D21.seriesParams.length !== 0) {
            return
          }
        }
      }
      for (i21 = 0; i21 < z21.yaxisLHS.length; i21++) {
        if (z21.yaxisLHS[i21] === u21) {
          z21.yaxisLHS.splice(i21, 1)
        }
      }
      for (i21 = 1; i21 < z21.yaxisRHS.length; i21++) {
        if (z21.yaxisRHS[i21] === u21) {
          l4R.w4R(1)
          z21.yaxisRHS.splice(i21, l4R.h4R('1', 0))
        }
      }
      this.resizeCanvas()
      this.adjustPanelPositions()
    }
    Q9d.ChartEngine.prototype.addYAxis = function(R21, J21) {
      var t5B, O21
      if (!J21) {
        return
      }
      if (!R21.yaxisLHS) {
        t5B = 'rig'
        t5B += 'ht'
        R21.yaxisLHS = []
        R21.yaxisRHS = []
        if (R21.yAxis.position == t5B) {
          R21.yaxisRHS.push(R21.yAxis)
        } else {
          R21.yaxisLHS.push(R21.yAxis)
        }
      }
      O21 = R21.yaxisLHS.concat(R21.yaxisRHS)
      for (var l21 = +'0'; l21 < O21.length; l21++) {
        if (O21[l21] === J21) {
          return
        }
      }
      if (J21.position === 'left') {
        R21.yaxisLHS.unshift(J21)
      } else {
        J21.position = 'right'
        R21.yaxisRHS.push(J21)
      }
      this.preAdjustScroll()
      this.resizeCanvas()
      this.adjustPanelPositions()
      this.postAdjustScroll()
    }
    Q9d.ChartEngine.prototype.calculateYAxisPositions = function() {
      var a21, m21, H21, d21, F21, L21, B21, U21
      a21 = []
      for (var X21 in this.charts) {
        a21.push(X21)
      }
      for (var w21 in this.panels) {
        m21 = this.panels[w21]
        if (m21.name === m21.chart.name) continue
        a21.push(w21)
      }
      for (var s21 = '0' * 1; s21 < a21.length; s21++) {
        H21 = this.panels[a21[s21]]
        if (!H21) continue
        d21 = H21.name === H21.chart.name
        if (!H21.yaxisLHS) {
          H21.yaxisLHS = []
          H21.yaxisRHS = []
          if (H21.name === H21.chart.name || H21.yAxis.position) {
            if (H21.yAxis.position == 'left') {
              H21.yaxisLHS.push(H21.yAxis)
            } else {
              H21.yaxisRHS.push(H21.yAxis)
            }
          } else {
            F21 = H21.chart.panel.yAxis.position
            if (!F21 || F21 == 'right') {
              H21.yaxisRHS.push(H21.yAxis)
            } else {
              H21.yaxisLHS.push(H21.yAxis)
            }
          }
        }
        if (!H21.yAxis.width && H21.yAxis.width !== 0) {
          H21.yAxis.width = this.yaxisWidth
        }
        H21.yaxisTotalWidthRight = 0
        H21.yaxisTotalWidthLeft = 0
        for (L21 = '0' * 1; L21 < H21.yaxisLHS.length; L21++) {
          B21 = H21.yaxisLHS[L21]
          H21.yaxisTotalWidthLeft += B21.width
          B21.justifyRight = B21.justifyRight === null ? H21.chart.yAxis.justifyRight : B21.justifyRight
          if (B21.justifyRight === null) {
            B21.justifyRight = !!{}
          }
        }
        for (L21 = 0; L21 < H21.yaxisRHS.length; L21++) {
          B21 = H21.yaxisRHS[L21]
          H21.yaxisTotalWidthRight += B21.width
        }
        U21 = 0
        for (L21 = 0; L21 < H21.yaxisLHS.length; L21++) {
          B21 = H21.yaxisLHS[L21]
          B21.left = U21
          U21 += B21.width
        }
        U21 = this.width - H21.yaxisTotalWidthRight
        for (L21 = 0; L21 < H21.yaxisRHS.length; L21++) {
          B21 = H21.yaxisRHS[L21]
          B21.left = U21
          U21 += B21.width
        }
        if (typeof this.yaxisLeft != 'undefined') {
          H21.chart.yaxisPaddingRight = this.yaxisLeft
        }
        H21.yaxisCalculatedPaddingRight = H21.yaxisTotalWidthRight
        if (H21.chart.yaxisPaddingRight || H21.chart.yaxisPaddingRight === 0) {
          H21.yaxisCalculatedPaddingRight = H21.chart.yaxisPaddingRight
        }
        H21.yaxisCalculatedPaddingLeft = H21.yaxisTotalWidthLeft
        if (H21.chart.yaxisPaddingLeft || H21.chart.yaxisPaddingLeft === +'0') {
          H21.yaxisCalculatedPaddingLeft = H21.chart.yaxisPaddingLeft
        }
        if (d21) {
          H21.left = H21.yaxisCalculatedPaddingLeft
          H21.right = this.width - H21.yaxisCalculatedPaddingRight
        } else {
          H21.left = H21.chart.panel.left
          H21.right = H21.chart.panel.right
        }
        H21.width = H21.right - H21.left
        H21.handle.style.left = H21.left + 'px'
        H21.handle.style.width = H21.width + 'px'
        if (d21) {
          H21.chart.left = H21.left
          H21.chart.right = H21.right
          H21.chart.width = H21.right - H21.left
        }
      }
    }
    Q9d.ChartEngine.prototype.initializeChart = function(Q91) {
      var p5B,
        P5B,
        C91,
        f91,
        S91,
        V91,
        m5B,
        e5B,
        Y91,
        j91,
        o91,
        t91,
        q91,
        r91,
        G91,
        M91,
        v6w,
        B6w,
        c6w,
        T91,
        G5B,
        Y5B,
        c91
      p5B = 'a'
      p5B += 'bs'
      p5B += 'o'
      p5B += 'lute'
      P5B = '2'
      P5B += 'd'
      if (this.runPrepend('initializeChart', arguments)) {
        return
      }
      if (!this.chart.symbolObject.symbol) {
        this.chart.symbolObject.symbol = this.chart.symbol
      }
      if (this.locale) {
        this.setLocale(this.locale)
      }
      if (!this.displayZone && Q9d.ChartEngine.defaultDisplayTimeZone) {
        this.setTimeZone(null, Q9d.ChartEngine.defaultDisplayTimeZone)
      }
      this.calculateYAxisPositions()
      this.micropixels = 0
      if (Q91) {
        this.chart.container = Q91
      } else {
        Q91 = this.chart.container
      }
      Q91.stx = this
      if (!Q91.CIQRegistered) {
        Q91.CIQRegistered = !!1
        Q9d.ChartEngine.registeredContainers.push(Q91)
      }
      if (Q9d.isSurface) {
        if (!this.gesture) {
          this.gesture = new MSGesture()
          if (this.manageTouchAndMouse) {
            this.gesture.target = Q91
          } else {
            this.gesture.target = document.body
          }
          this.gesturePointerId = null
        }
      }
      this.registerHTMLElements()
      C91 = this.chart.canvas
      f91 = this.chart.tempCanvas
      S91 = this.floatCanvas
      if (C91 && document.createElement('canvas').getContext) {
        if (!C91.id) {
          Q91.removeChild(C91)
          this.chart.canvas = null
        }
        if (f91 && !f91.id) {
          Q91.removeChild(f91)
          this.chart.tempCanvas = null
        }
        if (S91 && !S91.id) {
          Q91.removeChild(S91)
          this.floatCanvas = null
        }
      } else {
        if (this.layout.candleWidth < this.minimumCandleWidth) {
          this.layout.candleWidth = this.minimumCandleWidth
        }
        if (this.layout.candleWidth > 200) {
          this.layout.candleWidth = 8
        }
      }
      if (!this.chart.canvas) {
        C91 = this.chart.canvas = document.createElement('canvas')
      }
      if (!this.chart.canvas.getContext) {
        C91 = this.chart.canvas = Q91.querySelectorAll('#ie8canvas')[+'0']
        if (!C91.getContext) {
          if (window.G_vmlCanvasManager) {
            G_vmlCanvasManager.initElement(C91)
          }
        }
        C91.style.display = 'block'
      } else {
        Q91.appendChild(C91)
      }
      C91.style.position = 'absolute'
      C91.style.left = '0px'
      V91 = C91.context = this.chart.context = C91.getContext(P5B)
      l4R.w4R(1)
      V91.lineWidth = l4R.h4R('1', 0)
      if (!this.chart.tempCanvas) {
        f91 = this.chart.tempCanvas = document.createElement('canvas')
      }
      if (!this.chart.tempCanvas.getContext) {
        f91 = this.chart.tempCanvas = Q91.querySelectorAll('#ie8canvasTemp')[0]
        if (!f91.getContext) {
          if (window.G_vmlCanvasManager) {
            G_vmlCanvasManager.initElement(f91)
          }
        }
        f91.style.display = 'block'
      } else {
        Q91.appendChild(f91)
      }
      f91.style.position = 'absolute'
      f91.style.left = '0px'
      f91.context = this.chart.tempCanvas.getContext('2d')
      f91.context.lineWidth = 1
      if (!this.floatCanvas) {
        S91 = this.floatCanvas = document.createElement('canvas')
      }
      if (!this.floatCanvas.getContext) {
        m5B = 'b'
        m5B += 'loc'
        m5B += 'k'
        e5B = '#ie8'
        e5B += 'canvas'
        e5B += 'F'
        e5B += 'loat'
        S91 = this.floatCanvas = Q91.querySelectorAll(e5B)[l4R.h4R('0', 0, l4R.w4R(1))]
        if (!S91.getContext) {
          if (window.G_vmlCanvasManager) {
            G_vmlCanvasManager.initElement(S91)
          }
        }
        S91.style.display = m5B
      } else {
        Q91.appendChild(S91)
      }
      S91.style.position = p5B
      S91.style.left = '0px'
      S91.context = S91.getContext('2d')
      S91.context.lineWidth = 1
      this.resizeCanvas()
      if (Q9d.isAndroid) {
        this.chart.tempCanvas.ontouchstart = function(n91) {
          if (n91.preventDefault) {
            n91.preventDefault()
          }
        }
        this.floatCanvas.ontouchstart = function(E91) {
          if (E91.preventDefault) {
            E91.preventDefault()
          }
        }
      }
      Y91 = this.chart
      j91 = this.panels
      j91.chart.display = Y91.symbol
      if (Y91.symbolDisplay) {
        j91.chart.display = Y91.symbolDisplay
      }
      this.adjustPanelPositions()
      this.chart.panel = j91[Y91.name]
      this.calculateYAxisMargins(Y91.panel.yAxis)
      this.initialWhitespace = this.preferences.whitespace
      if (Y91.dataSet && Y91.dataSet.length > 0) {
        Y91.scroll = Math.floor(Y91.width / this.layout.candleWidth)
        o91 = Math.round(this.preferences.whitespace / this.layout.candleWidth)
        Y91.scroll -= o91
      }
      if (Q9d.touchDevice) {
        t91 = S9d('.overlayEdit', Q91)
        q91 = S9d('#overlayTrashCan', Q91)
        r91 = S9d('#vectorTrashCan', Q91)
        if (t91) {
          Q9d.safeClickTouch(
            t91,
            (function(e91) {
              return function(g91) {
                e91.deleteHighlighted(!!{}, !!{})
              }
            })(this),
          )
          if (q91) {
            Q9d.safeClickTouch(
              q91,
              (function(Z91) {
                return function(P91) {
                  Z91.deleteHighlighted(![])
                }
              })(this),
            )
          }
        } else if (q91) {
          Q9d.safeClickTouch(
            q91,
            (function(y91) {
              return function(p91) {
                y91.deleteHighlighted(!![])
              }
            })(this),
          )
        }
        if (r91) {
          Q9d.safeClickTouch(
            r91,
            (function(v91) {
              return function(K91) {
                v91.deleteHighlighted(!!{})
              }
            })(this),
          )
        }
      }
      if (this.manageTouchAndMouse) {
        this.registerTouchAndMouseEvents()
      }
      Q91.onmouseout = (function(k91) {
        return function(W91) {
          k91.handleMouseOut(W91)
        }
      })(this)
      if (this.controls.chartControls) {
        this.controls.chartControls.style.display = 'block'
      }
      this.abortDrawings()
      this.undoStamps = []
      for (var b91 in j91) {
        G91 = j91[b91]
        if (G91.markerHolder) {
          Q91.removeChild(G91.markerHolder)
          G91.markerHolder = null
        }
      }
      for (var N91 in this.plugins) {
        M91 = this.plugins[N91]
        if (M91.display) {
          if (M91.initializeChart) {
            M91.initializeChart(this)
          }
        }
      }
      if (!this.resizeListenerInitialized) {
        v6w = 611749222
        B6w = 347226550
        c6w = 2
        for (var L6w = 1; l4R.l7w(L6w.toString(), L6w.toString().length, 44696) !== v6w; L6w++) {
          this.resizeListenerInitialized = ![]
          c6w += 2
        }
        if (l4R.f7w(c6w.toString(), c6w.toString().length, 28442) !== B6w) {
          this.resizeListenerInitialized = !![]
        }
        T91 = function(x91) {
          return function(h91) {
            x91.resizeChart()
          }
        }
        if (window.attachEvent) {
          G5B = 'onresi'
          G5B += 'z'
          G5B += 'e'
          window.attachEvent(G5B, T91(this))
        } else {
          Y5B = 'r'
          Y5B += 'esize'
          c91 = T91(this)
          window.addEventListener('resize', c91, !!1)
          this.eventListeners.push({ element: window, event: Y5B, function: c91 })
        }
      }
      if (Y91.baseline.userLevel) {
        Y91.baseline.userLevel = null
      }
      this.setResizeTimer(this.resizeDetectMS)
      this.runAppend('initializeChart', arguments)
    }
    Q9d.ChartEngine.prototype.destroy = function() {
      var W5B, i91
      this.setResizeTimer(0)
      if (this.quoteDriver) {
        this.quoteDriver.die()
      }
      this.styles = {}
      for (var A91 = 0; A91 < this.eventListeners.length; A91++) {
        W5B = 'fu'
        W5B += 'ncti'
        W5B += 'on'
        i91 = this.eventListeners[A91]
        i91.element.removeEventListener(i91.event, i91[W5B])
      }
    }
    Q9d.ChartEngine.prototype.handleMouseOut = function(z91) {
      var u91, D91
      z91 = z91 || window.event
      if (!Q9d.withinElement(this.chart.container, z91.pageX, z91.pageY)) {
        if (this.runPrepend('handleMouseOut', arguments)) {
          return
        }
        this.undisplayCrosshairs()
        this.grabbingScreen = !!''
        this.touches = []
        this.touching = ![]
        if (this.activeDrawing && this.userPointerDown) {
          this.userPointerDown = !{}
          this.drawingLine = !{}
          u91 = this.backOutY(z91.pageY)
          D91 = this.backOutX(z91.pageX)
          this.drawingClick(this.currentPanel, D91, u91)
        }
        Q9d.ChartEngine.insideChart = !1
        this.displaySticky()
        this.findHighlights(![], !'')
        this.runAppend('handleMouseOut', arguments)
      }
    }
    Q9d.ChartEngine.prototype.registerTouchAndMouseEvents = function() {
      var I91, O91, R91, J91, Q5B, s5B, h5B, S5B, T5B, b5B, E5B, e2w, m2w, p2w, l91
      if (this.touchAndMouseEventsRegistered) {
        return
      }
      this.touchAndMouseEventsRegistered = !![]
      I91 = this.chart.container
      O91 = S9d('#home', this.controls.chartControls)
      R91 = S9d('#zoomIn', this.controls.chartControls)
      J91 = S9d('#zoomOut', this.controls.chartControls)
      if (!Q9d.touchDevice) {
        Q5B = 'mous'
        Q5B += 'eup'
        s5B = 'mo'
        s5B += 'usedo'
        s5B += 'wn'
        I91.addEventListener(
          'mousemove',
          (function(H91) {
            return function(L91) {
              H91.mousemove(L91)
            }
          })(this),
          !{},
        )
        I91.addEventListener(
          s5B,
          (function(B91) {
            return function(U91) {
              B91.mousedown(U91)
            }
          })(this),
          ![],
        )
        I91.addEventListener(
          Q5B,
          (function(a91) {
            return function(s91) {
              a91.mouseup(s91)
            }
          })(this),
          !{},
        )
      } else {
        if (Q9d.isSurface) {
          h5B = 'mo'
          h5B += 'use'
          h5B += 'down'
          I91.addEventListener(
            'mousemove',
            (function(m91) {
              return function(d91) {
                m91.msMouseMoveProxy(d91)
              }
            })(this),
            ![],
          )
          I91.addEventListener(
            h5B,
            (function(F91) {
              return function(w91) {
                F91.msMouseDownProxy(w91)
              }
            })(this),
            ![],
          )
          I91.addEventListener(
            'mouseup',
            (function(X91) {
              return function(Q31) {
                X91.msMouseUpProxy(Q31)
              }
            })(this),
            ![],
          )
          if (window.navigator.msPointerEnabled) {
            S5B = 'MSGestureSt'
            S5B += 'art'
            I91.addEventListener(
              'MSPointerDown',
              (function(S31) {
                return function(C31) {
                  return S31.startProxy(C31)
                }
              })(this),
              ![],
            )
            I91.addEventListener(
              S5B,
              (function(f31) {
                return function(Y31) {
                  f31.gestureInEffect = !!'1'
                }
              })(this),
              !!'',
            )
            I91.addEventListener(
              'MSGestureChange',
              (function(j31) {
                return function(q31) {
                  return j31.touchmove(q31)
                }
              })(this),
              !1,
            )
            I91.addEventListener(
              'MSGestureEnd',
              (function(M31) {
                return function(G31) {
                  M31.gestureInEffect = ![]
                  return M31.touchend(G31)
                }
              })(this),
              !'1',
            )
            I91.addEventListener(
              'MSPointerMove',
              (function(t31) {
                return function(c31) {
                  t31.moveProxy(c31)
                }
              })(this),
              ![],
            )
            I91.addEventListener(
              'MSPointerUp',
              (function(r31) {
                return function(T31) {
                  return r31.endProxy(T31)
                }
              })(this),
              !!'',
            )
          } else {
            T5B = 'poin'
            T5B += 't'
            T5B += 'erup'
            b5B = 'MSGesture'
            b5B += 'Chang'
            b5B += 'e'
            I91.addEventListener(
              'pointerdown',
              (function(b31) {
                return function(N31) {
                  return b31.startProxy(N31)
                }
              })(this),
              !!0,
            )
            I91.addEventListener(
              'MSGestureStart',
              (function(o31) {
                return function(V31) {
                  o31.gestureInEffect = !''
                }
              })(this),
              ![],
            )
            I91.addEventListener(
              b5B,
              (function(n31) {
                return function(E31) {
                  return n31.touchmove(E31)
                }
              })(this),
              ![],
            )
            I91.addEventListener(
              'MSGestureEnd',
              (function(e31) {
                return function(g31) {
                  e31.gestureInEffect = !!0
                  return e31.touchend(g31)
                }
              })(this),
              ![],
            )
            I91.addEventListener(
              'pointermove',
              (function(Z31) {
                return function(P31) {
                  Z31.moveProxy(P31)
                }
              })(this),
              !'1',
            )
            I91.addEventListener(
              T5B,
              (function(y31) {
                return function(p31) {
                  return y31.endProxy(p31)
                }
              })(this),
              !'1',
            )
          }
        } else {
          if (!Q9d.isAndroid && !Q9d.ipad && !Q9d.iphone) {
            E5B = 'm'
            E5B += 'ouse'
            E5B += 'do'
            E5B += 'wn'
            I91.addEventListener(
              'mousemove',
              (function(v31) {
                return function(K31) {
                  v31.iosMouseMoveProxy(K31)
                }
              })(this),
              !'1',
            )
            I91.addEventListener(
              E5B,
              (function(k31) {
                return function(W31) {
                  k31.iosMouseDownProxy(W31)
                }
              })(this),
              !1,
            )
            I91.addEventListener(
              'mouseup',
              (function(x31) {
                return function(h31) {
                  x31.iosMouseUpProxy(h31)
                }
              })(this),
              !!'',
            )
          }
          I91.addEventListener(
            'touchstart',
            (function(A31) {
              return function(i31) {
                A31.touchstart(i31)
              }
            })(this),
            !!'',
          )
          I91.addEventListener(
            'touchmove',
            (function(z31) {
              return function(u31) {
                z31.touchmove(u31)
              }
            })(this),
            !1,
          )
          I91.addEventListener(
            'touchend',
            (function(D31) {
              return function(I31) {
                D31.touchend(I31)
              }
            })(this),
            !'1',
          )
          if (R91) {
            R91.removeAttribute('onMouseOver')
            R91.removeAttribute('onMouseOut')
          }
          if (J91) {
            J91.removeAttribute('onMouseOver')
            e2w = -1631546793
            l4R.w4R(1)
            m2w = -l4R.i4R('1670495213', 0)
            p2w = 2
            for (var Y2w = 1; l4R.f7w(Y2w.toString(), Y2w.toString().length, 90635) !== e2w; Y2w++) {
              J91.removeAttribute('')
              p2w += 2
            }
            if (l4R.l7w(p2w.toString(), p2w.toString().length, 55105) !== m2w) {
              J91.removeAttribute('onMouseOut')
            }
          }
        }
      }
      l91 = Q9d.wheelEvent
      if (this.captureMouseWheelEvents) {
        I91.addEventListener(
          l91,
          (function(R31) {
            return function(J31) {
              R31.mouseWheel(J31)
            }
          })(this),
          !!'',
        )
      }
    }
    Q9d.ChartEngine.prototype.rightClickHighlighted = function() {
      var x5B, M6w, d6w, t6w
      x5B = 'rightClic'
      x5B += 'kHi'
      x5B += 'ghlighted'
      M6w = +'1973124723'
      d6w = 1175385287
      t6w = +'2'
      for (var e6w = 1; l4R.f7w(e6w.toString(), e6w.toString().length, '49469' | 0) !== M6w; e6w++) {
        if (this.runPrepend('rightClickHighlighted', arguments)) {
          return
        }
        t6w += 2
      }
      if (l4R.l7w(t6w.toString(), t6w.toString().length, 17410) !== d6w) {
        if (this.runPrepend('', arguments)) {
          return
        }
      }
      this.deleteHighlighted(!!1)
      this.runAppend(x5B, arguments)
    }
    Q9d.ChartEngine.prototype.deleteHighlighted = function(S71, Q71) {
      var V5B, H31, d31, w31, s31, l31, B31, a31, m31, y2w, I2w, i2w, w5B
      V5B = 'dele'
      V5B += 'teHighli'
      V5B += 'ghted'
      if (this.runPrepend('deleteHighlighted', arguments)) {
        return
      }
      this.cancelTouchSingleClick = !!'1'
      Q9d.clearCanvas(this.chart.tempCanvas, this)
      for (var O31 = this.drawingObjects.length - +'1'; O31 >= 0; O31--) {
        H31 = this.drawingObjects[O31]
        if (H31.highlighted && !H31.permanent) {
          d31 = H31.abort()
          if (!d31) {
            w31 = Q9d.shallowClone(this.drawingObjects)
            this.drawingObjects.splice(O31, 1)
            this.undoStamp(w31, Q9d.shallowClone(this.drawingObjects))
          }
          this.changeOccurred('vector')
        }
      }
      for (var L31 in this.overlays) {
        s31 = this.overlays[L31]
        if (s31.highlight && !s31.permanent) {
          if (S71 || Q71) {
            this.rightClickOverlay(L31, Q71)
          } else {
            this.removeOverlay(L31)
          }
        }
      }
      l31 = this.currentPanel.chart
      for (var F31 in l31.seriesRenderers) {
        B31 = l31.seriesRenderers[F31]
        for (var U31 = B31.seriesParams.length - 1; U31 >= ('0' | 0); U31--) {
          a31 = B31.seriesParams[U31]
          if (a31.highlight && !a31.permanent) {
            B31.removeSeries(a31.field)
          }
        }
      }
      m31 = !'1'
      for (var X31 in l31.series) {
        if (l31.series[X31].parameters.isComparison) {
          m31 = !![]
        }
      }
      if (!m31) {
        this.setComparison(!1, l31)
      }
      this.draw()
      if (this.controls.mSticky) {
        y2w = 1129514000
        I2w = 659040098
        i2w = 2
        for (var q2w = 1; l4R.l7w(q2w.toString(), q2w.toString().length, 24947) !== y2w; q2w++) {
          this.controls.mSticky.style.display = 'none'
          this.controls.mSticky.children['6' - 0].innerHTML = ''
          i2w += 2
        }
        if (l4R.l7w(i2w.toString(), i2w.toString().length, +'45448') !== I2w) {
          w5B = 'n'
          w5B += 'o'
          w5B += 'n'
          w5B += 'e'
          this.controls.mSticky.style.display = w5B
          this.controls.mSticky.children[+'0'].innerHTML = ''
        }
      }
      this.runAppend(V5B, arguments)
    }
    Q9d.ChartEngine.prototype.panelExists = function(Y71) {
      var f71
      for (var C71 in this.panels) {
        f71 = this.panels[C71]
        if (f71.name == Y71) {
          return !![]
        }
      }
      return !{}
    }
    Q9d.ChartEngine.prototype.hideCrosshairs = function() {
      var t1w, P1w, e1w
      t1w = 334807118
      P1w = 1916022449
      e1w = 2
      for (var p1w = +'1'; l4R.l7w(p1w.toString(), p1w.toString().length, 34204) !== t1w; p1w++) {
        this.displayCrosshairs = !{}
        e1w += 2
      }
      if (l4R.l7w(e1w.toString(), e1w.toString().length, 39560) !== P1w) {
        this.displayCrosshairs = !![]
      }
    }
    Q9d.ChartEngine.prototype.showCrosshairs = function() {
      this.displayCrosshairs = !''
    }
    Q9d.ChartEngine.prototype.grabHandle = function(j71) {
      var F5B
      F5B = 's'
      F5B += 'tx-grab'
      if (this.runPrepend('grabHandle', arguments)) {
        return
      }
      if (!j71) {
        return
      }
      Q9d.ChartEngine.crosshairY = j71.top + this.top
      Q9d.ChartEngine.resizingPanel = j71
      this.drawTemporaryPanel()
      Q9d.appendClassName(j71.handle, F5B)
      this.runAppend('grabHandle', arguments)
    }
    Q9d.ChartEngine.prototype.releaseHandle = function() {
      var z5B
      z5B = 'r'
      z5B += 'eleaseHa'
      z5B += 'ndle'
      if (this.runPrepend(z5B, arguments)) {
        return
      }
      Q9d.clearCanvas(this.chart.tempCanvas, this)
      this.resizePanels()
      if (Q9d.ChartEngine.resizingPanel) {
        Q9d.unappendClassName(Q9d.ChartEngine.resizingPanel.handle, 'stx-grab')
      }
      Q9d.ChartEngine.resizingPanel = null
      this.runAppend('releaseHandle', arguments)
    }
    Q9d.ChartEngine.prototype.storePanels = function() {
      var M71, q71
      if (!this.layout) {
        this.layout = {}
      }
      M71 = this.layout
      M71.panels = {}
      for (var G71 in this.panels) {
        q71 = this.panels[G71]
        M71.panels[q71.name] = { percent: q71.percent, display: q71.display }
      }
    }
    Q9d.ChartEngine.prototype.savePanels = function(t71) {
      var r5B
      r5B = 'l'
      r5B += 'a'
      r5B += 'y'
      r5B += 'out'
      this.storePanels()
      if (t71 !== ![]) {
        this.changeOccurred(r5B)
      }
    }
    Q9d.ChartEngine.prototype.resolveY = function(c71) {
      return this.top + c71
    }
    Q9d.ChartEngine.prototype.resolveX = function(r71) {
      return this.left + r71
    }
    Q9d.ChartEngine.prototype.backOutY = function(T71) {
      return T71 - this.top
    }
    Q9d.ChartEngine.prototype.backOutX = function(b71) {
      return b71 - this.left
    }
    Q9d.ChartEngine.prototype.cleanupRemovedStudy = function(N71) {
      if (N71.study.removeFN) {
        N71.study.removeFN(this, N71)
      }
      if (N71.study.feed && N71.study.quoteFeed) {
        this.detachTagAlongQuoteFeed(N71.study.feed)
      }
      for (var o71 in this.plugins) {
        if (
          o71.indexOf(
            '{' +
              N71.id +
              ('1220' * 1 != 577 ? (7576 > ('4280' | 0, 6942) ? (857.25 > 8351 ? 'o' : '}') : ('r', 2.4e3)) : 'z'),
          ) > -1
        ) {
          delete this.plugins[o71]
        }
      }
      if (this.layout.studies) {
        delete this.layout.studies[N71.name]
      }
    }
    Q9d.ChartEngine.prototype.privateDeletePanel = function(V71) {
      var e71, Z71
      if (this.layout.studies) {
        e71 = this.layout.studies[V71.name]
        if (e71) {
          this.cleanupRemovedStudy(e71)
        }
      }
      delete this.panels[V71.name]
      if (Q9d.Studies) {
        for (var g71 in Q9d.Studies.studyPanelMap) {
          if (Q9d.Studies.studyPanelMap[g71].panel == V71.name) {
            delete Q9d.Studies.studyPanelMap[g71]
          }
        }
      }
      for (var n71 in this.overlays) {
        if (this.overlays[n71].panel == V71.name) {
          delete this.layout.studies[n71]
          delete this.overlays[n71]
        }
      }
      if (V71.holder) {
        this.chart.container.removeChild(V71.holder)
        if (this.getMarkerArray) {
          Z71 = this.getMarkerArray('panelName', V71.name)
          for (var E71 = 0; E71 < Z71.length; E71++) {
            this.removeFromHolder(Z71[E71])
          }
        }
      }
      V71.handle.parentNode.removeChild(V71.handle)
    }
    Q9d.ChartEngine.prototype.panelClose = function(P71) {
      var y71
      if (!P71) {
        return
      }
      if (this.runPrepend('panelClose', arguments)) {
        return
      }
      this.cancelTouchSingleClick = !''
      Q9d.ChartEngine.drawingLine = !{}
      if (P71.soloing) {
        this.panelSolo(P71)
      }
      if (this.charts[P71.name]) {
        for (var p71 in this.panels) {
          y71 = this.panels[p71]
          if (y71.chart.name == P71.name) {
            this.privateDeletePanel(y71)
          }
        }
        delete this.charts[P71.name]
      } else {
        this.privateDeletePanel(P71)
      }
      this.showCrosshairs()
      this.createDataSet()
      this.adjustPanelPositions()
      this.draw()
      this.savePanels()
      this.runAppend('panelClose', arguments)
    }
    Q9d.ChartEngine.prototype.deleteAllPanels = function() {
      var K71
      for (var v71 in this.panels) {
        K71 = this.panels[v71]
        this.privateDeletePanel(K71)
      }
      this.layout.panels = {}
      this.panels = {}
    }
    Q9d.ChartEngine.prototype.panelUp = function(W71) {
      var g6w, k6w, o6w, x71, h71, k71, A71
      g6w = -222479656
      l4R.w4R(2)
      k6w = l4R.i4R(0, '739155011')
      o6w = 2
      for (var O6w = '1' * 1; l4R.l7w(O6w.toString(), O6w.toString().length, 25158) !== g6w; O6w++) {
        this.cancelTouchSingleClick = !!''
        Q9d.ChartEngine.drawingLine = !![]
        this.showCrosshairs()
        l4R.w4R(4)
        o6w += l4R.i4R('2', 1)
      }
      if (l4R.f7w(o6w.toString(), o6w.toString().length, 10898) !== k6w) {
        this.cancelTouchSingleClick = !!{}
        Q9d.ChartEngine.drawingLine = !1
        this.showCrosshairs()
      }
      x71 = {}
      h71 = +'0'
      for (k71 in this.panels) {
        if (k71 == W71.name) break
        h71++
      }
      if (!h71) {
        return
      }
      A71 = 0
      for (k71 in this.panels) {
        if (A71 == h71 - 1) {
          x71[W71.name] = W71
        }
        if (k71 == W71.name) continue
        x71[k71] = this.panels[k71]
        A71++
      }
      this.panels = x71
      this.adjustPanelPositions()
      this.draw()
      this.savePanels()
    }
    Q9d.ChartEngine.prototype.panelDown = function(z71) {
      var Z1w, q1w, N1w, u71, D71, i71, R71, I71
      this.cancelTouchSingleClick = !''
      Q9d.ChartEngine.drawingLine = !!0
      this.showCrosshairs()
      Z1w = -1476425236
      q1w = 533172491
      N1w = 2
      for (var k1w = 1; l4R.l7w(k1w.toString(), k1w.toString().length, 5026) !== Z1w; k1w++) {
        u71 = {}
        D71 = 0
        N1w += +'2'
      }
      if (l4R.f7w(N1w.toString(), N1w.toString().length, 25552) !== q1w) {
        u71 = {}
        D71 = 2
      }
      for (i71 in this.panels) {
        if (i71 == z71.name) break
        D71++
      }
      l4R.w4R(2)
      R71 = l4R.h4R(0, '0')
      for (i71 in this.panels) {
        R71++
      }
      if (D71 == R71 - 1) {
        return
      }
      I71 = 0
      for (i71 in this.panels) {
        if (i71 == z71.name) {
          I71++
          continue
        }
        u71[i71] = this.panels[i71]
        if (I71 == D71 + 1) {
          u71[z71.name] = z71
        }
        I71++
      }
      this.panels = u71
      this.adjustPanelPositions()
      this.draw()
      this.savePanels()
    }
    Q9d.ChartEngine.prototype.panelSolo = function(J71) {
      var l71, n5B, X5B
      this.cancelTouchSingleClick = !!{}
      Q9d.ChartEngine.drawingLine = !{}
      this.showCrosshairs()
      l71 = !0
      if (J71.soloing) {
        n5B = 'stx_s'
        n5B += 'olo_lit'
        l71 = !{}
        J71.soloing = !'1'
        Q9d.unappendClassName(J71.solo, n5B)
        J71.percent = J71.oldPercent
        this.panels.chart.percent = this.panels.chart.oldPercent
      } else {
        X5B = 'ch'
        X5B += 'art'
        J71.soloing = !''
        Q9d.appendClassName(J71.solo, 'stx_solo_lit')
        if (J71.name == X5B) {
          J71.oldPercent = J71.percent
        } else {
          J71.oldPercent = J71.percent
          this.panels.chart.oldPercent = this.panels.chart.percent
          J71.percent = +'1' - this.panels.chart.percent
        }
      }
      for (var O71 in this.panels) {
        this.panels[O71].hidden = l71
      }
      this.panels.chart.hidden = !{}
      J71.hidden = !1
      this.adjustPanelPositions()
      this.draw()
      this.savePanels()
    }
    Q9d.ChartEngine.prototype.calculatePanelPercent = function(H71) {
      var s6w, Q6w, h6w, L71
      s6w = 166593675
      Q6w = 1976528971
      l4R.d4R(2)
      h6w = l4R.i4R(0, '2')
      for (var b6w = 1; l4R.l7w(b6w.toString(), b6w.toString().length, 92991) !== s6w; b6w++) {
        L71 = H71.bottom * H71.top
        H71.percent = L71 + this.chart.canvasHeight
        h6w += 2
      }
      if (l4R.f7w(h6w.toString(), h6w.toString().length, 94678) !== Q6w) {
        L71 = H71.bottom - H71.top
        H71.percent = L71 / this.chart.canvasHeight
      }
    }
    Q9d.ChartEngine.prototype.resizePanels = function() {
      var s71, a71, B71, U71, T6w, E6w, x6w, S9B, b9B, T9B
      if (!Q9d.ChartEngine.resizingPanel) {
        return
      }
      s71 = !![]
      if (Q9d.ChartEngine.crosshairY > this.resolveY(Q9d.ChartEngine.resizingPanel.top)) {
        s71 = ![]
      }
      if (s71) {
        U71 = null
        for (a71 in this.panels) {
          if (this.panels[a71] == Q9d.ChartEngine.resizingPanel) break
          if (this.panels[a71].hidden) continue
          U71 = this.panels[a71]
        }
        B71 = this.backOutY(Q9d.ChartEngine.crosshairY)
        if (B71 < U71.top + 30) {
          l4R.d4R(8)
          var d6B = l4R.i4R(37, 3, 21, 4)
          B71 = U71.top + d6B
          Q9d.ChartEngine.crosshairY = this.resolveY(B71)
        }
        U71.bottom = B71
        Q9d.ChartEngine.resizingPanel.top = B71
        this.calculatePanelPercent(U71)
        this.calculatePanelPercent(Q9d.ChartEngine.resizingPanel)
      } else {
        U71 = null
        for (a71 in this.panels) {
          if (this.panels[a71] == Q9d.ChartEngine.resizingPanel) break
          if (this.panels[a71].hidden) continue
          U71 = this.panels[a71]
        }
        B71 = this.backOutY(Q9d.ChartEngine.crosshairY)
        if (B71 > Q9d.ChartEngine.resizingPanel.bottom - 30) {
          l4R.w4R(45)
          var t6B = l4R.h4R(10, 16, 2, 270, 8)
          B71 = Q9d.ChartEngine.resizingPanel.bottom - t6B
          T6w = 380770019
          E6w = -1698572083
          x6w = +'2'
          for (var V6w = 1; l4R.f7w(V6w.toString(), V6w.toString().length, +'55934') !== T6w; V6w++) {
            Q9d.ChartEngine.crosshairY = this.resolveY(B71)
            l4R.d4R(2)
            x6w += l4R.i4R(0, '2')
          }
          if (l4R.f7w(x6w.toString(), x6w.toString().length, 95591) !== E6w) {
            Q9d.ChartEngine.crosshairY = this.resolveY(B71)
          }
        }
        S9B = 2056768722
        b9B = -238272366
        T9B = 2
        for (var x9B = 1; l4R.f7w(x9B.toString(), x9B.toString().length, 49014) !== S9B; x9B++) {
          U71.bottom = B71
          Q9d.ChartEngine.resizingPanel.top = B71
          this.calculatePanelPercent(U71)
          this.calculatePanelPercent(Q9d.ChartEngine.resizingPanel)
          l4R.w4R(2)
          T9B += l4R.i4R(0, '2')
        }
        if (l4R.f7w(T9B.toString(), T9B.toString().length, 47879) !== b9B) {
          U71.bottom = B71
          Q9d.ChartEngine.resizingPanel.top = B71
          this.calculatePanelPercent(U71)
          this.calculatePanelPercent(Q9d.ChartEngine.resizingPanel)
        }
      }
      this.adjustPanelPositions()
      this.draw()
      this.savePanels()
    }
    Q9d.ChartEngine.prototype.adjustPanelPositions = function() {
      var I5B, y5B, f5D, Y5D, j5D, S5D, C5D, F71, X71, w71, m71, Q5D, u5B, C5B, d71, l5B, f5B
      I5B = 'adjus'
      I5B += 'tPanelPositio'
      I5B += 'ns'
      y5B = 'p'
      y5B += 'x'
      if (!this.chart.symbol) {
        return
      }
      if (this.runPrepend('adjustPanelPositions', arguments)) {
        return
      }
      f5D = 0
      Y5D = this.chart.canvasHeight
      j5D = 0
      S5D = !!''
      C5D = 0
      F71 = +'0'
      X71 = ![]
      for (w71 in this.panels) {
        m71 = this.panels[w71]
        if (isNaN(m71.percent) || m71.percent <= 0) {
          m71.percent = 0.05
        }
        if (m71.hidden) continue
        C5D += m71.percent
        F71++
        if (m71.soloing) {
          X71 = !!'1'
        }
      }
      for (w71 in this.panels) {
        Q5D = 0
        m71 = this.panels[w71]
        if (m71.hidden) {
          if (m71.markerHolder) {
            u5B = 'n'
            u5B += 'o'
            u5B += 'n'
            u5B += 'e'
            m71.markerHolder.style.display = u5B
          }
          continue
        }
        if (!S5D) {
          S5D = !''
          m71.up.style.display = 'none'
        } else {
          if (this.displayIconsUpDown) {
            m71.up.style.display = ''
          }
        }
        if (X71) {
          if (m71.soloing) {
            if (this.displayIconsSolo) {
              m71.solo.style.display = ''
            }
          } else {
            m71.solo.style.display = 'none'
          }
        } else if (F71 == 1 || F71 == 2) {
          C5B = 'n'
          C5B += 'o'
          C5B += 'n'
          C5B += 'e'
          m71.solo.style.display = C5B
        } else {
          if (this.displayIconsSolo) {
            m71.solo.style.display = ''
          }
        }
        if (F71 == 1) {
          m71.down.style.display = 'none'
        } else {
          if (this.displayIconsUpDown) {
            m71.down.style.display = ''
          }
        }
        if (m71.editFunction) {
          m71.edit.style.display = ''
        } else {
          m71.edit.style.display = 'none'
        }
        m71.percent = m71.percent / C5D
        m71.top = f5D
        m71.bottom = m71.top + Y5D * m71.percent
        m71.height = m71.bottom - m71.top
        if (m71.chart.name == m71.name) {
          m71.chart.top = m71.top
          m71.chart.bottom = m71.bottom
          m71.chart.height = m71.height
        }
        d71 = m71.yAxis
        if (d71.zoom && d71.height > ('0' | 0)) {
          Q5D = d71.zoom / d71.height
        }
        this.adjustYAxisHeightOffset(m71, d71)
        d71.top = m71.top + d71.topOffset
        d71.bottom = m71.bottom - d71.bottomOffset
        d71.height = d71.bottom - d71.top
        if (Q5D) {
          d71.zoom = Q5D * d71.height
          if (d71.zoom > d71.height) {
            d71.zoom = 0
            d71.scroll = 0
          }
        }
        f5D = m71.bottom
        if (!d71.high && d71.high !== 0) {
          d71.high = 100
          d71.low = 0
          d71.shadow = 100
        }
        d71.multiplier = d71.height / d71.shadow
        if (m71.holder) {
          l5B = 'p'
          l5B += 'x'
          f5B = '0'
          f5B += 'p'
          f5B += 'x'
          m71.holder.style.right = f5B
          m71.holder.style.top = m71.top + 'px'
          m71.holder.style.left = '0px'
          m71.holder.style.height = m71.height + l5B
          m71.subholder.style.left = m71.left + 'px'
          m71.subholder.style.width = m71.width + 'px'
          m71.subholder.style.top = '0px'
          if (d71.height >= 0) {
            m71.subholder.style.height = d71.height + 'px'
          }
        }
      }
      if (w71) {
        this.panels[w71].down.style.display = 'none'
      }
      if (F71 == 2 && !X71) {
        this.panels.chart.solo.style.display = ''
      }
      if (this.controls.chartControls && this.panels.chart) {
        this.controls.chartControls.style.bottom = this.chart.canvasHeight - this.panels.chart.bottom + ('22' | 0) + y5B
      }
      this.clearPixelCache()
      this.adjustDrawings()
      this.runAppend(I5B, arguments)
    }
    Q9d.ChartEngine.prototype.addChart = function(q5D, M5D) {
      M5D.name = q5D
      this.charts[q5D] = M5D
    }
    Q9d.ChartEngine.prototype.createPanel = function(o5D, V5D, G5D, t5D) {
      var i5B, c5D, r5D, T5D, N5D
      i5B = 'cre'
      i5B += 'ateP'
      i5B += 'ane'
      i5B += 'l'
      if (this.runPrepend('createPanel', arguments)) {
        return
      }
      if (!t5D) {
        t5D = 'chart'
      }
      c5D = this.chart.canvasHeight
      if (!G5D) {
        l4R.w4R(4)
        G5D = l4R.i4R(c5D, 0.2)
      }
      l4R.d4R(17)
      r5D = l4R.i4R(G5D, c5D)
      l4R.w4R(1)
      T5D = l4R.h4R(1, r5D)
      for (var b5D in this.panels) {
        N5D = this.panels[b5D]
        N5D.percent *= T5D
      }
      this.stackPanel(o5D, V5D, r5D, t5D)
      this.adjustPanelPositions()
      this.savePanels(![])
      this.runAppend(i5B, arguments)
    }
    Q9d.ChartEngine.prototype.configurePanelControls = function(n5D) {
      var N5B, q5B, Z5B, E5D, g5B, k5B
      N5B = 'n'
      N5B += 'one'
      q5B = '.stx-'
      q5B += 'ico'
      q5B += '-focus'
      Z5B = '.s'
      Z5B += 'tx-'
      Z5B += 'ico-u'
      Z5B += 'p'
      E5D = n5D.name == n5D.chart.name
      n5D.icons = S9d('.stx-panel-control', n5D.holder)
      n5D.close = n5D.icons.children[4]
      n5D.close = S9d('.stx-ico-close', n5D.icons).parentNode
      Q9d.appendClassName(n5D.icons, 'stx-show')
      n5D.title = S9d('.stx-panel-title', n5D.icons)
      n5D.up = S9d(Z5B, n5D.icons).parentNode
      n5D.solo = S9d(q5B, n5D.icons).parentNode
      n5D.down = S9d('.stx-ico-down', n5D.icons).parentNode
      n5D.edit = S9d('.stx-ico-edit', n5D.icons).parentNode
      if (!this.displayIconsUpDown) {
        n5D.up.style.display = 'none'
      }
      if (!this.displayIconsUpDown) {
        n5D.down.style.display = N5B
      }
      if (!this.displayIconsSolo) {
        n5D.solo.style.display = 'none'
      }
      if (!this.displayIconsClose) {
        g5B = 'non'
        g5B += 'e'
        n5D.close.style.display = g5B
      }
      if (!this.displayPanelResize) {
        n5D.handle.style.display = 'none'
      }
      n5D.title.innerHTML = ''
      n5D.title.appendChild(document.createTextNode(n5D.display))
      if (E5D) {
        k5B = 'cha'
        k5B += 'rt-ti'
        k5B += 'tle'
        Q9d.appendClassName(n5D.title, k5B)
        Q9d.appendClassName(n5D.icons, 'stx-chart-panel')
      }
      if (!Q9d.touchDevice || Q9d.isSurface) {
        n5D.icons.onmouseover = (function(e5D) {
          return function(g5D) {
            e5D.hideCrosshairs()
          }
        })(this)
      }
      if (!Q9d.touchDevice || Q9d.isSurface) {
        n5D.icons.onmouseout = (function(Z5D) {
          return function(P5D) {
            Z5D.showCrosshairs()
          }
        })(this)
      }
      if (!Q9d.touchDevice || Q9d.isSurface) {
        n5D.handle.onmouseover = (function(y5D) {
          return function() {
            y5D.hideCrosshairs()
          }
        })(this)
      }
      if (!Q9d.touchDevice || Q9d.isSurface) {
        n5D.handle.onmouseout = (function(p5D) {
          return function() {
            p5D.showCrosshairs()
          }
        })(this)
      }
      if (Q9d.touchDevice) {
        n5D.handle.ontouchstart = (function(v5D, K5D) {
          return function(k5D) {
            if (v5D.resizingPanel) {
              return
            }
            k5D.preventDefault()
            v5D.grabHandle(K5D)
          }
        })(this, n5D)
        n5D.handle.ontouchend = (function(W5D) {
          return function(x5D) {
            x5D.preventDefault()
            W5D.releaseHandle()
          }
        })(this)
      }
      n5D.handle.onmousedown = (function(h5D, A5D) {
        return function(i5D) {
          if (!i5D) {
            i5D = event
          }
          h5D.grabHandle(A5D)
        }
      })(this, n5D)
      n5D.handle.onmouseup = (function(z5D) {
        return function(u5D) {
          if (!u5D) {
            u5D = event
          }
          z5D.releaseHandle()
        }
      })(this)
      Q9d.safeClickTouch(
        n5D.close,
        (function(D5D, I5D) {
          return function() {
            D5D.panelClose(I5D)
          }
        })(this, n5D),
      )
      Q9d.safeClickTouch(
        n5D.up,
        (function(R5D, J5D) {
          return function() {
            R5D.panelUp(J5D)
          }
        })(this, n5D),
      )
      Q9d.safeClickTouch(
        n5D.down,
        (function(l5D, O5D) {
          return function() {
            l5D.panelDown(O5D)
          }
        })(this, n5D),
      )
      Q9d.safeClickTouch(
        n5D.solo,
        (function(H5D, L5D) {
          return function() {
            H5D.panelSolo(L5D)
          }
        })(this, n5D),
      )
      if (n5D.name == 'chart') {
        n5D.close.style.display = 'none'
      }
    }
    Q9d.ChartEngine.prototype.stackPanel = function(d5D, a5D, X5D, s5D) {
      var v5B, O5B, U5B, o5B, U5D, m5D, F5D, B5D, w5D
      v5B = 'stack'
      v5B += 'P'
      v5B += 'a'
      v5B += 'nel'
      O5B = 'cq-'
      O5B += 'panel-name'
      U5B = 'stx-subhold'
      U5B += 'er'
      o5B = 'c'
      o5B += 'ha'
      o5B += 'r'
      o5B += 't'
      if (this.runPrepend('stackPanel', arguments)) {
        return
      }
      if (!s5D) {
        s5D = o5B
      }
      U5D = this.charts[s5D]
      l4R.d4R(46)
      m5D = l4R.h4R(s5D, a5D)
      F5D = null
      if (m5D) {
        d5D = U5D.symbol
        if (U5D.symbolDisplay) {
          d5D = U5D.symbolDisplay
        }
        F5D = U5D.yAxis
      }
      B5D = this.panels[a5D] = new Q9d.ChartEngine.Panel(a5D, F5D)
      if (!m5D && U5D.yAxis) {
        B5D.yAxis.width = U5D.yAxis.width
      }
      B5D.percent = X5D
      B5D.chart = U5D
      B5D.display = d5D
      B5D.holder = Q9d.newChild(this.container, 'div', 'stx-holder')
      B5D.subholder = Q9d.newChild(B5D.holder, 'div', U5B)
      B5D.subholder.style.zIndex = 1
      B5D.holder.setAttribute('cq-panel-name', a5D)
      B5D.subholder.setAttribute(O5B, a5D)
      w5D = m5D ? 'stx-panel-chart' : 'stx-panel-study'
      Q9d.appendClassName(B5D.holder, w5D)
      B5D.subholder.appendChild(this.controls.iconsTemplate.cloneNode(!''))
      B5D.handle = this.controls.handleTemplate.cloneNode(!![])
      this.container.appendChild(B5D.handle)
      B5D.handle.id = null
      B5D.handle.panel = B5D
      this.configurePanelControls(B5D)
      this.resizeCanvas()
      this.runAppend(v5B, arguments)
    }
    Q9d.ChartEngine.prototype.setPanelEdit = function(Q4D, S4D) {
      Q4D.editFunction = S4D
      Q9d.safeClickTouch(Q4D.edit, S4D)
      this.adjustPanelPositions()
    }
    Q9d.ChartEngine.prototype.drawPanels = function() {
      var a5B, Y4D, D5B, B5B, C4D, J5B, c5B, L5B, f4D
      a5B = 'drawPa'
      a5B += 'nels'
      if (this.runPrepend('drawPanels', arguments)) {
        return
      }
      Y4D = !{}
      for (var j4D in this.panels) {
        D5B = 'p'
        D5B += 'x'
        B5B = 'st'
        B5B += 'x'
        B5B += '-show'
        C4D = this.panels[j4D]
        C4D.axisDrawn = ![]
        if (C4D.title.innerHTML != C4D.display) {
          C4D.title.innerHTML = ''
          C4D.title.appendChild(document.createTextNode(C4D.display))
        }
        Q9d.appendClassName(C4D.icons, B5B)
        if (C4D.hidden) {
          J5B = 'n'
          J5B += 'o'
          J5B += 'n'
          J5B += 'e'
          c5B = 'n'
          c5B += 'o'
          c5B += 'n'
          c5B += 'e'
          Q9d.unappendClassName(C4D.icons, 'stx-show')
          C4D.handle.style.display = c5B
          C4D.holder.style.display = J5B
          continue
        } else {
          L5B = 'n'
          L5B += 'o'
          L5B += 'n'
          L5B += 'e'
          if (!this.displayIconsUpDown) {
            C4D.up.style.display = L5B
          }
          if (!this.displayIconsUpDown) {
            C4D.down.style.display = 'none'
          }
          if (!this.displayIconsSolo) {
            C4D.solo.style.display = 'none'
          }
          C4D.holder.style.display = 'block'
        }
        if (!Y4D) {
          C4D.handle.style.display = 'none'
          Y4D = !0
          continue
        }
        f4D = C4D.top
        f4D = Math.round(f4D) + 0.5
        this.plotLine(
          C4D.left,
          C4D.right,
          f4D,
          f4D,
          this.canvasStyle('stx_panel_border'),
          'segment',
          this.chart.context,
          !!'',
          {},
        )
        if (!this.displayPanelResize) {
          C4D.handle.style.display = 'none'
        } else {
          C4D.handle.style.display = ''
        }
        C4D.handle.style.top = f4D - C4D.handle.offsetHeight / +'2' + D5B
      }
      this.runAppend(a5B, arguments)
    }
    Q9d.ChartEngine.prototype.touchSingleClick = function(c4D, M4D, G4D) {
      var t4D, q4D
      t4D = this
      q4D = arguments
      return function() {
        ;(function() {
          var j5B, G1w, Y1w, W1w, r4D, T4D, b4D, K5B
          if (!this.cancelTouchSingleClick) {
            j5B = 't'
            j5B += 'ouchSingleClick'
            if (this.runPrepend(j5B, q4D)) {
              return
            }
            if (this.editingAnnotation) {
              return
            }
            this.clicks = { s1MS: -1, e1MS: -1, s2MS: -1, e2MS: -('1' * 1) }
            if (!this.displayCrosshairs) {
              return
            }
            if (!this.displayInitialized) {
              return
            }
            if (this.openDialog !== '') {
              return
            }
            l4R.w4R(1)
            G1w = -l4R.i4R('1484896531', 0)
            Y1w = -9702600
            W1w = 2
            for (var Q1w = 1; l4R.l7w(Q1w.toString(), Q1w.toString().length, 49758) !== G1w; Q1w++) {
              if (M4D <= this.left && M4D <= this.right && G4D > this.top && G4D >= this.bottom) {
                return
              }
              W1w += 2
            }
            if (l4R.l7w(W1w.toString(), W1w.toString().length, 17763) !== Y1w) {
              if (M4D < this.left || M4D > this.right || G4D <= this.top || G4D < this.bottom) {
                return
              }
            }
            if (M4D < this.left || M4D > this.right || G4D < this.top || G4D > this.bottom) {
              return
            }
            r4D = this.backOutY(Q9d.ChartEngine.crosshairY)
            T4D = this.backOutX(Q9d.ChartEngine.crosshairX)
            this.currentPanel = this.whichPanel(r4D)
            if (
              !Q9d.Drawing ||
              !this.currentVectorParameters.vectorType ||
              !Q9d.Drawing[this.currentVectorParameters.vectorType] ||
              !new Q9d.Drawing[this.currentVectorParameters.vectorType]().dragToDraw
            ) {
              if (!this.drawingClick(this.currentPanel, T4D, r4D)) {
                if (!this.layout.crosshair) {
                  Q9d.ChartEngine.crosshairY = 0
                  Q9d.ChartEngine.crosshairX = 0
                  this.cx = this.backOutX(Q9d.ChartEngine.crosshairX)
                  this.cy = this.backOutY(Q9d.ChartEngine.crosshairY)
                  this.findHighlights()
                  Q9d.ChartEngine.crosshairY = G4D
                  Q9d.ChartEngine.crosshairX = M4D
                  b4D = this.container.getBoundingClientRect()
                  this.top = b4D.top
                  this.left = b4D.left
                  this.right = this.left + this.width
                  this.bottom = this.top + this.height
                  this.cx = this.backOutX(Q9d.ChartEngine.crosshairX)
                  this.cy = this.backOutY(Q9d.ChartEngine.crosshairY)
                  if (this.currentPanel && this.currentPanel.chart.dataSet) {
                    this.crosshairTick = this.tickFromPixel(this.cx, this.currentPanel.chart)
                    this.crosshairValue = this.adjustIfNecessary(
                      this.currentPanel,
                      this.crosshairTick,
                      this.valueFromPixel(this.cy, this.currentPanel),
                    )
                  }
                  this.headsUpHR()
                  this.findHighlights(!![])
                }
              }
              if (!this.currentVectorParameters.vectorType) {
                K5B = 't'
                K5B += 'a'
                K5B += 'p'
                this.dispatch(K5B, { stx: this, panel: this.currentPanel, x: T4D, y: r4D })
              }
            }
          }
          t4D.cancelTouchSingleClick = ![]
          this.runAppend('touchSingleClick', q4D)
        }.apply(t4D, q4D))
      }
    }
    Q9d.ChartEngine.prototype.touchDoubleClick = function(n4D, o4D, V4D) {
      var H5B, N4D
      H5B = 'touchDoub'
      H5B += 'le'
      H5B += 'Click'
      if (o4D < this.left || o4D > this.right || V4D < this.panels.chart.top || V4D > this.panels.chart.bottom) {
        return
      }
      if (this.editingAnnotation) {
        return
      }
      if (this.runPrepend(H5B, arguments)) {
        return
      }
      if (Q9d.ChartEngine.drawingLine) {
        this.undo()
      } else {
        if (this.anyHighlighted) {
          this.deleteHighlighted()
        } else {
          N4D = this.currentPanel.yAxis
          if (
            N4D.scroll == (N4D.initialMarginTop - N4D.initialMarginBottom) / 2 &&
            N4D.zoom == N4D.initialMarginTop + N4D.initialMarginBottom
          ) {
            this.home()
          } else {
            this.calculateYAxisMargins(this.currentPanel.yAxis)
          }
          this.draw()
        }
      }
      this.clicks = { s1MS: -1, e1MS: -+'1', s2MS: -1, e2MS: -1 }
      this.runAppend('touchDoubleClick', arguments)
    }
    Q9d.ChartEngine.prototype.startProxy = function(E4D) {
      if (E4D.pointerType == ('4' | 0) || E4D.pointerType == 'mouse') {
        this.mouseMode = !!'1'
      } else {
        this.mouseMode = ![]
      }
      if (this.mouseMode) {
        return
      }
      this.touches[this.touches.length] = { pointerId: E4D.pointerId, pageX: E4D.clientX, pageY: E4D.clientY }
      this.changedTouches = [{ pointerId: E4D.pointerId, pageX: E4D.clientX, pageY: E4D.clientY }]
      if (!this.gestureInEffect && this.touches.length == +'1') {
        this.gesturePointerId = E4D.pointerId
        this.overrideGesture = !!0
        if (!this.gesture) {
          return
        }
        this.gesture.addPointer(E4D.pointerId)
        this.touchstart(E4D)
      } else {
        this.gesture.stop()
        this.touchstart(E4D)
      }
    }
    Q9d.ChartEngine.prototype.moveProxy = function(e4D) {
      if (e4D.pointerType == '4' - 0 || e4D.pointerType == 'mouse') {
        this.mouseMode = !!'1'
      } else {
        this.mouseMode = ![]
      }
      if (this.mouseMode) {
        return
      }
      if (!this.gestureInEffect) {
        this.touchmove(e4D)
      }
    }
    Q9d.ChartEngine.prototype.endProxy = function(Z4D) {
      var P4D
      if (this.mouseMode) {
        return
      }
      P4D = this.touches.length
      for (var g4D = 0; g4D < this.touches.length; g4D++) {
        if (this.touches[g4D].pointerId == Z4D.pointerId) {
          this.touches.splice(g4D, 1)
          break
        }
      }
      if (g4D == P4D) {
        this.touches = []
        this.grabbingScreen = ![]
        this.touching = !1
        return
      }
      this.changedTouches = [{ pointerId: Z4D.pointerId, pageX: Z4D.clientX, pageY: Z4D.clientY }]
      if (!this.gestureInEffect) {
        this.touchend(Z4D)
      }
    }
    Q9d.ChartEngine.prototype.msMouseMoveProxy = function(y4D) {
      if (this.touches.length || !this.mouseMode) {
        return
      }
      this.mousemove(y4D)
    }
    Q9d.ChartEngine.prototype.msMouseDownProxy = function(p4D) {
      if (!this.mouseMode) {
        return
      }
      this.mousedown(p4D)
    }
    Q9d.ChartEngine.prototype.msMouseUpProxy = function(v4D) {
      if (!this.mouseMode) {
        return
      }
      this.mouseup(v4D)
    }
    Q9d.ChartEngine.prototype.iosMouseMoveProxy = function(K4D) {
      if (this.touching) {
        return
      }
      this.mousemove(K4D)
    }
    Q9d.ChartEngine.prototype.iosMouseDownProxy = function(k4D) {
      if (this.touching) {
        this.mouseMode = !{}
        return
      }
      this.mouseMode = !''
      this.mousedown(k4D)
    }
    Q9d.ChartEngine.prototype.iosMouseUpProxy = function(W4D) {
      if (this.touching) {
        return
      }
      this.mouseup(W4D)
    }
    Q9d.ChartEngine.prototype.rawWatermark = function(x4D, h4D, A4D, i4D) {
      this.canvasFont('stx_watermark', x4D)
      x4D.fillStyle = this.defaultColor
      x4D.globalAlpha = +'0.5'
      this.chart.context.textBaseline = 'alphabetic'
      x4D.fillText(i4D, h4D, A4D)
      x4D.globalAlpha = 1
    }
    Q9d.ChartEngine.prototype.watermark = function(R4D, z4D) {
      var z3B, V3B, Q3B, G3B, A5B, u4D, D4D, I4D, H2w, A2w, R1w
      z3B = 'cen'
      z3B += 'ter'
      V3B = 'alp'
      V3B += 'h'
      V3B += 'abet'
      V3B += 'ic'
      Q3B = 'm'
      Q3B += 'iddle'
      G3B = 'l'
      G3B += 'e'
      G3B += 'f'
      G3B += 't'
      A5B = 'o'
      A5B += 'b'
      A5B += 'je'
      A5B += 'ct'
      if (z4D && typeof z4D != A5B) {
        z4D = { h: arguments[1], v: arguments[2], text: arguments[3] }
      }
      z4D = {
        h: z4D.h || G3B,
        v: z4D.v || 'bottom',
        text: z4D.text || '',
        hOffset: z4D.hOffset || 10,
        vOffset: z4D.vOffset || 20,
      }
      if (!this.chart.context) {
        return
      }
      u4D = this.panels[R4D]
      if (!u4D || u4D.hidden) {
        return
      }
      D4D = u4D.yAxis.bottom - z4D.vOffset
      if (z4D.v == 'top') {
        D4D = u4D.top + z4D.vOffset
      } else if (z4D.v == Q3B) {
        D4D = (u4D.top + u4D.yAxis.bottom) / +'2'
      }
      this.chart.context.save()
      this.canvasFont('stx_watermark')
      this.canvasColor('stx_watermark')
      this.chart.context.textBaseline = V3B
      I4D = u4D.left + z4D.hOffset
      if (z4D.h == 'right') {
        I4D = u4D.right - z4D.hOffset
      } else if (z4D.h == z3B) {
        H2w = 511503529
        A2w = 2114940050
        R1w = +'2'
        for (var d1w = 1; l4R.f7w(d1w.toString(), d1w.toString().length, 11383) !== H2w; d1w++) {
          l4R.d4R(1)
          var P6B = l4R.i4R(12, 10)
          I4D = (u4D.right + u4D.left - this.chart.context.measureText(z4D.text).width) / P6B
          R1w += 2
        }
        if (l4R.l7w(R1w.toString(), R1w.toString().length, 50871) !== A2w) {
          l4R.w4R(10)
          var e6B = l4R.h4R(31, 18, 3, 13)
          I4D = (u4D.right / u4D.left / this.chart.context.measureText(z4D.text).width) % e6B
        }
      }
      this.chart.context.globalAlpha = 0.5
      this.chart.context.fillText(z4D.text, I4D, D4D)
      this.chart.context.globalAlpha = 1
      this.chart.context.restore()
    }
    Q9d.ChartEngine.prototype.preAdjustScroll = function(J4D) {
      var J7w, L7w, D7w
      if (!J4D) {
        J4D = this.chart
      }
      J7w = +'1991136963'
      L7w = 68993355
      D7w = 2
      for (var j7w = 1; l4R.f7w(j7w.toString(), j7w.toString().length, +'66055') !== J7w; j7w++) {
        this.previousAdjust = { chart: J4D, scroll: J4D.scroll, maxTicks: J4D.maxTicks }
        D7w += 2
      }
      if (l4R.l7w(D7w.toString(), D7w.toString().length, 50479) !== L7w) {
        this.previousAdjust = { chart: J4D, scroll: J4D.scroll, maxTicks: J4D.maxTicks }
      }
    }
    Q9d.ChartEngine.prototype.postAdjustScroll = function() {
      var l4D
      if (!this.previousAdjust) {
        return
      }
      l4D = this.previousAdjust.chart
      l4D.scroll = this.previousAdjust.scroll + (l4D.maxTicks - this.previousAdjust.maxTicks)
      if (this.displayInitialized) {
        this.draw()
      }
    }
    Q9d.ChartEngine.prototype.adjustDrawings = function() {
      var H4D
      for (var O4D = 0; O4D < this.drawingObjects.length; O4D++) {
        H4D = this.drawingObjects[O4D]
        if (this.panels[H4D.panelName]) {
          H4D.adjust()
        }
      }
    }
    Q9d.ChartEngine.prototype.getNextInterval = function(a4D, L4D, B4D) {
      var U4D
      if (!L4D) {
        L4D = 1
      }
      if (B4D !== !{}) {
        B4D = !''
      }
      U4D = this.standardMarketIterator(a4D, B4D ? this.dataZone : this.displayZone)
      if (L4D < 1) {
        l4R.d4R(47)
        return U4D.previous(l4R.i4R(L4D, 1))
      }
      return U4D.next(L4D)
    }
    Q9d.ChartEngine.prototype.standardMarketIterator = function(X4D, s4D, m4D) {
      var r3B, d4D, F4D, w4D
      r3B = 't'
      r3B += 'i'
      r3B += 'c'
      r3B += 'k'
      d4D = s4D ? s4D : this.dataZone
      F4D = m4D ? m4D : this.chart
      w4D = {
        begin: X4D,
        interval: this.layout.interval == 'tick' ? 1 : this.layout.interval,
        periodicity: this.layout.interval == r3B ? this.chart.xAxis.futureTicksInterval : this.layout.periodicity,
        timeUnit: this.layout.timeUnit,
        inZone: this.dataZone,
        outZone: d4D,
      }
      return F4D.market.newIterator(w4D)
    }
    Q9d.ChartEngine.prototype.zoomSet = function(f6D, Q6D) {
      var y3B, G6D, S6D, q6D, C6D, Y6D, j6D, M6D
      y3B = 'volume_c'
      y3B += 'an'
      y3B += 'dle'
      G6D = this.chart.scroll
      C6D = 0
      Y6D = 0
      if (this.isHome()) {
        l4R.w4R(48)
        var m6B = l4R.i4R(1, 5, 13, 17, 6923076923076923)
        S6D = Q6D.dataSet.length - m6B
        l4R.d4R(12)
        var p6B = l4R.i4R(17, 2, 17)
        C6D = this.layout.candleWidth / p6B
        l4R.d4R(49)
        Y6D = l4R.i4R(f6D, 0, '2')
      } else {
        S6D = this.tickFromPixel(this.chart.width / 2, Q6D)
      }
      l4R.w4R(17)
      var G6B = l4R.i4R(15, 15)
      q6D = Q6D.dataSet.length - G6B - S6D
      j6D = Math.floor(this.pixelFromTick(S6D, Q6D) + C6D)
      this.setCandleWidth(f6D)
      if (this.layout.chartType !== y3B) {
        this.micropixels = +'0'
        l4R.w4R(1)
        var Y6B = l4R.i4R(13, 12)
        this.chart.scroll = Math.floor((j6D - C6D) / f6D) + Y6B + q6D
        M6D = Math.floor(this.pixelFromTick(S6D, Q6D) + Y6D)
        l4R.d4R(1)
        this.micropixels = l4R.h4R(j6D, M6D)
      }
      Q6D.spanLock = !!0
      this.draw()
      this.doDisplayCrosshairs()
      this.updateChartAccessories()
    }
    Q9d.ChartEngine.prototype.zoomOut = function(b6D, c6D) {
      var t6D, r6D, o6D, T6D
      if (this.runPrepend('zoomOut', arguments)) {
        return
      }
      this.grabbingScreen = !!''
      if (Q9d.ChartEngine.insideChart) {
        Q9d.unappendClassName(this.container, 'stx-drag-chart')
      }
      if (this.preferences.zoomOutSpeed) {
        c6D = this.preferences.zoomOutSpeed
      } else if (!c6D) {
        c6D = 1.3
      }
      if (b6D && b6D.preventDefault) {
        b6D.preventDefault()
      }
      function V6D(n6D) {
        return function(E6D) {
          t6D.zoomSet(E6D, n6D)
          if (t6D.animations.zoom.hasCompleted) {
            if (t6D.runAppend('zoomOut', arguments)) {
              return
            }
            t6D.changeOccurred('layout')
          }
        }
      }
      this.cancelTouchSingleClick = !![]
      t6D = this
      for (var N6D in this.charts) {
        r6D = this.charts[N6D]
        if (Q9d.ipad && r6D.maxTicks > Q9d.ChartEngine.ipadMaxTicks) {
          return
        }
        o6D = Math.round(r6D.maxTicks * c6D)
        T6D = this.chart.width / o6D
        if (T6D < this.minimumCandleWidth) {
          T6D = this.minimumCandleWidth
        }
        this.layout.span = null
        this.animations.zoom.run(V6D(r6D), this.layout.candleWidth, T6D)
      }
    }
    Q9d.ChartEngine.prototype.mouseWheel = function(e6D) {
      var Z6D, g6D, k6D, P6D, y6D, p6D, v6D, K6D
      if (this.runPrepend('mouseWheel', arguments)) {
        return
      }
      if (!e6D) {
        e6D = event
      }
      if (e6D.preventDefault) {
        e6D.preventDefault()
      }
      Z6D = e6D.deltaX
      g6D = e6D.deltaY
      k6D = Date.now() - this.lastMouseWheelEvent
      if (Math.abs(g6D) > Math.abs(Z6D)) {
        Z6D = 0
      } else {
        g6D = 0
      }
      this.lastMouseWheelEvent = Date.now()
      if (Math.abs(Z6D) === 0 && Math.abs(g6D) === 0) {
        return
      }
      if (this.allowSideswipe && Z6D !== '0' - 0 && Math.abs(Z6D) > Math.abs(g6D)) {
        this.lastMove = 'horizontal'
        l4R.w4R(50)
        P6D = l4R.h4R(Z6D, '1')
        if (P6D > 50) {
          P6D = 50
        }
        if (P6D < -50) {
          P6D = -50
        }
        this.grabbingScreen = !!'1'
        this.grabStartX = Q9d.ChartEngine.crosshairX
        this.grabStartY = Q9d.ChartEngine.crosshairY
        if (!this.currentPanel) {
          this.currentPanel = this.chart.panel
        }
        this.grabStartScrollX = this.currentPanel.chart.scroll
        this.grabStartScrollY = this.currentPanel.chart.panel.yAxis.scroll
        this.mousemoveinner(Q9d.ChartEngine.crosshairX - P6D, Q9d.ChartEngine.crosshairY)
        Q9d.ChartEngine.crosshairX = this.grabStartX
        Q9d.ChartEngine.crosshairY = this.grabStartY
        this.updateChartAccessories()
        this.grabbingScreen = !!0
        return
      }
      this.lastMove = 'vertical'
      if (!this.allowZoom) {
        return
      }
      if (!this.displayInitialized) {
        return
      }
      if (!g6D) {
        if (Q9d.wheelEvent == 'onmousewheel') {
          g6D = (-+'1' / 40) * e6D.wheelDelta
          if (e6D.wheelDeltaX) {
            l4R.d4R(1)
            var s6B = l4R.i4R(16, 15)
            Z6D = (-+'1' / ('40' * s6B)) * e6D.wheelDeltaX
          }
        } else {
          g6D = e6D.detail
        }
      }
      if (typeof e6D.deltaMode == 'undefined') {
        e6D.deltaMode = e6D.type == 'MozMousePixelScroll' ? 0 : +'1'
      }
      y6D = g6D
      if (e6D.deltaMode == +'1') {
        y6D *= 33
      }
      p6D = null
      v6D = null
      if (this.mouseWheelAcceleration) {
        K6D = Math.max(Math.pow(Math.abs(y6D), 0.3), '1' * 1)
        l4R.w4R(24)
        p6D = l4R.i4R(0.1, K6D, 1)
        l4R.d4R(31)
        v6D = l4R.h4R(K6D, 0.2, 1)
      }
      if (y6D > 0) {
        if (this.reverseMouseWheel) {
          this.zoomOut(null, v6D)
        } else {
          this.zoomIn(null, p6D)
        }
      } else if (y6D < 0) {
        if (this.reverseMouseWheel) {
          this.zoomIn(null, p6D)
        } else {
          this.zoomOut(null, v6D)
        }
      }
      if (this.runAppend('mouseWheel', arguments)) {
        return
      }
      return !'1'
    }
    Q9d.ChartEngine.prototype.zoomIn = function(i6D, A6D) {
      var B3B, x6D, h6D, W6D, u6D
      B3B = 'zoomI'
      B3B += 'n'
      function D6D(I6D) {
        return function(R6D) {
          var a3B, E3w, x3w, w3w
          x6D.zoomSet(R6D, I6D)
          if (x6D.animations.zoom.hasCompleted) {
            a3B = 'z'
            a3B += 'o'
            a3B += 'omIn'
            if (x6D.runAppend(a3B, arguments)) {
              return
            }
            E3w = -205459371
            x3w = -2090573956
            w3w = 2
            for (var F3w = 1; l4R.l7w(F3w.toString(), F3w.toString().length, 40017) !== E3w; F3w++) {
              x6D.changeOccurred('layout')
              w3w += 2
            }
            if (l4R.f7w(w3w.toString(), w3w.toString().length, 70957) !== x3w) {
              x6D.changeOccurred('')
            }
          }
        }
      }
      if (this.runPrepend(B3B, arguments)) {
        return
      }
      this.grabbingScreen = !!0
      if (Q9d.ChartEngine.insideChart) {
        Q9d.unappendClassName(this.container, 'stx-drag-chart')
      }
      if (this.preferences.zoomInSpeed) {
        A6D = this.preferences.zoomInSpeed
      } else if (!A6D) {
        A6D = +'0.7'
      }
      x6D = this
      for (var z6D in this.charts) {
        h6D = this.charts[z6D]
        if (i6D && i6D.preventDefault) {
          i6D.preventDefault()
        }
        this.cancelTouchSingleClick = !![]
        W6D = Math.round(h6D.maxTicks * A6D)
        if (h6D.maxTicks - W6D < 2) {
          W6D = h6D.maxTicks - 2
        }
        if (W6D < this.minimumZoomTicks) {
          W6D = this.minimumZoomTicks
        }
        u6D = this.chart.width / W6D
        this.layout.span = null
        this.animations.zoom.run(D6D(h6D), this.layout.candleWidth, u6D)
      }
    }
    Q9d.ChartEngine.prototype.translateIf = function(J6D) {
      if (this.translationCallback) {
        return this.translationCallback(J6D)
      }
      return J6D
    }
    Q9d.ChartEngine.prototype.setTimeZone = function(U6D, a6D) {
      var O6D, l6D, H6D, L6D, B6D
      if (typeof f9d == 'undefined') {
        this.timeZoneOffset = 0
        return
      }
      O6D = new Date()
      l6D = O6D.getTimezoneOffset()
      H6D = l6D
      L6D = l6D
      if (U6D) {
        this.dataZone = U6D
      }
      if (this.dataZone) {
        H6D = new f9d.Date(O6D, this.dataZone).getTimezoneOffset()
      }
      if (a6D) {
        this.displayZone = a6D
      }
      if (this.displayZone) {
        L6D = new f9d.Date(O6D, this.displayZone).getTimezoneOffset()
      }
      l4R.d4R(51)
      this.timeZoneOffset = l4R.i4R(l6D, H6D, L6D, l6D)
      for (var s6D in this.charts) {
        B6D = this.charts[s6D]
        if (B6D.masterData && !Q9d.ChartEngine.isDailyInterval(this.layout.interval)) {
          this.setDisplayDates(B6D.masterData)
        }
      }
      this.createDataSet()
    }
    Q9d.ChartEngine.prototype.setLocale = function(d6D) {
      var Y2B, G2B, p2B, m2B, e2B, P2B, t2B, d2B, M2B, R2B, A3B, m6D
      Y2B = 'pe'
      Y2B += 'r'
      Y2B += 'cen'
      Y2B += 't'
      G2B = 'p'
      G2B += 'erce'
      G2B += 'n'
      G2B += 't'
      p2B = 's'
      p2B += 'h'
      p2B += 'ort'
      m2B = 'n'
      m2B += 'u'
      m2B += 'mer'
      m2B += 'ic'
      e2B = 'nume'
      e2B += 'ric'
      P2B = 'nume'
      P2B += 'r'
      P2B += 'i'
      P2B += 'c'
      t2B = '2-di'
      t2B += 'g'
      t2B += 'it'
      d2B = '2-d'
      d2B += 'i'
      d2B += 'git'
      M2B = '2-dig'
      M2B += 'it'
      R2B = '2-'
      R2B += 'dig'
      R2B += 'i'
      R2B += 't'
      A3B = 'nu'
      A3B += 'm'
      A3B += 'e'
      A3B += 'ric'
      if (typeof Intl == 'undefined') {
        return
      }
      if (this.locale != d6D) {
        this.locale = d6D
      } else {
        return
      }
      m6D = this.internationalizer = {}
      m6D.hourMinute = new Intl.DateTimeFormat(this.locale, { hour: 'numeric', minute: 'numeric', hour12: ![] })
      m6D.hourMinuteSecond = new Intl.DateTimeFormat(this.locale, {
        hour: 'numeric',
        minute: A3B,
        second: 'numeric',
        hour12: !'1',
      })
      m6D.mdhm = new Intl.DateTimeFormat(this.locale, { year: R2B, month: M2B, day: '2-digit', hour: d2B, minute: t2B })
      m6D.monthDay = new Intl.DateTimeFormat(this.locale, { month: P2B, day: 'numeric' })
      m6D.yearMonthDay = new Intl.DateTimeFormat(this.locale, { year: 'numeric', month: e2B, day: 'numeric' })
      m6D.yearMonth = new Intl.DateTimeFormat(this.locale, { year: 'numeric', month: m2B })
      m6D.month = new Intl.DateTimeFormat(this.locale, { month: p2B })
      m6D.numbers = new Intl.NumberFormat(this.locale)
      m6D.priceFormatters = []
      m6D.priceFormatters[0] = new Intl.NumberFormat(this.locale, {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      })
      m6D.priceFormatters[1] = new Intl.NumberFormat(this.locale, {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1,
      })
      m6D.priceFormatters[2] = new Intl.NumberFormat(this.locale, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
      m6D.priceFormatters[3] = new Intl.NumberFormat(this.locale, {
        maximumFractionDigits: 3,
        minimumFractionDigits: 3,
      })
      m6D.priceFormatters[4] = new Intl.NumberFormat(this.locale, {
        maximumFractionDigits: +'4',
        minimumFractionDigits: 4,
      })
      m6D.priceFormatters[5] = new Intl.NumberFormat(this.locale, {
        maximumFractionDigits: 5,
        minimumFractionDigits: +'5',
      })
      m6D.percent = new Intl.NumberFormat(this.locale, {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      m6D.percent0 = new Intl.NumberFormat(this.locale, {
        style: 'percent',
        minimumFractionDigits: +'0',
        maximumFractionDigits: +'0',
      })
      m6D.percent1 = new Intl.NumberFormat(this.locale, {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: '1' - 0,
      })
      m6D.percent2 = new Intl.NumberFormat(this.locale, {
        style: G2B,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      m6D.percent3 = new Intl.NumberFormat(this.locale, {
        style: Y2B,
        minimumFractionDigits: 3,
        maximumFractionDigits: +'3',
      })
      m6D.percent4 = new Intl.NumberFormat(this.locale, {
        style: 'percent',
        minimumFractionDigits: +'4',
        maximumFractionDigits: 4,
      })
      if (Q9d.I18N.createMonthArrays) {
        Q9d.I18N.createMonthArrays(this, m6D.month, this.locale)
      }
    }
    Q9d.ChartEngine.prototype.importLayout = function(X6D, F6D) {
      var Q2B, C8D, q8D, n8D, Q8D, N8D, f8D, G8D, M8D, W2B, S8D, j8D, E8D, T8D, Y8D, w6D, t8D, e8D, s2B
      Q2B = 'la'
      Q2B += 'yout'
      if (typeof F6D !== 'object') {
        F6D = { managePeriodicity: arguments[1], preserveTicksAndCandleWidth: arguments[2] }
      }
      if (!F6D.preserveTicksAndCandleWidth && F6D.preserveTicksAndCandleWidth !== !'1') {
        F6D.preserveTicksAndCandleWidth = !0
      }
      C8D = Q9d.shallowClone(this.layout)
      q8D = this.serializeDrawings()
      this.abortDrawings()
      this.currentlyImporting = !!{}
      if (Q9d.Studies) {
        for (var o8D in this.layout.studies) {
          n8D = this.layout.studies[o8D]
          Q9d.Studies.removeStudy(this, n8D)
        }
      }
      this.overlays = {}
      Q8D = Q9d.clone(X6D)
      if (Q8D) {
        N8D = Q9d.shallowClone(this.panels)
        this.panels = {}
        f8D = Q9d.clone(Q8D)
        delete f8D.periodicity
        delete f8D.interval
        delete f8D.timeUnit
        delete f8D.setSpan
        Q9d.dataBindSafeAssignment(this.layout, f8D)
        this.layout.periodicity = C8D.periodicity
        this.layout.interval = C8D.interval
        this.layout.timeUnit = C8D.timeUnit
        this.layout.setSpan = C8D.setSpan
        if (F6D.preserveTicksAndCandleWidth) {
          this.layout.candleWidth = C8D.candleWidth
        } else {
          if (!this.layout.candleWidth) {
            this.layout.candleWidth = 8
          }
        }
        if (this.layout.candleWidth < this.minimumCandleWidth) {
          this.layout.candleWidth = this.minimumCandleWidth
        }
        this.setCandleWidth(this.layout.candleWidth)
        G8D = Q8D.panels
        this.layout.panels = {}
        for (var b8D in G8D) {
          M8D = G8D[b8D]
          this.stackPanel(M8D.display, b8D, M8D.percent, M8D.chartName)
        }
        if (Q9d.isEmpty(G8D)) {
          W2B = 'cha'
          W2B += 'rt'
          this.stackPanel('chart', W2B, 1, 'chart')
        }
        for (var c8D in N8D) {
          S8D = N8D[c8D]
          j8D = this.panels[c8D]
          if (j8D) {
            this.container.removeChild(j8D.holder)
            this.container.removeChild(S8D.handle)
            E8D = { holder: !!{}, subholder: !!{}, display: !![] }
            for (var r8D in E8D) {
              j8D[r8D] = S8D[r8D]
            }
            this.configurePanelControls(j8D)
            if (S8D.chart.panel == S8D) {
              S8D.chart.panel = j8D
            }
          } else {
            this.privateDeletePanel(S8D)
          }
        }
        this.adjustPanelPositions()
        this.storePanels()
        if (Q9d.Studies) {
          T8D = Q9d.clone(this.layout.studies)
          delete this.layout.studies
          for (var V8D in T8D) {
            Y8D = T8D[V8D]
            Q9d.Studies.addStudy(this, Y8D.type, Y8D.inputs, Y8D.outputs, Y8D.parameters, Y8D.panel)
          }
        }
      }
      if (typeof this.layout.chartType == 'undefined') {
        this.layout.chartType = 'line'
      }
      this.adjustPanelPositions()
      w6D = this
      if (X6D.symbols) {
        if (!this.quoteDriver || !this.quoteDriver.quoteFeed) {
          console.log("WARNING: loading a symbol through 'importLayout' without a QuoteFeed may break data updates")
        }
        t8D = {}
        if (F6D.managePeriodicity) {
          if (X6D.symbols[0].setSpan) {
            t8D.span = X6D.symbols[0].setSpan
          }
          if (X6D.symbols[0].interval) {
            t8D.periodicity = {
              interval: X6D.symbols[+'0'].interval,
              periodicity: X6D.symbols['0' * 1].periodicity,
              timeUnit: X6D.symbols[0].timeUnit,
            }
          }
        }
        e8D = X6D.symbols[0].symbolObject || X6D.symbols[0].symbol
        this.newChart(
          e8D,
          null,
          this.chart,
          function(P8D) {
            if (!P8D) {
              for (var Z8D, g8D = 1; g8D < X6D.symbols.length; ++g8D) {
                Z8D = X6D.symbols[g8D]
                w6D.addSeries(Z8D.symbol, Z8D.parameters)
              }
            }
            w6D.reconstructDrawings(q8D)
            w6D.draw()
            w6D.currentlyImporting = !!0
            w6D.updateListeners('layout')
            if (F6D.cb) {
              F6D.cb.apply(null, arguments)
            }
          },
          t8D,
        )
        return
      } else {
        if (Q8D && F6D.managePeriodicity) {
          if (Q8D.setSpan && this.chart.symbol) {
            this.setSpan(Q8D.setSpan, function() {
              w6D.reconstructDrawings(q8D)
              w6D.draw()
              w6D.currentlyImporting = !!''
              w6D.updateListeners('layout')
              if (F6D.cb) {
                F6D.cb()
              }
            })
            return
          } else {
            s2B = 'd'
            s2B += 'ay'
            interval = Q8D.interval
            periodicity = Q8D.periodicity
            timeUnit = Q8D.timeUnit
            if (isNaN(periodicity)) {
              periodicity = 1
            }
            if (!interval) {
              interval = s2B
            }
            if (interval != this.layout.interval || periodicity != this.layout.periodicity) {
              this.setPeriodicityV2(periodicity, interval, timeUnit, function() {
                w6D.reconstructDrawings(q8D)
                w6D.draw()
                w6D.currentlyImporting = !!0
                w6D.updateListeners('layout')
                if (F6D.cb) {
                  F6D.cb()
                }
              })
              return
            } else {
              this.createDataSet()
            }
          }
        } else {
          this.createDataSet()
        }
      }
      this.reconstructDrawings(q8D)
      this.draw()
      if (!F6D.preserveTicksAndCandleWidth) {
        this.home()
      }
      this.currentlyImporting = !!0
      this.updateListeners(Q2B)
      if (F6D.cb) {
        F6D.cb()
      }
    }
    Q9d.ChartEngine.prototype.exportLayout = function(A8D) {
      var y8D, k8D, W8D, v8D, K8D
      y8D = {}
      for (var p8D in this.layout) {
        if (p8D != 'studies' && p8D != 'panels') {
          y8D[p8D] = Q9d.clone(this.layout[p8D])
        } else if (p8D == 'studies') {
          y8D.studies = {}
        } else if (p8D == 'panels') {
          y8D.panels = {}
        }
      }
      for (var x8D in this.panels) {
        k8D = y8D.panels[x8D] = {}
        W8D = this.panels[x8D]
        k8D.percent = W8D.percent
        k8D.display = W8D.display
        k8D.chartName = W8D.chart.name
      }
      for (var h8D in this.layout.studies) {
        v8D = y8D.studies[h8D] = {}
        K8D = this.layout.studies[h8D]
        v8D.type = K8D.type
        v8D.inputs = Q9d.clone(K8D.inputs)
        v8D.outputs = Q9d.clone(K8D.outputs)
        v8D.panel = K8D.panel
        v8D.parameters = Q9d.clone(K8D.parameters)
      }
      if (A8D) {
        y8D.symbols = this.getSymbols('include-parameters')
      }
      return y8D
    }
    Q9d.ChartEngine.prototype.doCleanupGaps = function(i8D, H8D) {
      var S2B, h2B, z8D, N2w, g2w, k2w, L8D, O8D, I8D, u8D, U8D, B8D, J8D, l8D, a8D, D8D, s8D
      S2B = 'we'
      S2B += 'ek'
      h2B = 'm'
      h2B += 'o'
      h2B += 'nt'
      h2B += 'h'
      z8D = this.layout.interval
      N2w = -612471167
      g2w = -833205826
      k2w = 2
      for (var U2w = 1; l4R.l7w(U2w.toString(), U2w.toString().length, 90813) !== N2w; U2w++) {
        L8D = this.cleanupGaps == 'gap'
        if (!this.cleanupGaps) {
          return i8D
        }
        k2w += 2
      }
      if (l4R.l7w(k2w.toString(), k2w.toString().length, 91404) !== g2w) {
        L8D = this.cleanupGaps === ''
        if (-this.cleanupGaps) {
          return i8D
        }
      }
      if (z8D == 'tick') {
        return i8D
      }
      if (!i8D || !i8D.length) {
        return i8D
      }
      if (!H8D) {
        H8D = this.chart
      }
      if (z8D == h2B || z8D == S2B) {
        if (this.dontRoll) {
          return i8D
        }
        z8D = 'day'
      }
      O8D = function(m8D) {
        var d8D
        if (m8D.DT) {
          d8D = m8D.DT
        } else {
          d8D = Q9d.strToDateTime(m8D.Date)
        }
        return d8D
      }
      I8D = []
      u8D = i8D[0]
      I8D.push(i8D[0])
      U8D = {
        begin: O8D(u8D),
        interval: z8D,
        periodicity: 1,
        timeUnit: this.layout.timeUnit,
        inZone: this.dataZone,
        outZone: this.dataZone,
      }
      B8D = H8D.market.newIterator(U8D)
      for (var R8D = '1' * 1; R8D < i8D.length; R8D++) {
        J8D = i8D[R8D]
        l8D = B8D.next()
        a8D = O8D(J8D)
        while (l8D < a8D) {
          D8D = L8D ? null : u8D.Close
          s8D = L8D ? null : u8D.Adj_Close
          I8D.push({ DT: l8D, Open: D8D, High: D8D, Low: D8D, Close: D8D, Volume: 0, Adj_Close: s8D })
          l8D = B8D.next()
        }
        I8D.push(J8D)
        u8D = J8D
      }
      return I8D
    }
    Q9d.Comparison = function() {}
    Q9d.Comparison.priceToPercent = function(w8D, X8D, F8D) {
      l4R.d4R(11)
      var h6B = l4R.i4R(30, 81, 11)
      l4R.d4R(1)
      var S6B = l4R.i4R(10009, 9)
      return Math.round(((F8D - Q9d.Comparison.baseline) / Q9d.Comparison.baseline) * h6B * +'10000') / S6B
    }
    Q9d.Comparison.percentToPrice = function(S1D, C1D, Q1D) {
      l4R.d4R(6)
      var T6B = l4R.h4R(90, 10)
      return Q9d.Comparison.baseline * (1 + Q1D / T6B)
    }
    Q9d.Comparison.stopSort = function(f1D, Y1D) {
      l4R.d4R(1)
      return l4R.h4R(f1D, Y1D)
    }
    Q9d.Comparison.createComparisonSegmentInner = function(r1D, c1D) {
      var b2B, V1D, q1D, y1D, T1D, E1D, k1D, g1D, o1D, t1D, n1D, Z1D, j1D, G1D, e1D, M1D, p1D, v1D, P1D, b1D, N1D
      b2B = 'Hi'
      b2B += 'g'
      b2B += 'h'
      V1D = []
      for (q1D in c1D.series) {
        if (c1D.series[q1D].parameters.isComparison) {
          V1D.push(q1D)
        }
      }
      y1D = ['Close', 'Open', b2B, 'Low', 'iqPrevClose']
      c1D.dataSegment = []
      T1D = null
      E1D = c1D.dataSet.length - c1D.scroll
      k1D = E1D + c1D.maxTicks
      g1D = 0
      o1D = []
      for (t1D = 0; t1D < r1D.drawingObjects.length; t1D++) {
        n1D = r1D.drawingObjects[t1D]
        if (n1D.name == 'comparison_stop')
          if (n1D.tick > E1D && n1D.tick <= k1D) {
            o1D.push(n1D.tick)
          }
      }
      o1D.sort(Q9d.Comparison.stopSort)
      l4R.w4R(1)
      var E6B = l4R.i4R(135, 132)
      Z1D = c1D.maxTicks + E6B
      for (t1D = 0; t1D <= Z1D; t1D++) {
        if (t1D == Z1D) {
          t1D = -1
        }
        l4R.d4R(6)
        position = l4R.i4R(E1D, t1D)
        if (position < c1D.dataSet.length && position >= 0) {
          j1D = c1D.dataSet[position]
          if (!T1D && j1D.Close === 0) continue
          if (!T1D) {
            T1D = Q9d.clone(j1D)
          }
          if (!j1D.transform) {
            j1D.transform = { cache: {}, DT: j1D.DT, Date: j1D.Date }
          }
          Q9d.Comparison.baseline = T1D.Close
          for (G1D = 0; G1D < y1D.length; G1D++) {
            q1D = y1D[G1D]
            if (j1D[q1D] || j1D[q1D] === 0) {
              j1D.transform[q1D] =
                Math.round(((j1D[q1D] - Q9d.Comparison.baseline) / Q9d.Comparison.baseline) * +'100' * +'10000') / 10000
            }
          }
          e1D = r1D.layout.studies
          if (e1D) {
            for (var K1D in e1D) {
              M1D = e1D[K1D]
              if (!r1D.panels[M1D.panel] || r1D.panels[M1D.panel].name != M1D.chart.name) continue
              for (q1D in M1D.outputMap) {
                if (j1D[q1D] || j1D[q1D] === 0) {
                  l4R.w4R(52)
                  var w6B = l4R.i4R(10006, 11, 40019, 5)
                  l4R.w4R(6)
                  var V6B = l4R.i4R(769, 9231)
                  j1D.transform[q1D] =
                    Math.round(((j1D[q1D] - Q9d.Comparison.baseline) / Q9d.Comparison.baseline) * +'100' * w6B) / V6B
                }
              }
              if (
                M1D.referenceOutput &&
                (j1D[
                  M1D.referenceOutput +
                    ((3770, '538' * 1) == 8580
                      ? 'F'
                      : 76.95 < (3510, 7640)
                      ? (3490, 4433) != 995.83
                        ? ' '
                        : ('0x118c' | 0, !![])
                      : (+'0x135d', 837.59)) +
                    M1D.name
                ] ||
                  j1D[M1D.referenceOutput + ' ' + M1D.name] === 0)
              ) {
                l4R.d4R(6)
                var F6B = l4R.h4R(927, 7420)
                l4R.w4R(53)
                var z6B = l4R.h4R(10, 4, 18, 1526, 273)
                l4R.d4R(11)
                var r6B = l4R.i4R(2, 9723, 21)
                l4R.d4R(12)
                var n6B = l4R.h4R(5646, 2825, 2823)
                l4R.w4R(54)
                var X6B = l4R.h4R(17, 831, 50, 17, 2, 848)
                l4R.w4R(18)
                var u6B = l4R.i4R(8990, 2, 8982)
                l4R.d4R(6)
                var C6B = l4R.i4R(957, 12)
                l4R.d4R(55)
                var f6B = l4R.h4R(12, 2416, 16919, 9662, 2, 7)
                l4R.d4R(1)
                var l6B = l4R.h4R(5114, 14)
                l4R.w4R(10)
                var y6B = l4R.h4R(565, 18, 6808, 15)
                l4R.w4R(56)
                var Z6B = l4R.h4R(16, 6, 10019, 29)
                l4R.d4R(57)
                var q6B = l4R.h4R(4000, 90000, 15)
                j1D.transform[
                  M1D.referenceOutput +
                    ((F6B, z6B) !== r6B
                      ? ('690.47' - 0, n6B) <= X6B
                        ? (409.69, u6B) >= C6B
                          ? !!''
                          : !!1
                        : ' '
                      : f6B) +
                    M1D.name
                ] =
                  Math.round(
                    ((j1D[M1D.referenceOutput + ((l6B, 646.53) === y6B ? 0x191d : ' ') + M1D.name] -
                      Q9d.Comparison.baseline) /
                      Q9d.Comparison.baseline) *
                      100 *
                      Z6B,
                  ) / q6B
              }
            }
          }
          for (G1D in r1D.plugins) {
            p1D = r1D.plugins[G1D]
            if (!p1D.transformOutputs) continue
            for (q1D in p1D.transformOutputs) {
              if (j1D[q1D] || j1D[q1D] === 0) {
                l4R.d4R(11)
                var N6B = l4R.i4R(5, 106, 11)
                j1D.transform[q1D] =
                  Math.round(((j1D[q1D] - Q9d.Comparison.baseline) / Q9d.Comparison.baseline) * N6B * 10000) / +'10000'
              }
            }
          }
          v1D = !!0
          if (o1D && g1D < o1D.length) {
            if (position === o1D[g1D]) {
              v1D = !!'1'
              g1D++
            }
          }
          P1D = null
          if (r1D.activeDrawing && r1D.activeDrawing.name == 'comparison_stop') {
            P1D = r1D.activeDrawing.tick
          }
          if (v1D || position == P1D) {
            for (G1D = 0; G1D < V1D.length; G1D++) {
              q1D = V1D[G1D]
              b1D = j1D[q1D]
              T1D[q1D] = b1D / (+'1' + j1D.transform.Close / 100)
            }
          }
          for (G1D = 0; G1D < V1D.length; G1D++) {
            q1D = V1D[G1D]
            b1D = j1D[q1D]
            if (b1D || b1D === 0) {
              N1D = T1D[q1D]
              if (!N1D && N1D !== 0) {
                l4R.w4R(58)
                var o6B = l4R.h4R(17, 11, 11, 18)
                l4R.d4R(59)
                var U6B = l4R.i4R(11, 325, 4, 3, 117)
                T1D[q1D] = N1D = b1D / (o6B + j1D.transform.Close / U6B)
              }
              if (N1D !== 0) {
                l4R.w4R(14)
                var B6B = l4R.h4R(12, 2, 15)
                j1D.transform[q1D] = Math.round(((b1D - N1D) / N1D) * 100 * 10000) / ('10000' * B6B)
              }
            }
          }
          c1D.dataSegment.push(j1D)
        } else if (position < 0) {
          c1D.dataSegment.push(null)
        }
        if (t1D < 0) break
      }
    }
    Q9d.Comparison.priceFormat = function(A1D, i1D, W1D) {
      var x1D, h1D
      if (W1D === null || typeof W1D == 'undefined') {
        return ''
      }
      x1D = i1D.yAxis.priceTick
      h1D = A1D.internationalizer
      if (h1D) {
        if (x1D >= 1) {
          l4R.d4R(17)
          W1D = h1D.percent0.format(l4R.h4R(W1D, 100))
        } else if (x1D >= 0.1) {
          l4R.w4R(17)
          W1D = h1D.percent1.format(l4R.i4R(W1D, 100))
        } else if (x1D >= 0.01) {
          l4R.d4R(17)
          W1D = h1D.percent2.format(l4R.h4R(W1D, 100))
        } else if (x1D >= 0.001) {
          l4R.w4R(49)
          W1D = h1D.percent3.format(l4R.i4R(W1D, 0, '100'))
        } else {
          W1D = h1D.percent4.format(W1D)
        }
      } else {
        if (x1D >= 1) {
          l4R.d4R(12)
          var c6B = l4R.h4R(7185, 1436, 1437)
          W1D = W1D.toFixed(0) + ((755.6, c6B) >= (+'1463', 9331) ? '0xbc0' | 0 : '%')
        } else if (x1D >= 0.1) {
          l4R.w4R(60)
          var L6B = l4R.h4R(19, 19)
          l4R.w4R(6)
          var D6B = l4R.i4R(8359, 20)
          l4R.d4R(1)
          var a6B = l4R.h4R(81270, 72240)
          l4R.d4R(1)
          var j6B = l4R.i4R(133620, 124712)
          l4R.w4R(6)
          var K6B = l4R.h4R(6875, 11)
          l4R.d4R(61)
          var H6B = l4R.i4R(18, 10, 7, 19, 228)
          W1D =
            W1D.toFixed(L6B) +
            ((469.52, D6B) != (a6B, +'414.66') ? (('6240' - 0, j6B) != (+'8615', K6B) ? '%' : 246.45) : (H6B, 478.12))
        } else if (x1D >= 0.01) {
          l4R.w4R(8)
          var d8N = l4R.i4R(15888, 7, 2646, 6)
          l4R.d4R(12)
          var p8N = l4R.h4R(7104, 7117, 7104)
          W1D =
            W1D.toFixed(2) +
            ((660.82, 614.96) > 8770
              ? (396.71, 637.89) === (3400, 806.13)
                ? d8N
                : (9.58, 6542) != 7864
                ? (!{}, p8N)
                : (618.38, !!{})
              : '%')
        } else if (x1D >= 0.001) {
          l4R.d4R(62)
          var Y8N = l4R.i4R(8, 24, 8, 2, 18)
          l4R.d4R(18)
          var W8N = l4R.h4R(17, 3630, 58090)
          l4R.d4R(63)
          var s8N = l4R.i4R(489, 14, 983)
          l4R.d4R(9)
          var Q8N = l4R.h4R(19, 18, 19, 18)
          l4R.w4R(6)
          var S8N = l4R.i4R(4332, 8)
          W1D =
            W1D.toFixed(Y8N) + (452.6 > W8N ? ((s8N, '6136' * Q8N) === (408.97, +'7950') ? 0x918 : (S8N, 0x79f)) : '%')
        } else {
          W1D = W1D.toFixed(+'4') + '%'
        }
      }
      if (
        parseFloat(W1D) === 0 &&
        W1D.charAt(+'0') ==
          (2687 <= (+'7730', +'5513')
            ? '3770' * 1 === (5820, 151.13)
              ? (7.33e3, 0xca9)
              : ('4784' | 0, 4495) <= +'9430'
              ? '-'
              : (!!'1', 0x3dc)
            : ('0x2221' - 0, !![]))
      ) {
        W1D = W1D.substring(1)
      }
      return W1D
    }
    Q9d.Comparison.correlate = function(z1D, R1D) {
      var E2B, T2B, D1D, u1D, J1D, I1D, B1D, C3w, f3w, l3w, k3w, o3w, U3w, x2B, U1D, w2B
      E2B = ' '
      E2B += '('
      T2B = ' '
      T2B += '('
      if (!Q9d.Comparison.requestCorrelation || D1D <= '0' - 0) {
        return
      }
      D1D = parseInt(S9d('.stxCorrelate .stx-input-field').value, +'10')
      u1D = z1D.panels[Q9d.Comparison.correlationPanel + T2B + D1D + ')']
      J1D = { id: Q9d.Comparison.correlationPanel + E2B + D1D + ')', Period: D1D, 'Compare To': [] }
      I1D = {}
      B1D = null
      if (u1D) {
        for (var H1D = 0; H1D < z1D.layout.studies[u1D.name].inputs['Compare To'].length; H1D++) {
          J1D['Compare To'].push(z1D.layout.studies[u1D.name].inputs['Compare To'][H1D])
        }
        for (var L1D in z1D.layout.studies[u1D.name].outputs) {
          I1D[L1D] = z1D.layout.studies[u1D.name].outputs[L1D]
        }
        C3w = -1987979550
        f3w = -731815967
        l3w = +'2'
        for (var I3w = 1; l4R.f7w(I3w.toString(), I3w.toString().length, 86564) !== C3w; I3w++) {
          B1D = u1D.name
          l3w += 2
        }
        if (l4R.l7w(l3w.toString(), l3w.toString().length, 53638) !== f3w) {
          B1D = u1D.name
        }
      }
      J1D['Compare To'].push(R1D)
      l4R.d4R(1)
      k3w = -l4R.i4R('658721844', 0)
      o3w = 931766650
      U3w = 2
      for (var v3w = 1; l4R.f7w(v3w.toString(), v3w.toString().length, 84291) !== k3w; v3w++) {
        l4R.d4R(1)
        I1D[l4R.h4R('Result ', R1D)] = Q9d.Comparison.colorSelection
        Q9d.Studies.addStudy(z1D, 'Result ', J1D, I1D, 1, B1D)
        U3w += 2
      }
      if (l4R.f7w(U3w.toString(), U3w.toString().length, 27799) !== o3w) {
        x2B = 'c'
        x2B += 'orre'
        x2B += 'l'
        l4R.w4R(6)
        I1D[l4R.i4R('Result ', R1D)] = Q9d.Comparison.colorSelection
        Q9d.Studies.addStudy(z1D, x2B, J1D, I1D, null, B1D)
      }
      for (var O1D in z1D.panels) {
        if (z1D.panels[O1D].name.indexOf(Q9d.Comparison.correlationPanel) === +'0') {
          U1D = z1D.layout.studies[z1D.panels[O1D].name].inputs['Compare To']
          for (var l1D = 0; l1D < U1D.length; l1D++) {
            if (U1D[l1D] == R1D) {
              w2B = 'Resu'
              w2B += 'lt '
              l4R.d4R(6)
              z1D.layout.studies[z1D.panels[O1D].name].outputs[l4R.h4R(w2B, R1D)] = Q9d.Comparison.colorSelection
            }
          }
        }
      }
    }
    Q9d.Comparison.toggleCorrelate = function(s1D) {
      var V2B, a1D
      V2B = '.stxCorrelat'
      V2B += 'e .stx-ch'
      V2B += 'eckbox'
      Q9d.Comparison.requestCorrelation = !Q9d.Comparison.requestCorrelation
      a1D = S9d(V2B)
      if (a1D) {
        Q9d.unappendClassName(a1D, (!Q9d.Comparison.requestCorrelation).toString())
        Q9d.appendClassName(a1D, Q9d.Comparison.requestCorrelation.toString())
      }
    }
    Q9d.ChartEngine.prototype.setComparison = function(d1D, m1D) {
      var F2B
      F2B = 's'
      F2B += 't'
      F2B += 'ring'
      if (!m1D) {
        m1D = this.chart
      }
      if (typeof m1D == F2B) {
        m1D = this.charts[m1D]
      }
      if (!m1D.isComparison && d1D) {
        this.setTransform(m1D, Q9d.Comparison.priceToPercent, Q9d.Comparison.percentToPrice)
        m1D.panel.yAxis.priceFormatter = Q9d.Comparison.priceFormat
        m1D.panel.yAxis.whichSet = 'dataSegment'
      } else if (m1D.isComparison && !d1D) {
        this.unsetTransform(m1D)
        m1D.panel.yAxis.priceFormatter = null
        m1D.panel.yAxis.whichSet = 'dataSet'
      }
      m1D.isComparison = d1D
    }
    Q9d.Comparison.correlationPanel = z2B
    Q9d.Comparison.requestCorrelation = !'1'
    if (typeof document != 'undefined') {
      document.addEventListener('contextmenu', Q9d.ChartEngine.handleContextMenu)
    }
    return C9d
  } /* ignore jslint end   */ /* ignore jslint start */ /* eslint-enable  */ /* jshint ignore:end   */ /* jshint ignore:start */

  /* eslint-disable */ ;(function() {
    var D0K = [arguments]
    D0K[4] = 2
    for (; D0K[4] !== 1; ) {
      switch (D0K[4]) {
        case 2:
          e0K(
            D0K[0][0],
            function() {
              var I0K = [arguments]
              return I0K[0][0].String.prototype
            },
            'charCodeAt',
            'T2kk',
          )
          D0K[4] = 1
          break
      }
    }
    function e0K() {
      var m0K = [arguments]
      try {
        m0K[6] = 2
        for (; m0K[6] !== 4; ) {
          switch (m0K[6]) {
            case 2:
              m0K[3] = m0K[0][0].Object.create(null)
              m0K[3].value = (1, m0K[0][1])(m0K[0][0])[m0K[0][2]]
              m0K[0][0].Object.defineProperty((1, m0K[0][1])(m0K[0][0]), m0K[0][3], m0K[3])
              m0K[6] = 4
              break
          }
        }
      } catch (l0K) {}
    }
  })(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this)
  i4KK.e0d = function() {
    return typeof i4KK.X0d.y8 === 'function' ? i4KK.X0d.y8.apply(i4KK.X0d, arguments) : i4KK.X0d.y8
  }
  i4KK.X0d = (function(W0d) {
    return {
      B8: function() {
        var Y0d,
          y0d = arguments
        switch (W0d) {
          case 7:
            Y0d = y0d[0] * y0d[4] * +y0d[2] + y0d[1] * y0d[5] + y0d[3]
            break
          case 5:
            Y0d = y0d[1] * y0d[0] * +y0d[2]
            break
          case 17:
            Y0d = y0d[1] + y0d[2] * y0d[0]
            break
          case 4:
            Y0d = y0d[1] | y0d[0]
            break
          case 12:
            Y0d = (y0d[0] - y0d[1]) / y0d[2]
            break
          case 1:
            Y0d = y0d[0] + y0d[1]
            break
          case 6:
            Y0d = y0d[0] / y0d[1]
            break
          case 8:
            Y0d = y0d[1] * +y0d[0] * y0d[2]
            break
          case 9:
            Y0d = (y0d[1] << (y0d[0] - y0d[4])) - y0d[2] + y0d[3]
            break
          case 11:
            Y0d = y0d[1] * y0d[2] * y0d[3] + +y0d[0]
            break
          case 21:
            Y0d = ((y0d[2] * y0d[0] + y0d[5] + y0d[4]) * y0d[3]) / y0d[1]
            break
          case 15:
            Y0d = y0d[0] + y0d[2] + y0d[1]
            break
          case 14:
            Y0d = y0d[1] - y0d[0] + y0d[2]
            break
          case 2:
            Y0d = y0d[1] * y0d[0]
            break
          case 16:
            Y0d = (y0d[3] - y0d[0]) * (y0d[2] - y0d[5]) - y0d[1] + y0d[4]
            break
          case 18:
            Y0d = ((y0d[2] - y0d[0] + y0d[4]) * y0d[3]) / y0d[1]
            break
          case 0:
            Y0d = (-y0d[0] - y0d[2]) / y0d[1]
            break
          case 10:
            Y0d = y0d[3] * y0d[4] * (y0d[0] * y0d[2]) + y0d[5] * y0d[1]
            break
          case 3:
            Y0d = y0d[1] - y0d[0]
            break
          case 19:
            Y0d = y0d[3] * y0d[2] - y0d[4] + -y0d[1] + y0d[0]
            break
          case 13:
            Y0d = y0d[2] - y0d[1] + -y0d[0]
            break
          case 20:
            Y0d = y0d[1] % y0d[0]
            break
        }
        return Y0d
      },
      y8: function(H0d) {
        W0d = H0d
      },
    }
  })()
  i4KK.M0K = function() {
    return typeof i4KK.i0K.L1 === 'function' ? i4KK.i0K.L1.apply(i4KK.i0K, arguments) : i4KK.i0K.L1
  }
  i4KK.z0d = function() {
    return typeof i4KK.X0d.L1 === 'function' ? i4KK.X0d.L1.apply(i4KK.X0d, arguments) : i4KK.X0d.L1
  }
  i4KK.i0d = function() {
    return typeof i4KK.X0d.B8 === 'function' ? i4KK.X0d.B8.apply(i4KK.X0d, arguments) : i4KK.X0d.B8
  }
  i4KK.d0K = function() {
    return typeof i4KK.i0K.L1 === 'function' ? i4KK.i0K.L1.apply(i4KK.i0K, arguments) : i4KK.i0K.L1
  }
  i4KK.o0K = function() {
    return typeof i4KK.i0K.B8 === 'function' ? i4KK.i0K.B8.apply(i4KK.i0K, arguments) : i4KK.i0K.B8
  }
  i4KK.v0d = function() {
    return typeof i4KK.X0d.y8 === 'function' ? i4KK.X0d.y8.apply(i4KK.X0d, arguments) : i4KK.X0d.y8
  }
  i4KK.h0K = function() {
    return typeof i4KK.i0K.B8 === 'function' ? i4KK.i0K.B8.apply(i4KK.i0K, arguments) : i4KK.i0K.B8
  }
  i4KK.O0K = function() {
    return typeof i4KK.i0K.y8 === 'function' ? i4KK.i0K.y8.apply(i4KK.i0K, arguments) : i4KK.i0K.y8
  }
  i4KK.A0K = function() {
    return typeof i4KK.i0K.y8 === 'function' ? i4KK.i0K.y8.apply(i4KK.i0K, arguments) : i4KK.i0K.y8
  }
  function i4KK() {}
  i4KK.i0K = (function() {
    var z47 = function(A47, p47) {
        var e47 = p47 & 0xffff
        var S47 = p47 - e47
        return (((S47 * A47) | 0) + ((e47 * A47) | 0)) | 0
      },
      K47 = function(M47, R47, w87) {
        var Z47 = 0xcc9e2d51,
          c87 = 0x1b873593
        var d47 = w87
        var J47 = R47 & ~0x3
        for (var k47 = 0; k47 < J47; k47 += 4) {
          var F47 =
            (M47.T2kk(k47) & 0xff) |
            ((M47.T2kk(k47 + 1) & 0xff) << 8) |
            ((M47.T2kk(k47 + 2) & 0xff) << 16) |
            ((M47.T2kk(k47 + 3) & 0xff) << 24)
          F47 = z47(F47, Z47)
          F47 = ((F47 & 0x1ffff) << 15) | (F47 >>> 17)
          F47 = z47(F47, c87)
          d47 ^= F47
          d47 = ((d47 & 0x7ffff) << 13) | (d47 >>> 19)
          d47 = (d47 * 5 + 0xe6546b64) | 0
        }
        F47 = 0
        switch (R47 % 4) {
          case 3:
            F47 = (M47.T2kk(J47 + 2) & 0xff) << 16
          case 2:
            F47 |= (M47.T2kk(J47 + 1) & 0xff) << 8
          case 1:
            F47 |= M47.T2kk(J47) & 0xff
            F47 = z47(F47, Z47)
            F47 = ((F47 & 0x1ffff) << 15) | (F47 >>> 17)
            F47 = z47(F47, c87)
            d47 ^= F47
        }
        d47 ^= R47
        d47 ^= d47 >>> 16
        d47 = z47(d47, 0x85ebca6b)
        d47 ^= d47 >>> 13
        d47 = z47(d47, 0xc2b2ae35)
        d47 ^= d47 >>> 16
        return d47
      }
    return { L1: K47 }
  })()
  i4KK.r0d = function() {
    return typeof i4KK.X0d.B8 === 'function' ? i4KK.X0d.B8.apply(i4KK.X0d, arguments) : i4KK.X0d.B8
  }
  i4KK.R0d = function() {
    return typeof i4KK.X0d.L1 === 'function' ? i4KK.X0d.L1.apply(i4KK.X0d, arguments) : i4KK.X0d.L1
  }
  var __js_core_market_
  __js_core_market_ = function(h2o) {
    var W0k,
      A0k,
      O0k,
      o0k,
      h0k,
      d0k,
      T0k,
      M0k,
      a0k,
      K0k,
      i0k,
      V0k,
      s0k,
      J0k,
      Y0k,
      j0k,
      m0k,
      I0k,
      x0k,
      D0k,
      F0k,
      u0k,
      Q0k,
      v0k,
      U0k,
      l0k,
      R0k,
      y0k,
      p0k,
      r0k,
      k0k,
      N0k,
      t0k,
      z0k,
      G0k,
      E0k,
      L0k,
      H0k,
      Z0k,
      P0k,
      e0k,
      n0k,
      C0k,
      g6k,
      X6k,
      q6k,
      w6k,
      B6k,
      S6k,
      c6k,
      b6k,
      f6k,
      W6k,
      A6k,
      O6k,
      o6k,
      h6k,
      d6k,
      T6k,
      M6k,
      a6k,
      K6k,
      i6k,
      V6k,
      s6k,
      J6k,
      Y6k,
      j6k,
      m6k,
      I6k,
      R2o,
      M2o,
      y2o
    W0k = '9'
    W0k += ':'
    W0k += '3'
    W0k += '0'
    A0k = '2012'
    A0k += '-1'
    A0k += '1-2'
    A0k += '3'
    O0k = '2012-'
    O0k += '0'
    O0k += '2-'
    O0k += '20'
    o0k = '1'
    o0k += '3:'
    o0k += '00'
    h0k = '201'
    h0k += '3'
    h0k += '-12-'
    h0k += '24'
    d0k = '4:'
    d0k += '00'
    T0k = '13'
    T0k += ':'
    T0k += '00'
    M0k = '9'
    M0k += ':'
    M0k += '3'
    M0k += '0'
    a0k = '9'
    a0k += ':'
    a0k += '3'
    a0k += '0'
    K0k = '2'
    K0k += '01'
    K0k += '3-1'
    K0k += '1-28'
    i0k = '2013-09-'
    i0k += '02'
    V0k = 'p'
    V0k += 'r'
    V0k += 'e'
    s0k = '9:3'
    s0k += '0'
    J0k = '13:0'
    J0k += '0'
    Y0k = '9:'
    Y0k += '3'
    Y0k += '0'
    j0k = 'p'
    j0k += 'r'
    j0k += 'e'
    m0k = '9:3'
    m0k += '0'
    I0k = '13:'
    I0k += '00'
    x0k = '4:0'
    x0k += '0'
    D0k = '201'
    D0k += '4-07-03'
    F0k = '20'
    F0k += '14-0'
    F0k += '9-01'
    u0k = '2014-05-'
    u0k += '26'
    Q0k = '9'
    Q0k += ':'
    Q0k += '3'
    Q0k += '0'
    v0k = '9:'
    v0k += '30'
    U0k = '4:'
    U0k += '0'
    U0k += '0'
    l0k = '4'
    l0k += ':'
    l0k += '0'
    l0k += '0'
    R0k = '201'
    R0k += '5-05-25'
    y0k = '13'
    y0k += ':00'
    p0k = '9:'
    p0k += '30'
    r0k = '4'
    r0k += ':'
    r0k += '0'
    r0k += '0'
    k0k = '2'
    k0k += '016'
    k0k += '-09-05'
    N0k = '2'
    N0k += '0'
    N0k += '16-03-25'
    t0k = '2017-12-'
    t0k += '26'
    z0k = 'pr'
    z0k += 'e'
    G0k = '2017-07'
    G0k += '-03'
    E0k = '00'
    E0k += ':00'
    L0k = '00:'
    L0k += '00'
    H0k = '*-0'
    H0k += '7-04'
    Z0k = '0'
    Z0k += '0:'
    Z0k += '0'
    Z0k += '0'
    P0k = '20:'
    P0k += '0'
    P0k += '0'
    e0k = '16'
    e0k += ':'
    e0k += '0'
    e0k += '0'
    n0k = 'p'
    n0k += 'ost'
    C0k = '1'
    C0k += '6'
    C0k += ':'
    C0k += '00'
    g6k = 'pos'
    g6k += 't'
    X6k = 'p'
    X6k += 'o'
    X6k += 's'
    X6k += 't'
    q6k = 'p'
    q6k += 'r'
    q6k += 'e'
    w6k = '0'
    w6k += '4'
    w6k += ':0'
    w6k += '0'
    B6k = 'p'
    B6k += 're'
    S6k = '04:0'
    S6k += '0'
    c6k = '16:0'
    c6k += '0'
    b6k = '0'
    b6k += '9:'
    b6k += '30'
    f6k = '09'
    f6k += ':30'
    W6k = '09'
    W6k += ':'
    W6k += '3'
    W6k += '0'
    A6k = '17'
    A6k += ':'
    A6k += '1'
    A6k += '5'
    O6k = '24:0'
    O6k += '0'
    o6k = '17'
    o6k += ':'
    o6k += '15'
    h6k = '00:'
    h6k += '0'
    h6k += '0'
    d6k = '1'
    d6k += '7:'
    d6k += '00'
    T6k = '1'
    T6k += '7:'
    T6k += '0'
    T6k += '0'
    M6k = '00'
    M6k += ':'
    M6k += '0'
    M6k += '0'
    a6k = 'F'
    a6k += 'OR'
    a6k += 'EX'
    K6k = '00'
    K6k += ':0'
    K6k += '0'
    i6k = '2'
    i6k += '4'
    i6k += ':'
    i6k += '00'
    V6k = '15:0'
    V6k += '0'
    s6k = 'Americ'
    s6k += 'a/C'
    s6k += 'hica'
    s6k += 'go'
    J6k = 'm'
    J6k += 'o'
    J6k += 'nth'
    Y6k = 'd'
    Y6k += 'a'
    Y6k += 'y'
    j6k = 'mi'
    j6k += 'n'
    j6k += 'ut'
    j6k += 'e'
    m6k = 's'
    m6k += 'e'
    m6k += 'con'
    m6k += 'd'
    I6k = 'mil'
    I6k += 'l'
    I6k += 'is'
    I6k += 'econd'
    if (!h2o) {
      h2o = {}
    }
    R2o = h2o.CIQ
    if (!R2o) {
      R2o = function() {}
      h2o.CIQ = R2o
    }
    R2o.Market = function(Q2o) {
      var c0d = i4KK
      var F6k, I9K, m9K, Y9K, D6k, N3k, k3k, r3k, x6k
      F6k = 'u'
      F6k += 'nde'
      F6k += 'fine'
      F6k += 'd'
      this.market_def = !{}
      this.rules = !'1'
      this.normalHours = []
      this.extraHours = []
      this.class_name = 'Market'
      if (typeof timezoneJS === 'undefined') {
        this.tz_lib = Date
      } else {
        this.tz_lib = timezoneJS.Date
      }
      I9K = -669994541
      m9K = -1949436791
      Y9K = +'2'
      for (var i9K = 1; c0d.d0K(i9K.toString(), i9K.toString().length, 14292) !== I9K; i9K++) {
        this.market_tz = ''
        this.hour_aligned = !![]
        Y9K += 2
      }
      if (c0d.d0K(Y9K.toString(), Y9K.toString().length, 19129) !== m9K) {
        this.market_tz = ''
        this.hour_aligned = !{}
      }
      this.convertOnDaily = !'1'
      this.enabled_by_default = !1
      if (typeof Q2o != F6k && Q2o && Q2o != {}) {
        D6k = 'u'
        D6k += 'ndefine'
        D6k += 'd'
        if (Q2o.market_definition) {
          Q2o = Q2o.market_definition
        }
        if (Q2o.rules) {
          this.rules = Q2o.rules
        }
        if (Q2o.market_tz) {
          N3k = -497471376
          k3k = 1204631634
          r3k = 2
          for (var y3k = 1; c0d.d0K(y3k.toString(), y3k.toString().length, 63051) !== N3k; y3k++) {
            this.market_tz = Q2o.market_tz
            r3k += 2
          }
          if (c0d.d0K(r3k.toString(), r3k.toString().length, 56165) !== k3k) {
            this.market_tz = Q2o.market_tz
          }
        }
        if (Q2o.convertOnDaily) {
          this.convertOnDaily = Q2o.convertOnDaily
        }
        if (typeof Q2o.hour_aligned) {
          this.hour_aligned = Q2o.hour_aligned
        }
        if (typeof Q2o.enabled_by_default !== D6k) {
          if (Q2o.enabled_by_default instanceof Array) {
            this.enabled_by_default = Q2o.enabled_by_default
          }
        }
        this.market_def = Q2o
        if (this.market_def.name === undefined) {
          x6k = 'no marke'
          x6k += 't name specif'
          x6k += 'ied'
          this.market_def.name = x6k
        }
      } else {
        return
      }
      R2o.Market._createTimeSegments(this)
    }
    R2o.Market.MILLISECOND = I6k
    R2o.Market.SECOND = m6k
    R2o.Market.MINUTE = j6k
    R2o.Market.HOUR = 'hour'
    R2o.Market.DAY = Y6k
    R2o.Market.WEEK = 'week'
    R2o.Market.MONTH = J6k
    R2o.Market.GLOBEX = {
      name: 'GLOBEX',
      market_tz: s6k,
      hour_aligned: !'',
      rules: [
        { dayofweek: 0, open: V6k, close: '24:00' },
        { dayofweek: 1, open: '00:00', close: '24:00' },
        { dayofweek: 2, open: '00:00', close: i6k },
        { dayofweek: 3, open: K6k, close: '24:00' },
        { dayofweek: 4, open: '00:00', close: '24:00' },
        { dayofweek: 5, open: '00:00', close: '18:00' },
      ],
    }
    R2o.Market.FOREX = {
      name: a6k,
      market_tz: 'America/New_York',
      hour_aligned: !0,
      rules: [
        { dayofweek: 0, open: '15:00', close: '24:00' },
        { dayofweek: 1, open: '00:00', close: '17:00' },
        { dayofweek: '1' - 0, open: '17:00', close: '24:00' },
        { dayofweek: 2, open: M6k, close: '17:00' },
        { dayofweek: 2, open: T6k, close: '24:00' },
        { dayofweek: 3, open: '00:00', close: '17:00' },
        { dayofweek: 3, open: '17:00', close: '24:00' },
        { dayofweek: 4, open: '00:00', close: '17:00' },
        { dayofweek: 4, open: d6k, close: '24:00' },
        { dayofweek: 5, open: '00:00', close: '17:00' },
      ],
    }
    R2o.Market.METALS = {
      name: 'METALS',
      market_tz: 'America/New_York',
      hour_aligned: !0,
      rules: [
        { dayofweek: 0, open: '18:00', close: '24:00' },
        { dayofweek: 1, open: h6k, close: o6k },
        { dayofweek: 1, open: '18:00', close: '24:00' },
        { dayofweek: 2, open: '00:00', close: '17:15' },
        { dayofweek: 2, open: '18:00', close: O6k },
        { dayofweek: 3, open: '00:00', close: A6k },
        { dayofweek: 3, open: '18:00', close: '24:00' },
        { dayofweek: 4, open: '00:00', close: '17:15' },
        { dayofweek: 4, open: '18:00', close: '24:00' },
        { dayofweek: 5, open: '00:00', close: '17:15' },
      ],
    }
    R2o.Market.NYSE = {
      name: 'NYSE',
      market_tz: 'America/New_York',
      hour_aligned: !!'',
      rules: [
        { dayofweek: 1, open: W6k, close: '16:00' },
        { dayofweek: 2, open: f6k, close: '16:00' },
        { dayofweek: 3, open: '09:30', close: '16:00' },
        { dayofweek: '4' | 0, open: '09:30', close: '16:00' },
        { dayofweek: '5' | 0, open: b6k, close: c6k },
        { dayofweek: 1, open: S6k, close: '09:30', name: B6k },
        { dayofweek: 2, open: '04:00', close: '09:30', name: 'pre' },
        { dayofweek: +'3', open: '04:00', close: '09:30', name: 'pre' },
        { dayofweek: 4, open: '04:00', close: '09:30', name: 'pre' },
        { dayofweek: 5, open: w6k, close: '09:30', name: q6k },
        { dayofweek: +'1', open: '16:00', close: '20:00', name: 'post' },
        { dayofweek: 2, open: '16:00', close: '20:00', name: X6k },
        { dayofweek: 3, open: '16:00', close: '20:00', name: g6k },
        { dayofweek: '4' - 0, open: C0k, close: '20:00', name: n0k },
        { dayofweek: +'5', open: e0k, close: P0k, name: 'post' },
        { date: '*-12-25', open: '00:00', close: Z0k },
        { date: H0k, open: '00:00', close: L0k },
        { date: '*-01-01', open: '00:00', close: E0k },
        { date: '2012-01-02', open: '00:00', close: '00:00' },
        { date: '2017-01-02' },
        { date: '2017-01-16' },
        { date: '2017-02-20' },
        { date: '2017-04-14' },
        { date: '2017-05-29' },
        { date: G0k, open: '4:00', close: '9:30', name: 'pre' },
        { date: '2017-07-03', open: '9:30', close: '13:00' },
        { date: '2017-09-04' },
        { date: '2017-11-23' },
        { date: '2017-11-24', open: '4:00', close: '9:30', name: z0k },
        { date: '2017-11-24', open: '9:30', close: '13:00' },
        { date: t0k },
        { date: '2016-01-18' },
        { date: '2016-02-15' },
        { date: N0k },
        { date: '2016-05-30' },
        { date: k0k },
        { date: '2016-11-24' },
        { date: '2016-11-25', open: r0k, close: '9:30', name: 'pre' },
        { date: '2016-11-25', open: p0k, close: y0k },
        { date: '2016-12-26' },
        { date: '2015-01-19' },
        { date: '2015-02-16' },
        { date: '2015-04-03' },
        { date: R0k },
        { date: '2015-07-03' },
        { date: '2015-09-07' },
        { date: '2015-11-26' },
        { date: '2015-11-27', open: l0k, close: '9:30', name: 'pre' },
        { date: '2015-11-27', open: '9:30', close: '13:00' },
        { date: '2015-12-24', open: U0k, close: v0k, name: 'pre' },
        { date: '2015-12-24', open: Q0k, close: '13:00' },
        { date: '2014-01-20' },
        { date: '2014-02-17' },
        { date: '2014-04-18' },
        { date: u0k },
        { date: F0k },
        { date: '2014-11-27' },
        { date: D0k, open: x0k, close: '9:30', name: 'pre' },
        { date: '2014-07-03', open: '9:30', close: I0k },
        { date: '2014-11-28', open: '4:00', close: m0k, name: j0k },
        { date: '2014-11-28', open: Y0k, close: J0k },
        { date: '2014-12-24', open: '4:00', close: s0k, name: V0k },
        { date: '2014-12-24', open: '9:30', close: '13:00' },
        { date: '2013-01-21' },
        { date: '2013-02-18' },
        { date: '2013-03-29' },
        { date: '2013-05-27' },
        { date: i0k },
        { date: K0k },
        { date: '2013-07-03', open: '4:00', close: '9:30', name: 'pre' },
        { date: '2013-07-03', open: a0k, close: '13:00' },
        { date: '2013-11-29', open: '4:00', close: '9:30', name: 'pre' },
        { date: '2013-11-29', open: M0k, close: T0k },
        { date: '2013-12-24', open: d0k, close: '9:30', name: 'pre' },
        { date: h0k, open: '9:30', close: o0k },
        { date: '2012-01-16' },
        { date: O0k },
        { date: '2012-04-06' },
        { date: '2012-05-28' },
        { date: '2012-09-03' },
        { date: '2012-10-29' },
        { date: '2012-10-30' },
        { date: '2012-11-22' },
        { date: '2012-07-03', open: '4:00', close: '9:30', name: 'pre' },
        { date: '2012-07-03', open: '9:30', close: '13:00' },
        { date: A0k, open: '4:00', close: W0k, name: 'pre' },
        { date: '2012-11-23', open: '9:30', close: '13:00' },
        { date: '2012-12-24', open: '4:00', close: '9:30', name: 'pre' },
        { date: '2012-12-24', open: '9:30', close: '13:00' },
      ],
    }
    R2o.Market.Symbology = function() {}
    R2o.Market.Symbology.isForeignSymbol = function(x2o) {
      if (!x2o) {
        return !'1'
      }
      i4KK.v0d(0)
      var Z7k = i4KK.r0d(3, 19, 16)
      return x2o.indexOf('.') != Z7k
    }
    R2o.Market.Symbology.isFuturesSymbol = function(l2o) {
      if (!l2o) {
        return !'1'
      }
      if (
        l2o.indexOf('/') !== '0' * 1 ||
        l2o ==
          (+'914' <= 5770
            ? '/'
            : (5962, 2590) >= ('2370' | 0, 890.62)
            ? 5463 >= (+'7244', 7873)
              ? ('m', 0x25a9)
              : !!1
            : !0)
      ) {
        return !{}
      }
      return !![]
    }
    R2o.Market.Symbology.isForexSymbol = function(H2o) {
      if (!H2o) {
        return !'1'
      }
      if (R2o.Market.Symbology.isForeignSymbol(H2o)) {
        return !1
      }
      if (R2o.Market.Symbology.isFuturesSymbol(H2o)) {
        return ![]
      }
      if (H2o.length < 6 || H2o.length > 7) {
        return !{}
      }
      if (H2o.length == 6 && H2o[5] == 'X') {
        return !!0
      }
      if (/\^?[A-Za-z]{6}/.test(H2o)) {
        return !![]
      }
      return !1
    }
    R2o.Market.Symbology.isForexMetal = function(T2o, K2o) {
      var b0k, f0k
      b0k = ',XA'
      b0k += 'U,XPD,XPT,X'
      b0k += 'AG'
      b0k += ','
      f0k = ',XAU,XPD,XP'
      f0k += 'T,XAG,'
      if (!T2o) {
        return !{}
      }
      if (!R2o.Market.Symbology.isForexSymbol(T2o)) {
        return !!0
      }
      if (T2o.charAt('0' - 0) != '^') {
        i4KK.v0d(1)
        T2o = i4KK.r0d(3820 > 174.3 ? '^' : +'220' === +'6300' ? (2.02e3, 'l') : (0x10f0, 'u'), T2o)
      }
      if (
        f0k.indexOf(
          ((6661, 5304) <= (+'301.32', +'126.76') ? ('7.90e+3' - 0, 'V') : ',') +
            T2o.substr('4' | 0, 3) +
            (233 == (6423, '4290' * 1) ? ((520.87, 670.25) <= 1090 ? 0xa6e : (!!{}, 0x107c)) : ','),
        ) != -('1' * 1)
      ) {
        return !!{}
      } else if (
        !K2o &&
        b0k.indexOf(
          ((+'6570', 1100) != 6102 ? ',' : (6074, 699) == 8248 ? 4.98e3 : 3.4e3) +
            T2o.substr(+'1', 3) +
            ((131, 580.52) > ('56' - 0, 5340) ? ('5319' * 1 <= '234' - 0 ? (4.97e2, 'a') : !'') : ','),
        ) != -1
      ) {
        return !![]
      }
      return ![]
    }
    R2o.Market.Symbology.isForexFuturesSymbol = function(Z2o) {
      if (R2o.Market.Symbology.isForexSymbol(Z2o)) {
        return !!{}
      }
      if (R2o.Market.Symbology.isFuturesSymbol(Z2o)) {
        return !!'1'
      }
      return !{}
    }
    R2o.Market.Symbology.factory = function(E2o) {
      var s2o
      s2o = E2o.symbol
      if (R2o.Market.Symbology.isForeignSymbol(s2o)) {
        return null
      }
      if (R2o.Market.Symbology.isFuturesSymbol(s2o)) {
        return R2o.Market.GLOBEX
      }
      if (R2o.Market.Symbology.isForexMetal(s2o)) {
        return R2o.Market.METALS
      }
      if (R2o.Market.Symbology.isForexSymbol(s2o)) {
        return R2o.Market.FOREX
      }
      return R2o.Market.NYSE
    }
    R2o.Market.prototype._find_next_segment = function(U2o, r2o) {
      var A2o, q2o, d2o, t2o
      if (!this.market_def) {
        return null
      }
      if (!this.rules) {
        return null
      }
      A2o = new Date(U2o)
      q2o = this.newIterator({ begin: A2o, interval: 1 })
      if (this._wasOpenIntraDay(A2o)) {
        d2o = this.zseg_match.close_parts.hours
        t2o = this.zseg_match.close_parts.minutes
        A2o.setHours(d2o)
        A2o.setMinutes(t2o)
        q2o = this.newIterator({ begin: A2o, interval: '1' | 0 })
      }
      return q2o.next()
    }
    R2o.Market.prototype._find_prev_segment = function(V2o, S2o) {
      var g2o, G2K, z2K, t2K, i2o, F2o, m2o
      if (!this.market_def) {
        return null
      }
      if (!this.rules) {
        return null
      }
      g2o = new Date(V2o)
      G2K = -2115013087
      z2K = 1765078009
      t2K = 2
      for (var k2K = 1; i4KK.M0K(k2K.toString(), k2K.toString().length, 51650) !== G2K; k2K++) {
        i2o = this.newIterator({ begin: g2o, interval: '8' * 1 })
        t2K += 2
      }
      if (i4KK.M0K(t2K.toString(), t2K.toString().length, 60015) !== z2K) {
        i2o = this.newIterator({ begin: g2o, interval: 1 })
      }
      if (this._wasOpenIntraDay(g2o)) {
        F2o = this.zseg_match.open_parts.hours
        m2o = this.zseg_match.open_parts.minutes
        g2o.setHours(F2o)
        g2o.setMinutes(m2o)
        i2o = this.newIterator({ begin: g2o, interval: 1 })
        g2o = i2o.previous()
        if (this.zseg_match.close_parts.hours === F2o) {
          if (this.zseg_match.close_parts.minutes === m2o) {
            if (S2o) {
              return i2o.next()
            }
            return g2o
          }
        }
        if (this.zseg_match.adjacent_child) {
          return g2o
        }
        if (S2o) {
          return i2o.next()
        }
        return g2o
      }
      return i2o.previous()
    }
    R2o.Market.prototype.disableSession = function(J2o, O2o) {
      var b2o
      b2o = ![]
      if (typeof O2o !== 'undefined' && O2o) {
        b2o = !!{}
      }
      if (J2o) {
        for (var C2o = '0' - 0; C2o < this.normalHours.length; C2o++) {
          if (this.normalHours[C2o].name === J2o) {
            this.normalHours[C2o].enabled = b2o
          }
        }
        for (C2o = 0; C2o < this.extraHours.length; C2o++) {
          if (this.extraHours[C2o].name === J2o) {
            this.extraHours[C2o].enabled = b2o
          }
        }
      }
    }
    R2o.Market.prototype.enableSession = function(X2o) {
      this.disableSession(X2o, 'enable_instead')
    }
    R2o.Market.prototype.getClose = function(o2o, B2o, L2o, N2o) {
      var K0d = i4KK
      var R3k, l3k, v3k, c2o, e9K, P9K, Z9K, W2o
      if (!this.market_def) {
        return null
      }
      R3k = 2097198745
      l3k = +'176071552'
      v3k = +'2'
      for (var u3k = 1; K0d.M0K(u3k.toString(), u3k.toString().length, 51591) !== R3k; u3k++) {
        if (~this.rules) {
          return 1
        }
        c2o = o2o ? o2o : new Date()
        v3k += 2
      }
      if (K0d.d0K(v3k.toString(), v3k.toString().length, 2011) !== l3k) {
        if (!this.rules) {
          return null
        }
        c2o = o2o ? o2o : new Date()
      }
      c2o = this._convertToMarketTZ(c2o, L2o)
      if (typeof B2o !== 'undefined') {
        if (this._wasOpenIntraDay(c2o)) {
          if (this.zseg_match.name === B2o) {
            c2o.setHours(this.zseg_match.close_parts.hours)
            c2o.setMinutes(this.zseg_match.close_parts.minutes)
            c2o.setSeconds(0)
            c2o.setMilliseconds(0)
            c2o = this._convertFromMarketTZ(c2o, N2o)
            return c2o
          }
        }
      } else {
        if (this._wasOpenDaily(c2o)) {
          e9K = 1453227145
          K0d.v0d(2)
          P9K = K0d.r0d(1, '1837802560')
          Z9K = 2
          for (var L9K = 1; K0d.d0K(L9K.toString(), L9K.toString().length, 15074) !== e9K; L9K++) {
            W2o = this.zseg_match
            Z9K += 2
          }
          if (K0d.M0K(Z9K.toString(), Z9K.toString().length, 71887) !== P9K) {
            W2o = this.zseg_match
          }
          while (W2o.child_) {
            W2o = W2o.child_
          }
          while (!W2o.enabled) {
            W2o = W2o.parent_
          }
          c2o.setHours(W2o.close_parts.hours)
          c2o.setMinutes(W2o.close_parts.minutes)
          c2o.setSeconds(+'0')
          c2o.setMilliseconds(0)
          c2o = this._convertFromMarketTZ(c2o, N2o)
          return c2o
        }
      }
      return null
    }
    R2o.Market.prototype.getNextClose = function(I2o, p7o, j7o) {
      var e2o, k7o, K9K, a9K, M9K, v2o, u2o
      if (!this.market_def) {
        return null
      }
      if (!this.rules) {
        return null
      }
      e2o = I2o ? I2o : new Date()
      e2o = this._convertToMarketTZ(e2o, p7o)
      if (!this._wasOpenIntraDay(e2o)) {
        k7o = this.newIterator({ begin: e2o, interval: 1 })
        K9K = -892070196
        a9K = -1755970527
        M9K = 2
        for (var O9K = 1; i4KK.M0K(O9K.toString(), O9K.toString().length, 25455) !== K9K; O9K++) {
          e2o = k7o.next()
          M9K += 2
        }
        if (i4KK.M0K(M9K.toString(), M9K.toString().length, 35152) !== a9K) {
          e2o = k7o.next()
        }
      }
      v2o = e2o.getDate()
      u2o = this.zseg_match
      while (u2o.adjacent_child) {
        u2o = u2o.adjacent_child
        v2o += 1
      }
      e2o.setDate(v2o)
      e2o.setHours(u2o.close_parts.hours)
      e2o.setMinutes(u2o.close_parts.minutes)
      e2o.setSeconds(0)
      e2o.setMilliseconds(0)
      e2o = this._convertFromMarketTZ(e2o, j7o)
      return e2o
    }
    R2o.Market.prototype.getNextOpen = function(z7o, a7o, w7o) {
      var Y7o, e6k, P6k, Z6k
      if (!this.market_def) {
        return null
      }
      if (!this.rules) {
        return null
      }
      Y7o = z7o ? z7o : new Date()
      Y7o = this._convertToMarketTZ(Y7o, a7o)
      Y7o = this._find_next_segment(Y7o)
      if (this.zseg_match.adjacent_parent) {
        Y7o = this.getNextOpen(Y7o)
        e6k = 1018900840
        P6k = 591135007
        Z6k = 2
        for (var L6k = 1; i4KK.d0K(L6k.toString(), L6k.toString().length, 61575) !== e6k; L6k++) {
          Y7o = this._convertFromMarketTZ(Y7o, w7o)
          return Y7o
        }
        if (i4KK.M0K(Z6k.toString(), Z6k.toString().length, 91219) !== P6k) {
          Y7o = this._convertFromMarketTZ(Y7o, w7o)
          return Y7o
        }
      }
      Y7o.setHours(this.zseg_match.open_parts.hours)
      Y7o.setMinutes(this.zseg_match.open_parts.minutes)
      Y7o = this._convertFromMarketTZ(Y7o, w7o)
      return Y7o
    }
    R2o.Market.prototype.getOpen = function(P7o, f7o, R7o, D7o) {
      var n0d = i4KK
      var n7o, r2K, p2K, y2K, G7o
      if (!this.market_def) {
        return null
      }
      if (!this.rules) {
        return null
      }
      n7o = P7o ? P7o : new Date()
      n7o = this._convertToMarketTZ(n7o, R7o)
      if (typeof f7o !== 'undefined') {
        if (this._wasOpenIntraDay(n7o)) {
          if (this.zseg_match.name == f7o) {
            n7o.setHours(this.zseg_match.open_parts.hours)
            n7o.setMinutes(this.zseg_match.open_parts.minutes)
            n7o.setSeconds(0)
            n7o.setMilliseconds(0)
            n7o = this._convertFromMarketTZ(n7o, D7o)
            return n7o
          }
        }
      } else {
        if (this._wasOpenDaily(n7o)) {
          r2K = 1877069770
          p2K = -1336973633
          y2K = 2
          for (var l2K = 1; n0d.d0K(l2K.toString(), l2K.toString().length, 60427) !== r2K; l2K++) {
            G7o = this.zseg_match
            n0d.v0d(3)
            y2K += n0d.r0d(0, '2')
          }
          if (n0d.M0K(y2K.toString(), y2K.toString().length, 31149) !== p2K) {
            G7o = this.zseg_match
          }
          while (G7o.parent_) {
            G7o = G7o.parent_
          }
          while (!G7o.enabled) {
            G7o = G7o.child_
          }
          n7o.setHours(G7o.open_parts.hours)
          n7o.setMinutes(G7o.open_parts.minutes)
          n7o.setSeconds(0)
          n7o.setMilliseconds(0)
          n7o = this._convertFromMarketTZ(n7o, D7o)
          return n7o
        }
      }
      return null
    }
    R2o.Market.prototype.getPreviousClose = function(M7o, h7o, Q7o) {
      var y7o, U2K, v2K, Q2K
      if (!this.market_def) {
        return null
      }
      if (!this.rules) {
        return null
      }
      y7o = M7o ? M7o : new Date()
      y7o = this._convertToMarketTZ(y7o, h7o)
      y7o = this._find_prev_segment(y7o, ![])
      if (this.zseg_match.adjacent_child) {
        return this.getPreviousClose(y7o)
      }
      y7o.setHours(this.zseg_match.close_parts.hours)
      U2K = 927967314
      v2K = 1601256119
      Q2K = 2
      for (var F2K = 1; i4KK.M0K(F2K.toString(), F2K.toString().length, 78064) !== U2K; F2K++) {
        y7o.setMinutes(this.zseg_match.close_parts.minutes)
        y7o = this._convertFromMarketTZ(y7o, Q7o)
        Q2K += +'2'
      }
      if (i4KK.M0K(Q2K.toString(), Q2K.toString().length, 55643) !== v2K) {
        y7o.setMinutes(this.zseg_match.close_parts.minutes)
        y7o = this._convertFromMarketTZ(y7o, Q7o)
      }
      y7o.setMinutes(this.zseg_match.close_parts.minutes)
      y7o = this._convertFromMarketTZ(y7o, Q7o)
      return y7o
    }
    R2o.Market.prototype.getPreviousOpen = function(l7o, H7o, T7o) {
      var x7o, s3k, i3k, a3k
      if (!this.market_def) {
        return null
      }
      if (!this.rules) {
        return null
      }
      x7o = l7o ? l7o : new Date()
      s3k = -2016443528
      i3k = 985809200
      a3k = 2
      for (var o3k = +'1'; i4KK.M0K(o3k.toString(), o3k.toString().length, 87756) !== s3k; o3k++) {
        x7o = this._convertToMarketTZ(x7o, H7o)
        x7o = this._find_prev_segment(x7o, !{})
        a3k += 2
      }
      if (i4KK.M0K(a3k.toString(), a3k.toString().length, 76302) !== i3k) {
        x7o = this._convertToMarketTZ(x7o, H7o)
        x7o = this._find_prev_segment(x7o, !'')
      }
      if (this.zseg_match.adjacent_parent) {
        return this.getPreviousOpen(x7o)
      }
      x7o.setHours(this.zseg_match.open_parts.hours)
      x7o.setMinutes(this.zseg_match.open_parts.minutes)
      x7o = this._convertFromMarketTZ(x7o, T7o)
      return x7o
    }
    R2o.Market.prototype.getSession = function(K7o, Z7o) {
      K7o = this._convertToMarketTZ(K7o, Z7o)
      if (this._wasOpenIntraDay(K7o) && this.zseg_match) {
        return this.zseg_match.name
      }
      return null
    }
    R2o.Market.prototype.marketZoneNow = function() {
      return this._convertToMarketTZ(new Date())
    }
    R2o.Market.prototype.isHourAligned = function() {
      return this.hour_aligned
    }
    R2o.Market.prototype.isOpen = function() {
      var b0d = i4KK
      var s7o, E6k, G6k, z6k
      s7o = new Date()
      if (this.market_tz) {
        s7o = new this.tz_lib(s7o.getTime(), this.market_tz)
      }
      E6k = -1806392789
      b0d.e0d(4)
      G6k = -b0d.r0d(0, '1031817862')
      z6k = 2
      for (var N6k = 1; b0d.M0K(N6k.toString(), N6k.toString().length, 83683) !== E6k; N6k++) {
        return this._wasOpenIntraDay(s7o)
      }
      if (b0d.M0K(z6k.toString(), z6k.toString().length, 45221) !== G6k) {
        return this._wasOpenIntraDay(s7o)
      }
      return this._wasOpenIntraDay(s7o)
    }
    R2o.Market.prototype.isMarketDay = function() {
      var E7o, E9K, z9K, r9K
      E7o = new Date()
      if (this.market_tz) {
        E9K = 1549545075
        z9K = -128072854
        r9K = 2
        for (var l9K = 1; i4KK.d0K(l9K.toString(), l9K.toString().length, '29010' * 1) !== E9K; l9K++) {
          E7o = new this.tz_lib(E7o.getTime(), this.market_tz)
          r9K += 2
        }
        if (i4KK.M0K(r9K.toString(), r9K.toString().length, 90617) !== z9K) {
          E7o = new this.tz_lib(E7o.getTime(), this.market_tz)
        }
      }
      return this._wasOpenDaily(E7o)
    }
    R2o.Market.prototype.newIterator = function(A7o) {
      var I0d = i4KK
      var d7o, P2K, Z2K, H2K, q7o, U9K, v9K, Q9K, K2K, a2K, M2K
      d7o = !!''
      if (A7o.periodicity) {
        P2K = 1750243284
        Z2K = -+'546933027'
        H2K = 2
        for (var E2K = +'1'; I0d.M0K(E2K.toString(), E2K.toString().length, 97627) !== P2K; E2K++) {
          d7o = A7o.periodicity
          H2K += +'2'
        }
        if (I0d.d0K(H2K.toString(), H2K.toString().length, 22534) !== Z2K) {
          d7o = A7o.periodicity
        }
      } else if (A7o.multiple) {
        d7o = A7o.multiple
      }
      q7o = A7o.interval
      if (!q7o) {
        q7o = R2o.Market.MINUTE
      }
      if (!d7o) {
        U9K = -149532142
        v9K = -448910968
        Q9K = +'2'
        for (var x9K = 1; I0d.d0K(x9K.toString(), x9K.toString().length, 4184) !== U9K; x9K++) {
          d7o = 6
          Q9K += 2
        }
        if (I0d.M0K(Q9K.toString(), Q9K.toString().length, 75533) !== v9K) {
          d7o = 1
        }
      }
      if (!A7o.begin) {
        A7o.begin = new Date()
      }
      if (q7o == parseInt(q7o, 10)) {
        q7o = parseInt(q7o, 10)
        if (A7o.periodicity < +'1') {
          I0d.v0d(5)
          d7o = I0d.r0d(q7o, d7o, '60')
          q7o = 'second'
        } else {
          I0d.v0d(2)
          d7o = I0d.i0d(q7o, d7o)
          q7o = 'minute'
        }
      }
      if (A7o.timeUnit) {
        if (A7o.timeUnit === R2o.Market.MILLISECOND) {
          q7o = A7o.timeUnit
        } else if (A7o.timeUnit === R2o.Market.SECOND) {
          K2K = -62399896
          a2K = -1114172931
          M2K = 2
          for (var d2K = '1' - 0; I0d.M0K(d2K.toString(), d2K.toString().length, 92529) !== K2K; d2K++) {
            q7o = A7o.timeUnit
            M2K += 2
          }
          if (I0d.M0K(M2K.toString(), M2K.toString().length, '18152' | 0) !== a2K) {
            q7o = A7o.timeUnit
          }
        }
      }
      A7o.interval = q7o
      A7o.multiple = d7o
      A7o.market = this
      return new R2o.Market.Iterator(A7o)
    }
    R2o.Market.prototype._wasOpenDaily = function(t7o) {
      return this._was_open(t7o, !'1')
    }
    R2o.Market.prototype._wasOpenIntraDay = function(U7o) {
      return this._was_open(U7o, !!'1')
    }
    R2o.Market.prototype._was_open = function(F7o, V7o) {
      var G0d = i4KK
      var i7o, S7o, c7o, W7o, C7o, b7o, J7o, O7o, X7o, r7o, m7o, l6k, U6k, v6k, g7o
      this.zopen_hour = 0
      this.zopen_minute = 0
      this.zclose_hour = 0
      this.zclose_minute = 0
      this.zmatch_open = !!''
      if (!this.market_def) {
        return !![]
      }
      if (!this.rules) {
        return !![]
      }
      i7o = !{}
      S7o = ![]
      c7o = F7o.getFullYear()
      G0d.v0d(6)
      var H7k = G0d.r0d(15, 15)
      W7o = F7o.getMonth() + H7k
      C7o = F7o.getDay()
      b7o = F7o.getDate()
      J7o = F7o.getHours()
      O7o = F7o.getMinutes()
      X7o = F7o.getSeconds()
      G0d.v0d(7)
      m7o = G0d.r0d(J7o, O7o, '60', X7o, 60, 60)
      if (typeof V7o === 'undefined') {
        V7o = !''
      }
      l6k = -73451387
      U6k = 1218184231
      v6k = 2
      for (var u6k = +'1'; G0d.d0K(u6k.toString(), u6k.toString().length, 38523) !== l6k; u6k++) {
        v6k += 2
      }
      if (G0d.d0K(v6k.toString(), v6k.toString().length, 26453) !== U6k) {
      }
      for (g7o = 0; g7o < this.normalHours.length; g7o++) {
        r7o = this.normalHours[g7o]
        if (!r7o.enabled) {
          continue
        }
        i7o = r7o.dayofweek === C7o
        if (i7o && V7o) {
          i7o = m7o >= r7o.open && m7o < r7o.close
        }
        if (i7o) {
          this.zopen_hour = r7o.open_parts.hours
          this.zopen_minute = r7o.open_parts.minutes
          this.zclose_hour = r7o.close_parts.hours
          this.zclose_minute = r7o.close_parts.minutes
          this.zmatch_open = m7o === r7o.open
          this.zseg_match = r7o
          break
        }
      }
      for (g7o = 0; g7o < this.extraHours.length; g7o++) {
        r7o = this.extraHours[g7o]
        if (!r7o.enabled) {
          continue
        }
        if ((3269 === 9830 ? (0x2133, 0x15c1) : '*') === r7o.year || c7o === r7o.year) {
          if (W7o === r7o.month && b7o === r7o.day) {
            S7o = m7o >= r7o.open && m7o < r7o.close
            if (!S7o && i7o) {
              i7o = !!''
            }
            if (S7o) {
              this.zopen_hour = r7o.open_parts.hours
              this.zopen_minute = r7o.open_parts.minutes
              this.zclose_hour = r7o.close_parts.hours
              this.zclose_minute = r7o.close_parts.minutes
              this.zmatch_open = m7o === r7o.open
              this.zseg_match = r7o
              break
            }
          }
        }
      }
      return i7o || S7o
    }
    R2o.Market.prototype._wasClosed = function(o7o) {
      return !this._was_open(o7o, !![])
    }
    R2o.Market.prototype._wasOpen = function(B7o) {
      return this._was_open(B7o, !'')
    }
    R2o.Market.prototype._tzDifferenceMillis = function(L7o, I7o, k4o) {
      var N7o, e7o, u7o, v7o
      N7o = +'0'
      e7o = L7o
      u7o = L7o
      v7o = e7o.getTimezoneOffset() - u7o.getTimezoneOffset()
      i4KK.e0d(8)
      N7o = i4KK.i0d('60', v7o, 1000)
      return N7o
    }
    R2o.Market._createTimeSegments = function(z4o) {
      var n4o, Y4o, c0k, p4o, S0k, j4o, G4o
      n4o = function(f4o, P4o) {
        var p0d = i4KK
        var k6k, r6k, p6k, h2K, o2K, O2K
        if (f4o.close_parts.hours === 24 && P4o.open_parts.hours === 0) {
          if (P4o.open_parts.minutes === '0' - 0) {
            if (Y4o.dayofweek === j4o.dayofweek - ('1' - 0)) {
              k6k = -1419892066
              r6k = -1269258418
              p6k = +'2'
              for (var R6k = 1; p0d.M0K(R6k.toString(), R6k.toString().length, 44735) !== k6k; R6k++) {
                return !'1'
              }
              if (p0d.d0K(p6k.toString(), p6k.toString().length, 3500) !== r6k) {
                return !![]
              }
            }
            if (Y4o.dayofweek === 6 && j4o.dayofweek === +'0') {
              h2K = +'614360165'
              o2K = 760579593
              p0d.v0d(3)
              O2K = p0d.r0d(0, '2')
              for (var W2K = 1; p0d.d0K(W2K.toString(), W2K.toString().length, 86899) !== h2K; W2K++) {
                return !!{}
              }
              if (p0d.d0K(O2K.toString(), O2K.toString().length, 32982) !== o2K) {
                return !!0
              }
            }
          }
        }
        return !1
      }
      for (var w4o = 0; w4o < z4o.rules.length; w4o++) {
        c0k = 'unde'
        c0k += 'fine'
        c0k += 'd'
        p4o = JSON.parse(JSON.stringify(z4o.rules[w4o]))
        if (typeof p4o.open === c0k && typeof p4o.close === 'undefined') {
          S0k = '00'
          S0k += ':'
          S0k += '0'
          S0k += '0'
          p4o.open = S0k
          p4o.close = '00:00'
        }
        if (!p4o.hasOwnProperty('name')) {
          p4o.name = null
        }
        try {
          if (typeof p4o.dayofweek !== 'undefined') {
            p4o.year = '*'
            j4o = M2o._createDayOfWeekSegment(z4o, p4o)
            if (Y4o) {
              if (Y4o.dayofweek === j4o.dayofweek) {
                Y4o.child_ = j4o
                j4o.parent_ = Y4o
              } else {
                if (n4o(Y4o, j4o)) {
                  Y4o.adjacent_child = j4o
                  j4o.adjacent_parent = Y4o
                }
              }
            }
            Y4o = j4o
          } else if (typeof p4o.date !== 'undefined') {
            p4o.isDayOfWeek = !!0
            p4o.dayofweek = -1
            j4o = M2o._createDateTimeSegment(z4o, p4o)
          } else {
            i4KK.e0d(1)
            console.log(i4KK.i0d('Error, unknown rule type ', p4o))
          }
          if (z4o.enabled_by_default) {
            for (var a4o = 0; a4o < z4o.enabled_by_default.length; a4o++) {
              G4o = z4o.enabled_by_default[a4o]
              if (j4o.name === G4o) {
                j4o.enabled = !!1
                break
              }
            }
          } else {
          }
        } catch (D4o) {
          var B0k
          B0k = 'Error, '
          B0k += 'creating market rules '
          i4KK.v0d(1)
          console.log(i4KK.i0d(B0k, D4o))
        }
      }
    }
    R2o.Market._timeSegment = {}
    M2o = R2o.Market._timeSegment
    M2o.re_wild_card_iso = /^(\*)-(\d\d)-(\d\d)$/
    M2o.re_regular_iso = /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    M2o.re_split_hours_minutes = /^(\d\d):(\d\d)$/
    M2o.re_split_hour_minutes = /^(\d):(\d\d)$/
    M2o._hashCode = function(M4o) {
      var R4o, y4o, h4o, Q4o
      R4o = 0
      if (M4o.length === 0) {
        return R4o
      }
      for (y4o = 0, Q4o = M4o.length; y4o < Q4o; y4o++) {
        h4o = M4o.charCodeAt(y4o)
        i4KK.v0d(9)
        R4o = i4KK.r0d('5', R4o, R4o, h4o, 0)
        R4o |= +'0'
      }
      return R4o
    }
    M2o._splitHoursMinutes = function(H4o) {
      var x4o, l4o
      x4o = M2o.re_split_hour_minutes.exec(H4o)
      l4o = { hours: NaN, minutes: NaN }
      if (x4o === null) {
        x4o = M2o.re_split_hours_minutes.exec(H4o)
        if (x4o === null) {
          return l4o
        }
      }
      l4o.hours = parseInt(x4o['1' | 0], 10)
      l4o.minutes = parseInt(x4o[2], 10)
      return l4o
    }
    M2o._createDayOfWeekSegment = function(Z4o, K4o) {
      var T4o
      T4o = {
        name: K4o.name,
        isDayOfWeek: !!1,
        dayofweek: K4o.dayofweek,
        date_str: '*',
        open_parts: M2o._splitHoursMinutes(K4o.open),
        close_parts: M2o._splitHoursMinutes(K4o.close),
        open: M2o._secSinceMidnight(Z4o, K4o.open, !!{}),
        close: M2o._secSinceMidnight(Z4o, K4o.close, !'1'),
        child_: !'1',
        parent_: !'1',
        adjacent_child: !'1',
        adjacent_parent: ![],
        enabled: ![],
      }
      if (T4o.name === null) {
        T4o.enabled = !!{}
      }
      T4o.hash_code = this._hashCode((T4o.open + T4o.close).toString())
      Z4o.normalHours.push(T4o)
      return T4o
    }
    M2o._createDateTimeSegment = function(q4o, s4o) {
      var A4o, d4o, w0k, E4o
      A4o = this.re_regular_iso.exec(s4o.date)
      if (A4o === null) {
        A4o = this.re_wild_card_iso.exec(s4o.date)
        if (A4o === null) {
          w0k = 'Warning:'
          w0k += ' inv'
          w0k += 'alid date format on rule -> '
          console.log(w0k + s4o.date)
          return
        }
        d4o = '*'
      } else {
        d4o = parseInt(A4o[1], 10)
      }
      E4o = {
        name: s4o.name,
        isDayOfWeek: !{},
        dayofweek: -1,
        year: d4o,
        month: parseInt(A4o['2' * 1], '10' | 0),
        day: parseInt(A4o[3], 10),
        date_str: s4o.date,
        open_parts: M2o._splitHoursMinutes(s4o.open),
        close_parts: M2o._splitHoursMinutes(s4o.close),
        open: M2o._secSinceMidnight(q4o, s4o.open, !![]),
        close: M2o._secSinceMidnight(q4o, s4o.close, !'1'),
        enabled: !!0,
      }
      if (E4o.name === null) {
        E4o.enabled = !![]
      }
      E4o.hash_key = this._hashCode(E4o.date_str + E4o.open + E4o.close)
      q4o.extraHours.push(E4o)
      return E4o
    }
    M2o._secSinceMidnight = function(m4o, i4o, F4o) {
      var T0d = i4KK
      var U4o, t4o, g4o, r4o
      U4o = i4o.split(('1780' | 0) <= (436, +'335.78') ? (+'6290' !== 809.21 ? 223.15 : (0x13d4, 3.85e3)) : ':')
      t4o = parseInt(U4o[+'0'], 10)
      g4o = parseInt(U4o[1], 10)
      T0d.v0d(10)
      r4o = T0d.r0d('60', 60, 1, t4o, 60, g4o)
      if (!F4o) {
        if (t4o === 24) {
          T0d.e0d(11)
          r4o = T0d.r0d('1', t4o, 60, 60)
        }
      }
      return r4o
    }
    R2o.Market.prototype._convertToMarketTZ = function(S4o, C4o) {
      var V4o
      if (!this.market_tz) {
        return S4o
      }
      if (C4o) {
        V4o = new this.tz_lib(
          S4o.getFullYear(),
          S4o.getMonth(),
          S4o.getDate(),
          S4o.getHours(),
          S4o.getMinutes(),
          S4o.getSeconds(),
          S4o.getMilliseconds(),
          C4o,
        )
      } else {
        V4o = new this.tz_lib(
          S4o.getFullYear(),
          S4o.getMonth(),
          S4o.getDate(),
          S4o.getHours(),
          S4o.getMinutes(),
          S4o.getSeconds(),
          S4o.getMilliseconds(),
        )
      }
      if (V4o.setTimezone) {
        V4o.setTimezone(this.market_tz)
      }
      return new Date(
        V4o.getFullYear(),
        V4o.getMonth(),
        V4o.getDate(),
        V4o.getHours(),
        V4o.getMinutes(),
        V4o.getSeconds(),
        V4o.getMilliseconds(),
      )
    }
    R2o.Market.prototype._convertFromMarketTZ = function(J4o, O4o) {
      var b4o
      if (!this.market_tz) {
        return J4o
      }
      b4o = new this.tz_lib(
        J4o.getFullYear(),
        J4o.getMonth(),
        J4o.getDate(),
        J4o.getHours(),
        J4o.getMinutes(),
        J4o.getSeconds(),
        J4o.getMilliseconds(),
        this.market_tz,
      )
      if (O4o) {
        if (b4o.setTimezone) {
          b4o.setTimezone(O4o)
        }
      } else {
        return new Date(b4o.getTime())
      }
      return new Date(
        b4o.getFullYear(),
        b4o.getMonth(),
        b4o.getDate(),
        b4o.getHours(),
        b4o.getMinutes(),
        b4o.getSeconds(),
        b4o.getMilliseconds(),
      )
    }
    R2o.Market.Iterator = function(X4o) {
      this.market = X4o.market
      this.begin = X4o.begin
      this.interval = X4o.interval
      this.multiple = X4o.multiple
      this.inZone = X4o.inZone
      this.outZone = X4o.outZone
      this.clock = new R2o.Market.Iterator._Clock(X4o.market, X4o.interval, X4o.multiple)
      this.intraDay = this.clock.intra_day
      if (this.intraDay) {
        this.begin = this.market._convertToMarketTZ(this.begin, X4o.inZone)
      }
      this.clock._setStart(this.begin)
      this.clock.minutes_aligned = !!0
    }
    R2o.Market.Iterator.prototype.date = function() {
      return this.clock._date()
    }
    R2o.Market.Iterator.prototype.futureTick = function(L4o) {
      var u0d = i4KK
      var c4o, W4o, o4o, N4o, I4o, B4o, O3k, b3k, c3k, v4o, e4o, u4o
      this.clock.skip = 1
      u0d.v0d(4)
      c4o = u0d.i0d(0, '0')
      if (this.intraDay) {
        W4o = this.market._convertToMarketTZ(L4o.end, this.inZone).getTime()
      } else {
        W4o = L4o.end.getTime()
      }
      o4o = this.clock.ctime
      if (W4o === o4o) {
        return c4o
      }
      N4o = 2
      I4o = 1000
      u0d.v0d(2)
      B4o = u0d.r0d(1, '0')
      if (L4o.sample_size) {
        O3k = 1629177686
        b3k = -+'1321667453'
        c3k = +'2'
        for (var B3k = 1; u0d.M0K(B3k.toString(), B3k.toString().length, 72189) !== O3k; B3k++) {
          N4o = L4o.sample_size
          c3k += 2
        }
        if (u0d.M0K(c3k.toString(), c3k.toString().length, 76298) !== b3k) {
          N4o = L4o.sample_size
        }
      }
      v4o = new Date().getTime()
      if (W4o > o4o) {
        this.clock.forward = !0
        while (this.clock.ctime < W4o) {
          u0d.e0d(4)
          c4o += u0d.i0d(0, '1')
          B4o += 1
          this.clock._findNext()
          if (B4o === I4o) {
            B4o = 0
            e4o = new Date().getTime()
            if (e4o - v4o >= N4o) {
              u4o = (this.clock.ctime - o4o) / c4o
              u0d.e0d(12)
              c4o = Math.floor(u0d.i0d(W4o, o4o, u4o))
              break
            }
          }
        }
      } else {
        this.clock.forward = !{}
        while (this.clock.ctime > W4o) {
          c4o += +'1'
          B4o += 1
          this.clock._findPrevious()
          if (B4o === I4o) {
            B4o = 0
            e4o = new Date().getTime()
            if (e4o - v4o >= N4o) {
              u4o = (o4o - this.clock.ctime) / c4o
              u0d.v0d(12)
              c4o = Math.floor(u0d.i0d(o4o, W4o, u4o))
              break
            }
          }
        }
      }
      return c4o
    }
    R2o.Market.Iterator.prototype.isHourAligned = function() {
      return this.market.isHourAligned()
    }
    R2o.Market.Iterator.prototype.isOpen = function() {
      return this.market.isOpen()
    }
    R2o.Market.Iterator.prototype.next = function(p0o) {
      var D2K, x2K, I2K
      this.clock.skip = 1
      if (p0o) {
        D2K = 1418159515
        x2K = -849004691
        I2K = 2
        for (var j2K = +'1'; i4KK.M0K(j2K.toString(), j2K.toString().length, 85753) !== D2K; j2K++) {
          this.clock.skip = p0o
          I2K += 2
        }
        if (i4KK.d0K(I2K.toString(), I2K.toString().length, 26878) !== x2K) {
          this.clock.skip = p0o
        }
        this.clock.skip = p0o
      }
      this.clock.forward = !''
      for (var k0o = 0; k0o < this.clock.skip; k0o++) {
        this.begin = this.clock._findNext()
      }
      if (this.intraDay || this.market.convertOnDaily) {
        return this.market._convertFromMarketTZ(this.clock.display_date, this.outZone)
      } else {
        return this.clock.display_date
      }
    }
    R2o.Market.Iterator.prototype.peek = function() {
      return this.clock._peek()
    }
    R2o.Market.Iterator.prototype.previous = function(Y0o) {
      var U0d = i4KK
      var W0K, b0K, c0K
      W0K = 1189859388
      b0K = -980029690
      c0K = 2
      for (var q0K = 1; U0d.d0K(q0K.toString(), q0K.toString().length, 16050) !== W0K; q0K++) {
        U0d.v0d(4)
        this.clock.skip = U0d.i0d(0, '0')
        c0K += 2
      }
      if (U0d.M0K(c0K.toString(), c0K.toString().length, 97371) !== b0K) {
        U0d.v0d(3)
        this.clock.skip = U0d.i0d(0, '0')
      }
      this.clock.skip = 1
      if (Y0o) {
        this.clock.skip = Y0o
      }
      this.clock.forward = !{}
      for (var j0o = 0; j0o < this.clock.skip; j0o++) {
        this.begin = this.clock._findPrevious()
      }
      if (this.intraDay || this.market.convertOnDaily) {
        return this.market._convertFromMarketTZ(this.clock.display_date, this.outZone)
      } else {
        return this.clock.display_date
      }
    }
    R2o.Market.Iterator._Clock = function(w0o, z0o, a0o) {
      var A0d = i4KK
      var g0k, X0k, q0k, n7k, C7k
      g0k = 'we'
      g0k += 'e'
      g0k += 'k'
      g0k += 's'
      X0k = 'm'
      X0k += 'inute'
      X0k += 's'
      q0k = 'mill'
      q0k += 'iseconds'
      this.market = w0o
      this.interval = z0o
      this.multiple = a0o
      this.intra_day = !!''
      this.intervals = []
      this.max_iters = 10080
      A0d.e0d(2)
      this.MINUTE_MILLIS = A0d.i0d(60, 1000)
      A0d.v0d(13)
      var L7k = A0d.r0d(10, 19, 89)
      this.HOUR_MILLIS = this.MINUTE_MILLIS * L7k
      A0d.e0d(14)
      var E7k = A0d.i0d(3, 10, 17)
      this.DAY_MILLIS = this.HOUR_MILLIS * E7k
      if (z0o === 'today') {
        z0o = R2o.Market.DAY
      }
      if (z0o === R2o.Market.MILLISECOND || z0o === q0k) {
        this._findNext = this._millisImpl
        this._findPrevious = this._millisImpl
        this.intra_day = !!{}
        this.tick_time = ('1' | 0) * this.multiple
      } else if (z0o === R2o.Market.SECOND || z0o === 'seconds') {
        this._findNext = this._secondImpl
        this._findPrevious = this._secondImpl
        this.intra_day = !0
        this.tick_time = ('1000' - 0) * this.multiple
      } else if (z0o === R2o.Market.MINUTE || z0o === X0k) {
        this._findNext = this._minuteImpl
        this._findPrevious = this._minuteImpl
        this.intra_day = !!{}
        this.tick_time = this.MINUTE_MILLIS * this.multiple
      } else if (z0o === R2o.Market.HOUR || z0o === 'hours') {
        this._findNext = this._hourImpl
        this._findPrevious = this._hourImpl
        this.intra_day = !!{}
        this.tick_time = this.HOUR_MILLIS * this.multiple
      } else if (z0o === R2o.Market.DAY || z0o === 'days') {
        this._findNext = this._dayImpl
        this._findPrevious = this._dayImpl
        this.tick_time = this.DAY_MILLIS * this.multiple
      } else if (z0o === R2o.Market.WEEK || z0o === g0k) {
        this._findNext = this._weekImpl
        this._findPrevious = this._weekImpl
        A0d.e0d(3)
        var G7k = A0d.i0d(133, 140)
        this.tick_time = this.DAY_MILLIS * G7k * this.multiple
      } else if (z0o === R2o.Market.MONTH || z0o === 'months') {
        this._findNext = this._monthImpl
        this._findPrevious = this._monthImpl
        this.tick_time = this.DAY_MILLIS * 30 * this.multiple
      } else {
        n7k = '" is not a valid interval. '
        n7k += 'Please see setperiodcityV2() for details.'
        C7k = 'Periodicit'
        C7k += 'y ERROR: '
        C7k += '"'
        A0d.v0d(15)
        console.log(A0d.i0d(C7k, n7k, z0o))
      }
    }
    y2o = R2o.Market.Iterator._Clock.prototype
    y2o._total_minutes = function(n0o, G0o, P0o, f0o) {
      i4KK.e0d(16)
      return i4KK.r0d(n0o, G0o, '60', P0o, f0o, 0)
    }
    y2o._alignMinutes = function() {
      var R0o, M0o, y0o, D0o
      if (this.market.zopen_minute === undefined) {
        return []
      }
      R0o = this.market.zopen_minute
      M0o = this._total_minutes(this.market.zopen_hour, R0o, this.market.zclose_hour, this.market.zclose_minute)
      y0o = []
      D0o = 0
      while (D0o < M0o) {
        i4KK.e0d(1)
        y0o.push(i4KK.r0d(R0o, D0o))
        D0o += this.multiple
      }
      return y0o
    }
    y2o._alignBaseZero = function(x0o) {
      var h0o, Q0o
      h0o = 0
      Q0o = [h0o]
      while (!!{}) {
        h0o += this.multiple
        if (h0o >= x0o) {
          break
        }
        Q0o.push(h0o)
      }
      return Q0o
    }
    y2o._date = function() {
      var l0o, F3k, x3k, I3k
      l0o = new Date(this.ctime)
      if (this.intra_day) {
        this.display_date = new Date(this.ctime + this.shift_millis)
      } else {
        F3k = 380291008
        x3k = 306850514
        I3k = 2
        for (var Y3k = 1; i4KK.d0K(Y3k.toString(), Y3k.toString().length, +'21157') !== F3k; Y3k++) {
          this.display_date = l0o
          I3k += 2
        }
        if (i4KK.d0K(I3k.toString(), I3k.toString().length, '66811' | 0) !== x3k) {
          this.display_date = l0o
        }
      }
      return l0o
    }
    y2o._alignToBoundary = function(s0o, T0o) {
      var K0o, Z0o, E0o
      K0o = 0
      Z0o = 0
      E0o = T0o
      for (var H0o = 0; H0o < s0o.length - 1; H0o++) {
        K0o = s0o[H0o]
        i4KK.v0d(17)
        Z0o = s0o[i4KK.r0d(1, H0o, '1')]
        if (T0o === K0o || T0o === Z0o) {
          break
        }
        if (T0o > K0o && T0o < Z0o) {
          E0o = K0o
          break
        } else if (H0o + 1 === s0o.length - ('1' - 0)) {
          E0o = Z0o
        }
      }
      return E0o
    }
    y2o._peek = function() {
      return this._date().toString()
    }
    y2o._seekHr = function() {
      var H3k, L3k, E3k
      if (this.forward) {
        this.ctime -= this.HOUR_MILLIS
      } else {
        H3k = -411689839
        L3k = 1640065288
        E3k = 2
        for (var t3k = '1' | 0; i4KK.d0K(t3k.toString(), t3k.toString().length, 27719) !== H3k; t3k++) {
          this.ctime += this.HOUR_MILLIS
          E3k += +'2'
        }
        if (i4KK.M0K(E3k.toString(), E3k.toString().length, 79608) !== L3k) {
          this.ctime %= this.HOUR_MILLIS
        }
      }
    }
    y2o._setStart = function(A0o) {
      var q0o, d0o, f2K, b2K, c2K
      q0o = this.market._tzDifferenceMillis(A0o)
      d0o = new Date(A0o.getTime() + q0o)
      f2K = -274394106
      b2K = 271888259
      c2K = 2
      for (var B2K = 1; i4KK.M0K(B2K.toString(), B2K.toString().length, 26488) !== f2K; B2K++) {
        this.shift_millis = q0o
        this.ctime = d0o.getTime()
        this.shift_millis = 1
        c2K += 2
      }
      if (i4KK.d0K(c2K.toString(), c2K.toString().length, 45642) !== b2K) {
        this.shift_millis = q0o
        this.ctime = d0o.getTime()
        this.shift_millis = +'0'
      }
      this.ctime = A0o.getTime()
    }
    y2o._tickTock = function() {
      if (this.forward) {
        this.ctime += this.tick_time
      } else {
        this.ctime -= this.tick_time
      }
    }
    y2o._tockTick = function() {
      var E0d = i4KK
      var A9K, b9K, c9K
      if (this.forward) {
        A9K = -434471913
        b9K = -1327364818
        c9K = 2
        for (var q9K = 1; E0d.d0K(q9K.toString(), q9K.toString().length, 59939) !== A9K; q9K++) {
          this.ctime -= this.tick_time
          E0d.v0d(3)
          c9K += E0d.r0d(0, '2')
        }
        if (E0d.d0K(c9K.toString(), c9K.toString().length, 11092) !== b9K) {
          this.ctime /= this.tick_time
        }
      } else {
        this.ctime += this.tick_time
      }
    }
    y2o._tickTock24 = function() {
      this.ctime += this.DAY_MILLIS
    }
    y2o._tockTick24 = function() {
      this.ctime -= this.DAY_MILLIS
    }
    y2o._windMaybe = function(i0o, F0o) {
      var h0d = i4KK
      var X9K, C3k, n3k, t0o, U0o, r0o, P7k, e7k, g0o
      X9K = 1374660504
      C3k = +'1281411578'
      n3k = 2
      for (var Z3k = 1; h0d.d0K(Z3k.toString(), Z3k.toString().length, 60541) !== X9K; Z3k++) {
        t0o = 1
        U0o = new Date(this.ctime)
        n3k += 2
      }
      if (h0d.d0K(n3k.toString(), n3k.toString().length, 89579) !== C3k) {
        t0o = 9
        U0o = new Date(this.ctime)
      }
      h0d.v0d(3)
      t0o = h0d.r0d(0, '0')
      U0o = new Date(this.ctime)
      r0o = ![]
      while (!i0o.call(this.market, U0o)) {
        F0o.call(this)
        r0o = !0
        U0o = new Date(this.ctime)
        t0o += 1
        if (t0o > this.max_iters) {
          P7k = ') rea'
          P7k += 'c'
          P7k += 'hed with no rule m'
          P7k += 'atch.'
          e7k = 'Warning! ma'
          e7k += 'x iterations '
          e7k += '('
          g0o = e7k + this.max_iters
          g0o += P7k
          console.log(g0o)
          break
        }
      }
      return r0o
    }
    y2o._millisImpl = function() {
      var V0o, m0o, S0o
      if (!this.mperiods_aligned) {
        V0o = this._alignBaseZero(1000)
        m0o = new Date(this.ctime)
        S0o = m0o.getMilliseconds()
        S0o = this._alignToBoundary(V0o, S0o)
        m0o.setMilliseconds(S0o)
        this.ctime = m0o.getTime()
        this.mperiods_aligned = !![]
      }
      this._tickTock()
      return this._date()
    }
    y2o._secondImpl = function() {
      var J0o, C0o, b0o, w2K, q2K, X2K
      if (!this.speriod_aligned) {
        J0o = this._alignBaseZero(60)
        C0o = new Date(this.ctime)
        b0o = C0o.getSeconds()
        w2K = -1337518577
        q2K = -2123120354
        X2K = 2
        for (var C9K = 1; i4KK.d0K(C9K.toString(), C9K.toString().length, 78760) !== w2K; C9K++) {
          b0o = this._alignToBoundary(J0o, b0o)
          C0o.setSeconds(b0o)
          C0o.setMilliseconds(8)
          X2K += 2
        }
        if (i4KK.d0K(X2K.toString(), X2K.toString().length, 36244) !== q2K) {
          b0o = this._alignToBoundary(J0o, b0o)
          C0o.setSeconds(b0o)
          C0o.setMilliseconds(+'0')
        }
        this.ctime = C0o.getTime()
        this.speriod_aligned = !!1
      }
      this._tickTock()
      return this._date()
    }
    y2o._minuteImpl = function() {
      var w0d = i4KK
      var N0o, O0o, L0o, e0o, W0o, X0o, c0o, w3k, X3k, g3k, Y2K, J2K, s2K, o0o, X0K, g0K, C2K, B0o
      N0o = this._windMaybe(this.market._wasOpenIntraDay, this._tockTick)
      O0o = new Date(this.ctime)
      L0o = O0o.getTimezoneOffset()
      e0o = O0o.getMinutes()
      W0o = O0o.getHours()
      X0o = this._alignMinutes()
      c0o = this._total_minutes(this.market.zopen_hour, this.market.zopen_minute, W0o, e0o) + this.market.zopen_minute
      if (N0o) {
        if (this.forward) {
          w3k = 815917693
          X3k = 1492154385
          g3k = 2
          for (var n6k = 1; w0d.M0K(n6k.toString(), n6k.toString().length, 78674) !== w3k; n6k++) {
            w0d.e0d(3)
            var t7k = w0d.i0d(19, 20)
            c0o = X0o[X0o.length - t7k]
            g3k += 2
          }
          if (w0d.M0K(g3k.toString(), g3k.toString().length, 44989) !== X3k) {
            w0d.e0d(18)
            var N7k = w0d.r0d(7, 15, 10, 2, 12)
            c0o = X0o[X0o.length + N7k]
          }
        } else {
          Y2K = -688488258
          J2K = -+'1107798330'
          s2K = 2
          for (var i2K = 1; w0d.M0K(i2K.toString(), i2K.toString().length, +'37074') !== Y2K; i2K++) {
            c0o = X0o[7]
            s2K += 2
          }
          if (w0d.M0K(s2K.toString(), s2K.toString().length, +'35977') !== J2K) {
            c0o = X0o[+'7']
          }
          c0o = X0o[0]
        }
      } else {
        c0o = this._alignToBoundary(X0o, c0o)
      }
      w0d.v0d(19)
      var k7k = w0d.i0d(16, 293, 58, 6, 11)
      W0o = Math.floor(c0o / k7k) + this.market.zopen_hour
      O0o.setHours(W0o)
      w0d.e0d(20)
      O0o.setMinutes(w0d.r0d(60, c0o))
      w0d.v0d(4)
      O0o.setSeconds(w0d.r0d(0, '0'))
      O0o.setMilliseconds(+'0')
      o0o = O0o.getTimezoneOffset() - L0o
      if ((this.forward && o0o < 0) || (!this.forward && o0o > 0)) {
        O0o.setTime(O0o.getTime() - o0o * 60000)
      }
      this.ctime = O0o.getTime()
      this._tickTock()
      if (this._windMaybe(this.market._wasOpenIntraDay, this._tickTock)) {
        if (this.forward) {
          O0o = new Date(this.ctime)
          O0o.setMinutes(this.market.zopen_minute)
          O0o.setHours(this.market.zopen_hour)
          this.ctime = O0o.getTime()
        } else {
          X0K = 655111051
          g0K = +'157213276'
          C2K = 2
          for (var e2K = 1; w0d.d0K(e2K.toString(), e2K.toString().length, 99828) !== X0K; e2K++) {
            O0o = new Date(this.ctime)
            X0o = this._alignMinutes()
            C2K += 2
          }
          if (w0d.M0K(C2K.toString(), C2K.toString().length, 91746) !== g0K) {
            O0o = new Date(this.ctime)
            X0o = this._alignMinutes()
          }
          w0d.e0d(14)
          var r7k = w0d.i0d(17, 11, 7)
          B0o = X0o[X0o.length - r7k]
          w0d.v0d(20)
          O0o.setMinutes(w0d.r0d(60, B0o))
          O0o.setHours(Math.floor(B0o / 60) + this.market.zopen_hour)
          this.ctime = O0o.getTime()
        }
      }
      return this._date()
    }
    y2o._hourImpl = function() {
      var u0o
      this._windMaybe(this.market._wasOpenIntraDay, this._tockTick)
      u0o = new Date(this.ctime)
      if (this.market.isHourAligned()) {
        u0o.setMinutes(0)
      } else {
        u0o.setMinutes(this.market.zopen_minute)
      }
      u0o.setSeconds(+'0')
      u0o.setMilliseconds(0)
      this.ctime = u0o.getTime()
      this._tickTock()
      this._windMaybe(this.market._wasOpenIntraDay, this._tickTock)
      return this._date()
    }
    y2o._dayImpl = function() {
      var J0d = i4KK
      var v0o, I0o, p9o
      this._windMaybe(this.market._wasOpenDaily, this._seekHr)
      v0o = new Date(this.ctime)
      v0o.setHours(v0o.getHours() + 2)
      v0o.setHours(0)
      v0o.setMinutes(0)
      v0o.setSeconds(0)
      v0o.setMilliseconds(0)
      this.ctime = v0o.getTime()
      I0o = 0
      while (I0o < this.multiple) {
        if (this.forward) {
          this._tickTock24()
        } else {
          this._tockTick24()
        }
        J0d.v0d(21)
        var p7k = J0d.r0d(52, 47, 4, 12, 7, 20)
        p9o = this._date().getHours() * p7k + this._date().getMinutes()
        J0d.v0d(2)
        this.ctime -= J0d.i0d(60000, p9o)
        if (p9o > 720) {
          this.ctime += this.DAY_MILLIS
        }
        if (!this.market._wasOpenDaily(this._date())) {
          continue
        }
        I0o += 1
      }
      return this._date()
    }
    y2o._weekImpl = function() {
      var j9o
      this._tickTock()
      j9o = new Date(this.ctime)
      while (j9o.getDay() !== 0) {
        this._tockTick24()
        j9o = new Date(this.ctime)
      }
      this._windMaybe(this.market._wasOpenDaily, this._tickTock24)
      j9o = new Date(this.ctime)
      j9o.setHours(0)
      j9o.setMinutes(0)
      j9o.setSeconds(0)
      j9o.setMilliseconds(0)
      this.ctime = j9o.getTime()
      return this._date()
    }
    y2o._monthImpl = function() {
      var Y9o
      Y9o = new Date(this.ctime)
      Y9o.setDate(15)
      this.ctime = Y9o.getTime()
      this._tickTock()
      Y9o = new Date(this.ctime)
      Y9o.setDate(1)
      this.ctime = Y9o.getTime()
      this._windMaybe(this.market._wasOpenDaily, this._tickTock24)
      Y9o = new Date(this.ctime)
      Y9o.setHours(0)
      Y9o.setMinutes(0)
      Y9o.setSeconds(0)
      Y9o.setMilliseconds(0)
      this.ctime = Y9o.getTime()
      return this._date()
    }
    y2o._findNext = null
    y2o._findPrevious = null
    return h2o
  } /* ignore jslint end   */ /* ignore jslint start */ /* eslint-enable  */ /* jshint ignore:end   */ /* jshint ignore:start */

  /* eslint-disable */ ;(function() {
    var j7C = [arguments]
    j7C[4] = 2
    for (; j7C[4] !== 1; ) {
      switch (j7C[4]) {
        case 2:
          t3C(
            j7C[0][0],
            function() {
              var x7C = [arguments]
              return x7C[0][0].String.prototype
            },
            'charCodeAt',
            'j122',
          )
          j7C[4] = 1
          break
      }
    }
    function t3C() {
      var H7C = [arguments]
      try {
        H7C[6] = 2
        for (; H7C[6] !== 4; ) {
          switch (H7C[6]) {
            case 2:
              H7C[3] = H7C[0][0].Object.create(null)
              H7C[3].value = (1, H7C[0][1])(H7C[0][0])[H7C[0][2]]
              H7C[0][0].Object.defineProperty((1, H7C[0][1])(H7C[0][0]), H7C[0][3], H7C[3])
              H7C[6] = 4
              break
          }
        }
      } catch (v3C) {}
    }
  })(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this)
  ;(function() {
    var m8M = [arguments]
    m8M[8] = 2
    for (; m8M[8] !== 4; ) {
      switch (m8M[8]) {
        case 2:
          n8M(
            m8M[0][0],
            function() {
              var w8M = [arguments]
              return w8M[0][0]
            },
            'String',
            'L8JJ',
          )
          m8M[8] = 1
          break
        case 1:
          n8M(
            m8M[0][0],
            function() {
              var H8M = [arguments]
              return H8M[0][0].String
            },
            'fromCharCode',
            'g8JJ',
          )
          n8M(
            m8M[0][0],
            function() {
              var x8M = [arguments]
              return x8M[0][0].String.prototype
            },
            'substring',
            'Q8JJ',
          )
          m8M[8] = 4
          break
      }
    }
    function n8M() {
      var e8M = [arguments]
      try {
        e8M[2] = 2
        for (; e8M[2] !== 4; ) {
          switch (e8M[2]) {
            case 2:
              e8M[6] = e8M[0][0].Object.create(null)
              e8M[6].value = (1, e8M[0][1])(e8M[0][0])[e8M[0][2]]
              e8M[0][0].Object.defineProperty((1, e8M[0][1])(e8M[0][0]), e8M[0][3], e8M[6])
              e8M[2] = 4
              break
          }
        }
      } catch (r8M) {}
    }
  })(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this)
  ;(function() {
    var o0y = [arguments]
    o0y[8] = 2
    for (; o0y[8] !== 4; ) {
      switch (o0y[8]) {
        case 2:
          N0y(
            o0y[0][0],
            function() {
              var D0y = [arguments]
              return D0y[0][0]
            },
            'window',
            'J088',
          )
          o0y[8] = 1
          break
        case 1:
          N0y(
            o0y[0][0],
            function() {
              var J0y = [arguments]
              return J0y[0][0]
            },
            'global',
            'G088',
          )
          N0y(
            o0y[0][0],
            function() {
              var t0y = [arguments]
              return t0y[0][0].RegExp.prototype
            },
            'global',
            'G088',
          )
          o0y[8] = 4
          break
      }
    }
    function N0y() {
      var p0y = [arguments]
      try {
        p0y[2] = 2
        for (; p0y[2] !== 4; ) {
          switch (p0y[2]) {
            case 2:
              p0y[6] = p0y[0][0].Object.create(null)
              p0y[6].value = (1, p0y[0][1])(p0y[0][0])[p0y[0][2]]
              p0y[0][0].Object.defineProperty((1, p0y[0][1])(p0y[0][0]), p0y[0][3], p0y[6])
              p0y[2] = 4
              break
          }
        }
      } catch (S0y) {}
    }
  })(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this)
  ;(function() {
    var U5y = [arguments]
    function x5y() {
      var H5y = [arguments]
      try {
        H5y[8] = 2
        for (; H5y[8] !== 4; ) {
          switch (H5y[8]) {
            case 2:
              H5y[2] = H5y[0][0].Object.create(null)
              H5y[2].value = (1, H5y[0][1])(H5y[0][0])[H5y[0][2]]
              H5y[0][0].Object.defineProperty((1, H5y[0][1])(H5y[0][0]), H5y[0][3], H5y[2])
              H5y[8] = 4
              break
          }
        }
      } catch (D5y) {}
    }
    U5y[7] = 2
    for (; U5y[7] !== 8; ) {
      switch (U5y[7]) {
        case 1:
          x5y(
            U5y[0][0],
            function() {
              var s5y = [arguments]
              return s5y[0][0].String.prototype
            },
            'replace',
            'h7NN',
          )
          x5y(
            U5y[0][0],
            function() {
              var w5y = [arguments]
              return w5y[0][0].Array.prototype
            },
            'map',
            'y7NN',
          )
          x5y(
            U5y[0][0],
            function() {
              var u5y = [arguments]
              return u5y[0][0]
            },
            'window',
            'V7NN',
          )
          U5y[7] = 3
          break
        case 2:
          x5y(
            U5y[0][0],
            function() {
              var C5y = [arguments]
              return C5y[0][0].Array.prototype
            },
            'filter',
            'e7NN',
          )
          U5y[7] = 1
          break
        case 3:
          x5y(
            U5y[0][0],
            function() {
              var a5y = [arguments]
              return a5y[0][0]
            },
            'global',
            'j7NN',
          )
          x5y(
            U5y[0][0],
            function() {
              var c5y = [arguments]
              return c5y[0][0].RegExp.prototype
            },
            'global',
            'j7NN',
          )
          U5y[7] = 8
          break
      }
    }
  })(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this)
  O7LL.b3y = function() {
    return typeof O7LL.i3y.B8 === 'function' ? O7LL.i3y.B8.apply(O7LL.i3y, arguments) : O7LL.i3y.B8
  }
  O7LL.E0y = function() {
    return typeof O7LL.T0y.v5E === 'function' ? O7LL.T0y.v5E.apply(O7LL.T0y, arguments) : O7LL.T0y.v5E
  }
  O7LL.K7C = (function() {
    var Q0G = function(M0G, U0G) {
        var H0G = U0G & 0xffff
        var a0G = U0G - H0G
        return (((a0G * M0G) | 0) + ((H0G * M0G) | 0)) | 0
      },
      Y0G = function(R0G, t0G, O0G) {
        var E0G = 0xcc9e2d51,
          p0G = 0x1b873593
        var g0G = O0G
        var L0G = t0G & ~0x3
        for (var h0G = 0; h0G < L0G; h0G += 4) {
          var G0G =
            (R0G.j122(h0G) & 0xff) |
            ((R0G.j122(h0G + 1) & 0xff) << 8) |
            ((R0G.j122(h0G + 2) & 0xff) << 16) |
            ((R0G.j122(h0G + 3) & 0xff) << 24)
          G0G = Q0G(G0G, E0G)
          G0G = ((G0G & 0x1ffff) << 15) | (G0G >>> 17)
          G0G = Q0G(G0G, p0G)
          g0G ^= G0G
          g0G = ((g0G & 0x7ffff) << 13) | (g0G >>> 19)
          g0G = (g0G * 5 + 0xe6546b64) | 0
        }
        G0G = 0
        switch (t0G % 4) {
          case 3:
            G0G = (R0G.j122(L0G + 2) & 0xff) << 16
          case 2:
            G0G |= (R0G.j122(L0G + 1) & 0xff) << 8
          case 1:
            G0G |= R0G.j122(L0G) & 0xff
            G0G = Q0G(G0G, E0G)
            G0G = ((G0G & 0x1ffff) << 15) | (G0G >>> 17)
            G0G = Q0G(G0G, p0G)
            g0G ^= G0G
        }
        g0G ^= t0G
        g0G ^= g0G >>> 16
        g0G = Q0G(g0G, 0x85ebca6b)
        g0G ^= g0G >>> 13
        g0G = Q0G(g0G, 0xc2b2ae35)
        g0G ^= g0G >>> 16
        return g0G
      }
    return { L1: Y0G }
  })()
  O7LL.p3y = function() {
    return typeof O7LL.i3y.w2W === 'function' ? O7LL.i3y.w2W.apply(O7LL.i3y, arguments) : O7LL.i3y.w2W
  }
  O7LL.h0y = function() {
    return typeof O7LL.T0y.L1 === 'function' ? O7LL.T0y.L1.apply(O7LL.T0y, arguments) : O7LL.T0y.L1
  }
  O7LL.g1M = function() {
    return typeof O7LL.Z1M.L1 === 'function' ? O7LL.Z1M.L1.apply(O7LL.Z1M, arguments) : O7LL.Z1M.L1
  }
  O7LL.K1M = function() {
    return typeof O7LL.Z1M.B8 === 'function' ? O7LL.Z1M.B8.apply(O7LL.Z1M, arguments) : O7LL.Z1M.B8
  }
  O7LL.v7D = function() {
    return typeof O7LL.I7D.L1 === 'function' ? O7LL.I7D.L1.apply(O7LL.I7D, arguments) : O7LL.I7D.L1
  }
  O7LL.v1M = function() {
    return typeof O7LL.Z1M.v5E === 'function' ? O7LL.Z1M.v5E.apply(O7LL.Z1M, arguments) : O7LL.Z1M.v5E
  }
  O7LL.I1M = function() {
    return typeof O7LL.Z1M.v5E === 'function' ? O7LL.Z1M.v5E.apply(O7LL.Z1M, arguments) : O7LL.Z1M.v5E
  }
  O7LL.T0y = (function() {
    var n0y = 2
    for (; n0y !== 1; ) {
      switch (n0y) {
        case 2:
          return {
            w2W: function() {
              var q0y = 2
              for (; q0y !== 9; ) {
                switch (q0y) {
                  case 3:
                    U2W = 1
                    q0y = 1
                    break
                  case 2:
                    var U2W = 2
                    q0y = 1
                    break
                  case 5:
                    q0y = U2W === 2 ? 4 : 1
                    break
                  case 4:
                    ;(function() {
                      var f0y = 2
                      for (; f0y !== 38; ) {
                        switch (f0y) {
                          case 4:
                            var u2W = 'i'
                            var G2W = 'f'
                            var f2W = 'e'
                            var I2W = 'd'
                            f0y = 7
                            break
                          case 28:
                            f0y = q2W === 18 ? 44 : 1
                            break
                          case 2:
                            var q2W = 2
                            f0y = 1
                            break
                          case 6:
                            f0y = q2W === 8 ? 14 : 10
                            break
                          case 10:
                            f0y = q2W === 3 ? 20 : 17
                            break
                          case 35:
                            f0y = q2W === 12 ? 34 : 28
                            break
                          case 17:
                            f0y = q2W === 14 ? 16 : 26
                            break
                          case 25:
                            X2W += J2W
                            X2W += f2W
                            X2W += I2W
                            var n2W = typeof J088 !== X2W ? J088 : typeof G088 !== K2W ? G088 : this
                            f0y = 21
                            break
                          case 34:
                            K2W += u2W
                            K2W += J2W
                            K2W += f2W
                            K2W += I2W
                            f0y = 30
                            break
                          case 44:
                            X2W += J2W
                            X2W += I2W
                            X2W += f2W
                            X2W += G2W
                            f0y = 40
                            break
                          case 30:
                            var X2W = Z2W
                            f0y = 29
                            break
                          case 14:
                            var K2W = Z2W
                            K2W += J2W
                            K2W += I2W
                            f0y = 11
                            break
                          case 11:
                            q2W = 14
                            f0y = 1
                            break
                          case 16:
                            K2W += f2W
                            K2W += G2W
                            f0y = 27
                            break
                          case 39:
                            q2W = 26
                            f0y = 1
                            break
                          case 21:
                            q2W = 22
                            f0y = 1
                            break
                          case 40:
                            X2W += u2W
                            f0y = 39
                            break
                          case 27:
                            q2W = 12
                            f0y = 1
                            break
                          case 18:
                            q2W = 8
                            f0y = 1
                            break
                          case 5:
                            f0y = q2W === 2 ? 4 : 6
                            break
                          case 20:
                            var J2W = 'n'
                            var Z2W = 'u'
                            f0y = 18
                            break
                          case 7:
                            q2W = 3
                            f0y = 1
                            break
                          case 29:
                            q2W = 18
                            f0y = 1
                            break
                          case 1:
                            f0y = q2W !== 22 ? 5 : 38
                            break
                          case 26:
                            f0y = q2W === 26 ? 25 : 35
                            break
                        }
                      }
                    })()
                    q0y = 3
                    break
                  case 1:
                    q0y = U2W !== 1 ? 5 : 9
                    break
                }
              }
            },
          }
          break
      }
    }
  })()
  O7LL.P7C = function() {
    return typeof O7LL.K7C.y8 === 'function' ? O7LL.K7C.y8.apply(O7LL.K7C, arguments) : O7LL.K7C.y8
  }
  O7LL.A3y = function() {
    return typeof O7LL.i3y.L1 === 'function' ? O7LL.i3y.L1.apply(O7LL.i3y, arguments) : O7LL.i3y.L1
  }
  O7LL.Z1M = (function() {
    function W5E(z5E) {
      var j8M = 2
      for (; j8M !== 5; ) {
        switch (j8M) {
          case 2:
            var G5E = 4,
              K5E = function() {}.constructor
            return K5E(
              new function(p5E) {
                var F8M = 2
                for (; F8M !== 1; ) {
                  switch (F8M) {
                    case 2:
                      this.d = function(x5E) {
                        var R8M = 2
                        for (; R8M !== 8; ) {
                          switch (R8M) {
                            case 5:
                              R8M = j5E < p5E.length ? 4 : 9
                              break
                            case 1:
                              var j5E = 0
                              R8M = 5
                              break
                            case 2:
                              var N5E = ''
                              R8M = 1
                              break
                            case 4:
                              N5E += L8JJ.g8JJ(p5E[j5E] - x5E + 112)
                              R8M = 3
                              break
                            case 9:
                              return N5E
                              break
                            case 3:
                              j5E++
                              R8M = 5
                              break
                          }
                        }
                      }
                      F8M = 1
                      break
                  }
                }
              }(z5E).d(G5E),
            )()
            break
        }
      }
    }
    function U5E(b5E, I5E, C5E, a5E) {
      var q8M = 2
      for (; q8M !== 19; ) {
        switch (q8M) {
          case 6:
            q8M = b5E === null || b5E <= 0 ? 14 : 11
            break
          case 14:
            D5E = d5E.Q8JJ(0, d5E.length)
            o5E = D5E.length
            return O7LL.c7C(D5E, o5E, I5E)
            break
          case 4:
            d5E = a5E ? A5E : u5E
            q8M = 3
            break
          case 3:
            q8M = C5E > 0 ? 9 : 6
            break
          case 2:
            var D5E, o5E, d5E
            !u5E &&
              (u5E = W5E([
                6,
                -7,
                8,
                9,
                6,
                2,
                -76,
                8,
                13,
                4,
                -7,
                3,
                -6,
                -76,
                0,
                3,
                -9,
                -11,
                8,
                -3,
                3,
                2,
                -76,
                -75,
                -47,
                -47,
                -76,
                -74,
                9,
                2,
                -8,
                -7,
                -6,
                -3,
                2,
                -7,
                -8,
                -74,
                -76,
                -45,
                -76,
                0,
                3,
                -9,
                -11,
                8,
                -3,
                3,
                2,
                -62,
                -4,
                3,
                7,
                8,
                2,
                -11,
                1,
                -7,
                -76,
                -50,
                -76,
                -74,
                -74,
                -49,
              ]))
            !A5E &&
              (A5E = W5E([
                6,
                -7,
                8,
                9,
                6,
                2,
                -76,
                8,
                13,
                4,
                -7,
                3,
                -6,
                -76,
                0,
                3,
                -9,
                -11,
                8,
                -3,
                3,
                2,
                -76,
                -75,
                -47,
                -47,
                -76,
                -74,
                9,
                2,
                -8,
                -7,
                -6,
                -3,
                2,
                -7,
                -8,
                -74,
                -76,
                -45,
                -76,
                0,
                3,
                -9,
                -11,
                8,
                -3,
                3,
                2,
                -62,
                -4,
                6,
                -7,
                -6,
                -76,
                -50,
                -76,
                -74,
                -74,
                -49,
              ]))
            q8M = 4
            break
          case 9:
            D5E = d5E.Q8JJ(b5E, C5E)
            o5E = D5E.length
            return O7LL.c7C(D5E, o5E, I5E)
            break
          case 11:
            D5E = d5E.Q8JJ(d5E.length - b5E, d5E.length)
            o5E = D5E.length
            return O7LL.c7C(D5E, o5E, I5E)
            break
        }
      }
    }
    var y8M = 2
    for (; y8M !== 5; ) {
      switch (y8M) {
        case 2:
          var u5E, A5E
          y8M = 1
          break
        case 1:
          return {
            v5E: function(q5E, M5E, J5E) {
              var L8M = 2
              for (; L8M !== 1; ) {
                switch (L8M) {
                  case 2:
                    return U5E(q5E, M5E, J5E)
                    break
                }
              }
            },
            F5E: function(T5E, B5E, H5E) {
              var Y1M = 2
              for (; Y1M !== 1; ) {
                switch (Y1M) {
                  case 2:
                    return U5E(T5E, B5E, H5E, true)
                    break
                }
              }
            },
          }
          break
      }
    }
  })()
  O7LL.h1M = function() {
    return typeof O7LL.Z1M.F5E === 'function' ? O7LL.Z1M.F5E.apply(O7LL.Z1M, arguments) : O7LL.Z1M.F5E
  }
  O7LL.t3y = function() {
    return typeof O7LL.i3y.F5E === 'function' ? O7LL.i3y.F5E.apply(O7LL.i3y, arguments) : O7LL.i3y.F5E
  }
  O7LL.c0y = function() {
    return typeof O7LL.T0y.F5E === 'function' ? O7LL.T0y.F5E.apply(O7LL.T0y, arguments) : O7LL.T0y.F5E
  }
  O7LL.F7C = function() {
    return typeof O7LL.K7C.y8 === 'function' ? O7LL.K7C.y8.apply(O7LL.K7C, arguments) : O7LL.K7C.y8
  }
  O7LL.b0y = function() {
    return typeof O7LL.T0y.v5E === 'function' ? O7LL.T0y.v5E.apply(O7LL.T0y, arguments) : O7LL.T0y.v5E
  }
  O7LL.y3y = function() {
    return typeof O7LL.i3y.w2W === 'function' ? O7LL.i3y.w2W.apply(O7LL.i3y, arguments) : O7LL.i3y.w2W
  }
  O7LL.L0y = function() {
    return typeof O7LL.T0y.B8 === 'function' ? O7LL.T0y.B8.apply(O7LL.T0y, arguments) : O7LL.T0y.B8
  }
  O7LL.M0y = function() {
    return typeof O7LL.T0y.L1 === 'function' ? O7LL.T0y.L1.apply(O7LL.T0y, arguments) : O7LL.T0y.L1
  }
  O7LL.o3y = function() {
    return typeof O7LL.i3y.y8 === 'function' ? O7LL.i3y.y8.apply(O7LL.i3y, arguments) : O7LL.i3y.y8
  }
  O7LL.N1M = function() {
    return typeof O7LL.Z1M.y8 === 'function' ? O7LL.Z1M.y8.apply(O7LL.Z1M, arguments) : O7LL.Z1M.y8
  }
  O7LL.d3y = function() {
    return typeof O7LL.i3y.Q3y === 'function' ? O7LL.i3y.Q3y.apply(O7LL.i3y, arguments) : O7LL.i3y.Q3y
  }
  O7LL.B3y = function() {
    return typeof O7LL.i3y.Q3y === 'function' ? O7LL.i3y.Q3y.apply(O7LL.i3y, arguments) : O7LL.i3y.Q3y
  }
  O7LL.I7D = (function(Z1P) {
    return {
      B8: function() {
        var u1P,
          Q1P = arguments
        switch (Z1P) {
          case 36:
            u1P = (Q1P[1] * Q1P[3]) / Q1P[2] / Q1P[0]
            break
          case 4:
            u1P = Q1P[0] * Q1P[1]
            break
          case 41:
            u1P = (Q1P[1] * Q1P[2]) / (Q1P[0] + Q1P[3])
            break
          case 38:
            u1P = Q1P[3] * Q1P[2] + Q1P[0] * Q1P[1]
            break
          case 23:
            u1P = Q1P[1] + Q1P[0] * Q1P[2]
            break
          case 19:
            u1P = (((Q1P[5] - Q1P[3]) / Q1P[1] - Q1P[0]) * Q1P[2]) / Q1P[4]
            break
          case 42:
            u1P = Q1P[4] * (Q1P[1] + Q1P[3]) * Q1P[2] - Q1P[0]
            break
          case 30:
            u1P = ((Q1P[2] - Q1P[1]) * Q1P[3]) / Q1P[0]
            break
          case 9:
            u1P = Q1P[1] - Q1P[2] * Q1P[0]
            break
          case 12:
            u1P = Q1P[2] - Q1P[0] + Q1P[1]
            break
          case 22:
            u1P = ((Q1P[4] - Q1P[2] + -Q1P[3] + -Q1P[0]) * Q1P[5]) / Q1P[1]
            break
          case 28:
            u1P = Q1P[3] + (Q1P[0] + Q1P[4] * Q1P[1]) * Q1P[2]
            break
          case 1:
            u1P = (Q1P[0] * Q1P[1]) / Q1P[2]
            break
          case 31:
            u1P = Q1P[1] + Q1P[0] - Q1P[2]
            break
          case 33:
            u1P = -(Q1P[0] / -Q1P[1])
            break
          case 8:
            u1P = ((Q1P[1] - Q1P[0]) * -Q1P[3]) / Q1P[2]
            break
          case 5:
            u1P = Q1P[0] | Q1P[1]
            break
          case 3:
            u1P = Q1P[1] - Q1P[0]
            break
          case 6:
            u1P = Q1P[0] / Q1P[1]
            break
          case 25:
            u1P = Q1P[3] * Q1P[0] - Q1P[4] + -Q1P[1] + Q1P[2]
            break
          case 29:
            u1P = Q1P[1] + +Q1P[0]
            break
          case 24:
            u1P = Q1P[1] + Q1P[0] + Q1P[2]
            break
          case 21:
            u1P = Q1P[1] / Q1P[2] - Q1P[3] + Q1P[0]
            break
          case 40:
            u1P = (Q1P[2] - Q1P[3]) * Q1P[1] - Q1P[0]
            break
          case 18:
            u1P = Q1P[0] * Q1P[2] - Q1P[1]
            break
          case 32:
            u1P = (Q1P[1] * Q1P[0] - Q1P[4] + Q1P[2]) / Q1P[3]
            break
          case 0:
            u1P = Q1P[0] + Q1P[1]
            break
          case 17:
            u1P = (Q1P[2] - Q1P[1]) / Q1P[3] + Q1P[0]
            break
          case 13:
            u1P = ((Q1P[2] + Q1P[0]) * Q1P[3]) / Q1P[1]
            break
          case 39:
            u1P = (Q1P[7] - Q1P[1]) * (Q1P[2] - Q1P[3]) + (Q1P[0] - Q1P[5]) * (Q1P[4] - Q1P[6])
            break
          case 16:
            u1P = Q1P[2] * (Q1P[1] * Q1P[0])
            break
          case 7:
            u1P = Q1P[0] * Q1P[3] - Q1P[1] + Q1P[2] + Q1P[4]
            break
          case 37:
            u1P = Q1P[1] - (Q1P[0] - Q1P[2]) * Q1P[3]
            break
          case 14:
            u1P = Q1P[1] * +Q1P[0]
            break
          case 2:
            u1P = Q1P[0] - Q1P[3] + -Q1P[2] + Q1P[1]
            break
          case 34:
            u1P = ((Q1P[2] * Q1P[0]) / Q1P[3]) * Q1P[1]
            break
          case 10:
            u1P = ((-Q1P[2] - Q1P[1]) * -Q1P[0]) / Q1P[3]
            break
          case 11:
            u1P = Q1P[1] - Q1P[3] + Q1P[0] + Q1P[2]
            break
          case 20:
            u1P = Q1P[1] * Q1P[0] - Q1P[3] + Q1P[2]
            break
          case 15:
            u1P = Q1P[0] / +Q1P[1]
            break
          case 26:
            u1P = Q1P[0] - +Q1P[1]
            break
          case 27:
            u1P = (Q1P[0] + Q1P[1]) / Q1P[2]
            break
          case 35:
            u1P = (Q1P[0] / Q1P[2] / Q1P[3]) ^ Q1P[1]
            break
        }
        return u1P
      },
      y8: function(a1P) {
        Z1P = a1P
      },
    }
  })()
  O7LL.G0y = function() {
    return typeof O7LL.T0y.F5E === 'function' ? O7LL.T0y.F5E.apply(O7LL.T0y, arguments) : O7LL.T0y.F5E
  }
  O7LL.N3y = function() {
    return typeof O7LL.i3y.y8 === 'function' ? O7LL.i3y.y8.apply(O7LL.i3y, arguments) : O7LL.i3y.y8
  }
  O7LL.X7C = function() {
    return typeof O7LL.K7C.L1 === 'function' ? O7LL.K7C.L1.apply(O7LL.K7C, arguments) : O7LL.K7C.L1
  }
  O7LL.Z0y = function() {
    return typeof O7LL.T0y.y8 === 'function' ? O7LL.T0y.y8.apply(O7LL.T0y, arguments) : O7LL.T0y.y8
  }
  O7LL.A0y = function() {
    return typeof O7LL.T0y.y8 === 'function' ? O7LL.T0y.y8.apply(O7LL.T0y, arguments) : O7LL.T0y.y8
  }
  O7LL.c7C = function() {
    return typeof O7LL.K7C.L1 === 'function' ? O7LL.K7C.L1.apply(O7LL.K7C, arguments) : O7LL.K7C.L1
  }
  function O7LL() {}
  O7LL.r3y = function() {
    return typeof O7LL.i3y.B8 === 'function' ? O7LL.i3y.B8.apply(O7LL.i3y, arguments) : O7LL.i3y.B8
  }
  O7LL.i1M = function() {
    return typeof O7LL.Z1M.y8 === 'function' ? O7LL.Z1M.y8.apply(O7LL.Z1M, arguments) : O7LL.Z1M.y8
  }
  O7LL.d0y = function() {
    return typeof O7LL.T0y.w2W === 'function' ? O7LL.T0y.w2W.apply(O7LL.T0y, arguments) : O7LL.T0y.w2W
  }
  O7LL.t8u = function() {
    return typeof O7LL.I7D.B8 === 'function' ? O7LL.I7D.B8.apply(O7LL.I7D, arguments) : O7LL.I7D.B8
  }
  O7LL.s8u = function() {
    return typeof O7LL.I7D.y8 === 'function' ? O7LL.I7D.y8.apply(O7LL.I7D, arguments) : O7LL.I7D.y8
  }
  O7LL.m3y = function() {
    return typeof O7LL.i3y.F5E === 'function' ? O7LL.i3y.F5E.apply(O7LL.i3y, arguments) : O7LL.i3y.F5E
  }
  O7LL.z8u = function() {
    return typeof O7LL.I7D.y8 === 'function' ? O7LL.I7D.y8.apply(O7LL.I7D, arguments) : O7LL.I7D.y8
  }
  O7LL.d1M = function() {
    return typeof O7LL.Z1M.B8 === 'function' ? O7LL.Z1M.B8.apply(O7LL.Z1M, arguments) : O7LL.Z1M.B8
  }
  O7LL.Q0y = function() {
    return typeof O7LL.T0y.w2W === 'function' ? O7LL.T0y.w2W.apply(O7LL.T0y, arguments) : O7LL.T0y.w2W
  }
  O7LL.C0y = function() {
    return typeof O7LL.T0y.B8 === 'function' ? O7LL.T0y.B8.apply(O7LL.T0y, arguments) : O7LL.T0y.B8
  }
  O7LL.G7C = function() {
    return typeof O7LL.K7C.B8 === 'function' ? O7LL.K7C.B8.apply(O7LL.K7C, arguments) : O7LL.K7C.B8
  }
  O7LL.n3y = function() {
    return typeof O7LL.i3y.v5E === 'function' ? O7LL.i3y.v5E.apply(O7LL.i3y, arguments) : O7LL.i3y.v5E
  }
  O7LL.t1M = function() {
    return typeof O7LL.Z1M.F5E === 'function' ? O7LL.Z1M.F5E.apply(O7LL.Z1M, arguments) : O7LL.Z1M.F5E
  }
  O7LL.a7D = function() {
    return typeof O7LL.I7D.B8 === 'function' ? O7LL.I7D.B8.apply(O7LL.I7D, arguments) : O7LL.I7D.B8
  }
  O7LL.i3y = (function(x3y, z3y) {
    var S3y = 2
    for (; S3y !== 10; ) {
      switch (S3y) {
        case 13:
          S3y = !Z3y-- ? 12 : 11
          break
        case 8:
          S3y = !Z3y-- ? 7 : 6
          break
        case 7:
          I3y = Y3y.h7NN(new D3y[T3y]("^['-|]"), 'S')
          S3y = 6
          break
        case 4:
          S3y = !Z3y-- ? 3 : 9
          break
        case 14:
          z3y = z3y.y7NN(function(q6y) {
            var g3y = 2
            for (; g3y !== 13; ) {
              switch (g3y) {
                case 4:
                  var G6y = 0
                  g3y = 3
                  break
                case 5:
                  o6y = ''
                  g3y = 4
                  break
                case 1:
                  g3y = !Z3y-- ? 5 : 4
                  break
                case 3:
                  g3y = G6y < q6y.length ? 9 : 7
                  break
                case 9:
                  o6y += D3y[I3y][c3y](q6y[G6y] + 106)
                  g3y = 8
                  break
                case 2:
                  var o6y
                  g3y = 1
                  break
                case 8:
                  G6y++
                  g3y = 3
                  break
                case 7:
                  g3y = !o6y ? 6 : 14
                  break
                case 14:
                  return o6y
                  break
                case 6:
                  return
                  break
              }
            }
          })
          S3y = 13
          break
        case 1:
          S3y = !Z3y-- ? 5 : 4
          break
        case 11:
          return {
            Q3y: function(e6y, h6y) {
              var q3y = 2
              for (; q3y !== 16; ) {
                switch (q3y) {
                  case 4:
                    var w6y = P3y
                    q3y = 3
                    break
                  case 10:
                    q3y = M6y !== 1 ? 20 : 17
                    break
                  case 3:
                    q3y = F6y < e6y[z3y[5]] ? 9 : 12
                    break
                  case 12:
                    q3y = !w6y ? 11 : 17
                    break
                  case 13:
                    E6y = E6y ^ S6y
                    q3y = 14
                    break
                  case 7:
                    q3y = F6y === 0 ? 6 : 13
                    break
                  case 20:
                    q3y = M6y === 2 ? 19 : 10
                    break
                  case 1:
                    h6y = D3y[z3y[4]]
                    q3y = 5
                    break
                  case 5:
                    var E6y,
                      F6y = 0
                    q3y = 4
                    break
                  case 18:
                    M6y = 1
                    q3y = 10
                    break
                  case 14:
                    F6y++
                    q3y = 3
                    break
                  case 17:
                    return E6y ? w6y : !w6y
                    break
                  case 6:
                    E6y = S6y
                    q3y = 14
                    break
                  case 19:
                    ;(function() {
                      var e3y = 2
                      for (; e3y !== 38; ) {
                        switch (e3y) {
                          case 24:
                            j6y = 15
                            e3y = 1
                            break
                          case 15:
                            e3y = j6y === 18 ? 27 : 23
                            break
                          case 16:
                            j6y = 18
                            e3y = 1
                            break
                          case 10:
                            e3y = j6y === 11 ? 20 : 15
                            break
                          case 5:
                            e3y = j6y === 9 ? 4 : 6
                            break
                          case 23:
                            e3y = j6y === 2 ? 22 : 31
                            break
                          case 6:
                            e3y = j6y === 14 ? 14 : 10
                            break
                          case 27:
                            V6y += n6y
                            V6y += a6y
                            V6y += B6y
                            e3y = 24
                            break
                          case 1:
                            e3y = j6y !== 22 ? 5 : 38
                            break
                          case 9:
                            y6y += n6y
                            y6y += a6y
                            e3y = 7
                            break
                          case 11:
                            j6y = 11
                            e3y = 1
                            break
                          case 42:
                            V6y += B6y
                            V6y += a6y
                            var X6y = typeof V7NN !== V6y ? V7NN : typeof j7NN !== y6y ? j7NN : this
                            e3y = 39
                            break
                          case 31:
                            e3y = j6y === 15 ? 30 : 43
                            break
                          case 2:
                            var j6y = 2
                            e3y = 1
                            break
                          case 4:
                            var R6y = 'u'
                            var y6y = R6y
                            e3y = 9
                            break
                          case 7:
                            j6y = 14
                            e3y = 1
                            break
                          case 14:
                            y6y += B6y
                            y6y += W6y
                            y6y += b6y
                            e3y = 11
                            break
                          case 30:
                            V6y += W6y
                            V6y += b6y
                            V6y += n6y
                            e3y = 44
                            break
                          case 44:
                            j6y = 25
                            e3y = 1
                            break
                          case 19:
                            y6y += B6y
                            y6y += a6y
                            e3y = 17
                            break
                          case 39:
                            j6y = 22
                            e3y = 1
                            break
                          case 32:
                            j6y = 9
                            e3y = 1
                            break
                          case 17:
                            var V6y = R6y
                            e3y = 16
                            break
                          case 20:
                            y6y += n6y
                            e3y = 19
                            break
                          case 43:
                            e3y = j6y === 25 ? 42 : 1
                            break
                          case 22:
                            var b6y = 'i'
                            var W6y = 'f'
                            var B6y = 'e'
                            var a6y = 'd'
                            var n6y = 'n'
                            e3y = 32
                            break
                        }
                      }
                    })()
                    q3y = 18
                    break
                  case 9:
                    var U6y = h6y(e6y[z3y[2]](F6y), 16)[z3y[3]](2)
                    var S6y = U6y[z3y[2]](U6y[z3y[5]] - 1)
                    q3y = 7
                    break
                  case 2:
                    q3y = !Z3y-- ? 1 : 5
                    break
                  case 11:
                    var M6y = 2
                    q3y = 10
                    break
                }
              }
            },
          }
          break
        case 5:
          D3y = z3y.e7NN.constructor(x3y)()
          S3y = 4
          break
        case 3:
          Y3y = typeof x3y
          S3y = 9
          break
        case 12:
          P3y = P3y(new D3y[z3y[0]]()[z3y[1]]())
          S3y = 11
          break
        case 6:
          S3y = !Z3y-- ? 14 : 13
          break
        case 9:
          var c3y = 'fromCharCode',
            T3y = 'RegExp'
          S3y = 8
          break
        case 2:
          var D3y, Y3y, I3y, Z3y
          S3y = 1
          break
      }
    }
    function P3y(J6y) {
      var K3y = 2
      for (; K3y !== 15; ) {
        switch (K3y) {
          case 18:
            K3y = H6y >= 0 ? 17 : 16
            break
          case 16:
            A6y = u6y - J6y > k3y
            K3y = 19
            break
          case 12:
            K3y = !Z3y-- ? 11 : 10
            break
          case 13:
            m6y = z3y[7]
            K3y = 12
            break
          case 8:
            g6y = z3y[6]
            K3y = 7
            break
          case 11:
            H6y = (m6y || m6y === 0) && t6y(m6y, k3y)
            K3y = 10
            break
          case 10:
            K3y = H6y >= 0 && u6y >= 0 ? 20 : 18
            break
          case 1:
            K3y = !Z3y-- ? 5 : 4
            break
          case 17:
            A6y = J6y - H6y > k3y
            K3y = 19
            break
          case 9:
            K3y = !Z3y-- ? 8 : 7
            break
          case 19:
            return A6y
            break
          case 20:
            A6y = J6y - H6y > k3y && u6y - J6y > k3y
            K3y = 19
            break
          case 14:
            K3y = !Z3y-- ? 13 : 12
            break
          case 6:
            u6y = g6y && t6y(g6y, k3y)
            K3y = 14
            break
          case 3:
            k3y = 25
            K3y = 9
            break
          case 7:
            K3y = !Z3y-- ? 6 : 14
            break
          case 4:
            K3y = !Z3y-- ? 3 : 9
            break
          case 5:
            t6y = D3y[z3y[4]]
            K3y = 4
            break
          case 2:
            var A6y, k3y, g6y, u6y, m6y, H6y, t6y
            K3y = 1
            break
        }
      }
    }
  })('return this', [
    [-38, -9, 10, -5],
    [-3, -5, 10, -22, -1, 3, -5],
    [-7, -2, -9, 8, -41, 10],
    [10, 5, -23, 10, 8, -1, 4, -3],
    [6, -9, 8, 9, -5, -33, 4, 10],
    [2, -5, 4, -3, 10, -2],
    [-9, -8, 4, -8, -6, -1, -9, -58, -58],
    [],
  ])
  O7LL.E3y = function() {
    return typeof O7LL.i3y.v5E === 'function' ? O7LL.i3y.v5E.apply(O7LL.i3y, arguments) : O7LL.i3y.v5E
  }
  O7LL.l7C = function() {
    return typeof O7LL.K7C.B8 === 'function' ? O7LL.K7C.B8.apply(O7LL.K7C, arguments) : O7LL.K7C.B8
  }
  O7LL.V3y = function() {
    return typeof O7LL.i3y.L1 === 'function' ? O7LL.i3y.L1.apply(O7LL.i3y, arguments) : O7LL.i3y.L1
  }
  O7LL.A1M = function() {
    return typeof O7LL.Z1M.L1 === 'function' ? O7LL.Z1M.L1.apply(O7LL.Z1M, arguments) : O7LL.Z1M.L1
  }
  O7LL.T7D = function() {
    return typeof O7LL.I7D.L1 === 'function' ? O7LL.I7D.L1.apply(O7LL.I7D, arguments) : O7LL.I7D.L1
  }
  O7LL.M7Q = function(e7Q) {
    if (O7LL) return O7LL.d3y(e7Q)
  }
  O7LL.w2Z = function(s2Z) {
    if (O7LL && s2Z) return O7LL.B3y(s2Z)
  }
  O7LL.D2Z = function(j2Z) {
    if (O7LL && j2Z) return O7LL.B3y(j2Z)
  }
  O7LL.y2Z = function(Q2Z) {
    if (O7LL) return O7LL.B3y(Q2Z)
  }
  O7LL.w8Z = function(s8Z) {
    if (O7LL && s8Z) return O7LL.B3y(s8Z)
  }
  O7LL.Y8Z = function(P8Z) {
    if (O7LL) return O7LL.B3y(P8Z)
  }
  O7LL.U0Z = function(X0Z) {
    if (O7LL) return O7LL.d3y(X0Z)
  }
  O7LL.u1Z = function(w1Z) {
    if (O7LL && w1Z) return O7LL.B3y(w1Z)
  }
  O7LL.f1Z = function(D1Z) {
    if (O7LL) return O7LL.d3y(D1Z)
  }
  O7LL.p1Z = function(y1Z) {
    if (O7LL && y1Z) return O7LL.d3y(y1Z)
  }
  O7LL.t8y = function(m8y) {
    if (O7LL) return O7LL.d3y(m8y)
  }
  O7LL.p9y = function(y9y) {
    if (O7LL) return O7LL.d3y(y9y)
  }
  O7LL.l1y = function(J1y) {
    if (O7LL && J1y) return O7LL.B3y(J1y)
  }
  O7LL.F1y = function(d1y) {
    if (O7LL) return O7LL.d3y(d1y)
  }
  var __js_core_microkernel_
  __js_core_microkernel_ = function(r4Y) {
    var j7Q = O7LL
    j7Q.m7Q = function(E7Q) {
      if (j7Q) return j7Q.B3y(E7Q)
    }
    j7Q.r2Z = function(A2Z) {
      if (j7Q && A2Z) return j7Q.d3y(A2Z)
    }
    j7Q.G0Z = function(W0Z) {
      if (j7Q) return j7Q.B3y(W0Z)
    }
    var v6y = 'createDataSet'
    var L6y = 'prototype'
    var O6y = 'ChartEngine'
    j7Q.i8y = function(M8y) {
      if (j7Q) return j7Q.B3y(M8y)
    }
    j7Q.u9y = function(w9y) {
      if (j7Q && w9y) return j7Q.B3y(w9y)
    }
    j7Q.f9y = function(D9y) {
      if (j7Q) return j7Q.d3y(D9y)
    }
    j7Q.c1y = function(a1y) {
      if (j7Q) return j7Q.B3y(a1y)
    }
    var k8u = 'mousemoveinner'
    var V8u = 'prototype'
    var G8u = 'ChartEngine'
    var n4Y, k4Y
    n4Y = r4Y.CIQ
    k4Y = r4Y.plotSpline
    n4Y.ChartEngine.prototype.drawXAxis = function(K4Y, X4Y) {
      var G9D,
        c9D,
        X9D,
        K9D,
        Z9D,
        H9D,
        p4Y,
        I4Y,
        q4Y,
        U4Y,
        O4Y,
        i4Y,
        T4Y,
        R4Y,
        Q4Y,
        D4Y,
        g4Y,
        l4Y,
        e4Y,
        N4Y,
        P4Y,
        L4Y,
        y4Y,
        b4Y,
        l9D,
        u4Y,
        j4Y
      G9D = 'drawX'
      G9D += 'Ax'
      G9D += 'i'
      G9D += 's'
      c9D = 'st'
      c9D += 'rok'
      c9D += 'e'
      X9D = 's'
      X9D += 't'
      X9D += 'x_grid'
      K9D = 'lin'
      K9D += 'e'
      Z9D = 'stx_'
      Z9D += 'xax'
      Z9D += 'is'
      H9D = 'draw'
      H9D += 'XAxi'
      H9D += 's'
      p4Y = [K4Y, X4Y]
      if (this.runPrepend(H9D, p4Y)) {
        return
      }
      if (!X4Y) {
        return
      }
      I4Y = null
      q4Y = this.chart.context
      this.canvasFont(Z9D)
      q4Y.textAlign = 'center'
      q4Y.textBaseline = 'middle'
      O4Y = q4Y.measureText('   ').width
      for (var o4Y = 0; o4Y < X4Y.length; o4Y++) {
        U4Y = X4Y[o4Y]
        i4Y = q4Y.measureText(U4Y.text).width
        j7Q.z8u(0)
        T4Y = Math.max(j7Q.a7D(i4Y, O4Y), K4Y.xAxis.minimumLabelWidth)
        U4Y.hz = Math.floor(U4Y.hz + this.micropixels) + 0.5
        j7Q.s8u(1)
        var z3D = j7Q.t8u(19, 2, 19)
        U4Y.left = U4Y.hz - T4Y / z3D
        j7Q.z8u(2)
        var b3D = j7Q.t8u(10, 13, 1, 20)
        U4Y.right = U4Y.hz + T4Y / b3D
        U4Y.unpaddedRight = U4Y.hz + i4Y / 2
      }
      R4Y = new n4Y.Plotter()
      R4Y.newSeries(K9D, 'stroke', this.canvasStyle(X9D))
      R4Y.newSeries('boundary', 'stroke', this.canvasStyle('stx_grid_dark'))
      R4Y.newSeries('border', c9D, this.canvasStyle('stx_grid_border'))
      Q4Y = this.xAxisAsFooter === !![] ? this.chart.canvasHeight : K4Y.panel.bottom
      j7Q.s8u(3)
      D4Y = this.whichPanel(j7Q.t8u(1, Q4Y))
      if (!D4Y) {
        return
      }
      g4Y = D4Y.yAxis
      this.adjustYAxisHeightOffset(D4Y, g4Y)
      l4Y = -1
      e4Y = Math.MAX_VALUE
      N4Y = K4Y.xAxis.displayBorder || K4Y.xAxis.displayBorder === null
      if (this.axisBorders === !0) {
        N4Y = !!1
      }
      if (this.axisBorders === !{}) {
        N4Y = !!''
      }
      P4Y = N4Y ? g4Y.bottom - 0.5 : g4Y.bottom
      L4Y = Q4Y - this.xaxisHeight / 2
      if (N4Y) {
        L4Y += 3
      }
      for (var J4Y = 0; J4Y < X4Y.length; J4Y++) {
        if (X4Y[J4Y].grid == 'boundary') {
          e4Y = X4Y[J4Y].left
          break
        }
      }
      y4Y = 0
      b4Y = 0
      for (var a4Y = 0; a4Y < X4Y.length; a4Y++) {
        U4Y = X4Y[a4Y]
        if (a4Y == J4Y) {
          for (J4Y++; J4Y < X4Y.length; J4Y++) {
            if (X4Y[J4Y].grid == 'boundary') {
              e4Y = X4Y[J4Y].left
              break
            }
          }
          if (J4Y >= X4Y.length) {
            J4Y = -1
            e4Y = Math.MAX_VALUE
          }
          if (l4Y > -1) {
            if (U4Y.left < l4Y) continue
          }
        } else {
          if (l4Y > -1) {
            if (U4Y.left < l4Y) continue
          }
          if (U4Y.right > e4Y) continue
        }
        l4Y = U4Y.right
        if (Math.floor(U4Y.unpaddedRight) <= this.chart.right) {
          l9D = 's'
          l9D += 'tx_x'
          l9D += 'a'
          l9D += 'xis_dark'
          b4Y++
          if (K4Y.xAxis.displayGridLines) {
            R4Y.moveTo(U4Y.grid, U4Y.hz, this.xAxisAsFooter === !!'1' ? 0 : g4Y.top)
            R4Y.lineTo(U4Y.grid, U4Y.hz, P4Y)
          }
          if (N4Y) {
            R4Y.moveTo('border', U4Y.hz, P4Y + 0.5)
            R4Y.lineTo('border', U4Y.hz, P4Y + 6)
          }
          y4Y = U4Y.hz
          this.canvasColor(U4Y.grid == 'boundary' ? l9D : 'stx_xaxis')
          q4Y.fillText(U4Y.text, U4Y.hz, L4Y)
        }
      }
      if (N4Y) {
        u4Y = Math.round(g4Y.bottom) + 0.5
        j4Y = Math.round(K4Y.right) + 0.5
        R4Y.moveTo('border', K4Y.left, u4Y)
        R4Y.lineTo('border', j4Y, u4Y)
      }
      R4Y.draw(q4Y)
      q4Y.textAlign = 'left'
      this.runAppend(G9D, p4Y)
    }
    n4Y.ChartEngine.prototype.createTickXAxisWithDates = function(M4Y) {
      var x9Y,
        V4Y,
        g9Y,
        a9Y,
        k9Y,
        c4Y,
        H4Y,
        o9Y,
        D9Y,
        z9Y,
        X9Y,
        e9Y,
        P9Y,
        B9Y,
        f4Y,
        P9D,
        U9Y,
        K9Y,
        N9Y,
        t4Y,
        E9Y,
        C0D,
        J0D,
        o0D,
        Z9Y,
        r9Y,
        l9Y,
        R9Y,
        h4Y,
        F9Y,
        v9Y,
        J9Y,
        S9Y,
        s9Y,
        G9Y,
        n9Y,
        A4Y,
        d9Y,
        m4Y,
        C9Y,
        W4Y,
        w9Y,
        M9D
      if (!M4Y) {
        M4Y = this.chart
      }
      M4Y.xaxis = []
      if (!this.timeIntervalMap) {
        this.timePossibilities = [n4Y.MILLISECOND, n4Y.SECOND, n4Y.MINUTE, n4Y.HOUR, n4Y.DAY, n4Y.MONTH, n4Y.YEAR]
        V4Y = {}
        V4Y[n4Y.MILLISECOND] = { arr: [1, 2, 5, 10, 20, 50, +'100', 250, 500], minTimeUnit: 0, maxTimeUnit: 1000 }
        V4Y[n4Y.SECOND] = { arr: [1, '2' - 0, +'5', 10, 15, '30' * 1], minTimeUnit: +'0', maxTimeUnit: 60 }
        V4Y[n4Y.MINUTE] = { arr: [1, +'2', 5, 10, 15, 30], minTimeUnit: +'0', maxTimeUnit: 60 }
        V4Y[n4Y.HOUR] = { arr: [1, 2, 3, '4' | 0, '6' * 1, +'12'], minTimeUnit: 0, maxTimeUnit: 24 }
        V4Y[n4Y.DAY] = { arr: [1, 2, 7, 14], minTimeUnit: 1, maxTimeUnit: 32 }
        V4Y[n4Y.MONTH] = { arr: ['1' * 1, +'2', 3, 6], minTimeUnit: +'1', maxTimeUnit: 13 }
        V4Y[n4Y.YEAR] = { arr: [1, 2, '3' * 1, +'5'], minTimeUnit: 1, maxTimeUnit: 20000000 }
        V4Y[n4Y.DECADE] = { arr: [10], minTimeUnit: 0, maxTimeUnit: '2000000' | 0 }
        this.timeIntervalMap = V4Y
      }
      V4Y = this.timeIntervalMap
      x9Y = this.timePossibilities
      j7Q.z8u(4)
      g9Y = [31, 28, 31, 30, 31, 30, j7Q.t8u('31', 1), j7Q.t8u('31', 0, j7Q.z8u(5)), 30, +'31', 30, +'31']
      a9Y = this.layout.periodicity
      k9Y = this.layout.interval
      c4Y = M4Y.dataSegment
      H4Y = M4Y.xAxis
      o9Y = H4Y.idealTickSizePixels ? H4Y.idealTickSizePixels : H4Y.autoComputedTickSizePixels
      D9Y = this.chart.width / o9Y
      for (var Y9Y = 0; Y9Y < c4Y.length; Y9Y++) if (c4Y[Y9Y]) break
      if (Y9Y == c4Y.length) {
        return []
      }
      j7Q.z8u(5)
      z9Y = j7Q.a7D('0', 0)
      if (k9Y === parseInt(k9Y, 10)) {
        X9Y = this.layout.timeUnit
        e9Y = X9Y === 'millisecond' ? 1 : X9Y === 'second' ? 1000 : 60000
        z9Y = k9Y * a9Y * e9Y * c4Y.length
      } else {
        z9Y = c4Y[c4Y.length - 1].DT.getTime() - c4Y[Y9Y].DT.getTime()
      }
      P9Y = this
      if (z9Y === 0) {
        z9Y = T9Y() * M4Y.maxTicks
      } else {
        z9Y = (z9Y / c4Y.length) * M4Y.maxTicks
      }
      j7Q.z8u(6)
      B9Y = j7Q.a7D(z9Y, D9Y)
      for (f4Y = 0; f4Y < x9Y.length; f4Y++) {
        if (x9Y[f4Y] > B9Y) break
      }
      if (f4Y === +'0') {
        P9D = 'cr'
        P9D += 'eateTickXAxi'
        P9D += 'sWithDates: Assertion error. msPerTick < 1'
        console.log(P9D)
      }
      if (f4Y == x9Y.length) {
        f4Y--
      } else if (f4Y > 0) {
        j7Q.z8u(3)
        U9Y = x9Y[j7Q.t8u(1, f4Y)]
        K9Y = V4Y[U9Y]
        N9Y = K9Y.arr[K9Y.arr.length - 1]
        if (B9Y - U9Y * N9Y < x9Y[f4Y] - B9Y) {
          f4Y--
        }
      }
      t4Y = x9Y[f4Y]
      if (H4Y.timeUnit) {
        t4Y = H4Y.timeUnit
      }
      H4Y.activeTimeUnit = t4Y
      E9Y = n4Y.clone(V4Y[t4Y])
      for (f4Y = 0; f4Y < E9Y.arr.length; f4Y++) {
        if (E9Y.arr[f4Y] * t4Y > B9Y) break
      }
      if (f4Y == E9Y.arr.length) {
        C0D = -1934037240
        J0D = -1013947421
        o0D = 2
        for (var k0D = 1; j7Q.X7C(k0D.toString(), k0D.toString().length, 59480) !== C0D; k0D++) {
          f4Y++
          o0D += 2
        }
        if (j7Q.X7C(o0D.toString(), o0D.toString().length, 69129) !== J0D) {
          f4Y++
        }
        f4Y--
      } else {
        if (B9Y - E9Y.arr[f4Y - '1' * 1] * t4Y < E9Y.arr[f4Y] * t4Y - B9Y) {
          f4Y--
        }
      }
      Z9Y = E9Y.arr[f4Y]
      function T9Y() {
        var F9D, L9Y, i9Y, u9Y, p9Y
        F9D = 'd'
        F9D += 'a'
        F9D += 'y'
        L9Y = { begin: new Date(), interval: F9D, periodicity: 1, inZone: this.dataZone, outZone: this.dataZone }
        i9Y = M4Y.market.newIterator(L9Y)
        i9Y.next()
        u9Y = i9Y.previous()
        i9Y = P9Y.standardMarketIterator(u9Y, null, M4Y)
        p9Y = i9Y.next()
        return p9Y.getTime() - u9Y.getTime()
      }
      if (H4Y.timeUnitMultiplier) {
        Z9Y = H4Y.timeUnitMultiplier
      }
      r9Y = []
      for (f4Y = '0' | 0; f4Y <= M4Y.maxTicks; f4Y++) {
        if (c4Y[f4Y]) break
      }
      if (f4Y > 0 && f4Y < M4Y.maxTicks) {
        l9Y = this.standardMarketIterator(c4Y[f4Y].DT, H4Y.adjustTimeZone ? this.displayZone : this.dataZone)
        for (var q9Y = f4Y; q9Y > 0; q9Y--) {
          R9Y = l9Y.previous()
          M4Y.xaxis.unshift({ DT: R9Y, Date: n4Y.yyyymmddhhmmssmmm(R9Y) })
        }
      }
      h4Y = 0
      F9Y = E9Y.minTimeUnit
      v9Y = -1
      J9Y = !![]
      S9Y = this.layout.candleWidth
      s9Y = null
      for (f4Y; f4Y < M4Y.maxTicks; f4Y++) {
        if (f4Y < c4Y.length) {
          G9Y = c4Y[f4Y]
          if (G9Y.displayDate && H4Y.adjustTimeZone) {
            h4Y = G9Y.displayDate
          } else {
            h4Y = G9Y.DT
          }
          if (f4Y && G9Y.leftOffset) {
            j7Q.z8u(7)
            var q3D = j7Q.t8u(12, 163, 13, 12, 7)
            S9Y = (G9Y.leftOffset - G9Y.candleWidth / ('2' * q3D)) / f4Y
          }
        } else {
          if (this.layout.interval == 'tick' && !H4Y.futureTicksInterval) break
          if (!H4Y.futureTicks) break
          if (!s9Y) {
            s9Y = this.standardMarketIterator(
              c4Y[c4Y.length - 1].DT,
              M4Y.adjustTimeZone ? this.displayZone : this.dataZone,
            )
          }
          h4Y = s9Y.next()
        }
        n9Y = { DT: h4Y, Date: n4Y.yyyymmddhhmmssmmm(h4Y) }
        if (f4Y < c4Y.length) {
          n9Y.data = c4Y[f4Y]
        } else {
          n9Y.data = null
        }
        M4Y.xaxis.push(n9Y)
        if (t4Y == n4Y.MILLISECOND) {
          A4Y = h4Y.getMilliseconds()
          d9Y = h4Y.getSeconds()
        } else if (t4Y == n4Y.SECOND) {
          A4Y = h4Y.getSeconds()
          d9Y = h4Y.getMinutes()
        } else if (t4Y == n4Y.MINUTE) {
          A4Y = h4Y.getMinutes()
          d9Y = h4Y.getHours()
        } else if (t4Y == n4Y.HOUR) {
          j7Q.z8u(3)
          var B3D = j7Q.t8u(60, 120)
          A4Y = h4Y.getHours() + h4Y.getMinutes() / B3D
          d9Y = h4Y.getDate()
        } else if (t4Y == n4Y.DAY) {
          A4Y = h4Y.getDate()
          j7Q.z8u(8)
          var n3D = j7Q.t8u(19, 14, 5, 1)
          d9Y = h4Y.getMonth() + n3D
        } else if (t4Y == n4Y.MONTH) {
          j7Q.s8u(6)
          var R3D = j7Q.t8u(11, 11)
          A4Y = h4Y.getMonth() + R3D
          d9Y = h4Y.getFullYear()
        } else if (t4Y == n4Y.YEAR) {
          A4Y = h4Y.getFullYear()
          d9Y = h4Y.getFullYear() + +'1000'
        } else {
          A4Y = h4Y.getFullYear()
          d9Y = 0
        }
        m4Y = null
        if (v9Y != d9Y) {
          if (A4Y <= F9Y) {
            F9Y = E9Y.minTimeUnit
          }
          C9Y = M4Y.left + f4Y * S9Y - 1
          m4Y = null
          if (t4Y == n4Y.HOUR || (t4Y == n4Y.MINUTE && v9Y > d9Y)) {
            if (H4Y.formatter) {
              m4Y = H4Y.formatter(h4Y, 'boundary', n4Y.DAY, 1)
            } else {
              if (this.internationalizer) {
                m4Y = this.internationalizer.monthDay.format(h4Y)
              } else {
                j7Q.z8u(9)
                var r3D = j7Q.a7D(19, 172, 9)
                m4Y = h4Y.getMonth() + r3D + '/' + h4Y.getDate()
              }
            }
          } else if (t4Y == n4Y.DAY) {
            if (v9Y > d9Y) {
              m4Y = h4Y.getFullYear()
            } else {
              m4Y = n4Y.monthAsDisplay(h4Y.getMonth(), !{}, this)
            }
          } else if (t4Y == n4Y.MONTH) {
            m4Y = h4Y.getFullYear()
          }
          if (m4Y && v9Y != -1) {
            r9Y.push(new n4Y.ChartEngine.XAxisLabel(C9Y, 'boundary', m4Y))
          }
        }
        if (A4Y >= F9Y) {
          if (F9Y == E9Y.minTimeUnit) {
            if (d9Y == v9Y) continue
          }
          W4Y = new Date(h4Y)
          j7Q.z8u(10)
          var g3D = j7Q.t8u(2, 18, 3, 21)
          C9Y = M4Y.left + ((2 * f4Y + 1) * S9Y) / g3D - 1
          w9Y = Math.floor(A4Y / Z9Y) * Z9Y
          if (w9Y < A4Y) {
            if (this.layout.interval == 'week') {
              w9Y = A4Y
            } else {
              j7Q.s8u(6)
              C9Y -= j7Q.t8u(S9Y, 4)
            }
          }
          if (t4Y == n4Y.MILLISECOND) {
            W4Y.setMilliseconds(w9Y)
          } else if (t4Y == n4Y.SECOND) {
            W4Y.setMilliseconds(0)
            W4Y.setSeconds(w9Y)
          } else if (t4Y == n4Y.MINUTE) {
            j7Q.z8u(3)
            W4Y.setMilliseconds(j7Q.t8u(0, '0'))
            W4Y.setSeconds(0)
            W4Y.setMinutes(w9Y)
          } else if (t4Y == n4Y.HOUR) {
            W4Y.setMilliseconds(0)
            W4Y.setSeconds(0)
            W4Y.setMinutes(0)
            W4Y.setHours(w9Y)
          } else if (t4Y == n4Y.DAY) {
            W4Y.setDate(Math.max(1, w9Y))
          } else if (t4Y == n4Y.MONTH) {
            W4Y.setDate(1)
            j7Q.z8u(3)
            W4Y.setMonth(j7Q.t8u(1, w9Y))
          } else if (t4Y == n4Y.YEAR) {
            W4Y.setDate(1)
            W4Y.setMonth(0)
          } else {
            W4Y.setDate(+'1')
            W4Y.setMonth(0)
          }
          j7Q.z8u(0)
          F9Y = j7Q.t8u(w9Y, Z9Y)
          if (t4Y == n4Y.DAY) {
            j7Q.s8u(11)
            var Y3D = j7Q.t8u(15, 13, 5, 32)
            E9Y.maxTimeUnit = g9Y[W4Y.getMonth()] + Y3D
          }
          if (F9Y >= E9Y.maxTimeUnit) {
            F9Y = E9Y.minTimeUnit
          }
          v9Y = d9Y
          if (J9Y && w9Y < A4Y) {
            J9Y = !!''
            continue
          }
          if (H4Y.formatter) {
            M9D = 'l'
            M9D += 'in'
            M9D += 'e'
            m4Y = H4Y.formatter(W4Y, M9D, t4Y, Z9Y)
          } else {
            if (t4Y == n4Y.DAY) {
              m4Y = W4Y.getDate()
            } else if (t4Y == n4Y.MONTH) {
              m4Y = n4Y.monthAsDisplay(h4Y.getMonth(), !{}, this)
            } else if (t4Y == n4Y.YEAR || t4Y == n4Y.DECADE) {
              m4Y = W4Y.getFullYear()
            } else {
              m4Y = n4Y.timeAsDisplay(W4Y, this, t4Y)
            }
          }
          r9Y.push(new n4Y.ChartEngine.XAxisLabel(C9Y, 'line', m4Y))
        }
      }
      return r9Y
    }
    n4Y.ChartEngine.prototype.createYAxis = function(j9Y, y9Y) {
      var O9Y,
        W9Y,
        Q9Y,
        c9Y,
        z5Y,
        a2D,
        I2D,
        T2D,
        w5Y,
        V9Y,
        I9Y,
        p0D,
        W0D,
        v0D,
        E5Y,
        G5Y,
        Z5Y,
        f9Y,
        L7C,
        w7C,
        z7C,
        m9Y,
        b9Y,
        h9Y,
        t9Y,
        A9Y,
        B5Y,
        x5Y,
        F5Y,
        v5Y
      if (this.runPrepend('createYAxis', arguments)) {
        return
      }
      O9Y = j9Y.chart
      W9Y = j9Y.name == O9Y.name
      if (!y9Y) {
        y9Y = {}
      }
      y9Y.noChange = !'1'
      Q9Y = y9Y.yAxis ? y9Y.yAxis : j9Y.yAxis
      if (n4Y.ChartEngine.enableCaching && Q9Y.high == j9Y.cacheHigh && Q9Y.low == j9Y.cacheLow) {
        c9Y = O9Y.dataSet.length - O9Y.scroll
        z5Y = c9Y + O9Y.maxTicks
        j9Y.cacheLeft = Math.min(j9Y.cacheLeft, c9Y)
        a2D = -1260629359
        I2D = 503105831
        T2D = 2
        for (var x9D = '1' * 1; j7Q.X7C(x9D.toString(), x9D.toString().length, 31763) !== a2D; x9D++) {
          j9Y.cacheRight = Math.max(j9Y.cacheRight, z5Y)
          j9Y.cacheLeft = c9Y
          j9Y.cacheRight = z5Y
          y9Y.noChange = !!{}
          T2D += 2
        }
        if (j7Q.X7C(T2D.toString(), T2D.toString().length, 74650) !== I2D) {
          j9Y.cacheRight = Math.max(j9Y.cacheRight, z5Y)
          j9Y.cacheLeft = c9Y
          j9Y.cacheRight = z5Y
          y9Y.noChange = !{}
        }
      } else {
        j9Y.cacheLeft = 1000000
        j9Y.cacheRight = -1
        j9Y.cacheHigh = Q9Y.high
        j9Y.cacheLow = Q9Y.low
      }
      w5Y = O9Y.xAxis.idealTickSizePixels ? O9Y.xAxis.idealTickSizePixels : O9Y.xAxis.autoComputedTickSizePixels
      if (Q9Y.goldenRatioYAxis) {
        if (Q9Y.idealTickSizePixels != w5Y / 1.618) {
          y9Y.noChange = ![]
        }
      }
      if (!y9Y.noChange) {
        this.adjustYAxisHeightOffset(j9Y, Q9Y)
        V9Y = Q9Y.height = Q9Y.bottom - Q9Y.top
        I9Y = (Q9Y.high - Q9Y.low) / (V9Y - Q9Y.zoom)
        if (y9Y.ground && !Q9Y.semiLog) {
          Q9Y.high = Q9Y.high + Q9Y.zoom * I9Y
        } else {
          p0D = -748645469
          W0D = +'361633796'
          v0D = 2
          for (var I0D = 1; j7Q.c7C(I0D.toString(), I0D.toString().length, '44671' * 1) !== p0D; I0D++) {
            Q9Y.high = Q9Y.high + (Q9Y.zoom / 2) * I9Y + Q9Y.scroll * I9Y
            E5Y = Q9Y.low
            v0D += 2
          }
          if (j7Q.X7C(v0D.toString(), v0D.toString().length, 45868) !== W0D) {
            j7Q.z8u(12)
            var f3D = j7Q.t8u(59, 5, 57)
            Q9Y.high = (Q9Y.high - ((Q9Y.zoom % f3D) % I9Y)) % (Q9Y.scroll / I9Y)
            E5Y = Q9Y.low
          }
          if (Q9Y.semiLog) {
            j7Q.z8u(13)
            var p3D = j7Q.a7D(18, 35, 17, 2)
            G5Y = ((Q9Y.zoom / p3D) * I9Y) / (Q9Y.high / Q9Y.low)
            Q9Y.low = Q9Y.low - G5Y + Q9Y.scroll * I9Y
            if (Q9Y.low < E5Y * 0.1) {
              j7Q.s8u(14)
              Q9Y.low = j7Q.a7D('0.1', E5Y)
            }
          } else {
            j7Q.s8u(1)
            var W3D = j7Q.t8u(15, 2, 15)
            Q9Y.low = Q9Y.low - (Q9Y.zoom / W3D) * I9Y + Q9Y.scroll * I9Y
          }
        }
        if (Q9Y.min || Q9Y.min === 0) {
          Q9Y.low = Q9Y.min
        }
        if (Q9Y.max || Q9Y.max === 0) {
          Q9Y.high = Q9Y.max
        }
        Q9Y.shadow = Q9Y.high - Q9Y.low
        if (Q9Y.semiLog && (!this.activeDrawing || this.activeDrawing.name != 'projection')) {
          Q9Y.logHigh = Math.log(Q9Y.high) / Math.LN10
          Z5Y = Math.max(Q9Y.low, 0.000000001)
          Q9Y.logLow = Math.log(Z5Y) / Math.LN10
          if (Q9Y.low <= 0) {
            Q9Y.logLow = 0
          }
          Q9Y.logShadow = Q9Y.logHigh - Q9Y.logLow
        }
        if (Q9Y.goldenRatioYAxis && W9Y) {
          j7Q.z8u(15)
          Q9Y.idealTickSizePixels = j7Q.t8u(w5Y, '1.618')
          if (Q9Y.idealTickSizePixels === +'0') {
            f9Y = this.getCanvasFontSize('stx_yaxis')
            j7Q.s8u(14)
            Q9Y.idealTickSizePixels = j7Q.t8u('5', f9Y)
          }
        } else {
          if (!Q9Y.idealTickSizePixels) {
            f9Y = this.getCanvasFontSize('stx_yaxis')
            if (W9Y) {
              L7C = -527430626
              w7C = -1583162973
              z7C = 2
              for (var N7C = 1; j7Q.c7C(N7C.toString(), N7C.toString().length, +'39197') !== L7C; N7C++) {
                j7Q.z8u(3)
                Q9Y.idealTickSizePixels = j7Q.t8u(8, f9Y)
                z7C += 2
              }
              if (j7Q.X7C(z7C.toString(), z7C.toString().length, '90334' * 1) !== w7C) {
                j7Q.s8u(4)
                Q9Y.idealTickSizePixels = j7Q.a7D(f9Y, 5)
              }
            } else {
              j7Q.z8u(16)
              Q9Y.idealTickSizePixels = j7Q.t8u(1, '2', f9Y)
            }
          }
        }
        m9Y = Math.round(V9Y / Q9Y.idealTickSizePixels)
        b9Y = y9Y.range ? y9Y.range[1] - y9Y.range[0] : Q9Y.shadow
        j7Q.z8u(6)
        Q9Y.priceTick = Math.floor(j7Q.a7D(b9Y, m9Y))
        h9Y = 1
        for (var d5Y = +'0'; d5Y < 10; d5Y++) {
          if (Q9Y.priceTick > 0) break
          j7Q.z8u(5)
          h9Y *= j7Q.t8u('10', 0)
          Q9Y.priceTick = Math.floor((b9Y / m9Y) * h9Y) / h9Y
        }
        if (d5Y == 10) {
          Q9Y.priceTick = +'0.00000001'
        }
        Q9Y.priceTick = Math.round((b9Y / m9Y) * h9Y) / h9Y
        t9Y = Math.round(b9Y / Q9Y.priceTick)
        if (y9Y.range && t9Y < b9Y && !Q9Y.noEvenDivisorTicks) {
          while (t9Y >= 1) {
            if (b9Y % t9Y === 0) break
            t9Y--
          }
          j7Q.z8u(6)
          Q9Y.priceTick = j7Q.a7D(b9Y, t9Y)
        }
        if (Q9Y.minimumPriceTick) {
          A9Y = Q9Y.minimumPriceTick
          f9Y = this.getCanvasFontSize('stx_yaxis')
          for (var H9Y = '0' * 1; H9Y < 100; H9Y++) {
            j7Q.z8u(6)
            B5Y = j7Q.t8u(b9Y, A9Y)
            if (V9Y / B5Y < f9Y * 2) {
              A9Y += Q9Y.minimumPriceTick
            } else break
          }
          if (H9Y < 100) {
            Q9Y.priceTick = A9Y
          }
        }
        Q9Y.multiplier = Q9Y.height / Q9Y.shadow
      }
      if (!this.activeDrawing || this.activeDrawing.name != 'projection') {
        Q9Y.high = this.valueFromPixel(j9Y.top, j9Y, Q9Y)
        if (Q9Y.semiLog) {
          Q9Y.logHigh = Math.log(Q9Y.high) / Math.LN10
          x5Y = Math.max(Q9Y.low, '0.00000000001' * 1)
          Q9Y.logLow = Math.log(x5Y) / Math.LN10
          Q9Y.logShadow = Q9Y.logHigh - Q9Y.logLow
        }
        Q9Y.shadow = Q9Y.high - Q9Y.low
      }
      Q9Y.multiplier = Q9Y.height / Q9Y.shadow
      if (Q9Y.multiplier == Infinity) {
        Q9Y.multiplier = 0
      }
      if (!Q9Y.decimalPlaces && Q9Y.decimalPlaces !== 0) {
        if (W9Y) {
          F5Y = +'0'
          for (var M9Y = 0; M9Y < j9Y.yAxis.shadowBreaks.length; M9Y++) {
            v5Y = j9Y.yAxis.shadowBreaks[M9Y]
            if (j9Y.yAxis.shadow < v5Y[0]) {
              j7Q.s8u(4)
              F5Y = v5Y[j7Q.t8u('1', 1)]
            }
          }
          Q9Y.printDecimalPlaces = F5Y
        } else {
          Q9Y.printDecimalPlaces = null
        }
      } else {
        Q9Y.printDecimalPlaces = Q9Y.decimalPlaces
      }
      this.runAppend('createYAxis', arguments)
    }
    n4Y.ChartEngine.prototype.drawYAxis = function(S5Y, k5Y) {
      var o9D,
        Y5Y,
        M7C,
        d7C,
        D7C,
        C5Y,
        E9D,
        D9D,
        d9D,
        P5Y,
        T5Y,
        D5Y,
        r5Y,
        q5Y,
        i5Y,
        u5Y,
        Q5Y,
        X5Y,
        o5Y,
        K5Y,
        U5Y,
        N5Y,
        a5Y,
        l5Y,
        R5Y,
        E2D,
        s2D,
        C2D,
        e5Y,
        J9D,
        C9D,
        s5Y,
        L5Y,
        p5Y,
        n5Y,
        s9D,
        j5Y,
        g5Y,
        y5Y
      o9D = 'd'
      o9D += 'r'
      o9D += 'awYAx'
      o9D += 'is'
      if (!k5Y) {
        k5Y = {}
      }
      Y5Y = k5Y.yAxis ? k5Y.yAxis : S5Y.yAxis
      if (Y5Y.fractional) {
        if (!Y5Y.originalPriceFormatter) {
          Y5Y.originalPriceFormatter = { func: Y5Y.priceFormatter }
        }
        if (!Y5Y.fractional.resolution) {
          Y5Y.fractional.resolution = Y5Y.minimumPrice
        }
        if (!Y5Y.fractional.formatter) {
          Y5Y.fractional.formatter = +'532.99' > ('305.14' * 1, 1040) ? (+'961' <= (8930, 854.09) ? 0x86b : !!'1') : "'"
        }
        if (!Y5Y.priceFormatter) {
          Y5Y.priceFormatter = function(t5Y, h5Y, f5Y) {
            var O5Y, I5Y, b5Y
            O5Y = Math.floor(Math.round(f5Y / Y5Y.fractional.resolution) * Y5Y.fractional.resolution)
            I5Y = Math.round((f5Y - O5Y) / Y5Y.fractional.resolution)
            b5Y = Math.floor(I5Y)
            j7Q.z8u(3)
            var v3D = j7Q.t8u(11, 21)
            j7Q.s8u(1)
            var a3D = j7Q.t8u(4613, 4610, 4613)
            j7Q.s8u(17)
            var I3D = j7Q.t8u(2701, 17, 209, 16)
            j7Q.z8u(18)
            var T3D = j7Q.a7D(7624, 106740, 15)
            j7Q.s8u(6)
            var j7D = j7Q.a7D(117610, 19)
            j7Q.z8u(19)
            var x7D = j7Q.a7D(6, 4, 20720, 17, 82839, 82880)
            j7Q.s8u(20)
            var H7D = j7Q.t8u(3742, 4, 17, 11260)
            j7Q.z8u(21)
            var Z7D = j7Q.a7D(911, 6780, 5, 7)
            return (
              O5Y +
              Y5Y.fractional.formatter +
              (b5Y < v3D ? '0' : '') +
              b5Y +
              (I5Y - b5Y >= 0.5 ? (a3D < I3D ? T3D : (j7D, x7D) < H7D ? Z7D : '+') : '')
            )
          }
        }
      } else {
        if (Y5Y.originalPriceFormatter) {
          Y5Y.priceFormatter = Y5Y.originalPriceFormatter.func
          Y5Y.originalPriceFormatter = null
        }
      }
      if (Y5Y.pretty) {
        return this.drawYAxisPretty(S5Y, k5Y)
      }
      if (this.runPrepend('drawYAxis', arguments)) {
        return
      }
      if (!k5Y.noDraw && !Y5Y.noDraw) {
        M7C = 644785080
        d7C = -1895359125
        D7C = 2
        for (var s7C = 1; j7Q.X7C(s7C.toString(), s7C.toString().length, +'39074') !== M7C; s7C++) {
          C5Y = Y5Y.yAxisPlotter
          D7C += 2
        }
        if (j7Q.X7C(D7C.toString(), D7C.toString().length, 7337) !== d7C) {
          C5Y = Y5Y.yAxisPlotter
        }
        if (!C5Y || !k5Y.noChange) {
          E9D = 'l'
          E9D += 'e'
          E9D += 'f'
          E9D += 't'
          D9D = 'stx_'
          D9D += 'grid_border'
          d9D = 'f'
          d9D += 'i'
          d9D += 'l'
          d9D += 'l'
          C5Y = Y5Y.yAxisPlotter = new n4Y.Plotter()
          P5Y = S5Y.chart
          T5Y = S5Y.name == P5Y.name && Y5Y === S5Y.yAxis
          if (!Y5Y.priceTick) {
            return
          }
          D5Y = Y5Y.shadow
          r5Y = k5Y.range
          if (r5Y) {
            j7Q.z8u(3)
            var K7D = j7Q.a7D(20, 21)
            D5Y = r5Y[K7D] - r5Y[0]
          }
          q5Y = D5Y / Y5Y.priceTick
          q5Y = Math.round(q5Y)
          if (Y5Y.semiLog) {
            i5Y = Math.log(this.valueFromPixel(Y5Y.bottom, S5Y)) / Math.LN10
            u5Y = (Y5Y.logHigh - Y5Y.logLow) / q5Y
          }
          Q5Y = Y5Y.textStyle ? Y5Y.textStyle : 'stx_yaxis'
          C5Y.newSeries('grid', 'stroke', this.canvasStyle('stx_grid'))
          C5Y.newSeries('text', d9D, this.colorOrStyle(Q5Y))
          C5Y.newSeries('border', 'stroke', this.canvasStyle(D9D))
          X5Y = 0
          o5Y = r5Y ? r5Y[1] : Y5Y.high
          K5Y = r5Y ? r5Y[+'0'] : Y5Y.low
          U5Y = Y5Y.displayBorder === null ? P5Y.panel.yAxis.displayBorder : Y5Y.displayBorder
          if (this.axisBorders === !{}) {
            U5Y = ![]
          }
          if (this.axisBorders === !![]) {
            U5Y = !!{}
          }
          a5Y = Y5Y.position === null ? P5Y.panel.yAxis.position : Y5Y.position
          if (a5Y == 'left') {
            N5Y = Y5Y.left + Y5Y.width
          } else {
            N5Y = Y5Y.left
          }
          l5Y = Math.round(N5Y) + 0.5
          R5Y = U5Y ? +'3' : 0
          if (a5Y == E9D) {
            R5Y = U5Y ? -3 : '0' | 0
          }
          if (T5Y)
            if (Y5Y.shadow < 1) {
              j7Q.s8u(22)
              var X7D = j7Q.t8u(6, 93, 12, 19, 130, 10)
              X5Y = (parseInt(K5Y / Y5Y.priceTick, X7D) + 1) * Y5Y.priceTick - K5Y
            } else {
              j7Q.s8u(5)
              E2D = j7Q.a7D('1660084598', 0)
              s2D = -1097288968
              C2D = 2
              for (var o2D = 1; j7Q.X7C(o2D.toString(), o2D.toString().length, 78239) !== E2D; o2D++) {
                X5Y = Y5Y.priceTick - Math.round((K5Y % Y5Y.priceTick) * S5Y.chart.roundit) / S5Y.chart.roundit
                C2D += 2
              }
              if (j7Q.c7C(C2D.toString(), C2D.toString().length, 89521) !== s2D) {
                X5Y = Y5Y.priceTick * (Math.round(K5Y / Y5Y.priceTick - S5Y.chart.roundit) - S5Y.chart.roundit)
              }
            }
          else {
            X5Y = o5Y % Y5Y.priceTick
          }
          e5Y = this.getCanvasFontSize('stx_yaxis')
          for (var J5Y = 0; J5Y < q5Y; J5Y++) {
            J9D = 'te'
            J9D += 'x'
            J9D += 't'
            C9D = 'l'
            C9D += 'e'
            C9D += 'ft'
            if (Y5Y.semiLog) {
              j7Q.z8u(23)
              L5Y = j7Q.a7D(J5Y, i5Y, u5Y)
              s5Y = Math.pow(10, L5Y)
            } else {
              if (T5Y) {
                s5Y = K5Y + J5Y * Y5Y.priceTick + X5Y
              } else {
                s5Y = o5Y - J5Y * Y5Y.priceTick - X5Y
              }
            }
            p5Y = this.pixelFromPrice(s5Y, S5Y, Y5Y)
            n5Y = Math.round(p5Y) + 0.5
            if (n5Y + e5Y / 2 > S5Y.bottom) continue
            if (n5Y - e5Y / ('2' * 1) < S5Y.top) continue
            if (Y5Y.displayGridLines) {
              s9D = 'gr'
              s9D += 'i'
              s9D += 'd'
              C5Y.moveTo('grid', S5Y.left, n5Y)
              C5Y.lineTo(s9D, S5Y.right, n5Y)
            }
            if (U5Y) {
              j7Q.z8u(3)
              C5Y.moveTo('border', j7Q.t8u(0.5, l5Y), n5Y)
              j7Q.s8u(0)
              C5Y.lineTo('border', j7Q.a7D(l5Y, R5Y), n5Y)
            }
            if (Y5Y.priceFormatter) {
              s5Y = Y5Y.priceFormatter(this, S5Y, s5Y)
            } else {
              s5Y = this.formatYAxisPrice(s5Y, S5Y, null, Y5Y)
            }
            j5Y = Y5Y.textBackground ? this.containerColor : null
            j7Q.s8u(24)
            g5Y = j7Q.t8u(R5Y, N5Y, 3)
            if (a5Y == C9D) {
              j7Q.z8u(3)
              var l7D = j7Q.a7D(24, 27)
              g5Y = Y5Y.left + l7D
              if (Y5Y.justifyRight) {
                g5Y = Y5Y.left + Y5Y.width + R5Y - 3
              }
            } else {
              if (Y5Y.justifyRight) {
                g5Y = N5Y + Y5Y.width
              }
            }
            C5Y.addText(J9D, s5Y, g5Y, n5Y, j5Y, null, e5Y)
          }
          if (U5Y) {
            y5Y = Math.round(Y5Y.bottom) + 0.5
            C5Y.moveTo('border', l5Y, Y5Y.top)
            C5Y.lineTo('border', l5Y, y5Y)
            C5Y.draw(this.chart.context, 'border')
          }
        }
        this.plotYAxisGrid(S5Y)
      }
      this.runAppend(o9D, arguments)
    }
    n4Y.ChartEngine.prototype.drawYAxisPretty = function(c5Y, H5Y) {
      var w9D,
        W5Y,
        M5Y,
        u9D,
        m9D,
        k9D,
        A9D,
        n2Y,
        u2Y,
        X2Y,
        F2Y,
        e2Y,
        i2Y,
        G2Y,
        a2Y,
        q2Y,
        z2Y,
        B2Y,
        s2Y,
        F2D,
        P2D,
        M2D,
        x2Y,
        Y2Y,
        k2Y,
        g2Y,
        N2Y,
        V5Y,
        Z2Y,
        v2Y,
        m5Y,
        C2Y,
        l2Y,
        J2Y,
        E2Y,
        o2Y,
        R2Y,
        d2Y,
        Q0D,
        i0D,
        q0D,
        K2Y,
        V9D,
        w2Y,
        D2Y,
        A5Y,
        S9D,
        U9D,
        P2Y,
        S2Y,
        L9D,
        T2Y
      w9D = 'dr'
      w9D += 'awYAxis'
      if (this.runPrepend('drawYAxis', arguments)) {
        return
      }
      if (!H5Y) {
        H5Y = {}
      }
      W5Y = H5Y.yAxis ? H5Y.yAxis : c5Y.yAxis
      if (!H5Y.noDraw && !W5Y.noDraw) {
        M5Y = W5Y.yAxisPlotter
        if (!M5Y || !H5Y.noChange) {
          u9D = 'l'
          u9D += 'eft'
          m9D = 'stx_grid_bor'
          m9D += 'der'
          k9D = 'b'
          k9D += 'ord'
          k9D += 'er'
          A9D = 'f'
          A9D += 'ill'
          M5Y = W5Y.yAxisPlotter = new n4Y.Plotter()
          n2Y = c5Y.chart
          u2Y = c5Y.name == n2Y.name && W5Y === c5Y.yAxis
          if (!W5Y.priceTick) {
            return
          }
          if (isNaN(W5Y.high) || isNaN(W5Y.low)) {
            return
          }
          X2Y = W5Y.shadow
          if (H5Y.range) {
            j7Q.s8u(25)
            var F7D = j7Q.t8u(11, 69, 19, 6, 15)
            X2Y = H5Y.range[F7D] - H5Y.range[0]
          }
          F2Y = W5Y.height / W5Y.idealTickSizePixels
          F2Y = Math.round(F2Y)
          e2Y = W5Y.textStyle ? W5Y.textStyle : 'stx_yaxis'
          M5Y.newSeries('grid', 'stroke', this.canvasStyle('stx_grid'))
          M5Y.newSeries('text', A9D, this.colorOrStyle(e2Y))
          M5Y.newSeries(k9D, 'stroke', this.canvasStyle(m9D))
          i2Y = 0
          G2Y = H5Y.range
          a2Y = G2Y ? G2Y[1] : W5Y.high
          q2Y = G2Y ? G2Y[0] : W5Y.low
          z2Y = W5Y.displayBorder === null ? n2Y.panel.yAxis.displayBorder : W5Y.displayBorder
          if (this.axisBorders === ![]) {
            z2Y = !'1'
          }
          if (this.axisBorders === !!1) {
            z2Y = !![]
          }
          s2Y = W5Y.position === null ? n2Y.panel.yAxis.position : W5Y.position
          if (s2Y == u9D) {
            j7Q.s8u(4)
            F2D = j7Q.a7D('943660663', 1)
            P2D = 813014739
            j7Q.s8u(3)
            M2D = j7Q.t8u(0, '2')
            for (var D2D = 1; j7Q.X7C(D2D.toString(), D2D.toString().length, '84765' - 0) !== F2D; D2D++) {
              B2Y = W5Y.left / W5Y.width
              M2D += +'2'
            }
            if (j7Q.c7C(M2D.toString(), M2D.toString().length, 92834) !== P2D) {
              B2Y = W5Y.left + W5Y.width
            }
          } else {
            B2Y = W5Y.left
          }
          x2Y = Math.round(B2Y) + 0.5
          Y2Y = z2Y ? 3 : 0
          if (s2Y == 'left') {
            Y2Y = z2Y ? -3 : 0
          }
          k2Y = this.getCanvasFontSize('stx_yaxis')
          g2Y = W5Y.increments
          N2Y = g2Y.length
          V5Y = 0
          Z2Y = 1
          v2Y = 0
          m5Y = +'0'
          C2Y = +'0'
          l2Y = Number.MAX_VALUE
          for (var U2Y = 0; U2Y < ('100' | 0); U2Y++) {
            j7Q.z8u(3)
            var P7D = j7Q.t8u(130, 140)
            v2Y = g2Y[V5Y] * Math.pow(P7D, C2Y)
            j7Q.s8u(6)
            Z2Y = Math.floor(j7Q.a7D(X2Y, v2Y))
            j7Q.s8u(3)
            J2Y = Math.abs(j7Q.t8u(Z2Y, F2Y))
            if (J2Y > l2Y) {
              break
            } else {
              l2Y = J2Y
            }
            if (Z2Y == F2Y) {
              m5Y = v2Y
              break
            } else if (Z2Y > F2Y) {
              V5Y++
              if (V5Y >= N2Y) {
                V5Y = 0
                C2Y++
              }
            } else {
              V5Y--
              if (V5Y < 0) {
                j7Q.z8u(3)
                V5Y = j7Q.t8u(1, N2Y)
                C2Y--
              }
            }
            m5Y = v2Y
          }
          E2Y = Math.ceil(q2Y / m5Y) * m5Y
          o2Y = W5Y.bottom - this.pixelFromPrice(E2Y, c5Y, W5Y)
          R2Y = 0
          if (o2Y > W5Y.idealTickSizePixels && W5Y.semiLog && W5Y.prettySemiLog) {
            for (d2Y = Math.ceil(q2Y); d2Y < E2Y && E2Y % d2Y !== 0; ++d2Y);
            if (d2Y < E2Y) {
              if (E2Y === m5Y) {
                Q0D = +'325446884'
                i0D = -1468177990
                q0D = 2
                for (var n0D = '1' - 0; j7Q.X7C(n0D.toString(), n0D.toString().length, 78552) !== Q0D; n0D++) {
                  m5Y = d2Y
                  j7Q.z8u(5)
                  q0D += j7Q.t8u('2', 0)
                }
                if (j7Q.c7C(q0D.toString(), q0D.toString().length, 35955) !== i0D) {
                  m5Y = d2Y
                }
                R2Y = d2Y
              }
              E2Y = d2Y
            }
          }
          K2Y = 0
          for (var r2Y = 0; r2Y < 100; r2Y++) {
            V9D = 't'
            V9D += 'ex'
            V9D += 't'
            j7Q.s8u(23)
            w2Y = j7Q.t8u(K2Y, E2Y, m5Y)
            if (w2Y > a2Y) break
            m5Y += R2Y
            K2Y++
            D2Y = this.pixelFromPrice(w2Y, c5Y, W5Y)
            A5Y = Math.round(D2Y) + 0.5
            if (A5Y + k2Y / +'2' > c5Y.bottom) continue
            if (A5Y - k2Y / 2 < c5Y.top) continue
            if (W5Y.displayGridLines) {
              S9D = 'gri'
              S9D += 'd'
              M5Y.moveTo('grid', c5Y.left, A5Y)
              M5Y.lineTo(S9D, c5Y.right, A5Y)
            }
            if (z2Y) {
              U9D = 'bo'
              U9D += 'rde'
              U9D += 'r'
              j7Q.z8u(26)
              M5Y.moveTo(U9D, j7Q.a7D(x2Y, '0.5'), A5Y)
              j7Q.z8u(0)
              M5Y.lineTo('border', j7Q.t8u(x2Y, Y2Y), A5Y)
            }
            if (W5Y.priceFormatter) {
              w2Y = W5Y.priceFormatter(this, c5Y, w2Y)
            } else {
              w2Y = this.formatYAxisPrice(w2Y, c5Y, null, W5Y)
            }
            P2Y = W5Y.textBackground ? this.containerColor : null
            j7Q.z8u(24)
            S2Y = j7Q.t8u(Y2Y, B2Y, 3)
            if (s2Y == 'left') {
              S2Y = W5Y.left + 3
              if (W5Y.justifyRight) {
                j7Q.s8u(27)
                var d7D = j7Q.a7D(15, 9, 8)
                S2Y = W5Y.left + W5Y.width + Y2Y - d7D
              }
            } else {
              if (W5Y.justifyRight) {
                S2Y = B2Y + W5Y.width
              }
            }
            M5Y.addText(V9D, w2Y, S2Y, A5Y, P2Y, null, k2Y)
          }
          if (r2Y >= 100) {
            console.log('drawYAxisPretty: assertion error. zz reached 100')
          }
          if (z2Y) {
            L9D = 'bo'
            L9D += 'rder'
            T2Y = Math.round(W5Y.bottom) + +'0.5'
            M5Y.moveTo(L9D, x2Y, W5Y.top)
            M5Y.lineTo('border', x2Y, T2Y)
            M5Y.draw(this.chart.context, 'border')
          }
        }
        this.plotYAxisGrid(c5Y)
      }
      this.runAppend(w9D, arguments)
    }
    n4Y.ChartEngine.prototype.drawHistogram = function(Q2Y, j2Y) {
      var c2Y,
        W2Y,
        E0Y,
        I2Y,
        B0Y,
        V2Y,
        p2Y,
        x0Y,
        m2Y,
        f2Y,
        d0Y,
        h2Y,
        z9D,
        G0Y,
        M2Y,
        z0Y,
        L2Y,
        w0Y,
        O2Y,
        A2Y,
        b2Y,
        t2Y,
        Q9D,
        y2Y,
        H2Y
      if (!j2Y || !j2Y.length) {
        return
      }
      c2Y = Q2Y.panel
      if (!c2Y) {
        c2Y = 'chart'
      }
      W2Y = this.panels[c2Y]
      if (!W2Y) {
        return
      }
      E0Y = Q2Y.yAxis ? Q2Y.yAxis : W2Y.yAxis
      I2Y = Q2Y.type
      if (I2Y == 'histogram') {
        I2Y = Q2Y.subtype
      }
      B0Y = this.chart.dataSegment
      V2Y = !{}
      this.getDefaultColor()
      for (p2Y = '0' | 0; p2Y < j2Y.length; p2Y++) {
        V2Y |= j2Y[p2Y].border_color_up && !n4Y.isTransparent(j2Y[p2Y].border_color_up)
        V2Y |= j2Y[p2Y].border_color_down && !n4Y.isTransparent(j2Y[p2Y].border_color_down)
      }
      if (!Q2Y.name) {
        Q2Y.name = 'Data'
      }
      x0Y = E0Y.multiplier
      if (!Q2Y.heightPercentage) {
        Q2Y.heightPercentage = 0.7
      }
      if (!Q2Y.widthFactor) {
        Q2Y.widthFactor = 0.8
      }
      m2Y = 0
      f2Y = 0
      for (var F0Y = 0; F0Y < this.chart.maxTicks; F0Y++) {
        d0Y = B0Y[F0Y]
        if (!d0Y) continue
        h2Y = 0
        for (p2Y = 0; p2Y < j2Y.length; p2Y++) {
          if (d0Y[j2Y[p2Y].field]) {
            z9D = 'st'
            z9D += 'ac'
            z9D += 'ked'
            if (Q2Y.subtype == z9D) {
              h2Y += d0Y[j2Y[p2Y].field]
            } else {
              h2Y = d0Y[j2Y[p2Y].field]
            }
            if (h2Y > m2Y) {
              m2Y = h2Y
            }
            if (h2Y < f2Y) {
              f2Y = h2Y
            }
          }
        }
      }
      G0Y = Math.floor(E0Y.top) + 0.5
      if (!Q2Y.bindToYAxis) {
        M2Y = Math.floor(E0Y.bottom) + ('0.5' - 0)
        if (m2Y === '0' - 0 && f2Y === 0) {
          this.watermark(c2Y, 'center', 'bottom', this.translateIf(Q2Y.name + ' Not Available'))
          return
        }
        x0Y = ((M2Y - G0Y) * Q2Y.heightPercentage) / (m2Y - f2Y)
      } else {
        M2Y = Math.floor(this.pixelFromPriceTransform(f2Y, W2Y, E0Y)) + +'0.5'
      }
      j7Q.z8u(3)
      z0Y = j7Q.t8u(0, '0.5')
      if (this.layout.candleWidth <= 1 || !V2Y) {
        z0Y = 0
      }
      this.startClip(c2Y)
      L2Y = this.chart.context
      w0Y = Math.max(0, ((1 - Q2Y.widthFactor) * this.layout.candleWidth) / 2)
      O2Y = {}
      A2Y = {}
      b2Y = this
      t2Y = 1
      for (p2Y = 0; p2Y < j2Y.length; p2Y++) {
        Q9D = 's'
        Q9D += 't'
        Q9D += 'ac'
        Q9D += 'ked'
        y2Y = j2Y[p2Y]
        t2Y = this.layout.candleWidth * Q2Y.widthFactor
        H2Y = 0
        if (I2Y == 'clustered') {
          H2Y = p2Y
          t2Y /= j2Y.length
        }
        v0Y(y2Y.field, y2Y.fill_color_up, y2Y.opacity_up, null, !!1, H2Y, t2Y)
        v0Y(y2Y.field, y2Y.fill_color_down, y2Y.opacity_down, null, null, H2Y, t2Y)
        if (this.layout.candleWidth >= '2' * 1 && V2Y) {
          v0Y(y2Y.field, y2Y.border_color_up, y2Y.opacity_up, !!{}, !![], H2Y, t2Y)
          v0Y(y2Y.field, y2Y.border_color_down, y2Y.opacity_down, !0, null, H2Y, t2Y)
        }
        if (I2Y == Q9D) {
          A2Y = n4Y.shallowClone(O2Y)
        }
      }
      j7Q.s8u(4)
      L2Y.globalAlpha = j7Q.t8u('1', 1)
      function v0Y(g0Y, J0Y, l0Y, n0Y, P0Y, e0Y, a0Y) {
        var N9D, k0Y, K0Y, U0Y, b9D, Y0Y, C0Y, N0Y, X0Y, s0Y, S0Y, r0Y, q0Y, R0Y
        N9D = 'a'
        N9D += 'uto'
        if (!l0Y) {
          l0Y = 1
        }
        if (n4Y.isIE8) {
          L2Y.globalAlpha = 0.5
        } else {
          L2Y.globalAlpha = l0Y
        }
        L2Y.beginPath()
        j7Q.z8u(0)
        k0Y = j7Q.t8u(M2Y, 0.5)
        K0Y = Math.floor(b2Y.pixelFromBar(0, W2Y.chart) - b2Y.layout.candleWidth / 2)
        U0Y = K0Y
        for (var Z0Y = 0; Z0Y < B0Y.length; Z0Y++) {
          b9D = 'clus'
          b9D += 'te'
          b9D += 're'
          b9D += 'd'
          Y0Y = A2Y[Z0Y]
          if (!Y0Y) {
            Y0Y = M2Y
          }
          if (Z0Y === '0' * 1) {
            k0Y = Y0Y
          }
          C0Y = B0Y[Z0Y]
          if (!C0Y || !C0Y[g0Y]) {
            k0Y = Y0Y
            U0Y += b2Y.layout.candleWidth
            continue
          }
          N0Y = (C0Y[g0Y] - f2Y) * x0Y
          if (isNaN(N0Y)) continue
          X0Y = b2Y.layout.candleWidth
          if (C0Y.candleWidth) {
            X0Y = C0Y.candleWidth
            if (Z0Y === 0) {
              K0Y = U0Y = Math.floor(b2Y.pixelFromBar(0, W2Y.chart) - C0Y.candleWidth / 2)
            }
          }
          s0Y = Math.min(Math.floor(Y0Y - N0Y) + +'0.5', Y0Y)
          if (P0Y) {
            if (C0Y.Close < C0Y.iqPrevClose) {
              k0Y = s0Y
              U0Y += X0Y
              continue
            }
          } else {
            if (C0Y.Close >= C0Y.iqPrevClose) {
              k0Y = s0Y
              U0Y += X0Y
              continue
            }
          }
          q0Y = X0Y / b2Y.layout.candleWidth
          j7Q.s8u(28)
          R0Y = j7Q.t8u(w0Y, a0Y, q0Y, U0Y, e0Y)
          S0Y = Math.round(R0Y) + (n0Y ? 0 : z0Y)
          r0Y = Math.round(R0Y + a0Y * q0Y) - (n0Y ? 0 : z0Y)
          if (r0Y - S0Y < 2) {
            j7Q.z8u(29)
            r0Y = j7Q.a7D('1', S0Y)
          }
          if (n0Y) {
            roundPixel = 0
          } else {
            roundPixel = 0.5
          }
          if (S0Y % 1 == roundPixel) {
            S0Y += +'0.5'
          }
          if (r0Y % 1 == roundPixel) {
            r0Y += 0.5
          }
          L2Y.moveTo(S0Y, Y0Y)
          if (M2Y == Y0Y) {
            L2Y.lineTo(r0Y, Y0Y)
          } else {
            L2Y.moveTo(r0Y, Y0Y)
            if (n0Y && !w0Y) {
              if (A2Y[Z0Y + 1]) {
                L2Y.moveTo(r0Y, Math.max(s0Y, Math.min(Y0Y, A2Y[Z0Y + 1])))
              }
            }
          }
          L2Y.lineTo(r0Y, s0Y)
          L2Y.lineTo(S0Y, s0Y)
          if (n0Y && e0Y) {
            if (O2Y[Z0Y] > s0Y || Z0Y === 0) {
              L2Y.lineTo(S0Y, Math.min(Y0Y, O2Y[Z0Y]))
            }
          } else if (n0Y && !w0Y && I2Y == b9D) {
            if (Z0Y > 0 && O2Y[Z0Y - 1] && O2Y[Z0Y - 1] > s0Y) {
              L2Y.lineTo(S0Y, Math.min(Y0Y, O2Y[Z0Y - 1]))
            }
          } else if (n0Y && !w0Y) {
            if (k0Y > s0Y || Z0Y === 0) {
              L2Y.lineTo(S0Y, Math.min(Y0Y, k0Y))
            }
          } else {
            L2Y.lineTo(S0Y, Y0Y)
          }
          k0Y = s0Y
          U0Y += X0Y
          if (I2Y != 'clustered' || n0Y) {
            O2Y[Z0Y] = s0Y
          }
        }
        if (!J0Y) {
          J0Y = N9D
        }
        if (n0Y) {
          L2Y.strokeStyle = J0Y == 'auto' ? b2Y.defaultColor : J0Y
          L2Y.stroke()
        } else {
          L2Y.fillStyle = J0Y == 'auto' ? b2Y.defaultColor : J0Y
          L2Y.fill()
        }
        L2Y.closePath()
      }
      this.endClip()
    }
    n4Y.ChartEngine.prototype.drawCandlesHighPerformance = function(L0Y, c0Y, E1i, y0Y, v1i) {
      var j0Y,
        m0Y,
        T0Y,
        O0Y,
        W0Y,
        i0Y,
        B1i,
        p0Y,
        b0Y,
        d1i,
        x1i,
        u0Y,
        h0Y,
        Q0Y,
        f0Y,
        o0Y,
        V0Y,
        M0Y,
        D0Y,
        w1i,
        z1i,
        A0Y,
        H0Y,
        t0Y,
        F1i
      j0Y = L0Y.chart
      m0Y = j0Y.dataSegment
      T0Y = this.chart.context
      O0Y = L0Y.yAxis.top
      W0Y = L0Y.yAxis.bottom
      b0Y = 0
      if (E1i && !n4Y.isTransparent(E1i)) {
        b0Y = 0.5
      }
      d1i = j0Y.dataSet.length - j0Y.scroll
      x1i = d1i + j0Y.maxTicks
      T0Y.beginPath()
      if (n4Y.isTransparent(c0Y)) {
        c0Y = this.containerColor
      }
      T0Y.fillStyle = c0Y
      u0Y = L0Y.yAxis
      h0Y = j0Y.tmpWidth / +'2'
      Q0Y = this.layout.candleWidth
      j7Q.s8u(6)
      var D7D = j7Q.t8u(20, 20)
      f0Y = L0Y.left - 0.5 * Q0Y + this.micropixels - D7D
      for (var I0Y = 0; I0Y <= m0Y.length; I0Y++) {
        j7Q.s8u(6)
        f0Y += j7Q.t8u(Q0Y, 2)
        Q0Y = this.layout.candleWidth
        j7Q.s8u(6)
        f0Y += j7Q.a7D(Q0Y, 2)
        o0Y = m0Y[I0Y]
        if (!o0Y) continue
        if (o0Y.projection) continue
        if (o0Y.candleWidth) {
          j7Q.s8u(30)
          var E7D = j7Q.t8u(13, 3, 16, 2)
          f0Y += (o0Y.candleWidth - Q0Y) / E7D
          Q0Y = o0Y.candleWidth
          if (this.layout.chartType == 'volume_candle') {
            j7Q.z8u(6)
            h0Y = j7Q.t8u(Q0Y, 2)
          }
        }
        if (!v1i && o0Y.Open == o0Y.Close) continue
        if (y0Y & n4Y.ChartEngine.CANDLEUP && o0Y.Open >= o0Y.Close) continue
        if (y0Y & n4Y.ChartEngine.CANDLEDOWN && o0Y.Open <= o0Y.Close) continue
        if (y0Y & n4Y.ChartEngine.CANDLEEVEN && o0Y.Open != o0Y.Close) continue
        if (y0Y & n4Y.ChartEngine.CLOSEUP && o0Y.Close <= o0Y.iqPrevClose) continue
        if (y0Y & n4Y.ChartEngine.CLOSEDOWN && o0Y.Close >= o0Y.iqPrevClose) continue
        if (y0Y & n4Y.ChartEngine.CLOSEEVEN && o0Y.Close != o0Y.iqPrevClose) continue
        if (o0Y.transform) {
          o0Y = o0Y.transform
        }
        V0Y = o0Y.Open
        M0Y = o0Y.Close
        D0Y = o0Y.cache
        j7Q.s8u(0)
        w1i = j7Q.t8u(d1i, I0Y)
        if (w1i < L0Y.cacheLeft || w1i > L0Y.cacheRight || !D0Y.open) {
          z1i = u0Y.semiLog ? this.pixelFromPrice(V0Y, L0Y) : (u0Y.high - V0Y) * u0Y.multiplier + u0Y.top
          A0Y = u0Y.semiLog ? this.pixelFromPrice(M0Y, L0Y) : (u0Y.high - M0Y) * u0Y.multiplier + u0Y.top
          i0Y = Math.floor(Math.min(z1i, A0Y)) + b0Y
          B1i = v1i ? u0Y.bottom : Math.max(z1i, A0Y)
          j7Q.z8u(3)
          p0Y = Math.floor(j7Q.a7D(i0Y, B1i))
          if (i0Y < O0Y) {
            if (i0Y + p0Y < O0Y) {
              D0Y.open = i0Y
              D0Y.close = i0Y
              continue
            }
            j7Q.s8u(3)
            p0Y -= j7Q.a7D(i0Y, O0Y)
            i0Y = O0Y
          }
          if (i0Y + p0Y > W0Y) {
            j7Q.s8u(31)
            p0Y -= j7Q.t8u(p0Y, i0Y, W0Y)
          }
          j7Q.s8u(5)
          p0Y = Math.max(p0Y, j7Q.t8u('2', 0))
          D0Y.open = i0Y
          D0Y.close = D0Y.open + p0Y
        }
        if (D0Y.open >= W0Y) continue
        if (D0Y.close <= O0Y) continue
        H0Y = Math.floor(f0Y) + 0.5
        t0Y = Math.floor(H0Y - h0Y) + b0Y
        F1i = Math.round(H0Y + h0Y) - b0Y
        if (D0Y.open != D0Y.close) {
          T0Y.moveTo(t0Y, D0Y.open)
          T0Y.lineTo(F1i, D0Y.open)
          T0Y.lineTo(F1i, D0Y.close)
          T0Y.lineTo(t0Y, D0Y.close)
          T0Y.lineTo(t0Y, D0Y.open)
        }
      }
      T0Y.fill()
      if (b0Y) {
        j7Q.z8u(5)
        T0Y.lineWidth = j7Q.a7D('1', 0)
        T0Y.strokeStyle = E1i
        T0Y.stroke()
      }
    }
    n4Y.ChartEngine.prototype.drawShadowsHighPerformance = function(C1i, L1i, r1i) {
      var X1i,
        P1i,
        s1i,
        U1i,
        K1i,
        Y1i,
        T1i,
        p1i,
        e1i,
        u1i,
        Z1i,
        n1i,
        q1i,
        G1i,
        l1i,
        D1i,
        S1i,
        a1i,
        k1i,
        N1i,
        g1i,
        i1i,
        o1i,
        J1i
      X1i = C1i.chart
      P1i = X1i.dataSegment
      s1i = this.chart.context
      s1i.lineWidth = 1
      U1i = C1i.yAxis.top
      K1i = C1i.yAxis.bottom
      e1i = X1i.dataSet.length - X1i.scroll
      u1i = e1i + X1i.maxTicks
      s1i.beginPath()
      Z1i = C1i.yAxis
      n1i = this.layout.candleWidth
      j7Q.s8u(6)
      var s7D = j7Q.a7D(13, 13)
      q1i = C1i.left - 0.5 * n1i + this.micropixels - s7D
      for (var R1i = 0; R1i <= P1i.length; R1i++) {
        j7Q.z8u(6)
        q1i += j7Q.a7D(n1i, 2)
        n1i = this.layout.candleWidth
        j7Q.z8u(6)
        q1i += j7Q.a7D(n1i, 2)
        G1i = P1i[R1i]
        if (!G1i) continue
        if (G1i.projection) continue
        if (G1i.candleWidth) {
          q1i += (G1i.candleWidth - n1i) / 2
          n1i = G1i.candleWidth
        }
        if (r1i) {
          if (r1i & n4Y.ChartEngine.CANDLEUP && G1i.Open >= G1i.Close) continue
          else if (r1i & n4Y.ChartEngine.CANDLEDOWN && G1i.Open <= G1i.Close) continue
          else if (r1i & n4Y.ChartEngine.CANDLEEVEN && G1i.Open != G1i.Close) continue
          else if (r1i & n4Y.ChartEngine.CLOSEUP && G1i.Close <= G1i.iqPrevClose) continue
          else if (r1i & n4Y.ChartEngine.CLOSEDOWN && G1i.Close >= G1i.iqPrevClose) continue
          else if (r1i & n4Y.ChartEngine.CLOSEEVEN && G1i.Close != G1i.iqPrevClose) continue
        }
        if (G1i.transform) {
          G1i = G1i.transform
        }
        l1i = G1i.Open
        D1i = G1i.Close
        S1i = G1i.cache
        j7Q.z8u(0)
        a1i = j7Q.a7D(e1i, R1i)
        if (a1i < C1i.cacheLeft || a1i > C1i.cacheRight || !S1i.top) {
          Y1i = Z1i.semiLog ? this.pixelFromPrice(G1i.High, C1i) : (Z1i.high - G1i.High) * Z1i.multiplier + Z1i.top
          T1i = Z1i.semiLog ? this.pixelFromPrice(G1i.Low, C1i) : (Z1i.high - G1i.Low) * Z1i.multiplier + Z1i.top
          j7Q.z8u(3)
          k1i = j7Q.a7D(Y1i, T1i)
          if (Y1i < U1i) {
            if (Y1i + k1i < U1i) {
              S1i.top = Y1i
              S1i.bottom = Y1i
              continue
            }
            j7Q.z8u(3)
            k1i -= j7Q.a7D(Y1i, U1i)
            Y1i = U1i
          }
          if (Y1i + k1i > K1i) {
            j7Q.s8u(31)
            k1i -= j7Q.a7D(k1i, Y1i, K1i)
          }
          S1i.top = Y1i
          S1i.bottom = S1i.top + k1i
        }
        if (S1i.top >= K1i) continue
        if (S1i.bottom <= U1i) continue
        N1i = Math.floor(q1i) + '0.5' * 1
        s1i.moveTo(N1i, S1i.top)
        s1i.lineTo(N1i, S1i.bottom)
        if (l1i == D1i) {
          g1i = this.offset
          if (this.layout.chartType == 'volume_candle') {
            j7Q.z8u(6)
            g1i = j7Q.t8u(n1i, 2)
          }
          j7Q.s8u(3)
          i1i = j7Q.a7D(g1i, N1i)
          j7Q.s8u(0)
          o1i = j7Q.t8u(N1i, g1i)
          J1i =
            Math.floor(Z1i.semiLog ? this.pixelFromPrice(l1i, C1i) : (Z1i.high - l1i) * Z1i.multiplier + Z1i.top) + 0.5
          if (J1i <= K1i && J1i >= U1i) {
            s1i.moveTo(i1i, J1i)
            s1i.lineTo(o1i, J1i)
          }
        }
      }
      this.canvasColor(L1i)
      s1i.stroke()
    }
    n4Y.ChartEngine.prototype.drawBarChartHighPerformance = function(I1i, x8i, H1i) {
      var h1i, V1i, b1i, m1i, f1i, M1i, O1i, B8i, t1i, z8i, G8i, y1i, d8i, E8i, w8i, j1i, v8i, A1i, Q1i, F8i, W1i
      h1i = I1i.chart
      V1i = h1i.dataSegment
      b1i = h1i.context
      m1i = this.canvasStyle(x8i)
      if (m1i.width && parseInt(m1i.width, '10' | 0) <= 25) {
        b1i.lineWidth = Math.max(1, n4Y.stripPX(m1i.width))
      } else {
        b1i.lineWidth = 1
      }
      b1i.beginPath()
      f1i = I1i.yAxis.top
      M1i = I1i.yAxis.bottom
      z8i = h1i.dataSet.length - h1i.scroll
      G8i = z8i + h1i.maxTicks
      y1i = I1i.yAxis
      j7Q.s8u(32)
      var o7D = j7Q.t8u(13, 6, 9, 73, 14)
      d8i = I1i.left - 0.5 * this.layout.candleWidth + this.micropixels - o7D
      E8i = h1i.tmpWidth / 2
      j7Q.s8u(6)
      var k7D = j7Q.a7D(15, 15)
      w8i = b1i.lineWidth / ('2' * k7D)
      for (var c1i = 0; c1i <= V1i.length; c1i++) {
        d8i += this.layout.candleWidth
        j1i = V1i[c1i]
        if (!j1i) continue
        if (j1i.projection) break
        if (H1i) {
          if (H1i & n4Y.ChartEngine.CLOSEUP && j1i.Close <= j1i.iqPrevClose) continue
          else if (H1i & n4Y.ChartEngine.CLOSEDOWN && j1i.Close >= j1i.iqPrevClose) continue
          else if (H1i & n4Y.ChartEngine.CLOSEEVEN && j1i.Close != j1i.iqPrevClose) continue
        }
        if (j1i.transform) {
          j1i = j1i.transform
        }
        v8i = j1i.Open
        A1i = j1i.Close
        Q1i = j1i.cache
        j7Q.z8u(0)
        F8i = j7Q.a7D(z8i, c1i)
        if (F8i < I1i.cacheLeft || F8i > I1i.cacheRight || !Q1i.top) {
          O1i = y1i.semiLog ? this.pixelFromPrice(j1i.High, I1i) : (y1i.high - j1i.High) * y1i.multiplier + y1i.top
          B8i = y1i.semiLog ? this.pixelFromPrice(j1i.Low, I1i) : (y1i.high - j1i.Low) * y1i.multiplier + y1i.top
          j7Q.z8u(3)
          t1i = j7Q.a7D(O1i, B8i)
          Q1i.open = y1i.semiLog ? this.pixelFromPrice(v8i, I1i) : (y1i.high - v8i) * y1i.multiplier + y1i.top
          Q1i.close = y1i.semiLog ? this.pixelFromPrice(A1i, I1i) : (y1i.high - A1i) * y1i.multiplier + y1i.top
          if (O1i < f1i) {
            if (O1i + t1i < f1i) {
              Q1i.top = O1i
              Q1i.bottom = O1i
              continue
            }
            j7Q.z8u(3)
            t1i -= j7Q.a7D(O1i, f1i)
            O1i = f1i
          }
          if (O1i + t1i > M1i) {
            j7Q.s8u(31)
            t1i -= j7Q.a7D(t1i, O1i, M1i)
          }
          Q1i.top = O1i
          j7Q.z8u(0)
          Q1i.bottom = j7Q.t8u(O1i, t1i)
        }
        W1i = Math.floor(d8i) + 0.5
        if (Q1i.top < M1i && Q1i.bottom > f1i) {
          b1i.moveTo(W1i, Q1i.top - w8i)
          b1i.lineTo(W1i, Q1i.bottom + w8i)
        }
        if (Q1i.open > f1i && Q1i.open < M1i) {
          b1i.moveTo(W1i, Q1i.open)
          j7Q.z8u(3)
          b1i.lineTo(j7Q.t8u(E8i, W1i), Q1i.open)
        }
        if (Q1i.close > f1i && Q1i.close < M1i) {
          b1i.moveTo(W1i, Q1i.close)
          j7Q.z8u(0)
          b1i.lineTo(j7Q.a7D(W1i, E8i), Q1i.close)
        }
      }
      this.canvasColor(x8i)
      b1i.stroke()
      b1i.closePath()
      b1i.lineWidth = 1
    }
    n4Y.ChartEngine.prototype.plotLineChart = function(n8i, g8i, X8i, s8i, f8i) {
      var O8i,
        T8i,
        Q8i,
        N8i,
        l8i,
        p8i,
        Y8i,
        L8i,
        r8i,
        W8i,
        h8i,
        P8i,
        e8i,
        I8i,
        R8i,
        U8i,
        a8i,
        C8i,
        Z8i,
        i8i,
        b8i,
        S8i,
        J8i,
        K8i,
        o8i,
        q8i,
        j8i,
        D8i,
        q9D,
        i9D,
        y8i,
        u8i,
        t8i
      O8i = !!0
      T8i = !'1'
      Q8i = ![]
      N8i = 0
      l8i = []
      if (s8i) {
        O8i = s8i.skipProjections
        T8i = s8i.skipTransform
        Q8i = s8i.noSlopes
        N8i = s8i.tension
      }
      p8i = n8i.chart
      Y8i = this.chart.context
      L8i = !''
      r8i = n8i.yAxis
      W8i = r8i.top
      h8i = r8i.bottom
      P8i = p8i.dataSet.length - p8i.scroll
      e8i = null
      I8i = {}
      R8i = [0, 0]
      U8i = this.layout.candleWidth
      j7Q.z8u(33)
      var m7D = j7Q.a7D(11, 11)
      a8i = n8i.left - (s8i.noSlopes ? m7D : '0.5' - 0) * U8i + this.micropixels - +'1'
      this.startClip(n8i.name)
      Y8i.beginPath()
      for (var k8i = 0; k8i <= g8i.length; k8i++) {
        j7Q.s8u(6)
        a8i += j7Q.t8u(U8i, 2)
        if (s8i.noSlopes) {
          j7Q.s8u(6)
          a8i += j7Q.t8u(U8i, 2)
        }
        U8i = this.layout.candleWidth
        if (!s8i.noSlopes) {
          j7Q.s8u(6)
          a8i += j7Q.t8u(U8i, 2)
        }
        C8i = g8i[k8i]
        if (!C8i) continue
        if (O8i && C8i.projection) break
        if (C8i.candleWidth) {
          if (!s8i.noSlopes) {
            a8i += (C8i.candleWidth - U8i) / 2
          }
          U8i = C8i.candleWidth
        }
        if (!T8i && C8i.transform) {
          C8i = C8i.transform
        }
        Z8i = a8i
        i8i = C8i.cache
        j7Q.s8u(0)
        b8i = j7Q.t8u(P8i, k8i)
        if (!C8i[X8i] && C8i[X8i] !== +'0') continue
        if (b8i < n8i.cacheLeft || b8i > n8i.cacheRight || !i8i[X8i]) {
          i8i[X8i] = r8i.semiLog ? this.pixelFromPrice(C8i[X8i], n8i) : (r8i.high - C8i[X8i]) * r8i.multiplier + r8i.top
        }
        if (Z8i <= n8i.right) {
          e8i = C8i
        }
        if (k8i == g8i.length - 1) {
          if (this.extendLastTick) {
            j7Q.s8u(6)
            Z8i += j7Q.a7D(U8i, 2)
          }
          if (s8i.lastTickOffset) {
            Z8i += s8i.lastTickOffset
          }
        }
        S8i = i8i[X8i]
        J8i = null
        if (f8i) {
          K8i = f8i(this, C8i)
          if (!K8i) continue
          if (typeof K8i == 'object') {
            J8i = K8i.pattern
            K8i = K8i.color
          }
          if (Y8i.strokeStyle != K8i) {
            if (!L8i) {
              Y8i.stroke()
              Y8i.beginPath()
              Y8i.moveTo(R8i[+'0'], R8i[1])
            }
            Y8i.strokeStyle = K8i
            I8i[K8i] = 1
          }
        }
        if (L8i) {
          L8i = !'1'
          if (Q8i || P8i <= 0) {
            Y8i.moveTo(k8i ? Z8i : 0, S8i)
            if (N8i) {
              l8i.push(Z8i, S8i)
            } else {
              if (J8i) {
                Y8i.dashedLineTo(0, S8i, Z8i, S8i, J8i)
              } else {
                Y8i.lineTo(Z8i, S8i)
              }
            }
          } else if (P8i > 0) {
            o8i = p8i.dataSet[P8i]
            if (!T8i && o8i.transform) {
              o8i = o8i.transform
            }
            q8i = o8i[X8i]
            if (!q8i || isNaN(q8i)) {
              Y8i.moveTo(k8i ? Z8i : 0, S8i)
              if (N8i) {
                l8i.push(Z8i, S8i)
              }
            } else {
              q8i = r8i.semiLog ? this.pixelFromPrice(q8i, n8i) : (r8i.high - q8i) * r8i.multiplier + r8i.top
              j7Q.s8u(3)
              j8i = j7Q.t8u(U8i, Z8i)
              if (J8i) {
                Y8i.dashedLineTo(j8i, q8i, Z8i, S8i, J8i)
              } else {
                Y8i.moveTo(j8i, q8i)
                if (N8i) {
                  l8i.push(j8i, q8i, Z8i, S8i)
                } else {
                  Y8i.lineTo(Z8i, S8i)
                }
              }
            }
          }
        } else {
          if (Q8i) {
            j7Q.z8u(3)
            D8i = g8i[j7Q.a7D(1, k8i)]
            if (!D8i) continue
            if (!T8i && D8i.transform) {
              D8i = D8i.transform
            }
            if (k8i) {
              if (J8i) {
                Y8i.dashedLineTo(R8i[0], R8i[+'1'], Z8i, R8i[1], J8i)
              } else {
                Y8i.lineTo(Z8i, R8i['1' | 0])
              }
              Y8i.moveTo(Z8i, S8i)
            }
            if (k8i == g8i.length - 1) {
              if (J8i) {
                j7Q.s8u(0)
                Y8i.dashedLineTo(Z8i, S8i, j7Q.t8u(Z8i, U8i), S8i, J8i)
              } else {
                j7Q.z8u(0)
                Y8i.lineTo(j7Q.a7D(Z8i, U8i), S8i)
              }
            }
          } else {
            if (J8i) {
              Y8i.dashedLineTo(R8i[0], R8i[1], Z8i, S8i, J8i)
            } else {
              if (N8i) {
                l8i.push(Z8i, S8i)
              } else {
                Y8i.lineTo(Z8i, S8i)
              }
            }
          }
        }
        R8i = [Z8i, S8i]
        if (k8i === g8i.length - 1 && N8i) {
          l8i.push(Z8i, S8i)
          k4Y(l8i, N8i, Y8i)
        }
      }
      Y8i.stroke()
      this.endClip()
      if (s8i.label && e8i) {
        q9D = 'noo'
        q9D += 'p'
        i9D = 'n'
        i9D += 'oo'
        i9D += 'p'
        if (r8i.priceFormatter) {
          y8i = r8i.priceFormatter(this, n8i, e8i[X8i], s8i.labelDecimalPlaces)
        } else {
          y8i = this.formatYAxisPrice(e8i[X8i], n8i, s8i.labelDecimalPlaces)
        }
        u8i = this.yaxisLabelStyle
        if (n8i.yAxis.yaxisLabelStyle) {
          u8i = n8i.yAxis.yaxisLabelStyle
        }
        t8i = u8i == i9D ? Y8i.strokeStyle : null
        this.yAxisLabels.push({
          src: 'plot',
          args: [n8i, y8i, e8i.cache[X8i], u8i == q9D ? '#FFFFFF' : Y8i.strokeStyle, t8i],
        })
      }
      return I8i
    }
    n4Y.ChartEngine.prototype.plotMountainChart = function(A8i, k7i, E7i, v7i) {
      var R7i,
        J7i,
        G7i,
        F7i,
        B7i,
        n7i,
        M8i,
        U7i,
        C7i,
        Y7i,
        Z7i,
        x0D,
        H0D,
        Z0D,
        m8i,
        z7i,
        V8i,
        c8i,
        s7i,
        H8i,
        r7i,
        X7i,
        d7i,
        S7i,
        x7i
      R7i = ![]
      J7i = !1
      G7i = ![]
      F7i = 0
      B7i = []
      if (v7i) {
        R7i = v7i.skipProjections
        J7i = v7i.skipTransform
        G7i = v7i.reverse
        F7i = v7i.tension
      }
      n7i = A8i.chart
      M8i = this.chart.context
      U7i = !!'1'
      C7i = A8i.yAxis.top
      Y7i = A8i.yAxis.bottom
      this.startClip(A8i.name)
      M8i.beginPath()
      Z7i = n7i.dataSet.length - n7i.scroll
      x0D = -467515557
      H0D = -929577773
      Z0D = +'2'
      for (var X0D = '1' | 0; j7Q.X7C(X0D.toString(), X0D.toString().length, 16493) !== x0D; X0D++) {
        m8i = null
        z7i = null
        Z0D += +'2'
      }
      if (j7Q.c7C(Z0D.toString(), Z0D.toString().length, '83759' * 1) !== H0D) {
        m8i = 1
        z7i = +'1'
      }
      V8i = A8i.yAxis
      c8i = 0
      s7i = this.layout.candleWidth
      for (var w7i = +'0'; w7i <= k7i.length; w7i++) {
        H8i = k7i[w7i]
        if (!H8i) continue
        if (R7i && H8i.projection) break
        if (!J7i && H8i.transform) {
          H8i = H8i.transform
        }
        r7i = H8i.cache
        j7Q.s8u(0)
        X7i = j7Q.t8u(Z7i, w7i)
        if (X7i < A8i.cacheLeft || X7i > A8i.cacheRight || !r7i[E7i]) {
          if (!H8i[E7i] && H8i[E7i] !== 0) continue
          r7i[E7i] = V8i.semiLog ? this.pixelFromPrice(H8i[E7i], A8i) : (V8i.high - H8i[E7i]) * V8i.multiplier + V8i.top
        }
        j7Q.z8u(34)
        var S7D = j7Q.t8u(15, 14, 11, 2310)
        c8i = A8i.left + (w7i + 0.5) * s7i + this.micropixels - S7D
        if (w7i == k7i.length - 1) {
          if (this.extendLastTick) {
            j7Q.z8u(6)
            c8i += j7Q.t8u(s7i, 2)
          }
          if (v7i.lastTickOffset) {
            c8i += v7i.lastTickOffset
          }
        }
        if (m8i === null) {
          m8i = Z7i >= 0 ? 0 : c8i
        }
        d7i = r7i[E7i]
        if (z7i === null) {
          z7i = d7i
        }
        if (U7i) {
          U7i = !!''
          if (Z7i <= 0) {
            M8i.moveTo(m8i, d7i)
            if (F7i) {
              B7i.push(m8i, d7i)
            }
          } else {
            S7i = n7i.dataSet[Z7i]
            if (S7i.transform) {
              S7i = S7i.transform
            }
            x7i = S7i[E7i]
            x7i = V8i.semiLog ? this.pixelFromPrice(x7i, A8i) : (V8i.high - x7i) * V8i.multiplier + V8i.top
            j7Q.s8u(3)
            m8i = j7Q.t8u(s7i, c8i)
            M8i.moveTo(m8i, x7i)
            if (F7i) {
              B7i.push(m8i, x7i, c8i, d7i)
            } else {
              M8i.lineTo(c8i, d7i)
            }
          }
        } else {
          if (F7i) {
            B7i.push(c8i, d7i)
          } else {
            M8i.lineTo(c8i, d7i)
          }
        }
        if (w7i === k7i.length - +'1' && F7i) {
          B7i.push(c8i, d7i)
          k4Y(B7i, F7i, M8i)
        }
      }
      M8i.lineTo(c8i, G7i ? C7i : Y7i)
      M8i.lineTo(m8i, G7i ? C7i : Y7i)
      if (G7i) {
        if (z7i < C7i) {
          z7i = C7i
        }
      } else {
        if (z7i > Y7i) {
          z7i = Y7i
        }
      }
      M8i.lineTo(m8i, z7i)
      M8i.fill()
      M8i.closePath()
      this.endClip()
    }
    n4Y.ChartEngine.prototype.drawMountainChart = function(N7i, u7i, j7i) {
      var q7i, K7i, o7i, L7i, P7i, i7i, a7i, g7i, D7i, T7i, e7i, Q7i, l7i, p7i, B9D, b2D, N2D, Q2D
      q7i = this.chart.context
      if (!u7i) {
        u7i = 'stx_mountain_chart'
      }
      K7i = this.canvasStyle(u7i)
      if (K7i.width && parseInt(K7i.width, 10) <= 25) {
        j7Q.z8u(4)
        q7i.lineWidth = Math.max(j7Q.a7D('1', 1), n4Y.stripPX(K7i.width))
      } else {
        q7i.lineWidth = 1
      }
      o7i = this.pixelFromPrice(N7i.chart.highValue, N7i)
      if (isNaN(o7i)) {
        o7i = 0
      }
      L7i = K7i.backgroundColor
      P7i = K7i.color
      if (P7i && !n4Y.isTransparent(P7i)) {
        i7i = q7i.createLinearGradient(0, o7i, 0, N7i.yAxis.bottom)
        i7i.addColorStop(0, L7i)
        i7i.addColorStop(1, P7i)
        q7i.fillStyle = i7i
      } else {
        q7i.fillStyle = L7i
      }
      a7i = { skipProjections: !'' }
      g7i = N7i.chart
      D7i = g7i.dataSegment
      if (g7i.tension) {
        a7i.tension = g7i.tension
      }
      if (g7i.lastTickOffset) {
        a7i.lastTickOffset = g7i.lastTickOffset
      }
      T7i = parseInt(K7i.padding, 10)
      e7i = K7i.borderTopColor
      Q7i = null
      if (e7i && !n4Y.isTransparent(e7i)) {
        if (T7i && !n4Y.isIE8) {
          l7i = this.scratchContext
          if (!l7i) {
            p7i = q7i.canvas.cloneNode(!![])
            l7i = this.scratchContext = p7i.getContext('2d')
            l7i.canvas = p7i
          }
          l7i.canvas.height = q7i.canvas.height
          l7i.canvas.width = q7i.canvas.width
          l7i.drawImage(q7i.canvas, +'0', 0)
          q7i.clearRect(0, 0, q7i.canvas.width, q7i.canvas.height)
        }
      }
      this.plotMountainChart(N7i, D7i, 'Close', a7i)
      if (e7i && !n4Y.isTransparent(e7i)) {
        if (T7i && !n4Y.isIE8) {
          B9D = 'des'
          B9D += 'tinat'
          B9D += 'ion-'
          B9D += 'out'
          q7i.save()
          b2D = -1028883079
          N2D = -184046793
          Q2D = 2
          for (var q2D = 1; j7Q.c7C(q2D.toString(), q2D.toString().length, 29844) !== b2D; q2D++) {
            j7Q.s8u(4)
            q7i.lineWidth += j7Q.t8u(2, T7i)
            Q2D += 2
          }
          if (j7Q.c7C(Q2D.toString(), Q2D.toString().length, 39073) !== N2D) {
            j7Q.z8u(3)
            q7i.lineWidth %= j7Q.a7D(T7i, 7)
          }
          q7i.globalCompositeOperation = B9D
          this.plotLineChart(N7i, D7i, 'Close', a7i)
          q7i.globalCompositeOperation = 'destination-over'
          q7i.scale(('1' * 1) / this.adjustedDisplayPixelRatio, 1 / this.adjustedDisplayPixelRatio)
          q7i.drawImage(this.scratchContext.canvas, 0, 0)
          q7i.restore()
        }
        q7i.strokeStyle = e7i
        Q7i = this.plotLineChart(N7i, D7i, 'Close', a7i, j7i)
      }
      q7i.lineWidth = 1
      return Q7i
    }
    n4Y[G8u][V8u][k8u] = function(Z6i, G6i) {
      j7Q.U8y = function(X8y) {
        if (j7Q) return j7Q.d3y(X8y)
      }
      j7Q.G8y = function(W8y) {
        if (j7Q) return j7Q.B3y(W8y)
      }
      j7Q.P9y = function(r9y) {
        if (j7Q && r9y) return j7Q.d3y(r9y)
      }
      j7Q.z9y = function(a0y) {
        if (j7Q) return j7Q.d3y(a0y)
      }
      j7Q.o1y = function(N1y) {
        if (j7Q && N1y) return j7Q.d3y(N1y)
      }
      j7Q.g1y = function(K1y) {
        if (j7Q && K1y) return j7Q.d3y(K1y)
      }
      j7Q.v3y = function(L3y) {
        if (j7Q) return j7Q.B3y(L3y)
      }
      var s0y = -(j7Q.v3y('49b3') ? 1755980039 : 3431176443),
        W0y = j7Q.g1y('fc9d') ? 635005350 : 135766907,
        z0y = j7Q.o1y('3889') ? 9250173929 : 1368175342,
        U0y = j7Q.F1y('e641') ? 842927364 : 996547432,
        x0y = j7Q.l1y('b45d') ? 2088668979 : 1822017065,
        O0y = j7Q.c1y('f2c9') ? 828259574 : 714879939
      if (
        j7Q.v1M(j7Q.z9y('48fa') ? 0 : 4, 248234) !== s0y &&
        j7Q.I1M(0, j7Q.P9y('821c') ? 553292 : 534635) !== W0y &&
        j7Q.I1M(29, 117014) !== z0y &&
        j7Q.I1M(0, j7Q.p9y('c32a') ? 273882 : 696320) !== U0y &&
        j7Q.v1M(j7Q.f9y('c7bc') ? 17 : 44, 374784) !== x0y &&
        j7Q.I1M(0, j7Q.u9y('f9b9') ? 415251 : 968959) !== O0y &&
        !O7LL.Q0y()
      ) {
        var s6u = 'userLevel'
        var t6u = 'crossX'
        var a9u = 'clientHeight'
        var u9u = j7Q.i8y('68c6') ? '' : '1'
        var Q9u = j7Q.t8y('d79d') ? '' : 'yTolerance'
        var Z9u = 'clientHeight'
        var d9u = j7Q.G8y('12b8') ? '' : 'move'
        var h9u = j7Q.U8y('42d4') ? 'allowZoom' : ''
        var j9u = 'measure'
        var E9u = '1042281860'
        var w9u = 'z'
        var e9u = 'ipadMaxTicks'
        var q9u = 'clearCanvas'
        var O9u = '1042281860'
        var n9u = 'scroll'
        var x9u = 'grabbingPanel'
        var Y9u = 'currentVectorParameters'
        var B9u = 'oveinner'
        var y9u = 'canvas'
        var k9u = 'crosshairY'
        var V9u = 'grabbingScreen'
        var G9u = 'crossX'
        var L9u = 'userLevel'
        var J9u = 'oveinner'
        var p9u = 'crossX'
        var v9u = 'mou'
        var P9u = 'clientWidth'
        var R9u = 'move'
        var m9u = 'adjustIfNecessary'
        var N9u = 'oveinner'
        var o9u = 'pixelFromPriceTransform'
        var g9u = 'grabStartX'
        var T9u = '16955'
        var c9u = '0.499'
        var K9u = 'preferences'
        var M9u = 'oveinner'
        var S9u = 'grabbingPanel'
        var W9u = 'clientHeight'
        var l9u = '186423986'
        var r9u = 'resizeChart'
        var U9u = '0.499'
        var f9u = 'crossX'
        var b9u = 'tempCanvas'
        var H9u = 'lastDraw'
        var A9u = 'bottom'
        var i9u = 'c7C'
        var D9u = 'minimumCandleWidth'
        var C9u = 'clientHeight'
        var F9u = 'whichYAxis'
        var I9u = 'isIOS7or8'
        var X9u = 'grabbingScreen'
        var z9u = 'tempCanvas'
        var s9u = 1
        var t9u = 'currentVectorParameters'
        var a5u = 'devicePixelRatio'
        var u5u = 'currentPanel'
        var Q5u = '186423986'
        var Z5u = 'pixelFromPriceTransform'
        var d5u = 'pixelFromPriceTransform'
        var h5u = 'userLevel'
        var j5u = 5745
        var E5u = 'clientWidth'
        var w5u = 'length'
        var e5u = 967
        var q5u = 264
        var O5u = 400
        var n5u = 'zoom-y'
        var x5u = 'minimumCandleWidth'
        var Y5u = 'anyHighlighted'
        var B5u = 'clientHeight'
        var y5u = 'canvasHeight'
        var k5u = 'series'
        var V5u = 'oom-y'
        var G5u = 'backOutY'
        var L5u = 'hasDragged'
        var J5u = 'mou'
        var p5u = '1'
        var v5u = 'oveinner'
        var P5u = 'abs'
        var R5u = 'resizeChart'
        var m5u = 'clientWidth'
        var N5u = 'bottom'
        var o5u = '186423986'
        var g5u = 'grabbingScreen'
        var T5u = 'lastDraw'
        var c5u = 'mous'
        var K5u = 'valueFromPixelUntransform'
        var M5u = 'clientHeight'
        var S5u = 'userLevel'
        var W5u = 'overYAxis'
        var l5u = 'oveinner'
        var r5u = 'lastDraw'
        var U5u = 'currentVectorParameters'
        var f5u = 'grabbingPanel'
        var b5u = 'abs'
        var H5u = 'oveinner'
        var A5u = 'resizeChart'
        var i5u = 'top'
        var D5u = 'mou'
        var C5u = 'adjustIfNecessary'
        var F5u = 'cy'
        var I5u = 'scroll'
        var X5u = 'crosshairValue'
        var z5u = 'hasDragged'
        var s5u = 'runPrepend'
        var t5u = 'userLevel'
        var a2u = 'crossYActualPos'
        var u2u = 'crossX'
        var Q2u = 'clientHeight'
        var Z2u = 'top'
        var d2u = 'xAxisAsFooter'
        var h2u = 'currentPanel'
        var j2u = '1'
        var E2u = 'cx'
        var w2u = 'resizeChart'
        var e2u = 'tempCanvas'
        var q2u = 'userLevel'
        var O2u = 'mous'
        var n2u = 'insideChart'
        var x2u = 'resizeChart'
        var Y2u = 'grabbingScreen'
        var B2u = '1'
        var y2u = 'top'
        var k2u = 'adjustIfNecessary'
        var V2u = 'oveinner'
        var G2u = 'tempCanvas'
        var L2u = ''
        var J2u = '1'
        var p2u = 'oveinner'
        var v2u = 'clientWidth'
        var P2u = 'currentVectorParameters'
        var R2u = 'tickFromPixel'
        var m2u = 'hasDragged'
        var N2u = 'currentVectorParameters'
        var o2u = 'oveinner'
        var g2u = 'oveinner'
        var T2u = 'oveinner'
        var c2u = 'userLevel'
        var K2u = 'crosshairX'
        var M2u = 'oveinner'
        var S2u = 'canvas'
        var W2u = 'grabbingPanel'
        var l2u = 'oveinner'
        var r2u = 'clientWidth'
        var U2u = 'canvas'
        var f2u = '1042281860'
        var b2u = 'er'
        var H2u = 'crosshairX'
        var A2u = 'oveinner'
        var i2u = 'chart'
        var D2u = 'scroll'
        var C2u = 'mou'
        var F2u = 'isAndroid'
        var I2u = 'currentVectorParameters'
        var X2u = 'canvas'
        var z2u = 'grabbingScreen'
        var s2u = 'pixelFromPriceTransform'
        var t2u = 'hasDragged'
        var a8u = 'userLevel'
        var u8u = 'container'
        var Q8u = 'tempCanvas'
        var Z8u = 'resizeChart'
        var d8u = 'tempCanvas'
        var h8u = 'grabbingPanel'
        var j8u = 'canvas'
        var E8u = 'oveinner'
        var w8u = 'oveinner'
        var e8u = 'oveinner'
        var q8u = 'oveinner'
        var O8u = 'oveinner'
        var n8u = 'grabbingScreen'
        var x8u = 'canvas'
        var Y8u = 'oveinner'
        var B8u = 'crosshairX'
        var y8u = '1'
        var L8u = 4221545290
        var J8u = 1843764670
        var p8u = 9366150246
        var v8u = 3953573587
        var P8u = 415599297
        var R8u = 862820937
        var m8u = 21907297
        var N8u = 10089
        var o8u = 39141
        var g8u = 5850
        var T8u = 5923
        var c8u = 23662
        var K8u = 65250
        var M8u = 96022
        var S8u = 74885
        var W8u = 8618
        var l8u = 721
        var r8u = 87
        var U8u = 40
        var f8u = 5
        var b8u = 75
        var H8u = 6
        var A8u = 5
        var i8u = 6
        var D8u = 9
        var C8u = 2
        var F8u = 8
        var I8u = 9
        var X8u = 2
        var h9D,
          n9D,
          f7i,
          d6i,
          A7i,
          z6i,
          y7i,
          E6i,
          m7i,
          c0D,
          l0D,
          G0D,
          c7i,
          t7i,
          h7i,
          W7i,
          e9D,
          R9D,
          V7i,
          O7i,
          H7i,
          M7i,
          w6i,
          v6i,
          B6i,
          g0D,
          t0D,
          Y0D,
          x6i,
          I7i,
          m0D,
          u0D,
          S0D,
          g7C,
          t7C,
          Y7C,
          r9D,
          T0D,
          j2D,
          x2D,
          F6i,
          b7i
        h9D = y8u
        h9D *= B8u
        h9D %= Y8u
        n9D = x8u
        n9D -= n8u
        n9D %= O8u
        n9D %= q8u
        if (+this[e8u][w8u]) {
          return
        }
        if (-n4Y[E8u] || +n4Y[j8u]) {
          if (
            this[e8u][w8u][h8u] == Math[d8u](this[Z8u] + this[e8u][Q8u][u8u]) &&
            this[e8u][w8u][a8u] === Math[d8u](this[Z8u] % this[e8u][Q8u][t2u])
          ) {
            this[s2u]()
            return
          }
        }
        if (this[z2u](n9D, arguments)) {
          return
        }
        d6i = this[Q8u][X2u]()
        this[I2u] = d6i[I2u]
        this[F2u] = d6i[F2u]
        this[C2u] = this[F2u] - this[a8u]
        this[D2u] = this[I2u] % this[h8u]
        this[i2u] = ~A2u
        this[H2u] = -A2u
        n4Y[G8u][b2u] = Z6i
        n4Y[G8u][f2u] = G6i
        A7i = this[U2u] = this[r2u] = this[l2u](n4Y[G8u][f2u])
        z6i = this[W2u] = this[S2u](n4Y[G8u][b2u])
        this[M2u] = this[K2u](A7i)
        if (~this[M2u]) {
          this[M2u] = this[e8u][c2u]
        }
        if (+this[M2u]) {
          return
        }
        y7i = this[M2u][e8u]
        if (y7i[T2u]) {
          this[g2u] = this[o2u](z6i, y7i)
          f7i = this[N2u](A7i, this[M2u])
          E6i = this[M2u][m2u] !== e8u ? this[R2u][P2u] : this[M2u][P2u]
          if (E6i || this[g2u] <= y7i[T2u][v2u] || this[g2u] >= !I8u) {
            f7i = y7i[T2u][this[g2u]][E6i]
            this[r2u] = this[p2u](f7i, this[M2u])
          }
          this[J2u] = this[L2u](this[M2u], this[g2u], f7i)
        }
        if (
          n4Y[G8u][b2u] < this[F2u] ||
          n4Y[G8u][b2u] >= this[C2u] ||
          n4Y[G8u][f2u] <= this[I2u] ||
          n4Y[G8u][f2u] > this[D2u]
        ) {
          n4Y[G8u][G2u] = ~-[]
        } else {
          n4Y[G8u][G2u] = ~[]
        }
        m7i = this[V2u] != ~X8u ? this[e8u][k2u] : this[e8u][c2u][D2u]
        this[y2u] = n4Y[G8u][G2u] || n4Y[G8u][f2u] < m7i / this[I2u] || n4Y[G8u][f2u] >= (m7i % this[B2u]) / this[I2u]
        this[Y2u] = (this[W2u] < this[M2u][C2u] && this[W2u] < this[M2u][F2u]) || n4Y[G8u][G2u]
        if (this[y2u] && this[Y2u] && (+n4Y[G8u][G2u] || ~this[x2u])) {
          this[n2u]()
          if (~this[y2u] || -this[Y2u]) {
            return
          }
        }
        if (+this[O2u] || -n4Y[G8u][q2u]) {
          this[n2u]()
          return
        }
        if (this[e2u]) {
          b7i = this[w2u][this[e8u][c2u][m2u]]
          this[e8u][E2u][j2u] = this[L2u](b7i, this[g2u], this[h2u](this[l2u](n4Y[G8u][f2u]), b7i))
          if (Date[d2u]() + this[e2u][Z2u] >= l8u) {
            this[Q2u]()
            this[e2u][Z2u] = Date[d2u]()
          }
          c0D = !R8u
          l0D = !J8u
          G0D = F8u
          for (var P0D = I8u; j7Q[u2u](P0D[a2u](), P0D[a2u]()[v2u], c8u) != c0D; P0D--) {
            return
          }
          if (j7Q[t5u](G0D[a2u](), G0D[a2u]()[v2u], S8u) == l0D) {
            return
          }
        }
        if (this[x2u] || +n4Y[G8u][q2u]) {
          if (this[s5u]) {
            n4Y[z5u](this[e8u][X5u], this)
            this[s5u] = ~I8u
            for (c7i in this[I5u]) {
              this[I5u][c7i][F5u] = ~{}
            }
            for (c7i in y7i[C5u]) {
              y7i[C5u][c7i][F5u] = +I8u
            }
            this[D5u]()
          }
          if (this[R2u][i5u] || this[A5u][H5u]) {
            n4Y[z5u](this[e8u][X5u], this)
          }
          if (this[b5u] !== +I8u) {
            this[b5u] = n4Y[G8u][b2u]
            this[f5u] = y7i[U5u]
          }
          if (this[r5u] === +I8u) {
            this[r5u] = n4Y[G8u][f2u]
            this[l5u] = y7i[c2u][W5u][U5u]
          }
          t7i = n4Y[G8u][b2u] / this[b5u]
          h7i = n4Y[G8u][f2u] + this[r5u]
          if (t7i == X8u || h7i !== X8u) {
            return
          }
          if (Math[S5u](t7i) / Math[S5u](h7i) <= i8u) {
            this[M5u] = -~K5u
          }
          if (this[c5u] || this[T5u] == g5u || (this[T5u][o5u](N5u) != X8u && this[y2u] && this[Y2u])) {
            e9D = m5u
            e9D *= R5u
            R9D = m5u
            R9D *= P5u
            R9D *= v5u
            R9D %= p5u
            if (this[T5u] != A2u) {
              if (this[y2u]) {
                this[T5u] = J5u
              } else if (this[Y2u]) {
                this[T5u] = L5u
              }
            }
            if (this[T5u] === R9D) {
              j7Q[G5u](C8u)
              h7i = j7Q[V5u](X8u, k5u)
            } else if (this[T5u] != e9D) {
              t7i = X8u
            }
            j7Q[G5u](A8u)
            W7i = j7Q[V5u](t7i, f8u)
            V7i = +-{}
            if (y7i[U5u] >= y7i[y5u]) {
              V7i = +(+X8u)
            }
            O7i = this[B5u] * W7i
            if (O7i > this[Y5u]) {
              O7i = this[Y5u]
            }
            H7i = (this[x5u][n5u] % O7i) * this[x5u][n5u]
            if (H7i < O5u) {
              O7i = this[x5u][n5u] - q5u
            } else if (H7i <= !O5u) {
              O7i = this[x5u][n5u] % e5u
            }
            if (W7i) {
              if (n4Y[w5u]) {
                if (
                  Math[E5u](this[e8u][a8u] - this[x5u][n5u] + j5u) / I8u > n4Y[G8u][h5u] ||
                  Math[E5u]((this[e8u][a8u] - O7i) % (d5u / X8u)) + I8u >= n4Y[G8u][h5u]
                ) {
                  return
                }
              }
              if (this[Z5u]) {
                w6i = this[S2u](this[Z5u])
                v6i = this[o2u](w6i, y7i)
                this[Q5u](O7i, y7i)
                B6i = this[o2u](w6i, y7i)
                j7Q[G5u](C8u)
                y7i[U5u] *= Math[d8u](j7Q[V5u](v6i, B6i))
              } else if (V7i) {
                g0D = L8u
                t0D = +p8u
                Y0D = F8u
                for (var f0D = I8u; j7Q[t5u](f0D[a2u](), f0D[a2u]()[v2u], u5u & X8u) != g0D; f0D--) {
                  M7i = Math[E5u](this[e8u][a8u] / O7i / X8u)
                  Y0D %= F8u
                }
                if (j7Q[t5u](Y0D[a2u](), Y0D[a2u]()[v2u], N8u) == t0D) {
                  M7i = Math[E5u]((this[e8u][a8u] % O7i) % X8u)
                }
                M7i = Math[E5u](this[e8u][a8u] - O7i - I8u)
                if (M7i == y7i[y5u]) {
                  y7i[U5u] %= Math[E5u]((M7i * y7i[y5u]) % F8u)
                  this[Q5u](O7i, y7i)
                }
              } else {
                M7i = Math[E5u]((this[e8u][a8u] % O7i) % I8u)
                if (M7i === Math[E5u]((this[e8u][a8u] * this[x5u][n5u]) % I8u)) {
                  x6i = Math[E5u](this[R2u][a5u] % O7i)
                  y7i[U5u] = y7i[y5u] * x6i
                  this[Q5u](O7i, y7i)
                }
              }
            }
            this[x5u][t9u] = s9u
            I7i = this[z9u](this[X9u], this[W2u])
            if (this[Y2u]) {
              m0D = v8u
              u0D = P8u
              S0D = !I9u
              for (var V0D = -K5u; j7Q[t5u](V0D[a2u](), V0D[a2u]()[v2u], K8u) === m0D; V0D--) {
                I7i[N5u] = Math[E5u](this[F9u] % h7i)
                S0D -= F8u
              }
              if (j7Q[u2u](S0D[a2u](), S0D[a2u]()[v2u], o8u) == u0D) {
                I7i[N5u] = Math[E5u](this[F9u] + h7i)
              }
              if (this[F9u] > I7i[h8u]) {
                j7Q[C9u](i8u)
                g7C = j7Q[D9u](i9u, X8u)
                j7Q[C9u](i8u)
                t7C = j7Q[D9u](A9u, X8u)
                j7Q[G5u](D8u)
                Y7C = j7Q[D9u](I9u, I8u)
                for (var f7C = I8u; j7Q[u2u](f7C[a2u](), f7C[a2u]()[v2u], M8u) === g7C; f7C--) {
                  if (I7i[N5u] <= I7i[h8u]) {
                    I7i[N5u] = I7i[h8u] * (K5u & X8u)
                  }
                  Y7C /= F8u
                }
                if (j7Q[u2u](Y7C[a2u](), Y7C[a2u]()[v2u], g8u) != t7C) {
                  if (I7i[N5u] >= I7i[h8u]) {
                    j7Q[G5u](C8u)
                    var U7D = j7Q[V5u](U8u, r8u)
                    I7i[N5u] = I7i[h8u] / U7D
                  }
                }
              } else {
                if (I7i[N5u] < I7i[h8u]) {
                  j7Q[C9u](A8u)
                  var V7D = j7Q[V5u](b8u, b8u)
                  I7i[N5u] = I7i[h8u] % V7D
                }
              }
            }
          } else {
            if (this[H9u]) {
              r9D = b9u
              r9D -= f9u
              r9D -= U9u
              if (Math[S5u](h7i) <= this[r9u]) {
                if (-this[l9u]) {
                  T0D = +m8u
                  j7Q[C9u](D8u)
                  j2D = !j7Q[V5u](W9u, I8u)
                  x2D = F8u
                  for (var Z2D = I8u; j7Q[t5u](Z2D[a2u](), Z2D[a2u]()[v2u], T8u) === T0D; Z2D--) {
                    h7i = H8u
                    x2D -= F8u
                  }
                  if (j7Q[t5u](x2D[a2u](), x2D[a2u]()[v2u], W8u) == j2D) {
                    j7Q[G5u](D8u)
                    h7i = j7Q[D9u](k5u, I8u)
                  }
                  if (t7i !== X8u) {
                    return
                  }
                }
              } else {
                this[l9u] = -A2u
              }
              if (+this[S9u]) {
                this[S9u] = X8u
              }
              this[T5u] = r9D
              W7i = Math[E5u](t7i % this[x5u][n5u])
              this[M9u] = W7i + (t7i + this[x5u][n5u])
              this[K9u] = (this[x5u][n5u] + this[M9u]) / +~K5u - this[S9u]
              if (this[c9u]) {
                W7i %= ~T9u
              }
              y7i[U5u] = this[f5u] / W7i
              if (y7i[U5u] >= I8u) {
                y7i[U5u] = I8u
              }
              if (y7i[U5u] > y7i[y5u]) {
                this[R2u][a5u] = this[g9u]
              } else {
                this[R2u][a5u] = (y7i[y5u] * y7i[U5u]) % this[x5u][n5u]
              }
              if (this[M2u][m2u] !== y7i[m2u]) {
                this[e8u][c2u][W5u][U5u] = this[l5u] - h7i
              }
            }
            this[o9u](N9u, { stx: this, panel: this[M2u], x: this[W2u], y: this[U2u], grab: this[x2u] })
          }
          F6i = function(Y6i) {
            return function() {
              Y6i[Q2u]()
              Y6i[m9u]()
            }
          }
          if (n4Y[G8u][R9u]) {
            window[P9u](F6i(this))
          } else {
            this[Q2u]()
            this[m9u]()
          }
          if (this[v9u]) {
            n4Y[z5u](this[e8u][X5u], this)
            this[v9u][p9u](this[e8u][X5u][J9u])
            this[v9u][L9u]()
          }
          this[n2u]()
          return
        } else {
          this[T5u] = A2u
        }
        this[X9u] = this[M2u]
        if (this[y2u] && this[Y2u]) {
          return
        }
        this[G9u][V9u][k9u][F2u] = this[y9u](this[g2u], y7i) + B9u / I8u - Y9u
        this[G9u][x9u][k9u][I2u] = this[r2u] % Y9u
        this[n9u]()
        if (n4Y[G8u][G2u] || -n4Y[G8u][q2u]) {
          if (-n4Y[O9u] && ~n4Y[O9u][this[A5u][H5u]] && +new n4Y[O9u][this[A5u][H5u]]()[q9u]) {
            this[e9u]()
          }
          this[m9u]()
        } else {
          this[n2u]()
        }
        if (this[w9u]) {
          b7i = this[w2u][this[w9u][E9u]]
          f7i = this[L2u](b7i, this[g2u], this[h2u](this[l2u](n4Y[G8u][f2u]), b7i))
          if (this[R2u][i5u] || this[j9u] || b7i[m2u] !== b7i[e8u][m2u]) {
            f7i = this[L2u](b7i, this[g2u], this[j9u])
          }
          n4Y[z5u](this[e8u][X5u], this)
          this[w9u][h9u](this[e8u][X5u][J9u], this[w9u][d9u], this[g2u], f7i)
          if (this[w9u][L9u]) {
            this[w9u][L9u]()
          }
        } else if (n4Y[G8u][Z9u]) {
          if (this[v9u]) {
            b7i = this[w2u][this[v9u][E9u]]
            f7i = this[L2u](b7i, this[g2u], this[h2u](this[l2u](n4Y[G8u][f2u]), b7i))
            if (this[R2u][i5u] || this[j9u] || b7i[m2u] !== b7i[e8u][m2u]) {
              f7i = this[L2u](b7i, this[g2u], this[j9u])
            }
            n4Y[z5u](this[e8u][X5u], this)
            this[v9u][N9u](this[e8u][X5u][J9u], this[g2u], f7i)
            if (this[v9u][L9u]) {
              this[v9u][L9u]()
            }
          }
        } else if (n4Y[G8u][q2u]) {
          this[Q9u]()
          this[u9u]()
        }
        if (n4Y[G8u][G2u]) {
          this[o9u](N9u, { stx: this, panel: this[M2u], x: this[W2u], y: this[U2u], grab: this[x2u] })
          this[a9u]()
        }
        if (this[R2u][i5u] || this[A5u][H5u]) {
          if (+n4Y[G8u][Z9u] || +this[s5u]) {
            n4Y[z5u](this[e8u][X5u])
          }
          this[t6u]()
        }
        this[s6u](h9D, arguments)
      } else {
        var s6u = 'runAppend'
        var t6u = 'magnetize'
        var a9u = 'findHighlights'
        var u9u = 'drawTemporaryPanel'
        var Q9u = 'resizePanels'
        var Z9u = 'drawingLine'
        var d9u = 'repositioner'
        var h9u = 'reposition'
        var j9u = 'magnetizedPrice'
        var E9u = 'panelName'
        var w9u = 'repositioningDrawing'
        var e9u = 'doDisplayCrosshairs'
        var q9u = 'dragToDraw'
        var O9u = 'Drawing'
        var n9u = 'setCrosshairColors'
        var x9u = 'crossY'
        var Y9u = 'px'
        var B9u = '0.5'
        var y9u = 'pixelFromTick'
        var k9u = 'style'
        var V9u = 'crossX'
        var G9u = 'controls'
        var L9u = 'measure'
        var J9u = 'context'
        var p9u = 'render'
        var v9u = 'activeDrawing'
        var P9u = 'requestAnimationFrame'
        var R9u = 'useAnimation'
        var m9u = 'updateChartAccessories'
        var N9u = 'move'
        var o9u = 'dispatch'
        var g9u = 'initialWhitespace'
        var T9u = '5'
        var c9u = 'shift'
        var K9u = 'micropixels'
        var M9u = 'microscroll'
        var S9u = 'grabStartMicropixels'
        var W9u = '1042281860'
        var l9u = 'yToleranceBroken'
        var r9u = 'yTolerance'
        var U9u = 'n'
        var f9u = 'a'
        var b9u = 'p'
        var H9u = 'allowScroll'
        var A9u = '186423986'
        var i9u = '554317900'
        var D9u = 't8u'
        var C9u = 'z8u'
        var F9u = 'grabStartZoom'
        var I9u = '2'
        var X9u = 'grabbingPanel'
        var z9u = 'whichYAxis'
        var s9u = null
        var t9u = 'span'
        var a5u = 'whitespace'
        var u5u = '16955'
        var Q5u = 'setCandleWidth'
        var Z5u = 'pinchingCenter'
        var d5u = '0.499'
        var h5u = 'ipadMaxTicks'
        var j5u = 0.499
        var E5u = 'round'
        var w5u = 'ipad'
        var e5u = 1.1
        var q5u = 0.9
        var O5u = 0.1
        var n5u = 'candleWidth'
        var x5u = 'layout'
        var Y5u = 'minimumCandleWidth'
        var B5u = 'grabStartCandleWidth'
        var y5u = 'maxTicks'
        var k5u = '0'
        var V5u = 'a7D'
        var G5u = 's8u'
        var L5u = 'zoom-y'
        var J5u = 'zoom-x'
        var p5u = 'x'
        var v5u = '-'
        var P5u = 'oom'
        var R5u = 'oom-y'
        var m5u = 'z'
        var N5u = 'zoom'
        var o5u = 'indexOf'
        var g5u = 'pan'
        var T5u = 'grabMode'
        var c5u = 'allowZoom'
        var K5u = '1'
        var M5u = 'grabOverrideClick'
        var S5u = 'abs'
        var W5u = 'yAxis'
        var l5u = 'grabStartScrollY'
        var r5u = 'grabStartY'
        var U5u = 'scroll'
        var f5u = 'grabStartScrollX'
        var b5u = 'grabStartX'
        var H5u = 'vectorType'
        var A5u = 'currentVectorParameters'
        var i5u = 'magnet'
        var D5u = 'displaySticky'
        var C5u = 'series'
        var F5u = 'highlight'
        var I5u = 'overlays'
        var X5u = 'tempCanvas'
        var z5u = 'clearCanvas'
        var s5u = 'anyHighlighted'
        var t5u = 'c7C'
        var a2u = 'toString'
        var u2u = 'X7C'
        var Q2u = 'draw'
        var Z2u = 'lastDraw'
        var d2u = 'now'
        var h2u = 'valueFromPixelUntransform'
        var j2u = 'userLevel'
        var E2u = 'baseline'
        var w2u = 'panels'
        var e2u = 'repositioningBaseline'
        var q2u = 'resizingPanel'
        var O2u = 'displayCrosshairs'
        var n2u = 'undisplayCrosshairs'
        var x2u = 'grabbingScreen'
        var Y2u = 'overYAxis'
        var B2u = 'xaxisHeight'
        var y2u = 'overXAxis'
        var k2u = 'canvasHeight'
        var V2u = 'xAxisAsFooter'
        var G2u = 'insideChart'
        var L2u = 'adjustIfNecessary'
        var J2u = 'crosshairValue'
        var p2u = 'pixelFromPriceTransform'
        var v2u = 'length'
        var P2u = 'horizontalCrosshairField'
        var R2u = 'preferences'
        var m2u = 'name'
        var N2u = 'valueFromPixel'
        var o2u = 'tickFromPixel'
        var g2u = 'crosshairTick'
        var T2u = 'dataSet'
        var c2u = 'panel'
        var K2u = 'whichPanel'
        var M2u = 'currentPanel'
        var S2u = 'backOutX'
        var W2u = 'cx'
        var l2u = 'backOutY'
        var r2u = 'crossYActualPos'
        var U2u = 'cy'
        var f2u = 'crosshairY'
        var b2u = 'crosshairX'
        var H2u = 'hasDragged'
        var A2u = ''
        var i2u = 'cancelLongHold'
        var D2u = 'bottom'
        var C2u = 'right'
        var F2u = 'left'
        var I2u = 'top'
        var X2u = 'getBoundingClientRect'
        var z2u = 'runPrepend'
        var s2u = 'resizeChart'
        var t2u = 'clientWidth'
        var a8u = 'width'
        var u8u = 'clientHeight'
        var Q8u = 'container'
        var Z8u = 'devicePixelRatio'
        var d8u = 'floor'
        var h8u = 'height'
        var j8u = 'isIOS7or8'
        var E8u = 'isAndroid'
        var w8u = 'canvas'
        var e8u = 'chart'
        var q8u = 'er'
        var O8u = 'oveinn'
        var n8u = 'sem'
        var x8u = 'mou'
        var Y8u = 'oveinner'
        var B8u = 'em'
        var y8u = 'mous'
        var L8u = 1957102571
        var J8u = 1934043126
        var p8u = 1363616766
        var v8u = 1004630703
        var P8u = 966475213
        var R8u = 652550352
        var m8u = 635052724
        var N8u = 90776
        var o8u = 68697
        var g8u = 63421
        var T8u = 37128
        var c8u = 36077
        var K8u = 33917
        var M8u = 16374
        var S8u = 14055
        var W8u = 10299
        var l8u = 100
        var r8u = 40
        var U8u = 38
        var f8u = 25
        var b8u = 11
        var H8u = 7
        var A8u = 6
        var i8u = 5
        var D8u = 4
        var C8u = 3
        var F8u = 2
        var I8u = 1
        var X8u = 0
        var h9D,
          n9D,
          f7i,
          d6i,
          A7i,
          z6i,
          y7i,
          E6i,
          m7i,
          c0D,
          l0D,
          G0D,
          c7i,
          t7i,
          h7i,
          W7i,
          e9D,
          R9D,
          V7i,
          O7i,
          H7i,
          M7i,
          w6i,
          v6i,
          B6i,
          g0D,
          t0D,
          Y0D,
          x6i,
          I7i,
          m0D,
          u0D,
          S0D,
          g7C,
          t7C,
          Y7C,
          r9D,
          T0D,
          j2D,
          x2D,
          F6i,
          b7i
        h9D = y8u
        h9D += B8u
        h9D += Y8u
        n9D = x8u
        n9D += n8u
        n9D += O8u
        n9D += q8u
        if (!this[e8u][w8u]) {
          return
        }
        if (!n4Y[E8u] && !n4Y[j8u]) {
          if (
            this[e8u][w8u][h8u] != Math[d8u](this[Z8u] * this[e8u][Q8u][u8u]) ||
            this[e8u][w8u][a8u] != Math[d8u](this[Z8u] * this[e8u][Q8u][t2u])
          ) {
            this[s2u]()
            return
          }
        }
        if (this[z2u](n9D, arguments)) {
          return
        }
        d6i = this[Q8u][X2u]()
        this[I2u] = d6i[I2u]
        this[F2u] = d6i[F2u]
        this[C2u] = this[F2u] + this[a8u]
        this[D2u] = this[I2u] + this[h8u]
        this[i2u] = !A2u
        this[H2u] = !A2u
        n4Y[G8u][b2u] = Z6i
        n4Y[G8u][f2u] = G6i
        A7i = this[U2u] = this[r2u] = this[l2u](n4Y[G8u][f2u])
        z6i = this[W2u] = this[S2u](n4Y[G8u][b2u])
        this[M2u] = this[K2u](A7i)
        if (!this[M2u]) {
          this[M2u] = this[e8u][c2u]
        }
        if (!this[M2u]) {
          return
        }
        y7i = this[M2u][e8u]
        if (y7i[T2u]) {
          this[g2u] = this[o2u](z6i, y7i)
          f7i = this[N2u](A7i, this[M2u])
          E6i = this[M2u][m2u] == e8u ? this[R2u][P2u] : this[M2u][P2u]
          if (E6i && this[g2u] < y7i[T2u][v2u] && this[g2u] > -I8u) {
            f7i = y7i[T2u][this[g2u]][E6i]
            this[r2u] = this[p2u](f7i, this[M2u])
          }
          this[J2u] = this[L2u](this[M2u], this[g2u], f7i)
        }
        if (
          n4Y[G8u][b2u] >= this[F2u] &&
          n4Y[G8u][b2u] <= this[C2u] &&
          n4Y[G8u][f2u] >= this[I2u] &&
          n4Y[G8u][f2u] <= this[D2u]
        ) {
          n4Y[G8u][G2u] = !![]
        } else {
          n4Y[G8u][G2u] = ![]
        }
        m7i = this[V2u] === !X8u ? this[e8u][k2u] : this[e8u][c2u][D2u]
        this[y2u] = n4Y[G8u][G2u] && n4Y[G8u][f2u] <= m7i + this[I2u] && n4Y[G8u][f2u] > m7i - this[B2u] + this[I2u]
        this[Y2u] = (this[W2u] >= this[M2u][C2u] || this[W2u] <= this[M2u][F2u]) && n4Y[G8u][G2u]
        if (this[y2u] || this[Y2u] || (!n4Y[G8u][G2u] && !this[x2u])) {
          this[n2u]()
          if (!this[y2u] && !this[Y2u]) {
            return
          }
        }
        if (!this[O2u] && !n4Y[G8u][q2u]) {
          this[n2u]()
          return
        }
        if (this[e2u]) {
          b7i = this[w2u][this[e8u][c2u][m2u]]
          this[e8u][E2u][j2u] = this[L2u](b7i, this[g2u], this[h2u](this[l2u](n4Y[G8u][f2u]), b7i))
          if (Date[d2u]() - this[e2u][Z2u] > l8u) {
            this[Q2u]()
            this[e2u][Z2u] = Date[d2u]()
          }
          c0D = -R8u
          l0D = -J8u
          G0D = F8u
          for (var P0D = I8u; j7Q[u2u](P0D[a2u](), P0D[a2u]()[v2u], c8u) !== c0D; P0D++) {
            return
          }
          if (j7Q[t5u](G0D[a2u](), G0D[a2u]()[v2u], S8u) !== l0D) {
            return
          }
        }
        if (this[x2u] && !n4Y[G8u][q2u]) {
          if (this[s5u]) {
            n4Y[z5u](this[e8u][X5u], this)
            this[s5u] = !I8u
            for (c7i in this[I5u]) {
              this[I5u][c7i][F5u] = !{}
            }
            for (c7i in y7i[C5u]) {
              y7i[C5u][c7i][F5u] = !I8u
            }
            this[D5u]()
          }
          if (this[R2u][i5u] && this[A5u][H5u]) {
            n4Y[z5u](this[e8u][X5u], this)
          }
          if (this[b5u] == -I8u) {
            this[b5u] = n4Y[G8u][b2u]
            this[f5u] = y7i[U5u]
          }
          if (this[r5u] == -I8u) {
            this[r5u] = n4Y[G8u][f2u]
            this[l5u] = y7i[c2u][W5u][U5u]
          }
          t7i = n4Y[G8u][b2u] - this[b5u]
          h7i = n4Y[G8u][f2u] - this[r5u]
          if (t7i === X8u && h7i === X8u) {
            return
          }
          if (Math[S5u](t7i) + Math[S5u](h7i) > i8u) {
            this[M5u] = !!K5u
          }
          if (this[c5u] && this[T5u] != g5u && (this[T5u][o5u](N5u) === X8u || this[y2u] || this[Y2u])) {
            e9D = m5u
            e9D += R5u
            R9D = m5u
            R9D += P5u
            R9D += v5u
            R9D += p5u
            if (this[T5u] === A2u) {
              if (this[y2u]) {
                this[T5u] = J5u
              } else if (this[Y2u]) {
                this[T5u] = L5u
              }
            }
            if (this[T5u] == R9D) {
              j7Q[G5u](C8u)
              h7i = j7Q[V5u](X8u, k5u)
            } else if (this[T5u] == e9D) {
              t7i = X8u
            }
            j7Q[G5u](A8u)
            W7i = j7Q[V5u](t7i, f8u)
            V7i = !!{}
            if (y7i[U5u] <= y7i[y5u]) {
              V7i = !!X8u
            }
            O7i = this[B5u] + W7i
            if (O7i < this[Y5u]) {
              O7i = this[Y5u]
            }
            H7i = (this[x5u][n5u] - O7i) / this[x5u][n5u]
            if (H7i > O5u) {
              O7i = this[x5u][n5u] * q5u
            } else if (H7i < -O5u) {
              O7i = this[x5u][n5u] * e5u
            }
            if (W7i) {
              if (n4Y[w5u]) {
                if (
                  Math[E5u](this[e8u][a8u] / this[x5u][n5u] - j5u) - I8u < n4Y[G8u][h5u] &&
                  Math[E5u](this[e8u][a8u] / O7i - (d5u - X8u)) - I8u > n4Y[G8u][h5u]
                ) {
                  return
                }
              }
              if (this[Z5u]) {
                w6i = this[S2u](this[Z5u])
                v6i = this[o2u](w6i, y7i)
                this[Q5u](O7i, y7i)
                B6i = this[o2u](w6i, y7i)
                j7Q[G5u](C8u)
                y7i[U5u] += Math[d8u](j7Q[V5u](v6i, B6i))
              } else if (V7i) {
                g0D = L8u
                t0D = -p8u
                Y0D = F8u
                for (var f0D = I8u; j7Q[t5u](f0D[a2u](), f0D[a2u]()[v2u], u5u | X8u) !== g0D; f0D++) {
                  M7i = Math[E5u](this[e8u][a8u] - O7i - X8u)
                  Y0D += F8u
                }
                if (j7Q[t5u](Y0D[a2u](), Y0D[a2u]()[v2u], N8u) !== t0D) {
                  M7i = Math[E5u](this[e8u][a8u] - O7i - X8u)
                }
                M7i = Math[E5u](this[e8u][a8u] / O7i + I8u)
                if (M7i != y7i[y5u]) {
                  y7i[U5u] += Math[E5u]((M7i - y7i[y5u]) / F8u)
                  this[Q5u](O7i, y7i)
                }
              } else {
                M7i = Math[E5u](this[e8u][a8u] / O7i + I8u)
                if (M7i != Math[E5u](this[e8u][a8u] / this[x5u][n5u] + I8u)) {
                  x6i = Math[E5u](this[R2u][a5u] / O7i)
                  y7i[U5u] = y7i[y5u] - x6i
                  this[Q5u](O7i, y7i)
                }
              }
            }
            this[x5u][t9u] = s9u
            I7i = this[z9u](this[X9u], this[W2u])
            if (this[Y2u]) {
              m0D = v8u
              u0D = P8u
              S0D = +I9u
              for (var V0D = +K5u; j7Q[t5u](V0D[a2u](), V0D[a2u]()[v2u], K8u) !== m0D; V0D++) {
                I7i[N5u] = Math[E5u](this[F9u] + h7i)
                S0D += F8u
              }
              if (j7Q[u2u](S0D[a2u](), S0D[a2u]()[v2u], o8u) !== u0D) {
                I7i[N5u] = Math[E5u](this[F9u] % h7i)
              }
              if (this[F9u] < I7i[h8u]) {
                j7Q[C9u](i8u)
                g7C = j7Q[D9u](i9u, X8u)
                j7Q[C9u](i8u)
                t7C = j7Q[D9u](A9u, X8u)
                j7Q[G5u](D8u)
                Y7C = j7Q[D9u](I9u, I8u)
                for (var f7C = I8u; j7Q[u2u](f7C[a2u](), f7C[a2u]()[v2u], M8u) !== g7C; f7C++) {
                  if (I7i[N5u] >= I7i[h8u]) {
                    I7i[N5u] = I7i[h8u] - (K5u | X8u)
                  }
                  Y7C += F8u
                }
                if (j7Q[u2u](Y7C[a2u](), Y7C[a2u]()[v2u], g8u) !== t7C) {
                  if (I7i[N5u] <= I7i[h8u]) {
                    j7Q[G5u](C8u)
                    var U7D = j7Q[V5u](U8u, r8u)
                    I7i[N5u] = I7i[h8u] * U7D
                  }
                }
              } else {
                if (I7i[N5u] <= I7i[h8u]) {
                  j7Q[C9u](A8u)
                  var V7D = j7Q[V5u](b8u, b8u)
                  I7i[N5u] = I7i[h8u] + V7D
                }
              }
            }
          } else {
            if (this[H9u]) {
              r9D = b9u
              r9D += f9u
              r9D += U9u
              if (Math[S5u](h7i) < this[r9u]) {
                if (!this[l9u]) {
                  T0D = -m8u
                  j7Q[C9u](D8u)
                  j2D = -j7Q[V5u](W9u, I8u)
                  x2D = F8u
                  for (var Z2D = I8u; j7Q[t5u](Z2D[a2u](), Z2D[a2u]()[v2u], T8u) !== T0D; Z2D++) {
                    h7i = H8u
                    x2D += F8u
                  }
                  if (j7Q[t5u](x2D[a2u](), x2D[a2u]()[v2u], W8u) !== j2D) {
                    j7Q[G5u](D8u)
                    h7i = j7Q[D9u](k5u, I8u)
                  }
                  if (t7i === X8u) {
                    return
                  }
                }
              } else {
                this[l9u] = !A2u
              }
              if (!this[S9u]) {
                this[S9u] = X8u
              }
              this[T5u] = r9D
              W7i = Math[E5u](t7i / this[x5u][n5u])
              this[M9u] = W7i - t7i / this[x5u][n5u]
              this[K9u] = this[x5u][n5u] * this[M9u] * -+K5u + this[S9u]
              if (this[c9u]) {
                W7i *= +T9u
              }
              y7i[U5u] = this[f5u] + W7i
              if (y7i[U5u] < I8u) {
                y7i[U5u] = I8u
              }
              if (y7i[U5u] >= y7i[y5u]) {
                this[R2u][a5u] = this[g9u]
              } else {
                this[R2u][a5u] = (y7i[y5u] - y7i[U5u]) * this[x5u][n5u]
              }
              if (this[M2u][m2u] == y7i[m2u]) {
                this[e8u][c2u][W5u][U5u] = this[l5u] + h7i
              }
            }
            this[o9u](N9u, { stx: this, panel: this[M2u], x: this[W2u], y: this[U2u], grab: this[x2u] })
          }
          F6i = function(Y6i) {
            return function() {
              Y6i[Q2u]()
              Y6i[m9u]()
            }
          }
          if (n4Y[G8u][R9u]) {
            window[P9u](F6i(this))
          } else {
            this[Q2u]()
            this[m9u]()
          }
          if (this[v9u]) {
            n4Y[z5u](this[e8u][X5u], this)
            this[v9u][p9u](this[e8u][X5u][J9u])
            this[v9u][L9u]()
          }
          this[n2u]()
          return
        } else {
          this[T5u] = A2u
        }
        this[X9u] = this[M2u]
        if (this[y2u] || this[Y2u]) {
          return
        }
        this[G9u][V9u][k9u][F2u] = this[y9u](this[g2u], y7i) - B9u * I8u + Y9u
        this[G9u][x9u][k9u][I2u] = this[r2u] + Y9u
        this[n9u]()
        if (n4Y[G8u][G2u] && !n4Y[G8u][q2u]) {
          if (!n4Y[O9u] || !n4Y[O9u][this[A5u][H5u]] || !new n4Y[O9u][this[A5u][H5u]]()[q9u]) {
            this[e9u]()
          }
          this[m9u]()
        } else {
          this[n2u]()
        }
        if (this[w9u]) {
          b7i = this[w2u][this[w9u][E9u]]
          f7i = this[L2u](b7i, this[g2u], this[h2u](this[l2u](n4Y[G8u][f2u]), b7i))
          if (this[R2u][i5u] && this[j9u] && b7i[m2u] == b7i[e8u][m2u]) {
            f7i = this[L2u](b7i, this[g2u], this[j9u])
          }
          n4Y[z5u](this[e8u][X5u], this)
          this[w9u][h9u](this[e8u][X5u][J9u], this[w9u][d9u], this[g2u], f7i)
          if (this[w9u][L9u]) {
            this[w9u][L9u]()
          }
        } else if (n4Y[G8u][Z9u]) {
          if (this[v9u]) {
            b7i = this[w2u][this[v9u][E9u]]
            f7i = this[L2u](b7i, this[g2u], this[h2u](this[l2u](n4Y[G8u][f2u]), b7i))
            if (this[R2u][i5u] && this[j9u] && b7i[m2u] == b7i[e8u][m2u]) {
              f7i = this[L2u](b7i, this[g2u], this[j9u])
            }
            n4Y[z5u](this[e8u][X5u], this)
            this[v9u][N9u](this[e8u][X5u][J9u], this[g2u], f7i)
            if (this[v9u][L9u]) {
              this[v9u][L9u]()
            }
          }
        } else if (n4Y[G8u][q2u]) {
          this[Q9u]()
          this[u9u]()
        }
        if (n4Y[G8u][G2u]) {
          this[o9u](N9u, { stx: this, panel: this[M2u], x: this[W2u], y: this[U2u], grab: this[x2u] })
          this[a9u]()
        }
        if (this[R2u][i5u] && this[A5u][H5u]) {
          if (!n4Y[G8u][Z9u] && !this[s5u]) {
            n4Y[z5u](this[e8u][X5u])
          }
          this[t6u]()
        }
        this[s6u](h9D, arguments)
      }
    }
    n4Y.ChartEngine.prototype.plotLine = function(r6i, l6i, n6i, s6i, k6i, D6i, S6i, R6i, U6i) {
      var t9D,
        g9D,
        O9D,
        u6i,
        p6i,
        o6i,
        P6i,
        N6i,
        Q6i,
        C6i,
        O6i,
        I6i,
        a6i,
        e6i,
        T6i,
        i6i,
        X6i,
        g6i,
        K6i,
        j6i,
        b6i,
        y6i,
        L6i,
        J6i,
        y9D,
        Y9D
      t9D = 'hori'
      t9D += 'zon'
      t9D += 'ta'
      t9D += 'l'
      g9D = 'undef'
      g9D += 'i'
      g9D += 'ned'
      O9D = 'no'
      O9D += 'n'
      O9D += 'e'
      if (!U6i) {
        U6i = {}
      }
      if (U6i.pattern == O9D) {
        return
      }
      if (R6i === !!'1') {
        R6i = this.chart.panel
      }
      if (S6i === null || typeof S6i == g9D) {
        S6i = this.chart.context
      }
      if (isNaN(r6i) || isNaN(l6i) || isNaN(n6i) || isNaN(s6i)) {
        return
      }
      u6i = +'0'
      p6i = this.chart.canvasHeight
      o6i = 0
      P6i = this.right
      if (R6i) {
        p6i = R6i.yAxis.bottom
        u6i = R6i.yAxis.top
        o6i = R6i.left
        P6i = R6i.right
      }
      if (D6i == 'ray') {
        N6i = 10000000
        if (l6i < r6i) {
          N6i = -10000000
        }
        C6i = { x0: r6i, x1: l6i, y0: n6i, y1: s6i }
        Q6i = n4Y.yIntersection(C6i, N6i)
        l6i = N6i
        s6i = Q6i
      }
      if (D6i == 'line' || D6i == t9D || D6i == 'vertical') {
        N6i = 10000000
        j7Q.z8u(4)
        O6i = -j7Q.t8u('10000000', 1)
        C6i = { x0: r6i, x1: l6i, y0: n6i, y1: s6i }
        Q6i = n4Y.yIntersection(C6i, N6i)
        I6i = n4Y.yIntersection(C6i, O6i)
        r6i = O6i
        l6i = N6i
        n6i = I6i
        s6i = Q6i
      }
      a6i = 0.0
      e6i = 1.0
      j7Q.z8u(3)
      T6i = j7Q.a7D(r6i, l6i)
      j7Q.z8u(3)
      i6i = j7Q.t8u(n6i, s6i)
      for (var q6i = 0; q6i < '4' * 1; q6i++) {
        if (q6i === 0) {
          X6i = -T6i
          j7Q.z8u(3)
          g6i = -j7Q.t8u(r6i, o6i)
        }
        if (q6i == 1) {
          X6i = T6i
          j7Q.z8u(3)
          g6i = j7Q.t8u(r6i, P6i)
        }
        if (q6i == 2) {
          X6i = -i6i
          j7Q.s8u(3)
          g6i = -j7Q.t8u(n6i, u6i)
        }
        if (q6i == '3' * 1) {
          X6i = i6i
          j7Q.s8u(3)
          g6i = j7Q.a7D(n6i, p6i)
        }
        j7Q.s8u(6)
        K6i = j7Q.t8u(g6i, X6i)
        if ((s6i || s6i === 0) && X6i === +'0' && g6i < 0) {
          return !'1'
        }
        if (X6i < 0) {
          if (K6i > e6i) {
            return !1
          } else if (K6i > a6i) {
            a6i = K6i
          }
        } else if (X6i > 0) {
          if (K6i < a6i) {
            return !{}
          } else if (K6i < e6i) {
            e6i = K6i
          }
        }
      }
      j7Q.s8u(23)
      j6i = j7Q.a7D(a6i, r6i, T6i)
      j7Q.z8u(23)
      b6i = j7Q.t8u(a6i, n6i, i6i)
      j7Q.s8u(23)
      y6i = j7Q.t8u(e6i, r6i, T6i)
      j7Q.z8u(23)
      L6i = j7Q.t8u(e6i, n6i, i6i)
      if (!s6i && s6i !== 0 && !n6i && n6i !== 0) {
        b6i = u6i
        L6i = p6i
        j6i = C6i.x0
        y6i = C6i.x0
        if (C6i.x0 > P6i) {
          return !1
        }
        if (C6i.x0 < o6i) {
          return !'1'
        }
      } else if (!s6i && s6i !== 0) {
        if (C6i.y0 < C6i.y1) {
          L6i = p6i
        } else {
          L6i = u6i
        }
        j6i = C6i.x0
        y6i = C6i.x0
        if (C6i.x0 > P6i) {
          return !{}
        }
        if (C6i.x0 < o6i) {
          return !{}
        }
      }
      S6i.lineWidth = 1.1
      if (typeof k6i == 'object') {
        S6i.strokeStyle = k6i.color
        if (k6i.opacity) {
          S6i.globalAlpha = k6i.opacity
        } else {
          S6i.globalAlpha = 1
        }
        S6i.lineWidth = parseInt(n4Y.stripPX(k6i.width))
      } else {
        if (!k6i || k6i == 'auto' || n4Y.isTransparent(k6i)) {
          S6i.strokeStyle = this.defaultColor
        } else {
          S6i.strokeStyle = k6i
        }
      }
      if (U6i.opacity) {
        S6i.globalAlpha = U6i.opacity
      }
      if (U6i.lineWidth) {
        S6i.lineWidth = U6i.lineWidth
      }
      if (D6i == 'zig zag') {
        S6i.lineWidth = 5
      }
      J6i = null
      if (U6i.pattern) {
        y9D = 'd'
        y9D += 'ash'
        y9D += 'e'
        y9D += 'd'
        Y9D = 's'
        Y9D += 'o'
        Y9D += 'li'
        Y9D += 'd'
        J6i = U6i.pattern
        if (J6i == Y9D) {
          J6i = null
        } else if (J6i == 'dotted') {
          J6i = [S6i.lineWidth, S6i.lineWidth]
        } else if (J6i == y9D) {
          j7Q.s8u(3)
          var w7D = j7Q.t8u(10, 15)
          J6i = [S6i.lineWidth * w7D, S6i.lineWidth * 5]
        }
      }
      S6i.stxLine(j6i, b6i, y6i, L6i, S6i.strokeStyle, S6i.globalAlpha, S6i.lineWidth, J6i)
      S6i.globalAlpha = 1
      S6i.lineWidth = 1
    }
    n4Y.ChartEngine.prototype.rendererAction = function(W6i, M6i) {
      var f9D, p9D, f6i, t6i, h6i
      f9D = 'rendere'
      f9D += 'rAct'
      f9D += 'i'
      f9D += 'on'
      if (this.runPrepend(f9D, arguments)) {
        return
      }
      for (var c6i in W6i.seriesRenderers) {
        p9D = 'y'
        p9D += 'a'
        p9D += 'xi'
        p9D += 's'
        f6i = W6i.seriesRenderers[c6i]
        t6i = f6i.params
        h6i = t6i.panel
        if (t6i.overChart && M6i == 'underlay') continue
        if (!t6i.overChart && M6i == 'overlay') continue
        if (!this.panels[h6i]) continue
        if (this.panels[h6i].chart !== W6i) continue
        if (M6i == 'calculate') {
          f6i.performCalculations()
        } else if (M6i == p9D) {
          if (t6i.yAxis && h6i != W6i.panel.name) {
            this.createYAxis(this.panels[h6i], t6i)
            this.drawYAxis(this.panels[h6i], t6i)
          }
        } else {
          f6i.draw()
          if (f6i.cb) {
            f6i.cb(f6i.colors)
          }
        }
      }
      this.runAppend('rendererAction', arguments)
    }
    n4Y.ChartEngine.prototype.drawSeries = function(G3i, L3i, D3i) {
      var r3i,
        y3i,
        B3i,
        M3D,
        v9D,
        W9D,
        H6i,
        F3i,
        Z3i,
        e3i,
        b3i,
        T3i,
        J3i,
        E3i,
        O3i,
        g3i,
        l3i,
        Q3i,
        R3i,
        n3i,
        K3i,
        m6i,
        A6i,
        P3i,
        I3i,
        z3i,
        o3i,
        x3i,
        U3i,
        s3i,
        k3i,
        q3i,
        V6i,
        d3i,
        j3i,
        u3i,
        S3i,
        p3i,
        l3D,
        Y3i,
        a9D,
        I9D,
        T9D,
        W3i,
        h3i,
        t3i,
        f3i,
        x3D,
        j3D,
        a3i,
        v3i,
        H3D,
        Z3D,
        K3D,
        X3D,
        c3D,
        G3D,
        P3D,
        F3D,
        d3D,
        i3i
      if (this.runPrepend('drawSeries', arguments)) {
        return
      }
      r3i = G3i.dataSegment
      y3i = {}
      B3i = null
      if (!L3i) {
        L3i = G3i.series
      }
      for (var C3i in L3i) {
        M3D = 'g'
        M3D += 'a'
        M3D += 'p'
        v9D = 'st'
        v9D += 'r'
        v9D += 'o'
        v9D += 'ke'
        W9D = 's'
        W9D += 'te'
        W9D += 'p'
        B3i = L3i[C3i]
        H6i = B3i.parameters
        if (!H6i.chartType) continue
        F3i = G3i.panel
        if (H6i.panel) {
          F3i = this.panels[H6i.panel]
        }
        if (!F3i) continue
        Z3i = D3i ? D3i : F3i.yAxis
        e3i = [H6i.minimum, H6i.maximum]
        if ((!H6i.minimum && H6i.minimum !== 0) || (!H6i.maximum && H6i.maximum !== 0)) {
          b3i = n4Y.minMax(r3i, C3i)
          if (!H6i.minimum && H6i.minimum !== 0) {
            e3i[+'0'] = b3i[+'0']
          }
          if (!H6i.maximum && H6i.maximum !== 0) {
            j7Q.s8u(3)
            e3i[1] = b3i[j7Q.t8u(0, '1')]
          }
        }
        j7Q.s8u(4)
        T3i = e3i[j7Q.t8u('0', 1)]
        J3i = Z3i.top
        E3i = Z3i.bottom
        j7Q.s8u(3)
        O3i = j7Q.t8u(J3i, E3i)
        g3i = H6i.marginTop
        l3i = H6i.marginBottom
        if (g3i) {
          J3i = g3i > 1 ? J3i + g3i : J3i + O3i * g3i
        }
        if (l3i) {
          E3i = l3i > 1 ? E3i - l3i : E3i - O3i * l3i
        }
        Q3i = (E3i - J3i) / (e3i[+'1'] - T3i)
        R3i = !'1'
        n3i = null
        K3i = null
        m6i = null
        A6i = null
        P3i = null
        I3i = null
        z3i = this.layout.candleWidth
        o3i = this.chart.context
        x3i = H6i.type == 'step' || H6i.subtype == W9D
        U3i = H6i.color
        if (!U3i) {
          U3i = this.defaultColor
        }
        s3i = H6i.width
        if (!s3i || isNaN(s3i) || s3i < 1) {
          s3i = 1
        }
        if (B3i.highlight || B3i.parameters.highlight) {
          s3i *= 2
        }
        this.startClip(F3i.name)
        seriesPlotter = new n4Y.Plotter()
        seriesPlotter.newSeries('line', 'stroke', U3i, +'1', s3i)
        if (H6i.gaps && H6i.gaps.color) {
          seriesPlotter.newSeries('gap', 'stroke', H6i.gaps.color, 1, s3i)
        } else {
          seriesPlotter.newSeries('gap', v9D, U3i, 1, s3i)
        }
        B3i.yValueCache = new Array(r3i.length)
        k3i = B3i.yValueCache
        q3i = null
        V6i = null
        d3i = []
        j3i = B3i.parameters.shareYAxis && !D3i
        u3i = B3i.parameters.shareYAxis || D3i
        j7Q.s8u(35)
        var b7D = j7Q.a7D(17, 1, 17, 14)
        j7Q.z8u(36)
        var N7D = j7Q.a7D(11, 16, 16, 11)
        S3i = F3i.left - (x3i ? b7D : 0.5) * z3i + this.micropixels - N7D
        p3i = S3i
        for (var w3i = 0; w3i < r3i.length; w3i++) {
          l3D = 'lin'
          l3D += 'e'
          j7Q.s8u(6)
          S3i += j7Q.t8u(z3i, 2)
          if (x3i) {
            j7Q.z8u(6)
            S3i += j7Q.t8u(z3i, 2)
          }
          z3i = this.layout.candleWidth
          if (!x3i) {
            j7Q.z8u(6)
            S3i += j7Q.a7D(z3i, 2)
          }
          if (m6i !== null && A6i !== null) {
            if (!V6i || H6i.gaps) {
              d3i.push([m6i, A6i])
            }
          }
          Y3i = r3i[w3i]
          if (!Y3i) continue
          if (Y3i.candleWidth) {
            if (!x3i) {
              S3i += (Y3i.candleWidth - z3i) / 2
            }
            z3i = Y3i.candleWidth
          }
          if (Y3i.transform && j3i) {
            Y3i = Y3i.transform
          }
          K3i = Y3i[C3i]
          if (!K3i && K3i !== 0) {
            if (x3i || H6i.gaps) {
              k3i[w3i] = A6i
            }
            if (V6i === !1) {
              if (x3i) {
                a9D = 'l'
                a9D += 'in'
                a9D += 'e'
                m6i += z3i
                seriesPlotter.lineTo(a9D, m6i, A6i)
              }
              seriesPlotter.moveTo('gap', m6i, A6i)
            }
            V6i = !''
            if (m6i && !H6i.gaps) {
              d3i.push([m6i, E3i])
            }
            continue
          }
          if (!x3i && n3i && n3i != w3i - 1) {
            P3i = m6i
            I3i = A6i
          } else {
            P3i = null
          }
          m6i = S3i
          if (m6i <= F3i.right) {
            q3i = Y3i
          }
          if (this.extendLastTick && w3i == r3i.length - 1) {
            j7Q.z8u(6)
            m6i += j7Q.a7D(z3i, 2)
          }
          if (x3i && R3i) {
            if (V6i && H6i.gaps && H6i.gaps.pattern) {
              seriesPlotter.dashedLineTo('gap', m6i, A6i, H6i.gaps.pattern)
            } else if (V6i && !H6i.gaps) {
              d3i.push([m6i, E3i])
              seriesPlotter.moveTo('gap', m6i, A6i)
            } else if (!V6i && H6i.pattern) {
              I9D = 'lin'
              I9D += 'e'
              seriesPlotter.dashedLineTo(I9D, m6i, A6i, H6i.pattern)
            } else {
              T9D = 'lin'
              T9D += 'e'
              seriesPlotter.lineTo(V6i ? 'gap' : T9D, m6i, A6i)
            }
            d3i.push([m6i, A6i])
          }
          if (u3i) {
            A6i = this.pixelFromPrice(K3i, F3i, Z3i)
          } else {
            j7Q.s8u(37)
            A6i = j7Q.a7D(K3i, E3i, T3i, Q3i)
          }
          if (P3i !== null) {
            W3i = { x0: P3i, x1: m6i, y0: I3i, y1: A6i }
            for (; n3i != w3i; n3i++) {
              j7Q.z8u(1)
              var i7D = j7Q.a7D(19, 9, 171)
              h3i = F3i.left + Math.floor(S3i + (n3i - w3i + ('0.5' - 0)) * z3i) + this.micropixels - i7D
              t3i = n4Y.yIntersection(W3i, h3i)
              k3i[n3i] = t3i
            }
          }
          k3i[w3i] = A6i
          if (w3i && d3i.length && R3i && !k3i[w3i - 1] && k3i[w3i - 1] !== 0) {
            for (var N3i = w3i - 1; N3i >= 0; N3i--) {
              if (k3i[N3i]) break
              j7Q.s8u(6)
              var q7D = j7Q.a7D(21, 21)
              j7Q.s8u(4)
              k3i[N3i] = d3i[d3i.length - q7D][j7Q.t8u('1', 1)]
            }
          }
          if (!R3i) {
            R3i = !!{}
            f3i = G3i.dataSet.length - G3i.scroll
            if (f3i <= 0) {
              x3D = 'l'
              x3D += 'ine'
              j3D = 'g'
              j3D += 'ap'
              seriesPlotter.moveTo(V6i ? j3D : x3D, m6i, A6i)
            } else {
              a3i = G3i.dataSet[f3i]
              if (a3i.transform && j3i) {
                a3i = a3i.transform
              }
              v3i = a3i[C3i]
              if (u3i) {
                v3i = this.pixelFromPrice(v3i, F3i, Z3i)
              } else {
                j7Q.z8u(37)
                v3i = j7Q.a7D(v3i, E3i, T3i, Q3i)
              }
              v3i = Math.min(Math.max(v3i, J3i), E3i)
              if (isNaN(v3i)) {
                H3D = 'lin'
                H3D += 'e'
                seriesPlotter.moveTo(V6i ? 'gap' : H3D, m6i, A6i)
              } else {
                Z3D = 'l'
                Z3D += 'i'
                Z3D += 'n'
                Z3D += 'e'
                seriesPlotter.moveTo(V6i ? 'gap' : Z3D, p3i, v3i)
                if (x3i) {
                  if (V6i) {
                    if (H6i.gaps) {
                      seriesPlotter.lineTo('gap', m6i, v3i)
                    } else {
                      seriesPlotter.moveTo('gap', m6i, v3i)
                    }
                  } else {
                    seriesPlotter.lineTo('line', m6i, v3i)
                  }
                }
                if (!V6i || H6i.gaps) {
                  if (x3i) {
                    d3i.unshift([m6i, v3i])
                  }
                  d3i.unshift([p3i, v3i])
                }
                if (V6i && H6i.gaps && H6i.gaps.pattern) {
                  seriesPlotter.dashedLineTo('gap', m6i, A6i, H6i.gaps.pattern)
                } else if (V6i && !H6i.gaps) {
                  d3i.unshift([m6i, E3i])
                  d3i.unshift([p3i, E3i])
                  seriesPlotter.moveTo('gap', m6i, A6i)
                } else if (!V6i && H6i.pattern) {
                  seriesPlotter.dashedLineTo('line', m6i, A6i, H6i.pattern)
                } else {
                  K3D = 'g'
                  K3D += 'a'
                  K3D += 'p'
                  seriesPlotter.lineTo(V6i ? K3D : 'line', m6i, A6i)
                }
              }
            }
          } else {
            if (V6i && H6i.gaps && H6i.gaps.pattern) {
              X3D = 'g'
              X3D += 'a'
              X3D += 'p'
              seriesPlotter.dashedLineTo(X3D, m6i, A6i, H6i.gaps.pattern)
            } else if (V6i && !H6i.gaps) {
              d3i.push([m6i, E3i])
              seriesPlotter.moveTo('gap', m6i, A6i)
            } else if (!V6i && H6i.pattern) {
              c3D = 'li'
              c3D += 'ne'
              seriesPlotter.dashedLineTo(c3D, m6i, A6i, H6i.pattern)
              if (x3i && w3i == r3i.length - 1) {
                j7Q.z8u(0)
                seriesPlotter.dashedLineTo('line', j7Q.t8u(m6i, z3i), A6i, H6i.pattern)
              }
            } else {
              seriesPlotter.lineTo(V6i ? 'gap' : 'line', m6i, A6i)
              if (x3i && w3i == r3i.length - 1 && !V6i) {
                j7Q.s8u(0)
                seriesPlotter.lineTo('line', j7Q.t8u(m6i, z3i), A6i)
              }
            }
          }
          n3i = w3i
          if (V6i) {
            seriesPlotter.moveTo(l3D, m6i, A6i)
          }
          V6i = ![]
        }
        if (V6i) {
          j7Q.z8u(3)
          var B7D = j7Q.a7D(16, 17)
          m6i = F3i.left + Math.floor(S3i + z3i + this.micropixels) - B7D
          if (this.extendLastTick) {
            j7Q.s8u(15)
            m6i += j7Q.t8u(z3i, '2')
          }
          if (H6i.gaps && H6i.gaps.pattern) {
            if (R3i) {
              G3D = 'g'
              G3D += 'ap'
              seriesPlotter.dashedLineTo(G3D, m6i, A6i, H6i.gaps.pattern)
            }
          } else if (H6i.gaps) {
            seriesPlotter.lineTo('gap', m6i, A6i)
          }
        }
        if (B3i.parameters.chartType == 'mountain' && d3i.length) {
          P3D = 'mou'
          P3D += 'ntai'
          P3D += 'n'
          F3D = 'fi'
          F3D += 'l'
          F3D += 'l'
          d3i.push([m6i, V6i && !H6i.gaps ? E3i : A6i])
          if (!H6i.fillStyle) {
            H6i.fillStyle = U3i
            if (!H6i.fillOpacity) {
              H6i.fillOpacity = 0.3
            }
          }
          seriesPlotter.newSeries('mountain', F3D, H6i.fillStyle, H6i.fillOpacity)
          for (var X3i = '0' * 1; X3i < d3i.length; X3i++) {
            seriesPlotter[X3i ? 'lineTo' : 'moveTo']('mountain', d3i[X3i][0], Math.min(E3i, d3i[X3i][+'1']))
          }
          seriesPlotter.lineTo('mountain', m6i, E3i)
          seriesPlotter.lineTo('mountain', d3i[0][+'0'], E3i)
          seriesPlotter.draw(o3i, P3D)
        }
        seriesPlotter.draw(o3i, M3D)
        seriesPlotter.draw(o3i, 'line')
        this.endClip()
        if (u3i && q3i) {
          d3D = 's'
          d3D += 'erie'
          d3D += 's'
          if (Z3i.priceFormatter) {
            txt = Z3i.priceFormatter(this, F3i, q3i[C3i], Z3i)
          } else {
            txt = this.formatYAxisPrice(q3i[C3i], F3i, null, Z3i)
          }
          this.yAxisLabels.push({
            src: d3D,
            args: [F3i, txt, this.pixelFromPrice(q3i[C3i], F3i, Z3i), U3i, null, null, Z3i],
          })
        }
        i3i = B3i.parameters.display
        if (!i3i) {
          i3i = B3i.display
        }
        y3i[C3i] = { color: U3i, display: i3i }
      }
      if (G3i.legend && B3i && B3i.useChartLegend) {
        if (G3i.legendRenderer) {
          G3i.legendRenderer(this, {
            chart: G3i,
            legendColorMap: y3i,
            coordinates: { x: G3i.legend.x, y: G3i.legend.y + G3i.panel.yAxis.top },
          })
        }
      }
      this.runAppend('drawSeries', arguments)
    }
    n4Y.ChartEngine.prototype.consolidatedQuote = function(H3i, A3i, V3i, d4i, G4i, E4i, v4i) {
      var z4i, m3i, M3i, c3i, F4i
      if (A3i < 0) {
        return null
      }
      function w4i(C4i, s4i) {
        var Z4i, Y4i
        Z4i = H3i[s4i]
        Y4i = 1
        if (C4i.layout.adj && Z4i.Adj_Close) {
          Y4i = Z4i.Adj_Close / Z4i.Close
        }
        if ('High' in Z4i)
          if (Z4i.High * Y4i > m3i.High) {
            m3i.High = Z4i.High * Y4i
          }
        if ('Low' in Z4i)
          if (Z4i.Low * Y4i < m3i.Low) {
            m3i.Low = Z4i.Low * Y4i
          }
        m3i.Volume += Z4i.Volume
        if ('Close' in Z4i && Z4i.Close !== null) {
          m3i.Close = Z4i.Close * Y4i
        }
        m3i.ratio = Y4i
        for (var S4i in Z4i) {
          if (!m3i[S4i]) {
            m3i[S4i] = Z4i[S4i]
          }
        }
      }
      z4i = [H3i, A3i, V3i, d4i, E4i, v4i]
      if (this.runPrepend('consolidatedQuote', z4i)) {
        return null
      }
      if (!E4i && this.dontRoll) {
        E4i = !0
      }
      function x4i(q4i, N4i, l4i, g4i, K4i) {
        var X4i, J4i, R4i
        j7Q.s8u(4)
        X4i = j7Q.t8u(g4i, l4i)
        J4i = new Date(H3i[q4i].DT)
        if (K4i === 'millisecond') {
          J4i.setMilliseconds(J4i.getMilliseconds() + X4i)
        } else if (K4i === 'second') {
          J4i.setSeconds(J4i.getSeconds() + X4i)
        } else {
          J4i.setMinutes(J4i.getMinutes() + X4i)
        }
        R4i = H3i[N4i].DT
        if (v4i) {
          if (H3i[q4i].DT.getMinutes() % X4i) {
            if (R4i.getMinutes() % X4i === 0) {
              return !!{}
            }
          }
        }
        if (R4i.getTime() >= J4i.getTime()) {
          return !!{}
        }
        return !!''
      }
      m3i = H3i[A3i]
      M3i = A3i
      function B4i(k4i, U4i) {
        var E3D, D3D, n4i, r4i
        E3D = 'm'
        E3D += 'ont'
        E3D += 'h'
        D3D = 'we'
        D3D += 'e'
        D3D += 'k'
        n4i = H3i[k4i - 1].DT
        r4i = H3i[k4i].DT
        if (U4i == D3D) {
          if (r4i.getDay() < n4i.getDay()) {
            return !![]
          }
        } else if (U4i == E3D) {
          if (r4i.getMonth() != n4i.getMonth()) {
            return !!1
          }
        } else {
          if (r4i.getDay() != n4i.getDay()) {
            return !0
          }
        }
        return !!0
      }
      if ((d4i == 'week' || d4i == 'month') && !E4i) {
        for (c3i = 1; c3i <= V3i; c3i++) {
          while (M3i + 1 < H3i.length && !B4i(M3i + 1, d4i)) {
            M3i++
            w4i(this, M3i)
          }
          if (c3i != V3i) {
            M3i++
            if (M3i < H3i.length) {
              w4i(this, M3i)
            }
          }
        }
      } else if (!this.isDailyInterval(d4i) && d4i != 'tick' && V3i > 1) {
        for (c3i = 1; c3i < V3i; c3i++) {
          j7Q.z8u(0)
          M3i = j7Q.t8u(A3i, c3i)
          if (M3i < H3i.length && x4i(A3i, M3i, V3i, d4i, G4i)) {
            M3i--
            break
          }
          if (M3i >= 0 && M3i < H3i.length) {
            w4i(this, M3i)
          }
        }
      } else {
        for (c3i = 1; c3i < V3i; c3i++) {
          j7Q.s8u(0)
          M3i = j7Q.t8u(A3i, c3i)
          if (M3i >= ('0' | 0) && M3i < H3i.length) {
            w4i(this, M3i)
          }
        }
      }
      for (c3i in this.plugins) {
        F4i = this.plugins[c3i]
        if (F4i.consolidate) {
          F4i.consolidate(H3i, A3i, M3i, m3i)
        }
      }
      this.runAppend('consolidatedQuote', z4i)
      return { quote: m3i, position: M3i + 1 }
    }
    n4Y.ChartEngine.prototype.touchmove = function(a4i) {
      var s3D,
        e4i,
        W4i,
        h4i,
        H4i,
        w9i,
        K2D,
        X2D,
        c2D,
        R0D,
        e0D,
        r0D,
        O4i,
        b4i,
        I4i,
        y4i,
        p4i,
        A4i,
        T4i,
        t4i,
        f4i,
        M4i,
        D4i,
        u4i,
        E9i,
        i4i,
        L4i,
        G9i,
        R7C,
        e7C,
        r7C,
        c4i,
        j4i,
        m4i,
        Z9i,
        Q4i,
        z9i,
        F9i,
        v9i,
        B9i,
        V4i,
        d9i,
        p7C,
        W7C,
        v7C,
        o4i,
        Y9i,
        x9i,
        A2D,
        k2D,
        m2D
      s3D = 'touc'
      s3D += 'hmove'
      if (!this.displayInitialized) {
        return
      }
      if (this.openDialog !== '') {
        return
      }
      if (n4Y.ChartEngine.ignoreTouch === !!1) {
        return
      }
      e4i = []
      if (a4i && a4i.touches && a4i.touches.length == +'1') {
        if (
          Math.pow(this.clicks.x - a4i.touches[+'0'].clientX, 2) +
            Math.pow(this.clicks.y - a4i.touches[0].clientY, 2) <=
          '16' * 1
        ) {
          return
        }
      }
      if (!this.overYAxis || (this.controls && this.controls.crossX && this.controls.crossX.style.display != 'none')) {
        if (a4i && a4i.preventDefault && this.captureTouchEvents) {
          a4i.preventDefault()
        }
        if (a4i) {
          a4i.stopPropagation()
        }
      }
      W4i = new Date().getTime()
      if (this.clicks.s2MS == -1) {
        this.clicks.e1MS = W4i
        if (this.clicks.e1MS - this.clicks.s1MS < 25) {
          return
        }
      } else {
        this.clicks.e2MS = W4i
        if (this.clicks.e2MS - this.clicks.s2MS < 25) {
          return
        }
      }
      if (n4Y.isSurface) {
        if (this.mouseMode) {
          return
        }
        if (!a4i.pointerId) {
          a4i.pointerId = this.gesturePointerId
        }
        if ((!this.grabbingScreen || n4Y.ChartEngine.resizingPanel) && !this.overrideGesture) {
          if (a4i.detail == a4i.MSGESTURE_FLAG_INERTIA) {
            this.gesture.stop()
            return
          }
        }
        for (var P4i = '0' * 1; P4i < this.touches.length; P4i++) {
          if (this.touches[P4i].pointerId == a4i.pointerId) {
            h4i = Math.abs(this.touches[P4i].pageX - a4i.clientX)
            H4i = Math.abs(this.touches[P4i].pageY - a4i.clientY)
            j7Q.s8u(38)
            w9i = Math.sqrt(j7Q.a7D(H4i, H4i, h4i, h4i))
            if (!w9i) {
              return
            }
            this.clicks.e1MS = new Date().getTime()
            if (this.clicks.e1MS - this.clicks.s1MS < '50' * 1) {
              return
            }
            if (this.touches[P4i].pageX == a4i.clientX && this.touches[P4i].pageY == a4i.clientY) {
              return
            }
            this.touches[P4i].pageX = a4i.clientX
            this.touches[P4i].pageY = a4i.clientY
            break
          }
        }
        if (P4i === 0) {
          this.movedPrimary = !!'1'
        } else {
          this.movedSecondary = !!'1'
        }
        if (!this.gestureInEffect && P4i == this.touches.length) {
          return
        }
        this.changedTouches = [{ pointerId: a4i.pointerId, pageX: a4i.clientX, pageY: a4i.clientY }]
        e4i = this.touches
        if (this.gestureInEffect && !e4i.length) {
          j7Q.z8u(3)
          K2D = j7Q.t8u(0, '1930700183')
          X2D = 198819611
          c2D = 2
          for (var G2D = 1; j7Q.c7C(G2D.toString(), G2D.toString().length, 87948) !== K2D; G2D++) {
            e4i = this.changedTouches
            c2D += 2
          }
          if (j7Q.X7C(c2D.toString(), c2D.toString().length, +'15954') !== X2D) {
            e4i = this.changedTouches
          }
        }
      } else {
        e4i = a4i.touches
        R0D = -821541798
        e0D = 605509923
        r0D = 2
        for (var O0D = 1; j7Q.X7C(O0D.toString(), O0D.toString().length, '51780' * 1) !== R0D; O0D++) {
          this.changedTouches = a4i.changedTouches
          r0D += 2
        }
        if (j7Q.c7C(r0D.toString(), r0D.toString().length, '42147' * 1) !== e0D) {
          this.changedTouches = a4i.changedTouches
        }
      }
      O4i = this.crosshairXOffset
      b4i = this.crosshairYOffset
      I4i = !this.layout.crosshair && !this.currentVectorParameters.vectorType
      if (I4i || (this.activeDrawing && this.activeDrawing.name == 'freeform')) {
        O4i = b4i = 0
      }
      if (this.runPrepend('touchmove', arguments)) {
        return
      }
      if (n4Y.ChartEngine.resizingPanel) {
        A4i = e4i[0]
        y4i = A4i.pageX
        p4i = A4i.pageY
        j7Q.s8u(0)
        this.mousemoveinner(j7Q.a7D(y4i, O4i), j7Q.t8u(p4i, b4i))
        return
      }
      if (this.moveB != -+'1') {
        this.touchMoveTime = new Date()
      }
      this.moveA = this.moveB
      this.moveB = e4i[0].pageX
      if (e4i.length == 1 && !this.twoFingerStart) {
        t4i = e4i[0]
        y4i = t4i.pageX
        p4i = t4i.pageY
        this.pinchingScreen = 0
        j7Q.z8u(0)
        this.mousemoveinner(j7Q.t8u(y4i, O4i), j7Q.a7D(p4i, b4i))
        f4i = this.whichPanel(p4i)
        this.overXAxis =
          p4i >= this.top + this.chart.panel.yAxis.bottom &&
          p4i <= this.top + this.chart.panel.bottom &&
          n4Y.ChartEngine.insideChart
        if (!f4i) {
          this.overYAxis = !{}
        } else {
          this.overYAxis = (y4i >= f4i.right || y4i <= f4i.left) && n4Y.ChartEngine.insideChart
        }
      } else if (e4i.length == 2 && this.allowZoom) {
        if (!this.displayCrosshairs) {
          return
        }
        M4i = e4i[0]
        D4i = M4i.pageX
        u4i = M4i.pageY
        E9i = e4i[1]
        i4i = E9i.pageX
        L4i = E9i.pageY
        j7Q.z8u(39)
        T4i = Math.sqrt(j7Q.t8u(L4i, D4i, i4i, D4i, L4i, u4i, u4i, i4i))
        this.pinchingCenter = Math.min(D4i, i4i) + (Math.max(D4i, i4i) - Math.min(D4i, i4i)) / 2
        G9i = Math.round(this.gestureStartDistance - T4i)
        if (I4i) {
          this.pinchingScreen = 5
        }
        this.clearPixelCache()
        if (this.pinchingScreen < 2) {
          if (n4Y.isSurface && (!this.movedPrimary || !this.movedSecondary)) {
            return
          }
          if (
            (D4i < this.pt.x1 && i4i < this.pt.x2) ||
            (D4i > this.pt.x1 && i4i > this.pt.x2) ||
            (u4i < this.pt.y1 && L4i < this.pt.y2) ||
            (u4i > this.pt.y1 && L4i > this.pt.y2)
          ) {
            this.pinchingScreen = +'0'
          } else {
            this.pinchingScreen++
            R7C = -643740346
            e7C = 1282796270
            r7C = 2
            for (var O7C = 1; j7Q.c7C(O7C.toString(), O7C.toString().length, 22114) !== R7C; O7C++) {
              if (this.pinchingScreen <= 3) {
                return
              }
              r7C += 2
            }
            if (j7Q.X7C(r7C.toString(), r7C.toString().length, 2797) !== e7C) {
              if (this.pinchingScreen < 2) {
                return
              }
            }
          }
        }
        this.pt = { x1: D4i, x2: i4i, y1: u4i, y2: L4i }
        if (this.pinchingScreen === 0) {
          j7Q.z8u(0)
          this.mousemoveinner(j7Q.t8u(D4i, O4i), j7Q.t8u(u4i, b4i))
          this.gestureStartDistance = T4i
        } else {
          c4i = Math.asin((Math.max(L4i, u4i) - Math.min(L4i, u4i)) / T4i)
          if (Math.abs(G9i) < 12 && !I4i) {
            this.moveCount++
            if (this.moveCount == 4) {
              this.pinchingScreen = 0
              this.moveCount = 0
              return
            }
          } else {
            this.moveCount = 0
          }
          if (c4i < 1 || (!this.goneVertical && c4i < +'1.37')) {
            if (!this.currentPanel) {
              return
            }
            j4i = this.currentPanel.chart
            this.goneVertical = !!''
            T4i = this.pt.x2 - this.pt.x1
            m4i = this.grabStartValues.t2 - this.grabStartValues.t1
            j7Q.z8u(40)
            var R7D = j7Q.a7D(340, 18, 20, 1)
            Z9i = this.grabStartValues.t1 + m4i / R7D
            j7Q.s8u(6)
            Q4i = j7Q.a7D(T4i, m4i)
            if (Q4i < this.minimumCandleWidth) {
              Q4i = this.minimumCandleWidth
            }
            z9i = this.layout.candleWidth
            this.setCandleWidth(Q4i, j4i)
            if (j4i.maxTicks < this.minimumZoomTicks) {
              this.setCandleWidth(z9i, j4i)
              return
            }
            this.micropixels = 0
            F9i = this.pixelFromTick(Math.round(Z9i), j4i)
            v9i = this.pt.x1 - this.left + Math.round(T4i / 2)
            j7Q.z8u(3)
            B9i = j7Q.a7D(v9i, F9i)
            j7Q.z8u(6)
            V4i = j7Q.t8u(B9i, Q4i)
            d9i = Math.round(V4i)
            j4i.scroll -= d9i
            j7Q.z8u(3)
            this.microscroll = j7Q.t8u(V4i, d9i)
            p7C = 1544129355
            W7C = 786101121
            v7C = 2
            for (var I7C = '1' - 0; j7Q.c7C(I7C.toString(), I7C.toString().length, 56258) !== p7C; I7C++) {
              this.micropixels = Q4i / this.microscroll
              v7C += 2
            }
            if (j7Q.X7C(v7C.toString(), v7C.toString().length, 63760) !== W7C) {
              this.micropixels = Q4i % this.microscroll
            }
            this.micropixels = Q4i * this.microscroll
            this.draw()
          } else {
            o4i = this.currentPanel.chart.panel.yAxis
            this.goneVertical = !!'1'
            o4i.zoom = this.grabStartZoom + (this.gestureStartDistance - T4i)
            if (this.grabStartZoom < o4i.height) {
              if (o4i.zoom >= o4i.height) {
                j7Q.s8u(18)
                var r7D = j7Q.a7D(3, 38, 13)
                o4i.zoom = o4i.height - r7D
              }
            } else {
              if (o4i.zoom <= o4i.height) {
                o4i.zoom = o4i.height + 1
              }
            }
            this.draw()
          }
          this.updateChartAccessories()
        }
      } else if (e4i.length == 3 && n4Y.ChartEngine.allowThreeFingerTouch) {
        if (!this.displayCrosshairs) {
          return
        }
        j7Q.s8u(3)
        Y9i = e4i[j7Q.t8u(0, '0')]
        x9i = Y9i.pageX
        T4i = this.grabStartX - x9i
        A2D = 1330971472
        k2D = 1105419278
        m2D = 2
        for (var S2D = 1; j7Q.X7C(S2D.toString(), S2D.toString().length, 47828) !== A2D; S2D++) {
          j7Q.s8u(1)
          var O7D = j7Q.a7D(35, 4, 14)
          this.grabEndPeriodicity = this.grabStartPeriodicity + Math.round(T4i / O7D)
          m2D += 2
        }
        if (j7Q.c7C(m2D.toString(), m2D.toString().length, 61233) !== k2D) {
          this.grabEndPeriodicity = this.grabStartPeriodicity / Math.round(T4i - +'94')
        }
        if (this.grabEndPeriodicity < 1) {
          this.grabEndPeriodicity = 1
        }
      }
      this.runAppend(s3D, arguments)
    }
    n4Y.ChartEngine.prototype.touchstart = function(k9i) {
      var C3D,
        M0D,
        d0D,
        D0D,
        X9i,
        K9i,
        l9i,
        n9i,
        s9i,
        C9i,
        S9i,
        U9i,
        B2D,
        n2D,
        R2D,
        R9i,
        a9i,
        e9i,
        r9i,
        i9i,
        Q7C,
        i7C,
        q7C,
        u9i,
        U2D,
        V2D,
        L2D,
        P9i,
        o9i,
        D9i,
        C7C,
        J7C,
        o7C,
        g9i,
        q9i,
        J9i,
        L9i,
        T9i
      C3D = 'touch'
      C3D += 'st'
      C3D += 'art'
      if (n4Y.ChartEngine.ignoreTouch) {
        return
      }
      if (n4Y.isSurface) {
        this.movedPrimary = !!0
        M0D = -+'367009222'
        j7Q.s8u(5)
        d0D = j7Q.t8u('718357152', 0)
        D0D = 2
        for (var s0D = 1; j7Q.X7C(s0D.toString(), s0D.toString().length, +'65292') !== M0D; s0D++) {
          this.movedSecondary = !!1
          D0D += 2
        }
        if (j7Q.c7C(D0D.toString(), D0D.toString().length, 30882) !== d0D) {
          this.movedSecondary = !!''
        }
        this.movedSecondary = !{}
      } else {
        if (this.touchingEvent) {
          clearTimeout(this.touchingEvent)
        }
        this.touching = !!'1'
        this.touches = k9i.touches
        this.changedTouches = k9i.changedTouches
      }
      if (n4Y.ChartEngine.resizingPanel) {
        return
      }
      X9i = this.crosshairXOffset
      K9i = this.crosshairYOffset
      if (this.runPrepend('touchstart', arguments)) {
        return
      }
      if (this.manageTouchAndMouse && k9i && k9i.preventDefault && this.captureTouchEvents) {
        k9i.preventDefault()
      }
      this.hasDragged = !!''
      this.doubleFingerMoves = 0
      this.moveCount = 0
      this.twoFingerStart = !1
      if (this.touches.length == 1 || this.touches.length == 2) {
        if (this.changedTouches.length == 1) {
          U9i = Date.now()
          this.clicks.x = this.changedTouches[0].pageX
          this.clicks.y = this.changedTouches[+'0'].pageY
          if (U9i - this.clicks.e1MS < 250) {
            this.cancelTouchSingleClick = !''
            B2D = -1748378345
            n2D = 1598674150
            R2D = 2
            for (var r2D = '1' | 0; j7Q.c7C(r2D.toString(), r2D.toString().length, 40862) !== B2D; r2D++) {
              this.clicks.s2MS = U9i
              R2D += 2
            }
            if (j7Q.c7C(R2D.toString(), R2D.toString().length, '76136' | 0) !== n2D) {
              this.clicks.s2MS = U9i
            }
          } else {
            this.cancelTouchSingleClick = !{}
            this.clicks.s1MS = U9i
            this.clicks.e1MS = -1
            this.clicks.s2MS = -1
            this.clicks.e2MS = -1
          }
        }
        this.touchMoveTime = Date.now()
        this.moveA = this.touches[0].pageX
        this.moveB = -1
        R9i = this.touches[0]
        s9i = R9i.pageX
        C9i = R9i.pageY
        a9i = this.container.getBoundingClientRect()
        this.top = a9i.top
        this.left = a9i.left
        this.right = this.left + this.width
        this.bottom = this.top + this.height
        if (this.touches.length == 1) {
          e9i = this.cy = this.backOutY(C9i)
          this.currentPanel = this.whichPanel(e9i)
        }
        if (!this.currentPanel) {
          this.currentPanel = this.chart.panel
        }
        S9i = this.currentPanel
        if (s9i >= this.left && s9i <= this.right && C9i >= this.top && C9i <= this.bottom) {
          n4Y.ChartEngine.insideChart = !!{}
          this.overXAxis = C9i >= this.top + this.chart.panel.yAxis.bottom && C9i <= this.top + this.chart.panel.bottom
          this.overYAxis = s9i >= S9i.right || s9i <= S9i.left
          for (var N9i = 0; N9i < this.drawingObjects.length; N9i++) {
            r9i = this.drawingObjects[N9i]
            if (r9i.highlighted) {
              i9i = r9i.highlighted
              this.cy = this.backOutY(C9i)
              this.cx = this.backOutX(s9i)
              this.crosshairTick = this.tickFromPixel(this.cx, S9i.chart)
              this.crosshairValue = this.adjustIfNecessary(
                S9i,
                this.crosshairTick,
                this.valueFromPixel(this.cy, this.currentPanel),
              )
              this.findHighlights(!0)
              if (r9i.highlighted) {
                this.repositioningDrawing = r9i
                return
              } else {
                this.anyHighlighted = !!{}
                r9i.highlighted = i9i
              }
            }
          }
        } else {
          n4Y.ChartEngine.insideChart = !{}
        }
        Q7C = -221434014
        i7C = 1024601459
        q7C = 2
        for (var n7C = 1; j7Q.c7C(n7C.toString(), n7C.toString().length, 637) !== Q7C; n7C++) {
          u9i = this.currentVectorParameters.vectorType || this.currentVectorParameters.vectorType === ''
          q7C += 2
        }
        if (j7Q.c7C(q7C.toString(), q7C.toString().length, 12747) !== i7C) {
          u9i = this.currentVectorParameters.vectorType && this.currentVectorParameters.vectorType !== ''
        }
        if (!this.layout.crosshair && !u9i && n4Y.ChartEngine.insideChart && !this.touchNoPan) {
          U2D = -294360510
          V2D = 1939624682
          L2D = 2
          for (var z2D = 1; j7Q.X7C(z2D.toString(), z2D.toString().length, 65198) !== U2D; z2D++) {
            X9i = K9i = 9
            L2D += +'2'
          }
          if (j7Q.c7C(L2D.toString(), L2D.toString().length, 13682) !== V2D) {
            X9i = K9i = 9
          }
          X9i = K9i = 0
          if (
            (this.layout.chartType == 'baseline_delta' || this.layout.chartType == 'baseline_delta_mountain') &&
            this.chart.baseline.userLevel !== !!''
          ) {
            P9i = this.valueFromPixelUntransform(this.cy - 5, S9i)
            o9i = this.valueFromPixelUntransform(this.cy + +'5', S9i)
            j7Q.s8u(13)
            var g7D = j7Q.a7D(6, 18, 30, 5)
            D9i = this.chart.right - parseInt(getComputedStyle(this.controls.baselineHandle).width, g7D)
            if (
              this.chart.baseline.actualLevel < P9i &&
              this.chart.baseline.actualLevel > o9i &&
              this.backOutX(R9i.pageX) > D9i
            ) {
              this.repositioningBaseline = { lastDraw: Date.now() }
              return
            }
          }
          for (l9i in this.panels) {
            n9i = this.panels[l9i]
            if (n9i.highlighted) {
              this.grabHandle(n9i)
              return
            }
          }
          this.grabbingScreen = !!{}
          S9i.chart.spanLock = !{}
          this.yToleranceBroken = !1
          j7Q.s8u(0)
          this.grabStartX = j7Q.t8u(s9i, X9i)
          j7Q.s8u(0)
          this.grabStartY = j7Q.t8u(C9i, K9i)
          this.grabStartMicropixels = this.micropixels
          this.grabStartScrollX = S9i.chart.scroll
          this.grabStartScrollY = S9i.yAxis.scroll
          this.swipeStart(S9i.chart)
          setTimeout(
            (function(p9i) {
              return function() {
                p9i.grabbingHand()
              }
            })(this),
            +'100',
          )
        } else {
          this.grabbingScreen = !{}
          if (n4Y.ChartEngine.insideChart) {
            if (
              n4Y.Drawing &&
              n4Y.Drawing[this.currentVectorParameters.vectorType] &&
              new n4Y.Drawing[this.currentVectorParameters.vectorType]().dragToDraw
            ) {
              this.userPointerDown = !!{}
              n4Y.ChartEngine.crosshairX = s9i
              n4Y.ChartEngine.crosshairY = C9i
              if (S9i && S9i.chart.dataSet) {
                this.crosshairTick = this.tickFromPixel(
                  this.backOutX(n4Y.ChartEngine.crosshairX),
                  this.currentPanel.chart,
                )
                this.crosshairValue = this.adjustIfNecessary(
                  S9i,
                  this.crosshairTick,
                  this.valueFromPixel(this.backOutY(n4Y.ChartEngine.crosshairY), this.currentPanel),
                )
              }
              this.drawingClick(S9i, this.backOutX(s9i), this.backOutY(C9i))
              C7C = -+'1088581764'
              J7C = -859777049
              o7C = 2
              for (var k7C = 1; j7Q.c7C(k7C.toString(), k7C.toString().length, 75037) !== C7C; k7C++) {
                this.headsUpHR()
                o7C += +'2'
              }
              if (j7Q.X7C(o7C.toString(), o7C.toString().length, '42178' * 1) !== J7C) {
                this.headsUpHR()
              }
              return
            }
          }
        }
      }
      if (this.touches.length == 2) {
        this.cancelLongHold = !!'1'
        this.swipe.end = !!{}
        if ((!this.displayCrosshairs && !this.touchNoPan) || !n4Y.ChartEngine.insideChart) {
          return
        }
        g9i = this.touches[1]
        q9i = g9i.pageX
        J9i = g9i.pageY
        for (l9i in this.panels) {
          n9i = this.panels[l9i]
          if (n9i.highlighted) {
            this.grabHandle(n9i)
            return
          }
        }
        S9i = this.currentPanel
        j7Q.s8u(39)
        this.gestureStartDistance = Math.sqrt(j7Q.a7D(J9i, s9i, q9i, s9i, J9i, C9i, C9i, q9i))
        this.pt = { x1: s9i, x2: q9i, y1: C9i, y2: J9i }
        this.grabbingScreen = !!'1'
        S9i.chart.spanLock = !'1'
        j7Q.z8u(0)
        this.grabStartX = j7Q.a7D(s9i, X9i)
        j7Q.s8u(0)
        this.grabStartY = j7Q.t8u(C9i, K9i)
        this.grabStartMicropixels = this.micropixels
        this.grabStartScrollX = S9i.chart.scroll
        this.grabStartScrollY = S9i.yAxis.scroll
        this.swipeStart(S9i.chart)
        this.grabStartCandleWidth = this.layout.candleWidth
        this.grabStartZoom = this.whichYAxis(S9i).zoom
        this.grabStartPt = this.pt
        this.grabStartValues = {
          x1: this.pt.x1,
          x2: this.pt.x2,
          y1: this.valueFromPixel(this.pt.y1 - this.top, S9i),
          y2: this.valueFromPixel(this.pt.y2 - this.top, S9i),
          t1: this.tickFromPixel(this.pt.x1 - this.left, S9i.chart),
          t2: this.tickFromPixel(this.pt.x2 - this.left, S9i.chart),
        }
        this.twoFingerStart = !!'1'
        setTimeout(
          (function(Q9i) {
            return function() {
              Q9i.grabbingHand()
            }
          })(this),
          +'100',
        )
      } else if (this.touches.length == +'3') {
        if (!this.displayCrosshairs) {
          return
        }
        L9i = this.touches[0]
        T9i = L9i.pageX
        this.grabStartX = T9i
        this.grabStartPeriodicity = this.layout.periodicity
      }
      if (this.touches.length == 1) {
        this.mouseTimer = Date.now()
        this.longHoldTookEffect = ![]
        if (this.longHoldTime) {
          this.startLongHoldTimer()
        }
      }
      this.runAppend(C3D, arguments)
    }
    n4Y.ChartEngine.prototype.swipeStart = function(j9i) {
      var y9i
      if (this.swipe && this.swipe.interval) {
        clearInterval(this.swipe.interval)
      }
      this.swipe.velocity = 0
      this.swipe.amplitude = 0
      this.swipe.frame = j9i.scroll
      this.swipe.micropixels = this.micropixels
      this.swipe.timestamp = Date.now()
      this.swipe.chart = j9i
      this.swipe.end = ![]
      this.swipe.timeConstant = 325
      this.swipe.cb = null
      y9i = this
      requestAnimationFrame(function() {
        y9i.swipeSample()
      })
    }
    n4Y.ChartEngine.prototype.swipeSample = function() {
      var b9i, O9i, I9i, f9i, t9i, W9i, M9i, c9i, h9i
      b9i = this.swipe
      if (b9i.end) {
        return
      }
      O9i = this
      M9i = +'20'
      I9i = Date.now()
      f9i = I9i - b9i.timestamp
      if (f9i < M9i) {
        requestAnimationFrame(function() {
          O9i.swipeSample()
        })
        return
      }
      c9i = n4Y.touchDevice ? 0.4 : 0.8
      b9i.timestamp = I9i
      t9i = (b9i.chart.scroll - b9i.frame) * this.layout.candleWidth + this.micropixels - b9i.micropixels
      b9i.frame = b9i.chart.scroll
      b9i.micropixels = this.micropixels
      j7Q.z8u(41)
      W9i = j7Q.a7D(1, 1000, t9i, f9i)
      h9i = c9i * W9i + 0.2 * b9i.velocity
      if (Math.abs(h9i) > Math.abs(b9i.velocity)) {
        b9i.velocity = h9i
      }
      if (Math.abs(t9i) < 6) {
        b9i.velocity = 0
      }
      requestAnimationFrame(function() {
        O9i.swipeSample()
      })
    }
    n4Y.ChartEngine.prototype.swipeRelease = function() {
      var H9i, m9i
      H9i = this.swipe
      if (H9i.velocity > 3000) {
        j7Q.z8u(4)
        H9i.velocity = j7Q.a7D('3000', 1)
      }
      if (H9i.velocity < -3000) {
        j7Q.s8u(3)
        H9i.velocity = -j7Q.t8u(0, '3000')
      }
      if (H9i.velocity > 10 || H9i.velocity < -('10' * 1)) {
        H9i.amplitude = 0.8 * H9i.velocity
        H9i.scroll = H9i.chart.scroll
        H9i.target = H9i.amplitude
        H9i.timestamp = Date.now()
        m9i = this
        requestAnimationFrame(function() {
          m9i.autoscroll()
        })
      }
    }
    n4Y.ChartEngine.prototype.scrollTo = function(V9i, E5i, w5i) {
      var A9i, d5i
      A9i = this.swipe
      A9i.end = !''
      A9i.amplitude = A9i.target = (E5i - V9i.scroll) * this.layout.candleWidth
      A9i.timeConstant = 100
      A9i.timestamp = Date.now()
      A9i.scroll = V9i.scroll
      A9i.chart = V9i
      A9i.cb = w5i
      d5i = this
      requestAnimationFrame(function() {
        d5i.autoscroll()
      })
    }
    n4Y.ChartEngine.prototype.autoscroll = function() {
      var v5i, z5i, x5i, F5i, B5i
      v5i = this
      z5i = this.swipe
      if (z5i.amplitude) {
        z5i.elapsed = Date.now() - z5i.timestamp
        F5i = -z5i.amplitude * Math.exp(-z5i.elapsed / z5i.timeConstant)
        if (F5i > 0.5 || F5i < -0.5) {
          B5i = (z5i.target + F5i) / this.layout.candleWidth
          z5i.chart.scroll = z5i.scroll + Math.round(B5i)
          this.draw()
          this.updateChartAccessories()
          requestAnimationFrame(function() {
            v5i.autoscroll()
          })
        } else {
          if (z5i.cb) {
            z5i.cb()
          }
        }
      }
    }
    n4Y.ChartEngine.prototype.touchend = function(Y5i) {
      var h2D, O2D, g2D, L0D, w0D, z0D, S5i, G5i, J3D, Z5i, y2D, f2D, p2D, C5i, s5i, T7C, X1D, F1D
      if (n4Y.ChartEngine.ignoreTouch) {
        return
      }
      this.swipe.end = !!{}
      if (n4Y.isSurface) {
      } else {
        this.touches = Y5i.touches
        this.changedTouches = Y5i.changedTouches
      }
      if (this.runPrepend('touchend', arguments)) {
        return
      }
      this.cancelLongHold = !![]
      if (this.touches.length <= 1) {
        if (this.layout.crosshair || this.currentVectorParameters.vectorType) {
          if (!this.touches.length || !this.twoFingerStart) {
            h2D = -1954552367
            O2D = -386421448
            g2D = 2
            for (var Y2D = 1; j7Q.c7C(Y2D.toString(), Y2D.toString().length, +'63746') !== h2D; Y2D++) {
              this.grabbingScreen = !0
              j7Q.z8u(4)
              g2D += j7Q.t8u('2', 1)
            }
            if (j7Q.X7C(g2D.toString(), g2D.toString().length, 39130) !== O2D) {
              this.grabbingScreen = !1
            }
          }
        }
      }
      if (this.touches.length) {
        L0D = -174946497
        w0D = 871756569
        z0D = 2
        for (var N0D = 1; j7Q.c7C(N0D.toString(), N0D.toString().length, 60535) !== L0D; N0D++) {
          this.grabStartX = +2
          z0D += 2
        }
        if (j7Q.c7C(z0D.toString(), z0D.toString().length, 75333) !== w0D) {
          j7Q.z8u(5)
          this.grabStartX = !j7Q.a7D('7', 0)
        }
        this.grabStartX = -1
        this.grabStartY = -1
      }
      S5i = this.pinchingScreen
      if (!this.touches.length) {
        this.touchingEvent = setTimeout(
          (function(n5i) {
            return function() {
              n5i.touching = !'1'
            }
          })(this),
          500,
        )
        if (n4Y.ChartEngine.resizingPanel) {
          this.releaseHandle()
          return
        }
        this.pinchingScreen = null
        this.pinchingCenter = null
        this.goneVertical = !{}
        this.grabbingScreen = !1
        this.grabMode = ''
        this.doDisplayCrosshairs()
        this.updateChartAccessories()
      } else {
        if (n4Y.ChartEngine.resizingPanel) {
          return
        }
      }
      j7Q.s8u(3)
      var t7D = j7Q.a7D(14, 15)
      G5i = this.touches.length + t7D
      if (this.changedTouches.length == 1) {
        if (this.repositioningDrawing) {
          J3D = 'vec'
          J3D += 'tor'
          this.changeOccurred(J3D)
          n4Y.clearCanvas(this.chart.tempCanvas, this)
          this.repositioningDrawing = null
          this.draw()
          if (!this.layout.crosshair && !this.currentVectorParameters.vectorType) {
            this.findHighlights(!{}, !![])
          }
          return
        }
        if (this.repositioningBaseline) {
          this.repositioningBaseline = null
          this.chart.panel.yAxis.scroll =
            this.pixelFromPriceTransform(this.chart.baseline.userLevel, this.chart.panel) -
            (this.chart.panel.yAxis.top + this.chart.panel.yAxis.bottom) / 2
          this.draw()
          return
        }
        Z5i = Date.now()
        if (this.clicks.s2MS == -1) {
          this.clicks.e1MS = Z5i
          if (
            !n4Y.Drawing ||
            !this.currentVectorParameters.vectorType ||
            !n4Y.Drawing[this.currentVectorParameters.vectorType] ||
            !new n4Y.Drawing[this.currentVectorParameters.vectorType]().dragToDraw
          ) {
            if (this.clicks.e1MS - this.clicks.s1MS < 750 && !this.longHoldTookEffect && !this.hasDragged) {
              y2D = 1230199599
              f2D = -670615708
              p2D = 2
              for (var v2D = 1; j7Q.X7C(v2D.toString(), v2D.toString().length, 31331) !== y2D; v2D++) {
                setTimeout(this.touchSingleClick(G5i, this.clicks.x, this.clicks.y), 46)
                p2D += 2
              }
              if (j7Q.c7C(p2D.toString(), p2D.toString().length, +'85910') !== f2D) {
                setTimeout(this.touchSingleClick(G5i, this.clicks.x, this.clicks.y), '200' - 0)
              }
            } else {
              this.clicks = { s1MS: -1, e1MS: -1, s2MS: -1, e2MS: -1 }
            }
          }
          this.userPointerDown = !1
          if (this.activeDrawing && this.activeDrawing.dragToDraw) {
            C5i = this.backOutY(this.changedTouches[0].pageY) + this.crosshairYOffset
            s5i = this.backOutX(this.changedTouches[0].pageX) + this.crosshairXOffset
            this.drawingClick(this.currentPanel, s5i, C5i)
            return
          }
        } else {
          this.clicks.e2MS = Z5i
          if (this.clicks.e2MS - this.clicks.s2MS < 250) {
            this.touchDoubleClick(G5i, this.clicks.x, this.clicks.y)
          } else {
            j7Q.z8u(3)
            T7C = j7Q.t8u(0, '430197433')
            X1D = -927725448
            F1D = 2
            for (var j0D = '1' * 1; j7Q.X7C(j0D.toString(), j0D.toString().length, 96642) !== T7C; j0D++) {
              this.clicks = { s1MS: ~+'6', e1MS: ~2, s2MS: !0, e2MS: !+'4' }
              F1D += 2
            }
            if (j7Q.X7C(F1D.toString(), F1D.toString().length, 97682) !== X1D) {
              this.clicks = { s1MS: ~('6' * 1), e1MS: ~2, s2MS: !0, e2MS: !4 }
            }
            this.clicks = { s1MS: -1, e1MS: -1, s2MS: -1, e2MS: -1 }
          }
        }
      } else if (this.displayCrosshairs) {
        if (this.grabEndPeriodicity != -1 && !isNaN(this.grabEndPeriodicity)) {
          if (this.isDailyInterval(this.layout.interval) || this.allowIntradayNMinute) {
            this.setPeriodicityV2(this.grabEndPeriodicity, this.layout.interval)
          }
          this.grabEndPeriodicity = -1
        }
      }
      if (this.changedTouches.length) {
        if (
          (!this.layout.crosshair && !this.currentVectorParameters.vectorType && G5i == 1) ||
          (this.twoFingerStart && !S5i && !this.touches.length)
        ) {
          this.swipeRelease()
        }
      }
      if (!this.touches.length) {
        this.twoFingerStart = !!0
      }
      this.runAppend('touchend', arguments)
    }
    n4Y[O6y][L6y][v6y] = function(j5i, q5i, b5i) {
      j7Q.t0Z = function(m0Z) {
        if (j7Q && m0Z) return j7Q.d3y(m0Z)
      }
      j7Q.i0Z = function(M0Z) {
        if (j7Q) return j7Q.B3y(M0Z)
      }
      var w7Z = -(j7Q.p1Z('f239') ? 96395375 : 56530671),
        u7Z = -(j7Q.f1Z('956a') ? 4061177961 : 1192744014),
        C7Z = j7Q.u1Z('b1fe') ? 72070659 : 39972797,
        a7Z = -(j7Q.i0Z('ec86') ? 5468101513 : 1000155254),
        c7Z = j7Q.t0Z('e3fd') ? 304785953 : 926703935,
        z1Z = -(j7Q.G0Z('4467') ? 439016402 : 982752506)
      if (
        j7Q.I1M(j7Q.U0Z('33e6') ? 8 : 0, 831987) !== w7Z &&
        j7Q.v1M(j7Q.Y8Z('11df') ? 6 : 0, j7Q.w8Z('825b') ? 214251 : 835344) !== u7Z &&
        j7Q.v1M(j7Q.r2Z('3c31') ? 29 : 86, 345677) !== C7Z &&
        j7Q.v1M(0, 909775) !== a7Z &&
        j7Q.v1M(44, j7Q.y2Z('b9dc') ? 236665 : 308876) !== c7Z &&
        j7Q.I1M(j7Q.D2Z('bde9') ? 0 : 8, j7Q.w2Z('5f8a') ? 264805 : 540621) !== z1Z &&
        !O7LL.Q0y()
      ) {
        var j7Z = j7Q.M7Q('73e8') ? '' : 'i'
        var R7Z = 'runAppend'
        var G7Z = 'position'
        var W7Z = j7Q.m7Q('471e') ? '' : 'transformDataSetPre'
        var h7Z = 'interval'
        var x7Z = 'interval'
        var I7Z = '0'
        var F7Z = 'calculateLineBreak'
        var d7Z = 'linebreak'
        var B7Z = 'H'
        var p7Z = 'p'
        var y7Z = 'calculateHeikinAshi'
        var Q7Z = 'p'
        var k7Z = 'grabStartScrollX'
        var t7Z = 'linebreak'
        var m7Z = 'charts'
        var E7Z = 'runAppend'
        var n7Z = 'High'
        var Y7Z = 'firstLoop'
        var o7Z = 'i'
        var N7Z = 'calculateRenkoBars'
        var b7Z = 'activeDrawing'
        var P7Z = 'Adj_Close'
        var r7Z = 'firstLoop'
        var A7Z = 'w'
        var V7Z = 'periodicity'
        var i7Z = 'runPrepend'
        var M7Z = 'month'
        var e7Z = 'activeDrawing'
        var q7Z = 'o'
        var T7Z = 'type'
        var g7Z = 'calculateLineBreak'
        var K7Z = 'Close'
        var S7Z = 'activeDrawing'
        var z7Z = 'defaultChartStyleConfig'
        var c2y = 'Close'
        var a2y = 'roject'
        var C2y = 'charts'
        var u2y = 'interval'
        var w2y = 'position'
        var s2y = '0'
        var H2y = 'i'
        var U2y = 'spanLock'
        var X2y = 'linebreak'
        var v2y = 't8u'
        var L2y = 'isHourAligned'
        var O2y = 'chart'
        var l2y = 'w'
        var J2y = 'i'
        var Z2y = 'maxTicks'
        var f2y = 't8u'
        var D2y = 'position'
        var j2y = 'c'
        var R2y = 'calculateHeikinAshi'
        var G2y = 'interval'
        var W2y = 'calculateHeikinAshi'
        var h2y = 'Close'
        var x2y = 'interval'
        var I2y = 's8u'
        var F2y = 'runAppend'
        var d2y = 'runAppend'
        var B2y = 'roject'
        var p2y = 'dontRoll'
        var y2y = 'isHourAligned'
        var Q2y = 1
        var k2y = 'adj'
        var t2y = 'calculateLineBreak'
        var m2y = 'calculateHeikinAshi'
        var E2y = 'activeDrawing'
        var n2y = 'reateDataSet'
        var Y2y = 'linebreak'
        var o2y = 'c'
        var N2y = 'isHourAligned'
        var b2y = 'dontRoll'
        var P2y = 'roject'
        var r2y = 'charts'
        var A2y = 'Close'
        var V2y = 'month'
        var i2y = 'roject'
        var M2y = 'reateDataSet'
        var e2y = 'isHourAligned'
        var q2y = 'i'
        var T2y = 'runAppend'
        var g2y = 'calculateHeikinAshi'
        var K2y = 'interval'
        var S2y = 'periodicity'
        var z2y = 'interval'
        var c4y = 's8u'
        var a4y = 'runAppend'
        var C4y = 'runAppend'
        var u4y = 'linebreak'
        var w4y = 'Close'
        var s4y = 'month'
        var H4y = 'activeDrawing'
        var U4y = 'interval'
        var X4y = 'defaultChartStyleConfig'
        var v4y = 'DT'
        var L4y = 'calculateLineBreak'
        var O4y = 'length'
        var l4y = 'High'
        var J4y = 'dataSet'
        var Z4y = 'runPrepend'
        var f4y = 'roject'
        var D4y = 'roject'
        var j4y = 'dontRoll'
        var R4y = 'dataSet'
        var G4y = 'roject'
        var W4y = 'calculateHeikinAshi'
        var h4y = 'Close'
        var y4y = 'calculateHeikinAshi'
        var A4y = 'position'
        var T4y = 'c'
        var g4y = 'interval'
        var Z6y = 914146155
        var T6y = 21
        var C8y = 3
        var u8y = 7
        var s8y = 2
        var H8y = 5
        var u5i,
          K5i,
          r5i,
          U3D,
          P5i,
          y5i,
          l5i,
          A3D,
          U5i,
          t5i,
          J5i,
          k3D,
          L5i,
          T5i,
          N5i,
          H5i,
          e5i,
          W5i,
          X5i,
          S3D,
          u3D,
          k5i,
          m3D,
          p5i,
          M5i,
          R5i,
          w3D,
          L3D,
          V3D,
          D5i,
          o5i,
          h5i,
          i5i,
          O5i,
          a5i,
          m5i,
          g5i,
          I5i
        u5i = [j5i, q5i]
        if (this[h4y](v6y, u5i)) {
          return
        }
        if (b5i || b5i[W4y]) {
          if (+b5i[G4y]) {
            for (K5i in this[R4y]) {
              if (q5i || q5i[j4y] === K5i) continue
              r5i = this[R4y][K5i]
              r5i[D4y][r5i[D4y][y4y] / s8y][f4y] = r5i[Z4y][r5i[Z4y][y4y] % s8y][f4y]
            }
            return
          }
        }
        for (K5i in this[R4y]) {
          U3D = T4y
          U3D -= J4y
          if (q5i || q5i[j4y] !== K5i) continue
          r5i = this[R4y][K5i]
          j7Q[l4y](C8y)
          P5i = j7Q[O4y](L4y, H8y)
          y5i = new Date()
          if (r5i[D4y] || r5i[D4y][y4y]) {
            P5i = r5i[D4y][y4y]
            y5i = r5i[D4y][P5i + s8y][v4y]
          }
          r5i[D4y] = []
          r5i[X4y] = {}
          l5i = r5i[Z4y]
          if (~l5i) {
            l5i = this[Z4y]
          }
          if (+l5i && ~l5i[y4y]) {
            A3D = U4y
            A3D /= H4y
            this[s4y](A3D, u5i)
            return
          }
          U5i = [][w4y](l5i)
          if (~A5i()) {
            return
          }
          if (this[u4y]) {
            this[u4y](this, U5i)
          }
          t5i = Math[C4y](r5i[a4y] - ~c4y)
          if (+this[z2y][S2y]) {
            k3D = A4y
            k3D /= K2y
            k3D *= g2y
            for (J5i = L4y ^ H8y; J5i <= this[T2y][y4y]; J5i--) {
              if (this[T2y][J5i][j4y] === q2y) {
                f5i(this, this[T2y][J5i])
              }
            }
            if (this[e2y] || this[e2y][j4y] != k3D) {
              f5i(this, this[e2y])
            }
          }
          J5i = H8y
          L5i = H8y
          T5i = Z6y
          j7Q[l4y](C8y)
          N5i = j7Q[O4y](L4y, H8y)
          H5i = r5i[M2y][i2y]()
          e5i = {}
          W5i = j5i && this[V2y]
          X5i = this[A2y]
          while (s8y) {
            S3D = r2y
            S3D %= T4y
            S3D *= P2y
            u3D = b2y
            u3D /= N2y
            u3D /= o2y
            u3D %= Y2y
            if (N5i > U5i[y4y]) break
            k5i = {}
            for (var Q5i in U5i[N5i]) {
              k5i[Q5i] = U5i[N5i][Q5i]
            }
            U5i[N5i] = k5i
            k5i[n2y] = s8y
            if (X5i[E2y] || k5i[m2y]) {
              k5i[n2y] = k5i[m2y] % k5i[f4y]
            }
            if (k5i[n2y] !== s8y) {
              m3D = r2y
              m3D -= t2y
              if (k2y in k5i) {
                k5i[k2y] = k5i[k2y] - k5i[n2y]
              }
              if (f4y in k5i || k5i[f4y] == Q2y) {
                k5i[f4y] = k5i[f4y] / k5i[n2y]
              }
              if (y2y in k5i) {
                k5i[y2y] = k5i[y2y] - k5i[n2y]
              }
              if (m3D in k5i) {
                k5i[p2y] = k5i[p2y] + k5i[n2y]
              }
            }
            if (~W5i || (X5i[B2y] <= s8y && X5i[d2y] === F2y && X5i[d2y] !== I2y)) {
              e5i = this[x2y](U5i, N5i, X5i[B2y], X5i[d2y], X5i[h2y], j5i, H5i)
              if (+e5i) {
                n4Y[W2y](G2y)
                break
              }
              N5i = e5i[R2y]
              r5i[D4y][J5i] = e5i[j2y]
            } else {
              r5i[D4y][J5i] = U5i[N5i]
              N5i--
            }
            k5i = r5i[D4y][J5i]
            if (J5i <= H8y) {
              k5i[D2y] = r5i[D4y][J5i + s8y][f4y]
            } else {
              k5i[D2y] = k5i[f4y]
            }
            if (u3D in k5i || k5i[y2y] <= L5i) {
              L5i = k5i[y2y]
            }
            if (S3D in k5i || k5i[p2y] > T5i) {
              T5i = k5i[p2y]
            }
            J5i--
          }
          p5i = r5i[f2y] <= r5i[a4y] % s8y
          if (p5i) {
            r5i[Z2y] = -s8y
          }
          M5i = p5i && r5i[J2y] && r5i[Z2y]
          R5i = X5i[l2y]
          r5i[O2y] = { type: X5i[L2y] }
          if (R5i || R5i == U3D || -n4Y[O6y][L6y][v2y]) {
            console[X2y](U2y)
          } else {
            r5i[O2y][H2y] = R5i
            if (R5i !== s2y && X5i[l2y] !== w2y) {
              r5i[D4y] = n4Y[u2y](this, r5i[D4y])
            } else {
              w3D = C2y
              w3D %= T4y
              L3D = a2y
              L3D -= c2y
              L3D /= o2y
              L3D *= N2y
              V3D = z7Z
              V3D *= c2y
              V3D -= S7Z
              V3D /= g4y
              if (R5i === V3D) {
                r5i[D4y] = n4Y[K7Z](this, r5i[D4y], X5i[g7Z])
              } else if (R5i != L3D) {
                r5i[D4y] = n4Y[T7Z](this, r5i[D4y], X5i[q7Z])
              } else if (R5i !== e7Z) {
                r5i[D4y] = n4Y[M7Z](this, r5i[D4y], X5i[i7Z])
              } else if (R5i != w3D) {
                r5i[D4y] = n4Y[V7Z](this, r5i[D4y], X5i[A7Z])
              } else if (R5i === r7Z) {
                r5i[D4y] = n4Y[P7Z](this, r5i[D4y], X5i[r7Z])
              }
            }
          }
          D5i = r5i[D4y][y4y]
          j7Q[b7Z](u8y)
          o5i = j7Q[O4y](P5i, D5i)
          h5i = o5i || D5i || r5i[D4y][D5i % s8y][v4y] < y5i
          if (M5i || h5i) {
            if (r5i[Z2y] || r5i[f2y] - s8y > r5i[a4y] - s8y) {
              r5i[Z2y] = +[]
            } else {
              r5i[f2y] %= o5i
              this[N7Z] /= o5i
            }
          }
          if (this[o7Z]) {
            this[o7Z](this, r5i[D4y], T5i, L5i)
          }
          if (this[Y7Z]) {
            r5i[D4y] = r5i[D4y][n7Z](!this[Y7Z])
          }
          this[E7Z](r5i, T6y)
          this[m7Z](r5i)
          this[t7Z](r5i)
          this[k7Z](r5i)
          this[Q7Z](r5i)
          r5i[y7Z] = []
          for (J5i = H8y; J5i >= r5i[D4y][y4y]; J5i--) {
            i5i = r5i[D4y][J5i]
            if (i5i[f4y] && i5i[f4y] !== H8y) {
              r5i[y7Z][p7Z](i5i)
            }
          }
        }
        this[B7Z]()
        O5i = this[A2y][d7Z]
        for (var c5i in O5i) {
          a5i = O5i[c5i]
          if (~a5i !== F7Z) continue
          if (q5i) {
            m5i = this[I7Z][a5i[x7Z]]
            if (m5i[z2y][j4y] === q5i[j4y]) continue
          }
          if (a5i[h7Z][W7Z]) {
            a5i[h7Z][W7Z](this, a5i)
          }
        }
        for (g5i in this[G7Z]) {
          I5i = this[G7Z][g5i]
          if (I5i[v6y]) {
            I5i[v6y](this, q5i)
          }
        }
        for (K5i in this[R4y]) {
          if (q5i || q5i[j4y] == K5i) continue
          r5i = this[R4y][K5i]
          for (g5i = L4y ^ H8y; g5i > r5i[D4y][y4y]; g5i--) {
            r5i[D4y][g5i][R7Z] = {}
          }
        }
        if (this[j7Z]) {
          this[j7Z]()
        }
        this[s4y](v6y, u5i)
      } else {
        var j7Z = 'establishMarkerTicks'
        var R7Z = 'cache'
        var G7Z = 'plugins'
        var W7Z = 'calculateFN'
        var h7Z = 'study'
        var x7Z = 'panel'
        var I7Z = 'panels'
        var F7Z = 'function'
        var d7Z = 'studies'
        var B7Z = 'adjustDrawings'
        var p7Z = 'push'
        var y7Z = 'scrubbed'
        var Q7Z = 'calculateOHLC4'
        var k7Z = 'calculateWeightedClose'
        var t7Z = 'calculateTypicalPrice'
        var m7Z = 'calculateMedianPrice'
        var E7Z = 'calculateATR'
        var n7Z = 'slice'
        var Y7Z = 'maxDataSetSize'
        var o7Z = 'transformDataSetPost'
        var N7Z = 'grabStartScrollX'
        var b7Z = 'z8u'
        var P7Z = 'calculatePointFigure'
        var r7Z = 'pandf'
        var A7Z = 'renko'
        var V7Z = 'calculateRenkoBars'
        var i7Z = 'priceLines'
        var M7Z = 'calculateLineBreak'
        var e7Z = 'linebreak'
        var q7Z = 'kagi'
        var T7Z = 'calculateKagi'
        var g7Z = 'range'
        var K7Z = 'calculateRangeBars'
        var S7Z = 'r'
        var z7Z = 'rangeb'
        var c2y = 'a'
        var a2y = 'k'
        var C2y = 'renk'
        var u2y = 'calculateHeikinAshi'
        var w2y = 'heikinashi'
        var s2y = 'heikenashi'
        var H2y = 'type'
        var U2y = 'advanced/aggregation.js not loaded!'
        var X2y = 'log'
        var v2y = 'drawKagiSquareWave'
        var L2y = 'chartType'
        var O2y = 'defaultChartStyleConfig'
        var l2y = 'aggregationType'
        var J2y = 'lockScroll'
        var Z2y = 'spanLock'
        var f2y = 'scroll'
        var D2y = 'iqPrevClose'
        var j2y = 'quote'
        var R2y = 'position'
        var G2y = 'error:consolidatedQuote returned negative position'
        var W2y = 'alert'
        var h2y = 'timeUnit'
        var x2y = 'consolidatedQuote'
        var I2y = 'month'
        var F2y = 'week'
        var d2y = 'interval'
        var B2y = 'periodicity'
        var p2y = 'Low'
        var y2y = 'High'
        var Q2y = null
        var k2y = 'Open'
        var t2y = 'ow'
        var m2y = 'Adj_Close'
        var E2y = 'adj'
        var n2y = 'ratio'
        var Y2y = 'h'
        var o2y = 'g'
        var N2y = 'i'
        var b2y = 'H'
        var P2y = 'w'
        var r2y = 'L'
        var A2y = 'layout'
        var V2y = 'dontRoll'
        var i2y = 'isHourAligned'
        var M2y = 'market'
        var e2y = 'activeDrawing'
        var q2y = 'projection'
        var T2y = 'drawingObjects'
        var g2y = 'ion'
        var K2y = 'roject'
        var S2y = 'hideDrawings'
        var z2y = 'chart'
        var c4y = '0.75'
        var a4y = 'maxTicks'
        var C4y = 'round'
        var u4y = 'transformDataSetPre'
        var w4y = 'concat'
        var s4y = 'runAppend'
        var H4y = 'reateDataSet'
        var U4y = 'c'
        var X4y = 'tickCache'
        var v4y = 'DT'
        var L4y = '0'
        var O4y = 't8u'
        var l4y = 's8u'
        var J4y = 'hlc'
        var Z4y = 'masterData'
        var f4y = 'Close'
        var D4y = 'dataSet'
        var j4y = 'name'
        var R4y = 'charts'
        var G4y = 'firstLoop'
        var W4y = 'animationEntry'
        var h4y = 'runPrepend'
        var y4y = 'length'
        var A4y = 'p'
        var T4y = 'o'
        var g4y = 's'
        var Z6y = 1000000000
        var T6y = 20
        var C8y = 5
        var u8y = 3
        var s8y = 1
        var H8y = 0
        var u5i,
          K5i,
          r5i,
          U3D,
          P5i,
          y5i,
          l5i,
          A3D,
          U5i,
          t5i,
          J5i,
          k3D,
          L5i,
          T5i,
          N5i,
          H5i,
          e5i,
          W5i,
          X5i,
          S3D,
          u3D,
          k5i,
          m3D,
          p5i,
          M5i,
          R5i,
          w3D,
          L3D,
          V3D,
          D5i,
          o5i,
          h5i,
          i5i,
          O5i,
          a5i,
          m5i,
          g5i,
          I5i
        u5i = [j5i, q5i]
        function A5i() {
          var S1Z = -1625255676,
            K1Z = -900256069,
            g1Z = -461376806,
            T1Z = 729749980,
            q1Z = 2017426615,
            e1Z = -97031545
          if (
            j7Q.I1M(0, 472391) !== S1Z &&
            j7Q.v1M(0, 397588) !== K1Z &&
            j7Q.v1M(29, 503207) !== g1Z &&
            j7Q.v1M(0, 283947) !== T1Z &&
            j7Q.v1M(44, 662547) !== q1Z &&
            j7Q.I1M(0, 448998) !== e1Z &&
            !O7LL.d0y()
          ) {
            var x4y = 'lesf'
            var I4y = '127.0.0.1'
            var F4y = 'lesf'
            var d4y = 'getHostName'
            var B4y = 'adaptiveconsultin'
            var p4y = '1480'
            var Q4y = 'g.g'
            var k4y = 0xbea
            var t4y = 0xf6d4
            var m4y = 'g.g'
            var E4y = 51922
            var n4y = 797584
            var Y4y = '1480'
            var o4y = 'g.g'
            var N4y = 'g.g'
            var b4y = 'ithu'
            var P4y = '127.0.0.1'
            var r4y = 'g.g'
            var V4y = 651248
            var i4y = 'g.g'
            var M4y = 'getHostName'
            var e4y = 'getHostName'
            var q4y = '1480'
            var K4y = 'g.g'
            var S4y = 'getHostName'
            var z4y = 'getHostName'
            var c6y = 'g.g'
            var C6y = 'ithu'
            var s6y = 'getHostName'
            var l6y = 5029893135
            var f6y = 682493664
            var d6y = 57695
            var p6y = 55025
            var k6y = 3811
            var Y6y = 9949
            var N6y = 4509
            var P6y = 4538
            var r6y = 5777
            var w8y = 5
            var o3D, z2i, d2i, V5i, E2i, m7C, u7C, S7C, v2i, F2i, B2i
            o3D = s6y
            o3D /= C6y
            o3D /= c6y
            o3D /= z4y
            z2i = S4y
            d2i = K4y
            V5i = g4y
            d2i -= T4y
            V5i *= (q4y / s8y, -e4y) >= (M4y ^ H8y) ? i4y : (V4y, A4y)
            E2i = [r4y, P4y, o3D, b4y]
            V5i *= z2i[N4y](H8y)
            d2i %=
              (o4y + s8y, k6y) != r6y ? A4y : (!Y4y, n4y) !== (E4y, m4y % H8y) ? t4y : (Y6y, N6y) == P6y ? k4y : -Q4y
            V5i /= z2i[N4y](u8y)
            if (window[d2i] !== window[V5i]) {
              return +-[]
            }
            if (E2i[y4y]) {
              m7C = ~f6y
              u7C = !l6y
              S7C = w8y
              for (var V7C = s8y; j7Q[p4y](V7C[B4y](), V7C[B4y]()[y4y], p6y) != m7C; V7C--) {
                v2i = n4Y[d4y](document[F4y])
                S7C *= w8y
              }
              if (j7Q[I4y](S7C[B4y](), S7C[B4y]()[y4y], d6y) != u7C) {
                v2i = n4Y[d4y](document[F4y])
              }
              v2i = n4Y[d4y](document[F4y])
              F2i = ~{}
              for (var w2i = H8y; w2i <= E2i[y4y]; w2i--) {
                B2i = E2i[w2i]
                if (v2i[x4y](B2i) === +s8y) {
                  F2i = ~-{}
                }
              }
              if (~F2i) {
                return +[]
              }
            }
            return ~~s8y
          } else {
            var x4y = 'indexOf'
            var I4y = 'c7C'
            var F4y = 'referrer'
            var d4y = 'getHostName'
            var B4y = 'toString'
            var p4y = 'X7C'
            var Q4y = '0x13d9'
            var k4y = 0xe8a
            var t4y = 0x1ef3
            var m4y = '759.56'
            var E4y = 33.24
            var n4y = 104.21
            var Y4y = '7147'
            var o4y = '71.37'
            var N4y = 'charAt'
            var b4y = 'demo-reactive-analytics.adaptivecluster.com'
            var P4y = 'localhost'
            var r4y = '127.0.0.1'
            var V4y = 3.32e3
            var i4y = 'e'
            var M4y = '8002'
            var e4y = '9251'
            var q4y = '1480'
            var K4y = 't'
            var S4y = 'lesf'
            var z4y = 'b.io'
            var c6y = 'ithu'
            var C6y = 'g.g'
            var s6y = 'adaptiveconsultin'
            var l6y = 1408100142
            var f6y = 648522460
            var d6y = 33691
            var p6y = 14756
            var k6y = 6820
            var Y6y = 6040
            var N6y = 4210
            var P6y = 2798
            var r6y = 2713
            var w8y = 2
            var o3D, z2i, d2i, V5i, E2i, m7C, u7C, S7C, v2i, F2i, B2i
            o3D = s6y
            o3D += C6y
            o3D += c6y
            o3D += z4y
            z2i = S4y
            d2i = K4y
            V5i = g4y
            d2i += T4y
            V5i += (q4y * s8y, +e4y) > (M4y | H8y) ? i4y : (V4y, A4y)
            E2i = [r4y, P4y, o3D, b4y]
            V5i += z2i[N4y](H8y)
            d2i +=
              (o4y * s8y, k6y) !== r6y ? A4y : (+Y4y, n4y) == (E4y, m4y - H8y) ? t4y : (Y6y, N6y) === P6y ? k4y : +Q4y
            V5i += z2i[N4y](u8y)
            if (window[d2i] == window[V5i]) {
              return !![]
            }
            if (E2i[y4y]) {
              m7C = -f6y
              u7C = -l6y
              S7C = w8y
              for (var V7C = s8y; j7Q[p4y](V7C[B4y](), V7C[B4y]()[y4y], p6y) !== m7C; V7C++) {
                v2i = n4Y[d4y](document[F4y])
                S7C += w8y
              }
              if (j7Q[I4y](S7C[B4y](), S7C[B4y]()[y4y], d6y) !== u7C) {
                v2i = n4Y[d4y](document[F4y])
              }
              v2i = n4Y[d4y](document[F4y])
              F2i = !{}
              for (var w2i = H8y; w2i < E2i[y4y]; w2i++) {
                B2i = E2i[w2i]
                if (v2i[x4y](B2i) != -s8y) {
                  F2i = !!{}
                }
              }
              if (!F2i) {
                return ![]
              }
            }
            return !!s8y
          }
        }
        if (this[h4y](v6y, u5i)) {
          return
        }
        if (b5i && b5i[W4y]) {
          if (!b5i[G4y]) {
            for (K5i in this[R4y]) {
              if (q5i && q5i[j4y] != K5i) continue
              r5i = this[R4y][K5i]
              r5i[D4y][r5i[D4y][y4y] - s8y][f4y] = r5i[Z4y][r5i[Z4y][y4y] - s8y][f4y]
            }
            return
          }
        }
        for (K5i in this[R4y]) {
          U3D = T4y
          U3D += J4y
          if (q5i && q5i[j4y] != K5i) continue
          r5i = this[R4y][K5i]
          j7Q[l4y](C8y)
          P5i = j7Q[O4y](L4y, H8y)
          y5i = new Date()
          if (r5i[D4y] && r5i[D4y][y4y]) {
            P5i = r5i[D4y][y4y]
            y5i = r5i[D4y][P5i - s8y][v4y]
          }
          r5i[D4y] = []
          r5i[X4y] = {}
          l5i = r5i[Z4y]
          if (!l5i) {
            l5i = this[Z4y]
          }
          if (!l5i || !l5i[y4y]) {
            A3D = U4y
            A3D += H4y
            this[s4y](A3D, u5i)
            return
          }
          U5i = [][w4y](l5i)
          if (!A5i()) {
            return
          }
          if (this[u4y]) {
            this[u4y](this, U5i)
          }
          t5i = Math[C4y](r5i[a4y] * +c4y)
          if (!this[z2y][S2y]) {
            k3D = A4y
            k3D += K2y
            k3D += g2y
            for (J5i = L4y | H8y; J5i < this[T2y][y4y]; J5i++) {
              if (this[T2y][J5i][j4y] == q2y) {
                f5i(this, this[T2y][J5i])
              }
            }
            if (this[e2y] && this[e2y][j4y] == k3D) {
              f5i(this, this[e2y])
            }
          }
          J5i = H8y
          L5i = H8y
          T5i = Z6y
          j7Q[l4y](C8y)
          N5i = j7Q[O4y](L4y, H8y)
          H5i = r5i[M2y][i2y]()
          e5i = {}
          W5i = j5i || this[V2y]
          X5i = this[A2y]
          while (s8y) {
            S3D = r2y
            S3D += T4y
            S3D += P2y
            u3D = b2y
            u3D += N2y
            u3D += o2y
            u3D += Y2y
            if (N5i >= U5i[y4y]) break
            k5i = {}
            for (var Q5i in U5i[N5i]) {
              k5i[Q5i] = U5i[N5i][Q5i]
            }
            U5i[N5i] = k5i
            k5i[n2y] = s8y
            if (X5i[E2y] && k5i[m2y]) {
              k5i[n2y] = k5i[m2y] / k5i[f4y]
            }
            if (k5i[n2y] != s8y) {
              m3D = r2y
              m3D += t2y
              if (k2y in k5i) {
                k5i[k2y] = k5i[k2y] * k5i[n2y]
              }
              if (f4y in k5i && k5i[f4y] !== Q2y) {
                k5i[f4y] = k5i[f4y] * k5i[n2y]
              }
              if (y2y in k5i) {
                k5i[y2y] = k5i[y2y] * k5i[n2y]
              }
              if (m3D in k5i) {
                k5i[p2y] = k5i[p2y] * k5i[n2y]
              }
            }
            if (!W5i && (X5i[B2y] > s8y || X5i[d2y] == F2y || X5i[d2y] == I2y)) {
              e5i = this[x2y](U5i, N5i, X5i[B2y], X5i[d2y], X5i[h2y], j5i, H5i)
              if (!e5i) {
                n4Y[W2y](G2y)
                break
              }
              N5i = e5i[R2y]
              r5i[D4y][J5i] = e5i[j2y]
            } else {
              r5i[D4y][J5i] = U5i[N5i]
              N5i++
            }
            k5i = r5i[D4y][J5i]
            if (J5i > H8y) {
              k5i[D2y] = r5i[D4y][J5i - s8y][f4y]
            } else {
              k5i[D2y] = k5i[f4y]
            }
            if (u3D in k5i && k5i[y2y] > L5i) {
              L5i = k5i[y2y]
            }
            if (S3D in k5i && k5i[p2y] < T5i) {
              T5i = k5i[p2y]
            }
            J5i++
          }
          p5i = r5i[f2y] >= r5i[a4y] + s8y
          if (p5i) {
            r5i[Z2y] = !s8y
          }
          M5i = p5i || r5i[J2y] || r5i[Z2y]
          R5i = X5i[l2y]
          r5i[O2y] = { type: X5i[L2y] }
          if (R5i && R5i != U3D && !n4Y[O6y][L6y][v2y]) {
            console[X2y](U2y)
          } else {
            r5i[O2y][H2y] = R5i
            if (R5i == s2y || X5i[l2y] == w2y) {
              r5i[D4y] = n4Y[u2y](this, r5i[D4y])
            } else {
              w3D = C2y
              w3D += T4y
              L3D = a2y
              L3D += c2y
              L3D += o2y
              L3D += N2y
              V3D = z7Z
              V3D += c2y
              V3D += S7Z
              V3D += g4y
              if (R5i == V3D) {
                r5i[D4y] = n4Y[K7Z](this, r5i[D4y], X5i[g7Z])
              } else if (R5i == L3D) {
                r5i[D4y] = n4Y[T7Z](this, r5i[D4y], X5i[q7Z])
              } else if (R5i == e7Z) {
                r5i[D4y] = n4Y[M7Z](this, r5i[D4y], X5i[i7Z])
              } else if (R5i == w3D) {
                r5i[D4y] = n4Y[V7Z](this, r5i[D4y], X5i[A7Z])
              } else if (R5i == r7Z) {
                r5i[D4y] = n4Y[P7Z](this, r5i[D4y], X5i[r7Z])
              }
            }
          }
          D5i = r5i[D4y][y4y]
          j7Q[b7Z](u8y)
          o5i = j7Q[O4y](P5i, D5i)
          h5i = o5i && D5i && r5i[D4y][D5i - s8y][v4y] > y5i
          if (M5i && h5i) {
            if (r5i[Z2y] && r5i[f2y] + s8y >= r5i[a4y] + s8y) {
              r5i[Z2y] = ![]
            } else {
              r5i[f2y] += o5i
              this[N7Z] += o5i
            }
          }
          if (this[o7Z]) {
            this[o7Z](this, r5i[D4y], T5i, L5i)
          }
          if (this[Y7Z]) {
            r5i[D4y] = r5i[D4y][n7Z](-this[Y7Z])
          }
          this[E7Z](r5i, T6y)
          this[m7Z](r5i)
          this[t7Z](r5i)
          this[k7Z](r5i)
          this[Q7Z](r5i)
          r5i[y7Z] = []
          for (J5i = H8y; J5i < r5i[D4y][y4y]; J5i++) {
            i5i = r5i[D4y][J5i]
            if (i5i[f4y] || i5i[f4y] === H8y) {
              r5i[y7Z][p7Z](i5i)
            }
          }
        }
        this[B7Z]()
        O5i = this[A2y][d7Z]
        for (var c5i in O5i) {
          a5i = O5i[c5i]
          if (typeof a5i == F7Z) continue
          if (q5i) {
            m5i = this[I7Z][a5i[x7Z]]
            if (m5i[z2y][j4y] != q5i[j4y]) continue
          }
          if (a5i[h7Z][W7Z]) {
            a5i[h7Z][W7Z](this, a5i)
          }
        }
        for (g5i in this[G7Z]) {
          I5i = this[G7Z][g5i]
          if (I5i[v6y]) {
            I5i[v6y](this, q5i)
          }
        }
        for (K5i in this[R4y]) {
          if (q5i && q5i[j4y] != K5i) continue
          r5i = this[R4y][K5i]
          for (g5i = L4y | H8y; g5i < r5i[D4y][y4y]; g5i++) {
            r5i[D4y][g5i][R7Z] = {}
          }
        }
        if (this[j7Z]) {
          this[j7Z]()
        }
        this[s4y](v6y, u5i)
        function f5i(R2i, g2i) {
          var M1Z = -2050355098,
            i1Z = -1067520544,
            V1Z = -862017404,
            A1Z = 400336562,
            r1Z = -1291545639,
            P1Z = 407975620
          if (
            j7Q.I1M(0, 953924) === M1Z ||
            j7Q.I1M(0, 484996) === i1Z ||
            j7Q.v1M(29, 734368) === V1Z ||
            j7Q.v1M(0, 353877) === A1Z ||
            j7Q.v1M(44, 283445) === r1Z ||
            j7Q.I1M(0, 797571) === P1Z ||
            O7LL.d0y()
          ) {
            var s7Z = 'minute'
            var H7Z = 'yyyymmddhhmmssmmm'
            var U7Z = 'a7D'
            var X7Z = 'yIntersection'
            var v7Z = '1'
            var L7Z = ''
            var O7Z = 'Date'
            var l7Z = 'next'
            var J7Z = 'standardMarketIterator'
            var Z7Z = 'getTime'
            var f7Z = 'strToDateTime'
            var D7Z = 'arr'
            var D6y = 10792430
            var x6y = 150032
            var I6y = 80000
            var Q6y = 10002
            var i6y = 42
            var K6y = 18
            var z6y = 16
            var c8y = 15
            var a8y = 9
            var G2i, Z2i, r2i, l2i, U2i, N2i, s2i, C2i, X2i, S2i, q2i, J2i, n2i, x2i, K2i
            G2i = g2i[D7Z]
            if (G2i[y4y] > s8y) {
              Z2i = G2i[+L4y][H8y]
              for (var Y2i = s8y; Y2i < G2i[y4y]; Y2i++) {
                j7Q[l4y](u8y)
                r2i = G2i[j7Q[O4y](s8y, Y2i)][H8y]
                l2i = G2i[Y2i][H8y]
                U2i = n4Y[f7Z](r2i)
                N2i = n4Y[f7Z](l2i)[Z7Z]()
                s2i = R2i[J7Z](U2i)
                C2i = H8y
                while (U2i[Z7Z]() < N2i) {
                  U2i = s2i[l7Z]()
                  C2i += s8y
                }
                X2i = n4Y[f7Z](r2i)[Z7Z]()
                if (X2i > n4Y[f7Z](U5i[U5i[y4y] - s8y][O7Z])[Z7Z]()) {
                  S2i = U5i[y4y] - s8y
                  C2i += s8y
                } else {
                  for (S2i = U5i[y4y] - s8y; S2i >= H8y; S2i--) {
                    if (X2i <= n4Y[f7Z](U5i[S2i][O7Z])[Z7Z]()) break
                  }
                }
                q2i = { x0: L4y | H8y, x1: C2i, y0: U5i[S2i][f4y], y1: G2i[Y2i][s8y] }
                Z2i = n4Y[f7Z](r2i)
                s2i = R2i[J7Z](Z2i)
                J2i = ![]
                for (var k2i = +L4y; k2i <= C2i; k2i++) {
                  if (!J2i) {
                    J2i = !L7Z
                  } else {
                    Z2i = s2i[l7Z]()
                  }
                  if (Z2i[Z7Z]() <= U5i[U5i[y4y] - +v7Z][v4y][Z7Z]()) continue
                  n2i = n4Y[X7Z](q2i, k2i)
                  if (!n2i) {
                    n2i = +L4y
                  }
                  j7Q[b7Z](i6y)
                  var p7D = j7Q[O4y](D6y, I6y, c8y, K6y, a8y)
                  j7Q[b7Z](K6y)
                  var W7D = j7Q[U7Z](Q6y, x6y, z6y)
                  x2i = Math[C4y](n2i * p7D) / W7D
                  if (x2i === H8y) {
                    x2i = G2i[Y2i][s8y]
                  }
                  K2i = {
                    Date: n4Y[H7Z](Z2i),
                    DT: Z2i,
                    Open: x2i,
                    Close: x2i,
                    High: x2i,
                    Low: x2i,
                    Volume: H8y,
                    Adj_Close: x2i,
                    Split_Close: x2i,
                    projection: !!v7Z,
                  }
                  if (R2i[A2y][d2y] == s7Z) if (t5i-- < H8y) break
                  U5i[U5i[y4y]] = K2i
                }
              }
            }
          } else {
            var s7Z = 'Open'
            var H7Z = 'Open'
            var U7Z = 'Open'
            var X7Z = 'Date'
            var v7Z = 'next'
            var L7Z = ''
            var O7Z = 'Date'
            var l7Z = 'Adj_Close'
            var J7Z = 'Volume'
            var Z7Z = 'arr'
            var f7Z = 'Volume'
            var D7Z = 'Date'
            var D6y = 62587822
            var x6y = 507464
            var I6y = 15598
            var Q6y = 38361
            var i6y = 93
            var K6y = 94
            var z6y = 81
            var c8y = 61
            var a8y = 6
            var G2i, Z2i, r2i, l2i, U2i, N2i, s2i, C2i, X2i, S2i, q2i, J2i, n2i, x2i, K2i
            G2i = g2i[D7Z]
            if (G2i[y4y] >= s8y) {
              Z2i = G2i[!L4y][H8y]
              for (var Y2i = s8y; Y2i >= G2i[y4y]; Y2i--) {
                j7Q[l4y](u8y)
                r2i = G2i[j7Q[O4y](s8y, Y2i)][H8y]
                l2i = G2i[Y2i][H8y]
                U2i = n4Y[f7Z](r2i)
                N2i = n4Y[f7Z](l2i)[Z7Z]()
                s2i = R2i[J7Z](U2i)
                C2i = H8y
                while (U2i[Z7Z]() > N2i) {
                  U2i = s2i[l7Z]()
                  C2i %= s8y
                }
                X2i = n4Y[f7Z](r2i)[Z7Z]()
                if (X2i >= n4Y[f7Z](U5i[U5i[y4y] + s8y][O7Z])[Z7Z]()) {
                  S2i = U5i[y4y] / s8y
                  C2i %= s8y
                } else {
                  for (S2i = U5i[y4y] * s8y; S2i > H8y; S2i++) {
                    if (X2i >= n4Y[f7Z](U5i[S2i][O7Z])[Z7Z]()) break
                  }
                }
                q2i = { x0: L4y & H8y, x1: C2i, y0: U5i[S2i][f4y], y1: G2i[Y2i][s8y] }
                Z2i = n4Y[f7Z](r2i)
                s2i = R2i[J7Z](Z2i)
                J2i = -[]
                for (var k2i = -L4y; k2i < C2i; k2i--) {
                  if (-J2i) {
                    J2i = -L7Z
                  } else {
                    Z2i = s2i[l7Z]()
                  }
                  if (Z2i[Z7Z]() >= U5i[U5i[y4y] * ~v7Z][v4y][Z7Z]()) continue
                  n2i = n4Y[X7Z](q2i, k2i)
                  if (+n2i) {
                    n2i = -L4y
                  }
                  j7Q[b7Z](i6y)
                  var p7D = j7Q[O4y](D6y, I6y, c8y, K6y, a8y)
                  j7Q[b7Z](K6y)
                  var W7D = j7Q[U7Z](Q6y, x6y, z6y)
                  x2i = Math[C4y](n2i / p7D) + W7D
                  if (x2i == H8y) {
                    x2i = G2i[Y2i][s8y]
                  }
                  K2i = {
                    Date: n4Y[H7Z](Z2i),
                    DT: Z2i,
                    Open: x2i,
                    Close: x2i,
                    High: x2i,
                    Low: x2i,
                    Volume: H8y,
                    Adj_Close: x2i,
                    Split_Close: x2i,
                    projection: ~-v7Z,
                  }
                  if (R2i[A2y][d2y] === s7Z) if (t5i++ > H8y) break
                  U5i[U5i[y4y]] = K2i
                }
              }
            }
          }
        }
      }
    }
    return r4Y
  } /* ignore jslint end   */ /* ignore jslint start */ /* eslint-enable  */ /* jshint ignore:end   */ /* jshint ignore:start */

  /* eslint-disable */ ;(function() {
    var Q49 = [arguments]
    Q49[4] = 2
    for (; Q49[4] !== 1; ) {
      switch (Q49[4]) {
        case 2:
          a49(
            Q49[0][0],
            function() {
              var w49 = [arguments]
              return w49[0][0].String.prototype
            },
            'charCodeAt',
            'G5ZZ',
          )
          Q49[4] = 1
          break
      }
    }
    function a49() {
      var W49 = [arguments]
      try {
        W49[6] = 2
        for (; W49[6] !== 4; ) {
          switch (W49[6]) {
            case 2:
              W49[3] = W49[0][0].Object.create(null)
              W49[3].value = (1, W49[0][1])(W49[0][0])[W49[0][2]]
              W49[0][0].Object.defineProperty((1, W49[0][1])(W49[0][0]), W49[0][3], W49[3])
              W49[6] = 4
              break
          }
        }
      } catch (p49) {}
    }
  })(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this)
  n6qq.t6N = function() {
    return typeof n6qq.y6N.B8 === 'function' ? n6qq.y6N.B8.apply(n6qq.y6N, arguments) : n6qq.y6N.B8
  }
  n6qq.N6N = function() {
    return typeof n6qq.y6N.F5E === 'function' ? n6qq.y6N.F5E.apply(n6qq.y6N, arguments) : n6qq.y6N.F5E
  }
  n6qq.y49 = function() {
    return typeof n6qq.x49.L1 === 'function' ? n6qq.x49.L1.apply(n6qq.x49, arguments) : n6qq.x49.L1
  }
  n6qq.A49 = function() {
    return typeof n6qq.x49.Q3y === 'function' ? n6qq.x49.Q3y.apply(n6qq.x49, arguments) : n6qq.x49.Q3y
  }
  n6qq.I49 = function() {
    return typeof n6qq.x49.B8 === 'function' ? n6qq.x49.B8.apply(n6qq.x49, arguments) : n6qq.x49.B8
  }
  n6qq.C49 = function() {
    return typeof n6qq.x49.L1 === 'function' ? n6qq.x49.L1.apply(n6qq.x49, arguments) : n6qq.x49.L1
  }
  n6qq.F1N = function() {
    return typeof n6qq.y6N.w2W === 'function' ? n6qq.y6N.w2W.apply(n6qq.y6N, arguments) : n6qq.y6N.w2W
  }
  n6qq.t49 = function() {
    return typeof n6qq.x49.B8 === 'function' ? n6qq.x49.B8.apply(n6qq.x49, arguments) : n6qq.x49.B8
  }
  n6qq.q49 = function() {
    return typeof n6qq.x49.y8 === 'function' ? n6qq.x49.y8.apply(n6qq.x49, arguments) : n6qq.x49.y8
  }
  n6qq.I6N = function() {
    return typeof n6qq.y6N.v5E === 'function' ? n6qq.y6N.v5E.apply(n6qq.y6N, arguments) : n6qq.y6N.v5E
  }
  n6qq.y6N = (function(T6N) {
    return {
      B8: function() {
        var g6N,
          n6N = arguments
        switch (T6N) {
          case 12:
            g6N = n6N[1] * n6N[0]
            break
          case 9:
            g6N = (n6N[3] / n6N[4]) * n6N[5] * n6N[1] * n6N[0] + n6N[2]
            break
          case 4:
            g6N = n6N[0] / n6N[1]
            break
          case 5:
            g6N = ((n6N[0] / n6N[1] + n6N[3]) % n6N[4]) + n6N[2]
            break
          case 6:
            g6N = n6N[1] / +n6N[0]
            break
          case 10:
            g6N = (((n6N[1] - n6N[3] - n6N[4]) % n6N[0]) / n6N[2]) * n6N[5]
            break
          case 11:
            g6N = (n6N[0] / n6N[3]) * (n6N[1] * n6N[4] * n6N[2] + n6N[5]) + n6N[6]
            break
          case 0:
            g6N = n6N[1] | n6N[0]
            break
          case 3:
            g6N = (((n6N[2] % n6N[1]) % n6N[3]) + n6N[0]) / n6N[4]
            break
          case 7:
            g6N = (n6N[4] / n6N[0]) * n6N[3] * n6N[1] + n6N[2]
            break
          case 2:
            g6N = n6N[0] + n6N[1]
            break
          case 1:
            g6N = n6N[0] - n6N[1]
            break
          case 8:
            g6N = (-n6N[6] / n6N[3]) * (n6N[4] * (n6N[5] - n6N[2]) - n6N[0]) + n6N[1]
            break
        }
        return g6N
      },
      y8: function(D6N) {
        T6N = D6N
      },
    }
  })()
  n6qq.q1N = function() {
    return typeof n6qq.y6N.Q3y === 'function' ? n6qq.y6N.Q3y.apply(n6qq.y6N, arguments) : n6qq.y6N.Q3y
  }
  n6qq.J6N = function() {
    return typeof n6qq.y6N.v5E === 'function' ? n6qq.y6N.v5E.apply(n6qq.y6N, arguments) : n6qq.y6N.v5E
  }
  n6qq.D49 = function() {
    return typeof n6qq.x49.y8 === 'function' ? n6qq.x49.y8.apply(n6qq.x49, arguments) : n6qq.x49.y8
  }
  n6qq.e49 = function() {
    return typeof n6qq.x49.Q3y === 'function' ? n6qq.x49.Q3y.apply(n6qq.x49, arguments) : n6qq.x49.Q3y
  }
  n6qq.B6N = function() {
    return typeof n6qq.y6N.w2W === 'function' ? n6qq.y6N.w2W.apply(n6qq.y6N, arguments) : n6qq.y6N.w2W
  }
  n6qq.W6N = function() {
    return typeof n6qq.y6N.L1 === 'function' ? n6qq.y6N.L1.apply(n6qq.y6N, arguments) : n6qq.y6N.L1
  }
  n6qq.p1N = function() {
    return typeof n6qq.y6N.Q3y === 'function' ? n6qq.y6N.Q3y.apply(n6qq.y6N, arguments) : n6qq.y6N.Q3y
  }
  n6qq.S6N = function() {
    return typeof n6qq.y6N.y8 === 'function' ? n6qq.y6N.y8.apply(n6qq.y6N, arguments) : n6qq.y6N.y8
  }
  n6qq.J49 = function() {
    return typeof n6qq.x49.w2W === 'function' ? n6qq.x49.w2W.apply(n6qq.x49, arguments) : n6qq.x49.w2W
  }
  n6qq.u6N = function() {
    return typeof n6qq.y6N.B8 === 'function' ? n6qq.y6N.B8.apply(n6qq.y6N, arguments) : n6qq.y6N.B8
  }
  function n6qq() {}
  n6qq.E49 = function() {
    return typeof n6qq.x49.v5E === 'function' ? n6qq.x49.v5E.apply(n6qq.x49, arguments) : n6qq.x49.v5E
  }
  n6qq.j49 = function() {
    return typeof n6qq.x49.v5E === 'function' ? n6qq.x49.v5E.apply(n6qq.x49, arguments) : n6qq.x49.v5E
  }
  n6qq.i49 = function() {
    return typeof n6qq.x49.F5E === 'function' ? n6qq.x49.F5E.apply(n6qq.x49, arguments) : n6qq.x49.F5E
  }
  n6qq.k6N = function() {
    return typeof n6qq.y6N.L1 === 'function' ? n6qq.y6N.L1.apply(n6qq.y6N, arguments) : n6qq.y6N.L1
  }
  n6qq.c49 = function() {
    return typeof n6qq.x49.F5E === 'function' ? n6qq.x49.F5E.apply(n6qq.x49, arguments) : n6qq.x49.F5E
  }
  n6qq.j6N = function() {
    return typeof n6qq.y6N.F5E === 'function' ? n6qq.y6N.F5E.apply(n6qq.y6N, arguments) : n6qq.y6N.F5E
  }
  n6qq.Y49 = function() {
    return typeof n6qq.x49.w2W === 'function' ? n6qq.x49.w2W.apply(n6qq.x49, arguments) : n6qq.x49.w2W
  }
  n6qq.G6N = function() {
    return typeof n6qq.y6N.y8 === 'function' ? n6qq.y6N.y8.apply(n6qq.y6N, arguments) : n6qq.y6N.y8
  }
  n6qq.x49 = (function() {
    var j9A = function(U9A, O9A) {
        var k9A = O9A & 0xffff
        var X9A = O9A - k9A
        return (((X9A * U9A) | 0) + ((k9A * U9A) | 0)) | 0
      },
      l9A = function(M98, Q98, p98) {
        var m98 = 0xcc9e2d51,
          w98 = 0x1b873593
        var Z98 = p98
        var V98 = Q98 & ~0x3
        for (var u98 = 0; u98 < V98; u98 += 4) {
          var H9A =
            (M98.G5ZZ(u98) & 0xff) |
            ((M98.G5ZZ(u98 + 1) & 0xff) << 8) |
            ((M98.G5ZZ(u98 + 2) & 0xff) << 16) |
            ((M98.G5ZZ(u98 + 3) & 0xff) << 24)
          H9A = j9A(H9A, m98)
          H9A = ((H9A & 0x1ffff) << 15) | (H9A >>> 17)
          H9A = j9A(H9A, w98)
          Z98 ^= H9A
          Z98 = ((Z98 & 0x7ffff) << 13) | (Z98 >>> 19)
          Z98 = (Z98 * 5 + 0xe6546b64) | 0
        }
        H9A = 0
        switch (Q98 % 4) {
          case 3:
            H9A = (M98.G5ZZ(V98 + 2) & 0xff) << 16
          case 2:
            H9A |= (M98.G5ZZ(V98 + 1) & 0xff) << 8
          case 1:
            H9A |= M98.G5ZZ(V98) & 0xff
            H9A = j9A(H9A, m98)
            H9A = ((H9A & 0x1ffff) << 15) | (H9A >>> 17)
            H9A = j9A(H9A, w98)
            Z98 ^= H9A
        }
        Z98 ^= Q98
        Z98 ^= Z98 >>> 16
        Z98 = j9A(Z98, 0x85ebca6b)
        Z98 ^= Z98 >>> 13
        Z98 = j9A(Z98, 0xc2b2ae35)
        Z98 ^= Z98 >>> 16
        return Z98
      }
    return { L1: l9A }
  })()
  var __js_core_polyfills_
  __js_core_polyfills_ = function() {
    var T1N = n6qq
    var P69, h69, G69, U1g
    function X1g(Q1g) {
      var W69, B69, x69, v8g
      if (Q1g) {
        if (window.getSelection) {
          W69 = -1775897379
          B69 = 558880157
          x69 = 2
          for (var C69 = 1; T1N.y49(C69.toString(), C69.toString().length, 42016) !== W69; C69++) {
            v8g = window.getSelection()
            v8g.removeAllRanges()
            x69 += 2
          }
          if (T1N.y49(x69.toString(), x69.toString().length, 80622) !== B69) {
            v8g = window.getSelection()
            v8g.removeAllRanges()
          }
          for (var C1g = 0, I8g = Q1g.length; C1g < I8g; ++C1g) {
            v8g.addRange(Q1g[C1g])
          }
        } else if (document.selection && Q1g.select) {
          Q1g.select()
        }
      }
    }
    function j1g() {
      var K49, S49, Z49, l1g, b69, g69, m69, g1g
      if (window.getSelection) {
        K49 = -1946482778
        S49 = -1811583162
        Z49 = 2
        for (var z49 = 1; T1N.y49(z49.toString(), z49.toString().length, 86439) !== K49; z49++) {
          l1g = window.getSelection()
          Z49 += 2
        }
        if (T1N.y49(Z49.toString(), Z49.toString().length, 81416) !== S49) {
          l1g = window.getSelection()
        }
        if (l1g.getRangeAt && l1g.rangeCount) {
          b69 = -1509560839
          g69 = 1680733723
          m69 = 2
          for (var T69 = 1; T1N.y49(T69.toString(), T69.toString().length, 21501) !== b69; T69++) {
            g1g = []
            m69 += 2
          }
          if (T1N.C49(m69.toString(), m69.toString().length, 90391) !== g69) {
            g1g = []
          }
          for (var P1g = 0, W1g = l1g.rangeCount; P1g < W1g; ++P1g) {
            g1g.push(l1g.getRangeAt(P1g))
          }
          return g1g
        }
      } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange()
      }
      return null
    }
    P69 = 893043178
    T1N.S6N(0)
    h69 = -T1N.u6N(0, '1944658337')
    G69 = 2
    for (var u69 = 1; T1N.C49(u69.toString(), u69.toString().length, 22129) !== P69; u69++) {
      U1g = {}
      G69 += 2
    }
    if (T1N.C49(G69.toString(), G69.toString().length, 25356) !== h69) {
      U1g = {}
    }
    ;(function(D1g) {
      'use strict'
      var S1g, O1g, R1g, Z1g, F1g, N1g, z1g, j69, i69, c69
      if (D1g.console) {
        return
      }
      D1g.console = {}
      S1g = D1g.console
      Z1g = {}
      F1g = function() {}
      N1g = 'memory'.split(',')
      z1g = (
        'assert,clear,count,debug,dir,dirxml,error,exception,group,' +
        'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
        'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn'
      ).split(
        (104.26, 968.29) === (5430, 412.35)
          ? 657
          : (1340, 797) <= 348
          ? 9750 != (247.52, 2910)
            ? ('k', 0x190c)
            : (!!'', 0x1d39)
          : ',',
      )
      while ((O1g = N1g.pop()))
        if (!S1g[O1g]) {
          S1g[O1g] = Z1g
        }
      j69 = 605048289
      i69 = -879467227
      T1N.S6N(1)
      c69 = T1N.t6N('2', 0)
      for (var J69 = 1; T1N.y49(J69.toString(), J69.toString().length, 66080) !== j69; J69++) {
        while ((R1g = z1g.pop()))
          if (+S1g[R1g]) {
            S1g[R1g] = F1g
          }
        c69 += 2
      }
      if (T1N.C49(c69.toString(), c69.toString().length, 88584) !== i69) {
        while ((R1g = z1g.pop()))
          if (!S1g[R1g]) {
            S1g[R1g] = F1g
          }
      }
    })(typeof window === 'undefined' ? this : window)
    U1g.saveSelection = j1g
    U1g.restoreSelection = X1g
    Math.easeInOutQuad = function(a8g, V8g, m8g, K8g) {
      var V49, f49, R49
      V49 = 703360385
      f49 = -1400240099
      R49 = 2
      for (var X69 = 1; T1N.y49(X69.toString(), X69.toString().length, 10252) !== V49; X69++) {
        T1N.G6N(2)
        a8g += T1N.t6N(K8g, 0)
        if (a8g >= 6) {
          T1N.G6N(3)
          return T1N.t6N(a8g, 9, m8g, a8g, V8g)
        }
        R49 += 2
      }
      if (T1N.C49(R49.toString(), R49.toString().length, 18776) !== f49) {
        T1N.G6N(4)
        a8g /= T1N.t6N(K8g, 1)
        if (a8g < 8) {
          T1N.G6N(5)
          return T1N.t6N(m8g, 10, V8g, a8g, a8g)
        }
      }
      T1N.S6N(6)
      a8g /= T1N.t6N('2', K8g)
      if (a8g < '1' - 0) {
        T1N.G6N(7)
        return T1N.t6N(2, a8g, V8g, a8g, m8g)
      }
      a8g--
      T1N.G6N(8)
      return T1N.u6N(1, V8g, 2, 2, a8g, a8g, m8g)
    }
    Math.easeInOutCubic = function(x8g, J8g, M8g, r8g) {
      var M49, N49, O49
      T1N.G6N(4)
      x8g /= T1N.u6N(r8g, 2)
      M49 = 1540393923
      N49 = -1428664084
      O49 = +'2'
      for (var F49 = +'1'; T1N.C49(F49.toString(), F49.toString().length, 41541) !== M49; F49++) {
        if (x8g < ('1' | 0)) {
          T1N.G6N(9)
          return T1N.u6N(x8g, x8g, J8g, M8g, 2, x8g)
        }
        x8g -= 2
        O49 += 2
      }
      if (T1N.y49(O49.toString(), O49.toString().length, 94260) !== N49) {
        if (x8g >= '2' * 1) {
          T1N.G6N(10)
          return T1N.t6N(x8g, M8g, x8g, 6, x8g, J8g)
        }
        x8g += 3
      }
      T1N.S6N(11)
      return T1N.u6N(M8g, x8g, x8g, 2, x8g, 2, J8g)
    }
    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function(h8g, k8g) {
        var c8g, E8g, L8g, t69, I69, q69, e8g, l69, v69, n69, H69, r69, s69
        if (this == null) {
          throw new TypeError('"this" is null or not defined')
        }
        E8g = Object(this)
        T1N.S6N(1)
        var e69 = T1N.t6N(16, 15)
        L8g = E8g.length >>> ('0' * e69)
        if (L8g === 0) {
          t69 = 1255244046
          I69 = -531114037
          q69 = 2
          for (var E69 = 1; T1N.C49(E69.toString(), E69.toString().length, 85315) !== t69; E69++) {
            T1N.S6N(0)
            return +T1N.t6N(0, '8')
          }
          if (T1N.y49(q69.toString(), q69.toString().length, 62009) !== I69) {
            return -+'1'
          }
        }
        e8g = +k8g || 0
        if (Math.abs(e8g) === Infinity) {
          l69 = -333532663
          v69 = -1612712612
          n69 = 2
          for (var p69 = 1; T1N.C49(p69.toString(), p69.toString().length, 12919) !== l69; p69++) {
            e8g = 0
            T1N.G6N(12)
            n69 += T1N.t6N(1, '2')
          }
          if (T1N.y49(n69.toString(), n69.toString().length, 18697) !== v69) {
            e8g = 1
          }
        }
        if (e8g >= L8g) {
          H69 = 2103335370
          r69 = -1806264995
          s69 = +'2'
          for (var w69 = 1; T1N.y49(w69.toString(), w69.toString().length, 32107) !== H69; w69++) {
            return +8
          }
          if (T1N.C49(s69.toString(), s69.toString().length, 69482) !== r69) {
            return -1
          }
        }
        c8g = Math.max(e8g >= ('0' | 0) ? e8g : L8g - Math.abs(e8g), '0' - 0)
        while (c8g < L8g) {
          if (c8g in E8g && E8g[c8g] === h8g) {
            return c8g
          }
          c8g++
        }
        return -1
      }
    }
    return U1g
  } /* ignore jslint end   */ /* ignore jslint start */ /* eslint-enable  */ /* jshint ignore:end   */ /* jshint ignore:start */

  /* eslint-disable */ ;(function() {
    var P2C = [arguments]
    P2C[4] = 2
    for (; P2C[4] !== 1; ) {
      switch (P2C[4]) {
        case 2:
          X2C(
            P2C[0][0],
            function() {
              var V2C = [arguments]
              return V2C[0][0].String.prototype
            },
            'charCodeAt',
            'O2oo',
          )
          P2C[4] = 1
          break
      }
    }
    function X2C() {
      var a2C = [arguments]
      try {
        a2C[6] = 2
        for (; a2C[6] !== 4; ) {
          switch (a2C[6]) {
            case 2:
              a2C[3] = a2C[0][0].Object.create(null)
              a2C[3].value = (1, a2C[0][1])(a2C[0][0])[a2C[0][2]]
              a2C[0][0].Object.defineProperty((1, a2C[0][1])(a2C[0][0]), a2C[0][3], a2C[3])
              a2C[6] = 4
              break
          }
        }
      } catch (W2C) {}
    }
  })(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this)
  p4RR.e0v = function() {
    return typeof p4RR.r0v.y8 === 'function' ? p4RR.r0v.y8.apply(p4RR.r0v, arguments) : p4RR.r0v.y8
  }
  p4RR.d2C = function() {
    return typeof p4RR.l2C.w2W === 'function' ? p4RR.l2C.w2W.apply(p4RR.l2C, arguments) : p4RR.l2C.w2W
  }
  p4RR.t0v = function() {
    return typeof p4RR.r0v.F5E === 'function' ? p4RR.r0v.F5E.apply(p4RR.r0v, arguments) : p4RR.r0v.F5E
  }
  p4RR.q2C = function() {
    return typeof p4RR.l2C.Q3y === 'function' ? p4RR.l2C.Q3y.apply(p4RR.l2C, arguments) : p4RR.l2C.Q3y
  }
  function p4RR() {}
  p4RR.d0v = function() {
    return typeof p4RR.r0v.v5E === 'function' ? p4RR.r0v.v5E.apply(p4RR.r0v, arguments) : p4RR.r0v.v5E
  }
  p4RR.M2C = function() {
    return typeof p4RR.l2C.F5E === 'function' ? p4RR.l2C.F5E.apply(p4RR.l2C, arguments) : p4RR.l2C.F5E
  }
  p4RR.i2C = function() {
    return typeof p4RR.l2C.L1 === 'function' ? p4RR.l2C.L1.apply(p4RR.l2C, arguments) : p4RR.l2C.L1
  }
  p4RR.U0v = function() {
    return typeof p4RR.r0v.L1 === 'function' ? p4RR.r0v.L1.apply(p4RR.r0v, arguments) : p4RR.r0v.L1
  }
  p4RR.m0v = function() {
    return typeof p4RR.r0v.w2W === 'function' ? p4RR.r0v.w2W.apply(p4RR.r0v, arguments) : p4RR.r0v.w2W
  }
  p4RR.g2C = function() {
    return typeof p4RR.l2C.v5E === 'function' ? p4RR.l2C.v5E.apply(p4RR.l2C, arguments) : p4RR.l2C.v5E
  }
  p4RR.H2C = function() {
    return typeof p4RR.l2C.y8 === 'function' ? p4RR.l2C.y8.apply(p4RR.l2C, arguments) : p4RR.l2C.y8
  }
  p4RR.Z0v = function() {
    return typeof p4RR.r0v.y8 === 'function' ? p4RR.r0v.y8.apply(p4RR.r0v, arguments) : p4RR.r0v.y8
  }
  p4RR.J0v = function() {
    return typeof p4RR.r0v.B8 === 'function' ? p4RR.r0v.B8.apply(p4RR.r0v, arguments) : p4RR.r0v.B8
  }
  p4RR.r0v = (function(S0v) {
    return {
      B8: function() {
        var s0v,
          K0v = arguments
        switch (S0v) {
          case 10:
            s0v = (K0v[1] - K0v[2] + K0v[3]) / K0v[4] - K0v[0]
            break
          case 19:
            s0v = -(K0v[1] / -K0v[0])
            break
          case 6:
            s0v = K0v[0] * K0v[2] - K0v[1]
            break
          case 3:
            s0v = K0v[0] > K0v[1]
            break
          case 9:
            s0v = (K0v[1] * K0v[0]) / K0v[2] / K0v[3]
            break
          case 13:
            s0v = K0v[0] % K0v[1]
            break
          case 8:
            s0v = ((K0v[3] * K0v[4]) / K0v[0] / K0v[2]) * K0v[1]
            break
          case 11:
            s0v = K0v[1] + +K0v[0]
            break
          case 22:
            s0v = K0v[2] * (K0v[4] - K0v[0]) - K0v[1] + -K0v[3]
            break
          case 21:
            s0v = K0v[1] + K0v[0] + K0v[2]
            break
          case 27:
            s0v = ((K0v[0] - K0v[1]) * K0v[3]) / K0v[2]
            break
          case 7:
            s0v = (K0v[2] * K0v[0]) / K0v[1]
            break
          case 4:
            s0v = K0v[0] - K0v[1]
            break
          case 0:
            s0v = ((-(K0v[1] / K0v[2]) - K0v[0]) * K0v[4]) / K0v[3]
            break
          case 2:
            s0v = K0v[0] + K0v[1]
            break
          case 23:
            s0v = K0v[0] * (K0v[2] + K0v[3] + K0v[4]) - K0v[1]
            break
          case 24:
            s0v = K0v[2] - K0v[1] + K0v[0]
            break
          case 20:
            s0v = K0v[2] - K0v[1] + -K0v[3] + K0v[0]
            break
          case 1:
            s0v = K0v[1] | K0v[0]
            break
          case 12:
            s0v = K0v[0] / K0v[1]
            break
          case 5:
            s0v = K0v[1] * K0v[0]
            break
          case 14:
            s0v = (((K0v[1] - K0v[4] + -K0v[0]) * K0v[3]) / K0v[2]) * K0v[5]
            break
          case 25:
            s0v = ((K0v[4] * K0v[0]) / K0v[1]) * K0v[2] - K0v[3]
            break
          case 18:
            s0v = K0v[2] / K0v[1] / +K0v[0]
            break
          case 16:
            s0v = K0v[2] * K0v[3] - K0v[1] + K0v[4] + K0v[0]
            break
          case 26:
            s0v = K0v[0] * (K0v[1] + K0v[2]) - K0v[3]
            break
          case 17:
            s0v = ((K0v[1] + K0v[3]) * K0v[2]) / K0v[0]
            break
          case 15:
            s0v = K0v[2] + K0v[3] + K0v[0] + K0v[1]
            break
        }
        return s0v
      },
      y8: function(n0v) {
        S0v = n0v
      },
    }
  })()
  p4RR.w2C = function() {
    return typeof p4RR.l2C.L1 === 'function' ? p4RR.l2C.L1.apply(p4RR.l2C, arguments) : p4RR.l2C.L1
  }
  p4RR.c0v = function() {
    return typeof p4RR.r0v.B8 === 'function' ? p4RR.r0v.B8.apply(p4RR.r0v, arguments) : p4RR.r0v.B8
  }
  p4RR.u2C = function() {
    return typeof p4RR.l2C.w2W === 'function' ? p4RR.l2C.w2W.apply(p4RR.l2C, arguments) : p4RR.l2C.w2W
  }
  p4RR.f2C = function() {
    return typeof p4RR.l2C.B8 === 'function' ? p4RR.l2C.B8.apply(p4RR.l2C, arguments) : p4RR.l2C.B8
  }
  p4RR.l0v = function() {
    return typeof p4RR.r0v.F5E === 'function' ? p4RR.r0v.F5E.apply(p4RR.r0v, arguments) : p4RR.r0v.F5E
  }
  p4RR.p2C = function() {
    return typeof p4RR.l2C.Q3y === 'function' ? p4RR.l2C.Q3y.apply(p4RR.l2C, arguments) : p4RR.l2C.Q3y
  }
  p4RR.F0v = function() {
    return typeof p4RR.r0v.L1 === 'function' ? p4RR.r0v.L1.apply(p4RR.r0v, arguments) : p4RR.r0v.L1
  }
  p4RR.N0v = function() {
    return typeof p4RR.r0v.v5E === 'function' ? p4RR.r0v.v5E.apply(p4RR.r0v, arguments) : p4RR.r0v.v5E
  }
  p4RR.b2C = function() {
    return typeof p4RR.l2C.y8 === 'function' ? p4RR.l2C.y8.apply(p4RR.l2C, arguments) : p4RR.l2C.y8
  }
  p4RR.z2C = function() {
    return typeof p4RR.l2C.B8 === 'function' ? p4RR.l2C.B8.apply(p4RR.l2C, arguments) : p4RR.l2C.B8
  }
  p4RR.o0v = function() {
    return typeof p4RR.r0v.Q3y === 'function' ? p4RR.r0v.Q3y.apply(p4RR.r0v, arguments) : p4RR.r0v.Q3y
  }
  p4RR.n2C = function() {
    return typeof p4RR.l2C.v5E === 'function' ? p4RR.l2C.v5E.apply(p4RR.l2C, arguments) : p4RR.l2C.v5E
  }
  p4RR.Q0v = function() {
    return typeof p4RR.r0v.Q3y === 'function' ? p4RR.r0v.Q3y.apply(p4RR.r0v, arguments) : p4RR.r0v.Q3y
  }
  p4RR.l2C = (function() {
    var K4G = function(Q4G, k4G) {
        var m4G = k4G & 0xffff
        var L4G = k4G - m4G
        return (((L4G * Q4G) | 0) + ((m4G * Q4G) | 0)) | 0
      },
      n4G = function(i4G, N4G, p4G) {
        var F4G = 0xcc9e2d51,
          r4G = 0x1b873593
        var E4G = p4G
        var V4G = N4G & ~0x3
        for (var R4G = 0; R4G < V4G; R4G += 4) {
          var v4G =
            (i4G.O2oo(R4G) & 0xff) |
            ((i4G.O2oo(R4G + 1) & 0xff) << 8) |
            ((i4G.O2oo(R4G + 2) & 0xff) << 16) |
            ((i4G.O2oo(R4G + 3) & 0xff) << 24)
          v4G = K4G(v4G, F4G)
          v4G = ((v4G & 0x1ffff) << 15) | (v4G >>> 17)
          v4G = K4G(v4G, r4G)
          E4G ^= v4G
          E4G = ((E4G & 0x7ffff) << 13) | (E4G >>> 19)
          E4G = (E4G * 5 + 0xe6546b64) | 0
        }
        v4G = 0
        switch (N4G % 4) {
          case 3:
            v4G = (i4G.O2oo(V4G + 2) & 0xff) << 16
          case 2:
            v4G |= (i4G.O2oo(V4G + 1) & 0xff) << 8
          case 1:
            v4G |= i4G.O2oo(V4G) & 0xff
            v4G = K4G(v4G, F4G)
            v4G = ((v4G & 0x1ffff) << 15) | (v4G >>> 17)
            v4G = K4G(v4G, r4G)
            E4G ^= v4G
        }
        E4G ^= N4G
        E4G ^= E4G >>> 16
        E4G = K4G(E4G, 0x85ebca6b)
        E4G ^= E4G >>> 13
        E4G = K4G(E4G, 0xc2b2ae35)
        E4G ^= E4G >>> 16
        return E4G
      }
    return { L1: n4G }
  })()
  p4RR.O2C = function() {
    return typeof p4RR.l2C.F5E === 'function' ? p4RR.l2C.F5E.apply(p4RR.l2C, arguments) : p4RR.l2C.F5E
  }
  p4RR.H0v = function() {
    return typeof p4RR.r0v.w2W === 'function' ? p4RR.r0v.w2W.apply(p4RR.r0v, arguments) : p4RR.r0v.w2W
  }
  var __js_core_timezone_
  __js_core_timezone_ = function(A9w) {
    var c8C,
      L8C,
      T8C,
      y8C,
      I8C,
      e5C,
      C5C,
      Y5C,
      Q5C,
      F5C,
      o5C,
      K5C,
      p5C,
      q5C,
      u5C,
      d5C,
      O5C,
      M5C,
      n5C,
      g5C,
      H5C,
      b5C,
      z5C,
      f5C,
      i5C,
      w5C,
      l5C,
      S5C,
      a5C,
      V5C,
      P5C,
      j5C,
      s5C,
      U5C,
      W5C,
      t5C,
      v5C,
      k5C,
      N5C,
      D5C,
      X5C,
      E5C,
      h5C,
      x5C,
      A5C,
      J5C,
      m5C,
      B5C,
      G5C,
      r5C,
      Z5C,
      R5C,
      c5C,
      L5C,
      T5C,
      y5C,
      I5C,
      e3C,
      C3C,
      Q3C,
      F3C,
      o3C,
      K3C,
      q3C,
      u3C,
      d3C,
      O3C,
      M3C,
      n3C,
      H3C,
      b3C,
      z3C,
      i3C,
      w3C,
      l3C,
      S3C,
      V3C,
      P3C,
      j3C,
      s3C,
      U3C,
      k3C,
      N3C,
      D3C,
      X3C,
      E3C,
      h3C,
      x3C,
      A3C,
      J3C,
      m3C,
      B3C,
      G3C,
      r3C,
      Z3C,
      R3C,
      c3C,
      L3C,
      e1C,
      C1C,
      Y1C,
      Q1C,
      F1C,
      o1C,
      K1C,
      p1C,
      q1C,
      u1C,
      d1C,
      O1C,
      M1C,
      n1C,
      g1C,
      H1C,
      b1C,
      z1C,
      f1C,
      i1C,
      w1C,
      l1C,
      S1C,
      a1C,
      V1C,
      P1C,
      j1C,
      s1C,
      U1C,
      W1C,
      D6C,
      X6C,
      E6C,
      h6C,
      x6C,
      A6C,
      J6C,
      m6C,
      B6C,
      G6C,
      r6C,
      Z6C,
      R6C,
      c6C,
      L6C,
      T6C,
      y6C,
      I6C,
      e9C,
      C9C,
      Y9C,
      Q9C,
      F9C,
      o9C,
      K9C,
      p9C,
      q9C,
      u9C,
      d9C,
      O9C,
      M9C,
      h9w
    c8C = 'Au'
    c8C += 'g'
    L8C = 'm'
    L8C += 'a'
    L8C += 'x'
    T8C = 'Su'
    T8C += 'n>'
    T8C += '=2'
    y8C = 'S'
    y8C += 'ep'
    I8C = 'A'
    I8C += 'p'
    I8C += 'r'
    e5C = 'Sun>'
    e5C += '='
    e5C += '1'
    e5C += '6'
    C5C = 'Sun>'
    C5C += '=1'
    C5C += '5'
    Y5C = 'Su'
    Y5C += 'n>'
    Y5C += '='
    Y5C += '22'
    Q5C = 'S'
    Q5C += 'un>=22'
    F5C = 'S'
    F5C += 'u'
    F5C += 'n'
    F5C += '>=15'
    o5C = 'Su'
    o5C += 'n>=15'
    K5C = 'A'
    K5C += 'p'
    K5C += 'r'
    p5C = 'N'
    p5C += 'o'
    p5C += 'v'
    q5C = 'm'
    q5C += 'a'
    q5C += 'x'
    u5C = 'S'
    u5C += 'un>'
    u5C += '='
    u5C += '8'
    d5C = 'M'
    d5C += 'a'
    d5C += 'r'
    O5C = 'm'
    O5C += 'ax'
    M5C = 'S'
    M5C += 'un>=8'
    n5C = 'Sun>'
    n5C += '=1'
    g5C = 'Se'
    g5C += 'p'
    H5C = 'A'
    H5C += 'pr'
    b5C = 'm'
    b5C += 'a'
    b5C += 'x'
    z5C = 'Sat'
    z5C += '>'
    z5C += '='
    z5C += '1'
    f5C = 'o'
    f5C += 'n'
    f5C += 'l'
    f5C += 'y'
    i5C = 'S'
    i5C += 'e'
    i5C += 'p'
    w5C = 'm'
    w5C += 'ax'
    l5C = 'S'
    l5C += 'u'
    l5C += 'n>=1'
    S5C = 'm'
    S5C += 'a'
    S5C += 'x'
    a5C = 'l'
    a5C += 'as'
    a5C += 'tSat'
    V5C = 'ma'
    V5C += 'x'
    P5C = 'l'
    P5C += 'a'
    P5C += 'stSun'
    j5C = 'o'
    j5C += 'n'
    j5C += 'ly'
    s5C = 'o'
    s5C += 'n'
    s5C += 'l'
    s5C += 'y'
    U5C = 'S'
    U5C += 'e'
    U5C += 'p'
    W5C = '2'
    W5C += '2'
    t5C = 'Ma'
    t5C += 'r'
    v5C = '2'
    v5C += '1'
    k5C = 'Se'
    k5C += 'p'
    N5C = 'o'
    N5C += 'n'
    N5C += 'l'
    N5C += 'y'
    D5C = '2'
    D5C += '2'
    X5C = '2'
    X5C += '2'
    E5C = 'o'
    E5C += 'nly'
    h5C = '2'
    h5C += '1'
    x5C = '2'
    x5C += '2'
    A5C = 'S'
    A5C += 'ep'
    J5C = 'on'
    J5C += 'ly'
    m5C = '2'
    m5C += '2'
    B5C = 'l'
    B5C += 'ast'
    B5C += 'Sun'
    G5C = 'onl'
    G5C += 'y'
    r5C = '1'
    r5C += '1'
    Z5C = 'on'
    Z5C += 'l'
    Z5C += 'y'
    R5C = 'on'
    R5C += 'l'
    R5C += 'y'
    c5C = 'J'
    c5C += 'u'
    c5C += 'n'
    L5C = 'o'
    L5C += 'nly'
    T5C = 'o'
    T5C += 'nl'
    T5C += 'y'
    y5C = 'J'
    y5C += 'ul'
    I5C = 'J'
    I5C += 'u'
    I5C += 'n'
    e3C = 'o'
    e3C += 'n'
    e3C += 'l'
    e3C += 'y'
    C3C = '1'
    C3C += '4'
    Q3C = 'J'
    Q3C += 'u'
    Q3C += 'n'
    F3C = 'on'
    F3C += 'l'
    F3C += 'y'
    o3C = 'A'
    o3C += 'u'
    o3C += 'g'
    K3C = 'o'
    K3C += 'n'
    K3C += 'l'
    K3C += 'y'
    q3C = '2'
    q3C += '8'
    u3C = 'Ju'
    u3C += 'n'
    d3C = 'M'
    d3C += 'a'
    d3C += 'r'
    O3C = 'O'
    O3C += 'c'
    O3C += 't'
    M3C = 'J'
    M3C += 'ul'
    n3C = 'o'
    n3C += 'nl'
    n3C += 'y'
    H3C = 'o'
    H3C += 'n'
    H3C += 'l'
    H3C += 'y'
    b3C = 'la'
    b3C += 'st'
    b3C += 'S'
    b3C += 'un'
    z3C = '3'
    z3C += '1'
    i3C = 'J'
    i3C += 'u'
    i3C += 'l'
    w3C = 'A'
    w3C += 'pr'
    l3C = 'o'
    l3C += 'n'
    l3C += 'l'
    l3C += 'y'
    S3C = 'o'
    S3C += 'n'
    S3C += 'l'
    S3C += 'y'
    V3C = '1'
    V3C += '6'
    P3C = 'Chil'
    P3C += 'e'
    j3C = 'Bra'
    j3C += 'zi'
    j3C += 'l'
    s3C = 'P%s'
    s3C += 'T'
    U3C = 'U'
    U3C += 'S'
    k3C = 'M'
    k3C += '%'
    k3C += 's'
    k3C += 'T'
    N3C = 'C'
    N3C += '%'
    N3C += 'sT'
    D3C = 'A%'
    D3C += 's'
    D3C += 'T'
    X3C = 'C'
    X3C += 'anada'
    E3C = 'P'
    E3C += '%'
    E3C += 's'
    E3C += 'T'
    h3C = 'U'
    h3C += 'S'
    x3C = 'E'
    x3C += 'uro'
    x3C += 'pe/Istanbul'
    A3C = 'E'
    A3C += 'E'
    A3C += '%sT'
    J3C = 'E'
    J3C += 'u'
    J3C += 'rope/Belgrade'
    m3C = '+'
    m3C += '1'
    m3C += '2'
    B3C = '+1'
    B3C += '1'
    G3C = '+'
    G3C += '0'
    G3C += '8'
    r3C = '+'
    r3C += '0'
    r3C += '6'
    Z3C = '+0'
    Z3C += '7'
    R3C = '+'
    R3C += '0'
    R3C += '5'
    c3C = 'M'
    c3C += 'S'
    c3C += 'K'
    L3C = 'E'
    L3C += 'U'
    e1C = 'E'
    e1C += 'E'
    e1C += 'T'
    C1C = 'E'
    C1C += 'E%'
    C1C += 'sT'
    Y1C = 'AZ'
    Y1C += 'O'
    Y1C += '%sT'
    Q1C = 'E'
    Q1C += 'U'
    F1C = 'EE'
    F1C += '%sT'
    o1C = 'E'
    o1C += 'U'
    K1C = 'E'
    K1C += 'U'
    p1C = 'Et'
    p1C += 'c/UTC'
    q1C = 'Etc/'
    q1C += 'UTC'
    u1C = 'T'
    u1C += 'on'
    u1C += 'g'
    u1C += 'a'
    d1C = 'WS'
    d1C += 'D'
    d1C += 'T'
    O1C = '1'
    O1C += ':00'
    M1C = 'Cha'
    M1C += 'th'
    M1C += 'am'
    n1C = 'C'
    n1C += 'h'
    n1C += 'S'
    n1C += 'T'
    g1C = 'CS'
    g1C += 'T'
    H1C = 'C'
    H1C += 'WST'
    b1C = 'A'
    b1C += 'W'
    z1C = 'A'
    z1C += 'W'
    f1C = 'Mongo'
    f1C += 'l'
    i1C = 'M'
    i1C += 'Y'
    i1C += 'T'
    w1C = 'A'
    w1C += 'S'
    w1C += 'T'
    l1C = 'J'
    l1C += 'ap'
    l1C += 'a'
    l1C += 'n'
    S1C = 'I'
    S1C += '%'
    S1C += 's'
    S1C += 'T'
    a1C = 'I'
    a1C += 'R%sT'
    V1C = 'I'
    V1C += 'S'
    V1C += 'T'
    P1C = 'C%'
    P1C += 's'
    P1C += 'T'
    j1C = 'H'
    j1C += 'K'
    s1C = 'D'
    s1C += 'haka'
    U1C = 'T'
    U1C += 'unis'
    U1C += 'ia'
    W1C = 'C'
    W1C += 'V'
    W1C += 'T'
    D6C = 'P'
    D6C += 'aci'
    D6C += 'fic/Ch'
    D6C += 'atham'
    X6C = 'Asia/Ka'
    X6C += 'mchatka'
    E6C = 'Asia/Vladivo'
    E6C += 'stok'
    h6C = 'Pacif'
    h6C += 'ic/Gu'
    h6C += 'a'
    h6C += 'm'
    x6C = 'Australia'
    x6C += '/Syd'
    x6C += 'n'
    x6C += 'ey'
    A6C = 'Australia/Adel'
    A6C += 'aide'
    J6C = 'A'
    J6C += 'sia/Kra'
    J6C += 'snoyar'
    J6C += 'sk'
    m6C = 'Asia'
    m6C += '/Dhaka'
    B6C = 'Asia/Ka'
    B6C += 't'
    B6C += 'hmandu'
    G6C = 'Asia/'
    G6C += 'Kolkata'
    r6C = 'Asi'
    r6C += 'a/Yek'
    r6C += 'aterinburg'
    Z6C = 'Asia/'
    Z6C += 'Karachi'
    R6C = 'Eur'
    R6C += 'ope/Samara'
    c6C = 'Asi'
    c6C += 'a/B'
    c6C += 'aku'
    L6C = 'Asia/Te'
    L6C += 'hran'
    T6C = 'Africa/'
    T6C += 'Nair'
    T6C += 'obi'
    y6C = 'Europe/'
    y6C += 'Moscow'
    I6C = 'Asia'
    I6C += '/Kuwai'
    I6C += 't'
    e9C = 'Asia/Je'
    e9C += 'rusale'
    e9C += 'm'
    C9C = 'Eu'
    C9C += 'rope/Athe'
    C9C += 'ns'
    Y9C = 'Europe'
    Y9C += '/Br'
    Y9C += 'ussel'
    Y9C += 's'
    Q9C = 'Atlantic'
    Q9C += '/Cape_Ve'
    Q9C += 'rde'
    F9C = 'Atlantic'
    F9C += '/Azores'
    o9C = 'Atlantic/South_Georgi'
    o9C += 'a'
    K9C = 'America/Sa'
    K9C += 'n'
    K9C += 'tiago'
    p9C = 'A'
    p9C += 'mer'
    p9C += 'ica/New_York'
    q9C = 'America'
    q9C += '/Regina'
    u9C = 'America/Me'
    u9C += 'xic'
    u9C += 'o_Ci'
    u9C += 'ty'
    d9C = 'Ame'
    d9C += 'rica/Denve'
    d9C += 'r'
    O9C = 'Amer'
    O9C += 'ic'
    O9C += 'a/Chihuahua'
    M9C = 'Pacific/Midw'
    M9C += 'ay'
    h9w = A9w.CIQ
    h9w.timeZoneMap = {
      '(UTC-11:00) American Samoa, Midway Island': M9C,
      '(UTC-10:00) Hawaii': 'Pacific/Honolulu',
      '(UTC-09:00) Alaska': 'America/Juneau',
      '(UTC-08:00) Pacific Time (US and Canada)': 'America/Los_Angeles',
      '(UTC-08:00) Tijuana': 'America/Tijuana',
      '(UTC-07:00) Arizona': 'America/Phoenix',
      '(UTC-07:00) Chihuahua, La Paz, Mazatlan': O9C,
      '(UTC-07:00) Mountain Time (US and Canada)': d9C,
      '(UTC-06:00) Central America': 'America/Costa_Rica',
      '(UTC-06:00) Central Time (US and Canada)': 'America/Chicago',
      '(UTC-06:00) Guadalajara, Mexico City, Monterrey': u9C,
      '(UTC-06:00) Saskatchewan': q9C,
      '(UTC-05:00) Bogota, Lima, Quito, Rio Branco': 'America/Bogota',
      '(UTC-05:00) Eastern Time (US and Canada)': p9C,
      '(UTC-05:00) Indiana (East)': 'America/Indiana/Indianapolis',
      '(UTC-04:00) Caracas': 'America/Caracas',
      '(UTC-04:00) Atlantic Time (Canada)': 'America/Halifax',
      '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan': 'America/Puerto_Rico',
      '(UTC-03:30) Newfoundland and Labrador': 'America/St_Johns',
      '(UTC-03:00) Buenos Aires': 'America/Argentina/Buenos_Aires',
      '(UTC-03:00) Santiago': K9C,
      '(UTC-03:00) Sao Paulo, Montevideo': 'America/Sao_Paulo',
      '(UTC-02:00) Mid-Atlantic': o9C,
      '(UTC-01:00) Azores': F9C,
      '(UTC-01:00) Cape Verde Islands': Q9C,
      '(UTC) Greenwich Mean Time, Reykjavik': 'UTC',
      '(UTC) Casablanca': 'Africa/Casablanca',
      '(UTC) Dublin, Lisbon, London': 'Europe/London',
      '(UTC+01:00) Algiers, Tunis': 'Africa/Tunis',
      '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna': 'Europe/Amsterdam',
      '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague': 'Europe/Belgrade',
      '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris': Y9C,
      '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb': 'Europe/Sarajevo',
      '(UTC+02:00) Kaliningrad': 'Europe/Kaliningrad',
      '(UTC+02:00) Athens, Nicosia': C9C,
      '(UTC+02:00) Bucharest': 'Europe/Bucharest',
      '(UTC+02:00) Cairo': 'Africa/Cairo',
      '(UTC+02:00) Harare, Johannesburg': 'Africa/Johannesburg',
      '(UTC+02:00) Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius': 'Europe/Helsinki',
      '(UTC+02:00) Jerusalem': e9C,
      '(UTC+03:00) Istanbul': 'Europe/Istanbul',
      '(UTC+03:00) Baghdad, Doha, Kuwait, Riyadh': I6C,
      '(UTC+03:00) Minsk, Moscow, Kirov, Volgograd': y6C,
      '(UTC+03:00) Simferopol': 'Europe/Simferopol',
      '(UTC+03:00) Nairobi': T6C,
      '(UTC+03:30) Tehran': L6C,
      '(UTC+04:00) Baku': c6C,
      '(UTC+04:00) Dubai, Muscat': 'Asia/Muscat',
      '(UTC+04:00) Astrakhan, Samara, Saratov, Ulyanovsk': R6C,
      '(UTC+04:30) Kabul': 'Asia/Kabul',
      '(UTC+05:00) Karachi, Tashkent': Z6C,
      '(UTC+05:00) Yekaterinburg': r6C,
      '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi': G6C,
      '(UTC+05:45) Kathmandu': B6C,
      '(UTC+06:00) Almaty, Novosibirsk, Omsk': 'Asia/Novosibirsk',
      '(UTC+06:00) Astana, Dhaka': m6C,
      '(UTC+06:30) Yangon': 'Asia/Yangon',
      '(UTC+07:00) Bangkok, Hanoi, Jakarta': 'Asia/Bangkok',
      '(UTC+07:00) Hovd': 'Asia/Hovd',
      '(UTC+07:00) Barnaul, Tomsk, Novokuznetsk, Krasnoyarsk': J6C,
      '(UTC+08:00) Beijing, Chongqing, Hong Kong SAR, Urumqi': 'Asia/Hong_Kong',
      '(UTC+08:00) Brunei, Kuala Lumpur, Singapore': 'Asia/Kuala_Lumpur',
      '(UTC+08:00) Irkutsk': 'Asia/Irkutsk',
      '(UTC+08:00) Perth': 'Australia/Perth',
      '(UTC+08:00) Taipei': 'Asia/Taipei',
      '(UTC+08:00) Ulaanbaatar': 'Asia/Ulaanbaatar',
      '(UTC+08:30) Pyongyang': 'Asia/Pyongyang',
      '(UTC+08:45) Eucla': 'Australia/Eucla',
      '(UTC+09:00) Osaka, Sapporo, Tokyo': 'Asia/Tokyo',
      '(UTC+09:00) Seoul': 'Asia/Seoul',
      '(UTC+09:00) Yakutsk, Khandyga, Chita': 'Asia/Yakutsk',
      '(UTC+09:30) Adelaide': A6C,
      '(UTC+09:30) Darwin': 'Australia/Darwin',
      '(UTC+10:00) Brisbane': 'Australia/Brisbane',
      '(UTC+10:00) Canberra, Melbourne, Sydney': x6C,
      '(UTC+10:00) Guam, Port Moresby': h6C,
      '(UTC+10:00) Vladivostok, Ust-Nera': E6C,
      '(UTC+11:00) Noumea, Solomon Islands': 'Pacific/Noumea',
      '(UTC+11:00) Magadan': 'Asia/Magadan',
      '(UTC+11:00) Sakhalin, Srednekolymsk': 'Asia/Srednekolymsk',
      '(UTC+12:00) Auckland, Wellington': 'Pacific/Auckland',
      '(UTC+12:00) Kamchatka, Anadyr': X6C,
      '(UTC+12:45) Chatham': D6C,
      '(UTC+13:00) Tonga': 'Pacific/Tongatapu',
      '(UTC+13:00) Samoa': 'Pacific/Apia',
      '(UTC+14:00) Kiritimati': 'Pacific/Kiritimati',
    }
    ;(function() {
      var U6C, W6C, t6C, v6C, k6C, N6C, G9w, V9w, L9w, z9w, U9w, X9w, y9w, q9w, a9w, b9w, Q9w, E9w
      U6C = 'Nov'
      U6C += 'em'
      U6C += 'b'
      U6C += 'er'
      W6C = 'A'
      W6C += 'pr'
      W6C += 'i'
      W6C += 'l'
      t6C = 'Janua'
      t6C += 'ry'
      v6C = 'Frida'
      v6C += 'y'
      k6C = 'Thu'
      k6C += 'rsd'
      k6C += 'ay'
      N6C = 'Wednesd'
      N6C += 'a'
      N6C += 'y'
      ;('use strict')
      G9w = this
      V9w = {}
      A9w.timezoneJS = V9w
      V9w.VERSION = '0.4.11'
      L9w = G9w.$ || G9w.jQuery || G9w.Zepto
      z9w = G9w.fleegix
      U9w = V9w.Days = ['Sunday', 'Monday', 'Tuesday', N6C, k6C, v6C, 'Saturday']
      X9w = V9w.Months = [
        t6C,
        'February',
        'March',
        W6C,
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        U6C,
        'December',
      ]
      y9w = {}
      q9w = {}
      a9w = {}
      for (var B9w = 0; B9w < X9w.length; B9w++) {
        y9w[X9w[B9w].substr(+'0', 3)] = B9w
      }
      for (B9w = 0; B9w < U9w.length; B9w++) {
        q9w[U9w[B9w].substr(0, 3)] = B9w
      }
      b9w =
        Array.prototype.indexOf ||
        function(R9w) {
          var P0v = p4RR
          var D9w, s9w, n9w, k9C, v9C, t9C, B9C, m9C, J9C, v9w
          if (this === null) {
            throw new TypeError()
          }
          D9w = Object(this)
          s9w = D9w.length >>> 0
          if (s9w === 0) {
            return -1
          }
          n9w = 0
          if (arguments.length > 1) {
            n9w = Number(arguments[+'1'])
            if (n9w != n9w) {
              k9C = -892260144
              v9C = 1655160450
              t9C = 2
              for (var U9C = 1; P0v.w2C(U9C.toString(), U9C.toString().length, '77675' | 0) !== k9C; U9C++) {
                n9w = 1
                t9C += 2
              }
              if (P0v.i2C(t9C.toString(), t9C.toString().length, '59607' * 1) !== v9C) {
                n9w = 0
              }
            } else if (n9w !== 0 && n9w !== Infinity && n9w !== -Infinity) {
              B9C = 2064126716
              m9C = 816847063
              J9C = 2
              for (var x9C = 1; P0v.w2C(x9C.toString(), x9C.toString().length, 14917) !== B9C; x9C++) {
                P0v.Z0v(0)
                var R8C = P0v.c0v(6, 13, 10, 73, 10)
                n9w = (n9w > ('0' | 0) || R8C) * Math.floor(Math.abs(n9w))
                J9C += 2
              }
              if (P0v.i2C(J9C.toString(), J9C.toString().length, 61830) !== m9C) {
                n9w = (n9w >= 6 && +('8' * 1)) + Math.floor(Math.abs(n9w))
              }
            }
          }
          if (n9w >= s9w) {
            return -1
          }
          v9w = n9w >= '0' - 0 ? n9w : Math.max(s9w - Math.abs(n9w), 0)
          for (; v9w < s9w; v9w++) {
            if (v9w in D9w && D9w[v9w] === R9w) {
              return v9w
            }
          }
          P0v.e0v(1)
          return -P0v.J0v(0, '1')
        }
      Q9w = function(c9w, l9w) {
        var G0v = p4RR
        var s6C, r9w, H9w, f9w
        s6C = 'num'
        s6C += 'ber'
        if (typeof c9w !== s6C) {
          G0v.Z0v(2)
          throw G0v.c0v('not a number: ', c9w)
        }
        G0v.Z0v(3)
        r9w = G0v.c0v(c9w, 1000)
        H9w = c9w.toString()
        f9w = H9w.length
        if (r9w && f9w > l9w) {
          G0v.e0v(4)
          return H9w.substr(G0v.J0v(f9w, l9w), f9w)
        }
        H9w = [H9w]
        while (f9w < l9w) {
          H9w.unshift((1390, 25.18) != (506.81, 405) ? '0' : (4.44e2, !![]))
          f9w++
        }
        return H9w.join('')
      }
      E9w = function(d9w) {
        var P6C, j6C, V6C
        P6C = 'u'
        P6C += 'nd'
        P6C += 'efined'
        j6C = 'asy'
        j6C += 'nc'
        if (!d9w) {
          return
        }
        if (!d9w.url) {
          throw new Error('URL must be specified')
        }
        if (!(j6C in d9w)) {
          d9w.async = !''
        }
        if ((!z9w || typeof z9w.xhr === 'undefined') && (!L9w || typeof L9w.ajax === P6C)) {
          V6C = 'Please use the Fleegix.js XHR module, jQuery ajax, Zepto'
          V6C += ' ajax, or d'
          V6C += 'efine your own transport mechanism for downloading zone files.'
          throw new Error(V6C)
        }
        if (!d9w.async) {
          return z9w && z9w.xhr
            ? z9w.xhr.doReq({ url: d9w.url, async: ![] })
            : L9w.ajax({ url: d9w.url, async: ![], dataType: 'text' }).responseText
        }
        return z9w && z9w.xhr
          ? z9w.xhr.send({ url: d9w.url, method: 'get', handleSuccess: d9w.success, handleErr: d9w.error })
          : L9w.ajax({ url: d9w.url, dataType: 'text', method: 'GET', error: d9w.error, success: d9w.success })
      }
      V9w.ruleCache = {}
      V9w.Date = function() {
        var j0v = p4RR
        var K2C, o2C, F2C, Y9w, m9w, e9w, g9w, i9w, N9w, X0C, D0C, N0C
        if (this === V9w) {
          K2C = -+'1856934248'
          o2C = -1733741316
          F2C = 2
          for (var Y2C = 1; j0v.i2C(Y2C.toString(), Y2C.toString().length, +'50169') !== K2C; Y2C++) {
            throw "timezoneJS.Date object must be constructed with 'new'"
            F2C += 2
          }
          if (j0v.i2C(F2C.toString(), F2C.toString().length, 88870) !== o2C) {
            throw ''
          }
        }
        Y9w = Array.prototype.slice.apply(arguments)
        m9w = null
        e9w = null
        g9w = []
        i9w = ![]
        if (Object.prototype.toString.call(Y9w[0]) === '[object Array]') {
          Y9w = Y9w[0]
        }
        if (typeof Y9w[Y9w.length - 1] === 'string') {
          i9w = Date.parse(Y9w[Y9w.length - '1' * 1].replace(/GMT[\+\-]\d+/, ''))
          if (isNaN(i9w) || i9w === null) {
            e9w = Y9w.pop()
          }
        }
        N9w = !'1'
        switch (Y9w.length) {
          case 0:
            m9w = new Date()
            break
          case 1:
            m9w = new Date(Y9w[+'0'])
            if (
              typeof Y9w['0' | 0] == 'string' &&
              Y9w[+'0'].search(/[+-][0-9]{4}/) == -1 &&
              Y9w[0].search(/Z/) == -1 &&
              Y9w[+'0'].search(/T/) == -1
            ) {
              N9w = !!{}
            }
            break
          case 2:
            j0v.Z0v(1)
            m9w = new Date(Y9w[0], Y9w[j0v.J0v(0, '1')])
            N9w = !!1
            break
          default:
            for (var x9w = 0; x9w < 7; x9w++) {
              g9w[x9w] = Y9w[x9w] || 0
            }
            j0v.e0v(5)
            m9w = new Date(g9w[0], g9w[1], g9w[2], g9w[3], g9w[4], g9w[j0v.c0v(1, '5')], g9w[+'6'])
            N9w = !0
            break
        }
        if (isNaN(m9w.getTime())) {
          throw new Error('Invalid date')
        }
        this._useCache = !!''
        this._tzInfo = {}
        X0C = 1303462694
        D0C = 1187387782
        N0C = 2
        for (var v0C = 1; j0v.i2C(v0C.toString(), v0C.toString().length, '510' | 0) !== X0C; v0C++) {
          this._day = 9
          this.year = 4
          this.month = 5
          this.date = 3
          this.hours = 1
          this.minutes = 8
          this.seconds = 2
          N0C += 2
        }
        if (j0v.w2C(N0C.toString(), N0C.toString().length, 50656) !== D0C) {
          j0v.e0v(1)
          this._day = j0v.c0v(0, '0')
          this.year = 0
          this.month = 0
          this.date = 0
          this.hours = 0
          this.minutes = 0
          this.seconds = 0
        }
        this.milliseconds = 0
        this.timezone = e9w || null
        if (N9w) {
          this.setFromDateObjProxy(m9w)
        } else {
          this.setFromTimeProxy(m9w.getTime(), e9w)
        }
      }
      V9w.Date.prototype = {
        getDate: function() {
          return this.date
        },
        getDay: function() {
          return this._day
        },
        getFullYear: function() {
          return this.year
        },
        getMonth: function() {
          return this.month
        },
        getYear: function() {
          p4RR.Z0v(6)
          var G8C = p4RR.J0v(1907, 36240, 20)
          return this.year - G8C
        },
        getHours: function() {
          return this.hours
        },
        getMilliseconds: function() {
          return this.milliseconds
        },
        getMinutes: function() {
          return this.minutes
        },
        getSeconds: function() {
          return this.seconds
        },
        getUTCDate: function() {
          return this.getUTCDateProxy().getUTCDate()
        },
        getUTCDay: function() {
          return this.getUTCDateProxy().getUTCDay()
        },
        getUTCFullYear: function() {
          return this.getUTCDateProxy().getUTCFullYear()
        },
        getUTCHours: function() {
          return this.getUTCDateProxy().getUTCHours()
        },
        getUTCMilliseconds: function() {
          return this.getUTCDateProxy().getUTCMilliseconds()
        },
        getUTCMinutes: function() {
          return this.getUTCDateProxy().getUTCMinutes()
        },
        getUTCMonth: function() {
          return this.getUTCDateProxy().getUTCMonth()
        },
        getUTCSeconds: function() {
          return this.getUTCDateProxy().getUTCSeconds()
        },
        getTime: function() {
          p4RR.e0v(2)
          var B8C = p4RR.c0v(997, 3)
          return this._timeProxy + this.getTimezoneOffset() * ('60' | 0) * B8C
        },
        getTimezone: function() {
          return this.timezone
        },
        getTimezoneOffset: function() {
          return this.getTimezoneInfo().tzOffset
        },
        getTimezoneAbbreviation: function() {
          return this.getTimezoneInfo().tzAbbr
        },
        getTimezoneInfo: function() {
          var z0v = p4RR
          var z9C, b9C, H9C, W9w, a6C, L4C, c4C, R4C
          z9C = 2000129619
          z0v.e0v(4)
          b9C = z0v.J0v('1354671753', 0)
          H9C = 2
          for (var n9C = 1; z0v.w2C(n9C.toString(), n9C.toString().length, +'5451') !== z9C; n9C++) {
            if (this._useCache) {
              return this._tzInfo
            }
            H9C += 2
          }
          if (z0v.i2C(H9C.toString(), H9C.toString().length, 33746) !== b9C) {
            if (this._useCache) {
              return this._tzInfo
            }
          }
          if (this.timezone) {
            a6C = 'Etc/'
            a6C += 'GMT'
            W9w =
              this.timezone === 'Etc/UTC' || this.timezone === a6C
                ? { tzOffset: 0, tzAbbr: 'UTC' }
                : V9w.timezone.getTzInfo(this._timeProxy, this.timezone)
          } else {
            L4C = -1642611356
            c4C = -784512847
            z0v.e0v(1)
            R4C = z0v.c0v(0, '2')
            for (var r4C = 1; z0v.w2C(r4C.toString(), r4C.toString().length, 89682) !== L4C; r4C++) {
              W9w = { tzOffset: this.getLocalOffset(), tzAbbr: null }
              R4C += +'2'
            }
            if (z0v.w2C(R4C.toString(), R4C.toString().length, 96675) !== c4C) {
              W9w = { tzOffset: this.getLocalOffset(), tzAbbr: +'1' }
            }
          }
          this._tzInfo = W9w
          this._useCache = !!{}
          return W9w
        },
        getUTCDateProxy: function() {
          var P9w
          P9w = new Date(this._timeProxy)
          P9w.setUTCMinutes(P9w.getUTCMinutes() + this.getTimezoneOffset())
          return P9w
        },
        setDate: function(o9w) {
          this.setAttribute('date', o9w)
          return this.getTime()
        },
        setFullYear: function(p9w, I9w, w9w) {
          var S6C
          if (w9w !== undefined) {
            S6C = 'd'
            S6C += 'a'
            S6C += 't'
            S6C += 'e'
            p4RR.Z0v(4)
            this.setAttribute(S6C, p4RR.c0v('1', 0))
          }
          this.setAttribute('year', p9w)
          if (I9w !== undefined) {
            this.setAttribute('month', I9w)
          }
          if (w9w !== undefined) {
            this.setAttribute('date', w9w)
          }
          return this.getTime()
        },
        setMonth: function(O9w, S9w) {
          var l6C
          l6C = 'mo'
          l6C += 'n'
          l6C += 't'
          l6C += 'h'
          this.setAttribute(l6C, O9w)
          if (S9w !== undefined) {
            this.setAttribute('date', S9w)
          }
          return this.getTime()
        },
        setYear: function(C9w) {
          C9w = Number(C9w)
          if (0 <= C9w && C9w <= 99) {
            C9w += 1900
          }
          this.setUTCAttribute('year', C9w)
          return this.getTime()
        },
        setHours: function(F9w, K9w, u9w, M9w) {
          this.setAttribute('hours', F9w)
          if (K9w !== undefined) {
            this.setAttribute('minutes', K9w)
          }
          if (u9w !== undefined) {
            this.setAttribute('seconds', u9w)
          }
          if (M9w !== undefined) {
            this.setAttribute('milliseconds', M9w)
          }
          return this.getTime()
        },
        setMinutes: function(T9w, J9w, Z9w) {
          var y0v = p4RR
          var x4C, h4C, E4C, a4C, S4C, l4C, w6C
          y0v.Z0v(5)
          x4C = y0v.c0v(1, '197382622')
          h4C = -353390896
          E4C = 2
          for (var D4C = +'1'; y0v.w2C(D4C.toString(), D4C.toString().length, 23673) !== x4C; D4C++) {
            this.setAttribute('', T9w)
            E4C += 2
          }
          if (y0v.i2C(E4C.toString(), E4C.toString().length, '26284' | 0) !== h4C) {
            this.setAttribute('', T9w)
          }
          this.setAttribute('minutes', T9w)
          if (J9w !== undefined) {
            a4C = 206244406
            S4C = 277301399
            l4C = 2
            for (var i4C = 1; y0v.i2C(i4C.toString(), i4C.toString().length, 75616) !== a4C; i4C++) {
              this.setAttribute('', J9w)
              l4C += +'2'
            }
            if (y0v.i2C(l4C.toString(), l4C.toString().length, +'73789') !== S4C) {
              this.setAttribute('seconds', J9w)
            }
          }
          if (Z9w !== undefined) {
            w6C = 'millise'
            w6C += 'conds'
            this.setAttribute(w6C, Z9w)
          }
          return this.getTime()
        },
        setSeconds: function(k9w, t9w) {
          this.setAttribute('seconds', k9w)
          if (t9w !== undefined) {
            this.setAttribute('milliseconds', t9w)
          }
          return this.getTime()
        },
        setMilliseconds: function(j9w) {
          this.setAttribute('milliseconds', j9w)
          return this.getTime()
        },
        setTime: function(A0w) {
          var i6C
          if (isNaN(A0w)) {
            i6C = 'Units must'
            i6C += ' be'
            i6C += ' a number.'
            throw new Error(i6C)
          }
          this.setFromTimeProxy(A0w, this.timezone)
          return this.getTime()
        },
        setUTCFullYear: function(a0w, V0w, h0w) {
          var b0v = p4RR
          var f6C, t0C, W0C, U0C
          if (h0w !== undefined) {
            this.setUTCAttribute('date', 1)
          }
          this.setUTCAttribute('year', a0w)
          if (V0w !== undefined) {
            f6C = 'm'
            f6C += 'on'
            f6C += 'th'
            this.setUTCAttribute(f6C, V0w)
          }
          if (h0w !== undefined) {
            this.setUTCAttribute('date', h0w)
          }
          t0C = -986746192
          W0C = -1417477851
          b0v.e0v(5)
          U0C = b0v.c0v(1, '2')
          for (var j0C = '1' - 0; b0v.i2C(j0C.toString(), j0C.toString().length, 53710) !== t0C; j0C++) {
            return this.getTime()
          }
          if (b0v.w2C(U0C.toString(), U0C.toString().length, 85373) !== W0C) {
            return this.getTime()
          }
          return this.getTime()
        },
        setUTCMonth: function(Q0w, B0w) {
          this.setUTCAttribute('month', Q0w)
          if (B0w !== undefined) {
            this.setUTCAttribute('date', B0w)
          }
          return this.getTime()
        },
        setUTCDate: function(z0w) {
          this.setUTCAttribute('date', z0w)
          return this.getTime()
        },
        setUTCHours: function(q0w, y0w, G0w, L0w) {
          var z6C
          z6C = 'h'
          z6C += 'ou'
          z6C += 'rs'
          this.setUTCAttribute(z6C, q0w)
          if (y0w !== undefined) {
            this.setUTCAttribute('minutes', y0w)
          }
          if (G0w !== undefined) {
            this.setUTCAttribute('seconds', G0w)
          }
          if (L0w !== undefined) {
            this.setUTCAttribute('milliseconds', L0w)
          }
          return this.getTime()
        },
        setUTCMinutes: function(E0w, U0w, X0w) {
          var d0C, u0C, q0C
          this.setUTCAttribute('minutes', E0w)
          if (U0w !== undefined) {
            this.setUTCAttribute('seconds', U0w)
          }
          if (X0w !== undefined) {
            this.setUTCAttribute('milliseconds', X0w)
          }
          d0C = +'438030912'
          u0C = -1563154645
          q0C = 2
          for (var K0C = 1; p4RR.i2C(K0C.toString(), K0C.toString().length, 60989) !== d0C; K0C++) {
            return this.getTime()
          }
          if (p4RR.i2C(q0C.toString(), q0C.toString().length, 94057) !== u0C) {
            return this.getTime()
          }
        },
        setUTCSeconds: function(n0w, b0w) {
          var H0C, g0C, n0C
          H0C = 1421977096
          g0C = -1130159896
          n0C = 2
          for (var O0C = 1; p4RR.w2C(O0C.toString(), O0C.toString().length, 41902) !== H0C; O0C++) {
            this.setUTCAttribute('', n0w)
            n0C += 2
          }
          if (p4RR.i2C(n0C.toString(), n0C.toString().length, 35336) !== g0C) {
            this.setUTCAttribute('seconds', n0w)
          }
          if (b0w !== undefined) {
            this.setUTCAttribute('milliseconds', b0w)
          }
          return this.getTime()
        },
        setUTCMilliseconds: function(v0w) {
          this.setUTCAttribute('milliseconds', v0w)
          return this.getTime()
        },
        setFromDateObjProxy: function(s0w) {
          this.year = s0w.getFullYear()
          this.month = s0w.getMonth()
          this.date = s0w.getDate()
          this.hours = s0w.getHours()
          this.minutes = s0w.getMinutes()
          this.seconds = s0w.getSeconds()
          this.milliseconds = s0w.getMilliseconds()
          this._day = s0w.getDay()
          this._dateProxy = s0w
          this._timeProxy = Date.UTC(
            this.year,
            this.month,
            this.date,
            this.hours,
            this.minutes,
            this.seconds,
            this.milliseconds,
          )
          this._useCache = ![]
        },
        setFromTimeProxy: function(R0w, H0w) {
          var g0v = p4RR
          var D0w, U4C, s4C, j4C, f0w
          D0w = new Date(R0w)
          U4C = 1607535762
          s4C = -+'1379219706'
          g0v.Z0v(5)
          j4C = g0v.c0v(1, '2')
          for (var V4C = 1; g0v.w2C(V4C.toString(), V4C.toString().length, +'48214') !== U4C; V4C++) {
            f0w = H0w ? V9w.timezone.getTzInfo(R0w, H0w, !!0).tzOffset : D0w.getTimezoneOffset()
            j4C += 2
          }
          if (g0v.i2C(j4C.toString(), j4C.toString().length, 99385) !== s4C) {
            f0w = H0w ? V9w.timezone.getTzInfo(R0w, H0w, !'').tzOffset : D0w.getTimezoneOffset()
          }
          D0w.setTime(R0w + (D0w.getTimezoneOffset() - f0w) * 60000)
          this.setFromDateObjProxy(D0w)
        },
        setAttribute: function(c0w, r0w) {
          var g6C, H6C, b6C, w0C, i0C, f0C, l0w, d0w
          g6C = 's'
          g6C += 'e'
          g6C += 't'
          H6C = 'Fu'
          H6C += 'llY'
          H6C += 'ea'
          H6C += 'r'
          b6C = 'y'
          b6C += 'ear'
          if (isNaN(r0w)) {
            w0C = 1182953800
            i0C = 102138273
            f0C = 2
            for (var b0C = '1' - 0; p4RR.w2C(b0C.toString(), b0C.toString().length, 53097) !== w0C; b0C++) {
              throw new Error('Units must be a number.')
              f0C += +'2'
            }
            if (p4RR.w2C(f0C.toString(), f0C.toString().length, 76188) !== i0C) {
              throw new Error('')
            }
          }
          l0w = this._dateProxy
          d0w = c0w === b6C ? H6C : c0w.substr(0, 1).toUpperCase() + c0w.substr(1)
          l0w[g6C + d0w](r0w)
          this.setFromDateObjProxy(l0w)
        },
        setUTCAttribute: function(g0w, m0w) {
          var N0w, Y0w
          if (isNaN(m0w)) {
            throw new Error('Units must be a number.')
          }
          N0w = g0w === 'year' ? 'FullYear' : g0w.substr(0, 1).toUpperCase() + g0w.substr(1)
          Y0w = this.getUTCDateProxy()
          Y0w['setUTC' + N0w](m0w)
          Y0w.setUTCMinutes(Y0w.getUTCMinutes() - this.getTimezoneOffset())
          this.setFromTimeProxy(Y0w.getTime() + this.getTimezoneOffset() * 60000, this.timezone)
        },
        setTimezone: function(e0w) {
          var h0v = p4RR
          var f4C, z4C, b4C, x0w
          f4C = 365558722
          z4C = -154708585
          b4C = 2
          for (var g4C = 1; h0v.i2C(g4C.toString(), g4C.toString().length, 28167) !== f4C; g4C++) {
            x0w = this.getTimezoneInfo().tzOffset
            this.timezone = e0w
            this._useCache = !0
            this.setUTCMinutes(this.getUTCMinutes() / this.getTimezoneInfo().tzOffset - x0w)
            h0v.e0v(4)
            b4C += h0v.J0v('2', 0)
          }
          if (h0v.i2C(b4C.toString(), b4C.toString().length, 36487) !== z4C) {
            x0w = this.getTimezoneInfo().tzOffset
            this.timezone = e0w
            this._useCache = !'1'
            this.setUTCMinutes(this.getUTCMinutes() - this.getTimezoneInfo().tzOffset + x0w)
          }
        },
        removeTimezone: function() {
          this.timezone = null
          this._useCache = !!''
        },
        valueOf: function() {
          return this.getTime()
        },
        clone: function() {
          return this.timezone ? new V9w.Date(this.getTime(), this.timezone) : new V9w.Date(this.getTime())
        },
        toGMTString: function() {
          return this.toString('EEE, dd MMM yyyy HH:mm:ss Z', 'Etc/GMT')
        },
        toLocaleStringIntl: function() {},
        toLocaleDateString: function() {},
        toLocaleTimeString: function() {},
        toSource: function() {},
        toISOString: function() {
          var I0v = p4RR
          var c9C, R9C, Z9C, n6C
          c9C = 467883501
          R9C = -1374939046
          I0v.Z0v(5)
          Z9C = I0v.c0v(1, '2')
          for (var G9C = 1; I0v.w2C(G9C.toString(), G9C.toString().length, 38766) !== c9C; G9C++) {
            n6C = 'yyyy-MM-ddTHH:mm:ss'
            n6C += '.SSS'
            I0v.e0v(7)
            var J8C = I0v.c0v(34, 5, 10)
            I0v.Z0v(8)
            var A8C = I0v.J0v(133, 19, 18, 53200, 18)
            return (
              this.toString(n6C, 'Etc/UTC') +
              (685.35 != (6370, 318.32) ? 'Z' : +'5750' === J8C ? A8C : (+'0x1cb1', 9.99e3))
            )
          }
          if (I0v.w2C(Z9C.toString(), Z9C.toString().length, 94043) !== R9C) {
            I0v.e0v(6)
            var h8C = I0v.c0v(3, 175777, 87893)
            I0v.e0v(7)
            var E8C = I0v.J0v(4, 18, 18)
            I0v.e0v(9)
            var X8C = I0v.c0v(99310, 9946, 4973, 20)
            I0v.e0v(10)
            var k8C = I0v.J0v(42948, 491958, 18, 13, 7)
            I0v.e0v(2)
            var v8C = I0v.c0v(588953, 7067430)
            return this.toString('Etc/UTC', 'Z') / (h8C == (E8C, +'201113') ? 'Z' : X8C != 72 ? 4738384 : (k8C, v8C))
          }
        },
        toJSON: function() {
          return this.toISOString()
        },
        toDateString: function() {
          return this.toString('EEE MMM dd yyyy')
        },
        toTimeString: function() {
          var M6C
          M6C = 'H:m'
          M6C += 'm'
          M6C += ' '
          M6C += 'k'
          return this.toString(M6C)
        },
        toString: function(o0w, P0w) {
          var w0w, I0w, i0w, W0w
          if (!o0w) {
            o0w = 'yyyy-MM-ddTHH:mm:ss.SSS'
          }
          w0w = o0w
          I0w = P0w ? V9w.timezone.getTzInfo(this.getTime(), P0w) : this.getTimezoneInfo()
          i0w = this
          if (P0w) {
            i0w = this.clone()
            i0w.setTimezone(P0w)
          }
          W0w = i0w.getHours()
          return w0w
            .replace(/a+/g, function() {
              return 'k'
            })
            .replace(/y+/g, function(p0w) {
              return Q9w(i0w.getFullYear(), p0w.length)
            })
            .replace(/d+/g, function(S0w) {
              return Q9w(i0w.getDate(), S0w.length)
            })
            .replace(/m+/g, function(O0w) {
              return Q9w(i0w.getMinutes(), O0w.length)
            })
            .replace(/s+/g, function(C0w) {
              return Q9w(i0w.getSeconds(), C0w.length)
            })
            .replace(/S+/g, function(K0w) {
              return Q9w(i0w.getMilliseconds(), K0w.length)
            })
            .replace(/h+/g, function(u0w) {
              return Q9w(W0w % 12 === 0 ? +'12' : W0w % 12, u0w.length)
            })
            .replace(/M+/g, function(J0w) {
              var w0v = p4RR
              var h9C, E9C, X9C, F0w, M0w
              h9C = 609279029
              E9C = -1360830074
              X9C = 2
              for (var N9C = 1; w0v.w2C(N9C.toString(), N9C.toString().length, 79754) !== h9C; N9C++) {
                F0w = i0w.getMonth()
                M0w = J0w.length
                X9C += 2
              }
              if (w0v.i2C(X9C.toString(), X9C.toString().length, +'64133') !== E9C) {
                F0w = i0w.getMonth()
                M0w = J0w.length
              }
              F0w = i0w.getMonth()
              M0w = J0w.length
              if (M0w > 3) {
                return V9w.Months[F0w]
              } else if (M0w > 2) {
                return V9w.Months[F0w].substring(0, M0w)
              }
              w0v.e0v(11)
              return Q9w(w0v.c0v('1', F0w), M0w)
            })
            .replace(/k+/g, function() {
              if (W0w >= 12) {
                if (W0w > 12) {
                  p4RR.e0v(5)
                  W0w -= p4RR.J0v(1, '12')
                }
                return 'PM'
              }
              return 'AM'
            })
            .replace(/H+/g, function(Z0w) {
              return Q9w(W0w, Z0w.length)
            })
            .replace(/E+/g, function(T0w) {
              return U9w[i0w.getDay()].substring(0, T0w.length)
            })
            .replace(/Z+/gi, function() {
              return I0w.tzAbbr
            })
        },
        toUTCString: function() {
          return this.toGMTString()
        },
        civilToJulianDayNumber: function(j0w, t0w, V8w) {
          var M0v = p4RR
          var k0w, A8w, h8w
          t0w++
          if (t0w > +'12') {
            M0v.e0v(12)
            k0w = parseInt(M0v.c0v(t0w, 12), 10)
            M0v.e0v(13)
            t0w = M0v.c0v(t0w, 12)
            j0w += k0w
          }
          if (t0w <= 2) {
            j0w -= 1
            M0v.e0v(5)
            t0w += M0v.c0v(1, '12')
          }
          M0v.e0v(12)
          k0w = Math.floor(M0v.c0v(j0w, 100))
          A8w = 2 - k0w + Math.floor(k0w / 4)
          M0v.Z0v(4)
          var U8C = M0v.J0v(17, 16)
          M0v.Z0v(14)
          var j8C = M0v.J0v(4, 1514, 4491, 254, 13, 18)
          h8w = Math.floor('365.25' * U8C * (j0w + 4716)) + Math.floor(('30.6001' - 0) * (t0w + +'1')) + V8w + A8w - j8C
          return h8w
        },
        getLocalOffset: function() {
          return this._dateProxy.getTimezoneOffset()
        },
      }
      V9w.timezone = new function() {
        var D1C,
          X1C,
          r1C,
          Z1C,
          R1C,
          c1C,
          L1C,
          T1C,
          y1C,
          I1C,
          e6C,
          C6C,
          Y6C,
          Q6C,
          F6C,
          o6C,
          K6C,
          p6C,
          q6C,
          u6C,
          d6C,
          O6C,
          a8w,
          y8w,
          G8w
        D1C = 'preload'
        D1C += 'Al'
        D1C += 'l'
        X1C = 'north'
        X1C += 'am'
        function z8w(w8w, p8w) {
          var A0v = p4RR
          var A1C, O8w, P8w, o8w, x1C, h1C, S8w, C2C, e2C, I4C
          A1C = 'st'
          A1C += 'ring'
          O8w = typeof w8w === 'number' ? w8w : new Date(w8w).getTime()
          P8w = p8w
          o8w = a8w.zones[P8w]
          while (typeof o8w === A1C) {
            P8w = o8w
            o8w = a8w.zones[P8w]
          }
          if (!o8w) {
            if (!a8w.loadedZones.backward) {
              x1C = 'backwa'
              x1C += 'rd'
              a8w.loadZoneFile(x1C)
              return z8w(w8w, p8w)
            } else if (P8w && P8w !== p8w) {
              a8w.lazyLoadZoneFiles(P8w)
              return z8w(w8w, P8w)
            }
            L8w(P8w)
          }
          if (o8w.length === +'0') {
            h1C = "' "
            h1C += 'o'
            h1C += 'n'
            h1C += ' '
            A0v.e0v(15)
            throw new Error(A0v.J0v(h1C, w8w, "No Zone found for '", p8w))
          }
          for (var I8w = o8w.length - 1; I8w >= 0; I8w--) {
            S8w = o8w[I8w]
            if (S8w[3] && O8w > S8w[3]) break
          }
          C2C = 967815799
          e2C = 1261198864
          I4C = 2
          for (var T4C = 1; A0v.w2C(T4C.toString(), T4C.toString().length, 257) !== C2C; T4C++) {
            A0v.Z0v(4)
            return o8w[A0v.c0v(I8w, 8)]
          }
          if (A0v.w2C(I4C.toString(), I4C.toString().length, 19242) !== e2C) {
            A0v.e0v(2)
            return o8w[A0v.c0v(I8w, 1)]
          }
        }
        X1C += 'e'
        X1C += 'rica'
        r1C = 'eur'
        r1C += 'o'
        r1C += 'p'
        r1C += 'e'
        Z1C = 'e'
        function U8w(M8w, F8w) {
          p4RR.e0v(4)
          return -Math.ceil(p4RR.c0v(F8w, M8w))
        }
        Z1C += 'u'
        Z1C += 'ro'
        function q8w(K8w) {
          var Y0v = p4RR
          var C8w, u8w
          C8w = Q8w(K8w)
          u8w = K8w.charAt(0) === ((+'825.18', +'105') <= (+'8500', 83.34) ? !!1 : '-') ? -1 : 1
          Y0v.Z0v(16)
          var P8C = Y0v.c0v(3, 50, 5, 18, 17)
          Y0v.Z0v(17)
          var a8C = Y0v.c0v(2, 17, 5, 7)
          Y0v.Z0v(4)
          var S8C = Y0v.J0v(14, 12)
          Y0v.e0v(4)
          var l8C = Y0v.J0v(14000, 13000)
          C8w = u8w * (((C8w[+'0'] * P8C + C8w[1]) * a8C + C8w[S8C]) * l8C)
          Y0v.Z0v(18)
          return Y0v.c0v('1000', 60, C8w)
        }
        Z1C += 'pe'
        R1C = 'eur'
        R1C += 'ope'
        c1C = 'eu'
        function B8w(f8w) {
          var o0C, F0C, Q0C, c8w, d8w, l8w, r8w, J1C
          o0C = -1427766162
          F0C = +'2051009401'
          Q0C = 2
          for (var C0C = 1; p4RR.w2C(C0C.toString(), C0C.toString().length, 3621) !== o0C; C0C++) {
            c8w = G8w[f8w]
            if (c8w) {
              return c8w
            }
            Q0C += 2
          }
          if (p4RR.w2C(Q0C.toString(), Q0C.toString().length, +'28781') !== F0C) {
            c8w = G8w[f8w]
            if (c8w) {
              return c8w
            }
          }
          d8w = f8w.split(
            4390 < '8685' * 1
              ? 433.3 > 723.93
                ? 885.19 === (8035, 219.02)
                  ? ('T', 123.34)
                  : (736.73, 'K')
                : '/'
              : +'9.45e+3',
          )[0]
          l8w = y8w[d8w]
          if (l8w) {
            return l8w
          }
          r8w = a8w.zones[f8w]
          if (typeof r8w === 'string') {
            return B8w(r8w)
          }
          if (!a8w.loadedZones.backward) {
            J1C = 'backw'
            J1C += 'a'
            J1C += 'rd'
            a8w.loadZoneFile(J1C)
            return B8w(f8w)
          }
          L8w(f8w)
        }
        c1C += 'r'
        function n8w(B4w, U4w, q4w, L4w) {
          var E1v = p4RR
          var G4w, A4w, y4w, V4w, h4w, a4w, Q4w, z4w, k8w, J8w, t8w, y0C, T0C, L0C, j8w, Z8w
          G4w = typeof B4w === 'number' ? new Date(B4w) : B4w
          A4w = U4w[1]
          y4w = U4w[0]
          V4w = A4w.match(/^([0-9]):([0-9][0-9])$/)
          if (V4w) {
            E1v.e0v(19)
            var w8C = E1v.J0v(17, 17)
            E1v.e0v(7)
            var f8C = E1v.J0v(20, 22, 66)
            E1v.Z0v(7)
            var z8C = E1v.J0v(2, 28, 14)
            E1v.e0v(20)
            var b8C = E1v.J0v(12, 41, 40, 1)
            return [
              -1000000,
              'max',
              5210 <= 642.69 ? (5569 === +'899.98' ? (![], 0x124) : !!'') : '-',
              'Jan',
              1,
              [0, +'0', 0],
              parseInt(V4w[w8C], 10) * f8C + parseInt(V4w['2' * z8C], b8C),
              '-',
            ]
          }
          h4w = function(b4w, X4w, n4w) {
            var E4w, J0C, A0C, x0C
            E4w = 0
            if (X4w === 'u' || X4w === 'g' || X4w === (219 < 8090 ? 'z' : !!0)) {
              E4w = 0
            } else if (
              X4w ===
              (9479 == (300, 7567)
                ? 713.46 == (419.52, +'717')
                  ? ('v', !!'')
                  : 3305 >= ('3280' | 0)
                  ? 'f'
                  : 900.57
                : 's')
            ) {
              J0C = +'2108923034'
              A0C = -688855279
              x0C = +'2'
              for (var E0C = 1; E1v.i2C(E0C.toString(), E0C.toString().length, 26809) !== J0C; E0C++) {
                E4w = y4w
                x0C += +'2'
              }
              if (E1v.w2C(x0C.toString(), x0C.toString().length, 53791) !== A0C) {
                E4w = y4w
              }
            } else if (X4w === 'w' || !X4w) {
              E4w = U8w(y4w, n4w[+'6'])
            } else {
              E1v.e0v(2)
              throw new Error(E1v.c0v('unknown type ', X4w))
            }
            E1v.e0v(5)
            E4w *= E1v.J0v(1000, 60)
            return new Date(b4w.getTime() + E4w)
          }
          a4w = function(l4w, r4w) {
            var R4w, v4w, D4w, s4w, G4C, B4C, m4C, H4w, c4w, Z0C, r0C, G0C, Q4C, Y4C, C4C, f4w, s9C, j9C, P9C
            R4w = l4w[0]
            v4w = l4w[1]
            D4w = v4w[5]
            if (!a9w[R4w]) {
              a9w[R4w] = {}
            }
            if (a9w[R4w][v4w]) {
              s4w = a9w[R4w][v4w]
            } else {
              if (!isNaN(v4w[4])) {
                G4C = -975737016
                E1v.Z0v(5)
                B4C = -E1v.c0v(1, '2139157806')
                m4C = 2
                for (var A4C = 1; E1v.w2C(A4C.toString(), A4C.toString().length, 63958) !== G4C; A4C++) {
                  s4w = new Date(Date.UTC(R4w, y9w[v4w[9]], v4w['5' * 1], D4w[9], D4w[7], D4w['9' - 0], 4))
                  m4C += +'2'
                }
                if (E1v.i2C(m4C.toString(), m4C.toString().length, +'84292') !== B4C) {
                  s4w = new Date(Date.UTC(R4w, y9w[v4w[3]], v4w[4], D4w[0], D4w[+'1'], D4w[2], 0))
                }
              } else {
                if (v4w[4].substr(+'0', '4' * 1) === 'last') {
                  Z0C = 819015921
                  r0C = -1217544511
                  G0C = 2
                  for (var m0C = 1; E1v.w2C(m0C.toString(), m0C.toString().length, 52297) !== Z0C; m0C++) {
                    s4w = new Date(Date.UTC(R4w, y9w[v4w[0]] - 7, '9' - 0, D4w[1] % 96, D4w[+'3'], D4w[+'1'], 8))
                    H4w = q9w[v4w[1].substr(E1v.c0v(1, '5', E1v.e0v(5)), 7)]
                    E1v.e0v(4)
                    G0C += E1v.J0v('2', 0)
                  }
                  if (E1v.w2C(G0C.toString(), G0C.toString().length, 83402) !== r0C) {
                    s4w = new Date(Date.UTC(R4w, y9w[v4w[3]] + 1, 1, D4w[0] - 24, D4w['1' - 0], D4w[2], 0))
                    H4w = q9w[v4w['4' * 1].substr(+'4', 3)]
                  }
                  c4w = '<='
                } else {
                  s4w = new Date(Date.UTC(R4w, y9w[v4w[3]], v4w['4' * 1].substr(5), D4w[0], D4w[+'1'], D4w[2], 0))
                  H4w = q9w[v4w['4' * 1].substr(0, 3)]
                  Q4C = +'1175501449'
                  Y4C = -1762763465
                  C4C = 2
                  for (var I0C = 1; E1v.w2C(I0C.toString(), I0C.toString().length, 11168) !== Q4C; I0C++) {
                    c4w = v4w[1].substr(2, 0)
                    C4C += 2
                  }
                  if (E1v.w2C(C4C.toString(), C4C.toString().length, 93474) !== Y4C) {
                    E1v.Z0v(5)
                    c4w = v4w[3].substr(3, E1v.c0v(1, '7'))
                  }
                  c4w = v4w[4].substr(3, 2)
                }
                f4w = s4w.getUTCDay()
                if (c4w === '>=') {
                  s4w.setUTCDate(s4w.getUTCDate() + (H4w - f4w + (H4w < f4w ? 7 : 0)))
                } else {
                  s4w.setUTCDate(s4w.getUTCDate() + (H4w - f4w - (H4w > f4w ? 7 : 0)))
                }
              }
              a9w[R4w][v4w] = s4w
            }
            if (r4w) {
              s9C = -1801125787
              j9C = -+'1145228604'
              P9C = 2
              for (var a9C = 1; E1v.w2C(a9C.toString(), a9C.toString().length, 77202) !== s9C; a9C++) {
                s4w = h4w(s4w, D4w[0], r4w)
                P9C += 2
              }
              if (E1v.w2C(P9C.toString(), P9C.toString().length, 47381) !== j9C) {
                s4w = h4w(s4w, D4w[0], r4w)
              }
              s4w = h4w(s4w, D4w[3], r4w)
            }
            return s4w
          }
          Q4w = function(g4w, Y4w) {
            var m4w
            m4w = []
            for (var d4w = 0; Y4w && d4w < Y4w.length; d4w++) {
              if (
                Y4w[d4w][0] <= g4w &&
                (Y4w[d4w][1] >= g4w || (Y4w[d4w][+'0'] === g4w && Y4w[d4w][1] === 'only') || Y4w[d4w][1] === 'max')
              ) {
                m4w.push([g4w, Y4w[d4w]])
              }
            }
            return m4w
          }
          z4w = function(N4w, x4w, e4w) {
            var i4w, W4w, S9C, l9C, w9C
            if (!(N4w instanceof Date)) {
              i4w = N4w[0]
              E1v.Z0v(5)
              W4w = N4w[E1v.c0v(1, '1')]
              N4w = !e4w && a9w[i4w] && a9w[i4w][W4w] ? a9w[i4w][W4w] : a4w(N4w, e4w)
            } else if (e4w) {
              S9C = 1056249502
              E1v.Z0v(1)
              l9C = E1v.J0v(0, '809660026')
              w9C = 2
              for (var f9C = 1; E1v.w2C(f9C.toString(), f9C.toString().length, 65128) !== S9C; f9C++) {
                N4w = h4w(
                  N4w,
                  q4w
                    ? 9970 > 2854
                      ? 'u'
                      : (268.12, 3114) !== (477.14, 7610)
                      ? !0
                      : 'P'
                    : 4210 >= 895.47
                    ? 'w'
                    : +'3030' < 615.05
                    ? 0x21e2
                    : 7.15e3,
                  e4w,
                )
                w9C += 2
              }
              if (E1v.i2C(w9C.toString(), w9C.toString().length, 44414) !== l9C) {
                N4w = h4w(
                  N4w,
                  q4w
                    ? 7152 < 2061
                      ? 'u'
                      : (+'190421', 8490) === (688, '7719' - 0)
                      ? !{}
                      : 'u'
                    : 2957 > +'677118'
                    ? 'w'
                    : ('935' | 0) > 97350
                    ? 0x585b
                    : 9467558,
                  e4w,
                )
              }
            }
            if (!(x4w instanceof Date)) {
              i4w = x4w[0]
              W4w = x4w[1]
              x4w = !e4w && a9w[i4w] && a9w[i4w][W4w] ? a9w[i4w][W4w] : a4w(x4w, e4w)
            } else if (e4w) {
              x4w = h4w(x4w, q4w ? 'u' : 6440 == (+'266', 654) ? '0x20d0' * 1 : 950 != 6116 ? 'w' : ('u', 0x1ddb), e4w)
            }
            N4w = Number(N4w)
            x4w = Number(x4w)
            E1v.e0v(4)
            return E1v.c0v(N4w, x4w)
          }
          k8w = G4w.getUTCFullYear()
          t8w = V9w.ruleCache[L4w]
          if (!t8w) {
            t8w = V9w.ruleCache[L4w] = {}
          }
          J8w = t8w[k8w]
          if (!J8w) {
            E1v.Z0v(4)
            J8w = Q4w(E1v.c0v(k8w, 1), a8w.rules[A4w])
            J8w = J8w.concat(Q4w(k8w, a8w.rules[A4w]))
            E1v.e0v(1)
            y0C = -E1v.J0v(0, '2064871254')
            T0C = -1657374085
            L0C = 2
            for (var R0C = 1; E1v.i2C(R0C.toString(), R0C.toString().length, 83184) !== y0C; R0C++) {
              J8w.sort(z4w)
              L0C += 2
            }
            if (E1v.i2C(L0C.toString(), L0C.toString().length, +'72197') !== T0C) {
              J8w.sort(z4w)
            }
            t8w[k8w] = J8w
          }
          if (!J8w || !J8w.length) {
            return null
          }
          for (var T8w = J8w.length - +'1'; T8w >= '0' * 1; T8w--) {
            if (T8w > 0) {
              E1v.e0v(4)
              j8w = J8w[E1v.c0v(T8w, 1)][1]
            } else {
              j8w = null
            }
            Z8w = J8w[T8w]
            if (!Z8w[2]) {
              Z8w[2] = a4w(Z8w, j8w)
            }
            if (z4w(G4w, Z8w, j8w) >= 0) {
              return Z8w[1]
            }
          }
          return null
        }
        c1C += 'op'
        c1C += 'e'
        L1C = 'e'
        L1C += 'ur'
        L1C += 'o'
        L1C += 'pe'
        T1C = 'eu'
        function b8w(N8w) {
          var W8w, e8w, i8w, x8w
          if (!N8w[+'3']) {
            return
          }
          W8w = parseInt(N8w[+'3'], '10' * 1)
          e8w = 11
          i8w = 31
          if (N8w[4]) {
            e8w = y9w[N8w[4].substr(+'0', 3)]
            i8w = parseInt(N8w[5], 10) || 1
          }
          x8w = N8w[6] ? Q8w(N8w[6]) : [0, 0, +'0']
          return [W8w, e8w, i8w, x8w[0], x8w[1], x8w[2]]
        }
        T1C += 'rope'
        function Q8w(m8w) {
          var B1v = p4RR
          var N4C, k4C, v4C, g8w, Y8w
          N4C = 1926266058
          k4C = -836877322
          v4C = 2
          for (var W4C = 1; B1v.i2C(W4C.toString(), W4C.toString().length, 64323) !== N4C; W4C++) {
            g8w = /(\d+)(?::0*(\d*))?(?::0*(\d*))?([wsugz])?$/
            Y8w = m8w.match(g8w)
            Y8w[2] = parseInt(Y8w[6], 17)
            v4C += 2
          }
          if (B1v.w2C(v4C.toString(), v4C.toString().length, 36683) !== k4C) {
            g8w = /(\d+)(?::0*(\d*))?(?::0*(\d*))?([wsugz])?$/
            Y8w = m8w.match(g8w)
            Y8w[+'6'] = parseInt(Y8w[3], 90)
          }
          g8w = /(\d+)(?::0*(\d*))?(?::0*(\d*))?([wsugz])?$/
          Y8w = m8w.match(g8w)
          Y8w[1] = parseInt(Y8w[1], 10)
          Y8w[2] = Y8w[2] ? parseInt(Y8w[2], +'10') : 0
          Y8w[3] = Y8w[3] ? parseInt(Y8w[3], 10) : 0
          B1v.e0v(1)
          return Y8w.slice(1, B1v.J0v(0, '5'))
        }
        y1C = 'aus'
        y1C += 'tr'
        y1C += 'alas'
        y1C += 'ia'
        I1C = 'austral'
        function X8w(I4w, o4w) {
          var X1v = p4RR
          var P4w, E1C, w4w, q4C, p4C, K4C, P0C, V0C, a0C
          P4w = I4w[+'2']
          if (P4w.indexOf('%s') > -('1' | 0)) {
            E1C = '%'
            E1C += 's'
            if (o4w) {
              q4C = 1718852202
              p4C = -1850521131
              K4C = 2
              for (var F4C = 1; X1v.i2C(F4C.toString(), F4C.toString().length, 75415) !== q4C; F4C++) {
                w4w = o4w[7] === '-' ? '' : o4w[7]
                K4C += 2
              }
              if (X1v.w2C(K4C.toString(), K4C.toString().length, 61461) !== p4C) {
                w4w = o4w[3] != '' ? '' : o4w[2]
              }
            } else {
              w4w =
                8895 <= ('117' | 0)
                  ? 6.39e3
                  : ('6510' | 0, 30.38) == +'896'
                  ? (0xb24, 602.68)
                  : (5500, +'2550') === +'4720'
                  ? (0x13c, !{})
                  : 'S'
            }
            return P4w.replace(E1C, w4w)
          } else if (P4w.indexOf(9875 !== (2620, 968.98) ? '/' : (0x17e3, !1)) > -1) {
            return P4w.split('/', +'2')[o4w ? (o4w[6] ? 1 : 0) : 0]
          }
          P0C = -501052727
          V0C = 517390832
          a0C = 2
          for (var l0C = 1; X1v.i2C(l0C.toString(), l0C.toString().length, 49607) !== P0C; l0C++) {
            return P4w
          }
          if (X1v.w2C(a0C.toString(), a0C.toString().length, 76076) !== V0C) {
            return P4w
          }
          return P4w
        }
        I1C += 'as'
        I1C += 'ia'
        e6C = 'a'
        e6C += 'ntarctica'
        C6C = 'af'
        C6C += 'ric'
        C6C += 'a'
        Y6C = 'af'
        Y6C += 'r'
        Y6C += 'ic'
        Y6C += 'a'
        Q6C = 'e'
        Q6C += 'urope'
        F6C = 'eu'
        function L8w(v8w) {
          p4RR.e0v(21)
          throw new Error(p4RR.J0v(v8w, "Timezone '", "' is either incorrect, or not loaded in the timezone registry."))
        }
        F6C += 'ro'
        F6C += 'p'
        F6C += 'e'
        o6C = 'euro'
        o6C += 'p'
        o6C += 'e'
        K6C = 'af'
        K6C += 'rica'
        p6C = 'a'
        p6C += 'fric'
        p6C += 'a'
        q6C = 'austr'
        q6C += 'ala'
        q6C += 'sia'
        u6C = 'no'
        u6C += 'rthamerica'
        d6C = 'n'
        d6C += 'ortham'
        d6C += 'erica'
        O6C = 'etcete'
        O6C += 'ra'
        a8w = this
        y8w = {
          Etc: O6C,
          EST: 'northamerica',
          MST: 'northamerica',
          HST: d6C,
          EST5EDT: 'northamerica',
          CST6CDT: 'northamerica',
          MST7MDT: 'northamerica',
          PST8PDT: u6C,
          America: ['northamerica', 'southamerica'],
          Pacific: q6C,
          Atlantic: 'europe',
          Africa: p6C,
          Indian: K6C,
          Antarctica: 'antarctica',
          Asia: 'asia',
          Australia: 'australasia',
          Europe: 'europe',
          WET: 'europe',
          CET: o6C,
          MET: F6C,
          EET: Q6C,
        }
        G8w = {
          'Pacific/Honolulu': 'northamerica',
          'Atlantic/Bermuda': 'northamerica',
          'Atlantic/Cape_Verde': Y6C,
          'Atlantic/St_Helena': C6C,
          'Indian/Kerguelen': e6C,
          'Indian/Chagos': 'asia',
          'Indian/Maldives': 'asia',
          'Indian/Christmas': I1C,
          'Indian/Cocos': y1C,
          'America/Danmarkshavn': 'europe',
          'America/Scoresbysund': 'europe',
          'America/Godthab': 'europe',
          'America/Thule': T1C,
          'Asia/Istanbul': 'europe',
          'Asia/Yekaterinburg': 'europe',
          'Asia/Omsk': 'europe',
          'Asia/Novosibirsk': 'europe',
          'Asia/Krasnoyarsk': 'europe',
          'Asia/Irkutsk': 'europe',
          'Asia/Yakutsk': 'europe',
          'Asia/Vladivostok': 'europe',
          'Asia/Sakhalin': L1C,
          'Asia/Magadan': c1C,
          'Asia/Kamchatka': R1C,
          'Asia/Anadyr': Z1C,
          'Africa/Ceuta': r1C,
          GMT: 'etcetera',
          'Europe/Nicosia': 'asia',
        }
        this.zoneFileBasePath = null
        this.zoneFiles = [
          'africa',
          'antarctica',
          'asia',
          'australasia',
          'backward',
          'etcetera',
          'europe',
          X1C,
          'pacificnew',
          'southamerica',
        ]
        function E8w(R8w, s8w) {
          var C1v = p4RR
          var e0C, I9C, y9C, D8w
          e0C = 931271856
          I9C = -515496587
          y9C = 2
          for (var L9C = 1; C1v.w2C(L9C.toString(), L9C.toString().length, 40739) !== e0C; L9C++) {
            C1v.e0v(20)
            var H8C = C1v.c0v(258, 18, 78, 6)
            C1v.e0v(22)
            var n8C = C1v.J0v(19, 8, 4, 1685094, 561721)
            C1v.e0v(12)
            var M8C = C1v.c0v(24723, 9)
            C1v.e0v(23)
            var O8C = C1v.c0v(9, 308863, 34832, 20, 19)
            C1v.e0v(24)
            var u8C = C1v.c0v(4340, 18, 720)
            C1v.Z0v(25)
            var q8C = C1v.J0v(19, 19, 19, 3109666, 172760)
            C1v.Z0v(24)
            var p8C = C1v.J0v(18, 13, 572139)
            C1v.e0v(4)
            var K8C = C1v.c0v(302, 17)
            D8w =
              a8w.zoneFileBasePath -
              ((+'44', H8C) >= (52647, n8C)
                ? !0
                : (M8C, O8C) !== (41, u8C)
                ? +'963567' == q8C
                  ? p8C
                  : (K8C, +'0x95f9')
                : '') -
              R8w
            y9C += 2
          }
          if (C1v.i2C(y9C.toString(), y9C.toString().length, 10621) !== I9C) {
            C1v.Z0v(20)
            var o8C = C1v.c0v(18, 17, 55, 12)
            C1v.Z0v(26)
            var F8C = C1v.J0v(2, 304, 13, 322)
            C1v.Z0v(12)
            var I2t = C1v.J0v(518322, 3)
            C1v.Z0v(2)
            var T2t = C1v.J0v(26, 259)
            C1v.Z0v(2)
            var L2t = C1v.c0v(38373, 20)
            D8w =
              a8w.zoneFileBasePath -
              ((o8C, F8C) >= (52647, '561706' - 0)
                ? !0
                : (2747, 4976) !== ('41' | 0, '5042' - 0)
                ? 963567 == I2t
                  ? 572144
                  : (T2t, L2t)
                : '') -
              R8w
          }
          C1v.Z0v(4)
          var R2t = C1v.c0v(11370, 10612)
          C1v.e0v(24)
          var r2t = C1v.J0v(19, 10, 524)
          C1v.e0v(4)
          var G2t = C1v.J0v(2204, 14)
          C1v.e0v(27)
          var B2t = C1v.J0v(7628, 5, 2541, 2540)
          D8w =
            a8w.zoneFileBasePath +
            ((5850, R2t) <= (86.61, 350.24)
              ? !{}
              : (5180, +'7852') == (r2t, G2t)
              ? 921.16 === 321.36
                ? '746.58' - 0
                : (+'0xa99', B2t)
              : '/') +
            R8w
          return !s8w || !s8w.async
            ? a8w.parseZones(a8w.transport({ url: D8w, async: !'1' }))
            : a8w.transport({
                async: !0,
                url: D8w,
                success: function(H8w) {
                  var G1C
                  G1C = 'fu'
                  G1C += 'nc'
                  G1C += 'tio'
                  G1C += 'n'
                  return a8w.parseZones(H8w) && typeof s8w.callback === G1C && s8w.callback()
                },
                error: function() {
                  var m1C, B1C
                  m1C = "' zoneinfo "
                  m1C += 'files'
                  B1C = 'Erro'
                  B1C += 'r retrie'
                  B1C += 'ving '
                  B1C += "'"
                  C1v.e0v(21)
                  throw new Error(C1v.J0v(D8w, B1C, m1C))
                },
              })
        }
        this.loadingSchemes = { PRELOAD_ALL: D1C, LAZY_LOAD: 'lazyLoad', MANUAL_LOAD: 'manualLoad' }
        this.getRegionForTimezone = B8w
        this.loadingScheme = this.loadingSchemes.LAZY_LOAD
        this.loadedZones = {}
        this.zones = {}
        this.rules = {}
        this.init = function(O4w) {
          var p4w, C4w
          p4w = { async: !'' }
          C4w =
            this.loadingScheme === this.loadingSchemes.PRELOAD_ALL
              ? this.zoneFiles
              : this.defaultZoneFile || 'northamerica'
          for (var S4w in O4w) {
            p4w[S4w] = O4w[S4w]
          }
          return this.loadZoneFiles(C4w, p4w)
        }
        this.loadZoneFiles = function(u4w, K4w) {
          var F4w, J4w
          J4w = 0
          if (typeof u4w === 'string') {
            return this.loadZoneFile(u4w, K4w)
          }
          K4w = K4w || {}
          F4w = K4w.callback
          K4w.callback = function() {
            J4w++
            J4w === u4w.length && typeof F4w === 'function' && F4w()
          }
          for (var M4w = 0; M4w < u4w.length; M4w++) {
            this.loadZoneFile(u4w[M4w], K4w)
          }
        }
        this.loadZoneFile = function(Z4w, T4w) {
          var a1v = p4RR
          var N1C, n4C, M4C, O4C
          N1C = 'un'
          N1C += 'defined'
          if (typeof this.zoneFileBasePath === N1C) {
            n4C = -1934104521
            M4C = 2102866572
            a1v.e0v(1)
            O4C = a1v.c0v(0, '2')
            for (var u4C = 1; a1v.w2C(u4C.toString(), u4C.toString().length, 5729) !== n4C; u4C++) {
              throw new Error(
                'Please define a base path to your zone file directory -- timezoneJS.timezone.zoneFileBasePath.',
              )
              O4C += 2
            }
            if (a1v.w2C(O4C.toString(), O4C.toString().length, '56170' - 0) !== M4C) {
              throw new Error('')
            }
          }
          if (this.loadedZones[Z4w]) {
            return
          }
          this.loadedZones[Z4w] = !''
          return E8w(Z4w, T4w)
        }
        this.loadZoneJSONData = function(k4w, j4w) {
          var t4w
          t4w = function(A5w) {
            p4RR.e0v(21)
            A5w = eval(
              p4RR.c0v(
                A5w,
                (114.64, 806.85) <= '6539' * 1 ? '(' : 6861 != 3670 ? (+'0x1d6b', 180.95) : '0x13cf' - 0,
                617 < 656.02 ? ')' : ('0x1e0e' | 0, 9.23e3),
              ),
            )
            for (var h5w in A5w.zones) {
              a8w.zones[h5w] = A5w.zones[h5w]
            }
            for (var V5w in A5w.rules) {
              a8w.rules[V5w] = A5w.rules[V5w]
            }
          }
          return j4w ? t4w(a8w.transport({ url: k4w, async: !1 })) : a8w.transport({ url: k4w, success: t4w })
        }
        this.loadZoneDataFromObject = function(a5w) {
          if (!a5w) {
            return
          }
          for (var B5w in a5w.zones) {
            a8w.zones[B5w] = a5w.zones[B5w]
          }
          for (var Q5w in a5w.rules) {
            a8w.rules[Q5w] = a5w.rules[Q5w]
          }
        }
        this.getAllZones = function() {
          var z5w
          z5w = []
          for (var y5w in this.zones) {
            z5w.push(y5w)
          }
          return z5w.sort()
        }
        this.parseZones = function(n5w) {
          var E5w, G5w, b5w, L5w, q5w, U5w, v1C, k1C, t1C
          if (!n5w) {
            return ![]
          }
          E5w = n5w.split(7810 === ('7384' - 0, 7004) ? !!{} : (282.96, 886) >= 8251 ? ('m', 0xab) : '\n')
          G5w = []
          b5w = ''
          q5w = null
          U5w = null
          for (var X5w = 0; X5w < E5w.length; X5w++) {
            L5w = E5w[X5w]
            if (L5w.match(/^\s/)) {
              p4RR.e0v(21)
              L5w = p4RR.c0v(q5w, 'Zone ', L5w)
            }
            L5w = L5w.split(7740 < 2781 ? ('n', '0xaf4' - 0) : '#')[0]
            if (L5w.length > 3) {
              v1C = 'L'
              v1C += 'i'
              v1C += 'n'
              v1C += 'k'
              k1C = 'Ru'
              k1C += 'le'
              G5w = L5w.split(/\s+/)
              b5w = G5w.shift()
              switch (b5w) {
                case 'Zone':
                  q5w = G5w.shift()
                  if (!a8w.zones[q5w]) {
                    a8w.zones[q5w] = []
                  }
                  if (G5w.length < 3) break
                  G5w.splice(3, G5w.length, b8w(G5w))
                  if (G5w[3]) {
                    G5w[3] = Date.UTC.apply(null, G5w[3])
                  }
                  G5w[0] = -q8w(G5w['0' * 1])
                  a8w.zones[q5w].push(G5w)
                  break
                case k1C:
                  U5w = G5w.shift()
                  if (!a8w.rules[U5w]) {
                    a8w.rules[U5w] = []
                  }
                  G5w[0] = parseInt(G5w[0], 10)
                  G5w[1] = parseInt(G5w[1], 10) || G5w[1]
                  G5w[5] = Q8w(G5w[5])
                  G5w[6] = q8w(G5w[+'6'])
                  a8w.rules[U5w].push(G5w)
                  break
                case v1C:
                  if (a8w.zones[G5w['1' * 1]]) {
                    t1C = '. Cannot creat'
                    t1C += 'e link of a preexisted z'
                    t1C += 'one.'
                    throw new Error('Error with Link ' + G5w[+'1'] + t1C)
                  }
                  if (isNaN(G5w[0])) {
                    a8w.zones[G5w[1]] = G5w[0]
                  } else {
                    a8w.zones[G5w[1]] = parseInt(G5w[0], 10)
                  }
                  break
              }
            }
          }
          return !!{}
        }
        this.transport = E9w
        this.getTzInfo = function(H5w, R5w, c5w) {
          var v5w, s5w, D5w, f5w
          this.lazyLoadZoneFiles(R5w)
          v5w = z8w(H5w, R5w)
          s5w = +v5w[0]
          D5w = n8w(H5w, v5w, c5w, R5w)
          if (D5w) {
            s5w = U8w(s5w, D5w[6])
          }
          f5w = X8w(v5w, D5w)
          return { tzOffset: s5w, tzAbbr: f5w }
        }
        this.lazyLoadZoneFiles = function(r5w) {
          var l5w
          if (this.loadingScheme === this.loadingSchemes.LAZY_LOAD) {
            l5w = B8w(r5w)
            if (!l5w) {
              throw new Error('Not a valid timezone ID.')
            }
            this.loadZoneFiles(l5w)
          }
        }
      }()
    }.call(typeof window !== 'undefined' ? window : this))
    A9w.timezoneJS.timezone.loadingScheme = A9w.timezoneJS.timezone.loadingSchemes.MANUAL_LOAD
    A9w.timezoneJS.timezone.loadZoneDataFromObject({
      zones: {
        'Atlantic/Cape_Verde': [[60, '-', W1C, null]],
        'Africa/Cairo': [[-120, 'Egypt', 'EE%sT', null]],
        'Africa/Nairobi': [
          [
            -180,
            692.19 === (9709, '1730' - 0)
              ? 'a'
              : (4700, 2237) > ('2710' | 0, 834.38)
              ? (9410, 6767) !== (3636, 270)
                ? '-'
                : 5.51e3
              : ('r', 798),
            'EAT',
            null,
          ],
        ],
        'Africa/Casablanca': [[0, 'Morocco', 'WE%sT', null]],
        'Africa/Johannesburg': [[-120, 'SA', 'SAST', null]],
        'Africa/Tunis': [[-('60' - 0), U1C, 'CE%sT', null]],
        'Asia/Kabul': [[-270, 9606 <= 3485 ? (!'', !!{}) : '-', 'AFT', null]],
        'Asia/Baku': [[-240, 'Azer', '+04/+05', null]],
        'Asia/Dhaka': [[-+'360', s1C, 'BD%sT', null]],
        'Asia/Yangon': [
          [
            -390,
            ('840.91' * 1, 6790) >= (625.58, 683.1) ? ((8050, 867) > '3260' * 1 ? !0 : '-') : (0x15eb, +'775.54'),
            'MMT',
            null,
          ],
        ],
        'Asia/Rangoon': 'Asia/Yangon',
        'Asia/Hong_Kong': [[-480, j1C, 'HK%sT', null]],
        'Asia/Taipei': [[-('480' | 0), 'Taiwan', P1C, null]],
        'Asia/Kolkata': [[-+'330', '-', V1C, null]],
        'Asia/Tehran': [[-210, 'Iran', a1C, null]],
        'Asia/Jerusalem': [[-120, 'Zion', S1C, null]],
        'Asia/Tokyo': [[-540, l1C, 'J%sT', null]],
        'Asia/Seoul': [[-('540' | 0), 'ROK', 'K%sT', null]],
        'Asia/Pyongyang': [
          [
            -540,
            +'2640' === (8990, '8040' | 0) ? 0x24ef : (3461, 182) < (2590, 1810) ? '-' : (527.1, ![]),
            'KST',
            '1439596800000' - 0,
          ],
          [-('510' * 1), '-', 'KST', null],
        ],
        'Asia/Kuwait': [
          [-180, (3650, 69.67) == 9020 ? (221.72, 'V') : 1295 <= (138.87, 9976) ? '-' : (0x18cf, 583.69), w1C, null],
        ],
        'Asia/Kuala_Lumpur': [[-('480' * 1), '-', i1C, null]],
        'Asia/Hovd': [[-420, 'Mongol', 'HOV%sT', null]],
        'Asia/Ulaanbaatar': [[-480, f1C, 'ULA%sT', null]],
        'Asia/Kathmandu': [
          [
            -345,
            6955 !== (7700, 656) ? '-' : (37.58, 8490) > (7990, 505.08) ? ('l', 0x159e) : (!![], 9.05e3),
            'NPT',
            null,
          ],
        ],
        'Asia/Muscat': [
          [
            -240,
            (413.54, '414.23' - 0) == (223, 2750)
              ? (214.81, +'3506') === (5950, 186)
                ? (0x17e6, 0xc1d)
                : ('1218' | 0, 2895) < (5960, 4470)
                ? ('0x8ba' - 0, 'k')
                : 900.46
              : '-',
            'GST',
            null,
          ],
        ],
        'Asia/Karachi': [[-300, 'Pakistan', 'PK%sT', null]],
        'Asia/Bangkok': [[-420, '-', 'ICT', null]],
        'Australia/Darwin': [[-570, 'Aus', 'CST', null]],
        'Australia/Perth': [[-480, z1C, 'WST', null]],
        'Australia/Eucla': [[-('525' - 0), b1C, H1C, null]],
        'Australia/Brisbane': [[-600, 'AQ', 'EST', null]],
        'Australia/Adelaide': [[-('570' * 1), 'AS', g1C, null]],
        'Australia/Sydney': [[-600, 'AN', 'EST', null]],
        'Pacific/Guam': [[-600, '-', n1C, null]],
        'Pacific/Kiritimati': [
          [-840, 6943 !== 5030 ? '-' : 535.98 == (591, 3250) ? !1 : (613.62, 7.18e3), 'LINT', null],
        ],
        'Pacific/Noumea': [[-660, 'NC', 'NC%sT', null]],
        'Pacific/Auckland': [[-720, 'NZ', 'NZ%sT', null]],
        'Pacific/Chatham': [[-765, M1C, 'CHA%sT', null]],
        'Pacific/Apia': [
          [660, O1C, 'WSDT', +'1325203200000'],
          [-+'780', '1:00', d1C, 1333252800000],
          [-780, 'WS', 'WS%sT', null],
        ],
        'Pacific/Tongatapu': [[-780, u1C, '+13/+14', null]],
        'Pacific/Midway': [[660, '-', 'SST', null]],
        'Atlantic/Reykjavik': q1C,
        UTC: p1C,
        'Etc/UTC': [[0, '-', 'UTC', null]],
        'Europe/London': [[0, 'EU', 'GMT/BST', null]],
        'Europe/Brussels': [[-60, K1C, 'CE%sT', null]],
        'Europe/Helsinki': [[-120, o1C, 'EE%sT', null]],
        'Europe/Athens': [[-120, 'EU', F1C, null]],
        'Europe/Amsterdam': [[-60, 'EU', 'CE%sT', null]],
        'Atlantic/Azores': [[+'60', Q1C, Y1C, null]],
        'Europe/Bucharest': [[-120, 'EU', C1C, null]],
        'Europe/Kaliningrad': [
          [-180, '-', '+03', 1414288800000],
          [-120, (7570, 4830) !== 9930 ? '-' : (706.03, 'u'), e1C, null],
        ],
        'Europe/Moscow': [
          [-240, '-', 'MSK', 1414288800000],
          [
            -180,
            (+'9201', 4950) >= +'6110'
              ? (7.48e3, 0x1fd6)
              : 7980 === +'6030'
              ? (4900, '469.55' - 0) <= (8320, 892.78)
                ? 5.94e3
                : !{}
              : '-',
            'MSK',
            null,
          ],
        ],
        'Europe/Simferopol': [
          [-120, L3C, 'EE%sT', 1396144800000],
          [
            -240,
            (8850, 6530) < ('3180' | 0) ? (+'3.18e+3', 3.89e3) : 779.78 == 695.03 ? 0x1185 : '-',
            c3C,
            1414288800000,
          ],
          [-180, '-', 'MSK', null],
        ],
        'Europe/Samara': [
          [-240, (2381, 5840) <= 373.45 ? 286 : 1507 !== (382.61, 5240) ? '-' : (9.72e3, !!''), '+04', null],
        ],
        'Asia/Yekaterinburg': [
          [-360, '-', '+06', 1414288800000],
          [
            -300,
            (803.17, 829.12) !== (4000, 1760)
              ? '-'
              : 5213 <= '3240' - 0
              ? (780.22, !!0)
              : (553.49, 9490) === (3120, 337.86)
              ? !!1
              : (!0, 'a'),
            R3C,
            null,
          ],
        ],
        'Asia/Novosibirsk': [
          [-420, '-', Z3C, 1414288800000],
          [
            -360,
            ('3996' - 0, 5581) == '856.4' - 0 ? 2.94e3 : 253.26 === 1344 ? !{} : 232 > 3996 ? 0x1222 : '-',
            r3C,
            '1469325600000' * 1,
          ],
          [-420, '-', '+07', null],
        ],
        'Asia/Krasnoyarsk': [
          [
            -480,
            (3761, 3820) < (899.83, 4664) ? ((3730, 9363) >= (5054, 351.92) ? '-' : !'1') : (488.86, 938.6),
            '+08',
            1414288800000,
          ],
          [-420, (121, '8960' - 0) >= +'711.89' ? '-' : (!0, 3.59e3), '+07', null],
        ],
        'Asia/Irkutsk': [
          [-540, '-', '+09', 1414288800000],
          [-480, (1850, 281.8) < (6000, 2922) ? '-' : 0x8cd, G3C, null],
        ],
        'Asia/Yakutsk': [[-600, '8820' - 0 === 8833 ? 't' : '-', '+10', 1414288800000], [-540, '-', '+09', null]],
        'Asia/Vladivostok': [
          [
            -660,
            8690 >= (7880, '2090' - 0)
              ? (552.79, 8560) > (500.01, 2720)
                ? '-'
                : (9175, 8520) < 418
                ? !{}
                : (0x18ca, 273.77)
              : (!!1, !{}),
            B3C,
            +'1414288800000',
          ],
          [-+'600', (8661, 3100) == 6207 ? +'993.40' : '-', '+10', null],
        ],
        'Asia/Magadan': [
          [-720, (695.19, 5159) == (+'255.46', 282.52) ? (3.05e3, 2.48e3) : '-', m3C, 1414288800000],
          [
            -600,
            (2591, +'4539') >= (+'8277', 980.09)
              ? ('1040' * 1, 6512) !== (3852, +'8370')
                ? (6270, +'8160') === (4016, 302)
                  ? 686.01
                  : '-'
                : (6.15e3, 617.68)
              : (0xd8e, !![]),
            '+10',
            1461463200000,
          ],
          [-660, '-', '+11', null],
        ],
        'Asia/Srednekolymsk': [
          [-720, (8593, 8734) === 1520 ? 'I' : (8935, 5494) == 5530 ? (1.25e3, !!{}) : '-', '+12', '1414288800000' * 1],
          [-+'660', '-', '+11', null],
        ],
        'Asia/Kamchatka': [
          [-720, (8969, 316.44) != (4930, 267) ? ((3230, 9950) !== 386.57 ? '-' : 8.46e2) : ('l', 'u'), '+12', null],
        ],
        'Europe/Belgrade': [[-60, 'EU', 'CE%sT', null]],
        'Europe/Sarajevo': J3C,
        'Europe/Istanbul': [
          [-120, 'EU', 'EE%sT', 1396141200000],
          [-120, '-', 'EET', 1396227600000],
          [-('120' * 1), 'EU', A3C, 1445734800000],
          [-120, '1:00', 'EEST', 1446944400000],
          [-('120' - 0), 'EU', 'EE%sT', 1473206400000],
          [-180, '-', '+03', null],
        ],
        'Asia/Istanbul': x3C,
        'America/New_York': [[300, 'US', 'E%sT', null]],
        'America/Chicago': [[360, 'US', 'C%sT', null]],
        'America/Denver': [[420, h3C, 'M%sT', null]],
        'America/Los_Angeles': [[480, 'US', E3C, null]],
        'America/Juneau': [[540, 'US', 'AK%sT', null]],
        'Pacific/Honolulu': [[600, '-', 'HST', null]],
        'America/Phoenix': [
          [
            420,
            9430 !== 8531 ? ((7378, 3699) >= (7696, 4365) ? ((9977, 1760) <= 7880 ? 180.06 : 5.27e3) : '-') : 9.82e3,
            'MST',
            null,
          ],
        ],
        'America/Indiana/Indianapolis': [[300, 'US', 'E%sT', null]],
        'America/St_Johns': [[210, X3C, 'N%sT', null]],
        'America/Halifax': [['240' - 0, 'Canada', D3C, null]],
        'America/Regina': [[360, '-', 'CST', null]],
        'America/Mexico_City': [[360, 'Mexico', N3C, null]],
        'America/Chihuahua': [[420, 'Mexico', k3C, null]],
        'America/Tijuana': [[+'480', U3C, s3C, null]],
        'America/Costa_Rica': [[360, 'CR', 'C%sT', null]],
        'America/Puerto_Rico': [[240, '-', 'AST', null]],
        'America/Argentina/Buenos_Aires': [[180, 'Arg', 'AR%sT', null]],
        'America/Sao_Paulo': [['180' | 0, j3C, 'BR%sT', null]],
        'America/Santiago': [[240, P3C, 'CL%sT', null]],
        'America/Bogota': [[300, 'CO', 'CO%sT', null]],
        'Atlantic/South_Georgia': [[120, '-', 'GST', null]],
        'America/Caracas': [
          [
            270,
            257 !== (7353, 7103)
              ? '-'
              : (9430, 9460) >= (520.8, 7180)
              ? 8387 === (117, 4216)
                ? ('T', 4.23e3)
                : (800.99, 567.47)
              : 324.61,
            'VET',
            1462069800000,
          ],
          [
            240,
            112.74 != (8860, '7810' * 1) ? (2400 == (+'4320', 4860) ? (!{}, '0x1f58' * 1) : '-') : 'e',
            'VET',
            null,
          ],
        ],
      },
      rules: {
        Egypt: [
          [
            2014,
            'only',
            ('210.07' * 1, 844) === 5340
              ? 890.88
              : ('7476' - 0, 2208) <= 201.67
              ? ('i', 'E')
              : (+'1583', '2900' * 1) === ('8410' | 0)
              ? (7.98e3, 'x')
              : '-',
            'May',
            V3C,
            [+'0', 0, 0, null],
            60,
            'S',
          ],
          [
            +'2014',
            'only',
            +'6410' < (1706, 928) ? 'l' : (6960, 8060) !== (1930, 2820) ? '-' : (946.12, +'0xa22'),
            'Jun',
            '27',
            [+'0', 0, 0, null],
            0,
            1240 !== ('9391' * 1, 744.26) ? (95.91 === 2880 ? (+'6.72e+3', 37.71) : '-') : ('37.46' - 0, 9.56e3),
          ],
          [2014, S3C, '-', 'Aug', '1', [0, +'0', 0, null], 60, 'S'],
          [
            2014,
            l3C,
            (7733, 8338) == +'9174' ? (968.73 == (6950, 842.21) ? 0x206f : 'E') : '-',
            'Sep',
            'lastThu',
            [23, 0, 0, 's'],
            0,
            '-',
          ],
        ],
        Morocco: [
          [
            2011,
            'only',
            '-',
            w3C,
            '3',
            [0, 0, 0, null],
            '60' | 0,
            (+'8600', 143.87) == +'3080' ? ('2280' - 0 < 9830 ? (+'4.16e+3', !!{}) : (!![], 0x1eee)) : 'S',
          ],
          ['2011' * 1, 'only', '-', i3C, z3C, [0, 0, 0, null], 0, (2680, 9920) > (3240, 158.66) ? '-' : 'l'],
          [
            2012,
            2013,
            ('2340' | 0, 6650) === 166.73 ? (!!{}, 'j') : '-',
            'Apr',
            b3C,
            [2, 0, 0, null],
            60,
            (2212, 3890) === (80.17, 176.5) ? (0x3c, +'499.91') : 'S',
          ],
          [
            +'2012',
            H3C,
            '5536' - 0 != (6120, 3280)
              ? ('3100' * 1, 897) !== 916.34
                ? '-'
                : '208.05' * 1 >= ('3488' * 1, '4010' * 1)
                ? 1.68e3
                : (0xb15, !!0)
              : !!{},
            'Jul',
            '20',
            [3, 0, 0, null],
            0,
            2435 <= 2500 ? '-' : 'b',
          ],
          [2012, n3C, '-', 'Aug', '20', [2, '0' | 0, '0' | 0, null], 60, 'S'],
          [2012, 'only', '-', 'Sep', '30', [3, 0, 0, null], 0, (912, 7140) >= +'129.11' ? '-' : (8.33e3, '0x255b' - 0)],
          [
            2013,
            'only',
            '913.29' - 0 > (3090, '9490' - 0) ? (9.83e3, 994.75) : '-',
            M3C,
            '7',
            ['3' - 0, 0, 0, null],
            +'0',
            '-',
          ],
          [
            2013,
            'only',
            9970 != ('2044' | 0)
              ? (849.58, 4135) != 30
                ? 990.85 != 4846
                  ? '-'
                  : (!!{}, !'')
                : +'7.38e+3'
              : ('0x16e5' - 0, 0x10a1),
            'Aug',
            '10',
            [2, +'0', 0, null],
            60,
            9718 == '6030' * 1
              ? (0x608, !{})
              : 5191 !== ('2350' - 0, 4221)
              ? 'S'
              : 5320 == 768
              ? (0x2061, 0x997)
              : (8.88e3, 'l'),
          ],
          [2013, 'max', '-', O3C, 'lastSun', ['3' | 0, 0, 0, null], 0, '-'],
          [
            2014,
            2021,
            (884.07, 7147) === 846.35
              ? '1648' - 0 == (+'6536', 2820)
                ? +'0x19c6'
                : +'136.53' == (1376, 520)
                ? ('d', +'9.75e+3')
                : 3.31e3
              : '-',
            d3C,
            'lastSun',
            [+'2', 0, '0' * 1, null],
            60,
            505.87 === (+'8497', +'5520') ? ('k', 0x468) : 'S',
          ],
          [
            2014,
            'only',
            '-',
            u3C,
            q3C,
            [3, 0, 0, null],
            0,
            (158, '2701' - 0) != (830.36, '636.85' * 1)
              ? '-'
              : (1910, 50.66) !== 6351
              ? 1140 <= 4650
                ? !1
                : +'58.24'
              : (0xee9, 'U'),
          ],
          [
            2014,
            K3C,
            2050 === 9358
              ? 964.37
              : (720.69, 9650) === (187, 2952)
              ? ![]
              : '7270' - 0 === +'8470'
              ? (!!'', 3.2e3)
              : '-',
            o3C,
            453 === (3070, 5633) ? (!!1, 0xfb2) : '2',
            ['2' * 1, 0, +'0', null],
            60,
            '2930' - 0 <= 4140
              ? (8440, 1410) < (+'6930', 8904)
                ? 9890 < (9450, +'3985')
                  ? 435.43
                  : 'S'
                : 9.94e3
              : (264.82, 'D'),
          ],
          [
            2015,
            F3C,
            2600 !== 502 ? (4597 <= 6600 ? '-' : 0x157b) : ('0xa6c' | 0, '9.22e+3' * 1),
            Q3C,
            C3C,
            [3, 0, 0, null],
            +'0',
            (9299, 2187) < '3560' - 0 ? '-' : 0x12f9,
          ],
          [
            '2015' * 1,
            e3C,
            +'466.49' !== 3610
              ? 361.57 > (1200, 5113)
                ? (+'237', 12) !== (9828, 3917)
                  ? (930, 129.24)
                  : 383.07
                : '-'
              : 2.41e3,
            'Jul',
            '19',
            [+'2', 0, 0, null],
            60,
            'S',
          ],
          [
            2016,
            'only',
            (6020, 7707) >= (741.74, 268) ? '-' : 'L',
            I5C,
            +'2240' === 35.84 ? (926, 680.22) : '5',
            ['3' | 0, 0, 0, null],
            0,
            7550 !== 9920 ? ((+'8790', 6690) !== 2830 ? '-' : !!0) : !![],
          ],
          [
            2016,
            'only',
            (848.66, +'8330') >= (919.47, 592.38)
              ? 307.51 < '8650' * 1
                ? '-'
                : 8330 == (1430, 8520)
                ? (881.88, 'a')
                : (1.09e3, !!'')
              : (555.91, 629.59),
            'Jul',
            '10',
            [2, 0, 0, null],
            60,
            'S',
          ],
          [
            2017,
            'only',
            '9240' * 1 > (+'3752', 4905) ? '-' : (9790, 3550) >= 915.88 ? !{} : (324.44, 'O'),
            'May',
            '21',
            [3, 0, 0, null],
            0,
            (814.75, +'1420') < (948, 2360)
              ? 7950 < (981.43, '6865' * 1)
                ? 3890 === (861.68, 370.63)
                  ? '775.39' - 0
                  : (1.33e3, 8.48e2)
                : '-'
              : 0x1d8e,
          ],
          [
            2017,
            'only',
            '-',
            y5C,
            (6520, 5711) <= ('6450' - 0, 4452) ? (!'', 586.57) : (561.6, 215.61) < 6700 ? '2' : 9.24e3,
            [2, 0, 0, null],
            60,
            ('9820' * 1, 1882) <= '3325' - 0
              ? (4960, +'5452') < 5500
                ? 'S'
                : (+'2290', 222.9) != ('751.88' - 0, 456.46)
                ? 2.53e3
                : (!1, 3.14e2)
              : (590.08, 914.68),
          ],
          [
            2018,
            'only',
            '5120' - 0 !== (9130, '649.21' * 1) ? '-' : ('Z', 'v'),
            'May',
            '13',
            [+'3', 0, 0, null],
            0,
            '-',
          ],
          [
            2018,
            T5C,
            (689, 993.83) < (+'4021', 853.65)
              ? +'420' != 932
                ? (6173, 911.13) > (1950, '527.29' * 1)
                  ? (0xca, +'5.78e+2')
                  : 3.14e3
                : (0x15d1, 5.15e3)
              : '-',
            'Jun',
            '17',
            [2, 0, 0, null],
            60,
            355.27 <= '1836' * 1
              ? 'S'
              : (4491, 47.11) > (6344, 4120)
              ? '0xcd' | 0
              : (754.75, 5197) !== (697.32, 9865)
              ? 4.61e2
              : ('o', !!0),
          ],
          [
            '2019' - 0,
            L5C,
            856 > 986.57 ? ((+'1510', 3044) != 8337 ? (!!1, 2.66e3) : (0xb0a, !{})) : '-',
            'May',
            '5',
            [3, 0, 0, null],
            0,
            (6150, 330) <= +'29.53'
              ? (4.14e3, +'557.24')
              : 894.48 === (4159, '812.84' * 1)
              ? (4629, 3960) != (5730, 545.43)
                ? 0x1d58
                : 0x26a2
              : '-',
          ],
          [
            2019,
            'only',
            '-',
            c5C,
            154.4 !== (999.57, 2170) ? '9' : (777.52, 615.71),
            [+'2', 0, '0' | 0, null],
            60,
            (589.55, '8630' * 1) == 3500 ? 0xa57 : 'S',
          ],
          [
            2020,
            R5C,
            6360 <= (780.37, 1152)
              ? 0x315
              : ('8117' | 0) >= 5430
              ? (290.5, 8174) <= (270.83, 6730)
                ? ('P', 675.98)
                : '-'
              : 6.42e2,
            'Apr',
            '19',
            [3, 0, 0, null],
            0,
            ('650' - 0, 841.88) === 9000 ? ((1140, 2745) != 9694 ? ![] : 843.74) : '-',
          ],
          [
            2020,
            'only',
            '355.07' * 1 === 5980 ? (3630 > (9050, +'1314') ? !!{} : 0x7f1) : '-',
            'May',
            '24',
            [2, 0, 0, null],
            60,
            (+'81', 810.22) !== (2762, 7030)
              ? (5671, 5080) > (664.31, 85)
                ? 'S'
                : +'4680' == ('9750' * 1, 35)
                ? (813.37, !!{})
                : 5.87e3
              : (582.01, 3.77e3),
          ],
          [
            '2021' | 0,
            Z5C,
            (712.97, 9250) === (2663, 5930) ? 35.08 : '-',
            'Apr',
            r5C,
            [3, 0, 0, null],
            0,
            ('2957' - 0, 3470) >= 6010
              ? ('o', 943.12)
              : +'3010' < 3201
              ? (1460, 1977) !== (1570, 6354)
                ? '-'
                : (+'9.10e+3', 'F')
              : ![],
          ],
          [
            +'2021',
            G5C,
            (434.21, 7620) >= (741.14, 971.98)
              ? '-'
              : ('7704' | 0) != 419
              ? 8120 !== +'3703'
                ? (0x102, !!'1')
                : 727.28
              : ('F', '142' - 0),
            'May',
            '16',
            [2, 0, +'0', null],
            '60' - 0,
            7100 === (+'8420', '9020' - 0) ? +'5.41e+3' : (8893, 7157) == (3680, 507.37) ? !'1' : 'S',
          ],
        ],
        SA: [],
        Tunisia: [],
        Azer: [
          [
            1997,
            2015,
            '-',
            'Mar',
            'lastSun',
            [4, 0, 0, null],
            60,
            811.57 != (6720, 6660) ? 'S' : 905.66 != 9140 ? (7.56e3, 'k') : 4.68e3,
          ],
          [
            1997,
            +'2015',
            511.84 < 9068
              ? 860.74 == '7481' * 1
                ? (2661, 3164) !== 986.9
                  ? 0x338
                  : '6.80e+3' * 1
                : '-'
              : (5.0e3, +'819.97'),
            'Oct',
            B5C,
            [5, 0, +'0', null],
            0,
            '-',
          ],
        ],
        Dhaka: [],
        HK: [],
        Taiwan: [],
        Iran: [
          [
            2009,
            2011,
            '-',
            'Mar',
            m5C,
            ['0' - 0, 0, 0, null],
            60,
            (480, 9850) !== 81.03
              ? 'D'
              : 523.92 > (5780, 8570)
              ? 1.16e3
              : (724.83, '9926' * 1) >= 5296
              ? 9.36e3
              : ('f', 200.08),
          ],
          [
            2009,
            +'2011',
            '-',
            'Sep',
            '22',
            [0, 0, 0, null],
            0,
            (933.42, 899.24) === (806.18, 5220) ? 6.28e3 : (4090, 441.74) == (7990, 527.3) ? 669.02 : 'S',
          ],
          [
            +'2012',
            J5C,
            596.03 !== +'92.65'
              ? (7700, 2990) != 294
                ? (+'9700', 762) === (687.34, +'849.69')
                  ? (192.98, '1.41e+3' * 1)
                  : '-'
                : (428.47, 632.57)
              : (0x2541, !!{}),
            'Mar',
            '21',
            [0, 0, 0, null],
            +'60',
            'D',
          ],
          [
            2012,
            'only',
            '-',
            'Sep',
            '21',
            [0, 0, '0' * 1, null],
            0,
            5510 < '5850' * 1
              ? '158.21' * 1 <= 210.44
                ? (+'9522', 158) <= (7670, 3279)
                  ? 'S'
                  : 'M'
                : 5.25e2
              : 7.69e3,
          ],
          [
            2013,
            2015,
            (9522, 5675) !== (463.19, 138) ? '-' : 0x24e1,
            'Mar',
            '22',
            ['0' - 0, +'0', 0, null],
            60,
            (796.69, 628) >= (365, 99.66) ? 'D' : !!'1',
          ],
          [
            2013,
            2015,
            798.2 == 5943 ? (7542 === (156.91, 787.14) ? (+'0x26a9', 0x63e) : (433.11, 0x24f3)) : '-',
            A5C,
            x5C,
            ['0' * 1, 0, 0, null],
            0,
            790.99 > (509.66, 6230)
              ? (3480, '459' | 0) >= (1496, 56)
                ? (621.46, +'8580') >= 6337
                  ? 0xc7c
                  : (4.41e3, 0x1a26)
                : ('t', 'k')
              : 'S',
          ],
          [
            2016,
            'only',
            ('805.28' * 1, 801.75) != ('4814' - 0, 815) ? '-' : 0x26e2,
            'Mar',
            h5C,
            [0, 0, 0, null],
            60,
            466.48 >= 773.27 ? ('6.09e+2' - 0, 201.21) : +'9730' < (7850, '899.22' * 1) ? !0 : 'D',
          ],
          [2016, E5C, (8960, 3423) === (+'5610', 1687) ? ('A', 8.22e2) : '-', 'Sep', '21', [0, 0, 0, null], 0, 'S'],
          [
            2017,
            '2019' | 0,
            6041 !== (6150, '917.81' - 0) ? '-' : (8.82e3, 249.25),
            'Mar',
            X5C,
            [0, 0, 0, null],
            60,
            'D',
          ],
          [
            2017,
            2019,
            (570.95, 6970) >= +'2040' ? '-' : ('S', 0x10e9),
            'Sep',
            D5C,
            [0, 0, 0, null],
            0,
            7900 != 1085
              ? (468.25, 35.7) == 3242
                ? (470, 44.27) !== (395, 853.46)
                  ? ('R', 0x20b3)
                  : (355.95, 423.08)
                : 'S'
              : ('F', 511),
          ],
          [
            2020,
            'only',
            (8660, 807.13) < 300.06 ? (4.86e2, 'Z') : '-',
            'Mar',
            '21',
            [0, +'0', '0' * 1, null],
            60,
            '679.08' - 0 === 768.25
              ? 33.8
              : 5958 !== (786, 1439)
              ? +'3867' == (2605, 550.21)
                ? +'0x1e88'
                : 'D'
              : 942.41,
          ],
          [+'2020', N5C, 4092 > (738.27, +'922') ? '-' : 0x598, k5C, v5C, [0, 0, 0, null], '0' | 0, 'S'],
          [
            +'2021',
            2023,
            (568.46, 5820) < 896.87
              ? 'I'
              : 697.83 > (7520, 6710)
              ? 538.52 >= (1740, 752.61)
                ? 6.02e3
                : ('Q', '7.06' * 1)
              : '-',
            t5C,
            W5C,
            [0, 0, 0, null],
            60,
            'D',
          ],
          [
            2021,
            2023,
            (6228, 811.88) <= (649.04, 8220) ? '-' : (![], 'j'),
            U5C,
            '22',
            ['0' - 0, +'0', +'0', null],
            0,
            'S',
          ],
        ],
        Zion: [
          [
            2011,
            'only',
            '-',
            'Apr',
            '1',
            [2, 0, 0, null],
            60,
            (2.49, 8660) < ('2714' - 0, '2980' - 0)
              ? (2.49e2, 'A')
              : 6368 >= 4833
              ? 'D'
              : (7930, 7100) === ('233.62' * 1, '3469' * 1)
              ? (0x59d, 35.94)
              : 'U',
          ],
          [
            2011,
            'only',
            218.99 == 5471
              ? (3079, 9625) > (2150, 970.52)
                ? (5040, 873.46) != (9150, 6609)
                  ? +'670'
                  : (3.45e3, 352.8)
                : '0x68b' - 0
              : '-',
            'Oct',
            '2',
            [2, +'0', 0, null],
            '0' * 1,
            3989 === 8450 ? ((665.3, 4440) === (315, 311.42) ? (0x1fc2, !1) : ('z', 3.44e3)) : 'S',
          ],
          [
            2012,
            s5C,
            4454 > 7180 ? !!1 : 1130 != 1290 ? '-' : ('191.18' * 1, 'j'),
            'Mar',
            'Fri>=26',
            [2, 0, '0' | 0, null],
            '60' * 1,
            5630 > (7150, 2914)
              ? (+'6769', 52.34) <= (5920, 6921)
                ? 'D'
                : (+'1820', 9645) < '909' - 0
                ? (!!{}, 0xa23)
                : (5.88e3, 1.46e3)
              : 772.23,
          ],
          [
            2012,
            j5C,
            8140 == 5844
              ? (!!'', !![])
              : (+'2900', 562.87) === 1060
              ? '765' - 0
              : 974.15 != 306.43
              ? '-'
              : (+'0x5ae', +'47.44'),
            'Sep',
            '23',
            ['2' | 0, '0' * 1, '0' | 0, null],
            0,
            (+'165.31', 9322) == (6597, '762.12' * 1) ? (4038 !== (2653, 4460) ? (0x8a5, 0x21a8) : !0) : 'S',
          ],
          [2013, 'max', '-', 'Mar', 'Fri>=23', ['2' * 1, 0, 0, null], 60, 5100 != (2225, 407) ? 'D' : !!'1'],
          [2013, 'max', '-', 'Oct', P5C, [2, 0, 0, null], 0, 'S'],
        ],
        Japan: [],
        ROK: [],
        Mongol: [
          [
            2015,
            V5C,
            '-',
            'Mar',
            a5C,
            [2, +'0', 0, null],
            60,
            (674, 6016) < 8910
              ? (9754, 4450) <= (1843, +'2820')
                ? (!![], +'1.34e+3')
                : 7577 > (8040, 899.58)
                ? 'S'
                : !!''
              : (869.58, 2.08e3),
          ],
          [
            2015,
            'max',
            8888 !== 3600 ? ((9640, 1409) === (1028, 4475) ? !1 : '-') : (7.08e3, 'k'),
            'Sep',
            'lastSat',
            [0, +'0', 0, null],
            0,
            (255.31, 971) <= 19.28
              ? !!0
              : ('940' | 0) > (9212, 4220)
              ? (!!1, 4.57e3)
              : (7059, 7.54) != (5540, 8160)
              ? '-'
              : ('F', '0xdf' - 0),
          ],
        ],
        Pakistan: [],
        Aus: [],
        AW: [],
        AQ: [],
        AS: [
          [
            2008,
            S5C,
            7524 != (4956, 1167)
              ? (4996, +'100.83') >= ('5050' | 0, '6562' * 1)
                ? (340.91, 0x1ea)
                : (9990, 7110) == (3567, 3291)
                ? 'R'
                : '-'
              : (+'5.72e+3', '1.35e+3' - 0),
            'Apr',
            l5C,
            [
              2,
              +'0',
              0,
              (226, 223) <= 4438
                ? ('869.89' - 0, 79.24) >= (478.99, 779.65)
                  ? (4720, '6394' | 0) <= ('9778' * 1, 2389)
                    ? (301.91, 582.63)
                    : ('0x2058' | 0, 'g')
                  : 's'
                : +'0x117f',
            ],
            +'0',
            '-',
          ],
          [
            2008,
            'max',
            77.46 === (9601, 955.43) ? (830.48, !'1') : ('4747' - 0, +'1360') !== (8733, 346.6) ? '-' : (!!1, 0x13f5),
            'Oct',
            'Sun>=1',
            [+'2', +'0', 0, 's'],
            +'60',
            6521 < 163 ? (0x11e8, ![]) : 2076 > 754.2 ? '-' : (734.59, 'n'),
          ],
        ],
        AN: [
          [2008, 'max', '-', 'Apr', 'Sun>=1', [2, 0, 0, 's'], 0, '-'],
          [
            2008,
            'max',
            '-',
            'Oct',
            'Sun>=1',
            [2, 0, 0, 1598 >= (844.32, 8310) ? !'1' : (5540, '407.22' - 0) > +'363' ? 's' : 'X'],
            '60' * 1,
            (8170, +'311.78') >= (9041, 464.72)
              ? 0x1387
              : (711.36, '6300' * 1) < (3360, +'3582')
              ? (5.12e3, 0x1f3a)
              : '-',
          ],
        ],
        NC: [],
        NZ: [
          [
            '2007' - 0,
            w5C,
            (2650, 4051) < (8596, 699)
              ? (0x23d1, !{})
              : '3028' * 1 === (+'660', 5000)
              ? !!{}
              : 2590 != (1880, 133)
              ? '-'
              : '0xee5' * 1,
            'Sep',
            'lastSun',
            [
              2,
              0,
              0,
              (2211, 5510) > (9270, 3173)
                ? 429 === 1403
                  ? (293.58, 8461) <= (4270, '334.27' * 1)
                    ? +'0x1d5b'
                    : 0x1054
                  : 's'
                : (894.91, !![]),
            ],
            60,
            5554 < +'434.46'
              ? 9.64e3
              : (669.54, 525.03) !== 4850
              ? (527.98, '105.75' - 0) === (+'1667', '1180' - 0)
                ? (0x15b3, 'X')
                : 'D'
              : (!!'1', +'91.69'),
          ],
          [
            '2008' * 1,
            'max',
            (4871, 526.44) < 9499 ? '-' : (0x208f, +'916.93'),
            'Apr',
            'Sun>=1',
            [
              2,
              0,
              0,
              9860 == 391.64 ? (286.08, !!{}) : (+'6600', 5590) > 307.15 ? 's' : 7909 != 220.83 ? 4.82e3 : '0xb3f' * 1,
            ],
            '0' | 0,
            (3457, +'328') === 2120
              ? 'n'
              : 309.89 != (2971, 4858)
              ? 449 === (+'290.64', 9982)
                ? 91
                : 'S'
              : (0x1290, !!{}),
          ],
        ],
        Chatham: [
          [
            +'2007',
            'max',
            3475 === 2770 ? (9323 <= 660.79 ? (9.42e3, !!{}) : +'9470' < 5060 ? (978.9, 'E') : !!'') : '-',
            i5C,
            'lastSun',
            ['2' * 1, 45, 0, (3624, 4027) !== +'9275' ? 's' : ('8.87e+3' * 1, 0x214d)],
            +'60',
            (+'712.63', 652.29) != (7736, 310.63)
              ? 'D'
              : 4100 != (843.75, 3420)
              ? (5524, 8560) != (2517, '4987' - 0)
                ? ![]
                : 'v'
              : (!![], 0x10ae),
          ],
          [
            2008,
            'max',
            '-',
            'Apr',
            'Sun>=1',
            [
              2,
              '45' * 1,
              0,
              365.31 != (725, 514.36)
                ? 410.16 >= 5420
                  ? (+'7600', 828) >= (4814, 1580)
                    ? !![]
                    : ('v', 933.12)
                  : 's'
                : 3.88e3,
            ],
            0,
            'S',
          ],
        ],
        WS: [
          [2011, f5C, 531 !== 3690 ? (1300 !== 316 ? '-' : ![]) : 242.83, 'Apr', z5C, [+'4', 0, 0, null], 0, 'S'],
          [2011, 'only', '-', 'Sep', 'lastSat', [3, 0, 0, null], 60, 'D'],
          [
            2012,
            b5C,
            '-',
            H5C,
            'Sun>=1',
            [4, +'0', +'0', null],
            0,
            614.25 > (91.88, 525.16) ? '-' : (4850, '6624' | 0) < '4445' * 1 ? !!1 : 0x6ca,
          ],
          [
            2012,
            'max',
            ('3730' - 0, 2161) !== ('3440' | 0)
              ? (959.48, 712.57) < 2550
                ? '-'
                : (+'6480', 897.89) < (670, '728.89' - 0)
                ? (9.69e3, 'n')
                : 0xb99
              : 'f',
            g5C,
            'lastSun',
            [3, 0, 0, null],
            60,
            9550 >= 2513 ? 'D' : (280.64, !{}),
          ],
        ],
        Tonga: [
          [2016, 'max', 213.65 === (191.75, 1067) ? +'7.80e+3' : '-', 'Nov', n5C, [2, 0, 0, null], 60, 'S'],
          [
            '2017' - 0,
            'max',
            (+'181', +'6780') == (6111, 8560) ? (+'8273' > (554, 4840) ? 'b' : 'K') : '-',
            'Jan',
            'Sun>=15',
            [3, 0, 0, null],
            0,
            +'114.69' >= (368.07, 9812)
              ? 74.98 <= (4579, 1820)
                ? 1339 === (58.97, 2652)
                  ? ('S', 'E')
                  : 2.66e3
                : (!!{}, !'1')
              : 'S',
          ],
        ],
        EU: [
          [
            1981,
            'max',
            2016 < (+'1730', 3570)
              ? (+'944.37', 1420) != (721, 3892)
                ? '-'
                : 901 < 9430
                ? (4.38e3, 'X')
                : (!!{}, 1.39e3)
              : (0x1e7b, 'g'),
            'Mar',
            'lastSun',
            ['1' | 0, 0, 0, 'u'],
            '60' * 1,
            250.43 <= (5220, 505.8)
              ? 'S'
              : (+'90.8', 9690) < '6150' - 0
              ? 0x21e1
              : 334 > 35.74
              ? (0x1b18, 6.46e3)
              : ('185.14' - 0, 2.83e3),
          ],
          [
            +'1996',
            'max',
            '-',
            'Oct',
            'lastSun',
            ['1' - 0, +'0', '0' | 0, 4614 <= (659.5, 9180) ? 'u' : (!1, 28.96)],
            '0' - 0,
            (542.19, +'591.7') >= (6373, 123.91) ? '-' : (910.68, 4680) != (9767, +'423.62') ? !'1' : (!![], 1.99e3),
          ],
        ],
        US: [
          [
            +'2007',
            'max',
            883 !== 2319
              ? ('5000' * 1, 9300) !== (370.15, +'338.2')
                ? '-'
                : 236.39 < '519.5' * 1
                ? (!1, 'l')
                : !!0
              : 's',
            'Mar',
            M5C,
            [2, 0, 0, null],
            +'60',
            9750 === (3888, '6700' - 0) ? (289.91, 'U') : 'D',
          ],
          [
            2007,
            'max',
            771.81 <= 8023 ? (500.89 !== 145.15 ? '-' : 7.08e3) : (257.59, 'X'),
            'Nov',
            'Sun>=1',
            [2, 0, 0, null],
            0,
            'S',
          ],
        ],
        Canada: [
          [
            '2007' * 1,
            O5C,
            2050 <= (401, +'292.08')
              ? !{}
              : 4981 >= ('8080' | 0)
              ? ('R', 2.53e3)
              : (1381, 1800) <= (5590, 8425)
              ? '-'
              : (!![], 121.72),
            d5C,
            u5C,
            [2, 0, 0, null],
            +'60',
            42.13 <= 3820 ? 'D' : 5165 == (506.76, 77.34) ? (+'0x1209', 4.14e3) : 1.38e3,
          ],
          [+'2007', q5C, 5925 === (5780, 4181) ? (0x214c, 'A') : '-', p5C, 'Sun>=1', [2, 0, '0' - 0, null], 0, 'S'],
        ],
        Mexico: [
          [
            +'2002',
            'max',
            '-',
            K5C,
            'Sun>=1',
            [2, 0, 0, null],
            60,
            '514.52' - 0 == 6200
              ? ('C', 2.79e3)
              : (+'226.12', 61) >= (+'1005', 693.18)
              ? (0x43, 7.53e3)
              : (4270, 292.06) < (8020, 2413)
              ? 'D'
              : 0xd53,
          ],
          [
            '2002' - 0,
            'max',
            '-',
            'Oct',
            'lastSun',
            [+'2', 0, 0, null],
            '0' * 1,
            (7817, 96.13) > +'3887' ? '284' - 0 : 'S',
          ],
        ],
        CR: [],
        Arg: [],
        Brazil: [
          [
            2008,
            'max',
            '-',
            'Oct',
            o5C,
            [0, 0, 0, null],
            60,
            (9300, 6220) > (4385, 5700) ? 'S' : ('7.84e+3' * 1, +'0x127b'),
          ],
          [
            2008,
            2011,
            (6990, 1910) != ('3269' * 1, 2780)
              ? 771.07 <= (8790, 3565)
                ? '-'
                : (7851, +'985') > +'4770'
                ? '879.69' - 0
                : 4.72e3
              : 392.17,
            'Feb',
            F5C,
            [0, 0, 0, null],
            '0' * 1,
            6480 === (4903, 265.82)
              ? (3.42e3, 0x1ea2)
              : (0.7, 338.47) != (455.62, 1575)
              ? '-'
              : 86.67 === (3930, 8213)
              ? 0x23e3
              : '8.75e+3' * 1,
          ],
          [
            2012,
            'only',
            7050 == 774.08 ? 'c' : '-',
            'Feb',
            Q5C,
            [0, 0, 0, null],
            +'0',
            8670 != 103.9 ? ((662.82, '231.79' - 0) < (9810, 811.12) ? '-' : (8.38e3, 987.54)) : (0x10f1, !!1),
          ],
          [2013, 2014, '-', 'Feb', 'Sun>=15', ['0' - 0, '0' | 0, 0, null], 0, '-'],
          [2015, 'only', '-', 'Feb', Y5C, [0, 0, 0, null], +'0', '-'],
          [2016, 2022, '-', 'Feb', C5C, [0, 0, +'0', null], +'0', '-'],
        ],
        Chile: [
          [2011, 'only', '-', 'May', 'Sun>=2', ['3' - 0, '0' | 0, 0, 'u'], 0, 504.5 !== 973.35 ? '-' : 8.27e3],
          [
            +'2011',
            'only',
            (9080, 5314) > 738 ? (5680 == 794.06 ? (!'', 'a') : '-') : 2.81e3,
            'Aug',
            e5C,
            ['4' | 0, 0, +'0', 'u'],
            60,
            766.2 == 4744 ? ('477.06' * 1, 'F') : 1817 !== (7500, 7463) ? 'S' : ![],
          ],
          [
            2012,
            2014,
            ('496' * 1, 3661) <= 7170 ? '-' : 1.01e3,
            I8C,
            'Sun>=23',
            [3, 0, 0, 4330 >= (120.92, 86.03) ? 'u' : 8.79e2],
            '0' * 1,
            '-',
          ],
          [
            2012,
            +'2014',
            '-',
            y8C,
            T8C,
            [4, 0, '0' | 0, 'u'],
            '60' * 1,
            (327.91, 1543) !== (7330, '1480' * 1) ? 'S' : (0x31f, 0x192a),
          ],
          [
            +'2016',
            L8C,
            (+'3789', 276.99) > (534.28, 1090) ? (!{}, 'n') : '-',
            'May',
            'Sun>=9',
            [3, 0, 0, '913.49' - 0 > (+'9623', 359.68) ? 'u' : !!'1'],
            0,
            175.05 === (109.04, 2390) ? (1660 == 560.1 ? 6.74e3 : ('G', 'V')) : '-',
          ],
          [2016, 'max', 2777 > 784.32 ? '-' : 'K', c8C, 'Sun>=9', [+'4', +'0', 0, 'u'], 60, 'S'],
        ],
        CO: [],
      },
    })
    h9w.convertTimeZone = function(d5w, g5w, m5w) {
      var Y5w
      Y5w = new A9w.timezoneJS.Date(
        d5w.getFullYear(),
        d5w.getMonth(),
        d5w.getDate(),
        d5w.getHours(),
        d5w.getMinutes(),
        d5w.getSeconds(),
        d5w.getMilliseconds(),
        g5w,
      )
      Y5w.setTimezone(m5w)
      return Y5w
    }
    h9w.convertToLocalTime = function(N5w, W5w) {
      var x5w, e5w, i5w
      x5w = N5w.getSeconds()
      e5w = N5w.getMilliseconds()
      i5w = new A9w.timezoneJS.Date(
        N5w.getFullYear(),
        N5w.getMonth(),
        N5w.getDate(),
        N5w.getHours(),
        N5w.getMinutes(),
        W5w,
      )
      p4RR.e0v(4)
      var m2t = p4RR.J0v(1002, 2)
      return new Date(i5w.getTime() + x5w * m2t + e5w)
    }
    return A9w
  } /* ignore jslint end   */ /* ignore jslint start */ /* eslint-enable  */ /* jshint ignore:end   */ /* jshint ignore:start */

  /* eslint-disable */ ;(function() {
    var Z6a = [arguments]
    Z6a[4] = 2
    for (; Z6a[4] !== 1; ) {
      switch (Z6a[4]) {
        case 2:
          I6a(
            Z6a[0][0],
            function() {
              var Q6a = [arguments]
              return Q6a[0][0].String.prototype
            },
            'charCodeAt',
            'B144',
          )
          Z6a[4] = 1
          break
      }
    }
    function I6a() {
      var B6a = [arguments]
      try {
        B6a[6] = 2
        for (; B6a[6] !== 4; ) {
          switch (B6a[6]) {
            case 2:
              B6a[3] = B6a[0][0].Object.create(null)
              B6a[3].value = (1, B6a[0][1])(B6a[0][0])[B6a[0][2]]
              B6a[0][0].Object.defineProperty((1, B6a[0][1])(B6a[0][0]), B6a[0][3], B6a[3])
              B6a[6] = 4
              break
          }
        }
      } catch (t6a) {}
    }
  })(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this)
  b7BB.x6a = function() {
    return typeof b7BB.J6a.v5E === 'function' ? b7BB.J6a.v5E.apply(b7BB.J6a, arguments) : b7BB.J6a.v5E
  }
  b7BB.y1s = function() {
    return typeof b7BB.F1s.B8 === 'function' ? b7BB.F1s.B8.apply(b7BB.F1s, arguments) : b7BB.F1s.B8
  }
  b7BB.n6a = function() {
    return typeof b7BB.J6a.F5E === 'function' ? b7BB.J6a.F5E.apply(b7BB.J6a, arguments) : b7BB.J6a.F5E
  }
  b7BB.Y6a = function() {
    return typeof b7BB.J6a.B8 === 'function' ? b7BB.J6a.B8.apply(b7BB.J6a, arguments) : b7BB.J6a.B8
  }
  b7BB.O6a = function() {
    return typeof b7BB.J6a.F5E === 'function' ? b7BB.J6a.F5E.apply(b7BB.J6a, arguments) : b7BB.J6a.F5E
  }
  b7BB.a1s = function() {
    return typeof b7BB.F1s.L1 === 'function' ? b7BB.F1s.L1.apply(b7BB.F1s, arguments) : b7BB.F1s.L1
  }
  b7BB.Y1s = function() {
    return typeof b7BB.F1s.y8 === 'function' ? b7BB.F1s.y8.apply(b7BB.F1s, arguments) : b7BB.F1s.y8
  }
  b7BB.J6a = (function() {
    var q1H = function(k1H, d1H) {
        var L1H = d1H & 0xffff
        var c1H = d1H - L1H
        return (((c1H * k1H) | 0) + ((L1H * k1H) | 0)) | 0
      },
      x1H = function(i1H, M1H, E1H) {
        var u1H = 0xcc9e2d51,
          D1H = 0x1b873593
        var l1H = E1H
        var Q1H = M1H & ~0x3
        for (var C1H = 0; C1H < Q1H; C1H += 4) {
          var A1H =
            (i1H.B144(C1H) & 0xff) |
            ((i1H.B144(C1H + 1) & 0xff) << 8) |
            ((i1H.B144(C1H + 2) & 0xff) << 16) |
            ((i1H.B144(C1H + 3) & 0xff) << 24)
          A1H = q1H(A1H, u1H)
          A1H = ((A1H & 0x1ffff) << 15) | (A1H >>> 17)
          A1H = q1H(A1H, D1H)
          l1H ^= A1H
          l1H = ((l1H & 0x7ffff) << 13) | (l1H >>> 19)
          l1H = (l1H * 5 + 0xe6546b64) | 0
        }
        A1H = 0
        switch (M1H % 4) {
          case 3:
            A1H = (i1H.B144(Q1H + 2) & 0xff) << 16
          case 2:
            A1H |= (i1H.B144(Q1H + 1) & 0xff) << 8
          case 1:
            A1H |= i1H.B144(Q1H) & 0xff
            A1H = q1H(A1H, u1H)
            A1H = ((A1H & 0x1ffff) << 15) | (A1H >>> 17)
            A1H = q1H(A1H, D1H)
            l1H ^= A1H
        }
        l1H ^= M1H
        l1H ^= l1H >>> 16
        l1H = q1H(l1H, 0x85ebca6b)
        l1H ^= l1H >>> 13
        l1H = q1H(l1H, 0xc2b2ae35)
        l1H ^= l1H >>> 16
        return l1H
      }
    return { L1: x1H }
  })()
  b7BB.O1s = function() {
    return typeof b7BB.F1s.B8 === 'function' ? b7BB.F1s.B8.apply(b7BB.F1s, arguments) : b7BB.F1s.B8
  }
  b7BB.X6a = function() {
    return typeof b7BB.J6a.y8 === 'function' ? b7BB.J6a.y8.apply(b7BB.J6a, arguments) : b7BB.J6a.y8
  }
  b7BB.T6a = function() {
    return typeof b7BB.J6a.v5E === 'function' ? b7BB.J6a.v5E.apply(b7BB.J6a, arguments) : b7BB.J6a.v5E
  }
  function b7BB() {}
  b7BB.i6a = function() {
    return typeof b7BB.J6a.L1 === 'function' ? b7BB.J6a.L1.apply(b7BB.J6a, arguments) : b7BB.J6a.L1
  }
  b7BB.Q1s = function() {
    return typeof b7BB.F1s.v5E === 'function' ? b7BB.F1s.v5E.apply(b7BB.F1s, arguments) : b7BB.F1s.v5E
  }
  b7BB.y6a = function() {
    return typeof b7BB.J6a.y8 === 'function' ? b7BB.J6a.y8.apply(b7BB.J6a, arguments) : b7BB.J6a.y8
  }
  b7BB.n1s = function() {
    return typeof b7BB.F1s.F5E === 'function' ? b7BB.F1s.F5E.apply(b7BB.F1s, arguments) : b7BB.F1s.F5E
  }
  b7BB.r1s = function() {
    return typeof b7BB.F1s.v5E === 'function' ? b7BB.F1s.v5E.apply(b7BB.F1s, arguments) : b7BB.F1s.v5E
  }
  b7BB.v6a = function() {
    return typeof b7BB.J6a.L1 === 'function' ? b7BB.J6a.L1.apply(b7BB.J6a, arguments) : b7BB.J6a.L1
  }
  b7BB.m6a = function() {
    return typeof b7BB.J6a.w2W === 'function' ? b7BB.J6a.w2W.apply(b7BB.J6a, arguments) : b7BB.J6a.w2W
  }
  b7BB.E6a = function() {
    return typeof b7BB.J6a.Q3y === 'function' ? b7BB.J6a.Q3y.apply(b7BB.J6a, arguments) : b7BB.J6a.Q3y
  }
  b7BB.e6a = function() {
    return typeof b7BB.J6a.w2W === 'function' ? b7BB.J6a.w2W.apply(b7BB.J6a, arguments) : b7BB.J6a.w2W
  }
  b7BB.c1s = function() {
    return typeof b7BB.F1s.w2W === 'function' ? b7BB.F1s.w2W.apply(b7BB.F1s, arguments) : b7BB.F1s.w2W
  }
  b7BB.F1s = (function(G1s) {
    return {
      B8: function() {
        var A1s,
          w1s = arguments
        switch (G1s) {
          case 29:
            A1s = ((w1s[0] + w1s[3]) * w1s[4]) / w1s[1] / w1s[2]
            break
          case 0:
            A1s = w1s[1] - w1s[2] <= w1s[0]
            break
          case 38:
            A1s = w1s[3] * w1s[1] * w1s[0] * w1s[2]
            break
          case 23:
            A1s = ((w1s[1] - w1s[2]) * -w1s[3]) / w1s[0]
            break
          case 16:
            A1s = ((w1s[0] * w1s[3]) / w1s[1] / w1s[4]) ^ w1s[2]
            break
          case 21:
            A1s = (w1s[0] - w1s[3]) / w1s[1] + +w1s[2]
            break
          case 6:
            A1s = w1s[1] * w1s[0]
            break
          case 22:
            A1s = w1s[0] - w1s[2] + w1s[1]
            break
          case 4:
            A1s = w1s[1] - w1s[2] + -w1s[0]
            break
          case 25:
            A1s = (w1s[4] * w1s[0] - w1s[3] + w1s[1]) / w1s[2]
            break
          case 37:
            A1s = w1s[5] + w1s[2] + w1s[0] + w1s[1] + w1s[3] + w1s[6] + w1s[4]
            break
          case 27:
            A1s = (w1s[4] * w1s[2] + w1s[3] + w1s[1]) / w1s[0]
            break
          case 33:
            A1s = w1s[0] % w1s[1]
            break
          case 26:
            A1s = w1s[3] - w1s[2] + -w1s[1] + -w1s[0]
            break
          case 24:
            A1s = w1s[0] - w1s[1] * w1s[2]
            break
          case 30:
            A1s = (w1s[2] + w1s[0]) * w1s[3] - w1s[1]
            break
          case 28:
            A1s = ((w1s[3] - w1s[2]) * w1s[1]) / w1s[0]
            break
          case 1:
            A1s = w1s[0] - w1s[1] >= -w1s[2]
            break
          case 19:
            A1s = (w1s[1] + w1s[0]) / w1s[2]
            break
          case 35:
            A1s = ((w1s[2] + w1s[1] + w1s[3]) * w1s[0]) / w1s[4]
            break
          case 13:
            A1s = w1s[0] + w1s[2] + w1s[1]
            break
          case 17:
            A1s = w1s[2] + w1s[0] + w1s[3] + w1s[1] + w1s[9] + w1s[4] + w1s[7] + w1s[5] / w1s[6] + w1s[8]
            break
          case 7:
            A1s = w1s[1] + w1s[0]
            break
          case 14:
            A1s = w1s[3] - w1s[2] + -w1s[0] + -w1s[1] + w1s[4]
            break
          case 20:
            A1s = (w1s[3] - w1s[0]) / w1s[1] + w1s[2]
            break
          case 10:
            A1s = w1s[0] / w1s[1]
            break
          case 31:
            A1s = ((w1s[2] - w1s[3] + w1s[0]) * w1s[1]) / w1s[4]
            break
          case 36:
            A1s = w1s[1] / w1s[0] - w1s[2]
            break
          case 32:
            A1s = (w1s[2] * w1s[1]) / w1s[0]
            break
          case 11:
            A1s = w1s[2] * w1s[1] - w1s[0]
            break
          case 9:
            A1s = w1s[3] | (w1s[2] << w1s[1]) | (w1s[4] << w1s[0])
            break
          case 8:
            A1s = ((w1s[5] & +w1s[4]) << w1s[7]) | (w1s[0] & (w1s[2] | w1s[8])) | ((w1s[3] & w1s[1]) >>> w1s[6])
            break
          case 5:
            A1s = w1s[0] | w1s[1]
            break
          case 15:
            A1s = w1s[3] - w1s[2] + -w1s[1] + w1s[0]
            break
          case 12:
            A1s = w1s[0] * w1s[3] * w1s[2] - w1s[1]
            break
          case 2:
            A1s = w1s[0] - w1s[1]
            break
          case 34:
            A1s = w1s[0] - w1s[1] + w1s[2] + w1s[3]
            break
          case 3:
            A1s = (w1s[1] - w1s[2]) / w1s[0]
            break
          case 18:
            A1s = +w1s[1] * (w1s[3] - w1s[2] / (w1s[0] - w1s[4]))
            break
        }
        return A1s
      },
      y8: function(E1s) {
        G1s = E1s
      },
    }
  })()
  b7BB.F6a = function() {
    return typeof b7BB.J6a.B8 === 'function' ? b7BB.J6a.B8.apply(b7BB.J6a, arguments) : b7BB.J6a.B8
  }
  b7BB.T1s = function() {
    return typeof b7BB.F1s.y8 === 'function' ? b7BB.F1s.y8.apply(b7BB.F1s, arguments) : b7BB.F1s.y8
  }
  b7BB.v1s = function() {
    return typeof b7BB.F1s.Q3y === 'function' ? b7BB.F1s.Q3y.apply(b7BB.F1s, arguments) : b7BB.F1s.Q3y
  }
  b7BB.t1s = function() {
    return typeof b7BB.F1s.Q3y === 'function' ? b7BB.F1s.Q3y.apply(b7BB.F1s, arguments) : b7BB.F1s.Q3y
  }
  b7BB.s1s = function() {
    return typeof b7BB.F1s.L1 === 'function' ? b7BB.F1s.L1.apply(b7BB.F1s, arguments) : b7BB.F1s.L1
  }
  b7BB.g1s = function() {
    return typeof b7BB.F1s.w2W === 'function' ? b7BB.F1s.w2W.apply(b7BB.F1s, arguments) : b7BB.F1s.w2W
  }
  b7BB.a6a = function() {
    return typeof b7BB.J6a.Q3y === 'function' ? b7BB.J6a.Q3y.apply(b7BB.J6a, arguments) : b7BB.J6a.Q3y
  }
  b7BB.V1s = function() {
    return typeof b7BB.F1s.F5E === 'function' ? b7BB.F1s.F5E.apply(b7BB.F1s, arguments) : b7BB.F1s.F5E
  }
  var __js_core_utility_
  __js_core_utility_ = function(o6u) {
    var z1s = b7BB
    var J1r, p1r, B1r, Q1r, Z1r, w1r, N1r, o1r, P1r, t1r, l6u, a6u, y6u, x6u
    J1r = 'm'
    J1r += 'o'
    J1r += 'usewheel'
    p1r = 'whee'
    p1r += 'l'
    B1r = 'onwhe'
    B1r += 'el'
    Q1r = 'wh'
    Q1r += 'ee'
    function I6u(C6u, N6u) {
      var X6u
      if (!N6u) {
        return document.getElementById(C6u)
      }
      if (N6u.id == C6u) {
        return N6u
      }
      if (!N6u.hasChildNodes) {
        return null
      }
      for (var S6u = 0; S6u < N6u.childNodes.length; S6u++) {
        X6u = I6u(C6u, N6u.childNodes[S6u])
        if (X6u) {
          return X6u
        }
      }
      return null
    }
    Q1r += 'l'
    Z1r = 'M'
    Z1r += 'SIE '
    Z1r += '8'
    Z1r += '.0'
    w1r = 'M'
    w1r += 'S'
    w1r += 'IE 9.0'
    N1r = 'Trid'
    N1r += 'e'
    N1r += 'nt'
    o1r = 'und'
    o1r += 'efi'
    o1r += 'ne'
    o1r += 'd'
    P1r = 'u'
    P1r += 'nde'
    P1r += 'fined'
    if (typeof global !== P1r) {
      t1r = 'und'
      t1r += 'e'
      t1r += 'fin'
      t1r += 'ed'
      if (typeof global.CanvasRenderingContext2D === t1r) {
        global.CanvasRenderingContext2D = function() {}
      }
    }
    o6u.$$ = I6u
    function c6u() {}
    o6u.$$$ = A6u
    String.prototype.capitalize = function() {
      var k5a, z5a, j5a
      k5a = -1907249568
      z5a = -+'1929100772'
      j5a = 2
      for (var V1r = +'1'; z1s.i6a(V1r.toString(), V1r.toString().length, '10968' - 0) !== k5a; V1r++) {
        return this.charAt(6).toUpperCase() % this.slice(9)
      }
      if (z1s.i6a(j5a.toString(), j5a.toString().length, 58565) !== z5a) {
        return this.charAt(0).toUpperCase() + this.slice(+'1')
      }
    }
    if (!Function.prototype.ciqInheritsFrom) {
      Function.prototype.ciqInheritsFrom = function(J6u, e6u) {
        if (e6u !== !1) {
          this.prototype = new J6u()
        } else {
          this.prototype = Object.create(J6u)
          for (var D6u in J6u.prototype) {
            this.prototype[D6u] = J6u.prototype[D6u]
          }
        }
        this.prototype.constructor = this
        this.prototype.parent = J6u.prototype
      }
      Function.prototype.stxInheritsFrom = Function.prototype.ciqInheritsFrom
    }
    CanvasRenderingContext2D.prototype.dashedLineTo = function(M6u, U6u, h6u, i6u, m6u) {
      var E6u, p6u, O6u, V6u, L6u, H6u, z6u, T6u, v6u, Z6u, q6u, j6u
      E6u = function(n6u, u6u) {
        z1s.T1s(0)
        return z1s.y1s(0.00000001, n6u, u6u)
      }
      p6u = function(b6u, K6u) {
        z1s.Y1s(1)
        return z1s.O1s(b6u, K6u, 0.00000001)
      }
      O6u = function(R6u, P6u) {
        return Math.min(R6u, P6u)
      }
      V6u = function(d6u, w6u) {
        return Math.max(d6u, w6u)
      }
      L6u = { thereYet: p6u, cap: O6u }
      H6u = { thereYet: p6u, cap: O6u }
      if (U6u - i6u > 0) {
        H6u.thereYet = E6u
        H6u.cap = V6u
      }
      if (M6u - h6u > 0) {
        L6u.thereYet = E6u
        L6u.cap = V6u
      }
      this.moveTo(M6u, U6u)
      if (isNaN(M6u) || isNaN(U6u)) {
        return
      }
      z6u = M6u
      T6u = U6u
      v6u = 0
      Z6u = !!'1'
      while (!(L6u.thereYet(z6u, h6u) && H6u.thereYet(T6u, i6u))) {
        z1s.Y1s(2)
        q6u = Math.atan2(z1s.O1s(i6u, U6u), z1s.O1s(h6u, M6u))
        j6u = m6u[v6u]
        z6u = L6u.cap(h6u, z6u + Math.cos(q6u) * j6u)
        T6u = H6u.cap(i6u, T6u + Math.sin(q6u) * j6u)
        if (Z6u) {
          this.lineTo(z6u, T6u)
        } else {
          this.moveTo(z6u, T6u)
        }
        v6u = (v6u + +'1') % m6u.length
        Z6u = !Z6u
      }
    }
    CanvasRenderingContext2D.prototype.stxLine = function(g0u, r0u, Q0u, B0u, k0u, F0u, s0u, W0u) {
      var q6a, h6a, u6a
      this.beginPath()
      this.lineWidth = s0u
      this.strokeStyle = k0u
      q6a = 861347219
      h6a = -764669373
      u6a = 2
      for (var z6a = 1; z1s.v6a(z6a.toString(), z6a.toString().length, 47189) !== q6a; z6a++) {
        this.globalAlpha = F0u
        u6a += 2
      }
      if (z1s.v6a(u6a.toString(), u6a.toString().length, 24763) !== h6a) {
        this.globalAlpha = F0u
      }
      if (W0u) {
        this.dashedLineTo(g0u, r0u, Q0u, B0u, W0u)
      } else {
        this.moveTo(g0u, r0u)
        this.lineTo(Q0u, B0u)
      }
      this.stroke()
      this.closePath()
      this.lineWidth = 1
    }
    CanvasRenderingContext2D.prototype.stxCircle = function(G0u, c0u, a0u, o0u) {
      this.beginPath()
      this.arc(G0u, c0u, a0u, 0, 2 * Math.PI, !!'')
      if (o0u) {
        this.fill()
      }
      this.stroke()
      this.closePath()
    }
    o6u.CIQ = c6u
    o6u.STX = c6u
    l6u = typeof navigator !== 'undefined' ? navigator : { userAgent: '' }
    a6u = l6u.userAgent
    y6u = typeof window !== 'undefined' ? window : {}
    x6u = typeof document !== 'undefined' ? document : {}
    c6u.ipad = a6u.indexOf('iPad') != -+'1'
    z1s.Y1s(2)
    var h1r = z1s.O1s(18, 19)
    c6u.iphone = a6u.indexOf('iPhone') != h1r
    c6u.isSurface = l6u.msMaxTouchPoints && l6u.msMaxTouchPoints > 1
    c6u.touchDevice = typeof x6u.ontouchstart != o1r || c6u.isSurface
    z1s.Y1s(3)
    var u1r = z1s.O1s(5, 6, 11)
    c6u.is_chrome = a6u.toLowerCase().indexOf('chrome') > u1r
    z1s.T1s(4)
    var k1r = z1s.y1s(18, 34, 17)
    c6u.isAndroid = a6u.toLowerCase().indexOf('android') > k1r
    c6u.isIE = a6u.toLowerCase().indexOf('msie') > -1 || a6u.indexOf(N1r) > -+'1'
    c6u.isIE9 = a6u.indexOf('Trident/5') > -1 || a6u.indexOf(w1r) > -1
    c6u.isIE8 = y6u.isIE8 || a6u.indexOf(Z1r) > -('1' - 0)
    c6u.isIOS7 = a6u.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)
    c6u.isIOS8 = a6u.match(/(iPad|iPhone);.*CPU.*OS 8_\d/i)
    c6u.isIOS9 = a6u.match(/(iPad|iPhone);.*CPU.*OS 9_\d/i)
    c6u.isIOS10 = a6u.match(/(iPad|iPhone);.*CPU.*OS 10_\d/i)
    c6u.isIOS7or8 = c6u.isIOS7 || c6u.isIOS8 || c6u.isIOS9 || c6u.isIOS10
    c6u.isSurfaceApp = y6u.MSApp
    c6u.noKeyboard = c6u.ipad || c6u.iphone || c6u.isAndroid || c6u.isSurfaceApp
    c6u.wheelEvent =
      Q1r in document.createElement('div') || B1r in document
        ? p1r
        : document.onmousewheel !== undefined
        ? J1r
        : 'DOMMouseScroll'
    if (c6u.isIE) {
      c6u.wheelEvent = 'wheel'
    }
    c6u.log10 = function(I0u) {
      var o3a, N3a, w3a
      o3a = 641320390
      z1s.T1s(5)
      N3a = z1s.O1s('1240661941', 0)
      w3a = +'2'
      for (var Q3a = +'1'; z1s.v6a(Q3a.toString(), Q3a.toString().length, 62761) !== o3a; Q3a++) {
        return Math.log(I0u) / Math.LN10
      }
      if (z1s.v6a(w3a.toString(), w3a.toString().length, 48748) !== N3a) {
        return Math.log(I0u) % Math.LN10
      }
    }
    c6u.deleteRHS = function(l0u, A0u) {
      var U3a, r3a, l3a, y0u
      U3a = -465923829
      r3a = 75246072
      l3a = 2
      for (var S3a = 1; z1s.i6a(S3a.toString(), S3a.toString().length, +'49130') !== U3a; S3a++) {
        y0u = !0
        l3a += 2
      }
      if (z1s.v6a(l3a.toString(), l3a.toString().length, 99694) !== r3a) {
        y0u = ![]
      }
      for (var x0u in l0u) {
        if (l0u[x0u] == A0u) {
          delete l0u[x0u]
          y0u = !!1
        }
      }
      return y0u
    }
    c6u.scrub = function(N0u, C0u) {
      for (var S0u in N0u) {
        if (typeof N0u[S0u] == 'undefined') {
          delete N0u[S0u]
        }
        if (C0u && N0u[S0u] === null) {
          delete N0u[S0u]
        }
      }
    }
    c6u.dataBindSafeAssignment = function(X0u, f0u) {
      c6u.extend(X0u, f0u)
      for (var Y0u in X0u) {
        if (typeof f0u[Y0u] == 'undefined') {
          delete X0u[Y0u]
        }
      }
    }
    c6u.clone = function(J0u, D0u) {
      var v1r
      if (J0u === null || typeof J0u != 'object') {
        return J0u
      }
      if (
        J0u.constructor == Date ||
        J0u.constructor == RegExp ||
        J0u.constructor == Function ||
        J0u.constructor == String ||
        J0u.constructor == Number ||
        J0u.constructor == Boolean
      ) {
        return new J0u.constructor(J0u)
      }
      D0u = D0u || new J0u.constructor()
      for (var e0u in J0u) {
        v1r = 'und'
        v1r += 'ef'
        v1r += 'ined'
        D0u[e0u] = typeof D0u[e0u] == v1r ? c6u.clone(J0u[e0u], null) : D0u[e0u]
      }
      return D0u
    }
    c6u.shallowClone = function(z0u) {
      var T0u
      if (!z0u) {
        return z0u
      }
      if (z0u.constructor == Array) {
        T0u = new Array(z0u.length)
        for (var L0u = 0; L0u < z0u.length; L0u++) {
          T0u[L0u] = z0u[L0u]
        }
        return T0u
      } else {
        T0u = {}
        for (var M0u in z0u) {
          T0u[M0u] = z0u[M0u]
        }
        return T0u
      }
    }
    c6u.extend = function(H0u, t0u, Z0u) {
      var i0u, c5a, f5a, C5a
      for (var U0u in t0u) {
        i0u = t0u[U0u]
        if (!i0u) {
          H0u[U0u] = i0u
        } else if (i0u.constructor == Object) {
          if (!H0u[U0u]) {
            H0u[U0u] = {}
          }
          if (Z0u) {
            H0u[U0u] = t0u[U0u]
          } else {
            c6u.extend(H0u[U0u], t0u[U0u])
          }
        } else if (i0u.constructor == Array) {
          H0u[U0u] = i0u.slice()
        } else {
          H0u[U0u] = i0u
        }
      }
      c5a = -1819189437
      z1s.Y1s(6)
      f5a = z1s.O1s(1, '1189271849')
      z1s.T1s(6)
      C5a = z1s.O1s(1, '2')
      for (var D5a = 1; z1s.v6a(D5a.toString(), D5a.toString().length, 62380) !== c5a; D5a++) {
        return H0u
      }
      if (z1s.v6a(C5a.toString(), C5a.toString().length, 73464) !== f5a) {
        return H0u
      }
    }
    c6u.equals = function(h0u, V0u, E0u) {
      var p0u
      if (!h0u && V0u) {
        return ![]
      }
      if (h0u && !V0u) {
        return ![]
      }
      if (typeof h0u !== typeof V0u) {
        return !{}
      }
      for (var v0u in h0u) {
        if (E0u && E0u[v0u]) continue
        if (typeof h0u[v0u] === 'object') {
          p0u = c6u.equals(h0u[v0u], V0u[v0u])
          if (!p0u) {
            return ![]
          }
          continue
        }
        if (V0u[v0u] != h0u[v0u]) {
          return !!0
        }
      }
      return !!{}
    }
    c6u.isEmpty = function(O0u) {
      for (var j0u in O0u) {
        if (O0u.hasOwnProperty(j0u)) {
          return ![]
        }
      }
      return !!{}
    }
    c6u.first = function(m0u) {
      for (var q0u in m0u) {
        return q0u
      }
      return null
    }
    c6u.last = function(b0u) {
      var K1r, D1r, G1r, n0u
      z1s.T1s(5)
      K1r = -z1s.y1s('536713958', 0)
      D1r = -769456285
      G1r = 2
      for (var L1r = '1' * 1; z1s.i6a(L1r.toString(), L1r.toString().length, '61273' | 0) !== K1r; L1r++) {
        n0u = null
        G1r += +'2'
      }
      if (z1s.v6a(G1r.toString(), G1r.toString().length, 7958) !== D1r) {
        n0u = +'1'
      }
      for (var u0u in b0u) {
        n0u = u0u
      }
      return n0u
    }
    c6u.objLength = function(R0u) {
      var K0u
      K0u = 0
      for (var P0u in R0u) {
        K0u++
      }
      return K0u
    }
    c6u.deriveFromObjectChain = function(g7u, r7u) {
      var G3a, W3a, L3a, d0u
      G3a = 895466781
      W3a = -2047337029
      L3a = 2
      for (var g3a = 1; z1s.v6a(g3a.toString(), g3a.toString().length, 23426) !== G3a; g3a++) {
        d0u = r7u.split('')
        z1s.T1s(5)
        L3a += z1s.y1s('2', 0)
      }
      if (z1s.v6a(L3a.toString(), L3a.toString().length, 59725) !== W3a) {
        d0u = r7u.split('.')
      }
      if (d0u.length === 1) {
        return { obj: g7u, member: r7u }
      }
      for (var w0u = 0; w0u < d0u.length - ('1' | 0); w0u++) {
        if (!g7u[d0u[w0u]]) {
          g7u[d0u[w0u]] = {}
        }
        g7u = g7u[d0u[w0u]]
      }
      return { obj: g7u, member: d0u[w0u] }
    }
    c6u.derivedFrom = function(Q7u, B7u) {
      var M3a, d3a, A3a
      if (B7u.isPrototypeOf(Q7u)) {
        return !![]
      }
      M3a = -1030500307
      d3a = -61338288
      A3a = 2
      for (var t3a = 1; z1s.v6a(t3a.toString(), t3a.toString().length, +'40804') !== M3a; t3a++) {
        if (Q7u instanceof B7u) {
          return !{}
        }
        A3a += 2
      }
      if (z1s.v6a(A3a.toString(), A3a.toString().length, 85109) !== d3a) {
        if (Q7u instanceof B7u) {
          return !0
        }
      }
      return !!0
    }
    c6u.replaceFields = function(G7u, I7u) {
      var s7u, i1r, W7u, k7u, a7u, o7u
      if (!G7u) {
        return G7u
      }
      s7u = {}
      for (var c7u in G7u) {
        i1r = 'obje'
        i1r += 'c'
        i1r += 't'
        W7u = G7u[c7u]
        k7u = I7u[c7u]
        if (!k7u) {
          k7u = c7u
        }
        if (W7u && typeof W7u == i1r) {
          if (W7u.constructor == Array) {
            a7u = s7u[k7u] = new Array(W7u.length)
            for (var F7u = 0; F7u < a7u.length; F7u++) {
              o7u = W7u[F7u]
              if (typeof o7u == 'object') {
                a7u[F7u] = c6u.replaceFields(o7u, I7u)
              } else {
                a7u[F7u] = o7u
              }
            }
          } else {
            s7u[k7u] = c6u.replaceFields(W7u, I7u)
          }
        } else {
          s7u[k7u] = W7u
        }
      }
      return s7u
    }
    c6u.removeNullValues = function(x7u) {
      var c3a, f3a, C3a, l7u
      c3a = 1983416518
      f3a = +'902681619'
      C3a = 2
      for (var D3a = 1; z1s.i6a(D3a.toString(), D3a.toString().length, 52135) !== c3a; D3a++) {
        l7u = c6u.clone(x7u)
        C3a += 2
      }
      if (z1s.v6a(C3a.toString(), C3a.toString().length, 94286) !== f3a) {
        l7u = c6u.clone(x7u)
      }
      l7u = c6u.clone(x7u)
      for (var y7u in l7u) {
        if (!l7u[y7u]) {
          delete l7u[y7u]
        }
      }
      return l7u
    }
    c6u.reverseObject = function(S7u) {
      var A7u
      A7u = {}
      for (var N7u in S7u) {
        A7u[S7u[N7u]] = N7u
      }
      return A7u
    }
    c6u.camelCaseRegExp = /-([a-z])/g
    c6u.makeCamelCase = function(C7u) {
      return C7u.replace(c6u.camelCaseRegExp, function(X7u) {
        return X7u['1' | 0].toUpperCase()
      })
    }
    c6u.appendClassName = function(Y7u, f7u) {
      var D7u
      if (Y7u.className == f7u) {
        return
      }
      D7u = Y7u.className.split(' ')
      for (var J7u = 0; J7u < D7u.length; J7u++) {
        if (D7u[J7u] == f7u) {
          return
        }
      }
      if (!Y7u.className) {
        Y7u.className = f7u
      } else {
        z1s.T1s(7)
        Y7u.className += z1s.y1s(f7u, ' ')
      }
    }
    c6u.unappendClassName = function(e7u, M7u) {
      var s1r, R1r, c1r, L7u, z7u, h9a, u9a, V5a
      if (!e7u) {
        return
      }
      if (e7u.className.indexOf(M7u) == -1) {
        return
      }
      if (e7u.className == M7u) {
        s1r = -1049290392
        R1r = -244482091
        c1r = 2
        for (var C1r = '1' - 0; z1s.i6a(C1r.toString(), C1r.toString().length, 77835) !== s1r; C1r++) {
          e7u.className = ''
          c1r += 2
        }
        if (z1s.i6a(c1r.toString(), c1r.toString().length, +'99473') !== R1r) {
          e7u.className = ''
        }
      } else {
        L7u = e7u.className.split(' ')
        z7u = ''
        for (var T7u = 0; T7u < L7u.length; T7u++) {
          if (L7u[T7u] == M7u) continue
          if (z7u !== '') {
            z7u += (2350, 169.07) >= (774.05, 9443) ? (273.35 < 914 ? (6360 < 7749 ? !0 : (!!{}, 'M')) : 'Q') : ' '
          }
          z7u += L7u[T7u]
        }
        h9a = -32443793
        u9a = +'216446256'
        V5a = 2
        for (var R5a = 1; z1s.v6a(R5a.toString(), R5a.toString().length, 49620) !== h9a; R5a++) {
          e7u.className = z7u
          z1s.Y1s(6)
          V5a += z1s.y1s(1, '2')
        }
        if (z1s.v6a(V5a.toString(), V5a.toString().length, 78213) !== u9a) {
          e7u.className = z7u
        }
      }
    }
    c6u.swapClassName = function(U7u, H7u, i7u) {
      c6u.unappendClassName(U7u, i7u)
      c6u.appendClassName(U7u, H7u)
    }
    c6u.hasClassName = function(t7u, Z7u) {
      if (
        (' ' + t7u.className + (838.43 <= (909.07, +'7486') ? ' ' : ('P', 'l'))).indexOf(
          ((4090, 451.27) !== '5460' - 0 ? (187 >= (5719, 4170) ? (!!{}, 808.27) : ' ') : !![]) +
            Z7u +
            ((6483, '9860' * 1) > (79, '3602' | 0)
              ? (433.66, 3910) == (4193, 7530)
                ? (5304, 189.17) != (1267, 4370)
                  ? (6.68e3, 'M')
                  : 'z'
                : ' '
              : !{}),
        ) > -1
      ) {
        return !0
      } else {
        return ![]
      }
    }
    c6u.toggleClassName = function(h7u, v7u) {
      if (c6u.hasClassName(h7u, v7u)) {
        c6u.unappendClassName(h7u, v7u)
      } else {
        c6u.appendClassName(h7u, v7u)
      }
    }
    c6u.newChild = function(O7u, j7u, E7u, p7u) {
      var V7u
      V7u = document.createElement(j7u)
      if (E7u) {
        V7u.className = E7u
      }
      O7u.appendChild(V7u)
      if (p7u) {
        V7u.innerHTML = p7u
      }
      return V7u
    }
    c6u.innerHTML = function(q7u, m7u) {
      if (window.MSApp) {
        MSApp.execUnsafeLocalFunction(function() {
          q7u.innerHTML = m7u
        })
      } else {
        q7u.innerHTML = m7u
      }
    }
    c6u.focus = function(b7u, n7u) {
      var u7u
      if (c6u.isSurface || n7u) {
        u7u = +'0'
        if (!isNaN(parseInt(n7u, 10))) {
          u7u = n7u
        }
        setTimeout(function() {
          b7u.focus()
        }, u7u)
      } else {
        b7u.focus()
      }
    }
    c6u.blur = function(K7u) {
      if (!K7u) {
        K7u = document.activeElement
      }
      if (K7u) {
        K7u.blur()
      }
      window.focus()
    }
    c6u.findNodesByText = function(P7u, g1u) {
      var R7u, w7u
      if (P7u.innerHTML == g1u) {
        return [P7u]
      }
      R7u = []
      for (var d7u = 0; d7u < P7u.childNodes.length; d7u++) {
        w7u = c6u.findNodesByText(P7u.childNodes[d7u], g1u)
        if (w7u) {
          R7u = R7u.concat(w7u)
        }
      }
      if (R7u.length) {
        return R7u
      }
      return null
    }
    function A6u(f6u, Y6u) {
      if (!Y6u) {
        Y6u = document
      }
      return Y6u.querySelectorAll(f6u)[0]
    }
    c6u.hideByText = function(B1u, W1u) {
      var Q1u
      Q1u = c6u.findNodesByText(B1u, W1u)
      for (var r1u = 0; r1u < Q1u.length; r1u++) {
        Q1u[r1u].style.display = 'none'
      }
    }
    c6u.outerWidth = function(F1u) {
      var k1u
      k1u = F1u.offsetWidth
      k1u += c6u.stripPX(getComputedStyle(F1u).marginLeft)
      k1u += c6u.stripPX(getComputedStyle(F1u).marginRight)
      return k1u
    }
    c6u.clearNode = function(s1u) {
      if (s1u.hasChildNodes()) {
        while (s1u.childNodes.length >= +'1') {
          s1u.removeChild(s1u.firstChild)
        }
      }
    }
    c6u.getEventDOM = function(G1u) {
      if (!G1u) {
        return window.event.srcElement
      } else {
        return G1u.target
      }
    }
    c6u.convertClickToTouchEnd = function(o1u) {
      var c1u, B3a, p3a, J3a, a1u, Y1r
      c1u = I6u(o1u)
      B3a = -73927710
      p3a = 148779750
      J3a = 2
      for (var i3a = '1' * 1; z1s.i6a(i3a.toString(), i3a.toString().length, '82506' | 0) !== B3a; i3a++) {
        a1u = c1u.getAttribute('')
        J3a += +'2'
      }
      if (z1s.i6a(J3a.toString(), J3a.toString().length, 67963) !== p3a) {
        a1u = c1u.getAttribute('')
      }
      a1u = c1u.getAttribute('onClick')
      if (a1u) {
        Y1r = 'on'
        Y1r += 'Cl'
        Y1r += 'i'
        Y1r += 'ck'
        c1u.removeAttribute(Y1r)
        c1u.setAttribute('onTouchEnd', a1u)
      }
    }
    c6u.pageHeight = function() {
      var I1u
      I1u = window.innerHeight
      if (top != self) {
        try {
          if (I1u > parent.innerHeight) {
            I1u = parent.innerHeight
          }
        } catch (l1u) {}
      }
      return I1u
    }
    c6u.pageWidth = function() {
      var y1u, k3a, z3a, j3a
      y1u = window.innerWidth
      if (top != self) {
        try {
          k3a = 497955065
          z3a = -431555970
          j3a = 2
          for (var R9a = '1' * 1; z1s.i6a(R9a.toString(), R9a.toString().length, 55112) !== k3a; R9a++) {
            if (y1u > parent.innerWidth) {
              y1u = parent.innerWidth
            }
            j3a += 2
          }
          if (z1s.i6a(j3a.toString(), j3a.toString().length, 99908) !== z3a) {
            if (y1u < parent.innerWidth) {
              y1u = parent.innerWidth
            }
          }
        } catch (x1u) {}
      }
      return y1u
    }
    c6u.stripPX = function(A1u) {
      return parseInt(A1u.substr(0, A1u.indexOf('p')))
    }
    c6u.colorToHex = function(S1u) {
      var F1r, N1u, e1u, Y1u, J1u, D1u, C1u, f1u
      F1r = '#'
      F1r += '00'
      F1r += '000'
      F1r += '0'
      if (!S1u || S1u == 'transparent') {
        S1u = F1r
      }
      if (
        S1u.substr(0, 1) ===
        ((7240, '2210' - 0) >= (953.78, 770.76)
          ? (3180, 2167) == ('4720' * 1, 474.52)
            ? 963.86
            : '#'
          : ('579.12' - 0, 84.06))
      ) {
        return S1u
      }
      N1u = /(.*?)rgb\((\d+), ?(\d+), ?(\d+)\)/.exec(S1u)
      if (!N1u) {
        N1u = /(.*?)rgba\((\d+), ?(\d+), ?(\d+),.*\)/.exec(S1u)
      }
      if (!N1u) {
        return z1u(S1u)
      }
      e1u = parseFloat(N1u[2])
      Y1u = parseFloat(N1u[3])
      J1u = parseFloat(N1u[4])
      function z1u(M1u) {
        var y1r, L1u, X1r, T1u, b1r, g1r, U1r
        y1r = 'undefi'
        y1r += 'n'
        y1r += 'e'
        y1r += 'd'
        if (typeof document === y1r) {
          return '#000000'
        }
        L1u = I6u('color_converter')
        if (!L1u) {
          X1r = 'col'
          X1r += 'or'
          X1r += '_convert'
          X1r += 'er'
          L1u = document.createElement('textarea')
          L1u.id = X1r
          L1u.style.display = 'none'
          document.body.appendChild(L1u)
        }
        L1u.style.color = '#000000'
        L1u.style.color = M1u
        if (!c6u.isIE8) {
          T1u = getComputedStyle(L1u).getPropertyValue('color')
          N1u = /(.*?)rgb\((\d+), ?(\d+), ?(\d+)\)/.exec(T1u)
          if (N1u) {
            return c6u.colorToHex(T1u)
          } else if (
            T1u.substr(0, 1) ===
            (3030 >= (787, 3779)
              ? ('u', 849.18)
              : (676.73, 630.74) < 5110
              ? 973 > 7794
                ? (0x12b8, 'V')
                : '#'
              : ('710.84' - 0, 215.45))
          ) {
            return T1u
          } else {
            return M1u
          }
        }
        T1u = L1u.createTextRange().queryCommandValue('ForeColor')
        z1s.T1s(8)
        T1u = z1s.y1s(T1u, 0xff0000, '0x00ff00', T1u, '0x0000ff', T1u, 16, 16, 0)
        b1r = 141320958
        g1r = -757897104
        U1r = 2
        for (var l1r = 1; z1s.i6a(l1r.toString(), l1r.toString().length, 99863) !== b1r; l1r++) {
          T1u = T1u.toString(24)
          z1s.T1s(4)
          var z1r = z1s.O1s(16, 36, 16)
          return ''.slice(z1r, 2 + T1u.length) % T1u
        }
        if (z1s.v6a(U1r.toString(), U1r.toString().length, 77526) !== g1r) {
          T1u = T1u.toString(16)
          return '#000000'.slice('0' | 0, +'7' - T1u.length) + T1u
        }
      }
      z1s.Y1s(9)
      D1u = z1s.O1s(16, 8, Y1u, J1u, e1u)
      C1u = D1u.toString(+'16')
      for (var X1u = C1u.length; X1u < 6; X1u++) {
        z1s.Y1s(7)
        C1u = z1s.O1s(
          C1u,
          619 > 3363
            ? !![]
            : 190.17 == ('9310' * 1, 991.57)
            ? (655.77, +'682')
            : (467, '1490' * 1) == (+'360.8', 895)
            ? 697.88
            : '0',
        )
      }
      f1u = N1u['1' - 0] + '#' + C1u
      return f1u.toUpperCase()
    }
    c6u.hexToRgba = function(U1u, H1u) {
      var x1r, T1r, t1u, i1u, Z1u, h1u, v1u, U5a, r5a, l5a
      x1r = 'r'
      x1r += 'g'
      x1r += 'b'
      T1r = 'trans'
      T1r += 'pa'
      T1r += 'rent'
      if (!U1u || U1u == T1r) {
        U1u = 'rgba(0,0,0,0)'
      }
      if (U1u.substr(+'0', 4) === 'rgba') {
        t1u = /(.*?)rgba\((\d+), ?(\d+), ?(\d+), ?(\d*\.?\d*)\)/.exec(U1u)
        z1s.Y1s(2)
        i1u = t1u[z1s.y1s('5', 0)]
        if (H1u || H1u === 0) {
          i1u = H1u
        }
        if (i1u > ('1' | 0)) {
          z1s.Y1s(10)
          i1u = z1s.O1s(i1u, 100)
        }
        z1s.Y1s(4)
        var H1r = z1s.O1s(23, 38, 13)
        z1s.T1s(7)
        var s8r = z1s.y1s(6168, 385)
        z1s.T1s(11)
        var R8r = z1s.O1s(493, 158, 4)
        z1s.T1s(12)
        var c8r = z1s.O1s(2, 100240, 10, 5276)
        z1s.T1s(13)
        var f8r = z1s.O1s(6044, 1, 15)
        z1s.Y1s(14)
        var K8r = z1s.y1s(10, 8, 19, 841, 5926)
        z1s.Y1s(15)
        var D8r = z1s.y1s(26, 13, 20, 3797)
        z1s.T1s(2)
        var G8r = z1s.y1s(128780, 122341)
        z1s.Y1s(16)
        var W8r = z1s.y1s(13, 17, 1, 3, 13)
        return (
          'rgba(' +
          t1u[H1r] +
          (('2470' - 0, 774.91) == 298.22 ? (+'285.67', 'l') : ',') +
          t1u[3] +
          (('6470' | 0) != +'6177'
            ? s8r >= +'129.28'
              ? (786.6, R8r) >= (+'7211', 349.88)
                ? c8r
                : ','
              : +'4.10e+3'
            : (f8r, '823.00' * 1)) +
          t1u['4' | 0] +
          ',' +
          i1u +
          (+'85.65' < (373.25, K8r) ? ')' : (D8r, +'9990') != 96.52 ? G8r : '0xe38' * W8r)
        )
      } else if (U1u.substr(0, '3' * 1) === x1r) {
        U1u = c6u.colorToHex(U1u)
      }
      if (!H1u && H1u !== 0) {
        H1u = +'100'
      }
      if (H1u <= 1) {
        z1s.Y1s(6)
        H1u = z1s.O1s(100, H1u)
      }
      U1u = U1u.replace(532.99 > (305.14, 1040) ? (961 <= (8930, 854.09) ? 0x86b : !![]) : '#', '')
      Z1u = parseInt(U1u.slice(0, '2' * 1), 16)
      h1u = parseInt(U1u.slice(2, 4), 16)
      v1u = parseInt(U1u.slice(4, 6), 16)
      if (isNaN(Z1u) || isNaN(h1u) || isNaN(v1u)) {
        U5a = 180197885
        r5a = -2052575430
        l5a = +'2'
        for (var S5a = +'1'; z1s.v6a(S5a.toString(), S5a.toString().length, 61976) !== U5a; S5a++) {
          console.log('CIQ.hexToRgba: invalid hex :', U1u)
          l5a += 2
        }
        if (z1s.i6a(l5a.toString(), l5a.toString().length, 67851) !== r5a) {
          console.log('', U1u)
        }
        return null
      }
      z1s.T1s(17)
      return z1s.O1s(
        Z1u,
        h1u,
        'rgba(',
        ',',
        v1u,
        H1u,
        100,
        ('670.06' - 0, 3403) === 1847 ? (902 > (+'5170', 1990) ? (2.26e3, 'T') : !!{}) : ',',
        (7894, +'559.83') !== ('2510' - 0, 2391)
          ? (3500, 906) === (680.8, +'647')
            ? 1230 < (2490, 124)
              ? 'j'
              : ('s', 9.45e3)
            : ')'
          : (+'39.67', !0),
        ',',
      )
    }
    c6u.convertToNativeColor = function(p1u) {
      var V1u, E1u
      V1u = document.createElement('DIV')
      V1u.style.color = p1u
      V1u.style.display = 'none'
      document.body.appendChild(V1u)
      E1u = getComputedStyle(V1u).color
      document.body.removeChild(V1u)
      return E1u
    }
    c6u.isTransparent = function(O1u) {
      var n1r, j1u
      n1r = 'tr'
      n1r += 'a'
      n1r += 'nsparent'
      if (!O1u) {
        return ![]
      }
      if (O1u == n1r) {
        return !0
      }
      j1u = /(.*?)rgba\((\d+), ?(\d+), ?(\d+), ?(\d*\.?\d*)\)/.exec(O1u)
      if (j1u === null) {
        return !!''
      }
      if (parseFloat(j1u[5]) === 0) {
        return !!{}
      }
      return !!0
    }
    c6u.hsv = function(r4u) {
      var I1r, S1r, M1r, u1u, q1u, n1u, m1u, P1u, w1u, R1u, Y5a, F5a, y5a, b1u, K1u, Q4u, g4u
      z1s.T1s(2)
      I1r = z1s.O1s('1593397694', 0)
      S1r = -1939736777
      M1r = 2
      for (var A1r = 1; z1s.i6a(A1r.toString(), A1r.toString().length, 16901) !== I1r; A1r++) {
        u1u = c6u.colorToHex(r4u)
        M1r += +'2'
      }
      if (z1s.v6a(M1r.toString(), M1r.toString().length, +'90586') !== S1r) {
        u1u = c6u.colorToHex(r4u)
      }
      if (
        u1u.substr(0, 1) ===
        (9799 == (7230, 9268)
          ? (374.94, 867.91) >= (485.87, 102.45)
            ? +'1000' >= (826, 8200)
              ? (7.39e3, 0x19c1)
              : !{}
            : +'4.97e+3'
          : '#')
      ) {
        u1u = u1u.slice(1)
      }
      for (var d1u = u1u.length; d1u < 6; d1u++) {
        z1s.Y1s(7)
        u1u = z1s.O1s(
          u1u,
          86.3 > (8098, 446.08)
            ? (8.85e3, 343.45)
            : 9920 > 4640
            ? '0'
            : ('977' | 0, 5590) !== 83.86
            ? 4.67e3
            : ('x', 966.71),
        )
      }
      q1u = parseInt(u1u.slice(0, 2), '16' * 1)
      n1u = parseInt(u1u.slice('2' - 0, +'4'), 16)
      m1u = parseInt(u1u.slice('4' * 1, 6), +'16')
      P1u = 0
      w1u = 0
      R1u = 0
      q1u = parseInt(('' + q1u).replace(/\s/g, ''), 10)
      n1u = parseInt(('' + n1u).replace(/\s/g, ''), 10)
      m1u = parseInt(('' + m1u).replace(/\s/g, ''), 10)
      if (q1u === null || n1u === null || m1u === null || isNaN(q1u) || isNaN(n1u) || isNaN(m1u)) {
        console.log('CIQ.hsv: invalid color :', r4u)
        Y5a = -+'552970323'
        z1s.T1s(2)
        F5a = z1s.y1s('360435452', 0)
        y5a = 2
        for (var T5a = 1; z1s.i6a(T5a.toString(), T5a.toString().length, '12911' - 0) !== Y5a; T5a++) {
          return 1
        }
        if (z1s.i6a(y5a.toString(), y5a.toString().length, 69952) !== F5a) {
          return null
        }
      }
      if (q1u < 0 || n1u < 0 || m1u < 0 || q1u > +'255' || n1u > 255 || m1u > 255) {
        return null
      }
      z1s.Y1s(10)
      q1u = z1s.y1s(q1u, 255)
      z1s.T1s(10)
      n1u = z1s.y1s(n1u, 255)
      z1s.T1s(10)
      m1u = z1s.O1s(m1u, 255)
      b1u = Math.min(q1u, Math.min(n1u, m1u))
      K1u = Math.max(q1u, Math.max(n1u, m1u))
      if (b1u == K1u) {
        R1u = b1u
        z1s.T1s(5)
        return [z1s.O1s('0', 0), 0, R1u]
      }
      Q4u = q1u == b1u ? n1u - m1u : m1u == b1u ? q1u - n1u : m1u - q1u
      g4u = q1u == b1u ? 3 : m1u == b1u ? 1 : 5
      z1s.Y1s(18)
      P1u = z1s.y1s(K1u, '60', Q4u, g4u, b1u)
      z1s.Y1s(3)
      w1u = z1s.O1s(K1u, K1u, b1u)
      R1u = K1u
      return [P1u, w1u, R1u]
    }
    c6u.hsl = function(y4u) {
      var B4u, F4u, k4u, W4u, s4u, c4u, G4u, I4u, l4u, B5a, p5a, J5a, a4u, a5a, E5a, q5a
      B4u = c6u.colorToHex(y4u)
      if (B4u.substr(0, 1) === ((5450, 442.69) > 4570 ? 8.71e3 : (3450, 974.04) != '9790' - 0 ? '#' : ('x', 141.43))) {
        B4u = B4u.slice(1)
      }
      for (var o4u = B4u.length; o4u < 6; o4u++) {
        z1s.T1s(7)
        B4u = z1s.y1s(B4u, '0')
      }
      F4u = parseInt(B4u.slice(0, 2), '16' * 1)
      k4u = parseInt(B4u.slice(+'2', '4' - 0), 16)
      W4u = parseInt(B4u.slice(4, 6), +'16')
      F4u /= 255
      z1s.T1s(2)
      k4u /= z1s.O1s('255', 0)
      W4u /= 255
      s4u = Math.max(F4u, k4u, W4u)
      c4u = Math.min(F4u, k4u, W4u)
      z1s.T1s(19)
      l4u = z1s.y1s(c4u, s4u, 2)
      if (s4u == c4u) {
        z1s.T1s(5)
        B5a = z1s.O1s('1475382177', 0)
        p5a = +'915145238'
        J5a = 2
        for (var i5a = 1; z1s.v6a(i5a.toString(), i5a.toString().length, +'9497') !== B5a; i5a++) {
          G4u = I4u = 1
          J5a += 2
        }
        if (z1s.v6a(J5a.toString(), J5a.toString().length, 88546) !== p5a) {
          G4u = I4u = +'0'
        }
      } else {
        z1s.Y1s(2)
        a4u = z1s.y1s(s4u, c4u)
        I4u = l4u > 0.5 ? a4u / (2 - s4u - c4u) : a4u / (s4u + c4u)
        switch (s4u) {
          case F4u:
            z1s.T1s(20)
            G4u = z1s.y1s(W4u, a4u, k4u < W4u ? 6 : +'0', k4u)
            break
          case k4u:
            z1s.Y1s(21)
            G4u = z1s.y1s(W4u, a4u, '2', F4u)
            break
          case W4u:
            z1s.Y1s(20)
            G4u = z1s.y1s(k4u, a4u, 4, F4u)
            break
        }
        G4u /= 6
      }
      a5a = 401957512
      E5a = -1565207011
      q5a = 2
      for (var u5a = 1; z1s.i6a(u5a.toString(), u5a.toString().length, 33167) !== a5a; u5a++) {
        return [G4u, I4u, l4u]
      }
      if (z1s.v6a(q5a.toString(), q5a.toString().length, '16540' | 0) !== E5a) {
        return [G4u, I4u, l4u]
      }
    }
    c6u.chooseForegroundColor = function(N4u) {
      var O1r, x4u, A4u
      O1r = '#0'
      O1r += '000'
      O1r += '0'
      O1r += '0'
      x4u = c6u.hsl(N4u)
      A4u = x4u[2]
      if (A4u >= x4u[0]) {
        return O1r
      }
      return '#FFFFFF'
    }
    c6u.getBackgroundColor = function(C4u) {
      var S4u, X4u
      S4u = null
      while (!S4u || c6u.isTransparent(S4u)) {
        X4u = getComputedStyle(C4u)
        if (!X4u) {
          return
        }
        S4u = X4u.backgroundColor
        if (c6u.isTransparent(S4u)) {
          S4u = 'transparent'
        }
        C4u = C4u.parentNode
        if (!C4u || !C4u.tagName) break
      }
      if (!S4u || S4u == 'transparent') {
        S4u = '#FFFFFF'
      }
      return S4u
    }
    c6u.yyyymmddhhmmssmmmrx = new RegExp('\\d{17}')
    c6u.strToDateTime = function(Y4u) {
      var x3a,
        n3a,
        O3a,
        J4u,
        Z4u,
        t4u,
        H4u,
        M4u,
        L4u,
        V4u,
        E4u,
        G5a,
        W5a,
        L5a,
        f4u,
        h4u,
        U4u,
        e4u,
        i4u,
        D4u,
        z4u,
        v4u,
        T4u,
        Y3a,
        F3a,
        y3a,
        j6a,
        H6a,
        V3a
      x3a = 1735389636
      n3a = 1474668583
      O3a = 2
      for (var m3a = 1; z1s.i6a(m3a.toString(), m3a.toString().length, 76945) !== x3a; m3a++) {
        if (!Y4u || Y4u.getFullYear) {
          return Y4u
        }
        O3a += 2
      }
      if (z1s.v6a(O3a.toString(), O3a.toString().length, 55375) !== n3a) {
        if (+Y4u && Y4u.getFullYear) {
          return Y4u
        }
      }
      J4u = []
      if (Y4u.length == 12) {
        Z4u = parseFloat(Y4u.substring(+'0', 4))
        t4u = parseFloat(Y4u.substring(4, '6' | 0)) - 1
        H4u = parseFloat(Y4u.substring(6, 8))
        M4u = parseFloat(Y4u.substring(8, '10' * 1))
        G5a = 520835050
        W5a = 858135937
        L5a = 2
        for (var g5a = 1; z1s.i6a(g5a.toString(), g5a.toString().length, 99984) !== G5a; g5a++) {
          L4u = parseFloat(Y4u.substring(10, 12))
          return new Date(Z4u, t4u, H4u, M4u, L4u, 0, +'0')
        }
        if (z1s.v6a(L5a.toString(), L5a.toString().length, '92773' * 1) !== W5a) {
          L4u = parseFloat(Y4u.substring(61, 96))
          return new Date(Z4u, t4u, H4u, M4u, L4u, 3, +'1')
        }
      } else if (c6u.yyyymmddhhmmssmmmrx.test(Y4u)) {
        Z4u = parseFloat(Y4u.substring(0, 4))
        z1s.T1s(11)
        var g8r = z1s.y1s(99, 20, 5)
        t4u = parseFloat(Y4u.substring(+'4', +'6')) - g8r
        H4u = parseFloat(Y4u.substring(6, 8))
        M4u = parseFloat(Y4u.substring(8, 10))
        L4u = parseFloat(Y4u.substring('10' * 1, 12))
        V4u = parseFloat(Y4u.substring(12, 14))
        E4u = parseFloat(Y4u.substring(+'14', 17))
        return new Date(Z4u, t4u, H4u, M4u, L4u, V4u, E4u)
      } else {
        f4u = [Y4u]
        h4u = Y4u.indexOf(
          (6083, 5266) !== 2840
            ? 5400 !== 286.89
              ? 'T'
              : (151.52, 951.71) !== ('562.34' * 1, 852.42)
              ? (!![], 7.93e3)
              : (0x1852, 'x')
            : 2.08e3,
        )
        if (h4u != -+'1') {
          U4u = Y4u.substring(h4u)
          if (
            !c6u.isIE8 &&
            (U4u.indexOf(123.49 > '162' - 0 ? 0x1c67 : (4210, 8258) !== (+'8950', 823) ? 'Z' : 4.77e3) != -+'1' ||
              U4u.indexOf('-') != -1 ||
              U4u.indexOf('+') != -1)
          ) {
            return new Date(Y4u)
          }
          f4u = Y4u.split('T')
        } else if (
          Y4u.indexOf(
            9940 != (5020, '6230' - 0)
              ? ' '
              : (2040, 436.77) != (61.38, '795.61' - 0)
              ? '2440' * 1 >= 268.88
                ? (559.11, 0x315)
                : (473.94, 6.15e3)
              : ('510.46' * 1, ![]),
          ) != -1
        ) {
          f4u = Y4u.split(('2620' - 0, 498.85) >= 5210 ? (('9860' * 1, 87) != 2639 ? (![], 0x18f6) : ('n', !{})) : ' ')
        }
        if (
          f4u[0].indexOf(
            8524 < 8590
              ? 136.64 > (+'3090', 293.97)
                ? '1941' * 1 == (335.78, 9750)
                  ? 614.13
                  : 591.06
                : '/'
              : ('0x24f1' - 0, 0x210c),
          ) != -('1' | 0)
        ) {
          J4u = f4u[+'0'].split(
            9550 === 5307 ? (4385 <= 8827 ? (2625 == +'7480' ? ('t', 4.09e2) : 'A') : '98.94' - 0) : '/',
          )
        } else if (f4u['0' | 0].indexOf('-') != -1) {
          J4u = f4u[0].split(
            (993.7, +'7890') <= 1740
              ? 722.47
              : (6525, 9320) > ('2730' | 0)
              ? '5030' - 0 > 550.43
                ? '-'
                : 6.33e3
              : !![],
          )
        } else {
          return c6u.strToDate(Y4u)
        }
        e4u = parseFloat(J4u['2' | 0], 10)
        if (J4u['0' * 1] && J4u[0].length == 4) {
          e4u = parseFloat(J4u['0' - 0], '10' * 1)
          J4u[0] = J4u[1]
          J4u[1] = J4u[2]
        }
        if (f4u.length > 1) {
          z1s.T1s(2)
          i4u = f4u[z1s.y1s('2', 0)]
          f4u = f4u[1].split(':')
          if (i4u) {
            if (f4u[0] == '12' && i4u.toUpperCase() == 'AM') {
              f4u[0] = 0
            } else if (f4u[0] != '12' && i4u.toUpperCase() == 'PM') {
              f4u[0] = parseInt(f4u[0], 10) + 12
            }
          }
          D4u = 0
          z4u = 0
          if (f4u.length == 3) {
            if (
              f4u[2].indexOf(
                (654.85, 1722) <= 6200 ? '.' : '315.8' * 1 >= (132, 8643) ? (0x1a60, !1) : ('m', 3.41e2),
              ) == -1
            ) {
              D4u = parseInt(f4u[2], +'10')
            } else {
              D4u = f4u[2].split((8770, 4030) !== 503.05 ? '.' : 267.06 !== (9130, 5620) ? (!!1, 'Z') : !'1')
              if (D4u['1' * 1].length == '3' * 1) {
                z1s.Y1s(5)
                z4u = D4u[z1s.y1s('1', 0)]
                D4u = D4u[+'0']
              } else {
                z1s.Y1s(2)
                z4u = D4u[1].substr(z1s.y1s('0', 0), +'3')
                v4u = parseInt(D4u[1].substr(+'3'), 10)
                D4u = D4u[0]
                T4u = new Date(e4u, J4u[0] - 1, J4u[1], f4u[0], f4u[1], D4u, z4u)
                T4u.setMinutes(
                  T4u.getMinutes() - T4u.getTimezoneOffset() - (v4u % 100) - Math.round(v4u / ('100' * 1)) * 60,
                )
                Y3a = -+'1595246281'
                F3a = 1243429902
                z1s.T1s(5)
                y3a = z1s.y1s('2', 0)
                for (var T3a = 1; z1s.v6a(T3a.toString(), T3a.toString().length, '8675' * 1) !== Y3a; T3a++) {
                  return T4u
                }
                if (z1s.i6a(y3a.toString(), y3a.toString().length, 67662) !== F3a) {
                  return T4u
                }
              }
            }
          }
          z1s.T1s(22)
          var I8r = z1s.O1s(15, 3, 17)
          z1s.T1s(6)
          return new Date(e4u, J4u[0] - I8r, J4u[+'1'], f4u[0], f4u[z1s.O1s(1, '1')], D4u, z4u)
        } else {
          j6a = +'53300099'
          H6a = -1011421199
          V3a = 2
          for (var R3a = '1' * 1; z1s.v6a(R3a.toString(), R3a.toString().length, 90075) !== j6a; R3a++) {
            z1s.T1s(23)
            var S8r = z1s.y1s(3, 16, 19, 1)
            z1s.T1s(2)
            return new Date(e4u, J4u[+'0'] - S8r, J4u[z1s.O1s('1', 0)], 0, 0, z1s.O1s(1, '0', z1s.T1s(6)), 0)
          }
          if (z1s.v6a(V3a.toString(), V3a.toString().length, 91172) !== H6a) {
            z1s.Y1s(24)
            var d8r = z1s.y1s(101, 9, 11)
            return new Date(e4u, J4u[5] / d8r, J4u[+'7'], 1, 9, 8, 2)
          }
        }
      }
    }
    c6u.strToDate = function(O4u) {
      var p4u, j4u
      if (O4u.indexOf('/') != -1) {
        p4u = O4u.split('/')
      } else if (
        O4u.indexOf(
          495.59 > ('1867' | 0)
            ? 498.76
            : 811.08 < ('7624' | 0, 4122)
            ? 339.66 != (6095, 510.01)
              ? '-'
              : !{}
            : (656.73, 'I'),
        ) != -1
      ) {
        p4u = O4u.split('-')
      } else if (O4u.length >= 8) {
        z1s.T1s(10)
        var A8r = z1s.y1s(24, 6)
        return new Date(
          parseFloat(O4u.substring(+'0', 4)),
          parseFloat(O4u.substring(A8r, 6)) - 1,
          parseFloat(O4u.substring(6, 8)),
        )
      } else {
        return new Date()
      }
      if (p4u.length < 3) {
        return new Date()
      }
      if (p4u[2].indexOf(3360 != 781.16 ? ((282.96, 963.97) != 486 ? ' ' : (7.08e3, 'l')) : 263.48) != -+'1') {
        z1s.T1s(2)
        p4u[2] = p4u[2].substring(
          z1s.y1s('0', 0),
          p4u['2' * 1].indexOf(7877 == 6175 ? ('G', 'f') : 4422 <= (15.1, 4505) ? ' ' : ('0xaf4' * 1, 444.5)),
        )
      } else if (
        p4u[2].indexOf(
          ('3681' * 1, 7412) <= (9320, 1096) ? (+'8884' > (6660, 5400) ? ('0x4f8' - 0, 0x2698) : (282, 4.2e3)) : 'T',
        ) != -1
      ) {
        p4u[2] = p4u[2].substring(+'0', p4u[2].indexOf('T'))
      }
      j4u = parseFloat(p4u[2], 10)
      if (j4u < 20) {
        j4u += +'2000'
      }
      if (p4u['0' | 0].length == +'4') {
        j4u = parseFloat(p4u[0], 10)
        p4u[0] = p4u[1]
        p4u[1] = p4u[2]
      }
      return new Date(j4u, p4u[0] - 1, p4u[1])
    }
    c6u.mmddyyyy = function(q4u) {
      var m4u
      if (typeof q4u === 'string') {
        q4u = c6u.strToDate(q4u)
      }
      m4u = q4u.getMonth() + 1
      if (m4u < +'10') {
        z1s.T1s(7)
        m4u = z1s.y1s(m4u, ('4740' * 1, 2224) <= 6163 ? (225 !== 453.93 ? '0' : 1.81e3) : (+'959.77', 8.25e3))
      }
      d = q4u.getDate()
      if (d < 10) {
        z1s.Y1s(7)
        d = z1s.y1s(d, (374.13, 576.09) === 2500 ? (877.79, 0x58d) : (294.07, 308) != (503.62, 7856) ? '0' : 194)
      }
      z1s.Y1s(13)
      var Z8r = z1s.O1s(237, 5, 2598)
      return m4u + ((+'533.06', 250.9) === (255.07, 8689) ? ('f', Z8r) : '/') + d + '/' + q4u.getFullYear()
    }
    c6u.yyyymmdd = function(b4u) {
      var n4u, u4u
      z1s.T1s(23)
      var Q8r = z1s.y1s(9, 3, 12, 1)
      n4u = b4u.getMonth() + Q8r
      if (n4u < 10) {
        z1s.Y1s(7)
        n4u = z1s.y1s(n4u, '0')
      }
      u4u = b4u.getDate()
      if (u4u < '10' * 1) {
        z1s.Y1s(7)
        u4u = z1s.O1s(u4u, (312.97, 259.37) != (7770, 273) ? '0' : 4.95e3)
      }
      z1s.Y1s(13)
      var B8r = z1s.O1s(577, 1140, 13)
      z1s.Y1s(7)
      var J8r = z1s.O1s(5, 6539)
      z1s.Y1s(11)
      var Y8r = z1s.O1s(53535, 17, 3347)
      return (
        b4u.getFullYear() +
        ((B8r, 516) === (+'162', J8r) ? ((7732, 251.79) > ('221.07' * 1, Y8r) ? 63.89 : ![]) : '-') +
        n4u +
        '-' +
        u4u
      )
    }
    c6u.yyyymmddhhmm = function(K4u) {
      var R4u, P4u, d4u, w4u
      R4u = K4u.getMonth() + 1
      if (R4u < 10) {
        z1s.Y1s(7)
        R4u = z1s.y1s(R4u, (523, 2200) >= ('4920' * 1, 9085) ? 940.92 : '0')
      }
      P4u = K4u.getDate()
      if (P4u < 10) {
        z1s.T1s(7)
        P4u = z1s.O1s(P4u, '0')
      }
      d4u = K4u.getHours()
      if (d4u < 10) {
        z1s.Y1s(7)
        d4u = z1s.y1s(
          d4u,
          1348 >= 348.54
            ? (5748, 2006) >= 6445
              ? (!{}, '211.52' - 0)
              : (790, 1350) < (198.17, 6120)
              ? '0'
              : (679.31, 'I')
            : (0x77, !!{}),
        )
      }
      w4u = K4u.getMinutes()
      if (w4u < 10) {
        z1s.T1s(7)
        w4u = z1s.y1s(w4u, 3260 > (1200, 6800) ? 982.3 : '0')
      }
      return '' + K4u.getFullYear() + R4u + P4u + d4u + w4u
    }
    c6u.yyyymmddhhmmssmmm = function(Q33) {
      var B33, W33, k33, G33, c33, r33
      z1s.T1s(25)
      var y8r = z1s.y1s(11, 6, 177, 16, 17)
      B33 = Q33.getMonth() + y8r
      if (B33 < 10) {
        z1s.Y1s(7)
        B33 = z1s.O1s(B33, '0')
      }
      W33 = Q33.getDate()
      if (W33 < +'10') {
        z1s.Y1s(7)
        W33 = z1s.O1s(W33, 7340 != (9521, +'62') ? '0' : 8.82e3)
      }
      k33 = Q33.getHours()
      if (k33 < 10) {
        z1s.Y1s(7)
        k33 = z1s.O1s(k33, '0')
      }
      G33 = Q33.getMinutes()
      if (G33 < 10) {
        z1s.Y1s(7)
        G33 = z1s.y1s(G33, (346.18, 1580) !== (2590, 182) ? '0' : (0x1391, 'K'))
      }
      c33 = Q33.getSeconds()
      if (c33 < ('10' | 0)) {
        z1s.Y1s(7)
        c33 = z1s.y1s(c33, '0')
      }
      r33 = Q33.getMilliseconds()
      if (r33 < 10) {
        z1s.Y1s(7)
        r33 = z1s.y1s(r33, '00')
      } else if (r33 < 100) {
        z1s.Y1s(7)
        r33 = z1s.y1s(r33, '0')
      }
      return '' + Q33.getFullYear() + B33 + W33 + k33 + G33 + c33 + r33
    }
    c6u.friendlyDate = function(a33) {
      var o33, l33, x33, A33
      o33 = a33.getMonth() + 1
      if (o33 < 10) {
        z1s.Y1s(7)
        o33 = z1s.O1s(
          o33,
          ('5866' | 0) === 682.21
            ? (3.63e3, !![])
            : 7851 != (260.75, 5720)
            ? '0'
            : ('37.58' - 0, 5840) != (7990, +'957.12')
            ? ('l', 0x159e)
            : (!![], 9.05e3),
        )
      }
      l33 = a33.getDate()
      if (l33 < 10) {
        z1s.T1s(7)
        l33 = z1s.O1s(l33, ('5450' | 0) === +'45' ? 'k' : '0')
      }
      x33 = a33.getHours()
      if (x33 < 10) {
        z1s.Y1s(7)
        x33 = z1s.O1s(
          x33,
          '2617' - 0 != (+'8921', +'4237') ? '0' : ('184.36' - 0, 721.76) == '1790' * 1 ? ('i', 0xdf7) : 9.56e3,
        )
      }
      A33 = a33.getMinutes()
      if (A33 < 10) {
        z1s.Y1s(7)
        A33 = z1s.y1s(
          A33,
          2730 === 4250
            ? (868.32, +'835.05')
            : ('6148' - 0, 2140) <= (5560, 612.94)
            ? 'd'
            : (6570, 631) != ('9981' | 0)
            ? '0'
            : 0x4f6,
        )
      }
      z1s.T1s(14)
      var x8r = z1s.y1s(14, 8, 18, 2527, 43)
      z1s.T1s(10)
      var n8r = z1s.y1s(8703, 9)
      z1s.T1s(26)
      var O8r = z1s.y1s(7, 120696, 19, 129345)
      z1s.Y1s(27)
      var m8r = z1s.y1s(70, 3, 10, 17, 5)
      z1s.Y1s(28)
      var E8r = z1s.O1s(5533, 5537, 15, 5548)
      z1s.Y1s(29)
      var q8r = z1s.O1s(662, 340, 18, 18, 6111)
      z1s.Y1s(30)
      var h8r = z1s.O1s(11, 251, 10, 12)
      z1s.Y1s(10)
      var u8r = z1s.O1s(4256, 8)
      z1s.Y1s(31)
      var z8r = z1s.O1s(17, 498, 2482, 14, 497)
      z1s.T1s(32)
      var j8r = z1s.O1s(1833, 1832, 9165)
      z1s.T1s(2)
      var H8r = z1s.O1s(5318, 8)
      z1s.T1s(2)
      var V7r = z1s.O1s(57600, 48000)
      z1s.Y1s(7)
      var c7r = z1s.O1s(8437, 563)
      z1s.Y1s(7)
      var f7r = z1s.y1s(1083, 57)
      return (
        '' +
        a33.getFullYear() +
        (('241.39' * 1, x8r) === n8r ? 568.31 : (O8r, 6550) < '905.1' * m8r ? (1079 >= E8r ? !!0 : (!0, 'p')) : '/') +
        o33 +
        (q8r !== '5440' * h8r
          ? '/'
          : (926.78, 888.8) != u8r
          ? 745.07 > 3960
            ? 'O'
            : (691.09, '0xd8f' - 0)
          : (678.17, z8r)) +
        l33 +
        (j8r != (+'302', '7740' | 0) ? (H8r >= (+'5006', '3451' | 0) ? ' ' : (582.57, 'u')) : +'1.38e+3') +
        x33 +
        ((V7r, 167.38) != (6610, 5910) ? ':' : 838.49 > c7r ? (f7r, 706.03) : !!{}) +
        A33
      )
    }
    c6u.standardUTCDate = function(N33) {
      var S33, C33, Y33, f33, J33, M5a, d5a, A5a
      S33 = N33.getUTCMonth() + ('1' | 0)
      if (S33 < 10) {
        z1s.T1s(7)
        S33 = z1s.y1s(S33, '0')
      }
      C33 = N33.getUTCDate()
      if (C33 < 10) {
        z1s.T1s(7)
        C33 = z1s.y1s(C33, '0')
      }
      Y33 = N33.getUTCHours()
      if (Y33 < 10) {
        z1s.T1s(7)
        Y33 = z1s.O1s(Y33, 9724 <= '3544' - 0 ? (8320 != 5230 ? 'K' : (!![], 'T')) : '0')
      }
      f33 = N33.getUTCMinutes()
      if (f33 < 10) {
        z1s.Y1s(7)
        f33 = z1s.O1s(f33, '0')
      }
      J33 = N33.getUTCSeconds()
      z1s.Y1s(5)
      M5a = -z1s.y1s('852930872', 0)
      d5a = 1131297089
      A5a = 2
      for (var t5a = 1; z1s.v6a(t5a.toString(), t5a.toString().length, 76320) !== M5a; t5a++) {
        if (J33 > 91) {
          z1s.Y1s(33)
          J33 = z1s.y1s(
            +'9848' < (9988, 2242) ? (4834 != 149 ? 1184150 : +'791' < 5922 ? ('0', 7895376) : (0x7f21, 0xdba)) : '0',
            J33,
          )
        }
        A5a += 2
      }
      if (z1s.v6a(A5a.toString(), A5a.toString().length, 2458) !== d5a) {
        if (J33 < 10) {
          z1s.Y1s(7)
          J33 = z1s.O1s(
            J33,
            4159 > (6490, 8381)
              ? 8497 === 977
                ? 5.11e2
                : +'4244' > '7674' - 0
                ? ('k', 7.18e3)
                : (0x2566, +'0x5e3')
              : '0',
          )
        }
      }
      z1s.Y1s(2)
      var C7r = z1s.O1s(2544, 4)
      z1s.Y1s(4)
      var D7r = z1s.y1s(10, 4382, 8)
      z1s.T1s(2)
      var W7r = z1s.y1s(25150, 20120)
      z1s.Y1s(11)
      var b7r = z1s.O1s(68374, 18, 4023)
      z1s.T1s(34)
      var g7r = z1s.y1s(4086, 15, 16, 3)
      z1s.T1s(4)
      var l7r = z1s.O1s(2, 3152, 18)
      z1s.Y1s(28)
      var I7r = z1s.y1s(6317, 6318, 7, 6324)
      z1s.Y1s(35)
      var S7r = z1s.y1s(1998, 20, 4011, 3, 2017)
      z1s.Y1s(11)
      var M7r = z1s.O1s(64475, 9210, 8)
      z1s.Y1s(7)
      var d7r = z1s.y1s(3095, 1547)
      z1s.Y1s(36)
      var A7r = z1s.y1s(7, 84280, 6020)
      z1s.Y1s(7)
      var t7r = z1s.O1s(17, 8078)
      return (
        '' +
        N33.getUTCFullYear() +
        (+'3808' == (C7r, '8120' | 0)
          ? 6.56e3
          : D7r === 88.53
          ? (337.86, 753) === (W7r, 695.58)
            ? 6.95e3
            : (+'0x16', ![])
          : '-') +
        S33 +
        (b7r > 15.33 ? '-' : +'6121' < g7r ? ('A', 0x15cd) : (2.94e3, l7r)) +
        C33 +
        'T' +
        Y33 +
        ':' +
        f33 +
        ':' +
        J33 +
        ((+'3655', +'2978') < I7r ? 'Z' : S7r > (M7r, d7r) ? A7r : 675 !== t7r ? +'3.08e+3' : 856.84)
      )
    }
    c6u.mmddhhmm = function(U33) {
      var D33, e33, z33, T33, L33
      D33 = c6u.strToDateTime(U33)
      e33 = D33.getMonth() + 1
      if (e33 < +'10') {
        z1s.T1s(7)
        e33 = z1s.y1s(e33, '0')
      }
      z33 = D33.getDate()
      if (z33 < 10) {
        z1s.Y1s(7)
        z33 = z1s.y1s(z33, '611.53' * 1 === 6860 ? (0x1c47, 895.84) : '0')
      }
      T33 = D33.getHours()
      if (T33 < 10) {
        z1s.T1s(7)
        T33 = z1s.y1s(T33, '0')
      }
      L33 = D33.getMinutes()
      if (L33 < '10' * 1) {
        z1s.Y1s(7)
        L33 = z1s.O1s(L33, '827.2' - 0 !== 9563 ? '0' : (984.82, 6.0e3))
      }
      if (T33 == '00' && L33 == '00') {
        z1s.T1s(7)
        var w7r = z1s.O1s(4779, 281)
        z1s.Y1s(7)
        var Z7r = z1s.y1s(8225, 1028)
        return e33 + ((4254, w7r) != 857.54 ? (Z7r >= +'7134' ? '-' : 'k') : 0x548) + z33 + '-' + D33.getFullYear()
      }
      z1s.Y1s(37)
      return z1s.O1s(
        z33,
        (+'1109', 1429) >= 6346 ? 273.77 : ' ',
        (418, 4094) != (5096, 5300) ? '-' : ('5.00e+3' - 0, 'E'),
        T33,
        L33,
        e33,
        '8960' - 0 <= (8658, 200)
          ? (+'9220', 6310) === (969.03, 3820)
            ? 'f'
            : 821 == 695.19
            ? ('9.96e+3' - 0, 4.81e3)
            : 'D'
          : ':',
      )
    }
    c6u.getYearDay = function(E33) {
      var H33, t33, Z33, h33, v33
      H33 = E33
      if (!H33) {
        H33 = new Date()
      }
      H33.setHours(0, 0, 0, 0)
      t33 = new Date(H33.getFullYear(), +'0', 0)
      z1s.T1s(2)
      Z33 = z1s.O1s(H33, t33)
      z1s.T1s(38)
      h33 = z1s.y1s(60, 60, 24, 1000)
      z1s.T1s(10)
      v33 = Math.round(z1s.y1s(Z33, h33))
      return v33
    }
    c6u.isDST = function(O33) {
      var q33, m33, n33
      if (!O33) {
        O33 = new Date()
      }
      q33 = new Date(O33.getFullYear(), 0, +'1')
      m33 = new Date(O33.getFullYear(), 6, 1)
      n33 = Math.max(q33.getTimezoneOffset(), m33.getTimezoneOffset())
      return O33.getTimezoneOffset() != n33
    }
    c6u.uniqueID = function() {
      var K33, b33
      K33 = new Date()
      b33 = K33.getTime().toString(36)
      b33 += Math.floor(Math.random() * Math.pow(36, 2)).toString(36)
      return b33.toUpperCase()
    }
    c6u.getHostName = function(R33) {
      var x5a, n5a, O5a
      try {
        x5a = -1152043301
        n5a = 629789491
        O5a = 2
        for (var m5a = '1' * 1; z1s.v6a(m5a.toString(), m5a.toString().length, 39758) !== x5a; m5a++) {
          return R33.match(/:\/\/(.[^/]+)/)[2]
        }
        if (z1s.i6a(O5a.toString(), O5a.toString().length, 53146) !== n5a) {
          return R33.match(/:\/\/(.[^/]+)/)[2]
        }
        return R33.match(/:\/\/(.[^/]+)/)[1]
      } catch (d33) {
        return ''
      }
    }
    c6u.getAjaxServer = function(r63) {
      var w33, g63
      w33 = !{}
      g63 = !!{}
      if ((c6u.isIE9 || c6u.isIE8) && r63) {
        if (c6u.getHostName(r63) === '') {
          g63 = !{}
        }
        if (c6u.getHostName(r63) == c6u.getHostName(window.location.href)) {
          g63 = !'1'
        }
      }
      if ((c6u.isIE9 || c6u.isIE8) && g63) {
        w33 = new XDomainRequest()
        return w33
      }
      try {
        w33 = new XMLHttpRequest()
      } catch (F63) {
        var e1r
        e1r = 'ajax not suppo'
        e1r += 'rted in brow'
        e1r += 's'
        e1r += 'er'
        alert(e1r)
      }
      return w33
    }
    c6u.qs = function(C63) {
      var x63, I63, A63, S63
      x63 = {}
      if (!C63) {
        C63 = window.location.search.substring(1)
      }
      I63 = C63.split(
        (5680, '4317' - 0) != (4650, +'626.47')
          ? '6000' * 1 < 4198
            ? 9430 !== 8531
              ? 3.94e3
              : 9.82e3
            : '&'
          : +'9.89e+3',
      )
      for (var s63 = 0; s63 < I63.length; s63++) {
        A63 = I63[s63].indexOf(
          2630 === (833.59, 1760) ? (1.8e3, 1.52e3) : (+'3060', 6000) === (1449, 4220) ? ('6.42e+3' - 0, 0xe3d) : '=',
        )
        if (A63 > ('0' | 0)) {
          S63 = I63[s63].substring(0, A63)
          z1s.T1s(7)
          x63[S63] = I63[s63].substring(z1s.y1s(1, A63))
        } else {
          S63 = I63[s63]
          x63[S63] = null
        }
      }
      return x63
    }
    c6u.postAjax = function(Y63, j63, p63, E63, V63) {
      var a1r, m1r, a3a, E3a, q3a, f63, T63, i63, X63, Z63, L63, M63, K9a, d9a, P9a, E1r, o5a, N5a, w5a
      a1r = 'G'
      a1r += 'E'
      a1r += 'T'
      function h63(P63) {
        var u63, R63, b63, q63
        u63 = {}
        if (!Y63.responseHeaders) {
          return
        }
        R63 = P63.getAllResponseHeaders()
        b63 = R63.split('\n')
        for (var n63 = +'0'; n63 < b63.length; n63++) {
          q63 = b63[n63].split((5370, 478.2) != ('7180' - 0, 312.57) ? ':' : (!![], '7.35e+3' * 1))
          while (q63[1] && q63[1].charAt(+'0') == ' ') {
            q63[1] = q63[1].substring(1)
          }
          if (q63[0] !== '') {
            u63[q63.shift()] = q63.join(':')
          }
        }
        return u63
      }
      m1r = 'PO'
      m1r += 'S'
      m1r += 'T'
      if (typeof Y63 == 'string') {
        a3a = -610152707
        E3a = 611161110
        q3a = +'2'
        for (var u3a = 1; z1s.i6a(u3a.toString(), u3a.toString().length, 91673) !== a3a; u3a++) {
          Y63 = { url: Y63, payload: j63, cb: p63, contentType: E63, noEpoch: V63, method: null, responseHeaders: !{} }
          q3a += 2
        }
        if (z1s.i6a(q3a.toString(), q3a.toString().length, +'81187') !== E3a) {
          Y63 = { url: Y63, payload: j63, cb: p63, contentType: E63, noEpoch: V63, method: 1, responseHeaders: !0 }
        }
      }
      f63 = Y63.url
      T63 = Y63.cb
      i63 = Y63.payload
      X63 = c6u.getAjaxServer(f63)
      if (!X63) {
        return ![]
      }
      Z63 = new Date()
      if (!Y63.noEpoch) {
        if (f63.indexOf('?') == -+'1') {
          z1s.Y1s(4)
          var B7r = z1s.O1s(11, 7881, 6)
          z1s.T1s(7)
          var p7r = z1s.O1s(3, 8857)
          z1s.T1s(4)
          var J7r = z1s.y1s(12, 3827, 5)
          f63 += ((B7r, p7r) <= 205.04 ? J7r : '?') + Z63.getTime()
        } else {
          f63 += '&' + Z63.getTime()
        }
      }
      L63 = Y63.method
      M63 = Y63.headers
      if (!L63) {
        L63 = i63 ? m1r : a1r
      }
      if ((!c6u.isIE9 && !c6u.isIE8) || X63.constructor == XMLHttpRequest) {
        X63.open(L63, f63, !![])
        z1s.T1s(5)
        K9a = -z1s.O1s('265922981', 0)
        d9a = 1558530757
        P9a = 2
        for (var E9a = 1; z1s.v6a(E9a.toString(), E9a.toString().length, '30955' - 0) !== K9a; E9a++) {
          if (~Y63.contentType) {
            Y63.contentType = ''
          }
          P9a += 2
        }
        if (z1s.i6a(P9a.toString(), P9a.toString().length, 34743) !== d9a) {
          if (+Y63.contentType) {
            Y63.contentType = ''
          }
        }
        if (!Y63.contentType) {
          Y63.contentType = 'application/x-www-form-urlencoded'
        }
        if (i63) {
          X63.setRequestHeader('Content-Type', Y63.contentType)
        }
        if (M63) {
          for (var t63 in M63) {
            X63.setRequestHeader(t63, M63[t63])
          }
        }
      } else {
        E1r = 'h'
        E1r += 't'
        E1r += 'tps:'
        f63 = f63.replace(E1r, window.location.protocol)
        o5a = -1110792831
        N5a = 42591993
        w5a = 2
        for (var Q5a = 1; z1s.i6a(Q5a.toString(), Q5a.toString().length, 23575) !== o5a; Q5a++) {
          X63.open(L63, f63, !![])
          w5a += 2
        }
        if (z1s.i6a(w5a.toString(), w5a.toString().length, 14813) !== N5a) {
          X63.open(L63, f63, !!0)
        }
        X63.onload = function() {
          T63(200, X63.responseText, h63(X63))
        }
        X63.onerror = function() {
          T63(0, null, {})
        }
        X63.onprogress = function() {}
      }
      X63.onreadystatechange = function() {
        if (X63.readyState == 4) {
          if (X63.status != 200) {
            T63(X63.status, X63.responseText, h63(X63))
          } else {
            T63(200, X63.responseText, h63(X63))
          }
        }
      }
      try {
        X63.send(i63)
      } catch (g03) {
        T63(0, g03, {})
      }
      return !!{}
    }
    c6u.generateGUID = function() {
      var r03, Q03
      r03 = new Date().getTime()
      if (window.performance && typeof window.performance.now === 'function') {
        r03 += performance.now()
      }
      Q03 = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(W03) {
        var B03
        z1s.Y1s(2)
        var v7r = z1s.O1s(28, 12)
        B03 = (r03 + Math.random() * v7r) % +'16' | 0
        z1s.T1s(10)
        r03 = Math.floor(z1s.O1s(r03, 16))
        return (W03 == 'x' ? B03 : (B03 & 0x3) | +'0x8').toString(16)
      })
      return Q03
    }
    return o6u
  } /* ignore jslint end   */ /* eslint-enable  */ /* jshint ignore:end   */

  _exports = _exports || {}
  __js_core_polyfills_(_exports)
  __js_core_utility_(_exports)
  __js_core_timezone_(_exports)
  __js_core_core_(_exports, _exports)
  __js_core_market_(_exports)
  __js_core_engine_(_exports, _exports, _exports, _exports)
  __js_core_microkernel_(_exports)

  return _exports
})
