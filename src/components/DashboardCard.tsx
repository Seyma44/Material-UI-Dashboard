import PropTypes from 'prop-types';
import { forwardRef, ReactNode } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

// header style
const headerSX: Record<string, any> = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};

interface DashboardCardProps {
  border?: boolean;
  boxShadow?: boolean;
  children: ReactNode;
  content?: boolean;
  contentSX?: Record<string, any>;
  darkTitle?: boolean;
  elevation?: number;
  secondary?: ReactNode;
  shadow?: string;
  sx?: Record<string, any>;
  title?: string | ReactNode;
  codeHighlight?: boolean;
}

const DashboardCard = forwardRef<HTMLDivElement, DashboardCardProps>(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentSX = {},
      darkTitle,
      elevation,
      secondary,
      shadow,
      sx = {},
      title,
      codeHighlight,
      ...others
    },
    ref
  ) => {
    const theme = useTheme();
    boxShadow = theme.palette.mode === 'dark' ? boxShadow || true : !!boxShadow;

    return (
      <Card
        elevation={elevation || 0}
        ref={ref}
        {...others}
        sx={{
          border: border ? '1px solid' : 'none',
          borderRadius: 3,
          borderColor: '#ecedee' ,
          boxShadow: '0px 3px 3px -2px rgba(217, 217, 217, 0.20), 0px 3px 4px 0px rgba(248, 248, 248, 0.14), 0px 1px 8px 0px rgba(96, 96, 96, 0.12)',
          ':hover': {
            boxShadow: '0px 3px 3px -2px rgba(217, 217, 217, 0.20), 0px 3px 4px 0px rgba(248, 248, 248, 0.14), 0px 1px 8px 0px rgba(96, 96, 96, 0.12)',
          },
          '& pre': {
            m: 0,
            p: '16px !important',
            fontFamily: theme.typography.fontFamily,
            fontSize: '0.75rem'
          },
          ...sx
        }}
      >
        {/* card header and action */}
        {!darkTitle && title && (
          <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} />
        )}
        {darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />}

        {/* card content */}
        {content && <CardContent sx={contentSX}>{children}</CardContent>}
        {!content && children}
      </Card>
    );
  }
);

DashboardCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  elevation: PropTypes.number,
  secondary: PropTypes.node,
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  codeHighlight: PropTypes.bool,
  content: PropTypes.bool,
  children: PropTypes.node
};

export default DashboardCard;
