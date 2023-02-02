import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate, Link, useParams, useLocation, Navigate } from "react-router-dom";
import {
    Box,
    Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Paginator from '../components/paginator';
import { isPositiveInteger } from "../utils/utils";
import axios from "axios";


function Home() {
    const params = useParams();

    const pageSize = 6;
    const [items, setItems] = useState([]);
    const [itemsTotal, setItemsTotal] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const pageIdx = isPositiveInteger(params.pageIdx) ? Number(params.pageIdx) : 0;

    const columnsRef = useRef([
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'name', headerName: 'Title', flex: 1 },
    ]);

    async function loadItems() {
        setIsLoading(true);

        try {

            const { data: result } = await axios.get(`/items/${pageIdx}/${pageSize}`);
            const { count, items } = result;

            if (items) {
                setItems(items);
                setItemsTotal(count);
                setPageCount(Math.ceil(count / pageSize) - 1);

                setIsLoading(false);
            }

        } catch (err) {
            console.log(err);
        }

    }

    // initialize items
    useEffect(() => {
        loadItems();
    }, []);

    // pageIndex change
    useEffect(() => {
        loadItems();
    }, [pageIdx]);

    return (
        <Box>
            <Box component='header' sx={{ my: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h4'>Items</Typography>
            </Box>

            <Box sx={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={items}
                    columns={columnsRef.current}
                    loading={isLoading}
                    page={pageIdx}
                    pageSize={pageSize}
                    rowsPerPageOptions={[pageSize]}
                    rowCount={itemsTotal}
                    filterMode='server'
                    paginationMode='server'
                    disableSelectionOnClick={true}
                    hideFooterPagination
                />
            </Box>

            <Paginator pageIndex={pageIdx} pageCount={pageCount} />

        </Box >
    );
}

export default Home;