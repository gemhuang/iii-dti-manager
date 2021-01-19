import React from 'react';
import { DynaChart } from '.';
import { CHART_META, ALL_DATA, } from './data';

const Template = (args) => <DynaChart {...args} />;

export default {
  title: 'DynaChart',
  component: DynaChart,
};

export const Default = Template.bind({});
Default.args = {
  chartMeta: CHART_META[0],
  chartData: ALL_DATA,
};
