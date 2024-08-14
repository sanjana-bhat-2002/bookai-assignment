interface TableRow {
    api: string;
    price: string;
    model: string;
}
  
  interface TableProps {
    tableHeading: string[];
    tableContent: TableRow[];
  }

const Table = ({tableHeading, tableContent}: TableProps) => {
  return (
    <table className='w-full mx-auto text-sm md:text-lg mt-4 mb-8 text-left border border-separate border-spacing-0 overflow-hidden rounded-xl border-border-color'>
    <thead>
        <tr>
            {
                tableHeading.map((item, index) => (
                        <th className="bg-[#6366f1] py-2 px-4" key={index}>{item.toUpperCase()}</th>
            ))
        }
        </tr>
    </thead>
    <tbody>
    {tableContent.map((item, rowIndex) => (
          <tr key={rowIndex} className="mt-4 text-secondary">
            {Object.values(item).map((value, index) => (
              <td
                key={index}
                className={`py-4 px-4 ${rowIndex === tableContent.length - 1 ? '' : 'border-b border-border-color'}`}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
    </tbody>
    </table>
  )
}

export default Table