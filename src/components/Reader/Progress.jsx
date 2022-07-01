import PropTypes from 'prop-types';
import { CircularProgress, CircularProgressProps } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function Progress({
  current,
  total,
  colors
}) {
  return (
    <div style={{color: `${colors.btnBgColor}`}}>
        <CircularProgressWithLabel colors={colors} style={{ marginRight: '30px', marginLeft: '30px'}} variant="determinate" color="inherit" value={(current + 1)/total * 100} size='100px'/>
    </div>
  );
};


Progress.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  colors: PropTypes.objectOf(PropTypes.string),
};


function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }, colors
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '10px',
          marginLeft: '10px',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color={props.colors.mainText}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}