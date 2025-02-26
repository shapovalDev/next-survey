import React from 'react';

interface Column {
  key: string;
  title: string;
}

interface IProps {
  columns: Column[];
  data: Record<string, string>[];
}

const Table = ({ columns, data }: IProps) => {
  return (
    <div className="w-full h-full">
      <table className="w-full border border-secondaryGrey shadow-md">
        <thead className="bg-purple text-white">
          <tr>
            {columns.map(({ key, title }) => (
              <th
                key={key}
                className="px-4 py-2 text-left font-semibold border-b text-sm sm:text-xl"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="odd:bg-secondaryGrey even:bg-white text-sm sm:text-xl"
            >
              {columns.map(({ key }) => (
                <td key={key} className="px-4 py-2 border-b">
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
