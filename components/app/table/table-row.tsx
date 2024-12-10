import { TableCell, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PenBox, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";
import { MessageText } from "iconsax-react";
import { validateEmail } from "@/lib/utils";

export const CustomTableRow = ({
  children,
  prospect,
}: PropsWithChildren & { prospect?: Prospect }) => {
  return (
    <TableRow>
      {children}
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {prospect && validateEmail(prospect.p_email) && (
              <DropdownMenuItem>
                <a
                  className="flex items-center gap-2"
                  href={`mailto:${prospect.p_email}`}
                >
                  <MessageText /> Send Email
                </a>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem>
              <PenBox /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};
