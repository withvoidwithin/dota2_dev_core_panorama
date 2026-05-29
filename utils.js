//// ════════════════════════════════════════════════════════════════
////        Copyright © WITHVOIDWITHIN — All rights reserved.
////         https://steamcommunity.com/id/withvoidwithin/
////               https://withvoidwithin.github.io/
//// ════════════════════════════════════════════════════════════════

GameUI._InitContextSnippets = function(context){
    for(const panel of context.Children()){
        const snippet = panel.GetAttributeString("snippet", "none")

        if(snippet != "none" && snippet != "__loaded"){
            panel.SetAttributeString("snippet", "__loaded")
            panel.RemoveAndDeleteChildren()
            panel.BLoadLayoutSnippet(snippet)
        }

        GameUI._InitContextSnippets(panel)
    }
}
