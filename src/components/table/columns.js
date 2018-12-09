import React from 'react'
import moment from 'moment'
import { Icon } from 'antd'

import css from './table.module.css'

const renderDate = date => (
  <span className={css.date}>{date ? moment(date).format('L') : null}</span>
)

const genderIcons = {
  m: <Icon type="man" />,
  f: <Icon type="woman" />
}
const renderGender = gender => genderIcons[gender]

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    width: 100,
    render: id => <a className={css.id}>{id}</a>
  },
  {
    title: 'Name',
    children: [
      {
        title: 'First name',
        dataIndex: 'firstName',
        key: 'firstName'
      },
      {
        title: 'Last name',
        dataIndex: 'lastName',
        key: 'lastName'
      }
    ]
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    align: 'center',
    render: renderGender
  },
  {
    title: 'Entry Date',
    dataIndex: 'entryDate',
    key: 'entryDate',
    render: renderDate,
    sortOrder: true
  },
  {
    title: 'Leaving Date',
    dataIndex: 'leavingDate',
    key: 'leavingDate',
    render: renderDate
  },
  {
    title: 'Birth Date',
    dataIndex: 'birthDate',
    key: 'birthDate',
    render: renderDate
  },
  {
    title: 'Date Of Death',
    dataIndex: 'deathDate',
    key: 'deathDate',
    render: renderDate
  },
  {
    title: 'Function',
    dataIndex: 'function',
    key: 'function',
    align: 'center'
  },
  {
    title: 'Place Of Citizenship',
    dataIndex: 'placeOfCitizenship',
    key: 'placeOfCitizenship'
  },
  {
    title: 'Updated',
    dataIndex: 'updated',
    key: 'updated',
    render: renderDate
  }
]

export default columns
