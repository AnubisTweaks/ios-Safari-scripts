// ==UserScript==
// @name         MultiGTranslate
// @author       AnubisTweaks
// @namespace    https://github.com/Mabdelwanis/GreasyScripts/blob/main/MultiGTranslate.js
// @description  Translate website to Multilanguage thanks for KaiterPlus
// @version      1.67
// @license      BSD-3-Clause
// @include      *://*
// @exclude      /^(http|https).*((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/
// @icon         data:image/png;base64,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
// @noframes
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// ==/UserScript==

;(function () {
  'use strict'

  // cancel useless image request
  const pointTimer = setInterval(() => {
    const banner = document.getElementById(':2.container')
    if (banner) {
      const doc = banner.contentWindow.document || banner.contentDocument
      const imgs = doc.getElementsByTagName('img')
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = ''
      }
      clearInterval(pointTimer)
    }
  }, 10)

  // menu
  const menu = [
    {
      key: 'position',
      name: 'button position',
      value: true,
      showNotification: true,
      tip: {
        open: '👈',
        close: '👉'
      },
      click: setButtonPosition
    },
    {
      key: 'isCheck',
      name: 'Automatically detect Arabic',
      value: true,
      showNotification: true,
      tip: {
        open: '✅',
        close: '❌'
      },
      click: null
    },
  ]

  // Save the registered menu
  const munuRegister = []

  // Configure default menu
  menu.forEach(v => {
    if (GM_getValue(v.key) === undefined || GM_getValue(v.key) === null) GM_setValue(v.key, v.value)
  })

  // registration menu
  function registerMenuCommand() {
    if (munuRegister.length === menu.length) {
      munuRegister.forEach(v => {
        GM_unregisterMenuCommand(v)
      })
    }
    menu.forEach((v, i) => {
      v.value = GM_getValue(v.key)
      munuRegister[i] = GM_registerMenuCommand(`${v.value ? v.tip.open : v.tip.close} ${v.name}`, () => {
        menuSwitch(v)
      })
    })
  }

  // toggle menu
  function menuSwitch(item) {
    // set data
    item.value = !item.value
    GM_setValue(item.key, item.value)
    // system notification
    if (item.showNotification) {
      GM_notification({
        text: `已${item.value ? item.tip.open : item.tip.close}[${item.name}] Function`,
        title: 'Website Translation',
        timeout: 1000
      })
    }
    // If there is a click event, execute
    if (item.click) item.click()
    // register again
    registerMenuCommand()
  }

  // Open the setting shortcut key popup
  function openSupport() {
    document.getElementById('k-support-wrap').classList.add('show')
    document.getElementById('k-support-content').classList.add('show')
  }

  // Obtain head
  const head = document.head
  // get body
  const body = document.body
  // Get the language of the current page
  const lang = document.documentElement.lang
  // Get the title of the page
  const pageTitle = document.title
  // Get the primary language used by the web page
  const mainLang = document.characterSet.toLowerCase()

  // Determine whether it is a Arabic web page
  function isArabicPage() {
    return (
      GM_getValue('isCheck') &&
      (lang.substring(0, 2) === 'ar' || mainLang.substring(0, 2) === 'gb' || /[\u0600-\u06FF]/.test(pageTitle))
    )
  }

  // Location information style
  let positionStyle = null
  // set button position
  function setButtonPosition() {
    if (positionStyle) positionStyle.parentNode.removeChild(positionStyle)
    positionStyle = GM_addStyle(`
      #google_translate_element {
        ${GM_getValue('position') ? 'left' : 'right'}: 0;
        transform: translateX(${GM_getValue('position') ? '-' : ''}85%);
      }
      .recoverPage {
        ${GM_getValue('position') ? 'left' : 'right'}: 0;
        transform: translateX(${GM_getValue('position') ? '-' : ''}73%);
      }
      @media handheld, only screen and (max-width: 768px) {
        #google_translate_element {
          transform: translateX(${GM_getValue('position') ? '-' : ''}60%);
        }
        .recoverPage {
          transform: translateX(0);
        }
      }
    `)
  }

  // Show translation suggestion message
  let tipStyle = null
  function setShowTip() {
    if (tipStyle) tipStyle.parentNode.removeChild(tipStyle)
    tipStyle = GM_addStyle(`
      #goog-gt- {
        visibility: ${GM_getValue('isShowTip') ? 'visible' : 'hidden!important'};
        display: ${GM_getValue('isShowTip') ? 'block' : 'none!important'};
      }
      .goog-text-highlight {
        background-color: ${GM_getValue('isShowTip') ? '#c9d7f1' : 'inherit!important'};
        box-shadow: ${GM_getValue('isShowTip') ? '2 2 4 #99a' : '0 0 0 0 transparent!important'};
      }
    `)
  }

  // Show support popup
  function showSupport() {}

  // registration menu
  registerMenuCommand()

  // Determine whether it is Arabic, if not, execute
  if (!isArabicPage()) {
    // How to create web page elements
    function createElement(html, nodeText, attr, parent) {
      const element = document.createElement(nodeText)
      if (attr) {
        element[attr] = html
      } else {
        element.innerHTML = html
      }
      parent.appendChild(element)
    }

    // Initialize button position
    setButtonPosition()
    // Initialize whether to show better translation suggestions
    setShowTip()

    // Set the page to automatically http upgrade to https
    // const e = document.createElement('meta')
    // e.setAttribute('http-equiv', 'Content-Security-Policy')
    // e.setAttribute('content', 'upgrade-insecure-requests')
    // head.appendChild(e)

    // Custom style, hide top bar
    GM_addStyle(`
      html,body{
        top: 0!important;
      }
      #google_translate_element {
        position: fixed;
        bottom: 30px;
        height: 21px;
        border-radius: 11px;
        z-index: 10000000;
        overflow: hidden;
        box-shadow: 1px 1px 3px 0 #888;
        opacity: .5;
        transition: all .3s;
        background-color: #646cff;
      }
      #google_translate_element .goog-te-gadget-simple {
        border: 0;
        background-color: transparent;
      }
      #google_translate_element .goog-te-gadget-simple span {
        margin-right: 0;
        border-radius: 11px;
        color: rgba(255, 255, 255, .87);
      }
      /* hide mobile top bar */
      [id=":1.container"].skiptranslate {
        display: none;
      }
      /* Hide the top bar on PC */
      [id=":2.container"].skiptranslate {
        display: none;
      }
      #lb {
        display: inline-block;
      }
      .recoverPage {
        width: 4em;
        background-color: #646cff;
        color: rgba(255, 255, 255, .87);
        position: fixed;
        z-index: 10000000;
        bottom: 60px;
        user-select: none;
        text-align: center;
        font-size: small;
        line-height: 2em;
        border-radius: 1em;
        box-shadow: 1px 1px 3px 0 #888;
        opacity: .5;
        transition: all .3s;
      }
      #google_translate_element:hover, .recoverPage:hover {
        opacity: 1;
        transform: translateX(0);
      }
      .recoverPage:active {
        box-shadow: 1px 1px 3px 0 #888 inset;
      }
      #google_translate_element .goog-te-gadget-simple {
        width: 100%;
      }
      @media handheld, only screen and (max-width: 768px) {
        #google_translate_element {
          width: 104px;
          color: unset;
          background-color: #fff;
        }
        #google_translate_element .goog-te-combo {
          margin: 0;
          padding-top: 2px;
          border: none;
          color: unset;
          background-color: transparent;
        }
        .recoverPage {
          width: 1.5em;
          color: unset;
          line-height: 1.5em;
          background-color: #fff;
        }
      }
    `)

    // create container
    createElement('google_translate_element', 'div', 'id', body)
    // initialization
    createElement(
      `
      function googleTranslateElementInit() {
        new google.translate.TranslateElement(
          {
            pageLanguage: 'auto',
            //Languages
            includedLanguages: 'en,ar',
            /*
             * 0，Native select, and the Google logo is displayed below the button。
             * 1，Native selection, and the Google logo is displayed on the right.
             * 2，fully expanded language list, suitable for pc。
             */
            layout: /mobile/i.test(navigator.userAgent) ? 0 : 0
          },
          'google_translate_element'
        )
        // Clear image requests to speed up access
        let img = [].slice.call(document.querySelectorAll('#goog-gt- img,#google_translate_element img'))
        img.forEach(function (v) {
          const a = v
          a.src = ''
          let b = a.outerHTML.replace(/<img(.*?)>/, () => {
            return '<span id="lb"' + RegExp.$1 + '></span>'
          })
          const c = document.createElement('div')
          c.innerHTML = b
          a.parentNode.insertBefore(c.children[0], a.parentNode.children[0])
          a.remove()
        })
        const recoverPage = document.createElement('div')
        recoverPage.setAttribute('class', 'notranslate recoverPage')
        recoverPage.innerText = 'O'
        document.body.appendChild(recoverPage)
        // Click to restore the original page
        recoverPage.onclick = () => {
          const phoneRecoverIframe = document.getElementById(':1.container') // mobile terminal
          const PCRecoverIframe = document.getElementById(':2.container') // PC side
          if (phoneRecoverIframe) {
            const recoverDocument = phoneRecoverIframe.contentWindow.document
            recoverDocument.getElementById(':1.restore').click()
          } else if (PCRecoverIframe) {
            const recoverDocument = PCRecoverIframe.contentWindow.document
            recoverDocument.getElementById(':2.restore').click()
          }
        }
      }
    `,
      'script',
      '',
      head
    )

    // Import translation interface
    createElement(
      'https://translate.google.com/translate_a/element.js?&cb=googleTranslateElementInit',
      'script',
      'src',
      head
    )

    // Exclude translation of some codes
    const noTranslateArray = [
      '.bbCodeCode',
      'tt',
      'pre[translate="no"]',
      'pre',
      '.post_spoiler_show',
      '.c-article-section__content sub',
      '.c-article-section__content sup',
      '.c-article-equation',
      '.mathjax-tex'
    ]
    noTranslateArray.forEach(selectorName => {
      ;[...document.querySelectorAll(selectorName)].forEach(node => {
        if (node.className.indexOf('notranslate') === -1) {
          node.classList.add('notranslate')
        }
      })
    })

    // Exclude some texts that do not need to be translated for some websites
    const noTranslateList = [
      {
        site: 'cratchapixel.com',
        selector: ['span.MathJax']
      }
    ]
    noTranslateList.forEach(item => {
      if (~document.domain.indexOf(item.site)) {
        item.selector.forEach(selectorName => {
          let timer = null
          let classList = document.querySelectorAll(selectorName)
          if (!classList[0]) {
            timer = setInterval(() => {
              classList = document.querySelectorAll(selectorName)
              if (classList[0]) {
                clearInterval(timer)
                ;[...classList].forEach(node => {
                  if (!~node.className.indexOf('notranslate')) {
                    node.classList.add('notranslate')
                  }
                })
              }
            })
          }
        })
      }
    })

    // Solve the problem that some websites cannot scroll after opening the script
    function CanIScroll() {
      // 其它网站
      const noScrollSite = ['curseforge.com']
      noScrollSite.forEach(site => {
        if (~document.domain.indexOf(site)) {
          GM_addStyle(`
            html {
              height: auto!important;
            }
          `)
        }
      })

      // Solve the problem that gatesnotes.com cannot scroll after opening the script, the principle is that the z-index is too low
      if (~document.domain.indexOf('gatesnotes.com')) {
        GM_addStyle(`
          .TGN_site {
            z-index: 0!important;
          }
        `)
      }
    }
    CanIScroll()
    // add style
    GM_addStyle(`
      .k-support-wrap {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999999999;
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
      }

      .k-support-wrap.show {
        visibility: visible;
      }

      .k-support-wrap .k-support-content {
        padding: 20px;
        border-radius: 6px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 10%);
        background-color: #fff;
        transform: scale(0);
        position: relative;
        transition: transform 0.3s;
        text-align: center;
      }

      .k-support-content.show {
        transform: scale(1);
      }

      .k-support-content .k-support-title {
        font-size: 24px;
      }

      .k-support-content .k-support-code {
        width: 250px;
        height: 250px;
        margin: 15px;
      }

      .k-support-content .k-support-close {
        width: 80px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        border-radius: 6px;
        background-color: #F56C6C;
        margin: 0 auto;
        color: #fff;
      }

      .k-support-content .k-support-close:hover {
        opacity: 0.6;
      }
    `)
  }
})()
