"use client";

import { columns } from "@/app/columns";
import { DataTable } from "@/app/data-table";
import { Button } from "@/ui/button";
import xlsx from "json-as-xlsx";

export default function ResultFile({ data }: any) {
  const downloadFile = () => {
    let dataset = [
      {
        sheet: "Result",
        columns: [
          { label: "Ulasan", value: "Ulasan" },
          { label: "Cleaned Comment", value: "cleaned_comment" },
          { label: "Sentimen", value: "sentimen" },
          { label: "Aspek", value: "aspek" },
        ],
        content: data,
      },
    ];
    let settings = {
      fileName: "Result_Classification",
    };
    xlsx(dataset, settings);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-end w-full mb-4">
        <Button onClick={downloadFile}>Download</Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
