import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const ProspectListSkeleton = () => {
  return Array.from({ length: 5 }).map((item, idx: number) => (
    <TableRow key={idx}>
      <TableCell className="hidden sm:table-cell">
        <div className="size-10 rounded-full bg-slate-700 border"></div>
      </TableCell>
      <TableCell className="font-medium">
        <div className="h-3 rounded-sm w-32 bg-slate-700"></div>
      </TableCell>
      <TableCell>
        <Badge variant="outline" className="py-1">
          <div className="h-3 w-14 bg-slate-700"></div>
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <div className="h-3 w-[200px] rounded-sm bg-slate-700"></div>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <div className="h-3 w-20 rounded-sm bg-slate-700"></div>
      </TableCell>
    </TableRow>
  ));
};

export default ProspectListSkeleton;
