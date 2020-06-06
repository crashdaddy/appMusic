import React from 'react';
import Alert  from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';


export default function DescriptionAlerts({infoType}) {
  
  return (
    <div>
      <Alert severity={infoType.severity}>
        <AlertTitle>{infoType.title}</AlertTitle>
        {infoType.text}
      </Alert>    </div>
  );
}

