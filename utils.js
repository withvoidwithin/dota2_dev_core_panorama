//// ════════════════════════════════════════════════════════════════
////        Copyright © WITHVOIDWITHIN — All rights reserved.
////         https://steamcommunity.com/id/withvoidwithin/
////               https://withvoidwithin.github.io/
//// ════════════════════════════════════════════════════════════════

GameUI._InitPanel = function(context, panel){
    for(const child of panel.Children()){
        const callback_string = child.GetAttributeString("_init", "none")

        if(callback_string != "none" && callback_string != "__inited"){
            child.SetAttributeString("_init", "__inited")
            
            context.__init_panel = child

            const is_empty = /\(\s*\)$/.test(callback_string)
            const run_string = callback_string.replace(/\s*\)\s*$/, `${is_empty ? "" : ", "}$.GetContextPanel().__init_panel)`)

            context.RunScriptInPanelContext(run_string)
            delete context.__init_panel
        }

        GameUI._InitPanel(context, child)
    }
}

GameUI._InitPanelSnippet = function(panel){
    for(const child of panel.Children()){
        const snippet = child.GetAttributeString("_snippet", "none")

        if(snippet != "none" && snippet != "__loaded"){
            child.SetAttributeString("_snippet", "__loaded")
            child.RemoveAndDeleteChildren()
            child.BLoadLayoutSnippet(snippet)
        }

        GameUI._InitPanelSnippet(child)
    }
}