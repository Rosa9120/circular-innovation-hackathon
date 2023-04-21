import mongoose from 'mongoose'
import currency from 'currency.js'

const Schema = mongoose.Schema

const DaySchema = new Schema(
  {
    date: String,
    revenue: {
      type: String,
      get: (value) => currency(value, { precision: 2 }).format(),
    },
    expenses: {
      type: String,
      get: (value) => currency(value, { precision: 2 }).format(),
    },
  },
  {
    toJSON: { getters: true },
  }
)

const MonthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: String,
      get: (value) => currency(value, { precision: 2 }).format(),
    },
    expenses: {
      type: String,
      get: (value) => currency(value, { precision: 2 }).format(),
    },
    operationalExpenses: {
      type: String,
      get: (value) => currency(value, { precision: 2 }).format(),
    },
    nonOperationalExpenses: {
      type: String,
      get: (value) => currency(value, { precision: 2 }).format(),
    },
  },
  {
    toJSON: { getters: true },
  }
)

const KPISchema = new Schema(
  {
    totalProfit: {
      type: String,
      get: (value) => currency(value, { precision: 2 }).format(),
    },
    totalRevenue: {
      type: String,
      get: (value) => currency(value, { precision: 2 }).format(),
    },
    totalExpenses: {
      type: String,
      get: (value) => currency(value, { precision: 2 }).format(),
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: String,
        get: (value) => currency(value, { precision: 2 }).format(),

      }
    },
    monthlyData: [MonthSchema],
    dailyData: [DaySchema],
  },
  {
    timestamps: true, toJSON: { getters: true },
  }
)

const KPI = mongoose.model('KPI', KPISchema)

export default KPI