import { Link } from 'react-router-dom';
import styles from './wallet.module.css';
import { exLinkIcon } from '~/assets/icons';
import ItemInfo from '~/components/propertyItem/itemInfo/ItemInfo';
import Svg from '~/components/reusable/Svg';
import { useState } from 'react';
import { ChartType } from '../../insight';
import Chart from 'react-apexcharts';

export default function Wallet() {
  const [donutChart, _] = useState<ChartType>({
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
            size: '75%',
          },
        },
      },
      labels: ['Views', 'Enquiry'],
      legend: {
        width: 150,
        position: 'bottom',
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
    <ItemInfo
      h1={'Your Wallet'}
      className={`box_shadow ${styles.wallet}`}
      children={
        <div className={`flex f-width f-column align-y ${styles.walletWrap}`}>
          <div className={styles.svgWrapper}>
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
              />
            </div>
            <div className={styles.kbtTotal}>
              <span>Total</span>
              <p>KBT 0</p>
            </div>
          </div>
        </div>
      }
      visit={
        <div className="flex pad-1 s-btw">
          <h5>Total Balances</h5>
          <Link className="flex bg-primary gap" to={'/dashboard/wallet'}>
            Open <Svg href={exLinkIcon} />
          </Link>
        </div>
      }
    />
  );
}
