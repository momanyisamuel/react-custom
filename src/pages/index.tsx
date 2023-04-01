import BlockQuote from "@/components/ui/BlockQuote";
import { Button } from "@/components/ui/Button";
import Code from "@/components/ui/Code";
import Dialog from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import List from "@/components/ui/List";
import Paragraph from "@/components/ui/Paragraph";
import Table, { SelectColumnFilter } from "@/components/ui/Table";
import { useToast } from "@/hooks/ui/use-toast";
import { Heading } from "@ui/Heading";
import { type NextPage } from "next";
import { useMemo, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/Avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/Select";
import DonutStat from "@/components/ui/DonutStat";



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
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const { toast } = useToast();
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

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

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

      <List type="ul">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </List>
      <Code className="mb-2">@radix-ui/react-alert-dialog</Code>

      <Paragraph size="small" className="mb-2 uppercase">
        Table
      </Paragraph>
      <Table columns={columns} data={data} />

      <Paragraph size="small" className="mb-2 uppercase">
        Buttons
      </Paragraph>
      <div className="m-5 flex gap-2">
        <Button intent="secondary" size="large" roundness="round">
          Hello word!
        </Button>
        <Button intent="default" size="large" roundness="round">
          Hello word!
        </Button>
        <Button intent="primary" size="large" roundness="round">
          Hello word!
        </Button>
      </div>

      <Paragraph size="small" className="mb-2 uppercase">
        Dialog
      </Paragraph>
      <div className="fl">
        <Button onClick={handleDialogOpen}>Open Dialog</Button>
        <Dialog isOpen={isDialogOpen} onClose={handleDialogClose}>
          <Paragraph className="font-semibold">
            Data integration is the seminal problem of the digital age. For over
            ten years, we’ve helped the world’s premier organizations rise to
            the challenge.
          </Paragraph>
          <Paragraph>
            Palantir Foundry radically reimagines the way enterprises interact
            with data by amplifying and extending the power of data integration.
            With Foundry, anyone can source, fuse, and transform data into any
            shape they desire. Business analysts become data engineers — and
            leaders in their organization’s data revolution.
          </Paragraph>
          <Paragraph>
            Foundry’s back end includes a suite of best-in-class data
            integration capabilities: data provenance, git-style versioning
            semantics, granular access controls, branching, transformation
            authoring, and more. But these powers are not limited to the
            back-end IT shop.
          </Paragraph>
          <Paragraph>
            In Foundry, tables, applications, reports, presentations, and
            spreadsheets operate as data integrations in their own right. Access
            controls, transformation logic, and data quality flow from original
            data source to intermediate analysis to presentation in real time.
            Every end product created in Foundry becomes a new data source that
            other users can build upon. And the enterprise data foundation goes
            where the business drives it.
          </Paragraph>
          <Paragraph>
            Start the revolution. Unleash the power of data integration with
            Palantir Foundry.
          </Paragraph>
        </Dialog>
      </div>
      <div className="mt-2">
        <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Show Toast
        </Button>
      </div>
      <div className="mx-auto mt-2 w-1/4">
        <Input></Input>
      </div>
      <div className="mx-auto mt-2 flex w-1/2 gap-1">
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1542513217-0b0eedf7005d?&w=128&h=128&dpr=2&q=80" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="mx-auto mt-2 w-1/4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mx">
        <DonutStat value={50} label="hello"/>
      </div>
    </div>
  );
};

export default Home;
