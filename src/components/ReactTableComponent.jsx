import * as React from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/material-ui';
import { Paper } from '@mui/material';

const key = 'Virtualized';

const ReactTableComponent = () => {
  // Data dengan 20 entri
  const data = { nodes: Array.from({ length: 20 }, (_, index) => ({
    name: `Task ${index + 1}`,
    deadline: new Date(2024, 0, index + 1), // Tanggal deadline berturut-turut
    type: index % 2 === 0 ? 'Type A' : 'Type B',
    isComplete: index % 2 === 0, // Setengahnya complete
    nodes: [] // Kosongkan nodes
  })) };

  // Setup theme
  const materialTheme = getTheme(DEFAULT_OPTIONS, { isVirtualized: true });
  const theme = useTheme(materialTheme);

  // Kolom tabel
  const COLUMNS = [
    { label: 'Task', renderCell: (item) => item.name },
    {
      label: 'Deadline',
      renderCell: (item) =>
        item.deadline.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { label: 'Type', renderCell: (item) => item.type },
    {
      label: 'Complete',
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: 'Tasks', renderCell: (item) => item.nodes?.length },
  ];

  // Opsi virtualisasi
  const VIRTUALIZED_OPTIONS = {
    rowHeight: (_item, _index) => 54,
  };

  return (
    <div className="p-4">
      <Paper variant="outlined" square className="h-[300px] overflow-auto">
        <CompactTable
          columns={COLUMNS}
          virtualizedOptions={VIRTUALIZED_OPTIONS}
          data={data}
          theme={theme}
          layout={{ isDiv: true, fixedHeader: true }}
        />
      </Paper>
    </div>
  );
};

export default ReactTableComponent;
