import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  const switchHandler = (e)=>{
    console.log(e.target.checked);
    
  }
  return (
    <div>
      <Switch   {...label} defaultChecked  onClick={(e)=>switchHandler(e)} /> 
    </div>
  );
}
