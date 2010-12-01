// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function asccClick(info, tab) {
    
    var url;
    
    
    if (info.menuItemId == 2) {
		url = 'http://www.stemformatics.org/genes/search?gene='+info.selectionText;
	} else if (info.menuItemId == 3) {
		url = 'http://www.stemformatics.org/datasets/search';
	}
    
    chrome.tabs.create({ url: url});
}


// Get a selection context menu
var context = 'selection';
var title = "Stemformatics.org search";

var parent = chrome.contextMenus.create({"title": title, "contexts":[context],
                                   });


var child1 = chrome.contextMenus.create(
  {"title": "Gene Search", "parentId": parent, "onclick": asccClick, "contexts":[context]});

var child2 = chrome.contextMenus.create(
  {"title": "Dataset Search", "parentId": parent, "onclick": asccClick, "contexts":[context]});

