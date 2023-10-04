import { useState } from "react";

import { createTrpcClient } from "../../helpers";

const useTrpcClient = () => {
  const [client] = useState(() => createTrpcClient());

  return client;
};

export { useTrpcClient };
