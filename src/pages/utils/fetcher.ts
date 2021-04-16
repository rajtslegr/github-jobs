/* eslint-disable @typescript-eslint/no-explicit-any */
export default async <JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> => {
  const res = await fetch(input, init);
  return res.json();
};
