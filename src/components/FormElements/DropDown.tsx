import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormHelperText } from '@mui/material';

const DropDown = React.forwardRef((props: any, ref) => {
  const [age, setAge] = React.useState(props.value);

  const handleChange = (event: SelectChangeEvent) => {
    props.onChange(event);
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          {...props}
          name={props.name}
          value={age}
          onChange={handleChange}
          ref={ref}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>{props?.placeholder}</em>
          </MenuItem>
          {props?.options?.map((item: string, idx: number) => (
            <MenuItem key={idx} value={item.toLowerCase()}>{item}</MenuItem>

          ))}
        </Select>
      </FormControl>
      {props.error && <FormHelperText sx={{ color: 'red' }}>{props.error}</FormHelperText>}
    </div>
  );
});

export default DropDown;