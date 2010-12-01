// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
    
    var url;
    
    // Rotoworld
    if (info.menuItemId == 2) {
		url = 'http://www.google.com.au/search?sourceid=chrome&ie=UTF-8&q=rotoworld+'+info.selectionText+'';
	} else if (info.menuItemId == 3) {
		// FF Today points allowed
		url = 'http://www.fftoday.com/stats/fantasystats.php?o=3&PosID=10&Side=Allowed&LeagueID=106834';
	} else if (info.menuItemId == 4) {
		url = 'http://games.espn.go.com/gridiron/en/entry?entryID=68832';
	} else if (info.menuItemId == 5) {
		url = 'http://www.fantasypros.com/nfl/start/';
	}
    
    chrome.tabs.create({ url: url});
    
}

// Get a selection context menu
var contextAll = 'all';

var title = "NFL";
var parent = chrome.contextMenus.create({"title": title, "contexts":[contextAll],
                                   });


var child1 = chrome.contextMenus.create(
  {"title": "Rotoworld", "parentId": parent, "onclick": genericOnClick, "contexts":["selection"]});

var child2 = chrome.contextMenus.create(
  {"title": "FF Today", "parentId": parent, "onclick": genericOnClick, "contexts":[contextAll]});

var child3 = chrome.contextMenus.create(
  {"title": "Gridiron Challenge", "parentId": parent, "onclick": genericOnClick, "contexts":[contextAll]});
var child4 = chrome.contextMenus.create(
  {"title": "Fantasy Pros", "parentId": parent, "onclick": genericOnClick, "contexts":[contextAll]});


