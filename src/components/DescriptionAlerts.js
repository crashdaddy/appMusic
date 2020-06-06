import React from 'react';
import Alert  from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';


export default function DescriptionAlerts({alertType}) {
  
  return (
    <div>
      <Alert severity={alertType.severity}>
        <AlertTitle>{alertType.title}</AlertTitle>
        {alertType.text}
      </Alert>    </div>
  );
}

