/*
 * 只在插件初始化的时候加载一次
 * 不被任何页面引用
 */
function createSimpleNotificationOne() {
    new Notification('你好！', {
        icon: 'icon.png',
        body: '    最亲爱的朋友，我是闫俊峰，快来和我一起玩耍吧。'
    });
}

function createHtmlNotificationOne() {

}

var menuOne = chrome.contextMenus.create({
    "title": "枫哥的简介",
    "contexts": ["all"],
    "onclick": createSimpleNotificationOne
});

