(() => {
  'use strict'

   if (!(/windows phone/i.test(navigator.userAgent)) && /android/i.test(navigator.userAgent)) {
     window.location.href = 'itms-apps://play.google.com/store/apps/details?id=com.motionvolt.flipdiving'
   }

  if (/ipad|iphone|ipod/i.test(navigator.userAgent)) {
    window.location.href = 'itms-apps://apps.apple.com/app/diving-rules/id1579861867'
  }
})
