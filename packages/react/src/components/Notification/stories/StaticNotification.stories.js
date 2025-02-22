/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StaticNotification } from '../../Notification';
import { Link } from '../../Link';
import mdx from '../Notification.mdx';

// eslint-disable-next-line storybook/csf-component
export default {
  title: 'Experimental/unstable__StaticNotification',
  component: StaticNotification,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args: {
    kind: 'error',
    lowContrast: false,
    statusIconDescription: 'notification',
  },
};

export const Default = () => (
  <StaticNotification
    title="Notification title"
    subtitle="Subtitle text goes here"
  />
);

export const WithInteractiveElements = () => (
  <StaticNotification
    title="Notification title"
    titleId="my fancy id 123"
    kind="info"
    lowContrast>
    <div className="cds--inline-notification__subtitle">
      Additional text can describe the notification, or a link to{' '}
      <Link inline href="#" aria-describedby="my fancy id 123">
        learn more
      </Link>
    </div>
  </StaticNotification>
);

export const Playground = (args) => <StaticNotification {...args} />;

Playground.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  className: {
    table: {
      disable: true,
    },
  },
};
Playground.args = {
  title: 'Notification title',
  subtitle: 'Subtitle text goes here',
};
