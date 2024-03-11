import * as React from 'react';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Button } from '@mui/material';

export default function Tickets() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{  borderRadius:'5px' }} />
        </ListItemAvatar>
        <ListItemText
          sx={{ marginRight:1 }}
          primary="Meeting this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Remy Sharp
              </Typography>
              {" — I'll be in your office for checking this…"}
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Button variant="outlined" color="primary">
            Details
          </Button>
        </ListItemAvatar>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{  borderRadius:'5px' }} />
        </ListItemAvatar>
        <ListItemText
        sx={{ marginRight:1 }}
          primary="Diet List"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Travis Howard"
              </Typography>
              {" — I have questions about the new diet list…"}
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Button variant="outlined" color="primary">
            Details
          </Button>
        </ListItemAvatar>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ borderRadius:'5px' }}/>
        </ListItemAvatar>
        <ListItemText
          sx={{ marginRight:1 }}
          primary="Keto Diet"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Cindy Baker
              </Typography>
              {' — Do you have Keto recommendations? Have…'}
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Button variant="outlined" color="primary">
            Details
          </Button>
        </ListItemAvatar>
      </ListItem>
    </List>
  );
}
