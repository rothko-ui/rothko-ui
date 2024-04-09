import { Container, Flex, Typography } from '@rothko-ui/ui';

import { BASIC, CLEARABLE, DISABLED, MENU_POSITION } from './usage/sourceCode';
import { TSCode } from '../../Code';
import { useIsMobileOrTablet } from '../../../hooks/useIsMobileOrTablet';
import Basic from './usage/Basic';
import Card from '../Card';
import Clearable from './usage/Clearable';
import Disabled from './usage/Disabled';
import Example from '../Example';
import MenuPosition from './usage/MenuPosition';
import nestedDropdownCopy from './copy';
import nestedDropdownProps from './props';
import Props from '../Props';

const GITHUB_URL =
  'https://github.com/luxo-ai/rothko-ui/tree/main/packages/ui/src/Components/Dropdown';

const IMPORT = "import { NestedDropdown } from '@rothko-ui/ui';";

const NestedDropdownCard = () => {
  const isMobileOrTablet = useIsMobileOrTablet();
  const maxWidth = isMobileOrTablet ? undefined : '26rem';

  return (
    <Card codeUrl={GITHUB_URL} copy={nestedDropdownCopy}>
      <Flex as="section" flexDirection="column" rowGap="1.5rem">
        <Typography.h3>Usage</Typography.h3>
        <Container maxWidth="32rem">
          <TSCode code={IMPORT} />
        </Container>
        <Example sourceCode={BASIC}>
          <Container maxWidth={maxWidth}>
            <Basic />
          </Container>
        </Example>
        <Example title="Disabled" sourceCode={DISABLED}>
          <Container maxWidth={maxWidth}>
            <Disabled />
          </Container>
        </Example>
        <Example title="Clearable" sourceCode={CLEARABLE}>
          <Container maxWidth={maxWidth}>
            <Clearable />
          </Container>
        </Example>
        <Example title="Menu Position" sourceCode={MENU_POSITION}>
          <Container maxWidth={maxWidth}>
            <MenuPosition />
          </Container>
        </Example>
      </Flex>
      <Props copy={{ props: nestedDropdownProps }} />
    </Card>
  );
};

export default NestedDropdownCard;
