import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
}

 

export default function JobAppliedTable({ application }) {

    console.log(application);


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow color="bg-red-500">
                        <TableCell ><div className='font-bold'>Job Title</div></TableCell>
                        <TableCell align="right"><div className='font-bold'>Company Name</div></TableCell>
                        <TableCell align="right"><div className='font-bold'>Job Type</div></TableCell>
                        <TableCell align="right"><div className='font-bold'>Location</div></TableCell>
                        <TableCell align="right"><div className='font-bold'>Status</div></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {application.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.job.title}
                            </TableCell>
                            <TableCell align="right">{row.job.company}</TableCell>
                            <TableCell align="right">{row.job.jobType}</TableCell>
                            <TableCell align="right">{row.job.location.city}, {row.job.location.country}</TableCell>
                            <TableCell align="right"><div className={`capitalize ${row.status === "reject" ? "text-red-500" : "text-green-500"}`}> {row.status}</div></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}