import { SaveSettingsButtonProps } from "../SaveSettingsButton.type";

const SaveSettingsButtonMock = (props: SaveSettingsButtonProps) => (
  <div data-testid="SaveSettingsButton">{JSON.stringify(props)}</div>
);

export { SaveSettingsButtonMock };
