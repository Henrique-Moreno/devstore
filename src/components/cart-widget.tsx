"use client";

import { useCart } from "@/app/context/cart-context";
import { ShoppingBag } from "lucide-react";
import React from "react";

export default function CartWidget() {
  const { items } = useCart();
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />

      <span className="text-sm">Cart ({items.length})</span>
    </div>
  );
}