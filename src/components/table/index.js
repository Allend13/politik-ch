import React from 'react'
import PropTypes from 'prop-types'
import { Table as AntTable } from 'antd'

import columns from './columns'

const flattenData = data =>
  data.map(item => {
    const {
      id,
      deathDate = null,
      membership: { entryDate = null, leavingDate = null }
    } = item

    return { ...item, key: id, deathDate, entryDate, leavingDate }
  })

const Table = ({ data, loading }) => (
  <div>
    <AntTable loading={loading} columns={columns} dataSource={flattenData(data)} />
  </div>
)

Table.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Table
