import { SettingsFormProps } from "../SettingsForm.type";

const SettingsFormMock = (props: SettingsFormProps) => (
  <div data-testid="SettingsForm">{JSON.stringify(props)}</div>
);

export { SettingsFormMock };
