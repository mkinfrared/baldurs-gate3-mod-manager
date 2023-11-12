import { RestoreDefaultSettingsProps } from "../RestoreDefaultSettings.type";

const RestoreDefaultSettingsMock = (props: RestoreDefaultSettingsProps) => (
  <div data-testid="RestoreDefaultSettings">{JSON.stringify(props)}</div>
);

export { RestoreDefaultSettingsMock };
