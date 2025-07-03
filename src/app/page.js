import { caller } from "@/trpc/server";

const page = async () => {
  const data = await caller.createAI({ text: "hello" });

  return <div>{JSON.stringify(data)}</div>;
};

export default page;
