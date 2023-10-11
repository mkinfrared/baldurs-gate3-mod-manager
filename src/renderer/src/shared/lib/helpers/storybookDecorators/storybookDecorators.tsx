/* eslint-disable import/no-unused-modules */
import { MemoryRouter as Router } from "react-router-dom";

type StoryFunc<T extends JSX.Element> = () => T;

const withRouter = <T extends JSX.Element>(Story: StoryFunc<T>) => (
  <Router>
    <Story />
  </Router>
);

export { withRouter };
