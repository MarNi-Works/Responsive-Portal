import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import { ITableProps } from './types'
// import { HiStar } from 'react-icons/hi'

const Table: React.FC<ITableProps> = (props) => {
  const { className, data, head } = props

  return (
    <StyledTable className={cn('Table', className)}>
      <table>
        <thead>
          <tr>
            {head.map((e: any) => (
              <th key={e.id}>{e.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((e: any) => {
            // const starsImg = () => {
            //   const stars5 = e.stars === '5'
            //   const stars4 = e.stars === '4'
            //   const stars3 = e.stars === '3'
            //   const stars2 = e.stars === '2'
            //   const stars1 = e.stars === '1'

            //   // if (stars5 === true) {
            //     for (var i=0; i < stars5; i++) {
            //       <HiStar/>
            //     }
            //   // }
            // }
            return (
              <tr key={e.id}>
                <td>
                  <div className='img'>{e.img}</div>
                </td>
                <td>
                  <div className='name'>
                    <p>{e.name}</p>
                    <p>{e.rank}</p>
                  </div>
                </td>
                <td>
                  <div>{e.area}</div>
                </td>
                <td>
                  <div className='stars'>{e.stars}</div>
                </td>
                <td>
                  <div>{`${e.points}pts`}</div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </StyledTable>
  )
}

export default Table

const StyledTable = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 0.5rem;
      text-align: left;
      font-size: 14px;
    }

    thead {
      border-bottom: 2px solid #EBEEF8;
      th {
        font-weight: 600;
      }
    }

    tbody {
      tr {
        background-color: transparent;
        border-bottom: 1px dashed #EBEEF8;
        transition: all 0.2s ease;

        &:hover {
          background-color: rgb(235 238 248 / 40%);
        }
      }

      td {
        color: #6E7384;
        &:first-child {
          width: 3.5rem;
        }

        .img {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          background-color: #EBEEF8;

          svg {
            color: #657AC5;
            font-size: 1.5rem;
          }
        }

        .name {
          p {
            &:first-child {
              color: #4A5065;
              font-weight: 600;
            }
            &:last-child {
              color: #6E7384;
            }
          }
        }

        .stars {
          svg {
            font-size: 1rem;
            color: #3E59B7;
          }
        }
      }
    }
  }
`