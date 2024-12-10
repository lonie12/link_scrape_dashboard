"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomTableRow } from "@/components/app/table/table-row";
import { listProspects } from "@/data/prospects";
import { useQuery } from "@tanstack/react-query";
import UserAvatar from "@/components/app/avatar";
import { useState } from "react";
import ProspectListSkeleton from "@/components/app/skeleton/prospects-list-skeleton";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function CustomerPage() {
  const [queryPage, setQueryPage] = useState(1);

  const {
    data: listQuery,
    isLoading,
    isSuccess,
    isError,
    isRefetching,
    refetch: getPaginate,
  } = useQuery({
    queryFn: async () => await listProspects({ page: queryPage }),
    queryKey: [`prospects-${queryPage}`],
  });

  //  handle next and prev
  const handleNext = () => {
    if (queryPage < listQuery?.data?.totalPages) {
      // scroll to the header of table
      const tableHeaderScrollTo = document.querySelector("thead");
      tableHeaderScrollTo!.scrollIntoView();

      // move page to next
      setQueryPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (queryPage > 1) {
      // scroll to the header of table
      const tableHeaderScrollTo = document.querySelector("thead");
      tableHeaderScrollTo!.scrollIntoView();

      // move page to next
      setQueryPage((prev) => prev - 1);
    }
  };

  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader className="border flex ">
        <div className="w-full flex items-center justify-center">
          <CardTitle>Customers</CardTitle>

          <div className="relative ml-auto md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="rounded-sm w-full bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
        </div>
        <CardDescription>
          Manage your customers and view their order details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="hidden sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Job Title</TableHead>
              <TableHead className="hidden md:table-cell">Saved at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody
            className={`${isLoading || isRefetching ? "animate-pulse" : ""}`}
          >
            {isLoading || isRefetching ? (
              <ProspectListSkeleton />
            ) : isSuccess && listQuery?.data?.prospects ? (
              listQuery?.data?.prospects?.map((item: Prospect, idx: number) => (
                <CustomTableRow prospect={item} key={idx}>
                  <TableCell className="hidden sm:table-cell">
                    <UserAvatar />
                  </TableCell>
                  <TableCell className="font-medium">{item?.p_uname}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item?.p_email}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell max-w-[320px] truncate">
                    {item?.p_title?.trim()}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item?.createdAt ?? "Not defined"}
                  </TableCell>
                </CustomTableRow>
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
        {isSuccess &&
          !isRefetching &&
          listQuery?.data?.prospects?.length <= 0 && (
            <div className="mx-auto py-8 flex items-center justify-center gap-3">
              You have no scraped data
              <button
                className="border px-4 py-2 rounded-md"
                onClick={() => getPaginate()}
              >
                Try again
              </button>
            </div>
          )}
        {isError && (
          <div className="mx-auto py-8 flex items-center justify-center gap-3">
            Ouppss !!! There is an error.
            <button
              className="border px-4 py-2 rounded-md"
              onClick={() => getPaginate()}
            >
              Try again
            </button>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {isSuccess && listQuery?.data?.prospects.length > 0 && (
          <div className="w-full flex flex-row items-center justify-between">
            <button
              disabled={queryPage == 1}
              className="border-3 border-[#8b8b8b35] text-dash capitalize border px-4 py-1 rounded-md bg-blue-600 disabled:bg-gray-400 disabled:text-slate-900 text-white"
              onClick={handlePrev}
            >
              Previous
            </button>

            <p>
              Page {queryPage} of {listQuery?.data?.totalPages}
            </p>

            <button
              disabled={queryPage == listQuery?.data?.totalPages}
              className="border-3 border-[#8b8b8b35] text-dash capitalize border px-4 py-1 rounded-md bg-blue-600 disabled:bg-gray-400 disabled:text-slate-900 text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
