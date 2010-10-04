// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function asccClick(info, tab) {
    
    
    var url = 'http://staticice.com.au/cgi-bin/search.cgi?q='+info.selectionText+'+state:qld';
    chrome.tabs.create({ url: url});
    
}


// Get a selection context menu
var context = 'selection';
var title = "Static Ice search";
var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                   "onclick": asccClick});

