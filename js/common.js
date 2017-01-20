function createWindow(win) {
    chrome.windows.create(win, function () {
    });
}

function createTab(tab) {
    chrome.tabs.create(tab, function () {
    });
}

$(function () {
    $("#portrait").bind("click", function () {
        createTab({url: "http://tieba.baidu.com/f?kw=%E9%97%AB%E4%BF%8A%E5%B3%B0&ie=utf-8"})
    })
})