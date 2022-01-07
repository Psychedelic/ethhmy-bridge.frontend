import * as React from 'react';
import { Box } from 'grommet';
import cn from 'classnames';
import { Text } from 'components/Base/components/Text';
import * as styles from './styles.styl';
import { TOKEN } from 'stores/interfaces';

const icons: Record<TOKEN, string> = {
  [TOKEN.ERC20]: '/eth.svg',
  [TOKEN.ETH]: '/eth.svg',
  [TOKEN.ERC721]: '/eth.svg',
  [TOKEN.DIP721]: '/dfinity.svg',
  [TOKEN.ERC1155]: '/eth.svg',
  [TOKEN.DIP1155]: '/dfinity.svg',
  [TOKEN.DIP20]: '/dfinity.svg',
  [TOKEN.ICP]: '/dfinity.svg',
};

export const ItemToken = ({ selected, onClick, tokenType }) => {
  const icon = icons[tokenType];

  return (
    <Box direction="row">
      <Box
        className={cn(styles.itemToken, selected ? styles.selected : '')}
        onClick={() => onClick(tokenType)}
      >
        <img className={styles.imgToken} src={icon} />
        <Text>{tokenType.toUpperCase()}</Text>
      </Box>
    </Box>
  );
};
