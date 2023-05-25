import React from 'react';
import NestedDropdownCard from '../../components/Cards/nestedDropdown';
import WithNavigation from '../../components/WithNavigation';

const NestedDropdown = () => {
  return (
    <WithNavigation selected="components/nestedDropdown">
      <NestedDropdownCard />
    </WithNavigation>
  );
};

export default NestedDropdown;
