import MyForm from "./Form";
import Appbar from './Appbar';
import Box from '@mui/material/Box';
import { Container,Paper} from '@mui/material';

const paperStyle={padding:'0px 0px',width:500,margin:"40px auto"}


function Emregiform() {
    return (
        <Box
        component="form"
        sx={{
          '& > :not(style)': { marginTop: 1 ,marginLeft:1},
        }}
        noValidate
        autoComplete="off"
      >
      <Container>
      <Appbar/>
      <Paper elevation={0} style={paperStyle}>
        <div>
            {/* <h1 className="text-center my-4">Form Register</h1> */}
            {/* <h3 className="text-center fw-light my-4">
                React-Bootstrap, React-Hook-Form e Yup
            </h3> */}
            <MyForm />
        </div>
        </Paper>
        </Container>
      </Box>
    );
}
export default Emregiform;