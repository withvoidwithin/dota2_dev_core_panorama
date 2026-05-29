# Dota 2 Developer Utilities (panorama)
My custom Panorama utility functions for Dota 2 custom game development.

## 1. Installation
To integrate this library into your Dota 2 custom game, add it as a Git submodule.

Run the following command from the root directory of your main repository:
```bash
# git submodule add <git_module> <your_preferred_folder_path>
# Note: The target folder must be located inside the "panorama" directory!

git submodule add https://github.com/withvoidwithin/dota2_dev_utils_vscripts dota_addon/content/panorama/layout/custom_game/core
```

Resulting Directory Structure:
```
repository_root/
└── dota_addon/
    └── content/
        └── panorama/
            └── layout/
                └── custom_game/
                    └── core/
                        └── utils.js
```

## 2. Usage in Code
Declare in custom_ui_manifest.xml:
```xml
<root>
	<scripts>
		<include src="file://{resources}/layout/custom_game/core/utils.js"/>
	</scripts>
</root>
```
Use as global functions:
```js
Label.text = GameUI._FormatTime(120)
```
