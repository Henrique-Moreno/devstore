"use client";

import Skeloton from "@/components/skeloton";
import { CurrentSearch } from "./current-search";
import { Suspense } from "react";

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeloton className="h-[380px]" />
        <Skeloton className="h-[380px]" />
        <Skeloton className="h-[380px]" />
        <Skeloton className="h-[380px]" />
        <Skeloton className="h-[380px]" />
        <Skeloton className="h-[380px]" />
      </div>
    </div>
  );
}
