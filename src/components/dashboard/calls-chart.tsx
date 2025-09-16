"use client"

import { Line, LineChart, CartesianGrid, XAxis, Tooltip } from 'recharts'
import {
  ChartContainer,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { chartData } from '@/lib/data';

const chartConfig = {
  Incoming: {
    label: "Incoming",
    color: "hsl(var(--chart-1))",
  },
  Outgoing: {
    label: "Outgoing",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function CallsChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Line
          dataKey="Incoming"
          type="monotone"
          stroke="var(--color-Incoming)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="Outgoing"
          type="monotone"
          stroke="var(--color-Outgoing)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  )
}
