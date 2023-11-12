import { GameKey } from "@main/shared/config";

const defaults: Record<GameKey, string> = {
  BG3: `<?xml version="1.0" encoding="UTF-8" ?>
    <save>
      <version major="4" minor="3" revision="0" build="0" />
      <region id="ModuleSettings">
        <node id="root">
          <children>
            <node id="ModOrder">
              <children />
            </node>
            <node id="Mods">
              <children>
                <node id="ModuleShortDesc">
                  <attribute id="Folder" type="LSString" value="GustavDev" />
                  <attribute id="MD5" type="LSString" value="" />
                  <attribute id="Name" type="LSString" value="GustavDev" />
                  <attribute id="UUID" type="FixedString" value="28ac9ce2-2aba-8cda-b3b5-6e922f71b6b8" />
                  <attribute id="Version64" type="int64" value="36028797018963968" />
                </node>
              </children>
            </node>
          </children>
        </node>
      </region>
    </save>
  `,
};

export { defaults };
