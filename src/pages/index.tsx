import BlockQuote from "@/components/ui/BlockQuote";
import Paragraph from "@/components/ui/Paragraph";
import{ Heading } from "@ui/Heading";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto my-5">
      <h1 className="mb-3 text-xl font-semibold antialiased">Typography</h1>
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

      <BlockQuote>
      "After all," he said, "everyone enjoys a good joke, so it's
        only fair that they should pay for the privilege."
      </BlockQuote>
      
      
      <div>
        <p>TABLE</p>
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t border-slate-300 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
              <th className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                King's Treasury
              </th>
              <th className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                People's happiness
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
              <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                Empty
              </td>
              <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                Overflowing
              </td>
            </tr>
            <tr className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
              <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                Modest
              </td>
              <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                Satisfied
              </td>
            </tr>
            <tr className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-600 dark:even:bg-slate-800">
              <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                Full
              </td>
              <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
                Ecstatic
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>list</p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
      <p>code</p>
      <code className="relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400">
        @radix-ui/react-alert-dialog
      </code>
      
    </div>
  );
};

export default Home;
