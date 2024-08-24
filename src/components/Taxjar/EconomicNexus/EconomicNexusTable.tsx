import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';
import React from 'react';

const NexusAnalysis = () => {
  const data = [
    {
      state: 'AL',
      sales: 23474.45,
      orders: 104,
      salesThreshold: 250000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'AK',
      sales: 0,
      orders: 0,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'AZ',
      sales: 35361.5,
      orders: 167,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'AR',
      sales: 8038.2,
      orders: 36,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'CA',
      sales: 226746.21,
      orders: 1084,
      salesThreshold: 500000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'CO',
      sales: 30547.65,
      orders: 144,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'CT',
      sales: 11722.15,
      orders: 56,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'DE',
      sales: 5398.7,
      orders: 26,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'FL',
      sales: 139990.5,
      orders: 673,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: true,
    },
    {
      state: 'GA',
      sales: 45019.05,
      orders: 215,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'HI',
      sales: 359.9,
      orders: 2,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'ID',
      sales: 9257.85,
      orders: 43,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'IL',
      sales: 31302.4,
      orders: 150,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'IN',
      sales: 22934.5,
      orders: 109,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'IA',
      sales: 7238.2,
      orders: 36,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'KS',
      sales: 11602.35,
      orders: 51,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'KY',
      sales: 15851.3,
      orders: 74,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'LA',
      sales: 17201.0,
      orders: 79,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'ME',
      sales: 8443.05,
      orders: 36,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'MD',
      sales: 30882.4,
      orders: 146,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'MA',
      sales: 27088.3,
      orders: 132,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'MI',
      sales: 28318.0,
      orders: 138,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'MN',
      sales: 15801.25,
      orders: 69,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'MS',
      sales: 11747.3,
      orders: 54,
      salesThreshold: 250000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'MO',
      sales: 18945.6,
      orders: 87,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'MT',
      sales: 5968.65,
      orders: 27,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'NE',
      sales: 4683.95,
      orders: 21,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'NV',
      sales: 16146.1,
      orders: 73,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'NH',
      sales: 10732.5,
      orders: 48,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'NJ',
      sales: 34136.3,
      orders: 168,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'NM',
      sales: 9902.6,
      orders: 47,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'NY',
      sales: 68618.05,
      orders: 331,
      salesThreshold: 500000,
      orderThreshold: 100,
      nexus: false,
    },
    {
      state: 'NC',
      sales: 60720.25,
      orders: 287,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'ND',
      sales: 3489.15,
      orders: 17,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'OH',
      sales: 37156.15,
      orders: 176,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'OK',
      sales: 11702.25,
      orders: 53,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'OR',
      sales: 17640.75,
      orders: 81,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'PA',
      sales: 41679.75,
      orders: 200,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'RI',
      sales: 2789.3,
      orders: 14,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'SC',
      sales: 28253.0,
      orders: 138,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'SD',
      sales: 4853.8,
      orders: 23,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'TN',
      sales: 30507.6,
      orders: 144,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'TX',
      sales: 110693.55,
      orders: 518,
      salesThreshold: 500000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'UT',
      sales: 14116.6,
      orders: 65,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'VT',
      sales: 2599.4,
      orders: 12,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'VA',
      sales: 45369.2,
      orders: 213,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'WA',
      sales: 35371.55,
      orders: 163,
      salesThreshold: 100000,
      orderThreshold: null,
      nexus: false,
    },
    {
      state: 'WV',
      sales: 5133.85,
      orders: 23,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'WI',
      sales: 17095.75,
      orders: 82,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
    {
      state: 'WY',
      sales: 3264.25,
      orders: 14,
      salesThreshold: 100000,
      orderThreshold: 200,
      nexus: false,
    },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>State</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead>Sales Threshold</TableHead>
          <TableHead>Order Threshold</TableHead>
          <TableHead>Nexus</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.state}
            className={row.nexus ? 'bg-yellow-100' : ''}
          >
            <TableCell>{row.state}</TableCell>
            <TableCell>${row.sales.toLocaleString()}</TableCell>
            <TableCell>{row.orders}</TableCell>
            <TableCell>${row.salesThreshold.toLocaleString()}</TableCell>
            <TableCell>{row.orderThreshold || 'N/A'}</TableCell>
            <TableCell>{row.nexus ? 'Yes' : 'No'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default NexusAnalysis;
