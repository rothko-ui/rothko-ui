import React, { useState } from 'react';

import { Dropdown } from '@rothko-ui/ui';

const DROPDOWN_OPTIONS = [
  {
    id: 0,
    label: 'Zero',
  },
  {
    id: 1,
    label: 'One',
  },
  {
    id: 2,
    label: 'Two',
  },
];

const App = () => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <Dropdown search value={selected} onChange={v => setSelected(v)} options={DROPDOWN_OPTIONS} />
  );
};

export default App;
