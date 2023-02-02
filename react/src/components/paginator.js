import { Stack, Button, TextField, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

function Paginator({ pageIndex, pageCount }) {
    const navigate = useNavigate();
    const [pageIdx, setPageIdx] = useState(pageIndex);

    function navigateTo(index) {
        navigate(`page/${index}`);
    }

    function onPageIdxChange(e) {
        let idx = e?.currentTarget?.value;
        idx = Math.max(0, Math.min(pageCount, idx));

        setPageIdx(idx);
        navigateTo(idx);
    }

    function onPreviousClick() {
        if (pageIdx > 0) {
            const newIdx = pageIdx - 1;
            setPageIdx(newIdx);
            navigateTo(newIdx);
        }

    }
    function onNextClick() {
        if (pageIdx < pageCount) {
            const newIdx = pageIdx + 1;
            setPageIdx(newIdx);
            navigateTo(newIdx);
        }

    }

    return (
        <Stack component={'footer'} direction={'row'} spacing={1} m={5} justifyContent={'center'}>
            <Button color='inherit' onClick={onPreviousClick}>
                <ArrowBackIosIcon />
            </Button>

            <TextField
                size='small'
                type='number'
                value={pageIdx}
                variant={'standard'}
                onChange={onPageIdxChange}
                onFocus={e => { e.target.select(); }}
                sx={{ input: { textAlign: "center" }, width: 80 }} />
            <Typography variant="body1" align='center'>/ {pageCount}</Typography>
            <Button color='inherit' onClick={onNextClick}>
                <ArrowForwardIosIcon />
            </Button>

        </Stack>
    );
}

export default Paginator;