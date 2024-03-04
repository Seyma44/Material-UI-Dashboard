import * as React from 'react';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Button } from '@mui/material';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{  borderRadius:'5px' }} />
        </ListItemAvatar>
        <ListItemText
          sx={{ marginRight:1 }}
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
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
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
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
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
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
