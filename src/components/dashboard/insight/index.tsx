import { Wrapper } from '~/components/reusable/Container';
import ListingData from '../reusables/ListingData';
import { buildingsIcon } from '~/assets/icons';
import styles from './insights.module.css';
import ItemInfo from '~/components/propertyItem/itemInfo/ItemInfo';
import Listings from './listingswrap';
import { agentData } from './listingswrap/data';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export type ChartType = {
  series: { name: string; data: number[] }[] | number[];
  chartOptions?: {
    labels: string[];
  };
  options: ApexOptions;
};

export default function Insight() {
  const [lineChartData, _] = useState<ChartType>({
    series: [
      {
        name: 'visits',
        data: agentData.map((data) => data.visits),
      },
      {
        name: 'uniqueVisits',
        data: agentData.map((data) => data.uniqueVisits),
      },
    ],
    options: {
      chart: {
        id: 'lineChart',
        height: 'auto',
      },
      colors: ['#5CB1FF', '#437ef7'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.8,
          opacityTo: 0.6,
          stops: [0, 90, 100],
        },
      },
      xaxis: {
        categories: agentData.map((data) => data.month),
      },
      legend: {
        position: 'top',
        show: true,
        horizontalAlign: 'left',
      },
    },
  });

  const [donutChart, __] = useState<ChartType>({
    series: [34, 55],
    options: {
      chart: {
        id: 'donutChart',
        type: 'donut',
      },

      colors: ['#5CB1FF', '#437ef7'],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '80%',
          },
        },
      },
      labels: ['Views', 'Enquiry'],
      legend: {
        width: 150,
        position: 'top',
        show: true,
        horizontalAlign: 'left',
        customLegendItems: ['Views', 'Enquiry'],
        formatter: function (seriesName, opts) {
          return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`;
        },
      },
      states: {
        hover: {
          filter: {
            type: 'none',
          },
        },
      },
    },
  });

  return (
    <Wrapper element="section" className={'flex flex-col gap-2'}>
      <div className={`grid gap f-width ${styles.dataWrap}`}>
        <ListingData
          className={`pad-1 f-width b-radius ${styles.data}`}
          href={buildingsIcon}
          data={'0'}
          title={'Total Listing'}
        />
        <ListingData
          className={`pad-1 f-width b-radius ${styles.data}`}
          href={buildingsIcon}
          data={'0'}
          title={'For Rent'}
        />
        <ListingData
          className={`pad-1 f-width b-radius ${styles.data}`}
          href={buildingsIcon}
          data={'0'}
          title={'For Sale'}
        />
        <ListingData
          className={`pad-1 f-width b-radius ${styles.data}`}
          href={buildingsIcon}
          data={'0'}
          title={'Expired'}
        />
      </div>
      <ItemInfo
        h1={'Total Insights'}
        className={styles.insightWrap}
        children={
          <div className={`flex gap pad w-full flex-col lg:flex-row`}>
            <div className={`relative text-center w-full ${styles.donut}`}>
              <div
                style={{
                  width: '100%',
                  minWidth: '300px',
                }}
              >
                <Chart
                  options={donutChart.options}
                  series={donutChart.series}
                  type="donut"
                  height={320}
                />
              </div>
              <div className={`flex f-column ${styles.kbtTotal}`}>
                <b>88%</b>
                <small>Conversion Rate</small>
              </div>
            </div>
            <div className={'hidden lg:block'} style={{ width: '100%' }}>
              <Chart
                options={lineChartData.options}
                series={lineChartData.series}
                type="area"
                height={320}
              />
            </div>
          </div>
        }
      />
      <Listings />
    </Wrapper>
  );
}
