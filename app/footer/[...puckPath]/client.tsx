"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "@config/page.config";
import { saveFooter } from "@lib/database";

export function Client({ path, data }: { data: Partial<Data>, path: string }) {
  return (
    <Puck
      config={config}
      data={data}
      onPublish={async (data) => {
        await saveFooter(data, path);
      }}
    />
  );
}
