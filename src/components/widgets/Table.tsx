interface TableProps<T> {
  tableHeading: string[];
  tableContent: T[];
}

const Table = <T extends { [key: string]: any }>({
  tableHeading,
  tableContent,
}: TableProps<T>) => {
  console.log(tableContent);
  return (
    <table className="w-full mx-auto text-sm md:text-lg mt-4 mb-8 text-left border border-separate border-spacing-0 overflow-hidden rounded-xl border-border dark:border-border-dark">
      <thead>
        <tr>
          {tableHeading.map((item, index) => (
            <th
              className="bg-accent text-text-primary-dark py-2 px-4"
              key={index}
            >
              {item.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableContent.map((item, rowIndex) => (
          <tr
            key={rowIndex}
            className="mt-4 text-text-primary dark:text-text-primary-dark"
          >
            {Object.values(item).map((value, index) => (
              <td
                key={index}
                className={`py-4 px-4 ${rowIndex === tableContent.length - 1 ? "" : "border-b border-border dark:border-border-dark"}`}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
