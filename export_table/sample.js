// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function rmClick(info, tab) {
    
    var url;
    
    
    $('a').css({'background-color': 'yellow'});
    alert('right heredfsd');
    $('table').html('hello');
    if (info.menuItemId == 2) {
		//url = 'http://127.0.0.1:5000/genes/search?gene='+info.selectionText;
	} else if (info.menuItemId == 3) {
		//url = 'http://127.0.0.1:5000/datasets/search?dataset='+info.selectionText;
	}
    
    //chrome.tabs.create({ url: url});
}


// Get a selection context menu
var context = 'all';
var title = "Export Table";

var parent = chrome.contextMenus.create({"title": title, "contexts":[context],"onclick": rmClick });



