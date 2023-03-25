import BlockQuote from "@/components/ui/BlockQuote";
import { Button } from "@/components/ui/Button";
import Code from "@/components/ui/Code";
import List from "@/components/ui/List";
import Paragraph from "@/components/ui/Paragraph";
import Table, { SelectColumnFilter } from "@/components/ui/Table";
import { Heading } from "@ui/Heading";
import { type NextPage } from "next";
import { useMemo } from "react";

const getData = () => [
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    status: "Active",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    title: "Product Directives Officer",
    department: "Intranet",
    status: "Active",
    role: "Owner",
    imgUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Forward Response Developer",
    department: "Directives",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    title: "Central Security Manager",
    department: "Program",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    title: "Lean Implementation Liaison",
    department: "Mobility",
    status: "Active",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const Home: NextPage = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Role",
        accessor: "role",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
    ],
    []
  );

  const data = useMemo(() => getData(), []);

  return (
    <div className="container mx-auto my-5">
      <Paragraph size="small" className="mb-2 uppercase">
        Typography
      </Paragraph>
      <Heading variant="h1">People stopped telling jokes</Heading>
      <Heading variant="h2">People stopped telling jokes</Heading>
      <Heading variant="h3">People stopped telling jokes</Heading>
      <Heading variant="h4">People stopped telling jokes</Heading>

      <Paragraph size="default">
        A modal dialog that interrupts the user with important content and
        expects a response.
      </Paragraph>
      <Paragraph size="lead">
        A modal dialog that interrupts the user with important content and
        expects a response.
      </Paragraph>
      <Paragraph size="large">
        A modal dialog that interrupts the user with important content and
        expects a response.
      </Paragraph>
      <Paragraph size="small">
        A modal dialog that interrupts the user with important content and
        expects a response.
      </Paragraph>
      <Paragraph size="subtle">
        A modal dialog that interrupts the user with important content and
        expects a response.
      </Paragraph>

      <BlockQuote className="font-semibold">
        "After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege."
      </BlockQuote>
      <div className="m-5">
      <Button intent="secondary" size="large" roundness="round">Hello word!</Button>
      <Button intent="default" size="large" roundness="round">Hello word!</Button>
      <Button intent="primary" size="large" roundness="round">Hello word!</Button>
      </div>
      <List type="ul">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </List>
      <Code className="mb-2">@radix-ui/react-alert-dialog</Code>

      <Table columns={columns} data={data} />


    </div>
  );
};

export default Home;
