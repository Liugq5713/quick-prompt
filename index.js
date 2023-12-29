// ==UserScript==
// @name         Quick Prompt
// @namespace    http://your.namespace.com
// @version      0.1
// @description  My first Greasemonkey script with a UI
// @author       Lynden
// @match        https://chat.openai.com/*
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// ==/UserScript==

;(function () {
  'use strict'

  // 添加样式
  GM_addStyle(`
        #myListContainer {
            position: fixed;
            bottom: 10px;
            right: 10px;
            background-color: #fff;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        #myList {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        #myList li {
            cursor: pointer;
            color: #ccc;
            margin-bottom: 5px;
        }
    `)

  // 创建列表容器
  const listContainer = document.createElement('div')
  listContainer.id = 'myListContainer'
  document.body.appendChild(listContainer)

  // 创建列表
  const list = document.createElement('ul')
  list.id = 'myList'
  listContainer.appendChild(list)

  const injectTextValue = text => {
    document.querySelector('#prompt-textarea').value = text
    document.querySelector('#prompt-textarea').focus()
  }

  const promptMap = {
    'english-sentence': {
      prompt: '请将下面句子改写, 并且输出他的中文翻译',
    },
  }
  // 添加列表项
  const items = Object.keys(promptMap)
  items.forEach(itemText => {
    const listItem = document.createElement('li')
    listItem.textContent = itemText
    listItem.addEventListener('click', () => {
      injectTextValue(promptMap[itemText].prompt)
    })
    list.appendChild(listItem)
  })
})()
