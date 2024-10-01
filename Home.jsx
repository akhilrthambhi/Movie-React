import React from 'react'
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Home = () => {
const arr_obj=[{ListofMovies:'1',MovieName:'Vikram',Director:'Lokesh',Description:'Action Thriller',Language:'Tamil',Year:'2021'},{ListofMovies:'2',MovieName:'Leo',Director:'Lokesh',Description:'Thriller',Language:'Tamil',Year:'2023'},
    {ListofMovies:'3',MovieName:'Drishyam',Director:'Jeethu Joseph',Description:'Thriller',Language:'Malayalam',Year:'2013'},{ListofMovies:'4',MovieName:'Pathaan',Director:'Sidharth',Description:'Action',Language:'Hindi',Year:'2023'},
    {ListofMovies:'5',MovieName:'Avatar',Director:'James Cameron',Description:'Life Elements',Language:'English',Year:'2009'}]
  return (
    <>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>List of Movies</TableCell>
            <TableCell align="right">Movie Name</TableCell>
            <TableCell align="right">Director</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Language</TableCell>
            <TableCell align="right">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr_obj.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ListofMovies}
              </TableCell>
              <TableCell align="right">{row.MovieName}</TableCell>
              <TableCell align="right">{row.Director}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              <TableCell align="right">{row.Language}</TableCell>
              <TableCell align="right">{row.Year}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  )
}

export default Home