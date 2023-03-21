import React, { HTMLAttributes } from "react";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import cn from "classnames";
import { cva, VariantProps } from "class-variance-authority";
import Paragraph from "./Paragraph";

type TableProps = {
  columns: Object[];
  data: Object[];
};

function Table({ columns, data }: TableProps) {
  const {
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <div className="f">
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </div>
        <div className="f">
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) =>
              column.Filter ? (
                <div key={column.id} className="flex items-center gap-2">
                  <label htmlFor={column.id} className="block items-center">
                    <Paragraph
                      size="small"
                      className="items-center font-semibold"
                    >
                      {column.render("Header")}
                    </Paragraph>
                  </label>
                  {column.render("Filter")}
                </div>
              ) : null
            )
          )}
        </div>
      </div>
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="m-0 border-t border-slate-300 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination mt-2 flex justify-between">
        <div className="flex w-full">
          <button
            className="relative inline-flex items-center border border-blue-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            type="button"
          >
            <div className="flex">
              <ChevronLeftIcon className="h-5 w-5 text-blue-500" />
              <ChevronLeftIcon className="h-5 w-5 text-blue-500" />
            </div>
          </button>
          <button
            className="relative inline-flex items-center border border-blue-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <ChevronLeftIcon className="h-5 w-5 text-blue-500" />
          </button>
          <button
            className="relative inline-flex items-center border border-blue-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <ChevronRightIcon className="h-5 w-5 text-blue-500" />
          </button>
          <button
            className="relative inline-flex items-center border border-blue-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <div className="flex">
              <ChevronRightIcon className="h-5 w-5 text-blue-500" />
              <ChevronRightIcon className="h-5 w-5 text-blue-500" />
            </div>
          </button>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Paragraph size="small" className="block">
            Page {state.pageIndex + 1} of {pageOptions.length}
          </Paragraph>
          <select
            className="block rounded border-gray-300 py-2 px-4 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={state.pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Table;

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="flex w-full flex-col">
      <label className="hidden">
        <Paragraph size="small" className="mb-2 uppercase">
          Search
        </Paragraph>
      </label>
      <input
        className="border py-2 px-4 shadow-inner focus:border-sky-300"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search over ${count} records`}
      />
    </div>
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      className="block rounded border-gray-300 py-2 px-4 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      name={id}
      id={id}
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option: any, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
