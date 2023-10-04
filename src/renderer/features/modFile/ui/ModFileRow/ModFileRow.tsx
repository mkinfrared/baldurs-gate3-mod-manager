import { useEffect, useState } from "react";

import { ModInfo, useModFileReader } from "renderer/entities/modFile";
import { classNames } from "renderer/shared/lib/helpers";

import css from "./ModFileRow.module.scss";
import { ModFileRowProps } from "./ModFileRow.type";

const ModFileRow = ({ className, file }: ModFileRowProps) => {
  const [modInfo, setModInfo] = useState<ModInfo>();
  const manager = useModFileReader();

  const getFileInfo = async () => {
    const info = await manager.worker.readZipFile(file);

    setModInfo(info);
  };

  useEffect(() => {
    getFileInfo();
  }, []);

  const modName = modInfo?.name === "N/A" ? file.name : modInfo?.name;

  return (
    <div
      className={classNames(css.ModFileRow, className)}
      data-testid="ModFileRow"
    >
      <p>
        {modName || file.name} {modInfo?.version}
      </p>
    </div>
  );
};

export { ModFileRow };
