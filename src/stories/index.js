import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// TODO Import your components here
import { Button, Welcome } from '@storybook/react/demo';

// TODO Add your own stories here
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

/*
    storiesOf('<name>', module)
    .add('case1', () => <Component1 someprops={somevalues} />)

    storiesOf('Button', module)
    .add('default', () => <Button />)
    .add('red color', () => <Button color="red" />)
*/