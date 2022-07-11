chrome.action.onClicked.addListener(function(e){
	chrome.tabs.create({
		url:"https://login.proxy.lib.duke.edu/login?url=" + e.url,
	})
})