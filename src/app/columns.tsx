"use client";

import { Button } from "@/ui/button";
import { PredictResult } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<PredictResult>[] = [
  {
    accessorKey: "Ulasan",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ulasan
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: "cleaned_comment",
    header: "Cleaned Comment",
  },
  {
    accessorKey: "sentimen",
    header: "Sentiment",
  },
  {
    accessorKey: "aspek",
    header: "Aspect",
  },
];
