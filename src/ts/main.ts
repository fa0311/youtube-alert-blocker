const bypasser = (nodeList: HTMLElement) => {
    const query = 'div#player-error-message-container tp-yt-paper-button#button';
    const feedList:  NodeListOf<Element> = nodeList.querySelectorAll(query);
    for (const feed of feedList) {
        (<HTMLElement>feed).click();
        console.log("[youtube-alert-blocker] success.");
    }
}

const observer = new MutationObserver(records => {
    for (const record of records) {
        for (const nodeList of record.addedNodes) {
            if (nodeList instanceof HTMLElement) {
                bypasser(nodeList);
            }
        }
    }
});

observer.observe(document.documentElement, { childList: true, subtree: true });