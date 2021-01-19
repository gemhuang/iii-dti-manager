import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import _ from 'lodash';

am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);

function getChartDivID(chartMeta) {
  return `chartDiv${chartMeta.CHART_INDEX}`;
}

function getDataLegends(chartData) {
  const legends = _.uniq(chartData.map(data => (data.LEGEND)))
  return legends;
}

function mergeByLegends(chartData, legends) {
  let mergedData = {};

  chartData.forEach(data => {
    const axis = data.AXIS;
    if (axis in mergedData) {
      mergedData[axis][data.LEGEND] = data.VALUE;
    } else {
      mergedData[axis] = {
        [data.LEGEND]: data.VALUE
      }
    }
  });

  return (
    _.toPairs(mergedData)
      .map(([axis, legendValues]) => {
        let row = {
          AXIS: axis,
        };

        _.toPairs(legendValues)
          .forEach(([legend, value]) => {
            row[legend] = value;
          });

        return row;
      })
  );
}

function chartBuilder(chart, chartDivID) {
  return (chartMeta, dataLegends, mergedData) => {
    let x = am4core.create(chartDivID, am4charts.XYChart);

    x.data = mergedData;

    let cateAxis = x.xAxes.push(new am4charts.CategoryAxis());
    cateAxis.dataFields.category = "AXIS";
    cateAxis.title.text = chartMeta.AXIS_NAME;

    let valAxis = x.yAxes.push(new am4charts.ValueAxis());
    valAxis.title.text = chartMeta.VALUE_NAME;


    dataLegends.forEach((legend) => {
      let series = x.series.push(new am4charts.LineSeries());
      series.dataFields.categoryX = "AXIS";
      series.dataFields.valueY = legend;
      series.dataFields.value = legend;
      series.name = legend;
      series.strokeWidth = 2;

      let bullet = series.bullets.push(new am4charts.CircleBullet());
      series.heatRules.push({
        target: bullet.circle,
        min: 3,
        max: 12,
        property: "radius"
      });

      bullet.tooltipText = "{valueX} x {valueY}: [bold]{value}[/]";
    });

    let chartLegend = new am4charts.Legend();
    x.legend = chartLegend;

    let chartCursor = new am4charts.XYCursor();
    x.cursor = chartCursor;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }
}

export const DynaChart = ({ chartMeta, chartData }) => {
  const chart = useRef(null);
  const chartDivID = getChartDivID(chartMeta);
  const dataLegends = getDataLegends(chartData);
  const mergedData = mergeByLegends(chartData, dataLegends);

  console.log(mergedData);

  useLayoutEffect(() => {
    chartBuilder(chart, chartDivID)
      .call(null, chartMeta, dataLegends, mergedData);
  }, []);

  return (
    <div id={chartDivID} style={{ width: "100%", height: "500px" }}></div>
  );
};

DynaChart.propTypes = {
  chartMeta: PropTypes.array.isRequired,
  chartData: PropTypes.array.isRequired,
};
