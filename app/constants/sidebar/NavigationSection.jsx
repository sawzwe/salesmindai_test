import React from 'react';
import { List, ListSubheader } from '@mui/material';
import NavigationItems from './NavigationItems';

const NavigationSection = ({ title, items,inboxCount,projectCount,taskCount,changelogVer, ...props }) => {
  return (
    <List
      component="nav"
      subheader={
        <ListSubheader component="div" sx={{ color: "#FEFEFE", backgroundColor: props.theme.palette.primary.main }}>
          {title}
        </ListSubheader>
      }
    >
      {items.map((item, index) => (
        <NavigationItems key={index} item={item} {...props} inboxCount={inboxCount} projectCount={projectCount} taskCount={taskCount} changelogVer={changelogVer} />
      ))}
    </List>
  );
};

export default NavigationSection;
