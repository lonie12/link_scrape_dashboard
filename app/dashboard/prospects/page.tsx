"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { userProfile } from "@/helpers/constants";
import { CustomTableRow } from "@/components/app/table/table-row";
import { listProspects } from "@/data/prospects";
import { useQuery } from "@tanstack/react-query";

export default function CustomerPage() {
  const {
    data: listQuery,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async () => await listProspects(),
    queryKey: ["movies"], //Array according to Documentation
  });

  if (isLoading) return <span>Loading ...</span>;
  if (isError) return <div>Sorry There was an Error </div>;

  console.log(listQuery);

  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Customers</CardTitle>
        <CardDescription>
          Manage your customers and view their order details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Job Title</TableHead>
              {/* <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">
                Total Sales
              </TableHead> */}
              <TableHead className="hidden md:table-cell">Saved at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listQuery &&
              listQuery?.data &&
              listQuery?.data?.map((item: Prospect, idx: number) => (
                <CustomTableRow key={idx}>
                  <TableCell className="hidden sm:table-cell">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                      <AvatarImage src={userProfile} alt="Avatar" />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium">{item?.p_uname}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item?.p_email}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item?.p_title}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item?.createdAt ?? "Not defined"}
                  </TableCell>
                </CustomTableRow>
              ))}
            {/* <CustomTableRow>
              <TableCell className="hidden sm:table-cell">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src={userProfile} alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">
                Hypernova Headphones
              </TableCell>
              <TableCell>
                <Badge variant="outline">Active</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$129.99</TableCell>
              <TableCell className="hidden md:table-cell">
                2023-10-18 03:21 PM
              </TableCell>
            </CustomTableRow>
            <CustomTableRow>
              <TableCell className="hidden sm:table-cell">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src={userProfile} alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">
                TechTonic Energy Drink
              </TableCell>
              <TableCell>
                <Badge variant="secondary">Draft</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$2.99</TableCell>
              <TableCell className="hidden md:table-cell">
                2023-12-25 11:59 PM
              </TableCell>
            </CustomTableRow> */}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  );
}
