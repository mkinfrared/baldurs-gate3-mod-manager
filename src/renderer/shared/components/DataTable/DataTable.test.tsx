import { render } from "@testing-library/react";

import DataTable from "./DataTable";

describe("<DataTable />", () => {
  const data: any[] = [];
  const columns: any[] = [];
  const Component = <DataTable data={data} columns={columns} />;

  it("should be defined", () => {
    expect(DataTable).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
