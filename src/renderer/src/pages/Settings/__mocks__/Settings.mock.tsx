import { SettingsProps } from "../Settings.type";

const SettingsMock = (props: SettingsProps) => (
  <div data-testid="Settings">{JSON.stringify(props)}</div>
);

export { SettingsMock };
