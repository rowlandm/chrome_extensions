// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function asccClick(info, tab) {
    
    
    var url = 'http://127.0.0.1:5000/searches/index?gene='+info.selectionText;
    chrome.tabs.create({ url: url});
    
}


// Get a selection context menu
var context = 'selection';
var title = "ASCC Portal search";
var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                   "onclick": asccClick});


chrome.tabs.onCreated.addListener(function(tab) { 
    window.addEventListener("mousedown", function(mouseEvent) {
        
        alert(mouseEvent.button);
        if(mouseEvent.button == 2){
            alert("you clicked right button");//can see this when right-click
        }
    }, 
    false);

      
});



    /*
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown = ContextMouseDown;
function ContextMouseDown(event){
        alert('rhgith sdafasdf');
} */


