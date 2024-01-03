import React from 'react';
import './DataTable.scss'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    ChakraProvider,
} from '@chakra-ui/react'
import Pagination from '@mui/material/Pagination';

const DataTable = ({data,tableRows}) => {

    return (
        <section className='table_wrapper'>
            <ChakraProvider>
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                {tableRows?.map((row,index) => {
                                    return <Th key={index} className='column_head'>{row}</Th>
                                })}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data?.map((elem,index) => {
                                return  <Tr key={index} className='table_row'>
                                            <Td>{elem?.name}</Td>
                                            <Td>{elem?.company}</Td>
                                            <Td>{elem?.phone}</Td>
                                            <Td>{elem?.email}</Td>
                                            <Td>{elem?.country}</Td>
                                            <Td>
                                                <span className={elem?.status ? 'active_status' : 'inactive_status'}>
                                                    {elem?.status ? 'Active' : 'Inactive'}
                                                </span>
                                            </Td>
                                        </Tr>
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </ChakraProvider>
            <div className='table_status'>
                <p className='table_status-text'>Showing data 1 to 8 of  256K entries</p>
                <div className='table_status-pagination'>
                    <Pagination count={10} shape="rounded" color="primary" />
                </div>
            </div>  
        </section>
    );
};

export default DataTable;